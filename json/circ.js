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
        "word": "circ"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe runtime library for CIRC generated code.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.CIRC.Runtime",
          "name": "Runtime",
          "package": "circ",
          "source": "src/Language-CIRC-Runtime.html",
          "type": "module"
        },
        "index": {
          "description": "The runtime library for CIRC generated code",
          "hierarchy": "Language CIRC Runtime",
          "module": "Language.CIRC.Runtime",
          "name": "Runtime",
          "package": "circ",
          "partial": "Runtime",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/circ/docs/Language-CIRC-Runtime.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe CIRC transform monad.  Used to create fresh ids.\n\u003c/p\u003e",
          "module": "Language.CIRC.Runtime",
          "name": "CIRC",
          "package": "circ",
          "source": "src/Language-CIRC-Runtime.html#CIRC",
          "type": "type"
        },
        "index": {
          "description": "The CIRC transform monad Used to create fresh ids",
          "hierarchy": "Language CIRC Runtime",
          "module": "Language.CIRC.Runtime",
          "name": "CIRC",
          "package": "circ",
          "partial": "CIRC",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/circ/docs/Language-CIRC-Runtime.html#t:CIRC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIdentifiers.\n\u003c/p\u003e",
          "module": "Language.CIRC.Runtime",
          "name": "Id",
          "package": "circ",
          "source": "src/Language-CIRC-Runtime.html#Id",
          "type": "type"
        },
        "index": {
          "description": "Identifiers",
          "hierarchy": "Language CIRC Runtime",
          "module": "Language.CIRC.Runtime",
          "name": "Id",
          "package": "circ",
          "partial": "Id",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/circ/docs/Language-CIRC-Runtime.html#t:Id"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluates a CIRC transform.\n\u003c/p\u003e",
          "module": "Language.CIRC.Runtime",
          "name": "evalCIRC",
          "package": "circ",
          "signature": "CIRC a -\u003e Int -\u003e a",
          "source": "src/Language-CIRC-Runtime.html#evalCIRC",
          "type": "function"
        },
        "index": {
          "description": "Evaluates CIRC transform",
          "hierarchy": "Language CIRC Runtime",
          "module": "Language.CIRC.Runtime",
          "name": "evalCIRC",
          "normalized": "CIRC a-\u003eInt-\u003ea",
          "package": "circ",
          "partial": "CIRC",
          "signature": "CIRC a-\u003eInt-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/circ/docs/Language-CIRC-Runtime.html#v:evalCIRC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a unqiue int for a given id.\n\u003c/p\u003e",
          "module": "Language.CIRC.Runtime",
          "name": "idId",
          "package": "circ",
          "signature": "Id -\u003e CIRC Int",
          "source": "src/Language-CIRC-Runtime.html#idId",
          "type": "function"
        },
        "index": {
          "description": "Returns unqiue int for given id",
          "hierarchy": "Language CIRC Runtime",
          "module": "Language.CIRC.Runtime",
          "name": "idId",
          "normalized": "Id-\u003eCIRC Int",
          "package": "circ",
          "partial": "Id",
          "signature": "Id-\u003eCIRC Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/circ/docs/Language-CIRC-Runtime.html#v:idId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProduces a fresh id.\n\u003c/p\u003e",
          "module": "Language.CIRC.Runtime",
          "name": "newId",
          "package": "circ",
          "signature": "CIRC Id",
          "source": "src/Language-CIRC-Runtime.html#newId",
          "type": "function"
        },
        "index": {
          "description": "Produces fresh id",
          "hierarchy": "Language CIRC Runtime",
          "module": "Language.CIRC.Runtime",
          "name": "newId",
          "package": "circ",
          "partial": "Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/circ/docs/Language-CIRC-Runtime.html#v:newId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluates a CIRC transform, also returning the fresh next id.\n\u003c/p\u003e",
          "module": "Language.CIRC.Runtime",
          "name": "runCIRC",
          "package": "circ",
          "signature": "CIRC a -\u003e Int -\u003e (a, Int)",
          "source": "src/Language-CIRC-Runtime.html#runCIRC",
          "type": "function"
        },
        "index": {
          "description": "Evaluates CIRC transform also returning the fresh next id",
          "hierarchy": "Language CIRC Runtime",
          "module": "Language.CIRC.Runtime",
          "name": "runCIRC",
          "normalized": "CIRC a-\u003eInt-\u003e(a,Int)",
          "package": "circ",
          "partial": "CIRC",
          "signature": "CIRC a-\u003eInt-\u003e(a,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/circ/docs/Language-CIRC-Runtime.html#v:runCIRC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCompiler IR Compiler (CIRC): A language for specifying compiler intermediate representations.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.CIRC",
          "name": "CIRC",
          "package": "circ",
          "source": "src/Language-CIRC.html",
          "type": "module"
        },
        "index": {
          "description": "Compiler IR Compiler CIRC language for specifying compiler intermediate representations",
          "hierarchy": "Language CIRC",
          "module": "Language.CIRC",
          "name": "CIRC",
          "package": "circ",
          "partial": "CIRC",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/circ/docs/Language-CIRC.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.CIRC",
          "name": "Code",
          "package": "circ",
          "source": "src/Language-CIRC.html#Code",
          "type": "type"
        },
        "index": {
          "hierarchy": "Language CIRC",
          "module": "Language.CIRC",
          "name": "Code",
          "package": "circ",
          "partial": "Code",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/circ/docs/Language-CIRC.html#t:Code"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA constructor definition is a name and a list of type arguments.\n\u003c/p\u003e",
          "module": "Language.CIRC",
          "name": "CtorDef",
          "package": "circ",
          "source": "src/Language-CIRC.html#CtorDef",
          "type": "data"
        },
        "index": {
          "description": "constructor definition is name and list of type arguments",
          "hierarchy": "Language CIRC",
          "module": "Language.CIRC",
          "name": "CtorDef",
          "package": "circ",
          "partial": "Ctor Def",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/circ/docs/Language-CIRC.html#t:CtorDef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.CIRC",
          "name": "CtorName",
          "package": "circ",
          "source": "src/Language-CIRC.html#CtorName",
          "type": "type"
        },
        "index": {
          "hierarchy": "Language CIRC",
          "module": "Language.CIRC",
          "name": "CtorName",
          "package": "circ",
          "partial": "Ctor Name",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/circ/docs/Language-CIRC.html#t:CtorName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.CIRC",
          "name": "Import",
          "package": "circ",
          "source": "src/Language-CIRC.html#Import",
          "type": "type"
        },
        "index": {
          "hierarchy": "Language CIRC",
          "module": "Language.CIRC",
          "name": "Import",
          "package": "circ",
          "partial": "Import",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/circ/docs/Language-CIRC.html#t:Import"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.CIRC",
          "name": "ModuleName",
          "package": "circ",
          "source": "src/Language-CIRC.html#ModuleName",
          "type": "type"
        },
        "index": {
          "hierarchy": "Language CIRC",
          "module": "Language.CIRC",
          "name": "ModuleName",
          "package": "circ",
          "partial": "Module Name",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/circ/docs/Language-CIRC.html#t:ModuleName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.CIRC",
          "name": "Name",
          "package": "circ",
          "source": "src/Language-CIRC.html#Name",
          "type": "type"
        },
        "index": {
          "hierarchy": "Language CIRC",
          "module": "Language.CIRC",
          "name": "Name",
          "package": "circ",
          "partial": "Name",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/circ/docs/Language-CIRC.html#t:Name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA specification is the initial type module name, the initial transform module name, the root type, the initial type definitions, and a list of transforms.\n\u003c/p\u003e",
          "module": "Language.CIRC",
          "name": "Spec",
          "package": "circ",
          "source": "src/Language-CIRC.html#Spec",
          "type": "data"
        },
        "index": {
          "description": "specification is the initial type module name the initial transform module name the root type the initial type definitions and list of transforms",
          "hierarchy": "Language CIRC",
          "module": "Language.CIRC",
          "name": "Spec",
          "package": "circ",
          "partial": "Spec",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/circ/docs/Language-CIRC.html#t:Spec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA transform is a module name, the constructor to be transformed, a list of new type definitions,\n   and the implementation (imports and code).\n\u003c/p\u003e",
          "module": "Language.CIRC",
          "name": "Transform",
          "package": "circ",
          "source": "src/Language-CIRC.html#Transform",
          "type": "data"
        },
        "index": {
          "description": "transform is module name the constructor to be transformed list of new type definitions and the implementation imports and code",
          "hierarchy": "Language CIRC",
          "module": "Language.CIRC",
          "name": "Transform",
          "package": "circ",
          "partial": "Transform",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/circ/docs/Language-CIRC.html#t:Transform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type expression.\n\u003c/p\u003e",
          "module": "Language.CIRC",
          "name": "Type",
          "package": "circ",
          "source": "src/Language-CIRC.html#Type",
          "type": "data"
        },
        "index": {
          "description": "type expression",
          "hierarchy": "Language CIRC",
          "module": "Language.CIRC",
          "name": "Type",
          "package": "circ",
          "partial": "Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/circ/docs/Language-CIRC.html#t:Type"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type definition is a name, a list of type parameters, and a list of constructor definitions.\n\u003c/p\u003e",
          "module": "Language.CIRC",
          "name": "TypeDef",
          "package": "circ",
          "source": "src/Language-CIRC.html#TypeDef",
          "type": "data"
        },
        "index": {
          "description": "type definition is name list of type parameters and list of constructor definitions",
          "hierarchy": "Language CIRC",
          "module": "Language.CIRC",
          "name": "TypeDef",
          "package": "circ",
          "partial": "Type Def",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/circ/docs/Language-CIRC.html#t:TypeDef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.CIRC",
          "name": "TypeName",
          "package": "circ",
          "source": "src/Language-CIRC.html#TypeName",
          "type": "type"
        },
        "index": {
          "hierarchy": "Language CIRC",
          "module": "Language.CIRC",
          "name": "TypeName",
          "package": "circ",
          "partial": "Type Name",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/circ/docs/Language-CIRC.html#t:TypeName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.CIRC",
          "name": "TypeParam",
          "package": "circ",
          "source": "src/Language-CIRC.html#TypeParam",
          "type": "type"
        },
        "index": {
          "hierarchy": "Language CIRC",
          "module": "Language.CIRC",
          "name": "TypeParam",
          "package": "circ",
          "partial": "Type Param",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/circ/docs/Language-CIRC.html#t:TypeParam"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type refinement.\n\u003c/p\u003e",
          "module": "Language.CIRC",
          "name": "TypeRefinement",
          "package": "circ",
          "source": "src/Language-CIRC.html#TypeRefinement",
          "type": "data"
        },
        "index": {
          "description": "type refinement",
          "hierarchy": "Language CIRC",
          "module": "Language.CIRC",
          "name": "TypeRefinement",
          "package": "circ",
          "partial": "Type Refinement",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/circ/docs/Language-CIRC.html#t:TypeRefinement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.CIRC",
          "name": "CtorDef",
          "package": "circ",
          "signature": "CtorDef CtorName [Type]",
          "source": "src/Language-CIRC.html#CtorDef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language CIRC",
          "module": "Language.CIRC",
          "name": "CtorDef",
          "normalized": "CtorDef CtorName[Type]",
          "package": "circ",
          "partial": "Ctor Def",
          "signature": "CtorDef CtorName[Type]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/circ/docs/Language-CIRC.html#v:CtorDef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.CIRC",
          "name": "NewCtor",
          "package": "circ",
          "signature": "NewCtor TypeName CtorDef (ModuleName -\u003e Code)",
          "source": "src/Language-CIRC.html#TypeRefinement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language CIRC",
          "module": "Language.CIRC",
          "name": "NewCtor",
          "normalized": "NewCtor TypeName CtorDef(ModuleName-\u003eCode)",
          "package": "circ",
          "partial": "New Ctor",
          "signature": "NewCtor TypeName CtorDef(ModuleName-\u003eCode)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/circ/docs/Language-CIRC.html#v:NewCtor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.CIRC",
          "name": "NewType",
          "package": "circ",
          "signature": "NewType TypeDef",
          "source": "src/Language-CIRC.html#TypeRefinement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language CIRC",
          "module": "Language.CIRC",
          "name": "NewType",
          "package": "circ",
          "partial": "New Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/circ/docs/Language-CIRC.html#v:NewType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.CIRC",
          "name": "Spec",
          "package": "circ",
          "signature": "Spec ModuleName ModuleName TypeName [TypeDef] [Transform]",
          "source": "src/Language-CIRC.html#Spec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language CIRC",
          "module": "Language.CIRC",
          "name": "Spec",
          "normalized": "Spec ModuleName ModuleName TypeName[TypeDef][Transform]",
          "package": "circ",
          "partial": "Spec",
          "signature": "Spec ModuleName ModuleName TypeName[TypeDef][Transform]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/circ/docs/Language-CIRC.html#v:Spec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.CIRC",
          "name": "T",
          "package": "circ",
          "signature": "T TypeName [Type]",
          "source": "src/Language-CIRC.html#Type",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language CIRC",
          "module": "Language.CIRC",
          "name": "T",
          "normalized": "T TypeName[Type]",
          "package": "circ",
          "signature": "T TypeName[Type]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/circ/docs/Language-CIRC.html#v:T"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.CIRC",
          "name": "TList",
          "package": "circ",
          "signature": "TList Type",
          "source": "src/Language-CIRC.html#Type",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language CIRC",
          "module": "Language.CIRC",
          "name": "TList",
          "package": "circ",
          "partial": "TList",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/circ/docs/Language-CIRC.html#v:TList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.CIRC",
          "name": "TMaybe",
          "package": "circ",
          "signature": "TMaybe Type",
          "source": "src/Language-CIRC.html#Type",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language CIRC",
          "module": "Language.CIRC",
          "name": "TMaybe",
          "package": "circ",
          "partial": "TMaybe",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/circ/docs/Language-CIRC.html#v:TMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.CIRC",
          "name": "TTuple",
          "package": "circ",
          "signature": "TTuple [Type]",
          "source": "src/Language-CIRC.html#Type",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language CIRC",
          "module": "Language.CIRC",
          "name": "TTuple",
          "normalized": "TTuple[Type]",
          "package": "circ",
          "partial": "TTuple",
          "signature": "TTuple[Type]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/circ/docs/Language-CIRC.html#v:TTuple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.CIRC",
          "name": "Transform",
          "package": "circ",
          "signature": "Transform ModuleName [Import] [Import] [(CtorName, ModuleName -\u003e Code)] [TypeRefinement]",
          "source": "src/Language-CIRC.html#Transform",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language CIRC",
          "module": "Language.CIRC",
          "name": "Transform",
          "normalized": "Transform ModuleName[Import][Import][(CtorName,ModuleName-\u003eCode)][TypeRefinement]",
          "package": "circ",
          "partial": "Transform",
          "signature": "Transform ModuleName[Import][Import][(CtorName,ModuleName-\u003eCode)][TypeRefinement]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/circ/docs/Language-CIRC.html#v:Transform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.CIRC",
          "name": "TypeDef",
          "package": "circ",
          "signature": "TypeDef TypeName [TypeParam] [CtorDef]",
          "source": "src/Language-CIRC.html#TypeDef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language CIRC",
          "module": "Language.CIRC",
          "name": "TypeDef",
          "normalized": "TypeDef TypeName[TypeParam][CtorDef]",
          "package": "circ",
          "partial": "Type Def",
          "signature": "TypeDef TypeName[TypeParam][CtorDef]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/circ/docs/Language-CIRC.html#v:TypeDef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompiles a CIRC spec.\n\u003c/p\u003e",
          "module": "Language.CIRC",
          "name": "circ",
          "package": "circ",
          "signature": "Spec -\u003e IO ()",
          "source": "src/Language-CIRC.html#circ",
          "type": "function"
        },
        "index": {
          "description": "Compiles CIRC spec",
          "hierarchy": "Language CIRC",
          "module": "Language.CIRC",
          "name": "circ",
          "normalized": "Spec-\u003eIO()",
          "package": "circ",
          "signature": "Spec-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/circ/docs/Language-CIRC.html#v:circ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIndents code with 2 spaces.\n\u003c/p\u003e",
          "module": "Language.CIRC",
          "name": "indent",
          "package": "circ",
          "signature": "String -\u003e String",
          "source": "src/Language-CIRC.html#indent",
          "type": "function"
        },
        "index": {
          "description": "Indents code with spaces",
          "hierarchy": "Language CIRC",
          "module": "Language.CIRC",
          "name": "indent",
          "normalized": "String-\u003eString",
          "package": "circ",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/circ/docs/Language-CIRC.html#v:indent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn unparameterized type.\n\u003c/p\u003e",
          "module": "Language.CIRC",
          "name": "t",
          "package": "circ",
          "signature": "String -\u003e Type",
          "source": "src/Language-CIRC.html#t",
          "type": "function"
        },
        "index": {
          "description": "An unparameterized type",
          "hierarchy": "Language CIRC",
          "module": "Language.CIRC",
          "name": "t",
          "normalized": "String-\u003eType",
          "package": "circ",
          "signature": "String-\u003eType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/circ/docs/Language-CIRC.html#v:t"
      }
    }
  ]
]