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
        "word": "posix-pty"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA module for interacting with subprocesses through a pseudo terminal (pty).\n Provides functions for reading from, writing to and resizing pseudo\n terminals. Re-exports most of \u003ca\u003eSystem.Posix.Terminal\u003c/a\u003e, providing wrappers\n that work with the \u003ccode\u003e\u003ca\u003ePty\u003c/a\u003e\u003c/code\u003e type where necessary.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Posix.Pty",
          "name": "Pty",
          "package": "posix-pty",
          "source": "src/System-Posix-Pty.html",
          "type": "module"
        },
        "index": {
          "description": "module for interacting with subprocesses through pseudo terminal pty Provides functions for reading from writing to and resizing pseudo terminals Re-exports most of System.Posix.Terminal providing wrappers that work with the Pty type where necessary",
          "hierarchy": "System Posix Pty",
          "module": "System.Posix.Pty",
          "name": "Pty",
          "package": "posix-pty",
          "partial": "Pty",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/posix-pty/docs/System-Posix-Pty.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAbstract pseudo terminal type.\n\u003c/p\u003e",
          "module": "System.Posix.Pty",
          "name": "Pty",
          "package": "posix-pty",
          "source": "src/System-Posix-Pty.html#Pty",
          "type": "data"
        },
        "index": {
          "description": "Abstract pseudo terminal type",
          "hierarchy": "System Posix Pty",
          "module": "System.Posix.Pty",
          "name": "Pty",
          "package": "posix-pty",
          "partial": "Pty",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/posix-pty/docs/System-Posix-Pty.html#t:Pty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePseudo terminal control information.\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003eTerminal read queue\u003c/dt\u003e\u003cdd\u003e The terminal read queue contains the data that was\n written from the master terminal to the slave terminal, which was not read\n from the slave yet.\n\u003c/dd\u003e\u003cdt\u003eTerminal write queue\u003c/dt\u003e\u003cdd\u003e The terminal write queue contains the data that was\n written from the slave terminal, which was not sent to the master yet.\n\u003c/dd\u003e\u003c/dl\u003e",
          "module": "System.Posix.Pty",
          "name": "PtyControlCode",
          "package": "posix-pty",
          "source": "src/System-Posix-Pty.html#PtyControlCode",
          "type": "data"
        },
        "index": {
          "description": "Pseudo terminal control information Terminal read queue The terminal read queue contains the data that was written from the master terminal to the slave terminal which was not read from the slave yet Terminal write queue The terminal write queue contains the data that was written from the slave terminal which was not sent to the master yet",
          "hierarchy": "System Posix Pty",
          "module": "System.Posix.Pty",
          "name": "PtyControlCode",
          "package": "posix-pty",
          "partial": "Pty Control Code",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/posix-pty/docs/System-Posix-Pty.html#t:PtyControlCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTerminal stop and start characters are\n   \u003ccode\u003e^S\u003c/code\u003e and \u003ccode\u003e^Q\u003c/code\u003e respectively.\n\u003c/p\u003e",
          "module": "System.Posix.Pty",
          "name": "DoStop",
          "package": "posix-pty",
          "signature": "DoStop",
          "source": "src/System-Posix-Pty.html#PtyControlCode",
          "type": "function"
        },
        "index": {
          "description": "Terminal stop and start characters are and respectively",
          "hierarchy": "System Posix Pty",
          "module": "System.Posix.Pty",
          "name": "DoStop",
          "package": "posix-pty",
          "partial": "Do Stop",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/posix-pty/docs/System-Posix-Pty.html#v:DoStop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTerminal read queue was flushed.\n\u003c/p\u003e",
          "module": "System.Posix.Pty",
          "name": "FlushRead",
          "package": "posix-pty",
          "signature": "FlushRead",
          "source": "src/System-Posix-Pty.html#PtyControlCode",
          "type": "function"
        },
        "index": {
          "description": "Terminal read queue was flushed",
          "hierarchy": "System Posix Pty",
          "module": "System.Posix.Pty",
          "name": "FlushRead",
          "package": "posix-pty",
          "partial": "Flush Read",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/posix-pty/docs/System-Posix-Pty.html#v:FlushRead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTerminal write queue was flushed.\n\u003c/p\u003e",
          "module": "System.Posix.Pty",
          "name": "FlushWrite",
          "package": "posix-pty",
          "signature": "FlushWrite",
          "source": "src/System-Posix-Pty.html#PtyControlCode",
          "type": "function"
        },
        "index": {
          "description": "Terminal write queue was flushed",
          "hierarchy": "System Posix Pty",
          "module": "System.Posix.Pty",
          "name": "FlushWrite",
          "package": "posix-pty",
          "partial": "Flush Write",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/posix-pty/docs/System-Posix-Pty.html#v:FlushWrite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTerminal stop and start characters are\n   NOT \u003ccode\u003e^S\u003c/code\u003e and \u003ccode\u003e^Q\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Posix.Pty",
          "name": "NoStop",
          "package": "posix-pty",
          "signature": "NoStop",
          "source": "src/System-Posix-Pty.html#PtyControlCode",
          "type": "function"
        },
        "index": {
          "description": "Terminal stop and start characters are NOT and",
          "hierarchy": "System Posix Pty",
          "module": "System.Posix.Pty",
          "name": "NoStop",
          "package": "posix-pty",
          "partial": "No Stop",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/posix-pty/docs/System-Posix-Pty.html#v:NoStop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTerminal output was restarted.\n\u003c/p\u003e",
          "module": "System.Posix.Pty",
          "name": "OutputStarted",
          "package": "posix-pty",
          "signature": "OutputStarted",
          "source": "src/System-Posix-Pty.html#PtyControlCode",
          "type": "function"
        },
        "index": {
          "description": "Terminal output was restarted",
          "hierarchy": "System Posix Pty",
          "module": "System.Posix.Pty",
          "name": "OutputStarted",
          "package": "posix-pty",
          "partial": "Output Started",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/posix-pty/docs/System-Posix-Pty.html#v:OutputStarted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTerminal output was stopped.\n\u003c/p\u003e",
          "module": "System.Posix.Pty",
          "name": "OutputStopped",
          "package": "posix-pty",
          "signature": "OutputStopped",
          "source": "src/System-Posix-Pty.html#PtyControlCode",
          "type": "function"
        },
        "index": {
          "description": "Terminal output was stopped",
          "hierarchy": "System Posix Pty",
          "module": "System.Posix.Pty",
          "name": "OutputStopped",
          "package": "posix-pty",
          "partial": "Output Stopped",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/posix-pty/docs/System-Posix-Pty.html#v:OutputStopped"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003e\u003ca\u003econtrolFlow\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Posix.Pty",
          "name": "controlFlow",
          "package": "posix-pty",
          "signature": "Pty -\u003e FlowAction -\u003e IO ()",
          "source": "src/System-Posix-Pty.html#controlFlow",
          "type": "function"
        },
        "index": {
          "description": "See controlFlow",
          "hierarchy": "System Posix Pty",
          "module": "System.Posix.Pty",
          "name": "controlFlow",
          "normalized": "Pty-\u003eFlowAction-\u003eIO()",
          "package": "posix-pty",
          "partial": "Flow",
          "signature": "Pty-\u003eFlowAction-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/posix-pty/docs/System-Posix-Pty.html#v:controlFlow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProduces a \u003ccode\u003e\u003ca\u003ePty\u003c/a\u003e\u003c/code\u003e if the file descriptor is associated with a terminal and\n Nothing if not.\n\u003c/p\u003e",
          "module": "System.Posix.Pty",
          "name": "createPty",
          "package": "posix-pty",
          "signature": "Fd -\u003e IO (Maybe Pty)",
          "source": "src/System-Posix-Pty.html#createPty",
          "type": "function"
        },
        "index": {
          "description": "Produces Pty if the file descriptor is associated with terminal and Nothing if not",
          "hierarchy": "System Posix Pty",
          "module": "System.Posix.Pty",
          "name": "createPty",
          "normalized": "Fd-\u003eIO(Maybe Pty)",
          "package": "posix-pty",
          "partial": "Pty",
          "signature": "Fd-\u003eIO(Maybe Pty)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/posix-pty/docs/System-Posix-Pty.html#v:createPty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003e\u003ca\u003ediscardData\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Posix.Pty",
          "name": "discardData",
          "package": "posix-pty",
          "signature": "Pty -\u003e QueueSelector -\u003e IO ()",
          "source": "src/System-Posix-Pty.html#discardData",
          "type": "function"
        },
        "index": {
          "description": "See discardData",
          "hierarchy": "System Posix Pty",
          "module": "System.Posix.Pty",
          "name": "discardData",
          "normalized": "Pty-\u003eQueueSelector-\u003eIO()",
          "package": "posix-pty",
          "partial": "Data",
          "signature": "Pty-\u003eQueueSelector-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/posix-pty/docs/System-Posix-Pty.html#v:discardData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003e\u003ca\u003edrainOutput\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Posix.Pty",
          "name": "drainOutput",
          "package": "posix-pty",
          "signature": "Pty -\u003e IO ()",
          "source": "src/System-Posix-Pty.html#drainOutput",
          "type": "function"
        },
        "index": {
          "description": "See drainOutput",
          "hierarchy": "System Posix Pty",
          "module": "System.Posix.Pty",
          "name": "drainOutput",
          "normalized": "Pty-\u003eIO()",
          "package": "posix-pty",
          "partial": "Output",
          "signature": "Pty-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/posix-pty/docs/System-Posix-Pty.html#v:drainOutput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003e\u003ca\u003egetSlaveTerminalName\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Posix.Pty",
          "name": "getSlaveTerminalName",
          "package": "posix-pty",
          "signature": "Pty -\u003e IO FilePath",
          "source": "src/System-Posix-Pty.html#getSlaveTerminalName",
          "type": "function"
        },
        "index": {
          "description": "See getSlaveTerminalName",
          "hierarchy": "System Posix Pty",
          "module": "System.Posix.Pty",
          "name": "getSlaveTerminalName",
          "normalized": "Pty-\u003eIO FilePath",
          "package": "posix-pty",
          "partial": "Slave Terminal Name",
          "signature": "Pty-\u003eIO FilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/posix-pty/docs/System-Posix-Pty.html#v:getSlaveTerminalName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003e\u003ca\u003egetTerminalAttributes\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Posix.Pty",
          "name": "getTerminalAttributes",
          "package": "posix-pty",
          "signature": "Pty -\u003e IO TerminalAttributes",
          "source": "src/System-Posix-Pty.html#getTerminalAttributes",
          "type": "function"
        },
        "index": {
          "description": "See getTerminalAttributes",
          "hierarchy": "System Posix Pty",
          "module": "System.Posix.Pty",
          "name": "getTerminalAttributes",
          "normalized": "Pty-\u003eIO TerminalAttributes",
          "package": "posix-pty",
          "partial": "Terminal Attributes",
          "signature": "Pty-\u003eIO TerminalAttributes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/posix-pty/docs/System-Posix-Pty.html#v:getTerminalAttributes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003e\u003ca\u003egetTerminalName\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Posix.Pty",
          "name": "getTerminalName",
          "package": "posix-pty",
          "signature": "Pty -\u003e IO FilePath",
          "source": "src/System-Posix-Pty.html#getTerminalName",
          "type": "function"
        },
        "index": {
          "description": "See getTerminalName",
          "hierarchy": "System Posix Pty",
          "module": "System.Posix.Pty",
          "name": "getTerminalName",
          "normalized": "Pty-\u003eIO FilePath",
          "package": "posix-pty",
          "partial": "Terminal Name",
          "signature": "Pty-\u003eIO FilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/posix-pty/docs/System-Posix-Pty.html#v:getTerminalName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003e\u003ca\u003egetTerminalProcessGroupID\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Posix.Pty",
          "name": "getTerminalProcessGroupID",
          "package": "posix-pty",
          "signature": "Pty -\u003e IO ProcessGroupID",
          "source": "src/System-Posix-Pty.html#getTerminalProcessGroupID",
          "type": "function"
        },
        "index": {
          "description": "See getTerminalProcessGroupID",
          "hierarchy": "System Posix Pty",
          "module": "System.Posix.Pty",
          "name": "getTerminalProcessGroupID",
          "normalized": "Pty-\u003eIO ProcessGroupID",
          "package": "posix-pty",
          "partial": "Terminal Process Group ID",
          "signature": "Pty-\u003eIO ProcessGroupID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/posix-pty/docs/System-Posix-Pty.html#v:getTerminalProcessGroupID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProduces the pseudo terminal's current dimensions.\n\u003c/p\u003e",
          "module": "System.Posix.Pty",
          "name": "ptyDimensions",
          "package": "posix-pty",
          "signature": "Pty -\u003e IO (Int, Int)",
          "source": "src/System-Posix-Pty.html#ptyDimensions",
          "type": "function"
        },
        "index": {
          "description": "Produces the pseudo terminal current dimensions",
          "hierarchy": "System Posix Pty",
          "module": "System.Posix.Pty",
          "name": "ptyDimensions",
          "normalized": "Pty-\u003eIO(Int,Int)",
          "package": "posix-pty",
          "partial": "Dimensions",
          "signature": "Pty-\u003eIO(Int,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/posix-pty/docs/System-Posix-Pty.html#v:ptyDimensions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe same as \u003ccode\u003e\u003ca\u003etryReadPty\u003c/a\u003e\u003c/code\u003e, but discards any control status events.\n\u003c/p\u003e",
          "module": "System.Posix.Pty",
          "name": "readPty",
          "package": "posix-pty",
          "signature": "Pty -\u003e IO ByteString",
          "source": "src/System-Posix-Pty.html#readPty",
          "type": "function"
        },
        "index": {
          "description": "The same as tryReadPty but discards any control status events",
          "hierarchy": "System Posix Pty",
          "module": "System.Posix.Pty",
          "name": "readPty",
          "normalized": "Pty-\u003eIO ByteString",
          "package": "posix-pty",
          "partial": "Pty",
          "signature": "Pty-\u003eIO ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/posix-pty/docs/System-Posix-Pty.html#v:readPty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the pseudo terminal's dimensions to the specified width and height.\n\u003c/p\u003e",
          "module": "System.Posix.Pty",
          "name": "resizePty",
          "package": "posix-pty",
          "signature": "Pty -\u003e (Int, Int) -\u003e IO ()",
          "source": "src/System-Posix-Pty.html#resizePty",
          "type": "function"
        },
        "index": {
          "description": "Set the pseudo terminal dimensions to the specified width and height",
          "hierarchy": "System Posix Pty",
          "module": "System.Posix.Pty",
          "name": "resizePty",
          "normalized": "Pty-\u003e(Int,Int)-\u003eIO()",
          "package": "posix-pty",
          "partial": "Pty",
          "signature": "Pty-\u003e(Int,Int)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/posix-pty/docs/System-Posix-Pty.html#v:resizePty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003e\u003ca\u003esendBreak\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Posix.Pty",
          "name": "sendBreak",
          "package": "posix-pty",
          "signature": "Pty -\u003e Int -\u003e IO ()",
          "source": "src/System-Posix-Pty.html#sendBreak",
          "type": "function"
        },
        "index": {
          "description": "See sendBreak",
          "hierarchy": "System Posix Pty",
          "module": "System.Posix.Pty",
          "name": "sendBreak",
          "normalized": "Pty-\u003eInt-\u003eIO()",
          "package": "posix-pty",
          "partial": "Break",
          "signature": "Pty-\u003eInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/posix-pty/docs/System-Posix-Pty.html#v:sendBreak"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003e\u003ca\u003esetTerminalAttributes\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Posix.Pty",
          "name": "setTerminalAttributes",
          "package": "posix-pty",
          "signature": "Pty -\u003e TerminalAttributes -\u003e TerminalState -\u003e IO ()",
          "source": "src/System-Posix-Pty.html#setTerminalAttributes",
          "type": "function"
        },
        "index": {
          "description": "See setTerminalAttributes",
          "hierarchy": "System Posix Pty",
          "module": "System.Posix.Pty",
          "name": "setTerminalAttributes",
          "normalized": "Pty-\u003eTerminalAttributes-\u003eTerminalState-\u003eIO()",
          "package": "posix-pty",
          "partial": "Terminal Attributes",
          "signature": "Pty-\u003eTerminalAttributes-\u003eTerminalState-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/posix-pty/docs/System-Posix-Pty.html#v:setTerminalAttributes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new process that is connected to the current process through a\n pseudo terminal. If an environment is specified, then only the specified\n environment variables will be set. If no environment is specified the\n process will inherit its environment from the current process. Example:\n\u003c/p\u003e\u003cpre\u003e pty \u003c- spawnWithPty (Just [(\"SHELL\", \"tcsh\")]) True \"ls\" [\"-l\"] (20, 10)\n\u003c/pre\u003e\u003cp\u003eThis searches the user's PATH for a binary called \u003ccode\u003els\u003c/code\u003e, then runs this\n binary with the commandline argument \u003ccode\u003e-l\u003c/code\u003e in a terminal that is 20\n characters wide and 10 characters high. The environment of \u003ccode\u003els\u003c/code\u003e will\n contains one variable, SHELL, which will be set to the value \"tcsh\".\n\u003c/p\u003e",
          "module": "System.Posix.Pty",
          "name": "spawnWithPty",
          "package": "posix-pty",
          "signature": "Maybe [(String, String)]-\u003e Bool-\u003e FilePath-\u003e [String]-\u003e (Int, Int)-\u003e IO Pty",
          "type": "function"
        },
        "index": {
          "description": "Create new process that is connected to the current process through pseudo terminal If an environment is specified then only the specified environment variables will be set If no environment is specified the process will inherit its environment from the current process Example pty spawnWithPty Just SHELL tcsh True ls This searches the user PATH for binary called ls then runs this binary with the commandline argument in terminal that is characters wide and characters high The environment of ls will contains one variable SHELL which will be set to the value tcsh",
          "hierarchy": "System Posix Pty",
          "module": "System.Posix.Pty",
          "name": "spawnWithPty",
          "normalized": "Maybe[(String,String)]-\u003eBool-\u003eFilePath-\u003e[String]-\u003e(Int,Int)-\u003eIO Pty",
          "package": "posix-pty",
          "partial": "With Pty",
          "signature": "Maybe[(String,String)]-\u003eBool-\u003eFilePath-\u003e[String]-\u003e(Int,Int)-\u003eIO Pty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/posix-pty/docs/System-Posix-Pty.html#v:spawnWithPty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAttempt to read data from a pseudo terminal. Produces either the data read\n or a list of \u003ccode\u003e\u003ca\u003ePtyControlCode\u003c/a\u003e\u003c/code\u003e\u003ccode\u003es\u003c/code\u003e indicating which control status events that\n have happened on the slave terminal.\n\u003c/p\u003e\u003cp\u003eThrows an \u003ccode\u003e\u003ca\u003eIOError\u003c/a\u003e\u003c/code\u003e of type \u003ccode\u003e\u003ca\u003eeofErrorType\u003c/a\u003e\u003c/code\u003e when the terminal has been\n closed, for example when the subprocess has terminated.\n\u003c/p\u003e",
          "module": "System.Posix.Pty",
          "name": "tryReadPty",
          "package": "posix-pty",
          "signature": "Pty -\u003e IO (Either [PtyControlCode] ByteString)",
          "source": "src/System-Posix-Pty.html#tryReadPty",
          "type": "function"
        },
        "index": {
          "description": "Attempt to read data from pseudo terminal Produces either the data read or list of PtyControlCode indicating which control status events that have happened on the slave terminal Throws an IOError of type eofErrorType when the terminal has been closed for example when the subprocess has terminated",
          "hierarchy": "System Posix Pty",
          "module": "System.Posix.Pty",
          "name": "tryReadPty",
          "normalized": "Pty-\u003eIO(Either[PtyControlCode]ByteString)",
          "package": "posix-pty",
          "partial": "Read Pty",
          "signature": "Pty-\u003eIO(Either[PtyControlCode]ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/posix-pty/docs/System-Posix-Pty.html#v:tryReadPty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e to the pseudo terminal, throws an \u003ccode\u003e\u003ca\u003eIOError\u003c/a\u003e\u003c/code\u003e when the\n terminal has been closed, for example when the subprocess has terminated.\n\u003c/p\u003e",
          "module": "System.Posix.Pty",
          "name": "writePty",
          "package": "posix-pty",
          "signature": "Pty -\u003e ByteString -\u003e IO ()",
          "source": "src/System-Posix-Pty.html#writePty",
          "type": "function"
        },
        "index": {
          "description": "Write ByteString to the pseudo terminal throws an IOError when the terminal has been closed for example when the subprocess has terminated",
          "hierarchy": "System Posix Pty",
          "module": "System.Posix.Pty",
          "name": "writePty",
          "normalized": "Pty-\u003eByteString-\u003eIO()",
          "package": "posix-pty",
          "partial": "Pty",
          "signature": "Pty-\u003eByteString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/posix-pty/docs/System-Posix-Pty.html#v:writePty"
      }
    }
  ]
]