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
        "word": "hsyslog"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFFI bindings to Unix's \u003ccode\u003esyslog(3)\u003c/code\u003e. Process this file\n   with \u003ccode\u003ehsc2hs\u003c/code\u003e to obtain a Haskell module.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Posix.Syslog",
          "name": "Syslog",
          "package": "hsyslog",
          "source": "src/System-Posix-Syslog.html",
          "type": "module"
        },
        "index": {
          "description": "FFI bindings to Unix syslog Process this file with hsc2hs to obtain Haskell module",
          "hierarchy": "System Posix Syslog",
          "module": "System.Posix.Syslog",
          "name": "Syslog",
          "package": "hsyslog",
          "partial": "Syslog",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hsyslog/docs/System-Posix-Syslog.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSyslog distinguishes various system facilities. Most\n applications should log in \u003ccode\u003e\u003ca\u003eUSER\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Posix.Syslog",
          "name": "Facility",
          "package": "hsyslog",
          "source": "src/System-Posix-Syslog.html#Facility",
          "type": "data"
        },
        "index": {
          "description": "Syslog distinguishes various system facilities Most applications should log in USER",
          "hierarchy": "System Posix Syslog",
          "module": "System.Posix.Syslog",
          "name": "Facility",
          "package": "hsyslog",
          "partial": "Facility",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hsyslog/docs/System-Posix-Syslog.html#t:Facility"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOptions for the syslog service. Set with \u003ccode\u003e\u003ca\u003ewithSyslog\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Posix.Syslog",
          "name": "Option",
          "package": "hsyslog",
          "source": "src/System-Posix-Syslog.html#Option",
          "type": "data"
        },
        "index": {
          "description": "Options for the syslog service Set with withSyslog",
          "hierarchy": "System Posix Syslog",
          "module": "System.Posix.Syslog",
          "name": "Option",
          "package": "hsyslog",
          "partial": "Option",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hsyslog/docs/System-Posix-Syslog.html#t:Option"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLog messages are prioritized.\n\u003c/p\u003e",
          "module": "System.Posix.Syslog",
          "name": "Priority",
          "package": "hsyslog",
          "source": "src/System-Posix-Syslog.html#Priority",
          "type": "data"
        },
        "index": {
          "description": "Log messages are prioritized",
          "hierarchy": "System Posix Syslog",
          "module": "System.Posix.Syslog",
          "name": "Priority",
          "package": "hsyslog",
          "partial": "Priority",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hsyslog/docs/System-Posix-Syslog.html#t:Priority"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esecurity/authorization messages\n\u003c/p\u003e",
          "module": "System.Posix.Syslog",
          "name": "AUTH",
          "package": "hsyslog",
          "signature": "AUTH",
          "source": "src/System-Posix-Syslog.html#Facility",
          "type": "function"
        },
        "index": {
          "description": "security authorization messages",
          "hierarchy": "System Posix Syslog",
          "module": "System.Posix.Syslog",
          "name": "AUTH",
          "package": "hsyslog",
          "partial": "AUTH",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsyslog/docs/System-Posix-Syslog.html#v:AUTH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esecurity/authorization messages (effectively equals \u003ccode\u003e\u003ca\u003eAUTH\u003c/a\u003e\u003c/code\u003e on some systems)\n\u003c/p\u003e",
          "module": "System.Posix.Syslog",
          "name": "AUTHPRIV",
          "package": "hsyslog",
          "signature": "AUTHPRIV",
          "source": "src/System-Posix-Syslog.html#Facility",
          "type": "function"
        },
        "index": {
          "description": "security authorization messages effectively equals AUTH on some systems",
          "hierarchy": "System Posix Syslog",
          "module": "System.Posix.Syslog",
          "name": "AUTHPRIV",
          "package": "hsyslog",
          "partial": "AUTHPRIV",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsyslog/docs/System-Posix-Syslog.html#v:AUTHPRIV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eaction must be taken immediately\n\u003c/p\u003e",
          "module": "System.Posix.Syslog",
          "name": "Alert",
          "package": "hsyslog",
          "signature": "Alert",
          "source": "src/System-Posix-Syslog.html#Priority",
          "type": "function"
        },
        "index": {
          "description": "action must be taken immediately",
          "hierarchy": "System Posix Syslog",
          "module": "System.Posix.Syslog",
          "name": "Alert",
          "package": "hsyslog",
          "partial": "Alert",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsyslog/docs/System-Posix-Syslog.html#v:Alert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elog on the console if errors in sending\n\u003c/p\u003e",
          "module": "System.Posix.Syslog",
          "name": "CONS",
          "package": "hsyslog",
          "signature": "CONS",
          "source": "src/System-Posix-Syslog.html#Option",
          "type": "function"
        },
        "index": {
          "description": "log on the console if errors in sending",
          "hierarchy": "System Posix Syslog",
          "module": "System.Posix.Syslog",
          "name": "CONS",
          "package": "hsyslog",
          "partial": "CONS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsyslog/docs/System-Posix-Syslog.html#v:CONS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eclock daemon\n\u003c/p\u003e",
          "module": "System.Posix.Syslog",
          "name": "CRON",
          "package": "hsyslog",
          "signature": "CRON",
          "source": "src/System-Posix-Syslog.html#Facility",
          "type": "function"
        },
        "index": {
          "description": "clock daemon",
          "hierarchy": "System Posix Syslog",
          "module": "System.Posix.Syslog",
          "name": "CRON",
          "package": "hsyslog",
          "partial": "CRON",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsyslog/docs/System-Posix-Syslog.html#v:CRON"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecritical conditions\n\u003c/p\u003e",
          "module": "System.Posix.Syslog",
          "name": "Critical",
          "package": "hsyslog",
          "signature": "Critical",
          "source": "src/System-Posix-Syslog.html#Priority",
          "type": "function"
        },
        "index": {
          "description": "critical conditions",
          "hierarchy": "System Posix Syslog",
          "module": "System.Posix.Syslog",
          "name": "Critical",
          "package": "hsyslog",
          "partial": "Critical",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsyslog/docs/System-Posix-Syslog.html#v:Critical"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esystem daemons\n\u003c/p\u003e",
          "module": "System.Posix.Syslog",
          "name": "DAEMON",
          "package": "hsyslog",
          "signature": "DAEMON",
          "source": "src/System-Posix-Syslog.html#Facility",
          "type": "function"
        },
        "index": {
          "description": "system daemons",
          "hierarchy": "System Posix Syslog",
          "module": "System.Posix.Syslog",
          "name": "DAEMON",
          "package": "hsyslog",
          "partial": "DAEMON",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsyslog/docs/System-Posix-Syslog.html#v:DAEMON"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edebug-level messages\n\u003c/p\u003e",
          "module": "System.Posix.Syslog",
          "name": "Debug",
          "package": "hsyslog",
          "signature": "Debug",
          "source": "src/System-Posix-Syslog.html#Priority",
          "type": "function"
        },
        "index": {
          "description": "debug-level messages",
          "hierarchy": "System Posix Syslog",
          "module": "System.Posix.Syslog",
          "name": "Debug",
          "package": "hsyslog",
          "partial": "Debug",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsyslog/docs/System-Posix-Syslog.html#v:Debug"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esystem is unusable\n\u003c/p\u003e",
          "module": "System.Posix.Syslog",
          "name": "Emergency",
          "package": "hsyslog",
          "signature": "Emergency",
          "source": "src/System-Posix-Syslog.html#Priority",
          "type": "function"
        },
        "index": {
          "description": "system is unusable",
          "hierarchy": "System Posix Syslog",
          "module": "System.Posix.Syslog",
          "name": "Emergency",
          "package": "hsyslog",
          "partial": "Emergency",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsyslog/docs/System-Posix-Syslog.html#v:Emergency"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eerror conditions\n\u003c/p\u003e",
          "module": "System.Posix.Syslog",
          "name": "Error",
          "package": "hsyslog",
          "signature": "Error",
          "source": "src/System-Posix-Syslog.html#Priority",
          "type": "function"
        },
        "index": {
          "description": "error conditions",
          "hierarchy": "System Posix Syslog",
          "module": "System.Posix.Syslog",
          "name": "Error",
          "package": "hsyslog",
          "partial": "Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsyslog/docs/System-Posix-Syslog.html#v:Error"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eftp daemon (effectively equals \u003ccode\u003e\u003ca\u003eDAEMON\u003c/a\u003e\u003c/code\u003e on some systems)\n\u003c/p\u003e",
          "module": "System.Posix.Syslog",
          "name": "FTP",
          "package": "hsyslog",
          "signature": "FTP",
          "source": "src/System-Posix-Syslog.html#Facility",
          "type": "function"
        },
        "index": {
          "description": "ftp daemon effectively equals DAEMON on some systems",
          "hierarchy": "System Posix Syslog",
          "module": "System.Posix.Syslog",
          "name": "FTP",
          "package": "hsyslog",
          "partial": "FTP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsyslog/docs/System-Posix-Syslog.html#v:FTP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003einformational\n\u003c/p\u003e",
          "module": "System.Posix.Syslog",
          "name": "Info",
          "package": "hsyslog",
          "signature": "Info",
          "source": "src/System-Posix-Syslog.html#Priority",
          "type": "function"
        },
        "index": {
          "description": "informational",
          "hierarchy": "System Posix Syslog",
          "module": "System.Posix.Syslog",
          "name": "Info",
          "package": "hsyslog",
          "partial": "Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsyslog/docs/System-Posix-Syslog.html#v:Info"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ekernel messages\n\u003c/p\u003e",
          "module": "System.Posix.Syslog",
          "name": "KERN",
          "package": "hsyslog",
          "signature": "KERN",
          "source": "src/System-Posix-Syslog.html#Facility",
          "type": "function"
        },
        "index": {
          "description": "kernel messages",
          "hierarchy": "System Posix Syslog",
          "module": "System.Posix.Syslog",
          "name": "KERN",
          "package": "hsyslog",
          "partial": "KERN",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsyslog/docs/System-Posix-Syslog.html#v:KERN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ereserved for local use\n\u003c/p\u003e",
          "module": "System.Posix.Syslog",
          "name": "LOCAL0",
          "package": "hsyslog",
          "signature": "LOCAL0",
          "source": "src/System-Posix-Syslog.html#Facility",
          "type": "function"
        },
        "index": {
          "description": "reserved for local use",
          "hierarchy": "System Posix Syslog",
          "module": "System.Posix.Syslog",
          "name": "LOCAL0",
          "package": "hsyslog",
          "partial": "LOCAL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsyslog/docs/System-Posix-Syslog.html#v:LOCAL0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ereserved for local use\n\u003c/p\u003e",
          "module": "System.Posix.Syslog",
          "name": "LOCAL1",
          "package": "hsyslog",
          "signature": "LOCAL1",
          "source": "src/System-Posix-Syslog.html#Facility",
          "type": "function"
        },
        "index": {
          "description": "reserved for local use",
          "hierarchy": "System Posix Syslog",
          "module": "System.Posix.Syslog",
          "name": "LOCAL1",
          "package": "hsyslog",
          "partial": "LOCAL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsyslog/docs/System-Posix-Syslog.html#v:LOCAL1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ereserved for local use\n\u003c/p\u003e",
          "module": "System.Posix.Syslog",
          "name": "LOCAL2",
          "package": "hsyslog",
          "signature": "LOCAL2",
          "source": "src/System-Posix-Syslog.html#Facility",
          "type": "function"
        },
        "index": {
          "description": "reserved for local use",
          "hierarchy": "System Posix Syslog",
          "module": "System.Posix.Syslog",
          "name": "LOCAL2",
          "package": "hsyslog",
          "partial": "LOCAL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsyslog/docs/System-Posix-Syslog.html#v:LOCAL2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ereserved for local use\n\u003c/p\u003e",
          "module": "System.Posix.Syslog",
          "name": "LOCAL3",
          "package": "hsyslog",
          "signature": "LOCAL3",
          "source": "src/System-Posix-Syslog.html#Facility",
          "type": "function"
        },
        "index": {
          "description": "reserved for local use",
          "hierarchy": "System Posix Syslog",
          "module": "System.Posix.Syslog",
          "name": "LOCAL3",
          "package": "hsyslog",
          "partial": "LOCAL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsyslog/docs/System-Posix-Syslog.html#v:LOCAL3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ereserved for local use\n\u003c/p\u003e",
          "module": "System.Posix.Syslog",
          "name": "LOCAL4",
          "package": "hsyslog",
          "signature": "LOCAL4",
          "source": "src/System-Posix-Syslog.html#Facility",
          "type": "function"
        },
        "index": {
          "description": "reserved for local use",
          "hierarchy": "System Posix Syslog",
          "module": "System.Posix.Syslog",
          "name": "LOCAL4",
          "package": "hsyslog",
          "partial": "LOCAL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsyslog/docs/System-Posix-Syslog.html#v:LOCAL4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ereserved for local use\n\u003c/p\u003e",
          "module": "System.Posix.Syslog",
          "name": "LOCAL5",
          "package": "hsyslog",
          "signature": "LOCAL5",
          "source": "src/System-Posix-Syslog.html#Facility",
          "type": "function"
        },
        "index": {
          "description": "reserved for local use",
          "hierarchy": "System Posix Syslog",
          "module": "System.Posix.Syslog",
          "name": "LOCAL5",
          "package": "hsyslog",
          "partial": "LOCAL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsyslog/docs/System-Posix-Syslog.html#v:LOCAL5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ereserved for local use\n\u003c/p\u003e",
          "module": "System.Posix.Syslog",
          "name": "LOCAL6",
          "package": "hsyslog",
          "signature": "LOCAL6",
          "source": "src/System-Posix-Syslog.html#Facility",
          "type": "function"
        },
        "index": {
          "description": "reserved for local use",
          "hierarchy": "System Posix Syslog",
          "module": "System.Posix.Syslog",
          "name": "LOCAL6",
          "package": "hsyslog",
          "partial": "LOCAL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsyslog/docs/System-Posix-Syslog.html#v:LOCAL6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ereserved for local use\n\u003c/p\u003e",
          "module": "System.Posix.Syslog",
          "name": "LOCAL7",
          "package": "hsyslog",
          "signature": "LOCAL7",
          "source": "src/System-Posix-Syslog.html#Facility",
          "type": "function"
        },
        "index": {
          "description": "reserved for local use",
          "hierarchy": "System Posix Syslog",
          "module": "System.Posix.Syslog",
          "name": "LOCAL7",
          "package": "hsyslog",
          "partial": "LOCAL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsyslog/docs/System-Posix-Syslog.html#v:LOCAL7"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eline printer subsystem\n\u003c/p\u003e",
          "module": "System.Posix.Syslog",
          "name": "LPR",
          "package": "hsyslog",
          "signature": "LPR",
          "source": "src/System-Posix-Syslog.html#Facility",
          "type": "function"
        },
        "index": {
          "description": "line printer subsystem",
          "hierarchy": "System Posix Syslog",
          "module": "System.Posix.Syslog",
          "name": "LPR",
          "package": "hsyslog",
          "partial": "LPR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsyslog/docs/System-Posix-Syslog.html#v:LPR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003email system\n\u003c/p\u003e",
          "module": "System.Posix.Syslog",
          "name": "MAIL",
          "package": "hsyslog",
          "signature": "MAIL",
          "source": "src/System-Posix-Syslog.html#Facility",
          "type": "function"
        },
        "index": {
          "description": "mail system",
          "hierarchy": "System Posix Syslog",
          "module": "System.Posix.Syslog",
          "name": "MAIL",
          "package": "hsyslog",
          "partial": "MAIL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsyslog/docs/System-Posix-Syslog.html#v:MAIL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edon't delay open\n\u003c/p\u003e",
          "module": "System.Posix.Syslog",
          "name": "NDELAY",
          "package": "hsyslog",
          "signature": "NDELAY",
          "source": "src/System-Posix-Syslog.html#Option",
          "type": "function"
        },
        "index": {
          "description": "don delay open",
          "hierarchy": "System Posix Syslog",
          "module": "System.Posix.Syslog",
          "name": "NDELAY",
          "package": "hsyslog",
          "partial": "NDELAY",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsyslog/docs/System-Posix-Syslog.html#v:NDELAY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003enetwork news subsystem\n\u003c/p\u003e",
          "module": "System.Posix.Syslog",
          "name": "NEWS",
          "package": "hsyslog",
          "signature": "NEWS",
          "source": "src/System-Posix-Syslog.html#Facility",
          "type": "function"
        },
        "index": {
          "description": "network news subsystem",
          "hierarchy": "System Posix Syslog",
          "module": "System.Posix.Syslog",
          "name": "NEWS",
          "package": "hsyslog",
          "partial": "NEWS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsyslog/docs/System-Posix-Syslog.html#v:NEWS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edon't wait for console forks: DEPRECATED\n\u003c/p\u003e",
          "module": "System.Posix.Syslog",
          "name": "NOWAIT",
          "package": "hsyslog",
          "signature": "NOWAIT",
          "source": "src/System-Posix-Syslog.html#Option",
          "type": "function"
        },
        "index": {
          "description": "don wait for console forks DEPRECATED",
          "hierarchy": "System Posix Syslog",
          "module": "System.Posix.Syslog",
          "name": "NOWAIT",
          "package": "hsyslog",
          "partial": "NOWAIT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsyslog/docs/System-Posix-Syslog.html#v:NOWAIT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003enormal but significant condition\n\u003c/p\u003e",
          "module": "System.Posix.Syslog",
          "name": "Notice",
          "package": "hsyslog",
          "signature": "Notice",
          "source": "src/System-Posix-Syslog.html#Priority",
          "type": "function"
        },
        "index": {
          "description": "normal but significant condition",
          "hierarchy": "System Posix Syslog",
          "module": "System.Posix.Syslog",
          "name": "Notice",
          "package": "hsyslog",
          "partial": "Notice",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsyslog/docs/System-Posix-Syslog.html#v:Notice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edelay open until first \u003ccode\u003esyslog()\u003c/code\u003e (default)\n\u003c/p\u003e",
          "module": "System.Posix.Syslog",
          "name": "ODELAY",
          "package": "hsyslog",
          "signature": "ODELAY",
          "source": "src/System-Posix-Syslog.html#Option",
          "type": "function"
        },
        "index": {
          "description": "delay open until first syslog default",
          "hierarchy": "System Posix Syslog",
          "module": "System.Posix.Syslog",
          "name": "ODELAY",
          "package": "hsyslog",
          "partial": "ODELAY",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsyslog/docs/System-Posix-Syslog.html#v:ODELAY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elog to \u003ccode\u003estderr\u003c/code\u003e as well (might be a no-op on some systems)\n\u003c/p\u003e",
          "module": "System.Posix.Syslog",
          "name": "PERROR",
          "package": "hsyslog",
          "signature": "PERROR",
          "source": "src/System-Posix-Syslog.html#Option",
          "type": "function"
        },
        "index": {
          "description": "log to stderr as well might be no-op on some systems",
          "hierarchy": "System Posix Syslog",
          "module": "System.Posix.Syslog",
          "name": "PERROR",
          "package": "hsyslog",
          "partial": "PERROR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsyslog/docs/System-Posix-Syslog.html#v:PERROR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elog the pid with each message\n\u003c/p\u003e",
          "module": "System.Posix.Syslog",
          "name": "PID",
          "package": "hsyslog",
          "signature": "PID",
          "source": "src/System-Posix-Syslog.html#Option",
          "type": "function"
        },
        "index": {
          "description": "log the pid with each message",
          "hierarchy": "System Posix Syslog",
          "module": "System.Posix.Syslog",
          "name": "PID",
          "package": "hsyslog",
          "partial": "PID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsyslog/docs/System-Posix-Syslog.html#v:PID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emessages generated internally by syslogd\n\u003c/p\u003e",
          "module": "System.Posix.Syslog",
          "name": "SYSLOG",
          "package": "hsyslog",
          "signature": "SYSLOG",
          "source": "src/System-Posix-Syslog.html#Facility",
          "type": "function"
        },
        "index": {
          "description": "messages generated internally by syslogd",
          "hierarchy": "System Posix Syslog",
          "module": "System.Posix.Syslog",
          "name": "SYSLOG",
          "package": "hsyslog",
          "partial": "SYSLOG",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsyslog/docs/System-Posix-Syslog.html#v:SYSLOG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003euser-level messages (default unless set otherwise)\n\u003c/p\u003e",
          "module": "System.Posix.Syslog",
          "name": "USER",
          "package": "hsyslog",
          "signature": "USER",
          "source": "src/System-Posix-Syslog.html#Facility",
          "type": "function"
        },
        "index": {
          "description": "user-level messages default unless set otherwise",
          "hierarchy": "System Posix Syslog",
          "module": "System.Posix.Syslog",
          "name": "USER",
          "package": "hsyslog",
          "partial": "USER",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsyslog/docs/System-Posix-Syslog.html#v:USER"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUUCP subsystem\n\u003c/p\u003e",
          "module": "System.Posix.Syslog",
          "name": "UUCP",
          "package": "hsyslog",
          "signature": "UUCP",
          "source": "src/System-Posix-Syslog.html#Facility",
          "type": "function"
        },
        "index": {
          "description": "UUCP subsystem",
          "hierarchy": "System Posix Syslog",
          "module": "System.Posix.Syslog",
          "name": "UUCP",
          "package": "hsyslog",
          "partial": "UUCP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsyslog/docs/System-Posix-Syslog.html#v:UUCP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ewarning conditions\n\u003c/p\u003e",
          "module": "System.Posix.Syslog",
          "name": "Warning",
          "package": "hsyslog",
          "signature": "Warning",
          "source": "src/System-Posix-Syslog.html#Priority",
          "type": "function"
        },
        "index": {
          "description": "warning conditions",
          "hierarchy": "System Posix Syslog",
          "module": "System.Posix.Syslog",
          "name": "Warning",
          "package": "hsyslog",
          "partial": "Warning",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsyslog/docs/System-Posix-Syslog.html#v:Warning"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Syslog",
          "name": "_closelog",
          "package": "hsyslog",
          "signature": "IO ()",
          "source": "src/System-Posix-Syslog.html#_closelog",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix Syslog",
          "module": "System.Posix.Syslog",
          "name": "_closelog",
          "normalized": "IO()",
          "package": "hsyslog",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsyslog/docs/System-Posix-Syslog.html#v:_closelog"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Syslog",
          "name": "_openlog",
          "package": "hsyslog",
          "signature": "CString -\u003e CInt -\u003e CInt -\u003e IO ()",
          "source": "src/System-Posix-Syslog.html#_openlog",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix Syslog",
          "module": "System.Posix.Syslog",
          "name": "_openlog",
          "normalized": "CString-\u003eCInt-\u003eCInt-\u003eIO()",
          "package": "hsyslog",
          "signature": "CString-\u003eCInt-\u003eCInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsyslog/docs/System-Posix-Syslog.html#v:_openlog"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Syslog",
          "name": "_setlogmask",
          "package": "hsyslog",
          "signature": "CInt -\u003e IO CInt",
          "source": "src/System-Posix-Syslog.html#_setlogmask",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix Syslog",
          "module": "System.Posix.Syslog",
          "name": "_setlogmask",
          "normalized": "CInt-\u003eIO CInt",
          "package": "hsyslog",
          "signature": "CInt-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsyslog/docs/System-Posix-Syslog.html#v:_setlogmask"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.Syslog",
          "name": "_syslog",
          "package": "hsyslog",
          "signature": "CInt -\u003e CString -\u003e IO ()",
          "source": "src/System-Posix-Syslog.html#_syslog",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix Syslog",
          "module": "System.Posix.Syslog",
          "name": "_syslog",
          "normalized": "CInt-\u003eCString-\u003eIO()",
          "package": "hsyslog",
          "signature": "CInt-\u003eCString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsyslog/docs/System-Posix-Syslog.html#v:_syslog"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEscape any occurances of '\u003ccode\u003e%\u003c/code\u003e' in a string, so that it\n is safe to pass it to \u003ccode\u003e\u003ca\u003e_syslog\u003c/a\u003e\u003c/code\u003e. The \u003ccode\u003e\u003ca\u003esyslog\u003c/a\u003e\u003c/code\u003e wrapper\n does this automatically.\n\u003c/p\u003e",
          "module": "System.Posix.Syslog",
          "name": "safeMsg",
          "package": "hsyslog",
          "signature": "String -\u003e String",
          "source": "src/System-Posix-Syslog.html#safeMsg",
          "type": "function"
        },
        "index": {
          "description": "Escape any occurances of in string so that it is safe to pass it to syslog The syslog wrapper does this automatically",
          "hierarchy": "System Posix Syslog",
          "module": "System.Posix.Syslog",
          "name": "safeMsg",
          "normalized": "String-\u003eString",
          "package": "hsyslog",
          "partial": "Msg",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsyslog/docs/System-Posix-Syslog.html#v:safeMsg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLog a message with the given priority.\n\u003c/p\u003e",
          "module": "System.Posix.Syslog",
          "name": "syslog",
          "package": "hsyslog",
          "signature": "Priority -\u003e String -\u003e IO ()",
          "source": "src/System-Posix-Syslog.html#syslog",
          "type": "function"
        },
        "index": {
          "description": "Log message with the given priority",
          "hierarchy": "System Posix Syslog",
          "module": "System.Posix.Syslog",
          "name": "syslog",
          "normalized": "Priority-\u003eString-\u003eIO()",
          "package": "hsyslog",
          "signature": "Priority-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsyslog/docs/System-Posix-Syslog.html#v:syslog"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003euseSyslog ident\u003c/code\u003e \u003ccode\u003e=\u003c/code\u003e \u003ccode\u003ewithSyslog ident [PID, PERROR] USER\u003c/code\u003e\n\u003c/p\u003e",
          "module": "System.Posix.Syslog",
          "name": "useSyslog",
          "package": "hsyslog",
          "signature": "String -\u003e IO a -\u003e IO a",
          "source": "src/System-Posix-Syslog.html#useSyslog",
          "type": "function"
        },
        "index": {
          "description": "useSyslog ident withSyslog ident PID PERROR USER",
          "hierarchy": "System Posix Syslog",
          "module": "System.Posix.Syslog",
          "name": "useSyslog",
          "normalized": "String-\u003eIO a-\u003eIO a",
          "package": "hsyslog",
          "partial": "Syslog",
          "signature": "String-\u003eIO a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsyslog/docs/System-Posix-Syslog.html#v:useSyslog"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBracket an \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e computation between calls to \u003ccode\u003e\u003ca\u003e_openlog\u003c/a\u003e\u003c/code\u003e\n and \u003ccode\u003e\u003ca\u003e_closelog\u003c/a\u003e\u003c/code\u003e. Since these settings are for the\n \u003cem\u003eprocess\u003c/em\u003e, multiple calls to this function will,\n unfortunately, overwrite each other.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e main = withSyslog \"my-ident\" [PID, PERROR] USER $ do\n          putStrLn \"huhu\"\n          syslog Debug \"huhu\"\n\u003c/pre\u003e",
          "module": "System.Posix.Syslog",
          "name": "withSyslog",
          "package": "hsyslog",
          "signature": "String -\u003e [Option] -\u003e Facility -\u003e IO a -\u003e IO a",
          "source": "src/System-Posix-Syslog.html#withSyslog",
          "type": "function"
        },
        "index": {
          "description": "Bracket an IO computation between calls to openlog and closelog Since these settings are for the process multiple calls to this function will unfortunately overwrite each other Example main withSyslog my-ident PID PERROR USER do putStrLn huhu syslog Debug huhu",
          "hierarchy": "System Posix Syslog",
          "module": "System.Posix.Syslog",
          "name": "withSyslog",
          "normalized": "String-\u003e[Option]-\u003eFacility-\u003eIO a-\u003eIO a",
          "package": "hsyslog",
          "partial": "Syslog",
          "signature": "String-\u003e[Option]-\u003eFacility-\u003eIO a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsyslog/docs/System-Posix-Syslog.html#v:withSyslog"
      }
    }
  ]
]