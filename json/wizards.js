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
        "word": "wizards"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Wizard.BasicIO",
          "name": "BasicIO",
          "package": "wizards",
          "source": "src/System-Console-Wizard-BasicIO.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "System Console Wizard BasicIO",
          "module": "System.Console.Wizard.BasicIO",
          "name": "BasicIO",
          "package": "wizards",
          "partial": "Basic IO",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/wizards/docs/System-Console-Wizard-BasicIO.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eBasicIO\u003c/a\u003e\u003c/code\u003e backend supports only simple input and output.\n   Support for \u003ccode\u003e\u003ca\u003ePassword\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eLinePrewritten\u003c/a\u003e\u003c/code\u003e features can be added with \n   a shim from \u003ccode\u003e\u003ca\u003eShim\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "System.Console.Wizard.BasicIO",
          "name": "BasicIO",
          "package": "wizards",
          "source": "src/System-Console-Wizard-BasicIO.html#BasicIO",
          "type": "data"
        },
        "index": {
          "description": "The BasicIO backend supports only simple input and output Support for Password and LinePrewritten features can be added with shim from Shim",
          "hierarchy": "System Console Wizard BasicIO",
          "module": "System.Console.Wizard.BasicIO",
          "name": "BasicIO",
          "package": "wizards",
          "partial": "Basic IO",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/wizards/docs/System-Console-Wizard-BasicIO.html#t:BasicIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA simple identity function, used to restrict types if the type inferred by GHC is too general.\n   You could achieve the same effect with a type signature, but this is slightly less typing.\n\u003c/p\u003e",
          "module": "System.Console.Wizard.BasicIO",
          "name": "basicIO",
          "package": "wizards",
          "signature": "Wizard BasicIO a -\u003e Wizard BasicIO a",
          "source": "src/System-Console-Wizard-BasicIO.html#basicIO",
          "type": "function"
        },
        "index": {
          "description": "simple identity function used to restrict types if the type inferred by GHC is too general You could achieve the same effect with type signature but this is slightly less typing",
          "hierarchy": "System Console Wizard BasicIO",
          "module": "System.Console.Wizard.BasicIO",
          "name": "basicIO",
          "normalized": "Wizard BasicIO a-\u003eWizard BasicIO a",
          "package": "wizards",
          "partial": "IO",
          "signature": "Wizard BasicIO a-\u003eWizard BasicIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wizards/docs/System-Console-Wizard-BasicIO.html#v:basicIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Wizard.Haskeline",
          "name": "Haskeline",
          "package": "wizards",
          "source": "src/System-Console-Wizard-Haskeline.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "System Console Wizard Haskeline",
          "module": "System.Console.Wizard.Haskeline",
          "name": "Haskeline",
          "package": "wizards",
          "partial": "Haskeline",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/wizards/docs/System-Console-Wizard-Haskeline.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHaskeline supports all the following features completely. \n\u003c/p\u003e",
          "module": "System.Console.Wizard.Haskeline",
          "name": "Haskeline",
          "package": "wizards",
          "source": "src/System-Console-Wizard-Haskeline.html#Haskeline",
          "type": "data"
        },
        "index": {
          "description": "Haskeline supports all the following features completely",
          "hierarchy": "System Console Wizard Haskeline",
          "module": "System.Console.Wizard.Haskeline",
          "name": "Haskeline",
          "package": "wizards",
          "partial": "Haskeline",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/wizards/docs/System-Console-Wizard-Haskeline.html#t:Haskeline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Haskeline back-end will throw this exception if EOF is encountered\n   when it is not expected. Specifically, when actions such as \u003ccode\u003e\u003ca\u003egetInputLine\u003c/a\u003e\u003c/code\u003e return \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Console.Wizard.Haskeline",
          "name": "UnexpectedEOF",
          "package": "wizards",
          "source": "src/System-Console-Wizard-Haskeline.html#UnexpectedEOF",
          "type": "data"
        },
        "index": {
          "description": "The Haskeline back-end will throw this exception if EOF is encountered when it is not expected Specifically when actions such as getInputLine return Nothing",
          "hierarchy": "System Console Wizard Haskeline",
          "module": "System.Console.Wizard.Haskeline",
          "name": "UnexpectedEOF",
          "package": "wizards",
          "partial": "Unexpected EOF",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/wizards/docs/System-Console-Wizard-Haskeline.html#t:UnexpectedEOF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Wizard.Haskeline",
          "name": "WithSettings",
          "package": "wizards",
          "source": "src/System-Console-Wizard-Haskeline.html#WithSettings",
          "type": "data"
        },
        "index": {
          "hierarchy": "System Console Wizard Haskeline",
          "module": "System.Console.Wizard.Haskeline",
          "name": "WithSettings",
          "package": "wizards",
          "partial": "With Settings",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/wizards/docs/System-Console-Wizard-Haskeline.html#t:WithSettings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Wizard.Haskeline",
          "name": "UnexpectedEOF",
          "package": "wizards",
          "signature": "UnexpectedEOF",
          "source": "src/System-Console-Wizard-Haskeline.html#UnexpectedEOF",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Wizard Haskeline",
          "module": "System.Console.Wizard.Haskeline",
          "name": "UnexpectedEOF",
          "package": "wizards",
          "partial": "Unexpected EOF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wizards/docs/System-Console-Wizard-Haskeline.html#v:UnexpectedEOF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Wizard.Haskeline",
          "name": "WithSettings",
          "package": "wizards",
          "signature": "WithSettings (Settings IO) w",
          "source": "src/System-Console-Wizard-Haskeline.html#WithSettings",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Wizard Haskeline",
          "module": "System.Console.Wizard.Haskeline",
          "name": "WithSettings",
          "package": "wizards",
          "partial": "With Settings",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wizards/docs/System-Console-Wizard-Haskeline.html#v:WithSettings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA simple identity function, used to restrict types if the type inferred by GHC is too general.\n   You could achieve the same effect with a type signature, but this is slightly less typing.\n\u003c/p\u003e",
          "module": "System.Console.Wizard.Haskeline",
          "name": "haskeline",
          "package": "wizards",
          "signature": "Wizard Haskeline a -\u003e Wizard Haskeline a",
          "source": "src/System-Console-Wizard-Haskeline.html#haskeline",
          "type": "function"
        },
        "index": {
          "description": "simple identity function used to restrict types if the type inferred by GHC is too general You could achieve the same effect with type signature but this is slightly less typing",
          "hierarchy": "System Console Wizard Haskeline",
          "module": "System.Console.Wizard.Haskeline",
          "name": "haskeline",
          "normalized": "Wizard Haskeline a-\u003eWizard Haskeline a",
          "package": "wizards",
          "signature": "Wizard Haskeline a-\u003eWizard Haskeline a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wizards/docs/System-Console-Wizard-Haskeline.html#v:haskeline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModifies a wizard so that it will run with different Haskeline \u003ccode\u003e\u003ca\u003eSettings\u003c/a\u003e\u003c/code\u003e to the top level input monad.\n\u003c/p\u003e",
          "module": "System.Console.Wizard.Haskeline",
          "name": "withSettings",
          "package": "wizards",
          "signature": "Settings IO -\u003e Wizard b a -\u003e Wizard b a",
          "source": "src/System-Console-Wizard-Haskeline.html#withSettings",
          "type": "function"
        },
        "index": {
          "description": "Modifies wizard so that it will run with different Haskeline Settings to the top level input monad",
          "hierarchy": "System Console Wizard Haskeline",
          "module": "System.Console.Wizard.Haskeline",
          "name": "withSettings",
          "normalized": "Settings IO-\u003eWizard a b-\u003eWizard a b",
          "package": "wizards",
          "partial": "Settings",
          "signature": "Settings IO-\u003eWizard b a-\u003eWizard b a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wizards/docs/System-Console-Wizard-Haskeline.html#v:withSettings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Wizard.Internal",
          "name": "Internal",
          "package": "wizards",
          "source": "src/System-Console-Wizard-Internal.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "System Console Wizard Internal",
          "module": "System.Console.Wizard.Internal",
          "name": "Internal",
          "package": "wizards",
          "partial": "Internal",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/wizards/docs/System-Console-Wizard-Internal.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCoproduct of two functors\n\u003c/p\u003e",
          "module": "System.Console.Wizard.Internal",
          "name": ":+:",
          "package": "wizards",
          "source": "src/System-Console-Wizard-Internal.html#%3A%2B%3A",
          "type": "data"
        },
        "index": {
          "description": "Coproduct of two functors",
          "hierarchy": "System Console Wizard Internal",
          "module": "System.Console.Wizard.Internal",
          "name": ":+:",
          "package": "wizards",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/wizards/docs/System-Console-Wizard-Internal.html#t::-43-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSubsumption of two functors. You shouldn't define any of your own instances of this when writing back-ends, rely only on GeneralizedNewtypeDeriving.\n\u003c/p\u003e",
          "module": "System.Console.Wizard.Internal",
          "name": ":\u003c:",
          "package": "wizards",
          "source": "src/System-Console-Wizard-Internal.html#%3A%3C%3A",
          "type": "class"
        },
        "index": {
          "description": "Subsumption of two functors You shouldn define any of your own instances of this when writing back-ends rely only on GeneralizedNewtypeDeriving",
          "hierarchy": "System Console Wizard Internal",
          "module": "System.Console.Wizard.Internal",
          "name": ":\u003c:",
          "package": "wizards",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/wizards/docs/System-Console-Wizard-Internal.html#t::-60-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Wizard.Internal",
          "name": "ArbitraryIO",
          "package": "wizards",
          "source": "src/System-Console-Wizard-Internal.html#ArbitraryIO",
          "type": "data"
        },
        "index": {
          "hierarchy": "System Console Wizard Internal",
          "module": "System.Console.Wizard.Internal",
          "name": "ArbitraryIO",
          "package": "wizards",
          "partial": "Arbitrary IO",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/wizards/docs/System-Console-Wizard-Internal.html#t:ArbitraryIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Wizard.Internal",
          "name": "Character",
          "package": "wizards",
          "source": "src/System-Console-Wizard-Internal.html#Character",
          "type": "data"
        },
        "index": {
          "hierarchy": "System Console Wizard Internal",
          "module": "System.Console.Wizard.Internal",
          "name": "Character",
          "package": "wizards",
          "partial": "Character",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/wizards/docs/System-Console-Wizard-Internal.html#t:Character"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Wizard.Internal",
          "name": "Line",
          "package": "wizards",
          "source": "src/System-Console-Wizard-Internal.html#Line",
          "type": "data"
        },
        "index": {
          "hierarchy": "System Console Wizard Internal",
          "module": "System.Console.Wizard.Internal",
          "name": "Line",
          "package": "wizards",
          "partial": "Line",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/wizards/docs/System-Console-Wizard-Internal.html#t:Line"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Wizard.Internal",
          "name": "LinePrewritten",
          "package": "wizards",
          "source": "src/System-Console-Wizard-Internal.html#LinePrewritten",
          "type": "data"
        },
        "index": {
          "hierarchy": "System Console Wizard Internal",
          "module": "System.Console.Wizard.Internal",
          "name": "LinePrewritten",
          "package": "wizards",
          "partial": "Line Prewritten",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/wizards/docs/System-Console-Wizard-Internal.html#t:LinePrewritten"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Wizard.Internal",
          "name": "Output",
          "package": "wizards",
          "source": "src/System-Console-Wizard-Internal.html#Output",
          "type": "data"
        },
        "index": {
          "hierarchy": "System Console Wizard Internal",
          "module": "System.Console.Wizard.Internal",
          "name": "Output",
          "package": "wizards",
          "partial": "Output",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/wizards/docs/System-Console-Wizard-Internal.html#t:Output"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Wizard.Internal",
          "name": "OutputLn",
          "package": "wizards",
          "source": "src/System-Console-Wizard-Internal.html#OutputLn",
          "type": "data"
        },
        "index": {
          "hierarchy": "System Console Wizard Internal",
          "module": "System.Console.Wizard.Internal",
          "name": "OutputLn",
          "package": "wizards",
          "partial": "Output Ln",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/wizards/docs/System-Console-Wizard-Internal.html#t:OutputLn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Wizard.Internal",
          "name": "Password",
          "package": "wizards",
          "source": "src/System-Console-Wizard-Internal.html#Password",
          "type": "data"
        },
        "index": {
          "hierarchy": "System Console Wizard Internal",
          "module": "System.Console.Wizard.Internal",
          "name": "Password",
          "package": "wizards",
          "partial": "Password",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/wizards/docs/System-Console-Wizard-Internal.html#t:Password"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA string for a prompt\n\u003c/p\u003e",
          "module": "System.Console.Wizard.Internal",
          "name": "PromptString",
          "package": "wizards",
          "source": "src/System-Console-Wizard-Internal.html#PromptString",
          "type": "type"
        },
        "index": {
          "description": "string for prompt",
          "hierarchy": "System Console Wizard Internal",
          "module": "System.Console.Wizard.Internal",
          "name": "PromptString",
          "package": "wizards",
          "partial": "Prompt String",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/wizards/docs/System-Console-Wizard-Internal.html#t:PromptString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA class for implementing actions on a backend. E.g Run IO Output provides an interpreter for the Output action in the IO monad.\n\u003c/p\u003e",
          "module": "System.Console.Wizard.Internal",
          "name": "Run",
          "package": "wizards",
          "source": "src/System-Console-Wizard-Internal.html#Run",
          "type": "class"
        },
        "index": {
          "description": "class for implementing actions on backend E.g Run IO Output provides an interpreter for the Output action in the IO monad",
          "hierarchy": "System Console Wizard Internal",
          "module": "System.Console.Wizard.Internal",
          "name": "Run",
          "package": "wizards",
          "partial": "Run",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/wizards/docs/System-Console-Wizard-Internal.html#t:Run"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003eWizard b a\u003c/code\u003e is a conversation with the user via back-end \u003ccode\u003eb\u003c/code\u003e that will result in a data type \u003ccode\u003ea\u003c/code\u003e, or may fail.\n   A \u003ccode\u003e\u003ca\u003eWizard\u003c/a\u003e\u003c/code\u003e is made up of one or more \"primitives\" (see below), composed using the \u003ccode\u003e\u003ca\u003eApplicative\u003c/a\u003e\u003c/code\u003e,\n  \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eAlternative\u003c/a\u003e\u003c/code\u003e instances. The \u003ccode\u003e\u003ca\u003eAlternative\u003c/a\u003e\u003c/code\u003e instance is, as you might expect, a maybe-style cascade. \n   If the first wizard fails, the next one is tried. \u003ccode\u003e\u003ca\u003emzero\u003c/a\u003e\u003c/code\u003e can be used to induce failure directly.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eWizard\u003c/a\u003e\u003c/code\u003e constructor is exported here for use when developing backends,  but it is better for end-users to \n  simply pretend that \u003ccode\u003e\u003ca\u003eWizard\u003c/a\u003e\u003c/code\u003e is an opaque data type. Don't depend on this unless you have no other choice.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eWizard\u003c/a\u003e\u003c/code\u003es are, internally, just a maybe transformer over a free monad built from some coproduct of functors,\n  each of which is a primitive action.\n\u003c/p\u003e",
          "module": "System.Console.Wizard.Internal",
          "name": "Wizard",
          "package": "wizards",
          "source": "src/System-Console-Wizard-Internal.html#Wizard",
          "type": "newtype"
        },
        "index": {
          "description": "Wizard is conversation with the user via back-end that will result in data type or may fail Wizard is made up of one or more primitives see below composed using the Applicative Monad and Alternative instances The Alternative instance is as you might expect maybe-style cascade If the first wizard fails the next one is tried mzero can be used to induce failure directly The Wizard constructor is exported here for use when developing backends but it is better for end-users to simply pretend that Wizard is an opaque data type Don depend on this unless you have no other choice Wizard are internally just maybe transformer over free monad built from some coproduct of functors each of which is primitive action",
          "hierarchy": "System Console Wizard Internal",
          "module": "System.Console.Wizard.Internal",
          "name": "Wizard",
          "package": "wizards",
          "partial": "Wizard",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/wizards/docs/System-Console-Wizard-Internal.html#t:Wizard"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Wizard.Internal",
          "name": "ArbitraryIO",
          "package": "wizards",
          "signature": "forall a . ArbitraryIO (IO a) (a -\u003e w)",
          "source": "src/System-Console-Wizard-Internal.html#ArbitraryIO",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Wizard Internal",
          "module": "System.Console.Wizard.Internal",
          "name": "ArbitraryIO",
          "normalized": "a b ArbitraryIO(IO b)(b-\u003ec)",
          "package": "wizards",
          "partial": "Arbitrary IO",
          "signature": "forall a ArbitraryIO(IO a)(a-\u003ew)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wizards/docs/System-Console-Wizard-Internal.html#v:ArbitraryIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Wizard.Internal",
          "name": "Character",
          "package": "wizards",
          "signature": "Character PromptString (Char -\u003e w)",
          "source": "src/System-Console-Wizard-Internal.html#Character",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Wizard Internal",
          "module": "System.Console.Wizard.Internal",
          "name": "Character",
          "normalized": "Character PromptString(Char-\u003ea)",
          "package": "wizards",
          "partial": "Character",
          "signature": "Character PromptString(Char-\u003ew)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wizards/docs/System-Console-Wizard-Internal.html#v:Character"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Wizard.Internal",
          "name": "Inl",
          "package": "wizards",
          "signature": "Inl (f w)",
          "source": "src/System-Console-Wizard-Internal.html#%3A%2B%3A",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Wizard Internal",
          "module": "System.Console.Wizard.Internal",
          "name": "Inl",
          "package": "wizards",
          "partial": "Inl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wizards/docs/System-Console-Wizard-Internal.html#v:Inl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Wizard.Internal",
          "name": "Inr",
          "package": "wizards",
          "signature": "Inr (g w)",
          "source": "src/System-Console-Wizard-Internal.html#%3A%2B%3A",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Wizard Internal",
          "module": "System.Console.Wizard.Internal",
          "name": "Inr",
          "package": "wizards",
          "partial": "Inr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wizards/docs/System-Console-Wizard-Internal.html#v:Inr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Wizard.Internal",
          "name": "Line",
          "package": "wizards",
          "signature": "Line PromptString (String -\u003e w)",
          "source": "src/System-Console-Wizard-Internal.html#Line",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Wizard Internal",
          "module": "System.Console.Wizard.Internal",
          "name": "Line",
          "normalized": "Line PromptString(String-\u003ea)",
          "package": "wizards",
          "partial": "Line",
          "signature": "Line PromptString(String-\u003ew)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wizards/docs/System-Console-Wizard-Internal.html#v:Line"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Wizard.Internal",
          "name": "LinePrewritten",
          "package": "wizards",
          "signature": "LinePrewritten PromptString String String (String -\u003e w)",
          "source": "src/System-Console-Wizard-Internal.html#LinePrewritten",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Wizard Internal",
          "module": "System.Console.Wizard.Internal",
          "name": "LinePrewritten",
          "normalized": "LinePrewritten PromptString String String(String-\u003ea)",
          "package": "wizards",
          "partial": "Line Prewritten",
          "signature": "LinePrewritten PromptString String String(String-\u003ew)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wizards/docs/System-Console-Wizard-Internal.html#v:LinePrewritten"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Wizard.Internal",
          "name": "Output",
          "package": "wizards",
          "signature": "Output String w",
          "source": "src/System-Console-Wizard-Internal.html#Output",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Wizard Internal",
          "module": "System.Console.Wizard.Internal",
          "name": "Output",
          "package": "wizards",
          "partial": "Output",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wizards/docs/System-Console-Wizard-Internal.html#v:Output"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Wizard.Internal",
          "name": "OutputLn",
          "package": "wizards",
          "signature": "OutputLn String w",
          "source": "src/System-Console-Wizard-Internal.html#OutputLn",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Wizard Internal",
          "module": "System.Console.Wizard.Internal",
          "name": "OutputLn",
          "package": "wizards",
          "partial": "Output Ln",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wizards/docs/System-Console-Wizard-Internal.html#v:OutputLn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Wizard.Internal",
          "name": "Password",
          "package": "wizards",
          "signature": "Password PromptString (Maybe Char) (String -\u003e w)",
          "source": "src/System-Console-Wizard-Internal.html#Password",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Wizard Internal",
          "module": "System.Console.Wizard.Internal",
          "name": "Password",
          "normalized": "Password PromptString(Maybe Char)(String-\u003ea)",
          "package": "wizards",
          "partial": "Password",
          "signature": "Password PromptString(Maybe Char)(String-\u003ew)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wizards/docs/System-Console-Wizard-Internal.html#v:Password"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Console.Wizard.Internal\",\"System.Console.Wizard\"]",
          "name": "Wizard",
          "package": "wizards",
          "signature": "Wizard (MaybeT (Free backend) a)",
          "source": "src/System-Console-Wizard-Internal.html#Wizard",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/wizards/docs/System-Console-Wizard-Internal.html#v:Wizard\",\"http://hackage.haskell.org/package/wizards/docs/System-Console-Wizard.html#v:Wizard\"]"
        },
        "index": {
          "hierarchy": "System Console Wizard Internal",
          "module": "System.Console.Wizard.Internal",
          "name": "Wizard",
          "package": "wizards",
          "partial": "Wizard",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wizards/docs/System-Console-Wizard-Internal.html#v:Wizard"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInjection function for free monads, see \"Data Types a la Carte\" from Walter Swierstra, \u003ccode\u003ehttp://www.cs.ru.nl/~W.Swierstra/Publications/DataTypesALaCarte.pdf\u003c/code\u003e\n\u003c/p\u003e",
          "module": "System.Console.Wizard.Internal",
          "name": "inject",
          "package": "wizards",
          "signature": "g (Free f a) -\u003e Free f a",
          "source": "src/System-Console-Wizard-Internal.html#inject",
          "type": "function"
        },
        "index": {
          "description": "Injection function for free monads see Data Types la Carte from Walter Swierstra http www.cs.ru.nl W.Swierstra Publications DataTypesALaCarte.pdf",
          "hierarchy": "System Console Wizard Internal",
          "module": "System.Console.Wizard.Internal",
          "name": "inject",
          "normalized": "a(Free b c)-\u003eFree b c",
          "package": "wizards",
          "signature": "g(Free f a)-\u003eFree f a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wizards/docs/System-Console-Wizard-Internal.html#v:inject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a wizard using some back-end.\n\u003c/p\u003e",
          "module": "[\"System.Console.Wizard.Internal\",\"System.Console.Wizard\"]",
          "name": "run",
          "package": "wizards",
          "signature": "Wizard f a -\u003e b (Maybe a)",
          "source": "src/System-Console-Wizard-Internal.html#run",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/wizards/docs/System-Console-Wizard-Internal.html#v:run\",\"http://hackage.haskell.org/package/wizards/docs/System-Console-Wizard.html#v:run\"]"
        },
        "index": {
          "description": "Run wizard using some back-end",
          "hierarchy": "System Console Wizard Internal",
          "module": "System.Console.Wizard.Internal",
          "name": "run",
          "normalized": "Wizard a b-\u003ec(Maybe b)",
          "package": "wizards",
          "signature": "Wizard f a-\u003eb(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wizards/docs/System-Console-Wizard-Internal.html#v:run"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Wizard.Internal",
          "name": "runAlgebra",
          "package": "wizards",
          "signature": "b (a v) -\u003e a v",
          "source": "src/System-Console-Wizard-Internal.html#runAlgebra",
          "type": "method"
        },
        "index": {
          "hierarchy": "System Console Wizard Internal",
          "module": "System.Console.Wizard.Internal",
          "name": "runAlgebra",
          "normalized": "a(b c)-\u003eb c",
          "package": "wizards",
          "partial": "Algebra",
          "signature": "b(a v)-\u003ea v",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/wizards/docs/System-Console-Wizard-Internal.html#v:runAlgebra"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Wizard.Pure",
          "name": "Pure",
          "package": "wizards",
          "source": "src/System-Console-Wizard-Pure.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "System Console Wizard Pure",
          "module": "System.Console.Wizard.Pure",
          "name": "Pure",
          "package": "wizards",
          "partial": "Pure",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/wizards/docs/System-Console-Wizard-Pure.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ePure\u003c/a\u003e\u003c/code\u003e backend supports only simple input and output.\n   Support for \u003ccode\u003e\u003ca\u003ePassword\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eLinePrewritten\u003c/a\u003e\u003c/code\u003e features can be added with \n   a shim from \u003ca\u003eSystem.Console.Wizard.Shim\u003c/a\u003e. \n\u003c/p\u003e",
          "module": "System.Console.Wizard.Pure",
          "name": "Pure",
          "package": "wizards",
          "source": "src/System-Console-Wizard-Pure.html#Pure",
          "type": "data"
        },
        "index": {
          "description": "The Pure backend supports only simple input and output Support for Password and LinePrewritten features can be added with shim from System.Console.Wizard.Shim",
          "hierarchy": "System Console Wizard Pure",
          "module": "System.Console.Wizard.Pure",
          "name": "Pure",
          "package": "wizards",
          "partial": "Pure",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/wizards/docs/System-Console-Wizard-Pure.html#t:Pure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe pure backend is actually just a simple state monad, with the following state.\n\u003c/p\u003e",
          "module": "System.Console.Wizard.Pure",
          "name": "PureState",
          "package": "wizards",
          "source": "src/System-Console-Wizard-Pure.html#PureState",
          "type": "type"
        },
        "index": {
          "description": "The pure backend is actually just simple state monad with the following state",
          "hierarchy": "System Console Wizard Pure",
          "module": "System.Console.Wizard.Pure",
          "name": "PureState",
          "package": "wizards",
          "partial": "Pure State",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/wizards/docs/System-Console-Wizard-Pure.html#t:PureState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThrown if the wizard ever unexpectedly runs out of input.\n\u003c/p\u003e",
          "module": "System.Console.Wizard.Pure",
          "name": "UnexpectedEOI",
          "package": "wizards",
          "source": "src/System-Console-Wizard-Pure.html#UnexpectedEOI",
          "type": "data"
        },
        "index": {
          "description": "Thrown if the wizard ever unexpectedly runs out of input",
          "hierarchy": "System Console Wizard Pure",
          "module": "System.Console.Wizard.Pure",
          "name": "UnexpectedEOI",
          "package": "wizards",
          "partial": "Unexpected EOI",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/wizards/docs/System-Console-Wizard-Pure.html#t:UnexpectedEOI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Wizard.Pure",
          "name": "UnexpectedEOI",
          "package": "wizards",
          "signature": "UnexpectedEOI",
          "source": "src/System-Console-Wizard-Pure.html#UnexpectedEOI",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Wizard Pure",
          "module": "System.Console.Wizard.Pure",
          "name": "UnexpectedEOI",
          "package": "wizards",
          "partial": "Unexpected EOI",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wizards/docs/System-Console-Wizard-Pure.html#v:UnexpectedEOI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a wizard in the Pure backend\n\u003c/p\u003e",
          "module": "System.Console.Wizard.Pure",
          "name": "runPure",
          "package": "wizards",
          "signature": "Wizard Pure a -\u003e String -\u003e (Maybe a, String)",
          "source": "src/System-Console-Wizard-Pure.html#runPure",
          "type": "function"
        },
        "index": {
          "description": "Run wizard in the Pure backend",
          "hierarchy": "System Console Wizard Pure",
          "module": "System.Console.Wizard.Pure",
          "name": "runPure",
          "normalized": "Wizard Pure a-\u003eString-\u003e(Maybe a,String)",
          "package": "wizards",
          "partial": "Pure",
          "signature": "Wizard Pure a-\u003eString-\u003e(Maybe a,String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wizards/docs/System-Console-Wizard-Pure.html#v:runPure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Wizard",
          "name": "Wizard",
          "package": "wizards",
          "source": "src/System-Console-Wizard.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "System Console Wizard",
          "module": "System.Console.Wizard",
          "name": "Wizard",
          "package": "wizards",
          "partial": "Wizard",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/wizards/docs/System-Console-Wizard.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCoproduct of two functors\n\u003c/p\u003e",
          "module": "System.Console.Wizard",
          "name": ":+:",
          "package": "wizards",
          "source": "src/System-Console-Wizard-Internal.html#%3A%2B%3A",
          "type": "data"
        },
        "index": {
          "description": "Coproduct of two functors",
          "hierarchy": "System Console Wizard",
          "module": "System.Console.Wizard",
          "name": ":+:",
          "package": "wizards",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/wizards/docs/System-Console-Wizard.html#t::-43-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSubsumption of two functors. You shouldn't define any of your own instances of this when writing back-ends, rely only on GeneralizedNewtypeDeriving.\n\u003c/p\u003e",
          "module": "System.Console.Wizard",
          "name": ":\u003c:",
          "package": "wizards",
          "source": "src/System-Console-Wizard-Internal.html#%3A%3C%3A",
          "type": "class"
        },
        "index": {
          "description": "Subsumption of two functors You shouldn define any of your own instances of this when writing back-ends rely only on GeneralizedNewtypeDeriving",
          "hierarchy": "System Console Wizard",
          "module": "System.Console.Wizard",
          "name": ":\u003c:",
          "package": "wizards",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/wizards/docs/System-Console-Wizard.html#t::-60-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Wizard",
          "name": "ArbitraryIO",
          "package": "wizards",
          "source": "src/System-Console-Wizard-Internal.html#ArbitraryIO",
          "type": "data"
        },
        "index": {
          "hierarchy": "System Console Wizard",
          "module": "System.Console.Wizard",
          "name": "ArbitraryIO",
          "package": "wizards",
          "partial": "Arbitrary IO",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/wizards/docs/System-Console-Wizard.html#t:ArbitraryIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Wizard",
          "name": "Character",
          "package": "wizards",
          "source": "src/System-Console-Wizard-Internal.html#Character",
          "type": "data"
        },
        "index": {
          "hierarchy": "System Console Wizard",
          "module": "System.Console.Wizard",
          "name": "Character",
          "package": "wizards",
          "partial": "Character",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/wizards/docs/System-Console-Wizard.html#t:Character"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Wizard",
          "name": "Line",
          "package": "wizards",
          "source": "src/System-Console-Wizard-Internal.html#Line",
          "type": "data"
        },
        "index": {
          "hierarchy": "System Console Wizard",
          "module": "System.Console.Wizard",
          "name": "Line",
          "package": "wizards",
          "partial": "Line",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/wizards/docs/System-Console-Wizard.html#t:Line"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Wizard",
          "name": "LinePrewritten",
          "package": "wizards",
          "source": "src/System-Console-Wizard-Internal.html#LinePrewritten",
          "type": "data"
        },
        "index": {
          "hierarchy": "System Console Wizard",
          "module": "System.Console.Wizard",
          "name": "LinePrewritten",
          "package": "wizards",
          "partial": "Line Prewritten",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/wizards/docs/System-Console-Wizard.html#t:LinePrewritten"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Wizard",
          "name": "Output",
          "package": "wizards",
          "source": "src/System-Console-Wizard-Internal.html#Output",
          "type": "data"
        },
        "index": {
          "hierarchy": "System Console Wizard",
          "module": "System.Console.Wizard",
          "name": "Output",
          "package": "wizards",
          "partial": "Output",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/wizards/docs/System-Console-Wizard.html#t:Output"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Wizard",
          "name": "OutputLn",
          "package": "wizards",
          "source": "src/System-Console-Wizard-Internal.html#OutputLn",
          "type": "data"
        },
        "index": {
          "hierarchy": "System Console Wizard",
          "module": "System.Console.Wizard",
          "name": "OutputLn",
          "package": "wizards",
          "partial": "Output Ln",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/wizards/docs/System-Console-Wizard.html#t:OutputLn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Wizard",
          "name": "Password",
          "package": "wizards",
          "source": "src/System-Console-Wizard-Internal.html#Password",
          "type": "data"
        },
        "index": {
          "hierarchy": "System Console Wizard",
          "module": "System.Console.Wizard",
          "name": "Password",
          "package": "wizards",
          "partial": "Password",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/wizards/docs/System-Console-Wizard.html#t:Password"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA string for a prompt\n\u003c/p\u003e",
          "module": "System.Console.Wizard",
          "name": "PromptString",
          "package": "wizards",
          "source": "src/System-Console-Wizard-Internal.html#PromptString",
          "type": "type"
        },
        "index": {
          "description": "string for prompt",
          "hierarchy": "System Console Wizard",
          "module": "System.Console.Wizard",
          "name": "PromptString",
          "package": "wizards",
          "partial": "Prompt String",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/wizards/docs/System-Console-Wizard.html#t:PromptString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003eWizard b a\u003c/code\u003e is a conversation with the user via back-end \u003ccode\u003eb\u003c/code\u003e that will result in a data type \u003ccode\u003ea\u003c/code\u003e, or may fail.\n   A \u003ccode\u003e\u003ca\u003eWizard\u003c/a\u003e\u003c/code\u003e is made up of one or more \"primitives\" (see below), composed using the \u003ccode\u003e\u003ca\u003eApplicative\u003c/a\u003e\u003c/code\u003e,\n  \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eAlternative\u003c/a\u003e\u003c/code\u003e instances. The \u003ccode\u003e\u003ca\u003eAlternative\u003c/a\u003e\u003c/code\u003e instance is, as you might expect, a maybe-style cascade. \n   If the first wizard fails, the next one is tried. \u003ccode\u003e\u003ca\u003emzero\u003c/a\u003e\u003c/code\u003e can be used to induce failure directly.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eWizard\u003c/a\u003e\u003c/code\u003e constructor is exported here for use when developing backends,  but it is better for end-users to \n  simply pretend that \u003ccode\u003e\u003ca\u003eWizard\u003c/a\u003e\u003c/code\u003e is an opaque data type. Don't depend on this unless you have no other choice.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eWizard\u003c/a\u003e\u003c/code\u003es are, internally, just a maybe transformer over a free monad built from some coproduct of functors,\n  each of which is a primitive action.\n\u003c/p\u003e",
          "module": "System.Console.Wizard",
          "name": "Wizard",
          "package": "wizards",
          "source": "src/System-Console-Wizard-Internal.html#Wizard",
          "type": "newtype"
        },
        "index": {
          "description": "Wizard is conversation with the user via back-end that will result in data type or may fail Wizard is made up of one or more primitives see below composed using the Applicative Monad and Alternative instances The Alternative instance is as you might expect maybe-style cascade If the first wizard fails the next one is tried mzero can be used to induce failure directly The Wizard constructor is exported here for use when developing backends but it is better for end-users to simply pretend that Wizard is an opaque data type Don depend on this unless you have no other choice Wizard are internally just maybe transformer over free monad built from some coproduct of functors each of which is primitive action",
          "hierarchy": "System Console Wizard",
          "module": "System.Console.Wizard",
          "name": "Wizard",
          "package": "wizards",
          "partial": "Wizard",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/wizards/docs/System-Console-Wizard.html#t:Wizard"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a single character only from input. Cannot fail (but may throw exceptions, depending on the backend).\n\u003c/p\u003e",
          "module": "System.Console.Wizard",
          "name": "character",
          "package": "wizards",
          "signature": "PromptString -\u003e Wizard b Char",
          "source": "src/System-Console-Wizard.html#character",
          "type": "function"
        },
        "index": {
          "description": "Read single character only from input Cannot fail but may throw exceptions depending on the backend",
          "hierarchy": "System Console Wizard",
          "module": "System.Console.Wizard",
          "name": "character",
          "normalized": "PromptString-\u003eWizard a Char",
          "package": "wizards",
          "signature": "PromptString-\u003eWizard b Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wizards/docs/System-Console-Wizard.html#v:character"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ex `defaultTo` y\u003c/code\u003e will return \u003ccode\u003ey\u003c/code\u003e if \u003ccode\u003ex\u003c/code\u003e fails, e.g \u003ccode\u003eparseRead line `defaultTo` 0\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Console.Wizard",
          "name": "defaultTo",
          "package": "wizards",
          "signature": "Wizard b a -\u003e a -\u003e Wizard b a",
          "source": "src/System-Console-Wizard.html#defaultTo",
          "type": "function"
        },
        "index": {
          "description": "defaultTo will return if fails e.g parseRead line defaultTo",
          "hierarchy": "System Console Wizard",
          "module": "System.Console.Wizard",
          "name": "defaultTo",
          "normalized": "Wizard a b-\u003eb-\u003eWizard a b",
          "package": "wizards",
          "partial": "To",
          "signature": "Wizard b a-\u003ea-\u003eWizard b a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wizards/docs/System-Console-Wizard.html#v:defaultTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnsures that a maybe value satisfies a given predicate.\n\u003c/p\u003e",
          "module": "System.Console.Wizard",
          "name": "ensure",
          "package": "wizards",
          "signature": "(a -\u003e Bool) -\u003e a -\u003e Maybe a",
          "source": "src/System-Console-Wizard.html#ensure",
          "type": "function"
        },
        "index": {
          "description": "Ensures that maybe value satisfies given predicate",
          "hierarchy": "System Console Wizard",
          "module": "System.Console.Wizard",
          "name": "ensure",
          "normalized": "(a-\u003eBool)-\u003ea-\u003eMaybe a",
          "package": "wizards",
          "signature": "(a-\u003eBool)-\u003ea-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wizards/docs/System-Console-Wizard.html#v:ensure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMakes a wizard fail if it gets an ordered quantity outside of the given range.\n\u003c/p\u003e",
          "module": "System.Console.Wizard",
          "name": "inRange",
          "package": "wizards",
          "signature": "(a, a) -\u003e Wizard b a -\u003e Wizard b a",
          "source": "src/System-Console-Wizard.html#inRange",
          "type": "function"
        },
        "index": {
          "description": "Makes wizard fail if it gets an ordered quantity outside of the given range",
          "hierarchy": "System Console Wizard",
          "module": "System.Console.Wizard",
          "name": "inRange",
          "normalized": "(a,a)-\u003eWizard b a-\u003eWizard b a",
          "package": "wizards",
          "partial": "Range",
          "signature": "(a,a)-\u003eWizard b a-\u003eWizard b a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wizards/docs/System-Console-Wizard.html#v:inRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTranslate a maybe value into wizard success/failure.\t\n\u003c/p\u003e",
          "module": "System.Console.Wizard",
          "name": "liftMaybe",
          "package": "wizards",
          "signature": "Maybe a -\u003e Wizard b a",
          "source": "src/System-Console-Wizard.html#liftMaybe",
          "type": "function"
        },
        "index": {
          "description": "Translate maybe value into wizard success failure",
          "hierarchy": "System Console Wizard",
          "module": "System.Console.Wizard",
          "name": "liftMaybe",
          "normalized": "Maybe a-\u003eWizard b a",
          "package": "wizards",
          "partial": "Maybe",
          "signature": "Maybe a-\u003eWizard b a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wizards/docs/System-Console-Wizard.html#v:liftMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead one line of input from the user. Cannot fail (but may throw exceptions, depending on the backend).\n\u003c/p\u003e",
          "module": "System.Console.Wizard",
          "name": "line",
          "package": "wizards",
          "signature": "PromptString -\u003e Wizard b String",
          "source": "src/System-Console-Wizard.html#line",
          "type": "function"
        },
        "index": {
          "description": "Read one line of input from the user Cannot fail but may throw exceptions depending on the backend",
          "hierarchy": "System Console Wizard",
          "module": "System.Console.Wizard",
          "name": "line",
          "normalized": "PromptString-\u003eWizard a String",
          "package": "wizards",
          "signature": "PromptString-\u003eWizard b String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wizards/docs/System-Console-Wizard.html#v:line"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead one line of input, with some default text already present, before and/or after the editing cursor.\n\u003c/p\u003e",
          "module": "System.Console.Wizard",
          "name": "linePrewritten",
          "package": "wizards",
          "signature": "PromptString-\u003e String-\u003e String-\u003e Wizard b String",
          "type": "function"
        },
        "index": {
          "description": "Read one line of input with some default text already present before and or after the editing cursor",
          "hierarchy": "System Console Wizard",
          "module": "System.Console.Wizard",
          "name": "linePrewritten",
          "normalized": "PromptString-\u003eString-\u003eString-\u003eWizard a String",
          "package": "wizards",
          "partial": "Prewritten",
          "signature": "PromptString-\u003eString-\u003eString-\u003eWizard b String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wizards/docs/System-Console-Wizard.html#v:linePrewritten"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimply \u003ccode\u003evalidator (not . null)\u003c/code\u003e, makes a wizard fail if it gets an empty string.\n\u003c/p\u003e",
          "module": "System.Console.Wizard",
          "name": "nonEmpty",
          "package": "wizards",
          "signature": "Wizard b [a] -\u003e Wizard b [a]",
          "source": "src/System-Console-Wizard.html#nonEmpty",
          "type": "function"
        },
        "index": {
          "description": "Simply validator not null makes wizard fail if it gets an empty string",
          "hierarchy": "System Console Wizard",
          "module": "System.Console.Wizard",
          "name": "nonEmpty",
          "normalized": "Wizard a[b]-\u003eWizard a[b]",
          "package": "wizards",
          "partial": "Empty",
          "signature": "Wizard b[a]-\u003eWizard b[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wizards/docs/System-Console-Wizard.html#v:nonEmpty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOutput a string. Does not fail.\n\u003c/p\u003e",
          "module": "System.Console.Wizard",
          "name": "output",
          "package": "wizards",
          "signature": "String -\u003e Wizard b ()",
          "source": "src/System-Console-Wizard.html#output",
          "type": "function"
        },
        "index": {
          "description": "Output string Does not fail",
          "hierarchy": "System Console Wizard",
          "module": "System.Console.Wizard",
          "name": "output",
          "normalized": "String-\u003eWizard a()",
          "package": "wizards",
          "signature": "String-\u003eWizard b()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wizards/docs/System-Console-Wizard.html#v:output"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOutput a string followed by a newline. Does not fail.\n\u003c/p\u003e",
          "module": "System.Console.Wizard",
          "name": "outputLn",
          "package": "wizards",
          "signature": "String -\u003e Wizard b ()",
          "source": "src/System-Console-Wizard.html#outputLn",
          "type": "function"
        },
        "index": {
          "description": "Output string followed by newline Does not fail",
          "hierarchy": "System Console Wizard",
          "module": "System.Console.Wizard",
          "name": "outputLn",
          "normalized": "String-\u003eWizard a()",
          "package": "wizards",
          "partial": "Ln",
          "signature": "String-\u003eWizard b()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wizards/docs/System-Console-Wizard.html#v:outputLn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimply \u003ccode\u003eparser readP\u003c/code\u003e. Attaches a simple \u003ccode\u003eread\u003c/code\u003e parser to a \u003ccode\u003e\u003ca\u003eWizard\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Console.Wizard",
          "name": "parseRead",
          "package": "wizards",
          "signature": "Wizard b String -\u003e Wizard b a",
          "source": "src/System-Console-Wizard.html#parseRead",
          "type": "function"
        },
        "index": {
          "description": "Simply parser readP Attaches simple read parser to Wizard",
          "hierarchy": "System Console Wizard",
          "module": "System.Console.Wizard",
          "name": "parseRead",
          "normalized": "Wizard a String-\u003eWizard a b",
          "package": "wizards",
          "partial": "Read",
          "signature": "Wizard b String-\u003eWizard b a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wizards/docs/System-Console-Wizard.html#v:parseRead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e, except the function may be partial (\u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e causes the wizard to fail).\n\u003c/p\u003e",
          "module": "System.Console.Wizard",
          "name": "parser",
          "package": "wizards",
          "signature": "(a -\u003e Maybe c) -\u003e Wizard b a -\u003e Wizard b c",
          "source": "src/System-Console-Wizard.html#parser",
          "type": "function"
        },
        "index": {
          "description": "Like fmap except the function may be partial Nothing causes the wizard to fail",
          "hierarchy": "System Console Wizard",
          "module": "System.Console.Wizard",
          "name": "parser",
          "normalized": "(a-\u003eMaybe b)-\u003eWizard c a-\u003eWizard c b",
          "package": "wizards",
          "signature": "(a-\u003eMaybe c)-\u003eWizard b a-\u003eWizard b c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wizards/docs/System-Console-Wizard.html#v:parser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead one line of password input, with an optional mask character.\n\u003c/p\u003e",
          "module": "System.Console.Wizard",
          "name": "password",
          "package": "wizards",
          "signature": "PromptString-\u003e Maybe Char-\u003e Wizard b String",
          "type": "function"
        },
        "index": {
          "description": "Read one line of password input with an optional mask character",
          "hierarchy": "System Console Wizard",
          "module": "System.Console.Wizard",
          "name": "password",
          "normalized": "PromptString-\u003eMaybe Char-\u003eWizard a String",
          "package": "wizards",
          "signature": "PromptString-\u003eMaybe Char-\u003eWizard b String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wizards/docs/System-Console-Wizard.html#v:password"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA read-based parser for the \u003ccode\u003e\u003ca\u003eparser\u003c/a\u003e\u003c/code\u003e modifier.\n\u003c/p\u003e",
          "module": "System.Console.Wizard",
          "name": "readP",
          "package": "wizards",
          "signature": "String -\u003e Maybe a",
          "source": "src/System-Console-Wizard.html#readP",
          "type": "function"
        },
        "index": {
          "description": "read-based parser for the parser modifier",
          "hierarchy": "System Console Wizard",
          "module": "System.Console.Wizard",
          "name": "readP",
          "normalized": "String-\u003eMaybe a",
          "package": "wizards",
          "signature": "String-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wizards/docs/System-Console-Wizard.html#v:readP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetry produces a wizard that will retry the entire conversation again if it fails.\n It is simply \u003ccode\u003eretry x = x \u003c|\u003e retry x\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Console.Wizard",
          "name": "retry",
          "package": "wizards",
          "signature": "Wizard b a -\u003e Wizard b a",
          "source": "src/System-Console-Wizard.html#retry",
          "type": "function"
        },
        "index": {
          "description": "Retry produces wizard that will retry the entire conversation again if it fails It is simply retry retry",
          "hierarchy": "System Console Wizard",
          "module": "System.Console.Wizard",
          "name": "retry",
          "normalized": "Wizard a b-\u003eWizard a b",
          "package": "wizards",
          "signature": "Wizard b a-\u003eWizard b a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wizards/docs/System-Console-Wizard.html#v:retry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003eretry\u003c/a\u003e\u003c/code\u003e, except an error message can be specified.\n\u003c/p\u003e",
          "module": "System.Console.Wizard",
          "name": "retryMsg",
          "package": "wizards",
          "signature": "String -\u003e Wizard b a -\u003e Wizard b a",
          "source": "src/System-Console-Wizard.html#retryMsg",
          "type": "function"
        },
        "index": {
          "description": "Same as retry except an error message can be specified",
          "hierarchy": "System Console Wizard",
          "module": "System.Console.Wizard",
          "name": "retryMsg",
          "normalized": "String-\u003eWizard a b-\u003eWizard a b",
          "package": "wizards",
          "partial": "Msg",
          "signature": "String-\u003eWizard b a-\u003eWizard b a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wizards/docs/System-Console-Wizard.html#v:retryMsg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003evalidator p\u003c/code\u003e causes a wizard to fail if the output value does not satisfy the predicate \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Console.Wizard",
          "name": "validator",
          "package": "wizards",
          "signature": "(a -\u003e Bool) -\u003e Wizard b a -\u003e Wizard b a",
          "source": "src/System-Console-Wizard.html#validator",
          "type": "function"
        },
        "index": {
          "description": "validator causes wizard to fail if the output value does not satisfy the predicate",
          "hierarchy": "System Console Wizard",
          "module": "System.Console.Wizard",
          "name": "validator",
          "normalized": "(a-\u003eBool)-\u003eWizard b a-\u003eWizard b a",
          "package": "wizards",
          "signature": "(a-\u003eBool)-\u003eWizard b a-\u003eWizard b a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wizards/docs/System-Console-Wizard.html#v:validator"
      }
    }
  ]
]