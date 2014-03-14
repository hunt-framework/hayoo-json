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
        "word": "Win32-services"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Win32.SystemServices.Services",
          "name": "Services",
          "package": "Win32-services",
          "source": "src/System-Win32-SystemServices-Services.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "System Win32 SystemServices Services",
          "module": "System.Win32.SystemServices.Services",
          "name": "Services",
          "package": "Win32-services",
          "partial": "Services",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Win32-services/docs/System-Win32-SystemServices-Services.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA handler function is registered with the service dispatcher thread\r\n   from a \u003ccode\u003e\u003ca\u003eServiceMainFunction\u003c/a\u003e\u003c/code\u003e. The first argument is a \u003ccode\u003e\u003ca\u003eHANDLE\u003c/a\u003e\u003c/code\u003e returned\r\n   from calling \u003ccode\u003eregisterServiceCtrlHandler\u003c/code\u003e. The second argument represents\r\n   the command this service has been directed to perform.\r\n\u003c/p\u003e",
          "module": "System.Win32.SystemServices.Services",
          "name": "HandlerFunction",
          "package": "Win32-services",
          "source": "src/System-Win32-SystemServices-Services.html#HandlerFunction",
          "type": "type"
        },
        "index": {
          "description": "handler function is registered with the service dispatcher thread from ServiceMainFunction The first argument is HANDLE returned from calling registerServiceCtrlHandler The second argument represents the command this service has been directed to perform",
          "hierarchy": "System Win32 SystemServices Services",
          "module": "System.Win32.SystemServices.Services",
          "name": "HandlerFunction",
          "package": "Win32-services",
          "partial": "Handler Function",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Win32-services/docs/System-Win32-SystemServices-Services.html#t:HandlerFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe control codes the service accepts and processes in its handler\r\n   function (See \u003ccode\u003eHandlerFunction\u003c/code\u003e). By default, all services accept the\r\n   \u003ccode\u003eINTERROGATE\u003c/code\u003e value. To accept the \u003ccode\u003eDEVICEEVENT\u003c/code\u003e value, the service must\r\n   register to receive device events by using the\r\n   \u003ccode\u003eregisterDeviceNotification\u003c/code\u003e function.\r\n\u003c/p\u003e",
          "module": "System.Win32.SystemServices.Services",
          "name": "SERVICE_ACCEPT",
          "package": "Win32-services",
          "source": "src/System-Win32-SystemServices-Services-SERVICE_ACCEPT.html#SERVICE_ACCEPT",
          "type": "data"
        },
        "index": {
          "description": "The control codes the service accepts and processes in its handler function See HandlerFunction By default all services accept the INTERROGATE value To accept the DEVICEEVENT value the service must register to receive device events by using the registerDeviceNotification function",
          "hierarchy": "System Win32 SystemServices Services",
          "module": "System.Win32.SystemServices.Services",
          "name": "SERVICE_ACCEPT",
          "package": "Win32-services",
          "partial": "SERVICE ACCEPT",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Win32-services/docs/System-Win32-SystemServices-Services.html#t:SERVICE_ACCEPT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA SERVICE_CONTROL is used in Handler functions. All control codes are\r\n   defined here, but some can only be used with a \u003ccode\u003eHandlerEx\u003c/code\u003e callback.\r\n   Use \u003ccode\u003econvertSuccess\u003c/code\u003e to translate from a \u003ccode\u003e\u003ca\u003eSERVICE_CONTROL\u003c/a\u003e\u003c/code\u003e to a \u003ccode\u003e\u003ca\u003eDWORD\u003c/a\u003e\u003c/code\u003e.\r\n   Use \u003ccode\u003econvertAttempt\u003c/code\u003e to translate from a \u003ccode\u003e\u003ca\u003eDWORD\u003c/a\u003e\u003c/code\u003e to a \u003ccode\u003e\u003ca\u003eSERVICE_CONTROL\u003c/a\u003e\u003c/code\u003e.\r\n\u003c/p\u003e",
          "module": "System.Win32.SystemServices.Services",
          "name": "SERVICE_CONTROL",
          "package": "Win32-services",
          "source": "src/System-Win32-SystemServices-Services-SERVICE_CONTROL.html#SERVICE_CONTROL",
          "type": "data"
        },
        "index": {
          "description": "SERVICE CONTROL is used in Handler functions All control codes are defined here but some can only be used with HandlerEx callback Use convertSuccess to translate from SERVICE CONTROL to DWORD Use convertAttempt to translate from DWORD to SERVICE CONTROL",
          "hierarchy": "System Win32 SystemServices Services",
          "module": "System.Win32.SystemServices.Services",
          "name": "SERVICE_CONTROL",
          "package": "Win32-services",
          "partial": "SERVICE CONTROL",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Win32-services/docs/System-Win32-SystemServices-Services.html#t:SERVICE_CONTROL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe current state of a service.\r\n\u003c/p\u003e",
          "module": "System.Win32.SystemServices.Services",
          "name": "SERVICE_STATE",
          "package": "Win32-services",
          "source": "src/System-Win32-SystemServices-Services-SERVICE_STATE.html#SERVICE_STATE",
          "type": "data"
        },
        "index": {
          "description": "The current state of service",
          "hierarchy": "System Win32 SystemServices Services",
          "module": "System.Win32.SystemServices.Services",
          "name": "SERVICE_STATE",
          "package": "Win32-services",
          "partial": "SERVICE STATE",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Win32-services/docs/System-Win32-SystemServices-Services.html#t:SERVICE_STATE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eContains status information for a service.\r\n\u003c/p\u003e",
          "module": "System.Win32.SystemServices.Services",
          "name": "SERVICE_STATUS",
          "package": "Win32-services",
          "source": "src/System-Win32-SystemServices-Services-SERVICE_STATUS.html#SERVICE_STATUS",
          "type": "data"
        },
        "index": {
          "description": "Contains status information for service",
          "hierarchy": "System Win32 SystemServices Services",
          "module": "System.Win32.SystemServices.Services",
          "name": "SERVICE_STATUS",
          "package": "Win32-services",
          "partial": "SERVICE STATUS",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Win32-services/docs/System-Win32-SystemServices-Services.html#t:SERVICE_STATUS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWin32 defines many types of services, but this binding only supports\r\n WIN32_OWN_PROCESS.\r\n\u003c/p\u003e",
          "module": "System.Win32.SystemServices.Services",
          "name": "SERVICE_TYPE",
          "package": "Win32-services",
          "source": "src/System-Win32-SystemServices-Services-SERVICE_TYPE.html#SERVICE_TYPE",
          "type": "data"
        },
        "index": {
          "description": "Win32 defines many types of services but this binding only supports WIN32 OWN PROCESS",
          "hierarchy": "System Win32 SystemServices Services",
          "module": "System.Win32.SystemServices.Services",
          "name": "SERVICE_TYPE",
          "package": "Win32-services",
          "partial": "SERVICE TYPE",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Win32-services/docs/System-Win32-SystemServices-Services.html#t:SERVICE_TYPE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe service dispatcher thread will call each function of this type that\r\n   you provide. The first argument will be the name of the service. Any\r\n   additional command-line parameters will appear in the second argument.\r\n\u003c/p\u003e\u003cp\u003eEach of these functions should call \u003ccode\u003eregisterServiceCtrlHandler\u003c/code\u003e to\r\n   register a function to handle incoming commands. It should then set\r\n   the service's status to \u003ccode\u003e\u003ca\u003eSTART_PENDING\u003c/a\u003e\u003c/code\u003e, and specify that no controls\r\n   will be accepted. At this point the function may perform any other\r\n   initialization steps before setting the service's status to\r\n   \u003ccode\u003e\u003ca\u003eRUNNING\u003c/a\u003e\u003c/code\u003e. All of this should take no more than 100ms.\r\n\u003c/p\u003e",
          "module": "System.Win32.SystemServices.Services",
          "name": "ServiceMainFunction",
          "package": "Win32-services",
          "source": "src/System-Win32-SystemServices-Services.html#ServiceMainFunction",
          "type": "type"
        },
        "index": {
          "description": "The service dispatcher thread will call each function of this type that you provide The first argument will be the name of the service Any additional command-line parameters will appear in the second argument Each of these functions should call registerServiceCtrlHandler to register function to handle incoming commands It should then set the service status to START PENDING and specify that no controls will be accepted At this point the function may perform any other initialization steps before setting the service status to RUNNING All of this should take no more than ms",
          "hierarchy": "System Win32 SystemServices Services",
          "module": "System.Win32.SystemServices.Services",
          "name": "ServiceMainFunction",
          "package": "Win32-services",
          "partial": "Service Main Function",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Win32-services/docs/System-Win32-SystemServices-Services.html#t:ServiceMainFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe service is a network component that can accept changes in its\r\n   binding without being stopped and restarted. This control code allows\r\n   the service to receive \u003ccode\u003eNETBINDADD\u003c/code\u003e, \u003ccode\u003eNETBINDREMOVE\u003c/code\u003e, \u003ccode\u003eNETBINDENABLE\u003c/code\u003e\r\n   , and \u003ccode\u003eNETBINDDISABLE\u003c/code\u003e notifications.\r\n\u003c/p\u003e",
          "module": "System.Win32.SystemServices.Services",
          "name": "ACCEPT_NETBINDCHANGE",
          "package": "Win32-services",
          "signature": "ACCEPT_NETBINDCHANGE",
          "source": "src/System-Win32-SystemServices-Services-SERVICE_ACCEPT.html#SERVICE_ACCEPT",
          "type": "function"
        },
        "index": {
          "description": "The service is network component that can accept changes in its binding without being stopped and restarted This control code allows the service to receive NETBINDADD NETBINDREMOVE NETBINDENABLE and NETBINDDISABLE notifications",
          "hierarchy": "System Win32 SystemServices Services",
          "module": "System.Win32.SystemServices.Services",
          "name": "ACCEPT_NETBINDCHANGE",
          "package": "Win32-services",
          "partial": "ACCEPT NETBINDCHANGE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Win32-services/docs/System-Win32-SystemServices-Services.html#v:ACCEPT_NETBINDCHANGE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe service can reread its startup parameters without being stopped\r\n   and restarted. This control code allows the service to receive\r\n   \u003ccode\u003ePARAMCHANGE\u003c/code\u003e notifications.\r\n\u003c/p\u003e",
          "module": "System.Win32.SystemServices.Services",
          "name": "ACCEPT_PARAMCHANGE",
          "package": "Win32-services",
          "signature": "ACCEPT_PARAMCHANGE",
          "source": "src/System-Win32-SystemServices-Services-SERVICE_ACCEPT.html#SERVICE_ACCEPT",
          "type": "function"
        },
        "index": {
          "description": "The service can reread its startup parameters without being stopped and restarted This control code allows the service to receive PARAMCHANGE notifications",
          "hierarchy": "System Win32 SystemServices Services",
          "module": "System.Win32.SystemServices.Services",
          "name": "ACCEPT_PARAMCHANGE",
          "package": "Win32-services",
          "partial": "ACCEPT PARAMCHANGE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Win32-services/docs/System-Win32-SystemServices-Services.html#v:ACCEPT_PARAMCHANGE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe service can be paused and continued. This control code allows the\r\n   service to receive \u003ccode\u003ePAUSE\u003c/code\u003e and \u003ccode\u003eCONTINUE\u003c/code\u003e notifications.\r\n\u003c/p\u003e",
          "module": "System.Win32.SystemServices.Services",
          "name": "ACCEPT_PAUSE_CONTINUE",
          "package": "Win32-services",
          "signature": "ACCEPT_PAUSE_CONTINUE",
          "source": "src/System-Win32-SystemServices-Services-SERVICE_ACCEPT.html#SERVICE_ACCEPT",
          "type": "function"
        },
        "index": {
          "description": "The service can be paused and continued This control code allows the service to receive PAUSE and CONTINUE notifications",
          "hierarchy": "System Win32 SystemServices Services",
          "module": "System.Win32.SystemServices.Services",
          "name": "ACCEPT_PAUSE_CONTINUE",
          "package": "Win32-services",
          "partial": "ACCEPT PAUSE CONTINUE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Win32-services/docs/System-Win32-SystemServices-Services.html#v:ACCEPT_PAUSE_CONTINUE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMSDN documentation says that this function is not supported on\r\n   Windows Server 2003 or Windows XP/2000. The support status on other\r\n   versions is unknown to me.\r\n\u003c/p\u003e\u003cp\u003eThe service can perform preshutdown tasks. This control code enables\r\n   the service to receive \u003ccode\u003ePRESHUTDOWN\u003c/code\u003e notifications.\r\n   Note that only the system can send it.\r\n\u003c/p\u003e",
          "module": "System.Win32.SystemServices.Services",
          "name": "ACCEPT_PRESHUTDOWN",
          "package": "Win32-services",
          "signature": "ACCEPT_PRESHUTDOWN",
          "source": "src/System-Win32-SystemServices-Services-SERVICE_ACCEPT.html#SERVICE_ACCEPT",
          "type": "function"
        },
        "index": {
          "description": "MSDN documentation says that this function is not supported on Windows Server or Windows XP The support status on other versions is unknown to me The service can perform preshutdown tasks This control code enables the service to receive PRESHUTDOWN notifications Note that only the system can send it",
          "hierarchy": "System Win32 SystemServices Services",
          "module": "System.Win32.SystemServices.Services",
          "name": "ACCEPT_PRESHUTDOWN",
          "package": "Win32-services",
          "partial": "ACCEPT PRESHUTDOWN",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Win32-services/docs/System-Win32-SystemServices-Services.html#v:ACCEPT_PRESHUTDOWN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe service is notified when system shutdown occurs. This control\r\n   code allows the service to receive \u003ccode\u003eSHUTDOWN\u003c/code\u003e notifications. Note\r\n   that only the system can send it.\r\n\u003c/p\u003e",
          "module": "System.Win32.SystemServices.Services",
          "name": "ACCEPT_SHUTDOWN",
          "package": "Win32-services",
          "signature": "ACCEPT_SHUTDOWN",
          "source": "src/System-Win32-SystemServices-Services-SERVICE_ACCEPT.html#SERVICE_ACCEPT",
          "type": "function"
        },
        "index": {
          "description": "The service is notified when system shutdown occurs This control code allows the service to receive SHUTDOWN notifications Note that only the system can send it",
          "hierarchy": "System Win32 SystemServices Services",
          "module": "System.Win32.SystemServices.Services",
          "name": "ACCEPT_SHUTDOWN",
          "package": "Win32-services",
          "partial": "ACCEPT SHUTDOWN",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Win32-services/docs/System-Win32-SystemServices-Services.html#v:ACCEPT_SHUTDOWN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe service can be stopped. This control code allows the service to\r\n   receive \u003ccode\u003eSTOP\u003c/code\u003e notifications.\r\n\u003c/p\u003e",
          "module": "System.Win32.SystemServices.Services",
          "name": "ACCEPT_STOP",
          "package": "Win32-services",
          "signature": "ACCEPT_STOP",
          "source": "src/System-Win32-SystemServices-Services-SERVICE_ACCEPT.html#SERVICE_ACCEPT",
          "type": "function"
        },
        "index": {
          "description": "The service can be stopped This control code allows the service to receive STOP notifications",
          "hierarchy": "System Win32 SystemServices Services",
          "module": "System.Win32.SystemServices.Services",
          "name": "ACCEPT_STOP",
          "package": "Win32-services",
          "partial": "ACCEPT STOP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Win32-services/docs/System-Win32-SystemServices-Services.html#v:ACCEPT_STOP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Win32.SystemServices.Services",
          "name": "CONTINUE",
          "package": "Win32-services",
          "signature": "CONTINUE",
          "source": "src/System-Win32-SystemServices-Services-SERVICE_CONTROL.html#SERVICE_CONTROL",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Win32 SystemServices Services",
          "module": "System.Win32.SystemServices.Services",
          "name": "CONTINUE",
          "package": "Win32-services",
          "partial": "CONTINUE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Win32-services/docs/System-Win32-SystemServices-Services.html#v:CONTINUE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Win32.SystemServices.Services",
          "name": "CONTINUE_PENDING",
          "package": "Win32-services",
          "signature": "CONTINUE_PENDING",
          "source": "src/System-Win32-SystemServices-Services-SERVICE_STATE.html#SERVICE_STATE",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Win32 SystemServices Services",
          "module": "System.Win32.SystemServices.Services",
          "name": "CONTINUE_PENDING",
          "package": "Win32-services",
          "partial": "CONTINUE PENDING",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Win32-services/docs/System-Win32-SystemServices-Services.html#v:CONTINUE_PENDING"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe service is a file system driver.\r\n\u003c/p\u003e",
          "module": "System.Win32.SystemServices.Services",
          "name": "FILE_SYSTEM_DRIVER",
          "package": "Win32-services",
          "signature": "FILE_SYSTEM_DRIVER",
          "source": "src/System-Win32-SystemServices-Services-SERVICE_TYPE.html#SERVICE_TYPE",
          "type": "function"
        },
        "index": {
          "description": "The service is file system driver",
          "hierarchy": "System Win32 SystemServices Services",
          "module": "System.Win32.SystemServices.Services",
          "name": "FILE_SYSTEM_DRIVER",
          "package": "Win32-services",
          "partial": "FILE SYSTEM DRIVER",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Win32-services/docs/System-Win32-SystemServices-Services.html#v:FILE_SYSTEM_DRIVER"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Win32.SystemServices.Services",
          "name": "INTERROGATE",
          "package": "Win32-services",
          "signature": "INTERROGATE",
          "source": "src/System-Win32-SystemServices-Services-SERVICE_CONTROL.html#SERVICE_CONTROL",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Win32 SystemServices Services",
          "module": "System.Win32.SystemServices.Services",
          "name": "INTERROGATE",
          "package": "Win32-services",
          "partial": "INTERROGATE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Win32-services/docs/System-Win32-SystemServices-Services.html#v:INTERROGATE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe service is a device driver.\r\n\u003c/p\u003e",
          "module": "System.Win32.SystemServices.Services",
          "name": "KERNEL_DRIVER",
          "package": "Win32-services",
          "signature": "KERNEL_DRIVER",
          "source": "src/System-Win32-SystemServices-Services-SERVICE_TYPE.html#SERVICE_TYPE",
          "type": "function"
        },
        "index": {
          "description": "The service is device driver",
          "hierarchy": "System Win32 SystemServices Services",
          "module": "System.Win32.SystemServices.Services",
          "name": "KERNEL_DRIVER",
          "package": "Win32-services",
          "partial": "KERNEL DRIVER",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Win32-services/docs/System-Win32-SystemServices-Services.html#v:KERNEL_DRIVER"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Win32.SystemServices.Services",
          "name": "NETBINDADD",
          "package": "Win32-services",
          "signature": "NETBINDADD",
          "source": "src/System-Win32-SystemServices-Services-SERVICE_CONTROL.html#SERVICE_CONTROL",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Win32 SystemServices Services",
          "module": "System.Win32.SystemServices.Services",
          "name": "NETBINDADD",
          "package": "Win32-services",
          "partial": "NETBINDADD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Win32-services/docs/System-Win32-SystemServices-Services.html#v:NETBINDADD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Win32.SystemServices.Services",
          "name": "NETBINDDISABLE",
          "package": "Win32-services",
          "signature": "NETBINDDISABLE",
          "source": "src/System-Win32-SystemServices-Services-SERVICE_CONTROL.html#SERVICE_CONTROL",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Win32 SystemServices Services",
          "module": "System.Win32.SystemServices.Services",
          "name": "NETBINDDISABLE",
          "package": "Win32-services",
          "partial": "NETBINDDISABLE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Win32-services/docs/System-Win32-SystemServices-Services.html#v:NETBINDDISABLE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Win32.SystemServices.Services",
          "name": "NETBINDENABLE",
          "package": "Win32-services",
          "signature": "NETBINDENABLE",
          "source": "src/System-Win32-SystemServices-Services-SERVICE_CONTROL.html#SERVICE_CONTROL",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Win32 SystemServices Services",
          "module": "System.Win32.SystemServices.Services",
          "name": "NETBINDENABLE",
          "package": "Win32-services",
          "partial": "NETBINDENABLE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Win32-services/docs/System-Win32-SystemServices-Services.html#v:NETBINDENABLE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Win32.SystemServices.Services",
          "name": "NETBINDREMOVE",
          "package": "Win32-services",
          "signature": "NETBINDREMOVE",
          "source": "src/System-Win32-SystemServices-Services-SERVICE_CONTROL.html#SERVICE_CONTROL",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Win32 SystemServices Services",
          "module": "System.Win32.SystemServices.Services",
          "name": "NETBINDREMOVE",
          "package": "Win32-services",
          "partial": "NETBINDREMOVE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Win32-services/docs/System-Win32-SystemServices-Services.html#v:NETBINDREMOVE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Win32.SystemServices.Services",
          "name": "PARAMCHANGE",
          "package": "Win32-services",
          "signature": "PARAMCHANGE",
          "source": "src/System-Win32-SystemServices-Services-SERVICE_CONTROL.html#SERVICE_CONTROL",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Win32 SystemServices Services",
          "module": "System.Win32.SystemServices.Services",
          "name": "PARAMCHANGE",
          "package": "Win32-services",
          "partial": "PARAMCHANGE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Win32-services/docs/System-Win32-SystemServices-Services.html#v:PARAMCHANGE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Win32.SystemServices.Services",
          "name": "PAUSE",
          "package": "Win32-services",
          "signature": "PAUSE",
          "source": "src/System-Win32-SystemServices-Services-SERVICE_CONTROL.html#SERVICE_CONTROL",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Win32 SystemServices Services",
          "module": "System.Win32.SystemServices.Services",
          "name": "PAUSE",
          "package": "Win32-services",
          "partial": "PAUSE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Win32-services/docs/System-Win32-SystemServices-Services.html#v:PAUSE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Win32.SystemServices.Services",
          "name": "PAUSED",
          "package": "Win32-services",
          "signature": "PAUSED",
          "source": "src/System-Win32-SystemServices-Services-SERVICE_STATE.html#SERVICE_STATE",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Win32 SystemServices Services",
          "module": "System.Win32.SystemServices.Services",
          "name": "PAUSED",
          "package": "Win32-services",
          "partial": "PAUSED",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Win32-services/docs/System-Win32-SystemServices-Services.html#v:PAUSED"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Win32.SystemServices.Services",
          "name": "PAUSE_PENDING",
          "package": "Win32-services",
          "signature": "PAUSE_PENDING",
          "source": "src/System-Win32-SystemServices-Services-SERVICE_STATE.html#SERVICE_STATE",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Win32 SystemServices Services",
          "module": "System.Win32.SystemServices.Services",
          "name": "PAUSE_PENDING",
          "package": "Win32-services",
          "partial": "PAUSE PENDING",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Win32-services/docs/System-Win32-SystemServices-Services.html#v:PAUSE_PENDING"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Win32.SystemServices.Services",
          "name": "PRESHUTDOWN",
          "package": "Win32-services",
          "signature": "PRESHUTDOWN",
          "source": "src/System-Win32-SystemServices-Services-SERVICE_CONTROL.html#SERVICE_CONTROL",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Win32 SystemServices Services",
          "module": "System.Win32.SystemServices.Services",
          "name": "PRESHUTDOWN",
          "package": "Win32-services",
          "partial": "PRESHUTDOWN",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Win32-services/docs/System-Win32-SystemServices-Services.html#v:PRESHUTDOWN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Win32.SystemServices.Services",
          "name": "RUNNING",
          "package": "Win32-services",
          "signature": "RUNNING",
          "source": "src/System-Win32-SystemServices-Services-SERVICE_STATE.html#SERVICE_STATE",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Win32 SystemServices Services",
          "module": "System.Win32.SystemServices.Services",
          "name": "RUNNING",
          "package": "Win32-services",
          "partial": "RUNNING",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Win32-services/docs/System-Win32-SystemServices-Services.html#v:RUNNING"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDo no write your own services of this type. Windows Vista and above\r\n   prevent service processes from directly interacting with users.\r\n\u003c/p\u003e\u003cp\u003eA \u003ccode\u003e\u003ca\u003eSERVICE_INTERACTIVE_PROCESS\u003c/a\u003e\u003c/code\u003e is either a \u003ccode\u003e\u003ca\u003eWIN32_OWN_PROCESS\u003c/a\u003e\u003c/code\u003e or a\r\n   \u003ccode\u003e\u003ca\u003eWIN32_SHARE_PROCESS\u003c/a\u003e\u003c/code\u003e running in the context of the LocalSystem\r\n   account which is allowed to directly interact with users.\r\n\u003c/p\u003e",
          "module": "System.Win32.SystemServices.Services",
          "name": "SERVICE_INTERACTIVE_PROCESS",
          "package": "Win32-services",
          "signature": "SERVICE_INTERACTIVE_PROCESS",
          "source": "src/System-Win32-SystemServices-Services-SERVICE_TYPE.html#SERVICE_TYPE",
          "type": "function"
        },
        "index": {
          "description": "Do no write your own services of this type Windows Vista and above prevent service processes from directly interacting with users SERVICE INTERACTIVE PROCESS is either WIN32 OWN PROCESS or WIN32 SHARE PROCESS running in the context of the LocalSystem account which is allowed to directly interact with users",
          "hierarchy": "System Win32 SystemServices Services",
          "module": "System.Win32.SystemServices.Services",
          "name": "SERVICE_INTERACTIVE_PROCESS",
          "package": "Win32-services",
          "partial": "SERVICE INTERACTIVE PROCESS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Win32-services/docs/System-Win32-SystemServices-Services.html#v:SERVICE_INTERACTIVE_PROCESS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Win32.SystemServices.Services",
          "name": "SERVICE_STATUS",
          "package": "Win32-services",
          "signature": "SERVICE_STATUS",
          "source": "src/System-Win32-SystemServices-Services-SERVICE_STATUS.html#SERVICE_STATUS",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Win32 SystemServices Services",
          "module": "System.Win32.SystemServices.Services",
          "name": "SERVICE_STATUS",
          "package": "Win32-services",
          "partial": "SERVICE STATUS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Win32-services/docs/System-Win32-SystemServices-Services.html#v:SERVICE_STATUS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Win32.SystemServices.Services",
          "name": "SHUTDOWN",
          "package": "Win32-services",
          "signature": "SHUTDOWN",
          "source": "src/System-Win32-SystemServices-Services-SERVICE_CONTROL.html#SERVICE_CONTROL",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Win32 SystemServices Services",
          "module": "System.Win32.SystemServices.Services",
          "name": "SHUTDOWN",
          "package": "Win32-services",
          "partial": "SHUTDOWN",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Win32-services/docs/System-Win32-SystemServices-Services.html#v:SHUTDOWN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Win32.SystemServices.Services",
          "name": "START_PENDING",
          "package": "Win32-services",
          "signature": "START_PENDING",
          "source": "src/System-Win32-SystemServices-Services-SERVICE_STATE.html#SERVICE_STATE",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Win32 SystemServices Services",
          "module": "System.Win32.SystemServices.Services",
          "name": "START_PENDING",
          "package": "Win32-services",
          "partial": "START PENDING",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Win32-services/docs/System-Win32-SystemServices-Services.html#v:START_PENDING"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Win32.SystemServices.Services",
          "name": "STOP",
          "package": "Win32-services",
          "signature": "STOP",
          "source": "src/System-Win32-SystemServices-Services-SERVICE_CONTROL.html#SERVICE_CONTROL",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Win32 SystemServices Services",
          "module": "System.Win32.SystemServices.Services",
          "name": "STOP",
          "package": "Win32-services",
          "partial": "STOP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Win32-services/docs/System-Win32-SystemServices-Services.html#v:STOP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Win32.SystemServices.Services",
          "name": "STOPPED",
          "package": "Win32-services",
          "signature": "STOPPED",
          "source": "src/System-Win32-SystemServices-Services-SERVICE_STATE.html#SERVICE_STATE",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Win32 SystemServices Services",
          "module": "System.Win32.SystemServices.Services",
          "name": "STOPPED",
          "package": "Win32-services",
          "partial": "STOPPED",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Win32-services/docs/System-Win32-SystemServices-Services.html#v:STOPPED"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Win32.SystemServices.Services",
          "name": "STOP_PENDING",
          "package": "Win32-services",
          "signature": "STOP_PENDING",
          "source": "src/System-Win32-SystemServices-Services-SERVICE_STATE.html#SERVICE_STATE",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Win32 SystemServices Services",
          "module": "System.Win32.SystemServices.Services",
          "name": "STOP_PENDING",
          "package": "Win32-services",
          "partial": "STOP PENDING",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Win32-services/docs/System-Win32-SystemServices-Services.html#v:STOP_PENDING"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe service runs in its own process.\r\n\u003c/p\u003e",
          "module": "System.Win32.SystemServices.Services",
          "name": "WIN32_OWN_PROCESS",
          "package": "Win32-services",
          "signature": "WIN32_OWN_PROCESS",
          "source": "src/System-Win32-SystemServices-Services-SERVICE_TYPE.html#SERVICE_TYPE",
          "type": "function"
        },
        "index": {
          "description": "The service runs in its own process",
          "hierarchy": "System Win32 SystemServices Services",
          "module": "System.Win32.SystemServices.Services",
          "name": "WIN32_OWN_PROCESS",
          "package": "Win32-services",
          "partial": "WIN OWN PROCESS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Win32-services/docs/System-Win32-SystemServices-Services.html#v:WIN32_OWN_PROCESS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe service shares a process with other services.\r\n\u003c/p\u003e",
          "module": "System.Win32.SystemServices.Services",
          "name": "WIN32_SHARE_PROCESS",
          "package": "Win32-services",
          "signature": "WIN32_SHARE_PROCESS",
          "source": "src/System-Win32-SystemServices-Services-SERVICE_TYPE.html#SERVICE_TYPE",
          "type": "function"
        },
        "index": {
          "description": "The service shares process with other services",
          "hierarchy": "System Win32 SystemServices Services",
          "module": "System.Win32.SystemServices.Services",
          "name": "WIN32_SHARE_PROCESS",
          "package": "Win32-services",
          "partial": "WIN SHARE PROCESS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Win32-services/docs/System-Win32-SystemServices-Services.html#v:WIN32_SHARE_PROCESS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe check-point value the service increments periodically to report\r\n   its progress during a lengthy start, stop, pause, or continue\r\n   operation. For example, the service should increment this value as it\r\n   completes each step of its initialization when it is starting up. The\r\n   user interface program that invoked the operation on the service uses\r\n   this value to track the progress of the service during a lengthy\r\n   operation. This value is not valid and should be zero when the\r\n   service does not have a start, stop, pause, or continue operation\r\n   pending.\r\n\u003c/p\u003e",
          "module": "System.Win32.SystemServices.Services",
          "name": "checkPoint",
          "package": "Win32-services",
          "signature": "DWORD",
          "source": "src/System-Win32-SystemServices-Services-SERVICE_STATUS.html#SERVICE_STATUS",
          "type": "function"
        },
        "index": {
          "description": "The check-point value the service increments periodically to report its progress during lengthy start stop pause or continue operation For example the service should increment this value as it completes each step of its initialization when it is starting up The user interface program that invoked the operation on the service uses this value to track the progress of the service during lengthy operation This value is not valid and should be zero when the service does not have start stop pause or continue operation pending",
          "hierarchy": "System Win32 SystemServices Services",
          "module": "System.Win32.SystemServices.Services",
          "name": "checkPoint",
          "package": "Win32-services",
          "partial": "Point",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Win32-services/docs/System-Win32-SystemServices-Services.html#v:checkPoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003e\u003ca\u003eSERVICE_ACCEPT\u003c/a\u003e\u003c/code\u003e for details on this field.\r\n\u003c/p\u003e",
          "module": "System.Win32.SystemServices.Services",
          "name": "controlsAccepted",
          "package": "Win32-services",
          "signature": "[SERVICE_ACCEPT]",
          "source": "src/System-Win32-SystemServices-Services-SERVICE_STATUS.html#SERVICE_STATUS",
          "type": "function"
        },
        "index": {
          "description": "See SERVICE ACCEPT for details on this field",
          "hierarchy": "System Win32 SystemServices Services",
          "module": "System.Win32.SystemServices.Services",
          "name": "controlsAccepted",
          "normalized": "[SERVICE_ACCEPT]",
          "package": "Win32-services",
          "partial": "Accepted",
          "signature": "[SERVICE_ACCEPT]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Win32-services/docs/System-Win32-SystemServices-Services.html#v:controlsAccepted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe current state of the service.\r\n\u003c/p\u003e",
          "module": "System.Win32.SystemServices.Services",
          "name": "currentState",
          "package": "Win32-services",
          "signature": "SERVICE_STATE",
          "source": "src/System-Win32-SystemServices-Services-SERVICE_STATUS.html#SERVICE_STATUS",
          "type": "function"
        },
        "index": {
          "description": "The current state of the service",
          "hierarchy": "System Win32 SystemServices Services",
          "module": "System.Win32.SystemServices.Services",
          "name": "currentState",
          "package": "Win32-services",
          "partial": "State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Win32-services/docs/System-Win32-SystemServices-Services.html#v:currentState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Win32.SystemServices.Services",
          "name": "eRROR_SERVICE_SPECIFIC_ERROR",
          "package": "Win32-services",
          "signature": "ErrCode",
          "source": "src/System-Win32-SystemServices-Services-SERVICE_STATE.html#eRROR_SERVICE_SPECIFIC_ERROR",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Win32 SystemServices Services",
          "module": "System.Win32.SystemServices.Services",
          "name": "eRROR_SERVICE_SPECIFIC_ERROR",
          "package": "Win32-services",
          "partial": "RROR SERVICE SPECIFIC ERROR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Win32-services/docs/System-Win32-SystemServices-Services.html#v:eRROR_SERVICE_SPECIFIC_ERROR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Win32.SystemServices.Services",
          "name": "nO_ERROR",
          "package": "Win32-services",
          "signature": "ErrCode",
          "source": "src/System-Win32-SystemServices-Services-SERVICE_STATE.html#nO_ERROR",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Win32 SystemServices Services",
          "module": "System.Win32.SystemServices.Services",
          "name": "nO_ERROR",
          "package": "Win32-services",
          "partial": "ERROR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Win32-services/docs/System-Win32-SystemServices-Services.html#v:nO_ERROR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieves the current status of the specified service.\r\n\u003c/p\u003e",
          "module": "System.Win32.SystemServices.Services",
          "name": "queryServiceStatus",
          "package": "Win32-services",
          "signature": "HANDLE-\u003e IO SERVICE_STATUS",
          "type": "function"
        },
        "index": {
          "description": "Retrieves the current status of the specified service",
          "hierarchy": "System Win32 SystemServices Services",
          "module": "System.Win32.SystemServices.Services",
          "name": "queryServiceStatus",
          "normalized": "HANDLE-\u003eIO SERVICE_STATUS",
          "package": "Win32-services",
          "partial": "Service Status",
          "signature": "HANDLE-\u003eIO SERVICE_STATUS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Win32-services/docs/System-Win32-SystemServices-Services.html#v:queryServiceStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA service-specific error code that the service returns when an error\r\n occurs while the service is starting or stopping. This value is\r\n ignored unless the \u003ccode\u003e\u003ca\u003ewin32ExitCode\u003c/a\u003e\u003c/code\u003e member is set to\r\n \u003ccode\u003e\u003ca\u003eeRROR_SERVICE_SPECIFIC_ERROR\u003c/a\u003e\u003c/code\u003e.\r\n\u003c/p\u003e\u003cp\u003eThis binding does not support service-specific error codes.\r\n\u003c/p\u003e",
          "module": "System.Win32.SystemServices.Services",
          "name": "serviceSpecificExitCode",
          "package": "Win32-services",
          "signature": "DWORD",
          "source": "src/System-Win32-SystemServices-Services-SERVICE_STATUS.html#SERVICE_STATUS",
          "type": "function"
        },
        "index": {
          "description": "service-specific error code that the service returns when an error occurs while the service is starting or stopping This value is ignored unless the win32ExitCode member is set to eRROR SERVICE SPECIFIC ERROR This binding does not support service-specific error codes",
          "hierarchy": "System Win32 SystemServices Services",
          "module": "System.Win32.SystemServices.Services",
          "name": "serviceSpecificExitCode",
          "package": "Win32-services",
          "partial": "Specific Exit Code",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Win32-services/docs/System-Win32-SystemServices-Services.html#v:serviceSpecificExitCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of service. This binding only supports the WIN32_OWN_PROCESS\r\n type.\r\n\u003c/p\u003e",
          "module": "System.Win32.SystemServices.Services",
          "name": "serviceType",
          "package": "Win32-services",
          "signature": "SERVICE_TYPE",
          "source": "src/System-Win32-SystemServices-Services-SERVICE_STATUS.html#SERVICE_STATUS",
          "type": "function"
        },
        "index": {
          "description": "The type of service This binding only supports the WIN32 OWN PROCESS type",
          "hierarchy": "System Win32 SystemServices Services",
          "module": "System.Win32.SystemServices.Services",
          "name": "serviceType",
          "package": "Win32-services",
          "partial": "Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Win32-services/docs/System-Win32-SystemServices-Services.html#v:serviceType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUpdates the service control manager's status information for the calling\r\n service.\r\n\u003c/p\u003e",
          "module": "System.Win32.SystemServices.Services",
          "name": "setServiceStatus",
          "package": "Win32-services",
          "signature": "HANDLE-\u003e SERVICE_STATUS-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Updates the service control manager status information for the calling service",
          "hierarchy": "System Win32 SystemServices Services",
          "module": "System.Win32.SystemServices.Services",
          "name": "setServiceStatus",
          "normalized": "HANDLE-\u003eSERVICE_STATUS-\u003eIO()",
          "package": "Win32-services",
          "partial": "Service Status",
          "signature": "HANDLE-\u003eSERVICE_STATUS-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Win32-services/docs/System-Win32-SystemServices-Services.html#v:setServiceStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRegister a callback function to initialize the service, which will be\r\n called by the operating system immediately. startServiceCtrlDispatcher\r\n will block until the provided callback function returns.\r\n\u003c/p\u003e\u003cp\u003eMSDN documentation: Connects the main thread of a service process to the\r\n service control manager, which causes the thread to be the service control\r\n dispatcher thread for the calling process.\r\n\u003c/p\u003e",
          "module": "System.Win32.SystemServices.Services",
          "name": "startServiceCtrlDispatcher",
          "package": "Win32-services",
          "signature": "String-\u003e DWORD-\u003e HandlerFunction-\u003e ServiceMainFunction-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Register callback function to initialize the service which will be called by the operating system immediately startServiceCtrlDispatcher will block until the provided callback function returns MSDN documentation Connects the main thread of service process to the service control manager which causes the thread to be the service control dispatcher thread for the calling process",
          "hierarchy": "System Win32 SystemServices Services",
          "module": "System.Win32.SystemServices.Services",
          "name": "startServiceCtrlDispatcher",
          "normalized": "String-\u003eDWORD-\u003eHandlerFunction-\u003eServiceMainFunction-\u003eIO()",
          "package": "Win32-services",
          "partial": "Service Ctrl Dispatcher",
          "signature": "String-\u003eDWORD-\u003eHandlerFunction-\u003eServiceMainFunction-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Win32-services/docs/System-Win32-SystemServices-Services.html#v:startServiceCtrlDispatcher"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe estimated time required for a pending start, stop, pause, or\r\n   continue operation, in milliseconds. Before the specified amount of\r\n   time has elapsed, the service should make its next call to the\r\n   SetServiceStatus function with either an incremented dwCheckPoint\r\n   value or a change in \u003ccode\u003e\u003ca\u003ecurrentState\u003c/a\u003e\u003c/code\u003e. If the amount of time specified\r\n   by \u003ccode\u003e\u003ca\u003ewaitHint\u003c/a\u003e\u003c/code\u003e passes, and \u003ccode\u003e\u003ca\u003echeckPoint\u003c/a\u003e\u003c/code\u003e has not been incremented or\r\n   \u003ccode\u003e\u003ca\u003ecurrentState\u003c/a\u003e\u003c/code\u003e has not changed, the service control manager or\r\n   service control program can assume that an error has occurred and the\r\n   service should be stopped. However, if the service shares a process\r\n   with other services, the service control manager cannot terminate the\r\n   service application because it would have to terminate the other\r\n   services sharing the process as well.\r\n\u003c/p\u003e",
          "module": "System.Win32.SystemServices.Services",
          "name": "waitHint",
          "package": "Win32-services",
          "signature": "DWORD",
          "source": "src/System-Win32-SystemServices-Services-SERVICE_STATUS.html#SERVICE_STATUS",
          "type": "function"
        },
        "index": {
          "description": "The estimated time required for pending start stop pause or continue operation in milliseconds Before the specified amount of time has elapsed the service should make its next call to the SetServiceStatus function with either an incremented dwCheckPoint value or change in currentState If the amount of time specified by waitHint passes and checkPoint has not been incremented or currentState has not changed the service control manager or service control program can assume that an error has occurred and the service should be stopped However if the service shares process with other services the service control manager cannot terminate the service application because it would have to terminate the other services sharing the process as well",
          "hierarchy": "System Win32 SystemServices Services",
          "module": "System.Win32.SystemServices.Services",
          "name": "waitHint",
          "package": "Win32-services",
          "partial": "Hint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Win32-services/docs/System-Win32-SystemServices-Services.html#v:waitHint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe error code the service uses to report an error that occurs when\r\n   it is starting or stopping. To return an error code specific to the\r\n   service, the service must set this value to\r\n   \u003ccode\u003e\u003ca\u003eeRROR_SERVICE_SPECIFIC_ERROR\u003c/a\u003e\u003c/code\u003e to indicate that the\r\n   \u003ccode\u003e\u003ca\u003eserviceSpecificExitCode\u003c/a\u003e\u003c/code\u003e member contains the error code. The service\r\n   should set this value to \u003ccode\u003e\u003ca\u003enO_ERROR\u003c/a\u003e\u003c/code\u003e when it is running and on normal\r\n   termination.\r\n\u003c/p\u003e",
          "module": "System.Win32.SystemServices.Services",
          "name": "win32ExitCode",
          "package": "Win32-services",
          "signature": "DWORD",
          "source": "src/System-Win32-SystemServices-Services-SERVICE_STATUS.html#SERVICE_STATUS",
          "type": "function"
        },
        "index": {
          "description": "The error code the service uses to report an error that occurs when it is starting or stopping To return an error code specific to the service the service must set this value to eRROR SERVICE SPECIFIC ERROR to indicate that the serviceSpecificExitCode member contains the error code The service should set this value to nO ERROR when it is running and on normal termination",
          "hierarchy": "System Win32 SystemServices Services",
          "module": "System.Win32.SystemServices.Services",
          "name": "win32ExitCode",
          "package": "Win32-services",
          "partial": "Exit Code",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Win32-services/docs/System-Win32-SystemServices-Services.html#v:win32ExitCode"
      }
    }
  ]
]