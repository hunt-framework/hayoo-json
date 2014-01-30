[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/system-filepath/docs/Filesystem-Path-CurrentOS.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRe&#8208;exports contents of \u003ca\u003eFilesystem.Path.Rules\u003c/a\u003e, defaulting to the\n current OS&#8217;s rules when needed.\n\u003c/p\u003e\u003cp\u003eAlso enables \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eIsString\u003c/a\u003e\u003c/code\u003e instances for \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Filesystem.Path.CurrentOS",
        "fct-package": "system-filepath",
        "fct-signature": "module",
        "fct-source": "src/Filesystem-Path-CurrentOS.html",
        "fct-type": "module",
        "title": "CurrentOS"
      },
      "index": {
        "description": "Re exports contents of Filesystem.Path.Rules defaulting to the current OS rules when needed Also enables Show and IsString instances for FilePath",
        "hierarchy": "Filesystem Path CurrentOS",
        "module": "Filesystem.Path.CurrentOS",
        "name": "CurrentOS",
        "normalized": "",
        "package": "system-filepath",
        "partial": "Current OS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/system-filepath/docs/Filesystem-Path-CurrentOS.html#v:currentOS",
      "description": {
        "fct-module": "Filesystem.Path.CurrentOS",
        "fct-package": "system-filepath",
        "fct-signature": "Rules platformTextFormat",
        "fct-source": "src/Filesystem-Path-CurrentOS.html#currentOS",
        "fct-type": "function",
        "title": "currentOS"
      },
      "index": {
        "description": "",
        "hierarchy": "Filesystem Path CurrentOS",
        "module": "Filesystem.Path.CurrentOS",
        "name": "currentOS",
        "normalized": "",
        "package": "system-filepath",
        "partial": "OS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/system-filepath/docs/Filesystem-Path-CurrentOS.html#v:decode",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e from a platform&#8208;specific format, suitable\n for use with external OS functions.\n\u003c/p\u003e\u003cp\u003eSince: 0.3\n\u003c/p\u003e",
        "fct-module": "Filesystem.Path.CurrentOS",
        "fct-package": "system-filepath",
        "fct-signature": "platformTextFormat -\u003e FilePath",
        "fct-source": "src/Filesystem-Path-CurrentOS.html#decode",
        "fct-type": "function",
        "title": "decode"
      },
      "index": {
        "description": "Convert FilePath from platform specific format suitable for use with external OS functions Since",
        "hierarchy": "Filesystem Path CurrentOS",
        "module": "Filesystem.Path.CurrentOS",
        "name": "decode",
        "normalized": "a-\u003eFilePath",
        "package": "system-filepath",
        "partial": "",
        "signature": "platformTextFormat-\u003eFilePath"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/system-filepath/docs/Filesystem-Path-CurrentOS.html#v:decodeString",
      "description": {
        "fct-descr": "\u003cp\u003eAttempt to parse a \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e from a string suitable for use with\n functions in \u003ccode\u003eSystem.IO\u003c/code\u003e. Do not use this function for parsing\n human&#8208;readable paths, as the character set decoding is\n platform&#8208;dependent. For converting human&#8208;readable text to a\n \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e, use \u003ccode\u003e\u003ca\u003efromText\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince: 0.3.1\n\u003c/p\u003e",
        "fct-module": "Filesystem.Path.CurrentOS",
        "fct-package": "system-filepath",
        "fct-signature": "String -\u003e FilePath",
        "fct-source": "src/Filesystem-Path-CurrentOS.html#decodeString",
        "fct-type": "function",
        "title": "decodeString"
      },
      "index": {
        "description": "Attempt to parse FilePath from string suitable for use with functions in System.IO Do not use this function for parsing human readable paths as the character set decoding is platform dependent For converting human readable text to FilePath use fromText Since",
        "hierarchy": "Filesystem Path CurrentOS",
        "module": "Filesystem.Path.CurrentOS",
        "name": "decodeString",
        "normalized": "String-\u003eFilePath",
        "package": "system-filepath",
        "partial": "String",
        "signature": "String-\u003eFilePath"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/system-filepath/docs/Filesystem-Path-CurrentOS.html#v:encode",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e to a platform&#8208;specific format, suitable\n for use with external OS functions.\n\u003c/p\u003e\u003cp\u003eSince: 0.3\n\u003c/p\u003e",
        "fct-module": "Filesystem.Path.CurrentOS",
        "fct-package": "system-filepath",
        "fct-signature": "FilePath -\u003e platformTextFormat",
        "fct-source": "src/Filesystem-Path-CurrentOS.html#encode",
        "fct-type": "function",
        "title": "encode"
      },
      "index": {
        "description": "Convert FilePath to platform specific format suitable for use with external OS functions Since",
        "hierarchy": "Filesystem Path CurrentOS",
        "module": "Filesystem.Path.CurrentOS",
        "name": "encode",
        "normalized": "FilePath-\u003ea",
        "package": "system-filepath",
        "partial": "",
        "signature": "FilePath-\u003eplatformTextFormat"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/system-filepath/docs/Filesystem-Path-CurrentOS.html#v:encodeString",
      "description": {
        "fct-descr": "\u003cp\u003eAttempt to convert a \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e to a string suitable for use with\n functions in \u003ccode\u003eSystem.IO\u003c/code\u003e. The contents of this string are\n platform&#8208;dependent, and are not guaranteed to be\n human&#8208;readable. For converting \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003es to a\n human&#8208;readable format, use \u003ccode\u003e\u003ca\u003etoText\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince: 0.3.1\n\u003c/p\u003e",
        "fct-module": "Filesystem.Path.CurrentOS",
        "fct-package": "system-filepath",
        "fct-signature": "FilePath -\u003e String",
        "fct-source": "src/Filesystem-Path-CurrentOS.html#encodeString",
        "fct-type": "function",
        "title": "encodeString"
      },
      "index": {
        "description": "Attempt to convert FilePath to string suitable for use with functions in System.IO The contents of this string are platform dependent and are not guaranteed to be human readable For converting FilePath to human readable format use toText Since",
        "hierarchy": "Filesystem Path CurrentOS",
        "module": "Filesystem.Path.CurrentOS",
        "name": "encodeString",
        "normalized": "FilePath-\u003eString",
        "package": "system-filepath",
        "partial": "String",
        "signature": "FilePath-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/system-filepath/docs/Filesystem-Path-CurrentOS.html#v:fromText",
      "description": {
        "fct-descr": "\u003cp\u003eConvert human&#8208;readable text into a \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis function ignores the user&#8217;s locale, and assumes all file paths\n are encoded in UTF8. If you need to create file paths with an unusual or\n obscure encoding, encode them manually and then use \u003ccode\u003e\u003ca\u003edecode\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince: 0.2\n\u003c/p\u003e",
        "fct-module": "Filesystem.Path.CurrentOS",
        "fct-package": "system-filepath",
        "fct-signature": "Text -\u003e FilePath",
        "fct-source": "src/Filesystem-Path-CurrentOS.html#fromText",
        "fct-type": "function",
        "title": "fromText"
      },
      "index": {
        "description": "Convert human readable text into FilePath This function ignores the user locale and assumes all file paths are encoded in UTF8 If you need to create file paths with an unusual or obscure encoding encode them manually and then use decode Since",
        "hierarchy": "Filesystem Path CurrentOS",
        "module": "Filesystem.Path.CurrentOS",
        "name": "fromText",
        "normalized": "Text-\u003eFilePath",
        "package": "system-filepath",
        "partial": "Text",
        "signature": "Text-\u003eFilePath"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/system-filepath/docs/Filesystem-Path-CurrentOS.html#v:splitSearchPath",
      "description": {
        "fct-descr": "\u003cp\u003eSplit a search path, such as \u003ccode\u003e$PATH\u003c/code\u003e or \u003ccode\u003e$PYTHONPATH\u003c/code\u003e, into a list\n of \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
        "fct-module": "Filesystem.Path.CurrentOS",
        "fct-package": "system-filepath",
        "fct-signature": "platformTextFormat -\u003e [FilePath]",
        "fct-source": "src/Filesystem-Path-CurrentOS.html#splitSearchPath",
        "fct-type": "function",
        "title": "splitSearchPath"
      },
      "index": {
        "description": "Split search path such as PATH or PYTHONPATH into list of FilePath",
        "hierarchy": "Filesystem Path CurrentOS",
        "module": "Filesystem.Path.CurrentOS",
        "name": "splitSearchPath",
        "normalized": "a-\u003e[FilePath]",
        "package": "system-filepath",
        "partial": "Search Path",
        "signature": "platformTextFormat-\u003e[FilePath]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/system-filepath/docs/Filesystem-Path-CurrentOS.html#v:toText",
      "description": {
        "fct-descr": "\u003cp\u003eAttempt to convert a \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e to human&#8208;readable text.\n\u003c/p\u003e\u003cp\u003eIf the path is decoded successfully, the result is a \u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e containing\n the decoded text. Successfully decoded text can be converted back to the\n original path using \u003ccode\u003e\u003ca\u003efromText\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIf the path cannot be decoded, the result is a \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e containing an\n approximation of the original path. If displayed to the user, this value\n should be accompanied by some warning that the path has an invalid\n encoding. Approximated text cannot be converted back to the original path.\n\u003c/p\u003e\u003cp\u003eThis function ignores the user&#8217;s locale, and assumes all file paths\n are encoded in UTF8. If you need to display file paths with an unusual or\n obscure encoding, use \u003ccode\u003e\u003ca\u003eencode\u003c/a\u003e\u003c/code\u003e and then decode them manually.\n\u003c/p\u003e\u003cp\u003eSince: 0.2\n\u003c/p\u003e",
        "fct-module": "Filesystem.Path.CurrentOS",
        "fct-package": "system-filepath",
        "fct-signature": "FilePath -\u003e Either Text Text",
        "fct-source": "src/Filesystem-Path-CurrentOS.html#toText",
        "fct-type": "function",
        "title": "toText"
      },
      "index": {
        "description": "Attempt to convert FilePath to human readable text If the path is decoded successfully the result is Right containing the decoded text Successfully decoded text can be converted back to the original path using fromText If the path cannot be decoded the result is Left containing an approximation of the original path If displayed to the user this value should be accompanied by some warning that the path has an invalid encoding Approximated text cannot be converted back to the original path This function ignores the user locale and assumes all file paths are encoded in UTF8 If you need to display file paths with an unusual or obscure encoding use encode and then decode them manually Since",
        "hierarchy": "Filesystem Path CurrentOS",
        "module": "Filesystem.Path.CurrentOS",
        "name": "toText",
        "normalized": "FilePath-\u003eEither Text Text",
        "package": "system-filepath",
        "partial": "Text",
        "signature": "FilePath-\u003eEither Text Text"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/system-filepath/docs/Filesystem-Path-CurrentOS.html#v:valid",
      "description": {
        "fct-descr": "\u003cp\u003eCheck if a \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e is valid; it must not contain any illegal\n characters, and must have a root appropriate to the current \u003ccode\u003e\u003ca\u003eRules\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Filesystem.Path.CurrentOS",
        "fct-package": "system-filepath",
        "fct-signature": "FilePath -\u003e Bool",
        "fct-source": "src/Filesystem-Path-CurrentOS.html#valid",
        "fct-type": "function",
        "title": "valid"
      },
      "index": {
        "description": "Check if FilePath is valid it must not contain any illegal characters and must have root appropriate to the current Rules",
        "hierarchy": "Filesystem Path CurrentOS",
        "module": "Filesystem.Path.CurrentOS",
        "name": "valid",
        "normalized": "FilePath-\u003eBool",
        "package": "system-filepath",
        "partial": "",
        "signature": "FilePath-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/system-filepath/docs/Filesystem-Path-Rules.html#",
      "description": {
        "fct-module": "Filesystem.Path.Rules",
        "fct-package": "system-filepath",
        "fct-signature": "module",
        "fct-source": "src/Filesystem-Path-Rules.html",
        "fct-type": "module",
        "title": "Rules"
      },
      "index": {
        "description": "",
        "hierarchy": "Filesystem Path Rules",
        "module": "Filesystem.Path.Rules",
        "name": "Rules",
        "normalized": "",
        "package": "system-filepath",
        "partial": "Rules",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/system-filepath/docs/Filesystem-Path-Rules.html#t:Rules",
      "description": {
        "fct-module": "Filesystem.Path.Rules",
        "fct-package": "system-filepath",
        "fct-signature": "data",
        "fct-source": "src/Filesystem-Path-Internal.html#Rules",
        "fct-type": "data",
        "title": "Rules"
      },
      "index": {
        "description": "",
        "hierarchy": "Filesystem Path Rules",
        "module": "Filesystem.Path.Rules",
        "name": "Rules",
        "normalized": "",
        "package": "system-filepath",
        "partial": "Rules",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/system-filepath/docs/Filesystem-Path-Rules.html#v:darwin",
      "description": {
        "fct-descr": "\u003cp\u003eDarwin and Mac OS X.\n\u003c/p\u003e\u003cp\u003eThis is almost identical to \u003ccode\u003e\u003ca\u003eposix\u003c/a\u003e\u003c/code\u003e, but with a native path type of \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e\n rather than \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince: 0.3.4 / 0.4.3\n\u003c/p\u003e",
        "fct-module": "Filesystem.Path.Rules",
        "fct-package": "system-filepath",
        "fct-signature": "Rules Text",
        "fct-source": "src/Filesystem-Path-Rules.html#darwin",
        "fct-type": "function",
        "title": "darwin"
      },
      "index": {
        "description": "Darwin and Mac OS This is almost identical to posix but with native path type of Text rather than ByteString Since",
        "hierarchy": "Filesystem Path Rules",
        "module": "Filesystem.Path.Rules",
        "name": "darwin",
        "normalized": "",
        "package": "system-filepath",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/system-filepath/docs/Filesystem-Path-Rules.html#v:darwin_ghc702",
      "description": {
        "fct-descr": "\u003cp\u003eDarwin and Mac OS X.\n\u003c/p\u003e\u003cp\u003eThis is a variant of \u003ccode\u003e\u003ca\u003edarwin\u003c/a\u003e\u003c/code\u003e for use with GHC 7.2 or later, which tries to\n decode file paths in its IO computations.\n\u003c/p\u003e\u003cp\u003eSince: 0.3.4 / 0.4.3\n\u003c/p\u003e",
        "fct-module": "Filesystem.Path.Rules",
        "fct-package": "system-filepath",
        "fct-signature": "Rules Text",
        "fct-source": "src/Filesystem-Path-Rules.html#darwin_ghc702",
        "fct-type": "function",
        "title": "darwin_ghc702"
      },
      "index": {
        "description": "Darwin and Mac OS This is variant of darwin for use with GHC or later which tries to decode file paths in its IO computations Since",
        "hierarchy": "Filesystem Path Rules",
        "module": "Filesystem.Path.Rules",
        "name": "darwin_ghc702",
        "normalized": "",
        "package": "system-filepath",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/system-filepath/docs/Filesystem-Path-Rules.html#v:decode",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e from a platform&#8208;specific format,\n suitable for use with external OS functions.\n\u003c/p\u003e\u003cp\u003eSince: 0.3\n\u003c/p\u003e",
        "fct-module": "Filesystem.Path.Rules",
        "fct-package": "system-filepath",
        "fct-signature": "Rules platformFormat -\u003e platformFormat -\u003e FilePath",
        "fct-source": "src/Filesystem-Path-Internal.html#decode",
        "fct-type": "function",
        "title": "decode"
      },
      "index": {
        "description": "Convert FilePath from platform specific format suitable for use with external OS functions Since",
        "hierarchy": "Filesystem Path Rules",
        "module": "Filesystem.Path.Rules",
        "name": "decode",
        "normalized": "Rules a-\u003ea-\u003eFilePath",
        "package": "system-filepath",
        "partial": "",
        "signature": "Rules platformFormat-\u003eplatformFormat-\u003eFilePath"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/system-filepath/docs/Filesystem-Path-Rules.html#v:decodeString",
      "description": {
        "fct-descr": "\u003cp\u003eAttempt to parse a \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e from a string suitable for use\n with functions in \u003ccode\u003eSystem.IO\u003c/code\u003e. Do not use this function for parsing\n human&#8208;readable paths, as the character set decoding is\n platform&#8208;dependent. For converting human&#8208;readable\n text to a \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e, use \u003ccode\u003e\u003ca\u003efromText\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince: 0.3.1\n\u003c/p\u003e",
        "fct-module": "Filesystem.Path.Rules",
        "fct-package": "system-filepath",
        "fct-signature": "Rules platformFormat -\u003e String -\u003e FilePath",
        "fct-source": "src/Filesystem-Path-Internal.html#decodeString",
        "fct-type": "function",
        "title": "decodeString"
      },
      "index": {
        "description": "Attempt to parse FilePath from string suitable for use with functions in System.IO Do not use this function for parsing human readable paths as the character set decoding is platform dependent For converting human readable text to FilePath use fromText Since",
        "hierarchy": "Filesystem Path Rules",
        "module": "Filesystem.Path.Rules",
        "name": "decodeString",
        "normalized": "Rules a-\u003eString-\u003eFilePath",
        "package": "system-filepath",
        "partial": "String",
        "signature": "Rules platformFormat-\u003eString-\u003eFilePath"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/system-filepath/docs/Filesystem-Path-Rules.html#v:encode",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e to a platform&#8208;specific format,\n suitable for use with external OS functions.\n\u003c/p\u003e\u003cp\u003eSince: 0.3\n\u003c/p\u003e",
        "fct-module": "Filesystem.Path.Rules",
        "fct-package": "system-filepath",
        "fct-signature": "Rules platformFormat -\u003e FilePath -\u003e platformFormat",
        "fct-source": "src/Filesystem-Path-Internal.html#encode",
        "fct-type": "function",
        "title": "encode"
      },
      "index": {
        "description": "Convert FilePath to platform specific format suitable for use with external OS functions Since",
        "hierarchy": "Filesystem Path Rules",
        "module": "Filesystem.Path.Rules",
        "name": "encode",
        "normalized": "Rules a-\u003eFilePath-\u003ea",
        "package": "system-filepath",
        "partial": "",
        "signature": "Rules platformFormat-\u003eFilePath-\u003eplatformFormat"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/system-filepath/docs/Filesystem-Path-Rules.html#v:encodeString",
      "description": {
        "fct-descr": "\u003cp\u003eAttempt to convert a \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e to a string suitable for use with\n functions in \u003ccode\u003eSystem.IO\u003c/code\u003e. The contents of this string are\n platform&#8208;dependent, and are not guaranteed to be\n human&#8208;readable. For converting \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003es to a\n human&#8208;readable format, use \u003ccode\u003e\u003ca\u003etoText\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince: 0.3.1\n\u003c/p\u003e",
        "fct-module": "Filesystem.Path.Rules",
        "fct-package": "system-filepath",
        "fct-signature": "Rules platformFormat -\u003e FilePath -\u003e String",
        "fct-source": "src/Filesystem-Path-Internal.html#encodeString",
        "fct-type": "function",
        "title": "encodeString"
      },
      "index": {
        "description": "Attempt to convert FilePath to string suitable for use with functions in System.IO The contents of this string are platform dependent and are not guaranteed to be human readable For converting FilePath to human readable format use toText Since",
        "hierarchy": "Filesystem Path Rules",
        "module": "Filesystem.Path.Rules",
        "name": "encodeString",
        "normalized": "Rules a-\u003eFilePath-\u003eString",
        "package": "system-filepath",
        "partial": "String",
        "signature": "Rules platformFormat-\u003eFilePath-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/system-filepath/docs/Filesystem-Path-Rules.html#v:fromText",
      "description": {
        "fct-descr": "\u003cp\u003eConvert human&#8208;readable text into a \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis function ignores the user&#8217;s locale, and assumes all\n file paths are encoded in UTF8. If you need to create file paths\n with an unusual or obscure encoding, encode them manually and then\n use \u003ccode\u003e\u003ca\u003edecode\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince: 0.2\n\u003c/p\u003e",
        "fct-module": "Filesystem.Path.Rules",
        "fct-package": "system-filepath",
        "fct-signature": "Rules platformFormat -\u003e Text -\u003e FilePath",
        "fct-source": "src/Filesystem-Path-Internal.html#fromText",
        "fct-type": "function",
        "title": "fromText"
      },
      "index": {
        "description": "Convert human readable text into FilePath This function ignores the user locale and assumes all file paths are encoded in UTF8 If you need to create file paths with an unusual or obscure encoding encode them manually and then use decode Since",
        "hierarchy": "Filesystem Path Rules",
        "module": "Filesystem.Path.Rules",
        "name": "fromText",
        "normalized": "Rules a-\u003eText-\u003eFilePath",
        "package": "system-filepath",
        "partial": "Text",
        "signature": "Rules platformFormat-\u003eText-\u003eFilePath"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/system-filepath/docs/Filesystem-Path-Rules.html#v:posix",
      "description": {
        "fct-descr": "\u003cp\u003eLinux, BSD, and other UNIX or UNIX-like operating systems.\n\u003c/p\u003e",
        "fct-module": "Filesystem.Path.Rules",
        "fct-package": "system-filepath",
        "fct-signature": "Rules ByteString",
        "fct-source": "src/Filesystem-Path-Rules.html#posix",
        "fct-type": "function",
        "title": "posix"
      },
      "index": {
        "description": "Linux BSD and other UNIX or UNIX-like operating systems",
        "hierarchy": "Filesystem Path Rules",
        "module": "Filesystem.Path.Rules",
        "name": "posix",
        "normalized": "",
        "package": "system-filepath",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/system-filepath/docs/Filesystem-Path-Rules.html#v:posix_ghc702",
      "description": {
        "fct-descr": "\u003cp\u003eLinux, BSD, and other UNIX or UNIX-like operating systems.\n\u003c/p\u003e\u003cp\u003eThis is a variant of \u003ccode\u003e\u003ca\u003eposix\u003c/a\u003e\u003c/code\u003e for use with GHC 7.2, which tries to decode\n file paths in its IO computations.\n\u003c/p\u003e\u003cp\u003eSince: 0.3.3 / 0.4.2\n\u003c/p\u003e",
        "fct-module": "Filesystem.Path.Rules",
        "fct-package": "system-filepath",
        "fct-signature": "Rules ByteString",
        "fct-source": "src/Filesystem-Path-Rules.html#posix_ghc702",
        "fct-type": "function",
        "title": "posix_ghc702"
      },
      "index": {
        "description": "Linux BSD and other UNIX or UNIX-like operating systems This is variant of posix for use with GHC which tries to decode file paths in its IO computations Since",
        "hierarchy": "Filesystem Path Rules",
        "module": "Filesystem.Path.Rules",
        "name": "posix_ghc702",
        "normalized": "",
        "package": "system-filepath",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/system-filepath/docs/Filesystem-Path-Rules.html#v:posix_ghc704",
      "description": {
        "fct-descr": "\u003cp\u003eLinux, BSD, and other UNIX or UNIX-like operating systems.\n\u003c/p\u003e\u003cp\u003eThis is a variant of \u003ccode\u003e\u003ca\u003eposix\u003c/a\u003e\u003c/code\u003e for use with GHC 7.4 or later, which tries to\n decode file paths in its IO computations.\n\u003c/p\u003e\u003cp\u003eSince: 0.3.7 / 0.4.6\n\u003c/p\u003e",
        "fct-module": "Filesystem.Path.Rules",
        "fct-package": "system-filepath",
        "fct-signature": "Rules ByteString",
        "fct-source": "src/Filesystem-Path-Rules.html#posix_ghc704",
        "fct-type": "function",
        "title": "posix_ghc704"
      },
      "index": {
        "description": "Linux BSD and other UNIX or UNIX-like operating systems This is variant of posix for use with GHC or later which tries to decode file paths in its IO computations Since",
        "hierarchy": "Filesystem Path Rules",
        "module": "Filesystem.Path.Rules",
        "name": "posix_ghc704",
        "normalized": "",
        "package": "system-filepath",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/system-filepath/docs/Filesystem-Path-Rules.html#v:splitSearchPath",
      "description": {
        "fct-descr": "\u003cp\u003eSplit a search path, such as \u003ccode\u003e$PATH\u003c/code\u003e or \u003ccode\u003e$PYTHONPATH\u003c/code\u003e, into\n a list of \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
        "fct-module": "Filesystem.Path.Rules",
        "fct-package": "system-filepath",
        "fct-signature": "Rules platformFormat -\u003e platformFormat -\u003e [FilePath]",
        "fct-source": "src/Filesystem-Path-Internal.html#splitSearchPath",
        "fct-type": "function",
        "title": "splitSearchPath"
      },
      "index": {
        "description": "Split search path such as PATH or PYTHONPATH into list of FilePath",
        "hierarchy": "Filesystem Path Rules",
        "module": "Filesystem.Path.Rules",
        "name": "splitSearchPath",
        "normalized": "Rules a-\u003ea-\u003e[FilePath]",
        "package": "system-filepath",
        "partial": "Search Path",
        "signature": "Rules platformFormat-\u003eplatformFormat-\u003e[FilePath]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/system-filepath/docs/Filesystem-Path-Rules.html#v:toText",
      "description": {
        "fct-descr": "\u003cp\u003eAttempt to convert a \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e to human&#8208;readable text.\n\u003c/p\u003e\u003cp\u003eIf the path is decoded successfully, the result is a \u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e\n containing the decoded text. Successfully decoded text can be\n converted back to the original path using \u003ccode\u003e\u003ca\u003efromText\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIf the path cannot be decoded, the result is a \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e containing an\n approximation of the original path. If displayed to the user, this\n value should be accompanied by some warning that the path has an\n invalid encoding. Approximated text cannot be converted back to the\n original path.\n\u003c/p\u003e\u003cp\u003eThis function ignores the user&#8217;s locale, and assumes all\n file paths are encoded in UTF8. If you need to display file paths\n with an unusual or obscure encoding, use \u003ccode\u003e\u003ca\u003eencode\u003c/a\u003e\u003c/code\u003e and then decode\n them manually.\n\u003c/p\u003e\u003cp\u003eSince: 0.2\n\u003c/p\u003e",
        "fct-module": "Filesystem.Path.Rules",
        "fct-package": "system-filepath",
        "fct-signature": "Rules platformFormat -\u003e FilePath -\u003e Either Text Text",
        "fct-source": "src/Filesystem-Path-Internal.html#toText",
        "fct-type": "function",
        "title": "toText"
      },
      "index": {
        "description": "Attempt to convert FilePath to human readable text If the path is decoded successfully the result is Right containing the decoded text Successfully decoded text can be converted back to the original path using fromText If the path cannot be decoded the result is Left containing an approximation of the original path If displayed to the user this value should be accompanied by some warning that the path has an invalid encoding Approximated text cannot be converted back to the original path This function ignores the user locale and assumes all file paths are encoded in UTF8 If you need to display file paths with an unusual or obscure encoding use encode and then decode them manually Since",
        "hierarchy": "Filesystem Path Rules",
        "module": "Filesystem.Path.Rules",
        "name": "toText",
        "normalized": "Rules a-\u003eFilePath-\u003eEither Text Text",
        "package": "system-filepath",
        "partial": "Text",
        "signature": "Rules platformFormat-\u003eFilePath-\u003eEither Text Text"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/system-filepath/docs/Filesystem-Path-Rules.html#v:valid",
      "description": {
        "fct-descr": "\u003cp\u003eCheck if a \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e is valid; it must not contain any illegal\n characters, and must have a root appropriate to the current\n \u003ccode\u003e\u003ca\u003eRules\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Filesystem.Path.Rules",
        "fct-package": "system-filepath",
        "fct-signature": "Rules platformFormat -\u003e FilePath -\u003e Bool",
        "fct-source": "src/Filesystem-Path-Internal.html#valid",
        "fct-type": "function",
        "title": "valid"
      },
      "index": {
        "description": "Check if FilePath is valid it must not contain any illegal characters and must have root appropriate to the current Rules",
        "hierarchy": "Filesystem Path Rules",
        "module": "Filesystem.Path.Rules",
        "name": "valid",
        "normalized": "Rules a-\u003eFilePath-\u003eBool",
        "package": "system-filepath",
        "partial": "",
        "signature": "Rules platformFormat-\u003eFilePath-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/system-filepath/docs/Filesystem-Path-Rules.html#v:windows",
      "description": {
        "fct-descr": "\u003cp\u003eWindows and DOS\n\u003c/p\u003e",
        "fct-module": "Filesystem.Path.Rules",
        "fct-package": "system-filepath",
        "fct-signature": "Rules Text",
        "fct-source": "src/Filesystem-Path-Rules.html#windows",
        "fct-type": "function",
        "title": "windows"
      },
      "index": {
        "description": "Windows and DOS",
        "hierarchy": "Filesystem Path Rules",
        "module": "Filesystem.Path.Rules",
        "name": "windows",
        "normalized": "",
        "package": "system-filepath",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/system-filepath/docs/Filesystem-Path.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHigh&#8208;level, byte&#8208;based file and directory path\n manipulations. You probably want to import \u003ca\u003eFilesystem.Path.CurrentOS\u003c/a\u003e\n instead, since it handles detecting which rules to use in the current\n compilation.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Filesystem.Path",
        "fct-package": "system-filepath",
        "fct-signature": "module",
        "fct-source": "src/Filesystem-Path.html",
        "fct-type": "module",
        "title": "Path"
      },
      "index": {
        "description": "High level byte based file and directory path manipulations You probably want to import Filesystem.Path.CurrentOS instead since it handles detecting which rules to use in the current compilation",
        "hierarchy": "Filesystem Path",
        "module": "Filesystem.Path",
        "name": "Path",
        "normalized": "",
        "package": "system-filepath",
        "partial": "Path",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/system-filepath/docs/Filesystem-Path.html#t:FilePath",
      "description": {
        "fct-module": "Filesystem.Path",
        "fct-package": "system-filepath",
        "fct-signature": "data",
        "fct-source": "src/Filesystem-Path-Internal.html#FilePath",
        "fct-type": "data",
        "title": "FilePath"
      },
      "index": {
        "description": "",
        "hierarchy": "Filesystem Path",
        "module": "Filesystem.Path",
        "name": "FilePath",
        "normalized": "",
        "package": "system-filepath",
        "partial": "File Path",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/system-filepath/docs/Filesystem-Path.html#v:-60--47--62-",
      "description": {
        "fct-descr": "\u003cp\u003eAn alias for \u003ccode\u003e\u003ca\u003eappend\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Filesystem.Path",
        "fct-package": "system-filepath",
        "fct-signature": "FilePath -\u003e FilePath -\u003e FilePath",
        "fct-source": "src/Filesystem-Path.html#%3C%2F%3E",
        "fct-type": "function",
        "title": "(\u003c/\u003e)"
      },
      "index": {
        "description": "An alias for append",
        "hierarchy": "Filesystem Path",
        "module": "Filesystem.Path",
        "name": "(\u003c/\u003e) \u003c/\u003e",
        "normalized": "FilePath-\u003eFilePath-\u003eFilePath",
        "package": "system-filepath",
        "partial": "",
        "signature": "FilePath-\u003eFilePath-\u003eFilePath"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/system-filepath/docs/Filesystem-Path.html#v:-60-.-62-",
      "description": {
        "fct-descr": "\u003cp\u003eAn alias for \u003ccode\u003e\u003ca\u003eaddExtension\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Filesystem.Path",
        "fct-package": "system-filepath",
        "fct-signature": "FilePath -\u003e Text -\u003e FilePath",
        "fct-source": "src/Filesystem-Path.html#%3C.%3E",
        "fct-type": "function",
        "title": "(\u003c.\u003e)"
      },
      "index": {
        "description": "An alias for addExtension",
        "hierarchy": "Filesystem Path",
        "module": "Filesystem.Path",
        "name": "(\u003c.\u003e) \u003c.\u003e",
        "normalized": "FilePath-\u003eText-\u003eFilePath",
        "package": "system-filepath",
        "partial": "",
        "signature": "FilePath-\u003eText-\u003eFilePath"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/system-filepath/docs/Filesystem-Path.html#v:absolute",
      "description": {
        "fct-descr": "\u003cp\u003eTest whether a path is absolute.\n\u003c/p\u003e",
        "fct-module": "Filesystem.Path",
        "fct-package": "system-filepath",
        "fct-signature": "FilePath -\u003e Bool",
        "fct-source": "src/Filesystem-Path.html#absolute",
        "fct-type": "function",
        "title": "absolute"
      },
      "index": {
        "description": "Test whether path is absolute",
        "hierarchy": "Filesystem Path",
        "module": "Filesystem.Path",
        "name": "absolute",
        "normalized": "FilePath-\u003eBool",
        "package": "system-filepath",
        "partial": "",
        "signature": "FilePath-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/system-filepath/docs/Filesystem-Path.html#v:addExtension",
      "description": {
        "fct-descr": "\u003cp\u003eAppend an extension to the end of a \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Filesystem.Path",
        "fct-package": "system-filepath",
        "fct-signature": "FilePath -\u003e Text -\u003e FilePath",
        "fct-source": "src/Filesystem-Path.html#addExtension",
        "fct-type": "function",
        "title": "addExtension"
      },
      "index": {
        "description": "Append an extension to the end of FilePath",
        "hierarchy": "Filesystem Path",
        "module": "Filesystem.Path",
        "name": "addExtension",
        "normalized": "FilePath-\u003eText-\u003eFilePath",
        "package": "system-filepath",
        "partial": "Extension",
        "signature": "FilePath-\u003eText-\u003eFilePath"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/system-filepath/docs/Filesystem-Path.html#v:addExtensions",
      "description": {
        "fct-descr": "\u003cp\u003eAppend many extensions to the end of a \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Filesystem.Path",
        "fct-package": "system-filepath",
        "fct-signature": "FilePath -\u003e [Text] -\u003e FilePath",
        "fct-source": "src/Filesystem-Path.html#addExtensions",
        "fct-type": "function",
        "title": "addExtensions"
      },
      "index": {
        "description": "Append many extensions to the end of FilePath",
        "hierarchy": "Filesystem Path",
        "module": "Filesystem.Path",
        "name": "addExtensions",
        "normalized": "FilePath-\u003e[Text]-\u003eFilePath",
        "package": "system-filepath",
        "partial": "Extensions",
        "signature": "FilePath-\u003e[Text]-\u003eFilePath"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/system-filepath/docs/Filesystem-Path.html#v:append",
      "description": {
        "fct-descr": "\u003cp\u003eAppends two \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003es. If the second path is absolute, it is returned\n unchanged.\n\u003c/p\u003e",
        "fct-module": "Filesystem.Path",
        "fct-package": "system-filepath",
        "fct-signature": "FilePath -\u003e FilePath -\u003e FilePath",
        "fct-source": "src/Filesystem-Path.html#append",
        "fct-type": "function",
        "title": "append"
      },
      "index": {
        "description": "Appends two FilePath If the second path is absolute it is returned unchanged",
        "hierarchy": "Filesystem Path",
        "module": "Filesystem.Path",
        "name": "append",
        "normalized": "FilePath-\u003eFilePath-\u003eFilePath",
        "package": "system-filepath",
        "partial": "",
        "signature": "FilePath-\u003eFilePath-\u003eFilePath"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/system-filepath/docs/Filesystem-Path.html#v:basename",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieve a \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e&#8217;s basename component.\n\u003c/p\u003e\u003cpre\u003e\n basename \"foo/bar.txt\" == \"bar\"\n\u003c/pre\u003e",
        "fct-module": "Filesystem.Path",
        "fct-package": "system-filepath",
        "fct-signature": "FilePath -\u003e FilePath",
        "fct-source": "src/Filesystem-Path.html#basename",
        "fct-type": "function",
        "title": "basename"
      },
      "index": {
        "description": "Retrieve FilePath basename component basename foo bar.txt bar",
        "hierarchy": "Filesystem Path",
        "module": "Filesystem.Path",
        "name": "basename",
        "normalized": "FilePath-\u003eFilePath",
        "package": "system-filepath",
        "partial": "",
        "signature": "FilePath-\u003eFilePath"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/system-filepath/docs/Filesystem-Path.html#v:collapse",
      "description": {
        "fct-descr": "\u003cp\u003eRemove \u003ccode\u003e\".\"\u003c/code\u003e and \u003ccode\u003e\"..\"\u003c/code\u003e directories from a path.\n\u003c/p\u003e\u003cp\u003eNote that if any of the elements are symbolic links, \u003ccode\u003e\u003ca\u003ecollapse\u003c/a\u003e\u003c/code\u003e may change\n which file the path resolves to.\n\u003c/p\u003e\u003cp\u003eSince: 0.2\n\u003c/p\u003e",
        "fct-module": "Filesystem.Path",
        "fct-package": "system-filepath",
        "fct-signature": "FilePath -\u003e FilePath",
        "fct-source": "src/Filesystem-Path.html#collapse",
        "fct-type": "function",
        "title": "collapse"
      },
      "index": {
        "description": "Remove and directories from path Note that if any of the elements are symbolic links collapse may change which file the path resolves to Since",
        "hierarchy": "Filesystem Path",
        "module": "Filesystem.Path",
        "name": "collapse",
        "normalized": "FilePath-\u003eFilePath",
        "package": "system-filepath",
        "partial": "",
        "signature": "FilePath-\u003eFilePath"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/system-filepath/docs/Filesystem-Path.html#v:commonPrefix",
      "description": {
        "fct-descr": "\u003cp\u003eFind the greatest common prefix between a list of \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
        "fct-module": "Filesystem.Path",
        "fct-package": "system-filepath",
        "fct-signature": "[FilePath] -\u003e FilePath",
        "fct-source": "src/Filesystem-Path.html#commonPrefix",
        "fct-type": "function",
        "title": "commonPrefix"
      },
      "index": {
        "description": "Find the greatest common prefix between list of FilePath",
        "hierarchy": "Filesystem Path",
        "module": "Filesystem.Path",
        "name": "commonPrefix",
        "normalized": "[FilePath]-\u003eFilePath",
        "package": "system-filepath",
        "partial": "Prefix",
        "signature": "[FilePath]-\u003eFilePath"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/system-filepath/docs/Filesystem-Path.html#v:concat",
      "description": {
        "fct-descr": "\u003cp\u003eA fold over \u003ccode\u003e\u003ca\u003eappend\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Filesystem.Path",
        "fct-package": "system-filepath",
        "fct-signature": "[FilePath] -\u003e FilePath",
        "fct-source": "src/Filesystem-Path.html#concat",
        "fct-type": "function",
        "title": "concat"
      },
      "index": {
        "description": "fold over append",
        "hierarchy": "Filesystem Path",
        "module": "Filesystem.Path",
        "name": "concat",
        "normalized": "[FilePath]-\u003eFilePath",
        "package": "system-filepath",
        "partial": "",
        "signature": "[FilePath]-\u003eFilePath"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/system-filepath/docs/Filesystem-Path.html#v:directory",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieves the \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e&#8217;s directory. If the path is already a\n directory, it is returned unchanged.\n\u003c/p\u003e",
        "fct-module": "Filesystem.Path",
        "fct-package": "system-filepath",
        "fct-signature": "FilePath -\u003e FilePath",
        "fct-source": "src/Filesystem-Path.html#directory",
        "fct-type": "function",
        "title": "directory"
      },
      "index": {
        "description": "Retrieves the FilePath directory If the path is already directory it is returned unchanged",
        "hierarchy": "Filesystem Path",
        "module": "Filesystem.Path",
        "name": "directory",
        "normalized": "FilePath-\u003eFilePath",
        "package": "system-filepath",
        "partial": "",
        "signature": "FilePath-\u003eFilePath"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/system-filepath/docs/Filesystem-Path.html#v:dirname",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieve a \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e&#8217;s directory name. This is only the\n \u003cem\u003efile name\u003c/em\u003e of the directory, not its full path.\n\u003c/p\u003e\u003cpre\u003e\n dirname \"foo/bar/baz.txt\" == \"bar\"\n dirname \"/\" == \"\"\n\u003c/pre\u003e\u003cp\u003eSince: 0.4.1\n\u003c/p\u003e",
        "fct-module": "Filesystem.Path",
        "fct-package": "system-filepath",
        "fct-signature": "FilePath -\u003e FilePath",
        "fct-source": "src/Filesystem-Path.html#dirname",
        "fct-type": "function",
        "title": "dirname"
      },
      "index": {
        "description": "Retrieve FilePath directory name This is only the file name of the directory not its full path dirname foo bar baz.txt bar dirname Since",
        "hierarchy": "Filesystem Path",
        "module": "Filesystem.Path",
        "name": "dirname",
        "normalized": "FilePath-\u003eFilePath",
        "package": "system-filepath",
        "partial": "",
        "signature": "FilePath-\u003eFilePath"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/system-filepath/docs/Filesystem-Path.html#v:dropExtension",
      "description": {
        "fct-descr": "\u003cp\u003eRemove a \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e&#8217;s last extension.\n\u003c/p\u003e",
        "fct-module": "Filesystem.Path",
        "fct-package": "system-filepath",
        "fct-signature": "FilePath -\u003e FilePath",
        "fct-source": "src/Filesystem-Path.html#dropExtension",
        "fct-type": "function",
        "title": "dropExtension"
      },
      "index": {
        "description": "Remove FilePath last extension",
        "hierarchy": "Filesystem Path",
        "module": "Filesystem.Path",
        "name": "dropExtension",
        "normalized": "FilePath-\u003eFilePath",
        "package": "system-filepath",
        "partial": "Extension",
        "signature": "FilePath-\u003eFilePath"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/system-filepath/docs/Filesystem-Path.html#v:dropExtensions",
      "description": {
        "fct-descr": "\u003cp\u003eRemove all extensions from a \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Filesystem.Path",
        "fct-package": "system-filepath",
        "fct-signature": "FilePath -\u003e FilePath",
        "fct-source": "src/Filesystem-Path.html#dropExtensions",
        "fct-type": "function",
        "title": "dropExtensions"
      },
      "index": {
        "description": "Remove all extensions from FilePath",
        "hierarchy": "Filesystem Path",
        "module": "Filesystem.Path",
        "name": "dropExtensions",
        "normalized": "FilePath-\u003eFilePath",
        "package": "system-filepath",
        "partial": "Extensions",
        "signature": "FilePath-\u003eFilePath"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/system-filepath/docs/Filesystem-Path.html#v:empty",
      "description": {
        "fct-descr": "\u003cp\u003eA file path with no root, directory, or filename\n\u003c/p\u003e",
        "fct-module": "Filesystem.Path",
        "fct-package": "system-filepath",
        "fct-signature": "FilePath",
        "fct-source": "src/Filesystem-Path-Internal.html#empty",
        "fct-type": "function",
        "title": "empty"
      },
      "index": {
        "description": "file path with no root directory or filename",
        "hierarchy": "Filesystem Path",
        "module": "Filesystem.Path",
        "name": "empty",
        "normalized": "",
        "package": "system-filepath",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/system-filepath/docs/Filesystem-Path.html#v:extension",
      "description": {
        "fct-descr": "\u003cp\u003eGet a \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e&#8217;s last extension, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if it has no\n extensions.\n\u003c/p\u003e",
        "fct-module": "Filesystem.Path",
        "fct-package": "system-filepath",
        "fct-signature": "FilePath -\u003e Maybe Text",
        "fct-source": "src/Filesystem-Path.html#extension",
        "fct-type": "function",
        "title": "extension"
      },
      "index": {
        "description": "Get FilePath last extension or Nothing if it has no extensions",
        "hierarchy": "Filesystem Path",
        "module": "Filesystem.Path",
        "name": "extension",
        "normalized": "FilePath-\u003eMaybe Text",
        "package": "system-filepath",
        "partial": "",
        "signature": "FilePath-\u003eMaybe Text"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/system-filepath/docs/Filesystem-Path.html#v:extensions",
      "description": {
        "fct-descr": "\u003cp\u003eGet a \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e&#8217;s full extension list.\n\u003c/p\u003e",
        "fct-module": "Filesystem.Path",
        "fct-package": "system-filepath",
        "fct-signature": "FilePath -\u003e [Text]",
        "fct-source": "src/Filesystem-Path.html#extensions",
        "fct-type": "function",
        "title": "extensions"
      },
      "index": {
        "description": "Get FilePath full extension list",
        "hierarchy": "Filesystem Path",
        "module": "Filesystem.Path",
        "name": "extensions",
        "normalized": "FilePath-\u003e[Text]",
        "package": "system-filepath",
        "partial": "",
        "signature": "FilePath-\u003e[Text]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/system-filepath/docs/Filesystem-Path.html#v:filename",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieve a \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e&#8217;s filename component.\n\u003c/p\u003e\u003cpre\u003e\n filename \"foo/bar.txt\" == \"bar.txt\"\n\u003c/pre\u003e",
        "fct-module": "Filesystem.Path",
        "fct-package": "system-filepath",
        "fct-signature": "FilePath -\u003e FilePath",
        "fct-source": "src/Filesystem-Path.html#filename",
        "fct-type": "function",
        "title": "filename"
      },
      "index": {
        "description": "Retrieve FilePath filename component filename foo bar.txt bar.txt",
        "hierarchy": "Filesystem Path",
        "module": "Filesystem.Path",
        "name": "filename",
        "normalized": "FilePath-\u003eFilePath",
        "package": "system-filepath",
        "partial": "",
        "signature": "FilePath-\u003eFilePath"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/system-filepath/docs/Filesystem-Path.html#v:hasExtension",
      "description": {
        "fct-descr": "\u003cp\u003eGet whether a \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e&#8217;s last extension is the predicate.\n\u003c/p\u003e",
        "fct-module": "Filesystem.Path",
        "fct-package": "system-filepath",
        "fct-signature": "FilePath -\u003e Text -\u003e Bool",
        "fct-source": "src/Filesystem-Path.html#hasExtension",
        "fct-type": "function",
        "title": "hasExtension"
      },
      "index": {
        "description": "Get whether FilePath last extension is the predicate",
        "hierarchy": "Filesystem Path",
        "module": "Filesystem.Path",
        "name": "hasExtension",
        "normalized": "FilePath-\u003eText-\u003eBool",
        "package": "system-filepath",
        "partial": "Extension",
        "signature": "FilePath-\u003eText-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/system-filepath/docs/Filesystem-Path.html#v:null",
      "description": {
        "fct-descr": "\u003cpre\u003enull p = (p == \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e)\u003c/pre\u003e",
        "fct-module": "Filesystem.Path",
        "fct-package": "system-filepath",
        "fct-signature": "FilePath -\u003e Bool",
        "fct-source": "src/Filesystem-Path.html#null",
        "fct-type": "function",
        "title": "null"
      },
      "index": {
        "description": "null empty",
        "hierarchy": "Filesystem Path",
        "module": "Filesystem.Path",
        "name": "null",
        "normalized": "FilePath-\u003eBool",
        "package": "system-filepath",
        "partial": "",
        "signature": "FilePath-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/system-filepath/docs/Filesystem-Path.html#v:parent",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieves the \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e&#8217;s parent directory.\n\u003c/p\u003e",
        "fct-module": "Filesystem.Path",
        "fct-package": "system-filepath",
        "fct-signature": "FilePath -\u003e FilePath",
        "fct-source": "src/Filesystem-Path.html#parent",
        "fct-type": "function",
        "title": "parent"
      },
      "index": {
        "description": "Retrieves the FilePath parent directory",
        "hierarchy": "Filesystem Path",
        "module": "Filesystem.Path",
        "name": "parent",
        "normalized": "FilePath-\u003eFilePath",
        "package": "system-filepath",
        "partial": "",
        "signature": "FilePath-\u003eFilePath"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/system-filepath/docs/Filesystem-Path.html#v:relative",
      "description": {
        "fct-descr": "\u003cp\u003eTest whether a path is relative.\n\u003c/p\u003e",
        "fct-module": "Filesystem.Path",
        "fct-package": "system-filepath",
        "fct-signature": "FilePath -\u003e Bool",
        "fct-source": "src/Filesystem-Path.html#relative",
        "fct-type": "function",
        "title": "relative"
      },
      "index": {
        "description": "Test whether path is relative",
        "hierarchy": "Filesystem Path",
        "module": "Filesystem.Path",
        "name": "relative",
        "normalized": "FilePath-\u003eBool",
        "package": "system-filepath",
        "partial": "",
        "signature": "FilePath-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/system-filepath/docs/Filesystem-Path.html#v:replaceExtension",
      "description": {
        "fct-descr": "\u003cp\u003eReplace a \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e&#8217;s last extension.\n\u003c/p\u003e",
        "fct-module": "Filesystem.Path",
        "fct-package": "system-filepath",
        "fct-signature": "FilePath -\u003e Text -\u003e FilePath",
        "fct-source": "src/Filesystem-Path.html#replaceExtension",
        "fct-type": "function",
        "title": "replaceExtension"
      },
      "index": {
        "description": "Replace FilePath last extension",
        "hierarchy": "Filesystem Path",
        "module": "Filesystem.Path",
        "name": "replaceExtension",
        "normalized": "FilePath-\u003eText-\u003eFilePath",
        "package": "system-filepath",
        "partial": "Extension",
        "signature": "FilePath-\u003eText-\u003eFilePath"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/system-filepath/docs/Filesystem-Path.html#v:replaceExtensions",
      "description": {
        "fct-descr": "\u003cp\u003eRemove all extensions from a \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e, and replace them with a new\n list.\n\u003c/p\u003e",
        "fct-module": "Filesystem.Path",
        "fct-package": "system-filepath",
        "fct-signature": "FilePath -\u003e [Text] -\u003e FilePath",
        "fct-source": "src/Filesystem-Path.html#replaceExtensions",
        "fct-type": "function",
        "title": "replaceExtensions"
      },
      "index": {
        "description": "Remove all extensions from FilePath and replace them with new list",
        "hierarchy": "Filesystem Path",
        "module": "Filesystem.Path",
        "name": "replaceExtensions",
        "normalized": "FilePath-\u003e[Text]-\u003eFilePath",
        "package": "system-filepath",
        "partial": "Extensions",
        "signature": "FilePath-\u003e[Text]-\u003eFilePath"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/system-filepath/docs/Filesystem-Path.html#v:root",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieves the \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e&#8217;s root.\n\u003c/p\u003e",
        "fct-module": "Filesystem.Path",
        "fct-package": "system-filepath",
        "fct-signature": "FilePath -\u003e FilePath",
        "fct-source": "src/Filesystem-Path.html#root",
        "fct-type": "function",
        "title": "root"
      },
      "index": {
        "description": "Retrieves the FilePath root",
        "hierarchy": "Filesystem Path",
        "module": "Filesystem.Path",
        "name": "root",
        "normalized": "FilePath-\u003eFilePath",
        "package": "system-filepath",
        "partial": "",
        "signature": "FilePath-\u003eFilePath"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/system-filepath/docs/Filesystem-Path.html#v:splitDirectories",
      "description": {
        "fct-descr": "\u003cp\u003eexpand a FilePath into a list of the root name, directories, and file name\n\u003c/p\u003e\u003cp\u003eSince: 0.4.7\n\u003c/p\u003e",
        "fct-module": "Filesystem.Path",
        "fct-package": "system-filepath",
        "fct-signature": "FilePath -\u003e [FilePath]",
        "fct-source": "src/Filesystem-Path.html#splitDirectories",
        "fct-type": "function",
        "title": "splitDirectories"
      },
      "index": {
        "description": "expand FilePath into list of the root name directories and file name Since",
        "hierarchy": "Filesystem Path",
        "module": "Filesystem.Path",
        "name": "splitDirectories",
        "normalized": "FilePath-\u003e[FilePath]",
        "package": "system-filepath",
        "partial": "Directories",
        "signature": "FilePath-\u003e[FilePath]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/system-filepath/docs/Filesystem-Path.html#v:splitExtension",
      "description": {
        "fct-descr": "\u003cpre\u003esplitExtension p = (\u003ccode\u003e\u003ca\u003edropExtension\u003c/a\u003e\u003c/code\u003e p, \u003ccode\u003e\u003ca\u003eextension\u003c/a\u003e\u003c/code\u003e p)\u003c/pre\u003e",
        "fct-module": "Filesystem.Path",
        "fct-package": "system-filepath",
        "fct-signature": "FilePath -\u003e (FilePath, Maybe Text)",
        "fct-source": "src/Filesystem-Path.html#splitExtension",
        "fct-type": "function",
        "title": "splitExtension"
      },
      "index": {
        "description": "splitExtension dropExtension extension",
        "hierarchy": "Filesystem Path",
        "module": "Filesystem.Path",
        "name": "splitExtension",
        "normalized": "FilePath-\u003e(FilePath,Maybe Text)",
        "package": "system-filepath",
        "partial": "Extension",
        "signature": "FilePath-\u003e(FilePath,Maybe Text)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/system-filepath/docs/Filesystem-Path.html#v:splitExtensions",
      "description": {
        "fct-descr": "\u003cpre\u003esplitExtensions p = (\u003ccode\u003e\u003ca\u003edropExtensions\u003c/a\u003e\u003c/code\u003e p, \u003ccode\u003e\u003ca\u003eextensions\u003c/a\u003e\u003c/code\u003e p)\u003c/pre\u003e",
        "fct-module": "Filesystem.Path",
        "fct-package": "system-filepath",
        "fct-signature": "FilePath -\u003e (FilePath, [Text])",
        "fct-source": "src/Filesystem-Path.html#splitExtensions",
        "fct-type": "function",
        "title": "splitExtensions"
      },
      "index": {
        "description": "splitExtensions dropExtensions extensions",
        "hierarchy": "Filesystem Path",
        "module": "Filesystem.Path",
        "name": "splitExtensions",
        "normalized": "FilePath-\u003e(FilePath,[Text])",
        "package": "system-filepath",
        "partial": "Extensions",
        "signature": "FilePath-\u003e(FilePath,[Text])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/system-filepath/docs/Filesystem-Path.html#v:stripPrefix",
      "description": {
        "fct-descr": "\u003cp\u003eRemove a prefix from a path.\n\u003c/p\u003e\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003estripPrefix\u003c/a\u003e\u003c/code\u003e \"/foo/\" \"/foo/bar/baz.txt\" == Just \"bar/baz.txt\"\n \u003ccode\u003e\u003ca\u003estripPrefix\u003c/a\u003e\u003c/code\u003e \"/foo/\" \"/bar/baz.txt\" == Nothing\n\u003c/pre\u003e\u003cp\u003eSince: 0.4.1\n\u003c/p\u003e",
        "fct-module": "Filesystem.Path",
        "fct-package": "system-filepath",
        "fct-signature": "FilePath -\u003e FilePath -\u003e Maybe FilePath",
        "fct-source": "src/Filesystem-Path.html#stripPrefix",
        "fct-type": "function",
        "title": "stripPrefix"
      },
      "index": {
        "description": "Remove prefix from path stripPrefix foo foo bar baz.txt Just bar baz.txt stripPrefix foo bar baz.txt Nothing Since",
        "hierarchy": "Filesystem Path",
        "module": "Filesystem.Path",
        "name": "stripPrefix",
        "normalized": "FilePath-\u003eFilePath-\u003eMaybe FilePath",
        "package": "system-filepath",
        "partial": "Prefix",
        "signature": "FilePath-\u003eFilePath-\u003eMaybe FilePath"
      }
    }
  }
]