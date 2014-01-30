[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/c10k/docs/Network-C10kServer.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eNetwork server library to handle over 10,000 connections. Since\n  GHC 6.12 or earlier uses select(), it cannot handle connections over\n  1,024. This library uses the \"prefork\" technique to get over the\n  barrier. Each process handles \u003ccode\u003e\u003ca\u003ethreadNumberPerProcess\u003c/a\u003e\u003c/code\u003e connections.\n  \u003ccode\u003e\u003ca\u003epreforkProcessNumber\u003c/a\u003e\u003c/code\u003e child server processes are preforked. So, this\n  server can handle \u003ccode\u003e\u003ca\u003epreforkProcessNumber\u003c/a\u003e\u003c/code\u003e * \u003ccode\u003e\u003ca\u003ethreadNumberPerProcess\u003c/a\u003e\u003c/code\u003e\n  connections.\n\u003c/p\u003e\u003cp\u003eGHC 7 supports kqueue or epoll() but it is difficult\n  to balance over multi-core. So, this library can be used to\n  make a process for each core and to set limitation of the number\n  to accept connections.\n\u003c/p\u003e\u003cp\u003eTo stop all server, send SIGTERM to the parent process.\n  (e.g. \u003ccode\u003ekill `cat PIDFILE`\u003c/code\u003e where the PID file name is\n  specified by \u003ccode\u003e\u003ca\u003epidFile\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.C10kServer",
        "fct-package": "c10k",
        "fct-signature": "module",
        "fct-source": "src/Network-C10kServer.html",
        "fct-type": "module",
        "title": "C10kServer"
      },
      "index": {
        "description": "Network server library to handle over connections Since GHC or earlier uses select it cannot handle connections over This library uses the prefork technique to get over the barrier Each process handles threadNumberPerProcess connections preforkProcessNumber child server processes are preforked So this server can handle preforkProcessNumber threadNumberPerProcess connections GHC supports kqueue or epoll but it is difficult to balance over multi-core So this library can be used to make process for each core and to set limitation of the number to accept connections To stop all server send SIGTERM to the parent process e.g kill cat PIDFILE where the PID file name is specified by pidFile",
        "hierarchy": "Network C10kServer",
        "module": "Network.C10kServer",
        "name": "C10kServer",
        "normalized": "",
        "package": "c10k",
        "partial": "Server",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/c10k/docs/Network-C10kServer.html#t:C10kConfig",
      "description": {
        "fct-descr": "\u003cp\u003eThe type of configuration given to \u003ccode\u003e\u003ca\u003erunC10kServer\u003c/a\u003e\u003c/code\u003e as the second\n  argument.\n\u003c/p\u003e",
        "fct-module": "Network.C10kServer",
        "fct-package": "c10k",
        "fct-signature": "data",
        "fct-source": "src/Network-C10kServer.html#C10kConfig",
        "fct-type": "data",
        "title": "C10kConfig"
      },
      "index": {
        "description": "The type of configuration given to runC10kServer as the second argument",
        "hierarchy": "Network C10kServer",
        "module": "Network.C10kServer",
        "name": "C10kConfig",
        "normalized": "",
        "package": "c10k",
        "partial": "Config",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/c10k/docs/Network-C10kServer.html#t:C10kServer",
      "description": {
        "fct-descr": "\u003cp\u003eThe type of the first argument of \u003ccode\u003e\u003ca\u003erunC10kServer\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.C10kServer",
        "fct-package": "c10k",
        "fct-signature": "type",
        "fct-source": "src/Network-C10kServer.html#C10kServer",
        "fct-type": "type",
        "title": "C10kServer"
      },
      "index": {
        "description": "The type of the first argument of runC10kServer",
        "hierarchy": "Network C10kServer",
        "module": "Network.C10kServer",
        "name": "C10kServer",
        "normalized": "",
        "package": "c10k",
        "partial": "Server",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/c10k/docs/Network-C10kServer.html#t:C10kServerH",
      "description": {
        "fct-descr": "\u003cp\u003eThe type of the first argument of \u003ccode\u003e\u003ca\u003erunC10kServerH\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.C10kServer",
        "fct-package": "c10k",
        "fct-signature": "type",
        "fct-source": "src/Network-C10kServer.html#C10kServerH",
        "fct-type": "type",
        "title": "C10kServerH"
      },
      "index": {
        "description": "The type of the first argument of runC10kServerH",
        "hierarchy": "Network C10kServer",
        "module": "Network.C10kServer",
        "name": "C10kServerH",
        "normalized": "",
        "package": "c10k",
        "partial": "Server",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/c10k/docs/Network-C10kServer.html#v:C10kConfig",
      "description": {
        "fct-module": "Network.C10kServer",
        "fct-package": "c10k",
        "fct-signature": "C10kConfig",
        "fct-source": "src/Network-C10kServer.html#C10kConfig",
        "fct-type": "function",
        "title": "C10kConfig"
      },
      "index": {
        "description": "",
        "hierarchy": "Network C10kServer",
        "module": "Network.C10kServer",
        "name": "C10kConfig",
        "normalized": "",
        "package": "c10k",
        "partial": "Config",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/c10k/docs/Network-C10kServer.html#v:exitHook",
      "description": {
        "fct-descr": "\u003cp\u003eA hook called when the server exits due to an error.\n\u003c/p\u003e",
        "fct-module": "Network.C10kServer",
        "fct-package": "c10k",
        "fct-signature": "String -\u003e IO ()",
        "fct-source": "src/Network-C10kServer.html#C10kConfig",
        "fct-type": "function",
        "title": "exitHook"
      },
      "index": {
        "description": "hook called when the server exits due to an error",
        "hierarchy": "Network C10kServer",
        "module": "Network.C10kServer",
        "name": "exitHook",
        "normalized": "String-\u003eIO()",
        "package": "c10k",
        "partial": "Hook",
        "signature": "String-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/c10k/docs/Network-C10kServer.html#v:group",
      "description": {
        "fct-descr": "\u003cp\u003eA group name. When the program linked with this library runs\n   in the root privilege, set group to this value. Otherwise,\n   this value is ignored.\n\u003c/p\u003e",
        "fct-module": "Network.C10kServer",
        "fct-package": "c10k",
        "fct-signature": "String",
        "fct-source": "src/Network-C10kServer.html#C10kConfig",
        "fct-type": "function",
        "title": "group"
      },
      "index": {
        "description": "group name When the program linked with this library runs in the root privilege set group to this value Otherwise this value is ignored",
        "hierarchy": "Network C10kServer",
        "module": "Network.C10kServer",
        "name": "group",
        "normalized": "",
        "package": "c10k",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/c10k/docs/Network-C10kServer.html#v:initHook",
      "description": {
        "fct-descr": "\u003cp\u003eA hook called initialization time. This is used topically to\n   initialize syslog.\n\u003c/p\u003e",
        "fct-module": "Network.C10kServer",
        "fct-package": "c10k",
        "fct-signature": "IO ()",
        "fct-source": "src/Network-C10kServer.html#C10kConfig",
        "fct-type": "function",
        "title": "initHook"
      },
      "index": {
        "description": "hook called initialization time This is used topically to initialize syslog",
        "hierarchy": "Network C10kServer",
        "module": "Network.C10kServer",
        "name": "initHook",
        "normalized": "IO()",
        "package": "c10k",
        "partial": "Hook",
        "signature": "IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/c10k/docs/Network-C10kServer.html#v:ipAddr",
      "description": {
        "fct-descr": "\u003cp\u003eA numeric IP address. e.g. \"127.0.0.1\"\n\u003c/p\u003e",
        "fct-module": "Network.C10kServer",
        "fct-package": "c10k",
        "fct-signature": "Maybe HostName",
        "fct-source": "src/Network-C10kServer.html#C10kConfig",
        "fct-type": "function",
        "title": "ipAddr"
      },
      "index": {
        "description": "numeric IP address e.g",
        "hierarchy": "Network C10kServer",
        "module": "Network.C10kServer",
        "name": "ipAddr",
        "normalized": "",
        "package": "c10k",
        "partial": "Addr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/c10k/docs/Network-C10kServer.html#v:parentStartedHook",
      "description": {
        "fct-descr": "\u003cp\u003eA hook to be called in the parent process when all child\n   process are preforked successfully.\n\u003c/p\u003e",
        "fct-module": "Network.C10kServer",
        "fct-package": "c10k",
        "fct-signature": "IO ()",
        "fct-source": "src/Network-C10kServer.html#C10kConfig",
        "fct-type": "function",
        "title": "parentStartedHook"
      },
      "index": {
        "description": "hook to be called in the parent process when all child process are preforked successfully",
        "hierarchy": "Network C10kServer",
        "module": "Network.C10kServer",
        "name": "parentStartedHook",
        "normalized": "IO()",
        "package": "c10k",
        "partial": "Started Hook",
        "signature": "IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/c10k/docs/Network-C10kServer.html#v:pidFile",
      "description": {
        "fct-descr": "\u003cp\u003eA file where the process ID of the parent process is written.\n\u003c/p\u003e",
        "fct-module": "Network.C10kServer",
        "fct-package": "c10k",
        "fct-signature": "FilePath",
        "fct-source": "src/Network-C10kServer.html#C10kConfig",
        "fct-type": "function",
        "title": "pidFile"
      },
      "index": {
        "description": "file where the process ID of the parent process is written",
        "hierarchy": "Network C10kServer",
        "module": "Network.C10kServer",
        "name": "pidFile",
        "normalized": "",
        "package": "c10k",
        "partial": "File",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/c10k/docs/Network-C10kServer.html#v:portName",
      "description": {
        "fct-descr": "\u003cp\u003eA port name. e.g. \"http\" or \"80\"\n\u003c/p\u003e",
        "fct-module": "Network.C10kServer",
        "fct-package": "c10k",
        "fct-signature": "ServiceName",
        "fct-source": "src/Network-C10kServer.html#C10kConfig",
        "fct-type": "function",
        "title": "portName"
      },
      "index": {
        "description": "port name e.g http or",
        "hierarchy": "Network C10kServer",
        "module": "Network.C10kServer",
        "name": "portName",
        "normalized": "",
        "package": "c10k",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/c10k/docs/Network-C10kServer.html#v:preforkProcessNumber",
      "description": {
        "fct-descr": "\u003cp\u003eThe number of child process.\n\u003c/p\u003e",
        "fct-module": "Network.C10kServer",
        "fct-package": "c10k",
        "fct-signature": "Int",
        "fct-source": "src/Network-C10kServer.html#C10kConfig",
        "fct-type": "function",
        "title": "preforkProcessNumber"
      },
      "index": {
        "description": "The number of child process",
        "hierarchy": "Network C10kServer",
        "module": "Network.C10kServer",
        "name": "preforkProcessNumber",
        "normalized": "",
        "package": "c10k",
        "partial": "Process Number",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/c10k/docs/Network-C10kServer.html#v:runC10kServer",
      "description": {
        "fct-descr": "\u003cp\u003eRun \u003ccode\u003e\u003ca\u003eC10kServer\u003c/a\u003e\u003c/code\u003e with \u003ccode\u003e\u003ca\u003eC10kConfig\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.C10kServer",
        "fct-package": "c10k",
        "fct-signature": "C10kServer -\u003e C10kConfig -\u003e IO ()",
        "fct-source": "src/Network-C10kServer.html#runC10kServer",
        "fct-type": "function",
        "title": "runC10kServer"
      },
      "index": {
        "description": "Run C10kServer with C10kConfig",
        "hierarchy": "Network C10kServer",
        "module": "Network.C10kServer",
        "name": "runC10kServer",
        "normalized": "C a-\u003eC b-\u003eIO()",
        "package": "c10k",
        "partial": "Server",
        "signature": "C kServer-\u003eC kConfig-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/c10k/docs/Network-C10kServer.html#v:runC10kServerH",
      "description": {
        "fct-descr": "\u003cp\u003eRun \u003ccode\u003e\u003ca\u003eC10kServerH\u003c/a\u003e\u003c/code\u003e with \u003ccode\u003e\u003ca\u003eC10kConfig\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.C10kServer",
        "fct-package": "c10k",
        "fct-signature": "C10kServerH -\u003e C10kConfig -\u003e IO ()",
        "fct-source": "src/Network-C10kServer.html#runC10kServerH",
        "fct-type": "function",
        "title": "runC10kServerH"
      },
      "index": {
        "description": "Run C10kServerH with C10kConfig",
        "hierarchy": "Network C10kServer",
        "module": "Network.C10kServer",
        "name": "runC10kServerH",
        "normalized": "C a-\u003eC b-\u003eIO()",
        "package": "c10k",
        "partial": "Server",
        "signature": "C kServerH-\u003eC kConfig-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/c10k/docs/Network-C10kServer.html#v:sleepTimer",
      "description": {
        "fct-descr": "\u003cp\u003eThe time in seconds that a main thread of each child process\n   to sleep when the number of connection reaches\n   \u003ccode\u003e\u003ca\u003ethreadNumberPerProcess\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.C10kServer",
        "fct-package": "c10k",
        "fct-signature": "Int",
        "fct-source": "src/Network-C10kServer.html#C10kConfig",
        "fct-type": "function",
        "title": "sleepTimer"
      },
      "index": {
        "description": "The time in seconds that main thread of each child process to sleep when the number of connection reaches threadNumberPerProcess",
        "hierarchy": "Network C10kServer",
        "module": "Network.C10kServer",
        "name": "sleepTimer",
        "normalized": "",
        "package": "c10k",
        "partial": "Timer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/c10k/docs/Network-C10kServer.html#v:startedHook",
      "description": {
        "fct-descr": "\u003cp\u003eA hook to be called when each child process is started\n   successfully.\n\u003c/p\u003e",
        "fct-module": "Network.C10kServer",
        "fct-package": "c10k",
        "fct-signature": "IO ()",
        "fct-source": "src/Network-C10kServer.html#C10kConfig",
        "fct-type": "function",
        "title": "startedHook"
      },
      "index": {
        "description": "hook to be called when each child process is started successfully",
        "hierarchy": "Network C10kServer",
        "module": "Network.C10kServer",
        "name": "startedHook",
        "normalized": "IO()",
        "package": "c10k",
        "partial": "Hook",
        "signature": "IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/c10k/docs/Network-C10kServer.html#v:threadNumberPerProcess",
      "description": {
        "fct-descr": "\u003cp\u003eThe number of thread which a process handle.\n\u003c/p\u003e",
        "fct-module": "Network.C10kServer",
        "fct-package": "c10k",
        "fct-signature": "Int",
        "fct-source": "src/Network-C10kServer.html#C10kConfig",
        "fct-type": "function",
        "title": "threadNumberPerProcess"
      },
      "index": {
        "description": "The number of thread which process handle",
        "hierarchy": "Network C10kServer",
        "module": "Network.C10kServer",
        "name": "threadNumberPerProcess",
        "normalized": "",
        "package": "c10k",
        "partial": "Number Per Process",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/c10k/docs/Network-C10kServer.html#v:user",
      "description": {
        "fct-descr": "\u003cp\u003eA user name. When the program linked with this library runs\n   in the root privilege, set user to this value. Otherwise,\n   this value is ignored.\n\u003c/p\u003e",
        "fct-module": "Network.C10kServer",
        "fct-package": "c10k",
        "fct-signature": "String",
        "fct-source": "src/Network-C10kServer.html#C10kConfig",
        "fct-type": "function",
        "title": "user"
      },
      "index": {
        "description": "user name When the program linked with this library runs in the root privilege set user to this value Otherwise this value is ignored",
        "hierarchy": "Network C10kServer",
        "module": "Network.C10kServer",
        "name": "user",
        "normalized": "",
        "package": "c10k",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/c10k/docs/Network-TCPInfo.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eYet another accept() to tell TCP information.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.TCPInfo",
        "fct-package": "c10k",
        "fct-signature": "module",
        "fct-source": "src/Network-TCPInfo.html",
        "fct-type": "module",
        "title": "TCPInfo"
      },
      "index": {
        "description": "Yet another accept to tell TCP information",
        "hierarchy": "Network TCPInfo",
        "module": "Network.TCPInfo",
        "name": "TCPInfo",
        "normalized": "",
        "package": "c10k",
        "partial": "TCPInfo",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/c10k/docs/Network-TCPInfo.html#t:TCPInfo",
      "description": {
        "fct-descr": "\u003cp\u003eA Type to carry TCP information.\n\u003c/p\u003e",
        "fct-module": "Network.TCPInfo",
        "fct-package": "c10k",
        "fct-signature": "data",
        "fct-source": "src/Network-TCPInfo.html#TCPInfo",
        "fct-type": "data",
        "title": "TCPInfo"
      },
      "index": {
        "description": "Type to carry TCP information",
        "hierarchy": "Network TCPInfo",
        "module": "Network.TCPInfo",
        "name": "TCPInfo",
        "normalized": "",
        "package": "c10k",
        "partial": "TCPInfo",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/c10k/docs/Network-TCPInfo.html#v:TCPInfo",
      "description": {
        "fct-module": "Network.TCPInfo",
        "fct-package": "c10k",
        "fct-signature": "TCPInfo",
        "fct-source": "src/Network-TCPInfo.html#TCPInfo",
        "fct-type": "function",
        "title": "TCPInfo"
      },
      "index": {
        "description": "",
        "hierarchy": "Network TCPInfo",
        "module": "Network.TCPInfo",
        "name": "TCPInfo",
        "normalized": "",
        "package": "c10k",
        "partial": "TCPInfo",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/c10k/docs/Network-TCPInfo.html#v:accept",
      "description": {
        "fct-descr": "\u003cp\u003eYet another accept() to return both \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eTCPInfo\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.TCPInfo",
        "fct-package": "c10k",
        "fct-signature": "Socket -\u003e IO (Handle, TCPInfo)",
        "fct-source": "src/Network-TCPInfo.html#accept",
        "fct-type": "function",
        "title": "accept"
      },
      "index": {
        "description": "Yet another accept to return both Handle and TCPInfo",
        "hierarchy": "Network TCPInfo",
        "module": "Network.TCPInfo",
        "name": "accept",
        "normalized": "Socket-\u003eIO(Handle,TCPInfo)",
        "package": "c10k",
        "partial": "",
        "signature": "Socket-\u003eIO(Handle,TCPInfo)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/c10k/docs/Network-TCPInfo.html#v:myAddr",
      "description": {
        "fct-descr": "\u003cp\u003eLocal IP address\n\u003c/p\u003e",
        "fct-module": "Network.TCPInfo",
        "fct-package": "c10k",
        "fct-signature": "HostName",
        "fct-source": "src/Network-TCPInfo.html#TCPInfo",
        "fct-type": "function",
        "title": "myAddr"
      },
      "index": {
        "description": "Local IP address",
        "hierarchy": "Network TCPInfo",
        "module": "Network.TCPInfo",
        "name": "myAddr",
        "normalized": "",
        "package": "c10k",
        "partial": "Addr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/c10k/docs/Network-TCPInfo.html#v:myPort",
      "description": {
        "fct-descr": "\u003cp\u003eLocal port number\n\u003c/p\u003e",
        "fct-module": "Network.TCPInfo",
        "fct-package": "c10k",
        "fct-signature": "ServiceName",
        "fct-source": "src/Network-TCPInfo.html#TCPInfo",
        "fct-type": "function",
        "title": "myPort"
      },
      "index": {
        "description": "Local port number",
        "hierarchy": "Network TCPInfo",
        "module": "Network.TCPInfo",
        "name": "myPort",
        "normalized": "",
        "package": "c10k",
        "partial": "Port",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/c10k/docs/Network-TCPInfo.html#v:peerAddr",
      "description": {
        "fct-descr": "\u003cp\u003eRemote IP address\n\u003c/p\u003e",
        "fct-module": "Network.TCPInfo",
        "fct-package": "c10k",
        "fct-signature": "HostName",
        "fct-source": "src/Network-TCPInfo.html#TCPInfo",
        "fct-type": "function",
        "title": "peerAddr"
      },
      "index": {
        "description": "Remote IP address",
        "hierarchy": "Network TCPInfo",
        "module": "Network.TCPInfo",
        "name": "peerAddr",
        "normalized": "",
        "package": "c10k",
        "partial": "Addr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/c10k/docs/Network-TCPInfo.html#v:peerPort",
      "description": {
        "fct-descr": "\u003cp\u003eRemote port number\n\u003c/p\u003e",
        "fct-module": "Network.TCPInfo",
        "fct-package": "c10k",
        "fct-signature": "ServiceName",
        "fct-source": "src/Network-TCPInfo.html#TCPInfo",
        "fct-type": "function",
        "title": "peerPort"
      },
      "index": {
        "description": "Remote port number",
        "hierarchy": "Network TCPInfo",
        "module": "Network.TCPInfo",
        "name": "peerPort",
        "normalized": "",
        "package": "c10k",
        "partial": "Port",
        "signature": ""
      }
    }
  }
]