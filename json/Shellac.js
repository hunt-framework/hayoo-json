[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Shellac/docs/System-Console-Shell-Backend-Basic.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module implements a simple Shellac backend that uses only\n   the primitives from \"System.IO\".  It provides no history or\n   command completion capabilities.  You get whatever line editing\n   capabilities \u003ccode\u003e\u003ca\u003ehGetLine\u003c/a\u003e\u003c/code\u003e has and that's it.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.Console.Shell.Backend.Basic",
        "fct-package": "Shellac",
        "fct-signature": "module",
        "fct-source": "src/System-Console-Shell-Backend-Basic.html",
        "fct-type": "module",
        "title": "Basic"
      },
      "index": {
        "description": "This module implements simple Shellac backend that uses only the primitives from System.IO It provides no history or command completion capabilities You get whatever line editing capabilities hGetLine has and that it",
        "hierarchy": "System Console Shell Backend Basic",
        "module": "System.Console.Shell.Backend.Basic",
        "name": "Basic",
        "normalized": "",
        "package": "Shellac",
        "partial": "Basic",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Shellac/docs/System-Console-Shell-Backend-Basic.html#v:basicBackend",
      "description": {
        "fct-module": "System.Console.Shell.Backend.Basic",
        "fct-package": "Shellac",
        "fct-signature": "ShellBackend ()",
        "fct-source": "src/System-Console-Shell-Backend-Basic.html#basicBackend",
        "fct-type": "function",
        "title": "basicBackend"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Shell Backend Basic",
        "module": "System.Console.Shell.Backend.Basic",
        "name": "basicBackend",
        "normalized": "ShellBackend()",
        "package": "Shellac",
        "partial": "Backend",
        "signature": "ShellBackend()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Shellac/docs/System-Console-Shell-Backend.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines the Shellac interface for shell backends.  A shell backend\n   is required to provide sensible implementations for \u003ccode\u003e\u003ca\u003eoutputString\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eflushOutput\u003c/a\u003e\u003c/code\u003e,\n   \u003ccode\u003e\u003ca\u003egetSingleChar\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003egetInput\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003egetWordBreakChars\u003c/a\u003e\u003c/code\u003e.  All other operations may \n   be noops (however, they must not denote bottom!).\n\u003c/p\u003e\u003cp\u003eThis module is intended for use by backend implementers.  It is not intended to\n   be used by regular clients of the library.  The Shellac package provides a\n   basic backend (\u003ca\u003eSystem.Console.Shell.Backend.Basic\u003c/a\u003e).  More advanced backends\n   are available in separate packages.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.Console.Shell.Backend",
        "fct-package": "Shellac",
        "fct-signature": "module",
        "fct-source": "src/System-Console-Shell-Backend.html",
        "fct-type": "module",
        "title": "Backend"
      },
      "index": {
        "description": "This module defines the Shellac interface for shell backends shell backend is required to provide sensible implementations for outputString flushOutput getSingleChar getInput and getWordBreakChars All other operations may be noops however they must not denote bottom This module is intended for use by backend implementers It is not intended to be used by regular clients of the library The Shellac package provides basic backend System.Console.Shell.Backend.Basic More advanced backends are available in separate packages",
        "hierarchy": "System Console Shell Backend",
        "module": "System.Console.Shell.Backend",
        "name": "Backend",
        "normalized": "",
        "package": "Shellac",
        "partial": "Backend",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Shellac/docs/System-Console-Shell-Backend.html#t:BackendOutput",
      "description": {
        "fct-descr": "\u003cp\u003eA datatype representing ouput to be printed.  The different categories of\n   output are distinguished to that shell backends can, for example, apply\n   different colors or send output to different places (stderr versus stdout).\n\u003c/p\u003e",
        "fct-module": "System.Console.Shell.Backend",
        "fct-package": "Shellac",
        "fct-signature": "data",
        "fct-source": "src/System-Console-Shell-Backend.html#BackendOutput",
        "fct-type": "data",
        "title": "BackendOutput"
      },
      "index": {
        "description": "datatype representing ouput to be printed The different categories of output are distinguished to that shell backends can for example apply different colors or send output to different places stderr versus stdout",
        "hierarchy": "System Console Shell Backend",
        "module": "System.Console.Shell.Backend",
        "name": "BackendOutput",
        "normalized": "",
        "package": "Shellac",
        "partial": "Backend Output",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Shellac/docs/System-Console-Shell-Backend.html#t:CompletionFunction",
      "description": {
        "fct-descr": "\u003cp\u003eThe type of completion functions.  The argument is a triple\n   consisting of (before,word,after), where 'word' is a string\n   of non-word-break characters which contains the cursor position.\n   'before' is all characters on the line before 'word' and 'after'\n   is all characters on the line after word.  The return value should\n   be 'Nothing' if no completions can be generated, or\n   'Just (newWord,completions)' if completions can be generated.  'newWord'\n   is a new string to replace 'word' on the command line and 'completions'\n   is a list of all possible completions of 'word'.  To achieve the standard\n   \"complete-as-far-as-possible\" behavior, 'newWord' should be the longest common\n   prefix of all words in 'completions'.\n\u003c/p\u003e",
        "fct-module": "System.Console.Shell.Backend",
        "fct-package": "Shellac",
        "fct-signature": "type",
        "fct-source": "src/System-Console-Shell-Backend.html#CompletionFunction",
        "fct-type": "type",
        "title": "CompletionFunction"
      },
      "index": {
        "description": "The type of completion functions The argument is triple consisting of before word after where word is string of non-word-break characters which contains the cursor position before is all characters on the line before word and after is all characters on the line after word The return value should be Nothing if no completions can be generated or Just newWord completions if completions can be generated newWord is new string to replace word on the command line and completions is list of all possible completions of word To achieve the standard complete-as-far-as-possible behavior newWord should be the longest common prefix of all words in completions",
        "hierarchy": "System Console Shell Backend",
        "module": "System.Console.Shell.Backend",
        "name": "CompletionFunction",
        "normalized": "",
        "package": "Shellac",
        "partial": "Completion Function",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Shellac/docs/System-Console-Shell-Backend.html#t:ShellBackend",
      "description": {
        "fct-descr": "\u003cp\u003eThis record type contains all the functions that Shellac allows the pluggable\n   backend to provide.  Most of these operations are optional and relate to\n   advanced features like command completion and history.  However, a shell backend\n   is required to provide sensible implementations for \u003ccode\u003e\u003ca\u003eoutputString\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eflushOutput\u003c/a\u003e\u003c/code\u003e,\n   \u003ccode\u003e\u003ca\u003egetSingleChar\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003egetInput\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003egetWordBreakChars\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Console.Shell.Backend",
        "fct-package": "Shellac",
        "fct-signature": "data",
        "fct-source": "src/System-Console-Shell-Backend.html#ShellBackend",
        "fct-type": "data",
        "title": "ShellBackend"
      },
      "index": {
        "description": "This record type contains all the functions that Shellac allows the pluggable backend to provide Most of these operations are optional and relate to advanced features like command completion and history However shell backend is required to provide sensible implementations for outputString flushOutput getSingleChar getInput and getWordBreakChars",
        "hierarchy": "System Console Shell Backend",
        "module": "System.Console.Shell.Backend",
        "name": "ShellBackend",
        "normalized": "",
        "package": "Shellac",
        "partial": "Shell Backend",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Shellac/docs/System-Console-Shell-Backend.html#v:ErrorOutput",
      "description": {
        "fct-descr": "\u003cp\u003eAn string generated by an error\n\u003c/p\u003e",
        "fct-module": "System.Console.Shell.Backend",
        "fct-package": "Shellac",
        "fct-signature": "ErrorOutput String",
        "fct-source": "src/System-Console-Shell-Backend.html#BackendOutput",
        "fct-type": "function",
        "title": "ErrorOutput"
      },
      "index": {
        "description": "An string generated by an error",
        "hierarchy": "System Console Shell Backend",
        "module": "System.Console.Shell.Backend",
        "name": "ErrorOutput",
        "normalized": "",
        "package": "Shellac",
        "partial": "Error Output",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Shellac/docs/System-Console-Shell-Backend.html#v:InfoOutput",
      "description": {
        "fct-descr": "\u003cp\u003eAn informative output string, such as command help\n\u003c/p\u003e",
        "fct-module": "System.Console.Shell.Backend",
        "fct-package": "Shellac",
        "fct-signature": "InfoOutput String",
        "fct-source": "src/System-Console-Shell-Backend.html#BackendOutput",
        "fct-type": "function",
        "title": "InfoOutput"
      },
      "index": {
        "description": "An informative output string such as command help",
        "hierarchy": "System Console Shell Backend",
        "module": "System.Console.Shell.Backend",
        "name": "InfoOutput",
        "normalized": "",
        "package": "Shellac",
        "partial": "Info Output",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Shellac/docs/System-Console-Shell-Backend.html#v:RegularOutput",
      "description": {
        "fct-descr": "\u003cp\u003eThe most regular way to produce output\n\u003c/p\u003e",
        "fct-module": "System.Console.Shell.Backend",
        "fct-package": "Shellac",
        "fct-signature": "RegularOutput String",
        "fct-source": "src/System-Console-Shell-Backend.html#BackendOutput",
        "fct-type": "function",
        "title": "RegularOutput"
      },
      "index": {
        "description": "The most regular way to produce output",
        "hierarchy": "System Console Shell Backend",
        "module": "System.Console.Shell.Backend",
        "name": "RegularOutput",
        "normalized": "",
        "package": "Shellac",
        "partial": "Regular Output",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Shellac/docs/System-Console-Shell-Backend.html#v:ShBackend",
      "description": {
        "fct-module": "System.Console.Shell.Backend",
        "fct-package": "Shellac",
        "fct-signature": "ShBackend",
        "fct-source": "src/System-Console-Shell-Backend.html#ShellBackend",
        "fct-type": "function",
        "title": "ShBackend"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Shell Backend",
        "module": "System.Console.Shell.Backend",
        "name": "ShBackend",
        "normalized": "",
        "package": "Shellac",
        "partial": "Sh Backend",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Shellac/docs/System-Console-Shell-Backend.html#v:addHistory",
      "description": {
        "fct-descr": "\u003cp\u003eAdd a string to the history list.\n\u003c/p\u003e",
        "fct-module": "System.Console.Shell.Backend",
        "fct-package": "Shellac",
        "fct-signature": "bst -\u003e String -\u003e IO ()",
        "fct-source": "src/System-Console-Shell-Backend.html#ShellBackend",
        "fct-type": "function",
        "title": "addHistory"
      },
      "index": {
        "description": "Add string to the history list",
        "hierarchy": "System Console Shell Backend",
        "module": "System.Console.Shell.Backend",
        "name": "addHistory",
        "normalized": "a-\u003eString-\u003eIO()",
        "package": "Shellac",
        "partial": "History",
        "signature": "bst-\u003eString-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Shellac/docs/System-Console-Shell-Backend.html#v:clearHistoryState",
      "description": {
        "fct-descr": "\u003cp\u003eAn operation to clear the history buffer.\n\u003c/p\u003e",
        "fct-module": "System.Console.Shell.Backend",
        "fct-package": "Shellac",
        "fct-signature": "bst -\u003e IO ()",
        "fct-source": "src/System-Console-Shell-Backend.html#ShellBackend",
        "fct-type": "function",
        "title": "clearHistoryState"
      },
      "index": {
        "description": "An operation to clear the history buffer",
        "hierarchy": "System Console Shell Backend",
        "module": "System.Console.Shell.Backend",
        "name": "clearHistoryState",
        "normalized": "a-\u003eIO()",
        "package": "Shellac",
        "partial": "History State",
        "signature": "bst-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Shellac/docs/System-Console-Shell-Backend.html#v:completeFilename",
      "description": {
        "fct-descr": "\u003cp\u003eA backend-provided method to complete filenames.\n\u003c/p\u003e",
        "fct-module": "System.Console.Shell.Backend",
        "fct-package": "Shellac",
        "fct-signature": "bst -\u003e String -\u003e IO [String]",
        "fct-source": "src/System-Console-Shell-Backend.html#ShellBackend",
        "fct-type": "function",
        "title": "completeFilename"
      },
      "index": {
        "description": "backend-provided method to complete filenames",
        "hierarchy": "System Console Shell Backend",
        "module": "System.Console.Shell.Backend",
        "name": "completeFilename",
        "normalized": "a-\u003eString-\u003eIO[String]",
        "package": "Shellac",
        "partial": "Filename",
        "signature": "bst-\u003eString-\u003eIO[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Shellac/docs/System-Console-Shell-Backend.html#v:completeUsername",
      "description": {
        "fct-descr": "\u003cp\u003eA backend-provided method to complete usernames.\n\u003c/p\u003e",
        "fct-module": "System.Console.Shell.Backend",
        "fct-package": "Shellac",
        "fct-signature": "bst -\u003e String -\u003e IO [String]",
        "fct-source": "src/System-Console-Shell-Backend.html#ShellBackend",
        "fct-type": "function",
        "title": "completeUsername"
      },
      "index": {
        "description": "backend-provided method to complete usernames",
        "hierarchy": "System Console Shell Backend",
        "module": "System.Console.Shell.Backend",
        "name": "completeUsername",
        "normalized": "a-\u003eString-\u003eIO[String]",
        "package": "Shellac",
        "partial": "Username",
        "signature": "bst-\u003eString-\u003eIO[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Shellac/docs/System-Console-Shell-Backend.html#v:defaultWordBreakChars",
      "description": {
        "fct-descr": "\u003cp\u003eProvides a sane default set of characters to use when breaking\n   lines into 'words'.  If a backend does not have configurable\n   word break characters, then \u003ccode\u003egetWordBreakCharacters\u003c/code\u003e can just\n   return this default set.\n\u003c/p\u003e",
        "fct-module": "System.Console.Shell.Backend",
        "fct-package": "Shellac",
        "fct-signature": "[Char]",
        "fct-source": "src/System-Console-Shell-Backend.html#defaultWordBreakChars",
        "fct-type": "function",
        "title": "defaultWordBreakChars"
      },
      "index": {
        "description": "Provides sane default set of characters to use when breaking lines into words If backend does not have configurable word break characters then getWordBreakCharacters can just return this default set",
        "hierarchy": "System Console Shell Backend",
        "module": "System.Console.Shell.Backend",
        "name": "defaultWordBreakChars",
        "normalized": "[Char]",
        "package": "Shellac",
        "partial": "Word Break Chars",
        "signature": "[Char]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Shellac/docs/System-Console-Shell-Backend.html#v:flushOutput",
      "description": {
        "fct-descr": "\u003cp\u003ePerform any operations necessary to clear any output buffers.  After this\n   operation, the user should be able to view any output sent to this backend.\n\u003c/p\u003e",
        "fct-module": "System.Console.Shell.Backend",
        "fct-package": "Shellac",
        "fct-signature": "bst -\u003e IO ()",
        "fct-source": "src/System-Console-Shell-Backend.html#ShellBackend",
        "fct-type": "function",
        "title": "flushOutput"
      },
      "index": {
        "description": "Perform any operations necessary to clear any output buffers After this operation the user should be able to view any output sent to this backend",
        "hierarchy": "System Console Shell Backend",
        "module": "System.Console.Shell.Backend",
        "name": "flushOutput",
        "normalized": "a-\u003eIO()",
        "package": "Shellac",
        "partial": "Output",
        "signature": "bst-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Shellac/docs/System-Console-Shell-Backend.html#v:getInput",
      "description": {
        "fct-descr": "\u003cp\u003ePrint the prompt and retrieve a line of input from the user.\n\u003c/p\u003e",
        "fct-module": "System.Console.Shell.Backend",
        "fct-package": "Shellac",
        "fct-signature": "bst -\u003e String -\u003e IO (Maybe String)",
        "fct-source": "src/System-Console-Shell-Backend.html#ShellBackend",
        "fct-type": "function",
        "title": "getInput"
      },
      "index": {
        "description": "Print the prompt and retrieve line of input from the user",
        "hierarchy": "System Console Shell Backend",
        "module": "System.Console.Shell.Backend",
        "name": "getInput",
        "normalized": "a-\u003eString-\u003eIO(Maybe String)",
        "package": "Shellac",
        "partial": "Input",
        "signature": "bst-\u003eString-\u003eIO(Maybe String)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Shellac/docs/System-Console-Shell-Backend.html#v:getMaxHistoryEntries",
      "description": {
        "fct-descr": "\u003cp\u003eGets the maximum number of entries managed by the history buffer.\n\u003c/p\u003e",
        "fct-module": "System.Console.Shell.Backend",
        "fct-package": "Shellac",
        "fct-signature": "bst -\u003e IO Int",
        "fct-source": "src/System-Console-Shell-Backend.html#ShellBackend",
        "fct-type": "function",
        "title": "getMaxHistoryEntries"
      },
      "index": {
        "description": "Gets the maximum number of entries managed by the history buffer",
        "hierarchy": "System Console Shell Backend",
        "module": "System.Console.Shell.Backend",
        "name": "getMaxHistoryEntries",
        "normalized": "a-\u003eIO Int",
        "package": "Shellac",
        "partial": "Max History Entries",
        "signature": "bst-\u003eIO Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Shellac/docs/System-Console-Shell-Backend.html#v:getSingleChar",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieve a single character from the user without waiting for carriage return.\n\u003c/p\u003e",
        "fct-module": "System.Console.Shell.Backend",
        "fct-package": "Shellac",
        "fct-signature": "bst -\u003e String -\u003e IO (Maybe Char)",
        "fct-source": "src/System-Console-Shell-Backend.html#ShellBackend",
        "fct-type": "function",
        "title": "getSingleChar"
      },
      "index": {
        "description": "Retrieve single character from the user without waiting for carriage return",
        "hierarchy": "System Console Shell Backend",
        "module": "System.Console.Shell.Backend",
        "name": "getSingleChar",
        "normalized": "a-\u003eString-\u003eIO(Maybe Char)",
        "package": "Shellac",
        "partial": "Single Char",
        "signature": "bst-\u003eString-\u003eIO(Maybe Char)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Shellac/docs/System-Console-Shell-Backend.html#v:getWordBreakChars",
      "description": {
        "fct-descr": "\u003cp\u003eGet the current set of word break characters.\n\u003c/p\u003e",
        "fct-module": "System.Console.Shell.Backend",
        "fct-package": "Shellac",
        "fct-signature": "bst -\u003e IO String",
        "fct-source": "src/System-Console-Shell-Backend.html#ShellBackend",
        "fct-type": "function",
        "title": "getWordBreakChars"
      },
      "index": {
        "description": "Get the current set of word break characters",
        "hierarchy": "System Console Shell Backend",
        "module": "System.Console.Shell.Backend",
        "name": "getWordBreakChars",
        "normalized": "a-\u003eIO String",
        "package": "Shellac",
        "partial": "Word Break Chars",
        "signature": "bst-\u003eIO String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Shellac/docs/System-Console-Shell-Backend.html#v:initBackend",
      "description": {
        "fct-descr": "\u003cp\u003eProvides the backend a way to perform any necessary initialization\n   before the shell starts.  This function is called once for each\n   shell instance.  The generated value will be passed back in to each call of the\n   other methods in this record.\n\u003c/p\u003e",
        "fct-module": "System.Console.Shell.Backend",
        "fct-package": "Shellac",
        "fct-signature": "IO bst",
        "fct-source": "src/System-Console-Shell-Backend.html#ShellBackend",
        "fct-type": "function",
        "title": "initBackend"
      },
      "index": {
        "description": "Provides the backend way to perform any necessary initialization before the shell starts This function is called once for each shell instance The generated value will be passed back in to each call of the other methods in this record",
        "hierarchy": "System Console Shell Backend",
        "module": "System.Console.Shell.Backend",
        "name": "initBackend",
        "normalized": "",
        "package": "Shellac",
        "partial": "Backend",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Shellac/docs/System-Console-Shell-Backend.html#v:onCancel",
      "description": {
        "fct-descr": "\u003cp\u003eA callback to run whenever evaluation or a command is canceled\n   by the keyboard signal\n\u003c/p\u003e",
        "fct-module": "System.Console.Shell.Backend",
        "fct-package": "Shellac",
        "fct-signature": "bst -\u003e IO ()",
        "fct-source": "src/System-Console-Shell-Backend.html#ShellBackend",
        "fct-type": "function",
        "title": "onCancel"
      },
      "index": {
        "description": "callback to run whenever evaluation or command is canceled by the keyboard signal",
        "hierarchy": "System Console Shell Backend",
        "module": "System.Console.Shell.Backend",
        "name": "onCancel",
        "normalized": "a-\u003eIO()",
        "package": "Shellac",
        "partial": "Cancel",
        "signature": "bst-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Shellac/docs/System-Console-Shell-Backend.html#v:outputString",
      "description": {
        "fct-descr": "\u003cp\u003eCauses the string to be sent to the underlying console device.\n\u003c/p\u003e",
        "fct-module": "System.Console.Shell.Backend",
        "fct-package": "Shellac",
        "fct-signature": "bst -\u003e BackendOutput -\u003e IO ()",
        "fct-source": "src/System-Console-Shell-Backend.html#ShellBackend",
        "fct-type": "function",
        "title": "outputString"
      },
      "index": {
        "description": "Causes the string to be sent to the underlying console device",
        "hierarchy": "System Console Shell Backend",
        "module": "System.Console.Shell.Backend",
        "name": "outputString",
        "normalized": "a-\u003eBackendOutput-\u003eIO()",
        "package": "Shellac",
        "partial": "String",
        "signature": "bst-\u003eBackendOutput-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Shellac/docs/System-Console-Shell-Backend.html#v:readHistory",
      "description": {
        "fct-descr": "\u003cp\u003eRead the history buffer from a file.  The file should be formatted\n   as plain-text, with each line in the file representing a single command\n   entered, most recent commands at the bottom. (This format is what readline\n   produces)\n\u003c/p\u003e",
        "fct-module": "System.Console.Shell.Backend",
        "fct-package": "Shellac",
        "fct-signature": "bst -\u003e FilePath -\u003e IO ()",
        "fct-source": "src/System-Console-Shell-Backend.html#ShellBackend",
        "fct-type": "function",
        "title": "readHistory"
      },
      "index": {
        "description": "Read the history buffer from file The file should be formatted as plain-text with each line in the file representing single command entered most recent commands at the bottom This format is what readline produces",
        "hierarchy": "System Console Shell Backend",
        "module": "System.Console.Shell.Backend",
        "name": "readHistory",
        "normalized": "a-\u003eFilePath-\u003eIO()",
        "package": "Shellac",
        "partial": "History",
        "signature": "bst-\u003eFilePath-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Shellac/docs/System-Console-Shell-Backend.html#v:setAttemptedCompletionFunction",
      "description": {
        "fct-descr": "\u003cp\u003eA completion function that is tried first.\n\u003c/p\u003e",
        "fct-module": "System.Console.Shell.Backend",
        "fct-package": "Shellac",
        "fct-signature": "bst -\u003e CompletionFunction -\u003e IO ()",
        "fct-source": "src/System-Console-Shell-Backend.html#ShellBackend",
        "fct-type": "function",
        "title": "setAttemptedCompletionFunction"
      },
      "index": {
        "description": "completion function that is tried first",
        "hierarchy": "System Console Shell Backend",
        "module": "System.Console.Shell.Backend",
        "name": "setAttemptedCompletionFunction",
        "normalized": "a-\u003eCompletionFunction-\u003eIO()",
        "package": "Shellac",
        "partial": "Attempted Completion Function",
        "signature": "bst-\u003eCompletionFunction-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Shellac/docs/System-Console-Shell-Backend.html#v:setDefaultCompletionFunction",
      "description": {
        "fct-descr": "\u003cp\u003eAn alternate function to generate completions.  The function given takes the\n   word as an argument and generates all possible completions.  This function is called\n   (if set) after the attemptedCompletionFunction if it returns 'Nothing'.\n\u003c/p\u003e",
        "fct-module": "System.Console.Shell.Backend",
        "fct-package": "Shellac",
        "fct-signature": "bst -\u003e Maybe (String -\u003e IO [String]) -\u003e IO ()",
        "fct-source": "src/System-Console-Shell-Backend.html#ShellBackend",
        "fct-type": "function",
        "title": "setDefaultCompletionFunction"
      },
      "index": {
        "description": "An alternate function to generate completions The function given takes the word as an argument and generates all possible completions This function is called if set after the attemptedCompletionFunction if it returns Nothing",
        "hierarchy": "System Console Shell Backend",
        "module": "System.Console.Shell.Backend",
        "name": "setDefaultCompletionFunction",
        "normalized": "a-\u003eMaybe(String-\u003eIO[String])-\u003eIO()",
        "package": "Shellac",
        "partial": "Default Completion Function",
        "signature": "bst-\u003eMaybe(String-\u003eIO[String])-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Shellac/docs/System-Console-Shell-Backend.html#v:setMaxHistoryEntries",
      "description": {
        "fct-descr": "\u003cp\u003eSets the maximum number of entries managed by the history buffer.\n\u003c/p\u003e",
        "fct-module": "System.Console.Shell.Backend",
        "fct-package": "Shellac",
        "fct-signature": "bst -\u003e Int -\u003e IO ()",
        "fct-source": "src/System-Console-Shell-Backend.html#ShellBackend",
        "fct-type": "function",
        "title": "setMaxHistoryEntries"
      },
      "index": {
        "description": "Sets the maximum number of entries managed by the history buffer",
        "hierarchy": "System Console Shell Backend",
        "module": "System.Console.Shell.Backend",
        "name": "setMaxHistoryEntries",
        "normalized": "a-\u003eInt-\u003eIO()",
        "package": "Shellac",
        "partial": "Max History Entries",
        "signature": "bst-\u003eInt-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Shellac/docs/System-Console-Shell-Backend.html#v:setWordBreakChars",
      "description": {
        "fct-descr": "\u003cp\u003eSet the characters which define word boundaries.  This is mostly used\n   for defining where completions occur.\n\u003c/p\u003e",
        "fct-module": "System.Console.Shell.Backend",
        "fct-package": "Shellac",
        "fct-signature": "bst -\u003e String -\u003e IO ()",
        "fct-source": "src/System-Console-Shell-Backend.html#ShellBackend",
        "fct-type": "function",
        "title": "setWordBreakChars"
      },
      "index": {
        "description": "Set the characters which define word boundaries This is mostly used for defining where completions occur",
        "hierarchy": "System Console Shell Backend",
        "module": "System.Console.Shell.Backend",
        "name": "setWordBreakChars",
        "normalized": "a-\u003eString-\u003eIO()",
        "package": "Shellac",
        "partial": "Word Break Chars",
        "signature": "bst-\u003eString-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Shellac/docs/System-Console-Shell-Backend.html#v:shutdownBackend",
      "description": {
        "fct-descr": "\u003cp\u003eCalled when the shell exits to allow the backend to perform any necessary\n   cleanup actions.\n\u003c/p\u003e",
        "fct-module": "System.Console.Shell.Backend",
        "fct-package": "Shellac",
        "fct-signature": "bst -\u003e IO ()",
        "fct-source": "src/System-Console-Shell-Backend.html#ShellBackend",
        "fct-type": "function",
        "title": "shutdownBackend"
      },
      "index": {
        "description": "Called when the shell exits to allow the backend to perform any necessary cleanup actions",
        "hierarchy": "System Console Shell Backend",
        "module": "System.Console.Shell.Backend",
        "name": "shutdownBackend",
        "normalized": "a-\u003eIO()",
        "package": "Shellac",
        "partial": "Backend",
        "signature": "bst-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Shellac/docs/System-Console-Shell-Backend.html#v:templateBackend",
      "description": {
        "fct-descr": "\u003cp\u003eThis backend template is useful for defining custom backends.\n   The idea is that you will use \u003ccode\u003e\u003ca\u003etemplateBackend\u003c/a\u003e\u003c/code\u003e to generate a\n   bare-bones backend implemenation and only fill in the methods\n   that you wish to define using the record update syntax.\n   The parameter to \u003ccode\u003e\u003ca\u003etemplateBackend\u003c/a\u003e\u003c/code\u003e\n   becomes the backend state associated with the backend and is\n   passed into to each of the operation methods.\n\u003c/p\u003e",
        "fct-module": "System.Console.Shell.Backend",
        "fct-package": "Shellac",
        "fct-signature": "a -\u003e ShellBackend a",
        "fct-source": "src/System-Console-Shell-Backend.html#templateBackend",
        "fct-type": "function",
        "title": "templateBackend"
      },
      "index": {
        "description": "This backend template is useful for defining custom backends The idea is that you will use templateBackend to generate bare-bones backend implemenation and only fill in the methods that you wish to define using the record update syntax The parameter to templateBackend becomes the backend state associated with the backend and is passed into to each of the operation methods",
        "hierarchy": "System Console Shell Backend",
        "module": "System.Console.Shell.Backend",
        "name": "templateBackend",
        "normalized": "a-\u003eShellBackend a",
        "package": "Shellac",
        "partial": "Backend",
        "signature": "a-\u003eShellBackend a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Shellac/docs/System-Console-Shell-Backend.html#v:writeHistory",
      "description": {
        "fct-descr": "\u003cp\u003eWrite the history buffer to a file.  The file should be formatted in the\n   same way as in the description for \u003ccode\u003e\u003ca\u003ereadHistory\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Console.Shell.Backend",
        "fct-package": "Shellac",
        "fct-signature": "bst -\u003e FilePath -\u003e IO ()",
        "fct-source": "src/System-Console-Shell-Backend.html#ShellBackend",
        "fct-type": "function",
        "title": "writeHistory"
      },
      "index": {
        "description": "Write the history buffer to file The file should be formatted in the same way as in the description for readHistory",
        "hierarchy": "System Console Shell Backend",
        "module": "System.Console.Shell.Backend",
        "name": "writeHistory",
        "normalized": "a-\u003eFilePath-\u003eIO()",
        "package": "Shellac",
        "partial": "History",
        "signature": "bst-\u003eFilePath-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Shellac/docs/System-Console-Shell-ShellMonad.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module implements a monad for use in shell commands and in\n   evaluation functions.  It is a state moand layered over \u003ccode\u003eIO\u003c/code\u003e.\n   \u003ccode\u003eliftIO\u003c/code\u003e may be used to execute arbitrary I/O actions.  However,\n   the \u003ccode\u003eshellPut\u003c/code\u003e* commands are the preferred way to output text.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.Console.Shell.ShellMonad",
        "fct-package": "Shellac",
        "fct-signature": "module",
        "fct-source": "src/System-Console-Shell-ShellMonad.html",
        "fct-type": "module",
        "title": "ShellMonad"
      },
      "index": {
        "description": "This module implements monad for use in shell commands and in evaluation functions It is state moand layered over IO liftIO may be used to execute arbitrary actions However the shellPut commands are the preferred way to output text",
        "hierarchy": "System Console Shell ShellMonad",
        "module": "System.Console.Shell.ShellMonad",
        "name": "ShellMonad",
        "normalized": "",
        "package": "Shellac",
        "partial": "Shell Monad",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Shellac/docs/System-Console-Shell-ShellMonad.html#t:Sh",
      "description": {
        "fct-descr": "\u003cp\u003eThe type of shell commands.  This monad is a state monad layered over \u003ccode\u003eIO\u003c/code\u003e.\n   The type parameter \u003ccode\u003est\u003c/code\u003e allows the monad to carry around a package of\n   user-defined state.\n\u003c/p\u003e",
        "fct-module": "System.Console.Shell.ShellMonad",
        "fct-package": "Shellac",
        "fct-signature": "data",
        "fct-source": "src/System-Console-Shell-Types.html#Sh",
        "fct-type": "data",
        "title": "Sh"
      },
      "index": {
        "description": "The type of shell commands This monad is state monad layered over IO The type parameter st allows the monad to carry around package of user-defined state",
        "hierarchy": "System Console Shell ShellMonad",
        "module": "System.Console.Shell.ShellMonad",
        "name": "Sh",
        "normalized": "",
        "package": "Shellac",
        "partial": "Sh",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Shellac/docs/System-Console-Shell-ShellMonad.html#t:ShellContext",
      "description": {
        "fct-descr": "\u003cp\u003eThe total context held by the shell, with \u003ccode\u003e\u003ccode\u003e\u003ca\u003eCommandResult\u003c/a\u003e\u003c/code\u003e st\u003c/code\u003e\n   being mutable and \u003ccode\u003e\u003ca\u003eOutputCommand\u003c/a\u003e\u003c/code\u003e immutable\n\u003c/p\u003e",
        "fct-module": "System.Console.Shell.ShellMonad",
        "fct-package": "Shellac",
        "fct-signature": "type",
        "fct-source": "src/System-Console-Shell-ShellMonad.html#ShellContext",
        "fct-type": "type",
        "title": "ShellContext"
      },
      "index": {
        "description": "The total context held by the shell with CommandResult st being mutable and OutputCommand immutable",
        "hierarchy": "System Console Shell ShellMonad",
        "module": "System.Console.Shell.ShellMonad",
        "name": "ShellContext",
        "normalized": "",
        "package": "Shellac",
        "partial": "Shell Context",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Shellac/docs/System-Console-Shell-ShellMonad.html#v:extractContext",
      "description": {
        "fct-descr": "\u003cp\u003eExtract the current shell context for future use, see \u003ccode\u003e\u003ca\u003erunWithContext\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "System.Console.Shell.ShellMonad",
        "fct-package": "Shellac",
        "fct-signature": "Sh st (ShellContext st)",
        "fct-source": "src/System-Console-Shell-ShellMonad.html#extractContext",
        "fct-type": "function",
        "title": "extractContext"
      },
      "index": {
        "description": "Extract the current shell context for future use see runWithContext",
        "hierarchy": "System Console Shell ShellMonad",
        "module": "System.Console.Shell.ShellMonad",
        "name": "extractContext",
        "normalized": "",
        "package": "Shellac",
        "partial": "Context",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Shellac/docs/System-Console-Shell-ShellMonad.html#v:getShellSt",
      "description": {
        "fct-descr": "\u003cp\u003eGet the current shell state\n\u003c/p\u003e",
        "fct-module": "System.Console.Shell.ShellMonad",
        "fct-package": "Shellac",
        "fct-signature": "Sh st st",
        "fct-source": "src/System-Console-Shell-ShellMonad.html#getShellSt",
        "fct-type": "function",
        "title": "getShellSt"
      },
      "index": {
        "description": "Get the current shell state",
        "hierarchy": "System Console Shell ShellMonad",
        "module": "System.Console.Shell.ShellMonad",
        "name": "getShellSt",
        "normalized": "",
        "package": "Shellac",
        "partial": "Shell St",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Shellac/docs/System-Console-Shell-ShellMonad.html#v:modifyShellSt",
      "description": {
        "fct-descr": "\u003cp\u003eApply the given funtion to the shell state\n\u003c/p\u003e",
        "fct-module": "System.Console.Shell.ShellMonad",
        "fct-package": "Shellac",
        "fct-signature": "(st -\u003e st) -\u003e Sh st ()",
        "fct-source": "src/System-Console-Shell-ShellMonad.html#modifyShellSt",
        "fct-type": "function",
        "title": "modifyShellSt"
      },
      "index": {
        "description": "Apply the given funtion to the shell state",
        "hierarchy": "System Console Shell ShellMonad",
        "module": "System.Console.Shell.ShellMonad",
        "name": "modifyShellSt",
        "normalized": "(a-\u003ea)-\u003eSh a()",
        "package": "Shellac",
        "partial": "Shell St",
        "signature": "(st-\u003est)-\u003eSh st()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Shellac/docs/System-Console-Shell-ShellMonad.html#v:putShellSt",
      "description": {
        "fct-descr": "\u003cp\u003eSet the shell state\n\u003c/p\u003e",
        "fct-module": "System.Console.Shell.ShellMonad",
        "fct-package": "Shellac",
        "fct-signature": "st -\u003e Sh st ()",
        "fct-source": "src/System-Console-Shell-ShellMonad.html#putShellSt",
        "fct-type": "function",
        "title": "putShellSt"
      },
      "index": {
        "description": "Set the shell state",
        "hierarchy": "System Console Shell ShellMonad",
        "module": "System.Console.Shell.ShellMonad",
        "name": "putShellSt",
        "normalized": "a-\u003eSh a()",
        "package": "Shellac",
        "partial": "Shell St",
        "signature": "st-\u003eSh st()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Shellac/docs/System-Console-Shell-ShellMonad.html#v:runSh",
      "description": {
        "fct-descr": "\u003cp\u003eExecute a shell action\n\u003c/p\u003e",
        "fct-module": "System.Console.Shell.ShellMonad",
        "fct-package": "Shellac",
        "fct-signature": "st -\u003e OutputCommand -\u003e Sh st () -\u003e IO (CommandResult st)",
        "fct-source": "src/System-Console-Shell-ShellMonad.html#runSh",
        "fct-type": "function",
        "title": "runSh"
      },
      "index": {
        "description": "Execute shell action",
        "hierarchy": "System Console Shell ShellMonad",
        "module": "System.Console.Shell.ShellMonad",
        "name": "runSh",
        "normalized": "a-\u003eOutputCommand-\u003eSh a()-\u003eIO(CommandResult a)",
        "package": "Shellac",
        "partial": "Sh",
        "signature": "st-\u003eOutputCommand-\u003eSh st()-\u003eIO(CommandResult st)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Shellac/docs/System-Console-Shell-ShellMonad.html#v:runWithContext",
      "description": {
        "fct-descr": "\u003cp\u003eRun a shell with the supplied context, useful if you need to\n   invoke a shell within a new IO context, for example when using\n   \u003ccode\u003eSystem.Timeout.timeout\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "System.Console.Shell.ShellMonad",
        "fct-package": "Shellac",
        "fct-signature": "ShellContext st -\u003e Sh st a -\u003e IO (a, CommandResult st)",
        "fct-source": "src/System-Console-Shell-ShellMonad.html#runWithContext",
        "fct-type": "function",
        "title": "runWithContext"
      },
      "index": {
        "description": "Run shell with the supplied context useful if you need to invoke shell within new IO context for example when using System.Timeout.timeout",
        "hierarchy": "System Console Shell ShellMonad",
        "module": "System.Console.Shell.ShellMonad",
        "name": "runWithContext",
        "normalized": "ShellContext a-\u003eSh a b-\u003eIO(b,CommandResult a)",
        "package": "Shellac",
        "partial": "With Context",
        "signature": "ShellContext st-\u003eSh st a-\u003eIO(a,CommandResult st)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Shellac/docs/System-Console-Shell-ShellMonad.html#v:shellPut",
      "description": {
        "fct-descr": "\u003cp\u003eOutput a tagged string to the console\n\u003c/p\u003e",
        "fct-module": "System.Console.Shell.ShellMonad",
        "fct-package": "Shellac",
        "fct-signature": "BackendOutput -\u003e Sh st ()",
        "fct-source": "src/System-Console-Shell-ShellMonad.html#shellPut",
        "fct-type": "function",
        "title": "shellPut"
      },
      "index": {
        "description": "Output tagged string to the console",
        "hierarchy": "System Console Shell ShellMonad",
        "module": "System.Console.Shell.ShellMonad",
        "name": "shellPut",
        "normalized": "BackendOutput-\u003eSh a()",
        "package": "Shellac",
        "partial": "Put",
        "signature": "BackendOutput-\u003eSh st()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Shellac/docs/System-Console-Shell-ShellMonad.html#v:shellPutErr",
      "description": {
        "fct-descr": "\u003cp\u003ePrints an error output string\n\u003c/p\u003e",
        "fct-module": "System.Console.Shell.ShellMonad",
        "fct-package": "Shellac",
        "fct-signature": "String -\u003e Sh st ()",
        "fct-source": "src/System-Console-Shell-ShellMonad.html#shellPutErr",
        "fct-type": "function",
        "title": "shellPutErr"
      },
      "index": {
        "description": "Prints an error output string",
        "hierarchy": "System Console Shell ShellMonad",
        "module": "System.Console.Shell.ShellMonad",
        "name": "shellPutErr",
        "normalized": "String-\u003eSh a()",
        "package": "Shellac",
        "partial": "Put Err",
        "signature": "String-\u003eSh st()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Shellac/docs/System-Console-Shell-ShellMonad.html#v:shellPutErrLn",
      "description": {
        "fct-descr": "\u003cp\u003ePrints and error output string with a line terminator\n\u003c/p\u003e",
        "fct-module": "System.Console.Shell.ShellMonad",
        "fct-package": "Shellac",
        "fct-signature": "String -\u003e Sh st ()",
        "fct-source": "src/System-Console-Shell-ShellMonad.html#shellPutErrLn",
        "fct-type": "function",
        "title": "shellPutErrLn"
      },
      "index": {
        "description": "Prints and error output string with line terminator",
        "hierarchy": "System Console Shell ShellMonad",
        "module": "System.Console.Shell.ShellMonad",
        "name": "shellPutErrLn",
        "normalized": "String-\u003eSh a()",
        "package": "Shellac",
        "partial": "Put Err Ln",
        "signature": "String-\u003eSh st()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Shellac/docs/System-Console-Shell-ShellMonad.html#v:shellPutInfo",
      "description": {
        "fct-descr": "\u003cp\u003ePrints an informational output string\n\u003c/p\u003e",
        "fct-module": "System.Console.Shell.ShellMonad",
        "fct-package": "Shellac",
        "fct-signature": "String -\u003e Sh st ()",
        "fct-source": "src/System-Console-Shell-ShellMonad.html#shellPutInfo",
        "fct-type": "function",
        "title": "shellPutInfo"
      },
      "index": {
        "description": "Prints an informational output string",
        "hierarchy": "System Console Shell ShellMonad",
        "module": "System.Console.Shell.ShellMonad",
        "name": "shellPutInfo",
        "normalized": "String-\u003eSh a()",
        "package": "Shellac",
        "partial": "Put Info",
        "signature": "String-\u003eSh st()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Shellac/docs/System-Console-Shell-ShellMonad.html#v:shellPutInfoLn",
      "description": {
        "fct-descr": "\u003cp\u003ePrints an informational output string with a line terminator\n\u003c/p\u003e",
        "fct-module": "System.Console.Shell.ShellMonad",
        "fct-package": "Shellac",
        "fct-signature": "String -\u003e Sh st ()",
        "fct-source": "src/System-Console-Shell-ShellMonad.html#shellPutInfoLn",
        "fct-type": "function",
        "title": "shellPutInfoLn"
      },
      "index": {
        "description": "Prints an informational output string with line terminator",
        "hierarchy": "System Console Shell ShellMonad",
        "module": "System.Console.Shell.ShellMonad",
        "name": "shellPutInfoLn",
        "normalized": "String-\u003eSh a()",
        "package": "Shellac",
        "partial": "Put Info Ln",
        "signature": "String-\u003eSh st()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Shellac/docs/System-Console-Shell-ShellMonad.html#v:shellPutStr",
      "description": {
        "fct-descr": "\u003cp\u003ePrints a regular output string\n\u003c/p\u003e",
        "fct-module": "System.Console.Shell.ShellMonad",
        "fct-package": "Shellac",
        "fct-signature": "String -\u003e Sh st ()",
        "fct-source": "src/System-Console-Shell-ShellMonad.html#shellPutStr",
        "fct-type": "function",
        "title": "shellPutStr"
      },
      "index": {
        "description": "Prints regular output string",
        "hierarchy": "System Console Shell ShellMonad",
        "module": "System.Console.Shell.ShellMonad",
        "name": "shellPutStr",
        "normalized": "String-\u003eSh a()",
        "package": "Shellac",
        "partial": "Put Str",
        "signature": "String-\u003eSh st()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Shellac/docs/System-Console-Shell-ShellMonad.html#v:shellPutStrLn",
      "description": {
        "fct-descr": "\u003cp\u003ePrints regular output with a line terminator\n\u003c/p\u003e",
        "fct-module": "System.Console.Shell.ShellMonad",
        "fct-package": "Shellac",
        "fct-signature": "String -\u003e Sh st ()",
        "fct-source": "src/System-Console-Shell-ShellMonad.html#shellPutStrLn",
        "fct-type": "function",
        "title": "shellPutStrLn"
      },
      "index": {
        "description": "Prints regular output with line terminator",
        "hierarchy": "System Console Shell ShellMonad",
        "module": "System.Console.Shell.ShellMonad",
        "name": "shellPutStrLn",
        "normalized": "String-\u003eSh a()",
        "package": "Shellac",
        "partial": "Put Str Ln",
        "signature": "String-\u003eSh st()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Shellac/docs/System-Console-Shell-ShellMonad.html#v:shellSpecial",
      "description": {
        "fct-descr": "\u003cp\u003eSchedule a shell \"special\" action.  Only the last call to\n   this function will affect the shell's behavior! It modifies\n   a bit of state that is overwritten on each call.\n\u003c/p\u003e",
        "fct-module": "System.Console.Shell.ShellMonad",
        "fct-package": "Shellac",
        "fct-signature": "ShellSpecial st -\u003e Sh st ()",
        "fct-source": "src/System-Console-Shell-ShellMonad.html#shellSpecial",
        "fct-type": "function",
        "title": "shellSpecial"
      },
      "index": {
        "description": "Schedule shell special action Only the last call to this function will affect the shell behavior It modifies bit of state that is overwritten on each call",
        "hierarchy": "System Console Shell ShellMonad",
        "module": "System.Console.Shell.ShellMonad",
        "name": "shellSpecial",
        "normalized": "ShellSpecial a-\u003eSh a()",
        "package": "Shellac",
        "partial": "Special",
        "signature": "ShellSpecial st-\u003eSh st()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Shellac/docs/System-Console-Shell-ShellMonad.html#v:updateCommandResult",
      "description": {
        "fct-descr": "\u003cp\u003eUpdate the mutable context of this shell\n\u003c/p\u003e",
        "fct-module": "System.Console.Shell.ShellMonad",
        "fct-package": "Shellac",
        "fct-signature": "CommandResult st -\u003e Sh st ()",
        "fct-source": "src/System-Console-Shell-ShellMonad.html#updateCommandResult",
        "fct-type": "function",
        "title": "updateCommandResult"
      },
      "index": {
        "description": "Update the mutable context of this shell",
        "hierarchy": "System Console Shell ShellMonad",
        "module": "System.Console.Shell.ShellMonad",
        "name": "updateCommandResult",
        "normalized": "CommandResult a-\u003eSh a()",
        "package": "Shellac",
        "partial": "Command Result",
        "signature": "CommandResult st-\u003eSh st()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Shellac/docs/System-Console-Shell.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module implements a framework for creating read-eval-print style\n   command shells.  Shells are created by declaratively defining evaluation\n   functions and \"shell commands\".  Input is read using a pluggable backend.\n   The shell framework handles command history and word completion if the\n   backend supports it.\n\u003c/p\u003e\u003cp\u003eThe basic idea is for creating a shell is:\n\u003c/p\u003e\u003col\u003e\u003cli\u003e Create a list of shell commands and an evaluation function\n\u003c/li\u003e\u003cli\u003e Create a shell description (using \u003ccode\u003e\u003ca\u003emkShellDescription\u003c/a\u003e\u003c/code\u003e)\n\u003c/li\u003e\u003cli\u003e Set up the initial shell state\n\u003c/li\u003e\u003cli\u003e Run the shell (using \u003ccode\u003e\u003ca\u003erunShell\u003c/a\u003e\u003c/code\u003e)\n\u003c/li\u003e\u003c/ol\u003e\u003cp\u003eShell commands and the evaluation function are written in a custom\n   monad.  See \u003ca\u003eSystem.Console.Shell.ShellMonad\u003c/a\u003e for details on using this monad.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.Console.Shell",
        "fct-package": "Shellac",
        "fct-signature": "module",
        "fct-source": "src/System-Console-Shell.html",
        "fct-type": "module",
        "title": "Shell"
      },
      "index": {
        "description": "This module implements framework for creating read-eval-print style command shells Shells are created by declaratively defining evaluation functions and shell commands Input is read using pluggable backend The shell framework handles command history and word completion if the backend supports it The basic idea is for creating shell is Create list of shell commands and an evaluation function Create shell description using mkShellDescription Set up the initial shell state Run the shell using runShell Shell commands and the evaluation function are written in custom monad See System.Console.Shell.ShellMonad for details on using this monad",
        "hierarchy": "System Console Shell",
        "module": "System.Console.Shell",
        "name": "Shell",
        "normalized": "",
        "package": "Shellac",
        "partial": "Shell",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Shellac/docs/System-Console-Shell.html#t:CommandFunction",
      "description": {
        "fct-descr": "\u003cp\u003eThis class is used in the \u003ccode\u003e\u003ca\u003ecmd\u003c/a\u003e\u003c/code\u003e function to automaticly generate\n   the command parsers and command syntax strings for user defined\n   commands.  The type of 'f' is restricted to have a restricted set of\n   monomorphic arguments (\u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eFloat\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e,\n   \u003ccode\u003e\u003ca\u003eFile\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eUsername\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003eCompletable\u003c/a\u003e\u003c/code\u003e) and the head type must be \u003ccode\u003eSh st ()\u003c/code\u003e\n\u003c/p\u003e\u003cpre\u003e  f :: Int -\u003e File -\u003e Sh MyShellState ()\n  g :: Double -\u003e Sh st ()\n  h :: Sh SomeShellState ()\n\u003c/pre\u003e\u003cp\u003eare all legal types, whereas:\n\u003c/p\u003e\u003cpre\u003e  bad1 :: a -\u003e Sh (MyShellState a) ()\n  bad2 :: [Int] -\u003e Sh MyShellState ()\n  bad3 :: Bool -\u003e MyShellState\n\u003c/pre\u003e\u003cp\u003eare not.\n\u003c/p\u003e",
        "fct-module": "System.Console.Shell",
        "fct-package": "Shellac",
        "fct-signature": "class",
        "fct-source": "src/System-Console-Shell-Commands.html#CommandFunction",
        "fct-type": "class",
        "title": "CommandFunction"
      },
      "index": {
        "description": "This class is used in the cmd function to automaticly generate the command parsers and command syntax strings for user defined commands The type of is restricted to have restricted set of monomorphic arguments Int Integer Float Double String File Username and Completable and the head type must be Sh st Int File Sh MyShellState Double Sh st Sh SomeShellState are all legal types whereas bad1 Sh MyShellState bad2 Int Sh MyShellState bad3 Bool MyShellState are not",
        "hierarchy": "System Console Shell",
        "module": "System.Console.Shell",
        "name": "CommandFunction",
        "normalized": "",
        "package": "Shellac",
        "partial": "Command Function",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Shellac/docs/System-Console-Shell.html#t:CommandResult",
      "description": {
        "fct-descr": "\u003cp\u003eThe type of results from shell commands.  They are a modified\n   shell state and possibly a shell \"special\" action to execute.\n\u003c/p\u003e",
        "fct-module": "System.Console.Shell",
        "fct-package": "Shellac",
        "fct-signature": "type",
        "fct-source": "src/System-Console-Shell-Types.html#CommandResult",
        "fct-type": "type",
        "title": "CommandResult"
      },
      "index": {
        "description": "The type of results from shell commands They are modified shell state and possibly shell special action to execute",
        "hierarchy": "System Console Shell",
        "module": "System.Console.Shell",
        "name": "CommandResult",
        "normalized": "",
        "package": "Shellac",
        "partial": "Command Result",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Shellac/docs/System-Console-Shell.html#t:CommandStyle",
      "description": {
        "fct-descr": "\u003cp\u003eDatatype describing the style of shell commands.  This\n   determines how shell input is parsed.\n\u003c/p\u003e",
        "fct-module": "System.Console.Shell",
        "fct-package": "Shellac",
        "fct-signature": "data",
        "fct-source": "src/System-Console-Shell-Types.html#CommandStyle",
        "fct-type": "data",
        "title": "CommandStyle"
      },
      "index": {
        "description": "Datatype describing the style of shell commands This determines how shell input is parsed",
        "hierarchy": "System Console Shell",
        "module": "System.Console.Shell",
        "name": "CommandStyle",
        "normalized": "",
        "package": "Shellac",
        "partial": "Command Style",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Shellac/docs/System-Console-Shell.html#t:Completable",
      "description": {
        "fct-descr": "\u003cp\u003eRepresents a command argument which is an arbitrary\n   completable item.  The type argument determines the\n   instance of \u003ccode\u003e\u003ca\u003eCompletion\u003c/a\u003e\u003c/code\u003e which is used to create\n   completions for this command argument.\n\u003c/p\u003e",
        "fct-module": "System.Console.Shell",
        "fct-package": "Shellac",
        "fct-signature": "newtype",
        "fct-source": "src/System-Console-Shell-Commands.html#Completable",
        "fct-type": "newtype",
        "title": "Completable"
      },
      "index": {
        "description": "Represents command argument which is an arbitrary completable item The type argument determines the instance of Completion which is used to create completions for this command argument",
        "hierarchy": "System Console Shell",
        "module": "System.Console.Shell",
        "name": "Completable",
        "normalized": "",
        "package": "Shellac",
        "partial": "Completable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Shellac/docs/System-Console-Shell.html#t:Completion",
      "description": {
        "fct-descr": "\u003cp\u003eA typeclass representing user definable completion functions.\n\u003c/p\u003e",
        "fct-module": "System.Console.Shell",
        "fct-package": "Shellac",
        "fct-signature": "class",
        "fct-source": "src/System-Console-Shell-Commands.html#Completion",
        "fct-type": "class",
        "title": "Completion"
      },
      "index": {
        "description": "typeclass representing user definable completion functions",
        "hierarchy": "System Console Shell",
        "module": "System.Console.Shell",
        "name": "Completion",
        "normalized": "",
        "package": "Shellac",
        "partial": "Completion",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Shellac/docs/System-Console-Shell.html#t:File",
      "description": {
        "fct-descr": "\u003cp\u003eRepresents a command argument which is a filename\n\u003c/p\u003e",
        "fct-module": "System.Console.Shell",
        "fct-package": "Shellac",
        "fct-signature": "newtype",
        "fct-source": "src/System-Console-Shell-Commands.html#File",
        "fct-type": "newtype",
        "title": "File"
      },
      "index": {
        "description": "Represents command argument which is filename",
        "hierarchy": "System Console Shell",
        "module": "System.Console.Shell",
        "name": "File",
        "normalized": "",
        "package": "Shellac",
        "partial": "File",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Shellac/docs/System-Console-Shell.html#t:OutputCommand",
      "description": {
        "fct-descr": "\u003cp\u003eThe type of commands which produce output on the shell console.\n\u003c/p\u003e",
        "fct-module": "System.Console.Shell",
        "fct-package": "Shellac",
        "fct-signature": "type",
        "fct-source": "src/System-Console-Shell-Types.html#OutputCommand",
        "fct-type": "type",
        "title": "OutputCommand"
      },
      "index": {
        "description": "The type of commands which produce output on the shell console",
        "hierarchy": "System Console Shell",
        "module": "System.Console.Shell",
        "name": "OutputCommand",
        "normalized": "",
        "package": "Shellac",
        "partial": "Output Command",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Shellac/docs/System-Console-Shell.html#t:ShellCommand",
      "description": {
        "fct-descr": "\u003cp\u003eThe type of a shell command.  The shell description is passed in, and the\n   tuple consists of\n     (command name,command parser,command syntax document,help message document)\n\u003c/p\u003e",
        "fct-module": "System.Console.Shell",
        "fct-package": "Shellac",
        "fct-signature": "type",
        "fct-source": "src/System-Console-Shell-Types.html#ShellCommand",
        "fct-type": "type",
        "title": "ShellCommand"
      },
      "index": {
        "description": "The type of shell command The shell description is passed in and the tuple consists of command name command parser command syntax document help message document",
        "hierarchy": "System Console Shell",
        "module": "System.Console.Shell",
        "name": "ShellCommand",
        "normalized": "",
        "package": "Shellac",
        "partial": "Shell Command",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Shellac/docs/System-Console-Shell.html#t:ShellDescription",
      "description": {
        "fct-descr": "\u003cp\u003eA record type which describes the attributes of a shell.\n\u003c/p\u003e",
        "fct-module": "System.Console.Shell",
        "fct-package": "Shellac",
        "fct-signature": "data",
        "fct-source": "src/System-Console-Shell-Types.html#ShellDescription",
        "fct-type": "data",
        "title": "ShellDescription"
      },
      "index": {
        "description": "record type which describes the attributes of shell",
        "hierarchy": "System Console Shell",
        "module": "System.Console.Shell",
        "name": "ShellDescription",
        "normalized": "",
        "package": "Shellac",
        "partial": "Shell Description",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Shellac/docs/System-Console-Shell.html#t:ShellSpecial",
      "description": {
        "fct-descr": "\u003cp\u003eSpecial commands for the shell framework.\n\u003c/p\u003e",
        "fct-module": "System.Console.Shell",
        "fct-package": "Shellac",
        "fct-signature": "data",
        "fct-source": "src/System-Console-Shell-Types.html#ShellSpecial",
        "fct-type": "data",
        "title": "ShellSpecial"
      },
      "index": {
        "description": "Special commands for the shell framework",
        "hierarchy": "System Console Shell",
        "module": "System.Console.Shell",
        "name": "ShellSpecial",
        "normalized": "",
        "package": "Shellac",
        "partial": "Shell Special",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Shellac/docs/System-Console-Shell.html#t:ShellacException",
      "description": {
        "fct-descr": "\u003cp\u003eCompatability layer.  For base-3, this is\n   'Exception'.  For base-4, this is\n   'SomeException'.\n\u003c/p\u003e",
        "fct-module": "System.Console.Shell",
        "fct-package": "Shellac",
        "fct-signature": "type",
        "fct-source": "src/System-Console-Shell-Types.html#ShellacException",
        "fct-type": "type",
        "title": "ShellacException"
      },
      "index": {
        "description": "Compatability layer For base-3 this is Exception For base-4 this is SomeException",
        "hierarchy": "System Console Shell",
        "module": "System.Console.Shell",
        "name": "ShellacException",
        "normalized": "",
        "package": "Shellac",
        "partial": "Shellac Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Shellac/docs/System-Console-Shell.html#t:Subshell",
      "description": {
        "fct-descr": "\u003cp\u003eThe type of subshells.  The tuple consists of:\n\u003c/p\u003e\u003col\u003e\u003cli\u003e A function to generate the initial subshell state from the outer shell state\n\u003c/li\u003e\u003cli\u003e A function to generate the outer shell state from the final subshell state\n\u003c/li\u003e\u003cli\u003e A function to generate the shell description from the initial subshell state\n\u003c/li\u003e\u003c/ol\u003e",
        "fct-module": "System.Console.Shell",
        "fct-package": "Shellac",
        "fct-signature": "type",
        "fct-source": "src/System-Console-Shell-Types.html#Subshell",
        "fct-type": "type",
        "title": "Subshell"
      },
      "index": {
        "description": "The type of subshells The tuple consists of function to generate the initial subshell state from the outer shell state function to generate the outer shell state from the final subshell state function to generate the shell description from the initial subshell state",
        "hierarchy": "System Console Shell",
        "module": "System.Console.Shell",
        "name": "Subshell",
        "normalized": "",
        "package": "Shellac",
        "partial": "Subshell",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Shellac/docs/System-Console-Shell.html#t:Username",
      "description": {
        "fct-descr": "\u003cp\u003eRepresents a command argument which is a username\n\u003c/p\u003e",
        "fct-module": "System.Console.Shell",
        "fct-package": "Shellac",
        "fct-signature": "newtype",
        "fct-source": "src/System-Console-Shell-Commands.html#Username",
        "fct-type": "newtype",
        "title": "Username"
      },
      "index": {
        "description": "Represents command argument which is username",
        "hierarchy": "System Console Shell",
        "module": "System.Console.Shell",
        "name": "Username",
        "normalized": "",
        "package": "Shellac",
        "partial": "Username",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Shellac/docs/System-Console-Shell.html#v:CharPrefixCommands",
      "description": {
        "fct-descr": "\u003cp\u003eIndicates that commands are prefixed with a particular character.\n   Colon ':' is the default character (a la GHCi).\n\u003c/p\u003e",
        "fct-module": "System.Console.Shell",
        "fct-package": "Shellac",
        "fct-signature": "CharPrefixCommands Char",
        "fct-source": "src/System-Console-Shell-Types.html#CommandStyle",
        "fct-type": "function",
        "title": "CharPrefixCommands"
      },
      "index": {
        "description": "Indicates that commands are prefixed with particular character Colon is the default character la GHCi",
        "hierarchy": "System Console Shell",
        "module": "System.Console.Shell",
        "name": "CharPrefixCommands",
        "normalized": "",
        "package": "Shellac",
        "partial": "Char Prefix Commands",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Shellac/docs/System-Console-Shell.html#v:Completable",
      "description": {
        "fct-module": "System.Console.Shell",
        "fct-package": "Shellac",
        "fct-signature": "Completable String",
        "fct-source": "src/System-Console-Shell-Commands.html#Completable",
        "fct-type": "function",
        "title": "Completable"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Shell",
        "module": "System.Console.Shell",
        "name": "Completable",
        "normalized": "",
        "package": "Shellac",
        "partial": "Completable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Shellac/docs/System-Console-Shell.html#v:ExecSubshell",
      "description": {
        "fct-descr": "\u003cp\u003eCauses the shell to execute a subshell\n\u003c/p\u003e",
        "fct-module": "System.Console.Shell",
        "fct-package": "Shellac",
        "fct-signature": "forall st' . ExecSubshell (Subshell st st')",
        "fct-source": "src/System-Console-Shell-Types.html#ShellSpecial",
        "fct-type": "function",
        "title": "ExecSubshell"
      },
      "index": {
        "description": "Causes the shell to execute subshell",
        "hierarchy": "System Console Shell",
        "module": "System.Console.Shell",
        "name": "ExecSubshell",
        "normalized": "",
        "package": "Shellac",
        "partial": "Exec Subshell",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Shellac/docs/System-Console-Shell.html#v:File",
      "description": {
        "fct-module": "System.Console.Shell",
        "fct-package": "Shellac",
        "fct-signature": "File String",
        "fct-source": "src/System-Console-Shell-Commands.html#File",
        "fct-type": "function",
        "title": "File"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Shell",
        "module": "System.Console.Shell",
        "name": "File",
        "normalized": "",
        "package": "Shellac",
        "partial": "File",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Shellac/docs/System-Console-Shell.html#v:OnlyCommands",
      "description": {
        "fct-descr": "\u003cp\u003eIndicates that all input is to be interpreted as shell commands;\n   input is only passed to the evaluation fuction if it cannot be\n   parsed as a command.\n\u003c/p\u003e",
        "fct-module": "System.Console.Shell",
        "fct-package": "Shellac",
        "fct-signature": "OnlyCommands",
        "fct-source": "src/System-Console-Shell-Types.html#CommandStyle",
        "fct-type": "function",
        "title": "OnlyCommands"
      },
      "index": {
        "description": "Indicates that all input is to be interpreted as shell commands input is only passed to the evaluation fuction if it cannot be parsed as command",
        "hierarchy": "System Console Shell",
        "module": "System.Console.Shell",
        "name": "OnlyCommands",
        "normalized": "",
        "package": "Shellac",
        "partial": "Only Commands",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Shellac/docs/System-Console-Shell.html#v:ShDesc",
      "description": {
        "fct-module": "System.Console.Shell",
        "fct-package": "Shellac",
        "fct-signature": "ShDesc",
        "fct-source": "src/System-Console-Shell-Types.html#ShellDescription",
        "fct-type": "function",
        "title": "ShDesc"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Shell",
        "module": "System.Console.Shell",
        "name": "ShDesc",
        "normalized": "",
        "package": "Shellac",
        "partial": "Sh Desc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Shellac/docs/System-Console-Shell.html#v:ShellContinueLine",
      "description": {
        "fct-descr": "\u003cp\u003eAsk the shell to continue accepting input on another line, which should\n   be appended to the given string\n\u003c/p\u003e",
        "fct-module": "System.Console.Shell",
        "fct-package": "Shellac",
        "fct-signature": "ShellContinueLine String",
        "fct-source": "src/System-Console-Shell-Types.html#ShellSpecial",
        "fct-type": "function",
        "title": "ShellContinueLine"
      },
      "index": {
        "description": "Ask the shell to continue accepting input on another line which should be appended to the given string",
        "hierarchy": "System Console Shell",
        "module": "System.Console.Shell",
        "name": "ShellContinueLine",
        "normalized": "",
        "package": "Shellac",
        "partial": "Shell Continue Line",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Shellac/docs/System-Console-Shell.html#v:ShellExit",
      "description": {
        "fct-descr": "\u003cp\u003eCauses the shell to exit\n\u003c/p\u003e",
        "fct-module": "System.Console.Shell",
        "fct-package": "Shellac",
        "fct-signature": "ShellExit",
        "fct-source": "src/System-Console-Shell-Types.html#ShellSpecial",
        "fct-type": "function",
        "title": "ShellExit"
      },
      "index": {
        "description": "Causes the shell to exit",
        "hierarchy": "System Console Shell",
        "module": "System.Console.Shell",
        "name": "ShellExit",
        "normalized": "",
        "package": "Shellac",
        "partial": "Shell Exit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Shellac/docs/System-Console-Shell.html#v:ShellHelp",
      "description": {
        "fct-descr": "\u003cp\u003eCauses the shell to print an informative message.\n   If a command name is specified, only information about\n   that command will be displayed\n\u003c/p\u003e",
        "fct-module": "System.Console.Shell",
        "fct-package": "Shellac",
        "fct-signature": "ShellHelp (Maybe String)",
        "fct-source": "src/System-Console-Shell-Types.html#ShellSpecial",
        "fct-type": "function",
        "title": "ShellHelp"
      },
      "index": {
        "description": "Causes the shell to print an informative message If command name is specified only information about that command will be displayed",
        "hierarchy": "System Console Shell",
        "module": "System.Console.Shell",
        "name": "ShellHelp",
        "normalized": "",
        "package": "Shellac",
        "partial": "Shell Help",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Shellac/docs/System-Console-Shell.html#v:ShellNothing",
      "description": {
        "fct-descr": "\u003cp\u003eInstructs the shell to do nothing; redisplay the prompt and continue\n\u003c/p\u003e",
        "fct-module": "System.Console.Shell",
        "fct-package": "Shellac",
        "fct-signature": "ShellNothing",
        "fct-source": "src/System-Console-Shell-Types.html#ShellSpecial",
        "fct-type": "function",
        "title": "ShellNothing"
      },
      "index": {
        "description": "Instructs the shell to do nothing redisplay the prompt and continue",
        "hierarchy": "System Console Shell",
        "module": "System.Console.Shell",
        "name": "ShellNothing",
        "normalized": "",
        "package": "Shellac",
        "partial": "Shell Nothing",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Shellac/docs/System-Console-Shell.html#v:SingleCharCommands",
      "description": {
        "fct-descr": "\u003cp\u003eCommands consist of a single character.\n\u003c/p\u003e",
        "fct-module": "System.Console.Shell",
        "fct-package": "Shellac",
        "fct-signature": "SingleCharCommands",
        "fct-source": "src/System-Console-Shell-Types.html#CommandStyle",
        "fct-type": "function",
        "title": "SingleCharCommands"
      },
      "index": {
        "description": "Commands consist of single character",
        "hierarchy": "System Console Shell",
        "module": "System.Console.Shell",
        "name": "SingleCharCommands",
        "normalized": "",
        "package": "Shellac",
        "partial": "Single Char Commands",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Shellac/docs/System-Console-Shell.html#v:Username",
      "description": {
        "fct-module": "System.Console.Shell",
        "fct-package": "Shellac",
        "fct-signature": "Username String",
        "fct-source": "src/System-Console-Shell-Commands.html#Username",
        "fct-type": "function",
        "title": "Username"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Shell",
        "module": "System.Console.Shell",
        "name": "Username",
        "normalized": "",
        "package": "Shellac",
        "partial": "Username",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Shellac/docs/System-Console-Shell.html#v:beforePrompt",
      "description": {
        "fct-descr": "\u003cp\u003eA shell action to run before each prompt is printed\n\u003c/p\u003e",
        "fct-module": "System.Console.Shell",
        "fct-package": "Shellac",
        "fct-signature": "Sh st ()",
        "fct-source": "src/System-Console-Shell-Types.html#ShellDescription",
        "fct-type": "function",
        "title": "beforePrompt"
      },
      "index": {
        "description": "shell action to run before each prompt is printed",
        "hierarchy": "System Console Shell",
        "module": "System.Console.Shell",
        "name": "beforePrompt",
        "normalized": "Sh a()",
        "package": "Shellac",
        "partial": "Prompt",
        "signature": "Sh st()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Shellac/docs/System-Console-Shell.html#v:cmd",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a user defined shell commmand.  This relies on the\n   typeclass machenery defined by \u003ccode\u003e\u003ca\u003eCommandFunction\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Console.Shell",
        "fct-package": "Shellac",
        "fct-signature": "String-\u003e f-\u003e String-\u003e ShellCommand st",
        "fct-type": "function",
        "title": "cmd"
      },
      "index": {
        "description": "Creates user defined shell commmand This relies on the typeclass machenery defined by CommandFunction",
        "hierarchy": "System Console Shell",
        "module": "System.Console.Shell",
        "name": "cmd",
        "normalized": "String-\u003ea-\u003eString-\u003eShellCommand b",
        "package": "Shellac",
        "partial": "",
        "signature": "String-\u003ef-\u003eString-\u003eShellCommand st"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Shellac/docs/System-Console-Shell.html#v:commandStyle",
      "description": {
        "fct-descr": "\u003cp\u003eThe style of shell commands\n\u003c/p\u003e",
        "fct-module": "System.Console.Shell",
        "fct-package": "Shellac",
        "fct-signature": "CommandStyle",
        "fct-source": "src/System-Console-Shell-Types.html#ShellDescription",
        "fct-type": "function",
        "title": "commandStyle"
      },
      "index": {
        "description": "The style of shell commands",
        "hierarchy": "System Console Shell",
        "module": "System.Console.Shell",
        "name": "commandStyle",
        "normalized": "",
        "package": "Shellac",
        "partial": "Style",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Shellac/docs/System-Console-Shell.html#v:completableLabel",
      "description": {
        "fct-descr": "\u003cp\u003egenerates a label for the argument for use in the help displays.\n\u003c/p\u003e",
        "fct-module": "System.Console.Shell",
        "fct-package": "Shellac",
        "fct-signature": "compl -\u003e String",
        "fct-source": "src/System-Console-Shell-Commands.html#completableLabel",
        "fct-type": "method",
        "title": "completableLabel"
      },
      "index": {
        "description": "generates label for the argument for use in the help displays",
        "hierarchy": "System Console Shell",
        "module": "System.Console.Shell",
        "name": "completableLabel",
        "normalized": "a-\u003eString",
        "package": "Shellac",
        "partial": "Label",
        "signature": "compl-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Shellac/docs/System-Console-Shell.html#v:complete",
      "description": {
        "fct-descr": "\u003cp\u003eActually generates the list of possible completions, given the\n   current shell state and a string representing the beginning of the word.\n\u003c/p\u003e",
        "fct-module": "System.Console.Shell",
        "fct-package": "Shellac",
        "fct-signature": "compl -\u003e st -\u003e String -\u003e IO [String]",
        "fct-source": "src/System-Console-Shell-Commands.html#complete",
        "fct-type": "method",
        "title": "complete"
      },
      "index": {
        "description": "Actually generates the list of possible completions given the current shell state and string representing the beginning of the word",
        "hierarchy": "System Console Shell",
        "module": "System.Console.Shell",
        "name": "complete",
        "normalized": "a-\u003eb-\u003eString-\u003eIO[String]",
        "package": "Shellac",
        "partial": "",
        "signature": "compl-\u003est-\u003eString-\u003eIO[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Shellac/docs/System-Console-Shell.html#v:defaultCompletions",
      "description": {
        "fct-descr": "\u003cp\u003eIf set, this function provides completions when NOT\n   in the context of a shell command\n\u003c/p\u003e",
        "fct-module": "System.Console.Shell",
        "fct-package": "Shellac",
        "fct-signature": "Maybe (st -\u003e String -\u003e IO [String])",
        "fct-source": "src/System-Console-Shell-Types.html#ShellDescription",
        "fct-type": "function",
        "title": "defaultCompletions"
      },
      "index": {
        "description": "If set this function provides completions when NOT in the context of shell command",
        "hierarchy": "System Console Shell",
        "module": "System.Console.Shell",
        "name": "defaultCompletions",
        "normalized": "Maybe(a-\u003eString-\u003eIO[String])",
        "package": "Shellac",
        "partial": "Completions",
        "signature": "Maybe(st-\u003eString-\u003eIO[String])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Shellac/docs/System-Console-Shell.html#v:defaultExceptionHandler",
      "description": {
        "fct-descr": "\u003cp\u003eThe default shell exception handler.  It simply prints the exception\n   and returns the shell state unchanged.  (However, it specificaly\n   ignores the thread killed exception, because that is used to\n   implement execution canceling)\n\u003c/p\u003e",
        "fct-module": "System.Console.Shell",
        "fct-package": "Shellac",
        "fct-signature": "ShellacException -\u003e Sh st ()",
        "fct-source": "src/System-Console-Shell-RunShell.html#defaultExceptionHandler",
        "fct-type": "function",
        "title": "defaultExceptionHandler"
      },
      "index": {
        "description": "The default shell exception handler It simply prints the exception and returns the shell state unchanged However it specificaly ignores the thread killed exception because that is used to implement execution canceling",
        "hierarchy": "System Console Shell",
        "module": "System.Console.Shell",
        "name": "defaultExceptionHandler",
        "normalized": "ShellacException-\u003eSh a()",
        "package": "Shellac",
        "partial": "Exception Handler",
        "signature": "ShellacException-\u003eSh st()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Shellac/docs/System-Console-Shell.html#v:evaluateFunc",
      "description": {
        "fct-descr": "\u003cp\u003eThe evaluation function for this shell\n\u003c/p\u003e",
        "fct-module": "System.Console.Shell",
        "fct-package": "Shellac",
        "fct-signature": "String -\u003e Sh st ()",
        "fct-source": "src/System-Console-Shell-Types.html#ShellDescription",
        "fct-type": "function",
        "title": "evaluateFunc"
      },
      "index": {
        "description": "The evaluation function for this shell",
        "hierarchy": "System Console Shell",
        "module": "System.Console.Shell",
        "name": "evaluateFunc",
        "normalized": "String-\u003eSh a()",
        "package": "Shellac",
        "partial": "Func",
        "signature": "String-\u003eSh st()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Shellac/docs/System-Console-Shell.html#v:exceptionHandler",
      "description": {
        "fct-descr": "\u003cp\u003eA set of handlers to call when an exception occurs\n\u003c/p\u003e",
        "fct-module": "System.Console.Shell",
        "fct-package": "Shellac",
        "fct-signature": "ShellacException -\u003e Sh st ()",
        "fct-source": "src/System-Console-Shell-Types.html#ShellDescription",
        "fct-type": "function",
        "title": "exceptionHandler"
      },
      "index": {
        "description": "set of handlers to call when an exception occurs",
        "hierarchy": "System Console Shell",
        "module": "System.Console.Shell",
        "name": "exceptionHandler",
        "normalized": "ShellacException-\u003eSh a()",
        "package": "Shellac",
        "partial": "Handler",
        "signature": "ShellacException-\u003eSh st()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Shellac/docs/System-Console-Shell.html#v:exitCommand",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a shell command which will exit the shell.\n\u003c/p\u003e",
        "fct-module": "System.Console.Shell",
        "fct-package": "Shellac",
        "fct-signature": "String-\u003e ShellCommand st",
        "fct-type": "function",
        "title": "exitCommand"
      },
      "index": {
        "description": "Creates shell command which will exit the shell",
        "hierarchy": "System Console Shell",
        "module": "System.Console.Shell",
        "name": "exitCommand",
        "normalized": "String-\u003eShellCommand a",
        "package": "Shellac",
        "partial": "Command",
        "signature": "String-\u003eShellCommand st"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Shellac/docs/System-Console-Shell.html#v:greetingText",
      "description": {
        "fct-descr": "\u003cp\u003eText to print when the shell starts\n\u003c/p\u003e",
        "fct-module": "System.Console.Shell",
        "fct-package": "Shellac",
        "fct-signature": "Maybe String",
        "fct-source": "src/System-Console-Shell-Types.html#ShellDescription",
        "fct-type": "function",
        "title": "greetingText"
      },
      "index": {
        "description": "Text to print when the shell starts",
        "hierarchy": "System Console Shell",
        "module": "System.Console.Shell",
        "name": "greetingText",
        "normalized": "",
        "package": "Shellac",
        "partial": "Text",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Shellac/docs/System-Console-Shell.html#v:helpCommand",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a command which will print the shell help message.\n\u003c/p\u003e",
        "fct-module": "System.Console.Shell",
        "fct-package": "Shellac",
        "fct-signature": "String-\u003e ShellCommand st",
        "fct-type": "function",
        "title": "helpCommand"
      },
      "index": {
        "description": "Creates command which will print the shell help message",
        "hierarchy": "System Console Shell",
        "module": "System.Console.Shell",
        "name": "helpCommand",
        "normalized": "String-\u003eShellCommand a",
        "package": "Shellac",
        "partial": "Command",
        "signature": "String-\u003eShellCommand st"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Shellac/docs/System-Console-Shell.html#v:historyEnabled",
      "description": {
        "fct-descr": "\u003cp\u003eIf true, the history mechanism of the backend (if any)\n   will be used; false will disable history features.\n\u003c/p\u003e",
        "fct-module": "System.Console.Shell",
        "fct-package": "Shellac",
        "fct-signature": "Bool",
        "fct-source": "src/System-Console-Shell-Types.html#ShellDescription",
        "fct-type": "function",
        "title": "historyEnabled"
      },
      "index": {
        "description": "If true the history mechanism of the backend if any will be used false will disable history features",
        "hierarchy": "System Console Shell",
        "module": "System.Console.Shell",
        "name": "historyEnabled",
        "normalized": "",
        "package": "Shellac",
        "partial": "Enabled",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Shellac/docs/System-Console-Shell.html#v:historyFile",
      "description": {
        "fct-descr": "\u003cp\u003eIf set, this provides the path to a file to contain a\n   history of entered shell commands\n\u003c/p\u003e",
        "fct-module": "System.Console.Shell",
        "fct-package": "Shellac",
        "fct-signature": "Maybe FilePath",
        "fct-source": "src/System-Console-Shell-Types.html#ShellDescription",
        "fct-type": "function",
        "title": "historyFile"
      },
      "index": {
        "description": "If set this provides the path to file to contain history of entered shell commands",
        "hierarchy": "System Console Shell",
        "module": "System.Console.Shell",
        "name": "historyFile",
        "normalized": "",
        "package": "Shellac",
        "partial": "File",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Shellac/docs/System-Console-Shell.html#v:initialShellDescription",
      "description": {
        "fct-descr": "\u003cp\u003eA basic shell description with sane initial values.\n\u003c/p\u003e",
        "fct-module": "System.Console.Shell",
        "fct-package": "Shellac",
        "fct-signature": "ShellDescription st",
        "fct-source": "src/System-Console-Shell.html#initialShellDescription",
        "fct-type": "function",
        "title": "initialShellDescription"
      },
      "index": {
        "description": "basic shell description with sane initial values",
        "hierarchy": "System Console Shell",
        "module": "System.Console.Shell",
        "name": "initialShellDescription",
        "normalized": "",
        "package": "Shellac",
        "partial": "Shell Description",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Shellac/docs/System-Console-Shell.html#v:maxHistoryEntries",
      "description": {
        "fct-descr": "\u003cp\u003eThe maximum number of history entries to maintain\n\u003c/p\u003e",
        "fct-module": "System.Console.Shell",
        "fct-package": "Shellac",
        "fct-signature": "Int",
        "fct-source": "src/System-Console-Shell-Types.html#ShellDescription",
        "fct-type": "function",
        "title": "maxHistoryEntries"
      },
      "index": {
        "description": "The maximum number of history entries to maintain",
        "hierarchy": "System Console Shell",
        "module": "System.Console.Shell",
        "name": "maxHistoryEntries",
        "normalized": "",
        "package": "Shellac",
        "partial": "History Entries",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Shellac/docs/System-Console-Shell.html#v:mkShellDescription",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a simple shell description from a list of shell commands and\n   an evaluation function.\n\u003c/p\u003e",
        "fct-module": "System.Console.Shell",
        "fct-package": "Shellac",
        "fct-signature": "[ShellCommand st] -\u003e (String -\u003e Sh st ()) -\u003e ShellDescription st",
        "fct-source": "src/System-Console-Shell.html#mkShellDescription",
        "fct-type": "function",
        "title": "mkShellDescription"
      },
      "index": {
        "description": "Creates simple shell description from list of shell commands and an evaluation function",
        "hierarchy": "System Console Shell",
        "module": "System.Console.Shell",
        "name": "mkShellDescription",
        "normalized": "[ShellCommand a]-\u003e(String-\u003eSh a())-\u003eShellDescription a",
        "package": "Shellac",
        "partial": "Shell Description",
        "signature": "[ShellCommand st]-\u003e(String-\u003eSh st())-\u003eShellDescription st"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Shellac/docs/System-Console-Shell.html#v:prompt",
      "description": {
        "fct-descr": "\u003cp\u003eA command to generate the prompt to print\n\u003c/p\u003e",
        "fct-module": "System.Console.Shell",
        "fct-package": "Shellac",
        "fct-signature": "st -\u003e IO String",
        "fct-source": "src/System-Console-Shell-Types.html#ShellDescription",
        "fct-type": "function",
        "title": "prompt"
      },
      "index": {
        "description": "command to generate the prompt to print",
        "hierarchy": "System Console Shell",
        "module": "System.Console.Shell",
        "name": "prompt",
        "normalized": "a-\u003eIO String",
        "package": "Shellac",
        "partial": "",
        "signature": "st-\u003eIO String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Shellac/docs/System-Console-Shell.html#v:runShell",
      "description": {
        "fct-descr": "\u003cp\u003eRun a shell.  Given a shell description, a shell backend to use\n   and an initial state this function runs the shell until it exits,\n   and then returns the final state.\n\u003c/p\u003e",
        "fct-module": "System.Console.Shell",
        "fct-package": "Shellac",
        "fct-signature": "ShellDescription st -\u003e ShellBackend bst -\u003e st -\u003e IO st",
        "fct-source": "src/System-Console-Shell-RunShell.html#runShell",
        "fct-type": "function",
        "title": "runShell"
      },
      "index": {
        "description": "Run shell Given shell description shell backend to use and an initial state this function runs the shell until it exits and then returns the final state",
        "hierarchy": "System Console Shell",
        "module": "System.Console.Shell",
        "name": "runShell",
        "normalized": "ShellDescription a-\u003eShellBackend b-\u003ea-\u003eIO a",
        "package": "Shellac",
        "partial": "Shell",
        "signature": "ShellDescription st-\u003eShellBackend bst-\u003est-\u003eIO st"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Shellac/docs/System-Console-Shell.html#v:secondaryPrompt",
      "description": {
        "fct-descr": "\u003cp\u003eA command to generate the secondary prompt.  The secondary\n   prompt is used for multi-line input.  If not set, the\n   regular prompt is used instead.\n\u003c/p\u003e",
        "fct-module": "System.Console.Shell",
        "fct-package": "Shellac",
        "fct-signature": "Maybe (st -\u003e IO String)",
        "fct-source": "src/System-Console-Shell-Types.html#ShellDescription",
        "fct-type": "function",
        "title": "secondaryPrompt"
      },
      "index": {
        "description": "command to generate the secondary prompt The secondary prompt is used for multi-line input If not set the regular prompt is used instead",
        "hierarchy": "System Console Shell",
        "module": "System.Console.Shell",
        "name": "secondaryPrompt",
        "normalized": "Maybe(a-\u003eIO String)",
        "package": "Shellac",
        "partial": "Prompt",
        "signature": "Maybe(st-\u003eIO String)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Shellac/docs/System-Console-Shell.html#v:shellCommands",
      "description": {
        "fct-descr": "\u003cp\u003eCommands for this shell\n\u003c/p\u003e",
        "fct-module": "System.Console.Shell",
        "fct-package": "Shellac",
        "fct-signature": "[ShellCommand st]",
        "fct-source": "src/System-Console-Shell-Types.html#ShellDescription",
        "fct-type": "function",
        "title": "shellCommands"
      },
      "index": {
        "description": "Commands for this shell",
        "hierarchy": "System Console Shell",
        "module": "System.Console.Shell",
        "name": "shellCommands",
        "normalized": "[ShellCommand a]",
        "package": "Shellac",
        "partial": "Commands",
        "signature": "[ShellCommand st]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Shellac/docs/System-Console-Shell.html#v:showCmdHelp",
      "description": {
        "fct-descr": "\u003cp\u003ePrint the help message for a particular shell command\n\u003c/p\u003e",
        "fct-module": "System.Console.Shell",
        "fct-package": "Shellac",
        "fct-signature": "ShellDescription st -\u003e String -\u003e String",
        "fct-source": "src/System-Console-Shell-Commands.html#showCmdHelp",
        "fct-type": "function",
        "title": "showCmdHelp"
      },
      "index": {
        "description": "Print the help message for particular shell command",
        "hierarchy": "System Console Shell",
        "module": "System.Console.Shell",
        "name": "showCmdHelp",
        "normalized": "ShellDescription a-\u003eString-\u003eString",
        "package": "Shellac",
        "partial": "Cmd Help",
        "signature": "ShellDescription st-\u003eString-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Shellac/docs/System-Console-Shell.html#v:showShellHelp",
      "description": {
        "fct-descr": "\u003cp\u003ePrints the help message for this shell, which lists all avaliable\n   commands with their syntax and a short informative message about each.\n\u003c/p\u003e",
        "fct-module": "System.Console.Shell",
        "fct-package": "Shellac",
        "fct-signature": "ShellDescription st -\u003e String",
        "fct-source": "src/System-Console-Shell-Commands.html#showShellHelp",
        "fct-type": "function",
        "title": "showShellHelp"
      },
      "index": {
        "description": "Prints the help message for this shell which lists all avaliable commands with their syntax and short informative message about each",
        "hierarchy": "System Console Shell",
        "module": "System.Console.Shell",
        "name": "showShellHelp",
        "normalized": "ShellDescription a-\u003eString",
        "package": "Shellac",
        "partial": "Shell Help",
        "signature": "ShellDescription st-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Shellac/docs/System-Console-Shell.html#v:simpleSubshell",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a simple subshell from a state mapping function\n   and a shell description.\n\u003c/p\u003e",
        "fct-module": "System.Console.Shell",
        "fct-package": "Shellac",
        "fct-signature": "(st -\u003e IO st')-\u003e ShellDescription st'-\u003e IO (Subshell st st')",
        "fct-type": "function",
        "title": "simpleSubshell"
      },
      "index": {
        "description": "Creates simple subshell from state mapping function and shell description",
        "hierarchy": "System Console Shell",
        "module": "System.Console.Shell",
        "name": "simpleSubshell",
        "normalized": "(a-\u003eIO b)-\u003eShellDescription b-\u003eIO(Subshell a b)",
        "package": "Shellac",
        "partial": "Subshell",
        "signature": "(st-\u003eIO st')-\u003eShellDescription st'-\u003eIO(Subshell st st')"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Shellac/docs/System-Console-Shell.html#v:toggle",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a command to toggle a boolean value\n\u003c/p\u003e",
        "fct-module": "System.Console.Shell",
        "fct-package": "Shellac",
        "fct-signature": "String-\u003e String-\u003e (st -\u003e Bool)-\u003e (Bool -\u003e st -\u003e st)-\u003e ShellCommand st",
        "fct-type": "function",
        "title": "toggle"
      },
      "index": {
        "description": "Creates command to toggle boolean value",
        "hierarchy": "System Console Shell",
        "module": "System.Console.Shell",
        "name": "toggle",
        "normalized": "String-\u003eString-\u003e(a-\u003eBool)-\u003e(Bool-\u003ea-\u003ea)-\u003eShellCommand a",
        "package": "Shellac",
        "partial": "",
        "signature": "String-\u003eString-\u003e(st-\u003eBool)-\u003e(Bool-\u003est-\u003est)-\u003eShellCommand st"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Shellac/docs/System-Console-Shell.html#v:wordBreakChars",
      "description": {
        "fct-descr": "\u003cp\u003eThe characters upon which the backend will break words\n\u003c/p\u003e",
        "fct-module": "System.Console.Shell",
        "fct-package": "Shellac",
        "fct-signature": "[Char]",
        "fct-source": "src/System-Console-Shell-Types.html#ShellDescription",
        "fct-type": "function",
        "title": "wordBreakChars"
      },
      "index": {
        "description": "The characters upon which the backend will break words",
        "hierarchy": "System Console Shell",
        "module": "System.Console.Shell",
        "name": "wordBreakChars",
        "normalized": "[Char]",
        "package": "Shellac",
        "partial": "Break Chars",
        "signature": "[Char]"
      }
    }
  }
]