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
        "word": "haskeline"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Haskeline.Completion",
          "name": "Completion",
          "package": "haskeline",
          "source": "src/System-Console-Haskeline-Completion.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "System Console Haskeline Completion",
          "module": "System.Console.Haskeline.Completion",
          "name": "Completion",
          "package": "haskeline",
          "partial": "Completion",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haskeline/docs/System-Console-Haskeline-Completion.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Haskeline.Completion",
          "name": "Completion",
          "package": "haskeline",
          "source": "src/System-Console-Haskeline-Completion.html#Completion",
          "type": "data"
        },
        "index": {
          "hierarchy": "System Console Haskeline Completion",
          "module": "System.Console.Haskeline.Completion",
          "name": "Completion",
          "package": "haskeline",
          "partial": "Completion",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskeline/docs/System-Console-Haskeline-Completion.html#t:Completion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerforms completions from the given line state.\n\u003c/p\u003e\u003cp\u003eThe first \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e argument is the contents of the line to the left of the cursor,\n reversed.\n The second \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e argument is the contents of the line to the right of the cursor.\n\u003c/p\u003e\u003cp\u003eThe output \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e is the unused portion of the left half of the line, reversed.\n\u003c/p\u003e",
          "module": "System.Console.Haskeline.Completion",
          "name": "CompletionFunc",
          "package": "haskeline",
          "source": "src/System-Console-Haskeline-Completion.html#CompletionFunc",
          "type": "type"
        },
        "index": {
          "description": "Performs completions from the given line state The first String argument is the contents of the line to the left of the cursor reversed The second String argument is the contents of the line to the right of the cursor The output String is the unused portion of the left half of the line reversed",
          "hierarchy": "System Console Haskeline Completion",
          "module": "System.Console.Haskeline.Completion",
          "name": "CompletionFunc",
          "package": "haskeline",
          "partial": "Completion Func",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskeline/docs/System-Console-Haskeline-Completion.html#t:CompletionFunc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Haskeline.Completion",
          "name": "Completion",
          "package": "haskeline",
          "signature": "Completion",
          "source": "src/System-Console-Haskeline-Completion.html#Completion",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Haskeline Completion",
          "module": "System.Console.Haskeline.Completion",
          "name": "Completion",
          "package": "haskeline",
          "partial": "Completion",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskeline/docs/System-Console-Haskeline-Completion.html#v:Completion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Haskeline.Completion",
          "name": "completeFilename",
          "package": "haskeline",
          "signature": "CompletionFunc m",
          "source": "src/System-Console-Haskeline-Completion.html#completeFilename",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Haskeline Completion",
          "module": "System.Console.Haskeline.Completion",
          "name": "completeFilename",
          "package": "haskeline",
          "partial": "Filename",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskeline/docs/System-Console-Haskeline-Completion.html#v:completeFilename"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Haskeline.Completion",
          "name": "completeQuotedWord",
          "package": "haskeline",
          "signature": "Maybe Char-\u003e [Char]-\u003e (String -\u003e m [Completion])-\u003e CompletionFunc m-\u003e CompletionFunc m",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Haskeline Completion",
          "module": "System.Console.Haskeline.Completion",
          "name": "completeQuotedWord",
          "normalized": "Maybe Char-\u003e[Char]-\u003e(String-\u003ea[Completion])-\u003eCompletionFunc a-\u003eCompletionFunc a",
          "package": "haskeline",
          "partial": "Quoted Word",
          "signature": "Maybe Char-\u003e[Char]-\u003e(String-\u003em[Completion])-\u003eCompletionFunc m-\u003eCompletionFunc m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskeline/docs/System-Console-Haskeline-Completion.html#v:completeQuotedWord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA custom \u003ccode\u003e\u003ca\u003eCompletionFunc\u003c/a\u003e\u003c/code\u003e which completes the word immediately to the left of the cursor.\n\u003c/p\u003e\u003cp\u003eA word begins either at the start of the line or after an unescaped whitespace character.\n\u003c/p\u003e",
          "module": "System.Console.Haskeline.Completion",
          "name": "completeWord",
          "package": "haskeline",
          "signature": "Maybe Char-\u003e [Char]-\u003e (String -\u003e m [Completion])-\u003e CompletionFunc m",
          "type": "function"
        },
        "index": {
          "description": "custom CompletionFunc which completes the word immediately to the left of the cursor word begins either at the start of the line or after an unescaped whitespace character",
          "hierarchy": "System Console Haskeline Completion",
          "module": "System.Console.Haskeline.Completion",
          "name": "completeWord",
          "normalized": "Maybe Char-\u003e[Char]-\u003e(String-\u003ea[Completion])-\u003eCompletionFunc a",
          "package": "haskeline",
          "partial": "Word",
          "signature": "Maybe Char-\u003e[Char]-\u003e(String-\u003em[Completion])-\u003eCompletionFunc m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskeline/docs/System-Console-Haskeline-Completion.html#v:completeWord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA custom \u003ccode\u003e\u003ca\u003eCompletionFunc\u003c/a\u003e\u003c/code\u003e which completes the word immediately to the left of the cursor,\n and takes into account the line contents to the left of the word.\n\u003c/p\u003e\u003cp\u003eA word begins either at the start of the line or after an unescaped whitespace character.\n\u003c/p\u003e",
          "module": "System.Console.Haskeline.Completion",
          "name": "completeWordWithPrev",
          "package": "haskeline",
          "signature": "Maybe Char-\u003e [Char]-\u003e (String -\u003e String -\u003e m [Completion])-\u003e CompletionFunc m",
          "type": "function"
        },
        "index": {
          "description": "custom CompletionFunc which completes the word immediately to the left of the cursor and takes into account the line contents to the left of the word word begins either at the start of the line or after an unescaped whitespace character",
          "hierarchy": "System Console Haskeline Completion",
          "module": "System.Console.Haskeline.Completion",
          "name": "completeWordWithPrev",
          "normalized": "Maybe Char-\u003e[Char]-\u003e(String-\u003eString-\u003ea[Completion])-\u003eCompletionFunc a",
          "package": "haskeline",
          "partial": "Word With Prev",
          "signature": "Maybe Char-\u003e[Char]-\u003e(String-\u003eString-\u003em[Completion])-\u003eCompletionFunc m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskeline/docs/System-Console-Haskeline-Completion.html#v:completeWordWithPrev"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eText to display when listing\n alternatives.\n\u003c/p\u003e",
          "module": "System.Console.Haskeline.Completion",
          "name": "display",
          "package": "haskeline",
          "signature": "String",
          "source": "src/System-Console-Haskeline-Completion.html#Completion",
          "type": "function"
        },
        "index": {
          "description": "Text to display when listing alternatives",
          "hierarchy": "System Console Haskeline Completion",
          "module": "System.Console.Haskeline.Completion",
          "name": "display",
          "package": "haskeline",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskeline/docs/System-Console-Haskeline-Completion.html#v:display"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Haskeline.Completion",
          "name": "filenameWordBreakChars",
          "package": "haskeline",
          "signature": "String",
          "source": "src/System-Console-Haskeline-Completion.html#filenameWordBreakChars",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Haskeline Completion",
          "module": "System.Console.Haskeline.Completion",
          "name": "filenameWordBreakChars",
          "package": "haskeline",
          "partial": "Word Break Chars",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskeline/docs/System-Console-Haskeline-Completion.html#v:filenameWordBreakChars"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhether this word should be followed by a\n space, end quote, etc.\n\u003c/p\u003e",
          "module": "System.Console.Haskeline.Completion",
          "name": "isFinished",
          "package": "haskeline",
          "signature": "Bool",
          "source": "src/System-Console-Haskeline-Completion.html#Completion",
          "type": "function"
        },
        "index": {
          "description": "Whether this word should be followed by space end quote etc",
          "hierarchy": "System Console Haskeline Completion",
          "module": "System.Console.Haskeline.Completion",
          "name": "isFinished",
          "package": "haskeline",
          "partial": "Finished",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskeline/docs/System-Console-Haskeline-Completion.html#v:isFinished"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList all of the files or folders beginning with this path.\n\u003c/p\u003e",
          "module": "System.Console.Haskeline.Completion",
          "name": "listFiles",
          "package": "haskeline",
          "signature": "FilePath -\u003e m [Completion]",
          "source": "src/System-Console-Haskeline-Completion.html#listFiles",
          "type": "function"
        },
        "index": {
          "description": "List all of the files or folders beginning with this path",
          "hierarchy": "System Console Haskeline Completion",
          "module": "System.Console.Haskeline.Completion",
          "name": "listFiles",
          "normalized": "FilePath-\u003ea[Completion]",
          "package": "haskeline",
          "partial": "Files",
          "signature": "FilePath-\u003em[Completion]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskeline/docs/System-Console-Haskeline-Completion.html#v:listFiles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDisable completion altogether.\n\u003c/p\u003e",
          "module": "System.Console.Haskeline.Completion",
          "name": "noCompletion",
          "package": "haskeline",
          "signature": "CompletionFunc m",
          "source": "src/System-Console-Haskeline-Completion.html#noCompletion",
          "type": "function"
        },
        "index": {
          "description": "Disable completion altogether",
          "hierarchy": "System Console Haskeline Completion",
          "module": "System.Console.Haskeline.Completion",
          "name": "noCompletion",
          "package": "haskeline",
          "partial": "Completion",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskeline/docs/System-Console-Haskeline-Completion.html#v:noCompletion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eText to insert in line.\n\u003c/p\u003e",
          "module": "System.Console.Haskeline.Completion",
          "name": "replacement",
          "package": "haskeline",
          "signature": "String",
          "source": "src/System-Console-Haskeline-Completion.html#Completion",
          "type": "function"
        },
        "index": {
          "description": "Text to insert in line",
          "hierarchy": "System Console Haskeline Completion",
          "module": "System.Console.Haskeline.Completion",
          "name": "replacement",
          "package": "haskeline",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskeline/docs/System-Console-Haskeline-Completion.html#v:replacement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a finished completion out of the given word.\n\u003c/p\u003e",
          "module": "System.Console.Haskeline.Completion",
          "name": "simpleCompletion",
          "package": "haskeline",
          "signature": "String -\u003e Completion",
          "source": "src/System-Console-Haskeline-Completion.html#simpleCompletion",
          "type": "function"
        },
        "index": {
          "description": "Create finished completion out of the given word",
          "hierarchy": "System Console Haskeline Completion",
          "module": "System.Console.Haskeline.Completion",
          "name": "simpleCompletion",
          "normalized": "String-\u003eCompletion",
          "package": "haskeline",
          "partial": "Completion",
          "signature": "String-\u003eCompletion",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskeline/docs/System-Console-Haskeline-Completion.html#v:simpleCompletion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides a low-level API to the line history stored in the \u003ccode\u003eInputT\u003c/code\u003e monad transformer.\n\u003c/p\u003e\u003cp\u003eFor most application, it should suffice to instead use the following \u003ccode\u003eSettings\u003c/code\u003e flags:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003eautoAddHistory\u003c/code\u003e: add nonblank lines to the command history (\u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e by default).\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003ehistoryFile\u003c/code\u003e: read/write the history to a file before and after the line input session.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eIf you do want custom history behavior, you may need to disable the above default setting(s).\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Console.Haskeline.History",
          "name": "History",
          "package": "haskeline",
          "source": "src/System-Console-Haskeline-History.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides low-level API to the line history stored in the InputT monad transformer For most application it should suffice to instead use the following Settings flags autoAddHistory add nonblank lines to the command history True by default historyFile read write the history to file before and after the line input session If you do want custom history behavior you may need to disable the above default setting",
          "hierarchy": "System Console Haskeline History",
          "module": "System.Console.Haskeline.History",
          "name": "History",
          "package": "haskeline",
          "partial": "History",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haskeline/docs/System-Console-Haskeline-History.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Haskeline.History",
          "name": "History",
          "package": "haskeline",
          "source": "src/System-Console-Haskeline-History.html#History",
          "type": "data"
        },
        "index": {
          "hierarchy": "System Console Haskeline History",
          "module": "System.Console.Haskeline.History",
          "name": "History",
          "package": "haskeline",
          "partial": "History",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskeline/docs/System-Console-Haskeline-History.html#t:History"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Haskeline.History",
          "name": "addHistory",
          "package": "haskeline",
          "signature": "String -\u003e History -\u003e History",
          "source": "src/System-Console-Haskeline-History.html#addHistory",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Haskeline History",
          "module": "System.Console.Haskeline.History",
          "name": "addHistory",
          "normalized": "String-\u003eHistory-\u003eHistory",
          "package": "haskeline",
          "partial": "History",
          "signature": "String-\u003eHistory-\u003eHistory",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskeline/docs/System-Console-Haskeline-History.html#v:addHistory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd a line to the history, and remove all previous entries which are the \n same as it.\n\u003c/p\u003e",
          "module": "System.Console.Haskeline.History",
          "name": "addHistoryRemovingAllDupes",
          "package": "haskeline",
          "signature": "String -\u003e History -\u003e History",
          "source": "src/System-Console-Haskeline-History.html#addHistoryRemovingAllDupes",
          "type": "function"
        },
        "index": {
          "description": "Add line to the history and remove all previous entries which are the same as it",
          "hierarchy": "System Console Haskeline History",
          "module": "System.Console.Haskeline.History",
          "name": "addHistoryRemovingAllDupes",
          "normalized": "String-\u003eHistory-\u003eHistory",
          "package": "haskeline",
          "partial": "History Removing All Dupes",
          "signature": "String-\u003eHistory-\u003eHistory",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskeline/docs/System-Console-Haskeline-History.html#v:addHistoryRemovingAllDupes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd a line to the history unless it matches the previously recorded line.\n\u003c/p\u003e",
          "module": "System.Console.Haskeline.History",
          "name": "addHistoryUnlessConsecutiveDupe",
          "package": "haskeline",
          "signature": "String -\u003e History -\u003e History",
          "source": "src/System-Console-Haskeline-History.html#addHistoryUnlessConsecutiveDupe",
          "type": "function"
        },
        "index": {
          "description": "Add line to the history unless it matches the previously recorded line",
          "hierarchy": "System Console Haskeline History",
          "module": "System.Console.Haskeline.History",
          "name": "addHistoryUnlessConsecutiveDupe",
          "normalized": "String-\u003eHistory-\u003eHistory",
          "package": "haskeline",
          "partial": "History Unless Consecutive Dupe",
          "signature": "String-\u003eHistory-\u003eHistory",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskeline/docs/System-Console-Haskeline-History.html#v:addHistoryUnlessConsecutiveDupe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Haskeline.History",
          "name": "emptyHistory",
          "package": "haskeline",
          "signature": "History",
          "source": "src/System-Console-Haskeline-History.html#emptyHistory",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Haskeline History",
          "module": "System.Console.Haskeline.History",
          "name": "emptyHistory",
          "package": "haskeline",
          "partial": "History",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskeline/docs/System-Console-Haskeline-History.html#v:emptyHistory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe input lines stored in the history (newest first)\n\u003c/p\u003e",
          "module": "System.Console.Haskeline.History",
          "name": "historyLines",
          "package": "haskeline",
          "signature": "History -\u003e [String]",
          "source": "src/System-Console-Haskeline-History.html#historyLines",
          "type": "function"
        },
        "index": {
          "description": "The input lines stored in the history newest first",
          "hierarchy": "System Console Haskeline History",
          "module": "System.Console.Haskeline.History",
          "name": "historyLines",
          "normalized": "History-\u003e[String]",
          "package": "haskeline",
          "partial": "Lines",
          "signature": "History-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskeline/docs/System-Console-Haskeline-History.html#v:historyLines"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReads the line input history from the given file.  Returns\n \u003ccode\u003e\u003ca\u003eemptyHistory\u003c/a\u003e\u003c/code\u003e if the file does not exist or could not be read.\n\u003c/p\u003e",
          "module": "System.Console.Haskeline.History",
          "name": "readHistory",
          "package": "haskeline",
          "signature": "FilePath -\u003e IO History",
          "source": "src/System-Console-Haskeline-History.html#readHistory",
          "type": "function"
        },
        "index": {
          "description": "Reads the line input history from the given file Returns emptyHistory if the file does not exist or could not be read",
          "hierarchy": "System Console Haskeline History",
          "module": "System.Console.Haskeline.History",
          "name": "readHistory",
          "normalized": "FilePath-\u003eIO History",
          "package": "haskeline",
          "partial": "History",
          "signature": "FilePath-\u003eIO History",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskeline/docs/System-Console-Haskeline-History.html#v:readHistory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe maximum number of lines stored in the history.  If \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e, the history storage is unlimited.\n\u003c/p\u003e",
          "module": "System.Console.Haskeline.History",
          "name": "stifleAmount",
          "package": "haskeline",
          "signature": "History -\u003e Maybe Int",
          "source": "src/System-Console-Haskeline-History.html#stifleAmount",
          "type": "function"
        },
        "index": {
          "description": "The maximum number of lines stored in the history If Nothing the history storage is unlimited",
          "hierarchy": "System Console Haskeline History",
          "module": "System.Console.Haskeline.History",
          "name": "stifleAmount",
          "normalized": "History-\u003eMaybe Int",
          "package": "haskeline",
          "partial": "Amount",
          "signature": "History-\u003eMaybe Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskeline/docs/System-Console-Haskeline-History.html#v:stifleAmount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLimit the number of lines stored in the history.\n\u003c/p\u003e",
          "module": "System.Console.Haskeline.History",
          "name": "stifleHistory",
          "package": "haskeline",
          "signature": "Maybe Int -\u003e History -\u003e History",
          "source": "src/System-Console-Haskeline-History.html#stifleHistory",
          "type": "function"
        },
        "index": {
          "description": "Limit the number of lines stored in the history",
          "hierarchy": "System Console Haskeline History",
          "module": "System.Console.Haskeline.History",
          "name": "stifleHistory",
          "normalized": "Maybe Int-\u003eHistory-\u003eHistory",
          "package": "haskeline",
          "partial": "History",
          "signature": "Maybe Int-\u003eHistory-\u003eHistory",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskeline/docs/System-Console-Haskeline-History.html#v:stifleHistory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrites the line history to the given file.  If there is an\n error when writing the file, it will be ignored.\n\u003c/p\u003e",
          "module": "System.Console.Haskeline.History",
          "name": "writeHistory",
          "package": "haskeline",
          "signature": "FilePath -\u003e History -\u003e IO ()",
          "source": "src/System-Console-Haskeline-History.html#writeHistory",
          "type": "function"
        },
        "index": {
          "description": "Writes the line history to the given file If there is an error when writing the file it will be ignored",
          "hierarchy": "System Console Haskeline History",
          "module": "System.Console.Haskeline.History",
          "name": "writeHistory",
          "normalized": "FilePath-\u003eHistory-\u003eIO()",
          "package": "haskeline",
          "partial": "History",
          "signature": "FilePath-\u003eHistory-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskeline/docs/System-Console-Haskeline-History.html#v:writeHistory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides a stateful, IO-based interface to Haskeline, which may be easier to\nintegrate into some existing programs or libraries.\n\u003c/p\u003e\u003cp\u003eIt is strongly recommended to use the safer, monadic API of\n\u003ca\u003eSystem.Console.Haskeline\u003c/a\u003e, if possible, rather than the explicit state management\nfunctions of this module.\n\u003c/p\u003e\u003cp\u003eThe equivalent REPL example is:\n\u003c/p\u003e\u003cpre\u003e\nimport System.Console.Haskeline\nimport System.Console.Haskeline.IO\nimport Control.Concurrent\n\nmain = bracketOnError (initializeInput defaultSettings)\n            cancelInput -- This will only be called if an exception such\n                            -- as a SigINT is received.\n            (\\hd -\u003e loop hd \u003e\u003e closeInput hd)\n    where\n        loop :: InputState -\u003e IO ()\n        loop hd = do\n            minput \u003c- queryInput hd (getInputLine \"% \")\n            case minput of\n                Nothing -\u003e return ()\n                Just \"quit\" -\u003e return ()\n                Just input -\u003e do queryInput hd $ outputStrLn\n                                    $ \"Input was: \" ++ input\n                                 loop hd\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "System.Console.Haskeline.IO",
          "name": "IO",
          "package": "haskeline",
          "source": "src/System-Console-Haskeline-IO.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides stateful IO-based interface to Haskeline which may be easier to integrate into some existing programs or libraries It is strongly recommended to use the safer monadic API of System.Console.Haskeline if possible rather than the explicit state management functions of this module The equivalent REPL example is import System.Console.Haskeline import System.Console.Haskeline.IO import Control.Concurrent main bracketOnError initializeInput defaultSettings cancelInput This will only be called if an exception such as SigINT is received hd loop hd closeInput hd where loop InputState IO loop hd do minput queryInput hd getInputLine case minput of Nothing return Just quit return Just input do queryInput hd outputStrLn Input was input loop hd",
          "hierarchy": "System Console Haskeline IO",
          "module": "System.Console.Haskeline.IO",
          "name": "IO",
          "package": "haskeline",
          "partial": "IO",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haskeline/docs/System-Console-Haskeline-IO.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Haskeline.IO",
          "name": "InputState",
          "package": "haskeline",
          "source": "src/System-Console-Haskeline-IO.html#InputState",
          "type": "data"
        },
        "index": {
          "hierarchy": "System Console Haskeline IO",
          "module": "System.Console.Haskeline.IO",
          "name": "InputState",
          "package": "haskeline",
          "partial": "Input State",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskeline/docs/System-Console-Haskeline-IO.html#t:InputState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCancel and clean up the user interaction session.  Does not block on an existing\n call to \u003ccode\u003e\u003ca\u003equeryInput\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Console.Haskeline.IO",
          "name": "cancelInput",
          "package": "haskeline",
          "signature": "InputState -\u003e IO ()",
          "source": "src/System-Console-Haskeline-IO.html#cancelInput",
          "type": "function"
        },
        "index": {
          "description": "Cancel and clean up the user interaction session Does not block on an existing call to queryInput",
          "hierarchy": "System Console Haskeline IO",
          "module": "System.Console.Haskeline.IO",
          "name": "cancelInput",
          "normalized": "InputState-\u003eIO()",
          "package": "haskeline",
          "partial": "Input",
          "signature": "InputState-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskeline/docs/System-Console-Haskeline-IO.html#v:cancelInput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFinish and clean up the line-oriented user interaction session.  Blocks on an\n existing call to \u003ccode\u003e\u003ca\u003equeryInput\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Console.Haskeline.IO",
          "name": "closeInput",
          "package": "haskeline",
          "signature": "InputState -\u003e IO ()",
          "source": "src/System-Console-Haskeline-IO.html#closeInput",
          "type": "function"
        },
        "index": {
          "description": "Finish and clean up the line-oriented user interaction session Blocks on an existing call to queryInput",
          "hierarchy": "System Console Haskeline IO",
          "module": "System.Console.Haskeline.IO",
          "name": "closeInput",
          "normalized": "InputState-\u003eIO()",
          "package": "haskeline",
          "partial": "Input",
          "signature": "InputState-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskeline/docs/System-Console-Haskeline-IO.html#v:closeInput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInitialize a session of line-oriented user interaction.\n\u003c/p\u003e",
          "module": "System.Console.Haskeline.IO",
          "name": "initializeInput",
          "package": "haskeline",
          "signature": "Settings IO -\u003e IO InputState",
          "source": "src/System-Console-Haskeline-IO.html#initializeInput",
          "type": "function"
        },
        "index": {
          "description": "Initialize session of line-oriented user interaction",
          "hierarchy": "System Console Haskeline IO",
          "module": "System.Console.Haskeline.IO",
          "name": "initializeInput",
          "normalized": "Settings IO-\u003eIO InputState",
          "package": "haskeline",
          "partial": "Input",
          "signature": "Settings IO-\u003eIO InputState",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskeline/docs/System-Console-Haskeline-IO.html#v:initializeInput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun one action (for example, \u003ccode\u003e\u003ca\u003egetInputLine\u003c/a\u003e\u003c/code\u003e) as part of a session of user interaction.\n\u003c/p\u003e\u003cp\u003eFor example, multiple calls to \u003ccode\u003e\u003ca\u003equeryInput\u003c/a\u003e\u003c/code\u003e using the same \u003ccode\u003e\u003ca\u003eInputState\u003c/a\u003e\u003c/code\u003e will share\n the same input history.  In constrast, multiple calls to \u003ccode\u003e\u003ca\u003erunInputT\u003c/a\u003e\u003c/code\u003e will use distinct\n histories unless they share the same history file.\n\u003c/p\u003e\u003cp\u003eThis function should not be called on a closed or cancelled \u003ccode\u003e\u003ca\u003eInputState\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Console.Haskeline.IO",
          "name": "queryInput",
          "package": "haskeline",
          "signature": "InputState -\u003e InputT IO a -\u003e IO a",
          "source": "src/System-Console-Haskeline-IO.html#queryInput",
          "type": "function"
        },
        "index": {
          "description": "Run one action for example getInputLine as part of session of user interaction For example multiple calls to queryInput using the same InputState will share the same input history In constrast multiple calls to runInputT will use distinct histories unless they share the same history file This function should not be called on closed or cancelled InputState",
          "hierarchy": "System Console Haskeline IO",
          "module": "System.Console.Haskeline.IO",
          "name": "queryInput",
          "normalized": "InputState-\u003eInputT IO a-\u003eIO a",
          "package": "haskeline",
          "partial": "Input",
          "signature": "InputState-\u003eInputT IO a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskeline/docs/System-Console-Haskeline-IO.html#v:queryInput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module redefines some of the functions in \u003ca\u003eControl.Exception\u003c/a\u003e to\nwork for more general monads built on top of \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Console.Haskeline.MonadException",
          "name": "MonadException",
          "package": "haskeline",
          "source": "src/System-Console-Haskeline-MonadException.html",
          "type": "module"
        },
        "index": {
          "description": "This module redefines some of the functions in Control.Exception to work for more general monads built on top of IO",
          "hierarchy": "System Console Haskeline MonadException",
          "module": "System.Console.Haskeline.MonadException",
          "name": "MonadException",
          "package": "haskeline",
          "partial": "Monad Exception",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haskeline/docs/System-Console-Haskeline-MonadException.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAny type that you wish to throw or catch as an exception must be an\ninstance of the \u003ccode\u003eException\u003c/code\u003e class. The simplest case is a new exception\ntype directly below the root:\n\u003c/p\u003e\u003cpre\u003e data MyException = ThisException | ThatException\n     deriving (Show, Typeable)\n\n instance Exception MyException\n\u003c/pre\u003e\u003cp\u003eThe default method definitions in the \u003ccode\u003eException\u003c/code\u003e class do what we need\nin this case. You can now throw and catch \u003ccode\u003eThisException\u003c/code\u003e and\n\u003ccode\u003eThatException\u003c/code\u003e as exceptions:\n\u003c/p\u003e\u003cpre\u003e\n*Main\u003e throw ThisException `catch` \\e -\u003e putStrLn (\"Caught \" ++ show (e :: MyException))\nCaught ThisException\n\u003c/pre\u003e\u003cp\u003eIn more complicated examples, you may wish to define a whole hierarchy\nof exceptions:\n\u003c/p\u003e\u003cpre\u003e ---------------------------------------------------------------------\n -- Make the root exception type for all the exceptions in a compiler\n\n data SomeCompilerException = forall e . Exception e =\u003e SomeCompilerException e\n     deriving Typeable\n\n instance Show SomeCompilerException where\n     show (SomeCompilerException e) = show e\n\n instance Exception SomeCompilerException\n\n compilerExceptionToException :: Exception e =\u003e e -\u003e SomeException\n compilerExceptionToException = toException . SomeCompilerException\n\n compilerExceptionFromException :: Exception e =\u003e SomeException -\u003e Maybe e\n compilerExceptionFromException x = do\n     SomeCompilerException a \u003c- fromException x\n     cast a\n\n ---------------------------------------------------------------------\n -- Make a subhierarchy for exceptions in the frontend of the compiler\n\n data SomeFrontendException = forall e . Exception e =\u003e SomeFrontendException e\n     deriving Typeable\n\n instance Show SomeFrontendException where\n     show (SomeFrontendException e) = show e\n\n instance Exception SomeFrontendException where\n     toException = compilerExceptionToException\n     fromException = compilerExceptionFromException\n\n frontendExceptionToException :: Exception e =\u003e e -\u003e SomeException\n frontendExceptionToException = toException . SomeFrontendException\n\n frontendExceptionFromException :: Exception e =\u003e SomeException -\u003e Maybe e\n frontendExceptionFromException x = do\n     SomeFrontendException a \u003c- fromException x\n     cast a\n\n ---------------------------------------------------------------------\n -- Make an exception type for a particular frontend compiler exception\n\n data MismatchedParentheses = MismatchedParentheses\n     deriving (Typeable, Show)\n\n instance Exception MismatchedParentheses where\n     toException   = frontendExceptionToException\n     fromException = frontendExceptionFromException\n\u003c/pre\u003e\u003cp\u003eWe can now catch a \u003ccode\u003eMismatchedParentheses\u003c/code\u003e exception as\n\u003ccode\u003eMismatchedParentheses\u003c/code\u003e, \u003ccode\u003eSomeFrontendException\u003c/code\u003e or\n\u003ccode\u003eSomeCompilerException\u003c/code\u003e, but not other types, e.g. \u003ccode\u003eIOException\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e\n*Main\u003e throw MismatchedParentheses \u003ccode\u003ecatch\u003c/code\u003e e -\u003e putStrLn (\"Caught \" ++ show (e :: MismatchedParentheses))\nCaught MismatchedParentheses\n*Main\u003e throw MismatchedParentheses \u003ccode\u003ecatch\u003c/code\u003e e -\u003e putStrLn (\"Caught \" ++ show (e :: SomeFrontendException))\nCaught MismatchedParentheses\n*Main\u003e throw MismatchedParentheses \u003ccode\u003ecatch\u003c/code\u003e e -\u003e putStrLn (\"Caught \" ++ show (e :: SomeCompilerException))\nCaught MismatchedParentheses\n*Main\u003e throw MismatchedParentheses \u003ccode\u003ecatch\u003c/code\u003e e -\u003e putStrLn (\"Caught \" ++ show (e :: IOException))\n*** Exception: MismatchedParentheses\n\u003c/pre\u003e",
          "module": "System.Console.Haskeline.MonadException",
          "name": "Exception",
          "package": "haskeline",
          "type": "class"
        },
        "index": {
          "description": "Any type that you wish to throw or catch as an exception must be an instance of the Exception class The simplest case is new exception type directly below the root data MyException ThisException ThatException deriving Show Typeable instance Exception MyException The default method definitions in the Exception class do what we need in this case You can now throw and catch ThisException and ThatException as exceptions Main throw ThisException catch putStrLn Caught show MyException Caught ThisException In more complicated examples you may wish to define whole hierarchy of exceptions Make the root exception type for all the exceptions in compiler data SomeCompilerException forall Exception SomeCompilerException deriving Typeable instance Show SomeCompilerException where show SomeCompilerException show instance Exception SomeCompilerException compilerExceptionToException Exception SomeException compilerExceptionToException toException SomeCompilerException compilerExceptionFromException Exception SomeException Maybe compilerExceptionFromException do SomeCompilerException fromException cast Make subhierarchy for exceptions in the frontend of the compiler data SomeFrontendException forall Exception SomeFrontendException deriving Typeable instance Show SomeFrontendException where show SomeFrontendException show instance Exception SomeFrontendException where toException compilerExceptionToException fromException compilerExceptionFromException frontendExceptionToException Exception SomeException frontendExceptionToException toException SomeFrontendException frontendExceptionFromException Exception SomeException Maybe frontendExceptionFromException do SomeFrontendException fromException cast Make an exception type for particular frontend compiler exception data MismatchedParentheses MismatchedParentheses deriving Typeable Show instance Exception MismatchedParentheses where toException frontendExceptionToException fromException frontendExceptionFromException We can now catch MismatchedParentheses exception as MismatchedParentheses SomeFrontendException or SomeCompilerException but not other types e.g IOException Main throw MismatchedParentheses catch putStrLn Caught show MismatchedParentheses Caught MismatchedParentheses Main throw MismatchedParentheses catch putStrLn Caught show SomeFrontendException Caught MismatchedParentheses Main throw MismatchedParentheses catch putStrLn Caught show SomeCompilerException Caught MismatchedParentheses Main throw MismatchedParentheses catch putStrLn Caught show IOException Exception MismatchedParentheses",
          "hierarchy": "System Console Haskeline MonadException",
          "module": "System.Console.Haskeline.MonadException",
          "name": "Exception",
          "package": "haskeline",
          "partial": "Exception",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/haskeline/docs/System-Console-Haskeline-MonadException.html#t:Exception"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Haskeline.MonadException",
          "name": "Handler",
          "package": "haskeline",
          "source": "src/System-Console-Haskeline-MonadException.html#Handler",
          "type": "data"
        },
        "index": {
          "hierarchy": "System Console Haskeline MonadException",
          "module": "System.Console.Haskeline.MonadException",
          "name": "Handler",
          "package": "haskeline",
          "partial": "Handler",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskeline/docs/System-Console-Haskeline-MonadException.html#t:Handler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExceptions that occur in the \u003ccode\u003eIO\u003c/code\u003e monad.\n An \u003ccode\u003eIOException\u003c/code\u003e records a more specific error type, a descriptive\n string and maybe the handle that was used when the error was\n flagged.\n\u003c/p\u003e",
          "module": "System.Console.Haskeline.MonadException",
          "name": "IOException",
          "package": "haskeline",
          "type": "data"
        },
        "index": {
          "description": "Exceptions that occur in the IO monad An IOException records more specific error type descriptive string and maybe the handle that was used when the error was flagged",
          "hierarchy": "System Console Haskeline MonadException",
          "module": "System.Console.Haskeline.MonadException",
          "name": "IOException",
          "package": "haskeline",
          "partial": "IOException",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskeline/docs/System-Console-Haskeline-MonadException.html#t:IOException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn instance of \u003ccode\u003e\u003ca\u003eMonadException\u003c/a\u003e\u003c/code\u003e is generally made up of monad transformers\n layered on top of the IO monad.  \n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003econtrolIO\u003c/a\u003e\u003c/code\u003e method enables us to \"lift\" a function that manages IO actions (such\n as \u003ccode\u003e\u003ca\u003ebracket\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003ecatch\u003c/a\u003e\u003c/code\u003e) into a function that wraps arbitrary monadic actions.\n\u003c/p\u003e",
          "module": "System.Console.Haskeline.MonadException",
          "name": "MonadException",
          "package": "haskeline",
          "source": "src/System-Console-Haskeline-MonadException.html#MonadException",
          "type": "class"
        },
        "index": {
          "description": "An instance of MonadException is generally made up of monad transformers layered on top of the IO monad The controlIO method enables us to lift function that manages IO actions such as bracket or catch into function that wraps arbitrary monadic actions",
          "hierarchy": "System Console Haskeline MonadException",
          "module": "System.Console.Haskeline.MonadException",
          "name": "MonadException",
          "package": "haskeline",
          "partial": "Monad Exception",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/haskeline/docs/System-Console-Haskeline-MonadException.html#t:MonadException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eRunIO\u003c/a\u003e\u003c/code\u003e function takes a monadic action \u003ccode\u003em\u003c/code\u003e as input,\n and outputs an IO action which performs the underlying impure part of \u003ccode\u003em\u003c/code\u003e\n and returns the ''pure'' part of \u003ccode\u003em\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote that \u003ccode\u003e(RunIO return)\u003c/code\u003e is an incorrect implementation, since it does not\n separate the pure and impure parts of the monadic action.  This module defines\n implementations for several common monad transformers.\n\u003c/p\u003e",
          "module": "System.Console.Haskeline.MonadException",
          "name": "RunIO",
          "package": "haskeline",
          "source": "src/System-Console-Haskeline-MonadException.html#RunIO",
          "type": "newtype"
        },
        "index": {
          "description": "RunIO function takes monadic action as input and outputs an IO action which performs the underlying impure part of and returns the pure part of Note that RunIO return is an incorrect implementation since it does not separate the pure and impure parts of the monadic action This module defines implementations for several common monad transformers",
          "hierarchy": "System Console Haskeline MonadException",
          "module": "System.Console.Haskeline.MonadException",
          "name": "RunIO",
          "package": "haskeline",
          "partial": "Run IO",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/haskeline/docs/System-Console-Haskeline-MonadException.html#t:RunIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003eSomeException\u003c/code\u003e type is the root of the exception type hierarchy.\nWhen an exception of type \u003ccode\u003ee\u003c/code\u003e is thrown, behind the scenes it is\nencapsulated in a \u003ccode\u003eSomeException\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Console.Haskeline.MonadException",
          "name": "SomeException",
          "package": "haskeline",
          "type": "data"
        },
        "index": {
          "description": "The SomeException type is the root of the exception type hierarchy When an exception of type is thrown behind the scenes it is encapsulated in SomeException",
          "hierarchy": "System Console Haskeline MonadException",
          "module": "System.Console.Haskeline.MonadException",
          "name": "SomeException",
          "package": "haskeline",
          "partial": "Some Exception",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskeline/docs/System-Console-Haskeline-MonadException.html#t:SomeException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Haskeline.MonadException",
          "name": "Handler",
          "package": "haskeline",
          "signature": "Handler (e -\u003e m a)",
          "source": "src/System-Console-Haskeline-MonadException.html#Handler",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Haskeline MonadException",
          "module": "System.Console.Haskeline.MonadException",
          "name": "Handler",
          "normalized": "Handler(a-\u003eb c)",
          "package": "haskeline",
          "partial": "Handler",
          "signature": "Handler(e-\u003em a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskeline/docs/System-Console-Haskeline-MonadException.html#v:Handler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Haskeline.MonadException",
          "name": "RunIO",
          "package": "haskeline",
          "signature": "RunIO (forall b.  m b -\u003e IO (m b))",
          "source": "src/System-Console-Haskeline-MonadException.html#RunIO",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Haskeline MonadException",
          "module": "System.Console.Haskeline.MonadException",
          "name": "RunIO",
          "normalized": "RunIO(a b c d-\u003eIO(c d))",
          "package": "haskeline",
          "partial": "Run IO",
          "signature": "RunIO(forall b. m b-\u003eIO(m b))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskeline/docs/System-Console-Haskeline-MonadException.html#v:RunIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Haskeline.MonadException",
          "name": "SomeException",
          "package": "haskeline",
          "signature": "e -\u003e SomeException",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Haskeline MonadException",
          "module": "System.Console.Haskeline.MonadException",
          "name": "SomeException",
          "normalized": "a-\u003eSomeException",
          "package": "haskeline",
          "partial": "Some Exception",
          "signature": "e-\u003eSomeException",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskeline/docs/System-Console-Haskeline-MonadException.html#v:SomeException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Haskeline.MonadException",
          "name": "bracket",
          "package": "haskeline",
          "signature": "m a -\u003e (a -\u003e m b) -\u003e (a -\u003e m c) -\u003e m c",
          "source": "src/System-Console-Haskeline-MonadException.html#bracket",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Haskeline MonadException",
          "module": "System.Console.Haskeline.MonadException",
          "name": "bracket",
          "normalized": "a b-\u003e(b-\u003ea c)-\u003e(b-\u003ea d)-\u003ea d",
          "package": "haskeline",
          "signature": "m a-\u003e(a-\u003em b)-\u003e(a-\u003em c)-\u003em c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskeline/docs/System-Console-Haskeline-MonadException.html#v:bracket"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Haskeline.MonadException",
          "name": "catch",
          "package": "haskeline",
          "signature": "m a -\u003e (e -\u003e m a) -\u003e m a",
          "source": "src/System-Console-Haskeline-MonadException.html#catch",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Haskeline MonadException",
          "module": "System.Console.Haskeline.MonadException",
          "name": "catch",
          "normalized": "a b-\u003e(c-\u003ea b)-\u003ea b",
          "package": "haskeline",
          "signature": "m a-\u003e(e-\u003em a)-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskeline/docs/System-Console-Haskeline-MonadException.html#v:catch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Haskeline.MonadException",
          "name": "catches",
          "package": "haskeline",
          "signature": "m a -\u003e [Handler m a] -\u003e m a",
          "source": "src/System-Console-Haskeline-MonadException.html#catches",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Haskeline MonadException",
          "module": "System.Console.Haskeline.MonadException",
          "name": "catches",
          "normalized": "a b-\u003e[Handler a b]-\u003ea b",
          "package": "haskeline",
          "signature": "m a-\u003e[Handler m a]-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskeline/docs/System-Console-Haskeline-MonadException.html#v:catches"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Haskeline.MonadException",
          "name": "controlIO",
          "package": "haskeline",
          "signature": "(RunIO m -\u003e IO (m a)) -\u003e m a",
          "source": "src/System-Console-Haskeline-MonadException.html#controlIO",
          "type": "method"
        },
        "index": {
          "hierarchy": "System Console Haskeline MonadException",
          "module": "System.Console.Haskeline.MonadException",
          "name": "controlIO",
          "normalized": "(RunIO a-\u003eIO(a b))-\u003ea b",
          "package": "haskeline",
          "partial": "IO",
          "signature": "(RunIO m-\u003eIO(m a))-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskeline/docs/System-Console-Haskeline-MonadException.html#v:controlIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Haskeline.MonadException",
          "name": "finally",
          "package": "haskeline",
          "signature": "m a -\u003e m b -\u003e m a",
          "source": "src/System-Console-Haskeline-MonadException.html#finally",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Haskeline MonadException",
          "module": "System.Console.Haskeline.MonadException",
          "name": "finally",
          "normalized": "a b-\u003ea c-\u003ea b",
          "package": "haskeline",
          "signature": "m a-\u003em b-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskeline/docs/System-Console-Haskeline-MonadException.html#v:finally"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Haskeline.MonadException",
          "name": "handle",
          "package": "haskeline",
          "signature": "(e -\u003e m a) -\u003e m a -\u003e m a",
          "source": "src/System-Console-Haskeline-MonadException.html#handle",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Haskeline MonadException",
          "module": "System.Console.Haskeline.MonadException",
          "name": "handle",
          "normalized": "(a-\u003eb c)-\u003eb c-\u003eb c",
          "package": "haskeline",
          "signature": "(e-\u003em a)-\u003em a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskeline/docs/System-Console-Haskeline-MonadException.html#v:handle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift a IO operation\n\u003c/p\u003e\u003cpre\u003e wrap :: (a -\u003e IO b) -\u003e IO b\n\u003c/pre\u003e\u003cp\u003eto a more general monadic operation\n\u003c/p\u003e\u003cpre\u003e liftIOOp wrap :: MonadException m =\u003e (a -\u003e m b) -\u003e m b\n\u003c/pre\u003e\u003cp\u003eFor example: \n\u003c/p\u003e\u003cpre\u003e\n  \u003ccode\u003e\u003ca\u003eliftIOOp\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003ewithFile\u003c/a\u003e\u003c/code\u003e f m) :: MonadException m =\u003e (Handle -\u003e m r) -\u003e m r\n  \u003ccode\u003e\u003ca\u003eliftIOOp\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003ealloca\u003c/a\u003e\u003c/code\u003e :: (MonadException m, Storable a) =\u003e (Ptr a -\u003e m b) -\u003e m b\n  \u003ccode\u003e\u003ca\u003eliftIOOp\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003ewithForeignPtr\u003c/a\u003e\u003c/code\u003e fp) :: MonadException m =\u003e (Ptr a -\u003e m b) -\u003e m b\n\u003c/pre\u003e",
          "module": "System.Console.Haskeline.MonadException",
          "name": "liftIOOp",
          "package": "haskeline",
          "signature": "((a -\u003e IO (m b)) -\u003e IO (m c)) -\u003e (a -\u003e m b) -\u003e m c",
          "source": "src/System-Console-Haskeline-MonadException.html#liftIOOp",
          "type": "function"
        },
        "index": {
          "description": "Lift IO operation wrap IO IO to more general monadic operation liftIOOp wrap MonadException For example liftIOOp withFile MonadException Handle liftIOOp alloca MonadException Storable Ptr liftIOOp withForeignPtr fp MonadException Ptr",
          "hierarchy": "System Console Haskeline MonadException",
          "module": "System.Console.Haskeline.MonadException",
          "name": "liftIOOp",
          "normalized": "((a-\u003eIO(b c))-\u003eIO(b d))-\u003e(a-\u003eb c)-\u003eb d",
          "package": "haskeline",
          "partial": "IOOp",
          "signature": "((a-\u003eIO(m b))-\u003eIO(m c))-\u003e(a-\u003em b)-\u003em c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskeline/docs/System-Console-Haskeline-MonadException.html#v:liftIOOp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift an IO operation\n\u003c/p\u003e\u003cpre\u003e wrap :: IO a -\u003e IO a\n\u003c/pre\u003e\u003cp\u003eto a more general monadic operation\n\u003c/p\u003e\u003cpre\u003e liftIOOp_ wrap :: MonadException m =\u003e m a -\u003e m a\n\u003c/pre\u003e",
          "module": "System.Console.Haskeline.MonadException",
          "name": "liftIOOp_",
          "package": "haskeline",
          "signature": "(IO (m a) -\u003e IO (m a)) -\u003e m a -\u003e m a",
          "source": "src/System-Console-Haskeline-MonadException.html#liftIOOp_",
          "type": "function"
        },
        "index": {
          "description": "Lift an IO operation wrap IO IO to more general monadic operation liftIOOp wrap MonadException",
          "hierarchy": "System Console Haskeline MonadException",
          "module": "System.Console.Haskeline.MonadException",
          "name": "liftIOOp_",
          "normalized": "(IO(a b)-\u003eIO(a b))-\u003ea b-\u003ea b",
          "package": "haskeline",
          "partial": "IOOp",
          "signature": "(IO(m a)-\u003eIO(m a))-\u003em a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskeline/docs/System-Console-Haskeline-MonadException.html#v:liftIOOp_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Haskeline.MonadException",
          "name": "throwIO",
          "package": "haskeline",
          "signature": "e -\u003e m a",
          "source": "src/System-Console-Haskeline-MonadException.html#throwIO",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Haskeline MonadException",
          "module": "System.Console.Haskeline.MonadException",
          "name": "throwIO",
          "normalized": "a-\u003eb c",
          "package": "haskeline",
          "partial": "IO",
          "signature": "e-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskeline/docs/System-Console-Haskeline-MonadException.html#v:throwIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Haskeline.MonadException",
          "name": "throwTo",
          "package": "haskeline",
          "signature": "ThreadId -\u003e e -\u003e m ()",
          "source": "src/System-Console-Haskeline-MonadException.html#throwTo",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Haskeline MonadException",
          "module": "System.Console.Haskeline.MonadException",
          "name": "throwTo",
          "normalized": "ThreadId-\u003ea-\u003eb()",
          "package": "haskeline",
          "partial": "To",
          "signature": "ThreadId-\u003ee-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskeline/docs/System-Console-Haskeline-MonadException.html#v:throwTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA rich user interface for line input in command-line programs.  Haskeline is\nUnicode-aware and runs both on POSIX-compatible systems and on Windows.  \n\u003c/p\u003e\u003cp\u003eUsers may customize the interface with a \u003ccode\u003e~/.haskeline\u003c/code\u003e file; see\n\u003ca\u003ehttp://trac.haskell.org/haskeline/wiki/UserPrefs\u003c/a\u003e for more information.\n\u003c/p\u003e\u003cp\u003eAn example use of this library for a simple read-eval-print loop (REPL) is the\nfollowing:\n\u003c/p\u003e\u003cpre\u003e import System.Console.Haskeline\n \n main :: IO ()\n main = runInputT defaultSettings loop\n    where \n        loop :: InputT IO ()\n        loop = do\n            minput \u003c- getInputLine \"% \"\n            case minput of\n                Nothing -\u003e return ()\n                Just \"quit\" -\u003e return ()\n                Just input -\u003e do outputStrLn $ \"Input was: \" ++ input\n                                 loop\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "System.Console.Haskeline",
          "name": "Haskeline",
          "package": "haskeline",
          "source": "src/System-Console-Haskeline.html",
          "type": "module"
        },
        "index": {
          "description": "rich user interface for line input in command-line programs Haskeline is Unicode-aware and runs both on POSIX-compatible systems and on Windows Users may customize the interface with haskeline file see http trac.haskell.org haskeline wiki UserPrefs for more information An example use of this library for simple read-eval-print loop REPL is the following import System.Console.Haskeline main IO main runInputT defaultSettings loop where loop InputT IO loop do minput getInputLine case minput of Nothing return Just quit return Just input do outputStrLn Input was input loop",
          "hierarchy": "System Console Haskeline",
          "module": "System.Console.Haskeline",
          "name": "Haskeline",
          "package": "haskeline",
          "partial": "Haskeline",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haskeline/docs/System-Console-Haskeline.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHaskeline has two ways of interacting with the user:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \"Terminal-style\" interaction provides an rich user interface by connecting\n   to the user's terminal (which may be different than \u003ccode\u003e\u003ca\u003estdin\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003estdout\u003c/a\u003e\u003c/code\u003e).  \n\u003c/li\u003e\u003cli\u003e \"File-style\" interaction treats the input as a simple stream of characters, for example\n    when reading from a file or pipe.  Input functions (e.g., \u003ccode\u003egetInputLine\u003c/code\u003e) print the prompt to \u003ccode\u003e\u003ca\u003estdout\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eA \u003ccode\u003e\u003ca\u003eBehavior\u003c/a\u003e\u003c/code\u003e is a method for deciding at run-time which type of interaction to use.  \n\u003c/p\u003e\u003cp\u003eFor most applications (e.g., a REPL), \u003ccode\u003e\u003ca\u003edefaultBehavior\u003c/a\u003e\u003c/code\u003e should have the correct effect.\n\u003c/p\u003e",
          "module": "System.Console.Haskeline",
          "name": "Behavior",
          "package": "haskeline",
          "source": "src/System-Console-Haskeline-InputT.html#Behavior",
          "type": "data"
        },
        "index": {
          "description": "Haskeline has two ways of interacting with the user Terminal-style interaction provides an rich user interface by connecting to the user terminal which may be different than stdin or stdout File-style interaction treats the input as simple stream of characters for example when reading from file or pipe Input functions e.g getInputLine print the prompt to stdout Behavior is method for deciding at run-time which type of interaction to use For most applications e.g REPL defaultBehavior should have the correct effect",
          "hierarchy": "System Console Haskeline",
          "module": "System.Console.Haskeline",
          "name": "Behavior",
          "package": "haskeline",
          "partial": "Behavior",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskeline/docs/System-Console-Haskeline.html#t:Behavior"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA monad transformer which carries all of the state and settings\n relevant to a line-reading application.\n\u003c/p\u003e",
          "module": "System.Console.Haskeline",
          "name": "InputT",
          "package": "haskeline",
          "source": "src/System-Console-Haskeline-InputT.html#InputT",
          "type": "data"
        },
        "index": {
          "description": "monad transformer which carries all of the state and settings relevant to line-reading application",
          "hierarchy": "System Console Haskeline",
          "module": "System.Console.Haskeline",
          "name": "InputT",
          "package": "haskeline",
          "partial": "Input",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskeline/docs/System-Console-Haskeline.html#t:InputT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Haskeline",
          "name": "Interrupt",
          "package": "haskeline",
          "source": "src/System-Console-Haskeline-Term.html#Interrupt",
          "type": "data"
        },
        "index": {
          "hierarchy": "System Console Haskeline",
          "module": "System.Console.Haskeline",
          "name": "Interrupt",
          "package": "haskeline",
          "partial": "Interrupt",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskeline/docs/System-Console-Haskeline.html#t:Interrupt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ePrefs\u003c/a\u003e\u003c/code\u003e allow the user to customize the terminal-style line-editing interface.  They are\nread by default from \u003ccode\u003e~/.haskeline\u003c/code\u003e; to override that behavior, use\n\u003ccode\u003e\u003ca\u003ereadPrefs\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003erunInputTWithPrefs\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eEach line of a \u003ccode\u003e.haskeline\u003c/code\u003e file defines\none field of the \u003ccode\u003e\u003ca\u003ePrefs\u003c/a\u003e\u003c/code\u003e datatype; field names are case-insensitive and\nunparseable lines are ignored.  For example:\n\u003c/p\u003e\u003cpre\u003e editMode: Vi\n completionType: MenuCompletion\n maxhistorysize: Just 40\n\u003c/pre\u003e",
          "module": "System.Console.Haskeline",
          "name": "Prefs",
          "package": "haskeline",
          "source": "src/System-Console-Haskeline-Prefs.html#Prefs",
          "type": "data"
        },
        "index": {
          "description": "Prefs allow the user to customize the terminal-style line-editing interface They are read by default from haskeline to override that behavior use readPrefs and runInputTWithPrefs Each line of haskeline file defines one field of the Prefs datatype field names are case-insensitive and unparseable lines are ignored For example editMode Vi completionType MenuCompletion maxhistorysize Just",
          "hierarchy": "System Console Haskeline",
          "module": "System.Console.Haskeline",
          "name": "Prefs",
          "package": "haskeline",
          "partial": "Prefs",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskeline/docs/System-Console-Haskeline.html#t:Prefs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApplication-specific customizations to the user interface.\n\u003c/p\u003e",
          "module": "System.Console.Haskeline",
          "name": "Settings",
          "package": "haskeline",
          "source": "src/System-Console-Haskeline-InputT.html#Settings",
          "type": "data"
        },
        "index": {
          "description": "Application-specific customizations to the user interface",
          "hierarchy": "System Console Haskeline",
          "module": "System.Console.Haskeline",
          "name": "Settings",
          "package": "haskeline",
          "partial": "Settings",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskeline/docs/System-Console-Haskeline.html#t:Settings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Haskeline",
          "name": "Interrupt",
          "package": "haskeline",
          "signature": "Interrupt",
          "source": "src/System-Console-Haskeline-Term.html#Interrupt",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Haskeline",
          "module": "System.Console.Haskeline",
          "name": "Interrupt",
          "package": "haskeline",
          "partial": "Interrupt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskeline/docs/System-Console-Haskeline.html#v:Interrupt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Haskeline",
          "name": "Settings",
          "package": "haskeline",
          "signature": "Settings",
          "source": "src/System-Console-Haskeline-InputT.html#Settings",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Haskeline",
          "module": "System.Console.Haskeline",
          "name": "Settings",
          "package": "haskeline",
          "partial": "Settings",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskeline/docs/System-Console-Haskeline.html#v:Settings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e, each nonblank line returned by\n \u003ccode\u003egetInputLine\u003c/code\u003e will be automatically added to the history.\n\u003c/p\u003e",
          "module": "System.Console.Haskeline",
          "name": "autoAddHistory",
          "package": "haskeline",
          "signature": "Bool",
          "source": "src/System-Console-Haskeline-InputT.html#Settings",
          "type": "function"
        },
        "index": {
          "description": "If True each nonblank line returned by getInputLine will be automatically added to the history",
          "hierarchy": "System Console Haskeline",
          "module": "System.Console.Haskeline",
          "name": "autoAddHistory",
          "package": "haskeline",
          "partial": "Add History",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskeline/docs/System-Console-Haskeline.html#v:autoAddHistory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCustom tab completion.\n\u003c/p\u003e",
          "module": "System.Console.Haskeline",
          "name": "complete",
          "package": "haskeline",
          "signature": "CompletionFunc m",
          "source": "src/System-Console-Haskeline-InputT.html#Settings",
          "type": "function"
        },
        "index": {
          "description": "Custom tab completion",
          "hierarchy": "System Console Haskeline",
          "module": "System.Console.Haskeline",
          "name": "complete",
          "package": "haskeline",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskeline/docs/System-Console-Haskeline.html#v:complete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead input from \u003ccode\u003e\u003ca\u003estdin\u003c/a\u003e\u003c/code\u003e.  \n Use terminal-style interaction if \u003ccode\u003e\u003ca\u003estdin\u003c/a\u003e\u003c/code\u003e is connected to\n a terminal and has echoing enabled.  Otherwise (e.g., if \u003ccode\u003e\u003ca\u003estdin\u003c/a\u003e\u003c/code\u003e is a pipe), use\n file-style interaction.\n\u003c/p\u003e\u003cp\u003eThis behavior should suffice for most applications.  \n\u003c/p\u003e",
          "module": "System.Console.Haskeline",
          "name": "defaultBehavior",
          "package": "haskeline",
          "signature": "Behavior",
          "source": "src/System-Console-Haskeline-InputT.html#defaultBehavior",
          "type": "function"
        },
        "index": {
          "description": "Read input from stdin Use terminal-style interaction if stdin is connected to terminal and has echoing enabled Otherwise e.g if stdin is pipe use file-style interaction This behavior should suffice for most applications",
          "hierarchy": "System Console Haskeline",
          "module": "System.Console.Haskeline",
          "name": "defaultBehavior",
          "package": "haskeline",
          "partial": "Behavior",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskeline/docs/System-Console-Haskeline.html#v:defaultBehavior"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe default preferences which may be overwritten in the\n \u003ccode\u003e.haskeline\u003c/code\u003e file.\n\u003c/p\u003e",
          "module": "System.Console.Haskeline",
          "name": "defaultPrefs",
          "package": "haskeline",
          "signature": "Prefs",
          "source": "src/System-Console-Haskeline-Prefs.html#defaultPrefs",
          "type": "function"
        },
        "index": {
          "description": "The default preferences which may be overwritten in the haskeline file",
          "hierarchy": "System Console Haskeline",
          "module": "System.Console.Haskeline",
          "name": "defaultPrefs",
          "package": "haskeline",
          "partial": "Prefs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskeline/docs/System-Console-Haskeline.html#v:defaultPrefs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA useful default.  In particular:\n\u003c/p\u003e\u003cpre\u003e\n defaultSettings = Settings {\n           complete = completeFilename,\n           historyFile = Nothing,\n           autoAddHistory = True\n           }\n\u003c/pre\u003e",
          "module": "System.Console.Haskeline",
          "name": "defaultSettings",
          "package": "haskeline",
          "signature": "Settings m",
          "source": "src/System-Console-Haskeline.html#defaultSettings",
          "type": "function"
        },
        "index": {
          "description": "useful default In particular defaultSettings Settings complete completeFilename historyFile Nothing autoAddHistory True",
          "hierarchy": "System Console Haskeline",
          "module": "System.Console.Haskeline",
          "name": "defaultSettings",
          "package": "haskeline",
          "partial": "Settings",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskeline/docs/System-Console-Haskeline.html#v:defaultSettings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the current line input history.\n\u003c/p\u003e",
          "module": "System.Console.Haskeline",
          "name": "getHistory",
          "package": "haskeline",
          "signature": "InputT m History",
          "source": "src/System-Console-Haskeline-InputT.html#getHistory",
          "type": "function"
        },
        "index": {
          "description": "Get the current line input history",
          "hierarchy": "System Console Haskeline",
          "module": "System.Console.Haskeline",
          "name": "getHistory",
          "package": "haskeline",
          "partial": "History",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskeline/docs/System-Console-Haskeline.html#v:getHistory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReads one character of input.  Ignores non-printable characters.\n\u003c/p\u003e\u003cp\u003eWhen using terminal-style interaction, the character will be read without waiting\nfor a newline.\n\u003c/p\u003e\u003cp\u003eWhen using file-style interaction, a newline will be read if it is immediately\navailable after the input character.\n\u003c/p\u003e",
          "module": "System.Console.Haskeline",
          "name": "getInputChar",
          "package": "haskeline",
          "signature": "String-\u003e InputT m (Maybe Char)",
          "type": "function"
        },
        "index": {
          "description": "Reads one character of input Ignores non-printable characters When using terminal-style interaction the character will be read without waiting for newline When using file-style interaction newline will be read if it is immediately available after the input character",
          "hierarchy": "System Console Haskeline",
          "module": "System.Console.Haskeline",
          "name": "getInputChar",
          "normalized": "String-\u003eInputT a(Maybe Char)",
          "package": "haskeline",
          "partial": "Input Char",
          "signature": "String-\u003eInputT m(Maybe Char)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskeline/docs/System-Console-Haskeline.html#v:getInputChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReads one line of input.  The final newline (if any) is removed.  When using terminal-style interaction, this function provides a rich line-editing user interface.\n\u003c/p\u003e\u003cp\u003eIf \u003ccode\u003e\u003ccode\u003e\u003ca\u003eautoAddHistory\u003c/a\u003e\u003c/code\u003e == \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e and the line input is nonblank (i.e., is not all\nspaces), it will be automatically added to the history.\n\u003c/p\u003e",
          "module": "System.Console.Haskeline",
          "name": "getInputLine",
          "package": "haskeline",
          "signature": "String-\u003e InputT m (Maybe String)",
          "type": "function"
        },
        "index": {
          "description": "Reads one line of input The final newline if any is removed When using terminal-style interaction this function provides rich line-editing user interface If autoAddHistory True and the line input is nonblank i.e is not all spaces it will be automatically added to the history",
          "hierarchy": "System Console Haskeline",
          "module": "System.Console.Haskeline",
          "name": "getInputLine",
          "normalized": "String-\u003eInputT a(Maybe String)",
          "package": "haskeline",
          "partial": "Input Line",
          "signature": "String-\u003eInputT m(Maybe String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskeline/docs/System-Console-Haskeline.html#v:getInputLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReads one line of input and fills the insertion space with initial text. When using\nterminal-style interaction, this function provides a rich line-editing user interface with the\nadded ability to give the user default values.\n\u003c/p\u003e\u003cp\u003eThis function behaves in the exact same manner as \u003ccode\u003e\u003ca\u003egetInputLine\u003c/a\u003e\u003c/code\u003e, except that\nit pre-populates the input area. The text that resides in the input area is given as a 2-tuple\nwith two \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003es.   The string on the left of the tuple (obtained by calling \u003ccode\u003e\u003ca\u003efst\u003c/a\u003e\u003c/code\u003e) is\nwhat will appear to the left of the cursor and the string on the right (obtained by\ncalling \u003ccode\u003e\u003ca\u003esnd\u003c/a\u003e\u003c/code\u003e) is what will appear to the right of the cursor.\n\u003c/p\u003e\u003cp\u003eSome examples of calling of this function are:\n\u003c/p\u003e\u003cpre\u003e getInputLineWithInitial \"prompt\u003e \" (\"left\", \"\") -- The cursor starts at the end of the line.\n getInputLineWithInitial \"prompt\u003e \" (\"left \", \"right\") -- The cursor starts before the second word.\n\u003c/pre\u003e",
          "module": "System.Console.Haskeline",
          "name": "getInputLineWithInitial",
          "package": "haskeline",
          "signature": "String-\u003e (String, String)-\u003e InputT m (Maybe String)",
          "type": "function"
        },
        "index": {
          "description": "Reads one line of input and fills the insertion space with initial text When using terminal-style interaction this function provides rich line-editing user interface with the added ability to give the user default values This function behaves in the exact same manner as getInputLine except that it pre-populates the input area The text that resides in the input area is given as tuple with two String The string on the left of the tuple obtained by calling fst is what will appear to the left of the cursor and the string on the right obtained by calling snd is what will appear to the right of the cursor Some examples of calling of this function are getInputLineWithInitial prompt left The cursor starts at the end of the line getInputLineWithInitial prompt left right The cursor starts before the second word",
          "hierarchy": "System Console Haskeline",
          "module": "System.Console.Haskeline",
          "name": "getInputLineWithInitial",
          "normalized": "String-\u003e(String,String)-\u003eInputT a(Maybe String)",
          "package": "haskeline",
          "partial": "Input Line With Initial",
          "signature": "String-\u003e(String,String)-\u003eInputT m(Maybe String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskeline/docs/System-Console-Haskeline.html#v:getInputLineWithInitial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReads one line of input, without displaying the input while it is being typed.\nWhen using terminal-style interaction, the masking character (if given) will replace each typed character.\n\u003c/p\u003e\u003cp\u003eWhen using file-style interaction, this function turns off echoing while reading\nthe line of input.\n\u003c/p\u003e",
          "module": "System.Console.Haskeline",
          "name": "getPassword",
          "package": "haskeline",
          "signature": "Maybe Char-\u003e String-\u003e InputT m (Maybe String)",
          "type": "function"
        },
        "index": {
          "description": "Reads one line of input without displaying the input while it is being typed When using terminal-style interaction the masking character if given will replace each typed character When using file-style interaction this function turns off echoing while reading the line of input",
          "hierarchy": "System Console Haskeline",
          "module": "System.Console.Haskeline",
          "name": "getPassword",
          "normalized": "Maybe Char-\u003eString-\u003eInputT a(Maybe String)",
          "package": "haskeline",
          "partial": "Password",
          "signature": "Maybe Char-\u003eString-\u003eInputT m(Maybe String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskeline/docs/System-Console-Haskeline.html#v:getPassword"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCatch and handle an exception of type \u003ccode\u003e\u003ca\u003eInterrupt\u003c/a\u003e\u003c/code\u003e.  \n\u003c/p\u003e\u003cpre\u003e handleInterrupt f = handle $ \\Interrupt -\u003e f\n\u003c/pre\u003e",
          "module": "System.Console.Haskeline",
          "name": "handleInterrupt",
          "package": "haskeline",
          "signature": "m a -\u003e m a -\u003e m a",
          "source": "src/System-Console-Haskeline.html#handleInterrupt",
          "type": "function"
        },
        "index": {
          "description": "Catch and handle an exception of type Interrupt handleInterrupt handle Interrupt",
          "hierarchy": "System Console Haskeline",
          "module": "System.Console.Haskeline",
          "name": "handleInterrupt",
          "normalized": "a b-\u003ea b-\u003ea b",
          "package": "haskeline",
          "partial": "Interrupt",
          "signature": "m a-\u003em a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskeline/docs/System-Console-Haskeline.html#v:handleInterrupt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the current session uses terminal-style interaction.  (See \u003ccode\u003e\u003ca\u003eBehavior\u003c/a\u003e\u003c/code\u003e.)\n\u003c/p\u003e",
          "module": "System.Console.Haskeline",
          "name": "haveTerminalUI",
          "package": "haskeline",
          "signature": "InputT m Bool",
          "source": "src/System-Console-Haskeline-InputT.html#haveTerminalUI",
          "type": "function"
        },
        "index": {
          "description": "Returns True if the current session uses terminal-style interaction See Behavior",
          "hierarchy": "System Console Haskeline",
          "module": "System.Console.Haskeline",
          "name": "haveTerminalUI",
          "package": "haskeline",
          "partial": "Terminal UI",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskeline/docs/System-Console-Haskeline.html#v:haveTerminalUI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhere to read/write the history at the\n start and end of each\n line input session.\n\u003c/p\u003e",
          "module": "System.Console.Haskeline",
          "name": "historyFile",
          "package": "haskeline",
          "signature": "Maybe FilePath",
          "source": "src/System-Console-Haskeline-InputT.html#Settings",
          "type": "function"
        },
        "index": {
          "description": "Where to read write the history at the start and end of each line input session",
          "hierarchy": "System Console Haskeline",
          "module": "System.Console.Haskeline",
          "name": "historyFile",
          "package": "haskeline",
          "partial": "File",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskeline/docs/System-Console-Haskeline.html#v:historyFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap a user interaction by modifying the base monad computation.\n\u003c/p\u003e",
          "module": "System.Console.Haskeline",
          "name": "mapInputT",
          "package": "haskeline",
          "signature": "(forall b.  m b -\u003e m b) -\u003e InputT m a -\u003e InputT m a",
          "source": "src/System-Console-Haskeline-InputT.html#mapInputT",
          "type": "function"
        },
        "index": {
          "description": "Map user interaction by modifying the base monad computation",
          "hierarchy": "System Console Haskeline",
          "module": "System.Console.Haskeline",
          "name": "mapInputT",
          "normalized": "(a b c d-\u003ec d)-\u003eInputT c e-\u003eInputT c e",
          "package": "haskeline",
          "partial": "Input",
          "signature": "(forall b. m b-\u003em b)-\u003eInputT m a-\u003eInputT m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskeline/docs/System-Console-Haskeline.html#v:mapInputT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChange the current line input history.\n\u003c/p\u003e",
          "module": "System.Console.Haskeline",
          "name": "modifyHistory",
          "package": "haskeline",
          "signature": "(History -\u003e History) -\u003e InputT m ()",
          "source": "src/System-Console-Haskeline-InputT.html#modifyHistory",
          "type": "function"
        },
        "index": {
          "description": "Change the current line input history",
          "hierarchy": "System Console Haskeline",
          "module": "System.Console.Haskeline",
          "name": "modifyHistory",
          "normalized": "(History-\u003eHistory)-\u003eInputT a()",
          "package": "haskeline",
          "partial": "History",
          "signature": "(History-\u003eHistory)-\u003eInputT m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskeline/docs/System-Console-Haskeline.html#v:modifyHistory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a Unicode string to the user's standard output.\n\u003c/p\u003e",
          "module": "System.Console.Haskeline",
          "name": "outputStr",
          "package": "haskeline",
          "signature": "String -\u003e InputT m ()",
          "source": "src/System-Console-Haskeline.html#outputStr",
          "type": "function"
        },
        "index": {
          "description": "Write Unicode string to the user standard output",
          "hierarchy": "System Console Haskeline",
          "module": "System.Console.Haskeline",
          "name": "outputStr",
          "normalized": "String-\u003eInputT a()",
          "package": "haskeline",
          "partial": "Str",
          "signature": "String-\u003eInputT m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskeline/docs/System-Console-Haskeline.html#v:outputStr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a string to the user's standard output, followed by a newline.\n\u003c/p\u003e",
          "module": "System.Console.Haskeline",
          "name": "outputStrLn",
          "package": "haskeline",
          "signature": "String -\u003e InputT m ()",
          "source": "src/System-Console-Haskeline.html#outputStrLn",
          "type": "function"
        },
        "index": {
          "description": "Write string to the user standard output followed by newline",
          "hierarchy": "System Console Haskeline",
          "module": "System.Console.Haskeline",
          "name": "outputStrLn",
          "normalized": "String-\u003eInputT a()",
          "package": "haskeline",
          "partial": "Str Ln",
          "signature": "String-\u003eInputT m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskeline/docs/System-Console-Haskeline.html#v:outputStrLn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse terminal-style interaction whenever possible, even if \u003ccode\u003e\u003ca\u003estdin\u003c/a\u003e\u003c/code\u003e and/or \u003ccode\u003e\u003ca\u003estdout\u003c/a\u003e\u003c/code\u003e are not\n terminals.\n\u003c/p\u003e\u003cp\u003eIf it cannot open the user's terminal, use file-style interaction, reading input from \u003ccode\u003e\u003ca\u003estdin\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Console.Haskeline",
          "name": "preferTerm",
          "package": "haskeline",
          "signature": "Behavior",
          "source": "src/System-Console-Haskeline-InputT.html#preferTerm",
          "type": "function"
        },
        "index": {
          "description": "Use terminal-style interaction whenever possible even if stdin and or stdout are not terminals If it cannot open the user terminal use file-style interaction reading input from stdin",
          "hierarchy": "System Console Haskeline",
          "module": "System.Console.Haskeline",
          "name": "preferTerm",
          "package": "haskeline",
          "partial": "Term",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskeline/docs/System-Console-Haskeline.html#v:preferTerm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the line input history.\n\u003c/p\u003e",
          "module": "System.Console.Haskeline",
          "name": "putHistory",
          "package": "haskeline",
          "signature": "History -\u003e InputT m ()",
          "source": "src/System-Console-Haskeline-InputT.html#putHistory",
          "type": "function"
        },
        "index": {
          "description": "Set the line input history",
          "hierarchy": "System Console Haskeline",
          "module": "System.Console.Haskeline",
          "name": "putHistory",
          "normalized": "History-\u003eInputT a()",
          "package": "haskeline",
          "partial": "History",
          "signature": "History-\u003eInputT m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskeline/docs/System-Console-Haskeline.html#v:putHistory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead \u003ccode\u003e\u003ca\u003ePrefs\u003c/a\u003e\u003c/code\u003e from a given file.  If there is an error reading the file,\n the \u003ccode\u003e\u003ca\u003edefaultPrefs\u003c/a\u003e\u003c/code\u003e will be returned.\n\u003c/p\u003e",
          "module": "System.Console.Haskeline",
          "name": "readPrefs",
          "package": "haskeline",
          "signature": "FilePath -\u003e IO Prefs",
          "source": "src/System-Console-Haskeline-Prefs.html#readPrefs",
          "type": "function"
        },
        "index": {
          "description": "Read Prefs from given file If there is an error reading the file the defaultPrefs will be returned",
          "hierarchy": "System Console Haskeline",
          "module": "System.Console.Haskeline",
          "name": "readPrefs",
          "normalized": "FilePath-\u003eIO Prefs",
          "package": "haskeline",
          "partial": "Prefs",
          "signature": "FilePath-\u003eIO Prefs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskeline/docs/System-Console-Haskeline.html#v:readPrefs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a line-reading application.  This function should suffice for most applications.\n\u003c/p\u003e\u003cp\u003eThis function is equivalent to \u003ccode\u003e\u003ccode\u003e\u003ca\u003erunInputTBehavior\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003edefaultBehavior\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.  It \n uses terminal-style interaction if \u003ccode\u003e\u003ca\u003estdin\u003c/a\u003e\u003c/code\u003e is connected to a terminal and has\n echoing enabled.  Otherwise (e.g., if \u003ccode\u003e\u003ca\u003estdin\u003c/a\u003e\u003c/code\u003e is a pipe), it uses file-style interaction.\n\u003c/p\u003e\u003cp\u003eIf it uses terminal-style interaction, \u003ccode\u003e\u003ca\u003ePrefs\u003c/a\u003e\u003c/code\u003e will be read from the user's \u003ccode\u003e~/.haskeline\u003c/code\u003e file\n (if present).\n If it uses file-style interaction, \u003ccode\u003e\u003ca\u003ePrefs\u003c/a\u003e\u003c/code\u003e are not relevant and will not be read.\n\u003c/p\u003e",
          "module": "System.Console.Haskeline",
          "name": "runInputT",
          "package": "haskeline",
          "signature": "Settings m -\u003e InputT m a -\u003e m a",
          "source": "src/System-Console-Haskeline-InputT.html#runInputT",
          "type": "function"
        },
        "index": {
          "description": "Run line-reading application This function should suffice for most applications This function is equivalent to runInputTBehavior defaultBehavior It uses terminal-style interaction if stdin is connected to terminal and has echoing enabled Otherwise e.g if stdin is pipe it uses file-style interaction If it uses terminal-style interaction Prefs will be read from the user haskeline file if present If it uses file-style interaction Prefs are not relevant and will not be read",
          "hierarchy": "System Console Haskeline",
          "module": "System.Console.Haskeline",
          "name": "runInputT",
          "normalized": "Settings a-\u003eInputT a b-\u003ea b",
          "package": "haskeline",
          "partial": "Input",
          "signature": "Settings m-\u003eInputT m a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskeline/docs/System-Console-Haskeline.html#v:runInputT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a line-reading application according to the given behavior.\n\u003c/p\u003e\u003cp\u003eIf it uses terminal-style interaction, \u003ccode\u003e\u003ca\u003ePrefs\u003c/a\u003e\u003c/code\u003e will be read from the\n user's \u003ccode\u003e~/.haskeline\u003c/code\u003e file (if present).\n If it uses file-style interaction, \u003ccode\u003e\u003ca\u003ePrefs\u003c/a\u003e\u003c/code\u003e are not relevant and will not be read.\n\u003c/p\u003e",
          "module": "System.Console.Haskeline",
          "name": "runInputTBehavior",
          "package": "haskeline",
          "signature": "Behavior -\u003e Settings m -\u003e InputT m a -\u003e m a",
          "source": "src/System-Console-Haskeline-InputT.html#runInputTBehavior",
          "type": "function"
        },
        "index": {
          "description": "Run line-reading application according to the given behavior If it uses terminal-style interaction Prefs will be read from the user haskeline file if present If it uses file-style interaction Prefs are not relevant and will not be read",
          "hierarchy": "System Console Haskeline",
          "module": "System.Console.Haskeline",
          "name": "runInputTBehavior",
          "normalized": "Behavior-\u003eSettings a-\u003eInputT a b-\u003ea b",
          "package": "haskeline",
          "partial": "Input TBehavior",
          "signature": "Behavior-\u003eSettings m-\u003eInputT m a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskeline/docs/System-Console-Haskeline.html#v:runInputTBehavior"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a line-reading application.\n\u003c/p\u003e",
          "module": "System.Console.Haskeline",
          "name": "runInputTBehaviorWithPrefs",
          "package": "haskeline",
          "signature": "Behavior -\u003e Prefs -\u003e Settings m -\u003e InputT m a -\u003e m a",
          "source": "src/System-Console-Haskeline-InputT.html#runInputTBehaviorWithPrefs",
          "type": "function"
        },
        "index": {
          "description": "Run line-reading application",
          "hierarchy": "System Console Haskeline",
          "module": "System.Console.Haskeline",
          "name": "runInputTBehaviorWithPrefs",
          "normalized": "Behavior-\u003ePrefs-\u003eSettings a-\u003eInputT a b-\u003ea b",
          "package": "haskeline",
          "partial": "Input TBehavior With Prefs",
          "signature": "Behavior-\u003ePrefs-\u003eSettings m-\u003eInputT m a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskeline/docs/System-Console-Haskeline.html#v:runInputTBehaviorWithPrefs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a line-reading application.  Uses \u003ccode\u003e\u003ca\u003edefaultBehavior\u003c/a\u003e\u003c/code\u003e to determine the\n interaction behavior.\n\u003c/p\u003e",
          "module": "System.Console.Haskeline",
          "name": "runInputTWithPrefs",
          "package": "haskeline",
          "signature": "Prefs -\u003e Settings m -\u003e InputT m a -\u003e m a",
          "source": "src/System-Console-Haskeline-InputT.html#runInputTWithPrefs",
          "type": "function"
        },
        "index": {
          "description": "Run line-reading application Uses defaultBehavior to determine the interaction behavior",
          "hierarchy": "System Console Haskeline",
          "module": "System.Console.Haskeline",
          "name": "runInputTWithPrefs",
          "normalized": "Prefs-\u003eSettings a-\u003eInputT a b-\u003ea b",
          "package": "haskeline",
          "partial": "Input TWith Prefs",
          "signature": "Prefs-\u003eSettings m-\u003eInputT m a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskeline/docs/System-Console-Haskeline.html#v:runInputTWithPrefs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBecause \u003ccode\u003e\u003ca\u003ecomplete\u003c/a\u003e\u003c/code\u003e is the only field of \u003ccode\u003e\u003ca\u003eSettings\u003c/a\u003e\u003c/code\u003e depending on \u003ccode\u003em\u003c/code\u003e,\n the expression \u003ccode\u003edefaultSettings {completionFunc = f}\u003c/code\u003e leads to a type error\n from being too general.  This function works around that issue, and may become unnecessary if another field\n depending on \u003ccode\u003em\u003c/code\u003e is added.\n\u003c/p\u003e",
          "module": "System.Console.Haskeline",
          "name": "setComplete",
          "package": "haskeline",
          "signature": "CompletionFunc m -\u003e Settings m -\u003e Settings m",
          "source": "src/System-Console-Haskeline-InputT.html#setComplete",
          "type": "function"
        },
        "index": {
          "description": "Because complete is the only field of Settings depending on the expression defaultSettings completionFunc leads to type error from being too general This function works around that issue and may become unnecessary if another field depending on is added",
          "hierarchy": "System Console Haskeline",
          "module": "System.Console.Haskeline",
          "name": "setComplete",
          "normalized": "CompletionFunc a-\u003eSettings a-\u003eSettings a",
          "package": "haskeline",
          "partial": "Complete",
          "signature": "CompletionFunc m-\u003eSettings m-\u003eSettings m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskeline/docs/System-Console-Haskeline.html#v:setComplete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse file-style interaction, reading input from the given file.\n\u003c/p\u003e",
          "module": "System.Console.Haskeline",
          "name": "useFile",
          "package": "haskeline",
          "signature": "FilePath -\u003e Behavior",
          "source": "src/System-Console-Haskeline-InputT.html#useFile",
          "type": "function"
        },
        "index": {
          "description": "Use file-style interaction reading input from the given file",
          "hierarchy": "System Console Haskeline",
          "module": "System.Console.Haskeline",
          "name": "useFile",
          "normalized": "FilePath-\u003eBehavior",
          "package": "haskeline",
          "partial": "File",
          "signature": "FilePath-\u003eBehavior",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskeline/docs/System-Console-Haskeline.html#v:useFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse file-style interaction, reading input from the given \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e.  \n\u003c/p\u003e",
          "module": "System.Console.Haskeline",
          "name": "useFileHandle",
          "package": "haskeline",
          "signature": "Handle -\u003e Behavior",
          "source": "src/System-Console-Haskeline-InputT.html#useFileHandle",
          "type": "function"
        },
        "index": {
          "description": "Use file-style interaction reading input from the given Handle",
          "hierarchy": "System Console Haskeline",
          "module": "System.Console.Haskeline",
          "name": "useFileHandle",
          "normalized": "Handle-\u003eBehavior",
          "package": "haskeline",
          "partial": "File Handle",
          "signature": "Handle-\u003eBehavior",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskeline/docs/System-Console-Haskeline.html#v:useFileHandle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf Ctrl-C is pressed during the given action, throw an exception\nof type \u003ccode\u003e\u003ca\u003eInterrupt\u003c/a\u003e\u003c/code\u003e.  For example:\n\u003c/p\u003e\u003cpre\u003e tryAction :: InputT IO ()\n tryAction = handle (\\Interrupt -\u003e outputStrLn \"Cancelled.\")\n                $ wrapInterrupt $ someLongAction\n\u003c/pre\u003e\u003cp\u003eThe action can handle the interrupt itself; a new \u003ccode\u003e\u003ca\u003eInterrupt\u003c/a\u003e\u003c/code\u003e exception will be thrown\nevery time Ctrl-C is pressed.\n\u003c/p\u003e\u003cpre\u003e tryAction :: InputT IO ()\n tryAction = wrapInterrupt loop\n     where loop = handle (\\Interrupt -\u003e outputStrLn \"Cancelled; try again.\" \u003e\u003e loop)\n                    someLongAction\n\u003c/pre\u003e\u003cp\u003eThis behavior differs from GHC's built-in Ctrl-C handling, which\nmay immediately terminate the program after the second time that the user presses\nCtrl-C.\n\u003c/p\u003e",
          "module": "System.Console.Haskeline",
          "name": "withInterrupt",
          "package": "haskeline",
          "signature": "InputT m a -\u003e InputT m a",
          "source": "src/System-Console-Haskeline.html#withInterrupt",
          "type": "function"
        },
        "index": {
          "description": "If Ctrl-C is pressed during the given action throw an exception of type Interrupt For example tryAction InputT IO tryAction handle Interrupt outputStrLn Cancelled wrapInterrupt someLongAction The action can handle the interrupt itself new Interrupt exception will be thrown every time Ctrl-C is pressed tryAction InputT IO tryAction wrapInterrupt loop where loop handle Interrupt outputStrLn Cancelled try again loop someLongAction This behavior differs from GHC built-in Ctrl-C handling which may immediately terminate the program after the second time that the user presses Ctrl-C",
          "hierarchy": "System Console Haskeline",
          "module": "System.Console.Haskeline",
          "name": "withInterrupt",
          "normalized": "InputT a b-\u003eInputT a b",
          "package": "haskeline",
          "partial": "Interrupt",
          "signature": "InputT m a-\u003eInputT m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskeline/docs/System-Console-Haskeline.html#v:withInterrupt"
      }
    }
  ]
]