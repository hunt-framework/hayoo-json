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
        "word": "hledger"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA history-aware add command to help with data entry.\n\u003c/p\u003e\u003cp\u003eNote: this might not be sensible, but add has some aspirations of being\nboth user-friendly and pipeable/scriptable and for this reason\ninformational messages are mostly written to stderr rather than stdout.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Hledger.Cli.Add",
          "name": "Add",
          "package": "hledger",
          "source": "src/Hledger-Cli-Add.html",
          "type": "module"
        },
        "index": {
          "description": "history-aware add command to help with data entry Note this might not be sensible but add has some aspirations of being both user-friendly and pipeable scriptable and for this reason informational messages are mostly written to stderr rather than stdout",
          "hierarchy": "Hledger Cli Add",
          "module": "Hledger.Cli.Add",
          "name": "Add",
          "package": "hledger",
          "partial": "Add",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hledger/docs/Hledger-Cli-Add.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Cli.Add",
          "name": "CompletionCache",
          "package": "hledger",
          "source": "src/Hledger-Cli-Add.html#CompletionCache",
          "type": "type"
        },
        "index": {
          "hierarchy": "Hledger Cli Add",
          "module": "Hledger.Cli.Add",
          "name": "CompletionCache",
          "package": "hledger",
          "partial": "Completion Cache",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hledger/docs/Hledger-Cli-Add.html#t:CompletionCache"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInformation used as the basis for suggested account names, amounts etc. in add prompt.\n\u003c/p\u003e",
          "module": "Hledger.Cli.Add",
          "name": "PostingsState",
          "package": "hledger",
          "source": "src/Hledger-Cli-Add.html#PostingsState",
          "type": "data"
        },
        "index": {
          "description": "Information used as the basis for suggested account names amounts etc in add prompt",
          "hierarchy": "Hledger Cli Add",
          "module": "Hledger.Cli.Add",
          "name": "PostingsState",
          "package": "hledger",
          "partial": "Postings State",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hledger/docs/Hledger-Cli-Add.html#t:PostingsState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Cli.Add",
          "name": "RestartEntryException",
          "package": "hledger",
          "source": "src/Hledger-Cli-Add.html#RestartEntryException",
          "type": "data"
        },
        "index": {
          "hierarchy": "Hledger Cli Add",
          "module": "Hledger.Cli.Add",
          "name": "RestartEntryException",
          "package": "hledger",
          "partial": "Restart Entry Exception",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hledger/docs/Hledger-Cli-Add.html#t:RestartEntryException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Cli.Add",
          "name": "PostingsState",
          "package": "hledger",
          "signature": "PostingsState",
          "source": "src/Hledger-Cli-Add.html#PostingsState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Cli Add",
          "module": "Hledger.Cli.Add",
          "name": "PostingsState",
          "package": "hledger",
          "partial": "Postings State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger/docs/Hledger-Cli-Add.html#v:PostingsState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Cli.Add",
          "name": "RestartEntryException",
          "package": "hledger",
          "signature": "RestartEntryException",
          "source": "src/Hledger-Cli-Add.html#RestartEntryException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Cli Add",
          "module": "Hledger.Cli.Add",
          "name": "RestartEntryException",
          "package": "hledger",
          "partial": "Restart Entry Exception",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger/docs/Hledger-Cli-Add.html#v:RestartEntryException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Cli.Add",
          "name": "accountCompletion",
          "package": "hledger",
          "signature": "CompletionCache -\u003e CompletionFunc IO",
          "source": "src/Hledger-Cli-Add.html#accountCompletion",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Cli Add",
          "module": "Hledger.Cli.Add",
          "name": "accountCompletion",
          "normalized": "CompletionCache-\u003eCompletionFunc IO",
          "package": "hledger",
          "partial": "Completion",
          "signature": "CompletionCache-\u003eCompletionFunc IO",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger/docs/Hledger-Cli-Add.html#v:accountCompletion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead multiple transactions from the console, prompting for each\n field, and append them to the journal file.  If the journal came\n from stdin, this command has no effect.\n\u003c/p\u003e",
          "module": "Hledger.Cli.Add",
          "name": "add",
          "package": "hledger",
          "signature": "CliOpts -\u003e Journal -\u003e IO ()",
          "source": "src/Hledger-Cli-Add.html#add",
          "type": "function"
        },
        "index": {
          "description": "Read multiple transactions from the console prompting for each field and append them to the journal file If the journal came from stdin this command has no effect",
          "hierarchy": "Hledger Cli Add",
          "module": "Hledger.Cli.Add",
          "name": "add",
          "normalized": "CliOpts-\u003eJournal-\u003eIO()",
          "package": "hledger",
          "signature": "CliOpts-\u003eJournal-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger/docs/Hledger-Cli-Add.html#v:add"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAppend a string, typically one or more transactions, to a journal\n file, or if the file is \u003ca\u003e-\u003c/a\u003e, dump it to stdout.  Tries to avoid\n excess whitespace.\n\u003c/p\u003e",
          "module": "Hledger.Cli.Add",
          "name": "appendToJournalFileOrStdout",
          "package": "hledger",
          "signature": "FilePath -\u003e String -\u003e IO ()",
          "source": "src/Hledger-Cli-Add.html#appendToJournalFileOrStdout",
          "type": "function"
        },
        "index": {
          "description": "Append string typically one or more transactions to journal file or if the file is dump it to stdout Tries to avoid excess whitespace",
          "hierarchy": "Hledger Cli Add",
          "module": "Hledger.Cli.Add",
          "name": "appendToJournalFileOrStdout",
          "normalized": "FilePath-\u003eString-\u003eIO()",
          "package": "hledger",
          "partial": "To Journal File Or Stdout",
          "signature": "FilePath-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger/docs/Hledger-Cli-Add.html#v:appendToJournalFileOrStdout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrompt for and read a string value, optionally with a default value\n and a validator. A validator causes the prompt to repeat until the\n input is valid. May also raise an EOF exception if control-d or control-c is pressed.\n\u003c/p\u003e",
          "module": "Hledger.Cli.Add",
          "name": "askFor",
          "package": "hledger",
          "signature": "String -\u003e Maybe String -\u003e Maybe (String -\u003e Bool) -\u003e InputT IO String",
          "source": "src/Hledger-Cli-Add.html#askFor",
          "type": "function"
        },
        "index": {
          "description": "Prompt for and read string value optionally with default value and validator validator causes the prompt to repeat until the input is valid May also raise an EOF exception if control-d or control-c is pressed",
          "hierarchy": "Hledger Cli Add",
          "module": "Hledger.Cli.Add",
          "name": "askFor",
          "normalized": "String-\u003eMaybe String-\u003eMaybe(String-\u003eBool)-\u003eInputT IO String",
          "package": "hledger",
          "partial": "For",
          "signature": "String-\u003eMaybe String-\u003eMaybe(String-\u003eBool)-\u003eInputT IO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger/docs/Hledger-Cli-Add.html#v:askFor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Cli.Add",
          "name": "capitalize",
          "package": "hledger",
          "signature": "String -\u003e String",
          "source": "src/Hledger-Cli-Add.html#capitalize",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Cli Add",
          "module": "Hledger.Cli.Add",
          "name": "capitalize",
          "normalized": "String-\u003eString",
          "package": "hledger",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger/docs/Hledger-Cli-Add.html#v:capitalize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Cli.Add",
          "name": "compareDescriptions",
          "package": "hledger",
          "signature": "[Char] -\u003e [Char] -\u003e Double",
          "source": "src/Hledger-Cli-Add.html#compareDescriptions",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Cli Add",
          "module": "Hledger.Cli.Add",
          "name": "compareDescriptions",
          "normalized": "[Char]-\u003e[Char]-\u003eDouble",
          "package": "hledger",
          "partial": "Descriptions",
          "signature": "[Char]-\u003e[Char]-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger/docs/Hledger-Cli-Add.html#v:compareDescriptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn a similarity measure, from 0 to 1, for two strings.\n This is Simon White's letter pairs algorithm from\n http:\u003cem/\u003ewww.catalysoft.com\u003cem\u003earticles\u003c/em\u003eStrikeAMatch.html\n with a modification for short strings.\n\u003c/p\u003e",
          "module": "Hledger.Cli.Add",
          "name": "compareStrings",
          "package": "hledger",
          "signature": "String -\u003e String -\u003e Double",
          "source": "src/Hledger-Cli-Add.html#compareStrings",
          "type": "function"
        },
        "index": {
          "description": "Return similarity measure from to for two strings This is Simon White letter pairs algorithm from http www.catalysoft.com articles StrikeAMatch.html with modification for short strings",
          "hierarchy": "Hledger Cli Add",
          "module": "Hledger.Cli.Add",
          "name": "compareStrings",
          "normalized": "String-\u003eString-\u003eDouble",
          "package": "hledger",
          "partial": "Strings",
          "signature": "String-\u003eString-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger/docs/Hledger-Cli-Add.html#v:compareStrings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Cli.Add",
          "name": "completionCache",
          "package": "hledger",
          "signature": "Journal -\u003e CompletionCache",
          "source": "src/Hledger-Cli-Add.html#completionCache",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Cli Add",
          "module": "Hledger.Cli.Add",
          "name": "completionCache",
          "normalized": "Journal-\u003eCompletionCache",
          "package": "hledger",
          "partial": "Cache",
          "signature": "Journal-\u003eCompletionCache",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger/docs/Hledger-Cli-Add.html#v:completionCache"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReplace a string's 0 or more terminating newlines with exactly one.\n\u003c/p\u003e",
          "module": "Hledger.Cli.Add",
          "name": "ensureOneNewlineTerminated",
          "package": "hledger",
          "signature": "String -\u003e String",
          "source": "src/Hledger-Cli-Add.html#ensureOneNewlineTerminated",
          "type": "function"
        },
        "index": {
          "description": "Replace string or more terminating newlines with exactly one",
          "hierarchy": "Hledger Cli Add",
          "module": "Hledger.Cli.Add",
          "name": "ensureOneNewlineTerminated",
          "normalized": "String-\u003eString",
          "package": "hledger",
          "partial": "One Newline Terminated",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger/docs/Hledger-Cli-Add.html#v:ensureOneNewlineTerminated"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLoop reading transactions from the console, prompting for,\n validating, displaying and appending each one to the journal file,\n until end of input or ctrl-c (then raise an EOF exception).\n If provided, command-line arguments are used as defaults for the\n first transaction; otherwise defaults come from the most similar\n recent transaction in the journal.\n\u003c/p\u003e",
          "module": "Hledger.Cli.Add",
          "name": "getAndAddTransactionsLoop",
          "package": "hledger",
          "signature": "Journal -\u003e CliOpts -\u003e String -\u003e [String] -\u003e IO ()",
          "source": "src/Hledger-Cli-Add.html#getAndAddTransactionsLoop",
          "type": "function"
        },
        "index": {
          "description": "Loop reading transactions from the console prompting for validating displaying and appending each one to the journal file until end of input or ctrl-c then raise an EOF exception If provided command-line arguments are used as defaults for the first transaction otherwise defaults come from the most similar recent transaction in the journal",
          "hierarchy": "Hledger Cli Add",
          "module": "Hledger.Cli.Add",
          "name": "getAndAddTransactionsLoop",
          "normalized": "Journal-\u003eCliOpts-\u003eString-\u003e[String]-\u003eIO()",
          "package": "hledger",
          "partial": "And Add Transactions Loop",
          "signature": "Journal-\u003eCliOpts-\u003eString-\u003e[String]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger/docs/Hledger-Cli-Add.html#v:getAndAddTransactionsLoop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLoop reading postings from the console, until a valid balanced\n set of postings has been entered, then return the final transaction,\n or nothing indicating that the user wants to restart entering this transaction.\n\u003c/p\u003e",
          "module": "Hledger.Cli.Add",
          "name": "getPostingsForTransactionWithHistory",
          "package": "hledger",
          "signature": "Journal -\u003e CliOpts -\u003e String -\u003e String -\u003e String -\u003e String -\u003e [String] -\u003e IO (Maybe Transaction)",
          "source": "src/Hledger-Cli-Add.html#getPostingsForTransactionWithHistory",
          "type": "function"
        },
        "index": {
          "description": "Loop reading postings from the console until valid balanced set of postings has been entered then return the final transaction or nothing indicating that the user wants to restart entering this transaction",
          "hierarchy": "Hledger Cli Add",
          "module": "Hledger.Cli.Add",
          "name": "getPostingsForTransactionWithHistory",
          "normalized": "Journal-\u003eCliOpts-\u003eString-\u003eString-\u003eString-\u003eString-\u003e[String]-\u003eIO(Maybe Transaction)",
          "package": "hledger",
          "partial": "Postings For Transaction With History",
          "signature": "Journal-\u003eCliOpts-\u003eString-\u003eString-\u003eString-\u003eString-\u003e[String]-\u003eIO(Maybe Transaction)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger/docs/Hledger-Cli-Add.html#v:getPostingsForTransactionWithHistory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead postings from the command line until . is entered, generating\n useful defaults based on historical context and postings entered so far.\n\u003c/p\u003e",
          "module": "Hledger.Cli.Add",
          "name": "getPostingsLoop",
          "package": "hledger",
          "signature": "PostingsState -\u003e [Posting] -\u003e [String] -\u003e IO [Posting]",
          "source": "src/Hledger-Cli-Add.html#getPostingsLoop",
          "type": "function"
        },
        "index": {
          "description": "Read postings from the command line until is entered generating useful defaults based on historical context and postings entered so far",
          "hierarchy": "Hledger Cli Add",
          "module": "Hledger.Cli.Add",
          "name": "getPostingsLoop",
          "normalized": "PostingsState-\u003e[Posting]-\u003e[String]-\u003eIO[Posting]",
          "package": "hledger",
          "partial": "Postings Loop",
          "signature": "PostingsState-\u003e[Posting]-\u003e[String]-\u003eIO[Posting]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger/docs/Hledger-Cli-Add.html#v:getPostingsLoop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a single transaction from the console, with history-aware prompting,\n allowing the user to restart and confirm at the end.\n A default date, and zero or more defaults for subsequent fields, are provided.\n\u003c/p\u003e",
          "module": "Hledger.Cli.Add",
          "name": "getTransaction",
          "package": "hledger",
          "signature": "Journal -\u003e CliOpts -\u003e String -\u003e [String] -\u003e IO Transaction",
          "source": "src/Hledger-Cli-Add.html#getTransaction",
          "type": "function"
        },
        "index": {
          "description": "Read single transaction from the console with history-aware prompting allowing the user to restart and confirm at the end default date and zero or more defaults for subsequent fields are provided",
          "hierarchy": "Hledger Cli Add",
          "module": "Hledger.Cli.Add",
          "name": "getTransaction",
          "normalized": "Journal-\u003eCliOpts-\u003eString-\u003e[String]-\u003eIO Transaction",
          "package": "hledger",
          "partial": "Transaction",
          "signature": "Journal-\u003eCliOpts-\u003eString-\u003e[String]-\u003eIO Transaction",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger/docs/Hledger-Cli-Add.html#v:getTransaction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a single transaction from the console, with history-aware prompting,\n or return nothing indicating that the user wants to restart entering this transaction.\n A default date, and zero or more defaults for subsequent fields, are provided.\n\u003c/p\u003e",
          "module": "Hledger.Cli.Add",
          "name": "getTransactionOrRestart",
          "package": "hledger",
          "signature": "Journal -\u003e CliOpts -\u003e String -\u003e [String] -\u003e IO (Maybe Transaction)",
          "source": "src/Hledger-Cli-Add.html#getTransactionOrRestart",
          "type": "function"
        },
        "index": {
          "description": "Read single transaction from the console with history-aware prompting or return nothing indicating that the user wants to restart entering this transaction default date and zero or more defaults for subsequent fields are provided",
          "hierarchy": "Hledger Cli Add",
          "module": "Hledger.Cli.Add",
          "name": "getTransactionOrRestart",
          "normalized": "Journal-\u003eCliOpts-\u003eString-\u003e[String]-\u003eIO(Maybe Transaction)",
          "package": "hledger",
          "partial": "Transaction Or Restart",
          "signature": "Journal-\u003eCliOpts-\u003eString-\u003e[String]-\u003eIO(Maybe Transaction)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger/docs/Hledger-Cli-Add.html#v:getTransactionOrRestart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Cli.Add",
          "name": "headTailDef",
          "package": "hledger",
          "signature": "a -\u003e [a] -\u003e (a, [a])",
          "source": "src/Hledger-Cli-Add.html#headTailDef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Cli Add",
          "module": "Hledger.Cli.Add",
          "name": "headTailDef",
          "normalized": "a-\u003e[a]-\u003e(a,[a])",
          "package": "hledger",
          "partial": "Tail Def",
          "signature": "a-\u003e[a]-\u003e(a,[a])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger/docs/Hledger-Cli-Add.html#v:headTailDef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAppend this transaction to the journal's file, and to the journal's\n transaction list.\n\u003c/p\u003e",
          "module": "Hledger.Cli.Add",
          "name": "journalAddTransaction",
          "package": "hledger",
          "signature": "Journal -\u003e CliOpts -\u003e Transaction -\u003e IO Journal",
          "source": "src/Hledger-Cli-Add.html#journalAddTransaction",
          "type": "function"
        },
        "index": {
          "description": "Append this transaction to the journal file and to the journal transaction list",
          "hierarchy": "Hledger Cli Add",
          "module": "Hledger.Cli.Add",
          "name": "journalAddTransaction",
          "normalized": "Journal-\u003eCliOpts-\u003eTransaction-\u003eIO Journal",
          "package": "hledger",
          "partial": "Add Transaction",
          "signature": "Journal-\u003eCliOpts-\u003eTransaction-\u003eIO Journal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger/docs/Hledger-Cli-Add.html#v:journalAddTransaction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Cli.Add",
          "name": "letterPairs",
          "package": "hledger",
          "signature": "[t] -\u003e [[t]]",
          "source": "src/Hledger-Cli-Add.html#letterPairs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Cli Add",
          "module": "Hledger.Cli.Add",
          "name": "letterPairs",
          "normalized": "[a]-\u003e[[a]]",
          "package": "hledger",
          "partial": "Pairs",
          "signature": "[t]-\u003e[[t]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger/docs/Hledger-Cli-Add.html#v:letterPairs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Cli.Add",
          "name": "psAccept",
          "package": "hledger",
          "signature": "AccountName -\u003e Bool",
          "source": "src/Hledger-Cli-Add.html#PostingsState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Cli Add",
          "module": "Hledger.Cli.Add",
          "name": "psAccept",
          "normalized": "AccountName-\u003eBool",
          "package": "hledger",
          "partial": "Accept",
          "signature": "AccountName-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger/docs/Hledger-Cli-Add.html#v:psAccept"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Cli.Add",
          "name": "psHistory",
          "package": "hledger",
          "signature": "Maybe [Posting]",
          "source": "src/Hledger-Cli-Add.html#PostingsState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Cli Add",
          "module": "Hledger.Cli.Add",
          "name": "psHistory",
          "normalized": "Maybe[Posting]",
          "package": "hledger",
          "partial": "History",
          "signature": "Maybe[Posting]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger/docs/Hledger-Cli-Add.html#v:psHistory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Cli.Add",
          "name": "psJournal",
          "package": "hledger",
          "signature": "Journal",
          "source": "src/Hledger-Cli-Add.html#PostingsState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Cli Add",
          "module": "Hledger.Cli.Add",
          "name": "psJournal",
          "package": "hledger",
          "partial": "Journal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger/docs/Hledger-Cli-Add.html#v:psJournal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Cli.Add",
          "name": "psSuggestHistoricalAmount",
          "package": "hledger",
          "signature": "Bool",
          "source": "src/Hledger-Cli-Add.html#PostingsState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Cli Add",
          "module": "Hledger.Cli.Add",
          "name": "psSuggestHistoricalAmount",
          "package": "hledger",
          "partial": "Suggest Historical Amount",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger/docs/Hledger-Cli-Add.html#v:psSuggestHistoricalAmount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a string of journal data into a register report.\n\u003c/p\u003e",
          "module": "Hledger.Cli.Add",
          "name": "registerFromString",
          "package": "hledger",
          "signature": "String -\u003e IO String",
          "source": "src/Hledger-Cli-Add.html#registerFromString",
          "type": "function"
        },
        "index": {
          "description": "Convert string of journal data into register report",
          "hierarchy": "Hledger Cli Add",
          "module": "Hledger.Cli.Add",
          "name": "registerFromString",
          "normalized": "String-\u003eIO String",
          "package": "hledger",
          "partial": "From String",
          "signature": "String-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger/docs/Hledger-Cli-Add.html#v:registerFromString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Cli.Add",
          "name": "runInteraction",
          "package": "hledger",
          "signature": "Journal -\u003e InputT IO a -\u003e IO a",
          "source": "src/Hledger-Cli-Add.html#runInteraction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Cli Add",
          "module": "Hledger.Cli.Add",
          "name": "runInteraction",
          "normalized": "Journal-\u003eInputT IO a-\u003eIO a",
          "package": "hledger",
          "partial": "Interaction",
          "signature": "Journal-\u003eInputT IO a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger/docs/Hledger-Cli-Add.html#v:runInteraction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Cli.Add",
          "name": "runInteractionDefault",
          "package": "hledger",
          "signature": "InputT IO a -\u003e IO a",
          "source": "src/Hledger-Cli-Add.html#runInteractionDefault",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Cli Add",
          "module": "Hledger.Cli.Add",
          "name": "runInteractionDefault",
          "normalized": "InputT IO a-\u003eIO a",
          "package": "hledger",
          "partial": "Interaction Default",
          "signature": "InputT IO a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger/docs/Hledger-Cli-Add.html#v:runInteractionDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Cli.Add",
          "name": "transactionsSimilarTo",
          "package": "hledger",
          "signature": "Journal -\u003e Query -\u003e String -\u003e [(Double, Transaction)]",
          "source": "src/Hledger-Cli-Add.html#transactionsSimilarTo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Cli Add",
          "module": "Hledger.Cli.Add",
          "name": "transactionsSimilarTo",
          "normalized": "Journal-\u003eQuery-\u003eString-\u003e[(Double,Transaction)]",
          "package": "hledger",
          "partial": "Similar To",
          "signature": "Journal-\u003eQuery-\u003eString-\u003e[(Double,Transaction)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger/docs/Hledger-Cli-Add.html#v:transactionsSimilarTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Cli.Add",
          "name": "wordLetterPairs",
          "package": "hledger",
          "signature": "String -\u003e [[Char]]",
          "source": "src/Hledger-Cli-Add.html#wordLetterPairs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Cli Add",
          "module": "Hledger.Cli.Add",
          "name": "wordLetterPairs",
          "normalized": "String-\u003e[[Char]]",
          "package": "hledger",
          "partial": "Letter Pairs",
          "signature": "String-\u003e[[Char]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger/docs/Hledger-Cli-Add.html#v:wordLetterPairs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA ledger-compatible \u003ccode\u003ebalance\u003c/code\u003e command, with additional support for\nmulti-column reports.\n\u003c/p\u003e\u003cp\u003eHere is a description/specification for the balance command.  See also\n\u003ca\u003eHledger.Reports\u003c/a\u003e -\u003e \"Balance reports\".\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eBasic balance report\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eWith no reporting interval (\u003ccode\u003e--monthly\u003c/code\u003e etc.), hledger's balance\ncommand emulates ledger's, showing accounts indented according to\nhierarchy, along with their total amount posted (including subaccounts).\n\u003c/p\u003e\u003cp\u003eHere's an example. With \u003ccode\u003edata/sample.journal\u003c/code\u003e, which defines the following account tree:\n\u003c/p\u003e\u003cpre\u003e\n assets\n   bank\n     checking\n     saving\n   cash\n expenses\n   food\n   supplies\n income\n   gifts\n   salary\n liabilities\n   debts\n\u003c/pre\u003e\u003cp\u003ethe basic \u003ccode\u003ebalance\u003c/code\u003e command gives this output:\n\u003c/p\u003e\u003cpre\u003e\n $ hledger -f sample.journal balance\n                 $-1  assets\n                  $1    bank:saving\n                 $-2    cash\n                  $2  expenses\n                  $1    food\n                  $1    supplies\n                 $-2  income\n                 $-1    gifts\n                 $-1    salary\n                  $1  liabilities:debts\n--------------------\n                   0\n\u003c/pre\u003e\u003cp\u003eSubaccounts are displayed indented below their parent. Only the account leaf name (the final part) is shown.\n(With \u003ccode\u003e--flat\u003c/code\u003e, account names are shown in full and unindented.)\n\u003c/p\u003e\u003cp\u003eEach account's \"balance\" is the sum of postings in that account and any subaccounts during the report period.\nWhen the report period includes all transactions, this is equivalent to the account's current balance.\n\u003c/p\u003e\u003cp\u003eThe overall total of the highest-level displayed accounts is shown below the line.\n(The \u003ccode\u003e--no-total/-N\u003c/code\u003e flag prevents this.)\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eEliding and omitting\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eAccounts which have a zero balance, and no non-zero subaccount\nbalances, are normally omitted from the report.\n(The \u003ccode\u003e--empty/-E\u003c/code\u003e flag forces such accounts to be displayed.)\nEg, above \u003ccode\u003echecking\u003c/code\u003e is omitted because it has a zero balance and no subaccounts.\n\u003c/p\u003e\u003cp\u003eAccounts which have a single subaccount also being displayed, with the same balance,\nare normally elided into the subaccount's line.\n(The \u003ccode\u003e--no-elide\u003c/code\u003e flag prevents this.)\nEg, above \u003ccode\u003ebank\u003c/code\u003e is elided to \u003ccode\u003ebank:saving\u003c/code\u003e because it has only a\nsingle displayed subaccount (\u003ccode\u003esaving\u003c/code\u003e) and their balance is the same\n($1). Similarly, \u003ccode\u003eliabilities\u003c/code\u003e is elided to \u003ccode\u003eliabilities:debts\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eDate limiting\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eThe default report period is that of the whole journal, including all\nknown transactions. The \u003ccode\u003e--begin/-b\u003c/code\u003e, \u003ccode\u003e--end/-e\u003c/code\u003e, \u003ccode\u003e--period/-p\u003c/code\u003e\noptions or \u003ccode\u003edate:\u003c/code\u003e/\u003ccode\u003edate2:\u003c/code\u003e patterns can be used to report only\non transactions before and/or after specified dates.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eDepth limiting\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e--depth\u003c/code\u003e option can be used to limit the depth of the balance report.\nEg, to see just the top level accounts (still including their subaccount balances):\n\u003c/p\u003e\u003cpre\u003e\n$ hledger -f sample.journal balance --depth 1\n                 $-1  assets\n                  $2  expenses\n                 $-2  income\n                  $1  liabilities\n--------------------\n                   0\n\u003c/pre\u003e\u003cp\u003e\u003cem\u003eAccount limiting\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eWith one or more account pattern arguments, the report is restricted\nto accounts whose name matches one of the patterns, plus their parents\nand subaccounts. Eg, adding the pattern \u003ccode\u003eo\u003c/code\u003e to the first example gives:\n\u003c/p\u003e\u003cpre\u003e\n $ hledger -f sample.journal balance o\n                  $1  expenses:food\n                 $-2  income\n                 $-1    gifts\n                 $-1    salary\n--------------------\n                 $-1\n\u003c/pre\u003e\u003cul\u003e\u003cli\u003e The \u003ccode\u003eo\u003c/code\u003e pattern matched \u003ccode\u003efood\u003c/code\u003e and \u003ccode\u003eincome\u003c/code\u003e, so they are shown.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003efood\u003c/code\u003e's parent (\u003ccode\u003eexpenses\u003c/code\u003e) is shown even though the pattern didn't\n  match it, to clarify the hierarchy. The usual eliding rules cause it to be elided here.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eincome\u003c/code\u003e's subaccounts are also shown.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003e\u003cem\u003eMulti-column balance report\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003ehledger's balance command will show multiple columns when a reporting\ninterval is specified (eg with \u003ccode\u003e--monthly\u003c/code\u003e), one column for each sub-period.\n\u003c/p\u003e\u003cp\u003eThere are three kinds of multi-column balance report, indicated by the heading:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e A \"period balance\" (or \"flow\") report (the default) shows the change of account\n  balance in each period, which is equivalent to the sum of postings in each\n  period. Here, checking's balance increased by 10 in Feb:\n\u003c/li\u003e\u003c/ul\u003e\u003cpre\u003e Change of balance (flow):\n \n                  Jan   Feb   Mar\n assets:checking   20    10    -5\n\u003c/pre\u003e\u003cul\u003e\u003cli\u003e A \"cumulative balance\" report (with \u003ccode\u003e--cumulative\u003c/code\u003e) shows the accumulated ending balance\n  across periods, starting from zero at the report's start date.\n  Here, 30 is the sum of checking postings during Jan and Feb:\n\u003c/li\u003e\u003c/ul\u003e\u003cpre\u003e Ending balance (cumulative):\n \n                  Jan   Feb   Mar\n assets:checking   20    30    25\n\u003c/pre\u003e\u003cul\u003e\u003cli\u003e A \"historical balance\" report (with \u003ccode\u003e--historical/-H\u003c/code\u003e) also shows ending balances,\n  but it includes the starting balance from any postings before the report start date.\n  Here, 130 is the balance from all checking postings at the end of Feb, including\n  pre-Jan postings which created a starting balance of 100:\n\u003c/li\u003e\u003c/ul\u003e\u003cpre\u003e Ending balance (historical):\n \n                  Jan   Feb   Mar\n assets:checking  120   130   125\n\u003c/pre\u003e\u003cp\u003e\u003cem\u003eEliding and omitting, 2\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eHere's a (imperfect?) specification for the eliding/omitting behaviour:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Each account is normally displayed on its own line.\n\u003c/li\u003e\u003cli\u003e An account less deep than the report's max depth, with just one\ninteresting subaccount, and the same balance as the subaccount, is\nnon-interesting, and prefixed to the subaccount's line, unless\n\u003ccode\u003e--no-elide\u003c/code\u003e is in effect. \n\u003c/li\u003e\u003cli\u003e An account with a zero inclusive balance and less than two interesting\nsubaccounts is not displayed at all, unless \u003ccode\u003e--empty\u003c/code\u003e is in effect.\n\u003c/li\u003e\u003cli\u003e Multi-column balance reports show full account names with no eliding\n  (like \u003ccode\u003e--flat\u003c/code\u003e). Accounts (and periods) are omitted as described below.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003e\u003cem\u003eWhich accounts to show in balance reports\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eBy default:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e single-column: accounts with non-zero balance in report period.\n                 (With \u003ccode\u003e--flat\u003c/code\u003e: accounts with non-zero balance and postings.)\n\u003c/li\u003e\u003cli\u003e periodic:      accounts with postings and non-zero period balance in any period\n\u003c/li\u003e\u003cli\u003e cumulative:    accounts with non-zero cumulative balance in any period\n\u003c/li\u003e\u003cli\u003e historical:    accounts with non-zero historical balance in any period\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eWith \u003ccode\u003e-E/--empty\u003c/code\u003e:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e single-column: accounts with postings in report period\n\u003c/li\u003e\u003cli\u003e periodic:      accounts with postings in report period\n\u003c/li\u003e\u003cli\u003e cumulative:    accounts with postings in report period\n\u003c/li\u003e\u003cli\u003e historical:    accounts with non-zero starting balance +\n                 accounts with postings in report period\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003e\u003cem\u003eWhich periods (columns) to show in balance reports\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eAn empty period/column is one where no report account has any postings.\nA zero period/column is one where no report account has a non-zero period balance.\n\u003c/p\u003e\u003cp\u003eCurrently,\n\u003c/p\u003e\u003cp\u003eby default:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e single-column: N/A\n\u003c/li\u003e\u003cli\u003e periodic:      all periods within the overall report period,\n                 except for leading and trailing empty periods\n\u003c/li\u003e\u003cli\u003e cumulative:    all periods within the overall report period,\n                 except for leading and trailing empty periods\n\u003c/li\u003e\u003cli\u003e historical:    all periods within the overall report period,\n                 except for leading and trailing empty periods\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eWith \u003ccode\u003e-E/--empty\u003c/code\u003e:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e single-column: N/A\n\u003c/li\u003e\u003cli\u003e periodic:      all periods within the overall report period\n\u003c/li\u003e\u003cli\u003e cumulative:    all periods within the overall report period\n\u003c/li\u003e\u003cli\u003e historical:    all periods within the overall report period\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003e\u003cem\u003eWhat to show in empty cells\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eAn empty periodic balance report cell is one which has no corresponding postings.\nAn empty cumulative/historical balance report cell is one which has no correponding\nor prior postings, ie the account doesn't exist yet.\nCurrently, empty cells show 0.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Hledger.Cli.Balance",
          "name": "Balance",
          "package": "hledger",
          "source": "src/Hledger-Cli-Balance.html",
          "type": "module"
        },
        "index": {
          "description": "ledger-compatible balance command with additional support for multi-column reports Here is description specification for the balance command See also Hledger.Reports Balance reports Basic balance report With no reporting interval monthly etc hledger balance command emulates ledger showing accounts indented according to hierarchy along with their total amount posted including subaccounts Here an example With data sample.journal which defines the following account tree assets bank checking saving cash expenses food supplies income gifts salary liabilities debts the basic balance command gives this output hledger sample.journal balance assets bank saving cash expenses food supplies income gifts salary liabilities debts Subaccounts are displayed indented below their parent Only the account leaf name the final part is shown With flat account names are shown in full and unindented Each account balance is the sum of postings in that account and any subaccounts during the report period When the report period includes all transactions this is equivalent to the account current balance The overall total of the highest-level displayed accounts is shown below the line The no-total flag prevents this Eliding and omitting Accounts which have zero balance and no non-zero subaccount balances are normally omitted from the report The empty flag forces such accounts to be displayed Eg above checking is omitted because it has zero balance and no subaccounts Accounts which have single subaccount also being displayed with the same balance are normally elided into the subaccount line The no-elide flag prevents this Eg above bank is elided to bank saving because it has only single displayed subaccount saving and their balance is the same Similarly liabilities is elided to liabilities debts Date limiting The default report period is that of the whole journal including all known transactions The begin end period options or date date2 patterns can be used to report only on transactions before and or after specified dates Depth limiting The depth option can be used to limit the depth of the balance report Eg to see just the top level accounts still including their subaccount balances hledger sample.journal balance depth assets expenses income liabilities Account limiting With one or more account pattern arguments the report is restricted to accounts whose name matches one of the patterns plus their parents and subaccounts Eg adding the pattern to the first example gives hledger sample.journal balance expenses food income gifts salary The pattern matched food and income so they are shown food parent expenses is shown even though the pattern didn match it to clarify the hierarchy The usual eliding rules cause it to be elided here income subaccounts are also shown Multi-column balance report hledger balance command will show multiple columns when reporting interval is specified eg with monthly one column for each sub-period There are three kinds of multi-column balance report indicated by the heading period balance or flow report the default shows the change of account balance in each period which is equivalent to the sum of postings in each period Here checking balance increased by in Feb Change of balance flow Jan Feb Mar assets checking cumulative balance report with cumulative shows the accumulated ending balance across periods starting from zero at the report start date Here is the sum of checking postings during Jan and Feb Ending balance cumulative Jan Feb Mar assets checking historical balance report with historical also shows ending balances but it includes the starting balance from any postings before the report start date Here is the balance from all checking postings at the end of Feb including pre-Jan postings which created starting balance of Ending balance historical Jan Feb Mar assets checking Eliding and omitting Here imperfect specification for the eliding omitting behaviour Each account is normally displayed on its own line An account less deep than the report max depth with just one interesting subaccount and the same balance as the subaccount is non-interesting and prefixed to the subaccount line unless no-elide is in effect An account with zero inclusive balance and less than two interesting subaccounts is not displayed at all unless empty is in effect Multi-column balance reports show full account names with no eliding like flat Accounts and periods are omitted as described below Which accounts to show in balance reports By default single-column accounts with non-zero balance in report period With flat accounts with non-zero balance and postings periodic accounts with postings and non-zero period balance in any period cumulative accounts with non-zero cumulative balance in any period historical accounts with non-zero historical balance in any period With empty single-column accounts with postings in report period periodic accounts with postings in report period cumulative accounts with postings in report period historical accounts with non-zero starting balance accounts with postings in report period Which periods columns to show in balance reports An empty period column is one where no report account has any postings zero period column is one where no report account has non-zero period balance Currently by default single-column periodic all periods within the overall report period except for leading and trailing empty periods cumulative all periods within the overall report period except for leading and trailing empty periods historical all periods within the overall report period except for leading and trailing empty periods With empty single-column periodic all periods within the overall report period cumulative all periods within the overall report period historical all periods within the overall report period What to show in empty cells An empty periodic balance report cell is one which has no corresponding postings An empty cumulative historical balance report cell is one which has no correponding or prior postings ie the account doesn exist yet Currently empty cells show",
          "hierarchy": "Hledger Cli Balance",
          "module": "Hledger.Cli.Balance",
          "name": "Balance",
          "package": "hledger",
          "partial": "Balance",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hledger/docs/Hledger-Cli-Balance.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrint a balance report.\n\u003c/p\u003e",
          "module": "Hledger.Cli.Balance",
          "name": "balance",
          "package": "hledger",
          "signature": "CliOpts -\u003e Journal -\u003e IO ()",
          "source": "src/Hledger-Cli-Balance.html#balance",
          "type": "function"
        },
        "index": {
          "description": "Print balance report",
          "hierarchy": "Hledger Cli Balance",
          "module": "Hledger.Cli.Balance",
          "name": "balance",
          "normalized": "CliOpts-\u003eJournal-\u003eIO()",
          "package": "hledger",
          "signature": "CliOpts-\u003eJournal-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger/docs/Hledger-Cli-Balance.html#v:balance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRender an old-style single-column balance report as plain text.\n\u003c/p\u003e",
          "module": "Hledger.Cli.Balance",
          "name": "balanceReportAsText",
          "package": "hledger",
          "signature": "ReportOpts -\u003e BalanceReport -\u003e [String]",
          "source": "src/Hledger-Cli-Balance.html#balanceReportAsText",
          "type": "function"
        },
        "index": {
          "description": "Render an old-style single-column balance report as plain text",
          "hierarchy": "Hledger Cli Balance",
          "module": "Hledger.Cli.Balance",
          "name": "balanceReportAsText",
          "normalized": "ReportOpts-\u003eBalanceReport-\u003e[String]",
          "package": "hledger",
          "partial": "Report As Text",
          "signature": "ReportOpts-\u003eBalanceReport-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger/docs/Hledger-Cli-Balance.html#v:balanceReportAsText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRender a multi-column cumulative balance report as plain text suitable for console output.\n\u003c/p\u003e",
          "module": "Hledger.Cli.Balance",
          "name": "cumulativeBalanceReportAsText",
          "package": "hledger",
          "signature": "ReportOpts -\u003e MultiBalanceReport -\u003e [String]",
          "source": "src/Hledger-Cli-Balance.html#cumulativeBalanceReportAsText",
          "type": "function"
        },
        "index": {
          "description": "Render multi-column cumulative balance report as plain text suitable for console output",
          "hierarchy": "Hledger Cli Balance",
          "module": "Hledger.Cli.Balance",
          "name": "cumulativeBalanceReportAsText",
          "normalized": "ReportOpts-\u003eMultiBalanceReport-\u003e[String]",
          "package": "hledger",
          "partial": "Balance Report As Text",
          "signature": "ReportOpts-\u003eMultiBalanceReport-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger/docs/Hledger-Cli-Balance.html#v:cumulativeBalanceReportAsText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRender a multi-column historical balance report as plain text suitable for console output.\n\u003c/p\u003e",
          "module": "Hledger.Cli.Balance",
          "name": "historicalBalanceReportAsText",
          "package": "hledger",
          "signature": "ReportOpts -\u003e MultiBalanceReport -\u003e [String]",
          "source": "src/Hledger-Cli-Balance.html#historicalBalanceReportAsText",
          "type": "function"
        },
        "index": {
          "description": "Render multi-column historical balance report as plain text suitable for console output",
          "hierarchy": "Hledger Cli Balance",
          "module": "Hledger.Cli.Balance",
          "name": "historicalBalanceReportAsText",
          "normalized": "ReportOpts-\u003eMultiBalanceReport-\u003e[String]",
          "package": "hledger",
          "partial": "Balance Report As Text",
          "signature": "ReportOpts-\u003eMultiBalanceReport-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger/docs/Hledger-Cli-Balance.html#v:historicalBalanceReportAsText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRender a multi-column period balance report as plain text suitable for console output.\n\u003c/p\u003e",
          "module": "Hledger.Cli.Balance",
          "name": "periodBalanceReportAsText",
          "package": "hledger",
          "signature": "ReportOpts -\u003e MultiBalanceReport -\u003e [String]",
          "source": "src/Hledger-Cli-Balance.html#periodBalanceReportAsText",
          "type": "function"
        },
        "index": {
          "description": "Render multi-column period balance report as plain text suitable for console output",
          "hierarchy": "Hledger Cli Balance",
          "module": "Hledger.Cli.Balance",
          "name": "periodBalanceReportAsText",
          "normalized": "ReportOpts-\u003eMultiBalanceReport-\u003e[String]",
          "package": "hledger",
          "partial": "Balance Report As Text",
          "signature": "ReportOpts-\u003eMultiBalanceReport-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger/docs/Hledger-Cli-Balance.html#v:periodBalanceReportAsText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Cli.Balance",
          "name": "tests_Hledger_Cli_Balance",
          "package": "hledger",
          "signature": "Test",
          "source": "src/Hledger-Cli-Balance.html#tests_Hledger_Cli_Balance",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Cli Balance",
          "module": "Hledger.Cli.Balance",
          "name": "tests_Hledger_Cli_Balance",
          "package": "hledger",
          "partial": "Hledger Cli Balance",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger/docs/Hledger-Cli-Balance.html#v:tests_Hledger_Cli_Balance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe \u003ccode\u003ebalancesheet\u003c/code\u003e command prints a simple balance sheet.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Hledger.Cli.Balancesheet",
          "name": "Balancesheet",
          "package": "hledger",
          "source": "src/Hledger-Cli-Balancesheet.html",
          "type": "module"
        },
        "index": {
          "description": "The balancesheet command prints simple balance sheet",
          "hierarchy": "Hledger Cli Balancesheet",
          "module": "Hledger.Cli.Balancesheet",
          "name": "Balancesheet",
          "package": "hledger",
          "partial": "Balancesheet",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hledger/docs/Hledger-Cli-Balancesheet.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrint a simple balance sheet.\n\u003c/p\u003e",
          "module": "Hledger.Cli.Balancesheet",
          "name": "balancesheet",
          "package": "hledger",
          "signature": "CliOpts -\u003e Journal -\u003e IO ()",
          "source": "src/Hledger-Cli-Balancesheet.html#balancesheet",
          "type": "function"
        },
        "index": {
          "description": "Print simple balance sheet",
          "hierarchy": "Hledger Cli Balancesheet",
          "module": "Hledger.Cli.Balancesheet",
          "name": "balancesheet",
          "normalized": "CliOpts-\u003eJournal-\u003eIO()",
          "package": "hledger",
          "signature": "CliOpts-\u003eJournal-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger/docs/Hledger-Cli-Balancesheet.html#v:balancesheet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Cli.Balancesheet",
          "name": "tests_Hledger_Cli_Balancesheet",
          "package": "hledger",
          "signature": "Test",
          "source": "src/Hledger-Cli-Balancesheet.html#tests_Hledger_Cli_Balancesheet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Cli Balancesheet",
          "module": "Hledger.Cli.Balancesheet",
          "name": "tests_Hledger_Cli_Balancesheet",
          "package": "hledger",
          "partial": "Hledger Cli Balancesheet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger/docs/Hledger-Cli-Balancesheet.html#v:tests_Hledger_Cli_Balancesheet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe \u003ccode\u003ecashflow\u003c/code\u003e command prints a simplified cashflow statement.  It just\nshows the change in all \u003ca\u003ecash\u003c/a\u003e accounts for the period (without the\ntraditional segmentation into operating, investing, and financing\ncash flows.)\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Hledger.Cli.Cashflow",
          "name": "Cashflow",
          "package": "hledger",
          "source": "src/Hledger-Cli-Cashflow.html",
          "type": "module"
        },
        "index": {
          "description": "The cashflow command prints simplified cashflow statement It just shows the change in all cash accounts for the period without the traditional segmentation into operating investing and financing cash flows",
          "hierarchy": "Hledger Cli Cashflow",
          "module": "Hledger.Cli.Cashflow",
          "name": "Cashflow",
          "package": "hledger",
          "partial": "Cashflow",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hledger/docs/Hledger-Cli-Cashflow.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrint a simple cashflow statement.\n\u003c/p\u003e",
          "module": "Hledger.Cli.Cashflow",
          "name": "cashflow",
          "package": "hledger",
          "signature": "CliOpts -\u003e Journal -\u003e IO ()",
          "source": "src/Hledger-Cli-Cashflow.html#cashflow",
          "type": "function"
        },
        "index": {
          "description": "Print simple cashflow statement",
          "hierarchy": "Hledger Cli Cashflow",
          "module": "Hledger.Cli.Cashflow",
          "name": "cashflow",
          "normalized": "CliOpts-\u003eJournal-\u003eIO()",
          "package": "hledger",
          "signature": "CliOpts-\u003eJournal-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger/docs/Hledger-Cli-Cashflow.html#v:cashflow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Cli.Cashflow",
          "name": "tests_Hledger_Cli_Cashflow",
          "package": "hledger",
          "signature": "Test",
          "source": "src/Hledger-Cli-Cashflow.html#tests_Hledger_Cli_Cashflow",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Cli Cashflow",
          "module": "Hledger.Cli.Cashflow",
          "name": "tests_Hledger_Cli_Cashflow",
          "package": "hledger",
          "partial": "Hledger Cli Cashflow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger/docs/Hledger-Cli-Cashflow.html#v:tests_Hledger_Cli_Cashflow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePrint a histogram report.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Hledger.Cli.Histogram",
          "name": "Histogram",
          "package": "hledger",
          "source": "src/Hledger-Cli-Histogram.html",
          "type": "module"
        },
        "index": {
          "description": "Print histogram report",
          "hierarchy": "Hledger Cli Histogram",
          "module": "Hledger.Cli.Histogram",
          "name": "Histogram",
          "package": "hledger",
          "partial": "Histogram",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hledger/docs/Hledger-Cli-Histogram.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Cli.Histogram",
          "name": "barchar",
          "package": "hledger",
          "signature": "Char",
          "source": "src/Hledger-Cli-Histogram.html#barchar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Cli Histogram",
          "module": "Hledger.Cli.Histogram",
          "name": "barchar",
          "package": "hledger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger/docs/Hledger-Cli-Histogram.html#v:barchar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Cli.Histogram",
          "name": "countBar",
          "package": "hledger",
          "signature": "[a] -\u003e [Char]",
          "source": "src/Hledger-Cli-Histogram.html#countBar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Cli Histogram",
          "module": "Hledger.Cli.Histogram",
          "name": "countBar",
          "normalized": "[a]-\u003e[Char]",
          "package": "hledger",
          "partial": "Bar",
          "signature": "[a]-\u003e[Char]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger/docs/Hledger-Cli-Histogram.html#v:countBar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrint a histogram of some statistic per reporting interval, such as\n number of postings per day.\n\u003c/p\u003e",
          "module": "Hledger.Cli.Histogram",
          "name": "histogram",
          "package": "hledger",
          "signature": "CliOpts -\u003e Journal -\u003e IO ()",
          "source": "src/Hledger-Cli-Histogram.html#histogram",
          "type": "function"
        },
        "index": {
          "description": "Print histogram of some statistic per reporting interval such as number of postings per day",
          "hierarchy": "Hledger Cli Histogram",
          "module": "Hledger.Cli.Histogram",
          "name": "histogram",
          "normalized": "CliOpts-\u003eJournal-\u003eIO()",
          "package": "hledger",
          "signature": "CliOpts-\u003eJournal-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger/docs/Hledger-Cli-Histogram.html#v:histogram"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Cli.Histogram",
          "name": "printDayWith",
          "package": "hledger",
          "signature": "(t1 -\u003e t2) -\u003e (DateSpan, t1) -\u003e t",
          "source": "src/Hledger-Cli-Histogram.html#printDayWith",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Cli Histogram",
          "module": "Hledger.Cli.Histogram",
          "name": "printDayWith",
          "normalized": "(a-\u003ea)-\u003e(DateSpan,a)-\u003ea",
          "package": "hledger",
          "partial": "Day With",
          "signature": "(t-\u003et)-\u003e(DateSpan,t)-\u003et",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger/docs/Hledger-Cli-Histogram.html#v:printDayWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Cli.Histogram",
          "name": "showHistogram",
          "package": "hledger",
          "signature": "ReportOpts -\u003e Query -\u003e Journal -\u003e String",
          "source": "src/Hledger-Cli-Histogram.html#showHistogram",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Cli Histogram",
          "module": "Hledger.Cli.Histogram",
          "name": "showHistogram",
          "normalized": "ReportOpts-\u003eQuery-\u003eJournal-\u003eString",
          "package": "hledger",
          "partial": "Histogram",
          "signature": "ReportOpts-\u003eQuery-\u003eJournal-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger/docs/Hledger-Cli-Histogram.html#v:showHistogram"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe \u003ccode\u003eincomestatement\u003c/code\u003e command prints a simple income statement (profit & loss) report.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Hledger.Cli.Incomestatement",
          "name": "Incomestatement",
          "package": "hledger",
          "source": "src/Hledger-Cli-Incomestatement.html",
          "type": "module"
        },
        "index": {
          "description": "The incomestatement command prints simple income statement profit loss report",
          "hierarchy": "Hledger Cli Incomestatement",
          "module": "Hledger.Cli.Incomestatement",
          "name": "Incomestatement",
          "package": "hledger",
          "partial": "Incomestatement",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hledger/docs/Hledger-Cli-Incomestatement.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrint a simple income statement.\n\u003c/p\u003e",
          "module": "Hledger.Cli.Incomestatement",
          "name": "incomestatement",
          "package": "hledger",
          "signature": "CliOpts -\u003e Journal -\u003e IO ()",
          "source": "src/Hledger-Cli-Incomestatement.html#incomestatement",
          "type": "function"
        },
        "index": {
          "description": "Print simple income statement",
          "hierarchy": "Hledger Cli Incomestatement",
          "module": "Hledger.Cli.Incomestatement",
          "name": "incomestatement",
          "normalized": "CliOpts-\u003eJournal-\u003eIO()",
          "package": "hledger",
          "signature": "CliOpts-\u003eJournal-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger/docs/Hledger-Cli-Incomestatement.html#v:incomestatement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Cli.Incomestatement",
          "name": "tests_Hledger_Cli_Incomestatement",
          "package": "hledger",
          "signature": "Test",
          "source": "src/Hledger-Cli-Incomestatement.html#tests_Hledger_Cli_Incomestatement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Cli Incomestatement",
          "module": "Hledger.Cli.Incomestatement",
          "name": "tests_Hledger_Cli_Incomestatement",
          "package": "hledger",
          "partial": "Hledger Cli Incomestatement",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger/docs/Hledger-Cli-Incomestatement.html#v:tests_Hledger_Cli_Incomestatement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ehledger - a ledger-compatible accounting tool.\nCopyright (c) 2007-2011 Simon Michael \u003ca\u003esimon@joyful.com\u003c/a\u003e\nReleased under GPL version 3 or later.\n\u003c/p\u003e\u003cp\u003ehledger is a partial haskell clone of John Wiegley's \u003ca\u003eledger\u003c/a\u003e.  It\ngenerates ledger-compatible register & balance reports from a plain text\njournal, and demonstrates a functional implementation of ledger.\nFor more information, see http://hledger.org .\n\u003c/p\u003e\u003cp\u003eThis module provides the main function for the hledger command-line\nexecutable. It is exposed here so that it can be imported by eg benchmark\nscripts.\n\u003c/p\u003e\u003cp\u003eYou can use the command line:\n\u003c/p\u003e\u003cpre\u003e $ hledger --help\n\u003c/pre\u003e\u003cp\u003eor ghci:\n\u003c/p\u003e\u003cpre\u003e $ ghci hledger\n \u003e j \u003c- readJournalFile Nothing Nothing \"data/sample.journal\"\n \u003e register [] [\"income\",\"expenses\"] j\n 2008/01/01 income               income:salary                   $-1          $-1\n 2008/06/01 gift                 income:gifts                    $-1          $-2\n 2008/06/03 eat & shop           expenses:food                    $1          $-1\n                                 expenses:supplies                $1            0\n \u003e balance [Depth \"1\"] [] l\n                  $-1  assets\n                   $2  expenses\n                  $-2  income\n                   $1  liabilities\n \u003e l \u003c- myLedger\n\u003c/pre\u003e\u003cp\u003eSee \u003ca\u003eHledger.Data.Ledger\u003c/a\u003e for more examples.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Hledger.Cli.Main",
          "name": "Main",
          "package": "hledger",
          "source": "src/Hledger-Cli-Main.html",
          "type": "module"
        },
        "index": {
          "description": "hledger ledger-compatible accounting tool Copyright Simon Michael simon@joyful.com Released under GPL version or later hledger is partial haskell clone of John Wiegley ledger It generates ledger-compatible register balance reports from plain text journal and demonstrates functional implementation of ledger For more information see http hledger.org This module provides the main function for the hledger command-line executable It is exposed here so that it can be imported by eg benchmark scripts You can use the command line hledger help or ghci ghci hledger readJournalFile Nothing Nothing data sample.journal register income expenses income income salary gift income gifts eat shop expenses food expenses supplies balance Depth assets expenses income liabilities myLedger See Hledger.Data.Ledger for more examples",
          "hierarchy": "Hledger Cli Main",
          "module": "Hledger.Cli.Main",
          "name": "Main",
          "package": "hledger",
          "partial": "Main",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hledger/docs/Hledger-Cli-Main.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Cli.Main",
          "name": "main",
          "package": "hledger",
          "signature": "IO ()",
          "source": "src/Hledger-Cli-Main.html#main",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Cli Main",
          "module": "Hledger.Cli.Main",
          "name": "main",
          "normalized": "IO()",
          "package": "hledger",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger/docs/Hledger-Cli-Main.html#v:main"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCommand-line options for the hledger program, and related utilities.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Hledger.Cli.Options",
          "name": "Options",
          "package": "hledger",
          "source": "src/Hledger-Cli-Options.html",
          "type": "module"
        },
        "index": {
          "description": "Command-line options for the hledger program and related utilities",
          "hierarchy": "Hledger Cli Options",
          "module": "Hledger.Cli.Options",
          "name": "Options",
          "package": "hledger",
          "partial": "Options",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hledger/docs/Hledger-Cli-Options.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCommand line options. Used in the \u003ccode\u003ehledger\u003c/code\u003e package and above.\n\u003c/p\u003e",
          "module": "Hledger.Cli.Options",
          "name": "CliOpts",
          "package": "hledger",
          "source": "src/Hledger-Cli-Options.html#CliOpts",
          "type": "data"
        },
        "index": {
          "description": "Command line options Used in the hledger package and above",
          "hierarchy": "Hledger Cli Options",
          "module": "Hledger.Cli.Options",
          "name": "CliOpts",
          "package": "hledger",
          "partial": "Cli Opts",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hledger/docs/Hledger-Cli-Options.html#t:CliOpts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOutput width configuration (for register).\n\u003c/p\u003e",
          "module": "Hledger.Cli.Options",
          "name": "OutputWidth",
          "package": "hledger",
          "source": "src/Hledger-Cli-Options.html#OutputWidth",
          "type": "data"
        },
        "index": {
          "description": "Output width configuration for register",
          "hierarchy": "Hledger Cli Options",
          "module": "Hledger.Cli.Options",
          "name": "OutputWidth",
          "package": "hledger",
          "partial": "Output Width",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hledger/docs/Hledger-Cli-Options.html#t:OutputWidth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOur cmdargs modes parse arguments into an association list for better reuse.\n\u003c/p\u003e",
          "module": "Hledger.Cli.Options",
          "name": "RawOpts",
          "package": "hledger",
          "source": "src/Hledger-Cli-Options.html#RawOpts",
          "type": "type"
        },
        "index": {
          "description": "Our cmdargs modes parse arguments into an association list for better reuse",
          "hierarchy": "Hledger Cli Options",
          "module": "Hledger.Cli.Options",
          "name": "RawOpts",
          "package": "hledger",
          "partial": "Raw Opts",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hledger/docs/Hledger-Cli-Options.html#t:RawOpts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA width value.\n\u003c/p\u003e",
          "module": "Hledger.Cli.Options",
          "name": "Width",
          "package": "hledger",
          "source": "src/Hledger-Cli-Options.html#Width",
          "type": "data"
        },
        "index": {
          "description": "width value",
          "hierarchy": "Hledger Cli Options",
          "module": "Hledger.Cli.Options",
          "name": "Width",
          "package": "hledger",
          "partial": "Width",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hledger/docs/Hledger-Cli-Options.html#t:Width"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eset width automatically from available space\n\u003c/p\u003e",
          "module": "Hledger.Cli.Options",
          "name": "Auto",
          "package": "hledger",
          "signature": "Auto",
          "source": "src/Hledger-Cli-Options.html#Width",
          "type": "function"
        },
        "index": {
          "description": "set width automatically from available space",
          "hierarchy": "Hledger Cli Options",
          "module": "Hledger.Cli.Options",
          "name": "Auto",
          "package": "hledger",
          "partial": "Auto",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger/docs/Hledger-Cli-Options.html#v:Auto"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Cli.Options",
          "name": "CliOpts",
          "package": "hledger",
          "signature": "CliOpts",
          "source": "src/Hledger-Cli-Options.html#CliOpts",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Cli Options",
          "module": "Hledger.Cli.Options",
          "name": "CliOpts",
          "package": "hledger",
          "partial": "Cli Opts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger/docs/Hledger-Cli-Options.html#v:CliOpts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003especify each field's width\n\u003c/p\u003e",
          "module": "Hledger.Cli.Options",
          "name": "FieldWidths",
          "package": "hledger",
          "signature": "FieldWidths [Width]",
          "source": "src/Hledger-Cli-Options.html#OutputWidth",
          "type": "function"
        },
        "index": {
          "description": "specify each field width",
          "hierarchy": "Hledger Cli Options",
          "module": "Hledger.Cli.Options",
          "name": "FieldWidths",
          "normalized": "FieldWidths[Width]",
          "package": "hledger",
          "partial": "Field Widths",
          "signature": "FieldWidths[Width]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger/docs/Hledger-Cli-Options.html#v:FieldWidths"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003especify the overall width \n\u003c/p\u003e",
          "module": "Hledger.Cli.Options",
          "name": "TotalWidth",
          "package": "hledger",
          "signature": "TotalWidth Width",
          "source": "src/Hledger-Cli-Options.html#OutputWidth",
          "type": "function"
        },
        "index": {
          "description": "specify the overall width",
          "hierarchy": "Hledger Cli Options",
          "module": "Hledger.Cli.Options",
          "name": "TotalWidth",
          "package": "hledger",
          "partial": "Total Width",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger/docs/Hledger-Cli-Options.html#v:TotalWidth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eset width to exactly this number of characters\n\u003c/p\u003e",
          "module": "Hledger.Cli.Options",
          "name": "Width",
          "package": "hledger",
          "signature": "Width Int",
          "source": "src/Hledger-Cli-Options.html#Width",
          "type": "function"
        },
        "index": {
          "description": "set width to exactly this number of characters",
          "hierarchy": "Hledger Cli Options",
          "module": "Hledger.Cli.Options",
          "name": "Width",
          "package": "hledger",
          "partial": "Width",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger/docs/Hledger-Cli-Options.html#v:Width"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Cli.Options",
          "name": "activitymode",
          "package": "hledger",
          "signature": "Mode RawOpts",
          "source": "src/Hledger-Cli-Options.html#activitymode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Cli Options",
          "module": "Hledger.Cli.Options",
          "name": "activitymode",
          "package": "hledger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger/docs/Hledger-Cli-Options.html#v:activitymode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Cli.Options",
          "name": "addmode",
          "package": "hledger",
          "signature": "Mode RawOpts",
          "source": "src/Hledger-Cli-Options.html#addmode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Cli Options",
          "module": "Hledger.Cli.Options",
          "name": "addmode",
          "package": "hledger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger/docs/Hledger-Cli-Options.html#v:addmode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Cli.Options",
          "name": "alias_",
          "package": "hledger",
          "signature": "[String]",
          "source": "src/Hledger-Cli-Options.html#CliOpts",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Cli Options",
          "module": "Hledger.Cli.Options",
          "name": "alias_",
          "normalized": "[String]",
          "package": "hledger",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger/docs/Hledger-Cli-Options.html#v:alias_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the account name aliases from options, if any.\n\u003c/p\u003e",
          "module": "Hledger.Cli.Options",
          "name": "aliasesFromOpts",
          "package": "hledger",
          "signature": "CliOpts -\u003e [(AccountName, AccountName)]",
          "source": "src/Hledger-Cli-Options.html#aliasesFromOpts",
          "type": "function"
        },
        "index": {
          "description": "Get the account name aliases from options if any",
          "hierarchy": "Hledger Cli Options",
          "module": "Hledger.Cli.Options",
          "name": "aliasesFromOpts",
          "normalized": "CliOpts-\u003e[(AccountName,AccountName)]",
          "package": "hledger",
          "partial": "From Opts",
          "signature": "CliOpts-\u003e[(AccountName,AccountName)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger/docs/Hledger-Cli-Options.html#v:aliasesFromOpts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Cli.Options",
          "name": "argsFlag",
          "package": "hledger",
          "signature": "FlagHelp -\u003e Arg [([Char], [Char])]",
          "source": "src/Hledger-Cli-Options.html#argsFlag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Cli Options",
          "module": "Hledger.Cli.Options",
          "name": "argsFlag",
          "normalized": "FlagHelp-\u003eArg[([Char],[Char])]",
          "package": "hledger",
          "partial": "Flag",
          "signature": "FlagHelp-\u003eArg[([Char],[Char])]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger/docs/Hledger-Cli-Options.html#v:argsFlag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse hledger CLI options from these command line arguments and\n add-on command names, or raise any error.\n\u003c/p\u003e",
          "module": "Hledger.Cli.Options",
          "name": "argsToCliOpts",
          "package": "hledger",
          "signature": "[String] -\u003e [String] -\u003e IO CliOpts",
          "source": "src/Hledger-Cli-Options.html#argsToCliOpts",
          "type": "function"
        },
        "index": {
          "description": "Parse hledger CLI options from these command line arguments and add-on command names or raise any error",
          "hierarchy": "Hledger Cli Options",
          "module": "Hledger.Cli.Options",
          "name": "argsToCliOpts",
          "normalized": "[String]-\u003e[String]-\u003eIO CliOpts",
          "package": "hledger",
          "partial": "To Cli Opts",
          "signature": "[String]-\u003e[String]-\u003eIO CliOpts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger/docs/Hledger-Cli-Options.html#v:argsToCliOpts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Cli.Options",
          "name": "balancemode",
          "package": "hledger",
          "signature": "Mode RawOpts",
          "source": "src/Hledger-Cli-Options.html#balancemode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Cli Options",
          "module": "Hledger.Cli.Options",
          "name": "balancemode",
          "package": "hledger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger/docs/Hledger-Cli-Options.html#v:balancemode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Cli.Options",
          "name": "balancesheetmode",
          "package": "hledger",
          "signature": "Mode RawOpts",
          "source": "src/Hledger-Cli-Options.html#balancesheetmode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Cli Options",
          "module": "Hledger.Cli.Options",
          "name": "balancesheetmode",
          "package": "hledger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger/docs/Hledger-Cli-Options.html#v:balancesheetmode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Cli.Options",
          "name": "boolopt",
          "package": "hledger",
          "signature": "String -\u003e RawOpts -\u003e Bool",
          "source": "src/Hledger-Cli-Options.html#boolopt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Cli Options",
          "module": "Hledger.Cli.Options",
          "name": "boolopt",
          "normalized": "String-\u003eRawOpts-\u003eBool",
          "package": "hledger",
          "signature": "String-\u003eRawOpts-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger/docs/Hledger-Cli-Options.html#v:boolopt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Cli.Options",
          "name": "cashflowmode",
          "package": "hledger",
          "signature": "Mode RawOpts",
          "source": "src/Hledger-Cli-Options.html#cashflowmode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Cli Options",
          "module": "Hledger.Cli.Options",
          "name": "cashflowmode",
          "package": "hledger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger/docs/Hledger-Cli-Options.html#v:cashflowmode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDo final validation of processed opts, raising an error if there is trouble.\n\u003c/p\u003e",
          "module": "Hledger.Cli.Options",
          "name": "checkCliOpts",
          "package": "hledger",
          "signature": "CliOpts -\u003e IO CliOpts",
          "source": "src/Hledger-Cli-Options.html#checkCliOpts",
          "type": "function"
        },
        "index": {
          "description": "Do final validation of processed opts raising an error if there is trouble",
          "hierarchy": "Hledger Cli Options",
          "module": "Hledger.Cli.Options",
          "name": "checkCliOpts",
          "normalized": "CliOpts-\u003eIO CliOpts",
          "package": "hledger",
          "partial": "Cli Opts",
          "signature": "CliOpts-\u003eIO CliOpts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger/docs/Hledger-Cli-Options.html#v:checkCliOpts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Cli.Options",
          "name": "command_",
          "package": "hledger",
          "signature": "String",
          "source": "src/Hledger-Cli-Options.html#CliOpts",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Cli Options",
          "module": "Hledger.Cli.Options",
          "name": "command_",
          "package": "hledger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger/docs/Hledger-Cli-Options.html#v:command_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Cli.Options",
          "name": "convertmode",
          "package": "hledger",
          "signature": "Mode RawOpts",
          "source": "src/Hledger-Cli-Options.html#convertmode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Cli Options",
          "module": "Hledger.Cli.Options",
          "name": "convertmode",
          "package": "hledger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger/docs/Hledger-Cli-Options.html#v:convertmode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrint debug info about arguments and options if --debug is present.\n\u003c/p\u003e",
          "module": "Hledger.Cli.Options",
          "name": "debugArgs",
          "package": "hledger",
          "signature": "[String] -\u003e CliOpts -\u003e IO ()",
          "source": "src/Hledger-Cli-Options.html#debugArgs",
          "type": "function"
        },
        "index": {
          "description": "Print debug info about arguments and options if debug is present",
          "hierarchy": "Hledger Cli Options",
          "module": "Hledger.Cli.Options",
          "name": "debugArgs",
          "normalized": "[String]-\u003eCliOpts-\u003eIO()",
          "package": "hledger",
          "partial": "Args",
          "signature": "[String]-\u003eCliOpts-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger/docs/Hledger-Cli-Options.html#v:debugArgs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edebug level, set by \u003ccode\u003e--debug[=N]\u003c/code\u003e. See also \u003ccode\u003e\u003ca\u003edebugLevel\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Hledger.Cli.Options",
          "name": "debug_",
          "package": "hledger",
          "signature": "Int",
          "source": "src/Hledger-Cli-Options.html#CliOpts",
          "type": "function"
        },
        "index": {
          "description": "debug level set by debug See also debugLevel",
          "hierarchy": "Hledger Cli Options",
          "module": "Hledger.Cli.Options",
          "name": "debug_",
          "package": "hledger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger/docs/Hledger-Cli-Options.html#v:debug_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert possibly encoded option values to regular unicode strings.\n\u003c/p\u003e",
          "module": "Hledger.Cli.Options",
          "name": "decodeRawOpts",
          "package": "hledger",
          "signature": "[(t, SystemString)] -\u003e [(t, String)]",
          "source": "src/Hledger-Cli-Options.html#decodeRawOpts",
          "type": "function"
        },
        "index": {
          "description": "Convert possibly encoded option values to regular unicode strings",
          "hierarchy": "Hledger Cli Options",
          "module": "Hledger.Cli.Options",
          "name": "decodeRawOpts",
          "normalized": "[(a,SystemString)]-\u003e[(a,String)]",
          "package": "hledger",
          "partial": "Raw Opts",
          "signature": "[(t,SystemString)]-\u003e[(t,String)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger/docs/Hledger-Cli-Options.html#v:decodeRawOpts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA basic subcommand mode with the given command name(s).\n\u003c/p\u003e",
          "module": "Hledger.Cli.Options",
          "name": "defCommandMode",
          "package": "hledger",
          "signature": "[Name] -\u003e Mode RawOpts",
          "source": "src/Hledger-Cli-Options.html#defCommandMode",
          "type": "function"
        },
        "index": {
          "description": "basic subcommand mode with the given command name",
          "hierarchy": "Hledger Cli Options",
          "module": "Hledger.Cli.Options",
          "name": "defCommandMode",
          "normalized": "[Name]-\u003eMode RawOpts",
          "package": "hledger",
          "partial": "Command Mode",
          "signature": "[Name]-\u003eMode RawOpts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger/docs/Hledger-Cli-Options.html#v:defCommandMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault width of hledger console output.\n\u003c/p\u003e",
          "module": "Hledger.Cli.Options",
          "name": "defaultWidth",
          "package": "hledger",
          "signature": "Int",
          "source": "src/Hledger-Cli-Options.html#defaultWidth",
          "type": "function"
        },
        "index": {
          "description": "Default width of hledger console output",
          "hierarchy": "Hledger Cli Options",
          "module": "Hledger.Cli.Options",
          "name": "defaultWidth",
          "package": "hledger",
          "partial": "Width",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger/docs/Hledger-Cli-Options.html#v:defaultWidth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWidth of hledger console output when the -w flag is used with no value.\n\u003c/p\u003e",
          "module": "Hledger.Cli.Options",
          "name": "defaultWidthWithFlag",
          "package": "hledger",
          "signature": "Int",
          "source": "src/Hledger-Cli-Options.html#defaultWidthWithFlag",
          "type": "function"
        },
        "index": {
          "description": "Width of hledger console output when the flag is used with no value",
          "hierarchy": "Hledger Cli Options",
          "module": "Hledger.Cli.Options",
          "name": "defaultWidthWithFlag",
          "package": "hledger",
          "partial": "Width With Flag",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger/docs/Hledger-Cli-Options.html#v:defaultWidthWithFlag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Cli.Options",
          "name": "defcliopts",
          "package": "hledger",
          "signature": "CliOpts",
          "source": "src/Hledger-Cli-Options.html#defcliopts",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Cli Options",
          "module": "Hledger.Cli.Options",
          "name": "defcliopts",
          "package": "hledger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger/docs/Hledger-Cli-Options.html#v:defcliopts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Cli.Options",
          "name": "file_",
          "package": "hledger",
          "signature": "Maybe FilePath",
          "source": "src/Hledger-Cli-Options.html#CliOpts",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Cli Options",
          "module": "Hledger.Cli.Options",
          "name": "file_",
          "package": "hledger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger/docs/Hledger-Cli-Options.html#v:file_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse the format option if provided, possibly returning an error,\n otherwise get the default value.\n\u003c/p\u003e",
          "module": "Hledger.Cli.Options",
          "name": "formatFromOpts",
          "package": "hledger",
          "signature": "ReportOpts -\u003e Either String [FormatString]",
          "source": "src/Hledger-Cli-Options.html#formatFromOpts",
          "type": "function"
        },
        "index": {
          "description": "Parse the format option if provided possibly returning an error otherwise get the default value",
          "hierarchy": "Hledger Cli Options",
          "module": "Hledger.Cli.Options",
          "name": "formatFromOpts",
          "normalized": "ReportOpts-\u003eEither String[FormatString]",
          "package": "hledger",
          "partial": "From Opts",
          "signature": "ReportOpts-\u003eEither String[FormatString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger/docs/Hledger-Cli-Options.html#v:formatFromOpts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Cli.Options",
          "name": "generalflagsgroup1",
          "package": "hledger",
          "signature": "([Char], [Flag [([Char], [Char])]])",
          "source": "src/Hledger-Cli-Options.html#generalflagsgroup1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Cli Options",
          "module": "Hledger.Cli.Options",
          "name": "generalflagsgroup1",
          "normalized": "([Char],[Flag[([Char],[Char])]])",
          "package": "hledger",
          "signature": "([Char],[Flag[([Char],[Char])]])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger/docs/Hledger-Cli-Options.html#v:generalflagsgroup1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Cli.Options",
          "name": "generalflagsgroup2",
          "package": "hledger",
          "signature": "([Char], [Flag [([Char], [Char])]])",
          "source": "src/Hledger-Cli-Options.html#generalflagsgroup2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Cli Options",
          "module": "Hledger.Cli.Options",
          "name": "generalflagsgroup2",
          "normalized": "([Char],[Flag[([Char],[Char])]])",
          "package": "hledger",
          "signature": "([Char],[Flag[([Char],[Char])]])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger/docs/Hledger-Cli-Options.html#v:generalflagsgroup2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Cli.Options",
          "name": "generalflagsgroup3",
          "package": "hledger",
          "signature": "([Char], [Flag [([Char], [Char])]])",
          "source": "src/Hledger-Cli-Options.html#generalflagsgroup3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Cli Options",
          "module": "Hledger.Cli.Options",
          "name": "generalflagsgroup3",
          "normalized": "([Char],[Flag[([Char],[Char])]])",
          "package": "hledger",
          "signature": "([Char],[Flag[([Char],[Char])]])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger/docs/Hledger-Cli-Options.html#v:generalflagsgroup3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse hledger CLI options from the command line using the given\n cmdargs mode, and either return them or, if a help flag is present,\n print the mode help and exit the program.\n\u003c/p\u003e",
          "module": "Hledger.Cli.Options",
          "name": "getCliOpts",
          "package": "hledger",
          "signature": "Mode RawOpts -\u003e IO CliOpts",
          "source": "src/Hledger-Cli-Options.html#getCliOpts",
          "type": "function"
        },
        "index": {
          "description": "Parse hledger CLI options from the command line using the given cmdargs mode and either return them or if help flag is present print the mode help and exit the program",
          "hierarchy": "Hledger Cli Options",
          "module": "Hledger.Cli.Options",
          "name": "getCliOpts",
          "normalized": "Mode RawOpts-\u003eIO CliOpts",
          "package": "hledger",
          "partial": "Cli Opts",
          "signature": "Mode RawOpts-\u003eIO CliOpts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger/docs/Hledger-Cli-Options.html#v:getCliOpts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the unique suffixes (without hledger-) of hledger-* executables\n found in the current user's PATH, or the empty list if there is any\n problem.\n\u003c/p\u003e",
          "module": "Hledger.Cli.Options",
          "name": "getHledgerAddonCommands",
          "package": "hledger",
          "signature": "IO [String]",
          "source": "src/Hledger-Cli-Options.html#getHledgerAddonCommands",
          "type": "function"
        },
        "index": {
          "description": "Get the unique suffixes without hledger of hledger executables found in the current user PATH or the empty list if there is any problem",
          "hierarchy": "Hledger Cli Options",
          "module": "Hledger.Cli.Options",
          "name": "getHledgerAddonCommands",
          "normalized": "IO[String]",
          "package": "hledger",
          "partial": "Hledger Addon Commands",
          "signature": "IO[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger/docs/Hledger-Cli-Options.html#v:getHledgerAddonCommands"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCommon help flags: --help, --debug, --version...\n\u003c/p\u003e",
          "module": "Hledger.Cli.Options",
          "name": "helpflags",
          "package": "hledger",
          "signature": "[Flag [([Char], [Char])]]",
          "source": "src/Hledger-Cli-Options.html#helpflags",
          "type": "function"
        },
        "index": {
          "description": "Common help flags help debug version",
          "hierarchy": "Hledger Cli Options",
          "module": "Hledger.Cli.Options",
          "name": "helpflags",
          "normalized": "[Flag[([Char],[Char])]]",
          "package": "hledger",
          "signature": "[Flag[([Char],[Char])]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger/docs/Hledger-Cli-Options.html#v:helpflags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIs the named option present ?\n\u003c/p\u003e",
          "module": "Hledger.Cli.Options",
          "name": "inRawOpts",
          "package": "hledger",
          "signature": "String -\u003e RawOpts -\u003e Bool",
          "source": "src/Hledger-Cli-Options.html#inRawOpts",
          "type": "function"
        },
        "index": {
          "description": "Is the named option present",
          "hierarchy": "Hledger Cli Options",
          "module": "Hledger.Cli.Options",
          "name": "inRawOpts",
          "normalized": "String-\u003eRawOpts-\u003eBool",
          "package": "hledger",
          "partial": "Raw Opts",
          "signature": "String-\u003eRawOpts-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger/docs/Hledger-Cli-Options.html#v:inRawOpts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Cli.Options",
          "name": "incomestatementmode",
          "package": "hledger",
          "signature": "Mode RawOpts",
          "source": "src/Hledger-Cli-Options.html#incomestatementmode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Cli Options",
          "module": "Hledger.Cli.Options",
          "name": "incomestatementmode",
          "package": "hledger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger/docs/Hledger-Cli-Options.html#v:incomestatementmode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCommon input-related flags: --file, --rules-file, --alias...\n\u003c/p\u003e",
          "module": "Hledger.Cli.Options",
          "name": "inputflags",
          "package": "hledger",
          "signature": "[Flag [([Char], [Char])]]",
          "source": "src/Hledger-Cli-Options.html#inputflags",
          "type": "function"
        },
        "index": {
          "description": "Common input-related flags file rules-file alias",
          "hierarchy": "Hledger Cli Options",
          "module": "Hledger.Cli.Options",
          "name": "inputflags",
          "normalized": "[Flag[([Char],[Char])]]",
          "package": "hledger",
          "signature": "[Flag[([Char],[Char])]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger/docs/Hledger-Cli-Options.html#v:inputflags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Cli.Options",
          "name": "intopt",
          "package": "hledger",
          "signature": "String -\u003e RawOpts -\u003e Int",
          "source": "src/Hledger-Cli-Options.html#intopt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Cli Options",
          "module": "Hledger.Cli.Options",
          "name": "intopt",
          "normalized": "String-\u003eRawOpts-\u003eInt",
          "package": "hledger",
          "signature": "String-\u003eRawOpts-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger/docs/Hledger-Cli-Options.html#v:intopt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the (tilde-expanded, absolute) journal file path from\n 1. options, 2. an environment variable, or 3. the default.\n\u003c/p\u003e",
          "module": "Hledger.Cli.Options",
          "name": "journalFilePathFromOpts",
          "package": "hledger",
          "signature": "CliOpts -\u003e IO String",
          "source": "src/Hledger-Cli-Options.html#journalFilePathFromOpts",
          "type": "function"
        },
        "index": {
          "description": "Get the tilde-expanded absolute journal file path from options an environment variable or the default",
          "hierarchy": "Hledger Cli Options",
          "module": "Hledger.Cli.Options",
          "name": "journalFilePathFromOpts",
          "normalized": "CliOpts-\u003eIO String",
          "package": "hledger",
          "partial": "File Path From Opts",
          "signature": "CliOpts-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger/docs/Hledger-Cli-Options.html#v:journalFilePathFromOpts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Cli.Options",
          "name": "listofstringopt",
          "package": "hledger",
          "signature": "a -\u003e [(a, t)] -\u003e [t]",
          "source": "src/Hledger-Cli-Options.html#listofstringopt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Cli Options",
          "module": "Hledger.Cli.Options",
          "name": "listofstringopt",
          "normalized": "a-\u003e[(a,b)]-\u003e[b]",
          "package": "hledger",
          "signature": "a-\u003e[(a,t)]-\u003e[t]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger/docs/Hledger-Cli-Options.html#v:listofstringopt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe top-level cmdargs mode for hledger.\n\u003c/p\u003e",
          "module": "Hledger.Cli.Options",
          "name": "mainmode",
          "package": "hledger",
          "signature": "[Name] -\u003e Mode RawOpts",
          "source": "src/Hledger-Cli-Options.html#mainmode",
          "type": "function"
        },
        "index": {
          "description": "The top-level cmdargs mode for hledger",
          "hierarchy": "Hledger Cli Options",
          "module": "Hledger.Cli.Options",
          "name": "mainmode",
          "normalized": "[Name]-\u003eMode RawOpts",
          "package": "hledger",
          "signature": "[Name]-\u003eMode RawOpts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger/docs/Hledger-Cli-Options.html#v:mainmode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Cli.Options",
          "name": "maybeintopt",
          "package": "hledger",
          "signature": "String -\u003e RawOpts -\u003e Maybe Int",
          "source": "src/Hledger-Cli-Options.html#maybeintopt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Cli Options",
          "module": "Hledger.Cli.Options",
          "name": "maybeintopt",
          "normalized": "String-\u003eRawOpts-\u003eMaybe Int",
          "package": "hledger",
          "signature": "String-\u003eRawOpts-\u003eMaybe Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger/docs/Hledger-Cli-Options.html#v:maybeintopt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Cli.Options",
          "name": "maybestringopt",
          "package": "hledger",
          "signature": "a -\u003e [(a, String)] -\u003e Maybe String",
          "source": "src/Hledger-Cli-Options.html#maybestringopt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Cli Options",
          "module": "Hledger.Cli.Options",
          "name": "maybestringopt",
          "normalized": "a-\u003e[(a,String)]-\u003eMaybe String",
          "package": "hledger",
          "signature": "a-\u003e[(a,String)]-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger/docs/Hledger-Cli-Options.html#v:maybestringopt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA hacky workaround for cmdargs not accepting flags before the\n subcommand name: try to detect and move such flags after the\n command.  This allows the user to put them in either position.\n The order of options is not preserved, but this should be ok.\n\u003c/p\u003e\u003cp\u003eSince we're not parsing flags as precisely as cmdargs here, this is\n imperfect. We make a decent effort to:\n - move all no-argument help and input flags\n - move all required-argument help and input flags along with their values, space-separated or not\n - not confuse things further or cause misleading errors.\n\u003c/p\u003e",
          "module": "Hledger.Cli.Options",
          "name": "moveFlagsAfterCommand",
          "package": "hledger",
          "signature": "[String] -\u003e [String]",
          "source": "src/Hledger-Cli-Options.html#moveFlagsAfterCommand",
          "type": "function"
        },
        "index": {
          "description": "hacky workaround for cmdargs not accepting flags before the subcommand name try to detect and move such flags after the command This allows the user to put them in either position The order of options is not preserved but this should be ok Since we re not parsing flags as precisely as cmdargs here this is imperfect We make decent effort to move all no-argument help and input flags move all required-argument help and input flags along with their values space-separated or not not confuse things further or cause misleading errors",
          "hierarchy": "Hledger Cli Options",
          "module": "Hledger.Cli.Options",
          "name": "moveFlagsAfterCommand",
          "normalized": "[String]-\u003e[String]",
          "package": "hledger",
          "partial": "Flags After Command",
          "signature": "[String]-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger/docs/Hledger-Cli-Options.html#v:moveFlagsAfterCommand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Cli.Options",
          "name": "no_new_accounts_",
          "package": "hledger",
          "signature": "Bool",
          "source": "src/Hledger-Cli-Options.html#CliOpts",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Cli Options",
          "module": "Hledger.Cli.Options",
          "name": "no_new_accounts_",
          "package": "hledger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger/docs/Hledger-Cli-Options.html#v:no_new_accounts_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRaise an error, showing the specified message plus a hint about --help.\n\u003c/p\u003e",
          "module": "Hledger.Cli.Options",
          "name": "optserror",
          "package": "hledger",
          "signature": "[Char] -\u003e c",
          "source": "src/Hledger-Cli-Options.html#optserror",
          "type": "function"
        },
        "index": {
          "description": "Raise an error showing the specified message plus hint about help",
          "hierarchy": "Hledger Cli Options",
          "module": "Hledger.Cli.Options",
          "name": "optserror",
          "normalized": "[Char]-\u003ea",
          "package": "hledger",
          "signature": "[Char]-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger/docs/Hledger-Cli-Options.html#v:optserror"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Cli.Options",
          "name": "printmode",
          "package": "hledger",
          "signature": "Mode RawOpts",
          "source": "src/Hledger-Cli-Options.html#printmode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Cli Options",
          "module": "Hledger.Cli.Options",
          "name": "printmode",
          "package": "hledger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger/docs/Hledger-Cli-Options.html#v:printmode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse raw option string values to the desired final data types.\n Any relative smart dates will be converted to fixed dates based on\n today's date. Parsing failures will raise an error.\n\u003c/p\u003e",
          "module": "Hledger.Cli.Options",
          "name": "rawOptsToCliOpts",
          "package": "hledger",
          "signature": "RawOpts -\u003e IO CliOpts",
          "source": "src/Hledger-Cli-Options.html#rawOptsToCliOpts",
          "type": "function"
        },
        "index": {
          "description": "Parse raw option string values to the desired final data types Any relative smart dates will be converted to fixed dates based on today date Parsing failures will raise an error",
          "hierarchy": "Hledger Cli Options",
          "module": "Hledger.Cli.Options",
          "name": "rawOptsToCliOpts",
          "normalized": "RawOpts-\u003eIO CliOpts",
          "package": "hledger",
          "partial": "Opts To Cli Opts",
          "signature": "RawOpts-\u003eIO CliOpts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger/docs/Hledger-Cli-Options.html#v:rawOptsToCliOpts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Cli.Options",
          "name": "rawopts_",
          "package": "hledger",
          "signature": "RawOpts",
          "source": "src/Hledger-Cli-Options.html#CliOpts",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Cli Options",
          "module": "Hledger.Cli.Options",
          "name": "rawopts_",
          "package": "hledger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger/docs/Hledger-Cli-Options.html#v:rawopts_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Cli.Options",
          "name": "registermode",
          "package": "hledger",
          "signature": "Mode RawOpts",
          "source": "src/Hledger-Cli-Options.html#registermode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Cli Options",
          "module": "Hledger.Cli.Options",
          "name": "registermode",
          "package": "hledger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger/docs/Hledger-Cli-Options.html#v:registermode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCommon report-related flags: --period, --cost, --display etc.\n\u003c/p\u003e",
          "module": "Hledger.Cli.Options",
          "name": "reportflags",
          "package": "hledger",
          "signature": "[Flag [([Char], [Char])]]",
          "source": "src/Hledger-Cli-Options.html#reportflags",
          "type": "function"
        },
        "index": {
          "description": "Common report-related flags period cost display etc",
          "hierarchy": "Hledger Cli Options",
          "module": "Hledger.Cli.Options",
          "name": "reportflags",
          "normalized": "[Flag[([Char],[Char])]]",
          "package": "hledger",
          "signature": "[Flag[([Char],[Char])]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger/docs/Hledger-Cli-Options.html#v:reportflags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Cli.Options",
          "name": "reportopts_",
          "package": "hledger",
          "signature": "ReportOpts",
          "source": "src/Hledger-Cli-Options.html#CliOpts",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Cli Options",
          "module": "Hledger.Cli.Options",
          "name": "reportopts_",
          "package": "hledger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger/docs/Hledger-Cli-Options.html#v:reportopts_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the (tilde-expanded) rules file path from options, if any.\n\u003c/p\u003e",
          "module": "Hledger.Cli.Options",
          "name": "rulesFilePathFromOpts",
          "package": "hledger",
          "signature": "CliOpts -\u003e IO (Maybe FilePath)",
          "source": "src/Hledger-Cli-Options.html#rulesFilePathFromOpts",
          "type": "function"
        },
        "index": {
          "description": "Get the tilde-expanded rules file path from options if any",
          "hierarchy": "Hledger Cli Options",
          "module": "Hledger.Cli.Options",
          "name": "rulesFilePathFromOpts",
          "normalized": "CliOpts-\u003eIO(Maybe FilePath)",
          "package": "hledger",
          "partial": "File Path From Opts",
          "signature": "CliOpts-\u003eIO(Maybe FilePath)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger/docs/Hledger-Cli-Options.html#v:rulesFilePathFromOpts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Cli.Options",
          "name": "rules_file_",
          "package": "hledger",
          "signature": "Maybe FilePath",
          "source": "src/Hledger-Cli-Options.html#CliOpts",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Cli Options",
          "module": "Hledger.Cli.Options",
          "name": "rules_file_",
          "package": "hledger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger/docs/Hledger-Cli-Options.html#v:rules_file_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Cli.Options",
          "name": "setboolopt",
          "package": "hledger",
          "signature": "t -\u003e [(t, [Char])] -\u003e [(t, [Char])]",
          "source": "src/Hledger-Cli-Options.html#setboolopt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Cli Options",
          "module": "Hledger.Cli.Options",
          "name": "setboolopt",
          "normalized": "a-\u003e[(a,[Char])]-\u003e[(a,[Char])]",
          "package": "hledger",
          "signature": "t-\u003e[(t,[Char])]-\u003e[(t,[Char])]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger/docs/Hledger-Cli-Options.html#v:setboolopt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Cli.Options",
          "name": "setopt",
          "package": "hledger",
          "signature": "t -\u003e [Char] -\u003e [(t, [Char])] -\u003e [(t, [Char])]",
          "source": "src/Hledger-Cli-Options.html#setopt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Cli Options",
          "module": "Hledger.Cli.Options",
          "name": "setopt",
          "normalized": "a-\u003e[Char]-\u003e[(a,[Char])]-\u003e[(a,[Char])]",
          "package": "hledger",
          "signature": "t-\u003e[Char]-\u003e[(t,[Char])]-\u003e[(t,[Char])]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger/docs/Hledger-Cli-Options.html#v:setopt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a mode's help message as a nicely wrapped string.\n\u003c/p\u003e",
          "module": "Hledger.Cli.Options",
          "name": "showModeHelp",
          "package": "hledger",
          "signature": "Mode a -\u003e String",
          "source": "src/Hledger-Cli-Options.html#showModeHelp",
          "type": "function"
        },
        "index": {
          "description": "Get mode help message as nicely wrapped string",
          "hierarchy": "Hledger Cli Options",
          "module": "Hledger.Cli.Options",
          "name": "showModeHelp",
          "normalized": "Mode a-\u003eString",
          "package": "hledger",
          "partial": "Mode Help",
          "signature": "Mode a-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger/docs/Hledger-Cli-Options.html#v:showModeHelp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Cli.Options",
          "name": "statsmode",
          "package": "hledger",
          "signature": "Mode RawOpts",
          "source": "src/Hledger-Cli-Options.html#statsmode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Cli Options",
          "module": "Hledger.Cli.Options",
          "name": "statsmode",
          "package": "hledger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger/docs/Hledger-Cli-Options.html#v:statsmode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Cli.Options",
          "name": "stringopt",
          "package": "hledger",
          "signature": "a -\u003e [(a, String)] -\u003e [Char]",
          "source": "src/Hledger-Cli-Options.html#stringopt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Cli Options",
          "module": "Hledger.Cli.Options",
          "name": "stringopt",
          "normalized": "a-\u003e[(a,String)]-\u003e[Char]",
          "package": "hledger",
          "signature": "a-\u003e[(a,String)]-\u003e[Char]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger/docs/Hledger-Cli-Options.html#v:stringopt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Cli.Options",
          "name": "testmode",
          "package": "hledger",
          "signature": "Mode RawOpts",
          "source": "src/Hledger-Cli-Options.html#testmode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Cli Options",
          "module": "Hledger.Cli.Options",
          "name": "testmode",
          "package": "hledger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger/docs/Hledger-Cli-Options.html#v:testmode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Cli.Options",
          "name": "tests_Hledger_Cli_Options",
          "package": "hledger",
          "signature": "Test",
          "source": "src/Hledger-Cli-Options.html#tests_Hledger_Cli_Options",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Cli Options",
          "module": "Hledger.Cli.Options",
          "name": "tests_Hledger_Cli_Options",
          "package": "hledger",
          "partial": "Hledger Cli Options",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger/docs/Hledger-Cli-Options.html#v:tests_Hledger_Cli_Options"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse the width option if provided, possibly returning an error,\n otherwise get the default value.\n\u003c/p\u003e",
          "module": "Hledger.Cli.Options",
          "name": "widthFromOpts",
          "package": "hledger",
          "signature": "CliOpts -\u003e Either String OutputWidth",
          "source": "src/Hledger-Cli-Options.html#widthFromOpts",
          "type": "function"
        },
        "index": {
          "description": "Parse the width option if provided possibly returning an error otherwise get the default value",
          "hierarchy": "Hledger Cli Options",
          "module": "Hledger.Cli.Options",
          "name": "widthFromOpts",
          "normalized": "CliOpts-\u003eEither String OutputWidth",
          "package": "hledger",
          "partial": "From Opts",
          "signature": "CliOpts-\u003eEither String OutputWidth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger/docs/Hledger-Cli-Options.html#v:widthFromOpts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Cli.Options",
          "name": "width_",
          "package": "hledger",
          "signature": "Maybe String",
          "source": "src/Hledger-Cli-Options.html#CliOpts",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Cli Options",
          "module": "Hledger.Cli.Options",
          "name": "width_",
          "package": "hledger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger/docs/Hledger-Cli-Options.html#v:width_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA ledger-compatible \u003ccode\u003eprint\u003c/code\u003e command.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Hledger.Cli.Print",
          "name": "Print",
          "package": "hledger",
          "source": "src/Hledger-Cli-Print.html",
          "type": "module"
        },
        "index": {
          "description": "ledger-compatible print command",
          "hierarchy": "Hledger Cli Print",
          "module": "Hledger.Cli.Print",
          "name": "Print",
          "package": "hledger",
          "partial": "Print",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hledger/docs/Hledger-Cli-Print.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrint journal transactions in standard format.\n\u003c/p\u003e",
          "module": "Hledger.Cli.Print",
          "name": "print'",
          "package": "hledger",
          "signature": "CliOpts -\u003e Journal -\u003e IO ()",
          "source": "src/Hledger-Cli-Print.html#print%27",
          "type": "function"
        },
        "index": {
          "description": "Print journal transactions in standard format",
          "hierarchy": "Hledger Cli Print",
          "module": "Hledger.Cli.Print",
          "name": "print'",
          "normalized": "CliOpts-\u003eJournal-\u003eIO()",
          "package": "hledger",
          "signature": "CliOpts-\u003eJournal-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger/docs/Hledger-Cli-Print.html#v:print-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Cli.Print",
          "name": "showTransactions",
          "package": "hledger",
          "signature": "ReportOpts -\u003e Query -\u003e Journal -\u003e String",
          "source": "src/Hledger-Cli-Print.html#showTransactions",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Cli Print",
          "module": "Hledger.Cli.Print",
          "name": "showTransactions",
          "normalized": "ReportOpts-\u003eQuery-\u003eJournal-\u003eString",
          "package": "hledger",
          "partial": "Transactions",
          "signature": "ReportOpts-\u003eQuery-\u003eJournal-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger/docs/Hledger-Cli-Print.html#v:showTransactions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Cli.Print",
          "name": "tests_Hledger_Cli_Print",
          "package": "hledger",
          "signature": "Test",
          "source": "src/Hledger-Cli-Print.html#tests_Hledger_Cli_Print",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Cli Print",
          "module": "Hledger.Cli.Print",
          "name": "tests_Hledger_Cli_Print",
          "package": "hledger",
          "partial": "Hledger Cli Print",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger/docs/Hledger-Cli-Print.html#v:tests_Hledger_Cli_Print"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA ledger-compatible \u003ccode\u003eregister\u003c/code\u003e command.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Hledger.Cli.Register",
          "name": "Register",
          "package": "hledger",
          "source": "src/Hledger-Cli-Register.html",
          "type": "module"
        },
        "index": {
          "description": "ledger-compatible register command",
          "hierarchy": "Hledger Cli Register",
          "module": "Hledger.Cli.Register",
          "name": "Register",
          "package": "hledger",
          "partial": "Register",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hledger/docs/Hledger-Cli-Register.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRender a register report as plain text suitable for console output.\n\u003c/p\u003e",
          "module": "Hledger.Cli.Register",
          "name": "postingsReportAsText",
          "package": "hledger",
          "signature": "CliOpts -\u003e PostingsReport -\u003e String",
          "source": "src/Hledger-Cli-Register.html#postingsReportAsText",
          "type": "function"
        },
        "index": {
          "description": "Render register report as plain text suitable for console output",
          "hierarchy": "Hledger Cli Register",
          "module": "Hledger.Cli.Register",
          "name": "postingsReportAsText",
          "normalized": "CliOpts-\u003ePostingsReport-\u003eString",
          "package": "hledger",
          "partial": "Report As Text",
          "signature": "CliOpts-\u003ePostingsReport-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger/docs/Hledger-Cli-Register.html#v:postingsReportAsText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrint a (posting) register report.\n\u003c/p\u003e",
          "module": "Hledger.Cli.Register",
          "name": "register",
          "package": "hledger",
          "signature": "CliOpts -\u003e Journal -\u003e IO ()",
          "source": "src/Hledger-Cli-Register.html#register",
          "type": "function"
        },
        "index": {
          "description": "Print posting register report",
          "hierarchy": "Hledger Cli Register",
          "module": "Hledger.Cli.Register",
          "name": "register",
          "normalized": "CliOpts-\u003eJournal-\u003eIO()",
          "package": "hledger",
          "signature": "CliOpts-\u003eJournal-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger/docs/Hledger-Cli-Register.html#v:register"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Cli.Register",
          "name": "tests_Hledger_Cli_Register",
          "package": "hledger",
          "signature": "Test",
          "source": "src/Hledger-Cli-Register.html#tests_Hledger_Cli_Register",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Cli Register",
          "module": "Hledger.Cli.Register",
          "name": "tests_Hledger_Cli_Register",
          "package": "hledger",
          "partial": "Hledger Cli Register",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger/docs/Hledger-Cli-Register.html#v:tests_Hledger_Cli_Register"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePrint some statistics for the journal.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Hledger.Cli.Stats",
          "name": "Stats",
          "package": "hledger",
          "source": "src/Hledger-Cli-Stats.html",
          "type": "module"
        },
        "index": {
          "description": "Print some statistics for the journal",
          "hierarchy": "Hledger Cli Stats",
          "module": "Hledger.Cli.Stats",
          "name": "Stats",
          "package": "hledger",
          "partial": "Stats",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hledger/docs/Hledger-Cli-Stats.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Cli.Stats",
          "name": "showLedgerStats",
          "package": "hledger",
          "signature": "Ledger -\u003e Day -\u003e DateSpan -\u003e String",
          "source": "src/Hledger-Cli-Stats.html#showLedgerStats",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Cli Stats",
          "module": "Hledger.Cli.Stats",
          "name": "showLedgerStats",
          "normalized": "Ledger-\u003eDay-\u003eDateSpan-\u003eString",
          "package": "hledger",
          "partial": "Ledger Stats",
          "signature": "Ledger-\u003eDay-\u003eDateSpan-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger/docs/Hledger-Cli-Stats.html#v:showLedgerStats"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrint various statistics for the journal.\n\u003c/p\u003e",
          "module": "Hledger.Cli.Stats",
          "name": "stats",
          "package": "hledger",
          "signature": "CliOpts -\u003e Journal -\u003e IO ()",
          "source": "src/Hledger-Cli-Stats.html#stats",
          "type": "function"
        },
        "index": {
          "description": "Print various statistics for the journal",
          "hierarchy": "Hledger Cli Stats",
          "module": "Hledger.Cli.Stats",
          "name": "stats",
          "normalized": "CliOpts-\u003eJournal-\u003eIO()",
          "package": "hledger",
          "signature": "CliOpts-\u003eJournal-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger/docs/Hledger-Cli-Stats.html#v:stats"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA simple test runner for hledger's built-in unit tests.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Hledger.Cli.Tests",
          "name": "Tests",
          "package": "hledger",
          "source": "src/Hledger-Cli-Tests.html",
          "type": "module"
        },
        "index": {
          "description": "simple test runner for hledger built-in unit tests",
          "hierarchy": "Hledger Cli Tests",
          "module": "Hledger.Cli.Tests",
          "name": "Tests",
          "package": "hledger",
          "partial": "Tests",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hledger/docs/Hledger-Cli-Tests.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll or pattern-matched tests, as a flat list to show simple names.\n\u003c/p\u003e",
          "module": "Hledger.Cli.Tests",
          "name": "flatTests",
          "package": "hledger",
          "signature": "CliOpts -\u003e Test",
          "source": "src/Hledger-Cli-Tests.html#flatTests",
          "type": "function"
        },
        "index": {
          "description": "All or pattern-matched tests as flat list to show simple names",
          "hierarchy": "Hledger Cli Tests",
          "module": "Hledger.Cli.Tests",
          "name": "flatTests",
          "normalized": "CliOpts-\u003eTest",
          "package": "hledger",
          "partial": "Tests",
          "signature": "CliOpts-\u003eTest",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger/docs/Hledger-Cli-Tests.html#v:flatTests"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll or pattern-matched tests, in the original suites to show hierarchical names.\n\u003c/p\u003e",
          "module": "Hledger.Cli.Tests",
          "name": "hierarchicalTests",
          "package": "hledger",
          "signature": "CliOpts -\u003e Test",
          "source": "src/Hledger-Cli-Tests.html#hierarchicalTests",
          "type": "function"
        },
        "index": {
          "description": "All or pattern-matched tests in the original suites to show hierarchical names",
          "hierarchy": "Hledger Cli Tests",
          "module": "Hledger.Cli.Tests",
          "name": "hierarchicalTests",
          "normalized": "CliOpts-\u003eTest",
          "package": "hledger",
          "partial": "Tests",
          "signature": "CliOpts-\u003eTest",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger/docs/Hledger-Cli-Tests.html#v:hierarchicalTests"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun all or just the matched unit tests and return their HUnit result counts.\n\u003c/p\u003e",
          "module": "Hledger.Cli.Tests",
          "name": "runTests",
          "package": "hledger",
          "signature": "CliOpts -\u003e IO Counts",
          "source": "src/Hledger-Cli-Tests.html#runTests",
          "type": "function"
        },
        "index": {
          "description": "Run all or just the matched unit tests and return their HUnit result counts",
          "hierarchy": "Hledger Cli Tests",
          "module": "Hledger.Cli.Tests",
          "name": "runTests",
          "normalized": "CliOpts-\u003eIO Counts",
          "package": "hledger",
          "partial": "Tests",
          "signature": "CliOpts-\u003eIO Counts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger/docs/Hledger-Cli-Tests.html#v:runTests"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun all or just the matched unit tests until the first failure or\n error, returning the name of the problem test if any.\n\u003c/p\u003e",
          "module": "Hledger.Cli.Tests",
          "name": "runTestsTillFailure",
          "package": "hledger",
          "signature": "CliOpts -\u003e IO (Maybe String)",
          "source": "src/Hledger-Cli-Tests.html#runTestsTillFailure",
          "type": "function"
        },
        "index": {
          "description": "Run all or just the matched unit tests until the first failure or error returning the name of the problem test if any",
          "hierarchy": "Hledger Cli Tests",
          "module": "Hledger.Cli.Tests",
          "name": "runTestsTillFailure",
          "normalized": "CliOpts-\u003eIO(Maybe String)",
          "package": "hledger",
          "partial": "Tests Till Failure",
          "signature": "CliOpts-\u003eIO(Maybe String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger/docs/Hledger-Cli-Tests.html#v:runTestsTillFailure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun HUnit unit tests and exit with success or failure.\n\u003c/p\u003e",
          "module": "Hledger.Cli.Tests",
          "name": "test'",
          "package": "hledger",
          "signature": "CliOpts -\u003e IO ()",
          "source": "src/Hledger-Cli-Tests.html#test%27",
          "type": "function"
        },
        "index": {
          "description": "Run HUnit unit tests and exit with success or failure",
          "hierarchy": "Hledger Cli Tests",
          "module": "Hledger.Cli.Tests",
          "name": "test'",
          "normalized": "CliOpts-\u003eIO()",
          "package": "hledger",
          "signature": "CliOpts-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger/docs/Hledger-Cli-Tests.html#v:test-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUtilities for top-level modules and ghci. See also Hledger.Read and\nHledger.Utils.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Hledger.Cli.Utils",
          "name": "Utils",
          "package": "hledger",
          "source": "src/Hledger-Cli-Utils.html",
          "type": "module"
        },
        "index": {
          "description": "Utilities for top-level modules and ghci See also Hledger.Read and Hledger.Utils",
          "hierarchy": "Hledger Cli Utils",
          "module": "Hledger.Cli.Utils",
          "name": "Utils",
          "package": "hledger",
          "partial": "Utils",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hledger/docs/Hledger-Cli-Utils.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe basic structure used to create an annotated tree of test cases.\n\u003c/p\u003e",
          "module": "Hledger.Cli.Utils",
          "name": "Test",
          "package": "hledger",
          "type": "data"
        },
        "index": {
          "description": "The basic structure used to create an annotated tree of test cases",
          "hierarchy": "Hledger Cli Utils",
          "module": "Hledger.Cli.Utils",
          "name": "Test",
          "package": "hledger",
          "partial": "Test",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hledger/docs/Hledger-Cli-Utils.html#t:Test"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA set of \u003ccode\u003eTest\u003c/code\u003es sharing the same level in the hierarchy. \n\u003c/p\u003e",
          "module": "Hledger.Cli.Utils",
          "name": "TestList",
          "package": "hledger",
          "signature": "TestList [Test]",
          "type": "function"
        },
        "index": {
          "description": "set of Test sharing the same level in the hierarchy",
          "hierarchy": "Hledger Cli Utils",
          "module": "Hledger.Cli.Utils",
          "name": "TestList",
          "normalized": "TestList[Test]",
          "package": "hledger",
          "partial": "Test List",
          "signature": "TestList[Test]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger/docs/Hledger-Cli-Utils.html#v:TestList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the last modified time of the specified file, or if it does not\n exist or there is some other error, the current time.\n\u003c/p\u003e",
          "module": "Hledger.Cli.Utils",
          "name": "fileModificationTime",
          "package": "hledger",
          "signature": "FilePath -\u003e IO ClockTime",
          "source": "src/Hledger-Cli-Utils.html#fileModificationTime",
          "type": "function"
        },
        "index": {
          "description": "Get the last modified time of the specified file or if it does not exist or there is some other error the current time",
          "hierarchy": "Hledger Cli Utils",
          "module": "Hledger.Cli.Utils",
          "name": "fileModificationTime",
          "normalized": "FilePath-\u003eIO ClockTime",
          "package": "hledger",
          "partial": "Modification Time",
          "signature": "FilePath-\u003eIO ClockTime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger/docs/Hledger-Cli-Utils.html#v:fileModificationTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHas the journal's main data file changed since the journal was last\n read ?\n\u003c/p\u003e",
          "module": "Hledger.Cli.Utils",
          "name": "journalFileIsNewer",
          "package": "hledger",
          "signature": "Journal -\u003e IO Bool",
          "source": "src/Hledger-Cli-Utils.html#journalFileIsNewer",
          "type": "function"
        },
        "index": {
          "description": "Has the journal main data file changed since the journal was last read",
          "hierarchy": "Hledger Cli Utils",
          "module": "Hledger.Cli.Utils",
          "name": "journalFileIsNewer",
          "normalized": "Journal-\u003eIO Bool",
          "package": "hledger",
          "partial": "File Is Newer",
          "signature": "Journal-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger/docs/Hledger-Cli-Utils.html#v:journalFileIsNewer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRe-read a journal from its data file, or return an error string.\n\u003c/p\u003e",
          "module": "Hledger.Cli.Utils",
          "name": "journalReload",
          "package": "hledger",
          "signature": "Journal -\u003e IO (Either String Journal)",
          "source": "src/Hledger-Cli-Utils.html#journalReload",
          "type": "function"
        },
        "index": {
          "description": "Re-read journal from its data file or return an error string",
          "hierarchy": "Hledger Cli Utils",
          "module": "Hledger.Cli.Utils",
          "name": "journalReload",
          "normalized": "Journal-\u003eIO(Either String Journal)",
          "package": "hledger",
          "partial": "Reload",
          "signature": "Journal-\u003eIO(Either String Journal)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger/docs/Hledger-Cli-Utils.html#v:journalReload"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRe-read a journal from its data file mostly, only if the file has\n changed since last read (or if there is no file, ie data read from\n stdin). The provided options are mostly ignored. Return a journal or\n the error message while reading it, and a flag indicating whether it\n was re-read or not.\n\u003c/p\u003e",
          "module": "Hledger.Cli.Utils",
          "name": "journalReloadIfChanged",
          "package": "hledger",
          "signature": "CliOpts -\u003e Journal -\u003e IO (Either String Journal, Bool)",
          "source": "src/Hledger-Cli-Utils.html#journalReloadIfChanged",
          "type": "function"
        },
        "index": {
          "description": "Re-read journal from its data file mostly only if the file has changed since last read or if there is no file ie data read from stdin The provided options are mostly ignored Return journal or the error message while reading it and flag indicating whether it was re-read or not",
          "hierarchy": "Hledger Cli Utils",
          "module": "Hledger.Cli.Utils",
          "name": "journalReloadIfChanged",
          "normalized": "CliOpts-\u003eJournal-\u003eIO(Either String Journal,Bool)",
          "package": "hledger",
          "partial": "Reload If Changed",
          "signature": "CliOpts-\u003eJournal-\u003eIO(Either String Journal,Bool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger/docs/Hledger-Cli-Utils.html#v:journalReloadIfChanged"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHas the specified file (presumably one of journal's data files)\n changed since journal was last read ?\n\u003c/p\u003e",
          "module": "Hledger.Cli.Utils",
          "name": "journalSpecifiedFileIsNewer",
          "package": "hledger",
          "signature": "Journal -\u003e FilePath -\u003e IO Bool",
          "source": "src/Hledger-Cli-Utils.html#journalSpecifiedFileIsNewer",
          "type": "function"
        },
        "index": {
          "description": "Has the specified file presumably one of journal data files changed since journal was last read",
          "hierarchy": "Hledger Cli Utils",
          "module": "Hledger.Cli.Utils",
          "name": "journalSpecifiedFileIsNewer",
          "normalized": "Journal-\u003eFilePath-\u003eIO Bool",
          "package": "hledger",
          "partial": "Specified File Is Newer",
          "signature": "Journal-\u003eFilePath-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger/docs/Hledger-Cli-Utils.html#v:journalSpecifiedFileIsNewer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAttempt to open a web browser on the given url, all platforms.\n\u003c/p\u003e",
          "module": "Hledger.Cli.Utils",
          "name": "openBrowserOn",
          "package": "hledger",
          "signature": "String -\u003e IO ExitCode",
          "source": "src/Hledger-Cli-Utils.html#openBrowserOn",
          "type": "function"
        },
        "index": {
          "description": "Attempt to open web browser on the given url all platforms",
          "hierarchy": "Hledger Cli Utils",
          "module": "Hledger.Cli.Utils",
          "name": "openBrowserOn",
          "normalized": "String-\u003eIO ExitCode",
          "package": "hledger",
          "partial": "Browser On",
          "signature": "String-\u003eIO ExitCode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger/docs/Hledger-Cli-Utils.html#v:openBrowserOn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Cli.Utils",
          "name": "readFileStrictly",
          "package": "hledger",
          "signature": "FilePath -\u003e IO String",
          "source": "src/Hledger-Cli-Utils.html#readFileStrictly",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Cli Utils",
          "module": "Hledger.Cli.Utils",
          "name": "readFileStrictly",
          "normalized": "FilePath-\u003eIO String",
          "package": "hledger",
          "partial": "File Strictly",
          "signature": "FilePath-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger/docs/Hledger-Cli-Utils.html#v:readFileStrictly"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse the user's specified journal file and run a hledger command on\n it, or throw an error.\n\u003c/p\u003e",
          "module": "Hledger.Cli.Utils",
          "name": "withJournalDo",
          "package": "hledger",
          "signature": "CliOpts -\u003e (CliOpts -\u003e Journal -\u003e IO ()) -\u003e IO ()",
          "source": "src/Hledger-Cli-Utils.html#withJournalDo",
          "type": "function"
        },
        "index": {
          "description": "Parse the user specified journal file and run hledger command on it or throw an error",
          "hierarchy": "Hledger Cli Utils",
          "module": "Hledger.Cli.Utils",
          "name": "withJournalDo",
          "normalized": "CliOpts-\u003e(CliOpts-\u003eJournal-\u003eIO())-\u003eIO()",
          "package": "hledger",
          "partial": "Journal Do",
          "signature": "CliOpts-\u003e(CliOpts-\u003eJournal-\u003eIO())-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger/docs/Hledger-Cli-Utils.html#v:withJournalDo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBack up this file with a (incrementing) numbered suffix, then\n overwrite it with this new text, or give an error.\n\u003c/p\u003e",
          "module": "Hledger.Cli.Utils",
          "name": "writeFileWithBackup",
          "package": "hledger",
          "signature": "FilePath -\u003e String -\u003e IO ()",
          "source": "src/Hledger-Cli-Utils.html#writeFileWithBackup",
          "type": "function"
        },
        "index": {
          "description": "Back up this file with incrementing numbered suffix then overwrite it with this new text or give an error",
          "hierarchy": "Hledger Cli Utils",
          "module": "Hledger.Cli.Utils",
          "name": "writeFileWithBackup",
          "normalized": "FilePath-\u003eString-\u003eIO()",
          "package": "hledger",
          "partial": "File With Backup",
          "signature": "FilePath-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger/docs/Hledger-Cli-Utils.html#v:writeFileWithBackup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBack up this file with a (incrementing) numbered suffix then\n overwrite it with this new text, or give an error, but only if the text\n is different from the current file contents, and return a flag\n indicating whether we did anything.\n\u003c/p\u003e",
          "module": "Hledger.Cli.Utils",
          "name": "writeFileWithBackupIfChanged",
          "package": "hledger",
          "signature": "FilePath -\u003e String -\u003e IO Bool",
          "source": "src/Hledger-Cli-Utils.html#writeFileWithBackupIfChanged",
          "type": "function"
        },
        "index": {
          "description": "Back up this file with incrementing numbered suffix then overwrite it with this new text or give an error but only if the text is different from the current file contents and return flag indicating whether we did anything",
          "hierarchy": "Hledger Cli Utils",
          "module": "Hledger.Cli.Utils",
          "name": "writeFileWithBackupIfChanged",
          "normalized": "FilePath-\u003eString-\u003eIO Bool",
          "package": "hledger",
          "partial": "File With Backup If Changed",
          "signature": "FilePath-\u003eString-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger/docs/Hledger-Cli-Utils.html#v:writeFileWithBackupIfChanged"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Cli.Version",
          "name": "Version",
          "package": "hledger",
          "source": "src/Hledger-Cli-Version.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Hledger Cli Version",
          "module": "Hledger.Cli.Version",
          "name": "Version",
          "package": "hledger",
          "partial": "Version",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hledger/docs/Hledger-Cli-Version.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a program name, return a precise platform-specific executable\n name suitable for naming downloadable binaries.  Can raise an error if\n the version and patch level was not defined correctly at build time.\n\u003c/p\u003e",
          "module": "Hledger.Cli.Version",
          "name": "binaryfilename",
          "package": "hledger",
          "signature": "String -\u003e String",
          "source": "src/Hledger-Cli-Version.html#binaryfilename",
          "type": "function"
        },
        "index": {
          "description": "Given program name return precise platform-specific executable name suitable for naming downloadable binaries Can raise an error if the version and patch level was not defined correctly at build time",
          "hierarchy": "Hledger Cli Version",
          "module": "Hledger.Cli.Version",
          "name": "binaryfilename",
          "normalized": "String-\u003eString",
          "package": "hledger",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger/docs/Hledger-Cli-Version.html#v:binaryfilename"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Cli.Version",
          "name": "progname",
          "package": "hledger",
          "signature": "String",
          "source": "src/Hledger-Cli-Version.html#progname",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Cli Version",
          "module": "Hledger.Cli.Version",
          "name": "progname",
          "package": "hledger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger/docs/Hledger-Cli-Version.html#v:progname"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Cli.Version",
          "name": "prognameandversion",
          "package": "hledger",
          "signature": "String",
          "source": "src/Hledger-Cli-Version.html#prognameandversion",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Cli Version",
          "module": "Hledger.Cli.Version",
          "name": "prognameandversion",
          "package": "hledger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger/docs/Hledger-Cli-Version.html#v:prognameandversion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Cli.Version",
          "name": "version",
          "package": "hledger",
          "signature": "String",
          "source": "src/Hledger-Cli-Version.html#version",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Cli Version",
          "module": "Hledger.Cli.Version",
          "name": "version",
          "package": "hledger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger/docs/Hledger-Cli-Version.html#v:version"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHledger.Cli re-exports the options, utilities and commands provided by\nthe hledger command-line program. This module also aggregates the\nbuilt-in unit tests defined throughout hledger and hledger-lib, and\nadds some more which are easier to define here.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Hledger.Cli",
          "name": "Cli",
          "package": "hledger",
          "source": "src/Hledger-Cli.html",
          "type": "module"
        },
        "index": {
          "description": "Hledger.Cli re-exports the options utilities and commands provided by the hledger command-line program This module also aggregates the built-in unit tests defined throughout hledger and hledger-lib and adds some more which are easier to define here",
          "hierarchy": "Hledger Cli",
          "module": "Hledger.Cli",
          "name": "Cli",
          "package": "hledger",
          "partial": "Cli",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hledger/docs/Hledger-Cli.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hledger.Cli",
          "name": "tests_Hledger_Cli",
          "package": "hledger",
          "signature": "Test",
          "source": "src/Hledger-Cli.html#tests_Hledger_Cli",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hledger Cli",
          "module": "Hledger.Cli",
          "name": "tests_Hledger_Cli",
          "package": "hledger",
          "partial": "Hledger Cli",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hledger/docs/Hledger-Cli.html#v:tests_Hledger_Cli"
      }
    }
  ]
]