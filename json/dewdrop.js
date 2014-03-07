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
        "word": "dewdrop"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAnalyze the ROP gadgets in an ELF binary.\n\u003c/p\u003e\u003cp\u003eUse this module if you need more control, or integration with a larger\n program. The module \u003ca\u003eDewdrop\u003c/a\u003e provides a simpler way to put together a\n standalone gadget finder.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Dewdrop.Analyze",
          "name": "Analyze",
          "package": "dewdrop",
          "source": "src/Dewdrop-Analyze.html",
          "type": "module"
        },
        "index": {
          "description": "Analyze the ROP gadgets in an ELF binary Use this module if you need more control or integration with larger program The module Dewdrop provides simpler way to put together standalone gadget finder",
          "hierarchy": "Dewdrop Analyze",
          "module": "Dewdrop.Analyze",
          "name": "Analyze",
          "package": "dewdrop",
          "partial": "Analyze",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dewdrop/docs/Dewdrop-Analyze.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConfiguration of the gadget finder.\n\u003c/p\u003e",
          "module": "Dewdrop.Analyze",
          "name": "Config",
          "package": "dewdrop",
          "source": "src/Dewdrop-Analyze.html#Config",
          "type": "data"
        },
        "index": {
          "description": "Configuration of the gadget finder",
          "hierarchy": "Dewdrop Analyze",
          "module": "Dewdrop.Analyze",
          "name": "Config",
          "package": "dewdrop",
          "partial": "Config",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dewdrop/docs/Dewdrop-Analyze.html#t:Config"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA sequence of instructions, each with metadata.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e instance produces assembly code with labeled offsets,\n so you can \u003ccode\u003e\u003ccode\u003e\u003ca\u003eprint\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e these directly.\n\u003c/p\u003e",
          "module": "Dewdrop.Analyze",
          "name": "Gadget",
          "package": "dewdrop",
          "source": "src/Dewdrop-Analyze.html#Gadget",
          "type": "newtype"
        },
        "index": {
          "description": "sequence of instructions each with metadata The Show instance produces assembly code with labeled offsets so you can print these directly",
          "hierarchy": "Dewdrop Analyze",
          "module": "Dewdrop.Analyze",
          "name": "Gadget",
          "package": "dewdrop",
          "partial": "Gadget",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/dewdrop/docs/Dewdrop-Analyze.html#t:Gadget"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dewdrop.Analyze",
          "name": "Config",
          "package": "dewdrop",
          "signature": "Config",
          "source": "src/Dewdrop-Analyze.html#Config",
          "type": "function"
        },
        "index": {
          "hierarchy": "Dewdrop Analyze",
          "module": "Dewdrop.Analyze",
          "name": "Config",
          "package": "dewdrop",
          "partial": "Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dewdrop/docs/Dewdrop-Analyze.html#v:Config"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Dewdrop.Analyze",
          "name": "Gadget",
          "package": "dewdrop",
          "signature": "Gadget [Metadata]",
          "source": "src/Dewdrop-Analyze.html#Gadget",
          "type": "function"
        },
        "index": {
          "hierarchy": "Dewdrop Analyze",
          "module": "Dewdrop.Analyze",
          "name": "Gadget",
          "normalized": "Gadget[Metadata]",
          "package": "dewdrop",
          "partial": "Gadget",
          "signature": "Gadget[Metadata]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dewdrop/docs/Dewdrop-Analyze.html#v:Gadget"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMaximum size of a gadget, in bytes\n\u003c/p\u003e",
          "module": "Dewdrop.Analyze",
          "name": "cfgMaxSize",
          "package": "dewdrop",
          "signature": "Int",
          "source": "src/Dewdrop-Analyze.html#Config",
          "type": "function"
        },
        "index": {
          "description": "Maximum size of gadget in bytes",
          "hierarchy": "Dewdrop Analyze",
          "module": "Dewdrop.Analyze",
          "name": "cfgMaxSize",
          "package": "dewdrop",
          "partial": "Max Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dewdrop/docs/Dewdrop-Analyze.html#v:cfgMaxSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAssembly syntax for display\n\u003c/p\u003e",
          "module": "Dewdrop.Analyze",
          "name": "cfgSyntax",
          "package": "dewdrop",
          "signature": "Syntax",
          "source": "src/Dewdrop-Analyze.html#Config",
          "type": "function"
        },
        "index": {
          "description": "Assembly syntax for display",
          "hierarchy": "Dewdrop Analyze",
          "module": "Dewdrop.Analyze",
          "name": "cfgSyntax",
          "package": "dewdrop",
          "partial": "Syntax",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dewdrop/docs/Dewdrop-Analyze.html#v:cfgSyntax"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCPU vendor; affects decoding of a\n   few instructions\n\u003c/p\u003e",
          "module": "Dewdrop.Analyze",
          "name": "cfgVendor",
          "package": "dewdrop",
          "signature": "Vendor",
          "source": "src/Dewdrop-Analyze.html#Config",
          "type": "function"
        },
        "index": {
          "description": "CPU vendor affects decoding of few instructions",
          "hierarchy": "Dewdrop Analyze",
          "module": "Dewdrop.Analyze",
          "name": "cfgVendor",
          "package": "dewdrop",
          "partial": "Vendor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dewdrop/docs/Dewdrop-Analyze.html#v:cfgVendor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault configuration of the gadget finder.\n\u003c/p\u003e",
          "module": "Dewdrop.Analyze",
          "name": "defaultConfig",
          "package": "dewdrop",
          "signature": "Config",
          "source": "src/Dewdrop-Analyze.html#defaultConfig",
          "type": "function"
        },
        "index": {
          "description": "Default configuration of the gadget finder",
          "hierarchy": "Dewdrop Analyze",
          "module": "Dewdrop.Analyze",
          "name": "defaultConfig",
          "package": "dewdrop",
          "partial": "Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dewdrop/docs/Dewdrop-Analyze.html#v:defaultConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind possible gadgets.\n\u003c/p\u003e\u003cp\u003eYou can filter these further using \u003ccode\u003e\u003ccode\u003e\u003ca\u003evalid\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e or other tests.\n\u003c/p\u003e",
          "module": "Dewdrop.Analyze",
          "name": "gadgets",
          "package": "dewdrop",
          "signature": "Elf -\u003e [Gadget]",
          "source": "src/Dewdrop-Analyze.html#gadgets",
          "type": "function"
        },
        "index": {
          "description": "Find possible gadgets You can filter these further using valid or other tests",
          "hierarchy": "Dewdrop Analyze",
          "module": "Dewdrop.Analyze",
          "name": "gadgets",
          "normalized": "Elf-\u003e[Gadget]",
          "package": "dewdrop",
          "signature": "Elf-\u003e[Gadget]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dewdrop/docs/Dewdrop-Analyze.html#v:gadgets"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind possible gadgets, using a custom configuration.\n\u003c/p\u003e",
          "module": "Dewdrop.Analyze",
          "name": "gadgetsWith",
          "package": "dewdrop",
          "signature": "Config -\u003e Elf -\u003e [Gadget]",
          "source": "src/Dewdrop-Analyze.html#gadgetsWith",
          "type": "function"
        },
        "index": {
          "description": "Find possible gadgets using custom configuration",
          "hierarchy": "Dewdrop Analyze",
          "module": "Dewdrop.Analyze",
          "name": "gadgetsWith",
          "normalized": "Config-\u003eElf-\u003e[Gadget]",
          "package": "dewdrop",
          "partial": "With",
          "signature": "Config-\u003eElf-\u003e[Gadget]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dewdrop/docs/Dewdrop-Analyze.html#v:gadgetsWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRejects gadgets which are probably not useful for return-oriented\n programming.  This includes gadgets containing invalid or privileged\n instructions.\n\u003c/p\u003e",
          "module": "Dewdrop.Analyze",
          "name": "valid",
          "package": "dewdrop",
          "signature": "Gadget -\u003e Bool",
          "source": "src/Dewdrop-Analyze.html#valid",
          "type": "function"
        },
        "index": {
          "description": "Rejects gadgets which are probably not useful for return-oriented programming This includes gadgets containing invalid or privileged instructions",
          "hierarchy": "Dewdrop Analyze",
          "module": "Dewdrop.Analyze",
          "name": "valid",
          "normalized": "Gadget-\u003eBool",
          "package": "dewdrop",
          "signature": "Gadget-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dewdrop/docs/Dewdrop-Analyze.html#v:valid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePrint ROP gadgets having some desired property.\n\u003c/p\u003e\u003cp\u003eThis module provides the quickest way to get started:\n\u003c/p\u003e\u003cpre\u003e $ cat find.hs\n\n import Dewdrop\n main = dewdrop (any (usesRegister RBP))\n\n $ runhaskell find.hs /bin/ls\n 00402e56:\n   pop %rbp\n   ret\n\n 0040afe7:\n   shl %cl, -0x15(%rbp)\n   rep ret\n\n ...\n\u003c/pre\u003e\u003cp\u003eIf you need more control, see \u003ca\u003eDewdrop.Analyze\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Dewdrop",
          "name": "Dewdrop",
          "package": "dewdrop",
          "source": "src/Dewdrop.html",
          "type": "module"
        },
        "index": {
          "description": "Print ROP gadgets having some desired property This module provides the quickest way to get started cat find.hs import Dewdrop main dewdrop any usesRegister RBP runhaskell find.hs bin ls e56 pop rbp ret afe7 shl cl x15 rbp rep ret If you need more control see Dewdrop.Analyze",
          "hierarchy": "Dewdrop",
          "module": "Dewdrop",
          "name": "Dewdrop",
          "package": "dewdrop",
          "partial": "Dewdrop",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dewdrop/docs/Dewdrop.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOpens the ELF binary file passed as the first command-line\n argument, and prints all ROP gadgets satisfying the specified\n property.\n\u003c/p\u003e",
          "module": "Dewdrop",
          "name": "dewdrop",
          "package": "dewdrop",
          "signature": "([Metadata] -\u003e Bool) -\u003e IO ()",
          "source": "src/Dewdrop.html#dewdrop",
          "type": "function"
        },
        "index": {
          "description": "Opens the ELF binary file passed as the first command-line argument and prints all ROP gadgets satisfying the specified property",
          "hierarchy": "Dewdrop",
          "module": "Dewdrop",
          "name": "dewdrop",
          "normalized": "([Metadata]-\u003eBool)-\u003eIO()",
          "package": "dewdrop",
          "signature": "([Metadata]-\u003eBool)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dewdrop/docs/Dewdrop.html#v:dewdrop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the \u003ccode\u003e\u003ccode\u003e\u003ca\u003eOpcode\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e directly from an instruction-with-metadata.\n\u003c/p\u003e",
          "module": "Dewdrop",
          "name": "opcode",
          "package": "dewdrop",
          "signature": "Metadata -\u003e Opcode",
          "source": "src/Dewdrop.html#opcode",
          "type": "function"
        },
        "index": {
          "description": "Get the Opcode directly from an instruction-with-metadata",
          "hierarchy": "Dewdrop",
          "module": "Dewdrop",
          "name": "opcode",
          "normalized": "Metadata-\u003eOpcode",
          "package": "dewdrop",
          "signature": "Metadata-\u003eOpcode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dewdrop/docs/Dewdrop.html#v:opcode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDoes this instruction use a given register?\n\u003c/p\u003e\u003cp\u003eThis only includes registers explicitly mentioned in disassembly,\n and not e.g. the \u003ccode\u003ersi\u003c/code\u003e / \u003ccode\u003erdi\u003c/code\u003e operands of \u003ccode\u003emovsd\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Dewdrop",
          "name": "usesRegister",
          "package": "dewdrop",
          "signature": "GPR -\u003e Metadata -\u003e Bool",
          "source": "src/Dewdrop.html#usesRegister",
          "type": "function"
        },
        "index": {
          "description": "Does this instruction use given register This only includes registers explicitly mentioned in disassembly and not e.g the rsi rdi operands of movsd",
          "hierarchy": "Dewdrop",
          "module": "Dewdrop",
          "name": "usesRegister",
          "normalized": "GPR-\u003eMetadata-\u003eBool",
          "package": "dewdrop",
          "partial": "Register",
          "signature": "GPR-\u003eMetadata-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dewdrop/docs/Dewdrop.html#v:usesRegister"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDoes this instruction mention a given segment register?\n\u003c/p\u003e\u003cp\u003eThis only includes explicit overrides, and loads/stores of\n segment registers.\n\u003c/p\u003e",
          "module": "Dewdrop",
          "name": "usesSegment",
          "package": "dewdrop",
          "signature": "Segment -\u003e Metadata -\u003e Bool",
          "source": "src/Dewdrop.html#usesSegment",
          "type": "function"
        },
        "index": {
          "description": "Does this instruction mention given segment register This only includes explicit overrides and loads stores of segment registers",
          "hierarchy": "Dewdrop",
          "module": "Dewdrop",
          "name": "usesSegment",
          "normalized": "Segment-\u003eMetadata-\u003eBool",
          "package": "dewdrop",
          "partial": "Segment",
          "signature": "Segment-\u003eMetadata-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dewdrop/docs/Dewdrop.html#v:usesSegment"
      }
    }
  ]
]