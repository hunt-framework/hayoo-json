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
        "word": "llvm-data-interop"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module converts the C form of the LLVM IR into a fully\n referential Haskell version of the IR.  The translation is slightly\n lossy around integral types in some cases, as Haskell Ints do not\n have the same range as C ints.  In the vast majority of cases this\n should not really be an issue, but it is possible to lose\n information.  If it is an issue it can be changed.\n\u003c/p\u003e\u003cp\u003eNote that this uses BasicHashTables as mappings.  Switching to\n LinearHashTable has less space overhead but makes performance tank.\n Don't be tempted.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "LLVM.Parse",
          "name": "Parse",
          "package": "llvm-data-interop",
          "source": "src/LLVM-Parse.html",
          "type": "module"
        },
        "index": {
          "description": "This module converts the form of the LLVM IR into fully referential Haskell version of the IR The translation is slightly lossy around integral types in some cases as Haskell Ints do not have the same range as ints In the vast majority of cases this should not really be an issue but it is possible to lose information If it is an issue it can be changed Note that this uses BasicHashTables as mappings Switching to LinearHashTable has less space overhead but makes performance tank Don be tempted",
          "hierarchy": "LLVM Parse",
          "module": "LLVM.Parse",
          "name": "Parse",
          "package": "llvm-data-interop",
          "partial": "Parse",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/llvm-data-interop/docs/LLVM-Parse.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOptions controlling how \u003ccode\u003eModule\u003c/code\u003es are constructed.\n\u003c/p\u003e",
          "module": "LLVM.Parse",
          "name": "ParserOptions",
          "package": "llvm-data-interop",
          "source": "src/LLVM-Parse.html#ParserOptions",
          "type": "data"
        },
        "index": {
          "description": "Options controlling how Module are constructed",
          "hierarchy": "LLVM Parse",
          "module": "LLVM.Parse",
          "name": "ParserOptions",
          "package": "llvm-data-interop",
          "partial": "Parser Options",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/llvm-data-interop/docs/LLVM-Parse.html#t:ParserOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefines the level of precision of position information in the\n metadata.  LLVM gives very precise information, but tracking all of\n it can consume excessive amounts of space.  This option allows it\n to be selectively discarded.\n\u003c/p\u003e",
          "module": "LLVM.Parse",
          "name": "PositionPrecision",
          "package": "llvm-data-interop",
          "source": "src/LLVM-Parse.html#PositionPrecision",
          "type": "data"
        },
        "index": {
          "description": "Defines the level of precision of position information in the metadata LLVM gives very precise information but tracking all of it can consume excessive amounts of space This option allows it to be selectively discarded",
          "hierarchy": "LLVM Parse",
          "module": "LLVM.Parse",
          "name": "PositionPrecision",
          "package": "llvm-data-interop",
          "partial": "Position Precision",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/llvm-data-interop/docs/LLVM-Parse.html#t:PositionPrecision"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Parse",
          "name": "TranslationException",
          "package": "llvm-data-interop",
          "source": "src/LLVM-Parse.html#TranslationException",
          "type": "data"
        },
        "index": {
          "hierarchy": "LLVM Parse",
          "module": "LLVM.Parse",
          "name": "TranslationException",
          "package": "llvm-data-interop",
          "partial": "Translation Exception",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/llvm-data-interop/docs/LLVM-Parse.html#t:TranslationException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Parse",
          "name": "InvalidAliasInTranslateValue",
          "package": "llvm-data-interop",
          "signature": "InvalidAliasInTranslateValue",
          "source": "src/LLVM-Parse.html#TranslationException",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Parse",
          "module": "LLVM.Parse",
          "name": "InvalidAliasInTranslateValue",
          "package": "llvm-data-interop",
          "partial": "Invalid Alias In Translate Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-data-interop/docs/LLVM-Parse.html#v:InvalidAliasInTranslateValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Parse",
          "name": "InvalidBinaryOp",
          "package": "llvm-data-interop",
          "signature": "InvalidBinaryOp !Int",
          "source": "src/LLVM-Parse.html#TranslationException",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Parse",
          "module": "LLVM.Parse",
          "name": "InvalidBinaryOp",
          "package": "llvm-data-interop",
          "partial": "Invalid Binary Op",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-data-interop/docs/LLVM-Parse.html#v:InvalidBinaryOp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Parse",
          "name": "InvalidBlockAddressBlock",
          "package": "llvm-data-interop",
          "signature": "InvalidBlockAddressBlock Value",
          "source": "src/LLVM-Parse.html#TranslationException",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Parse",
          "module": "LLVM.Parse",
          "name": "InvalidBlockAddressBlock",
          "package": "llvm-data-interop",
          "partial": "Invalid Block Address Block",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-data-interop/docs/LLVM-Parse.html#v:InvalidBlockAddressBlock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Parse",
          "name": "InvalidBlockAddressFunction",
          "package": "llvm-data-interop",
          "signature": "InvalidBlockAddressFunction Value",
          "source": "src/LLVM-Parse.html#TranslationException",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Parse",
          "module": "LLVM.Parse",
          "name": "InvalidBlockAddressFunction",
          "package": "llvm-data-interop",
          "partial": "Invalid Block Address Function",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-data-interop/docs/LLVM-Parse.html#v:InvalidBlockAddressFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Parse",
          "name": "InvalidBranchInst",
          "package": "llvm-data-interop",
          "signature": "InvalidBranchInst",
          "source": "src/LLVM-Parse.html#TranslationException",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Parse",
          "module": "LLVM.Parse",
          "name": "InvalidBranchInst",
          "package": "llvm-data-interop",
          "partial": "Invalid Branch Inst",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-data-interop/docs/LLVM-Parse.html#v:InvalidBranchInst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Parse",
          "name": "InvalidBranchTarget",
          "package": "llvm-data-interop",
          "signature": "InvalidBranchTarget Value",
          "source": "src/LLVM-Parse.html#TranslationException",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Parse",
          "module": "LLVM.Parse",
          "name": "InvalidBranchTarget",
          "package": "llvm-data-interop",
          "partial": "Invalid Branch Target",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-data-interop/docs/LLVM-Parse.html#v:InvalidBranchTarget"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Parse",
          "name": "InvalidDataLayout",
          "package": "llvm-data-interop",
          "signature": "InvalidDataLayout Text String",
          "source": "src/LLVM-Parse.html#TranslationException",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Parse",
          "module": "LLVM.Parse",
          "name": "InvalidDataLayout",
          "package": "llvm-data-interop",
          "partial": "Invalid Data Layout",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-data-interop/docs/LLVM-Parse.html#v:InvalidDataLayout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Parse",
          "name": "InvalidExtractElementInst",
          "package": "llvm-data-interop",
          "signature": "InvalidExtractElementInst !Int",
          "source": "src/LLVM-Parse.html#TranslationException",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Parse",
          "module": "LLVM.Parse",
          "name": "InvalidExtractElementInst",
          "package": "llvm-data-interop",
          "partial": "Invalid Extract Element Inst",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-data-interop/docs/LLVM-Parse.html#v:InvalidExtractElementInst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Parse",
          "name": "InvalidExtractValueInst",
          "package": "llvm-data-interop",
          "signature": "InvalidExtractValueInst !Int",
          "source": "src/LLVM-Parse.html#TranslationException",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Parse",
          "module": "LLVM.Parse",
          "name": "InvalidExtractValueInst",
          "package": "llvm-data-interop",
          "partial": "Invalid Extract Value Inst",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-data-interop/docs/LLVM-Parse.html#v:InvalidExtractValueInst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Parse",
          "name": "InvalidFunctionInTranslateValue",
          "package": "llvm-data-interop",
          "signature": "InvalidFunctionInTranslateValue",
          "source": "src/LLVM-Parse.html#TranslationException",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Parse",
          "module": "LLVM.Parse",
          "name": "InvalidFunctionInTranslateValue",
          "package": "llvm-data-interop",
          "partial": "Invalid Function In Translate Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-data-interop/docs/LLVM-Parse.html#v:InvalidFunctionInTranslateValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Parse",
          "name": "InvalidGEPInst",
          "package": "llvm-data-interop",
          "signature": "InvalidGEPInst !Int",
          "source": "src/LLVM-Parse.html#TranslationException",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Parse",
          "module": "LLVM.Parse",
          "name": "InvalidGEPInst",
          "package": "llvm-data-interop",
          "partial": "Invalid GEPInst",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-data-interop/docs/LLVM-Parse.html#v:InvalidGEPInst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Parse",
          "name": "InvalidGlobalVarInTranslateValue",
          "package": "llvm-data-interop",
          "signature": "InvalidGlobalVarInTranslateValue",
          "source": "src/LLVM-Parse.html#TranslationException",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Parse",
          "module": "LLVM.Parse",
          "name": "InvalidGlobalVarInTranslateValue",
          "package": "llvm-data-interop",
          "partial": "Invalid Global Var In Translate Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-data-interop/docs/LLVM-Parse.html#v:InvalidGlobalVarInTranslateValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Parse",
          "name": "InvalidIndirectBranchOperands",
          "package": "llvm-data-interop",
          "signature": "InvalidIndirectBranchOperands",
          "source": "src/LLVM-Parse.html#TranslationException",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Parse",
          "module": "LLVM.Parse",
          "name": "InvalidIndirectBranchOperands",
          "package": "llvm-data-interop",
          "partial": "Invalid Indirect Branch Operands",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-data-interop/docs/LLVM-Parse.html#v:InvalidIndirectBranchOperands"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Parse",
          "name": "InvalidInsertElementInst",
          "package": "llvm-data-interop",
          "signature": "InvalidInsertElementInst !Int",
          "source": "src/LLVM-Parse.html#TranslationException",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Parse",
          "module": "LLVM.Parse",
          "name": "InvalidInsertElementInst",
          "package": "llvm-data-interop",
          "partial": "Invalid Insert Element Inst",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-data-interop/docs/LLVM-Parse.html#v:InvalidInsertElementInst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Parse",
          "name": "InvalidInsertValueInst",
          "package": "llvm-data-interop",
          "signature": "InvalidInsertValueInst !Int",
          "source": "src/LLVM-Parse.html#TranslationException",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Parse",
          "module": "LLVM.Parse",
          "name": "InvalidInsertValueInst",
          "package": "llvm-data-interop",
          "partial": "Invalid Insert Value Inst",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-data-interop/docs/LLVM-Parse.html#v:InvalidInsertValueInst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Parse",
          "name": "InvalidResumeInst",
          "package": "llvm-data-interop",
          "signature": "InvalidResumeInst !Int",
          "source": "src/LLVM-Parse.html#TranslationException",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Parse",
          "module": "LLVM.Parse",
          "name": "InvalidResumeInst",
          "package": "llvm-data-interop",
          "partial": "Invalid Resume Inst",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-data-interop/docs/LLVM-Parse.html#v:InvalidResumeInst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Parse",
          "name": "InvalidSelectArgs",
          "package": "llvm-data-interop",
          "signature": "InvalidSelectArgs !Int",
          "source": "src/LLVM-Parse.html#TranslationException",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Parse",
          "module": "LLVM.Parse",
          "name": "InvalidSelectArgs",
          "package": "llvm-data-interop",
          "partial": "Invalid Select Args",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-data-interop/docs/LLVM-Parse.html#v:InvalidSelectArgs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Parse",
          "name": "InvalidShuffleVectorInst",
          "package": "llvm-data-interop",
          "signature": "InvalidShuffleVectorInst !Int",
          "source": "src/LLVM-Parse.html#TranslationException",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Parse",
          "module": "LLVM.Parse",
          "name": "InvalidShuffleVectorInst",
          "package": "llvm-data-interop",
          "partial": "Invalid Shuffle Vector Inst",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-data-interop/docs/LLVM-Parse.html#v:InvalidShuffleVectorInst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Parse",
          "name": "InvalidSwitchLayout",
          "package": "llvm-data-interop",
          "signature": "InvalidSwitchLayout",
          "source": "src/LLVM-Parse.html#TranslationException",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Parse",
          "module": "LLVM.Parse",
          "name": "InvalidSwitchLayout",
          "package": "llvm-data-interop",
          "partial": "Invalid Switch Layout",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-data-interop/docs/LLVM-Parse.html#v:InvalidSwitchLayout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Parse",
          "name": "InvalidSwitchTarget",
          "package": "llvm-data-interop",
          "signature": "InvalidSwitchTarget Value",
          "source": "src/LLVM-Parse.html#TranslationException",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Parse",
          "module": "LLVM.Parse",
          "name": "InvalidSwitchTarget",
          "package": "llvm-data-interop",
          "partial": "Invalid Switch Target",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-data-interop/docs/LLVM-Parse.html#v:InvalidSwitchTarget"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Parse",
          "name": "InvalidTag",
          "package": "llvm-data-interop",
          "signature": "InvalidTag String ValueTag",
          "source": "src/LLVM-Parse.html#TranslationException",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Parse",
          "module": "LLVM.Parse",
          "name": "InvalidTag",
          "package": "llvm-data-interop",
          "partial": "Invalid Tag",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-data-interop/docs/LLVM-Parse.html#v:InvalidTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Parse",
          "name": "InvalidUnaryOp",
          "package": "llvm-data-interop",
          "signature": "InvalidUnaryOp !Int",
          "source": "src/LLVM-Parse.html#TranslationException",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Parse",
          "module": "LLVM.Parse",
          "name": "InvalidUnaryOp",
          "package": "llvm-data-interop",
          "partial": "Invalid Unary Op",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-data-interop/docs/LLVM-Parse.html#v:InvalidUnaryOp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Parse",
          "name": "InvalidUnconditionalBranchTarget",
          "package": "llvm-data-interop",
          "signature": "InvalidUnconditionalBranchTarget Value",
          "source": "src/LLVM-Parse.html#TranslationException",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Parse",
          "module": "LLVM.Parse",
          "name": "InvalidUnconditionalBranchTarget",
          "package": "llvm-data-interop",
          "partial": "Invalid Unconditional Branch Target",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-data-interop/docs/LLVM-Parse.html#v:InvalidUnconditionalBranchTarget"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Parse",
          "name": "KnotTyingFailure",
          "package": "llvm-data-interop",
          "signature": "KnotTyingFailure ValueTag",
          "source": "src/LLVM-Parse.html#TranslationException",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Parse",
          "module": "LLVM.Parse",
          "name": "KnotTyingFailure",
          "package": "llvm-data-interop",
          "partial": "Knot Tying Failure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-data-interop/docs/LLVM-Parse.html#v:KnotTyingFailure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Parse",
          "name": "MetaKnotFailure",
          "package": "llvm-data-interop",
          "signature": "MetaKnotFailure",
          "source": "src/LLVM-Parse.html#TranslationException",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Parse",
          "module": "LLVM.Parse",
          "name": "MetaKnotFailure",
          "package": "llvm-data-interop",
          "partial": "Meta Knot Failure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-data-interop/docs/LLVM-Parse.html#v:MetaKnotFailure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Parse",
          "name": "NoModule",
          "package": "llvm-data-interop",
          "signature": "NoModule",
          "source": "src/LLVM-Parse.html#TranslationException",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Parse",
          "module": "LLVM.Parse",
          "name": "NoModule",
          "package": "llvm-data-interop",
          "partial": "No Module",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-data-interop/docs/LLVM-Parse.html#v:NoModule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Parse",
          "name": "NonConstantTag",
          "package": "llvm-data-interop",
          "signature": "NonConstantTag ValueTag",
          "source": "src/LLVM-Parse.html#TranslationException",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Parse",
          "module": "LLVM.Parse",
          "name": "NonConstantTag",
          "package": "llvm-data-interop",
          "partial": "Non Constant Tag",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-data-interop/docs/LLVM-Parse.html#v:NonConstantTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Parse",
          "name": "NonInstructionTag",
          "package": "llvm-data-interop",
          "signature": "NonInstructionTag ValueTag",
          "source": "src/LLVM-Parse.html#TranslationException",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Parse",
          "module": "LLVM.Parse",
          "name": "NonInstructionTag",
          "package": "llvm-data-interop",
          "partial": "Non Instruction Tag",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-data-interop/docs/LLVM-Parse.html#v:NonInstructionTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Parse",
          "name": "ParserOptions",
          "package": "llvm-data-interop",
          "signature": "ParserOptions",
          "source": "src/LLVM-Parse.html#ParserOptions",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Parse",
          "module": "LLVM.Parse",
          "name": "ParserOptions",
          "package": "llvm-data-interop",
          "partial": "Parser Options",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-data-interop/docs/LLVM-Parse.html#v:ParserOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDiscard all position information\n\u003c/p\u003e",
          "module": "LLVM.Parse",
          "name": "PositionNone",
          "package": "llvm-data-interop",
          "signature": "PositionNone",
          "source": "src/LLVM-Parse.html#PositionPrecision",
          "type": "function"
        },
        "index": {
          "description": "Discard all position information",
          "hierarchy": "LLVM Parse",
          "module": "LLVM.Parse",
          "name": "PositionNone",
          "package": "llvm-data-interop",
          "partial": "Position None",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-data-interop/docs/LLVM-Parse.html#v:PositionNone"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePreserve all information from LLVM (line\n and column numbers)\n\u003c/p\u003e",
          "module": "LLVM.Parse",
          "name": "PositionPrecise",
          "package": "llvm-data-interop",
          "signature": "PositionPrecise",
          "source": "src/LLVM-Parse.html#PositionPrecision",
          "type": "function"
        },
        "index": {
          "description": "Preserve all information from LLVM line and column numbers",
          "hierarchy": "LLVM Parse",
          "module": "LLVM.Parse",
          "name": "PositionPrecise",
          "package": "llvm-data-interop",
          "partial": "Position Precise",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-data-interop/docs/LLVM-Parse.html#v:PositionPrecise"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Parse",
          "name": "TooManyReturnValues",
          "package": "llvm-data-interop",
          "signature": "TooManyReturnValues",
          "source": "src/LLVM-Parse.html#TranslationException",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Parse",
          "module": "LLVM.Parse",
          "name": "TooManyReturnValues",
          "package": "llvm-data-interop",
          "partial": "Too Many Return Values",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-data-interop/docs/LLVM-Parse.html#v:TooManyReturnValues"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Parse",
          "name": "TypeKnotTyingFailure",
          "package": "llvm-data-interop",
          "signature": "TypeKnotTyingFailure TypeTag",
          "source": "src/LLVM-Parse.html#TranslationException",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Parse",
          "module": "LLVM.Parse",
          "name": "TypeKnotTyingFailure",
          "package": "llvm-data-interop",
          "partial": "Type Knot Tying Failure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-data-interop/docs/LLVM-Parse.html#v:TypeKnotTyingFailure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Parse",
          "name": "UnparsableBitcode",
          "package": "llvm-data-interop",
          "signature": "UnparsableBitcode String",
          "source": "src/LLVM-Parse.html#TranslationException",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Parse",
          "module": "LLVM.Parse",
          "name": "UnparsableBitcode",
          "package": "llvm-data-interop",
          "partial": "Unparsable Bitcode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-data-interop/docs/LLVM-Parse.html#v:UnparsableBitcode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReasonable default parsing options\n\u003c/p\u003e",
          "module": "LLVM.Parse",
          "name": "defaultParserOptions",
          "package": "llvm-data-interop",
          "signature": "ParserOptions",
          "source": "src/LLVM-Parse.html#defaultParserOptions",
          "type": "function"
        },
        "index": {
          "description": "Reasonable default parsing options",
          "hierarchy": "LLVM Parse",
          "module": "LLVM.Parse",
          "name": "defaultParserOptions",
          "package": "llvm-data-interop",
          "partial": "Parser Options",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-data-interop/docs/LLVM-Parse.html#v:defaultParserOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse LLVM IR from a Handle into a \u003ccode\u003eModule\u003c/code\u003e\n\u003c/p\u003e",
          "module": "LLVM.Parse",
          "name": "hParseLLVM",
          "package": "llvm-data-interop",
          "signature": "ParserOptions -\u003e Handle -\u003e IO Module",
          "source": "src/LLVM-Parse.html#hParseLLVM",
          "type": "function"
        },
        "index": {
          "description": "Parse LLVM IR from Handle into Module",
          "hierarchy": "LLVM Parse",
          "module": "LLVM.Parse",
          "name": "hParseLLVM",
          "normalized": "ParserOptions-\u003eHandle-\u003eIO Module",
          "package": "llvm-data-interop",
          "partial": "Parse LLVM",
          "signature": "ParserOptions-\u003eHandle-\u003eIO Module",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-data-interop/docs/LLVM-Parse.html#v:hParseLLVM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Parse",
          "name": "metaPositionPrecision",
          "package": "llvm-data-interop",
          "signature": "PositionPrecision",
          "source": "src/LLVM-Parse.html#ParserOptions",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Parse",
          "module": "LLVM.Parse",
          "name": "metaPositionPrecision",
          "package": "llvm-data-interop",
          "partial": "Position Precision",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-data-interop/docs/LLVM-Parse.html#v:metaPositionPrecision"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse the LLVM IR (either assembly or bitcode) from a lazy ByteString\n into a \u003ccode\u003eModule\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "LLVM.Parse",
          "name": "parseLLVM",
          "package": "llvm-data-interop",
          "signature": "ParserOptions -\u003e ByteString -\u003e IO Module",
          "source": "src/LLVM-Parse.html#parseLLVM",
          "type": "function"
        },
        "index": {
          "description": "Parse the LLVM IR either assembly or bitcode from lazy ByteString into Module",
          "hierarchy": "LLVM Parse",
          "module": "LLVM.Parse",
          "name": "parseLLVM",
          "normalized": "ParserOptions-\u003eByteString-\u003eIO Module",
          "package": "llvm-data-interop",
          "partial": "LLVM",
          "signature": "ParserOptions-\u003eByteString-\u003eIO Module",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-data-interop/docs/LLVM-Parse.html#v:parseLLVM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse the named LLVM file into the LLVM form of the IR (a\n \u003ccode\u003eModule\u003c/code\u003e).  In the case of an error, a descriptive string will be\n returned.  The input file can be either LLVM assembly or bitcode.\n\u003c/p\u003e",
          "module": "LLVM.Parse",
          "name": "parseLLVMFile",
          "package": "llvm-data-interop",
          "signature": "ParserOptions -\u003e FilePath -\u003e IO Module",
          "source": "src/LLVM-Parse.html#parseLLVMFile",
          "type": "function"
        },
        "index": {
          "description": "Parse the named LLVM file into the LLVM form of the IR Module In the case of an error descriptive string will be returned The input file can be either LLVM assembly or bitcode",
          "hierarchy": "LLVM Parse",
          "module": "LLVM.Parse",
          "name": "parseLLVMFile",
          "normalized": "ParserOptions-\u003eFilePath-\u003eIO Module",
          "package": "llvm-data-interop",
          "partial": "LLVMFile",
          "signature": "ParserOptions-\u003eFilePath-\u003eIO Module",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-data-interop/docs/LLVM-Parse.html#v:parseLLVMFile"
      }
    }
  ]
]