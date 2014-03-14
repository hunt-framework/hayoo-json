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
        "word": "text-register-machine"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn implementation of Lawrence S. Moss' \u003ccode\u003e1#\u003c/code\u003e language and Text\n Register Machine (\u003ca\u003ehttp://www.indiana.edu/~iulg/trm/\u003c/a\u003e). \n\u003c/p\u003e\u003cp\u003eThis module also includes a slightly higher-level language, \u003ccode\u003e1#L\u003c/code\u003e,\n that replaces the forward and backward relative jumps of \u003ccode\u003e1#\u003c/code\u003e with\n labels and goto instructions.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.TRM.Base",
          "name": "Base",
          "package": "text-register-machine",
          "source": "src/Language-TRM-Base.html",
          "type": "module"
        },
        "index": {
          "description": "An implementation of Lawrence Moss language and Text Register Machine http www.indiana.edu iulg trm This module also includes slightly higher-level language that replaces the forward and backward relative jumps of with labels and goto instructions",
          "hierarchy": "Language TRM Base",
          "module": "Language.TRM.Base",
          "name": "Base",
          "package": "text-register-machine",
          "partial": "Base",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/text-register-machine/docs/Language-TRM-Base.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAbstract syntax for the primitive \u003ccode\u003e1#\u003c/code\u003e instructions.\n\u003c/p\u003e",
          "module": "Language.TRM.Base",
          "name": "Instruction",
          "package": "text-register-machine",
          "source": "src/Language-TRM-Base.html#Instruction",
          "type": "data"
        },
        "index": {
          "description": "Abstract syntax for the primitive instructions",
          "hierarchy": "Language TRM Base",
          "module": "Language.TRM.Base",
          "name": "Instruction",
          "package": "text-register-machine",
          "partial": "Instruction",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/text-register-machine/docs/Language-TRM-Base.html#t:Instruction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe default backend for \u003ccode\u003e\u003ca\u003eLSymantics\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.TRM.Base",
          "name": "LComp",
          "package": "text-register-machine",
          "source": "src/Language-TRM-Base.html#LComp",
          "type": "newtype"
        },
        "index": {
          "description": "The default backend for LSymantics",
          "hierarchy": "Language TRM Base",
          "module": "Language.TRM.Base",
          "name": "LComp",
          "package": "text-register-machine",
          "partial": "LComp",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/text-register-machine/docs/Language-TRM-Base.html#t:LComp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAbstract syntax for a variant of \u003ccode\u003e1#\u003c/code\u003e, \u003ccode\u003e1#L\u003c/code\u003e with labels and\n gotos instead of forward and backward jumps.\n\u003c/p\u003e",
          "module": "Language.TRM.Base",
          "name": "LInstruction",
          "package": "text-register-machine",
          "source": "src/Language-TRM-Base.html#LInstruction",
          "type": "data"
        },
        "index": {
          "description": "Abstract syntax for variant of with labels and gotos instead of forward and backward jumps",
          "hierarchy": "Language TRM Base",
          "module": "Language.TRM.Base",
          "name": "LInstruction",
          "package": "text-register-machine",
          "partial": "LInstruction",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/text-register-machine/docs/Language-TRM-Base.html#t:LInstruction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e1#L\u003c/code\u003e program is a \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e of \u003ccode\u003e\u003ca\u003eLInstruction\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Language.TRM.Base",
          "name": "LProgram",
          "package": "text-register-machine",
          "source": "src/Language-TRM-Base.html#LProgram",
          "type": "type"
        },
        "index": {
          "description": "program is Vector of LInstruction",
          "hierarchy": "Language TRM Base",
          "module": "Language.TRM.Base",
          "name": "LProgram",
          "package": "text-register-machine",
          "partial": "LProgram",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/text-register-machine/docs/Language-TRM-Base.html#t:LProgram"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConcrete syntax for \u003ccode\u003e1#L\u003c/code\u003e, indexed by backend representation in\n the typed tagless style\n (\u003ca\u003ehttp://okmij.org/ftp/tagless-final/index.html\u003c/a\u003e).\n\u003c/p\u003e",
          "module": "Language.TRM.Base",
          "name": "LSymantics",
          "package": "text-register-machine",
          "source": "src/Language-TRM-Base.html#LSymantics",
          "type": "class"
        },
        "index": {
          "description": "Concrete syntax for indexed by backend representation in the typed tagless style http okmij.org ftp tagless-final index.html",
          "hierarchy": "Language TRM Base",
          "module": "Language.TRM.Base",
          "name": "LSymantics",
          "package": "text-register-machine",
          "partial": "LSymantics",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/text-register-machine/docs/Language-TRM-Base.html#t:LSymantics"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLabel representation.\n\u003c/p\u003e",
          "module": "Language.TRM.Base",
          "name": "Label",
          "package": "text-register-machine",
          "source": "src/Language-TRM-Base.html#Label",
          "type": "type"
        },
        "index": {
          "description": "Label representation",
          "hierarchy": "Language TRM Base",
          "module": "Language.TRM.Base",
          "name": "Label",
          "package": "text-register-machine",
          "partial": "Label",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/text-register-machine/docs/Language-TRM-Base.html#t:Label"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTyped representation of the \u003ccode\u003e1#\u003c/code\u003e letters.\n\u003c/p\u003e",
          "module": "Language.TRM.Base",
          "name": "Letter",
          "package": "text-register-machine",
          "source": "src/Language-TRM-Base.html#Letter",
          "type": "data"
        },
        "index": {
          "description": "Typed representation of the letters",
          "hierarchy": "Language TRM Base",
          "module": "Language.TRM.Base",
          "name": "Letter",
          "package": "text-register-machine",
          "partial": "Letter",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/text-register-machine/docs/Language-TRM-Base.html#t:Letter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eMachine\u003c/a\u003e\u003c/code\u003e consists of a \u003ccode\u003e\u003ca\u003eProgram\u003c/a\u003e\u003c/code\u003e, a program counter, and a\n \u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e from registers to the words they contain.\n\u003c/p\u003e",
          "module": "Language.TRM.Base",
          "name": "Machine",
          "package": "text-register-machine",
          "source": "src/Language-TRM-Base.html#Machine",
          "type": "data"
        },
        "index": {
          "description": "Machine consists of Program program counter and Map from registers to the words they contain",
          "hierarchy": "Language TRM Base",
          "module": "Language.TRM.Base",
          "name": "Machine",
          "package": "text-register-machine",
          "partial": "Machine",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/text-register-machine/docs/Language-TRM-Base.html#t:Machine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e1#\u003c/code\u003e program is a \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e of \u003ccode\u003e\u003ca\u003eInstruction\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Language.TRM.Base",
          "name": "Program",
          "package": "text-register-machine",
          "source": "src/Language-TRM-Base.html#Program",
          "type": "type"
        },
        "index": {
          "description": "program is Vector of Instruction",
          "hierarchy": "Language TRM Base",
          "module": "Language.TRM.Base",
          "name": "Program",
          "package": "text-register-machine",
          "partial": "Program",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/text-register-machine/docs/Language-TRM-Base.html#t:Program"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRegister identifiers.\n\u003c/p\u003e",
          "module": "Language.TRM.Base",
          "name": "Register",
          "package": "text-register-machine",
          "source": "src/Language-TRM-Base.html#Register",
          "type": "newtype"
        },
        "index": {
          "description": "Register identifiers",
          "hierarchy": "Language TRM Base",
          "module": "Language.TRM.Base",
          "name": "Register",
          "package": "text-register-machine",
          "partial": "Register",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/text-register-machine/docs/Language-TRM-Base.html#t:Register"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA wrapper around a list of \u003ccode\u003e\u003ca\u003eLetter\u003c/a\u003e\u003c/code\u003es with an \u003ccode\u003e\u003ca\u003eIsString\u003c/a\u003e\u003c/code\u003e instance,\n so that literal strings of \u003ccode\u003e1\u003c/code\u003es, \u003ccode\u003e#\u003c/code\u003es, and whitespace can be used\n instead of lists of \u003ccode\u003e\u003ca\u003eOne\u003c/a\u003e\u003c/code\u003es and \u003ccode\u003e\u003ca\u003eHash\u003c/a\u003e\u003c/code\u003ees. This requires the\n \u003ccode\u003e-XOverloadedStrings\u003c/code\u003e flag.\n\u003c/p\u003e\u003cpre\u003e loop :: Word\n loop = \"1### 11####\"\n\u003c/pre\u003e",
          "module": "Language.TRM.Base",
          "name": "Word",
          "package": "text-register-machine",
          "source": "src/Language-TRM-Base.html#Word",
          "type": "newtype"
        },
        "index": {
          "description": "wrapper around list of Letter with an IsString instance so that literal strings of and whitespace can be used instead of lists of One and Hash es This requires the XOverloadedStrings flag loop Word loop",
          "hierarchy": "Language TRM Base",
          "module": "Language.TRM.Base",
          "name": "Word",
          "package": "text-register-machine",
          "partial": "Word",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/text-register-machine/docs/Language-TRM-Base.html#t:Word"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.TRM.Base",
          "name": "Backward",
          "package": "text-register-machine",
          "signature": "Backward Int",
          "source": "src/Language-TRM-Base.html#Instruction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language TRM Base",
          "module": "Language.TRM.Base",
          "name": "Backward",
          "package": "text-register-machine",
          "partial": "Backward",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-register-machine/docs/Language-TRM-Base.html#v:Backward"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.TRM.Base",
          "name": "Case",
          "package": "text-register-machine",
          "signature": "Case Register",
          "source": "src/Language-TRM-Base.html#Instruction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language TRM Base",
          "module": "Language.TRM.Base",
          "name": "Case",
          "package": "text-register-machine",
          "partial": "Case",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-register-machine/docs/Language-TRM-Base.html#v:Case"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.TRM.Base",
          "name": "Forward",
          "package": "text-register-machine",
          "signature": "Forward Int",
          "source": "src/Language-TRM-Base.html#Instruction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language TRM Base",
          "module": "Language.TRM.Base",
          "name": "Forward",
          "package": "text-register-machine",
          "partial": "Forward",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-register-machine/docs/Language-TRM-Base.html#v:Forward"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.TRM.Base",
          "name": "Hash",
          "package": "text-register-machine",
          "signature": "Hash",
          "source": "src/Language-TRM-Base.html#Letter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language TRM Base",
          "module": "Language.TRM.Base",
          "name": "Hash",
          "package": "text-register-machine",
          "partial": "Hash",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-register-machine/docs/Language-TRM-Base.html#v:Hash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.TRM.Base",
          "name": "LC",
          "package": "text-register-machine",
          "signature": "LC",
          "source": "src/Language-TRM-Base.html#LComp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language TRM Base",
          "module": "Language.TRM.Base",
          "name": "LC",
          "package": "text-register-machine",
          "partial": "LC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-register-machine/docs/Language-TRM-Base.html#v:LC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.TRM.Base",
          "name": "LCase",
          "package": "text-register-machine",
          "signature": "LCase Register",
          "source": "src/Language-TRM-Base.html#LInstruction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language TRM Base",
          "module": "Language.TRM.Base",
          "name": "LCase",
          "package": "text-register-machine",
          "partial": "LCase",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-register-machine/docs/Language-TRM-Base.html#v:LCase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.TRM.Base",
          "name": "LGoto",
          "package": "text-register-machine",
          "signature": "LGoto Label",
          "source": "src/Language-TRM-Base.html#LInstruction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language TRM Base",
          "module": "Language.TRM.Base",
          "name": "LGoto",
          "package": "text-register-machine",
          "partial": "LGoto",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-register-machine/docs/Language-TRM-Base.html#v:LGoto"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.TRM.Base",
          "name": "LLabel",
          "package": "text-register-machine",
          "signature": "LLabel Label",
          "source": "src/Language-TRM-Base.html#LInstruction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language TRM Base",
          "module": "Language.TRM.Base",
          "name": "LLabel",
          "package": "text-register-machine",
          "partial": "LLabel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-register-machine/docs/Language-TRM-Base.html#v:LLabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.TRM.Base",
          "name": "LSnocHash",
          "package": "text-register-machine",
          "signature": "LSnocHash Register",
          "source": "src/Language-TRM-Base.html#LInstruction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language TRM Base",
          "module": "Language.TRM.Base",
          "name": "LSnocHash",
          "package": "text-register-machine",
          "partial": "LSnoc Hash",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-register-machine/docs/Language-TRM-Base.html#v:LSnocHash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.TRM.Base",
          "name": "LSnocOne",
          "package": "text-register-machine",
          "signature": "LSnocOne Register",
          "source": "src/Language-TRM-Base.html#LInstruction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language TRM Base",
          "module": "Language.TRM.Base",
          "name": "LSnocOne",
          "package": "text-register-machine",
          "partial": "LSnoc One",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-register-machine/docs/Language-TRM-Base.html#v:LSnocOne"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.TRM.Base",
          "name": "M",
          "package": "text-register-machine",
          "signature": "M",
          "source": "src/Language-TRM-Base.html#Machine",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language TRM Base",
          "module": "Language.TRM.Base",
          "name": "M",
          "package": "text-register-machine",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-register-machine/docs/Language-TRM-Base.html#v:M"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.TRM.Base",
          "name": "One",
          "package": "text-register-machine",
          "signature": "One",
          "source": "src/Language-TRM-Base.html#Letter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language TRM Base",
          "module": "Language.TRM.Base",
          "name": "One",
          "package": "text-register-machine",
          "partial": "One",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-register-machine/docs/Language-TRM-Base.html#v:One"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.TRM.Base",
          "name": "R",
          "package": "text-register-machine",
          "signature": "R Int",
          "source": "src/Language-TRM-Base.html#Register",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language TRM Base",
          "module": "Language.TRM.Base",
          "name": "R",
          "package": "text-register-machine",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-register-machine/docs/Language-TRM-Base.html#v:R"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.TRM.Base",
          "name": "SnocHash",
          "package": "text-register-machine",
          "signature": "SnocHash Register",
          "source": "src/Language-TRM-Base.html#Instruction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language TRM Base",
          "module": "Language.TRM.Base",
          "name": "SnocHash",
          "package": "text-register-machine",
          "partial": "Snoc Hash",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-register-machine/docs/Language-TRM-Base.html#v:SnocHash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.TRM.Base",
          "name": "SnocOne",
          "package": "text-register-machine",
          "signature": "SnocOne Register",
          "source": "src/Language-TRM-Base.html#Instruction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language TRM Base",
          "module": "Language.TRM.Base",
          "name": "SnocOne",
          "package": "text-register-machine",
          "partial": "Snoc One",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-register-machine/docs/Language-TRM-Base.html#v:SnocOne"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.TRM.Base",
          "name": "W",
          "package": "text-register-machine",
          "signature": "W [Letter]",
          "source": "src/Language-TRM-Base.html#Word",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language TRM Base",
          "module": "Language.TRM.Base",
          "name": "W",
          "normalized": "W[Letter]",
          "package": "text-register-machine",
          "signature": "W[Letter]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-register-machine/docs/Language-TRM-Base.html#v:W"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompiles an \u003ccode\u003e\u003ca\u003eLComp\u003c/a\u003e\u003c/code\u003e program into an \u003ccode\u003e\u003ca\u003eLProgram\u003c/a\u003e\u003c/code\u003e, with an initial\n fresh register.\n\u003c/p\u003e",
          "module": "Language.TRM.Base",
          "name": "compileL",
          "package": "text-register-machine",
          "signature": "Register -\u003e LComp () -\u003e LProgram",
          "source": "src/Language-TRM-Base.html#compileL",
          "type": "function"
        },
        "index": {
          "description": "Compiles an LComp program into an LProgram with an initial fresh register",
          "hierarchy": "Language TRM Base",
          "module": "Language.TRM.Base",
          "name": "compileL",
          "normalized": "Register-\u003eLComp()-\u003eLProgram",
          "package": "text-register-machine",
          "signature": "Register-\u003eLComp()-\u003eLProgram",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-register-machine/docs/Language-TRM-Base.html#v:compileL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCase analysis; pops a \u003ccode\u003e\u003ca\u003eLetter\u003c/a\u003e\u003c/code\u003e from the front of the\n scrutinized \u003ccode\u003e\u003ca\u003eRegister\u003c/a\u003e\u003c/code\u003e, if non-empty. Note that in the default\n backend, new labels are automatically created and placed for the\n branches of the \u003ccode\u003e\u003ca\u003econd\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.TRM.Base",
          "name": "cond",
          "package": "text-register-machine",
          "signature": "cond",
          "source": "src/Language-TRM-Base.html#cond",
          "type": "method"
        },
        "index": {
          "description": "Case analysis pops Letter from the front of the scrutinized Register if non-empty Note that in the default backend new labels are automatically created and placed for the branches of the cond",
          "hierarchy": "Language TRM Base",
          "module": "Language.TRM.Base",
          "name": "cond",
          "package": "text-register-machine",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/text-register-machine/docs/Language-TRM-Base.html#v:cond"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecodes a \u003ccode\u003e\u003ca\u003eWord\u003c/a\u003e\u003c/code\u003e containing backwards-binary digits into a \u003ccode\u003e\u003ca\u003eNum\u003c/a\u003e\u003c/code\u003e\n type. Fails with an error if the \u003ccode\u003e\u003ca\u003eWord\u003c/a\u003e\u003c/code\u003e is empty.\n\u003c/p\u003e",
          "module": "Language.TRM.Base",
          "name": "decodeBB",
          "package": "text-register-machine",
          "signature": "Word -\u003e a",
          "source": "src/Language-TRM-Base.html#decodeBB",
          "type": "function"
        },
        "index": {
          "description": "Decodes Word containing backwards-binary digits into Num type Fails with an error if the Word is empty",
          "hierarchy": "Language TRM Base",
          "module": "Language.TRM.Base",
          "name": "decodeBB",
          "normalized": "Word-\u003ea",
          "package": "text-register-machine",
          "partial": "BB",
          "signature": "Word-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-register-machine/docs/Language-TRM-Base.html#v:decodeBB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA combinator to cleanly implement looping structures in \u003ccode\u003e\u003ca\u003eLComp\u003c/a\u003e\u003c/code\u003e code.\n\u003c/p\u003e\u003cp\u003eTakes a function that expects two arguments, \u003ccode\u003econtinue\u003c/code\u003e and\n \u003ccode\u003ebreak\u003c/code\u003e. The body of the function is a block of \u003ccode\u003e\u003ca\u003eLComp\u003c/a\u003e\u003c/code\u003e code that\n gets repeated whenever \u003ccode\u003econtinue\u003c/code\u003e is run. If \u003ccode\u003ebreak\u003c/code\u003e is run,\n control jumps to the instruction after the call to \u003ccode\u003e\u003ca\u003edo_\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.TRM.Base",
          "name": "do_",
          "package": "text-register-machine",
          "signature": "(LComp () -\u003e LComp () -\u003e LComp ()) -\u003e LComp ()",
          "source": "src/Language-TRM-Base.html#do_",
          "type": "function"
        },
        "index": {
          "description": "combinator to cleanly implement looping structures in LComp code Takes function that expects two arguments continue and break The body of the function is block of LComp code that gets repeated whenever continue is run If break is run control jumps to the instruction after the call to do",
          "hierarchy": "Language TRM Base",
          "module": "Language.TRM.Base",
          "name": "do_",
          "normalized": "(LComp()-\u003eLComp()-\u003eLComp())-\u003eLComp()",
          "package": "text-register-machine",
          "signature": "(LComp()-\u003eLComp()-\u003eLComp())-\u003eLComp()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-register-machine/docs/Language-TRM-Base.html#v:do_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncodes an \u003ccode\u003e\u003ca\u003eIntegral\u003c/a\u003e\u003c/code\u003e type into a \u003ccode\u003e\u003ca\u003eWord\u003c/a\u003e\u003c/code\u003e of backwards-binary\n digits using \u003ccode\u003e1\u003c/code\u003es and \u003ccode\u003e#\u003c/code\u003es for \u003ccode\u003e1\u003c/code\u003es and \u003ccode\u003e0\u003c/code\u003es, respectively. Note\n that the representation of zero is a single \u003ccode\u003e#\u003c/code\u003e rather than the\n empty \u003ccode\u003e\u003ca\u003eWord\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.TRM.Base",
          "name": "encodeBB",
          "package": "text-register-machine",
          "signature": "a -\u003e Word",
          "source": "src/Language-TRM-Base.html#encodeBB",
          "type": "function"
        },
        "index": {
          "description": "Encodes an Integral type into Word of backwards-binary digits using and for and respectively Note that the representation of zero is single rather than the empty Word",
          "hierarchy": "Language TRM Base",
          "module": "Language.TRM.Base",
          "name": "encodeBB",
          "normalized": "a-\u003eWord",
          "package": "text-register-machine",
          "partial": "BB",
          "signature": "a-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-register-machine/docs/Language-TRM-Base.html#v:encodeBB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn a fresh \u003ccode\u003e\u003ca\u003eLabel\u003c/a\u003e\u003c/code\u003e to be used in a call to \u003ccode\u003e\u003ca\u003elabel\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003egoto\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.TRM.Base",
          "name": "freshLabel",
          "package": "text-register-machine",
          "signature": "repr Label",
          "source": "src/Language-TRM-Base.html#freshLabel",
          "type": "method"
        },
        "index": {
          "description": "Return fresh Label to be used in call to label or goto",
          "hierarchy": "Language TRM Base",
          "module": "Language.TRM.Base",
          "name": "freshLabel",
          "package": "text-register-machine",
          "partial": "Label",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/text-register-machine/docs/Language-TRM-Base.html#v:freshLabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvenience function to create a fresh label and place it at the\n current position.\n\u003c/p\u003e",
          "module": "Language.TRM.Base",
          "name": "freshLabelHere",
          "package": "text-register-machine",
          "signature": "repr Label",
          "source": "src/Language-TRM-Base.html#freshLabelHere",
          "type": "function"
        },
        "index": {
          "description": "Convenience function to create fresh label and place it at the current position",
          "hierarchy": "Language TRM Base",
          "module": "Language.TRM.Base",
          "name": "freshLabelHere",
          "package": "text-register-machine",
          "partial": "Label Here",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-register-machine/docs/Language-TRM-Base.html#v:freshLabelHere"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn a fresh \u003ccode\u003e\u003ca\u003eRegister\u003c/a\u003e\u003c/code\u003e that has not been used so far in the program.\n\u003c/p\u003e",
          "module": "Language.TRM.Base",
          "name": "freshReg",
          "package": "text-register-machine",
          "signature": "repr Register",
          "source": "src/Language-TRM-Base.html#freshReg",
          "type": "method"
        },
        "index": {
          "description": "Return fresh Register that has not been used so far in the program",
          "hierarchy": "Language TRM Base",
          "module": "Language.TRM.Base",
          "name": "freshReg",
          "package": "text-register-machine",
          "partial": "Reg",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/text-register-machine/docs/Language-TRM-Base.html#v:freshReg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a \u003ccode\u003e1#L\u003c/code\u003e \u003ccode\u003e\u003ca\u003eLProgram\u003c/a\u003e\u003c/code\u003e into a semantically-equivalent \u003ccode\u003e1#\u003c/code\u003e\n \u003ccode\u003e\u003ca\u003eProgram\u003c/a\u003e\u003c/code\u003e. May fail with an error if the \u003ccode\u003e\u003ca\u003eLProgram\u003c/a\u003e\u003c/code\u003e contains\n duplicate labels, jumps to undefined labels. An error will also\n occur if the \u003ccode\u003e\u003ca\u003eLProgram\u003c/a\u003e\u003c/code\u003e contains a goto that would translate into a\n jump of 0 instructions, as this is impossible to express in \u003ccode\u003e1#\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.TRM.Base",
          "name": "fromLabeledProgram",
          "package": "text-register-machine",
          "signature": "LProgram -\u003e Program",
          "source": "src/Language-TRM-Base.html#fromLabeledProgram",
          "type": "function"
        },
        "index": {
          "description": "Convert LProgram into semantically-equivalent Program May fail with an error if the LProgram contains duplicate labels jumps to undefined labels An error will also occur if the LProgram contains goto that would translate into jump of instructions as this is impossible to express in",
          "hierarchy": "Language TRM Base",
          "module": "Language.TRM.Base",
          "name": "fromLabeledProgram",
          "normalized": "LProgram-\u003eProgram",
          "package": "text-register-machine",
          "partial": "Labeled Program",
          "signature": "LProgram-\u003eProgram",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-register-machine/docs/Language-TRM-Base.html#v:fromLabeledProgram"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnconditional jump to the given \u003ccode\u003e\u003ca\u003eLabel\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.TRM.Base",
          "name": "goto",
          "package": "text-register-machine",
          "signature": "Label -\u003e repr ()",
          "source": "src/Language-TRM-Base.html#goto",
          "type": "method"
        },
        "index": {
          "description": "Unconditional jump to the given Label",
          "hierarchy": "Language TRM Base",
          "module": "Language.TRM.Base",
          "name": "goto",
          "normalized": "Label-\u003ea()",
          "package": "text-register-machine",
          "signature": "Label-\u003erepr()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/text-register-machine/docs/Language-TRM-Base.html#v:goto"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert an \u003ccode\u003e\u003ca\u003eInstruction\u003c/a\u003e\u003c/code\u003e to concrete syntax.\n\u003c/p\u003e",
          "module": "Language.TRM.Base",
          "name": "instructionToString",
          "package": "text-register-machine",
          "signature": "Instruction -\u003e String",
          "source": "src/Language-TRM-Base.html#instructionToString",
          "type": "function"
        },
        "index": {
          "description": "Convert an Instruction to concrete syntax",
          "hierarchy": "Language TRM Base",
          "module": "Language.TRM.Base",
          "name": "instructionToString",
          "normalized": "Instruction-\u003eString",
          "package": "text-register-machine",
          "partial": "To String",
          "signature": "Instruction-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-register-machine/docs/Language-TRM-Base.html#v:instructionToString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePlace a \u003ccode\u003e\u003ca\u003eLabel\u003c/a\u003e\u003c/code\u003e at the given point in the program. Note that a\n particular \u003ccode\u003e\u003ca\u003eLabel\u003c/a\u003e\u003c/code\u003e may be used only once per program.\n\u003c/p\u003e",
          "module": "Language.TRM.Base",
          "name": "label",
          "package": "text-register-machine",
          "signature": "Label -\u003e repr ()",
          "source": "src/Language-TRM-Base.html#label",
          "type": "method"
        },
        "index": {
          "description": "Place Label at the given point in the program Note that particular Label may be used only once per program",
          "hierarchy": "Language TRM Base",
          "module": "Language.TRM.Base",
          "name": "label",
          "normalized": "Label-\u003ea()",
          "package": "text-register-machine",
          "signature": "Label-\u003erepr()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/text-register-machine/docs/Language-TRM-Base.html#v:label"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a \u003ccode\u003e\u003ca\u003eWord\u003c/a\u003e\u003c/code\u003e into a \u003ccode\u003e\u003ca\u003eProgram\u003c/a\u003e\u003c/code\u003e; returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if an invalid\n instruction is found.\n\u003c/p\u003e",
          "module": "Language.TRM.Base",
          "name": "parseProgram",
          "package": "text-register-machine",
          "signature": "Word -\u003e Maybe Program",
          "source": "src/Language-TRM-Base.html#parseProgram",
          "type": "function"
        },
        "index": {
          "description": "Parse Word into Program returns Nothing if an invalid instruction is found",
          "hierarchy": "Language TRM Base",
          "module": "Language.TRM.Base",
          "name": "parseProgram",
          "normalized": "Word-\u003eMaybe Program",
          "package": "text-register-machine",
          "partial": "Program",
          "signature": "Word-\u003eMaybe Program",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-register-machine/docs/Language-TRM-Base.html#v:parseProgram"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.TRM.Base",
          "name": "pc",
          "package": "text-register-machine",
          "signature": "Int",
          "source": "src/Language-TRM-Base.html#Machine",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language TRM Base",
          "module": "Language.TRM.Base",
          "name": "pc",
          "package": "text-register-machine",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-register-machine/docs/Language-TRM-Base.html#v:pc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrapper around \u003ccode\u003e\u003ca\u003erun\u003c/a\u003e\u003c/code\u003e that parses the given \u003ccode\u003e\u003ca\u003eWord\u003c/a\u003e\u003c/code\u003e into a\n \u003ccode\u003e\u003ca\u003eProgram\u003c/a\u003e\u003c/code\u003e, and then runs it in the given register state. Returns\n the value in register 1 once the program halts.\n\u003c/p\u003e\u003cp\u003eReturns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e when either the given \u003ccode\u003e\u003ca\u003eWord\u003c/a\u003e\u003c/code\u003e fails to parse, or\n if the machine halts abnormally with an invalid program counter or\n values in registers other than register 1.\n\u003c/p\u003e",
          "module": "Language.TRM.Base",
          "name": "phi",
          "package": "text-register-machine",
          "signature": "Word -\u003e [(Register, Word)] -\u003e Maybe Word",
          "source": "src/Language-TRM-Base.html#phi",
          "type": "function"
        },
        "index": {
          "description": "Wrapper around run that parses the given Word into Program and then runs it in the given register state Returns the value in register once the program halts Returns Nothing when either the given Word fails to parse or if the machine halts abnormally with an invalid program counter or values in registers other than register",
          "hierarchy": "Language TRM Base",
          "module": "Language.TRM.Base",
          "name": "phi",
          "normalized": "Word-\u003e[(Register,Word)]-\u003eMaybe Word",
          "package": "text-register-machine",
          "signature": "Word-\u003e[(Register,Word)]-\u003eMaybe Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-register-machine/docs/Language-TRM-Base.html#v:phi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.TRM.Base",
          "name": "program",
          "package": "text-register-machine",
          "signature": "Program",
          "source": "src/Language-TRM-Base.html#Machine",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language TRM Base",
          "module": "Language.TRM.Base",
          "name": "program",
          "package": "text-register-machine",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-register-machine/docs/Language-TRM-Base.html#v:program"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a \u003ccode\u003e\u003ca\u003eProgram\u003c/a\u003e\u003c/code\u003e to concrete syntax.\n\u003c/p\u003e",
          "module": "Language.TRM.Base",
          "name": "programToString",
          "package": "text-register-machine",
          "signature": "Program -\u003e String",
          "source": "src/Language-TRM-Base.html#programToString",
          "type": "function"
        },
        "index": {
          "description": "Convert Program to concrete syntax",
          "hierarchy": "Language TRM Base",
          "module": "Language.TRM.Base",
          "name": "programToString",
          "normalized": "Program-\u003eString",
          "package": "text-register-machine",
          "partial": "To String",
          "signature": "Program-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-register-machine/docs/Language-TRM-Base.html#v:programToString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.TRM.Base",
          "name": "regs",
          "package": "text-register-machine",
          "signature": "Map Register Word",
          "source": "src/Language-TRM-Base.html#Machine",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language TRM Base",
          "module": "Language.TRM.Base",
          "name": "regs",
          "package": "text-register-machine",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-register-machine/docs/Language-TRM-Base.html#v:regs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a \u003ccode\u003e\u003ca\u003eProgram\u003c/a\u003e\u003c/code\u003e and the initial state of the registers, return\n the final state of the registers.\n\u003c/p\u003e",
          "module": "Language.TRM.Base",
          "name": "run",
          "package": "text-register-machine",
          "signature": "Program -\u003e Map Register Word -\u003e Map Register Word",
          "source": "src/Language-TRM-Base.html#run",
          "type": "function"
        },
        "index": {
          "description": "Given Program and the initial state of the registers return the final state of the registers",
          "hierarchy": "Language TRM Base",
          "module": "Language.TRM.Base",
          "name": "run",
          "normalized": "Program-\u003eMap Register Word-\u003eMap Register Word",
          "package": "text-register-machine",
          "signature": "Program-\u003eMap Register Word-\u003eMap Register Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-register-machine/docs/Language-TRM-Base.html#v:run"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven an \u003ccode\u003e\u003ca\u003eLComp\u003c/a\u003e\u003c/code\u003e program and an initial register state, and then\n runs it in the given register state. May return \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the\n program does not halt cleanly, as with \u003ccode\u003e\u003ca\u003erun\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.TRM.Base",
          "name": "runL",
          "package": "text-register-machine",
          "signature": "LComp () -\u003e [(Register, Word)] -\u003e Maybe Word",
          "source": "src/Language-TRM-Base.html#runL",
          "type": "function"
        },
        "index": {
          "description": "Given an LComp program and an initial register state and then runs it in the given register state May return Nothing if the program does not halt cleanly as with run",
          "hierarchy": "Language TRM Base",
          "module": "Language.TRM.Base",
          "name": "runL",
          "normalized": "LComp()-\u003e[(Register,Word)]-\u003eMaybe Word",
          "package": "text-register-machine",
          "signature": "LComp()-\u003e[(Register,Word)]-\u003eMaybe Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-register-machine/docs/Language-TRM-Base.html#v:runL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven an \u003ccode\u003e\u003ca\u003eLComp\u003c/a\u003e\u003c/code\u003e program and an initial register state, and then\n runs it in the given register state. May return \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the\n program does not halt cleanly, as with \u003ccode\u003e\u003ca\u003erun\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.TRM.Base",
          "name": "runL'",
          "package": "text-register-machine",
          "signature": "LComp () -\u003e [(Register, Word)] -\u003e [(Register, Word)]",
          "source": "src/Language-TRM-Base.html#runL%27",
          "type": "function"
        },
        "index": {
          "description": "Given an LComp program and an initial register state and then runs it in the given register state May return Nothing if the program does not halt cleanly as with run",
          "hierarchy": "Language TRM Base",
          "module": "Language.TRM.Base",
          "name": "runL'",
          "normalized": "LComp()-\u003e[(Register,Word)]-\u003e[(Register,Word)]",
          "package": "text-register-machine",
          "partial": "L'",
          "signature": "LComp()-\u003e[(Register,Word)]-\u003e[(Register,Word)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-register-machine/docs/Language-TRM-Base.html#v:runL-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAppend a \u003ccode\u003e#\u003c/code\u003e to the end of the given \u003ccode\u003e\u003ca\u003eRegister\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.TRM.Base",
          "name": "snocHash",
          "package": "text-register-machine",
          "signature": "Register -\u003e repr ()",
          "source": "src/Language-TRM-Base.html#snocHash",
          "type": "method"
        },
        "index": {
          "description": "Append to the end of the given Register",
          "hierarchy": "Language TRM Base",
          "module": "Language.TRM.Base",
          "name": "snocHash",
          "normalized": "Register-\u003ea()",
          "package": "text-register-machine",
          "partial": "Hash",
          "signature": "Register-\u003erepr()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/text-register-machine/docs/Language-TRM-Base.html#v:snocHash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAppend a \u003ccode\u003e1\u003c/code\u003e to the end of the given \u003ccode\u003e\u003ca\u003eRegister\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.TRM.Base",
          "name": "snocOne",
          "package": "text-register-machine",
          "signature": "Register -\u003e repr ()",
          "source": "src/Language-TRM-Base.html#snocOne",
          "type": "method"
        },
        "index": {
          "description": "Append to the end of the given Register",
          "hierarchy": "Language TRM Base",
          "module": "Language.TRM.Base",
          "name": "snocOne",
          "normalized": "Register-\u003ea()",
          "package": "text-register-machine",
          "partial": "One",
          "signature": "Register-\u003erepr()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/text-register-machine/docs/Language-TRM-Base.html#v:snocOne"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerforms the single \u003ccode\u003e\u003ca\u003eInstruction\u003c/a\u003e\u003c/code\u003e indicated by the program\n counter, if available. Returns 'Left mach' if a step cannot be\n performed, and 'Right mach' with an updated \u003ccode\u003e\u003ca\u003eMachine\u003c/a\u003e\u003c/code\u003e otherwise.\n\u003c/p\u003e",
          "module": "Language.TRM.Base",
          "name": "step",
          "package": "text-register-machine",
          "signature": "Machine -\u003e Either Machine Machine",
          "source": "src/Language-TRM-Base.html#step",
          "type": "function"
        },
        "index": {
          "description": "Performs the single Instruction indicated by the program counter if available Returns Left mach if step cannot be performed and Right mach with an updated Machine otherwise",
          "hierarchy": "Language TRM Base",
          "module": "Language.TRM.Base",
          "name": "step",
          "normalized": "Machine-\u003eEither Machine Machine",
          "package": "text-register-machine",
          "signature": "Machine-\u003eEither Machine Machine",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-register-machine/docs/Language-TRM-Base.html#v:step"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a \u003ccode\u003e1#\u003c/code\u003e \u003ccode\u003e\u003ca\u003eProgram\u003c/a\u003e\u003c/code\u003e into a semantically-equivalent \u003ccode\u003e1#L\u003c/code\u003e\n \u003ccode\u003e\u003ca\u003eLProgram\u003c/a\u003e\u003c/code\u003e. May fail with an error if the original \u003ccode\u003e\u003ca\u003eProgram\u003c/a\u003e\u003c/code\u003e is\n \u003cem\u003enon-tidy\u003c/em\u003e, that is it contains forward or backward jumps to\n instructions outside of the program.\n\u003c/p\u003e",
          "module": "Language.TRM.Base",
          "name": "toLabeledProgram",
          "package": "text-register-machine",
          "signature": "Program -\u003e LProgram",
          "source": "src/Language-TRM-Base.html#toLabeledProgram",
          "type": "function"
        },
        "index": {
          "description": "Convert Program into semantically-equivalent LProgram May fail with an error if the original Program is non-tidy that is it contains forward or backward jumps to instructions outside of the program",
          "hierarchy": "Language TRM Base",
          "module": "Language.TRM.Base",
          "name": "toLabeledProgram",
          "normalized": "Program-\u003eLProgram",
          "package": "text-register-machine",
          "partial": "Labeled Program",
          "signature": "Program-\u003eLProgram",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-register-machine/docs/Language-TRM-Base.html#v:toLabeledProgram"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.TRM.Base",
          "name": "unLC",
          "package": "text-register-machine",
          "signature": "StateT (Int, Set Label, Register) (Writer LProgram) a",
          "source": "src/Language-TRM-Base.html#LComp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language TRM Base",
          "module": "Language.TRM.Base",
          "name": "unLC",
          "normalized": "StateT(Int,Set Label,Register)(Writer LProgram)a",
          "package": "text-register-machine",
          "partial": "LC",
          "signature": "StateT(Int,Set Label,Register)(Writer LProgram)a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-register-machine/docs/Language-TRM-Base.html#v:unLC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a \u003ccode\u003e\u003ca\u003eWord\u003c/a\u003e\u003c/code\u003e back into a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.TRM.Base",
          "name": "wordToString",
          "package": "text-register-machine",
          "signature": "Word -\u003e String",
          "source": "src/Language-TRM-Base.html#wordToString",
          "type": "function"
        },
        "index": {
          "description": "Convert Word back into String",
          "hierarchy": "Language TRM Base",
          "module": "Language.TRM.Base",
          "name": "wordToString",
          "normalized": "Word-\u003eString",
          "package": "text-register-machine",
          "partial": "To String",
          "signature": "Word-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-register-machine/docs/Language-TRM-Base.html#v:wordToString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.TRM.Programs",
          "name": "Programs",
          "package": "text-register-machine",
          "source": "src/Language-TRM-Programs.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Language TRM Programs",
          "module": "Language.TRM.Programs",
          "name": "Programs",
          "package": "text-register-machine",
          "partial": "Programs",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/text-register-machine/docs/Language-TRM-Programs.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd the two argument registers using primitive\n recursion, leaving the result in the first.\n\u003c/p\u003e\u003cpre\u003e *Language.TRM.Programs\u003e decodeBB \u003c$\u003e runL (addBB 1 2) [(1, encodeBB 100), (2, encodeBB 20)]\n Just 120\n\u003c/pre\u003e",
          "module": "Language.TRM.Programs",
          "name": "addBB",
          "package": "text-register-machine",
          "signature": "Register -\u003e Register -\u003e LComp ()",
          "source": "src/Language-TRM-Programs.html#addBB",
          "type": "function"
        },
        "index": {
          "description": "Add the two argument registers using primitive recursion leaving the result in the first Language.TRM.Programs decodeBB runL addBB encodeBB encodeBB Just",
          "hierarchy": "Language TRM Programs",
          "module": "Language.TRM.Programs",
          "name": "addBB",
          "normalized": "Register-\u003eRegister-\u003eLComp()",
          "package": "text-register-machine",
          "partial": "BB",
          "signature": "Register-\u003eRegister-\u003eLComp()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-register-machine/docs/Language-TRM-Programs.html#v:addBB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.TRM.Programs",
          "name": "bbToUnary",
          "package": "text-register-machine",
          "signature": "Register -\u003e LComp ()",
          "source": "src/Language-TRM-Programs.html#bbToUnary",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language TRM Programs",
          "module": "Language.TRM.Programs",
          "name": "bbToUnary",
          "normalized": "Register-\u003eLComp()",
          "package": "text-register-machine",
          "partial": "To Unary",
          "signature": "Register-\u003eLComp()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-register-machine/docs/Language-TRM-Programs.html#v:bbToUnary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.TRM.Programs",
          "name": "clear",
          "package": "text-register-machine",
          "signature": "Register-\u003e LComp ()",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language TRM Programs",
          "module": "Language.TRM.Programs",
          "name": "clear",
          "normalized": "Register-\u003eLComp()",
          "package": "text-register-machine",
          "signature": "Register-\u003eLComp()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-register-machine/docs/Language-TRM-Programs.html#v:clear"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompares the contents of the given registers for equality,\n leaving a \u003ccode\u003e1\u003c/code\u003e in the first register if they are, or nothing\n otherwise. The contents of both registers are destroyed in the\n process.\n\u003c/p\u003e",
          "module": "Language.TRM.Programs",
          "name": "compare",
          "package": "text-register-machine",
          "signature": "Register -\u003e Register -\u003e LComp ()",
          "source": "src/Language-TRM-Programs.html#compare",
          "type": "function"
        },
        "index": {
          "description": "Compares the contents of the given registers for equality leaving in the first register if they are or nothing otherwise The contents of both registers are destroyed in the process",
          "hierarchy": "Language TRM Programs",
          "module": "Language.TRM.Programs",
          "name": "compare",
          "normalized": "Register-\u003eRegister-\u003eLComp()",
          "package": "text-register-machine",
          "signature": "Register-\u003eRegister-\u003eLComp()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-register-machine/docs/Language-TRM-Programs.html#v:compare"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.TRM.Programs",
          "name": "compare'",
          "package": "text-register-machine",
          "signature": "Word",
          "source": "src/Language-TRM-Programs.html#compare%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language TRM Programs",
          "module": "Language.TRM.Programs",
          "name": "compare'",
          "package": "text-register-machine",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-register-machine/docs/Language-TRM-Programs.html#v:compare-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.TRM.Programs",
          "name": "copy",
          "package": "text-register-machine",
          "signature": "Register-\u003e Register-\u003e LComp ()",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language TRM Programs",
          "module": "Language.TRM.Programs",
          "name": "copy",
          "normalized": "Register-\u003eRegister-\u003eLComp()",
          "package": "text-register-machine",
          "signature": "Register-\u003eRegister-\u003eLComp()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-register-machine/docs/Language-TRM-Programs.html#v:copy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.TRM.Programs",
          "name": "double",
          "package": "text-register-machine",
          "signature": "Register -\u003e Register -\u003e LComp ()",
          "source": "src/Language-TRM-Programs.html#double",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language TRM Programs",
          "module": "Language.TRM.Programs",
          "name": "double",
          "normalized": "Register-\u003eRegister-\u003eLComp()",
          "package": "text-register-machine",
          "signature": "Register-\u003eRegister-\u003eLComp()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-register-machine/docs/Language-TRM-Programs.html#v:double"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.TRM.Programs",
          "name": "exptBB",
          "package": "text-register-machine",
          "signature": "Register -\u003e Register -\u003e LComp ()",
          "source": "src/Language-TRM-Programs.html#exptBB",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language TRM Programs",
          "module": "Language.TRM.Programs",
          "name": "exptBB",
          "normalized": "Register-\u003eRegister-\u003eLComp()",
          "package": "text-register-machine",
          "partial": "BB",
          "signature": "Register-\u003eRegister-\u003eLComp()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-register-machine/docs/Language-TRM-Programs.html#v:exptBB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.TRM.Programs",
          "name": "move",
          "package": "text-register-machine",
          "signature": "Register-\u003e Register-\u003e LComp ()",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language TRM Programs",
          "module": "Language.TRM.Programs",
          "name": "move",
          "normalized": "Register-\u003eRegister-\u003eLComp()",
          "package": "text-register-machine",
          "signature": "Register-\u003eRegister-\u003eLComp()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-register-machine/docs/Language-TRM-Programs.html#v:move"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.TRM.Programs",
          "name": "multBB",
          "package": "text-register-machine",
          "signature": "Register -\u003e Register -\u003e LComp ()",
          "source": "src/Language-TRM-Programs.html#multBB",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language TRM Programs",
          "module": "Language.TRM.Programs",
          "name": "multBB",
          "normalized": "Register-\u003eRegister-\u003eLComp()",
          "package": "text-register-machine",
          "partial": "BB",
          "signature": "Register-\u003eRegister-\u003eLComp()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-register-machine/docs/Language-TRM-Programs.html#v:multBB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eYields the sum of two backwards-binary numbers in registers 1 and 2.\n\u003c/p\u003e\u003cpre\u003e *Language.TRM\u003e decodeBB \u003c$\u003e phi plusBB [(1, encodeBB 2), (2, encodeBB 3)]\n Just 5\n *Language.TRM\u003e decodeBB \u003c$\u003e phi plusBB [(1, encodeBB 100), (2, encodeBB 20)]\n Just 120\n\u003c/pre\u003e",
          "module": "Language.TRM.Programs",
          "name": "plusBB'",
          "package": "text-register-machine",
          "signature": "Word",
          "source": "src/Language-TRM-Programs.html#plusBB%27",
          "type": "function"
        },
        "index": {
          "description": "Yields the sum of two backwards-binary numbers in registers and Language.TRM decodeBB phi plusBB encodeBB encodeBB Just Language.TRM decodeBB phi plusBB encodeBB encodeBB Just",
          "hierarchy": "Language TRM Programs",
          "module": "Language.TRM.Programs",
          "name": "plusBB'",
          "package": "text-register-machine",
          "partial": "BB'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-register-machine/docs/Language-TRM-Programs.html#v:plusBB-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.TRM.Programs",
          "name": "succBB",
          "package": "text-register-machine",
          "signature": "Register-\u003e LComp ()",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language TRM Programs",
          "module": "Language.TRM.Programs",
          "name": "succBB",
          "normalized": "Register-\u003eLComp()",
          "package": "text-register-machine",
          "partial": "BB",
          "signature": "Register-\u003eLComp()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-register-machine/docs/Language-TRM-Programs.html#v:succBB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eYields the successor of the backwards-binary number in register 1.\n\u003c/p\u003e\u003cpre\u003e *Language.TRM\u003e decodeBB \u003c$\u003e phi succBB [(1, encodeBB 0)]\n Just 1\n *Language.TRM\u003e decodeBB \u003c$\u003e phi succBB [(1, encodeBB 119)]\n Just 120\n\u003c/pre\u003e",
          "module": "Language.TRM.Programs",
          "name": "succBB'",
          "package": "text-register-machine",
          "signature": "Word",
          "source": "src/Language-TRM-Programs.html#succBB%27",
          "type": "function"
        },
        "index": {
          "description": "Yields the successor of the backwards-binary number in register Language.TRM decodeBB phi succBB encodeBB Just Language.TRM decodeBB phi succBB encodeBB Just",
          "hierarchy": "Language TRM Programs",
          "module": "Language.TRM.Programs",
          "name": "succBB'",
          "package": "text-register-machine",
          "partial": "BB'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-register-machine/docs/Language-TRM-Programs.html#v:succBB-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.TRM.Programs",
          "name": "unaryToBB",
          "package": "text-register-machine",
          "signature": "Register -\u003e Register -\u003e LComp ()",
          "source": "src/Language-TRM-Programs.html#unaryToBB",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language TRM Programs",
          "module": "Language.TRM.Programs",
          "name": "unaryToBB",
          "normalized": "Register-\u003eRegister-\u003eLComp()",
          "package": "text-register-machine",
          "partial": "To BB",
          "signature": "Register-\u003eRegister-\u003eLComp()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-register-machine/docs/Language-TRM-Programs.html#v:unaryToBB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.TRM",
          "name": "TRM",
          "package": "text-register-machine",
          "source": "src/Language-TRM.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Language TRM",
          "module": "Language.TRM",
          "name": "TRM",
          "package": "text-register-machine",
          "partial": "TRM",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/text-register-machine/docs/Language-TRM.html#"
      }
    }
  ]
]