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
        "word": "llvm-analysis"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines an abstraction over field accesses of\n structures called AccessPaths.  A concrete access path is rooted at\n a value, while an abstract access path is rooted at a type.  Both\n include a list of \u003ccode\u003e\u003ca\u003eAccessType\u003c/a\u003e\u003c/code\u003es that denote dereferences of\n pointers, field accesses, and array references.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "LLVM.Analysis.AccessPath",
          "name": "AccessPath",
          "package": "llvm-analysis",
          "source": "src/LLVM-Analysis-AccessPath.html",
          "type": "module"
        },
        "index": {
          "description": "This module defines an abstraction over field accesses of structures called AccessPaths concrete access path is rooted at value while an abstract access path is rooted at type Both include list of AccessType that denote dereferences of pointers field accesses and array references",
          "hierarchy": "LLVM Analysis AccessPath",
          "module": "LLVM.Analysis.AccessPath",
          "name": "AccessPath",
          "package": "llvm-analysis",
          "partial": "Access Path",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-AccessPath.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe sequence of field accesses used to reference a field\n structure.\n\u003c/p\u003e",
          "module": "LLVM.Analysis.AccessPath",
          "name": "AbstractAccessPath",
          "package": "llvm-analysis",
          "source": "src/LLVM-Analysis-AccessPath.html#AbstractAccessPath",
          "type": "data"
        },
        "index": {
          "description": "The sequence of field accesses used to reference field structure",
          "hierarchy": "LLVM Analysis AccessPath",
          "module": "LLVM.Analysis.AccessPath",
          "name": "AbstractAccessPath",
          "package": "llvm-analysis",
          "partial": "Abstract Access Path",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-AccessPath.html#t:AbstractAccessPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Analysis.AccessPath",
          "name": "AccessPath",
          "package": "llvm-analysis",
          "source": "src/LLVM-Analysis-AccessPath.html#AccessPath",
          "type": "data"
        },
        "index": {
          "hierarchy": "LLVM Analysis AccessPath",
          "module": "LLVM.Analysis.AccessPath",
          "name": "AccessPath",
          "package": "llvm-analysis",
          "partial": "Access Path",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-AccessPath.html#t:AccessPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Analysis.AccessPath",
          "name": "AccessPathError",
          "package": "llvm-analysis",
          "source": "src/LLVM-Analysis-AccessPath.html#AccessPathError",
          "type": "data"
        },
        "index": {
          "hierarchy": "LLVM Analysis AccessPath",
          "module": "LLVM.Analysis.AccessPath",
          "name": "AccessPathError",
          "package": "llvm-analysis",
          "partial": "Access Path Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-AccessPath.html#t:AccessPathError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Analysis.AccessPath",
          "name": "AccessType",
          "package": "llvm-analysis",
          "source": "src/LLVM-Analysis-AccessPath.html#AccessType",
          "type": "data"
        },
        "index": {
          "hierarchy": "LLVM Analysis AccessPath",
          "module": "LLVM.Analysis.AccessPath",
          "name": "AccessType",
          "package": "llvm-analysis",
          "partial": "Access Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-AccessPath.html#t:AccessType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Analysis.AccessPath",
          "name": "AbstractAccessPath",
          "package": "llvm-analysis",
          "signature": "AbstractAccessPath",
          "source": "src/LLVM-Analysis-AccessPath.html#AbstractAccessPath",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Analysis AccessPath",
          "module": "LLVM.Analysis.AccessPath",
          "name": "AbstractAccessPath",
          "package": "llvm-analysis",
          "partial": "Abstract Access Path",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-AccessPath.html#v:AbstractAccessPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn array access; all array elements are treated\n as a unit\n\u003c/p\u003e",
          "module": "LLVM.Analysis.AccessPath",
          "name": "AccessArray",
          "package": "llvm-analysis",
          "signature": "AccessArray",
          "source": "src/LLVM-Analysis-AccessPath.html#AccessType",
          "type": "function"
        },
        "index": {
          "description": "An array access all array elements are treated as unit",
          "hierarchy": "LLVM Analysis AccessPath",
          "module": "LLVM.Analysis.AccessPath",
          "name": "AccessArray",
          "package": "llvm-analysis",
          "partial": "Access Array",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-AccessPath.html#v:AccessArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA plain pointer dereference\n\u003c/p\u003e",
          "module": "LLVM.Analysis.AccessPath",
          "name": "AccessDeref",
          "package": "llvm-analysis",
          "signature": "AccessDeref",
          "source": "src/LLVM-Analysis-AccessPath.html#AccessType",
          "type": "function"
        },
        "index": {
          "description": "plain pointer dereference",
          "hierarchy": "LLVM Analysis AccessPath",
          "module": "LLVM.Analysis.AccessPath",
          "name": "AccessDeref",
          "package": "llvm-analysis",
          "partial": "Access Deref",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-AccessPath.html#v:AccessDeref"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eField access of the field with this index\n\u003c/p\u003e",
          "module": "LLVM.Analysis.AccessPath",
          "name": "AccessField",
          "package": "llvm-analysis",
          "signature": "AccessField !Int",
          "source": "src/LLVM-Analysis-AccessPath.html#AccessType",
          "type": "function"
        },
        "index": {
          "description": "Field access of the field with this index",
          "hierarchy": "LLVM Analysis AccessPath",
          "module": "LLVM.Analysis.AccessPath",
          "name": "AccessField",
          "package": "llvm-analysis",
          "partial": "Access Field",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-AccessPath.html#v:AccessField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Analysis.AccessPath",
          "name": "AccessPath",
          "package": "llvm-analysis",
          "signature": "AccessPath",
          "source": "src/LLVM-Analysis-AccessPath.html#AccessPath",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Analysis AccessPath",
          "module": "LLVM.Analysis.AccessPath",
          "name": "AccessPath",
          "package": "llvm-analysis",
          "partial": "Access Path",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-AccessPath.html#v:AccessPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA union access.  The union discriminator is the\n \u003cem\u003etype\u003c/em\u003e that this AccessType is tagged with in the\n AccessPath.  Unions in LLVM do not have an\n explicit representation of their fields, so there\n is no index possible here.\n\u003c/p\u003e",
          "module": "LLVM.Analysis.AccessPath",
          "name": "AccessUnion",
          "package": "llvm-analysis",
          "signature": "AccessUnion",
          "source": "src/LLVM-Analysis-AccessPath.html#AccessType",
          "type": "function"
        },
        "index": {
          "description": "union access The union discriminator is the type that this AccessType is tagged with in the AccessPath Unions in LLVM do not have an explicit representation of their fields so there is no index possible here",
          "hierarchy": "LLVM Analysis AccessPath",
          "module": "LLVM.Analysis.AccessPath",
          "name": "AccessUnion",
          "package": "llvm-analysis",
          "partial": "Access Union",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-AccessPath.html#v:AccessUnion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Analysis.AccessPath",
          "name": "BaseTypeMismatch",
          "package": "llvm-analysis",
          "signature": "BaseTypeMismatch Type Type",
          "source": "src/LLVM-Analysis-AccessPath.html#AccessPathError",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Analysis AccessPath",
          "module": "LLVM.Analysis.AccessPath",
          "name": "BaseTypeMismatch",
          "package": "llvm-analysis",
          "partial": "Base Type Mismatch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-AccessPath.html#v:BaseTypeMismatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Analysis.AccessPath",
          "name": "CannotExternalizeType",
          "package": "llvm-analysis",
          "signature": "CannotExternalizeType Type",
          "source": "src/LLVM-Analysis-AccessPath.html#AccessPathError",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Analysis AccessPath",
          "module": "LLVM.Analysis.AccessPath",
          "name": "CannotExternalizeType",
          "package": "llvm-analysis",
          "partial": "Cannot Externalize Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-AccessPath.html#v:CannotExternalizeType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Analysis.AccessPath",
          "name": "CannotFollowPath",
          "package": "llvm-analysis",
          "signature": "CannotFollowPath AbstractAccessPath Value",
          "source": "src/LLVM-Analysis-AccessPath.html#AccessPathError",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Analysis AccessPath",
          "module": "LLVM.Analysis.AccessPath",
          "name": "CannotFollowPath",
          "package": "llvm-analysis",
          "partial": "Cannot Follow Path",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-AccessPath.html#v:CannotFollowPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Analysis.AccessPath",
          "name": "EndpointTypeMismatch",
          "package": "llvm-analysis",
          "signature": "EndpointTypeMismatch Type Type",
          "source": "src/LLVM-Analysis-AccessPath.html#AccessPathError",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Analysis AccessPath",
          "module": "LLVM.Analysis.AccessPath",
          "name": "EndpointTypeMismatch",
          "package": "llvm-analysis",
          "partial": "Endpoint Type Mismatch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-AccessPath.html#v:EndpointTypeMismatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Analysis.AccessPath",
          "name": "IrreducableAccessPath",
          "package": "llvm-analysis",
          "signature": "IrreducableAccessPath AbstractAccessPath",
          "source": "src/LLVM-Analysis-AccessPath.html#AccessPathError",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Analysis AccessPath",
          "module": "LLVM.Analysis.AccessPath",
          "name": "IrreducableAccessPath",
          "package": "llvm-analysis",
          "partial": "Irreducable Access Path",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-AccessPath.html#v:IrreducableAccessPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Analysis.AccessPath",
          "name": "NoPathError",
          "package": "llvm-analysis",
          "signature": "NoPathError Value",
          "source": "src/LLVM-Analysis-AccessPath.html#AccessPathError",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Analysis AccessPath",
          "module": "LLVM.Analysis.AccessPath",
          "name": "NoPathError",
          "package": "llvm-analysis",
          "partial": "No Path Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-AccessPath.html#v:NoPathError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Analysis.AccessPath",
          "name": "NonConstantInPath",
          "package": "llvm-analysis",
          "signature": "NonConstantInPath AbstractAccessPath Value",
          "source": "src/LLVM-Analysis-AccessPath.html#AccessPathError",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Analysis AccessPath",
          "module": "LLVM.Analysis.AccessPath",
          "name": "NonConstantInPath",
          "package": "llvm-analysis",
          "partial": "Non Constant In Path",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-AccessPath.html#v:NonConstantInPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Analysis.AccessPath",
          "name": "NotMemoryInstruction",
          "package": "llvm-analysis",
          "signature": "NotMemoryInstruction Instruction",
          "source": "src/LLVM-Analysis-AccessPath.html#AccessPathError",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Analysis AccessPath",
          "module": "LLVM.Analysis.AccessPath",
          "name": "NotMemoryInstruction",
          "package": "llvm-analysis",
          "partial": "Not Memory Instruction",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-AccessPath.html#v:NotMemoryInstruction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Analysis.AccessPath",
          "name": "abstractAccessPath",
          "package": "llvm-analysis",
          "signature": "AccessPath -\u003e AbstractAccessPath",
          "source": "src/LLVM-Analysis-AccessPath.html#abstractAccessPath",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Analysis AccessPath",
          "module": "LLVM.Analysis.AccessPath",
          "name": "abstractAccessPath",
          "normalized": "AccessPath-\u003eAbstractAccessPath",
          "package": "llvm-analysis",
          "partial": "Access Path",
          "signature": "AccessPath-\u003eAbstractAccessPath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-AccessPath.html#v:abstractAccessPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Analysis.AccessPath",
          "name": "abstractAccessPathBaseType",
          "package": "llvm-analysis",
          "signature": "Type",
          "source": "src/LLVM-Analysis-AccessPath.html#AbstractAccessPath",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Analysis AccessPath",
          "module": "LLVM.Analysis.AccessPath",
          "name": "abstractAccessPathBaseType",
          "package": "llvm-analysis",
          "partial": "Access Path Base Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-AccessPath.html#v:abstractAccessPathBaseType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Analysis.AccessPath",
          "name": "abstractAccessPathComponents",
          "package": "llvm-analysis",
          "signature": "AbstractAccessPath -\u003e [AccessType]",
          "source": "src/LLVM-Analysis-AccessPath.html#abstractAccessPathComponents",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Analysis AccessPath",
          "module": "LLVM.Analysis.AccessPath",
          "name": "abstractAccessPathComponents",
          "normalized": "AbstractAccessPath-\u003e[AccessType]",
          "package": "llvm-analysis",
          "partial": "Access Path Components",
          "signature": "AbstractAccessPath-\u003e[AccessType]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-AccessPath.html#v:abstractAccessPathComponents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Analysis.AccessPath",
          "name": "abstractAccessPathEndType",
          "package": "llvm-analysis",
          "signature": "Type",
          "source": "src/LLVM-Analysis-AccessPath.html#AbstractAccessPath",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Analysis AccessPath",
          "module": "LLVM.Analysis.AccessPath",
          "name": "abstractAccessPathEndType",
          "package": "llvm-analysis",
          "partial": "Access Path End Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-AccessPath.html#v:abstractAccessPathEndType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Analysis.AccessPath",
          "name": "abstractAccessPathTaggedComponents",
          "package": "llvm-analysis",
          "signature": "[(Type, AccessType)]",
          "source": "src/LLVM-Analysis-AccessPath.html#AbstractAccessPath",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Analysis AccessPath",
          "module": "LLVM.Analysis.AccessPath",
          "name": "abstractAccessPathTaggedComponents",
          "normalized": "[(Type,AccessType)]",
          "package": "llvm-analysis",
          "partial": "Access Path Tagged Components",
          "signature": "[(Type,AccessType)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-AccessPath.html#v:abstractAccessPathTaggedComponents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFor Store, RMW, and CmpXchg instructions, the returned access\n path describes the field \u003cem\u003estored to\u003c/em\u003e.  For Load instructions, the\n returned access path describes the field loaded.  For\n GetElementPtrInsts, the returned access path describes the field\n whose address was taken/computed.\n\u003c/p\u003e",
          "module": "LLVM.Analysis.AccessPath",
          "name": "accessPath",
          "package": "llvm-analysis",
          "signature": "Instruction -\u003e m AccessPath",
          "source": "src/LLVM-Analysis-AccessPath.html#accessPath",
          "type": "function"
        },
        "index": {
          "description": "For Store RMW and CmpXchg instructions the returned access path describes the field stored to For Load instructions the returned access path describes the field loaded For GetElementPtrInsts the returned access path describes the field whose address was taken computed",
          "hierarchy": "LLVM Analysis AccessPath",
          "module": "LLVM.Analysis.AccessPath",
          "name": "accessPath",
          "normalized": "Instruction-\u003ea AccessPath",
          "package": "llvm-analysis",
          "partial": "Path",
          "signature": "Instruction-\u003em AccessPath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-AccessPath.html#v:accessPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf there are some wonky bitcasts in play, this\n type records the real type of this path, even if the\n base was something unrelated and bitcast.  The real\n type is the type casted \u003cem\u003eto\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "LLVM.Analysis.AccessPath",
          "name": "accessPathBaseType",
          "package": "llvm-analysis",
          "signature": "Type",
          "source": "src/LLVM-Analysis-AccessPath.html#AccessPath",
          "type": "function"
        },
        "index": {
          "description": "If there are some wonky bitcasts in play this type records the real type of this path even if the base was something unrelated and bitcast The real type is the type casted to",
          "hierarchy": "LLVM Analysis AccessPath",
          "module": "LLVM.Analysis.AccessPath",
          "name": "accessPathBaseType",
          "package": "llvm-analysis",
          "partial": "Path Base Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-AccessPath.html#v:accessPathBaseType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Analysis.AccessPath",
          "name": "accessPathBaseValue",
          "package": "llvm-analysis",
          "signature": "Value",
          "source": "src/LLVM-Analysis-AccessPath.html#AccessPath",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Analysis AccessPath",
          "module": "LLVM.Analysis.AccessPath",
          "name": "accessPathBaseValue",
          "package": "llvm-analysis",
          "partial": "Path Base Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-AccessPath.html#v:accessPathBaseValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Analysis.AccessPath",
          "name": "accessPathComponents",
          "package": "llvm-analysis",
          "signature": "AccessPath -\u003e [AccessType]",
          "source": "src/LLVM-Analysis-AccessPath.html#accessPathComponents",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Analysis AccessPath",
          "module": "LLVM.Analysis.AccessPath",
          "name": "accessPathComponents",
          "normalized": "AccessPath-\u003e[AccessType]",
          "package": "llvm-analysis",
          "partial": "Path Components",
          "signature": "AccessPath-\u003e[AccessType]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-AccessPath.html#v:accessPathComponents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Analysis.AccessPath",
          "name": "accessPathEndType",
          "package": "llvm-analysis",
          "signature": "Type",
          "source": "src/LLVM-Analysis-AccessPath.html#AccessPath",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Analysis AccessPath",
          "module": "LLVM.Analysis.AccessPath",
          "name": "accessPathEndType",
          "package": "llvm-analysis",
          "partial": "Path End Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-AccessPath.html#v:accessPathEndType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Analysis.AccessPath",
          "name": "accessPathTaggedComponents",
          "package": "llvm-analysis",
          "signature": "[(Type, AccessType)]",
          "source": "src/LLVM-Analysis-AccessPath.html#AccessPath",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Analysis AccessPath",
          "module": "LLVM.Analysis.AccessPath",
          "name": "accessPathTaggedComponents",
          "normalized": "[(Type,AccessType)]",
          "package": "llvm-analysis",
          "partial": "Path Tagged Components",
          "signature": "[(Type,AccessType)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-AccessPath.html#v:accessPathTaggedComponents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Analysis.AccessPath",
          "name": "appendAccessPath",
          "package": "llvm-analysis",
          "signature": "AbstractAccessPath -\u003e AbstractAccessPath -\u003e m AbstractAccessPath",
          "source": "src/LLVM-Analysis-AccessPath.html#appendAccessPath",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Analysis AccessPath",
          "module": "LLVM.Analysis.AccessPath",
          "name": "appendAccessPath",
          "normalized": "AbstractAccessPath-\u003eAbstractAccessPath-\u003ea AbstractAccessPath",
          "package": "llvm-analysis",
          "partial": "Access Path",
          "signature": "AbstractAccessPath-\u003eAbstractAccessPath-\u003em AbstractAccessPath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-AccessPath.html#v:appendAccessPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert an \u003ccode\u003e\u003ca\u003eAbstractAccessPath\u003c/a\u003e\u003c/code\u003e to a format that can be written\n to disk and read back into another process.  The format is the pair\n of the base name of the structure field being accessed (with\n struct. stripped off) and with any numeric suffixes (which are\n added by llvm) chopped off.  The actually list of \u003ccode\u003e\u003ca\u003eAccessType\u003c/a\u003e\u003c/code\u003es is\n preserved.\n\u003c/p\u003e\u003cp\u003eThe struct name mangling here basically assumes that the types\n exposed via the access path abstraction have the same definition in\n all compilation units.  Ensuring this between runs is basically\n impossible, but it is pretty much always the case.\n\u003c/p\u003e",
          "module": "LLVM.Analysis.AccessPath",
          "name": "externalizeAccessPath",
          "package": "llvm-analysis",
          "signature": "AbstractAccessPath -\u003e m (String, [AccessType])",
          "source": "src/LLVM-Analysis-AccessPath.html#externalizeAccessPath",
          "type": "function"
        },
        "index": {
          "description": "Convert an AbstractAccessPath to format that can be written to disk and read back into another process The format is the pair of the base name of the structure field being accessed with struct stripped off and with any numeric suffixes which are added by llvm chopped off The actually list of AccessType is preserved The struct name mangling here basically assumes that the types exposed via the access path abstraction have the same definition in all compilation units Ensuring this between runs is basically impossible but it is pretty much always the case",
          "hierarchy": "LLVM Analysis AccessPath",
          "module": "LLVM.Analysis.AccessPath",
          "name": "externalizeAccessPath",
          "normalized": "AbstractAccessPath-\u003ea(String,[AccessType])",
          "package": "llvm-analysis",
          "partial": "Access Path",
          "signature": "AbstractAccessPath-\u003em(String,[AccessType])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-AccessPath.html#v:externalizeAccessPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Analysis.AccessPath",
          "name": "followAccessPath",
          "package": "llvm-analysis",
          "signature": "AbstractAccessPath -\u003e Value -\u003e m Value",
          "source": "src/LLVM-Analysis-AccessPath.html#followAccessPath",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Analysis AccessPath",
          "module": "LLVM.Analysis.AccessPath",
          "name": "followAccessPath",
          "normalized": "AbstractAccessPath-\u003eValue-\u003ea Value",
          "package": "llvm-analysis",
          "partial": "Access Path",
          "signature": "AbstractAccessPath-\u003eValue-\u003em Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-AccessPath.html#v:followAccessPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf the access path has more than one field access component, take\n the first field access and the base type to compute a new base type\n (the type of the indicated field) and the rest of the path\n components.  Also allows for the discarding of array accesses.\n\u003c/p\u003e\u003cp\u003eEach call reduces the access path by one component\n\u003c/p\u003e",
          "module": "LLVM.Analysis.AccessPath",
          "name": "reduceAccessPath",
          "package": "llvm-analysis",
          "signature": "AbstractAccessPath -\u003e m AbstractAccessPath",
          "source": "src/LLVM-Analysis-AccessPath.html#reduceAccessPath",
          "type": "function"
        },
        "index": {
          "description": "If the access path has more than one field access component take the first field access and the base type to compute new base type the type of the indicated field and the rest of the path components Also allows for the discarding of array accesses Each call reduces the access path by one component",
          "hierarchy": "LLVM Analysis AccessPath",
          "module": "LLVM.Analysis.AccessPath",
          "name": "reduceAccessPath",
          "normalized": "AbstractAccessPath-\u003ea AbstractAccessPath",
          "package": "llvm-analysis",
          "partial": "Access Path",
          "signature": "AbstractAccessPath-\u003em AbstractAccessPath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-AccessPath.html#v:reduceAccessPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLabel each BasicBlock with the value it *must* return.\n\u003c/p\u003e\u003cp\u003eMost frontends that generate bitcode unify all of the return\n statements of a function and return a phi node that has a return\n value for each branch.  This pass (\u003ccode\u003e\u003ca\u003elabelBlockReturns\u003c/a\u003e\u003c/code\u003e) pushes\n those returns backwards through the control flow graph as labels on\n basic blocks.  The function \u003ccode\u003e\u003ca\u003eblockReturn\u003c/a\u003e\u003c/code\u003e gives the return value\n for a block, if there is a value that must be returned by that\n block.\n\u003c/p\u003e\u003cp\u003eThe algorithm starts from the return instruction.  Non-phi values\n are propagated backwards to all reachable blocks.  Phi values are\n split and the algorithm propagates each phi incoming value back to\n the block it came from.  A value can be propagated from a block BB\n to its predecessor block PB if (and only if) BB postdominates PB.\n Intuitively, the algorithm propagates a return value to a\n predecessor block if that predecessor block *must* return that\n value (hence postdominance).\n\u003c/p\u003e\u003c/div\u003e",
          "module": "LLVM.Analysis.BlockReturnValue",
          "name": "BlockReturnValue",
          "package": "llvm-analysis",
          "source": "src/LLVM-Analysis-BlockReturnValue.html",
          "type": "module"
        },
        "index": {
          "description": "Label each BasicBlock with the value it must return Most frontends that generate bitcode unify all of the return statements of function and return phi node that has return value for each branch This pass labelBlockReturns pushes those returns backwards through the control flow graph as labels on basic blocks The function blockReturn gives the return value for block if there is value that must be returned by that block The algorithm starts from the return instruction Non-phi values are propagated backwards to all reachable blocks Phi values are split and the algorithm propagates each phi incoming value back to the block it came from value can be propagated from block BB to its predecessor block PB if and only if BB postdominates PB Intuitively the algorithm propagates return value to predecessor block if that predecessor block must return that value hence postdominance",
          "hierarchy": "LLVM Analysis BlockReturnValue",
          "module": "LLVM.Analysis.BlockReturnValue",
          "name": "BlockReturnValue",
          "package": "llvm-analysis",
          "partial": "Block Return Value",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-BlockReturnValue.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Analysis.BlockReturnValue",
          "name": "BlockReturns",
          "package": "llvm-analysis",
          "source": "src/LLVM-Analysis-BlockReturnValue.html#BlockReturns",
          "type": "data"
        },
        "index": {
          "hierarchy": "LLVM Analysis BlockReturnValue",
          "module": "LLVM.Analysis.BlockReturnValue",
          "name": "BlockReturns",
          "package": "llvm-analysis",
          "partial": "Block Returns",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-BlockReturnValue.html#t:BlockReturns"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Analysis.BlockReturnValue",
          "name": "HasBlockReturns",
          "package": "llvm-analysis",
          "source": "src/LLVM-Analysis-BlockReturnValue.html#HasBlockReturns",
          "type": "class"
        },
        "index": {
          "hierarchy": "LLVM Analysis BlockReturnValue",
          "module": "LLVM.Analysis.BlockReturnValue",
          "name": "HasBlockReturns",
          "package": "llvm-analysis",
          "partial": "Has Block Returns",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-BlockReturnValue.html#t:HasBlockReturns"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve the Value that must be returned (if any) if the given\n BasicBlock executes.\n\u003c/p\u003e",
          "module": "LLVM.Analysis.BlockReturnValue",
          "name": "blockReturn",
          "package": "llvm-analysis",
          "signature": "brs -\u003e BasicBlock -\u003e Maybe Value",
          "source": "src/LLVM-Analysis-BlockReturnValue.html#blockReturn",
          "type": "function"
        },
        "index": {
          "description": "Retrieve the Value that must be returned if any if the given BasicBlock executes",
          "hierarchy": "LLVM Analysis BlockReturnValue",
          "module": "LLVM.Analysis.BlockReturnValue",
          "name": "blockReturn",
          "normalized": "a-\u003eBasicBlock-\u003eMaybe Value",
          "package": "llvm-analysis",
          "partial": "Return",
          "signature": "brs-\u003eBasicBlock-\u003eMaybe Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-BlockReturnValue.html#v:blockReturn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuilds on the results from \u003ccode\u003e\u003ca\u003eblockReturn\u003c/a\u003e\u003c/code\u003e and reports *all* of the\n values that each block can return (results may not include the\n final block).\n\u003c/p\u003e",
          "module": "LLVM.Analysis.BlockReturnValue",
          "name": "blockReturns",
          "package": "llvm-analysis",
          "signature": "brs -\u003e BasicBlock -\u003e Maybe [Value]",
          "source": "src/LLVM-Analysis-BlockReturnValue.html#blockReturns",
          "type": "function"
        },
        "index": {
          "description": "Builds on the results from blockReturn and reports all of the values that each block can return results may not include the final block",
          "hierarchy": "LLVM Analysis BlockReturnValue",
          "module": "LLVM.Analysis.BlockReturnValue",
          "name": "blockReturns",
          "normalized": "a-\u003eBasicBlock-\u003eMaybe[Value]",
          "package": "llvm-analysis",
          "partial": "Returns",
          "signature": "brs-\u003eBasicBlock-\u003eMaybe[Value]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-BlockReturnValue.html#v:blockReturns"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Analysis.BlockReturnValue",
          "name": "getBlockReturns",
          "package": "llvm-analysis",
          "signature": "a -\u003e BlockReturns",
          "source": "src/LLVM-Analysis-BlockReturnValue.html#getBlockReturns",
          "type": "method"
        },
        "index": {
          "hierarchy": "LLVM Analysis BlockReturnValue",
          "module": "LLVM.Analysis.BlockReturnValue",
          "name": "getBlockReturns",
          "normalized": "a-\u003eBlockReturns",
          "package": "llvm-analysis",
          "partial": "Block Returns",
          "signature": "a-\u003eBlockReturns",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-BlockReturnValue.html#v:getBlockReturns"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the Value that must be returned (if any) if the given\n Instruction is executed.\n\u003c/p\u003e",
          "module": "LLVM.Analysis.BlockReturnValue",
          "name": "instructionReturn",
          "package": "llvm-analysis",
          "signature": "brs -\u003e Instruction -\u003e Maybe Value",
          "source": "src/LLVM-Analysis-BlockReturnValue.html#instructionReturn",
          "type": "function"
        },
        "index": {
          "description": "Return the Value that must be returned if any if the given Instruction is executed",
          "hierarchy": "LLVM Analysis BlockReturnValue",
          "module": "LLVM.Analysis.BlockReturnValue",
          "name": "instructionReturn",
          "normalized": "a-\u003eInstruction-\u003eMaybe Value",
          "package": "llvm-analysis",
          "partial": "Return",
          "signature": "brs-\u003eInstruction-\u003eMaybe Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-BlockReturnValue.html#v:instructionReturn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Analysis.BlockReturnValue",
          "name": "instructionReturns",
          "package": "llvm-analysis",
          "signature": "brs -\u003e Instruction -\u003e Maybe [Value]",
          "source": "src/LLVM-Analysis-BlockReturnValue.html#instructionReturns",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Analysis BlockReturnValue",
          "module": "LLVM.Analysis.BlockReturnValue",
          "name": "instructionReturns",
          "normalized": "a-\u003eInstruction-\u003eMaybe[Value]",
          "package": "llvm-analysis",
          "partial": "Returns",
          "signature": "brs-\u003eInstruction-\u003eMaybe[Value]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-BlockReturnValue.html#v:instructionReturns"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLabel each BasicBlock with the value that it must return (if\n any).\n\u003c/p\u003e",
          "module": "LLVM.Analysis.BlockReturnValue",
          "name": "labelBlockReturns",
          "package": "llvm-analysis",
          "signature": "funcLike -\u003e BlockReturns",
          "source": "src/LLVM-Analysis-BlockReturnValue.html#labelBlockReturns",
          "type": "function"
        },
        "index": {
          "description": "Label each BasicBlock with the value that it must return if any",
          "hierarchy": "LLVM Analysis BlockReturnValue",
          "module": "LLVM.Analysis.BlockReturnValue",
          "name": "labelBlockReturns",
          "normalized": "a-\u003eBlockReturns",
          "package": "llvm-analysis",
          "partial": "Block Returns",
          "signature": "funcLike-\u003eBlockReturns",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-BlockReturnValue.html#v:labelBlockReturns"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eControl Dependence Graphs for the LLVM IR\n\u003c/p\u003e\u003cp\u003eThis module follows the definition of control dependence of Cytron et al\n (http:\u003cem/\u003edl.acm.org/citation.cfm?doid=115372.115320):\n\u003c/p\u003e\u003cp\u003eLet X and Y be nodes in the CFG.  If X appears on every path from Y\n to Exit, then X postdominates Y.  If X postdominates Y but X != Y,\n then X strictly postdominates Y.\n\u003c/p\u003e\u003cp\u003eA CFG node Y is control dependent on a CFG node X if both:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e There is a non-null path p from X-\u003eY such that Y postdominates\n    every node *after* X on p.\n\u003c/li\u003e\u003cli\u003e The node Y does not strictly postdominate the node X.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThis CDG formulation does not insert a dummy Start node to link\n together all of the top-level nodes.  This just means that the set\n of control dependencies can be empty if code will be executed\n unconditionally.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "LLVM.Analysis.CDG",
          "name": "CDG",
          "package": "llvm-analysis",
          "source": "src/LLVM-Analysis-CDG.html",
          "type": "module"
        },
        "index": {
          "description": "Control Dependence Graphs for the LLVM IR This module follows the definition of control dependence of Cytron et al http dl.acm.org citation.cfm doid Let and be nodes in the CFG If appears on every path from to Exit then postdominates If postdominates but then strictly postdominates CFG node is control dependent on CFG node if both There is non-null path from such that postdominates every node after on The node does not strictly postdominate the node This CDG formulation does not insert dummy Start node to link together all of the top-level nodes This just means that the set of control dependencies can be empty if code will be executed unconditionally",
          "hierarchy": "LLVM Analysis CDG",
          "module": "LLVM.Analysis.CDG",
          "name": "CDG",
          "package": "llvm-analysis",
          "partial": "CDG",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-CDG.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Analysis.CDG",
          "name": "CDG",
          "package": "llvm-analysis",
          "source": "src/LLVM-Analysis-CDG.html#CDG",
          "type": "data"
        },
        "index": {
          "hierarchy": "LLVM Analysis CDG",
          "module": "LLVM.Analysis.CDG",
          "name": "CDG",
          "package": "llvm-analysis",
          "partial": "CDG",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-CDG.html#t:CDG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Analysis.CDG",
          "name": "HasCDG",
          "package": "llvm-analysis",
          "source": "src/LLVM-Analysis-CDG.html#HasCDG",
          "type": "class"
        },
        "index": {
          "hierarchy": "LLVM Analysis CDG",
          "module": "LLVM.Analysis.CDG",
          "name": "HasCDG",
          "package": "llvm-analysis",
          "partial": "Has CDG",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-CDG.html#t:HasCDG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct the control dependence graph for a function (from its\n CFG).  This follows the construction from chapter 9 of the\n Munchnick Compiler Design and Implementation book.\n\u003c/p\u003e\u003cp\u003eFor an input function F:\n\u003c/p\u003e\u003cp\u003e1) Construct the CFG G for F\n\u003c/p\u003e\u003cp\u003e2) Construct the postdominator tree PT for F\n\u003c/p\u003e\u003cp\u003e3) Let S be the set of edges m-\u003en in G such that n does not\n    postdominate m\n\u003c/p\u003e\u003cp\u003e4) For each edge m-\u003en in S, find the lowest common ancestor l of m\n    and n in the postdominator tree.  All nodes on the path from\n    l-\u003en (not including l) in PT are control dependent on m.  If\n    there is no common ancestor (disconnected PDT because of\n    multiple exit nodes), the lowest common ancestor is then the\n    virtual exit node, so \u003cem\u003eall\u003c/em\u003e of the postdominators of n are\n    control dependent on m.\n\u003c/p\u003e\u003cp\u003eNote: the typical construction augments the CFG with a fake start\n node.  Doing that here would be a bit complicated, so the graph\n just isn't connected by a fake Start node.\n\u003c/p\u003e",
          "module": "LLVM.Analysis.CDG",
          "name": "controlDependenceGraph",
          "package": "llvm-analysis",
          "signature": "f -\u003e CDG",
          "source": "src/LLVM-Analysis-CDG.html#controlDependenceGraph",
          "type": "function"
        },
        "index": {
          "description": "Construct the control dependence graph for function from its CFG This follows the construction from chapter of the Munchnick Compiler Design and Implementation book For an input function Construct the CFG for Construct the postdominator tree PT for Let be the set of edges in such that does not postdominate For each edge in find the lowest common ancestor of and in the postdominator tree All nodes on the path from not including in PT are control dependent on If there is no common ancestor disconnected PDT because of multiple exit nodes the lowest common ancestor is then the virtual exit node so all of the postdominators of are control dependent on Note the typical construction augments the CFG with fake start node Doing that here would be bit complicated so the graph just isn connected by fake Start node",
          "hierarchy": "LLVM Analysis CDG",
          "module": "LLVM.Analysis.CDG",
          "name": "controlDependenceGraph",
          "normalized": "a-\u003eCDG",
          "package": "llvm-analysis",
          "partial": "Dependence Graph",
          "signature": "f-\u003eCDG",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-CDG.html#v:controlDependenceGraph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the list of instructions that an instruction is control\n dependent upon.  As noted above, the list will be empty if the\n instruction is executed unconditionally.\n\u003c/p\u003e",
          "module": "LLVM.Analysis.CDG",
          "name": "controlDependencies",
          "package": "llvm-analysis",
          "signature": "cdg -\u003e Instruction -\u003e [Instruction]",
          "source": "src/LLVM-Analysis-CDG.html#controlDependencies",
          "type": "function"
        },
        "index": {
          "description": "Get the list of instructions that an instruction is control dependent upon As noted above the list will be empty if the instruction is executed unconditionally",
          "hierarchy": "LLVM Analysis CDG",
          "module": "LLVM.Analysis.CDG",
          "name": "controlDependencies",
          "normalized": "a-\u003eInstruction-\u003e[Instruction]",
          "package": "llvm-analysis",
          "partial": "Dependencies",
          "signature": "cdg-\u003eInstruction-\u003e[Instruction]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-CDG.html#v:controlDependencies"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the list of instructions that an instruction is directly\n control dependent upon (direct parents in the CDG).\n\u003c/p\u003e",
          "module": "LLVM.Analysis.CDG",
          "name": "directControlDependencies",
          "package": "llvm-analysis",
          "signature": "cdg -\u003e Instruction -\u003e [Instruction]",
          "source": "src/LLVM-Analysis-CDG.html#directControlDependencies",
          "type": "function"
        },
        "index": {
          "description": "Get the list of instructions that an instruction is directly control dependent upon direct parents in the CDG",
          "hierarchy": "LLVM Analysis CDG",
          "module": "LLVM.Analysis.CDG",
          "name": "directControlDependencies",
          "normalized": "a-\u003eInstruction-\u003e[Instruction]",
          "package": "llvm-analysis",
          "partial": "Control Dependencies",
          "signature": "cdg-\u003eInstruction-\u003e[Instruction]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-CDG.html#v:directControlDependencies"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Analysis.CDG",
          "name": "getCDG",
          "package": "llvm-analysis",
          "signature": "a -\u003e CDG",
          "source": "src/LLVM-Analysis-CDG.html#getCDG",
          "type": "method"
        },
        "index": {
          "hierarchy": "LLVM Analysis CDG",
          "module": "LLVM.Analysis.CDG",
          "name": "getCDG",
          "normalized": "a-\u003eCDG",
          "package": "llvm-analysis",
          "partial": "CDG",
          "signature": "a-\u003eCDG",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-CDG.html#v:getCDG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Analysis.CFG.Internal",
          "name": "Internal",
          "package": "llvm-analysis",
          "source": "src/LLVM-Analysis-CFG-Internal.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "LLVM Analysis CFG Internal",
          "module": "LLVM.Analysis.CFG.Internal",
          "name": "Internal",
          "package": "llvm-analysis",
          "partial": "Internal",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-CFG-Internal.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of function control flow graphs.\n\u003c/p\u003e",
          "module": "LLVM.Analysis.CFG.Internal",
          "name": "CFG",
          "package": "llvm-analysis",
          "source": "src/LLVM-Analysis-CFG-Internal.html#CFG",
          "type": "data"
        },
        "index": {
          "description": "The type of function control flow graphs",
          "hierarchy": "LLVM Analysis CFG Internal",
          "module": "LLVM.Analysis.CFG.Internal",
          "name": "CFG",
          "package": "llvm-analysis",
          "partial": "CFG",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-CFG-Internal.html#t:CFG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn opaque representation of a dataflow analysis.  Analyses of\n this type are suitable for both forward and backward use.\n\u003c/p\u003e\u003cp\u003eFor all dataflow analyses, the standard rules apply.\n\u003c/p\u003e\u003cp\u003e1) \u003ccode\u003emeet a top == a\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e2) Your lattice \u003ccode\u003ef\u003c/code\u003e must have finite height\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003em\u003c/code\u003e type parameter is a \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e; this dataflow framework\n provides a \u003cem\u003emonadic\u003c/em\u003e transfer function.  This is intended to allow\n transfer functions to have monadic contexts that provide\n MonadReader and MonadWriter-like functionality.  State is also\n useful for caching expensive sub-computations.  Keep in mind that\n the analysis iterates to a fixedpoint and side effects in the monad\n will be repeated.\n\u003c/p\u003e",
          "module": "LLVM.Analysis.CFG.Internal",
          "name": "DataflowAnalysis",
          "package": "llvm-analysis",
          "source": "src/LLVM-Analysis-CFG-Internal.html#DataflowAnalysis",
          "type": "data"
        },
        "index": {
          "description": "An opaque representation of dataflow analysis Analyses of this type are suitable for both forward and backward use For all dataflow analyses the standard rules apply meet top Your lattice must have finite height The type parameter is Monad this dataflow framework provides monadic transfer function This is intended to allow transfer functions to have monadic contexts that provide MonadReader and MonadWriter-like functionality State is also useful for caching expensive sub-computations Keep in mind that the analysis iterates to fixedpoint and side effects in the monad will be repeated",
          "hierarchy": "LLVM Analysis CFG Internal",
          "module": "LLVM.Analysis.CFG.Internal",
          "name": "DataflowAnalysis",
          "package": "llvm-analysis",
          "partial": "Dataflow Analysis",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-CFG-Internal.html#t:DataflowAnalysis"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe opaque result of a dataflow analysis.  Use the functions\n \u003ccode\u003e\u003ca\u003edataflowResult\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003edataflowResultAt\u003c/a\u003e\u003c/code\u003e to extract results.\n\u003c/p\u003e",
          "module": "LLVM.Analysis.CFG.Internal",
          "name": "DataflowResult",
          "package": "llvm-analysis",
          "source": "src/LLVM-Analysis-CFG-Internal.html#DataflowResult",
          "type": "data"
        },
        "index": {
          "description": "The opaque result of dataflow analysis Use the functions dataflowResult and dataflowResultAt to extract results",
          "hierarchy": "LLVM Analysis CFG Internal",
          "module": "LLVM.Analysis.CFG.Internal",
          "name": "DataflowResult",
          "package": "llvm-analysis",
          "partial": "Dataflow Result",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-CFG-Internal.html#t:DataflowResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA class for things from which a CFG can be obtained.\n\u003c/p\u003e",
          "module": "LLVM.Analysis.CFG.Internal",
          "name": "HasCFG",
          "package": "llvm-analysis",
          "source": "src/LLVM-Analysis-CFG-Internal.html#HasCFG",
          "type": "class"
        },
        "index": {
          "description": "class for things from which CFG can be obtained",
          "hierarchy": "LLVM Analysis CFG Internal",
          "module": "LLVM.Analysis.CFG.Internal",
          "name": "HasCFG",
          "package": "llvm-analysis",
          "partial": "Has CFG",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-CFG-Internal.html#t:HasCFG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is a wrapper GADT around the LLVM IR to mesh with Hoopl.  It\n won't be exported or exposed to the user at all.  We need this for\n two reasons:\n\u003c/p\u003e\u003cp\u003e1) Hoopl requires explicit Label instructions.  In LLVM these are\n    implicit in the function structure through BasicBlocks\n\u003c/p\u003e\u003cp\u003e2) Additionally, LLVM doens't have a unique exit instruction per\n function.  resume, ret, and unreachable all terminate execution.\n c.f. UniqueExitLabel and ExitLabel (both seem to be needed because\n hoopl blocks need an entry and an exit).\n\u003c/p\u003e",
          "module": "LLVM.Analysis.CFG.Internal",
          "name": "Insn",
          "package": "llvm-analysis",
          "source": "src/LLVM-Analysis-CFG-Internal.html#Insn",
          "type": "data"
        },
        "index": {
          "description": "This is wrapper GADT around the LLVM IR to mesh with Hoopl It won be exported or exposed to the user at all We need this for two reasons Hoopl requires explicit Label instructions In LLVM these are implicit in the function structure through BasicBlocks Additionally LLVM doens have unique exit instruction per function resume ret and unreachable all terminate execution c.f UniqueExitLabel and ExitLabel both seem to be needed because hoopl blocks need an entry and an exit",
          "hierarchy": "LLVM Analysis CFG Internal",
          "module": "LLVM.Analysis.CFG.Internal",
          "name": "Insn",
          "package": "llvm-analysis",
          "partial": "Insn",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-CFG-Internal.html#t:Insn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Analysis.CFG.Internal",
          "name": "BwdDataflowAnalysis",
          "package": "llvm-analysis",
          "signature": "f -\u003e (f -\u003e f -\u003e f) -\u003e (f -\u003e Instruction -\u003e m f) -\u003e Maybe ([(BasicBlock, f)] -\u003e Instruction -\u003e m f) -\u003e DataflowAnalysis m f",
          "source": "src/LLVM-Analysis-CFG-Internal.html#DataflowAnalysis",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Analysis CFG Internal",
          "module": "LLVM.Analysis.CFG.Internal",
          "name": "BwdDataflowAnalysis",
          "normalized": "a-\u003e(a-\u003ea-\u003ea)-\u003e(a-\u003eInstruction-\u003eb a)-\u003eMaybe([(BasicBlock,a)]-\u003eInstruction-\u003eb a)-\u003eDataflowAnalysis b a",
          "package": "llvm-analysis",
          "partial": "Bwd Dataflow Analysis",
          "signature": "f-\u003e(f-\u003ef-\u003ef)-\u003e(f-\u003eInstruction-\u003em f)-\u003eMaybe([(BasicBlock,f)]-\u003eInstruction-\u003em f)-\u003eDataflowAnalysis m f",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-CFG-Internal.html#v:BwdDataflowAnalysis"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Analysis.CFG.Internal",
          "name": "CFG",
          "package": "llvm-analysis",
          "signature": "CFG",
          "source": "src/LLVM-Analysis-CFG-Internal.html#CFG",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Analysis CFG Internal",
          "module": "LLVM.Analysis.CFG.Internal",
          "name": "CFG",
          "package": "llvm-analysis",
          "partial": "CFG",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-CFG-Internal.html#v:CFG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Analysis.CFG.Internal",
          "name": "DataflowResult",
          "package": "llvm-analysis",
          "signature": "CFG -\u003e DataflowAnalysis m f -\u003e Fact C f -\u003e Direction -\u003e DataflowResult m f",
          "source": "src/LLVM-Analysis-CFG-Internal.html#DataflowResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Analysis CFG Internal",
          "module": "LLVM.Analysis.CFG.Internal",
          "name": "DataflowResult",
          "normalized": "CFG-\u003eDataflowAnalysis a b-\u003eFact C b-\u003eDirection-\u003eDataflowResult a b",
          "package": "llvm-analysis",
          "partial": "Dataflow Result",
          "signature": "CFG-\u003eDataflowAnalysis m f-\u003eFact C f-\u003eDirection-\u003eDataflowResult m f",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-CFG-Internal.html#v:DataflowResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Analysis.CFG.Internal",
          "name": "FwdDataflowAnalysis",
          "package": "llvm-analysis",
          "signature": "f -\u003e (f -\u003e f -\u003e f) -\u003e (f -\u003e Instruction -\u003e m f) -\u003e Maybe (f -\u003e Instruction -\u003e m [(BasicBlock, f)]) -\u003e DataflowAnalysis m f",
          "source": "src/LLVM-Analysis-CFG-Internal.html#DataflowAnalysis",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Analysis CFG Internal",
          "module": "LLVM.Analysis.CFG.Internal",
          "name": "FwdDataflowAnalysis",
          "normalized": "a-\u003e(a-\u003ea-\u003ea)-\u003e(a-\u003eInstruction-\u003eb a)-\u003eMaybe(a-\u003eInstruction-\u003eb[(BasicBlock,a)])-\u003eDataflowAnalysis b a",
          "package": "llvm-analysis",
          "partial": "Fwd Dataflow Analysis",
          "signature": "f-\u003e(f-\u003ef-\u003ef)-\u003e(f-\u003eInstruction-\u003em f)-\u003eMaybe(f-\u003eInstruction-\u003em[(BasicBlock,f)])-\u003eDataflowAnalysis m f",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-CFG-Internal.html#v:FwdDataflowAnalysis"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Analysis.CFG.Internal",
          "name": "Lbl",
          "package": "llvm-analysis",
          "signature": "BasicBlock -\u003e Label -\u003e Insn C O",
          "source": "src/LLVM-Analysis-CFG-Internal.html#Insn",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Analysis CFG Internal",
          "module": "LLVM.Analysis.CFG.Internal",
          "name": "Lbl",
          "normalized": "BasicBlock-\u003eLabel-\u003eInsn C O",
          "package": "llvm-analysis",
          "partial": "Lbl",
          "signature": "BasicBlock-\u003eLabel-\u003eInsn C O",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-CFG-Internal.html#v:Lbl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Analysis.CFG.Internal",
          "name": "Normal",
          "package": "llvm-analysis",
          "signature": "Instruction -\u003e Insn O O",
          "source": "src/LLVM-Analysis-CFG-Internal.html#Insn",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Analysis CFG Internal",
          "module": "LLVM.Analysis.CFG.Internal",
          "name": "Normal",
          "normalized": "Instruction-\u003eInsn O O",
          "package": "llvm-analysis",
          "partial": "Normal",
          "signature": "Instruction-\u003eInsn O O",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-CFG-Internal.html#v:Normal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Analysis.CFG.Internal",
          "name": "Terminator",
          "package": "llvm-analysis",
          "signature": "Instruction -\u003e [Label] -\u003e Insn O C",
          "source": "src/LLVM-Analysis-CFG-Internal.html#Insn",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Analysis CFG Internal",
          "module": "LLVM.Analysis.CFG.Internal",
          "name": "Terminator",
          "normalized": "Instruction-\u003e[Label]-\u003eInsn O C",
          "package": "llvm-analysis",
          "partial": "Terminator",
          "signature": "Instruction-\u003e[Label]-\u003eInsn O C",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-CFG-Internal.html#v:Terminator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Analysis.CFG.Internal",
          "name": "UniqueExit",
          "package": "llvm-analysis",
          "signature": "Insn O C",
          "source": "src/LLVM-Analysis-CFG-Internal.html#Insn",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Analysis CFG Internal",
          "module": "LLVM.Analysis.CFG.Internal",
          "name": "UniqueExit",
          "package": "llvm-analysis",
          "partial": "Unique Exit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-CFG-Internal.html#v:UniqueExit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Analysis.CFG.Internal",
          "name": "UniqueExitLabel",
          "package": "llvm-analysis",
          "signature": "Label -\u003e Insn C O",
          "source": "src/LLVM-Analysis-CFG-Internal.html#Insn",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Analysis CFG Internal",
          "module": "LLVM.Analysis.CFG.Internal",
          "name": "UniqueExitLabel",
          "normalized": "Label-\u003eInsn C O",
          "package": "llvm-analysis",
          "partial": "Unique Exit Label",
          "signature": "Label-\u003eInsn C O",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-CFG-Internal.html#v:UniqueExitLabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Analysis.CFG.Internal",
          "name": "analysisBwdEdgeTransfer",
          "package": "llvm-analysis",
          "signature": "Maybe ([(BasicBlock, f)] -\u003e Instruction -\u003e m f)",
          "source": "src/LLVM-Analysis-CFG-Internal.html#DataflowAnalysis",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Analysis CFG Internal",
          "module": "LLVM.Analysis.CFG.Internal",
          "name": "analysisBwdEdgeTransfer",
          "normalized": "Maybe([(BasicBlock,a)]-\u003eInstruction-\u003eb a)",
          "package": "llvm-analysis",
          "partial": "Bwd Edge Transfer",
          "signature": "Maybe([(BasicBlock,f)]-\u003eInstruction-\u003em f)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-CFG-Internal.html#v:analysisBwdEdgeTransfer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Analysis.CFG.Internal",
          "name": "analysisFwdEdgeTransfer",
          "package": "llvm-analysis",
          "signature": "Maybe (f -\u003e Instruction -\u003e m [(BasicBlock, f)])",
          "source": "src/LLVM-Analysis-CFG-Internal.html#DataflowAnalysis",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Analysis CFG Internal",
          "module": "LLVM.Analysis.CFG.Internal",
          "name": "analysisFwdEdgeTransfer",
          "normalized": "Maybe(a-\u003eInstruction-\u003eb[(BasicBlock,a)])",
          "package": "llvm-analysis",
          "partial": "Fwd Edge Transfer",
          "signature": "Maybe(f-\u003eInstruction-\u003em[(BasicBlock,f)])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-CFG-Internal.html#v:analysisFwdEdgeTransfer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Analysis.CFG.Internal",
          "name": "analysisMeet",
          "package": "llvm-analysis",
          "signature": "f -\u003e f -\u003e f",
          "source": "src/LLVM-Analysis-CFG-Internal.html#DataflowAnalysis",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Analysis CFG Internal",
          "module": "LLVM.Analysis.CFG.Internal",
          "name": "analysisMeet",
          "normalized": "a-\u003ea-\u003ea",
          "package": "llvm-analysis",
          "partial": "Meet",
          "signature": "f-\u003ef-\u003ef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-CFG-Internal.html#v:analysisMeet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Analysis.CFG.Internal",
          "name": "analysisTop",
          "package": "llvm-analysis",
          "signature": "f",
          "source": "src/LLVM-Analysis-CFG-Internal.html#DataflowAnalysis",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Analysis CFG Internal",
          "module": "LLVM.Analysis.CFG.Internal",
          "name": "analysisTop",
          "package": "llvm-analysis",
          "partial": "Top",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-CFG-Internal.html#v:analysisTop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Analysis.CFG.Internal",
          "name": "analysisTransfer",
          "package": "llvm-analysis",
          "signature": "f -\u003e Instruction -\u003e m f",
          "source": "src/LLVM-Analysis-CFG-Internal.html#DataflowAnalysis",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Analysis CFG Internal",
          "module": "LLVM.Analysis.CFG.Internal",
          "name": "analysisTransfer",
          "normalized": "a-\u003eInstruction-\u003eb a",
          "package": "llvm-analysis",
          "partial": "Transfer",
          "signature": "f-\u003eInstruction-\u003em f",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-CFG-Internal.html#v:analysisTransfer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"LLVM.Analysis.CFG.Internal\",\"LLVM.Analysis.CFG\"]",
          "name": "basicBlockPredecessors",
          "package": "llvm-analysis",
          "signature": "cfgLike -\u003e BasicBlock -\u003e [BasicBlock]",
          "source": "src/LLVM-Analysis-CFG-Internal.html#basicBlockPredecessors",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-CFG-Internal.html#v:basicBlockPredecessors\",\"http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-CFG.html#v:basicBlockPredecessors\"]"
        },
        "index": {
          "hierarchy": "LLVM Analysis CFG Internal",
          "module": "LLVM.Analysis.CFG.Internal",
          "name": "basicBlockPredecessors",
          "normalized": "a-\u003eBasicBlock-\u003e[BasicBlock]",
          "package": "llvm-analysis",
          "partial": "Block Predecessors",
          "signature": "cfgLike-\u003eBasicBlock-\u003e[BasicBlock]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-CFG-Internal.html#v:basicBlockPredecessors"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"LLVM.Analysis.CFG.Internal\",\"LLVM.Analysis.CFG\"]",
          "name": "basicBlockSuccessors",
          "package": "llvm-analysis",
          "signature": "cfgLike -\u003e BasicBlock -\u003e [BasicBlock]",
          "source": "src/LLVM-Analysis-CFG-Internal.html#basicBlockSuccessors",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-CFG-Internal.html#v:basicBlockSuccessors\",\"http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-CFG.html#v:basicBlockSuccessors\"]"
        },
        "index": {
          "hierarchy": "LLVM Analysis CFG Internal",
          "module": "LLVM.Analysis.CFG.Internal",
          "name": "basicBlockSuccessors",
          "normalized": "a-\u003eBasicBlock-\u003e[BasicBlock]",
          "package": "llvm-analysis",
          "partial": "Block Successors",
          "signature": "cfgLike-\u003eBasicBlock-\u003e[BasicBlock]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-CFG-Internal.html#v:basicBlockSuccessors"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA basic backward dataflow analysis\n\u003c/p\u003e",
          "module": "[\"LLVM.Analysis.CFG.Internal\",\"LLVM.Analysis.Dataflow\"]",
          "name": "bwdDataflowAnalysis",
          "package": "llvm-analysis",
          "signature": "f-\u003e (f -\u003e f -\u003e f)-\u003e (f -\u003e Instruction -\u003e m f)-\u003e DataflowAnalysis m f",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-CFG-Internal.html#v:bwdDataflowAnalysis\",\"http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-Dataflow.html#v:bwdDataflowAnalysis\"]"
        },
        "index": {
          "description": "basic backward dataflow analysis",
          "hierarchy": "LLVM Analysis CFG Internal",
          "module": "LLVM.Analysis.CFG.Internal",
          "name": "bwdDataflowAnalysis",
          "normalized": "a-\u003e(a-\u003ea-\u003ea)-\u003e(a-\u003eInstruction-\u003eb a)-\u003eDataflowAnalysis b a",
          "package": "llvm-analysis",
          "partial": "Dataflow Analysis",
          "signature": "f-\u003e(f-\u003ef-\u003ef)-\u003e(f-\u003eInstruction-\u003em f)-\u003eDataflowAnalysis m f",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-CFG-Internal.html#v:bwdDataflowAnalysis"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"LLVM.Analysis.CFG.Internal\",\"LLVM.Analysis.Dataflow\"]",
          "name": "bwdDataflowEdgeAnalysis",
          "package": "llvm-analysis",
          "signature": "f-\u003e (f -\u003e f -\u003e f)-\u003e (f -\u003e Instruction -\u003e m f)-\u003e ([(BasicBlock, f)] -\u003e Instruction -\u003e m f)-\u003e DataflowAnalysis m f",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-CFG-Internal.html#v:bwdDataflowEdgeAnalysis\",\"http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-Dataflow.html#v:bwdDataflowEdgeAnalysis\"]"
        },
        "index": {
          "hierarchy": "LLVM Analysis CFG Internal",
          "module": "LLVM.Analysis.CFG.Internal",
          "name": "bwdDataflowEdgeAnalysis",
          "normalized": "a-\u003e(a-\u003ea-\u003ea)-\u003e(a-\u003eInstruction-\u003eb a)-\u003e([(BasicBlock,a)]-\u003eInstruction-\u003eb a)-\u003eDataflowAnalysis b a",
          "package": "llvm-analysis",
          "partial": "Dataflow Edge Analysis",
          "signature": "f-\u003e(f-\u003ef-\u003ef)-\u003e(f-\u003eInstruction-\u003em f)-\u003e([(BasicBlock,f)]-\u003eInstruction-\u003em f)-\u003eDataflowAnalysis m f",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-CFG-Internal.html#v:bwdDataflowEdgeAnalysis"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Analysis.CFG.Internal",
          "name": "cfgBlockMap",
          "package": "llvm-analysis",
          "signature": "Map Label BasicBlock",
          "source": "src/LLVM-Analysis-CFG-Internal.html#CFG",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Analysis CFG Internal",
          "module": "LLVM.Analysis.CFG.Internal",
          "name": "cfgBlockMap",
          "package": "llvm-analysis",
          "partial": "Block Map",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-CFG-Internal.html#v:cfgBlockMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Analysis.CFG.Internal",
          "name": "cfgBody",
          "package": "llvm-analysis",
          "signature": "Graph Insn C C",
          "source": "src/LLVM-Analysis-CFG-Internal.html#CFG",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Analysis CFG Internal",
          "module": "LLVM.Analysis.CFG.Internal",
          "name": "cfgBody",
          "package": "llvm-analysis",
          "partial": "Body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-CFG-Internal.html#v:cfgBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Analysis.CFG.Internal",
          "name": "cfgEntryLabel",
          "package": "llvm-analysis",
          "signature": "Label",
          "source": "src/LLVM-Analysis-CFG-Internal.html#CFG",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Analysis CFG Internal",
          "module": "LLVM.Analysis.CFG.Internal",
          "name": "cfgEntryLabel",
          "package": "llvm-analysis",
          "partial": "Entry Label",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-CFG-Internal.html#v:cfgEntryLabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Analysis.CFG.Internal",
          "name": "cfgExitLabel",
          "package": "llvm-analysis",
          "signature": "Label",
          "source": "src/LLVM-Analysis-CFG-Internal.html#CFG",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Analysis CFG Internal",
          "module": "LLVM.Analysis.CFG.Internal",
          "name": "cfgExitLabel",
          "package": "llvm-analysis",
          "partial": "Exit Label",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-CFG-Internal.html#v:cfgExitLabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Analysis.CFG.Internal",
          "name": "cfgFunction",
          "package": "llvm-analysis",
          "signature": "Function",
          "source": "src/LLVM-Analysis-CFG-Internal.html#CFG",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Analysis CFG Internal",
          "module": "LLVM.Analysis.CFG.Internal",
          "name": "cfgFunction",
          "package": "llvm-analysis",
          "partial": "Function",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-CFG-Internal.html#v:cfgFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Analysis.CFG.Internal",
          "name": "cfgLabelMap",
          "package": "llvm-analysis",
          "signature": "Map BasicBlock Label",
          "source": "src/LLVM-Analysis-CFG-Internal.html#CFG",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Analysis CFG Internal",
          "module": "LLVM.Analysis.CFG.Internal",
          "name": "cfgLabelMap",
          "package": "llvm-analysis",
          "partial": "Label Map",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-CFG-Internal.html#v:cfgLabelMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Analysis.CFG.Internal",
          "name": "cfgPredecessors",
          "package": "llvm-analysis",
          "signature": "Map BasicBlock [BasicBlock]",
          "source": "src/LLVM-Analysis-CFG-Internal.html#CFG",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Analysis CFG Internal",
          "module": "LLVM.Analysis.CFG.Internal",
          "name": "cfgPredecessors",
          "normalized": "Map BasicBlock[BasicBlock]",
          "package": "llvm-analysis",
          "partial": "Predecessors",
          "signature": "Map BasicBlock[BasicBlock]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-CFG-Internal.html#v:cfgPredecessors"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a CFG for a function\n\u003c/p\u003e",
          "module": "[\"LLVM.Analysis.CFG.Internal\",\"LLVM.Analysis.CFG\"]",
          "name": "controlFlowGraph",
          "package": "llvm-analysis",
          "signature": "Function -\u003e CFG",
          "source": "src/LLVM-Analysis-CFG-Internal.html#controlFlowGraph",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-CFG-Internal.html#v:controlFlowGraph\",\"http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-CFG.html#v:controlFlowGraph\"]"
        },
        "index": {
          "description": "Create CFG for function",
          "hierarchy": "LLVM Analysis CFG Internal",
          "module": "LLVM.Analysis.CFG.Internal",
          "name": "controlFlowGraph",
          "normalized": "Function-\u003eCFG",
          "package": "llvm-analysis",
          "partial": "Flow Graph",
          "signature": "Function-\u003eCFG",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-CFG-Internal.html#v:controlFlowGraph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"LLVM.Analysis.CFG.Internal\",\"LLVM.Analysis.Dataflow\"]",
          "name": "dataflow",
          "package": "llvm-analysis",
          "signature": "cfgLike-\u003e DataflowAnalysis m f-\u003e f-\u003e m (DataflowResult m f)",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-CFG-Internal.html#v:dataflow\",\"http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-Dataflow.html#v:dataflow\"]"
        },
        "index": {
          "hierarchy": "LLVM Analysis CFG Internal",
          "module": "LLVM.Analysis.CFG.Internal",
          "name": "dataflow",
          "normalized": "a-\u003eDataflowAnalysis b c-\u003ec-\u003eb(DataflowResult b c)",
          "package": "llvm-analysis",
          "signature": "cfgLike-\u003eDataflowAnalysis m f-\u003ef-\u003em(DataflowResult m f)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-CFG-Internal.html#v:dataflow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLook up the dataflow fact at the virtual exit note.  This\n combines the results along \u003cem\u003eall\u003c/em\u003e paths, including those ending in\n \u003ca\u003etermination\u003c/a\u003e instructions like Unreachable and Resume.\n\u003c/p\u003e\u003cp\u003eIf you want the result at only the return instruction(s), use\n \u003ccode\u003e\u003ca\u003edataflowResultAt\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003emeets\u003c/code\u003e the results together.\n\u003c/p\u003e",
          "module": "[\"LLVM.Analysis.CFG.Internal\",\"LLVM.Analysis.Dataflow\"]",
          "name": "dataflowResult",
          "package": "llvm-analysis",
          "signature": "DataflowResult m f -\u003e f",
          "source": "src/LLVM-Analysis-CFG-Internal.html#dataflowResult",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-CFG-Internal.html#v:dataflowResult\",\"http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-Dataflow.html#v:dataflowResult\"]"
        },
        "index": {
          "description": "Look up the dataflow fact at the virtual exit note This combines the results along all paths including those ending in termination instructions like Unreachable and Resume If you want the result at only the return instruction use dataflowResultAt and meets the results together",
          "hierarchy": "LLVM Analysis CFG Internal",
          "module": "LLVM.Analysis.CFG.Internal",
          "name": "dataflowResult",
          "normalized": "DataflowResult a b-\u003eb",
          "package": "llvm-analysis",
          "partial": "Result",
          "signature": "DataflowResult m f-\u003ef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-CFG-Internal.html#v:dataflowResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLook up the dataflow fact at a particular Instruction.\n\u003c/p\u003e",
          "module": "[\"LLVM.Analysis.CFG.Internal\",\"LLVM.Analysis.Dataflow\"]",
          "name": "dataflowResultAt",
          "package": "llvm-analysis",
          "signature": "DataflowResult m f -\u003e Instruction -\u003e m f",
          "source": "src/LLVM-Analysis-CFG-Internal.html#dataflowResultAt",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-CFG-Internal.html#v:dataflowResultAt\",\"http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-Dataflow.html#v:dataflowResultAt\"]"
        },
        "index": {
          "description": "Look up the dataflow fact at particular Instruction",
          "hierarchy": "LLVM Analysis CFG Internal",
          "module": "LLVM.Analysis.CFG.Internal",
          "name": "dataflowResultAt",
          "normalized": "DataflowResult a b-\u003eInstruction-\u003ea b",
          "package": "llvm-analysis",
          "partial": "Result At",
          "signature": "DataflowResult m f-\u003eInstruction-\u003em f",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-CFG-Internal.html#v:dataflowResultAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefine a basic \u003ccode\u003e\u003ca\u003eDataflowAnalysis\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "[\"LLVM.Analysis.CFG.Internal\",\"LLVM.Analysis.Dataflow\"]",
          "name": "fwdDataflowAnalysis",
          "package": "llvm-analysis",
          "signature": "f-\u003e (f -\u003e f -\u003e f)-\u003e (f -\u003e Instruction -\u003e m f)-\u003e DataflowAnalysis m f",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-CFG-Internal.html#v:fwdDataflowAnalysis\",\"http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-Dataflow.html#v:fwdDataflowAnalysis\"]"
        },
        "index": {
          "description": "Define basic DataflowAnalysis",
          "hierarchy": "LLVM Analysis CFG Internal",
          "module": "LLVM.Analysis.CFG.Internal",
          "name": "fwdDataflowAnalysis",
          "normalized": "a-\u003e(a-\u003ea-\u003ea)-\u003e(a-\u003eInstruction-\u003eb a)-\u003eDataflowAnalysis b a",
          "package": "llvm-analysis",
          "partial": "Dataflow Analysis",
          "signature": "f-\u003e(f-\u003ef-\u003ef)-\u003e(f-\u003eInstruction-\u003em f)-\u003eDataflowAnalysis m f",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-CFG-Internal.html#v:fwdDataflowAnalysis"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA forward dataflow analysis that provides an addition /edge\n transfer function/.  This function is run with each Terminator\n instruction (\u003cem\u003eafter\u003c/em\u003e the normal transfer function, whose results\n are fed to the edge transfer function).  The edge transfer function\n allows you to let different information flow to each successor\n block of a terminator instruction.\n\u003c/p\u003e\u003cp\u003eIf a BasicBlock in the edge transfer result is not a successor of\n the input instruction, that mapping is discarded.  Multiples are\n \u003ccode\u003emeet\u003c/code\u003eed together.  Missing values are taken from the result of the\n normal transfer function.\n\u003c/p\u003e",
          "module": "[\"LLVM.Analysis.CFG.Internal\",\"LLVM.Analysis.Dataflow\"]",
          "name": "fwdDataflowEdgeAnalysis",
          "package": "llvm-analysis",
          "signature": "f-\u003e (f -\u003e f -\u003e f)-\u003e (f -\u003e Instruction -\u003e m f)-\u003e (f -\u003e Instruction -\u003e m [(BasicBlock, f)])-\u003e DataflowAnalysis m f",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-CFG-Internal.html#v:fwdDataflowEdgeAnalysis\",\"http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-Dataflow.html#v:fwdDataflowEdgeAnalysis\"]"
        },
        "index": {
          "description": "forward dataflow analysis that provides an addition edge transfer function This function is run with each Terminator instruction after the normal transfer function whose results are fed to the edge transfer function The edge transfer function allows you to let different information flow to each successor block of terminator instruction If BasicBlock in the edge transfer result is not successor of the input instruction that mapping is discarded Multiples are meet ed together Missing values are taken from the result of the normal transfer function",
          "hierarchy": "LLVM Analysis CFG Internal",
          "module": "LLVM.Analysis.CFG.Internal",
          "name": "fwdDataflowEdgeAnalysis",
          "normalized": "a-\u003e(a-\u003ea-\u003ea)-\u003e(a-\u003eInstruction-\u003eb a)-\u003e(a-\u003eInstruction-\u003eb[(BasicBlock,a)])-\u003eDataflowAnalysis b a",
          "package": "llvm-analysis",
          "partial": "Dataflow Edge Analysis",
          "signature": "f-\u003e(f-\u003ef-\u003ef)-\u003e(f-\u003eInstruction-\u003em f)-\u003e(f-\u003eInstruction-\u003em[(BasicBlock,f)])-\u003eDataflowAnalysis m f",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-CFG-Internal.html#v:fwdDataflowEdgeAnalysis"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Analysis.CFG.Internal",
          "name": "getCFG",
          "package": "llvm-analysis",
          "signature": "a -\u003e CFG",
          "source": "src/LLVM-Analysis-CFG-Internal.html#getCFG",
          "type": "method"
        },
        "index": {
          "hierarchy": "LLVM Analysis CFG Internal",
          "module": "LLVM.Analysis.CFG.Internal",
          "name": "getCFG",
          "normalized": "a-\u003eCFG",
          "package": "llvm-analysis",
          "partial": "CFG",
          "signature": "a-\u003eCFG",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-CFG-Internal.html#v:getCFG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines control flow graphs over the LLVM IR.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "LLVM.Analysis.CFG",
          "name": "CFG",
          "package": "llvm-analysis",
          "source": "src/LLVM-Analysis-CFG.html",
          "type": "module"
        },
        "index": {
          "description": "This module defines control flow graphs over the LLVM IR",
          "hierarchy": "LLVM Analysis CFG",
          "module": "LLVM.Analysis.CFG",
          "name": "CFG",
          "package": "llvm-analysis",
          "partial": "CFG",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-CFG.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of function control flow graphs.\n\u003c/p\u003e",
          "module": "LLVM.Analysis.CFG",
          "name": "CFG",
          "package": "llvm-analysis",
          "source": "src/LLVM-Analysis-CFG-Internal.html#CFG",
          "type": "data"
        },
        "index": {
          "description": "The type of function control flow graphs",
          "hierarchy": "LLVM Analysis CFG",
          "module": "LLVM.Analysis.CFG",
          "name": "CFG",
          "package": "llvm-analysis",
          "partial": "CFG",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-CFG.html#t:CFG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA class for things from which a CFG can be obtained.\n\u003c/p\u003e",
          "module": "LLVM.Analysis.CFG",
          "name": "HasCFG",
          "package": "llvm-analysis",
          "source": "src/LLVM-Analysis-CFG-Internal.html#HasCFG",
          "type": "class"
        },
        "index": {
          "description": "class for things from which CFG can be obtained",
          "hierarchy": "LLVM Analysis CFG",
          "module": "LLVM.Analysis.CFG",
          "name": "HasCFG",
          "package": "llvm-analysis",
          "partial": "Has CFG",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-CFG.html#t:HasCFG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Analysis.CFG",
          "name": "getCFG",
          "package": "llvm-analysis",
          "signature": "a -\u003e CFG",
          "source": "src/LLVM-Analysis-CFG-Internal.html#getCFG",
          "type": "method"
        },
        "index": {
          "hierarchy": "LLVM Analysis CFG",
          "module": "LLVM.Analysis.CFG",
          "name": "getCFG",
          "normalized": "a-\u003eCFG",
          "package": "llvm-analysis",
          "partial": "CFG",
          "signature": "a-\u003eCFG",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-CFG.html#v:getCFG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis internal module implements the CallGraph and the\n CallGraphSCC traversal together because the traversal depends on\n CallGraph internals.  They are meant to be used through their\n respective interfaces, but this internal module is accessible in\n case their APIs are insufficient to do something a user might want.\n These internals are not stable.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "LLVM.Analysis.CallGraph.Internal",
          "name": "Internal",
          "package": "llvm-analysis",
          "source": "src/LLVM-Analysis-CallGraph-Internal.html",
          "type": "module"
        },
        "index": {
          "description": "This internal module implements the CallGraph and the CallGraphSCC traversal together because the traversal depends on CallGraph internals They are meant to be used through their respective interfaces but this internal module is accessible in case their APIs are insufficient to do something user might want These internals are not stable",
          "hierarchy": "LLVM Analysis CallGraph Internal",
          "module": "LLVM.Analysis.CallGraph.Internal",
          "name": "Internal",
          "package": "llvm-analysis",
          "partial": "Internal",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-CallGraph-Internal.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type synonym for the underlying graph\n\u003c/p\u003e",
          "module": "LLVM.Analysis.CallGraph.Internal",
          "name": "CG",
          "package": "llvm-analysis",
          "source": "src/LLVM-Analysis-CallGraph-Internal.html#CG",
          "type": "type"
        },
        "index": {
          "description": "type synonym for the underlying graph",
          "hierarchy": "LLVM Analysis CallGraph Internal",
          "module": "LLVM.Analysis.CallGraph.Internal",
          "name": "CG",
          "package": "llvm-analysis",
          "partial": "CG",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-CallGraph-Internal.html#t:CG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Analysis.CallGraph.Internal",
          "name": "CallEdge",
          "package": "llvm-analysis",
          "source": "src/LLVM-Analysis-CallGraph-Internal.html#CallEdge",
          "type": "data"
        },
        "index": {
          "hierarchy": "LLVM Analysis CallGraph Internal",
          "module": "LLVM.Analysis.CallGraph.Internal",
          "name": "CallEdge",
          "package": "llvm-analysis",
          "partial": "Call Edge",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-CallGraph-Internal.html#t:CallEdge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn opaque wrapper for the callgraph.  The nodes are functions and\n the edges are calls between them.\n\u003c/p\u003e",
          "module": "LLVM.Analysis.CallGraph.Internal",
          "name": "CallGraph",
          "package": "llvm-analysis",
          "source": "src/LLVM-Analysis-CallGraph-Internal.html#CallGraph",
          "type": "data"
        },
        "index": {
          "description": "An opaque wrapper for the callgraph The nodes are functions and the edges are calls between them",
          "hierarchy": "LLVM Analysis CallGraph Internal",
          "module": "LLVM.Analysis.CallGraph.Internal",
          "name": "CallGraph",
          "package": "llvm-analysis",
          "partial": "Call Graph",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-CallGraph-Internal.html#t:CallGraph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe nodes are actually a wrapper type:\n\u003c/p\u003e",
          "module": "LLVM.Analysis.CallGraph.Internal",
          "name": "CallNode",
          "package": "llvm-analysis",
          "source": "src/LLVM-Analysis-CallGraph-Internal.html#CallNode",
          "type": "data"
        },
        "index": {
          "description": "The nodes are actually wrapper type",
          "hierarchy": "LLVM Analysis CallGraph Internal",
          "module": "LLVM.Analysis.CallGraph.Internal",
          "name": "CallNode",
          "package": "llvm-analysis",
          "partial": "Call Node",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-CallGraph-Internal.html#t:CallNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn abstract representation of a composable analysis.  Construct\n these with the smart constructors \u003ccode\u003e\u003ca\u003ecomposableAnalysis\u003c/a\u003e\u003c/code\u003e,\n \u003ccode\u003e\u003ca\u003ecomposableDependencyAnalysis\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ecomposableAnalysisM\u003c/a\u003e\u003c/code\u003e, and\n \u003ccode\u003e\u003ca\u003ecomposableDependencyAnalysisM\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eUse \u003ccode\u003e\u003ca\u003ecallGraphComposeAnalysis\u003c/a\u003e\u003c/code\u003e to convert a list of these into a\n summary function for use with the call graph traversals.\n\u003c/p\u003e",
          "module": "LLVM.Analysis.CallGraph.Internal",
          "name": "ComposableAnalysis",
          "package": "llvm-analysis",
          "source": "src/LLVM-Analysis-CallGraph-Internal.html#ComposableAnalysis",
          "type": "data"
        },
        "index": {
          "description": "An abstract representation of composable analysis Construct these with the smart constructors composableAnalysis composableDependencyAnalysis composableAnalysisM and composableDependencyAnalysisM Use callGraphComposeAnalysis to convert list of these into summary function for use with the call graph traversals",
          "hierarchy": "LLVM Analysis CallGraph Internal",
          "module": "LLVM.Analysis.CallGraph.Internal",
          "name": "ComposableAnalysis",
          "package": "llvm-analysis",
          "partial": "Composable Analysis",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-CallGraph-Internal.html#t:ComposableAnalysis"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Analysis.CallGraph.Internal",
          "name": "CallGraph",
          "package": "llvm-analysis",
          "signature": "CallGraph CG pta",
          "source": "src/LLVM-Analysis-CallGraph-Internal.html#CallGraph",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Analysis CallGraph Internal",
          "module": "LLVM.Analysis.CallGraph.Internal",
          "name": "CallGraph",
          "package": "llvm-analysis",
          "partial": "Call Graph",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-CallGraph-Internal.html#v:CallGraph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn actual function defined in this \u003ccode\u003eModule\u003c/code\u003e\n\u003c/p\u003e",
          "module": "LLVM.Analysis.CallGraph.Internal",
          "name": "DefinedFunction",
          "package": "llvm-analysis",
          "signature": "DefinedFunction Function",
          "source": "src/LLVM-Analysis-CallGraph-Internal.html#CallNode",
          "type": "function"
        },
        "index": {
          "description": "An actual function defined in this Module",
          "hierarchy": "LLVM Analysis CallGraph Internal",
          "module": "LLVM.Analysis.CallGraph.Internal",
          "name": "DefinedFunction",
          "package": "llvm-analysis",
          "partial": "Defined Function",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-CallGraph-Internal.html#v:DefinedFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA static call to a known function\n\u003c/p\u003e",
          "module": "LLVM.Analysis.CallGraph.Internal",
          "name": "DirectCall",
          "package": "llvm-analysis",
          "signature": "DirectCall",
          "source": "src/LLVM-Analysis-CallGraph-Internal.html#CallEdge",
          "type": "function"
        },
        "index": {
          "description": "static call to known function",
          "hierarchy": "LLVM Analysis CallGraph Internal",
          "module": "LLVM.Analysis.CallGraph.Internal",
          "name": "DirectCall",
          "package": "llvm-analysis",
          "partial": "Direct Call",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-CallGraph-Internal.html#v:DirectCall"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn externally-defined function with a declaration\n in the \u003ccode\u003eModule\u003c/code\u003e\n\u003c/p\u003e",
          "module": "LLVM.Analysis.CallGraph.Internal",
          "name": "ExtFunction",
          "package": "llvm-analysis",
          "signature": "ExtFunction ExternalFunction",
          "source": "src/LLVM-Analysis-CallGraph-Internal.html#CallNode",
          "type": "function"
        },
        "index": {
          "description": "An externally-defined function with declaration in the Module",
          "hierarchy": "LLVM Analysis CallGraph Internal",
          "module": "LLVM.Analysis.CallGraph.Internal",
          "name": "ExtFunction",
          "package": "llvm-analysis",
          "partial": "Ext Function",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-CallGraph-Internal.html#v:ExtFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA possible call to a known function through a\n function pointer\n\u003c/p\u003e",
          "module": "LLVM.Analysis.CallGraph.Internal",
          "name": "IndirectCall",
          "package": "llvm-analysis",
          "signature": "IndirectCall",
          "source": "src/LLVM-Analysis-CallGraph-Internal.html#CallEdge",
          "type": "function"
        },
        "index": {
          "description": "possible call to known function through function pointer",
          "hierarchy": "LLVM Analysis CallGraph Internal",
          "module": "LLVM.Analysis.CallGraph.Internal",
          "name": "IndirectCall",
          "package": "llvm-analysis",
          "partial": "Indirect Call",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-CallGraph-Internal.html#v:IndirectCall"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA possible call to an unknown function through a\n function pointer\n\u003c/p\u003e",
          "module": "LLVM.Analysis.CallGraph.Internal",
          "name": "UnknownCall",
          "package": "llvm-analysis",
          "signature": "UnknownCall",
          "source": "src/LLVM-Analysis-CallGraph-Internal.html#CallEdge",
          "type": "function"
        },
        "index": {
          "description": "possible call to an unknown function through function pointer",
          "hierarchy": "LLVM Analysis CallGraph Internal",
          "module": "LLVM.Analysis.CallGraph.Internal",
          "name": "UnknownCall",
          "package": "llvm-analysis",
          "partial": "Unknown Call",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-CallGraph-Internal.html#v:UnknownCall"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA function called indirectly that may not have\n any definition or declaration within the \u003ccode\u003eModule\u003c/code\u003e\n\u003c/p\u003e",
          "module": "LLVM.Analysis.CallGraph.Internal",
          "name": "UnknownFunction",
          "package": "llvm-analysis",
          "signature": "UnknownFunction",
          "source": "src/LLVM-Analysis-CallGraph-Internal.html#CallNode",
          "type": "function"
        },
        "index": {
          "description": "function called indirectly that may not have any definition or declaration within the Module",
          "hierarchy": "LLVM Analysis CallGraph Internal",
          "module": "LLVM.Analysis.CallGraph.Internal",
          "name": "UnknownFunction",
          "package": "llvm-analysis",
          "partial": "Unknown Function",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-CallGraph-Internal.html#v:UnknownFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"LLVM.Analysis.CallGraph.Internal\",\"LLVM.Analysis.CallGraph\"]",
          "name": "allFunctionCallees",
          "package": "llvm-analysis",
          "signature": "CallGraph -\u003e Function -\u003e [Value]",
          "source": "src/LLVM-Analysis-CallGraph-Internal.html#allFunctionCallees",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-CallGraph-Internal.html#v:allFunctionCallees\",\"http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-CallGraph.html#v:allFunctionCallees\"]"
        },
        "index": {
          "hierarchy": "LLVM Analysis CallGraph Internal",
          "module": "LLVM.Analysis.CallGraph.Internal",
          "name": "allFunctionCallees",
          "normalized": "CallGraph-\u003eFunction-\u003e[Value]",
          "package": "llvm-analysis",
          "partial": "Function Callees",
          "signature": "CallGraph-\u003eFunction-\u003e[Value]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-CallGraph-Internal.html#v:allFunctionCallees"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"LLVM.Analysis.CallGraph.Internal\",\"LLVM.Analysis.CallGraph\"]",
          "name": "allFunctionCallers",
          "package": "llvm-analysis",
          "signature": "CallGraph -\u003e Function -\u003e [Value]",
          "source": "src/LLVM-Analysis-CallGraph-Internal.html#allFunctionCallers",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-CallGraph-Internal.html#v:allFunctionCallers\",\"http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-CallGraph.html#v:allFunctionCallers\"]"
        },
        "index": {
          "hierarchy": "LLVM Analysis CallGraph Internal",
          "module": "LLVM.Analysis.CallGraph.Internal",
          "name": "allFunctionCallers",
          "normalized": "CallGraph-\u003eFunction-\u003e[Value]",
          "package": "llvm-analysis",
          "partial": "Function Callers",
          "signature": "CallGraph-\u003eFunction-\u003e[Value]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-CallGraph-Internal.html#v:allFunctionCallers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuild a call graph for the given \u003ccode\u003eModule\u003c/code\u003e using a pre-computed\n points-to analysis.  The String parameter identifies the program\n entry point.\n\u003c/p\u003e\u003cp\u003eFIXME: \u003ccode\u003eentryPoint\u003c/code\u003e is not respected.\n\u003c/p\u003e\u003cp\u003eFIXME: Function pointers can be bitcasted - be sure to respect\n those when adding indirect edges.\n\u003c/p\u003e",
          "module": "[\"LLVM.Analysis.CallGraph.Internal\",\"LLVM.Analysis.CallGraph\"]",
          "name": "callGraph",
          "package": "llvm-analysis",
          "signature": "Module-\u003e a-\u003e [Function]-\u003e CallGraph",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-CallGraph-Internal.html#v:callGraph\",\"http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-CallGraph.html#v:callGraph\"]"
        },
        "index": {
          "description": "Build call graph for the given Module using pre-computed points-to analysis The String parameter identifies the program entry point FIXME entryPoint is not respected FIXME Function pointers can be bitcasted be sure to respect those when adding indirect edges",
          "hierarchy": "LLVM Analysis CallGraph Internal",
          "module": "LLVM.Analysis.CallGraph.Internal",
          "name": "callGraph",
          "normalized": "Module-\u003ea-\u003e[Function]-\u003eCallGraph",
          "package": "llvm-analysis",
          "partial": "Graph",
          "signature": "Module-\u003ea-\u003e[Function]-\u003eCallGraph",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-CallGraph-Internal.html#v:callGraph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a call-graph SCC summary function from a pure summary\n function.  The function is applied to each function in the SCC in\n an arbitrary order.  It returns the resulting summary obtained by\n repeated evaluation until a fixed-point is reached.\n\u003c/p\u003e",
          "module": "[\"LLVM.Analysis.CallGraph.Internal\",\"LLVM.Analysis.CallGraphSCCTraversal\"]",
          "name": "callGraphAnalysis",
          "package": "llvm-analysis",
          "signature": "(funcLike -\u003e summary -\u003e summary) -\u003e [funcLike] -\u003e summary -\u003e summary",
          "source": "src/LLVM-Analysis-CallGraph-Internal.html#callGraphAnalysis",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-CallGraph-Internal.html#v:callGraphAnalysis\",\"http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-CallGraphSCCTraversal.html#v:callGraphAnalysis\"]"
        },
        "index": {
          "description": "Make call-graph SCC summary function from pure summary function The function is applied to each function in the SCC in an arbitrary order It returns the resulting summary obtained by repeated evaluation until fixed-point is reached",
          "hierarchy": "LLVM Analysis CallGraph Internal",
          "module": "LLVM.Analysis.CallGraph.Internal",
          "name": "callGraphAnalysis",
          "normalized": "(a-\u003eb-\u003eb)-\u003e[a]-\u003eb-\u003eb",
          "package": "llvm-analysis",
          "partial": "Graph Analysis",
          "signature": "(funcLike-\u003esummary-\u003esummary)-\u003e[funcLike]-\u003esummary-\u003esummary",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-CallGraph-Internal.html#v:callGraphAnalysis"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a call-graph SCC summary function from a basic monadic\n summary function and a function to evaluate the function in its\n monad and unwrap the monadic value.\n\u003c/p\u003e\u003cp\u003eThe monadic equivalent of \u003ccode\u003e\u003ca\u003ecallGraphAnalysis\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"LLVM.Analysis.CallGraph.Internal\",\"LLVM.Analysis.CallGraphSCCTraversal\"]",
          "name": "callGraphAnalysisM",
          "package": "llvm-analysis",
          "signature": "(m summary -\u003e summary)-\u003e (funcLike -\u003e summary -\u003e m summary)-\u003e [funcLike] -\u003e summary -\u003e summary",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-CallGraph-Internal.html#v:callGraphAnalysisM\",\"http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-CallGraphSCCTraversal.html#v:callGraphAnalysisM\"]"
        },
        "index": {
          "description": "Make call-graph SCC summary function from basic monadic summary function and function to evaluate the function in its monad and unwrap the monadic value The monadic equivalent of callGraphAnalysis",
          "hierarchy": "LLVM Analysis CallGraph Internal",
          "module": "LLVM.Analysis.CallGraph.Internal",
          "name": "callGraphAnalysisM",
          "normalized": "(a b-\u003eb)-\u003e(c-\u003eb-\u003ea b)-\u003e[c]-\u003eb-\u003eb",
          "package": "llvm-analysis",
          "partial": "Graph Analysis",
          "signature": "(m summary-\u003esummary)-\u003e(funcLike-\u003esummary-\u003em summary)-\u003e[funcLike]-\u003esummary-\u003esummary",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-CallGraph-Internal.html#v:callGraphAnalysisM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompose a list of analyses into a pure summary function for use\n in a callGraphSCCTraversal.  The advantage of using a composable\n analysis is that it only traverses the call graph once.  At each\n SCC, all analyses are applied until their fixed-point is reached.\n\u003c/p\u003e\u003cp\u003eThis makes it easier to share intermediate values (like CFGs)\n between analyses without having to recompute them or store them on\n the side.\n\u003c/p\u003e\u003cp\u003eThe input analyses are processed *in order* (left-to-right).  This\n means that analyses with dependencies should come *after* the\n analyses they depend on in the list.  This is not currently\n statically enforced - your dependency summaries will just be\n missing information you might have expected if you get the order\n wrong.\n\u003c/p\u003e",
          "module": "[\"LLVM.Analysis.CallGraph.Internal\",\"LLVM.Analysis.CallGraphSCCTraversal\"]",
          "name": "callGraphComposeAnalysis",
          "package": "llvm-analysis",
          "signature": "[ComposableAnalysis compSumm funcLike] -\u003e [funcLike] -\u003e compSumm -\u003e compSumm",
          "source": "src/LLVM-Analysis-CallGraph-Internal.html#callGraphComposeAnalysis",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-CallGraph-Internal.html#v:callGraphComposeAnalysis\",\"http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-CallGraphSCCTraversal.html#v:callGraphComposeAnalysis\"]"
        },
        "index": {
          "description": "Compose list of analyses into pure summary function for use in callGraphSCCTraversal The advantage of using composable analysis is that it only traverses the call graph once At each SCC all analyses are applied until their fixed-point is reached This makes it easier to share intermediate values like CFGs between analyses without having to recompute them or store them on the side The input analyses are processed in order left-to-right This means that analyses with dependencies should come after the analyses they depend on in the list This is not currently statically enforced your dependency summaries will just be missing information you might have expected if you get the order wrong",
          "hierarchy": "LLVM Analysis CallGraph Internal",
          "module": "LLVM.Analysis.CallGraph.Internal",
          "name": "callGraphComposeAnalysis",
          "normalized": "[ComposableAnalysis a b]-\u003e[b]-\u003ea-\u003ea",
          "package": "llvm-analysis",
          "partial": "Graph Compose Analysis",
          "signature": "[ComposableAnalysis compSumm funcLike]-\u003e[funcLike]-\u003ecompSumm-\u003ecompSumm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-CallGraph-Internal.html#v:callGraphComposeAnalysis"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet all of the functions defined in this module from the\n CallGraph\n\u003c/p\u003e",
          "module": "[\"LLVM.Analysis.CallGraph.Internal\",\"LLVM.Analysis.CallGraph\"]",
          "name": "callGraphFunctions",
          "package": "llvm-analysis",
          "signature": "CallGraph -\u003e [Function]",
          "source": "src/LLVM-Analysis-CallGraph-Internal.html#callGraphFunctions",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-CallGraph-Internal.html#v:callGraphFunctions\",\"http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-CallGraph.html#v:callGraphFunctions\"]"
        },
        "index": {
          "description": "Get all of the functions defined in this module from the CallGraph",
          "hierarchy": "LLVM Analysis CallGraph Internal",
          "module": "LLVM.Analysis.CallGraph.Internal",
          "name": "callGraphFunctions",
          "normalized": "CallGraph-\u003e[Function]",
          "package": "llvm-analysis",
          "partial": "Graph Functions",
          "signature": "CallGraph-\u003e[Function]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-CallGraph-Internal.html#v:callGraphFunctions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert the CallGraph to a graph ADT that can be traversed,\n manipulated, or easily displayed with graphviz.\n\u003c/p\u003e\u003cp\u003eFor now, this representation is not guaranteed to remain stable.\n\u003c/p\u003e",
          "module": "LLVM.Analysis.CallGraph.Internal",
          "name": "callGraphRepr",
          "package": "llvm-analysis",
          "signature": "CallGraph -\u003e CG",
          "source": "src/LLVM-Analysis-CallGraph-Internal.html#callGraphRepr",
          "type": "function"
        },
        "index": {
          "description": "Convert the CallGraph to graph ADT that can be traversed manipulated or easily displayed with graphviz For now this representation is not guaranteed to remain stable",
          "hierarchy": "LLVM Analysis CallGraph Internal",
          "module": "LLVM.Analysis.CallGraph.Internal",
          "name": "callGraphRepr",
          "normalized": "CallGraph-\u003eCG",
          "package": "llvm-analysis",
          "partial": "Graph Repr",
          "signature": "CallGraph-\u003eCG",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-CallGraph-Internal.html#v:callGraphRepr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTraverse the callgraph bottom-up with an accumulator function.\n\u003c/p\u003e\u003cpre\u003e callGraphSCCTraversal cg f seed\n\u003c/pre\u003e\u003cp\u003eThis example applies the folding function \u003ccode\u003ef\u003c/code\u003e over each\n strongly-connected component in the callgraph bottom-up with a\n starting \u003ccode\u003eseed\u003c/code\u003e.  Each strongly-connected component is processed as\n a unit.  The final accumulated value (based on \u003ccode\u003eseed\u003c/code\u003e) is returned.\n\u003c/p\u003e\u003cp\u003eThe function \u003ccode\u003ef\u003c/code\u003e is responsible for approximating the analysis\n value for the SCC in whatever way makes sense for the analysis.\n\u003c/p\u003e",
          "module": "[\"LLVM.Analysis.CallGraph.Internal\",\"LLVM.Analysis.CallGraphSCCTraversal\"]",
          "name": "callGraphSCCTraversal",
          "package": "llvm-analysis",
          "signature": "CallGraph-\u003e ([funcLike] -\u003e summary -\u003e summary)-\u003e summary-\u003e summary",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-CallGraph-Internal.html#v:callGraphSCCTraversal\",\"http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-CallGraphSCCTraversal.html#v:callGraphSCCTraversal\"]"
        },
        "index": {
          "description": "Traverse the callgraph bottom-up with an accumulator function callGraphSCCTraversal cg seed This example applies the folding function over each strongly-connected component in the callgraph bottom-up with starting seed Each strongly-connected component is processed as unit The final accumulated value based on seed is returned The function is responsible for approximating the analysis value for the SCC in whatever way makes sense for the analysis",
          "hierarchy": "LLVM Analysis CallGraph Internal",
          "module": "LLVM.Analysis.CallGraph.Internal",
          "name": "callGraphSCCTraversal",
          "normalized": "CallGraph-\u003e([a]-\u003eb-\u003eb)-\u003eb-\u003eb",
          "package": "llvm-analysis",
          "partial": "Graph SCCTraversal",
          "signature": "CallGraph-\u003e([funcLike]-\u003esummary-\u003esummary)-\u003esummary-\u003esummary",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-CallGraph-Internal.html#v:callGraphSCCTraversal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a Call or Invoke instruction, return the list of possible\n callees.  All returned Values will be either Functions or\n ExternalFunctions.\n\u003c/p\u003e\u003cp\u003ePassing a non-call/invoke instruction will trigger a noisy pattern\n matching failure.\n\u003c/p\u003e",
          "module": "[\"LLVM.Analysis.CallGraph.Internal\",\"LLVM.Analysis.CallGraph\"]",
          "name": "callSiteTargets",
          "package": "llvm-analysis",
          "signature": "CallGraph -\u003e Instruction -\u003e [Value]",
          "source": "src/LLVM-Analysis-CallGraph-Internal.html#callSiteTargets",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-CallGraph-Internal.html#v:callSiteTargets\",\"http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-CallGraph.html#v:callSiteTargets\"]"
        },
        "index": {
          "description": "Given Call or Invoke instruction return the list of possible callees All returned Values will be either Functions or ExternalFunctions Passing non-call invoke instruction will trigger noisy pattern matching failure",
          "hierarchy": "LLVM Analysis CallGraph Internal",
          "module": "LLVM.Analysis.CallGraph.Internal",
          "name": "callSiteTargets",
          "normalized": "CallGraph-\u003eInstruction-\u003e[Value]",
          "package": "llvm-analysis",
          "partial": "Site Targets",
          "signature": "CallGraph-\u003eInstruction-\u003e[Value]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-CallGraph-Internal.html#v:callSiteTargets"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven the value called by a Call or Invoke instruction, return\n all of the possible Functions or ExternalFunctions that it could\n be.\n\u003c/p\u003e",
          "module": "[\"LLVM.Analysis.CallGraph.Internal\",\"LLVM.Analysis.CallGraph\"]",
          "name": "callValueTargets",
          "package": "llvm-analysis",
          "signature": "CallGraph -\u003e Value -\u003e [Value]",
          "source": "src/LLVM-Analysis-CallGraph-Internal.html#callValueTargets",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-CallGraph-Internal.html#v:callValueTargets\",\"http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-CallGraph.html#v:callValueTargets\"]"
        },
        "index": {
          "description": "Given the value called by Call or Invoke instruction return all of the possible Functions or ExternalFunctions that it could be",
          "hierarchy": "LLVM Analysis CallGraph Internal",
          "module": "LLVM.Analysis.CallGraph.Internal",
          "name": "callValueTargets",
          "normalized": "CallGraph-\u003eValue-\u003e[Value]",
          "package": "llvm-analysis",
          "partial": "Value Targets",
          "signature": "CallGraph-\u003eValue-\u003e[Value]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-CallGraph-Internal.html#v:callValueTargets"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a pure composable analysis from a summary function and a\n Lens that accesses the summary for this function (given the\n composite summary).  The lens is used to access the current state\n of this analysis and to update the state for this analysis after it\n is run.\n\u003c/p\u003e",
          "module": "[\"LLVM.Analysis.CallGraph.Internal\",\"LLVM.Analysis.CallGraphSCCTraversal\"]",
          "name": "composableAnalysis",
          "package": "llvm-analysis",
          "signature": "(funcLike -\u003e summary -\u003e summary) -\u003e Lens' compSumm summary -\u003e ComposableAnalysis compSumm funcLike",
          "source": "src/LLVM-Analysis-CallGraph-Internal.html#composableAnalysis",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-CallGraph-Internal.html#v:composableAnalysis\",\"http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-CallGraphSCCTraversal.html#v:composableAnalysis\"]"
        },
        "index": {
          "description": "Create pure composable analysis from summary function and Lens that accesses the summary for this function given the composite summary The lens is used to access the current state of this analysis and to update the state for this analysis after it is run",
          "hierarchy": "LLVM Analysis CallGraph Internal",
          "module": "LLVM.Analysis.CallGraph.Internal",
          "name": "composableAnalysis",
          "normalized": "(a-\u003eb-\u003eb)-\u003eLens' c b-\u003eComposableAnalysis c a",
          "package": "llvm-analysis",
          "partial": "Analysis",
          "signature": "(funcLike-\u003esummary-\u003esummary)-\u003eLens' compSumm summary-\u003eComposableAnalysis compSumm funcLike",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-CallGraph-Internal.html#v:composableAnalysis"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA monadic version of \u003ccode\u003e\u003ca\u003ecomposableAnalysis\u003c/a\u003e\u003c/code\u003e.  The first argument\n here is a function to unwrap a monadic value (something like\n runIdentity or runReader).\n\u003c/p\u003e",
          "module": "[\"LLVM.Analysis.CallGraph.Internal\",\"LLVM.Analysis.CallGraphSCCTraversal\"]",
          "name": "composableAnalysisM",
          "package": "llvm-analysis",
          "signature": "(m summary -\u003e summary) -\u003e (funcLike -\u003e summary -\u003e m summary) -\u003e Lens' compSumm summary -\u003e ComposableAnalysis compSumm funcLike",
          "source": "src/LLVM-Analysis-CallGraph-Internal.html#composableAnalysisM",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-CallGraph-Internal.html#v:composableAnalysisM\",\"http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-CallGraphSCCTraversal.html#v:composableAnalysisM\"]"
        },
        "index": {
          "description": "monadic version of composableAnalysis The first argument here is function to unwrap monadic value something like runIdentity or runReader",
          "hierarchy": "LLVM Analysis CallGraph Internal",
          "module": "LLVM.Analysis.CallGraph.Internal",
          "name": "composableAnalysisM",
          "normalized": "(a b-\u003eb)-\u003e(c-\u003eb-\u003ea b)-\u003eLens' d b-\u003eComposableAnalysis d c",
          "package": "llvm-analysis",
          "partial": "Analysis",
          "signature": "(m summary-\u003esummary)-\u003e(funcLike-\u003esummary-\u003em summary)-\u003eLens' compSumm summary-\u003eComposableAnalysis compSumm funcLike",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-CallGraph-Internal.html#v:composableAnalysisM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ecomposableAnalysis\u003c/a\u003e\u003c/code\u003e, but with an extra lens that is used to\n extract *dependency* information from the composite summary, which\n is then fed into this summary function.\n\u003c/p\u003e\u003cp\u003eThe intended use is that some analysis will have a dependency on an\n earlier analysis summary.  The lens is used to extract the relevant\n part of the composite summary.  A dependency on multiple earlier\n analysis summaries can be expressed by providing a lens that\n extracts a *tuple* containing all relevant analyses.\n\u003c/p\u003e",
          "module": "[\"LLVM.Analysis.CallGraph.Internal\",\"LLVM.Analysis.CallGraphSCCTraversal\"]",
          "name": "composableDependencyAnalysis",
          "package": "llvm-analysis",
          "signature": "(deps -\u003e funcLike -\u003e summary -\u003e summary) -\u003e Lens' compSumm summary -\u003e Getter compSumm deps -\u003e ComposableAnalysis compSumm funcLike",
          "source": "src/LLVM-Analysis-CallGraph-Internal.html#composableDependencyAnalysis",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-CallGraph-Internal.html#v:composableDependencyAnalysis\",\"http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-CallGraphSCCTraversal.html#v:composableDependencyAnalysis\"]"
        },
        "index": {
          "description": "Like composableAnalysis but with an extra lens that is used to extract dependency information from the composite summary which is then fed into this summary function The intended use is that some analysis will have dependency on an earlier analysis summary The lens is used to extract the relevant part of the composite summary dependency on multiple earlier analysis summaries can be expressed by providing lens that extracts tuple containing all relevant analyses",
          "hierarchy": "LLVM Analysis CallGraph Internal",
          "module": "LLVM.Analysis.CallGraph.Internal",
          "name": "composableDependencyAnalysis",
          "normalized": "(a-\u003eb-\u003ec-\u003ec)-\u003eLens' d c-\u003eGetter d a-\u003eComposableAnalysis d b",
          "package": "llvm-analysis",
          "partial": "Dependency Analysis",
          "signature": "(deps-\u003efuncLike-\u003esummary-\u003esummary)-\u003eLens' compSumm summary-\u003eGetter compSumm deps-\u003eComposableAnalysis compSumm funcLike",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-CallGraph-Internal.html#v:composableDependencyAnalysis"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA monadic version of \u003ccode\u003e\u003ca\u003ecomposableDependencyAnalysis\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"LLVM.Analysis.CallGraph.Internal\",\"LLVM.Analysis.CallGraphSCCTraversal\"]",
          "name": "composableDependencyAnalysisM",
          "package": "llvm-analysis",
          "signature": "(m summary -\u003e summary) -\u003e (deps -\u003e funcLike -\u003e summary -\u003e m summary) -\u003e Lens' compSumm summary -\u003e Getter compSumm deps -\u003e ComposableAnalysis compSumm funcLike",
          "source": "src/LLVM-Analysis-CallGraph-Internal.html#composableDependencyAnalysisM",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-CallGraph-Internal.html#v:composableDependencyAnalysisM\",\"http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-CallGraphSCCTraversal.html#v:composableDependencyAnalysisM\"]"
        },
        "index": {
          "description": "monadic version of composableDependencyAnalysis",
          "hierarchy": "LLVM Analysis CallGraph Internal",
          "module": "LLVM.Analysis.CallGraph.Internal",
          "name": "composableDependencyAnalysisM",
          "normalized": "(a b-\u003eb)-\u003e(c-\u003ed-\u003eb-\u003ea b)-\u003eLens' e b-\u003eGetter e c-\u003eComposableAnalysis e d",
          "package": "llvm-analysis",
          "partial": "Dependency Analysis",
          "signature": "(m summary-\u003esummary)-\u003e(deps-\u003efuncLike-\u003esummary-\u003em summary)-\u003eLens' compSumm summary-\u003eGetter compSumm deps-\u003eComposableAnalysis compSumm funcLike",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-CallGraph-Internal.html#v:composableDependencyAnalysisM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"LLVM.Analysis.CallGraph.Internal\",\"LLVM.Analysis.CallGraph\"]",
          "name": "functionCallees",
          "package": "llvm-analysis",
          "signature": "CallGraph -\u003e Function -\u003e [Value]",
          "source": "src/LLVM-Analysis-CallGraph-Internal.html#functionCallees",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-CallGraph-Internal.html#v:functionCallees\",\"http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-CallGraph.html#v:functionCallees\"]"
        },
        "index": {
          "hierarchy": "LLVM Analysis CallGraph Internal",
          "module": "LLVM.Analysis.CallGraph.Internal",
          "name": "functionCallees",
          "normalized": "CallGraph-\u003eFunction-\u003e[Value]",
          "package": "llvm-analysis",
          "partial": "Callees",
          "signature": "CallGraph-\u003eFunction-\u003e[Value]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-CallGraph-Internal.html#v:functionCallees"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"LLVM.Analysis.CallGraph.Internal\",\"LLVM.Analysis.CallGraph\"]",
          "name": "functionCallers",
          "package": "llvm-analysis",
          "signature": "CallGraph -\u003e Function -\u003e [Value]",
          "source": "src/LLVM-Analysis-CallGraph-Internal.html#functionCallers",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-CallGraph-Internal.html#v:functionCallers\",\"http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-CallGraph.html#v:functionCallers\"]"
        },
        "index": {
          "hierarchy": "LLVM Analysis CallGraph Internal",
          "module": "LLVM.Analysis.CallGraph.Internal",
          "name": "functionCallers",
          "normalized": "CallGraph-\u003eFunction-\u003e[Value]",
          "package": "llvm-analysis",
          "partial": "Callers",
          "signature": "CallGraph-\u003eFunction-\u003e[Value]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-CallGraph-Internal.html#v:functionCallers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJust like \u003ccode\u003e\u003ca\u003ecallGraphSCCTraversal\u003c/a\u003e\u003c/code\u003e, except strongly-connected\n components are analyzed in parallel.  Each component is analyzed as\n soon as possible after its dependencies have been analyzed.\n\u003c/p\u003e",
          "module": "[\"LLVM.Analysis.CallGraph.Internal\",\"LLVM.Analysis.CallGraphSCCTraversal\"]",
          "name": "parallelCallGraphSCCTraversal",
          "package": "llvm-analysis",
          "signature": "CallGraph -\u003e ([funcLike] -\u003e summary -\u003e summary) -\u003e summary -\u003e summary",
          "source": "src/LLVM-Analysis-CallGraph-Internal.html#parallelCallGraphSCCTraversal",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-CallGraph-Internal.html#v:parallelCallGraphSCCTraversal\",\"http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-CallGraphSCCTraversal.html#v:parallelCallGraphSCCTraversal\"]"
        },
        "index": {
          "description": "Just like callGraphSCCTraversal except strongly-connected components are analyzed in parallel Each component is analyzed as soon as possible after its dependencies have been analyzed",
          "hierarchy": "LLVM Analysis CallGraph Internal",
          "module": "LLVM.Analysis.CallGraph.Internal",
          "name": "parallelCallGraphSCCTraversal",
          "normalized": "CallGraph-\u003e([a]-\u003eb-\u003eb)-\u003eb-\u003eb",
          "package": "llvm-analysis",
          "partial": "Call Graph SCCTraversal",
          "signature": "CallGraph-\u003e([funcLike]-\u003esummary-\u003esummary)-\u003esummary-\u003esummary",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-CallGraph-Internal.html#v:parallelCallGraphSCCTraversal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines a call graph and related functions.  The call\n graph is a static view of the calls between functions in a\n \u003ccode\u003eModule\u003c/code\u003e.  The nodes of the graph are global functions and the\n edges are calls made to other functions.\n\u003c/p\u003e\u003cp\u003eThis call graph attempts to provide as much information as possible\n about calls through function pointers.  Direct calls have a single\n outgoing edge.  Indirect calls that can be augmented with\n information from a points-to analysis can induce many IndirectCall\n edges.\n\u003c/p\u003e\u003cp\u003eFor now, all indirect calls also induce an UnknownCall edge, under\n the assumption that externally-obtained function pointers may also\n be called somehow.  This restriction will eventually be lifted and\n indirect calls that can be identified as completely internal will\n not have the UnknownCall edge.  The preconditions for this will be:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The \u003ccode\u003eModule\u003c/code\u003e must have an entry point (otherwise it is a library)\n\u003c/li\u003e\u003cli\u003e The function pointer must not be able to alias the result of a\n   dlopen or similar call\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eAgain, the more sophisticated callgraph is still pending.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "LLVM.Analysis.CallGraph",
          "name": "CallGraph",
          "package": "llvm-analysis",
          "source": "src/LLVM-Analysis-CallGraph.html",
          "type": "module"
        },
        "index": {
          "description": "This module defines call graph and related functions The call graph is static view of the calls between functions in Module The nodes of the graph are global functions and the edges are calls made to other functions This call graph attempts to provide as much information as possible about calls through function pointers Direct calls have single outgoing edge Indirect calls that can be augmented with information from points-to analysis can induce many IndirectCall edges For now all indirect calls also induce an UnknownCall edge under the assumption that externally-obtained function pointers may also be called somehow This restriction will eventually be lifted and indirect calls that can be identified as completely internal will not have the UnknownCall edge The preconditions for this will be The Module must have an entry point otherwise it is library The function pointer must not be able to alias the result of dlopen or similar call Again the more sophisticated callgraph is still pending",
          "hierarchy": "LLVM Analysis CallGraph",
          "module": "LLVM.Analysis.CallGraph",
          "name": "CallGraph",
          "package": "llvm-analysis",
          "partial": "Call Graph",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-CallGraph.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn opaque wrapper for the callgraph.  The nodes are functions and\n the edges are calls between them.\n\u003c/p\u003e",
          "module": "LLVM.Analysis.CallGraph",
          "name": "CallGraph",
          "package": "llvm-analysis",
          "source": "src/LLVM-Analysis-CallGraph-Internal.html#CallGraph",
          "type": "data"
        },
        "index": {
          "description": "An opaque wrapper for the callgraph The nodes are functions and the edges are calls between them",
          "hierarchy": "LLVM Analysis CallGraph",
          "module": "LLVM.Analysis.CallGraph",
          "name": "CallGraph",
          "package": "llvm-analysis",
          "partial": "Call Graph",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-CallGraph.html#t:CallGraph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides a framework for analyzing LLVM Modules\n bottom-up with regard to the call graph.  The analysis starts at\n the leaves and propagates summary information up the call graph.\n Strongly-connected components (hence the SCC in the module name)\n are analyzed until a fixed-point is reached.\n\u003c/p\u003e\u003cp\u003eAnalysis functions can be either pure or monadic; the adaptors take\n summary functions of various shapes and convert them into a form\n suitable for the traversal engine.\n\u003c/p\u003e\u003cp\u003eThe traversal also processes independent strongly-connected\n components in parallel with as many cores as the process has been\n allocated.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "LLVM.Analysis.CallGraphSCCTraversal",
          "name": "CallGraphSCCTraversal",
          "package": "llvm-analysis",
          "source": "src/LLVM-Analysis-CallGraphSCCTraversal.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides framework for analyzing LLVM Modules bottom-up with regard to the call graph The analysis starts at the leaves and propagates summary information up the call graph Strongly-connected components hence the SCC in the module name are analyzed until fixed-point is reached Analysis functions can be either pure or monadic the adaptors take summary functions of various shapes and convert them into form suitable for the traversal engine The traversal also processes independent strongly-connected components in parallel with as many cores as the process has been allocated",
          "hierarchy": "LLVM Analysis CallGraphSCCTraversal",
          "module": "LLVM.Analysis.CallGraphSCCTraversal",
          "name": "CallGraphSCCTraversal",
          "package": "llvm-analysis",
          "partial": "Call Graph SCCTraversal",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-CallGraphSCCTraversal.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn abstract representation of a composable analysis.  Construct\n these with the smart constructors \u003ccode\u003e\u003ca\u003ecomposableAnalysis\u003c/a\u003e\u003c/code\u003e,\n \u003ccode\u003e\u003ca\u003ecomposableDependencyAnalysis\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ecomposableAnalysisM\u003c/a\u003e\u003c/code\u003e, and\n \u003ccode\u003e\u003ca\u003ecomposableDependencyAnalysisM\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eUse \u003ccode\u003e\u003ca\u003ecallGraphComposeAnalysis\u003c/a\u003e\u003c/code\u003e to convert a list of these into a\n summary function for use with the call graph traversals.\n\u003c/p\u003e",
          "module": "LLVM.Analysis.CallGraphSCCTraversal",
          "name": "ComposableAnalysis",
          "package": "llvm-analysis",
          "source": "src/LLVM-Analysis-CallGraph-Internal.html#ComposableAnalysis",
          "type": "data"
        },
        "index": {
          "description": "An abstract representation of composable analysis Construct these with the smart constructors composableAnalysis composableDependencyAnalysis composableAnalysisM and composableDependencyAnalysisM Use callGraphComposeAnalysis to convert list of these into summary function for use with the call graph traversals",
          "hierarchy": "LLVM Analysis CallGraphSCCTraversal",
          "module": "LLVM.Analysis.CallGraphSCCTraversal",
          "name": "ComposableAnalysis",
          "package": "llvm-analysis",
          "partial": "Composable Analysis",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-CallGraphSCCTraversal.html#t:ComposableAnalysis"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines a class hierarchy analysis for C++.\n\u003c/p\u003e\u003cp\u003eThis analysis operates entirely at the bitcode level and does not\n rely on metadata.\n\u003c/p\u003e\u003cp\u003eThe hierarchy analysis result only includes class instantiations in\n the bitcode provided (i.e., it is most useful for whole-program\n bitcodes).  Results for single compilation units will be\n incomplete.\n\u003c/p\u003e\u003cp\u003eAlso note that this analysis requires the input bitcode to be built\n with C++ run-time type information.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "LLVM.Analysis.ClassHierarchy",
          "name": "ClassHierarchy",
          "package": "llvm-analysis",
          "source": "src/LLVM-Analysis-ClassHierarchy.html",
          "type": "module"
        },
        "index": {
          "description": "This module defines class hierarchy analysis for This analysis operates entirely at the bitcode level and does not rely on metadata The hierarchy analysis result only includes class instantiations in the bitcode provided i.e it is most useful for whole-program bitcodes Results for single compilation units will be incomplete Also note that this analysis requires the input bitcode to be built with run-time type information",
          "hierarchy": "LLVM Analysis ClassHierarchy",
          "module": "LLVM.Analysis.ClassHierarchy",
          "name": "ClassHierarchy",
          "package": "llvm-analysis",
          "partial": "Class Hierarchy",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-ClassHierarchy.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe result of the class hierarchy analysis\n\u003c/p\u003e",
          "module": "LLVM.Analysis.ClassHierarchy",
          "name": "CHA",
          "package": "llvm-analysis",
          "source": "src/LLVM-Analysis-ClassHierarchy.html#CHA",
          "type": "data"
        },
        "index": {
          "description": "The result of the class hierarchy analysis",
          "hierarchy": "LLVM Analysis ClassHierarchy",
          "module": "LLVM.Analysis.ClassHierarchy",
          "name": "CHA",
          "package": "llvm-analysis",
          "partial": "CHA",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-ClassHierarchy.html#t:CHA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn interface for inspecting virtual function tables\n\u003c/p\u003e",
          "module": "LLVM.Analysis.ClassHierarchy",
          "name": "VTable",
          "package": "llvm-analysis",
          "source": "src/LLVM-Analysis-ClassHierarchy.html#VTable",
          "type": "data"
        },
        "index": {
          "description": "An interface for inspecting virtual function tables",
          "hierarchy": "LLVM Analysis ClassHierarchy",
          "module": "LLVM.Analysis.ClassHierarchy",
          "name": "VTable",
          "package": "llvm-analysis",
          "partial": "VTable",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-ClassHierarchy.html#t:VTable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList of all (transitive) parent types of the given \u003ccode\u003eType\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "LLVM.Analysis.ClassHierarchy",
          "name": "classAncestors",
          "package": "llvm-analysis",
          "signature": "CHA -\u003e Type -\u003e [Type]",
          "source": "src/LLVM-Analysis-ClassHierarchy.html#classAncestors",
          "type": "function"
        },
        "index": {
          "description": "List of all transitive parent types of the given Type",
          "hierarchy": "LLVM Analysis ClassHierarchy",
          "module": "LLVM.Analysis.ClassHierarchy",
          "name": "classAncestors",
          "normalized": "CHA-\u003eType-\u003e[Type]",
          "package": "llvm-analysis",
          "partial": "Ancestors",
          "signature": "CHA-\u003eType-\u003e[Type]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-ClassHierarchy.html#v:classAncestors"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Analysis.ClassHierarchy",
          "name": "classHierarchyToTestFormat",
          "package": "llvm-analysis",
          "signature": "CHA -\u003e Map String (Set String)",
          "source": "src/LLVM-Analysis-ClassHierarchy.html#classHierarchyToTestFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Analysis ClassHierarchy",
          "module": "LLVM.Analysis.ClassHierarchy",
          "name": "classHierarchyToTestFormat",
          "normalized": "CHA-\u003eMap String(Set String)",
          "package": "llvm-analysis",
          "partial": "Hierarchy To Test Format",
          "signature": "CHA-\u003eMap String(Set String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-ClassHierarchy.html#v:classHierarchyToTestFormat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList of the immediate parent types of the given \u003ccode\u003eType\u003c/code\u003e.  The list\n is only empty for the root of a class hierarchy.\n\u003c/p\u003e",
          "module": "LLVM.Analysis.ClassHierarchy",
          "name": "classParents",
          "package": "llvm-analysis",
          "signature": "CHA -\u003e Type -\u003e [Type]",
          "source": "src/LLVM-Analysis-ClassHierarchy.html#classParents",
          "type": "function"
        },
        "index": {
          "description": "List of the immediate parent types of the given Type The list is only empty for the root of class hierarchy",
          "hierarchy": "LLVM Analysis ClassHierarchy",
          "module": "LLVM.Analysis.ClassHierarchy",
          "name": "classParents",
          "normalized": "CHA-\u003eType-\u003e[Type]",
          "package": "llvm-analysis",
          "partial": "Parents",
          "signature": "CHA-\u003eType-\u003e[Type]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-ClassHierarchy.html#v:classParents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList of all types derived from the given \u003ccode\u003eType\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "LLVM.Analysis.ClassHierarchy",
          "name": "classSubtypes",
          "package": "llvm-analysis",
          "signature": "CHA -\u003e Type -\u003e [Type]",
          "source": "src/LLVM-Analysis-ClassHierarchy.html#classSubtypes",
          "type": "function"
        },
        "index": {
          "description": "List of all types derived from the given Type",
          "hierarchy": "LLVM Analysis ClassHierarchy",
          "module": "LLVM.Analysis.ClassHierarchy",
          "name": "classSubtypes",
          "normalized": "CHA-\u003eType-\u003e[Type]",
          "package": "llvm-analysis",
          "partial": "Subtypes",
          "signature": "CHA-\u003eType-\u003e[Type]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-ClassHierarchy.html#v:classSubtypes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList of all types *transitively* drived from the given \u003ccode\u003eType\u003c/code\u003e\n\u003c/p\u003e",
          "module": "LLVM.Analysis.ClassHierarchy",
          "name": "classTransitiveSubtypes",
          "package": "llvm-analysis",
          "signature": "CHA -\u003e Type -\u003e [Type]",
          "source": "src/LLVM-Analysis-ClassHierarchy.html#classTransitiveSubtypes",
          "type": "function"
        },
        "index": {
          "description": "List of all types transitively drived from the given Type",
          "hierarchy": "LLVM Analysis ClassHierarchy",
          "module": "LLVM.Analysis.ClassHierarchy",
          "name": "classTransitiveSubtypes",
          "normalized": "CHA-\u003eType-\u003e[Type]",
          "package": "llvm-analysis",
          "partial": "Transitive Subtypes",
          "signature": "CHA-\u003eType-\u003e[Type]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-ClassHierarchy.html#v:classTransitiveSubtypes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve the vtbl for a given type.  Will return Nothing if the\n type is not a class or if the class has no virtual methods.\n\u003c/p\u003e",
          "module": "LLVM.Analysis.ClassHierarchy",
          "name": "classVTable",
          "package": "llvm-analysis",
          "signature": "CHA -\u003e Type -\u003e Maybe VTable",
          "source": "src/LLVM-Analysis-ClassHierarchy.html#classVTable",
          "type": "function"
        },
        "index": {
          "description": "Retrieve the vtbl for given type Will return Nothing if the type is not class or if the class has no virtual methods",
          "hierarchy": "LLVM Analysis ClassHierarchy",
          "module": "LLVM.Analysis.ClassHierarchy",
          "name": "classVTable",
          "normalized": "CHA-\u003eType-\u003eMaybe VTable",
          "package": "llvm-analysis",
          "partial": "VTable",
          "signature": "CHA-\u003eType-\u003eMaybe VTable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-ClassHierarchy.html#v:classVTable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the function at the named slot in a vtable.  Returns Nothing\n for external vtables.\n\u003c/p\u003e",
          "module": "LLVM.Analysis.ClassHierarchy",
          "name": "functionAtSlot",
          "package": "llvm-analysis",
          "signature": "Int -\u003e VTable -\u003e Maybe Function",
          "source": "src/LLVM-Analysis-ClassHierarchy.html#functionAtSlot",
          "type": "function"
        },
        "index": {
          "description": "Get the function at the named slot in vtable Returns Nothing for external vtables",
          "hierarchy": "LLVM Analysis ClassHierarchy",
          "module": "LLVM.Analysis.ClassHierarchy",
          "name": "functionAtSlot",
          "normalized": "Int-\u003eVTable-\u003eMaybe Function",
          "package": "llvm-analysis",
          "partial": "At Slot",
          "signature": "Int-\u003eVTable-\u003eMaybe Function",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-ClassHierarchy.html#v:functionAtSlot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Analysis.ClassHierarchy",
          "name": "resolveVirtualCallee",
          "package": "llvm-analysis",
          "signature": "CHA -\u003e Instruction -\u003e Maybe [Function]",
          "source": "src/LLVM-Analysis-ClassHierarchy.html#resolveVirtualCallee",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Analysis ClassHierarchy",
          "module": "LLVM.Analysis.ClassHierarchy",
          "name": "resolveVirtualCallee",
          "normalized": "CHA-\u003eInstruction-\u003eMaybe[Function]",
          "package": "llvm-analysis",
          "partial": "Virtual Callee",
          "signature": "CHA-\u003eInstruction-\u003eMaybe[Function]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-ClassHierarchy.html#v:resolveVirtualCallee"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe analysis reconstructs the class hierarchy by looking at\n typeinfo structures (which are probably only generated when\n compiling with run-time type information enabled).  It also finds\n vtables by demangling the names of the vtables in the module.\n\u003c/p\u003e",
          "module": "LLVM.Analysis.ClassHierarchy",
          "name": "runCHA",
          "package": "llvm-analysis",
          "signature": "Module -\u003e CHA",
          "source": "src/LLVM-Analysis-ClassHierarchy.html#runCHA",
          "type": "function"
        },
        "index": {
          "description": "The analysis reconstructs the class hierarchy by looking at typeinfo structures which are probably only generated when compiling with run-time type information enabled It also finds vtables by demangling the names of the vtables in the module",
          "hierarchy": "LLVM Analysis ClassHierarchy",
          "module": "LLVM.Analysis.ClassHierarchy",
          "name": "runCHA",
          "normalized": "Module-\u003eCHA",
          "package": "llvm-analysis",
          "partial": "CHA",
          "signature": "Module-\u003eCHA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-ClassHierarchy.html#v:runCHA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines an interface for intra-procedural dataflow\n analysis (forward and backward).\n\u003c/p\u003e\u003cp\u003eThe user defines an analysis with the \u003ccode\u003edataflowAnalysis\u003c/code\u003e function,\n which can be constructed from a \u003ccode\u003etop\u003c/code\u003e value, a \u003ccode\u003emeet\u003c/code\u003e operator, and\n a \u003ccode\u003etransfer\u003c/code\u003e function (which is run as needed for \u003ccode\u003eInstruction\u003c/code\u003es).\n\u003c/p\u003e\u003cp\u003eTo use this dataflow analysis framework, pass it an initial\n analysis state (which may be \u003ccode\u003etop\u003c/code\u003e or a different value) and\n something providing a control flow graph, along with the opaque\n analysis object.  The analysis then returns an abstract result that\n represents dataflow facts at each \u003ccode\u003eInstruction\u003c/code\u003e in the \u003ccode\u003eFunction\u003c/code\u003e.\n For example,\n\u003c/p\u003e\u003cpre\u003e let initialState = ...\n     a = dataflowAnalysis top meet transfer\n     results = forwardDataflow initialState analysis cfg\n in dataflowResult results\n\u003c/pre\u003e\u003cp\u003egives the dataflow value for the virtual exit node (to which all\n other function termination instructions flow).  To get results at\n other instructions, see \u003ccode\u003e\u003ca\u003edataflowResultAt\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "LLVM.Analysis.Dataflow",
          "name": "Dataflow",
          "package": "llvm-analysis",
          "source": "src/LLVM-Analysis-Dataflow.html",
          "type": "module"
        },
        "index": {
          "description": "This module defines an interface for intra-procedural dataflow analysis forward and backward The user defines an analysis with the dataflowAnalysis function which can be constructed from top value meet operator and transfer function which is run as needed for Instruction To use this dataflow analysis framework pass it an initial analysis state which may be top or different value and something providing control flow graph along with the opaque analysis object The analysis then returns an abstract result that represents dataflow facts at each Instruction in the Function For example let initialState dataflowAnalysis top meet transfer results forwardDataflow initialState analysis cfg in dataflowResult results gives the dataflow value for the virtual exit node to which all other function termination instructions flow To get results at other instructions see dataflowResultAt",
          "hierarchy": "LLVM Analysis Dataflow",
          "module": "LLVM.Analysis.Dataflow",
          "name": "Dataflow",
          "package": "llvm-analysis",
          "partial": "Dataflow",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-Dataflow.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn opaque representation of a dataflow analysis.  Analyses of\n this type are suitable for both forward and backward use.\n\u003c/p\u003e\u003cp\u003eFor all dataflow analyses, the standard rules apply.\n\u003c/p\u003e\u003cp\u003e1) \u003ccode\u003emeet a top == a\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e2) Your lattice \u003ccode\u003ef\u003c/code\u003e must have finite height\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003em\u003c/code\u003e type parameter is a \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e; this dataflow framework\n provides a \u003cem\u003emonadic\u003c/em\u003e transfer function.  This is intended to allow\n transfer functions to have monadic contexts that provide\n MonadReader and MonadWriter-like functionality.  State is also\n useful for caching expensive sub-computations.  Keep in mind that\n the analysis iterates to a fixedpoint and side effects in the monad\n will be repeated.\n\u003c/p\u003e",
          "module": "LLVM.Analysis.Dataflow",
          "name": "DataflowAnalysis",
          "package": "llvm-analysis",
          "source": "src/LLVM-Analysis-CFG-Internal.html#DataflowAnalysis",
          "type": "data"
        },
        "index": {
          "description": "An opaque representation of dataflow analysis Analyses of this type are suitable for both forward and backward use For all dataflow analyses the standard rules apply meet top Your lattice must have finite height The type parameter is Monad this dataflow framework provides monadic transfer function This is intended to allow transfer functions to have monadic contexts that provide MonadReader and MonadWriter-like functionality State is also useful for caching expensive sub-computations Keep in mind that the analysis iterates to fixedpoint and side effects in the monad will be repeated",
          "hierarchy": "LLVM Analysis Dataflow",
          "module": "LLVM.Analysis.Dataflow",
          "name": "DataflowAnalysis",
          "package": "llvm-analysis",
          "partial": "Dataflow Analysis",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-Dataflow.html#t:DataflowAnalysis"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe opaque result of a dataflow analysis.  Use the functions\n \u003ccode\u003e\u003ca\u003edataflowResult\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003edataflowResultAt\u003c/a\u003e\u003c/code\u003e to extract results.\n\u003c/p\u003e",
          "module": "LLVM.Analysis.Dataflow",
          "name": "DataflowResult",
          "package": "llvm-analysis",
          "source": "src/LLVM-Analysis-CFG-Internal.html#DataflowResult",
          "type": "data"
        },
        "index": {
          "description": "The opaque result of dataflow analysis Use the functions dataflowResult and dataflowResultAt to extract results",
          "hierarchy": "LLVM Analysis Dataflow",
          "module": "LLVM.Analysis.Dataflow",
          "name": "DataflowResult",
          "package": "llvm-analysis",
          "partial": "Dataflow Result",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-Dataflow.html#t:DataflowResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTools to compute dominance information for functions.  Includes\n postdominators.\n\u003c/p\u003e\u003cp\u003eA node \u003ccode\u003em\u003c/code\u003e postdominates a node \u003ccode\u003en\u003c/code\u003e iff every path from \u003ccode\u003en\u003c/code\u003e to\n \u003ccode\u003eexit\u003c/code\u003e passes through \u003ccode\u003em\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis implementation is based on the dominator implementation in fgl,\n which is based on the algorithm from Cooper, Harvey, and Kennedy:\n\u003c/p\u003e\u003cp\u003ehttp:\u003cem/\u003ewww.cs.rice.edu\u003cem\u003e~keith\u003c/em\u003eEmbed/dom.pdf\n\u003c/p\u003e\u003c/div\u003e",
          "module": "LLVM.Analysis.Dominance",
          "name": "Dominance",
          "package": "llvm-analysis",
          "source": "src/LLVM-Analysis-Dominance.html",
          "type": "module"
        },
        "index": {
          "description": "Tools to compute dominance information for functions Includes postdominators node postdominates node iff every path from to exit passes through This implementation is based on the dominator implementation in fgl which is based on the algorithm from Cooper Harvey and Kennedy http www.cs.rice.edu keith Embed dom.pdf",
          "hierarchy": "LLVM Analysis Dominance",
          "module": "LLVM.Analysis.Dominance",
          "name": "Dominance",
          "package": "llvm-analysis",
          "partial": "Dominance",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-Dominance.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Analysis.Dominance",
          "name": "DominatorTree",
          "package": "llvm-analysis",
          "source": "src/LLVM-Analysis-Dominance.html#DominatorTree",
          "type": "data"
        },
        "index": {
          "hierarchy": "LLVM Analysis Dominance",
          "module": "LLVM.Analysis.Dominance",
          "name": "DominatorTree",
          "package": "llvm-analysis",
          "partial": "Dominator Tree",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-Dominance.html#t:DominatorTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Analysis.Dominance",
          "name": "HasDomTree",
          "package": "llvm-analysis",
          "source": "src/LLVM-Analysis-Dominance.html#HasDomTree",
          "type": "class"
        },
        "index": {
          "hierarchy": "LLVM Analysis Dominance",
          "module": "LLVM.Analysis.Dominance",
          "name": "HasDomTree",
          "package": "llvm-analysis",
          "partial": "Has Dom Tree",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-Dominance.html#t:HasDomTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Analysis.Dominance",
          "name": "HasPostdomTree",
          "package": "llvm-analysis",
          "source": "src/LLVM-Analysis-Dominance.html#HasPostdomTree",
          "type": "class"
        },
        "index": {
          "hierarchy": "LLVM Analysis Dominance",
          "module": "LLVM.Analysis.Dominance",
          "name": "HasPostdomTree",
          "package": "llvm-analysis",
          "partial": "Has Postdom Tree",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-Dominance.html#t:HasPostdomTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Analysis.Dominance",
          "name": "PostdominatorTree",
          "package": "llvm-analysis",
          "source": "src/LLVM-Analysis-Dominance.html#PostdominatorTree",
          "type": "data"
        },
        "index": {
          "hierarchy": "LLVM Analysis Dominance",
          "module": "LLVM.Analysis.Dominance",
          "name": "PostdominatorTree",
          "package": "llvm-analysis",
          "partial": "Postdominator Tree",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-Dominance.html#t:PostdominatorTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck whether n dominates m\n\u003c/p\u003e",
          "module": "LLVM.Analysis.Dominance",
          "name": "dominates",
          "package": "llvm-analysis",
          "signature": "t -\u003e Instruction -\u003e Instruction -\u003e Bool",
          "source": "src/LLVM-Analysis-Dominance.html#dominates",
          "type": "function"
        },
        "index": {
          "description": "Check whether dominates",
          "hierarchy": "LLVM Analysis Dominance",
          "module": "LLVM.Analysis.Dominance",
          "name": "dominates",
          "normalized": "a-\u003eInstruction-\u003eInstruction-\u003eBool",
          "package": "llvm-analysis",
          "signature": "t-\u003eInstruction-\u003eInstruction-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-Dominance.html#v:dominates"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a DominatorTree from something that behaves like a\n control flow graph.\n\u003c/p\u003e",
          "module": "LLVM.Analysis.Dominance",
          "name": "dominatorTree",
          "package": "llvm-analysis",
          "signature": "cfg -\u003e DominatorTree",
          "source": "src/LLVM-Analysis-Dominance.html#dominatorTree",
          "type": "function"
        },
        "index": {
          "description": "Construct DominatorTree from something that behaves like control flow graph",
          "hierarchy": "LLVM Analysis Dominance",
          "module": "LLVM.Analysis.Dominance",
          "name": "dominatorTree",
          "normalized": "a-\u003eDominatorTree",
          "package": "llvm-analysis",
          "partial": "Tree",
          "signature": "cfg-\u003eDominatorTree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-Dominance.html#v:dominatorTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Analysis.Dominance",
          "name": "dominators",
          "package": "llvm-analysis",
          "signature": "t -\u003e [(Instruction, [Instruction])]",
          "source": "src/LLVM-Analysis-Dominance.html#dominators",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Analysis Dominance",
          "module": "LLVM.Analysis.Dominance",
          "name": "dominators",
          "normalized": "a-\u003e[(Instruction,[Instruction])]",
          "package": "llvm-analysis",
          "signature": "t-\u003e[(Instruction,[Instruction])]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-Dominance.html#v:dominators"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Analysis.Dominance",
          "name": "dominatorsFor",
          "package": "llvm-analysis",
          "signature": "t -\u003e Instruction -\u003e [Instruction]",
          "source": "src/LLVM-Analysis-Dominance.html#dominatorsFor",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Analysis Dominance",
          "module": "LLVM.Analysis.Dominance",
          "name": "dominatorsFor",
          "normalized": "a-\u003eInstruction-\u003e[Instruction]",
          "package": "llvm-analysis",
          "partial": "For",
          "signature": "t-\u003eInstruction-\u003e[Instruction]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-Dominance.html#v:dominatorsFor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Analysis.Dominance",
          "name": "getDomTree",
          "package": "llvm-analysis",
          "signature": "a -\u003e DominatorTree",
          "source": "src/LLVM-Analysis-Dominance.html#getDomTree",
          "type": "method"
        },
        "index": {
          "hierarchy": "LLVM Analysis Dominance",
          "module": "LLVM.Analysis.Dominance",
          "name": "getDomTree",
          "normalized": "a-\u003eDominatorTree",
          "package": "llvm-analysis",
          "partial": "Dom Tree",
          "signature": "a-\u003eDominatorTree",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-Dominance.html#v:getDomTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Analysis.Dominance",
          "name": "getPostdomTree",
          "package": "llvm-analysis",
          "signature": "a -\u003e PostdominatorTree",
          "source": "src/LLVM-Analysis-Dominance.html#getPostdomTree",
          "type": "method"
        },
        "index": {
          "hierarchy": "LLVM Analysis Dominance",
          "module": "LLVM.Analysis.Dominance",
          "name": "getPostdomTree",
          "normalized": "a-\u003ePostdominatorTree",
          "package": "llvm-analysis",
          "partial": "Postdom Tree",
          "signature": "a-\u003ePostdominatorTree",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-Dominance.html#v:getPostdomTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Analysis.Dominance",
          "name": "immediateDominatorFor",
          "package": "llvm-analysis",
          "signature": "t -\u003e Instruction -\u003e Maybe Instruction",
          "source": "src/LLVM-Analysis-Dominance.html#immediateDominatorFor",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Analysis Dominance",
          "module": "LLVM.Analysis.Dominance",
          "name": "immediateDominatorFor",
          "normalized": "a-\u003eInstruction-\u003eMaybe Instruction",
          "package": "llvm-analysis",
          "partial": "Dominator For",
          "signature": "t-\u003eInstruction-\u003eMaybe Instruction",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-Dominance.html#v:immediateDominatorFor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Analysis.Dominance",
          "name": "immediateDominators",
          "package": "llvm-analysis",
          "signature": "t -\u003e [(Instruction, Instruction)]",
          "source": "src/LLVM-Analysis-Dominance.html#immediateDominators",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Analysis Dominance",
          "module": "LLVM.Analysis.Dominance",
          "name": "immediateDominators",
          "normalized": "a-\u003e[(Instruction,Instruction)]",
          "package": "llvm-analysis",
          "partial": "Dominators",
          "signature": "t-\u003e[(Instruction,Instruction)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-Dominance.html#v:immediateDominators"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Analysis.Dominance",
          "name": "immediatePostdominatorFor",
          "package": "llvm-analysis",
          "signature": "t -\u003e Instruction -\u003e Maybe Instruction",
          "source": "src/LLVM-Analysis-Dominance.html#immediatePostdominatorFor",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Analysis Dominance",
          "module": "LLVM.Analysis.Dominance",
          "name": "immediatePostdominatorFor",
          "normalized": "a-\u003eInstruction-\u003eMaybe Instruction",
          "package": "llvm-analysis",
          "partial": "Postdominator For",
          "signature": "t-\u003eInstruction-\u003eMaybe Instruction",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-Dominance.html#v:immediatePostdominatorFor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Analysis.Dominance",
          "name": "immediatePostdominators",
          "package": "llvm-analysis",
          "signature": "t -\u003e [(Instruction, Instruction)]",
          "source": "src/LLVM-Analysis-Dominance.html#immediatePostdominators",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Analysis Dominance",
          "module": "LLVM.Analysis.Dominance",
          "name": "immediatePostdominators",
          "normalized": "a-\u003e[(Instruction,Instruction)]",
          "package": "llvm-analysis",
          "partial": "Postdominators",
          "signature": "t-\u003e[(Instruction,Instruction)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-Dominance.html#v:immediatePostdominators"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTests whether or not an Instruction n postdominates Instruction m\n\u003c/p\u003e",
          "module": "LLVM.Analysis.Dominance",
          "name": "postdominates",
          "package": "llvm-analysis",
          "signature": "t -\u003e Instruction -\u003e Instruction -\u003e Bool",
          "source": "src/LLVM-Analysis-Dominance.html#postdominates",
          "type": "function"
        },
        "index": {
          "description": "Tests whether or not an Instruction postdominates Instruction",
          "hierarchy": "LLVM Analysis Dominance",
          "module": "LLVM.Analysis.Dominance",
          "name": "postdominates",
          "normalized": "a-\u003eInstruction-\u003eInstruction-\u003eBool",
          "package": "llvm-analysis",
          "signature": "t-\u003eInstruction-\u003eInstruction-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-Dominance.html#v:postdominates"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a PostdominatorTree from something that behaves like a\n control flow graph.\n\u003c/p\u003e",
          "module": "LLVM.Analysis.Dominance",
          "name": "postdominatorTree",
          "package": "llvm-analysis",
          "signature": "f -\u003e PostdominatorTree",
          "source": "src/LLVM-Analysis-Dominance.html#postdominatorTree",
          "type": "function"
        },
        "index": {
          "description": "Construct PostdominatorTree from something that behaves like control flow graph",
          "hierarchy": "LLVM Analysis Dominance",
          "module": "LLVM.Analysis.Dominance",
          "name": "postdominatorTree",
          "normalized": "a-\u003ePostdominatorTree",
          "package": "llvm-analysis",
          "partial": "Tree",
          "signature": "f-\u003ePostdominatorTree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-Dominance.html#v:postdominatorTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Analysis.Dominance",
          "name": "postdominators",
          "package": "llvm-analysis",
          "signature": "t -\u003e [(Instruction, [Instruction])]",
          "source": "src/LLVM-Analysis-Dominance.html#postdominators",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Analysis Dominance",
          "module": "LLVM.Analysis.Dominance",
          "name": "postdominators",
          "normalized": "a-\u003e[(Instruction,[Instruction])]",
          "package": "llvm-analysis",
          "signature": "t-\u003e[(Instruction,[Instruction])]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-Dominance.html#v:postdominators"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Analysis.Dominance",
          "name": "postdominatorsFor",
          "package": "llvm-analysis",
          "signature": "t -\u003e Instruction -\u003e [Instruction]",
          "source": "src/LLVM-Analysis-Dominance.html#postdominatorsFor",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Analysis Dominance",
          "module": "LLVM.Analysis.Dominance",
          "name": "postdominatorsFor",
          "normalized": "a-\u003eInstruction-\u003e[Instruction]",
          "package": "llvm-analysis",
          "partial": "For",
          "signature": "t-\u003eInstruction-\u003e[Instruction]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-Dominance.html#v:postdominatorsFor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn analysis to identify functions that never return to their\n caller.  This only counts calls to exit, abort, or similar.\n Notably, exceptions are not considered since the caller can catch\n those.\n\u003c/p\u003e\u003cp\u003eThe dataflow fact is \u003ca\u003eFunction does not return\u003c/a\u003e.  It starts at\n False (top) and calls to termination functions (or the unreachable\n instruction) move it to True.\n\u003c/p\u003e\u003cp\u003eMeet is &&.  Functions are able to return as long as at least one\n path can return.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "LLVM.Analysis.NoReturn",
          "name": "NoReturn",
          "package": "llvm-analysis",
          "source": "src/LLVM-Analysis-NoReturn.html",
          "type": "module"
        },
        "index": {
          "description": "An analysis to identify functions that never return to their caller This only counts calls to exit abort or similar Notably exceptions are not considered since the caller can catch those The dataflow fact is Function does not return It starts at False top and calls to termination functions or the unreachable instruction move it to True Meet is Functions are able to return as long as at least one path can return",
          "hierarchy": "LLVM Analysis NoReturn",
          "module": "LLVM.Analysis.NoReturn",
          "name": "NoReturn",
          "package": "llvm-analysis",
          "partial": "No Return",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-NoReturn.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe functions in the returned set are those that do not return.\n\u003c/p\u003e\u003cp\u003eWarning, this return type may become abstract at some point.\n\u003c/p\u003e",
          "module": "LLVM.Analysis.NoReturn",
          "name": "noReturnAnalysis",
          "package": "llvm-analysis",
          "signature": "(ExternalFunction -\u003e m Bool) -\u003e cfg -\u003e HashSet Function -\u003e m (HashSet Function)",
          "source": "src/LLVM-Analysis-NoReturn.html#noReturnAnalysis",
          "type": "function"
        },
        "index": {
          "description": "The functions in the returned set are those that do not return Warning this return type may become abstract at some point",
          "hierarchy": "LLVM Analysis NoReturn",
          "module": "LLVM.Analysis.NoReturn",
          "name": "noReturnAnalysis",
          "normalized": "(ExternalFunction-\u003ea Bool)-\u003eb-\u003eHashSet Function-\u003ea(HashSet Function)",
          "package": "llvm-analysis",
          "partial": "Return Analysis",
          "signature": "(ExternalFunction-\u003em Bool)-\u003ecfg-\u003eHashSet Function-\u003em(HashSet Function)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-NoReturn.html#v:noReturnAnalysis"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn analysis to identify the NULL state of pointers at each\n Instruction in a Function.  Pointers can either be DefiniteNULL,\n NotNULL, or Unknown.  Only DefiniteNULL and NotNULL are recorded -\n all other pointers are Unknown.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "LLVM.Analysis.NullPointers",
          "name": "NullPointers",
          "package": "llvm-analysis",
          "source": "src/LLVM-Analysis-NullPointers.html",
          "type": "module"
        },
        "index": {
          "description": "An analysis to identify the NULL state of pointers at each Instruction in Function Pointers can either be DefiniteNULL NotNULL or Unknown Only DefiniteNULL and NotNULL are recorded all other pointers are Unknown",
          "hierarchy": "LLVM Analysis NullPointers",
          "module": "LLVM.Analysis.NullPointers",
          "name": "NullPointers",
          "package": "llvm-analysis",
          "partial": "Null Pointers",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-NullPointers.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Analysis.NullPointers",
          "name": "HasNullSummary",
          "package": "llvm-analysis",
          "source": "src/LLVM-Analysis-NullPointers.html#HasNullSummary",
          "type": "class"
        },
        "index": {
          "hierarchy": "LLVM Analysis NullPointers",
          "module": "LLVM.Analysis.NullPointers",
          "name": "HasNullSummary",
          "package": "llvm-analysis",
          "partial": "Has Null Summary",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-NullPointers.html#t:HasNullSummary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Analysis.NullPointers",
          "name": "NullInfoError",
          "package": "llvm-analysis",
          "source": "src/LLVM-Analysis-NullPointers.html#NullInfoError",
          "type": "data"
        },
        "index": {
          "hierarchy": "LLVM Analysis NullPointers",
          "module": "LLVM.Analysis.NullPointers",
          "name": "NullInfoError",
          "package": "llvm-analysis",
          "partial": "Null Info Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-NullPointers.html#t:NullInfoError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA record of the known NULL and known Not-NULL pointers at each\n Instruction.\n\u003c/p\u003e",
          "module": "LLVM.Analysis.NullPointers",
          "name": "NullPointersSummary",
          "package": "llvm-analysis",
          "source": "src/LLVM-Analysis-NullPointers.html#NullPointersSummary",
          "type": "data"
        },
        "index": {
          "description": "record of the known NULL and known Not-NULL pointers at each Instruction",
          "hierarchy": "LLVM Analysis NullPointers",
          "module": "LLVM.Analysis.NullPointers",
          "name": "NullPointersSummary",
          "package": "llvm-analysis",
          "partial": "Null Pointers Summary",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-NullPointers.html#t:NullPointersSummary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Analysis.NullPointers",
          "name": "NotABranchInst",
          "package": "llvm-analysis",
          "signature": "NotABranchInst Instruction",
          "source": "src/LLVM-Analysis-NullPointers.html#NullInfoError",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Analysis NullPointers",
          "module": "LLVM.Analysis.NullPointers",
          "name": "NotABranchInst",
          "package": "llvm-analysis",
          "partial": "Not ABranch Inst",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-NullPointers.html#v:NotABranchInst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Analysis.NullPointers",
          "name": "NotANullTest",
          "package": "llvm-analysis",
          "signature": "NotANullTest Instruction",
          "source": "src/LLVM-Analysis-NullPointers.html#NullInfoError",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Analysis NullPointers",
          "module": "LLVM.Analysis.NullPointers",
          "name": "NotANullTest",
          "package": "llvm-analysis",
          "partial": "Not ANull Test",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-NullPointers.html#v:NotANullTest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a BranchInst, return:\n\u003c/p\u003e\u003cp\u003e1) The BasicBlock where a pointer is known to be NULL\n\u003c/p\u003e\u003cp\u003e2) The value known to be NULL\n\u003c/p\u003e\u003cp\u003e3) The BasicBlock where the pointer is known to be not NULL\n\u003c/p\u003e",
          "module": "LLVM.Analysis.NullPointers",
          "name": "branchNullInfo",
          "package": "llvm-analysis",
          "signature": "Instruction -\u003e m (BasicBlock, Value, BasicBlock)",
          "source": "src/LLVM-Analysis-NullPointers.html#branchNullInfo",
          "type": "function"
        },
        "index": {
          "description": "Given BranchInst return The BasicBlock where pointer is known to be NULL The value known to be NULL The BasicBlock where the pointer is known to be not NULL",
          "hierarchy": "LLVM Analysis NullPointers",
          "module": "LLVM.Analysis.NullPointers",
          "name": "branchNullInfo",
          "normalized": "Instruction-\u003ea(BasicBlock,Value,BasicBlock)",
          "package": "llvm-analysis",
          "partial": "Null Info",
          "signature": "Instruction-\u003em(BasicBlock,Value,BasicBlock)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-NullPointers.html#v:branchNullInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Analysis.NullPointers",
          "name": "getNullSummary",
          "package": "llvm-analysis",
          "signature": "a -\u003e NullPointersSummary",
          "source": "src/LLVM-Analysis-NullPointers.html#getNullSummary",
          "type": "method"
        },
        "index": {
          "hierarchy": "LLVM Analysis NullPointers",
          "module": "LLVM.Analysis.NullPointers",
          "name": "getNullSummary",
          "normalized": "a-\u003eNullPointersSummary",
          "package": "llvm-analysis",
          "partial": "Null Summary",
          "signature": "a-\u003eNullPointersSummary",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-NullPointers.html#v:getNullSummary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Analysis.NullPointers",
          "name": "notNullPointersAt",
          "package": "llvm-analysis",
          "signature": "NullPointersSummary -\u003e Instruction -\u003e [Value]",
          "source": "src/LLVM-Analysis-NullPointers.html#notNullPointersAt",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Analysis NullPointers",
          "module": "LLVM.Analysis.NullPointers",
          "name": "notNullPointersAt",
          "normalized": "NullPointersSummary-\u003eInstruction-\u003e[Value]",
          "package": "llvm-analysis",
          "partial": "Null Pointers At",
          "signature": "NullPointersSummary-\u003eInstruction-\u003e[Value]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-NullPointers.html#v:notNullPointersAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermine which pointers are NULL and NotNULL at each\n Instruction.\n\u003c/p\u003e",
          "module": "LLVM.Analysis.NullPointers",
          "name": "nullPointersAnalysis",
          "package": "llvm-analysis",
          "signature": "cfg -\u003e NullPointersSummary",
          "source": "src/LLVM-Analysis-NullPointers.html#nullPointersAnalysis",
          "type": "function"
        },
        "index": {
          "description": "Determine which pointers are NULL and NotNULL at each Instruction",
          "hierarchy": "LLVM Analysis NullPointers",
          "module": "LLVM.Analysis.NullPointers",
          "name": "nullPointersAnalysis",
          "normalized": "a-\u003eNullPointersSummary",
          "package": "llvm-analysis",
          "partial": "Pointers Analysis",
          "signature": "cfg-\u003eNullPointersSummary",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-NullPointers.html#v:nullPointersAnalysis"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Analysis.NullPointers",
          "name": "nullPointersAt",
          "package": "llvm-analysis",
          "signature": "NullPointersSummary -\u003e Instruction -\u003e [Value]",
          "source": "src/LLVM-Analysis-NullPointers.html#nullPointersAt",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Analysis NullPointers",
          "module": "LLVM.Analysis.NullPointers",
          "name": "nullPointersAt",
          "normalized": "NullPointersSummary-\u003eInstruction-\u003e[Value]",
          "package": "llvm-analysis",
          "partial": "Pointers At",
          "signature": "NullPointersSummary-\u003eInstruction-\u003e[Value]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-NullPointers.html#v:nullPointersAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines a number of allocation profiles that are\n meant to be inputs to the points-to analyses.  These profiles\n identify the set of instructions that allocate *fresh* memory\n locations (e.g., \u003ccode\u003emalloc\u003c/code\u003e).\n\u003c/p\u003e\u003cp\u003eDifferent profiles are useful for different languages or setups.\n The points-to analyses take lists of these functions so they can be\n combined arbitrarily (and augmented with user-provided versions).\n\u003c/p\u003e\u003c/div\u003e",
          "module": "LLVM.Analysis.PointsTo.AllocatorProfile",
          "name": "AllocatorProfile",
          "package": "llvm-analysis",
          "source": "src/LLVM-Analysis-PointsTo-AllocatorProfile.html",
          "type": "module"
        },
        "index": {
          "description": "This module defines number of allocation profiles that are meant to be inputs to the points-to analyses These profiles identify the set of instructions that allocate fresh memory locations e.g malloc Different profiles are useful for different languages or setups The points-to analyses take lists of these functions so they can be combined arbitrarily and augmented with user-provided versions",
          "hierarchy": "LLVM Analysis PointsTo AllocatorProfile",
          "module": "LLVM.Analysis.PointsTo.AllocatorProfile",
          "name": "AllocatorProfile",
          "package": "llvm-analysis",
          "partial": "Allocator Profile",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-PointsTo-AllocatorProfile.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis profile corresponds to the standard C library and marks\n \u003ccode\u003emalloc\u003c/code\u003e, \u003ccode\u003ecalloc\u003c/code\u003e, and \u003ccode\u003ealloca\u003c/code\u003e as allocators.  \u003ccode\u003erealloc\u003c/code\u003e is not\n always an allocator (since it could return existing memory), so it\n is not included.\n\u003c/p\u003e\u003cp\u003eThis function returns True if the given instruction must be a call\n to a standard C library allocation function.\n\u003c/p\u003e",
          "module": "LLVM.Analysis.PointsTo.AllocatorProfile",
          "name": "standardCProfile",
          "package": "llvm-analysis",
          "signature": "Instruction -\u003e Bool",
          "source": "src/LLVM-Analysis-PointsTo-AllocatorProfile.html#standardCProfile",
          "type": "function"
        },
        "index": {
          "description": "This profile corresponds to the standard library and marks malloc calloc and alloca as allocators realloc is not always an allocator since it could return existing memory so it is not included This function returns True if the given instruction must be call to standard library allocation function",
          "hierarchy": "LLVM Analysis PointsTo AllocatorProfile",
          "module": "LLVM.Analysis.PointsTo.AllocatorProfile",
          "name": "standardCProfile",
          "normalized": "Instruction-\u003eBool",
          "package": "llvm-analysis",
          "partial": "CProfile",
          "signature": "Instruction-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-PointsTo-AllocatorProfile.html#v:standardCProfile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis is a simple implementation of Andersen's points-to analysis.\n\u003c/p\u003e\u003cp\u003eTODO:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Add field sensitivity eventually. See http:\u003cem/\u003edelivery.acm.org\u003cem\u003e10.1145\u003c/em\u003e1300000\u003cem\u003e1290524\u003c/em\u003ea4-pearce.pdf?ip=128.105.181.27&acc=ACTIVE%20SERVICE&CFID=52054919&CFTOKEN=71981976&__acm__=1320350342_65be4c25a6fba7e32d7b4cd60f13fe97\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "LLVM.Analysis.PointsTo.Andersen",
          "name": "Andersen",
          "package": "llvm-analysis",
          "source": "src/LLVM-Analysis-PointsTo-Andersen.html",
          "type": "module"
        },
        "index": {
          "description": "This is simple implementation of Andersen points-to analysis TODO Add field sensitivity eventually See http delivery.acm.org a4-pearce.pdf ip acc ACTIVE SERVICE CFID CFTOKEN acm be4c25a6fba7e32d7b4cd60f13fe97",
          "hierarchy": "LLVM Analysis PointsTo Andersen",
          "module": "LLVM.Analysis.PointsTo.Andersen",
          "name": "Andersen",
          "package": "llvm-analysis",
          "partial": "Andersen",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-PointsTo-Andersen.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Analysis.PointsTo.Andersen",
          "name": "Andersen",
          "package": "llvm-analysis",
          "source": "src/LLVM-Analysis-PointsTo-Andersen.html#Andersen",
          "type": "data"
        },
        "index": {
          "hierarchy": "LLVM Analysis PointsTo Andersen",
          "module": "LLVM.Analysis.PointsTo.Andersen",
          "name": "Andersen",
          "package": "llvm-analysis",
          "partial": "Andersen",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-PointsTo-Andersen.html#t:Andersen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Analysis.PointsTo.Andersen",
          "name": "runPointsToAnalysis",
          "package": "llvm-analysis",
          "signature": "Module -\u003e Andersen",
          "source": "src/LLVM-Analysis-PointsTo-Andersen.html#runPointsToAnalysis",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Analysis PointsTo Andersen",
          "module": "LLVM.Analysis.PointsTo.Andersen",
          "name": "runPointsToAnalysis",
          "normalized": "Module-\u003eAndersen",
          "package": "llvm-analysis",
          "partial": "Points To Analysis",
          "signature": "Module-\u003eAndersen",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-PointsTo-Andersen.html#v:runPointsToAnalysis"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Analysis.PointsTo.Andersen",
          "name": "runPointsToAnalysisWith",
          "package": "llvm-analysis",
          "signature": "(Value -\u003e Bool) -\u003e Module -\u003e Andersen",
          "source": "src/LLVM-Analysis-PointsTo-Andersen.html#runPointsToAnalysisWith",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Analysis PointsTo Andersen",
          "module": "LLVM.Analysis.PointsTo.Andersen",
          "name": "runPointsToAnalysisWith",
          "normalized": "(Value-\u003eBool)-\u003eModule-\u003eAndersen",
          "package": "llvm-analysis",
          "partial": "Points To Analysis With",
          "signature": "(Value-\u003eBool)-\u003eModule-\u003eAndersen",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-PointsTo-Andersen.html#v:runPointsToAnalysisWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module implements a trivial points-to analysis that is\n intended only for fast conservative callgraph construction.  All\n function pointers can point to all functions with compatible types.\n\u003c/p\u003e\u003cp\u003eOther pointers are considered to alias if they are of the same\n type.  The \u003ccode\u003e\u003ca\u003epointsTo\u003c/a\u003e\u003c/code\u003e function only returns empty sets for\n non-function pointers.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "LLVM.Analysis.PointsTo.TrivialFunction",
          "name": "TrivialFunction",
          "package": "llvm-analysis",
          "source": "src/LLVM-Analysis-PointsTo-TrivialFunction.html",
          "type": "module"
        },
        "index": {
          "description": "This module implements trivial points-to analysis that is intended only for fast conservative callgraph construction All function pointers can point to all functions with compatible types Other pointers are considered to alias if they are of the same type The pointsTo function only returns empty sets for non-function pointers",
          "hierarchy": "LLVM Analysis PointsTo TrivialFunction",
          "module": "LLVM.Analysis.PointsTo.TrivialFunction",
          "name": "TrivialFunction",
          "package": "llvm-analysis",
          "partial": "Trivial Function",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-PointsTo-TrivialFunction.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe result of the TrivialFunction points-to analysis.  It is an\n instance of the \u003ccode\u003e\u003ca\u003ePointsToAnalysis\u003c/a\u003e\u003c/code\u003e typeclass and is intended to be\n queried through that interface.\n\u003c/p\u003e\u003cp\u003eAgain, note that this analysis is not precise (just fast) and does\n not provide points-to sets for non-function types.  It provides\n only type-based answers and does not respect typecasts at all.\n\u003c/p\u003e",
          "module": "LLVM.Analysis.PointsTo.TrivialFunction",
          "name": "TrivialFunction",
          "package": "llvm-analysis",
          "source": "src/LLVM-Analysis-PointsTo-TrivialFunction.html#TrivialFunction",
          "type": "data"
        },
        "index": {
          "description": "The result of the TrivialFunction points-to analysis It is an instance of the PointsToAnalysis typeclass and is intended to be queried through that interface Again note that this analysis is not precise just fast and does not provide points-to sets for non-function types It provides only type-based answers and does not respect typecasts at all",
          "hierarchy": "LLVM Analysis PointsTo TrivialFunction",
          "module": "LLVM.Analysis.PointsTo.TrivialFunction",
          "name": "TrivialFunction",
          "package": "llvm-analysis",
          "partial": "Trivial Function",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-PointsTo-TrivialFunction.html#t:TrivialFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun the points-to analysis and return its results in an opaque\n handle.\n\u003c/p\u003e",
          "module": "LLVM.Analysis.PointsTo.TrivialFunction",
          "name": "runPointsToAnalysis",
          "package": "llvm-analysis",
          "signature": "Module -\u003e TrivialFunction",
          "source": "src/LLVM-Analysis-PointsTo-TrivialFunction.html#runPointsToAnalysis",
          "type": "function"
        },
        "index": {
          "description": "Run the points-to analysis and return its results in an opaque handle",
          "hierarchy": "LLVM Analysis PointsTo TrivialFunction",
          "module": "LLVM.Analysis.PointsTo.TrivialFunction",
          "name": "runPointsToAnalysis",
          "normalized": "Module-\u003eTrivialFunction",
          "package": "llvm-analysis",
          "partial": "Points To Analysis",
          "signature": "Module-\u003eTrivialFunction",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-PointsTo-TrivialFunction.html#v:runPointsToAnalysis"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines the interface to points-to analysis in this\n analysis framework.  Each points-to analysis returns a result\n object that is an instance of the \u003ccode\u003e\u003ca\u003ePointsToAnalysis\u003c/a\u003e\u003c/code\u003e typeclass; the\n results are intended to be consumed through this interface.\n\u003c/p\u003e\u003cp\u003eAll of the points-to analysis implementations expose a single function:\n\u003c/p\u003e\u003cpre\u003e runPointsToAnalysis :: (PointsToAnalysis a) =\u003e Module -\u003e a\n\u003c/pre\u003e\u003cp\u003eThis makes it easy to change the points-to analysis you are using:\n just modify your imports.  If you need multiple points-to analyses\n in the same module (for example, to support command-line selectable\n points-to analysis precision), use qualified imports.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "LLVM.Analysis.PointsTo",
          "name": "PointsTo",
          "package": "llvm-analysis",
          "source": "src/LLVM-Analysis-PointsTo.html",
          "type": "module"
        },
        "index": {
          "description": "This module defines the interface to points-to analysis in this analysis framework Each points-to analysis returns result object that is an instance of the PointsToAnalysis typeclass the results are intended to be consumed through this interface All of the points-to analysis implementations expose single function runPointsToAnalysis PointsToAnalysis Module This makes it easy to change the points-to analysis you are using just modify your imports If you need multiple points-to analyses in the same module for example to support command-line selectable points-to analysis precision use qualified imports",
          "hierarchy": "LLVM Analysis PointsTo",
          "module": "LLVM.Analysis.PointsTo",
          "name": "PointsTo",
          "package": "llvm-analysis",
          "partial": "Points To",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-PointsTo.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe interface to any points-to analysis.\n\u003c/p\u003e",
          "module": "LLVM.Analysis.PointsTo",
          "name": "PointsToAnalysis",
          "package": "llvm-analysis",
          "source": "src/LLVM-Analysis-PointsTo.html#PointsToAnalysis",
          "type": "class"
        },
        "index": {
          "description": "The interface to any points-to analysis",
          "hierarchy": "LLVM Analysis PointsTo",
          "module": "LLVM.Analysis.PointsTo",
          "name": "PointsToAnalysis",
          "package": "llvm-analysis",
          "partial": "Points To Analysis",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-PointsTo.html#t:PointsToAnalysis"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck whether or not two values may alias\n\u003c/p\u003e",
          "module": "LLVM.Analysis.PointsTo",
          "name": "mayAlias",
          "package": "llvm-analysis",
          "signature": "a -\u003e Value -\u003e Value -\u003e Bool",
          "source": "src/LLVM-Analysis-PointsTo.html#mayAlias",
          "type": "method"
        },
        "index": {
          "description": "Check whether or not two values may alias",
          "hierarchy": "LLVM Analysis PointsTo",
          "module": "LLVM.Analysis.PointsTo",
          "name": "mayAlias",
          "normalized": "a-\u003eValue-\u003eValue-\u003eBool",
          "package": "llvm-analysis",
          "partial": "Alias",
          "signature": "a-\u003eValue-\u003eValue-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-PointsTo.html#v:mayAlias"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the list of values that a LoadInst may return.  May\n return targets for other values too (e.g., say that a Function\n points to itself), but nothing is guaranteed.\n\u003c/p\u003e\u003cp\u003eShould also give reasonable answers for globals and arguments\n\u003c/p\u003e",
          "module": "LLVM.Analysis.PointsTo",
          "name": "pointsTo",
          "package": "llvm-analysis",
          "signature": "a -\u003e Value -\u003e [Value]",
          "source": "src/LLVM-Analysis-PointsTo.html#pointsTo",
          "type": "method"
        },
        "index": {
          "description": "Return the list of values that LoadInst may return May return targets for other values too e.g say that Function points to itself but nothing is guaranteed Should also give reasonable answers for globals and arguments",
          "hierarchy": "LLVM Analysis PointsTo",
          "module": "LLVM.Analysis.PointsTo",
          "name": "pointsTo",
          "normalized": "a-\u003eValue-\u003e[Value]",
          "package": "llvm-analysis",
          "partial": "To",
          "signature": "a-\u003eValue-\u003e[Value]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-PointsTo.html#v:pointsTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a Call instruction, determine its possible callees.  The\n default implementation just delegates the called function value\n to \u003ccode\u003e\u003ca\u003epointsTo\u003c/a\u003e\u003c/code\u003e and .\n\u003c/p\u003e",
          "module": "LLVM.Analysis.PointsTo",
          "name": "resolveIndirectCall",
          "package": "llvm-analysis",
          "signature": "a -\u003e Instruction -\u003e [Value]",
          "source": "src/LLVM-Analysis-PointsTo.html#resolveIndirectCall",
          "type": "method"
        },
        "index": {
          "description": "Given Call instruction determine its possible callees The default implementation just delegates the called function value to pointsTo and",
          "hierarchy": "LLVM Analysis PointsTo",
          "module": "LLVM.Analysis.PointsTo",
          "name": "resolveIndirectCall",
          "normalized": "a-\u003eInstruction-\u003e[Value]",
          "package": "llvm-analysis",
          "partial": "Indirect Call",
          "signature": "a-\u003eInstruction-\u003e[Value]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-PointsTo.html#v:resolveIndirectCall"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis analysis identifies the (memory) effects that functions have on\nthe scalar components of their arguments.\n\u003c/p\u003e\u003cp\u003eOnly pointer parameters are interesting because only their effects can\nescape the callee.  Effects are currently restricted to increments and\ndecrements of integral types.  The affected memory can be a struct\nmember; the effects are described in terms of abstract AccessPaths.\n\u003c/p\u003e\u003cp\u003eThis is a must analysis.  Effects are only reported if they *MUST*\noccur (modulo non-termination style effects like calls to exit or\ninfinite loops).\n\u003c/p\u003e\u003cp\u003eCurrently, sequential effects are not composed and nothing useful will\nbe reported.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "LLVM.Analysis.ScalarEffects",
          "name": "ScalarEffects",
          "package": "llvm-analysis",
          "source": "src/LLVM-Analysis-ScalarEffects.html",
          "type": "module"
        },
        "index": {
          "description": "This analysis identifies the memory effects that functions have on the scalar components of their arguments Only pointer parameters are interesting because only their effects can escape the callee Effects are currently restricted to increments and decrements of integral types The affected memory can be struct member the effects are described in terms of abstract AccessPaths This is must analysis Effects are only reported if they MUST occur modulo non-termination style effects like calls to exit or infinite loops Currently sequential effects are not composed and nothing useful will be reported",
          "hierarchy": "LLVM Analysis ScalarEffects",
          "module": "LLVM.Analysis.ScalarEffects",
          "name": "ScalarEffects",
          "package": "llvm-analysis",
          "partial": "Scalar Effects",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-ScalarEffects.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe types of effects tracked by this analysis.  This can be expanded\n as the analysis becomes more sophisticated (it could include general\n affine relations or even relate arguments to each other).\n\u003c/p\u003e",
          "module": "LLVM.Analysis.ScalarEffects",
          "name": "ScalarEffect",
          "package": "llvm-analysis",
          "source": "src/LLVM-Analysis-ScalarEffects.html#ScalarEffect",
          "type": "data"
        },
        "index": {
          "description": "The types of effects tracked by this analysis This can be expanded as the analysis becomes more sophisticated it could include general affine relations or even relate arguments to each other",
          "hierarchy": "LLVM Analysis ScalarEffects",
          "module": "LLVM.Analysis.ScalarEffects",
          "name": "ScalarEffect",
          "package": "llvm-analysis",
          "partial": "Scalar Effect",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-ScalarEffects.html#t:ScalarEffect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Analysis.ScalarEffects",
          "name": "ScalarEffectResult",
          "package": "llvm-analysis",
          "source": "src/LLVM-Analysis-ScalarEffects.html#ScalarEffectResult",
          "type": "type"
        },
        "index": {
          "hierarchy": "LLVM Analysis ScalarEffects",
          "module": "LLVM.Analysis.ScalarEffects",
          "name": "ScalarEffectResult",
          "package": "llvm-analysis",
          "partial": "Scalar Effect Result",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-ScalarEffects.html#t:ScalarEffectResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Analysis.ScalarEffects",
          "name": "EffectAdd1",
          "package": "llvm-analysis",
          "signature": "EffectAdd1 AbstractAccessPath",
          "source": "src/LLVM-Analysis-ScalarEffects.html#ScalarEffect",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Analysis ScalarEffects",
          "module": "LLVM.Analysis.ScalarEffects",
          "name": "EffectAdd1",
          "package": "llvm-analysis",
          "partial": "Effect Add",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-ScalarEffects.html#v:EffectAdd1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Analysis.ScalarEffects",
          "name": "EffectSub1",
          "package": "llvm-analysis",
          "signature": "EffectSub1 AbstractAccessPath",
          "source": "src/LLVM-Analysis-ScalarEffects.html#ScalarEffect",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Analysis ScalarEffects",
          "module": "LLVM.Analysis.ScalarEffects",
          "name": "EffectSub1",
          "package": "llvm-analysis",
          "partial": "Effect Sub",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-ScalarEffects.html#v:EffectSub1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Analysis.ScalarEffects",
          "name": "scalarEffectAnalysis",
          "package": "llvm-analysis",
          "signature": "funcLike -\u003e ScalarEffectResult -\u003e m ScalarEffectResult",
          "source": "src/LLVM-Analysis-ScalarEffects.html#scalarEffectAnalysis",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Analysis ScalarEffects",
          "module": "LLVM.Analysis.ScalarEffects",
          "name": "scalarEffectAnalysis",
          "normalized": "a-\u003eScalarEffectResult-\u003eb ScalarEffectResult",
          "package": "llvm-analysis",
          "partial": "Effect Analysis",
          "signature": "funcLike-\u003eScalarEffectResult-\u003em ScalarEffectResult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-ScalarEffects.html#v:scalarEffectAnalysis"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Analysis.UsesOf",
          "name": "UsesOf",
          "package": "llvm-analysis",
          "source": "src/LLVM-Analysis-UsesOf.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "LLVM Analysis UsesOf",
          "module": "LLVM.Analysis.UsesOf",
          "name": "UsesOf",
          "package": "llvm-analysis",
          "partial": "Uses Of",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-UsesOf.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Analysis.UsesOf",
          "name": "UseSummary",
          "package": "llvm-analysis",
          "source": "src/LLVM-Analysis-UsesOf.html#UseSummary",
          "type": "data"
        },
        "index": {
          "hierarchy": "LLVM Analysis UsesOf",
          "module": "LLVM.Analysis.UsesOf",
          "name": "UseSummary",
          "package": "llvm-analysis",
          "partial": "Use Summary",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-UsesOf.html#t:UseSummary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute the uses of every value in the \u003ccode\u003eModule\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eThis information can be used to answer the query:\n\u003c/p\u003e\u003cpre\u003e usedBy useSummary foo\n\u003c/pre\u003e\u003cp\u003ewhich will return all of the Instructions that reference\n the provided value \u003ccode\u003efoo\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote that this is a simple index.  It does not look through bitcasts\n at all.\n\u003c/p\u003e",
          "module": "LLVM.Analysis.UsesOf",
          "name": "computeUsesOf",
          "package": "llvm-analysis",
          "signature": "Module -\u003e UseSummary",
          "source": "src/LLVM-Analysis-UsesOf.html#computeUsesOf",
          "type": "function"
        },
        "index": {
          "description": "Compute the uses of every value in the Module This information can be used to answer the query usedBy useSummary foo which will return all of the Instructions that reference the provided value foo Note that this is simple index It does not look through bitcasts at all",
          "hierarchy": "LLVM Analysis UsesOf",
          "module": "LLVM.Analysis.UsesOf",
          "name": "computeUsesOf",
          "normalized": "Module-\u003eUseSummary",
          "package": "llvm-analysis",
          "partial": "Uses Of",
          "signature": "Module-\u003eUseSummary",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-UsesOf.html#v:computeUsesOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e usedBy summ val\n\u003c/pre\u003e\u003cp\u003eFind the instructions using \u003ccode\u003eval\u003c/code\u003e in the function that \u003ccode\u003esumm\u003c/code\u003e was\n computed for.\n\u003c/p\u003e",
          "module": "LLVM.Analysis.UsesOf",
          "name": "usedBy",
          "package": "llvm-analysis",
          "signature": "UseSummary -\u003e Value -\u003e [Instruction]",
          "source": "src/LLVM-Analysis-UsesOf.html#usedBy",
          "type": "function"
        },
        "index": {
          "description": "usedBy summ val Find the instructions using val in the function that summ was computed for",
          "hierarchy": "LLVM Analysis UsesOf",
          "module": "LLVM.Analysis.UsesOf",
          "name": "usedBy",
          "normalized": "UseSummary-\u003eValue-\u003e[Instruction]",
          "package": "llvm-analysis",
          "partial": "By",
          "signature": "UseSummary-\u003eValue-\u003e[Instruction]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-UsesOf.html#v:usedBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUtilities to parse the type names used by LLVM.  Names are parsed\n into the representation used by the Itanium ABI package.  This\n representation can deal with namespace qualified names and supports\n conversion between Strings and Names.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "LLVM.Analysis.Util.Names",
          "name": "Names",
          "package": "llvm-analysis",
          "source": "src/LLVM-Analysis-Util-Names.html",
          "type": "module"
        },
        "index": {
          "description": "Utilities to parse the type names used by LLVM Names are parsed into the representation used by the Itanium ABI package This representation can deal with namespace qualified names and supports conversion between Strings and Names",
          "hierarchy": "LLVM Analysis Util Names",
          "module": "LLVM.Analysis.Util.Names",
          "name": "Names",
          "package": "llvm-analysis",
          "partial": "Names",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-Util-Names.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Analysis.Util.Names",
          "name": "parseFunctionName",
          "package": "llvm-analysis",
          "signature": "Function -\u003e Either String Name",
          "source": "src/LLVM-Analysis-Util-Names.html#parseFunctionName",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Analysis Util Names",
          "module": "LLVM.Analysis.Util.Names",
          "name": "parseFunctionName",
          "normalized": "Function-\u003eEither String Name",
          "package": "llvm-analysis",
          "partial": "Function Name",
          "signature": "Function-\u003eEither String Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-Util-Names.html#v:parseFunctionName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Analysis.Util.Names",
          "name": "parseTypeName",
          "package": "llvm-analysis",
          "signature": "String -\u003e Either String Name",
          "source": "src/LLVM-Analysis-Util-Names.html#parseTypeName",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Analysis Util Names",
          "module": "LLVM.Analysis.Util.Names",
          "name": "parseTypeName",
          "normalized": "String-\u003eEither String Name",
          "package": "llvm-analysis",
          "partial": "Type Name",
          "signature": "String-\u003eEither String Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-Util-Names.html#v:parseTypeName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Analysis.Util.Names",
          "name": "unparseFunctionName",
          "package": "llvm-analysis",
          "signature": "Name -\u003e Maybe String",
          "source": "src/LLVM-Analysis-Util-Names.html#unparseFunctionName",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Analysis Util Names",
          "module": "LLVM.Analysis.Util.Names",
          "name": "unparseFunctionName",
          "normalized": "Name-\u003eMaybe String",
          "package": "llvm-analysis",
          "partial": "Function Name",
          "signature": "Name-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-Util-Names.html#v:unparseFunctionName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Analysis.Util.Names",
          "name": "unparseTypeName",
          "package": "llvm-analysis",
          "signature": "Name -\u003e Maybe String",
          "source": "src/LLVM-Analysis-Util-Names.html#unparseTypeName",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Analysis Util Names",
          "module": "LLVM.Analysis.Util.Names",
          "name": "unparseTypeName",
          "normalized": "Name-\u003eMaybe String",
          "package": "llvm-analysis",
          "partial": "Type Name",
          "signature": "Name-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-Util-Names.html#v:unparseTypeName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eVarious functions to help test this library and analyses based on\n it.\n\u003c/p\u003e\u003cp\u003eThe idea behind the test framework is that each \u003ccode\u003e\u003ca\u003eTestDescriptor\u003c/a\u003e\u003c/code\u003e\n describes inputs for a test suite and automatically converts the inputs\n to a summary value, which it compares against an expected value.  It\n reports how many such tests pass/fail.\n\u003c/p\u003e\u003cp\u003eMore concretely, each test suite specifies:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The test input files (via a shell glob)\n\u003c/li\u003e\u003cli\u003e A function to conver a test input file name to a filename\n   containing the expected outut.\n\u003c/li\u003e\u003cli\u003e A summary function to reduce a Module to a summary value\n\u003c/li\u003e\u003cli\u003e A comparison function (usually an assertion from HUnit)\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eWith these components, the framework reads each input file and\n converts it to bitcode.  It uses the summary function to reduce the\n Module to a summary value and reads the expected output (using the\n \u003ccode\u003e\u003ca\u003eread\u003c/a\u003e\u003c/code\u003e function).  These two types (the summary and expected\n output) must be identical.  The comparison function is then\n applied.  If it throws an exception, the test is considered to have\n failed.\n\u003c/p\u003e\u003cp\u003eNOTE 1: The result type of the summary function MUST be an instance\n of \u003ccode\u003e\u003ca\u003eRead\u003c/a\u003e\u003c/code\u003e AND the same as the type found in the expected results\n file.\n\u003c/p\u003e\u003cp\u003eNOTE 2: The test inputs can be C, C++, bitcode, or LLVM assembly\n files.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "LLVM.Analysis.Util.Testing",
          "name": "Testing",
          "package": "llvm-analysis",
          "source": "src/LLVM-Analysis-Util-Testing.html",
          "type": "module"
        },
        "index": {
          "description": "Various functions to help test this library and analyses based on it The idea behind the test framework is that each TestDescriptor describes inputs for test suite and automatically converts the inputs to summary value which it compares against an expected value It reports how many such tests pass fail More concretely each test suite specifies The test input files via shell glob function to conver test input file name to filename containing the expected outut summary function to reduce Module to summary value comparison function usually an assertion from HUnit With these components the framework reads each input file and converts it to bitcode It uses the summary function to reduce the Module to summary value and reads the expected output using the read function These two types the summary and expected output must be identical The comparison function is then applied If it throws an exception the test is considered to have failed NOTE The result type of the summary function MUST be an instance of Read AND the same as the type found in the expected results file NOTE The test inputs can be bitcode or LLVM assembly files",
          "hierarchy": "LLVM Analysis Util Testing",
          "module": "LLVM.Analysis.Util.Testing",
          "name": "Testing",
          "package": "llvm-analysis",
          "partial": "Testing",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-Util-Testing.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Analysis.Util.Testing",
          "name": "BuildException",
          "package": "llvm-analysis",
          "source": "src/LLVM-Analysis-Util-Testing.html#BuildException",
          "type": "data"
        },
        "index": {
          "hierarchy": "LLVM Analysis Util Testing",
          "module": "LLVM.Analysis.Util.Testing",
          "name": "BuildException",
          "package": "llvm-analysis",
          "partial": "Build Exception",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-Util-Testing.html#t:BuildException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA description of a set of tests.\n\u003c/p\u003e",
          "module": "LLVM.Analysis.Util.Testing",
          "name": "TestDescriptor",
          "package": "llvm-analysis",
          "source": "src/LLVM-Analysis-Util-Testing.html#TestDescriptor",
          "type": "data"
        },
        "index": {
          "description": "description of set of tests",
          "hierarchy": "LLVM Analysis Util Testing",
          "module": "LLVM.Analysis.Util.Testing",
          "name": "TestDescriptor",
          "package": "llvm-analysis",
          "partial": "Test Descriptor",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-Util-Testing.html#t:TestDescriptor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Analysis.Util.Testing",
          "name": "ClangFailed",
          "package": "llvm-analysis",
          "signature": "ClangFailed FilePath ExitCode",
          "source": "src/LLVM-Analysis-Util-Testing.html#BuildException",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Analysis Util Testing",
          "module": "LLVM.Analysis.Util.Testing",
          "name": "ClangFailed",
          "package": "llvm-analysis",
          "partial": "Clang Failed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-Util-Testing.html#v:ClangFailed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Analysis.Util.Testing",
          "name": "NoBuildMethodForInput",
          "package": "llvm-analysis",
          "signature": "NoBuildMethodForInput FilePath",
          "source": "src/LLVM-Analysis-Util-Testing.html#BuildException",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Analysis Util Testing",
          "module": "LLVM.Analysis.Util.Testing",
          "name": "NoBuildMethodForInput",
          "package": "llvm-analysis",
          "partial": "No Build Method For Input",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-Util-Testing.html#v:NoBuildMethodForInput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Analysis.Util.Testing",
          "name": "NoOptBinaryFound",
          "package": "llvm-analysis",
          "signature": "NoOptBinaryFound",
          "source": "src/LLVM-Analysis-Util-Testing.html#BuildException",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Analysis Util Testing",
          "module": "LLVM.Analysis.Util.Testing",
          "name": "NoOptBinaryFound",
          "package": "llvm-analysis",
          "partial": "No Opt Binary Found",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-Util-Testing.html#v:NoOptBinaryFound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Analysis.Util.Testing",
          "name": "OptFailed",
          "package": "llvm-analysis",
          "signature": "OptFailed FilePath ExitCode",
          "source": "src/LLVM-Analysis-Util-Testing.html#BuildException",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Analysis Util Testing",
          "module": "LLVM.Analysis.Util.Testing",
          "name": "OptFailed",
          "package": "llvm-analysis",
          "partial": "Opt Failed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-Util-Testing.html#v:OptFailed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Analysis.Util.Testing",
          "name": "TestDescriptor",
          "package": "llvm-analysis",
          "signature": "TestDescriptor",
          "source": "src/LLVM-Analysis-Util-Testing.html#TestDescriptor",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Analysis Util Testing",
          "module": "LLVM.Analysis.Util.Testing",
          "name": "TestDescriptor",
          "package": "llvm-analysis",
          "partial": "Test Descriptor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-Util-Testing.html#v:TestDescriptor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven an input file, bitcode parsing function, and options to\n pass to opt, return a Module.  The input file can be C, C++, or\n LLVM bitcode.\n\u003c/p\u003e\u003cp\u003eNote that this function returns an Either value to report some\n kinds of errors.  It can also raise IOErrors.\n\u003c/p\u003e",
          "module": "LLVM.Analysis.Util.Testing",
          "name": "buildModule",
          "package": "llvm-analysis",
          "signature": "[String]-\u003e [String]-\u003e (FilePath -\u003e IO Module)-\u003e FilePath-\u003e IO Module",
          "type": "function"
        },
        "index": {
          "description": "Given an input file bitcode parsing function and options to pass to opt return Module The input file can be or LLVM bitcode Note that this function returns an Either value to report some kinds of errors It can also raise IOErrors",
          "hierarchy": "LLVM Analysis Util Testing",
          "module": "LLVM.Analysis.Util.Testing",
          "name": "buildModule",
          "normalized": "[String]-\u003e[String]-\u003e(FilePath-\u003eIO Module)-\u003eFilePath-\u003eIO Module",
          "package": "llvm-analysis",
          "partial": "Module",
          "signature": "[String]-\u003e[String]-\u003e(FilePath-\u003eIO Module)-\u003eFilePath-\u003eIO Module",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-Util-Testing.html#v:buildModule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn intermediate helper to turn input files into modules and\n return the expected output.\n\u003c/p\u003e",
          "module": "LLVM.Analysis.Util.Testing",
          "name": "readInputAndExpected",
          "package": "llvm-analysis",
          "signature": "[String]-\u003e (FilePath -\u003e IO Module)-\u003e (FilePath -\u003e FilePath)-\u003e FilePath-\u003e IO (FilePath, Module, a)",
          "type": "function"
        },
        "index": {
          "description": "An intermediate helper to turn input files into modules and return the expected output",
          "hierarchy": "LLVM Analysis Util Testing",
          "module": "LLVM.Analysis.Util.Testing",
          "name": "readInputAndExpected",
          "normalized": "[String]-\u003e(FilePath-\u003eIO Module)-\u003e(FilePath-\u003eFilePath)-\u003eFilePath-\u003eIO(FilePath,Module,a)",
          "package": "llvm-analysis",
          "partial": "Input And Expected",
          "signature": "[String]-\u003e(FilePath-\u003eIO Module)-\u003e(FilePath-\u003eFilePath)-\u003eFilePath-\u003eIO(FilePath,Module,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-Util-Testing.html#v:readInputAndExpected"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is the main test suite entry point.  It takes a bitcode\n parser and a list of test suites.\n\u003c/p\u003e\u003cp\u003eThe bitcode parser is taken as an input so that this library does\n not have a direct dependency on any FFI code.\n\u003c/p\u003e",
          "module": "LLVM.Analysis.Util.Testing",
          "name": "testAgainstExpected",
          "package": "llvm-analysis",
          "signature": "[String]-\u003e (FilePath -\u003e IO Module)-\u003e [TestDescriptor]-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "This is the main test suite entry point It takes bitcode parser and list of test suites The bitcode parser is taken as an input so that this library does not have direct dependency on any FFI code",
          "hierarchy": "LLVM Analysis Util Testing",
          "module": "LLVM.Analysis.Util.Testing",
          "name": "testAgainstExpected",
          "normalized": "[String]-\u003e(FilePath-\u003eIO Module)-\u003e[TestDescriptor]-\u003eIO()",
          "package": "llvm-analysis",
          "partial": "Against Expected",
          "signature": "[String]-\u003e(FilePath-\u003eIO Module)-\u003e[TestDescriptor]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-Util-Testing.html#v:testAgainstExpected"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA function to apply to an input file name to find the file containing its expected results\n\u003c/p\u003e",
          "module": "LLVM.Analysis.Util.Testing",
          "name": "testExpectedMapping",
          "package": "llvm-analysis",
          "signature": "FilePath -\u003e FilePath",
          "source": "src/LLVM-Analysis-Util-Testing.html#TestDescriptor",
          "type": "function"
        },
        "index": {
          "description": "function to apply to an input file name to find the file containing its expected results",
          "hierarchy": "LLVM Analysis Util Testing",
          "module": "LLVM.Analysis.Util.Testing",
          "name": "testExpectedMapping",
          "normalized": "FilePath-\u003eFilePath",
          "package": "llvm-analysis",
          "partial": "Expected Mapping",
          "signature": "FilePath-\u003eFilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-Util-Testing.html#v:testExpectedMapping"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA shell glob pattern (relative to the project root) that collects all test inputs\n\u003c/p\u003e",
          "module": "LLVM.Analysis.Util.Testing",
          "name": "testPattern",
          "package": "llvm-analysis",
          "signature": "String",
          "source": "src/LLVM-Analysis-Util-Testing.html#TestDescriptor",
          "type": "function"
        },
        "index": {
          "description": "shell glob pattern relative to the project root that collects all test inputs",
          "hierarchy": "LLVM Analysis Util Testing",
          "module": "LLVM.Analysis.Util.Testing",
          "name": "testPattern",
          "package": "llvm-analysis",
          "partial": "Pattern",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-Util-Testing.html#v:testPattern"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA function to turn a Module into a summary value of any type\n\u003c/p\u003e",
          "module": "LLVM.Analysis.Util.Testing",
          "name": "testResultBuilder",
          "package": "llvm-analysis",
          "signature": "Module -\u003e a",
          "source": "src/LLVM-Analysis-Util-Testing.html#TestDescriptor",
          "type": "function"
        },
        "index": {
          "description": "function to turn Module into summary value of any type",
          "hierarchy": "LLVM Analysis Util Testing",
          "module": "LLVM.Analysis.Util.Testing",
          "name": "testResultBuilder",
          "normalized": "Module-\u003ea",
          "package": "llvm-analysis",
          "partial": "Result Builder",
          "signature": "Module-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-Util-Testing.html#v:testResultBuilder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA function to compare two summary values (throws on failure)\n\u003c/p\u003e",
          "module": "LLVM.Analysis.Util.Testing",
          "name": "testResultComparator",
          "package": "llvm-analysis",
          "signature": "String -\u003e a -\u003e a -\u003e IO ()",
          "source": "src/LLVM-Analysis-Util-Testing.html#TestDescriptor",
          "type": "function"
        },
        "index": {
          "description": "function to compare two summary values throws on failure",
          "hierarchy": "LLVM Analysis Util Testing",
          "module": "LLVM.Analysis.Util.Testing",
          "name": "testResultComparator",
          "normalized": "String-\u003ea-\u003ea-\u003eIO()",
          "package": "llvm-analysis",
          "partial": "Result Comparator",
          "signature": "String-\u003ea-\u003ea-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis-Util-Testing.html#v:testResultComparator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis top-level module exports the LLVM IR definitions and some\n basic functions to inspect the IR.  The sub-modules under\n LLVM.Analysis provide higher-level tools for analyzing the IR.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "LLVM.Analysis",
          "name": "Analysis",
          "package": "llvm-analysis",
          "source": "src/LLVM-Analysis.html",
          "type": "module"
        },
        "index": {
          "description": "This top-level module exports the LLVM IR definitions and some basic functions to inspect the IR The sub-modules under LLVM.Analysis provide higher-level tools for analyzing the IR",
          "hierarchy": "LLVM Analysis",
          "module": "LLVM.Analysis",
          "name": "Analysis",
          "package": "llvm-analysis",
          "partial": "Analysis",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA class for types that can be derived from a Function.\n\u003c/p\u003e",
          "module": "LLVM.Analysis",
          "name": "FuncLike",
          "package": "llvm-analysis",
          "source": "src/LLVM-Analysis.html#FuncLike",
          "type": "class"
        },
        "index": {
          "description": "class for types that can be derived from Function",
          "hierarchy": "LLVM Analysis",
          "module": "LLVM.Analysis",
          "name": "FuncLike",
          "package": "llvm-analysis",
          "partial": "Func Like",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis.html#t:FuncLike"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA class for things that can be converted to graphviz graphs\n\u003c/p\u003e",
          "module": "LLVM.Analysis",
          "name": "ToGraphviz",
          "package": "llvm-analysis",
          "source": "src/LLVM-Analysis.html#ToGraphviz",
          "type": "class"
        },
        "index": {
          "description": "class for things that can be converted to graphviz graphs",
          "hierarchy": "LLVM Analysis",
          "module": "LLVM.Analysis",
          "name": "ToGraphviz",
          "package": "llvm-analysis",
          "partial": "To Graphviz",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis.html#t:ToGraphviz"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Analysis",
          "name": "fromFunction",
          "package": "llvm-analysis",
          "signature": "Function -\u003e a",
          "source": "src/LLVM-Analysis.html#fromFunction",
          "type": "method"
        },
        "index": {
          "hierarchy": "LLVM Analysis",
          "module": "LLVM.Analysis",
          "name": "fromFunction",
          "normalized": "Function-\u003ea",
          "package": "llvm-analysis",
          "partial": "Function",
          "signature": "Function-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis.html#v:fromFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Analysis",
          "name": "toGraphviz",
          "package": "llvm-analysis",
          "signature": "a -\u003e DotGraph Int",
          "source": "src/LLVM-Analysis.html#toGraphviz",
          "type": "method"
        },
        "index": {
          "hierarchy": "LLVM Analysis",
          "module": "LLVM.Analysis",
          "name": "toGraphviz",
          "normalized": "a-\u003eDotGraph Int",
          "package": "llvm-analysis",
          "partial": "Graphviz",
          "signature": "a-\u003eDotGraph Int",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/llvm-analysis/docs/LLVM-Analysis.html#v:toGraphviz"
      }
    }
  ]
]