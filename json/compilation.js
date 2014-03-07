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
        "word": "compilation"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCompilation\n   Monad and combinators for quickly assembling simple\n   compilers.\n\u003c/p\u003e\u003cpre\u003eControl/Compilation/Environment.hs\u003c/pre\u003e\u003cp\u003eState extension class and combinators for implementations\n   of a state that support an environment (i.e., lookup table\n   or dictionary) data structure or structures.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Compilation.Environment",
          "name": "Environment",
          "package": "compilation",
          "source": "src/Control-Compilation-Environment.html",
          "type": "module"
        },
        "index": {
          "description": "Compilation Monad and combinators for quickly assembling simple compilers Control Compilation Environment.hs State extension class and combinators for implementations of state that support an environment i.e lookup table or dictionary data structure or structures",
          "hierarchy": "Control Compilation Environment",
          "module": "Control.Compilation.Environment",
          "name": "Environment",
          "package": "compilation",
          "partial": "Environment",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/compilation/docs/Control-Compilation-Environment.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eState extension class definition.\n\u003c/p\u003e",
          "module": "Control.Compilation.Environment",
          "name": "HasEnvironment",
          "package": "compilation",
          "source": "src/Control-Compilation-Environment.html#HasEnvironment",
          "type": "class"
        },
        "index": {
          "description": "State extension class definition",
          "hierarchy": "Control Compilation Environment",
          "module": "Control.Compilation.Environment",
          "name": "HasEnvironment",
          "package": "compilation",
          "partial": "Has Environment",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/compilation/docs/Control-Compilation-Environment.html#t:HasEnvironment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType synonyms and class memberships.\n\u003c/p\u003e",
          "module": "Control.Compilation.Environment",
          "name": "StateExtensionEnv",
          "package": "compilation",
          "source": "src/Control-Compilation-Environment.html#StateExtensionEnv",
          "type": "type"
        },
        "index": {
          "description": "Type synonyms and class memberships",
          "hierarchy": "Control Compilation Environment",
          "module": "Control.Compilation.Environment",
          "name": "StateExtensionEnv",
          "package": "compilation",
          "partial": "State Extension Env",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/compilation/docs/Control-Compilation-Environment.html#t:StateExtensionEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Compilation.Environment",
          "name": "addEnv",
          "package": "compilation",
          "signature": "String -\u003e b -\u003e Compilation a ()",
          "source": "src/Control-Compilation-Environment.html#addEnv",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Compilation Environment",
          "module": "Control.Compilation.Environment",
          "name": "addEnv",
          "normalized": "String-\u003ea-\u003eCompilation b()",
          "package": "compilation",
          "partial": "Env",
          "signature": "String-\u003eb-\u003eCompilation a()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/compilation/docs/Control-Compilation-Environment.html#v:addEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Compilation.Environment",
          "name": "dropEnv",
          "package": "compilation",
          "signature": "Int -\u003e Compilation a ()",
          "source": "src/Control-Compilation-Environment.html#dropEnv",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Compilation Environment",
          "module": "Control.Compilation.Environment",
          "name": "dropEnv",
          "normalized": "Int-\u003eCompilation a()",
          "package": "compilation",
          "partial": "Env",
          "signature": "Int-\u003eCompilation a()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/compilation/docs/Control-Compilation-Environment.html#v:dropEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Compilation.Environment",
          "name": "getEnv",
          "package": "compilation",
          "signature": "Compilation a (StateExtensionEnv b)",
          "source": "src/Control-Compilation-Environment.html#getEnv",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Compilation Environment",
          "module": "Control.Compilation.Environment",
          "name": "getEnv",
          "package": "compilation",
          "partial": "Env",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/compilation/docs/Control-Compilation-Environment.html#v:getEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Compilation.Environment",
          "name": "inject",
          "package": "compilation",
          "signature": "StateExtensionEnv b -\u003e a -\u003e a",
          "source": "src/Control-Compilation-Environment.html#inject",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Compilation Environment",
          "module": "Control.Compilation.Environment",
          "name": "inject",
          "normalized": "StateExtensionEnv a-\u003eb-\u003eb",
          "package": "compilation",
          "signature": "StateExtensionEnv b-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/compilation/docs/Control-Compilation-Environment.html#v:inject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Compilation.Environment",
          "name": "lookupEnv",
          "package": "compilation",
          "signature": "String -\u003e Compilation a (Maybe b)",
          "source": "src/Control-Compilation-Environment.html#lookupEnv",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Compilation Environment",
          "module": "Control.Compilation.Environment",
          "name": "lookupEnv",
          "normalized": "String-\u003eCompilation a(Maybe b)",
          "package": "compilation",
          "partial": "Env",
          "signature": "String-\u003eCompilation a(Maybe b)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/compilation/docs/Control-Compilation-Environment.html#v:lookupEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Compilation.Environment",
          "name": "popEnv",
          "package": "compilation",
          "signature": "Compilation a ()",
          "source": "src/Control-Compilation-Environment.html#popEnv",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Compilation Environment",
          "module": "Control.Compilation.Environment",
          "name": "popEnv",
          "normalized": "Compilation a()",
          "package": "compilation",
          "partial": "Env",
          "signature": "Compilation a()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/compilation/docs/Control-Compilation-Environment.html#v:popEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Compilation.Environment",
          "name": "project",
          "package": "compilation",
          "signature": "a -\u003e StateExtensionEnv b",
          "source": "src/Control-Compilation-Environment.html#project",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Compilation Environment",
          "module": "Control.Compilation.Environment",
          "name": "project",
          "normalized": "a-\u003eStateExtensionEnv b",
          "package": "compilation",
          "signature": "a-\u003eStateExtensionEnv b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/compilation/docs/Control-Compilation-Environment.html#v:project"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Compilation.Environment",
          "name": "setEnv",
          "package": "compilation",
          "signature": "StateExtensionEnv b -\u003e Compilation a ()",
          "source": "src/Control-Compilation-Environment.html#setEnv",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Compilation Environment",
          "module": "Control.Compilation.Environment",
          "name": "setEnv",
          "normalized": "StateExtensionEnv a-\u003eCompilation b()",
          "package": "compilation",
          "partial": "Env",
          "signature": "StateExtensionEnv b-\u003eCompilation a()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/compilation/docs/Control-Compilation-Environment.html#v:setEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCompilation\n   Monad and combinators for quickly assembling simple\n   compilers.\n\u003c/p\u003e\u003cpre\u003eControl/Compilation/Fresh.hs\u003c/pre\u003e\u003cp\u003eState extension class and combinators for implementations\n   of a state that support generation of fresh (i.e., unique)\n   values (integers and strings).\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Compilation.Fresh",
          "name": "Fresh",
          "package": "compilation",
          "source": "src/Control-Compilation-Fresh.html",
          "type": "module"
        },
        "index": {
          "description": "Compilation Monad and combinators for quickly assembling simple compilers Control Compilation Fresh.hs State extension class and combinators for implementations of state that support generation of fresh i.e unique values integers and strings",
          "hierarchy": "Control Compilation Fresh",
          "module": "Control.Compilation.Fresh",
          "name": "Fresh",
          "package": "compilation",
          "partial": "Fresh",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/compilation/docs/Control-Compilation-Fresh.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType synonyms and class memberships.\n\u003c/p\u003e",
          "module": "Control.Compilation.Fresh",
          "name": "FreshIndex",
          "package": "compilation",
          "source": "src/Control-Compilation-Fresh.html#FreshIndex",
          "type": "type"
        },
        "index": {
          "description": "Type synonyms and class memberships",
          "hierarchy": "Control Compilation Fresh",
          "module": "Control.Compilation.Fresh",
          "name": "FreshIndex",
          "package": "compilation",
          "partial": "Fresh Index",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/compilation/docs/Control-Compilation-Fresh.html#t:FreshIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eState extension class definition, including combinators\n   and convenient synonyms.\n\u003c/p\u003e",
          "module": "Control.Compilation.Fresh",
          "name": "HasFresh",
          "package": "compilation",
          "source": "src/Control-Compilation-Fresh.html#HasFresh",
          "type": "class"
        },
        "index": {
          "description": "State extension class definition including combinators and convenient synonyms",
          "hierarchy": "Control Compilation Fresh",
          "module": "Control.Compilation.Fresh",
          "name": "HasFresh",
          "package": "compilation",
          "partial": "Has Fresh",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/compilation/docs/Control-Compilation-Fresh.html#t:HasFresh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Compilation.Fresh",
          "name": "StateExtensionFresh",
          "package": "compilation",
          "source": "src/Control-Compilation-Fresh.html#StateExtensionFresh",
          "type": "type"
        },
        "index": {
          "hierarchy": "Control Compilation Fresh",
          "module": "Control.Compilation.Fresh",
          "name": "StateExtensionFresh",
          "package": "compilation",
          "partial": "State Extension Fresh",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/compilation/docs/Control-Compilation-Fresh.html#t:StateExtensionFresh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Compilation.Fresh",
          "name": "fresh",
          "package": "compilation",
          "signature": "Compilation a String",
          "source": "src/Control-Compilation-Fresh.html#fresh",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Compilation Fresh",
          "module": "Control.Compilation.Fresh",
          "name": "fresh",
          "package": "compilation",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/compilation/docs/Control-Compilation-Fresh.html#v:fresh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Compilation.Fresh",
          "name": "freshInteger",
          "package": "compilation",
          "signature": "Compilation a Integer",
          "source": "src/Control-Compilation-Fresh.html#freshInteger",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Compilation Fresh",
          "module": "Control.Compilation.Fresh",
          "name": "freshInteger",
          "package": "compilation",
          "partial": "Integer",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/compilation/docs/Control-Compilation-Fresh.html#v:freshInteger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Compilation.Fresh",
          "name": "freshString",
          "package": "compilation",
          "signature": "Compilation a String",
          "source": "src/Control-Compilation-Fresh.html#freshString",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Compilation Fresh",
          "module": "Control.Compilation.Fresh",
          "name": "freshString",
          "package": "compilation",
          "partial": "String",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/compilation/docs/Control-Compilation-Fresh.html#v:freshString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Compilation.Fresh",
          "name": "freshStringWithPrefix",
          "package": "compilation",
          "signature": "String -\u003e Compilation a String",
          "source": "src/Control-Compilation-Fresh.html#freshStringWithPrefix",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Compilation Fresh",
          "module": "Control.Compilation.Fresh",
          "name": "freshStringWithPrefix",
          "normalized": "String-\u003eCompilation a String",
          "package": "compilation",
          "partial": "String With Prefix",
          "signature": "String-\u003eCompilation a String",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/compilation/docs/Control-Compilation-Fresh.html#v:freshStringWithPrefix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Compilation.Fresh",
          "name": "freshWithPrefix",
          "package": "compilation",
          "signature": "String -\u003e Compilation a String",
          "source": "src/Control-Compilation-Fresh.html#freshWithPrefix",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Compilation Fresh",
          "module": "Control.Compilation.Fresh",
          "name": "freshWithPrefix",
          "normalized": "String-\u003eCompilation a String",
          "package": "compilation",
          "partial": "With Prefix",
          "signature": "String-\u003eCompilation a String",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/compilation/docs/Control-Compilation-Fresh.html#v:freshWithPrefix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Compilation.Fresh",
          "name": "fresh_",
          "package": "compilation",
          "signature": "String -\u003e Compilation a String",
          "source": "src/Control-Compilation-Fresh.html#fresh_",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Compilation Fresh",
          "module": "Control.Compilation.Fresh",
          "name": "fresh_",
          "normalized": "String-\u003eCompilation a String",
          "package": "compilation",
          "signature": "String-\u003eCompilation a String",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/compilation/docs/Control-Compilation-Fresh.html#v:fresh_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Compilation.Fresh",
          "name": "freshes",
          "package": "compilation",
          "signature": "Integer -\u003e Compilation a [String]",
          "source": "src/Control-Compilation-Fresh.html#freshes",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Compilation Fresh",
          "module": "Control.Compilation.Fresh",
          "name": "freshes",
          "normalized": "Integer-\u003eCompilation a[String]",
          "package": "compilation",
          "signature": "Integer-\u003eCompilation a[String]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/compilation/docs/Control-Compilation-Fresh.html#v:freshes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Compilation.Fresh",
          "name": "freshes_",
          "package": "compilation",
          "signature": "String -\u003e Integer -\u003e Compilation a [String]",
          "source": "src/Control-Compilation-Fresh.html#freshes_",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Compilation Fresh",
          "module": "Control.Compilation.Fresh",
          "name": "freshes_",
          "normalized": "String-\u003eInteger-\u003eCompilation a[String]",
          "package": "compilation",
          "signature": "String-\u003eInteger-\u003eCompilation a[String]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/compilation/docs/Control-Compilation-Fresh.html#v:freshes_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Compilation.Fresh",
          "name": "inject",
          "package": "compilation",
          "signature": "StateExtensionFresh -\u003e a -\u003e a",
          "source": "src/Control-Compilation-Fresh.html#inject",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Compilation Fresh",
          "module": "Control.Compilation.Fresh",
          "name": "inject",
          "normalized": "StateExtensionFresh-\u003ea-\u003ea",
          "package": "compilation",
          "signature": "StateExtensionFresh-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/compilation/docs/Control-Compilation-Fresh.html#v:inject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Compilation.Fresh",
          "name": "project",
          "package": "compilation",
          "signature": "a -\u003e StateExtensionFresh",
          "source": "src/Control-Compilation-Fresh.html#project",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Compilation Fresh",
          "module": "Control.Compilation.Fresh",
          "name": "project",
          "normalized": "a-\u003eStateExtensionFresh",
          "package": "compilation",
          "signature": "a-\u003eStateExtensionFresh",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/compilation/docs/Control-Compilation-Fresh.html#v:project"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCompilation\n   Monad and combinators for quickly assembling simple\n   compilers.\n\u003c/p\u003e\u003cpre\u003eControl/Compilation/Module.hs\u003c/pre\u003e\u003cp\u003eState extension class and combinators for implementations\n   of a state that support module name specification.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Compilation.Module",
          "name": "Module",
          "package": "compilation",
          "source": "src/Control-Compilation-Module.html",
          "type": "module"
        },
        "index": {
          "description": "Compilation Monad and combinators for quickly assembling simple compilers Control Compilation Module.hs State extension class and combinators for implementations of state that support module name specification",
          "hierarchy": "Control Compilation Module",
          "module": "Control.Compilation.Module",
          "name": "Module",
          "package": "compilation",
          "partial": "Module",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/compilation/docs/Control-Compilation-Module.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eState extension class definition, including combinators.\n\u003c/p\u003e",
          "module": "Control.Compilation.Module",
          "name": "HasModule",
          "package": "compilation",
          "source": "src/Control-Compilation-Module.html#HasModule",
          "type": "class"
        },
        "index": {
          "description": "State extension class definition including combinators",
          "hierarchy": "Control Compilation Module",
          "module": "Control.Compilation.Module",
          "name": "HasModule",
          "package": "compilation",
          "partial": "Has Module",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/compilation/docs/Control-Compilation-Module.html#t:HasModule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType synonyms and class memberships.\n\u003c/p\u003e",
          "module": "Control.Compilation.Module",
          "name": "ModuleName",
          "package": "compilation",
          "source": "src/Control-Compilation-Module.html#ModuleName",
          "type": "type"
        },
        "index": {
          "description": "Type synonyms and class memberships",
          "hierarchy": "Control Compilation Module",
          "module": "Control.Compilation.Module",
          "name": "ModuleName",
          "package": "compilation",
          "partial": "Module Name",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/compilation/docs/Control-Compilation-Module.html#t:ModuleName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Compilation.Module",
          "name": "StateExtensionModule",
          "package": "compilation",
          "source": "src/Control-Compilation-Module.html#StateExtensionModule",
          "type": "type"
        },
        "index": {
          "hierarchy": "Control Compilation Module",
          "module": "Control.Compilation.Module",
          "name": "StateExtensionModule",
          "package": "compilation",
          "partial": "State Extension Module",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/compilation/docs/Control-Compilation-Module.html#t:StateExtensionModule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Compilation.Module",
          "name": "getModule",
          "package": "compilation",
          "signature": "Compilation a String",
          "source": "src/Control-Compilation-Module.html#getModule",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Compilation Module",
          "module": "Control.Compilation.Module",
          "name": "getModule",
          "package": "compilation",
          "partial": "Module",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/compilation/docs/Control-Compilation-Module.html#v:getModule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Compilation.Module",
          "name": "inject",
          "package": "compilation",
          "signature": "StateExtensionModule -\u003e a -\u003e a",
          "source": "src/Control-Compilation-Module.html#inject",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Compilation Module",
          "module": "Control.Compilation.Module",
          "name": "inject",
          "normalized": "StateExtensionModule-\u003ea-\u003ea",
          "package": "compilation",
          "signature": "StateExtensionModule-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/compilation/docs/Control-Compilation-Module.html#v:inject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Compilation.Module",
          "name": "project",
          "package": "compilation",
          "signature": "a -\u003e StateExtensionModule",
          "source": "src/Control-Compilation-Module.html#project",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Compilation Module",
          "module": "Control.Compilation.Module",
          "name": "project",
          "normalized": "a-\u003eStateExtensionModule",
          "package": "compilation",
          "signature": "a-\u003eStateExtensionModule",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/compilation/docs/Control-Compilation-Module.html#v:project"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Compilation.Module",
          "name": "setModule",
          "package": "compilation",
          "signature": "String -\u003e Compilation a ()",
          "source": "src/Control-Compilation-Module.html#setModule",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Compilation Module",
          "module": "Control.Compilation.Module",
          "name": "setModule",
          "normalized": "String-\u003eCompilation a()",
          "package": "compilation",
          "partial": "Module",
          "signature": "String-\u003eCompilation a()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/compilation/docs/Control-Compilation-Module.html#v:setModule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCompilation\n   Monad and combinators for quickly assembling simple\n   compilers.\n\u003c/p\u003e\u003cpre\u003eControl/Compilation/Sequences.hs\u003c/pre\u003e\u003cp\u003eA generic compilation monad for quickly assembling simple\n   compilers for target languages that are primarily\n   sequences of instructions (possibly with nesting, e.g., \n   loop constructs or procedures).\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Compilation.Sequences",
          "name": "Sequences",
          "package": "compilation",
          "source": "src/Control-Compilation-Sequences.html",
          "type": "module"
        },
        "index": {
          "description": "Compilation Monad and combinators for quickly assembling simple compilers Control Compilation Sequences.hs generic compilation monad for quickly assembling simple compilers for target languages that are primarily sequences of instructions possibly with nesting e.g loop constructs or procedures",
          "hierarchy": "Control Compilation Sequences",
          "module": "Control.Compilation.Sequences",
          "name": "Sequences",
          "package": "compilation",
          "partial": "Sequences",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/compilation/docs/Control-Compilation-Sequences.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eState extension class definition, and combinators for\n   compiling into a sequence (possibly with nested blocks)\n   of instructions.\n\u003c/p\u003e",
          "module": "Control.Compilation.Sequences",
          "name": "HasSequences",
          "package": "compilation",
          "source": "src/Control-Compilation-Sequences.html#HasSequences",
          "type": "class"
        },
        "index": {
          "description": "State extension class definition and combinators for compiling into sequence possibly with nested blocks of instructions",
          "hierarchy": "Control Compilation Sequences",
          "module": "Control.Compilation.Sequences",
          "name": "HasSequences",
          "package": "compilation",
          "partial": "Has Sequences",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/compilation/docs/Control-Compilation-Sequences.html#t:HasSequences"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType synonyms and class memberships.\n\u003c/p\u003e",
          "module": "Control.Compilation.Sequences",
          "name": "StateExtensionSequences",
          "package": "compilation",
          "source": "src/Control-Compilation-Sequences.html#StateExtensionSequences",
          "type": "type"
        },
        "index": {
          "description": "Type synonyms and class memberships",
          "hierarchy": "Control Compilation Sequences",
          "module": "Control.Compilation.Sequences",
          "name": "StateExtensionSequences",
          "package": "compilation",
          "partial": "State Extension Sequences",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/compilation/docs/Control-Compilation-Sequences.html#t:StateExtensionSequences"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Compilation.Sequences",
          "name": "depth",
          "package": "compilation",
          "signature": "Compilation a Integer",
          "source": "src/Control-Compilation-Sequences.html#depth",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Compilation Sequences",
          "module": "Control.Compilation.Sequences",
          "name": "depth",
          "package": "compilation",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/compilation/docs/Control-Compilation-Sequences.html#v:depth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Compilation.Sequences",
          "name": "inject",
          "package": "compilation",
          "signature": "StateExtensionSequences b -\u003e a -\u003e a",
          "source": "src/Control-Compilation-Sequences.html#inject",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Compilation Sequences",
          "module": "Control.Compilation.Sequences",
          "name": "inject",
          "normalized": "StateExtensionSequences a-\u003eb-\u003eb",
          "package": "compilation",
          "signature": "StateExtensionSequences b-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/compilation/docs/Control-Compilation-Sequences.html#v:inject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Compilation.Sequences",
          "name": "nest",
          "package": "compilation",
          "signature": "[b] -\u003e Compilation a ()",
          "source": "src/Control-Compilation-Sequences.html#nest",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Compilation Sequences",
          "module": "Control.Compilation.Sequences",
          "name": "nest",
          "normalized": "[a]-\u003eCompilation b()",
          "package": "compilation",
          "signature": "[b]-\u003eCompilation a()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/compilation/docs/Control-Compilation-Sequences.html#v:nest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Compilation.Sequences",
          "name": "project",
          "package": "compilation",
          "signature": "a -\u003e StateExtensionSequences b",
          "source": "src/Control-Compilation-Sequences.html#project",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Compilation Sequences",
          "module": "Control.Compilation.Sequences",
          "name": "project",
          "normalized": "a-\u003eStateExtensionSequences b",
          "package": "compilation",
          "signature": "a-\u003eStateExtensionSequences b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/compilation/docs/Control-Compilation-Sequences.html#v:project"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Compilation.Sequences",
          "name": "unnest",
          "package": "compilation",
          "signature": "Compilation a [b]",
          "source": "src/Control-Compilation-Sequences.html#unnest",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Compilation Sequences",
          "module": "Control.Compilation.Sequences",
          "name": "unnest",
          "normalized": "Compilation a[b]",
          "package": "compilation",
          "signature": "Compilation a[b]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/compilation/docs/Control-Compilation-Sequences.html#v:unnest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCompilation\n   Monad and combinators for quickly assembling simple\n   compilers.\n\u003c/p\u003e\u003cpre\u003eControl/Compilation/String.hs\u003c/pre\u003e\u003cp\u003eA generic compilation monad and combinators for quickly\n   assembling simple compilers that emit an ASCII string\n   representation of the target language (well-suited for\n   direct syntax translators).\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Compilation.String",
          "name": "String",
          "package": "compilation",
          "source": "src/Control-Compilation-String.html",
          "type": "module"
        },
        "index": {
          "description": "Compilation Monad and combinators for quickly assembling simple compilers Control Compilation String.hs generic compilation monad and combinators for quickly assembling simple compilers that emit an ASCII string representation of the target language well-suited for direct syntax translators",
          "hierarchy": "Control Compilation String",
          "module": "Control.Compilation.String",
          "name": "String",
          "package": "compilation",
          "partial": "String",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/compilation/docs/Control-Compilation-String.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eState extension class definition, including combinators\n   and convenient synonyms for compiling directly into a raw\n   ASCII string.\n\u003c/p\u003e",
          "module": "Control.Compilation.String",
          "name": "HasString",
          "package": "compilation",
          "source": "src/Control-Compilation-String.html#HasString",
          "type": "class"
        },
        "index": {
          "description": "State extension class definition including combinators and convenient synonyms for compiling directly into raw ASCII string",
          "hierarchy": "Control Compilation String",
          "module": "Control.Compilation.String",
          "name": "HasString",
          "package": "compilation",
          "partial": "Has String",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/compilation/docs/Control-Compilation-String.html#t:HasString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType synonyms and class memberships.\n\u003c/p\u003e",
          "module": "Control.Compilation.String",
          "name": "Indentation",
          "package": "compilation",
          "source": "src/Control-Compilation-String.html#Indentation",
          "type": "type"
        },
        "index": {
          "description": "Type synonyms and class memberships",
          "hierarchy": "Control Compilation String",
          "module": "Control.Compilation.String",
          "name": "Indentation",
          "package": "compilation",
          "partial": "Indentation",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/compilation/docs/Control-Compilation-String.html#t:Indentation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Compilation.String",
          "name": "StateExtensionString",
          "package": "compilation",
          "source": "src/Control-Compilation-String.html#StateExtensionString",
          "type": "type"
        },
        "index": {
          "hierarchy": "Control Compilation String",
          "module": "Control.Compilation.String",
          "name": "StateExtensionString",
          "package": "compilation",
          "partial": "State Extension String",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/compilation/docs/Control-Compilation-String.html#t:StateExtensionString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Compilation.String",
          "name": "compiled",
          "package": "compilation",
          "signature": "Compilation a b -\u003e String",
          "source": "src/Control-Compilation-String.html#compiled",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Compilation String",
          "module": "Control.Compilation.String",
          "name": "compiled",
          "normalized": "Compilation a b-\u003eString",
          "package": "compilation",
          "signature": "Compilation a b-\u003eString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/compilation/docs/Control-Compilation-String.html#v:compiled"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Compilation.String",
          "name": "indent",
          "package": "compilation",
          "signature": "Compilation a ()",
          "source": "src/Control-Compilation-String.html#indent",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Compilation String",
          "module": "Control.Compilation.String",
          "name": "indent",
          "normalized": "Compilation a()",
          "package": "compilation",
          "signature": "Compilation a()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/compilation/docs/Control-Compilation-String.html#v:indent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Compilation.String",
          "name": "inject",
          "package": "compilation",
          "signature": "StateExtensionString -\u003e a -\u003e a",
          "source": "src/Control-Compilation-String.html#inject",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Compilation String",
          "module": "Control.Compilation.String",
          "name": "inject",
          "normalized": "StateExtensionString-\u003ea-\u003ea",
          "package": "compilation",
          "signature": "StateExtensionString-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/compilation/docs/Control-Compilation-String.html#v:inject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Compilation.String",
          "name": "newline",
          "package": "compilation",
          "signature": "Compilation a ()",
          "source": "src/Control-Compilation-String.html#newline",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Compilation String",
          "module": "Control.Compilation.String",
          "name": "newline",
          "normalized": "Compilation a()",
          "package": "compilation",
          "signature": "Compilation a()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/compilation/docs/Control-Compilation-String.html#v:newline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Compilation.String",
          "name": "newlines",
          "package": "compilation",
          "signature": "Int -\u003e Compilation a ()",
          "source": "src/Control-Compilation-String.html#newlines",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Compilation String",
          "module": "Control.Compilation.String",
          "name": "newlines",
          "normalized": "Int-\u003eCompilation a()",
          "package": "compilation",
          "signature": "Int-\u003eCompilation a()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/compilation/docs/Control-Compilation-String.html#v:newlines"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Compilation.String",
          "name": "project",
          "package": "compilation",
          "signature": "a -\u003e StateExtensionString",
          "source": "src/Control-Compilation-String.html#project",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Compilation String",
          "module": "Control.Compilation.String",
          "name": "project",
          "normalized": "a-\u003eStateExtensionString",
          "package": "compilation",
          "signature": "a-\u003eStateExtensionString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/compilation/docs/Control-Compilation-String.html#v:project"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Compilation.String",
          "name": "raw",
          "package": "compilation",
          "signature": "String -\u003e Compilation a ()",
          "source": "src/Control-Compilation-String.html#raw",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Compilation String",
          "module": "Control.Compilation.String",
          "name": "raw",
          "normalized": "String-\u003eCompilation a()",
          "package": "compilation",
          "signature": "String-\u003eCompilation a()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/compilation/docs/Control-Compilation-String.html#v:raw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Compilation.String",
          "name": "space",
          "package": "compilation",
          "signature": "Compilation a ()",
          "source": "src/Control-Compilation-String.html#space",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Compilation String",
          "module": "Control.Compilation.String",
          "name": "space",
          "normalized": "Compilation a()",
          "package": "compilation",
          "signature": "Compilation a()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/compilation/docs/Control-Compilation-String.html#v:space"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Compilation.String",
          "name": "spaces",
          "package": "compilation",
          "signature": "Int -\u003e Compilation a ()",
          "source": "src/Control-Compilation-String.html#spaces",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Compilation String",
          "module": "Control.Compilation.String",
          "name": "spaces",
          "normalized": "Int-\u003eCompilation a()",
          "package": "compilation",
          "signature": "Int-\u003eCompilation a()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/compilation/docs/Control-Compilation-String.html#v:spaces"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Compilation.String",
          "name": "string",
          "package": "compilation",
          "signature": "String -\u003e Compilation a ()",
          "source": "src/Control-Compilation-String.html#string",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Compilation String",
          "module": "Control.Compilation.String",
          "name": "string",
          "normalized": "String-\u003eCompilation a()",
          "package": "compilation",
          "signature": "String-\u003eCompilation a()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/compilation/docs/Control-Compilation-String.html#v:string"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Compilation.String",
          "name": "unindent",
          "package": "compilation",
          "signature": "Compilation a ()",
          "source": "src/Control-Compilation-String.html#unindent",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Compilation String",
          "module": "Control.Compilation.String",
          "name": "unindent",
          "normalized": "Compilation a()",
          "package": "compilation",
          "signature": "Compilation a()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/compilation/docs/Control-Compilation-String.html#v:unindent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCompilation\n   Monad and combinators for quickly assembling simple\n   compilers.\n\u003c/p\u003e\u003cpre\u003eControl/Compilation/Trees.hs\u003c/pre\u003e\u003cp\u003eA generic compilation monad for quickly assembling simple\n   compilers for target languages that are primarily\n   expression trees.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Compilation.Trees",
          "name": "Trees",
          "package": "compilation",
          "source": "src/Control-Compilation-Trees.html",
          "type": "module"
        },
        "index": {
          "description": "Compilation Monad and combinators for quickly assembling simple compilers Control Compilation Trees.hs generic compilation monad for quickly assembling simple compilers for target languages that are primarily expression trees",
          "hierarchy": "Control Compilation Trees",
          "module": "Control.Compilation.Trees",
          "name": "Trees",
          "package": "compilation",
          "partial": "Trees",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/compilation/docs/Control-Compilation-Trees.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCompilation\n   Monad and combinators for quickly assembling simple\n   compilers.\n\u003c/p\u003e\u003cpre\u003eControl/Compilation.hs\u003c/pre\u003e\u003cp\u003eA generic compilation monad for quickly assembling simple\n   compilers.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Compilation",
          "name": "Compilation",
          "package": "compilation",
          "source": "src/Control-Compilation.html",
          "type": "module"
        },
        "index": {
          "description": "Compilation Monad and combinators for quickly assembling simple compilers Control Compilation.hs generic compilation monad for quickly assembling simple compilers",
          "hierarchy": "Control Compilation",
          "module": "Control.Compilation",
          "name": "Compilation",
          "package": "compilation",
          "partial": "Compilation",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/compilation/docs/Control-Compilation.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Compilation",
          "name": "Compilation",
          "package": "compilation",
          "source": "src/Control-Compilation.html#Compilation",
          "type": "data"
        },
        "index": {
          "hierarchy": "Control Compilation",
          "module": "Control.Compilation",
          "name": "Compilation",
          "package": "compilation",
          "partial": "Compilation",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/compilation/docs/Control-Compilation.html#t:Compilation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Compilation",
          "name": "Compile",
          "package": "compilation",
          "source": "src/Control-Compilation.html#Compile",
          "type": "type"
        },
        "index": {
          "hierarchy": "Control Compilation",
          "module": "Control.Compilation",
          "name": "Compile",
          "package": "compilation",
          "partial": "Compile",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/compilation/docs/Control-Compilation.html#t:Compile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eState data structure wrapper.\n\u003c/p\u003e",
          "module": "Control.Compilation",
          "name": "State",
          "package": "compilation",
          "source": "src/Control-Compilation.html#State",
          "type": "data"
        },
        "index": {
          "description": "State data structure wrapper",
          "hierarchy": "Control Compilation",
          "module": "Control.Compilation",
          "name": "State",
          "package": "compilation",
          "partial": "State",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/compilation/docs/Control-Compilation.html#t:State"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData types, class declarations, and class memberships.\n\u003c/p\u003e",
          "module": "Control.Compilation",
          "name": "StateExtension",
          "package": "compilation",
          "source": "src/Control-Compilation.html#StateExtension",
          "type": "class"
        },
        "index": {
          "description": "Data types class declarations and class memberships",
          "hierarchy": "Control Compilation",
          "module": "Control.Compilation",
          "name": "StateExtension",
          "package": "compilation",
          "partial": "State Extension",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/compilation/docs/Control-Compilation.html#t:StateExtension"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Compilation",
          "name": "Compilation",
          "package": "compilation",
          "signature": "Compilation (State a -\u003e (State a, b))",
          "source": "src/Control-Compilation.html#Compilation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Compilation",
          "module": "Control.Compilation",
          "name": "Compilation",
          "normalized": "Compilation(State a-\u003e(State a,b))",
          "package": "compilation",
          "partial": "Compilation",
          "signature": "Compilation(State a-\u003e(State a,b))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compilation/docs/Control-Compilation.html#v:Compilation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Compilation",
          "name": "Error",
          "package": "compilation",
          "signature": "Error String",
          "source": "src/Control-Compilation.html#Compilation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Compilation",
          "module": "Control.Compilation",
          "name": "Error",
          "package": "compilation",
          "partial": "Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compilation/docs/Control-Compilation.html#v:Error"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Compilation",
          "name": "State",
          "package": "compilation",
          "signature": "State a",
          "source": "src/Control-Compilation.html#State",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Compilation",
          "module": "Control.Compilation",
          "name": "State",
          "package": "compilation",
          "partial": "State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compilation/docs/Control-Compilation.html#v:State"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Compilation",
          "name": "error",
          "package": "compilation",
          "signature": "String -\u003e Compilation a ()",
          "source": "src/Control-Compilation.html#error",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Compilation",
          "module": "Control.Compilation",
          "name": "error",
          "normalized": "String-\u003eCompilation a()",
          "package": "compilation",
          "signature": "String-\u003eCompilation a()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compilation/docs/Control-Compilation.html#v:error"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneric combinators and functions.\n\u003c/p\u003e",
          "module": "Control.Compilation",
          "name": "extract",
          "package": "compilation",
          "signature": "Compilation a b -\u003e a",
          "source": "src/Control-Compilation.html#extract",
          "type": "function"
        },
        "index": {
          "description": "Generic combinators and functions",
          "hierarchy": "Control Compilation",
          "module": "Control.Compilation",
          "name": "extract",
          "normalized": "Compilation a b-\u003ea",
          "package": "compilation",
          "signature": "Compilation a b-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compilation/docs/Control-Compilation.html#v:extract"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Compilation",
          "name": "extractFromState",
          "package": "compilation",
          "signature": "a -\u003e Compilation a b -\u003e a",
          "source": "src/Control-Compilation.html#extractFromState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Compilation",
          "module": "Control.Compilation",
          "name": "extractFromState",
          "normalized": "a-\u003eCompilation a b-\u003ea",
          "package": "compilation",
          "partial": "From State",
          "signature": "a-\u003eCompilation a b-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compilation/docs/Control-Compilation.html#v:extractFromState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Compilation",
          "name": "get",
          "package": "compilation",
          "signature": "Compilation a a",
          "source": "src/Control-Compilation.html#get",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Compilation",
          "module": "Control.Compilation",
          "name": "get",
          "package": "compilation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compilation/docs/Control-Compilation.html#v:get"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Compilation",
          "name": "initial",
          "package": "compilation",
          "signature": "a",
          "source": "src/Control-Compilation.html#initial",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Compilation",
          "module": "Control.Compilation",
          "name": "initial",
          "package": "compilation",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/compilation/docs/Control-Compilation.html#v:initial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Compilation",
          "name": "nothing",
          "package": "compilation",
          "signature": "Compilation a ()",
          "source": "src/Control-Compilation.html#nothing",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Compilation",
          "module": "Control.Compilation",
          "name": "nothing",
          "normalized": "Compilation a()",
          "package": "compilation",
          "signature": "Compilation a()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compilation/docs/Control-Compilation.html#v:nothing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Compilation",
          "name": "set",
          "package": "compilation",
          "signature": "a -\u003e Compilation a ()",
          "source": "src/Control-Compilation.html#set",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Compilation",
          "module": "Control.Compilation",
          "name": "set",
          "normalized": "a-\u003eCompilation a()",
          "package": "compilation",
          "signature": "a-\u003eCompilation a()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compilation/docs/Control-Compilation.html#v:set"
      }
    }
  ]
]