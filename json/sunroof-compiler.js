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
        "word": "sunroof-compiler"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eProvides the central type classes used by Sunroof.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.Sunroof.Classes",
          "name": "Classes",
          "package": "sunroof-compiler",
          "source": "src/Language-Sunroof-Classes.html",
          "type": "module"
        },
        "index": {
          "description": "Provides the central type classes used by Sunroof",
          "hierarchy": "Language Sunroof Classes",
          "module": "Language.Sunroof.Classes",
          "name": "Classes",
          "package": "sunroof-compiler",
          "partial": "Classes",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-Classes.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCentral type class of Sunroof. Every type that can be translated\n   into Javascript with Sunroof has to implement this type class.\n\u003c/p\u003e",
          "module": "Language.Sunroof.Classes",
          "name": "Sunroof",
          "package": "sunroof-compiler",
          "source": "src/Language-Sunroof-Classes.html#Sunroof",
          "type": "class"
        },
        "index": {
          "description": "Central type class of Sunroof Every type that can be translated into Javascript with Sunroof has to implement this type class",
          "hierarchy": "Language Sunroof Classes",
          "module": "Language.Sunroof.Classes",
          "name": "Sunroof",
          "package": "sunroof-compiler",
          "partial": "Sunroof",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-Classes.html#t:Sunroof"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEverything that can be used as argument to a function is Javascript/Sunroof.\n\u003c/p\u003e",
          "module": "Language.Sunroof.Classes",
          "name": "SunroofArgument",
          "package": "sunroof-compiler",
          "source": "src/Language-Sunroof-Classes.html#SunroofArgument",
          "type": "class"
        },
        "index": {
          "description": "Everything that can be used as argument to function is Javascript Sunroof",
          "hierarchy": "Language Sunroof Classes",
          "module": "Language.Sunroof.Classes",
          "name": "SunroofArgument",
          "package": "sunroof-compiler",
          "partial": "Sunroof Argument",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-Classes.html#t:SunroofArgument"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll Haskell values that have a Sunroof representation\n   implement this class.\n\u003c/p\u003e",
          "module": "Language.Sunroof.Classes",
          "name": "SunroofValue",
          "package": "sunroof-compiler",
          "source": "src/Language-Sunroof-Classes.html#SunroofValue",
          "type": "class"
        },
        "index": {
          "description": "All Haskell values that have Sunroof representation implement this class",
          "hierarchy": "Language Sunroof Classes",
          "module": "Language.Sunroof.Classes",
          "name": "SunroofValue",
          "package": "sunroof-compiler",
          "partial": "Sunroof Value",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-Classes.html#t:SunroofValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsed for unique number generation.\n\u003c/p\u003e",
          "module": "Language.Sunroof.Classes",
          "name": "Uniq",
          "package": "sunroof-compiler",
          "source": "src/Language-Sunroof-Classes.html#Uniq",
          "type": "type"
        },
        "index": {
          "description": "Used for unique number generation",
          "hierarchy": "Language Sunroof Classes",
          "module": "Language.Sunroof.Classes",
          "name": "Uniq",
          "package": "sunroof-compiler",
          "partial": "Uniq",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-Classes.html#t:Uniq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eImplemented if a monad supports unique number generation.\n\u003c/p\u003e",
          "module": "Language.Sunroof.Classes",
          "name": "UniqM",
          "package": "sunroof-compiler",
          "source": "src/Language-Sunroof-Classes.html#UniqM",
          "type": "class"
        },
        "index": {
          "description": "Implemented if monad supports unique number generation",
          "hierarchy": "Language Sunroof Classes",
          "module": "Language.Sunroof.Classes",
          "name": "UniqM",
          "package": "sunroof-compiler",
          "partial": "Uniq",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-Classes.html#t:UniqM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a Sunroof value from a plain Javascript expression.\n\u003c/p\u003e",
          "module": "Language.Sunroof.Classes",
          "name": "box",
          "package": "sunroof-compiler",
          "signature": "Expr -\u003e a",
          "source": "src/Language-Sunroof-Classes.html#box",
          "type": "method"
        },
        "index": {
          "description": "Create Sunroof value from plain Javascript expression",
          "hierarchy": "Language Sunroof Classes",
          "module": "Language.Sunroof.Classes",
          "name": "box",
          "normalized": "Expr-\u003ea",
          "package": "sunroof-compiler",
          "signature": "Expr-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-Classes.html#v:box"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert the Haskell value to its Sunroof equivalent.\n\u003c/p\u003e",
          "module": "Language.Sunroof.Classes",
          "name": "js",
          "package": "sunroof-compiler",
          "signature": "a -\u003e ValueOf a",
          "source": "src/Language-Sunroof-Classes.html#js",
          "type": "method"
        },
        "index": {
          "description": "Convert the Haskell value to its Sunroof equivalent",
          "hierarchy": "Language Sunroof Classes",
          "module": "Language.Sunroof.Classes",
          "name": "js",
          "normalized": "a-\u003eValueOf a",
          "package": "sunroof-compiler",
          "signature": "a-\u003eValueOf a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-Classes.html#v:js"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTurn the argument into a list of expressions.\n\u003c/p\u003e",
          "module": "Language.Sunroof.Classes",
          "name": "jsArgs",
          "package": "sunroof-compiler",
          "signature": "args -\u003e [Expr]",
          "source": "src/Language-Sunroof-Classes.html#jsArgs",
          "type": "method"
        },
        "index": {
          "description": "Turn the argument into list of expressions",
          "hierarchy": "Language Sunroof Classes",
          "module": "Language.Sunroof.Classes",
          "name": "jsArgs",
          "normalized": "a-\u003e[Expr]",
          "package": "sunroof-compiler",
          "partial": "Args",
          "signature": "args-\u003e[Expr]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-Classes.html#v:jsArgs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a list of fresh variables for the arguments.\n\u003c/p\u003e",
          "module": "Language.Sunroof.Classes",
          "name": "jsValue",
          "package": "sunroof-compiler",
          "signature": "m args",
          "source": "src/Language-Sunroof-Classes.html#jsValue",
          "type": "method"
        },
        "index": {
          "description": "Create list of fresh variables for the arguments",
          "hierarchy": "Language Sunroof Classes",
          "module": "Language.Sunroof.Classes",
          "name": "jsValue",
          "package": "sunroof-compiler",
          "partial": "Value",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-Classes.html#v:jsValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a unique Javascript variable of any Sunroof type.\n\u003c/p\u003e",
          "module": "Language.Sunroof.Classes",
          "name": "jsVar",
          "package": "sunroof-compiler",
          "signature": "m a",
          "source": "src/Language-Sunroof-Classes.html#jsVar",
          "type": "function"
        },
        "index": {
          "description": "Create unique Javascript variable of any Sunroof type",
          "hierarchy": "Language Sunroof Classes",
          "module": "Language.Sunroof.Classes",
          "name": "jsVar",
          "package": "sunroof-compiler",
          "partial": "Var",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-Classes.html#v:jsVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a Javascript variable of any Sunroof type.\n\u003c/p\u003e",
          "module": "Language.Sunroof.Classes",
          "name": "mkVar",
          "package": "sunroof-compiler",
          "signature": "Uniq -\u003e a",
          "source": "src/Language-Sunroof-Classes.html#mkVar",
          "type": "function"
        },
        "index": {
          "description": "Creates Javascript variable of any Sunroof type",
          "hierarchy": "Language Sunroof Classes",
          "module": "Language.Sunroof.Classes",
          "name": "mkVar",
          "normalized": "Uniq-\u003ea",
          "package": "sunroof-compiler",
          "partial": "Var",
          "signature": "Uniq-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-Classes.html#v:mkVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the type of Javascript expression this Sunroof value\n   represents. The default implementation returns \u003ccode\u003e\u003ca\u003eBase\u003c/a\u003e\u003c/code\u003e as type.\n\u003c/p\u003e",
          "module": "Language.Sunroof.Classes",
          "name": "typeOf",
          "package": "sunroof-compiler",
          "signature": "Proxy a -\u003e Type",
          "source": "src/Language-Sunroof-Classes.html#typeOf",
          "type": "method"
        },
        "index": {
          "description": "Returns the type of Javascript expression this Sunroof value represents The default implementation returns Base as type",
          "hierarchy": "Language Sunroof Classes",
          "module": "Language.Sunroof.Classes",
          "name": "typeOf",
          "normalized": "Proxy a-\u003eType",
          "package": "sunroof-compiler",
          "partial": "Of",
          "signature": "Proxy a-\u003eType",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-Classes.html#v:typeOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the type of the argument values.\n\u003c/p\u003e",
          "module": "Language.Sunroof.Classes",
          "name": "typesOf",
          "package": "sunroof-compiler",
          "signature": "Proxy args -\u003e [Type]",
          "source": "src/Language-Sunroof-Classes.html#typesOf",
          "type": "method"
        },
        "index": {
          "description": "Get the type of the argument values",
          "hierarchy": "Language Sunroof Classes",
          "module": "Language.Sunroof.Classes",
          "name": "typesOf",
          "normalized": "Proxy a-\u003e[Type]",
          "package": "sunroof-compiler",
          "partial": "Of",
          "signature": "Proxy args-\u003e[Type]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-Classes.html#v:typesOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReveal the plain Javascript expression that represents this Sunroof value.\n\u003c/p\u003e",
          "module": "Language.Sunroof.Classes",
          "name": "unbox",
          "package": "sunroof-compiler",
          "signature": "a -\u003e Expr",
          "source": "src/Language-Sunroof-Classes.html#unbox",
          "type": "method"
        },
        "index": {
          "description": "Reveal the plain Javascript expression that represents this Sunroof value",
          "hierarchy": "Language Sunroof Classes",
          "module": "Language.Sunroof.Classes",
          "name": "unbox",
          "normalized": "a-\u003eExpr",
          "package": "sunroof-compiler",
          "signature": "a-\u003eExpr",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-Classes.html#v:unbox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a unique number.\n\u003c/p\u003e",
          "module": "Language.Sunroof.Classes",
          "name": "uniqM",
          "package": "sunroof-compiler",
          "signature": "m Uniq",
          "source": "src/Language-Sunroof-Classes.html#uniqM",
          "type": "method"
        },
        "index": {
          "description": "Generate unique number",
          "hierarchy": "Language Sunroof Classes",
          "module": "Language.Sunroof.Classes",
          "name": "uniqM",
          "package": "sunroof-compiler",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-Classes.html#v:uniqM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eProvides the Sunroof to Javascript compiler.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.Sunroof.Compiler",
          "name": "Compiler",
          "package": "sunroof-compiler",
          "source": "src/Language-Sunroof-Compiler.html",
          "type": "module"
        },
        "index": {
          "description": "Provides the Sunroof to Javascript compiler",
          "hierarchy": "Language Sunroof Compiler",
          "module": "Language.Sunroof.Compiler",
          "name": "Compiler",
          "package": "sunroof-compiler",
          "partial": "Compiler",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-Compiler.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOptions to setup the compiler.\n\u003c/p\u003e",
          "module": "Language.Sunroof.Compiler",
          "name": "CompilerOpts",
          "package": "sunroof-compiler",
          "source": "src/Language-Sunroof-Compiler.html#CompilerOpts",
          "type": "data"
        },
        "index": {
          "description": "Options to setup the compiler",
          "hierarchy": "Language Sunroof Compiler",
          "module": "Language.Sunroof.Compiler",
          "name": "CompilerOpts",
          "package": "sunroof-compiler",
          "partial": "Compiler Opts",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-Compiler.html#t:CompilerOpts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Language.Sunroof.Compiler\",\"Language.Sunroof\"]",
          "name": "CompilerOpts",
          "package": "sunroof-compiler",
          "signature": "CompilerOpts",
          "source": "src/Language-Sunroof-Compiler.html#CompilerOpts",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-Compiler.html#v:CompilerOpts\",\"http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof.html#v:CompilerOpts\"]"
        },
        "index": {
          "hierarchy": "Language Sunroof Compiler",
          "module": "Language.Sunroof.Compiler",
          "name": "CompilerOpts",
          "package": "sunroof-compiler",
          "partial": "Compiler Opts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-Compiler.html#v:CompilerOpts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDoes the compiler output code without whitespace and layout? default == False\n\u003c/p\u003e",
          "module": "[\"Language.Sunroof.Compiler\",\"Language.Sunroof\"]",
          "name": "co_compress",
          "package": "sunroof-compiler",
          "signature": "Bool",
          "source": "src/Language-Sunroof-Compiler.html#CompilerOpts",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-Compiler.html#v:co_compress\",\"http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof.html#v:co_compress\"]"
        },
        "index": {
          "description": "Does the compiler output code without whitespace and layout default False",
          "hierarchy": "Language Sunroof Compiler",
          "module": "Language.Sunroof.Compiler",
          "name": "co_compress",
          "package": "sunroof-compiler",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-Compiler.html#v:co_compress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDo we constant fold?\n\u003c/p\u003e",
          "module": "[\"Language.Sunroof.Compiler\",\"Language.Sunroof\"]",
          "name": "co_const",
          "package": "sunroof-compiler",
          "signature": "Bool",
          "source": "src/Language-Sunroof-Compiler.html#CompilerOpts",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-Compiler.html#v:co_const\",\"http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof.html#v:co_const\"]"
        },
        "index": {
          "description": "Do we constant fold",
          "hierarchy": "Language Sunroof Compiler",
          "module": "Language.Sunroof.Compiler",
          "name": "co_const",
          "package": "sunroof-compiler",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-Compiler.html#v:co_const"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDo we also capture non-reified CSE, using Value Numbering?\n\u003c/p\u003e",
          "module": "[\"Language.Sunroof.Compiler\",\"Language.Sunroof\"]",
          "name": "co_cse",
          "package": "sunroof-compiler",
          "signature": "Bool",
          "source": "src/Language-Sunroof-Compiler.html#CompilerOpts",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-Compiler.html#v:co_cse\",\"http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof.html#v:co_cse\"]"
        },
        "index": {
          "description": "Do we also capture non-reified CSE using Value Numbering",
          "hierarchy": "Language Sunroof Compiler",
          "module": "Language.Sunroof.Compiler",
          "name": "co_cse",
          "package": "sunroof-compiler",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-Compiler.html#v:co_cse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDo we reify to capture Haskell-level lets / CSEs?\n\u003c/p\u003e",
          "module": "[\"Language.Sunroof.Compiler\",\"Language.Sunroof\"]",
          "name": "co_on",
          "package": "sunroof-compiler",
          "signature": "Bool",
          "source": "src/Language-Sunroof-Compiler.html#CompilerOpts",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-Compiler.html#v:co_on\",\"http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof.html#v:co_on\"]"
        },
        "index": {
          "description": "Do we reify to capture Haskell-level lets CSEs",
          "hierarchy": "Language Sunroof Compiler",
          "module": "Language.Sunroof.Compiler",
          "name": "co_on",
          "package": "sunroof-compiler",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-Compiler.html#v:co_on"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHow verbose is the compiler when running? standard 0 - 3 scale\n\u003c/p\u003e",
          "module": "[\"Language.Sunroof.Compiler\",\"Language.Sunroof\"]",
          "name": "co_verbose",
          "package": "sunroof-compiler",
          "signature": "Int",
          "source": "src/Language-Sunroof-Compiler.html#CompilerOpts",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-Compiler.html#v:co_verbose\",\"http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof.html#v:co_verbose\"]"
        },
        "index": {
          "description": "How verbose is the compiler when running standard scale",
          "hierarchy": "Language Sunroof Compiler",
          "module": "Language.Sunroof.Compiler",
          "name": "co_verbose",
          "package": "sunroof-compiler",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-Compiler.html#v:co_verbose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompile a Javascript computation (using the given continuation closer)\n   into basic Javascript statements. Also return the next fresh\n   unique. This function should only be used if you know what your doing!\n\u003c/p\u003e",
          "module": "Language.Sunroof.Compiler",
          "name": "compileJS",
          "package": "sunroof-compiler",
          "signature": "CompilerOpts -\u003e Uniq -\u003e (a -\u003e JS t ()) -\u003e JS t a -\u003e IO ([Stmt], Uniq)",
          "source": "src/Language-Sunroof-Compiler.html#compileJS",
          "type": "function"
        },
        "index": {
          "description": "Compile Javascript computation using the given continuation closer into basic Javascript statements Also return the next fresh unique This function should only be used if you know what your doing",
          "hierarchy": "Language Sunroof Compiler",
          "module": "Language.Sunroof.Compiler",
          "name": "compileJS",
          "normalized": "CompilerOpts-\u003eUniq-\u003e(a-\u003eJS b())-\u003eJS b a-\u003eIO([Stmt],Uniq)",
          "package": "sunroof-compiler",
          "partial": "JS",
          "signature": "CompilerOpts-\u003eUniq-\u003e(a-\u003eJS t())-\u003eJS t a-\u003eIO([Stmt],Uniq)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-Compiler.html#v:compileJS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe sunroof compiler compiles an effect that returns a Sunroof/JavaScript\n value into a JavaScript program. An example invocation is\n\u003c/p\u003e\u003cpre\u003e\n GHCi\u003e import Language.Sunroof\n GHCi\u003e import Language.Sunroof.JS.Browser\n GHCi\u003e import Data.Default\n GHCi\u003e txt \u003c- sunroofCompileJSA def \"main\" $ do alert(js \"Hello\");\n GHCi\u003e putStrLn txt\n var main = (function() {\n   alert(\"Hello\");\n })();\n\u003c/pre\u003e\u003cp\u003e(The extra function and application are intentional and are a common JavaScript\n trick to circumvent scoping issues.)\n\u003c/p\u003e\u003cp\u003eTo generate a function, not just an effect, you can use the \u003ccode\u003efunction\u003c/code\u003e combinator.\n\u003c/p\u003e\u003cpre\u003e\n GHCi\u003e txt \u003c- sunroofCompileJSA def \"main\" $ do\n            function $ \\ n -\u003e do\n                return (n * (n :: JSNumber))\n GHCi\u003e putStrLn txt\n var main = (function() {\n   var v1 = function(v0) {\n     return v0*v0;\n   };\n   return v1;\n })();\n\u003c/pre\u003e\u003cp\u003eNow \u003ccode\u003emain\u003c/code\u003e in JavaScript is bound to the square function.\n\u003c/p\u003e",
          "module": "[\"Language.Sunroof.Compiler\",\"Language.Sunroof\"]",
          "name": "sunroofCompileJSA",
          "package": "sunroof-compiler",
          "signature": "CompilerOpts -\u003e String -\u003e JS A a -\u003e IO String",
          "source": "src/Language-Sunroof-Compiler.html#sunroofCompileJSA",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-Compiler.html#v:sunroofCompileJSA\",\"http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof.html#v:sunroofCompileJSA\"]"
        },
        "index": {
          "description": "The sunroof compiler compiles an effect that returns Sunroof JavaScript value into JavaScript program An example invocation is GHCi import Language.Sunroof GHCi import Language.Sunroof.JS.Browser GHCi import Data.Default GHCi txt sunroofCompileJSA def main do alert js Hello GHCi putStrLn txt var main function alert Hello The extra function and application are intentional and are common JavaScript trick to circumvent scoping issues To generate function not just an effect you can use the function combinator GHCi txt sunroofCompileJSA def main do function do return JSNumber GHCi putStrLn txt var main function var v1 function v0 return v0 v0 return v1 Now main in JavaScript is bound to the square function",
          "hierarchy": "Language Sunroof Compiler",
          "module": "Language.Sunroof.Compiler",
          "name": "sunroofCompileJSA",
          "normalized": "CompilerOpts-\u003eString-\u003eJS A a-\u003eIO String",
          "package": "sunroof-compiler",
          "partial": "Compile JSA",
          "signature": "CompilerOpts-\u003eString-\u003eJS A a-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-Compiler.html#v:sunroofCompileJSA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompiles code using the blocking threading model.\n   Usage is the same as for \u003ccode\u003e\u003ca\u003esunroofCompileJSA\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Language.Sunroof.Compiler\",\"Language.Sunroof\"]",
          "name": "sunroofCompileJSB",
          "package": "sunroof-compiler",
          "signature": "CompilerOpts -\u003e String -\u003e JS B () -\u003e IO String",
          "source": "src/Language-Sunroof-Compiler.html#sunroofCompileJSB",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-Compiler.html#v:sunroofCompileJSB\",\"http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof.html#v:sunroofCompileJSB\"]"
        },
        "index": {
          "description": "Compiles code using the blocking threading model Usage is the same as for sunroofCompileJSA",
          "hierarchy": "Language Sunroof Compiler",
          "module": "Language.Sunroof.Compiler",
          "name": "sunroofCompileJSB",
          "normalized": "CompilerOpts-\u003eString-\u003eJS B()-\u003eIO String",
          "package": "sunroof-compiler",
          "partial": "Compile JSB",
          "signature": "CompilerOpts-\u003eString-\u003eJS B()-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-Compiler.html#v:sunroofCompileJSB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eProvides common combinators for concurrency in Javascript.\n\u003c/p\u003e\u003cp\u003eThe emulated threading Javascript threading model provided by\n   Sunroof is based on cooperative multithreading\n   (since Javascript is not multithreaded).\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.Sunroof.Concurrent",
          "name": "Concurrent",
          "package": "sunroof-compiler",
          "source": "src/Language-Sunroof-Concurrent.html",
          "type": "module"
        },
        "index": {
          "description": "Provides common combinators for concurrency in Javascript The emulated threading Javascript threading model provided by Sunroof is based on cooperative multithreading since Javascript is not multithreaded",
          "hierarchy": "Language Sunroof Concurrent",
          "module": "Language.Sunroof.Concurrent",
          "name": "Concurrent",
          "package": "sunroof-compiler",
          "partial": "Concurrent",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-Concurrent.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFork of the given computation in a different thread.\n\u003c/p\u003e",
          "module": "[\"Language.Sunroof.Concurrent\",\"Language.Sunroof\"]",
          "name": "forkJS",
          "package": "sunroof-compiler",
          "signature": "JS t1 () -\u003e JS t2 ()",
          "source": "src/Language-Sunroof-Concurrent.html#forkJS",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-Concurrent.html#v:forkJS\",\"http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof.html#v:forkJS\"]"
        },
        "index": {
          "description": "Fork of the given computation in different thread",
          "hierarchy": "Language Sunroof Concurrent",
          "module": "Language.Sunroof.Concurrent",
          "name": "forkJS",
          "normalized": "JS a()-\u003eJS a()",
          "package": "sunroof-compiler",
          "partial": "JS",
          "signature": "JS t()-\u003eJS t()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-Concurrent.html#v:forkJS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eloop x f\u003c/code\u003e executes the function \u003ccode\u003ef\u003c/code\u003e repeatedly.\n   After each iteration the result value of the function\n   is feed back as input of the next iteration.\n   The initial value supplied for the first iteration is \u003ccode\u003ex\u003c/code\u003e.\n   This loop will never terminate.\n\u003c/p\u003e",
          "module": "[\"Language.Sunroof.Concurrent\",\"Language.Sunroof\"]",
          "name": "loop",
          "package": "sunroof-compiler",
          "signature": "a -\u003e (a -\u003e JSB a) -\u003e JSB ()",
          "source": "src/Language-Sunroof-Concurrent.html#loop",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-Concurrent.html#v:loop\",\"http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof.html#v:loop\"]"
        },
        "index": {
          "description": "loop executes the function repeatedly After each iteration the result value of the function is feed back as input of the next iteration The initial value supplied for the first iteration is This loop will never terminate",
          "hierarchy": "Language Sunroof Concurrent",
          "module": "Language.Sunroof.Concurrent",
          "name": "loop",
          "normalized": "a-\u003e(a-\u003eJSB a)-\u003eJSB()",
          "package": "sunroof-compiler",
          "signature": "a-\u003e(a-\u003eJSB a)-\u003eJSB()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-Concurrent.html#v:loop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelay the execution of all instructions after this one by\n   the given amount of milliseconds.\n\u003c/p\u003e",
          "module": "[\"Language.Sunroof.Concurrent\",\"Language.Sunroof\"]",
          "name": "threadDelay",
          "package": "sunroof-compiler",
          "signature": "JSNumber -\u003e JSB ()",
          "source": "src/Language-Sunroof-Concurrent.html#threadDelay",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-Concurrent.html#v:threadDelay\",\"http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof.html#v:threadDelay\"]"
        },
        "index": {
          "description": "Delay the execution of all instructions after this one by the given amount of milliseconds",
          "hierarchy": "Language Sunroof Concurrent",
          "module": "Language.Sunroof.Concurrent",
          "name": "threadDelay",
          "normalized": "JSNumber-\u003eJSB()",
          "package": "sunroof-compiler",
          "partial": "Delay",
          "signature": "JSNumber-\u003eJSB()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-Concurrent.html#v:threadDelay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGive another thread time to execute.\n\u003c/p\u003e",
          "module": "[\"Language.Sunroof.Concurrent\",\"Language.Sunroof\"]",
          "name": "yield",
          "package": "sunroof-compiler",
          "signature": "JSB ()",
          "source": "src/Language-Sunroof-Concurrent.html#yield",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-Concurrent.html#v:yield\",\"http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof.html#v:yield\"]"
        },
        "index": {
          "description": "Give another thread time to execute",
          "hierarchy": "Language Sunroof Concurrent",
          "module": "Language.Sunroof.Concurrent",
          "name": "yield",
          "normalized": "JSB()",
          "package": "sunroof-compiler",
          "signature": "JSB()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-Concurrent.html#v:yield"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eInternal helper functions.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.Sunroof.Internal",
          "name": "Internal",
          "package": "sunroof-compiler",
          "source": "src/Language-Sunroof-Internal.html",
          "type": "module"
        },
        "index": {
          "description": "Internal helper functions",
          "hierarchy": "Language Sunroof Internal",
          "module": "Language.Sunroof.Internal",
          "name": "Internal",
          "package": "sunroof-compiler",
          "partial": "Internal",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-Internal.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermines wether a Javascript literal, given as a string,\n   requires parenthesis and adds them if so.\n\u003c/p\u003e",
          "module": "Language.Sunroof.Internal",
          "name": "litparen",
          "package": "sunroof-compiler",
          "signature": "String -\u003e String",
          "source": "src/Language-Sunroof-Internal.html#litparen",
          "type": "function"
        },
        "index": {
          "description": "Determines wether Javascript literal given as string requires parenthesis and adds them if so",
          "hierarchy": "Language Sunroof Internal",
          "module": "Language.Sunroof.Internal",
          "name": "litparen",
          "normalized": "String-\u003eString",
          "package": "sunroof-compiler",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-Internal.html#v:litparen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHelps to get the proxy of a value.\n\u003c/p\u003e",
          "module": "Language.Sunroof.Internal",
          "name": "proxyOf",
          "package": "sunroof-compiler",
          "signature": "a -\u003e Proxy a",
          "source": "src/Language-Sunroof-Internal.html#proxyOf",
          "type": "function"
        },
        "index": {
          "description": "Helps to get the proxy of value",
          "hierarchy": "Language Sunroof Internal",
          "module": "Language.Sunroof.Internal",
          "name": "proxyOf",
          "normalized": "a-\u003eProxy a",
          "package": "sunroof-compiler",
          "partial": "Of",
          "signature": "a-\u003eProxy a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-Internal.html#v:proxyOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eProvides a more specific type for arrays in Javascript\n   (together with basic operations on them).\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.Sunroof.JS.Array",
          "name": "Array",
          "package": "sunroof-compiler",
          "source": "src/Language-Sunroof-JS-Array.html",
          "type": "module"
        },
        "index": {
          "description": "Provides more specific type for arrays in Javascript together with basic operations on them",
          "hierarchy": "Language Sunroof JS Array",
          "module": "Language.Sunroof.JS.Array",
          "name": "Array",
          "package": "sunroof-compiler",
          "partial": "Array",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Array.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType if arrays in Javascript. The type parameter\n   given the entry type.\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.Array",
          "name": "JSArray",
          "package": "sunroof-compiler",
          "source": "src/Language-Sunroof-JS-Array.html#JSArray",
          "type": "data"
        },
        "index": {
          "description": "Type if arrays in Javascript The type parameter given the entry type",
          "hierarchy": "Language Sunroof JS Array",
          "module": "Language.Sunroof.JS.Array",
          "name": "JSArray",
          "package": "sunroof-compiler",
          "partial": "JSArray",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Array.html#t:JSArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a literal array from a Haskell list.\n\u003c/p\u003e",
          "module": "[\"Language.Sunroof.JS.Array\",\"Language.Sunroof\"]",
          "name": "array",
          "package": "sunroof-compiler",
          "signature": "[a] -\u003e JS t (JSArray (ValueOf a))",
          "source": "src/Language-Sunroof-JS-Array.html#array",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Array.html#v:array\",\"http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof.html#v:array\"]"
        },
        "index": {
          "description": "Create literal array from Haskell list",
          "hierarchy": "Language Sunroof JS Array",
          "module": "Language.Sunroof.JS.Array",
          "name": "array",
          "normalized": "[a]-\u003eJS b(JSArray(ValueOf a))",
          "package": "sunroof-compiler",
          "signature": "[a]-\u003eJS t(JSArray(ValueOf a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Array.html#v:array"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe empty array.\n\u003c/p\u003e",
          "module": "[\"Language.Sunroof.JS.Array\",\"Language.Sunroof\"]",
          "name": "empty",
          "package": "sunroof-compiler",
          "signature": "JS t (JSArray a)",
          "source": "src/Language-Sunroof-JS-Array.html#empty",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Array.html#v:empty\",\"http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof.html#v:empty\"]"
        },
        "index": {
          "description": "The empty array",
          "hierarchy": "Language Sunroof JS Array",
          "module": "Language.Sunroof.JS.Array",
          "name": "empty",
          "package": "sunroof-compiler",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Array.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eForeach iteration method provided by most browsers.\n   Execute the given action on each element of the array.\n   See\n   \u003ca\u003ehttps://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Array/forEach\u003c/a\u003e,\n   \u003ca\u003ehttp://msdn.microsoft.com/en-us/library/ie/ff679980.aspx\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "[\"Language.Sunroof.JS.Array\",\"Language.Sunroof\"]",
          "name": "forEach",
          "package": "sunroof-compiler",
          "signature": "(a -\u003e JS A ()) -\u003e JSArray a -\u003e JS t ()",
          "source": "src/Language-Sunroof-JS-Array.html#forEach",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Array.html#v:forEach\",\"http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof.html#v:forEach\"]"
        },
        "index": {
          "description": "Foreach iteration method provided by most browsers Execute the given action on each element of the array See https developer.mozilla.org en-US docs JavaScript Reference Global Objects Array forEach http msdn.microsoft.com en-us library ie ff679980.aspx",
          "hierarchy": "Language Sunroof JS Array",
          "module": "Language.Sunroof.JS.Array",
          "name": "forEach",
          "normalized": "(a-\u003eJS A())-\u003eJSArray a-\u003eJS b()",
          "package": "sunroof-compiler",
          "partial": "Each",
          "signature": "(a-\u003eJS A())-\u003eJSArray a-\u003eJS t()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Array.html#v:forEach"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type-safe version of array insert.\n\u003c/p\u003e",
          "module": "[\"Language.Sunroof.JS.Array\",\"Language.Sunroof\"]",
          "name": "insert'",
          "package": "sunroof-compiler",
          "signature": "JSNumber -\u003e a -\u003e JSArray a -\u003e JS t ()",
          "source": "src/Language-Sunroof-JS-Array.html#insert%27",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Array.html#v:insert-39-\",\"http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof.html#v:insert-39-\"]"
        },
        "index": {
          "description": "type-safe version of array insert",
          "hierarchy": "Language Sunroof JS Array",
          "module": "Language.Sunroof.JS.Array",
          "name": "insert'",
          "normalized": "JSNumber-\u003ea-\u003eJSArray a-\u003eJS b()",
          "package": "sunroof-compiler",
          "signature": "JSNumber-\u003ea-\u003eJSArray a-\u003eJS t()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Array.html#v:insert-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003elength\u003c/code\u003e property of arrays.\n\u003c/p\u003e",
          "module": "[\"Language.Sunroof.JS.Array\",\"Language.Sunroof\"]",
          "name": "length'",
          "package": "sunroof-compiler",
          "signature": "JSSelector JSNumber",
          "source": "src/Language-Sunroof-JS-Array.html#length%27",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Array.html#v:length-39-\",\"http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof.html#v:length-39-\"]"
        },
        "index": {
          "description": "The length property of arrays",
          "hierarchy": "Language Sunroof JS Array",
          "module": "Language.Sunroof.JS.Array",
          "name": "length'",
          "package": "sunroof-compiler",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Array.html#v:length-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type-safe version of array lookup.\n\u003c/p\u003e",
          "module": "[\"Language.Sunroof.JS.Array\",\"Language.Sunroof\"]",
          "name": "lookup'",
          "package": "sunroof-compiler",
          "signature": "JSNumber -\u003e JSArray a -\u003e a",
          "source": "src/Language-Sunroof-JS-Array.html#lookup%27",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Array.html#v:lookup-39-\",\"http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof.html#v:lookup-39-\"]"
        },
        "index": {
          "description": "type-safe version of array lookup",
          "hierarchy": "Language Sunroof JS Array",
          "module": "Language.Sunroof.JS.Array",
          "name": "lookup'",
          "normalized": "JSNumber-\u003eJSArray a-\u003ea",
          "package": "sunroof-compiler",
          "signature": "JSNumber-\u003eJSArray a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Array.html#v:lookup-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new array object containing the given values.\n\u003c/p\u003e",
          "module": "[\"Language.Sunroof.JS.Array\",\"Language.Sunroof\"]",
          "name": "newArray",
          "package": "sunroof-compiler",
          "signature": "args -\u003e JS t (JSArray a)",
          "source": "src/Language-Sunroof-JS-Array.html#newArray",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Array.html#v:newArray\",\"http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof.html#v:newArray\"]"
        },
        "index": {
          "description": "Create new array object containing the given values",
          "hierarchy": "Language Sunroof JS Array",
          "module": "Language.Sunroof.JS.Array",
          "name": "newArray",
          "normalized": "a-\u003eJS b(JSArray c)",
          "package": "sunroof-compiler",
          "partial": "Array",
          "signature": "args-\u003eJS t(JSArray a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Array.html#v:newArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePop a element from the array as if it was a stack.\n   See \u003ca\u003ehttp://www.w3schools.com/jsref/jsref_pop.asp\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "[\"Language.Sunroof.JS.Array\",\"Language.Sunroof\"]",
          "name": "pop",
          "package": "sunroof-compiler",
          "signature": "JSArray a -\u003e JS t a",
          "source": "src/Language-Sunroof-JS-Array.html#pop",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Array.html#v:pop\",\"http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof.html#v:pop\"]"
        },
        "index": {
          "description": "Pop element from the array as if it was stack See http www.w3schools.com jsref jsref pop.asp",
          "hierarchy": "Language Sunroof JS Array",
          "module": "Language.Sunroof.JS.Array",
          "name": "pop",
          "normalized": "JSArray a-\u003eJS b a",
          "package": "sunroof-compiler",
          "signature": "JSArray a-\u003eJS t a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Array.html#v:pop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePush a element into the array as if it was a stack.\n   Returns nothing instead of the new length.\n   See \u003ca\u003ehttp://www.w3schools.com/jsref/jsref_push.asp\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "[\"Language.Sunroof.JS.Array\",\"Language.Sunroof\"]",
          "name": "push",
          "package": "sunroof-compiler",
          "signature": "a -\u003e JSArray a -\u003e JS t ()",
          "source": "src/Language-Sunroof-JS-Array.html#push",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Array.html#v:push\",\"http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof.html#v:push\"]"
        },
        "index": {
          "description": "Push element into the array as if it was stack Returns nothing instead of the new length See http www.w3schools.com jsref jsref push.asp",
          "hierarchy": "Language Sunroof JS Array",
          "module": "Language.Sunroof.JS.Array",
          "name": "push",
          "normalized": "a-\u003eJSArray a-\u003eJS b()",
          "package": "sunroof-compiler",
          "signature": "a-\u003eJSArray a-\u003eJS t()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Array.html#v:push"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemoves and return the first element of an array (dequeue).\n   See \u003ca\u003ehttp://www.w3schools.com/jsref/jsref_shift.asp\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "[\"Language.Sunroof.JS.Array\",\"Language.Sunroof\"]",
          "name": "shift",
          "package": "sunroof-compiler",
          "signature": "JSArray a -\u003e JS t a",
          "source": "src/Language-Sunroof-JS-Array.html#shift",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Array.html#v:shift\",\"http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof.html#v:shift\"]"
        },
        "index": {
          "description": "Removes and return the first element of an array dequeue See http www.w3schools.com jsref jsref shift.asp",
          "hierarchy": "Language Sunroof JS Array",
          "module": "Language.Sunroof.JS.Array",
          "name": "shift",
          "normalized": "JSArray a-\u003eJS b a",
          "package": "sunroof-compiler",
          "signature": "JSArray a-\u003eJS t a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Array.html#v:shift"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdds a new element to the beginning of the array (queue).\n   Returns nothing instead of the new length.\n   See \u003ca\u003ehttp://www.w3schools.com/jsref/jsref_unshift.asp\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "[\"Language.Sunroof.JS.Array\",\"Language.Sunroof\"]",
          "name": "unshift",
          "package": "sunroof-compiler",
          "signature": "a -\u003e JSArray a -\u003e JS t ()",
          "source": "src/Language-Sunroof-JS-Array.html#unshift",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Array.html#v:unshift\",\"http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof.html#v:unshift\"]"
        },
        "index": {
          "description": "Adds new element to the beginning of the array queue Returns nothing instead of the new length See http www.w3schools.com jsref jsref unshift.asp",
          "hierarchy": "Language Sunroof JS Array",
          "module": "Language.Sunroof.JS.Array",
          "name": "unshift",
          "normalized": "a-\u003eJSArray a-\u003eJS b()",
          "package": "sunroof-compiler",
          "signature": "a-\u003eJSArray a-\u003eJS t()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Array.html#v:unshift"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBooleans in Javascript.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.Sunroof.JS.Bool",
          "name": "Bool",
          "package": "sunroof-compiler",
          "source": "src/Language-Sunroof-JS-Bool.html",
          "type": "module"
        },
        "index": {
          "description": "Booleans in Javascript",
          "hierarchy": "Language Sunroof JS Bool",
          "module": "Language.Sunroof.JS.Bool",
          "name": "Bool",
          "package": "sunroof-compiler",
          "partial": "Bool",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Bool.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBooleans in Javascript.\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.Bool",
          "name": "JSBool",
          "package": "sunroof-compiler",
          "source": "src/Language-Sunroof-JS-Bool.html#JSBool",
          "type": "data"
        },
        "index": {
          "description": "Booleans in Javascript",
          "hierarchy": "Language Sunroof JS Bool",
          "module": "Language.Sunroof.JS.Bool",
          "name": "JSBool",
          "package": "sunroof-compiler",
          "partial": "JSBool",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Bool.html#t:JSBool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombinator for \u003ccode\u003eif-then-else\u003c/code\u003e expressions. Not intended\n   for usage. Provided as a convenience for \u003ccode\u003e\u003ca\u003eIfB\u003c/a\u003e\u003c/code\u003e\n   instances. Use \u003ccode\u003e\u003ca\u003eifB\u003c/a\u003e\u003c/code\u003e instead.\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.Bool",
          "name": "jsIfB",
          "package": "sunroof-compiler",
          "signature": "JSBool -\u003e a -\u003e a -\u003e a",
          "source": "src/Language-Sunroof-JS-Bool.html#jsIfB",
          "type": "function"
        },
        "index": {
          "description": "Combinator for if-then-else expressions Not intended for usage Provided as convenience for IfB instances Use ifB instead",
          "hierarchy": "Language Sunroof JS Bool",
          "module": "Language.Sunroof.JS.Bool",
          "name": "jsIfB",
          "normalized": "JSBool-\u003ea-\u003ea-\u003ea",
          "package": "sunroof-compiler",
          "partial": "If",
          "signature": "JSBool-\u003ea-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Bool.html#v:jsIfB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA reflection of the standard browser Javascript API.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.Sunroof.JS.Browser",
          "name": "Browser",
          "package": "sunroof-compiler",
          "source": "src/Language-Sunroof-JS-Browser.html",
          "type": "module"
        },
        "index": {
          "description": "reflection of the standard browser Javascript API",
          "hierarchy": "Language Sunroof JS Browser",
          "module": "Language.Sunroof.JS.Browser",
          "name": "Browser",
          "package": "sunroof-compiler",
          "partial": "Browser",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Browser.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of the debugging console object.\n   See:\n   \u003ca\u003ehttps://developers.google.com/chrome-developer-tools/docs/console-api\u003c/a\u003e,\n   \u003ca\u003ehttps://developer.mozilla.org/en-US/docs/DOM/console\u003c/a\u003e,\n   \u003ca\u003ehttp://msdn.microsoft.com/en-us/library/windows/apps/hh696634.aspx\u003c/a\u003e;\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.Browser",
          "name": "JSConsole",
          "package": "sunroof-compiler",
          "source": "src/Language-Sunroof-JS-Browser.html#JSConsole",
          "type": "data"
        },
        "index": {
          "description": "The type of the debugging console object See https developers.google.com chrome-developer-tools docs console-api https developer.mozilla.org en-US docs DOM console http msdn.microsoft.com en-us library windows apps hh696634.aspx",
          "hierarchy": "Language Sunroof JS Browser",
          "module": "Language.Sunroof.JS.Browser",
          "name": "JSConsole",
          "package": "sunroof-compiler",
          "partial": "JSConsole",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Browser.html#t:JSConsole"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDisplay the given text in a message box.\n\u003c/p\u003e\u003cp\u003eSee \u003ca\u003ehttp://www.w3schools.com/js/js_popup.asp\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.Browser",
          "name": "alert",
          "package": "sunroof-compiler",
          "signature": "JSString -\u003e JS t ()",
          "source": "src/Language-Sunroof-JS-Browser.html#alert",
          "type": "function"
        },
        "index": {
          "description": "Display the given text in message box See http www.w3schools.com js js popup.asp",
          "hierarchy": "Language Sunroof JS Browser",
          "module": "Language.Sunroof.JS.Browser",
          "name": "alert",
          "normalized": "JSString-\u003eJS a()",
          "package": "sunroof-compiler",
          "signature": "JSString-\u003eJS t()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Browser.html#v:alert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClears a timer set with the \u003ccode\u003e\u003ca\u003esetInterval\u003c/a\u003e\u003c/code\u003e method.\n   This is supposed to be called on the \u003ccode\u003e\u003ca\u003ewindow\u003c/a\u003e\u003c/code\u003e object.\n   See: \u003ca\u003ehttp://www.w3schools.com/jsref/met_win_clearinterval.asp\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.Browser",
          "name": "clearInterval",
          "package": "sunroof-compiler",
          "signature": "JSNumber -\u003e JSObject -\u003e JS t ()",
          "source": "src/Language-Sunroof-JS-Browser.html#clearInterval",
          "type": "function"
        },
        "index": {
          "description": "Clears timer set with the setInterval method This is supposed to be called on the window object See http www.w3schools.com jsref met win clearinterval.asp",
          "hierarchy": "Language Sunroof JS Browser",
          "module": "Language.Sunroof.JS.Browser",
          "name": "clearInterval",
          "normalized": "JSNumber-\u003eJSObject-\u003eJS a()",
          "package": "sunroof-compiler",
          "partial": "Interval",
          "signature": "JSNumber-\u003eJSObject-\u003eJS t()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Browser.html#v:clearInterval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemoves the timer associated with the given handler.\n   This is supposed to be called on the \u003ccode\u003e\u003ca\u003ewindow\u003c/a\u003e\u003c/code\u003e object.\n   See: \u003ca\u003ehttp://www.w3schools.com/jsref/met_win_cleartimeout.asp\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.Browser",
          "name": "clearTimeout",
          "package": "sunroof-compiler",
          "signature": "JSNumber -\u003e JSObject -\u003e JS t ()",
          "source": "src/Language-Sunroof-JS-Browser.html#clearTimeout",
          "type": "function"
        },
        "index": {
          "description": "Removes the timer associated with the given handler This is supposed to be called on the window object See http www.w3schools.com jsref met win cleartimeout.asp",
          "hierarchy": "Language Sunroof JS Browser",
          "module": "Language.Sunroof.JS.Browser",
          "name": "clearTimeout",
          "normalized": "JSNumber-\u003eJSObject-\u003eJS a()",
          "package": "sunroof-compiler",
          "partial": "Timeout",
          "signature": "JSNumber-\u003eJSObject-\u003eJS t()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Browser.html#v:clearTimeout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCloses the document after writing.\n   For use with \u003ccode\u003e\u003ca\u003edocument\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.Browser",
          "name": "close",
          "package": "sunroof-compiler",
          "signature": "JSObject -\u003e JS t ()",
          "source": "src/Language-Sunroof-JS-Browser.html#close",
          "type": "function"
        },
        "index": {
          "description": "Closes the document after writing For use with document",
          "hierarchy": "Language Sunroof JS Browser",
          "module": "Language.Sunroof.JS.Browser",
          "name": "close",
          "normalized": "JSObject-\u003eJS a()",
          "package": "sunroof-compiler",
          "signature": "JSObject-\u003eJS t()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Browser.html#v:close"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAsk the user to confirm the given massege.\n\u003c/p\u003e\u003cp\u003eSee \u003ca\u003ehttp://www.w3schools.com/js/js_popup.asp\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.Browser",
          "name": "confirm",
          "package": "sunroof-compiler",
          "signature": "JSString -\u003e JS t JSBool",
          "source": "src/Language-Sunroof-JS-Browser.html#confirm",
          "type": "function"
        },
        "index": {
          "description": "Ask the user to confirm the given massege See http www.w3schools.com js js popup.asp",
          "hierarchy": "Language Sunroof JS Browser",
          "module": "Language.Sunroof.JS.Browser",
          "name": "confirm",
          "normalized": "JSString-\u003eJS a JSBool",
          "package": "sunroof-compiler",
          "signature": "JSString-\u003eJS t JSBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Browser.html#v:confirm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe console object.\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.Browser",
          "name": "console",
          "package": "sunroof-compiler",
          "signature": "JSConsole",
          "source": "src/Language-Sunroof-JS-Browser.html#console",
          "type": "function"
        },
        "index": {
          "description": "The console object",
          "hierarchy": "Language Sunroof JS Browser",
          "module": "Language.Sunroof.JS.Browser",
          "name": "console",
          "package": "sunroof-compiler",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Browser.html#v:console"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the value of the cookie.\n   For use with \u003ccode\u003e\u003ca\u003edocument\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.Browser",
          "name": "cookie",
          "package": "sunroof-compiler",
          "signature": "JSSelector JSString",
          "source": "src/Language-Sunroof-JS-Browser.html#cookie",
          "type": "function"
        },
        "index": {
          "description": "Returns the value of the cookie For use with document",
          "hierarchy": "Language Sunroof JS Browser",
          "module": "Language.Sunroof.JS.Browser",
          "name": "cookie",
          "package": "sunroof-compiler",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Browser.html#v:cookie"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a attribute DOM node with the given name.\n   For use with \u003ccode\u003e\u003ca\u003edocument\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.Browser",
          "name": "createAttribute",
          "package": "sunroof-compiler",
          "signature": "JSString-\u003e JSObject-\u003e JS t JSObject",
          "type": "function"
        },
        "index": {
          "description": "Create attribute DOM node with the given name For use with document",
          "hierarchy": "Language Sunroof JS Browser",
          "module": "Language.Sunroof.JS.Browser",
          "name": "createAttribute",
          "normalized": "JSString-\u003eJSObject-\u003eJS a JSObject",
          "package": "sunroof-compiler",
          "partial": "Attribute",
          "signature": "JSString-\u003eJSObject-\u003eJS t JSObject",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Browser.html#v:createAttribute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a element DOM node with the given tag name.\n   For use with \u003ccode\u003e\u003ca\u003edocument\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.Browser",
          "name": "createElement",
          "package": "sunroof-compiler",
          "signature": "JSString-\u003e JSObject-\u003e JS t JSObject",
          "type": "function"
        },
        "index": {
          "description": "Create element DOM node with the given tag name For use with document",
          "hierarchy": "Language Sunroof JS Browser",
          "module": "Language.Sunroof.JS.Browser",
          "name": "createElement",
          "normalized": "JSString-\u003eJSObject-\u003eJS a JSObject",
          "package": "sunroof-compiler",
          "partial": "Element",
          "signature": "JSString-\u003eJSObject-\u003eJS t JSObject",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Browser.html#v:createElement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a text DOM node with the given string as text.\n   For use with \u003ccode\u003e\u003ca\u003edocument\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.Browser",
          "name": "createTextNode",
          "package": "sunroof-compiler",
          "signature": "JSString-\u003e JSObject-\u003e JS t JSObject",
          "type": "function"
        },
        "index": {
          "description": "Create text DOM node with the given string as text For use with document",
          "hierarchy": "Language Sunroof JS Browser",
          "module": "Language.Sunroof.JS.Browser",
          "name": "createTextNode",
          "normalized": "JSString-\u003eJSObject-\u003eJS a JSObject",
          "package": "sunroof-compiler",
          "partial": "Text Node",
          "signature": "JSString-\u003eJSObject-\u003eJS t JSObject",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Browser.html#v:createTextNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSend a debug level message to the console.\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.Browser",
          "name": "debug",
          "package": "sunroof-compiler",
          "signature": "a -\u003e JSConsole -\u003e JS t ()",
          "source": "src/Language-Sunroof-JS-Browser.html#debug",
          "type": "function"
        },
        "index": {
          "description": "Send debug level message to the console",
          "hierarchy": "Language Sunroof JS Browser",
          "module": "Language.Sunroof.JS.Browser",
          "name": "debug",
          "normalized": "a-\u003eJSConsole-\u003eJS b()",
          "package": "sunroof-compiler",
          "signature": "a-\u003eJSConsole-\u003eJS t()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Browser.html#v:debug"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecode the URI encoded in the given string.\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.Browser",
          "name": "decodeURI",
          "package": "sunroof-compiler",
          "signature": "JSString -\u003e JS t JSString",
          "source": "src/Language-Sunroof-JS-Browser.html#decodeURI",
          "type": "function"
        },
        "index": {
          "description": "Decode the URI encoded in the given string",
          "hierarchy": "Language Sunroof JS Browser",
          "module": "Language.Sunroof.JS.Browser",
          "name": "decodeURI",
          "normalized": "JSString-\u003eJS a JSString",
          "package": "sunroof-compiler",
          "partial": "URI",
          "signature": "JSString-\u003eJS t JSString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Browser.html#v:decodeURI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecode the URI encoded string. For use with \u003ccode\u003e\u003ca\u003eencodeURIComponent\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.Browser",
          "name": "decodeURIComponent",
          "package": "sunroof-compiler",
          "signature": "JSString -\u003e JS t JSString",
          "source": "src/Language-Sunroof-JS-Browser.html#decodeURIComponent",
          "type": "function"
        },
        "index": {
          "description": "Decode the URI encoded string For use with encodeURIComponent",
          "hierarchy": "Language Sunroof JS Browser",
          "module": "Language.Sunroof.JS.Browser",
          "name": "decodeURIComponent",
          "normalized": "JSString-\u003eJS a JSString",
          "package": "sunroof-compiler",
          "partial": "URIComponent",
          "signature": "JSString-\u003eJS t JSString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Browser.html#v:decodeURIComponent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe document object.\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.Browser",
          "name": "document",
          "package": "sunroof-compiler",
          "signature": "JSObject",
          "source": "src/Language-Sunroof-JS-Browser.html#document",
          "type": "function"
        },
        "index": {
          "description": "The document object",
          "hierarchy": "Language Sunroof JS Browser",
          "module": "Language.Sunroof.JS.Browser",
          "name": "document",
          "package": "sunroof-compiler",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Browser.html#v:document"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode the given string in URI encoding.\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.Browser",
          "name": "encodeURI",
          "package": "sunroof-compiler",
          "signature": "JSString -\u003e JS t JSString",
          "source": "src/Language-Sunroof-JS-Browser.html#encodeURI",
          "type": "function"
        },
        "index": {
          "description": "Encode the given string in URI encoding",
          "hierarchy": "Language Sunroof JS Browser",
          "module": "Language.Sunroof.JS.Browser",
          "name": "encodeURI",
          "normalized": "JSString-\u003eJS a JSString",
          "package": "sunroof-compiler",
          "partial": "URI",
          "signature": "JSString-\u003eJS t JSString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Browser.html#v:encodeURI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode the string with URI encoding. This encodes a few more\n   characters to make the string safe for direct server communication (AJAX).\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.Browser",
          "name": "encodeURIComponent",
          "package": "sunroof-compiler",
          "signature": "JSString -\u003e JS t JSString",
          "source": "src/Language-Sunroof-JS-Browser.html#encodeURIComponent",
          "type": "function"
        },
        "index": {
          "description": "Encode the string with URI encoding This encodes few more characters to make the string safe for direct server communication AJAX",
          "hierarchy": "Language Sunroof JS Browser",
          "module": "Language.Sunroof.JS.Browser",
          "name": "encodeURIComponent",
          "normalized": "JSString-\u003eJS a JSString",
          "package": "sunroof-compiler",
          "partial": "URIComponent",
          "signature": "JSString-\u003eJS t JSString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Browser.html#v:encodeURIComponent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSend an error message to the console.\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.Browser",
          "name": "error",
          "package": "sunroof-compiler",
          "signature": "a -\u003e JSConsole -\u003e JS t ()",
          "source": "src/Language-Sunroof-JS-Browser.html#error",
          "type": "function"
        },
        "index": {
          "description": "Send an error message to the console",
          "hierarchy": "Language Sunroof JS Browser",
          "module": "Language.Sunroof.JS.Browser",
          "name": "error",
          "normalized": "a-\u003eJSConsole-\u003eJS b()",
          "package": "sunroof-compiler",
          "signature": "a-\u003eJSConsole-\u003eJS t()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Browser.html#v:error"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluate the given JavaScript string if possible. Returns\n   the result of evaluation.\n TODO: think about this a bit.\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.Browser",
          "name": "eval",
          "package": "sunroof-compiler",
          "signature": "JSString -\u003e JS t a",
          "source": "src/Language-Sunroof-JS-Browser.html#eval",
          "type": "function"
        },
        "index": {
          "description": "Evaluate the given JavaScript string if possible Returns the result of evaluation TODO think about this bit",
          "hierarchy": "Language Sunroof JS Browser",
          "module": "Language.Sunroof.JS.Browser",
          "name": "eval",
          "normalized": "JSString-\u003eJS a b",
          "package": "sunroof-compiler",
          "signature": "JSString-\u003eJS t a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Browser.html#v:eval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the DOM object of the element with the given id.\n   For use with \u003ccode\u003e\u003ca\u003edocument\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.Browser",
          "name": "getElementById",
          "package": "sunroof-compiler",
          "signature": "JSString-\u003e JSObject-\u003e JS t JSObject",
          "type": "function"
        },
        "index": {
          "description": "Get the DOM object of the element with the given id For use with document",
          "hierarchy": "Language Sunroof JS Browser",
          "module": "Language.Sunroof.JS.Browser",
          "name": "getElementById",
          "normalized": "JSString-\u003eJSObject-\u003eJS a JSObject",
          "package": "sunroof-compiler",
          "partial": "Element By Id",
          "signature": "JSString-\u003eJSObject-\u003eJS t JSObject",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Browser.html#v:getElementById"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the DOM objects of the elements with the given name.\n   For use with \u003ccode\u003e\u003ca\u003edocument\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.Browser",
          "name": "getElementsByName",
          "package": "sunroof-compiler",
          "signature": "JSString-\u003e JSObject-\u003e JS t JSObject",
          "type": "function"
        },
        "index": {
          "description": "Get the DOM objects of the elements with the given name For use with document",
          "hierarchy": "Language Sunroof JS Browser",
          "module": "Language.Sunroof.JS.Browser",
          "name": "getElementsByName",
          "normalized": "JSString-\u003eJSObject-\u003eJS a JSObject",
          "package": "sunroof-compiler",
          "partial": "Elements By Name",
          "signature": "JSString-\u003eJSObject-\u003eJS t JSObject",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Browser.html#v:getElementsByName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the DOM objects of the elements with the given tag.\n   For use with \u003ccode\u003e\u003ca\u003edocument\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.Browser",
          "name": "getElementsByTagName",
          "package": "sunroof-compiler",
          "signature": "JSString-\u003e JSObject-\u003e JS t JSObject",
          "type": "function"
        },
        "index": {
          "description": "Get the DOM objects of the elements with the given tag For use with document",
          "hierarchy": "Language Sunroof JS Browser",
          "module": "Language.Sunroof.JS.Browser",
          "name": "getElementsByTagName",
          "normalized": "JSString-\u003eJSObject-\u003eJS a JSObject",
          "package": "sunroof-compiler",
          "partial": "Elements By Tag Name",
          "signature": "JSString-\u003eJSObject-\u003eJS t JSObject",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Browser.html#v:getElementsByTagName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSend a info message to the console.\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.Browser",
          "name": "info",
          "package": "sunroof-compiler",
          "signature": "a -\u003e JSConsole -\u003e JS t ()",
          "source": "src/Language-Sunroof-JS-Browser.html#info",
          "type": "function"
        },
        "index": {
          "description": "Send info message to the console",
          "hierarchy": "Language Sunroof JS Browser",
          "module": "Language.Sunroof.JS.Browser",
          "name": "info",
          "normalized": "a-\u003eJSConsole-\u003eJS b()",
          "package": "sunroof-compiler",
          "signature": "a-\u003eJSConsole-\u003eJS t()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Browser.html#v:info"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck if a given number is within the valid JavaScript number range.\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.Browser",
          "name": "isFinite",
          "package": "sunroof-compiler",
          "signature": "JSNumber -\u003e JS t JSBool",
          "source": "src/Language-Sunroof-JS-Browser.html#isFinite",
          "type": "function"
        },
        "index": {
          "description": "Check if given number is within the valid JavaScript number range",
          "hierarchy": "Language Sunroof JS Browser",
          "module": "Language.Sunroof.JS.Browser",
          "name": "isFinite",
          "normalized": "JSNumber-\u003eJS a JSBool",
          "package": "sunroof-compiler",
          "partial": "Finite",
          "signature": "JSNumber-\u003eJS t JSBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Browser.html#v:isFinite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck if a given number is NaN or not.\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.Browser",
          "name": "isNaN",
          "package": "sunroof-compiler",
          "signature": "JSNumber -\u003e JS t JSBool",
          "source": "src/Language-Sunroof-JS-Browser.html#isNaN",
          "type": "function"
        },
        "index": {
          "description": "Check if given number is NaN or not",
          "hierarchy": "Language Sunroof JS Browser",
          "module": "Language.Sunroof.JS.Browser",
          "name": "isNaN",
          "normalized": "JSNumber-\u003eJS a JSBool",
          "package": "sunroof-compiler",
          "partial": "Na",
          "signature": "JSNumber-\u003eJS t JSBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Browser.html#v:isNaN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLog the given message.\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.Browser",
          "name": "log",
          "package": "sunroof-compiler",
          "signature": "a -\u003e JSConsole -\u003e JS t ()",
          "source": "src/Language-Sunroof-JS-Browser.html#log",
          "type": "function"
        },
        "index": {
          "description": "Log the given message",
          "hierarchy": "Language Sunroof JS Browser",
          "module": "Language.Sunroof.JS.Browser",
          "name": "log",
          "normalized": "a-\u003eJSConsole-\u003eJS b()",
          "package": "sunroof-compiler",
          "signature": "a-\u003eJSConsole-\u003eJS t()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Browser.html#v:log"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOpens the document for writing.\n   For use with \u003ccode\u003e\u003ca\u003edocument\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.Browser",
          "name": "open",
          "package": "sunroof-compiler",
          "signature": "JSObject -\u003e JS t ()",
          "source": "src/Language-Sunroof-JS-Browser.html#open",
          "type": "function"
        },
        "index": {
          "description": "Opens the document for writing For use with document",
          "hierarchy": "Language Sunroof JS Browser",
          "module": "Language.Sunroof.JS.Browser",
          "name": "open",
          "normalized": "JSObject-\u003eJS a()",
          "package": "sunroof-compiler",
          "signature": "JSObject-\u003eJS t()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Browser.html#v:open"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse the given string to a number.\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.Browser",
          "name": "parseFloat",
          "package": "sunroof-compiler",
          "signature": "JSString -\u003e JS t JSNumber",
          "source": "src/Language-Sunroof-JS-Browser.html#parseFloat",
          "type": "function"
        },
        "index": {
          "description": "Parse the given string to number",
          "hierarchy": "Language Sunroof JS Browser",
          "module": "Language.Sunroof.JS.Browser",
          "name": "parseFloat",
          "normalized": "JSString-\u003eJS a JSNumber",
          "package": "sunroof-compiler",
          "partial": "Float",
          "signature": "JSString-\u003eJS t JSNumber",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Browser.html#v:parseFloat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse the given string to a number.\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.Browser",
          "name": "parseInt",
          "package": "sunroof-compiler",
          "signature": "JSString -\u003e JS t JSNumber",
          "source": "src/Language-Sunroof-JS-Browser.html#parseInt",
          "type": "function"
        },
        "index": {
          "description": "Parse the given string to number",
          "hierarchy": "Language Sunroof JS Browser",
          "module": "Language.Sunroof.JS.Browser",
          "name": "parseInt",
          "normalized": "JSString-\u003eJS a JSNumber",
          "package": "sunroof-compiler",
          "partial": "Int",
          "signature": "JSString-\u003eJS t JSNumber",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Browser.html#v:parseInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAsk the user to give some input. May return \u003ccode\u003enull\u003c/code\u003e\n   or a string. Don't forget to check against \u003ccode\u003enullJS\u003c/code\u003e\n   before casting to string.\n\u003c/p\u003e\u003cp\u003eSee \u003ca\u003ehttp://www.w3schools.com/js/js_popup.asp\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.Browser",
          "name": "prompt",
          "package": "sunroof-compiler",
          "signature": "JSString -\u003e JSString -\u003e JS t JSObject",
          "source": "src/Language-Sunroof-JS-Browser.html#prompt",
          "type": "function"
        },
        "index": {
          "description": "Ask the user to give some input May return null or string Don forget to check against nullJS before casting to string See http www.w3schools.com js js popup.asp",
          "hierarchy": "Language Sunroof JS Browser",
          "module": "Language.Sunroof.JS.Browser",
          "name": "prompt",
          "normalized": "JSString-\u003eJSString-\u003eJS a JSObject",
          "package": "sunroof-compiler",
          "signature": "JSString-\u003eJSString-\u003eJS t JSObject",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Browser.html#v:prompt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the referrer of the document.\n   For use with \u003ccode\u003e\u003ca\u003edocument\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.Browser",
          "name": "referrer",
          "package": "sunroof-compiler",
          "signature": "JSSelector JSString",
          "source": "src/Language-Sunroof-JS-Browser.html#referrer",
          "type": "function"
        },
        "index": {
          "description": "Returns the referrer of the document For use with document",
          "hierarchy": "Language Sunroof JS Browser",
          "module": "Language.Sunroof.JS.Browser",
          "name": "referrer",
          "package": "sunroof-compiler",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Browser.html#v:referrer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe screen object.\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.Browser",
          "name": "screen",
          "package": "sunroof-compiler",
          "signature": "JSObject",
          "source": "src/Language-Sunroof-JS-Browser.html#screen",
          "type": "function"
        },
        "index": {
          "description": "The screen object",
          "hierarchy": "Language Sunroof JS Browser",
          "module": "Language.Sunroof.JS.Browser",
          "name": "screen",
          "package": "sunroof-compiler",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Browser.html#v:screen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets the value of the cookie.\n   For use with \u003ccode\u003e\u003ca\u003edocument\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.Browser",
          "name": "setCookie",
          "package": "sunroof-compiler",
          "signature": "JSString -\u003e JSObject -\u003e JS t ()",
          "source": "src/Language-Sunroof-JS-Browser.html#setCookie",
          "type": "function"
        },
        "index": {
          "description": "Sets the value of the cookie For use with document",
          "hierarchy": "Language Sunroof JS Browser",
          "module": "Language.Sunroof.JS.Browser",
          "name": "setCookie",
          "normalized": "JSString-\u003eJSObject-\u003eJS a()",
          "package": "sunroof-compiler",
          "partial": "Cookie",
          "signature": "JSString-\u003eJSObject-\u003eJS t()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Browser.html#v:setCookie"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalls a function at specified intervals in milliseconds.\n   It will continue calling the function until \u003ccode\u003e\u003ca\u003eclearInterval\u003c/a\u003e\u003c/code\u003e is called,\n   or the window is closed. The returned number is needed for \u003ccode\u003e\u003ca\u003eclearInterval\u003c/a\u003e\u003c/code\u003e.\n   This is supposed to be called on the \u003ccode\u003e\u003ca\u003ewindow\u003c/a\u003e\u003c/code\u003e object.\n   See: \u003ca\u003ehttp://www.w3schools.com/jsref/met_win_setinterval.asp\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.Browser",
          "name": "setInterval",
          "package": "sunroof-compiler",
          "signature": "(() -\u003e JSB ()) -\u003e JSNumber -\u003e JSObject -\u003e JS t JSNumber",
          "source": "src/Language-Sunroof-JS-Browser.html#setInterval",
          "type": "function"
        },
        "index": {
          "description": "Calls function at specified intervals in milliseconds It will continue calling the function until clearInterval is called or the window is closed The returned number is needed for clearInterval This is supposed to be called on the window object See http www.w3schools.com jsref met win setinterval.asp",
          "hierarchy": "Language Sunroof JS Browser",
          "module": "Language.Sunroof.JS.Browser",
          "name": "setInterval",
          "normalized": "(()-\u003eJSB())-\u003eJSNumber-\u003eJSObject-\u003eJS a JSNumber",
          "package": "sunroof-compiler",
          "partial": "Interval",
          "signature": "(()-\u003eJSB())-\u003eJSNumber-\u003eJSObject-\u003eJS t JSNumber",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Browser.html#v:setInterval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute the given continutation after the given amount of\n   milliseconds. Returns a handler for the set timer.\n   This is supposed to be called on the \u003ccode\u003e\u003ca\u003ewindow\u003c/a\u003e\u003c/code\u003e object.\n   See: \u003ca\u003ehttp://www.w3schools.com/jsref/met_win_settimeout.asp\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.Browser",
          "name": "setTimeout",
          "package": "sunroof-compiler",
          "signature": "(() -\u003e JSB ()) -\u003e JSNumber -\u003e JSObject -\u003e JS t JSNumber",
          "source": "src/Language-Sunroof-JS-Browser.html#setTimeout",
          "type": "function"
        },
        "index": {
          "description": "Execute the given continutation after the given amount of milliseconds Returns handler for the set timer This is supposed to be called on the window object See http www.w3schools.com jsref met win settimeout.asp",
          "hierarchy": "Language Sunroof JS Browser",
          "module": "Language.Sunroof.JS.Browser",
          "name": "setTimeout",
          "normalized": "(()-\u003eJSB())-\u003eJSNumber-\u003eJSObject-\u003eJS a JSNumber",
          "package": "sunroof-compiler",
          "partial": "Timeout",
          "signature": "(()-\u003eJSB())-\u003eJSNumber-\u003eJSObject-\u003eJS t JSNumber",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Browser.html#v:setTimeout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets the title of the document.\n   For use with \u003ccode\u003e\u003ca\u003edocument\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.Browser",
          "name": "setTitle",
          "package": "sunroof-compiler",
          "signature": "JSString -\u003e JSObject -\u003e JS t ()",
          "source": "src/Language-Sunroof-JS-Browser.html#setTitle",
          "type": "function"
        },
        "index": {
          "description": "Sets the title of the document For use with document",
          "hierarchy": "Language Sunroof JS Browser",
          "module": "Language.Sunroof.JS.Browser",
          "name": "setTitle",
          "normalized": "JSString-\u003eJSObject-\u003eJS a()",
          "package": "sunroof-compiler",
          "partial": "Title",
          "signature": "JSString-\u003eJSObject-\u003eJS t()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Browser.html#v:setTitle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the src of a DOM image object.\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.Browser",
          "name": "src",
          "package": "sunroof-compiler",
          "signature": "JSSelector JSString",
          "source": "src/Language-Sunroof-JS-Browser.html#src",
          "type": "function"
        },
        "index": {
          "description": "Returns the src of DOM image object",
          "hierarchy": "Language Sunroof JS Browser",
          "module": "Language.Sunroof.JS.Browser",
          "name": "src",
          "package": "sunroof-compiler",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Browser.html#v:src"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the title of the document.\n   For use with \u003ccode\u003e\u003ca\u003edocument\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.Browser",
          "name": "title",
          "package": "sunroof-compiler",
          "signature": "JSSelector JSString",
          "source": "src/Language-Sunroof-JS-Browser.html#title",
          "type": "function"
        },
        "index": {
          "description": "Returns the title of the document For use with document",
          "hierarchy": "Language Sunroof JS Browser",
          "module": "Language.Sunroof.JS.Browser",
          "name": "title",
          "package": "sunroof-compiler",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Browser.html#v:title"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the complete URL of the document.\n   For use with \u003ccode\u003e\u003ca\u003edocument\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.Browser",
          "name": "url",
          "package": "sunroof-compiler",
          "signature": "JSSelector JSString",
          "source": "src/Language-Sunroof-JS-Browser.html#url",
          "type": "function"
        },
        "index": {
          "description": "Returns the complete URL of the document For use with document",
          "hierarchy": "Language Sunroof JS Browser",
          "module": "Language.Sunroof.JS.Browser",
          "name": "url",
          "package": "sunroof-compiler",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Browser.html#v:url"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSend a warning message to the console.\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.Browser",
          "name": "warn",
          "package": "sunroof-compiler",
          "signature": "a -\u003e JSConsole -\u003e JS t ()",
          "source": "src/Language-Sunroof-JS-Browser.html#warn",
          "type": "function"
        },
        "index": {
          "description": "Send warning message to the console",
          "hierarchy": "Language Sunroof JS Browser",
          "module": "Language.Sunroof.JS.Browser",
          "name": "warn",
          "normalized": "a-\u003eJSConsole-\u003eJS b()",
          "package": "sunroof-compiler",
          "signature": "a-\u003eJSConsole-\u003eJS t()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Browser.html#v:warn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe window object.\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.Browser",
          "name": "window",
          "package": "sunroof-compiler",
          "signature": "JSObject",
          "source": "src/Language-Sunroof-JS-Browser.html#window",
          "type": "function"
        },
        "index": {
          "description": "The window object",
          "hierarchy": "Language Sunroof JS Browser",
          "module": "Language.Sunroof.JS.Browser",
          "name": "window",
          "package": "sunroof-compiler",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Browser.html#v:window"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrites something into the document.\n   For use with \u003ccode\u003e\u003ca\u003edocument\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.Browser",
          "name": "write",
          "package": "sunroof-compiler",
          "signature": "JSString -\u003e JSObject -\u003e JS t ()",
          "source": "src/Language-Sunroof-JS-Browser.html#write",
          "type": "function"
        },
        "index": {
          "description": "Writes something into the document For use with document",
          "hierarchy": "Language Sunroof JS Browser",
          "module": "Language.Sunroof.JS.Browser",
          "name": "write",
          "normalized": "JSString-\u003eJSObject-\u003eJS a()",
          "package": "sunroof-compiler",
          "signature": "JSString-\u003eJSObject-\u003eJS t()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Browser.html#v:write"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite something into the document and appends a new line.\n   For use with \u003ccode\u003e\u003ca\u003edocument\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.Browser",
          "name": "writeln",
          "package": "sunroof-compiler",
          "signature": "JSString -\u003e JSObject -\u003e JS t ()",
          "source": "src/Language-Sunroof-JS-Browser.html#writeln",
          "type": "function"
        },
        "index": {
          "description": "Write something into the document and appends new line For use with document",
          "hierarchy": "Language Sunroof JS Browser",
          "module": "Language.Sunroof.JS.Browser",
          "name": "writeln",
          "normalized": "JSString-\u003eJSObject-\u003eJS a()",
          "package": "sunroof-compiler",
          "signature": "JSString-\u003eJSObject-\u003eJS t()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Browser.html#v:writeln"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eProvides bindings to the Javascript API of the \n   HTML5 canvas element.\n\u003c/p\u003e\u003cp\u003eSee \u003ca\u003ehttp://www.w3schools.com/tags/ref_canvas.asp\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.Sunroof.JS.Canvas",
          "name": "Canvas",
          "package": "sunroof-compiler",
          "source": "src/Language-Sunroof-JS-Canvas.html",
          "type": "module"
        },
        "index": {
          "description": "Provides bindings to the Javascript API of the HTML5 canvas element See http www.w3schools.com tags ref canvas.asp",
          "hierarchy": "Language Sunroof JS Canvas",
          "module": "Language.Sunroof.JS.Canvas",
          "name": "Canvas",
          "package": "sunroof-compiler",
          "partial": "Canvas",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Canvas.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of the canvas drawing context.\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.Canvas",
          "name": "JSCanvas",
          "package": "sunroof-compiler",
          "source": "src/Language-Sunroof-JS-Canvas.html#JSCanvas",
          "type": "data"
        },
        "index": {
          "description": "The type of the canvas drawing context",
          "hierarchy": "Language Sunroof JS Canvas",
          "module": "Language.Sunroof.JS.Canvas",
          "name": "JSCanvas",
          "package": "sunroof-compiler",
          "partial": "JSCanvas",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Canvas.html#t:JSCanvas"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDraws a circular arc.\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.Canvas",
          "name": "arc",
          "package": "sunroof-compiler",
          "signature": "(JSNumber, JSNumber)-\u003e JSNumber-\u003e (JSNumber, JSNumber)-\u003e JSCanvas-\u003e JS t ()",
          "type": "function"
        },
        "index": {
          "description": "Draws circular arc",
          "hierarchy": "Language Sunroof JS Canvas",
          "module": "Language.Sunroof.JS.Canvas",
          "name": "arc",
          "normalized": "(JSNumber,JSNumber)-\u003eJSNumber-\u003e(JSNumber,JSNumber)-\u003eJSCanvas-\u003eJS a()",
          "package": "sunroof-compiler",
          "signature": "(JSNumber,JSNumber)-\u003eJSNumber-\u003e(JSNumber,JSNumber)-\u003eJSCanvas-\u003eJS t()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Canvas.html#v:arc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDraws a circular arc.\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.Canvas",
          "name": "arc'",
          "package": "sunroof-compiler",
          "signature": "(JSNumber, JSNumber)-\u003e JSNumber-\u003e (JSNumber, JSNumber)-\u003e JSBool-\u003e JSCanvas-\u003e JS t ()",
          "type": "function"
        },
        "index": {
          "description": "Draws circular arc",
          "hierarchy": "Language Sunroof JS Canvas",
          "module": "Language.Sunroof.JS.Canvas",
          "name": "arc'",
          "normalized": "(JSNumber,JSNumber)-\u003eJSNumber-\u003e(JSNumber,JSNumber)-\u003eJSBool-\u003eJSCanvas-\u003eJS a()",
          "package": "sunroof-compiler",
          "signature": "(JSNumber,JSNumber)-\u003eJSNumber-\u003e(JSNumber,JSNumber)-\u003eJSBool-\u003eJSCanvas-\u003eJS t()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Canvas.html#v:arc-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates an arc between two tangents on the canvas.\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.Canvas",
          "name": "arcTo",
          "package": "sunroof-compiler",
          "signature": "(JSNumber, JSNumber)-\u003e (JSNumber, JSNumber)-\u003e JSNumber-\u003e JSCanvas-\u003e JS t ()",
          "type": "function"
        },
        "index": {
          "description": "Creates an arc between two tangents on the canvas",
          "hierarchy": "Language Sunroof JS Canvas",
          "module": "Language.Sunroof.JS.Canvas",
          "name": "arcTo",
          "normalized": "(JSNumber,JSNumber)-\u003e(JSNumber,JSNumber)-\u003eJSNumber-\u003eJSCanvas-\u003eJS a()",
          "package": "sunroof-compiler",
          "partial": "To",
          "signature": "(JSNumber,JSNumber)-\u003e(JSNumber,JSNumber)-\u003eJSNumber-\u003eJSCanvas-\u003eJS t()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Canvas.html#v:arcTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBegins drawing a path or resets the current path\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.Canvas",
          "name": "beginPath",
          "package": "sunroof-compiler",
          "signature": "JSCanvas -\u003e JS t ()",
          "source": "src/Language-Sunroof-JS-Canvas.html#beginPath",
          "type": "function"
        },
        "index": {
          "description": "Begins drawing path or resets the current path",
          "hierarchy": "Language Sunroof JS Canvas",
          "module": "Language.Sunroof.JS.Canvas",
          "name": "beginPath",
          "normalized": "JSCanvas-\u003eJS a()",
          "package": "sunroof-compiler",
          "partial": "Path",
          "signature": "JSCanvas-\u003eJS t()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Canvas.html#v:beginPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDraws a bezier curve beginning at the current position of the context.\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.Canvas",
          "name": "bezierCurveTo",
          "package": "sunroof-compiler",
          "signature": "(JSNumber, JSNumber)-\u003e (JSNumber, JSNumber)-\u003e (JSNumber, JSNumber)-\u003e JSCanvas-\u003e JS t ()",
          "type": "function"
        },
        "index": {
          "description": "Draws bezier curve beginning at the current position of the context",
          "hierarchy": "Language Sunroof JS Canvas",
          "module": "Language.Sunroof.JS.Canvas",
          "name": "bezierCurveTo",
          "normalized": "(JSNumber,JSNumber)-\u003e(JSNumber,JSNumber)-\u003e(JSNumber,JSNumber)-\u003eJSCanvas-\u003eJS a()",
          "package": "sunroof-compiler",
          "partial": "Curve To",
          "signature": "(JSNumber,JSNumber)-\u003e(JSNumber,JSNumber)-\u003e(JSNumber,JSNumber)-\u003eJSCanvas-\u003eJS t()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Canvas.html#v:bezierCurveTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClears the rectangle given by its location and size.\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.Canvas",
          "name": "clearRect",
          "package": "sunroof-compiler",
          "signature": "(JSNumber, JSNumber)-\u003e (JSNumber, JSNumber)-\u003e JSCanvas-\u003e JS t ()",
          "type": "function"
        },
        "index": {
          "description": "Clears the rectangle given by its location and size",
          "hierarchy": "Language Sunroof JS Canvas",
          "module": "Language.Sunroof.JS.Canvas",
          "name": "clearRect",
          "normalized": "(JSNumber,JSNumber)-\u003e(JSNumber,JSNumber)-\u003eJSCanvas-\u003eJS a()",
          "package": "sunroof-compiler",
          "partial": "Rect",
          "signature": "(JSNumber,JSNumber)-\u003e(JSNumber,JSNumber)-\u003eJSCanvas-\u003eJS t()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Canvas.html#v:clearRect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClips a region of any shape and size from the context.\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.Canvas",
          "name": "clip",
          "package": "sunroof-compiler",
          "signature": "JSCanvas -\u003e JS t ()",
          "source": "src/Language-Sunroof-JS-Canvas.html#clip",
          "type": "function"
        },
        "index": {
          "description": "Clips region of any shape and size from the context",
          "hierarchy": "Language Sunroof JS Canvas",
          "module": "Language.Sunroof.JS.Canvas",
          "name": "clip",
          "normalized": "JSCanvas-\u003eJS a()",
          "package": "sunroof-compiler",
          "signature": "JSCanvas-\u003eJS t()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Canvas.html#v:clip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCloses the current path by drawing a straight line back to its beginning.\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.Canvas",
          "name": "closePath",
          "package": "sunroof-compiler",
          "signature": "JSCanvas -\u003e JS t ()",
          "source": "src/Language-Sunroof-JS-Canvas.html#closePath",
          "type": "function"
        },
        "index": {
          "description": "Closes the current path by drawing straight line back to its beginning",
          "hierarchy": "Language Sunroof JS Canvas",
          "module": "Language.Sunroof.JS.Canvas",
          "name": "closePath",
          "normalized": "JSCanvas-\u003eJS a()",
          "package": "sunroof-compiler",
          "partial": "Path",
          "signature": "JSCanvas-\u003eJS t()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Canvas.html#v:closePath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new image data object with the given size.\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.Canvas",
          "name": "createImageData",
          "package": "sunroof-compiler",
          "signature": "(JSNumber, JSNumber)-\u003e JSCanvas-\u003e JS t JSObject",
          "type": "function"
        },
        "index": {
          "description": "Create new image data object with the given size",
          "hierarchy": "Language Sunroof JS Canvas",
          "module": "Language.Sunroof.JS.Canvas",
          "name": "createImageData",
          "normalized": "(JSNumber,JSNumber)-\u003eJSCanvas-\u003eJS a JSObject",
          "package": "sunroof-compiler",
          "partial": "Image Data",
          "signature": "(JSNumber,JSNumber)-\u003eJSCanvas-\u003eJS t JSObject",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Canvas.html#v:createImageData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a new image data object with the same dimension as the given\n   image data object. This does not copy the contents of the other object.\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.Canvas",
          "name": "createImageData'",
          "package": "sunroof-compiler",
          "signature": "JSObject-\u003e JSCanvas-\u003e JS t JSObject",
          "type": "function"
        },
        "index": {
          "description": "Creates new image data object with the same dimension as the given image data object This does not copy the contents of the other object",
          "hierarchy": "Language Sunroof JS Canvas",
          "module": "Language.Sunroof.JS.Canvas",
          "name": "createImageData'",
          "normalized": "JSObject-\u003eJSCanvas-\u003eJS a JSObject",
          "package": "sunroof-compiler",
          "partial": "Image Data'",
          "signature": "JSObject-\u003eJSCanvas-\u003eJS t JSObject",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Canvas.html#v:createImageData-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelects the data attribute.\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.Canvas",
          "name": "data'",
          "package": "sunroof-compiler",
          "signature": "JSSelector JSObject",
          "source": "src/Language-Sunroof-JS-Canvas.html#data%27",
          "type": "function"
        },
        "index": {
          "description": "Selects the data attribute",
          "hierarchy": "Language Sunroof JS Canvas",
          "module": "Language.Sunroof.JS.Canvas",
          "name": "data'",
          "package": "sunroof-compiler",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Canvas.html#v:data-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDraws an image, video or canvas to the canvas.\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.Canvas",
          "name": "drawImage",
          "package": "sunroof-compiler",
          "signature": "JSObject-\u003e (JSNumber, JSNumber)-\u003e JSCanvas-\u003e JS t ()",
          "type": "function"
        },
        "index": {
          "description": "Draws an image video or canvas to the canvas",
          "hierarchy": "Language Sunroof JS Canvas",
          "module": "Language.Sunroof.JS.Canvas",
          "name": "drawImage",
          "normalized": "JSObject-\u003e(JSNumber,JSNumber)-\u003eJSCanvas-\u003eJS a()",
          "package": "sunroof-compiler",
          "partial": "Image",
          "signature": "JSObject-\u003e(JSNumber,JSNumber)-\u003eJSCanvas-\u003eJS t()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Canvas.html#v:drawImage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDraws an image, video or canvas to the canvas.\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.Canvas",
          "name": "drawImage'",
          "package": "sunroof-compiler",
          "signature": "JSObject-\u003e (JSNumber, JSNumber)-\u003e (JSNumber, JSNumber)-\u003e JSCanvas-\u003e JS t ()",
          "type": "function"
        },
        "index": {
          "description": "Draws an image video or canvas to the canvas",
          "hierarchy": "Language Sunroof JS Canvas",
          "module": "Language.Sunroof.JS.Canvas",
          "name": "drawImage'",
          "normalized": "JSObject-\u003e(JSNumber,JSNumber)-\u003e(JSNumber,JSNumber)-\u003eJSCanvas-\u003eJS a()",
          "package": "sunroof-compiler",
          "partial": "Image'",
          "signature": "JSObject-\u003e(JSNumber,JSNumber)-\u003e(JSNumber,JSNumber)-\u003eJSCanvas-\u003eJS t()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Canvas.html#v:drawImage-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDraws an image, video or canvas to the canvas. Clips the drawn object.\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.Canvas",
          "name": "drawImageClip",
          "package": "sunroof-compiler",
          "signature": "JSObject-\u003e (JSNumber, JSNumber)-\u003e (JSNumber, JSNumber)-\u003e (JSNumber, JSNumber)-\u003e (JSNumber, JSNumber)-\u003e JSCanvas-\u003e JS t ()",
          "type": "function"
        },
        "index": {
          "description": "Draws an image video or canvas to the canvas Clips the drawn object",
          "hierarchy": "Language Sunroof JS Canvas",
          "module": "Language.Sunroof.JS.Canvas",
          "name": "drawImageClip",
          "normalized": "JSObject-\u003e(JSNumber,JSNumber)-\u003e(JSNumber,JSNumber)-\u003e(JSNumber,JSNumber)-\u003e(JSNumber,JSNumber)-\u003eJSCanvas-\u003eJS a()",
          "package": "sunroof-compiler",
          "partial": "Image Clip",
          "signature": "JSObject-\u003e(JSNumber,JSNumber)-\u003e(JSNumber,JSNumber)-\u003e(JSNumber,JSNumber)-\u003e(JSNumber,JSNumber)-\u003eJSCanvas-\u003eJS t()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Canvas.html#v:drawImageClip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFills the current path with the current fill style.\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.Canvas",
          "name": "fill",
          "package": "sunroof-compiler",
          "signature": "JSCanvas -\u003e JS t ()",
          "source": "src/Language-Sunroof-JS-Canvas.html#fill",
          "type": "function"
        },
        "index": {
          "description": "Fills the current path with the current fill style",
          "hierarchy": "Language Sunroof JS Canvas",
          "module": "Language.Sunroof.JS.Canvas",
          "name": "fill",
          "normalized": "JSCanvas-\u003eJS a()",
          "package": "sunroof-compiler",
          "signature": "JSCanvas-\u003eJS t()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Canvas.html#v:fill"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDraws a filled rectangle given by its top left corner and size with the\n   current fill style.\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.Canvas",
          "name": "fillRect",
          "package": "sunroof-compiler",
          "signature": "(JSNumber, JSNumber)-\u003e (JSNumber, JSNumber)-\u003e JSCanvas-\u003e JS t ()",
          "type": "function"
        },
        "index": {
          "description": "Draws filled rectangle given by its top left corner and size with the current fill style",
          "hierarchy": "Language Sunroof JS Canvas",
          "module": "Language.Sunroof.JS.Canvas",
          "name": "fillRect",
          "normalized": "(JSNumber,JSNumber)-\u003e(JSNumber,JSNumber)-\u003eJSCanvas-\u003eJS a()",
          "package": "sunroof-compiler",
          "partial": "Rect",
          "signature": "(JSNumber,JSNumber)-\u003e(JSNumber,JSNumber)-\u003eJSCanvas-\u003eJS t()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Canvas.html#v:fillRect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFills a text with the current fill style.\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.Canvas",
          "name": "fillText",
          "package": "sunroof-compiler",
          "signature": "JSString-\u003e (JSNumber, JSNumber)-\u003e JSCanvas-\u003e JS t ()",
          "type": "function"
        },
        "index": {
          "description": "Fills text with the current fill style",
          "hierarchy": "Language Sunroof JS Canvas",
          "module": "Language.Sunroof.JS.Canvas",
          "name": "fillText",
          "normalized": "JSString-\u003e(JSNumber,JSNumber)-\u003eJSCanvas-\u003eJS a()",
          "package": "sunroof-compiler",
          "partial": "Text",
          "signature": "JSString-\u003e(JSNumber,JSNumber)-\u003eJSCanvas-\u003eJS t()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Canvas.html#v:fillText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFills a text with the current fill style.\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.Canvas",
          "name": "fillText'",
          "package": "sunroof-compiler",
          "signature": "JSString-\u003e (JSNumber, JSNumber)-\u003e JSNumber-\u003e JSCanvas-\u003e JS t ()",
          "type": "function"
        },
        "index": {
          "description": "Fills text with the current fill style",
          "hierarchy": "Language Sunroof JS Canvas",
          "module": "Language.Sunroof.JS.Canvas",
          "name": "fillText'",
          "normalized": "JSString-\u003e(JSNumber,JSNumber)-\u003eJSNumber-\u003eJSCanvas-\u003eJS a()",
          "package": "sunroof-compiler",
          "partial": "Text'",
          "signature": "JSString-\u003e(JSNumber,JSNumber)-\u003eJSNumber-\u003eJSCanvas-\u003eJS t()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Canvas.html#v:fillText-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelects the font used by the context.\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.Canvas",
          "name": "font",
          "package": "sunroof-compiler",
          "signature": "JSSelector JSString",
          "source": "src/Language-Sunroof-JS-Canvas.html#font",
          "type": "function"
        },
        "index": {
          "description": "Selects the font used by the context",
          "hierarchy": "Language Sunroof JS Canvas",
          "module": "Language.Sunroof.JS.Canvas",
          "name": "font",
          "package": "sunroof-compiler",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Canvas.html#v:font"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the canvas drawing context for the canvas element it\n   is called on.\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.Canvas",
          "name": "getContext",
          "package": "sunroof-compiler",
          "signature": "JSString -\u003e JSObject -\u003e JS t JSCanvas",
          "source": "src/Language-Sunroof-JS-Canvas.html#getContext",
          "type": "function"
        },
        "index": {
          "description": "Returns the canvas drawing context for the canvas element it is called on",
          "hierarchy": "Language Sunroof JS Canvas",
          "module": "Language.Sunroof.JS.Canvas",
          "name": "getContext",
          "normalized": "JSString-\u003eJSObject-\u003eJS a JSCanvas",
          "package": "sunroof-compiler",
          "partial": "Context",
          "signature": "JSString-\u003eJSObject-\u003eJS t JSCanvas",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Canvas.html#v:getContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the image data of the specified rectanlge of the canvas.\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.Canvas",
          "name": "getImageData",
          "package": "sunroof-compiler",
          "signature": "(JSNumber, JSNumber)-\u003e (JSNumber, JSNumber)-\u003e JSCanvas-\u003e JS t JSObject",
          "type": "function"
        },
        "index": {
          "description": "Get the image data of the specified rectanlge of the canvas",
          "hierarchy": "Language Sunroof JS Canvas",
          "module": "Language.Sunroof.JS.Canvas",
          "name": "getImageData",
          "normalized": "(JSNumber,JSNumber)-\u003e(JSNumber,JSNumber)-\u003eJSCanvas-\u003eJS a JSObject",
          "package": "sunroof-compiler",
          "partial": "Image Data",
          "signature": "(JSNumber,JSNumber)-\u003e(JSNumber,JSNumber)-\u003eJSCanvas-\u003eJS t JSObject",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Canvas.html#v:getImageData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelects the global alpha attribute.\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.Canvas",
          "name": "globalAlpha",
          "package": "sunroof-compiler",
          "signature": "JSSelector JSNumber",
          "source": "src/Language-Sunroof-JS-Canvas.html#globalAlpha",
          "type": "function"
        },
        "index": {
          "description": "Selects the global alpha attribute",
          "hierarchy": "Language Sunroof JS Canvas",
          "module": "Language.Sunroof.JS.Canvas",
          "name": "globalAlpha",
          "package": "sunroof-compiler",
          "partial": "Alpha",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Canvas.html#v:globalAlpha"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelects the height attribute.\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.Canvas",
          "name": "height",
          "package": "sunroof-compiler",
          "signature": "JSSelector JSNumber",
          "source": "src/Language-Sunroof-JS-Canvas.html#height",
          "type": "function"
        },
        "index": {
          "description": "Selects the height attribute",
          "hierarchy": "Language Sunroof JS Canvas",
          "module": "Language.Sunroof.JS.Canvas",
          "name": "height",
          "package": "sunroof-compiler",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Canvas.html#v:height"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns true if the given point is in the path and false otherwise.\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.Canvas",
          "name": "isPointInPath",
          "package": "sunroof-compiler",
          "signature": "(JSNumber, JSNumber)-\u003e JSCanvas-\u003e JS t JSBool",
          "type": "function"
        },
        "index": {
          "description": "Returns true if the given point is in the path and false otherwise",
          "hierarchy": "Language Sunroof JS Canvas",
          "module": "Language.Sunroof.JS.Canvas",
          "name": "isPointInPath",
          "normalized": "(JSNumber,JSNumber)-\u003eJSCanvas-\u003eJS a JSBool",
          "package": "sunroof-compiler",
          "partial": "Point In Path",
          "signature": "(JSNumber,JSNumber)-\u003eJSCanvas-\u003eJS t JSBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Canvas.html#v:isPointInPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets the line cap style to use.\n   Possible values are: \u003ca\u003ebutt\u003c/a\u003e, \u003ca\u003eround\u003c/a\u003e, \u003ca\u003esquare\u003c/a\u003e;\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.Canvas",
          "name": "lineCap",
          "package": "sunroof-compiler",
          "signature": "JSSelector JSString",
          "source": "src/Language-Sunroof-JS-Canvas.html#lineCap",
          "type": "function"
        },
        "index": {
          "description": "Sets the line cap style to use Possible values are butt round square",
          "hierarchy": "Language Sunroof JS Canvas",
          "module": "Language.Sunroof.JS.Canvas",
          "name": "lineCap",
          "package": "sunroof-compiler",
          "partial": "Cap",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Canvas.html#v:lineCap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelects the line join style to use.\n   Possible values are: \u003ca\u003ebevel\u003c/a\u003e, \u003ca\u003eround\u003c/a\u003e, \u003ca\u003emeter\u003c/a\u003e;\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.Canvas",
          "name": "lineJoin",
          "package": "sunroof-compiler",
          "signature": "JSSelector JSString",
          "source": "src/Language-Sunroof-JS-Canvas.html#lineJoin",
          "type": "function"
        },
        "index": {
          "description": "Selects the line join style to use Possible values are bevel round meter",
          "hierarchy": "Language Sunroof JS Canvas",
          "module": "Language.Sunroof.JS.Canvas",
          "name": "lineJoin",
          "package": "sunroof-compiler",
          "partial": "Join",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Canvas.html#v:lineJoin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a straight line path from the current point to the given point.\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.Canvas",
          "name": "lineTo",
          "package": "sunroof-compiler",
          "signature": "(JSNumber, JSNumber)-\u003e JSCanvas-\u003e JS t ()",
          "type": "function"
        },
        "index": {
          "description": "Create straight line path from the current point to the given point",
          "hierarchy": "Language Sunroof JS Canvas",
          "module": "Language.Sunroof.JS.Canvas",
          "name": "lineTo",
          "normalized": "(JSNumber,JSNumber)-\u003eJSCanvas-\u003eJS a()",
          "package": "sunroof-compiler",
          "partial": "To",
          "signature": "(JSNumber,JSNumber)-\u003eJSCanvas-\u003eJS t()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Canvas.html#v:lineTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelects the line width used when stroking.\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.Canvas",
          "name": "lineWidth",
          "package": "sunroof-compiler",
          "signature": "JSSelector JSNumber",
          "source": "src/Language-Sunroof-JS-Canvas.html#lineWidth",
          "type": "function"
        },
        "index": {
          "description": "Selects the line width used when stroking",
          "hierarchy": "Language Sunroof JS Canvas",
          "module": "Language.Sunroof.JS.Canvas",
          "name": "lineWidth",
          "package": "sunroof-compiler",
          "partial": "Width",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Canvas.html#v:lineWidth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns an object that contains the width of the specified text is pixels.\n   See \u003ccode\u003e\u003ca\u003ewidth\u003c/a\u003e\u003c/code\u003e selector.\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.Canvas",
          "name": "measureText",
          "package": "sunroof-compiler",
          "signature": "JSString-\u003e JSCanvas-\u003e JS t JSObject",
          "type": "function"
        },
        "index": {
          "description": "Returns an object that contains the width of the specified text is pixels See width selector",
          "hierarchy": "Language Sunroof JS Canvas",
          "module": "Language.Sunroof.JS.Canvas",
          "name": "measureText",
          "normalized": "JSString-\u003eJSCanvas-\u003eJS a JSObject",
          "package": "sunroof-compiler",
          "partial": "Text",
          "signature": "JSString-\u003eJSCanvas-\u003eJS t JSObject",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Canvas.html#v:measureText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the miter limit used when drawing a miter line join.\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.Canvas",
          "name": "miterLimit",
          "package": "sunroof-compiler",
          "signature": "JSSelector JSNumber",
          "source": "src/Language-Sunroof-JS-Canvas.html#miterLimit",
          "type": "function"
        },
        "index": {
          "description": "Returns the miter limit used when drawing miter line join",
          "hierarchy": "Language Sunroof JS Canvas",
          "module": "Language.Sunroof.JS.Canvas",
          "name": "miterLimit",
          "package": "sunroof-compiler",
          "partial": "Limit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Canvas.html#v:miterLimit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMove the path to the given location.\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.Canvas",
          "name": "moveTo",
          "package": "sunroof-compiler",
          "signature": "(JSNumber, JSNumber)-\u003e JSCanvas-\u003e JS t ()",
          "type": "function"
        },
        "index": {
          "description": "Move the path to the given location",
          "hierarchy": "Language Sunroof JS Canvas",
          "module": "Language.Sunroof.JS.Canvas",
          "name": "moveTo",
          "normalized": "(JSNumber,JSNumber)-\u003eJSCanvas-\u003eJS a()",
          "package": "sunroof-compiler",
          "partial": "To",
          "signature": "(JSNumber,JSNumber)-\u003eJSCanvas-\u003eJS t()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Canvas.html#v:moveTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUses the given image data to replace the rectangle of the\n   canvas at the given position.\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.Canvas",
          "name": "putImageData",
          "package": "sunroof-compiler",
          "signature": "JSObject-\u003e (JSNumber, JSNumber)-\u003e JSCanvas-\u003e JS t ()",
          "type": "function"
        },
        "index": {
          "description": "Uses the given image data to replace the rectangle of the canvas at the given position",
          "hierarchy": "Language Sunroof JS Canvas",
          "module": "Language.Sunroof.JS.Canvas",
          "name": "putImageData",
          "normalized": "JSObject-\u003e(JSNumber,JSNumber)-\u003eJSCanvas-\u003eJS a()",
          "package": "sunroof-compiler",
          "partial": "Image Data",
          "signature": "JSObject-\u003e(JSNumber,JSNumber)-\u003eJSCanvas-\u003eJS t()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Canvas.html#v:putImageData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a quadratic curve to extend the current path.\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.Canvas",
          "name": "quadraticCurveTo",
          "package": "sunroof-compiler",
          "signature": "(JSNumber, JSNumber)-\u003e (JSNumber, JSNumber)-\u003e JSCanvas-\u003e JS t ()",
          "type": "function"
        },
        "index": {
          "description": "Create quadratic curve to extend the current path",
          "hierarchy": "Language Sunroof JS Canvas",
          "module": "Language.Sunroof.JS.Canvas",
          "name": "quadraticCurveTo",
          "normalized": "(JSNumber,JSNumber)-\u003e(JSNumber,JSNumber)-\u003eJSCanvas-\u003eJS a()",
          "package": "sunroof-compiler",
          "partial": "Curve To",
          "signature": "(JSNumber,JSNumber)-\u003e(JSNumber,JSNumber)-\u003eJSCanvas-\u003eJS t()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Canvas.html#v:quadraticCurveTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a rectangle in the current context.\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.Canvas",
          "name": "rect",
          "package": "sunroof-compiler",
          "signature": "(JSNumber, JSNumber)-\u003e (JSNumber, JSNumber)-\u003e JSCanvas-\u003e JS t ()",
          "type": "function"
        },
        "index": {
          "description": "Creates rectangle in the current context",
          "hierarchy": "Language Sunroof JS Canvas",
          "module": "Language.Sunroof.JS.Canvas",
          "name": "rect",
          "normalized": "(JSNumber,JSNumber)-\u003e(JSNumber,JSNumber)-\u003eJSCanvas-\u003eJS a()",
          "package": "sunroof-compiler",
          "signature": "(JSNumber,JSNumber)-\u003e(JSNumber,JSNumber)-\u003eJSCanvas-\u003eJS t()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Canvas.html#v:rect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRestores the last saved paths and state of the context.\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.Canvas",
          "name": "restore",
          "package": "sunroof-compiler",
          "signature": "JSCanvas -\u003e JS t ()",
          "source": "src/Language-Sunroof-JS-Canvas.html#restore",
          "type": "function"
        },
        "index": {
          "description": "Restores the last saved paths and state of the context",
          "hierarchy": "Language Sunroof JS Canvas",
          "module": "Language.Sunroof.JS.Canvas",
          "name": "restore",
          "normalized": "JSCanvas-\u003eJS a()",
          "package": "sunroof-compiler",
          "signature": "JSCanvas-\u003eJS t()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Canvas.html#v:restore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRotates the current drawing. The rotation will only affect drawings\n   made after the rotation.\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.Canvas",
          "name": "rotate",
          "package": "sunroof-compiler",
          "signature": "JSNumber-\u003e JSCanvas-\u003e JS t ()",
          "type": "function"
        },
        "index": {
          "description": "Rotates the current drawing The rotation will only affect drawings made after the rotation",
          "hierarchy": "Language Sunroof JS Canvas",
          "module": "Language.Sunroof.JS.Canvas",
          "name": "rotate",
          "normalized": "JSNumber-\u003eJSCanvas-\u003eJS a()",
          "package": "sunroof-compiler",
          "signature": "JSNumber-\u003eJSCanvas-\u003eJS t()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Canvas.html#v:rotate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSaves the state of the current context.\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.Canvas",
          "name": "save",
          "package": "sunroof-compiler",
          "signature": "JSCanvas -\u003e JS t ()",
          "source": "src/Language-Sunroof-JS-Canvas.html#save",
          "type": "function"
        },
        "index": {
          "description": "Saves the state of the current context",
          "hierarchy": "Language Sunroof JS Canvas",
          "module": "Language.Sunroof.JS.Canvas",
          "name": "save",
          "normalized": "JSCanvas-\u003eJS a()",
          "package": "sunroof-compiler",
          "signature": "JSCanvas-\u003eJS t()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Canvas.html#v:save"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eScales the current drawing.\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.Canvas",
          "name": "scale",
          "package": "sunroof-compiler",
          "signature": "(JSNumber, JSNumber)-\u003e JSCanvas-\u003e JS t ()",
          "type": "function"
        },
        "index": {
          "description": "Scales the current drawing",
          "hierarchy": "Language Sunroof JS Canvas",
          "module": "Language.Sunroof.JS.Canvas",
          "name": "scale",
          "normalized": "(JSNumber,JSNumber)-\u003eJSCanvas-\u003eJS a()",
          "package": "sunroof-compiler",
          "signature": "(JSNumber,JSNumber)-\u003eJSCanvas-\u003eJS t()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Canvas.html#v:scale"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets the fill style of the context. A color value of the form \u003ca/\u003e\n   is expected.\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.Canvas",
          "name": "setFillStyle",
          "package": "sunroof-compiler",
          "signature": "JSString -\u003e JSCanvas -\u003e JS t ()",
          "source": "src/Language-Sunroof-JS-Canvas.html#setFillStyle",
          "type": "function"
        },
        "index": {
          "description": "Sets the fill style of the context color value of the form is expected",
          "hierarchy": "Language Sunroof JS Canvas",
          "module": "Language.Sunroof.JS.Canvas",
          "name": "setFillStyle",
          "normalized": "JSString-\u003eJSCanvas-\u003eJS a()",
          "package": "sunroof-compiler",
          "partial": "Fill Style",
          "signature": "JSString-\u003eJSCanvas-\u003eJS t()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Canvas.html#v:setFillStyle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets the font used by the context.\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.Canvas",
          "name": "setFont",
          "package": "sunroof-compiler",
          "signature": "JSString -\u003e JSCanvas -\u003e JS t ()",
          "source": "src/Language-Sunroof-JS-Canvas.html#setFont",
          "type": "function"
        },
        "index": {
          "description": "Sets the font used by the context",
          "hierarchy": "Language Sunroof JS Canvas",
          "module": "Language.Sunroof.JS.Canvas",
          "name": "setFont",
          "normalized": "JSString-\u003eJSCanvas-\u003eJS a()",
          "package": "sunroof-compiler",
          "partial": "Font",
          "signature": "JSString-\u003eJSCanvas-\u003eJS t()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Canvas.html#v:setFont"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets the global alpha value.\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.Canvas",
          "name": "setGlobalAlpha",
          "package": "sunroof-compiler",
          "signature": "JSNumber -\u003e JSCanvas -\u003e JS t ()",
          "source": "src/Language-Sunroof-JS-Canvas.html#setGlobalAlpha",
          "type": "function"
        },
        "index": {
          "description": "Sets the global alpha value",
          "hierarchy": "Language Sunroof JS Canvas",
          "module": "Language.Sunroof.JS.Canvas",
          "name": "setGlobalAlpha",
          "normalized": "JSNumber-\u003eJSCanvas-\u003eJS a()",
          "package": "sunroof-compiler",
          "partial": "Global Alpha",
          "signature": "JSNumber-\u003eJSCanvas-\u003eJS t()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Canvas.html#v:setGlobalAlpha"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets the line cap style to use.\n   Possible values are: \u003ca\u003ebutt\u003c/a\u003e, \u003ca\u003eround\u003c/a\u003e, \u003ca\u003esquare\u003c/a\u003e;\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.Canvas",
          "name": "setLineCap",
          "package": "sunroof-compiler",
          "signature": "JSString -\u003e JSCanvas -\u003e JS t ()",
          "source": "src/Language-Sunroof-JS-Canvas.html#setLineCap",
          "type": "function"
        },
        "index": {
          "description": "Sets the line cap style to use Possible values are butt round square",
          "hierarchy": "Language Sunroof JS Canvas",
          "module": "Language.Sunroof.JS.Canvas",
          "name": "setLineCap",
          "normalized": "JSString-\u003eJSCanvas-\u003eJS a()",
          "package": "sunroof-compiler",
          "partial": "Line Cap",
          "signature": "JSString-\u003eJSCanvas-\u003eJS t()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Canvas.html#v:setLineCap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets the line join style to use.\n   Possible values are: \u003ca\u003ebevel\u003c/a\u003e, \u003ca\u003eround\u003c/a\u003e, \u003ca\u003emeter\u003c/a\u003e;\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.Canvas",
          "name": "setLineJoin",
          "package": "sunroof-compiler",
          "signature": "JSString -\u003e JSCanvas -\u003e JS t ()",
          "source": "src/Language-Sunroof-JS-Canvas.html#setLineJoin",
          "type": "function"
        },
        "index": {
          "description": "Sets the line join style to use Possible values are bevel round meter",
          "hierarchy": "Language Sunroof JS Canvas",
          "module": "Language.Sunroof.JS.Canvas",
          "name": "setLineJoin",
          "normalized": "JSString-\u003eJSCanvas-\u003eJS a()",
          "package": "sunroof-compiler",
          "partial": "Line Join",
          "signature": "JSString-\u003eJSCanvas-\u003eJS t()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Canvas.html#v:setLineJoin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets the line width used when stroking.\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.Canvas",
          "name": "setLineWidth",
          "package": "sunroof-compiler",
          "signature": "JSNumber-\u003e JSCanvas-\u003e JS t ()",
          "type": "function"
        },
        "index": {
          "description": "Sets the line width used when stroking",
          "hierarchy": "Language Sunroof JS Canvas",
          "module": "Language.Sunroof.JS.Canvas",
          "name": "setLineWidth",
          "normalized": "JSNumber-\u003eJSCanvas-\u003eJS a()",
          "package": "sunroof-compiler",
          "partial": "Line Width",
          "signature": "JSNumber-\u003eJSCanvas-\u003eJS t()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Canvas.html#v:setLineWidth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets the miter limit used when drawing a miter line join.\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.Canvas",
          "name": "setMiterLimit",
          "package": "sunroof-compiler",
          "signature": "JSNumber-\u003e JSCanvas-\u003e JS t ()",
          "type": "function"
        },
        "index": {
          "description": "Sets the miter limit used when drawing miter line join",
          "hierarchy": "Language Sunroof JS Canvas",
          "module": "Language.Sunroof.JS.Canvas",
          "name": "setMiterLimit",
          "normalized": "JSNumber-\u003eJSCanvas-\u003eJS a()",
          "package": "sunroof-compiler",
          "partial": "Miter Limit",
          "signature": "JSNumber-\u003eJSCanvas-\u003eJS t()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Canvas.html#v:setMiterLimit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets the blur level for shadows.\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.Canvas",
          "name": "setShadowBlur",
          "package": "sunroof-compiler",
          "signature": "JSNumber-\u003e JSCanvas-\u003e JS t ()",
          "type": "function"
        },
        "index": {
          "description": "Sets the blur level for shadows",
          "hierarchy": "Language Sunroof JS Canvas",
          "module": "Language.Sunroof.JS.Canvas",
          "name": "setShadowBlur",
          "normalized": "JSNumber-\u003eJSCanvas-\u003eJS a()",
          "package": "sunroof-compiler",
          "partial": "Shadow Blur",
          "signature": "JSNumber-\u003eJSCanvas-\u003eJS t()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Canvas.html#v:setShadowBlur"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets the shadow color property.\n   The given string has to be a valid CSS color value or a\n   color of the form '#XXXXXX'\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.Canvas",
          "name": "setShadowColor",
          "package": "sunroof-compiler",
          "signature": "JSString-\u003e JSCanvas-\u003e JS t ()",
          "type": "function"
        },
        "index": {
          "description": "Sets the shadow color property The given string has to be valid CSS color value or color of the form XXXXXX",
          "hierarchy": "Language Sunroof JS Canvas",
          "module": "Language.Sunroof.JS.Canvas",
          "name": "setShadowColor",
          "normalized": "JSString-\u003eJSCanvas-\u003eJS a()",
          "package": "sunroof-compiler",
          "partial": "Shadow Color",
          "signature": "JSString-\u003eJSCanvas-\u003eJS t()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Canvas.html#v:setShadowColor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets the x offset of a shadow from a shape.\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.Canvas",
          "name": "setShadowOffsetX",
          "package": "sunroof-compiler",
          "signature": "JSNumber-\u003e JSCanvas-\u003e JS t ()",
          "type": "function"
        },
        "index": {
          "description": "Sets the offset of shadow from shape",
          "hierarchy": "Language Sunroof JS Canvas",
          "module": "Language.Sunroof.JS.Canvas",
          "name": "setShadowOffsetX",
          "normalized": "JSNumber-\u003eJSCanvas-\u003eJS a()",
          "package": "sunroof-compiler",
          "partial": "Shadow Offset",
          "signature": "JSNumber-\u003eJSCanvas-\u003eJS t()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Canvas.html#v:setShadowOffsetX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets the y offset of a shadow from a shape.\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.Canvas",
          "name": "setShadowOffsetY",
          "package": "sunroof-compiler",
          "signature": "JSNumber-\u003e JSCanvas-\u003e JS t ()",
          "type": "function"
        },
        "index": {
          "description": "Sets the offset of shadow from shape",
          "hierarchy": "Language Sunroof JS Canvas",
          "module": "Language.Sunroof.JS.Canvas",
          "name": "setShadowOffsetY",
          "normalized": "JSNumber-\u003eJSCanvas-\u003eJS a()",
          "package": "sunroof-compiler",
          "partial": "Shadow Offset",
          "signature": "JSNumber-\u003eJSCanvas-\u003eJS t()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Canvas.html#v:setShadowOffsetY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets the stroke style of the context. A color value of the form \u003ca/\u003e\n   is expected.\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.Canvas",
          "name": "setStrokeStyle",
          "package": "sunroof-compiler",
          "signature": "JSString -\u003e JSCanvas -\u003e JS t ()",
          "source": "src/Language-Sunroof-JS-Canvas.html#setStrokeStyle",
          "type": "function"
        },
        "index": {
          "description": "Sets the stroke style of the context color value of the form is expected",
          "hierarchy": "Language Sunroof JS Canvas",
          "module": "Language.Sunroof.JS.Canvas",
          "name": "setStrokeStyle",
          "normalized": "JSString-\u003eJSCanvas-\u003eJS a()",
          "package": "sunroof-compiler",
          "partial": "Stroke Style",
          "signature": "JSString-\u003eJSCanvas-\u003eJS t()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Canvas.html#v:setStrokeStyle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets the text alignment to be used when drawing text.\n   Possible values are: \u003ca\u003ecenter\u003c/a\u003e, \u003ca\u003eend\u003c/a\u003e, \u003ca\u003eleft\u003c/a\u003e, \u003ca\u003eright\u003c/a\u003e, \u003ca\u003estart\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.Canvas",
          "name": "setTextAlign",
          "package": "sunroof-compiler",
          "signature": "JSString -\u003e JSCanvas -\u003e JS t ()",
          "source": "src/Language-Sunroof-JS-Canvas.html#setTextAlign",
          "type": "function"
        },
        "index": {
          "description": "Sets the text alignment to be used when drawing text Possible values are center end left right start",
          "hierarchy": "Language Sunroof JS Canvas",
          "module": "Language.Sunroof.JS.Canvas",
          "name": "setTextAlign",
          "normalized": "JSString-\u003eJSCanvas-\u003eJS a()",
          "package": "sunroof-compiler",
          "partial": "Text Align",
          "signature": "JSString-\u003eJSCanvas-\u003eJS t()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Canvas.html#v:setTextAlign"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets the baseline to use when drawing text.\n   Possible values are: \u003ca\u003ealphabetic\u003c/a\u003e, \u003ca\u003etop\u003c/a\u003e, \u003ca\u003ehanging\u003c/a\u003e, \u003ca\u003emiddle\u003c/a\u003e, \u003ca\u003eideographic\u003c/a\u003e, \u003ca\u003ebottom\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.Canvas",
          "name": "setTextBaseline",
          "package": "sunroof-compiler",
          "signature": "JSString -\u003e JSCanvas -\u003e JS t ()",
          "source": "src/Language-Sunroof-JS-Canvas.html#setTextBaseline",
          "type": "function"
        },
        "index": {
          "description": "Sets the baseline to use when drawing text Possible values are alphabetic top hanging middle ideographic bottom",
          "hierarchy": "Language Sunroof JS Canvas",
          "module": "Language.Sunroof.JS.Canvas",
          "name": "setTextBaseline",
          "normalized": "JSString-\u003eJSCanvas-\u003eJS a()",
          "package": "sunroof-compiler",
          "partial": "Text Baseline",
          "signature": "JSString-\u003eJSCanvas-\u003eJS t()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Canvas.html#v:setTextBaseline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eResets the transformation matrix to identity and then applies\n   \u003ccode\u003e\u003ca\u003etransform\u003c/a\u003e\u003c/code\u003e with the given paramters to it.\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.Canvas",
          "name": "setTransform",
          "package": "sunroof-compiler",
          "signature": "JSNumber-\u003e JSNumber-\u003e JSNumber-\u003e JSNumber-\u003e JSNumber-\u003e JSNumber-\u003e JSCanvas-\u003e JS t ()",
          "type": "function"
        },
        "index": {
          "description": "Resets the transformation matrix to identity and then applies transform with the given paramters to it",
          "hierarchy": "Language Sunroof JS Canvas",
          "module": "Language.Sunroof.JS.Canvas",
          "name": "setTransform",
          "normalized": "JSNumber-\u003eJSNumber-\u003eJSNumber-\u003eJSNumber-\u003eJSNumber-\u003eJSNumber-\u003eJSCanvas-\u003eJS a()",
          "package": "sunroof-compiler",
          "partial": "Transform",
          "signature": "JSNumber-\u003eJSNumber-\u003eJSNumber-\u003eJSNumber-\u003eJSNumber-\u003eJSNumber-\u003eJSCanvas-\u003eJS t()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Canvas.html#v:setTransform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelects the blur level for shadows.\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.Canvas",
          "name": "shadowBlur",
          "package": "sunroof-compiler",
          "signature": "JSSelector JSNumber",
          "source": "src/Language-Sunroof-JS-Canvas.html#shadowBlur",
          "type": "function"
        },
        "index": {
          "description": "Selects the blur level for shadows",
          "hierarchy": "Language Sunroof JS Canvas",
          "module": "Language.Sunroof.JS.Canvas",
          "name": "shadowBlur",
          "package": "sunroof-compiler",
          "partial": "Blur",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Canvas.html#v:shadowBlur"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelects the shadow color attribute.\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.Canvas",
          "name": "shadowColor",
          "package": "sunroof-compiler",
          "signature": "JSSelector JSString",
          "source": "src/Language-Sunroof-JS-Canvas.html#shadowColor",
          "type": "function"
        },
        "index": {
          "description": "Selects the shadow color attribute",
          "hierarchy": "Language Sunroof JS Canvas",
          "module": "Language.Sunroof.JS.Canvas",
          "name": "shadowColor",
          "package": "sunroof-compiler",
          "partial": "Color",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Canvas.html#v:shadowColor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelects the x offset of a shadow from a shape.\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.Canvas",
          "name": "shadowOffsetX",
          "package": "sunroof-compiler",
          "signature": "JSSelector JSNumber",
          "source": "src/Language-Sunroof-JS-Canvas.html#shadowOffsetX",
          "type": "function"
        },
        "index": {
          "description": "Selects the offset of shadow from shape",
          "hierarchy": "Language Sunroof JS Canvas",
          "module": "Language.Sunroof.JS.Canvas",
          "name": "shadowOffsetX",
          "package": "sunroof-compiler",
          "partial": "Offset",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Canvas.html#v:shadowOffsetX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelects the y offset of a shadow from a shape.\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.Canvas",
          "name": "shadowOffsetY",
          "package": "sunroof-compiler",
          "signature": "JSSelector JSNumber",
          "source": "src/Language-Sunroof-JS-Canvas.html#shadowOffsetY",
          "type": "function"
        },
        "index": {
          "description": "Selects the offset of shadow from shape",
          "hierarchy": "Language Sunroof JS Canvas",
          "module": "Language.Sunroof.JS.Canvas",
          "name": "shadowOffsetY",
          "package": "sunroof-compiler",
          "partial": "Offset",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Canvas.html#v:shadowOffsetY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDraws the current path using the current stroke style.\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.Canvas",
          "name": "stroke",
          "package": "sunroof-compiler",
          "signature": "JSCanvas -\u003e JS t ()",
          "source": "src/Language-Sunroof-JS-Canvas.html#stroke",
          "type": "function"
        },
        "index": {
          "description": "Draws the current path using the current stroke style",
          "hierarchy": "Language Sunroof JS Canvas",
          "module": "Language.Sunroof.JS.Canvas",
          "name": "stroke",
          "normalized": "JSCanvas-\u003eJS a()",
          "package": "sunroof-compiler",
          "signature": "JSCanvas-\u003eJS t()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Canvas.html#v:stroke"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStrokes a rectanlge using the current stroke style.\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.Canvas",
          "name": "strokeRect",
          "package": "sunroof-compiler",
          "signature": "(JSNumber, JSNumber)-\u003e (JSNumber, JSNumber)-\u003e JSCanvas-\u003e JS t ()",
          "type": "function"
        },
        "index": {
          "description": "Strokes rectanlge using the current stroke style",
          "hierarchy": "Language Sunroof JS Canvas",
          "module": "Language.Sunroof.JS.Canvas",
          "name": "strokeRect",
          "normalized": "(JSNumber,JSNumber)-\u003e(JSNumber,JSNumber)-\u003eJSCanvas-\u003eJS a()",
          "package": "sunroof-compiler",
          "partial": "Rect",
          "signature": "(JSNumber,JSNumber)-\u003e(JSNumber,JSNumber)-\u003eJSCanvas-\u003eJS t()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Canvas.html#v:strokeRect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelects the stroke style of the context.\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.Canvas",
          "name": "strokeStyle",
          "package": "sunroof-compiler",
          "signature": "JSSelector JSString",
          "source": "src/Language-Sunroof-JS-Canvas.html#strokeStyle",
          "type": "function"
        },
        "index": {
          "description": "Selects the stroke style of the context",
          "hierarchy": "Language Sunroof JS Canvas",
          "module": "Language.Sunroof.JS.Canvas",
          "name": "strokeStyle",
          "package": "sunroof-compiler",
          "partial": "Style",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Canvas.html#v:strokeStyle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStrokes a text using the current stroke style.\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.Canvas",
          "name": "strokeText",
          "package": "sunroof-compiler",
          "signature": "JSString-\u003e (JSNumber, JSNumber)-\u003e JSCanvas-\u003e JS t ()",
          "type": "function"
        },
        "index": {
          "description": "Strokes text using the current stroke style",
          "hierarchy": "Language Sunroof JS Canvas",
          "module": "Language.Sunroof.JS.Canvas",
          "name": "strokeText",
          "normalized": "JSString-\u003e(JSNumber,JSNumber)-\u003eJSCanvas-\u003eJS a()",
          "package": "sunroof-compiler",
          "partial": "Text",
          "signature": "JSString-\u003e(JSNumber,JSNumber)-\u003eJSCanvas-\u003eJS t()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Canvas.html#v:strokeText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelects the text alignment to be used when drawing text.\n   Possible values are: \u003ca\u003ecenter\u003c/a\u003e, \u003ca\u003eend\u003c/a\u003e, \u003ca\u003eleft\u003c/a\u003e, \u003ca\u003eright\u003c/a\u003e, \u003ca\u003estart\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.Canvas",
          "name": "textAlign",
          "package": "sunroof-compiler",
          "signature": "JSSelector JSString",
          "source": "src/Language-Sunroof-JS-Canvas.html#textAlign",
          "type": "function"
        },
        "index": {
          "description": "Selects the text alignment to be used when drawing text Possible values are center end left right start",
          "hierarchy": "Language Sunroof JS Canvas",
          "module": "Language.Sunroof.JS.Canvas",
          "name": "textAlign",
          "package": "sunroof-compiler",
          "partial": "Align",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Canvas.html#v:textAlign"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelects the baseline to use when drawing text.\n   Possible values are: \u003ca\u003ealphabetic\u003c/a\u003e, \u003ca\u003etop\u003c/a\u003e, \u003ca\u003ehanging\u003c/a\u003e, \u003ca\u003emiddle\u003c/a\u003e, \u003ca\u003eideographic\u003c/a\u003e, \u003ca\u003ebottom\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.Canvas",
          "name": "textBaseline",
          "package": "sunroof-compiler",
          "signature": "JSSelector JSString",
          "source": "src/Language-Sunroof-JS-Canvas.html#textBaseline",
          "type": "function"
        },
        "index": {
          "description": "Selects the baseline to use when drawing text Possible values are alphabetic top hanging middle ideographic bottom",
          "hierarchy": "Language Sunroof JS Canvas",
          "module": "Language.Sunroof.JS.Canvas",
          "name": "textBaseline",
          "package": "sunroof-compiler",
          "partial": "Baseline",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Canvas.html#v:textBaseline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAlters the current transformation matrix. The current one is\n   multiplied with one of the form:\n \u003ccode\u003e\n   a b c\n   d e f\n   0 0 1\n \u003c/code\u003e\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.Canvas",
          "name": "transform",
          "package": "sunroof-compiler",
          "signature": "JSNumber-\u003e JSNumber-\u003e JSNumber-\u003e JSNumber-\u003e JSNumber-\u003e JSNumber-\u003e JSCanvas-\u003e JS t ()",
          "type": "function"
        },
        "index": {
          "description": "Alters the current transformation matrix The current one is multiplied with one of the form",
          "hierarchy": "Language Sunroof JS Canvas",
          "module": "Language.Sunroof.JS.Canvas",
          "name": "transform",
          "normalized": "JSNumber-\u003eJSNumber-\u003eJSNumber-\u003eJSNumber-\u003eJSNumber-\u003eJSNumber-\u003eJSCanvas-\u003eJS a()",
          "package": "sunroof-compiler",
          "signature": "JSNumber-\u003eJSNumber-\u003eJSNumber-\u003eJSNumber-\u003eJSNumber-\u003eJSNumber-\u003eJSCanvas-\u003eJS t()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Canvas.html#v:transform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTranslate the current drawing.\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.Canvas",
          "name": "translate",
          "package": "sunroof-compiler",
          "signature": "(JSNumber, JSNumber)-\u003e JSCanvas-\u003e JS t ()",
          "type": "function"
        },
        "index": {
          "description": "Translate the current drawing",
          "hierarchy": "Language Sunroof JS Canvas",
          "module": "Language.Sunroof.JS.Canvas",
          "name": "translate",
          "normalized": "(JSNumber,JSNumber)-\u003eJSCanvas-\u003eJS a()",
          "package": "sunroof-compiler",
          "signature": "(JSNumber,JSNumber)-\u003eJSCanvas-\u003eJS t()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Canvas.html#v:translate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelects the width attribute.\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.Canvas",
          "name": "width",
          "package": "sunroof-compiler",
          "signature": "JSSelector JSNumber",
          "source": "src/Language-Sunroof-JS-Canvas.html#width",
          "type": "function"
        },
        "index": {
          "description": "Selects the width attribute",
          "hierarchy": "Language Sunroof JS Canvas",
          "module": "Language.Sunroof.JS.Canvas",
          "name": "width",
          "package": "sunroof-compiler",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Canvas.html#v:width"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eJSChan\u003c/a\u003e\u003c/code\u003e provides the same functionality and\n   concurrency abstraction in Javascript computations\n   as \u003ccode\u003e\u003ca\u003eChan\u003c/a\u003e\u003c/code\u003e in Haskell.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.Sunroof.JS.Chan",
          "name": "Chan",
          "package": "sunroof-compiler",
          "source": "src/Language-Sunroof-JS-Chan.html",
          "type": "module"
        },
        "index": {
          "description": "JSChan provides the same functionality and concurrency abstraction in Javascript computations as Chan in Haskell",
          "hierarchy": "Language Sunroof JS Chan",
          "module": "Language.Sunroof.JS.Chan",
          "name": "Chan",
          "package": "sunroof-compiler",
          "partial": "Chan",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Chan.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eJSChan\u003c/a\u003e\u003c/code\u003e abstraction. The type parameter gives\n   the type of values held in the channel.\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.Chan",
          "name": "JSChan",
          "package": "sunroof-compiler",
          "source": "src/Language-Sunroof-JS-Chan.html#JSChan",
          "type": "data"
        },
        "index": {
          "description": "JSChan abstraction The type parameter gives the type of values held in the channel",
          "hierarchy": "Language Sunroof JS Chan",
          "module": "Language.Sunroof.JS.Chan",
          "name": "JSChan",
          "package": "sunroof-compiler",
          "partial": "JSChan",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Chan.html#t:JSChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new empty \u003ccode\u003e\u003ca\u003eJSChan\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Language.Sunroof.JS.Chan\",\"Language.Sunroof\"]",
          "name": "newChan",
          "package": "sunroof-compiler",
          "signature": "JS t (JSChan a)",
          "source": "src/Language-Sunroof-JS-Chan.html#newChan",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Chan.html#v:newChan\",\"http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof.html#v:newChan\"]"
        },
        "index": {
          "description": "Create new empty JSChan",
          "hierarchy": "Language Sunroof JS Chan",
          "module": "Language.Sunroof.JS.Chan",
          "name": "newChan",
          "package": "sunroof-compiler",
          "partial": "Chan",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Chan.html#v:newChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake a value out of the channel. If there is no value\n   inside, this will block until one is available.\n\u003c/p\u003e",
          "module": "[\"Language.Sunroof.JS.Chan\",\"Language.Sunroof\"]",
          "name": "readChan",
          "package": "sunroof-compiler",
          "signature": "JSChan a -\u003e JS B a",
          "source": "src/Language-Sunroof-JS-Chan.html#readChan",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Chan.html#v:readChan\",\"http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof.html#v:readChan\"]"
        },
        "index": {
          "description": "Take value out of the channel If there is no value inside this will block until one is available",
          "hierarchy": "Language Sunroof JS Chan",
          "module": "Language.Sunroof.JS.Chan",
          "name": "readChan",
          "normalized": "JSChan a-\u003eJS B a",
          "package": "sunroof-compiler",
          "partial": "Chan",
          "signature": "JSChan a-\u003eJS B a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Chan.html#v:readChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePut a value into the channel. This will never block.\n\u003c/p\u003e",
          "module": "[\"Language.Sunroof.JS.Chan\",\"Language.Sunroof\"]",
          "name": "writeChan",
          "package": "sunroof-compiler",
          "signature": "a -\u003e JSChan a -\u003e JS t ()",
          "source": "src/Language-Sunroof-JS-Chan.html#writeChan",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Chan.html#v:writeChan\",\"http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof.html#v:writeChan\"]"
        },
        "index": {
          "description": "Put value into the channel This will never block",
          "hierarchy": "Language Sunroof JS Chan",
          "module": "Language.Sunroof.JS.Chan",
          "name": "writeChan",
          "normalized": "a-\u003eJSChan a-\u003eJS b()",
          "package": "sunroof-compiler",
          "partial": "Chan",
          "signature": "a-\u003eJSChan a-\u003eJS t()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Chan.html#v:writeChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe \u003ccode\u003eDate\u003c/code\u003e module provides the API for the Javascript \u003ccode\u003eDate\u003c/code\u003e\n   object. The API documentation is mainly taken from \n   w3schools (\u003ca\u003ehttp://www.w3schools.com/jsref/jsref_obj_date.asp\u003c/a\u003e).\n   Deprecated methods are not supported.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.Sunroof.JS.Date",
          "name": "Date",
          "package": "sunroof-compiler",
          "source": "src/Language-Sunroof-JS-Date.html",
          "type": "module"
        },
        "index": {
          "description": "The Date module provides the API for the Javascript Date object The API documentation is mainly taken from w3schools http www.w3schools.com jsref jsref obj date.asp Deprecated methods are not supported",
          "hierarchy": "Language Sunroof JS Date",
          "module": "Language.Sunroof.JS.Date",
          "name": "Date",
          "package": "sunroof-compiler",
          "partial": "Date",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Date.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of a date object.\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.Date",
          "name": "JSDate",
          "package": "sunroof-compiler",
          "source": "src/Language-Sunroof-JS-Date.html#JSDate",
          "type": "data"
        },
        "index": {
          "description": "The type of date object",
          "hierarchy": "Language Sunroof JS Date",
          "module": "Language.Sunroof.JS.Date",
          "name": "JSDate",
          "package": "sunroof-compiler",
          "partial": "JSDate",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Date.html#t:JSDate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the day of the month (from 1-31).\n   See: \u003ca\u003ehttp://www.w3schools.com/jsref/jsref_getdate.asp\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.Date",
          "name": "getDate",
          "package": "sunroof-compiler",
          "signature": "JSDate -\u003e JS t JSNumber",
          "source": "src/Language-Sunroof-JS-Date.html#getDate",
          "type": "function"
        },
        "index": {
          "description": "Returns the day of the month from See http www.w3schools.com jsref jsref getdate.asp",
          "hierarchy": "Language Sunroof JS Date",
          "module": "Language.Sunroof.JS.Date",
          "name": "getDate",
          "normalized": "JSDate-\u003eJS a JSNumber",
          "package": "sunroof-compiler",
          "partial": "Date",
          "signature": "JSDate-\u003eJS t JSNumber",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Date.html#v:getDate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the day of the week (from 0-6).\n   See: \u003ca\u003ehttp://www.w3schools.com/jsref/jsref_getday.asp\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.Date",
          "name": "getDay",
          "package": "sunroof-compiler",
          "signature": "JSDate -\u003e JS t JSNumber",
          "source": "src/Language-Sunroof-JS-Date.html#getDay",
          "type": "function"
        },
        "index": {
          "description": "Returns the day of the week from See http www.w3schools.com jsref jsref getday.asp",
          "hierarchy": "Language Sunroof JS Date",
          "module": "Language.Sunroof.JS.Date",
          "name": "getDay",
          "normalized": "JSDate-\u003eJS a JSNumber",
          "package": "sunroof-compiler",
          "partial": "Day",
          "signature": "JSDate-\u003eJS t JSNumber",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Date.html#v:getDay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the year (four digits).\n   See: \u003ca\u003ehttp://www.w3schools.com/jsref/jsref_getfullyear.asp\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.Date",
          "name": "getFullYear",
          "package": "sunroof-compiler",
          "signature": "JSDate -\u003e JS t JSNumber",
          "source": "src/Language-Sunroof-JS-Date.html#getFullYear",
          "type": "function"
        },
        "index": {
          "description": "Returns the year four digits See http www.w3schools.com jsref jsref getfullyear.asp",
          "hierarchy": "Language Sunroof JS Date",
          "module": "Language.Sunroof.JS.Date",
          "name": "getFullYear",
          "normalized": "JSDate-\u003eJS a JSNumber",
          "package": "sunroof-compiler",
          "partial": "Full Year",
          "signature": "JSDate-\u003eJS t JSNumber",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Date.html#v:getFullYear"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the hour (from 0-23).\n   See: \u003ca\u003ehttp://www.w3schools.com/jsref/jsref_gethours.asp\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.Date",
          "name": "getHours",
          "package": "sunroof-compiler",
          "signature": "JSDate -\u003e JS t JSNumber",
          "source": "src/Language-Sunroof-JS-Date.html#getHours",
          "type": "function"
        },
        "index": {
          "description": "Returns the hour from See http www.w3schools.com jsref jsref gethours.asp",
          "hierarchy": "Language Sunroof JS Date",
          "module": "Language.Sunroof.JS.Date",
          "name": "getHours",
          "normalized": "JSDate-\u003eJS a JSNumber",
          "package": "sunroof-compiler",
          "partial": "Hours",
          "signature": "JSDate-\u003eJS t JSNumber",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Date.html#v:getHours"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the milliseconds (from 0-999).\n   See: \u003ca\u003ehttp://www.w3schools.com/jsref/jsref_getmilliseconds.asp\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.Date",
          "name": "getMilliseconds",
          "package": "sunroof-compiler",
          "signature": "JSDate -\u003e JS t JSNumber",
          "source": "src/Language-Sunroof-JS-Date.html#getMilliseconds",
          "type": "function"
        },
        "index": {
          "description": "Returns the milliseconds from See http www.w3schools.com jsref jsref getmilliseconds.asp",
          "hierarchy": "Language Sunroof JS Date",
          "module": "Language.Sunroof.JS.Date",
          "name": "getMilliseconds",
          "normalized": "JSDate-\u003eJS a JSNumber",
          "package": "sunroof-compiler",
          "partial": "Milliseconds",
          "signature": "JSDate-\u003eJS t JSNumber",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Date.html#v:getMilliseconds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the minutes (from 0-59).\n   See: \u003ca\u003ehttp://www.w3schools.com/jsref/jsref_getminutes.asp\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.Date",
          "name": "getMinutes",
          "package": "sunroof-compiler",
          "signature": "JSDate -\u003e JS t JSNumber",
          "source": "src/Language-Sunroof-JS-Date.html#getMinutes",
          "type": "function"
        },
        "index": {
          "description": "Returns the minutes from See http www.w3schools.com jsref jsref getminutes.asp",
          "hierarchy": "Language Sunroof JS Date",
          "module": "Language.Sunroof.JS.Date",
          "name": "getMinutes",
          "normalized": "JSDate-\u003eJS a JSNumber",
          "package": "sunroof-compiler",
          "partial": "Minutes",
          "signature": "JSDate-\u003eJS t JSNumber",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Date.html#v:getMinutes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the month (from 0-11).\n   See: \u003ca\u003ehttp://www.w3schools.com/jsref/jsref_getmonth.asp\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.Date",
          "name": "getMonth",
          "package": "sunroof-compiler",
          "signature": "JSDate -\u003e JS t JSNumber",
          "source": "src/Language-Sunroof-JS-Date.html#getMonth",
          "type": "function"
        },
        "index": {
          "description": "Returns the month from See http www.w3schools.com jsref jsref getmonth.asp",
          "hierarchy": "Language Sunroof JS Date",
          "module": "Language.Sunroof.JS.Date",
          "name": "getMonth",
          "normalized": "JSDate-\u003eJS a JSNumber",
          "package": "sunroof-compiler",
          "partial": "Month",
          "signature": "JSDate-\u003eJS t JSNumber",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Date.html#v:getMonth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the seconds (from 0-59).\n   See: \u003ca\u003ehttp://www.w3schools.com/jsref/jsref_getseconds.asp\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.Date",
          "name": "getSeconds",
          "package": "sunroof-compiler",
          "signature": "JSDate -\u003e JS t JSNumber",
          "source": "src/Language-Sunroof-JS-Date.html#getSeconds",
          "type": "function"
        },
        "index": {
          "description": "Returns the seconds from See http www.w3schools.com jsref jsref getseconds.asp",
          "hierarchy": "Language Sunroof JS Date",
          "module": "Language.Sunroof.JS.Date",
          "name": "getSeconds",
          "normalized": "JSDate-\u003eJS a JSNumber",
          "package": "sunroof-compiler",
          "partial": "Seconds",
          "signature": "JSDate-\u003eJS t JSNumber",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Date.html#v:getSeconds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the number of milliseconds since midnight Jan 1, 1970.\n   See: \u003ca\u003ehttp://www.w3schools.com/jsref/jsref_gettime.asp\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.Date",
          "name": "getTime",
          "package": "sunroof-compiler",
          "signature": "JSDate -\u003e JS t JSNumber",
          "source": "src/Language-Sunroof-JS-Date.html#getTime",
          "type": "function"
        },
        "index": {
          "description": "Returns the number of milliseconds since midnight Jan See http www.w3schools.com jsref jsref gettime.asp",
          "hierarchy": "Language Sunroof JS Date",
          "module": "Language.Sunroof.JS.Date",
          "name": "getTime",
          "normalized": "JSDate-\u003eJS a JSNumber",
          "package": "sunroof-compiler",
          "partial": "Time",
          "signature": "JSDate-\u003eJS t JSNumber",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Date.html#v:getTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the time difference between UTC time and local time, in minutes.\n   See: \u003ca\u003ehttp://www.w3schools.com/jsref/jsref_gettimezoneoffset.asp\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.Date",
          "name": "getTimezoneOffset",
          "package": "sunroof-compiler",
          "signature": "JSDate -\u003e JS t JSNumber",
          "source": "src/Language-Sunroof-JS-Date.html#getTimezoneOffset",
          "type": "function"
        },
        "index": {
          "description": "Returns the time difference between UTC time and local time in minutes See http www.w3schools.com jsref jsref gettimezoneoffset.asp",
          "hierarchy": "Language Sunroof JS Date",
          "module": "Language.Sunroof.JS.Date",
          "name": "getTimezoneOffset",
          "normalized": "JSDate-\u003eJS a JSNumber",
          "package": "sunroof-compiler",
          "partial": "Timezone Offset",
          "signature": "JSDate-\u003eJS t JSNumber",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Date.html#v:getTimezoneOffset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the day of the month, according to universal time (from 1-31).\n   See: \u003ca\u003ehttp://www.w3schools.com/jsref/jsref_getutcdate.asp\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.Date",
          "name": "getUTCDate",
          "package": "sunroof-compiler",
          "signature": "JSDate -\u003e JS t JSNumber",
          "source": "src/Language-Sunroof-JS-Date.html#getUTCDate",
          "type": "function"
        },
        "index": {
          "description": "Returns the day of the month according to universal time from See http www.w3schools.com jsref jsref getutcdate.asp",
          "hierarchy": "Language Sunroof JS Date",
          "module": "Language.Sunroof.JS.Date",
          "name": "getUTCDate",
          "normalized": "JSDate-\u003eJS a JSNumber",
          "package": "sunroof-compiler",
          "partial": "UTCDate",
          "signature": "JSDate-\u003eJS t JSNumber",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Date.html#v:getUTCDate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the day of the week, according to universal time (from 0-6).\n   See: \u003ca\u003ehttp://www.w3schools.com/jsref/jsref_getutcday.asp\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.Date",
          "name": "getUTCDay",
          "package": "sunroof-compiler",
          "signature": "JSDate -\u003e JS t JSNumber",
          "source": "src/Language-Sunroof-JS-Date.html#getUTCDay",
          "type": "function"
        },
        "index": {
          "description": "Returns the day of the week according to universal time from See http www.w3schools.com jsref jsref getutcday.asp",
          "hierarchy": "Language Sunroof JS Date",
          "module": "Language.Sunroof.JS.Date",
          "name": "getUTCDay",
          "normalized": "JSDate-\u003eJS a JSNumber",
          "package": "sunroof-compiler",
          "partial": "UTCDay",
          "signature": "JSDate-\u003eJS t JSNumber",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Date.html#v:getUTCDay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the year, according to universal time (four digits).\n   See: \u003ca\u003ehttp://www.w3schools.com/jsref/jsref_getutcfullyear.asp\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.Date",
          "name": "getUTCFullYear",
          "package": "sunroof-compiler",
          "signature": "JSDate -\u003e JS t JSNumber",
          "source": "src/Language-Sunroof-JS-Date.html#getUTCFullYear",
          "type": "function"
        },
        "index": {
          "description": "Returns the year according to universal time four digits See http www.w3schools.com jsref jsref getutcfullyear.asp",
          "hierarchy": "Language Sunroof JS Date",
          "module": "Language.Sunroof.JS.Date",
          "name": "getUTCFullYear",
          "normalized": "JSDate-\u003eJS a JSNumber",
          "package": "sunroof-compiler",
          "partial": "UTCFull Year",
          "signature": "JSDate-\u003eJS t JSNumber",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Date.html#v:getUTCFullYear"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the hour, according to universal time (from 0-23).\n   See: \u003ca\u003ehttp://www.w3schools.com/jsref/jsref_getutchours.asp\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.Date",
          "name": "getUTCHours",
          "package": "sunroof-compiler",
          "signature": "JSDate -\u003e JS t JSNumber",
          "source": "src/Language-Sunroof-JS-Date.html#getUTCHours",
          "type": "function"
        },
        "index": {
          "description": "Returns the hour according to universal time from See http www.w3schools.com jsref jsref getutchours.asp",
          "hierarchy": "Language Sunroof JS Date",
          "module": "Language.Sunroof.JS.Date",
          "name": "getUTCHours",
          "normalized": "JSDate-\u003eJS a JSNumber",
          "package": "sunroof-compiler",
          "partial": "UTCHours",
          "signature": "JSDate-\u003eJS t JSNumber",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Date.html#v:getUTCHours"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the milliseconds, according to universal time (from 0-999).\n   See: \u003ca\u003ehttp://www.w3schools.com/jsref/jsref_getutcmilliseconds.asp\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.Date",
          "name": "getUTCMilliseconds",
          "package": "sunroof-compiler",
          "signature": "JSDate -\u003e JS t JSNumber",
          "source": "src/Language-Sunroof-JS-Date.html#getUTCMilliseconds",
          "type": "function"
        },
        "index": {
          "description": "Returns the milliseconds according to universal time from See http www.w3schools.com jsref jsref getutcmilliseconds.asp",
          "hierarchy": "Language Sunroof JS Date",
          "module": "Language.Sunroof.JS.Date",
          "name": "getUTCMilliseconds",
          "normalized": "JSDate-\u003eJS a JSNumber",
          "package": "sunroof-compiler",
          "partial": "UTCMilliseconds",
          "signature": "JSDate-\u003eJS t JSNumber",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Date.html#v:getUTCMilliseconds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the minutes, according to universal time (from 0-59).\n   See: \u003ca\u003ehttp://www.w3schools.com/jsref/jsref_getutcminutes.asp\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.Date",
          "name": "getUTCMinutes",
          "package": "sunroof-compiler",
          "signature": "JSDate -\u003e JS t JSNumber",
          "source": "src/Language-Sunroof-JS-Date.html#getUTCMinutes",
          "type": "function"
        },
        "index": {
          "description": "Returns the minutes according to universal time from See http www.w3schools.com jsref jsref getutcminutes.asp",
          "hierarchy": "Language Sunroof JS Date",
          "module": "Language.Sunroof.JS.Date",
          "name": "getUTCMinutes",
          "normalized": "JSDate-\u003eJS a JSNumber",
          "package": "sunroof-compiler",
          "partial": "UTCMinutes",
          "signature": "JSDate-\u003eJS t JSNumber",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Date.html#v:getUTCMinutes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the month, according to universal time (from 0-11).\n   See: \u003ca\u003ehttp://www.w3schools.com/jsref/jsref_getutcmonth.asp\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.Date",
          "name": "getUTCMonth",
          "package": "sunroof-compiler",
          "signature": "JSDate -\u003e JS t JSNumber",
          "source": "src/Language-Sunroof-JS-Date.html#getUTCMonth",
          "type": "function"
        },
        "index": {
          "description": "Returns the month according to universal time from See http www.w3schools.com jsref jsref getutcmonth.asp",
          "hierarchy": "Language Sunroof JS Date",
          "module": "Language.Sunroof.JS.Date",
          "name": "getUTCMonth",
          "normalized": "JSDate-\u003eJS a JSNumber",
          "package": "sunroof-compiler",
          "partial": "UTCMonth",
          "signature": "JSDate-\u003eJS t JSNumber",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Date.html#v:getUTCMonth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the seconds, according to universal time (from 0-59).\n   See: \u003ca\u003ehttp://www.w3schools.com/jsref/jsref_getutcseconds.asp\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.Date",
          "name": "getUTCSeconds",
          "package": "sunroof-compiler",
          "signature": "JSDate -\u003e JS t JSNumber",
          "source": "src/Language-Sunroof-JS-Date.html#getUTCSeconds",
          "type": "function"
        },
        "index": {
          "description": "Returns the seconds according to universal time from See http www.w3schools.com jsref jsref getutcseconds.asp",
          "hierarchy": "Language Sunroof JS Date",
          "module": "Language.Sunroof.JS.Date",
          "name": "getUTCSeconds",
          "normalized": "JSDate-\u003eJS a JSNumber",
          "package": "sunroof-compiler",
          "partial": "UTCSeconds",
          "signature": "JSDate-\u003eJS t JSNumber",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Date.html#v:getUTCSeconds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a new \u003ccode\u003eDate\u003c/code\u003e object.\n   See: \u003ca\u003ehttp://www.w3schools.com/jsref/jsref_obj_date.asp\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.Date",
          "name": "newDate",
          "package": "sunroof-compiler",
          "signature": "a -\u003e JS t JSDate",
          "source": "src/Language-Sunroof-JS-Date.html#newDate",
          "type": "function"
        },
        "index": {
          "description": "Creates new Date object See http www.w3schools.com jsref jsref obj date.asp",
          "hierarchy": "Language Sunroof JS Date",
          "module": "Language.Sunroof.JS.Date",
          "name": "newDate",
          "normalized": "a-\u003eJS b JSDate",
          "package": "sunroof-compiler",
          "partial": "Date",
          "signature": "a-\u003eJS t JSDate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Date.html#v:newDate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses a date string and returns the number of milliseconds \n   since midnight of January 1, 1970.\n   See: \u003ca\u003ehttp://www.w3schools.com/jsref/jsref_parse.asp\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.Date",
          "name": "parseDate",
          "package": "sunroof-compiler",
          "signature": "JSString -\u003e JSDate -\u003e JS t JSNumber",
          "source": "src/Language-Sunroof-JS-Date.html#parseDate",
          "type": "function"
        },
        "index": {
          "description": "Parses date string and returns the number of milliseconds since midnight of January See http www.w3schools.com jsref jsref parse.asp",
          "hierarchy": "Language Sunroof JS Date",
          "module": "Language.Sunroof.JS.Date",
          "name": "parseDate",
          "normalized": "JSString-\u003eJSDate-\u003eJS a JSNumber",
          "package": "sunroof-compiler",
          "partial": "Date",
          "signature": "JSString-\u003eJSDate-\u003eJS t JSNumber",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Date.html#v:parseDate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets the day of the month of a date object.\n   See: \u003ca\u003ehttp://www.w3schools.com/jsref/jsref_setdate.asp\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.Date",
          "name": "setDate",
          "package": "sunroof-compiler",
          "signature": "JSNumber -\u003e JSDate -\u003e JS t ()",
          "source": "src/Language-Sunroof-JS-Date.html#setDate",
          "type": "function"
        },
        "index": {
          "description": "Sets the day of the month of date object See http www.w3schools.com jsref jsref setdate.asp",
          "hierarchy": "Language Sunroof JS Date",
          "module": "Language.Sunroof.JS.Date",
          "name": "setDate",
          "normalized": "JSNumber-\u003eJSDate-\u003eJS a()",
          "package": "sunroof-compiler",
          "partial": "Date",
          "signature": "JSNumber-\u003eJSDate-\u003eJS t()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Date.html#v:setDate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets the year (four digits) of a date object.\n   See: \u003ca\u003ehttp://www.w3schools.com/jsref/jsref_setfullyear.asp\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.Date",
          "name": "setFullYear",
          "package": "sunroof-compiler",
          "signature": "JSNumber -\u003e JSDate -\u003e JS t ()",
          "source": "src/Language-Sunroof-JS-Date.html#setFullYear",
          "type": "function"
        },
        "index": {
          "description": "Sets the year four digits of date object See http www.w3schools.com jsref jsref setfullyear.asp",
          "hierarchy": "Language Sunroof JS Date",
          "module": "Language.Sunroof.JS.Date",
          "name": "setFullYear",
          "normalized": "JSNumber-\u003eJSDate-\u003eJS a()",
          "package": "sunroof-compiler",
          "partial": "Full Year",
          "signature": "JSNumber-\u003eJSDate-\u003eJS t()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Date.html#v:setFullYear"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets the hour of a date object.\n   See: \u003ca\u003ehttp://www.w3schools.com/jsref/jsref_sethours.asp\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.Date",
          "name": "setHours",
          "package": "sunroof-compiler",
          "signature": "JSNumber -\u003e JSDate -\u003e JS t ()",
          "source": "src/Language-Sunroof-JS-Date.html#setHours",
          "type": "function"
        },
        "index": {
          "description": "Sets the hour of date object See http www.w3schools.com jsref jsref sethours.asp",
          "hierarchy": "Language Sunroof JS Date",
          "module": "Language.Sunroof.JS.Date",
          "name": "setHours",
          "normalized": "JSNumber-\u003eJSDate-\u003eJS a()",
          "package": "sunroof-compiler",
          "partial": "Hours",
          "signature": "JSNumber-\u003eJSDate-\u003eJS t()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Date.html#v:setHours"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets the milliseconds of a date object.\n   See: \u003ca\u003ehttp://www.w3schools.com/jsref/jsref_setmilliseconds.asp\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.Date",
          "name": "setMilliseconds",
          "package": "sunroof-compiler",
          "signature": "JSNumber -\u003e JSDate -\u003e JS t ()",
          "source": "src/Language-Sunroof-JS-Date.html#setMilliseconds",
          "type": "function"
        },
        "index": {
          "description": "Sets the milliseconds of date object See http www.w3schools.com jsref jsref setmilliseconds.asp",
          "hierarchy": "Language Sunroof JS Date",
          "module": "Language.Sunroof.JS.Date",
          "name": "setMilliseconds",
          "normalized": "JSNumber-\u003eJSDate-\u003eJS a()",
          "package": "sunroof-compiler",
          "partial": "Milliseconds",
          "signature": "JSNumber-\u003eJSDate-\u003eJS t()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Date.html#v:setMilliseconds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the minutes of a date object.\n   See: \u003ca\u003ehttp://www.w3schools.com/jsref/jsref_setminutes.asp\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.Date",
          "name": "setMinutes",
          "package": "sunroof-compiler",
          "signature": "JSNumber -\u003e JSDate -\u003e JS t ()",
          "source": "src/Language-Sunroof-JS-Date.html#setMinutes",
          "type": "function"
        },
        "index": {
          "description": "Set the minutes of date object See http www.w3schools.com jsref jsref setminutes.asp",
          "hierarchy": "Language Sunroof JS Date",
          "module": "Language.Sunroof.JS.Date",
          "name": "setMinutes",
          "normalized": "JSNumber-\u003eJSDate-\u003eJS a()",
          "package": "sunroof-compiler",
          "partial": "Minutes",
          "signature": "JSNumber-\u003eJSDate-\u003eJS t()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Date.html#v:setMinutes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets the month of a date object.\n   See: \u003ca\u003ehttp://www.w3schools.com/jsref/jsref_setmonth.asp\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.Date",
          "name": "setMonth",
          "package": "sunroof-compiler",
          "signature": "JSNumber -\u003e JSDate -\u003e JS t ()",
          "source": "src/Language-Sunroof-JS-Date.html#setMonth",
          "type": "function"
        },
        "index": {
          "description": "Sets the month of date object See http www.w3schools.com jsref jsref setmonth.asp",
          "hierarchy": "Language Sunroof JS Date",
          "module": "Language.Sunroof.JS.Date",
          "name": "setMonth",
          "normalized": "JSNumber-\u003eJSDate-\u003eJS a()",
          "package": "sunroof-compiler",
          "partial": "Month",
          "signature": "JSNumber-\u003eJSDate-\u003eJS t()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Date.html#v:setMonth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets the seconds of a date object.\n   See: \u003ca\u003ehttp://www.w3schools.com/jsref/jsref_setseconds.asp\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.Date",
          "name": "setSeconds",
          "package": "sunroof-compiler",
          "signature": "JSNumber -\u003e JSDate -\u003e JS t ()",
          "source": "src/Language-Sunroof-JS-Date.html#setSeconds",
          "type": "function"
        },
        "index": {
          "description": "Sets the seconds of date object See http www.w3schools.com jsref jsref setseconds.asp",
          "hierarchy": "Language Sunroof JS Date",
          "module": "Language.Sunroof.JS.Date",
          "name": "setSeconds",
          "normalized": "JSNumber-\u003eJSDate-\u003eJS a()",
          "package": "sunroof-compiler",
          "partial": "Seconds",
          "signature": "JSNumber-\u003eJSDate-\u003eJS t()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Date.html#v:setSeconds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets a date and time by adding or subtracting a specified number \n   of milliseconds to/from midnight January 1, 1970.\n   See: \u003ca\u003ehttp://www.w3schools.com/jsref/jsref_settime.asp\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.Date",
          "name": "setTime",
          "package": "sunroof-compiler",
          "signature": "JSNumber -\u003e JSDate -\u003e JS t ()",
          "source": "src/Language-Sunroof-JS-Date.html#setTime",
          "type": "function"
        },
        "index": {
          "description": "Sets date and time by adding or subtracting specified number of milliseconds to from midnight January See http www.w3schools.com jsref jsref settime.asp",
          "hierarchy": "Language Sunroof JS Date",
          "module": "Language.Sunroof.JS.Date",
          "name": "setTime",
          "normalized": "JSNumber-\u003eJSDate-\u003eJS a()",
          "package": "sunroof-compiler",
          "partial": "Time",
          "signature": "JSNumber-\u003eJSDate-\u003eJS t()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Date.html#v:setTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets the day of the month of a date object, according to universal time.\n   See: \u003ca\u003ehttp://www.w3schools.com/jsref/jsref_setutcdate.asp\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.Date",
          "name": "setUTCDate",
          "package": "sunroof-compiler",
          "signature": "JSNumber -\u003e JSDate -\u003e JS t ()",
          "source": "src/Language-Sunroof-JS-Date.html#setUTCDate",
          "type": "function"
        },
        "index": {
          "description": "Sets the day of the month of date object according to universal time See http www.w3schools.com jsref jsref setutcdate.asp",
          "hierarchy": "Language Sunroof JS Date",
          "module": "Language.Sunroof.JS.Date",
          "name": "setUTCDate",
          "normalized": "JSNumber-\u003eJSDate-\u003eJS a()",
          "package": "sunroof-compiler",
          "partial": "UTCDate",
          "signature": "JSNumber-\u003eJSDate-\u003eJS t()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Date.html#v:setUTCDate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets the year of a date object, according to universal time (four digits).\n   See: \u003ca\u003ehttp://www.w3schools.com/jsref/jsref_setutcfullyear.asp\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.Date",
          "name": "setUTCFullYear",
          "package": "sunroof-compiler",
          "signature": "JSNumber -\u003e JSDate -\u003e JS t ()",
          "source": "src/Language-Sunroof-JS-Date.html#setUTCFullYear",
          "type": "function"
        },
        "index": {
          "description": "Sets the year of date object according to universal time four digits See http www.w3schools.com jsref jsref setutcfullyear.asp",
          "hierarchy": "Language Sunroof JS Date",
          "module": "Language.Sunroof.JS.Date",
          "name": "setUTCFullYear",
          "normalized": "JSNumber-\u003eJSDate-\u003eJS a()",
          "package": "sunroof-compiler",
          "partial": "UTCFull Year",
          "signature": "JSNumber-\u003eJSDate-\u003eJS t()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Date.html#v:setUTCFullYear"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets the hour of a date object, according to universal time.\n   See: \u003ca\u003ehttp://www.w3schools.com/jsref/jsref_setutchours.asp\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.Date",
          "name": "setUTCHours",
          "package": "sunroof-compiler",
          "signature": "JSNumber -\u003e JSDate -\u003e JS t ()",
          "source": "src/Language-Sunroof-JS-Date.html#setUTCHours",
          "type": "function"
        },
        "index": {
          "description": "Sets the hour of date object according to universal time See http www.w3schools.com jsref jsref setutchours.asp",
          "hierarchy": "Language Sunroof JS Date",
          "module": "Language.Sunroof.JS.Date",
          "name": "setUTCHours",
          "normalized": "JSNumber-\u003eJSDate-\u003eJS a()",
          "package": "sunroof-compiler",
          "partial": "UTCHours",
          "signature": "JSNumber-\u003eJSDate-\u003eJS t()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Date.html#v:setUTCHours"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets the milliseconds of a date object, according to universal time.\n   See: \u003ca\u003ehttp://www.w3schools.com/jsref/jsref_setutcmilliseconds.asp\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.Date",
          "name": "setUTCMilliseconds",
          "package": "sunroof-compiler",
          "signature": "JSNumber -\u003e JSDate -\u003e JS t ()",
          "source": "src/Language-Sunroof-JS-Date.html#setUTCMilliseconds",
          "type": "function"
        },
        "index": {
          "description": "Sets the milliseconds of date object according to universal time See http www.w3schools.com jsref jsref setutcmilliseconds.asp",
          "hierarchy": "Language Sunroof JS Date",
          "module": "Language.Sunroof.JS.Date",
          "name": "setUTCMilliseconds",
          "normalized": "JSNumber-\u003eJSDate-\u003eJS a()",
          "package": "sunroof-compiler",
          "partial": "UTCMilliseconds",
          "signature": "JSNumber-\u003eJSDate-\u003eJS t()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Date.html#v:setUTCMilliseconds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the minutes of a date object, according to universal time.\n   See: \u003ca\u003ehttp://www.w3schools.com/jsref/jsref_setutcminutes.asp\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.Date",
          "name": "setUTCMinutes",
          "package": "sunroof-compiler",
          "signature": "JSNumber -\u003e JSDate -\u003e JS t ()",
          "source": "src/Language-Sunroof-JS-Date.html#setUTCMinutes",
          "type": "function"
        },
        "index": {
          "description": "Set the minutes of date object according to universal time See http www.w3schools.com jsref jsref setutcminutes.asp",
          "hierarchy": "Language Sunroof JS Date",
          "module": "Language.Sunroof.JS.Date",
          "name": "setUTCMinutes",
          "normalized": "JSNumber-\u003eJSDate-\u003eJS a()",
          "package": "sunroof-compiler",
          "partial": "UTCMinutes",
          "signature": "JSNumber-\u003eJSDate-\u003eJS t()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Date.html#v:setUTCMinutes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets the month of a date object, according to universal time.\n   See: \u003ca\u003ehttp://www.w3schools.com/jsref/jsref_setutcmonth.asp\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.Date",
          "name": "setUTCMonth",
          "package": "sunroof-compiler",
          "signature": "JSNumber -\u003e JSDate -\u003e JS t ()",
          "source": "src/Language-Sunroof-JS-Date.html#setUTCMonth",
          "type": "function"
        },
        "index": {
          "description": "Sets the month of date object according to universal time See http www.w3schools.com jsref jsref setutcmonth.asp",
          "hierarchy": "Language Sunroof JS Date",
          "module": "Language.Sunroof.JS.Date",
          "name": "setUTCMonth",
          "normalized": "JSNumber-\u003eJSDate-\u003eJS a()",
          "package": "sunroof-compiler",
          "partial": "UTCMonth",
          "signature": "JSNumber-\u003eJSDate-\u003eJS t()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Date.html#v:setUTCMonth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the seconds of a date object, according to universal time.\n   See: \u003ca\u003ehttp://www.w3schools.com/jsref/jsref_setutcseconds.asp\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.Date",
          "name": "setUTCSeconds",
          "package": "sunroof-compiler",
          "signature": "JSNumber -\u003e JSDate -\u003e JS t ()",
          "source": "src/Language-Sunroof-JS-Date.html#setUTCSeconds",
          "type": "function"
        },
        "index": {
          "description": "Set the seconds of date object according to universal time See http www.w3schools.com jsref jsref setutcseconds.asp",
          "hierarchy": "Language Sunroof JS Date",
          "module": "Language.Sunroof.JS.Date",
          "name": "setUTCSeconds",
          "normalized": "JSNumber-\u003eJSDate-\u003eJS a()",
          "package": "sunroof-compiler",
          "partial": "UTCSeconds",
          "signature": "JSNumber-\u003eJSDate-\u003eJS t()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Date.html#v:setUTCSeconds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts the date portion of a Date object into a readable string.\n   See: \u003ca\u003ehttp://www.w3schools.com/jsref/jsref_todatestring.asp\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.Date",
          "name": "toDateString",
          "package": "sunroof-compiler",
          "signature": "JSDate -\u003e JS t JSString",
          "source": "src/Language-Sunroof-JS-Date.html#toDateString",
          "type": "function"
        },
        "index": {
          "description": "Converts the date portion of Date object into readable string See http www.w3schools.com jsref jsref todatestring.asp",
          "hierarchy": "Language Sunroof JS Date",
          "module": "Language.Sunroof.JS.Date",
          "name": "toDateString",
          "normalized": "JSDate-\u003eJS a JSString",
          "package": "sunroof-compiler",
          "partial": "Date String",
          "signature": "JSDate-\u003eJS t JSString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Date.html#v:toDateString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the date as a string, using the ISO standard.\n   See: \u003ca\u003ehttp://www.w3schools.com/jsref/jsref_toisostring.asp\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.Date",
          "name": "toISOString",
          "package": "sunroof-compiler",
          "signature": "JSDate -\u003e JS t JSString",
          "source": "src/Language-Sunroof-JS-Date.html#toISOString",
          "type": "function"
        },
        "index": {
          "description": "Returns the date as string using the ISO standard See http www.w3schools.com jsref jsref toisostring.asp",
          "hierarchy": "Language Sunroof JS Date",
          "module": "Language.Sunroof.JS.Date",
          "name": "toISOString",
          "normalized": "JSDate-\u003eJS a JSString",
          "package": "sunroof-compiler",
          "partial": "ISOString",
          "signature": "JSDate-\u003eJS t JSString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Date.html#v:toISOString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the date as a string, formated as a JSON date.\n   See: \u003ca\u003ehttp://www.w3schools.com/jsref/jsref_tojson.asp\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.Date",
          "name": "toJSON",
          "package": "sunroof-compiler",
          "signature": "JSDate -\u003e JS t JSString",
          "source": "src/Language-Sunroof-JS-Date.html#toJSON",
          "type": "function"
        },
        "index": {
          "description": "Returns the date as string formated as JSON date See http www.w3schools.com jsref jsref tojson.asp",
          "hierarchy": "Language Sunroof JS Date",
          "module": "Language.Sunroof.JS.Date",
          "name": "toJSON",
          "normalized": "JSDate-\u003eJS a JSString",
          "package": "sunroof-compiler",
          "partial": "JSON",
          "signature": "JSDate-\u003eJS t JSString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Date.html#v:toJSON"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the date portion of a Date object as a string, \n   using locale conventions.\n   See: \u003ca\u003ehttp://www.w3schools.com/jsref/jsref_tolocaledatestring.asp\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.Date",
          "name": "toLocaleDateString",
          "package": "sunroof-compiler",
          "signature": "JSDate -\u003e JS t JSString",
          "source": "src/Language-Sunroof-JS-Date.html#toLocaleDateString",
          "type": "function"
        },
        "index": {
          "description": "Returns the date portion of Date object as string using locale conventions See http www.w3schools.com jsref jsref tolocaledatestring.asp",
          "hierarchy": "Language Sunroof JS Date",
          "module": "Language.Sunroof.JS.Date",
          "name": "toLocaleDateString",
          "normalized": "JSDate-\u003eJS a JSString",
          "package": "sunroof-compiler",
          "partial": "Locale Date String",
          "signature": "JSDate-\u003eJS t JSString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Date.html#v:toLocaleDateString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a Date object to a string, using locale conventions.\n   See: \u003ca\u003ehttp://www.w3schools.com/jsref/jsref_tolocalestring.asp\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.Date",
          "name": "toLocaleString",
          "package": "sunroof-compiler",
          "signature": "JSDate -\u003e JS t JSString",
          "source": "src/Language-Sunroof-JS-Date.html#toLocaleString",
          "type": "function"
        },
        "index": {
          "description": "Converts Date object to string using locale conventions See http www.w3schools.com jsref jsref tolocalestring.asp",
          "hierarchy": "Language Sunroof JS Date",
          "module": "Language.Sunroof.JS.Date",
          "name": "toLocaleString",
          "normalized": "JSDate-\u003eJS a JSString",
          "package": "sunroof-compiler",
          "partial": "Locale String",
          "signature": "JSDate-\u003eJS t JSString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Date.html#v:toLocaleString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the time portion of a Date object as a string, \n   using locale conventions.\n   See: \u003ca\u003ehttp://www.w3schools.com/jsref/jsref_tolocaletimestring.asp\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.Date",
          "name": "toLocaleTimeString",
          "package": "sunroof-compiler",
          "signature": "JSDate -\u003e JS t JSString",
          "source": "src/Language-Sunroof-JS-Date.html#toLocaleTimeString",
          "type": "function"
        },
        "index": {
          "description": "Returns the time portion of Date object as string using locale conventions See http www.w3schools.com jsref jsref tolocaletimestring.asp",
          "hierarchy": "Language Sunroof JS Date",
          "module": "Language.Sunroof.JS.Date",
          "name": "toLocaleTimeString",
          "normalized": "JSDate-\u003eJS a JSString",
          "package": "sunroof-compiler",
          "partial": "Locale Time String",
          "signature": "JSDate-\u003eJS t JSString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Date.html#v:toLocaleTimeString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a Date object to a string.\n   See: \u003ca\u003ehttp://www.w3schools.com/jsref/jsref_tostring_date.asp\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.Date",
          "name": "toString",
          "package": "sunroof-compiler",
          "signature": "JSDate -\u003e JS t JSString",
          "source": "src/Language-Sunroof-JS-Date.html#toString",
          "type": "function"
        },
        "index": {
          "description": "Converts Date object to string See http www.w3schools.com jsref jsref tostring date.asp",
          "hierarchy": "Language Sunroof JS Date",
          "module": "Language.Sunroof.JS.Date",
          "name": "toString",
          "normalized": "JSDate-\u003eJS a JSString",
          "package": "sunroof-compiler",
          "partial": "String",
          "signature": "JSDate-\u003eJS t JSString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Date.html#v:toString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts the time portion of a Date object to a string.\n   See: \u003ca\u003ehttp://www.w3schools.com/jsref/jsref_totimestring.asp\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.Date",
          "name": "toTimeString",
          "package": "sunroof-compiler",
          "signature": "JSDate -\u003e JS t JSString",
          "source": "src/Language-Sunroof-JS-Date.html#toTimeString",
          "type": "function"
        },
        "index": {
          "description": "Converts the time portion of Date object to string See http www.w3schools.com jsref jsref totimestring.asp",
          "hierarchy": "Language Sunroof JS Date",
          "module": "Language.Sunroof.JS.Date",
          "name": "toTimeString",
          "normalized": "JSDate-\u003eJS a JSString",
          "package": "sunroof-compiler",
          "partial": "Time String",
          "signature": "JSDate-\u003eJS t JSString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Date.html#v:toTimeString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a Date object to a string, according to universal time.\n   See: \u003ca\u003ehttp://www.w3schools.com/jsref/jsref_toutcstring.asp\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.Date",
          "name": "toUTCString",
          "package": "sunroof-compiler",
          "signature": "JSDate -\u003e JS t JSString",
          "source": "src/Language-Sunroof-JS-Date.html#toUTCString",
          "type": "function"
        },
        "index": {
          "description": "Converts Date object to string according to universal time See http www.w3schools.com jsref jsref toutcstring.asp",
          "hierarchy": "Language Sunroof JS Date",
          "module": "Language.Sunroof.JS.Date",
          "name": "toUTCString",
          "normalized": "JSDate-\u003eJS a JSString",
          "package": "sunroof-compiler",
          "partial": "UTCString",
          "signature": "JSDate-\u003eJS t JSString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Date.html#v:toUTCString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides parts of the JQuery API (\u003ca\u003ehttp://api.jquery.com/\u003c/a\u003e).\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.Sunroof.JS.JQuery",
          "name": "JQuery",
          "package": "sunroof-compiler",
          "source": "src/Language-Sunroof-JS-JQuery.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides parts of the JQuery API http api.jquery.com",
          "hierarchy": "Language Sunroof JS JQuery",
          "module": "Language.Sunroof.JS.JQuery",
          "name": "JQuery",
          "package": "sunroof-compiler",
          "partial": "JQuery",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-JQuery.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ca\u003ehttp://api.jquery.com/addClass/\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.JQuery",
          "name": "addClass",
          "package": "sunroof-compiler",
          "signature": "JSString -\u003e JSObject -\u003e JS t ()",
          "source": "src/Language-Sunroof-JS-JQuery.html#addClass",
          "type": "function"
        },
        "index": {
          "description": "See http api.jquery.com addClass",
          "hierarchy": "Language Sunroof JS JQuery",
          "module": "Language.Sunroof.JS.JQuery",
          "name": "addClass",
          "normalized": "JSString-\u003eJSObject-\u003eJS a()",
          "package": "sunroof-compiler",
          "partial": "Class",
          "signature": "JSString-\u003eJSObject-\u003eJS t()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-JQuery.html#v:addClass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ca\u003ehttp://api.jquery.com/append/\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.JQuery",
          "name": "append",
          "package": "sunroof-compiler",
          "signature": "JSObject -\u003e JSObject -\u003e JS t ()",
          "source": "src/Language-Sunroof-JS-JQuery.html#append",
          "type": "function"
        },
        "index": {
          "description": "See http api.jquery.com append",
          "hierarchy": "Language Sunroof JS JQuery",
          "module": "Language.Sunroof.JS.JQuery",
          "name": "append",
          "normalized": "JSObject-\u003eJSObject-\u003eJS a()",
          "package": "sunroof-compiler",
          "signature": "JSObject-\u003eJSObject-\u003eJS t()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-JQuery.html#v:append"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003e.attr(attributeName)\u003c/code\u003e at \u003ca\u003ehttp://api.jquery.com/attr/\u003c/a\u003e.\n   This binding does not have the original Javascript name,\n   because of the \u003ccode\u003e\u003ca\u003eattr\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.JQuery",
          "name": "attr'",
          "package": "sunroof-compiler",
          "signature": "JSString -\u003e JSObject -\u003e JS t JSString",
          "source": "src/Language-Sunroof-JS-JQuery.html#attr%27",
          "type": "function"
        },
        "index": {
          "description": "See attr attributeName at http api.jquery.com attr This binding does not have the original Javascript name because of the attr function",
          "hierarchy": "Language Sunroof JS JQuery",
          "module": "Language.Sunroof.JS.JQuery",
          "name": "attr'",
          "normalized": "JSString-\u003eJSObject-\u003eJS a JSString",
          "package": "sunroof-compiler",
          "signature": "JSString-\u003eJSObject-\u003eJS t JSString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-JQuery.html#v:attr-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003e.attr(attributeName)\u003c/code\u003e at \u003ca\u003ehttp://api.jquery.com/attr/\u003c/a\u003e.\n   This binding does not have the original Javascript name,\n   because of the \u003ccode\u003e\u003ca\u003eattr\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.JQuery",
          "name": "attribute",
          "package": "sunroof-compiler",
          "signature": "JSString -\u003e JSObject -\u003e JS t JSString",
          "source": "src/Language-Sunroof-JS-JQuery.html#attribute",
          "type": "function"
        },
        "index": {
          "description": "See attr attributeName at http api.jquery.com attr This binding does not have the original Javascript name because of the attr function",
          "hierarchy": "Language Sunroof JS JQuery",
          "module": "Language.Sunroof.JS.JQuery",
          "name": "attribute",
          "normalized": "JSString-\u003eJSObject-\u003eJS a JSString",
          "package": "sunroof-compiler",
          "signature": "JSString-\u003eJSObject-\u003eJS t JSString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-JQuery.html#v:attribute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003e.clone()\u003c/code\u003e at \u003ca\u003ehttp://api.jquery.com/clone/\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.JQuery",
          "name": "clone",
          "package": "sunroof-compiler",
          "signature": "JSObject -\u003e JS t JSObject",
          "source": "src/Language-Sunroof-JS-JQuery.html#clone",
          "type": "function"
        },
        "index": {
          "description": "See clone at http api.jquery.com clone",
          "hierarchy": "Language Sunroof JS JQuery",
          "module": "Language.Sunroof.JS.JQuery",
          "name": "clone",
          "normalized": "JSObject-\u003eJS a JSObject",
          "package": "sunroof-compiler",
          "signature": "JSObject-\u003eJS t JSObject",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-JQuery.html#v:clone"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003e.clone(withDataAndEvents, deepWithDataAndEvents)\u003c/code\u003e at \u003ca\u003ehttp://api.jquery.com/clone/\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.JQuery",
          "name": "clone'",
          "package": "sunroof-compiler",
          "signature": "JSBool -\u003e JSBool -\u003e JSObject -\u003e JS t JSObject",
          "source": "src/Language-Sunroof-JS-JQuery.html#clone%27",
          "type": "function"
        },
        "index": {
          "description": "See clone withDataAndEvents deepWithDataAndEvents at http api.jquery.com clone",
          "hierarchy": "Language Sunroof JS JQuery",
          "module": "Language.Sunroof.JS.JQuery",
          "name": "clone'",
          "normalized": "JSBool-\u003eJSBool-\u003eJSObject-\u003eJS a JSObject",
          "package": "sunroof-compiler",
          "signature": "JSBool-\u003eJSBool-\u003eJSObject-\u003eJS t JSObject",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-JQuery.html#v:clone-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003e.css(propertyName)\u003c/code\u003e at \u003ca\u003ehttp://api.jquery.com/css/\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.JQuery",
          "name": "css",
          "package": "sunroof-compiler",
          "signature": "JSString -\u003e JSObject -\u003e JS t JSString",
          "source": "src/Language-Sunroof-JS-JQuery.html#css",
          "type": "function"
        },
        "index": {
          "description": "See css propertyName at http api.jquery.com css",
          "hierarchy": "Language Sunroof JS JQuery",
          "module": "Language.Sunroof.JS.JQuery",
          "name": "css",
          "normalized": "JSString-\u003eJSObject-\u003eJS a JSString",
          "package": "sunroof-compiler",
          "signature": "JSString-\u003eJSObject-\u003eJS t JSString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-JQuery.html#v:css"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe dollar function.\n   See \u003ca\u003ehttp://api.jquery.com/jQuery/\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.JQuery",
          "name": "dollar",
          "package": "sunroof-compiler",
          "signature": "JSFunction JSString JSObject",
          "source": "src/Language-Sunroof-JS-JQuery.html#dollar",
          "type": "function"
        },
        "index": {
          "description": "The dollar function See http api.jquery.com jQuery",
          "hierarchy": "Language Sunroof JS JQuery",
          "module": "Language.Sunroof.JS.JQuery",
          "name": "dollar",
          "package": "sunroof-compiler",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-JQuery.html#v:dollar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003e.html()\u003c/code\u003e at \u003ca\u003ehttp://api.jquery.com/html/\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.JQuery",
          "name": "html",
          "package": "sunroof-compiler",
          "signature": "JSObject -\u003e JS t JSObject",
          "source": "src/Language-Sunroof-JS-JQuery.html#html",
          "type": "function"
        },
        "index": {
          "description": "See html at http api.jquery.com html",
          "hierarchy": "Language Sunroof JS JQuery",
          "module": "Language.Sunroof.JS.JQuery",
          "name": "html",
          "normalized": "JSObject-\u003eJS a JSObject",
          "package": "sunroof-compiler",
          "signature": "JSObject-\u003eJS t JSObject",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-JQuery.html#v:html"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ca\u003ehttp://api.jquery.com/innerWidth/\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.JQuery",
          "name": "innerHeight",
          "package": "sunroof-compiler",
          "signature": "JSObject -\u003e JS t JSNumber",
          "source": "src/Language-Sunroof-JS-JQuery.html#innerHeight",
          "type": "function"
        },
        "index": {
          "description": "See http api.jquery.com innerWidth",
          "hierarchy": "Language Sunroof JS JQuery",
          "module": "Language.Sunroof.JS.JQuery",
          "name": "innerHeight",
          "normalized": "JSObject-\u003eJS a JSNumber",
          "package": "sunroof-compiler",
          "partial": "Height",
          "signature": "JSObject-\u003eJS t JSNumber",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-JQuery.html#v:innerHeight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ca\u003ehttp://api.jquery.com/innerHeight/\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.JQuery",
          "name": "innerWidth",
          "package": "sunroof-compiler",
          "signature": "JSObject -\u003e JS t JSNumber",
          "source": "src/Language-Sunroof-JS-JQuery.html#innerWidth",
          "type": "function"
        },
        "index": {
          "description": "See http api.jquery.com innerHeight",
          "hierarchy": "Language Sunroof JS JQuery",
          "module": "Language.Sunroof.JS.JQuery",
          "name": "innerWidth",
          "normalized": "JSObject-\u003eJS a JSNumber",
          "package": "sunroof-compiler",
          "partial": "Width",
          "signature": "JSObject-\u003eJS t JSNumber",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-JQuery.html#v:innerWidth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalls the JQuery dollar function.\n   See \u003ca\u003ehttp://api.jquery.com/jQuery/\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.JQuery",
          "name": "jQuery",
          "package": "sunroof-compiler",
          "signature": "JSString -\u003e JS t JSObject",
          "source": "src/Language-Sunroof-JS-JQuery.html#jQuery",
          "type": "function"
        },
        "index": {
          "description": "Calls the JQuery dollar function See http api.jquery.com jQuery",
          "hierarchy": "Language Sunroof JS JQuery",
          "module": "Language.Sunroof.JS.JQuery",
          "name": "jQuery",
          "normalized": "JSString-\u003eJS a JSObject",
          "package": "sunroof-compiler",
          "partial": "Query",
          "signature": "JSString-\u003eJS t JSObject",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-JQuery.html#v:jQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShort-hand for \u003ccode\u003e\u003ca\u003ejQuery\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.JQuery",
          "name": "jq",
          "package": "sunroof-compiler",
          "signature": "JSString -\u003e JS t JSObject",
          "source": "src/Language-Sunroof-JS-JQuery.html#jq",
          "type": "function"
        },
        "index": {
          "description": "Short-hand for jQuery",
          "hierarchy": "Language Sunroof JS JQuery",
          "module": "Language.Sunroof.JS.JQuery",
          "name": "jq",
          "normalized": "JSString-\u003eJS a JSObject",
          "package": "sunroof-compiler",
          "signature": "JSString-\u003eJS t JSObject",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-JQuery.html#v:jq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ca\u003ehttp://api.jquery.com/on/\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.JQuery",
          "name": "on",
          "package": "sunroof-compiler",
          "signature": "JSString -\u003e JSString -\u003e (a -\u003e JS B ()) -\u003e JSObject -\u003e JS t ()",
          "source": "src/Language-Sunroof-JS-JQuery.html#on",
          "type": "function"
        },
        "index": {
          "description": "See http api.jquery.com on",
          "hierarchy": "Language Sunroof JS JQuery",
          "module": "Language.Sunroof.JS.JQuery",
          "name": "on",
          "normalized": "JSString-\u003eJSString-\u003e(a-\u003eJS B())-\u003eJSObject-\u003eJS b()",
          "package": "sunroof-compiler",
          "signature": "JSString-\u003eJSString-\u003e(a-\u003eJS B())-\u003eJSObject-\u003eJS t()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-JQuery.html#v:on"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ca\u003ehttp://api.jquery.com/outerHeight/\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.JQuery",
          "name": "outerHeight",
          "package": "sunroof-compiler",
          "signature": "JSObject -\u003e JS t JSNumber",
          "source": "src/Language-Sunroof-JS-JQuery.html#outerHeight",
          "type": "function"
        },
        "index": {
          "description": "See http api.jquery.com outerHeight",
          "hierarchy": "Language Sunroof JS JQuery",
          "module": "Language.Sunroof.JS.JQuery",
          "name": "outerHeight",
          "normalized": "JSObject-\u003eJS a JSNumber",
          "package": "sunroof-compiler",
          "partial": "Height",
          "signature": "JSObject-\u003eJS t JSNumber",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-JQuery.html#v:outerHeight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ca\u003ehttp://api.jquery.com/outerHeight/\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.JQuery",
          "name": "outerHeight'",
          "package": "sunroof-compiler",
          "signature": "JSBool -\u003e JSObject -\u003e JS t JSNumber",
          "source": "src/Language-Sunroof-JS-JQuery.html#outerHeight%27",
          "type": "function"
        },
        "index": {
          "description": "See http api.jquery.com outerHeight",
          "hierarchy": "Language Sunroof JS JQuery",
          "module": "Language.Sunroof.JS.JQuery",
          "name": "outerHeight'",
          "normalized": "JSBool-\u003eJSObject-\u003eJS a JSNumber",
          "package": "sunroof-compiler",
          "partial": "Height'",
          "signature": "JSBool-\u003eJSObject-\u003eJS t JSNumber",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-JQuery.html#v:outerHeight-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ca\u003ehttp://api.jquery.com/outerWidth/\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.JQuery",
          "name": "outerWidth",
          "package": "sunroof-compiler",
          "signature": "JSObject -\u003e JS t JSNumber",
          "source": "src/Language-Sunroof-JS-JQuery.html#outerWidth",
          "type": "function"
        },
        "index": {
          "description": "See http api.jquery.com outerWidth",
          "hierarchy": "Language Sunroof JS JQuery",
          "module": "Language.Sunroof.JS.JQuery",
          "name": "outerWidth",
          "normalized": "JSObject-\u003eJS a JSNumber",
          "package": "sunroof-compiler",
          "partial": "Width",
          "signature": "JSObject-\u003eJS t JSNumber",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-JQuery.html#v:outerWidth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ca\u003ehttp://api.jquery.com/outerWidth/\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.JQuery",
          "name": "outerWidth'",
          "package": "sunroof-compiler",
          "signature": "JSBool -\u003e JSObject -\u003e JS t JSNumber",
          "source": "src/Language-Sunroof-JS-JQuery.html#outerWidth%27",
          "type": "function"
        },
        "index": {
          "description": "See http api.jquery.com outerWidth",
          "hierarchy": "Language Sunroof JS JQuery",
          "module": "Language.Sunroof.JS.JQuery",
          "name": "outerWidth'",
          "normalized": "JSBool-\u003eJSObject-\u003eJS a JSNumber",
          "package": "sunroof-compiler",
          "partial": "Width'",
          "signature": "JSBool-\u003eJSObject-\u003eJS t JSNumber",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-JQuery.html#v:outerWidth-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee: \u003ca\u003ehttp://api.jquery.com/removeAttr/\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.JQuery",
          "name": "removeAttr",
          "package": "sunroof-compiler",
          "signature": "JSString -\u003e JSObject -\u003e JS t JSObject",
          "source": "src/Language-Sunroof-JS-JQuery.html#removeAttr",
          "type": "function"
        },
        "index": {
          "description": "See http api.jquery.com removeAttr",
          "hierarchy": "Language Sunroof JS JQuery",
          "module": "Language.Sunroof.JS.JQuery",
          "name": "removeAttr",
          "normalized": "JSString-\u003eJSObject-\u003eJS a JSObject",
          "package": "sunroof-compiler",
          "partial": "Attr",
          "signature": "JSString-\u003eJSObject-\u003eJS t JSObject",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-JQuery.html#v:removeAttr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ca\u003ehttp://api.jquery.com/removeClass/\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.JQuery",
          "name": "removeClass",
          "package": "sunroof-compiler",
          "signature": "JSString -\u003e JSObject -\u003e JS t ()",
          "source": "src/Language-Sunroof-JS-JQuery.html#removeClass",
          "type": "function"
        },
        "index": {
          "description": "See http api.jquery.com removeClass",
          "hierarchy": "Language Sunroof JS JQuery",
          "module": "Language.Sunroof.JS.JQuery",
          "name": "removeClass",
          "normalized": "JSString-\u003eJSObject-\u003eJS a()",
          "package": "sunroof-compiler",
          "partial": "Class",
          "signature": "JSString-\u003eJSObject-\u003eJS t()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-JQuery.html#v:removeClass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003e.attr(attributeName, value)\u003c/code\u003e at \u003ca\u003ehttp://api.jquery.com/attr/\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.JQuery",
          "name": "setAttr",
          "package": "sunroof-compiler",
          "signature": "JSString -\u003e JSString -\u003e JSObject -\u003e JS t JSString",
          "source": "src/Language-Sunroof-JS-JQuery.html#setAttr",
          "type": "function"
        },
        "index": {
          "description": "See attr attributeName value at http api.jquery.com attr",
          "hierarchy": "Language Sunroof JS JQuery",
          "module": "Language.Sunroof.JS.JQuery",
          "name": "setAttr",
          "normalized": "JSString-\u003eJSString-\u003eJSObject-\u003eJS a JSString",
          "package": "sunroof-compiler",
          "partial": "Attr",
          "signature": "JSString-\u003eJSString-\u003eJSObject-\u003eJS t JSString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-JQuery.html#v:setAttr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003e.css(propertyName, value)\u003c/code\u003e at \u003ca\u003ehttp://api.jquery.com/css/\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.JQuery",
          "name": "setCss",
          "package": "sunroof-compiler",
          "signature": "JSString -\u003e JSString -\u003e JSObject -\u003e JS t JSString",
          "source": "src/Language-Sunroof-JS-JQuery.html#setCss",
          "type": "function"
        },
        "index": {
          "description": "See css propertyName value at http api.jquery.com css",
          "hierarchy": "Language Sunroof JS JQuery",
          "module": "Language.Sunroof.JS.JQuery",
          "name": "setCss",
          "normalized": "JSString-\u003eJSString-\u003eJSObject-\u003eJS a JSString",
          "package": "sunroof-compiler",
          "partial": "Css",
          "signature": "JSString-\u003eJSString-\u003eJSObject-\u003eJS t JSString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-JQuery.html#v:setCss"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003e.html(htmlString)\u003c/code\u003e at \u003ca\u003ehttp://api.jquery.com/html/\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.JQuery",
          "name": "setHtml",
          "package": "sunroof-compiler",
          "signature": "JSString -\u003e JSObject -\u003e JS t JSObject",
          "source": "src/Language-Sunroof-JS-JQuery.html#setHtml",
          "type": "function"
        },
        "index": {
          "description": "See html htmlString at http api.jquery.com html",
          "hierarchy": "Language Sunroof JS JQuery",
          "module": "Language.Sunroof.JS.JQuery",
          "name": "setHtml",
          "normalized": "JSString-\u003eJSObject-\u003eJS a JSObject",
          "package": "sunroof-compiler",
          "partial": "Html",
          "signature": "JSString-\u003eJSObject-\u003eJS t JSObject",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-JQuery.html#v:setHtml"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003e.text(textString)\u003c/code\u003e at \u003ca\u003ehttp://api.jquery.com/text/\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.JQuery",
          "name": "setText",
          "package": "sunroof-compiler",
          "signature": "JSString -\u003e JSObject -\u003e JS t JSObject",
          "source": "src/Language-Sunroof-JS-JQuery.html#setText",
          "type": "function"
        },
        "index": {
          "description": "See text textString at http api.jquery.com text",
          "hierarchy": "Language Sunroof JS JQuery",
          "module": "Language.Sunroof.JS.JQuery",
          "name": "setText",
          "normalized": "JSString-\u003eJSObject-\u003eJS a JSObject",
          "package": "sunroof-compiler",
          "partial": "Text",
          "signature": "JSString-\u003eJSObject-\u003eJS t JSObject",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-JQuery.html#v:setText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003e.text()\u003c/code\u003e at \u003ca\u003ehttp://api.jquery.com/text/\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.JQuery",
          "name": "text",
          "package": "sunroof-compiler",
          "signature": "JSObject -\u003e JS t JSObject",
          "source": "src/Language-Sunroof-JS-JQuery.html#text",
          "type": "function"
        },
        "index": {
          "description": "See text at http api.jquery.com text",
          "hierarchy": "Language Sunroof JS JQuery",
          "module": "Language.Sunroof.JS.JQuery",
          "name": "text",
          "normalized": "JSObject-\u003eJS a JSObject",
          "package": "sunroof-compiler",
          "signature": "JSObject-\u003eJS t JSObject",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-JQuery.html#v:text"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eJSMVar\u003c/a\u003e\u003c/code\u003e provides the same functionality and\n   concurrency abstraction in Javascript computations\n   as \u003ccode\u003e\u003ca\u003eMVar\u003c/a\u003e\u003c/code\u003e in Haskell.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.Sunroof.JS.MVar",
          "name": "MVar",
          "package": "sunroof-compiler",
          "source": "src/Language-Sunroof-JS-MVar.html",
          "type": "module"
        },
        "index": {
          "description": "JSMVar provides the same functionality and concurrency abstraction in Javascript computations as MVar in Haskell",
          "hierarchy": "Language Sunroof JS MVar",
          "module": "Language.Sunroof.JS.MVar",
          "name": "MVar",
          "package": "sunroof-compiler",
          "partial": "MVar",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-MVar.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eJSMVar\u003c/a\u003e\u003c/code\u003e abstraction. The type parameter gives\n   the type of values held in a \u003ccode\u003e\u003ca\u003eJSMVar\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.MVar",
          "name": "JSMVar",
          "package": "sunroof-compiler",
          "source": "src/Language-Sunroof-JS-MVar.html#JSMVar",
          "type": "data"
        },
        "index": {
          "description": "JSMVar abstraction The type parameter gives the type of values held in JSMVar",
          "hierarchy": "Language Sunroof JS MVar",
          "module": "Language.Sunroof.JS.MVar",
          "name": "JSMVar",
          "package": "sunroof-compiler",
          "partial": "JSMVar",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-MVar.html#t:JSMVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new empty \u003ccode\u003e\u003ca\u003eJSMVar\u003c/a\u003e\u003c/code\u003e.\n   See \u003ccode\u003e\u003ca\u003enewMVar\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Language.Sunroof.JS.MVar\",\"Language.Sunroof\"]",
          "name": "newEmptyMVar",
          "package": "sunroof-compiler",
          "signature": "JS t (JSMVar a)",
          "source": "src/Language-Sunroof-JS-MVar.html#newEmptyMVar",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-MVar.html#v:newEmptyMVar\",\"http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof.html#v:newEmptyMVar\"]"
        },
        "index": {
          "description": "Create new empty JSMVar See newMVar",
          "hierarchy": "Language Sunroof JS MVar",
          "module": "Language.Sunroof.JS.MVar",
          "name": "newEmptyMVar",
          "package": "sunroof-compiler",
          "partial": "Empty MVar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-MVar.html#v:newEmptyMVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new \u003ccode\u003e\u003ca\u003eJSMVar\u003c/a\u003e\u003c/code\u003e with the given value inside.\n   See \u003ccode\u003e\u003ca\u003enewEmptyMVar\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Language.Sunroof.JS.MVar\",\"Language.Sunroof\"]",
          "name": "newMVar",
          "package": "sunroof-compiler",
          "signature": "a -\u003e JS t (JSMVar a)",
          "source": "src/Language-Sunroof-JS-MVar.html#newMVar",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-MVar.html#v:newMVar\",\"http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof.html#v:newMVar\"]"
        },
        "index": {
          "description": "Create new JSMVar with the given value inside See newEmptyMVar",
          "hierarchy": "Language Sunroof JS MVar",
          "module": "Language.Sunroof.JS.MVar",
          "name": "newMVar",
          "normalized": "a-\u003eJS b(JSMVar a)",
          "package": "sunroof-compiler",
          "partial": "MVar",
          "signature": "a-\u003eJS t(JSMVar a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-MVar.html#v:newMVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePut the value into the \u003ccode\u003e\u003ca\u003eJSMVar\u003c/a\u003e\u003c/code\u003e. If there already is a\n   value inside, this will block until it is taken out.\n\u003c/p\u003e",
          "module": "[\"Language.Sunroof.JS.MVar\",\"Language.Sunroof\"]",
          "name": "putMVar",
          "package": "sunroof-compiler",
          "signature": "a -\u003e JSMVar a -\u003e JS B ()",
          "source": "src/Language-Sunroof-JS-MVar.html#putMVar",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-MVar.html#v:putMVar\",\"http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof.html#v:putMVar\"]"
        },
        "index": {
          "description": "Put the value into the JSMVar If there already is value inside this will block until it is taken out",
          "hierarchy": "Language Sunroof JS MVar",
          "module": "Language.Sunroof.JS.MVar",
          "name": "putMVar",
          "normalized": "a-\u003eJSMVar a-\u003eJS B()",
          "package": "sunroof-compiler",
          "partial": "MVar",
          "signature": "a-\u003eJSMVar a-\u003eJS B()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-MVar.html#v:putMVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake the value out of the \u003ccode\u003e\u003ca\u003eJSMVar\u003c/a\u003e\u003c/code\u003e. If there is no value\n   inside, this will block until one is available.\n\u003c/p\u003e",
          "module": "[\"Language.Sunroof.JS.MVar\",\"Language.Sunroof\"]",
          "name": "takeMVar",
          "package": "sunroof-compiler",
          "signature": "JSMVar a -\u003e JS B a",
          "source": "src/Language-Sunroof-JS-MVar.html#takeMVar",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-MVar.html#v:takeMVar\",\"http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof.html#v:takeMVar\"]"
        },
        "index": {
          "description": "Take the value out of the JSMVar If there is no value inside this will block until one is available",
          "hierarchy": "Language Sunroof JS MVar",
          "module": "Language.Sunroof.JS.MVar",
          "name": "takeMVar",
          "normalized": "JSMVar a-\u003eJS B a",
          "package": "sunroof-compiler",
          "partial": "MVar",
          "signature": "JSMVar a-\u003eJS B a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-MVar.html#v:takeMVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eJSMap\u003c/a\u003e\u003c/code\u003e provides an abstract and more type-safe access to maps\n   in JavaScript. It is a wrapper around the dictionary each object\n   in JavaScript is.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.Sunroof.JS.Map",
          "name": "Map",
          "package": "sunroof-compiler",
          "source": "src/Language-Sunroof-JS-Map.html",
          "type": "module"
        },
        "index": {
          "description": "JSMap provides an abstract and more type-safe access to maps in JavaScript It is wrapper around the dictionary each object in JavaScript is",
          "hierarchy": "Language Sunroof JS Map",
          "module": "Language.Sunroof.JS.Map",
          "name": "Map",
          "package": "sunroof-compiler",
          "partial": "Map",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Map.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eJSMap\u003c/a\u003e\u003c/code\u003e abstraction. The first type parameter gives\n   the type of keys used by the name and the second gives\n   the type of values.\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.Map",
          "name": "JSMap",
          "package": "sunroof-compiler",
          "source": "src/Language-Sunroof-JS-Map.html#JSMap",
          "type": "data"
        },
        "index": {
          "description": "JSMap abstraction The first type parameter gives the type of keys used by the name and the second gives the type of values",
          "hierarchy": "Language Sunroof JS Map",
          "module": "Language.Sunroof.JS.Map",
          "name": "JSMap",
          "package": "sunroof-compiler",
          "partial": "JSMap",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Map.html#t:JSMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003einsert k x\u003c/code\u003e inserts an element \u003ccode\u003ex\u003c/code\u003e associated with the given\n   key \u003ccode\u003ek\u003c/code\u003e into a map.\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.Map",
          "name": "insert",
          "package": "sunroof-compiler",
          "signature": "k -\u003e a -\u003e JSMap k a -\u003e JS t ()",
          "source": "src/Language-Sunroof-JS-Map.html#insert",
          "type": "function"
        },
        "index": {
          "description": "insert inserts an element associated with the given key into map",
          "hierarchy": "Language Sunroof JS Map",
          "module": "Language.Sunroof.JS.Map",
          "name": "insert",
          "normalized": "a-\u003eb-\u003eJSMap a b-\u003eJS c()",
          "package": "sunroof-compiler",
          "signature": "k-\u003ea-\u003eJSMap k a-\u003eJS t()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Map.html#v:insert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003elookup k\u003c/code\u003e selects the value associated with the key \u003ccode\u003ek\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.Map",
          "name": "lookup'",
          "package": "sunroof-compiler",
          "signature": "k -\u003e JSMap k a -\u003e JS t a",
          "source": "src/Language-Sunroof-JS-Map.html#lookup%27",
          "type": "function"
        },
        "index": {
          "description": "lookup selects the value associated with the key",
          "hierarchy": "Language Sunroof JS Map",
          "module": "Language.Sunroof.JS.Map",
          "name": "lookup'",
          "normalized": "a-\u003eJSMap a b-\u003eJS c b",
          "package": "sunroof-compiler",
          "signature": "k-\u003eJSMap k a-\u003eJS t a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Map.html#v:lookup-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new empty \u003ccode\u003e\u003ca\u003eJSMap\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.Map",
          "name": "newMap",
          "package": "sunroof-compiler",
          "signature": "JS t (JSMap k a)",
          "source": "src/Language-Sunroof-JS-Map.html#newMap",
          "type": "function"
        },
        "index": {
          "description": "Create new empty JSMap",
          "hierarchy": "Language Sunroof JS Map",
          "module": "Language.Sunroof.JS.Map",
          "name": "newMap",
          "package": "sunroof-compiler",
          "partial": "Map",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Map.html#v:newMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Sunroof.JS.Map",
          "name": "size",
          "package": "sunroof-compiler",
          "signature": "JSMap k a -\u003e JS t JSNumber",
          "source": "src/Language-Sunroof-JS-Map.html#size",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Sunroof JS Map",
          "module": "Language.Sunroof.JS.Map",
          "name": "size",
          "normalized": "JSMap a b-\u003eJS c JSNumber",
          "package": "sunroof-compiler",
          "signature": "JSMap k a-\u003eJS t JSNumber",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Map.html#v:size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eNumbers in Javascript.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.Sunroof.JS.Number",
          "name": "Number",
          "package": "sunroof-compiler",
          "source": "src/Language-Sunroof-JS-Number.html",
          "type": "module"
        },
        "index": {
          "description": "Numbers in Javascript",
          "hierarchy": "Language Sunroof JS Number",
          "module": "Language.Sunroof.JS.Number",
          "name": "Number",
          "package": "sunroof-compiler",
          "partial": "Number",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Number.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType of numbers in Javascript.\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.Number",
          "name": "JSNumber",
          "package": "sunroof-compiler",
          "source": "src/Language-Sunroof-JS-Number.html#JSNumber",
          "type": "data"
        },
        "index": {
          "description": "Type of numbers in Javascript",
          "hierarchy": "Language Sunroof JS Number",
          "module": "Language.Sunroof.JS.Number",
          "name": "JSNumber",
          "package": "sunroof-compiler",
          "partial": "JSNumber",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Number.html#t:JSNumber"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA explicit cast to int.\n\u003c/p\u003e",
          "module": "[\"Language.Sunroof.JS.Number\",\"Language.Sunroof\"]",
          "name": "int",
          "package": "sunroof-compiler",
          "signature": "a -\u003e JSNumber",
          "source": "src/Language-Sunroof-JS-Number.html#int",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Number.html#v:int\",\"http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof.html#v:int\"]"
        },
        "index": {
          "description": "explicit cast to int",
          "hierarchy": "Language Sunroof JS Number",
          "module": "Language.Sunroof.JS.Number",
          "name": "int",
          "normalized": "a-\u003eJSNumber",
          "package": "sunroof-compiler",
          "signature": "a-\u003eJSNumber",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Number.html#v:int"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAbstraction over the most general type in Javascript.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.Sunroof.JS.Object",
          "name": "Object",
          "package": "sunroof-compiler",
          "source": "src/Language-Sunroof-JS-Object.html",
          "type": "module"
        },
        "index": {
          "description": "Abstraction over the most general type in Javascript",
          "hierarchy": "Language Sunroof JS Object",
          "module": "Language.Sunroof.JS.Object",
          "name": "Object",
          "package": "sunroof-compiler",
          "partial": "Object",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Object.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData type for all Javascript objects.\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.Object",
          "name": "JSObject",
          "package": "sunroof-compiler",
          "source": "src/Language-Sunroof-JS-Object.html#JSObject",
          "type": "data"
        },
        "index": {
          "description": "Data type for all Javascript objects",
          "hierarchy": "Language Sunroof JS Object",
          "module": "Language.Sunroof.JS.Object",
          "name": "JSObject",
          "package": "sunroof-compiler",
          "partial": "JSObject",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Object.html#t:JSObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an arbitrary object from a literal in form of a string.\n\u003c/p\u003e",
          "module": "[\"Language.Sunroof.JS.Object\",\"Language.Sunroof\"]",
          "name": "object",
          "package": "sunroof-compiler",
          "signature": "String -\u003e JSObject",
          "source": "src/Language-Sunroof-JS-Object.html#object",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Object.html#v:object\",\"http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof.html#v:object\"]"
        },
        "index": {
          "description": "Create an arbitrary object from literal in form of string",
          "hierarchy": "Language Sunroof JS Object",
          "module": "Language.Sunroof.JS.Object",
          "name": "object",
          "normalized": "String-\u003eJSObject",
          "package": "sunroof-compiler",
          "signature": "String-\u003eJSObject",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Object.html#v:object"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003ethis\u003c/code\u003e reference.\n\u003c/p\u003e",
          "module": "[\"Language.Sunroof.JS.Object\",\"Language.Sunroof\"]",
          "name": "this",
          "package": "sunroof-compiler",
          "signature": "JSObject",
          "source": "src/Language-Sunroof-JS-Object.html#this",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Object.html#v:this\",\"http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof.html#v:this\"]"
        },
        "index": {
          "description": "The this reference",
          "hierarchy": "Language Sunroof JS Object",
          "module": "Language.Sunroof.JS.Object",
          "name": "this",
          "package": "sunroof-compiler",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Object.html#v:this"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides the equivalent of a \u003ccode\u003eIORef\u003c/code\u003e in the Sunroof world.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.Sunroof.JS.Ref",
          "name": "Ref",
          "package": "sunroof-compiler",
          "source": "src/Language-Sunroof-JS-Ref.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides the equivalent of IORef in the Sunroof world",
          "hierarchy": "Language Sunroof JS Ref",
          "module": "Language.Sunroof.JS.Ref",
          "name": "Ref",
          "package": "sunroof-compiler",
          "partial": "Ref",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Ref.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is the \u003ccode\u003eIORef\u003c/code\u003e of Sunroof.\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.Ref",
          "name": "JSRef",
          "package": "sunroof-compiler",
          "source": "src/Language-Sunroof-JS-Ref.html#JSRef",
          "type": "data"
        },
        "index": {
          "description": "This is the IORef of Sunroof",
          "hierarchy": "Language Sunroof JS Ref",
          "module": "Language.Sunroof.JS.Ref",
          "name": "JSRef",
          "package": "sunroof-compiler",
          "partial": "JSRef",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Ref.html#t:JSRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNon-blocking modification of a \u003ccode\u003e\u003ca\u003eJSRef\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Language.Sunroof.JS.Ref\",\"Language.Sunroof\"]",
          "name": "modifyJSRef",
          "package": "sunroof-compiler",
          "signature": "(a -\u003e JS A a) -\u003e JSRef a -\u003e JS t ()",
          "source": "src/Language-Sunroof-JS-Ref.html#modifyJSRef",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Ref.html#v:modifyJSRef\",\"http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof.html#v:modifyJSRef\"]"
        },
        "index": {
          "description": "Non-blocking modification of JSRef",
          "hierarchy": "Language Sunroof JS Ref",
          "module": "Language.Sunroof.JS.Ref",
          "name": "modifyJSRef",
          "normalized": "(a-\u003eJS A a)-\u003eJSRef a-\u003eJS b()",
          "package": "sunroof-compiler",
          "partial": "JSRef",
          "signature": "(a-\u003eJS A a)-\u003eJSRef a-\u003eJS t()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Ref.html#v:modifyJSRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new \u003ccode\u003e\u003ca\u003eJSRef\u003c/a\u003e\u003c/code\u003e with the given intial value.\n\u003c/p\u003e",
          "module": "[\"Language.Sunroof.JS.Ref\",\"Language.Sunroof\"]",
          "name": "newJSRef",
          "package": "sunroof-compiler",
          "signature": "a -\u003e JS t (JSRef a)",
          "source": "src/Language-Sunroof-JS-Ref.html#newJSRef",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Ref.html#v:newJSRef\",\"http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof.html#v:newJSRef\"]"
        },
        "index": {
          "description": "Create new JSRef with the given intial value",
          "hierarchy": "Language Sunroof JS Ref",
          "module": "Language.Sunroof.JS.Ref",
          "name": "newJSRef",
          "normalized": "a-\u003eJS b(JSRef a)",
          "package": "sunroof-compiler",
          "partial": "JSRef",
          "signature": "a-\u003eJS t(JSRef a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Ref.html#v:newJSRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNon-blocking read of a \u003ccode\u003e\u003ca\u003eJSRef\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Language.Sunroof.JS.Ref\",\"Language.Sunroof\"]",
          "name": "readJSRef",
          "package": "sunroof-compiler",
          "signature": "JSRef a -\u003e JS t a",
          "source": "src/Language-Sunroof-JS-Ref.html#readJSRef",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Ref.html#v:readJSRef\",\"http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof.html#v:readJSRef\"]"
        },
        "index": {
          "description": "Non-blocking read of JSRef",
          "hierarchy": "Language Sunroof JS Ref",
          "module": "Language.Sunroof.JS.Ref",
          "name": "readJSRef",
          "normalized": "JSRef a-\u003eJS b a",
          "package": "sunroof-compiler",
          "partial": "JSRef",
          "signature": "JSRef a-\u003eJS t a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Ref.html#v:readJSRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNon-blocking write of a \u003ccode\u003e\u003ca\u003eJSRef\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Language.Sunroof.JS.Ref\",\"Language.Sunroof\"]",
          "name": "writeJSRef",
          "package": "sunroof-compiler",
          "signature": "a -\u003e JSRef a -\u003e JS t ()",
          "source": "src/Language-Sunroof-JS-Ref.html#writeJSRef",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Ref.html#v:writeJSRef\",\"http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof.html#v:writeJSRef\"]"
        },
        "index": {
          "description": "Non-blocking write of JSRef",
          "hierarchy": "Language Sunroof JS Ref",
          "module": "Language.Sunroof.JS.Ref",
          "name": "writeJSRef",
          "normalized": "a-\u003eJSRef a-\u003eJS b()",
          "package": "sunroof-compiler",
          "partial": "JSRef",
          "signature": "a-\u003eJSRef a-\u003eJS t()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-Ref.html#v:writeJSRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eStrings in Javascript.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.Sunroof.JS.String",
          "name": "String",
          "package": "sunroof-compiler",
          "source": "src/Language-Sunroof-JS-String.html",
          "type": "module"
        },
        "index": {
          "description": "Strings in Javascript",
          "hierarchy": "Language Sunroof JS String",
          "module": "Language.Sunroof.JS.String",
          "name": "String",
          "package": "sunroof-compiler",
          "partial": "String",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-String.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJavascript string type.\n\u003c/p\u003e",
          "module": "Language.Sunroof.JS.String",
          "name": "JSString",
          "package": "sunroof-compiler",
          "source": "src/Language-Sunroof-JS-String.html#JSString",
          "type": "data"
        },
        "index": {
          "description": "Javascript string type",
          "hierarchy": "Language Sunroof JS String",
          "module": "Language.Sunroof.JS.String",
          "name": "JSString",
          "package": "sunroof-compiler",
          "partial": "JSString",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-String.html#t:JSString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a Javascript string from a Haskell string.\n\u003c/p\u003e",
          "module": "[\"Language.Sunroof.JS.String\",\"Language.Sunroof\"]",
          "name": "string",
          "package": "sunroof-compiler",
          "signature": "String -\u003e JSString",
          "source": "src/Language-Sunroof-JS-String.html#string",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-String.html#v:string\",\"http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof.html#v:string\"]"
        },
        "index": {
          "description": "Create Javascript string from Haskell string",
          "hierarchy": "Language Sunroof JS String",
          "module": "Language.Sunroof.JS.String",
          "name": "string",
          "normalized": "String-\u003eJSString",
          "package": "sunroof-compiler",
          "signature": "String-\u003eJSString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JS-String.html#v:string"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBasic low-level types and their combinators.\n   These are used as output of the compiler.\n   Everything here is untypes and not supposed for public use!\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.Sunroof.JavaScript",
          "name": "JavaScript",
          "package": "sunroof-compiler",
          "source": "src/Language-Sunroof-JavaScript.html",
          "type": "module"
        },
        "index": {
          "description": "Basic low-level types and their combinators These are used as output of the compiler Everything here is untypes and not supposed for public use",
          "hierarchy": "Language Sunroof JavaScript",
          "module": "Language.Sunroof.JavaScript",
          "name": "JavaScript",
          "package": "sunroof-compiler",
          "partial": "Java Script",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JavaScript.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePlain expressions in Javascript.\n\u003c/p\u003e",
          "module": "Language.Sunroof.JavaScript",
          "name": "E",
          "package": "sunroof-compiler",
          "source": "src/Language-Sunroof-JavaScript.html#E",
          "type": "data"
        },
        "index": {
          "description": "Plain expressions in Javascript",
          "hierarchy": "Language Sunroof JavaScript",
          "module": "Language.Sunroof.JavaScript",
          "name": "E",
          "package": "sunroof-compiler",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JavaScript.html#t:E"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShort name for instantiated expressions.\n\u003c/p\u003e",
          "module": "Language.Sunroof.JavaScript",
          "name": "Expr",
          "package": "sunroof-compiler",
          "source": "src/Language-Sunroof-JavaScript.html#Expr",
          "type": "type"
        },
        "index": {
          "description": "Short name for instantiated expressions",
          "hierarchy": "Language Sunroof JavaScript",
          "module": "Language.Sunroof.JavaScript",
          "name": "Expr",
          "package": "sunroof-compiler",
          "partial": "Expr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JavaScript.html#t:Expr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInstantiated expressions.\n\u003c/p\u003e",
          "module": "Language.Sunroof.JavaScript",
          "name": "ExprE",
          "package": "sunroof-compiler",
          "source": "src/Language-Sunroof-JavaScript.html#ExprE",
          "type": "data"
        },
        "index": {
          "description": "Instantiated expressions",
          "hierarchy": "Language Sunroof JavaScript",
          "module": "Language.Sunroof.JavaScript",
          "name": "ExprE",
          "package": "sunroof-compiler",
          "partial": "Expr",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JavaScript.html#t:ExprE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJavascript identifier.\n\u003c/p\u003e",
          "module": "Language.Sunroof.JavaScript",
          "name": "Id",
          "package": "sunroof-compiler",
          "source": "src/Language-Sunroof-JavaScript.html#Id",
          "type": "type"
        },
        "index": {
          "description": "Javascript identifier",
          "hierarchy": "Language Sunroof JavaScript",
          "module": "Language.Sunroof.JavaScript",
          "name": "Id",
          "package": "sunroof-compiler",
          "partial": "Id",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JavaScript.html#t:Id"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA Right hand side of an assignment.\n\u003c/p\u003e",
          "module": "Language.Sunroof.JavaScript",
          "name": "Rhs",
          "package": "sunroof-compiler",
          "source": "src/Language-Sunroof-JavaScript.html#Rhs",
          "type": "data"
        },
        "index": {
          "description": "Right hand side of an assignment",
          "hierarchy": "Language Sunroof JavaScript",
          "module": "Language.Sunroof.JavaScript",
          "name": "Rhs",
          "package": "sunroof-compiler",
          "partial": "Rhs",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JavaScript.html#t:Rhs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePlain Javascript statements.\n\u003c/p\u003e",
          "module": "Language.Sunroof.JavaScript",
          "name": "Stmt",
          "package": "sunroof-compiler",
          "source": "src/Language-Sunroof-JavaScript.html#Stmt",
          "type": "data"
        },
        "index": {
          "description": "Plain Javascript statements",
          "hierarchy": "Language Sunroof JavaScript",
          "module": "Language.Sunroof.JavaScript",
          "name": "Stmt",
          "package": "sunroof-compiler",
          "partial": "Stmt",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JavaScript.html#t:Stmt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAbstract types for Javascript expressions in Sunroof.\n\u003c/p\u003e",
          "module": "Language.Sunroof.JavaScript",
          "name": "Type",
          "package": "sunroof-compiler",
          "source": "src/Language-Sunroof-JavaScript.html#Type",
          "type": "data"
        },
        "index": {
          "description": "Abstract types for Javascript expressions in Sunroof",
          "hierarchy": "Language Sunroof JavaScript",
          "module": "Language.Sunroof.JavaScript",
          "name": "Type",
          "package": "sunroof-compiler",
          "partial": "Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JavaScript.html#t:Type"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFunction application: \u003ccode\u003eexpr ( expr, ..., expr )\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Language.Sunroof.JavaScript",
          "name": "Apply",
          "package": "sunroof-compiler",
          "signature": "Apply expr [expr]",
          "source": "src/Language-Sunroof-JavaScript.html#E",
          "type": "function"
        },
        "index": {
          "description": "Function application expr expr expr",
          "hierarchy": "Language Sunroof JavaScript",
          "module": "Language.Sunroof.JavaScript",
          "name": "Apply",
          "normalized": "Apply a[a]",
          "package": "sunroof-compiler",
          "partial": "Apply",
          "signature": "Apply expr[expr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JavaScript.html#v:Apply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRestricted assignment: \u003ccode\u003eRhs = Expr;\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Language.Sunroof.JavaScript",
          "name": "AssignStmt",
          "package": "sunroof-compiler",
          "signature": "AssignStmt Rhs Expr",
          "source": "src/Language-Sunroof-JavaScript.html#Stmt",
          "type": "function"
        },
        "index": {
          "description": "Restricted assignment Rhs Expr",
          "hierarchy": "Language Sunroof JavaScript",
          "module": "Language.Sunroof.JavaScript",
          "name": "AssignStmt",
          "package": "sunroof-compiler",
          "partial": "Assign Stmt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JavaScript.html#v:AssignStmt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBase type like object or other primtive types.\n\u003c/p\u003e",
          "module": "[\"Language.Sunroof.JavaScript\",\"Language.Sunroof\"]",
          "name": "Base",
          "package": "sunroof-compiler",
          "signature": "Base",
          "source": "src/Language-Sunroof-JavaScript.html#Type",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JavaScript.html#v:Base\",\"http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof.html#v:Base\"]"
        },
        "index": {
          "description": "Base type like object or other primtive types",
          "hierarchy": "Language Sunroof JavaScript",
          "module": "Language.Sunroof.JavaScript",
          "name": "Base",
          "package": "sunroof-compiler",
          "partial": "Base",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JavaScript.html#v:Base"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA comment in the code: \u003ccode\u003e\u003cem/\u003e String\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Language.Sunroof.JavaScript",
          "name": "CommentStmt",
          "package": "sunroof-compiler",
          "signature": "CommentStmt String",
          "source": "src/Language-Sunroof-JavaScript.html#Stmt",
          "type": "function"
        },
        "index": {
          "description": "comment in the code String",
          "hierarchy": "Language Sunroof JavaScript",
          "module": "Language.Sunroof.JavaScript",
          "name": "CommentStmt",
          "package": "sunroof-compiler",
          "partial": "Comment Stmt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JavaScript.html#v:CommentStmt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelete reference \u003ccode\u003edelete Rhs;\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Language.Sunroof.JavaScript",
          "name": "DeleteStmt",
          "package": "sunroof-compiler",
          "signature": "DeleteStmt Expr",
          "source": "src/Language-Sunroof-JavaScript.html#Stmt",
          "type": "function"
        },
        "index": {
          "description": "Delete reference delete Rhs",
          "hierarchy": "Language Sunroof JavaScript",
          "module": "Language.Sunroof.JavaScript",
          "name": "DeleteStmt",
          "package": "sunroof-compiler",
          "partial": "Delete Stmt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JavaScript.html#v:DeleteStmt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eField/attribute access (with type information): \u003ccode\u003eexpr . expr :: Type\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Language.Sunroof.JavaScript",
          "name": "Dot",
          "package": "sunroof-compiler",
          "signature": "Dot expr expr Type",
          "source": "src/Language-Sunroof-JavaScript.html#E",
          "type": "function"
        },
        "index": {
          "description": "Field attribute access with type information expr expr Type",
          "hierarchy": "Language Sunroof JavaScript",
          "module": "Language.Sunroof.JavaScript",
          "name": "Dot",
          "package": "sunroof-compiler",
          "partial": "Dot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JavaScript.html#v:Dot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea named field\n\u003c/p\u003e",
          "module": "Language.Sunroof.JavaScript",
          "name": "DotRhs",
          "package": "sunroof-compiler",
          "signature": "DotRhs Expr Expr",
          "source": "src/Language-Sunroof-JavaScript.html#Rhs",
          "type": "function"
        },
        "index": {
          "description": "named field",
          "hierarchy": "Language Sunroof JavaScript",
          "module": "Language.Sunroof.JavaScript",
          "name": "DotRhs",
          "package": "sunroof-compiler",
          "partial": "Dot Rhs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JavaScript.html#v:DotRhs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Sunroof.JavaScript",
          "name": "ExprE",
          "package": "sunroof-compiler",
          "signature": "ExprE Expr",
          "source": "src/Language-Sunroof-JavaScript.html#ExprE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Sunroof JavaScript",
          "module": "Language.Sunroof.JavaScript",
          "name": "ExprE",
          "package": "sunroof-compiler",
          "partial": "Expr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JavaScript.html#v:ExprE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExpression statement, for the sake of its side effects: \u003ccode\u003eExpr;\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Language.Sunroof.JavaScript",
          "name": "ExprStmt",
          "package": "sunroof-compiler",
          "signature": "ExprStmt Expr",
          "source": "src/Language-Sunroof-JavaScript.html#Stmt",
          "type": "function"
        },
        "index": {
          "description": "Expression statement for the sake of its side effects Expr",
          "hierarchy": "Language Sunroof JavaScript",
          "module": "Language.Sunroof.JavaScript",
          "name": "ExprStmt",
          "package": "sunroof-compiler",
          "partial": "Expr Stmt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JavaScript.html#v:ExprStmt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFunction type: \u003ccode\u003e(t_1,..,t_n) -\u003e t\u003c/code\u003e\n\u003c/p\u003e",
          "module": "[\"Language.Sunroof.JavaScript\",\"Language.Sunroof\"]",
          "name": "Fun",
          "package": "sunroof-compiler",
          "signature": "Fun [Type] Type",
          "source": "src/Language-Sunroof-JavaScript.html#Type",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JavaScript.html#v:Fun\",\"http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof.html#v:Fun\"]"
        },
        "index": {
          "description": "Function type",
          "hierarchy": "Language Sunroof JavaScript",
          "module": "Language.Sunroof.JavaScript",
          "name": "Fun",
          "normalized": "Fun[Type]Type",
          "package": "sunroof-compiler",
          "partial": "Fun",
          "signature": "Fun[Type]Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JavaScript.html#v:Fun"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAnonymous function with parameter names and body.\n\u003c/p\u003e",
          "module": "Language.Sunroof.JavaScript",
          "name": "Function",
          "package": "sunroof-compiler",
          "signature": "Function [Id] [Stmt]",
          "source": "src/Language-Sunroof-JavaScript.html#E",
          "type": "function"
        },
        "index": {
          "description": "Anonymous function with parameter names and body",
          "hierarchy": "Language Sunroof JavaScript",
          "module": "Language.Sunroof.JavaScript",
          "name": "Function",
          "normalized": "Function[Id][Stmt]",
          "package": "sunroof-compiler",
          "partial": "Function",
          "signature": "Function[Id][Stmt]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JavaScript.html#v:Function"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf-Then-Else statement: \u003ccode\u003eif (Expr) { Stmts } else { Stmts }\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Language.Sunroof.JavaScript",
          "name": "IfStmt",
          "package": "sunroof-compiler",
          "signature": "IfStmt Expr [Stmt] [Stmt]",
          "source": "src/Language-Sunroof-JavaScript.html#Stmt",
          "type": "function"
        },
        "index": {
          "description": "If-Then-Else statement if Expr Stmts else Stmts",
          "hierarchy": "Language Sunroof JavaScript",
          "module": "Language.Sunroof.JavaScript",
          "name": "IfStmt",
          "normalized": "IfStmt Expr[Stmt][Stmt]",
          "package": "sunroof-compiler",
          "partial": "If Stmt",
          "signature": "IfStmt Expr[Stmt][Stmt]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JavaScript.html#v:IfStmt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA precompiled (atomic) Javascript literal.\n\u003c/p\u003e",
          "module": "Language.Sunroof.JavaScript",
          "name": "Lit",
          "package": "sunroof-compiler",
          "signature": "Lit String",
          "source": "src/Language-Sunroof-JavaScript.html#E",
          "type": "function"
        },
        "index": {
          "description": "precompiled atomic Javascript literal",
          "hierarchy": "Language Sunroof JavaScript",
          "module": "Language.Sunroof.JavaScript",
          "name": "Lit",
          "package": "sunroof-compiler",
          "partial": "Lit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JavaScript.html#v:Lit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn statement: \u003ccode\u003ereturn Expr;\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Language.Sunroof.JavaScript",
          "name": "ReturnStmt",
          "package": "sunroof-compiler",
          "signature": "ReturnStmt Expr",
          "source": "src/Language-Sunroof-JavaScript.html#Stmt",
          "type": "function"
        },
        "index": {
          "description": "Return statement return Expr",
          "hierarchy": "Language Sunroof JavaScript",
          "module": "Language.Sunroof.JavaScript",
          "name": "ReturnStmt",
          "package": "sunroof-compiler",
          "partial": "Return Stmt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JavaScript.html#v:ReturnStmt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnit or void type. There is a effect but no value.\n\u003c/p\u003e",
          "module": "[\"Language.Sunroof.JavaScript\",\"Language.Sunroof\"]",
          "name": "Unit",
          "package": "sunroof-compiler",
          "signature": "Unit",
          "source": "src/Language-Sunroof-JavaScript.html#Type",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JavaScript.html#v:Unit\",\"http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof.html#v:Unit\"]"
        },
        "index": {
          "description": "Unit or void type There is effect but no value",
          "hierarchy": "Language Sunroof JavaScript",
          "module": "Language.Sunroof.JavaScript",
          "name": "Unit",
          "package": "sunroof-compiler",
          "partial": "Unit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JavaScript.html#v:Unit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variable.\n\u003c/p\u003e",
          "module": "Language.Sunroof.JavaScript",
          "name": "Var",
          "package": "sunroof-compiler",
          "signature": "Var Id",
          "source": "src/Language-Sunroof-JavaScript.html#E",
          "type": "function"
        },
        "index": {
          "description": "variable",
          "hierarchy": "Language Sunroof JavaScript",
          "module": "Language.Sunroof.JavaScript",
          "name": "Var",
          "package": "sunroof-compiler",
          "partial": "Var",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JavaScript.html#v:Var"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variable\n\u003c/p\u003e",
          "module": "Language.Sunroof.JavaScript",
          "name": "VarRhs",
          "package": "sunroof-compiler",
          "signature": "VarRhs Id",
          "source": "src/Language-Sunroof-JavaScript.html#Rhs",
          "type": "function"
        },
        "index": {
          "description": "variable",
          "hierarchy": "Language Sunroof JavaScript",
          "module": "Language.Sunroof.JavaScript",
          "name": "VarRhs",
          "package": "sunroof-compiler",
          "partial": "Var Rhs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JavaScript.html#v:VarRhs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhile loop: \u003ccode\u003ewhile (Expr) { Stmts }\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Language.Sunroof.JavaScript",
          "name": "WhileStmt",
          "package": "sunroof-compiler",
          "signature": "WhileStmt Expr [Stmt]",
          "source": "src/Language-Sunroof-JavaScript.html#Stmt",
          "type": "function"
        },
        "index": {
          "description": "While loop while Expr Stmts",
          "hierarchy": "Language Sunroof JavaScript",
          "module": "Language.Sunroof.JavaScript",
          "name": "WhileStmt",
          "normalized": "WhileStmt Expr[Stmt]",
          "package": "sunroof-compiler",
          "partial": "While Stmt",
          "signature": "WhileStmt Expr[Stmt]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JavaScript.html#v:WhileStmt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShort-hand to create the applied binary operator/function.\n   See \u003ccode\u003e\u003ca\u003eoperator\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.Sunroof.JavaScript",
          "name": "binOp",
          "package": "sunroof-compiler",
          "signature": "String -\u003e Expr -\u003e Expr -\u003e E ExprE",
          "source": "src/Language-Sunroof-JavaScript.html#binOp",
          "type": "function"
        },
        "index": {
          "description": "Short-hand to create the applied binary operator function See operator",
          "hierarchy": "Language Sunroof JavaScript",
          "module": "Language.Sunroof.JavaScript",
          "name": "binOp",
          "normalized": "String-\u003eExpr-\u003eExpr-\u003eE ExprE",
          "package": "sunroof-compiler",
          "partial": "Op",
          "signature": "String-\u003eExpr-\u003eExpr-\u003eE ExprE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JavaScript.html#v:binOp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombinator to create a expression containing a\n   literal in form of a string.\n\u003c/p\u003e",
          "module": "Language.Sunroof.JavaScript",
          "name": "literal",
          "package": "sunroof-compiler",
          "signature": "String -\u003e Expr",
          "source": "src/Language-Sunroof-JavaScript.html#literal",
          "type": "function"
        },
        "index": {
          "description": "Combinator to create expression containing literal in form of string",
          "hierarchy": "Language Sunroof JavaScript",
          "module": "Language.Sunroof.JavaScript",
          "name": "literal",
          "normalized": "String-\u003eExpr",
          "package": "sunroof-compiler",
          "signature": "String-\u003eExpr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JavaScript.html#v:literal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombinator to create a operator/function applied to the given arguments.\n\u003c/p\u003e",
          "module": "Language.Sunroof.JavaScript",
          "name": "operator",
          "package": "sunroof-compiler",
          "signature": "Id -\u003e [Expr] -\u003e Expr",
          "source": "src/Language-Sunroof-JavaScript.html#operator",
          "type": "function"
        },
        "index": {
          "description": "Combinator to create operator function applied to the given arguments",
          "hierarchy": "Language Sunroof JavaScript",
          "module": "Language.Sunroof.JavaScript",
          "name": "operator",
          "normalized": "Id-\u003e[Expr]-\u003eExpr",
          "package": "sunroof-compiler",
          "signature": "Id-\u003e[Expr]-\u003eExpr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JavaScript.html#v:operator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a anonymous function to scope all effects\n   in the given block of statement.\n\u003c/p\u003e",
          "module": "Language.Sunroof.JavaScript",
          "name": "scopeForEffect",
          "package": "sunroof-compiler",
          "signature": "[Stmt] -\u003e Expr",
          "source": "src/Language-Sunroof-JavaScript.html#scopeForEffect",
          "type": "function"
        },
        "index": {
          "description": "Create anonymous function to scope all effects in the given block of statement",
          "hierarchy": "Language Sunroof JavaScript",
          "module": "Language.Sunroof.JavaScript",
          "name": "scopeForEffect",
          "normalized": "[Stmt]-\u003eExpr",
          "package": "sunroof-compiler",
          "partial": "For Effect",
          "signature": "[Stmt]-\u003eExpr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JavaScript.html#v:scopeForEffect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShow an expression as compiled Javascript.\n   The boolean argument says non-trivial arguments need parenthesis.\n\u003c/p\u003e",
          "module": "Language.Sunroof.JavaScript",
          "name": "showExpr",
          "package": "sunroof-compiler",
          "signature": "Bool -\u003e Expr -\u003e String",
          "source": "src/Language-Sunroof-JavaScript.html#showExpr",
          "type": "function"
        },
        "index": {
          "description": "Show an expression as compiled Javascript The boolean argument says non-trivial arguments need parenthesis",
          "hierarchy": "Language Sunroof JavaScript",
          "module": "Language.Sunroof.JavaScript",
          "name": "showExpr",
          "normalized": "Bool-\u003eExpr-\u003eString",
          "package": "sunroof-compiler",
          "partial": "Expr",
          "signature": "Bool-\u003eExpr-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JavaScript.html#v:showExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTranslate a statement into actual Javascript.\n\u003c/p\u003e",
          "module": "Language.Sunroof.JavaScript",
          "name": "showStmt",
          "package": "sunroof-compiler",
          "signature": "Stmt -\u003e String",
          "source": "src/Language-Sunroof-JavaScript.html#showStmt",
          "type": "function"
        },
        "index": {
          "description": "Translate statement into actual Javascript",
          "hierarchy": "Language Sunroof JavaScript",
          "module": "Language.Sunroof.JavaScript",
          "name": "showStmt",
          "normalized": "Stmt-\u003eString",
          "package": "sunroof-compiler",
          "partial": "Stmt",
          "signature": "Stmt-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JavaScript.html#v:showStmt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShort-hand to create the applied unary operator/function.\n   See \u003ccode\u003e\u003ca\u003eoperator\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.Sunroof.JavaScript",
          "name": "uniOp",
          "package": "sunroof-compiler",
          "signature": "String -\u003e Expr -\u003e E ExprE",
          "source": "src/Language-Sunroof-JavaScript.html#uniOp",
          "type": "function"
        },
        "index": {
          "description": "Short-hand to create the applied unary operator function See operator",
          "hierarchy": "Language Sunroof JavaScript",
          "module": "Language.Sunroof.JavaScript",
          "name": "uniOp",
          "normalized": "String-\u003eExpr-\u003eE ExprE",
          "package": "sunroof-compiler",
          "partial": "Op",
          "signature": "String-\u003eExpr-\u003eE ExprE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-JavaScript.html#v:uniOp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eJSSelector\u003c/a\u003e\u003c/code\u003e are used to access fields of Javascript objects.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.Sunroof.Selector",
          "name": "Selector",
          "package": "sunroof-compiler",
          "source": "src/Language-Sunroof-Selector.html",
          "type": "module"
        },
        "index": {
          "description": "JSSelector are used to access fields of Javascript objects",
          "hierarchy": "Language Sunroof Selector",
          "module": "Language.Sunroof.Selector",
          "name": "Selector",
          "package": "sunroof-compiler",
          "partial": "Selector",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-Selector.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eJSSelector\u003c/a\u003e\u003c/code\u003e selects a field or attribute from a Javascript object.\n   The phantom type is the type of the selected value. Note the selected \n   field or attributes may also array entries (\u003ccode\u003e\u003ca\u003eindex\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Language.Sunroof.Selector",
          "name": "JSSelector",
          "package": "sunroof-compiler",
          "source": "src/Language-Sunroof-Selector.html#JSSelector",
          "type": "data"
        },
        "index": {
          "description": "JSSelector selects field or attribute from Javascript object The phantom type is the type of the selected value Note the selected field or attributes may also array entries index",
          "hierarchy": "Language Sunroof Selector",
          "module": "Language.Sunroof.Selector",
          "name": "JSSelector",
          "package": "sunroof-compiler",
          "partial": "JSSelector",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-Selector.html#t:JSSelector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOperator to use a selector on a Javascript object. Examples:\n\u003c/p\u003e\u003cpre\u003e array ! label \"length\"\n array ! index 4\n\u003c/pre\u003e",
          "module": "[\"Language.Sunroof.Selector\",\"Language.Sunroof\"]",
          "name": "(!)",
          "package": "sunroof-compiler",
          "signature": "o -\u003e JSSelector a -\u003e a",
          "source": "src/Language-Sunroof-Selector.html#%21",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-Selector.html#v:-33-\",\"http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof.html#v:-33-\"]"
        },
        "index": {
          "description": "Operator to use selector on Javascript object Examples array label length array index",
          "hierarchy": "Language Sunroof Selector",
          "module": "Language.Sunroof.Selector",
          "name": "(!) !",
          "normalized": "a-\u003eJSSelector b-\u003eb",
          "package": "sunroof-compiler",
          "signature": "o-\u003eJSSelector a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-Selector.html#v:-33-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a selector for an indexed value (e.g. array access).\n   For type safty it is adivsed to use this with an \n   accompanying type signature. Example:\n\u003c/p\u003e\u003cpre\u003e array ! index 4\n\u003c/pre\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003e!\u003c/a\u003e\u003c/code\u003e for further information on usage.\n\u003c/p\u003e",
          "module": "[\"Language.Sunroof.Selector\",\"Language.Sunroof\"]",
          "name": "index",
          "package": "sunroof-compiler",
          "signature": "JSNumber -\u003e JSSelector a",
          "source": "src/Language-Sunroof-Selector.html#index",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-Selector.html#v:index\",\"http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof.html#v:index\"]"
        },
        "index": {
          "description": "Create selector for an indexed value e.g array access For type safty it is adivsed to use this with an accompanying type signature Example array index See for further information on usage",
          "hierarchy": "Language Sunroof Selector",
          "module": "Language.Sunroof.Selector",
          "name": "index",
          "normalized": "JSNumber-\u003eJSSelector a",
          "package": "sunroof-compiler",
          "signature": "JSNumber-\u003eJSSelector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-Selector.html#v:index"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a selector for a named field or attribute.\n   For type safty it is adivsed to use this with an \n   accompanying type signature. Example:\n\u003c/p\u003e\u003cpre\u003e array ! label \"length\"\n\u003c/pre\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003e!\u003c/a\u003e\u003c/code\u003e for further information on usage.\n\u003c/p\u003e",
          "module": "[\"Language.Sunroof.Selector\",\"Language.Sunroof\"]",
          "name": "label",
          "package": "sunroof-compiler",
          "signature": "JSString -\u003e JSSelector a",
          "source": "src/Language-Sunroof-Selector.html#label",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-Selector.html#v:label\",\"http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof.html#v:label\"]"
        },
        "index": {
          "description": "Create selector for named field or attribute For type safty it is adivsed to use this with an accompanying type signature Example array label length See for further information on usage",
          "hierarchy": "Language Sunroof Selector",
          "module": "Language.Sunroof.Selector",
          "name": "label",
          "normalized": "JSString-\u003eJSSelector a",
          "package": "sunroof-compiler",
          "signature": "JSString-\u003eJSSelector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-Selector.html#v:label"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProvided for internal usage by the compiler. Unwraps the \n   selector.\n\u003c/p\u003e",
          "module": "Language.Sunroof.Selector",
          "name": "unboxSelector",
          "package": "sunroof-compiler",
          "signature": "JSSelector a -\u003e Expr",
          "source": "src/Language-Sunroof-Selector.html#unboxSelector",
          "type": "function"
        },
        "index": {
          "description": "Provided for internal usage by the compiler Unwraps the selector",
          "hierarchy": "Language Sunroof Selector",
          "module": "Language.Sunroof.Selector",
          "name": "unboxSelector",
          "normalized": "JSSelector a-\u003eExpr",
          "package": "sunroof-compiler",
          "partial": "Selector",
          "signature": "JSSelector a-\u003eExpr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-Selector.html#v:unboxSelector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eProvides template Haskell code to generate instances for JavaScript\n   object wrappers (\u003ca\u003ehttps://github.com/ku-fpg/sunroof-compiler/wiki/JSObject-Wrapper-Types\u003c/a\u003e).\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.Sunroof.TH",
          "name": "TH",
          "package": "sunroof-compiler",
          "source": "src/Language-Sunroof-TH.html",
          "type": "module"
        },
        "index": {
          "description": "Provides template Haskell code to generate instances for JavaScript object wrappers https github.com ku-fpg sunroof-compiler wiki JSObject-Wrapper-Types",
          "hierarchy": "Language Sunroof TH",
          "module": "Language.Sunroof.TH",
          "name": "TH",
          "package": "sunroof-compiler",
          "partial": "TH",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-TH.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ederive\u003c/code\u003e derives an incomplete instance for \u003ccode\u003eJSTuple\u003c/code\u003e,\n as well as completing other classes.\n\u003c/p\u003e\u003cp\u003eyou write the newtype explictly, and \u003ccode\u003ederive\u003c/code\u003e does the rest.\n\u003c/p\u003e\u003cpre\u003e newtype JSX o = JSX JSObject\n\u003c/pre\u003e\u003cp\u003eand then the start of the JSTuple instance, and the rest gets filled in\n\u003c/p\u003e\u003cpre\u003e derive [d| instance (SunroofArgument o) =\u003e JSTuple (JSX o) where\n                type Internals (JSX o) = (JSString,JSNumber)\n        |]\n\u003c/pre\u003e\u003cp\u003egenerates\n\u003c/p\u003e\u003cpre\u003e instance (SunroofArgument o) =\u003e Show (JSX o) where\n    show (JSX o) = show o\n\n instance (SunroofArgument o) =\u003e Sunroof (JSX o) where\n    unbox (JSX o) = unbox o\n    box o = JSX (box o)\n\n instance (SunroofArgument o) =\u003e IfB (JSX o) where\n    ifB = jsIfB\n\n type instance BooleanOf (JSX o) = JSBool\n\n instance (SunroofArgument o) =\u003e JSTuple (JSX o) where\n    type instance Internals (JSX o) = (JSString, JSNumber)\n    match o = (o ! attr \"f1\", o ! attr \"f2\")\n    tuple (v1,v2) = do\n        o \u003c- new \"Object\" ()\n        o # attr \"f1\" := v1\n        o # attr \"f2\" := v2\n        return (JSX o)\n\u003c/pre\u003e",
          "module": "Language.Sunroof.TH",
          "name": "deriveJSTuple",
          "package": "sunroof-compiler",
          "signature": "Q [Dec] -\u003e Q [Dec]",
          "source": "src/Language-Sunroof-TH.html#deriveJSTuple",
          "type": "function"
        },
        "index": {
          "description": "derive derives an incomplete instance for JSTuple as well as completing other classes you write the newtype explictly and derive does the rest newtype JSX JSX JSObject and then the start of the JSTuple instance and the rest gets filled in derive instance SunroofArgument JSTuple JSX where type Internals JSX JSString JSNumber generates instance SunroofArgument Show JSX where show JSX show instance SunroofArgument Sunroof JSX where unbox JSX unbox box JSX box instance SunroofArgument IfB JSX where ifB jsIfB type instance BooleanOf JSX JSBool instance SunroofArgument JSTuple JSX where type instance Internals JSX JSString JSNumber match attr f1 attr f2 tuple v1 v2 do new Object attr f1 v1 attr f2 v2 return JSX",
          "hierarchy": "Language Sunroof TH",
          "module": "Language.Sunroof.TH",
          "name": "deriveJSTuple",
          "normalized": "Q[Dec]-\u003eQ[Dec]",
          "package": "sunroof-compiler",
          "partial": "JSTuple",
          "signature": "Q[Dec]-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-TH.html#v:deriveJSTuple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe basic types and combinators of Sunroof.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.Sunroof.Types",
          "name": "Types",
          "package": "sunroof-compiler",
          "source": "src/Language-Sunroof-Types.html",
          "type": "module"
        },
        "index": {
          "description": "The basic types and combinators of Sunroof",
          "hierarchy": "Language Sunroof Types",
          "module": "Language.Sunroof.Types",
          "name": "Types",
          "package": "sunroof-compiler",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe monadic type of Javascript computations.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003eJS t a\u003c/code\u003e is a computation using the thread model \u003ccode\u003et\u003c/code\u003e (see \u003ccode\u003e\u003ca\u003eT\u003c/a\u003e\u003c/code\u003e).\n   It returns a result of type \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.Sunroof.Types",
          "name": "JS",
          "package": "sunroof-compiler",
          "source": "src/Language-Sunroof-Types.html#JS",
          "type": "data"
        },
        "index": {
          "description": "The monadic type of Javascript computations JS is computation using the thread model see It returns result of type",
          "hierarchy": "Language Sunroof Types",
          "module": "Language.Sunroof.Types",
          "name": "JS",
          "package": "sunroof-compiler",
          "partial": "JS",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-Types.html#t:JS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShort-hand type for atmoic Javascript computations.\n\u003c/p\u003e",
          "module": "Language.Sunroof.Types",
          "name": "JSA",
          "package": "sunroof-compiler",
          "source": "src/Language-Sunroof-Types.html#JSA",
          "type": "type"
        },
        "index": {
          "description": "Short-hand type for atmoic Javascript computations",
          "hierarchy": "Language Sunroof Types",
          "module": "Language.Sunroof.Types",
          "name": "JSA",
          "package": "sunroof-compiler",
          "partial": "JSA",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-Types.html#t:JSA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShort-hand type for possibly blocking Javascript computations.\n\u003c/p\u003e",
          "module": "Language.Sunroof.Types",
          "name": "JSB",
          "package": "sunroof-compiler",
          "source": "src/Language-Sunroof-Types.html#JSB",
          "type": "type"
        },
        "index": {
          "description": "Short-hand type for possibly blocking Javascript computations",
          "hierarchy": "Language Sunroof Types",
          "module": "Language.Sunroof.Types",
          "name": "JSB",
          "package": "sunroof-compiler",
          "partial": "JSB",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-Types.html#t:JSB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType of Javascript functions.\n   The first type argument is the type of function argument.\n   This needs to be a instance of \u003ccode\u003e\u003ca\u003eSunroofArgument\u003c/a\u003e\u003c/code\u003e.\n   The second type argument of \u003ccode\u003e\u003ca\u003eJSFunction\u003c/a\u003e\u003c/code\u003e is the function return type.\n   It needs to be a instance of \u003ccode\u003e\u003ca\u003eSunroof\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.Sunroof.Types",
          "name": "JSContinuation",
          "package": "sunroof-compiler",
          "source": "src/Language-Sunroof-Types.html#JSContinuation",
          "type": "data"
        },
        "index": {
          "description": "Type of Javascript functions The first type argument is the type of function argument This needs to be instance of SunroofArgument The second type argument of JSFunction is the function return type It needs to be instance of Sunroof",
          "hierarchy": "Language Sunroof Types",
          "module": "Language.Sunroof.Types",
          "name": "JSContinuation",
          "package": "sunroof-compiler",
          "partial": "JSContinuation",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-Types.html#t:JSContinuation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType of Javascript functions.\n   The first type argument is the type of function argument.\n   This needs to be a instance of \u003ccode\u003e\u003ca\u003eSunroofArgument\u003c/a\u003e\u003c/code\u003e.\n   The second type argument of \u003ccode\u003e\u003ca\u003eJSFunction\u003c/a\u003e\u003c/code\u003e is the function return type.\n   It needs to be a instance of \u003ccode\u003e\u003ca\u003eSunroof\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.Sunroof.Types",
          "name": "JSFunction",
          "package": "sunroof-compiler",
          "source": "src/Language-Sunroof-Types.html#JSFunction",
          "type": "data"
        },
        "index": {
          "description": "Type of Javascript functions The first type argument is the type of function argument This needs to be instance of SunroofArgument The second type argument of JSFunction is the function return type It needs to be instance of Sunroof",
          "hierarchy": "Language Sunroof Types",
          "module": "Language.Sunroof.Types",
          "name": "JSFunction",
          "package": "sunroof-compiler",
          "partial": "JSFunction",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-Types.html#t:JSFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eJSI\u003c/a\u003e\u003c/code\u003e represents the primitive effects or instructions for\n   the JS monad.\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eJS_Assign s v o\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e assigns a value \u003ccode\u003ev\u003c/code\u003e to the selected field \u003ccode\u003es\u003c/code\u003e\n       in the object \u003ccode\u003eo\u003c/code\u003e.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eJS_Select s o\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e returns the value of the selected field \u003ccode\u003es\u003c/code\u003e\n       in the object \u003ccode\u003eo\u003c/code\u003e.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eJS_Delete s o\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e delete the selected field \u003ccode\u003es\u003c/code\u003e in the object \u003ccode\u003eo\u003c/code\u003e.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eJS_Invoke a f\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e calls the function \u003ccode\u003ef\u003c/code\u003e with the arguments \u003ccode\u003ea\u003c/code\u003e.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eJS_Eval v\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e evaluates the value \u003ccode\u003ev\u003c/code\u003e. Subsequent instructions\n       use the value instead of reevaluating the expression.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eJS_Function f\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e creates a Javascript function\n       from the Haskell function \u003ccode\u003ef\u003c/code\u003e.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eJS_Continuation f\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e creates a Javascript continuation (function that never returns a value)\n       from the Haskell function \u003ccode\u003ef\u003c/code\u003e.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eJS_Branch b t f\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e creates a \u003ccode\u003eif-then-else\u003c/code\u003e statement in Javascript.\n       In that statement \u003ccode\u003eb\u003c/code\u003e is the condition, \u003ccode\u003et\u003c/code\u003e is the true branch and\n       \u003ccode\u003ef\u003c/code\u003e is the false branch.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eJS_Return v\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e translates into an actual \u003ccode\u003ereturn\u003c/code\u003e statement that\n       returns the value \u003ccode\u003ev\u003c/code\u003e in Javascript.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eJS_Assign_ v x\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e assigns the value \u003ccode\u003ex\u003c/code\u003e to the variable with name \u003ccode\u003ev\u003c/code\u003e.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eJS_Fix v x\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e models a fixpoint computation in \u003ccode\u003e\u003ca\u003eJS\u003c/a\u003e\u003c/code\u003e. See \u003ccode\u003ejsfix\u003c/code\u003e.\n\u003c/dd\u003e\u003c/dl\u003e",
          "module": "Language.Sunroof.Types",
          "name": "JSI",
          "package": "sunroof-compiler",
          "source": "src/Language-Sunroof-Types.html#JSI",
          "type": "data"
        },
        "index": {
          "description": "JSI represents the primitive effects or instructions for the JS monad JS Assign assigns value to the selected field in the object JS Select returns the value of the selected field in the object JS Delete delete the selected field in the object JS Invoke calls the function with the arguments JS Eval evaluates the value Subsequent instructions use the value instead of reevaluating the expression JS Function creates Javascript function from the Haskell function JS Continuation creates Javascript continuation function that never returns value from the Haskell function JS Branch creates if-then-else statement in Javascript In that statement is the condition is the true branch and is the false branch JS Return translates into an actual return statement that returns the value in Javascript JS Assign assigns the value to the variable with name JS Fix models fixpoint computation in JS See jsfix",
          "hierarchy": "Language Sunroof Types",
          "module": "Language.Sunroof.Types",
          "name": "JSI",
          "package": "sunroof-compiler",
          "partial": "JSI",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-Types.html#t:JSI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf something is a \u003ccode\u003e\u003ca\u003eJSTuple\u003c/a\u003e\u003c/code\u003e, it can easily be decomposed and\n   recomposed from different components. This is meant as a convenient\n   access to attributes of an object.\n TODO: revisit this\n\u003c/p\u003e",
          "module": "Language.Sunroof.Types",
          "name": "JSTuple",
          "package": "sunroof-compiler",
          "source": "src/Language-Sunroof-Types.html#JSTuple",
          "type": "class"
        },
        "index": {
          "description": "If something is JSTuple it can easily be decomposed and recomposed from different components This is meant as convenient access to attributes of an object TODO revisit this",
          "hierarchy": "Language Sunroof Types",
          "module": "Language.Sunroof.Types",
          "name": "JSTuple",
          "package": "sunroof-compiler",
          "partial": "JSTuple",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-Types.html#t:JSTuple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEverything that can be used as an key in a dictionary lookup.\n\u003c/p\u003e",
          "module": "Language.Sunroof.Types",
          "name": "SunroofKey",
          "package": "sunroof-compiler",
          "source": "src/Language-Sunroof-Types.html#SunroofKey",
          "type": "class"
        },
        "index": {
          "description": "Everything that can be used as an key in dictionary lookup",
          "hierarchy": "Language Sunroof Types",
          "module": "Language.Sunroof.Types",
          "name": "SunroofKey",
          "package": "sunroof-compiler",
          "partial": "Sunroof Key",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-Types.html#t:SunroofKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhen implemented the type supports determining the threading model\n   during runtime.\n\u003c/p\u003e",
          "module": "Language.Sunroof.Types",
          "name": "SunroofThread",
          "package": "sunroof-compiler",
          "source": "src/Language-Sunroof-Types.html#SunroofThread",
          "type": "class"
        },
        "index": {
          "description": "When implemented the type supports determining the threading model during runtime",
          "hierarchy": "Language Sunroof Types",
          "module": "Language.Sunroof.Types",
          "name": "SunroofThread",
          "package": "sunroof-compiler",
          "partial": "Sunroof Thread",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-Types.html#t:SunroofThread"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe possible threading models for Javascript computations.\n\u003c/p\u003e",
          "module": "Language.Sunroof.Types",
          "name": "T",
          "package": "sunroof-compiler",
          "source": "src/Language-Sunroof-Types.html#T",
          "type": "data"
        },
        "index": {
          "description": "The possible threading models for Javascript computations",
          "hierarchy": "Language Sunroof Types",
          "module": "Language.Sunroof.Types",
          "name": "T",
          "package": "sunroof-compiler",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-Types.html#t:T"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA proxy to capture the type of threading model used.\n   See \u003ccode\u003e\u003ca\u003eSunroofThread\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.Sunroof.Types",
          "name": "ThreadProxy",
          "package": "sunroof-compiler",
          "source": "src/Language-Sunroof-Types.html#ThreadProxy",
          "type": "data"
        },
        "index": {
          "description": "proxy to capture the type of threading model used See SunroofThread",
          "hierarchy": "Language Sunroof Types",
          "module": "Language.Sunroof.Types",
          "name": "ThreadProxy",
          "package": "sunroof-compiler",
          "partial": "Thread Proxy",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-Types.html#t:ThreadProxy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e#\u003c/code\u003e-operator is the Haskell analog to the \u003ccode\u003e.\u003c/code\u003e-operator\n   in Javascript. Example:\n\u003c/p\u003e\u003cpre\u003e document # getElementById \"bla\"\n\u003c/pre\u003e\u003cp\u003eThis can be seen as equivalent of \u003ccode\u003edocument.getElementById(\"bla\")\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Language.Sunroof.Types\",\"Language.Sunroof\"]",
          "name": "(#)",
          "package": "sunroof-compiler",
          "signature": "a -\u003e (a -\u003e JS t b) -\u003e JS t b",
          "source": "src/Language-Sunroof-Types.html#%23",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-Types.html#v:-35-\",\"http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof.html#v:-35-\"]"
        },
        "index": {
          "description": "The operator is the Haskell analog to the operator in Javascript Example document getElementById bla This can be seen as equivalent of document.getElementById bla",
          "hierarchy": "Language Sunroof Types",
          "module": "Language.Sunroof.Types",
          "name": "(#) #",
          "normalized": "a-\u003e(a-\u003eJS b c)-\u003eJS b c",
          "package": "sunroof-compiler",
          "signature": "a-\u003e(a-\u003eJS t b)-\u003eJS t b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-Types.html#v:-35-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ef $$ a\u003c/code\u003e applies the function \u003ccode\u003ef\u003c/code\u003e to the given arguments \u003ccode\u003ea\u003c/code\u003e.\n   See \u003ccode\u003e\u003ca\u003eapply\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Language.Sunroof.Types\",\"Language.Sunroof\"]",
          "name": "($$)",
          "package": "sunroof-compiler",
          "signature": "JSFunction args ret -\u003e args -\u003e JS t ret",
          "source": "src/Language-Sunroof-Types.html#%24%24",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-Types.html#v:-36--36-\",\"http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof.html#v:-36--36-\"]"
        },
        "index": {
          "description": "applies the function to the given arguments See apply",
          "hierarchy": "Language Sunroof Types",
          "module": "Language.Sunroof.Types",
          "name": "($$) $$",
          "normalized": "JSFunction a b-\u003ea-\u003eJS c b",
          "package": "sunroof-compiler",
          "signature": "JSFunction args ret-\u003eargs-\u003eJS t ret",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-Types.html#v:-36--36-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Language.Sunroof.Types\",\"Language.Sunroof\"]",
          "name": ":=",
          "package": "sunroof-compiler",
          "signature": "JSSelector a -\u003e a -\u003e o -\u003e JS t ()",
          "source": "src/Language-Sunroof-Types.html#JS",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-Types.html#v::-61-\",\"http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof.html#v::-61-\"]"
        },
        "index": {
          "hierarchy": "Language Sunroof Types",
          "module": "Language.Sunroof.Types",
          "name": ":=",
          "normalized": "JSSelector a-\u003ea-\u003eb-\u003eJS c()",
          "package": "sunroof-compiler",
          "signature": "JSSelector a-\u003ea-\u003eo-\u003eJS t()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-Types.html#v::-61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAtomic - The computation will not be interrupted.\n\u003c/p\u003e",
          "module": "[\"Language.Sunroof.Types\",\"Language.Sunroof\"]",
          "name": "A",
          "package": "sunroof-compiler",
          "signature": "A",
          "source": "src/Language-Sunroof-Types.html#T",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-Types.html#v:A\",\"http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof.html#v:A\"]"
        },
        "index": {
          "description": "Atomic The computation will not be interrupted",
          "hierarchy": "Language Sunroof Types",
          "module": "Language.Sunroof.Types",
          "name": "A",
          "package": "sunroof-compiler",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-Types.html#v:A"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBlocking - The computation may block and wait to enable\n   interleaving with other computations.\n\u003c/p\u003e",
          "module": "[\"Language.Sunroof.Types\",\"Language.Sunroof\"]",
          "name": "B",
          "package": "sunroof-compiler",
          "signature": "B",
          "source": "src/Language-Sunroof-Types.html#T",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-Types.html#v:B\",\"http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof.html#v:B\"]"
        },
        "index": {
          "description": "Blocking The computation may block and wait to enable interleaving with other computations",
          "hierarchy": "Language Sunroof Types",
          "module": "Language.Sunroof.Types",
          "name": "B",
          "package": "sunroof-compiler",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-Types.html#v:B"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Language.Sunroof.Types\",\"Language.Sunroof\"]",
          "name": "JS",
          "package": "sunroof-compiler",
          "signature": "((a -\u003e Program (JSI t) ()) -\u003e Program (JSI t) ()) -\u003e JS t a",
          "source": "src/Language-Sunroof-Types.html#JS",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-Types.html#v:JS\",\"http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof.html#v:JS\"]"
        },
        "index": {
          "hierarchy": "Language Sunroof Types",
          "module": "Language.Sunroof.Types",
          "name": "JS",
          "normalized": "((a-\u003eProgram(JSI b)())-\u003eProgram(JSI b)())-\u003eJS b a",
          "package": "sunroof-compiler",
          "partial": "JS",
          "signature": "((a-\u003eProgram(JSI t)())-\u003eProgram(JSI t)())-\u003eJS t a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-Types.html#v:JS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Sunroof.Types",
          "name": "JS_Assign",
          "package": "sunroof-compiler",
          "signature": "JSSelector a -\u003e a -\u003e JSObject -\u003e JSI t ()",
          "source": "src/Language-Sunroof-Types.html#JSI",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Sunroof Types",
          "module": "Language.Sunroof.Types",
          "name": "JS_Assign",
          "normalized": "JSSelector a-\u003ea-\u003eJSObject-\u003eJSI b()",
          "package": "sunroof-compiler",
          "partial": "JS Assign",
          "signature": "JSSelector a-\u003ea-\u003eJSObject-\u003eJSI t()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-Types.html#v:JS_Assign"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Sunroof.Types",
          "name": "JS_Assign_",
          "package": "sunroof-compiler",
          "signature": "Id -\u003e a -\u003e JSI t ()",
          "source": "src/Language-Sunroof-Types.html#JSI",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Sunroof Types",
          "module": "Language.Sunroof.Types",
          "name": "JS_Assign_",
          "normalized": "Id-\u003ea-\u003eJSI b()",
          "package": "sunroof-compiler",
          "partial": "JS Assign",
          "signature": "Id-\u003ea-\u003eJSI t()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-Types.html#v:JS_Assign_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Sunroof.Types",
          "name": "JS_Branch",
          "package": "sunroof-compiler",
          "signature": "bool -\u003e JS t a -\u003e JS t a -\u003e JSI t a",
          "source": "src/Language-Sunroof-Types.html#JSI",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Sunroof Types",
          "module": "Language.Sunroof.Types",
          "name": "JS_Branch",
          "normalized": "a-\u003eJS b c-\u003eJS b c-\u003eJSI b c",
          "package": "sunroof-compiler",
          "partial": "JS Branch",
          "signature": "bool-\u003eJS t a-\u003eJS t a-\u003eJSI t a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-Types.html#v:JS_Branch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Sunroof.Types",
          "name": "JS_Comment",
          "package": "sunroof-compiler",
          "signature": "String -\u003e JSI t ()",
          "source": "src/Language-Sunroof-Types.html#JSI",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Sunroof Types",
          "module": "Language.Sunroof.Types",
          "name": "JS_Comment",
          "normalized": "String-\u003eJSI a()",
          "package": "sunroof-compiler",
          "partial": "JS Comment",
          "signature": "String-\u003eJSI t()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-Types.html#v:JS_Comment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Sunroof.Types",
          "name": "JS_Continuation",
          "package": "sunroof-compiler",
          "signature": "(a -\u003e JS B ()) -\u003e JSI t (JSContinuation a)",
          "source": "src/Language-Sunroof-Types.html#JSI",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Sunroof Types",
          "module": "Language.Sunroof.Types",
          "name": "JS_Continuation",
          "normalized": "(a-\u003eJS B())-\u003eJSI b(JSContinuation a)",
          "package": "sunroof-compiler",
          "partial": "JS Continuation",
          "signature": "(a-\u003eJS B())-\u003eJSI t(JSContinuation a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-Types.html#v:JS_Continuation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Sunroof.Types",
          "name": "JS_Delete",
          "package": "sunroof-compiler",
          "signature": "JSSelector a -\u003e JSObject -\u003e JSI t ()",
          "source": "src/Language-Sunroof-Types.html#JSI",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Sunroof Types",
          "module": "Language.Sunroof.Types",
          "name": "JS_Delete",
          "normalized": "JSSelector a-\u003eJSObject-\u003eJSI b()",
          "package": "sunroof-compiler",
          "partial": "JS Delete",
          "signature": "JSSelector a-\u003eJSObject-\u003eJSI t()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-Types.html#v:JS_Delete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Sunroof.Types",
          "name": "JS_Eval",
          "package": "sunroof-compiler",
          "signature": "a -\u003e JSI t a",
          "source": "src/Language-Sunroof-Types.html#JSI",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Sunroof Types",
          "module": "Language.Sunroof.Types",
          "name": "JS_Eval",
          "normalized": "a-\u003eJSI b a",
          "package": "sunroof-compiler",
          "partial": "JS Eval",
          "signature": "a-\u003eJSI t a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-Types.html#v:JS_Eval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Sunroof.Types",
          "name": "JS_Fix",
          "package": "sunroof-compiler",
          "signature": "(a -\u003e JS A a) -\u003e JSI t a",
          "source": "src/Language-Sunroof-Types.html#JSI",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Sunroof Types",
          "module": "Language.Sunroof.Types",
          "name": "JS_Fix",
          "normalized": "(a-\u003eJS A a)-\u003eJSI b a",
          "package": "sunroof-compiler",
          "partial": "JS Fix",
          "signature": "(a-\u003eJS A a)-\u003eJSI t a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-Types.html#v:JS_Fix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Sunroof.Types",
          "name": "JS_Function",
          "package": "sunroof-compiler",
          "signature": "(a -\u003e JS A b) -\u003e JSI t (JSFunction a b)",
          "source": "src/Language-Sunroof-Types.html#JSI",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Sunroof Types",
          "module": "Language.Sunroof.Types",
          "name": "JS_Function",
          "normalized": "(a-\u003eJS A b)-\u003eJSI c(JSFunction a b)",
          "package": "sunroof-compiler",
          "partial": "JS Function",
          "signature": "(a-\u003eJS A b)-\u003eJSI t(JSFunction a b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-Types.html#v:JS_Function"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Sunroof.Types",
          "name": "JS_Invoke",
          "package": "sunroof-compiler",
          "signature": "a -\u003e JSFunction a r -\u003e JSI t r",
          "source": "src/Language-Sunroof-Types.html#JSI",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Sunroof Types",
          "module": "Language.Sunroof.Types",
          "name": "JS_Invoke",
          "normalized": "a-\u003eJSFunction a b-\u003eJSI c b",
          "package": "sunroof-compiler",
          "partial": "JS Invoke",
          "signature": "a-\u003eJSFunction a r-\u003eJSI t r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-Types.html#v:JS_Invoke"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Sunroof.Types",
          "name": "JS_Return",
          "package": "sunroof-compiler",
          "signature": "a -\u003e JSI t ()",
          "source": "src/Language-Sunroof-Types.html#JSI",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Sunroof Types",
          "module": "Language.Sunroof.Types",
          "name": "JS_Return",
          "normalized": "a-\u003eJSI b()",
          "package": "sunroof-compiler",
          "partial": "JS Return",
          "signature": "a-\u003eJSI t()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-Types.html#v:JS_Return"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Sunroof.Types",
          "name": "JS_Select",
          "package": "sunroof-compiler",
          "signature": "JSSelector a -\u003e JSObject -\u003e JSI t a",
          "source": "src/Language-Sunroof-Types.html#JSI",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Sunroof Types",
          "module": "Language.Sunroof.Types",
          "name": "JS_Select",
          "normalized": "JSSelector a-\u003eJSObject-\u003eJSI b a",
          "package": "sunroof-compiler",
          "partial": "JS Select",
          "signature": "JSSelector a-\u003eJSObject-\u003eJSI t a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-Types.html#v:JS_Select"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Language.Sunroof.Types\",\"Language.Sunroof\"]",
          "name": "ThreadProxy",
          "package": "sunroof-compiler",
          "signature": "ThreadProxy",
          "source": "src/Language-Sunroof-Types.html#ThreadProxy",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-Types.html#v:ThreadProxy\",\"http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof.html#v:ThreadProxy\"]"
        },
        "index": {
          "hierarchy": "Language Sunroof Types",
          "module": "Language.Sunroof.Types",
          "name": "ThreadProxy",
          "package": "sunroof-compiler",
          "partial": "Thread Proxy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-Types.html#v:ThreadProxy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eapply f a\u003c/code\u003e applies the function \u003ccode\u003ef\u003c/code\u003e to the given arguments \u003ccode\u003ea\u003c/code\u003e.\n   A typical use case looks like this:\n\u003c/p\u003e\u003cpre\u003e foo `apply` (x,y)\n\u003c/pre\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003e$$\u003c/a\u003e\u003c/code\u003e for a convenient infix operator to do this.\n\u003c/p\u003e",
          "module": "[\"Language.Sunroof.Types\",\"Language.Sunroof\"]",
          "name": "apply",
          "package": "sunroof-compiler",
          "signature": "JSFunction args ret -\u003e args -\u003e JS t ret",
          "source": "src/Language-Sunroof-Types.html#apply",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-Types.html#v:apply\",\"http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof.html#v:apply\"]"
        },
        "index": {
          "description": "apply applies the function to the given arguments typical use case looks like this foo apply See for convenient infix operator to do this",
          "hierarchy": "Language Sunroof Types",
          "module": "Language.Sunroof.Types",
          "name": "apply",
          "normalized": "JSFunction a b-\u003ea-\u003eJS c b",
          "package": "sunroof-compiler",
          "signature": "JSFunction args ret-\u003eargs-\u003eJS t ret",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-Types.html#v:apply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a selector for attributes of Javascript objects.\n   It is advised to use this together with an associated type\n   signature to avoid ambiguity. Example:\n\u003c/p\u003e\u003cpre\u003e length :: JSSelector JSNumber\n length = attr \"length\"\n\u003c/pre\u003e\u003cp\u003eSelectors can be used with \u003ccode\u003e\u003ca\u003e!\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Language.Sunroof.Types\",\"Language.Sunroof\"]",
          "name": "attr",
          "package": "sunroof-compiler",
          "signature": "String -\u003e JSSelector a",
          "source": "src/Language-Sunroof-Types.html#attr",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-Types.html#v:attr\",\"http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof.html#v:attr\"]"
        },
        "index": {
          "description": "Creates selector for attributes of Javascript objects It is advised to use this together with an associated type signature to avoid ambiguity Example length JSSelector JSNumber length attr length Selectors can be used with",
          "hierarchy": "Language Sunroof Types",
          "module": "Language.Sunroof.Types",
          "name": "attr",
          "normalized": "String-\u003eJSSelector a",
          "package": "sunroof-compiler",
          "signature": "String-\u003eJSSelector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-Types.html#v:attr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a possibly blocking computation from the given one.\n\u003c/p\u003e",
          "module": "Language.Sunroof.Types",
          "name": "blockableJS",
          "package": "sunroof-compiler",
          "signature": "JS t a -\u003e JS B a",
          "source": "src/Language-Sunroof-Types.html#blockableJS",
          "type": "method"
        },
        "index": {
          "description": "Create possibly blocking computation from the given one",
          "hierarchy": "Language Sunroof Types",
          "module": "Language.Sunroof.Types",
          "name": "blockableJS",
          "normalized": "JS a b-\u003eJS B b",
          "package": "sunroof-compiler",
          "partial": "JS",
          "signature": "JS t a-\u003eJS B a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-Types.html#v:blockableJS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReify the current contination as a Javascript continuation\n\u003c/p\u003e",
          "module": "[\"Language.Sunroof.Types\",\"Language.Sunroof\"]",
          "name": "callcc",
          "package": "sunroof-compiler",
          "signature": "(JSContinuation a -\u003e JS B a) -\u003e JS B a",
          "source": "src/Language-Sunroof-Types.html#callcc",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-Types.html#v:callcc\",\"http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof.html#v:callcc\"]"
        },
        "index": {
          "description": "Reify the current contination as Javascript continuation",
          "hierarchy": "Language Sunroof Types",
          "module": "Language.Sunroof.Types",
          "name": "callcc",
          "normalized": "(JSContinuation a-\u003eJS B a)-\u003eJS B a",
          "package": "sunroof-compiler",
          "signature": "(JSContinuation a-\u003eJS B a)-\u003eJS B a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-Types.html#v:callcc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCast one Sunroof value into another.\n\u003c/p\u003e\u003cp\u003eThis is sometimes needed due to Javascripts flexible type system.\n\u003c/p\u003e",
          "module": "[\"Language.Sunroof.Types\",\"Language.Sunroof\"]",
          "name": "cast",
          "package": "sunroof-compiler",
          "signature": "a -\u003e b",
          "source": "src/Language-Sunroof-Types.html#cast",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-Types.html#v:cast\",\"http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof.html#v:cast\"]"
        },
        "index": {
          "description": "Cast one Sunroof value into another This is sometimes needed due to Javascripts flexible type system",
          "hierarchy": "Language Sunroof Types",
          "module": "Language.Sunroof.Types",
          "name": "cast",
          "normalized": "a-\u003eb",
          "package": "sunroof-compiler",
          "signature": "a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-Types.html#v:cast"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWe can compile \u003ccode\u003e\u003ca\u003eB\u003c/a\u003e\u003c/code\u003elockable functions that return \u003ccode\u003e()\u003c/code\u003e.\n   Note that, with the \u003ccode\u003e\u003ca\u003eB\u003c/a\u003e\u003c/code\u003e-style threads, we return from a\n   call when we first block, not at completion of the call.\n\u003c/p\u003e",
          "module": "[\"Language.Sunroof.Types\",\"Language.Sunroof\"]",
          "name": "continuation",
          "package": "sunroof-compiler",
          "signature": "(a -\u003e JS B ()) -\u003e JS t (JSContinuation a)",
          "source": "src/Language-Sunroof-Types.html#continuation",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-Types.html#v:continuation\",\"http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof.html#v:continuation\"]"
        },
        "index": {
          "description": "We can compile lockable functions that return Note that with the style threads we return from call when we first block not at completion of the call",
          "hierarchy": "Language Sunroof Types",
          "module": "Language.Sunroof.Types",
          "name": "continuation",
          "normalized": "(a-\u003eJS B())-\u003eJS b(JSContinuation a)",
          "package": "sunroof-compiler",
          "signature": "(a-\u003eJS B())-\u003eJS t(JSContinuation a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-Types.html#v:continuation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eo # delete lab\u003c/code\u003e removes the label \u003ccode\u003elab\u003c/code\u003e from the object \u003ccode\u003eo\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Language.Sunroof.Types\",\"Language.Sunroof\"]",
          "name": "delete",
          "package": "sunroof-compiler",
          "signature": "JSSelector a -\u003e JSObject -\u003e JS t ()",
          "source": "src/Language-Sunroof-Types.html#delete",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-Types.html#v:delete\",\"http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof.html#v:delete\"]"
        },
        "index": {
          "description": "delete lab removes the label lab from the object",
          "hierarchy": "Language Sunroof Types",
          "module": "Language.Sunroof.Types",
          "name": "delete",
          "normalized": "JSSelector a-\u003eJSObject-\u003eJS b()",
          "package": "sunroof-compiler",
          "signature": "JSSelector a-\u003eJSObject-\u003eJS t()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-Types.html#v:delete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAbort the current computation at this point.\n\u003c/p\u003e",
          "module": "[\"Language.Sunroof.Types\",\"Language.Sunroof\"]",
          "name": "done",
          "package": "sunroof-compiler",
          "signature": "JS t a",
          "source": "src/Language-Sunroof-Types.html#done",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-Types.html#v:done\",\"http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof.html#v:done\"]"
        },
        "index": {
          "description": "Abort the current computation at this point",
          "hierarchy": "Language Sunroof Types",
          "module": "Language.Sunroof.Types",
          "name": "done",
          "package": "sunroof-compiler",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-Types.html#v:done"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermine the used threading model captured the given \u003ccode\u003e\u003ca\u003eThreadProxy\u003c/a\u003e\u003c/code\u003e\n   object.\n\u003c/p\u003e",
          "module": "Language.Sunroof.Types",
          "name": "evalStyle",
          "package": "sunroof-compiler",
          "signature": "ThreadProxy t -\u003e T",
          "source": "src/Language-Sunroof-Types.html#evalStyle",
          "type": "method"
        },
        "index": {
          "description": "Determine the used threading model captured the given ThreadProxy object",
          "hierarchy": "Language Sunroof Types",
          "module": "Language.Sunroof.Types",
          "name": "evalStyle",
          "normalized": "ThreadProxy a-\u003eT",
          "package": "sunroof-compiler",
          "partial": "Style",
          "signature": "ThreadProxy t-\u003eT",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-Types.html#v:evalStyle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluate a \u003ccode\u003e\u003ca\u003eSunroof\u003c/a\u003e\u003c/code\u003e value. This forces evaluation\n   of the given expression to a value and enables binding it to a\n   variable. Example:\n\u003c/p\u003e\u003cpre\u003e x \u003c- evaluate $ \"A\" \u003c\u003e \"B\"\n alert x\n alert x\n\u003c/pre\u003e\u003cp\u003eThis would result in: \u003ccode\u003evar v0 = \"A\"+\"B\"; alert(v0); alert(v0);\u003c/code\u003e. But:\n\u003c/p\u003e\u003cpre\u003e x \u003c- return $ \"A\" \u003c\u003e \"B\"\n alert x\n alert x\n\u003c/pre\u003e\u003cp\u003eThis will result in: \u003ccode\u003ealert(\"A\"+\"B\"); alert(\"A\"+\"B\");\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Language.Sunroof.Types\",\"Language.Sunroof\"]",
          "name": "evaluate",
          "package": "sunroof-compiler",
          "signature": "a -\u003e JS t a",
          "source": "src/Language-Sunroof-Types.html#evaluate",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-Types.html#v:evaluate\",\"http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof.html#v:evaluate\"]"
        },
        "index": {
          "description": "Evaluate Sunroof value This forces evaluation of the given expression to value and enables binding it to variable Example evaluate alert alert This would result in var v0 alert v0 alert v0 But return alert alert This will result in alert alert",
          "hierarchy": "Language Sunroof Types",
          "module": "Language.Sunroof.Types",
          "name": "evaluate",
          "normalized": "a-\u003eJS b a",
          "package": "sunroof-compiler",
          "signature": "a-\u003eJS t a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-Types.html#v:evaluate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a binding to a Javascript top-level function with\n   the given name. It is advised to create these bindings with an\n   associated type signature to ensure type safty while using\n   this function. Example:\n\u003c/p\u003e\u003cpre\u003e alert :: JSFunction JSString ()\n alert = fun \"alert\"\n\u003c/pre\u003e",
          "module": "[\"Language.Sunroof.Types\",\"Language.Sunroof\"]",
          "name": "fun",
          "package": "sunroof-compiler",
          "signature": "String -\u003e JSFunction a r",
          "source": "src/Language-Sunroof-Types.html#fun",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-Types.html#v:fun\",\"http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof.html#v:fun\"]"
        },
        "index": {
          "description": "Create binding to Javascript top-level function with the given name It is advised to create these bindings with an associated type signature to ensure type safty while using this function Example alert JSFunction JSString alert fun alert",
          "hierarchy": "Language Sunroof Types",
          "module": "Language.Sunroof.Types",
          "name": "fun",
          "normalized": "String-\u003eJSFunction a b",
          "package": "sunroof-compiler",
          "signature": "String-\u003eJSFunction a r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-Types.html#v:fun"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an \u003ccode\u003e\u003ca\u003eA\u003c/a\u003e\u003c/code\u003etomic Javascript function from a Haskell function.\n\u003c/p\u003e",
          "module": "[\"Language.Sunroof.Types\",\"Language.Sunroof\"]",
          "name": "function",
          "package": "sunroof-compiler",
          "signature": "(a -\u003e JS A b) -\u003e JS t (JSFunction a b)",
          "source": "src/Language-Sunroof-Types.html#function",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-Types.html#v:function\",\"http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof.html#v:function\"]"
        },
        "index": {
          "description": "Create an tomic Javascript function from Haskell function",
          "hierarchy": "Language Sunroof Types",
          "module": "Language.Sunroof.Types",
          "name": "function",
          "normalized": "(a-\u003eJS A b)-\u003eJS c(JSFunction a b)",
          "package": "sunroof-compiler",
          "signature": "(a-\u003eJS A b)-\u003eJS t(JSFunction a b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-Types.html#v:function"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003egoto\u003c/code\u003e calls the given continuation with the given argument,\n   and never returns.\n\u003c/p\u003e",
          "module": "[\"Language.Sunroof.Types\",\"Language.Sunroof\"]",
          "name": "goto",
          "package": "sunroof-compiler",
          "signature": "JSContinuation args -\u003e args -\u003e JS t a",
          "source": "src/Language-Sunroof-Types.html#goto",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-Types.html#v:goto\",\"http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof.html#v:goto\"]"
        },
        "index": {
          "description": "goto calls the given continuation with the given argument and never returns",
          "hierarchy": "Language Sunroof Types",
          "module": "Language.Sunroof.Types",
          "name": "goto",
          "normalized": "JSContinuation a-\u003ea-\u003eJS b c",
          "package": "sunroof-compiler",
          "signature": "JSContinuation args-\u003eargs-\u003eJS t a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-Types.html#v:goto"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003einvoke s a o\u003c/code\u003e calls the method with name \u003ccode\u003es\u003c/code\u003e using the arguments \u003ccode\u003ea\u003c/code\u003e\n   on the object \u003ccode\u003eo\u003c/code\u003e. A typical use would look like this:\n\u003c/p\u003e\u003cpre\u003e o # invoke \"foo\" (x, y)\n\u003c/pre\u003e\u003cp\u003eAnother use case is writing Javascript API bindings for common methods:\n\u003c/p\u003e\u003cpre\u003e getElementById :: JSString -\u003e JSObject -\u003e JS t JSObject\n getElementById s = invoke \"getElementById\" s\n\u003c/pre\u003e\u003cp\u003eLike this the flexible type signature gets fixed. See \u003ccode\u003e\u003ca\u003e#\u003c/a\u003e\u003c/code\u003e\n   for how to use these bindings.\n\u003c/p\u003e",
          "module": "[\"Language.Sunroof.Types\",\"Language.Sunroof\"]",
          "name": "invoke",
          "package": "sunroof-compiler",
          "signature": "String -\u003e a -\u003e o -\u003e JS t r",
          "source": "src/Language-Sunroof-Types.html#invoke",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-Types.html#v:invoke\",\"http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof.html#v:invoke\"]"
        },
        "index": {
          "description": "invoke calls the method with name using the arguments on the object typical use would look like this invoke foo Another use case is writing Javascript API bindings for common methods getElementById JSString JSObject JS JSObject getElementById invoke getElementById Like this the flexible type signature gets fixed See for how to use these bindings",
          "hierarchy": "Language Sunroof Types",
          "module": "Language.Sunroof.Types",
          "name": "invoke",
          "normalized": "String-\u003ea-\u003eb-\u003eJS c d",
          "package": "sunroof-compiler",
          "signature": "String-\u003ea-\u003eo-\u003eJS t r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-Types.html#v:invoke"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Sunroof.Types",
          "name": "jsKey",
          "package": "sunroof-compiler",
          "signature": "key -\u003e JSSelector a",
          "source": "src/Language-Sunroof-Types.html#jsKey",
          "type": "method"
        },
        "index": {
          "hierarchy": "Language Sunroof Types",
          "module": "Language.Sunroof.Types",
          "name": "jsKey",
          "normalized": "a-\u003eJSSelector b",
          "package": "sunroof-compiler",
          "partial": "Key",
          "signature": "key-\u003eJSSelector a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-Types.html#v:jsKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ekast\u003c/code\u003e is cast to continuation. \u003ccode\u003ek\u003c/code\u003e is the letter often used to signify a continuation.\n\u003c/p\u003e",
          "module": "Language.Sunroof.Types",
          "name": "kast",
          "package": "sunroof-compiler",
          "signature": "JSFunction a () -\u003e JSContinuation a",
          "source": "src/Language-Sunroof-Types.html#kast",
          "type": "function"
        },
        "index": {
          "description": "kast is cast to continuation is the letter often used to signify continuation",
          "hierarchy": "Language Sunroof Types",
          "module": "Language.Sunroof.Types",
          "name": "kast",
          "normalized": "JSFunction a()-\u003eJSContinuation a",
          "package": "sunroof-compiler",
          "signature": "JSFunction a()-\u003eJSContinuation a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-Types.html#v:kast"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift the atomic computation into another computation.\n\u003c/p\u003e",
          "module": "[\"Language.Sunroof.Types\",\"Language.Sunroof\"]",
          "name": "liftJS",
          "package": "sunroof-compiler",
          "signature": "JS A a -\u003e JS t a",
          "source": "src/Language-Sunroof-Types.html#liftJS",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-Types.html#v:liftJS\",\"http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof.html#v:liftJS\"]"
        },
        "index": {
          "description": "Lift the atomic computation into another computation",
          "hierarchy": "Language Sunroof Types",
          "module": "Language.Sunroof.Types",
          "name": "liftJS",
          "normalized": "JS A a-\u003eJS b a",
          "package": "sunroof-compiler",
          "partial": "JS",
          "signature": "JS A a-\u003eJS t a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-Types.html#v:liftJS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Sunroof.Types",
          "name": "match",
          "package": "sunroof-compiler",
          "signature": "o -\u003e Internals o",
          "source": "src/Language-Sunroof-Types.html#match",
          "type": "method"
        },
        "index": {
          "hierarchy": "Language Sunroof Types",
          "module": "Language.Sunroof.Types",
          "name": "match",
          "normalized": "a-\u003eInternals a",
          "package": "sunroof-compiler",
          "signature": "o-\u003eInternals o",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-Types.html#v:match"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003enew n a\u003c/code\u003e calls the new operator on the constructor \u003ccode\u003en\u003c/code\u003e\n   supplying the argument \u003ccode\u003ea\u003c/code\u003e. A typical use would look like this:\n\u003c/p\u003e\u003cpre\u003e new \"Object\" ()\n\u003c/pre\u003e",
          "module": "[\"Language.Sunroof.Types\",\"Language.Sunroof\"]",
          "name": "new",
          "package": "sunroof-compiler",
          "signature": "String -\u003e a -\u003e JS t JSObject",
          "source": "src/Language-Sunroof-Types.html#new",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-Types.html#v:new\",\"http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof.html#v:new\"]"
        },
        "index": {
          "description": "new calls the new operator on the constructor supplying the argument typical use would look like this new Object",
          "hierarchy": "Language Sunroof Types",
          "module": "Language.Sunroof.Types",
          "name": "new",
          "normalized": "String-\u003ea-\u003eJS b JSObject",
          "package": "sunroof-compiler",
          "signature": "String-\u003ea-\u003eJS t JSObject",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-Types.html#v:new"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003enull\u003c/code\u003e reference in Javascript.\n\u003c/p\u003e",
          "module": "[\"Language.Sunroof.Types\",\"Language.Sunroof\"]",
          "name": "nullJS",
          "package": "sunroof-compiler",
          "signature": "JSObject",
          "source": "src/Language-Sunroof-Types.html#nullJS",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-Types.html#v:nullJS\",\"http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof.html#v:nullJS\"]"
        },
        "index": {
          "description": "The null reference in Javascript",
          "hierarchy": "Language Sunroof Types",
          "module": "Language.Sunroof.Types",
          "name": "nullJS",
          "package": "sunroof-compiler",
          "partial": "JS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-Types.html#v:nullJS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLifts a single primitive Javascript instruction (\u003ccode\u003e\u003ca\u003eJSI\u003c/a\u003e\u003c/code\u003e) into the\n   \u003ccode\u003e\u003ca\u003eJS\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
          "module": "Language.Sunroof.Types",
          "name": "single",
          "package": "sunroof-compiler",
          "signature": "JSI t a -\u003e JS t a",
          "source": "src/Language-Sunroof-Types.html#single",
          "type": "function"
        },
        "index": {
          "description": "Lifts single primitive Javascript instruction JSI into the JS monad",
          "hierarchy": "Language Sunroof Types",
          "module": "Language.Sunroof.Types",
          "name": "single",
          "normalized": "JSI a b-\u003eJS a b",
          "package": "sunroof-compiler",
          "signature": "JSI t a-\u003eJS t a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-Types.html#v:single"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombinator for \u003ccode\u003eswitch\u003c/code\u003e-like statements in Javascript.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNote\u003c/em\u003e: This will not be translated into\n   actual switch statment, because you are aloud arbitrary\n   expressions in the cases.\n\u003c/p\u003e",
          "module": "[\"Language.Sunroof.Types\",\"Language.Sunroof\"]",
          "name": "switch",
          "package": "sunroof-compiler",
          "signature": "a -\u003e [(a, JS t b)] -\u003e JS t b",
          "source": "src/Language-Sunroof-Types.html#switch",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-Types.html#v:switch\",\"http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof.html#v:switch\"]"
        },
        "index": {
          "description": "Combinator for switch like statements in Javascript Note This will not be translated into actual switch statment because you are aloud arbitrary expressions in the cases",
          "hierarchy": "Language Sunroof Types",
          "module": "Language.Sunroof.Types",
          "name": "switch",
          "normalized": "a-\u003e[(a,JS b c)]-\u003eJS b c",
          "package": "sunroof-compiler",
          "signature": "a-\u003e[(a,JS t b)]-\u003eJS t b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-Types.html#v:switch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Sunroof.Types",
          "name": "tuple",
          "package": "sunroof-compiler",
          "signature": "Internals o -\u003e JS t o",
          "source": "src/Language-Sunroof-Types.html#tuple",
          "type": "method"
        },
        "index": {
          "hierarchy": "Language Sunroof Types",
          "module": "Language.Sunroof.Types",
          "name": "tuple",
          "normalized": "Internals a-\u003eJS b a",
          "package": "sunroof-compiler",
          "signature": "Internals o-\u003eJS t o",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-Types.html#v:tuple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnwraps the \u003ccode\u003e\u003ca\u003eJS\u003c/a\u003e\u003c/code\u003e monad into a continuation\n   on \u003ccode\u003e\u003ca\u003eProgram\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.Sunroof.Types",
          "name": "unJS",
          "package": "sunroof-compiler",
          "signature": "JS t a -\u003e (a -\u003e Program (JSI t) ()) -\u003e Program (JSI t) ()",
          "source": "src/Language-Sunroof-Types.html#unJS",
          "type": "function"
        },
        "index": {
          "description": "Unwraps the JS monad into continuation on Program",
          "hierarchy": "Language Sunroof Types",
          "module": "Language.Sunroof.Types",
          "name": "unJS",
          "normalized": "JS a b-\u003e(b-\u003eProgram(JSI a)())-\u003eProgram(JSI a)()",
          "package": "sunroof-compiler",
          "partial": "JS",
          "signature": "JS t a-\u003e(a-\u003eProgram(JSI t)())-\u003eProgram(JSI t)()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-Types.html#v:unJS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSynonym for \u003ccode\u003e\u003ca\u003eevaluate\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Language.Sunroof.Types\",\"Language.Sunroof\"]",
          "name": "value",
          "package": "sunroof-compiler",
          "signature": "a -\u003e JS t a",
          "source": "src/Language-Sunroof-Types.html#value",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-Types.html#v:value\",\"http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof.html#v:value\"]"
        },
        "index": {
          "description": "Synonym for evaluate",
          "hierarchy": "Language Sunroof Types",
          "module": "Language.Sunroof.Types",
          "name": "value",
          "normalized": "a-\u003eJS b a",
          "package": "sunroof-compiler",
          "signature": "a-\u003eJS t a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-Types.html#v:value"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCommon utilities for Sunroof.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.Sunroof.Utils",
          "name": "Utils",
          "package": "sunroof-compiler",
          "source": "src/Language-Sunroof-Utils.html",
          "type": "module"
        },
        "index": {
          "description": "Common utilities for Sunroof",
          "hierarchy": "Language Sunroof Utils",
          "module": "Language.Sunroof.Utils",
          "name": "Utils",
          "package": "sunroof-compiler",
          "partial": "Utils",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-Utils.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a JavaScript comment into the generated source.\n\u003c/p\u003e",
          "module": "[\"Language.Sunroof.Utils\",\"Language.Sunroof\"]",
          "name": "comment",
          "package": "sunroof-compiler",
          "signature": "String -\u003e JS t ()",
          "source": "src/Language-Sunroof-Utils.html#comment",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-Utils.html#v:comment\",\"http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof.html#v:comment\"]"
        },
        "index": {
          "description": "Write JavaScript comment into the generated source",
          "hierarchy": "Language Sunroof Utils",
          "module": "Language.Sunroof.Utils",
          "name": "comment",
          "normalized": "String-\u003eJS a()",
          "package": "sunroof-compiler",
          "signature": "String-\u003eJS t()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-Utils.html#v:comment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ejsfix\u003c/code\u003e is the \u003ccode\u003emfix\u003c/code\u003e for the JS Monad.\n\u003c/p\u003e",
          "module": "[\"Language.Sunroof.Utils\",\"Language.Sunroof\"]",
          "name": "fixJS",
          "package": "sunroof-compiler",
          "signature": "(a -\u003e JSA a) -\u003e JS t a",
          "source": "src/Language-Sunroof-Utils.html#fixJS",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-Utils.html#v:fixJS\",\"http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof.html#v:fixJS\"]"
        },
        "index": {
          "description": "jsfix is the mfix for the JS Monad",
          "hierarchy": "Language Sunroof Utils",
          "module": "Language.Sunroof.Utils",
          "name": "fixJS",
          "normalized": "(a-\u003eJSA a)-\u003eJS b a",
          "package": "sunroof-compiler",
          "partial": "JS",
          "signature": "(a-\u003eJSA a)-\u003eJS t a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof-Utils.html#v:fixJS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSunroof provides a way to express Javascript computations in\n   Haskell. The computations can be expressed using the \u003ccode\u003e\u003ca\u003eJS\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e\u003cp\u003eThere are ready to use API bindings for frequently used\n   Javascript:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eBrowser\u003c/a\u003e\u003c/code\u003e - Bindings of the standard browser APIs.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eCanvas\u003c/a\u003e\u003c/code\u003e - Bindings of the HTML5 canvas element API.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eJQuery\u003c/a\u003e\u003c/code\u003e - Bindings of some JQuery methods.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eDate\u003c/a\u003e\u003c/code\u003e - Bindings of the standard data API.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eIt also provides an abstraction over Javascripts (not existing) threading\n   model. Cooperative multithreading can be emulated using the Sunroof\n   abstractions (\u003ccode\u003e\u003ca\u003eforkJS\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eyield\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eloop\u003c/a\u003e\u003c/code\u003e). Equivalents of well-known\n   Haskell concurrency abstractions like \u003ccode\u003e\u003ca\u003eMVar\u003c/a\u003e\u003c/code\u003e\n   or \u003ccode\u003e\u003ca\u003eChan\u003c/a\u003e\u003c/code\u003e are also provided on Javascript level\n   through \u003ccode\u003e\u003ca\u003eJSMVar\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eJSChan\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eDue to the threading abstraction there are two kinds of computations.\n   They are indicated by the first type parameter of \u003ccode\u003e\u003ca\u003eJS\u003c/a\u003e\u003c/code\u003e (a \u003ccode\u003e\u003ca\u003eT\u003c/a\u003e\u003c/code\u003e value).\n   Normal Javascript computations that can be assumed to terminate and\n   that may deliver a result value are written in the \u003ccode\u003e\u003ca\u003eJSA\u003c/a\u003e\u003c/code\u003e monad. While\n   possibly blocking computations (those that involve threading operations)\n   are written in the \u003ccode\u003e\u003ca\u003eJSB\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e\u003cp\u003eAs the computations are expressed in Haskell, they have a functional\n   nature. It is possible to change the attribute values of objects using\n   \u003ccode\u003e\u003ca\u003e:=\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003e#\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e o # att := val\n\u003c/pre\u003e\u003cp\u003eIf a top-level mutable variable is needed, use the \u003ccode\u003e\u003ca\u003eJSRef\u003c/a\u003e\u003c/code\u003e abstraction.\n   It is comparable to \u003ccode\u003e\u003ca\u003eIORef\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.Sunroof",
          "name": "Sunroof",
          "package": "sunroof-compiler",
          "source": "src/Language-Sunroof.html",
          "type": "module"
        },
        "index": {
          "description": "Sunroof provides way to express Javascript computations in Haskell The computations can be expressed using the JS monad There are ready to use API bindings for frequently used Javascript Browser Bindings of the standard browser APIs Canvas Bindings of the HTML5 canvas element API JQuery Bindings of some JQuery methods Date Bindings of the standard data API It also provides an abstraction over Javascripts not existing threading model Cooperative multithreading can be emulated using the Sunroof abstractions forkJS yield loop Equivalents of well-known Haskell concurrency abstractions like MVar or Chan are also provided on Javascript level through JSMVar and JSChan Due to the threading abstraction there are two kinds of computations They are indicated by the first type parameter of JS value Normal Javascript computations that can be assumed to terminate and that may deliver result value are written in the JSA monad While possibly blocking computations those that involve threading operations are written in the JSB monad As the computations are expressed in Haskell they have functional nature It is possible to change the attribute values of objects using and att val If top-level mutable variable is needed use the JSRef abstraction It is comparable to IORef",
          "hierarchy": "Language Sunroof",
          "module": "Language.Sunroof",
          "name": "Sunroof",
          "package": "sunroof-compiler",
          "partial": "Sunroof",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOptions to setup the compiler.\n\u003c/p\u003e",
          "module": "Language.Sunroof",
          "name": "CompilerOpts",
          "package": "sunroof-compiler",
          "source": "src/Language-Sunroof-Compiler.html#CompilerOpts",
          "type": "data"
        },
        "index": {
          "description": "Options to setup the compiler",
          "hierarchy": "Language Sunroof",
          "module": "Language.Sunroof",
          "name": "CompilerOpts",
          "package": "sunroof-compiler",
          "partial": "Compiler Opts",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof.html#t:CompilerOpts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe monadic type of Javascript computations.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003eJS t a\u003c/code\u003e is a computation using the thread model \u003ccode\u003et\u003c/code\u003e (see \u003ccode\u003e\u003ca\u003eT\u003c/a\u003e\u003c/code\u003e).\n   It returns a result of type \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.Sunroof",
          "name": "JS",
          "package": "sunroof-compiler",
          "source": "src/Language-Sunroof-Types.html#JS",
          "type": "data"
        },
        "index": {
          "description": "The monadic type of Javascript computations JS is computation using the thread model see It returns result of type",
          "hierarchy": "Language Sunroof",
          "module": "Language.Sunroof",
          "name": "JS",
          "package": "sunroof-compiler",
          "partial": "JS",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof.html#t:JS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShort-hand type for atmoic Javascript computations.\n\u003c/p\u003e",
          "module": "Language.Sunroof",
          "name": "JSA",
          "package": "sunroof-compiler",
          "source": "src/Language-Sunroof-Types.html#JSA",
          "type": "type"
        },
        "index": {
          "description": "Short-hand type for atmoic Javascript computations",
          "hierarchy": "Language Sunroof",
          "module": "Language.Sunroof",
          "name": "JSA",
          "package": "sunroof-compiler",
          "partial": "JSA",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof.html#t:JSA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType if arrays in Javascript. The type parameter\n   given the entry type.\n\u003c/p\u003e",
          "module": "Language.Sunroof",
          "name": "JSArray",
          "package": "sunroof-compiler",
          "source": "src/Language-Sunroof-JS-Array.html#JSArray",
          "type": "data"
        },
        "index": {
          "description": "Type if arrays in Javascript The type parameter given the entry type",
          "hierarchy": "Language Sunroof",
          "module": "Language.Sunroof",
          "name": "JSArray",
          "package": "sunroof-compiler",
          "partial": "JSArray",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof.html#t:JSArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShort-hand type for possibly blocking Javascript computations.\n\u003c/p\u003e",
          "module": "Language.Sunroof",
          "name": "JSB",
          "package": "sunroof-compiler",
          "source": "src/Language-Sunroof-Types.html#JSB",
          "type": "type"
        },
        "index": {
          "description": "Short-hand type for possibly blocking Javascript computations",
          "hierarchy": "Language Sunroof",
          "module": "Language.Sunroof",
          "name": "JSB",
          "package": "sunroof-compiler",
          "partial": "JSB",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof.html#t:JSB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBooleans in Javascript.\n\u003c/p\u003e",
          "module": "Language.Sunroof",
          "name": "JSBool",
          "package": "sunroof-compiler",
          "source": "src/Language-Sunroof-JS-Bool.html#JSBool",
          "type": "data"
        },
        "index": {
          "description": "Booleans in Javascript",
          "hierarchy": "Language Sunroof",
          "module": "Language.Sunroof",
          "name": "JSBool",
          "package": "sunroof-compiler",
          "partial": "JSBool",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof.html#t:JSBool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eJSChan\u003c/a\u003e\u003c/code\u003e abstraction. The type parameter gives\n   the type of values held in the channel.\n\u003c/p\u003e",
          "module": "Language.Sunroof",
          "name": "JSChan",
          "package": "sunroof-compiler",
          "source": "src/Language-Sunroof-JS-Chan.html#JSChan",
          "type": "data"
        },
        "index": {
          "description": "JSChan abstraction The type parameter gives the type of values held in the channel",
          "hierarchy": "Language Sunroof",
          "module": "Language.Sunroof",
          "name": "JSChan",
          "package": "sunroof-compiler",
          "partial": "JSChan",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof.html#t:JSChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType of Javascript functions.\n   The first type argument is the type of function argument.\n   This needs to be a instance of \u003ccode\u003e\u003ca\u003eSunroofArgument\u003c/a\u003e\u003c/code\u003e.\n   The second type argument of \u003ccode\u003e\u003ca\u003eJSFunction\u003c/a\u003e\u003c/code\u003e is the function return type.\n   It needs to be a instance of \u003ccode\u003e\u003ca\u003eSunroof\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.Sunroof",
          "name": "JSContinuation",
          "package": "sunroof-compiler",
          "source": "src/Language-Sunroof-Types.html#JSContinuation",
          "type": "data"
        },
        "index": {
          "description": "Type of Javascript functions The first type argument is the type of function argument This needs to be instance of SunroofArgument The second type argument of JSFunction is the function return type It needs to be instance of Sunroof",
          "hierarchy": "Language Sunroof",
          "module": "Language.Sunroof",
          "name": "JSContinuation",
          "package": "sunroof-compiler",
          "partial": "JSContinuation",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof.html#t:JSContinuation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType of Javascript functions.\n   The first type argument is the type of function argument.\n   This needs to be a instance of \u003ccode\u003e\u003ca\u003eSunroofArgument\u003c/a\u003e\u003c/code\u003e.\n   The second type argument of \u003ccode\u003e\u003ca\u003eJSFunction\u003c/a\u003e\u003c/code\u003e is the function return type.\n   It needs to be a instance of \u003ccode\u003e\u003ca\u003eSunroof\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.Sunroof",
          "name": "JSFunction",
          "package": "sunroof-compiler",
          "source": "src/Language-Sunroof-Types.html#JSFunction",
          "type": "data"
        },
        "index": {
          "description": "Type of Javascript functions The first type argument is the type of function argument This needs to be instance of SunroofArgument The second type argument of JSFunction is the function return type It needs to be instance of Sunroof",
          "hierarchy": "Language Sunroof",
          "module": "Language.Sunroof",
          "name": "JSFunction",
          "package": "sunroof-compiler",
          "partial": "JSFunction",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof.html#t:JSFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eJSMVar\u003c/a\u003e\u003c/code\u003e abstraction. The type parameter gives\n   the type of values held in a \u003ccode\u003e\u003ca\u003eJSMVar\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.Sunroof",
          "name": "JSMVar",
          "package": "sunroof-compiler",
          "source": "src/Language-Sunroof-JS-MVar.html#JSMVar",
          "type": "data"
        },
        "index": {
          "description": "JSMVar abstraction The type parameter gives the type of values held in JSMVar",
          "hierarchy": "Language Sunroof",
          "module": "Language.Sunroof",
          "name": "JSMVar",
          "package": "sunroof-compiler",
          "partial": "JSMVar",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof.html#t:JSMVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType of numbers in Javascript.\n\u003c/p\u003e",
          "module": "Language.Sunroof",
          "name": "JSNumber",
          "package": "sunroof-compiler",
          "source": "src/Language-Sunroof-JS-Number.html#JSNumber",
          "type": "data"
        },
        "index": {
          "description": "Type of numbers in Javascript",
          "hierarchy": "Language Sunroof",
          "module": "Language.Sunroof",
          "name": "JSNumber",
          "package": "sunroof-compiler",
          "partial": "JSNumber",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof.html#t:JSNumber"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData type for all Javascript objects.\n\u003c/p\u003e",
          "module": "Language.Sunroof",
          "name": "JSObject",
          "package": "sunroof-compiler",
          "source": "src/Language-Sunroof-JS-Object.html#JSObject",
          "type": "data"
        },
        "index": {
          "description": "Data type for all Javascript objects",
          "hierarchy": "Language Sunroof",
          "module": "Language.Sunroof",
          "name": "JSObject",
          "package": "sunroof-compiler",
          "partial": "JSObject",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof.html#t:JSObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is the \u003ccode\u003eIORef\u003c/code\u003e of Sunroof.\n\u003c/p\u003e",
          "module": "Language.Sunroof",
          "name": "JSRef",
          "package": "sunroof-compiler",
          "source": "src/Language-Sunroof-JS-Ref.html#JSRef",
          "type": "data"
        },
        "index": {
          "description": "This is the IORef of Sunroof",
          "hierarchy": "Language Sunroof",
          "module": "Language.Sunroof",
          "name": "JSRef",
          "package": "sunroof-compiler",
          "partial": "JSRef",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof.html#t:JSRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eJSSelector\u003c/a\u003e\u003c/code\u003e selects a field or attribute from a Javascript object.\n   The phantom type is the type of the selected value. Note the selected \n   field or attributes may also array entries (\u003ccode\u003e\u003ca\u003eindex\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Language.Sunroof",
          "name": "JSSelector",
          "package": "sunroof-compiler",
          "source": "src/Language-Sunroof-Selector.html#JSSelector",
          "type": "data"
        },
        "index": {
          "description": "JSSelector selects field or attribute from Javascript object The phantom type is the type of the selected value Note the selected field or attributes may also array entries index",
          "hierarchy": "Language Sunroof",
          "module": "Language.Sunroof",
          "name": "JSSelector",
          "package": "sunroof-compiler",
          "partial": "JSSelector",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof.html#t:JSSelector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJavascript string type.\n\u003c/p\u003e",
          "module": "Language.Sunroof",
          "name": "JSString",
          "package": "sunroof-compiler",
          "source": "src/Language-Sunroof-JS-String.html#JSString",
          "type": "data"
        },
        "index": {
          "description": "Javascript string type",
          "hierarchy": "Language Sunroof",
          "module": "Language.Sunroof",
          "name": "JSString",
          "package": "sunroof-compiler",
          "partial": "JSString",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof.html#t:JSString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf something is a \u003ccode\u003e\u003ca\u003eJSTuple\u003c/a\u003e\u003c/code\u003e, it can easily be decomposed and\n   recomposed from different components. This is meant as a convenient\n   access to attributes of an object.\n TODO: revisit this\n\u003c/p\u003e",
          "module": "Language.Sunroof",
          "name": "JSTuple",
          "package": "sunroof-compiler",
          "source": "src/Language-Sunroof-Types.html#JSTuple",
          "type": "class"
        },
        "index": {
          "description": "If something is JSTuple it can easily be decomposed and recomposed from different components This is meant as convenient access to attributes of an object TODO revisit this",
          "hierarchy": "Language Sunroof",
          "module": "Language.Sunroof",
          "name": "JSTuple",
          "package": "sunroof-compiler",
          "partial": "JSTuple",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof.html#t:JSTuple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCentral type class of Sunroof. Every type that can be translated\n   into Javascript with Sunroof has to implement this type class.\n\u003c/p\u003e",
          "module": "Language.Sunroof",
          "name": "Sunroof",
          "package": "sunroof-compiler",
          "source": "src/Language-Sunroof-Classes.html#Sunroof",
          "type": "class"
        },
        "index": {
          "description": "Central type class of Sunroof Every type that can be translated into Javascript with Sunroof has to implement this type class",
          "hierarchy": "Language Sunroof",
          "module": "Language.Sunroof",
          "name": "Sunroof",
          "package": "sunroof-compiler",
          "partial": "Sunroof",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof.html#t:Sunroof"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEverything that can be used as argument to a function is Javascript/Sunroof.\n\u003c/p\u003e",
          "module": "Language.Sunroof",
          "name": "SunroofArgument",
          "package": "sunroof-compiler",
          "source": "src/Language-Sunroof-Classes.html#SunroofArgument",
          "type": "class"
        },
        "index": {
          "description": "Everything that can be used as argument to function is Javascript Sunroof",
          "hierarchy": "Language Sunroof",
          "module": "Language.Sunroof",
          "name": "SunroofArgument",
          "package": "sunroof-compiler",
          "partial": "Sunroof Argument",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof.html#t:SunroofArgument"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEverything that can be used as an key in a dictionary lookup.\n\u003c/p\u003e",
          "module": "Language.Sunroof",
          "name": "SunroofKey",
          "package": "sunroof-compiler",
          "source": "src/Language-Sunroof-Types.html#SunroofKey",
          "type": "class"
        },
        "index": {
          "description": "Everything that can be used as an key in dictionary lookup",
          "hierarchy": "Language Sunroof",
          "module": "Language.Sunroof",
          "name": "SunroofKey",
          "package": "sunroof-compiler",
          "partial": "Sunroof Key",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof.html#t:SunroofKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhen implemented the type supports determining the threading model\n   during runtime.\n\u003c/p\u003e",
          "module": "Language.Sunroof",
          "name": "SunroofThread",
          "package": "sunroof-compiler",
          "source": "src/Language-Sunroof-Types.html#SunroofThread",
          "type": "class"
        },
        "index": {
          "description": "When implemented the type supports determining the threading model during runtime",
          "hierarchy": "Language Sunroof",
          "module": "Language.Sunroof",
          "name": "SunroofThread",
          "package": "sunroof-compiler",
          "partial": "Sunroof Thread",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof.html#t:SunroofThread"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll Haskell values that have a Sunroof representation\n   implement this class.\n\u003c/p\u003e",
          "module": "Language.Sunroof",
          "name": "SunroofValue",
          "package": "sunroof-compiler",
          "source": "src/Language-Sunroof-Classes.html#SunroofValue",
          "type": "class"
        },
        "index": {
          "description": "All Haskell values that have Sunroof representation implement this class",
          "hierarchy": "Language Sunroof",
          "module": "Language.Sunroof",
          "name": "SunroofValue",
          "package": "sunroof-compiler",
          "partial": "Sunroof Value",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof.html#t:SunroofValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe possible threading models for Javascript computations.\n\u003c/p\u003e",
          "module": "Language.Sunroof",
          "name": "T",
          "package": "sunroof-compiler",
          "source": "src/Language-Sunroof-Types.html#T",
          "type": "data"
        },
        "index": {
          "description": "The possible threading models for Javascript computations",
          "hierarchy": "Language Sunroof",
          "module": "Language.Sunroof",
          "name": "T",
          "package": "sunroof-compiler",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof.html#t:T"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA proxy to capture the type of threading model used.\n   See \u003ccode\u003e\u003ca\u003eSunroofThread\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.Sunroof",
          "name": "ThreadProxy",
          "package": "sunroof-compiler",
          "source": "src/Language-Sunroof-Types.html#ThreadProxy",
          "type": "data"
        },
        "index": {
          "description": "proxy to capture the type of threading model used See SunroofThread",
          "hierarchy": "Language Sunroof",
          "module": "Language.Sunroof",
          "name": "ThreadProxy",
          "package": "sunroof-compiler",
          "partial": "Thread Proxy",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof.html#t:ThreadProxy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAbstract types for Javascript expressions in Sunroof.\n\u003c/p\u003e",
          "module": "Language.Sunroof",
          "name": "Type",
          "package": "sunroof-compiler",
          "source": "src/Language-Sunroof-JavaScript.html#Type",
          "type": "data"
        },
        "index": {
          "description": "Abstract types for Javascript expressions in Sunroof",
          "hierarchy": "Language Sunroof",
          "module": "Language.Sunroof",
          "name": "Type",
          "package": "sunroof-compiler",
          "partial": "Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof.html#t:Type"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a possibly blocking computation from the given one.\n\u003c/p\u003e",
          "module": "Language.Sunroof",
          "name": "blockableJS",
          "package": "sunroof-compiler",
          "signature": "JS t a -\u003e JS B a",
          "source": "src/Language-Sunroof-Types.html#blockableJS",
          "type": "method"
        },
        "index": {
          "description": "Create possibly blocking computation from the given one",
          "hierarchy": "Language Sunroof",
          "module": "Language.Sunroof",
          "name": "blockableJS",
          "normalized": "JS a b-\u003eJS B b",
          "package": "sunroof-compiler",
          "partial": "JS",
          "signature": "JS t a-\u003eJS B a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof.html#v:blockableJS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a Sunroof value from a plain Javascript expression.\n\u003c/p\u003e",
          "module": "Language.Sunroof",
          "name": "box",
          "package": "sunroof-compiler",
          "signature": "Expr -\u003e a",
          "source": "src/Language-Sunroof-Classes.html#box",
          "type": "method"
        },
        "index": {
          "description": "Create Sunroof value from plain Javascript expression",
          "hierarchy": "Language Sunroof",
          "module": "Language.Sunroof",
          "name": "box",
          "normalized": "Expr-\u003ea",
          "package": "sunroof-compiler",
          "signature": "Expr-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof.html#v:box"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermine the used threading model captured the given \u003ccode\u003e\u003ca\u003eThreadProxy\u003c/a\u003e\u003c/code\u003e\n   object.\n\u003c/p\u003e",
          "module": "Language.Sunroof",
          "name": "evalStyle",
          "package": "sunroof-compiler",
          "signature": "ThreadProxy t -\u003e T",
          "source": "src/Language-Sunroof-Types.html#evalStyle",
          "type": "method"
        },
        "index": {
          "description": "Determine the used threading model captured the given ThreadProxy object",
          "hierarchy": "Language Sunroof",
          "module": "Language.Sunroof",
          "name": "evalStyle",
          "normalized": "ThreadProxy a-\u003eT",
          "package": "sunroof-compiler",
          "partial": "Style",
          "signature": "ThreadProxy t-\u003eT",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof.html#v:evalStyle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert the Haskell value to its Sunroof equivalent.\n\u003c/p\u003e",
          "module": "Language.Sunroof",
          "name": "js",
          "package": "sunroof-compiler",
          "signature": "a -\u003e ValueOf a",
          "source": "src/Language-Sunroof-Classes.html#js",
          "type": "method"
        },
        "index": {
          "description": "Convert the Haskell value to its Sunroof equivalent",
          "hierarchy": "Language Sunroof",
          "module": "Language.Sunroof",
          "name": "js",
          "normalized": "a-\u003eValueOf a",
          "package": "sunroof-compiler",
          "signature": "a-\u003eValueOf a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof.html#v:js"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTurn the argument into a list of expressions.\n\u003c/p\u003e",
          "module": "Language.Sunroof",
          "name": "jsArgs",
          "package": "sunroof-compiler",
          "signature": "args -\u003e [Expr]",
          "source": "src/Language-Sunroof-Classes.html#jsArgs",
          "type": "method"
        },
        "index": {
          "description": "Turn the argument into list of expressions",
          "hierarchy": "Language Sunroof",
          "module": "Language.Sunroof",
          "name": "jsArgs",
          "normalized": "a-\u003e[Expr]",
          "package": "sunroof-compiler",
          "partial": "Args",
          "signature": "args-\u003e[Expr]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof.html#v:jsArgs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Sunroof",
          "name": "jsKey",
          "package": "sunroof-compiler",
          "signature": "key -\u003e JSSelector a",
          "source": "src/Language-Sunroof-Types.html#jsKey",
          "type": "method"
        },
        "index": {
          "hierarchy": "Language Sunroof",
          "module": "Language.Sunroof",
          "name": "jsKey",
          "normalized": "a-\u003eJSSelector b",
          "package": "sunroof-compiler",
          "partial": "Key",
          "signature": "key-\u003eJSSelector a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof.html#v:jsKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a list of fresh variables for the arguments.\n\u003c/p\u003e",
          "module": "Language.Sunroof",
          "name": "jsValue",
          "package": "sunroof-compiler",
          "signature": "m args",
          "source": "src/Language-Sunroof-Classes.html#jsValue",
          "type": "method"
        },
        "index": {
          "description": "Create list of fresh variables for the arguments",
          "hierarchy": "Language Sunroof",
          "module": "Language.Sunroof",
          "name": "jsValue",
          "package": "sunroof-compiler",
          "partial": "Value",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof.html#v:jsValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Sunroof",
          "name": "match",
          "package": "sunroof-compiler",
          "signature": "o -\u003e Internals o",
          "source": "src/Language-Sunroof-Types.html#match",
          "type": "method"
        },
        "index": {
          "hierarchy": "Language Sunroof",
          "module": "Language.Sunroof",
          "name": "match",
          "normalized": "a-\u003eInternals a",
          "package": "sunroof-compiler",
          "signature": "o-\u003eInternals o",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof.html#v:match"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Sunroof",
          "name": "tuple",
          "package": "sunroof-compiler",
          "signature": "Internals o -\u003e JS t o",
          "source": "src/Language-Sunroof-Types.html#tuple",
          "type": "method"
        },
        "index": {
          "hierarchy": "Language Sunroof",
          "module": "Language.Sunroof",
          "name": "tuple",
          "normalized": "Internals a-\u003eJS b a",
          "package": "sunroof-compiler",
          "signature": "Internals o-\u003eJS t o",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof.html#v:tuple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the type of Javascript expression this Sunroof value\n   represents. The default implementation returns \u003ccode\u003e\u003ca\u003eBase\u003c/a\u003e\u003c/code\u003e as type.\n\u003c/p\u003e",
          "module": "Language.Sunroof",
          "name": "typeOf",
          "package": "sunroof-compiler",
          "signature": "Proxy a -\u003e Type",
          "source": "src/Language-Sunroof-Classes.html#typeOf",
          "type": "method"
        },
        "index": {
          "description": "Returns the type of Javascript expression this Sunroof value represents The default implementation returns Base as type",
          "hierarchy": "Language Sunroof",
          "module": "Language.Sunroof",
          "name": "typeOf",
          "normalized": "Proxy a-\u003eType",
          "package": "sunroof-compiler",
          "partial": "Of",
          "signature": "Proxy a-\u003eType",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof.html#v:typeOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the type of the argument values.\n\u003c/p\u003e",
          "module": "Language.Sunroof",
          "name": "typesOf",
          "package": "sunroof-compiler",
          "signature": "Proxy args -\u003e [Type]",
          "source": "src/Language-Sunroof-Classes.html#typesOf",
          "type": "method"
        },
        "index": {
          "description": "Get the type of the argument values",
          "hierarchy": "Language Sunroof",
          "module": "Language.Sunroof",
          "name": "typesOf",
          "normalized": "Proxy a-\u003e[Type]",
          "package": "sunroof-compiler",
          "partial": "Of",
          "signature": "Proxy args-\u003e[Type]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof.html#v:typesOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReveal the plain Javascript expression that represents this Sunroof value.\n\u003c/p\u003e",
          "module": "Language.Sunroof",
          "name": "unbox",
          "package": "sunroof-compiler",
          "signature": "a -\u003e Expr",
          "source": "src/Language-Sunroof-Classes.html#unbox",
          "type": "method"
        },
        "index": {
          "description": "Reveal the plain Javascript expression that represents this Sunroof value",
          "hierarchy": "Language Sunroof",
          "module": "Language.Sunroof",
          "name": "unbox",
          "normalized": "a-\u003eExpr",
          "package": "sunroof-compiler",
          "signature": "a-\u003eExpr",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sunroof-compiler/docs/Language-Sunroof.html#v:unbox"
      }
    }
  ]
]