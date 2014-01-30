[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pop3-client/docs/Network-POP3-Client.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains function to connect to a POP3 server and \n retrieve messages and other information from it. \n\u003c/p\u003e\u003cp\u003eThis library is designed to be safe to use: connections are\n guaranteed to be closed after the POP3 commands have been executed.\n\u003c/p\u003e\u003cp\u003eExample of downloading the latest email message:\n\u003c/p\u003e\u003cpre\u003e\nmodule Main where \n\nimport Network.POP3.Client\n\nmain :: IO ()\nmain = do\n    let account = POP3Account \"pop3.example.org\" defaultPort \"my_username\" \"my_password\"\n    message \u003c- withPOP3 account $ do\n        total \u003c- getNumberOfMessages\n        getMessage total\n    putStrLn $ show message\n\u003c/pre\u003e\u003cp\u003eExample using the hsemail package to parse the message headers and body:\n\u003c/p\u003e\u003cpre\u003e\nmodule Main where \n\nimport Network.POP3.Client\nimport Control.Monad.Error\nimport Text.ParserCombinators.Parsec\nimport Text.ParserCombinators.Parsec.Error\nimport qualified Text.ParserCombinators.Parsec.Rfc2822 as MP\n\nparseMessage s = case parse MP.message \"\" s of\n    Left err -\u003e throwError $ concatMap messageString (errorMessages err)\n    Right m  -\u003e return m\n\nmain :: IO ()\nmain = do\n    -- retrieve 5 latest messages and parse them using hsemail\n    let account = POP3Account \"pop3.example.org\" defaultPort \"my_username\" \"my_password\"\n    messages \u003c- withPOP3 account $ do\n        total \u003c- getNumberOfMessages\n        messages \u003c- mapM getMessage $ take 5 (reverse [1..total])\n        mapM parseMessage messages\n    putStrLn $ show messages\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Network.POP3.Client",
        "fct-package": "pop3-client",
        "fct-signature": "module",
        "fct-source": "src/Network-POP3-Client.html",
        "fct-type": "module",
        "title": "Client"
      },
      "index": {
        "description": "This module contains function to connect to POP3 server and retrieve messages and other information from it This library is designed to be safe to use connections are guaranteed to be closed after the POP3 commands have been executed Example of downloading the latest email message module Main where import Network.POP3.Client main IO main do let account POP3Account pop3.example.org defaultPort my username my password message withPOP3 account do total getNumberOfMessages getMessage total putStrLn show message Example using the hsemail package to parse the message headers and body module Main where import Network.POP3.Client import Control.Monad.Error import Text.ParserCombinators.Parsec import Text.ParserCombinators.Parsec.Error import qualified Text.ParserCombinators.Parsec.Rfc2822 as MP parseMessage case parse MP.message of Left err throwError concatMap messageString errorMessages err Right return main IO main do retrieve latest messages and parse them using hsemail let account POP3Account pop3.example.org defaultPort my username my password messages withPOP3 account do total getNumberOfMessages messages mapM getMessage take reverse total mapM parseMessage messages putStrLn show messages",
        "hierarchy": "Network POP3 Client",
        "module": "Network.POP3.Client",
        "name": "Client",
        "normalized": "",
        "package": "pop3-client",
        "partial": "Client",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pop3-client/docs/Network-POP3-Client.html#t:MessageID",
      "description": {
        "fct-descr": "\u003cp\u003eThe message ID as the position in the list of messages on the server, from [1..getNumberOfMessages].\n   Note that this type does NOT represent the unique IDs (UIDL) of messages as returned by getUniqueID.\n\u003c/p\u003e",
        "fct-module": "Network.POP3.Client",
        "fct-package": "pop3-client",
        "fct-signature": "type",
        "fct-source": "src/Network-POP3-Client.html#MessageID",
        "fct-type": "type",
        "title": "MessageID"
      },
      "index": {
        "description": "The message ID as the position in the list of messages on the server from getNumberOfMessages Note that this type does NOT represent the unique IDs UIDL of messages as returned by getUniqueID",
        "hierarchy": "Network POP3 Client",
        "module": "Network.POP3.Client",
        "name": "MessageID",
        "normalized": "",
        "package": "pop3-client",
        "partial": "Message ID",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pop3-client/docs/Network-POP3-Client.html#t:POP3",
      "description": {
        "fct-descr": "\u003cp\u003eThe POP3 action. \n   Encapsulates the network connection handle and provides error handling.\n\u003c/p\u003e",
        "fct-module": "Network.POP3.Client",
        "fct-package": "pop3-client",
        "fct-signature": "type",
        "fct-source": "src/Network-POP3-Client.html#POP3",
        "fct-type": "type",
        "title": "POP3"
      },
      "index": {
        "description": "The POP3 action Encapsulates the network connection handle and provides error handling",
        "hierarchy": "Network POP3 Client",
        "module": "Network.POP3.Client",
        "name": "POP3",
        "normalized": "",
        "package": "pop3-client",
        "partial": "POP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pop3-client/docs/Network-POP3-Client.html#t:POP3Account",
      "description": {
        "fct-descr": "\u003cp\u003eA record which contains all settings needed to connect to a POP3 server and to authenticate.\n\u003c/p\u003e",
        "fct-module": "Network.POP3.Client",
        "fct-package": "pop3-client",
        "fct-signature": "data",
        "fct-source": "src/Network-POP3-Client.html#POP3Account",
        "fct-type": "data",
        "title": "POP3Account"
      },
      "index": {
        "description": "record which contains all settings needed to connect to POP3 server and to authenticate",
        "hierarchy": "Network POP3 Client",
        "module": "Network.POP3.Client",
        "name": "POP3Account",
        "normalized": "",
        "package": "pop3-client",
        "partial": "POP Account",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pop3-client/docs/Network-POP3-Client.html#v:POP3Account",
      "description": {
        "fct-module": "Network.POP3.Client",
        "fct-package": "pop3-client",
        "fct-signature": "POP3Account",
        "fct-source": "src/Network-POP3-Client.html#POP3Account",
        "fct-type": "function",
        "title": "POP3Account"
      },
      "index": {
        "description": "",
        "hierarchy": "Network POP3 Client",
        "module": "Network.POP3.Client",
        "name": "POP3Account",
        "normalized": "",
        "package": "pop3-client",
        "partial": "POP Account",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pop3-client/docs/Network-POP3-Client.html#v:accHostname",
      "description": {
        "fct-descr": "\u003cp\u003eThe hostname of the server to connect to\n\u003c/p\u003e",
        "fct-module": "Network.POP3.Client",
        "fct-package": "pop3-client",
        "fct-signature": "String",
        "fct-source": "src/Network-POP3-Client.html#POP3Account",
        "fct-type": "function",
        "title": "accHostname"
      },
      "index": {
        "description": "The hostname of the server to connect to",
        "hierarchy": "Network POP3 Client",
        "module": "Network.POP3.Client",
        "name": "accHostname",
        "normalized": "",
        "package": "pop3-client",
        "partial": "Hostname",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pop3-client/docs/Network-POP3-Client.html#v:accPassword",
      "description": {
        "fct-descr": "\u003cp\u003eThe password to login with\n\u003c/p\u003e",
        "fct-module": "Network.POP3.Client",
        "fct-package": "pop3-client",
        "fct-signature": "String",
        "fct-source": "src/Network-POP3-Client.html#POP3Account",
        "fct-type": "function",
        "title": "accPassword"
      },
      "index": {
        "description": "The password to login with",
        "hierarchy": "Network POP3 Client",
        "module": "Network.POP3.Client",
        "name": "accPassword",
        "normalized": "",
        "package": "pop3-client",
        "partial": "Password",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pop3-client/docs/Network-POP3-Client.html#v:accPort",
      "description": {
        "fct-descr": "\u003cp\u003eThe port to connect to (use defaultPort if you want to use the default POP3 port)\n\u003c/p\u003e",
        "fct-module": "Network.POP3.Client",
        "fct-package": "pop3-client",
        "fct-signature": "Int",
        "fct-source": "src/Network-POP3-Client.html#POP3Account",
        "fct-type": "function",
        "title": "accPort"
      },
      "index": {
        "description": "The port to connect to use defaultPort if you want to use the default POP3 port",
        "hierarchy": "Network POP3 Client",
        "module": "Network.POP3.Client",
        "name": "accPort",
        "normalized": "",
        "package": "pop3-client",
        "partial": "Port",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pop3-client/docs/Network-POP3-Client.html#v:accUsername",
      "description": {
        "fct-descr": "\u003cp\u003eThe username to login with\n\u003c/p\u003e",
        "fct-module": "Network.POP3.Client",
        "fct-package": "pop3-client",
        "fct-signature": "String",
        "fct-source": "src/Network-POP3-Client.html#POP3Account",
        "fct-type": "function",
        "title": "accUsername"
      },
      "index": {
        "description": "The username to login with",
        "hierarchy": "Network POP3 Client",
        "module": "Network.POP3.Client",
        "name": "accUsername",
        "normalized": "",
        "package": "pop3-client",
        "partial": "Username",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pop3-client/docs/Network-POP3-Client.html#v:defaultPort",
      "description": {
        "fct-descr": "\u003cp\u003eDefault POP3 port (110)\n\u003c/p\u003e",
        "fct-module": "Network.POP3.Client",
        "fct-package": "pop3-client",
        "fct-signature": "Int",
        "fct-source": "src/Network-POP3-Client.html#defaultPort",
        "fct-type": "function",
        "title": "defaultPort"
      },
      "index": {
        "description": "Default POP3 port",
        "hierarchy": "Network POP3 Client",
        "module": "Network.POP3.Client",
        "name": "defaultPort",
        "normalized": "",
        "package": "pop3-client",
        "partial": "Port",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pop3-client/docs/Network-POP3-Client.html#v:deleteMessage",
      "description": {
        "fct-descr": "\u003cp\u003eMarks a message as to be deleted and returns a Bool which indicates a success. \n\tThe message ID should be in the range [1..\u003ccode\u003e\u003ca\u003egetNumberOfMessages\u003c/a\u003e\u003c/code\u003e]. \n\tThe message will actually be deleted from the server on QUIT.\n\u003c/p\u003e",
        "fct-module": "Network.POP3.Client",
        "fct-package": "pop3-client",
        "fct-signature": "MessageID -\u003e POP3 String",
        "fct-source": "src/Network-POP3-Client.html#deleteMessage",
        "fct-type": "function",
        "title": "deleteMessage"
      },
      "index": {
        "description": "Marks message as to be deleted and returns Bool which indicates success The message ID should be in the range getNumberOfMessages The message will actually be deleted from the server on QUIT",
        "hierarchy": "Network POP3 Client",
        "module": "Network.POP3.Client",
        "name": "deleteMessage",
        "normalized": "MessageID-\u003ePOP String",
        "package": "pop3-client",
        "partial": "Message",
        "signature": "MessageID-\u003ePOP String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pop3-client/docs/Network-POP3-Client.html#v:getFirstNLines",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieves a the headers and the first n lines of a message from the server \n   and returns it parsed as a \u003ccode\u003eMessage\u003c/code\u003e.\n   The message ID should be in the range [1..\u003ccode\u003e\u003ca\u003egetNumberOfMessages\u003c/a\u003e\u003c/code\u003e].\n\u003c/p\u003e",
        "fct-module": "Network.POP3.Client",
        "fct-package": "pop3-client",
        "fct-signature": "MessageID -\u003e Integer -\u003e POP3 String",
        "fct-source": "src/Network-POP3-Client.html#getFirstNLines",
        "fct-type": "function",
        "title": "getFirstNLines"
      },
      "index": {
        "description": "Retrieves the headers and the first lines of message from the server and returns it parsed as Message The message ID should be in the range getNumberOfMessages",
        "hierarchy": "Network POP3 Client",
        "module": "Network.POP3.Client",
        "name": "getFirstNLines",
        "normalized": "MessageID-\u003eInteger-\u003ePOP String",
        "package": "pop3-client",
        "partial": "First NLines",
        "signature": "MessageID-\u003eInteger-\u003ePOP String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pop3-client/docs/Network-POP3-Client.html#v:getHeaders",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieves a the headers of a message from the server and returns it parsed as a \u003ccode\u003eMessage\u003c/code\u003e.\n   The message ID should be in the range [1..\u003ccode\u003e\u003ca\u003egetNumberOfMessages\u003c/a\u003e\u003c/code\u003e].\n\u003c/p\u003e",
        "fct-module": "Network.POP3.Client",
        "fct-package": "pop3-client",
        "fct-signature": "MessageID -\u003e POP3 String",
        "fct-source": "src/Network-POP3-Client.html#getHeaders",
        "fct-type": "function",
        "title": "getHeaders"
      },
      "index": {
        "description": "Retrieves the headers of message from the server and returns it parsed as Message The message ID should be in the range getNumberOfMessages",
        "hierarchy": "Network POP3 Client",
        "module": "Network.POP3.Client",
        "name": "getHeaders",
        "normalized": "MessageID-\u003ePOP String",
        "package": "pop3-client",
        "partial": "Headers",
        "signature": "MessageID-\u003ePOP String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pop3-client/docs/Network-POP3-Client.html#v:getMailboxBytes",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the size of the POP3 mailbox in bytes.\n\u003c/p\u003e",
        "fct-module": "Network.POP3.Client",
        "fct-package": "pop3-client",
        "fct-signature": "POP3 Integer",
        "fct-source": "src/Network-POP3-Client.html#getMailboxBytes",
        "fct-type": "function",
        "title": "getMailboxBytes"
      },
      "index": {
        "description": "Returns the size of the POP3 mailbox in bytes",
        "hierarchy": "Network POP3 Client",
        "module": "Network.POP3.Client",
        "name": "getMailboxBytes",
        "normalized": "",
        "package": "pop3-client",
        "partial": "Mailbox Bytes",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pop3-client/docs/Network-POP3-Client.html#v:getMessage",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieves a POP3 message from the server and returns it parsed as a \u003ccode\u003eMessage\u003c/code\u003e.\n   The message ID should be in the range [1..\u003ccode\u003e\u003ca\u003egetNumberOfMessages\u003c/a\u003e\u003c/code\u003e].\n\u003c/p\u003e",
        "fct-module": "Network.POP3.Client",
        "fct-package": "pop3-client",
        "fct-signature": "MessageID -\u003e POP3 String",
        "fct-source": "src/Network-POP3-Client.html#getMessage",
        "fct-type": "function",
        "title": "getMessage"
      },
      "index": {
        "description": "Retrieves POP3 message from the server and returns it parsed as Message The message ID should be in the range getNumberOfMessages",
        "hierarchy": "Network POP3 Client",
        "module": "Network.POP3.Client",
        "name": "getMessage",
        "normalized": "MessageID-\u003ePOP String",
        "package": "pop3-client",
        "partial": "Message",
        "signature": "MessageID-\u003ePOP String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pop3-client/docs/Network-POP3-Client.html#v:getNumberOfMessages",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the number of messages stored in the POP3 mailbox.\n\u003c/p\u003e",
        "fct-module": "Network.POP3.Client",
        "fct-package": "pop3-client",
        "fct-signature": "POP3 Integer",
        "fct-source": "src/Network-POP3-Client.html#getNumberOfMessages",
        "fct-type": "function",
        "title": "getNumberOfMessages"
      },
      "index": {
        "description": "Returns the number of messages stored in the POP3 mailbox",
        "hierarchy": "Network POP3 Client",
        "module": "Network.POP3.Client",
        "name": "getNumberOfMessages",
        "normalized": "",
        "package": "pop3-client",
        "partial": "Number Of Messages",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pop3-client/docs/Network-POP3-Client.html#v:getSize",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the size of a message on the server in bytes.\n   Note that this may not correspond exactly to the size of the message\n   as it is downloaded, because of newline and escape values.\n   The message ID should be in the range [1..\u003ccode\u003e\u003ca\u003egetNumberOfMessages\u003c/a\u003e\u003c/code\u003e].\n\u003c/p\u003e",
        "fct-module": "Network.POP3.Client",
        "fct-package": "pop3-client",
        "fct-signature": "MessageID -\u003e POP3 Integer",
        "fct-source": "src/Network-POP3-Client.html#getSize",
        "fct-type": "function",
        "title": "getSize"
      },
      "index": {
        "description": "Returns the size of message on the server in bytes Note that this may not correspond exactly to the size of the message as it is downloaded because of newline and escape values The message ID should be in the range getNumberOfMessages",
        "hierarchy": "Network POP3 Client",
        "module": "Network.POP3.Client",
        "name": "getSize",
        "normalized": "MessageID-\u003ePOP Integer",
        "package": "pop3-client",
        "partial": "Size",
        "signature": "MessageID-\u003ePOP Integer"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pop3-client/docs/Network-POP3-Client.html#v:getUniqueID",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the unique ID (UIDL) of a message on the server.\n   The message ID should be in the range [1..\u003ccode\u003e\u003ca\u003egetNumberOfMessages\u003c/a\u003e\u003c/code\u003e].\n\u003c/p\u003e",
        "fct-module": "Network.POP3.Client",
        "fct-package": "pop3-client",
        "fct-signature": "MessageID -\u003e POP3 String",
        "fct-source": "src/Network-POP3-Client.html#getUniqueID",
        "fct-type": "function",
        "title": "getUniqueID"
      },
      "index": {
        "description": "Returns the unique ID UIDL of message on the server The message ID should be in the range getNumberOfMessages",
        "hierarchy": "Network POP3 Client",
        "module": "Network.POP3.Client",
        "name": "getUniqueID",
        "normalized": "MessageID-\u003ePOP String",
        "package": "pop3-client",
        "partial": "Unique ID",
        "signature": "MessageID-\u003ePOP String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pop3-client/docs/Network-POP3-Client.html#v:withPOP3",
      "description": {
        "fct-descr": "\u003cp\u003eConnects to the given host and port, executes the given\n   POP3 action(s), closes the connection, and finally returns\n   the result op the (last) POP3 action.\n\u003c/p\u003e\u003cp\u003eIf an error occurs, the action is aborted and an error message is returned.\n\u003c/p\u003e\u003cp\u003eThe connection is guaranteed to be closed before returning from \n   this function, even when an exception occurs during the session.\n\u003c/p\u003e",
        "fct-module": "Network.POP3.Client",
        "fct-package": "pop3-client",
        "fct-signature": "POP3Account -\u003e POP3 a -\u003e IO (Either String a)",
        "fct-source": "src/Network-POP3-Client.html#withPOP3",
        "fct-type": "function",
        "title": "withPOP3"
      },
      "index": {
        "description": "Connects to the given host and port executes the given POP3 action closes the connection and finally returns the result op the last POP3 action If an error occurs the action is aborted and an error message is returned The connection is guaranteed to be closed before returning from this function even when an exception occurs during the session",
        "hierarchy": "Network POP3 Client",
        "module": "Network.POP3.Client",
        "name": "withPOP3",
        "normalized": "POP Account-\u003ePOP a-\u003eIO(Either String a)",
        "package": "pop3-client",
        "partial": "POP",
        "signature": "POP Account-\u003ePOP a-\u003eIO(Either String a)"
      }
    }
  }
]