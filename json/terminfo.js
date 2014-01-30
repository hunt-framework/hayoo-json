[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Base.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides a low-level interface to the C functions of the \n terminfo library. \n\u003c/p\u003e\u003cp\u003eNOTE: Since this library is built on top of the curses interface, it is not thread-safe.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.Console.Terminfo.Base",
        "fct-package": "terminfo",
        "fct-signature": "module",
        "fct-source": "src/System-Console-Terminfo-Base.html",
        "fct-type": "module",
        "title": "Base"
      },
      "index": {
        "description": "This module provides low-level interface to the functions of the terminfo library NOTE Since this library is built on top of the curses interface it is not thread-safe",
        "hierarchy": "System Console Terminfo Base",
        "module": "System.Console.Terminfo.Base",
        "name": "Base",
        "normalized": "",
        "package": "terminfo",
        "partial": "Base",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Base.html#t:Capability",
      "description": {
        "fct-descr": "\u003cp\u003eA feature or operation which a \u003ccode\u003e\u003ca\u003eTerminal\u003c/a\u003e\u003c/code\u003e may define.\n\u003c/p\u003e",
        "fct-module": "System.Console.Terminfo.Base",
        "fct-package": "terminfo",
        "fct-signature": "data",
        "fct-source": "src/System-Console-Terminfo-Base.html#Capability",
        "fct-type": "data",
        "title": "Capability"
      },
      "index": {
        "description": "feature or operation which Terminal may define",
        "hierarchy": "System Console Terminfo Base",
        "module": "System.Console.Terminfo.Base",
        "name": "Capability",
        "normalized": "",
        "package": "terminfo",
        "partial": "Capability",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Base.html#t:LinesAffected",
      "description": {
        "fct-descr": "\u003cp\u003eA parameter to specify the number of lines affected.  Some capabilities\n (e.g., \u003ccode\u003eclear\u003c/code\u003e and \u003ccode\u003edch1\u003c/code\u003e) use\n this parameter on some terminals to compute variable-length padding.\n\u003c/p\u003e",
        "fct-module": "System.Console.Terminfo.Base",
        "fct-package": "terminfo",
        "fct-signature": "type",
        "fct-source": "src/System-Console-Terminfo-Base.html#LinesAffected",
        "fct-type": "type",
        "title": "LinesAffected"
      },
      "index": {
        "description": "parameter to specify the number of lines affected Some capabilities e.g clear and dch1 use this parameter on some terminals to compute variable-length padding",
        "hierarchy": "System Console Terminfo Base",
        "module": "System.Console.Terminfo.Base",
        "name": "LinesAffected",
        "normalized": "",
        "package": "terminfo",
        "partial": "Lines Affected",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Base.html#t:Monoid",
      "description": {
        "fct-descr": "\u003cp\u003eThe class of monoids (types with an associative binary operation that\n has an identity).  Instances should satisfy the following laws:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003emappend mempty x = x\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003emappend x mempty = x\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003emappend x (mappend y z) = mappend (mappend x y) z\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003emconcat = \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e mappend mempty\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe method names refer to the monoid of lists under concatenation,\n but there are many other instances.\n\u003c/p\u003e\u003cp\u003eMinimal complete definition: \u003ccode\u003e\u003ca\u003emempty\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSome types can be viewed as a monoid in more than one way,\n e.g. both addition and multiplication on numbers.\n In such cases we often define \u003ccode\u003enewtype\u003c/code\u003es and make those instances\n of \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e, e.g. \u003ccode\u003e\u003ca\u003eSum\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eProduct\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Console.Terminfo.Base",
        "fct-package": "terminfo",
        "fct-signature": "class",
        "fct-type": "class",
        "title": "Monoid"
      },
      "index": {
        "description": "The class of monoids types with an associative binary operation that has an identity Instances should satisfy the following laws mappend mempty mappend mempty mappend mappend mappend mappend mconcat foldr mappend mempty The method names refer to the monoid of lists under concatenation but there are many other instances Minimal complete definition mempty and mappend Some types can be viewed as monoid in more than one way e.g both addition and multiplication on numbers In such cases we often define newtype and make those instances of Monoid e.g Sum and Product",
        "hierarchy": "System Console Terminfo Base",
        "module": "System.Console.Terminfo.Base",
        "name": "Monoid",
        "normalized": "",
        "package": "terminfo",
        "partial": "Monoid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Base.html#t:OutputCap",
      "description": {
        "fct-module": "System.Console.Terminfo.Base",
        "fct-package": "terminfo",
        "fct-signature": "class",
        "fct-source": "src/System-Console-Terminfo-Base.html#OutputCap",
        "fct-type": "class",
        "title": "OutputCap"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Terminfo Base",
        "module": "System.Console.Terminfo.Base",
        "name": "OutputCap",
        "normalized": "",
        "package": "terminfo",
        "partial": "Output Cap",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Base.html#t:SetupTermError",
      "description": {
        "fct-module": "System.Console.Terminfo.Base",
        "fct-package": "terminfo",
        "fct-signature": "data",
        "fct-source": "src/System-Console-Terminfo-Base.html#SetupTermError",
        "fct-type": "data",
        "title": "SetupTermError"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Terminfo Base",
        "module": "System.Console.Terminfo.Base",
        "name": "SetupTermError",
        "normalized": "",
        "package": "terminfo",
        "partial": "Setup Term Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Base.html#t:TermOutput",
      "description": {
        "fct-descr": "\u003cp\u003eAn action which sends output to the terminal.  That output may mix plain text with control\n characters and escape sequences, along with delays (called \"padding\") required by some older\n terminals.\n\u003c/p\u003e",
        "fct-module": "System.Console.Terminfo.Base",
        "fct-package": "terminfo",
        "fct-signature": "data",
        "fct-source": "src/System-Console-Terminfo-Base.html#TermOutput",
        "fct-type": "data",
        "title": "TermOutput"
      },
      "index": {
        "description": "An action which sends output to the terminal That output may mix plain text with control characters and escape sequences along with delays called padding required by some older terminals",
        "hierarchy": "System Console Terminfo Base",
        "module": "System.Console.Terminfo.Base",
        "name": "TermOutput",
        "normalized": "",
        "package": "terminfo",
        "partial": "Term Output",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Base.html#t:TermStr",
      "description": {
        "fct-module": "System.Console.Terminfo.Base",
        "fct-package": "terminfo",
        "fct-signature": "class",
        "fct-source": "src/System-Console-Terminfo-Base.html#TermStr",
        "fct-type": "class",
        "title": "TermStr"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Terminfo Base",
        "module": "System.Console.Terminfo.Base",
        "name": "TermStr",
        "normalized": "",
        "package": "terminfo",
        "partial": "Term Str",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Base.html#t:Terminal",
      "description": {
        "fct-module": "System.Console.Terminfo.Base",
        "fct-package": "terminfo",
        "fct-signature": "data",
        "fct-source": "src/System-Console-Terminfo-Base.html#Terminal",
        "fct-type": "data",
        "title": "Terminal"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Terminfo Base",
        "module": "System.Console.Terminfo.Base",
        "name": "Terminal",
        "normalized": "",
        "package": "terminfo",
        "partial": "Terminal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Base.html#v:-60--35--62-",
      "description": {
        "fct-descr": "\u003cp\u003eAn operator version of \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Console.Terminfo.Base",
        "fct-package": "terminfo",
        "fct-signature": "m -\u003e m -\u003e m",
        "fct-source": "src/System-Console-Terminfo-Base.html#%3C%23%3E",
        "fct-type": "function",
        "title": "(\u003c#\u003e)"
      },
      "index": {
        "description": "An operator version of mappend",
        "hierarchy": "System Console Terminfo Base",
        "module": "System.Console.Terminfo.Base",
        "name": "(\u003c#\u003e) \u003c#\u003e",
        "normalized": "a-\u003ea-\u003ea",
        "package": "terminfo",
        "partial": "",
        "signature": "m-\u003em-\u003em"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Base.html#v:getCapability",
      "description": {
        "fct-module": "System.Console.Terminfo.Base",
        "fct-package": "terminfo",
        "fct-signature": "Terminal -\u003e Capability a -\u003e Maybe a",
        "fct-source": "src/System-Console-Terminfo-Base.html#getCapability",
        "fct-type": "function",
        "title": "getCapability"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Terminfo Base",
        "module": "System.Console.Terminfo.Base",
        "name": "getCapability",
        "normalized": "Terminal-\u003eCapability a-\u003eMaybe a",
        "package": "terminfo",
        "partial": "Capability",
        "signature": "Terminal-\u003eCapability a-\u003eMaybe a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Base.html#v:hRunTermOutput",
      "description": {
        "fct-descr": "\u003cp\u003eWrite the terminal output to the terminal or file managed by the given\n \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Console.Terminfo.Base",
        "fct-package": "terminfo",
        "fct-signature": "Handle -\u003e Terminal -\u003e TermOutput -\u003e IO ()",
        "fct-source": "src/System-Console-Terminfo-Base.html#hRunTermOutput",
        "fct-type": "function",
        "title": "hRunTermOutput"
      },
      "index": {
        "description": "Write the terminal output to the terminal or file managed by the given Handle",
        "hierarchy": "System Console Terminfo Base",
        "module": "System.Console.Terminfo.Base",
        "name": "hRunTermOutput",
        "normalized": "Handle-\u003eTerminal-\u003eTermOutput-\u003eIO()",
        "package": "terminfo",
        "partial": "Run Term Output",
        "signature": "Handle-\u003eTerminal-\u003eTermOutput-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Base.html#v:mappend",
      "description": {
        "fct-descr": "\u003cp\u003eAn associative operation\n\u003c/p\u003e",
        "fct-module": "System.Console.Terminfo.Base",
        "fct-package": "terminfo",
        "fct-signature": "a -\u003e a -\u003e a",
        "fct-type": "method",
        "title": "mappend"
      },
      "index": {
        "description": "An associative operation",
        "hierarchy": "System Console Terminfo Base",
        "module": "System.Console.Terminfo.Base",
        "name": "mappend",
        "normalized": "a-\u003ea-\u003ea",
        "package": "terminfo",
        "partial": "",
        "signature": "a-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Base.html#v:mconcat",
      "description": {
        "fct-descr": "\u003cp\u003eFold a list using the monoid.\n For most types, the default definition for \u003ccode\u003e\u003ca\u003emconcat\u003c/a\u003e\u003c/code\u003e will be\n used, but the function is included in the class definition so\n that an optimized version can be provided for specific types.\n\u003c/p\u003e",
        "fct-module": "System.Console.Terminfo.Base",
        "fct-package": "terminfo",
        "fct-signature": "[a] -\u003e a",
        "fct-type": "method",
        "title": "mconcat"
      },
      "index": {
        "description": "Fold list using the monoid For most types the default definition for mconcat will be used but the function is included in the class definition so that an optimized version can be provided for specific types",
        "hierarchy": "System Console Terminfo Base",
        "module": "System.Console.Terminfo.Base",
        "name": "mconcat",
        "normalized": "[a]-\u003ea",
        "package": "terminfo",
        "partial": "",
        "signature": "[a]-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Base.html#v:mempty",
      "description": {
        "fct-descr": "\u003cp\u003eIdentity of \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "System.Console.Terminfo.Base",
        "fct-package": "terminfo",
        "fct-signature": "a",
        "fct-type": "method",
        "title": "mempty"
      },
      "index": {
        "description": "Identity of mappend",
        "hierarchy": "System Console Terminfo Base",
        "module": "System.Console.Terminfo.Base",
        "name": "mempty",
        "normalized": "",
        "package": "terminfo",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Base.html#v:runTermOutput",
      "description": {
        "fct-descr": "\u003cp\u003eWrite the terminal output to the standard output device.\n\u003c/p\u003e",
        "fct-module": "System.Console.Terminfo.Base",
        "fct-package": "terminfo",
        "fct-signature": "Terminal -\u003e TermOutput -\u003e IO ()",
        "fct-source": "src/System-Console-Terminfo-Base.html#runTermOutput",
        "fct-type": "function",
        "title": "runTermOutput"
      },
      "index": {
        "description": "Write the terminal output to the standard output device",
        "hierarchy": "System Console Terminfo Base",
        "module": "System.Console.Terminfo.Base",
        "name": "runTermOutput",
        "normalized": "Terminal-\u003eTermOutput-\u003eIO()",
        "package": "terminfo",
        "partial": "Term Output",
        "signature": "Terminal-\u003eTermOutput-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Base.html#v:setupTerm",
      "description": {
        "fct-descr": "\u003cp\u003eInitialize the terminfo library to the given terminal entry.\n\u003c/p\u003e\u003cp\u003eThrows a \u003ccode\u003e\u003ca\u003eSetupTermError\u003c/a\u003e\u003c/code\u003e if the terminfo database could not be read.\n\u003c/p\u003e",
        "fct-module": "System.Console.Terminfo.Base",
        "fct-package": "terminfo",
        "fct-signature": "String -\u003e IO Terminal",
        "fct-source": "src/System-Console-Terminfo-Base.html#setupTerm",
        "fct-type": "function",
        "title": "setupTerm"
      },
      "index": {
        "description": "Initialize the terminfo library to the given terminal entry Throws SetupTermError if the terminfo database could not be read",
        "hierarchy": "System Console Terminfo Base",
        "module": "System.Console.Terminfo.Base",
        "name": "setupTerm",
        "normalized": "String-\u003eIO Terminal",
        "package": "terminfo",
        "partial": "Term",
        "signature": "String-\u003eIO Terminal"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Base.html#v:setupTermFromEnv",
      "description": {
        "fct-descr": "\u003cp\u003eInitialize the terminfo library, using the \u003ccode\u003eTERM\u003c/code\u003e environmental variable.\n If \u003ccode\u003eTERM\u003c/code\u003e is not set, we use the generic, minimal entry \u003ccode\u003edumb\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThrows a \u003ccode\u003e\u003ca\u003eSetupTermError\u003c/a\u003e\u003c/code\u003e if the terminfo database could not be read.\n\u003c/p\u003e",
        "fct-module": "System.Console.Terminfo.Base",
        "fct-package": "terminfo",
        "fct-signature": "IO Terminal",
        "fct-source": "src/System-Console-Terminfo-Base.html#setupTermFromEnv",
        "fct-type": "function",
        "title": "setupTermFromEnv"
      },
      "index": {
        "description": "Initialize the terminfo library using the TERM environmental variable If TERM is not set we use the generic minimal entry dumb Throws SetupTermError if the terminfo database could not be read",
        "hierarchy": "System Console Terminfo Base",
        "module": "System.Console.Terminfo.Base",
        "name": "setupTermFromEnv",
        "normalized": "",
        "package": "terminfo",
        "partial": "Term From Env",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Base.html#v:termText",
      "description": {
        "fct-module": "System.Console.Terminfo.Base",
        "fct-package": "terminfo",
        "fct-signature": "String -\u003e TermOutput",
        "fct-source": "src/System-Console-Terminfo-Base.html#termText",
        "fct-type": "function",
        "title": "termText"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Terminfo Base",
        "module": "System.Console.Terminfo.Base",
        "name": "termText",
        "normalized": "String-\u003eTermOutput",
        "package": "terminfo",
        "partial": "Text",
        "signature": "String-\u003eTermOutput"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Base.html#v:tiGetFlag",
      "description": {
        "fct-descr": "\u003cp\u003eLook up a boolean capability in the terminfo database.  \n\u003c/p\u003e\u003cp\u003eUnlike \u003ccode\u003e\u003ca\u003etiGuardFlag\u003c/a\u003e\u003c/code\u003e, this capability never fails; it returns \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e if the\n capability is absent or set to false, and returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e otherwise.  \n\u003c/p\u003e",
        "fct-module": "System.Console.Terminfo.Base",
        "fct-package": "terminfo",
        "fct-signature": "String -\u003e Capability Bool",
        "fct-source": "src/System-Console-Terminfo-Base.html#tiGetFlag",
        "fct-type": "function",
        "title": "tiGetFlag"
      },
      "index": {
        "description": "Look up boolean capability in the terminfo database Unlike tiGuardFlag this capability never fails it returns False if the capability is absent or set to false and returns True otherwise",
        "hierarchy": "System Console Terminfo Base",
        "module": "System.Console.Terminfo.Base",
        "name": "tiGetFlag",
        "normalized": "String-\u003eCapability Bool",
        "package": "terminfo",
        "partial": "Get Flag",
        "signature": "String-\u003eCapability Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Base.html#v:tiGetNum",
      "description": {
        "fct-descr": "\u003cp\u003eLook up a numeric capability in the terminfo database.\n\u003c/p\u003e",
        "fct-module": "System.Console.Terminfo.Base",
        "fct-package": "terminfo",
        "fct-signature": "String -\u003e Capability Int",
        "fct-source": "src/System-Console-Terminfo-Base.html#tiGetNum",
        "fct-type": "function",
        "title": "tiGetNum"
      },
      "index": {
        "description": "Look up numeric capability in the terminfo database",
        "hierarchy": "System Console Terminfo Base",
        "module": "System.Console.Terminfo.Base",
        "name": "tiGetNum",
        "normalized": "String-\u003eCapability Int",
        "package": "terminfo",
        "partial": "Get Num",
        "signature": "String-\u003eCapability Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Base.html#v:tiGetOutput",
      "description": {
        "fct-descr": "\u003cp\u003eLook up an output capability in the terminfo database.  \n\u003c/p\u003e",
        "fct-module": "System.Console.Terminfo.Base",
        "fct-package": "terminfo",
        "fct-signature": "String -\u003e Capability ([Int] -\u003e LinesAffected -\u003e TermOutput)",
        "fct-source": "src/System-Console-Terminfo-Base.html#tiGetOutput",
        "fct-type": "function",
        "title": "tiGetOutput"
      },
      "index": {
        "description": "Look up an output capability in the terminfo database",
        "hierarchy": "System Console Terminfo Base",
        "module": "System.Console.Terminfo.Base",
        "name": "tiGetOutput",
        "normalized": "String-\u003eCapability([Int]-\u003eLinesAffected-\u003eTermOutput)",
        "package": "terminfo",
        "partial": "Get Output",
        "signature": "String-\u003eCapability([Int]-\u003eLinesAffected-\u003eTermOutput)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Base.html#v:tiGetOutput1",
      "description": {
        "fct-descr": "\u003cp\u003eLook up an output capability which takes a fixed number of parameters\n (for example, \u003ccode\u003eInt -\u003e Int -\u003e TermOutput\u003c/code\u003e).\n\u003c/p\u003e\u003cp\u003eFor capabilities which may contain variable-length\n padding, use \u003ccode\u003e\u003ca\u003etiGetOutput\u003c/a\u003e\u003c/code\u003e instead.\n\u003c/p\u003e",
        "fct-module": "System.Console.Terminfo.Base",
        "fct-package": "terminfo",
        "fct-signature": "String -\u003e Capability f",
        "fct-source": "src/System-Console-Terminfo-Base.html#tiGetOutput1",
        "fct-type": "function",
        "title": "tiGetOutput1"
      },
      "index": {
        "description": "Look up an output capability which takes fixed number of parameters for example Int Int TermOutput For capabilities which may contain variable-length padding use tiGetOutput instead",
        "hierarchy": "System Console Terminfo Base",
        "module": "System.Console.Terminfo.Base",
        "name": "tiGetOutput1",
        "normalized": "String-\u003eCapability a",
        "package": "terminfo",
        "partial": "Get Output",
        "signature": "String-\u003eCapability f"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Base.html#v:tiGetStr",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: use tiGetOutput instead.\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eLook up a string capability in the terminfo database.  NOTE: This function is deprecated; use\n \u003ccode\u003e\u003ca\u003etiGetOutput1\u003c/a\u003e\u003c/code\u003e instead.\n\u003c/p\u003e",
        "fct-module": "System.Console.Terminfo.Base",
        "fct-package": "terminfo",
        "fct-signature": "String -\u003e Capability String",
        "fct-source": "src/System-Console-Terminfo-Base.html#tiGetStr",
        "fct-type": "function",
        "title": "tiGetStr"
      },
      "index": {
        "description": "Deprecated use tiGetOutput instead Look up string capability in the terminfo database NOTE This function is deprecated use tiGetOutput1 instead",
        "hierarchy": "System Console Terminfo Base",
        "module": "System.Console.Terminfo.Base",
        "name": "tiGetStr",
        "normalized": "String-\u003eCapability String",
        "package": "terminfo",
        "partial": "Get Str",
        "signature": "String-\u003eCapability String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Base.html#v:tiGuardFlag",
      "description": {
        "fct-descr": "\u003cp\u003eLook up a boolean capability in the terminfo database, and fail if\n it's not defined.\n\u003c/p\u003e",
        "fct-module": "System.Console.Terminfo.Base",
        "fct-package": "terminfo",
        "fct-signature": "String -\u003e Capability ()",
        "fct-source": "src/System-Console-Terminfo-Base.html#tiGuardFlag",
        "fct-type": "function",
        "title": "tiGuardFlag"
      },
      "index": {
        "description": "Look up boolean capability in the terminfo database and fail if it not defined",
        "hierarchy": "System Console Terminfo Base",
        "module": "System.Console.Terminfo.Base",
        "name": "tiGuardFlag",
        "normalized": "String-\u003eCapability()",
        "package": "terminfo",
        "partial": "Guard Flag",
        "signature": "String-\u003eCapability()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Color.html#",
      "description": {
        "fct-module": "System.Console.Terminfo.Color",
        "fct-package": "terminfo",
        "fct-signature": "module",
        "fct-source": "src/System-Console-Terminfo-Color.html",
        "fct-type": "module",
        "title": "Color"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Terminfo Color",
        "module": "System.Console.Terminfo.Color",
        "name": "Color",
        "normalized": "",
        "package": "terminfo",
        "partial": "Color",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Color.html#t:Color",
      "description": {
        "fct-module": "System.Console.Terminfo.Color",
        "fct-package": "terminfo",
        "fct-signature": "data",
        "fct-source": "src/System-Console-Terminfo-Color.html#Color",
        "fct-type": "data",
        "title": "Color"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Terminfo Color",
        "module": "System.Console.Terminfo.Color",
        "name": "Color",
        "normalized": "",
        "package": "terminfo",
        "partial": "Color",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Color.html#v:Black",
      "description": {
        "fct-module": "System.Console.Terminfo.Color",
        "fct-package": "terminfo",
        "fct-signature": "Black",
        "fct-source": "src/System-Console-Terminfo-Color.html#Color",
        "fct-type": "function",
        "title": "Black"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Terminfo Color",
        "module": "System.Console.Terminfo.Color",
        "name": "Black",
        "normalized": "",
        "package": "terminfo",
        "partial": "Black",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Color.html#v:Blue",
      "description": {
        "fct-module": "System.Console.Terminfo.Color",
        "fct-package": "terminfo",
        "fct-signature": "Blue",
        "fct-source": "src/System-Console-Terminfo-Color.html#Color",
        "fct-type": "function",
        "title": "Blue"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Terminfo Color",
        "module": "System.Console.Terminfo.Color",
        "name": "Blue",
        "normalized": "",
        "package": "terminfo",
        "partial": "Blue",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Color.html#v:ColorNumber",
      "description": {
        "fct-module": "System.Console.Terminfo.Color",
        "fct-package": "terminfo",
        "fct-signature": "ColorNumber Int",
        "fct-source": "src/System-Console-Terminfo-Color.html#Color",
        "fct-type": "function",
        "title": "ColorNumber"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Terminfo Color",
        "module": "System.Console.Terminfo.Color",
        "name": "ColorNumber",
        "normalized": "",
        "package": "terminfo",
        "partial": "Color Number",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Color.html#v:Cyan",
      "description": {
        "fct-module": "System.Console.Terminfo.Color",
        "fct-package": "terminfo",
        "fct-signature": "Cyan",
        "fct-source": "src/System-Console-Terminfo-Color.html#Color",
        "fct-type": "function",
        "title": "Cyan"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Terminfo Color",
        "module": "System.Console.Terminfo.Color",
        "name": "Cyan",
        "normalized": "",
        "package": "terminfo",
        "partial": "Cyan",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Color.html#v:Green",
      "description": {
        "fct-module": "System.Console.Terminfo.Color",
        "fct-package": "terminfo",
        "fct-signature": "Green",
        "fct-source": "src/System-Console-Terminfo-Color.html#Color",
        "fct-type": "function",
        "title": "Green"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Terminfo Color",
        "module": "System.Console.Terminfo.Color",
        "name": "Green",
        "normalized": "",
        "package": "terminfo",
        "partial": "Green",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Color.html#v:Magenta",
      "description": {
        "fct-module": "System.Console.Terminfo.Color",
        "fct-package": "terminfo",
        "fct-signature": "Magenta",
        "fct-source": "src/System-Console-Terminfo-Color.html#Color",
        "fct-type": "function",
        "title": "Magenta"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Terminfo Color",
        "module": "System.Console.Terminfo.Color",
        "name": "Magenta",
        "normalized": "",
        "package": "terminfo",
        "partial": "Magenta",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Color.html#v:Red",
      "description": {
        "fct-module": "System.Console.Terminfo.Color",
        "fct-package": "terminfo",
        "fct-signature": "Red",
        "fct-source": "src/System-Console-Terminfo-Color.html#Color",
        "fct-type": "function",
        "title": "Red"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Terminfo Color",
        "module": "System.Console.Terminfo.Color",
        "name": "Red",
        "normalized": "",
        "package": "terminfo",
        "partial": "Red",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Color.html#v:White",
      "description": {
        "fct-module": "System.Console.Terminfo.Color",
        "fct-package": "terminfo",
        "fct-signature": "White",
        "fct-source": "src/System-Console-Terminfo-Color.html#Color",
        "fct-type": "function",
        "title": "White"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Terminfo Color",
        "module": "System.Console.Terminfo.Color",
        "name": "White",
        "normalized": "",
        "package": "terminfo",
        "partial": "White",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Color.html#v:Yellow",
      "description": {
        "fct-module": "System.Console.Terminfo.Color",
        "fct-package": "terminfo",
        "fct-signature": "Yellow",
        "fct-source": "src/System-Console-Terminfo-Color.html#Color",
        "fct-type": "function",
        "title": "Yellow"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Terminfo Color",
        "module": "System.Console.Terminfo.Color",
        "name": "Yellow",
        "normalized": "",
        "package": "terminfo",
        "partial": "Yellow",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Color.html#v:restoreDefaultColors",
      "description": {
        "fct-descr": "\u003cp\u003eRestores foreground/background colors to their original\n settings.\n\u003c/p\u003e",
        "fct-module": "System.Console.Terminfo.Color",
        "fct-package": "terminfo",
        "fct-signature": "Capability s",
        "fct-source": "src/System-Console-Terminfo-Color.html#restoreDefaultColors",
        "fct-type": "function",
        "title": "restoreDefaultColors"
      },
      "index": {
        "description": "Restores foreground background colors to their original settings",
        "hierarchy": "System Console Terminfo Color",
        "module": "System.Console.Terminfo.Color",
        "name": "restoreDefaultColors",
        "normalized": "",
        "package": "terminfo",
        "partial": "Default Colors",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Color.html#v:setBackgroundColor",
      "description": {
        "fct-descr": "\u003cp\u003eSets the background color of all further text output, using\n either the \u003ccode\u003esetab\u003c/code\u003e or \u003ccode\u003esetb\u003c/code\u003e capability.\n\u003c/p\u003e",
        "fct-module": "System.Console.Terminfo.Color",
        "fct-package": "terminfo",
        "fct-signature": "Capability (Color -\u003e s)",
        "fct-source": "src/System-Console-Terminfo-Color.html#setBackgroundColor",
        "fct-type": "function",
        "title": "setBackgroundColor"
      },
      "index": {
        "description": "Sets the background color of all further text output using either the setab or setb capability",
        "hierarchy": "System Console Terminfo Color",
        "module": "System.Console.Terminfo.Color",
        "name": "setBackgroundColor",
        "normalized": "Capability(Color-\u003ea)",
        "package": "terminfo",
        "partial": "Background Color",
        "signature": "Capability(Color-\u003es)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Color.html#v:setForegroundColor",
      "description": {
        "fct-descr": "\u003cp\u003eSets the foreground color of all further text output, using\n either the \u003ccode\u003esetaf\u003c/code\u003e or \u003ccode\u003esetf\u003c/code\u003e capability.\n\u003c/p\u003e",
        "fct-module": "System.Console.Terminfo.Color",
        "fct-package": "terminfo",
        "fct-signature": "Capability (Color -\u003e s)",
        "fct-source": "src/System-Console-Terminfo-Color.html#setForegroundColor",
        "fct-type": "function",
        "title": "setForegroundColor"
      },
      "index": {
        "description": "Sets the foreground color of all further text output using either the setaf or setf capability",
        "hierarchy": "System Console Terminfo Color",
        "module": "System.Console.Terminfo.Color",
        "name": "setForegroundColor",
        "normalized": "Capability(Color-\u003ea)",
        "package": "terminfo",
        "partial": "Foreground Color",
        "signature": "Capability(Color-\u003es)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Color.html#v:termColors",
      "description": {
        "fct-descr": "\u003cp\u003eThe maximum number of of colors on the screen.\n\u003c/p\u003e",
        "fct-module": "System.Console.Terminfo.Color",
        "fct-package": "terminfo",
        "fct-signature": "Capability Int",
        "fct-source": "src/System-Console-Terminfo-Color.html#termColors",
        "fct-type": "function",
        "title": "termColors"
      },
      "index": {
        "description": "The maximum number of of colors on the screen",
        "hierarchy": "System Console Terminfo Color",
        "module": "System.Console.Terminfo.Color",
        "name": "termColors",
        "normalized": "",
        "package": "terminfo",
        "partial": "Colors",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Color.html#v:withBackgroundColor",
      "description": {
        "fct-descr": "\u003cp\u003eThis capability temporarily sets the\n terminal's background color while outputting the given text, and\n then restores the terminal to its default foreground and background\n colors.\n\u003c/p\u003e",
        "fct-module": "System.Console.Terminfo.Color",
        "fct-package": "terminfo",
        "fct-signature": "Capability (Color -\u003e s -\u003e s)",
        "fct-source": "src/System-Console-Terminfo-Color.html#withBackgroundColor",
        "fct-type": "function",
        "title": "withBackgroundColor"
      },
      "index": {
        "description": "This capability temporarily sets the terminal background color while outputting the given text and then restores the terminal to its default foreground and background colors",
        "hierarchy": "System Console Terminfo Color",
        "module": "System.Console.Terminfo.Color",
        "name": "withBackgroundColor",
        "normalized": "Capability(Color-\u003ea-\u003ea)",
        "package": "terminfo",
        "partial": "Background Color",
        "signature": "Capability(Color-\u003es-\u003es)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Color.html#v:withForegroundColor",
      "description": {
        "fct-descr": "\u003cp\u003eThis capability temporarily sets the\n terminal's foreground color while outputting the given text, and\n then restores the terminal to its default foreground and background\n colors.\n\u003c/p\u003e",
        "fct-module": "System.Console.Terminfo.Color",
        "fct-package": "terminfo",
        "fct-signature": "Capability (Color -\u003e s -\u003e s)",
        "fct-source": "src/System-Console-Terminfo-Color.html#withForegroundColor",
        "fct-type": "function",
        "title": "withForegroundColor"
      },
      "index": {
        "description": "This capability temporarily sets the terminal foreground color while outputting the given text and then restores the terminal to its default foreground and background colors",
        "hierarchy": "System Console Terminfo Color",
        "module": "System.Console.Terminfo.Color",
        "name": "withForegroundColor",
        "normalized": "Capability(Color-\u003ea-\u003ea)",
        "package": "terminfo",
        "partial": "Foreground Color",
        "signature": "Capability(Color-\u003es-\u003es)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Cursor.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides capabilities for moving the cursor on the terminal.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.Console.Terminfo.Cursor",
        "fct-package": "terminfo",
        "fct-signature": "module",
        "fct-source": "src/System-Console-Terminfo-Cursor.html",
        "fct-type": "module",
        "title": "Cursor"
      },
      "index": {
        "description": "This module provides capabilities for moving the cursor on the terminal",
        "hierarchy": "System Console Terminfo Cursor",
        "module": "System.Console.Terminfo.Cursor",
        "name": "Cursor",
        "normalized": "",
        "package": "terminfo",
        "partial": "Cursor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Cursor.html#t:Point",
      "description": {
        "fct-module": "System.Console.Terminfo.Cursor",
        "fct-package": "terminfo",
        "fct-signature": "data",
        "fct-source": "src/System-Console-Terminfo-Cursor.html#Point",
        "fct-type": "data",
        "title": "Point"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Terminfo Cursor",
        "module": "System.Console.Terminfo.Cursor",
        "name": "Point",
        "normalized": "",
        "package": "terminfo",
        "partial": "Point",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Cursor.html#v:Point",
      "description": {
        "fct-module": "System.Console.Terminfo.Cursor",
        "fct-package": "terminfo",
        "fct-signature": "Point",
        "fct-source": "src/System-Console-Terminfo-Cursor.html#Point",
        "fct-type": "function",
        "title": "Point"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Terminfo Cursor",
        "module": "System.Console.Terminfo.Cursor",
        "name": "Point",
        "normalized": "",
        "package": "terminfo",
        "partial": "Point",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Cursor.html#v:autoLeftMargin",
      "description": {
        "fct-descr": "\u003cp\u003eThis flag specifies that a backspace at column 0 wraps the cursor to\n the last column of the previous line.\n\u003c/p\u003e",
        "fct-module": "System.Console.Terminfo.Cursor",
        "fct-package": "terminfo",
        "fct-signature": "Capability Bool",
        "fct-source": "src/System-Console-Terminfo-Cursor.html#autoLeftMargin",
        "fct-type": "function",
        "title": "autoLeftMargin"
      },
      "index": {
        "description": "This flag specifies that backspace at column wraps the cursor to the last column of the previous line",
        "hierarchy": "System Console Terminfo Cursor",
        "module": "System.Console.Terminfo.Cursor",
        "name": "autoLeftMargin",
        "normalized": "",
        "package": "terminfo",
        "partial": "Left Margin",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Cursor.html#v:autoRightMargin",
      "description": {
        "fct-descr": "\u003cp\u003eThis flag specifies that the cursor wraps automatically from the last \n column of one line to the first column of the next.\n\u003c/p\u003e",
        "fct-module": "System.Console.Terminfo.Cursor",
        "fct-package": "terminfo",
        "fct-signature": "Capability Bool",
        "fct-source": "src/System-Console-Terminfo-Cursor.html#autoRightMargin",
        "fct-type": "function",
        "title": "autoRightMargin"
      },
      "index": {
        "description": "This flag specifies that the cursor wraps automatically from the last column of one line to the first column of the next",
        "hierarchy": "System Console Terminfo Cursor",
        "module": "System.Console.Terminfo.Cursor",
        "name": "autoRightMargin",
        "normalized": "",
        "package": "terminfo",
        "partial": "Right Margin",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Cursor.html#v:carriageReturn",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003ecr\u003c/code\u003e capability, which moves the cursor to the first column of the\n current line.\n\u003c/p\u003e",
        "fct-module": "System.Console.Terminfo.Cursor",
        "fct-package": "terminfo",
        "fct-signature": "Capability s",
        "fct-source": "src/System-Console-Terminfo-Cursor.html#carriageReturn",
        "fct-type": "function",
        "title": "carriageReturn"
      },
      "index": {
        "description": "The cr capability which moves the cursor to the first column of the current line",
        "hierarchy": "System Console Terminfo Cursor",
        "module": "System.Console.Terminfo.Cursor",
        "name": "carriageReturn",
        "normalized": "",
        "package": "terminfo",
        "partial": "Return",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Cursor.html#v:col",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "System.Console.Terminfo.Cursor",
        "fct-package": "terminfo",
        "fct-signature": "Int",
        "fct-source": "src/System-Console-Terminfo-Cursor.html#Point",
        "fct-type": "function",
        "title": "col"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Terminfo Cursor",
        "module": "System.Console.Terminfo.Cursor",
        "name": "col",
        "normalized": "",
        "package": "terminfo",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Cursor.html#v:columnAddress",
      "description": {
        "fct-module": "System.Console.Terminfo.Cursor",
        "fct-package": "terminfo",
        "fct-signature": "Capability (Int -\u003e s)",
        "fct-source": "src/System-Console-Terminfo-Cursor.html#columnAddress",
        "fct-type": "function",
        "title": "columnAddress"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Terminfo Cursor",
        "module": "System.Console.Terminfo.Cursor",
        "name": "columnAddress",
        "normalized": "Capability(Int-\u003ea)",
        "package": "terminfo",
        "partial": "Address",
        "signature": "Capability(Int-\u003es)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Cursor.html#v:cursorAddress",
      "description": {
        "fct-module": "System.Console.Terminfo.Cursor",
        "fct-package": "terminfo",
        "fct-signature": "Capability (Point -\u003e s)",
        "fct-source": "src/System-Console-Terminfo-Cursor.html#cursorAddress",
        "fct-type": "function",
        "title": "cursorAddress"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Terminfo Cursor",
        "module": "System.Console.Terminfo.Cursor",
        "name": "cursorAddress",
        "normalized": "Capability(Point-\u003ea)",
        "package": "terminfo",
        "partial": "Address",
        "signature": "Capability(Point-\u003es)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Cursor.html#v:cursorDown",
      "description": {
        "fct-module": "System.Console.Terminfo.Cursor",
        "fct-package": "terminfo",
        "fct-signature": "Capability (Int -\u003e s)",
        "fct-source": "src/System-Console-Terminfo-Cursor.html#cursorDown",
        "fct-type": "function",
        "title": "cursorDown"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Terminfo Cursor",
        "module": "System.Console.Terminfo.Cursor",
        "name": "cursorDown",
        "normalized": "Capability(Int-\u003ea)",
        "package": "terminfo",
        "partial": "Down",
        "signature": "Capability(Int-\u003es)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Cursor.html#v:cursorDown1",
      "description": {
        "fct-module": "System.Console.Terminfo.Cursor",
        "fct-package": "terminfo",
        "fct-signature": "Capability s",
        "fct-source": "src/System-Console-Terminfo-Cursor.html#cursorDown1",
        "fct-type": "function",
        "title": "cursorDown1"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Terminfo Cursor",
        "module": "System.Console.Terminfo.Cursor",
        "name": "cursorDown1",
        "normalized": "",
        "package": "terminfo",
        "partial": "Down",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Cursor.html#v:cursorHome",
      "description": {
        "fct-module": "System.Console.Terminfo.Cursor",
        "fct-package": "terminfo",
        "fct-signature": "Capability s",
        "fct-source": "src/System-Console-Terminfo-Cursor.html#cursorHome",
        "fct-type": "function",
        "title": "cursorHome"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Terminfo Cursor",
        "module": "System.Console.Terminfo.Cursor",
        "name": "cursorHome",
        "normalized": "",
        "package": "terminfo",
        "partial": "Home",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Cursor.html#v:cursorLeft",
      "description": {
        "fct-module": "System.Console.Terminfo.Cursor",
        "fct-package": "terminfo",
        "fct-signature": "Capability (Int -\u003e s)",
        "fct-source": "src/System-Console-Terminfo-Cursor.html#cursorLeft",
        "fct-type": "function",
        "title": "cursorLeft"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Terminfo Cursor",
        "module": "System.Console.Terminfo.Cursor",
        "name": "cursorLeft",
        "normalized": "Capability(Int-\u003ea)",
        "package": "terminfo",
        "partial": "Left",
        "signature": "Capability(Int-\u003es)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Cursor.html#v:cursorLeft1",
      "description": {
        "fct-module": "System.Console.Terminfo.Cursor",
        "fct-package": "terminfo",
        "fct-signature": "Capability s",
        "fct-source": "src/System-Console-Terminfo-Cursor.html#cursorLeft1",
        "fct-type": "function",
        "title": "cursorLeft1"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Terminfo Cursor",
        "module": "System.Console.Terminfo.Cursor",
        "name": "cursorLeft1",
        "normalized": "",
        "package": "terminfo",
        "partial": "Left",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Cursor.html#v:cursorRight",
      "description": {
        "fct-module": "System.Console.Terminfo.Cursor",
        "fct-package": "terminfo",
        "fct-signature": "Capability (Int -\u003e s)",
        "fct-source": "src/System-Console-Terminfo-Cursor.html#cursorRight",
        "fct-type": "function",
        "title": "cursorRight"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Terminfo Cursor",
        "module": "System.Console.Terminfo.Cursor",
        "name": "cursorRight",
        "normalized": "Capability(Int-\u003ea)",
        "package": "terminfo",
        "partial": "Right",
        "signature": "Capability(Int-\u003es)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Cursor.html#v:cursorRight1",
      "description": {
        "fct-module": "System.Console.Terminfo.Cursor",
        "fct-package": "terminfo",
        "fct-signature": "Capability s",
        "fct-source": "src/System-Console-Terminfo-Cursor.html#cursorRight1",
        "fct-type": "function",
        "title": "cursorRight1"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Terminfo Cursor",
        "module": "System.Console.Terminfo.Cursor",
        "name": "cursorRight1",
        "normalized": "",
        "package": "terminfo",
        "partial": "Right",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Cursor.html#v:cursorToLL",
      "description": {
        "fct-module": "System.Console.Terminfo.Cursor",
        "fct-package": "terminfo",
        "fct-signature": "Capability s",
        "fct-source": "src/System-Console-Terminfo-Cursor.html#cursorToLL",
        "fct-type": "function",
        "title": "cursorToLL"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Terminfo Cursor",
        "module": "System.Console.Terminfo.Cursor",
        "name": "cursorToLL",
        "normalized": "",
        "package": "terminfo",
        "partial": "To LL",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Cursor.html#v:cursorUp",
      "description": {
        "fct-module": "System.Console.Terminfo.Cursor",
        "fct-package": "terminfo",
        "fct-signature": "Capability (Int -\u003e s)",
        "fct-source": "src/System-Console-Terminfo-Cursor.html#cursorUp",
        "fct-type": "function",
        "title": "cursorUp"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Terminfo Cursor",
        "module": "System.Console.Terminfo.Cursor",
        "name": "cursorUp",
        "normalized": "Capability(Int-\u003ea)",
        "package": "terminfo",
        "partial": "Up",
        "signature": "Capability(Int-\u003es)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Cursor.html#v:cursorUp1",
      "description": {
        "fct-module": "System.Console.Terminfo.Cursor",
        "fct-package": "terminfo",
        "fct-signature": "Capability s",
        "fct-source": "src/System-Console-Terminfo-Cursor.html#cursorUp1",
        "fct-type": "function",
        "title": "cursorUp1"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Terminfo Cursor",
        "module": "System.Console.Terminfo.Cursor",
        "name": "cursorUp1",
        "normalized": "",
        "package": "terminfo",
        "partial": "Up",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Cursor.html#v:moveDown",
      "description": {
        "fct-module": "System.Console.Terminfo.Cursor",
        "fct-package": "terminfo",
        "fct-signature": "Capability (Int -\u003e s)",
        "fct-source": "src/System-Console-Terminfo-Cursor.html#moveDown",
        "fct-type": "function",
        "title": "moveDown"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Terminfo Cursor",
        "module": "System.Console.Terminfo.Cursor",
        "name": "moveDown",
        "normalized": "Capability(Int-\u003ea)",
        "package": "terminfo",
        "partial": "Down",
        "signature": "Capability(Int-\u003es)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Cursor.html#v:moveLeft",
      "description": {
        "fct-module": "System.Console.Terminfo.Cursor",
        "fct-package": "terminfo",
        "fct-signature": "Capability (Int -\u003e s)",
        "fct-source": "src/System-Console-Terminfo-Cursor.html#moveLeft",
        "fct-type": "function",
        "title": "moveLeft"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Terminfo Cursor",
        "module": "System.Console.Terminfo.Cursor",
        "name": "moveLeft",
        "normalized": "Capability(Int-\u003ea)",
        "package": "terminfo",
        "partial": "Left",
        "signature": "Capability(Int-\u003es)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Cursor.html#v:moveRight",
      "description": {
        "fct-module": "System.Console.Terminfo.Cursor",
        "fct-package": "terminfo",
        "fct-signature": "Capability (Int -\u003e s)",
        "fct-source": "src/System-Console-Terminfo-Cursor.html#moveRight",
        "fct-type": "function",
        "title": "moveRight"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Terminfo Cursor",
        "module": "System.Console.Terminfo.Cursor",
        "name": "moveRight",
        "normalized": "Capability(Int-\u003ea)",
        "package": "terminfo",
        "partial": "Right",
        "signature": "Capability(Int-\u003es)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Cursor.html#v:moveUp",
      "description": {
        "fct-module": "System.Console.Terminfo.Cursor",
        "fct-package": "terminfo",
        "fct-signature": "Capability (Int -\u003e s)",
        "fct-source": "src/System-Console-Terminfo-Cursor.html#moveUp",
        "fct-type": "function",
        "title": "moveUp"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Terminfo Cursor",
        "module": "System.Console.Terminfo.Cursor",
        "name": "moveUp",
        "normalized": "Capability(Int-\u003ea)",
        "package": "terminfo",
        "partial": "Up",
        "signature": "Capability(Int-\u003es)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Cursor.html#v:newline",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003enel\u003c/code\u003e capability, which moves the cursor to the first column of\n the next line.  It behaves like a carriage return followed by a line feed.\n\u003c/p\u003e\u003cp\u003eIf \u003ccode\u003enel\u003c/code\u003e is not defined, this may be built out of other capabilities.\n\u003c/p\u003e",
        "fct-module": "System.Console.Terminfo.Cursor",
        "fct-package": "terminfo",
        "fct-signature": "Capability s",
        "fct-source": "src/System-Console-Terminfo-Cursor.html#newline",
        "fct-type": "function",
        "title": "newline"
      },
      "index": {
        "description": "The nel capability which moves the cursor to the first column of the next line It behaves like carriage return followed by line feed If nel is not defined this may be built out of other capabilities",
        "hierarchy": "System Console Terminfo Cursor",
        "module": "System.Console.Terminfo.Cursor",
        "name": "newline",
        "normalized": "",
        "package": "terminfo",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Cursor.html#v:row",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "System.Console.Terminfo.Cursor",
        "fct-package": "terminfo",
        "fct-signature": "Int",
        "fct-source": "src/System-Console-Terminfo-Cursor.html#Point",
        "fct-type": "function",
        "title": "row"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Terminfo Cursor",
        "module": "System.Console.Terminfo.Cursor",
        "name": "row",
        "normalized": "",
        "package": "terminfo",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Cursor.html#v:rowAddress",
      "description": {
        "fct-module": "System.Console.Terminfo.Cursor",
        "fct-package": "terminfo",
        "fct-signature": "Capability (Int -\u003e s)",
        "fct-source": "src/System-Console-Terminfo-Cursor.html#rowAddress",
        "fct-type": "function",
        "title": "rowAddress"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Terminfo Cursor",
        "module": "System.Console.Terminfo.Cursor",
        "name": "rowAddress",
        "normalized": "Capability(Int-\u003ea)",
        "package": "terminfo",
        "partial": "Address",
        "signature": "Capability(Int-\u003es)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Cursor.html#v:scrollForward",
      "description": {
        "fct-module": "System.Console.Terminfo.Cursor",
        "fct-package": "terminfo",
        "fct-signature": "Capability s",
        "fct-source": "src/System-Console-Terminfo-Cursor.html#scrollForward",
        "fct-type": "function",
        "title": "scrollForward"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Terminfo Cursor",
        "module": "System.Console.Terminfo.Cursor",
        "name": "scrollForward",
        "normalized": "",
        "package": "terminfo",
        "partial": "Forward",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Cursor.html#v:scrollReverse",
      "description": {
        "fct-module": "System.Console.Terminfo.Cursor",
        "fct-package": "terminfo",
        "fct-signature": "Capability s",
        "fct-source": "src/System-Console-Terminfo-Cursor.html#scrollReverse",
        "fct-type": "function",
        "title": "scrollReverse"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Terminfo Cursor",
        "module": "System.Console.Terminfo.Cursor",
        "name": "scrollReverse",
        "normalized": "",
        "package": "terminfo",
        "partial": "Reverse",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Cursor.html#v:termColumns",
      "description": {
        "fct-module": "System.Console.Terminfo.Cursor",
        "fct-package": "terminfo",
        "fct-signature": "Capability Int",
        "fct-source": "src/System-Console-Terminfo-Cursor.html#termColumns",
        "fct-type": "function",
        "title": "termColumns"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Terminfo Cursor",
        "module": "System.Console.Terminfo.Cursor",
        "name": "termColumns",
        "normalized": "",
        "package": "terminfo",
        "partial": "Columns",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Cursor.html#v:termLines",
      "description": {
        "fct-module": "System.Console.Terminfo.Cursor",
        "fct-package": "terminfo",
        "fct-signature": "Capability Int",
        "fct-source": "src/System-Console-Terminfo-Cursor.html#termLines",
        "fct-type": "function",
        "title": "termLines"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Terminfo Cursor",
        "module": "System.Console.Terminfo.Cursor",
        "name": "termLines",
        "normalized": "",
        "package": "terminfo",
        "partial": "Lines",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Cursor.html#v:wraparoundGlitch",
      "description": {
        "fct-descr": "\u003cp\u003eThis flag specifies that the terminal does not perform\n \u003ccode\u003e\u003ca\u003eautoRightMargin\u003c/a\u003e\u003c/code\u003e-style wrapping when the character which would cause the \n wraparound is a control character.\n This is also known as the \"newline glitch\" or \"magic wrap\".  \n\u003c/p\u003e\u003cp\u003eFor example, in an 80-column terminal with this behavior, the following \n will print single-spaced instead of double-spaced:\n\u003c/p\u003e\u003cpre\u003e replicateM_ 5 $ putStr $ replicate 80 'x' ++ \"\\n\"\n\u003c/pre\u003e",
        "fct-module": "System.Console.Terminfo.Cursor",
        "fct-package": "terminfo",
        "fct-signature": "Capability Bool",
        "fct-source": "src/System-Console-Terminfo-Cursor.html#wraparoundGlitch",
        "fct-type": "function",
        "title": "wraparoundGlitch"
      },
      "index": {
        "description": "This flag specifies that the terminal does not perform autoRightMargin style wrapping when the character which would cause the wraparound is control character This is also known as the newline glitch or magic wrap For example in an column terminal with this behavior the following will print single-spaced instead of double-spaced replicateM putStr replicate",
        "hierarchy": "System Console Terminfo Cursor",
        "module": "System.Console.Terminfo.Cursor",
        "name": "wraparoundGlitch",
        "normalized": "",
        "package": "terminfo",
        "partial": "Glitch",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Edit.html#",
      "description": {
        "fct-module": "System.Console.Terminfo.Edit",
        "fct-package": "terminfo",
        "fct-signature": "module",
        "fct-source": "src/System-Console-Terminfo-Edit.html",
        "fct-type": "module",
        "title": "Edit"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Terminfo Edit",
        "module": "System.Console.Terminfo.Edit",
        "name": "Edit",
        "normalized": "",
        "package": "terminfo",
        "partial": "Edit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Edit.html#v:clearBOL",
      "description": {
        "fct-descr": "\u003cp\u003eClear from beginning of line to cursor.\n\u003c/p\u003e",
        "fct-module": "System.Console.Terminfo.Edit",
        "fct-package": "terminfo",
        "fct-signature": "Capability s",
        "fct-source": "src/System-Console-Terminfo-Edit.html#clearBOL",
        "fct-type": "function",
        "title": "clearBOL"
      },
      "index": {
        "description": "Clear from beginning of line to cursor",
        "hierarchy": "System Console Terminfo Edit",
        "module": "System.Console.Terminfo.Edit",
        "name": "clearBOL",
        "normalized": "",
        "package": "terminfo",
        "partial": "BOL",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Edit.html#v:clearEOL",
      "description": {
        "fct-descr": "\u003cp\u003eClear from cursor to end of line.\n\u003c/p\u003e",
        "fct-module": "System.Console.Terminfo.Edit",
        "fct-package": "terminfo",
        "fct-signature": "Capability s",
        "fct-source": "src/System-Console-Terminfo-Edit.html#clearEOL",
        "fct-type": "function",
        "title": "clearEOL"
      },
      "index": {
        "description": "Clear from cursor to end of line",
        "hierarchy": "System Console Terminfo Edit",
        "module": "System.Console.Terminfo.Edit",
        "name": "clearEOL",
        "normalized": "",
        "package": "terminfo",
        "partial": "EOL",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Edit.html#v:clearEOS",
      "description": {
        "fct-descr": "\u003cp\u003eClear display after cursor.\n\u003c/p\u003e",
        "fct-module": "System.Console.Terminfo.Edit",
        "fct-package": "terminfo",
        "fct-signature": "Capability (LinesAffected -\u003e TermOutput)",
        "fct-source": "src/System-Console-Terminfo-Edit.html#clearEOS",
        "fct-type": "function",
        "title": "clearEOS"
      },
      "index": {
        "description": "Clear display after cursor",
        "hierarchy": "System Console Terminfo Edit",
        "module": "System.Console.Terminfo.Edit",
        "name": "clearEOS",
        "normalized": "Capability(LinesAffected-\u003eTermOutput)",
        "package": "terminfo",
        "partial": "EOS",
        "signature": "Capability(LinesAffected-\u003eTermOutput)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Edit.html#v:clearScreen",
      "description": {
        "fct-descr": "\u003cp\u003eClear the screen, and move the cursor to the upper left.\n\u003c/p\u003e",
        "fct-module": "System.Console.Terminfo.Edit",
        "fct-package": "terminfo",
        "fct-signature": "Capability (LinesAffected -\u003e TermOutput)",
        "fct-source": "src/System-Console-Terminfo-Edit.html#clearScreen",
        "fct-type": "function",
        "title": "clearScreen"
      },
      "index": {
        "description": "Clear the screen and move the cursor to the upper left",
        "hierarchy": "System Console Terminfo Edit",
        "module": "System.Console.Terminfo.Edit",
        "name": "clearScreen",
        "normalized": "Capability(LinesAffected-\u003eTermOutput)",
        "package": "terminfo",
        "partial": "Screen",
        "signature": "Capability(LinesAffected-\u003eTermOutput)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Effects.html#",
      "description": {
        "fct-module": "System.Console.Terminfo.Effects",
        "fct-package": "terminfo",
        "fct-signature": "module",
        "fct-source": "src/System-Console-Terminfo-Effects.html",
        "fct-type": "module",
        "title": "Effects"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Terminfo Effects",
        "module": "System.Console.Terminfo.Effects",
        "name": "Effects",
        "normalized": "",
        "package": "terminfo",
        "partial": "Effects",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Effects.html#t:Attributes",
      "description": {
        "fct-module": "System.Console.Terminfo.Effects",
        "fct-package": "terminfo",
        "fct-signature": "data",
        "fct-source": "src/System-Console-Terminfo-Effects.html#Attributes",
        "fct-type": "data",
        "title": "Attributes"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Terminfo Effects",
        "module": "System.Console.Terminfo.Effects",
        "name": "Attributes",
        "normalized": "",
        "package": "terminfo",
        "partial": "Attributes",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Effects.html#v:Attributes",
      "description": {
        "fct-module": "System.Console.Terminfo.Effects",
        "fct-package": "terminfo",
        "fct-signature": "Attributes",
        "fct-source": "src/System-Console-Terminfo-Effects.html#Attributes",
        "fct-type": "function",
        "title": "Attributes"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Terminfo Effects",
        "module": "System.Console.Terminfo.Effects",
        "name": "Attributes",
        "normalized": "",
        "package": "terminfo",
        "partial": "Attributes",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Effects.html#v:allAttributesOff",
      "description": {
        "fct-descr": "\u003cp\u003eTurns off all text attributes.  This capability will always succeed, but it has\n no effect in terminals which do not support text attributes.\n\u003c/p\u003e",
        "fct-module": "System.Console.Terminfo.Effects",
        "fct-package": "terminfo",
        "fct-signature": "Capability s",
        "fct-source": "src/System-Console-Terminfo-Effects.html#allAttributesOff",
        "fct-type": "function",
        "title": "allAttributesOff"
      },
      "index": {
        "description": "Turns off all text attributes This capability will always succeed but it has no effect in terminals which do not support text attributes",
        "hierarchy": "System Console Terminfo Effects",
        "module": "System.Console.Terminfo.Effects",
        "name": "allAttributesOff",
        "normalized": "",
        "package": "terminfo",
        "partial": "Attributes Off",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Effects.html#v:bell",
      "description": {
        "fct-descr": "\u003cp\u003eSound the audible bell.\n\u003c/p\u003e",
        "fct-module": "System.Console.Terminfo.Effects",
        "fct-package": "terminfo",
        "fct-signature": "Capability s",
        "fct-source": "src/System-Console-Terminfo-Effects.html#bell",
        "fct-type": "function",
        "title": "bell"
      },
      "index": {
        "description": "Sound the audible bell",
        "hierarchy": "System Console Terminfo Effects",
        "module": "System.Console.Terminfo.Effects",
        "name": "bell",
        "normalized": "",
        "package": "terminfo",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Effects.html#v:blinkAttr",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "System.Console.Terminfo.Effects",
        "fct-package": "terminfo",
        "fct-signature": "Bool",
        "fct-source": "src/System-Console-Terminfo-Effects.html#Attributes",
        "fct-type": "function",
        "title": "blinkAttr"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Terminfo Effects",
        "module": "System.Console.Terminfo.Effects",
        "name": "blinkAttr",
        "normalized": "",
        "package": "terminfo",
        "partial": "Attr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Effects.html#v:blinkOn",
      "description": {
        "fct-module": "System.Console.Terminfo.Effects",
        "fct-package": "terminfo",
        "fct-signature": "Capability s",
        "fct-source": "src/System-Console-Terminfo-Effects.html#blinkOn",
        "fct-type": "function",
        "title": "blinkOn"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Terminfo Effects",
        "module": "System.Console.Terminfo.Effects",
        "name": "blinkOn",
        "normalized": "",
        "package": "terminfo",
        "partial": "On",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Effects.html#v:boldAttr",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "System.Console.Terminfo.Effects",
        "fct-package": "terminfo",
        "fct-signature": "Bool",
        "fct-source": "src/System-Console-Terminfo-Effects.html#Attributes",
        "fct-type": "function",
        "title": "boldAttr"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Terminfo Effects",
        "module": "System.Console.Terminfo.Effects",
        "name": "boldAttr",
        "normalized": "",
        "package": "terminfo",
        "partial": "Attr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Effects.html#v:boldOn",
      "description": {
        "fct-module": "System.Console.Terminfo.Effects",
        "fct-package": "terminfo",
        "fct-signature": "Capability s",
        "fct-source": "src/System-Console-Terminfo-Effects.html#boldOn",
        "fct-type": "function",
        "title": "boldOn"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Terminfo Effects",
        "module": "System.Console.Terminfo.Effects",
        "name": "boldOn",
        "normalized": "",
        "package": "terminfo",
        "partial": "On",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Effects.html#v:defaultAttributes",
      "description": {
        "fct-descr": "\u003cp\u003eThese attributes have all properties turned off.\n\u003c/p\u003e",
        "fct-module": "System.Console.Terminfo.Effects",
        "fct-package": "terminfo",
        "fct-signature": "Attributes",
        "fct-source": "src/System-Console-Terminfo-Effects.html#defaultAttributes",
        "fct-type": "function",
        "title": "defaultAttributes"
      },
      "index": {
        "description": "These attributes have all properties turned off",
        "hierarchy": "System Console Terminfo Effects",
        "module": "System.Console.Terminfo.Effects",
        "name": "defaultAttributes",
        "normalized": "",
        "package": "terminfo",
        "partial": "Attributes",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Effects.html#v:dimAttr",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "System.Console.Terminfo.Effects",
        "fct-package": "terminfo",
        "fct-signature": "Bool",
        "fct-source": "src/System-Console-Terminfo-Effects.html#Attributes",
        "fct-type": "function",
        "title": "dimAttr"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Terminfo Effects",
        "module": "System.Console.Terminfo.Effects",
        "name": "dimAttr",
        "normalized": "",
        "package": "terminfo",
        "partial": "Attr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Effects.html#v:dimOn",
      "description": {
        "fct-module": "System.Console.Terminfo.Effects",
        "fct-package": "terminfo",
        "fct-signature": "Capability s",
        "fct-source": "src/System-Console-Terminfo-Effects.html#dimOn",
        "fct-type": "function",
        "title": "dimOn"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Terminfo Effects",
        "module": "System.Console.Terminfo.Effects",
        "name": "dimOn",
        "normalized": "",
        "package": "terminfo",
        "partial": "On",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Effects.html#v:enterStandoutMode",
      "description": {
        "fct-module": "System.Console.Terminfo.Effects",
        "fct-package": "terminfo",
        "fct-signature": "Capability s",
        "fct-source": "src/System-Console-Terminfo-Effects.html#enterStandoutMode",
        "fct-type": "function",
        "title": "enterStandoutMode"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Terminfo Effects",
        "module": "System.Console.Terminfo.Effects",
        "name": "enterStandoutMode",
        "normalized": "",
        "package": "terminfo",
        "partial": "Standout Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Effects.html#v:enterUnderlineMode",
      "description": {
        "fct-module": "System.Console.Terminfo.Effects",
        "fct-package": "terminfo",
        "fct-signature": "Capability s",
        "fct-source": "src/System-Console-Terminfo-Effects.html#enterUnderlineMode",
        "fct-type": "function",
        "title": "enterUnderlineMode"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Terminfo Effects",
        "module": "System.Console.Terminfo.Effects",
        "name": "enterUnderlineMode",
        "normalized": "",
        "package": "terminfo",
        "partial": "Underline Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Effects.html#v:exitStandoutMode",
      "description": {
        "fct-module": "System.Console.Terminfo.Effects",
        "fct-package": "terminfo",
        "fct-signature": "Capability s",
        "fct-source": "src/System-Console-Terminfo-Effects.html#exitStandoutMode",
        "fct-type": "function",
        "title": "exitStandoutMode"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Terminfo Effects",
        "module": "System.Console.Terminfo.Effects",
        "name": "exitStandoutMode",
        "normalized": "",
        "package": "terminfo",
        "partial": "Standout Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Effects.html#v:exitUnderlineMode",
      "description": {
        "fct-module": "System.Console.Terminfo.Effects",
        "fct-package": "terminfo",
        "fct-signature": "Capability s",
        "fct-source": "src/System-Console-Terminfo-Effects.html#exitUnderlineMode",
        "fct-type": "function",
        "title": "exitUnderlineMode"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Terminfo Effects",
        "module": "System.Console.Terminfo.Effects",
        "name": "exitUnderlineMode",
        "normalized": "",
        "package": "terminfo",
        "partial": "Underline Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Effects.html#v:invisibleAttr",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "System.Console.Terminfo.Effects",
        "fct-package": "terminfo",
        "fct-signature": "Bool",
        "fct-source": "src/System-Console-Terminfo-Effects.html#Attributes",
        "fct-type": "function",
        "title": "invisibleAttr"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Terminfo Effects",
        "module": "System.Console.Terminfo.Effects",
        "name": "invisibleAttr",
        "normalized": "",
        "package": "terminfo",
        "partial": "Attr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Effects.html#v:invisibleOn",
      "description": {
        "fct-module": "System.Console.Terminfo.Effects",
        "fct-package": "terminfo",
        "fct-signature": "Capability s",
        "fct-source": "src/System-Console-Terminfo-Effects.html#invisibleOn",
        "fct-type": "function",
        "title": "invisibleOn"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Terminfo Effects",
        "module": "System.Console.Terminfo.Effects",
        "name": "invisibleOn",
        "normalized": "",
        "package": "terminfo",
        "partial": "On",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Effects.html#v:protectedAttr",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "System.Console.Terminfo.Effects",
        "fct-package": "terminfo",
        "fct-signature": "Bool",
        "fct-source": "src/System-Console-Terminfo-Effects.html#Attributes",
        "fct-type": "function",
        "title": "protectedAttr"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Terminfo Effects",
        "module": "System.Console.Terminfo.Effects",
        "name": "protectedAttr",
        "normalized": "",
        "package": "terminfo",
        "partial": "Attr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Effects.html#v:protectedOn",
      "description": {
        "fct-module": "System.Console.Terminfo.Effects",
        "fct-package": "terminfo",
        "fct-signature": "Capability s",
        "fct-source": "src/System-Console-Terminfo-Effects.html#protectedOn",
        "fct-type": "function",
        "title": "protectedOn"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Terminfo Effects",
        "module": "System.Console.Terminfo.Effects",
        "name": "protectedOn",
        "normalized": "",
        "package": "terminfo",
        "partial": "On",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Effects.html#v:reverseAttr",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "System.Console.Terminfo.Effects",
        "fct-package": "terminfo",
        "fct-signature": "Bool",
        "fct-source": "src/System-Console-Terminfo-Effects.html#Attributes",
        "fct-type": "function",
        "title": "reverseAttr"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Terminfo Effects",
        "module": "System.Console.Terminfo.Effects",
        "name": "reverseAttr",
        "normalized": "",
        "package": "terminfo",
        "partial": "Attr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Effects.html#v:reverseOn",
      "description": {
        "fct-module": "System.Console.Terminfo.Effects",
        "fct-package": "terminfo",
        "fct-signature": "Capability s",
        "fct-source": "src/System-Console-Terminfo-Effects.html#reverseOn",
        "fct-type": "function",
        "title": "reverseOn"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Terminfo Effects",
        "module": "System.Console.Terminfo.Effects",
        "name": "reverseOn",
        "normalized": "",
        "package": "terminfo",
        "partial": "On",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Effects.html#v:setAttributes",
      "description": {
        "fct-descr": "\u003cp\u003eSets the attributes on or off.  This capability will always succeed;\n properties which cannot be set in the current terminal will be ignored.\n\u003c/p\u003e",
        "fct-module": "System.Console.Terminfo.Effects",
        "fct-package": "terminfo",
        "fct-signature": "Capability (Attributes -\u003e s)",
        "fct-source": "src/System-Console-Terminfo-Effects.html#setAttributes",
        "fct-type": "function",
        "title": "setAttributes"
      },
      "index": {
        "description": "Sets the attributes on or off This capability will always succeed properties which cannot be set in the current terminal will be ignored",
        "hierarchy": "System Console Terminfo Effects",
        "module": "System.Console.Terminfo.Effects",
        "name": "setAttributes",
        "normalized": "Capability(Attributes-\u003ea)",
        "package": "terminfo",
        "partial": "Attributes",
        "signature": "Capability(Attributes-\u003es)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Effects.html#v:standoutAttr",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "System.Console.Terminfo.Effects",
        "fct-package": "terminfo",
        "fct-signature": "Bool",
        "fct-source": "src/System-Console-Terminfo-Effects.html#Attributes",
        "fct-type": "function",
        "title": "standoutAttr"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Terminfo Effects",
        "module": "System.Console.Terminfo.Effects",
        "name": "standoutAttr",
        "normalized": "",
        "package": "terminfo",
        "partial": "Attr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Effects.html#v:underlineAttr",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "System.Console.Terminfo.Effects",
        "fct-package": "terminfo",
        "fct-signature": "Bool",
        "fct-source": "src/System-Console-Terminfo-Effects.html#Attributes",
        "fct-type": "function",
        "title": "underlineAttr"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Terminfo Effects",
        "module": "System.Console.Terminfo.Effects",
        "name": "underlineAttr",
        "normalized": "",
        "package": "terminfo",
        "partial": "Attr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Effects.html#v:visualBell",
      "description": {
        "fct-descr": "\u003cp\u003ePresent a visual alert using the \u003ccode\u003eflash\u003c/code\u003e capability.\n\u003c/p\u003e",
        "fct-module": "System.Console.Terminfo.Effects",
        "fct-package": "terminfo",
        "fct-signature": "Capability TermOutput",
        "fct-source": "src/System-Console-Terminfo-Effects.html#visualBell",
        "fct-type": "function",
        "title": "visualBell"
      },
      "index": {
        "description": "Present visual alert using the flash capability",
        "hierarchy": "System Console Terminfo Effects",
        "module": "System.Console.Terminfo.Effects",
        "name": "visualBell",
        "normalized": "",
        "package": "terminfo",
        "partial": "Bell",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Effects.html#v:withAttributes",
      "description": {
        "fct-descr": "\u003cp\u003eSets the attributes on or off before outputting the given text,\n and then turns them all off.  This capability will always succeed; properties\n which cannot be set in the current terminal will be ignored.\n\u003c/p\u003e",
        "fct-module": "System.Console.Terminfo.Effects",
        "fct-package": "terminfo",
        "fct-signature": "Capability (Attributes -\u003e s -\u003e s)",
        "fct-source": "src/System-Console-Terminfo-Effects.html#withAttributes",
        "fct-type": "function",
        "title": "withAttributes"
      },
      "index": {
        "description": "Sets the attributes on or off before outputting the given text and then turns them all off This capability will always succeed properties which cannot be set in the current terminal will be ignored",
        "hierarchy": "System Console Terminfo Effects",
        "module": "System.Console.Terminfo.Effects",
        "name": "withAttributes",
        "normalized": "Capability(Attributes-\u003ea-\u003ea)",
        "package": "terminfo",
        "partial": "Attributes",
        "signature": "Capability(Attributes-\u003es-\u003es)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Effects.html#v:withBold",
      "description": {
        "fct-descr": "\u003cp\u003eTurns on bold mode before outputting the given text, and then turns\n all attributes off.\n\u003c/p\u003e",
        "fct-module": "System.Console.Terminfo.Effects",
        "fct-package": "terminfo",
        "fct-signature": "Capability (s -\u003e s)",
        "fct-source": "src/System-Console-Terminfo-Effects.html#withBold",
        "fct-type": "function",
        "title": "withBold"
      },
      "index": {
        "description": "Turns on bold mode before outputting the given text and then turns all attributes off",
        "hierarchy": "System Console Terminfo Effects",
        "module": "System.Console.Terminfo.Effects",
        "name": "withBold",
        "normalized": "Capability(a-\u003ea)",
        "package": "terminfo",
        "partial": "Bold",
        "signature": "Capability(s-\u003es)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Effects.html#v:withStandout",
      "description": {
        "fct-descr": "\u003cp\u003eTurns on standout mode before outputting the given\n text, and then turns it off.\n\u003c/p\u003e",
        "fct-module": "System.Console.Terminfo.Effects",
        "fct-package": "terminfo",
        "fct-signature": "Capability (s -\u003e s)",
        "fct-source": "src/System-Console-Terminfo-Effects.html#withStandout",
        "fct-type": "function",
        "title": "withStandout"
      },
      "index": {
        "description": "Turns on standout mode before outputting the given text and then turns it off",
        "hierarchy": "System Console Terminfo Effects",
        "module": "System.Console.Terminfo.Effects",
        "name": "withStandout",
        "normalized": "Capability(a-\u003ea)",
        "package": "terminfo",
        "partial": "Standout",
        "signature": "Capability(s-\u003es)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Effects.html#v:withUnderline",
      "description": {
        "fct-descr": "\u003cp\u003eTurns on underline mode before outputting the given\n text, and then turns it off.\n\u003c/p\u003e",
        "fct-module": "System.Console.Terminfo.Effects",
        "fct-package": "terminfo",
        "fct-signature": "Capability (s -\u003e s)",
        "fct-source": "src/System-Console-Terminfo-Effects.html#withUnderline",
        "fct-type": "function",
        "title": "withUnderline"
      },
      "index": {
        "description": "Turns on underline mode before outputting the given text and then turns it off",
        "hierarchy": "System Console Terminfo Effects",
        "module": "System.Console.Terminfo.Effects",
        "name": "withUnderline",
        "normalized": "Capability(a-\u003ea)",
        "package": "terminfo",
        "partial": "Underline",
        "signature": "Capability(s-\u003es)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Keys.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe string capabilities in this module are the character sequences\n corresponding to user input such as arrow keys and function keys.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.Console.Terminfo.Keys",
        "fct-package": "terminfo",
        "fct-signature": "module",
        "fct-source": "src/System-Console-Terminfo-Keys.html",
        "fct-type": "module",
        "title": "Keys"
      },
      "index": {
        "description": "The string capabilities in this module are the character sequences corresponding to user input such as arrow keys and function keys",
        "hierarchy": "System Console Terminfo Keys",
        "module": "System.Console.Terminfo.Keys",
        "name": "Keys",
        "normalized": "",
        "package": "terminfo",
        "partial": "Keys",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Keys.html#v:functionKey",
      "description": {
        "fct-descr": "\u003cp\u003eLook up the control sequence for a given function sequence.  For example, \n \u003ccode\u003efunctionKey 12\u003c/code\u003e retrieves the \u003ccode\u003ekf12\u003c/code\u003e capability.\n\u003c/p\u003e",
        "fct-module": "System.Console.Terminfo.Keys",
        "fct-package": "terminfo",
        "fct-signature": "Int -\u003e Capability String",
        "fct-source": "src/System-Console-Terminfo-Keys.html#functionKey",
        "fct-type": "function",
        "title": "functionKey"
      },
      "index": {
        "description": "Look up the control sequence for given function sequence For example functionKey retrieves the kf12 capability",
        "hierarchy": "System Console Terminfo Keys",
        "module": "System.Console.Terminfo.Keys",
        "name": "functionKey",
        "normalized": "Int-\u003eCapability String",
        "package": "terminfo",
        "partial": "Key",
        "signature": "Int-\u003eCapability String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Keys.html#v:keyBackspace",
      "description": {
        "fct-module": "System.Console.Terminfo.Keys",
        "fct-package": "terminfo",
        "fct-signature": "Capability String",
        "fct-source": "src/System-Console-Terminfo-Keys.html#keyBackspace",
        "fct-type": "function",
        "title": "keyBackspace"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Terminfo Keys",
        "module": "System.Console.Terminfo.Keys",
        "name": "keyBackspace",
        "normalized": "",
        "package": "terminfo",
        "partial": "Backspace",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Keys.html#v:keyDeleteChar",
      "description": {
        "fct-module": "System.Console.Terminfo.Keys",
        "fct-package": "terminfo",
        "fct-signature": "Capability String",
        "fct-source": "src/System-Console-Terminfo-Keys.html#keyDeleteChar",
        "fct-type": "function",
        "title": "keyDeleteChar"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Terminfo Keys",
        "module": "System.Console.Terminfo.Keys",
        "name": "keyDeleteChar",
        "normalized": "",
        "package": "terminfo",
        "partial": "Delete Char",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Keys.html#v:keyDown",
      "description": {
        "fct-module": "System.Console.Terminfo.Keys",
        "fct-package": "terminfo",
        "fct-signature": "Capability String",
        "fct-source": "src/System-Console-Terminfo-Keys.html#keyDown",
        "fct-type": "function",
        "title": "keyDown"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Terminfo Keys",
        "module": "System.Console.Terminfo.Keys",
        "name": "keyDown",
        "normalized": "",
        "package": "terminfo",
        "partial": "Down",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Keys.html#v:keyEnd",
      "description": {
        "fct-module": "System.Console.Terminfo.Keys",
        "fct-package": "terminfo",
        "fct-signature": "Capability String",
        "fct-source": "src/System-Console-Terminfo-Keys.html#keyEnd",
        "fct-type": "function",
        "title": "keyEnd"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Terminfo Keys",
        "module": "System.Console.Terminfo.Keys",
        "name": "keyEnd",
        "normalized": "",
        "package": "terminfo",
        "partial": "End",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Keys.html#v:keyEnter",
      "description": {
        "fct-module": "System.Console.Terminfo.Keys",
        "fct-package": "terminfo",
        "fct-signature": "Capability String",
        "fct-source": "src/System-Console-Terminfo-Keys.html#keyEnter",
        "fct-type": "function",
        "title": "keyEnter"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Terminfo Keys",
        "module": "System.Console.Terminfo.Keys",
        "name": "keyEnter",
        "normalized": "",
        "package": "terminfo",
        "partial": "Enter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Keys.html#v:keyHome",
      "description": {
        "fct-module": "System.Console.Terminfo.Keys",
        "fct-package": "terminfo",
        "fct-signature": "Capability String",
        "fct-source": "src/System-Console-Terminfo-Keys.html#keyHome",
        "fct-type": "function",
        "title": "keyHome"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Terminfo Keys",
        "module": "System.Console.Terminfo.Keys",
        "name": "keyHome",
        "normalized": "",
        "package": "terminfo",
        "partial": "Home",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Keys.html#v:keyLeft",
      "description": {
        "fct-module": "System.Console.Terminfo.Keys",
        "fct-package": "terminfo",
        "fct-signature": "Capability String",
        "fct-source": "src/System-Console-Terminfo-Keys.html#keyLeft",
        "fct-type": "function",
        "title": "keyLeft"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Terminfo Keys",
        "module": "System.Console.Terminfo.Keys",
        "name": "keyLeft",
        "normalized": "",
        "package": "terminfo",
        "partial": "Left",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Keys.html#v:keyPageDown",
      "description": {
        "fct-module": "System.Console.Terminfo.Keys",
        "fct-package": "terminfo",
        "fct-signature": "Capability String",
        "fct-source": "src/System-Console-Terminfo-Keys.html#keyPageDown",
        "fct-type": "function",
        "title": "keyPageDown"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Terminfo Keys",
        "module": "System.Console.Terminfo.Keys",
        "name": "keyPageDown",
        "normalized": "",
        "package": "terminfo",
        "partial": "Page Down",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Keys.html#v:keyPageUp",
      "description": {
        "fct-module": "System.Console.Terminfo.Keys",
        "fct-package": "terminfo",
        "fct-signature": "Capability String",
        "fct-source": "src/System-Console-Terminfo-Keys.html#keyPageUp",
        "fct-type": "function",
        "title": "keyPageUp"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Terminfo Keys",
        "module": "System.Console.Terminfo.Keys",
        "name": "keyPageUp",
        "normalized": "",
        "package": "terminfo",
        "partial": "Page Up",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Keys.html#v:keyRight",
      "description": {
        "fct-module": "System.Console.Terminfo.Keys",
        "fct-package": "terminfo",
        "fct-signature": "Capability String",
        "fct-source": "src/System-Console-Terminfo-Keys.html#keyRight",
        "fct-type": "function",
        "title": "keyRight"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Terminfo Keys",
        "module": "System.Console.Terminfo.Keys",
        "name": "keyRight",
        "normalized": "",
        "package": "terminfo",
        "partial": "Right",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Keys.html#v:keyUp",
      "description": {
        "fct-module": "System.Console.Terminfo.Keys",
        "fct-package": "terminfo",
        "fct-signature": "Capability String",
        "fct-source": "src/System-Console-Terminfo-Keys.html#keyUp",
        "fct-type": "function",
        "title": "keyUp"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Terminfo Keys",
        "module": "System.Console.Terminfo.Keys",
        "name": "keyUp",
        "normalized": "",
        "package": "terminfo",
        "partial": "Up",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Keys.html#v:keypadOff",
      "description": {
        "fct-module": "System.Console.Terminfo.Keys",
        "fct-package": "terminfo",
        "fct-signature": "Capability s",
        "fct-source": "src/System-Console-Terminfo-Keys.html#keypadOff",
        "fct-type": "function",
        "title": "keypadOff"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Terminfo Keys",
        "module": "System.Console.Terminfo.Keys",
        "name": "keypadOff",
        "normalized": "",
        "package": "terminfo",
        "partial": "Off",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Keys.html#v:keypadOn",
      "description": {
        "fct-module": "System.Console.Terminfo.Keys",
        "fct-package": "terminfo",
        "fct-signature": "Capability s",
        "fct-source": "src/System-Console-Terminfo-Keys.html#keypadOn",
        "fct-type": "function",
        "title": "keypadOn"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Terminfo Keys",
        "module": "System.Console.Terminfo.Keys",
        "name": "keypadOn",
        "normalized": "",
        "package": "terminfo",
        "partial": "On",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo.html#",
      "description": {
        "fct-module": "System.Console.Terminfo",
        "fct-package": "terminfo",
        "fct-signature": "module",
        "fct-source": "src/System-Console-Terminfo.html",
        "fct-type": "module",
        "title": "Terminfo"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Terminfo",
        "module": "System.Console.Terminfo",
        "name": "Terminfo",
        "normalized": "",
        "package": "terminfo",
        "partial": "Terminfo",
        "signature": ""
      }
    }
  }
]