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
        "word": "OpenCLWrappers"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.CommandQueue",
          "name": "CommandQueue",
          "package": "OpenCLWrappers",
          "source": "src/System-OpenCL-Wrappers-CommandQueue.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers CommandQueue",
          "module": "System.OpenCL.Wrappers.CommandQueue",
          "name": "CommandQueue",
          "package": "OpenCLWrappers",
          "partial": "Command Queue",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-CommandQueue.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.CommandQueue",
          "name": "clCreateCommandQueue",
          "package": "OpenCLWrappers",
          "signature": "Context -\u003e DeviceID -\u003e [CommandQueueProperties] -\u003e IO (Either ErrorCode CommandQueue)",
          "source": "src/System-OpenCL-Wrappers-CommandQueue.html#clCreateCommandQueue",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers CommandQueue",
          "module": "System.OpenCL.Wrappers.CommandQueue",
          "name": "clCreateCommandQueue",
          "normalized": "Context-\u003eDeviceID-\u003e[CommandQueueProperties]-\u003eIO(Either ErrorCode CommandQueue)",
          "package": "OpenCLWrappers",
          "partial": "Create Command Queue",
          "signature": "Context-\u003eDeviceID-\u003e[CommandQueueProperties]-\u003eIO(Either ErrorCode CommandQueue)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-CommandQueue.html#v:clCreateCommandQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.CommandQueue",
          "name": "clGetCommandQueueInfo",
          "package": "OpenCLWrappers",
          "signature": "CommandQueue -\u003e CommandQueueInfo -\u003e IO (Either ErrorCode CLCommandQueueInfoRetval)",
          "source": "src/System-OpenCL-Wrappers-CommandQueue.html#clGetCommandQueueInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers CommandQueue",
          "module": "System.OpenCL.Wrappers.CommandQueue",
          "name": "clGetCommandQueueInfo",
          "normalized": "CommandQueue-\u003eCommandQueueInfo-\u003eIO(Either ErrorCode CLCommandQueueInfoRetval)",
          "package": "OpenCLWrappers",
          "partial": "Get Command Queue Info",
          "signature": "CommandQueue-\u003eCommandQueueInfo-\u003eIO(Either ErrorCode CLCommandQueueInfoRetval)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-CommandQueue.html#v:clGetCommandQueueInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.CommandQueue",
          "name": "clReleaseCommandQueue",
          "package": "OpenCLWrappers",
          "signature": "CommandQueue -\u003e IO (Maybe ErrorCode)",
          "source": "src/System-OpenCL-Wrappers-CommandQueue.html#clReleaseCommandQueue",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers CommandQueue",
          "module": "System.OpenCL.Wrappers.CommandQueue",
          "name": "clReleaseCommandQueue",
          "normalized": "CommandQueue-\u003eIO(Maybe ErrorCode)",
          "package": "OpenCLWrappers",
          "partial": "Release Command Queue",
          "signature": "CommandQueue-\u003eIO(Maybe ErrorCode)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-CommandQueue.html#v:clReleaseCommandQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.CommandQueue",
          "name": "clRetainCommandQueue",
          "package": "OpenCLWrappers",
          "signature": "CommandQueue -\u003e IO (Maybe ErrorCode)",
          "source": "src/System-OpenCL-Wrappers-CommandQueue.html#clRetainCommandQueue",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers CommandQueue",
          "module": "System.OpenCL.Wrappers.CommandQueue",
          "name": "clRetainCommandQueue",
          "normalized": "CommandQueue-\u003eIO(Maybe ErrorCode)",
          "package": "OpenCLWrappers",
          "partial": "Retain Command Queue",
          "signature": "CommandQueue-\u003eIO(Maybe ErrorCode)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-CommandQueue.html#v:clRetainCommandQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Deprecated in C api\u003c/p\u003e\u003c/div\u003e",
          "module": "System.OpenCL.Wrappers.CommandQueue",
          "name": "clSetCommandQueueProperty",
          "package": "OpenCLWrappers",
          "signature": "CommandQueue -\u003e CommandQueueProperties -\u003e Bool -\u003e IO (Either ErrorCode CommandQueueProperties)",
          "source": "src/System-OpenCL-Wrappers-CommandQueue.html#clSetCommandQueueProperty",
          "type": "function"
        },
        "index": {
          "description": "Deprecated Deprecated in api",
          "hierarchy": "System OpenCL Wrappers CommandQueue",
          "module": "System.OpenCL.Wrappers.CommandQueue",
          "name": "clSetCommandQueueProperty",
          "normalized": "CommandQueue-\u003eCommandQueueProperties-\u003eBool-\u003eIO(Either ErrorCode CommandQueueProperties)",
          "package": "OpenCLWrappers",
          "partial": "Set Command Queue Property",
          "signature": "CommandQueue-\u003eCommandQueueProperties-\u003eBool-\u003eIO(Either ErrorCode CommandQueueProperties)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-CommandQueue.html#v:clSetCommandQueueProperty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Context",
          "name": "Context",
          "package": "OpenCLWrappers",
          "source": "src/System-OpenCL-Wrappers-Context.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Context",
          "module": "System.OpenCL.Wrappers.Context",
          "name": "Context",
          "package": "OpenCLWrappers",
          "partial": "Context",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Context.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Context",
          "name": "clCreateContext",
          "package": "OpenCLWrappers",
          "signature": "[ContextProperties] -\u003e [DeviceID] -\u003e Maybe ContextCallback -\u003e Ptr () -\u003e IO (Either ErrorCode Context)",
          "source": "src/System-OpenCL-Wrappers-Context.html#clCreateContext",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Context",
          "module": "System.OpenCL.Wrappers.Context",
          "name": "clCreateContext",
          "normalized": "[ContextProperties]-\u003e[DeviceID]-\u003eMaybe ContextCallback-\u003ePtr()-\u003eIO(Either ErrorCode Context)",
          "package": "OpenCLWrappers",
          "partial": "Create Context",
          "signature": "[ContextProperties]-\u003e[DeviceID]-\u003eMaybe ContextCallback-\u003ePtr()-\u003eIO(Either ErrorCode Context)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Context.html#v:clCreateContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Context",
          "name": "clCreateContextFromType",
          "package": "OpenCLWrappers",
          "signature": "[ContextProperties] -\u003e DeviceType -\u003e Maybe ContextCallback -\u003e Ptr () -\u003e IO (Either ErrorCode Context)",
          "source": "src/System-OpenCL-Wrappers-Context.html#clCreateContextFromType",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Context",
          "module": "System.OpenCL.Wrappers.Context",
          "name": "clCreateContextFromType",
          "normalized": "[ContextProperties]-\u003eDeviceType-\u003eMaybe ContextCallback-\u003ePtr()-\u003eIO(Either ErrorCode Context)",
          "package": "OpenCLWrappers",
          "partial": "Create Context From Type",
          "signature": "[ContextProperties]-\u003eDeviceType-\u003eMaybe ContextCallback-\u003ePtr()-\u003eIO(Either ErrorCode Context)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Context.html#v:clCreateContextFromType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Context",
          "name": "clGetContextInfo",
          "package": "OpenCLWrappers",
          "signature": "Context -\u003e ContextInfo -\u003e IO (Either ErrorCode CLContextInfoRetval)",
          "source": "src/System-OpenCL-Wrappers-Context.html#clGetContextInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Context",
          "module": "System.OpenCL.Wrappers.Context",
          "name": "clGetContextInfo",
          "normalized": "Context-\u003eContextInfo-\u003eIO(Either ErrorCode CLContextInfoRetval)",
          "package": "OpenCLWrappers",
          "partial": "Get Context Info",
          "signature": "Context-\u003eContextInfo-\u003eIO(Either ErrorCode CLContextInfoRetval)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Context.html#v:clGetContextInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Context",
          "name": "clReleaseContext",
          "package": "OpenCLWrappers",
          "signature": "Context -\u003e IO (Maybe ErrorCode)",
          "source": "src/System-OpenCL-Wrappers-Context.html#clReleaseContext",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Context",
          "module": "System.OpenCL.Wrappers.Context",
          "name": "clReleaseContext",
          "normalized": "Context-\u003eIO(Maybe ErrorCode)",
          "package": "OpenCLWrappers",
          "partial": "Release Context",
          "signature": "Context-\u003eIO(Maybe ErrorCode)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Context.html#v:clReleaseContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Context",
          "name": "clRetainContext",
          "package": "OpenCLWrappers",
          "signature": "Context -\u003e IO (Maybe ErrorCode)",
          "source": "src/System-OpenCL-Wrappers-Context.html#clRetainContext",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Context",
          "module": "System.OpenCL.Wrappers.Context",
          "name": "clRetainContext",
          "normalized": "Context-\u003eIO(Maybe ErrorCode)",
          "package": "OpenCLWrappers",
          "partial": "Retain Context",
          "signature": "Context-\u003eIO(Maybe ErrorCode)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Context.html#v:clRetainContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.DeviceInfo",
          "name": "DeviceInfo",
          "package": "OpenCLWrappers",
          "source": "src/System-OpenCL-Wrappers-DeviceInfo.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers DeviceInfo",
          "module": "System.OpenCL.Wrappers.DeviceInfo",
          "name": "DeviceInfo",
          "package": "OpenCLWrappers",
          "partial": "Device Info",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-DeviceInfo.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.DeviceInfo",
          "name": "clGetDeviceIDs",
          "package": "OpenCLWrappers",
          "signature": "PlatformID -\u003e DeviceType -\u003e IO (Either ErrorCode [DeviceID])",
          "source": "src/System-OpenCL-Wrappers-DeviceInfo.html#clGetDeviceIDs",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers DeviceInfo",
          "module": "System.OpenCL.Wrappers.DeviceInfo",
          "name": "clGetDeviceIDs",
          "normalized": "PlatformID-\u003eDeviceType-\u003eIO(Either ErrorCode[DeviceID])",
          "package": "OpenCLWrappers",
          "partial": "Get Device IDs",
          "signature": "PlatformID-\u003eDeviceType-\u003eIO(Either ErrorCode[DeviceID])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-DeviceInfo.html#v:clGetDeviceIDs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.DeviceInfo",
          "name": "clGetDeviceInfo",
          "package": "OpenCLWrappers",
          "signature": "DeviceID -\u003e DeviceInfo -\u003e IO (Either ErrorCode CLDeviceInfoRetval)",
          "source": "src/System-OpenCL-Wrappers-DeviceInfo.html#clGetDeviceInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers DeviceInfo",
          "module": "System.OpenCL.Wrappers.DeviceInfo",
          "name": "clGetDeviceInfo",
          "normalized": "DeviceID-\u003eDeviceInfo-\u003eIO(Either ErrorCode CLDeviceInfoRetval)",
          "package": "OpenCLWrappers",
          "partial": "Get Device Info",
          "signature": "DeviceID-\u003eDeviceInfo-\u003eIO(Either ErrorCode CLDeviceInfoRetval)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-DeviceInfo.html#v:clGetDeviceInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA collection of all the error codes that OpenCL functions return \n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.OpenCL.Wrappers.Errors",
          "name": "Errors",
          "package": "OpenCLWrappers",
          "source": "src/System-OpenCL-Wrappers-Errors.html",
          "type": "module"
        },
        "index": {
          "description": "collection of all the error codes that OpenCL functions return",
          "hierarchy": "System OpenCL Wrappers Errors",
          "module": "System.OpenCL.Wrappers.Errors",
          "name": "Errors",
          "package": "OpenCLWrappers",
          "partial": "Errors",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Errors.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Errors",
          "name": "clBuildProgramFailure",
          "package": "OpenCLWrappers",
          "signature": "ErrorCode",
          "source": "src/System-OpenCL-Wrappers-Errors.html#clBuildProgramFailure",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Errors",
          "module": "System.OpenCL.Wrappers.Errors",
          "name": "clBuildProgramFailure",
          "package": "OpenCLWrappers",
          "partial": "Build Program Failure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Errors.html#v:clBuildProgramFailure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Errors",
          "name": "clCompilerNotAvailable",
          "package": "OpenCLWrappers",
          "signature": "ErrorCode",
          "source": "src/System-OpenCL-Wrappers-Errors.html#clCompilerNotAvailable",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Errors",
          "module": "System.OpenCL.Wrappers.Errors",
          "name": "clCompilerNotAvailable",
          "package": "OpenCLWrappers",
          "partial": "Compiler Not Available",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Errors.html#v:clCompilerNotAvailable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Errors",
          "name": "clDeviceNotAvailable",
          "package": "OpenCLWrappers",
          "signature": "ErrorCode",
          "source": "src/System-OpenCL-Wrappers-Errors.html#clDeviceNotAvailable",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Errors",
          "module": "System.OpenCL.Wrappers.Errors",
          "name": "clDeviceNotAvailable",
          "package": "OpenCLWrappers",
          "partial": "Device Not Available",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Errors.html#v:clDeviceNotAvailable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Errors",
          "name": "clDeviceNotFound",
          "package": "OpenCLWrappers",
          "signature": "ErrorCode",
          "source": "src/System-OpenCL-Wrappers-Errors.html#clDeviceNotFound",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Errors",
          "module": "System.OpenCL.Wrappers.Errors",
          "name": "clDeviceNotFound",
          "package": "OpenCLWrappers",
          "partial": "Device Not Found",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Errors.html#v:clDeviceNotFound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Errors",
          "name": "clImageFormatMismatch",
          "package": "OpenCLWrappers",
          "signature": "ErrorCode",
          "source": "src/System-OpenCL-Wrappers-Errors.html#clImageFormatMismatch",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Errors",
          "module": "System.OpenCL.Wrappers.Errors",
          "name": "clImageFormatMismatch",
          "package": "OpenCLWrappers",
          "partial": "Image Format Mismatch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Errors.html#v:clImageFormatMismatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Errors",
          "name": "clImageFormatNotSupported",
          "package": "OpenCLWrappers",
          "signature": "ErrorCode",
          "source": "src/System-OpenCL-Wrappers-Errors.html#clImageFormatNotSupported",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Errors",
          "module": "System.OpenCL.Wrappers.Errors",
          "name": "clImageFormatNotSupported",
          "package": "OpenCLWrappers",
          "partial": "Image Format Not Supported",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Errors.html#v:clImageFormatNotSupported"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Errors",
          "name": "clInvalidArgIndex",
          "package": "OpenCLWrappers",
          "signature": "ErrorCode",
          "source": "src/System-OpenCL-Wrappers-Errors.html#clInvalidArgIndex",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Errors",
          "module": "System.OpenCL.Wrappers.Errors",
          "name": "clInvalidArgIndex",
          "package": "OpenCLWrappers",
          "partial": "Invalid Arg Index",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Errors.html#v:clInvalidArgIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Errors",
          "name": "clInvalidArgSize",
          "package": "OpenCLWrappers",
          "signature": "ErrorCode",
          "source": "src/System-OpenCL-Wrappers-Errors.html#clInvalidArgSize",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Errors",
          "module": "System.OpenCL.Wrappers.Errors",
          "name": "clInvalidArgSize",
          "package": "OpenCLWrappers",
          "partial": "Invalid Arg Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Errors.html#v:clInvalidArgSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Errors",
          "name": "clInvalidArgValue",
          "package": "OpenCLWrappers",
          "signature": "ErrorCode",
          "source": "src/System-OpenCL-Wrappers-Errors.html#clInvalidArgValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Errors",
          "module": "System.OpenCL.Wrappers.Errors",
          "name": "clInvalidArgValue",
          "package": "OpenCLWrappers",
          "partial": "Invalid Arg Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Errors.html#v:clInvalidArgValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Errors",
          "name": "clInvalidBinary",
          "package": "OpenCLWrappers",
          "signature": "ErrorCode",
          "source": "src/System-OpenCL-Wrappers-Errors.html#clInvalidBinary",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Errors",
          "module": "System.OpenCL.Wrappers.Errors",
          "name": "clInvalidBinary",
          "package": "OpenCLWrappers",
          "partial": "Invalid Binary",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Errors.html#v:clInvalidBinary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Errors",
          "name": "clInvalidBufferSize",
          "package": "OpenCLWrappers",
          "signature": "ErrorCode",
          "source": "src/System-OpenCL-Wrappers-Errors.html#clInvalidBufferSize",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Errors",
          "module": "System.OpenCL.Wrappers.Errors",
          "name": "clInvalidBufferSize",
          "package": "OpenCLWrappers",
          "partial": "Invalid Buffer Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Errors.html#v:clInvalidBufferSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Errors",
          "name": "clInvalidBuildOptions",
          "package": "OpenCLWrappers",
          "signature": "ErrorCode",
          "source": "src/System-OpenCL-Wrappers-Errors.html#clInvalidBuildOptions",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Errors",
          "module": "System.OpenCL.Wrappers.Errors",
          "name": "clInvalidBuildOptions",
          "package": "OpenCLWrappers",
          "partial": "Invalid Build Options",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Errors.html#v:clInvalidBuildOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Errors",
          "name": "clInvalidCommandQueue",
          "package": "OpenCLWrappers",
          "signature": "ErrorCode",
          "source": "src/System-OpenCL-Wrappers-Errors.html#clInvalidCommandQueue",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Errors",
          "module": "System.OpenCL.Wrappers.Errors",
          "name": "clInvalidCommandQueue",
          "package": "OpenCLWrappers",
          "partial": "Invalid Command Queue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Errors.html#v:clInvalidCommandQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Errors",
          "name": "clInvalidContext",
          "package": "OpenCLWrappers",
          "signature": "ErrorCode",
          "source": "src/System-OpenCL-Wrappers-Errors.html#clInvalidContext",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Errors",
          "module": "System.OpenCL.Wrappers.Errors",
          "name": "clInvalidContext",
          "package": "OpenCLWrappers",
          "partial": "Invalid Context",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Errors.html#v:clInvalidContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Errors",
          "name": "clInvalidDevice",
          "package": "OpenCLWrappers",
          "signature": "ErrorCode",
          "source": "src/System-OpenCL-Wrappers-Errors.html#clInvalidDevice",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Errors",
          "module": "System.OpenCL.Wrappers.Errors",
          "name": "clInvalidDevice",
          "package": "OpenCLWrappers",
          "partial": "Invalid Device",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Errors.html#v:clInvalidDevice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Errors",
          "name": "clInvalidDeviceType",
          "package": "OpenCLWrappers",
          "signature": "ErrorCode",
          "source": "src/System-OpenCL-Wrappers-Errors.html#clInvalidDeviceType",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Errors",
          "module": "System.OpenCL.Wrappers.Errors",
          "name": "clInvalidDeviceType",
          "package": "OpenCLWrappers",
          "partial": "Invalid Device Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Errors.html#v:clInvalidDeviceType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Errors",
          "name": "clInvalidEvent",
          "package": "OpenCLWrappers",
          "signature": "ErrorCode",
          "source": "src/System-OpenCL-Wrappers-Errors.html#clInvalidEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Errors",
          "module": "System.OpenCL.Wrappers.Errors",
          "name": "clInvalidEvent",
          "package": "OpenCLWrappers",
          "partial": "Invalid Event",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Errors.html#v:clInvalidEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Errors",
          "name": "clInvalidEventWaitList",
          "package": "OpenCLWrappers",
          "signature": "ErrorCode",
          "source": "src/System-OpenCL-Wrappers-Errors.html#clInvalidEventWaitList",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Errors",
          "module": "System.OpenCL.Wrappers.Errors",
          "name": "clInvalidEventWaitList",
          "package": "OpenCLWrappers",
          "partial": "Invalid Event Wait List",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Errors.html#v:clInvalidEventWaitList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Errors",
          "name": "clInvalidGLObject",
          "package": "OpenCLWrappers",
          "signature": "ErrorCode",
          "source": "src/System-OpenCL-Wrappers-Errors.html#clInvalidGLObject",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Errors",
          "module": "System.OpenCL.Wrappers.Errors",
          "name": "clInvalidGLObject",
          "package": "OpenCLWrappers",
          "partial": "Invalid GLObject",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Errors.html#v:clInvalidGLObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Errors",
          "name": "clInvalidGlobalOffset",
          "package": "OpenCLWrappers",
          "signature": "ErrorCode",
          "source": "src/System-OpenCL-Wrappers-Errors.html#clInvalidGlobalOffset",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Errors",
          "module": "System.OpenCL.Wrappers.Errors",
          "name": "clInvalidGlobalOffset",
          "package": "OpenCLWrappers",
          "partial": "Invalid Global Offset",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Errors.html#v:clInvalidGlobalOffset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Errors",
          "name": "clInvalidHostPtr",
          "package": "OpenCLWrappers",
          "signature": "ErrorCode",
          "source": "src/System-OpenCL-Wrappers-Errors.html#clInvalidHostPtr",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Errors",
          "module": "System.OpenCL.Wrappers.Errors",
          "name": "clInvalidHostPtr",
          "package": "OpenCLWrappers",
          "partial": "Invalid Host Ptr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Errors.html#v:clInvalidHostPtr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Errors",
          "name": "clInvalidImageFormatDescriptor",
          "package": "OpenCLWrappers",
          "signature": "ErrorCode",
          "source": "src/System-OpenCL-Wrappers-Errors.html#clInvalidImageFormatDescriptor",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Errors",
          "module": "System.OpenCL.Wrappers.Errors",
          "name": "clInvalidImageFormatDescriptor",
          "package": "OpenCLWrappers",
          "partial": "Invalid Image Format Descriptor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Errors.html#v:clInvalidImageFormatDescriptor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Errors",
          "name": "clInvalidImageSize",
          "package": "OpenCLWrappers",
          "signature": "ErrorCode",
          "source": "src/System-OpenCL-Wrappers-Errors.html#clInvalidImageSize",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Errors",
          "module": "System.OpenCL.Wrappers.Errors",
          "name": "clInvalidImageSize",
          "package": "OpenCLWrappers",
          "partial": "Invalid Image Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Errors.html#v:clInvalidImageSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Errors",
          "name": "clInvalidKernel",
          "package": "OpenCLWrappers",
          "signature": "ErrorCode",
          "source": "src/System-OpenCL-Wrappers-Errors.html#clInvalidKernel",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Errors",
          "module": "System.OpenCL.Wrappers.Errors",
          "name": "clInvalidKernel",
          "package": "OpenCLWrappers",
          "partial": "Invalid Kernel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Errors.html#v:clInvalidKernel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Errors",
          "name": "clInvalidKernelArgs",
          "package": "OpenCLWrappers",
          "signature": "ErrorCode",
          "source": "src/System-OpenCL-Wrappers-Errors.html#clInvalidKernelArgs",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Errors",
          "module": "System.OpenCL.Wrappers.Errors",
          "name": "clInvalidKernelArgs",
          "package": "OpenCLWrappers",
          "partial": "Invalid Kernel Args",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Errors.html#v:clInvalidKernelArgs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Errors",
          "name": "clInvalidKernelDefinition",
          "package": "OpenCLWrappers",
          "signature": "ErrorCode",
          "source": "src/System-OpenCL-Wrappers-Errors.html#clInvalidKernelDefinition",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Errors",
          "module": "System.OpenCL.Wrappers.Errors",
          "name": "clInvalidKernelDefinition",
          "package": "OpenCLWrappers",
          "partial": "Invalid Kernel Definition",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Errors.html#v:clInvalidKernelDefinition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Errors",
          "name": "clInvalidKernelName",
          "package": "OpenCLWrappers",
          "signature": "ErrorCode",
          "source": "src/System-OpenCL-Wrappers-Errors.html#clInvalidKernelName",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Errors",
          "module": "System.OpenCL.Wrappers.Errors",
          "name": "clInvalidKernelName",
          "package": "OpenCLWrappers",
          "partial": "Invalid Kernel Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Errors.html#v:clInvalidKernelName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Errors",
          "name": "clInvalidMemObject",
          "package": "OpenCLWrappers",
          "signature": "ErrorCode",
          "source": "src/System-OpenCL-Wrappers-Errors.html#clInvalidMemObject",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Errors",
          "module": "System.OpenCL.Wrappers.Errors",
          "name": "clInvalidMemObject",
          "package": "OpenCLWrappers",
          "partial": "Invalid Mem Object",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Errors.html#v:clInvalidMemObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Errors",
          "name": "clInvalidMipLevel",
          "package": "OpenCLWrappers",
          "signature": "ErrorCode",
          "source": "src/System-OpenCL-Wrappers-Errors.html#clInvalidMipLevel",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Errors",
          "module": "System.OpenCL.Wrappers.Errors",
          "name": "clInvalidMipLevel",
          "package": "OpenCLWrappers",
          "partial": "Invalid Mip Level",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Errors.html#v:clInvalidMipLevel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Errors",
          "name": "clInvalidOperation",
          "package": "OpenCLWrappers",
          "signature": "ErrorCode",
          "source": "src/System-OpenCL-Wrappers-Errors.html#clInvalidOperation",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Errors",
          "module": "System.OpenCL.Wrappers.Errors",
          "name": "clInvalidOperation",
          "package": "OpenCLWrappers",
          "partial": "Invalid Operation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Errors.html#v:clInvalidOperation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Errors",
          "name": "clInvalidPlatform",
          "package": "OpenCLWrappers",
          "signature": "ErrorCode",
          "source": "src/System-OpenCL-Wrappers-Errors.html#clInvalidPlatform",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Errors",
          "module": "System.OpenCL.Wrappers.Errors",
          "name": "clInvalidPlatform",
          "package": "OpenCLWrappers",
          "partial": "Invalid Platform",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Errors.html#v:clInvalidPlatform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Errors",
          "name": "clInvalidProgram",
          "package": "OpenCLWrappers",
          "signature": "ErrorCode",
          "source": "src/System-OpenCL-Wrappers-Errors.html#clInvalidProgram",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Errors",
          "module": "System.OpenCL.Wrappers.Errors",
          "name": "clInvalidProgram",
          "package": "OpenCLWrappers",
          "partial": "Invalid Program",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Errors.html#v:clInvalidProgram"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Errors",
          "name": "clInvalidProgramExecutable",
          "package": "OpenCLWrappers",
          "signature": "ErrorCode",
          "source": "src/System-OpenCL-Wrappers-Errors.html#clInvalidProgramExecutable",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Errors",
          "module": "System.OpenCL.Wrappers.Errors",
          "name": "clInvalidProgramExecutable",
          "package": "OpenCLWrappers",
          "partial": "Invalid Program Executable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Errors.html#v:clInvalidProgramExecutable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Errors",
          "name": "clInvalidQueueProperties",
          "package": "OpenCLWrappers",
          "signature": "ErrorCode",
          "source": "src/System-OpenCL-Wrappers-Errors.html#clInvalidQueueProperties",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Errors",
          "module": "System.OpenCL.Wrappers.Errors",
          "name": "clInvalidQueueProperties",
          "package": "OpenCLWrappers",
          "partial": "Invalid Queue Properties",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Errors.html#v:clInvalidQueueProperties"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Errors",
          "name": "clInvalidSampler",
          "package": "OpenCLWrappers",
          "signature": "ErrorCode",
          "source": "src/System-OpenCL-Wrappers-Errors.html#clInvalidSampler",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Errors",
          "module": "System.OpenCL.Wrappers.Errors",
          "name": "clInvalidSampler",
          "package": "OpenCLWrappers",
          "partial": "Invalid Sampler",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Errors.html#v:clInvalidSampler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Errors",
          "name": "clInvalidValue",
          "package": "OpenCLWrappers",
          "signature": "ErrorCode",
          "source": "src/System-OpenCL-Wrappers-Errors.html#clInvalidValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Errors",
          "module": "System.OpenCL.Wrappers.Errors",
          "name": "clInvalidValue",
          "package": "OpenCLWrappers",
          "partial": "Invalid Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Errors.html#v:clInvalidValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Errors",
          "name": "clInvalidWorkDimension",
          "package": "OpenCLWrappers",
          "signature": "ErrorCode",
          "source": "src/System-OpenCL-Wrappers-Errors.html#clInvalidWorkDimension",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Errors",
          "module": "System.OpenCL.Wrappers.Errors",
          "name": "clInvalidWorkDimension",
          "package": "OpenCLWrappers",
          "partial": "Invalid Work Dimension",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Errors.html#v:clInvalidWorkDimension"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Errors",
          "name": "clInvalidWorkGroupSize",
          "package": "OpenCLWrappers",
          "signature": "ErrorCode",
          "source": "src/System-OpenCL-Wrappers-Errors.html#clInvalidWorkGroupSize",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Errors",
          "module": "System.OpenCL.Wrappers.Errors",
          "name": "clInvalidWorkGroupSize",
          "package": "OpenCLWrappers",
          "partial": "Invalid Work Group Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Errors.html#v:clInvalidWorkGroupSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Errors",
          "name": "clInvalidWorkItemSize",
          "package": "OpenCLWrappers",
          "signature": "ErrorCode",
          "source": "src/System-OpenCL-Wrappers-Errors.html#clInvalidWorkItemSize",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Errors",
          "module": "System.OpenCL.Wrappers.Errors",
          "name": "clInvalidWorkItemSize",
          "package": "OpenCLWrappers",
          "partial": "Invalid Work Item Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Errors.html#v:clInvalidWorkItemSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Errors",
          "name": "clMapFailure",
          "package": "OpenCLWrappers",
          "signature": "ErrorCode",
          "source": "src/System-OpenCL-Wrappers-Errors.html#clMapFailure",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Errors",
          "module": "System.OpenCL.Wrappers.Errors",
          "name": "clMapFailure",
          "package": "OpenCLWrappers",
          "partial": "Map Failure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Errors.html#v:clMapFailure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Errors",
          "name": "clMemCopyOverlap",
          "package": "OpenCLWrappers",
          "signature": "ErrorCode",
          "source": "src/System-OpenCL-Wrappers-Errors.html#clMemCopyOverlap",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Errors",
          "module": "System.OpenCL.Wrappers.Errors",
          "name": "clMemCopyOverlap",
          "package": "OpenCLWrappers",
          "partial": "Mem Copy Overlap",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Errors.html#v:clMemCopyOverlap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Errors",
          "name": "clMemObjectAllocationFailure",
          "package": "OpenCLWrappers",
          "signature": "ErrorCode",
          "source": "src/System-OpenCL-Wrappers-Errors.html#clMemObjectAllocationFailure",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Errors",
          "module": "System.OpenCL.Wrappers.Errors",
          "name": "clMemObjectAllocationFailure",
          "package": "OpenCLWrappers",
          "partial": "Mem Object Allocation Failure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Errors.html#v:clMemObjectAllocationFailure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Errors",
          "name": "clOutOfHostMemory",
          "package": "OpenCLWrappers",
          "signature": "ErrorCode",
          "source": "src/System-OpenCL-Wrappers-Errors.html#clOutOfHostMemory",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Errors",
          "module": "System.OpenCL.Wrappers.Errors",
          "name": "clOutOfHostMemory",
          "package": "OpenCLWrappers",
          "partial": "Out Of Host Memory",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Errors.html#v:clOutOfHostMemory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Errors",
          "name": "clOutOfResources",
          "package": "OpenCLWrappers",
          "signature": "ErrorCode",
          "source": "src/System-OpenCL-Wrappers-Errors.html#clOutOfResources",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Errors",
          "module": "System.OpenCL.Wrappers.Errors",
          "name": "clOutOfResources",
          "package": "OpenCLWrappers",
          "partial": "Out Of Resources",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Errors.html#v:clOutOfResources"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Errors",
          "name": "clProfilingInfoNotAvailable",
          "package": "OpenCLWrappers",
          "signature": "ErrorCode",
          "source": "src/System-OpenCL-Wrappers-Errors.html#clProfilingInfoNotAvailable",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Errors",
          "module": "System.OpenCL.Wrappers.Errors",
          "name": "clProfilingInfoNotAvailable",
          "package": "OpenCLWrappers",
          "partial": "Profiling Info Not Available",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Errors.html#v:clProfilingInfoNotAvailable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Errors",
          "name": "clSuccess",
          "package": "OpenCLWrappers",
          "signature": "ErrorCode",
          "source": "src/System-OpenCL-Wrappers-Errors.html#clSuccess",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Errors",
          "module": "System.OpenCL.Wrappers.Errors",
          "name": "clSuccess",
          "package": "OpenCLWrappers",
          "partial": "Success",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Errors.html#v:clSuccess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eModule for querying extensions \n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.OpenCL.Wrappers.Etc",
          "name": "Etc",
          "package": "OpenCLWrappers",
          "source": "src/System-OpenCL-Wrappers-Etc.html",
          "type": "module"
        },
        "index": {
          "description": "Module for querying extensions",
          "hierarchy": "System OpenCL Wrappers Etc",
          "module": "System.OpenCL.Wrappers.Etc",
          "name": "Etc",
          "package": "OpenCLWrappers",
          "partial": "Etc",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Etc.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Etc",
          "name": "clGetExtensionFunctionAddress",
          "package": "OpenCLWrappers",
          "signature": "String -\u003e IO (Ptr ())",
          "source": "src/System-OpenCL-Wrappers-Etc.html#clGetExtensionFunctionAddress",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Etc",
          "module": "System.OpenCL.Wrappers.Etc",
          "name": "clGetExtensionFunctionAddress",
          "normalized": "String-\u003eIO(Ptr())",
          "package": "OpenCLWrappers",
          "partial": "Get Extension Function Address",
          "signature": "String-\u003eIO(Ptr())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Etc.html#v:clGetExtensionFunctionAddress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.EventObject",
          "name": "EventObject",
          "package": "OpenCLWrappers",
          "source": "src/System-OpenCL-Wrappers-EventObject.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers EventObject",
          "module": "System.OpenCL.Wrappers.EventObject",
          "name": "EventObject",
          "package": "OpenCLWrappers",
          "partial": "Event Object",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-EventObject.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.EventObject",
          "name": "clGetEventInfo",
          "package": "OpenCLWrappers",
          "signature": "Event -\u003e EventInfo -\u003e IO (Either ErrorCode CLEventInfoRetval)",
          "source": "src/System-OpenCL-Wrappers-EventObject.html#clGetEventInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers EventObject",
          "module": "System.OpenCL.Wrappers.EventObject",
          "name": "clGetEventInfo",
          "normalized": "Event-\u003eEventInfo-\u003eIO(Either ErrorCode CLEventInfoRetval)",
          "package": "OpenCLWrappers",
          "partial": "Get Event Info",
          "signature": "Event-\u003eEventInfo-\u003eIO(Either ErrorCode CLEventInfoRetval)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-EventObject.html#v:clGetEventInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.EventObject",
          "name": "clGetEventProfilingInfo",
          "package": "OpenCLWrappers",
          "signature": "Event -\u003e ProfilingInfo -\u003e IO (Either ErrorCode CLEventProfilingInfoRetval)",
          "source": "src/System-OpenCL-Wrappers-EventObject.html#clGetEventProfilingInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers EventObject",
          "module": "System.OpenCL.Wrappers.EventObject",
          "name": "clGetEventProfilingInfo",
          "normalized": "Event-\u003eProfilingInfo-\u003eIO(Either ErrorCode CLEventProfilingInfoRetval)",
          "package": "OpenCLWrappers",
          "partial": "Get Event Profiling Info",
          "signature": "Event-\u003eProfilingInfo-\u003eIO(Either ErrorCode CLEventProfilingInfoRetval)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-EventObject.html#v:clGetEventProfilingInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.EventObject",
          "name": "clReleaseEvent",
          "package": "OpenCLWrappers",
          "signature": "Event -\u003e IO (Maybe ErrorCode)",
          "source": "src/System-OpenCL-Wrappers-EventObject.html#clReleaseEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers EventObject",
          "module": "System.OpenCL.Wrappers.EventObject",
          "name": "clReleaseEvent",
          "normalized": "Event-\u003eIO(Maybe ErrorCode)",
          "package": "OpenCLWrappers",
          "partial": "Release Event",
          "signature": "Event-\u003eIO(Maybe ErrorCode)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-EventObject.html#v:clReleaseEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.EventObject",
          "name": "clRetainEvent",
          "package": "OpenCLWrappers",
          "signature": "Event -\u003e IO (Maybe ErrorCode)",
          "source": "src/System-OpenCL-Wrappers-EventObject.html#clRetainEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers EventObject",
          "module": "System.OpenCL.Wrappers.EventObject",
          "name": "clRetainEvent",
          "normalized": "Event-\u003eIO(Maybe ErrorCode)",
          "package": "OpenCLWrappers",
          "partial": "Retain Event",
          "signature": "Event-\u003eIO(Maybe ErrorCode)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-EventObject.html#v:clRetainEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.EventObject",
          "name": "clWaitForEvents",
          "package": "OpenCLWrappers",
          "signature": "[Event] -\u003e IO (Maybe ErrorCode)",
          "source": "src/System-OpenCL-Wrappers-EventObject.html#clWaitForEvents",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers EventObject",
          "module": "System.OpenCL.Wrappers.EventObject",
          "name": "clWaitForEvents",
          "normalized": "[Event]-\u003eIO(Maybe ErrorCode)",
          "package": "OpenCLWrappers",
          "partial": "Wait For Events",
          "signature": "[Event]-\u003eIO(Maybe ErrorCode)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-EventObject.html#v:clWaitForEvents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.FlushFinish",
          "name": "FlushFinish",
          "package": "OpenCLWrappers",
          "source": "src/System-OpenCL-Wrappers-FlushFinish.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers FlushFinish",
          "module": "System.OpenCL.Wrappers.FlushFinish",
          "name": "FlushFinish",
          "package": "OpenCLWrappers",
          "partial": "Flush Finish",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-FlushFinish.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.FlushFinish",
          "name": "clFinish",
          "package": "OpenCLWrappers",
          "signature": "CommandQueue -\u003e IO (Maybe ErrorCode)",
          "source": "src/System-OpenCL-Wrappers-FlushFinish.html#clFinish",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers FlushFinish",
          "module": "System.OpenCL.Wrappers.FlushFinish",
          "name": "clFinish",
          "normalized": "CommandQueue-\u003eIO(Maybe ErrorCode)",
          "package": "OpenCLWrappers",
          "partial": "Finish",
          "signature": "CommandQueue-\u003eIO(Maybe ErrorCode)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-FlushFinish.html#v:clFinish"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.FlushFinish",
          "name": "clFlush",
          "package": "OpenCLWrappers",
          "signature": "CommandQueue -\u003e IO (Maybe ErrorCode)",
          "source": "src/System-OpenCL-Wrappers-FlushFinish.html#clFlush",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers FlushFinish",
          "module": "System.OpenCL.Wrappers.FlushFinish",
          "name": "clFlush",
          "normalized": "CommandQueue-\u003eIO(Maybe ErrorCode)",
          "package": "OpenCLWrappers",
          "partial": "Flush",
          "signature": "CommandQueue-\u003eIO(Maybe ErrorCode)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-FlushFinish.html#v:clFlush"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSome helper functions that may or may not be useful to anyone. \n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.OpenCL.Wrappers.Helpers",
          "name": "Helpers",
          "package": "OpenCLWrappers",
          "source": "src/System-OpenCL-Wrappers-Helpers.html",
          "type": "module"
        },
        "index": {
          "description": "Some helper functions that may or may not be useful to anyone",
          "hierarchy": "System OpenCL Wrappers Helpers",
          "module": "System.OpenCL.Wrappers.Helpers",
          "name": "Helpers",
          "package": "OpenCLWrappers",
          "partial": "Helpers",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Helpers.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Helpers",
          "name": "KernelParameter",
          "package": "OpenCLWrappers",
          "source": "src/System-OpenCL-Wrappers-Helpers.html#KernelParameter",
          "type": "data"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Helpers",
          "module": "System.OpenCL.Wrappers.Helpers",
          "name": "KernelParameter",
          "package": "OpenCLWrappers",
          "partial": "Kernel Parameter",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Helpers.html#t:KernelParameter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Helpers",
          "name": "KParam",
          "package": "OpenCLWrappers",
          "signature": "KParam s",
          "source": "src/System-OpenCL-Wrappers-Helpers.html#KernelParameter",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Helpers",
          "module": "System.OpenCL.Wrappers.Helpers",
          "name": "KParam",
          "package": "OpenCLWrappers",
          "partial": "KParam",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Helpers.html#v:KParam"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Helpers",
          "name": "buildProgram",
          "package": "OpenCLWrappers",
          "signature": "String -\u003e String -\u003e Context -\u003e DeviceID -\u003e IO (Either (ErrorCode, String) Program)",
          "source": "src/System-OpenCL-Wrappers-Helpers.html#buildProgram",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Helpers",
          "module": "System.OpenCL.Wrappers.Helpers",
          "name": "buildProgram",
          "normalized": "String-\u003eString-\u003eContext-\u003eDeviceID-\u003eIO(Either(ErrorCode,String)Program)",
          "package": "OpenCLWrappers",
          "partial": "Program",
          "signature": "String-\u003eString-\u003eContext-\u003eDeviceID-\u003eIO(Either(ErrorCode,String)Program)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Helpers.html#v:buildProgram"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Helpers",
          "name": "createAsyncKernelWithParams",
          "package": "OpenCLWrappers",
          "signature": "Program -\u003e CommandQueue -\u003e String -\u003e [Int] -\u003e [Int] -\u003e [KernelParameter] -\u003e IO (Either ErrorCode ([Event] -\u003e IO (Either ErrorCode Event)))",
          "source": "src/System-OpenCL-Wrappers-Helpers.html#createAsyncKernelWithParams",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Helpers",
          "module": "System.OpenCL.Wrappers.Helpers",
          "name": "createAsyncKernelWithParams",
          "normalized": "Program-\u003eCommandQueue-\u003eString-\u003e[Int]-\u003e[Int]-\u003e[KernelParameter]-\u003eIO(Either ErrorCode([Event]-\u003eIO(Either ErrorCode Event)))",
          "package": "OpenCLWrappers",
          "partial": "Async Kernel With Params",
          "signature": "Program-\u003eCommandQueue-\u003eString-\u003e[Int]-\u003e[Int]-\u003e[KernelParameter]-\u003eIO(Either ErrorCode([Event]-\u003eIO(Either ErrorCode Event)))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Helpers.html#v:createAsyncKernelWithParams"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Helpers",
          "name": "createSyncKernel",
          "package": "OpenCLWrappers",
          "signature": "Program -\u003e CommandQueue -\u003e String -\u003e [Int] -\u003e [Int] -\u003e IO (Either ErrorCode ([KernelParameter] -\u003e IO (Maybe ErrorCode)))",
          "source": "src/System-OpenCL-Wrappers-Helpers.html#createSyncKernel",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Helpers",
          "module": "System.OpenCL.Wrappers.Helpers",
          "name": "createSyncKernel",
          "normalized": "Program-\u003eCommandQueue-\u003eString-\u003e[Int]-\u003e[Int]-\u003eIO(Either ErrorCode([KernelParameter]-\u003eIO(Maybe ErrorCode)))",
          "package": "OpenCLWrappers",
          "partial": "Sync Kernel",
          "signature": "Program-\u003eCommandQueue-\u003eString-\u003e[Int]-\u003e[Int]-\u003eIO(Either ErrorCode([KernelParameter]-\u003eIO(Maybe ErrorCode)))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Helpers.html#v:createSyncKernel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Helpers",
          "name": "errorCodeToString",
          "package": "OpenCLWrappers",
          "signature": "ErrorCode -\u003e String",
          "source": "src/System-OpenCL-Wrappers-Helpers.html#errorCodeToString",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Helpers",
          "module": "System.OpenCL.Wrappers.Helpers",
          "name": "errorCodeToString",
          "normalized": "ErrorCode-\u003eString",
          "package": "OpenCLWrappers",
          "partial": "Code To String",
          "signature": "ErrorCode-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Helpers.html#v:errorCodeToString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Helpers",
          "name": "pushKernelParams",
          "package": "OpenCLWrappers",
          "signature": "Kernel -\u003e CLuint -\u003e [KernelParameter] -\u003e IO (Maybe ErrorCode)",
          "source": "src/System-OpenCL-Wrappers-Helpers.html#pushKernelParams",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Helpers",
          "module": "System.OpenCL.Wrappers.Helpers",
          "name": "pushKernelParams",
          "normalized": "Kernel-\u003eCLuint-\u003e[KernelParameter]-\u003eIO(Maybe ErrorCode)",
          "package": "OpenCLWrappers",
          "partial": "Kernel Params",
          "signature": "Kernel-\u003eCLuint-\u003e[KernelParameter]-\u003eIO(Maybe ErrorCode)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Helpers.html#v:pushKernelParams"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Kernel",
          "name": "Kernel",
          "package": "OpenCLWrappers",
          "source": "src/System-OpenCL-Wrappers-Kernel.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Kernel",
          "module": "System.OpenCL.Wrappers.Kernel",
          "name": "Kernel",
          "package": "OpenCLWrappers",
          "partial": "Kernel",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Kernel.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Kernel",
          "name": "clCreateKernel",
          "package": "OpenCLWrappers",
          "signature": "Program -\u003e String -\u003e IO (Either ErrorCode Kernel)",
          "source": "src/System-OpenCL-Wrappers-Kernel.html#clCreateKernel",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Kernel",
          "module": "System.OpenCL.Wrappers.Kernel",
          "name": "clCreateKernel",
          "normalized": "Program-\u003eString-\u003eIO(Either ErrorCode Kernel)",
          "package": "OpenCLWrappers",
          "partial": "Create Kernel",
          "signature": "Program-\u003eString-\u003eIO(Either ErrorCode Kernel)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Kernel.html#v:clCreateKernel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Kernel",
          "name": "clCreateKernelsInProgram",
          "package": "OpenCLWrappers",
          "signature": "Program -\u003e CLuint -\u003e IO (Either ErrorCode [Kernel])",
          "source": "src/System-OpenCL-Wrappers-Kernel.html#clCreateKernelsInProgram",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Kernel",
          "module": "System.OpenCL.Wrappers.Kernel",
          "name": "clCreateKernelsInProgram",
          "normalized": "Program-\u003eCLuint-\u003eIO(Either ErrorCode[Kernel])",
          "package": "OpenCLWrappers",
          "partial": "Create Kernels In Program",
          "signature": "Program-\u003eCLuint-\u003eIO(Either ErrorCode[Kernel])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Kernel.html#v:clCreateKernelsInProgram"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Kernel",
          "name": "clEnqueueNDRangeKernel",
          "package": "OpenCLWrappers",
          "signature": "CommandQueue -\u003e Kernel -\u003e [CLsizei] -\u003e [CLsizei] -\u003e [Event] -\u003e IO (Either ErrorCode Event)",
          "source": "src/System-OpenCL-Wrappers-Kernel.html#clEnqueueNDRangeKernel",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Kernel",
          "module": "System.OpenCL.Wrappers.Kernel",
          "name": "clEnqueueNDRangeKernel",
          "normalized": "CommandQueue-\u003eKernel-\u003e[CLsizei]-\u003e[CLsizei]-\u003e[Event]-\u003eIO(Either ErrorCode Event)",
          "package": "OpenCLWrappers",
          "partial": "Enqueue NDRange Kernel",
          "signature": "CommandQueue-\u003eKernel-\u003e[CLsizei]-\u003e[CLsizei]-\u003e[Event]-\u003eIO(Either ErrorCode Event)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Kernel.html#v:clEnqueueNDRangeKernel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Kernel",
          "name": "clEnqueueNativeKernel",
          "package": "OpenCLWrappers",
          "signature": "NativeKernelCallback -\u003e Ptr () -\u003e CLsizei -\u003e [Mem] -\u003e [Ptr ()] -\u003e [Event] -\u003e IO (Either ErrorCode Event)",
          "source": "src/System-OpenCL-Wrappers-Kernel.html#clEnqueueNativeKernel",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Kernel",
          "module": "System.OpenCL.Wrappers.Kernel",
          "name": "clEnqueueNativeKernel",
          "normalized": "NativeKernelCallback-\u003ePtr()-\u003eCLsizei-\u003e[Mem]-\u003e[Ptr()]-\u003e[Event]-\u003eIO(Either ErrorCode Event)",
          "package": "OpenCLWrappers",
          "partial": "Enqueue Native Kernel",
          "signature": "NativeKernelCallback-\u003ePtr()-\u003eCLsizei-\u003e[Mem]-\u003e[Ptr()]-\u003e[Event]-\u003eIO(Either ErrorCode Event)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Kernel.html#v:clEnqueueNativeKernel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Kernel",
          "name": "clEnqueueTask",
          "package": "OpenCLWrappers",
          "signature": "CommandQueue -\u003e Kernel -\u003e [Event] -\u003e IO (Either ErrorCode Event)",
          "source": "src/System-OpenCL-Wrappers-Kernel.html#clEnqueueTask",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Kernel",
          "module": "System.OpenCL.Wrappers.Kernel",
          "name": "clEnqueueTask",
          "normalized": "CommandQueue-\u003eKernel-\u003e[Event]-\u003eIO(Either ErrorCode Event)",
          "package": "OpenCLWrappers",
          "partial": "Enqueue Task",
          "signature": "CommandQueue-\u003eKernel-\u003e[Event]-\u003eIO(Either ErrorCode Event)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Kernel.html#v:clEnqueueTask"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Kernel",
          "name": "clGetKernelInfo",
          "package": "OpenCLWrappers",
          "signature": "Kernel -\u003e KernelInfo -\u003e IO (Either ErrorCode CLKernelInfoRetval)",
          "source": "src/System-OpenCL-Wrappers-Kernel.html#clGetKernelInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Kernel",
          "module": "System.OpenCL.Wrappers.Kernel",
          "name": "clGetKernelInfo",
          "normalized": "Kernel-\u003eKernelInfo-\u003eIO(Either ErrorCode CLKernelInfoRetval)",
          "package": "OpenCLWrappers",
          "partial": "Get Kernel Info",
          "signature": "Kernel-\u003eKernelInfo-\u003eIO(Either ErrorCode CLKernelInfoRetval)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Kernel.html#v:clGetKernelInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Kernel",
          "name": "clGetKernelWorkGroupInfo",
          "package": "OpenCLWrappers",
          "signature": "Kernel -\u003e DeviceID -\u003e KernelWorkGroupInfo -\u003e IO (Either ErrorCode CLKernelWorkGroupInfoRetval)",
          "source": "src/System-OpenCL-Wrappers-Kernel.html#clGetKernelWorkGroupInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Kernel",
          "module": "System.OpenCL.Wrappers.Kernel",
          "name": "clGetKernelWorkGroupInfo",
          "normalized": "Kernel-\u003eDeviceID-\u003eKernelWorkGroupInfo-\u003eIO(Either ErrorCode CLKernelWorkGroupInfoRetval)",
          "package": "OpenCLWrappers",
          "partial": "Get Kernel Work Group Info",
          "signature": "Kernel-\u003eDeviceID-\u003eKernelWorkGroupInfo-\u003eIO(Either ErrorCode CLKernelWorkGroupInfoRetval)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Kernel.html#v:clGetKernelWorkGroupInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Kernel",
          "name": "clReleaseKernel",
          "package": "OpenCLWrappers",
          "signature": "Kernel -\u003e IO (Maybe ErrorCode)",
          "source": "src/System-OpenCL-Wrappers-Kernel.html#clReleaseKernel",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Kernel",
          "module": "System.OpenCL.Wrappers.Kernel",
          "name": "clReleaseKernel",
          "normalized": "Kernel-\u003eIO(Maybe ErrorCode)",
          "package": "OpenCLWrappers",
          "partial": "Release Kernel",
          "signature": "Kernel-\u003eIO(Maybe ErrorCode)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Kernel.html#v:clReleaseKernel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Kernel",
          "name": "clRetainKernel",
          "package": "OpenCLWrappers",
          "signature": "Kernel -\u003e IO (Maybe ErrorCode)",
          "source": "src/System-OpenCL-Wrappers-Kernel.html#clRetainKernel",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Kernel",
          "module": "System.OpenCL.Wrappers.Kernel",
          "name": "clRetainKernel",
          "normalized": "Kernel-\u003eIO(Maybe ErrorCode)",
          "package": "OpenCLWrappers",
          "partial": "Retain Kernel",
          "signature": "Kernel-\u003eIO(Maybe ErrorCode)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Kernel.html#v:clRetainKernel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Kernel",
          "name": "clSetKernelArg",
          "package": "OpenCLWrappers",
          "signature": "Kernel -\u003e CLuint -\u003e CLsizei -\u003e Ptr () -\u003e IO (Maybe ErrorCode)",
          "source": "src/System-OpenCL-Wrappers-Kernel.html#clSetKernelArg",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Kernel",
          "module": "System.OpenCL.Wrappers.Kernel",
          "name": "clSetKernelArg",
          "normalized": "Kernel-\u003eCLuint-\u003eCLsizei-\u003ePtr()-\u003eIO(Maybe ErrorCode)",
          "package": "OpenCLWrappers",
          "partial": "Set Kernel Arg",
          "signature": "Kernel-\u003eCLuint-\u003eCLsizei-\u003ePtr()-\u003eIO(Maybe ErrorCode)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Kernel.html#v:clSetKernelArg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.MemoryObject",
          "name": "MemoryObject",
          "package": "OpenCLWrappers",
          "source": "src/System-OpenCL-Wrappers-MemoryObject.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers MemoryObject",
          "module": "System.OpenCL.Wrappers.MemoryObject",
          "name": "MemoryObject",
          "package": "OpenCLWrappers",
          "partial": "Memory Object",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-MemoryObject.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.MemoryObject",
          "name": "clCreateBuffer",
          "package": "OpenCLWrappers",
          "signature": "Context -\u003e MemFlags -\u003e CLsizei -\u003e Ptr () -\u003e IO (Either ErrorCode Mem)",
          "source": "src/System-OpenCL-Wrappers-MemoryObject.html#clCreateBuffer",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers MemoryObject",
          "module": "System.OpenCL.Wrappers.MemoryObject",
          "name": "clCreateBuffer",
          "normalized": "Context-\u003eMemFlags-\u003eCLsizei-\u003ePtr()-\u003eIO(Either ErrorCode Mem)",
          "package": "OpenCLWrappers",
          "partial": "Create Buffer",
          "signature": "Context-\u003eMemFlags-\u003eCLsizei-\u003ePtr()-\u003eIO(Either ErrorCode Mem)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-MemoryObject.html#v:clCreateBuffer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.MemoryObject",
          "name": "clCreateImage2D",
          "package": "OpenCLWrappers",
          "signature": "Context -\u003e MemFlags -\u003e ImageFormat -\u003e CLsizei -\u003e CLsizei -\u003e CLsizei -\u003e Ptr () -\u003e IO (Either ErrorCode Mem)",
          "source": "src/System-OpenCL-Wrappers-MemoryObject.html#clCreateImage2D",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers MemoryObject",
          "module": "System.OpenCL.Wrappers.MemoryObject",
          "name": "clCreateImage2D",
          "normalized": "Context-\u003eMemFlags-\u003eImageFormat-\u003eCLsizei-\u003eCLsizei-\u003eCLsizei-\u003ePtr()-\u003eIO(Either ErrorCode Mem)",
          "package": "OpenCLWrappers",
          "partial": "Create Image",
          "signature": "Context-\u003eMemFlags-\u003eImageFormat-\u003eCLsizei-\u003eCLsizei-\u003eCLsizei-\u003ePtr()-\u003eIO(Either ErrorCode Mem)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-MemoryObject.html#v:clCreateImage2D"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.MemoryObject",
          "name": "clCreateImage3D",
          "package": "OpenCLWrappers",
          "signature": "Context -\u003e MemFlags -\u003e ImageFormat -\u003e CLsizei -\u003e CLsizei -\u003e CLsizei -\u003e CLsizei -\u003e CLsizei -\u003e Ptr () -\u003e IO (Either ErrorCode Mem)",
          "source": "src/System-OpenCL-Wrappers-MemoryObject.html#clCreateImage3D",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers MemoryObject",
          "module": "System.OpenCL.Wrappers.MemoryObject",
          "name": "clCreateImage3D",
          "normalized": "Context-\u003eMemFlags-\u003eImageFormat-\u003eCLsizei-\u003eCLsizei-\u003eCLsizei-\u003eCLsizei-\u003eCLsizei-\u003ePtr()-\u003eIO(Either ErrorCode Mem)",
          "package": "OpenCLWrappers",
          "partial": "Create Image",
          "signature": "Context-\u003eMemFlags-\u003eImageFormat-\u003eCLsizei-\u003eCLsizei-\u003eCLsizei-\u003eCLsizei-\u003eCLsizei-\u003ePtr()-\u003eIO(Either ErrorCode Mem)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-MemoryObject.html#v:clCreateImage3D"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.MemoryObject",
          "name": "clEnqueueCopyBuffer",
          "package": "OpenCLWrappers",
          "signature": "Mem -\u003e Mem -\u003e CLsizei -\u003e CLsizei -\u003e CLsizei -\u003e CommandQueue -\u003e [Event] -\u003e IO (Either ErrorCode Event)",
          "source": "src/System-OpenCL-Wrappers-MemoryObject.html#clEnqueueCopyBuffer",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers MemoryObject",
          "module": "System.OpenCL.Wrappers.MemoryObject",
          "name": "clEnqueueCopyBuffer",
          "normalized": "Mem-\u003eMem-\u003eCLsizei-\u003eCLsizei-\u003eCLsizei-\u003eCommandQueue-\u003e[Event]-\u003eIO(Either ErrorCode Event)",
          "package": "OpenCLWrappers",
          "partial": "Enqueue Copy Buffer",
          "signature": "Mem-\u003eMem-\u003eCLsizei-\u003eCLsizei-\u003eCLsizei-\u003eCommandQueue-\u003e[Event]-\u003eIO(Either ErrorCode Event)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-MemoryObject.html#v:clEnqueueCopyBuffer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.MemoryObject",
          "name": "clEnqueueCopyBufferToImage",
          "package": "OpenCLWrappers",
          "signature": "Mem -\u003e Mem -\u003e CLsizei -\u003e ImageDims -\u003e ImageDims -\u003e CommandQueue -\u003e [Event] -\u003e IO (Either ErrorCode Event)",
          "source": "src/System-OpenCL-Wrappers-MemoryObject.html#clEnqueueCopyBufferToImage",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers MemoryObject",
          "module": "System.OpenCL.Wrappers.MemoryObject",
          "name": "clEnqueueCopyBufferToImage",
          "normalized": "Mem-\u003eMem-\u003eCLsizei-\u003eImageDims-\u003eImageDims-\u003eCommandQueue-\u003e[Event]-\u003eIO(Either ErrorCode Event)",
          "package": "OpenCLWrappers",
          "partial": "Enqueue Copy Buffer To Image",
          "signature": "Mem-\u003eMem-\u003eCLsizei-\u003eImageDims-\u003eImageDims-\u003eCommandQueue-\u003e[Event]-\u003eIO(Either ErrorCode Event)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-MemoryObject.html#v:clEnqueueCopyBufferToImage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.MemoryObject",
          "name": "clEnqueueCopyImage",
          "package": "OpenCLWrappers",
          "signature": "Mem -\u003e Mem -\u003e ImageDims -\u003e ImageDims -\u003e ImageDims -\u003e CommandQueue -\u003e [Event] -\u003e IO (Either ErrorCode Event)",
          "source": "src/System-OpenCL-Wrappers-MemoryObject.html#clEnqueueCopyImage",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers MemoryObject",
          "module": "System.OpenCL.Wrappers.MemoryObject",
          "name": "clEnqueueCopyImage",
          "normalized": "Mem-\u003eMem-\u003eImageDims-\u003eImageDims-\u003eImageDims-\u003eCommandQueue-\u003e[Event]-\u003eIO(Either ErrorCode Event)",
          "package": "OpenCLWrappers",
          "partial": "Enqueue Copy Image",
          "signature": "Mem-\u003eMem-\u003eImageDims-\u003eImageDims-\u003eImageDims-\u003eCommandQueue-\u003e[Event]-\u003eIO(Either ErrorCode Event)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-MemoryObject.html#v:clEnqueueCopyImage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.MemoryObject",
          "name": "clEnqueueCopyImageToBuffer",
          "package": "OpenCLWrappers",
          "signature": "Mem -\u003e Mem -\u003e ImageDims -\u003e ImageDims -\u003e CLsizei -\u003e CommandQueue -\u003e [Event] -\u003e IO (Either ErrorCode Event)",
          "source": "src/System-OpenCL-Wrappers-MemoryObject.html#clEnqueueCopyImageToBuffer",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers MemoryObject",
          "module": "System.OpenCL.Wrappers.MemoryObject",
          "name": "clEnqueueCopyImageToBuffer",
          "normalized": "Mem-\u003eMem-\u003eImageDims-\u003eImageDims-\u003eCLsizei-\u003eCommandQueue-\u003e[Event]-\u003eIO(Either ErrorCode Event)",
          "package": "OpenCLWrappers",
          "partial": "Enqueue Copy Image To Buffer",
          "signature": "Mem-\u003eMem-\u003eImageDims-\u003eImageDims-\u003eCLsizei-\u003eCommandQueue-\u003e[Event]-\u003eIO(Either ErrorCode Event)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-MemoryObject.html#v:clEnqueueCopyImageToBuffer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.MemoryObject",
          "name": "clEnqueueMapBuffer",
          "package": "OpenCLWrappers",
          "signature": "Mem -\u003e Bool -\u003e MapFlags -\u003e CLsizei -\u003e CLsizei -\u003e CommandQueue -\u003e [Event] -\u003e IO (Either ErrorCode (Ptr (), Event))",
          "source": "src/System-OpenCL-Wrappers-MemoryObject.html#clEnqueueMapBuffer",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers MemoryObject",
          "module": "System.OpenCL.Wrappers.MemoryObject",
          "name": "clEnqueueMapBuffer",
          "normalized": "Mem-\u003eBool-\u003eMapFlags-\u003eCLsizei-\u003eCLsizei-\u003eCommandQueue-\u003e[Event]-\u003eIO(Either ErrorCode(Ptr(),Event))",
          "package": "OpenCLWrappers",
          "partial": "Enqueue Map Buffer",
          "signature": "Mem-\u003eBool-\u003eMapFlags-\u003eCLsizei-\u003eCLsizei-\u003eCommandQueue-\u003e[Event]-\u003eIO(Either ErrorCode(Ptr(),Event))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-MemoryObject.html#v:clEnqueueMapBuffer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.MemoryObject",
          "name": "clEnqueueMapImage",
          "package": "OpenCLWrappers",
          "signature": "Mem -\u003e Bool -\u003e MapFlags -\u003e ImageDims -\u003e ImageDims -\u003e CommandQueue -\u003e [Event] -\u003e IO (Either ErrorCode (Ptr (), CLsizei, CLsizei, Event))",
          "source": "src/System-OpenCL-Wrappers-MemoryObject.html#clEnqueueMapImage",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers MemoryObject",
          "module": "System.OpenCL.Wrappers.MemoryObject",
          "name": "clEnqueueMapImage",
          "normalized": "Mem-\u003eBool-\u003eMapFlags-\u003eImageDims-\u003eImageDims-\u003eCommandQueue-\u003e[Event]-\u003eIO(Either ErrorCode(Ptr(),CLsizei,CLsizei,Event))",
          "package": "OpenCLWrappers",
          "partial": "Enqueue Map Image",
          "signature": "Mem-\u003eBool-\u003eMapFlags-\u003eImageDims-\u003eImageDims-\u003eCommandQueue-\u003e[Event]-\u003eIO(Either ErrorCode(Ptr(),CLsizei,CLsizei,Event))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-MemoryObject.html#v:clEnqueueMapImage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.MemoryObject",
          "name": "clEnqueueReadBuffer",
          "package": "OpenCLWrappers",
          "signature": "Mem -\u003e Bool -\u003e CLsizei -\u003e CLsizei -\u003e Ptr () -\u003e CommandQueue -\u003e [Event] -\u003e IO (Either ErrorCode Event)",
          "source": "src/System-OpenCL-Wrappers-MemoryObject.html#clEnqueueReadBuffer",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers MemoryObject",
          "module": "System.OpenCL.Wrappers.MemoryObject",
          "name": "clEnqueueReadBuffer",
          "normalized": "Mem-\u003eBool-\u003eCLsizei-\u003eCLsizei-\u003ePtr()-\u003eCommandQueue-\u003e[Event]-\u003eIO(Either ErrorCode Event)",
          "package": "OpenCLWrappers",
          "partial": "Enqueue Read Buffer",
          "signature": "Mem-\u003eBool-\u003eCLsizei-\u003eCLsizei-\u003ePtr()-\u003eCommandQueue-\u003e[Event]-\u003eIO(Either ErrorCode Event)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-MemoryObject.html#v:clEnqueueReadBuffer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.MemoryObject",
          "name": "clEnqueueReadImage",
          "package": "OpenCLWrappers",
          "signature": "Mem -\u003e Bool -\u003e (CLsizei, CLsizei, CLsizei) -\u003e (CLsizei, CLsizei, CLsizei) -\u003e CLsizei -\u003e CLsizei -\u003e Ptr () -\u003e CommandQueue -\u003e [Event] -\u003e IO (Either ErrorCode Event)",
          "source": "src/System-OpenCL-Wrappers-MemoryObject.html#clEnqueueReadImage",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers MemoryObject",
          "module": "System.OpenCL.Wrappers.MemoryObject",
          "name": "clEnqueueReadImage",
          "normalized": "Mem-\u003eBool-\u003e(CLsizei,CLsizei,CLsizei)-\u003e(CLsizei,CLsizei,CLsizei)-\u003eCLsizei-\u003eCLsizei-\u003ePtr()-\u003eCommandQueue-\u003e[Event]-\u003eIO(Either ErrorCode Event)",
          "package": "OpenCLWrappers",
          "partial": "Enqueue Read Image",
          "signature": "Mem-\u003eBool-\u003e(CLsizei,CLsizei,CLsizei)-\u003e(CLsizei,CLsizei,CLsizei)-\u003eCLsizei-\u003eCLsizei-\u003ePtr()-\u003eCommandQueue-\u003e[Event]-\u003eIO(Either ErrorCode Event)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-MemoryObject.html#v:clEnqueueReadImage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.MemoryObject",
          "name": "clEnqueueUnmapMemObject",
          "package": "OpenCLWrappers",
          "signature": "Mem -\u003e Ptr () -\u003e CommandQueue -\u003e [Event] -\u003e IO (Either ErrorCode Event)",
          "source": "src/System-OpenCL-Wrappers-MemoryObject.html#clEnqueueUnmapMemObject",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers MemoryObject",
          "module": "System.OpenCL.Wrappers.MemoryObject",
          "name": "clEnqueueUnmapMemObject",
          "normalized": "Mem-\u003ePtr()-\u003eCommandQueue-\u003e[Event]-\u003eIO(Either ErrorCode Event)",
          "package": "OpenCLWrappers",
          "partial": "Enqueue Unmap Mem Object",
          "signature": "Mem-\u003ePtr()-\u003eCommandQueue-\u003e[Event]-\u003eIO(Either ErrorCode Event)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-MemoryObject.html#v:clEnqueueUnmapMemObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.MemoryObject",
          "name": "clEnqueueWriteBuffer",
          "package": "OpenCLWrappers",
          "signature": "Mem -\u003e Bool -\u003e CLsizei -\u003e CLsizei -\u003e Ptr () -\u003e CommandQueue -\u003e [Event] -\u003e IO (Either ErrorCode Event)",
          "source": "src/System-OpenCL-Wrappers-MemoryObject.html#clEnqueueWriteBuffer",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers MemoryObject",
          "module": "System.OpenCL.Wrappers.MemoryObject",
          "name": "clEnqueueWriteBuffer",
          "normalized": "Mem-\u003eBool-\u003eCLsizei-\u003eCLsizei-\u003ePtr()-\u003eCommandQueue-\u003e[Event]-\u003eIO(Either ErrorCode Event)",
          "package": "OpenCLWrappers",
          "partial": "Enqueue Write Buffer",
          "signature": "Mem-\u003eBool-\u003eCLsizei-\u003eCLsizei-\u003ePtr()-\u003eCommandQueue-\u003e[Event]-\u003eIO(Either ErrorCode Event)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-MemoryObject.html#v:clEnqueueWriteBuffer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.MemoryObject",
          "name": "clEnqueueWriteImage",
          "package": "OpenCLWrappers",
          "signature": "Mem -\u003e Bool -\u003e (CLsizei, CLsizei, CLsizei) -\u003e (CLsizei, CLsizei, CLsizei) -\u003e CLsizei -\u003e CLsizei -\u003e Ptr () -\u003e CommandQueue -\u003e [Event] -\u003e IO (Either ErrorCode Event)",
          "source": "src/System-OpenCL-Wrappers-MemoryObject.html#clEnqueueWriteImage",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers MemoryObject",
          "module": "System.OpenCL.Wrappers.MemoryObject",
          "name": "clEnqueueWriteImage",
          "normalized": "Mem-\u003eBool-\u003e(CLsizei,CLsizei,CLsizei)-\u003e(CLsizei,CLsizei,CLsizei)-\u003eCLsizei-\u003eCLsizei-\u003ePtr()-\u003eCommandQueue-\u003e[Event]-\u003eIO(Either ErrorCode Event)",
          "package": "OpenCLWrappers",
          "partial": "Enqueue Write Image",
          "signature": "Mem-\u003eBool-\u003e(CLsizei,CLsizei,CLsizei)-\u003e(CLsizei,CLsizei,CLsizei)-\u003eCLsizei-\u003eCLsizei-\u003ePtr()-\u003eCommandQueue-\u003e[Event]-\u003eIO(Either ErrorCode Event)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-MemoryObject.html#v:clEnqueueWriteImage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.MemoryObject",
          "name": "clGetImageInfo",
          "package": "OpenCLWrappers",
          "signature": "Mem -\u003e MemInfo -\u003e IO (Either ErrorCode CLImageInfoRetval)",
          "source": "src/System-OpenCL-Wrappers-MemoryObject.html#clGetImageInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers MemoryObject",
          "module": "System.OpenCL.Wrappers.MemoryObject",
          "name": "clGetImageInfo",
          "normalized": "Mem-\u003eMemInfo-\u003eIO(Either ErrorCode CLImageInfoRetval)",
          "package": "OpenCLWrappers",
          "partial": "Get Image Info",
          "signature": "Mem-\u003eMemInfo-\u003eIO(Either ErrorCode CLImageInfoRetval)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-MemoryObject.html#v:clGetImageInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.MemoryObject",
          "name": "clGetMemObjectInfo",
          "package": "OpenCLWrappers",
          "signature": "Mem -\u003e MemInfo -\u003e IO (Either ErrorCode CLMemObjectInfoRetval)",
          "source": "src/System-OpenCL-Wrappers-MemoryObject.html#clGetMemObjectInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers MemoryObject",
          "module": "System.OpenCL.Wrappers.MemoryObject",
          "name": "clGetMemObjectInfo",
          "normalized": "Mem-\u003eMemInfo-\u003eIO(Either ErrorCode CLMemObjectInfoRetval)",
          "package": "OpenCLWrappers",
          "partial": "Get Mem Object Info",
          "signature": "Mem-\u003eMemInfo-\u003eIO(Either ErrorCode CLMemObjectInfoRetval)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-MemoryObject.html#v:clGetMemObjectInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.MemoryObject",
          "name": "clGetSupportedImageFormats",
          "package": "OpenCLWrappers",
          "signature": "Context -\u003e MemFlags -\u003e MemObjectType -\u003e IO (Either ErrorCode [ImageFormat])",
          "source": "src/System-OpenCL-Wrappers-MemoryObject.html#clGetSupportedImageFormats",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers MemoryObject",
          "module": "System.OpenCL.Wrappers.MemoryObject",
          "name": "clGetSupportedImageFormats",
          "normalized": "Context-\u003eMemFlags-\u003eMemObjectType-\u003eIO(Either ErrorCode[ImageFormat])",
          "package": "OpenCLWrappers",
          "partial": "Get Supported Image Formats",
          "signature": "Context-\u003eMemFlags-\u003eMemObjectType-\u003eIO(Either ErrorCode[ImageFormat])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-MemoryObject.html#v:clGetSupportedImageFormats"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.MemoryObject",
          "name": "clReleaseMemObject",
          "package": "OpenCLWrappers",
          "signature": "Mem -\u003e IO (Maybe ErrorCode)",
          "source": "src/System-OpenCL-Wrappers-MemoryObject.html#clReleaseMemObject",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers MemoryObject",
          "module": "System.OpenCL.Wrappers.MemoryObject",
          "name": "clReleaseMemObject",
          "normalized": "Mem-\u003eIO(Maybe ErrorCode)",
          "package": "OpenCLWrappers",
          "partial": "Release Mem Object",
          "signature": "Mem-\u003eIO(Maybe ErrorCode)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-MemoryObject.html#v:clReleaseMemObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.MemoryObject",
          "name": "clRetainMemObject",
          "package": "OpenCLWrappers",
          "signature": "Mem -\u003e IO (Maybe ErrorCode)",
          "source": "src/System-OpenCL-Wrappers-MemoryObject.html#clRetainMemObject",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers MemoryObject",
          "module": "System.OpenCL.Wrappers.MemoryObject",
          "name": "clRetainMemObject",
          "normalized": "Mem-\u003eIO(Maybe ErrorCode)",
          "package": "OpenCLWrappers",
          "partial": "Retain Mem Object",
          "signature": "Mem-\u003eIO(Maybe ErrorCode)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-MemoryObject.html#v:clRetainMemObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.OutOfOrder",
          "name": "OutOfOrder",
          "package": "OpenCLWrappers",
          "source": "src/System-OpenCL-Wrappers-OutOfOrder.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers OutOfOrder",
          "module": "System.OpenCL.Wrappers.OutOfOrder",
          "name": "OutOfOrder",
          "package": "OpenCLWrappers",
          "partial": "Out Of Order",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-OutOfOrder.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.OutOfOrder",
          "name": "clEnqueueBarrier",
          "package": "OpenCLWrappers",
          "signature": "CommandQueue -\u003e IO (Maybe ErrorCode)",
          "source": "src/System-OpenCL-Wrappers-OutOfOrder.html#clEnqueueBarrier",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers OutOfOrder",
          "module": "System.OpenCL.Wrappers.OutOfOrder",
          "name": "clEnqueueBarrier",
          "normalized": "CommandQueue-\u003eIO(Maybe ErrorCode)",
          "package": "OpenCLWrappers",
          "partial": "Enqueue Barrier",
          "signature": "CommandQueue-\u003eIO(Maybe ErrorCode)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-OutOfOrder.html#v:clEnqueueBarrier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.OutOfOrder",
          "name": "clEnqueueMarker",
          "package": "OpenCLWrappers",
          "signature": "CommandQueue -\u003e IO (Either ErrorCode Event)",
          "source": "src/System-OpenCL-Wrappers-OutOfOrder.html#clEnqueueMarker",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers OutOfOrder",
          "module": "System.OpenCL.Wrappers.OutOfOrder",
          "name": "clEnqueueMarker",
          "normalized": "CommandQueue-\u003eIO(Either ErrorCode Event)",
          "package": "OpenCLWrappers",
          "partial": "Enqueue Marker",
          "signature": "CommandQueue-\u003eIO(Either ErrorCode Event)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-OutOfOrder.html#v:clEnqueueMarker"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.OutOfOrder",
          "name": "clEnqueueWaitForEvents",
          "package": "OpenCLWrappers",
          "signature": "CommandQueue -\u003e [Event] -\u003e IO (Maybe ErrorCode)",
          "source": "src/System-OpenCL-Wrappers-OutOfOrder.html#clEnqueueWaitForEvents",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers OutOfOrder",
          "module": "System.OpenCL.Wrappers.OutOfOrder",
          "name": "clEnqueueWaitForEvents",
          "normalized": "CommandQueue-\u003e[Event]-\u003eIO(Maybe ErrorCode)",
          "package": "OpenCLWrappers",
          "partial": "Enqueue Wait For Events",
          "signature": "CommandQueue-\u003e[Event]-\u003eIO(Maybe ErrorCode)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-OutOfOrder.html#v:clEnqueueWaitForEvents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.PlatformInfo",
          "name": "PlatformInfo",
          "package": "OpenCLWrappers",
          "source": "src/System-OpenCL-Wrappers-PlatformInfo.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers PlatformInfo",
          "module": "System.OpenCL.Wrappers.PlatformInfo",
          "name": "PlatformInfo",
          "package": "OpenCLWrappers",
          "partial": "Platform Info",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-PlatformInfo.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.PlatformInfo",
          "name": "clGetPlatformIDs",
          "package": "OpenCLWrappers",
          "signature": "IO (Either ErrorCode [PlatformID])",
          "source": "src/System-OpenCL-Wrappers-PlatformInfo.html#clGetPlatformIDs",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers PlatformInfo",
          "module": "System.OpenCL.Wrappers.PlatformInfo",
          "name": "clGetPlatformIDs",
          "normalized": "IO(Either ErrorCode[PlatformID])",
          "package": "OpenCLWrappers",
          "partial": "Get Platform IDs",
          "signature": "IO(Either ErrorCode[PlatformID])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-PlatformInfo.html#v:clGetPlatformIDs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.PlatformInfo",
          "name": "clGetPlatformInfo",
          "package": "OpenCLWrappers",
          "signature": "PlatformID -\u003e PlatformInfo -\u003e IO (Either ErrorCode CLPlatformInfoRetval)",
          "source": "src/System-OpenCL-Wrappers-PlatformInfo.html#clGetPlatformInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers PlatformInfo",
          "module": "System.OpenCL.Wrappers.PlatformInfo",
          "name": "clGetPlatformInfo",
          "normalized": "PlatformID-\u003ePlatformInfo-\u003eIO(Either ErrorCode CLPlatformInfoRetval)",
          "package": "OpenCLWrappers",
          "partial": "Get Platform Info",
          "signature": "PlatformID-\u003ePlatformInfo-\u003eIO(Either ErrorCode CLPlatformInfoRetval)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-PlatformInfo.html#v:clGetPlatformInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.ProgramObject",
          "name": "ProgramObject",
          "package": "OpenCLWrappers",
          "source": "src/System-OpenCL-Wrappers-ProgramObject.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers ProgramObject",
          "module": "System.OpenCL.Wrappers.ProgramObject",
          "name": "ProgramObject",
          "package": "OpenCLWrappers",
          "partial": "Program Object",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-ProgramObject.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.ProgramObject",
          "name": "clBuildProgram",
          "package": "OpenCLWrappers",
          "signature": "Program -\u003e [DeviceID] -\u003e String -\u003e Maybe BuildProgramCallback -\u003e Ptr () -\u003e IO (Maybe ErrorCode)",
          "source": "src/System-OpenCL-Wrappers-ProgramObject.html#clBuildProgram",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers ProgramObject",
          "module": "System.OpenCL.Wrappers.ProgramObject",
          "name": "clBuildProgram",
          "normalized": "Program-\u003e[DeviceID]-\u003eString-\u003eMaybe BuildProgramCallback-\u003ePtr()-\u003eIO(Maybe ErrorCode)",
          "package": "OpenCLWrappers",
          "partial": "Build Program",
          "signature": "Program-\u003e[DeviceID]-\u003eString-\u003eMaybe BuildProgramCallback-\u003ePtr()-\u003eIO(Maybe ErrorCode)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-ProgramObject.html#v:clBuildProgram"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.ProgramObject",
          "name": "clCreateProgramWithBinary",
          "package": "OpenCLWrappers",
          "signature": "Context -\u003e [(DeviceID, ByteString)] -\u003e IO (Either ErrorCode Program)",
          "source": "src/System-OpenCL-Wrappers-ProgramObject.html#clCreateProgramWithBinary",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers ProgramObject",
          "module": "System.OpenCL.Wrappers.ProgramObject",
          "name": "clCreateProgramWithBinary",
          "normalized": "Context-\u003e[(DeviceID,ByteString)]-\u003eIO(Either ErrorCode Program)",
          "package": "OpenCLWrappers",
          "partial": "Create Program With Binary",
          "signature": "Context-\u003e[(DeviceID,ByteString)]-\u003eIO(Either ErrorCode Program)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-ProgramObject.html#v:clCreateProgramWithBinary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.ProgramObject",
          "name": "clCreateProgramWithSource",
          "package": "OpenCLWrappers",
          "signature": "Context -\u003e String -\u003e IO (Either ErrorCode Program)",
          "source": "src/System-OpenCL-Wrappers-ProgramObject.html#clCreateProgramWithSource",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers ProgramObject",
          "module": "System.OpenCL.Wrappers.ProgramObject",
          "name": "clCreateProgramWithSource",
          "normalized": "Context-\u003eString-\u003eIO(Either ErrorCode Program)",
          "package": "OpenCLWrappers",
          "partial": "Create Program With Source",
          "signature": "Context-\u003eString-\u003eIO(Either ErrorCode Program)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-ProgramObject.html#v:clCreateProgramWithSource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.ProgramObject",
          "name": "clGetProgramBuildInfo",
          "package": "OpenCLWrappers",
          "signature": "Program -\u003e DeviceID -\u003e ProgramBuildInfo -\u003e IO (Either ErrorCode CLProgramBuildInfoRetval)",
          "source": "src/System-OpenCL-Wrappers-ProgramObject.html#clGetProgramBuildInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers ProgramObject",
          "module": "System.OpenCL.Wrappers.ProgramObject",
          "name": "clGetProgramBuildInfo",
          "normalized": "Program-\u003eDeviceID-\u003eProgramBuildInfo-\u003eIO(Either ErrorCode CLProgramBuildInfoRetval)",
          "package": "OpenCLWrappers",
          "partial": "Get Program Build Info",
          "signature": "Program-\u003eDeviceID-\u003eProgramBuildInfo-\u003eIO(Either ErrorCode CLProgramBuildInfoRetval)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-ProgramObject.html#v:clGetProgramBuildInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.ProgramObject",
          "name": "clGetProgramInfo",
          "package": "OpenCLWrappers",
          "signature": "Program -\u003e ProgramInfo -\u003e IO (Either ErrorCode CLProgramInfoRetval)",
          "source": "src/System-OpenCL-Wrappers-ProgramObject.html#clGetProgramInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers ProgramObject",
          "module": "System.OpenCL.Wrappers.ProgramObject",
          "name": "clGetProgramInfo",
          "normalized": "Program-\u003eProgramInfo-\u003eIO(Either ErrorCode CLProgramInfoRetval)",
          "package": "OpenCLWrappers",
          "partial": "Get Program Info",
          "signature": "Program-\u003eProgramInfo-\u003eIO(Either ErrorCode CLProgramInfoRetval)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-ProgramObject.html#v:clGetProgramInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.ProgramObject",
          "name": "clReleaseProgram",
          "package": "OpenCLWrappers",
          "signature": "Program -\u003e IO (Maybe ErrorCode)",
          "source": "src/System-OpenCL-Wrappers-ProgramObject.html#clReleaseProgram",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers ProgramObject",
          "module": "System.OpenCL.Wrappers.ProgramObject",
          "name": "clReleaseProgram",
          "normalized": "Program-\u003eIO(Maybe ErrorCode)",
          "package": "OpenCLWrappers",
          "partial": "Release Program",
          "signature": "Program-\u003eIO(Maybe ErrorCode)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-ProgramObject.html#v:clReleaseProgram"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.ProgramObject",
          "name": "clRetainProgram",
          "package": "OpenCLWrappers",
          "signature": "Program -\u003e IO (Maybe ErrorCode)",
          "source": "src/System-OpenCL-Wrappers-ProgramObject.html#clRetainProgram",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers ProgramObject",
          "module": "System.OpenCL.Wrappers.ProgramObject",
          "name": "clRetainProgram",
          "normalized": "Program-\u003eIO(Maybe ErrorCode)",
          "package": "OpenCLWrappers",
          "partial": "Retain Program",
          "signature": "Program-\u003eIO(Maybe ErrorCode)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-ProgramObject.html#v:clRetainProgram"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.ProgramObject",
          "name": "clUnloadCompiler",
          "package": "OpenCLWrappers",
          "signature": "IO (Maybe ErrorCode)",
          "source": "src/System-OpenCL-Wrappers-ProgramObject.html#clUnloadCompiler",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers ProgramObject",
          "module": "System.OpenCL.Wrappers.ProgramObject",
          "name": "clUnloadCompiler",
          "package": "OpenCLWrappers",
          "partial": "Unload Compiler",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-ProgramObject.html#v:clUnloadCompiler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Raw",
          "name": "Raw",
          "package": "OpenCLWrappers",
          "source": "src/System-OpenCL-Wrappers-Raw.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Raw",
          "module": "System.OpenCL.Wrappers.Raw",
          "name": "Raw",
          "package": "OpenCLWrappers",
          "partial": "Raw",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Raw.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Raw",
          "name": "raw_clBuildProgram",
          "package": "OpenCLWrappers",
          "signature": "Program -\u003e CLuint -\u003e Ptr DeviceID -\u003e CString -\u003e FunPtr BuildProgramCallback -\u003e Ptr () -\u003e IO CLint",
          "source": "src/System-OpenCL-Wrappers-Raw.html#raw_clBuildProgram",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Raw",
          "module": "System.OpenCL.Wrappers.Raw",
          "name": "raw_clBuildProgram",
          "normalized": "Program-\u003eCLuint-\u003ePtr DeviceID-\u003eCString-\u003eFunPtr BuildProgramCallback-\u003ePtr()-\u003eIO CLint",
          "package": "OpenCLWrappers",
          "partial": "Build Program",
          "signature": "Program-\u003eCLuint-\u003ePtr DeviceID-\u003eCString-\u003eFunPtr BuildProgramCallback-\u003ePtr()-\u003eIO CLint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Raw.html#v:raw_clBuildProgram"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Raw",
          "name": "raw_clCreateBuffer",
          "package": "OpenCLWrappers",
          "signature": "Context -\u003e CLbitfield -\u003e CLsizei -\u003e Ptr () -\u003e Ptr CLint -\u003e IO Mem",
          "source": "src/System-OpenCL-Wrappers-Raw.html#raw_clCreateBuffer",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Raw",
          "module": "System.OpenCL.Wrappers.Raw",
          "name": "raw_clCreateBuffer",
          "normalized": "Context-\u003eCLbitfield-\u003eCLsizei-\u003ePtr()-\u003ePtr CLint-\u003eIO Mem",
          "package": "OpenCLWrappers",
          "partial": "Create Buffer",
          "signature": "Context-\u003eCLbitfield-\u003eCLsizei-\u003ePtr()-\u003ePtr CLint-\u003eIO Mem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Raw.html#v:raw_clCreateBuffer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Raw",
          "name": "raw_clCreateCommandQueue",
          "package": "OpenCLWrappers",
          "signature": "Context -\u003e DeviceID -\u003e CLbitfield -\u003e Ptr CLint -\u003e IO CommandQueue",
          "source": "src/System-OpenCL-Wrappers-Raw.html#raw_clCreateCommandQueue",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Raw",
          "module": "System.OpenCL.Wrappers.Raw",
          "name": "raw_clCreateCommandQueue",
          "normalized": "Context-\u003eDeviceID-\u003eCLbitfield-\u003ePtr CLint-\u003eIO CommandQueue",
          "package": "OpenCLWrappers",
          "partial": "Create Command Queue",
          "signature": "Context-\u003eDeviceID-\u003eCLbitfield-\u003ePtr CLint-\u003eIO CommandQueue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Raw.html#v:raw_clCreateCommandQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Raw",
          "name": "raw_clCreateContext",
          "package": "OpenCLWrappers",
          "signature": "Ptr ContextProperties -\u003e CLuint -\u003e Ptr DeviceID -\u003e FunPtr ContextCallback -\u003e Ptr () -\u003e Ptr CLint -\u003e IO Context",
          "source": "src/System-OpenCL-Wrappers-Raw.html#raw_clCreateContext",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Raw",
          "module": "System.OpenCL.Wrappers.Raw",
          "name": "raw_clCreateContext",
          "normalized": "Ptr ContextProperties-\u003eCLuint-\u003ePtr DeviceID-\u003eFunPtr ContextCallback-\u003ePtr()-\u003ePtr CLint-\u003eIO Context",
          "package": "OpenCLWrappers",
          "partial": "Create Context",
          "signature": "Ptr ContextProperties-\u003eCLuint-\u003ePtr DeviceID-\u003eFunPtr ContextCallback-\u003ePtr()-\u003ePtr CLint-\u003eIO Context",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Raw.html#v:raw_clCreateContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Raw",
          "name": "raw_clCreateContextFromType",
          "package": "OpenCLWrappers",
          "signature": "Ptr ContextProperties -\u003e CLbitfield -\u003e FunPtr ContextCallback -\u003e Ptr a -\u003e Ptr CLint -\u003e IO Context",
          "source": "src/System-OpenCL-Wrappers-Raw.html#raw_clCreateContextFromType",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Raw",
          "module": "System.OpenCL.Wrappers.Raw",
          "name": "raw_clCreateContextFromType",
          "normalized": "Ptr ContextProperties-\u003eCLbitfield-\u003eFunPtr ContextCallback-\u003ePtr a-\u003ePtr CLint-\u003eIO Context",
          "package": "OpenCLWrappers",
          "partial": "Create Context From Type",
          "signature": "Ptr ContextProperties-\u003eCLbitfield-\u003eFunPtr ContextCallback-\u003ePtr a-\u003ePtr CLint-\u003eIO Context",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Raw.html#v:raw_clCreateContextFromType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Raw",
          "name": "raw_clCreateImage2D",
          "package": "OpenCLWrappers",
          "signature": "Context -\u003e CLbitfield -\u003e Ptr CLuint -\u003e CLsizei -\u003e CLsizei -\u003e CLsizei -\u003e Ptr () -\u003e Ptr CLint -\u003e IO Mem",
          "source": "src/System-OpenCL-Wrappers-Raw.html#raw_clCreateImage2D",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Raw",
          "module": "System.OpenCL.Wrappers.Raw",
          "name": "raw_clCreateImage2D",
          "normalized": "Context-\u003eCLbitfield-\u003ePtr CLuint-\u003eCLsizei-\u003eCLsizei-\u003eCLsizei-\u003ePtr()-\u003ePtr CLint-\u003eIO Mem",
          "package": "OpenCLWrappers",
          "partial": "Create Image",
          "signature": "Context-\u003eCLbitfield-\u003ePtr CLuint-\u003eCLsizei-\u003eCLsizei-\u003eCLsizei-\u003ePtr()-\u003ePtr CLint-\u003eIO Mem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Raw.html#v:raw_clCreateImage2D"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Raw",
          "name": "raw_clCreateImage3D",
          "package": "OpenCLWrappers",
          "signature": "Context -\u003e CLbitfield -\u003e Ptr CLuint -\u003e CLsizei -\u003e CLsizei -\u003e CLsizei -\u003e CLsizei -\u003e CLsizei -\u003e Ptr () -\u003e Ptr CLint -\u003e IO Mem",
          "source": "src/System-OpenCL-Wrappers-Raw.html#raw_clCreateImage3D",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Raw",
          "module": "System.OpenCL.Wrappers.Raw",
          "name": "raw_clCreateImage3D",
          "normalized": "Context-\u003eCLbitfield-\u003ePtr CLuint-\u003eCLsizei-\u003eCLsizei-\u003eCLsizei-\u003eCLsizei-\u003eCLsizei-\u003ePtr()-\u003ePtr CLint-\u003eIO Mem",
          "package": "OpenCLWrappers",
          "partial": "Create Image",
          "signature": "Context-\u003eCLbitfield-\u003ePtr CLuint-\u003eCLsizei-\u003eCLsizei-\u003eCLsizei-\u003eCLsizei-\u003eCLsizei-\u003ePtr()-\u003ePtr CLint-\u003eIO Mem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Raw.html#v:raw_clCreateImage3D"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Raw",
          "name": "raw_clCreateKernel",
          "package": "OpenCLWrappers",
          "signature": "Program -\u003e CString -\u003e Ptr CLint -\u003e IO Kernel",
          "source": "src/System-OpenCL-Wrappers-Raw.html#raw_clCreateKernel",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Raw",
          "module": "System.OpenCL.Wrappers.Raw",
          "name": "raw_clCreateKernel",
          "normalized": "Program-\u003eCString-\u003ePtr CLint-\u003eIO Kernel",
          "package": "OpenCLWrappers",
          "partial": "Create Kernel",
          "signature": "Program-\u003eCString-\u003ePtr CLint-\u003eIO Kernel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Raw.html#v:raw_clCreateKernel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Raw",
          "name": "raw_clCreateKernelsInProgram",
          "package": "OpenCLWrappers",
          "signature": "Program -\u003e CLuint -\u003e Ptr Kernel -\u003e Ptr CLuint -\u003e IO CLint",
          "source": "src/System-OpenCL-Wrappers-Raw.html#raw_clCreateKernelsInProgram",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Raw",
          "module": "System.OpenCL.Wrappers.Raw",
          "name": "raw_clCreateKernelsInProgram",
          "normalized": "Program-\u003eCLuint-\u003ePtr Kernel-\u003ePtr CLuint-\u003eIO CLint",
          "package": "OpenCLWrappers",
          "partial": "Create Kernels In Program",
          "signature": "Program-\u003eCLuint-\u003ePtr Kernel-\u003ePtr CLuint-\u003eIO CLint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Raw.html#v:raw_clCreateKernelsInProgram"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Raw",
          "name": "raw_clCreateProgramWithBinary",
          "package": "OpenCLWrappers",
          "signature": "Context -\u003e CLuint -\u003e Ptr DeviceID -\u003e Ptr CLsizei -\u003e Ptr (Ptr Word8) -\u003e Ptr CLint -\u003e Ptr CLint -\u003e IO Program",
          "source": "src/System-OpenCL-Wrappers-Raw.html#raw_clCreateProgramWithBinary",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Raw",
          "module": "System.OpenCL.Wrappers.Raw",
          "name": "raw_clCreateProgramWithBinary",
          "normalized": "Context-\u003eCLuint-\u003ePtr DeviceID-\u003ePtr CLsizei-\u003ePtr(Ptr Word)-\u003ePtr CLint-\u003ePtr CLint-\u003eIO Program",
          "package": "OpenCLWrappers",
          "partial": "Create Program With Binary",
          "signature": "Context-\u003eCLuint-\u003ePtr DeviceID-\u003ePtr CLsizei-\u003ePtr(Ptr Word)-\u003ePtr CLint-\u003ePtr CLint-\u003eIO Program",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Raw.html#v:raw_clCreateProgramWithBinary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Raw",
          "name": "raw_clCreateProgramWithSource",
          "package": "OpenCLWrappers",
          "signature": "Context -\u003e CLuint -\u003e Ptr CString -\u003e Ptr CLsizei -\u003e Ptr CLint -\u003e IO Program",
          "source": "src/System-OpenCL-Wrappers-Raw.html#raw_clCreateProgramWithSource",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Raw",
          "module": "System.OpenCL.Wrappers.Raw",
          "name": "raw_clCreateProgramWithSource",
          "normalized": "Context-\u003eCLuint-\u003ePtr CString-\u003ePtr CLsizei-\u003ePtr CLint-\u003eIO Program",
          "package": "OpenCLWrappers",
          "partial": "Create Program With Source",
          "signature": "Context-\u003eCLuint-\u003ePtr CString-\u003ePtr CLsizei-\u003ePtr CLint-\u003eIO Program",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Raw.html#v:raw_clCreateProgramWithSource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Raw",
          "name": "raw_clCreateSampler",
          "package": "OpenCLWrappers",
          "signature": "Context -\u003e CLbool -\u003e CLuint -\u003e CLuint -\u003e Ptr CLint -\u003e IO Sampler",
          "source": "src/System-OpenCL-Wrappers-Raw.html#raw_clCreateSampler",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Raw",
          "module": "System.OpenCL.Wrappers.Raw",
          "name": "raw_clCreateSampler",
          "normalized": "Context-\u003eCLbool-\u003eCLuint-\u003eCLuint-\u003ePtr CLint-\u003eIO Sampler",
          "package": "OpenCLWrappers",
          "partial": "Create Sampler",
          "signature": "Context-\u003eCLbool-\u003eCLuint-\u003eCLuint-\u003ePtr CLint-\u003eIO Sampler",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Raw.html#v:raw_clCreateSampler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Raw",
          "name": "raw_clEnqueueBarrier",
          "package": "OpenCLWrappers",
          "signature": "CommandQueue -\u003e IO CLint",
          "source": "src/System-OpenCL-Wrappers-Raw.html#raw_clEnqueueBarrier",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Raw",
          "module": "System.OpenCL.Wrappers.Raw",
          "name": "raw_clEnqueueBarrier",
          "normalized": "CommandQueue-\u003eIO CLint",
          "package": "OpenCLWrappers",
          "partial": "Enqueue Barrier",
          "signature": "CommandQueue-\u003eIO CLint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Raw.html#v:raw_clEnqueueBarrier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Raw",
          "name": "raw_clEnqueueCopyBuffer",
          "package": "OpenCLWrappers",
          "signature": "CommandQueue -\u003e Mem -\u003e Mem -\u003e CLsizei -\u003e CLsizei -\u003e CLsizei -\u003e CLuint -\u003e Ptr Event -\u003e Ptr Event -\u003e IO CLint",
          "source": "src/System-OpenCL-Wrappers-Raw.html#raw_clEnqueueCopyBuffer",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Raw",
          "module": "System.OpenCL.Wrappers.Raw",
          "name": "raw_clEnqueueCopyBuffer",
          "normalized": "CommandQueue-\u003eMem-\u003eMem-\u003eCLsizei-\u003eCLsizei-\u003eCLsizei-\u003eCLuint-\u003ePtr Event-\u003ePtr Event-\u003eIO CLint",
          "package": "OpenCLWrappers",
          "partial": "Enqueue Copy Buffer",
          "signature": "CommandQueue-\u003eMem-\u003eMem-\u003eCLsizei-\u003eCLsizei-\u003eCLsizei-\u003eCLuint-\u003ePtr Event-\u003ePtr Event-\u003eIO CLint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Raw.html#v:raw_clEnqueueCopyBuffer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Raw",
          "name": "raw_clEnqueueCopyBufferToImage",
          "package": "OpenCLWrappers",
          "signature": "CommandQueue -\u003e Mem -\u003e Mem -\u003e CLsizei -\u003e Ptr CLsizei -\u003e Ptr CLsizei -\u003e CLuint -\u003e Ptr Event -\u003e Ptr Event -\u003e IO CLint",
          "source": "src/System-OpenCL-Wrappers-Raw.html#raw_clEnqueueCopyBufferToImage",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Raw",
          "module": "System.OpenCL.Wrappers.Raw",
          "name": "raw_clEnqueueCopyBufferToImage",
          "normalized": "CommandQueue-\u003eMem-\u003eMem-\u003eCLsizei-\u003ePtr CLsizei-\u003ePtr CLsizei-\u003eCLuint-\u003ePtr Event-\u003ePtr Event-\u003eIO CLint",
          "package": "OpenCLWrappers",
          "partial": "Enqueue Copy Buffer To Image",
          "signature": "CommandQueue-\u003eMem-\u003eMem-\u003eCLsizei-\u003ePtr CLsizei-\u003ePtr CLsizei-\u003eCLuint-\u003ePtr Event-\u003ePtr Event-\u003eIO CLint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Raw.html#v:raw_clEnqueueCopyBufferToImage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Raw",
          "name": "raw_clEnqueueCopyImage",
          "package": "OpenCLWrappers",
          "signature": "CommandQueue -\u003e Mem -\u003e Mem -\u003e Ptr CLsizei -\u003e Ptr CLsizei -\u003e Ptr CLsizei -\u003e CLuint -\u003e Ptr Event -\u003e Ptr Event -\u003e IO CLint",
          "source": "src/System-OpenCL-Wrappers-Raw.html#raw_clEnqueueCopyImage",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Raw",
          "module": "System.OpenCL.Wrappers.Raw",
          "name": "raw_clEnqueueCopyImage",
          "normalized": "CommandQueue-\u003eMem-\u003eMem-\u003ePtr CLsizei-\u003ePtr CLsizei-\u003ePtr CLsizei-\u003eCLuint-\u003ePtr Event-\u003ePtr Event-\u003eIO CLint",
          "package": "OpenCLWrappers",
          "partial": "Enqueue Copy Image",
          "signature": "CommandQueue-\u003eMem-\u003eMem-\u003ePtr CLsizei-\u003ePtr CLsizei-\u003ePtr CLsizei-\u003eCLuint-\u003ePtr Event-\u003ePtr Event-\u003eIO CLint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Raw.html#v:raw_clEnqueueCopyImage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Raw",
          "name": "raw_clEnqueueCopyImageToBuffer",
          "package": "OpenCLWrappers",
          "signature": "CommandQueue -\u003e Mem -\u003e Mem -\u003e Ptr CLsizei -\u003e Ptr CLsizei -\u003e CLsizei -\u003e CLuint -\u003e Ptr Event -\u003e Ptr Event -\u003e IO CLint",
          "source": "src/System-OpenCL-Wrappers-Raw.html#raw_clEnqueueCopyImageToBuffer",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Raw",
          "module": "System.OpenCL.Wrappers.Raw",
          "name": "raw_clEnqueueCopyImageToBuffer",
          "normalized": "CommandQueue-\u003eMem-\u003eMem-\u003ePtr CLsizei-\u003ePtr CLsizei-\u003eCLsizei-\u003eCLuint-\u003ePtr Event-\u003ePtr Event-\u003eIO CLint",
          "package": "OpenCLWrappers",
          "partial": "Enqueue Copy Image To Buffer",
          "signature": "CommandQueue-\u003eMem-\u003eMem-\u003ePtr CLsizei-\u003ePtr CLsizei-\u003eCLsizei-\u003eCLuint-\u003ePtr Event-\u003ePtr Event-\u003eIO CLint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Raw.html#v:raw_clEnqueueCopyImageToBuffer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Raw",
          "name": "raw_clEnqueueMapBuffer",
          "package": "OpenCLWrappers",
          "signature": "CommandQueue -\u003e Mem -\u003e CLbool -\u003e CLbitfield -\u003e CLsizei -\u003e CLsizei -\u003e CLuint -\u003e Ptr Event -\u003e Ptr Event -\u003e Ptr CLint -\u003e IO (Ptr ())",
          "source": "src/System-OpenCL-Wrappers-Raw.html#raw_clEnqueueMapBuffer",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Raw",
          "module": "System.OpenCL.Wrappers.Raw",
          "name": "raw_clEnqueueMapBuffer",
          "normalized": "CommandQueue-\u003eMem-\u003eCLbool-\u003eCLbitfield-\u003eCLsizei-\u003eCLsizei-\u003eCLuint-\u003ePtr Event-\u003ePtr Event-\u003ePtr CLint-\u003eIO(Ptr())",
          "package": "OpenCLWrappers",
          "partial": "Enqueue Map Buffer",
          "signature": "CommandQueue-\u003eMem-\u003eCLbool-\u003eCLbitfield-\u003eCLsizei-\u003eCLsizei-\u003eCLuint-\u003ePtr Event-\u003ePtr Event-\u003ePtr CLint-\u003eIO(Ptr())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Raw.html#v:raw_clEnqueueMapBuffer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Raw",
          "name": "raw_clEnqueueMapImage",
          "package": "OpenCLWrappers",
          "signature": "CommandQueue -\u003e Mem -\u003e CLbool -\u003e CLbitfield -\u003e Ptr CLsizei -\u003e Ptr CLsizei -\u003e Ptr CLsizei -\u003e Ptr CLsizei -\u003e CLuint -\u003e Ptr Event -\u003e Ptr Event -\u003e Ptr CLint -\u003e IO (Ptr ())",
          "source": "src/System-OpenCL-Wrappers-Raw.html#raw_clEnqueueMapImage",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Raw",
          "module": "System.OpenCL.Wrappers.Raw",
          "name": "raw_clEnqueueMapImage",
          "normalized": "CommandQueue-\u003eMem-\u003eCLbool-\u003eCLbitfield-\u003ePtr CLsizei-\u003ePtr CLsizei-\u003ePtr CLsizei-\u003ePtr CLsizei-\u003eCLuint-\u003ePtr Event-\u003ePtr Event-\u003ePtr CLint-\u003eIO(Ptr())",
          "package": "OpenCLWrappers",
          "partial": "Enqueue Map Image",
          "signature": "CommandQueue-\u003eMem-\u003eCLbool-\u003eCLbitfield-\u003ePtr CLsizei-\u003ePtr CLsizei-\u003ePtr CLsizei-\u003ePtr CLsizei-\u003eCLuint-\u003ePtr Event-\u003ePtr Event-\u003ePtr CLint-\u003eIO(Ptr())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Raw.html#v:raw_clEnqueueMapImage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Raw",
          "name": "raw_clEnqueueMarker",
          "package": "OpenCLWrappers",
          "signature": "CommandQueue -\u003e Ptr Event -\u003e IO CLint",
          "source": "src/System-OpenCL-Wrappers-Raw.html#raw_clEnqueueMarker",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Raw",
          "module": "System.OpenCL.Wrappers.Raw",
          "name": "raw_clEnqueueMarker",
          "normalized": "CommandQueue-\u003ePtr Event-\u003eIO CLint",
          "package": "OpenCLWrappers",
          "partial": "Enqueue Marker",
          "signature": "CommandQueue-\u003ePtr Event-\u003eIO CLint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Raw.html#v:raw_clEnqueueMarker"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Raw",
          "name": "raw_clEnqueueNDRangeKernel",
          "package": "OpenCLWrappers",
          "signature": "CommandQueue -\u003e Kernel -\u003e CLuint -\u003e Ptr CLsizei -\u003e Ptr CLsizei -\u003e Ptr CLsizei -\u003e CLuint -\u003e Ptr Event -\u003e Ptr Event -\u003e IO CLint",
          "source": "src/System-OpenCL-Wrappers-Raw.html#raw_clEnqueueNDRangeKernel",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Raw",
          "module": "System.OpenCL.Wrappers.Raw",
          "name": "raw_clEnqueueNDRangeKernel",
          "normalized": "CommandQueue-\u003eKernel-\u003eCLuint-\u003ePtr CLsizei-\u003ePtr CLsizei-\u003ePtr CLsizei-\u003eCLuint-\u003ePtr Event-\u003ePtr Event-\u003eIO CLint",
          "package": "OpenCLWrappers",
          "partial": "Enqueue NDRange Kernel",
          "signature": "CommandQueue-\u003eKernel-\u003eCLuint-\u003ePtr CLsizei-\u003ePtr CLsizei-\u003ePtr CLsizei-\u003eCLuint-\u003ePtr Event-\u003ePtr Event-\u003eIO CLint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Raw.html#v:raw_clEnqueueNDRangeKernel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Raw",
          "name": "raw_clEnqueueNativeKernel",
          "package": "OpenCLWrappers",
          "signature": "FunPtr NativeKernelCallback -\u003e Ptr () -\u003e CLsizei -\u003e CLuint -\u003e Ptr Mem -\u003e Ptr (Ptr ()) -\u003e CLuint -\u003e Ptr Event -\u003e Ptr Event -\u003e IO CLint",
          "source": "src/System-OpenCL-Wrappers-Raw.html#raw_clEnqueueNativeKernel",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Raw",
          "module": "System.OpenCL.Wrappers.Raw",
          "name": "raw_clEnqueueNativeKernel",
          "normalized": "FunPtr NativeKernelCallback-\u003ePtr()-\u003eCLsizei-\u003eCLuint-\u003ePtr Mem-\u003ePtr(Ptr())-\u003eCLuint-\u003ePtr Event-\u003ePtr Event-\u003eIO CLint",
          "package": "OpenCLWrappers",
          "partial": "Enqueue Native Kernel",
          "signature": "FunPtr NativeKernelCallback-\u003ePtr()-\u003eCLsizei-\u003eCLuint-\u003ePtr Mem-\u003ePtr(Ptr())-\u003eCLuint-\u003ePtr Event-\u003ePtr Event-\u003eIO CLint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Raw.html#v:raw_clEnqueueNativeKernel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Raw",
          "name": "raw_clEnqueueReadBuffer",
          "package": "OpenCLWrappers",
          "signature": "CommandQueue -\u003e Mem -\u003e CLbool -\u003e CLsizei -\u003e CLsizei -\u003e Ptr () -\u003e CLuint -\u003e Ptr Event -\u003e Ptr Event -\u003e IO CLint",
          "source": "src/System-OpenCL-Wrappers-Raw.html#raw_clEnqueueReadBuffer",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Raw",
          "module": "System.OpenCL.Wrappers.Raw",
          "name": "raw_clEnqueueReadBuffer",
          "normalized": "CommandQueue-\u003eMem-\u003eCLbool-\u003eCLsizei-\u003eCLsizei-\u003ePtr()-\u003eCLuint-\u003ePtr Event-\u003ePtr Event-\u003eIO CLint",
          "package": "OpenCLWrappers",
          "partial": "Enqueue Read Buffer",
          "signature": "CommandQueue-\u003eMem-\u003eCLbool-\u003eCLsizei-\u003eCLsizei-\u003ePtr()-\u003eCLuint-\u003ePtr Event-\u003ePtr Event-\u003eIO CLint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Raw.html#v:raw_clEnqueueReadBuffer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Raw",
          "name": "raw_clEnqueueReadImage",
          "package": "OpenCLWrappers",
          "signature": "CommandQueue -\u003e Mem -\u003e CLbool -\u003e Ptr CLsizei -\u003e Ptr CLsizei -\u003e CLsizei -\u003e CLsizei -\u003e Ptr () -\u003e CLuint -\u003e Ptr Event -\u003e Ptr Event -\u003e IO CLint",
          "source": "src/System-OpenCL-Wrappers-Raw.html#raw_clEnqueueReadImage",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Raw",
          "module": "System.OpenCL.Wrappers.Raw",
          "name": "raw_clEnqueueReadImage",
          "normalized": "CommandQueue-\u003eMem-\u003eCLbool-\u003ePtr CLsizei-\u003ePtr CLsizei-\u003eCLsizei-\u003eCLsizei-\u003ePtr()-\u003eCLuint-\u003ePtr Event-\u003ePtr Event-\u003eIO CLint",
          "package": "OpenCLWrappers",
          "partial": "Enqueue Read Image",
          "signature": "CommandQueue-\u003eMem-\u003eCLbool-\u003ePtr CLsizei-\u003ePtr CLsizei-\u003eCLsizei-\u003eCLsizei-\u003ePtr()-\u003eCLuint-\u003ePtr Event-\u003ePtr Event-\u003eIO CLint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Raw.html#v:raw_clEnqueueReadImage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Raw",
          "name": "raw_clEnqueueTask",
          "package": "OpenCLWrappers",
          "signature": "CommandQueue -\u003e Kernel -\u003e CLuint -\u003e Ptr Event -\u003e Ptr Event -\u003e IO CLint",
          "source": "src/System-OpenCL-Wrappers-Raw.html#raw_clEnqueueTask",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Raw",
          "module": "System.OpenCL.Wrappers.Raw",
          "name": "raw_clEnqueueTask",
          "normalized": "CommandQueue-\u003eKernel-\u003eCLuint-\u003ePtr Event-\u003ePtr Event-\u003eIO CLint",
          "package": "OpenCLWrappers",
          "partial": "Enqueue Task",
          "signature": "CommandQueue-\u003eKernel-\u003eCLuint-\u003ePtr Event-\u003ePtr Event-\u003eIO CLint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Raw.html#v:raw_clEnqueueTask"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Raw",
          "name": "raw_clEnqueueUnmapMemObject",
          "package": "OpenCLWrappers",
          "signature": "CommandQueue -\u003e Mem -\u003e Ptr () -\u003e CLuint -\u003e Ptr Event -\u003e Ptr Event -\u003e IO CLint",
          "source": "src/System-OpenCL-Wrappers-Raw.html#raw_clEnqueueUnmapMemObject",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Raw",
          "module": "System.OpenCL.Wrappers.Raw",
          "name": "raw_clEnqueueUnmapMemObject",
          "normalized": "CommandQueue-\u003eMem-\u003ePtr()-\u003eCLuint-\u003ePtr Event-\u003ePtr Event-\u003eIO CLint",
          "package": "OpenCLWrappers",
          "partial": "Enqueue Unmap Mem Object",
          "signature": "CommandQueue-\u003eMem-\u003ePtr()-\u003eCLuint-\u003ePtr Event-\u003ePtr Event-\u003eIO CLint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Raw.html#v:raw_clEnqueueUnmapMemObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Raw",
          "name": "raw_clEnqueueWaitForEvents",
          "package": "OpenCLWrappers",
          "signature": "CommandQueue -\u003e CLuint -\u003e Ptr Event -\u003e IO CLint",
          "source": "src/System-OpenCL-Wrappers-Raw.html#raw_clEnqueueWaitForEvents",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Raw",
          "module": "System.OpenCL.Wrappers.Raw",
          "name": "raw_clEnqueueWaitForEvents",
          "normalized": "CommandQueue-\u003eCLuint-\u003ePtr Event-\u003eIO CLint",
          "package": "OpenCLWrappers",
          "partial": "Enqueue Wait For Events",
          "signature": "CommandQueue-\u003eCLuint-\u003ePtr Event-\u003eIO CLint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Raw.html#v:raw_clEnqueueWaitForEvents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Raw",
          "name": "raw_clEnqueueWriteBuffer",
          "package": "OpenCLWrappers",
          "signature": "CommandQueue -\u003e Mem -\u003e CLbool -\u003e CLsizei -\u003e CLsizei -\u003e Ptr () -\u003e CLuint -\u003e Ptr Event -\u003e Ptr Event -\u003e IO CLint",
          "source": "src/System-OpenCL-Wrappers-Raw.html#raw_clEnqueueWriteBuffer",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Raw",
          "module": "System.OpenCL.Wrappers.Raw",
          "name": "raw_clEnqueueWriteBuffer",
          "normalized": "CommandQueue-\u003eMem-\u003eCLbool-\u003eCLsizei-\u003eCLsizei-\u003ePtr()-\u003eCLuint-\u003ePtr Event-\u003ePtr Event-\u003eIO CLint",
          "package": "OpenCLWrappers",
          "partial": "Enqueue Write Buffer",
          "signature": "CommandQueue-\u003eMem-\u003eCLbool-\u003eCLsizei-\u003eCLsizei-\u003ePtr()-\u003eCLuint-\u003ePtr Event-\u003ePtr Event-\u003eIO CLint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Raw.html#v:raw_clEnqueueWriteBuffer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Raw",
          "name": "raw_clEnqueueWriteImage",
          "package": "OpenCLWrappers",
          "signature": "CommandQueue -\u003e Mem -\u003e CLbool -\u003e Ptr CLsizei -\u003e Ptr CLsizei -\u003e CLsizei -\u003e CLsizei -\u003e Ptr () -\u003e CLuint -\u003e Ptr Event -\u003e Ptr Event -\u003e IO CLint",
          "source": "src/System-OpenCL-Wrappers-Raw.html#raw_clEnqueueWriteImage",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Raw",
          "module": "System.OpenCL.Wrappers.Raw",
          "name": "raw_clEnqueueWriteImage",
          "normalized": "CommandQueue-\u003eMem-\u003eCLbool-\u003ePtr CLsizei-\u003ePtr CLsizei-\u003eCLsizei-\u003eCLsizei-\u003ePtr()-\u003eCLuint-\u003ePtr Event-\u003ePtr Event-\u003eIO CLint",
          "package": "OpenCLWrappers",
          "partial": "Enqueue Write Image",
          "signature": "CommandQueue-\u003eMem-\u003eCLbool-\u003ePtr CLsizei-\u003ePtr CLsizei-\u003eCLsizei-\u003eCLsizei-\u003ePtr()-\u003eCLuint-\u003ePtr Event-\u003ePtr Event-\u003eIO CLint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Raw.html#v:raw_clEnqueueWriteImage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Raw",
          "name": "raw_clFinish",
          "package": "OpenCLWrappers",
          "signature": "CommandQueue -\u003e IO CLint",
          "source": "src/System-OpenCL-Wrappers-Raw.html#raw_clFinish",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Raw",
          "module": "System.OpenCL.Wrappers.Raw",
          "name": "raw_clFinish",
          "normalized": "CommandQueue-\u003eIO CLint",
          "package": "OpenCLWrappers",
          "partial": "Finish",
          "signature": "CommandQueue-\u003eIO CLint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Raw.html#v:raw_clFinish"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Raw",
          "name": "raw_clFlush",
          "package": "OpenCLWrappers",
          "signature": "CommandQueue -\u003e IO CLint",
          "source": "src/System-OpenCL-Wrappers-Raw.html#raw_clFlush",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Raw",
          "module": "System.OpenCL.Wrappers.Raw",
          "name": "raw_clFlush",
          "normalized": "CommandQueue-\u003eIO CLint",
          "package": "OpenCLWrappers",
          "partial": "Flush",
          "signature": "CommandQueue-\u003eIO CLint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Raw.html#v:raw_clFlush"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Raw",
          "name": "raw_clGetCommandQueueInfo",
          "package": "OpenCLWrappers",
          "signature": "CommandQueue -\u003e CLuint -\u003e CLsizei -\u003e Ptr () -\u003e Ptr CLsizei -\u003e IO CLint",
          "source": "src/System-OpenCL-Wrappers-Raw.html#raw_clGetCommandQueueInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Raw",
          "module": "System.OpenCL.Wrappers.Raw",
          "name": "raw_clGetCommandQueueInfo",
          "normalized": "CommandQueue-\u003eCLuint-\u003eCLsizei-\u003ePtr()-\u003ePtr CLsizei-\u003eIO CLint",
          "package": "OpenCLWrappers",
          "partial": "Get Command Queue Info",
          "signature": "CommandQueue-\u003eCLuint-\u003eCLsizei-\u003ePtr()-\u003ePtr CLsizei-\u003eIO CLint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Raw.html#v:raw_clGetCommandQueueInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Raw",
          "name": "raw_clGetContextInfo",
          "package": "OpenCLWrappers",
          "signature": "Context -\u003e CLuint -\u003e CLsizei -\u003e Ptr () -\u003e Ptr CLsizei -\u003e IO CLint",
          "source": "src/System-OpenCL-Wrappers-Raw.html#raw_clGetContextInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Raw",
          "module": "System.OpenCL.Wrappers.Raw",
          "name": "raw_clGetContextInfo",
          "normalized": "Context-\u003eCLuint-\u003eCLsizei-\u003ePtr()-\u003ePtr CLsizei-\u003eIO CLint",
          "package": "OpenCLWrappers",
          "partial": "Get Context Info",
          "signature": "Context-\u003eCLuint-\u003eCLsizei-\u003ePtr()-\u003ePtr CLsizei-\u003eIO CLint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Raw.html#v:raw_clGetContextInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Raw",
          "name": "raw_clGetDeviceIDs",
          "package": "OpenCLWrappers",
          "signature": "PlatformID -\u003e CLbitfield -\u003e CLuint -\u003e Ptr DeviceID -\u003e Ptr CLuint -\u003e IO CLint",
          "source": "src/System-OpenCL-Wrappers-Raw.html#raw_clGetDeviceIDs",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Raw",
          "module": "System.OpenCL.Wrappers.Raw",
          "name": "raw_clGetDeviceIDs",
          "normalized": "PlatformID-\u003eCLbitfield-\u003eCLuint-\u003ePtr DeviceID-\u003ePtr CLuint-\u003eIO CLint",
          "package": "OpenCLWrappers",
          "partial": "Get Device IDs",
          "signature": "PlatformID-\u003eCLbitfield-\u003eCLuint-\u003ePtr DeviceID-\u003ePtr CLuint-\u003eIO CLint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Raw.html#v:raw_clGetDeviceIDs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Raw",
          "name": "raw_clGetDeviceInfo",
          "package": "OpenCLWrappers",
          "signature": "DeviceID -\u003e CLuint -\u003e CLsizei -\u003e Ptr () -\u003e Ptr CLsizei -\u003e IO CLint",
          "source": "src/System-OpenCL-Wrappers-Raw.html#raw_clGetDeviceInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Raw",
          "module": "System.OpenCL.Wrappers.Raw",
          "name": "raw_clGetDeviceInfo",
          "normalized": "DeviceID-\u003eCLuint-\u003eCLsizei-\u003ePtr()-\u003ePtr CLsizei-\u003eIO CLint",
          "package": "OpenCLWrappers",
          "partial": "Get Device Info",
          "signature": "DeviceID-\u003eCLuint-\u003eCLsizei-\u003ePtr()-\u003ePtr CLsizei-\u003eIO CLint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Raw.html#v:raw_clGetDeviceInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Raw",
          "name": "raw_clGetEventInfo",
          "package": "OpenCLWrappers",
          "signature": "Event -\u003e CLuint -\u003e CLsizei -\u003e Ptr () -\u003e Ptr CLsizei -\u003e IO CLint",
          "source": "src/System-OpenCL-Wrappers-Raw.html#raw_clGetEventInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Raw",
          "module": "System.OpenCL.Wrappers.Raw",
          "name": "raw_clGetEventInfo",
          "normalized": "Event-\u003eCLuint-\u003eCLsizei-\u003ePtr()-\u003ePtr CLsizei-\u003eIO CLint",
          "package": "OpenCLWrappers",
          "partial": "Get Event Info",
          "signature": "Event-\u003eCLuint-\u003eCLsizei-\u003ePtr()-\u003ePtr CLsizei-\u003eIO CLint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Raw.html#v:raw_clGetEventInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Raw",
          "name": "raw_clGetEventProfilingInfo",
          "package": "OpenCLWrappers",
          "signature": "Event -\u003e CLuint -\u003e CLsizei -\u003e Ptr () -\u003e Ptr CLsizei -\u003e IO CLint",
          "source": "src/System-OpenCL-Wrappers-Raw.html#raw_clGetEventProfilingInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Raw",
          "module": "System.OpenCL.Wrappers.Raw",
          "name": "raw_clGetEventProfilingInfo",
          "normalized": "Event-\u003eCLuint-\u003eCLsizei-\u003ePtr()-\u003ePtr CLsizei-\u003eIO CLint",
          "package": "OpenCLWrappers",
          "partial": "Get Event Profiling Info",
          "signature": "Event-\u003eCLuint-\u003eCLsizei-\u003ePtr()-\u003ePtr CLsizei-\u003eIO CLint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Raw.html#v:raw_clGetEventProfilingInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Raw",
          "name": "raw_clGetExtensionFunctionAddress",
          "package": "OpenCLWrappers",
          "signature": "CString -\u003e IO (Ptr ())",
          "source": "src/System-OpenCL-Wrappers-Raw.html#raw_clGetExtensionFunctionAddress",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Raw",
          "module": "System.OpenCL.Wrappers.Raw",
          "name": "raw_clGetExtensionFunctionAddress",
          "normalized": "CString-\u003eIO(Ptr())",
          "package": "OpenCLWrappers",
          "partial": "Get Extension Function Address",
          "signature": "CString-\u003eIO(Ptr())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Raw.html#v:raw_clGetExtensionFunctionAddress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Raw",
          "name": "raw_clGetImageInfo",
          "package": "OpenCLWrappers",
          "signature": "Mem -\u003e CLuint -\u003e CLsizei -\u003e Ptr () -\u003e Ptr CLsizei -\u003e IO CLint",
          "source": "src/System-OpenCL-Wrappers-Raw.html#raw_clGetImageInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Raw",
          "module": "System.OpenCL.Wrappers.Raw",
          "name": "raw_clGetImageInfo",
          "normalized": "Mem-\u003eCLuint-\u003eCLsizei-\u003ePtr()-\u003ePtr CLsizei-\u003eIO CLint",
          "package": "OpenCLWrappers",
          "partial": "Get Image Info",
          "signature": "Mem-\u003eCLuint-\u003eCLsizei-\u003ePtr()-\u003ePtr CLsizei-\u003eIO CLint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Raw.html#v:raw_clGetImageInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Raw",
          "name": "raw_clGetKernelInfo",
          "package": "OpenCLWrappers",
          "signature": "Kernel -\u003e CLuint -\u003e CLsizei -\u003e Ptr () -\u003e Ptr CLsizei -\u003e IO CLint",
          "source": "src/System-OpenCL-Wrappers-Raw.html#raw_clGetKernelInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Raw",
          "module": "System.OpenCL.Wrappers.Raw",
          "name": "raw_clGetKernelInfo",
          "normalized": "Kernel-\u003eCLuint-\u003eCLsizei-\u003ePtr()-\u003ePtr CLsizei-\u003eIO CLint",
          "package": "OpenCLWrappers",
          "partial": "Get Kernel Info",
          "signature": "Kernel-\u003eCLuint-\u003eCLsizei-\u003ePtr()-\u003ePtr CLsizei-\u003eIO CLint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Raw.html#v:raw_clGetKernelInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Raw",
          "name": "raw_clGetKernelWorkGroupInfo",
          "package": "OpenCLWrappers",
          "signature": "Kernel -\u003e DeviceID -\u003e CLuint -\u003e CLsizei -\u003e Ptr () -\u003e Ptr CLsizei -\u003e IO CLint",
          "source": "src/System-OpenCL-Wrappers-Raw.html#raw_clGetKernelWorkGroupInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Raw",
          "module": "System.OpenCL.Wrappers.Raw",
          "name": "raw_clGetKernelWorkGroupInfo",
          "normalized": "Kernel-\u003eDeviceID-\u003eCLuint-\u003eCLsizei-\u003ePtr()-\u003ePtr CLsizei-\u003eIO CLint",
          "package": "OpenCLWrappers",
          "partial": "Get Kernel Work Group Info",
          "signature": "Kernel-\u003eDeviceID-\u003eCLuint-\u003eCLsizei-\u003ePtr()-\u003ePtr CLsizei-\u003eIO CLint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Raw.html#v:raw_clGetKernelWorkGroupInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Raw",
          "name": "raw_clGetMemObjectInfo",
          "package": "OpenCLWrappers",
          "signature": "Mem -\u003e CLuint -\u003e CLsizei -\u003e Ptr () -\u003e Ptr CLsizei -\u003e IO CLint",
          "source": "src/System-OpenCL-Wrappers-Raw.html#raw_clGetMemObjectInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Raw",
          "module": "System.OpenCL.Wrappers.Raw",
          "name": "raw_clGetMemObjectInfo",
          "normalized": "Mem-\u003eCLuint-\u003eCLsizei-\u003ePtr()-\u003ePtr CLsizei-\u003eIO CLint",
          "package": "OpenCLWrappers",
          "partial": "Get Mem Object Info",
          "signature": "Mem-\u003eCLuint-\u003eCLsizei-\u003ePtr()-\u003ePtr CLsizei-\u003eIO CLint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Raw.html#v:raw_clGetMemObjectInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Raw",
          "name": "raw_clGetPlatformIDs",
          "package": "OpenCLWrappers",
          "signature": "CLuint -\u003e Ptr PlatformID -\u003e Ptr CLuint -\u003e IO CLint",
          "source": "src/System-OpenCL-Wrappers-Raw.html#raw_clGetPlatformIDs",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Raw",
          "module": "System.OpenCL.Wrappers.Raw",
          "name": "raw_clGetPlatformIDs",
          "normalized": "CLuint-\u003ePtr PlatformID-\u003ePtr CLuint-\u003eIO CLint",
          "package": "OpenCLWrappers",
          "partial": "Get Platform IDs",
          "signature": "CLuint-\u003ePtr PlatformID-\u003ePtr CLuint-\u003eIO CLint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Raw.html#v:raw_clGetPlatformIDs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Raw",
          "name": "raw_clGetPlatformInfo",
          "package": "OpenCLWrappers",
          "signature": "PlatformID -\u003e CLuint -\u003e CSize -\u003e Ptr () -\u003e Ptr CSize -\u003e IO CLint",
          "source": "src/System-OpenCL-Wrappers-Raw.html#raw_clGetPlatformInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Raw",
          "module": "System.OpenCL.Wrappers.Raw",
          "name": "raw_clGetPlatformInfo",
          "normalized": "PlatformID-\u003eCLuint-\u003eCSize-\u003ePtr()-\u003ePtr CSize-\u003eIO CLint",
          "package": "OpenCLWrappers",
          "partial": "Get Platform Info",
          "signature": "PlatformID-\u003eCLuint-\u003eCSize-\u003ePtr()-\u003ePtr CSize-\u003eIO CLint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Raw.html#v:raw_clGetPlatformInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Raw",
          "name": "raw_clGetProgramBuildInfo",
          "package": "OpenCLWrappers",
          "signature": "Program -\u003e DeviceID -\u003e CLuint -\u003e CLsizei -\u003e Ptr () -\u003e Ptr CLsizei -\u003e IO CLint",
          "source": "src/System-OpenCL-Wrappers-Raw.html#raw_clGetProgramBuildInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Raw",
          "module": "System.OpenCL.Wrappers.Raw",
          "name": "raw_clGetProgramBuildInfo",
          "normalized": "Program-\u003eDeviceID-\u003eCLuint-\u003eCLsizei-\u003ePtr()-\u003ePtr CLsizei-\u003eIO CLint",
          "package": "OpenCLWrappers",
          "partial": "Get Program Build Info",
          "signature": "Program-\u003eDeviceID-\u003eCLuint-\u003eCLsizei-\u003ePtr()-\u003ePtr CLsizei-\u003eIO CLint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Raw.html#v:raw_clGetProgramBuildInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Raw",
          "name": "raw_clGetProgramInfo",
          "package": "OpenCLWrappers",
          "signature": "Program -\u003e CLuint -\u003e CLsizei -\u003e Ptr () -\u003e Ptr CLsizei -\u003e IO CLint",
          "source": "src/System-OpenCL-Wrappers-Raw.html#raw_clGetProgramInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Raw",
          "module": "System.OpenCL.Wrappers.Raw",
          "name": "raw_clGetProgramInfo",
          "normalized": "Program-\u003eCLuint-\u003eCLsizei-\u003ePtr()-\u003ePtr CLsizei-\u003eIO CLint",
          "package": "OpenCLWrappers",
          "partial": "Get Program Info",
          "signature": "Program-\u003eCLuint-\u003eCLsizei-\u003ePtr()-\u003ePtr CLsizei-\u003eIO CLint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Raw.html#v:raw_clGetProgramInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Raw",
          "name": "raw_clGetSamplerInfo",
          "package": "OpenCLWrappers",
          "signature": "Sampler -\u003e CLuint -\u003e CLsizei -\u003e Ptr () -\u003e Ptr CLsizei -\u003e IO CLint",
          "source": "src/System-OpenCL-Wrappers-Raw.html#raw_clGetSamplerInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Raw",
          "module": "System.OpenCL.Wrappers.Raw",
          "name": "raw_clGetSamplerInfo",
          "normalized": "Sampler-\u003eCLuint-\u003eCLsizei-\u003ePtr()-\u003ePtr CLsizei-\u003eIO CLint",
          "package": "OpenCLWrappers",
          "partial": "Get Sampler Info",
          "signature": "Sampler-\u003eCLuint-\u003eCLsizei-\u003ePtr()-\u003ePtr CLsizei-\u003eIO CLint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Raw.html#v:raw_clGetSamplerInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Raw",
          "name": "raw_clGetSupportedImageFormats",
          "package": "OpenCLWrappers",
          "signature": "Context -\u003e CLbitfield -\u003e CLuint -\u003e CLuint -\u003e Ptr CLuint -\u003e Ptr CLuint -\u003e IO CLint",
          "source": "src/System-OpenCL-Wrappers-Raw.html#raw_clGetSupportedImageFormats",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Raw",
          "module": "System.OpenCL.Wrappers.Raw",
          "name": "raw_clGetSupportedImageFormats",
          "normalized": "Context-\u003eCLbitfield-\u003eCLuint-\u003eCLuint-\u003ePtr CLuint-\u003ePtr CLuint-\u003eIO CLint",
          "package": "OpenCLWrappers",
          "partial": "Get Supported Image Formats",
          "signature": "Context-\u003eCLbitfield-\u003eCLuint-\u003eCLuint-\u003ePtr CLuint-\u003ePtr CLuint-\u003eIO CLint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Raw.html#v:raw_clGetSupportedImageFormats"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Raw",
          "name": "raw_clReleaseCommandQueue",
          "package": "OpenCLWrappers",
          "signature": "CommandQueue -\u003e IO CLint",
          "source": "src/System-OpenCL-Wrappers-Raw.html#raw_clReleaseCommandQueue",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Raw",
          "module": "System.OpenCL.Wrappers.Raw",
          "name": "raw_clReleaseCommandQueue",
          "normalized": "CommandQueue-\u003eIO CLint",
          "package": "OpenCLWrappers",
          "partial": "Release Command Queue",
          "signature": "CommandQueue-\u003eIO CLint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Raw.html#v:raw_clReleaseCommandQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Raw",
          "name": "raw_clReleaseContext",
          "package": "OpenCLWrappers",
          "signature": "Context -\u003e IO CLint",
          "source": "src/System-OpenCL-Wrappers-Raw.html#raw_clReleaseContext",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Raw",
          "module": "System.OpenCL.Wrappers.Raw",
          "name": "raw_clReleaseContext",
          "normalized": "Context-\u003eIO CLint",
          "package": "OpenCLWrappers",
          "partial": "Release Context",
          "signature": "Context-\u003eIO CLint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Raw.html#v:raw_clReleaseContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Raw",
          "name": "raw_clReleaseEvent",
          "package": "OpenCLWrappers",
          "signature": "Event -\u003e IO CLint",
          "source": "src/System-OpenCL-Wrappers-Raw.html#raw_clReleaseEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Raw",
          "module": "System.OpenCL.Wrappers.Raw",
          "name": "raw_clReleaseEvent",
          "normalized": "Event-\u003eIO CLint",
          "package": "OpenCLWrappers",
          "partial": "Release Event",
          "signature": "Event-\u003eIO CLint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Raw.html#v:raw_clReleaseEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Raw",
          "name": "raw_clReleaseKernel",
          "package": "OpenCLWrappers",
          "signature": "Kernel -\u003e IO CLint",
          "source": "src/System-OpenCL-Wrappers-Raw.html#raw_clReleaseKernel",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Raw",
          "module": "System.OpenCL.Wrappers.Raw",
          "name": "raw_clReleaseKernel",
          "normalized": "Kernel-\u003eIO CLint",
          "package": "OpenCLWrappers",
          "partial": "Release Kernel",
          "signature": "Kernel-\u003eIO CLint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Raw.html#v:raw_clReleaseKernel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Raw",
          "name": "raw_clReleaseMemObject",
          "package": "OpenCLWrappers",
          "signature": "Mem -\u003e IO CLint",
          "source": "src/System-OpenCL-Wrappers-Raw.html#raw_clReleaseMemObject",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Raw",
          "module": "System.OpenCL.Wrappers.Raw",
          "name": "raw_clReleaseMemObject",
          "normalized": "Mem-\u003eIO CLint",
          "package": "OpenCLWrappers",
          "partial": "Release Mem Object",
          "signature": "Mem-\u003eIO CLint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Raw.html#v:raw_clReleaseMemObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Raw",
          "name": "raw_clReleaseProgram",
          "package": "OpenCLWrappers",
          "signature": "Program -\u003e IO CLint",
          "source": "src/System-OpenCL-Wrappers-Raw.html#raw_clReleaseProgram",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Raw",
          "module": "System.OpenCL.Wrappers.Raw",
          "name": "raw_clReleaseProgram",
          "normalized": "Program-\u003eIO CLint",
          "package": "OpenCLWrappers",
          "partial": "Release Program",
          "signature": "Program-\u003eIO CLint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Raw.html#v:raw_clReleaseProgram"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Raw",
          "name": "raw_clReleaseSampler",
          "package": "OpenCLWrappers",
          "signature": "Sampler -\u003e IO CLint",
          "source": "src/System-OpenCL-Wrappers-Raw.html#raw_clReleaseSampler",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Raw",
          "module": "System.OpenCL.Wrappers.Raw",
          "name": "raw_clReleaseSampler",
          "normalized": "Sampler-\u003eIO CLint",
          "package": "OpenCLWrappers",
          "partial": "Release Sampler",
          "signature": "Sampler-\u003eIO CLint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Raw.html#v:raw_clReleaseSampler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Raw",
          "name": "raw_clRetainCommandQueue",
          "package": "OpenCLWrappers",
          "signature": "CommandQueue -\u003e IO CLint",
          "source": "src/System-OpenCL-Wrappers-Raw.html#raw_clRetainCommandQueue",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Raw",
          "module": "System.OpenCL.Wrappers.Raw",
          "name": "raw_clRetainCommandQueue",
          "normalized": "CommandQueue-\u003eIO CLint",
          "package": "OpenCLWrappers",
          "partial": "Retain Command Queue",
          "signature": "CommandQueue-\u003eIO CLint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Raw.html#v:raw_clRetainCommandQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Raw",
          "name": "raw_clRetainContext",
          "package": "OpenCLWrappers",
          "signature": "Context -\u003e IO CLint",
          "source": "src/System-OpenCL-Wrappers-Raw.html#raw_clRetainContext",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Raw",
          "module": "System.OpenCL.Wrappers.Raw",
          "name": "raw_clRetainContext",
          "normalized": "Context-\u003eIO CLint",
          "package": "OpenCLWrappers",
          "partial": "Retain Context",
          "signature": "Context-\u003eIO CLint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Raw.html#v:raw_clRetainContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Raw",
          "name": "raw_clRetainEvent",
          "package": "OpenCLWrappers",
          "signature": "Event -\u003e IO CLint",
          "source": "src/System-OpenCL-Wrappers-Raw.html#raw_clRetainEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Raw",
          "module": "System.OpenCL.Wrappers.Raw",
          "name": "raw_clRetainEvent",
          "normalized": "Event-\u003eIO CLint",
          "package": "OpenCLWrappers",
          "partial": "Retain Event",
          "signature": "Event-\u003eIO CLint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Raw.html#v:raw_clRetainEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Raw",
          "name": "raw_clRetainKernel",
          "package": "OpenCLWrappers",
          "signature": "Kernel -\u003e IO CLint",
          "source": "src/System-OpenCL-Wrappers-Raw.html#raw_clRetainKernel",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Raw",
          "module": "System.OpenCL.Wrappers.Raw",
          "name": "raw_clRetainKernel",
          "normalized": "Kernel-\u003eIO CLint",
          "package": "OpenCLWrappers",
          "partial": "Retain Kernel",
          "signature": "Kernel-\u003eIO CLint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Raw.html#v:raw_clRetainKernel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Raw",
          "name": "raw_clRetainMemObject",
          "package": "OpenCLWrappers",
          "signature": "Mem -\u003e IO CLint",
          "source": "src/System-OpenCL-Wrappers-Raw.html#raw_clRetainMemObject",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Raw",
          "module": "System.OpenCL.Wrappers.Raw",
          "name": "raw_clRetainMemObject",
          "normalized": "Mem-\u003eIO CLint",
          "package": "OpenCLWrappers",
          "partial": "Retain Mem Object",
          "signature": "Mem-\u003eIO CLint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Raw.html#v:raw_clRetainMemObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Raw",
          "name": "raw_clRetainProgram",
          "package": "OpenCLWrappers",
          "signature": "Program -\u003e IO CLint",
          "source": "src/System-OpenCL-Wrappers-Raw.html#raw_clRetainProgram",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Raw",
          "module": "System.OpenCL.Wrappers.Raw",
          "name": "raw_clRetainProgram",
          "normalized": "Program-\u003eIO CLint",
          "package": "OpenCLWrappers",
          "partial": "Retain Program",
          "signature": "Program-\u003eIO CLint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Raw.html#v:raw_clRetainProgram"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Raw",
          "name": "raw_clRetainSampler",
          "package": "OpenCLWrappers",
          "signature": "Sampler -\u003e IO CLint",
          "source": "src/System-OpenCL-Wrappers-Raw.html#raw_clRetainSampler",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Raw",
          "module": "System.OpenCL.Wrappers.Raw",
          "name": "raw_clRetainSampler",
          "normalized": "Sampler-\u003eIO CLint",
          "package": "OpenCLWrappers",
          "partial": "Retain Sampler",
          "signature": "Sampler-\u003eIO CLint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Raw.html#v:raw_clRetainSampler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Raw",
          "name": "raw_clSetCommandQueueProperty",
          "package": "OpenCLWrappers",
          "signature": "CommandQueue -\u003e CLbitfield -\u003e CLbool -\u003e Ptr CLbitfield -\u003e IO CLint",
          "source": "src/System-OpenCL-Wrappers-Raw.html#raw_clSetCommandQueueProperty",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Raw",
          "module": "System.OpenCL.Wrappers.Raw",
          "name": "raw_clSetCommandQueueProperty",
          "normalized": "CommandQueue-\u003eCLbitfield-\u003eCLbool-\u003ePtr CLbitfield-\u003eIO CLint",
          "package": "OpenCLWrappers",
          "partial": "Set Command Queue Property",
          "signature": "CommandQueue-\u003eCLbitfield-\u003eCLbool-\u003ePtr CLbitfield-\u003eIO CLint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Raw.html#v:raw_clSetCommandQueueProperty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Raw",
          "name": "raw_clSetKernelArg",
          "package": "OpenCLWrappers",
          "signature": "Kernel -\u003e CLuint -\u003e CLsizei -\u003e Ptr () -\u003e IO CLint",
          "source": "src/System-OpenCL-Wrappers-Raw.html#raw_clSetKernelArg",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Raw",
          "module": "System.OpenCL.Wrappers.Raw",
          "name": "raw_clSetKernelArg",
          "normalized": "Kernel-\u003eCLuint-\u003eCLsizei-\u003ePtr()-\u003eIO CLint",
          "package": "OpenCLWrappers",
          "partial": "Set Kernel Arg",
          "signature": "Kernel-\u003eCLuint-\u003eCLsizei-\u003ePtr()-\u003eIO CLint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Raw.html#v:raw_clSetKernelArg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Raw",
          "name": "raw_clUnloadCompiler",
          "package": "OpenCLWrappers",
          "signature": "IO CLint",
          "source": "src/System-OpenCL-Wrappers-Raw.html#raw_clUnloadCompiler",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Raw",
          "module": "System.OpenCL.Wrappers.Raw",
          "name": "raw_clUnloadCompiler",
          "package": "OpenCLWrappers",
          "partial": "Unload Compiler",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Raw.html#v:raw_clUnloadCompiler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Raw",
          "name": "raw_clWaitForEvents",
          "package": "OpenCLWrappers",
          "signature": "CLuint -\u003e Ptr Event -\u003e IO CLint",
          "source": "src/System-OpenCL-Wrappers-Raw.html#raw_clWaitForEvents",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Raw",
          "module": "System.OpenCL.Wrappers.Raw",
          "name": "raw_clWaitForEvents",
          "normalized": "CLuint-\u003ePtr Event-\u003eIO CLint",
          "package": "OpenCLWrappers",
          "partial": "Wait For Events",
          "signature": "CLuint-\u003ePtr Event-\u003eIO CLint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Raw.html#v:raw_clWaitForEvents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Raw",
          "name": "wrapBuildProgramCallback",
          "package": "OpenCLWrappers",
          "signature": "BuildProgramCallback -\u003e IO (FunPtr BuildProgramCallback)",
          "source": "src/System-OpenCL-Wrappers-Raw.html#wrapBuildProgramCallback",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Raw",
          "module": "System.OpenCL.Wrappers.Raw",
          "name": "wrapBuildProgramCallback",
          "normalized": "BuildProgramCallback-\u003eIO(FunPtr BuildProgramCallback)",
          "package": "OpenCLWrappers",
          "partial": "Build Program Callback",
          "signature": "BuildProgramCallback-\u003eIO(FunPtr BuildProgramCallback)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Raw.html#v:wrapBuildProgramCallback"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Raw",
          "name": "wrapContextCallback",
          "package": "OpenCLWrappers",
          "signature": "ContextCallback -\u003e IO (FunPtr ContextCallback)",
          "source": "src/System-OpenCL-Wrappers-Raw.html#wrapContextCallback",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Raw",
          "module": "System.OpenCL.Wrappers.Raw",
          "name": "wrapContextCallback",
          "normalized": "ContextCallback-\u003eIO(FunPtr ContextCallback)",
          "package": "OpenCLWrappers",
          "partial": "Context Callback",
          "signature": "ContextCallback-\u003eIO(FunPtr ContextCallback)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Raw.html#v:wrapContextCallback"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Raw",
          "name": "wrapNativeKernelCallback",
          "package": "OpenCLWrappers",
          "signature": "NativeKernelCallback -\u003e IO (FunPtr NativeKernelCallback)",
          "source": "src/System-OpenCL-Wrappers-Raw.html#wrapNativeKernelCallback",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Raw",
          "module": "System.OpenCL.Wrappers.Raw",
          "name": "wrapNativeKernelCallback",
          "normalized": "NativeKernelCallback-\u003eIO(FunPtr NativeKernelCallback)",
          "package": "OpenCLWrappers",
          "partial": "Native Kernel Callback",
          "signature": "NativeKernelCallback-\u003eIO(FunPtr NativeKernelCallback)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Raw.html#v:wrapNativeKernelCallback"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Sampler",
          "name": "Sampler",
          "package": "OpenCLWrappers",
          "source": "src/System-OpenCL-Wrappers-Sampler.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Sampler",
          "module": "System.OpenCL.Wrappers.Sampler",
          "name": "Sampler",
          "package": "OpenCLWrappers",
          "partial": "Sampler",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Sampler.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Sampler",
          "name": "clCreateSampler",
          "package": "OpenCLWrappers",
          "signature": "Context -\u003e Bool -\u003e AddressingMode -\u003e FilterMode -\u003e IO (Either ErrorCode Sampler)",
          "source": "src/System-OpenCL-Wrappers-Sampler.html#clCreateSampler",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Sampler",
          "module": "System.OpenCL.Wrappers.Sampler",
          "name": "clCreateSampler",
          "normalized": "Context-\u003eBool-\u003eAddressingMode-\u003eFilterMode-\u003eIO(Either ErrorCode Sampler)",
          "package": "OpenCLWrappers",
          "partial": "Create Sampler",
          "signature": "Context-\u003eBool-\u003eAddressingMode-\u003eFilterMode-\u003eIO(Either ErrorCode Sampler)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Sampler.html#v:clCreateSampler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Sampler",
          "name": "clGetSamplerInfo",
          "package": "OpenCLWrappers",
          "signature": "Sampler -\u003e SamplerInfo -\u003e IO (Either ErrorCode CLSamplerInfoRetval)",
          "source": "src/System-OpenCL-Wrappers-Sampler.html#clGetSamplerInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Sampler",
          "module": "System.OpenCL.Wrappers.Sampler",
          "name": "clGetSamplerInfo",
          "normalized": "Sampler-\u003eSamplerInfo-\u003eIO(Either ErrorCode CLSamplerInfoRetval)",
          "package": "OpenCLWrappers",
          "partial": "Get Sampler Info",
          "signature": "Sampler-\u003eSamplerInfo-\u003eIO(Either ErrorCode CLSamplerInfoRetval)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Sampler.html#v:clGetSamplerInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Sampler",
          "name": "clReleaseSampler",
          "package": "OpenCLWrappers",
          "signature": "Sampler -\u003e IO (Maybe ErrorCode)",
          "source": "src/System-OpenCL-Wrappers-Sampler.html#clReleaseSampler",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Sampler",
          "module": "System.OpenCL.Wrappers.Sampler",
          "name": "clReleaseSampler",
          "normalized": "Sampler-\u003eIO(Maybe ErrorCode)",
          "package": "OpenCLWrappers",
          "partial": "Release Sampler",
          "signature": "Sampler-\u003eIO(Maybe ErrorCode)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Sampler.html#v:clReleaseSampler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Sampler",
          "name": "clRetainSampler",
          "package": "OpenCLWrappers",
          "signature": "Sampler -\u003e IO (Maybe ErrorCode)",
          "source": "src/System-OpenCL-Wrappers-Sampler.html#clRetainSampler",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Sampler",
          "module": "System.OpenCL.Wrappers.Sampler",
          "name": "clRetainSampler",
          "normalized": "Sampler-\u003eIO(Maybe ErrorCode)",
          "package": "OpenCLWrappers",
          "partial": "Retain Sampler",
          "signature": "Sampler-\u003eIO(Maybe ErrorCode)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Sampler.html#v:clRetainSampler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDeclaration of types, bounds and constants \n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "Types",
          "package": "OpenCLWrappers",
          "source": "src/System-OpenCL-Wrappers-Types.html",
          "type": "module"
        },
        "index": {
          "description": "Declaration of types bounds and constants",
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "Types",
          "package": "OpenCLWrappers",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "AddressingMode",
          "package": "OpenCLWrappers",
          "source": "src/System-OpenCL-Wrappers-Types.html#AddressingMode",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "AddressingMode",
          "package": "OpenCLWrappers",
          "partial": "Addressing Mode",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#t:AddressingMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "BuildProgramCallback",
          "package": "OpenCLWrappers",
          "source": "src/System-OpenCL-Wrappers-Types.html#BuildProgramCallback",
          "type": "type"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "BuildProgramCallback",
          "package": "OpenCLWrappers",
          "partial": "Build Program Callback",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#t:BuildProgramCallback"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "BuildStatus",
          "package": "OpenCLWrappers",
          "source": "src/System-OpenCL-Wrappers-Types.html#BuildStatus",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "BuildStatus",
          "package": "OpenCLWrappers",
          "partial": "Build Status",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#t:BuildStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "CLCommandQueueInfoRetval",
          "package": "OpenCLWrappers",
          "source": "src/System-OpenCL-Wrappers-Types.html#CLCommandQueueInfoRetval",
          "type": "data"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "CLCommandQueueInfoRetval",
          "package": "OpenCLWrappers",
          "partial": "CLCommand Queue Info Retval",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#t:CLCommandQueueInfoRetval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "CLContextInfoRetval",
          "package": "OpenCLWrappers",
          "source": "src/System-OpenCL-Wrappers-Types.html#CLContextInfoRetval",
          "type": "data"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "CLContextInfoRetval",
          "package": "OpenCLWrappers",
          "partial": "CLContext Info Retval",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#t:CLContextInfoRetval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "CLDeviceInfoRetval",
          "package": "OpenCLWrappers",
          "source": "src/System-OpenCL-Wrappers-Types.html#CLDeviceInfoRetval",
          "type": "data"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "CLDeviceInfoRetval",
          "package": "OpenCLWrappers",
          "partial": "CLDevice Info Retval",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#t:CLDeviceInfoRetval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "CLEventInfoRetval",
          "package": "OpenCLWrappers",
          "source": "src/System-OpenCL-Wrappers-Types.html#CLEventInfoRetval",
          "type": "data"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "CLEventInfoRetval",
          "package": "OpenCLWrappers",
          "partial": "CLEvent Info Retval",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#t:CLEventInfoRetval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "CLEventProfilingInfoRetval",
          "package": "OpenCLWrappers",
          "source": "src/System-OpenCL-Wrappers-Types.html#CLEventProfilingInfoRetval",
          "type": "data"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "CLEventProfilingInfoRetval",
          "package": "OpenCLWrappers",
          "partial": "CLEvent Profiling Info Retval",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#t:CLEventProfilingInfoRetval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "CLImageInfoRetval",
          "package": "OpenCLWrappers",
          "source": "src/System-OpenCL-Wrappers-Types.html#CLImageInfoRetval",
          "type": "data"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "CLImageInfoRetval",
          "package": "OpenCLWrappers",
          "partial": "CLImage Info Retval",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#t:CLImageInfoRetval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "CLKernelInfoRetval",
          "package": "OpenCLWrappers",
          "source": "src/System-OpenCL-Wrappers-Types.html#CLKernelInfoRetval",
          "type": "data"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "CLKernelInfoRetval",
          "package": "OpenCLWrappers",
          "partial": "CLKernel Info Retval",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#t:CLKernelInfoRetval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "CLKernelWorkGroupInfoRetval",
          "package": "OpenCLWrappers",
          "source": "src/System-OpenCL-Wrappers-Types.html#CLKernelWorkGroupInfoRetval",
          "type": "data"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "CLKernelWorkGroupInfoRetval",
          "package": "OpenCLWrappers",
          "partial": "CLKernel Work Group Info Retval",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#t:CLKernelWorkGroupInfoRetval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "CLMemObjectInfoRetval",
          "package": "OpenCLWrappers",
          "source": "src/System-OpenCL-Wrappers-Types.html#CLMemObjectInfoRetval",
          "type": "data"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "CLMemObjectInfoRetval",
          "package": "OpenCLWrappers",
          "partial": "CLMem Object Info Retval",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#t:CLMemObjectInfoRetval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "CLPlatformInfoRetval",
          "package": "OpenCLWrappers",
          "source": "src/System-OpenCL-Wrappers-Types.html#CLPlatformInfoRetval",
          "type": "data"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "CLPlatformInfoRetval",
          "package": "OpenCLWrappers",
          "partial": "CLPlatform Info Retval",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#t:CLPlatformInfoRetval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "CLProgramBuildInfoRetval",
          "package": "OpenCLWrappers",
          "source": "src/System-OpenCL-Wrappers-Types.html#CLProgramBuildInfoRetval",
          "type": "data"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "CLProgramBuildInfoRetval",
          "package": "OpenCLWrappers",
          "partial": "CLProgram Build Info Retval",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#t:CLProgramBuildInfoRetval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "CLProgramInfoRetval",
          "package": "OpenCLWrappers",
          "source": "src/System-OpenCL-Wrappers-Types.html#CLProgramInfoRetval",
          "type": "data"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "CLProgramInfoRetval",
          "package": "OpenCLWrappers",
          "partial": "CLProgram Info Retval",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#t:CLProgramInfoRetval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "CLSamplerInfoRetval",
          "package": "OpenCLWrappers",
          "source": "src/System-OpenCL-Wrappers-Types.html#CLSamplerInfoRetval",
          "type": "data"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "CLSamplerInfoRetval",
          "package": "OpenCLWrappers",
          "partial": "CLSampler Info Retval",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#t:CLSamplerInfoRetval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "CLbitfield",
          "package": "OpenCLWrappers",
          "source": "src/System-OpenCL-Wrappers-Types.html#CLbitfield",
          "type": "type"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "CLbitfield",
          "package": "OpenCLWrappers",
          "partial": "CLbitfield",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#t:CLbitfield"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "CLbool",
          "package": "OpenCLWrappers",
          "source": "src/System-OpenCL-Wrappers-Types.html#CLbool",
          "type": "type"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "CLbool",
          "package": "OpenCLWrappers",
          "partial": "CLbool",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#t:CLbool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "CLint",
          "package": "OpenCLWrappers",
          "source": "src/System-OpenCL-Wrappers-Types.html#CLint",
          "type": "type"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "CLint",
          "package": "OpenCLWrappers",
          "partial": "CLint",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#t:CLint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "CLsizei",
          "package": "OpenCLWrappers",
          "source": "src/System-OpenCL-Wrappers-Types.html#CLsizei",
          "type": "type"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "CLsizei",
          "package": "OpenCLWrappers",
          "partial": "CLsizei",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#t:CLsizei"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "CLuint",
          "package": "OpenCLWrappers",
          "source": "src/System-OpenCL-Wrappers-Types.html#CLuint",
          "type": "type"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "CLuint",
          "package": "OpenCLWrappers",
          "partial": "CLuint",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#t:CLuint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "CLulong",
          "package": "OpenCLWrappers",
          "source": "src/System-OpenCL-Wrappers-Types.html#CLulong",
          "type": "type"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "CLulong",
          "package": "OpenCLWrappers",
          "partial": "CLulong",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#t:CLulong"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "ChannelOrder",
          "package": "OpenCLWrappers",
          "source": "src/System-OpenCL-Wrappers-Types.html#ChannelOrder",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "ChannelOrder",
          "package": "OpenCLWrappers",
          "partial": "Channel Order",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#t:ChannelOrder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "ChannelType",
          "package": "OpenCLWrappers",
          "source": "src/System-OpenCL-Wrappers-Types.html#ChannelType",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "ChannelType",
          "package": "OpenCLWrappers",
          "partial": "Channel Type",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#t:ChannelType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "CommandQueue",
          "package": "OpenCLWrappers",
          "source": "src/System-OpenCL-Wrappers-Types.html#CommandQueue",
          "type": "type"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "CommandQueue",
          "package": "OpenCLWrappers",
          "partial": "Command Queue",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#t:CommandQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "CommandQueueInfo",
          "package": "OpenCLWrappers",
          "source": "src/System-OpenCL-Wrappers-Types.html#CommandQueueInfo",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "CommandQueueInfo",
          "package": "OpenCLWrappers",
          "partial": "Command Queue Info",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#t:CommandQueueInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "CommandQueueProperties",
          "package": "OpenCLWrappers",
          "source": "src/System-OpenCL-Wrappers-Types.html#CommandQueueProperties",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "CommandQueueProperties",
          "package": "OpenCLWrappers",
          "partial": "Command Queue Properties",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#t:CommandQueueProperties"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "CommandQueuec",
          "package": "OpenCLWrappers",
          "source": "src/System-OpenCL-Wrappers-Types.html#CommandQueuec",
          "type": "data"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "CommandQueuec",
          "package": "OpenCLWrappers",
          "partial": "Command Queuec",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#t:CommandQueuec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "CommandType",
          "package": "OpenCLWrappers",
          "source": "src/System-OpenCL-Wrappers-Types.html#CommandType",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "CommandType",
          "package": "OpenCLWrappers",
          "partial": "Command Type",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#t:CommandType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "Context",
          "package": "OpenCLWrappers",
          "source": "src/System-OpenCL-Wrappers-Types.html#Context",
          "type": "type"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "Context",
          "package": "OpenCLWrappers",
          "partial": "Context",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#t:Context"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "ContextCallback",
          "package": "OpenCLWrappers",
          "source": "src/System-OpenCL-Wrappers-Types.html#ContextCallback",
          "type": "type"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "ContextCallback",
          "package": "OpenCLWrappers",
          "partial": "Context Callback",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#t:ContextCallback"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "ContextInfo",
          "package": "OpenCLWrappers",
          "source": "src/System-OpenCL-Wrappers-Types.html#ContextInfo",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "ContextInfo",
          "package": "OpenCLWrappers",
          "partial": "Context Info",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#t:ContextInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "ContextProperties",
          "package": "OpenCLWrappers",
          "source": "src/System-OpenCL-Wrappers-Types.html#ContextProperties",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "ContextProperties",
          "package": "OpenCLWrappers",
          "partial": "Context Properties",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#t:ContextProperties"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "Contextc",
          "package": "OpenCLWrappers",
          "source": "src/System-OpenCL-Wrappers-Types.html#Contextc",
          "type": "data"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "Contextc",
          "package": "OpenCLWrappers",
          "partial": "Contextc",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#t:Contextc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "DeviceExecCapabilities",
          "package": "OpenCLWrappers",
          "source": "src/System-OpenCL-Wrappers-Types.html#DeviceExecCapabilities",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "DeviceExecCapabilities",
          "package": "OpenCLWrappers",
          "partial": "Device Exec Capabilities",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#t:DeviceExecCapabilities"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "DeviceFPConfig",
          "package": "OpenCLWrappers",
          "source": "src/System-OpenCL-Wrappers-Types.html#DeviceFPConfig",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "DeviceFPConfig",
          "package": "OpenCLWrappers",
          "partial": "Device FPConfig",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#t:DeviceFPConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "DeviceID",
          "package": "OpenCLWrappers",
          "source": "src/System-OpenCL-Wrappers-Types.html#DeviceID",
          "type": "type"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "DeviceID",
          "package": "OpenCLWrappers",
          "partial": "Device ID",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#t:DeviceID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "DeviceIDc",
          "package": "OpenCLWrappers",
          "source": "src/System-OpenCL-Wrappers-Types.html#DeviceIDc",
          "type": "data"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "DeviceIDc",
          "package": "OpenCLWrappers",
          "partial": "Device IDc",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#t:DeviceIDc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "DeviceInfo",
          "package": "OpenCLWrappers",
          "source": "src/System-OpenCL-Wrappers-Types.html#DeviceInfo",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "DeviceInfo",
          "package": "OpenCLWrappers",
          "partial": "Device Info",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#t:DeviceInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "DeviceLocalMemType",
          "package": "OpenCLWrappers",
          "source": "src/System-OpenCL-Wrappers-Types.html#DeviceLocalMemType",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "DeviceLocalMemType",
          "package": "OpenCLWrappers",
          "partial": "Device Local Mem Type",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#t:DeviceLocalMemType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "DeviceMemCacheType",
          "package": "OpenCLWrappers",
          "source": "src/System-OpenCL-Wrappers-Types.html#DeviceMemCacheType",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "DeviceMemCacheType",
          "package": "OpenCLWrappers",
          "partial": "Device Mem Cache Type",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#t:DeviceMemCacheType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "DeviceType",
          "package": "OpenCLWrappers",
          "source": "src/System-OpenCL-Wrappers-Types.html#DeviceType",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "DeviceType",
          "package": "OpenCLWrappers",
          "partial": "Device Type",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#t:DeviceType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "ErrorCode",
          "package": "OpenCLWrappers",
          "source": "src/System-OpenCL-Wrappers-Types.html#ErrorCode",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "ErrorCode",
          "package": "OpenCLWrappers",
          "partial": "Error Code",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#t:ErrorCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "Event",
          "package": "OpenCLWrappers",
          "source": "src/System-OpenCL-Wrappers-Types.html#Event",
          "type": "type"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "Event",
          "package": "OpenCLWrappers",
          "partial": "Event",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#t:Event"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "EventInfo",
          "package": "OpenCLWrappers",
          "source": "src/System-OpenCL-Wrappers-Types.html#EventInfo",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "EventInfo",
          "package": "OpenCLWrappers",
          "partial": "Event Info",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#t:EventInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "Eventc",
          "package": "OpenCLWrappers",
          "source": "src/System-OpenCL-Wrappers-Types.html#Eventc",
          "type": "data"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "Eventc",
          "package": "OpenCLWrappers",
          "partial": "Eventc",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#t:Eventc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "FilterMode",
          "package": "OpenCLWrappers",
          "source": "src/System-OpenCL-Wrappers-Types.html#FilterMode",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "FilterMode",
          "package": "OpenCLWrappers",
          "partial": "Filter Mode",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#t:FilterMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "ImageDims",
          "package": "OpenCLWrappers",
          "source": "src/System-OpenCL-Wrappers-Types.html#ImageDims",
          "type": "type"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "ImageDims",
          "package": "OpenCLWrappers",
          "partial": "Image Dims",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#t:ImageDims"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "ImageFormat",
          "package": "OpenCLWrappers",
          "source": "src/System-OpenCL-Wrappers-Types.html#ImageFormat",
          "type": "type"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "ImageFormat",
          "package": "OpenCLWrappers",
          "partial": "Image Format",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#t:ImageFormat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "ImageFormatc",
          "package": "OpenCLWrappers",
          "source": "src/System-OpenCL-Wrappers-Types.html#ImageFormatc",
          "type": "data"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "ImageFormatc",
          "package": "OpenCLWrappers",
          "partial": "Image Formatc",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#t:ImageFormatc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "ImageFormatp",
          "package": "OpenCLWrappers",
          "source": "src/System-OpenCL-Wrappers-Types.html#ImageFormatp",
          "type": "type"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "ImageFormatp",
          "package": "OpenCLWrappers",
          "partial": "Image Formatp",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#t:ImageFormatp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "Kernel",
          "package": "OpenCLWrappers",
          "source": "src/System-OpenCL-Wrappers-Types.html#Kernel",
          "type": "type"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "Kernel",
          "package": "OpenCLWrappers",
          "partial": "Kernel",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#t:Kernel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "KernelInfo",
          "package": "OpenCLWrappers",
          "source": "src/System-OpenCL-Wrappers-Types.html#KernelInfo",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "KernelInfo",
          "package": "OpenCLWrappers",
          "partial": "Kernel Info",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#t:KernelInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "KernelWorkGroupInfo",
          "package": "OpenCLWrappers",
          "source": "src/System-OpenCL-Wrappers-Types.html#KernelWorkGroupInfo",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "KernelWorkGroupInfo",
          "package": "OpenCLWrappers",
          "partial": "Kernel Work Group Info",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#t:KernelWorkGroupInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "Kernelc",
          "package": "OpenCLWrappers",
          "source": "src/System-OpenCL-Wrappers-Types.html#Kernelc",
          "type": "data"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "Kernelc",
          "package": "OpenCLWrappers",
          "partial": "Kernelc",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#t:Kernelc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "MapFlags",
          "package": "OpenCLWrappers",
          "source": "src/System-OpenCL-Wrappers-Types.html#MapFlags",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "MapFlags",
          "package": "OpenCLWrappers",
          "partial": "Map Flags",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#t:MapFlags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "Mem",
          "package": "OpenCLWrappers",
          "source": "src/System-OpenCL-Wrappers-Types.html#Mem",
          "type": "type"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "Mem",
          "package": "OpenCLWrappers",
          "partial": "Mem",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#t:Mem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "MemFlags",
          "package": "OpenCLWrappers",
          "source": "src/System-OpenCL-Wrappers-Types.html#MemFlags",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "MemFlags",
          "package": "OpenCLWrappers",
          "partial": "Mem Flags",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#t:MemFlags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "MemInfo",
          "package": "OpenCLWrappers",
          "source": "src/System-OpenCL-Wrappers-Types.html#MemInfo",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "MemInfo",
          "package": "OpenCLWrappers",
          "partial": "Mem Info",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#t:MemInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "MemObjectType",
          "package": "OpenCLWrappers",
          "source": "src/System-OpenCL-Wrappers-Types.html#MemObjectType",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "MemObjectType",
          "package": "OpenCLWrappers",
          "partial": "Mem Object Type",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#t:MemObjectType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "Memc",
          "package": "OpenCLWrappers",
          "source": "src/System-OpenCL-Wrappers-Types.html#Memc",
          "type": "data"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "Memc",
          "package": "OpenCLWrappers",
          "partial": "Memc",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#t:Memc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "NativeKernelCallback",
          "package": "OpenCLWrappers",
          "source": "src/System-OpenCL-Wrappers-Types.html#NativeKernelCallback",
          "type": "type"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "NativeKernelCallback",
          "package": "OpenCLWrappers",
          "partial": "Native Kernel Callback",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#t:NativeKernelCallback"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "PlatformID",
          "package": "OpenCLWrappers",
          "source": "src/System-OpenCL-Wrappers-Types.html#PlatformID",
          "type": "type"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "PlatformID",
          "package": "OpenCLWrappers",
          "partial": "Platform ID",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#t:PlatformID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "PlatformIDc",
          "package": "OpenCLWrappers",
          "source": "src/System-OpenCL-Wrappers-Types.html#PlatformIDc",
          "type": "data"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "PlatformIDc",
          "package": "OpenCLWrappers",
          "partial": "Platform IDc",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#t:PlatformIDc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "PlatformInfo",
          "package": "OpenCLWrappers",
          "source": "src/System-OpenCL-Wrappers-Types.html#PlatformInfo",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "PlatformInfo",
          "package": "OpenCLWrappers",
          "partial": "Platform Info",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#t:PlatformInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "ProfilingInfo",
          "package": "OpenCLWrappers",
          "source": "src/System-OpenCL-Wrappers-Types.html#ProfilingInfo",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "ProfilingInfo",
          "package": "OpenCLWrappers",
          "partial": "Profiling Info",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#t:ProfilingInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "Program",
          "package": "OpenCLWrappers",
          "source": "src/System-OpenCL-Wrappers-Types.html#Program",
          "type": "type"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "Program",
          "package": "OpenCLWrappers",
          "partial": "Program",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#t:Program"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "ProgramBuildInfo",
          "package": "OpenCLWrappers",
          "source": "src/System-OpenCL-Wrappers-Types.html#ProgramBuildInfo",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "ProgramBuildInfo",
          "package": "OpenCLWrappers",
          "partial": "Program Build Info",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#t:ProgramBuildInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "ProgramInfo",
          "package": "OpenCLWrappers",
          "source": "src/System-OpenCL-Wrappers-Types.html#ProgramInfo",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "ProgramInfo",
          "package": "OpenCLWrappers",
          "partial": "Program Info",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#t:ProgramInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "Programc",
          "package": "OpenCLWrappers",
          "source": "src/System-OpenCL-Wrappers-Types.html#Programc",
          "type": "data"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "Programc",
          "package": "OpenCLWrappers",
          "partial": "Programc",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#t:Programc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "Sampler",
          "package": "OpenCLWrappers",
          "source": "src/System-OpenCL-Wrappers-Types.html#Sampler",
          "type": "type"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "Sampler",
          "package": "OpenCLWrappers",
          "partial": "Sampler",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#t:Sampler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "SamplerInfo",
          "package": "OpenCLWrappers",
          "source": "src/System-OpenCL-Wrappers-Types.html#SamplerInfo",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "SamplerInfo",
          "package": "OpenCLWrappers",
          "partial": "Sampler Info",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#t:SamplerInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "Samplerc",
          "package": "OpenCLWrappers",
          "source": "src/System-OpenCL-Wrappers-Types.html#Samplerc",
          "type": "data"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "Samplerc",
          "package": "OpenCLWrappers",
          "partial": "Samplerc",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#t:Samplerc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "AddressingMode",
          "package": "OpenCLWrappers",
          "signature": "AddressingMode CLuint",
          "source": "src/System-OpenCL-Wrappers-Types.html#AddressingMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "AddressingMode",
          "package": "OpenCLWrappers",
          "partial": "Addressing Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:AddressingMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "BuildStatus",
          "package": "OpenCLWrappers",
          "signature": "BuildStatus CLint",
          "source": "src/System-OpenCL-Wrappers-Types.html#BuildStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "BuildStatus",
          "package": "OpenCLWrappers",
          "partial": "Build Status",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:BuildStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "ChannelOrder",
          "package": "OpenCLWrappers",
          "signature": "ChannelOrder CLuint",
          "source": "src/System-OpenCL-Wrappers-Types.html#ChannelOrder",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "ChannelOrder",
          "package": "OpenCLWrappers",
          "partial": "Channel Order",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:ChannelOrder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "ChannelType",
          "package": "OpenCLWrappers",
          "signature": "ChannelType CLuint",
          "source": "src/System-OpenCL-Wrappers-Types.html#ChannelType",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "ChannelType",
          "package": "OpenCLWrappers",
          "partial": "Channel Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:ChannelType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "CommandQueueInfo",
          "package": "OpenCLWrappers",
          "signature": "CommandQueueInfo CLuint",
          "source": "src/System-OpenCL-Wrappers-Types.html#CommandQueueInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "CommandQueueInfo",
          "package": "OpenCLWrappers",
          "partial": "Command Queue Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:CommandQueueInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "CommandQueueInfoRetvalCLuint",
          "package": "OpenCLWrappers",
          "signature": "CommandQueueInfoRetvalCLuint CLuint",
          "source": "src/System-OpenCL-Wrappers-Types.html#CLCommandQueueInfoRetval",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "CommandQueueInfoRetvalCLuint",
          "package": "OpenCLWrappers",
          "partial": "Command Queue Info Retval CLuint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:CommandQueueInfoRetvalCLuint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "CommandQueueInfoRetvalCommandQueueProperties",
          "package": "OpenCLWrappers",
          "signature": "CommandQueueInfoRetvalCommandQueueProperties CommandQueueProperties",
          "source": "src/System-OpenCL-Wrappers-Types.html#CLCommandQueueInfoRetval",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "CommandQueueInfoRetvalCommandQueueProperties",
          "package": "OpenCLWrappers",
          "partial": "Command Queue Info Retval Command Queue Properties",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:CommandQueueInfoRetvalCommandQueueProperties"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "CommandQueueInfoRetvalContext",
          "package": "OpenCLWrappers",
          "signature": "CommandQueueInfoRetvalContext Context",
          "source": "src/System-OpenCL-Wrappers-Types.html#CLCommandQueueInfoRetval",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "CommandQueueInfoRetvalContext",
          "package": "OpenCLWrappers",
          "partial": "Command Queue Info Retval Context",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:CommandQueueInfoRetvalContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "CommandQueueInfoRetvalDeviceID",
          "package": "OpenCLWrappers",
          "signature": "CommandQueueInfoRetvalDeviceID DeviceID",
          "source": "src/System-OpenCL-Wrappers-Types.html#CLCommandQueueInfoRetval",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "CommandQueueInfoRetvalDeviceID",
          "package": "OpenCLWrappers",
          "partial": "Command Queue Info Retval Device ID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:CommandQueueInfoRetvalDeviceID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "CommandQueueProperties",
          "package": "OpenCLWrappers",
          "signature": "CommandQueueProperties CLbitfield",
          "source": "src/System-OpenCL-Wrappers-Types.html#CommandQueueProperties",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "CommandQueueProperties",
          "package": "OpenCLWrappers",
          "partial": "Command Queue Properties",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:CommandQueueProperties"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "CommandQueuec",
          "package": "OpenCLWrappers",
          "signature": "CommandQueuec",
          "source": "src/System-OpenCL-Wrappers-Types.html#CommandQueuec",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "CommandQueuec",
          "package": "OpenCLWrappers",
          "partial": "Command Queuec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:CommandQueuec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "CommandType",
          "package": "OpenCLWrappers",
          "signature": "CommandType CLuint",
          "source": "src/System-OpenCL-Wrappers-Types.html#CommandType",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "CommandType",
          "package": "OpenCLWrappers",
          "partial": "Command Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:CommandType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "ContextInfo",
          "package": "OpenCLWrappers",
          "signature": "ContextInfo CLuint",
          "source": "src/System-OpenCL-Wrappers-Types.html#ContextInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "ContextInfo",
          "package": "OpenCLWrappers",
          "partial": "Context Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:ContextInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "ContextInfoRetvalCLuint",
          "package": "OpenCLWrappers",
          "signature": "ContextInfoRetvalCLuint CLuint",
          "source": "src/System-OpenCL-Wrappers-Types.html#CLContextInfoRetval",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "ContextInfoRetvalCLuint",
          "package": "OpenCLWrappers",
          "partial": "Context Info Retval CLuint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:ContextInfoRetvalCLuint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "ContextInfoRetvalContextPropertiesList",
          "package": "OpenCLWrappers",
          "signature": "ContextInfoRetvalContextPropertiesList [ContextProperties]",
          "source": "src/System-OpenCL-Wrappers-Types.html#CLContextInfoRetval",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "ContextInfoRetvalContextPropertiesList",
          "normalized": "ContextInfoRetvalContextPropertiesList[ContextProperties]",
          "package": "OpenCLWrappers",
          "partial": "Context Info Retval Context Properties List",
          "signature": "ContextInfoRetvalContextPropertiesList[ContextProperties]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:ContextInfoRetvalContextPropertiesList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "ContextInfoRetvalDeviceIDList",
          "package": "OpenCLWrappers",
          "signature": "ContextInfoRetvalDeviceIDList [DeviceID]",
          "source": "src/System-OpenCL-Wrappers-Types.html#CLContextInfoRetval",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "ContextInfoRetvalDeviceIDList",
          "normalized": "ContextInfoRetvalDeviceIDList[DeviceID]",
          "package": "OpenCLWrappers",
          "partial": "Context Info Retval Device IDList",
          "signature": "ContextInfoRetvalDeviceIDList[DeviceID]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:ContextInfoRetvalDeviceIDList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "ContextProperties",
          "package": "OpenCLWrappers",
          "signature": "ContextProperties IntPtr",
          "source": "src/System-OpenCL-Wrappers-Types.html#ContextProperties",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "ContextProperties",
          "package": "OpenCLWrappers",
          "partial": "Context Properties",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:ContextProperties"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "Contextc",
          "package": "OpenCLWrappers",
          "signature": "Contextc",
          "source": "src/System-OpenCL-Wrappers-Types.html#Contextc",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "Contextc",
          "package": "OpenCLWrappers",
          "partial": "Contextc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:Contextc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "DeviceExecCapabilities",
          "package": "OpenCLWrappers",
          "signature": "DeviceExecCapabilities CLbitfield",
          "source": "src/System-OpenCL-Wrappers-Types.html#DeviceExecCapabilities",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "DeviceExecCapabilities",
          "package": "OpenCLWrappers",
          "partial": "Device Exec Capabilities",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:DeviceExecCapabilities"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "DeviceFPConfig",
          "package": "OpenCLWrappers",
          "signature": "DeviceFPConfig CLbitfield",
          "source": "src/System-OpenCL-Wrappers-Types.html#DeviceFPConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "DeviceFPConfig",
          "package": "OpenCLWrappers",
          "partial": "Device FPConfig",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:DeviceFPConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "DeviceIDc",
          "package": "OpenCLWrappers",
          "signature": "DeviceIDc",
          "source": "src/System-OpenCL-Wrappers-Types.html#DeviceIDc",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "DeviceIDc",
          "package": "OpenCLWrappers",
          "partial": "Device IDc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:DeviceIDc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "DeviceInfo",
          "package": "OpenCLWrappers",
          "signature": "DeviceInfo CLuint",
          "source": "src/System-OpenCL-Wrappers-Types.html#DeviceInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "DeviceInfo",
          "package": "OpenCLWrappers",
          "partial": "Device Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:DeviceInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "DeviceInfoRetvalCLbool",
          "package": "OpenCLWrappers",
          "signature": "DeviceInfoRetvalCLbool CLbool",
          "source": "src/System-OpenCL-Wrappers-Types.html#CLDeviceInfoRetval",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "DeviceInfoRetvalCLbool",
          "package": "OpenCLWrappers",
          "partial": "Device Info Retval CLbool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:DeviceInfoRetvalCLbool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "DeviceInfoRetvalCLsizei",
          "package": "OpenCLWrappers",
          "signature": "DeviceInfoRetvalCLsizei CLsizei",
          "source": "src/System-OpenCL-Wrappers-Types.html#CLDeviceInfoRetval",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "DeviceInfoRetvalCLsizei",
          "package": "OpenCLWrappers",
          "partial": "Device Info Retval CLsizei",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:DeviceInfoRetvalCLsizei"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "DeviceInfoRetvalCLsizeiList",
          "package": "OpenCLWrappers",
          "signature": "DeviceInfoRetvalCLsizeiList [CLsizei]",
          "source": "src/System-OpenCL-Wrappers-Types.html#CLDeviceInfoRetval",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "DeviceInfoRetvalCLsizeiList",
          "normalized": "DeviceInfoRetvalCLsizeiList[CLsizei]",
          "package": "OpenCLWrappers",
          "partial": "Device Info Retval CLsizei List",
          "signature": "DeviceInfoRetvalCLsizeiList[CLsizei]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:DeviceInfoRetvalCLsizeiList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "DeviceInfoRetvalCLuint",
          "package": "OpenCLWrappers",
          "signature": "DeviceInfoRetvalCLuint CLuint",
          "source": "src/System-OpenCL-Wrappers-Types.html#CLDeviceInfoRetval",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "DeviceInfoRetvalCLuint",
          "package": "OpenCLWrappers",
          "partial": "Device Info Retval CLuint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:DeviceInfoRetvalCLuint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "DeviceInfoRetvalCLulong",
          "package": "OpenCLWrappers",
          "signature": "DeviceInfoRetvalCLulong CLulong",
          "source": "src/System-OpenCL-Wrappers-Types.html#CLDeviceInfoRetval",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "DeviceInfoRetvalCLulong",
          "package": "OpenCLWrappers",
          "partial": "Device Info Retval CLulong",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:DeviceInfoRetvalCLulong"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "DeviceInfoRetvalCommandQueueProperties",
          "package": "OpenCLWrappers",
          "signature": "DeviceInfoRetvalCommandQueueProperties CommandQueueProperties",
          "source": "src/System-OpenCL-Wrappers-Types.html#CLDeviceInfoRetval",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "DeviceInfoRetvalCommandQueueProperties",
          "package": "OpenCLWrappers",
          "partial": "Device Info Retval Command Queue Properties",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:DeviceInfoRetvalCommandQueueProperties"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "DeviceInfoRetvalDeviceExecCapabilities",
          "package": "OpenCLWrappers",
          "signature": "DeviceInfoRetvalDeviceExecCapabilities DeviceExecCapabilities",
          "source": "src/System-OpenCL-Wrappers-Types.html#CLDeviceInfoRetval",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "DeviceInfoRetvalDeviceExecCapabilities",
          "package": "OpenCLWrappers",
          "partial": "Device Info Retval Device Exec Capabilities",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:DeviceInfoRetvalDeviceExecCapabilities"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "DeviceInfoRetvalDeviceFPConfig",
          "package": "OpenCLWrappers",
          "signature": "DeviceInfoRetvalDeviceFPConfig DeviceFPConfig",
          "source": "src/System-OpenCL-Wrappers-Types.html#CLDeviceInfoRetval",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "DeviceInfoRetvalDeviceFPConfig",
          "package": "OpenCLWrappers",
          "partial": "Device Info Retval Device FPConfig",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:DeviceInfoRetvalDeviceFPConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "DeviceInfoRetvalDeviceLocalMemType",
          "package": "OpenCLWrappers",
          "signature": "DeviceInfoRetvalDeviceLocalMemType DeviceLocalMemType",
          "source": "src/System-OpenCL-Wrappers-Types.html#CLDeviceInfoRetval",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "DeviceInfoRetvalDeviceLocalMemType",
          "package": "OpenCLWrappers",
          "partial": "Device Info Retval Device Local Mem Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:DeviceInfoRetvalDeviceLocalMemType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "DeviceInfoRetvalDeviceMemCacheType",
          "package": "OpenCLWrappers",
          "signature": "DeviceInfoRetvalDeviceMemCacheType DeviceMemCacheType",
          "source": "src/System-OpenCL-Wrappers-Types.html#CLDeviceInfoRetval",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "DeviceInfoRetvalDeviceMemCacheType",
          "package": "OpenCLWrappers",
          "partial": "Device Info Retval Device Mem Cache Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:DeviceInfoRetvalDeviceMemCacheType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "DeviceInfoRetvalDeviceType",
          "package": "OpenCLWrappers",
          "signature": "DeviceInfoRetvalDeviceType DeviceType",
          "source": "src/System-OpenCL-Wrappers-Types.html#CLDeviceInfoRetval",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "DeviceInfoRetvalDeviceType",
          "package": "OpenCLWrappers",
          "partial": "Device Info Retval Device Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:DeviceInfoRetvalDeviceType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "DeviceInfoRetvalPlatformID",
          "package": "OpenCLWrappers",
          "signature": "DeviceInfoRetvalPlatformID PlatformID",
          "source": "src/System-OpenCL-Wrappers-Types.html#CLDeviceInfoRetval",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "DeviceInfoRetvalPlatformID",
          "package": "OpenCLWrappers",
          "partial": "Device Info Retval Platform ID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:DeviceInfoRetvalPlatformID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "DeviceInfoRetvalString",
          "package": "OpenCLWrappers",
          "signature": "DeviceInfoRetvalString String",
          "source": "src/System-OpenCL-Wrappers-Types.html#CLDeviceInfoRetval",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "DeviceInfoRetvalString",
          "package": "OpenCLWrappers",
          "partial": "Device Info Retval String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:DeviceInfoRetvalString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "DeviceLocalMemType",
          "package": "OpenCLWrappers",
          "signature": "DeviceLocalMemType CLuint",
          "source": "src/System-OpenCL-Wrappers-Types.html#DeviceLocalMemType",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "DeviceLocalMemType",
          "package": "OpenCLWrappers",
          "partial": "Device Local Mem Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:DeviceLocalMemType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "DeviceMemCacheType",
          "package": "OpenCLWrappers",
          "signature": "DeviceMemCacheType CLuint",
          "source": "src/System-OpenCL-Wrappers-Types.html#DeviceMemCacheType",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "DeviceMemCacheType",
          "package": "OpenCLWrappers",
          "partial": "Device Mem Cache Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:DeviceMemCacheType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "DeviceType",
          "package": "OpenCLWrappers",
          "signature": "DeviceType CLbitfield",
          "source": "src/System-OpenCL-Wrappers-Types.html#DeviceType",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "DeviceType",
          "package": "OpenCLWrappers",
          "partial": "Device Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:DeviceType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "ErrorCode",
          "package": "OpenCLWrappers",
          "signature": "ErrorCode CLint",
          "source": "src/System-OpenCL-Wrappers-Types.html#ErrorCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "ErrorCode",
          "package": "OpenCLWrappers",
          "partial": "Error Code",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:ErrorCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "EventInfo",
          "package": "OpenCLWrappers",
          "signature": "EventInfo CLuint",
          "source": "src/System-OpenCL-Wrappers-Types.html#EventInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "EventInfo",
          "package": "OpenCLWrappers",
          "partial": "Event Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:EventInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "EventInfoRetvalCLint",
          "package": "OpenCLWrappers",
          "signature": "EventInfoRetvalCLint CLint",
          "source": "src/System-OpenCL-Wrappers-Types.html#CLEventInfoRetval",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "EventInfoRetvalCLint",
          "package": "OpenCLWrappers",
          "partial": "Event Info Retval CLint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:EventInfoRetvalCLint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "EventInfoRetvalCLuint",
          "package": "OpenCLWrappers",
          "signature": "EventInfoRetvalCLuint CLuint",
          "source": "src/System-OpenCL-Wrappers-Types.html#CLEventInfoRetval",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "EventInfoRetvalCLuint",
          "package": "OpenCLWrappers",
          "partial": "Event Info Retval CLuint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:EventInfoRetvalCLuint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "EventInfoRetvalCommandQueue",
          "package": "OpenCLWrappers",
          "signature": "EventInfoRetvalCommandQueue CommandQueue",
          "source": "src/System-OpenCL-Wrappers-Types.html#CLEventInfoRetval",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "EventInfoRetvalCommandQueue",
          "package": "OpenCLWrappers",
          "partial": "Event Info Retval Command Queue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:EventInfoRetvalCommandQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "EventInfoRetvalCommandType",
          "package": "OpenCLWrappers",
          "signature": "EventInfoRetvalCommandType CommandType",
          "source": "src/System-OpenCL-Wrappers-Types.html#CLEventInfoRetval",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "EventInfoRetvalCommandType",
          "package": "OpenCLWrappers",
          "partial": "Event Info Retval Command Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:EventInfoRetvalCommandType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "EventInfoRetvalContext",
          "package": "OpenCLWrappers",
          "signature": "EventInfoRetvalContext Context",
          "source": "src/System-OpenCL-Wrappers-Types.html#CLEventInfoRetval",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "EventInfoRetvalContext",
          "package": "OpenCLWrappers",
          "partial": "Event Info Retval Context",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:EventInfoRetvalContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "EventProfilingInfoRetvalCLulong",
          "package": "OpenCLWrappers",
          "signature": "EventProfilingInfoRetvalCLulong CLulong",
          "source": "src/System-OpenCL-Wrappers-Types.html#CLEventProfilingInfoRetval",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "EventProfilingInfoRetvalCLulong",
          "package": "OpenCLWrappers",
          "partial": "Event Profiling Info Retval CLulong",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:EventProfilingInfoRetvalCLulong"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "Eventc",
          "package": "OpenCLWrappers",
          "signature": "Eventc",
          "source": "src/System-OpenCL-Wrappers-Types.html#Eventc",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "Eventc",
          "package": "OpenCLWrappers",
          "partial": "Eventc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:Eventc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "FilterMode",
          "package": "OpenCLWrappers",
          "signature": "FilterMode CLuint",
          "source": "src/System-OpenCL-Wrappers-Types.html#FilterMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "FilterMode",
          "package": "OpenCLWrappers",
          "partial": "Filter Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:FilterMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "ImageFormatc",
          "package": "OpenCLWrappers",
          "signature": "ImageFormatc",
          "source": "src/System-OpenCL-Wrappers-Types.html#ImageFormatc",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "ImageFormatc",
          "package": "OpenCLWrappers",
          "partial": "Image Formatc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:ImageFormatc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "ImageInfoRetvalCLsizei",
          "package": "OpenCLWrappers",
          "signature": "ImageInfoRetvalCLsizei CLsizei",
          "source": "src/System-OpenCL-Wrappers-Types.html#CLImageInfoRetval",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "ImageInfoRetvalCLsizei",
          "package": "OpenCLWrappers",
          "partial": "Image Info Retval CLsizei",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:ImageInfoRetvalCLsizei"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "ImageInfoRetvalImageFormat",
          "package": "OpenCLWrappers",
          "signature": "ImageInfoRetvalImageFormat ImageFormat",
          "source": "src/System-OpenCL-Wrappers-Types.html#CLImageInfoRetval",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "ImageInfoRetvalImageFormat",
          "package": "OpenCLWrappers",
          "partial": "Image Info Retval Image Format",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:ImageInfoRetvalImageFormat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "ImageInfoRetvalPtr",
          "package": "OpenCLWrappers",
          "signature": "ImageInfoRetvalPtr (Ptr ())",
          "source": "src/System-OpenCL-Wrappers-Types.html#CLImageInfoRetval",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "ImageInfoRetvalPtr",
          "normalized": "ImageInfoRetvalPtr(Ptr())",
          "package": "OpenCLWrappers",
          "partial": "Image Info Retval Ptr",
          "signature": "ImageInfoRetvalPtr(Ptr())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:ImageInfoRetvalPtr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "KernelInfo",
          "package": "OpenCLWrappers",
          "signature": "KernelInfo CLuint",
          "source": "src/System-OpenCL-Wrappers-Types.html#KernelInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "KernelInfo",
          "package": "OpenCLWrappers",
          "partial": "Kernel Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:KernelInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "KernelInfoRetvalCLuint",
          "package": "OpenCLWrappers",
          "signature": "KernelInfoRetvalCLuint CLuint",
          "source": "src/System-OpenCL-Wrappers-Types.html#CLKernelInfoRetval",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "KernelInfoRetvalCLuint",
          "package": "OpenCLWrappers",
          "partial": "Kernel Info Retval CLuint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:KernelInfoRetvalCLuint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "KernelInfoRetvalContext",
          "package": "OpenCLWrappers",
          "signature": "KernelInfoRetvalContext Context",
          "source": "src/System-OpenCL-Wrappers-Types.html#CLKernelInfoRetval",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "KernelInfoRetvalContext",
          "package": "OpenCLWrappers",
          "partial": "Kernel Info Retval Context",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:KernelInfoRetvalContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "KernelInfoRetvalProgram",
          "package": "OpenCLWrappers",
          "signature": "KernelInfoRetvalProgram Program",
          "source": "src/System-OpenCL-Wrappers-Types.html#CLKernelInfoRetval",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "KernelInfoRetvalProgram",
          "package": "OpenCLWrappers",
          "partial": "Kernel Info Retval Program",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:KernelInfoRetvalProgram"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "KernelInfoRetvalString",
          "package": "OpenCLWrappers",
          "signature": "KernelInfoRetvalString String",
          "source": "src/System-OpenCL-Wrappers-Types.html#CLKernelInfoRetval",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "KernelInfoRetvalString",
          "package": "OpenCLWrappers",
          "partial": "Kernel Info Retval String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:KernelInfoRetvalString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "KernelWorkGroupInfo",
          "package": "OpenCLWrappers",
          "signature": "KernelWorkGroupInfo CLuint",
          "source": "src/System-OpenCL-Wrappers-Types.html#KernelWorkGroupInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "KernelWorkGroupInfo",
          "package": "OpenCLWrappers",
          "partial": "Kernel Work Group Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:KernelWorkGroupInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "KernelWorkGroupInfoRetvalCLsizei",
          "package": "OpenCLWrappers",
          "signature": "KernelWorkGroupInfoRetvalCLsizei CLsizei",
          "source": "src/System-OpenCL-Wrappers-Types.html#CLKernelWorkGroupInfoRetval",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "KernelWorkGroupInfoRetvalCLsizei",
          "package": "OpenCLWrappers",
          "partial": "Kernel Work Group Info Retval CLsizei",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:KernelWorkGroupInfoRetvalCLsizei"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "KernelWorkGroupInfoRetvalCLsizeiList",
          "package": "OpenCLWrappers",
          "signature": "KernelWorkGroupInfoRetvalCLsizeiList [CLsizei]",
          "source": "src/System-OpenCL-Wrappers-Types.html#CLKernelWorkGroupInfoRetval",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "KernelWorkGroupInfoRetvalCLsizeiList",
          "normalized": "KernelWorkGroupInfoRetvalCLsizeiList[CLsizei]",
          "package": "OpenCLWrappers",
          "partial": "Kernel Work Group Info Retval CLsizei List",
          "signature": "KernelWorkGroupInfoRetvalCLsizeiList[CLsizei]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:KernelWorkGroupInfoRetvalCLsizeiList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "KernelWorkGroupInfoRetvalCLulong",
          "package": "OpenCLWrappers",
          "signature": "KernelWorkGroupInfoRetvalCLulong CLulong",
          "source": "src/System-OpenCL-Wrappers-Types.html#CLKernelWorkGroupInfoRetval",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "KernelWorkGroupInfoRetvalCLulong",
          "package": "OpenCLWrappers",
          "partial": "Kernel Work Group Info Retval CLulong",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:KernelWorkGroupInfoRetvalCLulong"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "Kernelc",
          "package": "OpenCLWrappers",
          "signature": "Kernelc",
          "source": "src/System-OpenCL-Wrappers-Types.html#Kernelc",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "Kernelc",
          "package": "OpenCLWrappers",
          "partial": "Kernelc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:Kernelc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "MapFlags",
          "package": "OpenCLWrappers",
          "signature": "MapFlags CLbitfield",
          "source": "src/System-OpenCL-Wrappers-Types.html#MapFlags",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "MapFlags",
          "package": "OpenCLWrappers",
          "partial": "Map Flags",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:MapFlags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "MemFlags",
          "package": "OpenCLWrappers",
          "signature": "MemFlags CLbitfield",
          "source": "src/System-OpenCL-Wrappers-Types.html#MemFlags",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "MemFlags",
          "package": "OpenCLWrappers",
          "partial": "Mem Flags",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:MemFlags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "MemInfo",
          "package": "OpenCLWrappers",
          "signature": "MemInfo CLuint",
          "source": "src/System-OpenCL-Wrappers-Types.html#MemInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "MemInfo",
          "package": "OpenCLWrappers",
          "partial": "Mem Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:MemInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "MemObjectInfoRetvalCLsizei",
          "package": "OpenCLWrappers",
          "signature": "MemObjectInfoRetvalCLsizei CLsizei",
          "source": "src/System-OpenCL-Wrappers-Types.html#CLMemObjectInfoRetval",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "MemObjectInfoRetvalCLsizei",
          "package": "OpenCLWrappers",
          "partial": "Mem Object Info Retval CLsizei",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:MemObjectInfoRetvalCLsizei"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "MemObjectInfoRetvalCLuint",
          "package": "OpenCLWrappers",
          "signature": "MemObjectInfoRetvalCLuint CLuint",
          "source": "src/System-OpenCL-Wrappers-Types.html#CLMemObjectInfoRetval",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "MemObjectInfoRetvalCLuint",
          "package": "OpenCLWrappers",
          "partial": "Mem Object Info Retval CLuint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:MemObjectInfoRetvalCLuint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "MemObjectInfoRetvalContext",
          "package": "OpenCLWrappers",
          "signature": "MemObjectInfoRetvalContext Context",
          "source": "src/System-OpenCL-Wrappers-Types.html#CLMemObjectInfoRetval",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "MemObjectInfoRetvalContext",
          "package": "OpenCLWrappers",
          "partial": "Mem Object Info Retval Context",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:MemObjectInfoRetvalContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "MemObjectInfoRetvalMem",
          "package": "OpenCLWrappers",
          "signature": "MemObjectInfoRetvalMem Mem",
          "source": "src/System-OpenCL-Wrappers-Types.html#CLMemObjectInfoRetval",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "MemObjectInfoRetvalMem",
          "package": "OpenCLWrappers",
          "partial": "Mem Object Info Retval Mem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:MemObjectInfoRetvalMem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "MemObjectInfoRetvalMemFlags",
          "package": "OpenCLWrappers",
          "signature": "MemObjectInfoRetvalMemFlags MemFlags",
          "source": "src/System-OpenCL-Wrappers-Types.html#CLMemObjectInfoRetval",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "MemObjectInfoRetvalMemFlags",
          "package": "OpenCLWrappers",
          "partial": "Mem Object Info Retval Mem Flags",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:MemObjectInfoRetvalMemFlags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "MemObjectInfoRetvalMemObjectType",
          "package": "OpenCLWrappers",
          "signature": "MemObjectInfoRetvalMemObjectType MemObjectType",
          "source": "src/System-OpenCL-Wrappers-Types.html#CLMemObjectInfoRetval",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "MemObjectInfoRetvalMemObjectType",
          "package": "OpenCLWrappers",
          "partial": "Mem Object Info Retval Mem Object Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:MemObjectInfoRetvalMemObjectType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "MemObjectInfoRetvalPtr",
          "package": "OpenCLWrappers",
          "signature": "MemObjectInfoRetvalPtr (Ptr ())",
          "source": "src/System-OpenCL-Wrappers-Types.html#CLMemObjectInfoRetval",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "MemObjectInfoRetvalPtr",
          "normalized": "MemObjectInfoRetvalPtr(Ptr())",
          "package": "OpenCLWrappers",
          "partial": "Mem Object Info Retval Ptr",
          "signature": "MemObjectInfoRetvalPtr(Ptr())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:MemObjectInfoRetvalPtr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "MemObjectType",
          "package": "OpenCLWrappers",
          "signature": "MemObjectType CLuint",
          "source": "src/System-OpenCL-Wrappers-Types.html#MemObjectType",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "MemObjectType",
          "package": "OpenCLWrappers",
          "partial": "Mem Object Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:MemObjectType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "Memc",
          "package": "OpenCLWrappers",
          "signature": "Memc",
          "source": "src/System-OpenCL-Wrappers-Types.html#Memc",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "Memc",
          "package": "OpenCLWrappers",
          "partial": "Memc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:Memc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "PlatformIDc",
          "package": "OpenCLWrappers",
          "signature": "PlatformIDc",
          "source": "src/System-OpenCL-Wrappers-Types.html#PlatformIDc",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "PlatformIDc",
          "package": "OpenCLWrappers",
          "partial": "Platform IDc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:PlatformIDc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "PlatformInfo",
          "package": "OpenCLWrappers",
          "signature": "PlatformInfo CLuint",
          "source": "src/System-OpenCL-Wrappers-Types.html#PlatformInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "PlatformInfo",
          "package": "OpenCLWrappers",
          "partial": "Platform Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:PlatformInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "PlatformInfoRetvalString",
          "package": "OpenCLWrappers",
          "signature": "PlatformInfoRetvalString String",
          "source": "src/System-OpenCL-Wrappers-Types.html#CLPlatformInfoRetval",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "PlatformInfoRetvalString",
          "package": "OpenCLWrappers",
          "partial": "Platform Info Retval String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:PlatformInfoRetvalString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "ProfilingInfo",
          "package": "OpenCLWrappers",
          "signature": "ProfilingInfo CLuint",
          "source": "src/System-OpenCL-Wrappers-Types.html#ProfilingInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "ProfilingInfo",
          "package": "OpenCLWrappers",
          "partial": "Profiling Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:ProfilingInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "ProgramBuildInfo",
          "package": "OpenCLWrappers",
          "signature": "ProgramBuildInfo CLuint",
          "source": "src/System-OpenCL-Wrappers-Types.html#ProgramBuildInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "ProgramBuildInfo",
          "package": "OpenCLWrappers",
          "partial": "Program Build Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:ProgramBuildInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "ProgramBuildInfoRetvalBuildStatus",
          "package": "OpenCLWrappers",
          "signature": "ProgramBuildInfoRetvalBuildStatus BuildStatus",
          "source": "src/System-OpenCL-Wrappers-Types.html#CLProgramBuildInfoRetval",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "ProgramBuildInfoRetvalBuildStatus",
          "package": "OpenCLWrappers",
          "partial": "Program Build Info Retval Build Status",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:ProgramBuildInfoRetvalBuildStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "ProgramBuildInfoRetvalString",
          "package": "OpenCLWrappers",
          "signature": "ProgramBuildInfoRetvalString String",
          "source": "src/System-OpenCL-Wrappers-Types.html#CLProgramBuildInfoRetval",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "ProgramBuildInfoRetvalString",
          "package": "OpenCLWrappers",
          "partial": "Program Build Info Retval String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:ProgramBuildInfoRetvalString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "ProgramInfo",
          "package": "OpenCLWrappers",
          "signature": "ProgramInfo CLuint",
          "source": "src/System-OpenCL-Wrappers-Types.html#ProgramInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "ProgramInfo",
          "package": "OpenCLWrappers",
          "partial": "Program Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:ProgramInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "ProgramInfoRetvalCLUint",
          "package": "OpenCLWrappers",
          "signature": "ProgramInfoRetvalCLUint CLuint",
          "source": "src/System-OpenCL-Wrappers-Types.html#CLProgramInfoRetval",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "ProgramInfoRetvalCLUint",
          "package": "OpenCLWrappers",
          "partial": "Program Info Retval CLUint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:ProgramInfoRetvalCLUint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "ProgramInfoRetvalCLsizeiList",
          "package": "OpenCLWrappers",
          "signature": "ProgramInfoRetvalCLsizeiList [CLsizei]",
          "source": "src/System-OpenCL-Wrappers-Types.html#CLProgramInfoRetval",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "ProgramInfoRetvalCLsizeiList",
          "normalized": "ProgramInfoRetvalCLsizeiList[CLsizei]",
          "package": "OpenCLWrappers",
          "partial": "Program Info Retval CLsizei List",
          "signature": "ProgramInfoRetvalCLsizeiList[CLsizei]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:ProgramInfoRetvalCLsizeiList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "ProgramInfoRetvalContext",
          "package": "OpenCLWrappers",
          "signature": "ProgramInfoRetvalContext Context",
          "source": "src/System-OpenCL-Wrappers-Types.html#CLProgramInfoRetval",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "ProgramInfoRetvalContext",
          "package": "OpenCLWrappers",
          "partial": "Program Info Retval Context",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:ProgramInfoRetvalContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "ProgramInfoRetvalDeviceIDList",
          "package": "OpenCLWrappers",
          "signature": "ProgramInfoRetvalDeviceIDList [DeviceID]",
          "source": "src/System-OpenCL-Wrappers-Types.html#CLProgramInfoRetval",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "ProgramInfoRetvalDeviceIDList",
          "normalized": "ProgramInfoRetvalDeviceIDList[DeviceID]",
          "package": "OpenCLWrappers",
          "partial": "Program Info Retval Device IDList",
          "signature": "ProgramInfoRetvalDeviceIDList[DeviceID]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:ProgramInfoRetvalDeviceIDList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "ProgramInfoRetvalPtrList",
          "package": "OpenCLWrappers",
          "signature": "ProgramInfoRetvalPtrList [Ptr ()]",
          "source": "src/System-OpenCL-Wrappers-Types.html#CLProgramInfoRetval",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "ProgramInfoRetvalPtrList",
          "normalized": "ProgramInfoRetvalPtrList[Ptr()]",
          "package": "OpenCLWrappers",
          "partial": "Program Info Retval Ptr List",
          "signature": "ProgramInfoRetvalPtrList[Ptr()]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:ProgramInfoRetvalPtrList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "ProgramInfoRetvalString",
          "package": "OpenCLWrappers",
          "signature": "ProgramInfoRetvalString String",
          "source": "src/System-OpenCL-Wrappers-Types.html#CLProgramInfoRetval",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "ProgramInfoRetvalString",
          "package": "OpenCLWrappers",
          "partial": "Program Info Retval String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:ProgramInfoRetvalString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "Programc",
          "package": "OpenCLWrappers",
          "signature": "Programc",
          "source": "src/System-OpenCL-Wrappers-Types.html#Programc",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "Programc",
          "package": "OpenCLWrappers",
          "partial": "Programc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:Programc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "SamplerInfo",
          "package": "OpenCLWrappers",
          "signature": "SamplerInfo CLuint",
          "source": "src/System-OpenCL-Wrappers-Types.html#SamplerInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "SamplerInfo",
          "package": "OpenCLWrappers",
          "partial": "Sampler Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:SamplerInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "SamplerInfoRetvalAddressingMode",
          "package": "OpenCLWrappers",
          "signature": "SamplerInfoRetvalAddressingMode AddressingMode",
          "source": "src/System-OpenCL-Wrappers-Types.html#CLSamplerInfoRetval",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "SamplerInfoRetvalAddressingMode",
          "package": "OpenCLWrappers",
          "partial": "Sampler Info Retval Addressing Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:SamplerInfoRetvalAddressingMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "SamplerInfoRetvalCLbool",
          "package": "OpenCLWrappers",
          "signature": "SamplerInfoRetvalCLbool CLbool",
          "source": "src/System-OpenCL-Wrappers-Types.html#CLSamplerInfoRetval",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "SamplerInfoRetvalCLbool",
          "package": "OpenCLWrappers",
          "partial": "Sampler Info Retval CLbool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:SamplerInfoRetvalCLbool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "SamplerInfoRetvalCLuint",
          "package": "OpenCLWrappers",
          "signature": "SamplerInfoRetvalCLuint CLuint",
          "source": "src/System-OpenCL-Wrappers-Types.html#CLSamplerInfoRetval",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "SamplerInfoRetvalCLuint",
          "package": "OpenCLWrappers",
          "partial": "Sampler Info Retval CLuint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:SamplerInfoRetvalCLuint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "SamplerInfoRetvalContext",
          "package": "OpenCLWrappers",
          "signature": "SamplerInfoRetvalContext Context",
          "source": "src/System-OpenCL-Wrappers-Types.html#CLSamplerInfoRetval",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "SamplerInfoRetvalContext",
          "package": "OpenCLWrappers",
          "partial": "Sampler Info Retval Context",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:SamplerInfoRetvalContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "SamplerInfoRetvalFilterMode",
          "package": "OpenCLWrappers",
          "signature": "SamplerInfoRetvalFilterMode FilterMode",
          "source": "src/System-OpenCL-Wrappers-Types.html#CLSamplerInfoRetval",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "SamplerInfoRetvalFilterMode",
          "package": "OpenCLWrappers",
          "partial": "Sampler Info Retval Filter Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:SamplerInfoRetvalFilterMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "Samplerc",
          "package": "OpenCLWrappers",
          "signature": "Samplerc",
          "source": "src/System-OpenCL-Wrappers-Types.html#Samplerc",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "Samplerc",
          "package": "OpenCLWrappers",
          "partial": "Samplerc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:Samplerc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clA",
          "package": "OpenCLWrappers",
          "signature": "ChannelOrder",
          "source": "src/System-OpenCL-Wrappers-Types.html#clA",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clA",
          "package": "OpenCLWrappers",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:clA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clARGB",
          "package": "OpenCLWrappers",
          "signature": "ChannelOrder",
          "source": "src/System-OpenCL-Wrappers-Types.html#clARGB",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clARGB",
          "package": "OpenCLWrappers",
          "partial": "ARGB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:clARGB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clAddressClamp",
          "package": "OpenCLWrappers",
          "signature": "AddressingMode",
          "source": "src/System-OpenCL-Wrappers-Types.html#clAddressClamp",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clAddressClamp",
          "package": "OpenCLWrappers",
          "partial": "Address Clamp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:clAddressClamp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clAddressClampToEdge",
          "package": "OpenCLWrappers",
          "signature": "AddressingMode",
          "source": "src/System-OpenCL-Wrappers-Types.html#clAddressClampToEdge",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clAddressClampToEdge",
          "package": "OpenCLWrappers",
          "partial": "Address Clamp To Edge",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:clAddressClampToEdge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clAddressNone",
          "package": "OpenCLWrappers",
          "signature": "AddressingMode",
          "source": "src/System-OpenCL-Wrappers-Types.html#clAddressNone",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clAddressNone",
          "package": "OpenCLWrappers",
          "partial": "Address None",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:clAddressNone"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clAddressRepeat",
          "package": "OpenCLWrappers",
          "signature": "AddressingMode",
          "source": "src/System-OpenCL-Wrappers-Types.html#clAddressRepeat",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clAddressRepeat",
          "package": "OpenCLWrappers",
          "partial": "Address Repeat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:clAddressRepeat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clBGRA",
          "package": "OpenCLWrappers",
          "signature": "ChannelOrder",
          "source": "src/System-OpenCL-Wrappers-Types.html#clBGRA",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clBGRA",
          "package": "OpenCLWrappers",
          "partial": "BGRA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:clBGRA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clBuildError",
          "package": "OpenCLWrappers",
          "signature": "BuildStatus",
          "source": "src/System-OpenCL-Wrappers-Types.html#clBuildError",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clBuildError",
          "package": "OpenCLWrappers",
          "partial": "Build Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:clBuildError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clBuildInProgress",
          "package": "OpenCLWrappers",
          "signature": "BuildStatus",
          "source": "src/System-OpenCL-Wrappers-Types.html#clBuildInProgress",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clBuildInProgress",
          "package": "OpenCLWrappers",
          "partial": "Build In Progress",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:clBuildInProgress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clBuildNone",
          "package": "OpenCLWrappers",
          "signature": "BuildStatus",
          "source": "src/System-OpenCL-Wrappers-Types.html#clBuildNone",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clBuildNone",
          "package": "OpenCLWrappers",
          "partial": "Build None",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:clBuildNone"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clBuildSuccess",
          "package": "OpenCLWrappers",
          "signature": "BuildStatus",
          "source": "src/System-OpenCL-Wrappers-Types.html#clBuildSuccess",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clBuildSuccess",
          "package": "OpenCLWrappers",
          "partial": "Build Success",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:clBuildSuccess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clContextDevices",
          "package": "OpenCLWrappers",
          "signature": "ContextInfo",
          "source": "src/System-OpenCL-Wrappers-Types.html#clContextDevices",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clContextDevices",
          "package": "OpenCLWrappers",
          "partial": "Context Devices",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:clContextDevices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clContextPlatform",
          "package": "OpenCLWrappers",
          "signature": "ContextProperties",
          "source": "src/System-OpenCL-Wrappers-Types.html#clContextPlatform",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clContextPlatform",
          "package": "OpenCLWrappers",
          "partial": "Context Platform",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:clContextPlatform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clContextProperties",
          "package": "OpenCLWrappers",
          "signature": "ContextInfo",
          "source": "src/System-OpenCL-Wrappers-Types.html#clContextProperties",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clContextProperties",
          "package": "OpenCLWrappers",
          "partial": "Context Properties",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:clContextProperties"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clContextReferenceCount",
          "package": "OpenCLWrappers",
          "signature": "ContextInfo",
          "source": "src/System-OpenCL-Wrappers-Types.html#clContextReferenceCount",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clContextReferenceCount",
          "package": "OpenCLWrappers",
          "partial": "Context Reference Count",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:clContextReferenceCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clDeviceAddressBits",
          "package": "OpenCLWrappers",
          "signature": "DeviceInfo",
          "source": "src/System-OpenCL-Wrappers-Types.html#clDeviceAddressBits",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clDeviceAddressBits",
          "package": "OpenCLWrappers",
          "partial": "Device Address Bits",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:clDeviceAddressBits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clDeviceAvailable",
          "package": "OpenCLWrappers",
          "signature": "DeviceInfo",
          "source": "src/System-OpenCL-Wrappers-Types.html#clDeviceAvailable",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clDeviceAvailable",
          "package": "OpenCLWrappers",
          "partial": "Device Available",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:clDeviceAvailable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clDeviceCompilerAvailable",
          "package": "OpenCLWrappers",
          "signature": "DeviceInfo",
          "source": "src/System-OpenCL-Wrappers-Types.html#clDeviceCompilerAvailable",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clDeviceCompilerAvailable",
          "package": "OpenCLWrappers",
          "partial": "Device Compiler Available",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:clDeviceCompilerAvailable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clDeviceDoubleFPConfig",
          "package": "OpenCLWrappers",
          "signature": "DeviceInfo",
          "source": "src/System-OpenCL-Wrappers-Types.html#clDeviceDoubleFPConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clDeviceDoubleFPConfig",
          "package": "OpenCLWrappers",
          "partial": "Device Double FPConfig",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:clDeviceDoubleFPConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clDeviceEndianLittle",
          "package": "OpenCLWrappers",
          "signature": "DeviceInfo",
          "source": "src/System-OpenCL-Wrappers-Types.html#clDeviceEndianLittle",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clDeviceEndianLittle",
          "package": "OpenCLWrappers",
          "partial": "Device Endian Little",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:clDeviceEndianLittle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clDeviceErrorCorrectionSupport",
          "package": "OpenCLWrappers",
          "signature": "DeviceInfo",
          "source": "src/System-OpenCL-Wrappers-Types.html#clDeviceErrorCorrectionSupport",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clDeviceErrorCorrectionSupport",
          "package": "OpenCLWrappers",
          "partial": "Device Error Correction Support",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:clDeviceErrorCorrectionSupport"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clDeviceExecutionCapabilities",
          "package": "OpenCLWrappers",
          "signature": "DeviceInfo",
          "source": "src/System-OpenCL-Wrappers-Types.html#clDeviceExecutionCapabilities",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clDeviceExecutionCapabilities",
          "package": "OpenCLWrappers",
          "partial": "Device Execution Capabilities",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:clDeviceExecutionCapabilities"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clDeviceExtensions",
          "package": "OpenCLWrappers",
          "signature": "DeviceInfo",
          "source": "src/System-OpenCL-Wrappers-Types.html#clDeviceExtensions",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clDeviceExtensions",
          "package": "OpenCLWrappers",
          "partial": "Device Extensions",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:clDeviceExtensions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clDeviceGlobalMemCacheLineSize",
          "package": "OpenCLWrappers",
          "signature": "DeviceInfo",
          "source": "src/System-OpenCL-Wrappers-Types.html#clDeviceGlobalMemCacheLineSize",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clDeviceGlobalMemCacheLineSize",
          "package": "OpenCLWrappers",
          "partial": "Device Global Mem Cache Line Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:clDeviceGlobalMemCacheLineSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clDeviceGlobalMemCacheSize",
          "package": "OpenCLWrappers",
          "signature": "DeviceInfo",
          "source": "src/System-OpenCL-Wrappers-Types.html#clDeviceGlobalMemCacheSize",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clDeviceGlobalMemCacheSize",
          "package": "OpenCLWrappers",
          "partial": "Device Global Mem Cache Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:clDeviceGlobalMemCacheSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clDeviceGlobalMemCacheType",
          "package": "OpenCLWrappers",
          "signature": "DeviceInfo",
          "source": "src/System-OpenCL-Wrappers-Types.html#clDeviceGlobalMemCacheType",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clDeviceGlobalMemCacheType",
          "package": "OpenCLWrappers",
          "partial": "Device Global Mem Cache Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:clDeviceGlobalMemCacheType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clDeviceGlobalMemSize",
          "package": "OpenCLWrappers",
          "signature": "DeviceInfo",
          "source": "src/System-OpenCL-Wrappers-Types.html#clDeviceGlobalMemSize",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clDeviceGlobalMemSize",
          "package": "OpenCLWrappers",
          "partial": "Device Global Mem Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:clDeviceGlobalMemSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clDeviceHalfFPConfig",
          "package": "OpenCLWrappers",
          "signature": "DeviceInfo",
          "source": "src/System-OpenCL-Wrappers-Types.html#clDeviceHalfFPConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clDeviceHalfFPConfig",
          "package": "OpenCLWrappers",
          "partial": "Device Half FPConfig",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:clDeviceHalfFPConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clDeviceImage2DMaxHeight",
          "package": "OpenCLWrappers",
          "signature": "DeviceInfo",
          "source": "src/System-OpenCL-Wrappers-Types.html#clDeviceImage2DMaxHeight",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clDeviceImage2DMaxHeight",
          "package": "OpenCLWrappers",
          "partial": "Device Image DMax Height",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:clDeviceImage2DMaxHeight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clDeviceImage2DMaxWidth",
          "package": "OpenCLWrappers",
          "signature": "DeviceInfo",
          "source": "src/System-OpenCL-Wrappers-Types.html#clDeviceImage2DMaxWidth",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clDeviceImage2DMaxWidth",
          "package": "OpenCLWrappers",
          "partial": "Device Image DMax Width",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:clDeviceImage2DMaxWidth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clDeviceImage3DMaxDepth",
          "package": "OpenCLWrappers",
          "signature": "DeviceInfo",
          "source": "src/System-OpenCL-Wrappers-Types.html#clDeviceImage3DMaxDepth",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clDeviceImage3DMaxDepth",
          "package": "OpenCLWrappers",
          "partial": "Device Image DMax Depth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:clDeviceImage3DMaxDepth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clDeviceImage3DMaxHeight",
          "package": "OpenCLWrappers",
          "signature": "DeviceInfo",
          "source": "src/System-OpenCL-Wrappers-Types.html#clDeviceImage3DMaxHeight",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clDeviceImage3DMaxHeight",
          "package": "OpenCLWrappers",
          "partial": "Device Image DMax Height",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:clDeviceImage3DMaxHeight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clDeviceImage3DMaxWidth",
          "package": "OpenCLWrappers",
          "signature": "DeviceInfo",
          "source": "src/System-OpenCL-Wrappers-Types.html#clDeviceImage3DMaxWidth",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clDeviceImage3DMaxWidth",
          "package": "OpenCLWrappers",
          "partial": "Device Image DMax Width",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:clDeviceImage3DMaxWidth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clDeviceImageSupport",
          "package": "OpenCLWrappers",
          "signature": "DeviceInfo",
          "source": "src/System-OpenCL-Wrappers-Types.html#clDeviceImageSupport",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clDeviceImageSupport",
          "package": "OpenCLWrappers",
          "partial": "Device Image Support",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:clDeviceImageSupport"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clDeviceLocalMemSize",
          "package": "OpenCLWrappers",
          "signature": "DeviceInfo",
          "source": "src/System-OpenCL-Wrappers-Types.html#clDeviceLocalMemSize",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clDeviceLocalMemSize",
          "package": "OpenCLWrappers",
          "partial": "Device Local Mem Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:clDeviceLocalMemSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clDeviceLocalMemType",
          "package": "OpenCLWrappers",
          "signature": "DeviceInfo",
          "source": "src/System-OpenCL-Wrappers-Types.html#clDeviceLocalMemType",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clDeviceLocalMemType",
          "package": "OpenCLWrappers",
          "partial": "Device Local Mem Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:clDeviceLocalMemType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clDeviceMaxClockFrequency",
          "package": "OpenCLWrappers",
          "signature": "DeviceInfo",
          "source": "src/System-OpenCL-Wrappers-Types.html#clDeviceMaxClockFrequency",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clDeviceMaxClockFrequency",
          "package": "OpenCLWrappers",
          "partial": "Device Max Clock Frequency",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:clDeviceMaxClockFrequency"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clDeviceMaxComputeUnits",
          "package": "OpenCLWrappers",
          "signature": "DeviceInfo",
          "source": "src/System-OpenCL-Wrappers-Types.html#clDeviceMaxComputeUnits",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clDeviceMaxComputeUnits",
          "package": "OpenCLWrappers",
          "partial": "Device Max Compute Units",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:clDeviceMaxComputeUnits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clDeviceMaxConstantArgs",
          "package": "OpenCLWrappers",
          "signature": "DeviceInfo",
          "source": "src/System-OpenCL-Wrappers-Types.html#clDeviceMaxConstantArgs",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clDeviceMaxConstantArgs",
          "package": "OpenCLWrappers",
          "partial": "Device Max Constant Args",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:clDeviceMaxConstantArgs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clDeviceMaxConstantBufferSize",
          "package": "OpenCLWrappers",
          "signature": "DeviceInfo",
          "source": "src/System-OpenCL-Wrappers-Types.html#clDeviceMaxConstantBufferSize",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clDeviceMaxConstantBufferSize",
          "package": "OpenCLWrappers",
          "partial": "Device Max Constant Buffer Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:clDeviceMaxConstantBufferSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clDeviceMaxMemAllocSize",
          "package": "OpenCLWrappers",
          "signature": "DeviceInfo",
          "source": "src/System-OpenCL-Wrappers-Types.html#clDeviceMaxMemAllocSize",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clDeviceMaxMemAllocSize",
          "package": "OpenCLWrappers",
          "partial": "Device Max Mem Alloc Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:clDeviceMaxMemAllocSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clDeviceMaxParameterSize",
          "package": "OpenCLWrappers",
          "signature": "DeviceInfo",
          "source": "src/System-OpenCL-Wrappers-Types.html#clDeviceMaxParameterSize",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clDeviceMaxParameterSize",
          "package": "OpenCLWrappers",
          "partial": "Device Max Parameter Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:clDeviceMaxParameterSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clDeviceMaxReadImageArgs",
          "package": "OpenCLWrappers",
          "signature": "DeviceInfo",
          "source": "src/System-OpenCL-Wrappers-Types.html#clDeviceMaxReadImageArgs",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clDeviceMaxReadImageArgs",
          "package": "OpenCLWrappers",
          "partial": "Device Max Read Image Args",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:clDeviceMaxReadImageArgs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clDeviceMaxSamplers",
          "package": "OpenCLWrappers",
          "signature": "DeviceInfo",
          "source": "src/System-OpenCL-Wrappers-Types.html#clDeviceMaxSamplers",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clDeviceMaxSamplers",
          "package": "OpenCLWrappers",
          "partial": "Device Max Samplers",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:clDeviceMaxSamplers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clDeviceMaxWorkGroupSize",
          "package": "OpenCLWrappers",
          "signature": "DeviceInfo",
          "source": "src/System-OpenCL-Wrappers-Types.html#clDeviceMaxWorkGroupSize",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clDeviceMaxWorkGroupSize",
          "package": "OpenCLWrappers",
          "partial": "Device Max Work Group Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:clDeviceMaxWorkGroupSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clDeviceMaxWorkItemDimensions",
          "package": "OpenCLWrappers",
          "signature": "DeviceInfo",
          "source": "src/System-OpenCL-Wrappers-Types.html#clDeviceMaxWorkItemDimensions",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clDeviceMaxWorkItemDimensions",
          "package": "OpenCLWrappers",
          "partial": "Device Max Work Item Dimensions",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:clDeviceMaxWorkItemDimensions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clDeviceMaxWorkItemSizes",
          "package": "OpenCLWrappers",
          "signature": "DeviceInfo",
          "source": "src/System-OpenCL-Wrappers-Types.html#clDeviceMaxWorkItemSizes",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clDeviceMaxWorkItemSizes",
          "package": "OpenCLWrappers",
          "partial": "Device Max Work Item Sizes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:clDeviceMaxWorkItemSizes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clDeviceMaxWriteImageArgs",
          "package": "OpenCLWrappers",
          "signature": "DeviceInfo",
          "source": "src/System-OpenCL-Wrappers-Types.html#clDeviceMaxWriteImageArgs",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clDeviceMaxWriteImageArgs",
          "package": "OpenCLWrappers",
          "partial": "Device Max Write Image Args",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:clDeviceMaxWriteImageArgs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clDeviceMemBaseAddrAlign",
          "package": "OpenCLWrappers",
          "signature": "DeviceInfo",
          "source": "src/System-OpenCL-Wrappers-Types.html#clDeviceMemBaseAddrAlign",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clDeviceMemBaseAddrAlign",
          "package": "OpenCLWrappers",
          "partial": "Device Mem Base Addr Align",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:clDeviceMemBaseAddrAlign"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clDeviceMinDataTypeAlignSize",
          "package": "OpenCLWrappers",
          "signature": "DeviceInfo",
          "source": "src/System-OpenCL-Wrappers-Types.html#clDeviceMinDataTypeAlignSize",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clDeviceMinDataTypeAlignSize",
          "package": "OpenCLWrappers",
          "partial": "Device Min Data Type Align Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:clDeviceMinDataTypeAlignSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clDeviceName",
          "package": "OpenCLWrappers",
          "signature": "DeviceInfo",
          "source": "src/System-OpenCL-Wrappers-Types.html#clDeviceName",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clDeviceName",
          "package": "OpenCLWrappers",
          "partial": "Device Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:clDeviceName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clDevicePlatform",
          "package": "OpenCLWrappers",
          "signature": "DeviceInfo",
          "source": "src/System-OpenCL-Wrappers-Types.html#clDevicePlatform",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clDevicePlatform",
          "package": "OpenCLWrappers",
          "partial": "Device Platform",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:clDevicePlatform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clDevicePreferredVectorWidthChar",
          "package": "OpenCLWrappers",
          "signature": "DeviceInfo",
          "source": "src/System-OpenCL-Wrappers-Types.html#clDevicePreferredVectorWidthChar",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clDevicePreferredVectorWidthChar",
          "package": "OpenCLWrappers",
          "partial": "Device Preferred Vector Width Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:clDevicePreferredVectorWidthChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clDevicePreferredVectorWidthDouble",
          "package": "OpenCLWrappers",
          "signature": "DeviceInfo",
          "source": "src/System-OpenCL-Wrappers-Types.html#clDevicePreferredVectorWidthDouble",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clDevicePreferredVectorWidthDouble",
          "package": "OpenCLWrappers",
          "partial": "Device Preferred Vector Width Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:clDevicePreferredVectorWidthDouble"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clDevicePreferredVectorWidthFloat",
          "package": "OpenCLWrappers",
          "signature": "DeviceInfo",
          "source": "src/System-OpenCL-Wrappers-Types.html#clDevicePreferredVectorWidthFloat",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clDevicePreferredVectorWidthFloat",
          "package": "OpenCLWrappers",
          "partial": "Device Preferred Vector Width Float",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:clDevicePreferredVectorWidthFloat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clDevicePreferredVectorWidthInt",
          "package": "OpenCLWrappers",
          "signature": "DeviceInfo",
          "source": "src/System-OpenCL-Wrappers-Types.html#clDevicePreferredVectorWidthInt",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clDevicePreferredVectorWidthInt",
          "package": "OpenCLWrappers",
          "partial": "Device Preferred Vector Width Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:clDevicePreferredVectorWidthInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clDevicePreferredVectorWidthLong",
          "package": "OpenCLWrappers",
          "signature": "DeviceInfo",
          "source": "src/System-OpenCL-Wrappers-Types.html#clDevicePreferredVectorWidthLong",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clDevicePreferredVectorWidthLong",
          "package": "OpenCLWrappers",
          "partial": "Device Preferred Vector Width Long",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:clDevicePreferredVectorWidthLong"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clDevicePreferredVectorWidthShort",
          "package": "OpenCLWrappers",
          "signature": "DeviceInfo",
          "source": "src/System-OpenCL-Wrappers-Types.html#clDevicePreferredVectorWidthShort",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clDevicePreferredVectorWidthShort",
          "package": "OpenCLWrappers",
          "partial": "Device Preferred Vector Width Short",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:clDevicePreferredVectorWidthShort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clDeviceProfile",
          "package": "OpenCLWrappers",
          "signature": "DeviceInfo",
          "source": "src/System-OpenCL-Wrappers-Types.html#clDeviceProfile",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clDeviceProfile",
          "package": "OpenCLWrappers",
          "partial": "Device Profile",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:clDeviceProfile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clDeviceProfilingTimerResolution",
          "package": "OpenCLWrappers",
          "signature": "DeviceInfo",
          "source": "src/System-OpenCL-Wrappers-Types.html#clDeviceProfilingTimerResolution",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clDeviceProfilingTimerResolution",
          "package": "OpenCLWrappers",
          "partial": "Device Profiling Timer Resolution",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:clDeviceProfilingTimerResolution"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clDeviceQueueProperties",
          "package": "OpenCLWrappers",
          "signature": "DeviceInfo",
          "source": "src/System-OpenCL-Wrappers-Types.html#clDeviceQueueProperties",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clDeviceQueueProperties",
          "package": "OpenCLWrappers",
          "partial": "Device Queue Properties",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:clDeviceQueueProperties"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clDeviceSingleFPConfig",
          "package": "OpenCLWrappers",
          "signature": "DeviceInfo",
          "source": "src/System-OpenCL-Wrappers-Types.html#clDeviceSingleFPConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clDeviceSingleFPConfig",
          "package": "OpenCLWrappers",
          "partial": "Device Single FPConfig",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:clDeviceSingleFPConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clDeviceType",
          "package": "OpenCLWrappers",
          "signature": "DeviceInfo",
          "source": "src/System-OpenCL-Wrappers-Types.html#clDeviceType",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clDeviceType",
          "package": "OpenCLWrappers",
          "partial": "Device Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:clDeviceType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clDeviceTypeAccelerator",
          "package": "OpenCLWrappers",
          "signature": "DeviceType",
          "source": "src/System-OpenCL-Wrappers-Types.html#clDeviceTypeAccelerator",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clDeviceTypeAccelerator",
          "package": "OpenCLWrappers",
          "partial": "Device Type Accelerator",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:clDeviceTypeAccelerator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clDeviceTypeAll",
          "package": "OpenCLWrappers",
          "signature": "DeviceType",
          "source": "src/System-OpenCL-Wrappers-Types.html#clDeviceTypeAll",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clDeviceTypeAll",
          "package": "OpenCLWrappers",
          "partial": "Device Type All",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:clDeviceTypeAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clDeviceTypeCPU",
          "package": "OpenCLWrappers",
          "signature": "DeviceType",
          "source": "src/System-OpenCL-Wrappers-Types.html#clDeviceTypeCPU",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clDeviceTypeCPU",
          "package": "OpenCLWrappers",
          "partial": "Device Type CPU",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:clDeviceTypeCPU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clDeviceTypeDefault",
          "package": "OpenCLWrappers",
          "signature": "DeviceType",
          "source": "src/System-OpenCL-Wrappers-Types.html#clDeviceTypeDefault",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clDeviceTypeDefault",
          "package": "OpenCLWrappers",
          "partial": "Device Type Default",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:clDeviceTypeDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clDeviceTypeGPU",
          "package": "OpenCLWrappers",
          "signature": "DeviceType",
          "source": "src/System-OpenCL-Wrappers-Types.html#clDeviceTypeGPU",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clDeviceTypeGPU",
          "package": "OpenCLWrappers",
          "partial": "Device Type GPU",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:clDeviceTypeGPU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clDeviceVendor",
          "package": "OpenCLWrappers",
          "signature": "DeviceInfo",
          "source": "src/System-OpenCL-Wrappers-Types.html#clDeviceVendor",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clDeviceVendor",
          "package": "OpenCLWrappers",
          "partial": "Device Vendor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:clDeviceVendor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clDeviceVendorID",
          "package": "OpenCLWrappers",
          "signature": "DeviceInfo",
          "source": "src/System-OpenCL-Wrappers-Types.html#clDeviceVendorID",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clDeviceVendorID",
          "package": "OpenCLWrappers",
          "partial": "Device Vendor ID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:clDeviceVendorID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clDeviceVersion",
          "package": "OpenCLWrappers",
          "signature": "DeviceInfo",
          "source": "src/System-OpenCL-Wrappers-Types.html#clDeviceVersion",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clDeviceVersion",
          "package": "OpenCLWrappers",
          "partial": "Device Version",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:clDeviceVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clDriverVersion",
          "package": "OpenCLWrappers",
          "signature": "DeviceInfo",
          "source": "src/System-OpenCL-Wrappers-Types.html#clDriverVersion",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clDriverVersion",
          "package": "OpenCLWrappers",
          "partial": "Driver Version",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:clDriverVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clEventCommandExecutionStatus",
          "package": "OpenCLWrappers",
          "signature": "EventInfo",
          "source": "src/System-OpenCL-Wrappers-Types.html#clEventCommandExecutionStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clEventCommandExecutionStatus",
          "package": "OpenCLWrappers",
          "partial": "Event Command Execution Status",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:clEventCommandExecutionStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clEventCommandQueue",
          "package": "OpenCLWrappers",
          "signature": "EventInfo",
          "source": "src/System-OpenCL-Wrappers-Types.html#clEventCommandQueue",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clEventCommandQueue",
          "package": "OpenCLWrappers",
          "partial": "Event Command Queue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:clEventCommandQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clEventCommandType",
          "package": "OpenCLWrappers",
          "signature": "EventInfo",
          "source": "src/System-OpenCL-Wrappers-Types.html#clEventCommandType",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clEventCommandType",
          "package": "OpenCLWrappers",
          "partial": "Event Command Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:clEventCommandType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clEventReferenceCount",
          "package": "OpenCLWrappers",
          "signature": "EventInfo",
          "source": "src/System-OpenCL-Wrappers-Types.html#clEventReferenceCount",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clEventReferenceCount",
          "package": "OpenCLWrappers",
          "partial": "Event Reference Count",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:clEventReferenceCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clFPDenorm",
          "package": "OpenCLWrappers",
          "signature": "DeviceFPConfig",
          "source": "src/System-OpenCL-Wrappers-Types.html#clFPDenorm",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clFPDenorm",
          "package": "OpenCLWrappers",
          "partial": "FPDenorm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:clFPDenorm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clFPFMA",
          "package": "OpenCLWrappers",
          "signature": "DeviceFPConfig",
          "source": "src/System-OpenCL-Wrappers-Types.html#clFPFMA",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clFPFMA",
          "package": "OpenCLWrappers",
          "partial": "FPFMA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:clFPFMA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clFPInfNan",
          "package": "OpenCLWrappers",
          "signature": "DeviceFPConfig",
          "source": "src/System-OpenCL-Wrappers-Types.html#clFPInfNan",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clFPInfNan",
          "package": "OpenCLWrappers",
          "partial": "FPInf Nan",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:clFPInfNan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clFPRoundToInf",
          "package": "OpenCLWrappers",
          "signature": "DeviceFPConfig",
          "source": "src/System-OpenCL-Wrappers-Types.html#clFPRoundToInf",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clFPRoundToInf",
          "package": "OpenCLWrappers",
          "partial": "FPRound To Inf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:clFPRoundToInf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clFPRoundToNearest",
          "package": "OpenCLWrappers",
          "signature": "DeviceFPConfig",
          "source": "src/System-OpenCL-Wrappers-Types.html#clFPRoundToNearest",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clFPRoundToNearest",
          "package": "OpenCLWrappers",
          "partial": "FPRound To Nearest",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:clFPRoundToNearest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clFPRoundToZero",
          "package": "OpenCLWrappers",
          "signature": "DeviceFPConfig",
          "source": "src/System-OpenCL-Wrappers-Types.html#clFPRoundToZero",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clFPRoundToZero",
          "package": "OpenCLWrappers",
          "partial": "FPRound To Zero",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:clFPRoundToZero"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clFalse",
          "package": "OpenCLWrappers",
          "signature": "CLbool",
          "source": "src/System-OpenCL-Wrappers-Types.html#clFalse",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clFalse",
          "package": "OpenCLWrappers",
          "partial": "False",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:clFalse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clFilterLinear",
          "package": "OpenCLWrappers",
          "signature": "FilterMode",
          "source": "src/System-OpenCL-Wrappers-Types.html#clFilterLinear",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clFilterLinear",
          "package": "OpenCLWrappers",
          "partial": "Filter Linear",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:clFilterLinear"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clFilterNearest",
          "package": "OpenCLWrappers",
          "signature": "FilterMode",
          "source": "src/System-OpenCL-Wrappers-Types.html#clFilterNearest",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clFilterNearest",
          "package": "OpenCLWrappers",
          "partial": "Filter Nearest",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:clFilterNearest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clFloat",
          "package": "OpenCLWrappers",
          "signature": "ChannelType",
          "source": "src/System-OpenCL-Wrappers-Types.html#clFloat",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clFloat",
          "package": "OpenCLWrappers",
          "partial": "Float",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:clFloat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clHalfFloat",
          "package": "OpenCLWrappers",
          "signature": "ChannelType",
          "source": "src/System-OpenCL-Wrappers-Types.html#clHalfFloat",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clHalfFloat",
          "package": "OpenCLWrappers",
          "partial": "Half Float",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:clHalfFloat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clImageDepth",
          "package": "OpenCLWrappers",
          "signature": "MemInfo",
          "source": "src/System-OpenCL-Wrappers-Types.html#clImageDepth",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clImageDepth",
          "package": "OpenCLWrappers",
          "partial": "Image Depth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:clImageDepth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clImageElementSize",
          "package": "OpenCLWrappers",
          "signature": "MemInfo",
          "source": "src/System-OpenCL-Wrappers-Types.html#clImageElementSize",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clImageElementSize",
          "package": "OpenCLWrappers",
          "partial": "Image Element Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:clImageElementSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clImageFormat",
          "package": "OpenCLWrappers",
          "signature": "MemInfo",
          "source": "src/System-OpenCL-Wrappers-Types.html#clImageFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clImageFormat",
          "package": "OpenCLWrappers",
          "partial": "Image Format",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:clImageFormat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clImageHeight",
          "package": "OpenCLWrappers",
          "signature": "MemInfo",
          "source": "src/System-OpenCL-Wrappers-Types.html#clImageHeight",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clImageHeight",
          "package": "OpenCLWrappers",
          "partial": "Image Height",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:clImageHeight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clImageRowPitch",
          "package": "OpenCLWrappers",
          "signature": "MemInfo",
          "source": "src/System-OpenCL-Wrappers-Types.html#clImageRowPitch",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clImageRowPitch",
          "package": "OpenCLWrappers",
          "partial": "Image Row Pitch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:clImageRowPitch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clImageSlicePitch",
          "package": "OpenCLWrappers",
          "signature": "MemInfo",
          "source": "src/System-OpenCL-Wrappers-Types.html#clImageSlicePitch",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clImageSlicePitch",
          "package": "OpenCLWrappers",
          "partial": "Image Slice Pitch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:clImageSlicePitch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clImageWidth",
          "package": "OpenCLWrappers",
          "signature": "MemInfo",
          "source": "src/System-OpenCL-Wrappers-Types.html#clImageWidth",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clImageWidth",
          "package": "OpenCLWrappers",
          "partial": "Image Width",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:clImageWidth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clIntensity",
          "package": "OpenCLWrappers",
          "signature": "ChannelOrder",
          "source": "src/System-OpenCL-Wrappers-Types.html#clIntensity",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clIntensity",
          "package": "OpenCLWrappers",
          "partial": "Intensity",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:clIntensity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clKernelCompileWorkGroupSize",
          "package": "OpenCLWrappers",
          "signature": "KernelWorkGroupInfo",
          "source": "src/System-OpenCL-Wrappers-Types.html#clKernelCompileWorkGroupSize",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clKernelCompileWorkGroupSize",
          "package": "OpenCLWrappers",
          "partial": "Kernel Compile Work Group Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:clKernelCompileWorkGroupSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clKernelContext",
          "package": "OpenCLWrappers",
          "signature": "KernelInfo",
          "source": "src/System-OpenCL-Wrappers-Types.html#clKernelContext",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clKernelContext",
          "package": "OpenCLWrappers",
          "partial": "Kernel Context",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:clKernelContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clKernelFunctionName",
          "package": "OpenCLWrappers",
          "signature": "KernelInfo",
          "source": "src/System-OpenCL-Wrappers-Types.html#clKernelFunctionName",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clKernelFunctionName",
          "package": "OpenCLWrappers",
          "partial": "Kernel Function Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:clKernelFunctionName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clKernelLocalMemSize",
          "package": "OpenCLWrappers",
          "signature": "KernelWorkGroupInfo",
          "source": "src/System-OpenCL-Wrappers-Types.html#clKernelLocalMemSize",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clKernelLocalMemSize",
          "package": "OpenCLWrappers",
          "partial": "Kernel Local Mem Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:clKernelLocalMemSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clKernelNumArgs",
          "package": "OpenCLWrappers",
          "signature": "KernelInfo",
          "source": "src/System-OpenCL-Wrappers-Types.html#clKernelNumArgs",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clKernelNumArgs",
          "package": "OpenCLWrappers",
          "partial": "Kernel Num Args",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:clKernelNumArgs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clKernelProgram",
          "package": "OpenCLWrappers",
          "signature": "KernelInfo",
          "source": "src/System-OpenCL-Wrappers-Types.html#clKernelProgram",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clKernelProgram",
          "package": "OpenCLWrappers",
          "partial": "Kernel Program",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:clKernelProgram"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clKernelReferenceCount",
          "package": "OpenCLWrappers",
          "signature": "KernelInfo",
          "source": "src/System-OpenCL-Wrappers-Types.html#clKernelReferenceCount",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clKernelReferenceCount",
          "package": "OpenCLWrappers",
          "partial": "Kernel Reference Count",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:clKernelReferenceCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clKernelWorkGroupSize",
          "package": "OpenCLWrappers",
          "signature": "KernelWorkGroupInfo",
          "source": "src/System-OpenCL-Wrappers-Types.html#clKernelWorkGroupSize",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clKernelWorkGroupSize",
          "package": "OpenCLWrappers",
          "partial": "Kernel Work Group Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:clKernelWorkGroupSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clLuminance",
          "package": "OpenCLWrappers",
          "signature": "ChannelOrder",
          "source": "src/System-OpenCL-Wrappers-Types.html#clLuminance",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clLuminance",
          "package": "OpenCLWrappers",
          "partial": "Luminance",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:clLuminance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clMapRead",
          "package": "OpenCLWrappers",
          "signature": "MapFlags",
          "source": "src/System-OpenCL-Wrappers-Types.html#clMapRead",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clMapRead",
          "package": "OpenCLWrappers",
          "partial": "Map Read",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:clMapRead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clMapWrite",
          "package": "OpenCLWrappers",
          "signature": "MapFlags",
          "source": "src/System-OpenCL-Wrappers-Types.html#clMapWrite",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clMapWrite",
          "package": "OpenCLWrappers",
          "partial": "Map Write",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:clMapWrite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clMemAllocHostPtr",
          "package": "OpenCLWrappers",
          "signature": "MemFlags",
          "source": "src/System-OpenCL-Wrappers-Types.html#clMemAllocHostPtr",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clMemAllocHostPtr",
          "package": "OpenCLWrappers",
          "partial": "Mem Alloc Host Ptr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:clMemAllocHostPtr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clMemContext",
          "package": "OpenCLWrappers",
          "signature": "MemInfo",
          "source": "src/System-OpenCL-Wrappers-Types.html#clMemContext",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clMemContext",
          "package": "OpenCLWrappers",
          "partial": "Mem Context",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:clMemContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clMemCopyHostPtr",
          "package": "OpenCLWrappers",
          "signature": "MemFlags",
          "source": "src/System-OpenCL-Wrappers-Types.html#clMemCopyHostPtr",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clMemCopyHostPtr",
          "package": "OpenCLWrappers",
          "partial": "Mem Copy Host Ptr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:clMemCopyHostPtr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clMemFlags",
          "package": "OpenCLWrappers",
          "signature": "MemInfo",
          "source": "src/System-OpenCL-Wrappers-Types.html#clMemFlags",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clMemFlags",
          "package": "OpenCLWrappers",
          "partial": "Mem Flags",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:clMemFlags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clMemHostPtr",
          "package": "OpenCLWrappers",
          "signature": "MemInfo",
          "source": "src/System-OpenCL-Wrappers-Types.html#clMemHostPtr",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clMemHostPtr",
          "package": "OpenCLWrappers",
          "partial": "Mem Host Ptr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:clMemHostPtr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clMemMapCount",
          "package": "OpenCLWrappers",
          "signature": "MemInfo",
          "source": "src/System-OpenCL-Wrappers-Types.html#clMemMapCount",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clMemMapCount",
          "package": "OpenCLWrappers",
          "partial": "Mem Map Count",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:clMemMapCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clMemObjectBuffer",
          "package": "OpenCLWrappers",
          "signature": "MemObjectType",
          "source": "src/System-OpenCL-Wrappers-Types.html#clMemObjectBuffer",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clMemObjectBuffer",
          "package": "OpenCLWrappers",
          "partial": "Mem Object Buffer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:clMemObjectBuffer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clMemObjectImage2D",
          "package": "OpenCLWrappers",
          "signature": "MemObjectType",
          "source": "src/System-OpenCL-Wrappers-Types.html#clMemObjectImage2D",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clMemObjectImage2D",
          "package": "OpenCLWrappers",
          "partial": "Mem Object Image",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:clMemObjectImage2D"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clMemObjectImage3D",
          "package": "OpenCLWrappers",
          "signature": "MemObjectType",
          "source": "src/System-OpenCL-Wrappers-Types.html#clMemObjectImage3D",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clMemObjectImage3D",
          "package": "OpenCLWrappers",
          "partial": "Mem Object Image",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:clMemObjectImage3D"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clMemReadOnly",
          "package": "OpenCLWrappers",
          "signature": "MemFlags",
          "source": "src/System-OpenCL-Wrappers-Types.html#clMemReadOnly",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clMemReadOnly",
          "package": "OpenCLWrappers",
          "partial": "Mem Read Only",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:clMemReadOnly"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clMemReadWrite",
          "package": "OpenCLWrappers",
          "signature": "MemFlags",
          "source": "src/System-OpenCL-Wrappers-Types.html#clMemReadWrite",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clMemReadWrite",
          "package": "OpenCLWrappers",
          "partial": "Mem Read Write",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:clMemReadWrite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clMemReferenceCount",
          "package": "OpenCLWrappers",
          "signature": "MemInfo",
          "source": "src/System-OpenCL-Wrappers-Types.html#clMemReferenceCount",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clMemReferenceCount",
          "package": "OpenCLWrappers",
          "partial": "Mem Reference Count",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:clMemReferenceCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clMemSize",
          "package": "OpenCLWrappers",
          "signature": "MemInfo",
          "source": "src/System-OpenCL-Wrappers-Types.html#clMemSize",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clMemSize",
          "package": "OpenCLWrappers",
          "partial": "Mem Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:clMemSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clMemType",
          "package": "OpenCLWrappers",
          "signature": "MemInfo",
          "source": "src/System-OpenCL-Wrappers-Types.html#clMemType",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clMemType",
          "package": "OpenCLWrappers",
          "partial": "Mem Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:clMemType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clMemUseHostPtr",
          "package": "OpenCLWrappers",
          "signature": "MemFlags",
          "source": "src/System-OpenCL-Wrappers-Types.html#clMemUseHostPtr",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clMemUseHostPtr",
          "package": "OpenCLWrappers",
          "partial": "Mem Use Host Ptr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:clMemUseHostPtr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clMemWriteOnly",
          "package": "OpenCLWrappers",
          "signature": "MemFlags",
          "source": "src/System-OpenCL-Wrappers-Types.html#clMemWriteOnly",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clMemWriteOnly",
          "package": "OpenCLWrappers",
          "partial": "Mem Write Only",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:clMemWriteOnly"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clPlatformExtensions",
          "package": "OpenCLWrappers",
          "signature": "PlatformInfo",
          "source": "src/System-OpenCL-Wrappers-Types.html#clPlatformExtensions",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clPlatformExtensions",
          "package": "OpenCLWrappers",
          "partial": "Platform Extensions",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:clPlatformExtensions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clPlatformName",
          "package": "OpenCLWrappers",
          "signature": "PlatformInfo",
          "source": "src/System-OpenCL-Wrappers-Types.html#clPlatformName",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clPlatformName",
          "package": "OpenCLWrappers",
          "partial": "Platform Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:clPlatformName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clPlatformProfile",
          "package": "OpenCLWrappers",
          "signature": "PlatformInfo",
          "source": "src/System-OpenCL-Wrappers-Types.html#clPlatformProfile",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clPlatformProfile",
          "package": "OpenCLWrappers",
          "partial": "Platform Profile",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:clPlatformProfile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clPlatformVendor",
          "package": "OpenCLWrappers",
          "signature": "PlatformInfo",
          "source": "src/System-OpenCL-Wrappers-Types.html#clPlatformVendor",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clPlatformVendor",
          "package": "OpenCLWrappers",
          "partial": "Platform Vendor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:clPlatformVendor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clPlatformVersion",
          "package": "OpenCLWrappers",
          "signature": "PlatformInfo",
          "source": "src/System-OpenCL-Wrappers-Types.html#clPlatformVersion",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clPlatformVersion",
          "package": "OpenCLWrappers",
          "partial": "Platform Version",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:clPlatformVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clProfilingCommandEnd",
          "package": "OpenCLWrappers",
          "signature": "ProfilingInfo",
          "source": "src/System-OpenCL-Wrappers-Types.html#clProfilingCommandEnd",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clProfilingCommandEnd",
          "package": "OpenCLWrappers",
          "partial": "Profiling Command End",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:clProfilingCommandEnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clProfilingCommandQueued",
          "package": "OpenCLWrappers",
          "signature": "ProfilingInfo",
          "source": "src/System-OpenCL-Wrappers-Types.html#clProfilingCommandQueued",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clProfilingCommandQueued",
          "package": "OpenCLWrappers",
          "partial": "Profiling Command Queued",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:clProfilingCommandQueued"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clProfilingCommandStart",
          "package": "OpenCLWrappers",
          "signature": "ProfilingInfo",
          "source": "src/System-OpenCL-Wrappers-Types.html#clProfilingCommandStart",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clProfilingCommandStart",
          "package": "OpenCLWrappers",
          "partial": "Profiling Command Start",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:clProfilingCommandStart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clProfilingCommandSubmit",
          "package": "OpenCLWrappers",
          "signature": "ProfilingInfo",
          "source": "src/System-OpenCL-Wrappers-Types.html#clProfilingCommandSubmit",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clProfilingCommandSubmit",
          "package": "OpenCLWrappers",
          "partial": "Profiling Command Submit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:clProfilingCommandSubmit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clProgramBinaries",
          "package": "OpenCLWrappers",
          "signature": "ProgramInfo",
          "source": "src/System-OpenCL-Wrappers-Types.html#clProgramBinaries",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clProgramBinaries",
          "package": "OpenCLWrappers",
          "partial": "Program Binaries",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:clProgramBinaries"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clProgramBinarySizes",
          "package": "OpenCLWrappers",
          "signature": "ProgramInfo",
          "source": "src/System-OpenCL-Wrappers-Types.html#clProgramBinarySizes",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clProgramBinarySizes",
          "package": "OpenCLWrappers",
          "partial": "Program Binary Sizes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:clProgramBinarySizes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clProgramBuildLog",
          "package": "OpenCLWrappers",
          "signature": "ProgramBuildInfo",
          "source": "src/System-OpenCL-Wrappers-Types.html#clProgramBuildLog",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clProgramBuildLog",
          "package": "OpenCLWrappers",
          "partial": "Program Build Log",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:clProgramBuildLog"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clProgramBuildOptions",
          "package": "OpenCLWrappers",
          "signature": "ProgramBuildInfo",
          "source": "src/System-OpenCL-Wrappers-Types.html#clProgramBuildOptions",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clProgramBuildOptions",
          "package": "OpenCLWrappers",
          "partial": "Program Build Options",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:clProgramBuildOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clProgramBuildStatus",
          "package": "OpenCLWrappers",
          "signature": "ProgramBuildInfo",
          "source": "src/System-OpenCL-Wrappers-Types.html#clProgramBuildStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clProgramBuildStatus",
          "package": "OpenCLWrappers",
          "partial": "Program Build Status",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:clProgramBuildStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clProgramContext",
          "package": "OpenCLWrappers",
          "signature": "ProgramInfo",
          "source": "src/System-OpenCL-Wrappers-Types.html#clProgramContext",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clProgramContext",
          "package": "OpenCLWrappers",
          "partial": "Program Context",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:clProgramContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clProgramDevices",
          "package": "OpenCLWrappers",
          "signature": "ProgramInfo",
          "source": "src/System-OpenCL-Wrappers-Types.html#clProgramDevices",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clProgramDevices",
          "package": "OpenCLWrappers",
          "partial": "Program Devices",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:clProgramDevices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clProgramNumDevices",
          "package": "OpenCLWrappers",
          "signature": "ProgramInfo",
          "source": "src/System-OpenCL-Wrappers-Types.html#clProgramNumDevices",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clProgramNumDevices",
          "package": "OpenCLWrappers",
          "partial": "Program Num Devices",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:clProgramNumDevices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clProgramReferenceCount",
          "package": "OpenCLWrappers",
          "signature": "ProgramInfo",
          "source": "src/System-OpenCL-Wrappers-Types.html#clProgramReferenceCount",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clProgramReferenceCount",
          "package": "OpenCLWrappers",
          "partial": "Program Reference Count",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:clProgramReferenceCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clProgramSource",
          "package": "OpenCLWrappers",
          "signature": "ProgramInfo",
          "source": "src/System-OpenCL-Wrappers-Types.html#clProgramSource",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clProgramSource",
          "package": "OpenCLWrappers",
          "partial": "Program Source",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:clProgramSource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clQueueContext",
          "package": "OpenCLWrappers",
          "signature": "CommandQueueInfo",
          "source": "src/System-OpenCL-Wrappers-Types.html#clQueueContext",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clQueueContext",
          "package": "OpenCLWrappers",
          "partial": "Queue Context",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:clQueueContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clQueueDevice",
          "package": "OpenCLWrappers",
          "signature": "CommandQueueInfo",
          "source": "src/System-OpenCL-Wrappers-Types.html#clQueueDevice",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clQueueDevice",
          "package": "OpenCLWrappers",
          "partial": "Queue Device",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:clQueueDevice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clQueueOutOfOrderExecModeEnable",
          "package": "OpenCLWrappers",
          "signature": "CommandQueueProperties",
          "source": "src/System-OpenCL-Wrappers-Types.html#clQueueOutOfOrderExecModeEnable",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clQueueOutOfOrderExecModeEnable",
          "package": "OpenCLWrappers",
          "partial": "Queue Out Of Order Exec Mode Enable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:clQueueOutOfOrderExecModeEnable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clQueueProfilingEnable",
          "package": "OpenCLWrappers",
          "signature": "CommandQueueProperties",
          "source": "src/System-OpenCL-Wrappers-Types.html#clQueueProfilingEnable",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clQueueProfilingEnable",
          "package": "OpenCLWrappers",
          "partial": "Queue Profiling Enable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:clQueueProfilingEnable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clQueueProperties",
          "package": "OpenCLWrappers",
          "signature": "CommandQueueInfo",
          "source": "src/System-OpenCL-Wrappers-Types.html#clQueueProperties",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clQueueProperties",
          "package": "OpenCLWrappers",
          "partial": "Queue Properties",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:clQueueProperties"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clQueueReferenceCount",
          "package": "OpenCLWrappers",
          "signature": "CommandQueueInfo",
          "source": "src/System-OpenCL-Wrappers-Types.html#clQueueReferenceCount",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clQueueReferenceCount",
          "package": "OpenCLWrappers",
          "partial": "Queue Reference Count",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:clQueueReferenceCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clR",
          "package": "OpenCLWrappers",
          "signature": "ChannelOrder",
          "source": "src/System-OpenCL-Wrappers-Types.html#clR",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clR",
          "package": "OpenCLWrappers",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:clR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clRA",
          "package": "OpenCLWrappers",
          "signature": "ChannelOrder",
          "source": "src/System-OpenCL-Wrappers-Types.html#clRA",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clRA",
          "package": "OpenCLWrappers",
          "partial": "RA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:clRA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clRG",
          "package": "OpenCLWrappers",
          "signature": "ChannelOrder",
          "source": "src/System-OpenCL-Wrappers-Types.html#clRG",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clRG",
          "package": "OpenCLWrappers",
          "partial": "RG",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:clRG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clRGB",
          "package": "OpenCLWrappers",
          "signature": "ChannelOrder",
          "source": "src/System-OpenCL-Wrappers-Types.html#clRGB",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clRGB",
          "package": "OpenCLWrappers",
          "partial": "RGB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:clRGB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clRGBA",
          "package": "OpenCLWrappers",
          "signature": "ChannelOrder",
          "source": "src/System-OpenCL-Wrappers-Types.html#clRGBA",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clRGBA",
          "package": "OpenCLWrappers",
          "partial": "RGBA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:clRGBA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clSNormInt16",
          "package": "OpenCLWrappers",
          "signature": "ChannelType",
          "source": "src/System-OpenCL-Wrappers-Types.html#clSNormInt16",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clSNormInt16",
          "package": "OpenCLWrappers",
          "partial": "SNorm Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:clSNormInt16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clSNormInt8",
          "package": "OpenCLWrappers",
          "signature": "ChannelType",
          "source": "src/System-OpenCL-Wrappers-Types.html#clSNormInt8",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clSNormInt8",
          "package": "OpenCLWrappers",
          "partial": "SNorm Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:clSNormInt8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clSamplerAddressingMode",
          "package": "OpenCLWrappers",
          "signature": "SamplerInfo",
          "source": "src/System-OpenCL-Wrappers-Types.html#clSamplerAddressingMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clSamplerAddressingMode",
          "package": "OpenCLWrappers",
          "partial": "Sampler Addressing Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:clSamplerAddressingMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clSamplerContext",
          "package": "OpenCLWrappers",
          "signature": "SamplerInfo",
          "source": "src/System-OpenCL-Wrappers-Types.html#clSamplerContext",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clSamplerContext",
          "package": "OpenCLWrappers",
          "partial": "Sampler Context",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:clSamplerContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clSamplerFilterMode",
          "package": "OpenCLWrappers",
          "signature": "SamplerInfo",
          "source": "src/System-OpenCL-Wrappers-Types.html#clSamplerFilterMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clSamplerFilterMode",
          "package": "OpenCLWrappers",
          "partial": "Sampler Filter Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:clSamplerFilterMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clSamplerNormalizedCoords",
          "package": "OpenCLWrappers",
          "signature": "SamplerInfo",
          "source": "src/System-OpenCL-Wrappers-Types.html#clSamplerNormalizedCoords",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clSamplerNormalizedCoords",
          "package": "OpenCLWrappers",
          "partial": "Sampler Normalized Coords",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:clSamplerNormalizedCoords"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clSamplerReferenceCount",
          "package": "OpenCLWrappers",
          "signature": "SamplerInfo",
          "source": "src/System-OpenCL-Wrappers-Types.html#clSamplerReferenceCount",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clSamplerReferenceCount",
          "package": "OpenCLWrappers",
          "partial": "Sampler Reference Count",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:clSamplerReferenceCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clSignedInt16",
          "package": "OpenCLWrappers",
          "signature": "ChannelType",
          "source": "src/System-OpenCL-Wrappers-Types.html#clSignedInt16",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clSignedInt16",
          "package": "OpenCLWrappers",
          "partial": "Signed Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:clSignedInt16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clSignedInt32",
          "package": "OpenCLWrappers",
          "signature": "ChannelType",
          "source": "src/System-OpenCL-Wrappers-Types.html#clSignedInt32",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clSignedInt32",
          "package": "OpenCLWrappers",
          "partial": "Signed Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:clSignedInt32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clSignedInt8",
          "package": "OpenCLWrappers",
          "signature": "ChannelType",
          "source": "src/System-OpenCL-Wrappers-Types.html#clSignedInt8",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clSignedInt8",
          "package": "OpenCLWrappers",
          "partial": "Signed Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:clSignedInt8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clTrue",
          "package": "OpenCLWrappers",
          "signature": "CLbool",
          "source": "src/System-OpenCL-Wrappers-Types.html#clTrue",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clTrue",
          "package": "OpenCLWrappers",
          "partial": "True",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:clTrue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clUNormInt101010",
          "package": "OpenCLWrappers",
          "signature": "ChannelType",
          "source": "src/System-OpenCL-Wrappers-Types.html#clUNormInt101010",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clUNormInt101010",
          "package": "OpenCLWrappers",
          "partial": "UNorm Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:clUNormInt101010"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clUNormInt16",
          "package": "OpenCLWrappers",
          "signature": "ChannelType",
          "source": "src/System-OpenCL-Wrappers-Types.html#clUNormInt16",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clUNormInt16",
          "package": "OpenCLWrappers",
          "partial": "UNorm Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:clUNormInt16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clUNormInt8",
          "package": "OpenCLWrappers",
          "signature": "ChannelType",
          "source": "src/System-OpenCL-Wrappers-Types.html#clUNormInt8",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clUNormInt8",
          "package": "OpenCLWrappers",
          "partial": "UNorm Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:clUNormInt8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clUNormShort555",
          "package": "OpenCLWrappers",
          "signature": "ChannelType",
          "source": "src/System-OpenCL-Wrappers-Types.html#clUNormShort555",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clUNormShort555",
          "package": "OpenCLWrappers",
          "partial": "UNorm Short",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:clUNormShort555"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clUNormShort565",
          "package": "OpenCLWrappers",
          "signature": "ChannelType",
          "source": "src/System-OpenCL-Wrappers-Types.html#clUNormShort565",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clUNormShort565",
          "package": "OpenCLWrappers",
          "partial": "UNorm Short",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:clUNormShort565"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clUnsignedInt16",
          "package": "OpenCLWrappers",
          "signature": "ChannelType",
          "source": "src/System-OpenCL-Wrappers-Types.html#clUnsignedInt16",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clUnsignedInt16",
          "package": "OpenCLWrappers",
          "partial": "Unsigned Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:clUnsignedInt16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clUnsignedInt32",
          "package": "OpenCLWrappers",
          "signature": "ChannelType",
          "source": "src/System-OpenCL-Wrappers-Types.html#clUnsignedInt32",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clUnsignedInt32",
          "package": "OpenCLWrappers",
          "partial": "Unsigned Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:clUnsignedInt32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clUnsignedInt8",
          "package": "OpenCLWrappers",
          "signature": "ChannelType",
          "source": "src/System-OpenCL-Wrappers-Types.html#clUnsignedInt8",
          "type": "function"
        },
        "index": {
          "hierarchy": "System OpenCL Wrappers Types",
          "module": "System.OpenCL.Wrappers.Types",
          "name": "clUnsignedInt8",
          "package": "OpenCLWrappers",
          "partial": "Unsigned Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers-Types.html#v:clUnsignedInt8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe OpenCL system for open heterogenous data parallel supercomputing.\n\u003c/p\u003e\u003cp\u003eA fork of the FFI wrapper OpenCLRaw by Jeff Heard of the Renaissance Computing Institute.\n\u003c/p\u003e\u003cp\u003eFrom the introduction: \n\u003c/p\u003e\u003cp\u003eOpenCL (Open Computing Language) is an open royalty-free standard for general purpose \n    parallel programming across CPUs, GPUs and other processors, giving software developers \n    portable and efficient access to the power of these heterogeneous processing platforms.   \n\u003c/p\u003e\u003cp\u003eOpenCL supports a wide range of applications, ranging from embedded and consumer software \n    to HPC solutions, through a low-level, high-performance, portable abstraction.  By creating an \n    efficient, close-to-the-metal programming interface, OpenCL will form the foundation layer of a \n    parallel computing ecosystem of platform-independent tools, middleware and applications.  \n    OpenCL is particularly suited to play an increasingly significant role in emerging interactive \n    graphics applications that combine general parallel compute algorithms with graphics rendering \n    pipelines. \n\u003c/p\u003e\u003cp\u003eOpenCL consists of an API for coordinating parallel computation across\n    heterogeneous processors; and a cross-platform programming language with a well- \n    specified computation environment.  The OpenCL standard: \n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Supports both data- and task-based parallel programming models \n\u003c/li\u003e\u003cli\u003e Utilizes a subset of ISO C99 with extensions for parallelism \n\u003c/li\u003e\u003cli\u003e Defines consistent numerical requirements based on IEEE 754 \n\u003c/li\u003e\u003cli\u003e Defines a configuration profile for handheld and embedded devices \n\u003c/li\u003e\u003cli\u003e Efficiently interoperates with OpenGL, OpenGL ES and other graphics APIs\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003e_General Notes on the differences between Haskell and the OpenCL-C implementation_\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Side-effectful procedures capable of returning an error code only return a Maybe ErrorCode, with Nothing returned upon success\n\u003c/li\u003e\u003cli\u003e Procedures which follow the pattern of returning a pointer to an object and taking a final parameter as an error code instead\n      return Either ErrorCode \u003ccode\u003eObjectType\u003c/code\u003e \n\u003c/li\u003e\u003cli\u003e Enumerations and constants are replaced by newtypes for the sake of type-safety.\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "System.OpenCL.Wrappers",
          "name": "Wrappers",
          "package": "OpenCLWrappers",
          "source": "src/System-OpenCL-Wrappers.html",
          "type": "module"
        },
        "index": {
          "description": "The OpenCL system for open heterogenous data parallel supercomputing fork of the FFI wrapper OpenCLRaw by Jeff Heard of the Renaissance Computing Institute From the introduction OpenCL Open Computing Language is an open royalty-free standard for general purpose parallel programming across CPUs GPUs and other processors giving software developers portable and efficient access to the power of these heterogeneous processing platforms OpenCL supports wide range of applications ranging from embedded and consumer software to HPC solutions through low-level high-performance portable abstraction By creating an efficient close-to-the-metal programming interface OpenCL will form the foundation layer of parallel computing ecosystem of platform-independent tools middleware and applications OpenCL is particularly suited to play an increasingly significant role in emerging interactive graphics applications that combine general parallel compute algorithms with graphics rendering pipelines OpenCL consists of an API for coordinating parallel computation across heterogeneous processors and cross-platform programming language with well specified computation environment The OpenCL standard Supports both data and task-based parallel programming models Utilizes subset of ISO C99 with extensions for parallelism Defines consistent numerical requirements based on IEEE Defines configuration profile for handheld and embedded devices Efficiently interoperates with OpenGL OpenGL ES and other graphics APIs General Notes on the differences between Haskell and the OpenCL-C implementation Side-effectful procedures capable of returning an error code only return Maybe ErrorCode with Nothing returned upon success Procedures which follow the pattern of returning pointer to an object and taking final parameter as an error code instead return Either ErrorCode ObjectType Enumerations and constants are replaced by newtypes for the sake of type-safety",
          "hierarchy": "System OpenCL Wrappers",
          "module": "System.OpenCL.Wrappers",
          "name": "Wrappers",
          "package": "OpenCLWrappers",
          "partial": "Wrappers",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/OpenCLWrappers/docs/System-OpenCL-Wrappers.html#"
      }
    }
  ]
]