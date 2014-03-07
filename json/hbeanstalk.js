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
        "word": "hbeanstalk"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eClient API to beanstalkd work queue.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.Beanstalk",
          "name": "Beanstalk",
          "package": "hbeanstalk",
          "source": "src/Network-Beanstalk.html",
          "type": "module"
        },
        "index": {
          "description": "Client API to beanstalkd work queue",
          "hierarchy": "Network Beanstalk",
          "module": "Network.Beanstalk",
          "name": "Beanstalk",
          "package": "hbeanstalk",
          "partial": "Beanstalk",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hbeanstalk/docs/Network-Beanstalk.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExceptions generated from the beanstalkd server\n\u003c/p\u003e",
          "module": "Network.Beanstalk",
          "name": "BeanstalkException",
          "package": "hbeanstalk",
          "source": "src/Network-Beanstalk.html#BeanstalkException",
          "type": "data"
        },
        "index": {
          "description": "Exceptions generated from the beanstalkd server",
          "hierarchy": "Network Beanstalk",
          "module": "Network.Beanstalk",
          "name": "BeanstalkException",
          "package": "hbeanstalk",
          "partial": "Beanstalk Exception",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hbeanstalk/docs/Network-Beanstalk.html#t:BeanstalkException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBeanstalk Server, wrapped in an \u003ccode\u003e\u003ca\u003eMVar\u003c/a\u003e\u003c/code\u003e for synchronizing access\n   to the server socket.  As many of these can be created as are\n   needed, but jobs are associated to a single server session and\n   must be released/deleted with the same session that reserved\n   them.\n\u003c/p\u003e",
          "module": "Network.Beanstalk",
          "name": "BeanstalkServer",
          "package": "hbeanstalk",
          "source": "src/Network-Beanstalk.html#BeanstalkServer",
          "type": "type"
        },
        "index": {
          "description": "Beanstalk Server wrapped in an MVar for synchronizing access to the server socket As many of these can be created as are needed but jobs are associated to single server session and must be released deleted with the same session that reserved them",
          "hierarchy": "Network Beanstalk",
          "module": "Network.Beanstalk",
          "name": "BeanstalkServer",
          "package": "hbeanstalk",
          "partial": "Beanstalk Server",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hbeanstalk/docs/Network-Beanstalk.html#t:BeanstalkServer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInformation essential to performing a job and operating on it.\n\u003c/p\u003e",
          "module": "Network.Beanstalk",
          "name": "Job",
          "package": "hbeanstalk",
          "source": "src/Network-Beanstalk.html#Job",
          "type": "data"
        },
        "index": {
          "description": "Information essential to performing job and operating on it",
          "hierarchy": "Network Beanstalk",
          "module": "Network.Beanstalk",
          "name": "Job",
          "package": "hbeanstalk",
          "partial": "Job",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hbeanstalk/docs/Network-Beanstalk.html#t:Job"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStates describing the lifecycle of a job.\n\u003c/p\u003e",
          "module": "Network.Beanstalk",
          "name": "JobState",
          "package": "hbeanstalk",
          "source": "src/Network-Beanstalk.html#JobState",
          "type": "data"
        },
        "index": {
          "description": "States describing the lifecycle of job",
          "hierarchy": "Network Beanstalk",
          "module": "Network.Beanstalk",
          "name": "JobState",
          "package": "hbeanstalk",
          "partial": "Job State",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hbeanstalk/docs/Network-Beanstalk.html#t:JobState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuried, can be resurrected with \u003ccode\u003e\u003ca\u003ekickJobs\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Network.Beanstalk",
          "name": "BURIED",
          "package": "hbeanstalk",
          "signature": "BURIED",
          "source": "src/Network-Beanstalk.html#JobState",
          "type": "function"
        },
        "index": {
          "description": "Buried can be resurrected with kickJobs",
          "hierarchy": "Network Beanstalk",
          "module": "Network.Beanstalk",
          "name": "BURIED",
          "package": "hbeanstalk",
          "partial": "BURIED",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hbeanstalk/docs/Network-Beanstalk.html#v:BURIED"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClient sent a command that was not understood.  May indicate\n   a bad argument list or other format violation.\n\u003c/p\u003e",
          "module": "Network.Beanstalk",
          "name": "BadFormatException",
          "package": "hbeanstalk",
          "signature": "BadFormatException",
          "source": "src/Network-Beanstalk.html#BeanstalkException",
          "type": "function"
        },
        "index": {
          "description": "Client sent command that was not understood May indicate bad argument list or other format violation",
          "hierarchy": "Network Beanstalk",
          "module": "Network.Beanstalk",
          "name": "BadFormatException",
          "package": "hbeanstalk",
          "partial": "Bad Format Exception",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hbeanstalk/docs/Network-Beanstalk.html#v:BadFormatException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelayed, waiting to be put in ready queue\n\u003c/p\u003e",
          "module": "Network.Beanstalk",
          "name": "DELAYED",
          "package": "hbeanstalk",
          "signature": "DELAYED",
          "source": "src/Network-Beanstalk.html#JobState",
          "type": "function"
        },
        "index": {
          "description": "Delayed waiting to be put in ready queue",
          "hierarchy": "Network Beanstalk",
          "module": "Network.Beanstalk",
          "name": "DELAYED",
          "package": "hbeanstalk",
          "partial": "DELAYED",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hbeanstalk/docs/Network-Beanstalk.html#v:DELAYED"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNot strictly an error condition, this indicates a job this\n   client has reserved is about to expire.  See\n   \u003ca\u003ehttp://groups.google.com/group/beanstalk-talk/browse_thread/thread/232d0cac5bebe30f\u003c/a\u003e\n   for a detailed explanation.\n\u003c/p\u003e",
          "module": "Network.Beanstalk",
          "name": "DeadlineSoonException",
          "package": "hbeanstalk",
          "signature": "DeadlineSoonException",
          "source": "src/Network-Beanstalk.html#BeanstalkException",
          "type": "function"
        },
        "index": {
          "description": "Not strictly an error condition this indicates job this client has reserved is about to expire See http groups.google.com group beanstalk-talk browse thread thread d0cac5bebe30f for detailed explanation",
          "hierarchy": "Network Beanstalk",
          "module": "Network.Beanstalk",
          "name": "DeadlineSoonException",
          "package": "hbeanstalk",
          "partial": "Deadline Soon Exception",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hbeanstalk/docs/Network-Beanstalk.html#v:DeadlineSoonException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe server is in drain mode, and is not accepting new jobs.\n\u003c/p\u003e",
          "module": "Network.Beanstalk",
          "name": "DrainingException",
          "package": "hbeanstalk",
          "signature": "DrainingException",
          "source": "src/Network-Beanstalk.html#BeanstalkException",
          "type": "function"
        },
        "index": {
          "description": "The server is in drain mode and is not accepting new jobs",
          "hierarchy": "Network Beanstalk",
          "module": "Network.Beanstalk",
          "name": "DrainingException",
          "package": "hbeanstalk",
          "partial": "Draining Exception",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hbeanstalk/docs/Network-Beanstalk.html#v:DrainingException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis library failed to terminate a job body with a CR-LF\n   terminator.  Should never occur, if it does it is a bug in\n   hbeanstalk.\n\u003c/p\u003e",
          "module": "Network.Beanstalk",
          "name": "ExpectedCRLFException",
          "package": "hbeanstalk",
          "signature": "ExpectedCRLFException",
          "source": "src/Network-Beanstalk.html#BeanstalkException",
          "type": "function"
        },
        "index": {
          "description": "This library failed to terminate job body with CR-LF terminator Should never occur if it does it is bug in hbeanstalk",
          "hierarchy": "Network Beanstalk",
          "module": "Network.Beanstalk",
          "name": "ExpectedCRLFException",
          "package": "hbeanstalk",
          "partial": "Expected CRLFException",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hbeanstalk/docs/Network-Beanstalk.html#v:ExpectedCRLFException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe server detected an internal error.  If this happens, please report to\n   \u003ca\u003ehttp://groups.google.com/group/beanstalk-talk\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Network.Beanstalk",
          "name": "InternalErrorException",
          "package": "hbeanstalk",
          "signature": "InternalErrorException",
          "source": "src/Network-Beanstalk.html#BeanstalkException",
          "type": "function"
        },
        "index": {
          "description": "The server detected an internal error If this happens please report to http groups.google.com group beanstalk-talk",
          "hierarchy": "Network Beanstalk",
          "module": "Network.Beanstalk",
          "name": "InternalErrorException",
          "package": "hbeanstalk",
          "partial": "Internal Error Exception",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hbeanstalk/docs/Network-Beanstalk.html#v:InternalErrorException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Beanstalk",
          "name": "Job",
          "package": "hbeanstalk",
          "signature": "Job",
          "source": "src/Network-Beanstalk.html#Job",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Beanstalk",
          "module": "Network.Beanstalk",
          "name": "Job",
          "package": "hbeanstalk",
          "partial": "Job",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hbeanstalk/docs/Network-Beanstalk.html#v:Job"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eputJob\u003c/a\u003e\u003c/code\u003e call included a body larger than the server's\n   \u003ccode\u003emax-job-size\u003c/code\u003e setting allows.\n\u003c/p\u003e",
          "module": "Network.Beanstalk",
          "name": "JobTooBigException",
          "package": "hbeanstalk",
          "signature": "JobTooBigException",
          "source": "src/Network-Beanstalk.html#BeanstalkException",
          "type": "function"
        },
        "index": {
          "description": "putJob call included body larger than the server max-job-size setting allows",
          "hierarchy": "Network Beanstalk",
          "module": "Network.Beanstalk",
          "name": "JobTooBigException",
          "package": "hbeanstalk",
          "partial": "Job Too Big Exception",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hbeanstalk/docs/Network-Beanstalk.html#v:JobTooBigException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJob does not exist, or is not reserved by this client.\n\u003c/p\u003e",
          "module": "Network.Beanstalk",
          "name": "NotFoundException",
          "package": "hbeanstalk",
          "signature": "NotFoundException",
          "source": "src/Network-Beanstalk.html#BeanstalkException",
          "type": "function"
        },
        "index": {
          "description": "Job does not exist or is not reserved by this client",
          "hierarchy": "Network Beanstalk",
          "module": "Network.Beanstalk",
          "name": "NotFoundException",
          "package": "hbeanstalk",
          "partial": "Not Found Exception",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hbeanstalk/docs/Network-Beanstalk.html#v:NotFoundException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClient attempted to ignore the only tube in its watch list (clients\n   must always watch one or more tubes).\n\u003c/p\u003e",
          "module": "Network.Beanstalk",
          "name": "NotIgnoredException",
          "package": "hbeanstalk",
          "signature": "NotIgnoredException",
          "source": "src/Network-Beanstalk.html#BeanstalkException",
          "type": "function"
        },
        "index": {
          "description": "Client attempted to ignore the only tube in its watch list clients must always watch one or more tubes",
          "hierarchy": "Network Beanstalk",
          "module": "Network.Beanstalk",
          "name": "NotIgnoredException",
          "package": "hbeanstalk",
          "partial": "Not Ignored Exception",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hbeanstalk/docs/Network-Beanstalk.html#v:NotIgnoredException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe server did not have enough memory available to create the job.\n\u003c/p\u003e",
          "module": "Network.Beanstalk",
          "name": "OutOfMemoryException",
          "package": "hbeanstalk",
          "signature": "OutOfMemoryException",
          "source": "src/Network-Beanstalk.html#BeanstalkException",
          "type": "function"
        },
        "index": {
          "description": "The server did not have enough memory available to create the job",
          "hierarchy": "Network Beanstalk",
          "module": "Network.Beanstalk",
          "name": "OutOfMemoryException",
          "package": "hbeanstalk",
          "partial": "Out Of Memory Exception",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hbeanstalk/docs/Network-Beanstalk.html#v:OutOfMemoryException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReady, retrievable with \u003ccode\u003e\u003ca\u003ereserveJob\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Network.Beanstalk",
          "name": "READY",
          "package": "hbeanstalk",
          "signature": "READY",
          "source": "src/Network-Beanstalk.html#JobState",
          "type": "function"
        },
        "index": {
          "description": "Ready retrievable with reserveJob",
          "hierarchy": "Network Beanstalk",
          "module": "Network.Beanstalk",
          "name": "READY",
          "package": "hbeanstalk",
          "partial": "READY",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hbeanstalk/docs/Network-Beanstalk.html#v:READY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReserved by a worker\n\u003c/p\u003e",
          "module": "Network.Beanstalk",
          "name": "RESERVED",
          "package": "hbeanstalk",
          "signature": "RESERVED",
          "source": "src/Network-Beanstalk.html#JobState",
          "type": "function"
        },
        "index": {
          "description": "Reserved by worker",
          "hierarchy": "Network Beanstalk",
          "module": "Network.Beanstalk",
          "name": "RESERVED",
          "package": "hbeanstalk",
          "partial": "RESERVED",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hbeanstalk/docs/Network-Beanstalk.html#v:RESERVED"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTimeout for \u003ccode\u003ereserveJobWithTimeout\u003c/code\u003e expired before a job became available.\n\u003c/p\u003e",
          "module": "Network.Beanstalk",
          "name": "TimedOutException",
          "package": "hbeanstalk",
          "signature": "TimedOutException",
          "source": "src/Network-Beanstalk.html#BeanstalkException",
          "type": "function"
        },
        "index": {
          "description": "Timeout for reserveJobWithTimeout expired before job became available",
          "hierarchy": "Network Beanstalk",
          "module": "Network.Beanstalk",
          "name": "TimedOutException",
          "package": "hbeanstalk",
          "partial": "Timed Out Exception",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hbeanstalk/docs/Network-Beanstalk.html#v:TimedOutException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe server did not recognize a command.  Should never occur,\n   this is either a bug in the hbeanstalk library or an\n   incompatible server version.\n\u003c/p\u003e",
          "module": "Network.Beanstalk",
          "name": "UnknownCommandException",
          "package": "hbeanstalk",
          "signature": "UnknownCommandException",
          "source": "src/Network-Beanstalk.html#BeanstalkException",
          "type": "function"
        },
        "index": {
          "description": "The server did not recognize command Should never occur this is either bug in the hbeanstalk library or an incompatible server version",
          "hierarchy": "Network Beanstalk",
          "module": "Network.Beanstalk",
          "name": "UnknownCommandException",
          "package": "hbeanstalk",
          "partial": "Unknown Command Exception",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hbeanstalk/docs/Network-Beanstalk.html#v:UnknownCommandException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBury a job so that it cannot be reserved.\n\u003c/p\u003e",
          "module": "Network.Beanstalk",
          "name": "buryJob",
          "package": "hbeanstalk",
          "signature": "BeanstalkServer-\u003e Int-\u003e Int-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Bury job so that it cannot be reserved",
          "hierarchy": "Network Beanstalk",
          "module": "Network.Beanstalk",
          "name": "buryJob",
          "normalized": "BeanstalkServer-\u003eInt-\u003eInt-\u003eIO()",
          "package": "hbeanstalk",
          "partial": "Job",
          "signature": "BeanstalkServer-\u003eInt-\u003eInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hbeanstalk/docs/Network-Beanstalk.html#v:buryJob"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConnect to a beanstalkd server.\n\u003c/p\u003e",
          "module": "Network.Beanstalk",
          "name": "connectBeanstalk",
          "package": "hbeanstalk",
          "signature": "HostName-\u003e String-\u003e IO BeanstalkServer",
          "type": "function"
        },
        "index": {
          "description": "Connect to beanstalkd server",
          "hierarchy": "Network Beanstalk",
          "module": "Network.Beanstalk",
          "name": "connectBeanstalk",
          "normalized": "HostName-\u003eString-\u003eIO BeanstalkServer",
          "package": "hbeanstalk",
          "partial": "Beanstalk",
          "signature": "HostName-\u003eString-\u003eIO BeanstalkServer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hbeanstalk/docs/Network-Beanstalk.html#v:connectBeanstalk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelete a job to indicate that it has been completed.  If the job\n   does not exist, was not reserved by this client, or is not in the\n   \u003ccode\u003e\u003ca\u003eREADY\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eBURIED\u003c/a\u003e\u003c/code\u003e state, a \u003ccode\u003e\u003ca\u003eNotFoundException\u003c/a\u003e\u003c/code\u003e will be thrown.\n\u003c/p\u003e",
          "module": "Network.Beanstalk",
          "name": "deleteJob",
          "package": "hbeanstalk",
          "signature": "BeanstalkServer-\u003e Int-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Delete job to indicate that it has been completed If the job does not exist was not reserved by this client or is not in the READY or BURIED state NotFoundException will be thrown",
          "hierarchy": "Network Beanstalk",
          "module": "Network.Beanstalk",
          "name": "deleteJob",
          "normalized": "BeanstalkServer-\u003eInt-\u003eIO()",
          "package": "hbeanstalk",
          "partial": "Job",
          "signature": "BeanstalkServer-\u003eInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hbeanstalk/docs/Network-Beanstalk.html#v:deleteJob"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDisconnect from a beanstalkd server.  Any jobs reserved from this connection will be released\n\u003c/p\u003e",
          "module": "Network.Beanstalk",
          "name": "disconnectBeanstalk",
          "package": "hbeanstalk",
          "signature": "BeanstalkServer-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Disconnect from beanstalkd server Any jobs reserved from this connection will be released",
          "hierarchy": "Network Beanstalk",
          "module": "Network.Beanstalk",
          "name": "disconnectBeanstalk",
          "normalized": "BeanstalkServer-\u003eIO()",
          "package": "hbeanstalk",
          "partial": "Beanstalk",
          "signature": "BeanstalkServer-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hbeanstalk/docs/Network-Beanstalk.html#v:disconnectBeanstalk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemoves the named tube to watch list.  If the tube being ignored\n   is the only one currently being watched, a \u003ccode\u003e\u003ca\u003eNotIgnoredException\u003c/a\u003e\u003c/code\u003e\n   is thrown.\n\u003c/p\u003e",
          "module": "Network.Beanstalk",
          "name": "ignoreTube",
          "package": "hbeanstalk",
          "signature": "BeanstalkServer-\u003e ByteString-\u003e IO Int",
          "type": "function"
        },
        "index": {
          "description": "Removes the named tube to watch list If the tube being ignored is the only one currently being watched NotIgnoredException is thrown",
          "hierarchy": "Network Beanstalk",
          "module": "Network.Beanstalk",
          "name": "ignoreTube",
          "normalized": "BeanstalkServer-\u003eByteString-\u003eIO Int",
          "package": "hbeanstalk",
          "partial": "Tube",
          "signature": "BeanstalkServer-\u003eByteString-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hbeanstalk/docs/Network-Beanstalk.html#v:ignoreTube"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePredicate to detect \u003ccode\u003e\u003ca\u003eBadFormatException\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Network.Beanstalk",
          "name": "isBadFormatException",
          "package": "hbeanstalk",
          "signature": "BeanstalkException -\u003e Bool",
          "source": "src/Network-Beanstalk.html#isBadFormatException",
          "type": "function"
        },
        "index": {
          "description": "Predicate to detect BadFormatException",
          "hierarchy": "Network Beanstalk",
          "module": "Network.Beanstalk",
          "name": "isBadFormatException",
          "normalized": "BeanstalkException-\u003eBool",
          "package": "hbeanstalk",
          "partial": "Bad Format Exception",
          "signature": "BeanstalkException-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hbeanstalk/docs/Network-Beanstalk.html#v:isBadFormatException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePredicate to detect \u003ccode\u003e\u003ca\u003eDeadlineSoonException\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Network.Beanstalk",
          "name": "isDeadlineSoonException",
          "package": "hbeanstalk",
          "signature": "BeanstalkException -\u003e Bool",
          "source": "src/Network-Beanstalk.html#isDeadlineSoonException",
          "type": "function"
        },
        "index": {
          "description": "Predicate to detect DeadlineSoonException",
          "hierarchy": "Network Beanstalk",
          "module": "Network.Beanstalk",
          "name": "isDeadlineSoonException",
          "normalized": "BeanstalkException-\u003eBool",
          "package": "hbeanstalk",
          "partial": "Deadline Soon Exception",
          "signature": "BeanstalkException-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hbeanstalk/docs/Network-Beanstalk.html#v:isDeadlineSoonException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePredicate to detect \u003ccode\u003e\u003ca\u003eDrainingException\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Network.Beanstalk",
          "name": "isDrainingException",
          "package": "hbeanstalk",
          "signature": "BeanstalkException -\u003e Bool",
          "source": "src/Network-Beanstalk.html#isDrainingException",
          "type": "function"
        },
        "index": {
          "description": "Predicate to detect DrainingException",
          "hierarchy": "Network Beanstalk",
          "module": "Network.Beanstalk",
          "name": "isDrainingException",
          "normalized": "BeanstalkException-\u003eBool",
          "package": "hbeanstalk",
          "partial": "Draining Exception",
          "signature": "BeanstalkException-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hbeanstalk/docs/Network-Beanstalk.html#v:isDrainingException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePredicate to detect \u003ccode\u003e\u003ca\u003eInternalErrorException\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Network.Beanstalk",
          "name": "isInternalErrorException",
          "package": "hbeanstalk",
          "signature": "BeanstalkException -\u003e Bool",
          "source": "src/Network-Beanstalk.html#isInternalErrorException",
          "type": "function"
        },
        "index": {
          "description": "Predicate to detect InternalErrorException",
          "hierarchy": "Network Beanstalk",
          "module": "Network.Beanstalk",
          "name": "isInternalErrorException",
          "normalized": "BeanstalkException-\u003eBool",
          "package": "hbeanstalk",
          "partial": "Internal Error Exception",
          "signature": "BeanstalkException-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hbeanstalk/docs/Network-Beanstalk.html#v:isInternalErrorException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePredicate to detect \u003ccode\u003e\u003ca\u003eJobTooBigException\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Network.Beanstalk",
          "name": "isJobTooBigException",
          "package": "hbeanstalk",
          "signature": "BeanstalkException -\u003e Bool",
          "source": "src/Network-Beanstalk.html#isJobTooBigException",
          "type": "function"
        },
        "index": {
          "description": "Predicate to detect JobTooBigException",
          "hierarchy": "Network Beanstalk",
          "module": "Network.Beanstalk",
          "name": "isJobTooBigException",
          "normalized": "BeanstalkException-\u003eBool",
          "package": "hbeanstalk",
          "partial": "Job Too Big Exception",
          "signature": "BeanstalkException-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hbeanstalk/docs/Network-Beanstalk.html#v:isJobTooBigException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePredicate to detect \u003ccode\u003e\u003ca\u003eNotFoundException\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Network.Beanstalk",
          "name": "isNotFoundException",
          "package": "hbeanstalk",
          "signature": "BeanstalkException -\u003e Bool",
          "source": "src/Network-Beanstalk.html#isNotFoundException",
          "type": "function"
        },
        "index": {
          "description": "Predicate to detect NotFoundException",
          "hierarchy": "Network Beanstalk",
          "module": "Network.Beanstalk",
          "name": "isNotFoundException",
          "normalized": "BeanstalkException-\u003eBool",
          "package": "hbeanstalk",
          "partial": "Not Found Exception",
          "signature": "BeanstalkException-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hbeanstalk/docs/Network-Beanstalk.html#v:isNotFoundException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePredicate to detect \u003ccode\u003e\u003ca\u003eNotIgnoredException\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Network.Beanstalk",
          "name": "isNotIgnoredException",
          "package": "hbeanstalk",
          "signature": "BeanstalkException -\u003e Bool",
          "source": "src/Network-Beanstalk.html#isNotIgnoredException",
          "type": "function"
        },
        "index": {
          "description": "Predicate to detect NotIgnoredException",
          "hierarchy": "Network Beanstalk",
          "module": "Network.Beanstalk",
          "name": "isNotIgnoredException",
          "normalized": "BeanstalkException-\u003eBool",
          "package": "hbeanstalk",
          "partial": "Not Ignored Exception",
          "signature": "BeanstalkException-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hbeanstalk/docs/Network-Beanstalk.html#v:isNotIgnoredException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePredicate to detect \u003ccode\u003e\u003ca\u003eOutOfMemoryException\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Network.Beanstalk",
          "name": "isOutOfMemoryException",
          "package": "hbeanstalk",
          "signature": "BeanstalkException -\u003e Bool",
          "source": "src/Network-Beanstalk.html#isOutOfMemoryException",
          "type": "function"
        },
        "index": {
          "description": "Predicate to detect OutOfMemoryException",
          "hierarchy": "Network Beanstalk",
          "module": "Network.Beanstalk",
          "name": "isOutOfMemoryException",
          "normalized": "BeanstalkException-\u003eBool",
          "package": "hbeanstalk",
          "partial": "Out Of Memory Exception",
          "signature": "BeanstalkException-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hbeanstalk/docs/Network-Beanstalk.html#v:isOutOfMemoryException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePredicate to detect \u003ccode\u003e\u003ca\u003eTimedOutException\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Network.Beanstalk",
          "name": "isTimedOutException",
          "package": "hbeanstalk",
          "signature": "BeanstalkException -\u003e Bool",
          "source": "src/Network-Beanstalk.html#isTimedOutException",
          "type": "function"
        },
        "index": {
          "description": "Predicate to detect TimedOutException",
          "hierarchy": "Network Beanstalk",
          "module": "Network.Beanstalk",
          "name": "isTimedOutException",
          "normalized": "BeanstalkException-\u003eBool",
          "package": "hbeanstalk",
          "partial": "Timed Out Exception",
          "signature": "BeanstalkException-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hbeanstalk/docs/Network-Beanstalk.html#v:isTimedOutException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCount number of jobs in a tube with a state in a given list.\n   This is not part of the beanstalk protocol spec, so multiple\n   commands are issued to retrieve the count.  Therefore, the result\n   may not be consistent (it does not represent one snapshot in\n   time).\n\u003c/p\u003e",
          "module": "Network.Beanstalk",
          "name": "jobCountWithState",
          "package": "hbeanstalk",
          "signature": "BeanstalkServer-\u003e ByteString-\u003e [JobState]-\u003e IO Int",
          "type": "function"
        },
        "index": {
          "description": "Count number of jobs in tube with state in given list This is not part of the beanstalk protocol spec so multiple commands are issued to retrieve the count Therefore the result may not be consistent it does not represent one snapshot in time",
          "hierarchy": "Network Beanstalk",
          "module": "Network.Beanstalk",
          "name": "jobCountWithState",
          "normalized": "BeanstalkServer-\u003eByteString-\u003e[JobState]-\u003eIO Int",
          "package": "hbeanstalk",
          "partial": "Count With State",
          "signature": "BeanstalkServer-\u003eByteString-\u003e[JobState]-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hbeanstalk/docs/Network-Beanstalk.html#v:jobCountWithState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJob body\n\u003c/p\u003e",
          "module": "Network.Beanstalk",
          "name": "job_body",
          "package": "hbeanstalk",
          "signature": "ByteString",
          "source": "src/Network-Beanstalk.html#Job",
          "type": "function"
        },
        "index": {
          "description": "Job body",
          "hierarchy": "Network Beanstalk",
          "module": "Network.Beanstalk",
          "name": "job_body",
          "package": "hbeanstalk",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hbeanstalk/docs/Network-Beanstalk.html#v:job_body"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJob numeric identifier\n\u003c/p\u003e",
          "module": "Network.Beanstalk",
          "name": "job_id",
          "package": "hbeanstalk",
          "signature": "Int",
          "source": "src/Network-Beanstalk.html#Job",
          "type": "function"
        },
        "index": {
          "description": "Job numeric identifier",
          "hierarchy": "Network Beanstalk",
          "module": "Network.Beanstalk",
          "name": "job_id",
          "package": "hbeanstalk",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hbeanstalk/docs/Network-Beanstalk.html#v:job_id"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMove jobs from current tube into ready queue.  If buried jobs\n   exist, only those will be moved, otherwise delayed jobs will be\n   made ready.\n\u003c/p\u003e",
          "module": "Network.Beanstalk",
          "name": "kickJobs",
          "package": "hbeanstalk",
          "signature": "BeanstalkServer-\u003e Int-\u003e IO Int",
          "type": "function"
        },
        "index": {
          "description": "Move jobs from current tube into ready queue If buried jobs exist only those will be moved otherwise delayed jobs will be made ready",
          "hierarchy": "Network Beanstalk",
          "module": "Network.Beanstalk",
          "name": "kickJobs",
          "normalized": "BeanstalkServer-\u003eInt-\u003eIO Int",
          "package": "hbeanstalk",
          "partial": "Jobs",
          "signature": "BeanstalkServer-\u003eInt-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hbeanstalk/docs/Network-Beanstalk.html#v:kickJobs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList used tube.\n\u003c/p\u003e",
          "module": "Network.Beanstalk",
          "name": "listTubeUsed",
          "package": "hbeanstalk",
          "signature": "BeanstalkServer-\u003e IO ByteString",
          "type": "function"
        },
        "index": {
          "description": "List used tube",
          "hierarchy": "Network Beanstalk",
          "module": "Network.Beanstalk",
          "name": "listTubeUsed",
          "normalized": "BeanstalkServer-\u003eIO ByteString",
          "package": "hbeanstalk",
          "partial": "Tube Used",
          "signature": "BeanstalkServer-\u003eIO ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hbeanstalk/docs/Network-Beanstalk.html#v:listTubeUsed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList all existing tubes.\n\u003c/p\u003e",
          "module": "Network.Beanstalk",
          "name": "listTubes",
          "package": "hbeanstalk",
          "signature": "BeanstalkServer-\u003e IO [ByteString]",
          "type": "function"
        },
        "index": {
          "description": "List all existing tubes",
          "hierarchy": "Network Beanstalk",
          "module": "Network.Beanstalk",
          "name": "listTubes",
          "normalized": "BeanstalkServer-\u003eIO[ByteString]",
          "package": "hbeanstalk",
          "partial": "Tubes",
          "signature": "BeanstalkServer-\u003eIO[ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hbeanstalk/docs/Network-Beanstalk.html#v:listTubes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList all watched tubes.\n\u003c/p\u003e",
          "module": "Network.Beanstalk",
          "name": "listTubesWatched",
          "package": "hbeanstalk",
          "signature": "BeanstalkServer-\u003e IO [ByteString]",
          "type": "function"
        },
        "index": {
          "description": "List all watched tubes",
          "hierarchy": "Network Beanstalk",
          "module": "Network.Beanstalk",
          "name": "listTubesWatched",
          "normalized": "BeanstalkServer-\u003eIO[ByteString]",
          "package": "hbeanstalk",
          "partial": "Tubes Watched",
          "signature": "BeanstalkServer-\u003eIO[ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hbeanstalk/docs/Network-Beanstalk.html#v:listTubesWatched"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePause a tube for a specified time, so that reservations are no longer accepted.\n\u003c/p\u003e",
          "module": "Network.Beanstalk",
          "name": "pauseTube",
          "package": "hbeanstalk",
          "signature": "BeanstalkServer-\u003e ByteString-\u003e Int-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Pause tube for specified time so that reservations are no longer accepted",
          "hierarchy": "Network Beanstalk",
          "module": "Network.Beanstalk",
          "name": "pauseTube",
          "normalized": "BeanstalkServer-\u003eByteString-\u003eInt-\u003eIO()",
          "package": "hbeanstalk",
          "partial": "Tube",
          "signature": "BeanstalkServer-\u003eByteString-\u003eInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hbeanstalk/docs/Network-Beanstalk.html#v:pauseTube"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInspect the next buried job on the currently used tube.\n\u003c/p\u003e",
          "module": "Network.Beanstalk",
          "name": "peekBuriedJob",
          "package": "hbeanstalk",
          "signature": "BeanstalkServer-\u003e IO Job",
          "type": "function"
        },
        "index": {
          "description": "Inspect the next buried job on the currently used tube",
          "hierarchy": "Network Beanstalk",
          "module": "Network.Beanstalk",
          "name": "peekBuriedJob",
          "normalized": "BeanstalkServer-\u003eIO Job",
          "package": "hbeanstalk",
          "partial": "Buried Job",
          "signature": "BeanstalkServer-\u003eIO Job",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hbeanstalk/docs/Network-Beanstalk.html#v:peekBuriedJob"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInspect the delayed job with shortest delay remaining on the currently used tube.\n\u003c/p\u003e",
          "module": "Network.Beanstalk",
          "name": "peekDelayedJob",
          "package": "hbeanstalk",
          "signature": "BeanstalkServer-\u003e IO Job",
          "type": "function"
        },
        "index": {
          "description": "Inspect the delayed job with shortest delay remaining on the currently used tube",
          "hierarchy": "Network Beanstalk",
          "module": "Network.Beanstalk",
          "name": "peekDelayedJob",
          "normalized": "BeanstalkServer-\u003eIO Job",
          "package": "hbeanstalk",
          "partial": "Delayed Job",
          "signature": "BeanstalkServer-\u003eIO Job",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hbeanstalk/docs/Network-Beanstalk.html#v:peekDelayedJob"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInspect a specific job in the system.\n\u003c/p\u003e",
          "module": "Network.Beanstalk",
          "name": "peekJob",
          "package": "hbeanstalk",
          "signature": "BeanstalkServer-\u003e Int-\u003e IO Job",
          "type": "function"
        },
        "index": {
          "description": "Inspect specific job in the system",
          "hierarchy": "Network Beanstalk",
          "module": "Network.Beanstalk",
          "name": "peekJob",
          "normalized": "BeanstalkServer-\u003eInt-\u003eIO Job",
          "package": "hbeanstalk",
          "partial": "Job",
          "signature": "BeanstalkServer-\u003eInt-\u003eIO Job",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hbeanstalk/docs/Network-Beanstalk.html#v:peekJob"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInspect the next ready job on the currently used tube.\n\u003c/p\u003e",
          "module": "Network.Beanstalk",
          "name": "peekReadyJob",
          "package": "hbeanstalk",
          "signature": "BeanstalkServer-\u003e IO Job",
          "type": "function"
        },
        "index": {
          "description": "Inspect the next ready job on the currently used tube",
          "hierarchy": "Network Beanstalk",
          "module": "Network.Beanstalk",
          "name": "peekReadyJob",
          "normalized": "BeanstalkServer-\u003eIO Job",
          "package": "hbeanstalk",
          "partial": "Ready Job",
          "signature": "BeanstalkServer-\u003eIO Job",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hbeanstalk/docs/Network-Beanstalk.html#v:peekReadyJob"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePretty print a list.\n\u003c/p\u003e",
          "module": "Network.Beanstalk",
          "name": "printList",
          "package": "hbeanstalk",
          "signature": "[ByteString]-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Pretty print list",
          "hierarchy": "Network Beanstalk",
          "module": "Network.Beanstalk",
          "name": "printList",
          "normalized": "[ByteString]-\u003eIO()",
          "package": "hbeanstalk",
          "partial": "List",
          "signature": "[ByteString]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hbeanstalk/docs/Network-Beanstalk.html#v:printList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrint stats to screen in a readable format.\n\u003c/p\u003e",
          "module": "Network.Beanstalk",
          "name": "printStats",
          "package": "hbeanstalk",
          "signature": "Map ByteString ByteString-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Print stats to screen in readable format",
          "hierarchy": "Network Beanstalk",
          "module": "Network.Beanstalk",
          "name": "printStats",
          "normalized": "Map ByteString ByteString-\u003eIO()",
          "package": "hbeanstalk",
          "partial": "Stats",
          "signature": "Map ByteString ByteString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hbeanstalk/docs/Network-Beanstalk.html#v:printStats"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePut a new job on the current tube that was selected with useTube.\n Specify numeric priority, delay before becoming active, a limit\n on the time-to-run, and a job body.  Returns job state and ID.\n\u003c/p\u003e",
          "module": "Network.Beanstalk",
          "name": "putJob",
          "package": "hbeanstalk",
          "signature": "BeanstalkServer-\u003e Int-\u003e Int-\u003e Int-\u003e ByteString-\u003e IO (JobState, Int)",
          "type": "function"
        },
        "index": {
          "description": "Put new job on the current tube that was selected with useTube Specify numeric priority delay before becoming active limit on the time-to-run and job body Returns job state and ID",
          "hierarchy": "Network Beanstalk",
          "module": "Network.Beanstalk",
          "name": "putJob",
          "normalized": "BeanstalkServer-\u003eInt-\u003eInt-\u003eInt-\u003eByteString-\u003eIO(JobState,Int)",
          "package": "hbeanstalk",
          "partial": "Job",
          "signature": "BeanstalkServer-\u003eInt-\u003eInt-\u003eInt-\u003eByteString-\u003eIO(JobState,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hbeanstalk/docs/Network-Beanstalk.html#v:putJob"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIndicate that a job should be released back to the tube for another consumer.\n\u003c/p\u003e",
          "module": "Network.Beanstalk",
          "name": "releaseJob",
          "package": "hbeanstalk",
          "signature": "BeanstalkServer-\u003e Int-\u003e Int-\u003e Int-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Indicate that job should be released back to the tube for another consumer",
          "hierarchy": "Network Beanstalk",
          "module": "Network.Beanstalk",
          "name": "releaseJob",
          "normalized": "BeanstalkServer-\u003eInt-\u003eInt-\u003eInt-\u003eIO()",
          "package": "hbeanstalk",
          "partial": "Job",
          "signature": "BeanstalkServer-\u003eInt-\u003eInt-\u003eInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hbeanstalk/docs/Network-Beanstalk.html#v:releaseJob"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReserve a new job from the watched tube list, blocking until one\n   becomes available. \u003ccode\u003e\u003ca\u003eDeadlineSoonException\u003c/a\u003e\u003c/code\u003e may be thrown if a job\n   reserved by the same client is about to expire.\n\u003c/p\u003e",
          "module": "Network.Beanstalk",
          "name": "reserveJob",
          "package": "hbeanstalk",
          "signature": "BeanstalkServer-\u003e IO Job",
          "type": "function"
        },
        "index": {
          "description": "Reserve new job from the watched tube list blocking until one becomes available DeadlineSoonException may be thrown if job reserved by the same client is about to expire",
          "hierarchy": "Network Beanstalk",
          "module": "Network.Beanstalk",
          "name": "reserveJob",
          "normalized": "BeanstalkServer-\u003eIO Job",
          "package": "hbeanstalk",
          "partial": "Job",
          "signature": "BeanstalkServer-\u003eIO Job",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hbeanstalk/docs/Network-Beanstalk.html#v:reserveJob"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReserve a job from the watched tube list, blocking for the specified number\n of seconds or until a job is returned.  If no jobs are found before the\n timeout value, a \u003ccode\u003e\u003ca\u003eTimedOutException\u003c/a\u003e\u003c/code\u003e will be thrown.  If another reserved job\n is about to exceed its time-to-run, a \u003ccode\u003e\u003ca\u003eDeadlineSoonException\u003c/a\u003e\u003c/code\u003e will be thrown.\n\u003c/p\u003e",
          "module": "Network.Beanstalk",
          "name": "reserveJobWithTimeout",
          "package": "hbeanstalk",
          "signature": "BeanstalkServer-\u003e Int-\u003e IO Job",
          "type": "function"
        },
        "index": {
          "description": "Reserve job from the watched tube list blocking for the specified number of seconds or until job is returned If no jobs are found before the timeout value TimedOutException will be thrown If another reserved job is about to exceed its time-to-run DeadlineSoonException will be thrown",
          "hierarchy": "Network Beanstalk",
          "module": "Network.Beanstalk",
          "name": "reserveJobWithTimeout",
          "normalized": "BeanstalkServer-\u003eInt-\u003eIO Job",
          "package": "hbeanstalk",
          "partial": "Job With Timeout",
          "signature": "BeanstalkServer-\u003eInt-\u003eIO Job",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hbeanstalk/docs/Network-Beanstalk.html#v:reserveJobWithTimeout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn statistical information about a job.  Keys that can be\n   expected to be returned are the following:\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eid\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e ID of the job.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003etube\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e The tube that contains this job\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003estate\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e State of the job, either \"ready\", \"delayed\", \"reserved\", or \"buried\"\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003epri\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Priority of the job\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eage\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Time in seconds since the \u003ccode\u003e\u003ca\u003eputJob\u003c/a\u003e\u003c/code\u003e command created this job\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003etime-left\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Time in seconds until this job is placed in the\n   ready queue, if it is currently reserved or delayed\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003ereserves\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Number of times this job has been reserved\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003etimeouts\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Number of times this job has timed out after a reservation\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003ereleases\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Number of times this job has been released\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eburies\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Number of times this job has been buried\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003ekicks\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Number of times this job has been kicked\n\u003c/dd\u003e\u003c/dl\u003e\u003cp\u003eSee the Beanstalk protocol docs for the definitive list and definitions.\n\u003c/p\u003e",
          "module": "Network.Beanstalk",
          "name": "statsJob",
          "package": "hbeanstalk",
          "signature": "BeanstalkServer-\u003e Int-\u003e IO (Map ByteString ByteString)",
          "type": "function"
        },
        "index": {
          "description": "Return statistical information about job Keys that can be expected to be returned are the following id ID of the job tube The tube that contains this job state State of the job either ready delayed reserved or buried pri Priority of the job age Time in seconds since the putJob command created this job time-left Time in seconds until this job is placed in the ready queue if it is currently reserved or delayed reserves Number of times this job has been reserved timeouts Number of times this job has timed out after reservation releases Number of times this job has been released buries Number of times this job has been buried kicks Number of times this job has been kicked See the Beanstalk protocol docs for the definitive list and definitions",
          "hierarchy": "Network Beanstalk",
          "module": "Network.Beanstalk",
          "name": "statsJob",
          "normalized": "BeanstalkServer-\u003eInt-\u003eIO(Map ByteString ByteString)",
          "package": "hbeanstalk",
          "partial": "Job",
          "signature": "BeanstalkServer-\u003eInt-\u003eIO(Map ByteString ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hbeanstalk/docs/Network-Beanstalk.html#v:statsJob"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn statistical information about the server, across all\n   clients.  Keys that can be expected to be returned are the\n   following:\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003ecurrent-jobs-urgent\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Number of \u003ccode\u003e\u003ca\u003eREADY\u003c/a\u003e\u003c/code\u003e jobs with priority less\n   than 1024\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003ecurrent-jobs-ready\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Number of jobs in the ready queue\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003ecurrent-jobs-reserved\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Number of jobs reserved\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003ecurrent-jobs-delayed\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Number of delayed jobs\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003ecurrent-jobs-buried\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Number of buried jobs\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003ecmd-put\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Cumulative number of \u003ccode\u003e\u003ca\u003eputJob\u003c/a\u003e\u003c/code\u003e commands issued\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003ecmd-peek\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Cumulative number of \u003ccode\u003e\u003ca\u003epeekJob\u003c/a\u003e\u003c/code\u003e commands issued\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003ecmd-peek-ready\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Cumulative number of \u003ccode\u003e\u003ca\u003epeekReadyJob\u003c/a\u003e\u003c/code\u003e commands\n   issued\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003ecmd-peek-delayed\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Cumulative number of \u003ccode\u003e\u003ca\u003epeekDelayedJob\u003c/a\u003e\u003c/code\u003e\n   commands issued\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003ecmd-peek-buried\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Cumulative number of \u003ccode\u003e\u003ca\u003epeekBuriedJob\u003c/a\u003e\u003c/code\u003e commands\n   issued\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003ecmd-reserve\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Cumulative number of \u003ccode\u003e\u003ca\u003ereserveJob\u003c/a\u003e\u003c/code\u003e commands issued\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003ecmd-use\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Cumulative number of \u003ccode\u003e\u003ca\u003euseTube\u003c/a\u003e\u003c/code\u003e commands issued\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003ecmd-watch\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Cumulative number of \u003ccode\u003e\u003ca\u003ewatchTube\u003c/a\u003e\u003c/code\u003e commands issued\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003ecmd-ignore\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Cumulative number of \u003ccode\u003e\u003ca\u003eignoreTube\u003c/a\u003e\u003c/code\u003e commands issued\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003ecmd-delete\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Cumulative number of \u003ccode\u003e\u003ca\u003edeleteJob\u003c/a\u003e\u003c/code\u003e commands issued\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003ecmd-release\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Cumulative number of \u003ccode\u003e\u003ca\u003ereleaseJob\u003c/a\u003e\u003c/code\u003e commands issued\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003ecmd-bury\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Cumulative number of \u003ccode\u003e\u003ca\u003eburyJob\u003c/a\u003e\u003c/code\u003e commands issued\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003ecmd-kick\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Cumulative number of \u003ccode\u003e\u003ca\u003ekickJobs\u003c/a\u003e\u003c/code\u003e commands issued\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003ecmd-stats\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Cumulative number of \u003ccode\u003e\u003ca\u003estatsServer\u003c/a\u003e\u003c/code\u003e commands issued\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003ecmd-stats-job\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Cumulative number of \u003ccode\u003e\u003ca\u003estatsJob\u003c/a\u003e\u003c/code\u003e commands issued\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003ecmd-stats-tube\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Cumulative number of \u003ccode\u003e\u003ca\u003estatsTube\u003c/a\u003e\u003c/code\u003e commands\n   issued\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003ecmd-list-tubes\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Cumulative number of \u003ccode\u003e\u003ca\u003elistTubes\u003c/a\u003e\u003c/code\u003e commands\n   issued\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003ecmd-list-tube-used\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Cumulative number of \u003ccode\u003e\u003ca\u003elistTubeUsed\u003c/a\u003e\u003c/code\u003e\n   commands issued\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003ecmd-list-tubes-watched\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Cumulative number of\n   \u003ccode\u003e\u003ca\u003elistTubesWatched\u003c/a\u003e\u003c/code\u003e commands issued\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003ecmd-pause-tube\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Cumulative number of \u003ccode\u003e\u003ca\u003epauseTube\u003c/a\u003e\u003c/code\u003e commands\n   issued\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003ejob-timeouts\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Cumulative number of times a job has timed out\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003etotal-jobs\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Total count of jobs created\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003emax-job-size\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Maximum number of bytes for a job body\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003ecurrent-tubes\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Current number of existing tubes\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003ecurrent-connections\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Number of currently open connections\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003ecurrent-producers\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Number of currently open connections that\n   have issued at least one \u003ccode\u003e\u003ca\u003eputJob\u003c/a\u003e\u003c/code\u003e command\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003ecurrent-workers\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Number of currently open connections that\n   have issued at least one \u003ccode\u003e\u003ca\u003ereserveJob\u003c/a\u003e\u003c/code\u003e command\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003ecurrent-waiting\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Number of currently open connections that are\n   blocking on a \u003ccode\u003e\u003ca\u003ereserveJob\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003ereserveJobWithTimeout\u003c/a\u003e\u003c/code\u003e command\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003etotal-connections\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Cumulative count of connections\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003epid\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Process ID of the server\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eversion\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Server's version string\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003erusage-utime\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e The accumulated user CPU time of the server\n   process in seconds and microseconds\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003erusage-stime\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e The accumulated system CPU time of the server\n   process in seconds and microseconds\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003euptime\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e The number of seconds since the server started\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003ebinlog-oldest-index\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e The index of the oldest binlog file\n   needed to store the current jobs\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003ebinlog-current-index\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e The index of the current binlog file\n   being written to.  If the binlog is not active, this is zero\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003ebinlog-max-size\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e The maximum number of bytes for a binlog file\n   before a new binlog file is opened\n\u003c/dd\u003e\u003c/dl\u003e\u003cp\u003eSee the Beanstalk protocol docs for the definitive list and definitions.\n\u003c/p\u003e",
          "module": "Network.Beanstalk",
          "name": "statsServer",
          "package": "hbeanstalk",
          "signature": "BeanstalkServer-\u003e IO (Map ByteString ByteString)",
          "type": "function"
        },
        "index": {
          "description": "Return statistical information about the server across all clients Keys that can be expected to be returned are the following current-jobs-urgent Number of READY jobs with priority less than current-jobs-ready Number of jobs in the ready queue current-jobs-reserved Number of jobs reserved current-jobs-delayed Number of delayed jobs current-jobs-buried Number of buried jobs cmd-put Cumulative number of putJob commands issued cmd-peek Cumulative number of peekJob commands issued cmd-peek-ready Cumulative number of peekReadyJob commands issued cmd-peek-delayed Cumulative number of peekDelayedJob commands issued cmd-peek-buried Cumulative number of peekBuriedJob commands issued cmd-reserve Cumulative number of reserveJob commands issued cmd-use Cumulative number of useTube commands issued cmd-watch Cumulative number of watchTube commands issued cmd-ignore Cumulative number of ignoreTube commands issued cmd-delete Cumulative number of deleteJob commands issued cmd-release Cumulative number of releaseJob commands issued cmd-bury Cumulative number of buryJob commands issued cmd-kick Cumulative number of kickJobs commands issued cmd-stats Cumulative number of statsServer commands issued cmd-stats-job Cumulative number of statsJob commands issued cmd-stats-tube Cumulative number of statsTube commands issued cmd-list-tubes Cumulative number of listTubes commands issued cmd-list-tube-used Cumulative number of listTubeUsed commands issued cmd-list-tubes-watched Cumulative number of listTubesWatched commands issued cmd-pause-tube Cumulative number of pauseTube commands issued job-timeouts Cumulative number of times job has timed out total-jobs Total count of jobs created max-job-size Maximum number of bytes for job body current-tubes Current number of existing tubes current-connections Number of currently open connections current-producers Number of currently open connections that have issued at least one putJob command current-workers Number of currently open connections that have issued at least one reserveJob command current-waiting Number of currently open connections that are blocking on reserveJob or reserveJobWithTimeout command total-connections Cumulative count of connections pid Process ID of the server version Server version string rusage-utime The accumulated user CPU time of the server process in seconds and microseconds rusage-stime The accumulated system CPU time of the server process in seconds and microseconds uptime The number of seconds since the server started binlog-oldest-index The index of the oldest binlog file needed to store the current jobs binlog-current-index The index of the current binlog file being written to If the binlog is not active this is zero binlog-max-size The maximum number of bytes for binlog file before new binlog file is opened See the Beanstalk protocol docs for the definitive list and definitions",
          "hierarchy": "Network Beanstalk",
          "module": "Network.Beanstalk",
          "name": "statsServer",
          "normalized": "BeanstalkServer-\u003eIO(Map ByteString ByteString)",
          "package": "hbeanstalk",
          "partial": "Server",
          "signature": "BeanstalkServer-\u003eIO(Map ByteString ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hbeanstalk/docs/Network-Beanstalk.html#v:statsServer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn statistical information about a tube.  Keys that can be\n   expected to be returned are the following:\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003ename\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Name of the tube\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003ecurrent-jobs-urgent\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Number of jobs in this tube with state\n   \u003ccode\u003e\u003ca\u003eREADY\u003c/a\u003e\u003c/code\u003e, with priority less than 1024\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003ecurrent-jobs-ready\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Number of jobs in this tube with state\n   \u003ccode\u003e\u003ca\u003eREADY\u003c/a\u003e\u003c/code\u003e\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003ecurrent-jobs-reserved\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Number of jobs in this tube with state\n   \u003ccode\u003e\u003ca\u003eRESERVED\u003c/a\u003e\u003c/code\u003e\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003ecurrent-jobs-delayed\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Number of jobs in this tube with state\n   \u003ccode\u003e\u003ca\u003eDELAYED\u003c/a\u003e\u003c/code\u003e\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003ecurrent-jobs-buried\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Number of jobs in this tube with state\n   \u003ccode\u003e\u003ca\u003eBURIED\u003c/a\u003e\u003c/code\u003e\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003etotal-jobs\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Number of jobs that have been created in this tube\n   since it was created\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003ecurrent-waiting\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Number of clients that have issued a reserve\n   command for this tube, and are still blocking waiting on a\n   response\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003epause\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Number of seconds this tube has been paused\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003ecmd-pause-tube\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Number of seconds this tube has been paused\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003epause-time-left\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Seconds remaining until this tube accepts job\n   reservations\n\u003c/dd\u003e\u003c/dl\u003e\u003cp\u003eSee the Beanstalk protocol docs for the definitive list and definitions.\n\u003c/p\u003e",
          "module": "Network.Beanstalk",
          "name": "statsTube",
          "package": "hbeanstalk",
          "signature": "BeanstalkServer-\u003e ByteString-\u003e IO (Map ByteString ByteString)",
          "type": "function"
        },
        "index": {
          "description": "Return statistical information about tube Keys that can be expected to be returned are the following name Name of the tube current-jobs-urgent Number of jobs in this tube with state READY with priority less than current-jobs-ready Number of jobs in this tube with state READY current-jobs-reserved Number of jobs in this tube with state RESERVED current-jobs-delayed Number of jobs in this tube with state DELAYED current-jobs-buried Number of jobs in this tube with state BURIED total-jobs Number of jobs that have been created in this tube since it was created current-waiting Number of clients that have issued reserve command for this tube and are still blocking waiting on response pause Number of seconds this tube has been paused cmd-pause-tube Number of seconds this tube has been paused pause-time-left Seconds remaining until this tube accepts job reservations See the Beanstalk protocol docs for the definitive list and definitions",
          "hierarchy": "Network Beanstalk",
          "module": "Network.Beanstalk",
          "name": "statsTube",
          "normalized": "BeanstalkServer-\u003eByteString-\u003eIO(Map ByteString ByteString)",
          "package": "hbeanstalk",
          "partial": "Tube",
          "signature": "BeanstalkServer-\u003eByteString-\u003eIO(Map ByteString ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hbeanstalk/docs/Network-Beanstalk.html#v:statsTube"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUpdate the Time-To-Run (TTR) value for a job, giving a worker more time before job expiry.\n\u003c/p\u003e",
          "module": "Network.Beanstalk",
          "name": "touchJob",
          "package": "hbeanstalk",
          "signature": "BeanstalkServer-\u003e Int-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Update the Time-To-Run TTR value for job giving worker more time before job expiry",
          "hierarchy": "Network Beanstalk",
          "module": "Network.Beanstalk",
          "name": "touchJob",
          "normalized": "BeanstalkServer-\u003eInt-\u003eIO()",
          "package": "hbeanstalk",
          "partial": "Job",
          "signature": "BeanstalkServer-\u003eInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hbeanstalk/docs/Network-Beanstalk.html#v:touchJob"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAssign a tube for new jobs created with put command.  If the tube\n   does not already exist, it will be created.  Initially, all\n   sessions will use the tube named \"default\".\n\u003c/p\u003e",
          "module": "Network.Beanstalk",
          "name": "useTube",
          "package": "hbeanstalk",
          "signature": "BeanstalkServer-\u003e ByteString-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Assign tube for new jobs created with put command If the tube does not already exist it will be created Initially all sessions will use the tube named default",
          "hierarchy": "Network Beanstalk",
          "module": "Network.Beanstalk",
          "name": "useTube",
          "normalized": "BeanstalkServer-\u003eByteString-\u003eIO()",
          "package": "hbeanstalk",
          "partial": "Tube",
          "signature": "BeanstalkServer-\u003eByteString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hbeanstalk/docs/Network-Beanstalk.html#v:useTube"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd a named tube to the watch list, those tubes which\n   \u003ccode\u003e\u003ca\u003ereserveJob\u003c/a\u003e\u003c/code\u003e will request jobs from.\n\u003c/p\u003e",
          "module": "Network.Beanstalk",
          "name": "watchTube",
          "package": "hbeanstalk",
          "signature": "BeanstalkServer-\u003e ByteString-\u003e IO Int",
          "type": "function"
        },
        "index": {
          "description": "Add named tube to the watch list those tubes which reserveJob will request jobs from",
          "hierarchy": "Network Beanstalk",
          "module": "Network.Beanstalk",
          "name": "watchTube",
          "normalized": "BeanstalkServer-\u003eByteString-\u003eIO Int",
          "package": "hbeanstalk",
          "partial": "Tube",
          "signature": "BeanstalkServer-\u003eByteString-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hbeanstalk/docs/Network-Beanstalk.html#v:watchTube"
      }
    }
  ]
]