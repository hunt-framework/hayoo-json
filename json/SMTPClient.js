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
        "word": "SMTPClient"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn SMTP client in the IO Monad.\n\u003c/p\u003e\u003cp\u003eData structures for representing SMTP status codes and email messages are\n re-exported here from \u003cem\u003eText.ParserCombinators.Parsec.Rfc2821\u003c/em\u003e and\n \u003cem\u003eText.ParserCombinators.Parsec.Rfc2822\u003c/em\u003e in the \u003cem\u003ehsemail\u003c/em\u003e package.\n\u003c/p\u003e\u003cp\u003eHere's a working example:\n\u003c/p\u003e\u003cpre\u003e import Network.SMTP.ClientSession\n import Network.SMTP.Client\n import Network.Socket\n import System.Time\n import System.IO\n import Data.IORef\n \n myDomain = \"example.com\"\n smtpHost = \"mail.example.com\"    -- \u003c-- Your SMTP server here\n \n main = do\n     now \u003c- getClockTime\n     nowCT \u003c- toCalendarTime now\n     let message = Message [\n                 From [NameAddr (Just \"Mr. Nobody\") \"nobody@example.com\"],\n                 To   [NameAddr (Just \"Mr. Somebody\") \"somebody@example.com\"],\n                 Subject \"I'm using SMTPClient!\",\n                 Date nowCT\n             ]\n             (\"Dear Sir,\\n\"++\n              \"It has come to my attention that this is an email.\\n\"++\n              \"Yours sincerely,\\n\"++\n              \"Mr. Nobody\\n\")\n     addrs \u003c- getAddrInfo Nothing (Just smtpHost) (Just \"25\")\n     putStrLn $ \"connecting to \"++show (map addrAddress addrs)\n     sentRef \u003c- newIORef []\n     sendSMTP' (hPutStrLn stderr) (Just sentRef) myDomain addrs [message]\n     statuses \u003c- readIORef sentRef\n     -- If no exception was caught, statuses is guaranteed to be\n     -- the same length as the list of input messages, therefore head won't fail here.\n     case head statuses of\n         Nothing     -\u003e putStrLn \"Message successfully sent\"\n         Just status -\u003e putStrLn $ \"Message send failed with status \"++show status\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Network.SMTP.Client",
          "name": "Client",
          "package": "SMTPClient",
          "source": "src/Network-SMTP-Client.html",
          "type": "module"
        },
        "index": {
          "description": "An SMTP client in the IO Monad Data structures for representing SMTP status codes and email messages are re-exported here from Text.ParserCombinators.Parsec.Rfc2821 and Text.ParserCombinators.Parsec.Rfc2822 in the hsemail package Here working example import Network.SMTP.ClientSession import Network.SMTP.Client import Network.Socket import System.Time import System.IO import Data.IORef myDomain example.com smtpHost mail.example.com Your SMTP server here main do now getClockTime nowCT toCalendarTime now let message Message From NameAddr Just Mr Nobody nobody@example.com To NameAddr Just Mr Somebody somebody@example.com Subject using SMTPClient Date nowCT Dear Sir It has come to my attention that this is an email Yours sincerely Mr Nobody addrs getAddrInfo Nothing Just smtpHost Just putStrLn connecting to show map addrAddress addrs sentRef newIORef sendSMTP hPutStrLn stderr Just sentRef myDomain addrs message statuses readIORef sentRef If no exception was caught statuses is guaranteed to be the same length as the list of input messages therefore head won fail here case head statuses of Nothing putStrLn Message successfully sent Just status putStrLn Message send failed with status show status",
          "hierarchy": "Network SMTP Client",
          "module": "Network.SMTP.Client",
          "name": "Client",
          "package": "SMTPClient",
          "partial": "Client",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Client.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.SMTP.Client",
          "name": "Category",
          "package": "SMTPClient",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network SMTP Client",
          "module": "Network.SMTP.Client",
          "name": "Category",
          "package": "SMTPClient",
          "partial": "Category",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Client.html#t:Category"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis data type represents any of the header fields defined in this\n RFC. Each of the various instances contains with the return value\n of the corresponding parser.\n\u003c/p\u003e",
          "module": "Network.SMTP.Client",
          "name": "Field",
          "package": "SMTPClient",
          "type": "data"
        },
        "index": {
          "description": "This data type represents any of the header fields defined in this RFC Each of the various instances contains with the return value of the corresponding parser",
          "hierarchy": "Network SMTP Client",
          "module": "Network.SMTP.Client",
          "name": "Field",
          "package": "SMTPClient",
          "partial": "Field",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Client.html#t:Field"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis data type repesents a parsed Internet Message as defined in\n this RFC. It consists of an arbitrary number of header lines,\n represented in the \u003ccode\u003e\u003ca\u003eField\u003c/a\u003e\u003c/code\u003e data type, and a message body, which may\n be empty.\n\u003c/p\u003e",
          "module": "Network.SMTP.Client",
          "name": "GenericMessage",
          "package": "SMTPClient",
          "type": "data"
        },
        "index": {
          "description": "This data type repesents parsed Internet Message as defined in this RFC It consists of an arbitrary number of header lines represented in the Field data type and message body which may be empty",
          "hierarchy": "Network SMTP Client",
          "module": "Network.SMTP.Client",
          "name": "GenericMessage",
          "package": "SMTPClient",
          "partial": "Generic Message",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Client.html#t:GenericMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.SMTP.Client",
          "name": "Message",
          "package": "SMTPClient",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network SMTP Client",
          "module": "Network.SMTP.Client",
          "name": "Message",
          "package": "SMTPClient",
          "partial": "Message",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Client.html#t:Message"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA NameAddr is composed of an optional realname a mandatory\n e-mail \u003ccode\u003e\u003ca\u003eaddress\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.SMTP.Client",
          "name": "NameAddr",
          "package": "SMTPClient",
          "type": "data"
        },
        "index": {
          "description": "NameAddr is composed of an optional realname mandatory e-mail address",
          "hierarchy": "Network SMTP Client",
          "module": "Network.SMTP.Client",
          "name": "NameAddr",
          "package": "SMTPClient",
          "partial": "Name Addr",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Client.html#t:NameAddr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn exception indicating a communications failure at the level of the SMTP protocol.\n\u003c/p\u003e",
          "module": "Network.SMTP.Client",
          "name": "SMTPException",
          "package": "SMTPClient",
          "source": "src/Network-SMTP-Client.html#SMTPException",
          "type": "data"
        },
        "index": {
          "description": "An exception indicating communications failure at the level of the SMTP protocol",
          "hierarchy": "Network SMTP Client",
          "module": "Network.SMTP.Client",
          "name": "SMTPException",
          "package": "SMTPClient",
          "partial": "SMTPException",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Client.html#t:SMTPException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.SMTP.Client",
          "name": "SmtpCode",
          "package": "SMTPClient",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network SMTP Client",
          "module": "Network.SMTP.Client",
          "name": "SmtpCode",
          "package": "SMTPClient",
          "partial": "Smtp Code",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Client.html#t:SmtpCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn SMTP reply is a three-digit return code plus some waste of\n bandwidth called \"comments\". This is what the list of strings is\n for; one string per line in the reply. \u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e will append an\n \"\u003ccode\u003e\\r\\n\u003c/code\u003e\" end-of-line marker to each entry in that list, so that\n the resulting string is ready to be sent back to the peer. For\n example:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eshow $ Reply (Code Success MailSystem 0) [\"worked\", \"like\", \"a charm\" ]\n\u003c/code\u003e\u003c/strong\u003e\"250-worked\\r\\n250-like\\r\\n250 a charm\\r\\n\"\n\u003c/pre\u003e\u003cp\u003eIf the message is an empty list \u003ccode\u003e[]\u003c/code\u003e, a default text will be constructed:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eshow $ Reply (Code Success MailSystem 0) []\n\u003c/code\u003e\u003c/strong\u003e\"250 Success in category MailSystem\\r\\n\"\n\u003c/pre\u003e",
          "module": "Network.SMTP.Client",
          "name": "SmtpReply",
          "package": "SMTPClient",
          "type": "data"
        },
        "index": {
          "description": "An SMTP reply is three-digit return code plus some waste of bandwidth called comments This is what the list of strings is for one string per line in the reply show will append an end-of-line marker to each entry in that list so that the resulting string is ready to be sent back to the peer For example show Reply Code Success MailSystem worked like charm worked n250-like n250 charm If the message is an empty list default text will be constructed show Reply Code Success MailSystem Success in category MailSystem",
          "hierarchy": "Network SMTP Client",
          "module": "Network.SMTP.Client",
          "name": "SmtpReply",
          "package": "SMTPClient",
          "partial": "Smtp Reply",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Client.html#t:SmtpReply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.SMTP.Client",
          "name": "SuccessCode",
          "package": "SMTPClient",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network SMTP Client",
          "module": "Network.SMTP.Client",
          "name": "SuccessCode",
          "package": "SMTPClient",
          "partial": "Success Code",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Client.html#t:SuccessCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.SMTP.Client\",\"Network.SMTP.ClientSession\"]",
          "name": "Bcc",
          "package": "SMTPClient",
          "signature": "Bcc [NameAddr]",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Client.html#v:Bcc\",\"http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-ClientSession.html#v:Bcc\"]"
        },
        "index": {
          "hierarchy": "Network SMTP Client",
          "module": "Network.SMTP.Client",
          "name": "Bcc",
          "normalized": "Bcc[NameAddr]",
          "package": "SMTPClient",
          "partial": "Bcc",
          "signature": "Bcc[NameAddr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Client.html#v:Bcc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.SMTP.Client\",\"Network.SMTP.ClientSession\"]",
          "name": "Cc",
          "package": "SMTPClient",
          "signature": "Cc [NameAddr]",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Client.html#v:Cc\",\"http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-ClientSession.html#v:Cc\"]"
        },
        "index": {
          "hierarchy": "Network SMTP Client",
          "module": "Network.SMTP.Client",
          "name": "Cc",
          "normalized": "Cc[NameAddr]",
          "package": "SMTPClient",
          "partial": "Cc",
          "signature": "Cc[NameAddr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Client.html#v:Cc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.SMTP.Client\",\"Network.SMTP.ClientSession\"]",
          "name": "Code",
          "package": "SMTPClient",
          "signature": "Code SuccessCode Category Int",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Client.html#v:Code\",\"http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-ClientSession.html#v:Code\"]"
        },
        "index": {
          "hierarchy": "Network SMTP Client",
          "module": "Network.SMTP.Client",
          "name": "Code",
          "package": "SMTPClient",
          "partial": "Code",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Client.html#v:Code"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.SMTP.Client\",\"Network.SMTP.ClientSession\"]",
          "name": "Comments",
          "package": "SMTPClient",
          "signature": "Comments String",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Client.html#v:Comments\",\"http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-ClientSession.html#v:Comments\"]"
        },
        "index": {
          "hierarchy": "Network SMTP Client",
          "module": "Network.SMTP.Client",
          "name": "Comments",
          "package": "SMTPClient",
          "partial": "Comments",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Client.html#v:Comments"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.SMTP.Client\",\"Network.SMTP.ClientSession\"]",
          "name": "Connection",
          "package": "SMTPClient",
          "signature": "Connection",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Client.html#v:Connection\",\"http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-ClientSession.html#v:Connection\"]"
        },
        "index": {
          "hierarchy": "Network SMTP Client",
          "module": "Network.SMTP.Client",
          "name": "Connection",
          "package": "SMTPClient",
          "partial": "Connection",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Client.html#v:Connection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.SMTP.Client\",\"Network.SMTP.ClientSession\"]",
          "name": "Date",
          "package": "SMTPClient",
          "signature": "Date CalendarTime",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Client.html#v:Date\",\"http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-ClientSession.html#v:Date\"]"
        },
        "index": {
          "hierarchy": "Network SMTP Client",
          "module": "Network.SMTP.Client",
          "name": "Date",
          "package": "SMTPClient",
          "partial": "Date",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Client.html#v:Date"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.SMTP.Client\",\"Network.SMTP.ClientSession\"]",
          "name": "From",
          "package": "SMTPClient",
          "signature": "From [NameAddr]",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Client.html#v:From\",\"http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-ClientSession.html#v:From\"]"
        },
        "index": {
          "hierarchy": "Network SMTP Client",
          "module": "Network.SMTP.Client",
          "name": "From",
          "normalized": "From[NameAddr]",
          "package": "SMTPClient",
          "partial": "From",
          "signature": "From[NameAddr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Client.html#v:From"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.SMTP.Client\",\"Network.SMTP.ClientSession\"]",
          "name": "InReplyTo",
          "package": "SMTPClient",
          "signature": "InReplyTo [String]",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Client.html#v:InReplyTo\",\"http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-ClientSession.html#v:InReplyTo\"]"
        },
        "index": {
          "hierarchy": "Network SMTP Client",
          "module": "Network.SMTP.Client",
          "name": "InReplyTo",
          "normalized": "InReplyTo[String]",
          "package": "SMTPClient",
          "partial": "In Reply To",
          "signature": "InReplyTo[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Client.html#v:InReplyTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.SMTP.Client\",\"Network.SMTP.ClientSession\"]",
          "name": "Information",
          "package": "SMTPClient",
          "signature": "Information",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Client.html#v:Information\",\"http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-ClientSession.html#v:Information\"]"
        },
        "index": {
          "hierarchy": "Network SMTP Client",
          "module": "Network.SMTP.Client",
          "name": "Information",
          "package": "SMTPClient",
          "partial": "Information",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Client.html#v:Information"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.SMTP.Client\",\"Network.SMTP.ClientSession\"]",
          "name": "IntermediateSuccess",
          "package": "SMTPClient",
          "signature": "IntermediateSuccess",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Client.html#v:IntermediateSuccess\",\"http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-ClientSession.html#v:IntermediateSuccess\"]"
        },
        "index": {
          "hierarchy": "Network SMTP Client",
          "module": "Network.SMTP.Client",
          "name": "IntermediateSuccess",
          "package": "SMTPClient",
          "partial": "Intermediate Success",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Client.html#v:IntermediateSuccess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.SMTP.Client\",\"Network.SMTP.ClientSession\"]",
          "name": "Keywords",
          "package": "SMTPClient",
          "signature": "Keywords [[String]]",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Client.html#v:Keywords\",\"http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-ClientSession.html#v:Keywords\"]"
        },
        "index": {
          "hierarchy": "Network SMTP Client",
          "module": "Network.SMTP.Client",
          "name": "Keywords",
          "normalized": "Keywords[[String]]",
          "package": "SMTPClient",
          "partial": "Keywords",
          "signature": "Keywords[[String]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Client.html#v:Keywords"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.SMTP.Client\",\"Network.SMTP.ClientSession\"]",
          "name": "MailSystem",
          "package": "SMTPClient",
          "signature": "MailSystem",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Client.html#v:MailSystem\",\"http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-ClientSession.html#v:MailSystem\"]"
        },
        "index": {
          "hierarchy": "Network SMTP Client",
          "module": "Network.SMTP.Client",
          "name": "MailSystem",
          "package": "SMTPClient",
          "partial": "Mail System",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Client.html#v:MailSystem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.SMTP.Client\",\"Network.SMTP.ClientSession\"]",
          "name": "Message",
          "package": "SMTPClient",
          "signature": "Message [Field] a",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Client.html#v:Message\",\"http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-ClientSession.html#v:Message\"]"
        },
        "index": {
          "hierarchy": "Network SMTP Client",
          "module": "Network.SMTP.Client",
          "name": "Message",
          "normalized": "Message[Field]a",
          "package": "SMTPClient",
          "partial": "Message",
          "signature": "Message[Field]a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Client.html#v:Message"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.SMTP.Client\",\"Network.SMTP.ClientSession\"]",
          "name": "MessageID",
          "package": "SMTPClient",
          "signature": "MessageID String",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Client.html#v:MessageID\",\"http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-ClientSession.html#v:MessageID\"]"
        },
        "index": {
          "hierarchy": "Network SMTP Client",
          "module": "Network.SMTP.Client",
          "name": "MessageID",
          "package": "SMTPClient",
          "partial": "Message ID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Client.html#v:MessageID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.SMTP.Client\",\"Network.SMTP.ClientSession\",\"Network.SMTP.Simple\"]",
          "name": "NameAddr",
          "package": "SMTPClient",
          "signature": "NameAddr",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Client.html#v:NameAddr\",\"http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-ClientSession.html#v:NameAddr\",\"http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Simple.html#v:NameAddr\"]"
        },
        "index": {
          "hierarchy": "Network SMTP Client",
          "module": "Network.SMTP.Client",
          "name": "NameAddr",
          "package": "SMTPClient",
          "partial": "Name Addr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Client.html#v:NameAddr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.SMTP.Client\",\"Network.SMTP.ClientSession\"]",
          "name": "ObsReceived",
          "package": "SMTPClient",
          "signature": "ObsReceived [(String, String)]",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Client.html#v:ObsReceived\",\"http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-ClientSession.html#v:ObsReceived\"]"
        },
        "index": {
          "hierarchy": "Network SMTP Client",
          "module": "Network.SMTP.Client",
          "name": "ObsReceived",
          "normalized": "ObsReceived[(String,String)]",
          "package": "SMTPClient",
          "partial": "Obs Received",
          "signature": "ObsReceived[(String,String)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Client.html#v:ObsReceived"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.SMTP.Client\",\"Network.SMTP.ClientSession\"]",
          "name": "OptionalField",
          "package": "SMTPClient",
          "signature": "OptionalField String String",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Client.html#v:OptionalField\",\"http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-ClientSession.html#v:OptionalField\"]"
        },
        "index": {
          "hierarchy": "Network SMTP Client",
          "module": "Network.SMTP.Client",
          "name": "OptionalField",
          "package": "SMTPClient",
          "partial": "Optional Field",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Client.html#v:OptionalField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.SMTP.Client\",\"Network.SMTP.ClientSession\"]",
          "name": "PermanentFailure",
          "package": "SMTPClient",
          "signature": "PermanentFailure",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Client.html#v:PermanentFailure\",\"http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-ClientSession.html#v:PermanentFailure\"]"
        },
        "index": {
          "hierarchy": "Network SMTP Client",
          "module": "Network.SMTP.Client",
          "name": "PermanentFailure",
          "package": "SMTPClient",
          "partial": "Permanent Failure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Client.html#v:PermanentFailure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.SMTP.Client\",\"Network.SMTP.ClientSession\"]",
          "name": "PreliminarySuccess",
          "package": "SMTPClient",
          "signature": "PreliminarySuccess",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Client.html#v:PreliminarySuccess\",\"http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-ClientSession.html#v:PreliminarySuccess\"]"
        },
        "index": {
          "hierarchy": "Network SMTP Client",
          "module": "Network.SMTP.Client",
          "name": "PreliminarySuccess",
          "package": "SMTPClient",
          "partial": "Preliminary Success",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Client.html#v:PreliminarySuccess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.SMTP.Client\",\"Network.SMTP.ClientSession\"]",
          "name": "Received",
          "package": "SMTPClient",
          "signature": "Received ([(String, String)], CalendarTime)",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Client.html#v:Received\",\"http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-ClientSession.html#v:Received\"]"
        },
        "index": {
          "hierarchy": "Network SMTP Client",
          "module": "Network.SMTP.Client",
          "name": "Received",
          "normalized": "Received([(String,String)],CalendarTime)",
          "package": "SMTPClient",
          "partial": "Received",
          "signature": "Received([(String,String)],CalendarTime)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Client.html#v:Received"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.SMTP.Client\",\"Network.SMTP.ClientSession\"]",
          "name": "References",
          "package": "SMTPClient",
          "signature": "References [String]",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Client.html#v:References\",\"http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-ClientSession.html#v:References\"]"
        },
        "index": {
          "hierarchy": "Network SMTP Client",
          "module": "Network.SMTP.Client",
          "name": "References",
          "normalized": "References[String]",
          "package": "SMTPClient",
          "partial": "References",
          "signature": "References[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Client.html#v:References"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.SMTP.Client\",\"Network.SMTP.ClientSession\"]",
          "name": "Reply",
          "package": "SMTPClient",
          "signature": "Reply SmtpCode [String]",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Client.html#v:Reply\",\"http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-ClientSession.html#v:Reply\"]"
        },
        "index": {
          "hierarchy": "Network SMTP Client",
          "module": "Network.SMTP.Client",
          "name": "Reply",
          "normalized": "Reply SmtpCode[String]",
          "package": "SMTPClient",
          "partial": "Reply",
          "signature": "Reply SmtpCode[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Client.html#v:Reply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.SMTP.Client\",\"Network.SMTP.ClientSession\"]",
          "name": "ReplyTo",
          "package": "SMTPClient",
          "signature": "ReplyTo [NameAddr]",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Client.html#v:ReplyTo\",\"http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-ClientSession.html#v:ReplyTo\"]"
        },
        "index": {
          "hierarchy": "Network SMTP Client",
          "module": "Network.SMTP.Client",
          "name": "ReplyTo",
          "normalized": "ReplyTo[NameAddr]",
          "package": "SMTPClient",
          "partial": "Reply To",
          "signature": "ReplyTo[NameAddr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Client.html#v:ReplyTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.SMTP.Client\",\"Network.SMTP.ClientSession\"]",
          "name": "ResentBcc",
          "package": "SMTPClient",
          "signature": "ResentBcc [NameAddr]",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Client.html#v:ResentBcc\",\"http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-ClientSession.html#v:ResentBcc\"]"
        },
        "index": {
          "hierarchy": "Network SMTP Client",
          "module": "Network.SMTP.Client",
          "name": "ResentBcc",
          "normalized": "ResentBcc[NameAddr]",
          "package": "SMTPClient",
          "partial": "Resent Bcc",
          "signature": "ResentBcc[NameAddr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Client.html#v:ResentBcc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.SMTP.Client\",\"Network.SMTP.ClientSession\"]",
          "name": "ResentCc",
          "package": "SMTPClient",
          "signature": "ResentCc [NameAddr]",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Client.html#v:ResentCc\",\"http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-ClientSession.html#v:ResentCc\"]"
        },
        "index": {
          "hierarchy": "Network SMTP Client",
          "module": "Network.SMTP.Client",
          "name": "ResentCc",
          "normalized": "ResentCc[NameAddr]",
          "package": "SMTPClient",
          "partial": "Resent Cc",
          "signature": "ResentCc[NameAddr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Client.html#v:ResentCc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.SMTP.Client\",\"Network.SMTP.ClientSession\"]",
          "name": "ResentDate",
          "package": "SMTPClient",
          "signature": "ResentDate CalendarTime",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Client.html#v:ResentDate\",\"http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-ClientSession.html#v:ResentDate\"]"
        },
        "index": {
          "hierarchy": "Network SMTP Client",
          "module": "Network.SMTP.Client",
          "name": "ResentDate",
          "package": "SMTPClient",
          "partial": "Resent Date",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Client.html#v:ResentDate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.SMTP.Client\",\"Network.SMTP.ClientSession\"]",
          "name": "ResentFrom",
          "package": "SMTPClient",
          "signature": "ResentFrom [NameAddr]",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Client.html#v:ResentFrom\",\"http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-ClientSession.html#v:ResentFrom\"]"
        },
        "index": {
          "hierarchy": "Network SMTP Client",
          "module": "Network.SMTP.Client",
          "name": "ResentFrom",
          "normalized": "ResentFrom[NameAddr]",
          "package": "SMTPClient",
          "partial": "Resent From",
          "signature": "ResentFrom[NameAddr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Client.html#v:ResentFrom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.SMTP.Client\",\"Network.SMTP.ClientSession\"]",
          "name": "ResentMessageID",
          "package": "SMTPClient",
          "signature": "ResentMessageID String",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Client.html#v:ResentMessageID\",\"http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-ClientSession.html#v:ResentMessageID\"]"
        },
        "index": {
          "hierarchy": "Network SMTP Client",
          "module": "Network.SMTP.Client",
          "name": "ResentMessageID",
          "package": "SMTPClient",
          "partial": "Resent Message ID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Client.html#v:ResentMessageID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.SMTP.Client\",\"Network.SMTP.ClientSession\"]",
          "name": "ResentReplyTo",
          "package": "SMTPClient",
          "signature": "ResentReplyTo [NameAddr]",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Client.html#v:ResentReplyTo\",\"http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-ClientSession.html#v:ResentReplyTo\"]"
        },
        "index": {
          "hierarchy": "Network SMTP Client",
          "module": "Network.SMTP.Client",
          "name": "ResentReplyTo",
          "normalized": "ResentReplyTo[NameAddr]",
          "package": "SMTPClient",
          "partial": "Resent Reply To",
          "signature": "ResentReplyTo[NameAddr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Client.html#v:ResentReplyTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.SMTP.Client\",\"Network.SMTP.ClientSession\"]",
          "name": "ResentSender",
          "package": "SMTPClient",
          "signature": "ResentSender NameAddr",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Client.html#v:ResentSender\",\"http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-ClientSession.html#v:ResentSender\"]"
        },
        "index": {
          "hierarchy": "Network SMTP Client",
          "module": "Network.SMTP.Client",
          "name": "ResentSender",
          "package": "SMTPClient",
          "partial": "Resent Sender",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Client.html#v:ResentSender"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.SMTP.Client\",\"Network.SMTP.ClientSession\"]",
          "name": "ResentTo",
          "package": "SMTPClient",
          "signature": "ResentTo [NameAddr]",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Client.html#v:ResentTo\",\"http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-ClientSession.html#v:ResentTo\"]"
        },
        "index": {
          "hierarchy": "Network SMTP Client",
          "module": "Network.SMTP.Client",
          "name": "ResentTo",
          "normalized": "ResentTo[NameAddr]",
          "package": "SMTPClient",
          "partial": "Resent To",
          "signature": "ResentTo[NameAddr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Client.html#v:ResentTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.SMTP.Client\",\"Network.SMTP.ClientSession\"]",
          "name": "ReturnPath",
          "package": "SMTPClient",
          "signature": "ReturnPath String",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Client.html#v:ReturnPath\",\"http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-ClientSession.html#v:ReturnPath\"]"
        },
        "index": {
          "hierarchy": "Network SMTP Client",
          "module": "Network.SMTP.Client",
          "name": "ReturnPath",
          "package": "SMTPClient",
          "partial": "Return Path",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Client.html#v:ReturnPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.SMTP.Client",
          "name": "SMTPException",
          "package": "SMTPClient",
          "signature": "SMTPException String",
          "source": "src/Network-SMTP-Client.html#SMTPException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network SMTP Client",
          "module": "Network.SMTP.Client",
          "name": "SMTPException",
          "package": "SMTPClient",
          "partial": "SMTPException",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Client.html#v:SMTPException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.SMTP.Client\",\"Network.SMTP.ClientSession\"]",
          "name": "Sender",
          "package": "SMTPClient",
          "signature": "Sender NameAddr",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Client.html#v:Sender\",\"http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-ClientSession.html#v:Sender\"]"
        },
        "index": {
          "hierarchy": "Network SMTP Client",
          "module": "Network.SMTP.Client",
          "name": "Sender",
          "package": "SMTPClient",
          "partial": "Sender",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Client.html#v:Sender"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.SMTP.Client\",\"Network.SMTP.ClientSession\"]",
          "name": "Subject",
          "package": "SMTPClient",
          "signature": "Subject String",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Client.html#v:Subject\",\"http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-ClientSession.html#v:Subject\"]"
        },
        "index": {
          "hierarchy": "Network SMTP Client",
          "module": "Network.SMTP.Client",
          "name": "Subject",
          "package": "SMTPClient",
          "partial": "Subject",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Client.html#v:Subject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.SMTP.Client\",\"Network.SMTP.ClientSession\"]",
          "name": "Success",
          "package": "SMTPClient",
          "signature": "Success",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Client.html#v:Success\",\"http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-ClientSession.html#v:Success\"]"
        },
        "index": {
          "hierarchy": "Network SMTP Client",
          "module": "Network.SMTP.Client",
          "name": "Success",
          "package": "SMTPClient",
          "partial": "Success",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Client.html#v:Success"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.SMTP.Client\",\"Network.SMTP.ClientSession\"]",
          "name": "Syntax",
          "package": "SMTPClient",
          "signature": "Syntax",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Client.html#v:Syntax\",\"http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-ClientSession.html#v:Syntax\"]"
        },
        "index": {
          "hierarchy": "Network SMTP Client",
          "module": "Network.SMTP.Client",
          "name": "Syntax",
          "package": "SMTPClient",
          "partial": "Syntax",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Client.html#v:Syntax"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.SMTP.Client\",\"Network.SMTP.ClientSession\"]",
          "name": "To",
          "package": "SMTPClient",
          "signature": "To [NameAddr]",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Client.html#v:To\",\"http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-ClientSession.html#v:To\"]"
        },
        "index": {
          "hierarchy": "Network SMTP Client",
          "module": "Network.SMTP.Client",
          "name": "To",
          "normalized": "To[NameAddr]",
          "package": "SMTPClient",
          "partial": "To",
          "signature": "To[NameAddr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Client.html#v:To"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.SMTP.Client\",\"Network.SMTP.ClientSession\"]",
          "name": "TransientFailure",
          "package": "SMTPClient",
          "signature": "TransientFailure",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Client.html#v:TransientFailure\",\"http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-ClientSession.html#v:TransientFailure\"]"
        },
        "index": {
          "hierarchy": "Network SMTP Client",
          "module": "Network.SMTP.Client",
          "name": "TransientFailure",
          "package": "SMTPClient",
          "partial": "Transient Failure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Client.html#v:TransientFailure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.SMTP.Client\",\"Network.SMTP.ClientSession\"]",
          "name": "Unspecified3",
          "package": "SMTPClient",
          "signature": "Unspecified3",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Client.html#v:Unspecified3\",\"http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-ClientSession.html#v:Unspecified3\"]"
        },
        "index": {
          "hierarchy": "Network SMTP Client",
          "module": "Network.SMTP.Client",
          "name": "Unspecified3",
          "package": "SMTPClient",
          "partial": "Unspecified",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Client.html#v:Unspecified3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.SMTP.Client\",\"Network.SMTP.ClientSession\"]",
          "name": "Unspecified4",
          "package": "SMTPClient",
          "signature": "Unspecified4",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Client.html#v:Unspecified4\",\"http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-ClientSession.html#v:Unspecified4\"]"
        },
        "index": {
          "hierarchy": "Network SMTP Client",
          "module": "Network.SMTP.Client",
          "name": "Unspecified4",
          "package": "SMTPClient",
          "partial": "Unspecified",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Client.html#v:Unspecified4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.SMTP.Client\",\"Network.SMTP.ClientSession\"]",
          "name": "Unused0",
          "package": "SMTPClient",
          "signature": "Unused0",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Client.html#v:Unused0\",\"http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-ClientSession.html#v:Unused0\"]"
        },
        "index": {
          "hierarchy": "Network SMTP Client",
          "module": "Network.SMTP.Client",
          "name": "Unused0",
          "package": "SMTPClient",
          "partial": "Unused",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Client.html#v:Unused0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.SMTP.Client\",\"Network.SMTP.ClientSession\",\"Network.SMTP.Simple\"]",
          "name": "nameAddr_addr",
          "package": "SMTPClient",
          "signature": "String",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Client.html#v:nameAddr_addr\",\"http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-ClientSession.html#v:nameAddr_addr\",\"http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Simple.html#v:nameAddr_addr\"]"
        },
        "index": {
          "hierarchy": "Network SMTP Client",
          "module": "Network.SMTP.Client",
          "name": "nameAddr_addr",
          "package": "SMTPClient",
          "partial": "Addr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Client.html#v:nameAddr_addr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.SMTP.Client\",\"Network.SMTP.ClientSession\",\"Network.SMTP.Simple\"]",
          "name": "nameAddr_name",
          "package": "SMTPClient",
          "signature": "Maybe String",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Client.html#v:nameAddr_name\",\"http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-ClientSession.html#v:nameAddr_name\",\"http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Simple.html#v:nameAddr_name\"]"
        },
        "index": {
          "hierarchy": "Network SMTP Client",
          "module": "Network.SMTP.Client",
          "name": "nameAddr_name",
          "package": "SMTPClient",
          "partial": "Addr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Client.html#v:nameAddr_name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA lower level function that does the I/O processing for an SMTP client session on a handle.\n Returns when the session has completed, with the handle still open.\n\u003c/p\u003e",
          "module": "Network.SMTP.Client",
          "name": "processSMTP",
          "package": "SMTPClient",
          "signature": "(String -\u003e IO ())-\u003e Maybe (IORef [Maybe SmtpReply])-\u003e Handle-\u003e SMTPState-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "lower level function that does the processing for an SMTP client session on handle Returns when the session has completed with the handle still open",
          "hierarchy": "Network SMTP Client",
          "module": "Network.SMTP.Client",
          "name": "processSMTP",
          "normalized": "(String-\u003eIO())-\u003eMaybe(IORef[Maybe SmtpReply])-\u003eHandle-\u003eSMTPState-\u003eIO()",
          "package": "SMTPClient",
          "partial": "SMTP",
          "signature": "(String-\u003eIO())-\u003eMaybe(IORef[Maybe SmtpReply])-\u003eHandle-\u003eSMTPState-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Client.html#v:processSMTP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSend a list of email messages to an SMTP server. Throws SMTPException on\n failure at the communication protocol level, and it can also throw\n socket-level exceptions.\n\u003c/p\u003e\u003cp\u003eThe optional IORef is used to store a list of statuses for messages sent so\n far, where Nothing means success.  The list elements correspond to the elements\n of the input message list.  If the caller catches an exception, this list is\n likely to be shorter than the input message list:  The length of the list\n indicates how many messages were dispatched.  If no exception is caught, the\n length of the statuses will equal the length of the input messages list.\n\u003c/p\u003e\u003cp\u003eThe message body may use either \"\\n\" or \"\\r\\n\" as an end-of-line\n marker and in either case it will be sent correctly to the server.\n\u003c/p\u003e",
          "module": "Network.SMTP.Client",
          "name": "sendSMTP",
          "package": "SMTPClient",
          "signature": "Maybe (IORef [Maybe SmtpReply])-\u003e String-\u003e [AddrInfo]-\u003e [Message]-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Send list of email messages to an SMTP server Throws SMTPException on failure at the communication protocol level and it can also throw socket-level exceptions The optional IORef is used to store list of statuses for messages sent so far where Nothing means success The list elements correspond to the elements of the input message list If the caller catches an exception this list is likely to be shorter than the input message list The length of the list indicates how many messages were dispatched If no exception is caught the length of the statuses will equal the length of the input messages list The message body may use either or as an end-of-line marker and in either case it will be sent correctly to the server",
          "hierarchy": "Network SMTP Client",
          "module": "Network.SMTP.Client",
          "name": "sendSMTP",
          "normalized": "Maybe(IORef[Maybe SmtpReply])-\u003eString-\u003e[AddrInfo]-\u003e[Message]-\u003eIO()",
          "package": "SMTPClient",
          "partial": "SMTP",
          "signature": "Maybe(IORef[Maybe SmtpReply])-\u003eString-\u003e[AddrInfo]-\u003e[Message]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Client.html#v:sendSMTP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike sendSMTP but takes an additional function for logging all input and\n output for diagnostic purposes.\n\u003c/p\u003e",
          "module": "Network.SMTP.Client",
          "name": "sendSMTP'",
          "package": "SMTPClient",
          "signature": "(String -\u003e IO ())-\u003e Maybe (IORef [Maybe SmtpReply])-\u003e String-\u003e [AddrInfo]-\u003e [Message]-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Like sendSMTP but takes an additional function for logging all input and output for diagnostic purposes",
          "hierarchy": "Network SMTP Client",
          "module": "Network.SMTP.Client",
          "name": "sendSMTP'",
          "normalized": "(String-\u003eIO())-\u003eMaybe(IORef[Maybe SmtpReply])-\u003eString-\u003e[AddrInfo]-\u003e[Message]-\u003eIO()",
          "package": "SMTPClient",
          "partial": "SMTP'",
          "signature": "(String-\u003eIO())-\u003eMaybe(IORef[Maybe SmtpReply])-\u003eString-\u003e[AddrInfo]-\u003e[Message]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Client.html#v:sendSMTP-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA pure SMTP client state machine.\n\u003c/p\u003e\u003cp\u003eData structures for representing SMTP status codes and email messages are\n re-exported here from \u003cem\u003eText.ParserCombinators.Parsec.Rfc2821\u003c/em\u003e and\n \u003cem\u003eText.ParserCombinators.Parsec.Rfc2822\u003c/em\u003e in the \u003cem\u003ehsemail\u003c/em\u003e package.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.SMTP.ClientSession",
          "name": "ClientSession",
          "package": "SMTPClient",
          "source": "src/Network-SMTP-ClientSession.html",
          "type": "module"
        },
        "index": {
          "description": "pure SMTP client state machine Data structures for representing SMTP status codes and email messages are re-exported here from Text.ParserCombinators.Parsec.Rfc2821 and Text.ParserCombinators.Parsec.Rfc2822 in the hsemail package",
          "hierarchy": "Network SMTP ClientSession",
          "module": "Network.SMTP.ClientSession",
          "name": "ClientSession",
          "package": "SMTPClient",
          "partial": "Client Session",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-ClientSession.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.SMTP.ClientSession",
          "name": "Category",
          "package": "SMTPClient",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network SMTP ClientSession",
          "module": "Network.SMTP.ClientSession",
          "name": "Category",
          "package": "SMTPClient",
          "partial": "Category",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-ClientSession.html#t:Category"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis data type represents any of the header fields defined in this\n RFC. Each of the various instances contains with the return value\n of the corresponding parser.\n\u003c/p\u003e",
          "module": "Network.SMTP.ClientSession",
          "name": "Field",
          "package": "SMTPClient",
          "type": "data"
        },
        "index": {
          "description": "This data type represents any of the header fields defined in this RFC Each of the various instances contains with the return value of the corresponding parser",
          "hierarchy": "Network SMTP ClientSession",
          "module": "Network.SMTP.ClientSession",
          "name": "Field",
          "package": "SMTPClient",
          "partial": "Field",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-ClientSession.html#t:Field"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis data type repesents a parsed Internet Message as defined in\n this RFC. It consists of an arbitrary number of header lines,\n represented in the \u003ccode\u003e\u003ca\u003eField\u003c/a\u003e\u003c/code\u003e data type, and a message body, which may\n be empty.\n\u003c/p\u003e",
          "module": "Network.SMTP.ClientSession",
          "name": "GenericMessage",
          "package": "SMTPClient",
          "type": "data"
        },
        "index": {
          "description": "This data type repesents parsed Internet Message as defined in this RFC It consists of an arbitrary number of header lines represented in the Field data type and message body which may be empty",
          "hierarchy": "Network SMTP ClientSession",
          "module": "Network.SMTP.ClientSession",
          "name": "GenericMessage",
          "package": "SMTPClient",
          "partial": "Generic Message",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-ClientSession.html#t:GenericMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.SMTP.ClientSession",
          "name": "Message",
          "package": "SMTPClient",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network SMTP ClientSession",
          "module": "Network.SMTP.ClientSession",
          "name": "Message",
          "package": "SMTPClient",
          "partial": "Message",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-ClientSession.html#t:Message"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA NameAddr is composed of an optional realname a mandatory\n e-mail \u003ccode\u003e\u003ca\u003eaddress\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.SMTP.ClientSession",
          "name": "NameAddr",
          "package": "SMTPClient",
          "type": "data"
        },
        "index": {
          "description": "NameAddr is composed of an optional realname mandatory e-mail address",
          "hierarchy": "Network SMTP ClientSession",
          "module": "Network.SMTP.ClientSession",
          "name": "NameAddr",
          "package": "SMTPClient",
          "partial": "Name Addr",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-ClientSession.html#t:NameAddr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.SMTP.ClientSession",
          "name": "SMTPState",
          "package": "SMTPClient",
          "source": "src/Network-SMTP-ClientSession.html#SMTPState",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network SMTP ClientSession",
          "module": "Network.SMTP.ClientSession",
          "name": "SMTPState",
          "package": "SMTPClient",
          "partial": "SMTPState",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-ClientSession.html#t:SMTPState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.SMTP.ClientSession",
          "name": "SmtpCode",
          "package": "SMTPClient",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network SMTP ClientSession",
          "module": "Network.SMTP.ClientSession",
          "name": "SmtpCode",
          "package": "SMTPClient",
          "partial": "Smtp Code",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-ClientSession.html#t:SmtpCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn SMTP reply is a three-digit return code plus some waste of\n bandwidth called \"comments\". This is what the list of strings is\n for; one string per line in the reply. \u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e will append an\n \"\u003ccode\u003e\\r\\n\u003c/code\u003e\" end-of-line marker to each entry in that list, so that\n the resulting string is ready to be sent back to the peer. For\n example:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eshow $ Reply (Code Success MailSystem 0) [\"worked\", \"like\", \"a charm\" ]\n\u003c/code\u003e\u003c/strong\u003e\"250-worked\\r\\n250-like\\r\\n250 a charm\\r\\n\"\n\u003c/pre\u003e\u003cp\u003eIf the message is an empty list \u003ccode\u003e[]\u003c/code\u003e, a default text will be constructed:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eshow $ Reply (Code Success MailSystem 0) []\n\u003c/code\u003e\u003c/strong\u003e\"250 Success in category MailSystem\\r\\n\"\n\u003c/pre\u003e",
          "module": "Network.SMTP.ClientSession",
          "name": "SmtpReply",
          "package": "SMTPClient",
          "type": "data"
        },
        "index": {
          "description": "An SMTP reply is three-digit return code plus some waste of bandwidth called comments This is what the list of strings is for one string per line in the reply show will append an end-of-line marker to each entry in that list so that the resulting string is ready to be sent back to the peer For example show Reply Code Success MailSystem worked like charm worked n250-like n250 charm If the message is an empty list default text will be constructed show Reply Code Success MailSystem Success in category MailSystem",
          "hierarchy": "Network SMTP ClientSession",
          "module": "Network.SMTP.ClientSession",
          "name": "SmtpReply",
          "package": "SMTPClient",
          "partial": "Smtp Reply",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-ClientSession.html#t:SmtpReply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.SMTP.ClientSession",
          "name": "SuccessCode",
          "package": "SMTPClient",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network SMTP ClientSession",
          "module": "Network.SMTP.ClientSession",
          "name": "SuccessCode",
          "package": "SMTPClient",
          "partial": "Success Code",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-ClientSession.html#t:SuccessCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.SMTP.ClientSession",
          "name": "SMTPState",
          "package": "SMTPClient",
          "signature": "SMTPState",
          "source": "src/Network-SMTP-ClientSession.html#SMTPState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network SMTP ClientSession",
          "module": "Network.SMTP.ClientSession",
          "name": "SMTPState",
          "package": "SMTPClient",
          "partial": "SMTPState",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-ClientSession.html#v:SMTPState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a pure state machine for an SMTP client session.  Caller must\n handle I/O.  The message body may use either \"\\n\" or \"\\r\\n\" as an\n end-of-line marker.\n\u003c/p\u003e",
          "module": "Network.SMTP.ClientSession",
          "name": "smtpClientSession",
          "package": "SMTPClient",
          "signature": "String-\u003e [Message]-\u003e SMTPState",
          "type": "function"
        },
        "index": {
          "description": "Construct pure state machine for an SMTP client session Caller must handle The message body may use either or as an end-of-line marker",
          "hierarchy": "Network SMTP ClientSession",
          "module": "Network.SMTP.ClientSession",
          "name": "smtpClientSession",
          "normalized": "String-\u003e[Message]-\u003eSMTPState",
          "package": "SMTPClient",
          "partial": "Client Session",
          "signature": "String-\u003e[Message]-\u003eSMTPState",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-ClientSession.html#v:smtpClientSession"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStep 3. Check if this is Just err, which indicates that a protocol error\n has occurred, and that the caller must terminate the session.\n\u003c/p\u003e",
          "module": "Network.SMTP.ClientSession",
          "name": "smtpFailure",
          "package": "SMTPClient",
          "signature": "Maybe String",
          "source": "src/Network-SMTP-ClientSession.html#SMTPState",
          "type": "function"
        },
        "index": {
          "description": "Step Check if this is Just err which indicates that protocol error has occurred and that the caller must terminate the session",
          "hierarchy": "Network SMTP ClientSession",
          "module": "Network.SMTP.ClientSession",
          "name": "smtpFailure",
          "package": "SMTPClient",
          "partial": "Failure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-ClientSession.html#v:smtpFailure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStep 1. Caller must send any lines queued up in this list to the SMTP\n server.  They do not have end-of-line characters, so you must add\n \"\\r\\n\" on the end (both characters are required by RFC2821 - do not\n just send \"\\n\").\n\u003c/p\u003e",
          "module": "Network.SMTP.ClientSession",
          "name": "smtpOutQueue",
          "package": "SMTPClient",
          "signature": "[String]",
          "source": "src/Network-SMTP-ClientSession.html#SMTPState",
          "type": "function"
        },
        "index": {
          "description": "Step Caller must send any lines queued up in this list to the SMTP server They do not have end-of-line characters so you must add on the end both characters are required by RFC2821 do not just send",
          "hierarchy": "Network SMTP ClientSession",
          "module": "Network.SMTP.ClientSession",
          "name": "smtpOutQueue",
          "normalized": "[String]",
          "package": "SMTPClient",
          "partial": "Out Queue",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-ClientSession.html#v:smtpOutQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStep 4. The caller should wait for a line from the SMTP server,\n strip the \"\\r\\n\" end-of-line characters, and pass the stripped\n line to this function for processing.  Go to step 1.\n\u003c/p\u003e",
          "module": "Network.SMTP.ClientSession",
          "name": "smtpReceive",
          "package": "SMTPClient",
          "signature": "String -\u003e SMTPState -\u003e SMTPState",
          "source": "src/Network-SMTP-ClientSession.html#SMTPState",
          "type": "function"
        },
        "index": {
          "description": "Step The caller should wait for line from the SMTP server strip the end-of-line characters and pass the stripped line to this function for processing Go to step",
          "hierarchy": "Network SMTP ClientSession",
          "module": "Network.SMTP.ClientSession",
          "name": "smtpReceive",
          "normalized": "String-\u003eSMTPState-\u003eSMTPState",
          "package": "SMTPClient",
          "partial": "Receive",
          "signature": "String-\u003eSMTPState-\u003eSMTPState",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-ClientSession.html#v:smtpReceive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA list containing a failure status for each message that has been sent so far,\n where each element corresponds to one in the list of messages.\n If the SMTP session does not complete successfully, then this list is\n likely to be shorter than the input messages list.  When smtpSuccess is\n true, this list is guaranteed to be the same length as the list of input\n messages.\n \u003cem\u003eNothing\u003c/em\u003e means success, and \u003cem\u003eJust x\u003c/em\u003e is a failure status returned by\n the SMTP server.\n\u003c/p\u003e",
          "module": "Network.SMTP.ClientSession",
          "name": "smtpStatuses",
          "package": "SMTPClient",
          "signature": "[Maybe SmtpReply]",
          "source": "src/Network-SMTP-ClientSession.html#SMTPState",
          "type": "function"
        },
        "index": {
          "description": "list containing failure status for each message that has been sent so far where each element corresponds to one in the list of messages If the SMTP session does not complete successfully then this list is likely to be shorter than the input messages list When smtpSuccess is true this list is guaranteed to be the same length as the list of input messages Nothing means success and Just is failure status returned by the SMTP server",
          "hierarchy": "Network SMTP ClientSession",
          "module": "Network.SMTP.ClientSession",
          "name": "smtpStatuses",
          "normalized": "[Maybe SmtpReply]",
          "package": "SMTPClient",
          "partial": "Statuses",
          "signature": "[Maybe SmtpReply]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-ClientSession.html#v:smtpStatuses"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStep 2. Check if this is True, which indicates that the SMTP session\n has completed successfully and there is no more work to do.\n\u003c/p\u003e",
          "module": "Network.SMTP.ClientSession",
          "name": "smtpSuccess",
          "package": "SMTPClient",
          "signature": "Bool",
          "source": "src/Network-SMTP-ClientSession.html#SMTPState",
          "type": "function"
        },
        "index": {
          "description": "Step Check if this is True which indicates that the SMTP session has completed successfully and there is no more work to do",
          "hierarchy": "Network SMTP ClientSession",
          "module": "Network.SMTP.ClientSession",
          "name": "smtpSuccess",
          "package": "SMTPClient",
          "partial": "Success",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-ClientSession.html#v:smtpSuccess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMail is a simple library with which you can add email functionality to your\n application. It assumes you have access to a smarthost which can relay all\n your mail.\n\u003c/p\u003e\u003cp\u003eAs an example:\n\u003c/p\u003e\u003cpre\u003e import Network.SMTP.Simple\n import System.IO\n\n main :: IO ()\n main = do\n     sendSimpleMessages (hPutStrLn stderr) \"10.2.23.11\" \"example.com\" [message]\n     where message = SimpleMessage\n                         [NameAddr (Just \"John Doe\") \"johnd@example.com\"]\n                         [NameAddr (Just \"Team\") \"team@exmaple.com\"]\n                         \"My test email using Network.SMTP.Simple\"\n                         \"Hi, this is a test email which uses SMTPClient.\"\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Network.SMTP.Simple",
          "name": "Simple",
          "package": "SMTPClient",
          "source": "src/Network-SMTP-Simple.html",
          "type": "module"
        },
        "index": {
          "description": "Mail is simple library with which you can add email functionality to your application It assumes you have access to smarthost which can relay all your mail As an example import Network.SMTP.Simple import System.IO main IO main do sendSimpleMessages hPutStrLn stderr example.com message where message SimpleMessage NameAddr Just John Doe johnd@example.com NameAddr Just Team team@exmaple.com My test email using Network.SMTP.Simple Hi this is test email which uses SMTPClient",
          "hierarchy": "Network SMTP Simple",
          "module": "Network.SMTP.Simple",
          "name": "Simple",
          "package": "SMTPClient",
          "partial": "Simple",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Simple.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA NameAddr is composed of an optional realname a mandatory\n e-mail \u003ccode\u003e\u003ca\u003eaddress\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.SMTP.Simple",
          "name": "NameAddr",
          "package": "SMTPClient",
          "type": "data"
        },
        "index": {
          "description": "NameAddr is composed of an optional realname mandatory e-mail address",
          "hierarchy": "Network SMTP Simple",
          "module": "Network.SMTP.Simple",
          "name": "NameAddr",
          "package": "SMTPClient",
          "partial": "Name Addr",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Simple.html#t:NameAddr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.SMTP.Simple",
          "name": "SimpleMessage",
          "package": "SMTPClient",
          "source": "src/Network-SMTP-Simple.html#SimpleMessage",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network SMTP Simple",
          "module": "Network.SMTP.Simple",
          "name": "SimpleMessage",
          "package": "SMTPClient",
          "partial": "Simple Message",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Simple.html#t:SimpleMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.SMTP.Simple",
          "name": "SimpleMessage",
          "package": "SMTPClient",
          "signature": "SimpleMessage",
          "source": "src/Network-SMTP-Simple.html#SimpleMessage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network SMTP Simple",
          "module": "Network.SMTP.Simple",
          "name": "SimpleMessage",
          "package": "SMTPClient",
          "partial": "Simple Message",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Simple.html#v:SimpleMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe body\n\u003c/p\u003e",
          "module": "Network.SMTP.Simple",
          "name": "body",
          "package": "SMTPClient",
          "signature": "String",
          "source": "src/Network-SMTP-Simple.html#SimpleMessage",
          "type": "function"
        },
        "index": {
          "description": "The body",
          "hierarchy": "Network SMTP Simple",
          "module": "Network.SMTP.Simple",
          "name": "body",
          "package": "SMTPClient",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Simple.html#v:body"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe sender(s)\n\u003c/p\u003e",
          "module": "Network.SMTP.Simple",
          "name": "from",
          "package": "SMTPClient",
          "signature": "[NameAddr]",
          "source": "src/Network-SMTP-Simple.html#SimpleMessage",
          "type": "function"
        },
        "index": {
          "description": "The sender",
          "hierarchy": "Network SMTP Simple",
          "module": "Network.SMTP.Simple",
          "name": "from",
          "normalized": "[NameAddr]",
          "package": "SMTPClient",
          "signature": "[NameAddr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Simple.html#v:from"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse this if you need more control than sendSimpleMessages gives you.\n\u003c/p\u003e",
          "module": "Network.SMTP.Simple",
          "name": "sendRawMessages",
          "package": "SMTPClient",
          "signature": "(String -\u003e IO ())-\u003e [AddrInfo]-\u003e String-\u003e [Message]-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Use this if you need more control than sendSimpleMessages gives you",
          "hierarchy": "Network SMTP Simple",
          "module": "Network.SMTP.Simple",
          "name": "sendRawMessages",
          "normalized": "(String-\u003eIO())-\u003e[AddrInfo]-\u003eString-\u003e[Message]-\u003eIO()",
          "package": "SMTPClient",
          "partial": "Raw Messages",
          "signature": "(String-\u003eIO())-\u003e[AddrInfo]-\u003eString-\u003e[Message]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Simple.html#v:sendRawMessages"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimplest way to send mail.  Takes the SMTP hostname, the HELO domain, and a list of SimpleMessage.\n\u003c/p\u003e",
          "module": "Network.SMTP.Simple",
          "name": "sendSimpleMessages",
          "package": "SMTPClient",
          "signature": "(String -\u003e IO ())-\u003e String-\u003e String-\u003e [SimpleMessage]-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Simplest way to send mail Takes the SMTP hostname the HELO domain and list of SimpleMessage",
          "hierarchy": "Network SMTP Simple",
          "module": "Network.SMTP.Simple",
          "name": "sendSimpleMessages",
          "normalized": "(String-\u003eIO())-\u003eString-\u003eString-\u003e[SimpleMessage]-\u003eIO()",
          "package": "SMTPClient",
          "partial": "Simple Messages",
          "signature": "(String-\u003eIO())-\u003eString-\u003eString-\u003e[SimpleMessage]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Simple.html#v:sendSimpleMessages"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe subject line\n\u003c/p\u003e",
          "module": "Network.SMTP.Simple",
          "name": "subject",
          "package": "SMTPClient",
          "signature": "String",
          "source": "src/Network-SMTP-Simple.html#SimpleMessage",
          "type": "function"
        },
        "index": {
          "description": "The subject line",
          "hierarchy": "Network SMTP Simple",
          "module": "Network.SMTP.Simple",
          "name": "subject",
          "package": "SMTPClient",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Simple.html#v:subject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe recipient(s)\n\u003c/p\u003e",
          "module": "Network.SMTP.Simple",
          "name": "to",
          "package": "SMTPClient",
          "signature": "[NameAddr]",
          "source": "src/Network-SMTP-Simple.html#SimpleMessage",
          "type": "function"
        },
        "index": {
          "description": "The recipient",
          "hierarchy": "Network SMTP Simple",
          "module": "Network.SMTP.Simple",
          "name": "to",
          "normalized": "[NameAddr]",
          "package": "SMTPClient",
          "signature": "[NameAddr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SMTPClient/docs/Network-SMTP-Simple.html#v:to"
      }
    }
  ]
]