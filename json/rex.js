[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rex/docs/Text-Regex-PCRE-Precompile.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides support for accessing the compiled representation of\n PCRE regular expressions.  This byte array encodes a lookup-table based\n representation for the regular expression, and can be safely written\n out and read back by compatible PCRE versions.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.Regex.PCRE.Precompile",
        "fct-package": "rex",
        "fct-signature": "module",
        "fct-source": "src/Text-Regex-PCRE-Precompile.html",
        "fct-type": "module",
        "title": "Precompile"
      },
      "index": {
        "description": "This module provides support for accessing the compiled representation of PCRE regular expressions This byte array encodes lookup-table based representation for the regular expression and can be safely written out and read back by compatible PCRE versions",
        "hierarchy": "Text Regex PCRE Precompile",
        "module": "Text.Regex.PCRE.Precompile",
        "name": "Precompile",
        "normalized": "",
        "package": "rex",
        "partial": "Precompile",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rex/docs/Text-Regex-PCRE-Precompile.html#t:CompiledBytes",
      "description": {
        "fct-descr": "\u003cp\u003eA synonym indicating which ByteStrings represent PCRE-format compiled data.\n\u003c/p\u003e",
        "fct-module": "Text.Regex.PCRE.Precompile",
        "fct-package": "rex",
        "fct-signature": "type",
        "fct-source": "src/Text-Regex-PCRE-Precompile.html#CompiledBytes",
        "fct-type": "type",
        "title": "CompiledBytes"
      },
      "index": {
        "description": "synonym indicating which ByteStrings represent PCRE-format compiled data",
        "hierarchy": "Text Regex PCRE Precompile",
        "module": "Text.Regex.PCRE.Precompile",
        "name": "CompiledBytes",
        "normalized": "",
        "package": "rex",
        "partial": "Compiled Bytes",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rex/docs/Text-Regex-PCRE-Precompile.html#v:precompile",
      "description": {
        "fct-descr": "\u003cp\u003eCompiles the given regular expression, and assuming nothing bad happens,\n yields the bytestring filled with PCRE's compiled representation.\n\u003c/p\u003e",
        "fct-module": "Text.Regex.PCRE.Precompile",
        "fct-package": "rex",
        "fct-signature": "ByteString -\u003e [PCREOption] -\u003e IO (Maybe CompiledBytes)",
        "fct-source": "src/Text-Regex-PCRE-Precompile.html#precompile",
        "fct-type": "function",
        "title": "precompile"
      },
      "index": {
        "description": "Compiles the given regular expression and assuming nothing bad happens yields the bytestring filled with PCRE compiled representation",
        "hierarchy": "Text Regex PCRE Precompile",
        "module": "Text.Regex.PCRE.Precompile",
        "name": "precompile",
        "normalized": "ByteString-\u003e[PCREOption]-\u003eIO(Maybe CompiledBytes)",
        "package": "rex",
        "partial": "",
        "signature": "ByteString-\u003e[PCREOption]-\u003eIO(Maybe CompiledBytes)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rex/docs/Text-Regex-PCRE-Precompile.html#v:regexFromTable",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a regular expression from the compiled representation.\n\u003c/p\u003e",
        "fct-module": "Text.Regex.PCRE.Precompile",
        "fct-package": "rex",
        "fct-signature": "CompiledBytes -\u003e IO Regex",
        "fct-source": "src/Text-Regex-PCRE-Precompile.html#regexFromTable",
        "fct-type": "function",
        "title": "regexFromTable"
      },
      "index": {
        "description": "Creates regular expression from the compiled representation",
        "hierarchy": "Text Regex PCRE Precompile",
        "module": "Text.Regex.PCRE.Precompile",
        "name": "regexFromTable",
        "normalized": "CompiledBytes-\u003eIO Regex",
        "package": "rex",
        "partial": "From Table",
        "signature": "CompiledBytes-\u003eIO Regex"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rex/docs/Text-Regex-PCRE-Precompile.html#v:regexToTable",
      "description": {
        "fct-descr": "\u003cp\u003eTakes a compiled regular expression, and if successful, yields the\n compiled representation.\n\u003c/p\u003e",
        "fct-module": "Text.Regex.PCRE.Precompile",
        "fct-package": "rex",
        "fct-signature": "Regex -\u003e IO (Maybe CompiledBytes)",
        "fct-source": "src/Text-Regex-PCRE-Precompile.html#regexToTable",
        "fct-type": "function",
        "title": "regexToTable"
      },
      "index": {
        "description": "Takes compiled regular expression and if successful yields the compiled representation",
        "hierarchy": "Text Regex PCRE Precompile",
        "module": "Text.Regex.PCRE.Precompile",
        "name": "regexToTable",
        "normalized": "Regex-\u003eIO(Maybe CompiledBytes)",
        "package": "rex",
        "partial": "To Table",
        "signature": "Regex-\u003eIO(Maybe CompiledBytes)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rex/docs/Text-Regex-PCRE-Rex.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides a template Haskell quasiquoter for regular\n expressions, which provides the following features:\n\u003c/p\u003e\u003cp\u003e1) Compile-time checking that the regular expression is valid.\n\u003c/p\u003e\u003cp\u003e2) Arity of resulting tuple based on the number of selected capture patterns\n in the regular expression.\n\u003c/p\u003e\u003cp\u003e3) Allows for the inline interpolation of mapping functions :: String -\u003e a.\n\u003c/p\u003e\u003cp\u003e4) Precompiles the regular expression at compile time, by calling into the\n PCRE library and storing a \u003ccode\u003eByteString\u003c/code\u003e literal representation of its state.\n\u003c/p\u003e\u003cp\u003e5) Compile-time configurable to use different PCRE options, turn off\n precompilation, use \u003ccode\u003eByteString\u003c/code\u003es, or set a default mapping expression.\n\u003c/p\u003e\u003cp\u003eSince this is a quasiquoter library that generates code using view patterns,\n the following extensions are required:\n\u003c/p\u003e\u003cpre\u003e {-# LANGUAGE TemplateHaskell, QuasiQuotes, ViewPatterns #-}\n\u003c/pre\u003e\u003cp\u003eHere's a silly example which parses peano numbers of the form Z, S Z,\n S S Z, etc.  The s+ means that it is not sensitive to the quantity or type\n of seperating whitespace. (these examples can also be found in Test.hs)\n\u003c/p\u003e\u003cpre\u003e peano :: String -\u003e Maybe Int\n peano = [rex|^(?{ length . filter (=='S') } \\s* (?:S\\s+)*Z)\\s*$|]\n\u003c/pre\u003e\u003cpre\u003e *Main\u003e peano \"Z\"\n Just 0\n *Main\u003e peano \"S Z\"\n Just 1\n *Main\u003e peano \"S   S Z\"\n Just 2\n *Main\u003e peano \"S S S Z\"\n Just 3\n *Main\u003e peano \"invalid\"\n Nothing\n\u003c/pre\u003e\u003cp\u003eThe token \"(?{\" introduces a capture group which has a mapping applied to\n the -- result - in this case \"length . filter (==\u003ccode\u003eS\u003c/code\u003e)\".  If the ?{ ... }\n are omitted, then the capture group is not taken as part of the results of\n the match.  If the contents of the ?{ ... } is omitted, then \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e is assumed:\n\u003c/p\u003e\u003cpre\u003e parsePair :: String -\u003e Maybe (String, String)\n parsePair = [rex|^\u003c\\s* (?{ }[^\\s,\u003e]+) \\s*,\\s* (?{ }[^\\s,\u003e]+) \\s*\u003e$|]\n\u003c/pre\u003e\u003cp\u003eThe following example is derived from\n http:\u003cem/\u003ewww.regular-expressions.info/dates.html\n\u003c/p\u003e\u003cpre\u003e parseDate :: String -\u003e Maybe (Int, Int, Int)\n parseDate [rex|^(?{ read -\u003e y }(?:19|20)\\d\\d)[- /.]\n                 (?{ read -\u003e m }0[1-9]|1[012])[- /.]\n                 (?{ read -\u003e d }0[1-9]|[12][0-9]|3[01])$|]\n   |  (d \u003e 30 && (m `elem` [4, 6, 9, 11]))\n   || (m == 2 &&\n       (d == 29 && not (mod y 4 == 0 && (mod y 100 /= 0 || mod y 400 == 0)))\n      || (d \u003e 29)) = Nothing\n   | otherwise = Just (y, m, d)\n parseDate _ = Nothing\n\u003c/pre\u003e\u003cp\u003eThe above example makes use of the regex quasi-quoter as a pattern matcher.\n The interpolated Haskell patterns are used to construct an implicit view\n pattern out of the inlined ones.  The above pattern is expanded to the\n equivalent:\n\u003c/p\u003e\u003cpre\u003e parseDate ([rex|^(?{ read }(?:19|20)\\d\\d)[- /.]\n                  (?{ read }0[1-9]|1[012])[- /.]\n                  (?{ read }0[1-9]|[12][0-9]|3[01])$|]\n           -\u003e Just (y, m, d))\n\u003c/pre\u003e\u003cp\u003eThere are also a few other inelegances:\n\u003c/p\u003e\u003cp\u003e1) PCRE captures, unlike .NET regular expressions, yield the last capture\n made by a particular pattern.  So, for example, (...)*, will only yield one\n match for \u003ccode\u003e...\u003c/code\u003e.  Ideally these would be detected and yield an implicit [a].\n\u003c/p\u003e\u003cp\u003e2) Patterns with disjunction between captures ((?{f}a) | (?{g}b)) will\n provide the empty string to one of f / g.  In the case of pattern\n expressions, it would be convenient to be able to map multiple captures into\n a single variable / pattern, preferring the first non-empty option.  The\n general logic for this is a bit complicated, and postponed for a later\n release.\n\u003c/p\u003e\u003cp\u003eSince pcre-light is a wrapper over a C API, the most efficient interface is\n ByteStrings, as it does not natively speak Haskell lists.  The [rex| ... ]\n quasiquoter implicitely packs the input into a bystestring, and unpacks the\n results to strings before providing them to your mappers.  The \u003ccode\u003e\u003ca\u003ebrex\u003c/a\u003e\u003c/code\u003e\n \u003ccode\u003e\u003ca\u003eQuasiQuoter\u003c/a\u003e\u003c/code\u003e is provided for this purpose.  You can also define your own\n \u003ccode\u003e\u003ca\u003eQuasiQuoter\u003c/a\u003e\u003c/code\u003e - the definitions of the default configurations are as follows:\n\u003c/p\u003e\u003cpre\u003e rex  = rexWithConf $ defaultRexConf\n brex = rexWithConf $ defaultRexConf { rexByteString = True }\n\n defaultRexConf = RexConf False True \"id\" [PCRE.extended] []\n\u003c/pre\u003e\u003cp\u003eThe first \u003ccode\u003eFalse\u003c/code\u003e specifies to use \u003ccode\u003eString\u003c/code\u003e rather than \u003ccode\u003eByteString\u003c/code\u003e.  The\n \u003ccode\u003eTrue\u003c/code\u003e argument specifies to use precompilation.  --  The\n string following is the default mapping expression, used when omitted.\n Due to GHC staging restrictions, your configuration will need to be in a\n different module than its usage.\n\u003c/p\u003e\u003cp\u003eInspired by Matt Morrow's regexqq package:\n \u003ca\u003ehttp://hackage.haskell.org/packages/archive/regexqq/latest/doc/html/src/Text-Regex-PCRE-QQ.html\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eAnd code from Erik Charlebois's interpolatedstring-qq package:\n \u003ca\u003ehttp://hackage.haskell.org/packages/archive/interpolatedstring-qq/latest/doc/html/Text-InterpolatedString-QQ.html\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.Regex.PCRE.Rex",
        "fct-package": "rex",
        "fct-signature": "module",
        "fct-source": "src/Text-Regex-PCRE-Rex.html",
        "fct-type": "module",
        "title": "Rex"
      },
      "index": {
        "description": "This module provides template Haskell quasiquoter for regular expressions which provides the following features Compile-time checking that the regular expression is valid Arity of resulting tuple based on the number of selected capture patterns in the regular expression Allows for the inline interpolation of mapping functions String Precompiles the regular expression at compile time by calling into the PCRE library and storing ByteString literal representation of its state Compile-time configurable to use different PCRE options turn off precompilation use ByteString or set default mapping expression Since this is quasiquoter library that generates code using view patterns the following extensions are required LANGUAGE TemplateHaskell QuasiQuotes ViewPatterns Here silly example which parses peano numbers of the form etc The means that it is not sensitive to the quantity or type of seperating whitespace these examples can also be found in Test.hs peano String Maybe Int peano rex length filter Main peano Just Main peano Just Main peano Just Main peano Just Main peano invalid Nothing The token introduces capture group which has mapping applied to the result in this case length filter If the are omitted then the capture group is not taken as part of the results of the match If the contents of the is omitted then id is assumed parsePair String Maybe String String parsePair rex The following example is derived from http www.regular-expressions.info dates.html parseDate String Maybe Int Int Int parseDate rex read read read elem not mod mod mod Nothing otherwise Just parseDate Nothing The above example makes use of the regex quasi-quoter as pattern matcher The interpolated Haskell patterns are used to construct an implicit view pattern out of the inlined ones The above pattern is expanded to the equivalent parseDate rex read read read Just There are also few other inelegances PCRE captures unlike NET regular expressions yield the last capture made by particular pattern So for example will only yield one match for Ideally these would be detected and yield an implicit Patterns with disjunction between captures will provide the empty string to one of In the case of pattern expressions it would be convenient to be able to map multiple captures into single variable pattern preferring the first non-empty option The general logic for this is bit complicated and postponed for later release Since pcre-light is wrapper over API the most efficient interface is ByteStrings as it does not natively speak Haskell lists The rex quasiquoter implicitely packs the input into bystestring and unpacks the results to strings before providing them to your mappers The brex QuasiQuoter is provided for this purpose You can also define your own QuasiQuoter the definitions of the default configurations are as follows rex rexWithConf defaultRexConf brex rexWithConf defaultRexConf rexByteString True defaultRexConf RexConf False True id PCRE.extended The first False specifies to use String rather than ByteString The True argument specifies to use precompilation The string following is the default mapping expression used when omitted Due to GHC staging restrictions your configuration will need to be in different module than its usage Inspired by Matt Morrow regexqq package http hackage.haskell.org packages archive regexqq latest doc html src Text-Regex-PCRE-QQ.html And code from Erik Charlebois interpolatedstring-qq package http hackage.haskell.org packages archive interpolatedstring-qq latest doc html Text-InterpolatedString-QQ.html",
        "hierarchy": "Text Regex PCRE Rex",
        "module": "Text.Regex.PCRE.Rex",
        "name": "Rex",
        "normalized": "",
        "package": "rex",
        "partial": "Rex",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rex/docs/Text-Regex-PCRE-Rex.html#t:RexConf",
      "description": {
        "fct-module": "Text.Regex.PCRE.Rex",
        "fct-package": "rex",
        "fct-signature": "data",
        "fct-source": "src/Text-Regex-PCRE-Rex.html#RexConf",
        "fct-type": "data",
        "title": "RexConf"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Regex PCRE Rex",
        "module": "Text.Regex.PCRE.Rex",
        "name": "RexConf",
        "normalized": "",
        "package": "rex",
        "partial": "Rex Conf",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rex/docs/Text-Regex-PCRE-Rex.html#v:RexConf",
      "description": {
        "fct-module": "Text.Regex.PCRE.Rex",
        "fct-package": "rex",
        "fct-signature": "RexConf",
        "fct-source": "src/Text-Regex-PCRE-Rex.html#RexConf",
        "fct-type": "function",
        "title": "RexConf"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Regex PCRE Rex",
        "module": "Text.Regex.PCRE.Rex",
        "name": "RexConf",
        "normalized": "",
        "package": "rex",
        "partial": "Rex Conf",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rex/docs/Text-Regex-PCRE-Rex.html#v:brex",
      "description": {
        "fct-descr": "\u003cp\u003eDefault regular expression quasiquoter for \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003es and \u003ccode\u003eByteString\u003c/code\u003es,\n respectively.\n\u003c/p\u003e",
        "fct-module": "Text.Regex.PCRE.Rex",
        "fct-package": "rex",
        "fct-signature": "QuasiQuoter",
        "fct-source": "src/Text-Regex-PCRE-Rex.html#brex",
        "fct-type": "function",
        "title": "brex"
      },
      "index": {
        "description": "Default regular expression quasiquoter for String and ByteString respectively",
        "hierarchy": "Text Regex PCRE Rex",
        "module": "Text.Regex.PCRE.Rex",
        "name": "brex",
        "normalized": "",
        "package": "rex",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rex/docs/Text-Regex-PCRE-Rex.html#v:defaultRexConf",
      "description": {
        "fct-descr": "\u003cp\u003eDefault rex configuration, which specifies that the regexes operate on\n   strings, don't postprocess the matched patterns, and use \u003ccode\u003e\u003ca\u003eextended\u003c/a\u003e\u003c/code\u003e.\n   This setting causes whitespace to be nonsemantic, and ignores # comments.\n\u003c/p\u003e",
        "fct-module": "Text.Regex.PCRE.Rex",
        "fct-package": "rex",
        "fct-signature": "RexConf",
        "fct-source": "src/Text-Regex-PCRE-Rex.html#defaultRexConf",
        "fct-type": "function",
        "title": "defaultRexConf"
      },
      "index": {
        "description": "Default rex configuration which specifies that the regexes operate on strings don postprocess the matched patterns and use extended This setting causes whitespace to be nonsemantic and ignores comments",
        "hierarchy": "Text Regex PCRE Rex",
        "module": "Text.Regex.PCRE.Rex",
        "name": "defaultRexConf",
        "normalized": "",
        "package": "rex",
        "partial": "Rex Conf",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rex/docs/Text-Regex-PCRE-Rex.html#v:makeQuasiMultiline",
      "description": {
        "fct-descr": "\u003cp\u003eThis is a \u003ccode\u003e\u003ca\u003eQuasiQuoter\u003c/a\u003e\u003c/code\u003e transformer, which allows for a whitespace-\n   sensitive quasi-quoter to be broken over multiple lines.  The default \u003ccode\u003e\u003ca\u003erex\u003c/a\u003e\u003c/code\u003e\n   and \u003ccode\u003e\u003ca\u003ebrex\u003c/a\u003e\u003c/code\u003e functions do not need this as they are already whitespace\n   insensitive. However, if you create your own configuration, which omits the\n   \u003ccode\u003e\u003ca\u003eextended\u003c/a\u003e\u003c/code\u003e parameter, then this could be useful. The leading space of\n   each line is ignored, and all newlines removed.\n\u003c/p\u003e",
        "fct-module": "Text.Regex.PCRE.Rex",
        "fct-package": "rex",
        "fct-signature": "QuasiQuoter -\u003e QuasiQuoter",
        "fct-source": "src/Text-Regex-PCRE-Rex.html#makeQuasiMultiline",
        "fct-type": "function",
        "title": "makeQuasiMultiline"
      },
      "index": {
        "description": "This is QuasiQuoter transformer which allows for whitespace sensitive quasi-quoter to be broken over multiple lines The default rex and brex functions do not need this as they are already whitespace insensitive However if you create your own configuration which omits the extended parameter then this could be useful The leading space of each line is ignored and all newlines removed",
        "hierarchy": "Text Regex PCRE Rex",
        "module": "Text.Regex.PCRE.Rex",
        "name": "makeQuasiMultiline",
        "normalized": "QuasiQuoter-\u003eQuasiQuoter",
        "package": "rex",
        "partial": "Quasi Multiline",
        "signature": "QuasiQuoter-\u003eQuasiQuoter"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rex/docs/Text-Regex-PCRE-Rex.html#v:maybeRead",
      "description": {
        "fct-descr": "\u003cp\u003eA possibly useful utility function - yields \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e x when there is a\n valid parse, and \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e otherwise.\n\u003c/p\u003e",
        "fct-module": "Text.Regex.PCRE.Rex",
        "fct-package": "rex",
        "fct-signature": "String -\u003e Maybe a",
        "fct-source": "src/Text-Regex-PCRE-Rex.html#maybeRead",
        "fct-type": "function",
        "title": "maybeRead"
      },
      "index": {
        "description": "possibly useful utility function yields Just when there is valid parse and Nothing otherwise",
        "hierarchy": "Text Regex PCRE Rex",
        "module": "Text.Regex.PCRE.Rex",
        "name": "maybeRead",
        "normalized": "String-\u003eMaybe a",
        "package": "rex",
        "partial": "Read",
        "signature": "String-\u003eMaybe a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rex/docs/Text-Regex-PCRE-Rex.html#v:padRight",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a desired list-length, if the passed list is too short, it is padded\n with the given element.  Otherwise, it trims.\n\u003c/p\u003e",
        "fct-module": "Text.Regex.PCRE.Rex",
        "fct-package": "rex",
        "fct-signature": "a -\u003e Int -\u003e [a] -\u003e [a]",
        "fct-source": "src/Text-Regex-PCRE-Rex.html#padRight",
        "fct-type": "function",
        "title": "padRight"
      },
      "index": {
        "description": "Given desired list-length if the passed list is too short it is padded with the given element Otherwise it trims",
        "hierarchy": "Text Regex PCRE Rex",
        "module": "Text.Regex.PCRE.Rex",
        "name": "padRight",
        "normalized": "a-\u003eInt-\u003e[a]-\u003e[a]",
        "package": "rex",
        "partial": "Right",
        "signature": "a-\u003eInt-\u003e[a]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rex/docs/Text-Regex-PCRE-Rex.html#v:rex",
      "description": {
        "fct-descr": "\u003cp\u003eDefault regular expression quasiquoter for \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003es and \u003ccode\u003eByteString\u003c/code\u003es,\n respectively.\n\u003c/p\u003e",
        "fct-module": "Text.Regex.PCRE.Rex",
        "fct-package": "rex",
        "fct-signature": "QuasiQuoter",
        "fct-source": "src/Text-Regex-PCRE-Rex.html#rex",
        "fct-type": "function",
        "title": "rex"
      },
      "index": {
        "description": "Default regular expression quasiquoter for String and ByteString respectively",
        "hierarchy": "Text Regex PCRE Rex",
        "module": "Text.Regex.PCRE.Rex",
        "name": "rex",
        "normalized": "",
        "package": "rex",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rex/docs/Text-Regex-PCRE-Rex.html#v:rexByteString",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.Regex.PCRE.Rex",
        "fct-package": "rex",
        "fct-signature": "Bool",
        "fct-source": "src/Text-Regex-PCRE-Rex.html#RexConf",
        "fct-type": "function",
        "title": "rexByteString"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Regex PCRE Rex",
        "module": "Text.Regex.PCRE.Rex",
        "name": "rexByteString",
        "normalized": "",
        "package": "rex",
        "partial": "Byte String",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rex/docs/Text-Regex-PCRE-Rex.html#v:rexCompiled",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.Regex.PCRE.Rex",
        "fct-package": "rex",
        "fct-signature": "Bool",
        "fct-source": "src/Text-Regex-PCRE-Rex.html#RexConf",
        "fct-type": "function",
        "title": "rexCompiled"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Regex PCRE Rex",
        "module": "Text.Regex.PCRE.Rex",
        "name": "rexCompiled",
        "normalized": "",
        "package": "rex",
        "partial": "Compiled",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rex/docs/Text-Regex-PCRE-Rex.html#v:rexPCREExecOpts",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.Regex.PCRE.Rex",
        "fct-package": "rex",
        "fct-signature": "[PCREExecOption]",
        "fct-source": "src/Text-Regex-PCRE-Rex.html#RexConf",
        "fct-type": "function",
        "title": "rexPCREExecOpts"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Regex PCRE Rex",
        "module": "Text.Regex.PCRE.Rex",
        "name": "rexPCREExecOpts",
        "normalized": "[PCREExecOption]",
        "package": "rex",
        "partial": "PCREExec Opts",
        "signature": "[PCREExecOption]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rex/docs/Text-Regex-PCRE-Rex.html#v:rexPCREOpts",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.Regex.PCRE.Rex",
        "fct-package": "rex",
        "fct-signature": "[PCREOption]",
        "fct-source": "src/Text-Regex-PCRE-Rex.html#RexConf",
        "fct-type": "function",
        "title": "rexPCREOpts"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Regex PCRE Rex",
        "module": "Text.Regex.PCRE.Rex",
        "name": "rexPCREOpts",
        "normalized": "[PCREOption]",
        "package": "rex",
        "partial": "PCREOpts",
        "signature": "[PCREOption]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rex/docs/Text-Regex-PCRE-Rex.html#v:rexView",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.Regex.PCRE.Rex",
        "fct-package": "rex",
        "fct-signature": "String",
        "fct-source": "src/Text-Regex-PCRE-Rex.html#RexConf",
        "fct-type": "function",
        "title": "rexView"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Regex PCRE Rex",
        "module": "Text.Regex.PCRE.Rex",
        "name": "rexView",
        "normalized": "",
        "package": "rex",
        "partial": "View",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rex/docs/Text-Regex-PCRE-Rex.html#v:rexWithConf",
      "description": {
        "fct-descr": "\u003cp\u003eA configureable regular-expression QuasiQuoter.  Takes the options to pass\n   to the PCRE engine, along with \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003es to flag \u003ccode\u003eByteString\u003c/code\u003e usage and\n   non-compilation respecively.  The provided \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e indicates which mapping\n   function to use, when one is omitted - \"(?{} ...)\".\n\u003c/p\u003e",
        "fct-module": "Text.Regex.PCRE.Rex",
        "fct-package": "rex",
        "fct-signature": "RexConf -\u003e QuasiQuoter",
        "fct-source": "src/Text-Regex-PCRE-Rex.html#rexWithConf",
        "fct-type": "function",
        "title": "rexWithConf"
      },
      "index": {
        "description": "configureable regular-expression QuasiQuoter Takes the options to pass to the PCRE engine along with Bool to flag ByteString usage and non-compilation respecively The provided String indicates which mapping function to use when one is omitted",
        "hierarchy": "Text Regex PCRE Rex",
        "module": "Text.Regex.PCRE.Rex",
        "name": "rexWithConf",
        "normalized": "RexConf-\u003eQuasiQuoter",
        "package": "rex",
        "partial": "With Conf",
        "signature": "RexConf-\u003eQuasiQuoter"
      }
    }
  }
]