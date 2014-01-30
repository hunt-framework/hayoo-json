[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Glob/docs/System-FilePath-Glob-Primitive.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA number of primitives from which complete \u003ccode\u003e\u003ca\u003ePattern\u003c/a\u003e\u003c/code\u003es may be constructed.\n\u003c/p\u003e\u003cp\u003eUsing this together with the functions provided by the \u003ccode\u003eMonoid\u003c/code\u003e instance of\n \u003ccode\u003e\u003ca\u003ePattern\u003c/a\u003e\u003c/code\u003e allows for direct manipulation of \u003ccode\u003e\u003ca\u003ePattern\u003c/a\u003e\u003c/code\u003es beyond what can be\n done with just the \u003ccode\u003ecompile\u003c/code\u003e family of functions. And of course you don't\n have to go via \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003es if you use these.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.FilePath.Glob.Primitive",
        "fct-package": "Glob",
        "fct-signature": "module",
        "fct-source": "src/System-FilePath-Glob-Primitive.html",
        "fct-type": "module",
        "title": "Primitive"
      },
      "index": {
        "description": "number of primitives from which complete Pattern may be constructed Using this together with the functions provided by the Monoid instance of Pattern allows for direct manipulation of Pattern beyond what can be done with just the compile family of functions And of course you don have to go via String if you use these",
        "hierarchy": "System FilePath Glob Primitive",
        "module": "System.FilePath.Glob.Primitive",
        "name": "Primitive",
        "normalized": "",
        "package": "Glob",
        "partial": "Primitive",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Glob/docs/System-FilePath-Glob-Primitive.html#v:charRange",
      "description": {
        "fct-descr": "\u003cp\u003eMatches a single character if it is within the (inclusive) range in any\n \u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e or if it is equal to the character in any \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e. Corresponds to the\n \u003ccode\u003e[]\u003c/code\u003e, \u003ccode\u003e[^]\u003c/code\u003e and \u003ccode\u003e[!]\u003c/code\u003e operators.\n\u003c/p\u003e\u003cp\u003eIf the given \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e is \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e, the result of the match is inverted: the\n match succeeds if the character does \u003cem\u003enot\u003c/em\u003e match according to the above\n rules.\n\u003c/p\u003e",
        "fct-module": "System.FilePath.Glob.Primitive",
        "fct-package": "Glob",
        "fct-signature": "Bool -\u003e [Either Char (Char, Char)] -\u003e Pattern",
        "fct-source": "src/System-FilePath-Glob-Primitive.html#charRange",
        "fct-type": "function",
        "title": "charRange"
      },
      "index": {
        "description": "Matches single character if it is within the inclusive range in any Right or if it is equal to the character in any Left Corresponds to the and operators If the given Bool is False the result of the match is inverted the match succeeds if the character does not match according to the above rules",
        "hierarchy": "System FilePath Glob Primitive",
        "module": "System.FilePath.Glob.Primitive",
        "name": "charRange",
        "normalized": "Bool-\u003e[Either Char(Char,Char)]-\u003ePattern",
        "package": "Glob",
        "partial": "Range",
        "signature": "Bool-\u003e[Either Char(Char,Char)]-\u003ePattern"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Glob/docs/System-FilePath-Glob-Primitive.html#v:literal",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003ePattern\u003c/a\u003e\u003c/code\u003e which matches the given \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e literally.\n\u003c/p\u003e\u003cp\u003eHandles any embedded path and extension separators.\n\u003c/p\u003e",
        "fct-module": "System.FilePath.Glob.Primitive",
        "fct-package": "Glob",
        "fct-signature": "String -\u003e Pattern",
        "fct-source": "src/System-FilePath-Glob-Primitive.html#literal",
        "fct-type": "function",
        "title": "literal"
      },
      "index": {
        "description": "Pattern which matches the given String literally Handles any embedded path and extension separators",
        "hierarchy": "System FilePath Glob Primitive",
        "module": "System.FilePath.Glob.Primitive",
        "name": "literal",
        "normalized": "String-\u003ePattern",
        "package": "Glob",
        "partial": "",
        "signature": "String-\u003ePattern"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Glob/docs/System-FilePath-Glob-Primitive.html#v:numberRange",
      "description": {
        "fct-descr": "\u003cp\u003eMatches a number in the given range, which may be open, half-open, or\n closed. Corresponds to the \u003ccode\u003e\u003c\u003e\u003c/code\u003e operator.\n\u003c/p\u003e",
        "fct-module": "System.FilePath.Glob.Primitive",
        "fct-package": "Glob",
        "fct-signature": "Maybe Integer -\u003e Maybe Integer -\u003e Pattern",
        "fct-source": "src/System-FilePath-Glob-Primitive.html#numberRange",
        "fct-type": "function",
        "title": "numberRange"
      },
      "index": {
        "description": "Matches number in the given range which may be open half-open or closed Corresponds to the operator",
        "hierarchy": "System FilePath Glob Primitive",
        "module": "System.FilePath.Glob.Primitive",
        "name": "numberRange",
        "normalized": "Maybe Integer-\u003eMaybe Integer-\u003ePattern",
        "package": "Glob",
        "partial": "Range",
        "signature": "Maybe Integer-\u003eMaybe Integer-\u003ePattern"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Glob/docs/System-FilePath-Glob-Primitive.html#v:recursiveWildcard",
      "description": {
        "fct-descr": "\u003cp\u003eMatches any number of characters including path separators: corresponds to\n the \u003ccode\u003e**/\u003c/code\u003e operator.\n\u003c/p\u003e",
        "fct-module": "System.FilePath.Glob.Primitive",
        "fct-package": "Glob",
        "fct-signature": "Pattern",
        "fct-source": "src/System-FilePath-Glob-Primitive.html#recursiveWildcard",
        "fct-type": "function",
        "title": "recursiveWildcard"
      },
      "index": {
        "description": "Matches any number of characters including path separators corresponds to the operator",
        "hierarchy": "System FilePath Glob Primitive",
        "module": "System.FilePath.Glob.Primitive",
        "name": "recursiveWildcard",
        "normalized": "",
        "package": "Glob",
        "partial": "Wildcard",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Glob/docs/System-FilePath-Glob-Primitive.html#v:singleWildcard",
      "description": {
        "fct-descr": "\u003cp\u003eMatches any single character except a path separator: corresponds to the\n \u003ccode\u003e?\u003c/code\u003e operator.\n\u003c/p\u003e",
        "fct-module": "System.FilePath.Glob.Primitive",
        "fct-package": "Glob",
        "fct-signature": "Pattern",
        "fct-source": "src/System-FilePath-Glob-Primitive.html#singleWildcard",
        "fct-type": "function",
        "title": "singleWildcard"
      },
      "index": {
        "description": "Matches any single character except path separator corresponds to the operator",
        "hierarchy": "System FilePath Glob Primitive",
        "module": "System.FilePath.Glob.Primitive",
        "name": "singleWildcard",
        "normalized": "",
        "package": "Glob",
        "partial": "Wildcard",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Glob/docs/System-FilePath-Glob-Primitive.html#v:wildcard",
      "description": {
        "fct-descr": "\u003cp\u003eMatches any number of characters up to a path separator: corresponds to the\n \u003ccode\u003e*\u003c/code\u003e operator.\n\u003c/p\u003e",
        "fct-module": "System.FilePath.Glob.Primitive",
        "fct-package": "Glob",
        "fct-signature": "Pattern",
        "fct-source": "src/System-FilePath-Glob-Primitive.html#wildcard",
        "fct-type": "function",
        "title": "wildcard"
      },
      "index": {
        "description": "Matches any number of characters up to path separator corresponds to the operator",
        "hierarchy": "System FilePath Glob Primitive",
        "module": "System.FilePath.Glob.Primitive",
        "name": "wildcard",
        "normalized": "",
        "package": "Glob",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Glob/docs/System-FilePath-Glob.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA library for globbing: matching patterns against file paths akin to the\n POSIX \u003ccode\u003eglob()\u003c/code\u003e function.\n\u003c/p\u003e\u003cp\u003ePattern syntax is documented by \u003ccode\u003e\u003ca\u003ecompile\u003c/a\u003e\u003c/code\u003e. To toggle features at compile\n time, look into \u003ccode\u003e\u003ca\u003eCompOptions\u003c/a\u003e\u003c/code\u003e. To modify matching behaviour, look into\n \u003ccode\u003e\u003ca\u003eMatchOptions\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eBasic usage examples:\n\u003c/p\u003e\u003cp\u003eMatching a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e pattern against a \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003ematch\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003ecompile\u003c/a\u003e\u003c/code\u003e pattern) filepath\n\u003c/pre\u003e\u003cp\u003eMatching a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e pattern against all paths in the current working\n directory:\n\u003c/p\u003e\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003eglob\u003c/a\u003e\u003c/code\u003e pattern\n\u003c/pre\u003e\u003cp\u003eMatching a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e pattern against all paths in a given directory (a\n \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e):\n\u003c/p\u003e\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003eglobDir1\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003ecompile\u003c/a\u003e\u003c/code\u003e pattern) directorypath\n\u003c/pre\u003e\u003cp\u003eMatching a list of \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e patterns against all paths in a given directory,\n returning the matches for each pattern as well as the paths not matched by\n any of the patterns:\n\u003c/p\u003e\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003eglobDir\u003c/a\u003e\u003c/code\u003e (map \u003ccode\u003e\u003ca\u003ecompile\u003c/a\u003e\u003c/code\u003e patterns) directorypath\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "System.FilePath.Glob",
        "fct-package": "Glob",
        "fct-signature": "module",
        "fct-source": "src/System-FilePath-Glob.html",
        "fct-type": "module",
        "title": "Glob"
      },
      "index": {
        "description": "library for globbing matching patterns against file paths akin to the POSIX glob function Pattern syntax is documented by compile To toggle features at compile time look into CompOptions To modify matching behaviour look into MatchOptions Basic usage examples Matching String pattern against FilePath match compile pattern filepath Matching String pattern against all paths in the current working directory glob pattern Matching String pattern against all paths in given directory FilePath globDir1 compile pattern directorypath Matching list of String patterns against all paths in given directory returning the matches for each pattern as well as the paths not matched by any of the patterns globDir map compile patterns directorypath",
        "hierarchy": "System FilePath Glob",
        "module": "System.FilePath.Glob",
        "name": "Glob",
        "normalized": "",
        "package": "Glob",
        "partial": "Glob",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Glob/docs/System-FilePath-Glob.html#t:CompOptions",
      "description": {
        "fct-descr": "\u003cp\u003eOptions which can be passed to the \u003ccode\u003e\u003ca\u003etryCompileWith\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003ecompileWith\u003c/a\u003e\u003c/code\u003e\n functions: with these you can selectively toggle certain features at compile\n time.\n\u003c/p\u003e\u003cp\u003eNote that some of these options depend on each other: classes can never\n occur if ranges aren't allowed, for instance.\n\u003c/p\u003e",
        "fct-module": "System.FilePath.Glob",
        "fct-package": "Glob",
        "fct-signature": "data",
        "fct-source": "src/System-FilePath-Glob-Base.html#CompOptions",
        "fct-type": "data",
        "title": "CompOptions"
      },
      "index": {
        "description": "Options which can be passed to the tryCompileWith or compileWith functions with these you can selectively toggle certain features at compile time Note that some of these options depend on each other classes can never occur if ranges aren allowed for instance",
        "hierarchy": "System FilePath Glob",
        "module": "System.FilePath.Glob",
        "name": "CompOptions",
        "normalized": "",
        "package": "Glob",
        "partial": "Comp Options",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Glob/docs/System-FilePath-Glob.html#t:MatchOptions",
      "description": {
        "fct-descr": "\u003cp\u003eOptions which can be passed to the \u003ccode\u003ematchWith\u003c/code\u003e or \u003ccode\u003eglobDirWith\u003c/code\u003e functions:\n with these you can selectively toggle certain features at matching time.\n\u003c/p\u003e",
        "fct-module": "System.FilePath.Glob",
        "fct-package": "Glob",
        "fct-signature": "data",
        "fct-source": "src/System-FilePath-Glob-Base.html#MatchOptions",
        "fct-type": "data",
        "title": "MatchOptions"
      },
      "index": {
        "description": "Options which can be passed to the matchWith or globDirWith functions with these you can selectively toggle certain features at matching time",
        "hierarchy": "System FilePath Glob",
        "module": "System.FilePath.Glob",
        "name": "MatchOptions",
        "normalized": "",
        "package": "Glob",
        "partial": "Match Options",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Glob/docs/System-FilePath-Glob.html#t:Pattern",
      "description": {
        "fct-descr": "\u003cp\u003eAn abstract data type representing a compiled pattern.\n\u003c/p\u003e\u003cp\u003eNote that the \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e instance cannot tell you whether two patterns behave in\n the same way; only whether they compile to the same \u003ccode\u003e\u003ca\u003ePattern\u003c/a\u003e\u003c/code\u003e. For instance,\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003ecompile\u003c/a\u003e\u003c/code\u003e \"x\"\u003c/code\u003e and \u003ccode\u003e\u003ccode\u003e\u003ca\u003ecompile\u003c/a\u003e\u003c/code\u003e \"[x]\"\u003c/code\u003e may or may not compare equal,\n though a \u003ccode\u003e\u003ccode\u003ematch\u003c/code\u003e\u003c/code\u003e will behave the exact same way no matter which \u003ccode\u003e\u003ca\u003ePattern\u003c/a\u003e\u003c/code\u003e\n is used.\n\u003c/p\u003e",
        "fct-module": "System.FilePath.Glob",
        "fct-package": "Glob",
        "fct-signature": "data",
        "fct-source": "src/System-FilePath-Glob-Base.html#Pattern",
        "fct-type": "data",
        "title": "Pattern"
      },
      "index": {
        "description": "An abstract data type representing compiled pattern Note that the Eq instance cannot tell you whether two patterns behave in the same way only whether they compile to the same Pattern For instance compile and compile may or may not compare equal though match will behave the exact same way no matter which Pattern is used",
        "hierarchy": "System FilePath Glob",
        "module": "System.FilePath.Glob",
        "name": "Pattern",
        "normalized": "",
        "package": "Glob",
        "partial": "Pattern",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Glob/docs/System-FilePath-Glob.html#v:CompOptions",
      "description": {
        "fct-module": "System.FilePath.Glob",
        "fct-package": "Glob",
        "fct-signature": "CompOptions",
        "fct-source": "src/System-FilePath-Glob-Base.html#CompOptions",
        "fct-type": "function",
        "title": "CompOptions"
      },
      "index": {
        "description": "",
        "hierarchy": "System FilePath Glob",
        "module": "System.FilePath.Glob",
        "name": "CompOptions",
        "normalized": "",
        "package": "Glob",
        "partial": "Comp Options",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Glob/docs/System-FilePath-Glob.html#v:MatchOptions",
      "description": {
        "fct-module": "System.FilePath.Glob",
        "fct-package": "Glob",
        "fct-signature": "MatchOptions",
        "fct-source": "src/System-FilePath-Glob-Base.html#MatchOptions",
        "fct-type": "function",
        "title": "MatchOptions"
      },
      "index": {
        "description": "",
        "hierarchy": "System FilePath Glob",
        "module": "System.FilePath.Glob",
        "name": "MatchOptions",
        "normalized": "",
        "package": "Glob",
        "partial": "Match Options",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Glob/docs/System-FilePath-Glob.html#v:characterClasses",
      "description": {
        "fct-descr": "\u003cp\u003eAllow character classes, \u003ccode\u003e[[:...:]]\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.FilePath.Glob",
        "fct-package": "Glob",
        "fct-signature": "Bool",
        "fct-source": "src/System-FilePath-Glob-Base.html#CompOptions",
        "fct-type": "function",
        "title": "characterClasses"
      },
      "index": {
        "description": "Allow character classes",
        "hierarchy": "System FilePath Glob",
        "module": "System.FilePath.Glob",
        "name": "characterClasses",
        "normalized": "",
        "package": "Glob",
        "partial": "Classes",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Glob/docs/System-FilePath-Glob.html#v:characterRanges",
      "description": {
        "fct-descr": "\u003cp\u003eAllow character ranges, \u003ccode\u003e[...]\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.FilePath.Glob",
        "fct-package": "Glob",
        "fct-signature": "Bool",
        "fct-source": "src/System-FilePath-Glob-Base.html#CompOptions",
        "fct-type": "function",
        "title": "characterRanges"
      },
      "index": {
        "description": "Allow character ranges",
        "hierarchy": "System FilePath Glob",
        "module": "System.FilePath.Glob",
        "name": "characterRanges",
        "normalized": "",
        "package": "Glob",
        "partial": "Ranges",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Glob/docs/System-FilePath-Glob.html#v:commonDirectory",
      "description": {
        "fct-descr": "\u003cp\u003eFactors out the directory component of a \u003ccode\u003e\u003ca\u003ePattern\u003c/a\u003e\u003c/code\u003e. Useful in conjunction\n with \u003ccode\u003e\u003ca\u003eglobDir\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003ePreserves the number of path separators: \u003ccode\u003ecommonDirectory (compile\n \"foo///bar\")\u003c/code\u003e becomes \u003ccode\u003e(\"foo///\", compile \"bar\")\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.FilePath.Glob",
        "fct-package": "Glob",
        "fct-signature": "Pattern -\u003e (FilePath, Pattern)",
        "fct-source": "src/System-FilePath-Glob-Directory.html#commonDirectory",
        "fct-type": "function",
        "title": "commonDirectory"
      },
      "index": {
        "description": "Factors out the directory component of Pattern Useful in conjunction with globDir Preserves the number of path separators commonDirectory compile foo bar becomes foo compile bar",
        "hierarchy": "System FilePath Glob",
        "module": "System.FilePath.Glob",
        "name": "commonDirectory",
        "normalized": "Pattern-\u003e(FilePath,Pattern)",
        "package": "Glob",
        "partial": "Directory",
        "signature": "Pattern-\u003e(FilePath,Pattern)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Glob/docs/System-FilePath-Glob.html#v:compDefault",
      "description": {
        "fct-descr": "\u003cp\u003eThe default set of compilation options: closest to the behaviour of the\n \u003ccode\u003ezsh\u003c/code\u003e shell, with \u003ccode\u003e\u003ca\u003eerrorRecovery\u003c/a\u003e\u003c/code\u003e enabled.\n\u003c/p\u003e\u003cp\u003eAll options are enabled.\n\u003c/p\u003e",
        "fct-module": "System.FilePath.Glob",
        "fct-package": "Glob",
        "fct-signature": "CompOptions",
        "fct-source": "src/System-FilePath-Glob-Base.html#compDefault",
        "fct-type": "function",
        "title": "compDefault"
      },
      "index": {
        "description": "The default set of compilation options closest to the behaviour of the zsh shell with errorRecovery enabled All options are enabled",
        "hierarchy": "System FilePath Glob",
        "module": "System.FilePath.Glob",
        "name": "compDefault",
        "normalized": "",
        "package": "Glob",
        "partial": "Default",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Glob/docs/System-FilePath-Glob.html#v:compPosix",
      "description": {
        "fct-descr": "\u003cp\u003eOptions for POSIX-compliance, as described in \u003ccode\u003eman 7 glob\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003enumberRanges\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003erecursiveWildcards\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003epathSepInRanges\u003c/a\u003e\u003c/code\u003e are disabled.\n\u003c/p\u003e",
        "fct-module": "System.FilePath.Glob",
        "fct-package": "Glob",
        "fct-signature": "CompOptions",
        "fct-source": "src/System-FilePath-Glob-Base.html#compPosix",
        "fct-type": "function",
        "title": "compPosix"
      },
      "index": {
        "description": "Options for POSIX-compliance as described in man glob numberRanges recursiveWildcards and pathSepInRanges are disabled",
        "hierarchy": "System FilePath Glob",
        "module": "System.FilePath.Glob",
        "name": "compPosix",
        "normalized": "",
        "package": "Glob",
        "partial": "Posix",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Glob/docs/System-FilePath-Glob.html#v:compile",
      "description": {
        "fct-descr": "\u003cp\u003eCompiles a glob pattern from its textual representation into a \u003ccode\u003e\u003ca\u003ePattern\u003c/a\u003e\u003c/code\u003e\n object.\n\u003c/p\u003e\u003cp\u003eFor the most part, a character matches itself. Recognized operators are as\n follows:\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003e?\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e      Matches any character except path separators.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003e*\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e      Matches any number of characters except path separators,\n            including the empty string.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003e[..]\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e  Matches any of the enclosed characters. Ranges of characters can\n            be specified by separating the endpoints with a \u003ccode\u003e'-'\u003c/code\u003e. \u003ccode\u003e'-'\u003c/code\u003e or\n            \u003ccode\u003e']'\u003c/code\u003e can be matched by including them as the first character(s)\n            in the list. Never matches path separators: \u003ccode\u003e[/]\u003c/code\u003e matches\n            nothing at all. Named character classes can also be matched:\n            \u003ccode\u003e[:x:]\u003c/code\u003e within \u003ccode\u003e[]\u003c/code\u003e specifies the class named \u003ccode\u003ex\u003c/code\u003e, which matches\n            certain predefined characters. See below for a full list.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003e[^..]\u003c/code\u003e or \u003ccode\u003e[!..]\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Like \u003ccode\u003e[..]\u003c/code\u003e, but matches any character \u003cem\u003enot\u003c/em\u003e listed.\n                        Note that \u003ccode\u003e[^-x]\u003c/code\u003e is not the inverse of \u003ccode\u003e[-x]\u003c/code\u003e, but\n                        the range \u003ccode\u003e[^-x]\u003c/code\u003e.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003e\u003cm-n\u003e\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Matches any integer in the range m to n, inclusive. The range may\n            be open-ended by leaving out either number: \u003ccode\u003e\"\u003c-\u003e\"\u003c/code\u003e, for\n            instance, matches any integer.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003e**/\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e    Matches any number of characters, including path separators,\n            excluding the empty string.\n\u003c/dd\u003e\u003c/dl\u003e\u003cp\u003eSupported character classes:\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003e[:alnum:]\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e  Equivalent to \u003ccode\u003e\"0-9A-Za-z\"\u003c/code\u003e.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003e[:alpha:]\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e  Equivalent to \u003ccode\u003e\"A-Za-z\"\u003c/code\u003e.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003e[:blank:]\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e  Equivalent to \u003ccode\u003e\"\\t \"\u003c/code\u003e.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003e[:cntrl:]\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e  Equivalent to \u003ccode\u003e\"\\0-\\x1f\\x7f\"\u003c/code\u003e.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003e[:digit:]\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e  Equivalent to \u003ccode\u003e\"0-9\"\u003c/code\u003e.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003e[:graph:]\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e  Equivalent to \u003ccode\u003e\"!-~\"\u003c/code\u003e.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003e[:lower:]\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e  Equivalent to \u003ccode\u003e\"a-z\"\u003c/code\u003e.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003e[:print:]\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e  Equivalent to \u003ccode\u003e\" -~\"\u003c/code\u003e.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003e[:punct:]\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e  Equivalent to \u003ccode\u003e\"!-/:-@[-`{-~\"\u003c/code\u003e.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003e[:space:]\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e  Equivalent to \u003ccode\u003e\"\\t-\\r \"\u003c/code\u003e.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003e[:upper:]\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e  Equivalent to \u003ccode\u003e\"A-Z\"\u003c/code\u003e.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003e[:xdigit:]\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Equivalent to \u003ccode\u003e\"0-9A-Fa-f\"\u003c/code\u003e.\n\u003c/dd\u003e\u003c/dl\u003e\u003cp\u003eNote that path separators (typically \u003ccode\u003e'/'\u003c/code\u003e) have to be matched explicitly\n or using the \u003ccode\u003e**/\u003c/code\u003e pattern. In addition, extension separators (typically\n \u003ccode\u003e'.'\u003c/code\u003e) have to be matched explicitly at the beginning of the pattern or\n after any path separator.\n\u003c/p\u003e\u003cp\u003eIf a system supports multiple path separators, any one of them will match\n any of them. For instance, on Windows, \u003ccode\u003e'/'\u003c/code\u003e will match itself as well as\n \u003ccode\u003e'\\'\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eError recovery will be performed: erroneous operators will not be considered\n operators, but matched as literal strings. Such operators include:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e An empty \u003ccode\u003e[]\u003c/code\u003e or \u003ccode\u003e[^]\u003c/code\u003e or \u003ccode\u003e[!]\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e A \u003ccode\u003e[\u003c/code\u003e or \u003ccode\u003e\u003c\u003c/code\u003e without a matching \u003ccode\u003e]\u003c/code\u003e or \u003ccode\u003e\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e A malformed \u003ccode\u003e\u003c\u003e\u003c/code\u003e: e.g. nonnumeric characters or no hyphen\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eSo, e.g. \u003ccode\u003e[]\u003c/code\u003e will match the string \u003ccode\u003e\"[]\"\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.FilePath.Glob",
        "fct-package": "Glob",
        "fct-signature": "String -\u003e Pattern",
        "fct-source": "src/System-FilePath-Glob-Base.html#compile",
        "fct-type": "function",
        "title": "compile"
      },
      "index": {
        "description": "Compiles glob pattern from its textual representation into Pattern object For the most part character matches itself Recognized operators are as follows Matches any character except path separators Matches any number of characters except path separators including the empty string Matches any of the enclosed characters Ranges of characters can be specified by separating the endpoints with or can be matched by including them as the first character in the list Never matches path separators matches nothing at all Named character classes can also be matched within specifies the class named which matches certain predefined characters See below for full list or Like but matches any character not listed Note that is not the inverse of but the range m-n Matches any integer in the range to inclusive The range may be open-ended by leaving out either number for instance matches any integer Matches any number of characters including path separators excluding the empty string Supported character classes alnum Equivalent to A-Za-z alpha Equivalent to A-Za-z blank Equivalent to cntrl Equivalent to x1f x7f digit Equivalent to graph Equivalent to lower Equivalent to a-z print Equivalent to punct Equivalent to space Equivalent to upper Equivalent to A-Z xdigit Equivalent to A-Fa-f Note that path separators typically have to be matched explicitly or using the pattern In addition extension separators typically have to be matched explicitly at the beginning of the pattern or after any path separator If system supports multiple path separators any one of them will match any of them For instance on Windows will match itself as well as Error recovery will be performed erroneous operators will not be considered operators but matched as literal strings Such operators include An empty or or or without matching or malformed e.g nonnumeric characters or no hyphen So e.g will match the string",
        "hierarchy": "System FilePath Glob",
        "module": "System.FilePath.Glob",
        "name": "compile",
        "normalized": "String-\u003ePattern",
        "package": "Glob",
        "partial": "",
        "signature": "String-\u003ePattern"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Glob/docs/System-FilePath-Glob.html#v:compileWith",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ecompile\u003c/a\u003e\u003c/code\u003e, but recognizes operators according to the given\n \u003ccode\u003e\u003ca\u003eCompOptions\u003c/a\u003e\u003c/code\u003e instead of the defaults.\n\u003c/p\u003e\u003cp\u003eIf an error occurs and \u003ccode\u003e\u003ca\u003eerrorRecovery\u003c/a\u003e\u003c/code\u003e is disabled, \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e will be called.\n\u003c/p\u003e",
        "fct-module": "System.FilePath.Glob",
        "fct-package": "Glob",
        "fct-signature": "CompOptions -\u003e String -\u003e Pattern",
        "fct-source": "src/System-FilePath-Glob-Base.html#compileWith",
        "fct-type": "function",
        "title": "compileWith"
      },
      "index": {
        "description": "Like compile but recognizes operators according to the given CompOptions instead of the defaults If an error occurs and errorRecovery is disabled error will be called",
        "hierarchy": "System FilePath Glob",
        "module": "System.FilePath.Glob",
        "name": "compileWith",
        "normalized": "CompOptions-\u003eString-\u003ePattern",
        "package": "Glob",
        "partial": "With",
        "signature": "CompOptions-\u003eString-\u003ePattern"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Glob/docs/System-FilePath-Glob.html#v:decompile",
      "description": {
        "fct-descr": "\u003cp\u003eDecompiles a \u003ccode\u003e\u003ca\u003ePattern\u003c/a\u003e\u003c/code\u003e object into its textual representation: essentially\n the inverse of \u003ccode\u003e\u003ca\u003ecompile\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote, however, that due to internal optimization, \u003ccode\u003edecompile . compile\u003c/code\u003e is\n not the identity function. Instead, \u003ccode\u003ecompile . decompile\u003c/code\u003e is.\n\u003c/p\u003e\u003cp\u003eBe careful with \u003ccode\u003e\u003ca\u003eCompOptions\u003c/a\u003e\u003c/code\u003e: \u003ccode\u003e\u003ca\u003edecompile\u003c/a\u003e\u003c/code\u003e always produces a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e which\n can be passed to \u003ccode\u003e\u003ca\u003ecompile\u003c/a\u003e\u003c/code\u003e to get back the same \u003ccode\u003e\u003ca\u003ePattern\u003c/a\u003e\u003c/code\u003e. \u003ccode\u003ecompileWith\n options . decompile\u003c/code\u003e is \u003cem\u003enot\u003c/em\u003e the identity function unless \u003ccode\u003eoptions\u003c/code\u003e is\n \u003ccode\u003e\u003ca\u003ecompDefault\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.FilePath.Glob",
        "fct-package": "Glob",
        "fct-signature": "Pattern -\u003e String",
        "fct-source": "src/System-FilePath-Glob-Base.html#decompile",
        "fct-type": "function",
        "title": "decompile"
      },
      "index": {
        "description": "Decompiles Pattern object into its textual representation essentially the inverse of compile Note however that due to internal optimization decompile compile is not the identity function Instead compile decompile is Be careful with CompOptions decompile always produces String which can be passed to compile to get back the same Pattern compileWith options decompile is not the identity function unless options is compDefault",
        "hierarchy": "System FilePath Glob",
        "module": "System.FilePath.Glob",
        "name": "decompile",
        "normalized": "Pattern-\u003eString",
        "package": "Glob",
        "partial": "",
        "signature": "Pattern-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Glob/docs/System-FilePath-Glob.html#v:errorRecovery",
      "description": {
        "fct-descr": "\u003cp\u003eIf the input is invalid, recover by turning any invalid part into\n literals. For instance, with \u003ccode\u003e\u003ca\u003echaracterRanges\u003c/a\u003e\u003c/code\u003e enabled, \u003ccode\u003e[abc\u003c/code\u003e is an\n error by default (unclosed character range); with \u003ccode\u003e\u003ca\u003eerrorRecovery\u003c/a\u003e\u003c/code\u003e, the\n \u003ccode\u003e[\u003c/code\u003e is turned into a literal match, as though \u003ccode\u003e\u003ca\u003echaracterRanges\u003c/a\u003e\u003c/code\u003e were\n disabled.\n\u003c/p\u003e",
        "fct-module": "System.FilePath.Glob",
        "fct-package": "Glob",
        "fct-signature": "Bool",
        "fct-source": "src/System-FilePath-Glob-Base.html#CompOptions",
        "fct-type": "function",
        "title": "errorRecovery"
      },
      "index": {
        "description": "If the input is invalid recover by turning any invalid part into literals For instance with characterRanges enabled abc is an error by default unclosed character range with errorRecovery the is turned into literal match as though characterRanges were disabled",
        "hierarchy": "System FilePath Glob",
        "module": "System.FilePath.Glob",
        "name": "errorRecovery",
        "normalized": "",
        "package": "Glob",
        "partial": "Recovery",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Glob/docs/System-FilePath-Glob.html#v:glob",
      "description": {
        "fct-descr": "\u003cp\u003eThe simplest IO function. Finds matches to the given pattern in the current\n working directory. Takes a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e instead of a \u003ccode\u003e\u003ca\u003ePattern\u003c/a\u003e\u003c/code\u003e to avoid the need\n for a call to \u003ccode\u003e\u003ca\u003ecompile\u003c/a\u003e\u003c/code\u003e, simplifying usage further.\n\u003c/p\u003e\u003cp\u003eCan also be seen as a convenience wrapper on top of \u003ccode\u003e\u003ca\u003eglobDir1\u003c/a\u003e\u003c/code\u003e, for when you\n want to work in the current directory or have a pattern referring to an\n absolute path.\n\u003c/p\u003e",
        "fct-module": "System.FilePath.Glob",
        "fct-package": "Glob",
        "fct-signature": "String -\u003e IO [FilePath]",
        "fct-source": "src/System-FilePath-Glob-Directory.html#glob",
        "fct-type": "function",
        "title": "glob"
      },
      "index": {
        "description": "The simplest IO function Finds matches to the given pattern in the current working directory Takes String instead of Pattern to avoid the need for call to compile simplifying usage further Can also be seen as convenience wrapper on top of globDir1 for when you want to work in the current directory or have pattern referring to an absolute path",
        "hierarchy": "System FilePath Glob",
        "module": "System.FilePath.Glob",
        "name": "glob",
        "normalized": "String-\u003eIO[FilePath]",
        "package": "Glob",
        "partial": "",
        "signature": "String-\u003eIO[FilePath]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Glob/docs/System-FilePath-Glob.html#v:globDir",
      "description": {
        "fct-descr": "\u003cp\u003eMatches each given \u003ccode\u003e\u003ca\u003ePattern\u003c/a\u003e\u003c/code\u003e against the contents of the given \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e,\n recursively. The result pair's first component contains the matched paths,\n grouped for each given \u003ccode\u003e\u003ca\u003ePattern\u003c/a\u003e\u003c/code\u003e, and the second contains all paths which\n were not matched by any \u003ccode\u003e\u003ca\u003ePattern\u003c/a\u003e\u003c/code\u003e. The results are not in any defined order.\n\u003c/p\u003e\u003cp\u003eThe given directory is prepended to all the matches: the returned paths are\n all valid from the point of view of the current working directory.\n\u003c/p\u003e\u003cp\u003eIf multiple \u003ccode\u003e\u003ca\u003ePattern\u003c/a\u003e\u003c/code\u003es match a single \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e, that path will be included\n in multiple groups.\n\u003c/p\u003e\u003cp\u003eTwo \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003es which can be canonicalized to the same file (e.g. \u003ccode\u003e\"foo\"\u003c/code\u003e\n and \u003ccode\u003e\"./foo\"\u003c/code\u003e) may appear separately if explicit matching on paths\n beginning with \u003ccode\u003e\".\"\u003c/code\u003e is done. Looking for \u003ccode\u003e\".*/*\"\u003c/code\u003e, for instance, will\n cause \u003ccode\u003e\"./foo\"\u003c/code\u003e to return as a match but \u003ccode\u003e\"foo\"\u003c/code\u003e to not be matched.\n\u003c/p\u003e\u003cp\u003eThis function is different from a simple \u003ccode\u003e\u003ca\u003efilter\u003c/a\u003e\u003c/code\u003e over all the contents of\n the directory: the matching is performed relative to the directory, so that\n for instance the following is true:\n\u003c/p\u003e\u003cpre\u003e fmap (head.fst) (globDir [compile \"*\"] dir) == getDirectoryContents dir\n\u003c/pre\u003e\u003cp\u003e(With the exception that that glob won't match anything beginning with \u003ccode\u003e.\u003c/code\u003e.)\n\u003c/p\u003e\u003cp\u003eIf the given \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e is \u003ccode\u003e[]\u003c/code\u003e, \u003ccode\u003e\u003ca\u003egetCurrentDirectory\u003c/a\u003e\u003c/code\u003e will be used.\n\u003c/p\u003e\u003cp\u003eIf the given \u003ccode\u003e\u003ca\u003ePattern\u003c/a\u003e\u003c/code\u003e starts with a drive (as defined by\n \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e), it is not relative to the given directory and the\n \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e parameter is completely ignored! Similarly, if the given\n \u003ccode\u003e\u003ca\u003ePattern\u003c/a\u003e\u003c/code\u003e starts with a path separator, only the drive part of the\n \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e is used. On Posix systems these behaviours are equivalent:\n \u003ccode\u003e\u003ca\u003ePattern\u003c/a\u003e\u003c/code\u003es starting with \u003ccode\u003e/\u003c/code\u003e work relative to \u003ccode\u003e/\u003c/code\u003e. On Windows, \u003ccode\u003e\u003ca\u003ePattern\u003c/a\u003e\u003c/code\u003es\n starting with \u003ccode\u003e/\u003c/code\u003e or \u003ccode\u003e\\\u003c/code\u003e work relative only to the drive part of the\n \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ePattern\u003c/a\u003e\u003c/code\u003es starting with absolute paths ignore the\n \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote that in some cases results outside the given directory may be returned:\n for instance the \u003ccode\u003e.*\u003c/code\u003e pattern matches the \u003ccode\u003e..\u003c/code\u003e directory.\n\u003c/p\u003e\u003cp\u003eAny results deeper than in the given directory are enumerated lazily, using\n \u003ccode\u003eunsafeInterleaveIO\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eDirectories without read permissions are returned as entries but their\n contents, of course, are not.\n\u003c/p\u003e",
        "fct-module": "System.FilePath.Glob",
        "fct-package": "Glob",
        "fct-signature": "[Pattern] -\u003e FilePath -\u003e IO ([[FilePath]], [FilePath])",
        "fct-source": "src/System-FilePath-Glob-Directory.html#globDir",
        "fct-type": "function",
        "title": "globDir"
      },
      "index": {
        "description": "Matches each given Pattern against the contents of the given FilePath recursively The result pair first component contains the matched paths grouped for each given Pattern and the second contains all paths which were not matched by any Pattern The results are not in any defined order The given directory is prepended to all the matches the returned paths are all valid from the point of view of the current working directory If multiple Pattern match single FilePath that path will be included in multiple groups Two FilePath which can be canonicalized to the same file e.g foo and foo may appear separately if explicit matching on paths beginning with is done Looking for for instance will cause foo to return as match but foo to not be matched This function is different from simple filter over all the contents of the directory the matching is performed relative to the directory so that for instance the following is true fmap head.fst globDir compile dir getDirectoryContents dir With the exception that that glob won match anything beginning with If the given FilePath is getCurrentDirectory will be used If the given Pattern starts with drive as defined by FilePath it is not relative to the given directory and the FilePath parameter is completely ignored Similarly if the given Pattern starts with path separator only the drive part of the FilePath is used On Posix systems these behaviours are equivalent Pattern starting with work relative to On Windows Pattern starting with or work relative only to the drive part of the FilePath and Pattern starting with absolute paths ignore the FilePath Note that in some cases results outside the given directory may be returned for instance the pattern matches the directory Any results deeper than in the given directory are enumerated lazily using unsafeInterleaveIO Directories without read permissions are returned as entries but their contents of course are not",
        "hierarchy": "System FilePath Glob",
        "module": "System.FilePath.Glob",
        "name": "globDir",
        "normalized": "[Pattern]-\u003eFilePath-\u003eIO([[FilePath]],[FilePath])",
        "package": "Glob",
        "partial": "Dir",
        "signature": "[Pattern]-\u003eFilePath-\u003eIO([[FilePath]],[FilePath])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Glob/docs/System-FilePath-Glob.html#v:globDir1",
      "description": {
        "fct-descr": "\u003cp\u003eA convenience wrapper on top of \u003ccode\u003e\u003ca\u003eglobDir\u003c/a\u003e\u003c/code\u003e, for when you only have one\n \u003ccode\u003e\u003ca\u003ePattern\u003c/a\u003e\u003c/code\u003e you care about. Returns only the matched paths.\n\u003c/p\u003e",
        "fct-module": "System.FilePath.Glob",
        "fct-package": "Glob",
        "fct-signature": "Pattern -\u003e FilePath -\u003e IO [FilePath]",
        "fct-source": "src/System-FilePath-Glob-Directory.html#globDir1",
        "fct-type": "function",
        "title": "globDir1"
      },
      "index": {
        "description": "convenience wrapper on top of globDir for when you only have one Pattern you care about Returns only the matched paths",
        "hierarchy": "System FilePath Glob",
        "module": "System.FilePath.Glob",
        "name": "globDir1",
        "normalized": "Pattern-\u003eFilePath-\u003eIO[FilePath]",
        "package": "Glob",
        "partial": "Dir",
        "signature": "Pattern-\u003eFilePath-\u003eIO[FilePath]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Glob/docs/System-FilePath-Glob.html#v:globDirWith",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eglobDir\u003c/a\u003e\u003c/code\u003e, but applies the given \u003ccode\u003e\u003ca\u003eMatchOptions\u003c/a\u003e\u003c/code\u003e instead of the\n defaults when matching.\n\u003c/p\u003e",
        "fct-module": "System.FilePath.Glob",
        "fct-package": "Glob",
        "fct-signature": "MatchOptions -\u003e [Pattern] -\u003e FilePath -\u003e IO ([[FilePath]], [FilePath])",
        "fct-source": "src/System-FilePath-Glob-Directory.html#globDirWith",
        "fct-type": "function",
        "title": "globDirWith"
      },
      "index": {
        "description": "Like globDir but applies the given MatchOptions instead of the defaults when matching",
        "hierarchy": "System FilePath Glob",
        "module": "System.FilePath.Glob",
        "name": "globDirWith",
        "normalized": "MatchOptions-\u003e[Pattern]-\u003eFilePath-\u003eIO([[FilePath]],[FilePath])",
        "package": "Glob",
        "partial": "Dir With",
        "signature": "MatchOptions-\u003e[Pattern]-\u003eFilePath-\u003eIO([[FilePath]],[FilePath])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Glob/docs/System-FilePath-Glob.html#v:ignoreCase",
      "description": {
        "fct-descr": "\u003cp\u003eCase-independent matching.\n\u003c/p\u003e",
        "fct-module": "System.FilePath.Glob",
        "fct-package": "Glob",
        "fct-signature": "Bool",
        "fct-source": "src/System-FilePath-Glob-Base.html#MatchOptions",
        "fct-type": "function",
        "title": "ignoreCase"
      },
      "index": {
        "description": "Case-independent matching",
        "hierarchy": "System FilePath Glob",
        "module": "System.FilePath.Glob",
        "name": "ignoreCase",
        "normalized": "",
        "package": "Glob",
        "partial": "Case",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Glob/docs/System-FilePath-Glob.html#v:ignoreDotSlash",
      "description": {
        "fct-descr": "\u003cp\u003eTreat \u003ccode\u003e./\u003c/code\u003e as a no-op in both paths and patterns.\n\u003c/p\u003e\u003cp\u003e(Of course e.g. \u003ccode\u003e../\u003c/code\u003e means something different and will not be\n ignored.)\n\u003c/p\u003e",
        "fct-module": "System.FilePath.Glob",
        "fct-package": "Glob",
        "fct-signature": "Bool",
        "fct-source": "src/System-FilePath-Glob-Base.html#MatchOptions",
        "fct-type": "function",
        "title": "ignoreDotSlash"
      },
      "index": {
        "description": "Treat as no-op in both paths and patterns Of course e.g means something different and will not be ignored",
        "hierarchy": "System FilePath Glob",
        "module": "System.FilePath.Glob",
        "name": "ignoreDotSlash",
        "normalized": "",
        "package": "Glob",
        "partial": "Dot Slash",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Glob/docs/System-FilePath-Glob.html#v:match",
      "description": {
        "fct-descr": "\u003cp\u003eMatches the given \u003ccode\u003e\u003ca\u003ePattern\u003c/a\u003e\u003c/code\u003e against the given \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e, returning \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e\n if the pattern matches and \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e otherwise.\n\u003c/p\u003e",
        "fct-module": "System.FilePath.Glob",
        "fct-package": "Glob",
        "fct-signature": "Pattern -\u003e FilePath -\u003e Bool",
        "fct-source": "src/System-FilePath-Glob-Match.html#match",
        "fct-type": "function",
        "title": "match"
      },
      "index": {
        "description": "Matches the given Pattern against the given FilePath returning True if the pattern matches and False otherwise",
        "hierarchy": "System FilePath Glob",
        "module": "System.FilePath.Glob",
        "name": "match",
        "normalized": "Pattern-\u003eFilePath-\u003eBool",
        "package": "Glob",
        "partial": "",
        "signature": "Pattern-\u003eFilePath-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Glob/docs/System-FilePath-Glob.html#v:matchDefault",
      "description": {
        "fct-descr": "\u003cp\u003eThe default set of execution options: closest to the behaviour of the \u003ccode\u003ezsh\u003c/code\u003e\n shell.\n\u003c/p\u003e\u003cp\u003eCurrently identical to \u003ccode\u003e\u003ca\u003ematchPosix\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.FilePath.Glob",
        "fct-package": "Glob",
        "fct-signature": "MatchOptions",
        "fct-source": "src/System-FilePath-Glob-Base.html#matchDefault",
        "fct-type": "function",
        "title": "matchDefault"
      },
      "index": {
        "description": "The default set of execution options closest to the behaviour of the zsh shell Currently identical to matchPosix",
        "hierarchy": "System FilePath Glob",
        "module": "System.FilePath.Glob",
        "name": "matchDefault",
        "normalized": "",
        "package": "Glob",
        "partial": "Default",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Glob/docs/System-FilePath-Glob.html#v:matchDotsImplicitly",
      "description": {
        "fct-descr": "\u003cp\u003eAllow \u003ccode\u003e*\u003c/code\u003e, \u003ccode\u003e?\u003c/code\u003e, and \u003ccode\u003e**/\u003c/code\u003e to match \u003ccode\u003e.\u003c/code\u003e at the beginning of paths.\n\u003c/p\u003e",
        "fct-module": "System.FilePath.Glob",
        "fct-package": "Glob",
        "fct-signature": "Bool",
        "fct-source": "src/System-FilePath-Glob-Base.html#MatchOptions",
        "fct-type": "function",
        "title": "matchDotsImplicitly"
      },
      "index": {
        "description": "Allow and to match at the beginning of paths",
        "hierarchy": "System FilePath Glob",
        "module": "System.FilePath.Glob",
        "name": "matchDotsImplicitly",
        "normalized": "",
        "package": "Glob",
        "partial": "Dots Implicitly",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Glob/docs/System-FilePath-Glob.html#v:matchPosix",
      "description": {
        "fct-descr": "\u003cp\u003eOptions for POSIX-compliance, as described in \u003ccode\u003eman 7 glob\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eignoreDotSlash\u003c/a\u003e\u003c/code\u003e is enabled, the rest are disabled.\n\u003c/p\u003e",
        "fct-module": "System.FilePath.Glob",
        "fct-package": "Glob",
        "fct-signature": "MatchOptions",
        "fct-source": "src/System-FilePath-Glob-Base.html#matchPosix",
        "fct-type": "function",
        "title": "matchPosix"
      },
      "index": {
        "description": "Options for POSIX-compliance as described in man glob ignoreDotSlash is enabled the rest are disabled",
        "hierarchy": "System FilePath Glob",
        "module": "System.FilePath.Glob",
        "name": "matchPosix",
        "normalized": "",
        "package": "Glob",
        "partial": "Posix",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Glob/docs/System-FilePath-Glob.html#v:matchWith",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ematch\u003c/a\u003e\u003c/code\u003e, but applies the given \u003ccode\u003e\u003ca\u003eMatchOptions\u003c/a\u003e\u003c/code\u003e instead of the defaults.\n\u003c/p\u003e",
        "fct-module": "System.FilePath.Glob",
        "fct-package": "Glob",
        "fct-signature": "MatchOptions -\u003e Pattern -\u003e FilePath -\u003e Bool",
        "fct-source": "src/System-FilePath-Glob-Match.html#matchWith",
        "fct-type": "function",
        "title": "matchWith"
      },
      "index": {
        "description": "Like match but applies the given MatchOptions instead of the defaults",
        "hierarchy": "System FilePath Glob",
        "module": "System.FilePath.Glob",
        "name": "matchWith",
        "normalized": "MatchOptions-\u003ePattern-\u003eFilePath-\u003eBool",
        "package": "Glob",
        "partial": "With",
        "signature": "MatchOptions-\u003ePattern-\u003eFilePath-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Glob/docs/System-FilePath-Glob.html#v:numberRanges",
      "description": {
        "fct-descr": "\u003cp\u003eAllow open ranges, \u003ccode\u003e\u003c...\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.FilePath.Glob",
        "fct-package": "Glob",
        "fct-signature": "Bool",
        "fct-source": "src/System-FilePath-Glob-Base.html#CompOptions",
        "fct-type": "function",
        "title": "numberRanges"
      },
      "index": {
        "description": "Allow open ranges",
        "hierarchy": "System FilePath Glob",
        "module": "System.FilePath.Glob",
        "name": "numberRanges",
        "normalized": "",
        "package": "Glob",
        "partial": "Ranges",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Glob/docs/System-FilePath-Glob.html#v:pathSepInRanges",
      "description": {
        "fct-descr": "\u003cp\u003eAllow path separators in character ranges.\n\u003c/p\u003e\u003cp\u003eIf true, \u003ccode\u003ea[/]b\u003c/code\u003e never matches anything (since character ranges can't\n match path separators); if false and \u003ccode\u003e\u003ca\u003eerrorRecovery\u003c/a\u003e\u003c/code\u003e is enabled,\n \u003ccode\u003ea[/]b\u003c/code\u003e matches itself, i.e. a file named \u003ccode\u003e]b\u003c/code\u003e in the subdirectory\n \u003ccode\u003ea[\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.FilePath.Glob",
        "fct-package": "Glob",
        "fct-signature": "Bool",
        "fct-source": "src/System-FilePath-Glob-Base.html#CompOptions",
        "fct-type": "function",
        "title": "pathSepInRanges"
      },
      "index": {
        "description": "Allow path separators in character ranges If true never matches anything since character ranges can match path separators if false and errorRecovery is enabled matches itself i.e file named in the subdirectory",
        "hierarchy": "System FilePath Glob",
        "module": "System.FilePath.Glob",
        "name": "pathSepInRanges",
        "normalized": "",
        "package": "Glob",
        "partial": "Sep In Ranges",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Glob/docs/System-FilePath-Glob.html#v:recursiveWildcards",
      "description": {
        "fct-descr": "\u003cp\u003eAllow recursive wildcards, \u003ccode\u003e**/\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.FilePath.Glob",
        "fct-package": "Glob",
        "fct-signature": "Bool",
        "fct-source": "src/System-FilePath-Glob-Base.html#CompOptions",
        "fct-type": "function",
        "title": "recursiveWildcards"
      },
      "index": {
        "description": "Allow recursive wildcards",
        "hierarchy": "System FilePath Glob",
        "module": "System.FilePath.Glob",
        "name": "recursiveWildcards",
        "normalized": "",
        "package": "Glob",
        "partial": "Wildcards",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Glob/docs/System-FilePath-Glob.html#v:simplify",
      "description": {
        "fct-descr": "\u003cp\u003eSimplifies a \u003ccode\u003e\u003ca\u003ePattern\u003c/a\u003e\u003c/code\u003e object: removes redundant \u003ccode\u003e\"./\"\u003c/code\u003e, for instance.\n The resulting \u003ccode\u003e\u003ca\u003ePattern\u003c/a\u003e\u003c/code\u003e matches the exact same input as the original one,\n with some differences:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The output of \u003ccode\u003eglobDir\u003c/code\u003e will differ: for example, globbing for \u003ccode\u003e\"./*\"\u003c/code\u003e\n   gives \u003ccode\u003e\"./foo\"\u003c/code\u003e, but after simplification this'll be only \u003ccode\u003e\"foo\"\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e Decompiling the simplified \u003ccode\u003e\u003ca\u003ePattern\u003c/a\u003e\u003c/code\u003e will obviously not give the original.\n\u003c/li\u003e\u003cli\u003e The simplified \u003ccode\u003e\u003ca\u003ePattern\u003c/a\u003e\u003c/code\u003e is a bit faster to match with and uses less\n   memory, since some redundant data is removed.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eFor the last of the above reasons, if you're performance-conscious and not\n using \u003ccode\u003eglobDir\u003c/code\u003e, you should always \u003ccode\u003e\u003ca\u003esimplify\u003c/a\u003e\u003c/code\u003e after calling \u003ccode\u003ecompile\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.FilePath.Glob",
        "fct-package": "Glob",
        "fct-signature": "Pattern -\u003e Pattern",
        "fct-source": "src/System-FilePath-Glob-Simplify.html#simplify",
        "fct-type": "function",
        "title": "simplify"
      },
      "index": {
        "description": "Simplifies Pattern object removes redundant for instance The resulting Pattern matches the exact same input as the original one with some differences The output of globDir will differ for example globbing for gives foo but after simplification this ll be only foo Decompiling the simplified Pattern will obviously not give the original The simplified Pattern is bit faster to match with and uses less memory since some redundant data is removed For the last of the above reasons if you re performance-conscious and not using globDir you should always simplify after calling compile",
        "hierarchy": "System FilePath Glob",
        "module": "System.FilePath.Glob",
        "name": "simplify",
        "normalized": "Pattern-\u003ePattern",
        "package": "Glob",
        "partial": "",
        "signature": "Pattern-\u003ePattern"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Glob/docs/System-FilePath-Glob.html#v:tryCompileWith",
      "description": {
        "fct-descr": "\u003cp\u003eA safe version of \u003ccode\u003e\u003ca\u003ecompileWith\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIf an error occurs and \u003ccode\u003e\u003ca\u003eerrorRecovery\u003c/a\u003e\u003c/code\u003e is disabled, the error message will\n be returned in a \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.FilePath.Glob",
        "fct-package": "Glob",
        "fct-signature": "CompOptions -\u003e String -\u003e Either String Pattern",
        "fct-source": "src/System-FilePath-Glob-Base.html#tryCompileWith",
        "fct-type": "function",
        "title": "tryCompileWith"
      },
      "index": {
        "description": "safe version of compileWith If an error occurs and errorRecovery is disabled the error message will be returned in Left",
        "hierarchy": "System FilePath Glob",
        "module": "System.FilePath.Glob",
        "name": "tryCompileWith",
        "normalized": "CompOptions-\u003eString-\u003eEither String Pattern",
        "package": "Glob",
        "partial": "Compile With",
        "signature": "CompOptions-\u003eString-\u003eEither String Pattern"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Glob/docs/System-FilePath-Glob.html#v:wildcards",
      "description": {
        "fct-descr": "\u003cp\u003eAllow wildcards, \u003ccode\u003e*\u003c/code\u003e and \u003ccode\u003e?\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.FilePath.Glob",
        "fct-package": "Glob",
        "fct-signature": "Bool",
        "fct-source": "src/System-FilePath-Glob-Base.html#CompOptions",
        "fct-type": "function",
        "title": "wildcards"
      },
      "index": {
        "description": "Allow wildcards and",
        "hierarchy": "System FilePath Glob",
        "module": "System.FilePath.Glob",
        "name": "wildcards",
        "normalized": "",
        "package": "Glob",
        "partial": "",
        "signature": ""
      }
    }
  }
]