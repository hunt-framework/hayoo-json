[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text-register-machine/docs/Language-TRM-Base.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn implementation of Lawrence S. Moss' \u003ccode\u003e1#\u003c/code\u003e language and Text\n Register Machine (\u003ca\u003ehttp://www.indiana.edu/~iulg/trm/\u003c/a\u003e). \n\u003c/p\u003e\u003cp\u003eThis module also includes a slightly higher-level language, \u003ccode\u003e1#L\u003c/code\u003e,\n that replaces the forward and backward relative jumps of \u003ccode\u003e1#\u003c/code\u003e with\n labels and goto instructions.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Language.TRM.Base",
        "fct-package": "text-register-machine",
        "fct-signature": "module",
        "fct-source": "src/Language-TRM-Base.html",
        "fct-type": "module",
        "title": "Base"
      },
      "index": {
        "description": "An implementation of Lawrence Moss language and Text Register Machine http www.indiana.edu iulg trm This module also includes slightly higher-level language that replaces the forward and backward relative jumps of with labels and goto instructions",
        "hierarchy": "Language TRM Base",
        "module": "Language.TRM.Base",
        "name": "Base",
        "normalized": "",
        "package": "text-register-machine",
        "partial": "Base",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text-register-machine/docs/Language-TRM-Base.html#t:Instruction",
      "description": {
        "fct-descr": "\u003cp\u003eAbstract syntax for the primitive \u003ccode\u003e1#\u003c/code\u003e instructions.\n\u003c/p\u003e",
        "fct-module": "Language.TRM.Base",
        "fct-package": "text-register-machine",
        "fct-signature": "data",
        "fct-source": "src/Language-TRM-Base.html#Instruction",
        "fct-type": "data",
        "title": "Instruction"
      },
      "index": {
        "description": "Abstract syntax for the primitive instructions",
        "hierarchy": "Language TRM Base",
        "module": "Language.TRM.Base",
        "name": "Instruction",
        "normalized": "",
        "package": "text-register-machine",
        "partial": "Instruction",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text-register-machine/docs/Language-TRM-Base.html#t:LComp",
      "description": {
        "fct-descr": "\u003cp\u003eThe default backend for \u003ccode\u003e\u003ca\u003eLSymantics\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Language.TRM.Base",
        "fct-package": "text-register-machine",
        "fct-signature": "newtype",
        "fct-source": "src/Language-TRM-Base.html#LComp",
        "fct-type": "newtype",
        "title": "LComp"
      },
      "index": {
        "description": "The default backend for LSymantics",
        "hierarchy": "Language TRM Base",
        "module": "Language.TRM.Base",
        "name": "LComp",
        "normalized": "",
        "package": "text-register-machine",
        "partial": "LComp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text-register-machine/docs/Language-TRM-Base.html#t:LInstruction",
      "description": {
        "fct-descr": "\u003cp\u003eAbstract syntax for a variant of \u003ccode\u003e1#\u003c/code\u003e, \u003ccode\u003e1#L\u003c/code\u003e with labels and\n gotos instead of forward and backward jumps.\n\u003c/p\u003e",
        "fct-module": "Language.TRM.Base",
        "fct-package": "text-register-machine",
        "fct-signature": "data",
        "fct-source": "src/Language-TRM-Base.html#LInstruction",
        "fct-type": "data",
        "title": "LInstruction"
      },
      "index": {
        "description": "Abstract syntax for variant of with labels and gotos instead of forward and backward jumps",
        "hierarchy": "Language TRM Base",
        "module": "Language.TRM.Base",
        "name": "LInstruction",
        "normalized": "",
        "package": "text-register-machine",
        "partial": "LInstruction",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text-register-machine/docs/Language-TRM-Base.html#t:LProgram",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e1#L\u003c/code\u003e program is a \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e of \u003ccode\u003e\u003ca\u003eLInstruction\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
        "fct-module": "Language.TRM.Base",
        "fct-package": "text-register-machine",
        "fct-signature": "type",
        "fct-source": "src/Language-TRM-Base.html#LProgram",
        "fct-type": "type",
        "title": "LProgram"
      },
      "index": {
        "description": "program is Vector of LInstruction",
        "hierarchy": "Language TRM Base",
        "module": "Language.TRM.Base",
        "name": "LProgram",
        "normalized": "",
        "package": "text-register-machine",
        "partial": "LProgram",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text-register-machine/docs/Language-TRM-Base.html#t:LSymantics",
      "description": {
        "fct-descr": "\u003cp\u003eConcrete syntax for \u003ccode\u003e1#L\u003c/code\u003e, indexed by backend representation in\n the typed tagless style\n (\u003ca\u003ehttp://okmij.org/ftp/tagless-final/index.html\u003c/a\u003e).\n\u003c/p\u003e",
        "fct-module": "Language.TRM.Base",
        "fct-package": "text-register-machine",
        "fct-signature": "class",
        "fct-source": "src/Language-TRM-Base.html#LSymantics",
        "fct-type": "class",
        "title": "LSymantics"
      },
      "index": {
        "description": "Concrete syntax for indexed by backend representation in the typed tagless style http okmij.org ftp tagless-final index.html",
        "hierarchy": "Language TRM Base",
        "module": "Language.TRM.Base",
        "name": "LSymantics",
        "normalized": "",
        "package": "text-register-machine",
        "partial": "LSymantics",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text-register-machine/docs/Language-TRM-Base.html#t:Label",
      "description": {
        "fct-descr": "\u003cp\u003eLabel representation.\n\u003c/p\u003e",
        "fct-module": "Language.TRM.Base",
        "fct-package": "text-register-machine",
        "fct-signature": "type",
        "fct-source": "src/Language-TRM-Base.html#Label",
        "fct-type": "type",
        "title": "Label"
      },
      "index": {
        "description": "Label representation",
        "hierarchy": "Language TRM Base",
        "module": "Language.TRM.Base",
        "name": "Label",
        "normalized": "",
        "package": "text-register-machine",
        "partial": "Label",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text-register-machine/docs/Language-TRM-Base.html#t:Letter",
      "description": {
        "fct-descr": "\u003cp\u003eTyped representation of the \u003ccode\u003e1#\u003c/code\u003e letters.\n\u003c/p\u003e",
        "fct-module": "Language.TRM.Base",
        "fct-package": "text-register-machine",
        "fct-signature": "data",
        "fct-source": "src/Language-TRM-Base.html#Letter",
        "fct-type": "data",
        "title": "Letter"
      },
      "index": {
        "description": "Typed representation of the letters",
        "hierarchy": "Language TRM Base",
        "module": "Language.TRM.Base",
        "name": "Letter",
        "normalized": "",
        "package": "text-register-machine",
        "partial": "Letter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text-register-machine/docs/Language-TRM-Base.html#t:Machine",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eMachine\u003c/a\u003e\u003c/code\u003e consists of a \u003ccode\u003e\u003ca\u003eProgram\u003c/a\u003e\u003c/code\u003e, a program counter, and a\n \u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e from registers to the words they contain.\n\u003c/p\u003e",
        "fct-module": "Language.TRM.Base",
        "fct-package": "text-register-machine",
        "fct-signature": "data",
        "fct-source": "src/Language-TRM-Base.html#Machine",
        "fct-type": "data",
        "title": "Machine"
      },
      "index": {
        "description": "Machine consists of Program program counter and Map from registers to the words they contain",
        "hierarchy": "Language TRM Base",
        "module": "Language.TRM.Base",
        "name": "Machine",
        "normalized": "",
        "package": "text-register-machine",
        "partial": "Machine",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text-register-machine/docs/Language-TRM-Base.html#t:Program",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e1#\u003c/code\u003e program is a \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e of \u003ccode\u003e\u003ca\u003eInstruction\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
        "fct-module": "Language.TRM.Base",
        "fct-package": "text-register-machine",
        "fct-signature": "type",
        "fct-source": "src/Language-TRM-Base.html#Program",
        "fct-type": "type",
        "title": "Program"
      },
      "index": {
        "description": "program is Vector of Instruction",
        "hierarchy": "Language TRM Base",
        "module": "Language.TRM.Base",
        "name": "Program",
        "normalized": "",
        "package": "text-register-machine",
        "partial": "Program",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text-register-machine/docs/Language-TRM-Base.html#t:Register",
      "description": {
        "fct-descr": "\u003cp\u003eRegister identifiers.\n\u003c/p\u003e",
        "fct-module": "Language.TRM.Base",
        "fct-package": "text-register-machine",
        "fct-signature": "newtype",
        "fct-source": "src/Language-TRM-Base.html#Register",
        "fct-type": "newtype",
        "title": "Register"
      },
      "index": {
        "description": "Register identifiers",
        "hierarchy": "Language TRM Base",
        "module": "Language.TRM.Base",
        "name": "Register",
        "normalized": "",
        "package": "text-register-machine",
        "partial": "Register",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text-register-machine/docs/Language-TRM-Base.html#t:Word",
      "description": {
        "fct-descr": "\u003cp\u003eA wrapper around a list of \u003ccode\u003e\u003ca\u003eLetter\u003c/a\u003e\u003c/code\u003es with an \u003ccode\u003e\u003ca\u003eIsString\u003c/a\u003e\u003c/code\u003e instance,\n so that literal strings of \u003ccode\u003e1\u003c/code\u003es, \u003ccode\u003e#\u003c/code\u003es, and whitespace can be used\n instead of lists of \u003ccode\u003e\u003ca\u003eOne\u003c/a\u003e\u003c/code\u003es and \u003ccode\u003e\u003ca\u003eHash\u003c/a\u003e\u003c/code\u003ees. This requires the\n \u003ccode\u003e-XOverloadedStrings\u003c/code\u003e flag.\n\u003c/p\u003e\u003cpre\u003e loop :: Word\n loop = \"1### 11####\"\n\u003c/pre\u003e",
        "fct-module": "Language.TRM.Base",
        "fct-package": "text-register-machine",
        "fct-signature": "newtype",
        "fct-source": "src/Language-TRM-Base.html#Word",
        "fct-type": "newtype",
        "title": "Word"
      },
      "index": {
        "description": "wrapper around list of Letter with an IsString instance so that literal strings of and whitespace can be used instead of lists of One and Hash es This requires the XOverloadedStrings flag loop Word loop",
        "hierarchy": "Language TRM Base",
        "module": "Language.TRM.Base",
        "name": "Word",
        "normalized": "",
        "package": "text-register-machine",
        "partial": "Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text-register-machine/docs/Language-TRM-Base.html#v:Backward",
      "description": {
        "fct-module": "Language.TRM.Base",
        "fct-package": "text-register-machine",
        "fct-signature": "Backward Int",
        "fct-source": "src/Language-TRM-Base.html#Instruction",
        "fct-type": "function",
        "title": "Backward"
      },
      "index": {
        "description": "",
        "hierarchy": "Language TRM Base",
        "module": "Language.TRM.Base",
        "name": "Backward",
        "normalized": "",
        "package": "text-register-machine",
        "partial": "Backward",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text-register-machine/docs/Language-TRM-Base.html#v:Case",
      "description": {
        "fct-module": "Language.TRM.Base",
        "fct-package": "text-register-machine",
        "fct-signature": "Case Register",
        "fct-source": "src/Language-TRM-Base.html#Instruction",
        "fct-type": "function",
        "title": "Case"
      },
      "index": {
        "description": "",
        "hierarchy": "Language TRM Base",
        "module": "Language.TRM.Base",
        "name": "Case",
        "normalized": "",
        "package": "text-register-machine",
        "partial": "Case",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text-register-machine/docs/Language-TRM-Base.html#v:Forward",
      "description": {
        "fct-module": "Language.TRM.Base",
        "fct-package": "text-register-machine",
        "fct-signature": "Forward Int",
        "fct-source": "src/Language-TRM-Base.html#Instruction",
        "fct-type": "function",
        "title": "Forward"
      },
      "index": {
        "description": "",
        "hierarchy": "Language TRM Base",
        "module": "Language.TRM.Base",
        "name": "Forward",
        "normalized": "",
        "package": "text-register-machine",
        "partial": "Forward",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text-register-machine/docs/Language-TRM-Base.html#v:Hash",
      "description": {
        "fct-module": "Language.TRM.Base",
        "fct-package": "text-register-machine",
        "fct-signature": "Hash",
        "fct-source": "src/Language-TRM-Base.html#Letter",
        "fct-type": "function",
        "title": "Hash"
      },
      "index": {
        "description": "",
        "hierarchy": "Language TRM Base",
        "module": "Language.TRM.Base",
        "name": "Hash",
        "normalized": "",
        "package": "text-register-machine",
        "partial": "Hash",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text-register-machine/docs/Language-TRM-Base.html#v:LC",
      "description": {
        "fct-module": "Language.TRM.Base",
        "fct-package": "text-register-machine",
        "fct-signature": "LC",
        "fct-source": "src/Language-TRM-Base.html#LComp",
        "fct-type": "function",
        "title": "LC"
      },
      "index": {
        "description": "",
        "hierarchy": "Language TRM Base",
        "module": "Language.TRM.Base",
        "name": "LC",
        "normalized": "",
        "package": "text-register-machine",
        "partial": "LC",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text-register-machine/docs/Language-TRM-Base.html#v:LCase",
      "description": {
        "fct-module": "Language.TRM.Base",
        "fct-package": "text-register-machine",
        "fct-signature": "LCase Register",
        "fct-source": "src/Language-TRM-Base.html#LInstruction",
        "fct-type": "function",
        "title": "LCase"
      },
      "index": {
        "description": "",
        "hierarchy": "Language TRM Base",
        "module": "Language.TRM.Base",
        "name": "LCase",
        "normalized": "",
        "package": "text-register-machine",
        "partial": "LCase",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text-register-machine/docs/Language-TRM-Base.html#v:LGoto",
      "description": {
        "fct-module": "Language.TRM.Base",
        "fct-package": "text-register-machine",
        "fct-signature": "LGoto Label",
        "fct-source": "src/Language-TRM-Base.html#LInstruction",
        "fct-type": "function",
        "title": "LGoto"
      },
      "index": {
        "description": "",
        "hierarchy": "Language TRM Base",
        "module": "Language.TRM.Base",
        "name": "LGoto",
        "normalized": "",
        "package": "text-register-machine",
        "partial": "LGoto",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text-register-machine/docs/Language-TRM-Base.html#v:LLabel",
      "description": {
        "fct-module": "Language.TRM.Base",
        "fct-package": "text-register-machine",
        "fct-signature": "LLabel Label",
        "fct-source": "src/Language-TRM-Base.html#LInstruction",
        "fct-type": "function",
        "title": "LLabel"
      },
      "index": {
        "description": "",
        "hierarchy": "Language TRM Base",
        "module": "Language.TRM.Base",
        "name": "LLabel",
        "normalized": "",
        "package": "text-register-machine",
        "partial": "LLabel",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text-register-machine/docs/Language-TRM-Base.html#v:LSnocHash",
      "description": {
        "fct-module": "Language.TRM.Base",
        "fct-package": "text-register-machine",
        "fct-signature": "LSnocHash Register",
        "fct-source": "src/Language-TRM-Base.html#LInstruction",
        "fct-type": "function",
        "title": "LSnocHash"
      },
      "index": {
        "description": "",
        "hierarchy": "Language TRM Base",
        "module": "Language.TRM.Base",
        "name": "LSnocHash",
        "normalized": "",
        "package": "text-register-machine",
        "partial": "LSnoc Hash",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text-register-machine/docs/Language-TRM-Base.html#v:LSnocOne",
      "description": {
        "fct-module": "Language.TRM.Base",
        "fct-package": "text-register-machine",
        "fct-signature": "LSnocOne Register",
        "fct-source": "src/Language-TRM-Base.html#LInstruction",
        "fct-type": "function",
        "title": "LSnocOne"
      },
      "index": {
        "description": "",
        "hierarchy": "Language TRM Base",
        "module": "Language.TRM.Base",
        "name": "LSnocOne",
        "normalized": "",
        "package": "text-register-machine",
        "partial": "LSnoc One",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text-register-machine/docs/Language-TRM-Base.html#v:M",
      "description": {
        "fct-module": "Language.TRM.Base",
        "fct-package": "text-register-machine",
        "fct-signature": "M",
        "fct-source": "src/Language-TRM-Base.html#Machine",
        "fct-type": "function",
        "title": "M"
      },
      "index": {
        "description": "",
        "hierarchy": "Language TRM Base",
        "module": "Language.TRM.Base",
        "name": "M",
        "normalized": "",
        "package": "text-register-machine",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text-register-machine/docs/Language-TRM-Base.html#v:One",
      "description": {
        "fct-module": "Language.TRM.Base",
        "fct-package": "text-register-machine",
        "fct-signature": "One",
        "fct-source": "src/Language-TRM-Base.html#Letter",
        "fct-type": "function",
        "title": "One"
      },
      "index": {
        "description": "",
        "hierarchy": "Language TRM Base",
        "module": "Language.TRM.Base",
        "name": "One",
        "normalized": "",
        "package": "text-register-machine",
        "partial": "One",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text-register-machine/docs/Language-TRM-Base.html#v:R",
      "description": {
        "fct-module": "Language.TRM.Base",
        "fct-package": "text-register-machine",
        "fct-signature": "R Int",
        "fct-source": "src/Language-TRM-Base.html#Register",
        "fct-type": "function",
        "title": "R"
      },
      "index": {
        "description": "",
        "hierarchy": "Language TRM Base",
        "module": "Language.TRM.Base",
        "name": "R",
        "normalized": "",
        "package": "text-register-machine",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text-register-machine/docs/Language-TRM-Base.html#v:SnocHash",
      "description": {
        "fct-module": "Language.TRM.Base",
        "fct-package": "text-register-machine",
        "fct-signature": "SnocHash Register",
        "fct-source": "src/Language-TRM-Base.html#Instruction",
        "fct-type": "function",
        "title": "SnocHash"
      },
      "index": {
        "description": "",
        "hierarchy": "Language TRM Base",
        "module": "Language.TRM.Base",
        "name": "SnocHash",
        "normalized": "",
        "package": "text-register-machine",
        "partial": "Snoc Hash",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text-register-machine/docs/Language-TRM-Base.html#v:SnocOne",
      "description": {
        "fct-module": "Language.TRM.Base",
        "fct-package": "text-register-machine",
        "fct-signature": "SnocOne Register",
        "fct-source": "src/Language-TRM-Base.html#Instruction",
        "fct-type": "function",
        "title": "SnocOne"
      },
      "index": {
        "description": "",
        "hierarchy": "Language TRM Base",
        "module": "Language.TRM.Base",
        "name": "SnocOne",
        "normalized": "",
        "package": "text-register-machine",
        "partial": "Snoc One",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text-register-machine/docs/Language-TRM-Base.html#v:W",
      "description": {
        "fct-module": "Language.TRM.Base",
        "fct-package": "text-register-machine",
        "fct-signature": "W [Letter]",
        "fct-source": "src/Language-TRM-Base.html#Word",
        "fct-type": "function",
        "title": "W"
      },
      "index": {
        "description": "",
        "hierarchy": "Language TRM Base",
        "module": "Language.TRM.Base",
        "name": "W",
        "normalized": "W[Letter]",
        "package": "text-register-machine",
        "partial": "",
        "signature": "W[Letter]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text-register-machine/docs/Language-TRM-Base.html#v:compileL",
      "description": {
        "fct-descr": "\u003cp\u003eCompiles an \u003ccode\u003e\u003ca\u003eLComp\u003c/a\u003e\u003c/code\u003e program into an \u003ccode\u003e\u003ca\u003eLProgram\u003c/a\u003e\u003c/code\u003e, with an initial\n fresh register.\n\u003c/p\u003e",
        "fct-module": "Language.TRM.Base",
        "fct-package": "text-register-machine",
        "fct-signature": "Register -\u003e LComp () -\u003e LProgram",
        "fct-source": "src/Language-TRM-Base.html#compileL",
        "fct-type": "function",
        "title": "compileL"
      },
      "index": {
        "description": "Compiles an LComp program into an LProgram with an initial fresh register",
        "hierarchy": "Language TRM Base",
        "module": "Language.TRM.Base",
        "name": "compileL",
        "normalized": "Register-\u003eLComp()-\u003eLProgram",
        "package": "text-register-machine",
        "partial": "",
        "signature": "Register-\u003eLComp()-\u003eLProgram"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text-register-machine/docs/Language-TRM-Base.html#v:cond",
      "description": {
        "fct-descr": "\u003cp\u003eCase analysis; pops a \u003ccode\u003e\u003ca\u003eLetter\u003c/a\u003e\u003c/code\u003e from the front of the\n scrutinized \u003ccode\u003e\u003ca\u003eRegister\u003c/a\u003e\u003c/code\u003e, if non-empty. Note that in the default\n backend, new labels are automatically created and placed for the\n branches of the \u003ccode\u003e\u003ca\u003econd\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Language.TRM.Base",
        "fct-package": "text-register-machine",
        "fct-signature": "cond",
        "fct-source": "src/Language-TRM-Base.html#cond",
        "fct-type": "method",
        "title": "cond"
      },
      "index": {
        "description": "Case analysis pops Letter from the front of the scrutinized Register if non-empty Note that in the default backend new labels are automatically created and placed for the branches of the cond",
        "hierarchy": "Language TRM Base",
        "module": "Language.TRM.Base",
        "name": "cond",
        "normalized": "",
        "package": "text-register-machine",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text-register-machine/docs/Language-TRM-Base.html#v:decodeBB",
      "description": {
        "fct-descr": "\u003cp\u003eDecodes a \u003ccode\u003e\u003ca\u003eWord\u003c/a\u003e\u003c/code\u003e containing backwards-binary digits into a \u003ccode\u003e\u003ca\u003eNum\u003c/a\u003e\u003c/code\u003e\n type. Fails with an error if the \u003ccode\u003e\u003ca\u003eWord\u003c/a\u003e\u003c/code\u003e is empty.\n\u003c/p\u003e",
        "fct-module": "Language.TRM.Base",
        "fct-package": "text-register-machine",
        "fct-signature": "Word -\u003e a",
        "fct-source": "src/Language-TRM-Base.html#decodeBB",
        "fct-type": "function",
        "title": "decodeBB"
      },
      "index": {
        "description": "Decodes Word containing backwards-binary digits into Num type Fails with an error if the Word is empty",
        "hierarchy": "Language TRM Base",
        "module": "Language.TRM.Base",
        "name": "decodeBB",
        "normalized": "Word-\u003ea",
        "package": "text-register-machine",
        "partial": "BB",
        "signature": "Word-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text-register-machine/docs/Language-TRM-Base.html#v:do_",
      "description": {
        "fct-descr": "\u003cp\u003eA combinator to cleanly implement looping structures in \u003ccode\u003e\u003ca\u003eLComp\u003c/a\u003e\u003c/code\u003e code.\n\u003c/p\u003e\u003cp\u003eTakes a function that expects two arguments, \u003ccode\u003econtinue\u003c/code\u003e and\n \u003ccode\u003ebreak\u003c/code\u003e. The body of the function is a block of \u003ccode\u003e\u003ca\u003eLComp\u003c/a\u003e\u003c/code\u003e code that\n gets repeated whenever \u003ccode\u003econtinue\u003c/code\u003e is run. If \u003ccode\u003ebreak\u003c/code\u003e is run,\n control jumps to the instruction after the call to \u003ccode\u003e\u003ca\u003edo_\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Language.TRM.Base",
        "fct-package": "text-register-machine",
        "fct-signature": "(LComp () -\u003e LComp () -\u003e LComp ()) -\u003e LComp ()",
        "fct-source": "src/Language-TRM-Base.html#do_",
        "fct-type": "function",
        "title": "do_"
      },
      "index": {
        "description": "combinator to cleanly implement looping structures in LComp code Takes function that expects two arguments continue and break The body of the function is block of LComp code that gets repeated whenever continue is run If break is run control jumps to the instruction after the call to do",
        "hierarchy": "Language TRM Base",
        "module": "Language.TRM.Base",
        "name": "do_",
        "normalized": "(LComp()-\u003eLComp()-\u003eLComp())-\u003eLComp()",
        "package": "text-register-machine",
        "partial": "",
        "signature": "(LComp()-\u003eLComp()-\u003eLComp())-\u003eLComp()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text-register-machine/docs/Language-TRM-Base.html#v:encodeBB",
      "description": {
        "fct-descr": "\u003cp\u003eEncodes an \u003ccode\u003e\u003ca\u003eIntegral\u003c/a\u003e\u003c/code\u003e type into a \u003ccode\u003e\u003ca\u003eWord\u003c/a\u003e\u003c/code\u003e of backwards-binary\n digits using \u003ccode\u003e1\u003c/code\u003es and \u003ccode\u003e#\u003c/code\u003es for \u003ccode\u003e1\u003c/code\u003es and \u003ccode\u003e0\u003c/code\u003es, respectively. Note\n that the representation of zero is a single \u003ccode\u003e#\u003c/code\u003e rather than the\n empty \u003ccode\u003e\u003ca\u003eWord\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Language.TRM.Base",
        "fct-package": "text-register-machine",
        "fct-signature": "a -\u003e Word",
        "fct-source": "src/Language-TRM-Base.html#encodeBB",
        "fct-type": "function",
        "title": "encodeBB"
      },
      "index": {
        "description": "Encodes an Integral type into Word of backwards-binary digits using and for and respectively Note that the representation of zero is single rather than the empty Word",
        "hierarchy": "Language TRM Base",
        "module": "Language.TRM.Base",
        "name": "encodeBB",
        "normalized": "a-\u003eWord",
        "package": "text-register-machine",
        "partial": "BB",
        "signature": "a-\u003eWord"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text-register-machine/docs/Language-TRM-Base.html#v:freshLabel",
      "description": {
        "fct-descr": "\u003cp\u003eReturn a fresh \u003ccode\u003e\u003ca\u003eLabel\u003c/a\u003e\u003c/code\u003e to be used in a call to \u003ccode\u003e\u003ca\u003elabel\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003egoto\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Language.TRM.Base",
        "fct-package": "text-register-machine",
        "fct-signature": "repr Label",
        "fct-source": "src/Language-TRM-Base.html#freshLabel",
        "fct-type": "method",
        "title": "freshLabel"
      },
      "index": {
        "description": "Return fresh Label to be used in call to label or goto",
        "hierarchy": "Language TRM Base",
        "module": "Language.TRM.Base",
        "name": "freshLabel",
        "normalized": "",
        "package": "text-register-machine",
        "partial": "Label",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text-register-machine/docs/Language-TRM-Base.html#v:freshLabelHere",
      "description": {
        "fct-descr": "\u003cp\u003eConvenience function to create a fresh label and place it at the\n current position.\n\u003c/p\u003e",
        "fct-module": "Language.TRM.Base",
        "fct-package": "text-register-machine",
        "fct-signature": "repr Label",
        "fct-source": "src/Language-TRM-Base.html#freshLabelHere",
        "fct-type": "function",
        "title": "freshLabelHere"
      },
      "index": {
        "description": "Convenience function to create fresh label and place it at the current position",
        "hierarchy": "Language TRM Base",
        "module": "Language.TRM.Base",
        "name": "freshLabelHere",
        "normalized": "",
        "package": "text-register-machine",
        "partial": "Label Here",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text-register-machine/docs/Language-TRM-Base.html#v:freshReg",
      "description": {
        "fct-descr": "\u003cp\u003eReturn a fresh \u003ccode\u003e\u003ca\u003eRegister\u003c/a\u003e\u003c/code\u003e that has not been used so far in the program.\n\u003c/p\u003e",
        "fct-module": "Language.TRM.Base",
        "fct-package": "text-register-machine",
        "fct-signature": "repr Register",
        "fct-source": "src/Language-TRM-Base.html#freshReg",
        "fct-type": "method",
        "title": "freshReg"
      },
      "index": {
        "description": "Return fresh Register that has not been used so far in the program",
        "hierarchy": "Language TRM Base",
        "module": "Language.TRM.Base",
        "name": "freshReg",
        "normalized": "",
        "package": "text-register-machine",
        "partial": "Reg",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text-register-machine/docs/Language-TRM-Base.html#v:fromLabeledProgram",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a \u003ccode\u003e1#L\u003c/code\u003e \u003ccode\u003e\u003ca\u003eLProgram\u003c/a\u003e\u003c/code\u003e into a semantically-equivalent \u003ccode\u003e1#\u003c/code\u003e\n \u003ccode\u003e\u003ca\u003eProgram\u003c/a\u003e\u003c/code\u003e. May fail with an error if the \u003ccode\u003e\u003ca\u003eLProgram\u003c/a\u003e\u003c/code\u003e contains\n duplicate labels, jumps to undefined labels. An error will also\n occur if the \u003ccode\u003e\u003ca\u003eLProgram\u003c/a\u003e\u003c/code\u003e contains a goto that would translate into a\n jump of 0 instructions, as this is impossible to express in \u003ccode\u003e1#\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Language.TRM.Base",
        "fct-package": "text-register-machine",
        "fct-signature": "LProgram -\u003e Program",
        "fct-source": "src/Language-TRM-Base.html#fromLabeledProgram",
        "fct-type": "function",
        "title": "fromLabeledProgram"
      },
      "index": {
        "description": "Convert LProgram into semantically-equivalent Program May fail with an error if the LProgram contains duplicate labels jumps to undefined labels An error will also occur if the LProgram contains goto that would translate into jump of instructions as this is impossible to express in",
        "hierarchy": "Language TRM Base",
        "module": "Language.TRM.Base",
        "name": "fromLabeledProgram",
        "normalized": "LProgram-\u003eProgram",
        "package": "text-register-machine",
        "partial": "Labeled Program",
        "signature": "LProgram-\u003eProgram"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text-register-machine/docs/Language-TRM-Base.html#v:goto",
      "description": {
        "fct-descr": "\u003cp\u003eUnconditional jump to the given \u003ccode\u003e\u003ca\u003eLabel\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Language.TRM.Base",
        "fct-package": "text-register-machine",
        "fct-signature": "Label -\u003e repr ()",
        "fct-source": "src/Language-TRM-Base.html#goto",
        "fct-type": "method",
        "title": "goto"
      },
      "index": {
        "description": "Unconditional jump to the given Label",
        "hierarchy": "Language TRM Base",
        "module": "Language.TRM.Base",
        "name": "goto",
        "normalized": "Label-\u003ea()",
        "package": "text-register-machine",
        "partial": "",
        "signature": "Label-\u003erepr()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text-register-machine/docs/Language-TRM-Base.html#v:instructionToString",
      "description": {
        "fct-descr": "\u003cp\u003eConvert an \u003ccode\u003e\u003ca\u003eInstruction\u003c/a\u003e\u003c/code\u003e to concrete syntax.\n\u003c/p\u003e",
        "fct-module": "Language.TRM.Base",
        "fct-package": "text-register-machine",
        "fct-signature": "Instruction -\u003e String",
        "fct-source": "src/Language-TRM-Base.html#instructionToString",
        "fct-type": "function",
        "title": "instructionToString"
      },
      "index": {
        "description": "Convert an Instruction to concrete syntax",
        "hierarchy": "Language TRM Base",
        "module": "Language.TRM.Base",
        "name": "instructionToString",
        "normalized": "Instruction-\u003eString",
        "package": "text-register-machine",
        "partial": "To String",
        "signature": "Instruction-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text-register-machine/docs/Language-TRM-Base.html#v:label",
      "description": {
        "fct-descr": "\u003cp\u003ePlace a \u003ccode\u003e\u003ca\u003eLabel\u003c/a\u003e\u003c/code\u003e at the given point in the program. Note that a\n particular \u003ccode\u003e\u003ca\u003eLabel\u003c/a\u003e\u003c/code\u003e may be used only once per program.\n\u003c/p\u003e",
        "fct-module": "Language.TRM.Base",
        "fct-package": "text-register-machine",
        "fct-signature": "Label -\u003e repr ()",
        "fct-source": "src/Language-TRM-Base.html#label",
        "fct-type": "method",
        "title": "label"
      },
      "index": {
        "description": "Place Label at the given point in the program Note that particular Label may be used only once per program",
        "hierarchy": "Language TRM Base",
        "module": "Language.TRM.Base",
        "name": "label",
        "normalized": "Label-\u003ea()",
        "package": "text-register-machine",
        "partial": "",
        "signature": "Label-\u003erepr()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text-register-machine/docs/Language-TRM-Base.html#v:parseProgram",
      "description": {
        "fct-descr": "\u003cp\u003eParse a \u003ccode\u003e\u003ca\u003eWord\u003c/a\u003e\u003c/code\u003e into a \u003ccode\u003e\u003ca\u003eProgram\u003c/a\u003e\u003c/code\u003e; returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if an invalid\n instruction is found.\n\u003c/p\u003e",
        "fct-module": "Language.TRM.Base",
        "fct-package": "text-register-machine",
        "fct-signature": "Word -\u003e Maybe Program",
        "fct-source": "src/Language-TRM-Base.html#parseProgram",
        "fct-type": "function",
        "title": "parseProgram"
      },
      "index": {
        "description": "Parse Word into Program returns Nothing if an invalid instruction is found",
        "hierarchy": "Language TRM Base",
        "module": "Language.TRM.Base",
        "name": "parseProgram",
        "normalized": "Word-\u003eMaybe Program",
        "package": "text-register-machine",
        "partial": "Program",
        "signature": "Word-\u003eMaybe Program"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text-register-machine/docs/Language-TRM-Base.html#v:pc",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Language.TRM.Base",
        "fct-package": "text-register-machine",
        "fct-signature": "Int",
        "fct-source": "src/Language-TRM-Base.html#Machine",
        "fct-type": "function",
        "title": "pc"
      },
      "index": {
        "description": "",
        "hierarchy": "Language TRM Base",
        "module": "Language.TRM.Base",
        "name": "pc",
        "normalized": "",
        "package": "text-register-machine",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text-register-machine/docs/Language-TRM-Base.html#v:phi",
      "description": {
        "fct-descr": "\u003cp\u003eWrapper around \u003ccode\u003e\u003ca\u003erun\u003c/a\u003e\u003c/code\u003e that parses the given \u003ccode\u003e\u003ca\u003eWord\u003c/a\u003e\u003c/code\u003e into a\n \u003ccode\u003e\u003ca\u003eProgram\u003c/a\u003e\u003c/code\u003e, and then runs it in the given register state. Returns\n the value in register 1 once the program halts.\n\u003c/p\u003e\u003cp\u003eReturns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e when either the given \u003ccode\u003e\u003ca\u003eWord\u003c/a\u003e\u003c/code\u003e fails to parse, or\n if the machine halts abnormally with an invalid program counter or\n values in registers other than register 1.\n\u003c/p\u003e",
        "fct-module": "Language.TRM.Base",
        "fct-package": "text-register-machine",
        "fct-signature": "Word -\u003e [(Register, Word)] -\u003e Maybe Word",
        "fct-source": "src/Language-TRM-Base.html#phi",
        "fct-type": "function",
        "title": "phi"
      },
      "index": {
        "description": "Wrapper around run that parses the given Word into Program and then runs it in the given register state Returns the value in register once the program halts Returns Nothing when either the given Word fails to parse or if the machine halts abnormally with an invalid program counter or values in registers other than register",
        "hierarchy": "Language TRM Base",
        "module": "Language.TRM.Base",
        "name": "phi",
        "normalized": "Word-\u003e[(Register,Word)]-\u003eMaybe Word",
        "package": "text-register-machine",
        "partial": "",
        "signature": "Word-\u003e[(Register,Word)]-\u003eMaybe Word"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text-register-machine/docs/Language-TRM-Base.html#v:program",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Language.TRM.Base",
        "fct-package": "text-register-machine",
        "fct-signature": "Program",
        "fct-source": "src/Language-TRM-Base.html#Machine",
        "fct-type": "function",
        "title": "program"
      },
      "index": {
        "description": "",
        "hierarchy": "Language TRM Base",
        "module": "Language.TRM.Base",
        "name": "program",
        "normalized": "",
        "package": "text-register-machine",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text-register-machine/docs/Language-TRM-Base.html#v:programToString",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a \u003ccode\u003e\u003ca\u003eProgram\u003c/a\u003e\u003c/code\u003e to concrete syntax.\n\u003c/p\u003e",
        "fct-module": "Language.TRM.Base",
        "fct-package": "text-register-machine",
        "fct-signature": "Program -\u003e String",
        "fct-source": "src/Language-TRM-Base.html#programToString",
        "fct-type": "function",
        "title": "programToString"
      },
      "index": {
        "description": "Convert Program to concrete syntax",
        "hierarchy": "Language TRM Base",
        "module": "Language.TRM.Base",
        "name": "programToString",
        "normalized": "Program-\u003eString",
        "package": "text-register-machine",
        "partial": "To String",
        "signature": "Program-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text-register-machine/docs/Language-TRM-Base.html#v:regs",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Language.TRM.Base",
        "fct-package": "text-register-machine",
        "fct-signature": "Map Register Word",
        "fct-source": "src/Language-TRM-Base.html#Machine",
        "fct-type": "function",
        "title": "regs"
      },
      "index": {
        "description": "",
        "hierarchy": "Language TRM Base",
        "module": "Language.TRM.Base",
        "name": "regs",
        "normalized": "",
        "package": "text-register-machine",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text-register-machine/docs/Language-TRM-Base.html#v:run",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a \u003ccode\u003e\u003ca\u003eProgram\u003c/a\u003e\u003c/code\u003e and the initial state of the registers, return\n the final state of the registers.\n\u003c/p\u003e",
        "fct-module": "Language.TRM.Base",
        "fct-package": "text-register-machine",
        "fct-signature": "Program -\u003e Map Register Word -\u003e Map Register Word",
        "fct-source": "src/Language-TRM-Base.html#run",
        "fct-type": "function",
        "title": "run"
      },
      "index": {
        "description": "Given Program and the initial state of the registers return the final state of the registers",
        "hierarchy": "Language TRM Base",
        "module": "Language.TRM.Base",
        "name": "run",
        "normalized": "Program-\u003eMap Register Word-\u003eMap Register Word",
        "package": "text-register-machine",
        "partial": "",
        "signature": "Program-\u003eMap Register Word-\u003eMap Register Word"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text-register-machine/docs/Language-TRM-Base.html#v:runL",
      "description": {
        "fct-descr": "\u003cp\u003eGiven an \u003ccode\u003e\u003ca\u003eLComp\u003c/a\u003e\u003c/code\u003e program and an initial register state, and then\n runs it in the given register state. May return \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the\n program does not halt cleanly, as with \u003ccode\u003e\u003ca\u003erun\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Language.TRM.Base",
        "fct-package": "text-register-machine",
        "fct-signature": "LComp () -\u003e [(Register, Word)] -\u003e Maybe Word",
        "fct-source": "src/Language-TRM-Base.html#runL",
        "fct-type": "function",
        "title": "runL"
      },
      "index": {
        "description": "Given an LComp program and an initial register state and then runs it in the given register state May return Nothing if the program does not halt cleanly as with run",
        "hierarchy": "Language TRM Base",
        "module": "Language.TRM.Base",
        "name": "runL",
        "normalized": "LComp()-\u003e[(Register,Word)]-\u003eMaybe Word",
        "package": "text-register-machine",
        "partial": "",
        "signature": "LComp()-\u003e[(Register,Word)]-\u003eMaybe Word"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text-register-machine/docs/Language-TRM-Base.html#v:runL-39-",
      "description": {
        "fct-descr": "\u003cp\u003eGiven an \u003ccode\u003e\u003ca\u003eLComp\u003c/a\u003e\u003c/code\u003e program and an initial register state, and then\n runs it in the given register state. May return \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the\n program does not halt cleanly, as with \u003ccode\u003e\u003ca\u003erun\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Language.TRM.Base",
        "fct-package": "text-register-machine",
        "fct-signature": "LComp () -\u003e [(Register, Word)] -\u003e [(Register, Word)]",
        "fct-source": "src/Language-TRM-Base.html#runL%27",
        "fct-type": "function",
        "title": "runL'"
      },
      "index": {
        "description": "Given an LComp program and an initial register state and then runs it in the given register state May return Nothing if the program does not halt cleanly as with run",
        "hierarchy": "Language TRM Base",
        "module": "Language.TRM.Base",
        "name": "runL'",
        "normalized": "LComp()-\u003e[(Register,Word)]-\u003e[(Register,Word)]",
        "package": "text-register-machine",
        "partial": "L'",
        "signature": "LComp()-\u003e[(Register,Word)]-\u003e[(Register,Word)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text-register-machine/docs/Language-TRM-Base.html#v:snocHash",
      "description": {
        "fct-descr": "\u003cp\u003eAppend a \u003ccode\u003e#\u003c/code\u003e to the end of the given \u003ccode\u003e\u003ca\u003eRegister\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Language.TRM.Base",
        "fct-package": "text-register-machine",
        "fct-signature": "Register -\u003e repr ()",
        "fct-source": "src/Language-TRM-Base.html#snocHash",
        "fct-type": "method",
        "title": "snocHash"
      },
      "index": {
        "description": "Append to the end of the given Register",
        "hierarchy": "Language TRM Base",
        "module": "Language.TRM.Base",
        "name": "snocHash",
        "normalized": "Register-\u003ea()",
        "package": "text-register-machine",
        "partial": "Hash",
        "signature": "Register-\u003erepr()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text-register-machine/docs/Language-TRM-Base.html#v:snocOne",
      "description": {
        "fct-descr": "\u003cp\u003eAppend a \u003ccode\u003e1\u003c/code\u003e to the end of the given \u003ccode\u003e\u003ca\u003eRegister\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Language.TRM.Base",
        "fct-package": "text-register-machine",
        "fct-signature": "Register -\u003e repr ()",
        "fct-source": "src/Language-TRM-Base.html#snocOne",
        "fct-type": "method",
        "title": "snocOne"
      },
      "index": {
        "description": "Append to the end of the given Register",
        "hierarchy": "Language TRM Base",
        "module": "Language.TRM.Base",
        "name": "snocOne",
        "normalized": "Register-\u003ea()",
        "package": "text-register-machine",
        "partial": "One",
        "signature": "Register-\u003erepr()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text-register-machine/docs/Language-TRM-Base.html#v:step",
      "description": {
        "fct-descr": "\u003cp\u003ePerforms the single \u003ccode\u003e\u003ca\u003eInstruction\u003c/a\u003e\u003c/code\u003e indicated by the program\n counter, if available. Returns 'Left mach' if a step cannot be\n performed, and 'Right mach' with an updated \u003ccode\u003e\u003ca\u003eMachine\u003c/a\u003e\u003c/code\u003e otherwise.\n\u003c/p\u003e",
        "fct-module": "Language.TRM.Base",
        "fct-package": "text-register-machine",
        "fct-signature": "Machine -\u003e Either Machine Machine",
        "fct-source": "src/Language-TRM-Base.html#step",
        "fct-type": "function",
        "title": "step"
      },
      "index": {
        "description": "Performs the single Instruction indicated by the program counter if available Returns Left mach if step cannot be performed and Right mach with an updated Machine otherwise",
        "hierarchy": "Language TRM Base",
        "module": "Language.TRM.Base",
        "name": "step",
        "normalized": "Machine-\u003eEither Machine Machine",
        "package": "text-register-machine",
        "partial": "",
        "signature": "Machine-\u003eEither Machine Machine"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text-register-machine/docs/Language-TRM-Base.html#v:toLabeledProgram",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a \u003ccode\u003e1#\u003c/code\u003e \u003ccode\u003e\u003ca\u003eProgram\u003c/a\u003e\u003c/code\u003e into a semantically-equivalent \u003ccode\u003e1#L\u003c/code\u003e\n \u003ccode\u003e\u003ca\u003eLProgram\u003c/a\u003e\u003c/code\u003e. May fail with an error if the original \u003ccode\u003e\u003ca\u003eProgram\u003c/a\u003e\u003c/code\u003e is\n \u003cem\u003enon-tidy\u003c/em\u003e, that is it contains forward or backward jumps to\n instructions outside of the program.\n\u003c/p\u003e",
        "fct-module": "Language.TRM.Base",
        "fct-package": "text-register-machine",
        "fct-signature": "Program -\u003e LProgram",
        "fct-source": "src/Language-TRM-Base.html#toLabeledProgram",
        "fct-type": "function",
        "title": "toLabeledProgram"
      },
      "index": {
        "description": "Convert Program into semantically-equivalent LProgram May fail with an error if the original Program is non-tidy that is it contains forward or backward jumps to instructions outside of the program",
        "hierarchy": "Language TRM Base",
        "module": "Language.TRM.Base",
        "name": "toLabeledProgram",
        "normalized": "Program-\u003eLProgram",
        "package": "text-register-machine",
        "partial": "Labeled Program",
        "signature": "Program-\u003eLProgram"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text-register-machine/docs/Language-TRM-Base.html#v:unLC",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Language.TRM.Base",
        "fct-package": "text-register-machine",
        "fct-signature": "StateT (Int, Set Label, Register) (Writer LProgram) a",
        "fct-source": "src/Language-TRM-Base.html#LComp",
        "fct-type": "function",
        "title": "unLC"
      },
      "index": {
        "description": "",
        "hierarchy": "Language TRM Base",
        "module": "Language.TRM.Base",
        "name": "unLC",
        "normalized": "StateT(Int,Set Label,Register)(Writer LProgram)a",
        "package": "text-register-machine",
        "partial": "LC",
        "signature": "StateT(Int,Set Label,Register)(Writer LProgram)a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text-register-machine/docs/Language-TRM-Base.html#v:wordToString",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a \u003ccode\u003e\u003ca\u003eWord\u003c/a\u003e\u003c/code\u003e back into a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Language.TRM.Base",
        "fct-package": "text-register-machine",
        "fct-signature": "Word -\u003e String",
        "fct-source": "src/Language-TRM-Base.html#wordToString",
        "fct-type": "function",
        "title": "wordToString"
      },
      "index": {
        "description": "Convert Word back into String",
        "hierarchy": "Language TRM Base",
        "module": "Language.TRM.Base",
        "name": "wordToString",
        "normalized": "Word-\u003eString",
        "package": "text-register-machine",
        "partial": "To String",
        "signature": "Word-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text-register-machine/docs/Language-TRM-Programs.html#",
      "description": {
        "fct-module": "Language.TRM.Programs",
        "fct-package": "text-register-machine",
        "fct-signature": "module",
        "fct-source": "src/Language-TRM-Programs.html",
        "fct-type": "module",
        "title": "Programs"
      },
      "index": {
        "description": "",
        "hierarchy": "Language TRM Programs",
        "module": "Language.TRM.Programs",
        "name": "Programs",
        "normalized": "",
        "package": "text-register-machine",
        "partial": "Programs",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text-register-machine/docs/Language-TRM-Programs.html#v:addBB",
      "description": {
        "fct-descr": "\u003cp\u003eAdd the two argument registers using primitive\n recursion, leaving the result in the first.\n\u003c/p\u003e\u003cpre\u003e *Language.TRM.Programs\u003e decodeBB \u003c$\u003e runL (addBB 1 2) [(1, encodeBB 100), (2, encodeBB 20)]\n Just 120\n\u003c/pre\u003e",
        "fct-module": "Language.TRM.Programs",
        "fct-package": "text-register-machine",
        "fct-signature": "Register -\u003e Register -\u003e LComp ()",
        "fct-source": "src/Language-TRM-Programs.html#addBB",
        "fct-type": "function",
        "title": "addBB"
      },
      "index": {
        "description": "Add the two argument registers using primitive recursion leaving the result in the first Language.TRM.Programs decodeBB runL addBB encodeBB encodeBB Just",
        "hierarchy": "Language TRM Programs",
        "module": "Language.TRM.Programs",
        "name": "addBB",
        "normalized": "Register-\u003eRegister-\u003eLComp()",
        "package": "text-register-machine",
        "partial": "BB",
        "signature": "Register-\u003eRegister-\u003eLComp()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text-register-machine/docs/Language-TRM-Programs.html#v:bbToUnary",
      "description": {
        "fct-module": "Language.TRM.Programs",
        "fct-package": "text-register-machine",
        "fct-signature": "Register -\u003e LComp ()",
        "fct-source": "src/Language-TRM-Programs.html#bbToUnary",
        "fct-type": "function",
        "title": "bbToUnary"
      },
      "index": {
        "description": "",
        "hierarchy": "Language TRM Programs",
        "module": "Language.TRM.Programs",
        "name": "bbToUnary",
        "normalized": "Register-\u003eLComp()",
        "package": "text-register-machine",
        "partial": "To Unary",
        "signature": "Register-\u003eLComp()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text-register-machine/docs/Language-TRM-Programs.html#v:clear",
      "description": {
        "fct-module": "Language.TRM.Programs",
        "fct-package": "text-register-machine",
        "fct-signature": "Register-\u003e LComp ()",
        "fct-type": "function",
        "title": "clear"
      },
      "index": {
        "description": "",
        "hierarchy": "Language TRM Programs",
        "module": "Language.TRM.Programs",
        "name": "clear",
        "normalized": "Register-\u003eLComp()",
        "package": "text-register-machine",
        "partial": "",
        "signature": "Register-\u003eLComp()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text-register-machine/docs/Language-TRM-Programs.html#v:compare",
      "description": {
        "fct-descr": "\u003cp\u003eCompares the contents of the given registers for equality,\n leaving a \u003ccode\u003e1\u003c/code\u003e in the first register if they are, or nothing\n otherwise. The contents of both registers are destroyed in the\n process.\n\u003c/p\u003e",
        "fct-module": "Language.TRM.Programs",
        "fct-package": "text-register-machine",
        "fct-signature": "Register -\u003e Register -\u003e LComp ()",
        "fct-source": "src/Language-TRM-Programs.html#compare",
        "fct-type": "function",
        "title": "compare"
      },
      "index": {
        "description": "Compares the contents of the given registers for equality leaving in the first register if they are or nothing otherwise The contents of both registers are destroyed in the process",
        "hierarchy": "Language TRM Programs",
        "module": "Language.TRM.Programs",
        "name": "compare",
        "normalized": "Register-\u003eRegister-\u003eLComp()",
        "package": "text-register-machine",
        "partial": "",
        "signature": "Register-\u003eRegister-\u003eLComp()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text-register-machine/docs/Language-TRM-Programs.html#v:compare-39-",
      "description": {
        "fct-module": "Language.TRM.Programs",
        "fct-package": "text-register-machine",
        "fct-signature": "Word",
        "fct-source": "src/Language-TRM-Programs.html#compare%27",
        "fct-type": "function",
        "title": "compare'"
      },
      "index": {
        "description": "",
        "hierarchy": "Language TRM Programs",
        "module": "Language.TRM.Programs",
        "name": "compare'",
        "normalized": "",
        "package": "text-register-machine",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text-register-machine/docs/Language-TRM-Programs.html#v:copy",
      "description": {
        "fct-module": "Language.TRM.Programs",
        "fct-package": "text-register-machine",
        "fct-signature": "Register-\u003e Register-\u003e LComp ()",
        "fct-type": "function",
        "title": "copy"
      },
      "index": {
        "description": "",
        "hierarchy": "Language TRM Programs",
        "module": "Language.TRM.Programs",
        "name": "copy",
        "normalized": "Register-\u003eRegister-\u003eLComp()",
        "package": "text-register-machine",
        "partial": "",
        "signature": "Register-\u003eRegister-\u003eLComp()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text-register-machine/docs/Language-TRM-Programs.html#v:double",
      "description": {
        "fct-module": "Language.TRM.Programs",
        "fct-package": "text-register-machine",
        "fct-signature": "Register -\u003e Register -\u003e LComp ()",
        "fct-source": "src/Language-TRM-Programs.html#double",
        "fct-type": "function",
        "title": "double"
      },
      "index": {
        "description": "",
        "hierarchy": "Language TRM Programs",
        "module": "Language.TRM.Programs",
        "name": "double",
        "normalized": "Register-\u003eRegister-\u003eLComp()",
        "package": "text-register-machine",
        "partial": "",
        "signature": "Register-\u003eRegister-\u003eLComp()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text-register-machine/docs/Language-TRM-Programs.html#v:exptBB",
      "description": {
        "fct-module": "Language.TRM.Programs",
        "fct-package": "text-register-machine",
        "fct-signature": "Register -\u003e Register -\u003e LComp ()",
        "fct-source": "src/Language-TRM-Programs.html#exptBB",
        "fct-type": "function",
        "title": "exptBB"
      },
      "index": {
        "description": "",
        "hierarchy": "Language TRM Programs",
        "module": "Language.TRM.Programs",
        "name": "exptBB",
        "normalized": "Register-\u003eRegister-\u003eLComp()",
        "package": "text-register-machine",
        "partial": "BB",
        "signature": "Register-\u003eRegister-\u003eLComp()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text-register-machine/docs/Language-TRM-Programs.html#v:move",
      "description": {
        "fct-module": "Language.TRM.Programs",
        "fct-package": "text-register-machine",
        "fct-signature": "Register-\u003e Register-\u003e LComp ()",
        "fct-type": "function",
        "title": "move"
      },
      "index": {
        "description": "",
        "hierarchy": "Language TRM Programs",
        "module": "Language.TRM.Programs",
        "name": "move",
        "normalized": "Register-\u003eRegister-\u003eLComp()",
        "package": "text-register-machine",
        "partial": "",
        "signature": "Register-\u003eRegister-\u003eLComp()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text-register-machine/docs/Language-TRM-Programs.html#v:multBB",
      "description": {
        "fct-module": "Language.TRM.Programs",
        "fct-package": "text-register-machine",
        "fct-signature": "Register -\u003e Register -\u003e LComp ()",
        "fct-source": "src/Language-TRM-Programs.html#multBB",
        "fct-type": "function",
        "title": "multBB"
      },
      "index": {
        "description": "",
        "hierarchy": "Language TRM Programs",
        "module": "Language.TRM.Programs",
        "name": "multBB",
        "normalized": "Register-\u003eRegister-\u003eLComp()",
        "package": "text-register-machine",
        "partial": "BB",
        "signature": "Register-\u003eRegister-\u003eLComp()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text-register-machine/docs/Language-TRM-Programs.html#v:plusBB-39-",
      "description": {
        "fct-descr": "\u003cp\u003eYields the sum of two backwards-binary numbers in registers 1 and 2.\n\u003c/p\u003e\u003cpre\u003e *Language.TRM\u003e decodeBB \u003c$\u003e phi plusBB [(1, encodeBB 2), (2, encodeBB 3)]\n Just 5\n *Language.TRM\u003e decodeBB \u003c$\u003e phi plusBB [(1, encodeBB 100), (2, encodeBB 20)]\n Just 120\n\u003c/pre\u003e",
        "fct-module": "Language.TRM.Programs",
        "fct-package": "text-register-machine",
        "fct-signature": "Word",
        "fct-source": "src/Language-TRM-Programs.html#plusBB%27",
        "fct-type": "function",
        "title": "plusBB'"
      },
      "index": {
        "description": "Yields the sum of two backwards-binary numbers in registers and Language.TRM decodeBB phi plusBB encodeBB encodeBB Just Language.TRM decodeBB phi plusBB encodeBB encodeBB Just",
        "hierarchy": "Language TRM Programs",
        "module": "Language.TRM.Programs",
        "name": "plusBB'",
        "normalized": "",
        "package": "text-register-machine",
        "partial": "BB'",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text-register-machine/docs/Language-TRM-Programs.html#v:succBB",
      "description": {
        "fct-module": "Language.TRM.Programs",
        "fct-package": "text-register-machine",
        "fct-signature": "Register-\u003e LComp ()",
        "fct-type": "function",
        "title": "succBB"
      },
      "index": {
        "description": "",
        "hierarchy": "Language TRM Programs",
        "module": "Language.TRM.Programs",
        "name": "succBB",
        "normalized": "Register-\u003eLComp()",
        "package": "text-register-machine",
        "partial": "BB",
        "signature": "Register-\u003eLComp()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text-register-machine/docs/Language-TRM-Programs.html#v:succBB-39-",
      "description": {
        "fct-descr": "\u003cp\u003eYields the successor of the backwards-binary number in register 1.\n\u003c/p\u003e\u003cpre\u003e *Language.TRM\u003e decodeBB \u003c$\u003e phi succBB [(1, encodeBB 0)]\n Just 1\n *Language.TRM\u003e decodeBB \u003c$\u003e phi succBB [(1, encodeBB 119)]\n Just 120\n\u003c/pre\u003e",
        "fct-module": "Language.TRM.Programs",
        "fct-package": "text-register-machine",
        "fct-signature": "Word",
        "fct-source": "src/Language-TRM-Programs.html#succBB%27",
        "fct-type": "function",
        "title": "succBB'"
      },
      "index": {
        "description": "Yields the successor of the backwards-binary number in register Language.TRM decodeBB phi succBB encodeBB Just Language.TRM decodeBB phi succBB encodeBB Just",
        "hierarchy": "Language TRM Programs",
        "module": "Language.TRM.Programs",
        "name": "succBB'",
        "normalized": "",
        "package": "text-register-machine",
        "partial": "BB'",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text-register-machine/docs/Language-TRM-Programs.html#v:unaryToBB",
      "description": {
        "fct-module": "Language.TRM.Programs",
        "fct-package": "text-register-machine",
        "fct-signature": "Register -\u003e Register -\u003e LComp ()",
        "fct-source": "src/Language-TRM-Programs.html#unaryToBB",
        "fct-type": "function",
        "title": "unaryToBB"
      },
      "index": {
        "description": "",
        "hierarchy": "Language TRM Programs",
        "module": "Language.TRM.Programs",
        "name": "unaryToBB",
        "normalized": "Register-\u003eRegister-\u003eLComp()",
        "package": "text-register-machine",
        "partial": "To BB",
        "signature": "Register-\u003eRegister-\u003eLComp()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text-register-machine/docs/Language-TRM.html#",
      "description": {
        "fct-module": "Language.TRM",
        "fct-package": "text-register-machine",
        "fct-signature": "module",
        "fct-source": "src/Language-TRM.html",
        "fct-type": "module",
        "title": "TRM"
      },
      "index": {
        "description": "",
        "hierarchy": "Language TRM",
        "module": "Language.TRM",
        "name": "TRM",
        "normalized": "",
        "package": "text-register-machine",
        "partial": "TRM",
        "signature": ""
      }
    }
  }
]