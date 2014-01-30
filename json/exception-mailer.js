[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/exception-mailer/docs/System-ExceptionMailer.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eModule to catch uncaught exceptions and send a notification email\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.ExceptionMailer",
        "fct-package": "exception-mailer",
        "fct-signature": "module",
        "fct-source": "src/System-ExceptionMailer.html",
        "fct-type": "module",
        "title": "ExceptionMailer"
      },
      "index": {
        "description": "Module to catch uncaught exceptions and send notification email",
        "hierarchy": "System ExceptionMailer",
        "module": "System.ExceptionMailer",
        "name": "ExceptionMailer",
        "normalized": "",
        "package": "exception-mailer",
        "partial": "Exception Mailer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/exception-mailer/docs/System-ExceptionMailer.html#t:Address",
      "description": {
        "fct-module": "System.ExceptionMailer",
        "fct-package": "exception-mailer",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Address"
      },
      "index": {
        "description": "",
        "hierarchy": "System ExceptionMailer",
        "module": "System.ExceptionMailer",
        "name": "Address",
        "normalized": "",
        "package": "exception-mailer",
        "partial": "Address",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/exception-mailer/docs/System-ExceptionMailer.html#v:exceptionMailerTag",
      "description": {
        "fct-descr": "\u003cp\u003eString tag used for logging to \u003ca\u003eSystem.Log.Logger\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "System.ExceptionMailer",
        "fct-package": "exception-mailer",
        "fct-signature": "String",
        "fct-source": "src/System-ExceptionMailer.html#exceptionMailerTag",
        "fct-type": "function",
        "title": "exceptionMailerTag"
      },
      "index": {
        "description": "String tag used for logging to System.Log.Logger",
        "hierarchy": "System ExceptionMailer",
        "module": "System.ExceptionMailer",
        "name": "exceptionMailerTag",
        "normalized": "",
        "package": "exception-mailer",
        "partial": "Mailer Tag",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/exception-mailer/docs/System-ExceptionMailer.html#v:mailError",
      "description": {
        "fct-descr": "\u003cp\u003eSend an error email.  Exported so that it may be re-used from your own exception handling routines\n\u003c/p\u003e",
        "fct-module": "System.ExceptionMailer",
        "fct-package": "exception-mailer",
        "fct-signature": "Address -\u003e Address -\u003e Maybe String -\u003e String -\u003e IO ()",
        "fct-source": "src/System-ExceptionMailer.html#mailError",
        "fct-type": "function",
        "title": "mailError"
      },
      "index": {
        "description": "Send an error email Exported so that it may be re-used from your own exception handling routines",
        "hierarchy": "System ExceptionMailer",
        "module": "System.ExceptionMailer",
        "name": "mailError",
        "normalized": "Address-\u003eAddress-\u003eMaybe String-\u003eString-\u003eIO()",
        "package": "exception-mailer",
        "partial": "Error",
        "signature": "Address-\u003eAddress-\u003eMaybe String-\u003eString-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/exception-mailer/docs/System-ExceptionMailer.html#v:mkAddress",
      "description": {
        "fct-descr": "\u003cp\u003eHelper function to convert a name and email address into a proper \u003ccode\u003e\u003ca\u003eAddress\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "System.ExceptionMailer",
        "fct-package": "exception-mailer",
        "fct-signature": "String -\u003e String -\u003e Address",
        "fct-source": "src/System-ExceptionMailer.html#mkAddress",
        "fct-type": "function",
        "title": "mkAddress"
      },
      "index": {
        "description": "Helper function to convert name and email address into proper Address",
        "hierarchy": "System ExceptionMailer",
        "module": "System.ExceptionMailer",
        "name": "mkAddress",
        "normalized": "String-\u003eString-\u003eAddress",
        "package": "exception-mailer",
        "partial": "Address",
        "signature": "String-\u003eString-\u003eAddress"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/exception-mailer/docs/System-ExceptionMailer.html#v:setupExceptionMailer",
      "description": {
        "fct-descr": "\u003cp\u003eSetup the global exception notifier.  This will catch any otherwise uncaught exceptions and send an email to the\n given address.\n\u003c/p\u003e\u003cp\u003eFor example,\n\u003c/p\u003e\u003cpre\u003e setupExceptionMailer (mkAddress \"My Program\" \"noreply@example.com\")\n                        (mkAddress \"Sysadmin\" \"sysadmin@example.com\")\n\u003c/pre\u003e",
        "fct-module": "System.ExceptionMailer",
        "fct-package": "exception-mailer",
        "fct-signature": "Address-\u003e Address-\u003e Maybe String-\u003e String-\u003e IO ()",
        "fct-type": "function",
        "title": "setupExceptionMailer"
      },
      "index": {
        "description": "Setup the global exception notifier This will catch any otherwise uncaught exceptions and send an email to the given address For example setupExceptionMailer mkAddress My Program noreply@example.com mkAddress Sysadmin sysadmin@example.com",
        "hierarchy": "System ExceptionMailer",
        "module": "System.ExceptionMailer",
        "name": "setupExceptionMailer",
        "normalized": "Address-\u003eAddress-\u003eMaybe String-\u003eString-\u003eIO()",
        "package": "exception-mailer",
        "partial": "Exception Mailer",
        "signature": "Address-\u003eAddress-\u003eMaybe String-\u003eString-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/exception-mailer/docs/System-ExceptionMailer.html#v:setupExceptionMailer-39-",
      "description": {
        "fct-descr": "\u003cp\u003eConvenience version of \u003ccode\u003e\u003ca\u003esetupExceptionMailer\u003c/a\u003e\u003c/code\u003e that just accepts the email addresses\n\u003c/p\u003e",
        "fct-module": "System.ExceptionMailer",
        "fct-package": "exception-mailer",
        "fct-signature": "String-\u003e String-\u003e Maybe String-\u003e String-\u003e IO ()",
        "fct-type": "function",
        "title": "setupExceptionMailer'"
      },
      "index": {
        "description": "Convenience version of setupExceptionMailer that just accepts the email addresses",
        "hierarchy": "System ExceptionMailer",
        "module": "System.ExceptionMailer",
        "name": "setupExceptionMailer'",
        "normalized": "String-\u003eString-\u003eMaybe String-\u003eString-\u003eIO()",
        "package": "exception-mailer",
        "partial": "Exception Mailer'",
        "signature": "String-\u003eString-\u003eMaybe String-\u003eString-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/exception-mailer/docs/System-ExceptionMailer.html#v:setupExceptionMailer_adv",
      "description": {
        "fct-descr": "\u003cp\u003eSetup the global exception notifier.  Like \u003ccode\u003e\u003ca\u003esetupExceptionMailer\u003c/a\u003e\u003c/code\u003e but allows a\n custom action after the email is send\n\u003c/p\u003e",
        "fct-module": "System.ExceptionMailer",
        "fct-package": "exception-mailer",
        "fct-signature": "Address-\u003e Address-\u003e Maybe String-\u003e String-\u003e (SomeException -\u003e IO ())-\u003e IO ()",
        "fct-type": "function",
        "title": "setupExceptionMailer_adv"
      },
      "index": {
        "description": "Setup the global exception notifier Like setupExceptionMailer but allows custom action after the email is send",
        "hierarchy": "System ExceptionMailer",
        "module": "System.ExceptionMailer",
        "name": "setupExceptionMailer_adv",
        "normalized": "Address-\u003eAddress-\u003eMaybe String-\u003eString-\u003e(SomeException-\u003eIO())-\u003eIO()",
        "package": "exception-mailer",
        "partial": "Exception Mailer",
        "signature": "Address-\u003eAddress-\u003eMaybe String-\u003eString-\u003e(SomeException-\u003eIO())-\u003eIO()"
      }
    }
  }
]