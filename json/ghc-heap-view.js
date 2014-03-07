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
        "word": "ghc-heap-view"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTo avoid space leaks and unwanted evaluation behaviour, the programmer might want his data to be fully evaluated at certians positions in the code. This can be enforced, for example, by ample use of \u003ca\u003eControl.DeepSeq\u003c/a\u003e, but this comes at a cost.\n\u003c/p\u003e\u003cp\u003eExperienced users hence use \u003ccode\u003e\u003ca\u003edeepseq\u003c/a\u003e\u003c/code\u003e only to find out about the existance of space leaks and optimize their code to not create the thunks in the first place, until the code no longer shows better performance with \u003ccode\u003edeepseq\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis module provides an alternative approach: An explicit assertion about the evaluation state. If the programmer expect a certain value to be fully evaluated at a specific point of the program (e.g. before a call to \u003ccode\u003e\u003ca\u003ewriteIORef\u003c/a\u003e\u003c/code\u003e), he can state that, and as long as assertions are enabled, this statement will be checked. In the production code the assertions can be disabled, to avoid the run-time cost.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "GHC.AssertNF",
          "name": "AssertNF",
          "package": "ghc-heap-view",
          "source": "src/GHC-AssertNF.html",
          "type": "module"
        },
        "index": {
          "description": "To avoid space leaks and unwanted evaluation behaviour the programmer might want his data to be fully evaluated at certians positions in the code This can be enforced for example by ample use of Control.DeepSeq but this comes at cost Experienced users hence use deepseq only to find out about the existance of space leaks and optimize their code to not create the thunks in the first place until the code no longer shows better performance with deepseq This module provides an alternative approach An explicit assertion about the evaluation state If the programmer expect certain value to be fully evaluated at specific point of the program e.g before call to writeIORef he can state that and as long as assertions are enabled this statement will be checked In the production code the assertions can be disabled to avoid the run-time cost",
          "hierarchy": "GHC AssertNF",
          "module": "GHC.AssertNF",
          "name": "AssertNF",
          "package": "ghc-heap-view",
          "partial": "Assert NF",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-AssertNF.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe function \u003ccode\u003e\u003ca\u003eassertNF\u003c/a\u003e\u003c/code\u003e checks whether its argument is fully evaluated and\n deeply evaluated. If this is not the case, a warning is printed to the standard output,\n giving the number of thunks found and printing the shape of the unevaluated object:\n\u003c/p\u003e\u003cpre\u003e\u003e let x = 1 + 2\n\u003e let y = (x,x)\n\u003e assertNF y\nParameter not in normal form: 2 thunks found:\nlet t1 = _bco\nin (t1,t1)\n\u003e x\n3\n\u003e assertNF y\n\u003e\n\u003c/pre\u003e",
          "module": "GHC.AssertNF",
          "name": "assertNF",
          "package": "ghc-heap-view",
          "signature": "a -\u003e IO ()",
          "source": "src/GHC-AssertNF.html#assertNF",
          "type": "function"
        },
        "index": {
          "description": "The function assertNF checks whether its argument is fully evaluated and deeply evaluated If this is not the case warning is printed to the standard output giving the number of thunks found and printing the shape of the unevaluated object let let assertNF Parameter not in normal form thunks found let t1 bco in t1 t1 assertNF",
          "hierarchy": "GHC AssertNF",
          "module": "GHC.AssertNF",
          "name": "assertNF",
          "normalized": "a-\u003eIO()",
          "package": "ghc-heap-view",
          "partial": "NF",
          "signature": "a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-AssertNF.html#v:assertNF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function, when called as \u003ccode\u003e$assertNFHere\u003c/code\u003e in a module with \u003ccode\u003e-XTemplateHaskell\u003c/code\u003e enabled, will cause the current filename and position be included in the error message:\n\u003c/p\u003e\u003cpre\u003eParameter at Test.hs:18:1 not in normal form: 2 thunks found:\nlet t1 = _bco\nin (t1,t1)\n\u003c/pre\u003e",
          "module": "GHC.AssertNF",
          "name": "assertNFHere",
          "package": "ghc-heap-view",
          "signature": "Q Exp",
          "source": "src/GHC-AssertNF.html#assertNFHere",
          "type": "function"
        },
        "index": {
          "description": "This function when called as assertNFHere in module with XTemplateHaskell enabled will cause the current filename and position be included in the error message Parameter at Test.hs not in normal form thunks found let t1 bco in t1 t1",
          "hierarchy": "GHC AssertNF",
          "module": "GHC.AssertNF",
          "name": "assertNFHere",
          "package": "ghc-heap-view",
          "partial": "NFHere",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-AssertNF.html#v:assertNFHere"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIn order to better identify the source of error messages from \u003ccode\u003e\u003ca\u003eassertNF\u003c/a\u003e\u003c/code\u003e, this variant allows you to include a name that is printed in the output:\n\u003c/p\u003e\u003cpre\u003e\u003e assertNFNamed \"y\" y\ny not in normal form: 2 thunks found:\nlet t1 = _bco\nin (t1,t1)\n\u003c/pre\u003e",
          "module": "GHC.AssertNF",
          "name": "assertNFNamed",
          "package": "ghc-heap-view",
          "signature": "String -\u003e a -\u003e IO ()",
          "source": "src/GHC-AssertNF.html#assertNFNamed",
          "type": "function"
        },
        "index": {
          "description": "In order to better identify the source of error messages from assertNF this variant allows you to include name that is printed in the output assertNFNamed not in normal form thunks found let t1 bco in t1 t1",
          "hierarchy": "GHC AssertNF",
          "module": "GHC.AssertNF",
          "name": "assertNFNamed",
          "normalized": "String-\u003ea-\u003eIO()",
          "package": "ghc-heap-view",
          "partial": "NFNamed",
          "signature": "String-\u003ea-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-AssertNF.html#v:assertNFNamed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInvoke this function at the top of your \u003ccode\u003emain\u003c/code\u003e method to turn every call\n to \u003ccode\u003e\u003ca\u003eassertNF\u003c/a\u003e\u003c/code\u003e and its variants to noops.\n\u003c/p\u003e",
          "module": "GHC.AssertNF",
          "name": "disableAssertNF",
          "package": "ghc-heap-view",
          "signature": "IO ()",
          "source": "src/GHC-AssertNF.html#disableAssertNF",
          "type": "function"
        },
        "index": {
          "description": "Invoke this function at the top of your main method to turn every call to assertNF and its variants to noops",
          "hierarchy": "GHC AssertNF",
          "module": "GHC.AssertNF",
          "name": "disableAssertNF",
          "normalized": "IO()",
          "package": "ghc-heap-view",
          "partial": "Assert NF",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-AssertNF.html#v:disableAssertNF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003eassertNF\u003c/a\u003e\u003c/code\u003e that does not print anything and just returns\n \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the value is in normal form, or \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e otherwise. This function\n is not affected by \u003ccode\u003e\u003ca\u003edisableAssertNF\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "GHC.AssertNF",
          "name": "isNF",
          "package": "ghc-heap-view",
          "signature": "a -\u003e IO Bool",
          "source": "src/GHC-AssertNF.html#isNF",
          "type": "function"
        },
        "index": {
          "description": "variant of assertNF that does not print anything and just returns True if the value is in normal form or False otherwise This function is not affected by disableAssertNF",
          "hierarchy": "GHC AssertNF",
          "module": "GHC.AssertNF",
          "name": "isNF",
          "normalized": "a-\u003eIO Bool",
          "package": "ghc-heap-view",
          "partial": "NF",
          "signature": "a-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-AssertNF.html#v:isNF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA disassembler for ByteCode objects as used by GHCi.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "GHC.Disassembler",
          "name": "Disassembler",
          "package": "ghc-heap-view",
          "source": "src/GHC-Disassembler.html",
          "type": "module"
        },
        "index": {
          "description": "disassembler for ByteCode objects as used by GHCi",
          "hierarchy": "GHC Disassembler",
          "module": "GHC.Disassembler",
          "name": "Disassembler",
          "package": "ghc-heap-view",
          "partial": "Disassembler",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-Disassembler.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe various byte code instructions that GHCi supports.\n\u003c/p\u003e",
          "module": "GHC.Disassembler",
          "name": "BCI",
          "package": "ghc-heap-view",
          "source": "src/GHC-Disassembler.html#BCI",
          "type": "data"
        },
        "index": {
          "description": "The various byte code instructions that GHCi supports",
          "hierarchy": "GHC Disassembler",
          "module": "GHC.Disassembler",
          "name": "BCI",
          "package": "ghc-heap-view",
          "partial": "BCI",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-Disassembler.html#t:BCI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.Disassembler",
          "name": "BCIALLOC_AP",
          "package": "ghc-heap-view",
          "signature": "BCIALLOC_AP Word16",
          "source": "src/GHC-Disassembler.html#BCI",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC Disassembler",
          "module": "GHC.Disassembler",
          "name": "BCIALLOC_AP",
          "package": "ghc-heap-view",
          "partial": "BCIALLOC AP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-Disassembler.html#v:BCIALLOC_AP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.Disassembler",
          "name": "BCIALLOC_AP_NOUPD",
          "package": "ghc-heap-view",
          "signature": "BCIALLOC_AP_NOUPD Word16",
          "source": "src/GHC-Disassembler.html#BCI",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC Disassembler",
          "module": "GHC.Disassembler",
          "name": "BCIALLOC_AP_NOUPD",
          "package": "ghc-heap-view",
          "partial": "BCIALLOC AP NOUPD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-Disassembler.html#v:BCIALLOC_AP_NOUPD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.Disassembler",
          "name": "BCIALLOC_PAP",
          "package": "ghc-heap-view",
          "signature": "BCIALLOC_PAP Word16 Word16",
          "source": "src/GHC-Disassembler.html#BCI",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC Disassembler",
          "module": "GHC.Disassembler",
          "name": "BCIALLOC_PAP",
          "package": "ghc-heap-view",
          "partial": "BCIALLOC PAP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-Disassembler.html#v:BCIALLOC_PAP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWe do not parse this opcode's arguments\n\u003c/p\u003e",
          "module": "GHC.Disassembler",
          "name": "BCIBRK_FUN",
          "package": "ghc-heap-view",
          "signature": "BCIBRK_FUN",
          "source": "src/GHC-Disassembler.html#BCI",
          "type": "function"
        },
        "index": {
          "description": "We do not parse this opcode arguments",
          "hierarchy": "GHC Disassembler",
          "module": "GHC.Disassembler",
          "name": "BCIBRK_FUN",
          "package": "ghc-heap-view",
          "partial": "BCIBRK FUN",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-Disassembler.html#v:BCIBRK_FUN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.Disassembler",
          "name": "BCICASEFAIL",
          "package": "ghc-heap-view",
          "signature": "BCICASEFAIL",
          "source": "src/GHC-Disassembler.html#BCI",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC Disassembler",
          "module": "GHC.Disassembler",
          "name": "BCICASEFAIL",
          "package": "ghc-heap-view",
          "partial": "BCICASEFAIL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-Disassembler.html#v:BCICASEFAIL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.Disassembler",
          "name": "BCICCALL",
          "package": "ghc-heap-view",
          "signature": "BCICCALL Word",
          "source": "src/GHC-Disassembler.html#BCI",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC Disassembler",
          "module": "GHC.Disassembler",
          "name": "BCICCALL",
          "package": "ghc-heap-view",
          "partial": "BCICCALL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-Disassembler.html#v:BCICCALL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.Disassembler",
          "name": "BCIENTER",
          "package": "ghc-heap-view",
          "signature": "BCIENTER",
          "source": "src/GHC-Disassembler.html#BCI",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC Disassembler",
          "module": "GHC.Disassembler",
          "name": "BCIENTER",
          "package": "ghc-heap-view",
          "partial": "BCIENTER",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-Disassembler.html#v:BCIENTER"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.Disassembler",
          "name": "BCIJMP",
          "package": "ghc-heap-view",
          "signature": "BCIJMP",
          "source": "src/GHC-Disassembler.html#BCI",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC Disassembler",
          "module": "GHC.Disassembler",
          "name": "BCIJMP",
          "package": "ghc-heap-view",
          "partial": "BCIJMP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-Disassembler.html#v:BCIJMP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.Disassembler",
          "name": "BCIMKAP",
          "package": "ghc-heap-view",
          "signature": "BCIMKAP Word16 Word16",
          "source": "src/GHC-Disassembler.html#BCI",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC Disassembler",
          "module": "GHC.Disassembler",
          "name": "BCIMKAP",
          "package": "ghc-heap-view",
          "partial": "BCIMKAP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-Disassembler.html#v:BCIMKAP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.Disassembler",
          "name": "BCIMKPAP",
          "package": "ghc-heap-view",
          "signature": "BCIMKPAP Word16 Word16",
          "source": "src/GHC-Disassembler.html#BCI",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC Disassembler",
          "module": "GHC.Disassembler",
          "name": "BCIMKPAP",
          "package": "ghc-heap-view",
          "partial": "BCIMKPAP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-Disassembler.html#v:BCIMKPAP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.Disassembler",
          "name": "BCIPACK",
          "package": "ghc-heap-view",
          "signature": "BCIPACK Word Word16",
          "source": "src/GHC-Disassembler.html#BCI",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC Disassembler",
          "module": "GHC.Disassembler",
          "name": "BCIPACK",
          "package": "ghc-heap-view",
          "partial": "BCIPACK",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-Disassembler.html#v:BCIPACK"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.Disassembler",
          "name": "BCIPUSH_ALTS",
          "package": "ghc-heap-view",
          "signature": "BCIPUSH_ALTS box",
          "source": "src/GHC-Disassembler.html#BCI",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC Disassembler",
          "module": "GHC.Disassembler",
          "name": "BCIPUSH_ALTS",
          "package": "ghc-heap-view",
          "partial": "BCIPUSH ALTS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-Disassembler.html#v:BCIPUSH_ALTS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.Disassembler",
          "name": "BCIPUSH_ALTS_D",
          "package": "ghc-heap-view",
          "signature": "BCIPUSH_ALTS_D box",
          "source": "src/GHC-Disassembler.html#BCI",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC Disassembler",
          "module": "GHC.Disassembler",
          "name": "BCIPUSH_ALTS_D",
          "package": "ghc-heap-view",
          "partial": "BCIPUSH ALTS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-Disassembler.html#v:BCIPUSH_ALTS_D"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.Disassembler",
          "name": "BCIPUSH_ALTS_F",
          "package": "ghc-heap-view",
          "signature": "BCIPUSH_ALTS_F box",
          "source": "src/GHC-Disassembler.html#BCI",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC Disassembler",
          "module": "GHC.Disassembler",
          "name": "BCIPUSH_ALTS_F",
          "package": "ghc-heap-view",
          "partial": "BCIPUSH ALTS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-Disassembler.html#v:BCIPUSH_ALTS_F"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.Disassembler",
          "name": "BCIPUSH_ALTS_L",
          "package": "ghc-heap-view",
          "signature": "BCIPUSH_ALTS_L box",
          "source": "src/GHC-Disassembler.html#BCI",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC Disassembler",
          "module": "GHC.Disassembler",
          "name": "BCIPUSH_ALTS_L",
          "package": "ghc-heap-view",
          "partial": "BCIPUSH ALTS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-Disassembler.html#v:BCIPUSH_ALTS_L"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.Disassembler",
          "name": "BCIPUSH_ALTS_N",
          "package": "ghc-heap-view",
          "signature": "BCIPUSH_ALTS_N box",
          "source": "src/GHC-Disassembler.html#BCI",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC Disassembler",
          "module": "GHC.Disassembler",
          "name": "BCIPUSH_ALTS_N",
          "package": "ghc-heap-view",
          "partial": "BCIPUSH ALTS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-Disassembler.html#v:BCIPUSH_ALTS_N"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.Disassembler",
          "name": "BCIPUSH_ALTS_P",
          "package": "ghc-heap-view",
          "signature": "BCIPUSH_ALTS_P box",
          "source": "src/GHC-Disassembler.html#BCI",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC Disassembler",
          "module": "GHC.Disassembler",
          "name": "BCIPUSH_ALTS_P",
          "package": "ghc-heap-view",
          "partial": "BCIPUSH ALTS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-Disassembler.html#v:BCIPUSH_ALTS_P"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.Disassembler",
          "name": "BCIPUSH_ALTS_V",
          "package": "ghc-heap-view",
          "signature": "BCIPUSH_ALTS_V box",
          "source": "src/GHC-Disassembler.html#BCI",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC Disassembler",
          "module": "GHC.Disassembler",
          "name": "BCIPUSH_ALTS_V",
          "package": "ghc-heap-view",
          "partial": "BCIPUSH ALTS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-Disassembler.html#v:BCIPUSH_ALTS_V"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.Disassembler",
          "name": "BCIPUSH_APPLY_D",
          "package": "ghc-heap-view",
          "signature": "BCIPUSH_APPLY_D",
          "source": "src/GHC-Disassembler.html#BCI",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC Disassembler",
          "module": "GHC.Disassembler",
          "name": "BCIPUSH_APPLY_D",
          "package": "ghc-heap-view",
          "partial": "BCIPUSH APPLY",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-Disassembler.html#v:BCIPUSH_APPLY_D"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.Disassembler",
          "name": "BCIPUSH_APPLY_F",
          "package": "ghc-heap-view",
          "signature": "BCIPUSH_APPLY_F",
          "source": "src/GHC-Disassembler.html#BCI",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC Disassembler",
          "module": "GHC.Disassembler",
          "name": "BCIPUSH_APPLY_F",
          "package": "ghc-heap-view",
          "partial": "BCIPUSH APPLY",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-Disassembler.html#v:BCIPUSH_APPLY_F"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.Disassembler",
          "name": "BCIPUSH_APPLY_L",
          "package": "ghc-heap-view",
          "signature": "BCIPUSH_APPLY_L",
          "source": "src/GHC-Disassembler.html#BCI",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC Disassembler",
          "module": "GHC.Disassembler",
          "name": "BCIPUSH_APPLY_L",
          "package": "ghc-heap-view",
          "partial": "BCIPUSH APPLY",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-Disassembler.html#v:BCIPUSH_APPLY_L"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.Disassembler",
          "name": "BCIPUSH_APPLY_N",
          "package": "ghc-heap-view",
          "signature": "BCIPUSH_APPLY_N",
          "source": "src/GHC-Disassembler.html#BCI",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC Disassembler",
          "module": "GHC.Disassembler",
          "name": "BCIPUSH_APPLY_N",
          "package": "ghc-heap-view",
          "partial": "BCIPUSH APPLY",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-Disassembler.html#v:BCIPUSH_APPLY_N"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.Disassembler",
          "name": "BCIPUSH_APPLY_P",
          "package": "ghc-heap-view",
          "signature": "BCIPUSH_APPLY_P",
          "source": "src/GHC-Disassembler.html#BCI",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC Disassembler",
          "module": "GHC.Disassembler",
          "name": "BCIPUSH_APPLY_P",
          "package": "ghc-heap-view",
          "partial": "BCIPUSH APPLY",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-Disassembler.html#v:BCIPUSH_APPLY_P"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.Disassembler",
          "name": "BCIPUSH_APPLY_PP",
          "package": "ghc-heap-view",
          "signature": "BCIPUSH_APPLY_PP",
          "source": "src/GHC-Disassembler.html#BCI",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC Disassembler",
          "module": "GHC.Disassembler",
          "name": "BCIPUSH_APPLY_PP",
          "package": "ghc-heap-view",
          "partial": "BCIPUSH APPLY PP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-Disassembler.html#v:BCIPUSH_APPLY_PP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.Disassembler",
          "name": "BCIPUSH_APPLY_PPP",
          "package": "ghc-heap-view",
          "signature": "BCIPUSH_APPLY_PPP",
          "source": "src/GHC-Disassembler.html#BCI",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC Disassembler",
          "module": "GHC.Disassembler",
          "name": "BCIPUSH_APPLY_PPP",
          "package": "ghc-heap-view",
          "partial": "BCIPUSH APPLY PPP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-Disassembler.html#v:BCIPUSH_APPLY_PPP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.Disassembler",
          "name": "BCIPUSH_APPLY_PPPP",
          "package": "ghc-heap-view",
          "signature": "BCIPUSH_APPLY_PPPP",
          "source": "src/GHC-Disassembler.html#BCI",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC Disassembler",
          "module": "GHC.Disassembler",
          "name": "BCIPUSH_APPLY_PPPP",
          "package": "ghc-heap-view",
          "partial": "BCIPUSH APPLY PPPP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-Disassembler.html#v:BCIPUSH_APPLY_PPPP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.Disassembler",
          "name": "BCIPUSH_APPLY_PPPPP",
          "package": "ghc-heap-view",
          "signature": "BCIPUSH_APPLY_PPPPP",
          "source": "src/GHC-Disassembler.html#BCI",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC Disassembler",
          "module": "GHC.Disassembler",
          "name": "BCIPUSH_APPLY_PPPPP",
          "package": "ghc-heap-view",
          "partial": "BCIPUSH APPLY PPPPP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-Disassembler.html#v:BCIPUSH_APPLY_PPPPP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.Disassembler",
          "name": "BCIPUSH_APPLY_PPPPPP",
          "package": "ghc-heap-view",
          "signature": "BCIPUSH_APPLY_PPPPPP",
          "source": "src/GHC-Disassembler.html#BCI",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC Disassembler",
          "module": "GHC.Disassembler",
          "name": "BCIPUSH_APPLY_PPPPPP",
          "package": "ghc-heap-view",
          "partial": "BCIPUSH APPLY PPPPPP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-Disassembler.html#v:BCIPUSH_APPLY_PPPPPP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.Disassembler",
          "name": "BCIPUSH_APPLY_V",
          "package": "ghc-heap-view",
          "signature": "BCIPUSH_APPLY_V",
          "source": "src/GHC-Disassembler.html#BCI",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC Disassembler",
          "module": "GHC.Disassembler",
          "name": "BCIPUSH_APPLY_V",
          "package": "ghc-heap-view",
          "partial": "BCIPUSH APPLY",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-Disassembler.html#v:BCIPUSH_APPLY_V"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.Disassembler",
          "name": "BCIPUSH_G",
          "package": "ghc-heap-view",
          "signature": "BCIPUSH_G box",
          "source": "src/GHC-Disassembler.html#BCI",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC Disassembler",
          "module": "GHC.Disassembler",
          "name": "BCIPUSH_G",
          "package": "ghc-heap-view",
          "partial": "BCIPUSH",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-Disassembler.html#v:BCIPUSH_G"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.Disassembler",
          "name": "BCIPUSH_L",
          "package": "ghc-heap-view",
          "signature": "BCIPUSH_L Word16",
          "source": "src/GHC-Disassembler.html#BCI",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC Disassembler",
          "module": "GHC.Disassembler",
          "name": "BCIPUSH_L",
          "package": "ghc-heap-view",
          "partial": "BCIPUSH",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-Disassembler.html#v:BCIPUSH_L"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.Disassembler",
          "name": "BCIPUSH_LL",
          "package": "ghc-heap-view",
          "signature": "BCIPUSH_LL Word16 Word16",
          "source": "src/GHC-Disassembler.html#BCI",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC Disassembler",
          "module": "GHC.Disassembler",
          "name": "BCIPUSH_LL",
          "package": "ghc-heap-view",
          "partial": "BCIPUSH LL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-Disassembler.html#v:BCIPUSH_LL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.Disassembler",
          "name": "BCIPUSH_LLL",
          "package": "ghc-heap-view",
          "signature": "BCIPUSH_LLL Word16 Word16 Word16",
          "source": "src/GHC-Disassembler.html#BCI",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC Disassembler",
          "module": "GHC.Disassembler",
          "name": "BCIPUSH_LLL",
          "package": "ghc-heap-view",
          "partial": "BCIPUSH LLL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-Disassembler.html#v:BCIPUSH_LLL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.Disassembler",
          "name": "BCIPUSH_UBX",
          "package": "ghc-heap-view",
          "signature": "BCIPUSH_UBX [Word]",
          "source": "src/GHC-Disassembler.html#BCI",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC Disassembler",
          "module": "GHC.Disassembler",
          "name": "BCIPUSH_UBX",
          "normalized": "BCIPUSH_UBX[Word]",
          "package": "ghc-heap-view",
          "partial": "BCIPUSH UBX",
          "signature": "BCIPUSH_UBX[Word]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-Disassembler.html#v:BCIPUSH_UBX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.Disassembler",
          "name": "BCIRETURN",
          "package": "ghc-heap-view",
          "signature": "BCIRETURN",
          "source": "src/GHC-Disassembler.html#BCI",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC Disassembler",
          "module": "GHC.Disassembler",
          "name": "BCIRETURN",
          "package": "ghc-heap-view",
          "partial": "BCIRETURN",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-Disassembler.html#v:BCIRETURN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.Disassembler",
          "name": "BCIRETURN_D",
          "package": "ghc-heap-view",
          "signature": "BCIRETURN_D",
          "source": "src/GHC-Disassembler.html#BCI",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC Disassembler",
          "module": "GHC.Disassembler",
          "name": "BCIRETURN_D",
          "package": "ghc-heap-view",
          "partial": "BCIRETURN",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-Disassembler.html#v:BCIRETURN_D"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.Disassembler",
          "name": "BCIRETURN_F",
          "package": "ghc-heap-view",
          "signature": "BCIRETURN_F",
          "source": "src/GHC-Disassembler.html#BCI",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC Disassembler",
          "module": "GHC.Disassembler",
          "name": "BCIRETURN_F",
          "package": "ghc-heap-view",
          "partial": "BCIRETURN",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-Disassembler.html#v:BCIRETURN_F"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.Disassembler",
          "name": "BCIRETURN_L",
          "package": "ghc-heap-view",
          "signature": "BCIRETURN_L",
          "source": "src/GHC-Disassembler.html#BCI",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC Disassembler",
          "module": "GHC.Disassembler",
          "name": "BCIRETURN_L",
          "package": "ghc-heap-view",
          "partial": "BCIRETURN",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-Disassembler.html#v:BCIRETURN_L"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.Disassembler",
          "name": "BCIRETURN_N",
          "package": "ghc-heap-view",
          "signature": "BCIRETURN_N",
          "source": "src/GHC-Disassembler.html#BCI",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC Disassembler",
          "module": "GHC.Disassembler",
          "name": "BCIRETURN_N",
          "package": "ghc-heap-view",
          "partial": "BCIRETURN",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-Disassembler.html#v:BCIRETURN_N"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.Disassembler",
          "name": "BCIRETURN_P",
          "package": "ghc-heap-view",
          "signature": "BCIRETURN_P",
          "source": "src/GHC-Disassembler.html#BCI",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC Disassembler",
          "module": "GHC.Disassembler",
          "name": "BCIRETURN_P",
          "package": "ghc-heap-view",
          "partial": "BCIRETURN",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-Disassembler.html#v:BCIRETURN_P"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.Disassembler",
          "name": "BCIRETURN_V",
          "package": "ghc-heap-view",
          "signature": "BCIRETURN_V",
          "source": "src/GHC-Disassembler.html#BCI",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC Disassembler",
          "module": "GHC.Disassembler",
          "name": "BCIRETURN_V",
          "package": "ghc-heap-view",
          "partial": "BCIRETURN",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-Disassembler.html#v:BCIRETURN_V"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.Disassembler",
          "name": "BCISLIDE",
          "package": "ghc-heap-view",
          "signature": "BCISLIDE Word16 Word16",
          "source": "src/GHC-Disassembler.html#BCI",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC Disassembler",
          "module": "GHC.Disassembler",
          "name": "BCISLIDE",
          "package": "ghc-heap-view",
          "partial": "BCISLIDE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-Disassembler.html#v:BCISLIDE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.Disassembler",
          "name": "BCISTKCHECK",
          "package": "ghc-heap-view",
          "signature": "BCISTKCHECK Word",
          "source": "src/GHC-Disassembler.html#BCI",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC Disassembler",
          "module": "GHC.Disassembler",
          "name": "BCISTKCHECK",
          "package": "ghc-heap-view",
          "partial": "BCISTKCHECK",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-Disassembler.html#v:BCISTKCHECK"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.Disassembler",
          "name": "BCISWIZZLE",
          "package": "ghc-heap-view",
          "signature": "BCISWIZZLE Word16 Int16",
          "source": "src/GHC-Disassembler.html#BCI",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC Disassembler",
          "module": "GHC.Disassembler",
          "name": "BCISWIZZLE",
          "package": "ghc-heap-view",
          "partial": "BCISWIZZLE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-Disassembler.html#v:BCISWIZZLE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.Disassembler",
          "name": "BCITESTEQ_D",
          "package": "ghc-heap-view",
          "signature": "BCITESTEQ_D Word Int",
          "source": "src/GHC-Disassembler.html#BCI",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC Disassembler",
          "module": "GHC.Disassembler",
          "name": "BCITESTEQ_D",
          "package": "ghc-heap-view",
          "partial": "BCITESTEQ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-Disassembler.html#v:BCITESTEQ_D"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.Disassembler",
          "name": "BCITESTEQ_F",
          "package": "ghc-heap-view",
          "signature": "BCITESTEQ_F Word Int",
          "source": "src/GHC-Disassembler.html#BCI",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC Disassembler",
          "module": "GHC.Disassembler",
          "name": "BCITESTEQ_F",
          "package": "ghc-heap-view",
          "partial": "BCITESTEQ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-Disassembler.html#v:BCITESTEQ_F"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.Disassembler",
          "name": "BCITESTEQ_I",
          "package": "ghc-heap-view",
          "signature": "BCITESTEQ_I Int Int",
          "source": "src/GHC-Disassembler.html#BCI",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC Disassembler",
          "module": "GHC.Disassembler",
          "name": "BCITESTEQ_I",
          "package": "ghc-heap-view",
          "partial": "BCITESTEQ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-Disassembler.html#v:BCITESTEQ_I"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.Disassembler",
          "name": "BCITESTEQ_P",
          "package": "ghc-heap-view",
          "signature": "BCITESTEQ_P Word16 Int",
          "source": "src/GHC-Disassembler.html#BCI",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC Disassembler",
          "module": "GHC.Disassembler",
          "name": "BCITESTEQ_P",
          "package": "ghc-heap-view",
          "partial": "BCITESTEQ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-Disassembler.html#v:BCITESTEQ_P"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.Disassembler",
          "name": "BCITESTEQ_W",
          "package": "ghc-heap-view",
          "signature": "BCITESTEQ_W Word Int",
          "source": "src/GHC-Disassembler.html#BCI",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC Disassembler",
          "module": "GHC.Disassembler",
          "name": "BCITESTEQ_W",
          "package": "ghc-heap-view",
          "partial": "BCITESTEQ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-Disassembler.html#v:BCITESTEQ_W"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.Disassembler",
          "name": "BCITESTLT_D",
          "package": "ghc-heap-view",
          "signature": "BCITESTLT_D Word Int",
          "source": "src/GHC-Disassembler.html#BCI",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC Disassembler",
          "module": "GHC.Disassembler",
          "name": "BCITESTLT_D",
          "package": "ghc-heap-view",
          "partial": "BCITESTLT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-Disassembler.html#v:BCITESTLT_D"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.Disassembler",
          "name": "BCITESTLT_F",
          "package": "ghc-heap-view",
          "signature": "BCITESTLT_F Word Int",
          "source": "src/GHC-Disassembler.html#BCI",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC Disassembler",
          "module": "GHC.Disassembler",
          "name": "BCITESTLT_F",
          "package": "ghc-heap-view",
          "partial": "BCITESTLT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-Disassembler.html#v:BCITESTLT_F"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.Disassembler",
          "name": "BCITESTLT_I",
          "package": "ghc-heap-view",
          "signature": "BCITESTLT_I Int Int",
          "source": "src/GHC-Disassembler.html#BCI",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC Disassembler",
          "module": "GHC.Disassembler",
          "name": "BCITESTLT_I",
          "package": "ghc-heap-view",
          "partial": "BCITESTLT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-Disassembler.html#v:BCITESTLT_I"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.Disassembler",
          "name": "BCITESTLT_P",
          "package": "ghc-heap-view",
          "signature": "BCITESTLT_P Word16 Int",
          "source": "src/GHC-Disassembler.html#BCI",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC Disassembler",
          "module": "GHC.Disassembler",
          "name": "BCITESTLT_P",
          "package": "ghc-heap-view",
          "partial": "BCITESTLT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-Disassembler.html#v:BCITESTLT_P"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.Disassembler",
          "name": "BCITESTLT_W",
          "package": "ghc-heap-view",
          "signature": "BCITESTLT_W Word Int",
          "source": "src/GHC-Disassembler.html#BCI",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC Disassembler",
          "module": "GHC.Disassembler",
          "name": "BCITESTLT_W",
          "package": "ghc-heap-view",
          "partial": "BCITESTLT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-Disassembler.html#v:BCITESTLT_W"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.Disassembler",
          "name": "BCIUNPACK",
          "package": "ghc-heap-view",
          "signature": "BCIUNPACK Word16",
          "source": "src/GHC-Disassembler.html#BCI",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC Disassembler",
          "module": "GHC.Disassembler",
          "name": "BCIUNPACK",
          "package": "ghc-heap-view",
          "partial": "BCIUNPACK",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-Disassembler.html#v:BCIUNPACK"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a list of pointers, a list of literals and a ByteString containing\n byte code instructions, disassembles them into a list of byte code instructions.\n\u003c/p\u003e",
          "module": "GHC.Disassembler",
          "name": "disassemble",
          "package": "ghc-heap-view",
          "signature": "forall box.  [box] -\u003e [Word] -\u003e ByteString -\u003e [BCI box]",
          "source": "src/GHC-Disassembler.html#disassemble",
          "type": "function"
        },
        "index": {
          "description": "Given list of pointers list of literals and ByteString containing byte code instructions disassembles them into list of byte code instructions",
          "hierarchy": "GHC Disassembler",
          "module": "GHC.Disassembler",
          "name": "disassemble",
          "normalized": "a b[c]-\u003e[Word]-\u003eByteString-\u003e[BCI c]",
          "package": "ghc-heap-view",
          "signature": "forall box.[box]-\u003e[Word]-\u003eByteString-\u003e[BCI box]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-Disassembler.html#v:disassemble"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts the first \u003ccode\u003en\u003c/code\u003e bytes of this list of Words to a ByteString.\n\u003c/p\u003e",
          "module": "GHC.Disassembler",
          "name": "toBytes",
          "package": "ghc-heap-view",
          "signature": "Word -\u003e [Word] -\u003e ByteString",
          "source": "src/GHC-Disassembler.html#toBytes",
          "type": "function"
        },
        "index": {
          "description": "Converts the first bytes of this list of Words to ByteString",
          "hierarchy": "GHC Disassembler",
          "module": "GHC.Disassembler",
          "name": "toBytes",
          "normalized": "Word-\u003e[Word]-\u003eByteString",
          "package": "ghc-heap-view",
          "partial": "Bytes",
          "signature": "Word-\u003e[Word]-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-Disassembler.html#v:toBytes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUtilities to debug \u003ca\u003eGHC.HeapView\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "GHC.HeapView.Debug",
          "name": "Debug",
          "package": "ghc-heap-view",
          "source": "src/GHC-HeapView-Debug.html",
          "type": "module"
        },
        "index": {
          "description": "Utilities to debug GHC.HeapView",
          "hierarchy": "GHC HeapView Debug",
          "module": "GHC.HeapView.Debug",
          "name": "Debug",
          "package": "ghc-heap-view",
          "partial": "Debug",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView-Debug.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.HeapView.Debug",
          "name": "findM",
          "package": "ghc-heap-view",
          "signature": "(a -\u003e IO Bool) -\u003e [a] -\u003e IO (Maybe a)",
          "source": "src/GHC-HeapView-Debug.html#findM",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC HeapView Debug",
          "module": "GHC.HeapView.Debug",
          "name": "findM",
          "normalized": "(a-\u003eIO Bool)-\u003e[a]-\u003eIO(Maybe a)",
          "package": "ghc-heap-view",
          "signature": "(a-\u003eIO Bool)-\u003e[a]-\u003eIO(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView-Debug.html#v:findM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.HeapView.Debug",
          "name": "isChar",
          "package": "ghc-heap-view",
          "signature": "GenClosure b -\u003e Maybe Char",
          "source": "src/GHC-HeapView-Debug.html#isChar",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC HeapView Debug",
          "module": "GHC.HeapView.Debug",
          "name": "isChar",
          "normalized": "GenClosure a-\u003eMaybe Char",
          "package": "ghc-heap-view",
          "partial": "Char",
          "signature": "GenClosure b-\u003eMaybe Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView-Debug.html#v:isChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.HeapView.Debug",
          "name": "isCharCons",
          "package": "ghc-heap-view",
          "signature": "GenClosure Box -\u003e IO Bool",
          "source": "src/GHC-HeapView-Debug.html#isCharCons",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC HeapView Debug",
          "module": "GHC.HeapView.Debug",
          "name": "isCharCons",
          "normalized": "GenClosure Box-\u003eIO Bool",
          "package": "ghc-heap-view",
          "partial": "Char Cons",
          "signature": "GenClosure Box-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView-Debug.html#v:isCharCons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.HeapView.Debug",
          "name": "isCons",
          "package": "ghc-heap-view",
          "signature": "GenClosure b -\u003e Maybe (b, b)",
          "source": "src/GHC-HeapView-Debug.html#isCons",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC HeapView Debug",
          "module": "GHC.HeapView.Debug",
          "name": "isCons",
          "normalized": "GenClosure a-\u003eMaybe(a,a)",
          "package": "ghc-heap-view",
          "partial": "Cons",
          "signature": "GenClosure b-\u003eMaybe(b,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView-Debug.html#v:isCons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis functions walks the heap referenced by the argument, printing the\n \"path\", i.e. the pointer indices from the initial to the current closure\n and the closure itself. When the runtime crashes, the problem is likely\n related to one of the earlier steps.\n\u003c/p\u003e",
          "module": "GHC.HeapView.Debug",
          "name": "walkHeap",
          "package": "ghc-heap-view",
          "signature": "Bool-\u003e Bool-\u003e Box-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "This functions walks the heap referenced by the argument printing the path i.e the pointer indices from the initial to the current closure and the closure itself When the runtime crashes the problem is likely related to one of the earlier steps",
          "hierarchy": "GHC HeapView Debug",
          "module": "GHC.HeapView.Debug",
          "name": "walkHeap",
          "normalized": "Bool-\u003eBool-\u003eBox-\u003eIO()",
          "package": "ghc-heap-view",
          "partial": "Heap",
          "signature": "Bool-\u003eBool-\u003eBox-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView-Debug.html#v:walkHeap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.HeapView.Debug",
          "name": "walkPrefix",
          "package": "ghc-heap-view",
          "signature": "[Int] -\u003e a -\u003e IO Box",
          "source": "src/GHC-HeapView-Debug.html#walkPrefix",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC HeapView Debug",
          "module": "GHC.HeapView.Debug",
          "name": "walkPrefix",
          "normalized": "[Int]-\u003ea-\u003eIO Box",
          "package": "ghc-heap-view",
          "partial": "Prefix",
          "signature": "[Int]-\u003ea-\u003eIO Box",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView-Debug.html#v:walkPrefix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eWith this module, you can investigate the heap representation of Haskell\nvalues, i.e. to investigate sharing and lazy evaluation.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "GHC.HeapView",
          "name": "HeapView",
          "package": "ghc-heap-view",
          "source": "src/GHC-HeapView.html",
          "type": "module"
        },
        "index": {
          "description": "With this module you can investigate the heap representation of Haskell values i.e to investigate sharing and lazy evaluation",
          "hierarchy": "GHC HeapView",
          "module": "GHC.HeapView",
          "name": "HeapView",
          "package": "ghc-heap-view",
          "partial": "Heap View",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn arbitrarily Haskell value in a safe Box. The point is that even\n unevaluated thunks can safely be moved around inside the Box, and when\n required, e.g. in \u003ccode\u003e\u003ca\u003egetBoxedClosureData\u003c/a\u003e\u003c/code\u003e, the function knows how far it has\n to evalue the argument.\n\u003c/p\u003e",
          "module": "GHC.HeapView",
          "name": "Box",
          "package": "ghc-heap-view",
          "source": "src/GHC-HeapView.html#Box",
          "type": "data"
        },
        "index": {
          "description": "An arbitrarily Haskell value in safe Box The point is that even unevaluated thunks can safely be moved around inside the Box and when required e.g in getBoxedClosureData the function knows how far it has to evalue the argument",
          "hierarchy": "GHC HeapView",
          "module": "GHC.HeapView",
          "name": "Box",
          "package": "ghc-heap-view",
          "partial": "Box",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#t:Box"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.HeapView",
          "name": "Closure",
          "package": "ghc-heap-view",
          "source": "src/GHC-HeapView.html#Closure",
          "type": "type"
        },
        "index": {
          "hierarchy": "GHC HeapView",
          "module": "GHC.HeapView",
          "name": "Closure",
          "package": "ghc-heap-view",
          "partial": "Closure",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#t:Closure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA closure type enumeration, in order matching the actual value on the heap.\n   Needs to be synchronized with\n   \u003ca\u003ehttp://hackage.haskell.org/trac/ghc/browser/includes/rts/storage/ClosureTypes.h\u003c/a\u003e\n\u003c/p\u003e",
          "module": "GHC.HeapView",
          "name": "ClosureType",
          "package": "ghc-heap-view",
          "source": "src/GHC-HeapView.html#ClosureType",
          "type": "data"
        },
        "index": {
          "description": "closure type enumeration in order matching the actual value on the heap Needs to be synchronized with http hackage.haskell.org trac ghc browser includes rts storage ClosureTypes.h",
          "hierarchy": "GHC HeapView",
          "module": "GHC.HeapView",
          "name": "ClosureType",
          "package": "ghc-heap-view",
          "partial": "Closure Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#t:ClosureType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is the main data type of this module, representing a Haskell value on\n  the heap. This reflects\n  \u003ca\u003ehttp://hackage.haskell.org/trac/ghc/browser/includes/rts/storage/Closures.h\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eThe data type is parametrized by the type to store references in, which\n  is usually a \u003ccode\u003e\u003ca\u003eBox\u003c/a\u003e\u003c/code\u003e with appropriate type synonym \u003ccode\u003e\u003ca\u003eClosure\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "GHC.HeapView",
          "name": "GenClosure",
          "package": "ghc-heap-view",
          "source": "src/GHC-HeapView.html#GenClosure",
          "type": "data"
        },
        "index": {
          "description": "This is the main data type of this module representing Haskell value on the heap This reflects http hackage.haskell.org trac ghc browser includes rts storage Closures.h The data type is parametrized by the type to store references in which is usually Box with appropriate type synonym Closure",
          "hierarchy": "GHC HeapView",
          "module": "GHC.HeapView",
          "name": "GenClosure",
          "package": "ghc-heap-view",
          "partial": "Gen Closure",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#t:GenClosure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.HeapView",
          "name": "HalfWord",
          "package": "ghc-heap-view",
          "source": "src/GHC-HeapView.html#HalfWord",
          "type": "type"
        },
        "index": {
          "hierarchy": "GHC HeapView",
          "module": "GHC.HeapView",
          "name": "HalfWord",
          "package": "ghc-heap-view",
          "partial": "Half Word",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#t:HalfWord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe whole graph. The suggested interface is to only use \u003ccode\u003e\u003ca\u003elookupHeapGraph\u003c/a\u003e\u003c/code\u003e,\n as the internal representation may change. Nevertheless, we export it here:\n Sometimes the user knows better what he needs than we do.\n\u003c/p\u003e",
          "module": "GHC.HeapView",
          "name": "HeapGraph",
          "package": "ghc-heap-view",
          "source": "src/GHC-HeapView.html#HeapGraph",
          "type": "newtype"
        },
        "index": {
          "description": "The whole graph The suggested interface is to only use lookupHeapGraph as the internal representation may change Nevertheless we export it here Sometimes the user knows better what he needs than we do",
          "hierarchy": "GHC HeapView",
          "module": "GHC.HeapView",
          "name": "HeapGraph",
          "package": "ghc-heap-view",
          "partial": "Heap Graph",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#t:HeapGraph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFor heap graphs, i.e. data structures that also represent sharing and\n cyclic structures, these are the entries. If the referenced value is\n \u003ccode\u003eNothing\u003c/code\u003e, then we do not have that value in the map, most likely due to\n exceeding the recursion bound passed to \u003ccode\u003e\u003ca\u003ebuildHeapGraph\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eBesides a pointer to the stored value and the closure representation we\n also keep track of whether the value was still alive at the last update of the \n heap graph. In addition we have a slot for arbitrary data, for the user's convenience.\n\u003c/p\u003e",
          "module": "GHC.HeapView",
          "name": "HeapGraphEntry",
          "package": "ghc-heap-view",
          "source": "src/GHC-HeapView.html#HeapGraphEntry",
          "type": "data"
        },
        "index": {
          "description": "For heap graphs i.e data structures that also represent sharing and cyclic structures these are the entries If the referenced value is Nothing then we do not have that value in the map most likely due to exceeding the recursion bound passed to buildHeapGraph Besides pointer to the stored value and the closure representation we also keep track of whether the value was still alive at the last update of the heap graph In addition we have slot for arbitrary data for the user convenience",
          "hierarchy": "GHC HeapView",
          "module": "GHC.HeapView",
          "name": "HeapGraphEntry",
          "package": "ghc-heap-view",
          "partial": "Heap Graph Entry",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#t:HeapGraphEntry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.HeapView",
          "name": "HeapGraphIndex",
          "package": "ghc-heap-view",
          "source": "src/GHC-HeapView.html#HeapGraphIndex",
          "type": "type"
        },
        "index": {
          "hierarchy": "GHC HeapView",
          "module": "GHC.HeapView",
          "name": "HeapGraphIndex",
          "package": "ghc-heap-view",
          "partial": "Heap Graph Index",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#t:HeapGraphIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHeap maps as tree, i.e. no sharing, no cycles.\n\u003c/p\u003e",
          "module": "GHC.HeapView",
          "name": "HeapTree",
          "package": "ghc-heap-view",
          "source": "src/GHC-HeapView.html#HeapTree",
          "type": "data"
        },
        "index": {
          "description": "Heap maps as tree i.e no sharing no cycles",
          "hierarchy": "GHC HeapView",
          "module": "GHC.HeapView",
          "name": "HeapTree",
          "package": "ghc-heap-view",
          "partial": "Heap Tree",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#t:HeapTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is a somewhat faithful representation of an info table. See\n   \u003ca\u003ehttp://hackage.haskell.org/trac/ghc/browser/includes/rts/storage/InfoTables.h\u003c/a\u003e\n   for more details on this data structure. Note that the \u003ccode\u003e\u003ca\u003eStorable\u003c/a\u003e\u003c/code\u003e instance\n   provided here does _not_ support writing.\n\u003c/p\u003e",
          "module": "GHC.HeapView",
          "name": "StgInfoTable",
          "package": "ghc-heap-view",
          "source": "src/GHC-HeapView.html#StgInfoTable",
          "type": "data"
        },
        "index": {
          "description": "This is somewhat faithful representation of an info table See http hackage.haskell.org trac ghc browser includes rts storage InfoTables.h for more details on this data structure Note that the Storable instance provided here does not support writing",
          "hierarchy": "GHC HeapView",
          "module": "GHC.HeapView",
          "name": "StgInfoTable",
          "package": "ghc-heap-view",
          "partial": "Stg Info Table",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#t:StgInfoTable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.HeapView",
          "name": "AP",
          "package": "ghc-heap-view",
          "signature": "AP",
          "source": "src/GHC-HeapView.html#ClosureType",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC HeapView",
          "module": "GHC.HeapView",
          "name": "AP",
          "package": "ghc-heap-view",
          "partial": "AP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:AP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.HeapView",
          "name": "APClosure",
          "package": "ghc-heap-view",
          "signature": "APClosure",
          "source": "src/GHC-HeapView.html#GenClosure",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC HeapView",
          "module": "GHC.HeapView",
          "name": "APClosure",
          "package": "ghc-heap-view",
          "partial": "APClosure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:APClosure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.HeapView",
          "name": "APStackClosure",
          "package": "ghc-heap-view",
          "signature": "APStackClosure",
          "source": "src/GHC-HeapView.html#GenClosure",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC HeapView",
          "module": "GHC.HeapView",
          "name": "APStackClosure",
          "package": "ghc-heap-view",
          "partial": "APStack Closure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:APStackClosure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.HeapView",
          "name": "AP_STACK",
          "package": "ghc-heap-view",
          "signature": "AP_STACK",
          "source": "src/GHC-HeapView.html#ClosureType",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC HeapView",
          "module": "GHC.HeapView",
          "name": "AP_STACK",
          "package": "ghc-heap-view",
          "partial": "AP STACK",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:AP_STACK"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.HeapView",
          "name": "ARR_WORDS",
          "package": "ghc-heap-view",
          "signature": "ARR_WORDS",
          "source": "src/GHC-HeapView.html#ClosureType",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC HeapView",
          "module": "GHC.HeapView",
          "name": "ARR_WORDS",
          "package": "ghc-heap-view",
          "partial": "ARR WORDS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:ARR_WORDS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.HeapView",
          "name": "ATOMICALLY_FRAME",
          "package": "ghc-heap-view",
          "signature": "ATOMICALLY_FRAME",
          "source": "src/GHC-HeapView.html#ClosureType",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC HeapView",
          "module": "GHC.HeapView",
          "name": "ATOMICALLY_FRAME",
          "package": "ghc-heap-view",
          "partial": "ATOMICALLY FRAME",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:ATOMICALLY_FRAME"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.HeapView",
          "name": "ArrWordsClosure",
          "package": "ghc-heap-view",
          "signature": "ArrWordsClosure",
          "source": "src/GHC-HeapView.html#GenClosure",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC HeapView",
          "module": "GHC.HeapView",
          "name": "ArrWordsClosure",
          "package": "ghc-heap-view",
          "partial": "Arr Words Closure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:ArrWordsClosure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.HeapView",
          "name": "BCO",
          "package": "ghc-heap-view",
          "signature": "BCO",
          "source": "src/GHC-HeapView.html#ClosureType",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC HeapView",
          "module": "GHC.HeapView",
          "name": "BCO",
          "package": "ghc-heap-view",
          "partial": "BCO",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:BCO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.HeapView",
          "name": "BCOClosure",
          "package": "ghc-heap-view",
          "signature": "BCOClosure",
          "source": "src/GHC-HeapView.html#GenClosure",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC HeapView",
          "module": "GHC.HeapView",
          "name": "BCOClosure",
          "package": "ghc-heap-view",
          "partial": "BCOClosure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:BCOClosure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.HeapView",
          "name": "BLACKHOLE",
          "package": "ghc-heap-view",
          "signature": "BLACKHOLE",
          "source": "src/GHC-HeapView.html#ClosureType",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC HeapView",
          "module": "GHC.HeapView",
          "name": "BLACKHOLE",
          "package": "ghc-heap-view",
          "partial": "BLACKHOLE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:BLACKHOLE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.HeapView",
          "name": "BLOCKING_QUEUE",
          "package": "ghc-heap-view",
          "signature": "BLOCKING_QUEUE",
          "source": "src/GHC-HeapView.html#ClosureType",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC HeapView",
          "module": "GHC.HeapView",
          "name": "BLOCKING_QUEUE",
          "package": "ghc-heap-view",
          "partial": "BLOCKING QUEUE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:BLOCKING_QUEUE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.HeapView",
          "name": "BlackholeClosure",
          "package": "ghc-heap-view",
          "signature": "BlackholeClosure",
          "source": "src/GHC-HeapView.html#GenClosure",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC HeapView",
          "module": "GHC.HeapView",
          "name": "BlackholeClosure",
          "package": "ghc-heap-view",
          "partial": "Blackhole Closure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:BlackholeClosure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.HeapView",
          "name": "BlockingQueueClosure",
          "package": "ghc-heap-view",
          "signature": "BlockingQueueClosure",
          "source": "src/GHC-HeapView.html#GenClosure",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC HeapView",
          "module": "GHC.HeapView",
          "name": "BlockingQueueClosure",
          "package": "ghc-heap-view",
          "partial": "Blocking Queue Closure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:BlockingQueueClosure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.HeapView",
          "name": "Box",
          "package": "ghc-heap-view",
          "signature": "Box Any",
          "source": "src/GHC-HeapView.html#Box",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC HeapView",
          "module": "GHC.HeapView",
          "name": "Box",
          "package": "ghc-heap-view",
          "partial": "Box",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:Box"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.HeapView",
          "name": "CATCH_FRAME",
          "package": "ghc-heap-view",
          "signature": "CATCH_FRAME",
          "source": "src/GHC-HeapView.html#ClosureType",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC HeapView",
          "module": "GHC.HeapView",
          "name": "CATCH_FRAME",
          "package": "ghc-heap-view",
          "partial": "CATCH FRAME",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:CATCH_FRAME"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.HeapView",
          "name": "CATCH_RETRY_FRAME",
          "package": "ghc-heap-view",
          "signature": "CATCH_RETRY_FRAME",
          "source": "src/GHC-HeapView.html#ClosureType",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC HeapView",
          "module": "GHC.HeapView",
          "name": "CATCH_RETRY_FRAME",
          "package": "ghc-heap-view",
          "partial": "CATCH RETRY FRAME",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:CATCH_RETRY_FRAME"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.HeapView",
          "name": "CATCH_STM_FRAME",
          "package": "ghc-heap-view",
          "signature": "CATCH_STM_FRAME",
          "source": "src/GHC-HeapView.html#ClosureType",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC HeapView",
          "module": "GHC.HeapView",
          "name": "CATCH_STM_FRAME",
          "package": "ghc-heap-view",
          "partial": "CATCH STM FRAME",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:CATCH_STM_FRAME"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.HeapView",
          "name": "CONSTR",
          "package": "ghc-heap-view",
          "signature": "CONSTR",
          "source": "src/GHC-HeapView.html#ClosureType",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC HeapView",
          "module": "GHC.HeapView",
          "name": "CONSTR",
          "package": "ghc-heap-view",
          "partial": "CONSTR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:CONSTR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.HeapView",
          "name": "CONSTR_0_1",
          "package": "ghc-heap-view",
          "signature": "CONSTR_0_1",
          "source": "src/GHC-HeapView.html#ClosureType",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC HeapView",
          "module": "GHC.HeapView",
          "name": "CONSTR_0_1",
          "package": "ghc-heap-view",
          "partial": "CONSTR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:CONSTR_0_1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.HeapView",
          "name": "CONSTR_0_2",
          "package": "ghc-heap-view",
          "signature": "CONSTR_0_2",
          "source": "src/GHC-HeapView.html#ClosureType",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC HeapView",
          "module": "GHC.HeapView",
          "name": "CONSTR_0_2",
          "package": "ghc-heap-view",
          "partial": "CONSTR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:CONSTR_0_2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.HeapView",
          "name": "CONSTR_1_0",
          "package": "ghc-heap-view",
          "signature": "CONSTR_1_0",
          "source": "src/GHC-HeapView.html#ClosureType",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC HeapView",
          "module": "GHC.HeapView",
          "name": "CONSTR_1_0",
          "package": "ghc-heap-view",
          "partial": "CONSTR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:CONSTR_1_0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.HeapView",
          "name": "CONSTR_1_1",
          "package": "ghc-heap-view",
          "signature": "CONSTR_1_1",
          "source": "src/GHC-HeapView.html#ClosureType",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC HeapView",
          "module": "GHC.HeapView",
          "name": "CONSTR_1_1",
          "package": "ghc-heap-view",
          "partial": "CONSTR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:CONSTR_1_1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.HeapView",
          "name": "CONSTR_2_0",
          "package": "ghc-heap-view",
          "signature": "CONSTR_2_0",
          "source": "src/GHC-HeapView.html#ClosureType",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC HeapView",
          "module": "GHC.HeapView",
          "name": "CONSTR_2_0",
          "package": "ghc-heap-view",
          "partial": "CONSTR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:CONSTR_2_0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.HeapView",
          "name": "CONSTR_NOCAF_STATIC",
          "package": "ghc-heap-view",
          "signature": "CONSTR_NOCAF_STATIC",
          "source": "src/GHC-HeapView.html#ClosureType",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC HeapView",
          "module": "GHC.HeapView",
          "name": "CONSTR_NOCAF_STATIC",
          "package": "ghc-heap-view",
          "partial": "CONSTR NOCAF STATIC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:CONSTR_NOCAF_STATIC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.HeapView",
          "name": "CONSTR_STATIC",
          "package": "ghc-heap-view",
          "signature": "CONSTR_STATIC",
          "source": "src/GHC-HeapView.html#ClosureType",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC HeapView",
          "module": "GHC.HeapView",
          "name": "CONSTR_STATIC",
          "package": "ghc-heap-view",
          "partial": "CONSTR STATIC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:CONSTR_STATIC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.HeapView",
          "name": "ConsClosure",
          "package": "ghc-heap-view",
          "signature": "ConsClosure",
          "source": "src/GHC-HeapView.html#GenClosure",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC HeapView",
          "module": "GHC.HeapView",
          "name": "ConsClosure",
          "package": "ghc-heap-view",
          "partial": "Cons Closure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:ConsClosure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.HeapView",
          "name": "EndOfHeapTree",
          "package": "ghc-heap-view",
          "signature": "EndOfHeapTree",
          "source": "src/GHC-HeapView.html#HeapTree",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC HeapView",
          "module": "GHC.HeapView",
          "name": "EndOfHeapTree",
          "package": "ghc-heap-view",
          "partial": "End Of Heap Tree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:EndOfHeapTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.HeapView",
          "name": "FUN",
          "package": "ghc-heap-view",
          "signature": "FUN",
          "source": "src/GHC-HeapView.html#ClosureType",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC HeapView",
          "module": "GHC.HeapView",
          "name": "FUN",
          "package": "ghc-heap-view",
          "partial": "FUN",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:FUN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.HeapView",
          "name": "FUN_0_1",
          "package": "ghc-heap-view",
          "signature": "FUN_0_1",
          "source": "src/GHC-HeapView.html#ClosureType",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC HeapView",
          "module": "GHC.HeapView",
          "name": "FUN_0_1",
          "package": "ghc-heap-view",
          "partial": "FUN",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:FUN_0_1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.HeapView",
          "name": "FUN_0_2",
          "package": "ghc-heap-view",
          "signature": "FUN_0_2",
          "source": "src/GHC-HeapView.html#ClosureType",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC HeapView",
          "module": "GHC.HeapView",
          "name": "FUN_0_2",
          "package": "ghc-heap-view",
          "partial": "FUN",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:FUN_0_2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.HeapView",
          "name": "FUN_1_0",
          "package": "ghc-heap-view",
          "signature": "FUN_1_0",
          "source": "src/GHC-HeapView.html#ClosureType",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC HeapView",
          "module": "GHC.HeapView",
          "name": "FUN_1_0",
          "package": "ghc-heap-view",
          "partial": "FUN",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:FUN_1_0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.HeapView",
          "name": "FUN_1_1",
          "package": "ghc-heap-view",
          "signature": "FUN_1_1",
          "source": "src/GHC-HeapView.html#ClosureType",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC HeapView",
          "module": "GHC.HeapView",
          "name": "FUN_1_1",
          "package": "ghc-heap-view",
          "partial": "FUN",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:FUN_1_1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.HeapView",
          "name": "FUN_2_0",
          "package": "ghc-heap-view",
          "signature": "FUN_2_0",
          "source": "src/GHC-HeapView.html#ClosureType",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC HeapView",
          "module": "GHC.HeapView",
          "name": "FUN_2_0",
          "package": "ghc-heap-view",
          "partial": "FUN",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:FUN_2_0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.HeapView",
          "name": "FUN_STATIC",
          "package": "ghc-heap-view",
          "signature": "FUN_STATIC",
          "source": "src/GHC-HeapView.html#ClosureType",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC HeapView",
          "module": "GHC.HeapView",
          "name": "FUN_STATIC",
          "package": "ghc-heap-view",
          "partial": "FUN STATIC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:FUN_STATIC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.HeapView",
          "name": "FunClosure",
          "package": "ghc-heap-view",
          "signature": "FunClosure",
          "source": "src/GHC-HeapView.html#GenClosure",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC HeapView",
          "module": "GHC.HeapView",
          "name": "FunClosure",
          "package": "ghc-heap-view",
          "partial": "Fun Closure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:FunClosure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.HeapView",
          "name": "HeapGraph",
          "package": "ghc-heap-view",
          "signature": "HeapGraph (IntMap (HeapGraphEntry a))",
          "source": "src/GHC-HeapView.html#HeapGraph",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC HeapView",
          "module": "GHC.HeapView",
          "name": "HeapGraph",
          "package": "ghc-heap-view",
          "partial": "Heap Graph",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:HeapGraph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.HeapView",
          "name": "HeapGraphEntry",
          "package": "ghc-heap-view",
          "signature": "HeapGraphEntry",
          "source": "src/GHC-HeapView.html#HeapGraphEntry",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC HeapView",
          "module": "GHC.HeapView",
          "name": "HeapGraphEntry",
          "package": "ghc-heap-view",
          "partial": "Heap Graph Entry",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:HeapGraphEntry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.HeapView",
          "name": "HeapTree",
          "package": "ghc-heap-view",
          "signature": "HeapTree Box (GenClosure HeapTree)",
          "source": "src/GHC-HeapView.html#HeapTree",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC HeapView",
          "module": "GHC.HeapView",
          "name": "HeapTree",
          "package": "ghc-heap-view",
          "partial": "Heap Tree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:HeapTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.HeapView",
          "name": "IND",
          "package": "ghc-heap-view",
          "signature": "IND",
          "source": "src/GHC-HeapView.html#ClosureType",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC HeapView",
          "module": "GHC.HeapView",
          "name": "IND",
          "package": "ghc-heap-view",
          "partial": "IND",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:IND"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.HeapView",
          "name": "IND_PERM",
          "package": "ghc-heap-view",
          "signature": "IND_PERM",
          "source": "src/GHC-HeapView.html#ClosureType",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC HeapView",
          "module": "GHC.HeapView",
          "name": "IND_PERM",
          "package": "ghc-heap-view",
          "partial": "IND PERM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:IND_PERM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.HeapView",
          "name": "IND_STATIC",
          "package": "ghc-heap-view",
          "signature": "IND_STATIC",
          "source": "src/GHC-HeapView.html#ClosureType",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC HeapView",
          "module": "GHC.HeapView",
          "name": "IND_STATIC",
          "package": "ghc-heap-view",
          "partial": "IND STATIC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:IND_STATIC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.HeapView",
          "name": "INVALID_OBJECT",
          "package": "ghc-heap-view",
          "signature": "INVALID_OBJECT",
          "source": "src/GHC-HeapView.html#ClosureType",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC HeapView",
          "module": "GHC.HeapView",
          "name": "INVALID_OBJECT",
          "package": "ghc-heap-view",
          "partial": "INVALID OBJECT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:INVALID_OBJECT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.HeapView",
          "name": "IndClosure",
          "package": "ghc-heap-view",
          "signature": "IndClosure",
          "source": "src/GHC-HeapView.html#GenClosure",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC HeapView",
          "module": "GHC.HeapView",
          "name": "IndClosure",
          "package": "ghc-heap-view",
          "partial": "Ind Closure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:IndClosure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.HeapView",
          "name": "MUT_ARR_PTRS_CLEAN",
          "package": "ghc-heap-view",
          "signature": "MUT_ARR_PTRS_CLEAN",
          "source": "src/GHC-HeapView.html#ClosureType",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC HeapView",
          "module": "GHC.HeapView",
          "name": "MUT_ARR_PTRS_CLEAN",
          "package": "ghc-heap-view",
          "partial": "MUT ARR PTRS CLEAN",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:MUT_ARR_PTRS_CLEAN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.HeapView",
          "name": "MUT_ARR_PTRS_DIRTY",
          "package": "ghc-heap-view",
          "signature": "MUT_ARR_PTRS_DIRTY",
          "source": "src/GHC-HeapView.html#ClosureType",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC HeapView",
          "module": "GHC.HeapView",
          "name": "MUT_ARR_PTRS_DIRTY",
          "package": "ghc-heap-view",
          "partial": "MUT ARR PTRS DIRTY",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:MUT_ARR_PTRS_DIRTY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.HeapView",
          "name": "MUT_ARR_PTRS_FROZEN",
          "package": "ghc-heap-view",
          "signature": "MUT_ARR_PTRS_FROZEN",
          "source": "src/GHC-HeapView.html#ClosureType",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC HeapView",
          "module": "GHC.HeapView",
          "name": "MUT_ARR_PTRS_FROZEN",
          "package": "ghc-heap-view",
          "partial": "MUT ARR PTRS FROZEN",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:MUT_ARR_PTRS_FROZEN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.HeapView",
          "name": "MUT_ARR_PTRS_FROZEN0",
          "package": "ghc-heap-view",
          "signature": "MUT_ARR_PTRS_FROZEN0",
          "source": "src/GHC-HeapView.html#ClosureType",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC HeapView",
          "module": "GHC.HeapView",
          "name": "MUT_ARR_PTRS_FROZEN0",
          "package": "ghc-heap-view",
          "partial": "MUT ARR PTRS FROZEN",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:MUT_ARR_PTRS_FROZEN0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.HeapView",
          "name": "MUT_PRIM",
          "package": "ghc-heap-view",
          "signature": "MUT_PRIM",
          "source": "src/GHC-HeapView.html#ClosureType",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC HeapView",
          "module": "GHC.HeapView",
          "name": "MUT_PRIM",
          "package": "ghc-heap-view",
          "partial": "MUT PRIM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:MUT_PRIM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.HeapView",
          "name": "MUT_VAR_CLEAN",
          "package": "ghc-heap-view",
          "signature": "MUT_VAR_CLEAN",
          "source": "src/GHC-HeapView.html#ClosureType",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC HeapView",
          "module": "GHC.HeapView",
          "name": "MUT_VAR_CLEAN",
          "package": "ghc-heap-view",
          "partial": "MUT VAR CLEAN",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:MUT_VAR_CLEAN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.HeapView",
          "name": "MUT_VAR_DIRTY",
          "package": "ghc-heap-view",
          "signature": "MUT_VAR_DIRTY",
          "source": "src/GHC-HeapView.html#ClosureType",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC HeapView",
          "module": "GHC.HeapView",
          "name": "MUT_VAR_DIRTY",
          "package": "ghc-heap-view",
          "partial": "MUT VAR DIRTY",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:MUT_VAR_DIRTY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.HeapView",
          "name": "MVAR_CLEAN",
          "package": "ghc-heap-view",
          "signature": "MVAR_CLEAN",
          "source": "src/GHC-HeapView.html#ClosureType",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC HeapView",
          "module": "GHC.HeapView",
          "name": "MVAR_CLEAN",
          "package": "ghc-heap-view",
          "partial": "MVAR CLEAN",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:MVAR_CLEAN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.HeapView",
          "name": "MVAR_DIRTY",
          "package": "ghc-heap-view",
          "signature": "MVAR_DIRTY",
          "source": "src/GHC-HeapView.html#ClosureType",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC HeapView",
          "module": "GHC.HeapView",
          "name": "MVAR_DIRTY",
          "package": "ghc-heap-view",
          "partial": "MVAR DIRTY",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:MVAR_DIRTY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.HeapView",
          "name": "MVarClosure",
          "package": "ghc-heap-view",
          "signature": "MVarClosure",
          "source": "src/GHC-HeapView.html#GenClosure",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC HeapView",
          "module": "GHC.HeapView",
          "name": "MVarClosure",
          "package": "ghc-heap-view",
          "partial": "MVar Closure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:MVarClosure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.HeapView",
          "name": "MutArrClosure",
          "package": "ghc-heap-view",
          "signature": "MutArrClosure",
          "source": "src/GHC-HeapView.html#GenClosure",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC HeapView",
          "module": "GHC.HeapView",
          "name": "MutArrClosure",
          "package": "ghc-heap-view",
          "partial": "Mut Arr Closure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:MutArrClosure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.HeapView",
          "name": "MutVarClosure",
          "package": "ghc-heap-view",
          "signature": "MutVarClosure",
          "source": "src/GHC-HeapView.html#GenClosure",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC HeapView",
          "module": "GHC.HeapView",
          "name": "MutVarClosure",
          "package": "ghc-heap-view",
          "partial": "Mut Var Closure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:MutVarClosure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.HeapView",
          "name": "OtherClosure",
          "package": "ghc-heap-view",
          "signature": "OtherClosure",
          "source": "src/GHC-HeapView.html#GenClosure",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC HeapView",
          "module": "GHC.HeapView",
          "name": "OtherClosure",
          "package": "ghc-heap-view",
          "partial": "Other Closure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:OtherClosure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.HeapView",
          "name": "PAP",
          "package": "ghc-heap-view",
          "signature": "PAP",
          "source": "src/GHC-HeapView.html#ClosureType",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC HeapView",
          "module": "GHC.HeapView",
          "name": "PAP",
          "package": "ghc-heap-view",
          "partial": "PAP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:PAP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.HeapView",
          "name": "PAPClosure",
          "package": "ghc-heap-view",
          "signature": "PAPClosure",
          "source": "src/GHC-HeapView.html#GenClosure",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC HeapView",
          "module": "GHC.HeapView",
          "name": "PAPClosure",
          "package": "ghc-heap-view",
          "partial": "PAPClosure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:PAPClosure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.HeapView",
          "name": "PRIM",
          "package": "ghc-heap-view",
          "signature": "PRIM",
          "source": "src/GHC-HeapView.html#ClosureType",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC HeapView",
          "module": "GHC.HeapView",
          "name": "PRIM",
          "package": "ghc-heap-view",
          "partial": "PRIM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:PRIM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.HeapView",
          "name": "RET_BCO",
          "package": "ghc-heap-view",
          "signature": "RET_BCO",
          "source": "src/GHC-HeapView.html#ClosureType",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC HeapView",
          "module": "GHC.HeapView",
          "name": "RET_BCO",
          "package": "ghc-heap-view",
          "partial": "RET BCO",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:RET_BCO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.HeapView",
          "name": "RET_BIG",
          "package": "ghc-heap-view",
          "signature": "RET_BIG",
          "source": "src/GHC-HeapView.html#ClosureType",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC HeapView",
          "module": "GHC.HeapView",
          "name": "RET_BIG",
          "package": "ghc-heap-view",
          "partial": "RET BIG",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:RET_BIG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.HeapView",
          "name": "RET_DYN",
          "package": "ghc-heap-view",
          "signature": "RET_DYN",
          "source": "src/GHC-HeapView.html#ClosureType",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC HeapView",
          "module": "GHC.HeapView",
          "name": "RET_DYN",
          "package": "ghc-heap-view",
          "partial": "RET DYN",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:RET_DYN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.HeapView",
          "name": "RET_FUN",
          "package": "ghc-heap-view",
          "signature": "RET_FUN",
          "source": "src/GHC-HeapView.html#ClosureType",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC HeapView",
          "module": "GHC.HeapView",
          "name": "RET_FUN",
          "package": "ghc-heap-view",
          "partial": "RET FUN",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:RET_FUN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.HeapView",
          "name": "RET_SMALL",
          "package": "ghc-heap-view",
          "signature": "RET_SMALL",
          "source": "src/GHC-HeapView.html#ClosureType",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC HeapView",
          "module": "GHC.HeapView",
          "name": "RET_SMALL",
          "package": "ghc-heap-view",
          "partial": "RET SMALL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:RET_SMALL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.HeapView",
          "name": "STACK",
          "package": "ghc-heap-view",
          "signature": "STACK",
          "source": "src/GHC-HeapView.html#ClosureType",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC HeapView",
          "module": "GHC.HeapView",
          "name": "STACK",
          "package": "ghc-heap-view",
          "partial": "STACK",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:STACK"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.HeapView",
          "name": "STOP_FRAME",
          "package": "ghc-heap-view",
          "signature": "STOP_FRAME",
          "source": "src/GHC-HeapView.html#ClosureType",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC HeapView",
          "module": "GHC.HeapView",
          "name": "STOP_FRAME",
          "package": "ghc-heap-view",
          "partial": "STOP FRAME",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:STOP_FRAME"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.HeapView",
          "name": "SelectorClosure",
          "package": "ghc-heap-view",
          "signature": "SelectorClosure",
          "source": "src/GHC-HeapView.html#GenClosure",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC HeapView",
          "module": "GHC.HeapView",
          "name": "SelectorClosure",
          "package": "ghc-heap-view",
          "partial": "Selector Closure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:SelectorClosure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.HeapView",
          "name": "StgInfoTable",
          "package": "ghc-heap-view",
          "signature": "StgInfoTable",
          "source": "src/GHC-HeapView.html#StgInfoTable",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC HeapView",
          "module": "GHC.HeapView",
          "name": "StgInfoTable",
          "package": "ghc-heap-view",
          "partial": "Stg Info Table",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:StgInfoTable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.HeapView",
          "name": "THUNK",
          "package": "ghc-heap-view",
          "signature": "THUNK",
          "source": "src/GHC-HeapView.html#ClosureType",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC HeapView",
          "module": "GHC.HeapView",
          "name": "THUNK",
          "package": "ghc-heap-view",
          "partial": "THUNK",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:THUNK"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.HeapView",
          "name": "THUNK_0_1",
          "package": "ghc-heap-view",
          "signature": "THUNK_0_1",
          "source": "src/GHC-HeapView.html#ClosureType",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC HeapView",
          "module": "GHC.HeapView",
          "name": "THUNK_0_1",
          "package": "ghc-heap-view",
          "partial": "THUNK",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:THUNK_0_1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.HeapView",
          "name": "THUNK_0_2",
          "package": "ghc-heap-view",
          "signature": "THUNK_0_2",
          "source": "src/GHC-HeapView.html#ClosureType",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC HeapView",
          "module": "GHC.HeapView",
          "name": "THUNK_0_2",
          "package": "ghc-heap-view",
          "partial": "THUNK",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:THUNK_0_2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.HeapView",
          "name": "THUNK_1_0",
          "package": "ghc-heap-view",
          "signature": "THUNK_1_0",
          "source": "src/GHC-HeapView.html#ClosureType",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC HeapView",
          "module": "GHC.HeapView",
          "name": "THUNK_1_0",
          "package": "ghc-heap-view",
          "partial": "THUNK",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:THUNK_1_0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.HeapView",
          "name": "THUNK_1_1",
          "package": "ghc-heap-view",
          "signature": "THUNK_1_1",
          "source": "src/GHC-HeapView.html#ClosureType",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC HeapView",
          "module": "GHC.HeapView",
          "name": "THUNK_1_1",
          "package": "ghc-heap-view",
          "partial": "THUNK",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:THUNK_1_1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.HeapView",
          "name": "THUNK_2_0",
          "package": "ghc-heap-view",
          "signature": "THUNK_2_0",
          "source": "src/GHC-HeapView.html#ClosureType",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC HeapView",
          "module": "GHC.HeapView",
          "name": "THUNK_2_0",
          "package": "ghc-heap-view",
          "partial": "THUNK",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:THUNK_2_0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.HeapView",
          "name": "THUNK_SELECTOR",
          "package": "ghc-heap-view",
          "signature": "THUNK_SELECTOR",
          "source": "src/GHC-HeapView.html#ClosureType",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC HeapView",
          "module": "GHC.HeapView",
          "name": "THUNK_SELECTOR",
          "package": "ghc-heap-view",
          "partial": "THUNK SELECTOR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:THUNK_SELECTOR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.HeapView",
          "name": "THUNK_STATIC",
          "package": "ghc-heap-view",
          "signature": "THUNK_STATIC",
          "source": "src/GHC-HeapView.html#ClosureType",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC HeapView",
          "module": "GHC.HeapView",
          "name": "THUNK_STATIC",
          "package": "ghc-heap-view",
          "partial": "THUNK STATIC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:THUNK_STATIC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.HeapView",
          "name": "TREC_CHUNK",
          "package": "ghc-heap-view",
          "signature": "TREC_CHUNK",
          "source": "src/GHC-HeapView.html#ClosureType",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC HeapView",
          "module": "GHC.HeapView",
          "name": "TREC_CHUNK",
          "package": "ghc-heap-view",
          "partial": "TREC CHUNK",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:TREC_CHUNK"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.HeapView",
          "name": "TSO",
          "package": "ghc-heap-view",
          "signature": "TSO",
          "source": "src/GHC-HeapView.html#ClosureType",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC HeapView",
          "module": "GHC.HeapView",
          "name": "TSO",
          "package": "ghc-heap-view",
          "partial": "TSO",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:TSO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.HeapView",
          "name": "ThunkClosure",
          "package": "ghc-heap-view",
          "signature": "ThunkClosure",
          "source": "src/GHC-HeapView.html#GenClosure",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC HeapView",
          "module": "GHC.HeapView",
          "name": "ThunkClosure",
          "package": "ghc-heap-view",
          "partial": "Thunk Closure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:ThunkClosure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.HeapView",
          "name": "UNDERFLOW_FRAME",
          "package": "ghc-heap-view",
          "signature": "UNDERFLOW_FRAME",
          "source": "src/GHC-HeapView.html#ClosureType",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC HeapView",
          "module": "GHC.HeapView",
          "name": "UNDERFLOW_FRAME",
          "package": "ghc-heap-view",
          "partial": "UNDERFLOW FRAME",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:UNDERFLOW_FRAME"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.HeapView",
          "name": "UPDATE_FRAME",
          "package": "ghc-heap-view",
          "signature": "UPDATE_FRAME",
          "source": "src/GHC-HeapView.html#ClosureType",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC HeapView",
          "module": "GHC.HeapView",
          "name": "UPDATE_FRAME",
          "package": "ghc-heap-view",
          "partial": "UPDATE FRAME",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:UPDATE_FRAME"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.HeapView",
          "name": "UnsupportedClosure",
          "package": "ghc-heap-view",
          "signature": "UnsupportedClosure",
          "source": "src/GHC-HeapView.html#GenClosure",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC HeapView",
          "module": "GHC.HeapView",
          "name": "UnsupportedClosure",
          "package": "ghc-heap-view",
          "partial": "Unsupported Closure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:UnsupportedClosure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.HeapView",
          "name": "WEAK",
          "package": "ghc-heap-view",
          "signature": "WEAK",
          "source": "src/GHC-HeapView.html#ClosureType",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC HeapView",
          "module": "GHC.HeapView",
          "name": "WEAK",
          "package": "ghc-heap-view",
          "partial": "WEAK",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:WEAK"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.HeapView",
          "name": "WHITEHOLE",
          "package": "ghc-heap-view",
          "signature": "WHITEHOLE",
          "source": "src/GHC-HeapView.html#ClosureType",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC HeapView",
          "module": "GHC.HeapView",
          "name": "WHITEHOLE",
          "package": "ghc-heap-view",
          "partial": "WHITEHOLE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:WHITEHOLE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdds an entry to an existing \u003ccode\u003e\u003ca\u003eHeapGraph\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eReturns the updated \u003ccode\u003e\u003ca\u003eHeapGraph\u003c/a\u003e\u003c/code\u003e and the index of the added value.\n\u003c/p\u003e",
          "module": "GHC.HeapView",
          "name": "addHeapGraph",
          "package": "ghc-heap-view",
          "signature": "Int-\u003e a-\u003e Box-\u003e HeapGraph a-\u003e IO (HeapGraphIndex, HeapGraph a)",
          "type": "function"
        },
        "index": {
          "description": "Adds an entry to an existing HeapGraph Returns the updated HeapGraph and the index of the added value",
          "hierarchy": "GHC HeapView",
          "module": "GHC.HeapView",
          "name": "addHeapGraph",
          "normalized": "Int-\u003ea-\u003eBox-\u003eHeapGraph a-\u003eIO(HeapGraphIndex,HeapGraph a)",
          "package": "ghc-heap-view",
          "partial": "Heap Graph",
          "signature": "Int-\u003ea-\u003eBox-\u003eHeapGraph a-\u003eIO(HeapGraphIndex,HeapGraph a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:addHeapGraph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFor generic code, this function returns all referenced closures. \n\u003c/p\u003e",
          "module": "GHC.HeapView",
          "name": "allPtrs",
          "package": "ghc-heap-view",
          "signature": "GenClosure b -\u003e [b]",
          "source": "src/GHC-HeapView.html#allPtrs",
          "type": "function"
        },
        "index": {
          "description": "For generic code this function returns all referenced closures",
          "hierarchy": "GHC HeapView",
          "module": "GHC.HeapView",
          "name": "allPtrs",
          "normalized": "GenClosure a-\u003e[a]",
          "package": "ghc-heap-view",
          "partial": "Ptrs",
          "signature": "GenClosure b-\u003e[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:allPtrs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdds the given annotation to the entry at the given index, using the\n \u003ccode\u003emappend\u003c/code\u003e operation of its \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e instance.\n\u003c/p\u003e",
          "module": "GHC.HeapView",
          "name": "annotateHeapGraph",
          "package": "ghc-heap-view",
          "signature": "a -\u003e HeapGraphIndex -\u003e HeapGraph a -\u003e HeapGraph a",
          "source": "src/GHC-HeapView.html#annotateHeapGraph",
          "type": "function"
        },
        "index": {
          "description": "Adds the given annotation to the entry at the given index using the mappend operation of its Monoid instance",
          "hierarchy": "GHC HeapView",
          "module": "GHC.HeapView",
          "name": "annotateHeapGraph",
          "normalized": "a-\u003eHeapGraphIndex-\u003eHeapGraph a-\u003eHeapGraph a",
          "package": "ghc-heap-view",
          "partial": "Heap Graph",
          "signature": "a-\u003eHeapGraphIndex-\u003eHeapGraph a-\u003eHeapGraph a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:annotateHeapGraph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBoxes can be compared, but this is not pure, as different heap objects can,\n after garbage collection, become the same object.\n\u003c/p\u003e",
          "module": "GHC.HeapView",
          "name": "areBoxesEqual",
          "package": "ghc-heap-view",
          "signature": "Box -\u003e Box -\u003e IO Bool",
          "source": "src/GHC-HeapView.html#areBoxesEqual",
          "type": "function"
        },
        "index": {
          "description": "Boxes can be compared but this is not pure as different heap objects can after garbage collection become the same object",
          "hierarchy": "GHC HeapView",
          "module": "GHC.HeapView",
          "name": "areBoxesEqual",
          "normalized": "Box-\u003eBox-\u003eIO Bool",
          "package": "ghc-heap-view",
          "partial": "Boxes Equal",
          "signature": "Box-\u003eBox-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:areBoxesEqual"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.HeapView",
          "name": "arity",
          "package": "ghc-heap-view",
          "signature": "HalfWord",
          "source": "src/GHC-HeapView.html#GenClosure",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC HeapView",
          "module": "GHC.HeapView",
          "name": "arity",
          "package": "ghc-heap-view",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:arity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.HeapView",
          "name": "arrWords",
          "package": "ghc-heap-view",
          "signature": "[Word]",
          "source": "src/GHC-HeapView.html#GenClosure",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC HeapView",
          "module": "GHC.HeapView",
          "name": "arrWords",
          "normalized": "[Word]",
          "package": "ghc-heap-view",
          "partial": "Words",
          "signature": "[Word]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:arrWords"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis takes an arbitrary value and puts it into a box. Note that calls like\n\u003c/p\u003e\u003cpre\u003e asBox (head list) \n\u003c/pre\u003e\u003cp\u003ewill put the thunk \"head list\" into the box, \u003cem\u003enot\u003c/em\u003e the element at the head\n  of the list. For that, use careful case expressions:\n\u003c/p\u003e\u003cpre\u003e case list of x:_ -\u003e asBox x\n\u003c/pre\u003e",
          "module": "GHC.HeapView",
          "name": "asBox",
          "package": "ghc-heap-view",
          "signature": "a -\u003e Box",
          "source": "src/GHC-HeapView.html#asBox",
          "type": "function"
        },
        "index": {
          "description": "This takes an arbitrary value and puts it into box Note that calls like asBox head list will put the thunk head list into the box not the element at the head of the list For that use careful case expressions case list of asBox",
          "hierarchy": "GHC HeapView",
          "module": "GHC.HeapView",
          "name": "asBox",
          "normalized": "a-\u003eBox",
          "package": "ghc-heap-view",
          "partial": "Box",
          "signature": "a-\u003eBox",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:asBox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.HeapView",
          "name": "bcoptrs",
          "package": "ghc-heap-view",
          "signature": "b",
          "source": "src/GHC-HeapView.html#GenClosure",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC HeapView",
          "module": "GHC.HeapView",
          "name": "bcoptrs",
          "package": "ghc-heap-view",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:bcoptrs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.HeapView",
          "name": "bitmap",
          "package": "ghc-heap-view",
          "signature": "Word",
          "source": "src/GHC-HeapView.html#GenClosure",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC HeapView",
          "module": "GHC.HeapView",
          "name": "bitmap",
          "package": "ghc-heap-view",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:bitmap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.HeapView",
          "name": "blackHole",
          "package": "ghc-heap-view",
          "signature": "b",
          "source": "src/GHC-HeapView.html#GenClosure",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC HeapView",
          "module": "GHC.HeapView",
          "name": "blackHole",
          "package": "ghc-heap-view",
          "partial": "Hole",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:blackHole"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a \u003ccode\u003e\u003ca\u003eHeapGraph\u003c/a\u003e\u003c/code\u003e for the value in the box, but not recursing further\n than the given limit. The initial value has index \u003ccode\u003e\u003ca\u003eheapGraphRoot\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "GHC.HeapView",
          "name": "buildHeapGraph",
          "package": "ghc-heap-view",
          "signature": "Int-\u003e a-\u003e Box-\u003e IO (HeapGraph a)",
          "type": "function"
        },
        "index": {
          "description": "Creates HeapGraph for the value in the box but not recursing further than the given limit The initial value has index heapGraphRoot",
          "hierarchy": "GHC HeapView",
          "module": "GHC.HeapView",
          "name": "buildHeapGraph",
          "normalized": "Int-\u003ea-\u003eBox-\u003eIO(HeapGraph a)",
          "package": "ghc-heap-view",
          "partial": "Heap Graph",
          "signature": "Int-\u003ea-\u003eBox-\u003eIO(HeapGraph a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:buildHeapGraph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructing an \u003ccode\u003e\u003ca\u003eHeapTree\u003c/a\u003e\u003c/code\u003e from a boxed value. It takes a depth parameter\n that prevents it from running ad infinitum for cyclic or infinite\n structures.\n\u003c/p\u003e",
          "module": "GHC.HeapView",
          "name": "buildHeapTree",
          "package": "ghc-heap-view",
          "signature": "Int -\u003e Box -\u003e IO HeapTree",
          "source": "src/GHC-HeapView.html#buildHeapTree",
          "type": "function"
        },
        "index": {
          "description": "Constructing an HeapTree from boxed value It takes depth parameter that prevents it from running ad infinitum for cyclic or infinite structures",
          "hierarchy": "GHC HeapView",
          "module": "GHC.HeapView",
          "name": "buildHeapTree",
          "normalized": "Int-\u003eBox-\u003eIO HeapTree",
          "package": "ghc-heap-view",
          "partial": "Heap Tree",
          "signature": "Int-\u003eBox-\u003eIO HeapTree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:buildHeapTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.HeapView",
          "name": "bytes",
          "package": "ghc-heap-view",
          "signature": "Word",
          "source": "src/GHC-HeapView.html#GenClosure",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC HeapView",
          "module": "GHC.HeapView",
          "name": "bytes",
          "package": "ghc-heap-view",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:bytes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.HeapView",
          "name": "dataArgs",
          "package": "ghc-heap-view",
          "signature": "[Word]",
          "source": "src/GHC-HeapView.html#GenClosure",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC HeapView",
          "module": "GHC.HeapView",
          "name": "dataArgs",
          "normalized": "[Word]",
          "package": "ghc-heap-view",
          "partial": "Args",
          "signature": "[Word]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:dataArgs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function integrates the disassembler in \u003ca\u003eGHC.Disassembler\u003c/a\u003e. The first\n argument should a function that dereferences the pointer in the closure to a\n closure.\n\u003c/p\u003e\u003cp\u003eIf any of these return \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e, then \u003ccode\u003e\u003ca\u003edisassembleBCO\u003c/a\u003e\u003c/code\u003e returns Nothing\n\u003c/p\u003e",
          "module": "GHC.HeapView",
          "name": "disassembleBCO",
          "package": "ghc-heap-view",
          "signature": "(a -\u003e Maybe (GenClosure b)) -\u003e GenClosure a -\u003e Maybe [BCI b]",
          "source": "src/GHC-HeapView.html#disassembleBCO",
          "type": "function"
        },
        "index": {
          "description": "This function integrates the disassembler in GHC.Disassembler The first argument should function that dereferences the pointer in the closure to closure If any of these return Nothing then disassembleBCO returns Nothing",
          "hierarchy": "GHC HeapView",
          "module": "GHC.HeapView",
          "name": "disassembleBCO",
          "normalized": "(a-\u003eMaybe(GenClosure b))-\u003eGenClosure a-\u003eMaybe[BCI b]",
          "package": "ghc-heap-view",
          "partial": "BCO",
          "signature": "(a-\u003eMaybe(GenClosure b))-\u003eGenClosure a-\u003eMaybe[BCI b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:disassembleBCO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.HeapView",
          "name": "fun",
          "package": "ghc-heap-view",
          "signature": "b",
          "source": "src/GHC-HeapView.html#GenClosure",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC HeapView",
          "module": "GHC.HeapView",
          "name": "fun",
          "package": "ghc-heap-view",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:fun"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003egetClosureData\u003c/a\u003e\u003c/code\u003e, but taking a \u003ccode\u003e\u003ca\u003eBox\u003c/a\u003e\u003c/code\u003e, so it is easier to work with.\n\u003c/p\u003e",
          "module": "GHC.HeapView",
          "name": "getBoxedClosureData",
          "package": "ghc-heap-view",
          "signature": "Box -\u003e IO Closure",
          "source": "src/GHC-HeapView.html#getBoxedClosureData",
          "type": "function"
        },
        "index": {
          "description": "Like getClosureData but taking Box so it is easier to work with",
          "hierarchy": "GHC HeapView",
          "module": "GHC.HeapView",
          "name": "getBoxedClosureData",
          "normalized": "Box-\u003eIO Closure",
          "package": "ghc-heap-view",
          "partial": "Boxed Closure Data",
          "signature": "Box-\u003eIO Closure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:getBoxedClosureData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function returns parsed heap representation of the argument _at this\n moment_, even if it is unevaluated or an indirection or other exotic stuff.\n Beware when passing something to this function, the same caveats as for\n \u003ccode\u003e\u003ca\u003easBox\u003c/a\u003e\u003c/code\u003e apply.\n\u003c/p\u003e",
          "module": "GHC.HeapView",
          "name": "getClosureData",
          "package": "ghc-heap-view",
          "signature": "a -\u003e IO Closure",
          "source": "src/GHC-HeapView.html#getClosureData",
          "type": "function"
        },
        "index": {
          "description": "This function returns parsed heap representation of the argument at this moment even if it is unevaluated or an indirection or other exotic stuff Beware when passing something to this function the same caveats as for asBox apply",
          "hierarchy": "GHC HeapView",
          "module": "GHC.HeapView",
          "name": "getClosureData",
          "normalized": "a-\u003eIO Closure",
          "package": "ghc-heap-view",
          "partial": "Closure Data",
          "signature": "a-\u003eIO Closure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:getClosureData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis returns the raw representation of the given argument. The second\n component of the triple are the words on the heap, and the third component\n are those words that are actually pointers. Once back in Haskell word, the\n \u003ccode\u003e\u003ca\u003eWord\u003c/a\u003e\u003c/code\u003e  may be outdated after a garbage collector run, but the corresponding\n \u003ccode\u003e\u003ca\u003eBox\u003c/a\u003e\u003c/code\u003e will still point to the correct value.\n\u003c/p\u003e",
          "module": "GHC.HeapView",
          "name": "getClosureRaw",
          "package": "ghc-heap-view",
          "signature": "a -\u003e IO (Ptr StgInfoTable, [Word], [Box])",
          "source": "src/GHC-HeapView.html#getClosureRaw",
          "type": "function"
        },
        "index": {
          "description": "This returns the raw representation of the given argument The second component of the triple are the words on the heap and the third component are those words that are actually pointers Once back in Haskell word the Word may be outdated after garbage collector run but the corresponding Box will still point to the correct value",
          "hierarchy": "GHC HeapView",
          "module": "GHC.HeapView",
          "name": "getClosureRaw",
          "normalized": "a-\u003eIO(Ptr StgInfoTable,[Word],[Box])",
          "package": "ghc-heap-view",
          "partial": "Closure Raw",
          "signature": "a-\u003eIO(Ptr StgInfoTable,[Word],[Box])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:getClosureRaw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.HeapView",
          "name": "heapGraphRoot",
          "package": "ghc-heap-view",
          "signature": "HeapGraphIndex",
          "source": "src/GHC-HeapView.html#heapGraphRoot",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC HeapView",
          "module": "GHC.HeapView",
          "name": "heapGraphRoot",
          "package": "ghc-heap-view",
          "partial": "Graph Root",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:heapGraphRoot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.HeapView",
          "name": "hgeBox",
          "package": "ghc-heap-view",
          "signature": "Box",
          "source": "src/GHC-HeapView.html#HeapGraphEntry",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC HeapView",
          "module": "GHC.HeapView",
          "name": "hgeBox",
          "package": "ghc-heap-view",
          "partial": "Box",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:hgeBox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.HeapView",
          "name": "hgeClosure",
          "package": "ghc-heap-view",
          "signature": "GenClosure (Maybe HeapGraphIndex)",
          "source": "src/GHC-HeapView.html#HeapGraphEntry",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC HeapView",
          "module": "GHC.HeapView",
          "name": "hgeClosure",
          "package": "ghc-heap-view",
          "partial": "Closure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:hgeClosure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.HeapView",
          "name": "hgeData",
          "package": "ghc-heap-view",
          "signature": "a",
          "source": "src/GHC-HeapView.html#HeapGraphEntry",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC HeapView",
          "module": "GHC.HeapView",
          "name": "hgeData",
          "package": "ghc-heap-view",
          "partial": "Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:hgeData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.HeapView",
          "name": "hgeLive",
          "package": "ghc-heap-view",
          "signature": "Bool",
          "source": "src/GHC-HeapView.html#HeapGraphEntry",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC HeapView",
          "module": "GHC.HeapView",
          "name": "hgeLive",
          "package": "ghc-heap-view",
          "partial": "Live",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:hgeLive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.HeapView",
          "name": "hvalues",
          "package": "ghc-heap-view",
          "signature": "[b]",
          "source": "src/GHC-HeapView.html#GenClosure",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC HeapView",
          "module": "GHC.HeapView",
          "name": "hvalues",
          "normalized": "[a]",
          "package": "ghc-heap-view",
          "signature": "[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:hvalues"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.HeapView",
          "name": "indirectee",
          "package": "ghc-heap-view",
          "signature": "b",
          "source": "src/GHC-HeapView.html#GenClosure",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC HeapView",
          "module": "GHC.HeapView",
          "name": "indirectee",
          "package": "ghc-heap-view",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:indirectee"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.HeapView",
          "name": "info",
          "package": "ghc-heap-view",
          "signature": "StgInfoTable",
          "source": "src/GHC-HeapView.html#GenClosure",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC HeapView",
          "module": "GHC.HeapView",
          "name": "info",
          "package": "ghc-heap-view",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:info"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.HeapView",
          "name": "instrs",
          "package": "ghc-heap-view",
          "signature": "b",
          "source": "src/GHC-HeapView.html#GenClosure",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC HeapView",
          "module": "GHC.HeapView",
          "name": "instrs",
          "package": "ghc-heap-view",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:instrs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.HeapView",
          "name": "link",
          "package": "ghc-heap-view",
          "signature": "b",
          "source": "src/GHC-HeapView.html#GenClosure",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC HeapView",
          "module": "GHC.HeapView",
          "name": "link",
          "package": "ghc-heap-view",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:link"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.HeapView",
          "name": "literals",
          "package": "ghc-heap-view",
          "signature": "b",
          "source": "src/GHC-HeapView.html#GenClosure",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC HeapView",
          "module": "GHC.HeapView",
          "name": "literals",
          "package": "ghc-heap-view",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:literals"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.HeapView",
          "name": "lookupHeapGraph",
          "package": "ghc-heap-view",
          "signature": "HeapGraphIndex -\u003e HeapGraph a -\u003e Maybe (HeapGraphEntry a)",
          "source": "src/GHC-HeapView.html#lookupHeapGraph",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC HeapView",
          "module": "GHC.HeapView",
          "name": "lookupHeapGraph",
          "normalized": "HeapGraphIndex-\u003eHeapGraph a-\u003eMaybe(HeapGraphEntry a)",
          "package": "ghc-heap-view",
          "partial": "Heap Graph",
          "signature": "HeapGraphIndex-\u003eHeapGraph a-\u003eMaybe(HeapGraphEntry a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:lookupHeapGraph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.HeapView",
          "name": "mccPayload",
          "package": "ghc-heap-view",
          "signature": "[b]",
          "source": "src/GHC-HeapView.html#GenClosure",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC HeapView",
          "module": "GHC.HeapView",
          "name": "mccPayload",
          "normalized": "[a]",
          "package": "ghc-heap-view",
          "partial": "Payload",
          "signature": "[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:mccPayload"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.HeapView",
          "name": "mccPtrs",
          "package": "ghc-heap-view",
          "signature": "Word",
          "source": "src/GHC-HeapView.html#GenClosure",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC HeapView",
          "module": "GHC.HeapView",
          "name": "mccPtrs",
          "package": "ghc-heap-view",
          "partial": "Ptrs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:mccPtrs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.HeapView",
          "name": "mccSize",
          "package": "ghc-heap-view",
          "signature": "Word",
          "source": "src/GHC-HeapView.html#GenClosure",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC HeapView",
          "module": "GHC.HeapView",
          "name": "mccSize",
          "package": "ghc-heap-view",
          "partial": "Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:mccSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.HeapView",
          "name": "modl",
          "package": "ghc-heap-view",
          "signature": "String",
          "source": "src/GHC-HeapView.html#GenClosure",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC HeapView",
          "module": "GHC.HeapView",
          "name": "modl",
          "package": "ghc-heap-view",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:modl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a \u003ccode\u003e\u003ca\u003eHeapGraph\u003c/a\u003e\u003c/code\u003e for the values in multiple boxes, but not recursing\n   further than the given limit.\n\u003c/p\u003e\u003cp\u003eReturns the \u003ccode\u003e\u003ca\u003eHeapGraph\u003c/a\u003e\u003c/code\u003e and the indices of initial values. The arbitrary\n   type \u003ccode\u003ea\u003c/code\u003e can be used to make the connection between the input and the\n   resulting list of indices, and to store additional data.\n\u003c/p\u003e",
          "module": "GHC.HeapView",
          "name": "multiBuildHeapGraph",
          "package": "ghc-heap-view",
          "signature": "Int-\u003e [(a, Box)]-\u003e IO (HeapGraph a, [(a, HeapGraphIndex)])",
          "type": "function"
        },
        "index": {
          "description": "Creates HeapGraph for the values in multiple boxes but not recursing further than the given limit Returns the HeapGraph and the indices of initial values The arbitrary type can be used to make the connection between the input and the resulting list of indices and to store additional data",
          "hierarchy": "GHC HeapView",
          "module": "GHC.HeapView",
          "name": "multiBuildHeapGraph",
          "normalized": "Int-\u003e[(a,Box)]-\u003eIO(HeapGraph a,[(a,HeapGraphIndex)])",
          "package": "ghc-heap-view",
          "partial": "Build Heap Graph",
          "signature": "Int-\u003e[(a,Box)]-\u003eIO(HeapGraph a,[(a,HeapGraphIndex)])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:multiBuildHeapGraph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.HeapView",
          "name": "n_args",
          "package": "ghc-heap-view",
          "signature": "HalfWord",
          "source": "src/GHC-HeapView.html#GenClosure",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC HeapView",
          "module": "GHC.HeapView",
          "name": "n_args",
          "package": "ghc-heap-view",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:n_args"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.HeapView",
          "name": "name",
          "package": "ghc-heap-view",
          "signature": "String",
          "source": "src/GHC-HeapView.html#GenClosure",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC HeapView",
          "module": "GHC.HeapView",
          "name": "name",
          "package": "ghc-heap-view",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.HeapView",
          "name": "nptrs",
          "package": "ghc-heap-view",
          "signature": "HalfWord",
          "source": "src/GHC-HeapView.html#StgInfoTable",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC HeapView",
          "module": "GHC.HeapView",
          "name": "nptrs",
          "package": "ghc-heap-view",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:nptrs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.HeapView",
          "name": "owner",
          "package": "ghc-heap-view",
          "signature": "b",
          "source": "src/GHC-HeapView.html#GenClosure",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC HeapView",
          "module": "GHC.HeapView",
          "name": "owner",
          "package": "ghc-heap-view",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:owner"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.HeapView",
          "name": "payload",
          "package": "ghc-heap-view",
          "signature": "[b]",
          "source": "src/GHC-HeapView.html#GenClosure",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC HeapView",
          "module": "GHC.HeapView",
          "name": "payload",
          "normalized": "[a]",
          "package": "ghc-heap-view",
          "signature": "[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:payload"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.HeapView",
          "name": "pkg",
          "package": "ghc-heap-view",
          "signature": "String",
          "source": "src/GHC-HeapView.html#GenClosure",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC HeapView",
          "module": "GHC.HeapView",
          "name": "pkg",
          "package": "ghc-heap-view",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:pkg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA pretty-printer that tries to generate valid Haskell for evalutated data.\n It assumes that for the included boxes, you already replaced them by Strings\n using \u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e or, if you need to do IO, \u003ccode\u003e\u003ca\u003emapM\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe parameter gives the precedendence, to avoid avoidable parenthesises.\n\u003c/p\u003e",
          "module": "GHC.HeapView",
          "name": "ppClosure",
          "package": "ghc-heap-view",
          "signature": "(Int -\u003e b -\u003e String) -\u003e Int -\u003e GenClosure b -\u003e String",
          "source": "src/GHC-HeapView.html#ppClosure",
          "type": "function"
        },
        "index": {
          "description": "pretty-printer that tries to generate valid Haskell for evalutated data It assumes that for the included boxes you already replaced them by Strings using map or if you need to do IO mapM The parameter gives the precedendence to avoid avoidable parenthesises",
          "hierarchy": "GHC HeapView",
          "module": "GHC.HeapView",
          "name": "ppClosure",
          "normalized": "(Int-\u003ea-\u003eString)-\u003eInt-\u003eGenClosure a-\u003eString",
          "package": "ghc-heap-view",
          "partial": "Closure",
          "signature": "(Int-\u003eb-\u003eString)-\u003eInt-\u003eGenClosure b-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:ppClosure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePretty-prints a HeapGraph. The resulting string contains newlines. Example\n for \u003ccode\u003elet s = \"Ki\" in (s, s, cycle \"Ho\")\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003elet x1 = \"Ki\"\n    x6 = C# 'H' : C# 'o' : x6\nin (x1,x1,x6)\n\u003c/pre\u003e",
          "module": "GHC.HeapView",
          "name": "ppHeapGraph",
          "package": "ghc-heap-view",
          "signature": "HeapGraph a -\u003e String",
          "source": "src/GHC-HeapView.html#ppHeapGraph",
          "type": "function"
        },
        "index": {
          "description": "Pretty-prints HeapGraph The resulting string contains newlines Example for let Ki in cycle Ho let x1 Ki x6 x6 in x1 x1 x6",
          "hierarchy": "GHC HeapView",
          "module": "GHC.HeapView",
          "name": "ppHeapGraph",
          "normalized": "HeapGraph a-\u003eString",
          "package": "ghc-heap-view",
          "partial": "Heap Graph",
          "signature": "HeapGraph a-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:ppHeapGraph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePretty-Printing a heap Tree\n\u003c/p\u003e\u003cp\u003eExample output for \u003ccode\u003e[Just 4, Nothing, *something*]\u003c/code\u003e, where *something* is an\n unevaluated expression depending on the command line argument.\n\u003c/p\u003e\u003cpre\u003e[Just (I# 4),Nothing,Just (_thunk [\"arg1\",\"arg2\"])]\n\u003c/pre\u003e",
          "module": "GHC.HeapView",
          "name": "ppHeapTree",
          "package": "ghc-heap-view",
          "signature": "HeapTree -\u003e String",
          "source": "src/GHC-HeapView.html#ppHeapTree",
          "type": "function"
        },
        "index": {
          "description": "Pretty-Printing heap Tree Example output for Just Nothing something where something is an unevaluated expression depending on the command line argument Just Nothing Just thunk arg1 arg2",
          "hierarchy": "GHC HeapView",
          "module": "GHC.HeapView",
          "name": "ppHeapTree",
          "normalized": "HeapTree-\u003eString",
          "package": "ghc-heap-view",
          "partial": "Heap Tree",
          "signature": "HeapTree-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:ppHeapTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.HeapView",
          "name": "ptrArgs",
          "package": "ghc-heap-view",
          "signature": "[b]",
          "source": "src/GHC-HeapView.html#GenClosure",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC HeapView",
          "module": "GHC.HeapView",
          "name": "ptrArgs",
          "normalized": "[a]",
          "package": "ghc-heap-view",
          "partial": "Args",
          "signature": "[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:ptrArgs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.HeapView",
          "name": "ptrs",
          "package": "ghc-heap-view",
          "signature": "HalfWord",
          "source": "src/GHC-HeapView.html#StgInfoTable",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC HeapView",
          "module": "GHC.HeapView",
          "name": "ptrs",
          "package": "ghc-heap-view",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:ptrs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.HeapView",
          "name": "queue",
          "package": "ghc-heap-view",
          "signature": "b",
          "source": "src/GHC-HeapView.html#GenClosure",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC HeapView",
          "module": "GHC.HeapView",
          "name": "queue",
          "package": "ghc-heap-view",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:queue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.HeapView",
          "name": "queueHead",
          "package": "ghc-heap-view",
          "signature": "b",
          "source": "src/GHC-HeapView.html#GenClosure",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC HeapView",
          "module": "GHC.HeapView",
          "name": "queueHead",
          "package": "ghc-heap-view",
          "partial": "Head",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:queueHead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.HeapView",
          "name": "queueTail",
          "package": "ghc-heap-view",
          "signature": "b",
          "source": "src/GHC-HeapView.html#GenClosure",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC HeapView",
          "module": "GHC.HeapView",
          "name": "queueTail",
          "package": "ghc-heap-view",
          "partial": "Tail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:queueTail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.HeapView",
          "name": "rawWords",
          "package": "ghc-heap-view",
          "signature": "[Word]",
          "source": "src/GHC-HeapView.html#GenClosure",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC HeapView",
          "module": "GHC.HeapView",
          "name": "rawWords",
          "normalized": "[Word]",
          "package": "ghc-heap-view",
          "partial": "Words",
          "signature": "[Word]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:rawWords"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.HeapView",
          "name": "selectee",
          "package": "ghc-heap-view",
          "signature": "b",
          "source": "src/GHC-HeapView.html#GenClosure",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC HeapView",
          "module": "GHC.HeapView",
          "name": "selectee",
          "package": "ghc-heap-view",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:selectee"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.HeapView",
          "name": "size",
          "package": "ghc-heap-view",
          "signature": "HalfWord",
          "source": "src/GHC-HeapView.html#GenClosure",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC HeapView",
          "module": "GHC.HeapView",
          "name": "size",
          "package": "ghc-heap-view",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.HeapView",
          "name": "srtlen",
          "package": "ghc-heap-view",
          "signature": "HalfWord",
          "source": "src/GHC-HeapView.html#StgInfoTable",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC HeapView",
          "module": "GHC.HeapView",
          "name": "srtlen",
          "package": "ghc-heap-view",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:srtlen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.HeapView",
          "name": "tipe",
          "package": "ghc-heap-view",
          "signature": "ClosureType",
          "source": "src/GHC-HeapView.html#StgInfoTable",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC HeapView",
          "module": "GHC.HeapView",
          "name": "tipe",
          "package": "ghc-heap-view",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:tipe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function updates a heap graph to reflect the current state of\n closures on the heap, conforming to the following specification.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Every entry whose value has been garbage collected by now is marked as\n    dead by setting \u003ccode\u003e\u003ca\u003ehgeLive\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003eFalse\u003c/code\u003e\n  * Every entry whose value is still live gets the \u003ccode\u003e\u003ca\u003ehgeClosure\u003c/a\u003e\u003c/code\u003e field updated\n    and newly referenced closures are, up to the given depth, added to the graph.\n  * A map mapping previous indicies to the corresponding new indicies is returned as well.\n  * The closure at \u003ccode\u003e\u003ca\u003eheapGraphRoot\u003c/a\u003e\u003c/code\u003e stays at \u003ccode\u003e\u003ca\u003eheapGraphRoot\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "GHC.HeapView",
          "name": "updateHeapGraph",
          "package": "ghc-heap-view",
          "signature": "Int -\u003e HeapGraph a -\u003e IO (HeapGraph a, HeapGraphIndex -\u003e HeapGraphIndex)",
          "source": "src/GHC-HeapView.html#updateHeapGraph",
          "type": "function"
        },
        "index": {
          "description": "This function updates heap graph to reflect the current state of closures on the heap conforming to the following specification Every entry whose value has been garbage collected by now is marked as dead by setting hgeLive to False Every entry whose value is still live gets the hgeClosure field updated and newly referenced closures are up to the given depth added to the graph map mapping previous indicies to the corresponding new indicies is returned as well The closure at heapGraphRoot stays at heapGraphRoot",
          "hierarchy": "GHC HeapView",
          "module": "GHC.HeapView",
          "name": "updateHeapGraph",
          "normalized": "Int-\u003eHeapGraph a-\u003eIO(HeapGraph a,HeapGraphIndex-\u003eHeapGraphIndex)",
          "package": "ghc-heap-view",
          "partial": "Heap Graph",
          "signature": "Int-\u003eHeapGraph a-\u003eIO(HeapGraph a,HeapGraphIndex-\u003eHeapGraphIndex)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:updateHeapGraph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.HeapView",
          "name": "value",
          "package": "ghc-heap-view",
          "signature": "b",
          "source": "src/GHC-HeapView.html#GenClosure",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC HeapView",
          "module": "GHC.HeapView",
          "name": "value",
          "package": "ghc-heap-view",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:value"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.HeapView",
          "name": "var",
          "package": "ghc-heap-view",
          "signature": "b",
          "source": "src/GHC-HeapView.html#GenClosure",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC HeapView",
          "module": "GHC.HeapView",
          "name": "var",
          "package": "ghc-heap-view",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:var"
      }
    }
  ]
]