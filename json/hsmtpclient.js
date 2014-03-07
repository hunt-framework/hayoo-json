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
        "word": "hsmtpclient"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA very simple SMTP Client library for sending emails.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.SMTP.Client.HSmtpClient",
          "name": "HSmtpClient",
          "package": "hsmtpclient",
          "source": "src/Network-SMTP-Client-HSmtpClient.html",
          "type": "module"
        },
        "index": {
          "description": "very simple SMTP Client library for sending emails",
          "hierarchy": "Network SMTP Client HSmtpClient",
          "module": "Network.SMTP.Client.HSmtpClient",
          "name": "HSmtpClient",
          "package": "hsmtpclient",
          "partial": "HSmtp Client",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hsmtpclient/docs/Network-SMTP-Client-HSmtpClient.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eif True then display debug info\n\u003c/p\u003e\u003cp\u003eSMTP authorization method\n\u003c/p\u003e",
          "module": "Network.SMTP.Client.HSmtpClient",
          "name": "SMTPAuthMethod",
          "package": "hsmtpclient",
          "source": "src/Network-SMTP-Client-HSmtpClient.html#SMTPAuthMethod",
          "type": "data"
        },
        "index": {
          "description": "if True then display debug info SMTP authorization method",
          "hierarchy": "Network SMTP Client HSmtpClient",
          "module": "Network.SMTP.Client.HSmtpClient",
          "name": "SMTPAuthMethod",
          "package": "hsmtpclient",
          "partial": "SMTPAuth Method",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hsmtpclient/docs/Network-SMTP-Client-HSmtpClient.html#t:SMTPAuthMethod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.SMTP.Client.HSmtpClient",
          "name": "LoginSMTPAuth",
          "package": "hsmtpclient",
          "signature": "LoginSMTPAuth",
          "source": "src/Network-SMTP-Client-HSmtpClient.html#SMTPAuthMethod",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network SMTP Client HSmtpClient",
          "module": "Network.SMTP.Client.HSmtpClient",
          "name": "LoginSMTPAuth",
          "package": "hsmtpclient",
          "partial": "Login SMTPAuth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsmtpclient/docs/Network-SMTP-Client-HSmtpClient.html#v:LoginSMTPAuth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.SMTP.Client.HSmtpClient",
          "name": "NoSMTPAuth",
          "package": "hsmtpclient",
          "signature": "NoSMTPAuth",
          "source": "src/Network-SMTP-Client-HSmtpClient.html#SMTPAuthMethod",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network SMTP Client HSmtpClient",
          "module": "Network.SMTP.Client.HSmtpClient",
          "name": "NoSMTPAuth",
          "package": "hsmtpclient",
          "partial": "No SMTPAuth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsmtpclient/docs/Network-SMTP-Client-HSmtpClient.html#v:NoSMTPAuth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.SMTP.Client.HSmtpClient",
          "name": "PlainSMTPAuth",
          "package": "hsmtpclient",
          "signature": "PlainSMTPAuth",
          "source": "src/Network-SMTP-Client-HSmtpClient.html#SMTPAuthMethod",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network SMTP Client HSmtpClient",
          "module": "Network.SMTP.Client.HSmtpClient",
          "name": "PlainSMTPAuth",
          "package": "hsmtpclient",
          "partial": "Plain SMTPAuth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsmtpclient/docs/Network-SMTP-Client-HSmtpClient.html#v:PlainSMTPAuth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSend an email using a SMTP email server.\n\u003c/p\u003e\u003cpre\u003e example = do\n  r \u003c- sendStringAsEmail \n               \"pippo  \"                  -- user\n               \"pluto\"                    -- password\n               PlainSMTPAuth              -- Auth method\n               \"pippo@qwerty.org\"         -- from\n               \"paperina@qwerty.org\"      -- to\n               \"test\"                     -- subject\n               \"\"                         -- cc\n               \"\"                         -- bcc\n               \"mail.qwerty.org\"          -- stmp_server\n               25                         -- default SMTP port\n               \"localhost\"                -- user domain \n               \"This is a test\"           -- content\n               [\"paperina@qwerty.org\",    -- rcpt_lines\n                \"minni@qwery.it.it\"]      \n\n  case r of \n    True -\u003e putStrLn \"Success\"\n    False -\u003e putStrLn \"Fail\"\n\u003c/pre\u003e",
          "module": "Network.SMTP.Client.HSmtpClient",
          "name": "sendStringAsEMail",
          "package": "hsmtpclient",
          "signature": "String-\u003e String-\u003e SMTPAuthMethod-\u003e String-\u003e String-\u003e String-\u003e String-\u003e String-\u003e String-\u003e PortNumber-\u003e String-\u003e String-\u003e [String]-\u003e IO Bool",
          "type": "function"
        },
        "index": {
          "description": "Send an email using SMTP email server example do sendStringAsEmail pippo user pluto password PlainSMTPAuth Auth method pippo@qwerty.org from paperina@qwerty.org to test subject cc bcc mail.qwerty.org stmp server default SMTP port localhost user domain This is test content paperina@qwerty.org rcpt lines minni@qwery.it.it case of True putStrLn Success False putStrLn Fail",
          "hierarchy": "Network SMTP Client HSmtpClient",
          "module": "Network.SMTP.Client.HSmtpClient",
          "name": "sendStringAsEMail",
          "normalized": "String-\u003eString-\u003eSMTPAuthMethod-\u003eString-\u003eString-\u003eString-\u003eString-\u003eString-\u003eString-\u003ePortNumber-\u003eString-\u003eString-\u003e[String]-\u003eIO Bool",
          "package": "hsmtpclient",
          "partial": "String As EMail",
          "signature": "String-\u003eString-\u003eSMTPAuthMethod-\u003eString-\u003eString-\u003eString-\u003eString-\u003eString-\u003eString-\u003ePortNumber-\u003eString-\u003eString-\u003e[String]-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsmtpclient/docs/Network-SMTP-Client-HSmtpClient.html#v:sendStringAsEMail"
      }
    }
  ]
]