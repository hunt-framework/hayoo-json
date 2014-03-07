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
        "word": "ddc-build"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Build.Builder",
          "name": "Builder",
          "package": "ddc-build",
          "source": "src/DDC-Build-Builder.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "DDC Build Builder",
          "module": "DDC.Build.Builder",
          "name": "Builder",
          "package": "ddc-build",
          "partial": "Builder",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Builder.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eActions to use to invoke external compilation tools.\n\u003c/p\u003e",
          "module": "DDC.Build.Builder",
          "name": "Builder",
          "package": "ddc-build",
          "source": "src/DDC-Build-Builder.html#Builder",
          "type": "data"
        },
        "index": {
          "description": "Actions to use to invoke external compilation tools",
          "hierarchy": "DDC Build Builder",
          "module": "DDC.Build.Builder",
          "name": "Builder",
          "package": "ddc-build",
          "partial": "Builder",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Builder.html#t:Builder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConfiguration information for a builder that is not platform specific.\n\u003c/p\u003e",
          "module": "DDC.Build.Builder",
          "name": "BuilderConfig",
          "package": "ddc-build",
          "source": "src/DDC-Build-Builder.html#BuilderConfig",
          "type": "data"
        },
        "index": {
          "description": "Configuration information for builder that is not platform specific",
          "hierarchy": "DDC Build Builder",
          "module": "DDC.Build.Builder",
          "name": "BuilderConfig",
          "package": "ddc-build",
          "partial": "Builder Config",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Builder.html#t:BuilderConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Build.Builder",
          "name": "Builder",
          "package": "ddc-build",
          "signature": "Builder",
          "source": "src/DDC-Build-Builder.html#Builder",
          "type": "function"
        },
        "index": {
          "hierarchy": "DDC Build Builder",
          "module": "DDC.Build.Builder",
          "name": "Builder",
          "package": "ddc-build",
          "partial": "Builder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Builder.html#v:Builder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Build.Builder",
          "name": "BuilderConfig",
          "package": "ddc-build",
          "signature": "BuilderConfig",
          "source": "src/DDC-Build-Builder.html#BuilderConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "DDC Build Builder",
          "module": "DDC.Build.Builder",
          "name": "BuilderConfig",
          "package": "ddc-build",
          "partial": "Builder Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Builder.html#v:BuilderConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInvoke the system assembler\n   to assemble a .s file into a .o file.\n\u003c/p\u003e",
          "module": "DDC.Build.Builder",
          "name": "buildAs",
          "package": "ddc-build",
          "signature": "FilePath -\u003e FilePath -\u003e IO ()",
          "source": "src/DDC-Build-Builder.html#Builder",
          "type": "function"
        },
        "index": {
          "description": "Invoke the system assembler to assemble file into file",
          "hierarchy": "DDC Build Builder",
          "module": "DDC.Build.Builder",
          "name": "buildAs",
          "normalized": "FilePath-\u003eFilePath-\u003eIO()",
          "package": "ddc-build",
          "partial": "As",
          "signature": "FilePath-\u003eFilePath-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Builder.html#v:buildAs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDirectory that holds the shared objects for the runtime\n   system and base library.\n\u003c/p\u003e",
          "module": "DDC.Build.Builder",
          "name": "buildBaseLibDir",
          "package": "ddc-build",
          "signature": "FilePath",
          "source": "src/DDC-Build-Builder.html#Builder",
          "type": "function"
        },
        "index": {
          "description": "Directory that holds the shared objects for the runtime system and base library",
          "hierarchy": "DDC Build Builder",
          "module": "DDC.Build.Builder",
          "name": "buildBaseLibDir",
          "package": "ddc-build",
          "partial": "Base Lib Dir",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Builder.html#v:buildBaseLibDir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDirectory that holds the source for the runtime system\n   and base library.\n\u003c/p\u003e",
          "module": "DDC.Build.Builder",
          "name": "buildBaseSrcDir",
          "package": "ddc-build",
          "signature": "FilePath",
          "source": "src/DDC-Build-Builder.html#Builder",
          "type": "function"
        },
        "index": {
          "description": "Directory that holds the source for the runtime system and base library",
          "hierarchy": "DDC Build Builder",
          "module": "DDC.Build.Builder",
          "name": "buildBaseSrcDir",
          "package": "ddc-build",
          "partial": "Base Src Dir",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Builder.html#v:buildBaseSrcDir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInvoke the C compiler\n   to compile a .c file into a .o file.\n\u003c/p\u003e",
          "module": "DDC.Build.Builder",
          "name": "buildCC",
          "package": "ddc-build",
          "signature": "FilePath -\u003e FilePath -\u003e IO ()",
          "source": "src/DDC-Build-Builder.html#Builder",
          "type": "function"
        },
        "index": {
          "description": "Invoke the compiler to compile file into file",
          "hierarchy": "DDC Build Builder",
          "module": "DDC.Build.Builder",
          "name": "buildCC",
          "normalized": "FilePath-\u003eFilePath-\u003eIO()",
          "package": "ddc-build",
          "partial": "CC",
          "signature": "FilePath-\u003eFilePath-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Builder.html#v:buildCC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe platform the build is being performed on.\n\u003c/p\u003e",
          "module": "DDC.Build.Builder",
          "name": "buildHost",
          "package": "ddc-build",
          "signature": "Platform",
          "source": "src/DDC-Build-Builder.html#Builder",
          "type": "function"
        },
        "index": {
          "description": "The platform the build is being performed on",
          "hierarchy": "DDC Build Builder",
          "module": "DDC.Build.Builder",
          "name": "buildHost",
          "package": "ddc-build",
          "partial": "Host",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Builder.html#v:buildHost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLink an executable.\n\u003c/p\u003e",
          "module": "DDC.Build.Builder",
          "name": "buildLdExe",
          "package": "ddc-build",
          "signature": "FilePath -\u003e FilePath -\u003e IO ()",
          "source": "src/DDC-Build-Builder.html#Builder",
          "type": "function"
        },
        "index": {
          "description": "Link an executable",
          "hierarchy": "DDC Build Builder",
          "module": "DDC.Build.Builder",
          "name": "buildLdExe",
          "normalized": "FilePath-\u003eFilePath-\u003eIO()",
          "package": "ddc-build",
          "partial": "Ld Exe",
          "signature": "FilePath-\u003eFilePath-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Builder.html#v:buildLdExe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLink a shared library.\n\u003c/p\u003e",
          "module": "DDC.Build.Builder",
          "name": "buildLdLibShared",
          "package": "ddc-build",
          "signature": "[FilePath] -\u003e FilePath -\u003e IO ()",
          "source": "src/DDC-Build-Builder.html#Builder",
          "type": "function"
        },
        "index": {
          "description": "Link shared library",
          "hierarchy": "DDC Build Builder",
          "module": "DDC.Build.Builder",
          "name": "buildLdLibShared",
          "normalized": "[FilePath]-\u003eFilePath-\u003eIO()",
          "package": "ddc-build",
          "partial": "Ld Lib Shared",
          "signature": "[FilePath]-\u003eFilePath-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Builder.html#v:buildLdLibShared"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLink a static library.\n\u003c/p\u003e",
          "module": "DDC.Build.Builder",
          "name": "buildLdLibStatic",
          "package": "ddc-build",
          "signature": "[FilePath] -\u003e FilePath -\u003e IO ()",
          "source": "src/DDC-Build-Builder.html#Builder",
          "type": "function"
        },
        "index": {
          "description": "Link static library",
          "hierarchy": "DDC Build Builder",
          "module": "DDC.Build.Builder",
          "name": "buildLdLibStatic",
          "normalized": "[FilePath]-\u003eFilePath-\u003eIO()",
          "package": "ddc-build",
          "partial": "Ld Lib Static",
          "signature": "[FilePath]-\u003eFilePath-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Builder.html#v:buildLdLibStatic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInvoke the LLVM compiler\n   to compile a .ll file into a .s file.\n\u003c/p\u003e",
          "module": "DDC.Build.Builder",
          "name": "buildLlc",
          "package": "ddc-build",
          "signature": "FilePath -\u003e FilePath -\u003e IO ()",
          "source": "src/DDC-Build-Builder.html#Builder",
          "type": "function"
        },
        "index": {
          "description": "Invoke the LLVM compiler to compile ll file into file",
          "hierarchy": "DDC Build Builder",
          "module": "DDC.Build.Builder",
          "name": "buildLlc",
          "normalized": "FilePath-\u003eFilePath-\u003eIO()",
          "package": "ddc-build",
          "partial": "Llc",
          "signature": "FilePath-\u003eFilePath-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Builder.html#v:buildLlc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe LLVM target specification.\n   Gives the widths of pointers and primitive numeric types.\n\u003c/p\u003e",
          "module": "DDC.Build.Builder",
          "name": "buildSpec",
          "package": "ddc-build",
          "signature": "Platform",
          "source": "src/DDC-Build-Builder.html#Builder",
          "type": "function"
        },
        "index": {
          "description": "The LLVM target specification Gives the widths of pointers and primitive numeric types",
          "hierarchy": "DDC Build Builder",
          "module": "DDC.Build.Builder",
          "name": "buildSpec",
          "package": "ddc-build",
          "partial": "Spec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Builder.html#v:buildSpec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe platform we're compiling code for.\n\u003c/p\u003e",
          "module": "DDC.Build.Builder",
          "name": "buildTarget",
          "package": "ddc-build",
          "signature": "Platform",
          "source": "src/DDC-Build-Builder.html#Builder",
          "type": "function"
        },
        "index": {
          "description": "The platform we re compiling code for",
          "hierarchy": "DDC Build Builder",
          "module": "DDC.Build.Builder",
          "name": "buildTarget",
          "package": "ddc-build",
          "partial": "Target",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Builder.html#v:buildTarget"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDirectory that holds the shared objects for the runtime\n   system and base library.\n\u003c/p\u003e",
          "module": "DDC.Build.Builder",
          "name": "builderConfigBaseLibDir",
          "package": "ddc-build",
          "signature": "FilePath",
          "source": "src/DDC-Build-Builder.html#BuilderConfig",
          "type": "function"
        },
        "index": {
          "description": "Directory that holds the shared objects for the runtime system and base library",
          "hierarchy": "DDC Build Builder",
          "module": "DDC.Build.Builder",
          "name": "builderConfigBaseLibDir",
          "package": "ddc-build",
          "partial": "Config Base Lib Dir",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Builder.html#v:builderConfigBaseLibDir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDirectory that holds the source for the runtime system\n   and base library.\n\u003c/p\u003e",
          "module": "DDC.Build.Builder",
          "name": "builderConfigBaseSrcDir",
          "package": "ddc-build",
          "signature": "FilePath",
          "source": "src/DDC-Build-Builder.html#BuilderConfig",
          "type": "function"
        },
        "index": {
          "description": "Directory that holds the source for the runtime system and base library",
          "hierarchy": "DDC Build Builder",
          "module": "DDC.Build.Builder",
          "name": "builderConfigBaseSrcDir",
          "package": "ddc-build",
          "partial": "Config Base Src Dir",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Builder.html#v:builderConfigBaseSrcDir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe name of this platform.\n\u003c/p\u003e",
          "module": "DDC.Build.Builder",
          "name": "builderName",
          "package": "ddc-build",
          "signature": "String",
          "source": "src/DDC-Build-Builder.html#Builder",
          "type": "function"
        },
        "index": {
          "description": "The name of this platform",
          "hierarchy": "DDC Build Builder",
          "module": "DDC.Build.Builder",
          "name": "builderName",
          "package": "ddc-build",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Builder.html#v:builderName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll supported builders.\n   The host and target platforms are the same.\n\u003c/p\u003e\u003cp\u003eSupported builders are: \n      \u003ccode\u003ex86_32-darwin\u003c/code\u003e, \u003ccode\u003ex86_64-darwin\u003c/code\u003e,\n      \u003ccode\u003ex86_32-linux\u003c/code\u003e,  \u003ccode\u003ex86_64-linux\u003c/code\u003e,\n      \u003ccode\u003ex86_32-cygwin\u003c/code\u003e,\n      \u003ccode\u003eppc32-linux\u003c/code\u003e\n\u003c/p\u003e",
          "module": "DDC.Build.Builder",
          "name": "builders",
          "package": "ddc-build",
          "signature": "BuilderConfig -\u003e [Builder]",
          "source": "src/DDC-Build-Builder.html#builders",
          "type": "function"
        },
        "index": {
          "description": "All supported builders The host and target platforms are the same Supported builders are x86 darwin x86 darwin x86 linux x86 linux x86 cygwin ppc32-linux",
          "hierarchy": "DDC Build Builder",
          "module": "DDC.Build.Builder",
          "name": "builders",
          "normalized": "BuilderConfig-\u003e[Builder]",
          "package": "ddc-build",
          "signature": "BuilderConfig-\u003e[Builder]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Builder.html#v:builders"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermine the default builder based on the \u003ccode\u003earch\u003c/code\u003e and \u003ccode\u003euname\u003c/code\u003e commands.\n   This assumes that the \u003ccode\u003ehost\u003c/code\u003e and \u003ccode\u003etarget\u003c/code\u003e platforms are the same.\n\u003c/p\u003e\u003cp\u003eIf we don't recognise the result of \u003ccode\u003earch\u003c/code\u003e or \u003ccode\u003euname\u003c/code\u003e, or don't have \n   a default builder config for this platform then \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "DDC.Build.Builder",
          "name": "determineDefaultBuilder",
          "package": "ddc-build",
          "signature": "BuilderConfig -\u003e IO (Maybe Builder)",
          "source": "src/DDC-Build-Builder.html#determineDefaultBuilder",
          "type": "function"
        },
        "index": {
          "description": "Determine the default builder based on the arch and uname commands This assumes that the host and target platforms are the same If we don recognise the result of arch or uname or don have default builder config for this platform then Nothing",
          "hierarchy": "DDC Build Builder",
          "module": "DDC.Build.Builder",
          "name": "determineDefaultBuilder",
          "normalized": "BuilderConfig-\u003eIO(Maybe Builder)",
          "package": "ddc-build",
          "partial": "Default Builder",
          "signature": "BuilderConfig-\u003eIO(Maybe Builder)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Builder.html#v:determineDefaultBuilder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe \u003ccode\u003eEval\u003c/code\u003e fragment can be interpreted with our semantic interpreter.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "DDC.Build.Language.Eval",
          "name": "Eval",
          "package": "ddc-build",
          "source": "src/DDC-Build-Language-Eval.html",
          "type": "module"
        },
        "index": {
          "description": "The Eval fragment can be interpreted with our semantic interpreter",
          "hierarchy": "DDC Build Language Eval",
          "module": "DDC.Build.Language.Eval",
          "name": "Eval",
          "package": "ddc-build",
          "partial": "Eval",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Language-Eval.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLanguage bundle for Disciple Core Eval.\n\u003c/p\u003e",
          "module": "DDC.Build.Language.Eval",
          "name": "bundle",
          "package": "ddc-build",
          "signature": "Bundle Int Name Error",
          "source": "src/DDC-Build-Language-Eval.html#bundle",
          "type": "function"
        },
        "index": {
          "description": "Language bundle for Disciple Core Eval",
          "hierarchy": "DDC Build Language Eval",
          "module": "DDC.Build.Language.Eval",
          "name": "bundle",
          "package": "ddc-build",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Language-Eval.html#v:bundle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFragment definition for Disciple Core Eval.\n\u003c/p\u003e",
          "module": "DDC.Build.Language.Eval",
          "name": "fragment",
          "package": "ddc-build",
          "signature": "Fragment Name Error",
          "source": "src/DDC-Build-Language-Eval.html#fragment",
          "type": "function"
        },
        "index": {
          "description": "Fragment definition for Disciple Core Eval",
          "hierarchy": "DDC Build Language Eval",
          "module": "DDC.Build.Language.Eval",
          "name": "fragment",
          "package": "ddc-build",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Language-Eval.html#v:fragment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLanguage definition for Disciple Core Eval.\n\u003c/p\u003e",
          "module": "DDC.Build.Language.Eval",
          "name": "language",
          "package": "ddc-build",
          "signature": "Language",
          "source": "src/DDC-Build-Language-Eval.html#language",
          "type": "function"
        },
        "index": {
          "description": "Language definition for Disciple Core Eval",
          "hierarchy": "DDC Build Language Eval",
          "module": "DDC.Build.Language.Eval",
          "name": "language",
          "package": "ddc-build",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Language-Eval.html#v:language"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Build.Language.Eval",
          "name": "profile",
          "package": "ddc-build",
          "signature": "Profile Name",
          "source": "src/DDC-Build-Language-Eval.html#profile",
          "type": "function"
        },
        "index": {
          "hierarchy": "DDC Build Language Eval",
          "module": "DDC.Build.Language.Eval",
          "name": "profile",
          "package": "ddc-build",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Language-Eval.html#v:profile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe \u003ccode\u003eFlow\u003c/code\u003e fragment is used for data-flow optimisation as part\n   of the Data Parallel Haskell vectorisation pipeline.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "DDC.Build.Language.Flow",
          "name": "Flow",
          "package": "ddc-build",
          "source": "src/DDC-Build-Language-Flow.html",
          "type": "module"
        },
        "index": {
          "description": "The Flow fragment is used for data-flow optimisation as part of the Data Parallel Haskell vectorisation pipeline",
          "hierarchy": "DDC Build Language Flow",
          "module": "DDC.Build.Language.Flow",
          "name": "Flow",
          "package": "ddc-build",
          "partial": "Flow",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Language-Flow.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Build.Language.Flow",
          "name": "Error",
          "package": "ddc-build",
          "source": "src/DDC-Build-Language-Flow.html#Error",
          "type": "data"
        },
        "index": {
          "hierarchy": "DDC Build Language Flow",
          "module": "DDC.Build.Language.Flow",
          "name": "Error",
          "package": "ddc-build",
          "partial": "Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Language-Flow.html#t:Error"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Build.Language.Flow",
          "name": "Error",
          "package": "ddc-build",
          "signature": "Error",
          "source": "src/DDC-Build-Language-Flow.html#Error",
          "type": "function"
        },
        "index": {
          "hierarchy": "DDC Build Language Flow",
          "module": "DDC.Build.Language.Flow",
          "name": "Error",
          "package": "ddc-build",
          "partial": "Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Language-Flow.html#v:Error"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLanguage bundle for Disciple Core Lite.\n\u003c/p\u003e",
          "module": "DDC.Build.Language.Flow",
          "name": "bundle",
          "package": "ddc-build",
          "signature": "Bundle Int Name Error",
          "source": "src/DDC-Build-Language-Flow.html#bundle",
          "type": "function"
        },
        "index": {
          "description": "Language bundle for Disciple Core Lite",
          "hierarchy": "DDC Build Language Flow",
          "module": "DDC.Build.Language.Flow",
          "name": "bundle",
          "package": "ddc-build",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Language-Flow.html#v:bundle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFragement definition for Disciple Core Lite.\n\u003c/p\u003e",
          "module": "DDC.Build.Language.Flow",
          "name": "fragment",
          "package": "ddc-build",
          "signature": "Fragment Name Error",
          "source": "src/DDC-Build-Language-Flow.html#fragment",
          "type": "function"
        },
        "index": {
          "description": "Fragement definition for Disciple Core Lite",
          "hierarchy": "DDC Build Language Flow",
          "module": "DDC.Build.Language.Flow",
          "name": "fragment",
          "package": "ddc-build",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Language-Flow.html#v:fragment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLanguage definition for Disciple Core Lite.\n\u003c/p\u003e",
          "module": "DDC.Build.Language.Flow",
          "name": "language",
          "package": "ddc-build",
          "signature": "Language",
          "source": "src/DDC-Build-Language-Flow.html#language",
          "type": "function"
        },
        "index": {
          "description": "Language definition for Disciple Core Lite",
          "hierarchy": "DDC Build Language Flow",
          "module": "DDC.Build.Language.Flow",
          "name": "language",
          "package": "ddc-build",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Language-Flow.html#v:language"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe \u003ccode\u003eLite\u003c/code\u003e fragment is a desugared version of Disciple Core that has all\n   the polymorphism of System-F2 along with algebraic data types.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "DDC.Build.Language.Lite",
          "name": "Lite",
          "package": "ddc-build",
          "source": "src/DDC-Build-Language-Lite.html",
          "type": "module"
        },
        "index": {
          "description": "The Lite fragment is desugared version of Disciple Core that has all the polymorphism of System-F2 along with algebraic data types",
          "hierarchy": "DDC Build Language Lite",
          "module": "DDC.Build.Language.Lite",
          "name": "Lite",
          "package": "ddc-build",
          "partial": "Lite",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Language-Lite.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLanguage bundle for Disciple Core Lite.\n\u003c/p\u003e",
          "module": "DDC.Build.Language.Lite",
          "name": "bundle",
          "package": "ddc-build",
          "signature": "Bundle Int Name Error",
          "source": "src/DDC-Build-Language-Lite.html#bundle",
          "type": "function"
        },
        "index": {
          "description": "Language bundle for Disciple Core Lite",
          "hierarchy": "DDC Build Language Lite",
          "module": "DDC.Build.Language.Lite",
          "name": "bundle",
          "package": "ddc-build",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Language-Lite.html#v:bundle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFragement definition for Disciple Core Lite.\n\u003c/p\u003e",
          "module": "DDC.Build.Language.Lite",
          "name": "fragment",
          "package": "ddc-build",
          "signature": "Fragment Name Error",
          "source": "src/DDC-Build-Language-Lite.html#fragment",
          "type": "function"
        },
        "index": {
          "description": "Fragement definition for Disciple Core Lite",
          "hierarchy": "DDC Build Language Lite",
          "module": "DDC.Build.Language.Lite",
          "name": "fragment",
          "package": "ddc-build",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Language-Lite.html#v:fragment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new type variable name that is not in the given environment.\n\u003c/p\u003e",
          "module": "DDC.Build.Language.Lite",
          "name": "freshT",
          "package": "ddc-build",
          "signature": "Env Name -\u003e Bind Name -\u003e State Int Name",
          "source": "src/DDC-Build-Language-Lite.html#freshT",
          "type": "function"
        },
        "index": {
          "description": "Create new type variable name that is not in the given environment",
          "hierarchy": "DDC Build Language Lite",
          "module": "DDC.Build.Language.Lite",
          "name": "freshT",
          "normalized": "Env Name-\u003eBind Name-\u003eState Int Name",
          "package": "ddc-build",
          "signature": "Env Name-\u003eBind Name-\u003eState Int Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Language-Lite.html#v:freshT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new value variable name that is not in the given environment.\n\u003c/p\u003e",
          "module": "DDC.Build.Language.Lite",
          "name": "freshX",
          "package": "ddc-build",
          "signature": "Env Name -\u003e Bind Name -\u003e State Int Name",
          "source": "src/DDC-Build-Language-Lite.html#freshX",
          "type": "function"
        },
        "index": {
          "description": "Create new value variable name that is not in the given environment",
          "hierarchy": "DDC Build Language Lite",
          "module": "DDC.Build.Language.Lite",
          "name": "freshX",
          "normalized": "Env Name-\u003eBind Name-\u003eState Int Name",
          "package": "ddc-build",
          "signature": "Env Name-\u003eBind Name-\u003eState Int Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Language-Lite.html#v:freshX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLanguage definition for Disciple Core Lite.\n\u003c/p\u003e",
          "module": "DDC.Build.Language.Lite",
          "name": "language",
          "package": "ddc-build",
          "signature": "Language",
          "source": "src/DDC-Build-Language-Lite.html#language",
          "type": "function"
        },
        "index": {
          "description": "Language definition for Disciple Core Lite",
          "hierarchy": "DDC Build Language Lite",
          "module": "DDC.Build.Language.Lite",
          "name": "language",
          "package": "ddc-build",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Language-Lite.html#v:language"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe \u003ccode\u003eSalt\u003c/code\u003e fragment contains just those features that can be easily mapped\n   onto C or LLVM code.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "DDC.Build.Language.Salt",
          "name": "Salt",
          "package": "ddc-build",
          "source": "src/DDC-Build-Language-Salt.html",
          "type": "module"
        },
        "index": {
          "description": "The Salt fragment contains just those features that can be easily mapped onto or LLVM code",
          "hierarchy": "DDC Build Language Salt",
          "module": "DDC.Build.Language.Salt",
          "name": "Salt",
          "package": "ddc-build",
          "partial": "Salt",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Language-Salt.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLanguage bundle for Disciple Core Salt.\n\u003c/p\u003e",
          "module": "DDC.Build.Language.Salt",
          "name": "bundle",
          "package": "ddc-build",
          "signature": "Bundle Int Name Error",
          "source": "src/DDC-Build-Language-Salt.html#bundle",
          "type": "function"
        },
        "index": {
          "description": "Language bundle for Disciple Core Salt",
          "hierarchy": "DDC Build Language Salt",
          "module": "DDC.Build.Language.Salt",
          "name": "bundle",
          "package": "ddc-build",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Language-Salt.html#v:bundle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFragment definition for Disciple Core Salt.\n\u003c/p\u003e",
          "module": "DDC.Build.Language.Salt",
          "name": "fragment",
          "package": "ddc-build",
          "signature": "Fragment Name Error",
          "source": "src/DDC-Build-Language-Salt.html#fragment",
          "type": "function"
        },
        "index": {
          "description": "Fragment definition for Disciple Core Salt",
          "hierarchy": "DDC Build Language Salt",
          "module": "DDC.Build.Language.Salt",
          "name": "fragment",
          "package": "ddc-build",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Language-Salt.html#v:fragment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new type variable name that is not in the given environment.\n\u003c/p\u003e",
          "module": "DDC.Build.Language.Salt",
          "name": "freshT",
          "package": "ddc-build",
          "signature": "Env Name -\u003e Bind Name -\u003e State Int Name",
          "source": "src/DDC-Build-Language-Salt.html#freshT",
          "type": "function"
        },
        "index": {
          "description": "Create new type variable name that is not in the given environment",
          "hierarchy": "DDC Build Language Salt",
          "module": "DDC.Build.Language.Salt",
          "name": "freshT",
          "normalized": "Env Name-\u003eBind Name-\u003eState Int Name",
          "package": "ddc-build",
          "signature": "Env Name-\u003eBind Name-\u003eState Int Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Language-Salt.html#v:freshT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new value variable name that is not in the given environment.\n\u003c/p\u003e",
          "module": "DDC.Build.Language.Salt",
          "name": "freshX",
          "package": "ddc-build",
          "signature": "Env Name -\u003e Bind Name -\u003e State Int Name",
          "source": "src/DDC-Build-Language-Salt.html#freshX",
          "type": "function"
        },
        "index": {
          "description": "Create new value variable name that is not in the given environment",
          "hierarchy": "DDC Build Language Salt",
          "module": "DDC.Build.Language.Salt",
          "name": "freshX",
          "normalized": "Env Name-\u003eBind Name-\u003eState Int Name",
          "package": "ddc-build",
          "signature": "Env Name-\u003eBind Name-\u003eState Int Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Language-Salt.html#v:freshX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLanguage definition for Disciple Core Salt.\n\u003c/p\u003e",
          "module": "DDC.Build.Language.Salt",
          "name": "language",
          "package": "ddc-build",
          "signature": "Language",
          "source": "src/DDC-Build-Language-Salt.html#language",
          "type": "function"
        },
        "index": {
          "description": "Language definition for Disciple Core Salt",
          "hierarchy": "DDC Build Language Salt",
          "module": "DDC.Build.Language.Salt",
          "name": "language",
          "package": "ddc-build",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Language-Salt.html#v:language"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe \u003ccode\u003eTetra\u003c/code\u003e fragment has four base kinds: \n   \u003ccode\u003eData\u003c/code\u003e, \u003ccode\u003eRegion\u003c/code\u003e, \u003ccode\u003eEffect\u003c/code\u003e, \u003ccode\u003eWitness\u003c/code\u003e and uses the \u003ccode\u003eS\u003c/code\u003e\n   computation type to represent effects.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "DDC.Build.Language.Tetra",
          "name": "Tetra",
          "package": "ddc-build",
          "source": "src/DDC-Build-Language-Tetra.html",
          "type": "module"
        },
        "index": {
          "description": "The Tetra fragment has four base kinds Data Region Effect Witness and uses the computation type to represent effects",
          "hierarchy": "DDC Build Language Tetra",
          "module": "DDC.Build.Language.Tetra",
          "name": "Tetra",
          "package": "ddc-build",
          "partial": "Tetra",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Language-Tetra.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Build.Language.Tetra",
          "name": "Error",
          "package": "ddc-build",
          "source": "src/DDC-Build-Language-Tetra.html#Error",
          "type": "data"
        },
        "index": {
          "hierarchy": "DDC Build Language Tetra",
          "module": "DDC.Build.Language.Tetra",
          "name": "Error",
          "package": "ddc-build",
          "partial": "Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Language-Tetra.html#t:Error"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Build.Language.Tetra",
          "name": "Error",
          "package": "ddc-build",
          "signature": "Error",
          "source": "src/DDC-Build-Language-Tetra.html#Error",
          "type": "function"
        },
        "index": {
          "hierarchy": "DDC Build Language Tetra",
          "module": "DDC.Build.Language.Tetra",
          "name": "Error",
          "package": "ddc-build",
          "partial": "Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Language-Tetra.html#v:Error"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLanguage bundle for Disciple Core Tetra.\n\u003c/p\u003e",
          "module": "DDC.Build.Language.Tetra",
          "name": "bundle",
          "package": "ddc-build",
          "signature": "Bundle Int Name Error",
          "source": "src/DDC-Build-Language-Tetra.html#bundle",
          "type": "function"
        },
        "index": {
          "description": "Language bundle for Disciple Core Tetra",
          "hierarchy": "DDC Build Language Tetra",
          "module": "DDC.Build.Language.Tetra",
          "name": "bundle",
          "package": "ddc-build",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Language-Tetra.html#v:bundle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFragement definition for Disciple Core Tetra.\n\u003c/p\u003e",
          "module": "DDC.Build.Language.Tetra",
          "name": "fragment",
          "package": "ddc-build",
          "signature": "Fragment Name Error",
          "source": "src/DDC-Build-Language-Tetra.html#fragment",
          "type": "function"
        },
        "index": {
          "description": "Fragement definition for Disciple Core Tetra",
          "hierarchy": "DDC Build Language Tetra",
          "module": "DDC.Build.Language.Tetra",
          "name": "fragment",
          "package": "ddc-build",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Language-Tetra.html#v:fragment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLanguage definition for Disciple Core Tetra.\n\u003c/p\u003e",
          "module": "DDC.Build.Language.Tetra",
          "name": "language",
          "package": "ddc-build",
          "signature": "Language",
          "source": "src/DDC-Build-Language-Tetra.html#language",
          "type": "function"
        },
        "index": {
          "description": "Language definition for Disciple Core Tetra",
          "hierarchy": "DDC Build Language Tetra",
          "module": "DDC.Build.Language.Tetra",
          "name": "language",
          "package": "ddc-build",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Language-Tetra.html#v:language"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe \u003ccode\u003eZero\u003c/code\u003e fragment has no features and no primops.\n   It it provides the first order calculus, and is good for debugging.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "DDC.Build.Language.Zero",
          "name": "Zero",
          "package": "ddc-build",
          "source": "src/DDC-Build-Language-Zero.html",
          "type": "module"
        },
        "index": {
          "description": "The Zero fragment has no features and no primops It it provides the first order calculus and is good for debugging",
          "hierarchy": "DDC Build Language Zero",
          "module": "DDC.Build.Language.Zero",
          "name": "Zero",
          "package": "ddc-build",
          "partial": "Zero",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Language-Zero.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Build.Language.Zero",
          "name": "Error",
          "package": "ddc-build",
          "source": "src/DDC-Build-Language-Zero.html#Error",
          "type": "data"
        },
        "index": {
          "hierarchy": "DDC Build Language Zero",
          "module": "DDC.Build.Language.Zero",
          "name": "Error",
          "package": "ddc-build",
          "partial": "Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Language-Zero.html#t:Error"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Build.Language.Zero",
          "name": "Name",
          "package": "ddc-build",
          "source": "src/DDC-Build-Language-Zero.html#Name",
          "type": "data"
        },
        "index": {
          "hierarchy": "DDC Build Language Zero",
          "module": "DDC.Build.Language.Zero",
          "name": "Name",
          "package": "ddc-build",
          "partial": "Name",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Language-Zero.html#t:Name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLanguage bundle for Disciple Core Zero\n\u003c/p\u003e",
          "module": "DDC.Build.Language.Zero",
          "name": "bundle",
          "package": "ddc-build",
          "signature": "Bundle Int Name Error",
          "source": "src/DDC-Build-Language-Zero.html#bundle",
          "type": "function"
        },
        "index": {
          "description": "Language bundle for Disciple Core Zero",
          "hierarchy": "DDC Build Language Zero",
          "module": "DDC.Build.Language.Zero",
          "name": "bundle",
          "package": "ddc-build",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Language-Zero.html#v:bundle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFragment definition for Disciple Core Eval.\n\u003c/p\u003e",
          "module": "DDC.Build.Language.Zero",
          "name": "fragment",
          "package": "ddc-build",
          "signature": "Fragment Name Error",
          "source": "src/DDC-Build-Language-Zero.html#fragment",
          "type": "function"
        },
        "index": {
          "description": "Fragment definition for Disciple Core Eval",
          "hierarchy": "DDC Build Language Zero",
          "module": "DDC.Build.Language.Zero",
          "name": "fragment",
          "package": "ddc-build",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Language-Zero.html#v:fragment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLanguage definitition for Disciple Core Zero.\n\u003c/p\u003e",
          "module": "DDC.Build.Language.Zero",
          "name": "language",
          "package": "ddc-build",
          "signature": "Language",
          "source": "src/DDC-Build-Language-Zero.html#language",
          "type": "function"
        },
        "index": {
          "description": "Language definitition for Disciple Core Zero",
          "hierarchy": "DDC Build Language Zero",
          "module": "DDC.Build.Language.Zero",
          "name": "language",
          "package": "ddc-build",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Language-Zero.html#v:language"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Build.Language",
          "name": "Language",
          "package": "ddc-build",
          "source": "src/DDC-Build-Language.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "DDC Build Language",
          "module": "DDC.Build.Language",
          "name": "Language",
          "package": "ddc-build",
          "partial": "Language",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Language.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExistential container for a language fragment, \n      the simplifier for it,\n      and the dictionaries we need to work with its type parameters.\n\u003c/p\u003e",
          "module": "DDC.Build.Language",
          "name": "Bundle",
          "package": "ddc-build",
          "source": "src/DDC-Build-Language-Base.html#Bundle",
          "type": "data"
        },
        "index": {
          "description": "Existential container for language fragment the simplifier for it and the dictionaries we need to work with its type parameters",
          "hierarchy": "DDC Build Language",
          "module": "DDC.Build.Language",
          "name": "Bundle",
          "package": "ddc-build",
          "partial": "Bundle",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Language.html#t:Bundle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCarries all the information we need to work on a particular \n   fragment of the Disciple Core language.\n\u003c/p\u003e",
          "module": "DDC.Build.Language",
          "name": "Fragment",
          "package": "ddc-build",
          "type": "data"
        },
        "index": {
          "description": "Carries all the information we need to work on particular fragment of the Disciple Core language",
          "hierarchy": "DDC Build Language",
          "module": "DDC.Build.Language",
          "name": "Fragment",
          "package": "ddc-build",
          "partial": "Fragment",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Language.html#t:Fragment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExistential container for a language fragment, and the dictionaries\n   we need to work with its type parameters.\n\u003c/p\u003e",
          "module": "DDC.Build.Language",
          "name": "Language",
          "package": "ddc-build",
          "source": "src/DDC-Build-Language-Base.html#Language",
          "type": "data"
        },
        "index": {
          "description": "Existential container for language fragment and the dictionaries we need to work with its type parameters",
          "hierarchy": "DDC Build Language",
          "module": "DDC.Build.Language",
          "name": "Language",
          "package": "ddc-build",
          "partial": "Language",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Language.html#t:Language"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Build.Language",
          "name": "Bundle",
          "package": "ddc-build",
          "signature": "Bundle",
          "source": "src/DDC-Build-Language-Base.html#Bundle",
          "type": "function"
        },
        "index": {
          "hierarchy": "DDC Build Language",
          "module": "DDC.Build.Language",
          "name": "Bundle",
          "package": "ddc-build",
          "partial": "Bundle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Language.html#v:Bundle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Build.Language",
          "name": "Fragment",
          "package": "ddc-build",
          "signature": "Fragment",
          "type": "function"
        },
        "index": {
          "hierarchy": "DDC Build Language",
          "module": "DDC.Build.Language",
          "name": "Fragment",
          "package": "ddc-build",
          "partial": "Fragment",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Language.html#v:Fragment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Build.Language",
          "name": "Language",
          "package": "ddc-build",
          "signature": "Language (Bundle s n err)",
          "source": "src/DDC-Build-Language-Base.html#Language",
          "type": "function"
        },
        "index": {
          "hierarchy": "DDC Build Language",
          "module": "DDC.Build.Language",
          "name": "Language",
          "package": "ddc-build",
          "partial": "Language",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Language.html#v:Language"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLanguage fragment definition.\n\u003c/p\u003e",
          "module": "DDC.Build.Language",
          "name": "bundleFragment",
          "package": "ddc-build",
          "signature": "Fragment n err",
          "source": "src/DDC-Build-Language-Base.html#Bundle",
          "type": "function"
        },
        "index": {
          "description": "Language fragment definition",
          "hierarchy": "DDC Build Language",
          "module": "DDC.Build.Language",
          "name": "bundleFragment",
          "package": "ddc-build",
          "partial": "Fragment",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Language.html#v:bundleFragment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a namifier for level-1 names.\n\u003c/p\u003e",
          "module": "DDC.Build.Language",
          "name": "bundleMakeNamifierT",
          "package": "ddc-build",
          "signature": "Env n -\u003e Namifier s n",
          "source": "src/DDC-Build-Language-Base.html#Bundle",
          "type": "function"
        },
        "index": {
          "description": "Make namifier for level-1 names",
          "hierarchy": "DDC Build Language",
          "module": "DDC.Build.Language",
          "name": "bundleMakeNamifierT",
          "normalized": "Env a-\u003eNamifier b a",
          "package": "ddc-build",
          "partial": "Make Namifier",
          "signature": "Env n-\u003eNamifier s n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Language.html#v:bundleMakeNamifierT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a namifier for level-0 names.\n\u003c/p\u003e",
          "module": "DDC.Build.Language",
          "name": "bundleMakeNamifierX",
          "package": "ddc-build",
          "signature": "Env n -\u003e Namifier s n",
          "source": "src/DDC-Build-Language-Base.html#Bundle",
          "type": "function"
        },
        "index": {
          "description": "Make namifier for level-0 names",
          "hierarchy": "DDC Build Language",
          "module": "DDC.Build.Language",
          "name": "bundleMakeNamifierX",
          "normalized": "Env a-\u003eNamifier b a",
          "package": "ddc-build",
          "partial": "Make Namifier",
          "signature": "Env n-\u003eNamifier s n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Language.html#v:bundleMakeNamifierX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModules being used for inliner templates.\n\u003c/p\u003e",
          "module": "DDC.Build.Language",
          "name": "bundleModules",
          "package": "ddc-build",
          "signature": "Map ModuleName (Module (AnTEC () n) n)",
          "source": "src/DDC-Build-Language-Base.html#Bundle",
          "type": "function"
        },
        "index": {
          "description": "Modules being used for inliner templates",
          "hierarchy": "DDC Build Language",
          "module": "DDC.Build.Language",
          "name": "bundleModules",
          "normalized": "Map ModuleName(Module(AnTEC()a)a)",
          "package": "ddc-build",
          "partial": "Modules",
          "signature": "Map ModuleName(Module(AnTEC()n)n)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Language.html#v:bundleModules"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCurrent rewrite rules to apply to module.\n\u003c/p\u003e",
          "module": "DDC.Build.Language",
          "name": "bundleRewriteRules",
          "package": "ddc-build",
          "signature": "Map String (RewriteRule (AnTEC () n) n)",
          "source": "src/DDC-Build-Language-Base.html#Bundle",
          "type": "function"
        },
        "index": {
          "description": "Current rewrite rules to apply to module",
          "hierarchy": "DDC Build Language",
          "module": "DDC.Build.Language",
          "name": "bundleRewriteRules",
          "normalized": "Map String(RewriteRule(AnTEC()a)a)",
          "package": "ddc-build",
          "partial": "Rewrite Rules",
          "signature": "Map String(RewriteRule(AnTEC()n)n)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Language.html#v:bundleRewriteRules"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCurrent simplifier to apply to module.\n\u003c/p\u003e",
          "module": "DDC.Build.Language",
          "name": "bundleSimplifier",
          "package": "ddc-build",
          "signature": "Simplifier s (AnTEC () n) n",
          "source": "src/DDC-Build-Language-Base.html#Bundle",
          "type": "function"
        },
        "index": {
          "description": "Current simplifier to apply to module",
          "hierarchy": "DDC Build Language",
          "module": "DDC.Build.Language",
          "name": "bundleSimplifier",
          "normalized": "Simplifier a(AnTEC()b)b",
          "package": "ddc-build",
          "partial": "Simplifier",
          "signature": "Simplifier s(AnTEC()n)n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Language.html#v:bundleSimplifier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInitial simplifier state.\n\u003c/p\u003e",
          "module": "DDC.Build.Language",
          "name": "bundleStateInit",
          "package": "ddc-build",
          "signature": "s",
          "source": "src/DDC-Build-Language-Base.html#Bundle",
          "type": "function"
        },
        "index": {
          "description": "Initial simplifier state",
          "hierarchy": "DDC Build Language",
          "module": "DDC.Build.Language",
          "name": "bundleStateInit",
          "package": "ddc-build",
          "partial": "State Init",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Language.html#v:bundleStateInit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerform language fragment specific checks on an expression.\n\u003c/p\u003e",
          "module": "DDC.Build.Language",
          "name": "fragmentCheckExp",
          "package": "ddc-build",
          "signature": "forall a.  Exp a n -\u003e Maybe (err a)",
          "type": "function"
        },
        "index": {
          "description": "Perform language fragment specific checks on an expression",
          "hierarchy": "DDC Build Language",
          "module": "DDC.Build.Language",
          "name": "fragmentCheckExp",
          "normalized": "a b Exp c d-\u003eMaybe(e c)",
          "package": "ddc-build",
          "partial": "Check Exp",
          "signature": "forall a. Exp a n-\u003eMaybe(err a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Language.html#v:fragmentCheckExp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerform language fragment specific checks on a module.\n\u003c/p\u003e",
          "module": "DDC.Build.Language",
          "name": "fragmentCheckModule",
          "package": "ddc-build",
          "signature": "forall a.  Module a n -\u003e Maybe (err a)",
          "type": "function"
        },
        "index": {
          "description": "Perform language fragment specific checks on module",
          "hierarchy": "DDC Build Language",
          "module": "DDC.Build.Language",
          "name": "fragmentCheckModule",
          "normalized": "a b Module c d-\u003eMaybe(e c)",
          "package": "ddc-build",
          "partial": "Check Module",
          "signature": "forall a. Module a n-\u003eMaybe(err a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Language.html#v:fragmentCheckModule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFile extension to use when dumping modules in this fragment.\n\u003c/p\u003e",
          "module": "DDC.Build.Language",
          "name": "fragmentExtension",
          "package": "ddc-build",
          "signature": "String",
          "type": "function"
        },
        "index": {
          "description": "File extension to use when dumping modules in this fragment",
          "hierarchy": "DDC Build Language",
          "module": "DDC.Build.Language",
          "name": "fragmentExtension",
          "package": "ddc-build",
          "partial": "Extension",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Language.html#v:fragmentExtension"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLex expression source into tokens,\n   given the source name and starting line number.\n\u003c/p\u003e",
          "module": "DDC.Build.Language",
          "name": "fragmentLexExp",
          "package": "ddc-build",
          "signature": "String -\u003e Int -\u003e String -\u003e [Token (Tok n)]",
          "type": "function"
        },
        "index": {
          "description": "Lex expression source into tokens given the source name and starting line number",
          "hierarchy": "DDC Build Language",
          "module": "DDC.Build.Language",
          "name": "fragmentLexExp",
          "normalized": "String-\u003eInt-\u003eString-\u003e[Token(Tok a)]",
          "package": "ddc-build",
          "partial": "Lex Exp",
          "signature": "String-\u003eInt-\u003eString-\u003e[Token(Tok n)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Language.html#v:fragmentLexExp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLex module source into tokens,\n   given the source name and starting line number. \n\u003c/p\u003e",
          "module": "DDC.Build.Language",
          "name": "fragmentLexModule",
          "package": "ddc-build",
          "signature": "String -\u003e Int -\u003e String -\u003e [Token (Tok n)]",
          "type": "function"
        },
        "index": {
          "description": "Lex module source into tokens given the source name and starting line number",
          "hierarchy": "DDC Build Language",
          "module": "DDC.Build.Language",
          "name": "fragmentLexModule",
          "normalized": "String-\u003eInt-\u003eString-\u003e[Token(Tok a)]",
          "package": "ddc-build",
          "partial": "Lex Module",
          "signature": "String-\u003eInt-\u003eString-\u003e[Token(Tok n)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Language.html#v:fragmentLexModule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLanguage profile for this fragment.\n\u003c/p\u003e",
          "module": "DDC.Build.Language",
          "name": "fragmentProfile",
          "package": "ddc-build",
          "signature": "Profile n",
          "type": "function"
        },
        "index": {
          "description": "Language profile for this fragment",
          "hierarchy": "DDC Build Language",
          "module": "DDC.Build.Language",
          "name": "fragmentProfile",
          "package": "ddc-build",
          "partial": "Profile",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Language.html#v:fragmentProfile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a name.\n\u003c/p\u003e",
          "module": "DDC.Build.Language",
          "name": "fragmentReadName",
          "package": "ddc-build",
          "signature": "String -\u003e Maybe n",
          "type": "function"
        },
        "index": {
          "description": "Read name",
          "hierarchy": "DDC Build Language",
          "module": "DDC.Build.Language",
          "name": "fragmentReadName",
          "normalized": "String-\u003eMaybe a",
          "package": "ddc-build",
          "partial": "Read Name",
          "signature": "String-\u003eMaybe n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Language.html#v:fragmentReadName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the language fragment definition corresponding to the given \n   file extension. eg \u003ccode\u003edcl\u003c/code\u003e gives the definition of the Lite language.\n\u003c/p\u003e",
          "module": "DDC.Build.Language",
          "name": "languageOfExtension",
          "package": "ddc-build",
          "signature": "String -\u003e Maybe Language",
          "source": "src/DDC-Build-Language.html#languageOfExtension",
          "type": "function"
        },
        "index": {
          "description": "Return the language fragment definition corresponding to the given file extension eg dcl gives the definition of the Lite language",
          "hierarchy": "DDC Build Language",
          "module": "DDC.Build.Language",
          "name": "languageOfExtension",
          "normalized": "String-\u003eMaybe Language",
          "package": "ddc-build",
          "partial": "Of Extension",
          "signature": "String-\u003eMaybe Language",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Language.html#v:languageOfExtension"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSupported language profiles.\n\u003c/p\u003e\u003cp\u003eOne of \u003ccode\u003eTetra\u003c/code\u003e, \u003ccode\u003eLite\u003c/code\u003e, \u003ccode\u003eSalt\u003c/code\u003e, \u003ccode\u003eEval\u003c/code\u003e, \u003ccode\u003eFlow\u003c/code\u003e, \u003ccode\u003eZero\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "DDC.Build.Language",
          "name": "languages",
          "package": "ddc-build",
          "signature": "[(String, Language)]",
          "source": "src/DDC-Build-Language.html#languages",
          "type": "function"
        },
        "index": {
          "description": "Supported language profiles One of Tetra Lite Salt Eval Flow Zero",
          "hierarchy": "DDC Build Language",
          "module": "DDC.Build.Language",
          "name": "languages",
          "normalized": "[(String,Language)]",
          "package": "ddc-build",
          "signature": "[(String,Language)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Language.html#v:languages"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Build.Pipeline.Core",
          "name": "Core",
          "package": "ddc-build",
          "source": "src/DDC-Build-Pipeline-Core.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "DDC Build Pipeline Core",
          "module": "DDC.Build.Pipeline.Core",
          "name": "Core",
          "package": "ddc-build",
          "partial": "Core",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Pipeline-Core.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProcess a core module.\n\u003c/p\u003e",
          "module": "DDC.Build.Pipeline.Core",
          "name": "PipeCore",
          "package": "ddc-build",
          "source": "src/DDC-Build-Pipeline-Core.html#PipeCore",
          "type": "data"
        },
        "index": {
          "description": "Process core module",
          "hierarchy": "DDC Build Pipeline Core",
          "module": "DDC.Build.Pipeline.Core",
          "name": "PipeCore",
          "package": "ddc-build",
          "partial": "Pipe Core",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Pipeline-Core.html#t:PipeCore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProcess a Core Flow module.\n\u003c/p\u003e",
          "module": "DDC.Build.Pipeline.Core",
          "name": "PipeFlow",
          "package": "ddc-build",
          "source": "src/DDC-Build-Pipeline-Core.html#PipeFlow",
          "type": "data"
        },
        "index": {
          "description": "Process Core Flow module",
          "hierarchy": "DDC Build Pipeline Core",
          "module": "DDC.Build.Pipeline.Core",
          "name": "PipeFlow",
          "package": "ddc-build",
          "partial": "Pipe Flow",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Pipeline-Core.html#t:PipeFlow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProcess a Core Lite module.\n\u003c/p\u003e",
          "module": "DDC.Build.Pipeline.Core",
          "name": "PipeLite",
          "package": "ddc-build",
          "source": "src/DDC-Build-Pipeline-Core.html#PipeLite",
          "type": "data"
        },
        "index": {
          "description": "Process Core Lite module",
          "hierarchy": "DDC Build Pipeline Core",
          "module": "DDC.Build.Pipeline.Core",
          "name": "PipeLite",
          "package": "ddc-build",
          "partial": "Pipe Lite",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Pipeline-Core.html#t:PipeLite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"DDC.Build.Pipeline.Core\",\"DDC.Build.Pipeline\"]",
          "name": "PipeCoreAsFlow",
          "package": "ddc-build",
          "signature": "[PipeFlow a] -\u003e PipeCore a Name",
          "source": "src/DDC-Build-Pipeline-Core.html#PipeCore",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Pipeline-Core.html#v:PipeCoreAsFlow\",\"http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Pipeline.html#v:PipeCoreAsFlow\"]"
        },
        "index": {
          "hierarchy": "DDC Build Pipeline Core",
          "module": "DDC.Build.Pipeline.Core",
          "name": "PipeCoreAsFlow",
          "normalized": "[PipeFlow a]-\u003ePipeCore a Name",
          "package": "ddc-build",
          "partial": "Pipe Core As Flow",
          "signature": "[PipeFlow a]-\u003ePipeCore a Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Pipeline-Core.html#v:PipeCoreAsFlow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"DDC.Build.Pipeline.Core\",\"DDC.Build.Pipeline\"]",
          "name": "PipeCoreAsLite",
          "package": "ddc-build",
          "signature": "[PipeLite] -\u003e PipeCore (AnTEC () Name) Name",
          "source": "src/DDC-Build-Pipeline-Core.html#PipeCore",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Pipeline-Core.html#v:PipeCoreAsLite\",\"http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Pipeline.html#v:PipeCoreAsLite\"]"
        },
        "index": {
          "hierarchy": "DDC Build Pipeline Core",
          "module": "DDC.Build.Pipeline.Core",
          "name": "PipeCoreAsLite",
          "normalized": "[PipeLite]-\u003ePipeCore(AnTEC()Name)Name",
          "package": "ddc-build",
          "partial": "Pipe Core As Lite",
          "signature": "[PipeLite]-\u003ePipeCore(AnTEC()Name)Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Pipeline-Core.html#v:PipeCoreAsLite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"DDC.Build.Pipeline.Core\",\"DDC.Build.Pipeline\"]",
          "name": "PipeCoreAsSalt",
          "package": "ddc-build",
          "signature": "[PipeSalt a] -\u003e PipeCore a Name",
          "source": "src/DDC-Build-Pipeline-Core.html#PipeCore",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Pipeline-Core.html#v:PipeCoreAsSalt\",\"http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Pipeline.html#v:PipeCoreAsSalt\"]"
        },
        "index": {
          "hierarchy": "DDC Build Pipeline Core",
          "module": "DDC.Build.Pipeline.Core",
          "name": "PipeCoreAsSalt",
          "normalized": "[PipeSalt a]-\u003ePipeCore a Name",
          "package": "ddc-build",
          "partial": "Pipe Core As Salt",
          "signature": "[PipeSalt a]-\u003ePipeCore a Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Pipeline-Core.html#v:PipeCoreAsSalt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"DDC.Build.Pipeline.Core\",\"DDC.Build.Pipeline\"]",
          "name": "PipeCoreCheck",
          "package": "ddc-build",
          "signature": "(Fragment n err) -\u003e ![PipeCore (AnTEC a n) n] -\u003e PipeCore a n",
          "source": "src/DDC-Build-Pipeline-Core.html#PipeCore",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Pipeline-Core.html#v:PipeCoreCheck\",\"http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Pipeline.html#v:PipeCoreCheck\"]"
        },
        "index": {
          "hierarchy": "DDC Build Pipeline Core",
          "module": "DDC.Build.Pipeline.Core",
          "name": "PipeCoreCheck",
          "normalized": "(Fragment a b)-\u003e[PipeCore(AnTEC c a)a]-\u003ePipeCore c a",
          "package": "ddc-build",
          "partial": "Pipe Core Check",
          "signature": "(Fragment n err)-\u003e[PipeCore(AnTEC a n)n]-\u003ePipeCore a n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Pipeline-Core.html#v:PipeCoreCheck"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"DDC.Build.Pipeline.Core\",\"DDC.Build.Pipeline\"]",
          "name": "PipeCoreHacks",
          "package": "ddc-build",
          "signature": "Canned (Module a n -\u003e IO (Module b n)) -\u003e ![PipeCore b n] -\u003e PipeCore a n",
          "source": "src/DDC-Build-Pipeline-Core.html#PipeCore",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Pipeline-Core.html#v:PipeCoreHacks\",\"http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Pipeline.html#v:PipeCoreHacks\"]"
        },
        "index": {
          "hierarchy": "DDC Build Pipeline Core",
          "module": "DDC.Build.Pipeline.Core",
          "name": "PipeCoreHacks",
          "normalized": "Canned(Module a b-\u003eIO(Module c b))-\u003e[PipeCore c b]-\u003ePipeCore a b",
          "package": "ddc-build",
          "partial": "Pipe Core Hacks",
          "signature": "Canned(Module a n-\u003eIO(Module b n))-\u003e[PipeCore b n]-\u003ePipeCore a n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Pipeline-Core.html#v:PipeCoreHacks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"DDC.Build.Pipeline.Core\",\"DDC.Build.Pipeline\"]",
          "name": "PipeCoreId",
          "package": "ddc-build",
          "signature": "[PipeCore a n] -\u003e PipeCore a n",
          "source": "src/DDC-Build-Pipeline-Core.html#PipeCore",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Pipeline-Core.html#v:PipeCoreId\",\"http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Pipeline.html#v:PipeCoreId\"]"
        },
        "index": {
          "hierarchy": "DDC Build Pipeline Core",
          "module": "DDC.Build.Pipeline.Core",
          "name": "PipeCoreId",
          "normalized": "[PipeCore a b]-\u003ePipeCore a b",
          "package": "ddc-build",
          "partial": "Pipe Core Id",
          "signature": "[PipeCore a n]-\u003ePipeCore a n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Pipeline-Core.html#v:PipeCoreId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"DDC.Build.Pipeline.Core\",\"DDC.Build.Pipeline\"]",
          "name": "PipeCoreOutput",
          "package": "ddc-build",
          "signature": "Sink -\u003e PipeCore a n",
          "source": "src/DDC-Build-Pipeline-Core.html#PipeCore",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Pipeline-Core.html#v:PipeCoreOutput\",\"http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Pipeline.html#v:PipeCoreOutput\"]"
        },
        "index": {
          "hierarchy": "DDC Build Pipeline Core",
          "module": "DDC.Build.Pipeline.Core",
          "name": "PipeCoreOutput",
          "normalized": "Sink-\u003ePipeCore a b",
          "package": "ddc-build",
          "partial": "Pipe Core Output",
          "signature": "Sink-\u003ePipeCore a n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Pipeline-Core.html#v:PipeCoreOutput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"DDC.Build.Pipeline.Core\",\"DDC.Build.Pipeline\"]",
          "name": "PipeCoreReCheck",
          "package": "ddc-build",
          "signature": "(Fragment n err) -\u003e ![PipeCore (AnTEC a n) n] -\u003e PipeCore (AnTEC a n') n",
          "source": "src/DDC-Build-Pipeline-Core.html#PipeCore",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Pipeline-Core.html#v:PipeCoreReCheck\",\"http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Pipeline.html#v:PipeCoreReCheck\"]"
        },
        "index": {
          "hierarchy": "DDC Build Pipeline Core",
          "module": "DDC.Build.Pipeline.Core",
          "name": "PipeCoreReCheck",
          "normalized": "(Fragment a b)-\u003e[PipeCore(AnTEC c a)a]-\u003ePipeCore(AnTEC c d)a",
          "package": "ddc-build",
          "partial": "Pipe Core Re Check",
          "signature": "(Fragment n err)-\u003e[PipeCore(AnTEC a n)n]-\u003ePipeCore(AnTEC a n')n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Pipeline-Core.html#v:PipeCoreReCheck"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"DDC.Build.Pipeline.Core\",\"DDC.Build.Pipeline\"]",
          "name": "PipeCoreReannotate",
          "package": "ddc-build",
          "signature": "(a -\u003e b) -\u003e ![PipeCore b n] -\u003e PipeCore a n",
          "source": "src/DDC-Build-Pipeline-Core.html#PipeCore",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Pipeline-Core.html#v:PipeCoreReannotate\",\"http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Pipeline.html#v:PipeCoreReannotate\"]"
        },
        "index": {
          "hierarchy": "DDC Build Pipeline Core",
          "module": "DDC.Build.Pipeline.Core",
          "name": "PipeCoreReannotate",
          "normalized": "(a-\u003eb)-\u003e[PipeCore b c]-\u003ePipeCore a c",
          "package": "ddc-build",
          "partial": "Pipe Core Reannotate",
          "signature": "(a-\u003eb)-\u003e[PipeCore b n]-\u003ePipeCore a n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Pipeline-Core.html#v:PipeCoreReannotate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"DDC.Build.Pipeline.Core\",\"DDC.Build.Pipeline\"]",
          "name": "PipeCoreSimplify",
          "package": "ddc-build",
          "signature": "(Fragment n err) -\u003e !s -\u003e !(Simplifier s a n) -\u003e ![PipeCore () n] -\u003e PipeCore a n",
          "source": "src/DDC-Build-Pipeline-Core.html#PipeCore",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Pipeline-Core.html#v:PipeCoreSimplify\",\"http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Pipeline.html#v:PipeCoreSimplify\"]"
        },
        "index": {
          "hierarchy": "DDC Build Pipeline Core",
          "module": "DDC.Build.Pipeline.Core",
          "name": "PipeCoreSimplify",
          "normalized": "(Fragment a b)-\u003ec-\u003e(Simplifier c d a)-\u003e[PipeCore()a]-\u003ePipeCore d a",
          "package": "ddc-build",
          "partial": "Pipe Core Simplify",
          "signature": "(Fragment n err)-\u003es-\u003e(Simplifier s a n)-\u003e[PipeCore()n]-\u003ePipeCore a n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Pipeline-Core.html#v:PipeCoreSimplify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"DDC.Build.Pipeline.Core\",\"DDC.Build.Pipeline\"]",
          "name": "PipeFlowLower",
          "package": "ddc-build",
          "signature": "[PipeCore () Name] -\u003e PipeFlow (AnTEC () Name)",
          "source": "src/DDC-Build-Pipeline-Core.html#PipeFlow",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Pipeline-Core.html#v:PipeFlowLower\",\"http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Pipeline.html#v:PipeFlowLower\"]"
        },
        "index": {
          "hierarchy": "DDC Build Pipeline Core",
          "module": "DDC.Build.Pipeline.Core",
          "name": "PipeFlowLower",
          "normalized": "[PipeCore()Name]-\u003ePipeFlow(AnTEC()Name)",
          "package": "ddc-build",
          "partial": "Pipe Flow Lower",
          "signature": "[PipeCore()Name]-\u003ePipeFlow(AnTEC()Name)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Pipeline-Core.html#v:PipeFlowLower"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"DDC.Build.Pipeline.Core\",\"DDC.Build.Pipeline\"]",
          "name": "PipeFlowOutput",
          "package": "ddc-build",
          "signature": "Sink -\u003e PipeFlow a",
          "source": "src/DDC-Build-Pipeline-Core.html#PipeFlow",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Pipeline-Core.html#v:PipeFlowOutput\",\"http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Pipeline.html#v:PipeFlowOutput\"]"
        },
        "index": {
          "hierarchy": "DDC Build Pipeline Core",
          "module": "DDC.Build.Pipeline.Core",
          "name": "PipeFlowOutput",
          "normalized": "Sink-\u003ePipeFlow a",
          "package": "ddc-build",
          "partial": "Pipe Flow Output",
          "signature": "Sink-\u003ePipeFlow a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Pipeline-Core.html#v:PipeFlowOutput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"DDC.Build.Pipeline.Core\",\"DDC.Build.Pipeline\"]",
          "name": "PipeFlowPrep",
          "package": "ddc-build",
          "signature": "[PipeCore a Name] -\u003e PipeFlow a",
          "source": "src/DDC-Build-Pipeline-Core.html#PipeFlow",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Pipeline-Core.html#v:PipeFlowPrep\",\"http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Pipeline.html#v:PipeFlowPrep\"]"
        },
        "index": {
          "hierarchy": "DDC Build Pipeline Core",
          "module": "DDC.Build.Pipeline.Core",
          "name": "PipeFlowPrep",
          "normalized": "[PipeCore a Name]-\u003ePipeFlow a",
          "package": "ddc-build",
          "partial": "Pipe Flow Prep",
          "signature": "[PipeCore a Name]-\u003ePipeFlow a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Pipeline-Core.html#v:PipeFlowPrep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"DDC.Build.Pipeline.Core\",\"DDC.Build.Pipeline\"]",
          "name": "PipeFlowWind",
          "package": "ddc-build",
          "signature": "[PipeCore () Name] -\u003e PipeFlow (AnTEC () Name)",
          "source": "src/DDC-Build-Pipeline-Core.html#PipeFlow",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Pipeline-Core.html#v:PipeFlowWind\",\"http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Pipeline.html#v:PipeFlowWind\"]"
        },
        "index": {
          "hierarchy": "DDC Build Pipeline Core",
          "module": "DDC.Build.Pipeline.Core",
          "name": "PipeFlowWind",
          "normalized": "[PipeCore()Name]-\u003ePipeFlow(AnTEC()Name)",
          "package": "ddc-build",
          "partial": "Pipe Flow Wind",
          "signature": "[PipeCore()Name]-\u003ePipeFlow(AnTEC()Name)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Pipeline-Core.html#v:PipeFlowWind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOutput the module in core language syntax.\n\u003c/p\u003e",
          "module": "[\"DDC.Build.Pipeline.Core\",\"DDC.Build.Pipeline\"]",
          "name": "PipeLiteOutput",
          "package": "ddc-build",
          "signature": "PipeLiteOutput !Sink",
          "source": "src/DDC-Build-Pipeline-Core.html#PipeLite",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Pipeline-Core.html#v:PipeLiteOutput\",\"http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Pipeline.html#v:PipeLiteOutput\"]"
        },
        "index": {
          "description": "Output the module in core language syntax",
          "hierarchy": "DDC Build Pipeline Core",
          "module": "DDC.Build.Pipeline.Core",
          "name": "PipeLiteOutput",
          "package": "ddc-build",
          "partial": "Pipe Lite Output",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Pipeline-Core.html#v:PipeLiteOutput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert the module to the Core Salt Fragment.\n\u003c/p\u003e",
          "module": "[\"DDC.Build.Pipeline.Core\",\"DDC.Build.Pipeline\"]",
          "name": "PipeLiteToSalt",
          "package": "ddc-build",
          "signature": "PipeLiteToSalt !Platform !Config ![PipeCore () Name]",
          "source": "src/DDC-Build-Pipeline-Core.html#PipeLite",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Pipeline-Core.html#v:PipeLiteToSalt\",\"http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Pipeline.html#v:PipeLiteToSalt\"]"
        },
        "index": {
          "description": "Convert the module to the Core Salt Fragment",
          "hierarchy": "DDC Build Pipeline Core",
          "module": "DDC.Build.Pipeline.Core",
          "name": "PipeLiteToSalt",
          "normalized": "PipeLiteToSalt Platform Config[PipeCore()Name]",
          "package": "ddc-build",
          "partial": "Pipe Lite To Salt",
          "signature": "PipeLiteToSalt Platform Config[PipeCore()Name]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Pipeline-Core.html#v:PipeLiteToSalt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProcess a Core module.\n\u003c/p\u003e\u003cp\u003eReturns empty list on success.\n\u003c/p\u003e",
          "module": "[\"DDC.Build.Pipeline.Core\",\"DDC.Build.Pipeline\"]",
          "name": "pipeCore",
          "package": "ddc-build",
          "signature": "Module a n -\u003e PipeCore a n -\u003e IO [Error]",
          "source": "src/DDC-Build-Pipeline-Core.html#pipeCore",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Pipeline-Core.html#v:pipeCore\",\"http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Pipeline.html#v:pipeCore\"]"
        },
        "index": {
          "description": "Process Core module Returns empty list on success",
          "hierarchy": "DDC Build Pipeline Core",
          "module": "DDC.Build.Pipeline.Core",
          "name": "pipeCore",
          "normalized": "Module a b-\u003ePipeCore a b-\u003eIO[Error]",
          "package": "ddc-build",
          "partial": "Core",
          "signature": "Module a n-\u003ePipeCore a n-\u003eIO[Error]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Pipeline-Core.html#v:pipeCore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Build.Pipeline.Core",
          "name": "pipeCores",
          "package": "ddc-build",
          "signature": "Module a n -\u003e [PipeCore a n] -\u003e IO [Error]",
          "source": "src/DDC-Build-Pipeline-Core.html#pipeCores",
          "type": "function"
        },
        "index": {
          "hierarchy": "DDC Build Pipeline Core",
          "module": "DDC.Build.Pipeline.Core",
          "name": "pipeCores",
          "normalized": "Module a b-\u003e[PipeCore a b]-\u003eIO[Error]",
          "package": "ddc-build",
          "partial": "Cores",
          "signature": "Module a n-\u003e[PipeCore a n]-\u003eIO[Error]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Pipeline-Core.html#v:pipeCores"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProcess a Core Flow module.\n\u003c/p\u003e",
          "module": "[\"DDC.Build.Pipeline.Core\",\"DDC.Build.Pipeline\"]",
          "name": "pipeFlow",
          "package": "ddc-build",
          "signature": "Module a Name -\u003e PipeFlow a -\u003e IO [Error]",
          "source": "src/DDC-Build-Pipeline-Core.html#pipeFlow",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Pipeline-Core.html#v:pipeFlow\",\"http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Pipeline.html#v:pipeFlow\"]"
        },
        "index": {
          "description": "Process Core Flow module",
          "hierarchy": "DDC Build Pipeline Core",
          "module": "DDC.Build.Pipeline.Core",
          "name": "pipeFlow",
          "normalized": "Module a Name-\u003ePipeFlow a-\u003eIO[Error]",
          "package": "ddc-build",
          "partial": "Flow",
          "signature": "Module a Name-\u003ePipeFlow a-\u003eIO[Error]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Pipeline-Core.html#v:pipeFlow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProcess a Core Lite module.\n\u003c/p\u003e",
          "module": "[\"DDC.Build.Pipeline.Core\",\"DDC.Build.Pipeline\"]",
          "name": "pipeLite",
          "package": "ddc-build",
          "signature": "Module (AnTEC () Name) Name -\u003e PipeLite -\u003e IO [Error]",
          "source": "src/DDC-Build-Pipeline-Core.html#pipeLite",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Pipeline-Core.html#v:pipeLite\",\"http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Pipeline.html#v:pipeLite\"]"
        },
        "index": {
          "description": "Process Core Lite module",
          "hierarchy": "DDC Build Pipeline Core",
          "module": "DDC.Build.Pipeline.Core",
          "name": "pipeLite",
          "normalized": "Module(AnTEC()Name)Name-\u003ePipeLite-\u003eIO[Error]",
          "package": "ddc-build",
          "partial": "Lite",
          "signature": "Module(AnTEC()Name)Name-\u003ePipeLite-\u003eIO[Error]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Pipeline-Core.html#v:pipeLite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Build.Pipeline.Error",
          "name": "Error",
          "package": "ddc-build",
          "source": "src/DDC-Build-Pipeline-Error.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "DDC Build Pipeline Error",
          "module": "DDC.Build.Pipeline.Error",
          "name": "Error",
          "package": "ddc-build",
          "partial": "Error",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Pipeline-Error.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Build.Pipeline.Error",
          "name": "Error",
          "package": "ddc-build",
          "source": "src/DDC-Build-Pipeline-Error.html#Error",
          "type": "data"
        },
        "index": {
          "hierarchy": "DDC Build Pipeline Error",
          "module": "DDC.Build.Pipeline.Error",
          "name": "Error",
          "package": "ddc-build",
          "partial": "Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Pipeline-Error.html#t:Error"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eError when type checking a transformed module.\n   Blame it on the compiler.\n\u003c/p\u003e",
          "module": "[\"DDC.Build.Pipeline.Error\",\"DDC.Build.Pipeline\"]",
          "name": "ErrorLint",
          "package": "ddc-build",
          "signature": "ErrorLint !err",
          "source": "src/DDC-Build-Pipeline-Error.html#Error",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Pipeline-Error.html#v:ErrorLint\",\"http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Pipeline.html#v:ErrorLint\"]"
        },
        "index": {
          "description": "Error when type checking transformed module Blame it on the compiler",
          "hierarchy": "DDC Build Pipeline Error",
          "module": "DDC.Build.Pipeline.Error",
          "name": "ErrorLint",
          "package": "ddc-build",
          "partial": "Error Lint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Pipeline-Error.html#v:ErrorLint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eError converting the module to Disciple Core Lite.\n\u003c/p\u003e",
          "module": "[\"DDC.Build.Pipeline.Error\",\"DDC.Build.Pipeline\"]",
          "name": "ErrorLiteConvert",
          "package": "ddc-build",
          "signature": "ErrorLiteConvert !err",
          "source": "src/DDC-Build-Pipeline-Error.html#Error",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Pipeline-Error.html#v:ErrorLiteConvert\",\"http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Pipeline.html#v:ErrorLiteConvert\"]"
        },
        "index": {
          "description": "Error converting the module to Disciple Core Lite",
          "hierarchy": "DDC Build Pipeline Error",
          "module": "DDC.Build.Pipeline.Error",
          "name": "ErrorLiteConvert",
          "package": "ddc-build",
          "partial": "Error Lite Convert",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Pipeline-Error.html#v:ErrorLiteConvert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eError when loading a module.\n   Blame it on the user.\n\u003c/p\u003e",
          "module": "[\"DDC.Build.Pipeline.Error\",\"DDC.Build.Pipeline\"]",
          "name": "ErrorLoad",
          "package": "ddc-build",
          "signature": "ErrorLoad !err",
          "source": "src/DDC-Build-Pipeline-Error.html#Error",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Pipeline-Error.html#v:ErrorLoad\",\"http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Pipeline.html#v:ErrorLoad\"]"
        },
        "index": {
          "description": "Error when loading module Blame it on the user",
          "hierarchy": "DDC Build Pipeline Error",
          "module": "DDC.Build.Pipeline.Error",
          "name": "ErrorLoad",
          "package": "ddc-build",
          "partial": "Error Load",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Pipeline-Error.html#v:ErrorLoad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eError converting the module to Disciple Core Salt.\n\u003c/p\u003e",
          "module": "[\"DDC.Build.Pipeline.Error\",\"DDC.Build.Pipeline\"]",
          "name": "ErrorSaltConvert",
          "package": "ddc-build",
          "signature": "ErrorSaltConvert !err",
          "source": "src/DDC-Build-Pipeline-Error.html#Error",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Pipeline-Error.html#v:ErrorSaltConvert\",\"http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Pipeline.html#v:ErrorSaltConvert\"]"
        },
        "index": {
          "description": "Error converting the module to Disciple Core Salt",
          "hierarchy": "DDC Build Pipeline Error",
          "module": "DDC.Build.Pipeline.Error",
          "name": "ErrorSaltConvert",
          "package": "ddc-build",
          "partial": "Error Salt Convert",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Pipeline-Error.html#v:ErrorSaltConvert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"DDC.Build.Pipeline.Error\",\"DDC.Build.Pipeline\"]",
          "name": "ErrorSaltLoad",
          "package": "ddc-build",
          "signature": "ErrorSaltLoad (Error Name)",
          "source": "src/DDC-Build-Pipeline-Error.html#Error",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Pipeline-Error.html#v:ErrorSaltLoad\",\"http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Pipeline.html#v:ErrorSaltLoad\"]"
        },
        "index": {
          "hierarchy": "DDC Build Pipeline Error",
          "module": "DDC.Build.Pipeline.Error",
          "name": "ErrorSaltLoad",
          "package": "ddc-build",
          "partial": "Error Salt Load",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Pipeline-Error.html#v:ErrorSaltLoad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Build.Pipeline.Llvm",
          "name": "Llvm",
          "package": "ddc-build",
          "source": "src/DDC-Build-Pipeline-Llvm.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "DDC Build Pipeline Llvm",
          "module": "DDC.Build.Pipeline.Llvm",
          "name": "Llvm",
          "package": "ddc-build",
          "partial": "Llvm",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Pipeline-Llvm.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProcess an LLVM module.\n\u003c/p\u003e",
          "module": "DDC.Build.Pipeline.Llvm",
          "name": "PipeLlvm",
          "package": "ddc-build",
          "source": "src/DDC-Build-Pipeline-Llvm.html#PipeLlvm",
          "type": "data"
        },
        "index": {
          "description": "Process an LLVM module",
          "hierarchy": "DDC Build Pipeline Llvm",
          "module": "DDC.Build.Pipeline.Llvm",
          "name": "PipeLlvm",
          "package": "ddc-build",
          "partial": "Pipe Llvm",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Pipeline-Llvm.html#t:PipeLlvm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"DDC.Build.Pipeline.Llvm\",\"DDC.Build.Pipeline\"]",
          "name": "PipeLlvmCompile",
          "package": "ddc-build",
          "signature": "PipeLlvmCompile",
          "source": "src/DDC-Build-Pipeline-Llvm.html#PipeLlvm",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Pipeline-Llvm.html#v:PipeLlvmCompile\",\"http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Pipeline.html#v:PipeLlvmCompile\"]"
        },
        "index": {
          "hierarchy": "DDC Build Pipeline Llvm",
          "module": "DDC.Build.Pipeline.Llvm",
          "name": "PipeLlvmCompile",
          "package": "ddc-build",
          "partial": "Pipe Llvm Compile",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Pipeline-Llvm.html#v:PipeLlvmCompile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"DDC.Build.Pipeline.Llvm\",\"DDC.Build.Pipeline\"]",
          "name": "PipeLlvmPrint",
          "package": "ddc-build",
          "signature": "PipeLlvmPrint Sink",
          "source": "src/DDC-Build-Pipeline-Llvm.html#PipeLlvm",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Pipeline-Llvm.html#v:PipeLlvmPrint\",\"http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Pipeline.html#v:PipeLlvmPrint\"]"
        },
        "index": {
          "hierarchy": "DDC Build Pipeline Llvm",
          "module": "DDC.Build.Pipeline.Llvm",
          "name": "PipeLlvmPrint",
          "package": "ddc-build",
          "partial": "Pipe Llvm Print",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Pipeline-Llvm.html#v:PipeLlvmPrint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"DDC.Build.Pipeline.Llvm\",\"DDC.Build.Pipeline\"]",
          "name": "pipeBuilder",
          "package": "ddc-build",
          "signature": "Builder",
          "source": "src/DDC-Build-Pipeline-Llvm.html#PipeLlvm",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Pipeline-Llvm.html#v:pipeBuilder\",\"http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Pipeline.html#v:pipeBuilder\"]"
        },
        "index": {
          "hierarchy": "DDC Build Pipeline Llvm",
          "module": "DDC.Build.Pipeline.Llvm",
          "name": "pipeBuilder",
          "package": "ddc-build",
          "partial": "Builder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Pipeline-Llvm.html#v:pipeBuilder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"DDC.Build.Pipeline.Llvm\",\"DDC.Build.Pipeline\"]",
          "name": "pipeFileAsm",
          "package": "ddc-build",
          "signature": "FilePath",
          "source": "src/DDC-Build-Pipeline-Llvm.html#PipeLlvm",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Pipeline-Llvm.html#v:pipeFileAsm\",\"http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Pipeline.html#v:pipeFileAsm\"]"
        },
        "index": {
          "hierarchy": "DDC Build Pipeline Llvm",
          "module": "DDC.Build.Pipeline.Llvm",
          "name": "pipeFileAsm",
          "package": "ddc-build",
          "partial": "File Asm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Pipeline-Llvm.html#v:pipeFileAsm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"DDC.Build.Pipeline.Llvm\",\"DDC.Build.Pipeline\"]",
          "name": "pipeFileExe",
          "package": "ddc-build",
          "signature": "Maybe FilePath",
          "source": "src/DDC-Build-Pipeline-Llvm.html#PipeLlvm",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Pipeline-Llvm.html#v:pipeFileExe\",\"http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Pipeline.html#v:pipeFileExe\"]"
        },
        "index": {
          "hierarchy": "DDC Build Pipeline Llvm",
          "module": "DDC.Build.Pipeline.Llvm",
          "name": "pipeFileExe",
          "package": "ddc-build",
          "partial": "File Exe",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Pipeline-Llvm.html#v:pipeFileExe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"DDC.Build.Pipeline.Llvm\",\"DDC.Build.Pipeline\"]",
          "name": "pipeFileLlvm",
          "package": "ddc-build",
          "signature": "FilePath",
          "source": "src/DDC-Build-Pipeline-Llvm.html#PipeLlvm",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Pipeline-Llvm.html#v:pipeFileLlvm\",\"http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Pipeline.html#v:pipeFileLlvm\"]"
        },
        "index": {
          "hierarchy": "DDC Build Pipeline Llvm",
          "module": "DDC.Build.Pipeline.Llvm",
          "name": "pipeFileLlvm",
          "package": "ddc-build",
          "partial": "File Llvm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Pipeline-Llvm.html#v:pipeFileLlvm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"DDC.Build.Pipeline.Llvm\",\"DDC.Build.Pipeline\"]",
          "name": "pipeFileObject",
          "package": "ddc-build",
          "signature": "FilePath",
          "source": "src/DDC-Build-Pipeline-Llvm.html#PipeLlvm",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Pipeline-Llvm.html#v:pipeFileObject\",\"http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Pipeline.html#v:pipeFileObject\"]"
        },
        "index": {
          "hierarchy": "DDC Build Pipeline Llvm",
          "module": "DDC.Build.Pipeline.Llvm",
          "name": "pipeFileObject",
          "package": "ddc-build",
          "partial": "File Object",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Pipeline-Llvm.html#v:pipeFileObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"DDC.Build.Pipeline.Llvm\",\"DDC.Build.Pipeline\"]",
          "name": "pipeKeepAsmFiles",
          "package": "ddc-build",
          "signature": "Bool",
          "source": "src/DDC-Build-Pipeline-Llvm.html#PipeLlvm",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Pipeline-Llvm.html#v:pipeKeepAsmFiles\",\"http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Pipeline.html#v:pipeKeepAsmFiles\"]"
        },
        "index": {
          "hierarchy": "DDC Build Pipeline Llvm",
          "module": "DDC.Build.Pipeline.Llvm",
          "name": "pipeKeepAsmFiles",
          "package": "ddc-build",
          "partial": "Keep Asm Files",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Pipeline-Llvm.html#v:pipeKeepAsmFiles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"DDC.Build.Pipeline.Llvm\",\"DDC.Build.Pipeline\"]",
          "name": "pipeKeepLlvmFiles",
          "package": "ddc-build",
          "signature": "Bool",
          "source": "src/DDC-Build-Pipeline-Llvm.html#PipeLlvm",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Pipeline-Llvm.html#v:pipeKeepLlvmFiles\",\"http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Pipeline.html#v:pipeKeepLlvmFiles\"]"
        },
        "index": {
          "hierarchy": "DDC Build Pipeline Llvm",
          "module": "DDC.Build.Pipeline.Llvm",
          "name": "pipeKeepLlvmFiles",
          "package": "ddc-build",
          "partial": "Keep Llvm Files",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Pipeline-Llvm.html#v:pipeKeepLlvmFiles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProcess an LLVM module.\n\u003c/p\u003e\u003cp\u003eReturns empty list on success.\n\u003c/p\u003e",
          "module": "[\"DDC.Build.Pipeline.Llvm\",\"DDC.Build.Pipeline\"]",
          "name": "pipeLlvm",
          "package": "ddc-build",
          "signature": "Module -\u003e PipeLlvm -\u003e IO [Error]",
          "source": "src/DDC-Build-Pipeline-Llvm.html#pipeLlvm",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Pipeline-Llvm.html#v:pipeLlvm\",\"http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Pipeline.html#v:pipeLlvm\"]"
        },
        "index": {
          "description": "Process an LLVM module Returns empty list on success",
          "hierarchy": "DDC Build Pipeline Llvm",
          "module": "DDC.Build.Pipeline.Llvm",
          "name": "pipeLlvm",
          "normalized": "Module-\u003ePipeLlvm-\u003eIO[Error]",
          "package": "ddc-build",
          "partial": "Llvm",
          "signature": "Module-\u003ePipeLlvm-\u003eIO[Error]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Pipeline-Llvm.html#v:pipeLlvm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Build.Pipeline.Salt",
          "name": "Salt",
          "package": "ddc-build",
          "source": "src/DDC-Build-Pipeline-Salt.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "DDC Build Pipeline Salt",
          "module": "DDC.Build.Pipeline.Salt",
          "name": "Salt",
          "package": "ddc-build",
          "partial": "Salt",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Pipeline-Salt.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProcess a Core Salt module.\n\u003c/p\u003e",
          "module": "DDC.Build.Pipeline.Salt",
          "name": "PipeSalt",
          "package": "ddc-build",
          "source": "src/DDC-Build-Pipeline-Salt.html#PipeSalt",
          "type": "data"
        },
        "index": {
          "description": "Process Core Salt module",
          "hierarchy": "DDC Build Pipeline Salt",
          "module": "DDC.Build.Pipeline.Salt",
          "name": "PipeSalt",
          "package": "ddc-build",
          "partial": "Pipe Salt",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Pipeline-Salt.html#t:PipeSalt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"DDC.Build.Pipeline.Salt\",\"DDC.Build.Pipeline\"]",
          "name": "PipeSaltCompile",
          "package": "ddc-build",
          "signature": "Platform -\u003e !Builder -\u003e !FilePath -\u003e !FilePath -\u003e !(Maybe FilePath) -\u003e !Bool -\u003e PipeSalt a",
          "source": "src/DDC-Build-Pipeline-Salt.html#PipeSalt",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Pipeline-Salt.html#v:PipeSaltCompile\",\"http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Pipeline.html#v:PipeSaltCompile\"]"
        },
        "index": {
          "hierarchy": "DDC Build Pipeline Salt",
          "module": "DDC.Build.Pipeline.Salt",
          "name": "PipeSaltCompile",
          "normalized": "Platform-\u003eBuilder-\u003eFilePath-\u003eFilePath-\u003e(Maybe FilePath)-\u003eBool-\u003ePipeSalt a",
          "package": "ddc-build",
          "partial": "Pipe Salt Compile",
          "signature": "Platform-\u003eBuilder-\u003eFilePath-\u003eFilePath-\u003e(Maybe FilePath)-\u003eBool-\u003ePipeSalt a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Pipeline-Salt.html#v:PipeSaltCompile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"DDC.Build.Pipeline.Salt\",\"DDC.Build.Pipeline\"]",
          "name": "PipeSaltId",
          "package": "ddc-build",
          "signature": "[PipeSalt a] -\u003e PipeSalt a",
          "source": "src/DDC-Build-Pipeline-Salt.html#PipeSalt",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Pipeline-Salt.html#v:PipeSaltId\",\"http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Pipeline.html#v:PipeSaltId\"]"
        },
        "index": {
          "hierarchy": "DDC Build Pipeline Salt",
          "module": "DDC.Build.Pipeline.Salt",
          "name": "PipeSaltId",
          "normalized": "[PipeSalt a]-\u003ePipeSalt a",
          "package": "ddc-build",
          "partial": "Pipe Salt Id",
          "signature": "[PipeSalt a]-\u003ePipeSalt a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Pipeline-Salt.html#v:PipeSaltId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"DDC.Build.Pipeline.Salt\",\"DDC.Build.Pipeline\"]",
          "name": "PipeSaltOutput",
          "package": "ddc-build",
          "signature": "Sink -\u003e PipeSalt a",
          "source": "src/DDC-Build-Pipeline-Salt.html#PipeSalt",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Pipeline-Salt.html#v:PipeSaltOutput\",\"http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Pipeline.html#v:PipeSaltOutput\"]"
        },
        "index": {
          "hierarchy": "DDC Build Pipeline Salt",
          "module": "DDC.Build.Pipeline.Salt",
          "name": "PipeSaltOutput",
          "normalized": "Sink-\u003ePipeSalt a",
          "package": "ddc-build",
          "partial": "Pipe Salt Output",
          "signature": "Sink-\u003ePipeSalt a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Pipeline-Salt.html#v:PipeSaltOutput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"DDC.Build.Pipeline.Salt\",\"DDC.Build.Pipeline\"]",
          "name": "PipeSaltPrint",
          "package": "ddc-build",
          "signature": "Bool -\u003e !Platform -\u003e !Sink -\u003e PipeSalt a",
          "source": "src/DDC-Build-Pipeline-Salt.html#PipeSalt",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Pipeline-Salt.html#v:PipeSaltPrint\",\"http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Pipeline.html#v:PipeSaltPrint\"]"
        },
        "index": {
          "hierarchy": "DDC Build Pipeline Salt",
          "module": "DDC.Build.Pipeline.Salt",
          "name": "PipeSaltPrint",
          "normalized": "Bool-\u003ePlatform-\u003eSink-\u003ePipeSalt a",
          "package": "ddc-build",
          "partial": "Pipe Salt Print",
          "signature": "Bool-\u003ePlatform-\u003eSink-\u003ePipeSalt a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Pipeline-Salt.html#v:PipeSaltPrint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"DDC.Build.Pipeline.Salt\",\"DDC.Build.Pipeline\"]",
          "name": "PipeSaltToLlvm",
          "package": "ddc-build",
          "signature": "Platform -\u003e ![PipeLlvm] -\u003e PipeSalt a",
          "source": "src/DDC-Build-Pipeline-Salt.html#PipeSalt",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Pipeline-Salt.html#v:PipeSaltToLlvm\",\"http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Pipeline.html#v:PipeSaltToLlvm\"]"
        },
        "index": {
          "hierarchy": "DDC Build Pipeline Salt",
          "module": "DDC.Build.Pipeline.Salt",
          "name": "PipeSaltToLlvm",
          "normalized": "Platform-\u003e[PipeLlvm]-\u003ePipeSalt a",
          "package": "ddc-build",
          "partial": "Pipe Salt To Llvm",
          "signature": "Platform-\u003e[PipeLlvm]-\u003ePipeSalt a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Pipeline-Salt.html#v:PipeSaltToLlvm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"DDC.Build.Pipeline.Salt\",\"DDC.Build.Pipeline\"]",
          "name": "PipeSaltTransfer",
          "package": "ddc-build",
          "signature": "[PipeSalt (AnTEC a Name)] -\u003e PipeSalt (AnTEC a Name)",
          "source": "src/DDC-Build-Pipeline-Salt.html#PipeSalt",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Pipeline-Salt.html#v:PipeSaltTransfer\",\"http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Pipeline.html#v:PipeSaltTransfer\"]"
        },
        "index": {
          "hierarchy": "DDC Build Pipeline Salt",
          "module": "DDC.Build.Pipeline.Salt",
          "name": "PipeSaltTransfer",
          "normalized": "[PipeSalt(AnTEC a Name)]-\u003ePipeSalt(AnTEC a Name)",
          "package": "ddc-build",
          "partial": "Pipe Salt Transfer",
          "signature": "[PipeSalt(AnTEC a Name)]-\u003ePipeSalt(AnTEC a Name)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Pipeline-Salt.html#v:PipeSaltTransfer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProcess a Core Salt module.\n\u003c/p\u003e\u003cp\u003eReturns empty list on success.\n\u003c/p\u003e",
          "module": "[\"DDC.Build.Pipeline.Salt\",\"DDC.Build.Pipeline\"]",
          "name": "pipeSalt",
          "package": "ddc-build",
          "signature": "Module a Name -\u003e PipeSalt a -\u003e IO [Error]",
          "source": "src/DDC-Build-Pipeline-Salt.html#pipeSalt",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Pipeline-Salt.html#v:pipeSalt\",\"http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Pipeline.html#v:pipeSalt\"]"
        },
        "index": {
          "description": "Process Core Salt module Returns empty list on success",
          "hierarchy": "DDC Build Pipeline Salt",
          "module": "DDC.Build.Pipeline.Salt",
          "name": "pipeSalt",
          "normalized": "Module a Name-\u003ePipeSalt a-\u003eIO[Error]",
          "package": "ddc-build",
          "partial": "Salt",
          "signature": "Module a Name-\u003ePipeSalt a-\u003eIO[Error]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Pipeline-Salt.html#v:pipeSalt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Build.Pipeline.Sink",
          "name": "Sink",
          "package": "ddc-build",
          "source": "src/DDC-Build-Pipeline-Sink.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "DDC Build Pipeline Sink",
          "module": "DDC.Build.Pipeline.Sink",
          "name": "Sink",
          "package": "ddc-build",
          "partial": "Sink",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Pipeline-Sink.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhat to do with program text.\n\u003c/p\u003e",
          "module": "DDC.Build.Pipeline.Sink",
          "name": "Sink",
          "package": "ddc-build",
          "source": "src/DDC-Build-Pipeline-Sink.html#Sink",
          "type": "data"
        },
        "index": {
          "description": "What to do with program text",
          "hierarchy": "DDC Build Pipeline Sink",
          "module": "DDC.Build.Pipeline.Sink",
          "name": "Sink",
          "package": "ddc-build",
          "partial": "Sink",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Pipeline-Sink.html#t:Sink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDrop it on the floor.\n\u003c/p\u003e",
          "module": "[\"DDC.Build.Pipeline.Sink\",\"DDC.Build.Pipeline\"]",
          "name": "SinkDiscard",
          "package": "ddc-build",
          "signature": "SinkDiscard",
          "source": "src/DDC-Build-Pipeline-Sink.html#Sink",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Pipeline-Sink.html#v:SinkDiscard\",\"http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Pipeline.html#v:SinkDiscard\"]"
        },
        "index": {
          "description": "Drop it on the floor",
          "hierarchy": "DDC Build Pipeline Sink",
          "module": "DDC.Build.Pipeline.Sink",
          "name": "SinkDiscard",
          "package": "ddc-build",
          "partial": "Sink Discard",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Pipeline-Sink.html#v:SinkDiscard"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite it to this file.\n\u003c/p\u003e",
          "module": "[\"DDC.Build.Pipeline.Sink\",\"DDC.Build.Pipeline\"]",
          "name": "SinkFile",
          "package": "ddc-build",
          "signature": "SinkFile FilePath",
          "source": "src/DDC-Build-Pipeline-Sink.html#Sink",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Pipeline-Sink.html#v:SinkFile\",\"http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Pipeline.html#v:SinkFile\"]"
        },
        "index": {
          "description": "Write it to this file",
          "hierarchy": "DDC Build Pipeline Sink",
          "module": "DDC.Build.Pipeline.Sink",
          "name": "SinkFile",
          "package": "ddc-build",
          "partial": "Sink File",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Pipeline-Sink.html#v:SinkFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEmit it to stdout.\n\u003c/p\u003e",
          "module": "[\"DDC.Build.Pipeline.Sink\",\"DDC.Build.Pipeline\"]",
          "name": "SinkStdout",
          "package": "ddc-build",
          "signature": "SinkStdout",
          "source": "src/DDC-Build-Pipeline-Sink.html#Sink",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Pipeline-Sink.html#v:SinkStdout\",\"http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Pipeline.html#v:SinkStdout\"]"
        },
        "index": {
          "description": "Emit it to stdout",
          "hierarchy": "DDC Build Pipeline Sink",
          "module": "DDC.Build.Pipeline.Sink",
          "name": "SinkStdout",
          "package": "ddc-build",
          "partial": "Sink Stdout",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Pipeline-Sink.html#v:SinkStdout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEmit a string to the given \u003ccode\u003e\u003ca\u003eSink\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"DDC.Build.Pipeline.Sink\",\"DDC.Build.Pipeline\"]",
          "name": "pipeSink",
          "package": "ddc-build",
          "signature": "String -\u003e Sink -\u003e IO [Error]",
          "source": "src/DDC-Build-Pipeline-Sink.html#pipeSink",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Pipeline-Sink.html#v:pipeSink\",\"http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Pipeline.html#v:pipeSink\"]"
        },
        "index": {
          "description": "Emit string to the given Sink",
          "hierarchy": "DDC Build Pipeline Sink",
          "module": "DDC.Build.Pipeline.Sink",
          "name": "pipeSink",
          "normalized": "String-\u003eSink-\u003eIO[Error]",
          "package": "ddc-build",
          "partial": "Sink",
          "signature": "String-\u003eSink-\u003eIO[Error]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Pipeline-Sink.html#v:pipeSink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Build.Pipeline.Text",
          "name": "Text",
          "package": "ddc-build",
          "source": "src/DDC-Build-Pipeline-Text.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "DDC Build Pipeline Text",
          "module": "DDC.Build.Pipeline.Text",
          "name": "Text",
          "package": "ddc-build",
          "partial": "Text",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Pipeline-Text.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProcess program text.\n\u003c/p\u003e",
          "module": "DDC.Build.Pipeline.Text",
          "name": "PipeText",
          "package": "ddc-build",
          "source": "src/DDC-Build-Pipeline-Text.html#PipeText",
          "type": "data"
        },
        "index": {
          "description": "Process program text",
          "hierarchy": "DDC Build Pipeline Text",
          "module": "DDC.Build.Pipeline.Text",
          "name": "PipeText",
          "package": "ddc-build",
          "partial": "Pipe Text",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Pipeline-Text.html#t:PipeText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"DDC.Build.Pipeline.Text\",\"DDC.Build.Pipeline\"]",
          "name": "PipeTextLoadCore",
          "package": "ddc-build",
          "signature": "(Fragment n err) -\u003e ![PipeCore (AnTEC SourcePos n) n] -\u003e PipeText n err",
          "source": "src/DDC-Build-Pipeline-Text.html#PipeText",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Pipeline-Text.html#v:PipeTextLoadCore\",\"http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Pipeline.html#v:PipeTextLoadCore\"]"
        },
        "index": {
          "hierarchy": "DDC Build Pipeline Text",
          "module": "DDC.Build.Pipeline.Text",
          "name": "PipeTextLoadCore",
          "normalized": "(Fragment a b)-\u003e[PipeCore(AnTEC SourcePos a)a]-\u003ePipeText a b",
          "package": "ddc-build",
          "partial": "Pipe Text Load Core",
          "signature": "(Fragment n err)-\u003e[PipeCore(AnTEC SourcePos n)n]-\u003ePipeText n err",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Pipeline-Text.html#v:PipeTextLoadCore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"DDC.Build.Pipeline.Text\",\"DDC.Build.Pipeline\"]",
          "name": "PipeTextOutput",
          "package": "ddc-build",
          "signature": "Sink -\u003e PipeText n err",
          "source": "src/DDC-Build-Pipeline-Text.html#PipeText",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Pipeline-Text.html#v:PipeTextOutput\",\"http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Pipeline.html#v:PipeTextOutput\"]"
        },
        "index": {
          "hierarchy": "DDC Build Pipeline Text",
          "module": "DDC.Build.Pipeline.Text",
          "name": "PipeTextOutput",
          "normalized": "Sink-\u003ePipeText a b",
          "package": "ddc-build",
          "partial": "Pipe Text Output",
          "signature": "Sink-\u003ePipeText n err",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Pipeline-Text.html#v:PipeTextOutput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProcess a text module.\n\u003c/p\u003e\u003cp\u003eReturns empty list on success.\n\u003c/p\u003e",
          "module": "[\"DDC.Build.Pipeline.Text\",\"DDC.Build.Pipeline\"]",
          "name": "pipeText",
          "package": "ddc-build",
          "signature": "String -\u003e Int -\u003e String -\u003e PipeText n err -\u003e IO [Error]",
          "source": "src/DDC-Build-Pipeline-Text.html#pipeText",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Pipeline-Text.html#v:pipeText\",\"http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Pipeline.html#v:pipeText\"]"
        },
        "index": {
          "description": "Process text module Returns empty list on success",
          "hierarchy": "DDC Build Pipeline Text",
          "module": "DDC.Build.Pipeline.Text",
          "name": "pipeText",
          "normalized": "String-\u003eInt-\u003eString-\u003ePipeText a b-\u003eIO[Error]",
          "package": "ddc-build",
          "partial": "Text",
          "signature": "String-\u003eInt-\u003eString-\u003ePipeText n err-\u003eIO[Error]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Pipeline-Text.html#v:pipeText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA pipeline is an abstraction of a single compiler pass.\n\u003c/p\u003e\u003cp\u003eNOTE: The Haddock documentation on pipeline constructors is missing\n        because Haddock does not support commenting GADTs.\n        See the source code for documentation.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "DDC.Build.Pipeline",
          "name": "Pipeline",
          "package": "ddc-build",
          "source": "src/DDC-Build-Pipeline.html",
          "type": "module"
        },
        "index": {
          "description": "pipeline is an abstraction of single compiler pass NOTE The Haddock documentation on pipeline constructors is missing because Haddock does not support commenting GADTs See the source code for documentation",
          "hierarchy": "DDC Build Pipeline",
          "module": "DDC.Build.Pipeline",
          "name": "Pipeline",
          "package": "ddc-build",
          "partial": "Pipeline",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Pipeline.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Build.Pipeline",
          "name": "Error",
          "package": "ddc-build",
          "source": "src/DDC-Build-Pipeline-Error.html#Error",
          "type": "data"
        },
        "index": {
          "hierarchy": "DDC Build Pipeline",
          "module": "DDC.Build.Pipeline",
          "name": "Error",
          "package": "ddc-build",
          "partial": "Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Pipeline.html#t:Error"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProcess a core module.\n\u003c/p\u003e",
          "module": "DDC.Build.Pipeline",
          "name": "PipeCore",
          "package": "ddc-build",
          "source": "src/DDC-Build-Pipeline-Core.html#PipeCore",
          "type": "data"
        },
        "index": {
          "description": "Process core module",
          "hierarchy": "DDC Build Pipeline",
          "module": "DDC.Build.Pipeline",
          "name": "PipeCore",
          "package": "ddc-build",
          "partial": "Pipe Core",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Pipeline.html#t:PipeCore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProcess a Core Flow module.\n\u003c/p\u003e",
          "module": "DDC.Build.Pipeline",
          "name": "PipeFlow",
          "package": "ddc-build",
          "source": "src/DDC-Build-Pipeline-Core.html#PipeFlow",
          "type": "data"
        },
        "index": {
          "description": "Process Core Flow module",
          "hierarchy": "DDC Build Pipeline",
          "module": "DDC.Build.Pipeline",
          "name": "PipeFlow",
          "package": "ddc-build",
          "partial": "Pipe Flow",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Pipeline.html#t:PipeFlow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProcess a Core Lite module.\n\u003c/p\u003e",
          "module": "DDC.Build.Pipeline",
          "name": "PipeLite",
          "package": "ddc-build",
          "source": "src/DDC-Build-Pipeline-Core.html#PipeLite",
          "type": "data"
        },
        "index": {
          "description": "Process Core Lite module",
          "hierarchy": "DDC Build Pipeline",
          "module": "DDC.Build.Pipeline",
          "name": "PipeLite",
          "package": "ddc-build",
          "partial": "Pipe Lite",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Pipeline.html#t:PipeLite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProcess an LLVM module.\n\u003c/p\u003e",
          "module": "DDC.Build.Pipeline",
          "name": "PipeLlvm",
          "package": "ddc-build",
          "source": "src/DDC-Build-Pipeline-Llvm.html#PipeLlvm",
          "type": "data"
        },
        "index": {
          "description": "Process an LLVM module",
          "hierarchy": "DDC Build Pipeline",
          "module": "DDC.Build.Pipeline",
          "name": "PipeLlvm",
          "package": "ddc-build",
          "partial": "Pipe Llvm",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Pipeline.html#t:PipeLlvm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProcess a Core Salt module.\n\u003c/p\u003e",
          "module": "DDC.Build.Pipeline",
          "name": "PipeSalt",
          "package": "ddc-build",
          "source": "src/DDC-Build-Pipeline-Salt.html#PipeSalt",
          "type": "data"
        },
        "index": {
          "description": "Process Core Salt module",
          "hierarchy": "DDC Build Pipeline",
          "module": "DDC.Build.Pipeline",
          "name": "PipeSalt",
          "package": "ddc-build",
          "partial": "Pipe Salt",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Pipeline.html#t:PipeSalt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProcess program text.\n\u003c/p\u003e",
          "module": "DDC.Build.Pipeline",
          "name": "PipeText",
          "package": "ddc-build",
          "source": "src/DDC-Build-Pipeline-Text.html#PipeText",
          "type": "data"
        },
        "index": {
          "description": "Process program text",
          "hierarchy": "DDC Build Pipeline",
          "module": "DDC.Build.Pipeline",
          "name": "PipeText",
          "package": "ddc-build",
          "partial": "Pipe Text",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Pipeline.html#t:PipeText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhat to do with program text.\n\u003c/p\u003e",
          "module": "DDC.Build.Pipeline",
          "name": "Sink",
          "package": "ddc-build",
          "source": "src/DDC-Build-Pipeline-Sink.html#Sink",
          "type": "data"
        },
        "index": {
          "description": "What to do with program text",
          "hierarchy": "DDC Build Pipeline",
          "module": "DDC.Build.Pipeline",
          "name": "Sink",
          "package": "ddc-build",
          "partial": "Sink",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Pipeline.html#t:Sink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Build.Platform",
          "name": "Platform",
          "package": "ddc-build",
          "source": "src/DDC-Build-Platform.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "DDC Build Platform",
          "module": "DDC.Build.Platform",
          "name": "Platform",
          "package": "ddc-build",
          "partial": "Platform",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Platform.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProcessor Architecture.\n\u003c/p\u003e",
          "module": "DDC.Build.Platform",
          "name": "Arch",
          "package": "ddc-build",
          "source": "src/DDC-Build-Platform.html#Arch",
          "type": "data"
        },
        "index": {
          "description": "Processor Architecture",
          "hierarchy": "DDC Build Platform",
          "module": "DDC.Build.Platform",
          "name": "Arch",
          "package": "ddc-build",
          "partial": "Arch",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Platform.html#t:Arch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOperating System.\n\u003c/p\u003e",
          "module": "DDC.Build.Platform",
          "name": "Os",
          "package": "ddc-build",
          "source": "src/DDC-Build-Platform.html#Os",
          "type": "data"
        },
        "index": {
          "description": "Operating System",
          "hierarchy": "DDC Build Platform",
          "module": "DDC.Build.Platform",
          "name": "Os",
          "package": "ddc-build",
          "partial": "Os",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Platform.html#t:Os"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDescribes a build or target platform.\n\u003c/p\u003e",
          "module": "DDC.Build.Platform",
          "name": "Platform",
          "package": "ddc-build",
          "source": "src/DDC-Build-Platform.html#Platform",
          "type": "data"
        },
        "index": {
          "description": "Describes build or target platform",
          "hierarchy": "DDC Build Platform",
          "module": "DDC.Build.Platform",
          "name": "Platform",
          "package": "ddc-build",
          "partial": "Platform",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Platform.html#t:Platform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Build.Platform",
          "name": "ArchPPC_32",
          "package": "ddc-build",
          "signature": "ArchPPC_32",
          "source": "src/DDC-Build-Platform.html#Arch",
          "type": "function"
        },
        "index": {
          "hierarchy": "DDC Build Platform",
          "module": "DDC.Build.Platform",
          "name": "ArchPPC_32",
          "package": "ddc-build",
          "partial": "Arch PPC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Platform.html#v:ArchPPC_32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Build.Platform",
          "name": "ArchPPC_64",
          "package": "ddc-build",
          "signature": "ArchPPC_64",
          "source": "src/DDC-Build-Platform.html#Arch",
          "type": "function"
        },
        "index": {
          "hierarchy": "DDC Build Platform",
          "module": "DDC.Build.Platform",
          "name": "ArchPPC_64",
          "package": "ddc-build",
          "partial": "Arch PPC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Platform.html#v:ArchPPC_64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Build.Platform",
          "name": "ArchX86_32",
          "package": "ddc-build",
          "signature": "ArchX86_32",
          "source": "src/DDC-Build-Platform.html#Arch",
          "type": "function"
        },
        "index": {
          "hierarchy": "DDC Build Platform",
          "module": "DDC.Build.Platform",
          "name": "ArchX86_32",
          "package": "ddc-build",
          "partial": "Arch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Platform.html#v:ArchX86_32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Build.Platform",
          "name": "ArchX86_64",
          "package": "ddc-build",
          "signature": "ArchX86_64",
          "source": "src/DDC-Build-Platform.html#Arch",
          "type": "function"
        },
        "index": {
          "hierarchy": "DDC Build Platform",
          "module": "DDC.Build.Platform",
          "name": "ArchX86_64",
          "package": "ddc-build",
          "partial": "Arch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Platform.html#v:ArchX86_64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Build.Platform",
          "name": "OsCygwin",
          "package": "ddc-build",
          "signature": "OsCygwin",
          "source": "src/DDC-Build-Platform.html#Os",
          "type": "function"
        },
        "index": {
          "hierarchy": "DDC Build Platform",
          "module": "DDC.Build.Platform",
          "name": "OsCygwin",
          "package": "ddc-build",
          "partial": "Os Cygwin",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Platform.html#v:OsCygwin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Build.Platform",
          "name": "OsDarwin",
          "package": "ddc-build",
          "signature": "OsDarwin",
          "source": "src/DDC-Build-Platform.html#Os",
          "type": "function"
        },
        "index": {
          "hierarchy": "DDC Build Platform",
          "module": "DDC.Build.Platform",
          "name": "OsDarwin",
          "package": "ddc-build",
          "partial": "Os Darwin",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Platform.html#v:OsDarwin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Build.Platform",
          "name": "OsLinux",
          "package": "ddc-build",
          "signature": "OsLinux",
          "source": "src/DDC-Build-Platform.html#Os",
          "type": "function"
        },
        "index": {
          "hierarchy": "DDC Build Platform",
          "module": "DDC.Build.Platform",
          "name": "OsLinux",
          "package": "ddc-build",
          "partial": "Os Linux",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Platform.html#v:OsLinux"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Build.Platform",
          "name": "Platform",
          "package": "ddc-build",
          "signature": "Platform",
          "source": "src/DDC-Build-Platform.html#Platform",
          "type": "function"
        },
        "index": {
          "hierarchy": "DDC Build Platform",
          "module": "DDC.Build.Platform",
          "name": "Platform",
          "package": "ddc-build",
          "partial": "Platform",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Platform.html#v:Platform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the width of a pointer on the architecture, in bits.\n\u003c/p\u003e",
          "module": "DDC.Build.Platform",
          "name": "archPointerWidth",
          "package": "ddc-build",
          "signature": "Arch -\u003e Int",
          "source": "src/DDC-Build-Platform.html#archPointerWidth",
          "type": "function"
        },
        "index": {
          "description": "Get the width of pointer on the architecture in bits",
          "hierarchy": "DDC Build Platform",
          "module": "DDC.Build.Platform",
          "name": "archPointerWidth",
          "normalized": "Arch-\u003eInt",
          "package": "ddc-build",
          "partial": "Pointer Width",
          "signature": "Arch-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Platform.html#v:archPointerWidth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermine the host archicture.\n   Uses the \u003ccode\u003earch\u003c/code\u003e command which must be in the current path.\n\u003c/p\u003e",
          "module": "DDC.Build.Platform",
          "name": "determineHostArch",
          "package": "ddc-build",
          "signature": "IO (Maybe Arch)",
          "source": "src/DDC-Build-Platform.html#determineHostArch",
          "type": "function"
        },
        "index": {
          "description": "Determine the host archicture Uses the arch command which must be in the current path",
          "hierarchy": "DDC Build Platform",
          "module": "DDC.Build.Platform",
          "name": "determineHostArch",
          "package": "ddc-build",
          "partial": "Host Arch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Platform.html#v:determineHostArch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermine the host OS.\n   Uses the \u003ccode\u003euname\u003c/code\u003e command which must be in the current path.\n\u003c/p\u003e",
          "module": "DDC.Build.Platform",
          "name": "determineHostOs",
          "package": "ddc-build",
          "signature": "IO (Maybe Os)",
          "source": "src/DDC-Build-Platform.html#determineHostOs",
          "type": "function"
        },
        "index": {
          "description": "Determine the host OS Uses the uname command which must be in the current path",
          "hierarchy": "DDC Build Platform",
          "module": "DDC.Build.Platform",
          "name": "determineHostOs",
          "package": "ddc-build",
          "partial": "Host Os",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Platform.html#v:determineHostOs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermine the default host platform.\n\u003c/p\u003e\u003cp\u003eUses the \u003ccode\u003earch\u003c/code\u003e and \u003ccode\u003euname\u003c/code\u003e commands which must be in the current path.\n\u003c/p\u003e\u003cp\u003eReturns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if \u003ccode\u003earch\u003c/code\u003e or \u003ccode\u003euname\u003c/code\u003e cannot be found, returned\n   an error, or we didn't recognise their response.\n\u003c/p\u003e\u003cp\u003eFor Platforms like Darwin which can run both 32-bit and 64-bit binaries,\n   we return whatever the default is reported by \u003ccode\u003earch\u003c/code\u003e and \u003ccode\u003euname\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "DDC.Build.Platform",
          "name": "determineHostPlatform",
          "package": "ddc-build",
          "signature": "IO (Maybe Platform)",
          "source": "src/DDC-Build-Platform.html#determineHostPlatform",
          "type": "function"
        },
        "index": {
          "description": "Determine the default host platform Uses the arch and uname commands which must be in the current path Returns Nothing if arch or uname cannot be found returned an error or we didn recognise their response For Platforms like Darwin which can run both bit and bit binaries we return whatever the default is reported by arch and uname",
          "hierarchy": "DDC Build Platform",
          "module": "DDC.Build.Platform",
          "name": "determineHostPlatform",
          "package": "ddc-build",
          "partial": "Host Platform",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Platform.html#v:determineHostPlatform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Build.Platform",
          "name": "platformArch",
          "package": "ddc-build",
          "signature": "Arch",
          "source": "src/DDC-Build-Platform.html#Platform",
          "type": "function"
        },
        "index": {
          "hierarchy": "DDC Build Platform",
          "module": "DDC.Build.Platform",
          "name": "platformArch",
          "package": "ddc-build",
          "partial": "Arch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Platform.html#v:platformArch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Build.Platform",
          "name": "platformOs",
          "package": "ddc-build",
          "signature": "Os",
          "source": "src/DDC-Build-Platform.html#Platform",
          "type": "function"
        },
        "index": {
          "hierarchy": "DDC Build Platform",
          "module": "DDC.Build.Platform",
          "name": "platformOs",
          "package": "ddc-build",
          "partial": "Os",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Platform.html#v:platformOs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the file extension to use for a shared library on this platform.\n\u003c/p\u003e",
          "module": "DDC.Build.Platform",
          "name": "sharedFileExtensionOfPlatform",
          "package": "ddc-build",
          "signature": "Platform -\u003e String",
          "source": "src/DDC-Build-Platform.html#sharedFileExtensionOfPlatform",
          "type": "function"
        },
        "index": {
          "description": "Get the file extension to use for shared library on this platform",
          "hierarchy": "DDC Build Platform",
          "module": "DDC.Build.Platform",
          "name": "sharedFileExtensionOfPlatform",
          "normalized": "Platform-\u003eString",
          "package": "ddc-build",
          "partial": "File Extension Of Platform",
          "signature": "Platform-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Platform.html#v:sharedFileExtensionOfPlatform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the file extension to use for a static library on this platform.\n\u003c/p\u003e",
          "module": "DDC.Build.Platform",
          "name": "staticFileExtensionOfPlatform",
          "package": "ddc-build",
          "signature": "Platform -\u003e String",
          "source": "src/DDC-Build-Platform.html#staticFileExtensionOfPlatform",
          "type": "function"
        },
        "index": {
          "description": "Get the file extension to use for static library on this platform",
          "hierarchy": "DDC Build Platform",
          "module": "DDC.Build.Platform",
          "name": "staticFileExtensionOfPlatform",
          "normalized": "Platform-\u003eString",
          "package": "ddc-build",
          "partial": "File Extension Of Platform",
          "signature": "Platform-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-build/docs/DDC-Build-Platform.html#v:staticFileExtensionOfPlatform"
      }
    }
  ]
]