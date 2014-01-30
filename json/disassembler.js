[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/disassembler/docs/Text-Disassembler-X86Disassembler.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDisassembler for x86 machine code.\n\u003c/p\u003e\u003cp\u003eThis is a disassembler for object code for the x86 architecture.\n It provides functions for disassembling byte arrays, byte lists and\n memory blocks containing raw binary code.\n\u003c/p\u003e\u003cp\u003eFeatures:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Disassembles memory blocks, lists or arrays of bytes into lists of\n   instructions.\n\u003c/li\u003e\u003cli\u003e Abstract instructions provide as much information as possible about\n   opcodes, addressing modes or operand sizes, allowing for detailed\n   output.\n\u003c/li\u003e\u003cli\u003e Provides functions for displaying instructions in Intel or AT&T\n   style (like the GNU tools)\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eDifferences to GNU tools, like gdb or objdump:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Displacements are shown in decimal, with sign if negative.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eMissing: \n\u003c/p\u003e\u003cul\u003e\u003cli\u003e LOCK and repeat prefixes are recognized, but not contained in the\n   opcodes of instructions.\n\u003c/li\u003e\u003cli\u003e Support for 16-bit addressing modes.  Could be added when needed.\n\u003c/li\u003e\u003cli\u003e Complete disassembly of all 64-bit instructions.  I have tried to\n   disassemble them properly but have been limited to the information\n   in the docs, because I have no 64-bit machine to test on.  This will\n   probably change when I get GNU as to produce 64-bit object files.\n\u003c/li\u003e\u003cli\u003e Not all MMX and SSE\u003cem\u003eSSE2\u003c/em\u003eSSE3 instructions are decoded yet.  This is\n   just a matter of missing time.\n\u003c/li\u003e\u003cli\u003e segment override prefixes are decoded, but not appended to memory\n   references\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eOn the implementation:\n\u003c/p\u003e\u003cp\u003eThis disassembler uses the Parsec parser combinators, working on byte\n lists.  This proved to be very convenient, as the combinators keep\n track of the current position, etc.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.Disassembler.X86Disassembler",
        "fct-package": "disassembler",
        "fct-signature": "module",
        "fct-source": "src/Text-Disassembler-X86Disassembler.html",
        "fct-type": "module",
        "title": "X86Disassembler"
      },
      "index": {
        "description": "Disassembler for x86 machine code This is disassembler for object code for the x86 architecture It provides functions for disassembling byte arrays byte lists and memory blocks containing raw binary code Features Disassembles memory blocks lists or arrays of bytes into lists of instructions Abstract instructions provide as much information as possible about opcodes addressing modes or operand sizes allowing for detailed output Provides functions for displaying instructions in Intel or AT style like the GNU tools Differences to GNU tools like gdb or objdump Displacements are shown in decimal with sign if negative Missing LOCK and repeat prefixes are recognized but not contained in the opcodes of instructions Support for bit addressing modes Could be added when needed Complete disassembly of all bit instructions have tried to disassemble them properly but have been limited to the information in the docs because have no bit machine to test on This will probably change when get GNU as to produce bit object files Not all MMX and SSE SSE2 SSE3 instructions are decoded yet This is just matter of missing time segment override prefixes are decoded but not appended to memory references On the implementation This disassembler uses the Parsec parser combinators working on byte lists This proved to be very convenient as the combinators keep track of the current position etc",
        "hierarchy": "Text Disassembler X86Disassembler",
        "module": "Text.Disassembler.X86Disassembler",
        "name": "X86Disassembler",
        "normalized": "",
        "package": "disassembler",
        "partial": "Disassembler",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/disassembler/docs/Text-Disassembler-X86Disassembler.html#t:Config",
      "description": {
        "fct-module": "Text.Disassembler.X86Disassembler",
        "fct-package": "disassembler",
        "fct-signature": "data",
        "fct-source": "src/Text-Disassembler-X86Disassembler.html#Config",
        "fct-type": "data",
        "title": "Config"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Disassembler X86Disassembler",
        "module": "Text.Disassembler.X86Disassembler",
        "name": "Config",
        "normalized": "",
        "package": "disassembler",
        "partial": "Config",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/disassembler/docs/Text-Disassembler-X86Disassembler.html#t:InstrOperandSize",
      "description": {
        "fct-descr": "\u003cp\u003eSome opcodes can operate on data of several widths.  This information\n is encoded in instructions using the following enumeration type..\n\u003c/p\u003e",
        "fct-module": "Text.Disassembler.X86Disassembler",
        "fct-package": "disassembler",
        "fct-signature": "data",
        "fct-source": "src/Text-Disassembler-X86Disassembler.html#InstrOperandSize",
        "fct-type": "data",
        "title": "InstrOperandSize"
      },
      "index": {
        "description": "Some opcodes can operate on data of several widths This information is encoded in instructions using the following enumeration type",
        "hierarchy": "Text Disassembler X86Disassembler",
        "module": "Text.Disassembler.X86Disassembler",
        "name": "InstrOperandSize",
        "normalized": "",
        "package": "disassembler",
        "partial": "Instr Operand Size",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/disassembler/docs/Text-Disassembler-X86Disassembler.html#t:Instruction",
      "description": {
        "fct-descr": "\u003cp\u003eThe disassembly routines return lists of the following datatype.  It\n encodes both invalid byte sequences (with a useful error message, if\n possible), or a valid instruction.  Both variants contain the list of\n opcode bytes from which the instruction was decoded and the address of\n the instruction.\n\u003c/p\u003e",
        "fct-module": "Text.Disassembler.X86Disassembler",
        "fct-package": "disassembler",
        "fct-signature": "data",
        "fct-source": "src/Text-Disassembler-X86Disassembler.html#Instruction",
        "fct-type": "data",
        "title": "Instruction"
      },
      "index": {
        "description": "The disassembly routines return lists of the following datatype It encodes both invalid byte sequences with useful error message if possible or valid instruction Both variants contain the list of opcode bytes from which the instruction was decoded and the address of the instruction",
        "hierarchy": "Text Disassembler X86Disassembler",
        "module": "Text.Disassembler.X86Disassembler",
        "name": "Instruction",
        "normalized": "",
        "package": "disassembler",
        "partial": "Instruction",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/disassembler/docs/Text-Disassembler-X86Disassembler.html#t:Opcode",
      "description": {
        "fct-descr": "\u003cp\u003eAll opcodes are represented by this enumeration type.\n\u003c/p\u003e",
        "fct-module": "Text.Disassembler.X86Disassembler",
        "fct-package": "disassembler",
        "fct-signature": "data",
        "fct-source": "src/Text-Disassembler-X86Disassembler.html#Opcode",
        "fct-type": "data",
        "title": "Opcode"
      },
      "index": {
        "description": "All opcodes are represented by this enumeration type",
        "hierarchy": "Text Disassembler X86Disassembler",
        "module": "Text.Disassembler.X86Disassembler",
        "name": "Opcode",
        "normalized": "",
        "package": "disassembler",
        "partial": "Opcode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/disassembler/docs/Text-Disassembler-X86Disassembler.html#t:Operand",
      "description": {
        "fct-descr": "\u003cp\u003eAll operands are in one of the following locations:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Constants in the instruction stream\n\u003c/li\u003e\u003cli\u003e Memory locations\n\u003c/li\u003e\u003cli\u003e Registers\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eMemory locations are referred to by on of several addressing modes:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Absolute (address in instruction stream)\n\u003c/li\u003e\u003cli\u003e Register-indirect (address in register)\n\u003c/li\u003e\u003cli\u003e Register-indirect with displacement\n\u003c/li\u003e\u003cli\u003e Base-Index with scale\n\u003c/li\u003e\u003cli\u003e Base-Index with scale and displacement \n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eDisplacements can be encoded as 8 or 32-bit immediates in the\n instruction stream, but are encoded as Int in instructions for\n simplicity.\n\u003c/p\u003e",
        "fct-module": "Text.Disassembler.X86Disassembler",
        "fct-package": "disassembler",
        "fct-signature": "data",
        "fct-source": "src/Text-Disassembler-X86Disassembler.html#Operand",
        "fct-type": "data",
        "title": "Operand"
      },
      "index": {
        "description": "All operands are in one of the following locations Constants in the instruction stream Memory locations Registers Memory locations are referred to by on of several addressing modes Absolute address in instruction stream Register-indirect address in register Register-indirect with displacement Base-Index with scale Base-Index with scale and displacement Displacements can be encoded as or bit immediates in the instruction stream but are encoded as Int in instructions for simplicity",
        "hierarchy": "Text Disassembler X86Disassembler",
        "module": "Text.Disassembler.X86Disassembler",
        "name": "Operand",
        "normalized": "",
        "package": "disassembler",
        "partial": "Operand",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/disassembler/docs/Text-Disassembler-X86Disassembler.html#t:ShowStyle",
      "description": {
        "fct-descr": "\u003cp\u003eInstructions can be displayed either in Intel or AT&T style (like in\n GNU tools).\n\u003c/p\u003e\u003cp\u003eIntel style:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Destination operand comes first, source second.\n\u003c/li\u003e\u003cli\u003e No register or immediate prefixes.\n\u003c/li\u003e\u003cli\u003e Memory operands are annotated with operand size.\n\u003c/li\u003e\u003cli\u003e Hexadecimal numbers are suffixed with \u003ccode\u003eH\u003c/code\u003e and prefixed with \u003ccode\u003e0\u003c/code\u003e if\n   necessary.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eAT&T style:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Source operand comes first, destination second.\n\u003c/li\u003e\u003cli\u003e Register names are prefixes with \u003ccode\u003e%\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e Immediates are prefixed with \u003ccode\u003e$\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e Hexadecimal numbers are prefixes with \u003ccode\u003e0x\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e Opcodes are suffixed with operand size, when ambiguous otherwise.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Text.Disassembler.X86Disassembler",
        "fct-package": "disassembler",
        "fct-signature": "data",
        "fct-source": "src/Text-Disassembler-X86Disassembler.html#ShowStyle",
        "fct-type": "data",
        "title": "ShowStyle"
      },
      "index": {
        "description": "Instructions can be displayed either in Intel or AT style like in GNU tools Intel style Destination operand comes first source second No register or immediate prefixes Memory operands are annotated with operand size Hexadecimal numbers are suffixed with and prefixed with if necessary AT style Source operand comes first destination second Register names are prefixes with Immediates are prefixed with Hexadecimal numbers are prefixes with Opcodes are suffixed with operand size when ambiguous otherwise",
        "hierarchy": "Text Disassembler X86Disassembler",
        "module": "Text.Disassembler.X86Disassembler",
        "name": "ShowStyle",
        "normalized": "",
        "package": "disassembler",
        "partial": "Show Style",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/disassembler/docs/Text-Disassembler-X86Disassembler.html#v:AttStyle",
      "description": {
        "fct-descr": "\u003cp\u003eShow in AT&T style\n\u003c/p\u003e",
        "fct-module": "Text.Disassembler.X86Disassembler",
        "fct-package": "disassembler",
        "fct-signature": "AttStyle",
        "fct-source": "src/Text-Disassembler-X86Disassembler.html#ShowStyle",
        "fct-type": "function",
        "title": "AttStyle"
      },
      "index": {
        "description": "Show in AT style",
        "hierarchy": "Text Disassembler X86Disassembler",
        "module": "Text.Disassembler.X86Disassembler",
        "name": "AttStyle",
        "normalized": "",
        "package": "disassembler",
        "partial": "Att Style",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/disassembler/docs/Text-Disassembler-X86Disassembler.html#v:BadInstruction",
      "description": {
        "fct-descr": "\u003cp\u003eInvalid instruction\n\u003c/p\u003e",
        "fct-module": "Text.Disassembler.X86Disassembler",
        "fct-package": "disassembler",
        "fct-signature": "BadInstruction Word8 String Int [Word8]",
        "fct-source": "src/Text-Disassembler-X86Disassembler.html#Instruction",
        "fct-type": "function",
        "title": "BadInstruction"
      },
      "index": {
        "description": "Invalid instruction",
        "hierarchy": "Text Disassembler X86Disassembler",
        "module": "Text.Disassembler.X86Disassembler",
        "name": "BadInstruction",
        "normalized": "BadInstruction Word String Int[Word]",
        "package": "disassembler",
        "partial": "Bad Instruction",
        "signature": "BadInstruction Word String Int[Word]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/disassembler/docs/Text-Disassembler-X86Disassembler.html#v:Config",
      "description": {
        "fct-module": "Text.Disassembler.X86Disassembler",
        "fct-package": "disassembler",
        "fct-signature": "Config",
        "fct-source": "src/Text-Disassembler-X86Disassembler.html#Config",
        "fct-type": "function",
        "title": "Config"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Disassembler X86Disassembler",
        "module": "Text.Disassembler.X86Disassembler",
        "name": "Config",
        "normalized": "",
        "package": "disassembler",
        "partial": "Config",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/disassembler/docs/Text-Disassembler-X86Disassembler.html#v:Instruction",
      "description": {
        "fct-descr": "\u003cp\u003eValid instruction\n\u003c/p\u003e",
        "fct-module": "Text.Disassembler.X86Disassembler",
        "fct-package": "disassembler",
        "fct-signature": "Instruction",
        "fct-source": "src/Text-Disassembler-X86Disassembler.html#Instruction",
        "fct-type": "function",
        "title": "Instruction"
      },
      "index": {
        "description": "Valid instruction",
        "hierarchy": "Text Disassembler X86Disassembler",
        "module": "Text.Disassembler.X86Disassembler",
        "name": "Instruction",
        "normalized": "",
        "package": "disassembler",
        "partial": "Instruction",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/disassembler/docs/Text-Disassembler-X86Disassembler.html#v:IntelStyle",
      "description": {
        "fct-descr": "\u003cp\u003eShow in Intel style\n\u003c/p\u003e",
        "fct-module": "Text.Disassembler.X86Disassembler",
        "fct-package": "disassembler",
        "fct-signature": "IntelStyle",
        "fct-source": "src/Text-Disassembler-X86Disassembler.html#ShowStyle",
        "fct-type": "function",
        "title": "IntelStyle"
      },
      "index": {
        "description": "Show in Intel style",
        "hierarchy": "Text Disassembler X86Disassembler",
        "module": "Text.Disassembler.X86Disassembler",
        "name": "IntelStyle",
        "normalized": "",
        "package": "disassembler",
        "partial": "Intel Style",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/disassembler/docs/Text-Disassembler-X86Disassembler.html#v:OP128",
      "description": {
        "fct-descr": "\u003cp\u003e128-bit integer operand\n\u003c/p\u003e",
        "fct-module": "Text.Disassembler.X86Disassembler",
        "fct-package": "disassembler",
        "fct-signature": "OP128",
        "fct-source": "src/Text-Disassembler-X86Disassembler.html#InstrOperandSize",
        "fct-type": "function",
        "title": "OP128"
      },
      "index": {
        "description": "bit integer operand",
        "hierarchy": "Text Disassembler X86Disassembler",
        "module": "Text.Disassembler.X86Disassembler",
        "name": "OP128",
        "normalized": "",
        "package": "disassembler",
        "partial": "OP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/disassembler/docs/Text-Disassembler-X86Disassembler.html#v:OP16",
      "description": {
        "fct-descr": "\u003cp\u003e16-bit integer operand\n\u003c/p\u003e",
        "fct-module": "Text.Disassembler.X86Disassembler",
        "fct-package": "disassembler",
        "fct-signature": "OP16",
        "fct-source": "src/Text-Disassembler-X86Disassembler.html#InstrOperandSize",
        "fct-type": "function",
        "title": "OP16"
      },
      "index": {
        "description": "bit integer operand",
        "hierarchy": "Text Disassembler X86Disassembler",
        "module": "Text.Disassembler.X86Disassembler",
        "name": "OP16",
        "normalized": "",
        "package": "disassembler",
        "partial": "OP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/disassembler/docs/Text-Disassembler-X86Disassembler.html#v:OP32",
      "description": {
        "fct-descr": "\u003cp\u003e32-bit integer operand\n\u003c/p\u003e",
        "fct-module": "Text.Disassembler.X86Disassembler",
        "fct-package": "disassembler",
        "fct-signature": "OP32",
        "fct-source": "src/Text-Disassembler-X86Disassembler.html#InstrOperandSize",
        "fct-type": "function",
        "title": "OP32"
      },
      "index": {
        "description": "bit integer operand",
        "hierarchy": "Text Disassembler X86Disassembler",
        "module": "Text.Disassembler.X86Disassembler",
        "name": "OP32",
        "normalized": "",
        "package": "disassembler",
        "partial": "OP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/disassembler/docs/Text-Disassembler-X86Disassembler.html#v:OP64",
      "description": {
        "fct-descr": "\u003cp\u003e64-bit integer operand\n\u003c/p\u003e",
        "fct-module": "Text.Disassembler.X86Disassembler",
        "fct-package": "disassembler",
        "fct-signature": "OP64",
        "fct-source": "src/Text-Disassembler-X86Disassembler.html#InstrOperandSize",
        "fct-type": "function",
        "title": "OP64"
      },
      "index": {
        "description": "bit integer operand",
        "hierarchy": "Text Disassembler X86Disassembler",
        "module": "Text.Disassembler.X86Disassembler",
        "name": "OP64",
        "normalized": "",
        "package": "disassembler",
        "partial": "OP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/disassembler/docs/Text-Disassembler-X86Disassembler.html#v:OP8",
      "description": {
        "fct-descr": "\u003cp\u003e8-bit integer operand\n\u003c/p\u003e",
        "fct-module": "Text.Disassembler.X86Disassembler",
        "fct-package": "disassembler",
        "fct-signature": "OP8",
        "fct-source": "src/Text-Disassembler-X86Disassembler.html#InstrOperandSize",
        "fct-type": "function",
        "title": "OP8"
      },
      "index": {
        "description": "bit integer operand",
        "hierarchy": "Text Disassembler X86Disassembler",
        "module": "Text.Disassembler.X86Disassembler",
        "name": "OP8",
        "normalized": "",
        "package": "disassembler",
        "partial": "OP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/disassembler/docs/Text-Disassembler-X86Disassembler.html#v:OPF32",
      "description": {
        "fct-descr": "\u003cp\u003e32-bit floating point operand\n\u003c/p\u003e",
        "fct-module": "Text.Disassembler.X86Disassembler",
        "fct-package": "disassembler",
        "fct-signature": "OPF32",
        "fct-source": "src/Text-Disassembler-X86Disassembler.html#InstrOperandSize",
        "fct-type": "function",
        "title": "OPF32"
      },
      "index": {
        "description": "bit floating point operand",
        "hierarchy": "Text Disassembler X86Disassembler",
        "module": "Text.Disassembler.X86Disassembler",
        "name": "OPF32",
        "normalized": "",
        "package": "disassembler",
        "partial": "OPF",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/disassembler/docs/Text-Disassembler-X86Disassembler.html#v:OPF64",
      "description": {
        "fct-descr": "\u003cp\u003e64-bit floating point operand\n\u003c/p\u003e",
        "fct-module": "Text.Disassembler.X86Disassembler",
        "fct-package": "disassembler",
        "fct-signature": "OPF64",
        "fct-source": "src/Text-Disassembler-X86Disassembler.html#InstrOperandSize",
        "fct-type": "function",
        "title": "OPF64"
      },
      "index": {
        "description": "bit floating point operand",
        "hierarchy": "Text Disassembler X86Disassembler",
        "module": "Text.Disassembler.X86Disassembler",
        "name": "OPF64",
        "normalized": "",
        "package": "disassembler",
        "partial": "OPF",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/disassembler/docs/Text-Disassembler-X86Disassembler.html#v:OPF80",
      "description": {
        "fct-descr": "\u003cp\u003e80-bit floating point operand\n\u003c/p\u003e",
        "fct-module": "Text.Disassembler.X86Disassembler",
        "fct-package": "disassembler",
        "fct-signature": "OPF80",
        "fct-source": "src/Text-Disassembler-X86Disassembler.html#InstrOperandSize",
        "fct-type": "function",
        "title": "OPF80"
      },
      "index": {
        "description": "bit floating point operand",
        "hierarchy": "Text Disassembler X86Disassembler",
        "module": "Text.Disassembler.X86Disassembler",
        "name": "OPF80",
        "normalized": "",
        "package": "disassembler",
        "partial": "OPF",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/disassembler/docs/Text-Disassembler-X86Disassembler.html#v:OPNONE",
      "description": {
        "fct-descr": "\u003cp\u003eNo operand size specified\n\u003c/p\u003e",
        "fct-module": "Text.Disassembler.X86Disassembler",
        "fct-package": "disassembler",
        "fct-signature": "OPNONE",
        "fct-source": "src/Text-Disassembler-X86Disassembler.html#InstrOperandSize",
        "fct-type": "function",
        "title": "OPNONE"
      },
      "index": {
        "description": "No operand size specified",
        "hierarchy": "Text Disassembler X86Disassembler",
        "module": "Text.Disassembler.X86Disassembler",
        "name": "OPNONE",
        "normalized": "",
        "package": "disassembler",
        "partial": "OPNONE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/disassembler/docs/Text-Disassembler-X86Disassembler.html#v:OpAddr",
      "description": {
        "fct-descr": "\u003cp\u003eAbsolute address\n\u003c/p\u003e",
        "fct-module": "Text.Disassembler.X86Disassembler",
        "fct-package": "disassembler",
        "fct-signature": "OpAddr Word32 InstrOperandSize",
        "fct-source": "src/Text-Disassembler-X86Disassembler.html#Operand",
        "fct-type": "function",
        "title": "OpAddr"
      },
      "index": {
        "description": "Absolute address",
        "hierarchy": "Text Disassembler X86Disassembler",
        "module": "Text.Disassembler.X86Disassembler",
        "name": "OpAddr",
        "normalized": "",
        "package": "disassembler",
        "partial": "Op Addr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/disassembler/docs/Text-Disassembler-X86Disassembler.html#v:OpBaseIndex",
      "description": {
        "fct-descr": "\u003cp\u003eBase plus scaled index\n\u003c/p\u003e",
        "fct-module": "Text.Disassembler.X86Disassembler",
        "fct-package": "disassembler",
        "fct-signature": "OpBaseIndex String String Int InstrOperandSize",
        "fct-source": "src/Text-Disassembler-X86Disassembler.html#Operand",
        "fct-type": "function",
        "title": "OpBaseIndex"
      },
      "index": {
        "description": "Base plus scaled index",
        "hierarchy": "Text Disassembler X86Disassembler",
        "module": "Text.Disassembler.X86Disassembler",
        "name": "OpBaseIndex",
        "normalized": "",
        "package": "disassembler",
        "partial": "Op Base Index",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/disassembler/docs/Text-Disassembler-X86Disassembler.html#v:OpBaseIndexDisp",
      "description": {
        "fct-descr": "\u003cp\u003eBase plus scaled index with displacement\n\u003c/p\u003e",
        "fct-module": "Text.Disassembler.X86Disassembler",
        "fct-package": "disassembler",
        "fct-signature": "OpBaseIndexDisp String String Int Int InstrOperandSize",
        "fct-source": "src/Text-Disassembler-X86Disassembler.html#Operand",
        "fct-type": "function",
        "title": "OpBaseIndexDisp"
      },
      "index": {
        "description": "Base plus scaled index with displacement",
        "hierarchy": "Text Disassembler X86Disassembler",
        "module": "Text.Disassembler.X86Disassembler",
        "name": "OpBaseIndexDisp",
        "normalized": "",
        "package": "disassembler",
        "partial": "Op Base Index Disp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/disassembler/docs/Text-Disassembler-X86Disassembler.html#v:OpFPReg",
      "description": {
        "fct-descr": "\u003cp\u003eFloating-point register\n\u003c/p\u003e",
        "fct-module": "Text.Disassembler.X86Disassembler",
        "fct-package": "disassembler",
        "fct-signature": "OpFPReg Int",
        "fct-source": "src/Text-Disassembler-X86Disassembler.html#Operand",
        "fct-type": "function",
        "title": "OpFPReg"
      },
      "index": {
        "description": "Floating-point register",
        "hierarchy": "Text Disassembler X86Disassembler",
        "module": "Text.Disassembler.X86Disassembler",
        "name": "OpFPReg",
        "normalized": "",
        "package": "disassembler",
        "partial": "Op FPReg",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/disassembler/docs/Text-Disassembler-X86Disassembler.html#v:OpImm",
      "description": {
        "fct-descr": "\u003cp\u003eImmediate value\n\u003c/p\u003e",
        "fct-module": "Text.Disassembler.X86Disassembler",
        "fct-package": "disassembler",
        "fct-signature": "OpImm Word32",
        "fct-source": "src/Text-Disassembler-X86Disassembler.html#Operand",
        "fct-type": "function",
        "title": "OpImm"
      },
      "index": {
        "description": "Immediate value",
        "hierarchy": "Text Disassembler X86Disassembler",
        "module": "Text.Disassembler.X86Disassembler",
        "name": "OpImm",
        "normalized": "",
        "package": "disassembler",
        "partial": "Op Imm",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/disassembler/docs/Text-Disassembler-X86Disassembler.html#v:OpInd",
      "description": {
        "fct-descr": "\u003cp\u003eRegister-indirect\n\u003c/p\u003e",
        "fct-module": "Text.Disassembler.X86Disassembler",
        "fct-package": "disassembler",
        "fct-signature": "OpInd String InstrOperandSize",
        "fct-source": "src/Text-Disassembler-X86Disassembler.html#Operand",
        "fct-type": "function",
        "title": "OpInd"
      },
      "index": {
        "description": "Register-indirect",
        "hierarchy": "Text Disassembler X86Disassembler",
        "module": "Text.Disassembler.X86Disassembler",
        "name": "OpInd",
        "normalized": "",
        "package": "disassembler",
        "partial": "Op Ind",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/disassembler/docs/Text-Disassembler-X86Disassembler.html#v:OpIndDisp",
      "description": {
        "fct-descr": "\u003cp\u003eRegister-indirect with displacement\n\u003c/p\u003e",
        "fct-module": "Text.Disassembler.X86Disassembler",
        "fct-package": "disassembler",
        "fct-signature": "OpIndDisp String Int InstrOperandSize",
        "fct-source": "src/Text-Disassembler-X86Disassembler.html#Operand",
        "fct-type": "function",
        "title": "OpIndDisp"
      },
      "index": {
        "description": "Register-indirect with displacement",
        "hierarchy": "Text Disassembler X86Disassembler",
        "module": "Text.Disassembler.X86Disassembler",
        "name": "OpIndDisp",
        "normalized": "",
        "package": "disassembler",
        "partial": "Op Ind Disp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/disassembler/docs/Text-Disassembler-X86Disassembler.html#v:OpIndexDisp",
      "description": {
        "fct-descr": "\u003cp\u003eScaled index with displacement\n\u003c/p\u003e",
        "fct-module": "Text.Disassembler.X86Disassembler",
        "fct-package": "disassembler",
        "fct-signature": "OpIndexDisp String Int Int InstrOperandSize",
        "fct-source": "src/Text-Disassembler-X86Disassembler.html#Operand",
        "fct-type": "function",
        "title": "OpIndexDisp"
      },
      "index": {
        "description": "Scaled index with displacement",
        "hierarchy": "Text Disassembler X86Disassembler",
        "module": "Text.Disassembler.X86Disassembler",
        "name": "OpIndexDisp",
        "normalized": "",
        "package": "disassembler",
        "partial": "Op Index Disp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/disassembler/docs/Text-Disassembler-X86Disassembler.html#v:OpReg",
      "description": {
        "fct-descr": "\u003cp\u003eRegister\n\u003c/p\u003e",
        "fct-module": "Text.Disassembler.X86Disassembler",
        "fct-package": "disassembler",
        "fct-signature": "OpReg String Int",
        "fct-source": "src/Text-Disassembler-X86Disassembler.html#Operand",
        "fct-type": "function",
        "title": "OpReg"
      },
      "index": {
        "description": "Register",
        "hierarchy": "Text Disassembler X86Disassembler",
        "module": "Text.Disassembler.X86Disassembler",
        "name": "OpReg",
        "normalized": "",
        "package": "disassembler",
        "partial": "Op Reg",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/disassembler/docs/Text-Disassembler-X86Disassembler.html#v:PseudoInstruction",
      "description": {
        "fct-descr": "\u003cp\u003ePseudo instruction, e.g. label\n\u003c/p\u003e",
        "fct-module": "Text.Disassembler.X86Disassembler",
        "fct-package": "disassembler",
        "fct-signature": "PseudoInstruction Int String",
        "fct-source": "src/Text-Disassembler-X86Disassembler.html#Instruction",
        "fct-type": "function",
        "title": "PseudoInstruction"
      },
      "index": {
        "description": "Pseudo instruction e.g label",
        "hierarchy": "Text Disassembler X86Disassembler",
        "module": "Text.Disassembler.X86Disassembler",
        "name": "PseudoInstruction",
        "normalized": "",
        "package": "disassembler",
        "partial": "Pseudo Instruction",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/disassembler/docs/Text-Disassembler-X86Disassembler.html#v:address",
      "description": {
        "fct-descr": "\u003cp\u003eStart address of instruction\n\u003c/p\u003e",
        "fct-module": "Text.Disassembler.X86Disassembler",
        "fct-package": "disassembler",
        "fct-signature": "Int",
        "fct-source": "src/Text-Disassembler-X86Disassembler.html#Instruction",
        "fct-type": "function",
        "title": "address"
      },
      "index": {
        "description": "Start address of instruction",
        "hierarchy": "Text Disassembler X86Disassembler",
        "module": "Text.Disassembler.X86Disassembler",
        "name": "address",
        "normalized": "",
        "package": "disassembler",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/disassembler/docs/Text-Disassembler-X86Disassembler.html#v:bytes",
      "description": {
        "fct-descr": "\u003cp\u003eInstruction bytes\n\u003c/p\u003e",
        "fct-module": "Text.Disassembler.X86Disassembler",
        "fct-package": "disassembler",
        "fct-signature": "[Word8]",
        "fct-source": "src/Text-Disassembler-X86Disassembler.html#Instruction",
        "fct-type": "function",
        "title": "bytes"
      },
      "index": {
        "description": "Instruction bytes",
        "hierarchy": "Text Disassembler X86Disassembler",
        "module": "Text.Disassembler.X86Disassembler",
        "name": "bytes",
        "normalized": "[Word]",
        "package": "disassembler",
        "partial": "",
        "signature": "[Word]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/disassembler/docs/Text-Disassembler-X86Disassembler.html#v:confAddressBitMode",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.Disassembler.X86Disassembler",
        "fct-package": "disassembler",
        "fct-signature": "OperandSize",
        "fct-source": "src/Text-Disassembler-X86Disassembler.html#Config",
        "fct-type": "function",
        "title": "confAddressBitMode"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Disassembler X86Disassembler",
        "module": "Text.Disassembler.X86Disassembler",
        "name": "confAddressBitMode",
        "normalized": "",
        "package": "disassembler",
        "partial": "Address Bit Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/disassembler/docs/Text-Disassembler-X86Disassembler.html#v:confDefaultBitMode",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.Disassembler.X86Disassembler",
        "fct-package": "disassembler",
        "fct-signature": "OperandSize",
        "fct-source": "src/Text-Disassembler-X86Disassembler.html#Config",
        "fct-type": "function",
        "title": "confDefaultBitMode"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Disassembler X86Disassembler",
        "module": "Text.Disassembler.X86Disassembler",
        "name": "confDefaultBitMode",
        "normalized": "",
        "package": "disassembler",
        "partial": "Default Bit Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/disassembler/docs/Text-Disassembler-X86Disassembler.html#v:confIn64BitMode",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.Disassembler.X86Disassembler",
        "fct-package": "disassembler",
        "fct-signature": "Bool",
        "fct-source": "src/Text-Disassembler-X86Disassembler.html#Config",
        "fct-type": "function",
        "title": "confIn64BitMode"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Disassembler X86Disassembler",
        "module": "Text.Disassembler.X86Disassembler",
        "name": "confIn64BitMode",
        "normalized": "",
        "package": "disassembler",
        "partial": "In Bit Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/disassembler/docs/Text-Disassembler-X86Disassembler.html#v:confOperandBitMode",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.Disassembler.X86Disassembler",
        "fct-package": "disassembler",
        "fct-signature": "OperandSize",
        "fct-source": "src/Text-Disassembler-X86Disassembler.html#Config",
        "fct-type": "function",
        "title": "confOperandBitMode"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Disassembler X86Disassembler",
        "module": "Text.Disassembler.X86Disassembler",
        "name": "confOperandBitMode",
        "normalized": "",
        "package": "disassembler",
        "partial": "Operand Bit Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/disassembler/docs/Text-Disassembler-X86Disassembler.html#v:confStartAddr",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.Disassembler.X86Disassembler",
        "fct-package": "disassembler",
        "fct-signature": "Word32",
        "fct-source": "src/Text-Disassembler-X86Disassembler.html#Config",
        "fct-type": "function",
        "title": "confStartAddr"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Disassembler X86Disassembler",
        "module": "Text.Disassembler.X86Disassembler",
        "name": "confStartAddr",
        "normalized": "",
        "package": "disassembler",
        "partial": "Start Addr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/disassembler/docs/Text-Disassembler-X86Disassembler.html#v:defaultConfig",
      "description": {
        "fct-module": "Text.Disassembler.X86Disassembler",
        "fct-package": "disassembler",
        "fct-signature": "Config",
        "fct-source": "src/Text-Disassembler-X86Disassembler.html#defaultConfig",
        "fct-type": "function",
        "title": "defaultConfig"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Disassembler X86Disassembler",
        "module": "Text.Disassembler.X86Disassembler",
        "name": "defaultConfig",
        "normalized": "",
        "package": "disassembler",
        "partial": "Config",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/disassembler/docs/Text-Disassembler-X86Disassembler.html#v:disassembleArray",
      "description": {
        "fct-descr": "\u003cp\u003eDisassemble the contents of the given array.\n\u003c/p\u003e",
        "fct-module": "Text.Disassembler.X86Disassembler",
        "fct-package": "disassembler",
        "fct-signature": "a i Word8 -\u003e m (Either ParseError [Instruction])",
        "fct-source": "src/Text-Disassembler-X86Disassembler.html#disassembleArray",
        "fct-type": "function",
        "title": "disassembleArray"
      },
      "index": {
        "description": "Disassemble the contents of the given array",
        "hierarchy": "Text Disassembler X86Disassembler",
        "module": "Text.Disassembler.X86Disassembler",
        "name": "disassembleArray",
        "normalized": "a b Word-\u003ec(Either ParseError[Instruction])",
        "package": "disassembler",
        "partial": "Array",
        "signature": "a i Word-\u003em(Either ParseError[Instruction])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/disassembler/docs/Text-Disassembler-X86Disassembler.html#v:disassembleArrayWithConfig",
      "description": {
        "fct-module": "Text.Disassembler.X86Disassembler",
        "fct-package": "disassembler",
        "fct-signature": "Config -\u003e a i Word8 -\u003e m (Either ParseError [Instruction])",
        "fct-source": "src/Text-Disassembler-X86Disassembler.html#disassembleArrayWithConfig",
        "fct-type": "function",
        "title": "disassembleArrayWithConfig"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Disassembler X86Disassembler",
        "module": "Text.Disassembler.X86Disassembler",
        "name": "disassembleArrayWithConfig",
        "normalized": "Config-\u003ea b Word-\u003ec(Either ParseError[Instruction])",
        "package": "disassembler",
        "partial": "Array With Config",
        "signature": "Config-\u003ea i Word-\u003em(Either ParseError[Instruction])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/disassembler/docs/Text-Disassembler-X86Disassembler.html#v:disassembleBlock",
      "description": {
        "fct-descr": "\u003cp\u003eDisassemble a block of memory.  Starting at the location\n pointed to by the given pointer, the given number of bytes are\n disassembled.\n\u003c/p\u003e",
        "fct-module": "Text.Disassembler.X86Disassembler",
        "fct-package": "disassembler",
        "fct-signature": "Ptr Word8 -\u003e Int -\u003e IO (Either ParseError [Instruction])",
        "fct-source": "src/Text-Disassembler-X86Disassembler.html#disassembleBlock",
        "fct-type": "function",
        "title": "disassembleBlock"
      },
      "index": {
        "description": "Disassemble block of memory Starting at the location pointed to by the given pointer the given number of bytes are disassembled",
        "hierarchy": "Text Disassembler X86Disassembler",
        "module": "Text.Disassembler.X86Disassembler",
        "name": "disassembleBlock",
        "normalized": "Ptr Word-\u003eInt-\u003eIO(Either ParseError[Instruction])",
        "package": "disassembler",
        "partial": "Block",
        "signature": "Ptr Word-\u003eInt-\u003eIO(Either ParseError[Instruction])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/disassembler/docs/Text-Disassembler-X86Disassembler.html#v:disassembleBlockWithConfig",
      "description": {
        "fct-module": "Text.Disassembler.X86Disassembler",
        "fct-package": "disassembler",
        "fct-signature": "Config -\u003e Ptr Word8 -\u003e Int -\u003e IO (Either ParseError [Instruction])",
        "fct-source": "src/Text-Disassembler-X86Disassembler.html#disassembleBlockWithConfig",
        "fct-type": "function",
        "title": "disassembleBlockWithConfig"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Disassembler X86Disassembler",
        "module": "Text.Disassembler.X86Disassembler",
        "name": "disassembleBlockWithConfig",
        "normalized": "Config-\u003ePtr Word-\u003eInt-\u003eIO(Either ParseError[Instruction])",
        "package": "disassembler",
        "partial": "Block With Config",
        "signature": "Config-\u003ePtr Word-\u003eInt-\u003eIO(Either ParseError[Instruction])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/disassembler/docs/Text-Disassembler-X86Disassembler.html#v:disassembleFile",
      "description": {
        "fct-module": "Text.Disassembler.X86Disassembler",
        "fct-package": "disassembler",
        "fct-signature": "FilePath -\u003e IO (Either ParseError [Instruction])",
        "fct-source": "src/Text-Disassembler-X86Disassembler.html#disassembleFile",
        "fct-type": "function",
        "title": "disassembleFile"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Disassembler X86Disassembler",
        "module": "Text.Disassembler.X86Disassembler",
        "name": "disassembleFile",
        "normalized": "FilePath-\u003eIO(Either ParseError[Instruction])",
        "package": "disassembler",
        "partial": "File",
        "signature": "FilePath-\u003eIO(Either ParseError[Instruction])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/disassembler/docs/Text-Disassembler-X86Disassembler.html#v:disassembleFileWithConfig",
      "description": {
        "fct-module": "Text.Disassembler.X86Disassembler",
        "fct-package": "disassembler",
        "fct-signature": "Config -\u003e FilePath -\u003e IO (Either ParseError [Instruction])",
        "fct-source": "src/Text-Disassembler-X86Disassembler.html#disassembleFileWithConfig",
        "fct-type": "function",
        "title": "disassembleFileWithConfig"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Disassembler X86Disassembler",
        "module": "Text.Disassembler.X86Disassembler",
        "name": "disassembleFileWithConfig",
        "normalized": "Config-\u003eFilePath-\u003eIO(Either ParseError[Instruction])",
        "package": "disassembler",
        "partial": "File With Config",
        "signature": "Config-\u003eFilePath-\u003eIO(Either ParseError[Instruction])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/disassembler/docs/Text-Disassembler-X86Disassembler.html#v:disassembleList",
      "description": {
        "fct-descr": "\u003cp\u003eDisassemble the contents of the given list.\n\u003c/p\u003e",
        "fct-module": "Text.Disassembler.X86Disassembler",
        "fct-package": "disassembler",
        "fct-signature": "[Word8] -\u003e m (Either ParseError [Instruction])",
        "fct-source": "src/Text-Disassembler-X86Disassembler.html#disassembleList",
        "fct-type": "function",
        "title": "disassembleList"
      },
      "index": {
        "description": "Disassemble the contents of the given list",
        "hierarchy": "Text Disassembler X86Disassembler",
        "module": "Text.Disassembler.X86Disassembler",
        "name": "disassembleList",
        "normalized": "[Word]-\u003ea(Either ParseError[Instruction])",
        "package": "disassembler",
        "partial": "List",
        "signature": "[Word]-\u003em(Either ParseError[Instruction])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/disassembler/docs/Text-Disassembler-X86Disassembler.html#v:disassembleListWithConfig",
      "description": {
        "fct-module": "Text.Disassembler.X86Disassembler",
        "fct-package": "disassembler",
        "fct-signature": "Config -\u003e [Word8] -\u003e m (Either ParseError [Instruction])",
        "fct-source": "src/Text-Disassembler-X86Disassembler.html#disassembleListWithConfig",
        "fct-type": "function",
        "title": "disassembleListWithConfig"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Disassembler X86Disassembler",
        "module": "Text.Disassembler.X86Disassembler",
        "name": "disassembleListWithConfig",
        "normalized": "Config-\u003e[Word]-\u003ea(Either ParseError[Instruction])",
        "package": "disassembler",
        "partial": "List With Config",
        "signature": "Config-\u003e[Word]-\u003em(Either ParseError[Instruction])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/disassembler/docs/Text-Disassembler-X86Disassembler.html#v:opcode",
      "description": {
        "fct-descr": "\u003cp\u003eOpcode of the instruction\n\u003c/p\u003e",
        "fct-module": "Text.Disassembler.X86Disassembler",
        "fct-package": "disassembler",
        "fct-signature": "Opcode",
        "fct-source": "src/Text-Disassembler-X86Disassembler.html#Instruction",
        "fct-type": "function",
        "title": "opcode"
      },
      "index": {
        "description": "Opcode of the instruction",
        "hierarchy": "Text Disassembler X86Disassembler",
        "module": "Text.Disassembler.X86Disassembler",
        "name": "opcode",
        "normalized": "",
        "package": "disassembler",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/disassembler/docs/Text-Disassembler-X86Disassembler.html#v:operands",
      "description": {
        "fct-descr": "\u003cp\u003eInstruction operands\n\u003c/p\u003e",
        "fct-module": "Text.Disassembler.X86Disassembler",
        "fct-package": "disassembler",
        "fct-signature": "[Operand]",
        "fct-source": "src/Text-Disassembler-X86Disassembler.html#Instruction",
        "fct-type": "function",
        "title": "operands"
      },
      "index": {
        "description": "Instruction operands",
        "hierarchy": "Text Disassembler X86Disassembler",
        "module": "Text.Disassembler.X86Disassembler",
        "name": "operands",
        "normalized": "[Operand]",
        "package": "disassembler",
        "partial": "",
        "signature": "[Operand]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/disassembler/docs/Text-Disassembler-X86Disassembler.html#v:opsize",
      "description": {
        "fct-descr": "\u003cp\u003eOperand size, if any\n\u003c/p\u003e",
        "fct-module": "Text.Disassembler.X86Disassembler",
        "fct-package": "disassembler",
        "fct-signature": "InstrOperandSize",
        "fct-source": "src/Text-Disassembler-X86Disassembler.html#Instruction",
        "fct-type": "function",
        "title": "opsize"
      },
      "index": {
        "description": "Operand size if any",
        "hierarchy": "Text Disassembler X86Disassembler",
        "module": "Text.Disassembler.X86Disassembler",
        "name": "opsize",
        "normalized": "",
        "package": "disassembler",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/disassembler/docs/Text-Disassembler-X86Disassembler.html#v:showAtt",
      "description": {
        "fct-descr": "\u003cp\u003eShow an instruction in AT&T style.\n\u003c/p\u003e",
        "fct-module": "Text.Disassembler.X86Disassembler",
        "fct-package": "disassembler",
        "fct-signature": "Instruction -\u003e [Char]",
        "fct-source": "src/Text-Disassembler-X86Disassembler.html#showAtt",
        "fct-type": "function",
        "title": "showAtt"
      },
      "index": {
        "description": "Show an instruction in AT style",
        "hierarchy": "Text Disassembler X86Disassembler",
        "module": "Text.Disassembler.X86Disassembler",
        "name": "showAtt",
        "normalized": "Instruction-\u003e[Char]",
        "package": "disassembler",
        "partial": "Att",
        "signature": "Instruction-\u003e[Char]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/disassembler/docs/Text-Disassembler-X86Disassembler.html#v:showIntel",
      "description": {
        "fct-descr": "\u003cp\u003eShow an instruction in Intel style.\n\u003c/p\u003e",
        "fct-module": "Text.Disassembler.X86Disassembler",
        "fct-package": "disassembler",
        "fct-signature": "Instruction -\u003e [Char]",
        "fct-source": "src/Text-Disassembler-X86Disassembler.html#showIntel",
        "fct-type": "function",
        "title": "showIntel"
      },
      "index": {
        "description": "Show an instruction in Intel style",
        "hierarchy": "Text Disassembler X86Disassembler",
        "module": "Text.Disassembler.X86Disassembler",
        "name": "showIntel",
        "normalized": "Instruction-\u003e[Char]",
        "package": "disassembler",
        "partial": "Intel",
        "signature": "Instruction-\u003e[Char]"
      }
    }
  }
]