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
        "word": "terminfo"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides a low-level interface to the C functions of the \n terminfo library. \n\u003c/p\u003e\u003cp\u003eNOTE: Since this library is built on top of the curses interface, it is not thread-safe.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Console.Terminfo.Base",
          "name": "Base",
          "package": "terminfo",
          "source": "src/System-Console-Terminfo-Base.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides low-level interface to the functions of the terminfo library NOTE Since this library is built on top of the curses interface it is not thread-safe",
          "hierarchy": "System Console Terminfo Base",
          "module": "System.Console.Terminfo.Base",
          "name": "Base",
          "package": "terminfo",
          "partial": "Base",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Base.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA feature or operation which a \u003ccode\u003e\u003ca\u003eTerminal\u003c/a\u003e\u003c/code\u003e may define.\n\u003c/p\u003e",
          "module": "System.Console.Terminfo.Base",
          "name": "Capability",
          "package": "terminfo",
          "source": "src/System-Console-Terminfo-Base.html#Capability",
          "type": "data"
        },
        "index": {
          "description": "feature or operation which Terminal may define",
          "hierarchy": "System Console Terminfo Base",
          "module": "System.Console.Terminfo.Base",
          "name": "Capability",
          "package": "terminfo",
          "partial": "Capability",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Base.html#t:Capability"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA parameter to specify the number of lines affected.  Some capabilities\n (e.g., \u003ccode\u003eclear\u003c/code\u003e and \u003ccode\u003edch1\u003c/code\u003e) use\n this parameter on some terminals to compute variable-length padding.\n\u003c/p\u003e",
          "module": "System.Console.Terminfo.Base",
          "name": "LinesAffected",
          "package": "terminfo",
          "source": "src/System-Console-Terminfo-Base.html#LinesAffected",
          "type": "type"
        },
        "index": {
          "description": "parameter to specify the number of lines affected Some capabilities e.g clear and dch1 use this parameter on some terminals to compute variable-length padding",
          "hierarchy": "System Console Terminfo Base",
          "module": "System.Console.Terminfo.Base",
          "name": "LinesAffected",
          "package": "terminfo",
          "partial": "Lines Affected",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Base.html#t:LinesAffected"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe class of monoids (types with an associative binary operation that\n has an identity).  Instances should satisfy the following laws:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003emappend mempty x = x\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003emappend x mempty = x\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003emappend x (mappend y z) = mappend (mappend x y) z\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003emconcat = \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e mappend mempty\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe method names refer to the monoid of lists under concatenation,\n but there are many other instances.\n\u003c/p\u003e\u003cp\u003eMinimal complete definition: \u003ccode\u003e\u003ca\u003emempty\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSome types can be viewed as a monoid in more than one way,\n e.g. both addition and multiplication on numbers.\n In such cases we often define \u003ccode\u003enewtype\u003c/code\u003es and make those instances\n of \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e, e.g. \u003ccode\u003e\u003ca\u003eSum\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eProduct\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Console.Terminfo.Base",
          "name": "Monoid",
          "package": "terminfo",
          "type": "class"
        },
        "index": {
          "description": "The class of monoids types with an associative binary operation that has an identity Instances should satisfy the following laws mappend mempty mappend mempty mappend mappend mappend mappend mconcat foldr mappend mempty The method names refer to the monoid of lists under concatenation but there are many other instances Minimal complete definition mempty and mappend Some types can be viewed as monoid in more than one way e.g both addition and multiplication on numbers In such cases we often define newtype and make those instances of Monoid e.g Sum and Product",
          "hierarchy": "System Console Terminfo Base",
          "module": "System.Console.Terminfo.Base",
          "name": "Monoid",
          "package": "terminfo",
          "partial": "Monoid",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Base.html#t:Monoid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Terminfo.Base",
          "name": "OutputCap",
          "package": "terminfo",
          "source": "src/System-Console-Terminfo-Base.html#OutputCap",
          "type": "class"
        },
        "index": {
          "hierarchy": "System Console Terminfo Base",
          "module": "System.Console.Terminfo.Base",
          "name": "OutputCap",
          "package": "terminfo",
          "partial": "Output Cap",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Base.html#t:OutputCap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Terminfo.Base",
          "name": "SetupTermError",
          "package": "terminfo",
          "source": "src/System-Console-Terminfo-Base.html#SetupTermError",
          "type": "data"
        },
        "index": {
          "hierarchy": "System Console Terminfo Base",
          "module": "System.Console.Terminfo.Base",
          "name": "SetupTermError",
          "package": "terminfo",
          "partial": "Setup Term Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Base.html#t:SetupTermError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn action which sends output to the terminal.  That output may mix plain text with control\n characters and escape sequences, along with delays (called \"padding\") required by some older\n terminals.\n\u003c/p\u003e",
          "module": "System.Console.Terminfo.Base",
          "name": "TermOutput",
          "package": "terminfo",
          "source": "src/System-Console-Terminfo-Base.html#TermOutput",
          "type": "data"
        },
        "index": {
          "description": "An action which sends output to the terminal That output may mix plain text with control characters and escape sequences along with delays called padding required by some older terminals",
          "hierarchy": "System Console Terminfo Base",
          "module": "System.Console.Terminfo.Base",
          "name": "TermOutput",
          "package": "terminfo",
          "partial": "Term Output",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Base.html#t:TermOutput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Terminfo.Base",
          "name": "TermStr",
          "package": "terminfo",
          "source": "src/System-Console-Terminfo-Base.html#TermStr",
          "type": "class"
        },
        "index": {
          "hierarchy": "System Console Terminfo Base",
          "module": "System.Console.Terminfo.Base",
          "name": "TermStr",
          "package": "terminfo",
          "partial": "Term Str",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Base.html#t:TermStr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Terminfo.Base",
          "name": "Terminal",
          "package": "terminfo",
          "source": "src/System-Console-Terminfo-Base.html#Terminal",
          "type": "data"
        },
        "index": {
          "hierarchy": "System Console Terminfo Base",
          "module": "System.Console.Terminfo.Base",
          "name": "Terminal",
          "package": "terminfo",
          "partial": "Terminal",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Base.html#t:Terminal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn operator version of \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Console.Terminfo.Base",
          "name": "(\u003c#\u003e)",
          "package": "terminfo",
          "signature": "m -\u003e m -\u003e m",
          "source": "src/System-Console-Terminfo-Base.html#%3C%23%3E",
          "type": "function"
        },
        "index": {
          "description": "An operator version of mappend",
          "hierarchy": "System Console Terminfo Base",
          "module": "System.Console.Terminfo.Base",
          "name": "(\u003c#\u003e) \u003c#\u003e",
          "normalized": "a-\u003ea-\u003ea",
          "package": "terminfo",
          "signature": "m-\u003em-\u003em",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Base.html#v:-60--35--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Terminfo.Base",
          "name": "getCapability",
          "package": "terminfo",
          "signature": "Terminal -\u003e Capability a -\u003e Maybe a",
          "source": "src/System-Console-Terminfo-Base.html#getCapability",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Terminfo Base",
          "module": "System.Console.Terminfo.Base",
          "name": "getCapability",
          "normalized": "Terminal-\u003eCapability a-\u003eMaybe a",
          "package": "terminfo",
          "partial": "Capability",
          "signature": "Terminal-\u003eCapability a-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Base.html#v:getCapability"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite the terminal output to the terminal or file managed by the given\n \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Console.Terminfo.Base",
          "name": "hRunTermOutput",
          "package": "terminfo",
          "signature": "Handle -\u003e Terminal -\u003e TermOutput -\u003e IO ()",
          "source": "src/System-Console-Terminfo-Base.html#hRunTermOutput",
          "type": "function"
        },
        "index": {
          "description": "Write the terminal output to the terminal or file managed by the given Handle",
          "hierarchy": "System Console Terminfo Base",
          "module": "System.Console.Terminfo.Base",
          "name": "hRunTermOutput",
          "normalized": "Handle-\u003eTerminal-\u003eTermOutput-\u003eIO()",
          "package": "terminfo",
          "partial": "Run Term Output",
          "signature": "Handle-\u003eTerminal-\u003eTermOutput-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Base.html#v:hRunTermOutput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn associative operation\n\u003c/p\u003e",
          "module": "System.Console.Terminfo.Base",
          "name": "mappend",
          "package": "terminfo",
          "signature": "a -\u003e a -\u003e a",
          "type": "method"
        },
        "index": {
          "description": "An associative operation",
          "hierarchy": "System Console Terminfo Base",
          "module": "System.Console.Terminfo.Base",
          "name": "mappend",
          "normalized": "a-\u003ea-\u003ea",
          "package": "terminfo",
          "signature": "a-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Base.html#v:mappend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFold a list using the monoid.\n For most types, the default definition for \u003ccode\u003e\u003ca\u003emconcat\u003c/a\u003e\u003c/code\u003e will be\n used, but the function is included in the class definition so\n that an optimized version can be provided for specific types.\n\u003c/p\u003e",
          "module": "System.Console.Terminfo.Base",
          "name": "mconcat",
          "package": "terminfo",
          "signature": "[a] -\u003e a",
          "type": "method"
        },
        "index": {
          "description": "Fold list using the monoid For most types the default definition for mconcat will be used but the function is included in the class definition so that an optimized version can be provided for specific types",
          "hierarchy": "System Console Terminfo Base",
          "module": "System.Console.Terminfo.Base",
          "name": "mconcat",
          "normalized": "[a]-\u003ea",
          "package": "terminfo",
          "signature": "[a]-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Base.html#v:mconcat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIdentity of \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "System.Console.Terminfo.Base",
          "name": "mempty",
          "package": "terminfo",
          "signature": "a",
          "type": "method"
        },
        "index": {
          "description": "Identity of mappend",
          "hierarchy": "System Console Terminfo Base",
          "module": "System.Console.Terminfo.Base",
          "name": "mempty",
          "package": "terminfo",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Base.html#v:mempty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite the terminal output to the standard output device.\n\u003c/p\u003e",
          "module": "System.Console.Terminfo.Base",
          "name": "runTermOutput",
          "package": "terminfo",
          "signature": "Terminal -\u003e TermOutput -\u003e IO ()",
          "source": "src/System-Console-Terminfo-Base.html#runTermOutput",
          "type": "function"
        },
        "index": {
          "description": "Write the terminal output to the standard output device",
          "hierarchy": "System Console Terminfo Base",
          "module": "System.Console.Terminfo.Base",
          "name": "runTermOutput",
          "normalized": "Terminal-\u003eTermOutput-\u003eIO()",
          "package": "terminfo",
          "partial": "Term Output",
          "signature": "Terminal-\u003eTermOutput-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Base.html#v:runTermOutput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInitialize the terminfo library to the given terminal entry.\n\u003c/p\u003e\u003cp\u003eThrows a \u003ccode\u003e\u003ca\u003eSetupTermError\u003c/a\u003e\u003c/code\u003e if the terminfo database could not be read.\n\u003c/p\u003e",
          "module": "System.Console.Terminfo.Base",
          "name": "setupTerm",
          "package": "terminfo",
          "signature": "String -\u003e IO Terminal",
          "source": "src/System-Console-Terminfo-Base.html#setupTerm",
          "type": "function"
        },
        "index": {
          "description": "Initialize the terminfo library to the given terminal entry Throws SetupTermError if the terminfo database could not be read",
          "hierarchy": "System Console Terminfo Base",
          "module": "System.Console.Terminfo.Base",
          "name": "setupTerm",
          "normalized": "String-\u003eIO Terminal",
          "package": "terminfo",
          "partial": "Term",
          "signature": "String-\u003eIO Terminal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Base.html#v:setupTerm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInitialize the terminfo library, using the \u003ccode\u003eTERM\u003c/code\u003e environmental variable.\n If \u003ccode\u003eTERM\u003c/code\u003e is not set, we use the generic, minimal entry \u003ccode\u003edumb\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThrows a \u003ccode\u003e\u003ca\u003eSetupTermError\u003c/a\u003e\u003c/code\u003e if the terminfo database could not be read.\n\u003c/p\u003e",
          "module": "System.Console.Terminfo.Base",
          "name": "setupTermFromEnv",
          "package": "terminfo",
          "signature": "IO Terminal",
          "source": "src/System-Console-Terminfo-Base.html#setupTermFromEnv",
          "type": "function"
        },
        "index": {
          "description": "Initialize the terminfo library using the TERM environmental variable If TERM is not set we use the generic minimal entry dumb Throws SetupTermError if the terminfo database could not be read",
          "hierarchy": "System Console Terminfo Base",
          "module": "System.Console.Terminfo.Base",
          "name": "setupTermFromEnv",
          "package": "terminfo",
          "partial": "Term From Env",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Base.html#v:setupTermFromEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Terminfo.Base",
          "name": "termText",
          "package": "terminfo",
          "signature": "String -\u003e TermOutput",
          "source": "src/System-Console-Terminfo-Base.html#termText",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Terminfo Base",
          "module": "System.Console.Terminfo.Base",
          "name": "termText",
          "normalized": "String-\u003eTermOutput",
          "package": "terminfo",
          "partial": "Text",
          "signature": "String-\u003eTermOutput",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Base.html#v:termText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLook up a boolean capability in the terminfo database.  \n\u003c/p\u003e\u003cp\u003eUnlike \u003ccode\u003e\u003ca\u003etiGuardFlag\u003c/a\u003e\u003c/code\u003e, this capability never fails; it returns \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e if the\n capability is absent or set to false, and returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e otherwise.  \n\u003c/p\u003e",
          "module": "System.Console.Terminfo.Base",
          "name": "tiGetFlag",
          "package": "terminfo",
          "signature": "String -\u003e Capability Bool",
          "source": "src/System-Console-Terminfo-Base.html#tiGetFlag",
          "type": "function"
        },
        "index": {
          "description": "Look up boolean capability in the terminfo database Unlike tiGuardFlag this capability never fails it returns False if the capability is absent or set to false and returns True otherwise",
          "hierarchy": "System Console Terminfo Base",
          "module": "System.Console.Terminfo.Base",
          "name": "tiGetFlag",
          "normalized": "String-\u003eCapability Bool",
          "package": "terminfo",
          "partial": "Get Flag",
          "signature": "String-\u003eCapability Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Base.html#v:tiGetFlag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLook up a numeric capability in the terminfo database.\n\u003c/p\u003e",
          "module": "System.Console.Terminfo.Base",
          "name": "tiGetNum",
          "package": "terminfo",
          "signature": "String -\u003e Capability Int",
          "source": "src/System-Console-Terminfo-Base.html#tiGetNum",
          "type": "function"
        },
        "index": {
          "description": "Look up numeric capability in the terminfo database",
          "hierarchy": "System Console Terminfo Base",
          "module": "System.Console.Terminfo.Base",
          "name": "tiGetNum",
          "normalized": "String-\u003eCapability Int",
          "package": "terminfo",
          "partial": "Get Num",
          "signature": "String-\u003eCapability Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Base.html#v:tiGetNum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLook up an output capability in the terminfo database.  \n\u003c/p\u003e",
          "module": "System.Console.Terminfo.Base",
          "name": "tiGetOutput",
          "package": "terminfo",
          "signature": "String -\u003e Capability ([Int] -\u003e LinesAffected -\u003e TermOutput)",
          "source": "src/System-Console-Terminfo-Base.html#tiGetOutput",
          "type": "function"
        },
        "index": {
          "description": "Look up an output capability in the terminfo database",
          "hierarchy": "System Console Terminfo Base",
          "module": "System.Console.Terminfo.Base",
          "name": "tiGetOutput",
          "normalized": "String-\u003eCapability([Int]-\u003eLinesAffected-\u003eTermOutput)",
          "package": "terminfo",
          "partial": "Get Output",
          "signature": "String-\u003eCapability([Int]-\u003eLinesAffected-\u003eTermOutput)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Base.html#v:tiGetOutput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLook up an output capability which takes a fixed number of parameters\n (for example, \u003ccode\u003eInt -\u003e Int -\u003e TermOutput\u003c/code\u003e).\n\u003c/p\u003e\u003cp\u003eFor capabilities which may contain variable-length\n padding, use \u003ccode\u003e\u003ca\u003etiGetOutput\u003c/a\u003e\u003c/code\u003e instead.\n\u003c/p\u003e",
          "module": "System.Console.Terminfo.Base",
          "name": "tiGetOutput1",
          "package": "terminfo",
          "signature": "String -\u003e Capability f",
          "source": "src/System-Console-Terminfo-Base.html#tiGetOutput1",
          "type": "function"
        },
        "index": {
          "description": "Look up an output capability which takes fixed number of parameters for example Int Int TermOutput For capabilities which may contain variable-length padding use tiGetOutput instead",
          "hierarchy": "System Console Terminfo Base",
          "module": "System.Console.Terminfo.Base",
          "name": "tiGetOutput1",
          "normalized": "String-\u003eCapability a",
          "package": "terminfo",
          "partial": "Get Output",
          "signature": "String-\u003eCapability f",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Base.html#v:tiGetOutput1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: use tiGetOutput instead.\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eLook up a string capability in the terminfo database.  NOTE: This function is deprecated; use\n \u003ccode\u003e\u003ca\u003etiGetOutput1\u003c/a\u003e\u003c/code\u003e instead.\n\u003c/p\u003e",
          "module": "System.Console.Terminfo.Base",
          "name": "tiGetStr",
          "package": "terminfo",
          "signature": "String -\u003e Capability String",
          "source": "src/System-Console-Terminfo-Base.html#tiGetStr",
          "type": "function"
        },
        "index": {
          "description": "Deprecated use tiGetOutput instead Look up string capability in the terminfo database NOTE This function is deprecated use tiGetOutput1 instead",
          "hierarchy": "System Console Terminfo Base",
          "module": "System.Console.Terminfo.Base",
          "name": "tiGetStr",
          "normalized": "String-\u003eCapability String",
          "package": "terminfo",
          "partial": "Get Str",
          "signature": "String-\u003eCapability String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Base.html#v:tiGetStr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLook up a boolean capability in the terminfo database, and fail if\n it's not defined.\n\u003c/p\u003e",
          "module": "System.Console.Terminfo.Base",
          "name": "tiGuardFlag",
          "package": "terminfo",
          "signature": "String -\u003e Capability ()",
          "source": "src/System-Console-Terminfo-Base.html#tiGuardFlag",
          "type": "function"
        },
        "index": {
          "description": "Look up boolean capability in the terminfo database and fail if it not defined",
          "hierarchy": "System Console Terminfo Base",
          "module": "System.Console.Terminfo.Base",
          "name": "tiGuardFlag",
          "normalized": "String-\u003eCapability()",
          "package": "terminfo",
          "partial": "Guard Flag",
          "signature": "String-\u003eCapability()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Base.html#v:tiGuardFlag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Terminfo.Color",
          "name": "Color",
          "package": "terminfo",
          "source": "src/System-Console-Terminfo-Color.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "System Console Terminfo Color",
          "module": "System.Console.Terminfo.Color",
          "name": "Color",
          "package": "terminfo",
          "partial": "Color",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Color.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Terminfo.Color",
          "name": "Color",
          "package": "terminfo",
          "source": "src/System-Console-Terminfo-Color.html#Color",
          "type": "data"
        },
        "index": {
          "hierarchy": "System Console Terminfo Color",
          "module": "System.Console.Terminfo.Color",
          "name": "Color",
          "package": "terminfo",
          "partial": "Color",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Color.html#t:Color"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Terminfo.Color",
          "name": "Black",
          "package": "terminfo",
          "signature": "Black",
          "source": "src/System-Console-Terminfo-Color.html#Color",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Terminfo Color",
          "module": "System.Console.Terminfo.Color",
          "name": "Black",
          "package": "terminfo",
          "partial": "Black",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Color.html#v:Black"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Terminfo.Color",
          "name": "Blue",
          "package": "terminfo",
          "signature": "Blue",
          "source": "src/System-Console-Terminfo-Color.html#Color",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Terminfo Color",
          "module": "System.Console.Terminfo.Color",
          "name": "Blue",
          "package": "terminfo",
          "partial": "Blue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Color.html#v:Blue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Terminfo.Color",
          "name": "ColorNumber",
          "package": "terminfo",
          "signature": "ColorNumber Int",
          "source": "src/System-Console-Terminfo-Color.html#Color",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Terminfo Color",
          "module": "System.Console.Terminfo.Color",
          "name": "ColorNumber",
          "package": "terminfo",
          "partial": "Color Number",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Color.html#v:ColorNumber"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Terminfo.Color",
          "name": "Cyan",
          "package": "terminfo",
          "signature": "Cyan",
          "source": "src/System-Console-Terminfo-Color.html#Color",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Terminfo Color",
          "module": "System.Console.Terminfo.Color",
          "name": "Cyan",
          "package": "terminfo",
          "partial": "Cyan",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Color.html#v:Cyan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Terminfo.Color",
          "name": "Green",
          "package": "terminfo",
          "signature": "Green",
          "source": "src/System-Console-Terminfo-Color.html#Color",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Terminfo Color",
          "module": "System.Console.Terminfo.Color",
          "name": "Green",
          "package": "terminfo",
          "partial": "Green",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Color.html#v:Green"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Terminfo.Color",
          "name": "Magenta",
          "package": "terminfo",
          "signature": "Magenta",
          "source": "src/System-Console-Terminfo-Color.html#Color",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Terminfo Color",
          "module": "System.Console.Terminfo.Color",
          "name": "Magenta",
          "package": "terminfo",
          "partial": "Magenta",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Color.html#v:Magenta"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Terminfo.Color",
          "name": "Red",
          "package": "terminfo",
          "signature": "Red",
          "source": "src/System-Console-Terminfo-Color.html#Color",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Terminfo Color",
          "module": "System.Console.Terminfo.Color",
          "name": "Red",
          "package": "terminfo",
          "partial": "Red",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Color.html#v:Red"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Terminfo.Color",
          "name": "White",
          "package": "terminfo",
          "signature": "White",
          "source": "src/System-Console-Terminfo-Color.html#Color",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Terminfo Color",
          "module": "System.Console.Terminfo.Color",
          "name": "White",
          "package": "terminfo",
          "partial": "White",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Color.html#v:White"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Terminfo.Color",
          "name": "Yellow",
          "package": "terminfo",
          "signature": "Yellow",
          "source": "src/System-Console-Terminfo-Color.html#Color",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Terminfo Color",
          "module": "System.Console.Terminfo.Color",
          "name": "Yellow",
          "package": "terminfo",
          "partial": "Yellow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Color.html#v:Yellow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRestores foreground/background colors to their original\n settings.\n\u003c/p\u003e",
          "module": "System.Console.Terminfo.Color",
          "name": "restoreDefaultColors",
          "package": "terminfo",
          "signature": "Capability s",
          "source": "src/System-Console-Terminfo-Color.html#restoreDefaultColors",
          "type": "function"
        },
        "index": {
          "description": "Restores foreground background colors to their original settings",
          "hierarchy": "System Console Terminfo Color",
          "module": "System.Console.Terminfo.Color",
          "name": "restoreDefaultColors",
          "package": "terminfo",
          "partial": "Default Colors",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Color.html#v:restoreDefaultColors"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets the background color of all further text output, using\n either the \u003ccode\u003esetab\u003c/code\u003e or \u003ccode\u003esetb\u003c/code\u003e capability.\n\u003c/p\u003e",
          "module": "System.Console.Terminfo.Color",
          "name": "setBackgroundColor",
          "package": "terminfo",
          "signature": "Capability (Color -\u003e s)",
          "source": "src/System-Console-Terminfo-Color.html#setBackgroundColor",
          "type": "function"
        },
        "index": {
          "description": "Sets the background color of all further text output using either the setab or setb capability",
          "hierarchy": "System Console Terminfo Color",
          "module": "System.Console.Terminfo.Color",
          "name": "setBackgroundColor",
          "normalized": "Capability(Color-\u003ea)",
          "package": "terminfo",
          "partial": "Background Color",
          "signature": "Capability(Color-\u003es)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Color.html#v:setBackgroundColor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets the foreground color of all further text output, using\n either the \u003ccode\u003esetaf\u003c/code\u003e or \u003ccode\u003esetf\u003c/code\u003e capability.\n\u003c/p\u003e",
          "module": "System.Console.Terminfo.Color",
          "name": "setForegroundColor",
          "package": "terminfo",
          "signature": "Capability (Color -\u003e s)",
          "source": "src/System-Console-Terminfo-Color.html#setForegroundColor",
          "type": "function"
        },
        "index": {
          "description": "Sets the foreground color of all further text output using either the setaf or setf capability",
          "hierarchy": "System Console Terminfo Color",
          "module": "System.Console.Terminfo.Color",
          "name": "setForegroundColor",
          "normalized": "Capability(Color-\u003ea)",
          "package": "terminfo",
          "partial": "Foreground Color",
          "signature": "Capability(Color-\u003es)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Color.html#v:setForegroundColor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe maximum number of of colors on the screen.\n\u003c/p\u003e",
          "module": "System.Console.Terminfo.Color",
          "name": "termColors",
          "package": "terminfo",
          "signature": "Capability Int",
          "source": "src/System-Console-Terminfo-Color.html#termColors",
          "type": "function"
        },
        "index": {
          "description": "The maximum number of of colors on the screen",
          "hierarchy": "System Console Terminfo Color",
          "module": "System.Console.Terminfo.Color",
          "name": "termColors",
          "package": "terminfo",
          "partial": "Colors",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Color.html#v:termColors"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis capability temporarily sets the\n terminal's background color while outputting the given text, and\n then restores the terminal to its default foreground and background\n colors.\n\u003c/p\u003e",
          "module": "System.Console.Terminfo.Color",
          "name": "withBackgroundColor",
          "package": "terminfo",
          "signature": "Capability (Color -\u003e s -\u003e s)",
          "source": "src/System-Console-Terminfo-Color.html#withBackgroundColor",
          "type": "function"
        },
        "index": {
          "description": "This capability temporarily sets the terminal background color while outputting the given text and then restores the terminal to its default foreground and background colors",
          "hierarchy": "System Console Terminfo Color",
          "module": "System.Console.Terminfo.Color",
          "name": "withBackgroundColor",
          "normalized": "Capability(Color-\u003ea-\u003ea)",
          "package": "terminfo",
          "partial": "Background Color",
          "signature": "Capability(Color-\u003es-\u003es)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Color.html#v:withBackgroundColor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis capability temporarily sets the\n terminal's foreground color while outputting the given text, and\n then restores the terminal to its default foreground and background\n colors.\n\u003c/p\u003e",
          "module": "System.Console.Terminfo.Color",
          "name": "withForegroundColor",
          "package": "terminfo",
          "signature": "Capability (Color -\u003e s -\u003e s)",
          "source": "src/System-Console-Terminfo-Color.html#withForegroundColor",
          "type": "function"
        },
        "index": {
          "description": "This capability temporarily sets the terminal foreground color while outputting the given text and then restores the terminal to its default foreground and background colors",
          "hierarchy": "System Console Terminfo Color",
          "module": "System.Console.Terminfo.Color",
          "name": "withForegroundColor",
          "normalized": "Capability(Color-\u003ea-\u003ea)",
          "package": "terminfo",
          "partial": "Foreground Color",
          "signature": "Capability(Color-\u003es-\u003es)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Color.html#v:withForegroundColor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides capabilities for moving the cursor on the terminal.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Console.Terminfo.Cursor",
          "name": "Cursor",
          "package": "terminfo",
          "source": "src/System-Console-Terminfo-Cursor.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides capabilities for moving the cursor on the terminal",
          "hierarchy": "System Console Terminfo Cursor",
          "module": "System.Console.Terminfo.Cursor",
          "name": "Cursor",
          "package": "terminfo",
          "partial": "Cursor",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Cursor.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Terminfo.Cursor",
          "name": "Point",
          "package": "terminfo",
          "source": "src/System-Console-Terminfo-Cursor.html#Point",
          "type": "data"
        },
        "index": {
          "hierarchy": "System Console Terminfo Cursor",
          "module": "System.Console.Terminfo.Cursor",
          "name": "Point",
          "package": "terminfo",
          "partial": "Point",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Cursor.html#t:Point"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Terminfo.Cursor",
          "name": "Point",
          "package": "terminfo",
          "signature": "Point",
          "source": "src/System-Console-Terminfo-Cursor.html#Point",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Terminfo Cursor",
          "module": "System.Console.Terminfo.Cursor",
          "name": "Point",
          "package": "terminfo",
          "partial": "Point",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Cursor.html#v:Point"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis flag specifies that a backspace at column 0 wraps the cursor to\n the last column of the previous line.\n\u003c/p\u003e",
          "module": "System.Console.Terminfo.Cursor",
          "name": "autoLeftMargin",
          "package": "terminfo",
          "signature": "Capability Bool",
          "source": "src/System-Console-Terminfo-Cursor.html#autoLeftMargin",
          "type": "function"
        },
        "index": {
          "description": "This flag specifies that backspace at column wraps the cursor to the last column of the previous line",
          "hierarchy": "System Console Terminfo Cursor",
          "module": "System.Console.Terminfo.Cursor",
          "name": "autoLeftMargin",
          "package": "terminfo",
          "partial": "Left Margin",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Cursor.html#v:autoLeftMargin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis flag specifies that the cursor wraps automatically from the last \n column of one line to the first column of the next.\n\u003c/p\u003e",
          "module": "System.Console.Terminfo.Cursor",
          "name": "autoRightMargin",
          "package": "terminfo",
          "signature": "Capability Bool",
          "source": "src/System-Console-Terminfo-Cursor.html#autoRightMargin",
          "type": "function"
        },
        "index": {
          "description": "This flag specifies that the cursor wraps automatically from the last column of one line to the first column of the next",
          "hierarchy": "System Console Terminfo Cursor",
          "module": "System.Console.Terminfo.Cursor",
          "name": "autoRightMargin",
          "package": "terminfo",
          "partial": "Right Margin",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Cursor.html#v:autoRightMargin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003ecr\u003c/code\u003e capability, which moves the cursor to the first column of the\n current line.\n\u003c/p\u003e",
          "module": "System.Console.Terminfo.Cursor",
          "name": "carriageReturn",
          "package": "terminfo",
          "signature": "Capability s",
          "source": "src/System-Console-Terminfo-Cursor.html#carriageReturn",
          "type": "function"
        },
        "index": {
          "description": "The cr capability which moves the cursor to the first column of the current line",
          "hierarchy": "System Console Terminfo Cursor",
          "module": "System.Console.Terminfo.Cursor",
          "name": "carriageReturn",
          "package": "terminfo",
          "partial": "Return",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Cursor.html#v:carriageReturn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Terminfo.Cursor",
          "name": "col",
          "package": "terminfo",
          "signature": "Int",
          "source": "src/System-Console-Terminfo-Cursor.html#Point",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Terminfo Cursor",
          "module": "System.Console.Terminfo.Cursor",
          "name": "col",
          "package": "terminfo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Cursor.html#v:col"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Terminfo.Cursor",
          "name": "columnAddress",
          "package": "terminfo",
          "signature": "Capability (Int -\u003e s)",
          "source": "src/System-Console-Terminfo-Cursor.html#columnAddress",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Terminfo Cursor",
          "module": "System.Console.Terminfo.Cursor",
          "name": "columnAddress",
          "normalized": "Capability(Int-\u003ea)",
          "package": "terminfo",
          "partial": "Address",
          "signature": "Capability(Int-\u003es)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Cursor.html#v:columnAddress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Terminfo.Cursor",
          "name": "cursorAddress",
          "package": "terminfo",
          "signature": "Capability (Point -\u003e s)",
          "source": "src/System-Console-Terminfo-Cursor.html#cursorAddress",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Terminfo Cursor",
          "module": "System.Console.Terminfo.Cursor",
          "name": "cursorAddress",
          "normalized": "Capability(Point-\u003ea)",
          "package": "terminfo",
          "partial": "Address",
          "signature": "Capability(Point-\u003es)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Cursor.html#v:cursorAddress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Terminfo.Cursor",
          "name": "cursorDown",
          "package": "terminfo",
          "signature": "Capability (Int -\u003e s)",
          "source": "src/System-Console-Terminfo-Cursor.html#cursorDown",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Terminfo Cursor",
          "module": "System.Console.Terminfo.Cursor",
          "name": "cursorDown",
          "normalized": "Capability(Int-\u003ea)",
          "package": "terminfo",
          "partial": "Down",
          "signature": "Capability(Int-\u003es)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Cursor.html#v:cursorDown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Terminfo.Cursor",
          "name": "cursorDown1",
          "package": "terminfo",
          "signature": "Capability s",
          "source": "src/System-Console-Terminfo-Cursor.html#cursorDown1",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Terminfo Cursor",
          "module": "System.Console.Terminfo.Cursor",
          "name": "cursorDown1",
          "package": "terminfo",
          "partial": "Down",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Cursor.html#v:cursorDown1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Terminfo.Cursor",
          "name": "cursorHome",
          "package": "terminfo",
          "signature": "Capability s",
          "source": "src/System-Console-Terminfo-Cursor.html#cursorHome",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Terminfo Cursor",
          "module": "System.Console.Terminfo.Cursor",
          "name": "cursorHome",
          "package": "terminfo",
          "partial": "Home",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Cursor.html#v:cursorHome"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Terminfo.Cursor",
          "name": "cursorLeft",
          "package": "terminfo",
          "signature": "Capability (Int -\u003e s)",
          "source": "src/System-Console-Terminfo-Cursor.html#cursorLeft",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Terminfo Cursor",
          "module": "System.Console.Terminfo.Cursor",
          "name": "cursorLeft",
          "normalized": "Capability(Int-\u003ea)",
          "package": "terminfo",
          "partial": "Left",
          "signature": "Capability(Int-\u003es)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Cursor.html#v:cursorLeft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Terminfo.Cursor",
          "name": "cursorLeft1",
          "package": "terminfo",
          "signature": "Capability s",
          "source": "src/System-Console-Terminfo-Cursor.html#cursorLeft1",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Terminfo Cursor",
          "module": "System.Console.Terminfo.Cursor",
          "name": "cursorLeft1",
          "package": "terminfo",
          "partial": "Left",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Cursor.html#v:cursorLeft1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Terminfo.Cursor",
          "name": "cursorRight",
          "package": "terminfo",
          "signature": "Capability (Int -\u003e s)",
          "source": "src/System-Console-Terminfo-Cursor.html#cursorRight",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Terminfo Cursor",
          "module": "System.Console.Terminfo.Cursor",
          "name": "cursorRight",
          "normalized": "Capability(Int-\u003ea)",
          "package": "terminfo",
          "partial": "Right",
          "signature": "Capability(Int-\u003es)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Cursor.html#v:cursorRight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Terminfo.Cursor",
          "name": "cursorRight1",
          "package": "terminfo",
          "signature": "Capability s",
          "source": "src/System-Console-Terminfo-Cursor.html#cursorRight1",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Terminfo Cursor",
          "module": "System.Console.Terminfo.Cursor",
          "name": "cursorRight1",
          "package": "terminfo",
          "partial": "Right",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Cursor.html#v:cursorRight1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Terminfo.Cursor",
          "name": "cursorToLL",
          "package": "terminfo",
          "signature": "Capability s",
          "source": "src/System-Console-Terminfo-Cursor.html#cursorToLL",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Terminfo Cursor",
          "module": "System.Console.Terminfo.Cursor",
          "name": "cursorToLL",
          "package": "terminfo",
          "partial": "To LL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Cursor.html#v:cursorToLL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Terminfo.Cursor",
          "name": "cursorUp",
          "package": "terminfo",
          "signature": "Capability (Int -\u003e s)",
          "source": "src/System-Console-Terminfo-Cursor.html#cursorUp",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Terminfo Cursor",
          "module": "System.Console.Terminfo.Cursor",
          "name": "cursorUp",
          "normalized": "Capability(Int-\u003ea)",
          "package": "terminfo",
          "partial": "Up",
          "signature": "Capability(Int-\u003es)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Cursor.html#v:cursorUp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Terminfo.Cursor",
          "name": "cursorUp1",
          "package": "terminfo",
          "signature": "Capability s",
          "source": "src/System-Console-Terminfo-Cursor.html#cursorUp1",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Terminfo Cursor",
          "module": "System.Console.Terminfo.Cursor",
          "name": "cursorUp1",
          "package": "terminfo",
          "partial": "Up",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Cursor.html#v:cursorUp1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Terminfo.Cursor",
          "name": "moveDown",
          "package": "terminfo",
          "signature": "Capability (Int -\u003e s)",
          "source": "src/System-Console-Terminfo-Cursor.html#moveDown",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Terminfo Cursor",
          "module": "System.Console.Terminfo.Cursor",
          "name": "moveDown",
          "normalized": "Capability(Int-\u003ea)",
          "package": "terminfo",
          "partial": "Down",
          "signature": "Capability(Int-\u003es)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Cursor.html#v:moveDown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Terminfo.Cursor",
          "name": "moveLeft",
          "package": "terminfo",
          "signature": "Capability (Int -\u003e s)",
          "source": "src/System-Console-Terminfo-Cursor.html#moveLeft",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Terminfo Cursor",
          "module": "System.Console.Terminfo.Cursor",
          "name": "moveLeft",
          "normalized": "Capability(Int-\u003ea)",
          "package": "terminfo",
          "partial": "Left",
          "signature": "Capability(Int-\u003es)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Cursor.html#v:moveLeft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Terminfo.Cursor",
          "name": "moveRight",
          "package": "terminfo",
          "signature": "Capability (Int -\u003e s)",
          "source": "src/System-Console-Terminfo-Cursor.html#moveRight",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Terminfo Cursor",
          "module": "System.Console.Terminfo.Cursor",
          "name": "moveRight",
          "normalized": "Capability(Int-\u003ea)",
          "package": "terminfo",
          "partial": "Right",
          "signature": "Capability(Int-\u003es)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Cursor.html#v:moveRight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Terminfo.Cursor",
          "name": "moveUp",
          "package": "terminfo",
          "signature": "Capability (Int -\u003e s)",
          "source": "src/System-Console-Terminfo-Cursor.html#moveUp",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Terminfo Cursor",
          "module": "System.Console.Terminfo.Cursor",
          "name": "moveUp",
          "normalized": "Capability(Int-\u003ea)",
          "package": "terminfo",
          "partial": "Up",
          "signature": "Capability(Int-\u003es)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Cursor.html#v:moveUp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003enel\u003c/code\u003e capability, which moves the cursor to the first column of\n the next line.  It behaves like a carriage return followed by a line feed.\n\u003c/p\u003e\u003cp\u003eIf \u003ccode\u003enel\u003c/code\u003e is not defined, this may be built out of other capabilities.\n\u003c/p\u003e",
          "module": "System.Console.Terminfo.Cursor",
          "name": "newline",
          "package": "terminfo",
          "signature": "Capability s",
          "source": "src/System-Console-Terminfo-Cursor.html#newline",
          "type": "function"
        },
        "index": {
          "description": "The nel capability which moves the cursor to the first column of the next line It behaves like carriage return followed by line feed If nel is not defined this may be built out of other capabilities",
          "hierarchy": "System Console Terminfo Cursor",
          "module": "System.Console.Terminfo.Cursor",
          "name": "newline",
          "package": "terminfo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Cursor.html#v:newline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Terminfo.Cursor",
          "name": "row",
          "package": "terminfo",
          "signature": "Int",
          "source": "src/System-Console-Terminfo-Cursor.html#Point",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Terminfo Cursor",
          "module": "System.Console.Terminfo.Cursor",
          "name": "row",
          "package": "terminfo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Cursor.html#v:row"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Terminfo.Cursor",
          "name": "rowAddress",
          "package": "terminfo",
          "signature": "Capability (Int -\u003e s)",
          "source": "src/System-Console-Terminfo-Cursor.html#rowAddress",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Terminfo Cursor",
          "module": "System.Console.Terminfo.Cursor",
          "name": "rowAddress",
          "normalized": "Capability(Int-\u003ea)",
          "package": "terminfo",
          "partial": "Address",
          "signature": "Capability(Int-\u003es)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Cursor.html#v:rowAddress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Terminfo.Cursor",
          "name": "scrollForward",
          "package": "terminfo",
          "signature": "Capability s",
          "source": "src/System-Console-Terminfo-Cursor.html#scrollForward",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Terminfo Cursor",
          "module": "System.Console.Terminfo.Cursor",
          "name": "scrollForward",
          "package": "terminfo",
          "partial": "Forward",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Cursor.html#v:scrollForward"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Terminfo.Cursor",
          "name": "scrollReverse",
          "package": "terminfo",
          "signature": "Capability s",
          "source": "src/System-Console-Terminfo-Cursor.html#scrollReverse",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Terminfo Cursor",
          "module": "System.Console.Terminfo.Cursor",
          "name": "scrollReverse",
          "package": "terminfo",
          "partial": "Reverse",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Cursor.html#v:scrollReverse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Terminfo.Cursor",
          "name": "termColumns",
          "package": "terminfo",
          "signature": "Capability Int",
          "source": "src/System-Console-Terminfo-Cursor.html#termColumns",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Terminfo Cursor",
          "module": "System.Console.Terminfo.Cursor",
          "name": "termColumns",
          "package": "terminfo",
          "partial": "Columns",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Cursor.html#v:termColumns"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Terminfo.Cursor",
          "name": "termLines",
          "package": "terminfo",
          "signature": "Capability Int",
          "source": "src/System-Console-Terminfo-Cursor.html#termLines",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Terminfo Cursor",
          "module": "System.Console.Terminfo.Cursor",
          "name": "termLines",
          "package": "terminfo",
          "partial": "Lines",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Cursor.html#v:termLines"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis flag specifies that the terminal does not perform\n \u003ccode\u003e\u003ca\u003eautoRightMargin\u003c/a\u003e\u003c/code\u003e-style wrapping when the character which would cause the \n wraparound is a control character.\n This is also known as the \"newline glitch\" or \"magic wrap\".  \n\u003c/p\u003e\u003cp\u003eFor example, in an 80-column terminal with this behavior, the following \n will print single-spaced instead of double-spaced:\n\u003c/p\u003e\u003cpre\u003e replicateM_ 5 $ putStr $ replicate 80 'x' ++ \"\\n\"\n\u003c/pre\u003e",
          "module": "System.Console.Terminfo.Cursor",
          "name": "wraparoundGlitch",
          "package": "terminfo",
          "signature": "Capability Bool",
          "source": "src/System-Console-Terminfo-Cursor.html#wraparoundGlitch",
          "type": "function"
        },
        "index": {
          "description": "This flag specifies that the terminal does not perform autoRightMargin style wrapping when the character which would cause the wraparound is control character This is also known as the newline glitch or magic wrap For example in an column terminal with this behavior the following will print single-spaced instead of double-spaced replicateM putStr replicate",
          "hierarchy": "System Console Terminfo Cursor",
          "module": "System.Console.Terminfo.Cursor",
          "name": "wraparoundGlitch",
          "package": "terminfo",
          "partial": "Glitch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Cursor.html#v:wraparoundGlitch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Terminfo.Edit",
          "name": "Edit",
          "package": "terminfo",
          "source": "src/System-Console-Terminfo-Edit.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "System Console Terminfo Edit",
          "module": "System.Console.Terminfo.Edit",
          "name": "Edit",
          "package": "terminfo",
          "partial": "Edit",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Edit.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClear from beginning of line to cursor.\n\u003c/p\u003e",
          "module": "System.Console.Terminfo.Edit",
          "name": "clearBOL",
          "package": "terminfo",
          "signature": "Capability s",
          "source": "src/System-Console-Terminfo-Edit.html#clearBOL",
          "type": "function"
        },
        "index": {
          "description": "Clear from beginning of line to cursor",
          "hierarchy": "System Console Terminfo Edit",
          "module": "System.Console.Terminfo.Edit",
          "name": "clearBOL",
          "package": "terminfo",
          "partial": "BOL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Edit.html#v:clearBOL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClear from cursor to end of line.\n\u003c/p\u003e",
          "module": "System.Console.Terminfo.Edit",
          "name": "clearEOL",
          "package": "terminfo",
          "signature": "Capability s",
          "source": "src/System-Console-Terminfo-Edit.html#clearEOL",
          "type": "function"
        },
        "index": {
          "description": "Clear from cursor to end of line",
          "hierarchy": "System Console Terminfo Edit",
          "module": "System.Console.Terminfo.Edit",
          "name": "clearEOL",
          "package": "terminfo",
          "partial": "EOL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Edit.html#v:clearEOL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClear display after cursor.\n\u003c/p\u003e",
          "module": "System.Console.Terminfo.Edit",
          "name": "clearEOS",
          "package": "terminfo",
          "signature": "Capability (LinesAffected -\u003e TermOutput)",
          "source": "src/System-Console-Terminfo-Edit.html#clearEOS",
          "type": "function"
        },
        "index": {
          "description": "Clear display after cursor",
          "hierarchy": "System Console Terminfo Edit",
          "module": "System.Console.Terminfo.Edit",
          "name": "clearEOS",
          "normalized": "Capability(LinesAffected-\u003eTermOutput)",
          "package": "terminfo",
          "partial": "EOS",
          "signature": "Capability(LinesAffected-\u003eTermOutput)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Edit.html#v:clearEOS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClear the screen, and move the cursor to the upper left.\n\u003c/p\u003e",
          "module": "System.Console.Terminfo.Edit",
          "name": "clearScreen",
          "package": "terminfo",
          "signature": "Capability (LinesAffected -\u003e TermOutput)",
          "source": "src/System-Console-Terminfo-Edit.html#clearScreen",
          "type": "function"
        },
        "index": {
          "description": "Clear the screen and move the cursor to the upper left",
          "hierarchy": "System Console Terminfo Edit",
          "module": "System.Console.Terminfo.Edit",
          "name": "clearScreen",
          "normalized": "Capability(LinesAffected-\u003eTermOutput)",
          "package": "terminfo",
          "partial": "Screen",
          "signature": "Capability(LinesAffected-\u003eTermOutput)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Edit.html#v:clearScreen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Terminfo.Effects",
          "name": "Effects",
          "package": "terminfo",
          "source": "src/System-Console-Terminfo-Effects.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "System Console Terminfo Effects",
          "module": "System.Console.Terminfo.Effects",
          "name": "Effects",
          "package": "terminfo",
          "partial": "Effects",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Effects.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Terminfo.Effects",
          "name": "Attributes",
          "package": "terminfo",
          "source": "src/System-Console-Terminfo-Effects.html#Attributes",
          "type": "data"
        },
        "index": {
          "hierarchy": "System Console Terminfo Effects",
          "module": "System.Console.Terminfo.Effects",
          "name": "Attributes",
          "package": "terminfo",
          "partial": "Attributes",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Effects.html#t:Attributes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Terminfo.Effects",
          "name": "Attributes",
          "package": "terminfo",
          "signature": "Attributes",
          "source": "src/System-Console-Terminfo-Effects.html#Attributes",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Terminfo Effects",
          "module": "System.Console.Terminfo.Effects",
          "name": "Attributes",
          "package": "terminfo",
          "partial": "Attributes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Effects.html#v:Attributes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTurns off all text attributes.  This capability will always succeed, but it has\n no effect in terminals which do not support text attributes.\n\u003c/p\u003e",
          "module": "System.Console.Terminfo.Effects",
          "name": "allAttributesOff",
          "package": "terminfo",
          "signature": "Capability s",
          "source": "src/System-Console-Terminfo-Effects.html#allAttributesOff",
          "type": "function"
        },
        "index": {
          "description": "Turns off all text attributes This capability will always succeed but it has no effect in terminals which do not support text attributes",
          "hierarchy": "System Console Terminfo Effects",
          "module": "System.Console.Terminfo.Effects",
          "name": "allAttributesOff",
          "package": "terminfo",
          "partial": "Attributes Off",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Effects.html#v:allAttributesOff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSound the audible bell.\n\u003c/p\u003e",
          "module": "System.Console.Terminfo.Effects",
          "name": "bell",
          "package": "terminfo",
          "signature": "Capability s",
          "source": "src/System-Console-Terminfo-Effects.html#bell",
          "type": "function"
        },
        "index": {
          "description": "Sound the audible bell",
          "hierarchy": "System Console Terminfo Effects",
          "module": "System.Console.Terminfo.Effects",
          "name": "bell",
          "package": "terminfo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Effects.html#v:bell"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Terminfo.Effects",
          "name": "blinkAttr",
          "package": "terminfo",
          "signature": "Bool",
          "source": "src/System-Console-Terminfo-Effects.html#Attributes",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Terminfo Effects",
          "module": "System.Console.Terminfo.Effects",
          "name": "blinkAttr",
          "package": "terminfo",
          "partial": "Attr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Effects.html#v:blinkAttr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Terminfo.Effects",
          "name": "blinkOn",
          "package": "terminfo",
          "signature": "Capability s",
          "source": "src/System-Console-Terminfo-Effects.html#blinkOn",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Terminfo Effects",
          "module": "System.Console.Terminfo.Effects",
          "name": "blinkOn",
          "package": "terminfo",
          "partial": "On",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Effects.html#v:blinkOn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Terminfo.Effects",
          "name": "boldAttr",
          "package": "terminfo",
          "signature": "Bool",
          "source": "src/System-Console-Terminfo-Effects.html#Attributes",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Terminfo Effects",
          "module": "System.Console.Terminfo.Effects",
          "name": "boldAttr",
          "package": "terminfo",
          "partial": "Attr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Effects.html#v:boldAttr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Terminfo.Effects",
          "name": "boldOn",
          "package": "terminfo",
          "signature": "Capability s",
          "source": "src/System-Console-Terminfo-Effects.html#boldOn",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Terminfo Effects",
          "module": "System.Console.Terminfo.Effects",
          "name": "boldOn",
          "package": "terminfo",
          "partial": "On",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Effects.html#v:boldOn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThese attributes have all properties turned off.\n\u003c/p\u003e",
          "module": "System.Console.Terminfo.Effects",
          "name": "defaultAttributes",
          "package": "terminfo",
          "signature": "Attributes",
          "source": "src/System-Console-Terminfo-Effects.html#defaultAttributes",
          "type": "function"
        },
        "index": {
          "description": "These attributes have all properties turned off",
          "hierarchy": "System Console Terminfo Effects",
          "module": "System.Console.Terminfo.Effects",
          "name": "defaultAttributes",
          "package": "terminfo",
          "partial": "Attributes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Effects.html#v:defaultAttributes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Terminfo.Effects",
          "name": "dimAttr",
          "package": "terminfo",
          "signature": "Bool",
          "source": "src/System-Console-Terminfo-Effects.html#Attributes",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Terminfo Effects",
          "module": "System.Console.Terminfo.Effects",
          "name": "dimAttr",
          "package": "terminfo",
          "partial": "Attr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Effects.html#v:dimAttr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Terminfo.Effects",
          "name": "dimOn",
          "package": "terminfo",
          "signature": "Capability s",
          "source": "src/System-Console-Terminfo-Effects.html#dimOn",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Terminfo Effects",
          "module": "System.Console.Terminfo.Effects",
          "name": "dimOn",
          "package": "terminfo",
          "partial": "On",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Effects.html#v:dimOn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Terminfo.Effects",
          "name": "enterStandoutMode",
          "package": "terminfo",
          "signature": "Capability s",
          "source": "src/System-Console-Terminfo-Effects.html#enterStandoutMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Terminfo Effects",
          "module": "System.Console.Terminfo.Effects",
          "name": "enterStandoutMode",
          "package": "terminfo",
          "partial": "Standout Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Effects.html#v:enterStandoutMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Terminfo.Effects",
          "name": "enterUnderlineMode",
          "package": "terminfo",
          "signature": "Capability s",
          "source": "src/System-Console-Terminfo-Effects.html#enterUnderlineMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Terminfo Effects",
          "module": "System.Console.Terminfo.Effects",
          "name": "enterUnderlineMode",
          "package": "terminfo",
          "partial": "Underline Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Effects.html#v:enterUnderlineMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Terminfo.Effects",
          "name": "exitStandoutMode",
          "package": "terminfo",
          "signature": "Capability s",
          "source": "src/System-Console-Terminfo-Effects.html#exitStandoutMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Terminfo Effects",
          "module": "System.Console.Terminfo.Effects",
          "name": "exitStandoutMode",
          "package": "terminfo",
          "partial": "Standout Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Effects.html#v:exitStandoutMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Terminfo.Effects",
          "name": "exitUnderlineMode",
          "package": "terminfo",
          "signature": "Capability s",
          "source": "src/System-Console-Terminfo-Effects.html#exitUnderlineMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Terminfo Effects",
          "module": "System.Console.Terminfo.Effects",
          "name": "exitUnderlineMode",
          "package": "terminfo",
          "partial": "Underline Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Effects.html#v:exitUnderlineMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Terminfo.Effects",
          "name": "invisibleAttr",
          "package": "terminfo",
          "signature": "Bool",
          "source": "src/System-Console-Terminfo-Effects.html#Attributes",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Terminfo Effects",
          "module": "System.Console.Terminfo.Effects",
          "name": "invisibleAttr",
          "package": "terminfo",
          "partial": "Attr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Effects.html#v:invisibleAttr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Terminfo.Effects",
          "name": "invisibleOn",
          "package": "terminfo",
          "signature": "Capability s",
          "source": "src/System-Console-Terminfo-Effects.html#invisibleOn",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Terminfo Effects",
          "module": "System.Console.Terminfo.Effects",
          "name": "invisibleOn",
          "package": "terminfo",
          "partial": "On",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Effects.html#v:invisibleOn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Terminfo.Effects",
          "name": "protectedAttr",
          "package": "terminfo",
          "signature": "Bool",
          "source": "src/System-Console-Terminfo-Effects.html#Attributes",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Terminfo Effects",
          "module": "System.Console.Terminfo.Effects",
          "name": "protectedAttr",
          "package": "terminfo",
          "partial": "Attr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Effects.html#v:protectedAttr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Terminfo.Effects",
          "name": "protectedOn",
          "package": "terminfo",
          "signature": "Capability s",
          "source": "src/System-Console-Terminfo-Effects.html#protectedOn",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Terminfo Effects",
          "module": "System.Console.Terminfo.Effects",
          "name": "protectedOn",
          "package": "terminfo",
          "partial": "On",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Effects.html#v:protectedOn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Terminfo.Effects",
          "name": "reverseAttr",
          "package": "terminfo",
          "signature": "Bool",
          "source": "src/System-Console-Terminfo-Effects.html#Attributes",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Terminfo Effects",
          "module": "System.Console.Terminfo.Effects",
          "name": "reverseAttr",
          "package": "terminfo",
          "partial": "Attr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Effects.html#v:reverseAttr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Terminfo.Effects",
          "name": "reverseOn",
          "package": "terminfo",
          "signature": "Capability s",
          "source": "src/System-Console-Terminfo-Effects.html#reverseOn",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Terminfo Effects",
          "module": "System.Console.Terminfo.Effects",
          "name": "reverseOn",
          "package": "terminfo",
          "partial": "On",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Effects.html#v:reverseOn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets the attributes on or off.  This capability will always succeed;\n properties which cannot be set in the current terminal will be ignored.\n\u003c/p\u003e",
          "module": "System.Console.Terminfo.Effects",
          "name": "setAttributes",
          "package": "terminfo",
          "signature": "Capability (Attributes -\u003e s)",
          "source": "src/System-Console-Terminfo-Effects.html#setAttributes",
          "type": "function"
        },
        "index": {
          "description": "Sets the attributes on or off This capability will always succeed properties which cannot be set in the current terminal will be ignored",
          "hierarchy": "System Console Terminfo Effects",
          "module": "System.Console.Terminfo.Effects",
          "name": "setAttributes",
          "normalized": "Capability(Attributes-\u003ea)",
          "package": "terminfo",
          "partial": "Attributes",
          "signature": "Capability(Attributes-\u003es)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Effects.html#v:setAttributes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Terminfo.Effects",
          "name": "standoutAttr",
          "package": "terminfo",
          "signature": "Bool",
          "source": "src/System-Console-Terminfo-Effects.html#Attributes",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Terminfo Effects",
          "module": "System.Console.Terminfo.Effects",
          "name": "standoutAttr",
          "package": "terminfo",
          "partial": "Attr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Effects.html#v:standoutAttr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Terminfo.Effects",
          "name": "underlineAttr",
          "package": "terminfo",
          "signature": "Bool",
          "source": "src/System-Console-Terminfo-Effects.html#Attributes",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Terminfo Effects",
          "module": "System.Console.Terminfo.Effects",
          "name": "underlineAttr",
          "package": "terminfo",
          "partial": "Attr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Effects.html#v:underlineAttr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePresent a visual alert using the \u003ccode\u003eflash\u003c/code\u003e capability.\n\u003c/p\u003e",
          "module": "System.Console.Terminfo.Effects",
          "name": "visualBell",
          "package": "terminfo",
          "signature": "Capability TermOutput",
          "source": "src/System-Console-Terminfo-Effects.html#visualBell",
          "type": "function"
        },
        "index": {
          "description": "Present visual alert using the flash capability",
          "hierarchy": "System Console Terminfo Effects",
          "module": "System.Console.Terminfo.Effects",
          "name": "visualBell",
          "package": "terminfo",
          "partial": "Bell",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Effects.html#v:visualBell"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets the attributes on or off before outputting the given text,\n and then turns them all off.  This capability will always succeed; properties\n which cannot be set in the current terminal will be ignored.\n\u003c/p\u003e",
          "module": "System.Console.Terminfo.Effects",
          "name": "withAttributes",
          "package": "terminfo",
          "signature": "Capability (Attributes -\u003e s -\u003e s)",
          "source": "src/System-Console-Terminfo-Effects.html#withAttributes",
          "type": "function"
        },
        "index": {
          "description": "Sets the attributes on or off before outputting the given text and then turns them all off This capability will always succeed properties which cannot be set in the current terminal will be ignored",
          "hierarchy": "System Console Terminfo Effects",
          "module": "System.Console.Terminfo.Effects",
          "name": "withAttributes",
          "normalized": "Capability(Attributes-\u003ea-\u003ea)",
          "package": "terminfo",
          "partial": "Attributes",
          "signature": "Capability(Attributes-\u003es-\u003es)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Effects.html#v:withAttributes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTurns on bold mode before outputting the given text, and then turns\n all attributes off.\n\u003c/p\u003e",
          "module": "System.Console.Terminfo.Effects",
          "name": "withBold",
          "package": "terminfo",
          "signature": "Capability (s -\u003e s)",
          "source": "src/System-Console-Terminfo-Effects.html#withBold",
          "type": "function"
        },
        "index": {
          "description": "Turns on bold mode before outputting the given text and then turns all attributes off",
          "hierarchy": "System Console Terminfo Effects",
          "module": "System.Console.Terminfo.Effects",
          "name": "withBold",
          "normalized": "Capability(a-\u003ea)",
          "package": "terminfo",
          "partial": "Bold",
          "signature": "Capability(s-\u003es)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Effects.html#v:withBold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTurns on standout mode before outputting the given\n text, and then turns it off.\n\u003c/p\u003e",
          "module": "System.Console.Terminfo.Effects",
          "name": "withStandout",
          "package": "terminfo",
          "signature": "Capability (s -\u003e s)",
          "source": "src/System-Console-Terminfo-Effects.html#withStandout",
          "type": "function"
        },
        "index": {
          "description": "Turns on standout mode before outputting the given text and then turns it off",
          "hierarchy": "System Console Terminfo Effects",
          "module": "System.Console.Terminfo.Effects",
          "name": "withStandout",
          "normalized": "Capability(a-\u003ea)",
          "package": "terminfo",
          "partial": "Standout",
          "signature": "Capability(s-\u003es)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Effects.html#v:withStandout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTurns on underline mode before outputting the given\n text, and then turns it off.\n\u003c/p\u003e",
          "module": "System.Console.Terminfo.Effects",
          "name": "withUnderline",
          "package": "terminfo",
          "signature": "Capability (s -\u003e s)",
          "source": "src/System-Console-Terminfo-Effects.html#withUnderline",
          "type": "function"
        },
        "index": {
          "description": "Turns on underline mode before outputting the given text and then turns it off",
          "hierarchy": "System Console Terminfo Effects",
          "module": "System.Console.Terminfo.Effects",
          "name": "withUnderline",
          "normalized": "Capability(a-\u003ea)",
          "package": "terminfo",
          "partial": "Underline",
          "signature": "Capability(s-\u003es)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Effects.html#v:withUnderline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe string capabilities in this module are the character sequences\n corresponding to user input such as arrow keys and function keys.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Console.Terminfo.Keys",
          "name": "Keys",
          "package": "terminfo",
          "source": "src/System-Console-Terminfo-Keys.html",
          "type": "module"
        },
        "index": {
          "description": "The string capabilities in this module are the character sequences corresponding to user input such as arrow keys and function keys",
          "hierarchy": "System Console Terminfo Keys",
          "module": "System.Console.Terminfo.Keys",
          "name": "Keys",
          "package": "terminfo",
          "partial": "Keys",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Keys.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLook up the control sequence for a given function sequence.  For example, \n \u003ccode\u003efunctionKey 12\u003c/code\u003e retrieves the \u003ccode\u003ekf12\u003c/code\u003e capability.\n\u003c/p\u003e",
          "module": "System.Console.Terminfo.Keys",
          "name": "functionKey",
          "package": "terminfo",
          "signature": "Int -\u003e Capability String",
          "source": "src/System-Console-Terminfo-Keys.html#functionKey",
          "type": "function"
        },
        "index": {
          "description": "Look up the control sequence for given function sequence For example functionKey retrieves the kf12 capability",
          "hierarchy": "System Console Terminfo Keys",
          "module": "System.Console.Terminfo.Keys",
          "name": "functionKey",
          "normalized": "Int-\u003eCapability String",
          "package": "terminfo",
          "partial": "Key",
          "signature": "Int-\u003eCapability String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Keys.html#v:functionKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Terminfo.Keys",
          "name": "keyBackspace",
          "package": "terminfo",
          "signature": "Capability String",
          "source": "src/System-Console-Terminfo-Keys.html#keyBackspace",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Terminfo Keys",
          "module": "System.Console.Terminfo.Keys",
          "name": "keyBackspace",
          "package": "terminfo",
          "partial": "Backspace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Keys.html#v:keyBackspace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Terminfo.Keys",
          "name": "keyDeleteChar",
          "package": "terminfo",
          "signature": "Capability String",
          "source": "src/System-Console-Terminfo-Keys.html#keyDeleteChar",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Terminfo Keys",
          "module": "System.Console.Terminfo.Keys",
          "name": "keyDeleteChar",
          "package": "terminfo",
          "partial": "Delete Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Keys.html#v:keyDeleteChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Terminfo.Keys",
          "name": "keyDown",
          "package": "terminfo",
          "signature": "Capability String",
          "source": "src/System-Console-Terminfo-Keys.html#keyDown",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Terminfo Keys",
          "module": "System.Console.Terminfo.Keys",
          "name": "keyDown",
          "package": "terminfo",
          "partial": "Down",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Keys.html#v:keyDown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Terminfo.Keys",
          "name": "keyEnd",
          "package": "terminfo",
          "signature": "Capability String",
          "source": "src/System-Console-Terminfo-Keys.html#keyEnd",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Terminfo Keys",
          "module": "System.Console.Terminfo.Keys",
          "name": "keyEnd",
          "package": "terminfo",
          "partial": "End",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Keys.html#v:keyEnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Terminfo.Keys",
          "name": "keyEnter",
          "package": "terminfo",
          "signature": "Capability String",
          "source": "src/System-Console-Terminfo-Keys.html#keyEnter",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Terminfo Keys",
          "module": "System.Console.Terminfo.Keys",
          "name": "keyEnter",
          "package": "terminfo",
          "partial": "Enter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Keys.html#v:keyEnter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Terminfo.Keys",
          "name": "keyHome",
          "package": "terminfo",
          "signature": "Capability String",
          "source": "src/System-Console-Terminfo-Keys.html#keyHome",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Terminfo Keys",
          "module": "System.Console.Terminfo.Keys",
          "name": "keyHome",
          "package": "terminfo",
          "partial": "Home",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Keys.html#v:keyHome"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Terminfo.Keys",
          "name": "keyLeft",
          "package": "terminfo",
          "signature": "Capability String",
          "source": "src/System-Console-Terminfo-Keys.html#keyLeft",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Terminfo Keys",
          "module": "System.Console.Terminfo.Keys",
          "name": "keyLeft",
          "package": "terminfo",
          "partial": "Left",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Keys.html#v:keyLeft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Terminfo.Keys",
          "name": "keyPageDown",
          "package": "terminfo",
          "signature": "Capability String",
          "source": "src/System-Console-Terminfo-Keys.html#keyPageDown",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Terminfo Keys",
          "module": "System.Console.Terminfo.Keys",
          "name": "keyPageDown",
          "package": "terminfo",
          "partial": "Page Down",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Keys.html#v:keyPageDown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Terminfo.Keys",
          "name": "keyPageUp",
          "package": "terminfo",
          "signature": "Capability String",
          "source": "src/System-Console-Terminfo-Keys.html#keyPageUp",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Terminfo Keys",
          "module": "System.Console.Terminfo.Keys",
          "name": "keyPageUp",
          "package": "terminfo",
          "partial": "Page Up",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Keys.html#v:keyPageUp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Terminfo.Keys",
          "name": "keyRight",
          "package": "terminfo",
          "signature": "Capability String",
          "source": "src/System-Console-Terminfo-Keys.html#keyRight",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Terminfo Keys",
          "module": "System.Console.Terminfo.Keys",
          "name": "keyRight",
          "package": "terminfo",
          "partial": "Right",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Keys.html#v:keyRight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Terminfo.Keys",
          "name": "keyUp",
          "package": "terminfo",
          "signature": "Capability String",
          "source": "src/System-Console-Terminfo-Keys.html#keyUp",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Terminfo Keys",
          "module": "System.Console.Terminfo.Keys",
          "name": "keyUp",
          "package": "terminfo",
          "partial": "Up",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Keys.html#v:keyUp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Terminfo.Keys",
          "name": "keypadOff",
          "package": "terminfo",
          "signature": "Capability s",
          "source": "src/System-Console-Terminfo-Keys.html#keypadOff",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Terminfo Keys",
          "module": "System.Console.Terminfo.Keys",
          "name": "keypadOff",
          "package": "terminfo",
          "partial": "Off",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Keys.html#v:keypadOff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Terminfo.Keys",
          "name": "keypadOn",
          "package": "terminfo",
          "signature": "Capability s",
          "source": "src/System-Console-Terminfo-Keys.html#keypadOn",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Terminfo Keys",
          "module": "System.Console.Terminfo.Keys",
          "name": "keypadOn",
          "package": "terminfo",
          "partial": "On",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo-Keys.html#v:keypadOn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Terminfo",
          "name": "Terminfo",
          "package": "terminfo",
          "source": "src/System-Console-Terminfo.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "System Console Terminfo",
          "module": "System.Console.Terminfo",
          "name": "Terminfo",
          "package": "terminfo",
          "partial": "Terminfo",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/terminfo/docs/System-Console-Terminfo.html#"
      }
    }
  ]
]