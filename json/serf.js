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
        "word": "serf"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides basic support for implementing Serf event handler programs\n using Haskell. Serf calls event handlers by executing the specified handler program\n with information relevant to the handler set in environment variables.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Serf.Handler",
          "name": "Handler",
          "package": "serf",
          "source": "src/System-Serf-Handler.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides basic support for implementing Serf event handler programs using Haskell Serf calls event handlers by executing the specified handler program with information relevant to the handler set in environment variables",
          "hierarchy": "System Serf Handler",
          "module": "System.Serf.Handler",
          "name": "Handler",
          "package": "serf",
          "partial": "Handler",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/serf/docs/System-Serf-Handler.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA union of all possible event types that Serf supports.\n\u003c/p\u003e",
          "module": "System.Serf.Handler",
          "name": "Event",
          "package": "serf",
          "source": "src/System-Serf-Handler.html#Event",
          "type": "data"
        },
        "index": {
          "description": "union of all possible event types that Serf supports",
          "hierarchy": "System Serf Handler",
          "module": "System.Serf.Handler",
          "name": "Event",
          "package": "serf",
          "partial": "Event",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/serf/docs/System-Serf-Handler.html#t:Event"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll data set in the environment for the event handler. This is the primary way that Serf\n communicates relevant information to the executing handler.\n\u003c/p\u003e",
          "module": "System.Serf.Handler",
          "name": "SerfEnv",
          "package": "serf",
          "source": "src/System-Serf-Handler.html#SerfEnv",
          "type": "data"
        },
        "index": {
          "description": "All data set in the environment for the event handler This is the primary way that Serf communicates relevant information to the executing handler",
          "hierarchy": "System Serf Handler",
          "module": "System.Serf.Handler",
          "name": "SerfEnv",
          "package": "serf",
          "partial": "Serf Env",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/serf/docs/System-Serf-Handler.html#t:SerfEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn event indicating that members have failed out of the cluster.\n\u003c/p\u003e",
          "module": "System.Serf.Handler",
          "name": "MemberFailed",
          "package": "serf",
          "signature": "MemberFailed",
          "source": "src/System-Serf-Handler.html#Event",
          "type": "function"
        },
        "index": {
          "description": "An event indicating that members have failed out of the cluster",
          "hierarchy": "System Serf Handler",
          "module": "System.Serf.Handler",
          "name": "MemberFailed",
          "package": "serf",
          "partial": "Member Failed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/serf/docs/System-Serf-Handler.html#v:MemberFailed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn event indicating that members have joined the cluster.\n\u003c/p\u003e",
          "module": "System.Serf.Handler",
          "name": "MemberJoin",
          "package": "serf",
          "signature": "MemberJoin",
          "source": "src/System-Serf-Handler.html#Event",
          "type": "function"
        },
        "index": {
          "description": "An event indicating that members have joined the cluster",
          "hierarchy": "System Serf Handler",
          "module": "System.Serf.Handler",
          "name": "MemberJoin",
          "package": "serf",
          "partial": "Member Join",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/serf/docs/System-Serf-Handler.html#v:MemberJoin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn event indicating that members have left the cluster.\n\u003c/p\u003e",
          "module": "System.Serf.Handler",
          "name": "MemberLeave",
          "package": "serf",
          "signature": "MemberLeave",
          "source": "src/System-Serf-Handler.html#Event",
          "type": "function"
        },
        "index": {
          "description": "An event indicating that members have left the cluster",
          "hierarchy": "System Serf Handler",
          "module": "System.Serf.Handler",
          "name": "MemberLeave",
          "package": "serf",
          "partial": "Member Leave",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/serf/docs/System-Serf-Handler.html#v:MemberLeave"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Serf.Handler",
          "name": "SerfEnv",
          "package": "serf",
          "signature": "SerfEnv",
          "source": "src/System-Serf-Handler.html#SerfEnv",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Serf Handler",
          "module": "System.Serf.Handler",
          "name": "SerfEnv",
          "package": "serf",
          "partial": "Serf Env",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/serf/docs/System-Serf-Handler.html#v:SerfEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA custom event triggered by an agent in the cluster.\n\u003c/p\u003e",
          "module": "System.Serf.Handler",
          "name": "User",
          "package": "serf",
          "signature": "User String",
          "source": "src/System-Serf-Handler.html#Event",
          "type": "function"
        },
        "index": {
          "description": "custom event triggered by an agent in the cluster",
          "hierarchy": "System Serf Handler",
          "module": "System.Serf.Handler",
          "name": "User",
          "package": "serf",
          "partial": "User",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/serf/docs/System-Serf-Handler.html#v:User"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe event that caused the handling program to be executed.\n\u003c/p\u003e",
          "module": "System.Serf.Handler",
          "name": "event",
          "package": "serf",
          "signature": "Event",
          "source": "src/System-Serf-Handler.html#SerfEnv",
          "type": "function"
        },
        "index": {
          "description": "The event that caused the handling program to be executed",
          "hierarchy": "System Serf Handler",
          "module": "System.Serf.Handler",
          "name": "event",
          "package": "serf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/serf/docs/System-Serf-Handler.html#v:event"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve all environment info set by Serf, returning Nothing if any Serf environment data\n is missing.\n\u003c/p\u003e",
          "module": "System.Serf.Handler",
          "name": "getSerfEnv",
          "package": "serf",
          "signature": "IO (Maybe SerfEnv)",
          "source": "src/System-Serf-Handler.html#getSerfEnv",
          "type": "function"
        },
        "index": {
          "description": "Retrieve all environment info set by Serf returning Nothing if any Serf environment data is missing",
          "hierarchy": "System Serf Handler",
          "module": "System.Serf.Handler",
          "name": "getSerfEnv",
          "package": "serf",
          "partial": "Serf Env",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/serf/docs/System-Serf-Handler.html#v:getSerfEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe name of the node that is executing the event handler.\n\u003c/p\u003e",
          "module": "System.Serf.Handler",
          "name": "selfName",
          "package": "serf",
          "signature": "String",
          "source": "src/System-Serf-Handler.html#SerfEnv",
          "type": "function"
        },
        "index": {
          "description": "The name of the node that is executing the event handler",
          "hierarchy": "System Serf Handler",
          "module": "System.Serf.Handler",
          "name": "selfName",
          "package": "serf",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/serf/docs/System-Serf-Handler.html#v:selfName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe role of the node that is executing the event handler.\n\u003c/p\u003e",
          "module": "System.Serf.Handler",
          "name": "selfRole",
          "package": "serf",
          "signature": "String",
          "source": "src/System-Serf-Handler.html#SerfEnv",
          "type": "function"
        },
        "index": {
          "description": "The role of the node that is executing the event handler",
          "hierarchy": "System Serf Handler",
          "module": "System.Serf.Handler",
          "name": "selfRole",
          "package": "serf",
          "partial": "Role",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/serf/docs/System-Serf-Handler.html#v:selfRole"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\"Serf is a service discovery and orchestration tool that is decentralized, highly available, and fault tolerant. Serf runs on every major platform: Linux, Mac OS X, and Windows. It is extremely lightweight: it uses 5 to 10 MB of resident memory and primarily communicates using infrequent UDP messages.\"\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ewww.serfdom.io/intro\u003c/a\u003e \n\u003c/p\u003e\u003cp\u003eThis module provides facilities for interacting with a serf agent running on a machine. This module aims to expose all functionality\n provided by the serf command-line tool in a programmatic way.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Serf",
          "name": "Serf",
          "package": "serf",
          "source": "src/System-Serf.html",
          "type": "module"
        },
        "index": {
          "description": "Serf is service discovery and orchestration tool that is decentralized highly available and fault tolerant Serf runs on every major platform Linux Mac OS and Windows It is extremely lightweight it uses to MB of resident memory and primarily communicates using infrequent UDP messages www.serfdom.io intro This module provides facilities for interacting with serf agent running on machine This module aims to expose all functionality provided by the serf command-line tool in programmatic way",
          "hierarchy": "System Serf",
          "module": "System.Serf",
          "name": "Serf",
          "package": "serf",
          "partial": "Serf",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/serf/docs/System-Serf.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOptions specific to joining a cluster\n\u003c/p\u003e",
          "module": "System.Serf",
          "name": "JoinOptions",
          "package": "serf",
          "source": "src/System-Serf.html#JoinOptions",
          "type": "data"
        },
        "index": {
          "description": "Options specific to joining cluster",
          "hierarchy": "System Serf",
          "module": "System.Serf",
          "name": "JoinOptions",
          "package": "serf",
          "partial": "Join Options",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/serf/docs/System-Serf.html#t:JoinOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe last known status of listed nodes.\n\u003c/p\u003e",
          "module": "System.Serf",
          "name": "LastKnownStatus",
          "package": "serf",
          "source": "src/System-Serf.html#LastKnownStatus",
          "type": "data"
        },
        "index": {
          "description": "The last known status of listed nodes",
          "hierarchy": "System Serf",
          "module": "System.Serf",
          "name": "LastKnownStatus",
          "package": "serf",
          "partial": "Last Known Status",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/serf/docs/System-Serf.html#t:LastKnownStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe minimum log level to log with the \u003ca\u003emonitor\u003c/a\u003e command.\n\u003c/p\u003e",
          "module": "System.Serf",
          "name": "LogLevel",
          "package": "serf",
          "source": "src/System-Serf.html#LogLevel",
          "type": "data"
        },
        "index": {
          "description": "The minimum log level to log with the monitor command",
          "hierarchy": "System Serf",
          "module": "System.Serf",
          "name": "LogLevel",
          "package": "serf",
          "partial": "Log Level",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/serf/docs/System-Serf.html#t:LogLevel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Serf",
          "name": "MemberStatus",
          "package": "serf",
          "source": "src/System-Serf.html#MemberStatus",
          "type": "data"
        },
        "index": {
          "hierarchy": "System Serf",
          "module": "System.Serf",
          "name": "MemberStatus",
          "package": "serf",
          "partial": "Member Status",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/serf/docs/System-Serf.html#t:MemberStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA convenience class for lifting serf action evaluation into monad transformer stacks.\n\u003c/p\u003e",
          "module": "System.Serf",
          "name": "MonadSerf",
          "package": "serf",
          "source": "src/System-Serf.html#MonadSerf",
          "type": "class"
        },
        "index": {
          "description": "convenience class for lifting serf action evaluation into monad transformer stacks",
          "hierarchy": "System Serf",
          "module": "System.Serf",
          "name": "MonadSerf",
          "package": "serf",
          "partial": "Monad Serf",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/serf/docs/System-Serf.html#t:MonadSerf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOptions for monitoring serf agent events. It is recommended that the log level is cranked up\n to either \u003ca\u003eWarn\u003c/a\u003e or \u003ca\u003eError\u003c/a\u003e, as the default currently seems to be \u003ca\u003eDebug\u003c/a\u003e, and is not generally\n useful in production environments.\n\u003c/p\u003e",
          "module": "System.Serf",
          "name": "MonitorOptions",
          "package": "serf",
          "source": "src/System-Serf.html#MonitorOptions",
          "type": "data"
        },
        "index": {
          "description": "Options for monitoring serf agent events It is recommended that the log level is cranked up to either Warn or Error as the default currently seems to be Debug and is not generally useful in production environments",
          "hierarchy": "System Serf",
          "module": "System.Serf",
          "name": "MonitorOptions",
          "package": "serf",
          "partial": "Monitor Options",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/serf/docs/System-Serf.html#t:MonitorOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Serf",
          "name": "SendOptions",
          "package": "serf",
          "source": "src/System-Serf.html#SendOptions",
          "type": "data"
        },
        "index": {
          "hierarchy": "System Serf",
          "module": "System.Serf",
          "name": "SendOptions",
          "package": "serf",
          "partial": "Send Options",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/serf/docs/System-Serf.html#t:SendOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCommands supported by the serf executable (serf protocol v1).\n\u003c/p\u003e",
          "module": "System.Serf",
          "name": "Serf",
          "package": "serf",
          "source": "src/System-Serf.html#Serf",
          "type": "data"
        },
        "index": {
          "description": "Commands supported by the serf executable serf protocol v1",
          "hierarchy": "System Serf",
          "module": "System.Serf",
          "name": "Serf",
          "package": "serf",
          "partial": "Serf",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/serf/docs/System-Serf.html#t:Serf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn alias for the operational monad created with the \u003ca\u003eSerf\u003c/a\u003e data type.\n\u003c/p\u003e",
          "module": "System.Serf",
          "name": "SerfM",
          "package": "serf",
          "source": "src/System-Serf.html#SerfM",
          "type": "type"
        },
        "index": {
          "description": "An alias for the operational monad created with the Serf data type",
          "hierarchy": "System Serf",
          "module": "System.Serf",
          "name": "SerfM",
          "package": "serf",
          "partial": "Serf",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/serf/docs/System-Serf.html#t:SerfM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Serf",
          "name": "Alive",
          "package": "serf",
          "signature": "Alive",
          "source": "src/System-Serf.html#LastKnownStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Serf",
          "module": "System.Serf",
          "name": "Alive",
          "package": "serf",
          "partial": "Alive",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/serf/docs/System-Serf.html#v:Alive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Serf",
          "name": "Debug",
          "package": "serf",
          "signature": "Debug",
          "source": "src/System-Serf.html#LogLevel",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Serf",
          "module": "System.Serf",
          "name": "Debug",
          "package": "serf",
          "partial": "Debug",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/serf/docs/System-Serf.html#v:Debug"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Serf",
          "name": "Error",
          "package": "serf",
          "signature": "Error",
          "source": "src/System-Serf.html#LogLevel",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Serf",
          "module": "System.Serf",
          "name": "Error",
          "package": "serf",
          "partial": "Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/serf/docs/System-Serf.html#v:Error"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Serf",
          "name": "Failed",
          "package": "serf",
          "signature": "Failed",
          "source": "src/System-Serf.html#LastKnownStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Serf",
          "module": "System.Serf",
          "name": "Failed",
          "package": "serf",
          "partial": "Failed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/serf/docs/System-Serf.html#v:Failed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Serf",
          "name": "ForceLeave",
          "package": "serf",
          "signature": "String -\u003e Serf Bool",
          "source": "src/System-Serf.html#Serf",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Serf",
          "module": "System.Serf",
          "name": "ForceLeave",
          "normalized": "String-\u003eSerf Bool",
          "package": "serf",
          "partial": "Force Leave",
          "signature": "String-\u003eSerf Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/serf/docs/System-Serf.html#v:ForceLeave"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Serf",
          "name": "Info",
          "package": "serf",
          "signature": "Info",
          "source": "src/System-Serf.html#LogLevel",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Serf",
          "module": "System.Serf",
          "name": "Info",
          "package": "serf",
          "partial": "Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/serf/docs/System-Serf.html#v:Info"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Serf",
          "name": "JoinNodes",
          "package": "serf",
          "signature": "JoinOptions -\u003e String -\u003e [String] -\u003e Serf Bool",
          "source": "src/System-Serf.html#Serf",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Serf",
          "module": "System.Serf",
          "name": "JoinNodes",
          "normalized": "JoinOptions-\u003eString-\u003e[String]-\u003eSerf Bool",
          "package": "serf",
          "partial": "Join Nodes",
          "signature": "JoinOptions-\u003eString-\u003e[String]-\u003eSerf Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/serf/docs/System-Serf.html#v:JoinNodes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Serf",
          "name": "JoinOptions",
          "package": "serf",
          "signature": "JoinOptions",
          "source": "src/System-Serf.html#JoinOptions",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Serf",
          "module": "System.Serf",
          "name": "JoinOptions",
          "package": "serf",
          "partial": "Join Options",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/serf/docs/System-Serf.html#v:JoinOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Serf",
          "name": "MemberStatus",
          "package": "serf",
          "signature": "MemberStatus",
          "source": "src/System-Serf.html#MemberStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Serf",
          "module": "System.Serf",
          "name": "MemberStatus",
          "package": "serf",
          "partial": "Member Status",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/serf/docs/System-Serf.html#v:MemberStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Serf",
          "name": "Members",
          "package": "serf",
          "signature": "Serf [MemberStatus]",
          "source": "src/System-Serf.html#Serf",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Serf",
          "module": "System.Serf",
          "name": "Members",
          "normalized": "Serf[MemberStatus]",
          "package": "serf",
          "partial": "Members",
          "signature": "Serf[MemberStatus]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/serf/docs/System-Serf.html#v:Members"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Serf",
          "name": "MonitorOptions",
          "package": "serf",
          "signature": "MonitorOptions",
          "source": "src/System-Serf.html#MonitorOptions",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Serf",
          "module": "System.Serf",
          "name": "MonitorOptions",
          "package": "serf",
          "partial": "Monitor Options",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/serf/docs/System-Serf.html#v:MonitorOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Serf",
          "name": "SendEvent",
          "package": "serf",
          "signature": "SendOptions -\u003e String -\u003e Maybe String -\u003e Serf Bool",
          "source": "src/System-Serf.html#Serf",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Serf",
          "module": "System.Serf",
          "name": "SendEvent",
          "normalized": "SendOptions-\u003eString-\u003eMaybe String-\u003eSerf Bool",
          "package": "serf",
          "partial": "Send Event",
          "signature": "SendOptions-\u003eString-\u003eMaybe String-\u003eSerf Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/serf/docs/System-Serf.html#v:SendEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Serf",
          "name": "SendOptions",
          "package": "serf",
          "signature": "SendOptions",
          "source": "src/System-Serf.html#SendOptions",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Serf",
          "module": "System.Serf",
          "name": "SendOptions",
          "package": "serf",
          "partial": "Send Options",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/serf/docs/System-Serf.html#v:SendOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Serf",
          "name": "Trace",
          "package": "serf",
          "signature": "Trace",
          "source": "src/System-Serf.html#LogLevel",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Serf",
          "module": "System.Serf",
          "name": "Trace",
          "package": "serf",
          "partial": "Trace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/serf/docs/System-Serf.html#v:Trace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Serf",
          "name": "Warn",
          "package": "serf",
          "signature": "Warn",
          "source": "src/System-Serf.html#LogLevel",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Serf",
          "module": "System.Serf",
          "name": "Warn",
          "package": "serf",
          "partial": "Warn",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/serf/docs/System-Serf.html#v:Warn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhether to replay all events that have occurred in the cluster.\n\u003c/p\u003e",
          "module": "System.Serf",
          "name": "_jsReplay",
          "package": "serf",
          "signature": "Maybe Bool",
          "source": "src/System-Serf.html#JoinOptions",
          "type": "function"
        },
        "index": {
          "description": "Whether to replay all events that have occurred in the cluster",
          "hierarchy": "System Serf",
          "module": "System.Serf",
          "name": "_jsReplay",
          "package": "serf",
          "partial": "Replay",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/serf/docs/System-Serf.html#v:_jsReplay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Serf",
          "name": "coalesceEvents",
          "package": "serf",
          "signature": "Maybe Bool",
          "source": "src/System-Serf.html#SendOptions",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Serf",
          "module": "System.Serf",
          "name": "coalesceEvents",
          "package": "serf",
          "partial": "Events",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/serf/docs/System-Serf.html#v:coalesceEvents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluate the specified serf actions in given context\n\u003c/p\u003e",
          "module": "System.Serf",
          "name": "evalSerf",
          "package": "serf",
          "signature": "SerfM a -\u003e m a",
          "source": "src/System-Serf.html#evalSerf",
          "type": "method"
        },
        "index": {
          "description": "Evaluate the specified serf actions in given context",
          "hierarchy": "System Serf",
          "module": "System.Serf",
          "name": "evalSerf",
          "normalized": "SerfM a-\u003eb a",
          "package": "serf",
          "partial": "Serf",
          "signature": "SerfM a-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/serf/docs/System-Serf.html#v:evalSerf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eForce a specific node to leave a cluster. Note that the node will\n rejoin unless the serf agent for that node has exited.\n\u003c/p\u003e",
          "module": "System.Serf",
          "name": "forceLeave",
          "package": "serf",
          "signature": "String -\u003e SerfM Bool",
          "source": "src/System-Serf.html#forceLeave",
          "type": "function"
        },
        "index": {
          "description": "Force specific node to leave cluster Note that the node will rejoin unless the serf agent for that node has exited",
          "hierarchy": "System Serf",
          "module": "System.Serf",
          "name": "forceLeave",
          "normalized": "String-\u003eSerfM Bool",
          "package": "serf",
          "partial": "Leave",
          "signature": "String-\u003eSerfM Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/serf/docs/System-Serf.html#v:forceLeave"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJoin the node to a cluster using the specified address(es).\n\u003c/p\u003e\u003cp\u003eAt least one node address must be specified.\n\u003c/p\u003e",
          "module": "System.Serf",
          "name": "joinNodes",
          "package": "serf",
          "signature": "String-\u003e [String]-\u003e SerfM Bool",
          "type": "function"
        },
        "index": {
          "description": "Join the node to cluster using the specified address es At least one node address must be specified",
          "hierarchy": "System Serf",
          "module": "System.Serf",
          "name": "joinNodes",
          "normalized": "String-\u003e[String]-\u003eSerfM Bool",
          "package": "serf",
          "partial": "Nodes",
          "signature": "String-\u003e[String]-\u003eSerfM Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/serf/docs/System-Serf.html#v:joinNodes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJoin the node to a cluster with non-standard options.\n\u003c/p\u003e",
          "module": "System.Serf",
          "name": "joinNodes'",
          "package": "serf",
          "signature": "JoinOptions -\u003e String -\u003e [String] -\u003e SerfM Bool",
          "source": "src/System-Serf.html#joinNodes%27",
          "type": "function"
        },
        "index": {
          "description": "Join the node to cluster with non-standard options",
          "hierarchy": "System Serf",
          "module": "System.Serf",
          "name": "joinNodes'",
          "normalized": "JoinOptions-\u003eString-\u003e[String]-\u003eSerfM Bool",
          "package": "serf",
          "partial": "Nodes'",
          "signature": "JoinOptions-\u003eString-\u003e[String]-\u003eSerfM Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/serf/docs/System-Serf.html#v:joinNodes-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Serf",
          "name": "memberStatus",
          "package": "serf",
          "signature": "LastKnownStatus",
          "source": "src/System-Serf.html#MemberStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Serf",
          "module": "System.Serf",
          "name": "memberStatus",
          "package": "serf",
          "partial": "Status",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/serf/docs/System-Serf.html#v:memberStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Serf",
          "name": "memberStatusAddress",
          "package": "serf",
          "signature": "Text",
          "source": "src/System-Serf.html#MemberStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Serf",
          "module": "System.Serf",
          "name": "memberStatusAddress",
          "package": "serf",
          "partial": "Status Address",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/serf/docs/System-Serf.html#v:memberStatusAddress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Serf",
          "name": "memberStatusName",
          "package": "serf",
          "signature": "Text",
          "source": "src/System-Serf.html#MemberStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Serf",
          "module": "System.Serf",
          "name": "memberStatusName",
          "package": "serf",
          "partial": "Status Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/serf/docs/System-Serf.html#v:memberStatusName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList known members in the cluster\n\u003c/p\u003e",
          "module": "System.Serf",
          "name": "members",
          "package": "serf",
          "signature": "SerfM [MemberStatus]",
          "source": "src/System-Serf.html#members",
          "type": "function"
        },
        "index": {
          "description": "List known members in the cluster",
          "hierarchy": "System Serf",
          "module": "System.Serf",
          "name": "members",
          "normalized": "SerfM[MemberStatus]",
          "package": "serf",
          "signature": "SerfM[MemberStatus]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/serf/docs/System-Serf.html#v:members"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Serf",
          "name": "monitorLogLevel",
          "package": "serf",
          "signature": "Maybe LogLevel",
          "source": "src/System-Serf.html#MonitorOptions",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Serf",
          "module": "System.Serf",
          "name": "monitorLogLevel",
          "package": "serf",
          "partial": "Log Level",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/serf/docs/System-Serf.html#v:monitorLogLevel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDispatch a custom user event into a Serf cluster.\n\u003c/p\u003e\u003cp\u003eNodes in the cluster listen for these custom events and react to them.\n\u003c/p\u003e",
          "module": "System.Serf",
          "name": "sendEvent",
          "package": "serf",
          "signature": "String-\u003e Maybe String-\u003e SerfM Bool",
          "type": "function"
        },
        "index": {
          "description": "Dispatch custom user event into Serf cluster Nodes in the cluster listen for these custom events and react to them",
          "hierarchy": "System Serf",
          "module": "System.Serf",
          "name": "sendEvent",
          "normalized": "String-\u003eMaybe String-\u003eSerfM Bool",
          "package": "serf",
          "partial": "Event",
          "signature": "String-\u003eMaybe String-\u003eSerfM Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/serf/docs/System-Serf.html#v:sendEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDispatch a custom user event into a Serf cluster with additional flags set.\n\u003c/p\u003e",
          "module": "System.Serf",
          "name": "sendEvent'",
          "package": "serf",
          "signature": "SendOptions -\u003e String -\u003e Maybe String -\u003e SerfM Bool",
          "source": "src/System-Serf.html#sendEvent%27",
          "type": "function"
        },
        "index": {
          "description": "Dispatch custom user event into Serf cluster with additional flags set",
          "hierarchy": "System Serf",
          "module": "System.Serf",
          "name": "sendEvent'",
          "normalized": "SendOptions-\u003eString-\u003eMaybe String-\u003eSerfM Bool",
          "package": "serf",
          "partial": "Event'",
          "signature": "SendOptions-\u003eString-\u003eMaybe String-\u003eSerfM Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/serf/docs/System-Serf.html#v:sendEvent-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun serf actions locally on the default port.\n\u003c/p\u003e",
          "module": "System.Serf",
          "name": "serf",
          "package": "serf",
          "signature": "SerfM a -\u003e IO a",
          "source": "src/System-Serf.html#serf",
          "type": "function"
        },
        "index": {
          "description": "Run serf actions locally on the default port",
          "hierarchy": "System Serf",
          "module": "System.Serf",
          "name": "serf",
          "normalized": "SerfM a-\u003eIO a",
          "package": "serf",
          "signature": "SerfM a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/serf/docs/System-Serf.html#v:serf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun serf actions at a specified RPC address.\n\u003c/p\u003e",
          "module": "System.Serf",
          "name": "serfAt",
          "package": "serf",
          "signature": "String -\u003e SerfM a -\u003e IO a",
          "source": "src/System-Serf.html#serfAt",
          "type": "function"
        },
        "index": {
          "description": "Run serf actions at specified RPC address",
          "hierarchy": "System Serf",
          "module": "System.Serf",
          "name": "serfAt",
          "normalized": "String-\u003eSerfM a-\u003eIO a",
          "package": "serf",
          "partial": "At",
          "signature": "String-\u003eSerfM a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/serf/docs/System-Serf.html#v:serfAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun serf actions with a list of arbitrary command line arguments.\n\u003c/p\u003e",
          "module": "System.Serf",
          "name": "serfWithOpts",
          "package": "serf",
          "signature": "[String] -\u003e SerfM a -\u003e IO a",
          "source": "src/System-Serf.html#serfWithOpts",
          "type": "function"
        },
        "index": {
          "description": "Run serf actions with list of arbitrary command line arguments",
          "hierarchy": "System Serf",
          "module": "System.Serf",
          "name": "serfWithOpts",
          "normalized": "[String]-\u003eSerfM a-\u003eIO a",
          "package": "serf",
          "partial": "With Opts",
          "signature": "[String]-\u003eSerfM a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/serf/docs/System-Serf.html#v:serfWithOpts"
      }
    }
  ]
]