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
        "word": "SimpleLog"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines the \u003ccode\u003e\u003ca\u003eFormat\u003c/a\u003e\u003c/code\u003e datatype that describes how to format a log line.\n  It also defines a template function \u003ccode\u003e$(format _) :: \u003ccode\u003e\u003ca\u003eFormat\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e that allows C-style string formatting.\n  The format string is thus parsed at compile time.\n\u003c/p\u003e\u003cp\u003eThe format string may contain the following elements:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e %m - The logged message\n\u003c/li\u003e\u003cli\u003e %s - The severity of the message\n\u003c/li\u003e\u003cli\u003e %t - The name of the logging thread\n\u003c/li\u003e\u003cli\u003e %d(FORMAT) - A timestamp, formatted with FORMAT.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe datetime FORMAT is a UNIX style format string detailed in \u003ca\u003eData.Time.Format\u003c/a\u003e. The only difference is that closing brackets ')'  inside the datetime format must be escaped with a backslash.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e\nlogFormat = $(format \"%d(%T) (%s) %t: %m\")\n\u003c/pre\u003e\u003cp\u003eWhich when logging with \u003ccode\u003e\u003ccode\u003e\u003ca\u003elogI\u003c/a\u003e\u003c/code\u003e \"Something\"\u003c/code\u003e will produce something like:\n\u003c/p\u003e\u003cpre\u003e\n14:49:06 (INFO   ) main: Something\n\u003c/pre\u003e\u003cp\u003eExample for escaping ')' in the datetime format string:\n\u003c/p\u003e\u003cpre\u003e\nlogFormat = $(format \"%d((%F\\\\)(%T\\\\)) %m\")\n\u003c/pre\u003e\u003cp\u003eWhich when logging with \u003ccode\u003e\u003ccode\u003e\u003ca\u003elogI\u003c/a\u003e\u003c/code\u003e \"Something\"\u003c/code\u003e will produce:\n\u003c/p\u003e\u003cpre\u003e\n(2013-10-02)(16:26:21) Something\n\u003c/pre\u003e\u003cp\u003eNote how we need an additional '\\' because of Haskell strings\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Log.SLog.Format",
          "name": "Format",
          "package": "SimpleLog",
          "source": "src/System-Log-SLog-Format.html",
          "type": "module"
        },
        "index": {
          "description": "This module defines the Format datatype that describes how to format log line It also defines template function format Format that allows C-style string formatting The format string is thus parsed at compile time The format string may contain the following elements The logged message The severity of the message The name of the logging thread FORMAT timestamp formatted with FORMAT The datetime FORMAT is UNIX style format string detailed in Data.Time.Format The only difference is that closing brackets inside the datetime format must be escaped with backslash Example logFormat format Which when logging with logI Something will produce something like INFO main Something Example for escaping in the datetime format string logFormat format Which when logging with logI Something will produce Something Note how we need an additional because of Haskell strings",
          "hierarchy": "System Log SLog Format",
          "module": "System.Log.SLog.Format",
          "name": "Format",
          "package": "SimpleLog",
          "partial": "Format",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/SimpleLog/docs/System-Log-SLog-Format.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eFormat\u003c/a\u003e\u003c/code\u003e is the type of a full format. It is simply a list of \u003ccode\u003e\u003ca\u003eFormatElem\u003c/a\u003e\u003c/code\u003es\n\u003c/p\u003e",
          "module": "System.Log.SLog.Format",
          "name": "Format",
          "package": "SimpleLog",
          "source": "src/System-Log-SLog-Format.html#Format",
          "type": "type"
        },
        "index": {
          "description": "Format is the type of full format It is simply list of FormatElem",
          "hierarchy": "System Log SLog Format",
          "module": "System.Log.SLog.Format",
          "name": "Format",
          "package": "SimpleLog",
          "partial": "Format",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/SimpleLog/docs/System-Log-SLog-Format.html#t:Format"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eFormatElem\u003c/a\u003e\u003c/code\u003e is a formatting element\n\u003c/p\u003e",
          "module": "System.Log.SLog.Format",
          "name": "FormatElem",
          "package": "SimpleLog",
          "source": "src/System-Log-SLog-Format.html#FormatElem",
          "type": "data"
        },
        "index": {
          "description": "FormatElem is formatting element",
          "hierarchy": "System Log SLog Format",
          "module": "System.Log.SLog.Format",
          "name": "FormatElem",
          "package": "SimpleLog",
          "partial": "Format Elem",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/SimpleLog/docs/System-Log-SLog-Format.html#t:FormatElem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Log.SLog.Format",
          "name": "DateTimeElem",
          "package": "SimpleLog",
          "signature": "DateTimeElem (ZonedTime -\u003e Text)",
          "source": "src/System-Log-SLog-Format.html#FormatElem",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Log SLog Format",
          "module": "System.Log.SLog.Format",
          "name": "DateTimeElem",
          "normalized": "DateTimeElem(ZonedTime-\u003eText)",
          "package": "SimpleLog",
          "partial": "Date Time Elem",
          "signature": "DateTimeElem(ZonedTime-\u003eText)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleLog/docs/System-Log-SLog-Format.html#v:DateTimeElem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Log.SLog.Format",
          "name": "MessageElem",
          "package": "SimpleLog",
          "signature": "MessageElem",
          "source": "src/System-Log-SLog-Format.html#FormatElem",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Log SLog Format",
          "module": "System.Log.SLog.Format",
          "name": "MessageElem",
          "package": "SimpleLog",
          "partial": "Message Elem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleLog/docs/System-Log-SLog-Format.html#v:MessageElem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Log.SLog.Format",
          "name": "SeverityElem",
          "package": "SimpleLog",
          "signature": "SeverityElem",
          "source": "src/System-Log-SLog-Format.html#FormatElem",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Log SLog Format",
          "module": "System.Log.SLog.Format",
          "name": "SeverityElem",
          "package": "SimpleLog",
          "partial": "Severity Elem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleLog/docs/System-Log-SLog-Format.html#v:SeverityElem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Log.SLog.Format",
          "name": "StringElem",
          "package": "SimpleLog",
          "signature": "StringElem Text",
          "source": "src/System-Log-SLog-Format.html#FormatElem",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Log SLog Format",
          "module": "System.Log.SLog.Format",
          "name": "StringElem",
          "package": "SimpleLog",
          "partial": "String Elem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleLog/docs/System-Log-SLog-Format.html#v:StringElem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Log.SLog.Format",
          "name": "ThreadElem",
          "package": "SimpleLog",
          "signature": "ThreadElem",
          "source": "src/System-Log-SLog-Format.html#FormatElem",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Log SLog Format",
          "module": "System.Log.SLog.Format",
          "name": "ThreadElem",
          "package": "SimpleLog",
          "partial": "Thread Elem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleLog/docs/System-Log-SLog-Format.html#v:ThreadElem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e$(\u003ccode\u003e\u003ca\u003eformat\u003c/a\u003e\u003c/code\u003e _) :: \u003ccode\u003e\u003ca\u003eFormat\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e is a template function that parses the passed in format string, then finalises it and returns a \u003ccode\u003e\u003ca\u003eFormat\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "System.Log.SLog.Format",
          "name": "format",
          "package": "SimpleLog",
          "signature": "String -\u003e ExpQ",
          "source": "src/System-Log-SLog-Format.html#format",
          "type": "function"
        },
        "index": {
          "description": "format Format is template function that parses the passed in format string then finalises it and returns Format",
          "hierarchy": "System Log SLog Format",
          "module": "System.Log.SLog.Format",
          "name": "format",
          "normalized": "String-\u003eExpQ",
          "package": "SimpleLog",
          "signature": "String-\u003eExpQ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleLog/docs/System-Log-SLog-Format.html#v:format"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSimpleLog is a library for convenient and configurable logging. It uses the usual monad transformer + associated class design: \u003ccode\u003e\u003ca\u003eSLogT\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eMonadSLog\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eExample usage:\n\u003c/p\u003e\u003cpre\u003e\nimport System.Log.SLog\n\nmain = simpleLog \"Example.log\" $ do\n    logD \"Some debugging information\"\n    logI \"This is some other information\"\n    logW \"Something bad is about to happen\"\n    logE \"Something bad happened\"\n\u003c/pre\u003e\u003cp\u003eThe above sample code when run will produce output similar to this:\n\u003c/p\u003e\u003cpre\u003e\n2013-10-02 14:17:40 | INFO    | [ThreadId 58] This is some other information\n2013-10-02 14:17:40 | WARNING | [ThreadId 58] Something bad is about to happen\n2013-10-02 14:17:40 | ERROR   | [ThreadId 58] Something bad happened\n\u003c/pre\u003e\u003cp\u003eNote how the debug line is not displayed. This is because the default configuration (\u003ccode\u003e\u003ca\u003edefaultLogConfig\u003c/a\u003e\u003c/code\u003e) only logs to stdout when the severity is \u003e= \u003ccode\u003e\u003ca\u003eINFO\u003c/a\u003e\u003c/code\u003e.\n  The above code will also append the log lines to the file \u003ccode\u003e\"Example.log\"\u003c/code\u003e, including the debug line.\n\u003c/p\u003e\u003cp\u003eThe following example shows how one can fine tune SimpleLog as well as how to fork other logging threads.\n\u003c/p\u003e\u003cpre\u003e\n-- Our log configuration specifies that no ANSI colouring should be used, all log lines\n-- should be written to the TChan, and \u003e= INFO severity lines should be written to the\n-- stdout synchronously.\nlogConfig :: TChan LogLine -\u003e LogConfig\nlogConfig tchan\n    = LogConfig { ansiColours = False\n                , loggers = [ (anySev, TChanLogger tchan)\n                            , ((\u003e= INFO), StdoutLogger Sync)\n                            ] }\n\n-- Our custom logging format\nlogFormat :: Format\nlogFormat = $(format \"%d(%T) (%s) %t: %m\")\n\n-- The main thread will fork a child thread, then wait until everything is flushed, then\n-- count how many messages have been written in total to the TChan (which will be all\n-- messages as our filter passes through everything)\nmain :: IO ()\nmain = do\n  tchan \u003c- newTChanIO\n  (_, fkey) \u003c- runSLogT (logConfig tchan) logFormat \"main\" $ do\n    logS \"Main thread started successfully\"\n    logD \"This will not appear on stdout\"\n    _ \u003c- forkSLog \"child\" $ do\n      logS \"I am the child\"\n      liftIO $ threadDelay 5000000\n      logW \"CHILD SHUTTING DOWN\"\n    logI \"Exiting main thread\"\n  waitFlush fkey\n  c \u003c- countTChan tchan\n  putStrLn $ show c ++ \" messages have been logged in total\"\n\n-- Counts the number of elements in the TChan (and pops them all)\ncountTChan :: TChan a -\u003e IO Int\ncountTChan tchan = do\n  let count = do\n        em \u003c- isEmptyTChan tchan\n        if em then return 0\n        else readTChan tchan \u003e\u003e (1 +) \u003c$\u003e count\n  atomically count\n\u003c/pre\u003e\u003cp\u003eThe above code when run will produce something like this:\n\u003c/p\u003e\u003cpre\u003e\n17:35:15 (SUCCESS) main: Main thread started successfully\n17:35:15 (SUCCESS) child: I am the child, waiting for 5 seconds...\n17:35:15 (INFO   ) main: Exiting main thread\n17:35:20 (WARNING) child: CHILD SHUTTING DOWN\n5 messages have been logged in total\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "System.Log.SLog",
          "name": "SLog",
          "package": "SimpleLog",
          "source": "src/System-Log-SLog.html",
          "type": "module"
        },
        "index": {
          "description": "SimpleLog is library for convenient and configurable logging It uses the usual monad transformer associated class design SLogT and MonadSLog Example usage import System.Log.SLog main simpleLog Example.log do logD Some debugging information logI This is some other information logW Something bad is about to happen logE Something bad happened The above sample code when run will produce output similar to this INFO ThreadId This is some other information WARNING ThreadId Something bad is about to happen ERROR ThreadId Something bad happened Note how the debug line is not displayed This is because the default configuration defaultLogConfig only logs to stdout when the severity is INFO The above code will also append the log lines to the file Example.log including the debug line The following example shows how one can fine tune SimpleLog as well as how to fork other logging threads Our log configuration specifies that no ANSI colouring should be used all log lines should be written to the TChan and INFO severity lines should be written to the stdout synchronously logConfig TChan LogLine LogConfig logConfig tchan LogConfig ansiColours False loggers anySev TChanLogger tchan INFO StdoutLogger Sync Our custom logging format logFormat Format logFormat format The main thread will fork child thread then wait until everything is flushed then count how many messages have been written in total to the TChan which will be all messages as our filter passes through everything main IO main do tchan newTChanIO fkey runSLogT logConfig tchan logFormat main do logS Main thread started successfully logD This will not appear on stdout forkSLog child do logS am the child liftIO threadDelay logW CHILD SHUTTING DOWN logI Exiting main thread waitFlush fkey countTChan tchan putStrLn show messages have been logged in total Counts the number of elements in the TChan and pops them all countTChan TChan IO Int countTChan tchan do let count do em isEmptyTChan tchan if em then return else readTChan tchan count atomically count The above code when run will produce something like this SUCCESS main Main thread started successfully SUCCESS child am the child waiting for seconds INFO main Exiting main thread WARNING child CHILD SHUTTING DOWN messages have been logged in total",
          "hierarchy": "System Log SLog",
          "module": "System.Log.SLog",
          "name": "SLog",
          "package": "SimpleLog",
          "partial": "SLog",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/SimpleLog/docs/System-Log-SLog.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eFilter\u003c/a\u003e\u003c/code\u003e is the type of logging filters. \u003ccode\u003e\u003ca\u003eFilter\u003c/a\u003e\u003c/code\u003es may only depend on the \u003ccode\u003e\u003ca\u003eSeverity\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Log.SLog",
          "name": "Filter",
          "package": "SimpleLog",
          "source": "src/System-Log-SLog.html#Filter",
          "type": "type"
        },
        "index": {
          "description": "Filter is the type of logging filters Filter may only depend on the Severity",
          "hierarchy": "System Log SLog",
          "module": "System.Log.SLog",
          "name": "Filter",
          "package": "SimpleLog",
          "partial": "Filter",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/SimpleLog/docs/System-Log-SLog.html#t:Filter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eFlushKey\u003c/a\u003e\u003c/code\u003e is returned when an \u003ccode\u003e\u003ca\u003eSLogT\u003c/a\u003e\u003c/code\u003e is run. You may wait on it with \u003ccode\u003e\u003ca\u003ewaitFlush\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Log.SLog",
          "name": "FlushKey",
          "package": "SimpleLog",
          "source": "src/System-Log-SLog.html#FlushKey",
          "type": "data"
        },
        "index": {
          "description": "FlushKey is returned when an SLogT is run You may wait on it with waitFlush",
          "hierarchy": "System Log SLog",
          "module": "System.Log.SLog",
          "name": "FlushKey",
          "package": "SimpleLog",
          "partial": "Flush Key",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/SimpleLog/docs/System-Log-SLog.html#t:FlushKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eLogConfig\u003c/a\u003e\u003c/code\u003e is the configuration of \u003ccode\u003e\u003ca\u003eSLogT\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "System.Log.SLog",
          "name": "LogConfig",
          "package": "SimpleLog",
          "source": "src/System-Log-SLog.html#LogConfig",
          "type": "data"
        },
        "index": {
          "description": "LogConfig is the configuration of SLogT",
          "hierarchy": "System Log SLog",
          "module": "System.Log.SLog",
          "name": "LogConfig",
          "package": "SimpleLog",
          "partial": "Log Config",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/SimpleLog/docs/System-Log-SLog.html#t:LogConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eLogLine\u003c/a\u003e\u003c/code\u003e is a log message together with the severity, time of logging and the logging thread's name.\n\u003c/p\u003e",
          "module": "System.Log.SLog",
          "name": "LogLine",
          "package": "SimpleLog",
          "source": "src/System-Log-SLog.html#LogLine",
          "type": "data"
        },
        "index": {
          "description": "LogLine is log message together with the severity time of logging and the logging thread name",
          "hierarchy": "System Log SLog",
          "module": "System.Log.SLog",
          "name": "LogLine",
          "package": "SimpleLog",
          "partial": "Log Line",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/SimpleLog/docs/System-Log-SLog.html#t:LogLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eLogger\u003c/a\u003e\u003c/code\u003e type specifies the types of sinks we can log to.\n\u003c/p\u003e",
          "module": "System.Log.SLog",
          "name": "Logger",
          "package": "SimpleLog",
          "source": "src/System-Log-SLog.html#Logger",
          "type": "data"
        },
        "index": {
          "description": "The Logger type specifies the types of sinks we can log to",
          "hierarchy": "System Log SLog",
          "module": "System.Log.SLog",
          "name": "Logger",
          "package": "SimpleLog",
          "partial": "Logger",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/SimpleLog/docs/System-Log-SLog.html#t:Logger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe class of monads that can perform logging\n\u003c/p\u003e",
          "module": "System.Log.SLog",
          "name": "MonadSLog",
          "package": "SimpleLog",
          "source": "src/System-Log-SLog.html#MonadSLog",
          "type": "class"
        },
        "index": {
          "description": "The class of monads that can perform logging",
          "hierarchy": "System Log SLog",
          "module": "System.Log.SLog",
          "name": "MonadSLog",
          "package": "SimpleLog",
          "partial": "Monad SLog",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/SimpleLog/docs/System-Log-SLog.html#t:MonadSLog"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is a simple monad for the bottom of one's monad stack.\n\u003c/p\u003e",
          "module": "System.Log.SLog",
          "name": "SLog",
          "package": "SimpleLog",
          "source": "src/System-Log-SLog.html#SLog",
          "type": "type"
        },
        "index": {
          "description": "This is simple monad for the bottom of one monad stack",
          "hierarchy": "System Log SLog",
          "module": "System.Log.SLog",
          "name": "SLog",
          "package": "SimpleLog",
          "partial": "SLog",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/SimpleLog/docs/System-Log-SLog.html#t:SLog"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe SLogT monad transformer is simply a \u003ccode\u003e\u003ca\u003eResourceT\u003c/a\u003e\u003c/code\u003e with an environment\n\u003c/p\u003e",
          "module": "System.Log.SLog",
          "name": "SLogT",
          "package": "SimpleLog",
          "source": "src/System-Log-SLog.html#SLogT",
          "type": "data"
        },
        "index": {
          "description": "The SLogT monad transformer is simply ResourceT with an environment",
          "hierarchy": "System Log SLog",
          "module": "System.Log.SLog",
          "name": "SLogT",
          "package": "SimpleLog",
          "partial": "SLog",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/SimpleLog/docs/System-Log-SLog.html#t:SLogT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of severities with increasing importance\n\u003c/p\u003e",
          "module": "System.Log.SLog",
          "name": "Severity",
          "package": "SimpleLog",
          "source": "src/System-Log-SLog.html#Severity",
          "type": "data"
        },
        "index": {
          "description": "The type of severities with increasing importance",
          "hierarchy": "System Log SLog",
          "module": "System.Log.SLog",
          "name": "Severity",
          "package": "SimpleLog",
          "partial": "Severity",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/SimpleLog/docs/System-Log-SLog.html#t:Severity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eSync\u003c/a\u003e\u003c/code\u003e is a type to specify whether a logger should log synchronously or asynchronously.\n Syncronous logging means that the logging thread will block until the message has been written and flushed to the sink.\n Asynchronous logging means that the logging thread will write to a work queue and move on. The work queue will be read by a dedicated thread that is forked for each sink.\n\u003c/p\u003e",
          "module": "System.Log.SLog",
          "name": "Sync",
          "package": "SimpleLog",
          "source": "src/System-Log-SLog.html#Sync",
          "type": "data"
        },
        "index": {
          "description": "Sync is type to specify whether logger should log synchronously or asynchronously Syncronous logging means that the logging thread will block until the message has been written and flushed to the sink Asynchronous logging means that the logging thread will write to work queue and move on The work queue will be read by dedicated thread that is forked for each sink",
          "hierarchy": "System Log SLog",
          "module": "System.Log.SLog",
          "name": "Sync",
          "package": "SimpleLog",
          "partial": "Sync",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/SimpleLog/docs/System-Log-SLog.html#t:Sync"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Log.SLog",
          "name": "Async",
          "package": "SimpleLog",
          "signature": "Async",
          "source": "src/System-Log-SLog.html#Sync",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Log SLog",
          "module": "System.Log.SLog",
          "name": "Async",
          "package": "SimpleLog",
          "partial": "Async",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleLog/docs/System-Log-SLog.html#v:Async"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Log.SLog",
          "name": "DEBUG",
          "package": "SimpleLog",
          "signature": "DEBUG",
          "source": "src/System-Log-SLog.html#Severity",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Log SLog",
          "module": "System.Log.SLog",
          "name": "DEBUG",
          "package": "SimpleLog",
          "partial": "DEBUG",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleLog/docs/System-Log-SLog.html#v:DEBUG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Log.SLog",
          "name": "ERROR",
          "package": "SimpleLog",
          "signature": "ERROR",
          "source": "src/System-Log-SLog.html#Severity",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Log SLog",
          "module": "System.Log.SLog",
          "name": "ERROR",
          "package": "SimpleLog",
          "partial": "ERROR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleLog/docs/System-Log-SLog.html#v:ERROR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eFileLogger\u003c/a\u003e\u003c/code\u003e specifies a file to be logged in.\n Note that symbolic links will be resolved using \u003ccode\u003e\u003ca\u003ecanonicalizePath\u003c/a\u003e\u003c/code\u003e when deciding whether two \u003ccode\u003e\u003ca\u003eFileLogger\u003c/a\u003e\u003c/code\u003es point to the same file.\n\u003c/p\u003e",
          "module": "System.Log.SLog",
          "name": "FileLogger",
          "package": "SimpleLog",
          "signature": "FileLogger Sync FilePath",
          "source": "src/System-Log-SLog.html#Logger",
          "type": "function"
        },
        "index": {
          "description": "FileLogger specifies file to be logged in Note that symbolic links will be resolved using canonicalizePath when deciding whether two FileLogger point to the same file",
          "hierarchy": "System Log SLog",
          "module": "System.Log.SLog",
          "name": "FileLogger",
          "package": "SimpleLog",
          "partial": "File Logger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleLog/docs/System-Log-SLog.html#v:FileLogger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Log.SLog",
          "name": "INFO",
          "package": "SimpleLog",
          "signature": "INFO",
          "source": "src/System-Log-SLog.html#Severity",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Log SLog",
          "module": "System.Log.SLog",
          "name": "INFO",
          "package": "SimpleLog",
          "partial": "INFO",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleLog/docs/System-Log-SLog.html#v:INFO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Log.SLog",
          "name": "LogConfig",
          "package": "SimpleLog",
          "signature": "LogConfig",
          "source": "src/System-Log-SLog.html#LogConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Log SLog",
          "module": "System.Log.SLog",
          "name": "LogConfig",
          "package": "SimpleLog",
          "partial": "Log Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleLog/docs/System-Log-SLog.html#v:LogConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Log.SLog",
          "name": "LogLine",
          "package": "SimpleLog",
          "signature": "LogLine",
          "source": "src/System-Log-SLog.html#LogLine",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Log SLog",
          "module": "System.Log.SLog",
          "name": "LogLine",
          "package": "SimpleLog",
          "partial": "Log Line",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleLog/docs/System-Log-SLog.html#v:LogLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Log.SLog",
          "name": "SUCCESS",
          "package": "SimpleLog",
          "signature": "SUCCESS",
          "source": "src/System-Log-SLog.html#Severity",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Log SLog",
          "module": "System.Log.SLog",
          "name": "SUCCESS",
          "package": "SimpleLog",
          "partial": "SUCCESS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleLog/docs/System-Log-SLog.html#v:SUCCESS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eStderrLogger\u003c/a\u003e\u003c/code\u003e logs to the stderr\n\u003c/p\u003e",
          "module": "System.Log.SLog",
          "name": "StderrLogger",
          "package": "SimpleLog",
          "signature": "StderrLogger Sync",
          "source": "src/System-Log-SLog.html#Logger",
          "type": "function"
        },
        "index": {
          "description": "StderrLogger logs to the stderr",
          "hierarchy": "System Log SLog",
          "module": "System.Log.SLog",
          "name": "StderrLogger",
          "package": "SimpleLog",
          "partial": "Stderr Logger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleLog/docs/System-Log-SLog.html#v:StderrLogger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eStdoutLogger\u003c/a\u003e\u003c/code\u003e logs to the stdout\n\u003c/p\u003e",
          "module": "System.Log.SLog",
          "name": "StdoutLogger",
          "package": "SimpleLog",
          "signature": "StdoutLogger Sync",
          "source": "src/System-Log-SLog.html#Logger",
          "type": "function"
        },
        "index": {
          "description": "StdoutLogger logs to the stdout",
          "hierarchy": "System Log SLog",
          "module": "System.Log.SLog",
          "name": "StdoutLogger",
          "package": "SimpleLog",
          "partial": "Stdout Logger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleLog/docs/System-Log-SLog.html#v:StdoutLogger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Log.SLog",
          "name": "Sync",
          "package": "SimpleLog",
          "signature": "Sync",
          "source": "src/System-Log-SLog.html#Sync",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Log SLog",
          "module": "System.Log.SLog",
          "name": "Sync",
          "package": "SimpleLog",
          "partial": "Sync",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleLog/docs/System-Log-SLog.html#v:Sync"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eTChanLogger\u003c/a\u003e\u003c/code\u003e logs to a specified \u003ccode\u003e\u003ca\u003eTChan\u003c/a\u003e\u003c/code\u003e.\n Note that \u003ccode\u003e\u003ca\u003eLogLine\u003c/a\u003e\u003c/code\u003es are written instead of the final formatted text. If you wish to use the final text use \u003ccode\u003e\u003ca\u003eformatLine\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Log.SLog",
          "name": "TChanLogger",
          "package": "SimpleLog",
          "signature": "TChanLogger (TChan LogLine)",
          "source": "src/System-Log-SLog.html#Logger",
          "type": "function"
        },
        "index": {
          "description": "TChanLogger logs to specified TChan Note that LogLine are written instead of the final formatted text If you wish to use the final text use formatLine",
          "hierarchy": "System Log SLog",
          "module": "System.Log.SLog",
          "name": "TChanLogger",
          "package": "SimpleLog",
          "partial": "TChan Logger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleLog/docs/System-Log-SLog.html#v:TChanLogger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Log.SLog",
          "name": "WARNING",
          "package": "SimpleLog",
          "signature": "WARNING",
          "source": "src/System-Log-SLog.html#Severity",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Log SLog",
          "module": "System.Log.SLog",
          "name": "WARNING",
          "package": "SimpleLog",
          "partial": "WARNING",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleLog/docs/System-Log-SLog.html#v:WARNING"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecifies whether ANSI colouring should be used when logging to stdout/stderr\n\u003c/p\u003e",
          "module": "System.Log.SLog",
          "name": "ansiColours",
          "package": "SimpleLog",
          "signature": "Bool",
          "source": "src/System-Log-SLog.html#LogConfig",
          "type": "function"
        },
        "index": {
          "description": "Specifies whether ANSI colouring should be used when logging to stdout stderr",
          "hierarchy": "System Log SLog",
          "module": "System.Log.SLog",
          "name": "ansiColours",
          "package": "SimpleLog",
          "partial": "Colours",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleLog/docs/System-Log-SLog.html#v:ansiColours"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eanySev\u003c/a\u003e\u003c/code\u003e allows all lines to be logged.\n\u003c/p\u003e",
          "module": "System.Log.SLog",
          "name": "anySev",
          "package": "SimpleLog",
          "signature": "Filter",
          "source": "src/System-Log-SLog.html#anySev",
          "type": "function"
        },
        "index": {
          "description": "anySev allows all lines to be logged",
          "hierarchy": "System Log SLog",
          "module": "System.Log.SLog",
          "name": "anySev",
          "package": "SimpleLog",
          "partial": "Sev",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleLog/docs/System-Log-SLog.html#v:anySev"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003edefaultLogConfig\u003c/a\u003e\u003c/code\u003e is the default log configuration.\n It writes all non-DEBUG messages to the stdout synchronously and all messages to a specified file asynchronously.\n\u003c/p\u003e",
          "module": "System.Log.SLog",
          "name": "defaultLogConfig",
          "package": "SimpleLog",
          "signature": "FilePath -\u003e LogConfig",
          "source": "src/System-Log-SLog.html#defaultLogConfig",
          "type": "function"
        },
        "index": {
          "description": "defaultLogConfig is the default log configuration It writes all non-DEBUG messages to the stdout synchronously and all messages to specified file asynchronously",
          "hierarchy": "System Log SLog",
          "module": "System.Log.SLog",
          "name": "defaultLogConfig",
          "normalized": "FilePath-\u003eLogConfig",
          "package": "SimpleLog",
          "partial": "Log Config",
          "signature": "FilePath-\u003eLogConfig",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleLog/docs/System-Log-SLog.html#v:defaultLogConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe default log format, which currently is \u003ccode\u003e$(format \"%d(%F %T) | %s | [%t] %m\")\u003c/code\u003e. See \u003ca\u003eSystem.Log.SLog.Format\u003c/a\u003e for more details on format strings.\n\u003c/p\u003e",
          "module": "System.Log.SLog",
          "name": "defaultLogFormat",
          "package": "SimpleLog",
          "signature": "Format",
          "source": "src/System-Log-SLog.html#defaultLogFormat",
          "type": "function"
        },
        "index": {
          "description": "The default log format which currently is format See System.Log.SLog.Format for more details on format strings",
          "hierarchy": "System Log SLog",
          "module": "System.Log.SLog",
          "name": "defaultLogFormat",
          "package": "SimpleLog",
          "partial": "Log Format",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleLog/docs/System-Log-SLog.html#v:defaultLogFormat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eforkSLog\u003c/a\u003e\u003c/code\u003e forks an \u003ccode\u003e\u003ca\u003eSLogT\u003c/a\u003e\u003c/code\u003e thread with the specified thread name.\n\u003c/p\u003e",
          "module": "System.Log.SLog",
          "name": "forkSLog",
          "package": "SimpleLog",
          "signature": "String -\u003e SLogT m () -\u003e SLogT m ThreadId",
          "source": "src/System-Log-SLog.html#forkSLog",
          "type": "function"
        },
        "index": {
          "description": "forkSLog forks an SLogT thread with the specified thread name",
          "hierarchy": "System Log SLog",
          "module": "System.Log.SLog",
          "name": "forkSLog",
          "normalized": "String-\u003eSLogT a()-\u003eSLogT a ThreadId",
          "package": "SimpleLog",
          "partial": "SLog",
          "signature": "String-\u003eSLogT m()-\u003eSLogT m ThreadId",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleLog/docs/System-Log-SLog.html#v:forkSLog"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eformatLine\u003c/a\u003e\u003c/code\u003e formats the given \u003ccode\u003e\u003ca\u003eLogLine\u003c/a\u003e\u003c/code\u003e using the specified \u003ccode\u003e\u003ca\u003eFormat\u003c/a\u003e\u003c/code\u003e. The \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003eean determines whether \u003ccode\u003e\u003ca\u003eformatLine\u003c/a\u003e\u003c/code\u003e should insert ANSI colour codes or not.\n\u003c/p\u003e",
          "module": "System.Log.SLog",
          "name": "formatLine",
          "package": "SimpleLog",
          "signature": "Bool -\u003e Format -\u003e LogLine -\u003e Text",
          "source": "src/System-Log-SLog.html#formatLine",
          "type": "function"
        },
        "index": {
          "description": "formatLine formats the given LogLine using the specified Format The Bool ean determines whether formatLine should insert ANSI colour codes or not",
          "hierarchy": "System Log SLog",
          "module": "System.Log.SLog",
          "name": "formatLine",
          "normalized": "Bool-\u003eFormat-\u003eLogLine-\u003eText",
          "package": "SimpleLog",
          "partial": "Line",
          "signature": "Bool-\u003eFormat-\u003eLogLine-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleLog/docs/System-Log-SLog.html#v:formatLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003elog\u003c/a\u003e\u003c/code\u003e logs the specified \u003ccode\u003eText\u003c/code\u003e with the specified \u003ccode\u003e\u003ca\u003eSeverity\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "System.Log.SLog",
          "name": "log",
          "package": "SimpleLog",
          "signature": "Severity -\u003e Text -\u003e m ()",
          "source": "src/System-Log-SLog.html#log",
          "type": "method"
        },
        "index": {
          "description": "log logs the specified Text with the specified Severity",
          "hierarchy": "System Log SLog",
          "module": "System.Log.SLog",
          "name": "log",
          "normalized": "Severity-\u003eText-\u003ea()",
          "package": "SimpleLog",
          "signature": "Severity-\u003eText-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/SimpleLog/docs/System-Log-SLog.html#v:log"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLog a \u003ccode\u003e\u003ca\u003eDEBUG\u003c/a\u003e\u003c/code\u003e message\n\u003c/p\u003e",
          "module": "System.Log.SLog",
          "name": "logD",
          "package": "SimpleLog",
          "signature": "String -\u003e m ()",
          "source": "src/System-Log-SLog.html#logD",
          "type": "function"
        },
        "index": {
          "description": "Log DEBUG message",
          "hierarchy": "System Log SLog",
          "module": "System.Log.SLog",
          "name": "logD",
          "normalized": "String-\u003ea()",
          "package": "SimpleLog",
          "signature": "String-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleLog/docs/System-Log-SLog.html#v:logD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLog an \u003ccode\u003e\u003ca\u003eERROR\u003c/a\u003e\u003c/code\u003e message\n\u003c/p\u003e",
          "module": "System.Log.SLog",
          "name": "logE",
          "package": "SimpleLog",
          "signature": "String -\u003e m ()",
          "source": "src/System-Log-SLog.html#logE",
          "type": "function"
        },
        "index": {
          "description": "Log an ERROR message",
          "hierarchy": "System Log SLog",
          "module": "System.Log.SLog",
          "name": "logE",
          "normalized": "String-\u003ea()",
          "package": "SimpleLog",
          "signature": "String-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleLog/docs/System-Log-SLog.html#v:logE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLog an \u003ccode\u003e\u003ca\u003eINFO\u003c/a\u003e\u003c/code\u003e message\n\u003c/p\u003e",
          "module": "System.Log.SLog",
          "name": "logI",
          "package": "SimpleLog",
          "signature": "String -\u003e m ()",
          "source": "src/System-Log-SLog.html#logI",
          "type": "function"
        },
        "index": {
          "description": "Log an INFO message",
          "hierarchy": "System Log SLog",
          "module": "System.Log.SLog",
          "name": "logI",
          "normalized": "String-\u003ea()",
          "package": "SimpleLog",
          "signature": "String-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleLog/docs/System-Log-SLog.html#v:logI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Log.SLog",
          "name": "logMessage",
          "package": "SimpleLog",
          "signature": "Text",
          "source": "src/System-Log-SLog.html#LogLine",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Log SLog",
          "module": "System.Log.SLog",
          "name": "logMessage",
          "package": "SimpleLog",
          "partial": "Message",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleLog/docs/System-Log-SLog.html#v:logMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLog a \u003ccode\u003e\u003ca\u003eSUCCESS\u003c/a\u003e\u003c/code\u003e message\n\u003c/p\u003e",
          "module": "System.Log.SLog",
          "name": "logS",
          "package": "SimpleLog",
          "signature": "String -\u003e m ()",
          "source": "src/System-Log-SLog.html#logS",
          "type": "function"
        },
        "index": {
          "description": "Log SUCCESS message",
          "hierarchy": "System Log SLog",
          "module": "System.Log.SLog",
          "name": "logS",
          "normalized": "String-\u003ea()",
          "package": "SimpleLog",
          "signature": "String-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleLog/docs/System-Log-SLog.html#v:logS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Log.SLog",
          "name": "logSeverity",
          "package": "SimpleLog",
          "signature": "Severity",
          "source": "src/System-Log-SLog.html#LogLine",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Log SLog",
          "module": "System.Log.SLog",
          "name": "logSeverity",
          "package": "SimpleLog",
          "partial": "Severity",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleLog/docs/System-Log-SLog.html#v:logSeverity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Log.SLog",
          "name": "logThread",
          "package": "SimpleLog",
          "signature": "Text",
          "source": "src/System-Log-SLog.html#LogLine",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Log SLog",
          "module": "System.Log.SLog",
          "name": "logThread",
          "package": "SimpleLog",
          "partial": "Thread",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleLog/docs/System-Log-SLog.html#v:logThread"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Log.SLog",
          "name": "logTimestamp",
          "package": "SimpleLog",
          "signature": "ZonedTime",
          "source": "src/System-Log-SLog.html#LogLine",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Log SLog",
          "module": "System.Log.SLog",
          "name": "logTimestamp",
          "package": "SimpleLog",
          "partial": "Timestamp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleLog/docs/System-Log-SLog.html#v:logTimestamp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLog a \u003ccode\u003e\u003ca\u003eWARNING\u003c/a\u003e\u003c/code\u003e message\n\u003c/p\u003e",
          "module": "System.Log.SLog",
          "name": "logW",
          "package": "SimpleLog",
          "signature": "String -\u003e m ()",
          "source": "src/System-Log-SLog.html#logW",
          "type": "function"
        },
        "index": {
          "description": "Log WARNING message",
          "hierarchy": "System Log SLog",
          "module": "System.Log.SLog",
          "name": "logW",
          "normalized": "String-\u003ea()",
          "package": "SimpleLog",
          "signature": "String-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleLog/docs/System-Log-SLog.html#v:logW"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe list of loggers together with the associated filters\n\u003c/p\u003e",
          "module": "System.Log.SLog",
          "name": "loggers",
          "package": "SimpleLog",
          "signature": "[(Filter, Logger)]",
          "source": "src/System-Log-SLog.html#LogConfig",
          "type": "function"
        },
        "index": {
          "description": "The list of loggers together with the associated filters",
          "hierarchy": "System Log SLog",
          "module": "System.Log.SLog",
          "name": "loggers",
          "normalized": "[(Filter,Logger)]",
          "package": "SimpleLog",
          "signature": "[(Filter,Logger)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleLog/docs/System-Log-SLog.html#v:loggers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003erunSLogT\u003c/a\u003e\u003c/code\u003e runs an \u003ccode\u003e\u003ca\u003eSLogT\u003c/a\u003e\u003c/code\u003e given a \u003ccode\u003e\u003ca\u003eLogConfig\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eFormat\u003c/a\u003e\u003c/code\u003e and the current thread's name.\n It returns a \u003ccode\u003e\u003ca\u003eFlushKey\u003c/a\u003e\u003c/code\u003e besides the usual return value.\n\u003c/p\u003e",
          "module": "System.Log.SLog",
          "name": "runSLogT",
          "package": "SimpleLog",
          "signature": "LogConfig -\u003e Format -\u003e String -\u003e SLogT m a -\u003e m (a, FlushKey)",
          "source": "src/System-Log-SLog.html#runSLogT",
          "type": "function"
        },
        "index": {
          "description": "runSLogT runs an SLogT given LogConfig Format and the current thread name It returns FlushKey besides the usual return value",
          "hierarchy": "System Log SLog",
          "module": "System.Log.SLog",
          "name": "runSLogT",
          "normalized": "LogConfig-\u003eFormat-\u003eString-\u003eSLogT a b-\u003ea(b,FlushKey)",
          "package": "SimpleLog",
          "partial": "SLog",
          "signature": "LogConfig-\u003eFormat-\u003eString-\u003eSLogT m a-\u003em(a,FlushKey)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleLog/docs/System-Log-SLog.html#v:runSLogT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003esimpleLog\u003c/a\u003e\u003c/code\u003e uses the default configuration with the specified log file name. It also waits using \u003ccode\u003e\u003ca\u003ewaitFlush\u003c/a\u003e\u003c/code\u003e until all resources have been released.\n\u003c/p\u003e",
          "module": "System.Log.SLog",
          "name": "simpleLog",
          "package": "SimpleLog",
          "signature": "FilePath -\u003e SLogT m a -\u003e m a",
          "source": "src/System-Log-SLog.html#simpleLog",
          "type": "function"
        },
        "index": {
          "description": "simpleLog uses the default configuration with the specified log file name It also waits using waitFlush until all resources have been released",
          "hierarchy": "System Log SLog",
          "module": "System.Log.SLog",
          "name": "simpleLog",
          "normalized": "FilePath-\u003eSLogT a b-\u003ea b",
          "package": "SimpleLog",
          "partial": "Log",
          "signature": "FilePath-\u003eSLogT m a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleLog/docs/System-Log-SLog.html#v:simpleLog"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ewaitFlush\u003c/a\u003e\u003c/code\u003e will only return when all resources have been released and all streams have been flushed. Note that this includes resources allocated by the user using the exposed \u003ccode\u003e\u003ca\u003eMonadResource\u003c/a\u003e\u003c/code\u003e instance.\n\u003c/p\u003e\u003cp\u003eAll threads internally accounted for are signaled to exit (they will first finish processing of all remaining jobs) when the \u003ccode\u003e\u003ca\u003eSLogT\u003c/a\u003e\u003c/code\u003e is run, however it is the user's responsibility to shut down threads forked with \u003ccode\u003e\u003ca\u003eforkSLog\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003efork\u003c/a\u003e\u003c/code\u003e before \u003ccode\u003e\u003ca\u003ewaitFlush\u003c/a\u003e\u003c/code\u003e can return.\n\u003c/p\u003e",
          "module": "System.Log.SLog",
          "name": "waitFlush",
          "package": "SimpleLog",
          "signature": "FlushKey -\u003e IO ()",
          "source": "src/System-Log-SLog.html#waitFlush",
          "type": "function"
        },
        "index": {
          "description": "waitFlush will only return when all resources have been released and all streams have been flushed Note that this includes resources allocated by the user using the exposed MonadResource instance All threads internally accounted for are signaled to exit they will first finish processing of all remaining jobs when the SLogT is run however it is the user responsibility to shut down threads forked with forkSLog or fork before waitFlush can return",
          "hierarchy": "System Log SLog",
          "module": "System.Log.SLog",
          "name": "waitFlush",
          "normalized": "FlushKey-\u003eIO()",
          "package": "SimpleLog",
          "partial": "Flush",
          "signature": "FlushKey-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleLog/docs/System-Log-SLog.html#v:waitFlush"
      }
    }
  ]
]