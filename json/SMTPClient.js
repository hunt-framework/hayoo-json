[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Client.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn SMTP client in the IO Monad.\n\u003c/p\u003e\u003cp\u003eData structures for representing SMTP status codes and email messages are\n re-exported here from \u003cem\u003eText.ParserCombinators.Parsec.Rfc2821\u003c/em\u003e and\n \u003cem\u003eText.ParserCombinators.Parsec.Rfc2822\u003c/em\u003e in the \u003cem\u003ehsemail\u003c/em\u003e package.\n\u003c/p\u003e\u003cp\u003eHere's a working example:\n\u003c/p\u003e\u003cpre\u003e import Network.SMTP.ClientSession\n import Network.SMTP.Client\n import Network.Socket\n import System.Time\n import System.IO\n import Data.IORef\n \n myDomain = \"example.com\"\n smtpHost = \"mail.example.com\"    -- \u003c-- Your SMTP server here\n \n main = do\n     now \u003c- getClockTime\n     nowCT \u003c- toCalendarTime now\n     let message = Message [\n                 From [NameAddr (Just \"Mr. Nobody\") \"nobody@example.com\"],\n                 To   [NameAddr (Just \"Mr. Somebody\") \"somebody@example.com\"],\n                 Subject \"I'm using SMTPClient!\",\n                 Date nowCT\n             ]\n             (\"Dear Sir,\\n\"++\n              \"It has come to my attention that this is an email.\\n\"++\n              \"Yours sincerely,\\n\"++\n              \"Mr. Nobody\\n\")\n     addrs \u003c- getAddrInfo Nothing (Just smtpHost) (Just \"25\")\n     putStrLn $ \"connecting to \"++show (map addrAddress addrs)\n     sentRef \u003c- newIORef []\n     sendSMTP' (hPutStrLn stderr) (Just sentRef) myDomain addrs [message]\n     statuses \u003c- readIORef sentRef\n     -- If no exception was caught, statuses is guaranteed to be\n     -- the same length as the list of input messages, therefore head won't fail here.\n     case head statuses of\n         Nothing     -\u003e putStrLn \"Message successfully sent\"\n         Just status -\u003e putStrLn $ \"Message send failed with status \"++show status\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Network.SMTP.Client",
        "fct-package": "SMTPClient",
        "fct-signature": "module",
        "fct-source": "src/Network-SMTP-Client.html",
        "fct-type": "module",
        "title": "Client"
      },
      "index": {
        "description": "An SMTP client in the IO Monad Data structures for representing SMTP status codes and email messages are re-exported here from Text.ParserCombinators.Parsec.Rfc2821 and Text.ParserCombinators.Parsec.Rfc2822 in the hsemail package Here working example import Network.SMTP.ClientSession import Network.SMTP.Client import Network.Socket import System.Time import System.IO import Data.IORef myDomain example.com smtpHost mail.example.com Your SMTP server here main do now getClockTime nowCT toCalendarTime now let message Message From NameAddr Just Mr Nobody nobody@example.com To NameAddr Just Mr Somebody somebody@example.com Subject using SMTPClient Date nowCT Dear Sir It has come to my attention that this is an email Yours sincerely Mr Nobody addrs getAddrInfo Nothing Just smtpHost Just putStrLn connecting to show map addrAddress addrs sentRef newIORef sendSMTP hPutStrLn stderr Just sentRef myDomain addrs message statuses readIORef sentRef If no exception was caught statuses is guaranteed to be the same length as the list of input messages therefore head won fail here case head statuses of Nothing putStrLn Message successfully sent Just status putStrLn Message send failed with status show status",
        "hierarchy": "Network SMTP Client",
        "module": "Network.SMTP.Client",
        "name": "Client",
        "normalized": "",
        "package": "SMTPClient",
        "partial": "Client",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Client.html#t:Category",
      "description": {
        "fct-module": "Network.SMTP.Client",
        "fct-package": "SMTPClient",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Category"
      },
      "index": {
        "description": "",
        "hierarchy": "Network SMTP Client",
        "module": "Network.SMTP.Client",
        "name": "Category",
        "normalized": "",
        "package": "SMTPClient",
        "partial": "Category",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Client.html#t:Field",
      "description": {
        "fct-descr": "\u003cp\u003eThis data type represents any of the header fields defined in this\n RFC. Each of the various instances contains with the return value\n of the corresponding parser.\n\u003c/p\u003e",
        "fct-module": "Network.SMTP.Client",
        "fct-package": "SMTPClient",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Field"
      },
      "index": {
        "description": "This data type represents any of the header fields defined in this RFC Each of the various instances contains with the return value of the corresponding parser",
        "hierarchy": "Network SMTP Client",
        "module": "Network.SMTP.Client",
        "name": "Field",
        "normalized": "",
        "package": "SMTPClient",
        "partial": "Field",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Client.html#t:GenericMessage",
      "description": {
        "fct-descr": "\u003cp\u003eThis data type repesents a parsed Internet Message as defined in\n this RFC. It consists of an arbitrary number of header lines,\n represented in the \u003ccode\u003e\u003ca\u003eField\u003c/a\u003e\u003c/code\u003e data type, and a message body, which may\n be empty.\n\u003c/p\u003e",
        "fct-module": "Network.SMTP.Client",
        "fct-package": "SMTPClient",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "GenericMessage"
      },
      "index": {
        "description": "This data type repesents parsed Internet Message as defined in this RFC It consists of an arbitrary number of header lines represented in the Field data type and message body which may be empty",
        "hierarchy": "Network SMTP Client",
        "module": "Network.SMTP.Client",
        "name": "GenericMessage",
        "normalized": "",
        "package": "SMTPClient",
        "partial": "Generic Message",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Client.html#t:Message",
      "description": {
        "fct-module": "Network.SMTP.Client",
        "fct-package": "SMTPClient",
        "fct-signature": "type",
        "fct-type": "type",
        "title": "Message"
      },
      "index": {
        "description": "",
        "hierarchy": "Network SMTP Client",
        "module": "Network.SMTP.Client",
        "name": "Message",
        "normalized": "",
        "package": "SMTPClient",
        "partial": "Message",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Client.html#t:NameAddr",
      "description": {
        "fct-descr": "\u003cp\u003eA NameAddr is composed of an optional realname a mandatory\n e-mail \u003ccode\u003e\u003ca\u003eaddress\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.SMTP.Client",
        "fct-package": "SMTPClient",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "NameAddr"
      },
      "index": {
        "description": "NameAddr is composed of an optional realname mandatory e-mail address",
        "hierarchy": "Network SMTP Client",
        "module": "Network.SMTP.Client",
        "name": "NameAddr",
        "normalized": "",
        "package": "SMTPClient",
        "partial": "Name Addr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Client.html#t:SMTPException",
      "description": {
        "fct-descr": "\u003cp\u003eAn exception indicating a communications failure at the level of the SMTP protocol.\n\u003c/p\u003e",
        "fct-module": "Network.SMTP.Client",
        "fct-package": "SMTPClient",
        "fct-signature": "data",
        "fct-source": "src/Network-SMTP-Client.html#SMTPException",
        "fct-type": "data",
        "title": "SMTPException"
      },
      "index": {
        "description": "An exception indicating communications failure at the level of the SMTP protocol",
        "hierarchy": "Network SMTP Client",
        "module": "Network.SMTP.Client",
        "name": "SMTPException",
        "normalized": "",
        "package": "SMTPClient",
        "partial": "SMTPException",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Client.html#t:SmtpCode",
      "description": {
        "fct-module": "Network.SMTP.Client",
        "fct-package": "SMTPClient",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "SmtpCode"
      },
      "index": {
        "description": "",
        "hierarchy": "Network SMTP Client",
        "module": "Network.SMTP.Client",
        "name": "SmtpCode",
        "normalized": "",
        "package": "SMTPClient",
        "partial": "Smtp Code",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Client.html#t:SmtpReply",
      "description": {
        "fct-descr": "\u003cp\u003eAn SMTP reply is a three-digit return code plus some waste of\n bandwidth called \"comments\". This is what the list of strings is\n for; one string per line in the reply. \u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e will append an\n \"\u003ccode\u003e\\r\\n\u003c/code\u003e\" end-of-line marker to each entry in that list, so that\n the resulting string is ready to be sent back to the peer. For\n example:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eshow $ Reply (Code Success MailSystem 0) [\"worked\", \"like\", \"a charm\" ]\n\u003c/code\u003e\u003c/strong\u003e\"250-worked\\r\\n250-like\\r\\n250 a charm\\r\\n\"\n\u003c/pre\u003e\u003cp\u003eIf the message is an empty list \u003ccode\u003e[]\u003c/code\u003e, a default text will be constructed:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eshow $ Reply (Code Success MailSystem 0) []\n\u003c/code\u003e\u003c/strong\u003e\"250 Success in category MailSystem\\r\\n\"\n\u003c/pre\u003e",
        "fct-module": "Network.SMTP.Client",
        "fct-package": "SMTPClient",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "SmtpReply"
      },
      "index": {
        "description": "An SMTP reply is three-digit return code plus some waste of bandwidth called comments This is what the list of strings is for one string per line in the reply show will append an end-of-line marker to each entry in that list so that the resulting string is ready to be sent back to the peer For example show Reply Code Success MailSystem worked like charm worked n250-like n250 charm If the message is an empty list default text will be constructed show Reply Code Success MailSystem Success in category MailSystem",
        "hierarchy": "Network SMTP Client",
        "module": "Network.SMTP.Client",
        "name": "SmtpReply",
        "normalized": "",
        "package": "SMTPClient",
        "partial": "Smtp Reply",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Client.html#t:SuccessCode",
      "description": {
        "fct-module": "Network.SMTP.Client",
        "fct-package": "SMTPClient",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "SuccessCode"
      },
      "index": {
        "description": "",
        "hierarchy": "Network SMTP Client",
        "module": "Network.SMTP.Client",
        "name": "SuccessCode",
        "normalized": "",
        "package": "SMTPClient",
        "partial": "Success Code",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Client.html#v:Bcc",
      "description": {
        "fct-module": "Network.SMTP.Client",
        "fct-package": "SMTPClient",
        "fct-signature": "Bcc [NameAddr]",
        "fct-type": "function",
        "title": "Bcc"
      },
      "index": {
        "description": "",
        "hierarchy": "Network SMTP Client",
        "module": "Network.SMTP.Client",
        "name": "Bcc",
        "normalized": "Bcc[NameAddr]",
        "package": "SMTPClient",
        "partial": "Bcc",
        "signature": "Bcc[NameAddr]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Client.html#v:Cc",
      "description": {
        "fct-module": "Network.SMTP.Client",
        "fct-package": "SMTPClient",
        "fct-signature": "Cc [NameAddr]",
        "fct-type": "function",
        "title": "Cc"
      },
      "index": {
        "description": "",
        "hierarchy": "Network SMTP Client",
        "module": "Network.SMTP.Client",
        "name": "Cc",
        "normalized": "Cc[NameAddr]",
        "package": "SMTPClient",
        "partial": "Cc",
        "signature": "Cc[NameAddr]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Client.html#v:Code",
      "description": {
        "fct-module": "Network.SMTP.Client",
        "fct-package": "SMTPClient",
        "fct-signature": "Code SuccessCode Category Int",
        "fct-type": "function",
        "title": "Code"
      },
      "index": {
        "description": "",
        "hierarchy": "Network SMTP Client",
        "module": "Network.SMTP.Client",
        "name": "Code",
        "normalized": "",
        "package": "SMTPClient",
        "partial": "Code",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Client.html#v:Comments",
      "description": {
        "fct-module": "Network.SMTP.Client",
        "fct-package": "SMTPClient",
        "fct-signature": "Comments String",
        "fct-type": "function",
        "title": "Comments"
      },
      "index": {
        "description": "",
        "hierarchy": "Network SMTP Client",
        "module": "Network.SMTP.Client",
        "name": "Comments",
        "normalized": "",
        "package": "SMTPClient",
        "partial": "Comments",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Client.html#v:Connection",
      "description": {
        "fct-module": "Network.SMTP.Client",
        "fct-package": "SMTPClient",
        "fct-signature": "Connection",
        "fct-type": "function",
        "title": "Connection"
      },
      "index": {
        "description": "",
        "hierarchy": "Network SMTP Client",
        "module": "Network.SMTP.Client",
        "name": "Connection",
        "normalized": "",
        "package": "SMTPClient",
        "partial": "Connection",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Client.html#v:Date",
      "description": {
        "fct-module": "Network.SMTP.Client",
        "fct-package": "SMTPClient",
        "fct-signature": "Date CalendarTime",
        "fct-type": "function",
        "title": "Date"
      },
      "index": {
        "description": "",
        "hierarchy": "Network SMTP Client",
        "module": "Network.SMTP.Client",
        "name": "Date",
        "normalized": "",
        "package": "SMTPClient",
        "partial": "Date",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Client.html#v:From",
      "description": {
        "fct-module": "Network.SMTP.Client",
        "fct-package": "SMTPClient",
        "fct-signature": "From [NameAddr]",
        "fct-type": "function",
        "title": "From"
      },
      "index": {
        "description": "",
        "hierarchy": "Network SMTP Client",
        "module": "Network.SMTP.Client",
        "name": "From",
        "normalized": "From[NameAddr]",
        "package": "SMTPClient",
        "partial": "From",
        "signature": "From[NameAddr]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Client.html#v:InReplyTo",
      "description": {
        "fct-module": "Network.SMTP.Client",
        "fct-package": "SMTPClient",
        "fct-signature": "InReplyTo [String]",
        "fct-type": "function",
        "title": "InReplyTo"
      },
      "index": {
        "description": "",
        "hierarchy": "Network SMTP Client",
        "module": "Network.SMTP.Client",
        "name": "InReplyTo",
        "normalized": "InReplyTo[String]",
        "package": "SMTPClient",
        "partial": "In Reply To",
        "signature": "InReplyTo[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Client.html#v:Information",
      "description": {
        "fct-module": "Network.SMTP.Client",
        "fct-package": "SMTPClient",
        "fct-signature": "Information",
        "fct-type": "function",
        "title": "Information"
      },
      "index": {
        "description": "",
        "hierarchy": "Network SMTP Client",
        "module": "Network.SMTP.Client",
        "name": "Information",
        "normalized": "",
        "package": "SMTPClient",
        "partial": "Information",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Client.html#v:IntermediateSuccess",
      "description": {
        "fct-module": "Network.SMTP.Client",
        "fct-package": "SMTPClient",
        "fct-signature": "IntermediateSuccess",
        "fct-type": "function",
        "title": "IntermediateSuccess"
      },
      "index": {
        "description": "",
        "hierarchy": "Network SMTP Client",
        "module": "Network.SMTP.Client",
        "name": "IntermediateSuccess",
        "normalized": "",
        "package": "SMTPClient",
        "partial": "Intermediate Success",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Client.html#v:Keywords",
      "description": {
        "fct-module": "Network.SMTP.Client",
        "fct-package": "SMTPClient",
        "fct-signature": "Keywords [[String]]",
        "fct-type": "function",
        "title": "Keywords"
      },
      "index": {
        "description": "",
        "hierarchy": "Network SMTP Client",
        "module": "Network.SMTP.Client",
        "name": "Keywords",
        "normalized": "Keywords[[String]]",
        "package": "SMTPClient",
        "partial": "Keywords",
        "signature": "Keywords[[String]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Client.html#v:MailSystem",
      "description": {
        "fct-module": "Network.SMTP.Client",
        "fct-package": "SMTPClient",
        "fct-signature": "MailSystem",
        "fct-type": "function",
        "title": "MailSystem"
      },
      "index": {
        "description": "",
        "hierarchy": "Network SMTP Client",
        "module": "Network.SMTP.Client",
        "name": "MailSystem",
        "normalized": "",
        "package": "SMTPClient",
        "partial": "Mail System",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Client.html#v:Message",
      "description": {
        "fct-module": "Network.SMTP.Client",
        "fct-package": "SMTPClient",
        "fct-signature": "Message [Field] a",
        "fct-type": "function",
        "title": "Message"
      },
      "index": {
        "description": "",
        "hierarchy": "Network SMTP Client",
        "module": "Network.SMTP.Client",
        "name": "Message",
        "normalized": "Message[Field]a",
        "package": "SMTPClient",
        "partial": "Message",
        "signature": "Message[Field]a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Client.html#v:MessageID",
      "description": {
        "fct-module": "Network.SMTP.Client",
        "fct-package": "SMTPClient",
        "fct-signature": "MessageID String",
        "fct-type": "function",
        "title": "MessageID"
      },
      "index": {
        "description": "",
        "hierarchy": "Network SMTP Client",
        "module": "Network.SMTP.Client",
        "name": "MessageID",
        "normalized": "",
        "package": "SMTPClient",
        "partial": "Message ID",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Client.html#v:NameAddr",
      "description": {
        "fct-module": "Network.SMTP.Client",
        "fct-package": "SMTPClient",
        "fct-signature": "NameAddr",
        "fct-type": "function",
        "title": "NameAddr"
      },
      "index": {
        "description": "",
        "hierarchy": "Network SMTP Client",
        "module": "Network.SMTP.Client",
        "name": "NameAddr",
        "normalized": "",
        "package": "SMTPClient",
        "partial": "Name Addr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Client.html#v:ObsReceived",
      "description": {
        "fct-module": "Network.SMTP.Client",
        "fct-package": "SMTPClient",
        "fct-signature": "ObsReceived [(String, String)]",
        "fct-type": "function",
        "title": "ObsReceived"
      },
      "index": {
        "description": "",
        "hierarchy": "Network SMTP Client",
        "module": "Network.SMTP.Client",
        "name": "ObsReceived",
        "normalized": "ObsReceived[(String,String)]",
        "package": "SMTPClient",
        "partial": "Obs Received",
        "signature": "ObsReceived[(String,String)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Client.html#v:OptionalField",
      "description": {
        "fct-module": "Network.SMTP.Client",
        "fct-package": "SMTPClient",
        "fct-signature": "OptionalField String String",
        "fct-type": "function",
        "title": "OptionalField"
      },
      "index": {
        "description": "",
        "hierarchy": "Network SMTP Client",
        "module": "Network.SMTP.Client",
        "name": "OptionalField",
        "normalized": "",
        "package": "SMTPClient",
        "partial": "Optional Field",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Client.html#v:PermanentFailure",
      "description": {
        "fct-module": "Network.SMTP.Client",
        "fct-package": "SMTPClient",
        "fct-signature": "PermanentFailure",
        "fct-type": "function",
        "title": "PermanentFailure"
      },
      "index": {
        "description": "",
        "hierarchy": "Network SMTP Client",
        "module": "Network.SMTP.Client",
        "name": "PermanentFailure",
        "normalized": "",
        "package": "SMTPClient",
        "partial": "Permanent Failure",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Client.html#v:PreliminarySuccess",
      "description": {
        "fct-module": "Network.SMTP.Client",
        "fct-package": "SMTPClient",
        "fct-signature": "PreliminarySuccess",
        "fct-type": "function",
        "title": "PreliminarySuccess"
      },
      "index": {
        "description": "",
        "hierarchy": "Network SMTP Client",
        "module": "Network.SMTP.Client",
        "name": "PreliminarySuccess",
        "normalized": "",
        "package": "SMTPClient",
        "partial": "Preliminary Success",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Client.html#v:Received",
      "description": {
        "fct-module": "Network.SMTP.Client",
        "fct-package": "SMTPClient",
        "fct-signature": "Received ([(String, String)], CalendarTime)",
        "fct-type": "function",
        "title": "Received"
      },
      "index": {
        "description": "",
        "hierarchy": "Network SMTP Client",
        "module": "Network.SMTP.Client",
        "name": "Received",
        "normalized": "Received([(String,String)],CalendarTime)",
        "package": "SMTPClient",
        "partial": "Received",
        "signature": "Received([(String,String)],CalendarTime)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Client.html#v:References",
      "description": {
        "fct-module": "Network.SMTP.Client",
        "fct-package": "SMTPClient",
        "fct-signature": "References [String]",
        "fct-type": "function",
        "title": "References"
      },
      "index": {
        "description": "",
        "hierarchy": "Network SMTP Client",
        "module": "Network.SMTP.Client",
        "name": "References",
        "normalized": "References[String]",
        "package": "SMTPClient",
        "partial": "References",
        "signature": "References[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Client.html#v:Reply",
      "description": {
        "fct-module": "Network.SMTP.Client",
        "fct-package": "SMTPClient",
        "fct-signature": "Reply SmtpCode [String]",
        "fct-type": "function",
        "title": "Reply"
      },
      "index": {
        "description": "",
        "hierarchy": "Network SMTP Client",
        "module": "Network.SMTP.Client",
        "name": "Reply",
        "normalized": "Reply SmtpCode[String]",
        "package": "SMTPClient",
        "partial": "Reply",
        "signature": "Reply SmtpCode[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Client.html#v:ReplyTo",
      "description": {
        "fct-module": "Network.SMTP.Client",
        "fct-package": "SMTPClient",
        "fct-signature": "ReplyTo [NameAddr]",
        "fct-type": "function",
        "title": "ReplyTo"
      },
      "index": {
        "description": "",
        "hierarchy": "Network SMTP Client",
        "module": "Network.SMTP.Client",
        "name": "ReplyTo",
        "normalized": "ReplyTo[NameAddr]",
        "package": "SMTPClient",
        "partial": "Reply To",
        "signature": "ReplyTo[NameAddr]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Client.html#v:ResentBcc",
      "description": {
        "fct-module": "Network.SMTP.Client",
        "fct-package": "SMTPClient",
        "fct-signature": "ResentBcc [NameAddr]",
        "fct-type": "function",
        "title": "ResentBcc"
      },
      "index": {
        "description": "",
        "hierarchy": "Network SMTP Client",
        "module": "Network.SMTP.Client",
        "name": "ResentBcc",
        "normalized": "ResentBcc[NameAddr]",
        "package": "SMTPClient",
        "partial": "Resent Bcc",
        "signature": "ResentBcc[NameAddr]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Client.html#v:ResentCc",
      "description": {
        "fct-module": "Network.SMTP.Client",
        "fct-package": "SMTPClient",
        "fct-signature": "ResentCc [NameAddr]",
        "fct-type": "function",
        "title": "ResentCc"
      },
      "index": {
        "description": "",
        "hierarchy": "Network SMTP Client",
        "module": "Network.SMTP.Client",
        "name": "ResentCc",
        "normalized": "ResentCc[NameAddr]",
        "package": "SMTPClient",
        "partial": "Resent Cc",
        "signature": "ResentCc[NameAddr]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Client.html#v:ResentDate",
      "description": {
        "fct-module": "Network.SMTP.Client",
        "fct-package": "SMTPClient",
        "fct-signature": "ResentDate CalendarTime",
        "fct-type": "function",
        "title": "ResentDate"
      },
      "index": {
        "description": "",
        "hierarchy": "Network SMTP Client",
        "module": "Network.SMTP.Client",
        "name": "ResentDate",
        "normalized": "",
        "package": "SMTPClient",
        "partial": "Resent Date",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Client.html#v:ResentFrom",
      "description": {
        "fct-module": "Network.SMTP.Client",
        "fct-package": "SMTPClient",
        "fct-signature": "ResentFrom [NameAddr]",
        "fct-type": "function",
        "title": "ResentFrom"
      },
      "index": {
        "description": "",
        "hierarchy": "Network SMTP Client",
        "module": "Network.SMTP.Client",
        "name": "ResentFrom",
        "normalized": "ResentFrom[NameAddr]",
        "package": "SMTPClient",
        "partial": "Resent From",
        "signature": "ResentFrom[NameAddr]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Client.html#v:ResentMessageID",
      "description": {
        "fct-module": "Network.SMTP.Client",
        "fct-package": "SMTPClient",
        "fct-signature": "ResentMessageID String",
        "fct-type": "function",
        "title": "ResentMessageID"
      },
      "index": {
        "description": "",
        "hierarchy": "Network SMTP Client",
        "module": "Network.SMTP.Client",
        "name": "ResentMessageID",
        "normalized": "",
        "package": "SMTPClient",
        "partial": "Resent Message ID",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Client.html#v:ResentReplyTo",
      "description": {
        "fct-module": "Network.SMTP.Client",
        "fct-package": "SMTPClient",
        "fct-signature": "ResentReplyTo [NameAddr]",
        "fct-type": "function",
        "title": "ResentReplyTo"
      },
      "index": {
        "description": "",
        "hierarchy": "Network SMTP Client",
        "module": "Network.SMTP.Client",
        "name": "ResentReplyTo",
        "normalized": "ResentReplyTo[NameAddr]",
        "package": "SMTPClient",
        "partial": "Resent Reply To",
        "signature": "ResentReplyTo[NameAddr]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Client.html#v:ResentSender",
      "description": {
        "fct-module": "Network.SMTP.Client",
        "fct-package": "SMTPClient",
        "fct-signature": "ResentSender NameAddr",
        "fct-type": "function",
        "title": "ResentSender"
      },
      "index": {
        "description": "",
        "hierarchy": "Network SMTP Client",
        "module": "Network.SMTP.Client",
        "name": "ResentSender",
        "normalized": "",
        "package": "SMTPClient",
        "partial": "Resent Sender",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Client.html#v:ResentTo",
      "description": {
        "fct-module": "Network.SMTP.Client",
        "fct-package": "SMTPClient",
        "fct-signature": "ResentTo [NameAddr]",
        "fct-type": "function",
        "title": "ResentTo"
      },
      "index": {
        "description": "",
        "hierarchy": "Network SMTP Client",
        "module": "Network.SMTP.Client",
        "name": "ResentTo",
        "normalized": "ResentTo[NameAddr]",
        "package": "SMTPClient",
        "partial": "Resent To",
        "signature": "ResentTo[NameAddr]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Client.html#v:ReturnPath",
      "description": {
        "fct-module": "Network.SMTP.Client",
        "fct-package": "SMTPClient",
        "fct-signature": "ReturnPath String",
        "fct-type": "function",
        "title": "ReturnPath"
      },
      "index": {
        "description": "",
        "hierarchy": "Network SMTP Client",
        "module": "Network.SMTP.Client",
        "name": "ReturnPath",
        "normalized": "",
        "package": "SMTPClient",
        "partial": "Return Path",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Client.html#v:SMTPException",
      "description": {
        "fct-module": "Network.SMTP.Client",
        "fct-package": "SMTPClient",
        "fct-signature": "SMTPException String",
        "fct-source": "src/Network-SMTP-Client.html#SMTPException",
        "fct-type": "function",
        "title": "SMTPException"
      },
      "index": {
        "description": "",
        "hierarchy": "Network SMTP Client",
        "module": "Network.SMTP.Client",
        "name": "SMTPException",
        "normalized": "",
        "package": "SMTPClient",
        "partial": "SMTPException",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Client.html#v:Sender",
      "description": {
        "fct-module": "Network.SMTP.Client",
        "fct-package": "SMTPClient",
        "fct-signature": "Sender NameAddr",
        "fct-type": "function",
        "title": "Sender"
      },
      "index": {
        "description": "",
        "hierarchy": "Network SMTP Client",
        "module": "Network.SMTP.Client",
        "name": "Sender",
        "normalized": "",
        "package": "SMTPClient",
        "partial": "Sender",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Client.html#v:Subject",
      "description": {
        "fct-module": "Network.SMTP.Client",
        "fct-package": "SMTPClient",
        "fct-signature": "Subject String",
        "fct-type": "function",
        "title": "Subject"
      },
      "index": {
        "description": "",
        "hierarchy": "Network SMTP Client",
        "module": "Network.SMTP.Client",
        "name": "Subject",
        "normalized": "",
        "package": "SMTPClient",
        "partial": "Subject",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Client.html#v:Success",
      "description": {
        "fct-module": "Network.SMTP.Client",
        "fct-package": "SMTPClient",
        "fct-signature": "Success",
        "fct-type": "function",
        "title": "Success"
      },
      "index": {
        "description": "",
        "hierarchy": "Network SMTP Client",
        "module": "Network.SMTP.Client",
        "name": "Success",
        "normalized": "",
        "package": "SMTPClient",
        "partial": "Success",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Client.html#v:Syntax",
      "description": {
        "fct-module": "Network.SMTP.Client",
        "fct-package": "SMTPClient",
        "fct-signature": "Syntax",
        "fct-type": "function",
        "title": "Syntax"
      },
      "index": {
        "description": "",
        "hierarchy": "Network SMTP Client",
        "module": "Network.SMTP.Client",
        "name": "Syntax",
        "normalized": "",
        "package": "SMTPClient",
        "partial": "Syntax",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Client.html#v:To",
      "description": {
        "fct-module": "Network.SMTP.Client",
        "fct-package": "SMTPClient",
        "fct-signature": "To [NameAddr]",
        "fct-type": "function",
        "title": "To"
      },
      "index": {
        "description": "",
        "hierarchy": "Network SMTP Client",
        "module": "Network.SMTP.Client",
        "name": "To",
        "normalized": "To[NameAddr]",
        "package": "SMTPClient",
        "partial": "To",
        "signature": "To[NameAddr]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Client.html#v:TransientFailure",
      "description": {
        "fct-module": "Network.SMTP.Client",
        "fct-package": "SMTPClient",
        "fct-signature": "TransientFailure",
        "fct-type": "function",
        "title": "TransientFailure"
      },
      "index": {
        "description": "",
        "hierarchy": "Network SMTP Client",
        "module": "Network.SMTP.Client",
        "name": "TransientFailure",
        "normalized": "",
        "package": "SMTPClient",
        "partial": "Transient Failure",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Client.html#v:Unspecified3",
      "description": {
        "fct-module": "Network.SMTP.Client",
        "fct-package": "SMTPClient",
        "fct-signature": "Unspecified3",
        "fct-type": "function",
        "title": "Unspecified3"
      },
      "index": {
        "description": "",
        "hierarchy": "Network SMTP Client",
        "module": "Network.SMTP.Client",
        "name": "Unspecified3",
        "normalized": "",
        "package": "SMTPClient",
        "partial": "Unspecified",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Client.html#v:Unspecified4",
      "description": {
        "fct-module": "Network.SMTP.Client",
        "fct-package": "SMTPClient",
        "fct-signature": "Unspecified4",
        "fct-type": "function",
        "title": "Unspecified4"
      },
      "index": {
        "description": "",
        "hierarchy": "Network SMTP Client",
        "module": "Network.SMTP.Client",
        "name": "Unspecified4",
        "normalized": "",
        "package": "SMTPClient",
        "partial": "Unspecified",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Client.html#v:Unused0",
      "description": {
        "fct-module": "Network.SMTP.Client",
        "fct-package": "SMTPClient",
        "fct-signature": "Unused0",
        "fct-type": "function",
        "title": "Unused0"
      },
      "index": {
        "description": "",
        "hierarchy": "Network SMTP Client",
        "module": "Network.SMTP.Client",
        "name": "Unused0",
        "normalized": "",
        "package": "SMTPClient",
        "partial": "Unused",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Client.html#v:nameAddr_addr",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.SMTP.Client",
        "fct-package": "SMTPClient",
        "fct-signature": "String",
        "fct-type": "function",
        "title": "nameAddr_addr"
      },
      "index": {
        "description": "",
        "hierarchy": "Network SMTP Client",
        "module": "Network.SMTP.Client",
        "name": "nameAddr_addr",
        "normalized": "",
        "package": "SMTPClient",
        "partial": "Addr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Client.html#v:nameAddr_name",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.SMTP.Client",
        "fct-package": "SMTPClient",
        "fct-signature": "Maybe String",
        "fct-type": "function",
        "title": "nameAddr_name"
      },
      "index": {
        "description": "",
        "hierarchy": "Network SMTP Client",
        "module": "Network.SMTP.Client",
        "name": "nameAddr_name",
        "normalized": "",
        "package": "SMTPClient",
        "partial": "Addr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Client.html#v:processSMTP",
      "description": {
        "fct-descr": "\u003cp\u003eA lower level function that does the I/O processing for an SMTP client session on a handle.\n Returns when the session has completed, with the handle still open.\n\u003c/p\u003e",
        "fct-module": "Network.SMTP.Client",
        "fct-package": "SMTPClient",
        "fct-signature": "(String -\u003e IO ())-\u003e Maybe (IORef [Maybe SmtpReply])-\u003e Handle-\u003e SMTPState-\u003e IO ()",
        "fct-type": "function",
        "title": "processSMTP"
      },
      "index": {
        "description": "lower level function that does the processing for an SMTP client session on handle Returns when the session has completed with the handle still open",
        "hierarchy": "Network SMTP Client",
        "module": "Network.SMTP.Client",
        "name": "processSMTP",
        "normalized": "(String-\u003eIO())-\u003eMaybe(IORef[Maybe SmtpReply])-\u003eHandle-\u003eSMTPState-\u003eIO()",
        "package": "SMTPClient",
        "partial": "SMTP",
        "signature": "(String-\u003eIO())-\u003eMaybe(IORef[Maybe SmtpReply])-\u003eHandle-\u003eSMTPState-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Client.html#v:sendSMTP",
      "description": {
        "fct-descr": "\u003cp\u003eSend a list of email messages to an SMTP server. Throws SMTPException on\n failure at the communication protocol level, and it can also throw\n socket-level exceptions.\n\u003c/p\u003e\u003cp\u003eThe optional IORef is used to store a list of statuses for messages sent so\n far, where Nothing means success.  The list elements correspond to the elements\n of the input message list.  If the caller catches an exception, this list is\n likely to be shorter than the input message list:  The length of the list\n indicates how many messages were dispatched.  If no exception is caught, the\n length of the statuses will equal the length of the input messages list.\n\u003c/p\u003e\u003cp\u003eThe message body may use either \"\\n\" or \"\\r\\n\" as an end-of-line\n marker and in either case it will be sent correctly to the server.\n\u003c/p\u003e",
        "fct-module": "Network.SMTP.Client",
        "fct-package": "SMTPClient",
        "fct-signature": "Maybe (IORef [Maybe SmtpReply])-\u003e String-\u003e [AddrInfo]-\u003e [Message]-\u003e IO ()",
        "fct-type": "function",
        "title": "sendSMTP"
      },
      "index": {
        "description": "Send list of email messages to an SMTP server Throws SMTPException on failure at the communication protocol level and it can also throw socket-level exceptions The optional IORef is used to store list of statuses for messages sent so far where Nothing means success The list elements correspond to the elements of the input message list If the caller catches an exception this list is likely to be shorter than the input message list The length of the list indicates how many messages were dispatched If no exception is caught the length of the statuses will equal the length of the input messages list The message body may use either or as an end-of-line marker and in either case it will be sent correctly to the server",
        "hierarchy": "Network SMTP Client",
        "module": "Network.SMTP.Client",
        "name": "sendSMTP",
        "normalized": "Maybe(IORef[Maybe SmtpReply])-\u003eString-\u003e[AddrInfo]-\u003e[Message]-\u003eIO()",
        "package": "SMTPClient",
        "partial": "SMTP",
        "signature": "Maybe(IORef[Maybe SmtpReply])-\u003eString-\u003e[AddrInfo]-\u003e[Message]-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Client.html#v:sendSMTP-39-",
      "description": {
        "fct-descr": "\u003cp\u003eLike sendSMTP but takes an additional function for logging all input and\n output for diagnostic purposes.\n\u003c/p\u003e",
        "fct-module": "Network.SMTP.Client",
        "fct-package": "SMTPClient",
        "fct-signature": "(String -\u003e IO ())-\u003e Maybe (IORef [Maybe SmtpReply])-\u003e String-\u003e [AddrInfo]-\u003e [Message]-\u003e IO ()",
        "fct-type": "function",
        "title": "sendSMTP'"
      },
      "index": {
        "description": "Like sendSMTP but takes an additional function for logging all input and output for diagnostic purposes",
        "hierarchy": "Network SMTP Client",
        "module": "Network.SMTP.Client",
        "name": "sendSMTP'",
        "normalized": "(String-\u003eIO())-\u003eMaybe(IORef[Maybe SmtpReply])-\u003eString-\u003e[AddrInfo]-\u003e[Message]-\u003eIO()",
        "package": "SMTPClient",
        "partial": "SMTP'",
        "signature": "(String-\u003eIO())-\u003eMaybe(IORef[Maybe SmtpReply])-\u003eString-\u003e[AddrInfo]-\u003e[Message]-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-ClientSession.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA pure SMTP client state machine.\n\u003c/p\u003e\u003cp\u003eData structures for representing SMTP status codes and email messages are\n re-exported here from \u003cem\u003eText.ParserCombinators.Parsec.Rfc2821\u003c/em\u003e and\n \u003cem\u003eText.ParserCombinators.Parsec.Rfc2822\u003c/em\u003e in the \u003cem\u003ehsemail\u003c/em\u003e package.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.SMTP.ClientSession",
        "fct-package": "SMTPClient",
        "fct-signature": "module",
        "fct-source": "src/Network-SMTP-ClientSession.html",
        "fct-type": "module",
        "title": "ClientSession"
      },
      "index": {
        "description": "pure SMTP client state machine Data structures for representing SMTP status codes and email messages are re-exported here from Text.ParserCombinators.Parsec.Rfc2821 and Text.ParserCombinators.Parsec.Rfc2822 in the hsemail package",
        "hierarchy": "Network SMTP ClientSession",
        "module": "Network.SMTP.ClientSession",
        "name": "ClientSession",
        "normalized": "",
        "package": "SMTPClient",
        "partial": "Client Session",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-ClientSession.html#t:Category",
      "description": {
        "fct-module": "Network.SMTP.ClientSession",
        "fct-package": "SMTPClient",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Category"
      },
      "index": {
        "description": "",
        "hierarchy": "Network SMTP ClientSession",
        "module": "Network.SMTP.ClientSession",
        "name": "Category",
        "normalized": "",
        "package": "SMTPClient",
        "partial": "Category",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-ClientSession.html#t:Field",
      "description": {
        "fct-descr": "\u003cp\u003eThis data type represents any of the header fields defined in this\n RFC. Each of the various instances contains with the return value\n of the corresponding parser.\n\u003c/p\u003e",
        "fct-module": "Network.SMTP.ClientSession",
        "fct-package": "SMTPClient",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Field"
      },
      "index": {
        "description": "This data type represents any of the header fields defined in this RFC Each of the various instances contains with the return value of the corresponding parser",
        "hierarchy": "Network SMTP ClientSession",
        "module": "Network.SMTP.ClientSession",
        "name": "Field",
        "normalized": "",
        "package": "SMTPClient",
        "partial": "Field",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-ClientSession.html#t:GenericMessage",
      "description": {
        "fct-descr": "\u003cp\u003eThis data type repesents a parsed Internet Message as defined in\n this RFC. It consists of an arbitrary number of header lines,\n represented in the \u003ccode\u003e\u003ca\u003eField\u003c/a\u003e\u003c/code\u003e data type, and a message body, which may\n be empty.\n\u003c/p\u003e",
        "fct-module": "Network.SMTP.ClientSession",
        "fct-package": "SMTPClient",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "GenericMessage"
      },
      "index": {
        "description": "This data type repesents parsed Internet Message as defined in this RFC It consists of an arbitrary number of header lines represented in the Field data type and message body which may be empty",
        "hierarchy": "Network SMTP ClientSession",
        "module": "Network.SMTP.ClientSession",
        "name": "GenericMessage",
        "normalized": "",
        "package": "SMTPClient",
        "partial": "Generic Message",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-ClientSession.html#t:Message",
      "description": {
        "fct-module": "Network.SMTP.ClientSession",
        "fct-package": "SMTPClient",
        "fct-signature": "type",
        "fct-type": "type",
        "title": "Message"
      },
      "index": {
        "description": "",
        "hierarchy": "Network SMTP ClientSession",
        "module": "Network.SMTP.ClientSession",
        "name": "Message",
        "normalized": "",
        "package": "SMTPClient",
        "partial": "Message",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-ClientSession.html#t:NameAddr",
      "description": {
        "fct-descr": "\u003cp\u003eA NameAddr is composed of an optional realname a mandatory\n e-mail \u003ccode\u003e\u003ca\u003eaddress\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.SMTP.ClientSession",
        "fct-package": "SMTPClient",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "NameAddr"
      },
      "index": {
        "description": "NameAddr is composed of an optional realname mandatory e-mail address",
        "hierarchy": "Network SMTP ClientSession",
        "module": "Network.SMTP.ClientSession",
        "name": "NameAddr",
        "normalized": "",
        "package": "SMTPClient",
        "partial": "Name Addr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-ClientSession.html#t:SMTPState",
      "description": {
        "fct-module": "Network.SMTP.ClientSession",
        "fct-package": "SMTPClient",
        "fct-signature": "data",
        "fct-source": "src/Network-SMTP-ClientSession.html#SMTPState",
        "fct-type": "data",
        "title": "SMTPState"
      },
      "index": {
        "description": "",
        "hierarchy": "Network SMTP ClientSession",
        "module": "Network.SMTP.ClientSession",
        "name": "SMTPState",
        "normalized": "",
        "package": "SMTPClient",
        "partial": "SMTPState",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-ClientSession.html#t:SmtpCode",
      "description": {
        "fct-module": "Network.SMTP.ClientSession",
        "fct-package": "SMTPClient",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "SmtpCode"
      },
      "index": {
        "description": "",
        "hierarchy": "Network SMTP ClientSession",
        "module": "Network.SMTP.ClientSession",
        "name": "SmtpCode",
        "normalized": "",
        "package": "SMTPClient",
        "partial": "Smtp Code",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-ClientSession.html#t:SmtpReply",
      "description": {
        "fct-descr": "\u003cp\u003eAn SMTP reply is a three-digit return code plus some waste of\n bandwidth called \"comments\". This is what the list of strings is\n for; one string per line in the reply. \u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e will append an\n \"\u003ccode\u003e\\r\\n\u003c/code\u003e\" end-of-line marker to each entry in that list, so that\n the resulting string is ready to be sent back to the peer. For\n example:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eshow $ Reply (Code Success MailSystem 0) [\"worked\", \"like\", \"a charm\" ]\n\u003c/code\u003e\u003c/strong\u003e\"250-worked\\r\\n250-like\\r\\n250 a charm\\r\\n\"\n\u003c/pre\u003e\u003cp\u003eIf the message is an empty list \u003ccode\u003e[]\u003c/code\u003e, a default text will be constructed:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eshow $ Reply (Code Success MailSystem 0) []\n\u003c/code\u003e\u003c/strong\u003e\"250 Success in category MailSystem\\r\\n\"\n\u003c/pre\u003e",
        "fct-module": "Network.SMTP.ClientSession",
        "fct-package": "SMTPClient",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "SmtpReply"
      },
      "index": {
        "description": "An SMTP reply is three-digit return code plus some waste of bandwidth called comments This is what the list of strings is for one string per line in the reply show will append an end-of-line marker to each entry in that list so that the resulting string is ready to be sent back to the peer For example show Reply Code Success MailSystem worked like charm worked n250-like n250 charm If the message is an empty list default text will be constructed show Reply Code Success MailSystem Success in category MailSystem",
        "hierarchy": "Network SMTP ClientSession",
        "module": "Network.SMTP.ClientSession",
        "name": "SmtpReply",
        "normalized": "",
        "package": "SMTPClient",
        "partial": "Smtp Reply",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-ClientSession.html#t:SuccessCode",
      "description": {
        "fct-module": "Network.SMTP.ClientSession",
        "fct-package": "SMTPClient",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "SuccessCode"
      },
      "index": {
        "description": "",
        "hierarchy": "Network SMTP ClientSession",
        "module": "Network.SMTP.ClientSession",
        "name": "SuccessCode",
        "normalized": "",
        "package": "SMTPClient",
        "partial": "Success Code",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-ClientSession.html#v:Bcc",
      "description": {
        "fct-module": "Network.SMTP.ClientSession",
        "fct-package": "SMTPClient",
        "fct-signature": "Bcc [NameAddr]",
        "fct-type": "function",
        "title": "Bcc"
      },
      "index": {
        "description": "",
        "hierarchy": "Network SMTP ClientSession",
        "module": "Network.SMTP.ClientSession",
        "name": "Bcc",
        "normalized": "Bcc[NameAddr]",
        "package": "SMTPClient",
        "partial": "Bcc",
        "signature": "Bcc[NameAddr]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-ClientSession.html#v:Cc",
      "description": {
        "fct-module": "Network.SMTP.ClientSession",
        "fct-package": "SMTPClient",
        "fct-signature": "Cc [NameAddr]",
        "fct-type": "function",
        "title": "Cc"
      },
      "index": {
        "description": "",
        "hierarchy": "Network SMTP ClientSession",
        "module": "Network.SMTP.ClientSession",
        "name": "Cc",
        "normalized": "Cc[NameAddr]",
        "package": "SMTPClient",
        "partial": "Cc",
        "signature": "Cc[NameAddr]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-ClientSession.html#v:Code",
      "description": {
        "fct-module": "Network.SMTP.ClientSession",
        "fct-package": "SMTPClient",
        "fct-signature": "Code SuccessCode Category Int",
        "fct-type": "function",
        "title": "Code"
      },
      "index": {
        "description": "",
        "hierarchy": "Network SMTP ClientSession",
        "module": "Network.SMTP.ClientSession",
        "name": "Code",
        "normalized": "",
        "package": "SMTPClient",
        "partial": "Code",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-ClientSession.html#v:Comments",
      "description": {
        "fct-module": "Network.SMTP.ClientSession",
        "fct-package": "SMTPClient",
        "fct-signature": "Comments String",
        "fct-type": "function",
        "title": "Comments"
      },
      "index": {
        "description": "",
        "hierarchy": "Network SMTP ClientSession",
        "module": "Network.SMTP.ClientSession",
        "name": "Comments",
        "normalized": "",
        "package": "SMTPClient",
        "partial": "Comments",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-ClientSession.html#v:Connection",
      "description": {
        "fct-module": "Network.SMTP.ClientSession",
        "fct-package": "SMTPClient",
        "fct-signature": "Connection",
        "fct-type": "function",
        "title": "Connection"
      },
      "index": {
        "description": "",
        "hierarchy": "Network SMTP ClientSession",
        "module": "Network.SMTP.ClientSession",
        "name": "Connection",
        "normalized": "",
        "package": "SMTPClient",
        "partial": "Connection",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-ClientSession.html#v:Date",
      "description": {
        "fct-module": "Network.SMTP.ClientSession",
        "fct-package": "SMTPClient",
        "fct-signature": "Date CalendarTime",
        "fct-type": "function",
        "title": "Date"
      },
      "index": {
        "description": "",
        "hierarchy": "Network SMTP ClientSession",
        "module": "Network.SMTP.ClientSession",
        "name": "Date",
        "normalized": "",
        "package": "SMTPClient",
        "partial": "Date",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-ClientSession.html#v:From",
      "description": {
        "fct-module": "Network.SMTP.ClientSession",
        "fct-package": "SMTPClient",
        "fct-signature": "From [NameAddr]",
        "fct-type": "function",
        "title": "From"
      },
      "index": {
        "description": "",
        "hierarchy": "Network SMTP ClientSession",
        "module": "Network.SMTP.ClientSession",
        "name": "From",
        "normalized": "From[NameAddr]",
        "package": "SMTPClient",
        "partial": "From",
        "signature": "From[NameAddr]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-ClientSession.html#v:InReplyTo",
      "description": {
        "fct-module": "Network.SMTP.ClientSession",
        "fct-package": "SMTPClient",
        "fct-signature": "InReplyTo [String]",
        "fct-type": "function",
        "title": "InReplyTo"
      },
      "index": {
        "description": "",
        "hierarchy": "Network SMTP ClientSession",
        "module": "Network.SMTP.ClientSession",
        "name": "InReplyTo",
        "normalized": "InReplyTo[String]",
        "package": "SMTPClient",
        "partial": "In Reply To",
        "signature": "InReplyTo[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-ClientSession.html#v:Information",
      "description": {
        "fct-module": "Network.SMTP.ClientSession",
        "fct-package": "SMTPClient",
        "fct-signature": "Information",
        "fct-type": "function",
        "title": "Information"
      },
      "index": {
        "description": "",
        "hierarchy": "Network SMTP ClientSession",
        "module": "Network.SMTP.ClientSession",
        "name": "Information",
        "normalized": "",
        "package": "SMTPClient",
        "partial": "Information",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-ClientSession.html#v:IntermediateSuccess",
      "description": {
        "fct-module": "Network.SMTP.ClientSession",
        "fct-package": "SMTPClient",
        "fct-signature": "IntermediateSuccess",
        "fct-type": "function",
        "title": "IntermediateSuccess"
      },
      "index": {
        "description": "",
        "hierarchy": "Network SMTP ClientSession",
        "module": "Network.SMTP.ClientSession",
        "name": "IntermediateSuccess",
        "normalized": "",
        "package": "SMTPClient",
        "partial": "Intermediate Success",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-ClientSession.html#v:Keywords",
      "description": {
        "fct-module": "Network.SMTP.ClientSession",
        "fct-package": "SMTPClient",
        "fct-signature": "Keywords [[String]]",
        "fct-type": "function",
        "title": "Keywords"
      },
      "index": {
        "description": "",
        "hierarchy": "Network SMTP ClientSession",
        "module": "Network.SMTP.ClientSession",
        "name": "Keywords",
        "normalized": "Keywords[[String]]",
        "package": "SMTPClient",
        "partial": "Keywords",
        "signature": "Keywords[[String]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-ClientSession.html#v:MailSystem",
      "description": {
        "fct-module": "Network.SMTP.ClientSession",
        "fct-package": "SMTPClient",
        "fct-signature": "MailSystem",
        "fct-type": "function",
        "title": "MailSystem"
      },
      "index": {
        "description": "",
        "hierarchy": "Network SMTP ClientSession",
        "module": "Network.SMTP.ClientSession",
        "name": "MailSystem",
        "normalized": "",
        "package": "SMTPClient",
        "partial": "Mail System",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-ClientSession.html#v:Message",
      "description": {
        "fct-module": "Network.SMTP.ClientSession",
        "fct-package": "SMTPClient",
        "fct-signature": "Message [Field] a",
        "fct-type": "function",
        "title": "Message"
      },
      "index": {
        "description": "",
        "hierarchy": "Network SMTP ClientSession",
        "module": "Network.SMTP.ClientSession",
        "name": "Message",
        "normalized": "Message[Field]a",
        "package": "SMTPClient",
        "partial": "Message",
        "signature": "Message[Field]a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-ClientSession.html#v:MessageID",
      "description": {
        "fct-module": "Network.SMTP.ClientSession",
        "fct-package": "SMTPClient",
        "fct-signature": "MessageID String",
        "fct-type": "function",
        "title": "MessageID"
      },
      "index": {
        "description": "",
        "hierarchy": "Network SMTP ClientSession",
        "module": "Network.SMTP.ClientSession",
        "name": "MessageID",
        "normalized": "",
        "package": "SMTPClient",
        "partial": "Message ID",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-ClientSession.html#v:NameAddr",
      "description": {
        "fct-module": "Network.SMTP.ClientSession",
        "fct-package": "SMTPClient",
        "fct-signature": "NameAddr",
        "fct-type": "function",
        "title": "NameAddr"
      },
      "index": {
        "description": "",
        "hierarchy": "Network SMTP ClientSession",
        "module": "Network.SMTP.ClientSession",
        "name": "NameAddr",
        "normalized": "",
        "package": "SMTPClient",
        "partial": "Name Addr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-ClientSession.html#v:ObsReceived",
      "description": {
        "fct-module": "Network.SMTP.ClientSession",
        "fct-package": "SMTPClient",
        "fct-signature": "ObsReceived [(String, String)]",
        "fct-type": "function",
        "title": "ObsReceived"
      },
      "index": {
        "description": "",
        "hierarchy": "Network SMTP ClientSession",
        "module": "Network.SMTP.ClientSession",
        "name": "ObsReceived",
        "normalized": "ObsReceived[(String,String)]",
        "package": "SMTPClient",
        "partial": "Obs Received",
        "signature": "ObsReceived[(String,String)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-ClientSession.html#v:OptionalField",
      "description": {
        "fct-module": "Network.SMTP.ClientSession",
        "fct-package": "SMTPClient",
        "fct-signature": "OptionalField String String",
        "fct-type": "function",
        "title": "OptionalField"
      },
      "index": {
        "description": "",
        "hierarchy": "Network SMTP ClientSession",
        "module": "Network.SMTP.ClientSession",
        "name": "OptionalField",
        "normalized": "",
        "package": "SMTPClient",
        "partial": "Optional Field",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-ClientSession.html#v:PermanentFailure",
      "description": {
        "fct-module": "Network.SMTP.ClientSession",
        "fct-package": "SMTPClient",
        "fct-signature": "PermanentFailure",
        "fct-type": "function",
        "title": "PermanentFailure"
      },
      "index": {
        "description": "",
        "hierarchy": "Network SMTP ClientSession",
        "module": "Network.SMTP.ClientSession",
        "name": "PermanentFailure",
        "normalized": "",
        "package": "SMTPClient",
        "partial": "Permanent Failure",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-ClientSession.html#v:PreliminarySuccess",
      "description": {
        "fct-module": "Network.SMTP.ClientSession",
        "fct-package": "SMTPClient",
        "fct-signature": "PreliminarySuccess",
        "fct-type": "function",
        "title": "PreliminarySuccess"
      },
      "index": {
        "description": "",
        "hierarchy": "Network SMTP ClientSession",
        "module": "Network.SMTP.ClientSession",
        "name": "PreliminarySuccess",
        "normalized": "",
        "package": "SMTPClient",
        "partial": "Preliminary Success",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-ClientSession.html#v:Received",
      "description": {
        "fct-module": "Network.SMTP.ClientSession",
        "fct-package": "SMTPClient",
        "fct-signature": "Received ([(String, String)], CalendarTime)",
        "fct-type": "function",
        "title": "Received"
      },
      "index": {
        "description": "",
        "hierarchy": "Network SMTP ClientSession",
        "module": "Network.SMTP.ClientSession",
        "name": "Received",
        "normalized": "Received([(String,String)],CalendarTime)",
        "package": "SMTPClient",
        "partial": "Received",
        "signature": "Received([(String,String)],CalendarTime)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-ClientSession.html#v:References",
      "description": {
        "fct-module": "Network.SMTP.ClientSession",
        "fct-package": "SMTPClient",
        "fct-signature": "References [String]",
        "fct-type": "function",
        "title": "References"
      },
      "index": {
        "description": "",
        "hierarchy": "Network SMTP ClientSession",
        "module": "Network.SMTP.ClientSession",
        "name": "References",
        "normalized": "References[String]",
        "package": "SMTPClient",
        "partial": "References",
        "signature": "References[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-ClientSession.html#v:Reply",
      "description": {
        "fct-module": "Network.SMTP.ClientSession",
        "fct-package": "SMTPClient",
        "fct-signature": "Reply SmtpCode [String]",
        "fct-type": "function",
        "title": "Reply"
      },
      "index": {
        "description": "",
        "hierarchy": "Network SMTP ClientSession",
        "module": "Network.SMTP.ClientSession",
        "name": "Reply",
        "normalized": "Reply SmtpCode[String]",
        "package": "SMTPClient",
        "partial": "Reply",
        "signature": "Reply SmtpCode[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-ClientSession.html#v:ReplyTo",
      "description": {
        "fct-module": "Network.SMTP.ClientSession",
        "fct-package": "SMTPClient",
        "fct-signature": "ReplyTo [NameAddr]",
        "fct-type": "function",
        "title": "ReplyTo"
      },
      "index": {
        "description": "",
        "hierarchy": "Network SMTP ClientSession",
        "module": "Network.SMTP.ClientSession",
        "name": "ReplyTo",
        "normalized": "ReplyTo[NameAddr]",
        "package": "SMTPClient",
        "partial": "Reply To",
        "signature": "ReplyTo[NameAddr]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-ClientSession.html#v:ResentBcc",
      "description": {
        "fct-module": "Network.SMTP.ClientSession",
        "fct-package": "SMTPClient",
        "fct-signature": "ResentBcc [NameAddr]",
        "fct-type": "function",
        "title": "ResentBcc"
      },
      "index": {
        "description": "",
        "hierarchy": "Network SMTP ClientSession",
        "module": "Network.SMTP.ClientSession",
        "name": "ResentBcc",
        "normalized": "ResentBcc[NameAddr]",
        "package": "SMTPClient",
        "partial": "Resent Bcc",
        "signature": "ResentBcc[NameAddr]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-ClientSession.html#v:ResentCc",
      "description": {
        "fct-module": "Network.SMTP.ClientSession",
        "fct-package": "SMTPClient",
        "fct-signature": "ResentCc [NameAddr]",
        "fct-type": "function",
        "title": "ResentCc"
      },
      "index": {
        "description": "",
        "hierarchy": "Network SMTP ClientSession",
        "module": "Network.SMTP.ClientSession",
        "name": "ResentCc",
        "normalized": "ResentCc[NameAddr]",
        "package": "SMTPClient",
        "partial": "Resent Cc",
        "signature": "ResentCc[NameAddr]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-ClientSession.html#v:ResentDate",
      "description": {
        "fct-module": "Network.SMTP.ClientSession",
        "fct-package": "SMTPClient",
        "fct-signature": "ResentDate CalendarTime",
        "fct-type": "function",
        "title": "ResentDate"
      },
      "index": {
        "description": "",
        "hierarchy": "Network SMTP ClientSession",
        "module": "Network.SMTP.ClientSession",
        "name": "ResentDate",
        "normalized": "",
        "package": "SMTPClient",
        "partial": "Resent Date",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-ClientSession.html#v:ResentFrom",
      "description": {
        "fct-module": "Network.SMTP.ClientSession",
        "fct-package": "SMTPClient",
        "fct-signature": "ResentFrom [NameAddr]",
        "fct-type": "function",
        "title": "ResentFrom"
      },
      "index": {
        "description": "",
        "hierarchy": "Network SMTP ClientSession",
        "module": "Network.SMTP.ClientSession",
        "name": "ResentFrom",
        "normalized": "ResentFrom[NameAddr]",
        "package": "SMTPClient",
        "partial": "Resent From",
        "signature": "ResentFrom[NameAddr]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-ClientSession.html#v:ResentMessageID",
      "description": {
        "fct-module": "Network.SMTP.ClientSession",
        "fct-package": "SMTPClient",
        "fct-signature": "ResentMessageID String",
        "fct-type": "function",
        "title": "ResentMessageID"
      },
      "index": {
        "description": "",
        "hierarchy": "Network SMTP ClientSession",
        "module": "Network.SMTP.ClientSession",
        "name": "ResentMessageID",
        "normalized": "",
        "package": "SMTPClient",
        "partial": "Resent Message ID",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-ClientSession.html#v:ResentReplyTo",
      "description": {
        "fct-module": "Network.SMTP.ClientSession",
        "fct-package": "SMTPClient",
        "fct-signature": "ResentReplyTo [NameAddr]",
        "fct-type": "function",
        "title": "ResentReplyTo"
      },
      "index": {
        "description": "",
        "hierarchy": "Network SMTP ClientSession",
        "module": "Network.SMTP.ClientSession",
        "name": "ResentReplyTo",
        "normalized": "ResentReplyTo[NameAddr]",
        "package": "SMTPClient",
        "partial": "Resent Reply To",
        "signature": "ResentReplyTo[NameAddr]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-ClientSession.html#v:ResentSender",
      "description": {
        "fct-module": "Network.SMTP.ClientSession",
        "fct-package": "SMTPClient",
        "fct-signature": "ResentSender NameAddr",
        "fct-type": "function",
        "title": "ResentSender"
      },
      "index": {
        "description": "",
        "hierarchy": "Network SMTP ClientSession",
        "module": "Network.SMTP.ClientSession",
        "name": "ResentSender",
        "normalized": "",
        "package": "SMTPClient",
        "partial": "Resent Sender",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-ClientSession.html#v:ResentTo",
      "description": {
        "fct-module": "Network.SMTP.ClientSession",
        "fct-package": "SMTPClient",
        "fct-signature": "ResentTo [NameAddr]",
        "fct-type": "function",
        "title": "ResentTo"
      },
      "index": {
        "description": "",
        "hierarchy": "Network SMTP ClientSession",
        "module": "Network.SMTP.ClientSession",
        "name": "ResentTo",
        "normalized": "ResentTo[NameAddr]",
        "package": "SMTPClient",
        "partial": "Resent To",
        "signature": "ResentTo[NameAddr]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-ClientSession.html#v:ReturnPath",
      "description": {
        "fct-module": "Network.SMTP.ClientSession",
        "fct-package": "SMTPClient",
        "fct-signature": "ReturnPath String",
        "fct-type": "function",
        "title": "ReturnPath"
      },
      "index": {
        "description": "",
        "hierarchy": "Network SMTP ClientSession",
        "module": "Network.SMTP.ClientSession",
        "name": "ReturnPath",
        "normalized": "",
        "package": "SMTPClient",
        "partial": "Return Path",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-ClientSession.html#v:SMTPState",
      "description": {
        "fct-module": "Network.SMTP.ClientSession",
        "fct-package": "SMTPClient",
        "fct-signature": "SMTPState",
        "fct-source": "src/Network-SMTP-ClientSession.html#SMTPState",
        "fct-type": "function",
        "title": "SMTPState"
      },
      "index": {
        "description": "",
        "hierarchy": "Network SMTP ClientSession",
        "module": "Network.SMTP.ClientSession",
        "name": "SMTPState",
        "normalized": "",
        "package": "SMTPClient",
        "partial": "SMTPState",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-ClientSession.html#v:Sender",
      "description": {
        "fct-module": "Network.SMTP.ClientSession",
        "fct-package": "SMTPClient",
        "fct-signature": "Sender NameAddr",
        "fct-type": "function",
        "title": "Sender"
      },
      "index": {
        "description": "",
        "hierarchy": "Network SMTP ClientSession",
        "module": "Network.SMTP.ClientSession",
        "name": "Sender",
        "normalized": "",
        "package": "SMTPClient",
        "partial": "Sender",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-ClientSession.html#v:Subject",
      "description": {
        "fct-module": "Network.SMTP.ClientSession",
        "fct-package": "SMTPClient",
        "fct-signature": "Subject String",
        "fct-type": "function",
        "title": "Subject"
      },
      "index": {
        "description": "",
        "hierarchy": "Network SMTP ClientSession",
        "module": "Network.SMTP.ClientSession",
        "name": "Subject",
        "normalized": "",
        "package": "SMTPClient",
        "partial": "Subject",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-ClientSession.html#v:Success",
      "description": {
        "fct-module": "Network.SMTP.ClientSession",
        "fct-package": "SMTPClient",
        "fct-signature": "Success",
        "fct-type": "function",
        "title": "Success"
      },
      "index": {
        "description": "",
        "hierarchy": "Network SMTP ClientSession",
        "module": "Network.SMTP.ClientSession",
        "name": "Success",
        "normalized": "",
        "package": "SMTPClient",
        "partial": "Success",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-ClientSession.html#v:Syntax",
      "description": {
        "fct-module": "Network.SMTP.ClientSession",
        "fct-package": "SMTPClient",
        "fct-signature": "Syntax",
        "fct-type": "function",
        "title": "Syntax"
      },
      "index": {
        "description": "",
        "hierarchy": "Network SMTP ClientSession",
        "module": "Network.SMTP.ClientSession",
        "name": "Syntax",
        "normalized": "",
        "package": "SMTPClient",
        "partial": "Syntax",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-ClientSession.html#v:To",
      "description": {
        "fct-module": "Network.SMTP.ClientSession",
        "fct-package": "SMTPClient",
        "fct-signature": "To [NameAddr]",
        "fct-type": "function",
        "title": "To"
      },
      "index": {
        "description": "",
        "hierarchy": "Network SMTP ClientSession",
        "module": "Network.SMTP.ClientSession",
        "name": "To",
        "normalized": "To[NameAddr]",
        "package": "SMTPClient",
        "partial": "To",
        "signature": "To[NameAddr]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-ClientSession.html#v:TransientFailure",
      "description": {
        "fct-module": "Network.SMTP.ClientSession",
        "fct-package": "SMTPClient",
        "fct-signature": "TransientFailure",
        "fct-type": "function",
        "title": "TransientFailure"
      },
      "index": {
        "description": "",
        "hierarchy": "Network SMTP ClientSession",
        "module": "Network.SMTP.ClientSession",
        "name": "TransientFailure",
        "normalized": "",
        "package": "SMTPClient",
        "partial": "Transient Failure",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-ClientSession.html#v:Unspecified3",
      "description": {
        "fct-module": "Network.SMTP.ClientSession",
        "fct-package": "SMTPClient",
        "fct-signature": "Unspecified3",
        "fct-type": "function",
        "title": "Unspecified3"
      },
      "index": {
        "description": "",
        "hierarchy": "Network SMTP ClientSession",
        "module": "Network.SMTP.ClientSession",
        "name": "Unspecified3",
        "normalized": "",
        "package": "SMTPClient",
        "partial": "Unspecified",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-ClientSession.html#v:Unspecified4",
      "description": {
        "fct-module": "Network.SMTP.ClientSession",
        "fct-package": "SMTPClient",
        "fct-signature": "Unspecified4",
        "fct-type": "function",
        "title": "Unspecified4"
      },
      "index": {
        "description": "",
        "hierarchy": "Network SMTP ClientSession",
        "module": "Network.SMTP.ClientSession",
        "name": "Unspecified4",
        "normalized": "",
        "package": "SMTPClient",
        "partial": "Unspecified",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-ClientSession.html#v:Unused0",
      "description": {
        "fct-module": "Network.SMTP.ClientSession",
        "fct-package": "SMTPClient",
        "fct-signature": "Unused0",
        "fct-type": "function",
        "title": "Unused0"
      },
      "index": {
        "description": "",
        "hierarchy": "Network SMTP ClientSession",
        "module": "Network.SMTP.ClientSession",
        "name": "Unused0",
        "normalized": "",
        "package": "SMTPClient",
        "partial": "Unused",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-ClientSession.html#v:nameAddr_addr",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.SMTP.ClientSession",
        "fct-package": "SMTPClient",
        "fct-signature": "String",
        "fct-type": "function",
        "title": "nameAddr_addr"
      },
      "index": {
        "description": "",
        "hierarchy": "Network SMTP ClientSession",
        "module": "Network.SMTP.ClientSession",
        "name": "nameAddr_addr",
        "normalized": "",
        "package": "SMTPClient",
        "partial": "Addr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-ClientSession.html#v:nameAddr_name",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.SMTP.ClientSession",
        "fct-package": "SMTPClient",
        "fct-signature": "Maybe String",
        "fct-type": "function",
        "title": "nameAddr_name"
      },
      "index": {
        "description": "",
        "hierarchy": "Network SMTP ClientSession",
        "module": "Network.SMTP.ClientSession",
        "name": "nameAddr_name",
        "normalized": "",
        "package": "SMTPClient",
        "partial": "Addr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-ClientSession.html#v:smtpClientSession",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a pure state machine for an SMTP client session.  Caller must\n handle I/O.  The message body may use either \"\\n\" or \"\\r\\n\" as an\n end-of-line marker.\n\u003c/p\u003e",
        "fct-module": "Network.SMTP.ClientSession",
        "fct-package": "SMTPClient",
        "fct-signature": "String-\u003e [Message]-\u003e SMTPState",
        "fct-type": "function",
        "title": "smtpClientSession"
      },
      "index": {
        "description": "Construct pure state machine for an SMTP client session Caller must handle The message body may use either or as an end-of-line marker",
        "hierarchy": "Network SMTP ClientSession",
        "module": "Network.SMTP.ClientSession",
        "name": "smtpClientSession",
        "normalized": "String-\u003e[Message]-\u003eSMTPState",
        "package": "SMTPClient",
        "partial": "Client Session",
        "signature": "String-\u003e[Message]-\u003eSMTPState"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-ClientSession.html#v:smtpFailure",
      "description": {
        "fct-descr": "\u003cp\u003eStep 3. Check if this is Just err, which indicates that a protocol error\n has occurred, and that the caller must terminate the session.\n\u003c/p\u003e",
        "fct-module": "Network.SMTP.ClientSession",
        "fct-package": "SMTPClient",
        "fct-signature": "Maybe String",
        "fct-source": "src/Network-SMTP-ClientSession.html#SMTPState",
        "fct-type": "function",
        "title": "smtpFailure"
      },
      "index": {
        "description": "Step Check if this is Just err which indicates that protocol error has occurred and that the caller must terminate the session",
        "hierarchy": "Network SMTP ClientSession",
        "module": "Network.SMTP.ClientSession",
        "name": "smtpFailure",
        "normalized": "",
        "package": "SMTPClient",
        "partial": "Failure",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-ClientSession.html#v:smtpOutQueue",
      "description": {
        "fct-descr": "\u003cp\u003eStep 1. Caller must send any lines queued up in this list to the SMTP\n server.  They do not have end-of-line characters, so you must add\n \"\\r\\n\" on the end (both characters are required by RFC2821 - do not\n just send \"\\n\").\n\u003c/p\u003e",
        "fct-module": "Network.SMTP.ClientSession",
        "fct-package": "SMTPClient",
        "fct-signature": "[String]",
        "fct-source": "src/Network-SMTP-ClientSession.html#SMTPState",
        "fct-type": "function",
        "title": "smtpOutQueue"
      },
      "index": {
        "description": "Step Caller must send any lines queued up in this list to the SMTP server They do not have end-of-line characters so you must add on the end both characters are required by RFC2821 do not just send",
        "hierarchy": "Network SMTP ClientSession",
        "module": "Network.SMTP.ClientSession",
        "name": "smtpOutQueue",
        "normalized": "[String]",
        "package": "SMTPClient",
        "partial": "Out Queue",
        "signature": "[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-ClientSession.html#v:smtpReceive",
      "description": {
        "fct-descr": "\u003cp\u003eStep 4. The caller should wait for a line from the SMTP server,\n strip the \"\\r\\n\" end-of-line characters, and pass the stripped\n line to this function for processing.  Go to step 1.\n\u003c/p\u003e",
        "fct-module": "Network.SMTP.ClientSession",
        "fct-package": "SMTPClient",
        "fct-signature": "String -\u003e SMTPState -\u003e SMTPState",
        "fct-source": "src/Network-SMTP-ClientSession.html#SMTPState",
        "fct-type": "function",
        "title": "smtpReceive"
      },
      "index": {
        "description": "Step The caller should wait for line from the SMTP server strip the end-of-line characters and pass the stripped line to this function for processing Go to step",
        "hierarchy": "Network SMTP ClientSession",
        "module": "Network.SMTP.ClientSession",
        "name": "smtpReceive",
        "normalized": "String-\u003eSMTPState-\u003eSMTPState",
        "package": "SMTPClient",
        "partial": "Receive",
        "signature": "String-\u003eSMTPState-\u003eSMTPState"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-ClientSession.html#v:smtpStatuses",
      "description": {
        "fct-descr": "\u003cp\u003eA list containing a failure status for each message that has been sent so far,\n where each element corresponds to one in the list of messages.\n If the SMTP session does not complete successfully, then this list is\n likely to be shorter than the input messages list.  When smtpSuccess is\n true, this list is guaranteed to be the same length as the list of input\n messages.\n \u003cem\u003eNothing\u003c/em\u003e means success, and \u003cem\u003eJust x\u003c/em\u003e is a failure status returned by\n the SMTP server.\n\u003c/p\u003e",
        "fct-module": "Network.SMTP.ClientSession",
        "fct-package": "SMTPClient",
        "fct-signature": "[Maybe SmtpReply]",
        "fct-source": "src/Network-SMTP-ClientSession.html#SMTPState",
        "fct-type": "function",
        "title": "smtpStatuses"
      },
      "index": {
        "description": "list containing failure status for each message that has been sent so far where each element corresponds to one in the list of messages If the SMTP session does not complete successfully then this list is likely to be shorter than the input messages list When smtpSuccess is true this list is guaranteed to be the same length as the list of input messages Nothing means success and Just is failure status returned by the SMTP server",
        "hierarchy": "Network SMTP ClientSession",
        "module": "Network.SMTP.ClientSession",
        "name": "smtpStatuses",
        "normalized": "[Maybe SmtpReply]",
        "package": "SMTPClient",
        "partial": "Statuses",
        "signature": "[Maybe SmtpReply]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-ClientSession.html#v:smtpSuccess",
      "description": {
        "fct-descr": "\u003cp\u003eStep 2. Check if this is True, which indicates that the SMTP session\n has completed successfully and there is no more work to do.\n\u003c/p\u003e",
        "fct-module": "Network.SMTP.ClientSession",
        "fct-package": "SMTPClient",
        "fct-signature": "Bool",
        "fct-source": "src/Network-SMTP-ClientSession.html#SMTPState",
        "fct-type": "function",
        "title": "smtpSuccess"
      },
      "index": {
        "description": "Step Check if this is True which indicates that the SMTP session has completed successfully and there is no more work to do",
        "hierarchy": "Network SMTP ClientSession",
        "module": "Network.SMTP.ClientSession",
        "name": "smtpSuccess",
        "normalized": "",
        "package": "SMTPClient",
        "partial": "Success",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Simple.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMail is a simple library with which you can add email functionality to your\n application. It assumes you have access to a smarthost which can relay all\n your mail.\n\u003c/p\u003e\u003cp\u003eAs an example:\n\u003c/p\u003e\u003cpre\u003e import Network.SMTP.Simple\n import System.IO\n\n main :: IO ()\n main = do\n     sendSimpleMessages (hPutStrLn stderr) \"10.2.23.11\" \"example.com\" [message]\n     where message = SimpleMessage\n                         [NameAddr (Just \"John Doe\") \"johnd@example.com\"]\n                         [NameAddr (Just \"Team\") \"team@exmaple.com\"]\n                         \"My test email using Network.SMTP.Simple\"\n                         \"Hi, this is a test email which uses SMTPClient.\"\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Network.SMTP.Simple",
        "fct-package": "SMTPClient",
        "fct-signature": "module",
        "fct-source": "src/Network-SMTP-Simple.html",
        "fct-type": "module",
        "title": "Simple"
      },
      "index": {
        "description": "Mail is simple library with which you can add email functionality to your application It assumes you have access to smarthost which can relay all your mail As an example import Network.SMTP.Simple import System.IO main IO main do sendSimpleMessages hPutStrLn stderr example.com message where message SimpleMessage NameAddr Just John Doe johnd@example.com NameAddr Just Team team@exmaple.com My test email using Network.SMTP.Simple Hi this is test email which uses SMTPClient",
        "hierarchy": "Network SMTP Simple",
        "module": "Network.SMTP.Simple",
        "name": "Simple",
        "normalized": "",
        "package": "SMTPClient",
        "partial": "Simple",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Simple.html#t:NameAddr",
      "description": {
        "fct-descr": "\u003cp\u003eA NameAddr is composed of an optional realname a mandatory\n e-mail \u003ccode\u003e\u003ca\u003eaddress\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.SMTP.Simple",
        "fct-package": "SMTPClient",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "NameAddr"
      },
      "index": {
        "description": "NameAddr is composed of an optional realname mandatory e-mail address",
        "hierarchy": "Network SMTP Simple",
        "module": "Network.SMTP.Simple",
        "name": "NameAddr",
        "normalized": "",
        "package": "SMTPClient",
        "partial": "Name Addr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Simple.html#t:SimpleMessage",
      "description": {
        "fct-module": "Network.SMTP.Simple",
        "fct-package": "SMTPClient",
        "fct-signature": "data",
        "fct-source": "src/Network-SMTP-Simple.html#SimpleMessage",
        "fct-type": "data",
        "title": "SimpleMessage"
      },
      "index": {
        "description": "",
        "hierarchy": "Network SMTP Simple",
        "module": "Network.SMTP.Simple",
        "name": "SimpleMessage",
        "normalized": "",
        "package": "SMTPClient",
        "partial": "Simple Message",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Simple.html#v:NameAddr",
      "description": {
        "fct-module": "Network.SMTP.Simple",
        "fct-package": "SMTPClient",
        "fct-signature": "NameAddr",
        "fct-type": "function",
        "title": "NameAddr"
      },
      "index": {
        "description": "",
        "hierarchy": "Network SMTP Simple",
        "module": "Network.SMTP.Simple",
        "name": "NameAddr",
        "normalized": "",
        "package": "SMTPClient",
        "partial": "Name Addr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Simple.html#v:SimpleMessage",
      "description": {
        "fct-module": "Network.SMTP.Simple",
        "fct-package": "SMTPClient",
        "fct-signature": "SimpleMessage",
        "fct-source": "src/Network-SMTP-Simple.html#SimpleMessage",
        "fct-type": "function",
        "title": "SimpleMessage"
      },
      "index": {
        "description": "",
        "hierarchy": "Network SMTP Simple",
        "module": "Network.SMTP.Simple",
        "name": "SimpleMessage",
        "normalized": "",
        "package": "SMTPClient",
        "partial": "Simple Message",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Simple.html#v:body",
      "description": {
        "fct-descr": "\u003cp\u003eThe body\n\u003c/p\u003e",
        "fct-module": "Network.SMTP.Simple",
        "fct-package": "SMTPClient",
        "fct-signature": "String",
        "fct-source": "src/Network-SMTP-Simple.html#SimpleMessage",
        "fct-type": "function",
        "title": "body"
      },
      "index": {
        "description": "The body",
        "hierarchy": "Network SMTP Simple",
        "module": "Network.SMTP.Simple",
        "name": "body",
        "normalized": "",
        "package": "SMTPClient",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Simple.html#v:from",
      "description": {
        "fct-descr": "\u003cp\u003eThe sender(s)\n\u003c/p\u003e",
        "fct-module": "Network.SMTP.Simple",
        "fct-package": "SMTPClient",
        "fct-signature": "[NameAddr]",
        "fct-source": "src/Network-SMTP-Simple.html#SimpleMessage",
        "fct-type": "function",
        "title": "from"
      },
      "index": {
        "description": "The sender",
        "hierarchy": "Network SMTP Simple",
        "module": "Network.SMTP.Simple",
        "name": "from",
        "normalized": "[NameAddr]",
        "package": "SMTPClient",
        "partial": "",
        "signature": "[NameAddr]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Simple.html#v:nameAddr_addr",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.SMTP.Simple",
        "fct-package": "SMTPClient",
        "fct-signature": "String",
        "fct-type": "function",
        "title": "nameAddr_addr"
      },
      "index": {
        "description": "",
        "hierarchy": "Network SMTP Simple",
        "module": "Network.SMTP.Simple",
        "name": "nameAddr_addr",
        "normalized": "",
        "package": "SMTPClient",
        "partial": "Addr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Simple.html#v:nameAddr_name",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.SMTP.Simple",
        "fct-package": "SMTPClient",
        "fct-signature": "Maybe String",
        "fct-type": "function",
        "title": "nameAddr_name"
      },
      "index": {
        "description": "",
        "hierarchy": "Network SMTP Simple",
        "module": "Network.SMTP.Simple",
        "name": "nameAddr_name",
        "normalized": "",
        "package": "SMTPClient",
        "partial": "Addr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Simple.html#v:sendRawMessages",
      "description": {
        "fct-descr": "\u003cp\u003eUse this if you need more control than sendSimpleMessages gives you.\n\u003c/p\u003e",
        "fct-module": "Network.SMTP.Simple",
        "fct-package": "SMTPClient",
        "fct-signature": "(String -\u003e IO ())-\u003e [AddrInfo]-\u003e String-\u003e [Message]-\u003e IO ()",
        "fct-type": "function",
        "title": "sendRawMessages"
      },
      "index": {
        "description": "Use this if you need more control than sendSimpleMessages gives you",
        "hierarchy": "Network SMTP Simple",
        "module": "Network.SMTP.Simple",
        "name": "sendRawMessages",
        "normalized": "(String-\u003eIO())-\u003e[AddrInfo]-\u003eString-\u003e[Message]-\u003eIO()",
        "package": "SMTPClient",
        "partial": "Raw Messages",
        "signature": "(String-\u003eIO())-\u003e[AddrInfo]-\u003eString-\u003e[Message]-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Simple.html#v:sendSimpleMessages",
      "description": {
        "fct-descr": "\u003cp\u003eSimplest way to send mail.  Takes the SMTP hostname, the HELO domain, and a list of SimpleMessage.\n\u003c/p\u003e",
        "fct-module": "Network.SMTP.Simple",
        "fct-package": "SMTPClient",
        "fct-signature": "(String -\u003e IO ())-\u003e String-\u003e String-\u003e [SimpleMessage]-\u003e IO ()",
        "fct-type": "function",
        "title": "sendSimpleMessages"
      },
      "index": {
        "description": "Simplest way to send mail Takes the SMTP hostname the HELO domain and list of SimpleMessage",
        "hierarchy": "Network SMTP Simple",
        "module": "Network.SMTP.Simple",
        "name": "sendSimpleMessages",
        "normalized": "(String-\u003eIO())-\u003eString-\u003eString-\u003e[SimpleMessage]-\u003eIO()",
        "package": "SMTPClient",
        "partial": "Simple Messages",
        "signature": "(String-\u003eIO())-\u003eString-\u003eString-\u003e[SimpleMessage]-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Simple.html#v:subject",
      "description": {
        "fct-descr": "\u003cp\u003eThe subject line\n\u003c/p\u003e",
        "fct-module": "Network.SMTP.Simple",
        "fct-package": "SMTPClient",
        "fct-signature": "String",
        "fct-source": "src/Network-SMTP-Simple.html#SimpleMessage",
        "fct-type": "function",
        "title": "subject"
      },
      "index": {
        "description": "The subject line",
        "hierarchy": "Network SMTP Simple",
        "module": "Network.SMTP.Simple",
        "name": "subject",
        "normalized": "",
        "package": "SMTPClient",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Simple.html#v:to",
      "description": {
        "fct-descr": "\u003cp\u003eThe recipient(s)\n\u003c/p\u003e",
        "fct-module": "Network.SMTP.Simple",
        "fct-package": "SMTPClient",
        "fct-signature": "[NameAddr]",
        "fct-source": "src/Network-SMTP-Simple.html#SimpleMessage",
        "fct-type": "function",
        "title": "to"
      },
      "index": {
        "description": "The recipient",
        "hierarchy": "Network SMTP Simple",
        "module": "Network.SMTP.Simple",
        "name": "to",
        "normalized": "[NameAddr]",
        "package": "SMTPClient",
        "partial": "",
        "signature": "[NameAddr]"
      }
    }
  }
]