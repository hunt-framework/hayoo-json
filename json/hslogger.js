[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslogger/docs/System-Log-Formatter.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDefinition of log formatter support\n\u003c/p\u003e\u003cp\u003eA few basic, and extendable formatters are defined.\n\u003c/p\u003e\u003cp\u003ePlease see \u003ca\u003eSystem.Log.Logger\u003c/a\u003e for extensive documentation on the\nlogging system.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.Log.Formatter",
        "fct-package": "hslogger",
        "fct-signature": "module",
        "fct-source": "src/System-Log-Formatter.html",
        "fct-type": "module",
        "title": "Formatter"
      },
      "index": {
        "description": "Definition of log formatter support few basic and extendable formatters are defined Please see System.Log.Logger for extensive documentation on the logging system",
        "hierarchy": "System Log Formatter",
        "module": "System.Log.Formatter",
        "name": "Formatter",
        "normalized": "",
        "package": "hslogger",
        "partial": "Formatter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslogger/docs/System-Log-Formatter.html#t:LogFormatter",
      "description": {
        "fct-descr": "\u003cp\u003eA LogFormatter is used to format log messages.  Note that it is paramterized on the\n \u003ccode\u003eHandler\u003c/code\u003e to allow the formatter to use information specific to the handler\n (an example of can be seen in the formatter used in \u003ccode\u003e\u003ca\u003eSyslog\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e",
        "fct-module": "System.Log.Formatter",
        "fct-package": "hslogger",
        "fct-signature": "type",
        "fct-source": "src/System-Log-Formatter.html#LogFormatter",
        "fct-type": "type",
        "title": "LogFormatter"
      },
      "index": {
        "description": "LogFormatter is used to format log messages Note that it is paramterized on the Handler to allow the formatter to use information specific to the handler an example of can be seen in the formatter used in Syslog",
        "hierarchy": "System Log Formatter",
        "module": "System.Log.Formatter",
        "name": "LogFormatter",
        "normalized": "",
        "package": "hslogger",
        "partial": "Log Formatter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslogger/docs/System-Log-Formatter.html#v:nullFormatter",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the passed message as is, ie. no formatting is done.\n\u003c/p\u003e",
        "fct-module": "System.Log.Formatter",
        "fct-package": "hslogger",
        "fct-signature": "LogFormatter a",
        "fct-source": "src/System-Log-Formatter.html#nullFormatter",
        "fct-type": "function",
        "title": "nullFormatter"
      },
      "index": {
        "description": "Returns the passed message as is ie no formatting is done",
        "hierarchy": "System Log Formatter",
        "module": "System.Log.Formatter",
        "name": "nullFormatter",
        "normalized": "",
        "package": "hslogger",
        "partial": "Formatter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslogger/docs/System-Log-Formatter.html#v:simpleLogFormatter",
      "description": {
        "fct-descr": "\u003cp\u003eTakes a format string, and returns a formatter that may be used to\n   format log messages.  The format string may contain variables prefixed with\n   a $-sign which will be replaced at runtime with corresponding values.  The \n   currently supported variables are:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e$msg\u003c/code\u003e - The actual log message\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e$loggername\u003c/code\u003e - The name of the logger\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e$prio\u003c/code\u003e - The priority level of the message\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e$tid\u003c/code\u003e  - The thread ID\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e$pid\u003c/code\u003e  - Process ID  (Not available on windows)\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e$time\u003c/code\u003e - The current time \n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e$utcTime\u003c/code\u003e - The current time in UTC Time\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "System.Log.Formatter",
        "fct-package": "hslogger",
        "fct-signature": "String -\u003e LogFormatter a",
        "fct-source": "src/System-Log-Formatter.html#simpleLogFormatter",
        "fct-type": "function",
        "title": "simpleLogFormatter"
      },
      "index": {
        "description": "Takes format string and returns formatter that may be used to format log messages The format string may contain variables prefixed with sign which will be replaced at runtime with corresponding values The currently supported variables are msg The actual log message loggername The name of the logger prio The priority level of the message tid The thread ID pid Process ID Not available on windows time The current time utcTime The current time in UTC Time",
        "hierarchy": "System Log Formatter",
        "module": "System.Log.Formatter",
        "name": "simpleLogFormatter",
        "normalized": "String-\u003eLogFormatter a",
        "package": "hslogger",
        "partial": "Log Formatter",
        "signature": "String-\u003eLogFormatter a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslogger/docs/System-Log-Formatter.html#v:tfLogFormatter",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003esimpleLogFormatter\u003c/a\u003e\u003c/code\u003e but allow the time format to be specified in the first\n parameter (this is passed to \u003ccode\u003e\u003ca\u003eformatTime\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e",
        "fct-module": "System.Log.Formatter",
        "fct-package": "hslogger",
        "fct-signature": "String -\u003e String -\u003e LogFormatter a",
        "fct-source": "src/System-Log-Formatter.html#tfLogFormatter",
        "fct-type": "function",
        "title": "tfLogFormatter"
      },
      "index": {
        "description": "Like simpleLogFormatter but allow the time format to be specified in the first parameter this is passed to formatTime",
        "hierarchy": "System Log Formatter",
        "module": "System.Log.Formatter",
        "name": "tfLogFormatter",
        "normalized": "String-\u003eString-\u003eLogFormatter a",
        "package": "hslogger",
        "partial": "Log Formatter",
        "signature": "String-\u003eString-\u003eLogFormatter a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslogger/docs/System-Log-Formatter.html#v:varFormatter",
      "description": {
        "fct-descr": "\u003cp\u003eAn extensible formatter that allows new substition \u003cem\u003evariables\u003c/em\u003e to be defined.\n Each variable has an associated IO action that is used to produce the\n string to substitute for the variable name.  The predefined variables are the same\n as for \u003ccode\u003e\u003ca\u003esimpleLogFormatter\u003c/a\u003e\u003c/code\u003e \u003cem\u003eexcluding\u003c/em\u003e \u003ccode\u003e$time\u003c/code\u003e and \u003ccode\u003e$utcTime\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Log.Formatter",
        "fct-package": "hslogger",
        "fct-signature": "[(String, IO String)] -\u003e String -\u003e LogFormatter a",
        "fct-source": "src/System-Log-Formatter.html#varFormatter",
        "fct-type": "function",
        "title": "varFormatter"
      },
      "index": {
        "description": "An extensible formatter that allows new substition variables to be defined Each variable has an associated IO action that is used to produce the string to substitute for the variable name The predefined variables are the same as for simpleLogFormatter excluding time and utcTime",
        "hierarchy": "System Log Formatter",
        "module": "System.Log.Formatter",
        "name": "varFormatter",
        "normalized": "[(String,IO String)]-\u003eString-\u003eLogFormatter a",
        "package": "hslogger",
        "partial": "Formatter",
        "signature": "[(String,IO String)]-\u003eString-\u003eLogFormatter a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslogger/docs/System-Log-Handler-Growl.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSimple log handlers\n\u003c/p\u003e\u003cp\u003eWritten by Richard M. Neswold, Jr. rich.neswold@gmail.com\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.Log.Handler.Growl",
        "fct-package": "hslogger",
        "fct-signature": "module",
        "fct-source": "src/System-Log-Handler-Growl.html",
        "fct-type": "module",
        "title": "Growl"
      },
      "index": {
        "description": "Simple log handlers Written by Richard Neswold Jr rich.neswold@gmail.com",
        "hierarchy": "System Log Handler Growl",
        "module": "System.Log.Handler.Growl",
        "name": "Growl",
        "normalized": "",
        "package": "hslogger",
        "partial": "Growl",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslogger/docs/System-Log-Handler-Growl.html#v:addTarget",
      "description": {
        "fct-descr": "\u003cp\u003eAdds a remote machine's address to the list of targets that will\n     receive log messages. Calling this function sends a registration\n     packet to the machine. This function will throw an exception if\n     the host name cannot be found. \n\u003c/p\u003e",
        "fct-module": "System.Log.Handler.Growl",
        "fct-package": "hslogger",
        "fct-signature": "HostName -\u003e GrowlHandler -\u003e IO GrowlHandler",
        "fct-source": "src/System-Log-Handler-Growl.html#addTarget",
        "fct-type": "function",
        "title": "addTarget"
      },
      "index": {
        "description": "Adds remote machine address to the list of targets that will receive log messages Calling this function sends registration packet to the machine This function will throw an exception if the host name cannot be found",
        "hierarchy": "System Log Handler Growl",
        "module": "System.Log.Handler.Growl",
        "name": "addTarget",
        "normalized": "HostName-\u003eGrowlHandler-\u003eIO GrowlHandler",
        "package": "hslogger",
        "partial": "Target",
        "signature": "HostName-\u003eGrowlHandler-\u003eIO GrowlHandler"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslogger/docs/System-Log-Handler-Growl.html#v:growlHandler",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a Growl handler. Once a Growl handler has been created,\n     machines that are to receive the message have to be specified. \n\u003c/p\u003e",
        "fct-module": "System.Log.Handler.Growl",
        "fct-package": "hslogger",
        "fct-signature": "String-\u003e Priority-\u003e IO GrowlHandler",
        "fct-type": "function",
        "title": "growlHandler"
      },
      "index": {
        "description": "Creates Growl handler Once Growl handler has been created machines that are to receive the message have to be specified",
        "hierarchy": "System Log Handler Growl",
        "module": "System.Log.Handler.Growl",
        "name": "growlHandler",
        "normalized": "String-\u003ePriority-\u003eIO GrowlHandler",
        "package": "hslogger",
        "partial": "Handler",
        "signature": "String-\u003ePriority-\u003eIO GrowlHandler"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslogger/docs/System-Log-Handler-Log4jXML.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003elog4j[1] XMLLayout log handlers.\n\u003c/p\u003e\u003cp\u003eWritten by Bjorn Buckwalter, bjorn.buckwalter@gmail.com\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.Log.Handler.Log4jXML",
        "fct-package": "hslogger",
        "fct-signature": "module",
        "fct-source": "src/System-Log-Handler-Log4jXML.html",
        "fct-type": "module",
        "title": "Log4jXML"
      },
      "index": {
        "description": "log4j XMLLayout log handlers Written by Bjorn Buckwalter bjorn.buckwalter@gmail.com",
        "hierarchy": "System Log Handler Log4jXML",
        "module": "System.Log.Handler.Log4jXML",
        "name": "Log4jXML",
        "normalized": "",
        "package": "hslogger",
        "partial": "Log XML",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslogger/docs/System-Log-Handler-Log4jXML.html#v:log4jFileHandler",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a file log handler that uses hslogger priorities.\n\u003c/p\u003e",
        "fct-module": "System.Log.Handler.Log4jXML",
        "fct-package": "hslogger",
        "fct-signature": "FilePath -\u003e Priority -\u003e IO (GenericHandler Handle)",
        "fct-source": "src/System-Log-Handler-Log4jXML.html#log4jFileHandler",
        "fct-type": "function",
        "title": "log4jFileHandler"
      },
      "index": {
        "description": "Create file log handler that uses hslogger priorities",
        "hierarchy": "System Log Handler Log4jXML",
        "module": "System.Log.Handler.Log4jXML",
        "name": "log4jFileHandler",
        "normalized": "FilePath-\u003ePriority-\u003eIO(GenericHandler Handle)",
        "package": "hslogger",
        "partial": "File Handler",
        "signature": "FilePath-\u003ePriority-\u003eIO(GenericHandler Handle)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslogger/docs/System-Log-Handler-Log4jXML.html#v:log4jFileHandler-39-",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a file log handler that uses log4j levels (see\n   \u003ccode\u003e\u003ca\u003elog4jStreamHandler'\u003c/a\u003e\u003c/code\u003e for mappings). \n\u003c/p\u003e",
        "fct-module": "System.Log.Handler.Log4jXML",
        "fct-package": "hslogger",
        "fct-signature": "FilePath -\u003e Priority -\u003e IO (GenericHandler Handle)",
        "fct-source": "src/System-Log-Handler-Log4jXML.html#log4jFileHandler%27",
        "fct-type": "function",
        "title": "log4jFileHandler'"
      },
      "index": {
        "description": "Create file log handler that uses log4j levels see log4jStreamHandler for mappings",
        "hierarchy": "System Log Handler Log4jXML",
        "module": "System.Log.Handler.Log4jXML",
        "name": "log4jFileHandler'",
        "normalized": "FilePath-\u003ePriority-\u003eIO(GenericHandler Handle)",
        "package": "hslogger",
        "partial": "File Handler'",
        "signature": "FilePath-\u003ePriority-\u003eIO(GenericHandler Handle)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslogger/docs/System-Log-Handler-Log4jXML.html#v:log4jStreamHandler",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a stream log handler that uses hslogger priorities.\n\u003c/p\u003e",
        "fct-module": "System.Log.Handler.Log4jXML",
        "fct-package": "hslogger",
        "fct-signature": "Handle -\u003e Priority -\u003e IO (GenericHandler Handle)",
        "fct-source": "src/System-Log-Handler-Log4jXML.html#log4jStreamHandler",
        "fct-type": "function",
        "title": "log4jStreamHandler"
      },
      "index": {
        "description": "Create stream log handler that uses hslogger priorities",
        "hierarchy": "System Log Handler Log4jXML",
        "module": "System.Log.Handler.Log4jXML",
        "name": "log4jStreamHandler",
        "normalized": "Handle-\u003ePriority-\u003eIO(GenericHandler Handle)",
        "package": "hslogger",
        "partial": "Stream Handler",
        "signature": "Handle-\u003ePriority-\u003eIO(GenericHandler Handle)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslogger/docs/System-Log-Handler-Log4jXML.html#v:log4jStreamHandler-39-",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a stream log handler that uses log4j levels (priorities). The\n   priorities of messages are shoehorned into log4j levels as follows:\n\u003c/p\u003e\u003cpre\u003e\n    DEBUG                  -\u003e DEBUG\n    INFO, NOTICE           -\u003e INFO\n    WARNING                -\u003e WARN\n    ERROR, CRITICAL, ALERT -\u003e ERROR\n    EMERGENCY              -\u003e FATAL\n\u003c/pre\u003e\u003cp\u003eThis is useful when the log will only be consumed by log4j tools and\n   you don't want to go out of your way transforming the log or configuring\n   the tools. \n\u003c/p\u003e",
        "fct-module": "System.Log.Handler.Log4jXML",
        "fct-package": "hslogger",
        "fct-signature": "Handle -\u003e Priority -\u003e IO (GenericHandler Handle)",
        "fct-source": "src/System-Log-Handler-Log4jXML.html#log4jStreamHandler%27",
        "fct-type": "function",
        "title": "log4jStreamHandler'"
      },
      "index": {
        "description": "Create stream log handler that uses log4j levels priorities The priorities of messages are shoehorned into log4j levels as follows DEBUG DEBUG INFO NOTICE INFO WARNING WARN ERROR CRITICAL ALERT ERROR EMERGENCY FATAL This is useful when the log will only be consumed by log4j tools and you don want to go out of your way transforming the log or configuring the tools",
        "hierarchy": "System Log Handler Log4jXML",
        "module": "System.Log.Handler.Log4jXML",
        "name": "log4jStreamHandler'",
        "normalized": "Handle-\u003ePriority-\u003eIO(GenericHandler Handle)",
        "package": "hslogger",
        "partial": "Stream Handler'",
        "signature": "Handle-\u003ePriority-\u003eIO(GenericHandler Handle)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslogger/docs/System-Log-Handler-Simple.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSimple log handlers\n\u003c/p\u003e\u003cp\u003eWritten by John Goerzen, jgoerzen@complete.org\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.Log.Handler.Simple",
        "fct-package": "hslogger",
        "fct-signature": "module",
        "fct-source": "src/System-Log-Handler-Simple.html",
        "fct-type": "module",
        "title": "Simple"
      },
      "index": {
        "description": "Simple log handlers Written by John Goerzen jgoerzen@complete.org",
        "hierarchy": "System Log Handler Simple",
        "module": "System.Log.Handler.Simple",
        "name": "Simple",
        "normalized": "",
        "package": "hslogger",
        "partial": "Simple",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslogger/docs/System-Log-Handler-Simple.html#t:GenericHandler",
      "description": {
        "fct-descr": "\u003cp\u003eA helper data type. \n\u003c/p\u003e",
        "fct-module": "System.Log.Handler.Simple",
        "fct-package": "hslogger",
        "fct-signature": "data",
        "fct-source": "src/System-Log-Handler-Simple.html#GenericHandler",
        "fct-type": "data",
        "title": "GenericHandler"
      },
      "index": {
        "description": "helper data type",
        "hierarchy": "System Log Handler Simple",
        "module": "System.Log.Handler.Simple",
        "name": "GenericHandler",
        "normalized": "",
        "package": "hslogger",
        "partial": "Generic Handler",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslogger/docs/System-Log-Handler-Simple.html#v:GenericHandler",
      "description": {
        "fct-module": "System.Log.Handler.Simple",
        "fct-package": "hslogger",
        "fct-signature": "GenericHandler",
        "fct-source": "src/System-Log-Handler-Simple.html#GenericHandler",
        "fct-type": "function",
        "title": "GenericHandler"
      },
      "index": {
        "description": "",
        "hierarchy": "System Log Handler Simple",
        "module": "System.Log.Handler.Simple",
        "name": "GenericHandler",
        "normalized": "",
        "package": "hslogger",
        "partial": "Generic Handler",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslogger/docs/System-Log-Handler-Simple.html#v:closeFunc",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "System.Log.Handler.Simple",
        "fct-package": "hslogger",
        "fct-signature": "a -\u003e IO ()",
        "fct-source": "src/System-Log-Handler-Simple.html#GenericHandler",
        "fct-type": "function",
        "title": "closeFunc"
      },
      "index": {
        "description": "",
        "hierarchy": "System Log Handler Simple",
        "module": "System.Log.Handler.Simple",
        "name": "closeFunc",
        "normalized": "a-\u003eIO()",
        "package": "hslogger",
        "partial": "Func",
        "signature": "a-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslogger/docs/System-Log-Handler-Simple.html#v:fileHandler",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a file log handler.  Log messages sent to this handler\n   will be sent to the filename specified, which will be opened\n   in Append mode.  Calling \u003ccode\u003e\u003ca\u003eclose\u003c/a\u003e\u003c/code\u003e on the handler will close the file.\n\u003c/p\u003e",
        "fct-module": "System.Log.Handler.Simple",
        "fct-package": "hslogger",
        "fct-signature": "FilePath -\u003e Priority -\u003e IO (GenericHandler Handle)",
        "fct-source": "src/System-Log-Handler-Simple.html#fileHandler",
        "fct-type": "function",
        "title": "fileHandler"
      },
      "index": {
        "description": "Create file log handler Log messages sent to this handler will be sent to the filename specified which will be opened in Append mode Calling close on the handler will close the file",
        "hierarchy": "System Log Handler Simple",
        "module": "System.Log.Handler.Simple",
        "name": "fileHandler",
        "normalized": "FilePath-\u003ePriority-\u003eIO(GenericHandler Handle)",
        "package": "hslogger",
        "partial": "Handler",
        "signature": "FilePath-\u003ePriority-\u003eIO(GenericHandler Handle)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslogger/docs/System-Log-Handler-Simple.html#v:formatter",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "System.Log.Handler.Simple",
        "fct-package": "hslogger",
        "fct-signature": "LogFormatter (GenericHandler a)",
        "fct-source": "src/System-Log-Handler-Simple.html#GenericHandler",
        "fct-type": "function",
        "title": "formatter"
      },
      "index": {
        "description": "",
        "hierarchy": "System Log Handler Simple",
        "module": "System.Log.Handler.Simple",
        "name": "formatter",
        "normalized": "",
        "package": "hslogger",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslogger/docs/System-Log-Handler-Simple.html#v:priority",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "System.Log.Handler.Simple",
        "fct-package": "hslogger",
        "fct-signature": "Priority",
        "fct-source": "src/System-Log-Handler-Simple.html#GenericHandler",
        "fct-type": "function",
        "title": "priority"
      },
      "index": {
        "description": "",
        "hierarchy": "System Log Handler Simple",
        "module": "System.Log.Handler.Simple",
        "name": "priority",
        "normalized": "",
        "package": "hslogger",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslogger/docs/System-Log-Handler-Simple.html#v:privData",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "System.Log.Handler.Simple",
        "fct-package": "hslogger",
        "fct-signature": "a",
        "fct-source": "src/System-Log-Handler-Simple.html#GenericHandler",
        "fct-type": "function",
        "title": "privData"
      },
      "index": {
        "description": "",
        "hierarchy": "System Log Handler Simple",
        "module": "System.Log.Handler.Simple",
        "name": "privData",
        "normalized": "",
        "package": "hslogger",
        "partial": "Data",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslogger/docs/System-Log-Handler-Simple.html#v:streamHandler",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a stream log handler.  Log messages sent to this handler will\n   be sent to the stream used initially.  Note that the \u003ccode\u003e\u003ca\u003eclose\u003c/a\u003e\u003c/code\u003e method\n   will have no effect on stream handlers; it does not actually close\n   the underlying stream.  \n\u003c/p\u003e",
        "fct-module": "System.Log.Handler.Simple",
        "fct-package": "hslogger",
        "fct-signature": "Handle -\u003e Priority -\u003e IO (GenericHandler Handle)",
        "fct-source": "src/System-Log-Handler-Simple.html#streamHandler",
        "fct-type": "function",
        "title": "streamHandler"
      },
      "index": {
        "description": "Create stream log handler Log messages sent to this handler will be sent to the stream used initially Note that the close method will have no effect on stream handlers it does not actually close the underlying stream",
        "hierarchy": "System Log Handler Simple",
        "module": "System.Log.Handler.Simple",
        "name": "streamHandler",
        "normalized": "Handle-\u003ePriority-\u003eIO(GenericHandler Handle)",
        "package": "hslogger",
        "partial": "Handler",
        "signature": "Handle-\u003ePriority-\u003eIO(GenericHandler Handle)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslogger/docs/System-Log-Handler-Simple.html#v:verboseStreamHandler",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003estreamHandler\u003c/a\u003e\u003c/code\u003e, but note the priority and logger name along\nwith each message. \n\u003c/p\u003e",
        "fct-module": "System.Log.Handler.Simple",
        "fct-package": "hslogger",
        "fct-signature": "Handle -\u003e Priority -\u003e IO (GenericHandler Handle)",
        "fct-source": "src/System-Log-Handler-Simple.html#verboseStreamHandler",
        "fct-type": "function",
        "title": "verboseStreamHandler"
      },
      "index": {
        "description": "Like streamHandler but note the priority and logger name along with each message",
        "hierarchy": "System Log Handler Simple",
        "module": "System.Log.Handler.Simple",
        "name": "verboseStreamHandler",
        "normalized": "Handle-\u003ePriority-\u003eIO(GenericHandler Handle)",
        "package": "hslogger",
        "partial": "Stream Handler",
        "signature": "Handle-\u003ePriority-\u003eIO(GenericHandler Handle)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslogger/docs/System-Log-Handler-Simple.html#v:writeFunc",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "System.Log.Handler.Simple",
        "fct-package": "hslogger",
        "fct-signature": "a -\u003e String -\u003e IO ()",
        "fct-source": "src/System-Log-Handler-Simple.html#GenericHandler",
        "fct-type": "function",
        "title": "writeFunc"
      },
      "index": {
        "description": "",
        "hierarchy": "System Log Handler Simple",
        "module": "System.Log.Handler.Simple",
        "name": "writeFunc",
        "normalized": "a-\u003eString-\u003eIO()",
        "package": "hslogger",
        "partial": "Func",
        "signature": "a-\u003eString-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslogger/docs/System-Log-Handler-Syslog.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSyslog handler for the Haskell Logging Framework\n\u003c/p\u003e\u003cp\u003eWritten by John Goerzen, jgoerzen@complete.org\n\u003c/p\u003e\u003cp\u003eThis module implements an interface to the Syslog service commonly\nfound in Unix/Linux systems.  This interface is primarily of interest to\ndevelopers of servers, as Syslog does not typically display messages in\nan interactive fashion.\n\u003c/p\u003e\u003cp\u003eThis module is written in pure Haskell and is capable of logging to a local\nor remote machine using the Syslog protocol.\n\u003c/p\u003e\u003cp\u003eYou can create a new Syslog \u003ccode\u003e\u003ca\u003eLogHandler\u003c/a\u003e\u003c/code\u003e by calling \u003ccode\u003e\u003ca\u003eopenlog\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eMore information on the Haskell Logging Framework can be found at\n\u003ca\u003eSystem.Log.Logger\u003c/a\u003e.  This module can also be used outside\nof the rest of that framework for those interested in that.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.Log.Handler.Syslog",
        "fct-package": "hslogger",
        "fct-signature": "module",
        "fct-source": "src/System-Log-Handler-Syslog.html",
        "fct-type": "module",
        "title": "Syslog"
      },
      "index": {
        "description": "Syslog handler for the Haskell Logging Framework Written by John Goerzen jgoerzen@complete.org This module implements an interface to the Syslog service commonly found in Unix Linux systems This interface is primarily of interest to developers of servers as Syslog does not typically display messages in an interactive fashion This module is written in pure Haskell and is capable of logging to local or remote machine using the Syslog protocol You can create new Syslog LogHandler by calling openlog More information on the Haskell Logging Framework can be found at System.Log.Logger This module can also be used outside of the rest of that framework for those interested in that",
        "hierarchy": "System Log Handler Syslog",
        "module": "System.Log.Handler.Syslog",
        "name": "Syslog",
        "normalized": "",
        "package": "hslogger",
        "partial": "Syslog",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslogger/docs/System-Log-Handler-Syslog.html#t:Facility",
      "description": {
        "fct-descr": "\u003cp\u003eFacilities are used by the system to determine where messages\nare sent. \n\u003c/p\u003e",
        "fct-module": "System.Log.Handler.Syslog",
        "fct-package": "hslogger",
        "fct-signature": "data",
        "fct-source": "src/System-Log-Handler-Syslog.html#Facility",
        "fct-type": "data",
        "title": "Facility"
      },
      "index": {
        "description": "Facilities are used by the system to determine where messages are sent",
        "hierarchy": "System Log Handler Syslog",
        "module": "System.Log.Handler.Syslog",
        "name": "Facility",
        "normalized": "",
        "package": "hslogger",
        "partial": "Facility",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslogger/docs/System-Log-Handler-Syslog.html#t:Option",
      "description": {
        "fct-descr": "\u003cp\u003eOptions for \u003ccode\u003e\u003ca\u003eopenlog\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
        "fct-module": "System.Log.Handler.Syslog",
        "fct-package": "hslogger",
        "fct-signature": "data",
        "fct-source": "src/System-Log-Handler-Syslog.html#Option",
        "fct-type": "data",
        "title": "Option"
      },
      "index": {
        "description": "Options for openlog",
        "hierarchy": "System Log Handler Syslog",
        "module": "System.Log.Handler.Syslog",
        "name": "Option",
        "normalized": "",
        "package": "hslogger",
        "partial": "Option",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslogger/docs/System-Log-Handler-Syslog.html#v:AUTH",
      "description": {
        "fct-descr": "\u003cp\u003eAuthentication or security messages\n\u003c/p\u003e",
        "fct-module": "System.Log.Handler.Syslog",
        "fct-package": "hslogger",
        "fct-signature": "AUTH",
        "fct-source": "src/System-Log-Handler-Syslog.html#Facility",
        "fct-type": "function",
        "title": "AUTH"
      },
      "index": {
        "description": "Authentication or security messages",
        "hierarchy": "System Log Handler Syslog",
        "module": "System.Log.Handler.Syslog",
        "name": "AUTH",
        "normalized": "",
        "package": "hslogger",
        "partial": "AUTH",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslogger/docs/System-Log-Handler-Syslog.html#v:AUTHPRIV",
      "description": {
        "fct-descr": "\u003cp\u003ePrivate authentication messages\n\u003c/p\u003e",
        "fct-module": "System.Log.Handler.Syslog",
        "fct-package": "hslogger",
        "fct-signature": "AUTHPRIV",
        "fct-source": "src/System-Log-Handler-Syslog.html#Facility",
        "fct-type": "function",
        "title": "AUTHPRIV"
      },
      "index": {
        "description": "Private authentication messages",
        "hierarchy": "System Log Handler Syslog",
        "module": "System.Log.Handler.Syslog",
        "name": "AUTHPRIV",
        "normalized": "",
        "package": "hslogger",
        "partial": "AUTHPRIV",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslogger/docs/System-Log-Handler-Syslog.html#v:CRON",
      "description": {
        "fct-descr": "\u003cp\u003eCron messages\n\u003c/p\u003e",
        "fct-module": "System.Log.Handler.Syslog",
        "fct-package": "hslogger",
        "fct-signature": "CRON",
        "fct-source": "src/System-Log-Handler-Syslog.html#Facility",
        "fct-type": "function",
        "title": "CRON"
      },
      "index": {
        "description": "Cron messages",
        "hierarchy": "System Log Handler Syslog",
        "module": "System.Log.Handler.Syslog",
        "name": "CRON",
        "normalized": "",
        "package": "hslogger",
        "partial": "CRON",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslogger/docs/System-Log-Handler-Syslog.html#v:DAEMON",
      "description": {
        "fct-descr": "\u003cp\u003eDaemon (server process) messages\n\u003c/p\u003e",
        "fct-module": "System.Log.Handler.Syslog",
        "fct-package": "hslogger",
        "fct-signature": "DAEMON",
        "fct-source": "src/System-Log-Handler-Syslog.html#Facility",
        "fct-type": "function",
        "title": "DAEMON"
      },
      "index": {
        "description": "Daemon server process messages",
        "hierarchy": "System Log Handler Syslog",
        "module": "System.Log.Handler.Syslog",
        "name": "DAEMON",
        "normalized": "",
        "package": "hslogger",
        "partial": "DAEMON",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslogger/docs/System-Log-Handler-Syslog.html#v:FTP",
      "description": {
        "fct-descr": "\u003cp\u003eFTP messages\n\u003c/p\u003e",
        "fct-module": "System.Log.Handler.Syslog",
        "fct-package": "hslogger",
        "fct-signature": "FTP",
        "fct-source": "src/System-Log-Handler-Syslog.html#Facility",
        "fct-type": "function",
        "title": "FTP"
      },
      "index": {
        "description": "FTP messages",
        "hierarchy": "System Log Handler Syslog",
        "module": "System.Log.Handler.Syslog",
        "name": "FTP",
        "normalized": "",
        "package": "hslogger",
        "partial": "FTP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslogger/docs/System-Log-Handler-Syslog.html#v:KERN",
      "description": {
        "fct-descr": "\u003cp\u003eKernel messages; you should likely never use this in your programs\n\u003c/p\u003e",
        "fct-module": "System.Log.Handler.Syslog",
        "fct-package": "hslogger",
        "fct-signature": "KERN",
        "fct-source": "src/System-Log-Handler-Syslog.html#Facility",
        "fct-type": "function",
        "title": "KERN"
      },
      "index": {
        "description": "Kernel messages you should likely never use this in your programs",
        "hierarchy": "System Log Handler Syslog",
        "module": "System.Log.Handler.Syslog",
        "name": "KERN",
        "normalized": "",
        "package": "hslogger",
        "partial": "KERN",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslogger/docs/System-Log-Handler-Syslog.html#v:LOCAL0",
      "description": {
        "fct-descr": "\u003cp\u003eLOCAL0 through LOCAL7 are reserved for you to customize as you wish\n\u003c/p\u003e",
        "fct-module": "System.Log.Handler.Syslog",
        "fct-package": "hslogger",
        "fct-signature": "LOCAL0",
        "fct-source": "src/System-Log-Handler-Syslog.html#Facility",
        "fct-type": "function",
        "title": "LOCAL0"
      },
      "index": {
        "description": "LOCAL0 through LOCAL7 are reserved for you to customize as you wish",
        "hierarchy": "System Log Handler Syslog",
        "module": "System.Log.Handler.Syslog",
        "name": "LOCAL0",
        "normalized": "",
        "package": "hslogger",
        "partial": "LOCAL",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslogger/docs/System-Log-Handler-Syslog.html#v:LOCAL1",
      "description": {
        "fct-module": "System.Log.Handler.Syslog",
        "fct-package": "hslogger",
        "fct-signature": "LOCAL1",
        "fct-source": "src/System-Log-Handler-Syslog.html#Facility",
        "fct-type": "function",
        "title": "LOCAL1"
      },
      "index": {
        "description": "",
        "hierarchy": "System Log Handler Syslog",
        "module": "System.Log.Handler.Syslog",
        "name": "LOCAL1",
        "normalized": "",
        "package": "hslogger",
        "partial": "LOCAL",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslogger/docs/System-Log-Handler-Syslog.html#v:LOCAL2",
      "description": {
        "fct-module": "System.Log.Handler.Syslog",
        "fct-package": "hslogger",
        "fct-signature": "LOCAL2",
        "fct-source": "src/System-Log-Handler-Syslog.html#Facility",
        "fct-type": "function",
        "title": "LOCAL2"
      },
      "index": {
        "description": "",
        "hierarchy": "System Log Handler Syslog",
        "module": "System.Log.Handler.Syslog",
        "name": "LOCAL2",
        "normalized": "",
        "package": "hslogger",
        "partial": "LOCAL",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslogger/docs/System-Log-Handler-Syslog.html#v:LOCAL3",
      "description": {
        "fct-module": "System.Log.Handler.Syslog",
        "fct-package": "hslogger",
        "fct-signature": "LOCAL3",
        "fct-source": "src/System-Log-Handler-Syslog.html#Facility",
        "fct-type": "function",
        "title": "LOCAL3"
      },
      "index": {
        "description": "",
        "hierarchy": "System Log Handler Syslog",
        "module": "System.Log.Handler.Syslog",
        "name": "LOCAL3",
        "normalized": "",
        "package": "hslogger",
        "partial": "LOCAL",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslogger/docs/System-Log-Handler-Syslog.html#v:LOCAL4",
      "description": {
        "fct-module": "System.Log.Handler.Syslog",
        "fct-package": "hslogger",
        "fct-signature": "LOCAL4",
        "fct-source": "src/System-Log-Handler-Syslog.html#Facility",
        "fct-type": "function",
        "title": "LOCAL4"
      },
      "index": {
        "description": "",
        "hierarchy": "System Log Handler Syslog",
        "module": "System.Log.Handler.Syslog",
        "name": "LOCAL4",
        "normalized": "",
        "package": "hslogger",
        "partial": "LOCAL",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslogger/docs/System-Log-Handler-Syslog.html#v:LOCAL5",
      "description": {
        "fct-module": "System.Log.Handler.Syslog",
        "fct-package": "hslogger",
        "fct-signature": "LOCAL5",
        "fct-source": "src/System-Log-Handler-Syslog.html#Facility",
        "fct-type": "function",
        "title": "LOCAL5"
      },
      "index": {
        "description": "",
        "hierarchy": "System Log Handler Syslog",
        "module": "System.Log.Handler.Syslog",
        "name": "LOCAL5",
        "normalized": "",
        "package": "hslogger",
        "partial": "LOCAL",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslogger/docs/System-Log-Handler-Syslog.html#v:LOCAL6",
      "description": {
        "fct-module": "System.Log.Handler.Syslog",
        "fct-package": "hslogger",
        "fct-signature": "LOCAL6",
        "fct-source": "src/System-Log-Handler-Syslog.html#Facility",
        "fct-type": "function",
        "title": "LOCAL6"
      },
      "index": {
        "description": "",
        "hierarchy": "System Log Handler Syslog",
        "module": "System.Log.Handler.Syslog",
        "name": "LOCAL6",
        "normalized": "",
        "package": "hslogger",
        "partial": "LOCAL",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslogger/docs/System-Log-Handler-Syslog.html#v:LOCAL7",
      "description": {
        "fct-module": "System.Log.Handler.Syslog",
        "fct-package": "hslogger",
        "fct-signature": "LOCAL7",
        "fct-source": "src/System-Log-Handler-Syslog.html#Facility",
        "fct-type": "function",
        "title": "LOCAL7"
      },
      "index": {
        "description": "",
        "hierarchy": "System Log Handler Syslog",
        "module": "System.Log.Handler.Syslog",
        "name": "LOCAL7",
        "normalized": "",
        "package": "hslogger",
        "partial": "LOCAL",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslogger/docs/System-Log-Handler-Syslog.html#v:LPR",
      "description": {
        "fct-descr": "\u003cp\u003ePrinter messages\n\u003c/p\u003e",
        "fct-module": "System.Log.Handler.Syslog",
        "fct-package": "hslogger",
        "fct-signature": "LPR",
        "fct-source": "src/System-Log-Handler-Syslog.html#Facility",
        "fct-type": "function",
        "title": "LPR"
      },
      "index": {
        "description": "Printer messages",
        "hierarchy": "System Log Handler Syslog",
        "module": "System.Log.Handler.Syslog",
        "name": "LPR",
        "normalized": "",
        "package": "hslogger",
        "partial": "LPR",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslogger/docs/System-Log-Handler-Syslog.html#v:MAIL",
      "description": {
        "fct-descr": "\u003cp\u003eE-Mail system\n\u003c/p\u003e",
        "fct-module": "System.Log.Handler.Syslog",
        "fct-package": "hslogger",
        "fct-signature": "MAIL",
        "fct-source": "src/System-Log-Handler-Syslog.html#Facility",
        "fct-type": "function",
        "title": "MAIL"
      },
      "index": {
        "description": "E-Mail system",
        "hierarchy": "System Log Handler Syslog",
        "module": "System.Log.Handler.Syslog",
        "name": "MAIL",
        "normalized": "",
        "package": "hslogger",
        "partial": "MAIL",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslogger/docs/System-Log-Handler-Syslog.html#v:NEWS",
      "description": {
        "fct-descr": "\u003cp\u003eUsenet news\n\u003c/p\u003e",
        "fct-module": "System.Log.Handler.Syslog",
        "fct-package": "hslogger",
        "fct-signature": "NEWS",
        "fct-source": "src/System-Log-Handler-Syslog.html#Facility",
        "fct-type": "function",
        "title": "NEWS"
      },
      "index": {
        "description": "Usenet news",
        "hierarchy": "System Log Handler Syslog",
        "module": "System.Log.Handler.Syslog",
        "name": "NEWS",
        "normalized": "",
        "package": "hslogger",
        "partial": "NEWS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslogger/docs/System-Log-Handler-Syslog.html#v:PERROR",
      "description": {
        "fct-descr": "\u003cp\u003eSend a copy of each message to stderr\n\u003c/p\u003e",
        "fct-module": "System.Log.Handler.Syslog",
        "fct-package": "hslogger",
        "fct-signature": "PERROR",
        "fct-source": "src/System-Log-Handler-Syslog.html#Option",
        "fct-type": "function",
        "title": "PERROR"
      },
      "index": {
        "description": "Send copy of each message to stderr",
        "hierarchy": "System Log Handler Syslog",
        "module": "System.Log.Handler.Syslog",
        "name": "PERROR",
        "normalized": "",
        "package": "hslogger",
        "partial": "PERROR",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslogger/docs/System-Log-Handler-Syslog.html#v:PID",
      "description": {
        "fct-descr": "\u003cp\u003eAutomatically log process ID (PID) with each message\n\u003c/p\u003e",
        "fct-module": "System.Log.Handler.Syslog",
        "fct-package": "hslogger",
        "fct-signature": "PID",
        "fct-source": "src/System-Log-Handler-Syslog.html#Option",
        "fct-type": "function",
        "title": "PID"
      },
      "index": {
        "description": "Automatically log process ID PID with each message",
        "hierarchy": "System Log Handler Syslog",
        "module": "System.Log.Handler.Syslog",
        "name": "PID",
        "normalized": "",
        "package": "hslogger",
        "partial": "PID",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslogger/docs/System-Log-Handler-Syslog.html#v:SYSLOG",
      "description": {
        "fct-descr": "\u003cp\u003eInternal syslog messages; you should likely never use this in your programs\n\u003c/p\u003e",
        "fct-module": "System.Log.Handler.Syslog",
        "fct-package": "hslogger",
        "fct-signature": "SYSLOG",
        "fct-source": "src/System-Log-Handler-Syslog.html#Facility",
        "fct-type": "function",
        "title": "SYSLOG"
      },
      "index": {
        "description": "Internal syslog messages you should likely never use this in your programs",
        "hierarchy": "System Log Handler Syslog",
        "module": "System.Log.Handler.Syslog",
        "name": "SYSLOG",
        "normalized": "",
        "package": "hslogger",
        "partial": "SYSLOG",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslogger/docs/System-Log-Handler-Syslog.html#v:USER",
      "description": {
        "fct-descr": "\u003cp\u003eGeneral userland messages.  Use this if nothing else is appropriate\n\u003c/p\u003e",
        "fct-module": "System.Log.Handler.Syslog",
        "fct-package": "hslogger",
        "fct-signature": "USER",
        "fct-source": "src/System-Log-Handler-Syslog.html#Facility",
        "fct-type": "function",
        "title": "USER"
      },
      "index": {
        "description": "General userland messages Use this if nothing else is appropriate",
        "hierarchy": "System Log Handler Syslog",
        "module": "System.Log.Handler.Syslog",
        "name": "USER",
        "normalized": "",
        "package": "hslogger",
        "partial": "USER",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslogger/docs/System-Log-Handler-Syslog.html#v:UUCP",
      "description": {
        "fct-descr": "\u003cp\u003eUUCP messages\n\u003c/p\u003e",
        "fct-module": "System.Log.Handler.Syslog",
        "fct-package": "hslogger",
        "fct-signature": "UUCP",
        "fct-source": "src/System-Log-Handler-Syslog.html#Facility",
        "fct-type": "function",
        "title": "UUCP"
      },
      "index": {
        "description": "UUCP messages",
        "hierarchy": "System Log Handler Syslog",
        "module": "System.Log.Handler.Syslog",
        "name": "UUCP",
        "normalized": "",
        "package": "hslogger",
        "partial": "UUCP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslogger/docs/System-Log-Handler-Syslog.html#v:openlog",
      "description": {
        "fct-descr": "\u003cp\u003eInitialize the Syslog system using the local system's default interface,\n/dev/log.  Will return a new \u003ccode\u003e\u003ca\u003eLogHandler\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eOn Windows, instead of using /dev/log, this will attempt to send\nUDP messages to something listening on the syslog port (514) on localhost.\n\u003c/p\u003e\u003cp\u003eUse \u003ccode\u003e\u003ca\u003eopenlog_remote\u003c/a\u003e\u003c/code\u003e if you need more control.\n\u003c/p\u003e",
        "fct-module": "System.Log.Handler.Syslog",
        "fct-package": "hslogger",
        "fct-signature": "String-\u003e [Option]-\u003e Facility-\u003e Priority-\u003e IO SyslogHandler",
        "fct-type": "function",
        "title": "openlog"
      },
      "index": {
        "description": "Initialize the Syslog system using the local system default interface dev log Will return new LogHandler On Windows instead of using dev log this will attempt to send UDP messages to something listening on the syslog port on localhost Use openlog remote if you need more control",
        "hierarchy": "System Log Handler Syslog",
        "module": "System.Log.Handler.Syslog",
        "name": "openlog",
        "normalized": "String-\u003e[Option]-\u003eFacility-\u003ePriority-\u003eIO SyslogHandler",
        "package": "hslogger",
        "partial": "",
        "signature": "String-\u003e[Option]-\u003eFacility-\u003ePriority-\u003eIO SyslogHandler"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslogger/docs/System-Log-Handler-Syslog.html#v:openlog_generic",
      "description": {
        "fct-descr": "\u003cp\u003eThe most powerful initialization mechanism.  Takes an open datagram\nsocket. \n\u003c/p\u003e",
        "fct-module": "System.Log.Handler.Syslog",
        "fct-package": "hslogger",
        "fct-signature": "Socket-\u003e SockAddr-\u003e SocketType-\u003e String-\u003e [Option]-\u003e Facility-\u003e Priority-\u003e IO SyslogHandler",
        "fct-type": "function",
        "title": "openlog_generic"
      },
      "index": {
        "description": "The most powerful initialization mechanism Takes an open datagram socket",
        "hierarchy": "System Log Handler Syslog",
        "module": "System.Log.Handler.Syslog",
        "name": "openlog_generic",
        "normalized": "Socket-\u003eSockAddr-\u003eSocketType-\u003eString-\u003e[Option]-\u003eFacility-\u003ePriority-\u003eIO SyslogHandler",
        "package": "hslogger",
        "partial": "",
        "signature": "Socket-\u003eSockAddr-\u003eSocketType-\u003eString-\u003e[Option]-\u003eFacility-\u003ePriority-\u003eIO SyslogHandler"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslogger/docs/System-Log-Handler-Syslog.html#v:openlog_local",
      "description": {
        "fct-descr": "\u003cp\u003eInitialize the Syslog system using an arbitrary Unix socket (FIFO).\n\u003c/p\u003e\u003cp\u003eNot supported under Windows.\n\u003c/p\u003e",
        "fct-module": "System.Log.Handler.Syslog",
        "fct-package": "hslogger",
        "fct-signature": "String-\u003e String-\u003e [Option]-\u003e Facility-\u003e Priority-\u003e IO SyslogHandler",
        "fct-type": "function",
        "title": "openlog_local"
      },
      "index": {
        "description": "Initialize the Syslog system using an arbitrary Unix socket FIFO Not supported under Windows",
        "hierarchy": "System Log Handler Syslog",
        "module": "System.Log.Handler.Syslog",
        "name": "openlog_local",
        "normalized": "String-\u003eString-\u003e[Option]-\u003eFacility-\u003ePriority-\u003eIO SyslogHandler",
        "package": "hslogger",
        "partial": "",
        "signature": "String-\u003eString-\u003e[Option]-\u003eFacility-\u003ePriority-\u003eIO SyslogHandler"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslogger/docs/System-Log-Handler-Syslog.html#v:openlog_remote",
      "description": {
        "fct-descr": "\u003cp\u003eLog to a remote server via UDP. \n\u003c/p\u003e",
        "fct-module": "System.Log.Handler.Syslog",
        "fct-package": "hslogger",
        "fct-signature": "Family-\u003e HostName-\u003e PortNumber-\u003e String-\u003e [Option]-\u003e Facility-\u003e Priority-\u003e IO SyslogHandler",
        "fct-type": "function",
        "title": "openlog_remote"
      },
      "index": {
        "description": "Log to remote server via UDP",
        "hierarchy": "System Log Handler Syslog",
        "module": "System.Log.Handler.Syslog",
        "name": "openlog_remote",
        "normalized": "Family-\u003eHostName-\u003ePortNumber-\u003eString-\u003e[Option]-\u003eFacility-\u003ePriority-\u003eIO SyslogHandler",
        "package": "hslogger",
        "partial": "",
        "signature": "Family-\u003eHostName-\u003ePortNumber-\u003eString-\u003e[Option]-\u003eFacility-\u003ePriority-\u003eIO SyslogHandler"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslogger/docs/System-Log-Handler.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDefinition of log handler support\n\u003c/p\u003e\u003cp\u003eFor some handlers, check out \u003ca\u003eSystem.Log.Handler.Simple\u003c/a\u003e and\n\u003ca\u003eSystem.Log.Handler.Syslog\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003ePlease see \u003ca\u003eSystem.Log.Logger\u003c/a\u003e for extensive documentation on the\nlogging system.\n\u003c/p\u003e\u003cp\u003eWritten by John Goerzen, jgoerzen@complete.org\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.Log.Handler",
        "fct-package": "hslogger",
        "fct-signature": "module",
        "fct-source": "src/System-Log-Handler.html",
        "fct-type": "module",
        "title": "Handler"
      },
      "index": {
        "description": "Definition of log handler support For some handlers check out System.Log.Handler.Simple and System.Log.Handler.Syslog Please see System.Log.Logger for extensive documentation on the logging system Written by John Goerzen jgoerzen@complete.org",
        "hierarchy": "System Log Handler",
        "module": "System.Log.Handler",
        "name": "Handler",
        "normalized": "",
        "package": "hslogger",
        "partial": "Handler",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslogger/docs/System-Log-Handler.html#t:LogHandler",
      "description": {
        "fct-descr": "\u003cp\u003eAll log handlers should adhere to this. \n\u003c/p\u003e\u003cp\u003eThis is the base class for the various log handlers.  They should\nall adhere to this class. \n\u003c/p\u003e",
        "fct-module": "System.Log.Handler",
        "fct-package": "hslogger",
        "fct-signature": "class",
        "fct-source": "src/System-Log-Handler.html#LogHandler",
        "fct-type": "class",
        "title": "LogHandler"
      },
      "index": {
        "description": "All log handlers should adhere to this This is the base class for the various log handlers They should all adhere to this class",
        "hierarchy": "System Log Handler",
        "module": "System.Log.Handler",
        "name": "LogHandler",
        "normalized": "",
        "package": "hslogger",
        "partial": "Log Handler",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslogger/docs/System-Log-Handler.html#v:close",
      "description": {
        "fct-descr": "\u003cp\u003eCloses the logging system, causing it to close\n any open files, etc.\n\u003c/p\u003e",
        "fct-module": "System.Log.Handler",
        "fct-package": "hslogger",
        "fct-signature": "a -\u003e IO ()",
        "fct-source": "src/System-Log-Handler.html#close",
        "fct-type": "method",
        "title": "close"
      },
      "index": {
        "description": "Closes the logging system causing it to close any open files etc",
        "hierarchy": "System Log Handler",
        "module": "System.Log.Handler",
        "name": "close",
        "normalized": "a-\u003eIO()",
        "package": "hslogger",
        "partial": "",
        "signature": "a-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslogger/docs/System-Log-Handler.html#v:emit",
      "description": {
        "fct-descr": "\u003cp\u003eForces an event to be logged regardless of\n the configured level.\n\u003c/p\u003e",
        "fct-module": "System.Log.Handler",
        "fct-package": "hslogger",
        "fct-signature": "a -\u003e LogRecord -\u003e String -\u003e IO ()",
        "fct-source": "src/System-Log-Handler.html#emit",
        "fct-type": "method",
        "title": "emit"
      },
      "index": {
        "description": "Forces an event to be logged regardless of the configured level",
        "hierarchy": "System Log Handler",
        "module": "System.Log.Handler",
        "name": "emit",
        "normalized": "a-\u003eLogRecord-\u003eString-\u003eIO()",
        "package": "hslogger",
        "partial": "",
        "signature": "a-\u003eLogRecord-\u003eString-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslogger/docs/System-Log-Handler.html#v:getFormatter",
      "description": {
        "fct-module": "System.Log.Handler",
        "fct-package": "hslogger",
        "fct-signature": "a -\u003e LogFormatter a",
        "fct-source": "src/System-Log-Handler.html#getFormatter",
        "fct-type": "method",
        "title": "getFormatter"
      },
      "index": {
        "description": "",
        "hierarchy": "System Log Handler",
        "module": "System.Log.Handler",
        "name": "getFormatter",
        "normalized": "a-\u003eLogFormatter a",
        "package": "hslogger",
        "partial": "Formatter",
        "signature": "a-\u003eLogFormatter a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslogger/docs/System-Log-Handler.html#v:getLevel",
      "description": {
        "fct-descr": "\u003cp\u003eGets the current level.\n\u003c/p\u003e",
        "fct-module": "System.Log.Handler",
        "fct-package": "hslogger",
        "fct-signature": "a -\u003e Priority",
        "fct-source": "src/System-Log-Handler.html#getLevel",
        "fct-type": "method",
        "title": "getLevel"
      },
      "index": {
        "description": "Gets the current level",
        "hierarchy": "System Log Handler",
        "module": "System.Log.Handler",
        "name": "getLevel",
        "normalized": "a-\u003ePriority",
        "package": "hslogger",
        "partial": "Level",
        "signature": "a-\u003ePriority"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslogger/docs/System-Log-Handler.html#v:handle",
      "description": {
        "fct-descr": "\u003cp\u003eLogs an event if it meets the requirements\n given by the most recent call to \u003ccode\u003e\u003ca\u003esetLevel\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Log.Handler",
        "fct-package": "hslogger",
        "fct-signature": "a -\u003e LogRecord -\u003e String -\u003e IO ()",
        "fct-source": "src/System-Log-Handler.html#handle",
        "fct-type": "method",
        "title": "handle"
      },
      "index": {
        "description": "Logs an event if it meets the requirements given by the most recent call to setLevel",
        "hierarchy": "System Log Handler",
        "module": "System.Log.Handler",
        "name": "handle",
        "normalized": "a-\u003eLogRecord-\u003eString-\u003eIO()",
        "package": "hslogger",
        "partial": "",
        "signature": "a-\u003eLogRecord-\u003eString-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslogger/docs/System-Log-Handler.html#v:setFormatter",
      "description": {
        "fct-descr": "\u003cp\u003eSet a log formatter to customize the log format for this Handler\n\u003c/p\u003e",
        "fct-module": "System.Log.Handler",
        "fct-package": "hslogger",
        "fct-signature": "a -\u003e LogFormatter a -\u003e a",
        "fct-source": "src/System-Log-Handler.html#setFormatter",
        "fct-type": "method",
        "title": "setFormatter"
      },
      "index": {
        "description": "Set log formatter to customize the log format for this Handler",
        "hierarchy": "System Log Handler",
        "module": "System.Log.Handler",
        "name": "setFormatter",
        "normalized": "a-\u003eLogFormatter a-\u003ea",
        "package": "hslogger",
        "partial": "Formatter",
        "signature": "a-\u003eLogFormatter a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslogger/docs/System-Log-Handler.html#v:setLevel",
      "description": {
        "fct-descr": "\u003cp\u003eSets the log level.  \u003ccode\u003e\u003ca\u003ehandle\u003c/a\u003e\u003c/code\u003e will drop\n items beneath this level.\n\u003c/p\u003e",
        "fct-module": "System.Log.Handler",
        "fct-package": "hslogger",
        "fct-signature": "a -\u003e Priority -\u003e a",
        "fct-source": "src/System-Log-Handler.html#setLevel",
        "fct-type": "method",
        "title": "setLevel"
      },
      "index": {
        "description": "Sets the log level handle will drop items beneath this level",
        "hierarchy": "System Log Handler",
        "module": "System.Log.Handler",
        "name": "setLevel",
        "normalized": "a-\u003ePriority-\u003ea",
        "package": "hslogger",
        "partial": "Level",
        "signature": "a-\u003ePriority-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslogger/docs/System-Log-Logger.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHaskell Logging Framework, Primary Interface\n\u003c/p\u003e\u003cp\u003eWritten by John Goerzen, jgoerzen@complete.org\n\u003c/p\u003e\u003cp\u003eWelcome to the error and information logging system for Haskell.\n\u003c/p\u003e\u003cp\u003eThis system is patterned after Python's \u003ccode\u003elogging\u003c/code\u003e module,\n\u003ca\u003ehttp://www.python.org/doc/current/lib/module-logging.html\u003c/a\u003e and some of\nthe documentation here was based on documentation there.\n\u003c/p\u003e\u003cp\u003eTo log a message, you perform operations on \u003ccode\u003e\u003ca\u003eLogger\u003c/a\u003e\u003c/code\u003es.  Each \u003ccode\u003e\u003ca\u003eLogger\u003c/a\u003e\u003c/code\u003e has a\nname, and they are arranged hierarchically.  Periods serve as separators.\nTherefore, a \u003ccode\u003e\u003ca\u003eLogger\u003c/a\u003e\u003c/code\u003e named \"foo\" is the parent of loggers \"foo.printing\",\n\"foo.html\", and \"foo.io\".  These names can be anything you want.  They're\nused to indicate the area of an application or library in which a logged\nmessage originates.  Later you will see how you can use this concept to \nfine-tune logging behaviors based on specific application areas.\n\u003c/p\u003e\u003cp\u003eYou can also tune logging behaviors based upon how important a message is.\nEach message you log will have an importance associated with it.  The different\nimportance levels are given by the \u003ccode\u003e\u003ca\u003ePriority\u003c/a\u003e\u003c/code\u003e type.  I've also provided\nsome convenient functions that correspond to these importance levels:\n\u003ccode\u003e\u003ca\u003edebugM\u003c/a\u003e\u003c/code\u003e through \u003ccode\u003e\u003ca\u003eemergencyM\u003c/a\u003e\u003c/code\u003e log messages with the specified importance.\n\u003c/p\u003e\u003cp\u003eNow, an importance level (or \u003ccode\u003e\u003ca\u003ePriority\u003c/a\u003e\u003c/code\u003e) \nis associated not just with a particular message but also\nwith a \u003ccode\u003e\u003ca\u003eLogger\u003c/a\u003e\u003c/code\u003e.  If the \u003ccode\u003e\u003ca\u003ePriority\u003c/a\u003e\u003c/code\u003e of a given log message is lower than\nthe \u003ccode\u003e\u003ca\u003ePriority\u003c/a\u003e\u003c/code\u003e configured in the \u003ccode\u003e\u003ca\u003eLogger\u003c/a\u003e\u003c/code\u003e, that message is ignored.  This\nway, you can globally control how verbose your logging output is.\n\u003c/p\u003e\u003cp\u003eNow, let's follow what happens under the hood when you log a message.  We'll\nassume for the moment that you are logging something with a high enough\n\u003ccode\u003e\u003ca\u003ePriority\u003c/a\u003e\u003c/code\u003e that it passes the test in your \u003ccode\u003e\u003ca\u003eLogger\u003c/a\u003e\u003c/code\u003e.  In your code, you'll\ncall \u003ccode\u003e\u003ca\u003elogM\u003c/a\u003e\u003c/code\u003e or something like \u003ccode\u003e\u003ca\u003edebugM\u003c/a\u003e\u003c/code\u003e to log the message.  Your \u003ccode\u003e\u003ca\u003eLogger\u003c/a\u003e\u003c/code\u003e\ndecides to accept the message.  What next?\n\u003c/p\u003e\u003cp\u003eWell, we also have a notion of \u003cem\u003ehandlers\u003c/em\u003e (\u003ccode\u003e\u003ca\u003eLogHandler\u003c/a\u003e\u003c/code\u003es, to be precise).\nA \u003ccode\u003e\u003ca\u003eLogHandler\u003c/a\u003e\u003c/code\u003e is a thing that takes a message and sends it somewhere.\nThat \"somewhere\" may be your screen (via standard error), your system's\nlogging infrastructure (via syslog), a file, or other things.  Each\n\u003ccode\u003e\u003ca\u003eLogger\u003c/a\u003e\u003c/code\u003e can have zero or more \u003ccode\u003e\u003ca\u003eLogHandler\u003c/a\u003e\u003c/code\u003es associated with it.  When your\n\u003ccode\u003e\u003ca\u003eLogger\u003c/a\u003e\u003c/code\u003e has a message to log, it passes it to every \u003ccode\u003e\u003ca\u003eLogHandler\u003c/a\u003e\u003c/code\u003e it knows\nof to process.  What's more, it is also passed to /all handlers of all\nancestors of the Logger/, regardless of whether those \u003ccode\u003e\u003ca\u003eLogger\u003c/a\u003e\u003c/code\u003es would\nnormally have passed on the message.\n\u003c/p\u003e\u003cp\u003eEach \u003ccode\u003e\u003ca\u003eLogger\u003c/a\u003e\u003c/code\u003e can \u003cem\u003eoptionally\u003c/em\u003e store a \u003ccode\u003e\u003ca\u003ePriority\u003c/a\u003e\u003c/code\u003e.  If a given Logger does\nnot have a Priority, and you log a message to that logger, the system will\nuse the priority of the parent of the destination logger to find out whether\nto log the message.  If the parent has no priority associated with it,\nthe system continues walking up the tree to figure out a priority until\nit hits the root logger.  In this way, you can easily adjust the priority\nof an entire subtree of loggers.  When a new logger is created, it has no\npriority by default.  The exception is the root logger, which has a WARNING\npriority by default.\n\u003c/p\u003e\u003cp\u003eTo give you one extra little knob to turn, \u003ccode\u003e\u003ca\u003eLogHandler\u003c/a\u003e\u003c/code\u003es can also have\nimportance levels (\u003ccode\u003e\u003ca\u003ePriority\u003c/a\u003e\u003c/code\u003e) associated with them in the same way\nthat \u003ccode\u003e\u003ca\u003eLogger\u003c/a\u003e\u003c/code\u003es do.  They act just like the \u003ccode\u003e\u003ca\u003ePriority\u003c/a\u003e\u003c/code\u003e value in the\n\u003ccode\u003e\u003ca\u003eLogger\u003c/a\u003e\u003c/code\u003es -- as a filter.  It's useful, for instance, to make sure that\nunder no circumstances will a mere \u003ccode\u003e\u003ca\u003eDEBUG\u003c/a\u003e\u003c/code\u003e message show up in your syslog.\n\u003c/p\u003e\u003cp\u003eThere are three built-in handlers given in two built-in modules:\n\u003ca\u003eSystem.Log.Handler.Simple\u003c/a\u003e and \u003ca\u003eSystem.Log.Handler.Syslog\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eThere is a special logger known as the \u003cem\u003eroot logger\u003c/em\u003e that sits at the top\nof the logger hierarchy.  It is always present, and handlers attached\nthere will be called for every message.  You can use \u003ccode\u003e\u003ca\u003egetRootLogger\u003c/a\u003e\u003c/code\u003e to get\nit or \u003ccode\u003e\u003ca\u003erootLoggerName\u003c/a\u003e\u003c/code\u003e to work with it by name.\n\u003c/p\u003e\u003cp\u003eThe formatting of log messages may be customized by setting a \u003ccode\u003e\u003ca\u003eLogFormatter\u003c/a\u003e\u003c/code\u003e\non the desired \u003ccode\u003e\u003ca\u003eLogHandler\u003c/a\u003e\u003c/code\u003e.  There are a number of simple formatters defined \nin \u003ca\u003eSystem.Log.Formatter\u003c/a\u003e, which may be used directly, or extend to create\nyour own formatter.\n\u003c/p\u003e\u003cp\u003eHere's an example to illustrate some of these concepts:\n\u003c/p\u003e\u003cpre\u003e import System.Log.Logger\n import System.Log.Handler.Syslog\n import System.Log.Handler.Simple\n import System.Log.Handler (setFormatter)\n import System.Log.Formatter\n \n -- By default, all messages of level WARNING and above are sent to stderr.\n -- Everything else is ignored.\n \n -- \"MyApp.Component\" is an arbitrary string; you can tune\n -- logging behavior based on it later.\n main = do\n        debugM \"MyApp.Component\"  \"This is a debug message -- never to be seen\"\n        warningM \"MyApp.Component2\" \"Something Bad is about to happen.\"\n \n        -- Copy everything to syslog from here on out.\n        s \u003c- openlog \"SyslogStuff\" [PID] USER DEBUG\n        updateGlobalLogger rootLoggerName (addHandler s)\n       \n        errorM \"MyApp.Component\" \"This is going to stderr and syslog.\"\n\n        -- Now we'd like to see everything from BuggyComponent\n        -- at DEBUG or higher go to syslog and stderr.\n        -- Also, we'd like to still ignore things less than\n        -- WARNING in other areas.\n        -- \n        -- So, we adjust the Logger for MyApp.BuggyComponent.\n\n        updateGlobalLogger \"MyApp.BuggyComponent\"\n                           (setLevel DEBUG)\n\n        -- This message will go to syslog and stderr\n        debugM \"MyApp.BuggyComponent\" \"This buggy component is buggy\"\n \n        -- This message will go to syslog and stderr too.\n        warningM \"MyApp.BuggyComponent\" \"Still Buggy\"\n \n        -- This message goes nowhere.\n        debugM \"MyApp.WorkingComponent\" \"Hello\"\n\n        -- Now we decide we'd also like to log everything from BuggyComponent at DEBUG\n        -- or higher to a file for later diagnostics.  We'd also like to customize the\n        -- format of the log message, so we use a 'simpleLogFormatter'\n\n        h \u003c- fileHandler \"debug.log\" DEBUG \u003e\u003e= \\lh -\u003e return $\n                 setFormatter lh (simpleLogFormatter \"[$time : $loggername : $prio] $msg\")\n        updateGlobalLogger \"MyApp.BuggyComponent\" (addHandler h)\n       \n        -- This message will go to syslog and stderr, \n        -- and to the file \"debug.log\" with a format like :\n        -- [2010-05-23 16:47:28 : MyApp.BuggyComponent : DEBUG] Some useful diagnostics...\n        debugM \"MyApp.BuggyComponent\" \"Some useful diagnostics...\"\n\n\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "System.Log.Logger",
        "fct-package": "hslogger",
        "fct-signature": "module",
        "fct-source": "src/System-Log-Logger.html",
        "fct-type": "module",
        "title": "Logger"
      },
      "index": {
        "description": "Haskell Logging Framework Primary Interface Written by John Goerzen jgoerzen@complete.org Welcome to the error and information logging system for Haskell This system is patterned after Python logging module http www.python.org doc current lib module-logging.html and some of the documentation here was based on documentation there To log message you perform operations on Logger Each Logger has name and they are arranged hierarchically Periods serve as separators Therefore Logger named foo is the parent of loggers foo.printing foo.html and foo.io These names can be anything you want They re used to indicate the area of an application or library in which logged message originates Later you will see how you can use this concept to fine-tune logging behaviors based on specific application areas You can also tune logging behaviors based upon how important message is Each message you log will have an importance associated with it The different importance levels are given by the Priority type ve also provided some convenient functions that correspond to these importance levels debugM through emergencyM log messages with the specified importance Now an importance level or Priority is associated not just with particular message but also with Logger If the Priority of given log message is lower than the Priority configured in the Logger that message is ignored This way you can globally control how verbose your logging output is Now let follow what happens under the hood when you log message We ll assume for the moment that you are logging something with high enough Priority that it passes the test in your Logger In your code you ll call logM or something like debugM to log the message Your Logger decides to accept the message What next Well we also have notion of handlers LogHandler to be precise LogHandler is thing that takes message and sends it somewhere That somewhere may be your screen via standard error your system logging infrastructure via syslog file or other things Each Logger can have zero or more LogHandler associated with it When your Logger has message to log it passes it to every LogHandler it knows of to process What more it is also passed to all handlers of all ancestors of the Logger regardless of whether those Logger would normally have passed on the message Each Logger can optionally store Priority If given Logger does not have Priority and you log message to that logger the system will use the priority of the parent of the destination logger to find out whether to log the message If the parent has no priority associated with it the system continues walking up the tree to figure out priority until it hits the root logger In this way you can easily adjust the priority of an entire subtree of loggers When new logger is created it has no priority by default The exception is the root logger which has WARNING priority by default To give you one extra little knob to turn LogHandler can also have importance levels Priority associated with them in the same way that Logger do They act just like the Priority value in the Logger as filter It useful for instance to make sure that under no circumstances will mere DEBUG message show up in your syslog There are three built-in handlers given in two built-in modules System.Log.Handler.Simple and System.Log.Handler.Syslog There is special logger known as the root logger that sits at the top of the logger hierarchy It is always present and handlers attached there will be called for every message You can use getRootLogger to get it or rootLoggerName to work with it by name The formatting of log messages may be customized by setting LogFormatter on the desired LogHandler There are number of simple formatters defined in System.Log.Formatter which may be used directly or extend to create your own formatter Here an example to illustrate some of these concepts import System.Log.Logger import System.Log.Handler.Syslog import System.Log.Handler.Simple import System.Log.Handler setFormatter import System.Log.Formatter By default all messages of level WARNING and above are sent to stderr Everything else is ignored MyApp.Component is an arbitrary string you can tune logging behavior based on it later main do debugM MyApp.Component This is debug message never to be seen warningM MyApp.Component2 Something Bad is about to happen Copy everything to syslog from here on out openlog SyslogStuff PID USER DEBUG updateGlobalLogger rootLoggerName addHandler errorM MyApp.Component This is going to stderr and syslog Now we like to see everything from BuggyComponent at DEBUG or higher go to syslog and stderr Also we like to still ignore things less than WARNING in other areas So we adjust the Logger for MyApp.BuggyComponent updateGlobalLogger MyApp.BuggyComponent setLevel DEBUG This message will go to syslog and stderr debugM MyApp.BuggyComponent This buggy component is buggy This message will go to syslog and stderr too warningM MyApp.BuggyComponent Still Buggy This message goes nowhere debugM MyApp.WorkingComponent Hello Now we decide we also like to log everything from BuggyComponent at DEBUG or higher to file for later diagnostics We also like to customize the format of the log message so we use simpleLogFormatter fileHandler debug.log DEBUG lh return setFormatter lh simpleLogFormatter time loggername prio msg updateGlobalLogger MyApp.BuggyComponent addHandler This message will go to syslog and stderr and to the file debug.log with format like MyApp.BuggyComponent DEBUG Some useful diagnostics debugM MyApp.BuggyComponent Some useful diagnostics",
        "hierarchy": "System Log Logger",
        "module": "System.Log.Logger",
        "name": "Logger",
        "normalized": "",
        "package": "hslogger",
        "partial": "Logger",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslogger/docs/System-Log-Logger.html#t:Logger",
      "description": {
        "fct-module": "System.Log.Logger",
        "fct-package": "hslogger",
        "fct-signature": "data",
        "fct-source": "src/System-Log-Logger.html#Logger",
        "fct-type": "data",
        "title": "Logger"
      },
      "index": {
        "description": "",
        "hierarchy": "System Log Logger",
        "module": "System.Log.Logger",
        "name": "Logger",
        "normalized": "",
        "package": "hslogger",
        "partial": "Logger",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslogger/docs/System-Log-Logger.html#t:Priority",
      "description": {
        "fct-descr": "\u003cp\u003ePriorities are used to define how important a log message is.\nUsers can filter log messages based on priorities.\n\u003c/p\u003e\u003cp\u003eThese have their roots on the traditional syslog system.  The standard\ndefinitions are given below, but you are free to interpret them however you\nlike.  They are listed here in ascending importance order.\n\u003c/p\u003e",
        "fct-module": "System.Log.Logger",
        "fct-package": "hslogger",
        "fct-signature": "data",
        "fct-source": "src/System-Log.html#Priority",
        "fct-type": "data",
        "title": "Priority"
      },
      "index": {
        "description": "Priorities are used to define how important log message is Users can filter log messages based on priorities These have their roots on the traditional syslog system The standard definitions are given below but you are free to interpret them however you like They are listed here in ascending importance order",
        "hierarchy": "System Log Logger",
        "module": "System.Log.Logger",
        "name": "Priority",
        "normalized": "",
        "package": "hslogger",
        "partial": "Priority",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslogger/docs/System-Log-Logger.html#v:ALERT",
      "description": {
        "fct-descr": "\u003cp\u003eTake immediate action\n\u003c/p\u003e",
        "fct-module": "System.Log.Logger",
        "fct-package": "hslogger",
        "fct-signature": "ALERT",
        "fct-source": "src/System-Log.html#Priority",
        "fct-type": "function",
        "title": "ALERT"
      },
      "index": {
        "description": "Take immediate action",
        "hierarchy": "System Log Logger",
        "module": "System.Log.Logger",
        "name": "ALERT",
        "normalized": "",
        "package": "hslogger",
        "partial": "ALERT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslogger/docs/System-Log-Logger.html#v:CRITICAL",
      "description": {
        "fct-descr": "\u003cp\u003eSevere situations\n\u003c/p\u003e",
        "fct-module": "System.Log.Logger",
        "fct-package": "hslogger",
        "fct-signature": "CRITICAL",
        "fct-source": "src/System-Log.html#Priority",
        "fct-type": "function",
        "title": "CRITICAL"
      },
      "index": {
        "description": "Severe situations",
        "hierarchy": "System Log Logger",
        "module": "System.Log.Logger",
        "name": "CRITICAL",
        "normalized": "",
        "package": "hslogger",
        "partial": "CRITICAL",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslogger/docs/System-Log-Logger.html#v:DEBUG",
      "description": {
        "fct-descr": "\u003cp\u003eDebug messages\n\u003c/p\u003e",
        "fct-module": "System.Log.Logger",
        "fct-package": "hslogger",
        "fct-signature": "DEBUG",
        "fct-source": "src/System-Log.html#Priority",
        "fct-type": "function",
        "title": "DEBUG"
      },
      "index": {
        "description": "Debug messages",
        "hierarchy": "System Log Logger",
        "module": "System.Log.Logger",
        "name": "DEBUG",
        "normalized": "",
        "package": "hslogger",
        "partial": "DEBUG",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslogger/docs/System-Log-Logger.html#v:EMERGENCY",
      "description": {
        "fct-descr": "\u003cp\u003eSystem is unusable\n\u003c/p\u003e",
        "fct-module": "System.Log.Logger",
        "fct-package": "hslogger",
        "fct-signature": "EMERGENCY",
        "fct-source": "src/System-Log.html#Priority",
        "fct-type": "function",
        "title": "EMERGENCY"
      },
      "index": {
        "description": "System is unusable",
        "hierarchy": "System Log Logger",
        "module": "System.Log.Logger",
        "name": "EMERGENCY",
        "normalized": "",
        "package": "hslogger",
        "partial": "EMERGENCY",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslogger/docs/System-Log-Logger.html#v:ERROR",
      "description": {
        "fct-descr": "\u003cp\u003eGeneral Errors\n\u003c/p\u003e",
        "fct-module": "System.Log.Logger",
        "fct-package": "hslogger",
        "fct-signature": "ERROR",
        "fct-source": "src/System-Log.html#Priority",
        "fct-type": "function",
        "title": "ERROR"
      },
      "index": {
        "description": "General Errors",
        "hierarchy": "System Log Logger",
        "module": "System.Log.Logger",
        "name": "ERROR",
        "normalized": "",
        "package": "hslogger",
        "partial": "ERROR",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslogger/docs/System-Log-Logger.html#v:INFO",
      "description": {
        "fct-descr": "\u003cp\u003eInformation\n\u003c/p\u003e",
        "fct-module": "System.Log.Logger",
        "fct-package": "hslogger",
        "fct-signature": "INFO",
        "fct-source": "src/System-Log.html#Priority",
        "fct-type": "function",
        "title": "INFO"
      },
      "index": {
        "description": "Information",
        "hierarchy": "System Log Logger",
        "module": "System.Log.Logger",
        "name": "INFO",
        "normalized": "",
        "package": "hslogger",
        "partial": "INFO",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslogger/docs/System-Log-Logger.html#v:NOTICE",
      "description": {
        "fct-descr": "\u003cp\u003eNormal runtime conditions\n\u003c/p\u003e",
        "fct-module": "System.Log.Logger",
        "fct-package": "hslogger",
        "fct-signature": "NOTICE",
        "fct-source": "src/System-Log.html#Priority",
        "fct-type": "function",
        "title": "NOTICE"
      },
      "index": {
        "description": "Normal runtime conditions",
        "hierarchy": "System Log Logger",
        "module": "System.Log.Logger",
        "name": "NOTICE",
        "normalized": "",
        "package": "hslogger",
        "partial": "NOTICE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslogger/docs/System-Log-Logger.html#v:WARNING",
      "description": {
        "fct-descr": "\u003cp\u003eGeneral Warnings\n\u003c/p\u003e",
        "fct-module": "System.Log.Logger",
        "fct-package": "hslogger",
        "fct-signature": "WARNING",
        "fct-source": "src/System-Log.html#Priority",
        "fct-type": "function",
        "title": "WARNING"
      },
      "index": {
        "description": "General Warnings",
        "hierarchy": "System Log Logger",
        "module": "System.Log.Logger",
        "name": "WARNING",
        "normalized": "",
        "package": "hslogger",
        "partial": "WARNING",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslogger/docs/System-Log-Logger.html#v:addHandler",
      "description": {
        "fct-descr": "\u003cp\u003eAdd handler to \u003ccode\u003e\u003ca\u003eLogger\u003c/a\u003e\u003c/code\u003e.  Returns a new \u003ccode\u003e\u003ca\u003eLogger\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Log.Logger",
        "fct-package": "hslogger",
        "fct-signature": "a -\u003e Logger -\u003e Logger",
        "fct-source": "src/System-Log-Logger.html#addHandler",
        "fct-type": "function",
        "title": "addHandler"
      },
      "index": {
        "description": "Add handler to Logger Returns new Logger",
        "hierarchy": "System Log Logger",
        "module": "System.Log.Logger",
        "name": "addHandler",
        "normalized": "a-\u003eLogger-\u003eLogger",
        "package": "hslogger",
        "partial": "Handler",
        "signature": "a-\u003eLogger-\u003eLogger"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslogger/docs/System-Log-Logger.html#v:alertM",
      "description": {
        "fct-descr": "\u003cp\u003eLog a message at \u003ccode\u003e\u003ca\u003eALERT\u003c/a\u003e\u003c/code\u003e priority \n\u003c/p\u003e",
        "fct-module": "System.Log.Logger",
        "fct-package": "hslogger",
        "fct-signature": "String-\u003e String-\u003e IO ()",
        "fct-type": "function",
        "title": "alertM"
      },
      "index": {
        "description": "Log message at ALERT priority",
        "hierarchy": "System Log Logger",
        "module": "System.Log.Logger",
        "name": "alertM",
        "normalized": "String-\u003eString-\u003eIO()",
        "package": "hslogger",
        "partial": "",
        "signature": "String-\u003eString-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslogger/docs/System-Log-Logger.html#v:clearLevel",
      "description": {
        "fct-descr": "\u003cp\u003eClears the \u003ca\u003elevel\u003c/a\u003e of the \u003ccode\u003e\u003ca\u003eLogger\u003c/a\u003e\u003c/code\u003e.  It will now inherit the level of\n | its parent.\n\u003c/p\u003e",
        "fct-module": "System.Log.Logger",
        "fct-package": "hslogger",
        "fct-signature": "Logger -\u003e Logger",
        "fct-source": "src/System-Log-Logger.html#clearLevel",
        "fct-type": "function",
        "title": "clearLevel"
      },
      "index": {
        "description": "Clears the level of the Logger It will now inherit the level of its parent",
        "hierarchy": "System Log Logger",
        "module": "System.Log.Logger",
        "name": "clearLevel",
        "normalized": "Logger-\u003eLogger",
        "package": "hslogger",
        "partial": "Level",
        "signature": "Logger-\u003eLogger"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslogger/docs/System-Log-Logger.html#v:criticalM",
      "description": {
        "fct-descr": "\u003cp\u003eLog a message at \u003ccode\u003e\u003ca\u003eCRITICAL\u003c/a\u003e\u003c/code\u003e priority \n\u003c/p\u003e",
        "fct-module": "System.Log.Logger",
        "fct-package": "hslogger",
        "fct-signature": "String-\u003e String-\u003e IO ()",
        "fct-type": "function",
        "title": "criticalM"
      },
      "index": {
        "description": "Log message at CRITICAL priority",
        "hierarchy": "System Log Logger",
        "module": "System.Log.Logger",
        "name": "criticalM",
        "normalized": "String-\u003eString-\u003eIO()",
        "package": "hslogger",
        "partial": "",
        "signature": "String-\u003eString-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslogger/docs/System-Log-Logger.html#v:debugM",
      "description": {
        "fct-descr": "\u003cp\u003eLog a message at \u003ccode\u003e\u003ca\u003eDEBUG\u003c/a\u003e\u003c/code\u003e priority \n\u003c/p\u003e",
        "fct-module": "System.Log.Logger",
        "fct-package": "hslogger",
        "fct-signature": "String-\u003e String-\u003e IO ()",
        "fct-type": "function",
        "title": "debugM"
      },
      "index": {
        "description": "Log message at DEBUG priority",
        "hierarchy": "System Log Logger",
        "module": "System.Log.Logger",
        "name": "debugM",
        "normalized": "String-\u003eString-\u003eIO()",
        "package": "hslogger",
        "partial": "",
        "signature": "String-\u003eString-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslogger/docs/System-Log-Logger.html#v:emergencyM",
      "description": {
        "fct-descr": "\u003cp\u003eLog a message at \u003ccode\u003e\u003ca\u003eEMERGENCY\u003c/a\u003e\u003c/code\u003e priority \n\u003c/p\u003e",
        "fct-module": "System.Log.Logger",
        "fct-package": "hslogger",
        "fct-signature": "String-\u003e String-\u003e IO ()",
        "fct-type": "function",
        "title": "emergencyM"
      },
      "index": {
        "description": "Log message at EMERGENCY priority",
        "hierarchy": "System Log Logger",
        "module": "System.Log.Logger",
        "name": "emergencyM",
        "normalized": "String-\u003eString-\u003eIO()",
        "package": "hslogger",
        "partial": "",
        "signature": "String-\u003eString-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslogger/docs/System-Log-Logger.html#v:errorM",
      "description": {
        "fct-descr": "\u003cp\u003eLog a message at \u003ccode\u003e\u003ca\u003eERROR\u003c/a\u003e\u003c/code\u003e priority \n\u003c/p\u003e",
        "fct-module": "System.Log.Logger",
        "fct-package": "hslogger",
        "fct-signature": "String-\u003e String-\u003e IO ()",
        "fct-type": "function",
        "title": "errorM"
      },
      "index": {
        "description": "Log message at ERROR priority",
        "hierarchy": "System Log Logger",
        "module": "System.Log.Logger",
        "name": "errorM",
        "normalized": "String-\u003eString-\u003eIO()",
        "package": "hslogger",
        "partial": "",
        "signature": "String-\u003eString-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslogger/docs/System-Log-Logger.html#v:getLevel",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the \u003ca\u003elevel\u003c/a\u003e of the logger.  Items beneath this\n level will be ignored.\n\u003c/p\u003e",
        "fct-module": "System.Log.Logger",
        "fct-package": "hslogger",
        "fct-signature": "Logger -\u003e Maybe Priority",
        "fct-source": "src/System-Log-Logger.html#getLevel",
        "fct-type": "function",
        "title": "getLevel"
      },
      "index": {
        "description": "Returns the level of the logger Items beneath this level will be ignored",
        "hierarchy": "System Log Logger",
        "module": "System.Log.Logger",
        "name": "getLevel",
        "normalized": "Logger-\u003eMaybe Priority",
        "package": "hslogger",
        "partial": "Level",
        "signature": "Logger-\u003eMaybe Priority"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslogger/docs/System-Log-Logger.html#v:getLogger",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the logger for the given name.  If no logger with that name\n exists, creates new loggers and any necessary parent loggers, with\n no connected handlers.\n\u003c/p\u003e",
        "fct-module": "System.Log.Logger",
        "fct-package": "hslogger",
        "fct-signature": "String -\u003e IO Logger",
        "fct-source": "src/System-Log-Logger.html#getLogger",
        "fct-type": "function",
        "title": "getLogger"
      },
      "index": {
        "description": "Returns the logger for the given name If no logger with that name exists creates new loggers and any necessary parent loggers with no connected handlers",
        "hierarchy": "System Log Logger",
        "module": "System.Log.Logger",
        "name": "getLogger",
        "normalized": "String-\u003eIO Logger",
        "package": "hslogger",
        "partial": "Logger",
        "signature": "String-\u003eIO Logger"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslogger/docs/System-Log-Logger.html#v:getRootLogger",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the root logger.\n\u003c/p\u003e",
        "fct-module": "System.Log.Logger",
        "fct-package": "hslogger",
        "fct-signature": "IO Logger",
        "fct-source": "src/System-Log-Logger.html#getRootLogger",
        "fct-type": "function",
        "title": "getRootLogger"
      },
      "index": {
        "description": "Returns the root logger",
        "hierarchy": "System Log Logger",
        "module": "System.Log.Logger",
        "name": "getRootLogger",
        "normalized": "",
        "package": "hslogger",
        "partial": "Root Logger",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslogger/docs/System-Log-Logger.html#v:infoM",
      "description": {
        "fct-descr": "\u003cp\u003eLog a message at \u003ccode\u003e\u003ca\u003eINFO\u003c/a\u003e\u003c/code\u003e priority \n\u003c/p\u003e",
        "fct-module": "System.Log.Logger",
        "fct-package": "hslogger",
        "fct-signature": "String-\u003e String-\u003e IO ()",
        "fct-type": "function",
        "title": "infoM"
      },
      "index": {
        "description": "Log message at INFO priority",
        "hierarchy": "System Log Logger",
        "module": "System.Log.Logger",
        "name": "infoM",
        "normalized": "String-\u003eString-\u003eIO()",
        "package": "hslogger",
        "partial": "",
        "signature": "String-\u003eString-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslogger/docs/System-Log-Logger.html#v:logL",
      "description": {
        "fct-descr": "\u003cp\u003eLog a message, assuming the current logger's level permits it.\n\u003c/p\u003e",
        "fct-module": "System.Log.Logger",
        "fct-package": "hslogger",
        "fct-signature": "Logger -\u003e Priority -\u003e String -\u003e IO ()",
        "fct-source": "src/System-Log-Logger.html#logL",
        "fct-type": "function",
        "title": "logL"
      },
      "index": {
        "description": "Log message assuming the current logger level permits it",
        "hierarchy": "System Log Logger",
        "module": "System.Log.Logger",
        "name": "logL",
        "normalized": "Logger-\u003ePriority-\u003eString-\u003eIO()",
        "package": "hslogger",
        "partial": "",
        "signature": "Logger-\u003ePriority-\u003eString-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslogger/docs/System-Log-Logger.html#v:logM",
      "description": {
        "fct-descr": "\u003cp\u003eLog a message using the given logger at a given priority. \n\u003c/p\u003e",
        "fct-module": "System.Log.Logger",
        "fct-package": "hslogger",
        "fct-signature": "String-\u003e Priority-\u003e String-\u003e IO ()",
        "fct-type": "function",
        "title": "logM"
      },
      "index": {
        "description": "Log message using the given logger at given priority",
        "hierarchy": "System Log Logger",
        "module": "System.Log.Logger",
        "name": "logM",
        "normalized": "String-\u003ePriority-\u003eString-\u003eIO()",
        "package": "hslogger",
        "partial": "",
        "signature": "String-\u003ePriority-\u003eString-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslogger/docs/System-Log-Logger.html#v:noticeM",
      "description": {
        "fct-descr": "\u003cp\u003eLog a message at \u003ccode\u003e\u003ca\u003eNOTICE\u003c/a\u003e\u003c/code\u003e priority \n\u003c/p\u003e",
        "fct-module": "System.Log.Logger",
        "fct-package": "hslogger",
        "fct-signature": "String-\u003e String-\u003e IO ()",
        "fct-type": "function",
        "title": "noticeM"
      },
      "index": {
        "description": "Log message at NOTICE priority",
        "hierarchy": "System Log Logger",
        "module": "System.Log.Logger",
        "name": "noticeM",
        "normalized": "String-\u003eString-\u003eIO()",
        "package": "hslogger",
        "partial": "",
        "signature": "String-\u003eString-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslogger/docs/System-Log-Logger.html#v:removeAllHandlers",
      "description": {
        "fct-descr": "\u003cp\u003eAllow gracefull shutdown. Release all opened files\u003cem\u003ehandlers\u003c/em\u003eetc.\n\u003c/p\u003e",
        "fct-module": "System.Log.Logger",
        "fct-package": "hslogger",
        "fct-signature": "IO ()",
        "fct-source": "src/System-Log-Logger.html#removeAllHandlers",
        "fct-type": "function",
        "title": "removeAllHandlers"
      },
      "index": {
        "description": "Allow gracefull shutdown Release all opened files handlers etc",
        "hierarchy": "System Log Logger",
        "module": "System.Log.Logger",
        "name": "removeAllHandlers",
        "normalized": "IO()",
        "package": "hslogger",
        "partial": "All Handlers",
        "signature": "IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslogger/docs/System-Log-Logger.html#v:rootLoggerName",
      "description": {
        "fct-descr": "\u003cp\u003eThis is the base class for the various log handlers.  They should\nall adhere to this class. \n\u003c/p\u003e\u003cp\u003eThe name of the root logger, which is always defined and present\n on the system.\n\u003c/p\u003e",
        "fct-module": "System.Log.Logger",
        "fct-package": "hslogger",
        "fct-signature": "String",
        "fct-source": "src/System-Log-Logger.html#rootLoggerName",
        "fct-type": "function",
        "title": "rootLoggerName"
      },
      "index": {
        "description": "This is the base class for the various log handlers They should all adhere to this class The name of the root logger which is always defined and present on the system",
        "hierarchy": "System Log Logger",
        "module": "System.Log.Logger",
        "name": "rootLoggerName",
        "normalized": "",
        "package": "hslogger",
        "partial": "Logger Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslogger/docs/System-Log-Logger.html#v:saveGlobalLogger",
      "description": {
        "fct-descr": "\u003cp\u003eUpdates the global record for the given logger to take into\n account any changes you may have made.\n\u003c/p\u003e",
        "fct-module": "System.Log.Logger",
        "fct-package": "hslogger",
        "fct-signature": "Logger -\u003e IO ()",
        "fct-source": "src/System-Log-Logger.html#saveGlobalLogger",
        "fct-type": "function",
        "title": "saveGlobalLogger"
      },
      "index": {
        "description": "Updates the global record for the given logger to take into account any changes you may have made",
        "hierarchy": "System Log Logger",
        "module": "System.Log.Logger",
        "name": "saveGlobalLogger",
        "normalized": "Logger-\u003eIO()",
        "package": "hslogger",
        "partial": "Global Logger",
        "signature": "Logger-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslogger/docs/System-Log-Logger.html#v:setHandlers",
      "description": {
        "fct-descr": "\u003cp\u003eSet the 'Logger'\\'s list of handlers to the list supplied.\n All existing handlers are removed first.\n\u003c/p\u003e",
        "fct-module": "System.Log.Logger",
        "fct-package": "hslogger",
        "fct-signature": "[a] -\u003e Logger -\u003e Logger",
        "fct-source": "src/System-Log-Logger.html#setHandlers",
        "fct-type": "function",
        "title": "setHandlers"
      },
      "index": {
        "description": "Set the Logger list of handlers to the list supplied All existing handlers are removed first",
        "hierarchy": "System Log Logger",
        "module": "System.Log.Logger",
        "name": "setHandlers",
        "normalized": "[a]-\u003eLogger-\u003eLogger",
        "package": "hslogger",
        "partial": "Handlers",
        "signature": "[a]-\u003eLogger-\u003eLogger"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslogger/docs/System-Log-Logger.html#v:setLevel",
      "description": {
        "fct-descr": "\u003cp\u003eSets the \u003ca\u003elevel\u003c/a\u003e of the \u003ccode\u003e\u003ca\u003eLogger\u003c/a\u003e\u003c/code\u003e.  Returns a new\n \u003ccode\u003e\u003ca\u003eLogger\u003c/a\u003e\u003c/code\u003e object with the new level.\n\u003c/p\u003e",
        "fct-module": "System.Log.Logger",
        "fct-package": "hslogger",
        "fct-signature": "Priority -\u003e Logger -\u003e Logger",
        "fct-source": "src/System-Log-Logger.html#setLevel",
        "fct-type": "function",
        "title": "setLevel"
      },
      "index": {
        "description": "Sets the level of the Logger Returns new Logger object with the new level",
        "hierarchy": "System Log Logger",
        "module": "System.Log.Logger",
        "name": "setLevel",
        "normalized": "Priority-\u003eLogger-\u003eLogger",
        "package": "hslogger",
        "partial": "Level",
        "signature": "Priority-\u003eLogger-\u003eLogger"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslogger/docs/System-Log-Logger.html#v:traplogging",
      "description": {
        "fct-descr": "\u003cp\u003eTraps exceptions that may occur, logging them, then passing them on.\n\u003c/p\u003e\u003cp\u003eTakes a logger name, priority, leading description text (you can set it to\n\u003ccode\u003e\"\"\u003c/code\u003e if you don't want any), and action to run.\n\u003c/p\u003e",
        "fct-module": "System.Log.Logger",
        "fct-package": "hslogger",
        "fct-signature": "String -\u003e Priority -\u003e String -\u003e IO a -\u003e IO a",
        "fct-source": "src/System-Log-Logger.html#traplogging",
        "fct-type": "function",
        "title": "traplogging"
      },
      "index": {
        "description": "Traps exceptions that may occur logging them then passing them on Takes logger name priority leading description text you can set it to if you don want any and action to run",
        "hierarchy": "System Log Logger",
        "module": "System.Log.Logger",
        "name": "traplogging",
        "normalized": "String-\u003ePriority-\u003eString-\u003eIO a-\u003eIO a",
        "package": "hslogger",
        "partial": "",
        "signature": "String-\u003ePriority-\u003eString-\u003eIO a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslogger/docs/System-Log-Logger.html#v:updateGlobalLogger",
      "description": {
        "fct-descr": "\u003cp\u003eHelps you make changes on the given logger.  Takes a function\nthat makes changes and writes those changes back to the global\ndatabase.  Here's an example from above (\"s\" is a \u003ccode\u003e\u003ca\u003eLogHandler\u003c/a\u003e\u003c/code\u003e):\n\u003c/p\u003e\u003cpre\u003e updateGlobalLogger \"MyApp.BuggyComponent\"\n                    (setLevel DEBUG . setHandlers [s])\n\u003c/pre\u003e",
        "fct-module": "System.Log.Logger",
        "fct-package": "hslogger",
        "fct-signature": "String-\u003e (Logger -\u003e Logger)-\u003e IO ()",
        "fct-type": "function",
        "title": "updateGlobalLogger"
      },
      "index": {
        "description": "Helps you make changes on the given logger Takes function that makes changes and writes those changes back to the global database Here an example from above is LogHandler updateGlobalLogger MyApp.BuggyComponent setLevel DEBUG setHandlers",
        "hierarchy": "System Log Logger",
        "module": "System.Log.Logger",
        "name": "updateGlobalLogger",
        "normalized": "String-\u003e(Logger-\u003eLogger)-\u003eIO()",
        "package": "hslogger",
        "partial": "Global Logger",
        "signature": "String-\u003e(Logger-\u003eLogger)-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslogger/docs/System-Log-Logger.html#v:warningM",
      "description": {
        "fct-descr": "\u003cp\u003eLog a message at \u003ccode\u003e\u003ca\u003eWARNING\u003c/a\u003e\u003c/code\u003e priority \n\u003c/p\u003e",
        "fct-module": "System.Log.Logger",
        "fct-package": "hslogger",
        "fct-signature": "String-\u003e String-\u003e IO ()",
        "fct-type": "function",
        "title": "warningM"
      },
      "index": {
        "description": "Log message at WARNING priority",
        "hierarchy": "System Log Logger",
        "module": "System.Log.Logger",
        "name": "warningM",
        "normalized": "String-\u003eString-\u003eIO()",
        "package": "hslogger",
        "partial": "",
        "signature": "String-\u003eString-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslogger/docs/System-Log.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHaskell Logging Framework\n\u003c/p\u003e\u003cp\u003eWritten by John Goerzen, jgoerzen@complete.org\n\u003c/p\u003e\u003cp\u003eThis module defines basic types used for logging.\n\u003c/p\u003e\u003cp\u003eExtensive documentation is available in\n\u003ca\u003eSystem.Log.Logger\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.Log",
        "fct-package": "hslogger",
        "fct-signature": "module",
        "fct-source": "src/System-Log.html",
        "fct-type": "module",
        "title": "Log"
      },
      "index": {
        "description": "Haskell Logging Framework Written by John Goerzen jgoerzen@complete.org This module defines basic types used for logging Extensive documentation is available in System.Log.Logger",
        "hierarchy": "System Log",
        "module": "System.Log",
        "name": "Log",
        "normalized": "",
        "package": "hslogger",
        "partial": "Log",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslogger/docs/System-Log.html#t:LogRecord",
      "description": {
        "fct-descr": "\u003cp\u003eInternal type of log records \n\u003c/p\u003e",
        "fct-module": "System.Log",
        "fct-package": "hslogger",
        "fct-signature": "type",
        "fct-source": "src/System-Log.html#LogRecord",
        "fct-type": "type",
        "title": "LogRecord"
      },
      "index": {
        "description": "Internal type of log records",
        "hierarchy": "System Log",
        "module": "System.Log",
        "name": "LogRecord",
        "normalized": "",
        "package": "hslogger",
        "partial": "Log Record",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslogger/docs/System-Log.html#t:Priority",
      "description": {
        "fct-descr": "\u003cp\u003ePriorities are used to define how important a log message is.\nUsers can filter log messages based on priorities.\n\u003c/p\u003e\u003cp\u003eThese have their roots on the traditional syslog system.  The standard\ndefinitions are given below, but you are free to interpret them however you\nlike.  They are listed here in ascending importance order.\n\u003c/p\u003e",
        "fct-module": "System.Log",
        "fct-package": "hslogger",
        "fct-signature": "data",
        "fct-source": "src/System-Log.html#Priority",
        "fct-type": "data",
        "title": "Priority"
      },
      "index": {
        "description": "Priorities are used to define how important log message is Users can filter log messages based on priorities These have their roots on the traditional syslog system The standard definitions are given below but you are free to interpret them however you like They are listed here in ascending importance order",
        "hierarchy": "System Log",
        "module": "System.Log",
        "name": "Priority",
        "normalized": "",
        "package": "hslogger",
        "partial": "Priority",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslogger/docs/System-Log.html#v:ALERT",
      "description": {
        "fct-descr": "\u003cp\u003eTake immediate action\n\u003c/p\u003e",
        "fct-module": "System.Log",
        "fct-package": "hslogger",
        "fct-signature": "ALERT",
        "fct-source": "src/System-Log.html#Priority",
        "fct-type": "function",
        "title": "ALERT"
      },
      "index": {
        "description": "Take immediate action",
        "hierarchy": "System Log",
        "module": "System.Log",
        "name": "ALERT",
        "normalized": "",
        "package": "hslogger",
        "partial": "ALERT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslogger/docs/System-Log.html#v:CRITICAL",
      "description": {
        "fct-descr": "\u003cp\u003eSevere situations\n\u003c/p\u003e",
        "fct-module": "System.Log",
        "fct-package": "hslogger",
        "fct-signature": "CRITICAL",
        "fct-source": "src/System-Log.html#Priority",
        "fct-type": "function",
        "title": "CRITICAL"
      },
      "index": {
        "description": "Severe situations",
        "hierarchy": "System Log",
        "module": "System.Log",
        "name": "CRITICAL",
        "normalized": "",
        "package": "hslogger",
        "partial": "CRITICAL",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslogger/docs/System-Log.html#v:DEBUG",
      "description": {
        "fct-descr": "\u003cp\u003eDebug messages\n\u003c/p\u003e",
        "fct-module": "System.Log",
        "fct-package": "hslogger",
        "fct-signature": "DEBUG",
        "fct-source": "src/System-Log.html#Priority",
        "fct-type": "function",
        "title": "DEBUG"
      },
      "index": {
        "description": "Debug messages",
        "hierarchy": "System Log",
        "module": "System.Log",
        "name": "DEBUG",
        "normalized": "",
        "package": "hslogger",
        "partial": "DEBUG",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslogger/docs/System-Log.html#v:EMERGENCY",
      "description": {
        "fct-descr": "\u003cp\u003eSystem is unusable\n\u003c/p\u003e",
        "fct-module": "System.Log",
        "fct-package": "hslogger",
        "fct-signature": "EMERGENCY",
        "fct-source": "src/System-Log.html#Priority",
        "fct-type": "function",
        "title": "EMERGENCY"
      },
      "index": {
        "description": "System is unusable",
        "hierarchy": "System Log",
        "module": "System.Log",
        "name": "EMERGENCY",
        "normalized": "",
        "package": "hslogger",
        "partial": "EMERGENCY",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslogger/docs/System-Log.html#v:ERROR",
      "description": {
        "fct-descr": "\u003cp\u003eGeneral Errors\n\u003c/p\u003e",
        "fct-module": "System.Log",
        "fct-package": "hslogger",
        "fct-signature": "ERROR",
        "fct-source": "src/System-Log.html#Priority",
        "fct-type": "function",
        "title": "ERROR"
      },
      "index": {
        "description": "General Errors",
        "hierarchy": "System Log",
        "module": "System.Log",
        "name": "ERROR",
        "normalized": "",
        "package": "hslogger",
        "partial": "ERROR",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslogger/docs/System-Log.html#v:INFO",
      "description": {
        "fct-descr": "\u003cp\u003eInformation\n\u003c/p\u003e",
        "fct-module": "System.Log",
        "fct-package": "hslogger",
        "fct-signature": "INFO",
        "fct-source": "src/System-Log.html#Priority",
        "fct-type": "function",
        "title": "INFO"
      },
      "index": {
        "description": "Information",
        "hierarchy": "System Log",
        "module": "System.Log",
        "name": "INFO",
        "normalized": "",
        "package": "hslogger",
        "partial": "INFO",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslogger/docs/System-Log.html#v:NOTICE",
      "description": {
        "fct-descr": "\u003cp\u003eNormal runtime conditions\n\u003c/p\u003e",
        "fct-module": "System.Log",
        "fct-package": "hslogger",
        "fct-signature": "NOTICE",
        "fct-source": "src/System-Log.html#Priority",
        "fct-type": "function",
        "title": "NOTICE"
      },
      "index": {
        "description": "Normal runtime conditions",
        "hierarchy": "System Log",
        "module": "System.Log",
        "name": "NOTICE",
        "normalized": "",
        "package": "hslogger",
        "partial": "NOTICE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslogger/docs/System-Log.html#v:WARNING",
      "description": {
        "fct-descr": "\u003cp\u003eGeneral Warnings\n\u003c/p\u003e",
        "fct-module": "System.Log",
        "fct-package": "hslogger",
        "fct-signature": "WARNING",
        "fct-source": "src/System-Log.html#Priority",
        "fct-type": "function",
        "title": "WARNING"
      },
      "index": {
        "description": "General Warnings",
        "hierarchy": "System Log",
        "module": "System.Log",
        "name": "WARNING",
        "normalized": "",
        "package": "hslogger",
        "partial": "WARNING",
        "signature": ""
      }
    }
  }
]