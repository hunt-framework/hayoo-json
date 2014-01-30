[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/circ/docs/Language-CIRC-Runtime.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe runtime library for CIRC generated code.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Language.CIRC.Runtime",
        "fct-package": "circ",
        "fct-signature": "module",
        "fct-source": "src/Language-CIRC-Runtime.html",
        "fct-type": "module",
        "title": "Runtime"
      },
      "index": {
        "description": "The runtime library for CIRC generated code",
        "hierarchy": "Language CIRC Runtime",
        "module": "Language.CIRC.Runtime",
        "name": "Runtime",
        "normalized": "",
        "package": "circ",
        "partial": "Runtime",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/circ/docs/Language-CIRC-Runtime.html#t:CIRC",
      "description": {
        "fct-descr": "\u003cp\u003eThe CIRC transform monad.  Used to create fresh ids.\n\u003c/p\u003e",
        "fct-module": "Language.CIRC.Runtime",
        "fct-package": "circ",
        "fct-signature": "type",
        "fct-source": "src/Language-CIRC-Runtime.html#CIRC",
        "fct-type": "type",
        "title": "CIRC"
      },
      "index": {
        "description": "The CIRC transform monad Used to create fresh ids",
        "hierarchy": "Language CIRC Runtime",
        "module": "Language.CIRC.Runtime",
        "name": "CIRC",
        "normalized": "",
        "package": "circ",
        "partial": "CIRC",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/circ/docs/Language-CIRC-Runtime.html#t:Id",
      "description": {
        "fct-descr": "\u003cp\u003eIdentifiers.\n\u003c/p\u003e",
        "fct-module": "Language.CIRC.Runtime",
        "fct-package": "circ",
        "fct-signature": "type",
        "fct-source": "src/Language-CIRC-Runtime.html#Id",
        "fct-type": "type",
        "title": "Id"
      },
      "index": {
        "description": "Identifiers",
        "hierarchy": "Language CIRC Runtime",
        "module": "Language.CIRC.Runtime",
        "name": "Id",
        "normalized": "",
        "package": "circ",
        "partial": "Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/circ/docs/Language-CIRC-Runtime.html#v:evalCIRC",
      "description": {
        "fct-descr": "\u003cp\u003eEvaluates a CIRC transform.\n\u003c/p\u003e",
        "fct-module": "Language.CIRC.Runtime",
        "fct-package": "circ",
        "fct-signature": "CIRC a -\u003e Int -\u003e a",
        "fct-source": "src/Language-CIRC-Runtime.html#evalCIRC",
        "fct-type": "function",
        "title": "evalCIRC"
      },
      "index": {
        "description": "Evaluates CIRC transform",
        "hierarchy": "Language CIRC Runtime",
        "module": "Language.CIRC.Runtime",
        "name": "evalCIRC",
        "normalized": "CIRC a-\u003eInt-\u003ea",
        "package": "circ",
        "partial": "CIRC",
        "signature": "CIRC a-\u003eInt-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/circ/docs/Language-CIRC-Runtime.html#v:idId",
      "description": {
        "fct-descr": "\u003cp\u003eReturns a unqiue int for a given id.\n\u003c/p\u003e",
        "fct-module": "Language.CIRC.Runtime",
        "fct-package": "circ",
        "fct-signature": "Id -\u003e CIRC Int",
        "fct-source": "src/Language-CIRC-Runtime.html#idId",
        "fct-type": "function",
        "title": "idId"
      },
      "index": {
        "description": "Returns unqiue int for given id",
        "hierarchy": "Language CIRC Runtime",
        "module": "Language.CIRC.Runtime",
        "name": "idId",
        "normalized": "Id-\u003eCIRC Int",
        "package": "circ",
        "partial": "Id",
        "signature": "Id-\u003eCIRC Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/circ/docs/Language-CIRC-Runtime.html#v:newId",
      "description": {
        "fct-descr": "\u003cp\u003eProduces a fresh id.\n\u003c/p\u003e",
        "fct-module": "Language.CIRC.Runtime",
        "fct-package": "circ",
        "fct-signature": "CIRC Id",
        "fct-source": "src/Language-CIRC-Runtime.html#newId",
        "fct-type": "function",
        "title": "newId"
      },
      "index": {
        "description": "Produces fresh id",
        "hierarchy": "Language CIRC Runtime",
        "module": "Language.CIRC.Runtime",
        "name": "newId",
        "normalized": "",
        "package": "circ",
        "partial": "Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/circ/docs/Language-CIRC-Runtime.html#v:runCIRC",
      "description": {
        "fct-descr": "\u003cp\u003eEvaluates a CIRC transform, also returning the fresh next id.\n\u003c/p\u003e",
        "fct-module": "Language.CIRC.Runtime",
        "fct-package": "circ",
        "fct-signature": "CIRC a -\u003e Int -\u003e (a, Int)",
        "fct-source": "src/Language-CIRC-Runtime.html#runCIRC",
        "fct-type": "function",
        "title": "runCIRC"
      },
      "index": {
        "description": "Evaluates CIRC transform also returning the fresh next id",
        "hierarchy": "Language CIRC Runtime",
        "module": "Language.CIRC.Runtime",
        "name": "runCIRC",
        "normalized": "CIRC a-\u003eInt-\u003e(a,Int)",
        "package": "circ",
        "partial": "CIRC",
        "signature": "CIRC a-\u003eInt-\u003e(a,Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/circ/docs/Language-CIRC.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCompiler IR Compiler (CIRC): A language for specifying compiler intermediate representations.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Language.CIRC",
        "fct-package": "circ",
        "fct-signature": "module",
        "fct-source": "src/Language-CIRC.html",
        "fct-type": "module",
        "title": "CIRC"
      },
      "index": {
        "description": "Compiler IR Compiler CIRC language for specifying compiler intermediate representations",
        "hierarchy": "Language CIRC",
        "module": "Language.CIRC",
        "name": "CIRC",
        "normalized": "",
        "package": "circ",
        "partial": "CIRC",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/circ/docs/Language-CIRC.html#t:Code",
      "description": {
        "fct-module": "Language.CIRC",
        "fct-package": "circ",
        "fct-signature": "type",
        "fct-source": "src/Language-CIRC.html#Code",
        "fct-type": "type",
        "title": "Code"
      },
      "index": {
        "description": "",
        "hierarchy": "Language CIRC",
        "module": "Language.CIRC",
        "name": "Code",
        "normalized": "",
        "package": "circ",
        "partial": "Code",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/circ/docs/Language-CIRC.html#t:CtorDef",
      "description": {
        "fct-descr": "\u003cp\u003eA constructor definition is a name and a list of type arguments.\n\u003c/p\u003e",
        "fct-module": "Language.CIRC",
        "fct-package": "circ",
        "fct-signature": "data",
        "fct-source": "src/Language-CIRC.html#CtorDef",
        "fct-type": "data",
        "title": "CtorDef"
      },
      "index": {
        "description": "constructor definition is name and list of type arguments",
        "hierarchy": "Language CIRC",
        "module": "Language.CIRC",
        "name": "CtorDef",
        "normalized": "",
        "package": "circ",
        "partial": "Ctor Def",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/circ/docs/Language-CIRC.html#t:CtorName",
      "description": {
        "fct-module": "Language.CIRC",
        "fct-package": "circ",
        "fct-signature": "type",
        "fct-source": "src/Language-CIRC.html#CtorName",
        "fct-type": "type",
        "title": "CtorName"
      },
      "index": {
        "description": "",
        "hierarchy": "Language CIRC",
        "module": "Language.CIRC",
        "name": "CtorName",
        "normalized": "",
        "package": "circ",
        "partial": "Ctor Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/circ/docs/Language-CIRC.html#t:Import",
      "description": {
        "fct-module": "Language.CIRC",
        "fct-package": "circ",
        "fct-signature": "type",
        "fct-source": "src/Language-CIRC.html#Import",
        "fct-type": "type",
        "title": "Import"
      },
      "index": {
        "description": "",
        "hierarchy": "Language CIRC",
        "module": "Language.CIRC",
        "name": "Import",
        "normalized": "",
        "package": "circ",
        "partial": "Import",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/circ/docs/Language-CIRC.html#t:ModuleName",
      "description": {
        "fct-module": "Language.CIRC",
        "fct-package": "circ",
        "fct-signature": "type",
        "fct-source": "src/Language-CIRC.html#ModuleName",
        "fct-type": "type",
        "title": "ModuleName"
      },
      "index": {
        "description": "",
        "hierarchy": "Language CIRC",
        "module": "Language.CIRC",
        "name": "ModuleName",
        "normalized": "",
        "package": "circ",
        "partial": "Module Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/circ/docs/Language-CIRC.html#t:Name",
      "description": {
        "fct-module": "Language.CIRC",
        "fct-package": "circ",
        "fct-signature": "type",
        "fct-source": "src/Language-CIRC.html#Name",
        "fct-type": "type",
        "title": "Name"
      },
      "index": {
        "description": "",
        "hierarchy": "Language CIRC",
        "module": "Language.CIRC",
        "name": "Name",
        "normalized": "",
        "package": "circ",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/circ/docs/Language-CIRC.html#t:Spec",
      "description": {
        "fct-descr": "\u003cp\u003eA specification is the initial type module name, the initial transform module name, the root type, the initial type definitions, and a list of transforms.\n\u003c/p\u003e",
        "fct-module": "Language.CIRC",
        "fct-package": "circ",
        "fct-signature": "data",
        "fct-source": "src/Language-CIRC.html#Spec",
        "fct-type": "data",
        "title": "Spec"
      },
      "index": {
        "description": "specification is the initial type module name the initial transform module name the root type the initial type definitions and list of transforms",
        "hierarchy": "Language CIRC",
        "module": "Language.CIRC",
        "name": "Spec",
        "normalized": "",
        "package": "circ",
        "partial": "Spec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/circ/docs/Language-CIRC.html#t:Transform",
      "description": {
        "fct-descr": "\u003cp\u003eA transform is a module name, the constructor to be transformed, a list of new type definitions,\n   and the implementation (imports and code).\n\u003c/p\u003e",
        "fct-module": "Language.CIRC",
        "fct-package": "circ",
        "fct-signature": "data",
        "fct-source": "src/Language-CIRC.html#Transform",
        "fct-type": "data",
        "title": "Transform"
      },
      "index": {
        "description": "transform is module name the constructor to be transformed list of new type definitions and the implementation imports and code",
        "hierarchy": "Language CIRC",
        "module": "Language.CIRC",
        "name": "Transform",
        "normalized": "",
        "package": "circ",
        "partial": "Transform",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/circ/docs/Language-CIRC.html#t:Type",
      "description": {
        "fct-descr": "\u003cp\u003eA type expression.\n\u003c/p\u003e",
        "fct-module": "Language.CIRC",
        "fct-package": "circ",
        "fct-signature": "data",
        "fct-source": "src/Language-CIRC.html#Type",
        "fct-type": "data",
        "title": "Type"
      },
      "index": {
        "description": "type expression",
        "hierarchy": "Language CIRC",
        "module": "Language.CIRC",
        "name": "Type",
        "normalized": "",
        "package": "circ",
        "partial": "Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/circ/docs/Language-CIRC.html#t:TypeDef",
      "description": {
        "fct-descr": "\u003cp\u003eA type definition is a name, a list of type parameters, and a list of constructor definitions.\n\u003c/p\u003e",
        "fct-module": "Language.CIRC",
        "fct-package": "circ",
        "fct-signature": "data",
        "fct-source": "src/Language-CIRC.html#TypeDef",
        "fct-type": "data",
        "title": "TypeDef"
      },
      "index": {
        "description": "type definition is name list of type parameters and list of constructor definitions",
        "hierarchy": "Language CIRC",
        "module": "Language.CIRC",
        "name": "TypeDef",
        "normalized": "",
        "package": "circ",
        "partial": "Type Def",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/circ/docs/Language-CIRC.html#t:TypeName",
      "description": {
        "fct-module": "Language.CIRC",
        "fct-package": "circ",
        "fct-signature": "type",
        "fct-source": "src/Language-CIRC.html#TypeName",
        "fct-type": "type",
        "title": "TypeName"
      },
      "index": {
        "description": "",
        "hierarchy": "Language CIRC",
        "module": "Language.CIRC",
        "name": "TypeName",
        "normalized": "",
        "package": "circ",
        "partial": "Type Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/circ/docs/Language-CIRC.html#t:TypeParam",
      "description": {
        "fct-module": "Language.CIRC",
        "fct-package": "circ",
        "fct-signature": "type",
        "fct-source": "src/Language-CIRC.html#TypeParam",
        "fct-type": "type",
        "title": "TypeParam"
      },
      "index": {
        "description": "",
        "hierarchy": "Language CIRC",
        "module": "Language.CIRC",
        "name": "TypeParam",
        "normalized": "",
        "package": "circ",
        "partial": "Type Param",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/circ/docs/Language-CIRC.html#t:TypeRefinement",
      "description": {
        "fct-descr": "\u003cp\u003eA type refinement.\n\u003c/p\u003e",
        "fct-module": "Language.CIRC",
        "fct-package": "circ",
        "fct-signature": "data",
        "fct-source": "src/Language-CIRC.html#TypeRefinement",
        "fct-type": "data",
        "title": "TypeRefinement"
      },
      "index": {
        "description": "type refinement",
        "hierarchy": "Language CIRC",
        "module": "Language.CIRC",
        "name": "TypeRefinement",
        "normalized": "",
        "package": "circ",
        "partial": "Type Refinement",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/circ/docs/Language-CIRC.html#v:CtorDef",
      "description": {
        "fct-module": "Language.CIRC",
        "fct-package": "circ",
        "fct-signature": "CtorDef CtorName [Type]",
        "fct-source": "src/Language-CIRC.html#CtorDef",
        "fct-type": "function",
        "title": "CtorDef"
      },
      "index": {
        "description": "",
        "hierarchy": "Language CIRC",
        "module": "Language.CIRC",
        "name": "CtorDef",
        "normalized": "CtorDef CtorName[Type]",
        "package": "circ",
        "partial": "Ctor Def",
        "signature": "CtorDef CtorName[Type]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/circ/docs/Language-CIRC.html#v:NewCtor",
      "description": {
        "fct-module": "Language.CIRC",
        "fct-package": "circ",
        "fct-signature": "NewCtor TypeName CtorDef (ModuleName -\u003e Code)",
        "fct-source": "src/Language-CIRC.html#TypeRefinement",
        "fct-type": "function",
        "title": "NewCtor"
      },
      "index": {
        "description": "",
        "hierarchy": "Language CIRC",
        "module": "Language.CIRC",
        "name": "NewCtor",
        "normalized": "NewCtor TypeName CtorDef(ModuleName-\u003eCode)",
        "package": "circ",
        "partial": "New Ctor",
        "signature": "NewCtor TypeName CtorDef(ModuleName-\u003eCode)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/circ/docs/Language-CIRC.html#v:NewType",
      "description": {
        "fct-module": "Language.CIRC",
        "fct-package": "circ",
        "fct-signature": "NewType TypeDef",
        "fct-source": "src/Language-CIRC.html#TypeRefinement",
        "fct-type": "function",
        "title": "NewType"
      },
      "index": {
        "description": "",
        "hierarchy": "Language CIRC",
        "module": "Language.CIRC",
        "name": "NewType",
        "normalized": "",
        "package": "circ",
        "partial": "New Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/circ/docs/Language-CIRC.html#v:Spec",
      "description": {
        "fct-module": "Language.CIRC",
        "fct-package": "circ",
        "fct-signature": "Spec ModuleName ModuleName TypeName [TypeDef] [Transform]",
        "fct-source": "src/Language-CIRC.html#Spec",
        "fct-type": "function",
        "title": "Spec"
      },
      "index": {
        "description": "",
        "hierarchy": "Language CIRC",
        "module": "Language.CIRC",
        "name": "Spec",
        "normalized": "Spec ModuleName ModuleName TypeName[TypeDef][Transform]",
        "package": "circ",
        "partial": "Spec",
        "signature": "Spec ModuleName ModuleName TypeName[TypeDef][Transform]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/circ/docs/Language-CIRC.html#v:T",
      "description": {
        "fct-module": "Language.CIRC",
        "fct-package": "circ",
        "fct-signature": "T TypeName [Type]",
        "fct-source": "src/Language-CIRC.html#Type",
        "fct-type": "function",
        "title": "T"
      },
      "index": {
        "description": "",
        "hierarchy": "Language CIRC",
        "module": "Language.CIRC",
        "name": "T",
        "normalized": "T TypeName[Type]",
        "package": "circ",
        "partial": "",
        "signature": "T TypeName[Type]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/circ/docs/Language-CIRC.html#v:TList",
      "description": {
        "fct-module": "Language.CIRC",
        "fct-package": "circ",
        "fct-signature": "TList Type",
        "fct-source": "src/Language-CIRC.html#Type",
        "fct-type": "function",
        "title": "TList"
      },
      "index": {
        "description": "",
        "hierarchy": "Language CIRC",
        "module": "Language.CIRC",
        "name": "TList",
        "normalized": "",
        "package": "circ",
        "partial": "TList",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/circ/docs/Language-CIRC.html#v:TMaybe",
      "description": {
        "fct-module": "Language.CIRC",
        "fct-package": "circ",
        "fct-signature": "TMaybe Type",
        "fct-source": "src/Language-CIRC.html#Type",
        "fct-type": "function",
        "title": "TMaybe"
      },
      "index": {
        "description": "",
        "hierarchy": "Language CIRC",
        "module": "Language.CIRC",
        "name": "TMaybe",
        "normalized": "",
        "package": "circ",
        "partial": "TMaybe",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/circ/docs/Language-CIRC.html#v:TTuple",
      "description": {
        "fct-module": "Language.CIRC",
        "fct-package": "circ",
        "fct-signature": "TTuple [Type]",
        "fct-source": "src/Language-CIRC.html#Type",
        "fct-type": "function",
        "title": "TTuple"
      },
      "index": {
        "description": "",
        "hierarchy": "Language CIRC",
        "module": "Language.CIRC",
        "name": "TTuple",
        "normalized": "TTuple[Type]",
        "package": "circ",
        "partial": "TTuple",
        "signature": "TTuple[Type]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/circ/docs/Language-CIRC.html#v:Transform",
      "description": {
        "fct-module": "Language.CIRC",
        "fct-package": "circ",
        "fct-signature": "Transform ModuleName [Import] [Import] [(CtorName, ModuleName -\u003e Code)] [TypeRefinement]",
        "fct-source": "src/Language-CIRC.html#Transform",
        "fct-type": "function",
        "title": "Transform"
      },
      "index": {
        "description": "",
        "hierarchy": "Language CIRC",
        "module": "Language.CIRC",
        "name": "Transform",
        "normalized": "Transform ModuleName[Import][Import][(CtorName,ModuleName-\u003eCode)][TypeRefinement]",
        "package": "circ",
        "partial": "Transform",
        "signature": "Transform ModuleName[Import][Import][(CtorName,ModuleName-\u003eCode)][TypeRefinement]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/circ/docs/Language-CIRC.html#v:TypeDef",
      "description": {
        "fct-module": "Language.CIRC",
        "fct-package": "circ",
        "fct-signature": "TypeDef TypeName [TypeParam] [CtorDef]",
        "fct-source": "src/Language-CIRC.html#TypeDef",
        "fct-type": "function",
        "title": "TypeDef"
      },
      "index": {
        "description": "",
        "hierarchy": "Language CIRC",
        "module": "Language.CIRC",
        "name": "TypeDef",
        "normalized": "TypeDef TypeName[TypeParam][CtorDef]",
        "package": "circ",
        "partial": "Type Def",
        "signature": "TypeDef TypeName[TypeParam][CtorDef]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/circ/docs/Language-CIRC.html#v:circ",
      "description": {
        "fct-descr": "\u003cp\u003eCompiles a CIRC spec.\n\u003c/p\u003e",
        "fct-module": "Language.CIRC",
        "fct-package": "circ",
        "fct-signature": "Spec -\u003e IO ()",
        "fct-source": "src/Language-CIRC.html#circ",
        "fct-type": "function",
        "title": "circ"
      },
      "index": {
        "description": "Compiles CIRC spec",
        "hierarchy": "Language CIRC",
        "module": "Language.CIRC",
        "name": "circ",
        "normalized": "Spec-\u003eIO()",
        "package": "circ",
        "partial": "",
        "signature": "Spec-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/circ/docs/Language-CIRC.html#v:indent",
      "description": {
        "fct-descr": "\u003cp\u003eIndents code with 2 spaces.\n\u003c/p\u003e",
        "fct-module": "Language.CIRC",
        "fct-package": "circ",
        "fct-signature": "String -\u003e String",
        "fct-source": "src/Language-CIRC.html#indent",
        "fct-type": "function",
        "title": "indent"
      },
      "index": {
        "description": "Indents code with spaces",
        "hierarchy": "Language CIRC",
        "module": "Language.CIRC",
        "name": "indent",
        "normalized": "String-\u003eString",
        "package": "circ",
        "partial": "",
        "signature": "String-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/circ/docs/Language-CIRC.html#v:t",
      "description": {
        "fct-descr": "\u003cp\u003eAn unparameterized type.\n\u003c/p\u003e",
        "fct-module": "Language.CIRC",
        "fct-package": "circ",
        "fct-signature": "String -\u003e Type",
        "fct-source": "src/Language-CIRC.html#t",
        "fct-type": "function",
        "title": "t"
      },
      "index": {
        "description": "An unparameterized type",
        "hierarchy": "Language CIRC",
        "module": "Language.CIRC",
        "name": "t",
        "normalized": "String-\u003eType",
        "package": "circ",
        "partial": "",
        "signature": "String-\u003eType"
      }
    }
  }
]