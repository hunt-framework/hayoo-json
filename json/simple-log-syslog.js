[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-log-syslog/docs/System-Log-Simple-Syslog.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eModule provides syslog logger for simple-log\n\u003c/p\u003e\u003cpre\u003eyourFunction :: MonadLog m =\u003e m ()\nyourFunction = scope \"your\" $ log Trace \"Hello\"\n\nrun :: IO ()\nrun = do\n    l \u003c- newLog (fileCfg \"log.cfg\" 60) [syslog \"name\"]\n    withLog l yourFunction\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "System.Log.Simple.Syslog",
        "fct-package": "simple-log-syslog",
        "fct-signature": "module",
        "fct-source": "src/System-Log-Simple-Syslog.html",
        "fct-type": "module",
        "title": "Syslog"
      },
      "index": {
        "description": "Module provides syslog logger for simple-log yourFunction MonadLog yourFunction scope your log Trace Hello run IO run do newLog fileCfg log.cfg syslog name withLog yourFunction",
        "hierarchy": "System Log Simple Syslog",
        "module": "System.Log.Simple.Syslog",
        "name": "Syslog",
        "normalized": "",
        "package": "simple-log-syslog",
        "partial": "Syslog",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-log-syslog/docs/System-Log-Simple-Syslog.html#t:Facility",
      "description": {
        "fct-descr": "\u003cp\u003eSyslog distinguishes various system facilities. Most\n applications should log in \u003ccode\u003e\u003ca\u003eUSER\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Log.Simple.Syslog",
        "fct-package": "simple-log-syslog",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Facility"
      },
      "index": {
        "description": "Syslog distinguishes various system facilities Most applications should log in USER",
        "hierarchy": "System Log Simple Syslog",
        "module": "System.Log.Simple.Syslog",
        "name": "Facility",
        "normalized": "",
        "package": "simple-log-syslog",
        "partial": "Facility",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-log-syslog/docs/System-Log-Simple-Syslog.html#t:Option",
      "description": {
        "fct-descr": "\u003cp\u003eOptions for the syslog service. Set with \u003ccode\u003e\u003ca\u003ewithSyslog\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Log.Simple.Syslog",
        "fct-package": "simple-log-syslog",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Option"
      },
      "index": {
        "description": "Options for the syslog service Set with withSyslog",
        "hierarchy": "System Log Simple Syslog",
        "module": "System.Log.Simple.Syslog",
        "name": "Option",
        "normalized": "",
        "package": "simple-log-syslog",
        "partial": "Option",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-log-syslog/docs/System-Log-Simple-Syslog.html#t:SyslogMessage",
      "description": {
        "fct-module": "System.Log.Simple.Syslog",
        "fct-package": "simple-log-syslog",
        "fct-signature": "data",
        "fct-source": "src/System-Log-Simple-Syslog.html#SyslogMessage",
        "fct-type": "data",
        "title": "SyslogMessage"
      },
      "index": {
        "description": "",
        "hierarchy": "System Log Simple Syslog",
        "module": "System.Log.Simple.Syslog",
        "name": "SyslogMessage",
        "normalized": "",
        "package": "simple-log-syslog",
        "partial": "Syslog Message",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-log-syslog/docs/System-Log-Simple-Syslog.html#v:AUTH",
      "description": {
        "fct-descr": "\u003cp\u003esecurity/authorization messages\n\u003c/p\u003e",
        "fct-module": "System.Log.Simple.Syslog",
        "fct-package": "simple-log-syslog",
        "fct-signature": "AUTH",
        "fct-type": "function",
        "title": "AUTH"
      },
      "index": {
        "description": "security authorization messages",
        "hierarchy": "System Log Simple Syslog",
        "module": "System.Log.Simple.Syslog",
        "name": "AUTH",
        "normalized": "",
        "package": "simple-log-syslog",
        "partial": "AUTH",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-log-syslog/docs/System-Log-Simple-Syslog.html#v:AUTHPRIV",
      "description": {
        "fct-descr": "\u003cp\u003esecurity/authorization messages (effectively equals \u003ccode\u003e\u003ca\u003eAUTH\u003c/a\u003e\u003c/code\u003e on some systems)\n\u003c/p\u003e",
        "fct-module": "System.Log.Simple.Syslog",
        "fct-package": "simple-log-syslog",
        "fct-signature": "AUTHPRIV",
        "fct-type": "function",
        "title": "AUTHPRIV"
      },
      "index": {
        "description": "security authorization messages effectively equals AUTH on some systems",
        "hierarchy": "System Log Simple Syslog",
        "module": "System.Log.Simple.Syslog",
        "name": "AUTHPRIV",
        "normalized": "",
        "package": "simple-log-syslog",
        "partial": "AUTHPRIV",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-log-syslog/docs/System-Log-Simple-Syslog.html#v:CONS",
      "description": {
        "fct-descr": "\u003cp\u003elog on the console if errors in sending\n\u003c/p\u003e",
        "fct-module": "System.Log.Simple.Syslog",
        "fct-package": "simple-log-syslog",
        "fct-signature": "CONS",
        "fct-type": "function",
        "title": "CONS"
      },
      "index": {
        "description": "log on the console if errors in sending",
        "hierarchy": "System Log Simple Syslog",
        "module": "System.Log.Simple.Syslog",
        "name": "CONS",
        "normalized": "",
        "package": "simple-log-syslog",
        "partial": "CONS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-log-syslog/docs/System-Log-Simple-Syslog.html#v:CRON",
      "description": {
        "fct-descr": "\u003cp\u003eclock daemon\n\u003c/p\u003e",
        "fct-module": "System.Log.Simple.Syslog",
        "fct-package": "simple-log-syslog",
        "fct-signature": "CRON",
        "fct-type": "function",
        "title": "CRON"
      },
      "index": {
        "description": "clock daemon",
        "hierarchy": "System Log Simple Syslog",
        "module": "System.Log.Simple.Syslog",
        "name": "CRON",
        "normalized": "",
        "package": "simple-log-syslog",
        "partial": "CRON",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-log-syslog/docs/System-Log-Simple-Syslog.html#v:DAEMON",
      "description": {
        "fct-descr": "\u003cp\u003esystem daemons\n\u003c/p\u003e",
        "fct-module": "System.Log.Simple.Syslog",
        "fct-package": "simple-log-syslog",
        "fct-signature": "DAEMON",
        "fct-type": "function",
        "title": "DAEMON"
      },
      "index": {
        "description": "system daemons",
        "hierarchy": "System Log Simple Syslog",
        "module": "System.Log.Simple.Syslog",
        "name": "DAEMON",
        "normalized": "",
        "package": "simple-log-syslog",
        "partial": "DAEMON",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-log-syslog/docs/System-Log-Simple-Syslog.html#v:FTP",
      "description": {
        "fct-descr": "\u003cp\u003eftp daemon (effectively equals \u003ccode\u003e\u003ca\u003eDAEMON\u003c/a\u003e\u003c/code\u003e on some systems)\n\u003c/p\u003e",
        "fct-module": "System.Log.Simple.Syslog",
        "fct-package": "simple-log-syslog",
        "fct-signature": "FTP",
        "fct-type": "function",
        "title": "FTP"
      },
      "index": {
        "description": "ftp daemon effectively equals DAEMON on some systems",
        "hierarchy": "System Log Simple Syslog",
        "module": "System.Log.Simple.Syslog",
        "name": "FTP",
        "normalized": "",
        "package": "simple-log-syslog",
        "partial": "FTP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-log-syslog/docs/System-Log-Simple-Syslog.html#v:KERN",
      "description": {
        "fct-descr": "\u003cp\u003ekernel messages\n\u003c/p\u003e",
        "fct-module": "System.Log.Simple.Syslog",
        "fct-package": "simple-log-syslog",
        "fct-signature": "KERN",
        "fct-type": "function",
        "title": "KERN"
      },
      "index": {
        "description": "kernel messages",
        "hierarchy": "System Log Simple Syslog",
        "module": "System.Log.Simple.Syslog",
        "name": "KERN",
        "normalized": "",
        "package": "simple-log-syslog",
        "partial": "KERN",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-log-syslog/docs/System-Log-Simple-Syslog.html#v:LOCAL0",
      "description": {
        "fct-descr": "\u003cp\u003ereserved for local use\n\u003c/p\u003e",
        "fct-module": "System.Log.Simple.Syslog",
        "fct-package": "simple-log-syslog",
        "fct-signature": "LOCAL0",
        "fct-type": "function",
        "title": "LOCAL0"
      },
      "index": {
        "description": "reserved for local use",
        "hierarchy": "System Log Simple Syslog",
        "module": "System.Log.Simple.Syslog",
        "name": "LOCAL0",
        "normalized": "",
        "package": "simple-log-syslog",
        "partial": "LOCAL",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-log-syslog/docs/System-Log-Simple-Syslog.html#v:LOCAL1",
      "description": {
        "fct-descr": "\u003cp\u003ereserved for local use\n\u003c/p\u003e",
        "fct-module": "System.Log.Simple.Syslog",
        "fct-package": "simple-log-syslog",
        "fct-signature": "LOCAL1",
        "fct-type": "function",
        "title": "LOCAL1"
      },
      "index": {
        "description": "reserved for local use",
        "hierarchy": "System Log Simple Syslog",
        "module": "System.Log.Simple.Syslog",
        "name": "LOCAL1",
        "normalized": "",
        "package": "simple-log-syslog",
        "partial": "LOCAL",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-log-syslog/docs/System-Log-Simple-Syslog.html#v:LOCAL2",
      "description": {
        "fct-descr": "\u003cp\u003ereserved for local use\n\u003c/p\u003e",
        "fct-module": "System.Log.Simple.Syslog",
        "fct-package": "simple-log-syslog",
        "fct-signature": "LOCAL2",
        "fct-type": "function",
        "title": "LOCAL2"
      },
      "index": {
        "description": "reserved for local use",
        "hierarchy": "System Log Simple Syslog",
        "module": "System.Log.Simple.Syslog",
        "name": "LOCAL2",
        "normalized": "",
        "package": "simple-log-syslog",
        "partial": "LOCAL",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-log-syslog/docs/System-Log-Simple-Syslog.html#v:LOCAL3",
      "description": {
        "fct-descr": "\u003cp\u003ereserved for local use\n\u003c/p\u003e",
        "fct-module": "System.Log.Simple.Syslog",
        "fct-package": "simple-log-syslog",
        "fct-signature": "LOCAL3",
        "fct-type": "function",
        "title": "LOCAL3"
      },
      "index": {
        "description": "reserved for local use",
        "hierarchy": "System Log Simple Syslog",
        "module": "System.Log.Simple.Syslog",
        "name": "LOCAL3",
        "normalized": "",
        "package": "simple-log-syslog",
        "partial": "LOCAL",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-log-syslog/docs/System-Log-Simple-Syslog.html#v:LOCAL4",
      "description": {
        "fct-descr": "\u003cp\u003ereserved for local use\n\u003c/p\u003e",
        "fct-module": "System.Log.Simple.Syslog",
        "fct-package": "simple-log-syslog",
        "fct-signature": "LOCAL4",
        "fct-type": "function",
        "title": "LOCAL4"
      },
      "index": {
        "description": "reserved for local use",
        "hierarchy": "System Log Simple Syslog",
        "module": "System.Log.Simple.Syslog",
        "name": "LOCAL4",
        "normalized": "",
        "package": "simple-log-syslog",
        "partial": "LOCAL",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-log-syslog/docs/System-Log-Simple-Syslog.html#v:LOCAL5",
      "description": {
        "fct-descr": "\u003cp\u003ereserved for local use\n\u003c/p\u003e",
        "fct-module": "System.Log.Simple.Syslog",
        "fct-package": "simple-log-syslog",
        "fct-signature": "LOCAL5",
        "fct-type": "function",
        "title": "LOCAL5"
      },
      "index": {
        "description": "reserved for local use",
        "hierarchy": "System Log Simple Syslog",
        "module": "System.Log.Simple.Syslog",
        "name": "LOCAL5",
        "normalized": "",
        "package": "simple-log-syslog",
        "partial": "LOCAL",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-log-syslog/docs/System-Log-Simple-Syslog.html#v:LOCAL6",
      "description": {
        "fct-descr": "\u003cp\u003ereserved for local use\n\u003c/p\u003e",
        "fct-module": "System.Log.Simple.Syslog",
        "fct-package": "simple-log-syslog",
        "fct-signature": "LOCAL6",
        "fct-type": "function",
        "title": "LOCAL6"
      },
      "index": {
        "description": "reserved for local use",
        "hierarchy": "System Log Simple Syslog",
        "module": "System.Log.Simple.Syslog",
        "name": "LOCAL6",
        "normalized": "",
        "package": "simple-log-syslog",
        "partial": "LOCAL",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-log-syslog/docs/System-Log-Simple-Syslog.html#v:LOCAL7",
      "description": {
        "fct-descr": "\u003cp\u003ereserved for local use\n\u003c/p\u003e",
        "fct-module": "System.Log.Simple.Syslog",
        "fct-package": "simple-log-syslog",
        "fct-signature": "LOCAL7",
        "fct-type": "function",
        "title": "LOCAL7"
      },
      "index": {
        "description": "reserved for local use",
        "hierarchy": "System Log Simple Syslog",
        "module": "System.Log.Simple.Syslog",
        "name": "LOCAL7",
        "normalized": "",
        "package": "simple-log-syslog",
        "partial": "LOCAL",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-log-syslog/docs/System-Log-Simple-Syslog.html#v:LPR",
      "description": {
        "fct-descr": "\u003cp\u003eline printer subsystem\n\u003c/p\u003e",
        "fct-module": "System.Log.Simple.Syslog",
        "fct-package": "simple-log-syslog",
        "fct-signature": "LPR",
        "fct-type": "function",
        "title": "LPR"
      },
      "index": {
        "description": "line printer subsystem",
        "hierarchy": "System Log Simple Syslog",
        "module": "System.Log.Simple.Syslog",
        "name": "LPR",
        "normalized": "",
        "package": "simple-log-syslog",
        "partial": "LPR",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-log-syslog/docs/System-Log-Simple-Syslog.html#v:MAIL",
      "description": {
        "fct-descr": "\u003cp\u003email system\n\u003c/p\u003e",
        "fct-module": "System.Log.Simple.Syslog",
        "fct-package": "simple-log-syslog",
        "fct-signature": "MAIL",
        "fct-type": "function",
        "title": "MAIL"
      },
      "index": {
        "description": "mail system",
        "hierarchy": "System Log Simple Syslog",
        "module": "System.Log.Simple.Syslog",
        "name": "MAIL",
        "normalized": "",
        "package": "simple-log-syslog",
        "partial": "MAIL",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-log-syslog/docs/System-Log-Simple-Syslog.html#v:NDELAY",
      "description": {
        "fct-descr": "\u003cp\u003edon't delay open\n\u003c/p\u003e",
        "fct-module": "System.Log.Simple.Syslog",
        "fct-package": "simple-log-syslog",
        "fct-signature": "NDELAY",
        "fct-type": "function",
        "title": "NDELAY"
      },
      "index": {
        "description": "don delay open",
        "hierarchy": "System Log Simple Syslog",
        "module": "System.Log.Simple.Syslog",
        "name": "NDELAY",
        "normalized": "",
        "package": "simple-log-syslog",
        "partial": "NDELAY",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-log-syslog/docs/System-Log-Simple-Syslog.html#v:NEWS",
      "description": {
        "fct-descr": "\u003cp\u003enetwork news subsystem\n\u003c/p\u003e",
        "fct-module": "System.Log.Simple.Syslog",
        "fct-package": "simple-log-syslog",
        "fct-signature": "NEWS",
        "fct-type": "function",
        "title": "NEWS"
      },
      "index": {
        "description": "network news subsystem",
        "hierarchy": "System Log Simple Syslog",
        "module": "System.Log.Simple.Syslog",
        "name": "NEWS",
        "normalized": "",
        "package": "simple-log-syslog",
        "partial": "NEWS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-log-syslog/docs/System-Log-Simple-Syslog.html#v:NOWAIT",
      "description": {
        "fct-descr": "\u003cp\u003edon't wait for console forks: DEPRECATED\n\u003c/p\u003e",
        "fct-module": "System.Log.Simple.Syslog",
        "fct-package": "simple-log-syslog",
        "fct-signature": "NOWAIT",
        "fct-type": "function",
        "title": "NOWAIT"
      },
      "index": {
        "description": "don wait for console forks DEPRECATED",
        "hierarchy": "System Log Simple Syslog",
        "module": "System.Log.Simple.Syslog",
        "name": "NOWAIT",
        "normalized": "",
        "package": "simple-log-syslog",
        "partial": "NOWAIT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-log-syslog/docs/System-Log-Simple-Syslog.html#v:ODELAY",
      "description": {
        "fct-descr": "\u003cp\u003edelay open until first \u003ccode\u003esyslog()\u003c/code\u003e (default)\n\u003c/p\u003e",
        "fct-module": "System.Log.Simple.Syslog",
        "fct-package": "simple-log-syslog",
        "fct-signature": "ODELAY",
        "fct-type": "function",
        "title": "ODELAY"
      },
      "index": {
        "description": "delay open until first syslog default",
        "hierarchy": "System Log Simple Syslog",
        "module": "System.Log.Simple.Syslog",
        "name": "ODELAY",
        "normalized": "",
        "package": "simple-log-syslog",
        "partial": "ODELAY",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-log-syslog/docs/System-Log-Simple-Syslog.html#v:PERROR",
      "description": {
        "fct-descr": "\u003cp\u003elog to \u003ccode\u003e\u003ca\u003estderr\u003c/a\u003e\u003c/code\u003e as well (might be a no-op on some systems)\n\u003c/p\u003e",
        "fct-module": "System.Log.Simple.Syslog",
        "fct-package": "simple-log-syslog",
        "fct-signature": "PERROR",
        "fct-type": "function",
        "title": "PERROR"
      },
      "index": {
        "description": "log to stderr as well might be no-op on some systems",
        "hierarchy": "System Log Simple Syslog",
        "module": "System.Log.Simple.Syslog",
        "name": "PERROR",
        "normalized": "",
        "package": "simple-log-syslog",
        "partial": "PERROR",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-log-syslog/docs/System-Log-Simple-Syslog.html#v:PID",
      "description": {
        "fct-descr": "\u003cp\u003elog the pid with each message\n\u003c/p\u003e",
        "fct-module": "System.Log.Simple.Syslog",
        "fct-package": "simple-log-syslog",
        "fct-signature": "PID",
        "fct-type": "function",
        "title": "PID"
      },
      "index": {
        "description": "log the pid with each message",
        "hierarchy": "System Log Simple Syslog",
        "module": "System.Log.Simple.Syslog",
        "name": "PID",
        "normalized": "",
        "package": "simple-log-syslog",
        "partial": "PID",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-log-syslog/docs/System-Log-Simple-Syslog.html#v:SYSLOG",
      "description": {
        "fct-descr": "\u003cp\u003emessages generated internally by syslogd\n\u003c/p\u003e",
        "fct-module": "System.Log.Simple.Syslog",
        "fct-package": "simple-log-syslog",
        "fct-signature": "SYSLOG",
        "fct-type": "function",
        "title": "SYSLOG"
      },
      "index": {
        "description": "messages generated internally by syslogd",
        "hierarchy": "System Log Simple Syslog",
        "module": "System.Log.Simple.Syslog",
        "name": "SYSLOG",
        "normalized": "",
        "package": "simple-log-syslog",
        "partial": "SYSLOG",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-log-syslog/docs/System-Log-Simple-Syslog.html#v:SyslogMessage",
      "description": {
        "fct-module": "System.Log.Simple.Syslog",
        "fct-package": "simple-log-syslog",
        "fct-signature": "SyslogMessage",
        "fct-source": "src/System-Log-Simple-Syslog.html#SyslogMessage",
        "fct-type": "function",
        "title": "SyslogMessage"
      },
      "index": {
        "description": "",
        "hierarchy": "System Log Simple Syslog",
        "module": "System.Log.Simple.Syslog",
        "name": "SyslogMessage",
        "normalized": "",
        "package": "simple-log-syslog",
        "partial": "Syslog Message",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-log-syslog/docs/System-Log-Simple-Syslog.html#v:USER",
      "description": {
        "fct-descr": "\u003cp\u003euser-level messages (default unless set otherwise)\n\u003c/p\u003e",
        "fct-module": "System.Log.Simple.Syslog",
        "fct-package": "simple-log-syslog",
        "fct-signature": "USER",
        "fct-type": "function",
        "title": "USER"
      },
      "index": {
        "description": "user-level messages default unless set otherwise",
        "hierarchy": "System Log Simple Syslog",
        "module": "System.Log.Simple.Syslog",
        "name": "USER",
        "normalized": "",
        "package": "simple-log-syslog",
        "partial": "USER",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-log-syslog/docs/System-Log-Simple-Syslog.html#v:UUCP",
      "description": {
        "fct-descr": "\u003cp\u003eUUCP subsystem\n\u003c/p\u003e",
        "fct-module": "System.Log.Simple.Syslog",
        "fct-package": "simple-log-syslog",
        "fct-signature": "UUCP",
        "fct-type": "function",
        "title": "UUCP"
      },
      "index": {
        "description": "UUCP subsystem",
        "hierarchy": "System Log Simple Syslog",
        "module": "System.Log.Simple.Syslog",
        "name": "UUCP",
        "normalized": "",
        "package": "simple-log-syslog",
        "partial": "UUCP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-log-syslog/docs/System-Log-Simple-Syslog.html#v:syslog",
      "description": {
        "fct-module": "System.Log.Simple.Syslog",
        "fct-package": "simple-log-syslog",
        "fct-signature": "String -\u003e [Option] -\u003e Facility -\u003e Logger",
        "fct-source": "src/System-Log-Simple-Syslog.html#syslog",
        "fct-type": "function",
        "title": "syslog"
      },
      "index": {
        "description": "",
        "hierarchy": "System Log Simple Syslog",
        "module": "System.Log.Simple.Syslog",
        "name": "syslog",
        "normalized": "String-\u003e[Option]-\u003eFacility-\u003eLogger",
        "package": "simple-log-syslog",
        "partial": "",
        "signature": "String-\u003e[Option]-\u003eFacility-\u003eLogger"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-log-syslog/docs/System-Log-Simple-Syslog.html#v:syslogMessage",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "System.Log.Simple.Syslog",
        "fct-package": "simple-log-syslog",
        "fct-signature": "String",
        "fct-source": "src/System-Log-Simple-Syslog.html#SyslogMessage",
        "fct-type": "function",
        "title": "syslogMessage"
      },
      "index": {
        "description": "",
        "hierarchy": "System Log Simple Syslog",
        "module": "System.Log.Simple.Syslog",
        "name": "syslogMessage",
        "normalized": "",
        "package": "simple-log-syslog",
        "partial": "Message",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-log-syslog/docs/System-Log-Simple-Syslog.html#v:syslogMsg",
      "description": {
        "fct-module": "System.Log.Simple.Syslog",
        "fct-package": "simple-log-syslog",
        "fct-signature": "Converter SyslogMessage",
        "fct-source": "src/System-Log-Simple-Syslog.html#syslogMsg",
        "fct-type": "function",
        "title": "syslogMsg"
      },
      "index": {
        "description": "",
        "hierarchy": "System Log Simple Syslog",
        "module": "System.Log.Simple.Syslog",
        "name": "syslogMsg",
        "normalized": "",
        "package": "simple-log-syslog",
        "partial": "Msg",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-log-syslog/docs/System-Log-Simple-Syslog.html#v:syslogPriority",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "System.Log.Simple.Syslog",
        "fct-package": "simple-log-syslog",
        "fct-signature": "Priority",
        "fct-source": "src/System-Log-Simple-Syslog.html#SyslogMessage",
        "fct-type": "function",
        "title": "syslogPriority"
      },
      "index": {
        "description": "",
        "hierarchy": "System Log Simple Syslog",
        "module": "System.Log.Simple.Syslog",
        "name": "syslogPriority",
        "normalized": "",
        "package": "simple-log-syslog",
        "partial": "Priority",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-log-syslog/docs/System-Log-Simple-Syslog.html#v:syslog_",
      "description": {
        "fct-module": "System.Log.Simple.Syslog",
        "fct-package": "simple-log-syslog",
        "fct-signature": "String -\u003e Logger",
        "fct-source": "src/System-Log-Simple-Syslog.html#syslog_",
        "fct-type": "function",
        "title": "syslog_"
      },
      "index": {
        "description": "",
        "hierarchy": "System Log Simple Syslog",
        "module": "System.Log.Simple.Syslog",
        "name": "syslog_",
        "normalized": "String-\u003eLogger",
        "package": "simple-log-syslog",
        "partial": "",
        "signature": "String-\u003eLogger"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-log-syslog/docs/System-Log-Simple-Syslog.html#v:toSyslog",
      "description": {
        "fct-module": "System.Log.Simple.Syslog",
        "fct-package": "simple-log-syslog",
        "fct-signature": "String -\u003e [Option] -\u003e Facility -\u003e Consumer SyslogMessage",
        "fct-source": "src/System-Log-Simple-Syslog.html#toSyslog",
        "fct-type": "function",
        "title": "toSyslog"
      },
      "index": {
        "description": "",
        "hierarchy": "System Log Simple Syslog",
        "module": "System.Log.Simple.Syslog",
        "name": "toSyslog",
        "normalized": "String-\u003e[Option]-\u003eFacility-\u003eConsumer SyslogMessage",
        "package": "simple-log-syslog",
        "partial": "Syslog",
        "signature": "String-\u003e[Option]-\u003eFacility-\u003eConsumer SyslogMessage"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-log-syslog/docs/System-Log-Simple-Syslog.html#v:toSyslog_",
      "description": {
        "fct-module": "System.Log.Simple.Syslog",
        "fct-package": "simple-log-syslog",
        "fct-signature": "String -\u003e Consumer SyslogMessage",
        "fct-source": "src/System-Log-Simple-Syslog.html#toSyslog_",
        "fct-type": "function",
        "title": "toSyslog_"
      },
      "index": {
        "description": "",
        "hierarchy": "System Log Simple Syslog",
        "module": "System.Log.Simple.Syslog",
        "name": "toSyslog_",
        "normalized": "String-\u003eConsumer SyslogMessage",
        "package": "simple-log-syslog",
        "partial": "Syslog",
        "signature": "String-\u003eConsumer SyslogMessage"
      }
    }
  }
]