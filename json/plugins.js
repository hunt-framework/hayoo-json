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
        "word": "plugins"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eEvaluate Haskell at runtime, using runtime compilation and dynamic\n loading. Arguments are compiled to native code, and dynamically\n loaded, returning a Haskell value representing the compiled argument.\n The underlying implementation treats \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e arguments as the source\n for plugins to be compiled at runtime.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Eval.Haskell",
          "name": "Haskell",
          "package": "plugins",
          "source": "src/System-Eval-Haskell.html",
          "type": "module"
        },
        "index": {
          "description": "Evaluate Haskell at runtime using runtime compilation and dynamic loading Arguments are compiled to native code and dynamically loaded returning Haskell value representing the compiled argument The underlying implementation treats String arguments as the source for plugins to be compiled at runtime",
          "hierarchy": "System Eval Haskell",
          "module": "System.Eval.Haskell",
          "name": "Haskell",
          "package": "plugins",
          "partial": "Haskell",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/plugins/docs/System-Eval-Haskell.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eeval\u003c/a\u003e\u003c/code\u003e provides a typesafe (to a limit) form of runtime evaluation\n for Haskell -- a limited form of \u003cem\u003eruntime metaprogramming\u003c/em\u003e. The\n \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e argument to \u003ccode\u003e\u003ca\u003eeval\u003c/a\u003e\u003c/code\u003e is a Haskell source fragment to evaluate\n at rutime. \u003ccode\u003eimps\u003c/code\u003e are a list of module names to use in the context of\n the compiled value.\n\u003c/p\u003e\u003cp\u003eThe value returned by \u003ccode\u003e\u003ca\u003eeval\u003c/a\u003e\u003c/code\u003e is constrained to be \u003ccode\u003e\u003ca\u003eTypeable\u003c/a\u003e\u003c/code\u003e --\n meaning we can perform a \u003cem\u003elimited\u003c/em\u003e runtime typecheck, using the\n \u003ccode\u003e\u003ca\u003edynload\u003c/a\u003e\u003c/code\u003e function. One consequence of this is that the code must\n evaluate to a monomorphic value (which will be wrapped in a\n \u003ccode\u003e\u003ca\u003eDynamic\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e\u003cp\u003eIf the evaluated code typechecks under the \u003ccode\u003e\u003ca\u003eTypeable\u003c/a\u003e\u003c/code\u003e constraints,\n 'Just v' is returned. \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e indicates typechecking failed.\n Typechecking may fail at two places: when compiling the argument, or\n when typechecking the splice point. \u003ccode\u003e\u003ca\u003eeval\u003c/a\u003e\u003c/code\u003e resembles a\n metaprogramming \u003ccode\u003erun\u003c/code\u003e operator for \u003cem\u003eclosed\u003c/em\u003e source fragments.\n\u003c/p\u003e\u003cp\u003eTo evaluate polymorphic values you need to wrap them in data\n structures using rank-N types.\n\u003c/p\u003e\u003cp\u003eExamples:\n\u003c/p\u003e\u003cpre\u003e do i \u003c- eval \"1 + 6 :: Int\" [] :: IO (Maybe Int)\n    when (isJust i) $ putStrLn (show (fromJust i))\n\u003c/pre\u003e",
          "module": "System.Eval.Haskell",
          "name": "eval",
          "package": "plugins",
          "signature": "String -\u003e [Import] -\u003e IO (Maybe a)",
          "source": "src/System-Eval-Haskell.html#eval",
          "type": "function"
        },
        "index": {
          "description": "eval provides typesafe to limit form of runtime evaluation for Haskell limited form of runtime metaprogramming The String argument to eval is Haskell source fragment to evaluate at rutime imps are list of module names to use in the context of the compiled value The value returned by eval is constrained to be Typeable meaning we can perform limited runtime typecheck using the dynload function One consequence of this is that the code must evaluate to monomorphic value which will be wrapped in Dynamic If the evaluated code typechecks under the Typeable constraints Just is returned Nothing indicates typechecking failed Typechecking may fail at two places when compiling the argument or when typechecking the splice point eval resembles metaprogramming run operator for closed source fragments To evaluate polymorphic values you need to wrap them in data structures using rank-N types Examples do eval Int IO Maybe Int when isJust putStrLn show fromJust",
          "hierarchy": "System Eval Haskell",
          "module": "System.Eval.Haskell",
          "name": "eval",
          "normalized": "String-\u003e[Import]-\u003eIO(Maybe a)",
          "package": "plugins",
          "signature": "String-\u003e[Import]-\u003eIO(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plugins/docs/System-Eval-Haskell.html#v:eval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eeval_\u003c/a\u003e\u003c/code\u003e is a variety of \u003ccode\u003e\u003ca\u003eeval\u003c/a\u003e\u003c/code\u003e with all the internal hooks\n available. You are able to set any extra arguments to the compiler\n (for example, optimisation flags) or dynamic loader, as well as\n having any errors returned in an \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e type.\n\u003c/p\u003e",
          "module": "System.Eval.Haskell",
          "name": "eval_",
          "package": "plugins",
          "signature": "String-\u003e [Import]-\u003e [String]-\u003e [FilePath]-\u003e [FilePath]-\u003e IO (Either [String] (Maybe a))",
          "type": "function"
        },
        "index": {
          "description": "eval is variety of eval with all the internal hooks available You are able to set any extra arguments to the compiler for example optimisation flags or dynamic loader as well as having any errors returned in an Either type",
          "hierarchy": "System Eval Haskell",
          "module": "System.Eval.Haskell",
          "name": "eval_",
          "normalized": "String-\u003e[Import]-\u003e[String]-\u003e[FilePath]-\u003e[FilePath]-\u003eIO(Either[String](Maybe a))",
          "package": "plugins",
          "signature": "String-\u003e[Import]-\u003e[String]-\u003e[FilePath]-\u003e[FilePath]-\u003eIO(Either[String](Maybe a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plugins/docs/System-Eval-Haskell.html#v:eval_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003emkHsValues\u003c/a\u003e\u003c/code\u003e is a helper function for converting \u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003es\n of names and values into Haskell code. It relies on the assumption of\n names and values into Haskell code. It relies on the assumption that\n the passed values' Show instances produce valid Haskell literals\n (this is true for all Prelude types).\n\u003c/p\u003e",
          "module": "System.Eval.Haskell",
          "name": "mkHsValues",
          "package": "plugins",
          "signature": "Map String a -\u003e String",
          "source": "src/System-Eval-Haskell.html#mkHsValues",
          "type": "function"
        },
        "index": {
          "description": "mkHsValues is helper function for converting Map of names and values into Haskell code It relies on the assumption of names and values into Haskell code It relies on the assumption that the passed values Show instances produce valid Haskell literals this is true for all Prelude types",
          "hierarchy": "System Eval Haskell",
          "module": "System.Eval.Haskell",
          "name": "mkHsValues",
          "normalized": "Map String a-\u003eString",
          "package": "plugins",
          "partial": "Hs Values",
          "signature": "Map String a-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plugins/docs/System-Eval-Haskell.html#v:mkHsValues"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn a compiled value's type, by using Dynamic to get a\n representation of the inferred type.\n\u003c/p\u003e",
          "module": "System.Eval.Haskell",
          "name": "typeOf",
          "package": "plugins",
          "signature": "String -\u003e [Import] -\u003e IO String",
          "source": "src/System-Eval-Haskell.html#typeOf",
          "type": "function"
        },
        "index": {
          "description": "Return compiled value type by using Dynamic to get representation of the inferred type",
          "hierarchy": "System Eval Haskell",
          "module": "System.Eval.Haskell",
          "name": "typeOf",
          "normalized": "String-\u003e[Import]-\u003eIO String",
          "package": "plugins",
          "partial": "Of",
          "signature": "String-\u003e[Import]-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plugins/docs/System-Eval-Haskell.html#v:typeOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSometimes when constructing string fragments to evaluate, the\n programmer is able to provide some other constraint on the evaluated\n string, such that the evaluated expression will be typesafe, without\n requiring a \u003ccode\u003e\u003ca\u003eTypeable\u003c/a\u003e\u003c/code\u003e constraint. In such cases, the monomorphic\n restriction is annoying. \u003ccode\u003e\u003ca\u003eunsafeEval\u003c/a\u003e\u003c/code\u003e removes any splice-point\n typecheck, with an accompanying obligation on the programmer to\n ensure that the fragment evaluated will be typesafe at the point it\n is spliced.\n\u003c/p\u003e\u003cp\u003eAn example of how to do this would be to wrap the fragment in a call\n to \u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e. The augmented fragment would then be checked when compiled\n to return a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e, and the programmer can rely on this, without\n requiring a splice-point typecheck, and thus no \u003ccode\u003e\u003ca\u003eTypeable\u003c/a\u003e\u003c/code\u003e\n restriction.\n\u003c/p\u003e\u003cp\u003eNote that if you get the proof wrong, your program will likely\n segfault.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e do s \u003c- unsafeEval \"map toUpper \\\"haskell\\\"\" [\"Data.Char\"]\n    when (isJust s) $ putStrLn (fromJust s)\n\u003c/pre\u003e",
          "module": "System.Eval.Haskell",
          "name": "unsafeEval",
          "package": "plugins",
          "signature": "String -\u003e [Import] -\u003e IO (Maybe a)",
          "source": "src/System-Eval-Haskell.html#unsafeEval",
          "type": "function"
        },
        "index": {
          "description": "Sometimes when constructing string fragments to evaluate the programmer is able to provide some other constraint on the evaluated string such that the evaluated expression will be typesafe without requiring Typeable constraint In such cases the monomorphic restriction is annoying unsafeEval removes any splice-point typecheck with an accompanying obligation on the programmer to ensure that the fragment evaluated will be typesafe at the point it is spliced An example of how to do this would be to wrap the fragment in call to show The augmented fragment would then be checked when compiled to return String and the programmer can rely on this without requiring splice-point typecheck and thus no Typeable restriction Note that if you get the proof wrong your program will likely segfault Example do unsafeEval map toUpper haskell Data.Char when isJust putStrLn fromJust",
          "hierarchy": "System Eval Haskell",
          "module": "System.Eval.Haskell",
          "name": "unsafeEval",
          "normalized": "String-\u003e[Import]-\u003eIO(Maybe a)",
          "package": "plugins",
          "partial": "Eval",
          "signature": "String-\u003e[Import]-\u003eIO(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plugins/docs/System-Eval-Haskell.html#v:unsafeEval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eunsafeEval_\u003c/a\u003e\u003c/code\u003e is a form of \u003ccode\u003e\u003ca\u003eunsafeEval\u003c/a\u003e\u003c/code\u003e with all internal hooks\n exposed. This is useful for application wishing to return error\n messages to users, to specify particular libraries to link against\n and so on.\n\u003c/p\u003e",
          "module": "System.Eval.Haskell",
          "name": "unsafeEval_",
          "package": "plugins",
          "signature": "String-\u003e [Import]-\u003e [String]-\u003e [FilePath]-\u003e [FilePath]-\u003e IO (Either [String] a)",
          "type": "function"
        },
        "index": {
          "description": "unsafeEval is form of unsafeEval with all internal hooks exposed This is useful for application wishing to return error messages to users to specify particular libraries to link against and so on",
          "hierarchy": "System Eval Haskell",
          "module": "System.Eval.Haskell",
          "name": "unsafeEval_",
          "normalized": "String-\u003e[Import]-\u003e[String]-\u003e[FilePath]-\u003e[FilePath]-\u003eIO(Either[String]a)",
          "package": "plugins",
          "partial": "Eval",
          "signature": "String-\u003e[Import]-\u003e[String]-\u003e[FilePath]-\u003e[FilePath]-\u003eIO(Either[String]a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plugins/docs/System-Eval-Haskell.html#v:unsafeEval_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Eval.Utils",
          "name": "Utils",
          "package": "plugins",
          "source": "src/System-Eval-Utils.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "System Eval Utils",
          "module": "System.Eval.Utils",
          "name": "Utils",
          "package": "plugins",
          "partial": "Utils",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/plugins/docs/System-Eval-Utils.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Eval.Utils",
          "name": "Import",
          "package": "plugins",
          "source": "src/System-Eval-Utils.html#Import",
          "type": "type"
        },
        "index": {
          "hierarchy": "System Eval Utils",
          "module": "System.Eval.Utils",
          "name": "Import",
          "package": "plugins",
          "partial": "Import",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/plugins/docs/System-Eval-Utils.html#t:Import"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Eval.Utils",
          "name": "cleanup",
          "package": "plugins",
          "signature": "String -\u003e String -\u003e IO ()",
          "source": "src/System-Eval-Utils.html#cleanup",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Eval Utils",
          "module": "System.Eval.Utils",
          "name": "cleanup",
          "normalized": "String-\u003eString-\u003eIO()",
          "package": "plugins",
          "signature": "String-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plugins/docs/System-Eval-Utils.html#v:cleanup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Eval.Utils",
          "name": "escape",
          "package": "plugins",
          "signature": "[Char] -\u003e [Char]",
          "source": "src/System-Eval-Utils.html#escape",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Eval Utils",
          "module": "System.Eval.Utils",
          "name": "escape",
          "normalized": "[Char]-\u003e[Char]",
          "package": "plugins",
          "signature": "[Char]-\u003e[Char]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plugins/docs/System-Eval-Utils.html#v:escape"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Eval.Utils",
          "name": "getPaths",
          "package": "plugins",
          "signature": "IO ([String], [String])",
          "source": "src/System-Eval-Utils.html#getPaths",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Eval Utils",
          "module": "System.Eval.Utils",
          "name": "getPaths",
          "normalized": "IO([String],[String])",
          "package": "plugins",
          "partial": "Paths",
          "signature": "IO([String],[String])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plugins/docs/System-Eval-Utils.html#v:getPaths"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Eval.Utils",
          "name": "mkUniqueWith",
          "package": "plugins",
          "signature": "(String -\u003e String -\u003e [Import] -\u003e String) -\u003e String -\u003e [Import] -\u003e IO FilePath",
          "source": "src/System-Eval-Utils.html#mkUniqueWith",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Eval Utils",
          "module": "System.Eval.Utils",
          "name": "mkUniqueWith",
          "normalized": "(String-\u003eString-\u003e[Import]-\u003eString)-\u003eString-\u003e[Import]-\u003eIO FilePath",
          "package": "plugins",
          "partial": "Unique With",
          "signature": "(String-\u003eString-\u003e[Import]-\u003eString)-\u003eString-\u003e[Import]-\u003eIO FilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plugins/docs/System-Eval-Utils.html#v:mkUniqueWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Eval.Utils",
          "name": "symbol",
          "package": "plugins",
          "signature": "Symbol",
          "source": "src/System-Eval-Utils.html#symbol",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Eval Utils",
          "module": "System.Eval.Utils",
          "name": "symbol",
          "package": "plugins",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plugins/docs/System-Eval-Utils.html#v:symbol"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Eval",
          "name": "Eval",
          "package": "plugins",
          "source": "src/System-Eval.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "System Eval",
          "module": "System.Eval",
          "name": "Eval",
          "package": "plugins",
          "partial": "Eval",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/plugins/docs/System-Eval.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Plugins.Consts",
          "name": "Consts",
          "package": "plugins",
          "source": "src/System-Plugins-Consts.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "System Plugins Consts",
          "module": "System.Plugins.Consts",
          "name": "Consts",
          "package": "plugins",
          "partial": "Consts",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/plugins/docs/System-Plugins-Consts.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Plugins.Consts",
          "name": "dllSuf",
          "package": "plugins",
          "signature": "[Char]",
          "source": "src/System-Plugins-Consts.html#dllSuf",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Plugins Consts",
          "module": "System.Plugins.Consts",
          "name": "dllSuf",
          "normalized": "[Char]",
          "package": "plugins",
          "partial": "Suf",
          "signature": "[Char]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plugins/docs/System-Plugins-Consts.html#v:dllSuf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ewhat is ghc called?\n\u003c/p\u003e",
          "module": "System.Plugins.Consts",
          "name": "ghc",
          "package": "plugins",
          "signature": "[Char]",
          "source": "src/System-Plugins-Consts.html#ghc",
          "type": "function"
        },
        "index": {
          "description": "what is ghc called",
          "hierarchy": "System Plugins Consts",
          "module": "System.Plugins.Consts",
          "name": "ghc",
          "normalized": "[Char]",
          "package": "plugins",
          "signature": "[Char]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plugins/docs/System-Plugins-Consts.html#v:ghc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003epath to standard ghc libraries\n\u003c/p\u003e",
          "module": "System.Plugins.Consts",
          "name": "ghcLibraryPath",
          "package": "plugins",
          "signature": "[Char]",
          "source": "src/System-Plugins-Consts.html#ghcLibraryPath",
          "type": "function"
        },
        "index": {
          "description": "path to standard ghc libraries",
          "hierarchy": "System Plugins Consts",
          "module": "System.Plugins.Consts",
          "name": "ghcLibraryPath",
          "normalized": "[Char]",
          "package": "plugins",
          "partial": "Library Path",
          "signature": "[Char]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plugins/docs/System-Plugins-Consts.html#v:ghcLibraryPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Plugins.Consts",
          "name": "hiSuf",
          "package": "plugins",
          "signature": "[Char]",
          "source": "src/System-Plugins-Consts.html#hiSuf",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Plugins Consts",
          "module": "System.Plugins.Consts",
          "name": "hiSuf",
          "normalized": "[Char]",
          "package": "plugins",
          "partial": "Suf",
          "signature": "[Char]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plugins/docs/System-Plugins-Consts.html#v:hiSuf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Plugins.Consts",
          "name": "hsSuf",
          "package": "plugins",
          "signature": "[Char]",
          "source": "src/System-Plugins-Consts.html#hsSuf",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Plugins Consts",
          "module": "System.Plugins.Consts",
          "name": "hsSuf",
          "normalized": "[Char]",
          "package": "plugins",
          "partial": "Suf",
          "signature": "[Char]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plugins/docs/System-Plugins-Consts.html#v:hsSuf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Plugins.Consts",
          "name": "objSuf",
          "package": "plugins",
          "signature": "[Char]",
          "source": "src/System-Plugins-Consts.html#objSuf",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Plugins Consts",
          "module": "System.Plugins.Consts",
          "name": "objSuf",
          "normalized": "[Char]",
          "package": "plugins",
          "partial": "Suf",
          "signature": "[Char]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plugins/docs/System-Plugins-Consts.html#v:objSuf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e'_' on a.out, and Darwin\n\u003c/p\u003e",
          "module": "System.Plugins.Consts",
          "name": "prefixUnderscore",
          "package": "plugins",
          "signature": "[Char]",
          "source": "src/System-Plugins-Consts.html#prefixUnderscore",
          "type": "function"
        },
        "index": {
          "description": "on a.out and Darwin",
          "hierarchy": "System Plugins Consts",
          "module": "System.Plugins.Consts",
          "name": "prefixUnderscore",
          "normalized": "[Char]",
          "package": "plugins",
          "partial": "Underscore",
          "signature": "[Char]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plugins/docs/System-Plugins-Consts.html#v:prefixUnderscore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ename of the system package.conf file\n\u003c/p\u003e",
          "module": "System.Plugins.Consts",
          "name": "sysPkgConf",
          "package": "plugins",
          "signature": "[Char]",
          "source": "src/System-Plugins-Consts.html#sysPkgConf",
          "type": "function"
        },
        "index": {
          "description": "name of the system package.conf file",
          "hierarchy": "System Plugins Consts",
          "module": "System.Plugins.Consts",
          "name": "sysPkgConf",
          "normalized": "[Char]",
          "package": "plugins",
          "partial": "Pkg Conf",
          "signature": "[Char]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plugins/docs/System-Plugins-Consts.html#v:sysPkgConf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe prefix used by system modules.  This, in conjunction with\n  \u003ccode\u003esystemModuleExtension\u003c/code\u003e, will result in a module filename that looks\n like \"HSconcurrent.o\"\n\u003c/p\u003e",
          "module": "System.Plugins.Consts",
          "name": "sysPkgPrefix",
          "package": "plugins",
          "signature": "[Char]",
          "source": "src/System-Plugins-Consts.html#sysPkgPrefix",
          "type": "function"
        },
        "index": {
          "description": "The prefix used by system modules This in conjunction with systemModuleExtension will result in module filename that looks like HSconcurrent.o",
          "hierarchy": "System Plugins Consts",
          "module": "System.Plugins.Consts",
          "name": "sysPkgPrefix",
          "normalized": "[Char]",
          "package": "plugins",
          "partial": "Pkg Prefix",
          "signature": "[Char]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plugins/docs/System-Plugins-Consts.html#v:sysPkgPrefix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis code is from runtime_loader:\n   The extension used by system modules.\n\u003c/p\u003e",
          "module": "System.Plugins.Consts",
          "name": "sysPkgSuffix",
          "package": "plugins",
          "signature": "[Char]",
          "source": "src/System-Plugins-Consts.html#sysPkgSuffix",
          "type": "function"
        },
        "index": {
          "description": "This code is from runtime loader The extension used by system modules",
          "hierarchy": "System Plugins Consts",
          "module": "System.Plugins.Consts",
          "name": "sysPkgSuffix",
          "normalized": "[Char]",
          "package": "plugins",
          "partial": "Pkg Suffix",
          "signature": "[Char]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plugins/docs/System-Plugins-Consts.html#v:sysPkgSuffix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefine tmpDir to where tmp files should be created on your platform\n\u003c/p\u003e",
          "module": "System.Plugins.Consts",
          "name": "tmpDir",
          "package": "plugins",
          "signature": "FilePath",
          "source": "src/System-Plugins-Consts.html#tmpDir",
          "type": "function"
        },
        "index": {
          "description": "Define tmpDir to where tmp files should be created on your platform",
          "hierarchy": "System Plugins Consts",
          "module": "System.Plugins.Consts",
          "name": "tmpDir",
          "package": "plugins",
          "partial": "Dir",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plugins/docs/System-Plugins-Consts.html#v:tmpDir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003epath to *build* dir, used by eval() for testing the examples\n\u003c/p\u003e",
          "module": "System.Plugins.Consts",
          "name": "top",
          "package": "plugins",
          "signature": "[Char]",
          "source": "src/System-Plugins-Consts.html#top",
          "type": "function"
        },
        "index": {
          "description": "path to build dir used by eval for testing the examples",
          "hierarchy": "System Plugins Consts",
          "module": "System.Plugins.Consts",
          "name": "top",
          "normalized": "[Char]",
          "package": "plugins",
          "signature": "[Char]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plugins/docs/System-Plugins-Consts.html#v:top"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Plugins.Env",
          "name": "Env",
          "package": "plugins",
          "source": "src/System-Plugins-Env.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "System Plugins Env",
          "module": "System.Plugins.Env",
          "name": "Env",
          "package": "plugins",
          "partial": "Env",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/plugins/docs/System-Plugins-Env.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Plugins.Env",
          "name": "addMerge",
          "package": "plugins",
          "signature": "FilePath -\u003e FilePath -\u003e FilePath -\u003e IO ()",
          "source": "src/System-Plugins-Env.html#addMerge",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Plugins Env",
          "module": "System.Plugins.Env",
          "name": "addMerge",
          "normalized": "FilePath-\u003eFilePath-\u003eFilePath-\u003eIO()",
          "package": "plugins",
          "partial": "Merge",
          "signature": "FilePath-\u003eFilePath-\u003eFilePath-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plugins/docs/System-Plugins-Env.html#v:addMerge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003einsert a loaded module name into the environment\n\u003c/p\u003e",
          "module": "System.Plugins.Env",
          "name": "addModule",
          "package": "plugins",
          "signature": "String -\u003e Module -\u003e IO ()",
          "source": "src/System-Plugins-Env.html#addModule",
          "type": "function"
        },
        "index": {
          "description": "insert loaded module name into the environment",
          "hierarchy": "System Plugins Env",
          "module": "System.Plugins.Env",
          "name": "addModule",
          "normalized": "String-\u003eModule-\u003eIO()",
          "package": "plugins",
          "partial": "Module",
          "signature": "String-\u003eModule-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plugins/docs/System-Plugins-Env.html#v:addModule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the dependencies of a Module.\n\u003c/p\u003e",
          "module": "System.Plugins.Env",
          "name": "addModuleDeps",
          "package": "plugins",
          "signature": "Module -\u003e [Module] -\u003e IO ()",
          "source": "src/System-Plugins-Env.html#addModuleDeps",
          "type": "function"
        },
        "index": {
          "description": "Set the dependencies of Module",
          "hierarchy": "System Plugins Env",
          "module": "System.Plugins.Env",
          "name": "addModuleDeps",
          "normalized": "Module-\u003e[Module]-\u003eIO()",
          "package": "plugins",
          "partial": "Module Deps",
          "signature": "Module-\u003e[Module]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plugins/docs/System-Plugins-Env.html#v:addModuleDeps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003einsert a list of module names all in one go\n\u003c/p\u003e",
          "module": "System.Plugins.Env",
          "name": "addModules",
          "package": "plugins",
          "signature": "[(String, Module)] -\u003e IO ()",
          "source": "src/System-Plugins-Env.html#addModules",
          "type": "function"
        },
        "index": {
          "description": "insert list of module names all in one go",
          "hierarchy": "System Plugins Env",
          "module": "System.Plugins.Env",
          "name": "addModules",
          "normalized": "[(String,Module)]-\u003eIO()",
          "package": "plugins",
          "partial": "Modules",
          "signature": "[(String,Module)]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plugins/docs/System-Plugins-Env.html#v:addModules"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInsert a single package.conf (containing multiple configs) means:\n create a new FM. insert packages into FM. add FM to end of list of FM\n stored in the environment.\n\u003c/p\u003e",
          "module": "System.Plugins.Env",
          "name": "addPkgConf",
          "package": "plugins",
          "signature": "FilePath -\u003e IO ()",
          "source": "src/System-Plugins-Env.html#addPkgConf",
          "type": "function"
        },
        "index": {
          "description": "Insert single package.conf containing multiple configs means create new FM insert packages into FM add FM to end of list of FM stored in the environment",
          "hierarchy": "System Plugins Env",
          "module": "System.Plugins.Env",
          "name": "addPkgConf",
          "normalized": "FilePath-\u003eIO()",
          "package": "plugins",
          "partial": "Pkg Conf",
          "signature": "FilePath-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plugins/docs/System-Plugins-Env.html#v:addPkgConf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Plugins.Env",
          "name": "addStaticPkg",
          "package": "plugins",
          "signature": "PackageName -\u003e IO ()",
          "source": "src/System-Plugins-Env.html#addStaticPkg",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Plugins Env",
          "module": "System.Plugins.Env",
          "name": "addStaticPkg",
          "normalized": "PackageName-\u003eIO()",
          "package": "plugins",
          "partial": "Static Pkg",
          "signature": "PackageName-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plugins/docs/System-Plugins-Env.html#v:addStaticPkg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Plugins.Env",
          "name": "env",
          "package": "plugins",
          "signature": "(MVar (), IORef (FiniteMap key elt), IORef (FiniteMap key1 elt1), IORef PkgEnvs, IORef (Set [Char]), IORef (FiniteMap key2 elt2))",
          "source": "src/System-Plugins-Env.html#env",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Plugins Env",
          "module": "System.Plugins.Env",
          "name": "env",
          "normalized": "(MVar(),IORef(FiniteMap a b),IORef(FiniteMap a b),IORef PkgEnvs,IORef(Set[Char]),IORef(FiniteMap a b))",
          "package": "plugins",
          "signature": "(MVar(),IORef(FiniteMap key elt),IORef(FiniteMap key elt),IORef PkgEnvs,IORef(Set[Char]),IORef(FiniteMap key elt))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plugins/docs/System-Plugins-Env.html#v:env"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet module dependencies. Nothing if none have been recored.\n\u003c/p\u003e",
          "module": "System.Plugins.Env",
          "name": "getModuleDeps",
          "package": "plugins",
          "signature": "Module -\u003e IO [Module]",
          "source": "src/System-Plugins-Env.html#getModuleDeps",
          "type": "function"
        },
        "index": {
          "description": "Get module dependencies Nothing if none have been recored",
          "hierarchy": "System Plugins Env",
          "module": "System.Plugins.Env",
          "name": "getModuleDeps",
          "normalized": "Module-\u003eIO[Module]",
          "package": "plugins",
          "partial": "Module Deps",
          "signature": "Module-\u003eIO[Module]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plugins/docs/System-Plugins-Env.html#v:getModuleDeps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003egenerate a PkgEnv from the system package.conf\n The path to the default package.conf was determined by \u003cem\u003econfigure\u003c/em\u003e\n This imposes a constraint that you must build your plugins with the\n same ghc you use to build hs-plugins. This is reasonable, we feel.\n\u003c/p\u003e",
          "module": "System.Plugins.Env",
          "name": "grabDefaultPkgConf",
          "package": "plugins",
          "signature": "IO PkgEnvs",
          "source": "src/System-Plugins-Env.html#grabDefaultPkgConf",
          "type": "function"
        },
        "index": {
          "description": "generate PkgEnv from the system package.conf The path to the default package.conf was determined by configure This imposes constraint that you must build your plugins with the same ghc you use to build hs-plugins This is reasonable we feel",
          "hierarchy": "System Plugins Env",
          "module": "System.Plugins.Env",
          "name": "grabDefaultPkgConf",
          "package": "plugins",
          "partial": "Default Pkg Conf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plugins/docs/System-Plugins-Env.html#v:grabDefaultPkgConf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eis a module/package already loaded?\n\u003c/p\u003e",
          "module": "System.Plugins.Env",
          "name": "isLoaded",
          "package": "plugins",
          "signature": "String -\u003e IO Bool",
          "source": "src/System-Plugins-Env.html#isLoaded",
          "type": "function"
        },
        "index": {
          "description": "is module package already loaded",
          "hierarchy": "System Plugins Env",
          "module": "System.Plugins.Env",
          "name": "isLoaded",
          "normalized": "String-\u003eIO Bool",
          "package": "plugins",
          "partial": "Loaded",
          "signature": "String-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plugins/docs/System-Plugins-Env.html#v:isLoaded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Plugins.Env",
          "name": "isMerged",
          "package": "plugins",
          "signature": "FilePath -\u003e FilePath -\u003e IO Bool",
          "source": "src/System-Plugins-Env.html#isMerged",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Plugins Env",
          "module": "System.Plugins.Env",
          "name": "isMerged",
          "normalized": "FilePath-\u003eFilePath-\u003eIO Bool",
          "package": "plugins",
          "partial": "Merged",
          "signature": "FilePath-\u003eFilePath-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plugins/docs/System-Plugins-Env.html#v:isMerged"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Plugins.Env",
          "name": "isStaticPkg",
          "package": "plugins",
          "signature": "PackageName -\u003e IO Bool",
          "source": "src/System-Plugins-Env.html#isStaticPkg",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Plugins Env",
          "module": "System.Plugins.Env",
          "name": "isStaticPkg",
          "normalized": "PackageName-\u003eIO Bool",
          "package": "plugins",
          "partial": "Static Pkg",
          "signature": "PackageName-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plugins/docs/System-Plugins-Env.html#v:isStaticPkg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Plugins.Env",
          "name": "loaded",
          "package": "plugins",
          "signature": "String -\u003e IO Bool",
          "source": "src/System-Plugins-Env.html#loaded",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Plugins Env",
          "module": "System.Plugins.Env",
          "name": "loaded",
          "normalized": "String-\u003eIO Bool",
          "package": "plugins",
          "signature": "String-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plugins/docs/System-Plugins-Env.html#v:loaded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Plugins.Env",
          "name": "lookupMerged",
          "package": "plugins",
          "signature": "FilePath -\u003e FilePath -\u003e IO (Maybe FilePath)",
          "source": "src/System-Plugins-Env.html#lookupMerged",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Plugins Env",
          "module": "System.Plugins.Env",
          "name": "lookupMerged",
          "normalized": "FilePath-\u003eFilePath-\u003eIO(Maybe FilePath)",
          "package": "plugins",
          "partial": "Merged",
          "signature": "FilePath-\u003eFilePath-\u003eIO(Maybe FilePath)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plugins/docs/System-Plugins-Env.html#v:lookupMerged"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Plugins.Env",
          "name": "lookupPkg",
          "package": "plugins",
          "signature": "PackageName -\u003e IO ([FilePath], [FilePath])",
          "source": "src/System-Plugins-Env.html#lookupPkg",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Plugins Env",
          "module": "System.Plugins.Env",
          "name": "lookupPkg",
          "normalized": "PackageName-\u003eIO([FilePath],[FilePath])",
          "package": "plugins",
          "partial": "Pkg",
          "signature": "PackageName-\u003eIO([FilePath],[FilePath])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plugins/docs/System-Plugins-Env.html#v:lookupPkg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Plugins.Env",
          "name": "modifyDepEnv",
          "package": "plugins",
          "signature": "Env -\u003e (DepEnv -\u003e IO DepEnv) -\u003e IO ()",
          "source": "src/System-Plugins-Env.html#modifyDepEnv",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Plugins Env",
          "module": "System.Plugins.Env",
          "name": "modifyDepEnv",
          "normalized": "Env-\u003e(DepEnv-\u003eIO DepEnv)-\u003eIO()",
          "package": "plugins",
          "partial": "Dep Env",
          "signature": "Env-\u003e(DepEnv-\u003eIO DepEnv)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plugins/docs/System-Plugins-Env.html#v:modifyDepEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Plugins.Env",
          "name": "modifyMerged",
          "package": "plugins",
          "signature": "Env -\u003e (MergeEnv -\u003e IO MergeEnv) -\u003e IO ()",
          "source": "src/System-Plugins-Env.html#modifyMerged",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Plugins Env",
          "module": "System.Plugins.Env",
          "name": "modifyMerged",
          "normalized": "Env-\u003e(MergeEnv-\u003eIO MergeEnv)-\u003eIO()",
          "package": "plugins",
          "partial": "Merged",
          "signature": "Env-\u003e(MergeEnv-\u003eIO MergeEnv)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plugins/docs/System-Plugins-Env.html#v:modifyMerged"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Plugins.Env",
          "name": "modifyModEnv",
          "package": "plugins",
          "signature": "Env -\u003e (ModEnv -\u003e IO ModEnv) -\u003e IO ()",
          "source": "src/System-Plugins-Env.html#modifyModEnv",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Plugins Env",
          "module": "System.Plugins.Env",
          "name": "modifyModEnv",
          "normalized": "Env-\u003e(ModEnv-\u003eIO ModEnv)-\u003eIO()",
          "package": "plugins",
          "partial": "Mod Env",
          "signature": "Env-\u003e(ModEnv-\u003eIO ModEnv)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plugins/docs/System-Plugins-Env.html#v:modifyModEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Plugins.Env",
          "name": "modifyPkgEnv",
          "package": "plugins",
          "signature": "Env -\u003e (PkgEnvs -\u003e IO PkgEnvs) -\u003e IO ()",
          "source": "src/System-Plugins-Env.html#modifyPkgEnv",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Plugins Env",
          "module": "System.Plugins.Env",
          "name": "modifyPkgEnv",
          "normalized": "Env-\u003e(PkgEnvs-\u003eIO PkgEnvs)-\u003eIO()",
          "package": "plugins",
          "partial": "Pkg Env",
          "signature": "Env-\u003e(PkgEnvs-\u003eIO PkgEnvs)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plugins/docs/System-Plugins-Env.html#v:modifyPkgEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Plugins.Env",
          "name": "readPackageConf",
          "package": "plugins",
          "signature": "FilePath -\u003e IO [PackageConfig]",
          "source": "src/System-Plugins-Env.html#readPackageConf",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Plugins Env",
          "module": "System.Plugins.Env",
          "name": "readPackageConf",
          "normalized": "FilePath-\u003eIO[PackageConfig]",
          "package": "plugins",
          "partial": "Package Conf",
          "signature": "FilePath-\u003eIO[PackageConfig]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plugins/docs/System-Plugins-Env.html#v:readPackageConf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eremove a module name from the environment. Returns True if the\n module was actually removed.\n\u003c/p\u003e",
          "module": "System.Plugins.Env",
          "name": "rmModule",
          "package": "plugins",
          "signature": "String -\u003e IO Bool",
          "source": "src/System-Plugins-Env.html#rmModule",
          "type": "function"
        },
        "index": {
          "description": "remove module name from the environment Returns True if the module was actually removed",
          "hierarchy": "System Plugins Env",
          "module": "System.Plugins.Env",
          "name": "rmModule",
          "normalized": "String-\u003eIO Bool",
          "package": "plugins",
          "partial": "Module",
          "signature": "String-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plugins/docs/System-Plugins-Env.html#v:rmModule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnrecord a module from the environment.\n\u003c/p\u003e",
          "module": "System.Plugins.Env",
          "name": "rmModuleDeps",
          "package": "plugins",
          "signature": "Module -\u003e IO ()",
          "source": "src/System-Plugins-Env.html#rmModuleDeps",
          "type": "function"
        },
        "index": {
          "description": "Unrecord module from the environment",
          "hierarchy": "System Plugins Env",
          "module": "System.Plugins.Env",
          "name": "rmModuleDeps",
          "normalized": "Module-\u003eIO()",
          "package": "plugins",
          "partial": "Module Deps",
          "signature": "Module-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plugins/docs/System-Plugins-Env.html#v:rmModuleDeps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eadd a new FM for the package.conf to the list of existing ones; if a package occurs multiple\n times, pick the one with the higher version number as the default (e.g., important for base in\n GHC 6.12)\n\u003c/p\u003e",
          "module": "System.Plugins.Env",
          "name": "union",
          "package": "plugins",
          "signature": "PkgEnvs -\u003e [PackageConfig] -\u003e PkgEnvs",
          "source": "src/System-Plugins-Env.html#union",
          "type": "function"
        },
        "index": {
          "description": "add new FM for the package.conf to the list of existing ones if package occurs multiple times pick the one with the higher version number as the default e.g important for base in GHC",
          "hierarchy": "System Plugins Env",
          "module": "System.Plugins.Env",
          "name": "union",
          "normalized": "PkgEnvs-\u003e[PackageConfig]-\u003ePkgEnvs",
          "package": "plugins",
          "signature": "PkgEnvs-\u003e[PackageConfig]-\u003ePkgEnvs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plugins/docs/System-Plugins-Env.html#v:union"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Plugins.Env",
          "name": "withDepEnv",
          "package": "plugins",
          "signature": "Env -\u003e (DepEnv -\u003e IO a) -\u003e IO a",
          "source": "src/System-Plugins-Env.html#withDepEnv",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Plugins Env",
          "module": "System.Plugins.Env",
          "name": "withDepEnv",
          "normalized": "Env-\u003e(DepEnv-\u003eIO a)-\u003eIO a",
          "package": "plugins",
          "partial": "Dep Env",
          "signature": "Env-\u003e(DepEnv-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plugins/docs/System-Plugins-Env.html#v:withDepEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Plugins.Env",
          "name": "withMerged",
          "package": "plugins",
          "signature": "Env -\u003e (MergeEnv -\u003e IO a) -\u003e IO a",
          "source": "src/System-Plugins-Env.html#withMerged",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Plugins Env",
          "module": "System.Plugins.Env",
          "name": "withMerged",
          "normalized": "Env-\u003e(MergeEnv-\u003eIO a)-\u003eIO a",
          "package": "plugins",
          "partial": "Merged",
          "signature": "Env-\u003e(MergeEnv-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plugins/docs/System-Plugins-Env.html#v:withMerged"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eapply \u003ccode\u003ef\u003c/code\u003e to the loaded objects Env, apply \u003ccode\u003ef\u003c/code\u003e to the package.conf\n FM \u003cem\u003elocks up the MVar\u003c/em\u003e so you can't recursively call a function\n inside a with any -Env function. Nice and threadsafe\n\u003c/p\u003e",
          "module": "System.Plugins.Env",
          "name": "withModEnv",
          "package": "plugins",
          "signature": "Env -\u003e (ModEnv -\u003e IO a) -\u003e IO a",
          "source": "src/System-Plugins-Env.html#withModEnv",
          "type": "function"
        },
        "index": {
          "description": "apply to the loaded objects Env apply to the package.conf FM locks up the MVar so you can recursively call function inside with any Env function Nice and threadsafe",
          "hierarchy": "System Plugins Env",
          "module": "System.Plugins.Env",
          "name": "withModEnv",
          "normalized": "Env-\u003e(ModEnv-\u003eIO a)-\u003eIO a",
          "package": "plugins",
          "partial": "Mod Env",
          "signature": "Env-\u003e(ModEnv-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plugins/docs/System-Plugins-Env.html#v:withModEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Plugins.Env",
          "name": "withPkgEnvs",
          "package": "plugins",
          "signature": "Env -\u003e (PkgEnvs -\u003e IO a) -\u003e IO a",
          "source": "src/System-Plugins-Env.html#withPkgEnvs",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Plugins Env",
          "module": "System.Plugins.Env",
          "name": "withPkgEnvs",
          "normalized": "Env-\u003e(PkgEnvs-\u003eIO a)-\u003eIO a",
          "package": "plugins",
          "partial": "Pkg Envs",
          "signature": "Env-\u003e(PkgEnvs-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plugins/docs/System-Plugins-Env.html#v:withPkgEnvs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn interface to the GHC runtime's dynamic linker, providing runtime\n loading and linking of Haskell object files, commonly known as\n \u003cem\u003eplugins\u003c/em\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Plugins.Load",
          "name": "Load",
          "package": "plugins",
          "source": "src/System-Plugins-Load.html",
          "type": "module"
        },
        "index": {
          "description": "An interface to the GHC runtime dynamic linker providing runtime loading and linking of Haskell object files commonly known as plugins",
          "hierarchy": "System Plugins Load",
          "module": "System.Plugins.Load",
          "name": "Load",
          "package": "plugins",
          "partial": "Load",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/plugins/docs/System-Plugins-Load.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003eLoadStatus\u003c/code\u003e type encodes the return status of functions that\n perform dynamic loading in a type isomorphic to \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e. Failure\n returns a list of error strings, success returns a reference to a\n loaded module, and the Haskell value corresponding to the symbol that\n was indexed.\n\u003c/p\u003e",
          "module": "System.Plugins.Load",
          "name": "LoadStatus",
          "package": "plugins",
          "source": "src/System-Plugins-Load.html#LoadStatus",
          "type": "data"
        },
        "index": {
          "description": "The LoadStatus type encodes the return status of functions that perform dynamic loading in type isomorphic to Either Failure returns list of error strings success returns reference to loaded module and the Haskell value corresponding to the symbol that was indexed",
          "hierarchy": "System Plugins Load",
          "module": "System.Plugins.Load",
          "name": "LoadStatus",
          "package": "plugins",
          "partial": "Load Status",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/plugins/docs/System-Plugins-Load.html#t:LoadStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Plugins.Load",
          "name": "Module",
          "package": "plugins",
          "source": "src/System-Plugins-LoadTypes.html#Module",
          "type": "data"
        },
        "index": {
          "hierarchy": "System Plugins Load",
          "module": "System.Plugins.Load",
          "name": "Module",
          "package": "plugins",
          "partial": "Module",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/plugins/docs/System-Plugins-Load.html#t:Module"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Plugins.Load",
          "name": "Symbol",
          "package": "plugins",
          "source": "src/System-Plugins-LoadTypes.html#Symbol",
          "type": "type"
        },
        "index": {
          "hierarchy": "System Plugins Load",
          "module": "System.Plugins.Load",
          "name": "Symbol",
          "package": "plugins",
          "partial": "Symbol",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/plugins/docs/System-Plugins-Load.html#t:Symbol"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Plugins.Load",
          "name": "LoadFailure",
          "package": "plugins",
          "signature": "LoadFailure Errors",
          "source": "src/System-Plugins-Load.html#LoadStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Plugins Load",
          "module": "System.Plugins.Load",
          "name": "LoadFailure",
          "package": "plugins",
          "partial": "Load Failure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plugins/docs/System-Plugins-Load.html#v:LoadFailure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Plugins.Load",
          "name": "LoadSuccess",
          "package": "plugins",
          "signature": "LoadSuccess Module a",
          "source": "src/System-Plugins-Load.html#LoadStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Plugins Load",
          "module": "System.Plugins.Load",
          "name": "LoadSuccess",
          "package": "plugins",
          "partial": "Load Success",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plugins/docs/System-Plugins-Load.html#v:LoadSuccess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Plugins.Load\",\"System.Plugins.LoadTypes\"]",
          "name": "Module",
          "package": "plugins",
          "signature": "Module",
          "source": "src/System-Plugins-LoadTypes.html#Module",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/plugins/docs/System-Plugins-Load.html#v:Module\",\"http://hackage.haskell.org/package/plugins/docs/System-Plugins-LoadTypes.html#v:Module\"]"
        },
        "index": {
          "hierarchy": "System Plugins Load",
          "module": "System.Plugins.Load",
          "name": "Module",
          "package": "plugins",
          "partial": "Module",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plugins/docs/System-Plugins-Load.html#v:Module"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA work-around for Dynamics. The keys used to compare two TypeReps are\n somehow not equal for the same type in hs-plugin's loaded objects.\n Solution: implement our own dynamics...\n\u003c/p\u003e\u003cp\u003eThe problem with dynload is that it requires the plugin to export\n a value that is a Dynamic (in our case a (TypeRep,a) pair). If this\n is not the case, we core dump. Use pdynload if you don't trust the\n user to supply you with a Dynamic\n\u003c/p\u003e",
          "module": "System.Plugins.Load",
          "name": "dynload",
          "package": "plugins",
          "signature": "FilePath -\u003e [FilePath] -\u003e [PackageConf] -\u003e Symbol -\u003e IO (LoadStatus a)",
          "source": "src/System-Plugins-Load.html#dynload",
          "type": "function"
        },
        "index": {
          "description": "work-around for Dynamics The keys used to compare two TypeReps are somehow not equal for the same type in hs-plugin loaded objects Solution implement our own dynamics The problem with dynload is that it requires the plugin to export value that is Dynamic in our case TypeRep pair If this is not the case we core dump Use pdynload if you don trust the user to supply you with Dynamic",
          "hierarchy": "System Plugins Load",
          "module": "System.Plugins.Load",
          "name": "dynload",
          "normalized": "FilePath-\u003e[FilePath]-\u003e[PackageConf]-\u003eSymbol-\u003eIO(LoadStatus a)",
          "package": "plugins",
          "signature": "FilePath-\u003e[FilePath]-\u003e[PackageConf]-\u003eSymbol-\u003eIO(LoadStatus a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plugins/docs/System-Plugins-Load.html#v:dynload"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNice interface to .hi parser\n\u003c/p\u003e",
          "module": "System.Plugins.Load",
          "name": "getImports",
          "package": "plugins",
          "signature": "String -\u003e IO [String]",
          "source": "src/System-Plugins-Load.html#getImports",
          "type": "function"
        },
        "index": {
          "description": "Nice interface to hi parser",
          "hierarchy": "System Plugins Load",
          "module": "System.Plugins.Load",
          "name": "getImports",
          "normalized": "String-\u003eIO[String]",
          "package": "plugins",
          "partial": "Imports",
          "signature": "String-\u003eIO[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plugins/docs/System-Plugins-Load.html#v:getImports"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Plugins.Load\",\"System.Plugins.LoadTypes\"]",
          "name": "iface",
          "package": "plugins",
          "signature": "ModIface",
          "source": "src/System-Plugins-LoadTypes.html#Module",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/plugins/docs/System-Plugins-Load.html#v:iface\",\"http://hackage.haskell.org/package/plugins/docs/System-Plugins-LoadTypes.html#v:iface\"]"
        },
        "index": {
          "hierarchy": "System Plugins Load",
          "module": "System.Plugins.Load",
          "name": "iface",
          "package": "plugins",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plugins/docs/System-Plugins-Load.html#v:iface"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Plugins.Load",
          "name": "initLinker",
          "package": "plugins",
          "signature": "IO ()",
          "source": "src/System-Plugins-Load.html#initLinker",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Plugins Load",
          "module": "System.Plugins.Load",
          "name": "initLinker",
          "normalized": "IO()",
          "package": "plugins",
          "partial": "Linker",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plugins/docs/System-Plugins-Load.html#v:initLinker"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Plugins.Load\",\"System.Plugins.LoadTypes\"]",
          "name": "key",
          "package": "plugins",
          "signature": "Key",
          "source": "src/System-Plugins-LoadTypes.html#Module",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/plugins/docs/System-Plugins-Load.html#v:key\",\"http://hackage.haskell.org/package/plugins/docs/System-Plugins-LoadTypes.html#v:key\"]"
        },
        "index": {
          "hierarchy": "System Plugins Load",
          "module": "System.Plugins.Load",
          "name": "key",
          "package": "plugins",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plugins/docs/System-Plugins-Load.html#v:key"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Plugins.Load\",\"System.Plugins.LoadTypes\"]",
          "name": "kind",
          "package": "plugins",
          "signature": "ObjType",
          "source": "src/System-Plugins-LoadTypes.html#Module",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/plugins/docs/System-Plugins-Load.html#v:kind\",\"http://hackage.haskell.org/package/plugins/docs/System-Plugins-LoadTypes.html#v:kind\"]"
        },
        "index": {
          "hierarchy": "System Plugins Load",
          "module": "System.Plugins.Load",
          "name": "kind",
          "package": "plugins",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plugins/docs/System-Plugins-Load.html#v:kind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eload\u003c/a\u003e\u003c/code\u003e is the basic interface to the dynamic loader. A call to\n \u003ccode\u003e\u003ca\u003eload\u003c/a\u003e\u003c/code\u003e imports a single object file into the caller's address space,\n returning the value associated with the symbol requested. Libraries\n and modules that the requested module depends upon are loaded and\n linked in turn.\n\u003c/p\u003e\u003cp\u003eThe first argument is the path to the object file to load, the second\n argument is a list of directories to search for dependent modules.\n The third argument is a list of paths to user-defined, but\n unregistered, \u003cem\u003epackage.conf\u003c/em\u003e files. The \u003ccode\u003e\u003ca\u003eSymbol\u003c/a\u003e\u003c/code\u003e argument is the\n symbol name of the value you with to retrieve.\n\u003c/p\u003e\u003cp\u003eThe value returned must be given an explicit type signature, or\n provided with appropriate type constraints such that Haskell compiler\n can determine the expected type returned by \u003ccode\u003e\u003ca\u003eload\u003c/a\u003e\u003c/code\u003e, as the return\n type is notionally polymorphic.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e do mv \u003c- load \"Plugin.o\" [\"api\"] [] \"resource\"\n    case mv of\n        LoadFailure msg -\u003e print msg\n        LoadSuccess _ v -\u003e return v\n\u003c/pre\u003e",
          "module": "System.Plugins.Load",
          "name": "load",
          "package": "plugins",
          "signature": "FilePath-\u003e [FilePath]-\u003e [PackageConf]-\u003e Symbol-\u003e IO (LoadStatus a)",
          "type": "function"
        },
        "index": {
          "description": "load is the basic interface to the dynamic loader call to load imports single object file into the caller address space returning the value associated with the symbol requested Libraries and modules that the requested module depends upon are loaded and linked in turn The first argument is the path to the object file to load the second argument is list of directories to search for dependent modules The third argument is list of paths to user-defined but unregistered package.conf files The Symbol argument is the symbol name of the value you with to retrieve The value returned must be given an explicit type signature or provided with appropriate type constraints such that Haskell compiler can determine the expected type returned by load as the return type is notionally polymorphic Example do mv load Plugin.o api resource case mv of LoadFailure msg print msg LoadSuccess return",
          "hierarchy": "System Plugins Load",
          "module": "System.Plugins.Load",
          "name": "load",
          "normalized": "FilePath-\u003e[FilePath]-\u003e[PackageConf]-\u003eSymbol-\u003eIO(LoadStatus a)",
          "package": "plugins",
          "signature": "FilePath-\u003e[FilePath]-\u003e[PackageConf]-\u003eSymbol-\u003eIO(LoadStatus a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plugins/docs/System-Plugins-Load.html#v:load"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCall the initLinker function first, before calling any of the other\n functions in this module - otherwise you'll get unresolved symbols.\n\u003c/p\u003e\u003cp\u003eLoad a function from a module (which must be loaded and resolved first).\n\u003c/p\u003e",
          "module": "System.Plugins.Load",
          "name": "loadFunction",
          "package": "plugins",
          "signature": "Module-\u003e String-\u003e IO (Maybe a)",
          "type": "function"
        },
        "index": {
          "description": "Call the initLinker function first before calling any of the other functions in this module otherwise you ll get unresolved symbols Load function from module which must be loaded and resolved first",
          "hierarchy": "System Plugins Load",
          "module": "System.Plugins.Load",
          "name": "loadFunction",
          "normalized": "Module-\u003eString-\u003eIO(Maybe a)",
          "package": "plugins",
          "partial": "Function",
          "signature": "Module-\u003eString-\u003eIO(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plugins/docs/System-Plugins-Load.html#v:loadFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Plugins.Load",
          "name": "loadFunction_",
          "package": "plugins",
          "signature": "String -\u003e String -\u003e IO (Maybe a)",
          "source": "src/System-Plugins-Load.html#loadFunction_",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Plugins Load",
          "module": "System.Plugins.Load",
          "name": "loadFunction_",
          "normalized": "String-\u003eString-\u003eIO(Maybe a)",
          "package": "plugins",
          "partial": "Function",
          "signature": "String-\u003eString-\u003eIO(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plugins/docs/System-Plugins-Load.html#v:loadFunction_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eload a single object. no dependencies. You should know what you're\n doing.\n\u003c/p\u003e",
          "module": "System.Plugins.Load",
          "name": "loadModule",
          "package": "plugins",
          "signature": "FilePath -\u003e IO Module",
          "source": "src/System-Plugins-Load.html#loadModule",
          "type": "function"
        },
        "index": {
          "description": "load single object no dependencies You should know what you re doing",
          "hierarchy": "System Plugins Load",
          "module": "System.Plugins.Load",
          "name": "loadModule",
          "normalized": "FilePath-\u003eIO Module",
          "package": "plugins",
          "partial": "Module",
          "signature": "FilePath-\u003eIO Module",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plugins/docs/System-Plugins-Load.html#v:loadModule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLoad a -package that we might need, implicitly loading the cbits too\n The argument is the name of package (e.g.  \"concurrent\")\n\u003c/p\u003e\u003cp\u003eHow to find a package is determined by the package.conf info we store\n in the environment. It is just a matter of looking it up.\n\u003c/p\u003e\u003cp\u003eNot printing names of dependent pkgs\n\u003c/p\u003e",
          "module": "System.Plugins.Load",
          "name": "loadPackage",
          "package": "plugins",
          "signature": "String -\u003e IO ()",
          "source": "src/System-Plugins-Load.html#loadPackage",
          "type": "function"
        },
        "index": {
          "description": "Load package that we might need implicitly loading the cbits too The argument is the name of package e.g concurrent How to find package is determined by the package.conf info we store in the environment It is just matter of looking it up Not printing names of dependent pkgs",
          "hierarchy": "System Plugins Load",
          "module": "System.Plugins.Load",
          "name": "loadPackage",
          "normalized": "String-\u003eIO()",
          "package": "plugins",
          "partial": "Package",
          "signature": "String-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plugins/docs/System-Plugins-Load.html#v:loadPackage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLoads a function from a package module, given the package name,\n   module name and symbol name.\n\u003c/p\u003e",
          "module": "System.Plugins.Load",
          "name": "loadPackageFunction",
          "package": "plugins",
          "signature": "String-\u003e String-\u003e String-\u003e IO (Maybe a)",
          "type": "function"
        },
        "index": {
          "description": "Loads function from package module given the package name module name and symbol name",
          "hierarchy": "System Plugins Load",
          "module": "System.Plugins.Load",
          "name": "loadPackageFunction",
          "normalized": "String-\u003eString-\u003eString-\u003eIO(Maybe a)",
          "package": "plugins",
          "partial": "Package Function",
          "signature": "String-\u003eString-\u003eString-\u003eIO(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plugins/docs/System-Plugins-Load.html#v:loadPackageFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eload a package using the given package.conf to help\n TODO should report if it doesn't actually load the package, instead\n of mapM_ doing nothing like above.\n\u003c/p\u003e",
          "module": "System.Plugins.Load",
          "name": "loadPackageWith",
          "package": "plugins",
          "signature": "String -\u003e [PackageConf] -\u003e IO ()",
          "source": "src/System-Plugins-Load.html#loadPackageWith",
          "type": "function"
        },
        "index": {
          "description": "load package using the given package.conf to help TODO should report if it doesn actually load the package instead of mapM doing nothing like above",
          "hierarchy": "System Plugins Load",
          "module": "System.Plugins.Load",
          "name": "loadPackageWith",
          "normalized": "String-\u003e[PackageConf]-\u003eIO()",
          "package": "plugins",
          "partial": "Package With",
          "signature": "String-\u003e[PackageConf]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plugins/docs/System-Plugins-Load.html#v:loadPackageWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLoad a generic .o file, good for loading C objects.\n You should know what you're doing..\n Returns a fairly meaningless iface value.\n\u003c/p\u003e",
          "module": "System.Plugins.Load",
          "name": "loadRawObject",
          "package": "plugins",
          "signature": "FilePath -\u003e IO Module",
          "source": "src/System-Plugins-Load.html#loadRawObject",
          "type": "function"
        },
        "index": {
          "description": "Load generic file good for loading objects You should know what you re doing Returns fairly meaningless iface value",
          "hierarchy": "System Plugins Load",
          "module": "System.Plugins.Load",
          "name": "loadRawObject",
          "normalized": "FilePath-\u003eIO Module",
          "package": "plugins",
          "partial": "Raw Object",
          "signature": "FilePath-\u003eIO Module",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plugins/docs/System-Plugins-Load.html#v:loadRawObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efrom ghci/ObjLinker.c\n\u003c/p\u003e\u003cp\u003eLoad a .so type object file.\n\u003c/p\u003e",
          "module": "System.Plugins.Load",
          "name": "loadShared",
          "package": "plugins",
          "signature": "FilePath -\u003e IO Module",
          "source": "src/System-Plugins-Load.html#loadShared",
          "type": "function"
        },
        "index": {
          "description": "from ghci ObjLinker.c Load so type object file",
          "hierarchy": "System Plugins Load",
          "module": "System.Plugins.Load",
          "name": "loadShared",
          "normalized": "FilePath-\u003eIO Module",
          "package": "plugins",
          "partial": "Shared",
          "signature": "FilePath-\u003eIO Module",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plugins/docs/System-Plugins-Load.html#v:loadShared"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike load, but doesn't want a package.conf arg (they are rarely used)\n\u003c/p\u003e",
          "module": "System.Plugins.Load",
          "name": "load_",
          "package": "plugins",
          "signature": "FilePath-\u003e [FilePath]-\u003e Symbol-\u003e IO (LoadStatus a)",
          "type": "function"
        },
        "index": {
          "description": "Like load but doesn want package.conf arg they are rarely used",
          "hierarchy": "System Plugins Load",
          "module": "System.Plugins.Load",
          "name": "load_",
          "normalized": "FilePath-\u003e[FilePath]-\u003eSymbol-\u003eIO(LoadStatus a)",
          "package": "plugins",
          "signature": "FilePath-\u003e[FilePath]-\u003eSymbol-\u003eIO(LoadStatus a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plugins/docs/System-Plugins-Load.html#v:load_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Plugins.Load\",\"System.Plugins.LoadTypes\"]",
          "name": "mname",
          "package": "plugins",
          "signature": "String",
          "source": "src/System-Plugins-LoadTypes.html#Module",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/plugins/docs/System-Plugins-Load.html#v:mname\",\"http://hackage.haskell.org/package/plugins/docs/System-Plugins-LoadTypes.html#v:mname\"]"
        },
        "index": {
          "hierarchy": "System Plugins Load",
          "module": "System.Plugins.Load",
          "name": "mname",
          "package": "plugins",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plugins/docs/System-Plugins-Load.html#v:mname"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"System.Plugins.Load\",\"System.Plugins.LoadTypes\"]",
          "name": "path",
          "package": "plugins",
          "signature": "FilePath",
          "source": "src/System-Plugins-LoadTypes.html#Module",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/plugins/docs/System-Plugins-Load.html#v:path\",\"http://hackage.haskell.org/package/plugins/docs/System-Plugins-LoadTypes.html#v:path\"]"
        },
        "index": {
          "hierarchy": "System Plugins Load",
          "module": "System.Plugins.Load",
          "name": "path",
          "package": "plugins",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plugins/docs/System-Plugins-Load.html#v:path"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe super-replacement for dynload\n\u003c/p\u003e\u003cp\u003eUse GHC at runtime so we get staged type inference, providing full\n power dynamics, *on module interfaces only*. This is quite suitable\n for plugins, of coures :)\n\u003c/p\u003e\u003cp\u003eTODO where does the .hc file go in the call to build() ?\n\u003c/p\u003e",
          "module": "System.Plugins.Load",
          "name": "pdynload",
          "package": "plugins",
          "signature": "FilePath-\u003e [FilePath]-\u003e [PackageConf]-\u003e Type-\u003e Symbol-\u003e IO (LoadStatus a)",
          "type": "function"
        },
        "index": {
          "description": "The super-replacement for dynload Use GHC at runtime so we get staged type inference providing full power dynamics on module interfaces only This is quite suitable for plugins of coures TODO where does the hc file go in the call to build",
          "hierarchy": "System Plugins Load",
          "module": "System.Plugins.Load",
          "name": "pdynload",
          "normalized": "FilePath-\u003e[FilePath]-\u003e[PackageConf]-\u003eType-\u003eSymbol-\u003eIO(LoadStatus a)",
          "package": "plugins",
          "signature": "FilePath-\u003e[FilePath]-\u003e[PackageConf]-\u003eType-\u003eSymbol-\u003eIO(LoadStatus a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plugins/docs/System-Plugins-Load.html#v:pdynload"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike pdynload, but you can specify extra arguments to the\n typechecker.\n\u003c/p\u003e",
          "module": "System.Plugins.Load",
          "name": "pdynload_",
          "package": "plugins",
          "signature": "FilePath-\u003e [FilePath]-\u003e [PackageConf]-\u003e [Arg]-\u003e Type-\u003e Symbol-\u003e IO (LoadStatus a)",
          "type": "function"
        },
        "index": {
          "description": "Like pdynload but you can specify extra arguments to the typechecker",
          "hierarchy": "System Plugins Load",
          "module": "System.Plugins.Load",
          "name": "pdynload_",
          "normalized": "FilePath-\u003e[FilePath]-\u003e[PackageConf]-\u003e[Arg]-\u003eType-\u003eSymbol-\u003eIO(LoadStatus a)",
          "package": "plugins",
          "signature": "FilePath-\u003e[FilePath]-\u003e[PackageConf]-\u003e[Arg]-\u003eType-\u003eSymbol-\u003eIO(LoadStatus a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plugins/docs/System-Plugins-Load.html#v:pdynload_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethis will be nice for panTHeon, needs thinking about the interface\n reload a single object file. don't care about depends, assume they\n are loaded. (should use state to store all this)\n\u003c/p\u003e\u003cp\u003eassumes you've already done a \u003ccode\u003e\u003ca\u003eload\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eshould factor the code\n\u003c/p\u003e",
          "module": "System.Plugins.Load",
          "name": "reload",
          "package": "plugins",
          "signature": "Module -\u003e Symbol -\u003e IO (LoadStatus a)",
          "source": "src/System-Plugins-Load.html#reload",
          "type": "function"
        },
        "index": {
          "description": "this will be nice for panTHeon needs thinking about the interface reload single object file don care about depends assume they are loaded should use state to store all this assumes you ve already done load should factor the code",
          "hierarchy": "System Plugins Load",
          "module": "System.Plugins.Load",
          "name": "reload",
          "normalized": "Module-\u003eSymbol-\u003eIO(LoadStatus a)",
          "package": "plugins",
          "signature": "Module-\u003eSymbol-\u003eIO(LoadStatus a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plugins/docs/System-Plugins-Load.html#v:reload"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eResolve (link) the modules loaded by the \u003ccode\u003eloadObject\u003c/code\u003e function.\n\u003c/p\u003e",
          "module": "System.Plugins.Load",
          "name": "resolveObjs",
          "package": "plugins",
          "signature": "IO a -\u003e IO ()",
          "source": "src/System-Plugins-Load.html#resolveObjs",
          "type": "function"
        },
        "index": {
          "description": "Resolve link the modules loaded by the loadObject function",
          "hierarchy": "System Plugins Load",
          "module": "System.Plugins.Load",
          "name": "resolveObjs",
          "normalized": "IO a-\u003eIO()",
          "package": "plugins",
          "partial": "Objs",
          "signature": "IO a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plugins/docs/System-Plugins-Load.html#v:resolveObjs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eunload a module (not its dependencies)\n we have the dependencies, so cascaded unloading is possible\n\u003c/p\u003e\u003cp\u003eonce you unload it, you can't \u003ccode\u003e\u003ca\u003eload\u003c/a\u003e\u003c/code\u003e it again, you have to \u003ccode\u003e\u003ca\u003ereload\u003c/a\u003e\u003c/code\u003e\n it. Cause we don't unload all the dependencies\n\u003c/p\u003e",
          "module": "System.Plugins.Load",
          "name": "unload",
          "package": "plugins",
          "signature": "Module -\u003e IO ()",
          "source": "src/System-Plugins-Load.html#unload",
          "type": "function"
        },
        "index": {
          "description": "unload module not its dependencies we have the dependencies so cascaded unloading is possible once you unload it you can load it again you have to reload it Cause we don unload all the dependencies",
          "hierarchy": "System Plugins Load",
          "module": "System.Plugins.Load",
          "name": "unload",
          "normalized": "Module-\u003eIO()",
          "package": "plugins",
          "signature": "Module-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plugins/docs/System-Plugins-Load.html#v:unload"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eunload a module and its dependencies\n we have the dependencies, so cascaded unloading is possible\n\u003c/p\u003e",
          "module": "System.Plugins.Load",
          "name": "unloadAll",
          "package": "plugins",
          "signature": "Module -\u003e IO ()",
          "source": "src/System-Plugins-Load.html#unloadAll",
          "type": "function"
        },
        "index": {
          "description": "unload module and its dependencies we have the dependencies so cascaded unloading is possible",
          "hierarchy": "System Plugins Load",
          "module": "System.Plugins.Load",
          "name": "unloadAll",
          "normalized": "Module-\u003eIO()",
          "package": "plugins",
          "partial": "All",
          "signature": "Module-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plugins/docs/System-Plugins-Load.html#v:unloadAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnload a -package, that has already been loaded. Unload the cbits\n too. The argument is the name of the package.\n\u003c/p\u003e\u003cp\u003eMay need to check if it exists.\n\u003c/p\u003e\u003cp\u003eNote that we currently need to unload everything. grumble grumble.\n\u003c/p\u003e\u003cp\u003eWe need to add the version number to the package name with 6.4 and\n over. \u003ca\u003eyi-0.1\u003c/a\u003e for example. This is a bug really.\n\u003c/p\u003e",
          "module": "System.Plugins.Load",
          "name": "unloadPackage",
          "package": "plugins",
          "signature": "String -\u003e IO ()",
          "source": "src/System-Plugins-Load.html#unloadPackage",
          "type": "function"
        },
        "index": {
          "description": "Unload package that has already been loaded Unload the cbits too The argument is the name of the package May need to check if it exists Note that we currently need to unload everything grumble grumble We need to add the version number to the package name with and over yi-0.1 for example This is bug really",
          "hierarchy": "System Plugins Load",
          "module": "System.Plugins.Load",
          "name": "unloadPackage",
          "normalized": "String-\u003eIO()",
          "package": "plugins",
          "partial": "Package",
          "signature": "String-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plugins/docs/System-Plugins-Load.html#v:unloadPackage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Plugins.LoadTypes",
          "name": "LoadTypes",
          "package": "plugins",
          "source": "src/System-Plugins-LoadTypes.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "System Plugins LoadTypes",
          "module": "System.Plugins.LoadTypes",
          "name": "LoadTypes",
          "package": "plugins",
          "partial": "Load Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/plugins/docs/System-Plugins-LoadTypes.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Plugins.LoadTypes",
          "name": "Errors",
          "package": "plugins",
          "source": "src/System-Plugins-LoadTypes.html#Errors",
          "type": "type"
        },
        "index": {
          "hierarchy": "System Plugins LoadTypes",
          "module": "System.Plugins.LoadTypes",
          "name": "Errors",
          "package": "plugins",
          "partial": "Errors",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/plugins/docs/System-Plugins-LoadTypes.html#t:Errors"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Plugins.LoadTypes",
          "name": "Key",
          "package": "plugins",
          "source": "src/System-Plugins-LoadTypes.html#Key",
          "type": "data"
        },
        "index": {
          "hierarchy": "System Plugins LoadTypes",
          "module": "System.Plugins.LoadTypes",
          "name": "Key",
          "package": "plugins",
          "partial": "Key",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/plugins/docs/System-Plugins-LoadTypes.html#t:Key"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Plugins.LoadTypes",
          "name": "Module",
          "package": "plugins",
          "source": "src/System-Plugins-LoadTypes.html#Module",
          "type": "data"
        },
        "index": {
          "hierarchy": "System Plugins LoadTypes",
          "module": "System.Plugins.LoadTypes",
          "name": "Module",
          "package": "plugins",
          "partial": "Module",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/plugins/docs/System-Plugins-LoadTypes.html#t:Module"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Plugins.LoadTypes",
          "name": "ObjType",
          "package": "plugins",
          "source": "src/System-Plugins-LoadTypes.html#ObjType",
          "type": "data"
        },
        "index": {
          "hierarchy": "System Plugins LoadTypes",
          "module": "System.Plugins.LoadTypes",
          "name": "ObjType",
          "package": "plugins",
          "partial": "Obj Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/plugins/docs/System-Plugins-LoadTypes.html#t:ObjType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Plugins.LoadTypes",
          "name": "PackageConf",
          "package": "plugins",
          "source": "src/System-Plugins-LoadTypes.html#PackageConf",
          "type": "type"
        },
        "index": {
          "hierarchy": "System Plugins LoadTypes",
          "module": "System.Plugins.LoadTypes",
          "name": "PackageConf",
          "package": "plugins",
          "partial": "Package Conf",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/plugins/docs/System-Plugins-LoadTypes.html#t:PackageConf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Plugins.LoadTypes",
          "name": "Symbol",
          "package": "plugins",
          "source": "src/System-Plugins-LoadTypes.html#Symbol",
          "type": "type"
        },
        "index": {
          "hierarchy": "System Plugins LoadTypes",
          "module": "System.Plugins.LoadTypes",
          "name": "Symbol",
          "package": "plugins",
          "partial": "Symbol",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/plugins/docs/System-Plugins-LoadTypes.html#t:Symbol"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Plugins.LoadTypes",
          "name": "Type",
          "package": "plugins",
          "source": "src/System-Plugins-LoadTypes.html#Type",
          "type": "type"
        },
        "index": {
          "hierarchy": "System Plugins LoadTypes",
          "module": "System.Plugins.LoadTypes",
          "name": "Type",
          "package": "plugins",
          "partial": "Type",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/plugins/docs/System-Plugins-LoadTypes.html#t:Type"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Plugins.LoadTypes",
          "name": "Object",
          "package": "plugins",
          "signature": "Object String",
          "source": "src/System-Plugins-LoadTypes.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Plugins LoadTypes",
          "module": "System.Plugins.LoadTypes",
          "name": "Object",
          "package": "plugins",
          "partial": "Object",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plugins/docs/System-Plugins-LoadTypes.html#v:Object"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Plugins.LoadTypes",
          "name": "Package",
          "package": "plugins",
          "signature": "Package String",
          "source": "src/System-Plugins-LoadTypes.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Plugins LoadTypes",
          "module": "System.Plugins.LoadTypes",
          "name": "Package",
          "package": "plugins",
          "partial": "Package",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plugins/docs/System-Plugins-LoadTypes.html#v:Package"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Plugins.LoadTypes",
          "name": "Shared",
          "package": "plugins",
          "signature": "Shared",
          "source": "src/System-Plugins-LoadTypes.html#ObjType",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Plugins LoadTypes",
          "module": "System.Plugins.LoadTypes",
          "name": "Shared",
          "package": "plugins",
          "partial": "Shared",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plugins/docs/System-Plugins-LoadTypes.html#v:Shared"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Plugins.LoadTypes",
          "name": "Vanilla",
          "package": "plugins",
          "signature": "Vanilla",
          "source": "src/System-Plugins-LoadTypes.html#ObjType",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Plugins LoadTypes",
          "module": "System.Plugins.LoadTypes",
          "name": "Vanilla",
          "package": "plugins",
          "partial": "Vanilla",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plugins/docs/System-Plugins-LoadTypes.html#v:Vanilla"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn interface to a Haskell compiler, providing the facilities of a\n compilation manager.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Plugins.Make",
          "name": "Make",
          "package": "plugins",
          "source": "src/System-Plugins-Make.html",
          "type": "module"
        },
        "index": {
          "description": "An interface to Haskell compiler providing the facilities of compilation manager",
          "hierarchy": "System Plugins Make",
          "module": "System.Plugins.Make",
          "name": "Make",
          "package": "plugins",
          "partial": "Make",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/plugins/docs/System-Plugins-Make.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA list of \u003ccode\u003eString\u003c/code\u003e arguments\n\u003c/p\u003e",
          "module": "System.Plugins.Make",
          "name": "Args",
          "package": "plugins",
          "source": "src/System-Plugins-Make.html#Args",
          "type": "type"
        },
        "index": {
          "description": "list of String arguments",
          "hierarchy": "System Plugins Make",
          "module": "System.Plugins.Make",
          "name": "Args",
          "package": "plugins",
          "partial": "Args",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/plugins/docs/System-Plugins-Make.html#t:Args"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvience synonym\n\u003c/p\u003e",
          "module": "System.Plugins.Make",
          "name": "Errors",
          "package": "plugins",
          "source": "src/System-Plugins-Make.html#Errors",
          "type": "type"
        },
        "index": {
          "description": "Convience synonym",
          "hierarchy": "System Plugins Make",
          "module": "System.Plugins.Make",
          "name": "Errors",
          "package": "plugins",
          "partial": "Errors",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/plugins/docs/System-Plugins-Make.html#t:Errors"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003eMakeCode\u003c/code\u003e type is used when compilation is successful, to\n distinguish two cases: \n  * The source file needed recompiling, and this was done\n  * The source file was already up to date, recompilation was skipped\n\u003c/p\u003e",
          "module": "System.Plugins.Make",
          "name": "MakeCode",
          "package": "plugins",
          "source": "src/System-Plugins-Make.html#MakeCode",
          "type": "data"
        },
        "index": {
          "description": "The MakeCode type is used when compilation is successful to distinguish two cases The source file needed recompiling and this was done The source file was already up to date recompilation was skipped",
          "hierarchy": "System Plugins Make",
          "module": "System.Plugins.Make",
          "name": "MakeCode",
          "package": "plugins",
          "partial": "Make Code",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/plugins/docs/System-Plugins-Make.html#t:MakeCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003eMakeStatus\u003c/code\u003e type represents success or failure of compilation.\n Compilation can fail for the usual reasons: syntax errors, type\n errors and the like. The \u003ccode\u003eMakeFailure\u003c/code\u003e constructor returns any error\n messages produced by the compiler. \u003ccode\u003eMakeSuccess\u003c/code\u003e returns a \u003ccode\u003eMakeCode\u003c/code\u003e\n value, and the path to the object file produced.\n\u003c/p\u003e",
          "module": "System.Plugins.Make",
          "name": "MakeStatus",
          "package": "plugins",
          "source": "src/System-Plugins-Make.html#MakeStatus",
          "type": "data"
        },
        "index": {
          "description": "The MakeStatus type represents success or failure of compilation Compilation can fail for the usual reasons syntax errors type errors and the like The MakeFailure constructor returns any error messages produced by the compiler MakeSuccess returns MakeCode value and the path to the object file produced",
          "hierarchy": "System Plugins Make",
          "module": "System.Plugins.Make",
          "name": "MakeStatus",
          "package": "plugins",
          "partial": "Make Status",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/plugins/docs/System-Plugins-Make.html#t:MakeStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMerging may be avoided if the source files are older than an\n existing merged result. The \u003ccode\u003eMergeCode\u003c/code\u003e type indicates whether\n merging was performed, or whether it was unneccessary.\n\u003c/p\u003e",
          "module": "System.Plugins.Make",
          "name": "MergeCode",
          "package": "plugins",
          "source": "src/System-Plugins-Make.html#MergeCode",
          "type": "type"
        },
        "index": {
          "description": "Merging may be avoided if the source files are older than an existing merged result The MergeCode type indicates whether merging was performed or whether it was unneccessary",
          "hierarchy": "System Plugins Make",
          "module": "System.Plugins.Make",
          "name": "MergeCode",
          "package": "plugins",
          "partial": "Merge Code",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/plugins/docs/System-Plugins-Make.html#t:MergeCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn equivalent status for the preprocessor phase\n\u003c/p\u003e",
          "module": "System.Plugins.Make",
          "name": "MergeStatus",
          "package": "plugins",
          "source": "src/System-Plugins-Make.html#MergeStatus",
          "type": "data"
        },
        "index": {
          "description": "An equivalent status for the preprocessor phase",
          "hierarchy": "System Plugins Make",
          "module": "System.Plugins.Make",
          "name": "MergeStatus",
          "package": "plugins",
          "partial": "Merge Status",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/plugins/docs/System-Plugins-Make.html#t:MergeStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecompilation failed\n\u003c/p\u003e",
          "module": "System.Plugins.Make",
          "name": "MakeFailure",
          "package": "plugins",
          "signature": "MakeFailure Errors",
          "source": "src/System-Plugins-Make.html#MakeStatus",
          "type": "function"
        },
        "index": {
          "description": "compilation failed",
          "hierarchy": "System Plugins Make",
          "module": "System.Plugins.Make",
          "name": "MakeFailure",
          "package": "plugins",
          "partial": "Make Failure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plugins/docs/System-Plugins-Make.html#v:MakeFailure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecompilation was successful\n\u003c/p\u003e",
          "module": "System.Plugins.Make",
          "name": "MakeSuccess",
          "package": "plugins",
          "signature": "MakeSuccess MakeCode FilePath",
          "source": "src/System-Plugins-Make.html#MakeStatus",
          "type": "function"
        },
        "index": {
          "description": "compilation was successful",
          "hierarchy": "System Plugins Make",
          "module": "System.Plugins.Make",
          "name": "MakeSuccess",
          "package": "plugins",
          "partial": "Make Success",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plugins/docs/System-Plugins-Make.html#v:MakeSuccess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efailure, and any errors returned\n\u003c/p\u003e",
          "module": "System.Plugins.Make",
          "name": "MergeFailure",
          "package": "plugins",
          "signature": "MergeFailure Errors",
          "source": "src/System-Plugins-Make.html#MergeStatus",
          "type": "function"
        },
        "index": {
          "description": "failure and any errors returned",
          "hierarchy": "System Plugins Make",
          "module": "System.Plugins.Make",
          "name": "MergeFailure",
          "package": "plugins",
          "partial": "Merge Failure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plugins/docs/System-Plugins-Make.html#v:MergeFailure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe merge was successful\n\u003c/p\u003e",
          "module": "System.Plugins.Make",
          "name": "MergeSuccess",
          "package": "plugins",
          "signature": "MergeSuccess MergeCode Args FilePath",
          "source": "src/System-Plugins-Make.html#MergeStatus",
          "type": "function"
        },
        "index": {
          "description": "the merge was successful",
          "hierarchy": "System Plugins Make",
          "module": "System.Plugins.Make",
          "name": "MergeSuccess",
          "package": "plugins",
          "partial": "Merge Success",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plugins/docs/System-Plugins-Make.html#v:MergeSuccess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003erecompilation was not required\n\u003c/p\u003e",
          "module": "System.Plugins.Make",
          "name": "NotReq",
          "package": "plugins",
          "signature": "NotReq",
          "source": "src/System-Plugins-Make.html#MakeCode",
          "type": "function"
        },
        "index": {
          "description": "recompilation was not required",
          "hierarchy": "System Plugins Make",
          "module": "System.Plugins.Make",
          "name": "NotReq",
          "package": "plugins",
          "partial": "Not Req",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plugins/docs/System-Plugins-Make.html#v:NotReq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003erecompilation was performed\n\u003c/p\u003e",
          "module": "System.Plugins.Make",
          "name": "ReComp",
          "package": "plugins",
          "signature": "ReComp",
          "source": "src/System-Plugins-Make.html#MakeCode",
          "type": "function"
        },
        "index": {
          "description": "recompilation was performed",
          "hierarchy": "System Plugins Make",
          "module": "System.Plugins.Make",
          "name": "ReComp",
          "package": "plugins",
          "partial": "Re Comp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plugins/docs/System-Plugins-Make.html#v:ReComp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLower-level than \u003ccode\u003e\u003ca\u003emake\u003c/a\u003e\u003c/code\u003e. Compile a .hs file to a .o file\n If the plugin needs to import an api (which should be almost\n everyone) then the ghc flags to find the api need to be provided as\n arguments\n\u003c/p\u003e",
          "module": "System.Plugins.Make",
          "name": "build",
          "package": "plugins",
          "signature": "FilePath-\u003e FilePath-\u003e [String]-\u003e IO [String]",
          "type": "function"
        },
        "index": {
          "description": "Lower-level than make Compile hs file to file If the plugin needs to import an api which should be almost everyone then the ghc flags to find the api need to be provided as arguments",
          "hierarchy": "System Plugins Make",
          "module": "System.Plugins.Make",
          "name": "build",
          "normalized": "FilePath-\u003eFilePath-\u003e[String]-\u003eIO[String]",
          "package": "plugins",
          "signature": "FilePath-\u003eFilePath-\u003e[String]-\u003eIO[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plugins/docs/System-Plugins-Make.html#v:build"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ehasChanged\u003c/code\u003e returns \u003ccode\u003eTrue\u003c/code\u003e if the module or any of its\n dependencies have older object files than source files.  Defaults to\n \u003ccode\u003eTrue\u003c/code\u003e if some files couldn't be located.\n\u003c/p\u003e",
          "module": "System.Plugins.Make",
          "name": "hasChanged",
          "package": "plugins",
          "signature": "Module -\u003e IO Bool",
          "source": "src/System-Plugins-Make.html#hasChanged",
          "type": "function"
        },
        "index": {
          "description": "hasChanged returns True if the module or any of its dependencies have older object files than source files Defaults to True if some files couldn be located",
          "hierarchy": "System Plugins Make",
          "module": "System.Plugins.Make",
          "name": "hasChanged",
          "normalized": "Module-\u003eIO Bool",
          "package": "plugins",
          "partial": "Changed",
          "signature": "Module-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plugins/docs/System-Plugins-Make.html#v:hasChanged"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Plugins.Make",
          "name": "hasChanged'",
          "package": "plugins",
          "signature": "[String] -\u003e Module -\u003e IO Bool",
          "source": "src/System-Plugins-Make.html#hasChanged%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Plugins Make",
          "module": "System.Plugins.Make",
          "name": "hasChanged'",
          "normalized": "[String]-\u003eModule-\u003eIO Bool",
          "package": "plugins",
          "partial": "Changed'",
          "signature": "[String]-\u003eModule-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plugins/docs/System-Plugins-Make.html#v:hasChanged-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOne-shot unconditional compilation of a single Haskell module.\n \u003ccode\u003emake\u003c/code\u003e behaves like 'ghc -c'. Extra arguments to \u003ccode\u003e\u003ca\u003eghc\u003c/a\u003e\u003c/code\u003e may be passed\n in the \u003ccode\u003eargs\u003c/code\u003e parameter, they will be appended to the argument list.\n \u003ccode\u003emake\u003c/code\u003e always recompiles its target, whether or not it is out of\n date.\n\u003c/p\u003e\u003cp\u003eA side-effect of calling \u003ccode\u003e\u003ca\u003emake\u003c/a\u003e\u003c/code\u003e is to have GHC produce a \u003ccode\u003e.hi\u003c/code\u003e file\n containing a list of package and objects that the source depends on.\n Subsequent calls to \u003ccode\u003eload\u003c/code\u003e will use this interface file to load\n module and library dependencies prior to loading the object itself.\n\u003c/p\u003e",
          "module": "System.Plugins.Make",
          "name": "make",
          "package": "plugins",
          "signature": "FilePath -\u003e [Arg] -\u003e IO MakeStatus",
          "source": "src/System-Plugins-Make.html#make",
          "type": "function"
        },
        "index": {
          "description": "One-shot unconditional compilation of single Haskell module make behaves like ghc Extra arguments to ghc may be passed in the args parameter they will be appended to the argument list make always recompiles its target whether or not it is out of date side-effect of calling make is to have GHC produce hi file containing list of package and objects that the source depends on Subsequent calls to load will use this interface file to load module and library dependencies prior to loading the object itself",
          "hierarchy": "System Plugins Make",
          "module": "System.Plugins.Make",
          "name": "make",
          "normalized": "FilePath-\u003e[Arg]-\u003eIO MakeStatus",
          "package": "plugins",
          "signature": "FilePath-\u003e[Arg]-\u003eIO MakeStatus",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plugins/docs/System-Plugins-Make.html#v:make"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003emakeAll\u003c/a\u003e\u003c/code\u003e recursively compiles any dependencies it can find using\n GHC's \u003ccode\u003e--make\u003c/code\u003e flag. Dependencies will be recompiled only if they are\n visible to \u003ccode\u003e\u003ca\u003eghc\u003c/a\u003e\u003c/code\u003e -- this may require passing appropriate include path\n flags in the \u003ccode\u003eargs\u003c/code\u003e parameter. \u003ccode\u003e\u003ca\u003emakeAll\u003c/a\u003e\u003c/code\u003e takes the top-level file as\n the first argument.\n\u003c/p\u003e",
          "module": "System.Plugins.Make",
          "name": "makeAll",
          "package": "plugins",
          "signature": "FilePath -\u003e [Arg] -\u003e IO MakeStatus",
          "source": "src/System-Plugins-Make.html#makeAll",
          "type": "function"
        },
        "index": {
          "description": "makeAll recursively compiles any dependencies it can find using GHC make flag Dependencies will be recompiled only if they are visible to ghc this may require passing appropriate include path flags in the args parameter makeAll takes the top-level file as the first argument",
          "hierarchy": "System Plugins Make",
          "module": "System.Plugins.Make",
          "name": "makeAll",
          "normalized": "FilePath-\u003e[Arg]-\u003eIO MakeStatus",
          "package": "plugins",
          "partial": "All",
          "signature": "FilePath-\u003e[Arg]-\u003eIO MakeStatus",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plugins/docs/System-Plugins-Make.html#v:makeAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emakeClean : assuming we some element of [f.hs,f.hi,f.o], remove the\n .hi and .o components. Silently ignore any missing components. /Does\n not remove .hs files/. To do that use \u003ccode\u003e\u003ca\u003emakeCleaner\u003c/a\u003e\u003c/code\u003e. This would be\n useful for merged files, for example.\n\u003c/p\u003e",
          "module": "System.Plugins.Make",
          "name": "makeClean",
          "package": "plugins",
          "signature": "FilePath -\u003e IO ()",
          "source": "src/System-Plugins-Make.html#makeClean",
          "type": "function"
        },
        "index": {
          "description": "makeClean assuming we some element of f.hs f.hi f.o remove the hi and components Silently ignore any missing components Does not remove hs files To do that use makeCleaner This would be useful for merged files for example",
          "hierarchy": "System Plugins Make",
          "module": "System.Plugins.Make",
          "name": "makeClean",
          "normalized": "FilePath-\u003eIO()",
          "package": "plugins",
          "partial": "Clean",
          "signature": "FilePath-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plugins/docs/System-Plugins-Make.html#v:makeClean"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Plugins.Make",
          "name": "makeCleaner",
          "package": "plugins",
          "signature": "FilePath -\u003e IO ()",
          "source": "src/System-Plugins-Make.html#makeCleaner",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Plugins Make",
          "module": "System.Plugins.Make",
          "name": "makeCleaner",
          "normalized": "FilePath-\u003eIO()",
          "package": "plugins",
          "partial": "Cleaner",
          "signature": "FilePath-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plugins/docs/System-Plugins-Make.html#v:makeCleaner"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is a variety of \u003ccode\u003e\u003ca\u003emake\u003c/a\u003e\u003c/code\u003e that first calls \u003ccode\u003e\u003ca\u003emerge\u003c/a\u003e\u003c/code\u003e to\n combine the plugin source with a syntax stub. The result is then\n compiled. This is provided for EDSL authors who wish to add extra\n syntax to a user's source. It is important to note that the\n module and types from the second file argument are used to override\n any of those that appear in the first argument. For example, consider\n the following source files:\n\u003c/p\u003e\u003cpre\u003e module A where\n a :: Integer\n a = 1\n\u003c/pre\u003e\u003cp\u003eand\n\u003c/p\u003e\u003cpre\u003e module B where\n a :: Int\n\u003c/pre\u003e\u003cp\u003eCalling \u003ccode\u003emakeWith \u003ca\u003eA\u003c/a\u003e \u003ca\u003eB\u003c/a\u003e []\u003c/code\u003e will merge the module name and types\n from module B into module A, generating a third file:\n\u003c/p\u003e\u003cpre\u003e {-# LINE 1 \"A.hs\" #-}\n module MxYz123 where\n {-# LINE 3 \"B.hs\" #-}\n a :: Int\n {-# LINE 4 \"A.hs\" #-}\n a = 1\n\u003c/pre\u003e",
          "module": "System.Plugins.Make",
          "name": "makeWith",
          "package": "plugins",
          "signature": "FilePath-\u003e FilePath-\u003e [Arg]-\u003e IO MakeStatus",
          "type": "function"
        },
        "index": {
          "description": "This is variety of make that first calls merge to combine the plugin source with syntax stub The result is then compiled This is provided for EDSL authors who wish to add extra syntax to user source It is important to note that the module and types from the second file argument are used to override any of those that appear in the first argument For example consider the following source files module where Integer and module where Int Calling makeWith will merge the module name and types from module into module generating third file LINE A.hs module MxYz123 where LINE B.hs Int LINE A.hs",
          "hierarchy": "System Plugins Make",
          "module": "System.Plugins.Make",
          "name": "makeWith",
          "normalized": "FilePath-\u003eFilePath-\u003e[Arg]-\u003eIO MakeStatus",
          "package": "plugins",
          "partial": "With",
          "signature": "FilePath-\u003eFilePath-\u003e[Arg]-\u003eIO MakeStatus",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plugins/docs/System-Plugins-Make.html#v:makeWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMerge to source files into a temporary file. If we've tried to\n merge these two stub files before, then reuse the module name (helps\n recompilation checking)\n\u003c/p\u003e\u003cp\u003eThe merging operation is extremely useful for providing extra default\n syntax. An EDSL user then need not worry about declaring module\n names, or having required imports.  In this way, the stub file can\n also be used to provide syntax declarations that would be\n inconvenient to require of the plugin author. \n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003emerge\u003c/a\u003e\u003c/code\u003e will include any import and export declarations written in\n the stub, as well as any module name, so that plugin author's need\n not worry about this compulsory syntax. Additionally, if a plugin\n requires some non-standard library, which must be provided as a\n \u003ccode\u003e-package\u003c/code\u003e flag to GHC, they may specify this using the non-standard\n \u003ccode\u003eGLOBALOPTIONS\u003c/code\u003e pragma.  Options specified in the source this way\n will be added to the command line. This is useful for users who wish\n to use GHC flags that cannot be specified using the conventional\n \u003ccode\u003eOPTIONS\u003c/code\u003e pragma. The merging operation uses the parser hs-plugins\n was configured with, either \u003ccode\u003e\u003ca\u003eHaskell\u003c/a\u003e\u003c/code\u003e or the HSX parser, to\n parse Haskell source files.\n\u003c/p\u003e",
          "module": "System.Plugins.Make",
          "name": "merge",
          "package": "plugins",
          "signature": "FilePath -\u003e FilePath -\u003e IO MergeStatus",
          "source": "src/System-Plugins-Make.html#merge",
          "type": "function"
        },
        "index": {
          "description": "Merge to source files into temporary file If we ve tried to merge these two stub files before then reuse the module name helps recompilation checking The merging operation is extremely useful for providing extra default syntax An EDSL user then need not worry about declaring module names or having required imports In this way the stub file can also be used to provide syntax declarations that would be inconvenient to require of the plugin author merge will include any import and export declarations written in the stub as well as any module name so that plugin author need not worry about this compulsory syntax Additionally if plugin requires some non-standard library which must be provided as package flag to GHC they may specify this using the non-standard GLOBALOPTIONS pragma Options specified in the source this way will be added to the command line This is useful for users who wish to use GHC flags that cannot be specified using the conventional OPTIONS pragma The merging operation uses the parser hs-plugins was configured with either Haskell or the HSX parser to parse Haskell source files",
          "hierarchy": "System Plugins Make",
          "module": "System.Plugins.Make",
          "name": "merge",
          "normalized": "FilePath-\u003eFilePath-\u003eIO MergeStatus",
          "package": "plugins",
          "signature": "FilePath-\u003eFilePath-\u003eIO MergeStatus",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plugins/docs/System-Plugins-Make.html#v:merge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003emergeTo\u003c/a\u003e\u003c/code\u003e behaves like \u003ccode\u003e\u003ca\u003emerge\u003c/a\u003e\u003c/code\u003e, but we can specify the file in\n which to place output. \n\u003c/p\u003e",
          "module": "System.Plugins.Make",
          "name": "mergeTo",
          "package": "plugins",
          "signature": "FilePath -\u003e FilePath -\u003e FilePath -\u003e IO MergeStatus",
          "source": "src/System-Plugins-Make.html#mergeTo",
          "type": "function"
        },
        "index": {
          "description": "mergeTo behaves like merge but we can specify the file in which to place output",
          "hierarchy": "System Plugins Make",
          "module": "System.Plugins.Make",
          "name": "mergeTo",
          "normalized": "FilePath-\u003eFilePath-\u003eFilePath-\u003eIO MergeStatus",
          "package": "plugins",
          "partial": "To",
          "signature": "FilePath-\u003eFilePath-\u003eFilePath-\u003eIO MergeStatus",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plugins/docs/System-Plugins-Make.html#v:mergeTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003emergeToDir\u003c/a\u003e\u003c/code\u003e behaves like \u003ccode\u003e\u003ca\u003emerge\u003c/a\u003e\u003c/code\u003e, but lets you specify a target\n directory.\n\u003c/p\u003e",
          "module": "System.Plugins.Make",
          "name": "mergeToDir",
          "package": "plugins",
          "signature": "FilePath -\u003e FilePath -\u003e FilePath -\u003e IO MergeStatus",
          "source": "src/System-Plugins-Make.html#mergeToDir",
          "type": "function"
        },
        "index": {
          "description": "mergeToDir behaves like merge but lets you specify target directory",
          "hierarchy": "System Plugins Make",
          "module": "System.Plugins.Make",
          "name": "mergeToDir",
          "normalized": "FilePath-\u003eFilePath-\u003eFilePath-\u003eIO MergeStatus",
          "package": "plugins",
          "partial": "To Dir",
          "signature": "FilePath-\u003eFilePath-\u003eFilePath-\u003eIO MergeStatus",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plugins/docs/System-Plugins-Make.html#v:mergeToDir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003erecompileAll\u003c/a\u003e\u003c/code\u003e is like \u003ccode\u003e\u003ca\u003emakeAll\u003c/a\u003e\u003c/code\u003e, but rather than relying on \n \u003ccode\u003eghc --make\u003c/code\u003e, we explicitly check a module's dependencies using our\n internal map of module dependencies. Performance is thus better, and\n the result is more accurate.\n\u003c/p\u003e",
          "module": "System.Plugins.Make",
          "name": "recompileAll",
          "package": "plugins",
          "signature": "Module -\u003e [Arg] -\u003e IO MakeStatus",
          "source": "src/System-Plugins-Make.html#recompileAll",
          "type": "function"
        },
        "index": {
          "description": "recompileAll is like makeAll but rather than relying on ghc make we explicitly check module dependencies using our internal map of module dependencies Performance is thus better and the result is more accurate",
          "hierarchy": "System Plugins Make",
          "module": "System.Plugins.Make",
          "name": "recompileAll",
          "normalized": "Module-\u003e[Arg]-\u003eIO MakeStatus",
          "package": "plugins",
          "partial": "All",
          "signature": "Module-\u003e[Arg]-\u003eIO MakeStatus",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plugins/docs/System-Plugins-Make.html#v:recompileAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Plugins.Make",
          "name": "recompileAll'",
          "package": "plugins",
          "signature": "[String] -\u003e Module -\u003e [Arg] -\u003e IO MakeStatus",
          "source": "src/System-Plugins-Make.html#recompileAll%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Plugins Make",
          "module": "System.Plugins.Make",
          "name": "recompileAll'",
          "normalized": "[String]-\u003eModule-\u003e[Arg]-\u003eIO MakeStatus",
          "package": "plugins",
          "partial": "All'",
          "signature": "[String]-\u003eModule-\u003e[Arg]-\u003eIO MakeStatus",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plugins/docs/System-Plugins-Make.html#v:recompileAll-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Plugins.Parser",
          "name": "Parser",
          "package": "plugins",
          "source": "src/System-Plugins-Parser.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "System Plugins Parser",
          "module": "System.Plugins.Parser",
          "name": "Parser",
          "package": "plugins",
          "partial": "Parser",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/plugins/docs/System-Plugins-Parser.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA Haskell source module.\n\u003c/p\u003e",
          "module": "System.Plugins.Parser",
          "name": "HsModule",
          "package": "plugins",
          "type": "data"
        },
        "index": {
          "description": "Haskell source module",
          "hierarchy": "System Plugins Parser",
          "module": "System.Plugins.Parser",
          "name": "HsModule",
          "package": "plugins",
          "partial": "Hs Module",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/plugins/docs/System-Plugins-Parser.html#t:HsModule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Plugins.Parser",
          "name": "HsModule",
          "package": "plugins",
          "signature": "HsModule SrcLoc Module (Maybe [HsExportSpec]) [HsImportDecl] [HsDecl]",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Plugins Parser",
          "module": "System.Plugins.Parser",
          "name": "HsModule",
          "normalized": "HsModule SrcLoc Module(Maybe[HsExportSpec])[HsImportDecl][HsDecl]",
          "package": "plugins",
          "partial": "Hs Module",
          "signature": "HsModule SrcLoc Module(Maybe[HsExportSpec])[HsImportDecl][HsDecl]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plugins/docs/System-Plugins-Parser.html#v:HsModule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emergeModules : generate a full Haskell src file, give a .hs config\n file, and a stub to take default syntax and decls from. Mostly we\n just ensure they don't do anything bad, and that the names are\n correct for the module.\n\u003c/p\u003e\u003cp\u003eTransformations:\n\u003c/p\u003e\u003cp\u003e. Take src location pragmas from the conf file (1st file)\n      . Use the template's (2nd argument) module name\n      . Only use export list from template (2nd arg)\n      . Merge top-level decls\n      . need to force the type of the plugin to match the stub,\n      overwriting any type they supply.\n\u003c/p\u003e",
          "module": "System.Plugins.Parser",
          "name": "mergeModules",
          "package": "plugins",
          "signature": "HsModule -\u003e HsModule -\u003e HsModule",
          "source": "src/System-Plugins-Parser.html#mergeModules",
          "type": "function"
        },
        "index": {
          "description": "mergeModules generate full Haskell src file give hs config file and stub to take default syntax and decls from Mostly we just ensure they don do anything bad and that the names are correct for the module Transformations Take src location pragmas from the conf file st file Use the template nd argument module name Only use export list from template nd arg Merge top-level decls need to force the type of the plugin to match the stub overwriting any type they supply",
          "hierarchy": "System Plugins Parser",
          "module": "System.Plugins.Parser",
          "name": "mergeModules",
          "normalized": "HsModule-\u003eHsModule-\u003eHsModule",
          "package": "plugins",
          "partial": "Modules",
          "signature": "HsModule-\u003eHsModule-\u003eHsModule",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plugins/docs/System-Plugins-Parser.html#v:mergeModules"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eparse a file (as a string) as Haskell src\n\u003c/p\u003e",
          "module": "System.Plugins.Parser",
          "name": "parse",
          "package": "plugins",
          "signature": "FilePath-\u003e String-\u003e Either String HsModule",
          "type": "function"
        },
        "index": {
          "description": "parse file as string as Haskell src",
          "hierarchy": "System Plugins Parser",
          "module": "System.Plugins.Parser",
          "name": "parse",
          "normalized": "FilePath-\u003eString-\u003eEither String HsModule",
          "package": "plugins",
          "signature": "FilePath-\u003eString-\u003eEither String HsModule",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plugins/docs/System-Plugins-Parser.html#v:parse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParsing option pragmas.\n\u003c/p\u003e\u003cp\u003eThis is not a type checker. If the user supplies bogus options,\n they'll get slightly mystical error messages. Also, we \u003cem\u003ewant\u003c/em\u003e to\n handle -package options, and other \u003cem\u003estatic\u003c/em\u003e flags. This is more than\n GHC.\n\u003c/p\u003e\u003cp\u003eGHC user's guide : \n\u003c/p\u003e\u003cpre\u003e    OPTIONS pragmas are only looked for at the top of your source\n    files, up to the first (non-literate,non-empty) line not\n    containing OPTIONS. Multiple OPTIONS pragmas are recognised.\n\u003c/pre\u003e\u003cp\u003ebased on getOptionsFromSource(), in main/DriverUtil.hs\n\u003c/p\u003e",
          "module": "System.Plugins.Parser",
          "name": "parsePragmas",
          "package": "plugins",
          "signature": "String-\u003e ([String], [String])",
          "type": "function"
        },
        "index": {
          "description": "Parsing option pragmas This is not type checker If the user supplies bogus options they ll get slightly mystical error messages Also we want to handle package options and other static flags This is more than GHC GHC user guide OPTIONS pragmas are only looked for at the top of your source files up to the first non-literate non-empty line not containing OPTIONS Multiple OPTIONS pragmas are recognised based on getOptionsFromSource in main DriverUtil.hs",
          "hierarchy": "System Plugins Parser",
          "module": "System.Plugins.Parser",
          "name": "parsePragmas",
          "normalized": "String-\u003e([String],[String])",
          "package": "plugins",
          "partial": "Pragmas",
          "signature": "String-\u003e([String],[String])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plugins/docs/System-Plugins-Parser.html#v:parsePragmas"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003epretty print haskell src\n\u003c/p\u003e\u003cp\u003edoesn't handle operators with '#' at the end. i.e. unsafeCoerce#\n\u003c/p\u003e",
          "module": "System.Plugins.Parser",
          "name": "pretty",
          "package": "plugins",
          "signature": "HsModule -\u003e String",
          "source": "src/System-Plugins-Parser.html#pretty",
          "type": "function"
        },
        "index": {
          "description": "pretty print haskell src doesn handle operators with at the end i.e unsafeCoerce",
          "hierarchy": "System Plugins Parser",
          "module": "System.Plugins.Parser",
          "name": "pretty",
          "normalized": "HsModule-\u003eString",
          "package": "plugins",
          "signature": "HsModule-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plugins/docs/System-Plugins-Parser.html#v:pretty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ereplace Module name with String.\n\u003c/p\u003e",
          "module": "System.Plugins.Parser",
          "name": "replaceModName",
          "package": "plugins",
          "signature": "HsModule -\u003e String -\u003e HsModule",
          "source": "src/System-Plugins-Parser.html#replaceModName",
          "type": "function"
        },
        "index": {
          "description": "replace Module name with String",
          "hierarchy": "System Plugins Parser",
          "module": "System.Plugins.Parser",
          "name": "replaceModName",
          "normalized": "HsModule-\u003eString-\u003eHsModule",
          "package": "plugins",
          "partial": "Mod Name",
          "signature": "HsModule-\u003eString-\u003eHsModule",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plugins/docs/System-Plugins-Parser.html#v:replaceModName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA Posix.popen compatibility mapping.\n\u003c/p\u003e\u003cp\u003eIf we use this, we should build -threaded\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Plugins.Process",
          "name": "Process",
          "package": "plugins",
          "source": "src/System-Plugins-Process.html",
          "type": "module"
        },
        "index": {
          "description": "Posix.popen compatibility mapping If we use this we should build threaded",
          "hierarchy": "System Plugins Process",
          "module": "System.Plugins.Process",
          "name": "Process",
          "package": "plugins",
          "partial": "Process",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/plugins/docs/System-Plugins-Process.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Plugins.Process",
          "name": "exec",
          "package": "plugins",
          "signature": "String -\u003e [String] -\u003e IO ([String], [String])",
          "source": "src/System-Plugins-Process.html#exec",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Plugins Process",
          "module": "System.Plugins.Process",
          "name": "exec",
          "normalized": "String-\u003e[String]-\u003eIO([String],[String])",
          "package": "plugins",
          "signature": "String-\u003e[String]-\u003eIO([String],[String])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plugins/docs/System-Plugins-Process.html#v:exec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Plugins.Process",
          "name": "popen",
          "package": "plugins",
          "signature": "FilePath -\u003e [String] -\u003e Maybe String -\u003e IO (String, String, ProcessID)",
          "source": "src/System-Plugins-Process.html#popen",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Plugins Process",
          "module": "System.Plugins.Process",
          "name": "popen",
          "normalized": "FilePath-\u003e[String]-\u003eMaybe String-\u003eIO(String,String,ProcessID)",
          "package": "plugins",
          "signature": "FilePath-\u003e[String]-\u003eMaybe String-\u003eIO(String,String,ProcessID)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plugins/docs/System-Plugins-Process.html#v:popen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Plugins.Utils",
          "name": "Utils",
          "package": "plugins",
          "source": "src/System-Plugins-Utils.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "System Plugins Utils",
          "module": "System.Plugins.Utils",
          "name": "Utils",
          "package": "plugins",
          "partial": "Utils",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/plugins/docs/System-Plugins-Utils.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Plugins.Utils",
          "name": "Arg",
          "package": "plugins",
          "source": "src/System-Plugins-Utils.html#Arg",
          "type": "type"
        },
        "index": {
          "hierarchy": "System Plugins Utils",
          "module": "System.Plugins.Utils",
          "name": "Arg",
          "package": "plugins",
          "partial": "Arg",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/plugins/docs/System-Plugins-Utils.html#t:Arg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ereturn the Z-Encoding of the string.\n\u003c/p\u003e\u003cp\u003eStolen from GHC. Use -package ghc as soon as possible\n\u003c/p\u003e",
          "module": "System.Plugins.Utils",
          "name": "EncodedString",
          "package": "plugins",
          "source": "src/System-Plugins-Utils.html#EncodedString",
          "type": "type"
        },
        "index": {
          "description": "return the Z-Encoding of the string Stolen from GHC Use package ghc as soon as possible",
          "hierarchy": "System Plugins Utils",
          "module": "System.Plugins.Utils",
          "name": "EncodedString",
          "package": "plugins",
          "partial": "Encoded String",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/plugins/docs/System-Plugins-Utils.html#t:EncodedString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ca\u003e/\u003c/a\u003e, \u003ca\u003e.\u003c/a\u003e : join two path components\n\u003c/p\u003e",
          "module": "System.Plugins.Utils",
          "name": "(\u003c+\u003e)",
          "package": "plugins",
          "signature": "FilePath -\u003e FilePath -\u003e FilePath",
          "source": "src/System-Plugins-Utils.html#%3C%2B%3E",
          "type": "function"
        },
        "index": {
          "description": "join two path components",
          "hierarchy": "System Plugins Utils",
          "module": "System.Plugins.Utils",
          "name": "(\u003c+\u003e) \u003c+\u003e",
          "normalized": "FilePath-\u003eFilePath-\u003eFilePath",
          "package": "plugins",
          "signature": "FilePath-\u003eFilePath-\u003eFilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plugins/docs/System-Plugins-Utils.html#v:-60--43--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ca\u003e/\u003c/a\u003e, \u003ca\u003e.\u003c/a\u003e : join two path components\n\u003c/p\u003e",
          "module": "System.Plugins.Utils",
          "name": "(\u003c/\u003e)",
          "package": "plugins",
          "signature": "FilePath -\u003e FilePath -\u003e FilePath",
          "source": "src/System-Plugins-Utils.html#%3C%2F%3E",
          "type": "function"
        },
        "index": {
          "description": "join two path components",
          "hierarchy": "System Plugins Utils",
          "module": "System.Plugins.Utils",
          "name": "(\u003c/\u003e) \u003c/\u003e",
          "normalized": "FilePath-\u003eFilePath-\u003eFilePath",
          "package": "plugins",
          "signature": "FilePath-\u003eFilePath-\u003eFilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plugins/docs/System-Plugins-Utils.html#v:-60--47--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ca\u003e/\u003c/a\u003e, \u003ca\u003e.\u003c/a\u003e : join two path components\n\u003c/p\u003e",
          "module": "System.Plugins.Utils",
          "name": "(\u003c\u003e)",
          "package": "plugins",
          "signature": "FilePath -\u003e FilePath -\u003e FilePath",
          "source": "src/System-Plugins-Utils.html#%3C%3E",
          "type": "function"
        },
        "index": {
          "description": "join two path components",
          "hierarchy": "System Plugins Utils",
          "module": "System.Plugins.Utils",
          "name": "(\u003c\u003e) \u003c\u003e",
          "normalized": "FilePath-\u003eFilePath-\u003eFilePath",
          "package": "plugins",
          "signature": "FilePath-\u003eFilePath-\u003eFilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plugins/docs/System-Plugins-Utils.html#v:-60--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ca\u003e/\u003c/a\u003e, \u003ca\u003e.\u003c/a\u003e : join two path components\n\u003c/p\u003e",
          "module": "System.Plugins.Utils",
          "name": "(\u003c.\u003e)",
          "package": "plugins",
          "signature": "FilePath -\u003e FilePath -\u003e FilePath",
          "source": "src/System-Plugins-Utils.html#%3C.%3E",
          "type": "function"
        },
        "index": {
          "description": "join two path components",
          "hierarchy": "System Plugins Utils",
          "module": "System.Plugins.Utils",
          "name": "(\u003c.\u003e) \u003c.\u003e",
          "normalized": "FilePath-\u003eFilePath-\u003eFilePath",
          "package": "plugins",
          "signature": "FilePath-\u003eFilePath-\u003eFilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plugins/docs/System-Plugins-Utils.html#v:-60-.-62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ebasename : return the filename portion of a path\n\u003c/p\u003e",
          "module": "System.Plugins.Utils",
          "name": "basename",
          "package": "plugins",
          "signature": "FilePath -\u003e FilePath",
          "source": "src/System-Plugins-Utils.html#basename",
          "type": "function"
        },
        "index": {
          "description": "basename return the filename portion of path",
          "hierarchy": "System Plugins Utils",
          "module": "System.Plugins.Utils",
          "name": "basename",
          "normalized": "FilePath-\u003eFilePath",
          "package": "plugins",
          "signature": "FilePath-\u003eFilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plugins/docs/System-Plugins-Utils.html#v:basename"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChanges the extension of a file path.\n\u003c/p\u003e",
          "module": "System.Plugins.Utils",
          "name": "changeFileExt",
          "package": "plugins",
          "signature": "FilePath-\u003e String-\u003e FilePath",
          "type": "function"
        },
        "index": {
          "description": "Changes the extension of file path",
          "hierarchy": "System Plugins Utils",
          "module": "System.Plugins.Utils",
          "name": "changeFileExt",
          "normalized": "FilePath-\u003eString-\u003eFilePath",
          "package": "plugins",
          "partial": "File Ext",
          "signature": "FilePath-\u003eString-\u003eFilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plugins/docs/System-Plugins-Utils.html#v:changeFileExt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Plugins.Utils",
          "name": "decode",
          "package": "plugins",
          "signature": "EncodedString -\u003e String",
          "source": "src/System-Plugins-Utils.html#decode",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Plugins Utils",
          "module": "System.Plugins.Utils",
          "name": "decode",
          "normalized": "EncodedString-\u003eString",
          "package": "plugins",
          "signature": "EncodedString-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plugins/docs/System-Plugins-Utils.html#v:decode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edirname : return the directory portion of a file path\n if null, return \u003ca\u003e.\u003c/a\u003e\n\u003c/p\u003e",
          "module": "System.Plugins.Utils",
          "name": "dirname",
          "package": "plugins",
          "signature": "FilePath -\u003e FilePath",
          "source": "src/System-Plugins-Utils.html#dirname",
          "type": "function"
        },
        "index": {
          "description": "dirname return the directory portion of file path if null return",
          "hierarchy": "System Plugins Utils",
          "module": "System.Plugins.Utils",
          "name": "dirname",
          "normalized": "FilePath-\u003eFilePath",
          "package": "plugins",
          "signature": "FilePath-\u003eFilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plugins/docs/System-Plugins-Utils.html#v:dirname"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Plugins.Utils",
          "name": "dropSuffix",
          "package": "plugins",
          "signature": "FilePath -\u003e FilePath",
          "source": "src/System-Plugins-Utils.html#dropSuffix",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Plugins Utils",
          "module": "System.Plugins.Utils",
          "name": "dropSuffix",
          "normalized": "FilePath-\u003eFilePath",
          "package": "plugins",
          "partial": "Suffix",
          "signature": "FilePath-\u003eFilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plugins/docs/System-Plugins-Utils.html#v:dropSuffix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Plugins.Utils",
          "name": "encode",
          "package": "plugins",
          "signature": "String -\u003e EncodedString",
          "source": "src/System-Plugins-Utils.html#encode",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Plugins Utils",
          "module": "System.Plugins.Utils",
          "name": "encode",
          "normalized": "String-\u003eEncodedString",
          "package": "plugins",
          "signature": "String-\u003eEncodedString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plugins/docs/System-Plugins-Utils.html#v:encode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Plugins.Utils",
          "name": "findFile",
          "package": "plugins",
          "signature": "[String] -\u003e FilePath -\u003e IO (Maybe FilePath)",
          "source": "src/System-Plugins-Utils.html#findFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Plugins Utils",
          "module": "System.Plugins.Utils",
          "name": "findFile",
          "normalized": "[String]-\u003eFilePath-\u003eIO(Maybe FilePath)",
          "package": "plugins",
          "partial": "File",
          "signature": "[String]-\u003eFilePath-\u003eIO(Maybe FilePath)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plugins/docs/System-Plugins-Utils.html#v:findFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Plugins.Utils",
          "name": "hMkUnique",
          "package": "plugins",
          "signature": "IO (FilePath, Handle)",
          "source": "src/System-Plugins-Utils.html#hMkUnique",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Plugins Utils",
          "module": "System.Plugins.Utils",
          "name": "hMkUnique",
          "normalized": "IO(FilePath,Handle)",
          "package": "plugins",
          "partial": "Mk Unique",
          "signature": "IO(FilePath,Handle)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plugins/docs/System-Plugins-Utils.html#v:hMkUnique"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Plugins.Utils",
          "name": "hMkUniqueIn",
          "package": "plugins",
          "signature": "FilePath -\u003e IO (FilePath, Handle)",
          "source": "src/System-Plugins-Utils.html#hMkUniqueIn",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Plugins Utils",
          "module": "System.Plugins.Utils",
          "name": "hMkUniqueIn",
          "normalized": "FilePath-\u003eIO(FilePath,Handle)",
          "package": "plugins",
          "partial": "Mk Unique In",
          "signature": "FilePath-\u003eIO(FilePath,Handle)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plugins/docs/System-Plugins-Utils.html#v:hMkUniqueIn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ewriteFile for Handles\n\u003c/p\u003e",
          "module": "System.Plugins.Utils",
          "name": "hWrite",
          "package": "plugins",
          "signature": "Handle -\u003e String -\u003e IO ()",
          "source": "src/System-Plugins-Utils.html#hWrite",
          "type": "function"
        },
        "index": {
          "description": "writeFile for Handles",
          "hierarchy": "System Plugins Utils",
          "module": "System.Plugins.Utils",
          "name": "hWrite",
          "normalized": "Handle-\u003eString-\u003eIO()",
          "package": "plugins",
          "partial": "Write",
          "signature": "Handle-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plugins/docs/System-Plugins-Utils.html#v:hWrite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Plugins.Utils",
          "name": "isSublistOf",
          "package": "plugins",
          "signature": "[a] -\u003e [a] -\u003e Bool",
          "source": "src/System-Plugins-Utils.html#isSublistOf",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Plugins Utils",
          "module": "System.Plugins.Utils",
          "name": "isSublistOf",
          "normalized": "[a]-\u003e[a]-\u003eBool",
          "package": "plugins",
          "partial": "Sublist Of",
          "signature": "[a]-\u003e[a]-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plugins/docs/System-Plugins-Utils.html#v:isSublistOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ejoinFileExt\u003c/a\u003e\u003c/code\u003e function is the opposite of \u003ccode\u003e\u003ca\u003esplitFileExt\u003c/a\u003e\u003c/code\u003e.\n It joins a file name and an extension to form a complete file path.\n\u003c/p\u003e\u003cp\u003eThe general rule is:\n\u003c/p\u003e\u003cpre\u003e filename `joinFileExt` ext == path\n   where\n     (filename,ext) = splitFileExt path\n\u003c/pre\u003e",
          "module": "System.Plugins.Utils",
          "name": "joinFileExt",
          "package": "plugins",
          "signature": "String -\u003e String -\u003e FilePath",
          "source": "src/System-Plugins-Utils.html#joinFileExt",
          "type": "function"
        },
        "index": {
          "description": "The joinFileExt function is the opposite of splitFileExt It joins file name and an extension to form complete file path The general rule is filename joinFileExt ext path where filename ext splitFileExt path",
          "hierarchy": "System Plugins Utils",
          "module": "System.Plugins.Utils",
          "name": "joinFileExt",
          "normalized": "String-\u003eString-\u003eFilePath",
          "package": "plugins",
          "partial": "File Ext",
          "signature": "String-\u003eString-\u003eFilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plugins/docs/System-Plugins-Utils.html#v:joinFileExt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ework out the mod name from a filepath\n\u003c/p\u003e",
          "module": "System.Plugins.Utils",
          "name": "mkModid",
          "package": "plugins",
          "signature": "String -\u003e String",
          "source": "src/System-Plugins-Utils.html#mkModid",
          "type": "function"
        },
        "index": {
          "description": "work out the mod name from filepath",
          "hierarchy": "System Plugins Utils",
          "module": "System.Plugins.Utils",
          "name": "mkModid",
          "normalized": "String-\u003eString",
          "package": "plugins",
          "partial": "Modid",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plugins/docs/System-Plugins-Utils.html#v:mkModid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emkstemps.\n\u003c/p\u003e\u003cp\u003eWe use the Haskell version now... it is faster than calling into\n mkstemps(3).\n\u003c/p\u003e\u003cp\u003ecreate a new temp file, returning name and handle.\n bit like the mktemp shell utility\n\u003c/p\u003e",
          "module": "System.Plugins.Utils",
          "name": "mkTemp",
          "package": "plugins",
          "signature": "IO (String, Handle)",
          "source": "src/System-Plugins-Utils.html#mkTemp",
          "type": "function"
        },
        "index": {
          "description": "mkstemps We use the Haskell version now it is faster than calling into mkstemps create new temp file returning name and handle bit like the mktemp shell utility",
          "hierarchy": "System Plugins Utils",
          "module": "System.Plugins.Utils",
          "name": "mkTemp",
          "normalized": "IO(String,Handle)",
          "package": "plugins",
          "partial": "Temp",
          "signature": "IO(String,Handle)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plugins/docs/System-Plugins-Utils.html#v:mkTemp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Plugins.Utils",
          "name": "mkTempIn",
          "package": "plugins",
          "signature": "String -\u003e IO (String, Handle)",
          "source": "src/System-Plugins-Utils.html#mkTempIn",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Plugins Utils",
          "module": "System.Plugins.Utils",
          "name": "mkTempIn",
          "normalized": "String-\u003eIO(String,Handle)",
          "package": "plugins",
          "partial": "Temp In",
          "signature": "String-\u003eIO(String,Handle)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plugins/docs/System-Plugins-Utils.html#v:mkTempIn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a new temp file, unique from those in /tmp, and from those\n modules already loaded. Very nice for merge/eval uses.\n\u003c/p\u003e\u003cp\u003eWill run for a long time if we can't create a temp file, luckily\n mkstemps gives us a pretty big search space\n\u003c/p\u003e",
          "module": "System.Plugins.Utils",
          "name": "mkUnique",
          "package": "plugins",
          "signature": "IO FilePath",
          "source": "src/System-Plugins-Utils.html#mkUnique",
          "type": "function"
        },
        "index": {
          "description": "Get new temp file unique from those in tmp and from those modules already loaded Very nice for merge eval uses Will run for long time if we can create temp file luckily mkstemps gives us pretty big search space",
          "hierarchy": "System Plugins Utils",
          "module": "System.Plugins.Utils",
          "name": "mkUnique",
          "package": "plugins",
          "partial": "Unique",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plugins/docs/System-Plugins-Utils.html#v:mkUnique"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Plugins.Utils",
          "name": "mkUniqueIn",
          "package": "plugins",
          "signature": "FilePath -\u003e IO FilePath",
          "source": "src/System-Plugins-Utils.html#mkUniqueIn",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Plugins Utils",
          "module": "System.Plugins.Utils",
          "name": "mkUniqueIn",
          "normalized": "FilePath-\u003eIO FilePath",
          "package": "plugins",
          "partial": "Unique In",
          "signature": "FilePath-\u003eIO FilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plugins/docs/System-Plugins-Utils.html#v:mkUniqueIn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eis file1 newer than file2?\n\u003c/p\u003e\u003cp\u003eneeds some fixing to work with 6.0.x series. (is this true?)\n\u003c/p\u003e\u003cp\u003efileExist still seems to throw exceptions on some platforms: ia64 in\n particular.\n\u003c/p\u003e\u003cp\u003einvarient : we already assume the first file, \u003ccode\u003ea\u003c/code\u003e, exists\n\u003c/p\u003e",
          "module": "System.Plugins.Utils",
          "name": "newer",
          "package": "plugins",
          "signature": "FilePath -\u003e FilePath -\u003e IO Bool",
          "source": "src/System-Plugins-Utils.html#newer",
          "type": "function"
        },
        "index": {
          "description": "is file1 newer than file2 needs some fixing to work with series is this true fileExist still seems to throw exceptions on some platforms ia64 in particular invarient we already assume the first file exists",
          "hierarchy": "System Plugins Utils",
          "module": "System.Plugins.Utils",
          "name": "newer",
          "normalized": "FilePath-\u003eFilePath-\u003eIO Bool",
          "package": "plugins",
          "signature": "FilePath-\u003eFilePath-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plugins/docs/System-Plugins-Utils.html#v:newer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Plugins.Utils",
          "name": "outFilePath",
          "package": "plugins",
          "signature": "FilePath -\u003e [Arg] -\u003e (FilePath, FilePath)",
          "source": "src/System-Plugins-Utils.html#outFilePath",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Plugins Utils",
          "module": "System.Plugins.Utils",
          "name": "outFilePath",
          "normalized": "FilePath-\u003e[Arg]-\u003e(FilePath,FilePath)",
          "package": "plugins",
          "partial": "File Path",
          "signature": "FilePath-\u003e[Arg]-\u003e(FilePath,FilePath)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plugins/docs/System-Plugins-Utils.html#v:outFilePath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003euseful\n\u003c/p\u003e",
          "module": "System.Plugins.Utils",
          "name": "panic",
          "package": "plugins",
          "signature": "String -\u003e IO a",
          "source": "src/System-Plugins-Utils.html#panic",
          "type": "function"
        },
        "index": {
          "description": "useful",
          "hierarchy": "System Plugins Utils",
          "module": "System.Plugins.Utils",
          "name": "panic",
          "normalized": "String-\u003eIO a",
          "package": "plugins",
          "signature": "String-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plugins/docs/System-Plugins-Utils.html#v:panic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ereturn the object file, given the .conf file\n i.e. \u003cem\u003ehome\u003c/em\u003edons\u003cem\u003efoo.rc -\u003e \u003c/em\u003ehome\u003cem\u003edons\u003c/em\u003efoo.o\n\u003c/p\u003e\u003cp\u003ewe depend on the suffix we are given having a lead \u003ccode\u003e\u003ca\u003e.\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "System.Plugins.Utils",
          "name": "replaceSuffix",
          "package": "plugins",
          "signature": "FilePath -\u003e String -\u003e FilePath",
          "source": "src/System-Plugins-Utils.html#replaceSuffix",
          "type": "function"
        },
        "index": {
          "description": "return the object file given the conf file i.e home dons foo.rc home dons foo.o we depend on the suffix we are given having lead",
          "hierarchy": "System Plugins Utils",
          "module": "System.Plugins.Utils",
          "name": "replaceSuffix",
          "normalized": "FilePath-\u003eString-\u003eFilePath",
          "package": "plugins",
          "partial": "Suffix",
          "signature": "FilePath-\u003eString-\u003eFilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plugins/docs/System-Plugins-Utils.html#v:replaceSuffix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplit the path into file name and extension. If the file doesn't have extension,\n the function will return empty string. The extension doesn't include a leading period.\n\u003c/p\u003e\u003cp\u003eExamples:\n\u003c/p\u003e\u003cpre\u003e splitFileExt \"foo.ext\" == (\"foo\", \"ext\")\n splitFileExt \"foo\"     == (\"foo\", \"\")\n splitFileExt \".\"       == (\".\",   \"\")\n splitFileExt \"..\"      == (\"..\",  \"\")\n splitFileExt \"foo.bar.\"== (\"foo.bar.\", \"\")\n\u003c/pre\u003e",
          "module": "System.Plugins.Utils",
          "name": "splitFileExt",
          "package": "plugins",
          "signature": "FilePath -\u003e (String, String)",
          "source": "src/System-Plugins-Utils.html#splitFileExt",
          "type": "function"
        },
        "index": {
          "description": "Split the path into file name and extension If the file doesn have extension the function will return empty string The extension doesn include leading period Examples splitFileExt foo.ext foo ext splitFileExt foo foo splitFileExt splitFileExt splitFileExt foo.bar foo.bar",
          "hierarchy": "System Plugins Utils",
          "module": "System.Plugins.Utils",
          "name": "splitFileExt",
          "normalized": "FilePath-\u003e(String,String)",
          "package": "plugins",
          "partial": "File Ext",
          "signature": "FilePath-\u003e(String,String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/plugins/docs/System-Plugins-Utils.html#v:splitFileExt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Plugins",
          "name": "Plugins",
          "package": "plugins",
          "source": "src/System-Plugins.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "System Plugins",
          "module": "System.Plugins",
          "name": "Plugins",
          "package": "plugins",
          "partial": "Plugins",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/plugins/docs/System-Plugins.html#"
      }
    }
  ]
]