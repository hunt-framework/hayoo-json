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
        "word": "disassembler"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDisassembler for x86 machine code.\n\u003c/p\u003e\u003cp\u003eThis is a disassembler for object code for the x86 architecture.\n It provides functions for disassembling byte arrays, byte lists and\n memory blocks containing raw binary code.\n\u003c/p\u003e\u003cp\u003eFeatures:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Disassembles memory blocks, lists or arrays of bytes into lists of\n   instructions.\n\u003c/li\u003e\u003cli\u003e Abstract instructions provide as much information as possible about\n   opcodes, addressing modes or operand sizes, allowing for detailed\n   output.\n\u003c/li\u003e\u003cli\u003e Provides functions for displaying instructions in Intel or AT&T\n   style (like the GNU tools)\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eDifferences to GNU tools, like gdb or objdump:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Displacements are shown in decimal, with sign if negative.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eMissing: \n\u003c/p\u003e\u003cul\u003e\u003cli\u003e LOCK and repeat prefixes are recognized, but not contained in the\n   opcodes of instructions.\n\u003c/li\u003e\u003cli\u003e Support for 16-bit addressing modes.  Could be added when needed.\n\u003c/li\u003e\u003cli\u003e Complete disassembly of all 64-bit instructions.  I have tried to\n   disassemble them properly but have been limited to the information\n   in the docs, because I have no 64-bit machine to test on.  This will\n   probably change when I get GNU as to produce 64-bit object files.\n\u003c/li\u003e\u003cli\u003e Not all MMX and SSE\u003cem\u003eSSE2\u003c/em\u003eSSE3 instructions are decoded yet.  This is\n   just a matter of missing time.\n\u003c/li\u003e\u003cli\u003e segment override prefixes are decoded, but not appended to memory\n   references\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eOn the implementation:\n\u003c/p\u003e\u003cp\u003eThis disassembler uses the Parsec parser combinators, working on byte\n lists.  This proved to be very convenient, as the combinators keep\n track of the current position, etc.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.Disassembler.X86Disassembler",
          "name": "X86Disassembler",
          "package": "disassembler",
          "source": "src/Text-Disassembler-X86Disassembler.html",
          "type": "module"
        },
        "index": {
          "description": "Disassembler for x86 machine code This is disassembler for object code for the x86 architecture It provides functions for disassembling byte arrays byte lists and memory blocks containing raw binary code Features Disassembles memory blocks lists or arrays of bytes into lists of instructions Abstract instructions provide as much information as possible about opcodes addressing modes or operand sizes allowing for detailed output Provides functions for displaying instructions in Intel or AT style like the GNU tools Differences to GNU tools like gdb or objdump Displacements are shown in decimal with sign if negative Missing LOCK and repeat prefixes are recognized but not contained in the opcodes of instructions Support for bit addressing modes Could be added when needed Complete disassembly of all bit instructions have tried to disassemble them properly but have been limited to the information in the docs because have no bit machine to test on This will probably change when get GNU as to produce bit object files Not all MMX and SSE SSE2 SSE3 instructions are decoded yet This is just matter of missing time segment override prefixes are decoded but not appended to memory references On the implementation This disassembler uses the Parsec parser combinators working on byte lists This proved to be very convenient as the combinators keep track of the current position etc",
          "hierarchy": "Text Disassembler X86Disassembler",
          "module": "Text.Disassembler.X86Disassembler",
          "name": "X86Disassembler",
          "package": "disassembler",
          "partial": "Disassembler",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/disassembler/docs/Text-Disassembler-X86Disassembler.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Disassembler.X86Disassembler",
          "name": "Config",
          "package": "disassembler",
          "source": "src/Text-Disassembler-X86Disassembler.html#Config",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text Disassembler X86Disassembler",
          "module": "Text.Disassembler.X86Disassembler",
          "name": "Config",
          "package": "disassembler",
          "partial": "Config",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/disassembler/docs/Text-Disassembler-X86Disassembler.html#t:Config"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSome opcodes can operate on data of several widths.  This information\n is encoded in instructions using the following enumeration type..\n\u003c/p\u003e",
          "module": "Text.Disassembler.X86Disassembler",
          "name": "InstrOperandSize",
          "package": "disassembler",
          "source": "src/Text-Disassembler-X86Disassembler.html#InstrOperandSize",
          "type": "data"
        },
        "index": {
          "description": "Some opcodes can operate on data of several widths This information is encoded in instructions using the following enumeration type",
          "hierarchy": "Text Disassembler X86Disassembler",
          "module": "Text.Disassembler.X86Disassembler",
          "name": "InstrOperandSize",
          "package": "disassembler",
          "partial": "Instr Operand Size",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/disassembler/docs/Text-Disassembler-X86Disassembler.html#t:InstrOperandSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe disassembly routines return lists of the following datatype.  It\n encodes both invalid byte sequences (with a useful error message, if\n possible), or a valid instruction.  Both variants contain the list of\n opcode bytes from which the instruction was decoded and the address of\n the instruction.\n\u003c/p\u003e",
          "module": "Text.Disassembler.X86Disassembler",
          "name": "Instruction",
          "package": "disassembler",
          "source": "src/Text-Disassembler-X86Disassembler.html#Instruction",
          "type": "data"
        },
        "index": {
          "description": "The disassembly routines return lists of the following datatype It encodes both invalid byte sequences with useful error message if possible or valid instruction Both variants contain the list of opcode bytes from which the instruction was decoded and the address of the instruction",
          "hierarchy": "Text Disassembler X86Disassembler",
          "module": "Text.Disassembler.X86Disassembler",
          "name": "Instruction",
          "package": "disassembler",
          "partial": "Instruction",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/disassembler/docs/Text-Disassembler-X86Disassembler.html#t:Instruction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll opcodes are represented by this enumeration type.\n\u003c/p\u003e",
          "module": "Text.Disassembler.X86Disassembler",
          "name": "Opcode",
          "package": "disassembler",
          "source": "src/Text-Disassembler-X86Disassembler.html#Opcode",
          "type": "data"
        },
        "index": {
          "description": "All opcodes are represented by this enumeration type",
          "hierarchy": "Text Disassembler X86Disassembler",
          "module": "Text.Disassembler.X86Disassembler",
          "name": "Opcode",
          "package": "disassembler",
          "partial": "Opcode",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/disassembler/docs/Text-Disassembler-X86Disassembler.html#t:Opcode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll operands are in one of the following locations:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Constants in the instruction stream\n\u003c/li\u003e\u003cli\u003e Memory locations\n\u003c/li\u003e\u003cli\u003e Registers\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eMemory locations are referred to by on of several addressing modes:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Absolute (address in instruction stream)\n\u003c/li\u003e\u003cli\u003e Register-indirect (address in register)\n\u003c/li\u003e\u003cli\u003e Register-indirect with displacement\n\u003c/li\u003e\u003cli\u003e Base-Index with scale\n\u003c/li\u003e\u003cli\u003e Base-Index with scale and displacement \n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eDisplacements can be encoded as 8 or 32-bit immediates in the\n instruction stream, but are encoded as Int in instructions for\n simplicity.\n\u003c/p\u003e",
          "module": "Text.Disassembler.X86Disassembler",
          "name": "Operand",
          "package": "disassembler",
          "source": "src/Text-Disassembler-X86Disassembler.html#Operand",
          "type": "data"
        },
        "index": {
          "description": "All operands are in one of the following locations Constants in the instruction stream Memory locations Registers Memory locations are referred to by on of several addressing modes Absolute address in instruction stream Register-indirect address in register Register-indirect with displacement Base-Index with scale Base-Index with scale and displacement Displacements can be encoded as or bit immediates in the instruction stream but are encoded as Int in instructions for simplicity",
          "hierarchy": "Text Disassembler X86Disassembler",
          "module": "Text.Disassembler.X86Disassembler",
          "name": "Operand",
          "package": "disassembler",
          "partial": "Operand",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/disassembler/docs/Text-Disassembler-X86Disassembler.html#t:Operand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInstructions can be displayed either in Intel or AT&T style (like in\n GNU tools).\n\u003c/p\u003e\u003cp\u003eIntel style:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Destination operand comes first, source second.\n\u003c/li\u003e\u003cli\u003e No register or immediate prefixes.\n\u003c/li\u003e\u003cli\u003e Memory operands are annotated with operand size.\n\u003c/li\u003e\u003cli\u003e Hexadecimal numbers are suffixed with \u003ccode\u003eH\u003c/code\u003e and prefixed with \u003ccode\u003e0\u003c/code\u003e if\n   necessary.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eAT&T style:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Source operand comes first, destination second.\n\u003c/li\u003e\u003cli\u003e Register names are prefixes with \u003ccode\u003e%\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e Immediates are prefixed with \u003ccode\u003e$\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e Hexadecimal numbers are prefixes with \u003ccode\u003e0x\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e Opcodes are suffixed with operand size, when ambiguous otherwise.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Text.Disassembler.X86Disassembler",
          "name": "ShowStyle",
          "package": "disassembler",
          "source": "src/Text-Disassembler-X86Disassembler.html#ShowStyle",
          "type": "data"
        },
        "index": {
          "description": "Instructions can be displayed either in Intel or AT style like in GNU tools Intel style Destination operand comes first source second No register or immediate prefixes Memory operands are annotated with operand size Hexadecimal numbers are suffixed with and prefixed with if necessary AT style Source operand comes first destination second Register names are prefixes with Immediates are prefixed with Hexadecimal numbers are prefixes with Opcodes are suffixed with operand size when ambiguous otherwise",
          "hierarchy": "Text Disassembler X86Disassembler",
          "module": "Text.Disassembler.X86Disassembler",
          "name": "ShowStyle",
          "package": "disassembler",
          "partial": "Show Style",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/disassembler/docs/Text-Disassembler-X86Disassembler.html#t:ShowStyle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShow in AT&T style\n\u003c/p\u003e",
          "module": "Text.Disassembler.X86Disassembler",
          "name": "AttStyle",
          "package": "disassembler",
          "signature": "AttStyle",
          "source": "src/Text-Disassembler-X86Disassembler.html#ShowStyle",
          "type": "function"
        },
        "index": {
          "description": "Show in AT style",
          "hierarchy": "Text Disassembler X86Disassembler",
          "module": "Text.Disassembler.X86Disassembler",
          "name": "AttStyle",
          "package": "disassembler",
          "partial": "Att Style",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/disassembler/docs/Text-Disassembler-X86Disassembler.html#v:AttStyle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInvalid instruction\n\u003c/p\u003e",
          "module": "Text.Disassembler.X86Disassembler",
          "name": "BadInstruction",
          "package": "disassembler",
          "signature": "BadInstruction Word8 String Int [Word8]",
          "source": "src/Text-Disassembler-X86Disassembler.html#Instruction",
          "type": "function"
        },
        "index": {
          "description": "Invalid instruction",
          "hierarchy": "Text Disassembler X86Disassembler",
          "module": "Text.Disassembler.X86Disassembler",
          "name": "BadInstruction",
          "normalized": "BadInstruction Word String Int[Word]",
          "package": "disassembler",
          "partial": "Bad Instruction",
          "signature": "BadInstruction Word String Int[Word]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/disassembler/docs/Text-Disassembler-X86Disassembler.html#v:BadInstruction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Disassembler.X86Disassembler",
          "name": "Config",
          "package": "disassembler",
          "signature": "Config",
          "source": "src/Text-Disassembler-X86Disassembler.html#Config",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Disassembler X86Disassembler",
          "module": "Text.Disassembler.X86Disassembler",
          "name": "Config",
          "package": "disassembler",
          "partial": "Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/disassembler/docs/Text-Disassembler-X86Disassembler.html#v:Config"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eValid instruction\n\u003c/p\u003e",
          "module": "Text.Disassembler.X86Disassembler",
          "name": "Instruction",
          "package": "disassembler",
          "signature": "Instruction",
          "source": "src/Text-Disassembler-X86Disassembler.html#Instruction",
          "type": "function"
        },
        "index": {
          "description": "Valid instruction",
          "hierarchy": "Text Disassembler X86Disassembler",
          "module": "Text.Disassembler.X86Disassembler",
          "name": "Instruction",
          "package": "disassembler",
          "partial": "Instruction",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/disassembler/docs/Text-Disassembler-X86Disassembler.html#v:Instruction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShow in Intel style\n\u003c/p\u003e",
          "module": "Text.Disassembler.X86Disassembler",
          "name": "IntelStyle",
          "package": "disassembler",
          "signature": "IntelStyle",
          "source": "src/Text-Disassembler-X86Disassembler.html#ShowStyle",
          "type": "function"
        },
        "index": {
          "description": "Show in Intel style",
          "hierarchy": "Text Disassembler X86Disassembler",
          "module": "Text.Disassembler.X86Disassembler",
          "name": "IntelStyle",
          "package": "disassembler",
          "partial": "Intel Style",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/disassembler/docs/Text-Disassembler-X86Disassembler.html#v:IntelStyle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e128-bit integer operand\n\u003c/p\u003e",
          "module": "Text.Disassembler.X86Disassembler",
          "name": "OP128",
          "package": "disassembler",
          "signature": "OP128",
          "source": "src/Text-Disassembler-X86Disassembler.html#InstrOperandSize",
          "type": "function"
        },
        "index": {
          "description": "bit integer operand",
          "hierarchy": "Text Disassembler X86Disassembler",
          "module": "Text.Disassembler.X86Disassembler",
          "name": "OP128",
          "package": "disassembler",
          "partial": "OP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/disassembler/docs/Text-Disassembler-X86Disassembler.html#v:OP128"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e16-bit integer operand\n\u003c/p\u003e",
          "module": "Text.Disassembler.X86Disassembler",
          "name": "OP16",
          "package": "disassembler",
          "signature": "OP16",
          "source": "src/Text-Disassembler-X86Disassembler.html#InstrOperandSize",
          "type": "function"
        },
        "index": {
          "description": "bit integer operand",
          "hierarchy": "Text Disassembler X86Disassembler",
          "module": "Text.Disassembler.X86Disassembler",
          "name": "OP16",
          "package": "disassembler",
          "partial": "OP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/disassembler/docs/Text-Disassembler-X86Disassembler.html#v:OP16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e32-bit integer operand\n\u003c/p\u003e",
          "module": "Text.Disassembler.X86Disassembler",
          "name": "OP32",
          "package": "disassembler",
          "signature": "OP32",
          "source": "src/Text-Disassembler-X86Disassembler.html#InstrOperandSize",
          "type": "function"
        },
        "index": {
          "description": "bit integer operand",
          "hierarchy": "Text Disassembler X86Disassembler",
          "module": "Text.Disassembler.X86Disassembler",
          "name": "OP32",
          "package": "disassembler",
          "partial": "OP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/disassembler/docs/Text-Disassembler-X86Disassembler.html#v:OP32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e64-bit integer operand\n\u003c/p\u003e",
          "module": "Text.Disassembler.X86Disassembler",
          "name": "OP64",
          "package": "disassembler",
          "signature": "OP64",
          "source": "src/Text-Disassembler-X86Disassembler.html#InstrOperandSize",
          "type": "function"
        },
        "index": {
          "description": "bit integer operand",
          "hierarchy": "Text Disassembler X86Disassembler",
          "module": "Text.Disassembler.X86Disassembler",
          "name": "OP64",
          "package": "disassembler",
          "partial": "OP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/disassembler/docs/Text-Disassembler-X86Disassembler.html#v:OP64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e8-bit integer operand\n\u003c/p\u003e",
          "module": "Text.Disassembler.X86Disassembler",
          "name": "OP8",
          "package": "disassembler",
          "signature": "OP8",
          "source": "src/Text-Disassembler-X86Disassembler.html#InstrOperandSize",
          "type": "function"
        },
        "index": {
          "description": "bit integer operand",
          "hierarchy": "Text Disassembler X86Disassembler",
          "module": "Text.Disassembler.X86Disassembler",
          "name": "OP8",
          "package": "disassembler",
          "partial": "OP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/disassembler/docs/Text-Disassembler-X86Disassembler.html#v:OP8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e32-bit floating point operand\n\u003c/p\u003e",
          "module": "Text.Disassembler.X86Disassembler",
          "name": "OPF32",
          "package": "disassembler",
          "signature": "OPF32",
          "source": "src/Text-Disassembler-X86Disassembler.html#InstrOperandSize",
          "type": "function"
        },
        "index": {
          "description": "bit floating point operand",
          "hierarchy": "Text Disassembler X86Disassembler",
          "module": "Text.Disassembler.X86Disassembler",
          "name": "OPF32",
          "package": "disassembler",
          "partial": "OPF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/disassembler/docs/Text-Disassembler-X86Disassembler.html#v:OPF32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e64-bit floating point operand\n\u003c/p\u003e",
          "module": "Text.Disassembler.X86Disassembler",
          "name": "OPF64",
          "package": "disassembler",
          "signature": "OPF64",
          "source": "src/Text-Disassembler-X86Disassembler.html#InstrOperandSize",
          "type": "function"
        },
        "index": {
          "description": "bit floating point operand",
          "hierarchy": "Text Disassembler X86Disassembler",
          "module": "Text.Disassembler.X86Disassembler",
          "name": "OPF64",
          "package": "disassembler",
          "partial": "OPF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/disassembler/docs/Text-Disassembler-X86Disassembler.html#v:OPF64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e80-bit floating point operand\n\u003c/p\u003e",
          "module": "Text.Disassembler.X86Disassembler",
          "name": "OPF80",
          "package": "disassembler",
          "signature": "OPF80",
          "source": "src/Text-Disassembler-X86Disassembler.html#InstrOperandSize",
          "type": "function"
        },
        "index": {
          "description": "bit floating point operand",
          "hierarchy": "Text Disassembler X86Disassembler",
          "module": "Text.Disassembler.X86Disassembler",
          "name": "OPF80",
          "package": "disassembler",
          "partial": "OPF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/disassembler/docs/Text-Disassembler-X86Disassembler.html#v:OPF80"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNo operand size specified\n\u003c/p\u003e",
          "module": "Text.Disassembler.X86Disassembler",
          "name": "OPNONE",
          "package": "disassembler",
          "signature": "OPNONE",
          "source": "src/Text-Disassembler-X86Disassembler.html#InstrOperandSize",
          "type": "function"
        },
        "index": {
          "description": "No operand size specified",
          "hierarchy": "Text Disassembler X86Disassembler",
          "module": "Text.Disassembler.X86Disassembler",
          "name": "OPNONE",
          "package": "disassembler",
          "partial": "OPNONE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/disassembler/docs/Text-Disassembler-X86Disassembler.html#v:OPNONE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAbsolute address\n\u003c/p\u003e",
          "module": "Text.Disassembler.X86Disassembler",
          "name": "OpAddr",
          "package": "disassembler",
          "signature": "OpAddr Word32 InstrOperandSize",
          "source": "src/Text-Disassembler-X86Disassembler.html#Operand",
          "type": "function"
        },
        "index": {
          "description": "Absolute address",
          "hierarchy": "Text Disassembler X86Disassembler",
          "module": "Text.Disassembler.X86Disassembler",
          "name": "OpAddr",
          "package": "disassembler",
          "partial": "Op Addr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/disassembler/docs/Text-Disassembler-X86Disassembler.html#v:OpAddr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBase plus scaled index\n\u003c/p\u003e",
          "module": "Text.Disassembler.X86Disassembler",
          "name": "OpBaseIndex",
          "package": "disassembler",
          "signature": "OpBaseIndex String String Int InstrOperandSize",
          "source": "src/Text-Disassembler-X86Disassembler.html#Operand",
          "type": "function"
        },
        "index": {
          "description": "Base plus scaled index",
          "hierarchy": "Text Disassembler X86Disassembler",
          "module": "Text.Disassembler.X86Disassembler",
          "name": "OpBaseIndex",
          "package": "disassembler",
          "partial": "Op Base Index",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/disassembler/docs/Text-Disassembler-X86Disassembler.html#v:OpBaseIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBase plus scaled index with displacement\n\u003c/p\u003e",
          "module": "Text.Disassembler.X86Disassembler",
          "name": "OpBaseIndexDisp",
          "package": "disassembler",
          "signature": "OpBaseIndexDisp String String Int Int InstrOperandSize",
          "source": "src/Text-Disassembler-X86Disassembler.html#Operand",
          "type": "function"
        },
        "index": {
          "description": "Base plus scaled index with displacement",
          "hierarchy": "Text Disassembler X86Disassembler",
          "module": "Text.Disassembler.X86Disassembler",
          "name": "OpBaseIndexDisp",
          "package": "disassembler",
          "partial": "Op Base Index Disp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/disassembler/docs/Text-Disassembler-X86Disassembler.html#v:OpBaseIndexDisp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFloating-point register\n\u003c/p\u003e",
          "module": "Text.Disassembler.X86Disassembler",
          "name": "OpFPReg",
          "package": "disassembler",
          "signature": "OpFPReg Int",
          "source": "src/Text-Disassembler-X86Disassembler.html#Operand",
          "type": "function"
        },
        "index": {
          "description": "Floating-point register",
          "hierarchy": "Text Disassembler X86Disassembler",
          "module": "Text.Disassembler.X86Disassembler",
          "name": "OpFPReg",
          "package": "disassembler",
          "partial": "Op FPReg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/disassembler/docs/Text-Disassembler-X86Disassembler.html#v:OpFPReg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eImmediate value\n\u003c/p\u003e",
          "module": "Text.Disassembler.X86Disassembler",
          "name": "OpImm",
          "package": "disassembler",
          "signature": "OpImm Word32",
          "source": "src/Text-Disassembler-X86Disassembler.html#Operand",
          "type": "function"
        },
        "index": {
          "description": "Immediate value",
          "hierarchy": "Text Disassembler X86Disassembler",
          "module": "Text.Disassembler.X86Disassembler",
          "name": "OpImm",
          "package": "disassembler",
          "partial": "Op Imm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/disassembler/docs/Text-Disassembler-X86Disassembler.html#v:OpImm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRegister-indirect\n\u003c/p\u003e",
          "module": "Text.Disassembler.X86Disassembler",
          "name": "OpInd",
          "package": "disassembler",
          "signature": "OpInd String InstrOperandSize",
          "source": "src/Text-Disassembler-X86Disassembler.html#Operand",
          "type": "function"
        },
        "index": {
          "description": "Register-indirect",
          "hierarchy": "Text Disassembler X86Disassembler",
          "module": "Text.Disassembler.X86Disassembler",
          "name": "OpInd",
          "package": "disassembler",
          "partial": "Op Ind",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/disassembler/docs/Text-Disassembler-X86Disassembler.html#v:OpInd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRegister-indirect with displacement\n\u003c/p\u003e",
          "module": "Text.Disassembler.X86Disassembler",
          "name": "OpIndDisp",
          "package": "disassembler",
          "signature": "OpIndDisp String Int InstrOperandSize",
          "source": "src/Text-Disassembler-X86Disassembler.html#Operand",
          "type": "function"
        },
        "index": {
          "description": "Register-indirect with displacement",
          "hierarchy": "Text Disassembler X86Disassembler",
          "module": "Text.Disassembler.X86Disassembler",
          "name": "OpIndDisp",
          "package": "disassembler",
          "partial": "Op Ind Disp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/disassembler/docs/Text-Disassembler-X86Disassembler.html#v:OpIndDisp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eScaled index with displacement\n\u003c/p\u003e",
          "module": "Text.Disassembler.X86Disassembler",
          "name": "OpIndexDisp",
          "package": "disassembler",
          "signature": "OpIndexDisp String Int Int InstrOperandSize",
          "source": "src/Text-Disassembler-X86Disassembler.html#Operand",
          "type": "function"
        },
        "index": {
          "description": "Scaled index with displacement",
          "hierarchy": "Text Disassembler X86Disassembler",
          "module": "Text.Disassembler.X86Disassembler",
          "name": "OpIndexDisp",
          "package": "disassembler",
          "partial": "Op Index Disp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/disassembler/docs/Text-Disassembler-X86Disassembler.html#v:OpIndexDisp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRegister\n\u003c/p\u003e",
          "module": "Text.Disassembler.X86Disassembler",
          "name": "OpReg",
          "package": "disassembler",
          "signature": "OpReg String Int",
          "source": "src/Text-Disassembler-X86Disassembler.html#Operand",
          "type": "function"
        },
        "index": {
          "description": "Register",
          "hierarchy": "Text Disassembler X86Disassembler",
          "module": "Text.Disassembler.X86Disassembler",
          "name": "OpReg",
          "package": "disassembler",
          "partial": "Op Reg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/disassembler/docs/Text-Disassembler-X86Disassembler.html#v:OpReg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePseudo instruction, e.g. label\n\u003c/p\u003e",
          "module": "Text.Disassembler.X86Disassembler",
          "name": "PseudoInstruction",
          "package": "disassembler",
          "signature": "PseudoInstruction Int String",
          "source": "src/Text-Disassembler-X86Disassembler.html#Instruction",
          "type": "function"
        },
        "index": {
          "description": "Pseudo instruction e.g label",
          "hierarchy": "Text Disassembler X86Disassembler",
          "module": "Text.Disassembler.X86Disassembler",
          "name": "PseudoInstruction",
          "package": "disassembler",
          "partial": "Pseudo Instruction",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/disassembler/docs/Text-Disassembler-X86Disassembler.html#v:PseudoInstruction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStart address of instruction\n\u003c/p\u003e",
          "module": "Text.Disassembler.X86Disassembler",
          "name": "address",
          "package": "disassembler",
          "signature": "Int",
          "source": "src/Text-Disassembler-X86Disassembler.html#Instruction",
          "type": "function"
        },
        "index": {
          "description": "Start address of instruction",
          "hierarchy": "Text Disassembler X86Disassembler",
          "module": "Text.Disassembler.X86Disassembler",
          "name": "address",
          "package": "disassembler",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/disassembler/docs/Text-Disassembler-X86Disassembler.html#v:address"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInstruction bytes\n\u003c/p\u003e",
          "module": "Text.Disassembler.X86Disassembler",
          "name": "bytes",
          "package": "disassembler",
          "signature": "[Word8]",
          "source": "src/Text-Disassembler-X86Disassembler.html#Instruction",
          "type": "function"
        },
        "index": {
          "description": "Instruction bytes",
          "hierarchy": "Text Disassembler X86Disassembler",
          "module": "Text.Disassembler.X86Disassembler",
          "name": "bytes",
          "normalized": "[Word]",
          "package": "disassembler",
          "signature": "[Word]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/disassembler/docs/Text-Disassembler-X86Disassembler.html#v:bytes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Disassembler.X86Disassembler",
          "name": "confAddressBitMode",
          "package": "disassembler",
          "signature": "OperandSize",
          "source": "src/Text-Disassembler-X86Disassembler.html#Config",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Disassembler X86Disassembler",
          "module": "Text.Disassembler.X86Disassembler",
          "name": "confAddressBitMode",
          "package": "disassembler",
          "partial": "Address Bit Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/disassembler/docs/Text-Disassembler-X86Disassembler.html#v:confAddressBitMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Disassembler.X86Disassembler",
          "name": "confDefaultBitMode",
          "package": "disassembler",
          "signature": "OperandSize",
          "source": "src/Text-Disassembler-X86Disassembler.html#Config",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Disassembler X86Disassembler",
          "module": "Text.Disassembler.X86Disassembler",
          "name": "confDefaultBitMode",
          "package": "disassembler",
          "partial": "Default Bit Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/disassembler/docs/Text-Disassembler-X86Disassembler.html#v:confDefaultBitMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Disassembler.X86Disassembler",
          "name": "confIn64BitMode",
          "package": "disassembler",
          "signature": "Bool",
          "source": "src/Text-Disassembler-X86Disassembler.html#Config",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Disassembler X86Disassembler",
          "module": "Text.Disassembler.X86Disassembler",
          "name": "confIn64BitMode",
          "package": "disassembler",
          "partial": "In Bit Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/disassembler/docs/Text-Disassembler-X86Disassembler.html#v:confIn64BitMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Disassembler.X86Disassembler",
          "name": "confOperandBitMode",
          "package": "disassembler",
          "signature": "OperandSize",
          "source": "src/Text-Disassembler-X86Disassembler.html#Config",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Disassembler X86Disassembler",
          "module": "Text.Disassembler.X86Disassembler",
          "name": "confOperandBitMode",
          "package": "disassembler",
          "partial": "Operand Bit Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/disassembler/docs/Text-Disassembler-X86Disassembler.html#v:confOperandBitMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Disassembler.X86Disassembler",
          "name": "confStartAddr",
          "package": "disassembler",
          "signature": "Word32",
          "source": "src/Text-Disassembler-X86Disassembler.html#Config",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Disassembler X86Disassembler",
          "module": "Text.Disassembler.X86Disassembler",
          "name": "confStartAddr",
          "package": "disassembler",
          "partial": "Start Addr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/disassembler/docs/Text-Disassembler-X86Disassembler.html#v:confStartAddr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Disassembler.X86Disassembler",
          "name": "defaultConfig",
          "package": "disassembler",
          "signature": "Config",
          "source": "src/Text-Disassembler-X86Disassembler.html#defaultConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Disassembler X86Disassembler",
          "module": "Text.Disassembler.X86Disassembler",
          "name": "defaultConfig",
          "package": "disassembler",
          "partial": "Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/disassembler/docs/Text-Disassembler-X86Disassembler.html#v:defaultConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDisassemble the contents of the given array.\n\u003c/p\u003e",
          "module": "Text.Disassembler.X86Disassembler",
          "name": "disassembleArray",
          "package": "disassembler",
          "signature": "a i Word8 -\u003e m (Either ParseError [Instruction])",
          "source": "src/Text-Disassembler-X86Disassembler.html#disassembleArray",
          "type": "function"
        },
        "index": {
          "description": "Disassemble the contents of the given array",
          "hierarchy": "Text Disassembler X86Disassembler",
          "module": "Text.Disassembler.X86Disassembler",
          "name": "disassembleArray",
          "normalized": "a b Word-\u003ec(Either ParseError[Instruction])",
          "package": "disassembler",
          "partial": "Array",
          "signature": "a i Word-\u003em(Either ParseError[Instruction])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/disassembler/docs/Text-Disassembler-X86Disassembler.html#v:disassembleArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Disassembler.X86Disassembler",
          "name": "disassembleArrayWithConfig",
          "package": "disassembler",
          "signature": "Config -\u003e a i Word8 -\u003e m (Either ParseError [Instruction])",
          "source": "src/Text-Disassembler-X86Disassembler.html#disassembleArrayWithConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Disassembler X86Disassembler",
          "module": "Text.Disassembler.X86Disassembler",
          "name": "disassembleArrayWithConfig",
          "normalized": "Config-\u003ea b Word-\u003ec(Either ParseError[Instruction])",
          "package": "disassembler",
          "partial": "Array With Config",
          "signature": "Config-\u003ea i Word-\u003em(Either ParseError[Instruction])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/disassembler/docs/Text-Disassembler-X86Disassembler.html#v:disassembleArrayWithConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDisassemble a block of memory.  Starting at the location\n pointed to by the given pointer, the given number of bytes are\n disassembled.\n\u003c/p\u003e",
          "module": "Text.Disassembler.X86Disassembler",
          "name": "disassembleBlock",
          "package": "disassembler",
          "signature": "Ptr Word8 -\u003e Int -\u003e IO (Either ParseError [Instruction])",
          "source": "src/Text-Disassembler-X86Disassembler.html#disassembleBlock",
          "type": "function"
        },
        "index": {
          "description": "Disassemble block of memory Starting at the location pointed to by the given pointer the given number of bytes are disassembled",
          "hierarchy": "Text Disassembler X86Disassembler",
          "module": "Text.Disassembler.X86Disassembler",
          "name": "disassembleBlock",
          "normalized": "Ptr Word-\u003eInt-\u003eIO(Either ParseError[Instruction])",
          "package": "disassembler",
          "partial": "Block",
          "signature": "Ptr Word-\u003eInt-\u003eIO(Either ParseError[Instruction])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/disassembler/docs/Text-Disassembler-X86Disassembler.html#v:disassembleBlock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Disassembler.X86Disassembler",
          "name": "disassembleBlockWithConfig",
          "package": "disassembler",
          "signature": "Config -\u003e Ptr Word8 -\u003e Int -\u003e IO (Either ParseError [Instruction])",
          "source": "src/Text-Disassembler-X86Disassembler.html#disassembleBlockWithConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Disassembler X86Disassembler",
          "module": "Text.Disassembler.X86Disassembler",
          "name": "disassembleBlockWithConfig",
          "normalized": "Config-\u003ePtr Word-\u003eInt-\u003eIO(Either ParseError[Instruction])",
          "package": "disassembler",
          "partial": "Block With Config",
          "signature": "Config-\u003ePtr Word-\u003eInt-\u003eIO(Either ParseError[Instruction])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/disassembler/docs/Text-Disassembler-X86Disassembler.html#v:disassembleBlockWithConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Disassembler.X86Disassembler",
          "name": "disassembleFile",
          "package": "disassembler",
          "signature": "FilePath -\u003e IO (Either ParseError [Instruction])",
          "source": "src/Text-Disassembler-X86Disassembler.html#disassembleFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Disassembler X86Disassembler",
          "module": "Text.Disassembler.X86Disassembler",
          "name": "disassembleFile",
          "normalized": "FilePath-\u003eIO(Either ParseError[Instruction])",
          "package": "disassembler",
          "partial": "File",
          "signature": "FilePath-\u003eIO(Either ParseError[Instruction])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/disassembler/docs/Text-Disassembler-X86Disassembler.html#v:disassembleFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Disassembler.X86Disassembler",
          "name": "disassembleFileWithConfig",
          "package": "disassembler",
          "signature": "Config -\u003e FilePath -\u003e IO (Either ParseError [Instruction])",
          "source": "src/Text-Disassembler-X86Disassembler.html#disassembleFileWithConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Disassembler X86Disassembler",
          "module": "Text.Disassembler.X86Disassembler",
          "name": "disassembleFileWithConfig",
          "normalized": "Config-\u003eFilePath-\u003eIO(Either ParseError[Instruction])",
          "package": "disassembler",
          "partial": "File With Config",
          "signature": "Config-\u003eFilePath-\u003eIO(Either ParseError[Instruction])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/disassembler/docs/Text-Disassembler-X86Disassembler.html#v:disassembleFileWithConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDisassemble the contents of the given list.\n\u003c/p\u003e",
          "module": "Text.Disassembler.X86Disassembler",
          "name": "disassembleList",
          "package": "disassembler",
          "signature": "[Word8] -\u003e m (Either ParseError [Instruction])",
          "source": "src/Text-Disassembler-X86Disassembler.html#disassembleList",
          "type": "function"
        },
        "index": {
          "description": "Disassemble the contents of the given list",
          "hierarchy": "Text Disassembler X86Disassembler",
          "module": "Text.Disassembler.X86Disassembler",
          "name": "disassembleList",
          "normalized": "[Word]-\u003ea(Either ParseError[Instruction])",
          "package": "disassembler",
          "partial": "List",
          "signature": "[Word]-\u003em(Either ParseError[Instruction])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/disassembler/docs/Text-Disassembler-X86Disassembler.html#v:disassembleList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Disassembler.X86Disassembler",
          "name": "disassembleListWithConfig",
          "package": "disassembler",
          "signature": "Config -\u003e [Word8] -\u003e m (Either ParseError [Instruction])",
          "source": "src/Text-Disassembler-X86Disassembler.html#disassembleListWithConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Disassembler X86Disassembler",
          "module": "Text.Disassembler.X86Disassembler",
          "name": "disassembleListWithConfig",
          "normalized": "Config-\u003e[Word]-\u003ea(Either ParseError[Instruction])",
          "package": "disassembler",
          "partial": "List With Config",
          "signature": "Config-\u003e[Word]-\u003em(Either ParseError[Instruction])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/disassembler/docs/Text-Disassembler-X86Disassembler.html#v:disassembleListWithConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOpcode of the instruction\n\u003c/p\u003e",
          "module": "Text.Disassembler.X86Disassembler",
          "name": "opcode",
          "package": "disassembler",
          "signature": "Opcode",
          "source": "src/Text-Disassembler-X86Disassembler.html#Instruction",
          "type": "function"
        },
        "index": {
          "description": "Opcode of the instruction",
          "hierarchy": "Text Disassembler X86Disassembler",
          "module": "Text.Disassembler.X86Disassembler",
          "name": "opcode",
          "package": "disassembler",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/disassembler/docs/Text-Disassembler-X86Disassembler.html#v:opcode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInstruction operands\n\u003c/p\u003e",
          "module": "Text.Disassembler.X86Disassembler",
          "name": "operands",
          "package": "disassembler",
          "signature": "[Operand]",
          "source": "src/Text-Disassembler-X86Disassembler.html#Instruction",
          "type": "function"
        },
        "index": {
          "description": "Instruction operands",
          "hierarchy": "Text Disassembler X86Disassembler",
          "module": "Text.Disassembler.X86Disassembler",
          "name": "operands",
          "normalized": "[Operand]",
          "package": "disassembler",
          "signature": "[Operand]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/disassembler/docs/Text-Disassembler-X86Disassembler.html#v:operands"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOperand size, if any\n\u003c/p\u003e",
          "module": "Text.Disassembler.X86Disassembler",
          "name": "opsize",
          "package": "disassembler",
          "signature": "InstrOperandSize",
          "source": "src/Text-Disassembler-X86Disassembler.html#Instruction",
          "type": "function"
        },
        "index": {
          "description": "Operand size if any",
          "hierarchy": "Text Disassembler X86Disassembler",
          "module": "Text.Disassembler.X86Disassembler",
          "name": "opsize",
          "package": "disassembler",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/disassembler/docs/Text-Disassembler-X86Disassembler.html#v:opsize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShow an instruction in AT&T style.\n\u003c/p\u003e",
          "module": "Text.Disassembler.X86Disassembler",
          "name": "showAtt",
          "package": "disassembler",
          "signature": "Instruction -\u003e [Char]",
          "source": "src/Text-Disassembler-X86Disassembler.html#showAtt",
          "type": "function"
        },
        "index": {
          "description": "Show an instruction in AT style",
          "hierarchy": "Text Disassembler X86Disassembler",
          "module": "Text.Disassembler.X86Disassembler",
          "name": "showAtt",
          "normalized": "Instruction-\u003e[Char]",
          "package": "disassembler",
          "partial": "Att",
          "signature": "Instruction-\u003e[Char]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/disassembler/docs/Text-Disassembler-X86Disassembler.html#v:showAtt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShow an instruction in Intel style.\n\u003c/p\u003e",
          "module": "Text.Disassembler.X86Disassembler",
          "name": "showIntel",
          "package": "disassembler",
          "signature": "Instruction -\u003e [Char]",
          "source": "src/Text-Disassembler-X86Disassembler.html#showIntel",
          "type": "function"
        },
        "index": {
          "description": "Show an instruction in Intel style",
          "hierarchy": "Text Disassembler X86Disassembler",
          "module": "Text.Disassembler.X86Disassembler",
          "name": "showIntel",
          "normalized": "Instruction-\u003e[Char]",
          "package": "disassembler",
          "partial": "Intel",
          "signature": "Instruction-\u003e[Char]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/disassembler/docs/Text-Disassembler-X86Disassembler.html#v:showIntel"
      }
    }
  ]
]