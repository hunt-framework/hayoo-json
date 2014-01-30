[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/htsn-common/docs/Network-Services-TSN-Logging.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eProvide convenience functions for logging to the HSLogger \"root\"\n   logger.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.Services.TSN.Logging",
        "fct-package": "htsn-common",
        "fct-signature": "module",
        "fct-source": "src/Network-Services-TSN-Logging.html",
        "fct-type": "module",
        "title": "Logging"
      },
      "index": {
        "description": "Provide convenience functions for logging to the HSLogger root logger",
        "hierarchy": "Network Services TSN Logging",
        "module": "Network.Services.TSN.Logging",
        "name": "Logging",
        "normalized": "",
        "package": "htsn-common",
        "partial": "Logging",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/htsn-common/docs/Network-Services-TSN-Logging.html#v:init_logging",
      "description": {
        "fct-descr": "\u003cp\u003eSet up the logging. All logs are handled by the global \"root\"\n   logger provided by HSLogger. We remove all of its handlers so that\n it does nothing; then we conditionally add back two handlers -- one\n for syslog, and one for a normal file -- dependent upon the\n \u003ccode\u003esyslog\u003c/code\u003e and \u003ccode\u003elog_file\u003c/code\u003e arguments.\n\u003c/p\u003e\u003cp\u003eIf \u003ccode\u003esyslog\u003c/code\u003e is \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003elog_file\u003c/code\u003e is \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e; then nothing\n   will be logged and the \u003ccode\u003elog_level\u003c/code\u003e will essentially be ignored\n   (even though the root logger will have its level set).\n\u003c/p\u003e",
        "fct-module": "Network.Services.TSN.Logging",
        "fct-package": "htsn-common",
        "fct-signature": "Priority-\u003e Maybe FilePath-\u003e Bool-\u003e IO ()",
        "fct-type": "function",
        "title": "init_logging"
      },
      "index": {
        "description": "Set up the logging All logs are handled by the global root logger provided by HSLogger We remove all of its handlers so that it does nothing then we conditionally add back two handlers one for syslog and one for normal file dependent upon the syslog and log file arguments If syslog is False and log file is Nothing then nothing will be logged and the log level will essentially be ignored even though the root logger will have its level set",
        "hierarchy": "Network Services TSN Logging",
        "module": "Network.Services.TSN.Logging",
        "name": "init_logging",
        "normalized": "Priority-\u003eMaybe FilePath-\u003eBool-\u003eIO()",
        "package": "htsn-common",
        "partial": "",
        "signature": "Priority-\u003eMaybe FilePath-\u003eBool-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/htsn-common/docs/Network-Services-TSN-Logging.html#v:log_debug",
      "description": {
        "fct-descr": "\u003cp\u003eLog a message at the \u003ccode\u003eDEBUG\u003c/code\u003e level.\n\u003c/p\u003e",
        "fct-module": "Network.Services.TSN.Logging",
        "fct-package": "htsn-common",
        "fct-signature": "String -\u003e IO ()",
        "fct-source": "src/Network-Services-TSN-Logging.html#log_debug",
        "fct-type": "function",
        "title": "log_debug"
      },
      "index": {
        "description": "Log message at the DEBUG level",
        "hierarchy": "Network Services TSN Logging",
        "module": "Network.Services.TSN.Logging",
        "name": "log_debug",
        "normalized": "String-\u003eIO()",
        "package": "htsn-common",
        "partial": "",
        "signature": "String-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/htsn-common/docs/Network-Services-TSN-Logging.html#v:log_error",
      "description": {
        "fct-descr": "\u003cp\u003eLog a message at the \u003ccode\u003eERROR\u003c/code\u003e level.\n\u003c/p\u003e",
        "fct-module": "Network.Services.TSN.Logging",
        "fct-package": "htsn-common",
        "fct-signature": "String -\u003e IO ()",
        "fct-source": "src/Network-Services-TSN-Logging.html#log_error",
        "fct-type": "function",
        "title": "log_error"
      },
      "index": {
        "description": "Log message at the ERROR level",
        "hierarchy": "Network Services TSN Logging",
        "module": "Network.Services.TSN.Logging",
        "name": "log_error",
        "normalized": "String-\u003eIO()",
        "package": "htsn-common",
        "partial": "",
        "signature": "String-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/htsn-common/docs/Network-Services-TSN-Logging.html#v:log_info",
      "description": {
        "fct-descr": "\u003cp\u003eLog a message at the \u003ccode\u003e\u003ca\u003eINFO\u003c/a\u003e\u003c/code\u003e level.\n\u003c/p\u003e",
        "fct-module": "Network.Services.TSN.Logging",
        "fct-package": "htsn-common",
        "fct-signature": "String -\u003e IO ()",
        "fct-source": "src/Network-Services-TSN-Logging.html#log_info",
        "fct-type": "function",
        "title": "log_info"
      },
      "index": {
        "description": "Log message at the INFO level",
        "hierarchy": "Network Services TSN Logging",
        "module": "Network.Services.TSN.Logging",
        "name": "log_info",
        "normalized": "String-\u003eIO()",
        "package": "htsn-common",
        "partial": "",
        "signature": "String-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/htsn-common/docs/Network-Services-TSN-Logging.html#v:log_warning",
      "description": {
        "fct-descr": "\u003cp\u003eLog a message at the \u003ccode\u003eWARNING\u003c/code\u003e level.\n\u003c/p\u003e",
        "fct-module": "Network.Services.TSN.Logging",
        "fct-package": "htsn-common",
        "fct-signature": "String -\u003e IO ()",
        "fct-source": "src/Network-Services-TSN-Logging.html#log_warning",
        "fct-type": "function",
        "title": "log_warning"
      },
      "index": {
        "description": "Log message at the WARNING level",
        "hierarchy": "Network Services TSN Logging",
        "module": "Network.Services.TSN.Logging",
        "name": "log_warning",
        "normalized": "String-\u003eIO()",
        "package": "htsn-common",
        "partial": "",
        "signature": "String-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/htsn-common/docs/Network-Services-TSN-Report.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eConvenience functions for reporting (displaying and/or logging)\n   status messages.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.Services.TSN.Report",
        "fct-package": "htsn-common",
        "fct-signature": "module",
        "fct-source": "src/Network-Services-TSN-Report.html",
        "fct-type": "module",
        "title": "Report"
      },
      "index": {
        "description": "Convenience functions for reporting displaying and or logging status messages",
        "hierarchy": "Network Services TSN Report",
        "module": "Network.Services.TSN.Report",
        "name": "Report",
        "normalized": "",
        "package": "htsn-common",
        "partial": "Report",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/htsn-common/docs/Network-Services-TSN-Report.html#v:report_debug",
      "description": {
        "fct-descr": "\u003cp\u003eDisplay and log debug information. WARNING! This does not\n   automatically append a newline. The output is displayed/logged\n   as-is, for, you know, debug purposes.\n\u003c/p\u003e",
        "fct-module": "Network.Services.TSN.Report",
        "fct-package": "htsn-common",
        "fct-signature": "String -\u003e IO ()",
        "fct-source": "src/Network-Services-TSN-Report.html#report_debug",
        "fct-type": "function",
        "title": "report_debug"
      },
      "index": {
        "description": "Display and log debug information WARNING This does not automatically append newline The output is displayed logged as-is for you know debug purposes",
        "hierarchy": "Network Services TSN Report",
        "module": "Network.Services.TSN.Report",
        "name": "report_debug",
        "normalized": "String-\u003eIO()",
        "package": "htsn-common",
        "partial": "",
        "signature": "String-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/htsn-common/docs/Network-Services-TSN-Report.html#v:report_error",
      "description": {
        "fct-descr": "\u003cp\u003eDisplay and log an error condition. This will prefix the error\n   with \"ERROR: \" when displaying (but not logging) it so that it\n   stands out.\n\u003c/p\u003e",
        "fct-module": "Network.Services.TSN.Report",
        "fct-package": "htsn-common",
        "fct-signature": "String -\u003e IO ()",
        "fct-source": "src/Network-Services-TSN-Report.html#report_error",
        "fct-type": "function",
        "title": "report_error"
      },
      "index": {
        "description": "Display and log an error condition This will prefix the error with ERROR when displaying but not logging it so that it stands out",
        "hierarchy": "Network Services TSN Report",
        "module": "Network.Services.TSN.Report",
        "name": "report_error",
        "normalized": "String-\u003eIO()",
        "package": "htsn-common",
        "partial": "",
        "signature": "String-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/htsn-common/docs/Network-Services-TSN-Report.html#v:report_info",
      "description": {
        "fct-descr": "\u003cp\u003eDisplay and log an informational (status) message.\n\u003c/p\u003e",
        "fct-module": "Network.Services.TSN.Report",
        "fct-package": "htsn-common",
        "fct-signature": "String -\u003e IO ()",
        "fct-source": "src/Network-Services-TSN-Report.html#report_info",
        "fct-type": "function",
        "title": "report_info"
      },
      "index": {
        "description": "Display and log an informational status message",
        "hierarchy": "Network Services TSN Report",
        "module": "Network.Services.TSN.Report",
        "name": "report_info",
        "normalized": "String-\u003eIO()",
        "package": "htsn-common",
        "partial": "",
        "signature": "String-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/htsn-common/docs/Network-Services-TSN-Report.html#v:report_warning",
      "description": {
        "fct-descr": "\u003cp\u003eDisplay and log a warning. This will prefix the warning with\n   \"WARNING: \" when displaying (but not logging) it so that it\n   stands out.\n\u003c/p\u003e",
        "fct-module": "Network.Services.TSN.Report",
        "fct-package": "htsn-common",
        "fct-signature": "String -\u003e IO ()",
        "fct-source": "src/Network-Services-TSN-Report.html#report_warning",
        "fct-type": "function",
        "title": "report_warning"
      },
      "index": {
        "description": "Display and log warning This will prefix the warning with WARNING when displaying but not logging it so that it stands out",
        "hierarchy": "Network Services TSN Report",
        "module": "Network.Services.TSN.Report",
        "name": "report_warning",
        "normalized": "String-\u003eIO()",
        "package": "htsn-common",
        "partial": "",
        "signature": "String-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/htsn-common/docs/Network-Services-TSN-Terminal.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTerminal output functions for displaying informational\n   messages. The output is color-coded according to severity, and is\n   designed at the moment for consoles with a dark background.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.Services.TSN.Terminal",
        "fct-package": "htsn-common",
        "fct-signature": "module",
        "fct-source": "src/Network-Services-TSN-Terminal.html",
        "fct-type": "module",
        "title": "Terminal"
      },
      "index": {
        "description": "Terminal output functions for displaying informational messages The output is color-coded according to severity and is designed at the moment for consoles with dark background",
        "hierarchy": "Network Services TSN Terminal",
        "module": "Network.Services.TSN.Terminal",
        "name": "Terminal",
        "normalized": "",
        "package": "htsn-common",
        "partial": "Terminal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/htsn-common/docs/Network-Services-TSN-Terminal.html#v:display_debug",
      "description": {
        "fct-descr": "\u003cp\u003eDisplay debug text on the console. Don't automatically append a\n   newline in case the raw text is needed for, uh, debugging. The\n   text color is not altered.\n\u003c/p\u003e",
        "fct-module": "Network.Services.TSN.Terminal",
        "fct-package": "htsn-common",
        "fct-signature": "String -\u003e IO ()",
        "fct-source": "src/Network-Services-TSN-Terminal.html#display_debug",
        "fct-type": "function",
        "title": "display_debug"
      },
      "index": {
        "description": "Display debug text on the console Don automatically append newline in case the raw text is needed for uh debugging The text color is not altered",
        "hierarchy": "Network Services TSN Terminal",
        "module": "Network.Services.TSN.Terminal",
        "name": "display_debug",
        "normalized": "String-\u003eIO()",
        "package": "htsn-common",
        "partial": "",
        "signature": "String-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/htsn-common/docs/Network-Services-TSN-Terminal.html#v:display_error",
      "description": {
        "fct-descr": "\u003cp\u003eDisplay an error on the console in red. Uses stderr instead of\n   stdout.\n\u003c/p\u003e",
        "fct-module": "Network.Services.TSN.Terminal",
        "fct-package": "htsn-common",
        "fct-signature": "String -\u003e IO ()",
        "fct-source": "src/Network-Services-TSN-Terminal.html#display_error",
        "fct-type": "function",
        "title": "display_error"
      },
      "index": {
        "description": "Display an error on the console in red Uses stderr instead of stdout",
        "hierarchy": "Network Services TSN Terminal",
        "module": "Network.Services.TSN.Terminal",
        "name": "display_error",
        "normalized": "String-\u003eIO()",
        "package": "htsn-common",
        "partial": "",
        "signature": "String-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/htsn-common/docs/Network-Services-TSN-Terminal.html#v:display_info",
      "description": {
        "fct-descr": "\u003cp\u003eDisplay an informational message on the console in cyan.\n\u003c/p\u003e",
        "fct-module": "Network.Services.TSN.Terminal",
        "fct-package": "htsn-common",
        "fct-signature": "String -\u003e IO ()",
        "fct-source": "src/Network-Services-TSN-Terminal.html#display_info",
        "fct-type": "function",
        "title": "display_info"
      },
      "index": {
        "description": "Display an informational message on the console in cyan",
        "hierarchy": "Network Services TSN Terminal",
        "module": "Network.Services.TSN.Terminal",
        "name": "display_info",
        "normalized": "String-\u003eIO()",
        "package": "htsn-common",
        "partial": "",
        "signature": "String-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/htsn-common/docs/Network-Services-TSN-Terminal.html#v:display_sent",
      "description": {
        "fct-descr": "\u003cp\u003eDisplay text sent to the feed on the console. Don't automatically\n   append a newline.\n\u003c/p\u003e",
        "fct-module": "Network.Services.TSN.Terminal",
        "fct-package": "htsn-common",
        "fct-signature": "String -\u003e IO ()",
        "fct-source": "src/Network-Services-TSN-Terminal.html#display_sent",
        "fct-type": "function",
        "title": "display_sent"
      },
      "index": {
        "description": "Display text sent to the feed on the console Don automatically append newline",
        "hierarchy": "Network Services TSN Terminal",
        "module": "Network.Services.TSN.Terminal",
        "name": "display_sent",
        "normalized": "String-\u003eIO()",
        "package": "htsn-common",
        "partial": "",
        "signature": "String-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/htsn-common/docs/Network-Services-TSN-Terminal.html#v:display_warning",
      "description": {
        "fct-descr": "\u003cp\u003eDisplay a warning on the console in yello. Uses stderr instead of\n   stdout.\n\u003c/p\u003e",
        "fct-module": "Network.Services.TSN.Terminal",
        "fct-package": "htsn-common",
        "fct-signature": "String -\u003e IO ()",
        "fct-source": "src/Network-Services-TSN-Terminal.html#display_warning",
        "fct-type": "function",
        "title": "display_warning"
      },
      "index": {
        "description": "Display warning on the console in yello Uses stderr instead of stdout",
        "hierarchy": "Network Services TSN Terminal",
        "module": "Network.Services.TSN.Terminal",
        "name": "display_warning",
        "normalized": "String-\u003eIO()",
        "package": "htsn-common",
        "partial": "",
        "signature": "String-\u003eIO()"
      }
    }
  }
]