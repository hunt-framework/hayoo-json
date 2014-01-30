[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/posix-pty/docs/System-Posix-Pty.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA module for interacting with subprocesses through a pseudo terminal (pty).\n Provides functions for reading from, writing to and resizing pseudo\n terminals. Re-exports most of \u003ca\u003eSystem.Posix.Terminal\u003c/a\u003e, providing wrappers\n that work with the \u003ccode\u003e\u003ca\u003ePty\u003c/a\u003e\u003c/code\u003e type where necessary.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.Posix.Pty",
        "fct-package": "posix-pty",
        "fct-signature": "module",
        "fct-source": "src/System-Posix-Pty.html",
        "fct-type": "module",
        "title": "Pty"
      },
      "index": {
        "description": "module for interacting with subprocesses through pseudo terminal pty Provides functions for reading from writing to and resizing pseudo terminals Re-exports most of System.Posix.Terminal providing wrappers that work with the Pty type where necessary",
        "hierarchy": "System Posix Pty",
        "module": "System.Posix.Pty",
        "name": "Pty",
        "normalized": "",
        "package": "posix-pty",
        "partial": "Pty",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/posix-pty/docs/System-Posix-Pty.html#t:Pty",
      "description": {
        "fct-descr": "\u003cp\u003eAbstract pseudo terminal type.\n\u003c/p\u003e",
        "fct-module": "System.Posix.Pty",
        "fct-package": "posix-pty",
        "fct-signature": "data",
        "fct-source": "src/System-Posix-Pty.html#Pty",
        "fct-type": "data",
        "title": "Pty"
      },
      "index": {
        "description": "Abstract pseudo terminal type",
        "hierarchy": "System Posix Pty",
        "module": "System.Posix.Pty",
        "name": "Pty",
        "normalized": "",
        "package": "posix-pty",
        "partial": "Pty",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/posix-pty/docs/System-Posix-Pty.html#t:PtyControlCode",
      "description": {
        "fct-descr": "\u003cp\u003ePseudo terminal control information.\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003eTerminal read queue\u003c/dt\u003e\u003cdd\u003e The terminal read queue contains the data that was\n written from the master terminal to the slave terminal, which was not read\n from the slave yet.\n\u003c/dd\u003e\u003cdt\u003eTerminal write queue\u003c/dt\u003e\u003cdd\u003e The terminal write queue contains the data that was\n written from the slave terminal, which was not sent to the master yet.\n\u003c/dd\u003e\u003c/dl\u003e",
        "fct-module": "System.Posix.Pty",
        "fct-package": "posix-pty",
        "fct-signature": "data",
        "fct-source": "src/System-Posix-Pty.html#PtyControlCode",
        "fct-type": "data",
        "title": "PtyControlCode"
      },
      "index": {
        "description": "Pseudo terminal control information Terminal read queue The terminal read queue contains the data that was written from the master terminal to the slave terminal which was not read from the slave yet Terminal write queue The terminal write queue contains the data that was written from the slave terminal which was not sent to the master yet",
        "hierarchy": "System Posix Pty",
        "module": "System.Posix.Pty",
        "name": "PtyControlCode",
        "normalized": "",
        "package": "posix-pty",
        "partial": "Pty Control Code",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/posix-pty/docs/System-Posix-Pty.html#v:DoStop",
      "description": {
        "fct-descr": "\u003cp\u003eTerminal stop and start characters are\n   \u003ccode\u003e^S\u003c/code\u003e and \u003ccode\u003e^Q\u003c/code\u003e respectively.\n\u003c/p\u003e",
        "fct-module": "System.Posix.Pty",
        "fct-package": "posix-pty",
        "fct-signature": "DoStop",
        "fct-source": "src/System-Posix-Pty.html#PtyControlCode",
        "fct-type": "function",
        "title": "DoStop"
      },
      "index": {
        "description": "Terminal stop and start characters are and respectively",
        "hierarchy": "System Posix Pty",
        "module": "System.Posix.Pty",
        "name": "DoStop",
        "normalized": "",
        "package": "posix-pty",
        "partial": "Do Stop",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/posix-pty/docs/System-Posix-Pty.html#v:FlushRead",
      "description": {
        "fct-descr": "\u003cp\u003eTerminal read queue was flushed.\n\u003c/p\u003e",
        "fct-module": "System.Posix.Pty",
        "fct-package": "posix-pty",
        "fct-signature": "FlushRead",
        "fct-source": "src/System-Posix-Pty.html#PtyControlCode",
        "fct-type": "function",
        "title": "FlushRead"
      },
      "index": {
        "description": "Terminal read queue was flushed",
        "hierarchy": "System Posix Pty",
        "module": "System.Posix.Pty",
        "name": "FlushRead",
        "normalized": "",
        "package": "posix-pty",
        "partial": "Flush Read",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/posix-pty/docs/System-Posix-Pty.html#v:FlushWrite",
      "description": {
        "fct-descr": "\u003cp\u003eTerminal write queue was flushed.\n\u003c/p\u003e",
        "fct-module": "System.Posix.Pty",
        "fct-package": "posix-pty",
        "fct-signature": "FlushWrite",
        "fct-source": "src/System-Posix-Pty.html#PtyControlCode",
        "fct-type": "function",
        "title": "FlushWrite"
      },
      "index": {
        "description": "Terminal write queue was flushed",
        "hierarchy": "System Posix Pty",
        "module": "System.Posix.Pty",
        "name": "FlushWrite",
        "normalized": "",
        "package": "posix-pty",
        "partial": "Flush Write",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/posix-pty/docs/System-Posix-Pty.html#v:NoStop",
      "description": {
        "fct-descr": "\u003cp\u003eTerminal stop and start characters are\n   NOT \u003ccode\u003e^S\u003c/code\u003e and \u003ccode\u003e^Q\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Posix.Pty",
        "fct-package": "posix-pty",
        "fct-signature": "NoStop",
        "fct-source": "src/System-Posix-Pty.html#PtyControlCode",
        "fct-type": "function",
        "title": "NoStop"
      },
      "index": {
        "description": "Terminal stop and start characters are NOT and",
        "hierarchy": "System Posix Pty",
        "module": "System.Posix.Pty",
        "name": "NoStop",
        "normalized": "",
        "package": "posix-pty",
        "partial": "No Stop",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/posix-pty/docs/System-Posix-Pty.html#v:OutputStarted",
      "description": {
        "fct-descr": "\u003cp\u003eTerminal output was restarted.\n\u003c/p\u003e",
        "fct-module": "System.Posix.Pty",
        "fct-package": "posix-pty",
        "fct-signature": "OutputStarted",
        "fct-source": "src/System-Posix-Pty.html#PtyControlCode",
        "fct-type": "function",
        "title": "OutputStarted"
      },
      "index": {
        "description": "Terminal output was restarted",
        "hierarchy": "System Posix Pty",
        "module": "System.Posix.Pty",
        "name": "OutputStarted",
        "normalized": "",
        "package": "posix-pty",
        "partial": "Output Started",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/posix-pty/docs/System-Posix-Pty.html#v:OutputStopped",
      "description": {
        "fct-descr": "\u003cp\u003eTerminal output was stopped.\n\u003c/p\u003e",
        "fct-module": "System.Posix.Pty",
        "fct-package": "posix-pty",
        "fct-signature": "OutputStopped",
        "fct-source": "src/System-Posix-Pty.html#PtyControlCode",
        "fct-type": "function",
        "title": "OutputStopped"
      },
      "index": {
        "description": "Terminal output was stopped",
        "hierarchy": "System Posix Pty",
        "module": "System.Posix.Pty",
        "name": "OutputStopped",
        "normalized": "",
        "package": "posix-pty",
        "partial": "Output Stopped",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/posix-pty/docs/System-Posix-Pty.html#v:controlFlow",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ccode\u003e\u003ca\u003econtrolFlow\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Posix.Pty",
        "fct-package": "posix-pty",
        "fct-signature": "Pty -\u003e FlowAction -\u003e IO ()",
        "fct-source": "src/System-Posix-Pty.html#controlFlow",
        "fct-type": "function",
        "title": "controlFlow"
      },
      "index": {
        "description": "See controlFlow",
        "hierarchy": "System Posix Pty",
        "module": "System.Posix.Pty",
        "name": "controlFlow",
        "normalized": "Pty-\u003eFlowAction-\u003eIO()",
        "package": "posix-pty",
        "partial": "Flow",
        "signature": "Pty-\u003eFlowAction-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/posix-pty/docs/System-Posix-Pty.html#v:createPty",
      "description": {
        "fct-descr": "\u003cp\u003eProduces a \u003ccode\u003e\u003ca\u003ePty\u003c/a\u003e\u003c/code\u003e if the file descriptor is associated with a terminal and\n Nothing if not.\n\u003c/p\u003e",
        "fct-module": "System.Posix.Pty",
        "fct-package": "posix-pty",
        "fct-signature": "Fd -\u003e IO (Maybe Pty)",
        "fct-source": "src/System-Posix-Pty.html#createPty",
        "fct-type": "function",
        "title": "createPty"
      },
      "index": {
        "description": "Produces Pty if the file descriptor is associated with terminal and Nothing if not",
        "hierarchy": "System Posix Pty",
        "module": "System.Posix.Pty",
        "name": "createPty",
        "normalized": "Fd-\u003eIO(Maybe Pty)",
        "package": "posix-pty",
        "partial": "Pty",
        "signature": "Fd-\u003eIO(Maybe Pty)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/posix-pty/docs/System-Posix-Pty.html#v:discardData",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ccode\u003e\u003ca\u003ediscardData\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Posix.Pty",
        "fct-package": "posix-pty",
        "fct-signature": "Pty -\u003e QueueSelector -\u003e IO ()",
        "fct-source": "src/System-Posix-Pty.html#discardData",
        "fct-type": "function",
        "title": "discardData"
      },
      "index": {
        "description": "See discardData",
        "hierarchy": "System Posix Pty",
        "module": "System.Posix.Pty",
        "name": "discardData",
        "normalized": "Pty-\u003eQueueSelector-\u003eIO()",
        "package": "posix-pty",
        "partial": "Data",
        "signature": "Pty-\u003eQueueSelector-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/posix-pty/docs/System-Posix-Pty.html#v:drainOutput",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ccode\u003e\u003ca\u003edrainOutput\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Posix.Pty",
        "fct-package": "posix-pty",
        "fct-signature": "Pty -\u003e IO ()",
        "fct-source": "src/System-Posix-Pty.html#drainOutput",
        "fct-type": "function",
        "title": "drainOutput"
      },
      "index": {
        "description": "See drainOutput",
        "hierarchy": "System Posix Pty",
        "module": "System.Posix.Pty",
        "name": "drainOutput",
        "normalized": "Pty-\u003eIO()",
        "package": "posix-pty",
        "partial": "Output",
        "signature": "Pty-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/posix-pty/docs/System-Posix-Pty.html#v:getSlaveTerminalName",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ccode\u003e\u003ca\u003egetSlaveTerminalName\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Posix.Pty",
        "fct-package": "posix-pty",
        "fct-signature": "Pty -\u003e IO FilePath",
        "fct-source": "src/System-Posix-Pty.html#getSlaveTerminalName",
        "fct-type": "function",
        "title": "getSlaveTerminalName"
      },
      "index": {
        "description": "See getSlaveTerminalName",
        "hierarchy": "System Posix Pty",
        "module": "System.Posix.Pty",
        "name": "getSlaveTerminalName",
        "normalized": "Pty-\u003eIO FilePath",
        "package": "posix-pty",
        "partial": "Slave Terminal Name",
        "signature": "Pty-\u003eIO FilePath"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/posix-pty/docs/System-Posix-Pty.html#v:getTerminalAttributes",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ccode\u003e\u003ca\u003egetTerminalAttributes\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Posix.Pty",
        "fct-package": "posix-pty",
        "fct-signature": "Pty -\u003e IO TerminalAttributes",
        "fct-source": "src/System-Posix-Pty.html#getTerminalAttributes",
        "fct-type": "function",
        "title": "getTerminalAttributes"
      },
      "index": {
        "description": "See getTerminalAttributes",
        "hierarchy": "System Posix Pty",
        "module": "System.Posix.Pty",
        "name": "getTerminalAttributes",
        "normalized": "Pty-\u003eIO TerminalAttributes",
        "package": "posix-pty",
        "partial": "Terminal Attributes",
        "signature": "Pty-\u003eIO TerminalAttributes"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/posix-pty/docs/System-Posix-Pty.html#v:getTerminalName",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ccode\u003e\u003ca\u003egetTerminalName\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Posix.Pty",
        "fct-package": "posix-pty",
        "fct-signature": "Pty -\u003e IO FilePath",
        "fct-source": "src/System-Posix-Pty.html#getTerminalName",
        "fct-type": "function",
        "title": "getTerminalName"
      },
      "index": {
        "description": "See getTerminalName",
        "hierarchy": "System Posix Pty",
        "module": "System.Posix.Pty",
        "name": "getTerminalName",
        "normalized": "Pty-\u003eIO FilePath",
        "package": "posix-pty",
        "partial": "Terminal Name",
        "signature": "Pty-\u003eIO FilePath"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/posix-pty/docs/System-Posix-Pty.html#v:getTerminalProcessGroupID",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ccode\u003e\u003ca\u003egetTerminalProcessGroupID\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Posix.Pty",
        "fct-package": "posix-pty",
        "fct-signature": "Pty -\u003e IO ProcessGroupID",
        "fct-source": "src/System-Posix-Pty.html#getTerminalProcessGroupID",
        "fct-type": "function",
        "title": "getTerminalProcessGroupID"
      },
      "index": {
        "description": "See getTerminalProcessGroupID",
        "hierarchy": "System Posix Pty",
        "module": "System.Posix.Pty",
        "name": "getTerminalProcessGroupID",
        "normalized": "Pty-\u003eIO ProcessGroupID",
        "package": "posix-pty",
        "partial": "Terminal Process Group ID",
        "signature": "Pty-\u003eIO ProcessGroupID"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/posix-pty/docs/System-Posix-Pty.html#v:ptyDimensions",
      "description": {
        "fct-descr": "\u003cp\u003eProduces the pseudo terminal's current dimensions.\n\u003c/p\u003e",
        "fct-module": "System.Posix.Pty",
        "fct-package": "posix-pty",
        "fct-signature": "Pty -\u003e IO (Int, Int)",
        "fct-source": "src/System-Posix-Pty.html#ptyDimensions",
        "fct-type": "function",
        "title": "ptyDimensions"
      },
      "index": {
        "description": "Produces the pseudo terminal current dimensions",
        "hierarchy": "System Posix Pty",
        "module": "System.Posix.Pty",
        "name": "ptyDimensions",
        "normalized": "Pty-\u003eIO(Int,Int)",
        "package": "posix-pty",
        "partial": "Dimensions",
        "signature": "Pty-\u003eIO(Int,Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/posix-pty/docs/System-Posix-Pty.html#v:readPty",
      "description": {
        "fct-descr": "\u003cp\u003eThe same as \u003ccode\u003e\u003ca\u003etryReadPty\u003c/a\u003e\u003c/code\u003e, but discards any control status events.\n\u003c/p\u003e",
        "fct-module": "System.Posix.Pty",
        "fct-package": "posix-pty",
        "fct-signature": "Pty -\u003e IO ByteString",
        "fct-source": "src/System-Posix-Pty.html#readPty",
        "fct-type": "function",
        "title": "readPty"
      },
      "index": {
        "description": "The same as tryReadPty but discards any control status events",
        "hierarchy": "System Posix Pty",
        "module": "System.Posix.Pty",
        "name": "readPty",
        "normalized": "Pty-\u003eIO ByteString",
        "package": "posix-pty",
        "partial": "Pty",
        "signature": "Pty-\u003eIO ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/posix-pty/docs/System-Posix-Pty.html#v:resizePty",
      "description": {
        "fct-descr": "\u003cp\u003eSet the pseudo terminal's dimensions to the specified width and height.\n\u003c/p\u003e",
        "fct-module": "System.Posix.Pty",
        "fct-package": "posix-pty",
        "fct-signature": "Pty -\u003e (Int, Int) -\u003e IO ()",
        "fct-source": "src/System-Posix-Pty.html#resizePty",
        "fct-type": "function",
        "title": "resizePty"
      },
      "index": {
        "description": "Set the pseudo terminal dimensions to the specified width and height",
        "hierarchy": "System Posix Pty",
        "module": "System.Posix.Pty",
        "name": "resizePty",
        "normalized": "Pty-\u003e(Int,Int)-\u003eIO()",
        "package": "posix-pty",
        "partial": "Pty",
        "signature": "Pty-\u003e(Int,Int)-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/posix-pty/docs/System-Posix-Pty.html#v:sendBreak",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ccode\u003e\u003ca\u003esendBreak\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Posix.Pty",
        "fct-package": "posix-pty",
        "fct-signature": "Pty -\u003e Int -\u003e IO ()",
        "fct-source": "src/System-Posix-Pty.html#sendBreak",
        "fct-type": "function",
        "title": "sendBreak"
      },
      "index": {
        "description": "See sendBreak",
        "hierarchy": "System Posix Pty",
        "module": "System.Posix.Pty",
        "name": "sendBreak",
        "normalized": "Pty-\u003eInt-\u003eIO()",
        "package": "posix-pty",
        "partial": "Break",
        "signature": "Pty-\u003eInt-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/posix-pty/docs/System-Posix-Pty.html#v:setTerminalAttributes",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ccode\u003e\u003ca\u003esetTerminalAttributes\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Posix.Pty",
        "fct-package": "posix-pty",
        "fct-signature": "Pty -\u003e TerminalAttributes -\u003e TerminalState -\u003e IO ()",
        "fct-source": "src/System-Posix-Pty.html#setTerminalAttributes",
        "fct-type": "function",
        "title": "setTerminalAttributes"
      },
      "index": {
        "description": "See setTerminalAttributes",
        "hierarchy": "System Posix Pty",
        "module": "System.Posix.Pty",
        "name": "setTerminalAttributes",
        "normalized": "Pty-\u003eTerminalAttributes-\u003eTerminalState-\u003eIO()",
        "package": "posix-pty",
        "partial": "Terminal Attributes",
        "signature": "Pty-\u003eTerminalAttributes-\u003eTerminalState-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/posix-pty/docs/System-Posix-Pty.html#v:spawnWithPty",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new process that is connected to the current process through a\n pseudo terminal. If an environment is specified, then only the specified\n environment variables will be set. If no environment is specified the\n process will inherit its environment from the current process. Example:\n\u003c/p\u003e\u003cpre\u003e pty \u003c- spawnWithPty (Just [(\"SHELL\", \"tcsh\")]) True \"ls\" [\"-l\"] (20, 10)\n\u003c/pre\u003e\u003cp\u003eThis searches the user's PATH for a binary called \u003ccode\u003els\u003c/code\u003e, then runs this\n binary with the commandline argument \u003ccode\u003e-l\u003c/code\u003e in a terminal that is 20\n characters wide and 10 characters high. The environment of \u003ccode\u003els\u003c/code\u003e will\n contains one variable, SHELL, which will be set to the value \"tcsh\".\n\u003c/p\u003e",
        "fct-module": "System.Posix.Pty",
        "fct-package": "posix-pty",
        "fct-signature": "Maybe [(String, String)]-\u003e Bool-\u003e FilePath-\u003e [String]-\u003e (Int, Int)-\u003e IO Pty",
        "fct-type": "function",
        "title": "spawnWithPty"
      },
      "index": {
        "description": "Create new process that is connected to the current process through pseudo terminal If an environment is specified then only the specified environment variables will be set If no environment is specified the process will inherit its environment from the current process Example pty spawnWithPty Just SHELL tcsh True ls This searches the user PATH for binary called ls then runs this binary with the commandline argument in terminal that is characters wide and characters high The environment of ls will contains one variable SHELL which will be set to the value tcsh",
        "hierarchy": "System Posix Pty",
        "module": "System.Posix.Pty",
        "name": "spawnWithPty",
        "normalized": "Maybe[(String,String)]-\u003eBool-\u003eFilePath-\u003e[String]-\u003e(Int,Int)-\u003eIO Pty",
        "package": "posix-pty",
        "partial": "With Pty",
        "signature": "Maybe[(String,String)]-\u003eBool-\u003eFilePath-\u003e[String]-\u003e(Int,Int)-\u003eIO Pty"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/posix-pty/docs/System-Posix-Pty.html#v:tryReadPty",
      "description": {
        "fct-descr": "\u003cp\u003eAttempt to read data from a pseudo terminal. Produces either the data read\n or a list of \u003ccode\u003e\u003ca\u003ePtyControlCode\u003c/a\u003e\u003c/code\u003e\u003ccode\u003es\u003c/code\u003e indicating which control status events that\n have happened on the slave terminal.\n\u003c/p\u003e\u003cp\u003eThrows an \u003ccode\u003e\u003ca\u003eIOError\u003c/a\u003e\u003c/code\u003e of type \u003ccode\u003e\u003ca\u003eeofErrorType\u003c/a\u003e\u003c/code\u003e when the terminal has been\n closed, for example when the subprocess has terminated.\n\u003c/p\u003e",
        "fct-module": "System.Posix.Pty",
        "fct-package": "posix-pty",
        "fct-signature": "Pty -\u003e IO (Either [PtyControlCode] ByteString)",
        "fct-source": "src/System-Posix-Pty.html#tryReadPty",
        "fct-type": "function",
        "title": "tryReadPty"
      },
      "index": {
        "description": "Attempt to read data from pseudo terminal Produces either the data read or list of PtyControlCode indicating which control status events that have happened on the slave terminal Throws an IOError of type eofErrorType when the terminal has been closed for example when the subprocess has terminated",
        "hierarchy": "System Posix Pty",
        "module": "System.Posix.Pty",
        "name": "tryReadPty",
        "normalized": "Pty-\u003eIO(Either[PtyControlCode]ByteString)",
        "package": "posix-pty",
        "partial": "Read Pty",
        "signature": "Pty-\u003eIO(Either[PtyControlCode]ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/posix-pty/docs/System-Posix-Pty.html#v:writePty",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e to the pseudo terminal, throws an \u003ccode\u003e\u003ca\u003eIOError\u003c/a\u003e\u003c/code\u003e when the\n terminal has been closed, for example when the subprocess has terminated.\n\u003c/p\u003e",
        "fct-module": "System.Posix.Pty",
        "fct-package": "posix-pty",
        "fct-signature": "Pty -\u003e ByteString -\u003e IO ()",
        "fct-source": "src/System-Posix-Pty.html#writePty",
        "fct-type": "function",
        "title": "writePty"
      },
      "index": {
        "description": "Write ByteString to the pseudo terminal throws an IOError when the terminal has been closed for example when the subprocess has terminated",
        "hierarchy": "System Posix Pty",
        "module": "System.Posix.Pty",
        "name": "writePty",
        "normalized": "Pty-\u003eByteString-\u003eIO()",
        "package": "posix-pty",
        "partial": "Pty",
        "signature": "Pty-\u003eByteString-\u003eIO()"
      }
    }
  }
]