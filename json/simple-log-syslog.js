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
        "word": "simple-log-syslog"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eModule provides syslog logger for simple-log\n\u003c/p\u003e\u003cpre\u003eyourFunction :: MonadLog m =\u003e m ()\nyourFunction = scope \"your\" $ log Trace \"Hello\"\n\nrun :: IO ()\nrun = do\n    l \u003c- newLog (fileCfg \"log.cfg\" 60) [syslog \"name\"]\n    withLog l yourFunction\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "System.Log.Simple.Syslog",
          "name": "Syslog",
          "package": "simple-log-syslog",
          "source": "src/System-Log-Simple-Syslog.html",
          "type": "module"
        },
        "index": {
          "description": "Module provides syslog logger for simple-log yourFunction MonadLog yourFunction scope your log Trace Hello run IO run do newLog fileCfg log.cfg syslog name withLog yourFunction",
          "hierarchy": "System Log Simple Syslog",
          "module": "System.Log.Simple.Syslog",
          "name": "Syslog",
          "package": "simple-log-syslog",
          "partial": "Syslog",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/simple-log-syslog/docs/System-Log-Simple-Syslog.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSyslog distinguishes various system facilities. Most\n applications should log in \u003ccode\u003e\u003ca\u003eUSER\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Log.Simple.Syslog",
          "name": "Facility",
          "package": "simple-log-syslog",
          "type": "data"
        },
        "index": {
          "description": "Syslog distinguishes various system facilities Most applications should log in USER",
          "hierarchy": "System Log Simple Syslog",
          "module": "System.Log.Simple.Syslog",
          "name": "Facility",
          "package": "simple-log-syslog",
          "partial": "Facility",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/simple-log-syslog/docs/System-Log-Simple-Syslog.html#t:Facility"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOptions for the syslog service. Set with \u003ccode\u003e\u003ca\u003ewithSyslog\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Log.Simple.Syslog",
          "name": "Option",
          "package": "simple-log-syslog",
          "type": "data"
        },
        "index": {
          "description": "Options for the syslog service Set with withSyslog",
          "hierarchy": "System Log Simple Syslog",
          "module": "System.Log.Simple.Syslog",
          "name": "Option",
          "package": "simple-log-syslog",
          "partial": "Option",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/simple-log-syslog/docs/System-Log-Simple-Syslog.html#t:Option"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Log.Simple.Syslog",
          "name": "SyslogMessage",
          "package": "simple-log-syslog",
          "source": "src/System-Log-Simple-Syslog.html#SyslogMessage",
          "type": "data"
        },
        "index": {
          "hierarchy": "System Log Simple Syslog",
          "module": "System.Log.Simple.Syslog",
          "name": "SyslogMessage",
          "package": "simple-log-syslog",
          "partial": "Syslog Message",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/simple-log-syslog/docs/System-Log-Simple-Syslog.html#t:SyslogMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esecurity/authorization messages\n\u003c/p\u003e",
          "module": "System.Log.Simple.Syslog",
          "name": "AUTH",
          "package": "simple-log-syslog",
          "signature": "AUTH",
          "type": "function"
        },
        "index": {
          "description": "security authorization messages",
          "hierarchy": "System Log Simple Syslog",
          "module": "System.Log.Simple.Syslog",
          "name": "AUTH",
          "package": "simple-log-syslog",
          "partial": "AUTH",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-log-syslog/docs/System-Log-Simple-Syslog.html#v:AUTH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esecurity/authorization messages (effectively equals \u003ccode\u003e\u003ca\u003eAUTH\u003c/a\u003e\u003c/code\u003e on some systems)\n\u003c/p\u003e",
          "module": "System.Log.Simple.Syslog",
          "name": "AUTHPRIV",
          "package": "simple-log-syslog",
          "signature": "AUTHPRIV",
          "type": "function"
        },
        "index": {
          "description": "security authorization messages effectively equals AUTH on some systems",
          "hierarchy": "System Log Simple Syslog",
          "module": "System.Log.Simple.Syslog",
          "name": "AUTHPRIV",
          "package": "simple-log-syslog",
          "partial": "AUTHPRIV",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-log-syslog/docs/System-Log-Simple-Syslog.html#v:AUTHPRIV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elog on the console if errors in sending\n\u003c/p\u003e",
          "module": "System.Log.Simple.Syslog",
          "name": "CONS",
          "package": "simple-log-syslog",
          "signature": "CONS",
          "type": "function"
        },
        "index": {
          "description": "log on the console if errors in sending",
          "hierarchy": "System Log Simple Syslog",
          "module": "System.Log.Simple.Syslog",
          "name": "CONS",
          "package": "simple-log-syslog",
          "partial": "CONS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-log-syslog/docs/System-Log-Simple-Syslog.html#v:CONS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eclock daemon\n\u003c/p\u003e",
          "module": "System.Log.Simple.Syslog",
          "name": "CRON",
          "package": "simple-log-syslog",
          "signature": "CRON",
          "type": "function"
        },
        "index": {
          "description": "clock daemon",
          "hierarchy": "System Log Simple Syslog",
          "module": "System.Log.Simple.Syslog",
          "name": "CRON",
          "package": "simple-log-syslog",
          "partial": "CRON",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-log-syslog/docs/System-Log-Simple-Syslog.html#v:CRON"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esystem daemons\n\u003c/p\u003e",
          "module": "System.Log.Simple.Syslog",
          "name": "DAEMON",
          "package": "simple-log-syslog",
          "signature": "DAEMON",
          "type": "function"
        },
        "index": {
          "description": "system daemons",
          "hierarchy": "System Log Simple Syslog",
          "module": "System.Log.Simple.Syslog",
          "name": "DAEMON",
          "package": "simple-log-syslog",
          "partial": "DAEMON",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-log-syslog/docs/System-Log-Simple-Syslog.html#v:DAEMON"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eftp daemon (effectively equals \u003ccode\u003e\u003ca\u003eDAEMON\u003c/a\u003e\u003c/code\u003e on some systems)\n\u003c/p\u003e",
          "module": "System.Log.Simple.Syslog",
          "name": "FTP",
          "package": "simple-log-syslog",
          "signature": "FTP",
          "type": "function"
        },
        "index": {
          "description": "ftp daemon effectively equals DAEMON on some systems",
          "hierarchy": "System Log Simple Syslog",
          "module": "System.Log.Simple.Syslog",
          "name": "FTP",
          "package": "simple-log-syslog",
          "partial": "FTP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-log-syslog/docs/System-Log-Simple-Syslog.html#v:FTP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ekernel messages\n\u003c/p\u003e",
          "module": "System.Log.Simple.Syslog",
          "name": "KERN",
          "package": "simple-log-syslog",
          "signature": "KERN",
          "type": "function"
        },
        "index": {
          "description": "kernel messages",
          "hierarchy": "System Log Simple Syslog",
          "module": "System.Log.Simple.Syslog",
          "name": "KERN",
          "package": "simple-log-syslog",
          "partial": "KERN",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-log-syslog/docs/System-Log-Simple-Syslog.html#v:KERN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ereserved for local use\n\u003c/p\u003e",
          "module": "System.Log.Simple.Syslog",
          "name": "LOCAL0",
          "package": "simple-log-syslog",
          "signature": "LOCAL0",
          "type": "function"
        },
        "index": {
          "description": "reserved for local use",
          "hierarchy": "System Log Simple Syslog",
          "module": "System.Log.Simple.Syslog",
          "name": "LOCAL0",
          "package": "simple-log-syslog",
          "partial": "LOCAL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-log-syslog/docs/System-Log-Simple-Syslog.html#v:LOCAL0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ereserved for local use\n\u003c/p\u003e",
          "module": "System.Log.Simple.Syslog",
          "name": "LOCAL1",
          "package": "simple-log-syslog",
          "signature": "LOCAL1",
          "type": "function"
        },
        "index": {
          "description": "reserved for local use",
          "hierarchy": "System Log Simple Syslog",
          "module": "System.Log.Simple.Syslog",
          "name": "LOCAL1",
          "package": "simple-log-syslog",
          "partial": "LOCAL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-log-syslog/docs/System-Log-Simple-Syslog.html#v:LOCAL1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ereserved for local use\n\u003c/p\u003e",
          "module": "System.Log.Simple.Syslog",
          "name": "LOCAL2",
          "package": "simple-log-syslog",
          "signature": "LOCAL2",
          "type": "function"
        },
        "index": {
          "description": "reserved for local use",
          "hierarchy": "System Log Simple Syslog",
          "module": "System.Log.Simple.Syslog",
          "name": "LOCAL2",
          "package": "simple-log-syslog",
          "partial": "LOCAL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-log-syslog/docs/System-Log-Simple-Syslog.html#v:LOCAL2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ereserved for local use\n\u003c/p\u003e",
          "module": "System.Log.Simple.Syslog",
          "name": "LOCAL3",
          "package": "simple-log-syslog",
          "signature": "LOCAL3",
          "type": "function"
        },
        "index": {
          "description": "reserved for local use",
          "hierarchy": "System Log Simple Syslog",
          "module": "System.Log.Simple.Syslog",
          "name": "LOCAL3",
          "package": "simple-log-syslog",
          "partial": "LOCAL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-log-syslog/docs/System-Log-Simple-Syslog.html#v:LOCAL3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ereserved for local use\n\u003c/p\u003e",
          "module": "System.Log.Simple.Syslog",
          "name": "LOCAL4",
          "package": "simple-log-syslog",
          "signature": "LOCAL4",
          "type": "function"
        },
        "index": {
          "description": "reserved for local use",
          "hierarchy": "System Log Simple Syslog",
          "module": "System.Log.Simple.Syslog",
          "name": "LOCAL4",
          "package": "simple-log-syslog",
          "partial": "LOCAL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-log-syslog/docs/System-Log-Simple-Syslog.html#v:LOCAL4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ereserved for local use\n\u003c/p\u003e",
          "module": "System.Log.Simple.Syslog",
          "name": "LOCAL5",
          "package": "simple-log-syslog",
          "signature": "LOCAL5",
          "type": "function"
        },
        "index": {
          "description": "reserved for local use",
          "hierarchy": "System Log Simple Syslog",
          "module": "System.Log.Simple.Syslog",
          "name": "LOCAL5",
          "package": "simple-log-syslog",
          "partial": "LOCAL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-log-syslog/docs/System-Log-Simple-Syslog.html#v:LOCAL5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ereserved for local use\n\u003c/p\u003e",
          "module": "System.Log.Simple.Syslog",
          "name": "LOCAL6",
          "package": "simple-log-syslog",
          "signature": "LOCAL6",
          "type": "function"
        },
        "index": {
          "description": "reserved for local use",
          "hierarchy": "System Log Simple Syslog",
          "module": "System.Log.Simple.Syslog",
          "name": "LOCAL6",
          "package": "simple-log-syslog",
          "partial": "LOCAL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-log-syslog/docs/System-Log-Simple-Syslog.html#v:LOCAL6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ereserved for local use\n\u003c/p\u003e",
          "module": "System.Log.Simple.Syslog",
          "name": "LOCAL7",
          "package": "simple-log-syslog",
          "signature": "LOCAL7",
          "type": "function"
        },
        "index": {
          "description": "reserved for local use",
          "hierarchy": "System Log Simple Syslog",
          "module": "System.Log.Simple.Syslog",
          "name": "LOCAL7",
          "package": "simple-log-syslog",
          "partial": "LOCAL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-log-syslog/docs/System-Log-Simple-Syslog.html#v:LOCAL7"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eline printer subsystem\n\u003c/p\u003e",
          "module": "System.Log.Simple.Syslog",
          "name": "LPR",
          "package": "simple-log-syslog",
          "signature": "LPR",
          "type": "function"
        },
        "index": {
          "description": "line printer subsystem",
          "hierarchy": "System Log Simple Syslog",
          "module": "System.Log.Simple.Syslog",
          "name": "LPR",
          "package": "simple-log-syslog",
          "partial": "LPR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-log-syslog/docs/System-Log-Simple-Syslog.html#v:LPR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003email system\n\u003c/p\u003e",
          "module": "System.Log.Simple.Syslog",
          "name": "MAIL",
          "package": "simple-log-syslog",
          "signature": "MAIL",
          "type": "function"
        },
        "index": {
          "description": "mail system",
          "hierarchy": "System Log Simple Syslog",
          "module": "System.Log.Simple.Syslog",
          "name": "MAIL",
          "package": "simple-log-syslog",
          "partial": "MAIL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-log-syslog/docs/System-Log-Simple-Syslog.html#v:MAIL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edon't delay open\n\u003c/p\u003e",
          "module": "System.Log.Simple.Syslog",
          "name": "NDELAY",
          "package": "simple-log-syslog",
          "signature": "NDELAY",
          "type": "function"
        },
        "index": {
          "description": "don delay open",
          "hierarchy": "System Log Simple Syslog",
          "module": "System.Log.Simple.Syslog",
          "name": "NDELAY",
          "package": "simple-log-syslog",
          "partial": "NDELAY",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-log-syslog/docs/System-Log-Simple-Syslog.html#v:NDELAY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003enetwork news subsystem\n\u003c/p\u003e",
          "module": "System.Log.Simple.Syslog",
          "name": "NEWS",
          "package": "simple-log-syslog",
          "signature": "NEWS",
          "type": "function"
        },
        "index": {
          "description": "network news subsystem",
          "hierarchy": "System Log Simple Syslog",
          "module": "System.Log.Simple.Syslog",
          "name": "NEWS",
          "package": "simple-log-syslog",
          "partial": "NEWS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-log-syslog/docs/System-Log-Simple-Syslog.html#v:NEWS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edon't wait for console forks: DEPRECATED\n\u003c/p\u003e",
          "module": "System.Log.Simple.Syslog",
          "name": "NOWAIT",
          "package": "simple-log-syslog",
          "signature": "NOWAIT",
          "type": "function"
        },
        "index": {
          "description": "don wait for console forks DEPRECATED",
          "hierarchy": "System Log Simple Syslog",
          "module": "System.Log.Simple.Syslog",
          "name": "NOWAIT",
          "package": "simple-log-syslog",
          "partial": "NOWAIT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-log-syslog/docs/System-Log-Simple-Syslog.html#v:NOWAIT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edelay open until first \u003ccode\u003esyslog()\u003c/code\u003e (default)\n\u003c/p\u003e",
          "module": "System.Log.Simple.Syslog",
          "name": "ODELAY",
          "package": "simple-log-syslog",
          "signature": "ODELAY",
          "type": "function"
        },
        "index": {
          "description": "delay open until first syslog default",
          "hierarchy": "System Log Simple Syslog",
          "module": "System.Log.Simple.Syslog",
          "name": "ODELAY",
          "package": "simple-log-syslog",
          "partial": "ODELAY",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-log-syslog/docs/System-Log-Simple-Syslog.html#v:ODELAY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elog to \u003ccode\u003e\u003ca\u003estderr\u003c/a\u003e\u003c/code\u003e as well (might be a no-op on some systems)\n\u003c/p\u003e",
          "module": "System.Log.Simple.Syslog",
          "name": "PERROR",
          "package": "simple-log-syslog",
          "signature": "PERROR",
          "type": "function"
        },
        "index": {
          "description": "log to stderr as well might be no-op on some systems",
          "hierarchy": "System Log Simple Syslog",
          "module": "System.Log.Simple.Syslog",
          "name": "PERROR",
          "package": "simple-log-syslog",
          "partial": "PERROR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-log-syslog/docs/System-Log-Simple-Syslog.html#v:PERROR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elog the pid with each message\n\u003c/p\u003e",
          "module": "System.Log.Simple.Syslog",
          "name": "PID",
          "package": "simple-log-syslog",
          "signature": "PID",
          "type": "function"
        },
        "index": {
          "description": "log the pid with each message",
          "hierarchy": "System Log Simple Syslog",
          "module": "System.Log.Simple.Syslog",
          "name": "PID",
          "package": "simple-log-syslog",
          "partial": "PID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-log-syslog/docs/System-Log-Simple-Syslog.html#v:PID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emessages generated internally by syslogd\n\u003c/p\u003e",
          "module": "System.Log.Simple.Syslog",
          "name": "SYSLOG",
          "package": "simple-log-syslog",
          "signature": "SYSLOG",
          "type": "function"
        },
        "index": {
          "description": "messages generated internally by syslogd",
          "hierarchy": "System Log Simple Syslog",
          "module": "System.Log.Simple.Syslog",
          "name": "SYSLOG",
          "package": "simple-log-syslog",
          "partial": "SYSLOG",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-log-syslog/docs/System-Log-Simple-Syslog.html#v:SYSLOG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Log.Simple.Syslog",
          "name": "SyslogMessage",
          "package": "simple-log-syslog",
          "signature": "SyslogMessage",
          "source": "src/System-Log-Simple-Syslog.html#SyslogMessage",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Log Simple Syslog",
          "module": "System.Log.Simple.Syslog",
          "name": "SyslogMessage",
          "package": "simple-log-syslog",
          "partial": "Syslog Message",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-log-syslog/docs/System-Log-Simple-Syslog.html#v:SyslogMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003euser-level messages (default unless set otherwise)\n\u003c/p\u003e",
          "module": "System.Log.Simple.Syslog",
          "name": "USER",
          "package": "simple-log-syslog",
          "signature": "USER",
          "type": "function"
        },
        "index": {
          "description": "user-level messages default unless set otherwise",
          "hierarchy": "System Log Simple Syslog",
          "module": "System.Log.Simple.Syslog",
          "name": "USER",
          "package": "simple-log-syslog",
          "partial": "USER",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-log-syslog/docs/System-Log-Simple-Syslog.html#v:USER"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUUCP subsystem\n\u003c/p\u003e",
          "module": "System.Log.Simple.Syslog",
          "name": "UUCP",
          "package": "simple-log-syslog",
          "signature": "UUCP",
          "type": "function"
        },
        "index": {
          "description": "UUCP subsystem",
          "hierarchy": "System Log Simple Syslog",
          "module": "System.Log.Simple.Syslog",
          "name": "UUCP",
          "package": "simple-log-syslog",
          "partial": "UUCP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-log-syslog/docs/System-Log-Simple-Syslog.html#v:UUCP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Log.Simple.Syslog",
          "name": "syslog",
          "package": "simple-log-syslog",
          "signature": "String -\u003e [Option] -\u003e Facility -\u003e Logger",
          "source": "src/System-Log-Simple-Syslog.html#syslog",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Log Simple Syslog",
          "module": "System.Log.Simple.Syslog",
          "name": "syslog",
          "normalized": "String-\u003e[Option]-\u003eFacility-\u003eLogger",
          "package": "simple-log-syslog",
          "signature": "String-\u003e[Option]-\u003eFacility-\u003eLogger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-log-syslog/docs/System-Log-Simple-Syslog.html#v:syslog"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Log.Simple.Syslog",
          "name": "syslogMessage",
          "package": "simple-log-syslog",
          "signature": "String",
          "source": "src/System-Log-Simple-Syslog.html#SyslogMessage",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Log Simple Syslog",
          "module": "System.Log.Simple.Syslog",
          "name": "syslogMessage",
          "package": "simple-log-syslog",
          "partial": "Message",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-log-syslog/docs/System-Log-Simple-Syslog.html#v:syslogMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Log.Simple.Syslog",
          "name": "syslogMsg",
          "package": "simple-log-syslog",
          "signature": "Converter SyslogMessage",
          "source": "src/System-Log-Simple-Syslog.html#syslogMsg",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Log Simple Syslog",
          "module": "System.Log.Simple.Syslog",
          "name": "syslogMsg",
          "package": "simple-log-syslog",
          "partial": "Msg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-log-syslog/docs/System-Log-Simple-Syslog.html#v:syslogMsg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Log.Simple.Syslog",
          "name": "syslogPriority",
          "package": "simple-log-syslog",
          "signature": "Priority",
          "source": "src/System-Log-Simple-Syslog.html#SyslogMessage",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Log Simple Syslog",
          "module": "System.Log.Simple.Syslog",
          "name": "syslogPriority",
          "package": "simple-log-syslog",
          "partial": "Priority",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-log-syslog/docs/System-Log-Simple-Syslog.html#v:syslogPriority"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Log.Simple.Syslog",
          "name": "syslog_",
          "package": "simple-log-syslog",
          "signature": "String -\u003e Logger",
          "source": "src/System-Log-Simple-Syslog.html#syslog_",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Log Simple Syslog",
          "module": "System.Log.Simple.Syslog",
          "name": "syslog_",
          "normalized": "String-\u003eLogger",
          "package": "simple-log-syslog",
          "signature": "String-\u003eLogger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-log-syslog/docs/System-Log-Simple-Syslog.html#v:syslog_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Log.Simple.Syslog",
          "name": "toSyslog",
          "package": "simple-log-syslog",
          "signature": "String -\u003e [Option] -\u003e Facility -\u003e Consumer SyslogMessage",
          "source": "src/System-Log-Simple-Syslog.html#toSyslog",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Log Simple Syslog",
          "module": "System.Log.Simple.Syslog",
          "name": "toSyslog",
          "normalized": "String-\u003e[Option]-\u003eFacility-\u003eConsumer SyslogMessage",
          "package": "simple-log-syslog",
          "partial": "Syslog",
          "signature": "String-\u003e[Option]-\u003eFacility-\u003eConsumer SyslogMessage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-log-syslog/docs/System-Log-Simple-Syslog.html#v:toSyslog"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Log.Simple.Syslog",
          "name": "toSyslog_",
          "package": "simple-log-syslog",
          "signature": "String -\u003e Consumer SyslogMessage",
          "source": "src/System-Log-Simple-Syslog.html#toSyslog_",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Log Simple Syslog",
          "module": "System.Log.Simple.Syslog",
          "name": "toSyslog_",
          "normalized": "String-\u003eConsumer SyslogMessage",
          "package": "simple-log-syslog",
          "partial": "Syslog",
          "signature": "String-\u003eConsumer SyslogMessage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-log-syslog/docs/System-Log-Simple-Syslog.html#v:toSyslog_"
      }
    }
  ]
]