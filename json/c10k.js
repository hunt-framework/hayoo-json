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
        "word": "c10k"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eNetwork server library to handle over 10,000 connections. Since\n  GHC 6.12 or earlier uses select(), it cannot handle connections over\n  1,024. This library uses the \"prefork\" technique to get over the\n  barrier. Each process handles \u003ccode\u003e\u003ca\u003ethreadNumberPerProcess\u003c/a\u003e\u003c/code\u003e connections.\n  \u003ccode\u003e\u003ca\u003epreforkProcessNumber\u003c/a\u003e\u003c/code\u003e child server processes are preforked. So, this\n  server can handle \u003ccode\u003e\u003ca\u003epreforkProcessNumber\u003c/a\u003e\u003c/code\u003e * \u003ccode\u003e\u003ca\u003ethreadNumberPerProcess\u003c/a\u003e\u003c/code\u003e\n  connections.\n\u003c/p\u003e\u003cp\u003eGHC 7 supports kqueue or epoll() but it is difficult\n  to balance over multi-core. So, this library can be used to\n  make a process for each core and to set limitation of the number\n  to accept connections.\n\u003c/p\u003e\u003cp\u003eTo stop all server, send SIGTERM to the parent process.\n  (e.g. \u003ccode\u003ekill `cat PIDFILE`\u003c/code\u003e where the PID file name is\n  specified by \u003ccode\u003e\u003ca\u003epidFile\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.C10kServer",
          "name": "C10kServer",
          "package": "c10k",
          "source": "src/Network-C10kServer.html",
          "type": "module"
        },
        "index": {
          "description": "Network server library to handle over connections Since GHC or earlier uses select it cannot handle connections over This library uses the prefork technique to get over the barrier Each process handles threadNumberPerProcess connections preforkProcessNumber child server processes are preforked So this server can handle preforkProcessNumber threadNumberPerProcess connections GHC supports kqueue or epoll but it is difficult to balance over multi-core So this library can be used to make process for each core and to set limitation of the number to accept connections To stop all server send SIGTERM to the parent process e.g kill cat PIDFILE where the PID file name is specified by pidFile",
          "hierarchy": "Network C10kServer",
          "module": "Network.C10kServer",
          "name": "C10kServer",
          "package": "c10k",
          "partial": "Server",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/c10k/docs/Network-C10kServer.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of configuration given to \u003ccode\u003e\u003ca\u003erunC10kServer\u003c/a\u003e\u003c/code\u003e as the second\n  argument.\n\u003c/p\u003e",
          "module": "Network.C10kServer",
          "name": "C10kConfig",
          "package": "c10k",
          "source": "src/Network-C10kServer.html#C10kConfig",
          "type": "data"
        },
        "index": {
          "description": "The type of configuration given to runC10kServer as the second argument",
          "hierarchy": "Network C10kServer",
          "module": "Network.C10kServer",
          "name": "C10kConfig",
          "package": "c10k",
          "partial": "Config",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/c10k/docs/Network-C10kServer.html#t:C10kConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of the first argument of \u003ccode\u003e\u003ca\u003erunC10kServer\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.C10kServer",
          "name": "C10kServer",
          "package": "c10k",
          "source": "src/Network-C10kServer.html#C10kServer",
          "type": "type"
        },
        "index": {
          "description": "The type of the first argument of runC10kServer",
          "hierarchy": "Network C10kServer",
          "module": "Network.C10kServer",
          "name": "C10kServer",
          "package": "c10k",
          "partial": "Server",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/c10k/docs/Network-C10kServer.html#t:C10kServer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of the first argument of \u003ccode\u003e\u003ca\u003erunC10kServerH\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.C10kServer",
          "name": "C10kServerH",
          "package": "c10k",
          "source": "src/Network-C10kServer.html#C10kServerH",
          "type": "type"
        },
        "index": {
          "description": "The type of the first argument of runC10kServerH",
          "hierarchy": "Network C10kServer",
          "module": "Network.C10kServer",
          "name": "C10kServerH",
          "package": "c10k",
          "partial": "Server",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/c10k/docs/Network-C10kServer.html#t:C10kServerH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.C10kServer",
          "name": "C10kConfig",
          "package": "c10k",
          "signature": "C10kConfig",
          "source": "src/Network-C10kServer.html#C10kConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network C10kServer",
          "module": "Network.C10kServer",
          "name": "C10kConfig",
          "package": "c10k",
          "partial": "Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/c10k/docs/Network-C10kServer.html#v:C10kConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA hook called when the server exits due to an error.\n\u003c/p\u003e",
          "module": "Network.C10kServer",
          "name": "exitHook",
          "package": "c10k",
          "signature": "String -\u003e IO ()",
          "source": "src/Network-C10kServer.html#C10kConfig",
          "type": "function"
        },
        "index": {
          "description": "hook called when the server exits due to an error",
          "hierarchy": "Network C10kServer",
          "module": "Network.C10kServer",
          "name": "exitHook",
          "normalized": "String-\u003eIO()",
          "package": "c10k",
          "partial": "Hook",
          "signature": "String-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/c10k/docs/Network-C10kServer.html#v:exitHook"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA group name. When the program linked with this library runs\n   in the root privilege, set group to this value. Otherwise,\n   this value is ignored.\n\u003c/p\u003e",
          "module": "Network.C10kServer",
          "name": "group",
          "package": "c10k",
          "signature": "String",
          "source": "src/Network-C10kServer.html#C10kConfig",
          "type": "function"
        },
        "index": {
          "description": "group name When the program linked with this library runs in the root privilege set group to this value Otherwise this value is ignored",
          "hierarchy": "Network C10kServer",
          "module": "Network.C10kServer",
          "name": "group",
          "package": "c10k",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/c10k/docs/Network-C10kServer.html#v:group"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA hook called initialization time. This is used topically to\n   initialize syslog.\n\u003c/p\u003e",
          "module": "Network.C10kServer",
          "name": "initHook",
          "package": "c10k",
          "signature": "IO ()",
          "source": "src/Network-C10kServer.html#C10kConfig",
          "type": "function"
        },
        "index": {
          "description": "hook called initialization time This is used topically to initialize syslog",
          "hierarchy": "Network C10kServer",
          "module": "Network.C10kServer",
          "name": "initHook",
          "normalized": "IO()",
          "package": "c10k",
          "partial": "Hook",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/c10k/docs/Network-C10kServer.html#v:initHook"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA numeric IP address. e.g. \"127.0.0.1\"\n\u003c/p\u003e",
          "module": "Network.C10kServer",
          "name": "ipAddr",
          "package": "c10k",
          "signature": "Maybe HostName",
          "source": "src/Network-C10kServer.html#C10kConfig",
          "type": "function"
        },
        "index": {
          "description": "numeric IP address e.g",
          "hierarchy": "Network C10kServer",
          "module": "Network.C10kServer",
          "name": "ipAddr",
          "package": "c10k",
          "partial": "Addr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/c10k/docs/Network-C10kServer.html#v:ipAddr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA hook to be called in the parent process when all child\n   process are preforked successfully.\n\u003c/p\u003e",
          "module": "Network.C10kServer",
          "name": "parentStartedHook",
          "package": "c10k",
          "signature": "IO ()",
          "source": "src/Network-C10kServer.html#C10kConfig",
          "type": "function"
        },
        "index": {
          "description": "hook to be called in the parent process when all child process are preforked successfully",
          "hierarchy": "Network C10kServer",
          "module": "Network.C10kServer",
          "name": "parentStartedHook",
          "normalized": "IO()",
          "package": "c10k",
          "partial": "Started Hook",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/c10k/docs/Network-C10kServer.html#v:parentStartedHook"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA file where the process ID of the parent process is written.\n\u003c/p\u003e",
          "module": "Network.C10kServer",
          "name": "pidFile",
          "package": "c10k",
          "signature": "FilePath",
          "source": "src/Network-C10kServer.html#C10kConfig",
          "type": "function"
        },
        "index": {
          "description": "file where the process ID of the parent process is written",
          "hierarchy": "Network C10kServer",
          "module": "Network.C10kServer",
          "name": "pidFile",
          "package": "c10k",
          "partial": "File",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/c10k/docs/Network-C10kServer.html#v:pidFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA port name. e.g. \"http\" or \"80\"\n\u003c/p\u003e",
          "module": "Network.C10kServer",
          "name": "portName",
          "package": "c10k",
          "signature": "ServiceName",
          "source": "src/Network-C10kServer.html#C10kConfig",
          "type": "function"
        },
        "index": {
          "description": "port name e.g http or",
          "hierarchy": "Network C10kServer",
          "module": "Network.C10kServer",
          "name": "portName",
          "package": "c10k",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/c10k/docs/Network-C10kServer.html#v:portName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe number of child process.\n\u003c/p\u003e",
          "module": "Network.C10kServer",
          "name": "preforkProcessNumber",
          "package": "c10k",
          "signature": "Int",
          "source": "src/Network-C10kServer.html#C10kConfig",
          "type": "function"
        },
        "index": {
          "description": "The number of child process",
          "hierarchy": "Network C10kServer",
          "module": "Network.C10kServer",
          "name": "preforkProcessNumber",
          "package": "c10k",
          "partial": "Process Number",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/c10k/docs/Network-C10kServer.html#v:preforkProcessNumber"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun \u003ccode\u003e\u003ca\u003eC10kServer\u003c/a\u003e\u003c/code\u003e with \u003ccode\u003e\u003ca\u003eC10kConfig\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.C10kServer",
          "name": "runC10kServer",
          "package": "c10k",
          "signature": "C10kServer -\u003e C10kConfig -\u003e IO ()",
          "source": "src/Network-C10kServer.html#runC10kServer",
          "type": "function"
        },
        "index": {
          "description": "Run C10kServer with C10kConfig",
          "hierarchy": "Network C10kServer",
          "module": "Network.C10kServer",
          "name": "runC10kServer",
          "normalized": "C a-\u003eC b-\u003eIO()",
          "package": "c10k",
          "partial": "Server",
          "signature": "C kServer-\u003eC kConfig-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/c10k/docs/Network-C10kServer.html#v:runC10kServer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun \u003ccode\u003e\u003ca\u003eC10kServerH\u003c/a\u003e\u003c/code\u003e with \u003ccode\u003e\u003ca\u003eC10kConfig\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.C10kServer",
          "name": "runC10kServerH",
          "package": "c10k",
          "signature": "C10kServerH -\u003e C10kConfig -\u003e IO ()",
          "source": "src/Network-C10kServer.html#runC10kServerH",
          "type": "function"
        },
        "index": {
          "description": "Run C10kServerH with C10kConfig",
          "hierarchy": "Network C10kServer",
          "module": "Network.C10kServer",
          "name": "runC10kServerH",
          "normalized": "C a-\u003eC b-\u003eIO()",
          "package": "c10k",
          "partial": "Server",
          "signature": "C kServerH-\u003eC kConfig-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/c10k/docs/Network-C10kServer.html#v:runC10kServerH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe time in seconds that a main thread of each child process\n   to sleep when the number of connection reaches\n   \u003ccode\u003e\u003ca\u003ethreadNumberPerProcess\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.C10kServer",
          "name": "sleepTimer",
          "package": "c10k",
          "signature": "Int",
          "source": "src/Network-C10kServer.html#C10kConfig",
          "type": "function"
        },
        "index": {
          "description": "The time in seconds that main thread of each child process to sleep when the number of connection reaches threadNumberPerProcess",
          "hierarchy": "Network C10kServer",
          "module": "Network.C10kServer",
          "name": "sleepTimer",
          "package": "c10k",
          "partial": "Timer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/c10k/docs/Network-C10kServer.html#v:sleepTimer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA hook to be called when each child process is started\n   successfully.\n\u003c/p\u003e",
          "module": "Network.C10kServer",
          "name": "startedHook",
          "package": "c10k",
          "signature": "IO ()",
          "source": "src/Network-C10kServer.html#C10kConfig",
          "type": "function"
        },
        "index": {
          "description": "hook to be called when each child process is started successfully",
          "hierarchy": "Network C10kServer",
          "module": "Network.C10kServer",
          "name": "startedHook",
          "normalized": "IO()",
          "package": "c10k",
          "partial": "Hook",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/c10k/docs/Network-C10kServer.html#v:startedHook"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe number of thread which a process handle.\n\u003c/p\u003e",
          "module": "Network.C10kServer",
          "name": "threadNumberPerProcess",
          "package": "c10k",
          "signature": "Int",
          "source": "src/Network-C10kServer.html#C10kConfig",
          "type": "function"
        },
        "index": {
          "description": "The number of thread which process handle",
          "hierarchy": "Network C10kServer",
          "module": "Network.C10kServer",
          "name": "threadNumberPerProcess",
          "package": "c10k",
          "partial": "Number Per Process",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/c10k/docs/Network-C10kServer.html#v:threadNumberPerProcess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA user name. When the program linked with this library runs\n   in the root privilege, set user to this value. Otherwise,\n   this value is ignored.\n\u003c/p\u003e",
          "module": "Network.C10kServer",
          "name": "user",
          "package": "c10k",
          "signature": "String",
          "source": "src/Network-C10kServer.html#C10kConfig",
          "type": "function"
        },
        "index": {
          "description": "user name When the program linked with this library runs in the root privilege set user to this value Otherwise this value is ignored",
          "hierarchy": "Network C10kServer",
          "module": "Network.C10kServer",
          "name": "user",
          "package": "c10k",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/c10k/docs/Network-C10kServer.html#v:user"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eYet another accept() to tell TCP information.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.TCPInfo",
          "name": "TCPInfo",
          "package": "c10k",
          "source": "src/Network-TCPInfo.html",
          "type": "module"
        },
        "index": {
          "description": "Yet another accept to tell TCP information",
          "hierarchy": "Network TCPInfo",
          "module": "Network.TCPInfo",
          "name": "TCPInfo",
          "package": "c10k",
          "partial": "TCPInfo",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/c10k/docs/Network-TCPInfo.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA Type to carry TCP information.\n\u003c/p\u003e",
          "module": "Network.TCPInfo",
          "name": "TCPInfo",
          "package": "c10k",
          "source": "src/Network-TCPInfo.html#TCPInfo",
          "type": "data"
        },
        "index": {
          "description": "Type to carry TCP information",
          "hierarchy": "Network TCPInfo",
          "module": "Network.TCPInfo",
          "name": "TCPInfo",
          "package": "c10k",
          "partial": "TCPInfo",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/c10k/docs/Network-TCPInfo.html#t:TCPInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TCPInfo",
          "name": "TCPInfo",
          "package": "c10k",
          "signature": "TCPInfo",
          "source": "src/Network-TCPInfo.html#TCPInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network TCPInfo",
          "module": "Network.TCPInfo",
          "name": "TCPInfo",
          "package": "c10k",
          "partial": "TCPInfo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/c10k/docs/Network-TCPInfo.html#v:TCPInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eYet another accept() to return both \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eTCPInfo\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.TCPInfo",
          "name": "accept",
          "package": "c10k",
          "signature": "Socket -\u003e IO (Handle, TCPInfo)",
          "source": "src/Network-TCPInfo.html#accept",
          "type": "function"
        },
        "index": {
          "description": "Yet another accept to return both Handle and TCPInfo",
          "hierarchy": "Network TCPInfo",
          "module": "Network.TCPInfo",
          "name": "accept",
          "normalized": "Socket-\u003eIO(Handle,TCPInfo)",
          "package": "c10k",
          "signature": "Socket-\u003eIO(Handle,TCPInfo)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/c10k/docs/Network-TCPInfo.html#v:accept"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLocal IP address\n\u003c/p\u003e",
          "module": "Network.TCPInfo",
          "name": "myAddr",
          "package": "c10k",
          "signature": "HostName",
          "source": "src/Network-TCPInfo.html#TCPInfo",
          "type": "function"
        },
        "index": {
          "description": "Local IP address",
          "hierarchy": "Network TCPInfo",
          "module": "Network.TCPInfo",
          "name": "myAddr",
          "package": "c10k",
          "partial": "Addr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/c10k/docs/Network-TCPInfo.html#v:myAddr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLocal port number\n\u003c/p\u003e",
          "module": "Network.TCPInfo",
          "name": "myPort",
          "package": "c10k",
          "signature": "ServiceName",
          "source": "src/Network-TCPInfo.html#TCPInfo",
          "type": "function"
        },
        "index": {
          "description": "Local port number",
          "hierarchy": "Network TCPInfo",
          "module": "Network.TCPInfo",
          "name": "myPort",
          "package": "c10k",
          "partial": "Port",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/c10k/docs/Network-TCPInfo.html#v:myPort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemote IP address\n\u003c/p\u003e",
          "module": "Network.TCPInfo",
          "name": "peerAddr",
          "package": "c10k",
          "signature": "HostName",
          "source": "src/Network-TCPInfo.html#TCPInfo",
          "type": "function"
        },
        "index": {
          "description": "Remote IP address",
          "hierarchy": "Network TCPInfo",
          "module": "Network.TCPInfo",
          "name": "peerAddr",
          "package": "c10k",
          "partial": "Addr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/c10k/docs/Network-TCPInfo.html#v:peerAddr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemote port number\n\u003c/p\u003e",
          "module": "Network.TCPInfo",
          "name": "peerPort",
          "package": "c10k",
          "signature": "ServiceName",
          "source": "src/Network-TCPInfo.html#TCPInfo",
          "type": "function"
        },
        "index": {
          "description": "Remote port number",
          "hierarchy": "Network TCPInfo",
          "module": "Network.TCPInfo",
          "name": "peerPort",
          "package": "c10k",
          "partial": "Port",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/c10k/docs/Network-TCPInfo.html#v:peerPort"
      }
    }
  ]
]