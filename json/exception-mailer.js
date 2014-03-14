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
        "word": "exception-mailer"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eModule to catch uncaught exceptions and send a notification email\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.ExceptionMailer",
          "name": "ExceptionMailer",
          "package": "exception-mailer",
          "source": "src/System-ExceptionMailer.html",
          "type": "module"
        },
        "index": {
          "description": "Module to catch uncaught exceptions and send notification email",
          "hierarchy": "System ExceptionMailer",
          "module": "System.ExceptionMailer",
          "name": "ExceptionMailer",
          "package": "exception-mailer",
          "partial": "Exception Mailer",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/exception-mailer/docs/System-ExceptionMailer.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.ExceptionMailer",
          "name": "Address",
          "package": "exception-mailer",
          "type": "data"
        },
        "index": {
          "hierarchy": "System ExceptionMailer",
          "module": "System.ExceptionMailer",
          "name": "Address",
          "package": "exception-mailer",
          "partial": "Address",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/exception-mailer/docs/System-ExceptionMailer.html#t:Address"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eString tag used for logging to \u003ca\u003eSystem.Log.Logger\u003c/a\u003e\n\u003c/p\u003e",
          "module": "System.ExceptionMailer",
          "name": "exceptionMailerTag",
          "package": "exception-mailer",
          "signature": "String",
          "source": "src/System-ExceptionMailer.html#exceptionMailerTag",
          "type": "function"
        },
        "index": {
          "description": "String tag used for logging to System.Log.Logger",
          "hierarchy": "System ExceptionMailer",
          "module": "System.ExceptionMailer",
          "name": "exceptionMailerTag",
          "package": "exception-mailer",
          "partial": "Mailer Tag",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/exception-mailer/docs/System-ExceptionMailer.html#v:exceptionMailerTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSend an error email.  Exported so that it may be re-used from your own exception handling routines\n\u003c/p\u003e",
          "module": "System.ExceptionMailer",
          "name": "mailError",
          "package": "exception-mailer",
          "signature": "Address -\u003e Address -\u003e Maybe String -\u003e String -\u003e IO ()",
          "source": "src/System-ExceptionMailer.html#mailError",
          "type": "function"
        },
        "index": {
          "description": "Send an error email Exported so that it may be re-used from your own exception handling routines",
          "hierarchy": "System ExceptionMailer",
          "module": "System.ExceptionMailer",
          "name": "mailError",
          "normalized": "Address-\u003eAddress-\u003eMaybe String-\u003eString-\u003eIO()",
          "package": "exception-mailer",
          "partial": "Error",
          "signature": "Address-\u003eAddress-\u003eMaybe String-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/exception-mailer/docs/System-ExceptionMailer.html#v:mailError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHelper function to convert a name and email address into a proper \u003ccode\u003e\u003ca\u003eAddress\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "System.ExceptionMailer",
          "name": "mkAddress",
          "package": "exception-mailer",
          "signature": "String -\u003e String -\u003e Address",
          "source": "src/System-ExceptionMailer.html#mkAddress",
          "type": "function"
        },
        "index": {
          "description": "Helper function to convert name and email address into proper Address",
          "hierarchy": "System ExceptionMailer",
          "module": "System.ExceptionMailer",
          "name": "mkAddress",
          "normalized": "String-\u003eString-\u003eAddress",
          "package": "exception-mailer",
          "partial": "Address",
          "signature": "String-\u003eString-\u003eAddress",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/exception-mailer/docs/System-ExceptionMailer.html#v:mkAddress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSetup the global exception notifier.  This will catch any otherwise uncaught exceptions and send an email to the\n given address.\n\u003c/p\u003e\u003cp\u003eFor example,\n\u003c/p\u003e\u003cpre\u003e setupExceptionMailer (mkAddress \"My Program\" \"noreply@example.com\")\n                        (mkAddress \"Sysadmin\" \"sysadmin@example.com\")\n\u003c/pre\u003e",
          "module": "System.ExceptionMailer",
          "name": "setupExceptionMailer",
          "package": "exception-mailer",
          "signature": "Address-\u003e Address-\u003e Maybe String-\u003e String-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Setup the global exception notifier This will catch any otherwise uncaught exceptions and send an email to the given address For example setupExceptionMailer mkAddress My Program noreply@example.com mkAddress Sysadmin sysadmin@example.com",
          "hierarchy": "System ExceptionMailer",
          "module": "System.ExceptionMailer",
          "name": "setupExceptionMailer",
          "normalized": "Address-\u003eAddress-\u003eMaybe String-\u003eString-\u003eIO()",
          "package": "exception-mailer",
          "partial": "Exception Mailer",
          "signature": "Address-\u003eAddress-\u003eMaybe String-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/exception-mailer/docs/System-ExceptionMailer.html#v:setupExceptionMailer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvenience version of \u003ccode\u003e\u003ca\u003esetupExceptionMailer\u003c/a\u003e\u003c/code\u003e that just accepts the email addresses\n\u003c/p\u003e",
          "module": "System.ExceptionMailer",
          "name": "setupExceptionMailer'",
          "package": "exception-mailer",
          "signature": "String-\u003e String-\u003e Maybe String-\u003e String-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Convenience version of setupExceptionMailer that just accepts the email addresses",
          "hierarchy": "System ExceptionMailer",
          "module": "System.ExceptionMailer",
          "name": "setupExceptionMailer'",
          "normalized": "String-\u003eString-\u003eMaybe String-\u003eString-\u003eIO()",
          "package": "exception-mailer",
          "partial": "Exception Mailer'",
          "signature": "String-\u003eString-\u003eMaybe String-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/exception-mailer/docs/System-ExceptionMailer.html#v:setupExceptionMailer-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSetup the global exception notifier.  Like \u003ccode\u003e\u003ca\u003esetupExceptionMailer\u003c/a\u003e\u003c/code\u003e but allows a\n custom action after the email is send\n\u003c/p\u003e",
          "module": "System.ExceptionMailer",
          "name": "setupExceptionMailer_adv",
          "package": "exception-mailer",
          "signature": "Address-\u003e Address-\u003e Maybe String-\u003e String-\u003e (SomeException -\u003e IO ())-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Setup the global exception notifier Like setupExceptionMailer but allows custom action after the email is send",
          "hierarchy": "System ExceptionMailer",
          "module": "System.ExceptionMailer",
          "name": "setupExceptionMailer_adv",
          "normalized": "Address-\u003eAddress-\u003eMaybe String-\u003eString-\u003e(SomeException-\u003eIO())-\u003eIO()",
          "package": "exception-mailer",
          "partial": "Exception Mailer",
          "signature": "Address-\u003eAddress-\u003eMaybe String-\u003eString-\u003e(SomeException-\u003eIO())-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/exception-mailer/docs/System-ExceptionMailer.html#v:setupExceptionMailer_adv"
      }
    }
  ]
]