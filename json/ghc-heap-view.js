[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-AssertNF.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTo avoid space leaks and unwanted evaluation behaviour, the programmer might want his data to be fully evaluated at certians positions in the code. This can be enforced, for example, by ample use of \u003ca\u003eControl.DeepSeq\u003c/a\u003e, but this comes at a cost.\n\u003c/p\u003e\u003cp\u003eExperienced users hence use \u003ccode\u003e\u003ca\u003edeepseq\u003c/a\u003e\u003c/code\u003e only to find out about the existance of space leaks and optimize their code to not create the thunks in the first place, until the code no longer shows better performance with \u003ccode\u003edeepseq\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis module provides an alternative approach: An explicit assertion about the evaluation state. If the programmer expect a certain value to be fully evaluated at a specific point of the program (e.g. before a call to \u003ccode\u003e\u003ca\u003ewriteIORef\u003c/a\u003e\u003c/code\u003e), he can state that, and as long as assertions are enabled, this statement will be checked. In the production code the assertions can be disabled, to avoid the run-time cost.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "GHC.AssertNF",
        "fct-package": "ghc-heap-view",
        "fct-signature": "module",
        "fct-source": "src/GHC-AssertNF.html",
        "fct-type": "module",
        "title": "AssertNF"
      },
      "index": {
        "description": "To avoid space leaks and unwanted evaluation behaviour the programmer might want his data to be fully evaluated at certians positions in the code This can be enforced for example by ample use of Control.DeepSeq but this comes at cost Experienced users hence use deepseq only to find out about the existance of space leaks and optimize their code to not create the thunks in the first place until the code no longer shows better performance with deepseq This module provides an alternative approach An explicit assertion about the evaluation state If the programmer expect certain value to be fully evaluated at specific point of the program e.g before call to writeIORef he can state that and as long as assertions are enabled this statement will be checked In the production code the assertions can be disabled to avoid the run-time cost",
        "hierarchy": "GHC AssertNF",
        "module": "GHC.AssertNF",
        "name": "AssertNF",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "Assert NF",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-AssertNF.html#v:assertNF",
      "description": {
        "fct-descr": "\u003cp\u003eThe function \u003ccode\u003e\u003ca\u003eassertNF\u003c/a\u003e\u003c/code\u003e checks whether its argument is fully evaluated and\n deeply evaluated. If this is not the case, a warning is printed to the standard output,\n giving the number of thunks found and printing the shape of the unevaluated object:\n\u003c/p\u003e\u003cpre\u003e\u003e let x = 1 + 2\n\u003e let y = (x,x)\n\u003e assertNF y\nParameter not in normal form: 2 thunks found:\nlet t1 = _bco\nin (t1,t1)\n\u003e x\n3\n\u003e assertNF y\n\u003e\n\u003c/pre\u003e",
        "fct-module": "GHC.AssertNF",
        "fct-package": "ghc-heap-view",
        "fct-signature": "a -\u003e IO ()",
        "fct-source": "src/GHC-AssertNF.html#assertNF",
        "fct-type": "function",
        "title": "assertNF"
      },
      "index": {
        "description": "The function assertNF checks whether its argument is fully evaluated and deeply evaluated If this is not the case warning is printed to the standard output giving the number of thunks found and printing the shape of the unevaluated object let let assertNF Parameter not in normal form thunks found let t1 bco in t1 t1 assertNF",
        "hierarchy": "GHC AssertNF",
        "module": "GHC.AssertNF",
        "name": "assertNF",
        "normalized": "a-\u003eIO()",
        "package": "ghc-heap-view",
        "partial": "NF",
        "signature": "a-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-AssertNF.html#v:assertNFHere",
      "description": {
        "fct-descr": "\u003cp\u003eThis function, when called as \u003ccode\u003e$assertNFHere\u003c/code\u003e in a module with \u003ccode\u003e-XTemplateHaskell\u003c/code\u003e enabled, will cause the current filename and position be included in the error message:\n\u003c/p\u003e\u003cpre\u003eParameter at Test.hs:18:1 not in normal form: 2 thunks found:\nlet t1 = _bco\nin (t1,t1)\n\u003c/pre\u003e",
        "fct-module": "GHC.AssertNF",
        "fct-package": "ghc-heap-view",
        "fct-signature": "Q Exp",
        "fct-source": "src/GHC-AssertNF.html#assertNFHere",
        "fct-type": "function",
        "title": "assertNFHere"
      },
      "index": {
        "description": "This function when called as assertNFHere in module with XTemplateHaskell enabled will cause the current filename and position be included in the error message Parameter at Test.hs not in normal form thunks found let t1 bco in t1 t1",
        "hierarchy": "GHC AssertNF",
        "module": "GHC.AssertNF",
        "name": "assertNFHere",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "NFHere",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-AssertNF.html#v:assertNFNamed",
      "description": {
        "fct-descr": "\u003cp\u003eIn order to better identify the source of error messages from \u003ccode\u003e\u003ca\u003eassertNF\u003c/a\u003e\u003c/code\u003e, this variant allows you to include a name that is printed in the output:\n\u003c/p\u003e\u003cpre\u003e\u003e assertNFNamed \"y\" y\ny not in normal form: 2 thunks found:\nlet t1 = _bco\nin (t1,t1)\n\u003c/pre\u003e",
        "fct-module": "GHC.AssertNF",
        "fct-package": "ghc-heap-view",
        "fct-signature": "String -\u003e a -\u003e IO ()",
        "fct-source": "src/GHC-AssertNF.html#assertNFNamed",
        "fct-type": "function",
        "title": "assertNFNamed"
      },
      "index": {
        "description": "In order to better identify the source of error messages from assertNF this variant allows you to include name that is printed in the output assertNFNamed not in normal form thunks found let t1 bco in t1 t1",
        "hierarchy": "GHC AssertNF",
        "module": "GHC.AssertNF",
        "name": "assertNFNamed",
        "normalized": "String-\u003ea-\u003eIO()",
        "package": "ghc-heap-view",
        "partial": "NFNamed",
        "signature": "String-\u003ea-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-AssertNF.html#v:disableAssertNF",
      "description": {
        "fct-descr": "\u003cp\u003eInvoke this function at the top of your \u003ccode\u003emain\u003c/code\u003e method to turn every call\n to \u003ccode\u003e\u003ca\u003eassertNF\u003c/a\u003e\u003c/code\u003e and its variants to noops.\n\u003c/p\u003e",
        "fct-module": "GHC.AssertNF",
        "fct-package": "ghc-heap-view",
        "fct-signature": "IO ()",
        "fct-source": "src/GHC-AssertNF.html#disableAssertNF",
        "fct-type": "function",
        "title": "disableAssertNF"
      },
      "index": {
        "description": "Invoke this function at the top of your main method to turn every call to assertNF and its variants to noops",
        "hierarchy": "GHC AssertNF",
        "module": "GHC.AssertNF",
        "name": "disableAssertNF",
        "normalized": "IO()",
        "package": "ghc-heap-view",
        "partial": "Assert NF",
        "signature": "IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-AssertNF.html#v:isNF",
      "description": {
        "fct-descr": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003eassertNF\u003c/a\u003e\u003c/code\u003e that does not print anything and just returns\n \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the value is in normal form, or \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e otherwise. This function\n is not affected by \u003ccode\u003e\u003ca\u003edisableAssertNF\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "GHC.AssertNF",
        "fct-package": "ghc-heap-view",
        "fct-signature": "a -\u003e IO Bool",
        "fct-source": "src/GHC-AssertNF.html#isNF",
        "fct-type": "function",
        "title": "isNF"
      },
      "index": {
        "description": "variant of assertNF that does not print anything and just returns True if the value is in normal form or False otherwise This function is not affected by disableAssertNF",
        "hierarchy": "GHC AssertNF",
        "module": "GHC.AssertNF",
        "name": "isNF",
        "normalized": "a-\u003eIO Bool",
        "package": "ghc-heap-view",
        "partial": "NF",
        "signature": "a-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-Disassembler.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA disassembler for ByteCode objects as used by GHCi.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "GHC.Disassembler",
        "fct-package": "ghc-heap-view",
        "fct-signature": "module",
        "fct-source": "src/GHC-Disassembler.html",
        "fct-type": "module",
        "title": "Disassembler"
      },
      "index": {
        "description": "disassembler for ByteCode objects as used by GHCi",
        "hierarchy": "GHC Disassembler",
        "module": "GHC.Disassembler",
        "name": "Disassembler",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "Disassembler",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-Disassembler.html#t:BCI",
      "description": {
        "fct-descr": "\u003cp\u003eThe various byte code instructions that GHCi supports.\n\u003c/p\u003e",
        "fct-module": "GHC.Disassembler",
        "fct-package": "ghc-heap-view",
        "fct-signature": "data",
        "fct-source": "src/GHC-Disassembler.html#BCI",
        "fct-type": "data",
        "title": "BCI"
      },
      "index": {
        "description": "The various byte code instructions that GHCi supports",
        "hierarchy": "GHC Disassembler",
        "module": "GHC.Disassembler",
        "name": "BCI",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "BCI",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-Disassembler.html#v:BCIALLOC_AP",
      "description": {
        "fct-module": "GHC.Disassembler",
        "fct-package": "ghc-heap-view",
        "fct-signature": "BCIALLOC_AP Word16",
        "fct-source": "src/GHC-Disassembler.html#BCI",
        "fct-type": "function",
        "title": "BCIALLOC_AP"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC Disassembler",
        "module": "GHC.Disassembler",
        "name": "BCIALLOC_AP",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "BCIALLOC AP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-Disassembler.html#v:BCIALLOC_AP_NOUPD",
      "description": {
        "fct-module": "GHC.Disassembler",
        "fct-package": "ghc-heap-view",
        "fct-signature": "BCIALLOC_AP_NOUPD Word16",
        "fct-source": "src/GHC-Disassembler.html#BCI",
        "fct-type": "function",
        "title": "BCIALLOC_AP_NOUPD"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC Disassembler",
        "module": "GHC.Disassembler",
        "name": "BCIALLOC_AP_NOUPD",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "BCIALLOC AP NOUPD",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-Disassembler.html#v:BCIALLOC_PAP",
      "description": {
        "fct-module": "GHC.Disassembler",
        "fct-package": "ghc-heap-view",
        "fct-signature": "BCIALLOC_PAP Word16 Word16",
        "fct-source": "src/GHC-Disassembler.html#BCI",
        "fct-type": "function",
        "title": "BCIALLOC_PAP"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC Disassembler",
        "module": "GHC.Disassembler",
        "name": "BCIALLOC_PAP",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "BCIALLOC PAP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-Disassembler.html#v:BCIBRK_FUN",
      "description": {
        "fct-descr": "\u003cp\u003eWe do not parse this opcode's arguments\n\u003c/p\u003e",
        "fct-module": "GHC.Disassembler",
        "fct-package": "ghc-heap-view",
        "fct-signature": "BCIBRK_FUN",
        "fct-source": "src/GHC-Disassembler.html#BCI",
        "fct-type": "function",
        "title": "BCIBRK_FUN"
      },
      "index": {
        "description": "We do not parse this opcode arguments",
        "hierarchy": "GHC Disassembler",
        "module": "GHC.Disassembler",
        "name": "BCIBRK_FUN",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "BCIBRK FUN",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-Disassembler.html#v:BCICASEFAIL",
      "description": {
        "fct-module": "GHC.Disassembler",
        "fct-package": "ghc-heap-view",
        "fct-signature": "BCICASEFAIL",
        "fct-source": "src/GHC-Disassembler.html#BCI",
        "fct-type": "function",
        "title": "BCICASEFAIL"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC Disassembler",
        "module": "GHC.Disassembler",
        "name": "BCICASEFAIL",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "BCICASEFAIL",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-Disassembler.html#v:BCICCALL",
      "description": {
        "fct-module": "GHC.Disassembler",
        "fct-package": "ghc-heap-view",
        "fct-signature": "BCICCALL Word",
        "fct-source": "src/GHC-Disassembler.html#BCI",
        "fct-type": "function",
        "title": "BCICCALL"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC Disassembler",
        "module": "GHC.Disassembler",
        "name": "BCICCALL",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "BCICCALL",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-Disassembler.html#v:BCIENTER",
      "description": {
        "fct-module": "GHC.Disassembler",
        "fct-package": "ghc-heap-view",
        "fct-signature": "BCIENTER",
        "fct-source": "src/GHC-Disassembler.html#BCI",
        "fct-type": "function",
        "title": "BCIENTER"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC Disassembler",
        "module": "GHC.Disassembler",
        "name": "BCIENTER",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "BCIENTER",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-Disassembler.html#v:BCIJMP",
      "description": {
        "fct-module": "GHC.Disassembler",
        "fct-package": "ghc-heap-view",
        "fct-signature": "BCIJMP",
        "fct-source": "src/GHC-Disassembler.html#BCI",
        "fct-type": "function",
        "title": "BCIJMP"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC Disassembler",
        "module": "GHC.Disassembler",
        "name": "BCIJMP",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "BCIJMP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-Disassembler.html#v:BCIMKAP",
      "description": {
        "fct-module": "GHC.Disassembler",
        "fct-package": "ghc-heap-view",
        "fct-signature": "BCIMKAP Word16 Word16",
        "fct-source": "src/GHC-Disassembler.html#BCI",
        "fct-type": "function",
        "title": "BCIMKAP"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC Disassembler",
        "module": "GHC.Disassembler",
        "name": "BCIMKAP",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "BCIMKAP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-Disassembler.html#v:BCIMKPAP",
      "description": {
        "fct-module": "GHC.Disassembler",
        "fct-package": "ghc-heap-view",
        "fct-signature": "BCIMKPAP Word16 Word16",
        "fct-source": "src/GHC-Disassembler.html#BCI",
        "fct-type": "function",
        "title": "BCIMKPAP"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC Disassembler",
        "module": "GHC.Disassembler",
        "name": "BCIMKPAP",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "BCIMKPAP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-Disassembler.html#v:BCIPACK",
      "description": {
        "fct-module": "GHC.Disassembler",
        "fct-package": "ghc-heap-view",
        "fct-signature": "BCIPACK Word Word16",
        "fct-source": "src/GHC-Disassembler.html#BCI",
        "fct-type": "function",
        "title": "BCIPACK"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC Disassembler",
        "module": "GHC.Disassembler",
        "name": "BCIPACK",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "BCIPACK",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-Disassembler.html#v:BCIPUSH_ALTS",
      "description": {
        "fct-module": "GHC.Disassembler",
        "fct-package": "ghc-heap-view",
        "fct-signature": "BCIPUSH_ALTS box",
        "fct-source": "src/GHC-Disassembler.html#BCI",
        "fct-type": "function",
        "title": "BCIPUSH_ALTS"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC Disassembler",
        "module": "GHC.Disassembler",
        "name": "BCIPUSH_ALTS",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "BCIPUSH ALTS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-Disassembler.html#v:BCIPUSH_ALTS_D",
      "description": {
        "fct-module": "GHC.Disassembler",
        "fct-package": "ghc-heap-view",
        "fct-signature": "BCIPUSH_ALTS_D box",
        "fct-source": "src/GHC-Disassembler.html#BCI",
        "fct-type": "function",
        "title": "BCIPUSH_ALTS_D"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC Disassembler",
        "module": "GHC.Disassembler",
        "name": "BCIPUSH_ALTS_D",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "BCIPUSH ALTS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-Disassembler.html#v:BCIPUSH_ALTS_F",
      "description": {
        "fct-module": "GHC.Disassembler",
        "fct-package": "ghc-heap-view",
        "fct-signature": "BCIPUSH_ALTS_F box",
        "fct-source": "src/GHC-Disassembler.html#BCI",
        "fct-type": "function",
        "title": "BCIPUSH_ALTS_F"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC Disassembler",
        "module": "GHC.Disassembler",
        "name": "BCIPUSH_ALTS_F",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "BCIPUSH ALTS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-Disassembler.html#v:BCIPUSH_ALTS_L",
      "description": {
        "fct-module": "GHC.Disassembler",
        "fct-package": "ghc-heap-view",
        "fct-signature": "BCIPUSH_ALTS_L box",
        "fct-source": "src/GHC-Disassembler.html#BCI",
        "fct-type": "function",
        "title": "BCIPUSH_ALTS_L"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC Disassembler",
        "module": "GHC.Disassembler",
        "name": "BCIPUSH_ALTS_L",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "BCIPUSH ALTS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-Disassembler.html#v:BCIPUSH_ALTS_N",
      "description": {
        "fct-module": "GHC.Disassembler",
        "fct-package": "ghc-heap-view",
        "fct-signature": "BCIPUSH_ALTS_N box",
        "fct-source": "src/GHC-Disassembler.html#BCI",
        "fct-type": "function",
        "title": "BCIPUSH_ALTS_N"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC Disassembler",
        "module": "GHC.Disassembler",
        "name": "BCIPUSH_ALTS_N",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "BCIPUSH ALTS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-Disassembler.html#v:BCIPUSH_ALTS_P",
      "description": {
        "fct-module": "GHC.Disassembler",
        "fct-package": "ghc-heap-view",
        "fct-signature": "BCIPUSH_ALTS_P box",
        "fct-source": "src/GHC-Disassembler.html#BCI",
        "fct-type": "function",
        "title": "BCIPUSH_ALTS_P"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC Disassembler",
        "module": "GHC.Disassembler",
        "name": "BCIPUSH_ALTS_P",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "BCIPUSH ALTS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-Disassembler.html#v:BCIPUSH_ALTS_V",
      "description": {
        "fct-module": "GHC.Disassembler",
        "fct-package": "ghc-heap-view",
        "fct-signature": "BCIPUSH_ALTS_V box",
        "fct-source": "src/GHC-Disassembler.html#BCI",
        "fct-type": "function",
        "title": "BCIPUSH_ALTS_V"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC Disassembler",
        "module": "GHC.Disassembler",
        "name": "BCIPUSH_ALTS_V",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "BCIPUSH ALTS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-Disassembler.html#v:BCIPUSH_APPLY_D",
      "description": {
        "fct-module": "GHC.Disassembler",
        "fct-package": "ghc-heap-view",
        "fct-signature": "BCIPUSH_APPLY_D",
        "fct-source": "src/GHC-Disassembler.html#BCI",
        "fct-type": "function",
        "title": "BCIPUSH_APPLY_D"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC Disassembler",
        "module": "GHC.Disassembler",
        "name": "BCIPUSH_APPLY_D",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "BCIPUSH APPLY",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-Disassembler.html#v:BCIPUSH_APPLY_F",
      "description": {
        "fct-module": "GHC.Disassembler",
        "fct-package": "ghc-heap-view",
        "fct-signature": "BCIPUSH_APPLY_F",
        "fct-source": "src/GHC-Disassembler.html#BCI",
        "fct-type": "function",
        "title": "BCIPUSH_APPLY_F"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC Disassembler",
        "module": "GHC.Disassembler",
        "name": "BCIPUSH_APPLY_F",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "BCIPUSH APPLY",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-Disassembler.html#v:BCIPUSH_APPLY_L",
      "description": {
        "fct-module": "GHC.Disassembler",
        "fct-package": "ghc-heap-view",
        "fct-signature": "BCIPUSH_APPLY_L",
        "fct-source": "src/GHC-Disassembler.html#BCI",
        "fct-type": "function",
        "title": "BCIPUSH_APPLY_L"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC Disassembler",
        "module": "GHC.Disassembler",
        "name": "BCIPUSH_APPLY_L",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "BCIPUSH APPLY",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-Disassembler.html#v:BCIPUSH_APPLY_N",
      "description": {
        "fct-module": "GHC.Disassembler",
        "fct-package": "ghc-heap-view",
        "fct-signature": "BCIPUSH_APPLY_N",
        "fct-source": "src/GHC-Disassembler.html#BCI",
        "fct-type": "function",
        "title": "BCIPUSH_APPLY_N"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC Disassembler",
        "module": "GHC.Disassembler",
        "name": "BCIPUSH_APPLY_N",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "BCIPUSH APPLY",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-Disassembler.html#v:BCIPUSH_APPLY_P",
      "description": {
        "fct-module": "GHC.Disassembler",
        "fct-package": "ghc-heap-view",
        "fct-signature": "BCIPUSH_APPLY_P",
        "fct-source": "src/GHC-Disassembler.html#BCI",
        "fct-type": "function",
        "title": "BCIPUSH_APPLY_P"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC Disassembler",
        "module": "GHC.Disassembler",
        "name": "BCIPUSH_APPLY_P",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "BCIPUSH APPLY",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-Disassembler.html#v:BCIPUSH_APPLY_PP",
      "description": {
        "fct-module": "GHC.Disassembler",
        "fct-package": "ghc-heap-view",
        "fct-signature": "BCIPUSH_APPLY_PP",
        "fct-source": "src/GHC-Disassembler.html#BCI",
        "fct-type": "function",
        "title": "BCIPUSH_APPLY_PP"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC Disassembler",
        "module": "GHC.Disassembler",
        "name": "BCIPUSH_APPLY_PP",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "BCIPUSH APPLY PP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-Disassembler.html#v:BCIPUSH_APPLY_PPP",
      "description": {
        "fct-module": "GHC.Disassembler",
        "fct-package": "ghc-heap-view",
        "fct-signature": "BCIPUSH_APPLY_PPP",
        "fct-source": "src/GHC-Disassembler.html#BCI",
        "fct-type": "function",
        "title": "BCIPUSH_APPLY_PPP"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC Disassembler",
        "module": "GHC.Disassembler",
        "name": "BCIPUSH_APPLY_PPP",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "BCIPUSH APPLY PPP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-Disassembler.html#v:BCIPUSH_APPLY_PPPP",
      "description": {
        "fct-module": "GHC.Disassembler",
        "fct-package": "ghc-heap-view",
        "fct-signature": "BCIPUSH_APPLY_PPPP",
        "fct-source": "src/GHC-Disassembler.html#BCI",
        "fct-type": "function",
        "title": "BCIPUSH_APPLY_PPPP"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC Disassembler",
        "module": "GHC.Disassembler",
        "name": "BCIPUSH_APPLY_PPPP",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "BCIPUSH APPLY PPPP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-Disassembler.html#v:BCIPUSH_APPLY_PPPPP",
      "description": {
        "fct-module": "GHC.Disassembler",
        "fct-package": "ghc-heap-view",
        "fct-signature": "BCIPUSH_APPLY_PPPPP",
        "fct-source": "src/GHC-Disassembler.html#BCI",
        "fct-type": "function",
        "title": "BCIPUSH_APPLY_PPPPP"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC Disassembler",
        "module": "GHC.Disassembler",
        "name": "BCIPUSH_APPLY_PPPPP",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "BCIPUSH APPLY PPPPP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-Disassembler.html#v:BCIPUSH_APPLY_PPPPPP",
      "description": {
        "fct-module": "GHC.Disassembler",
        "fct-package": "ghc-heap-view",
        "fct-signature": "BCIPUSH_APPLY_PPPPPP",
        "fct-source": "src/GHC-Disassembler.html#BCI",
        "fct-type": "function",
        "title": "BCIPUSH_APPLY_PPPPPP"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC Disassembler",
        "module": "GHC.Disassembler",
        "name": "BCIPUSH_APPLY_PPPPPP",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "BCIPUSH APPLY PPPPPP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-Disassembler.html#v:BCIPUSH_APPLY_V",
      "description": {
        "fct-module": "GHC.Disassembler",
        "fct-package": "ghc-heap-view",
        "fct-signature": "BCIPUSH_APPLY_V",
        "fct-source": "src/GHC-Disassembler.html#BCI",
        "fct-type": "function",
        "title": "BCIPUSH_APPLY_V"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC Disassembler",
        "module": "GHC.Disassembler",
        "name": "BCIPUSH_APPLY_V",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "BCIPUSH APPLY",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-Disassembler.html#v:BCIPUSH_G",
      "description": {
        "fct-module": "GHC.Disassembler",
        "fct-package": "ghc-heap-view",
        "fct-signature": "BCIPUSH_G box",
        "fct-source": "src/GHC-Disassembler.html#BCI",
        "fct-type": "function",
        "title": "BCIPUSH_G"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC Disassembler",
        "module": "GHC.Disassembler",
        "name": "BCIPUSH_G",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "BCIPUSH",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-Disassembler.html#v:BCIPUSH_L",
      "description": {
        "fct-module": "GHC.Disassembler",
        "fct-package": "ghc-heap-view",
        "fct-signature": "BCIPUSH_L Word16",
        "fct-source": "src/GHC-Disassembler.html#BCI",
        "fct-type": "function",
        "title": "BCIPUSH_L"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC Disassembler",
        "module": "GHC.Disassembler",
        "name": "BCIPUSH_L",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "BCIPUSH",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-Disassembler.html#v:BCIPUSH_LL",
      "description": {
        "fct-module": "GHC.Disassembler",
        "fct-package": "ghc-heap-view",
        "fct-signature": "BCIPUSH_LL Word16 Word16",
        "fct-source": "src/GHC-Disassembler.html#BCI",
        "fct-type": "function",
        "title": "BCIPUSH_LL"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC Disassembler",
        "module": "GHC.Disassembler",
        "name": "BCIPUSH_LL",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "BCIPUSH LL",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-Disassembler.html#v:BCIPUSH_LLL",
      "description": {
        "fct-module": "GHC.Disassembler",
        "fct-package": "ghc-heap-view",
        "fct-signature": "BCIPUSH_LLL Word16 Word16 Word16",
        "fct-source": "src/GHC-Disassembler.html#BCI",
        "fct-type": "function",
        "title": "BCIPUSH_LLL"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC Disassembler",
        "module": "GHC.Disassembler",
        "name": "BCIPUSH_LLL",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "BCIPUSH LLL",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-Disassembler.html#v:BCIPUSH_UBX",
      "description": {
        "fct-module": "GHC.Disassembler",
        "fct-package": "ghc-heap-view",
        "fct-signature": "BCIPUSH_UBX [Word]",
        "fct-source": "src/GHC-Disassembler.html#BCI",
        "fct-type": "function",
        "title": "BCIPUSH_UBX"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC Disassembler",
        "module": "GHC.Disassembler",
        "name": "BCIPUSH_UBX",
        "normalized": "BCIPUSH_UBX[Word]",
        "package": "ghc-heap-view",
        "partial": "BCIPUSH UBX",
        "signature": "BCIPUSH_UBX[Word]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-Disassembler.html#v:BCIRETURN",
      "description": {
        "fct-module": "GHC.Disassembler",
        "fct-package": "ghc-heap-view",
        "fct-signature": "BCIRETURN",
        "fct-source": "src/GHC-Disassembler.html#BCI",
        "fct-type": "function",
        "title": "BCIRETURN"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC Disassembler",
        "module": "GHC.Disassembler",
        "name": "BCIRETURN",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "BCIRETURN",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-Disassembler.html#v:BCIRETURN_D",
      "description": {
        "fct-module": "GHC.Disassembler",
        "fct-package": "ghc-heap-view",
        "fct-signature": "BCIRETURN_D",
        "fct-source": "src/GHC-Disassembler.html#BCI",
        "fct-type": "function",
        "title": "BCIRETURN_D"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC Disassembler",
        "module": "GHC.Disassembler",
        "name": "BCIRETURN_D",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "BCIRETURN",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-Disassembler.html#v:BCIRETURN_F",
      "description": {
        "fct-module": "GHC.Disassembler",
        "fct-package": "ghc-heap-view",
        "fct-signature": "BCIRETURN_F",
        "fct-source": "src/GHC-Disassembler.html#BCI",
        "fct-type": "function",
        "title": "BCIRETURN_F"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC Disassembler",
        "module": "GHC.Disassembler",
        "name": "BCIRETURN_F",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "BCIRETURN",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-Disassembler.html#v:BCIRETURN_L",
      "description": {
        "fct-module": "GHC.Disassembler",
        "fct-package": "ghc-heap-view",
        "fct-signature": "BCIRETURN_L",
        "fct-source": "src/GHC-Disassembler.html#BCI",
        "fct-type": "function",
        "title": "BCIRETURN_L"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC Disassembler",
        "module": "GHC.Disassembler",
        "name": "BCIRETURN_L",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "BCIRETURN",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-Disassembler.html#v:BCIRETURN_N",
      "description": {
        "fct-module": "GHC.Disassembler",
        "fct-package": "ghc-heap-view",
        "fct-signature": "BCIRETURN_N",
        "fct-source": "src/GHC-Disassembler.html#BCI",
        "fct-type": "function",
        "title": "BCIRETURN_N"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC Disassembler",
        "module": "GHC.Disassembler",
        "name": "BCIRETURN_N",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "BCIRETURN",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-Disassembler.html#v:BCIRETURN_P",
      "description": {
        "fct-module": "GHC.Disassembler",
        "fct-package": "ghc-heap-view",
        "fct-signature": "BCIRETURN_P",
        "fct-source": "src/GHC-Disassembler.html#BCI",
        "fct-type": "function",
        "title": "BCIRETURN_P"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC Disassembler",
        "module": "GHC.Disassembler",
        "name": "BCIRETURN_P",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "BCIRETURN",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-Disassembler.html#v:BCIRETURN_V",
      "description": {
        "fct-module": "GHC.Disassembler",
        "fct-package": "ghc-heap-view",
        "fct-signature": "BCIRETURN_V",
        "fct-source": "src/GHC-Disassembler.html#BCI",
        "fct-type": "function",
        "title": "BCIRETURN_V"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC Disassembler",
        "module": "GHC.Disassembler",
        "name": "BCIRETURN_V",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "BCIRETURN",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-Disassembler.html#v:BCISLIDE",
      "description": {
        "fct-module": "GHC.Disassembler",
        "fct-package": "ghc-heap-view",
        "fct-signature": "BCISLIDE Word16 Word16",
        "fct-source": "src/GHC-Disassembler.html#BCI",
        "fct-type": "function",
        "title": "BCISLIDE"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC Disassembler",
        "module": "GHC.Disassembler",
        "name": "BCISLIDE",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "BCISLIDE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-Disassembler.html#v:BCISTKCHECK",
      "description": {
        "fct-module": "GHC.Disassembler",
        "fct-package": "ghc-heap-view",
        "fct-signature": "BCISTKCHECK Word",
        "fct-source": "src/GHC-Disassembler.html#BCI",
        "fct-type": "function",
        "title": "BCISTKCHECK"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC Disassembler",
        "module": "GHC.Disassembler",
        "name": "BCISTKCHECK",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "BCISTKCHECK",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-Disassembler.html#v:BCISWIZZLE",
      "description": {
        "fct-module": "GHC.Disassembler",
        "fct-package": "ghc-heap-view",
        "fct-signature": "BCISWIZZLE Word16 Int16",
        "fct-source": "src/GHC-Disassembler.html#BCI",
        "fct-type": "function",
        "title": "BCISWIZZLE"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC Disassembler",
        "module": "GHC.Disassembler",
        "name": "BCISWIZZLE",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "BCISWIZZLE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-Disassembler.html#v:BCITESTEQ_D",
      "description": {
        "fct-module": "GHC.Disassembler",
        "fct-package": "ghc-heap-view",
        "fct-signature": "BCITESTEQ_D Word Int",
        "fct-source": "src/GHC-Disassembler.html#BCI",
        "fct-type": "function",
        "title": "BCITESTEQ_D"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC Disassembler",
        "module": "GHC.Disassembler",
        "name": "BCITESTEQ_D",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "BCITESTEQ",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-Disassembler.html#v:BCITESTEQ_F",
      "description": {
        "fct-module": "GHC.Disassembler",
        "fct-package": "ghc-heap-view",
        "fct-signature": "BCITESTEQ_F Word Int",
        "fct-source": "src/GHC-Disassembler.html#BCI",
        "fct-type": "function",
        "title": "BCITESTEQ_F"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC Disassembler",
        "module": "GHC.Disassembler",
        "name": "BCITESTEQ_F",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "BCITESTEQ",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-Disassembler.html#v:BCITESTEQ_I",
      "description": {
        "fct-module": "GHC.Disassembler",
        "fct-package": "ghc-heap-view",
        "fct-signature": "BCITESTEQ_I Int Int",
        "fct-source": "src/GHC-Disassembler.html#BCI",
        "fct-type": "function",
        "title": "BCITESTEQ_I"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC Disassembler",
        "module": "GHC.Disassembler",
        "name": "BCITESTEQ_I",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "BCITESTEQ",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-Disassembler.html#v:BCITESTEQ_P",
      "description": {
        "fct-module": "GHC.Disassembler",
        "fct-package": "ghc-heap-view",
        "fct-signature": "BCITESTEQ_P Word16 Int",
        "fct-source": "src/GHC-Disassembler.html#BCI",
        "fct-type": "function",
        "title": "BCITESTEQ_P"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC Disassembler",
        "module": "GHC.Disassembler",
        "name": "BCITESTEQ_P",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "BCITESTEQ",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-Disassembler.html#v:BCITESTEQ_W",
      "description": {
        "fct-module": "GHC.Disassembler",
        "fct-package": "ghc-heap-view",
        "fct-signature": "BCITESTEQ_W Word Int",
        "fct-source": "src/GHC-Disassembler.html#BCI",
        "fct-type": "function",
        "title": "BCITESTEQ_W"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC Disassembler",
        "module": "GHC.Disassembler",
        "name": "BCITESTEQ_W",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "BCITESTEQ",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-Disassembler.html#v:BCITESTLT_D",
      "description": {
        "fct-module": "GHC.Disassembler",
        "fct-package": "ghc-heap-view",
        "fct-signature": "BCITESTLT_D Word Int",
        "fct-source": "src/GHC-Disassembler.html#BCI",
        "fct-type": "function",
        "title": "BCITESTLT_D"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC Disassembler",
        "module": "GHC.Disassembler",
        "name": "BCITESTLT_D",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "BCITESTLT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-Disassembler.html#v:BCITESTLT_F",
      "description": {
        "fct-module": "GHC.Disassembler",
        "fct-package": "ghc-heap-view",
        "fct-signature": "BCITESTLT_F Word Int",
        "fct-source": "src/GHC-Disassembler.html#BCI",
        "fct-type": "function",
        "title": "BCITESTLT_F"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC Disassembler",
        "module": "GHC.Disassembler",
        "name": "BCITESTLT_F",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "BCITESTLT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-Disassembler.html#v:BCITESTLT_I",
      "description": {
        "fct-module": "GHC.Disassembler",
        "fct-package": "ghc-heap-view",
        "fct-signature": "BCITESTLT_I Int Int",
        "fct-source": "src/GHC-Disassembler.html#BCI",
        "fct-type": "function",
        "title": "BCITESTLT_I"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC Disassembler",
        "module": "GHC.Disassembler",
        "name": "BCITESTLT_I",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "BCITESTLT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-Disassembler.html#v:BCITESTLT_P",
      "description": {
        "fct-module": "GHC.Disassembler",
        "fct-package": "ghc-heap-view",
        "fct-signature": "BCITESTLT_P Word16 Int",
        "fct-source": "src/GHC-Disassembler.html#BCI",
        "fct-type": "function",
        "title": "BCITESTLT_P"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC Disassembler",
        "module": "GHC.Disassembler",
        "name": "BCITESTLT_P",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "BCITESTLT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-Disassembler.html#v:BCITESTLT_W",
      "description": {
        "fct-module": "GHC.Disassembler",
        "fct-package": "ghc-heap-view",
        "fct-signature": "BCITESTLT_W Word Int",
        "fct-source": "src/GHC-Disassembler.html#BCI",
        "fct-type": "function",
        "title": "BCITESTLT_W"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC Disassembler",
        "module": "GHC.Disassembler",
        "name": "BCITESTLT_W",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "BCITESTLT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-Disassembler.html#v:BCIUNPACK",
      "description": {
        "fct-module": "GHC.Disassembler",
        "fct-package": "ghc-heap-view",
        "fct-signature": "BCIUNPACK Word16",
        "fct-source": "src/GHC-Disassembler.html#BCI",
        "fct-type": "function",
        "title": "BCIUNPACK"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC Disassembler",
        "module": "GHC.Disassembler",
        "name": "BCIUNPACK",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "BCIUNPACK",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-Disassembler.html#v:disassemble",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a list of pointers, a list of literals and a ByteString containing\n byte code instructions, disassembles them into a list of byte code instructions.\n\u003c/p\u003e",
        "fct-module": "GHC.Disassembler",
        "fct-package": "ghc-heap-view",
        "fct-signature": "forall box.  [box] -\u003e [Word] -\u003e ByteString -\u003e [BCI box]",
        "fct-source": "src/GHC-Disassembler.html#disassemble",
        "fct-type": "function",
        "title": "disassemble"
      },
      "index": {
        "description": "Given list of pointers list of literals and ByteString containing byte code instructions disassembles them into list of byte code instructions",
        "hierarchy": "GHC Disassembler",
        "module": "GHC.Disassembler",
        "name": "disassemble",
        "normalized": "a b[c]-\u003e[Word]-\u003eByteString-\u003e[BCI c]",
        "package": "ghc-heap-view",
        "partial": "",
        "signature": "forall box.[box]-\u003e[Word]-\u003eByteString-\u003e[BCI box]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-Disassembler.html#v:toBytes",
      "description": {
        "fct-descr": "\u003cp\u003eConverts the first \u003ccode\u003en\u003c/code\u003e bytes of this list of Words to a ByteString.\n\u003c/p\u003e",
        "fct-module": "GHC.Disassembler",
        "fct-package": "ghc-heap-view",
        "fct-signature": "Word -\u003e [Word] -\u003e ByteString",
        "fct-source": "src/GHC-Disassembler.html#toBytes",
        "fct-type": "function",
        "title": "toBytes"
      },
      "index": {
        "description": "Converts the first bytes of this list of Words to ByteString",
        "hierarchy": "GHC Disassembler",
        "module": "GHC.Disassembler",
        "name": "toBytes",
        "normalized": "Word-\u003e[Word]-\u003eByteString",
        "package": "ghc-heap-view",
        "partial": "Bytes",
        "signature": "Word-\u003e[Word]-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView-Debug.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUtilities to debug \u003ca\u003eGHC.HeapView\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "GHC.HeapView.Debug",
        "fct-package": "ghc-heap-view",
        "fct-signature": "module",
        "fct-source": "src/GHC-HeapView-Debug.html",
        "fct-type": "module",
        "title": "Debug"
      },
      "index": {
        "description": "Utilities to debug GHC.HeapView",
        "hierarchy": "GHC HeapView Debug",
        "module": "GHC.HeapView.Debug",
        "name": "Debug",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "Debug",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView-Debug.html#v:findM",
      "description": {
        "fct-module": "GHC.HeapView.Debug",
        "fct-package": "ghc-heap-view",
        "fct-signature": "(a -\u003e IO Bool) -\u003e [a] -\u003e IO (Maybe a)",
        "fct-source": "src/GHC-HeapView-Debug.html#findM",
        "fct-type": "function",
        "title": "findM"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC HeapView Debug",
        "module": "GHC.HeapView.Debug",
        "name": "findM",
        "normalized": "(a-\u003eIO Bool)-\u003e[a]-\u003eIO(Maybe a)",
        "package": "ghc-heap-view",
        "partial": "",
        "signature": "(a-\u003eIO Bool)-\u003e[a]-\u003eIO(Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView-Debug.html#v:isChar",
      "description": {
        "fct-module": "GHC.HeapView.Debug",
        "fct-package": "ghc-heap-view",
        "fct-signature": "GenClosure b -\u003e Maybe Char",
        "fct-source": "src/GHC-HeapView-Debug.html#isChar",
        "fct-type": "function",
        "title": "isChar"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC HeapView Debug",
        "module": "GHC.HeapView.Debug",
        "name": "isChar",
        "normalized": "GenClosure a-\u003eMaybe Char",
        "package": "ghc-heap-view",
        "partial": "Char",
        "signature": "GenClosure b-\u003eMaybe Char"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView-Debug.html#v:isCharCons",
      "description": {
        "fct-module": "GHC.HeapView.Debug",
        "fct-package": "ghc-heap-view",
        "fct-signature": "GenClosure Box -\u003e IO Bool",
        "fct-source": "src/GHC-HeapView-Debug.html#isCharCons",
        "fct-type": "function",
        "title": "isCharCons"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC HeapView Debug",
        "module": "GHC.HeapView.Debug",
        "name": "isCharCons",
        "normalized": "GenClosure Box-\u003eIO Bool",
        "package": "ghc-heap-view",
        "partial": "Char Cons",
        "signature": "GenClosure Box-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView-Debug.html#v:isCons",
      "description": {
        "fct-module": "GHC.HeapView.Debug",
        "fct-package": "ghc-heap-view",
        "fct-signature": "GenClosure b -\u003e Maybe (b, b)",
        "fct-source": "src/GHC-HeapView-Debug.html#isCons",
        "fct-type": "function",
        "title": "isCons"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC HeapView Debug",
        "module": "GHC.HeapView.Debug",
        "name": "isCons",
        "normalized": "GenClosure a-\u003eMaybe(a,a)",
        "package": "ghc-heap-view",
        "partial": "Cons",
        "signature": "GenClosure b-\u003eMaybe(b,b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView-Debug.html#v:walkHeap",
      "description": {
        "fct-descr": "\u003cp\u003eThis functions walks the heap referenced by the argument, printing the\n \"path\", i.e. the pointer indices from the initial to the current closure\n and the closure itself. When the runtime crashes, the problem is likely\n related to one of the earlier steps.\n\u003c/p\u003e",
        "fct-module": "GHC.HeapView.Debug",
        "fct-package": "ghc-heap-view",
        "fct-signature": "Bool-\u003e Bool-\u003e Box-\u003e IO ()",
        "fct-type": "function",
        "title": "walkHeap"
      },
      "index": {
        "description": "This functions walks the heap referenced by the argument printing the path i.e the pointer indices from the initial to the current closure and the closure itself When the runtime crashes the problem is likely related to one of the earlier steps",
        "hierarchy": "GHC HeapView Debug",
        "module": "GHC.HeapView.Debug",
        "name": "walkHeap",
        "normalized": "Bool-\u003eBool-\u003eBox-\u003eIO()",
        "package": "ghc-heap-view",
        "partial": "Heap",
        "signature": "Bool-\u003eBool-\u003eBox-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView-Debug.html#v:walkPrefix",
      "description": {
        "fct-module": "GHC.HeapView.Debug",
        "fct-package": "ghc-heap-view",
        "fct-signature": "[Int] -\u003e a -\u003e IO Box",
        "fct-source": "src/GHC-HeapView-Debug.html#walkPrefix",
        "fct-type": "function",
        "title": "walkPrefix"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC HeapView Debug",
        "module": "GHC.HeapView.Debug",
        "name": "walkPrefix",
        "normalized": "[Int]-\u003ea-\u003eIO Box",
        "package": "ghc-heap-view",
        "partial": "Prefix",
        "signature": "[Int]-\u003ea-\u003eIO Box"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eWith this module, you can investigate the heap representation of Haskell\nvalues, i.e. to investigate sharing and lazy evaluation.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "GHC.HeapView",
        "fct-package": "ghc-heap-view",
        "fct-signature": "module",
        "fct-source": "src/GHC-HeapView.html",
        "fct-type": "module",
        "title": "HeapView"
      },
      "index": {
        "description": "With this module you can investigate the heap representation of Haskell values i.e to investigate sharing and lazy evaluation",
        "hierarchy": "GHC HeapView",
        "module": "GHC.HeapView",
        "name": "HeapView",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "Heap View",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#t:Box",
      "description": {
        "fct-descr": "\u003cp\u003eAn arbitrarily Haskell value in a safe Box. The point is that even\n unevaluated thunks can safely be moved around inside the Box, and when\n required, e.g. in \u003ccode\u003e\u003ca\u003egetBoxedClosureData\u003c/a\u003e\u003c/code\u003e, the function knows how far it has\n to evalue the argument.\n\u003c/p\u003e",
        "fct-module": "GHC.HeapView",
        "fct-package": "ghc-heap-view",
        "fct-signature": "data",
        "fct-source": "src/GHC-HeapView.html#Box",
        "fct-type": "data",
        "title": "Box"
      },
      "index": {
        "description": "An arbitrarily Haskell value in safe Box The point is that even unevaluated thunks can safely be moved around inside the Box and when required e.g in getBoxedClosureData the function knows how far it has to evalue the argument",
        "hierarchy": "GHC HeapView",
        "module": "GHC.HeapView",
        "name": "Box",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "Box",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#t:Closure",
      "description": {
        "fct-module": "GHC.HeapView",
        "fct-package": "ghc-heap-view",
        "fct-signature": "type",
        "fct-source": "src/GHC-HeapView.html#Closure",
        "fct-type": "type",
        "title": "Closure"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC HeapView",
        "module": "GHC.HeapView",
        "name": "Closure",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "Closure",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#t:ClosureType",
      "description": {
        "fct-descr": "\u003cp\u003eA closure type enumeration, in order matching the actual value on the heap.\n   Needs to be synchronized with\n   \u003ca\u003ehttp://hackage.haskell.org/trac/ghc/browser/includes/rts/storage/ClosureTypes.h\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "GHC.HeapView",
        "fct-package": "ghc-heap-view",
        "fct-signature": "data",
        "fct-source": "src/GHC-HeapView.html#ClosureType",
        "fct-type": "data",
        "title": "ClosureType"
      },
      "index": {
        "description": "closure type enumeration in order matching the actual value on the heap Needs to be synchronized with http hackage.haskell.org trac ghc browser includes rts storage ClosureTypes.h",
        "hierarchy": "GHC HeapView",
        "module": "GHC.HeapView",
        "name": "ClosureType",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "Closure Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#t:GenClosure",
      "description": {
        "fct-descr": "\u003cp\u003eThis is the main data type of this module, representing a Haskell value on\n  the heap. This reflects\n  \u003ca\u003ehttp://hackage.haskell.org/trac/ghc/browser/includes/rts/storage/Closures.h\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eThe data type is parametrized by the type to store references in, which\n  is usually a \u003ccode\u003e\u003ca\u003eBox\u003c/a\u003e\u003c/code\u003e with appropriate type synonym \u003ccode\u003e\u003ca\u003eClosure\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "GHC.HeapView",
        "fct-package": "ghc-heap-view",
        "fct-signature": "data",
        "fct-source": "src/GHC-HeapView.html#GenClosure",
        "fct-type": "data",
        "title": "GenClosure"
      },
      "index": {
        "description": "This is the main data type of this module representing Haskell value on the heap This reflects http hackage.haskell.org trac ghc browser includes rts storage Closures.h The data type is parametrized by the type to store references in which is usually Box with appropriate type synonym Closure",
        "hierarchy": "GHC HeapView",
        "module": "GHC.HeapView",
        "name": "GenClosure",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "Gen Closure",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#t:HalfWord",
      "description": {
        "fct-module": "GHC.HeapView",
        "fct-package": "ghc-heap-view",
        "fct-signature": "type",
        "fct-source": "src/GHC-HeapView.html#HalfWord",
        "fct-type": "type",
        "title": "HalfWord"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC HeapView",
        "module": "GHC.HeapView",
        "name": "HalfWord",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "Half Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#t:HeapGraph",
      "description": {
        "fct-descr": "\u003cp\u003eThe whole graph. The suggested interface is to only use \u003ccode\u003e\u003ca\u003elookupHeapGraph\u003c/a\u003e\u003c/code\u003e,\n as the internal representation may change. Nevertheless, we export it here:\n Sometimes the user knows better what he needs than we do.\n\u003c/p\u003e",
        "fct-module": "GHC.HeapView",
        "fct-package": "ghc-heap-view",
        "fct-signature": "newtype",
        "fct-source": "src/GHC-HeapView.html#HeapGraph",
        "fct-type": "newtype",
        "title": "HeapGraph"
      },
      "index": {
        "description": "The whole graph The suggested interface is to only use lookupHeapGraph as the internal representation may change Nevertheless we export it here Sometimes the user knows better what he needs than we do",
        "hierarchy": "GHC HeapView",
        "module": "GHC.HeapView",
        "name": "HeapGraph",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "Heap Graph",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#t:HeapGraphEntry",
      "description": {
        "fct-descr": "\u003cp\u003eFor heap graphs, i.e. data structures that also represent sharing and\n cyclic structures, these are the entries. If the referenced value is\n \u003ccode\u003eNothing\u003c/code\u003e, then we do not have that value in the map, most likely due to\n exceeding the recursion bound passed to \u003ccode\u003e\u003ca\u003ebuildHeapGraph\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eBesides a pointer to the stored value and the closure representation we\n also keep track of whether the value was still alive at the last update of the \n heap graph. In addition we have a slot for arbitrary data, for the user's convenience.\n\u003c/p\u003e",
        "fct-module": "GHC.HeapView",
        "fct-package": "ghc-heap-view",
        "fct-signature": "data",
        "fct-source": "src/GHC-HeapView.html#HeapGraphEntry",
        "fct-type": "data",
        "title": "HeapGraphEntry"
      },
      "index": {
        "description": "For heap graphs i.e data structures that also represent sharing and cyclic structures these are the entries If the referenced value is Nothing then we do not have that value in the map most likely due to exceeding the recursion bound passed to buildHeapGraph Besides pointer to the stored value and the closure representation we also keep track of whether the value was still alive at the last update of the heap graph In addition we have slot for arbitrary data for the user convenience",
        "hierarchy": "GHC HeapView",
        "module": "GHC.HeapView",
        "name": "HeapGraphEntry",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "Heap Graph Entry",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#t:HeapGraphIndex",
      "description": {
        "fct-module": "GHC.HeapView",
        "fct-package": "ghc-heap-view",
        "fct-signature": "type",
        "fct-source": "src/GHC-HeapView.html#HeapGraphIndex",
        "fct-type": "type",
        "title": "HeapGraphIndex"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC HeapView",
        "module": "GHC.HeapView",
        "name": "HeapGraphIndex",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "Heap Graph Index",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#t:HeapTree",
      "description": {
        "fct-descr": "\u003cp\u003eHeap maps as tree, i.e. no sharing, no cycles.\n\u003c/p\u003e",
        "fct-module": "GHC.HeapView",
        "fct-package": "ghc-heap-view",
        "fct-signature": "data",
        "fct-source": "src/GHC-HeapView.html#HeapTree",
        "fct-type": "data",
        "title": "HeapTree"
      },
      "index": {
        "description": "Heap maps as tree i.e no sharing no cycles",
        "hierarchy": "GHC HeapView",
        "module": "GHC.HeapView",
        "name": "HeapTree",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "Heap Tree",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#t:StgInfoTable",
      "description": {
        "fct-descr": "\u003cp\u003eThis is a somewhat faithful representation of an info table. See\n   \u003ca\u003ehttp://hackage.haskell.org/trac/ghc/browser/includes/rts/storage/InfoTables.h\u003c/a\u003e\n   for more details on this data structure. Note that the \u003ccode\u003e\u003ca\u003eStorable\u003c/a\u003e\u003c/code\u003e instance\n   provided here does _not_ support writing.\n\u003c/p\u003e",
        "fct-module": "GHC.HeapView",
        "fct-package": "ghc-heap-view",
        "fct-signature": "data",
        "fct-source": "src/GHC-HeapView.html#StgInfoTable",
        "fct-type": "data",
        "title": "StgInfoTable"
      },
      "index": {
        "description": "This is somewhat faithful representation of an info table See http hackage.haskell.org trac ghc browser includes rts storage InfoTables.h for more details on this data structure Note that the Storable instance provided here does not support writing",
        "hierarchy": "GHC HeapView",
        "module": "GHC.HeapView",
        "name": "StgInfoTable",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "Stg Info Table",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:AP",
      "description": {
        "fct-module": "GHC.HeapView",
        "fct-package": "ghc-heap-view",
        "fct-signature": "AP",
        "fct-source": "src/GHC-HeapView.html#ClosureType",
        "fct-type": "function",
        "title": "AP"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC HeapView",
        "module": "GHC.HeapView",
        "name": "AP",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "AP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:APClosure",
      "description": {
        "fct-module": "GHC.HeapView",
        "fct-package": "ghc-heap-view",
        "fct-signature": "APClosure",
        "fct-source": "src/GHC-HeapView.html#GenClosure",
        "fct-type": "function",
        "title": "APClosure"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC HeapView",
        "module": "GHC.HeapView",
        "name": "APClosure",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "APClosure",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:APStackClosure",
      "description": {
        "fct-module": "GHC.HeapView",
        "fct-package": "ghc-heap-view",
        "fct-signature": "APStackClosure",
        "fct-source": "src/GHC-HeapView.html#GenClosure",
        "fct-type": "function",
        "title": "APStackClosure"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC HeapView",
        "module": "GHC.HeapView",
        "name": "APStackClosure",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "APStack Closure",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:AP_STACK",
      "description": {
        "fct-module": "GHC.HeapView",
        "fct-package": "ghc-heap-view",
        "fct-signature": "AP_STACK",
        "fct-source": "src/GHC-HeapView.html#ClosureType",
        "fct-type": "function",
        "title": "AP_STACK"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC HeapView",
        "module": "GHC.HeapView",
        "name": "AP_STACK",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "AP STACK",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:ARR_WORDS",
      "description": {
        "fct-module": "GHC.HeapView",
        "fct-package": "ghc-heap-view",
        "fct-signature": "ARR_WORDS",
        "fct-source": "src/GHC-HeapView.html#ClosureType",
        "fct-type": "function",
        "title": "ARR_WORDS"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC HeapView",
        "module": "GHC.HeapView",
        "name": "ARR_WORDS",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "ARR WORDS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:ATOMICALLY_FRAME",
      "description": {
        "fct-module": "GHC.HeapView",
        "fct-package": "ghc-heap-view",
        "fct-signature": "ATOMICALLY_FRAME",
        "fct-source": "src/GHC-HeapView.html#ClosureType",
        "fct-type": "function",
        "title": "ATOMICALLY_FRAME"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC HeapView",
        "module": "GHC.HeapView",
        "name": "ATOMICALLY_FRAME",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "ATOMICALLY FRAME",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:ArrWordsClosure",
      "description": {
        "fct-module": "GHC.HeapView",
        "fct-package": "ghc-heap-view",
        "fct-signature": "ArrWordsClosure",
        "fct-source": "src/GHC-HeapView.html#GenClosure",
        "fct-type": "function",
        "title": "ArrWordsClosure"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC HeapView",
        "module": "GHC.HeapView",
        "name": "ArrWordsClosure",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "Arr Words Closure",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:BCO",
      "description": {
        "fct-module": "GHC.HeapView",
        "fct-package": "ghc-heap-view",
        "fct-signature": "BCO",
        "fct-source": "src/GHC-HeapView.html#ClosureType",
        "fct-type": "function",
        "title": "BCO"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC HeapView",
        "module": "GHC.HeapView",
        "name": "BCO",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "BCO",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:BCOClosure",
      "description": {
        "fct-module": "GHC.HeapView",
        "fct-package": "ghc-heap-view",
        "fct-signature": "BCOClosure",
        "fct-source": "src/GHC-HeapView.html#GenClosure",
        "fct-type": "function",
        "title": "BCOClosure"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC HeapView",
        "module": "GHC.HeapView",
        "name": "BCOClosure",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "BCOClosure",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:BLACKHOLE",
      "description": {
        "fct-module": "GHC.HeapView",
        "fct-package": "ghc-heap-view",
        "fct-signature": "BLACKHOLE",
        "fct-source": "src/GHC-HeapView.html#ClosureType",
        "fct-type": "function",
        "title": "BLACKHOLE"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC HeapView",
        "module": "GHC.HeapView",
        "name": "BLACKHOLE",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "BLACKHOLE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:BLOCKING_QUEUE",
      "description": {
        "fct-module": "GHC.HeapView",
        "fct-package": "ghc-heap-view",
        "fct-signature": "BLOCKING_QUEUE",
        "fct-source": "src/GHC-HeapView.html#ClosureType",
        "fct-type": "function",
        "title": "BLOCKING_QUEUE"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC HeapView",
        "module": "GHC.HeapView",
        "name": "BLOCKING_QUEUE",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "BLOCKING QUEUE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:BlackholeClosure",
      "description": {
        "fct-module": "GHC.HeapView",
        "fct-package": "ghc-heap-view",
        "fct-signature": "BlackholeClosure",
        "fct-source": "src/GHC-HeapView.html#GenClosure",
        "fct-type": "function",
        "title": "BlackholeClosure"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC HeapView",
        "module": "GHC.HeapView",
        "name": "BlackholeClosure",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "Blackhole Closure",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:BlockingQueueClosure",
      "description": {
        "fct-module": "GHC.HeapView",
        "fct-package": "ghc-heap-view",
        "fct-signature": "BlockingQueueClosure",
        "fct-source": "src/GHC-HeapView.html#GenClosure",
        "fct-type": "function",
        "title": "BlockingQueueClosure"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC HeapView",
        "module": "GHC.HeapView",
        "name": "BlockingQueueClosure",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "Blocking Queue Closure",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:Box",
      "description": {
        "fct-module": "GHC.HeapView",
        "fct-package": "ghc-heap-view",
        "fct-signature": "Box Any",
        "fct-source": "src/GHC-HeapView.html#Box",
        "fct-type": "function",
        "title": "Box"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC HeapView",
        "module": "GHC.HeapView",
        "name": "Box",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "Box",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:CATCH_FRAME",
      "description": {
        "fct-module": "GHC.HeapView",
        "fct-package": "ghc-heap-view",
        "fct-signature": "CATCH_FRAME",
        "fct-source": "src/GHC-HeapView.html#ClosureType",
        "fct-type": "function",
        "title": "CATCH_FRAME"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC HeapView",
        "module": "GHC.HeapView",
        "name": "CATCH_FRAME",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "CATCH FRAME",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:CATCH_RETRY_FRAME",
      "description": {
        "fct-module": "GHC.HeapView",
        "fct-package": "ghc-heap-view",
        "fct-signature": "CATCH_RETRY_FRAME",
        "fct-source": "src/GHC-HeapView.html#ClosureType",
        "fct-type": "function",
        "title": "CATCH_RETRY_FRAME"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC HeapView",
        "module": "GHC.HeapView",
        "name": "CATCH_RETRY_FRAME",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "CATCH RETRY FRAME",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:CATCH_STM_FRAME",
      "description": {
        "fct-module": "GHC.HeapView",
        "fct-package": "ghc-heap-view",
        "fct-signature": "CATCH_STM_FRAME",
        "fct-source": "src/GHC-HeapView.html#ClosureType",
        "fct-type": "function",
        "title": "CATCH_STM_FRAME"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC HeapView",
        "module": "GHC.HeapView",
        "name": "CATCH_STM_FRAME",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "CATCH STM FRAME",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:CONSTR",
      "description": {
        "fct-module": "GHC.HeapView",
        "fct-package": "ghc-heap-view",
        "fct-signature": "CONSTR",
        "fct-source": "src/GHC-HeapView.html#ClosureType",
        "fct-type": "function",
        "title": "CONSTR"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC HeapView",
        "module": "GHC.HeapView",
        "name": "CONSTR",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "CONSTR",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:CONSTR_0_1",
      "description": {
        "fct-module": "GHC.HeapView",
        "fct-package": "ghc-heap-view",
        "fct-signature": "CONSTR_0_1",
        "fct-source": "src/GHC-HeapView.html#ClosureType",
        "fct-type": "function",
        "title": "CONSTR_0_1"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC HeapView",
        "module": "GHC.HeapView",
        "name": "CONSTR_0_1",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "CONSTR",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:CONSTR_0_2",
      "description": {
        "fct-module": "GHC.HeapView",
        "fct-package": "ghc-heap-view",
        "fct-signature": "CONSTR_0_2",
        "fct-source": "src/GHC-HeapView.html#ClosureType",
        "fct-type": "function",
        "title": "CONSTR_0_2"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC HeapView",
        "module": "GHC.HeapView",
        "name": "CONSTR_0_2",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "CONSTR",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:CONSTR_1_0",
      "description": {
        "fct-module": "GHC.HeapView",
        "fct-package": "ghc-heap-view",
        "fct-signature": "CONSTR_1_0",
        "fct-source": "src/GHC-HeapView.html#ClosureType",
        "fct-type": "function",
        "title": "CONSTR_1_0"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC HeapView",
        "module": "GHC.HeapView",
        "name": "CONSTR_1_0",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "CONSTR",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:CONSTR_1_1",
      "description": {
        "fct-module": "GHC.HeapView",
        "fct-package": "ghc-heap-view",
        "fct-signature": "CONSTR_1_1",
        "fct-source": "src/GHC-HeapView.html#ClosureType",
        "fct-type": "function",
        "title": "CONSTR_1_1"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC HeapView",
        "module": "GHC.HeapView",
        "name": "CONSTR_1_1",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "CONSTR",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:CONSTR_2_0",
      "description": {
        "fct-module": "GHC.HeapView",
        "fct-package": "ghc-heap-view",
        "fct-signature": "CONSTR_2_0",
        "fct-source": "src/GHC-HeapView.html#ClosureType",
        "fct-type": "function",
        "title": "CONSTR_2_0"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC HeapView",
        "module": "GHC.HeapView",
        "name": "CONSTR_2_0",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "CONSTR",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:CONSTR_NOCAF_STATIC",
      "description": {
        "fct-module": "GHC.HeapView",
        "fct-package": "ghc-heap-view",
        "fct-signature": "CONSTR_NOCAF_STATIC",
        "fct-source": "src/GHC-HeapView.html#ClosureType",
        "fct-type": "function",
        "title": "CONSTR_NOCAF_STATIC"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC HeapView",
        "module": "GHC.HeapView",
        "name": "CONSTR_NOCAF_STATIC",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "CONSTR NOCAF STATIC",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:CONSTR_STATIC",
      "description": {
        "fct-module": "GHC.HeapView",
        "fct-package": "ghc-heap-view",
        "fct-signature": "CONSTR_STATIC",
        "fct-source": "src/GHC-HeapView.html#ClosureType",
        "fct-type": "function",
        "title": "CONSTR_STATIC"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC HeapView",
        "module": "GHC.HeapView",
        "name": "CONSTR_STATIC",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "CONSTR STATIC",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:ConsClosure",
      "description": {
        "fct-module": "GHC.HeapView",
        "fct-package": "ghc-heap-view",
        "fct-signature": "ConsClosure",
        "fct-source": "src/GHC-HeapView.html#GenClosure",
        "fct-type": "function",
        "title": "ConsClosure"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC HeapView",
        "module": "GHC.HeapView",
        "name": "ConsClosure",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "Cons Closure",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:EndOfHeapTree",
      "description": {
        "fct-module": "GHC.HeapView",
        "fct-package": "ghc-heap-view",
        "fct-signature": "EndOfHeapTree",
        "fct-source": "src/GHC-HeapView.html#HeapTree",
        "fct-type": "function",
        "title": "EndOfHeapTree"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC HeapView",
        "module": "GHC.HeapView",
        "name": "EndOfHeapTree",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "End Of Heap Tree",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:FUN",
      "description": {
        "fct-module": "GHC.HeapView",
        "fct-package": "ghc-heap-view",
        "fct-signature": "FUN",
        "fct-source": "src/GHC-HeapView.html#ClosureType",
        "fct-type": "function",
        "title": "FUN"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC HeapView",
        "module": "GHC.HeapView",
        "name": "FUN",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "FUN",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:FUN_0_1",
      "description": {
        "fct-module": "GHC.HeapView",
        "fct-package": "ghc-heap-view",
        "fct-signature": "FUN_0_1",
        "fct-source": "src/GHC-HeapView.html#ClosureType",
        "fct-type": "function",
        "title": "FUN_0_1"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC HeapView",
        "module": "GHC.HeapView",
        "name": "FUN_0_1",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "FUN",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:FUN_0_2",
      "description": {
        "fct-module": "GHC.HeapView",
        "fct-package": "ghc-heap-view",
        "fct-signature": "FUN_0_2",
        "fct-source": "src/GHC-HeapView.html#ClosureType",
        "fct-type": "function",
        "title": "FUN_0_2"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC HeapView",
        "module": "GHC.HeapView",
        "name": "FUN_0_2",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "FUN",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:FUN_1_0",
      "description": {
        "fct-module": "GHC.HeapView",
        "fct-package": "ghc-heap-view",
        "fct-signature": "FUN_1_0",
        "fct-source": "src/GHC-HeapView.html#ClosureType",
        "fct-type": "function",
        "title": "FUN_1_0"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC HeapView",
        "module": "GHC.HeapView",
        "name": "FUN_1_0",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "FUN",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:FUN_1_1",
      "description": {
        "fct-module": "GHC.HeapView",
        "fct-package": "ghc-heap-view",
        "fct-signature": "FUN_1_1",
        "fct-source": "src/GHC-HeapView.html#ClosureType",
        "fct-type": "function",
        "title": "FUN_1_1"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC HeapView",
        "module": "GHC.HeapView",
        "name": "FUN_1_1",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "FUN",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:FUN_2_0",
      "description": {
        "fct-module": "GHC.HeapView",
        "fct-package": "ghc-heap-view",
        "fct-signature": "FUN_2_0",
        "fct-source": "src/GHC-HeapView.html#ClosureType",
        "fct-type": "function",
        "title": "FUN_2_0"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC HeapView",
        "module": "GHC.HeapView",
        "name": "FUN_2_0",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "FUN",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:FUN_STATIC",
      "description": {
        "fct-module": "GHC.HeapView",
        "fct-package": "ghc-heap-view",
        "fct-signature": "FUN_STATIC",
        "fct-source": "src/GHC-HeapView.html#ClosureType",
        "fct-type": "function",
        "title": "FUN_STATIC"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC HeapView",
        "module": "GHC.HeapView",
        "name": "FUN_STATIC",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "FUN STATIC",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:FunClosure",
      "description": {
        "fct-module": "GHC.HeapView",
        "fct-package": "ghc-heap-view",
        "fct-signature": "FunClosure",
        "fct-source": "src/GHC-HeapView.html#GenClosure",
        "fct-type": "function",
        "title": "FunClosure"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC HeapView",
        "module": "GHC.HeapView",
        "name": "FunClosure",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "Fun Closure",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:HeapGraph",
      "description": {
        "fct-module": "GHC.HeapView",
        "fct-package": "ghc-heap-view",
        "fct-signature": "HeapGraph (IntMap (HeapGraphEntry a))",
        "fct-source": "src/GHC-HeapView.html#HeapGraph",
        "fct-type": "function",
        "title": "HeapGraph"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC HeapView",
        "module": "GHC.HeapView",
        "name": "HeapGraph",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "Heap Graph",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:HeapGraphEntry",
      "description": {
        "fct-module": "GHC.HeapView",
        "fct-package": "ghc-heap-view",
        "fct-signature": "HeapGraphEntry",
        "fct-source": "src/GHC-HeapView.html#HeapGraphEntry",
        "fct-type": "function",
        "title": "HeapGraphEntry"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC HeapView",
        "module": "GHC.HeapView",
        "name": "HeapGraphEntry",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "Heap Graph Entry",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:HeapTree",
      "description": {
        "fct-module": "GHC.HeapView",
        "fct-package": "ghc-heap-view",
        "fct-signature": "HeapTree Box (GenClosure HeapTree)",
        "fct-source": "src/GHC-HeapView.html#HeapTree",
        "fct-type": "function",
        "title": "HeapTree"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC HeapView",
        "module": "GHC.HeapView",
        "name": "HeapTree",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "Heap Tree",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:IND",
      "description": {
        "fct-module": "GHC.HeapView",
        "fct-package": "ghc-heap-view",
        "fct-signature": "IND",
        "fct-source": "src/GHC-HeapView.html#ClosureType",
        "fct-type": "function",
        "title": "IND"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC HeapView",
        "module": "GHC.HeapView",
        "name": "IND",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "IND",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:IND_PERM",
      "description": {
        "fct-module": "GHC.HeapView",
        "fct-package": "ghc-heap-view",
        "fct-signature": "IND_PERM",
        "fct-source": "src/GHC-HeapView.html#ClosureType",
        "fct-type": "function",
        "title": "IND_PERM"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC HeapView",
        "module": "GHC.HeapView",
        "name": "IND_PERM",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "IND PERM",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:IND_STATIC",
      "description": {
        "fct-module": "GHC.HeapView",
        "fct-package": "ghc-heap-view",
        "fct-signature": "IND_STATIC",
        "fct-source": "src/GHC-HeapView.html#ClosureType",
        "fct-type": "function",
        "title": "IND_STATIC"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC HeapView",
        "module": "GHC.HeapView",
        "name": "IND_STATIC",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "IND STATIC",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:INVALID_OBJECT",
      "description": {
        "fct-module": "GHC.HeapView",
        "fct-package": "ghc-heap-view",
        "fct-signature": "INVALID_OBJECT",
        "fct-source": "src/GHC-HeapView.html#ClosureType",
        "fct-type": "function",
        "title": "INVALID_OBJECT"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC HeapView",
        "module": "GHC.HeapView",
        "name": "INVALID_OBJECT",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "INVALID OBJECT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:IndClosure",
      "description": {
        "fct-module": "GHC.HeapView",
        "fct-package": "ghc-heap-view",
        "fct-signature": "IndClosure",
        "fct-source": "src/GHC-HeapView.html#GenClosure",
        "fct-type": "function",
        "title": "IndClosure"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC HeapView",
        "module": "GHC.HeapView",
        "name": "IndClosure",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "Ind Closure",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:MUT_ARR_PTRS_CLEAN",
      "description": {
        "fct-module": "GHC.HeapView",
        "fct-package": "ghc-heap-view",
        "fct-signature": "MUT_ARR_PTRS_CLEAN",
        "fct-source": "src/GHC-HeapView.html#ClosureType",
        "fct-type": "function",
        "title": "MUT_ARR_PTRS_CLEAN"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC HeapView",
        "module": "GHC.HeapView",
        "name": "MUT_ARR_PTRS_CLEAN",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "MUT ARR PTRS CLEAN",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:MUT_ARR_PTRS_DIRTY",
      "description": {
        "fct-module": "GHC.HeapView",
        "fct-package": "ghc-heap-view",
        "fct-signature": "MUT_ARR_PTRS_DIRTY",
        "fct-source": "src/GHC-HeapView.html#ClosureType",
        "fct-type": "function",
        "title": "MUT_ARR_PTRS_DIRTY"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC HeapView",
        "module": "GHC.HeapView",
        "name": "MUT_ARR_PTRS_DIRTY",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "MUT ARR PTRS DIRTY",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:MUT_ARR_PTRS_FROZEN",
      "description": {
        "fct-module": "GHC.HeapView",
        "fct-package": "ghc-heap-view",
        "fct-signature": "MUT_ARR_PTRS_FROZEN",
        "fct-source": "src/GHC-HeapView.html#ClosureType",
        "fct-type": "function",
        "title": "MUT_ARR_PTRS_FROZEN"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC HeapView",
        "module": "GHC.HeapView",
        "name": "MUT_ARR_PTRS_FROZEN",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "MUT ARR PTRS FROZEN",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:MUT_ARR_PTRS_FROZEN0",
      "description": {
        "fct-module": "GHC.HeapView",
        "fct-package": "ghc-heap-view",
        "fct-signature": "MUT_ARR_PTRS_FROZEN0",
        "fct-source": "src/GHC-HeapView.html#ClosureType",
        "fct-type": "function",
        "title": "MUT_ARR_PTRS_FROZEN0"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC HeapView",
        "module": "GHC.HeapView",
        "name": "MUT_ARR_PTRS_FROZEN0",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "MUT ARR PTRS FROZEN",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:MUT_PRIM",
      "description": {
        "fct-module": "GHC.HeapView",
        "fct-package": "ghc-heap-view",
        "fct-signature": "MUT_PRIM",
        "fct-source": "src/GHC-HeapView.html#ClosureType",
        "fct-type": "function",
        "title": "MUT_PRIM"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC HeapView",
        "module": "GHC.HeapView",
        "name": "MUT_PRIM",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "MUT PRIM",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:MUT_VAR_CLEAN",
      "description": {
        "fct-module": "GHC.HeapView",
        "fct-package": "ghc-heap-view",
        "fct-signature": "MUT_VAR_CLEAN",
        "fct-source": "src/GHC-HeapView.html#ClosureType",
        "fct-type": "function",
        "title": "MUT_VAR_CLEAN"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC HeapView",
        "module": "GHC.HeapView",
        "name": "MUT_VAR_CLEAN",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "MUT VAR CLEAN",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:MUT_VAR_DIRTY",
      "description": {
        "fct-module": "GHC.HeapView",
        "fct-package": "ghc-heap-view",
        "fct-signature": "MUT_VAR_DIRTY",
        "fct-source": "src/GHC-HeapView.html#ClosureType",
        "fct-type": "function",
        "title": "MUT_VAR_DIRTY"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC HeapView",
        "module": "GHC.HeapView",
        "name": "MUT_VAR_DIRTY",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "MUT VAR DIRTY",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:MVAR_CLEAN",
      "description": {
        "fct-module": "GHC.HeapView",
        "fct-package": "ghc-heap-view",
        "fct-signature": "MVAR_CLEAN",
        "fct-source": "src/GHC-HeapView.html#ClosureType",
        "fct-type": "function",
        "title": "MVAR_CLEAN"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC HeapView",
        "module": "GHC.HeapView",
        "name": "MVAR_CLEAN",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "MVAR CLEAN",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:MVAR_DIRTY",
      "description": {
        "fct-module": "GHC.HeapView",
        "fct-package": "ghc-heap-view",
        "fct-signature": "MVAR_DIRTY",
        "fct-source": "src/GHC-HeapView.html#ClosureType",
        "fct-type": "function",
        "title": "MVAR_DIRTY"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC HeapView",
        "module": "GHC.HeapView",
        "name": "MVAR_DIRTY",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "MVAR DIRTY",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:MVarClosure",
      "description": {
        "fct-module": "GHC.HeapView",
        "fct-package": "ghc-heap-view",
        "fct-signature": "MVarClosure",
        "fct-source": "src/GHC-HeapView.html#GenClosure",
        "fct-type": "function",
        "title": "MVarClosure"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC HeapView",
        "module": "GHC.HeapView",
        "name": "MVarClosure",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "MVar Closure",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:MutArrClosure",
      "description": {
        "fct-module": "GHC.HeapView",
        "fct-package": "ghc-heap-view",
        "fct-signature": "MutArrClosure",
        "fct-source": "src/GHC-HeapView.html#GenClosure",
        "fct-type": "function",
        "title": "MutArrClosure"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC HeapView",
        "module": "GHC.HeapView",
        "name": "MutArrClosure",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "Mut Arr Closure",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:MutVarClosure",
      "description": {
        "fct-module": "GHC.HeapView",
        "fct-package": "ghc-heap-view",
        "fct-signature": "MutVarClosure",
        "fct-source": "src/GHC-HeapView.html#GenClosure",
        "fct-type": "function",
        "title": "MutVarClosure"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC HeapView",
        "module": "GHC.HeapView",
        "name": "MutVarClosure",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "Mut Var Closure",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:OtherClosure",
      "description": {
        "fct-module": "GHC.HeapView",
        "fct-package": "ghc-heap-view",
        "fct-signature": "OtherClosure",
        "fct-source": "src/GHC-HeapView.html#GenClosure",
        "fct-type": "function",
        "title": "OtherClosure"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC HeapView",
        "module": "GHC.HeapView",
        "name": "OtherClosure",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "Other Closure",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:PAP",
      "description": {
        "fct-module": "GHC.HeapView",
        "fct-package": "ghc-heap-view",
        "fct-signature": "PAP",
        "fct-source": "src/GHC-HeapView.html#ClosureType",
        "fct-type": "function",
        "title": "PAP"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC HeapView",
        "module": "GHC.HeapView",
        "name": "PAP",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "PAP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:PAPClosure",
      "description": {
        "fct-module": "GHC.HeapView",
        "fct-package": "ghc-heap-view",
        "fct-signature": "PAPClosure",
        "fct-source": "src/GHC-HeapView.html#GenClosure",
        "fct-type": "function",
        "title": "PAPClosure"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC HeapView",
        "module": "GHC.HeapView",
        "name": "PAPClosure",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "PAPClosure",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:PRIM",
      "description": {
        "fct-module": "GHC.HeapView",
        "fct-package": "ghc-heap-view",
        "fct-signature": "PRIM",
        "fct-source": "src/GHC-HeapView.html#ClosureType",
        "fct-type": "function",
        "title": "PRIM"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC HeapView",
        "module": "GHC.HeapView",
        "name": "PRIM",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "PRIM",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:RET_BCO",
      "description": {
        "fct-module": "GHC.HeapView",
        "fct-package": "ghc-heap-view",
        "fct-signature": "RET_BCO",
        "fct-source": "src/GHC-HeapView.html#ClosureType",
        "fct-type": "function",
        "title": "RET_BCO"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC HeapView",
        "module": "GHC.HeapView",
        "name": "RET_BCO",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "RET BCO",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:RET_BIG",
      "description": {
        "fct-module": "GHC.HeapView",
        "fct-package": "ghc-heap-view",
        "fct-signature": "RET_BIG",
        "fct-source": "src/GHC-HeapView.html#ClosureType",
        "fct-type": "function",
        "title": "RET_BIG"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC HeapView",
        "module": "GHC.HeapView",
        "name": "RET_BIG",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "RET BIG",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:RET_DYN",
      "description": {
        "fct-module": "GHC.HeapView",
        "fct-package": "ghc-heap-view",
        "fct-signature": "RET_DYN",
        "fct-source": "src/GHC-HeapView.html#ClosureType",
        "fct-type": "function",
        "title": "RET_DYN"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC HeapView",
        "module": "GHC.HeapView",
        "name": "RET_DYN",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "RET DYN",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:RET_FUN",
      "description": {
        "fct-module": "GHC.HeapView",
        "fct-package": "ghc-heap-view",
        "fct-signature": "RET_FUN",
        "fct-source": "src/GHC-HeapView.html#ClosureType",
        "fct-type": "function",
        "title": "RET_FUN"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC HeapView",
        "module": "GHC.HeapView",
        "name": "RET_FUN",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "RET FUN",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:RET_SMALL",
      "description": {
        "fct-module": "GHC.HeapView",
        "fct-package": "ghc-heap-view",
        "fct-signature": "RET_SMALL",
        "fct-source": "src/GHC-HeapView.html#ClosureType",
        "fct-type": "function",
        "title": "RET_SMALL"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC HeapView",
        "module": "GHC.HeapView",
        "name": "RET_SMALL",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "RET SMALL",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:STACK",
      "description": {
        "fct-module": "GHC.HeapView",
        "fct-package": "ghc-heap-view",
        "fct-signature": "STACK",
        "fct-source": "src/GHC-HeapView.html#ClosureType",
        "fct-type": "function",
        "title": "STACK"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC HeapView",
        "module": "GHC.HeapView",
        "name": "STACK",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "STACK",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:STOP_FRAME",
      "description": {
        "fct-module": "GHC.HeapView",
        "fct-package": "ghc-heap-view",
        "fct-signature": "STOP_FRAME",
        "fct-source": "src/GHC-HeapView.html#ClosureType",
        "fct-type": "function",
        "title": "STOP_FRAME"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC HeapView",
        "module": "GHC.HeapView",
        "name": "STOP_FRAME",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "STOP FRAME",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:SelectorClosure",
      "description": {
        "fct-module": "GHC.HeapView",
        "fct-package": "ghc-heap-view",
        "fct-signature": "SelectorClosure",
        "fct-source": "src/GHC-HeapView.html#GenClosure",
        "fct-type": "function",
        "title": "SelectorClosure"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC HeapView",
        "module": "GHC.HeapView",
        "name": "SelectorClosure",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "Selector Closure",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:StgInfoTable",
      "description": {
        "fct-module": "GHC.HeapView",
        "fct-package": "ghc-heap-view",
        "fct-signature": "StgInfoTable",
        "fct-source": "src/GHC-HeapView.html#StgInfoTable",
        "fct-type": "function",
        "title": "StgInfoTable"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC HeapView",
        "module": "GHC.HeapView",
        "name": "StgInfoTable",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "Stg Info Table",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:THUNK",
      "description": {
        "fct-module": "GHC.HeapView",
        "fct-package": "ghc-heap-view",
        "fct-signature": "THUNK",
        "fct-source": "src/GHC-HeapView.html#ClosureType",
        "fct-type": "function",
        "title": "THUNK"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC HeapView",
        "module": "GHC.HeapView",
        "name": "THUNK",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "THUNK",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:THUNK_0_1",
      "description": {
        "fct-module": "GHC.HeapView",
        "fct-package": "ghc-heap-view",
        "fct-signature": "THUNK_0_1",
        "fct-source": "src/GHC-HeapView.html#ClosureType",
        "fct-type": "function",
        "title": "THUNK_0_1"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC HeapView",
        "module": "GHC.HeapView",
        "name": "THUNK_0_1",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "THUNK",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:THUNK_0_2",
      "description": {
        "fct-module": "GHC.HeapView",
        "fct-package": "ghc-heap-view",
        "fct-signature": "THUNK_0_2",
        "fct-source": "src/GHC-HeapView.html#ClosureType",
        "fct-type": "function",
        "title": "THUNK_0_2"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC HeapView",
        "module": "GHC.HeapView",
        "name": "THUNK_0_2",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "THUNK",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:THUNK_1_0",
      "description": {
        "fct-module": "GHC.HeapView",
        "fct-package": "ghc-heap-view",
        "fct-signature": "THUNK_1_0",
        "fct-source": "src/GHC-HeapView.html#ClosureType",
        "fct-type": "function",
        "title": "THUNK_1_0"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC HeapView",
        "module": "GHC.HeapView",
        "name": "THUNK_1_0",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "THUNK",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:THUNK_1_1",
      "description": {
        "fct-module": "GHC.HeapView",
        "fct-package": "ghc-heap-view",
        "fct-signature": "THUNK_1_1",
        "fct-source": "src/GHC-HeapView.html#ClosureType",
        "fct-type": "function",
        "title": "THUNK_1_1"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC HeapView",
        "module": "GHC.HeapView",
        "name": "THUNK_1_1",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "THUNK",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:THUNK_2_0",
      "description": {
        "fct-module": "GHC.HeapView",
        "fct-package": "ghc-heap-view",
        "fct-signature": "THUNK_2_0",
        "fct-source": "src/GHC-HeapView.html#ClosureType",
        "fct-type": "function",
        "title": "THUNK_2_0"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC HeapView",
        "module": "GHC.HeapView",
        "name": "THUNK_2_0",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "THUNK",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:THUNK_SELECTOR",
      "description": {
        "fct-module": "GHC.HeapView",
        "fct-package": "ghc-heap-view",
        "fct-signature": "THUNK_SELECTOR",
        "fct-source": "src/GHC-HeapView.html#ClosureType",
        "fct-type": "function",
        "title": "THUNK_SELECTOR"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC HeapView",
        "module": "GHC.HeapView",
        "name": "THUNK_SELECTOR",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "THUNK SELECTOR",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:THUNK_STATIC",
      "description": {
        "fct-module": "GHC.HeapView",
        "fct-package": "ghc-heap-view",
        "fct-signature": "THUNK_STATIC",
        "fct-source": "src/GHC-HeapView.html#ClosureType",
        "fct-type": "function",
        "title": "THUNK_STATIC"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC HeapView",
        "module": "GHC.HeapView",
        "name": "THUNK_STATIC",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "THUNK STATIC",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:TREC_CHUNK",
      "description": {
        "fct-module": "GHC.HeapView",
        "fct-package": "ghc-heap-view",
        "fct-signature": "TREC_CHUNK",
        "fct-source": "src/GHC-HeapView.html#ClosureType",
        "fct-type": "function",
        "title": "TREC_CHUNK"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC HeapView",
        "module": "GHC.HeapView",
        "name": "TREC_CHUNK",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "TREC CHUNK",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:TSO",
      "description": {
        "fct-module": "GHC.HeapView",
        "fct-package": "ghc-heap-view",
        "fct-signature": "TSO",
        "fct-source": "src/GHC-HeapView.html#ClosureType",
        "fct-type": "function",
        "title": "TSO"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC HeapView",
        "module": "GHC.HeapView",
        "name": "TSO",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "TSO",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:ThunkClosure",
      "description": {
        "fct-module": "GHC.HeapView",
        "fct-package": "ghc-heap-view",
        "fct-signature": "ThunkClosure",
        "fct-source": "src/GHC-HeapView.html#GenClosure",
        "fct-type": "function",
        "title": "ThunkClosure"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC HeapView",
        "module": "GHC.HeapView",
        "name": "ThunkClosure",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "Thunk Closure",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:UNDERFLOW_FRAME",
      "description": {
        "fct-module": "GHC.HeapView",
        "fct-package": "ghc-heap-view",
        "fct-signature": "UNDERFLOW_FRAME",
        "fct-source": "src/GHC-HeapView.html#ClosureType",
        "fct-type": "function",
        "title": "UNDERFLOW_FRAME"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC HeapView",
        "module": "GHC.HeapView",
        "name": "UNDERFLOW_FRAME",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "UNDERFLOW FRAME",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:UPDATE_FRAME",
      "description": {
        "fct-module": "GHC.HeapView",
        "fct-package": "ghc-heap-view",
        "fct-signature": "UPDATE_FRAME",
        "fct-source": "src/GHC-HeapView.html#ClosureType",
        "fct-type": "function",
        "title": "UPDATE_FRAME"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC HeapView",
        "module": "GHC.HeapView",
        "name": "UPDATE_FRAME",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "UPDATE FRAME",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:UnsupportedClosure",
      "description": {
        "fct-module": "GHC.HeapView",
        "fct-package": "ghc-heap-view",
        "fct-signature": "UnsupportedClosure",
        "fct-source": "src/GHC-HeapView.html#GenClosure",
        "fct-type": "function",
        "title": "UnsupportedClosure"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC HeapView",
        "module": "GHC.HeapView",
        "name": "UnsupportedClosure",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "Unsupported Closure",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:WEAK",
      "description": {
        "fct-module": "GHC.HeapView",
        "fct-package": "ghc-heap-view",
        "fct-signature": "WEAK",
        "fct-source": "src/GHC-HeapView.html#ClosureType",
        "fct-type": "function",
        "title": "WEAK"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC HeapView",
        "module": "GHC.HeapView",
        "name": "WEAK",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "WEAK",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:WHITEHOLE",
      "description": {
        "fct-module": "GHC.HeapView",
        "fct-package": "ghc-heap-view",
        "fct-signature": "WHITEHOLE",
        "fct-source": "src/GHC-HeapView.html#ClosureType",
        "fct-type": "function",
        "title": "WHITEHOLE"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC HeapView",
        "module": "GHC.HeapView",
        "name": "WHITEHOLE",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "WHITEHOLE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:addHeapGraph",
      "description": {
        "fct-descr": "\u003cp\u003eAdds an entry to an existing \u003ccode\u003e\u003ca\u003eHeapGraph\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eReturns the updated \u003ccode\u003e\u003ca\u003eHeapGraph\u003c/a\u003e\u003c/code\u003e and the index of the added value.\n\u003c/p\u003e",
        "fct-module": "GHC.HeapView",
        "fct-package": "ghc-heap-view",
        "fct-signature": "Int-\u003e a-\u003e Box-\u003e HeapGraph a-\u003e IO (HeapGraphIndex, HeapGraph a)",
        "fct-type": "function",
        "title": "addHeapGraph"
      },
      "index": {
        "description": "Adds an entry to an existing HeapGraph Returns the updated HeapGraph and the index of the added value",
        "hierarchy": "GHC HeapView",
        "module": "GHC.HeapView",
        "name": "addHeapGraph",
        "normalized": "Int-\u003ea-\u003eBox-\u003eHeapGraph a-\u003eIO(HeapGraphIndex,HeapGraph a)",
        "package": "ghc-heap-view",
        "partial": "Heap Graph",
        "signature": "Int-\u003ea-\u003eBox-\u003eHeapGraph a-\u003eIO(HeapGraphIndex,HeapGraph a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:allPtrs",
      "description": {
        "fct-descr": "\u003cp\u003eFor generic code, this function returns all referenced closures. \n\u003c/p\u003e",
        "fct-module": "GHC.HeapView",
        "fct-package": "ghc-heap-view",
        "fct-signature": "GenClosure b -\u003e [b]",
        "fct-source": "src/GHC-HeapView.html#allPtrs",
        "fct-type": "function",
        "title": "allPtrs"
      },
      "index": {
        "description": "For generic code this function returns all referenced closures",
        "hierarchy": "GHC HeapView",
        "module": "GHC.HeapView",
        "name": "allPtrs",
        "normalized": "GenClosure a-\u003e[a]",
        "package": "ghc-heap-view",
        "partial": "Ptrs",
        "signature": "GenClosure b-\u003e[b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:annotateHeapGraph",
      "description": {
        "fct-descr": "\u003cp\u003eAdds the given annotation to the entry at the given index, using the\n \u003ccode\u003emappend\u003c/code\u003e operation of its \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e instance.\n\u003c/p\u003e",
        "fct-module": "GHC.HeapView",
        "fct-package": "ghc-heap-view",
        "fct-signature": "a -\u003e HeapGraphIndex -\u003e HeapGraph a -\u003e HeapGraph a",
        "fct-source": "src/GHC-HeapView.html#annotateHeapGraph",
        "fct-type": "function",
        "title": "annotateHeapGraph"
      },
      "index": {
        "description": "Adds the given annotation to the entry at the given index using the mappend operation of its Monoid instance",
        "hierarchy": "GHC HeapView",
        "module": "GHC.HeapView",
        "name": "annotateHeapGraph",
        "normalized": "a-\u003eHeapGraphIndex-\u003eHeapGraph a-\u003eHeapGraph a",
        "package": "ghc-heap-view",
        "partial": "Heap Graph",
        "signature": "a-\u003eHeapGraphIndex-\u003eHeapGraph a-\u003eHeapGraph a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:areBoxesEqual",
      "description": {
        "fct-descr": "\u003cp\u003eBoxes can be compared, but this is not pure, as different heap objects can,\n after garbage collection, become the same object.\n\u003c/p\u003e",
        "fct-module": "GHC.HeapView",
        "fct-package": "ghc-heap-view",
        "fct-signature": "Box -\u003e Box -\u003e IO Bool",
        "fct-source": "src/GHC-HeapView.html#areBoxesEqual",
        "fct-type": "function",
        "title": "areBoxesEqual"
      },
      "index": {
        "description": "Boxes can be compared but this is not pure as different heap objects can after garbage collection become the same object",
        "hierarchy": "GHC HeapView",
        "module": "GHC.HeapView",
        "name": "areBoxesEqual",
        "normalized": "Box-\u003eBox-\u003eIO Bool",
        "package": "ghc-heap-view",
        "partial": "Boxes Equal",
        "signature": "Box-\u003eBox-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:arity",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "GHC.HeapView",
        "fct-package": "ghc-heap-view",
        "fct-signature": "HalfWord",
        "fct-source": "src/GHC-HeapView.html#GenClosure",
        "fct-type": "function",
        "title": "arity"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC HeapView",
        "module": "GHC.HeapView",
        "name": "arity",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:arrWords",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "GHC.HeapView",
        "fct-package": "ghc-heap-view",
        "fct-signature": "[Word]",
        "fct-source": "src/GHC-HeapView.html#GenClosure",
        "fct-type": "function",
        "title": "arrWords"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC HeapView",
        "module": "GHC.HeapView",
        "name": "arrWords",
        "normalized": "[Word]",
        "package": "ghc-heap-view",
        "partial": "Words",
        "signature": "[Word]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:asBox",
      "description": {
        "fct-descr": "\u003cp\u003eThis takes an arbitrary value and puts it into a box. Note that calls like\n\u003c/p\u003e\u003cpre\u003e asBox (head list) \n\u003c/pre\u003e\u003cp\u003ewill put the thunk \"head list\" into the box, \u003cem\u003enot\u003c/em\u003e the element at the head\n  of the list. For that, use careful case expressions:\n\u003c/p\u003e\u003cpre\u003e case list of x:_ -\u003e asBox x\n\u003c/pre\u003e",
        "fct-module": "GHC.HeapView",
        "fct-package": "ghc-heap-view",
        "fct-signature": "a -\u003e Box",
        "fct-source": "src/GHC-HeapView.html#asBox",
        "fct-type": "function",
        "title": "asBox"
      },
      "index": {
        "description": "This takes an arbitrary value and puts it into box Note that calls like asBox head list will put the thunk head list into the box not the element at the head of the list For that use careful case expressions case list of asBox",
        "hierarchy": "GHC HeapView",
        "module": "GHC.HeapView",
        "name": "asBox",
        "normalized": "a-\u003eBox",
        "package": "ghc-heap-view",
        "partial": "Box",
        "signature": "a-\u003eBox"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:bcoptrs",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "GHC.HeapView",
        "fct-package": "ghc-heap-view",
        "fct-signature": "b",
        "fct-source": "src/GHC-HeapView.html#GenClosure",
        "fct-type": "function",
        "title": "bcoptrs"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC HeapView",
        "module": "GHC.HeapView",
        "name": "bcoptrs",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:bitmap",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "GHC.HeapView",
        "fct-package": "ghc-heap-view",
        "fct-signature": "Word",
        "fct-source": "src/GHC-HeapView.html#GenClosure",
        "fct-type": "function",
        "title": "bitmap"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC HeapView",
        "module": "GHC.HeapView",
        "name": "bitmap",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:blackHole",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "GHC.HeapView",
        "fct-package": "ghc-heap-view",
        "fct-signature": "b",
        "fct-source": "src/GHC-HeapView.html#GenClosure",
        "fct-type": "function",
        "title": "blackHole"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC HeapView",
        "module": "GHC.HeapView",
        "name": "blackHole",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "Hole",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:buildHeapGraph",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a \u003ccode\u003e\u003ca\u003eHeapGraph\u003c/a\u003e\u003c/code\u003e for the value in the box, but not recursing further\n than the given limit. The initial value has index \u003ccode\u003e\u003ca\u003eheapGraphRoot\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "GHC.HeapView",
        "fct-package": "ghc-heap-view",
        "fct-signature": "Int-\u003e a-\u003e Box-\u003e IO (HeapGraph a)",
        "fct-type": "function",
        "title": "buildHeapGraph"
      },
      "index": {
        "description": "Creates HeapGraph for the value in the box but not recursing further than the given limit The initial value has index heapGraphRoot",
        "hierarchy": "GHC HeapView",
        "module": "GHC.HeapView",
        "name": "buildHeapGraph",
        "normalized": "Int-\u003ea-\u003eBox-\u003eIO(HeapGraph a)",
        "package": "ghc-heap-view",
        "partial": "Heap Graph",
        "signature": "Int-\u003ea-\u003eBox-\u003eIO(HeapGraph a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:buildHeapTree",
      "description": {
        "fct-descr": "\u003cp\u003eConstructing an \u003ccode\u003e\u003ca\u003eHeapTree\u003c/a\u003e\u003c/code\u003e from a boxed value. It takes a depth parameter\n that prevents it from running ad infinitum for cyclic or infinite\n structures.\n\u003c/p\u003e",
        "fct-module": "GHC.HeapView",
        "fct-package": "ghc-heap-view",
        "fct-signature": "Int -\u003e Box -\u003e IO HeapTree",
        "fct-source": "src/GHC-HeapView.html#buildHeapTree",
        "fct-type": "function",
        "title": "buildHeapTree"
      },
      "index": {
        "description": "Constructing an HeapTree from boxed value It takes depth parameter that prevents it from running ad infinitum for cyclic or infinite structures",
        "hierarchy": "GHC HeapView",
        "module": "GHC.HeapView",
        "name": "buildHeapTree",
        "normalized": "Int-\u003eBox-\u003eIO HeapTree",
        "package": "ghc-heap-view",
        "partial": "Heap Tree",
        "signature": "Int-\u003eBox-\u003eIO HeapTree"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:bytes",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "GHC.HeapView",
        "fct-package": "ghc-heap-view",
        "fct-signature": "Word",
        "fct-source": "src/GHC-HeapView.html#GenClosure",
        "fct-type": "function",
        "title": "bytes"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC HeapView",
        "module": "GHC.HeapView",
        "name": "bytes",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:dataArgs",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "GHC.HeapView",
        "fct-package": "ghc-heap-view",
        "fct-signature": "[Word]",
        "fct-source": "src/GHC-HeapView.html#GenClosure",
        "fct-type": "function",
        "title": "dataArgs"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC HeapView",
        "module": "GHC.HeapView",
        "name": "dataArgs",
        "normalized": "[Word]",
        "package": "ghc-heap-view",
        "partial": "Args",
        "signature": "[Word]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:disassembleBCO",
      "description": {
        "fct-descr": "\u003cp\u003eThis function integrates the disassembler in \u003ca\u003eGHC.Disassembler\u003c/a\u003e. The first\n argument should a function that dereferences the pointer in the closure to a\n closure.\n\u003c/p\u003e\u003cp\u003eIf any of these return \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e, then \u003ccode\u003e\u003ca\u003edisassembleBCO\u003c/a\u003e\u003c/code\u003e returns Nothing\n\u003c/p\u003e",
        "fct-module": "GHC.HeapView",
        "fct-package": "ghc-heap-view",
        "fct-signature": "(a -\u003e Maybe (GenClosure b)) -\u003e GenClosure a -\u003e Maybe [BCI b]",
        "fct-source": "src/GHC-HeapView.html#disassembleBCO",
        "fct-type": "function",
        "title": "disassembleBCO"
      },
      "index": {
        "description": "This function integrates the disassembler in GHC.Disassembler The first argument should function that dereferences the pointer in the closure to closure If any of these return Nothing then disassembleBCO returns Nothing",
        "hierarchy": "GHC HeapView",
        "module": "GHC.HeapView",
        "name": "disassembleBCO",
        "normalized": "(a-\u003eMaybe(GenClosure b))-\u003eGenClosure a-\u003eMaybe[BCI b]",
        "package": "ghc-heap-view",
        "partial": "BCO",
        "signature": "(a-\u003eMaybe(GenClosure b))-\u003eGenClosure a-\u003eMaybe[BCI b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:fun",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "GHC.HeapView",
        "fct-package": "ghc-heap-view",
        "fct-signature": "b",
        "fct-source": "src/GHC-HeapView.html#GenClosure",
        "fct-type": "function",
        "title": "fun"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC HeapView",
        "module": "GHC.HeapView",
        "name": "fun",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:getBoxedClosureData",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003egetClosureData\u003c/a\u003e\u003c/code\u003e, but taking a \u003ccode\u003e\u003ca\u003eBox\u003c/a\u003e\u003c/code\u003e, so it is easier to work with.\n\u003c/p\u003e",
        "fct-module": "GHC.HeapView",
        "fct-package": "ghc-heap-view",
        "fct-signature": "Box -\u003e IO Closure",
        "fct-source": "src/GHC-HeapView.html#getBoxedClosureData",
        "fct-type": "function",
        "title": "getBoxedClosureData"
      },
      "index": {
        "description": "Like getClosureData but taking Box so it is easier to work with",
        "hierarchy": "GHC HeapView",
        "module": "GHC.HeapView",
        "name": "getBoxedClosureData",
        "normalized": "Box-\u003eIO Closure",
        "package": "ghc-heap-view",
        "partial": "Boxed Closure Data",
        "signature": "Box-\u003eIO Closure"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:getClosureData",
      "description": {
        "fct-descr": "\u003cp\u003eThis function returns parsed heap representation of the argument _at this\n moment_, even if it is unevaluated or an indirection or other exotic stuff.\n Beware when passing something to this function, the same caveats as for\n \u003ccode\u003e\u003ca\u003easBox\u003c/a\u003e\u003c/code\u003e apply.\n\u003c/p\u003e",
        "fct-module": "GHC.HeapView",
        "fct-package": "ghc-heap-view",
        "fct-signature": "a -\u003e IO Closure",
        "fct-source": "src/GHC-HeapView.html#getClosureData",
        "fct-type": "function",
        "title": "getClosureData"
      },
      "index": {
        "description": "This function returns parsed heap representation of the argument at this moment even if it is unevaluated or an indirection or other exotic stuff Beware when passing something to this function the same caveats as for asBox apply",
        "hierarchy": "GHC HeapView",
        "module": "GHC.HeapView",
        "name": "getClosureData",
        "normalized": "a-\u003eIO Closure",
        "package": "ghc-heap-view",
        "partial": "Closure Data",
        "signature": "a-\u003eIO Closure"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:getClosureRaw",
      "description": {
        "fct-descr": "\u003cp\u003eThis returns the raw representation of the given argument. The second\n component of the triple are the words on the heap, and the third component\n are those words that are actually pointers. Once back in Haskell word, the\n \u003ccode\u003e\u003ca\u003eWord\u003c/a\u003e\u003c/code\u003e  may be outdated after a garbage collector run, but the corresponding\n \u003ccode\u003e\u003ca\u003eBox\u003c/a\u003e\u003c/code\u003e will still point to the correct value.\n\u003c/p\u003e",
        "fct-module": "GHC.HeapView",
        "fct-package": "ghc-heap-view",
        "fct-signature": "a -\u003e IO (Ptr StgInfoTable, [Word], [Box])",
        "fct-source": "src/GHC-HeapView.html#getClosureRaw",
        "fct-type": "function",
        "title": "getClosureRaw"
      },
      "index": {
        "description": "This returns the raw representation of the given argument The second component of the triple are the words on the heap and the third component are those words that are actually pointers Once back in Haskell word the Word may be outdated after garbage collector run but the corresponding Box will still point to the correct value",
        "hierarchy": "GHC HeapView",
        "module": "GHC.HeapView",
        "name": "getClosureRaw",
        "normalized": "a-\u003eIO(Ptr StgInfoTable,[Word],[Box])",
        "package": "ghc-heap-view",
        "partial": "Closure Raw",
        "signature": "a-\u003eIO(Ptr StgInfoTable,[Word],[Box])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:heapGraphRoot",
      "description": {
        "fct-module": "GHC.HeapView",
        "fct-package": "ghc-heap-view",
        "fct-signature": "HeapGraphIndex",
        "fct-source": "src/GHC-HeapView.html#heapGraphRoot",
        "fct-type": "function",
        "title": "heapGraphRoot"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC HeapView",
        "module": "GHC.HeapView",
        "name": "heapGraphRoot",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "Graph Root",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:hgeBox",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "GHC.HeapView",
        "fct-package": "ghc-heap-view",
        "fct-signature": "Box",
        "fct-source": "src/GHC-HeapView.html#HeapGraphEntry",
        "fct-type": "function",
        "title": "hgeBox"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC HeapView",
        "module": "GHC.HeapView",
        "name": "hgeBox",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "Box",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:hgeClosure",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "GHC.HeapView",
        "fct-package": "ghc-heap-view",
        "fct-signature": "GenClosure (Maybe HeapGraphIndex)",
        "fct-source": "src/GHC-HeapView.html#HeapGraphEntry",
        "fct-type": "function",
        "title": "hgeClosure"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC HeapView",
        "module": "GHC.HeapView",
        "name": "hgeClosure",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "Closure",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:hgeData",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "GHC.HeapView",
        "fct-package": "ghc-heap-view",
        "fct-signature": "a",
        "fct-source": "src/GHC-HeapView.html#HeapGraphEntry",
        "fct-type": "function",
        "title": "hgeData"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC HeapView",
        "module": "GHC.HeapView",
        "name": "hgeData",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "Data",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:hgeLive",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "GHC.HeapView",
        "fct-package": "ghc-heap-view",
        "fct-signature": "Bool",
        "fct-source": "src/GHC-HeapView.html#HeapGraphEntry",
        "fct-type": "function",
        "title": "hgeLive"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC HeapView",
        "module": "GHC.HeapView",
        "name": "hgeLive",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "Live",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:hvalues",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "GHC.HeapView",
        "fct-package": "ghc-heap-view",
        "fct-signature": "[b]",
        "fct-source": "src/GHC-HeapView.html#GenClosure",
        "fct-type": "function",
        "title": "hvalues"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC HeapView",
        "module": "GHC.HeapView",
        "name": "hvalues",
        "normalized": "[a]",
        "package": "ghc-heap-view",
        "partial": "",
        "signature": "[b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:indirectee",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "GHC.HeapView",
        "fct-package": "ghc-heap-view",
        "fct-signature": "b",
        "fct-source": "src/GHC-HeapView.html#GenClosure",
        "fct-type": "function",
        "title": "indirectee"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC HeapView",
        "module": "GHC.HeapView",
        "name": "indirectee",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:info",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "GHC.HeapView",
        "fct-package": "ghc-heap-view",
        "fct-signature": "StgInfoTable",
        "fct-source": "src/GHC-HeapView.html#GenClosure",
        "fct-type": "function",
        "title": "info"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC HeapView",
        "module": "GHC.HeapView",
        "name": "info",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:instrs",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "GHC.HeapView",
        "fct-package": "ghc-heap-view",
        "fct-signature": "b",
        "fct-source": "src/GHC-HeapView.html#GenClosure",
        "fct-type": "function",
        "title": "instrs"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC HeapView",
        "module": "GHC.HeapView",
        "name": "instrs",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:link",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "GHC.HeapView",
        "fct-package": "ghc-heap-view",
        "fct-signature": "b",
        "fct-source": "src/GHC-HeapView.html#GenClosure",
        "fct-type": "function",
        "title": "link"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC HeapView",
        "module": "GHC.HeapView",
        "name": "link",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:literals",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "GHC.HeapView",
        "fct-package": "ghc-heap-view",
        "fct-signature": "b",
        "fct-source": "src/GHC-HeapView.html#GenClosure",
        "fct-type": "function",
        "title": "literals"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC HeapView",
        "module": "GHC.HeapView",
        "name": "literals",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:lookupHeapGraph",
      "description": {
        "fct-module": "GHC.HeapView",
        "fct-package": "ghc-heap-view",
        "fct-signature": "HeapGraphIndex -\u003e HeapGraph a -\u003e Maybe (HeapGraphEntry a)",
        "fct-source": "src/GHC-HeapView.html#lookupHeapGraph",
        "fct-type": "function",
        "title": "lookupHeapGraph"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC HeapView",
        "module": "GHC.HeapView",
        "name": "lookupHeapGraph",
        "normalized": "HeapGraphIndex-\u003eHeapGraph a-\u003eMaybe(HeapGraphEntry a)",
        "package": "ghc-heap-view",
        "partial": "Heap Graph",
        "signature": "HeapGraphIndex-\u003eHeapGraph a-\u003eMaybe(HeapGraphEntry a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:mccPayload",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "GHC.HeapView",
        "fct-package": "ghc-heap-view",
        "fct-signature": "[b]",
        "fct-source": "src/GHC-HeapView.html#GenClosure",
        "fct-type": "function",
        "title": "mccPayload"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC HeapView",
        "module": "GHC.HeapView",
        "name": "mccPayload",
        "normalized": "[a]",
        "package": "ghc-heap-view",
        "partial": "Payload",
        "signature": "[b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:mccPtrs",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "GHC.HeapView",
        "fct-package": "ghc-heap-view",
        "fct-signature": "Word",
        "fct-source": "src/GHC-HeapView.html#GenClosure",
        "fct-type": "function",
        "title": "mccPtrs"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC HeapView",
        "module": "GHC.HeapView",
        "name": "mccPtrs",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "Ptrs",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:mccSize",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "GHC.HeapView",
        "fct-package": "ghc-heap-view",
        "fct-signature": "Word",
        "fct-source": "src/GHC-HeapView.html#GenClosure",
        "fct-type": "function",
        "title": "mccSize"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC HeapView",
        "module": "GHC.HeapView",
        "name": "mccSize",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "Size",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:modl",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "GHC.HeapView",
        "fct-package": "ghc-heap-view",
        "fct-signature": "String",
        "fct-source": "src/GHC-HeapView.html#GenClosure",
        "fct-type": "function",
        "title": "modl"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC HeapView",
        "module": "GHC.HeapView",
        "name": "modl",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:multiBuildHeapGraph",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a \u003ccode\u003e\u003ca\u003eHeapGraph\u003c/a\u003e\u003c/code\u003e for the values in multiple boxes, but not recursing\n   further than the given limit.\n\u003c/p\u003e\u003cp\u003eReturns the \u003ccode\u003e\u003ca\u003eHeapGraph\u003c/a\u003e\u003c/code\u003e and the indices of initial values. The arbitrary\n   type \u003ccode\u003ea\u003c/code\u003e can be used to make the connection between the input and the\n   resulting list of indices, and to store additional data.\n\u003c/p\u003e",
        "fct-module": "GHC.HeapView",
        "fct-package": "ghc-heap-view",
        "fct-signature": "Int-\u003e [(a, Box)]-\u003e IO (HeapGraph a, [(a, HeapGraphIndex)])",
        "fct-type": "function",
        "title": "multiBuildHeapGraph"
      },
      "index": {
        "description": "Creates HeapGraph for the values in multiple boxes but not recursing further than the given limit Returns the HeapGraph and the indices of initial values The arbitrary type can be used to make the connection between the input and the resulting list of indices and to store additional data",
        "hierarchy": "GHC HeapView",
        "module": "GHC.HeapView",
        "name": "multiBuildHeapGraph",
        "normalized": "Int-\u003e[(a,Box)]-\u003eIO(HeapGraph a,[(a,HeapGraphIndex)])",
        "package": "ghc-heap-view",
        "partial": "Build Heap Graph",
        "signature": "Int-\u003e[(a,Box)]-\u003eIO(HeapGraph a,[(a,HeapGraphIndex)])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:n_args",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "GHC.HeapView",
        "fct-package": "ghc-heap-view",
        "fct-signature": "HalfWord",
        "fct-source": "src/GHC-HeapView.html#GenClosure",
        "fct-type": "function",
        "title": "n_args"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC HeapView",
        "module": "GHC.HeapView",
        "name": "n_args",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:name",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "GHC.HeapView",
        "fct-package": "ghc-heap-view",
        "fct-signature": "String",
        "fct-source": "src/GHC-HeapView.html#GenClosure",
        "fct-type": "function",
        "title": "name"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC HeapView",
        "module": "GHC.HeapView",
        "name": "name",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:nptrs",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "GHC.HeapView",
        "fct-package": "ghc-heap-view",
        "fct-signature": "HalfWord",
        "fct-source": "src/GHC-HeapView.html#StgInfoTable",
        "fct-type": "function",
        "title": "nptrs"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC HeapView",
        "module": "GHC.HeapView",
        "name": "nptrs",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:owner",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "GHC.HeapView",
        "fct-package": "ghc-heap-view",
        "fct-signature": "b",
        "fct-source": "src/GHC-HeapView.html#GenClosure",
        "fct-type": "function",
        "title": "owner"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC HeapView",
        "module": "GHC.HeapView",
        "name": "owner",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:payload",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "GHC.HeapView",
        "fct-package": "ghc-heap-view",
        "fct-signature": "[b]",
        "fct-source": "src/GHC-HeapView.html#GenClosure",
        "fct-type": "function",
        "title": "payload"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC HeapView",
        "module": "GHC.HeapView",
        "name": "payload",
        "normalized": "[a]",
        "package": "ghc-heap-view",
        "partial": "",
        "signature": "[b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:pkg",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "GHC.HeapView",
        "fct-package": "ghc-heap-view",
        "fct-signature": "String",
        "fct-source": "src/GHC-HeapView.html#GenClosure",
        "fct-type": "function",
        "title": "pkg"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC HeapView",
        "module": "GHC.HeapView",
        "name": "pkg",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:ppClosure",
      "description": {
        "fct-descr": "\u003cp\u003eA pretty-printer that tries to generate valid Haskell for evalutated data.\n It assumes that for the included boxes, you already replaced them by Strings\n using \u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e or, if you need to do IO, \u003ccode\u003e\u003ca\u003emapM\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe parameter gives the precedendence, to avoid avoidable parenthesises.\n\u003c/p\u003e",
        "fct-module": "GHC.HeapView",
        "fct-package": "ghc-heap-view",
        "fct-signature": "(Int -\u003e b -\u003e String) -\u003e Int -\u003e GenClosure b -\u003e String",
        "fct-source": "src/GHC-HeapView.html#ppClosure",
        "fct-type": "function",
        "title": "ppClosure"
      },
      "index": {
        "description": "pretty-printer that tries to generate valid Haskell for evalutated data It assumes that for the included boxes you already replaced them by Strings using map or if you need to do IO mapM The parameter gives the precedendence to avoid avoidable parenthesises",
        "hierarchy": "GHC HeapView",
        "module": "GHC.HeapView",
        "name": "ppClosure",
        "normalized": "(Int-\u003ea-\u003eString)-\u003eInt-\u003eGenClosure a-\u003eString",
        "package": "ghc-heap-view",
        "partial": "Closure",
        "signature": "(Int-\u003eb-\u003eString)-\u003eInt-\u003eGenClosure b-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:ppHeapGraph",
      "description": {
        "fct-descr": "\u003cp\u003ePretty-prints a HeapGraph. The resulting string contains newlines. Example\n for \u003ccode\u003elet s = \"Ki\" in (s, s, cycle \"Ho\")\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003elet x1 = \"Ki\"\n    x6 = C# 'H' : C# 'o' : x6\nin (x1,x1,x6)\n\u003c/pre\u003e",
        "fct-module": "GHC.HeapView",
        "fct-package": "ghc-heap-view",
        "fct-signature": "HeapGraph a -\u003e String",
        "fct-source": "src/GHC-HeapView.html#ppHeapGraph",
        "fct-type": "function",
        "title": "ppHeapGraph"
      },
      "index": {
        "description": "Pretty-prints HeapGraph The resulting string contains newlines Example for let Ki in cycle Ho let x1 Ki x6 x6 in x1 x1 x6",
        "hierarchy": "GHC HeapView",
        "module": "GHC.HeapView",
        "name": "ppHeapGraph",
        "normalized": "HeapGraph a-\u003eString",
        "package": "ghc-heap-view",
        "partial": "Heap Graph",
        "signature": "HeapGraph a-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:ppHeapTree",
      "description": {
        "fct-descr": "\u003cp\u003ePretty-Printing a heap Tree\n\u003c/p\u003e\u003cp\u003eExample output for \u003ccode\u003e[Just 4, Nothing, *something*]\u003c/code\u003e, where *something* is an\n unevaluated expression depending on the command line argument.\n\u003c/p\u003e\u003cpre\u003e[Just (I# 4),Nothing,Just (_thunk [\"arg1\",\"arg2\"])]\n\u003c/pre\u003e",
        "fct-module": "GHC.HeapView",
        "fct-package": "ghc-heap-view",
        "fct-signature": "HeapTree -\u003e String",
        "fct-source": "src/GHC-HeapView.html#ppHeapTree",
        "fct-type": "function",
        "title": "ppHeapTree"
      },
      "index": {
        "description": "Pretty-Printing heap Tree Example output for Just Nothing something where something is an unevaluated expression depending on the command line argument Just Nothing Just thunk arg1 arg2",
        "hierarchy": "GHC HeapView",
        "module": "GHC.HeapView",
        "name": "ppHeapTree",
        "normalized": "HeapTree-\u003eString",
        "package": "ghc-heap-view",
        "partial": "Heap Tree",
        "signature": "HeapTree-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:ptrArgs",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "GHC.HeapView",
        "fct-package": "ghc-heap-view",
        "fct-signature": "[b]",
        "fct-source": "src/GHC-HeapView.html#GenClosure",
        "fct-type": "function",
        "title": "ptrArgs"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC HeapView",
        "module": "GHC.HeapView",
        "name": "ptrArgs",
        "normalized": "[a]",
        "package": "ghc-heap-view",
        "partial": "Args",
        "signature": "[b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:ptrs",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "GHC.HeapView",
        "fct-package": "ghc-heap-view",
        "fct-signature": "HalfWord",
        "fct-source": "src/GHC-HeapView.html#StgInfoTable",
        "fct-type": "function",
        "title": "ptrs"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC HeapView",
        "module": "GHC.HeapView",
        "name": "ptrs",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:queue",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "GHC.HeapView",
        "fct-package": "ghc-heap-view",
        "fct-signature": "b",
        "fct-source": "src/GHC-HeapView.html#GenClosure",
        "fct-type": "function",
        "title": "queue"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC HeapView",
        "module": "GHC.HeapView",
        "name": "queue",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:queueHead",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "GHC.HeapView",
        "fct-package": "ghc-heap-view",
        "fct-signature": "b",
        "fct-source": "src/GHC-HeapView.html#GenClosure",
        "fct-type": "function",
        "title": "queueHead"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC HeapView",
        "module": "GHC.HeapView",
        "name": "queueHead",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "Head",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:queueTail",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "GHC.HeapView",
        "fct-package": "ghc-heap-view",
        "fct-signature": "b",
        "fct-source": "src/GHC-HeapView.html#GenClosure",
        "fct-type": "function",
        "title": "queueTail"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC HeapView",
        "module": "GHC.HeapView",
        "name": "queueTail",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "Tail",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:rawWords",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "GHC.HeapView",
        "fct-package": "ghc-heap-view",
        "fct-signature": "[Word]",
        "fct-source": "src/GHC-HeapView.html#GenClosure",
        "fct-type": "function",
        "title": "rawWords"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC HeapView",
        "module": "GHC.HeapView",
        "name": "rawWords",
        "normalized": "[Word]",
        "package": "ghc-heap-view",
        "partial": "Words",
        "signature": "[Word]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:selectee",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "GHC.HeapView",
        "fct-package": "ghc-heap-view",
        "fct-signature": "b",
        "fct-source": "src/GHC-HeapView.html#GenClosure",
        "fct-type": "function",
        "title": "selectee"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC HeapView",
        "module": "GHC.HeapView",
        "name": "selectee",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:size",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "GHC.HeapView",
        "fct-package": "ghc-heap-view",
        "fct-signature": "HalfWord",
        "fct-source": "src/GHC-HeapView.html#GenClosure",
        "fct-type": "function",
        "title": "size"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC HeapView",
        "module": "GHC.HeapView",
        "name": "size",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:srtlen",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "GHC.HeapView",
        "fct-package": "ghc-heap-view",
        "fct-signature": "HalfWord",
        "fct-source": "src/GHC-HeapView.html#StgInfoTable",
        "fct-type": "function",
        "title": "srtlen"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC HeapView",
        "module": "GHC.HeapView",
        "name": "srtlen",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:tipe",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "GHC.HeapView",
        "fct-package": "ghc-heap-view",
        "fct-signature": "ClosureType",
        "fct-source": "src/GHC-HeapView.html#StgInfoTable",
        "fct-type": "function",
        "title": "tipe"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC HeapView",
        "module": "GHC.HeapView",
        "name": "tipe",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:updateHeapGraph",
      "description": {
        "fct-descr": "\u003cp\u003eThis function updates a heap graph to reflect the current state of\n closures on the heap, conforming to the following specification.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Every entry whose value has been garbage collected by now is marked as\n    dead by setting \u003ccode\u003e\u003ca\u003ehgeLive\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003eFalse\u003c/code\u003e\n  * Every entry whose value is still live gets the \u003ccode\u003e\u003ca\u003ehgeClosure\u003c/a\u003e\u003c/code\u003e field updated\n    and newly referenced closures are, up to the given depth, added to the graph.\n  * A map mapping previous indicies to the corresponding new indicies is returned as well.\n  * The closure at \u003ccode\u003e\u003ca\u003eheapGraphRoot\u003c/a\u003e\u003c/code\u003e stays at \u003ccode\u003e\u003ca\u003eheapGraphRoot\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "GHC.HeapView",
        "fct-package": "ghc-heap-view",
        "fct-signature": "Int -\u003e HeapGraph a -\u003e IO (HeapGraph a, HeapGraphIndex -\u003e HeapGraphIndex)",
        "fct-source": "src/GHC-HeapView.html#updateHeapGraph",
        "fct-type": "function",
        "title": "updateHeapGraph"
      },
      "index": {
        "description": "This function updates heap graph to reflect the current state of closures on the heap conforming to the following specification Every entry whose value has been garbage collected by now is marked as dead by setting hgeLive to False Every entry whose value is still live gets the hgeClosure field updated and newly referenced closures are up to the given depth added to the graph map mapping previous indicies to the corresponding new indicies is returned as well The closure at heapGraphRoot stays at heapGraphRoot",
        "hierarchy": "GHC HeapView",
        "module": "GHC.HeapView",
        "name": "updateHeapGraph",
        "normalized": "Int-\u003eHeapGraph a-\u003eIO(HeapGraph a,HeapGraphIndex-\u003eHeapGraphIndex)",
        "package": "ghc-heap-view",
        "partial": "Heap Graph",
        "signature": "Int-\u003eHeapGraph a-\u003eIO(HeapGraph a,HeapGraphIndex-\u003eHeapGraphIndex)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:value",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "GHC.HeapView",
        "fct-package": "ghc-heap-view",
        "fct-signature": "b",
        "fct-source": "src/GHC-HeapView.html#GenClosure",
        "fct-type": "function",
        "title": "value"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC HeapView",
        "module": "GHC.HeapView",
        "name": "value",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-heap-view/docs/GHC-HeapView.html#v:var",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "GHC.HeapView",
        "fct-package": "ghc-heap-view",
        "fct-signature": "b",
        "fct-source": "src/GHC-HeapView.html#GenClosure",
        "fct-type": "function",
        "title": "var"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC HeapView",
        "module": "GHC.HeapView",
        "name": "var",
        "normalized": "",
        "package": "ghc-heap-view",
        "partial": "",
        "signature": ""
      }
    }
  }
]