[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-data-interop/docs/LLVM-Parse.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module converts the C form of the LLVM IR into a fully\n referential Haskell version of the IR.  The translation is slightly\n lossy around integral types in some cases, as Haskell Ints do not\n have the same range as C ints.  In the vast majority of cases this\n should not really be an issue, but it is possible to lose\n information.  If it is an issue it can be changed.\n\u003c/p\u003e\u003cp\u003eNote that this uses BasicHashTables as mappings.  Switching to\n LinearHashTable has less space overhead but makes performance tank.\n Don't be tempted.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "LLVM.Parse",
        "fct-package": "llvm-data-interop",
        "fct-signature": "module",
        "fct-source": "src/LLVM-Parse.html",
        "fct-type": "module",
        "title": "Parse"
      },
      "index": {
        "description": "This module converts the form of the LLVM IR into fully referential Haskell version of the IR The translation is slightly lossy around integral types in some cases as Haskell Ints do not have the same range as ints In the vast majority of cases this should not really be an issue but it is possible to lose information If it is an issue it can be changed Note that this uses BasicHashTables as mappings Switching to LinearHashTable has less space overhead but makes performance tank Don be tempted",
        "hierarchy": "LLVM Parse",
        "module": "LLVM.Parse",
        "name": "Parse",
        "normalized": "",
        "package": "llvm-data-interop",
        "partial": "Parse",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-data-interop/docs/LLVM-Parse.html#t:ParserOptions",
      "description": {
        "fct-descr": "\u003cp\u003eOptions controlling how \u003ccode\u003eModule\u003c/code\u003es are constructed.\n\u003c/p\u003e",
        "fct-module": "LLVM.Parse",
        "fct-package": "llvm-data-interop",
        "fct-signature": "data",
        "fct-source": "src/LLVM-Parse.html#ParserOptions",
        "fct-type": "data",
        "title": "ParserOptions"
      },
      "index": {
        "description": "Options controlling how Module are constructed",
        "hierarchy": "LLVM Parse",
        "module": "LLVM.Parse",
        "name": "ParserOptions",
        "normalized": "",
        "package": "llvm-data-interop",
        "partial": "Parser Options",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-data-interop/docs/LLVM-Parse.html#t:PositionPrecision",
      "description": {
        "fct-descr": "\u003cp\u003eDefines the level of precision of position information in the\n metadata.  LLVM gives very precise information, but tracking all of\n it can consume excessive amounts of space.  This option allows it\n to be selectively discarded.\n\u003c/p\u003e",
        "fct-module": "LLVM.Parse",
        "fct-package": "llvm-data-interop",
        "fct-signature": "data",
        "fct-source": "src/LLVM-Parse.html#PositionPrecision",
        "fct-type": "data",
        "title": "PositionPrecision"
      },
      "index": {
        "description": "Defines the level of precision of position information in the metadata LLVM gives very precise information but tracking all of it can consume excessive amounts of space This option allows it to be selectively discarded",
        "hierarchy": "LLVM Parse",
        "module": "LLVM.Parse",
        "name": "PositionPrecision",
        "normalized": "",
        "package": "llvm-data-interop",
        "partial": "Position Precision",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-data-interop/docs/LLVM-Parse.html#t:TranslationException",
      "description": {
        "fct-module": "LLVM.Parse",
        "fct-package": "llvm-data-interop",
        "fct-signature": "data",
        "fct-source": "src/LLVM-Parse.html#TranslationException",
        "fct-type": "data",
        "title": "TranslationException"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM Parse",
        "module": "LLVM.Parse",
        "name": "TranslationException",
        "normalized": "",
        "package": "llvm-data-interop",
        "partial": "Translation Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-data-interop/docs/LLVM-Parse.html#v:InvalidAliasInTranslateValue",
      "description": {
        "fct-module": "LLVM.Parse",
        "fct-package": "llvm-data-interop",
        "fct-signature": "InvalidAliasInTranslateValue",
        "fct-source": "src/LLVM-Parse.html#TranslationException",
        "fct-type": "function",
        "title": "InvalidAliasInTranslateValue"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM Parse",
        "module": "LLVM.Parse",
        "name": "InvalidAliasInTranslateValue",
        "normalized": "",
        "package": "llvm-data-interop",
        "partial": "Invalid Alias In Translate Value",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-data-interop/docs/LLVM-Parse.html#v:InvalidBinaryOp",
      "description": {
        "fct-module": "LLVM.Parse",
        "fct-package": "llvm-data-interop",
        "fct-signature": "InvalidBinaryOp !Int",
        "fct-source": "src/LLVM-Parse.html#TranslationException",
        "fct-type": "function",
        "title": "InvalidBinaryOp"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM Parse",
        "module": "LLVM.Parse",
        "name": "InvalidBinaryOp",
        "normalized": "",
        "package": "llvm-data-interop",
        "partial": "Invalid Binary Op",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-data-interop/docs/LLVM-Parse.html#v:InvalidBlockAddressBlock",
      "description": {
        "fct-module": "LLVM.Parse",
        "fct-package": "llvm-data-interop",
        "fct-signature": "InvalidBlockAddressBlock Value",
        "fct-source": "src/LLVM-Parse.html#TranslationException",
        "fct-type": "function",
        "title": "InvalidBlockAddressBlock"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM Parse",
        "module": "LLVM.Parse",
        "name": "InvalidBlockAddressBlock",
        "normalized": "",
        "package": "llvm-data-interop",
        "partial": "Invalid Block Address Block",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-data-interop/docs/LLVM-Parse.html#v:InvalidBlockAddressFunction",
      "description": {
        "fct-module": "LLVM.Parse",
        "fct-package": "llvm-data-interop",
        "fct-signature": "InvalidBlockAddressFunction Value",
        "fct-source": "src/LLVM-Parse.html#TranslationException",
        "fct-type": "function",
        "title": "InvalidBlockAddressFunction"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM Parse",
        "module": "LLVM.Parse",
        "name": "InvalidBlockAddressFunction",
        "normalized": "",
        "package": "llvm-data-interop",
        "partial": "Invalid Block Address Function",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-data-interop/docs/LLVM-Parse.html#v:InvalidBranchInst",
      "description": {
        "fct-module": "LLVM.Parse",
        "fct-package": "llvm-data-interop",
        "fct-signature": "InvalidBranchInst",
        "fct-source": "src/LLVM-Parse.html#TranslationException",
        "fct-type": "function",
        "title": "InvalidBranchInst"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM Parse",
        "module": "LLVM.Parse",
        "name": "InvalidBranchInst",
        "normalized": "",
        "package": "llvm-data-interop",
        "partial": "Invalid Branch Inst",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-data-interop/docs/LLVM-Parse.html#v:InvalidBranchTarget",
      "description": {
        "fct-module": "LLVM.Parse",
        "fct-package": "llvm-data-interop",
        "fct-signature": "InvalidBranchTarget Value",
        "fct-source": "src/LLVM-Parse.html#TranslationException",
        "fct-type": "function",
        "title": "InvalidBranchTarget"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM Parse",
        "module": "LLVM.Parse",
        "name": "InvalidBranchTarget",
        "normalized": "",
        "package": "llvm-data-interop",
        "partial": "Invalid Branch Target",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-data-interop/docs/LLVM-Parse.html#v:InvalidDataLayout",
      "description": {
        "fct-module": "LLVM.Parse",
        "fct-package": "llvm-data-interop",
        "fct-signature": "InvalidDataLayout Text String",
        "fct-source": "src/LLVM-Parse.html#TranslationException",
        "fct-type": "function",
        "title": "InvalidDataLayout"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM Parse",
        "module": "LLVM.Parse",
        "name": "InvalidDataLayout",
        "normalized": "",
        "package": "llvm-data-interop",
        "partial": "Invalid Data Layout",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-data-interop/docs/LLVM-Parse.html#v:InvalidExtractElementInst",
      "description": {
        "fct-module": "LLVM.Parse",
        "fct-package": "llvm-data-interop",
        "fct-signature": "InvalidExtractElementInst !Int",
        "fct-source": "src/LLVM-Parse.html#TranslationException",
        "fct-type": "function",
        "title": "InvalidExtractElementInst"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM Parse",
        "module": "LLVM.Parse",
        "name": "InvalidExtractElementInst",
        "normalized": "",
        "package": "llvm-data-interop",
        "partial": "Invalid Extract Element Inst",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-data-interop/docs/LLVM-Parse.html#v:InvalidExtractValueInst",
      "description": {
        "fct-module": "LLVM.Parse",
        "fct-package": "llvm-data-interop",
        "fct-signature": "InvalidExtractValueInst !Int",
        "fct-source": "src/LLVM-Parse.html#TranslationException",
        "fct-type": "function",
        "title": "InvalidExtractValueInst"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM Parse",
        "module": "LLVM.Parse",
        "name": "InvalidExtractValueInst",
        "normalized": "",
        "package": "llvm-data-interop",
        "partial": "Invalid Extract Value Inst",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-data-interop/docs/LLVM-Parse.html#v:InvalidFunctionInTranslateValue",
      "description": {
        "fct-module": "LLVM.Parse",
        "fct-package": "llvm-data-interop",
        "fct-signature": "InvalidFunctionInTranslateValue",
        "fct-source": "src/LLVM-Parse.html#TranslationException",
        "fct-type": "function",
        "title": "InvalidFunctionInTranslateValue"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM Parse",
        "module": "LLVM.Parse",
        "name": "InvalidFunctionInTranslateValue",
        "normalized": "",
        "package": "llvm-data-interop",
        "partial": "Invalid Function In Translate Value",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-data-interop/docs/LLVM-Parse.html#v:InvalidGEPInst",
      "description": {
        "fct-module": "LLVM.Parse",
        "fct-package": "llvm-data-interop",
        "fct-signature": "InvalidGEPInst !Int",
        "fct-source": "src/LLVM-Parse.html#TranslationException",
        "fct-type": "function",
        "title": "InvalidGEPInst"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM Parse",
        "module": "LLVM.Parse",
        "name": "InvalidGEPInst",
        "normalized": "",
        "package": "llvm-data-interop",
        "partial": "Invalid GEPInst",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-data-interop/docs/LLVM-Parse.html#v:InvalidGlobalVarInTranslateValue",
      "description": {
        "fct-module": "LLVM.Parse",
        "fct-package": "llvm-data-interop",
        "fct-signature": "InvalidGlobalVarInTranslateValue",
        "fct-source": "src/LLVM-Parse.html#TranslationException",
        "fct-type": "function",
        "title": "InvalidGlobalVarInTranslateValue"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM Parse",
        "module": "LLVM.Parse",
        "name": "InvalidGlobalVarInTranslateValue",
        "normalized": "",
        "package": "llvm-data-interop",
        "partial": "Invalid Global Var In Translate Value",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-data-interop/docs/LLVM-Parse.html#v:InvalidIndirectBranchOperands",
      "description": {
        "fct-module": "LLVM.Parse",
        "fct-package": "llvm-data-interop",
        "fct-signature": "InvalidIndirectBranchOperands",
        "fct-source": "src/LLVM-Parse.html#TranslationException",
        "fct-type": "function",
        "title": "InvalidIndirectBranchOperands"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM Parse",
        "module": "LLVM.Parse",
        "name": "InvalidIndirectBranchOperands",
        "normalized": "",
        "package": "llvm-data-interop",
        "partial": "Invalid Indirect Branch Operands",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-data-interop/docs/LLVM-Parse.html#v:InvalidInsertElementInst",
      "description": {
        "fct-module": "LLVM.Parse",
        "fct-package": "llvm-data-interop",
        "fct-signature": "InvalidInsertElementInst !Int",
        "fct-source": "src/LLVM-Parse.html#TranslationException",
        "fct-type": "function",
        "title": "InvalidInsertElementInst"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM Parse",
        "module": "LLVM.Parse",
        "name": "InvalidInsertElementInst",
        "normalized": "",
        "package": "llvm-data-interop",
        "partial": "Invalid Insert Element Inst",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-data-interop/docs/LLVM-Parse.html#v:InvalidInsertValueInst",
      "description": {
        "fct-module": "LLVM.Parse",
        "fct-package": "llvm-data-interop",
        "fct-signature": "InvalidInsertValueInst !Int",
        "fct-source": "src/LLVM-Parse.html#TranslationException",
        "fct-type": "function",
        "title": "InvalidInsertValueInst"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM Parse",
        "module": "LLVM.Parse",
        "name": "InvalidInsertValueInst",
        "normalized": "",
        "package": "llvm-data-interop",
        "partial": "Invalid Insert Value Inst",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-data-interop/docs/LLVM-Parse.html#v:InvalidResumeInst",
      "description": {
        "fct-module": "LLVM.Parse",
        "fct-package": "llvm-data-interop",
        "fct-signature": "InvalidResumeInst !Int",
        "fct-source": "src/LLVM-Parse.html#TranslationException",
        "fct-type": "function",
        "title": "InvalidResumeInst"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM Parse",
        "module": "LLVM.Parse",
        "name": "InvalidResumeInst",
        "normalized": "",
        "package": "llvm-data-interop",
        "partial": "Invalid Resume Inst",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-data-interop/docs/LLVM-Parse.html#v:InvalidSelectArgs",
      "description": {
        "fct-module": "LLVM.Parse",
        "fct-package": "llvm-data-interop",
        "fct-signature": "InvalidSelectArgs !Int",
        "fct-source": "src/LLVM-Parse.html#TranslationException",
        "fct-type": "function",
        "title": "InvalidSelectArgs"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM Parse",
        "module": "LLVM.Parse",
        "name": "InvalidSelectArgs",
        "normalized": "",
        "package": "llvm-data-interop",
        "partial": "Invalid Select Args",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-data-interop/docs/LLVM-Parse.html#v:InvalidShuffleVectorInst",
      "description": {
        "fct-module": "LLVM.Parse",
        "fct-package": "llvm-data-interop",
        "fct-signature": "InvalidShuffleVectorInst !Int",
        "fct-source": "src/LLVM-Parse.html#TranslationException",
        "fct-type": "function",
        "title": "InvalidShuffleVectorInst"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM Parse",
        "module": "LLVM.Parse",
        "name": "InvalidShuffleVectorInst",
        "normalized": "",
        "package": "llvm-data-interop",
        "partial": "Invalid Shuffle Vector Inst",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-data-interop/docs/LLVM-Parse.html#v:InvalidSwitchLayout",
      "description": {
        "fct-module": "LLVM.Parse",
        "fct-package": "llvm-data-interop",
        "fct-signature": "InvalidSwitchLayout",
        "fct-source": "src/LLVM-Parse.html#TranslationException",
        "fct-type": "function",
        "title": "InvalidSwitchLayout"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM Parse",
        "module": "LLVM.Parse",
        "name": "InvalidSwitchLayout",
        "normalized": "",
        "package": "llvm-data-interop",
        "partial": "Invalid Switch Layout",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-data-interop/docs/LLVM-Parse.html#v:InvalidSwitchTarget",
      "description": {
        "fct-module": "LLVM.Parse",
        "fct-package": "llvm-data-interop",
        "fct-signature": "InvalidSwitchTarget Value",
        "fct-source": "src/LLVM-Parse.html#TranslationException",
        "fct-type": "function",
        "title": "InvalidSwitchTarget"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM Parse",
        "module": "LLVM.Parse",
        "name": "InvalidSwitchTarget",
        "normalized": "",
        "package": "llvm-data-interop",
        "partial": "Invalid Switch Target",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-data-interop/docs/LLVM-Parse.html#v:InvalidTag",
      "description": {
        "fct-module": "LLVM.Parse",
        "fct-package": "llvm-data-interop",
        "fct-signature": "InvalidTag String ValueTag",
        "fct-source": "src/LLVM-Parse.html#TranslationException",
        "fct-type": "function",
        "title": "InvalidTag"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM Parse",
        "module": "LLVM.Parse",
        "name": "InvalidTag",
        "normalized": "",
        "package": "llvm-data-interop",
        "partial": "Invalid Tag",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-data-interop/docs/LLVM-Parse.html#v:InvalidUnaryOp",
      "description": {
        "fct-module": "LLVM.Parse",
        "fct-package": "llvm-data-interop",
        "fct-signature": "InvalidUnaryOp !Int",
        "fct-source": "src/LLVM-Parse.html#TranslationException",
        "fct-type": "function",
        "title": "InvalidUnaryOp"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM Parse",
        "module": "LLVM.Parse",
        "name": "InvalidUnaryOp",
        "normalized": "",
        "package": "llvm-data-interop",
        "partial": "Invalid Unary Op",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-data-interop/docs/LLVM-Parse.html#v:InvalidUnconditionalBranchTarget",
      "description": {
        "fct-module": "LLVM.Parse",
        "fct-package": "llvm-data-interop",
        "fct-signature": "InvalidUnconditionalBranchTarget Value",
        "fct-source": "src/LLVM-Parse.html#TranslationException",
        "fct-type": "function",
        "title": "InvalidUnconditionalBranchTarget"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM Parse",
        "module": "LLVM.Parse",
        "name": "InvalidUnconditionalBranchTarget",
        "normalized": "",
        "package": "llvm-data-interop",
        "partial": "Invalid Unconditional Branch Target",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-data-interop/docs/LLVM-Parse.html#v:KnotTyingFailure",
      "description": {
        "fct-module": "LLVM.Parse",
        "fct-package": "llvm-data-interop",
        "fct-signature": "KnotTyingFailure ValueTag",
        "fct-source": "src/LLVM-Parse.html#TranslationException",
        "fct-type": "function",
        "title": "KnotTyingFailure"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM Parse",
        "module": "LLVM.Parse",
        "name": "KnotTyingFailure",
        "normalized": "",
        "package": "llvm-data-interop",
        "partial": "Knot Tying Failure",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-data-interop/docs/LLVM-Parse.html#v:MetaKnotFailure",
      "description": {
        "fct-module": "LLVM.Parse",
        "fct-package": "llvm-data-interop",
        "fct-signature": "MetaKnotFailure",
        "fct-source": "src/LLVM-Parse.html#TranslationException",
        "fct-type": "function",
        "title": "MetaKnotFailure"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM Parse",
        "module": "LLVM.Parse",
        "name": "MetaKnotFailure",
        "normalized": "",
        "package": "llvm-data-interop",
        "partial": "Meta Knot Failure",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-data-interop/docs/LLVM-Parse.html#v:NoModule",
      "description": {
        "fct-module": "LLVM.Parse",
        "fct-package": "llvm-data-interop",
        "fct-signature": "NoModule",
        "fct-source": "src/LLVM-Parse.html#TranslationException",
        "fct-type": "function",
        "title": "NoModule"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM Parse",
        "module": "LLVM.Parse",
        "name": "NoModule",
        "normalized": "",
        "package": "llvm-data-interop",
        "partial": "No Module",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-data-interop/docs/LLVM-Parse.html#v:NonConstantTag",
      "description": {
        "fct-module": "LLVM.Parse",
        "fct-package": "llvm-data-interop",
        "fct-signature": "NonConstantTag ValueTag",
        "fct-source": "src/LLVM-Parse.html#TranslationException",
        "fct-type": "function",
        "title": "NonConstantTag"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM Parse",
        "module": "LLVM.Parse",
        "name": "NonConstantTag",
        "normalized": "",
        "package": "llvm-data-interop",
        "partial": "Non Constant Tag",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-data-interop/docs/LLVM-Parse.html#v:NonInstructionTag",
      "description": {
        "fct-module": "LLVM.Parse",
        "fct-package": "llvm-data-interop",
        "fct-signature": "NonInstructionTag ValueTag",
        "fct-source": "src/LLVM-Parse.html#TranslationException",
        "fct-type": "function",
        "title": "NonInstructionTag"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM Parse",
        "module": "LLVM.Parse",
        "name": "NonInstructionTag",
        "normalized": "",
        "package": "llvm-data-interop",
        "partial": "Non Instruction Tag",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-data-interop/docs/LLVM-Parse.html#v:ParserOptions",
      "description": {
        "fct-module": "LLVM.Parse",
        "fct-package": "llvm-data-interop",
        "fct-signature": "ParserOptions",
        "fct-source": "src/LLVM-Parse.html#ParserOptions",
        "fct-type": "function",
        "title": "ParserOptions"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM Parse",
        "module": "LLVM.Parse",
        "name": "ParserOptions",
        "normalized": "",
        "package": "llvm-data-interop",
        "partial": "Parser Options",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-data-interop/docs/LLVM-Parse.html#v:PositionNone",
      "description": {
        "fct-descr": "\u003cp\u003eDiscard all position information\n\u003c/p\u003e",
        "fct-module": "LLVM.Parse",
        "fct-package": "llvm-data-interop",
        "fct-signature": "PositionNone",
        "fct-source": "src/LLVM-Parse.html#PositionPrecision",
        "fct-type": "function",
        "title": "PositionNone"
      },
      "index": {
        "description": "Discard all position information",
        "hierarchy": "LLVM Parse",
        "module": "LLVM.Parse",
        "name": "PositionNone",
        "normalized": "",
        "package": "llvm-data-interop",
        "partial": "Position None",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-data-interop/docs/LLVM-Parse.html#v:PositionPrecise",
      "description": {
        "fct-descr": "\u003cp\u003ePreserve all information from LLVM (line\n and column numbers)\n\u003c/p\u003e",
        "fct-module": "LLVM.Parse",
        "fct-package": "llvm-data-interop",
        "fct-signature": "PositionPrecise",
        "fct-source": "src/LLVM-Parse.html#PositionPrecision",
        "fct-type": "function",
        "title": "PositionPrecise"
      },
      "index": {
        "description": "Preserve all information from LLVM line and column numbers",
        "hierarchy": "LLVM Parse",
        "module": "LLVM.Parse",
        "name": "PositionPrecise",
        "normalized": "",
        "package": "llvm-data-interop",
        "partial": "Position Precise",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-data-interop/docs/LLVM-Parse.html#v:TooManyReturnValues",
      "description": {
        "fct-module": "LLVM.Parse",
        "fct-package": "llvm-data-interop",
        "fct-signature": "TooManyReturnValues",
        "fct-source": "src/LLVM-Parse.html#TranslationException",
        "fct-type": "function",
        "title": "TooManyReturnValues"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM Parse",
        "module": "LLVM.Parse",
        "name": "TooManyReturnValues",
        "normalized": "",
        "package": "llvm-data-interop",
        "partial": "Too Many Return Values",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-data-interop/docs/LLVM-Parse.html#v:TypeKnotTyingFailure",
      "description": {
        "fct-module": "LLVM.Parse",
        "fct-package": "llvm-data-interop",
        "fct-signature": "TypeKnotTyingFailure TypeTag",
        "fct-source": "src/LLVM-Parse.html#TranslationException",
        "fct-type": "function",
        "title": "TypeKnotTyingFailure"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM Parse",
        "module": "LLVM.Parse",
        "name": "TypeKnotTyingFailure",
        "normalized": "",
        "package": "llvm-data-interop",
        "partial": "Type Knot Tying Failure",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-data-interop/docs/LLVM-Parse.html#v:UnparsableBitcode",
      "description": {
        "fct-module": "LLVM.Parse",
        "fct-package": "llvm-data-interop",
        "fct-signature": "UnparsableBitcode String",
        "fct-source": "src/LLVM-Parse.html#TranslationException",
        "fct-type": "function",
        "title": "UnparsableBitcode"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM Parse",
        "module": "LLVM.Parse",
        "name": "UnparsableBitcode",
        "normalized": "",
        "package": "llvm-data-interop",
        "partial": "Unparsable Bitcode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-data-interop/docs/LLVM-Parse.html#v:defaultParserOptions",
      "description": {
        "fct-descr": "\u003cp\u003eReasonable default parsing options\n\u003c/p\u003e",
        "fct-module": "LLVM.Parse",
        "fct-package": "llvm-data-interop",
        "fct-signature": "ParserOptions",
        "fct-source": "src/LLVM-Parse.html#defaultParserOptions",
        "fct-type": "function",
        "title": "defaultParserOptions"
      },
      "index": {
        "description": "Reasonable default parsing options",
        "hierarchy": "LLVM Parse",
        "module": "LLVM.Parse",
        "name": "defaultParserOptions",
        "normalized": "",
        "package": "llvm-data-interop",
        "partial": "Parser Options",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-data-interop/docs/LLVM-Parse.html#v:hParseLLVM",
      "description": {
        "fct-descr": "\u003cp\u003eParse LLVM IR from a Handle into a \u003ccode\u003eModule\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "LLVM.Parse",
        "fct-package": "llvm-data-interop",
        "fct-signature": "ParserOptions -\u003e Handle -\u003e IO Module",
        "fct-source": "src/LLVM-Parse.html#hParseLLVM",
        "fct-type": "function",
        "title": "hParseLLVM"
      },
      "index": {
        "description": "Parse LLVM IR from Handle into Module",
        "hierarchy": "LLVM Parse",
        "module": "LLVM.Parse",
        "name": "hParseLLVM",
        "normalized": "ParserOptions-\u003eHandle-\u003eIO Module",
        "package": "llvm-data-interop",
        "partial": "Parse LLVM",
        "signature": "ParserOptions-\u003eHandle-\u003eIO Module"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-data-interop/docs/LLVM-Parse.html#v:metaPositionPrecision",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "LLVM.Parse",
        "fct-package": "llvm-data-interop",
        "fct-signature": "PositionPrecision",
        "fct-source": "src/LLVM-Parse.html#ParserOptions",
        "fct-type": "function",
        "title": "metaPositionPrecision"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM Parse",
        "module": "LLVM.Parse",
        "name": "metaPositionPrecision",
        "normalized": "",
        "package": "llvm-data-interop",
        "partial": "Position Precision",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-data-interop/docs/LLVM-Parse.html#v:parseLLVM",
      "description": {
        "fct-descr": "\u003cp\u003eParse the LLVM IR (either assembly or bitcode) from a lazy ByteString\n into a \u003ccode\u003eModule\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "LLVM.Parse",
        "fct-package": "llvm-data-interop",
        "fct-signature": "ParserOptions -\u003e ByteString -\u003e IO Module",
        "fct-source": "src/LLVM-Parse.html#parseLLVM",
        "fct-type": "function",
        "title": "parseLLVM"
      },
      "index": {
        "description": "Parse the LLVM IR either assembly or bitcode from lazy ByteString into Module",
        "hierarchy": "LLVM Parse",
        "module": "LLVM.Parse",
        "name": "parseLLVM",
        "normalized": "ParserOptions-\u003eByteString-\u003eIO Module",
        "package": "llvm-data-interop",
        "partial": "LLVM",
        "signature": "ParserOptions-\u003eByteString-\u003eIO Module"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-data-interop/docs/LLVM-Parse.html#v:parseLLVMFile",
      "description": {
        "fct-descr": "\u003cp\u003eParse the named LLVM file into the LLVM form of the IR (a\n \u003ccode\u003eModule\u003c/code\u003e).  In the case of an error, a descriptive string will be\n returned.  The input file can be either LLVM assembly or bitcode.\n\u003c/p\u003e",
        "fct-module": "LLVM.Parse",
        "fct-package": "llvm-data-interop",
        "fct-signature": "ParserOptions -\u003e FilePath -\u003e IO Module",
        "fct-source": "src/LLVM-Parse.html#parseLLVMFile",
        "fct-type": "function",
        "title": "parseLLVMFile"
      },
      "index": {
        "description": "Parse the named LLVM file into the LLVM form of the IR Module In the case of an error descriptive string will be returned The input file can be either LLVM assembly or bitcode",
        "hierarchy": "LLVM Parse",
        "module": "LLVM.Parse",
        "name": "parseLLVMFile",
        "normalized": "ParserOptions-\u003eFilePath-\u003eIO Module",
        "package": "llvm-data-interop",
        "partial": "LLVMFile",
        "signature": "ParserOptions-\u003eFilePath-\u003eIO Module"
      }
    }
  }
]