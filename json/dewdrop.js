[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dewdrop/docs/Dewdrop-Analyze.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAnalyze the ROP gadgets in an ELF binary.\n\u003c/p\u003e\u003cp\u003eUse this module if you need more control, or integration with a larger\n program. The module \u003ca\u003eDewdrop\u003c/a\u003e provides a simpler way to put together a\n standalone gadget finder.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Dewdrop.Analyze",
        "fct-package": "dewdrop",
        "fct-signature": "module",
        "fct-source": "src/Dewdrop-Analyze.html",
        "fct-type": "module",
        "title": "Analyze"
      },
      "index": {
        "description": "Analyze the ROP gadgets in an ELF binary Use this module if you need more control or integration with larger program The module Dewdrop provides simpler way to put together standalone gadget finder",
        "hierarchy": "Dewdrop Analyze",
        "module": "Dewdrop.Analyze",
        "name": "Analyze",
        "normalized": "",
        "package": "dewdrop",
        "partial": "Analyze",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dewdrop/docs/Dewdrop-Analyze.html#t:Config",
      "description": {
        "fct-descr": "\u003cp\u003eConfiguration of the gadget finder.\n\u003c/p\u003e",
        "fct-module": "Dewdrop.Analyze",
        "fct-package": "dewdrop",
        "fct-signature": "data",
        "fct-source": "src/Dewdrop-Analyze.html#Config",
        "fct-type": "data",
        "title": "Config"
      },
      "index": {
        "description": "Configuration of the gadget finder",
        "hierarchy": "Dewdrop Analyze",
        "module": "Dewdrop.Analyze",
        "name": "Config",
        "normalized": "",
        "package": "dewdrop",
        "partial": "Config",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dewdrop/docs/Dewdrop-Analyze.html#t:Gadget",
      "description": {
        "fct-descr": "\u003cp\u003eA sequence of instructions, each with metadata.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e instance produces assembly code with labeled offsets,\n so you can \u003ccode\u003e\u003ccode\u003e\u003ca\u003eprint\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e these directly.\n\u003c/p\u003e",
        "fct-module": "Dewdrop.Analyze",
        "fct-package": "dewdrop",
        "fct-signature": "newtype",
        "fct-source": "src/Dewdrop-Analyze.html#Gadget",
        "fct-type": "newtype",
        "title": "Gadget"
      },
      "index": {
        "description": "sequence of instructions each with metadata The Show instance produces assembly code with labeled offsets so you can print these directly",
        "hierarchy": "Dewdrop Analyze",
        "module": "Dewdrop.Analyze",
        "name": "Gadget",
        "normalized": "",
        "package": "dewdrop",
        "partial": "Gadget",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dewdrop/docs/Dewdrop-Analyze.html#v:Config",
      "description": {
        "fct-module": "Dewdrop.Analyze",
        "fct-package": "dewdrop",
        "fct-signature": "Config",
        "fct-source": "src/Dewdrop-Analyze.html#Config",
        "fct-type": "function",
        "title": "Config"
      },
      "index": {
        "description": "",
        "hierarchy": "Dewdrop Analyze",
        "module": "Dewdrop.Analyze",
        "name": "Config",
        "normalized": "",
        "package": "dewdrop",
        "partial": "Config",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dewdrop/docs/Dewdrop-Analyze.html#v:Gadget",
      "description": {
        "fct-module": "Dewdrop.Analyze",
        "fct-package": "dewdrop",
        "fct-signature": "Gadget [Metadata]",
        "fct-source": "src/Dewdrop-Analyze.html#Gadget",
        "fct-type": "function",
        "title": "Gadget"
      },
      "index": {
        "description": "",
        "hierarchy": "Dewdrop Analyze",
        "module": "Dewdrop.Analyze",
        "name": "Gadget",
        "normalized": "Gadget[Metadata]",
        "package": "dewdrop",
        "partial": "Gadget",
        "signature": "Gadget[Metadata]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dewdrop/docs/Dewdrop-Analyze.html#v:cfgMaxSize",
      "description": {
        "fct-descr": "\u003cp\u003eMaximum size of a gadget, in bytes\n\u003c/p\u003e",
        "fct-module": "Dewdrop.Analyze",
        "fct-package": "dewdrop",
        "fct-signature": "Int",
        "fct-source": "src/Dewdrop-Analyze.html#Config",
        "fct-type": "function",
        "title": "cfgMaxSize"
      },
      "index": {
        "description": "Maximum size of gadget in bytes",
        "hierarchy": "Dewdrop Analyze",
        "module": "Dewdrop.Analyze",
        "name": "cfgMaxSize",
        "normalized": "",
        "package": "dewdrop",
        "partial": "Max Size",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dewdrop/docs/Dewdrop-Analyze.html#v:cfgSyntax",
      "description": {
        "fct-descr": "\u003cp\u003eAssembly syntax for display\n\u003c/p\u003e",
        "fct-module": "Dewdrop.Analyze",
        "fct-package": "dewdrop",
        "fct-signature": "Syntax",
        "fct-source": "src/Dewdrop-Analyze.html#Config",
        "fct-type": "function",
        "title": "cfgSyntax"
      },
      "index": {
        "description": "Assembly syntax for display",
        "hierarchy": "Dewdrop Analyze",
        "module": "Dewdrop.Analyze",
        "name": "cfgSyntax",
        "normalized": "",
        "package": "dewdrop",
        "partial": "Syntax",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dewdrop/docs/Dewdrop-Analyze.html#v:cfgVendor",
      "description": {
        "fct-descr": "\u003cp\u003eCPU vendor; affects decoding of a\n   few instructions\n\u003c/p\u003e",
        "fct-module": "Dewdrop.Analyze",
        "fct-package": "dewdrop",
        "fct-signature": "Vendor",
        "fct-source": "src/Dewdrop-Analyze.html#Config",
        "fct-type": "function",
        "title": "cfgVendor"
      },
      "index": {
        "description": "CPU vendor affects decoding of few instructions",
        "hierarchy": "Dewdrop Analyze",
        "module": "Dewdrop.Analyze",
        "name": "cfgVendor",
        "normalized": "",
        "package": "dewdrop",
        "partial": "Vendor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dewdrop/docs/Dewdrop-Analyze.html#v:defaultConfig",
      "description": {
        "fct-descr": "\u003cp\u003eDefault configuration of the gadget finder.\n\u003c/p\u003e",
        "fct-module": "Dewdrop.Analyze",
        "fct-package": "dewdrop",
        "fct-signature": "Config",
        "fct-source": "src/Dewdrop-Analyze.html#defaultConfig",
        "fct-type": "function",
        "title": "defaultConfig"
      },
      "index": {
        "description": "Default configuration of the gadget finder",
        "hierarchy": "Dewdrop Analyze",
        "module": "Dewdrop.Analyze",
        "name": "defaultConfig",
        "normalized": "",
        "package": "dewdrop",
        "partial": "Config",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dewdrop/docs/Dewdrop-Analyze.html#v:gadgets",
      "description": {
        "fct-descr": "\u003cp\u003eFind possible gadgets.\n\u003c/p\u003e\u003cp\u003eYou can filter these further using \u003ccode\u003e\u003ccode\u003e\u003ca\u003evalid\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e or other tests.\n\u003c/p\u003e",
        "fct-module": "Dewdrop.Analyze",
        "fct-package": "dewdrop",
        "fct-signature": "Elf -\u003e [Gadget]",
        "fct-source": "src/Dewdrop-Analyze.html#gadgets",
        "fct-type": "function",
        "title": "gadgets"
      },
      "index": {
        "description": "Find possible gadgets You can filter these further using valid or other tests",
        "hierarchy": "Dewdrop Analyze",
        "module": "Dewdrop.Analyze",
        "name": "gadgets",
        "normalized": "Elf-\u003e[Gadget]",
        "package": "dewdrop",
        "partial": "",
        "signature": "Elf-\u003e[Gadget]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dewdrop/docs/Dewdrop-Analyze.html#v:gadgetsWith",
      "description": {
        "fct-descr": "\u003cp\u003eFind possible gadgets, using a custom configuration.\n\u003c/p\u003e",
        "fct-module": "Dewdrop.Analyze",
        "fct-package": "dewdrop",
        "fct-signature": "Config -\u003e Elf -\u003e [Gadget]",
        "fct-source": "src/Dewdrop-Analyze.html#gadgetsWith",
        "fct-type": "function",
        "title": "gadgetsWith"
      },
      "index": {
        "description": "Find possible gadgets using custom configuration",
        "hierarchy": "Dewdrop Analyze",
        "module": "Dewdrop.Analyze",
        "name": "gadgetsWith",
        "normalized": "Config-\u003eElf-\u003e[Gadget]",
        "package": "dewdrop",
        "partial": "With",
        "signature": "Config-\u003eElf-\u003e[Gadget]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dewdrop/docs/Dewdrop-Analyze.html#v:valid",
      "description": {
        "fct-descr": "\u003cp\u003eRejects gadgets which are probably not useful for return-oriented\n programming.  This includes gadgets containing invalid or privileged\n instructions.\n\u003c/p\u003e",
        "fct-module": "Dewdrop.Analyze",
        "fct-package": "dewdrop",
        "fct-signature": "Gadget -\u003e Bool",
        "fct-source": "src/Dewdrop-Analyze.html#valid",
        "fct-type": "function",
        "title": "valid"
      },
      "index": {
        "description": "Rejects gadgets which are probably not useful for return-oriented programming This includes gadgets containing invalid or privileged instructions",
        "hierarchy": "Dewdrop Analyze",
        "module": "Dewdrop.Analyze",
        "name": "valid",
        "normalized": "Gadget-\u003eBool",
        "package": "dewdrop",
        "partial": "",
        "signature": "Gadget-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dewdrop/docs/Dewdrop.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePrint ROP gadgets having some desired property.\n\u003c/p\u003e\u003cp\u003eThis module provides the quickest way to get started:\n\u003c/p\u003e\u003cpre\u003e $ cat find.hs\n\n import Dewdrop\n main = dewdrop (any (usesRegister RBP))\n\n $ runhaskell find.hs /bin/ls\n 00402e56:\n   pop %rbp\n   ret\n\n 0040afe7:\n   shl %cl, -0x15(%rbp)\n   rep ret\n\n ...\n\u003c/pre\u003e\u003cp\u003eIf you need more control, see \u003ca\u003eDewdrop.Analyze\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Dewdrop",
        "fct-package": "dewdrop",
        "fct-signature": "module",
        "fct-source": "src/Dewdrop.html",
        "fct-type": "module",
        "title": "Dewdrop"
      },
      "index": {
        "description": "Print ROP gadgets having some desired property This module provides the quickest way to get started cat find.hs import Dewdrop main dewdrop any usesRegister RBP runhaskell find.hs bin ls e56 pop rbp ret afe7 shl cl x15 rbp rep ret If you need more control see Dewdrop.Analyze",
        "hierarchy": "Dewdrop",
        "module": "Dewdrop",
        "name": "Dewdrop",
        "normalized": "",
        "package": "dewdrop",
        "partial": "Dewdrop",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dewdrop/docs/Dewdrop.html#v:dewdrop",
      "description": {
        "fct-descr": "\u003cp\u003eOpens the ELF binary file passed as the first command-line\n argument, and prints all ROP gadgets satisfying the specified\n property.\n\u003c/p\u003e",
        "fct-module": "Dewdrop",
        "fct-package": "dewdrop",
        "fct-signature": "([Metadata] -\u003e Bool) -\u003e IO ()",
        "fct-source": "src/Dewdrop.html#dewdrop",
        "fct-type": "function",
        "title": "dewdrop"
      },
      "index": {
        "description": "Opens the ELF binary file passed as the first command-line argument and prints all ROP gadgets satisfying the specified property",
        "hierarchy": "Dewdrop",
        "module": "Dewdrop",
        "name": "dewdrop",
        "normalized": "([Metadata]-\u003eBool)-\u003eIO()",
        "package": "dewdrop",
        "partial": "",
        "signature": "([Metadata]-\u003eBool)-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dewdrop/docs/Dewdrop.html#v:opcode",
      "description": {
        "fct-descr": "\u003cp\u003eGet the \u003ccode\u003e\u003ccode\u003e\u003ca\u003eOpcode\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e directly from an instruction-with-metadata.\n\u003c/p\u003e",
        "fct-module": "Dewdrop",
        "fct-package": "dewdrop",
        "fct-signature": "Metadata -\u003e Opcode",
        "fct-source": "src/Dewdrop.html#opcode",
        "fct-type": "function",
        "title": "opcode"
      },
      "index": {
        "description": "Get the Opcode directly from an instruction-with-metadata",
        "hierarchy": "Dewdrop",
        "module": "Dewdrop",
        "name": "opcode",
        "normalized": "Metadata-\u003eOpcode",
        "package": "dewdrop",
        "partial": "",
        "signature": "Metadata-\u003eOpcode"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dewdrop/docs/Dewdrop.html#v:usesRegister",
      "description": {
        "fct-descr": "\u003cp\u003eDoes this instruction use a given register?\n\u003c/p\u003e\u003cp\u003eThis only includes registers explicitly mentioned in disassembly,\n and not e.g. the \u003ccode\u003ersi\u003c/code\u003e / \u003ccode\u003erdi\u003c/code\u003e operands of \u003ccode\u003emovsd\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Dewdrop",
        "fct-package": "dewdrop",
        "fct-signature": "GPR -\u003e Metadata -\u003e Bool",
        "fct-source": "src/Dewdrop.html#usesRegister",
        "fct-type": "function",
        "title": "usesRegister"
      },
      "index": {
        "description": "Does this instruction use given register This only includes registers explicitly mentioned in disassembly and not e.g the rsi rdi operands of movsd",
        "hierarchy": "Dewdrop",
        "module": "Dewdrop",
        "name": "usesRegister",
        "normalized": "GPR-\u003eMetadata-\u003eBool",
        "package": "dewdrop",
        "partial": "Register",
        "signature": "GPR-\u003eMetadata-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dewdrop/docs/Dewdrop.html#v:usesSegment",
      "description": {
        "fct-descr": "\u003cp\u003eDoes this instruction mention a given segment register?\n\u003c/p\u003e\u003cp\u003eThis only includes explicit overrides, and loads/stores of\n segment registers.\n\u003c/p\u003e",
        "fct-module": "Dewdrop",
        "fct-package": "dewdrop",
        "fct-signature": "Segment -\u003e Metadata -\u003e Bool",
        "fct-source": "src/Dewdrop.html#usesSegment",
        "fct-type": "function",
        "title": "usesSegment"
      },
      "index": {
        "description": "Does this instruction mention given segment register This only includes explicit overrides and loads stores of segment registers",
        "hierarchy": "Dewdrop",
        "module": "Dewdrop",
        "name": "usesSegment",
        "normalized": "Segment-\u003eMetadata-\u003eBool",
        "package": "dewdrop",
        "partial": "Segment",
        "signature": "Segment-\u003eMetadata-\u003eBool"
      }
    }
  }
]