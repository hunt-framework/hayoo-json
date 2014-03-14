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
        "word": "brainfuck"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Brainfuck.Examples",
          "name": "Examples",
          "package": "brainfuck",
          "source": "src/Language-Brainfuck-Examples.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Language Brainfuck Examples",
          "module": "Language.Brainfuck.Examples",
          "name": "Examples",
          "package": "brainfuck",
          "partial": "Examples",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/brainfuck/docs/Language-Brainfuck-Examples.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Brainfuck.Examples",
          "name": "bottles",
          "package": "brainfuck",
          "signature": "String",
          "source": "src/Language-Brainfuck-Examples.html#bottles",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Brainfuck Examples",
          "module": "Language.Brainfuck.Examples",
          "name": "bottles",
          "package": "brainfuck",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/brainfuck/docs/Language-Brainfuck-Examples.html#v:bottles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Brainfuck.Examples",
          "name": "helloWorld",
          "package": "brainfuck",
          "signature": "String",
          "source": "src/Language-Brainfuck-Examples.html#helloWorld",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Brainfuck Examples",
          "module": "Language.Brainfuck.Examples",
          "name": "helloWorld",
          "package": "brainfuck",
          "partial": "World",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/brainfuck/docs/Language-Brainfuck-Examples.html#v:helloWorld"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Brainfuck.Examples",
          "name": "helloum",
          "package": "brainfuck",
          "signature": "String",
          "source": "src/Language-Brainfuck-Examples.html#helloum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Brainfuck Examples",
          "module": "Language.Brainfuck.Examples",
          "name": "helloum",
          "package": "brainfuck",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/brainfuck/docs/Language-Brainfuck-Examples.html#v:helloum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Brainfuck.Examples",
          "name": "sort",
          "package": "brainfuck",
          "signature": "String",
          "source": "src/Language-Brainfuck-Examples.html#sort",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Brainfuck Examples",
          "module": "Language.Brainfuck.Examples",
          "name": "sort",
          "package": "brainfuck",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/brainfuck/docs/Language-Brainfuck-Examples.html#v:sort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Brainfuck.Examples",
          "name": "toupper",
          "package": "brainfuck",
          "signature": "String",
          "source": "src/Language-Brainfuck-Examples.html#toupper",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Brainfuck Examples",
          "module": "Language.Brainfuck.Examples",
          "name": "toupper",
          "package": "brainfuck",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/brainfuck/docs/Language-Brainfuck-Examples.html#v:toupper"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Brainfuck",
          "name": "Brainfuck",
          "package": "brainfuck",
          "source": "src/Language-Brainfuck.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Language Brainfuck",
          "module": "Language.Brainfuck",
          "name": "Brainfuck",
          "package": "brainfuck",
          "partial": "Brainfuck",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/brainfuck/docs/Language-Brainfuck.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Brainfuck",
          "name": "BF",
          "package": "brainfuck",
          "source": "src/Language-Brainfuck.html#BF",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language Brainfuck",
          "module": "Language.Brainfuck",
          "name": "BF",
          "package": "brainfuck",
          "partial": "BF",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/brainfuck/docs/Language-Brainfuck.html#t:BF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe complete BF language:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003e    Increment the pointer.\n* \u003c    Decrement the pointer.\n* +     Increment the byte at the pointer.\n* -    Decrement the byte at the pointer.\n* .     Output the byte at the pointer.\n* ,     Input a byte and store it in the byte at the pointer.\n* [     Jump forward past the matching ] if the byte at the pointer is zero.\n* ]     Jump backward to the matching [ unless the byte at the pointer is zero.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Language.Brainfuck",
          "name": "Command",
          "package": "brainfuck",
          "source": "src/Language-Brainfuck.html#Command",
          "type": "data"
        },
        "index": {
          "description": "The complete BF language Increment the pointer Decrement the pointer Increment the byte at the pointer Decrement the byte at the pointer Output the byte at the pointer Input byte and store it in the byte at the pointer Jump forward past the matching if the byte at the pointer is zero Jump backward to the matching unless the byte at the pointer is zero",
          "hierarchy": "Language Brainfuck",
          "module": "Language.Brainfuck",
          "name": "Command",
          "package": "brainfuck",
          "partial": "Command",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/brainfuck/docs/Language-Brainfuck.html#t:Command"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Brainfuck",
          "name": "Core",
          "package": "brainfuck",
          "source": "src/Language-Brainfuck.html#Core",
          "type": "type"
        },
        "index": {
          "hierarchy": "Language Brainfuck",
          "module": "Language.Brainfuck",
          "name": "Core",
          "package": "brainfuck",
          "partial": "Core",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/brainfuck/docs/Language-Brainfuck.html#t:Core"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Brainfuck",
          "name": "CorePtr",
          "package": "brainfuck",
          "source": "src/Language-Brainfuck.html#CorePtr",
          "type": "type"
        },
        "index": {
          "hierarchy": "Language Brainfuck",
          "module": "Language.Brainfuck",
          "name": "CorePtr",
          "package": "brainfuck",
          "partial": "Core Ptr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/brainfuck/docs/Language-Brainfuck.html#t:CorePtr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Brainfuck",
          "name": "InstPtr",
          "package": "brainfuck",
          "source": "src/Language-Brainfuck.html#InstPtr",
          "type": "type"
        },
        "index": {
          "hierarchy": "Language Brainfuck",
          "module": "Language.Brainfuck",
          "name": "InstPtr",
          "package": "brainfuck",
          "partial": "Inst Ptr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/brainfuck/docs/Language-Brainfuck.html#t:InstPtr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Brainfuck",
          "name": "BF",
          "package": "brainfuck",
          "signature": "BF !Core !CorePtr !InstPtr",
          "source": "src/Language-Brainfuck.html#BF",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Brainfuck",
          "module": "Language.Brainfuck",
          "name": "BF",
          "package": "brainfuck",
          "partial": "BF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/brainfuck/docs/Language-Brainfuck.html#v:BF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Brainfuck",
          "name": "DecByte",
          "package": "brainfuck",
          "signature": "DecByte",
          "source": "src/Language-Brainfuck.html#Command",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Brainfuck",
          "module": "Language.Brainfuck",
          "name": "DecByte",
          "package": "brainfuck",
          "partial": "Dec Byte",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/brainfuck/docs/Language-Brainfuck.html#v:DecByte"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Brainfuck",
          "name": "DecPtr",
          "package": "brainfuck",
          "signature": "DecPtr",
          "source": "src/Language-Brainfuck.html#Command",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Brainfuck",
          "module": "Language.Brainfuck",
          "name": "DecPtr",
          "package": "brainfuck",
          "partial": "Dec Ptr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/brainfuck/docs/Language-Brainfuck.html#v:DecPtr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Brainfuck",
          "name": "Halt",
          "package": "brainfuck",
          "signature": "Halt",
          "source": "src/Language-Brainfuck.html#Command",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Brainfuck",
          "module": "Language.Brainfuck",
          "name": "Halt",
          "package": "brainfuck",
          "partial": "Halt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/brainfuck/docs/Language-Brainfuck.html#v:Halt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Brainfuck",
          "name": "Ignored",
          "package": "brainfuck",
          "signature": "Ignored",
          "source": "src/Language-Brainfuck.html#Command",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Brainfuck",
          "module": "Language.Brainfuck",
          "name": "Ignored",
          "package": "brainfuck",
          "partial": "Ignored",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/brainfuck/docs/Language-Brainfuck.html#v:Ignored"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Brainfuck",
          "name": "IncByte",
          "package": "brainfuck",
          "signature": "IncByte",
          "source": "src/Language-Brainfuck.html#Command",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Brainfuck",
          "module": "Language.Brainfuck",
          "name": "IncByte",
          "package": "brainfuck",
          "partial": "Inc Byte",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/brainfuck/docs/Language-Brainfuck.html#v:IncByte"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIncrement by a set amount\n\u003c/p\u003e",
          "module": "Language.Brainfuck",
          "name": "IncByteBy",
          "package": "brainfuck",
          "signature": "IncByteBy !Int",
          "source": "src/Language-Brainfuck.html#Command",
          "type": "function"
        },
        "index": {
          "description": "Increment by set amount",
          "hierarchy": "Language Brainfuck",
          "module": "Language.Brainfuck",
          "name": "IncByteBy",
          "package": "brainfuck",
          "partial": "Inc Byte By",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/brainfuck/docs/Language-Brainfuck.html#v:IncByteBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Brainfuck",
          "name": "IncPtr",
          "package": "brainfuck",
          "signature": "IncPtr",
          "source": "src/Language-Brainfuck.html#Command",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Brainfuck",
          "module": "Language.Brainfuck",
          "name": "IncPtr",
          "package": "brainfuck",
          "partial": "Inc Ptr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/brainfuck/docs/Language-Brainfuck.html#v:IncPtr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIncrement pointer by set amount\n\u003c/p\u003e",
          "module": "Language.Brainfuck",
          "name": "IncPtrBy",
          "package": "brainfuck",
          "signature": "IncPtrBy !Int",
          "source": "src/Language-Brainfuck.html#Command",
          "type": "function"
        },
        "index": {
          "description": "Increment pointer by set amount",
          "hierarchy": "Language Brainfuck",
          "module": "Language.Brainfuck",
          "name": "IncPtrBy",
          "package": "brainfuck",
          "partial": "Inc Ptr By",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/brainfuck/docs/Language-Brainfuck.html#v:IncPtrBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003enesting level\n\u003c/p\u003e",
          "module": "Language.Brainfuck",
          "name": "JmpBackward",
          "package": "brainfuck",
          "signature": "JmpBackward !Int",
          "source": "src/Language-Brainfuck.html#Command",
          "type": "function"
        },
        "index": {
          "description": "nesting level",
          "hierarchy": "Language Brainfuck",
          "module": "Language.Brainfuck",
          "name": "JmpBackward",
          "package": "brainfuck",
          "partial": "Jmp Backward",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/brainfuck/docs/Language-Brainfuck.html#v:JmpBackward"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003enesting level\n\u003c/p\u003e",
          "module": "Language.Brainfuck",
          "name": "JmpForward",
          "package": "brainfuck",
          "signature": "JmpForward !Int",
          "source": "src/Language-Brainfuck.html#Command",
          "type": "function"
        },
        "index": {
          "description": "nesting level",
          "hierarchy": "Language Brainfuck",
          "module": "Language.Brainfuck",
          "name": "JmpForward",
          "package": "brainfuck",
          "partial": "Jmp Forward",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/brainfuck/docs/Language-Brainfuck.html#v:JmpForward"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Brainfuck",
          "name": "OutputByte",
          "package": "brainfuck",
          "signature": "OutputByte",
          "source": "src/Language-Brainfuck.html#Command",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Brainfuck",
          "module": "Language.Brainfuck",
          "name": "OutputByte",
          "package": "brainfuck",
          "partial": "Output Byte",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/brainfuck/docs/Language-Brainfuck.html#v:OutputByte"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets the instruction ptr to a specific value\n\u003c/p\u003e",
          "module": "Language.Brainfuck",
          "name": "SetIpTo",
          "package": "brainfuck",
          "signature": "SetIpTo !Int",
          "source": "src/Language-Brainfuck.html#Command",
          "type": "function"
        },
        "index": {
          "description": "Sets the instruction ptr to specific value",
          "hierarchy": "Language Brainfuck",
          "module": "Language.Brainfuck",
          "name": "SetIpTo",
          "package": "brainfuck",
          "partial": "Set Ip To",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/brainfuck/docs/Language-Brainfuck.html#v:SetIpTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Brainfuck",
          "name": "chrToWord8",
          "package": "brainfuck",
          "signature": "Char -\u003e Word8",
          "source": "src/Language-Brainfuck.html#chrToWord8",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Brainfuck",
          "module": "Language.Brainfuck",
          "name": "chrToWord8",
          "normalized": "Char-\u003eWord",
          "package": "brainfuck",
          "partial": "To Word",
          "signature": "Char-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/brainfuck/docs/Language-Brainfuck.html#v:chrToWord8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Brainfuck",
          "name": "core",
          "package": "brainfuck",
          "signature": "IO Core",
          "source": "src/Language-Brainfuck.html#core",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Brainfuck",
          "module": "Language.Brainfuck",
          "name": "core",
          "package": "brainfuck",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/brainfuck/docs/Language-Brainfuck.html#v:core"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Brainfuck",
          "name": "debug",
          "package": "brainfuck",
          "signature": "Bool",
          "source": "src/Language-Brainfuck.html#debug",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Brainfuck",
          "module": "Language.Brainfuck",
          "name": "debug",
          "package": "brainfuck",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/brainfuck/docs/Language-Brainfuck.html#v:debug"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Brainfuck",
          "name": "decCP",
          "package": "brainfuck",
          "signature": "CorePtr -\u003e CorePtr",
          "source": "src/Language-Brainfuck.html#decCP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Brainfuck",
          "module": "Language.Brainfuck",
          "name": "decCP",
          "normalized": "CorePtr-\u003eCorePtr",
          "package": "brainfuck",
          "partial": "CP",
          "signature": "CorePtr-\u003eCorePtr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/brainfuck/docs/Language-Brainfuck.html#v:decCP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Brainfuck",
          "name": "decode",
          "package": "brainfuck",
          "signature": "Char -\u003e State Int Command",
          "source": "src/Language-Brainfuck.html#decode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Brainfuck",
          "module": "Language.Brainfuck",
          "name": "decode",
          "normalized": "Char-\u003eState Int Command",
          "package": "brainfuck",
          "signature": "Char-\u003eState Int Command",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/brainfuck/docs/Language-Brainfuck.html#v:decode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Brainfuck",
          "name": "doCommand",
          "package": "brainfuck",
          "signature": "Array Int Command -\u003e BF -\u003e IO BF",
          "source": "src/Language-Brainfuck.html#doCommand",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Brainfuck",
          "module": "Language.Brainfuck",
          "name": "doCommand",
          "normalized": "Array Int Command-\u003eBF-\u003eIO BF",
          "package": "brainfuck",
          "partial": "Command",
          "signature": "Array Int Command-\u003eBF-\u003eIO BF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/brainfuck/docs/Language-Brainfuck.html#v:doCommand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Brainfuck",
          "name": "execute",
          "package": "brainfuck",
          "signature": "Array Int Command -\u003e Int -\u003e BF -\u003e IO ()",
          "source": "src/Language-Brainfuck.html#execute",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Brainfuck",
          "module": "Language.Brainfuck",
          "name": "execute",
          "normalized": "Array Int Command-\u003eInt-\u003eBF-\u003eIO()",
          "package": "brainfuck",
          "signature": "Array Int Command-\u003eInt-\u003eBF-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/brainfuck/docs/Language-Brainfuck.html#v:execute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Brainfuck",
          "name": "incCP",
          "package": "brainfuck",
          "signature": "CorePtr -\u003e CorePtr",
          "source": "src/Language-Brainfuck.html#incCP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Brainfuck",
          "module": "Language.Brainfuck",
          "name": "incCP",
          "normalized": "CorePtr-\u003eCorePtr",
          "package": "brainfuck",
          "partial": "CP",
          "signature": "CorePtr-\u003eCorePtr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/brainfuck/docs/Language-Brainfuck.html#v:incCP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Brainfuck",
          "name": "incIP",
          "package": "brainfuck",
          "signature": "InstPtr -\u003e InstPtr",
          "source": "src/Language-Brainfuck.html#incIP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Brainfuck",
          "module": "Language.Brainfuck",
          "name": "incIP",
          "normalized": "InstPtr-\u003eInstPtr",
          "package": "brainfuck",
          "partial": "IP",
          "signature": "InstPtr-\u003eInstPtr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/brainfuck/docs/Language-Brainfuck.html#v:incIP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Brainfuck",
          "name": "loadProgram",
          "package": "brainfuck",
          "signature": "String -\u003e Array Int Command",
          "source": "src/Language-Brainfuck.html#loadProgram",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Brainfuck",
          "module": "Language.Brainfuck",
          "name": "loadProgram",
          "normalized": "String-\u003eArray Int Command",
          "package": "brainfuck",
          "partial": "Program",
          "signature": "String-\u003eArray Int Command",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/brainfuck/docs/Language-Brainfuck.html#v:loadProgram"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Brainfuck",
          "name": "nextJmp",
          "package": "brainfuck",
          "signature": "Array Int Command -\u003e InstPtr -\u003e (InstPtr -\u003e InstPtr) -\u003e Command -\u003e InstPtr",
          "source": "src/Language-Brainfuck.html#nextJmp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Brainfuck",
          "module": "Language.Brainfuck",
          "name": "nextJmp",
          "normalized": "Array Int Command-\u003eInstPtr-\u003e(InstPtr-\u003eInstPtr)-\u003eCommand-\u003eInstPtr",
          "package": "brainfuck",
          "partial": "Jmp",
          "signature": "Array Int Command-\u003eInstPtr-\u003e(InstPtr-\u003eInstPtr)-\u003eCommand-\u003eInstPtr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/brainfuck/docs/Language-Brainfuck.html#v:nextJmp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Brainfuck",
          "name": "optimize",
          "package": "brainfuck",
          "signature": "[Command] -\u003e Array Int Command",
          "source": "src/Language-Brainfuck.html#optimize",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Brainfuck",
          "module": "Language.Brainfuck",
          "name": "optimize",
          "normalized": "[Command]-\u003eArray Int Command",
          "package": "brainfuck",
          "signature": "[Command]-\u003eArray Int Command",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/brainfuck/docs/Language-Brainfuck.html#v:optimize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Brainfuck",
          "name": "word8ToChr",
          "package": "brainfuck",
          "signature": "Word8 -\u003e Char",
          "source": "src/Language-Brainfuck.html#word8ToChr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Brainfuck",
          "module": "Language.Brainfuck",
          "name": "word8ToChr",
          "normalized": "Word-\u003eChar",
          "package": "brainfuck",
          "partial": "To Chr",
          "signature": "Word-\u003eChar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/brainfuck/docs/Language-Brainfuck.html#v:word8ToChr"
      }
    }
  ]
]