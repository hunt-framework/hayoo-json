[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-BlackBoxTest.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA \u003cem\u003eblack box test\u003c/em\u003e in the terminology of the HTF consists of a\ndriver program that is run in various input files. For each input\nfile, the HTF checks that the driver program exits with the\ncorrect exit code and that it produces the expected output.\nThe samples directory of the HTF source tree shows an example\nfor a black box test, see \u003ca\u003ehttps://github.com/skogsbaer/HTF/tree/master/sample\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNOTE:\u003c/em\u003e If you use black box tests, you have to compile your program\nwith the \u003ccode\u003e-threaded\u003c/code\u003e option. Otherwise, your program just blocks\nindefinitely!\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Test.Framework.BlackBoxTest",
        "fct-package": "HTF",
        "fct-signature": "module",
        "fct-source": "src/Test-Framework-BlackBoxTest.html",
        "fct-type": "module",
        "title": "BlackBoxTest"
      },
      "index": {
        "description": "black box test in the terminology of the HTF consists of driver program that is run in various input files For each input file the HTF checks that the driver program exits with the correct exit code and that it produces the expected output The samples directory of the HTF source tree shows an example for black box test see https github.com skogsbaer HTF tree master sample NOTE If you use black box tests you have to compile your program with the threaded option Otherwise your program just blocks indefinitely",
        "hierarchy": "Test Framework BlackBoxTest",
        "module": "Test.Framework.BlackBoxTest",
        "name": "BlackBoxTest",
        "normalized": "",
        "package": "HTF",
        "partial": "Black Box Test",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-BlackBoxTest.html#t:BBTArgs",
      "description": {
        "fct-descr": "\u003cp\u003eUse a value of this datatype to customize various aspects\nof your black box tests.\n\u003c/p\u003e",
        "fct-module": "Test.Framework.BlackBoxTest",
        "fct-package": "HTF",
        "fct-signature": "data",
        "fct-source": "src/Test-Framework-BlackBoxTest.html#BBTArgs",
        "fct-type": "data",
        "title": "BBTArgs"
      },
      "index": {
        "description": "Use value of this datatype to customize various aspects of your black box tests",
        "hierarchy": "Test Framework BlackBoxTest",
        "module": "Test.Framework.BlackBoxTest",
        "name": "BBTArgs",
        "normalized": "",
        "package": "HTF",
        "partial": "BBTArgs",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-BlackBoxTest.html#t:Diff",
      "description": {
        "fct-descr": "\u003cp\u003eThe type of a function comparing the content of a file\nagainst a string, similar to the unix tool \u003ccode\u003ediff\u003c/code\u003e.\nThe first parameter is the name of the file containing the\nexpected output. If this parameter is \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e, then no output\nis expected. The second parameter is the actual output produced.\nIf the result is \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e then no difference was found.\nOtherwise, a \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e value contains a string explaining the\ndifferent.\n\u003c/p\u003e",
        "fct-module": "Test.Framework.BlackBoxTest",
        "fct-package": "HTF",
        "fct-signature": "type",
        "fct-source": "src/Test-Framework-BlackBoxTest.html#Diff",
        "fct-type": "type",
        "title": "Diff"
      },
      "index": {
        "description": "The type of function comparing the content of file against string similar to the unix tool diff The first parameter is the name of the file containing the expected output If this parameter is Nothing then no output is expected The second parameter is the actual output produced If the result is Nothing then no difference was found Otherwise Just value contains string explaining the different",
        "hierarchy": "Test Framework BlackBoxTest",
        "module": "Test.Framework.BlackBoxTest",
        "name": "Diff",
        "normalized": "",
        "package": "HTF",
        "partial": "Diff",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-BlackBoxTest.html#v:BBTArgs",
      "description": {
        "fct-module": "Test.Framework.BlackBoxTest",
        "fct-package": "HTF",
        "fct-signature": "BBTArgs",
        "fct-source": "src/Test-Framework-BlackBoxTest.html#BBTArgs",
        "fct-type": "function",
        "title": "BBTArgs"
      },
      "index": {
        "description": "",
        "hierarchy": "Test Framework BlackBoxTest",
        "module": "Test.Framework.BlackBoxTest",
        "name": "BBTArgs",
        "normalized": "",
        "package": "HTF",
        "partial": "BBTArgs",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-BlackBoxTest.html#v:bbtArgs_dynArgsName",
      "description": {
        "fct-descr": "\u003cp\u003eName of a file defining various arguments for executing the tests contained in a subdirectory of the test hierarchy. If a directory contains a such-named file, the arguments apply to all testfiles directly contained in this directory. See the documentation of \u003ccode\u003e\u003ca\u003eblackBoxTests\u003c/a\u003e\u003c/code\u003e for a specification of the argument file format.\n\u003c/p\u003e",
        "fct-module": "Test.Framework.BlackBoxTest",
        "fct-package": "HTF",
        "fct-signature": "String",
        "fct-source": "src/Test-Framework-BlackBoxTest.html#BBTArgs",
        "fct-type": "function",
        "title": "bbtArgs_dynArgsName"
      },
      "index": {
        "description": "Name of file defining various arguments for executing the tests contained in subdirectory of the test hierarchy If directory contains such-named file the arguments apply to all testfiles directly contained in this directory See the documentation of blackBoxTests for specification of the argument file format",
        "hierarchy": "Test Framework BlackBoxTest",
        "module": "Test.Framework.BlackBoxTest",
        "name": "bbtArgs_dynArgsName",
        "normalized": "",
        "package": "HTF",
        "partial": "Args Args Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-BlackBoxTest.html#v:bbtArgs_stderrDiff",
      "description": {
        "fct-descr": "\u003cp\u003eDiff program for comparing output on stderr with the expected value.\n\u003c/p\u003e",
        "fct-module": "Test.Framework.BlackBoxTest",
        "fct-package": "HTF",
        "fct-signature": "Diff",
        "fct-source": "src/Test-Framework-BlackBoxTest.html#BBTArgs",
        "fct-type": "function",
        "title": "bbtArgs_stderrDiff"
      },
      "index": {
        "description": "Diff program for comparing output on stderr with the expected value",
        "hierarchy": "Test Framework BlackBoxTest",
        "module": "Test.Framework.BlackBoxTest",
        "name": "bbtArgs_stderrDiff",
        "normalized": "",
        "package": "HTF",
        "partial": "Args Diff",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-BlackBoxTest.html#v:bbtArgs_stderrSuffix",
      "description": {
        "fct-descr": "\u003cp\u003eFile extension for the file specifying expected output on stderr.\n\u003c/p\u003e",
        "fct-module": "Test.Framework.BlackBoxTest",
        "fct-package": "HTF",
        "fct-signature": "String",
        "fct-source": "src/Test-Framework-BlackBoxTest.html#BBTArgs",
        "fct-type": "function",
        "title": "bbtArgs_stderrSuffix"
      },
      "index": {
        "description": "File extension for the file specifying expected output on stderr",
        "hierarchy": "Test Framework BlackBoxTest",
        "module": "Test.Framework.BlackBoxTest",
        "name": "bbtArgs_stderrSuffix",
        "normalized": "",
        "package": "HTF",
        "partial": "Args Suffix",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-BlackBoxTest.html#v:bbtArgs_stdinSuffix",
      "description": {
        "fct-descr": "\u003cp\u003eFile extension for the file used as stdin.\n\u003c/p\u003e",
        "fct-module": "Test.Framework.BlackBoxTest",
        "fct-package": "HTF",
        "fct-signature": "String",
        "fct-source": "src/Test-Framework-BlackBoxTest.html#BBTArgs",
        "fct-type": "function",
        "title": "bbtArgs_stdinSuffix"
      },
      "index": {
        "description": "File extension for the file used as stdin",
        "hierarchy": "Test Framework BlackBoxTest",
        "module": "Test.Framework.BlackBoxTest",
        "name": "bbtArgs_stdinSuffix",
        "normalized": "",
        "package": "HTF",
        "partial": "Args Suffix",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-BlackBoxTest.html#v:bbtArgs_stdoutDiff",
      "description": {
        "fct-descr": "\u003cp\u003eDiff program for comparing output on stdout with the expected value.\n\u003c/p\u003e",
        "fct-module": "Test.Framework.BlackBoxTest",
        "fct-package": "HTF",
        "fct-signature": "Diff",
        "fct-source": "src/Test-Framework-BlackBoxTest.html#BBTArgs",
        "fct-type": "function",
        "title": "bbtArgs_stdoutDiff"
      },
      "index": {
        "description": "Diff program for comparing output on stdout with the expected value",
        "hierarchy": "Test Framework BlackBoxTest",
        "module": "Test.Framework.BlackBoxTest",
        "name": "bbtArgs_stdoutDiff",
        "normalized": "",
        "package": "HTF",
        "partial": "Args Diff",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-BlackBoxTest.html#v:bbtArgs_stdoutSuffix",
      "description": {
        "fct-descr": "\u003cp\u003eFile extension for the file specifying expected output on stdout.\n\u003c/p\u003e",
        "fct-module": "Test.Framework.BlackBoxTest",
        "fct-package": "HTF",
        "fct-signature": "String",
        "fct-source": "src/Test-Framework-BlackBoxTest.html#BBTArgs",
        "fct-type": "function",
        "title": "bbtArgs_stdoutSuffix"
      },
      "index": {
        "description": "File extension for the file specifying expected output on stdout",
        "hierarchy": "Test Framework BlackBoxTest",
        "module": "Test.Framework.BlackBoxTest",
        "name": "bbtArgs_stdoutSuffix",
        "normalized": "",
        "package": "HTF",
        "partial": "Args Suffix",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-BlackBoxTest.html#v:bbtArgs_verbose",
      "description": {
        "fct-descr": "\u003cp\u003eGe verbose or not.\n\u003c/p\u003e",
        "fct-module": "Test.Framework.BlackBoxTest",
        "fct-package": "HTF",
        "fct-signature": "Bool",
        "fct-source": "src/Test-Framework-BlackBoxTest.html#BBTArgs",
        "fct-type": "function",
        "title": "bbtArgs_verbose"
      },
      "index": {
        "description": "Ge verbose or not",
        "hierarchy": "Test Framework BlackBoxTest",
        "module": "Test.Framework.BlackBoxTest",
        "name": "bbtArgs_verbose",
        "normalized": "",
        "package": "HTF",
        "partial": "Args",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-BlackBoxTest.html#v:blackBoxTests",
      "description": {
        "fct-descr": "\u003cp\u003eCollects all black box tests with the given file extension stored in a specific directory.\nFor example, the invocation\n\u003c/p\u003e\u003cpre\u003e blackBoxTests \"bbt-dir\" \"dist/build/sample/sample\" \".num\" defaultBBTArgs\n\u003c/pre\u003e\u003cp\u003ereturns a list of \u003ccode\u003e\u003ca\u003eTest\u003c/a\u003e\u003c/code\u003e values, one \u003ccode\u003e\u003ca\u003eTest\u003c/a\u003e\u003c/code\u003e for each \u003ccode\u003e.num\u003c/code\u003e file found in\n\u003ccode\u003ebbt-dir\u003c/code\u003e and its subdirectories. (The samples directory of the HTF source tree\ncontains the example shown here,\nsee \u003ca\u003ehttps://github.com/skogsbaer/HTF/tree/master/sample\u003c/a\u003e.)\n\u003c/p\u003e\u003cp\u003eSuppose that one of the \u003ccode\u003e.num\u003c/code\u003e files\nis \u003ccode\u003ebbt-dir/should-pass/x.num\u003c/code\u003e. Running the corresponding \u003ccode\u003e\u003ca\u003eTest\u003c/a\u003e\u003c/code\u003e invokes\n\u003ccode\u003edist/build/sample/sample\u003c/code\u003e (the program under test)\nwith \u003ccode\u003ebbt-dir/should-pass/x.num\u003c/code\u003e as the last commandline argument.\nThe other commandline arguments are taken from the flags specification given in the\nfile whose name is stored in the \u003ccode\u003e\u003ca\u003ebbtArgs_dynArgsName\u003c/a\u003e\u003c/code\u003e field of the \u003ccode\u003e\u003ca\u003eBBTArgs\u003c/a\u003e\u003c/code\u003e record\n(see below).\n\u003c/p\u003e\u003cp\u003eIf \u003ccode\u003ebbt-dir/should-pass/x.in\u003c/code\u003e existed, its content\nwould be used as stdin. The tests succeeds\nif the exit code of the program is zero and\nthe output on stdout and stderr matches the contents of\n\u003ccode\u003ebbt-dir/should-pass/x.out\u003c/code\u003e and \u003ccode\u003ebbt-dir/should-pass/x.err\u003c/code\u003e, respectively.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ebbtArgs_dynArgsName\u003c/a\u003e\u003c/code\u003e field of the \u003ccode\u003e\u003ca\u003eBBTArgs\u003c/a\u003e\u003c/code\u003e record specifies a filename\nthat contains some more configuration flags for the tests. The following\nflags (separated by newlines) are supported:\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eSkip\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Skips all tests in the same directory as the argument file.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eFail\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Specify that the test should succeed if it exits with a non-zero exit code.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eFlags: flags\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Passes the given \u003ccode\u003eflags\u003c/code\u003e to the program under test.\n\u003c/dd\u003e\u003c/dl\u003e",
        "fct-module": "Test.Framework.BlackBoxTest",
        "fct-package": "HTF",
        "fct-signature": "FilePath-\u003e String-\u003e String-\u003e BBTArgs-\u003e IO [Test]",
        "fct-type": "function",
        "title": "blackBoxTests"
      },
      "index": {
        "description": "Collects all black box tests with the given file extension stored in specific directory For example the invocation blackBoxTests bbt-dir dist build sample sample num defaultBBTArgs returns list of Test values one Test for each num file found in bbt-dir and its subdirectories The samples directory of the HTF source tree contains the example shown here see https github.com skogsbaer HTF tree master sample Suppose that one of the num files is bbt-dir should-pass x.num Running the corresponding Test invokes dist build sample sample the program under test with bbt-dir should-pass x.num as the last commandline argument The other commandline arguments are taken from the flags specification given in the file whose name is stored in the bbtArgs dynArgsName field of the BBTArgs record see below If bbt-dir should-pass x.in existed its content would be used as stdin The tests succeeds if the exit code of the program is zero and the output on stdout and stderr matches the contents of bbt-dir should-pass x.out and bbt-dir should-pass x.err respectively The bbtArgs dynArgsName field of the BBTArgs record specifies filename that contains some more configuration flags for the tests The following flags separated by newlines are supported Skip Skips all tests in the same directory as the argument file Fail Specify that the test should succeed if it exits with non-zero exit code Flags flags Passes the given flags to the program under test",
        "hierarchy": "Test Framework BlackBoxTest",
        "module": "Test.Framework.BlackBoxTest",
        "name": "blackBoxTests",
        "normalized": "FilePath-\u003eString-\u003eString-\u003eBBTArgs-\u003eIO[Test]",
        "package": "HTF",
        "partial": "Box Tests",
        "signature": "FilePath-\u003eString-\u003eString-\u003eBBTArgs-\u003eIO[Test]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-BlackBoxTest.html#v:defaultBBTArgs",
      "description": {
        "fct-descr": "\u003cp\u003eSensible default values for \u003ccode\u003e\u003ca\u003eBBTArgs\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e\ndefaultBBTArgs = BBTArgs { bbtArgs_stdinSuffix    = \".in\"\n                         , bbtArgs_stdoutSuffix   = \".out\"\n                         , bbtArgs_stderrSuffix   = \".err\"\n                         , bbtArgs_dynArgsName    = \"BBTArgs\"\n                         , bbtArgs_stdoutDiff     = defaultDiff\n                         , bbtArgs_stderrDiff     = defaultDiff\n                         , bbtArgs_verbose        = False }\n\u003c/pre\u003e",
        "fct-module": "Test.Framework.BlackBoxTest",
        "fct-package": "HTF",
        "fct-signature": "BBTArgs",
        "fct-source": "src/Test-Framework-BlackBoxTest.html#defaultBBTArgs",
        "fct-type": "function",
        "title": "defaultBBTArgs"
      },
      "index": {
        "description": "Sensible default values for BBTArgs defaultBBTArgs BBTArgs bbtArgs stdinSuffix in bbtArgs stdoutSuffix out bbtArgs stderrSuffix err bbtArgs dynArgsName BBTArgs bbtArgs stdoutDiff defaultDiff bbtArgs stderrDiff defaultDiff bbtArgs verbose False",
        "hierarchy": "Test Framework BlackBoxTest",
        "module": "Test.Framework.BlackBoxTest",
        "name": "defaultBBTArgs",
        "normalized": "",
        "package": "HTF",
        "partial": "BBTArgs",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-BlackBoxTest.html#v:defaultDiff",
      "description": {
        "fct-descr": "\u003cp\u003eA default value for the \u003ccode\u003e\u003ca\u003eDiff\u003c/a\u003e\u003c/code\u003e datatype that simple resorts to the\n\u003ccode\u003ediff\u003c/code\u003e commandline utility.\n\u003c/p\u003e",
        "fct-module": "Test.Framework.BlackBoxTest",
        "fct-package": "HTF",
        "fct-signature": "Diff",
        "fct-source": "src/Test-Framework-BlackBoxTest.html#defaultDiff",
        "fct-type": "function",
        "title": "defaultDiff"
      },
      "index": {
        "description": "default value for the Diff datatype that simple resorts to the diff commandline utility",
        "hierarchy": "Test Framework BlackBoxTest",
        "module": "Test.Framework.BlackBoxTest",
        "name": "defaultDiff",
        "normalized": "",
        "package": "HTF",
        "partial": "Diff",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-CmdlineOptions.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines the commandline options of the test driver provided by HTF.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Test.Framework.CmdlineOptions",
        "fct-package": "HTF",
        "fct-signature": "module",
        "fct-source": "src/Test-Framework-CmdlineOptions.html",
        "fct-type": "module",
        "title": "CmdlineOptions"
      },
      "index": {
        "description": "This module defines the commandline options of the test driver provided by HTF",
        "hierarchy": "Test Framework CmdlineOptions",
        "module": "Test.Framework.CmdlineOptions",
        "name": "CmdlineOptions",
        "normalized": "",
        "package": "HTF",
        "partial": "Cmdline Options",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-CmdlineOptions.html#t:CmdlineOptions",
      "description": {
        "fct-descr": "\u003cp\u003eCommandline options for running tests.\n\u003c/p\u003e",
        "fct-module": "Test.Framework.CmdlineOptions",
        "fct-package": "HTF",
        "fct-signature": "data",
        "fct-source": "src/Test-Framework-CmdlineOptions.html#CmdlineOptions",
        "fct-type": "data",
        "title": "CmdlineOptions"
      },
      "index": {
        "description": "Commandline options for running tests",
        "hierarchy": "Test Framework CmdlineOptions",
        "module": "Test.Framework.CmdlineOptions",
        "name": "CmdlineOptions",
        "normalized": "",
        "package": "HTF",
        "partial": "Cmdline Options",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-CmdlineOptions.html#v:CmdlineOptions",
      "description": {
        "fct-module": "Test.Framework.CmdlineOptions",
        "fct-package": "HTF",
        "fct-signature": "CmdlineOptions",
        "fct-source": "src/Test-Framework-CmdlineOptions.html#CmdlineOptions",
        "fct-type": "function",
        "title": "CmdlineOptions"
      },
      "index": {
        "description": "",
        "hierarchy": "Test Framework CmdlineOptions",
        "module": "Test.Framework.CmdlineOptions",
        "name": "CmdlineOptions",
        "normalized": "",
        "package": "HTF",
        "partial": "Cmdline Options",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-CmdlineOptions.html#v:defaultCmdlineOptions",
      "description": {
        "fct-descr": "\u003cp\u003eThe default \u003ccode\u003e\u003ca\u003eCmdlineOptions\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Test.Framework.CmdlineOptions",
        "fct-package": "HTF",
        "fct-signature": "CmdlineOptions",
        "fct-source": "src/Test-Framework-CmdlineOptions.html#defaultCmdlineOptions",
        "fct-type": "function",
        "title": "defaultCmdlineOptions"
      },
      "index": {
        "description": "The default CmdlineOptions",
        "hierarchy": "Test Framework CmdlineOptions",
        "module": "Test.Framework.CmdlineOptions",
        "name": "defaultCmdlineOptions",
        "normalized": "",
        "package": "HTF",
        "partial": "Cmdline Options",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-CmdlineOptions.html#v:helpString",
      "description": {
        "fct-descr": "\u003cp\u003eThe string displayed for the \u003ccode\u003e--help\u003c/code\u003e option.\n\u003c/p\u003e",
        "fct-module": "Test.Framework.CmdlineOptions",
        "fct-package": "HTF",
        "fct-signature": "String",
        "fct-source": "src/Test-Framework-CmdlineOptions.html#helpString",
        "fct-type": "function",
        "title": "helpString"
      },
      "index": {
        "description": "The string displayed for the help option",
        "hierarchy": "Test Framework CmdlineOptions",
        "module": "Test.Framework.CmdlineOptions",
        "name": "helpString",
        "normalized": "",
        "package": "HTF",
        "partial": "String",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-CmdlineOptions.html#v:opts_filter",
      "description": {
        "fct-descr": "\u003cp\u003eRun only tests matching this filter.\n\u003c/p\u003e",
        "fct-module": "Test.Framework.CmdlineOptions",
        "fct-package": "HTF",
        "fct-signature": "TestFilter",
        "fct-source": "src/Test-Framework-CmdlineOptions.html#CmdlineOptions",
        "fct-type": "function",
        "title": "opts_filter"
      },
      "index": {
        "description": "Run only tests matching this filter",
        "hierarchy": "Test Framework CmdlineOptions",
        "module": "Test.Framework.CmdlineOptions",
        "name": "opts_filter",
        "normalized": "",
        "package": "HTF",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-CmdlineOptions.html#v:opts_help",
      "description": {
        "fct-descr": "\u003cp\u003eIf \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e, display a help message and exit.\n\u003c/p\u003e",
        "fct-module": "Test.Framework.CmdlineOptions",
        "fct-package": "HTF",
        "fct-signature": "Bool",
        "fct-source": "src/Test-Framework-CmdlineOptions.html#CmdlineOptions",
        "fct-type": "function",
        "title": "opts_help"
      },
      "index": {
        "description": "If True display help message and exit",
        "hierarchy": "Test Framework CmdlineOptions",
        "module": "Test.Framework.CmdlineOptions",
        "name": "opts_help",
        "normalized": "",
        "package": "HTF",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-CmdlineOptions.html#v:opts_listTests",
      "description": {
        "fct-descr": "\u003cp\u003eIf \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e, lists all tests available and exits.\n\u003c/p\u003e",
        "fct-module": "Test.Framework.CmdlineOptions",
        "fct-package": "HTF",
        "fct-signature": "Bool",
        "fct-source": "src/Test-Framework-CmdlineOptions.html#CmdlineOptions",
        "fct-type": "function",
        "title": "opts_listTests"
      },
      "index": {
        "description": "If True lists all tests available and exits",
        "hierarchy": "Test Framework CmdlineOptions",
        "module": "Test.Framework.CmdlineOptions",
        "name": "opts_listTests",
        "normalized": "",
        "package": "HTF",
        "partial": "Tests",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-CmdlineOptions.html#v:opts_machineOutput",
      "description": {
        "fct-descr": "\u003cp\u003eFormat output for machines (JSON format) or humans. See \u003ccode\u003e\u003ca\u003eJsonOutput\u003c/a\u003e\u003c/code\u003e for a definition of the JSON format.\n\u003c/p\u003e",
        "fct-module": "Test.Framework.CmdlineOptions",
        "fct-package": "HTF",
        "fct-signature": "Bool",
        "fct-source": "src/Test-Framework-CmdlineOptions.html#CmdlineOptions",
        "fct-type": "function",
        "title": "opts_machineOutput"
      },
      "index": {
        "description": "Format output for machines JSON format or humans See JsonOutput for definition of the JSON format",
        "hierarchy": "Test Framework CmdlineOptions",
        "module": "Test.Framework.CmdlineOptions",
        "name": "opts_machineOutput",
        "normalized": "",
        "package": "HTF",
        "partial": "Output",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-CmdlineOptions.html#v:opts_machineOutputXml",
      "description": {
        "fct-descr": "\u003cp\u003eOutput file for junit-style XML output. See \u003ccode\u003e\u003ca\u003eXmlOutput\u003c/a\u003e\u003c/code\u003e for a definition of the XML format.\n\u003c/p\u003e",
        "fct-module": "Test.Framework.CmdlineOptions",
        "fct-package": "HTF",
        "fct-signature": "Maybe FilePath",
        "fct-source": "src/Test-Framework-CmdlineOptions.html#CmdlineOptions",
        "fct-type": "function",
        "title": "opts_machineOutputXml"
      },
      "index": {
        "description": "Output file for junit-style XML output See XmlOutput for definition of the XML format",
        "hierarchy": "Test Framework CmdlineOptions",
        "module": "Test.Framework.CmdlineOptions",
        "name": "opts_machineOutputXml",
        "normalized": "",
        "package": "HTF",
        "partial": "Output Xml",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-CmdlineOptions.html#v:opts_negated",
      "description": {
        "fct-descr": "\u003cp\u003eRegular expressions matching test names which should \u003cem\u003enot\u003c/em\u003e run.\n\u003c/p\u003e",
        "fct-module": "Test.Framework.CmdlineOptions",
        "fct-package": "HTF",
        "fct-signature": "[String]",
        "fct-source": "src/Test-Framework-CmdlineOptions.html#CmdlineOptions",
        "fct-type": "function",
        "title": "opts_negated"
      },
      "index": {
        "description": "Regular expressions matching test names which should not run",
        "hierarchy": "Test Framework CmdlineOptions",
        "module": "Test.Framework.CmdlineOptions",
        "name": "opts_negated",
        "normalized": "[String]",
        "package": "HTF",
        "partial": "",
        "signature": "[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-CmdlineOptions.html#v:opts_outputFile",
      "description": {
        "fct-descr": "\u003cp\u003eThe output file, defaults to stdout\n\u003c/p\u003e",
        "fct-module": "Test.Framework.CmdlineOptions",
        "fct-package": "HTF",
        "fct-signature": "Maybe FilePath",
        "fct-source": "src/Test-Framework-CmdlineOptions.html#CmdlineOptions",
        "fct-type": "function",
        "title": "opts_outputFile"
      },
      "index": {
        "description": "The output file defaults to stdout",
        "hierarchy": "Test Framework CmdlineOptions",
        "module": "Test.Framework.CmdlineOptions",
        "name": "opts_outputFile",
        "normalized": "",
        "package": "HTF",
        "partial": "File",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-CmdlineOptions.html#v:opts_quiet",
      "description": {
        "fct-descr": "\u003cp\u003eBe quiet or not.\n\u003c/p\u003e",
        "fct-module": "Test.Framework.CmdlineOptions",
        "fct-package": "HTF",
        "fct-signature": "Bool",
        "fct-source": "src/Test-Framework-CmdlineOptions.html#CmdlineOptions",
        "fct-type": "function",
        "title": "opts_quiet"
      },
      "index": {
        "description": "Be quiet or not",
        "hierarchy": "Test Framework CmdlineOptions",
        "module": "Test.Framework.CmdlineOptions",
        "name": "opts_quiet",
        "normalized": "",
        "package": "HTF",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-CmdlineOptions.html#v:opts_shuffle",
      "description": {
        "fct-descr": "\u003cp\u003eIf \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e (the default), shuffle tests when running them in parallel.\n\u003c/p\u003e",
        "fct-module": "Test.Framework.CmdlineOptions",
        "fct-package": "HTF",
        "fct-signature": "Bool",
        "fct-source": "src/Test-Framework-CmdlineOptions.html#CmdlineOptions",
        "fct-type": "function",
        "title": "opts_shuffle"
      },
      "index": {
        "description": "If True the default shuffle tests when running them in parallel",
        "hierarchy": "Test Framework CmdlineOptions",
        "module": "Test.Framework.CmdlineOptions",
        "name": "opts_shuffle",
        "normalized": "",
        "package": "HTF",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-CmdlineOptions.html#v:opts_split",
      "description": {
        "fct-descr": "\u003cp\u003eIf \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e, each message is sent to a new ouput file (derived by appending an index to \u003ccode\u003e\u003ca\u003eopts_outputFile\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Test.Framework.CmdlineOptions",
        "fct-package": "HTF",
        "fct-signature": "Bool",
        "fct-source": "src/Test-Framework-CmdlineOptions.html#CmdlineOptions",
        "fct-type": "function",
        "title": "opts_split"
      },
      "index": {
        "description": "If True each message is sent to new ouput file derived by appending an index to opts outputFile",
        "hierarchy": "Test Framework CmdlineOptions",
        "module": "Test.Framework.CmdlineOptions",
        "name": "opts_split",
        "normalized": "",
        "package": "HTF",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-CmdlineOptions.html#v:opts_threads",
      "description": {
        "fct-descr": "\u003cp\u003eUse \u003ccode\u003eJust i\u003c/code\u003e for parallel execution with \u003ccode\u003ei\u003c/code\u003e threads, \u003ccode\u003eNothing\u003c/code\u003e for sequential execution.\n\u003c/p\u003e",
        "fct-module": "Test.Framework.CmdlineOptions",
        "fct-package": "HTF",
        "fct-signature": "Maybe Int",
        "fct-source": "src/Test-Framework-CmdlineOptions.html#CmdlineOptions",
        "fct-type": "function",
        "title": "opts_threads"
      },
      "index": {
        "description": "Use Just for parallel execution with threads Nothing for sequential execution",
        "hierarchy": "Test Framework CmdlineOptions",
        "module": "Test.Framework.CmdlineOptions",
        "name": "opts_threads",
        "normalized": "",
        "package": "HTF",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-CmdlineOptions.html#v:opts_useColors",
      "description": {
        "fct-descr": "\u003cp\u003eUse \u003ccode\u003eJust b\u003c/code\u003e to enable/disable use of colors, \u003ccode\u003eNothing\u003c/code\u003e infers the use of colors.\n\u003c/p\u003e",
        "fct-module": "Test.Framework.CmdlineOptions",
        "fct-package": "HTF",
        "fct-signature": "Maybe Bool",
        "fct-source": "src/Test-Framework-CmdlineOptions.html#CmdlineOptions",
        "fct-type": "function",
        "title": "opts_useColors"
      },
      "index": {
        "description": "Use Just to enable disable use of colors Nothing infers the use of colors",
        "hierarchy": "Test Framework CmdlineOptions",
        "module": "Test.Framework.CmdlineOptions",
        "name": "opts_useColors",
        "normalized": "",
        "package": "HTF",
        "partial": "Colors",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-CmdlineOptions.html#v:parseTestArgs",
      "description": {
        "fct-descr": "\u003cp\u003eParse commandline arguments into \u003ccode\u003e\u003ca\u003eCmdlineOptions\u003c/a\u003e\u003c/code\u003e. Here's a synopsis\nof the format of the commandline arguments:\n\u003c/p\u003e\u003cpre\u003e USAGE: COMMAND [OPTION ...] PATTERN ...\n\n   where PATTERN is a posix regular expression matching\n   the names of the tests to run.\n\n   -q          --quiet             only display errors\n   -n PATTERN  --not=PATTERN       tests to exclude\n   -l          --list              list all matching tests\n   -j[N]       --threads[=N]       run N tests in parallel, default N=4\n               --deterministic     do not shuffle tests when executing them in parallel.\n   -o FILE     --output-file=FILE  name of output file\n               --json              output results in machine-readable JSON format (incremental)\n               --xml=FILE          output results in junit-style XML format\n               --split             splits results in separate files to avoid file locking (requires -o/--output-file)\n               --colors=BOOL       use colors or not\n   -h          --help              display this message\n\u003c/pre\u003e",
        "fct-module": "Test.Framework.CmdlineOptions",
        "fct-package": "HTF",
        "fct-signature": "[String] -\u003e Either String CmdlineOptions",
        "fct-source": "src/Test-Framework-CmdlineOptions.html#parseTestArgs",
        "fct-type": "function",
        "title": "parseTestArgs"
      },
      "index": {
        "description": "Parse commandline arguments into CmdlineOptions Here synopsis of the format of the commandline arguments USAGE COMMAND OPTION PATTERN where PATTERN is posix regular expression matching the names of the tests to run quiet only display errors PATTERN not PATTERN tests to exclude list list all matching tests threads run tests in parallel default deterministic do not shuffle tests when executing them in parallel FILE output-file FILE name of output file json output results in machine-readable JSON format incremental xml FILE output results in junit-style XML format split splits results in separate files to avoid file locking requires output-file colors BOOL use colors or not help display this message",
        "hierarchy": "Test Framework CmdlineOptions",
        "module": "Test.Framework.CmdlineOptions",
        "name": "parseTestArgs",
        "normalized": "[String]-\u003eEither String CmdlineOptions",
        "package": "HTF",
        "partial": "Test Args",
        "signature": "[String]-\u003eEither String CmdlineOptions"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-CmdlineOptions.html#v:testConfigFromCmdlineOptions",
      "description": {
        "fct-descr": "\u003cp\u003eTurn the \u003ccode\u003e\u003ca\u003eCmdlineOptions\u003c/a\u003e\u003c/code\u003e into a \u003ccode\u003e\u003ca\u003eTestConfig\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Test.Framework.CmdlineOptions",
        "fct-package": "HTF",
        "fct-signature": "CmdlineOptions -\u003e IO TestConfig",
        "fct-source": "src/Test-Framework-CmdlineOptions.html#testConfigFromCmdlineOptions",
        "fct-type": "function",
        "title": "testConfigFromCmdlineOptions"
      },
      "index": {
        "description": "Turn the CmdlineOptions into TestConfig",
        "hierarchy": "Test Framework CmdlineOptions",
        "module": "Test.Framework.CmdlineOptions",
        "name": "testConfigFromCmdlineOptions",
        "normalized": "CmdlineOptions-\u003eIO TestConfig",
        "package": "HTF",
        "partial": "Config From Cmdline Options",
        "signature": "CmdlineOptions-\u003eIO TestConfig"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-HUnitWrapper.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides assert-like functions for writing unit tests.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eHint:\u003c/em\u003e Do not use the \u003ccode\u003eassertXXX_\u003c/code\u003e functions\ndirectly. Instead, for each function \u003ccode\u003eassertXXX_\u003c/code\u003e,\nthere exist a preprocessor macro \u003ccode\u003eassertXXX\u003c/code\u003e, which provides\nthe \u003ca\u003eLocation\u003c/a\u003e parameter automatically. Use these macros, which\nare available automatically if you add\n\u003c/p\u003e\u003cpre\u003e{-# OPTIONS_GHC -F -pgmF htfpp #-}\u003c/pre\u003e\u003cp\u003eat the top of your source file (see the \u003ccode\u003e\u003ca\u003eTutorial\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Test.Framework.HUnitWrapper",
        "fct-package": "HTF",
        "fct-signature": "module",
        "fct-source": "src/Test-Framework-HUnitWrapper.html",
        "fct-type": "module",
        "title": "HUnitWrapper"
      },
      "index": {
        "description": "This module provides assert-like functions for writing unit tests Hint Do not use the assertXXX functions directly Instead for each function assertXXX there exist preprocessor macro assertXXX which provides the Location parameter automatically Use these macros which are available automatically if you add OPTIONS GHC pgmF htfpp at the top of your source file see the Tutorial",
        "hierarchy": "Test Framework HUnitWrapper",
        "module": "Test.Framework.HUnitWrapper",
        "name": "HUnitWrapper",
        "normalized": "",
        "package": "HTF",
        "partial": "HUnit Wrapper",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-HUnitWrapper.html#v:assertBoolVerbose_",
      "description": {
        "fct-descr": "\u003cp\u003eFail if the \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e value is \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e. The \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e parameter in the \u003ccode\u003eVerbose\u003c/code\u003e       variant can be used to provide extra information about the error. Do not use       \u003ccode\u003eassertBool_\u003c/code\u003e and \u003ccode\u003eassertBoolVerbose_\u003c/code\u003e directly, use the macros \u003ccode\u003eassertBool\u003c/code\u003e       and \u003ccode\u003eassertBoolVerbose\u003c/code\u003e instead. These macros, provided by the \u003ccode\u003ehtfpp\u003c/code\u003e preprocessor,       insert the \u003ccode\u003e\u003ca\u003eLocation\u003c/a\u003e\u003c/code\u003e parameter automatically. \n\u003c/p\u003e",
        "fct-module": "Test.Framework.HUnitWrapper",
        "fct-package": "HTF",
        "fct-signature": "Location -\u003e String -\u003e Bool -\u003e Assertion",
        "fct-source": "src/Test-Framework-HUnitWrapper.html#assertBoolVerbose_",
        "fct-type": "function",
        "title": "assertBoolVerbose_"
      },
      "index": {
        "description": "Fail if the Bool value is False The String parameter in the Verbose variant can be used to provide extra information about the error Do not use assertBool and assertBoolVerbose directly use the macros assertBool and assertBoolVerbose instead These macros provided by the htfpp preprocessor insert the Location parameter automatically",
        "hierarchy": "Test Framework HUnitWrapper",
        "module": "Test.Framework.HUnitWrapper",
        "name": "assertBoolVerbose_",
        "normalized": "Location-\u003eString-\u003eBool-\u003eAssertion",
        "package": "HTF",
        "partial": "Bool Verbose",
        "signature": "Location-\u003eString-\u003eBool-\u003eAssertion"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-HUnitWrapper.html#v:assertBool_",
      "description": {
        "fct-module": "Test.Framework.HUnitWrapper",
        "fct-package": "HTF",
        "fct-signature": "Location -\u003e Bool -\u003e Assertion",
        "fct-source": "src/Test-Framework-HUnitWrapper.html#assertBool_",
        "fct-type": "function",
        "title": "assertBool_"
      },
      "index": {
        "description": "",
        "hierarchy": "Test Framework HUnitWrapper",
        "module": "Test.Framework.HUnitWrapper",
        "name": "assertBool_",
        "normalized": "Location-\u003eBool-\u003eAssertion",
        "package": "HTF",
        "partial": "Bool",
        "signature": "Location-\u003eBool-\u003eAssertion"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-HUnitWrapper.html#v:assertEmptyVerbose_",
      "description": {
        "fct-descr": "\u003cp\u003eFail if the given list is a non-empty list. The \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e parameter in the \u003ccode\u003eVerbose\u003c/code\u003e       variant can be used to provide extra information about the error. Do not use       \u003ccode\u003eassertEmpty_\u003c/code\u003e and \u003ccode\u003eassertEmptyVerbose_\u003c/code\u003e directly, use the macros \u003ccode\u003eassertEmpty\u003c/code\u003e       and \u003ccode\u003eassertEmptyVerbose\u003c/code\u003e instead. These macros, provided by the \u003ccode\u003ehtfpp\u003c/code\u003e preprocessor,       insert the \u003ccode\u003e\u003ca\u003eLocation\u003c/a\u003e\u003c/code\u003e parameter automatically. \n\u003c/p\u003e",
        "fct-module": "Test.Framework.HUnitWrapper",
        "fct-package": "HTF",
        "fct-signature": "Location -\u003e String -\u003e [a] -\u003e Assertion",
        "fct-source": "src/Test-Framework-HUnitWrapper.html#assertEmptyVerbose_",
        "fct-type": "function",
        "title": "assertEmptyVerbose_"
      },
      "index": {
        "description": "Fail if the given list is non-empty list The String parameter in the Verbose variant can be used to provide extra information about the error Do not use assertEmpty and assertEmptyVerbose directly use the macros assertEmpty and assertEmptyVerbose instead These macros provided by the htfpp preprocessor insert the Location parameter automatically",
        "hierarchy": "Test Framework HUnitWrapper",
        "module": "Test.Framework.HUnitWrapper",
        "name": "assertEmptyVerbose_",
        "normalized": "Location-\u003eString-\u003e[a]-\u003eAssertion",
        "package": "HTF",
        "partial": "Empty Verbose",
        "signature": "Location-\u003eString-\u003e[a]-\u003eAssertion"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-HUnitWrapper.html#v:assertEmpty_",
      "description": {
        "fct-module": "Test.Framework.HUnitWrapper",
        "fct-package": "HTF",
        "fct-signature": "Location -\u003e [a] -\u003e Assertion",
        "fct-source": "src/Test-Framework-HUnitWrapper.html#assertEmpty_",
        "fct-type": "function",
        "title": "assertEmpty_"
      },
      "index": {
        "description": "",
        "hierarchy": "Test Framework HUnitWrapper",
        "module": "Test.Framework.HUnitWrapper",
        "name": "assertEmpty_",
        "normalized": "Location-\u003e[a]-\u003eAssertion",
        "package": "HTF",
        "partial": "Empty",
        "signature": "Location-\u003e[a]-\u003eAssertion"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-HUnitWrapper.html#v:assertEqualNoShowVerbose_",
      "description": {
        "fct-descr": "\u003cp\u003eFail if the two values of type \u003ccode\u003ea\u003c/code\u003e are not equal.\n             The first parameter denotes the expected value. Use these two functions\n             of \u003ccode\u003ea\u003c/code\u003e is neither an instance of \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e nor \u003ccode\u003e\u003ca\u003ePretty\u003c/a\u003e\u003c/code\u003e. Be aware that in this\n             case the generated error message might not be very helpful. The \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e parameter in the \u003ccode\u003eVerbose\u003c/code\u003e       variant can be used to provide extra information about the error. Do not use       \u003ccode\u003eassertEqualNoShow_\u003c/code\u003e and \u003ccode\u003eassertEqualNoShowVerbose_\u003c/code\u003e directly, use the macros \u003ccode\u003eassertEqualNoShow\u003c/code\u003e       and \u003ccode\u003eassertEqualNoShowVerbose\u003c/code\u003e instead. These macros, provided by the \u003ccode\u003ehtfpp\u003c/code\u003e preprocessor,       insert the \u003ccode\u003e\u003ca\u003eLocation\u003c/a\u003e\u003c/code\u003e parameter automatically. \n\u003c/p\u003e",
        "fct-module": "Test.Framework.HUnitWrapper",
        "fct-package": "HTF",
        "fct-signature": "Location -\u003e String -\u003e a -\u003e a -\u003e Assertion",
        "fct-source": "src/Test-Framework-HUnitWrapper.html#assertEqualNoShowVerbose_",
        "fct-type": "function",
        "title": "assertEqualNoShowVerbose_"
      },
      "index": {
        "description": "Fail if the two values of type are not equal The first parameter denotes the expected value Use these two functions of is neither an instance of Show nor Pretty Be aware that in this case the generated error message might not be very helpful The String parameter in the Verbose variant can be used to provide extra information about the error Do not use assertEqualNoShow and assertEqualNoShowVerbose directly use the macros assertEqualNoShow and assertEqualNoShowVerbose instead These macros provided by the htfpp preprocessor insert the Location parameter automatically",
        "hierarchy": "Test Framework HUnitWrapper",
        "module": "Test.Framework.HUnitWrapper",
        "name": "assertEqualNoShowVerbose_",
        "normalized": "Location-\u003eString-\u003ea-\u003ea-\u003eAssertion",
        "package": "HTF",
        "partial": "Equal No Show Verbose",
        "signature": "Location-\u003eString-\u003ea-\u003ea-\u003eAssertion"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-HUnitWrapper.html#v:assertEqualNoShow_",
      "description": {
        "fct-module": "Test.Framework.HUnitWrapper",
        "fct-package": "HTF",
        "fct-signature": "Location -\u003e a -\u003e a -\u003e Assertion",
        "fct-source": "src/Test-Framework-HUnitWrapper.html#assertEqualNoShow_",
        "fct-type": "function",
        "title": "assertEqualNoShow_"
      },
      "index": {
        "description": "",
        "hierarchy": "Test Framework HUnitWrapper",
        "module": "Test.Framework.HUnitWrapper",
        "name": "assertEqualNoShow_",
        "normalized": "Location-\u003ea-\u003ea-\u003eAssertion",
        "package": "HTF",
        "partial": "Equal No Show",
        "signature": "Location-\u003ea-\u003ea-\u003eAssertion"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-HUnitWrapper.html#v:assertEqualPrettyVerbose_",
      "description": {
        "fct-descr": "\u003cp\u003eFail if the two values of type \u003ccode\u003ea\u003c/code\u003e are not equal.\n             The first parameter denotes the expected value. Use these two functions\n             of \u003ccode\u003ea\u003c/code\u003e is an instance of \u003ccode\u003e\u003ca\u003ePretty\u003c/a\u003e\u003c/code\u003e. The \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e parameter in the \u003ccode\u003eVerbose\u003c/code\u003e       variant can be used to provide extra information about the error. Do not use       \u003ccode\u003eassertEqualPretty_\u003c/code\u003e and \u003ccode\u003eassertEqualPrettyVerbose_\u003c/code\u003e directly, use the macros \u003ccode\u003eassertEqualPretty\u003c/code\u003e       and \u003ccode\u003eassertEqualPrettyVerbose\u003c/code\u003e instead. These macros, provided by the \u003ccode\u003ehtfpp\u003c/code\u003e preprocessor,       insert the \u003ccode\u003e\u003ca\u003eLocation\u003c/a\u003e\u003c/code\u003e parameter automatically. \n\u003c/p\u003e",
        "fct-module": "Test.Framework.HUnitWrapper",
        "fct-package": "HTF",
        "fct-signature": "Location -\u003e String -\u003e a -\u003e a -\u003e Assertion",
        "fct-source": "src/Test-Framework-HUnitWrapper.html#assertEqualPrettyVerbose_",
        "fct-type": "function",
        "title": "assertEqualPrettyVerbose_"
      },
      "index": {
        "description": "Fail if the two values of type are not equal The first parameter denotes the expected value Use these two functions of is an instance of Pretty The String parameter in the Verbose variant can be used to provide extra information about the error Do not use assertEqualPretty and assertEqualPrettyVerbose directly use the macros assertEqualPretty and assertEqualPrettyVerbose instead These macros provided by the htfpp preprocessor insert the Location parameter automatically",
        "hierarchy": "Test Framework HUnitWrapper",
        "module": "Test.Framework.HUnitWrapper",
        "name": "assertEqualPrettyVerbose_",
        "normalized": "Location-\u003eString-\u003ea-\u003ea-\u003eAssertion",
        "package": "HTF",
        "partial": "Equal Pretty Verbose",
        "signature": "Location-\u003eString-\u003ea-\u003ea-\u003eAssertion"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-HUnitWrapper.html#v:assertEqualPretty_",
      "description": {
        "fct-module": "Test.Framework.HUnitWrapper",
        "fct-package": "HTF",
        "fct-signature": "Location -\u003e a -\u003e a -\u003e Assertion",
        "fct-source": "src/Test-Framework-HUnitWrapper.html#assertEqualPretty_",
        "fct-type": "function",
        "title": "assertEqualPretty_"
      },
      "index": {
        "description": "",
        "hierarchy": "Test Framework HUnitWrapper",
        "module": "Test.Framework.HUnitWrapper",
        "name": "assertEqualPretty_",
        "normalized": "Location-\u003ea-\u003ea-\u003eAssertion",
        "package": "HTF",
        "partial": "Equal Pretty",
        "signature": "Location-\u003ea-\u003ea-\u003eAssertion"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-HUnitWrapper.html#v:assertEqualVerbose_",
      "description": {
        "fct-descr": "\u003cp\u003eFail if the two values of type \u003ccode\u003ea\u003c/code\u003e are not equal.\n             The first parameter denotes the expected value. Use these two functions\n             of \u003ccode\u003ea\u003c/code\u003e is an instance of \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e but not of \u003ccode\u003e\u003ca\u003ePretty\u003c/a\u003e\u003c/code\u003e. The \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e parameter in the \u003ccode\u003eVerbose\u003c/code\u003e       variant can be used to provide extra information about the error. Do not use       \u003ccode\u003eassertEqual_\u003c/code\u003e and \u003ccode\u003eassertEqualVerbose_\u003c/code\u003e directly, use the macros \u003ccode\u003eassertEqual\u003c/code\u003e       and \u003ccode\u003eassertEqualVerbose\u003c/code\u003e instead. These macros, provided by the \u003ccode\u003ehtfpp\u003c/code\u003e preprocessor,       insert the \u003ccode\u003e\u003ca\u003eLocation\u003c/a\u003e\u003c/code\u003e parameter automatically. \n\u003c/p\u003e",
        "fct-module": "Test.Framework.HUnitWrapper",
        "fct-package": "HTF",
        "fct-signature": "Location -\u003e String -\u003e a -\u003e a -\u003e Assertion",
        "fct-source": "src/Test-Framework-HUnitWrapper.html#assertEqualVerbose_",
        "fct-type": "function",
        "title": "assertEqualVerbose_"
      },
      "index": {
        "description": "Fail if the two values of type are not equal The first parameter denotes the expected value Use these two functions of is an instance of Show but not of Pretty The String parameter in the Verbose variant can be used to provide extra information about the error Do not use assertEqual and assertEqualVerbose directly use the macros assertEqual and assertEqualVerbose instead These macros provided by the htfpp preprocessor insert the Location parameter automatically",
        "hierarchy": "Test Framework HUnitWrapper",
        "module": "Test.Framework.HUnitWrapper",
        "name": "assertEqualVerbose_",
        "normalized": "Location-\u003eString-\u003ea-\u003ea-\u003eAssertion",
        "package": "HTF",
        "partial": "Equal Verbose",
        "signature": "Location-\u003eString-\u003ea-\u003ea-\u003eAssertion"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-HUnitWrapper.html#v:assertEqual_",
      "description": {
        "fct-module": "Test.Framework.HUnitWrapper",
        "fct-package": "HTF",
        "fct-signature": "Location -\u003e a -\u003e a -\u003e Assertion",
        "fct-source": "src/Test-Framework-HUnitWrapper.html#assertEqual_",
        "fct-type": "function",
        "title": "assertEqual_"
      },
      "index": {
        "description": "",
        "hierarchy": "Test Framework HUnitWrapper",
        "module": "Test.Framework.HUnitWrapper",
        "name": "assertEqual_",
        "normalized": "Location-\u003ea-\u003ea-\u003eAssertion",
        "package": "HTF",
        "partial": "Equal",
        "signature": "Location-\u003ea-\u003ea-\u003eAssertion"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-HUnitWrapper.html#v:assertFailure_",
      "description": {
        "fct-descr": "\u003cp\u003eFail with the given reason, supplying the error location and the error message.\n\u003c/p\u003e",
        "fct-module": "Test.Framework.HUnitWrapper",
        "fct-package": "HTF",
        "fct-signature": "Location -\u003e String -\u003e IO a",
        "fct-source": "src/Test-Framework-HUnitWrapper.html#assertFailure_",
        "fct-type": "function",
        "title": "assertFailure_"
      },
      "index": {
        "description": "Fail with the given reason supplying the error location and the error message",
        "hierarchy": "Test Framework HUnitWrapper",
        "module": "Test.Framework.HUnitWrapper",
        "name": "assertFailure_",
        "normalized": "Location-\u003eString-\u003eIO a",
        "package": "HTF",
        "partial": "Failure",
        "signature": "Location-\u003eString-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-HUnitWrapper.html#v:assertJustVerbose_",
      "description": {
        "fct-descr": "\u003cp\u003eFail is the given \u003ccode\u003eMaybe a\u003c/code\u003e value is a \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e. The \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e parameter in the \u003ccode\u003eVerbose\u003c/code\u003e       variant can be used to provide extra information about the error. Do not use       \u003ccode\u003eassertJust_\u003c/code\u003e and \u003ccode\u003eassertJustVerbose_\u003c/code\u003e directly, use the macros \u003ccode\u003eassertJust\u003c/code\u003e       and \u003ccode\u003eassertJustVerbose\u003c/code\u003e instead. These macros, provided by the \u003ccode\u003ehtfpp\u003c/code\u003e preprocessor,       insert the \u003ccode\u003e\u003ca\u003eLocation\u003c/a\u003e\u003c/code\u003e parameter automatically. \n\u003c/p\u003e",
        "fct-module": "Test.Framework.HUnitWrapper",
        "fct-package": "HTF",
        "fct-signature": "Location -\u003e String -\u003e Maybe a -\u003e IO a",
        "fct-source": "src/Test-Framework-HUnitWrapper.html#assertJustVerbose_",
        "fct-type": "function",
        "title": "assertJustVerbose_"
      },
      "index": {
        "description": "Fail is the given Maybe value is Nothing The String parameter in the Verbose variant can be used to provide extra information about the error Do not use assertJust and assertJustVerbose directly use the macros assertJust and assertJustVerbose instead These macros provided by the htfpp preprocessor insert the Location parameter automatically",
        "hierarchy": "Test Framework HUnitWrapper",
        "module": "Test.Framework.HUnitWrapper",
        "name": "assertJustVerbose_",
        "normalized": "Location-\u003eString-\u003eMaybe a-\u003eIO a",
        "package": "HTF",
        "partial": "Just Verbose",
        "signature": "Location-\u003eString-\u003eMaybe a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-HUnitWrapper.html#v:assertJust_",
      "description": {
        "fct-module": "Test.Framework.HUnitWrapper",
        "fct-package": "HTF",
        "fct-signature": "Location -\u003e Maybe a -\u003e IO a",
        "fct-source": "src/Test-Framework-HUnitWrapper.html#assertJust_",
        "fct-type": "function",
        "title": "assertJust_"
      },
      "index": {
        "description": "",
        "hierarchy": "Test Framework HUnitWrapper",
        "module": "Test.Framework.HUnitWrapper",
        "name": "assertJust_",
        "normalized": "Location-\u003eMaybe a-\u003eIO a",
        "package": "HTF",
        "partial": "Just",
        "signature": "Location-\u003eMaybe a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-HUnitWrapper.html#v:assertLeftNoShowVerbose_",
      "description": {
        "fct-descr": "\u003cp\u003eFail if the given \u003ccode\u003eEither a b\u003c/code\u003e value is a \u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e. The \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e parameter in the \u003ccode\u003eVerbose\u003c/code\u003e       variant can be used to provide extra information about the error. Do not use       \u003ccode\u003eassertLeftNoShow_\u003c/code\u003e and \u003ccode\u003eassertLeftNoShowVerbose_\u003c/code\u003e directly, use the macros \u003ccode\u003eassertLeftNoShow\u003c/code\u003e       and \u003ccode\u003eassertLeftNoShowVerbose\u003c/code\u003e instead. These macros, provided by the \u003ccode\u003ehtfpp\u003c/code\u003e preprocessor,       insert the \u003ccode\u003e\u003ca\u003eLocation\u003c/a\u003e\u003c/code\u003e parameter automatically. \n\u003c/p\u003e",
        "fct-module": "Test.Framework.HUnitWrapper",
        "fct-package": "HTF",
        "fct-signature": "Location -\u003e String -\u003e Either a b -\u003e IO a",
        "fct-source": "src/Test-Framework-HUnitWrapper.html#assertLeftNoShowVerbose_",
        "fct-type": "function",
        "title": "assertLeftNoShowVerbose_"
      },
      "index": {
        "description": "Fail if the given Either value is Right The String parameter in the Verbose variant can be used to provide extra information about the error Do not use assertLeftNoShow and assertLeftNoShowVerbose directly use the macros assertLeftNoShow and assertLeftNoShowVerbose instead These macros provided by the htfpp preprocessor insert the Location parameter automatically",
        "hierarchy": "Test Framework HUnitWrapper",
        "module": "Test.Framework.HUnitWrapper",
        "name": "assertLeftNoShowVerbose_",
        "normalized": "Location-\u003eString-\u003eEither a b-\u003eIO a",
        "package": "HTF",
        "partial": "Left No Show Verbose",
        "signature": "Location-\u003eString-\u003eEither a b-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-HUnitWrapper.html#v:assertLeftNoShow_",
      "description": {
        "fct-module": "Test.Framework.HUnitWrapper",
        "fct-package": "HTF",
        "fct-signature": "Location -\u003e Either a b -\u003e IO a",
        "fct-source": "src/Test-Framework-HUnitWrapper.html#assertLeftNoShow_",
        "fct-type": "function",
        "title": "assertLeftNoShow_"
      },
      "index": {
        "description": "",
        "hierarchy": "Test Framework HUnitWrapper",
        "module": "Test.Framework.HUnitWrapper",
        "name": "assertLeftNoShow_",
        "normalized": "Location-\u003eEither a b-\u003eIO a",
        "package": "HTF",
        "partial": "Left No Show",
        "signature": "Location-\u003eEither a b-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-HUnitWrapper.html#v:assertLeftVerbose_",
      "description": {
        "fct-descr": "\u003cp\u003eFail if the given \u003ccode\u003eEither a b\u003c/code\u003e value is a \u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e.\n             Use this function if \u003ccode\u003eb\u003c/code\u003e is an instance of \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e The \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e parameter in the \u003ccode\u003eVerbose\u003c/code\u003e       variant can be used to provide extra information about the error. Do not use       \u003ccode\u003eassertLeft_\u003c/code\u003e and \u003ccode\u003eassertLeftVerbose_\u003c/code\u003e directly, use the macros \u003ccode\u003eassertLeft\u003c/code\u003e       and \u003ccode\u003eassertLeftVerbose\u003c/code\u003e instead. These macros, provided by the \u003ccode\u003ehtfpp\u003c/code\u003e preprocessor,       insert the \u003ccode\u003e\u003ca\u003eLocation\u003c/a\u003e\u003c/code\u003e parameter automatically. \n\u003c/p\u003e",
        "fct-module": "Test.Framework.HUnitWrapper",
        "fct-package": "HTF",
        "fct-signature": "Location -\u003e String -\u003e Either a b -\u003e IO a",
        "fct-source": "src/Test-Framework-HUnitWrapper.html#assertLeftVerbose_",
        "fct-type": "function",
        "title": "assertLeftVerbose_"
      },
      "index": {
        "description": "Fail if the given Either value is Right Use this function if is an instance of Show The String parameter in the Verbose variant can be used to provide extra information about the error Do not use assertLeft and assertLeftVerbose directly use the macros assertLeft and assertLeftVerbose instead These macros provided by the htfpp preprocessor insert the Location parameter automatically",
        "hierarchy": "Test Framework HUnitWrapper",
        "module": "Test.Framework.HUnitWrapper",
        "name": "assertLeftVerbose_",
        "normalized": "Location-\u003eString-\u003eEither a b-\u003eIO a",
        "package": "HTF",
        "partial": "Left Verbose",
        "signature": "Location-\u003eString-\u003eEither a b-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-HUnitWrapper.html#v:assertLeft_",
      "description": {
        "fct-module": "Test.Framework.HUnitWrapper",
        "fct-package": "HTF",
        "fct-signature": "Location -\u003e Either a b -\u003e IO a",
        "fct-source": "src/Test-Framework-HUnitWrapper.html#assertLeft_",
        "fct-type": "function",
        "title": "assertLeft_"
      },
      "index": {
        "description": "",
        "hierarchy": "Test Framework HUnitWrapper",
        "module": "Test.Framework.HUnitWrapper",
        "name": "assertLeft_",
        "normalized": "Location-\u003eEither a b-\u003eIO a",
        "package": "HTF",
        "partial": "Left",
        "signature": "Location-\u003eEither a b-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-HUnitWrapper.html#v:assertListsEqualAsSetsVerbose_",
      "description": {
        "fct-descr": "\u003cp\u003eFail if the two given lists are not equal\n                                     when considered as sets. The first list parameter\n                                     denotes the expected value. The \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e parameter in the \u003ccode\u003eVerbose\u003c/code\u003e       variant can be used to provide extra information about the error. Do not use       \u003ccode\u003eassertListsEqualAsSets_\u003c/code\u003e and \u003ccode\u003eassertListsEqualAsSetsVerbose_\u003c/code\u003e directly, use the macros \u003ccode\u003eassertListsEqualAsSets\u003c/code\u003e       and \u003ccode\u003eassertListsEqualAsSetsVerbose\u003c/code\u003e instead. These macros, provided by the \u003ccode\u003ehtfpp\u003c/code\u003e preprocessor,       insert the \u003ccode\u003e\u003ca\u003eLocation\u003c/a\u003e\u003c/code\u003e parameter automatically. \n\u003c/p\u003e",
        "fct-module": "Test.Framework.HUnitWrapper",
        "fct-package": "HTF",
        "fct-signature": "Location -\u003e String -\u003e [a] -\u003e [a] -\u003e Assertion",
        "fct-source": "src/Test-Framework-HUnitWrapper.html#assertListsEqualAsSetsVerbose_",
        "fct-type": "function",
        "title": "assertListsEqualAsSetsVerbose_"
      },
      "index": {
        "description": "Fail if the two given lists are not equal when considered as sets The first list parameter denotes the expected value The String parameter in the Verbose variant can be used to provide extra information about the error Do not use assertListsEqualAsSets and assertListsEqualAsSetsVerbose directly use the macros assertListsEqualAsSets and assertListsEqualAsSetsVerbose instead These macros provided by the htfpp preprocessor insert the Location parameter automatically",
        "hierarchy": "Test Framework HUnitWrapper",
        "module": "Test.Framework.HUnitWrapper",
        "name": "assertListsEqualAsSetsVerbose_",
        "normalized": "Location-\u003eString-\u003e[a]-\u003e[a]-\u003eAssertion",
        "package": "HTF",
        "partial": "Lists Equal As Sets Verbose",
        "signature": "Location-\u003eString-\u003e[a]-\u003e[a]-\u003eAssertion"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-HUnitWrapper.html#v:assertListsEqualAsSets_",
      "description": {
        "fct-module": "Test.Framework.HUnitWrapper",
        "fct-package": "HTF",
        "fct-signature": "Location -\u003e [a] -\u003e [a] -\u003e Assertion",
        "fct-source": "src/Test-Framework-HUnitWrapper.html#assertListsEqualAsSets_",
        "fct-type": "function",
        "title": "assertListsEqualAsSets_"
      },
      "index": {
        "description": "",
        "hierarchy": "Test Framework HUnitWrapper",
        "module": "Test.Framework.HUnitWrapper",
        "name": "assertListsEqualAsSets_",
        "normalized": "Location-\u003e[a]-\u003e[a]-\u003eAssertion",
        "package": "HTF",
        "partial": "Lists Equal As Sets",
        "signature": "Location-\u003e[a]-\u003e[a]-\u003eAssertion"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-HUnitWrapper.html#v:assertNotEmptyVerbose_",
      "description": {
        "fct-descr": "\u003cp\u003eFail if the given list is empty. The \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e parameter in the \u003ccode\u003eVerbose\u003c/code\u003e       variant can be used to provide extra information about the error. Do not use       \u003ccode\u003eassertNotEmpty_\u003c/code\u003e and \u003ccode\u003eassertNotEmptyVerbose_\u003c/code\u003e directly, use the macros \u003ccode\u003eassertNotEmpty\u003c/code\u003e       and \u003ccode\u003eassertNotEmptyVerbose\u003c/code\u003e instead. These macros, provided by the \u003ccode\u003ehtfpp\u003c/code\u003e preprocessor,       insert the \u003ccode\u003e\u003ca\u003eLocation\u003c/a\u003e\u003c/code\u003e parameter automatically. \n\u003c/p\u003e",
        "fct-module": "Test.Framework.HUnitWrapper",
        "fct-package": "HTF",
        "fct-signature": "Location -\u003e String -\u003e [a] -\u003e Assertion",
        "fct-source": "src/Test-Framework-HUnitWrapper.html#assertNotEmptyVerbose_",
        "fct-type": "function",
        "title": "assertNotEmptyVerbose_"
      },
      "index": {
        "description": "Fail if the given list is empty The String parameter in the Verbose variant can be used to provide extra information about the error Do not use assertNotEmpty and assertNotEmptyVerbose directly use the macros assertNotEmpty and assertNotEmptyVerbose instead These macros provided by the htfpp preprocessor insert the Location parameter automatically",
        "hierarchy": "Test Framework HUnitWrapper",
        "module": "Test.Framework.HUnitWrapper",
        "name": "assertNotEmptyVerbose_",
        "normalized": "Location-\u003eString-\u003e[a]-\u003eAssertion",
        "package": "HTF",
        "partial": "Not Empty Verbose",
        "signature": "Location-\u003eString-\u003e[a]-\u003eAssertion"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-HUnitWrapper.html#v:assertNotEmpty_",
      "description": {
        "fct-module": "Test.Framework.HUnitWrapper",
        "fct-package": "HTF",
        "fct-signature": "Location -\u003e [a] -\u003e Assertion",
        "fct-source": "src/Test-Framework-HUnitWrapper.html#assertNotEmpty_",
        "fct-type": "function",
        "title": "assertNotEmpty_"
      },
      "index": {
        "description": "",
        "hierarchy": "Test Framework HUnitWrapper",
        "module": "Test.Framework.HUnitWrapper",
        "name": "assertNotEmpty_",
        "normalized": "Location-\u003e[a]-\u003eAssertion",
        "package": "HTF",
        "partial": "Not Empty",
        "signature": "Location-\u003e[a]-\u003eAssertion"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-HUnitWrapper.html#v:assertNotEqualNoShowVerbose_",
      "description": {
        "fct-descr": "\u003cp\u003eFail if the two values of type \u003ccode\u003ea\u003c/code\u003e are equal.\n             The first parameter denotes the expected value. Use these two functions\n             of \u003ccode\u003ea\u003c/code\u003e is neither an instance of \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e nor \u003ccode\u003e\u003ca\u003ePretty\u003c/a\u003e\u003c/code\u003e. Be aware that in this\n             case the generated error message might not be very helpful. The \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e parameter in the \u003ccode\u003eVerbose\u003c/code\u003e       variant can be used to provide extra information about the error. Do not use       \u003ccode\u003eassertNotEqualNoShow_\u003c/code\u003e and \u003ccode\u003eassertNotEqualNoShowVerbose_\u003c/code\u003e directly, use the macros \u003ccode\u003eassertNotEqualNoShow\u003c/code\u003e       and \u003ccode\u003eassertNotEqualNoShowVerbose\u003c/code\u003e instead. These macros, provided by the \u003ccode\u003ehtfpp\u003c/code\u003e preprocessor,       insert the \u003ccode\u003e\u003ca\u003eLocation\u003c/a\u003e\u003c/code\u003e parameter automatically. \n\u003c/p\u003e",
        "fct-module": "Test.Framework.HUnitWrapper",
        "fct-package": "HTF",
        "fct-signature": "Location -\u003e String -\u003e a -\u003e a -\u003e Assertion",
        "fct-source": "src/Test-Framework-HUnitWrapper.html#assertNotEqualNoShowVerbose_",
        "fct-type": "function",
        "title": "assertNotEqualNoShowVerbose_"
      },
      "index": {
        "description": "Fail if the two values of type are equal The first parameter denotes the expected value Use these two functions of is neither an instance of Show nor Pretty Be aware that in this case the generated error message might not be very helpful The String parameter in the Verbose variant can be used to provide extra information about the error Do not use assertNotEqualNoShow and assertNotEqualNoShowVerbose directly use the macros assertNotEqualNoShow and assertNotEqualNoShowVerbose instead These macros provided by the htfpp preprocessor insert the Location parameter automatically",
        "hierarchy": "Test Framework HUnitWrapper",
        "module": "Test.Framework.HUnitWrapper",
        "name": "assertNotEqualNoShowVerbose_",
        "normalized": "Location-\u003eString-\u003ea-\u003ea-\u003eAssertion",
        "package": "HTF",
        "partial": "Not Equal No Show Verbose",
        "signature": "Location-\u003eString-\u003ea-\u003ea-\u003eAssertion"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-HUnitWrapper.html#v:assertNotEqualNoShow_",
      "description": {
        "fct-module": "Test.Framework.HUnitWrapper",
        "fct-package": "HTF",
        "fct-signature": "Location -\u003e a -\u003e a -\u003e Assertion",
        "fct-source": "src/Test-Framework-HUnitWrapper.html#assertNotEqualNoShow_",
        "fct-type": "function",
        "title": "assertNotEqualNoShow_"
      },
      "index": {
        "description": "",
        "hierarchy": "Test Framework HUnitWrapper",
        "module": "Test.Framework.HUnitWrapper",
        "name": "assertNotEqualNoShow_",
        "normalized": "Location-\u003ea-\u003ea-\u003eAssertion",
        "package": "HTF",
        "partial": "Not Equal No Show",
        "signature": "Location-\u003ea-\u003ea-\u003eAssertion"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-HUnitWrapper.html#v:assertNotEqualPrettyVerbose_",
      "description": {
        "fct-descr": "\u003cp\u003eFail if the two values of type \u003ccode\u003ea\u003c/code\u003e are equal.\n             The first parameter denotes the expected value. Use these two functions\n             of \u003ccode\u003ea\u003c/code\u003e is an instance of \u003ccode\u003e\u003ca\u003ePretty\u003c/a\u003e\u003c/code\u003e. The \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e parameter in the \u003ccode\u003eVerbose\u003c/code\u003e       variant can be used to provide extra information about the error. Do not use       \u003ccode\u003eassertNotEqualPretty_\u003c/code\u003e and \u003ccode\u003eassertNotEqualPrettyVerbose_\u003c/code\u003e directly, use the macros \u003ccode\u003eassertNotEqualPretty\u003c/code\u003e       and \u003ccode\u003eassertNotEqualPrettyVerbose\u003c/code\u003e instead. These macros, provided by the \u003ccode\u003ehtfpp\u003c/code\u003e preprocessor,       insert the \u003ccode\u003e\u003ca\u003eLocation\u003c/a\u003e\u003c/code\u003e parameter automatically. \n\u003c/p\u003e",
        "fct-module": "Test.Framework.HUnitWrapper",
        "fct-package": "HTF",
        "fct-signature": "Location -\u003e String -\u003e a -\u003e a -\u003e Assertion",
        "fct-source": "src/Test-Framework-HUnitWrapper.html#assertNotEqualPrettyVerbose_",
        "fct-type": "function",
        "title": "assertNotEqualPrettyVerbose_"
      },
      "index": {
        "description": "Fail if the two values of type are equal The first parameter denotes the expected value Use these two functions of is an instance of Pretty The String parameter in the Verbose variant can be used to provide extra information about the error Do not use assertNotEqualPretty and assertNotEqualPrettyVerbose directly use the macros assertNotEqualPretty and assertNotEqualPrettyVerbose instead These macros provided by the htfpp preprocessor insert the Location parameter automatically",
        "hierarchy": "Test Framework HUnitWrapper",
        "module": "Test.Framework.HUnitWrapper",
        "name": "assertNotEqualPrettyVerbose_",
        "normalized": "Location-\u003eString-\u003ea-\u003ea-\u003eAssertion",
        "package": "HTF",
        "partial": "Not Equal Pretty Verbose",
        "signature": "Location-\u003eString-\u003ea-\u003ea-\u003eAssertion"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-HUnitWrapper.html#v:assertNotEqualPretty_",
      "description": {
        "fct-module": "Test.Framework.HUnitWrapper",
        "fct-package": "HTF",
        "fct-signature": "Location -\u003e a -\u003e a -\u003e Assertion",
        "fct-source": "src/Test-Framework-HUnitWrapper.html#assertNotEqualPretty_",
        "fct-type": "function",
        "title": "assertNotEqualPretty_"
      },
      "index": {
        "description": "",
        "hierarchy": "Test Framework HUnitWrapper",
        "module": "Test.Framework.HUnitWrapper",
        "name": "assertNotEqualPretty_",
        "normalized": "Location-\u003ea-\u003ea-\u003eAssertion",
        "package": "HTF",
        "partial": "Not Equal Pretty",
        "signature": "Location-\u003ea-\u003ea-\u003eAssertion"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-HUnitWrapper.html#v:assertNotEqualVerbose_",
      "description": {
        "fct-descr": "\u003cp\u003eFail if the two values of type \u003ccode\u003ea\u003c/code\u003e are equal.\n             The first parameter denotes the expected value. Use these two functions\n             of \u003ccode\u003ea\u003c/code\u003e is an instance of \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e but not of \u003ccode\u003e\u003ca\u003ePretty\u003c/a\u003e\u003c/code\u003e. The \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e parameter in the \u003ccode\u003eVerbose\u003c/code\u003e       variant can be used to provide extra information about the error. Do not use       \u003ccode\u003eassertNotEqual_\u003c/code\u003e and \u003ccode\u003eassertNotEqualVerbose_\u003c/code\u003e directly, use the macros \u003ccode\u003eassertNotEqual\u003c/code\u003e       and \u003ccode\u003eassertNotEqualVerbose\u003c/code\u003e instead. These macros, provided by the \u003ccode\u003ehtfpp\u003c/code\u003e preprocessor,       insert the \u003ccode\u003e\u003ca\u003eLocation\u003c/a\u003e\u003c/code\u003e parameter automatically. \n\u003c/p\u003e",
        "fct-module": "Test.Framework.HUnitWrapper",
        "fct-package": "HTF",
        "fct-signature": "Location -\u003e String -\u003e a -\u003e a -\u003e Assertion",
        "fct-source": "src/Test-Framework-HUnitWrapper.html#assertNotEqualVerbose_",
        "fct-type": "function",
        "title": "assertNotEqualVerbose_"
      },
      "index": {
        "description": "Fail if the two values of type are equal The first parameter denotes the expected value Use these two functions of is an instance of Show but not of Pretty The String parameter in the Verbose variant can be used to provide extra information about the error Do not use assertNotEqual and assertNotEqualVerbose directly use the macros assertNotEqual and assertNotEqualVerbose instead These macros provided by the htfpp preprocessor insert the Location parameter automatically",
        "hierarchy": "Test Framework HUnitWrapper",
        "module": "Test.Framework.HUnitWrapper",
        "name": "assertNotEqualVerbose_",
        "normalized": "Location-\u003eString-\u003ea-\u003ea-\u003eAssertion",
        "package": "HTF",
        "partial": "Not Equal Verbose",
        "signature": "Location-\u003eString-\u003ea-\u003ea-\u003eAssertion"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-HUnitWrapper.html#v:assertNotEqual_",
      "description": {
        "fct-module": "Test.Framework.HUnitWrapper",
        "fct-package": "HTF",
        "fct-signature": "Location -\u003e a -\u003e a -\u003e Assertion",
        "fct-source": "src/Test-Framework-HUnitWrapper.html#assertNotEqual_",
        "fct-type": "function",
        "title": "assertNotEqual_"
      },
      "index": {
        "description": "",
        "hierarchy": "Test Framework HUnitWrapper",
        "module": "Test.Framework.HUnitWrapper",
        "name": "assertNotEqual_",
        "normalized": "Location-\u003ea-\u003ea-\u003eAssertion",
        "package": "HTF",
        "partial": "Not Equal",
        "signature": "Location-\u003ea-\u003ea-\u003eAssertion"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-HUnitWrapper.html#v:assertNothingNoShowVerbose_",
      "description": {
        "fct-descr": "\u003cp\u003eFail is the given \u003ccode\u003eMaybe a\u003c/code\u003e value is a \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e. The \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e parameter in the \u003ccode\u003eVerbose\u003c/code\u003e       variant can be used to provide extra information about the error. Do not use       \u003ccode\u003eassertNothingNoShow_\u003c/code\u003e and \u003ccode\u003eassertNothingNoShowVerbose_\u003c/code\u003e directly, use the macros \u003ccode\u003eassertNothingNoShow\u003c/code\u003e       and \u003ccode\u003eassertNothingNoShowVerbose\u003c/code\u003e instead. These macros, provided by the \u003ccode\u003ehtfpp\u003c/code\u003e preprocessor,       insert the \u003ccode\u003e\u003ca\u003eLocation\u003c/a\u003e\u003c/code\u003e parameter automatically. \n\u003c/p\u003e",
        "fct-module": "Test.Framework.HUnitWrapper",
        "fct-package": "HTF",
        "fct-signature": "Location -\u003e String -\u003e Maybe a -\u003e Assertion",
        "fct-source": "src/Test-Framework-HUnitWrapper.html#assertNothingNoShowVerbose_",
        "fct-type": "function",
        "title": "assertNothingNoShowVerbose_"
      },
      "index": {
        "description": "Fail is the given Maybe value is Just The String parameter in the Verbose variant can be used to provide extra information about the error Do not use assertNothingNoShow and assertNothingNoShowVerbose directly use the macros assertNothingNoShow and assertNothingNoShowVerbose instead These macros provided by the htfpp preprocessor insert the Location parameter automatically",
        "hierarchy": "Test Framework HUnitWrapper",
        "module": "Test.Framework.HUnitWrapper",
        "name": "assertNothingNoShowVerbose_",
        "normalized": "Location-\u003eString-\u003eMaybe a-\u003eAssertion",
        "package": "HTF",
        "partial": "Nothing No Show Verbose",
        "signature": "Location-\u003eString-\u003eMaybe a-\u003eAssertion"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-HUnitWrapper.html#v:assertNothingNoShow_",
      "description": {
        "fct-module": "Test.Framework.HUnitWrapper",
        "fct-package": "HTF",
        "fct-signature": "Location -\u003e Maybe a -\u003e Assertion",
        "fct-source": "src/Test-Framework-HUnitWrapper.html#assertNothingNoShow_",
        "fct-type": "function",
        "title": "assertNothingNoShow_"
      },
      "index": {
        "description": "",
        "hierarchy": "Test Framework HUnitWrapper",
        "module": "Test.Framework.HUnitWrapper",
        "name": "assertNothingNoShow_",
        "normalized": "Location-\u003eMaybe a-\u003eAssertion",
        "package": "HTF",
        "partial": "Nothing No Show",
        "signature": "Location-\u003eMaybe a-\u003eAssertion"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-HUnitWrapper.html#v:assertNothingVerbose_",
      "description": {
        "fct-descr": "\u003cp\u003eFail is the given \u003ccode\u003eMaybe a\u003c/code\u003e value is a \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e.\n             Use this function if \u003ccode\u003ea\u003c/code\u003e is an instance of \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e. The \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e parameter in the \u003ccode\u003eVerbose\u003c/code\u003e       variant can be used to provide extra information about the error. Do not use       \u003ccode\u003eassertNothing_\u003c/code\u003e and \u003ccode\u003eassertNothingVerbose_\u003c/code\u003e directly, use the macros \u003ccode\u003eassertNothing\u003c/code\u003e       and \u003ccode\u003eassertNothingVerbose\u003c/code\u003e instead. These macros, provided by the \u003ccode\u003ehtfpp\u003c/code\u003e preprocessor,       insert the \u003ccode\u003e\u003ca\u003eLocation\u003c/a\u003e\u003c/code\u003e parameter automatically. \n\u003c/p\u003e",
        "fct-module": "Test.Framework.HUnitWrapper",
        "fct-package": "HTF",
        "fct-signature": "Location -\u003e String -\u003e Maybe a -\u003e Assertion",
        "fct-source": "src/Test-Framework-HUnitWrapper.html#assertNothingVerbose_",
        "fct-type": "function",
        "title": "assertNothingVerbose_"
      },
      "index": {
        "description": "Fail is the given Maybe value is Just Use this function if is an instance of Show The String parameter in the Verbose variant can be used to provide extra information about the error Do not use assertNothing and assertNothingVerbose directly use the macros assertNothing and assertNothingVerbose instead These macros provided by the htfpp preprocessor insert the Location parameter automatically",
        "hierarchy": "Test Framework HUnitWrapper",
        "module": "Test.Framework.HUnitWrapper",
        "name": "assertNothingVerbose_",
        "normalized": "Location-\u003eString-\u003eMaybe a-\u003eAssertion",
        "package": "HTF",
        "partial": "Nothing Verbose",
        "signature": "Location-\u003eString-\u003eMaybe a-\u003eAssertion"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-HUnitWrapper.html#v:assertNothing_",
      "description": {
        "fct-module": "Test.Framework.HUnitWrapper",
        "fct-package": "HTF",
        "fct-signature": "Location -\u003e Maybe a -\u003e Assertion",
        "fct-source": "src/Test-Framework-HUnitWrapper.html#assertNothing_",
        "fct-type": "function",
        "title": "assertNothing_"
      },
      "index": {
        "description": "",
        "hierarchy": "Test Framework HUnitWrapper",
        "module": "Test.Framework.HUnitWrapper",
        "name": "assertNothing_",
        "normalized": "Location-\u003eMaybe a-\u003eAssertion",
        "package": "HTF",
        "partial": "Nothing",
        "signature": "Location-\u003eMaybe a-\u003eAssertion"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-HUnitWrapper.html#v:assertRightNoShowVerbose_",
      "description": {
        "fct-descr": "\u003cp\u003eFail if the given \u003ccode\u003eEither a b\u003c/code\u003e value is a \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e. The \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e parameter in the \u003ccode\u003eVerbose\u003c/code\u003e       variant can be used to provide extra information about the error. Do not use       \u003ccode\u003eassertRightNoShow_\u003c/code\u003e and \u003ccode\u003eassertRightNoShowVerbose_\u003c/code\u003e directly, use the macros \u003ccode\u003eassertRightNoShow\u003c/code\u003e       and \u003ccode\u003eassertRightNoShowVerbose\u003c/code\u003e instead. These macros, provided by the \u003ccode\u003ehtfpp\u003c/code\u003e preprocessor,       insert the \u003ccode\u003e\u003ca\u003eLocation\u003c/a\u003e\u003c/code\u003e parameter automatically. \n\u003c/p\u003e",
        "fct-module": "Test.Framework.HUnitWrapper",
        "fct-package": "HTF",
        "fct-signature": "Location -\u003e String -\u003e Either a b -\u003e IO b",
        "fct-source": "src/Test-Framework-HUnitWrapper.html#assertRightNoShowVerbose_",
        "fct-type": "function",
        "title": "assertRightNoShowVerbose_"
      },
      "index": {
        "description": "Fail if the given Either value is Left The String parameter in the Verbose variant can be used to provide extra information about the error Do not use assertRightNoShow and assertRightNoShowVerbose directly use the macros assertRightNoShow and assertRightNoShowVerbose instead These macros provided by the htfpp preprocessor insert the Location parameter automatically",
        "hierarchy": "Test Framework HUnitWrapper",
        "module": "Test.Framework.HUnitWrapper",
        "name": "assertRightNoShowVerbose_",
        "normalized": "Location-\u003eString-\u003eEither a b-\u003eIO b",
        "package": "HTF",
        "partial": "Right No Show Verbose",
        "signature": "Location-\u003eString-\u003eEither a b-\u003eIO b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-HUnitWrapper.html#v:assertRightNoShow_",
      "description": {
        "fct-module": "Test.Framework.HUnitWrapper",
        "fct-package": "HTF",
        "fct-signature": "Location -\u003e Either a b -\u003e IO b",
        "fct-source": "src/Test-Framework-HUnitWrapper.html#assertRightNoShow_",
        "fct-type": "function",
        "title": "assertRightNoShow_"
      },
      "index": {
        "description": "",
        "hierarchy": "Test Framework HUnitWrapper",
        "module": "Test.Framework.HUnitWrapper",
        "name": "assertRightNoShow_",
        "normalized": "Location-\u003eEither a b-\u003eIO b",
        "package": "HTF",
        "partial": "Right No Show",
        "signature": "Location-\u003eEither a b-\u003eIO b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-HUnitWrapper.html#v:assertRightVerbose_",
      "description": {
        "fct-descr": "\u003cp\u003eFail if the given \u003ccode\u003eEither a b\u003c/code\u003e value is a \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e.\n             Use this function if \u003ccode\u003ea\u003c/code\u003e is an instance of \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e The \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e parameter in the \u003ccode\u003eVerbose\u003c/code\u003e       variant can be used to provide extra information about the error. Do not use       \u003ccode\u003eassertRight_\u003c/code\u003e and \u003ccode\u003eassertRightVerbose_\u003c/code\u003e directly, use the macros \u003ccode\u003eassertRight\u003c/code\u003e       and \u003ccode\u003eassertRightVerbose\u003c/code\u003e instead. These macros, provided by the \u003ccode\u003ehtfpp\u003c/code\u003e preprocessor,       insert the \u003ccode\u003e\u003ca\u003eLocation\u003c/a\u003e\u003c/code\u003e parameter automatically. \n\u003c/p\u003e",
        "fct-module": "Test.Framework.HUnitWrapper",
        "fct-package": "HTF",
        "fct-signature": "Location -\u003e String -\u003e Either a b -\u003e IO b",
        "fct-source": "src/Test-Framework-HUnitWrapper.html#assertRightVerbose_",
        "fct-type": "function",
        "title": "assertRightVerbose_"
      },
      "index": {
        "description": "Fail if the given Either value is Left Use this function if is an instance of Show The String parameter in the Verbose variant can be used to provide extra information about the error Do not use assertRight and assertRightVerbose directly use the macros assertRight and assertRightVerbose instead These macros provided by the htfpp preprocessor insert the Location parameter automatically",
        "hierarchy": "Test Framework HUnitWrapper",
        "module": "Test.Framework.HUnitWrapper",
        "name": "assertRightVerbose_",
        "normalized": "Location-\u003eString-\u003eEither a b-\u003eIO b",
        "package": "HTF",
        "partial": "Right Verbose",
        "signature": "Location-\u003eString-\u003eEither a b-\u003eIO b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-HUnitWrapper.html#v:assertRight_",
      "description": {
        "fct-module": "Test.Framework.HUnitWrapper",
        "fct-package": "HTF",
        "fct-signature": "Location -\u003e Either a b -\u003e IO b",
        "fct-source": "src/Test-Framework-HUnitWrapper.html#assertRight_",
        "fct-type": "function",
        "title": "assertRight_"
      },
      "index": {
        "description": "",
        "hierarchy": "Test Framework HUnitWrapper",
        "module": "Test.Framework.HUnitWrapper",
        "name": "assertRight_",
        "normalized": "Location-\u003eEither a b-\u003eIO b",
        "package": "HTF",
        "partial": "Right",
        "signature": "Location-\u003eEither a b-\u003eIO b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-HUnitWrapper.html#v:assertThrowsIOVerbose_",
      "description": {
        "fct-descr": "\u003cp\u003eFail if executing the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e action does not\n             throw an exception satisfying the given predicate \u003ccode\u003e(e -\u003e Bool)\u003c/code\u003e. The \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e parameter in the \u003ccode\u003eVerbose\u003c/code\u003e       variant can be used to provide extra information about the error. Do not use       \u003ccode\u003eassertThrowsIO_\u003c/code\u003e and \u003ccode\u003eassertThrowsIOVerbose_\u003c/code\u003e directly, use the macros \u003ccode\u003eassertThrowsIO\u003c/code\u003e       and \u003ccode\u003eassertThrowsIOVerbose\u003c/code\u003e instead. These macros, provided by the \u003ccode\u003ehtfpp\u003c/code\u003e preprocessor,       insert the \u003ccode\u003e\u003ca\u003eLocation\u003c/a\u003e\u003c/code\u003e parameter automatically. \n\u003c/p\u003e",
        "fct-module": "Test.Framework.HUnitWrapper",
        "fct-package": "HTF",
        "fct-signature": "Location -\u003e String -\u003e IO a -\u003e (e -\u003e Bool) -\u003e Assertion",
        "fct-source": "src/Test-Framework-HUnitWrapper.html#assertThrowsIOVerbose_",
        "fct-type": "function",
        "title": "assertThrowsIOVerbose_"
      },
      "index": {
        "description": "Fail if executing the IO action does not throw an exception satisfying the given predicate Bool The String parameter in the Verbose variant can be used to provide extra information about the error Do not use assertThrowsIO and assertThrowsIOVerbose directly use the macros assertThrowsIO and assertThrowsIOVerbose instead These macros provided by the htfpp preprocessor insert the Location parameter automatically",
        "hierarchy": "Test Framework HUnitWrapper",
        "module": "Test.Framework.HUnitWrapper",
        "name": "assertThrowsIOVerbose_",
        "normalized": "Location-\u003eString-\u003eIO a-\u003e(b-\u003eBool)-\u003eAssertion",
        "package": "HTF",
        "partial": "Throws IOVerbose",
        "signature": "Location-\u003eString-\u003eIO a-\u003e(e-\u003eBool)-\u003eAssertion"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-HUnitWrapper.html#v:assertThrowsIO_",
      "description": {
        "fct-module": "Test.Framework.HUnitWrapper",
        "fct-package": "HTF",
        "fct-signature": "Location -\u003e IO a -\u003e (e -\u003e Bool) -\u003e Assertion",
        "fct-source": "src/Test-Framework-HUnitWrapper.html#assertThrowsIO_",
        "fct-type": "function",
        "title": "assertThrowsIO_"
      },
      "index": {
        "description": "",
        "hierarchy": "Test Framework HUnitWrapper",
        "module": "Test.Framework.HUnitWrapper",
        "name": "assertThrowsIO_",
        "normalized": "Location-\u003eIO a-\u003e(b-\u003eBool)-\u003eAssertion",
        "package": "HTF",
        "partial": "Throws IO",
        "signature": "Location-\u003eIO a-\u003e(e-\u003eBool)-\u003eAssertion"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-HUnitWrapper.html#v:assertThrowsMVerbose_",
      "description": {
        "fct-descr": "\u003cp\u003eFail if executing the \u003ccode\u003em\u003c/code\u003e action does not\n             throw an exception satisfying the given predicate \u003ccode\u003e(e -\u003e Bool)\u003c/code\u003e. The \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e parameter in the \u003ccode\u003eVerbose\u003c/code\u003e       variant can be used to provide extra information about the error. Do not use       \u003ccode\u003eassertThrowsM_\u003c/code\u003e and \u003ccode\u003eassertThrowsMVerbose_\u003c/code\u003e directly, use the macros \u003ccode\u003eassertThrowsM\u003c/code\u003e       and \u003ccode\u003eassertThrowsMVerbose\u003c/code\u003e instead. These macros, provided by the \u003ccode\u003ehtfpp\u003c/code\u003e preprocessor,       insert the \u003ccode\u003e\u003ca\u003eLocation\u003c/a\u003e\u003c/code\u003e parameter automatically. \n\u003c/p\u003e",
        "fct-module": "Test.Framework.HUnitWrapper",
        "fct-package": "HTF",
        "fct-signature": "Location -\u003e String -\u003e m a -\u003e (e -\u003e Bool) -\u003e m ()",
        "fct-source": "src/Test-Framework-HUnitWrapper.html#assertThrowsMVerbose_",
        "fct-type": "function",
        "title": "assertThrowsMVerbose_"
      },
      "index": {
        "description": "Fail if executing the action does not throw an exception satisfying the given predicate Bool The String parameter in the Verbose variant can be used to provide extra information about the error Do not use assertThrowsM and assertThrowsMVerbose directly use the macros assertThrowsM and assertThrowsMVerbose instead These macros provided by the htfpp preprocessor insert the Location parameter automatically",
        "hierarchy": "Test Framework HUnitWrapper",
        "module": "Test.Framework.HUnitWrapper",
        "name": "assertThrowsMVerbose_",
        "normalized": "Location-\u003eString-\u003ea b-\u003e(c-\u003eBool)-\u003ea()",
        "package": "HTF",
        "partial": "Throws MVerbose",
        "signature": "Location-\u003eString-\u003em a-\u003e(e-\u003eBool)-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-HUnitWrapper.html#v:assertThrowsM_",
      "description": {
        "fct-module": "Test.Framework.HUnitWrapper",
        "fct-package": "HTF",
        "fct-signature": "Location -\u003e m a -\u003e (e -\u003e Bool) -\u003e m ()",
        "fct-source": "src/Test-Framework-HUnitWrapper.html#assertThrowsM_",
        "fct-type": "function",
        "title": "assertThrowsM_"
      },
      "index": {
        "description": "",
        "hierarchy": "Test Framework HUnitWrapper",
        "module": "Test.Framework.HUnitWrapper",
        "name": "assertThrowsM_",
        "normalized": "Location-\u003ea b-\u003e(c-\u003eBool)-\u003ea()",
        "package": "HTF",
        "partial": "Throws",
        "signature": "Location-\u003em a-\u003e(e-\u003eBool)-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-HUnitWrapper.html#v:assertThrowsSomeIOVerbose_",
      "description": {
        "fct-descr": "\u003cp\u003eFail if executing the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e action does not\n             throw an exception. The \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e parameter in the \u003ccode\u003eVerbose\u003c/code\u003e       variant can be used to provide extra information about the error. Do not use       \u003ccode\u003eassertThrowsSomeIO_\u003c/code\u003e and \u003ccode\u003eassertThrowsSomeIOVerbose_\u003c/code\u003e directly, use the macros \u003ccode\u003eassertThrowsSomeIO\u003c/code\u003e       and \u003ccode\u003eassertThrowsSomeIOVerbose\u003c/code\u003e instead. These macros, provided by the \u003ccode\u003ehtfpp\u003c/code\u003e preprocessor,       insert the \u003ccode\u003e\u003ca\u003eLocation\u003c/a\u003e\u003c/code\u003e parameter automatically. \n\u003c/p\u003e",
        "fct-module": "Test.Framework.HUnitWrapper",
        "fct-package": "HTF",
        "fct-signature": "Location -\u003e String -\u003e IO a -\u003e Assertion",
        "fct-source": "src/Test-Framework-HUnitWrapper.html#assertThrowsSomeIOVerbose_",
        "fct-type": "function",
        "title": "assertThrowsSomeIOVerbose_"
      },
      "index": {
        "description": "Fail if executing the IO action does not throw an exception The String parameter in the Verbose variant can be used to provide extra information about the error Do not use assertThrowsSomeIO and assertThrowsSomeIOVerbose directly use the macros assertThrowsSomeIO and assertThrowsSomeIOVerbose instead These macros provided by the htfpp preprocessor insert the Location parameter automatically",
        "hierarchy": "Test Framework HUnitWrapper",
        "module": "Test.Framework.HUnitWrapper",
        "name": "assertThrowsSomeIOVerbose_",
        "normalized": "Location-\u003eString-\u003eIO a-\u003eAssertion",
        "package": "HTF",
        "partial": "Throws Some IOVerbose",
        "signature": "Location-\u003eString-\u003eIO a-\u003eAssertion"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-HUnitWrapper.html#v:assertThrowsSomeIO_",
      "description": {
        "fct-module": "Test.Framework.HUnitWrapper",
        "fct-package": "HTF",
        "fct-signature": "Location -\u003e IO a -\u003e Assertion",
        "fct-source": "src/Test-Framework-HUnitWrapper.html#assertThrowsSomeIO_",
        "fct-type": "function",
        "title": "assertThrowsSomeIO_"
      },
      "index": {
        "description": "",
        "hierarchy": "Test Framework HUnitWrapper",
        "module": "Test.Framework.HUnitWrapper",
        "name": "assertThrowsSomeIO_",
        "normalized": "Location-\u003eIO a-\u003eAssertion",
        "package": "HTF",
        "partial": "Throws Some IO",
        "signature": "Location-\u003eIO a-\u003eAssertion"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-HUnitWrapper.html#v:assertThrowsSomeMVerbose_",
      "description": {
        "fct-descr": "\u003cp\u003eFail if executing the \u003ccode\u003em\u003c/code\u003e action does not\n             throw an exception. The \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e parameter in the \u003ccode\u003eVerbose\u003c/code\u003e       variant can be used to provide extra information about the error. Do not use       \u003ccode\u003eassertThrowsSomeM_\u003c/code\u003e and \u003ccode\u003eassertThrowsSomeMVerbose_\u003c/code\u003e directly, use the macros \u003ccode\u003eassertThrowsSomeM\u003c/code\u003e       and \u003ccode\u003eassertThrowsSomeMVerbose\u003c/code\u003e instead. These macros, provided by the \u003ccode\u003ehtfpp\u003c/code\u003e preprocessor,       insert the \u003ccode\u003e\u003ca\u003eLocation\u003c/a\u003e\u003c/code\u003e parameter automatically. \n\u003c/p\u003e",
        "fct-module": "Test.Framework.HUnitWrapper",
        "fct-package": "HTF",
        "fct-signature": "Location -\u003e String -\u003e m a -\u003e m ()",
        "fct-source": "src/Test-Framework-HUnitWrapper.html#assertThrowsSomeMVerbose_",
        "fct-type": "function",
        "title": "assertThrowsSomeMVerbose_"
      },
      "index": {
        "description": "Fail if executing the action does not throw an exception The String parameter in the Verbose variant can be used to provide extra information about the error Do not use assertThrowsSomeM and assertThrowsSomeMVerbose directly use the macros assertThrowsSomeM and assertThrowsSomeMVerbose instead These macros provided by the htfpp preprocessor insert the Location parameter automatically",
        "hierarchy": "Test Framework HUnitWrapper",
        "module": "Test.Framework.HUnitWrapper",
        "name": "assertThrowsSomeMVerbose_",
        "normalized": "Location-\u003eString-\u003ea b-\u003ea()",
        "package": "HTF",
        "partial": "Throws Some MVerbose",
        "signature": "Location-\u003eString-\u003em a-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-HUnitWrapper.html#v:assertThrowsSomeM_",
      "description": {
        "fct-module": "Test.Framework.HUnitWrapper",
        "fct-package": "HTF",
        "fct-signature": "Location -\u003e m a -\u003e m ()",
        "fct-source": "src/Test-Framework-HUnitWrapper.html#assertThrowsSomeM_",
        "fct-type": "function",
        "title": "assertThrowsSomeM_"
      },
      "index": {
        "description": "",
        "hierarchy": "Test Framework HUnitWrapper",
        "module": "Test.Framework.HUnitWrapper",
        "name": "assertThrowsSomeM_",
        "normalized": "Location-\u003ea b-\u003ea()",
        "package": "HTF",
        "partial": "Throws Some",
        "signature": "Location-\u003em a-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-HUnitWrapper.html#v:assertThrowsSomeVerbose_",
      "description": {
        "fct-descr": "\u003cp\u003eFail if evaluating the expression of type \u003ccode\u003ea\u003c/code\u003e does not\n             throw an exception. The \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e parameter in the \u003ccode\u003eVerbose\u003c/code\u003e       variant can be used to provide extra information about the error. Do not use       \u003ccode\u003eassertThrowsSome_\u003c/code\u003e and \u003ccode\u003eassertThrowsSomeVerbose_\u003c/code\u003e directly, use the macros \u003ccode\u003eassertThrowsSome\u003c/code\u003e       and \u003ccode\u003eassertThrowsSomeVerbose\u003c/code\u003e instead. These macros, provided by the \u003ccode\u003ehtfpp\u003c/code\u003e preprocessor,       insert the \u003ccode\u003e\u003ca\u003eLocation\u003c/a\u003e\u003c/code\u003e parameter automatically. \n\u003c/p\u003e",
        "fct-module": "Test.Framework.HUnitWrapper",
        "fct-package": "HTF",
        "fct-signature": "Location -\u003e String -\u003e a -\u003e Assertion",
        "fct-source": "src/Test-Framework-HUnitWrapper.html#assertThrowsSomeVerbose_",
        "fct-type": "function",
        "title": "assertThrowsSomeVerbose_"
      },
      "index": {
        "description": "Fail if evaluating the expression of type does not throw an exception The String parameter in the Verbose variant can be used to provide extra information about the error Do not use assertThrowsSome and assertThrowsSomeVerbose directly use the macros assertThrowsSome and assertThrowsSomeVerbose instead These macros provided by the htfpp preprocessor insert the Location parameter automatically",
        "hierarchy": "Test Framework HUnitWrapper",
        "module": "Test.Framework.HUnitWrapper",
        "name": "assertThrowsSomeVerbose_",
        "normalized": "Location-\u003eString-\u003ea-\u003eAssertion",
        "package": "HTF",
        "partial": "Throws Some Verbose",
        "signature": "Location-\u003eString-\u003ea-\u003eAssertion"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-HUnitWrapper.html#v:assertThrowsSome_",
      "description": {
        "fct-module": "Test.Framework.HUnitWrapper",
        "fct-package": "HTF",
        "fct-signature": "Location -\u003e a -\u003e Assertion",
        "fct-source": "src/Test-Framework-HUnitWrapper.html#assertThrowsSome_",
        "fct-type": "function",
        "title": "assertThrowsSome_"
      },
      "index": {
        "description": "",
        "hierarchy": "Test Framework HUnitWrapper",
        "module": "Test.Framework.HUnitWrapper",
        "name": "assertThrowsSome_",
        "normalized": "Location-\u003ea-\u003eAssertion",
        "package": "HTF",
        "partial": "Throws Some",
        "signature": "Location-\u003ea-\u003eAssertion"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-HUnitWrapper.html#v:assertThrowsVerbose_",
      "description": {
        "fct-descr": "\u003cp\u003eFail if evaluating the expression of type \u003ccode\u003ea\u003c/code\u003e does not\n             throw an exception satisfying the given predicate \u003ccode\u003e(e -\u003e Bool)\u003c/code\u003e. The \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e parameter in the \u003ccode\u003eVerbose\u003c/code\u003e       variant can be used to provide extra information about the error. Do not use       \u003ccode\u003eassertThrows_\u003c/code\u003e and \u003ccode\u003eassertThrowsVerbose_\u003c/code\u003e directly, use the macros \u003ccode\u003eassertThrows\u003c/code\u003e       and \u003ccode\u003eassertThrowsVerbose\u003c/code\u003e instead. These macros, provided by the \u003ccode\u003ehtfpp\u003c/code\u003e preprocessor,       insert the \u003ccode\u003e\u003ca\u003eLocation\u003c/a\u003e\u003c/code\u003e parameter automatically. \n\u003c/p\u003e",
        "fct-module": "Test.Framework.HUnitWrapper",
        "fct-package": "HTF",
        "fct-signature": "Location -\u003e String -\u003e a -\u003e (e -\u003e Bool) -\u003e Assertion",
        "fct-source": "src/Test-Framework-HUnitWrapper.html#assertThrowsVerbose_",
        "fct-type": "function",
        "title": "assertThrowsVerbose_"
      },
      "index": {
        "description": "Fail if evaluating the expression of type does not throw an exception satisfying the given predicate Bool The String parameter in the Verbose variant can be used to provide extra information about the error Do not use assertThrows and assertThrowsVerbose directly use the macros assertThrows and assertThrowsVerbose instead These macros provided by the htfpp preprocessor insert the Location parameter automatically",
        "hierarchy": "Test Framework HUnitWrapper",
        "module": "Test.Framework.HUnitWrapper",
        "name": "assertThrowsVerbose_",
        "normalized": "Location-\u003eString-\u003ea-\u003e(b-\u003eBool)-\u003eAssertion",
        "package": "HTF",
        "partial": "Throws Verbose",
        "signature": "Location-\u003eString-\u003ea-\u003e(e-\u003eBool)-\u003eAssertion"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-HUnitWrapper.html#v:assertThrows_",
      "description": {
        "fct-module": "Test.Framework.HUnitWrapper",
        "fct-package": "HTF",
        "fct-signature": "Location -\u003e a -\u003e (e -\u003e Bool) -\u003e Assertion",
        "fct-source": "src/Test-Framework-HUnitWrapper.html#assertThrows_",
        "fct-type": "function",
        "title": "assertThrows_"
      },
      "index": {
        "description": "",
        "hierarchy": "Test Framework HUnitWrapper",
        "module": "Test.Framework.HUnitWrapper",
        "name": "assertThrows_",
        "normalized": "Location-\u003ea-\u003e(b-\u003eBool)-\u003eAssertion",
        "package": "HTF",
        "partial": "Throws",
        "signature": "Location-\u003ea-\u003e(e-\u003eBool)-\u003eAssertion"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-HUnitWrapper.html#v:subAssertVerbose_",
      "description": {
        "fct-descr": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003esubAssert_\u003c/a\u003e\u003c/code\u003e but with an additional error message.\n\u003c/p\u003e",
        "fct-module": "Test.Framework.HUnitWrapper",
        "fct-package": "HTF",
        "fct-signature": "Location -\u003e String -\u003e m a -\u003e m a",
        "fct-source": "src/Test-Framework-HUnitWrapper.html#subAssertVerbose_",
        "fct-type": "function",
        "title": "subAssertVerbose_"
      },
      "index": {
        "description": "Same as subAssert but with an additional error message",
        "hierarchy": "Test Framework HUnitWrapper",
        "module": "Test.Framework.HUnitWrapper",
        "name": "subAssertVerbose_",
        "normalized": "Location-\u003eString-\u003ea b-\u003ea b",
        "package": "HTF",
        "partial": "Assert Verbose",
        "signature": "Location-\u003eString-\u003em a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-HUnitWrapper.html#v:subAssert_",
      "description": {
        "fct-descr": "\u003cp\u003eSub assertions are a poor man's way of abstracting over assertions while still propagating location\n information. Say you want to abstract over the assertion that an \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e is positive. You would write\n\u003c/p\u003e\u003cpre\u003e assertIsPositive :: Int -\u003e Assertion\n assertIsPositive n = assertBool (n \u003e 0)\n\u003c/pre\u003e\u003cp\u003eYou can now use \u003ccode\u003eassertIsPositive i\u003c/code\u003e for some integer \u003ccode\u003ei\u003c/code\u003e from your unit tests, but if you call it directly\n you will lose location information: if \u003ccode\u003eassertIsPositive i\u003c/code\u003e fails you will only get the location where\n \u003ccode\u003eassertIsPositive\u003c/code\u003e is defined but not from where it has been called.\n\u003c/p\u003e\u003cp\u003eTo recover the location information you simply use \u003ccode\u003esubAssert (assertIsPositive i)\u003c/code\u003e.\n In this case, if \u003ccode\u003ei\u003c/code\u003e is not positive, you will get the location of the caller.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNote:\u003c/em\u003e Don't use subAssert_ directly but use the preprocessor macro \u003ccode\u003esubAssert\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Test.Framework.HUnitWrapper",
        "fct-package": "HTF",
        "fct-signature": "Location -\u003e m a -\u003e m a",
        "fct-source": "src/Test-Framework-HUnitWrapper.html#subAssert_",
        "fct-type": "function",
        "title": "subAssert_"
      },
      "index": {
        "description": "Sub assertions are poor man way of abstracting over assertions while still propagating location information Say you want to abstract over the assertion that an Int is positive You would write assertIsPositive Int Assertion assertIsPositive assertBool You can now use assertIsPositive for some integer from your unit tests but if you call it directly you will lose location information if assertIsPositive fails you will only get the location where assertIsPositive is defined but not from where it has been called To recover the location information you simply use subAssert assertIsPositive In this case if is not positive you will get the location of the caller Note Don use subAssert directly but use the preprocessor macro subAssert",
        "hierarchy": "Test Framework HUnitWrapper",
        "module": "Test.Framework.HUnitWrapper",
        "name": "subAssert_",
        "normalized": "Location-\u003ea b-\u003ea b",
        "package": "HTF",
        "partial": "Assert",
        "signature": "Location-\u003em a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-HUnitWrapper.html#v:unitTestPending",
      "description": {
        "fct-module": "Test.Framework.HUnitWrapper",
        "fct-package": "HTF",
        "fct-signature": "String -\u003e IO a",
        "fct-source": "src/Test-Framework-TestManagerInternal.html#unitTestPending",
        "fct-type": "function",
        "title": "unitTestPending"
      },
      "index": {
        "description": "",
        "hierarchy": "Test Framework HUnitWrapper",
        "module": "Test.Framework.HUnitWrapper",
        "name": "unitTestPending",
        "normalized": "String-\u003eIO a",
        "package": "HTF",
        "partial": "Test Pending",
        "signature": "String-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-HUnitWrapper.html#v:unitTestPending-39-",
      "description": {
        "fct-descr": "\u003cp\u003eUse \u003ccode\u003eunitTestPending' msg test\u003c/code\u003e to mark the given test as pending\nwithout removing it from the test suite and without deleting or commenting out the test code.\n\u003c/p\u003e",
        "fct-module": "Test.Framework.HUnitWrapper",
        "fct-package": "HTF",
        "fct-signature": "String -\u003e IO a -\u003e IO a",
        "fct-source": "src/Test-Framework-HUnitWrapper.html#unitTestPending%27",
        "fct-type": "function",
        "title": "unitTestPending'"
      },
      "index": {
        "description": "Use unitTestPending msg test to mark the given test as pending without removing it from the test suite and without deleting or commenting out the test code",
        "hierarchy": "Test Framework HUnitWrapper",
        "module": "Test.Framework.HUnitWrapper",
        "name": "unitTestPending'",
        "normalized": "String-\u003eIO a-\u003eIO a",
        "package": "HTF",
        "partial": "Test Pending'",
        "signature": "String-\u003eIO a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-JsonOutput.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHTF's machine-readable output is a sequence of JSON messages. Each message is terminated\nby a newline followed by two semicolons followed again by a newline.\n\u003c/p\u003e\u003cp\u003eThere are four types of JSON messages. Each JSON object has a \u003ca\u003etype\u003c/a\u003e attribute denoting\nthis type. The types are: \u003ccode\u003etest-start\u003c/code\u003e, \u003ccode\u003etest-end\u003c/code\u003e, and \u003ccode\u003etest-list\u003c/code\u003e, \u003ccode\u003etest-results\u003c/code\u003e.\nTheir haskell representations are \u003ccode\u003e\u003ca\u003eTestStartEventObj\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eTestEndEventObj\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eTestListObj\u003c/a\u003e\u003c/code\u003e, and\n\u003ccode\u003e\u003ca\u003eTestResultsObj\u003c/a\u003e\u003c/code\u003e. The corresponding JSON rendering is defined in this module.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e  The \u003ccode\u003etest-start\u003c/code\u003e message denotes the start of a single test case. Example (whitespace inserted for better readability):\n\u003c/li\u003e\u003c/ul\u003e\u003cpre\u003e {\"test\": {\"flatName\": \"Main:nonEmpty\",\n           \"location\": {\"file\": \"Tutorial.hs\", \"line\": 17},\n           \"path\": [\"Main\",\"nonEmpty\"],\n           \"sort\": \"unit-test\"},\n  \"type\":\"test-start\"}\n\u003c/pre\u003e\u003cul\u003e\u003cli\u003e  The \u003ccode\u003etest-end\u003c/code\u003e message denotes the end of a single test case. It contains information about the outcome of the test. Example:\n\u003c/li\u003e\u003c/ul\u003e\u003cpre\u003e {\"result\": \"pass\",\n  \"message\":\"\",\n  \"test\":{\"flatName\": \"Main:nonEmpty\",\n          \"location\": {\"file\": \"Tutorial.hs\", \"line\": 17},\n          \"path\": [\"Main\",\"nonEmpty\"],\n          \"sort\": \"unit-test\"},\n  \"wallTime\": 0,  // in milliseconds\n  \"type\": \"test-end\",\n  \"location\":null}\n\u003c/pre\u003e\u003cul\u003e\u003cli\u003e  The \u003ccode\u003etest-results\u003c/code\u003e message occurs after all tests have been run and summarizes their results. Example:\n\u003c/li\u003e\u003c/ul\u003e\u003cpre\u003e {\"failures\": 0,\n  \"passed\": 4,\n  \"pending\": 0,\n  \"wallTime\": 39, // in milliseconds\n  \"errors\": 0,\n  \"type\":\"test-results\"}\n\u003c/pre\u003e\u003cul\u003e\u003cli\u003e  The \u003ccode\u003etest-list\u003c/code\u003e message contains all tests defined. It is used for the --list commandline options. Example:\n\u003c/li\u003e\u003c/ul\u003e\u003cpre\u003e {\"tests\": [{\"flatName\":\"Main:nonEmpty\",\"location\":{\"file\":\"Tutorial.hs\",\"line\":17},\"path\":[\"Main\",\"nonEmpty\"],\"sort\":\"unit-test\"},\n            {\"flatName\":\"Main:empty\",\"location\":{\"file\":\"Tutorial.hs\",\"line\":19},\"path\":[\"Main\",\"empty\"],\"sort\":\"unit-test\"},\n            {\"flatName\":\"Main:reverse\",\"location\":{\"file\":\"Tutorial.hs\",\"line\":22},\"path\":[\"Main\",\"reverse\"],\"sort\":\"quickcheck-property\"},\n            {\"flatName\":\"Main:reverseReplay\",\"location\":{\"file\":\"Tutorial.hs\",\"line\":24},\"path\":[\"Main\",\"reverseReplay\"],\"sort\":\"quickcheck-property\"}],\n  \"type\":\"test-list\"}\n\u003c/pre\u003e\u003cp\u003eFor an exact specification, please have a look at the code of this module.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Test.Framework.JsonOutput",
        "fct-package": "HTF",
        "fct-signature": "module",
        "fct-source": "src/Test-Framework-JsonOutput.html",
        "fct-type": "module",
        "title": "JsonOutput"
      },
      "index": {
        "description": "HTF machine-readable output is sequence of JSON messages Each message is terminated by newline followed by two semicolons followed again by newline There are four types of JSON messages Each JSON object has type attribute denoting this type The types are test-start test-end and test-list test-results Their haskell representations are TestStartEventObj TestEndEventObj TestListObj and TestResultsObj The corresponding JSON rendering is defined in this module The test-start message denotes the start of single test case Example whitespace inserted for better readability test flatName Main nonEmpty location file Tutorial.hs line path Main nonEmpty sort unit-test type test-start The test-end message denotes the end of single test case It contains information about the outcome of the test Example result pass message test flatName Main nonEmpty location file Tutorial.hs line path Main nonEmpty sort unit-test wallTime in milliseconds type test-end location null The test-results message occurs after all tests have been run and summarizes their results Example failures passed pending wallTime in milliseconds errors type test-results The test-list message contains all tests defined It is used for the list commandline options Example tests flatName Main nonEmpty location file Tutorial.hs line path Main nonEmpty sort unit-test flatName Main empty location file Tutorial.hs line path Main empty sort unit-test flatName Main reverse location file Tutorial.hs line path Main reverse sort quickcheck-property flatName Main reverseReplay location file Tutorial.hs line path Main reverseReplay sort quickcheck-property type test-list For an exact specification please have look at the code of this module",
        "hierarchy": "Test Framework JsonOutput",
        "module": "Test.Framework.JsonOutput",
        "name": "JsonOutput",
        "normalized": "",
        "package": "HTF",
        "partial": "Json Output",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-JsonOutput.html#t:HTFJsonObj",
      "description": {
        "fct-module": "Test.Framework.JsonOutput",
        "fct-package": "HTF",
        "fct-signature": "class",
        "fct-source": "src/Test-Framework-JsonOutput.html#HTFJsonObj",
        "fct-type": "class",
        "title": "HTFJsonObj"
      },
      "index": {
        "description": "",
        "hierarchy": "Test Framework JsonOutput",
        "module": "Test.Framework.JsonOutput",
        "name": "HTFJsonObj",
        "normalized": "",
        "package": "HTF",
        "partial": "HTFJson Obj",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-JsonOutput.html#t:TestEndEventObj",
      "description": {
        "fct-module": "Test.Framework.JsonOutput",
        "fct-package": "HTF",
        "fct-signature": "data",
        "fct-source": "src/Test-Framework-JsonOutput.html#TestEndEventObj",
        "fct-type": "data",
        "title": "TestEndEventObj"
      },
      "index": {
        "description": "",
        "hierarchy": "Test Framework JsonOutput",
        "module": "Test.Framework.JsonOutput",
        "name": "TestEndEventObj",
        "normalized": "",
        "package": "HTF",
        "partial": "Test End Event Obj",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-JsonOutput.html#t:TestListObj",
      "description": {
        "fct-module": "Test.Framework.JsonOutput",
        "fct-package": "HTF",
        "fct-signature": "data",
        "fct-source": "src/Test-Framework-JsonOutput.html#TestListObj",
        "fct-type": "data",
        "title": "TestListObj"
      },
      "index": {
        "description": "",
        "hierarchy": "Test Framework JsonOutput",
        "module": "Test.Framework.JsonOutput",
        "name": "TestListObj",
        "normalized": "",
        "package": "HTF",
        "partial": "Test List Obj",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-JsonOutput.html#t:TestObj",
      "description": {
        "fct-module": "Test.Framework.JsonOutput",
        "fct-package": "HTF",
        "fct-signature": "data",
        "fct-source": "src/Test-Framework-JsonOutput.html#TestObj",
        "fct-type": "data",
        "title": "TestObj"
      },
      "index": {
        "description": "",
        "hierarchy": "Test Framework JsonOutput",
        "module": "Test.Framework.JsonOutput",
        "name": "TestObj",
        "normalized": "",
        "package": "HTF",
        "partial": "Test Obj",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-JsonOutput.html#t:TestResultsObj",
      "description": {
        "fct-module": "Test.Framework.JsonOutput",
        "fct-package": "HTF",
        "fct-signature": "data",
        "fct-source": "src/Test-Framework-JsonOutput.html#TestResultsObj",
        "fct-type": "data",
        "title": "TestResultsObj"
      },
      "index": {
        "description": "",
        "hierarchy": "Test Framework JsonOutput",
        "module": "Test.Framework.JsonOutput",
        "name": "TestResultsObj",
        "normalized": "",
        "package": "HTF",
        "partial": "Test Results Obj",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-JsonOutput.html#t:TestStartEventObj",
      "description": {
        "fct-module": "Test.Framework.JsonOutput",
        "fct-package": "HTF",
        "fct-signature": "data",
        "fct-source": "src/Test-Framework-JsonOutput.html#TestStartEventObj",
        "fct-type": "data",
        "title": "TestStartEventObj"
      },
      "index": {
        "description": "",
        "hierarchy": "Test Framework JsonOutput",
        "module": "Test.Framework.JsonOutput",
        "name": "TestStartEventObj",
        "normalized": "",
        "package": "HTF",
        "partial": "Test Start Event Obj",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-JsonOutput.html#v:decodeObj",
      "description": {
        "fct-module": "Test.Framework.JsonOutput",
        "fct-package": "HTF",
        "fct-signature": "a -\u003e ByteString",
        "fct-source": "src/Test-Framework-JsonOutput.html#decodeObj",
        "fct-type": "function",
        "title": "decodeObj"
      },
      "index": {
        "description": "",
        "hierarchy": "Test Framework JsonOutput",
        "module": "Test.Framework.JsonOutput",
        "name": "decodeObj",
        "normalized": "a-\u003eByteString",
        "package": "HTF",
        "partial": "Obj",
        "signature": "a-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-JsonOutput.html#v:mkTestEndEventObj",
      "description": {
        "fct-module": "Test.Framework.JsonOutput",
        "fct-package": "HTF",
        "fct-signature": "FlatTestResult -\u003e String -\u003e TestEndEventObj",
        "fct-source": "src/Test-Framework-JsonOutput.html#mkTestEndEventObj",
        "fct-type": "function",
        "title": "mkTestEndEventObj"
      },
      "index": {
        "description": "",
        "hierarchy": "Test Framework JsonOutput",
        "module": "Test.Framework.JsonOutput",
        "name": "mkTestEndEventObj",
        "normalized": "FlatTestResult-\u003eString-\u003eTestEndEventObj",
        "package": "HTF",
        "partial": "Test End Event Obj",
        "signature": "FlatTestResult-\u003eString-\u003eTestEndEventObj"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-JsonOutput.html#v:mkTestListObj",
      "description": {
        "fct-module": "Test.Framework.JsonOutput",
        "fct-package": "HTF",
        "fct-signature": "[(FlatTest, String)] -\u003e TestListObj",
        "fct-source": "src/Test-Framework-JsonOutput.html#mkTestListObj",
        "fct-type": "function",
        "title": "mkTestListObj"
      },
      "index": {
        "description": "",
        "hierarchy": "Test Framework JsonOutput",
        "module": "Test.Framework.JsonOutput",
        "name": "mkTestListObj",
        "normalized": "[(FlatTest,String)]-\u003eTestListObj",
        "package": "HTF",
        "partial": "Test List Obj",
        "signature": "[(FlatTest,String)]-\u003eTestListObj"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-JsonOutput.html#v:mkTestResultsObj",
      "description": {
        "fct-module": "Test.Framework.JsonOutput",
        "fct-package": "HTF",
        "fct-signature": "Milliseconds -\u003e Int -\u003e Int -\u003e Int -\u003e Int -\u003e TestResultsObj",
        "fct-source": "src/Test-Framework-JsonOutput.html#mkTestResultsObj",
        "fct-type": "function",
        "title": "mkTestResultsObj"
      },
      "index": {
        "description": "",
        "hierarchy": "Test Framework JsonOutput",
        "module": "Test.Framework.JsonOutput",
        "name": "mkTestResultsObj",
        "normalized": "Milliseconds-\u003eInt-\u003eInt-\u003eInt-\u003eInt-\u003eTestResultsObj",
        "package": "HTF",
        "partial": "Test Results Obj",
        "signature": "Milliseconds-\u003eInt-\u003eInt-\u003eInt-\u003eInt-\u003eTestResultsObj"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-JsonOutput.html#v:mkTestStartEventObj",
      "description": {
        "fct-module": "Test.Framework.JsonOutput",
        "fct-package": "HTF",
        "fct-signature": "FlatTest -\u003e String -\u003e TestStartEventObj",
        "fct-source": "src/Test-Framework-JsonOutput.html#mkTestStartEventObj",
        "fct-type": "function",
        "title": "mkTestStartEventObj"
      },
      "index": {
        "description": "",
        "hierarchy": "Test Framework JsonOutput",
        "module": "Test.Framework.JsonOutput",
        "name": "mkTestStartEventObj",
        "normalized": "FlatTest-\u003eString-\u003eTestStartEventObj",
        "package": "HTF",
        "partial": "Test Start Event Obj",
        "signature": "FlatTest-\u003eString-\u003eTestStartEventObj"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-Location.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines types and functions dealing with source code locations.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Test.Framework.Location",
        "fct-package": "HTF",
        "fct-signature": "module",
        "fct-source": "src/Test-Framework-Location.html",
        "fct-type": "module",
        "title": "Location"
      },
      "index": {
        "description": "This module defines types and functions dealing with source code locations",
        "hierarchy": "Test Framework Location",
        "module": "Test.Framework.Location",
        "name": "Location",
        "normalized": "",
        "package": "HTF",
        "partial": "Location",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-Location.html#t:Location",
      "description": {
        "fct-descr": "\u003cp\u003eAn abstract type representing locations in a file.\n\u003c/p\u003e",
        "fct-module": "Test.Framework.Location",
        "fct-package": "HTF",
        "fct-signature": "data",
        "fct-source": "src/Test-Framework-Location.html#Location",
        "fct-type": "data",
        "title": "Location"
      },
      "index": {
        "description": "An abstract type representing locations in file",
        "hierarchy": "Test Framework Location",
        "module": "Test.Framework.Location",
        "name": "Location",
        "normalized": "",
        "package": "HTF",
        "partial": "Location",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-Location.html#v:fileName",
      "description": {
        "fct-descr": "\u003cp\u003eExtract the file name of a \u003ccode\u003e\u003ca\u003eLocation\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Test.Framework.Location",
        "fct-package": "HTF",
        "fct-signature": "Location -\u003e String",
        "fct-source": "src/Test-Framework-Location.html#fileName",
        "fct-type": "function",
        "title": "fileName"
      },
      "index": {
        "description": "Extract the file name of Location",
        "hierarchy": "Test Framework Location",
        "module": "Test.Framework.Location",
        "name": "fileName",
        "normalized": "Location-\u003eString",
        "package": "HTF",
        "partial": "Name",
        "signature": "Location-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-Location.html#v:lineNumber",
      "description": {
        "fct-descr": "\u003cp\u003eExtract the line number of a \u003ccode\u003e\u003ca\u003eLocation\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Test.Framework.Location",
        "fct-package": "HTF",
        "fct-signature": "Location -\u003e Int",
        "fct-source": "src/Test-Framework-Location.html#lineNumber",
        "fct-type": "function",
        "title": "lineNumber"
      },
      "index": {
        "description": "Extract the line number of Location",
        "hierarchy": "Test Framework Location",
        "module": "Test.Framework.Location",
        "name": "lineNumber",
        "normalized": "Location-\u003eInt",
        "package": "HTF",
        "partial": "Number",
        "signature": "Location-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-Location.html#v:makeLoc",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new location.\n\u003c/p\u003e",
        "fct-module": "Test.Framework.Location",
        "fct-package": "HTF",
        "fct-signature": "String-\u003e Int-\u003e Location",
        "fct-type": "function",
        "title": "makeLoc"
      },
      "index": {
        "description": "Create new location",
        "hierarchy": "Test Framework Location",
        "module": "Test.Framework.Location",
        "name": "makeLoc",
        "normalized": "String-\u003eInt-\u003eLocation",
        "package": "HTF",
        "partial": "Loc",
        "signature": "String-\u003eInt-\u003eLocation"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-Location.html#v:showLoc",
      "description": {
        "fct-descr": "\u003cp\u003eRender a \u003ccode\u003e\u003ca\u003eLocation\u003c/a\u003e\u003c/code\u003e as a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Test.Framework.Location",
        "fct-package": "HTF",
        "fct-signature": "Location -\u003e String",
        "fct-source": "src/Test-Framework-Location.html#showLoc",
        "fct-type": "function",
        "title": "showLoc"
      },
      "index": {
        "description": "Render Location as String",
        "hierarchy": "Test Framework Location",
        "module": "Test.Framework.Location",
        "name": "showLoc",
        "normalized": "Location-\u003eString",
        "package": "HTF",
        "partial": "Loc",
        "signature": "Location-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-Location.html#v:unknownLocation",
      "description": {
        "fct-descr": "\u003cp\u003eThe unknown location (file \u003ccode\u003e?\u003c/code\u003e and line \u003ccode\u003e0\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Test.Framework.Location",
        "fct-package": "HTF",
        "fct-signature": "Location",
        "fct-source": "src/Test-Framework-Location.html#unknownLocation",
        "fct-type": "function",
        "title": "unknownLocation"
      },
      "index": {
        "description": "The unknown location file and line",
        "hierarchy": "Test Framework Location",
        "module": "Test.Framework.Location",
        "name": "unknownLocation",
        "normalized": "",
        "package": "HTF",
        "partial": "Location",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-Pretty.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines the \u003ccode\u003e\u003ca\u003ePretty\u003c/a\u003e\u003c/code\u003e type class. The assert functions\nfrom \u003ccode\u003e\u003ca\u003eHUnitWrapper\u003c/a\u003e\u003c/code\u003e use the pretty-printing functionality\nprovided by this type class so as to provide nicely formatted\nerror messages.\n\u003c/p\u003e\u003cp\u003eAdditionally, this module re-exports the standard Haskell pretty-printing module\n\u003ccode\u003e\u003ca\u003ePrettyPrint\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Test.Framework.Pretty",
        "fct-package": "HTF",
        "fct-signature": "module",
        "fct-source": "src/Test-Framework-Pretty.html",
        "fct-type": "module",
        "title": "Pretty"
      },
      "index": {
        "description": "This module defines the Pretty type class The assert functions from HUnitWrapper use the pretty-printing functionality provided by this type class so as to provide nicely formatted error messages Additionally this module re-exports the standard Haskell pretty-printing module PrettyPrint",
        "hierarchy": "Test Framework Pretty",
        "module": "Test.Framework.Pretty",
        "name": "Pretty",
        "normalized": "",
        "package": "HTF",
        "partial": "Pretty",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-Pretty.html#t:Pretty",
      "description": {
        "fct-descr": "\u003cp\u003eA type class for pretty-printable things.\n Minimal complete definition: \u003ccode\u003epretty\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Test.Framework.Pretty",
        "fct-package": "HTF",
        "fct-signature": "class",
        "fct-source": "src/Test-Framework-Pretty.html#Pretty",
        "fct-type": "class",
        "title": "Pretty"
      },
      "index": {
        "description": "type class for pretty-printable things Minimal complete definition pretty",
        "hierarchy": "Test Framework Pretty",
        "module": "Test.Framework.Pretty",
        "name": "Pretty",
        "normalized": "",
        "package": "HTF",
        "partial": "Pretty",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-Pretty.html#v:-60--61--62-",
      "description": {
        "fct-descr": "\u003cp\u003eUtility function for inserting a \u003ccode\u003e=\u003c/code\u003e between two \u003ccode\u003e\u003ca\u003eDoc\u003c/a\u003e\u003c/code\u003e values.\n\u003c/p\u003e",
        "fct-module": "Test.Framework.Pretty",
        "fct-package": "HTF",
        "fct-signature": "Doc -\u003e Doc -\u003e Doc",
        "fct-source": "src/Test-Framework-Pretty.html#%3C%3D%3E",
        "fct-type": "function",
        "title": "(\u003c=\u003e)"
      },
      "index": {
        "description": "Utility function for inserting between two Doc values",
        "hierarchy": "Test Framework Pretty",
        "module": "Test.Framework.Pretty",
        "name": "(\u003c=\u003e) \u003c=\u003e",
        "normalized": "Doc-\u003eDoc-\u003eDoc",
        "package": "HTF",
        "partial": "",
        "signature": "Doc-\u003eDoc-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-Pretty.html#v:pretty",
      "description": {
        "fct-descr": "\u003cp\u003ePretty-print a single value.\n\u003c/p\u003e",
        "fct-module": "Test.Framework.Pretty",
        "fct-package": "HTF",
        "fct-signature": "a -\u003e Doc",
        "fct-source": "src/Test-Framework-Pretty.html#pretty",
        "fct-type": "method",
        "title": "pretty"
      },
      "index": {
        "description": "Pretty-print single value",
        "hierarchy": "Test Framework Pretty",
        "module": "Test.Framework.Pretty",
        "name": "pretty",
        "normalized": "a-\u003eDoc",
        "package": "HTF",
        "partial": "",
        "signature": "a-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-Pretty.html#v:prettyList",
      "description": {
        "fct-descr": "\u003cp\u003ePretty-print a list of things.\n\u003c/p\u003e",
        "fct-module": "Test.Framework.Pretty",
        "fct-package": "HTF",
        "fct-signature": "[a] -\u003e Doc",
        "fct-source": "src/Test-Framework-Pretty.html#prettyList",
        "fct-type": "method",
        "title": "prettyList"
      },
      "index": {
        "description": "Pretty-print list of things",
        "hierarchy": "Test Framework Pretty",
        "module": "Test.Framework.Pretty",
        "name": "prettyList",
        "normalized": "[a]-\u003eDoc",
        "package": "HTF",
        "partial": "List",
        "signature": "[a]-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-Pretty.html#v:showPretty",
      "description": {
        "fct-descr": "\u003cp\u003ePretty-print a single value as a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Test.Framework.Pretty",
        "fct-package": "HTF",
        "fct-signature": "a -\u003e String",
        "fct-source": "src/Test-Framework-Pretty.html#showPretty",
        "fct-type": "method",
        "title": "showPretty"
      },
      "index": {
        "description": "Pretty-print single value as String",
        "hierarchy": "Test Framework Pretty",
        "module": "Test.Framework.Pretty",
        "name": "showPretty",
        "normalized": "a-\u003eString",
        "package": "HTF",
        "partial": "Pretty",
        "signature": "a-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-QuickCheckWrapper.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module integrates the \u003ccode\u003e\u003ca\u003eQuickCheck\u003c/a\u003e\u003c/code\u003e library into HTF. It re-exports\nall functionality of \u003ccode\u003e\u003ca\u003eQuickCheck\u003c/a\u003e\u003c/code\u003e and defines some additional functions.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Test.Framework.QuickCheckWrapper",
        "fct-package": "HTF",
        "fct-signature": "module",
        "fct-source": "src/Test-Framework-QuickCheckWrapper.html",
        "fct-type": "module",
        "title": "QuickCheckWrapper"
      },
      "index": {
        "description": "This module integrates the QuickCheck library into HTF It re-exports all functionality of QuickCheck and defines some additional functions",
        "hierarchy": "Test Framework QuickCheckWrapper",
        "module": "Test.Framework.QuickCheckWrapper",
        "name": "QuickCheckWrapper",
        "normalized": "",
        "package": "HTF",
        "partial": "Quick Check Wrapper",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-QuickCheckWrapper.html#t:TestableWithQCArgs",
      "description": {
        "fct-descr": "\u003cp\u003eAbstract type for representing quick check properties with custom \u003ccode\u003e\u003ca\u003eArgs\u003c/a\u003e\u003c/code\u003e.\n   Used only internally.\n\u003c/p\u003e",
        "fct-module": "Test.Framework.QuickCheckWrapper",
        "fct-package": "HTF",
        "fct-signature": "data",
        "fct-source": "src/Test-Framework-QuickCheckWrapper.html#TestableWithQCArgs",
        "fct-type": "data",
        "title": "TestableWithQCArgs"
      },
      "index": {
        "description": "Abstract type for representing quick check properties with custom Args Used only internally",
        "hierarchy": "Test Framework QuickCheckWrapper",
        "module": "Test.Framework.QuickCheckWrapper",
        "name": "TestableWithQCArgs",
        "normalized": "",
        "package": "HTF",
        "partial": "Testable With QCArgs",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-QuickCheckWrapper.html#t:WithQCArgs",
      "description": {
        "fct-descr": "\u003cp\u003eType class providing access to the custom \u003ccode\u003e\u003ca\u003eArgs\u003c/a\u003e\u003c/code\u003e of a quick check property.\n   Used only internally.\n\u003c/p\u003e",
        "fct-module": "Test.Framework.QuickCheckWrapper",
        "fct-package": "HTF",
        "fct-signature": "class",
        "fct-source": "src/Test-Framework-QuickCheckWrapper.html#WithQCArgs",
        "fct-type": "class",
        "title": "WithQCArgs"
      },
      "index": {
        "description": "Type class providing access to the custom Args of quick check property Used only internally",
        "hierarchy": "Test Framework QuickCheckWrapper",
        "module": "Test.Framework.QuickCheckWrapper",
        "name": "WithQCArgs",
        "normalized": "",
        "package": "HTF",
        "partial": "With QCArgs",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-QuickCheckWrapper.html#v:asTestableWithQCArgs",
      "description": {
        "fct-descr": "\u003cp\u003eTurns a \u003ccode\u003e\u003ca\u003eQuickCheck\u003c/a\u003e\u003c/code\u003e property with custom \u003ccode\u003e\u003ca\u003eArgs\u003c/a\u003e\u003c/code\u003e into an \u003ccode\u003e\u003ca\u003eAssertion\u003c/a\u003e\u003c/code\u003e. This function\n is used internally in the code generated by \u003ccode\u003ehtfpp\u003c/code\u003e, do not use it directly.\n\u003c/p\u003e",
        "fct-module": "Test.Framework.QuickCheckWrapper",
        "fct-package": "HTF",
        "fct-signature": "a -\u003e TestableWithQCArgs",
        "fct-source": "src/Test-Framework-QuickCheckWrapper.html#asTestableWithQCArgs",
        "fct-type": "function",
        "title": "asTestableWithQCArgs"
      },
      "index": {
        "description": "Turns QuickCheck property with custom Args into an Assertion This function is used internally in the code generated by htfpp do not use it directly",
        "hierarchy": "Test Framework QuickCheckWrapper",
        "module": "Test.Framework.QuickCheckWrapper",
        "name": "asTestableWithQCArgs",
        "normalized": "a-\u003eTestableWithQCArgs",
        "package": "HTF",
        "partial": "Testable With QCArgs",
        "signature": "a-\u003eTestableWithQCArgs"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-QuickCheckWrapper.html#v:defaultArgs",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eArgs\u003c/a\u003e\u003c/code\u003e used if not explicitly changed.\n\u003c/p\u003e",
        "fct-module": "Test.Framework.QuickCheckWrapper",
        "fct-package": "HTF",
        "fct-signature": "Args",
        "fct-source": "src/Test-Framework-QuickCheckWrapper.html#defaultArgs",
        "fct-type": "function",
        "title": "defaultArgs"
      },
      "index": {
        "description": "The Args used if not explicitly changed",
        "hierarchy": "Test Framework QuickCheckWrapper",
        "module": "Test.Framework.QuickCheckWrapper",
        "name": "defaultArgs",
        "normalized": "",
        "package": "HTF",
        "partial": "Args",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-QuickCheckWrapper.html#v:getCurrentArgs",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieve the \u003ccode\u003e\u003ca\u003eArgs\u003c/a\u003e\u003c/code\u003e currently used per default when evaluating quick check properties.\n\u003c/p\u003e",
        "fct-module": "Test.Framework.QuickCheckWrapper",
        "fct-package": "HTF",
        "fct-signature": "IO Args",
        "fct-source": "src/Test-Framework-QuickCheckWrapper.html#getCurrentArgs",
        "fct-type": "function",
        "title": "getCurrentArgs"
      },
      "index": {
        "description": "Retrieve the Args currently used per default when evaluating quick check properties",
        "hierarchy": "Test Framework QuickCheckWrapper",
        "module": "Test.Framework.QuickCheckWrapper",
        "name": "getCurrentArgs",
        "normalized": "",
        "package": "HTF",
        "partial": "Current Args",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-QuickCheckWrapper.html#v:qcPending",
      "description": {
        "fct-descr": "\u003cp\u003eUse \u003ccode\u003eqcPending msg prop\u003c/code\u003e to mark the given quick check property as pending\n without removing it from the test suite and without deleting or commenting out the property code.\n\u003c/p\u003e",
        "fct-module": "Test.Framework.QuickCheckWrapper",
        "fct-package": "HTF",
        "fct-signature": "String -\u003e t -\u003e t",
        "fct-source": "src/Test-Framework-QuickCheckWrapper.html#qcPending",
        "fct-type": "function",
        "title": "qcPending"
      },
      "index": {
        "description": "Use qcPending msg prop to mark the given quick check property as pending without removing it from the test suite and without deleting or commenting out the property code",
        "hierarchy": "Test Framework QuickCheckWrapper",
        "module": "Test.Framework.QuickCheckWrapper",
        "name": "qcPending",
        "normalized": "String-\u003ea-\u003ea",
        "package": "HTF",
        "partial": "Pending",
        "signature": "String-\u003et-\u003et"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-QuickCheckWrapper.html#v:setDefaultArgs",
      "description": {
        "fct-descr": "\u003cp\u003eChange the default \u003ccode\u003e\u003ca\u003eArgs\u003c/a\u003e\u003c/code\u003e used to evaluate quick check properties.\n\u003c/p\u003e",
        "fct-module": "Test.Framework.QuickCheckWrapper",
        "fct-package": "HTF",
        "fct-signature": "Args -\u003e IO ()",
        "fct-source": "src/Test-Framework-QuickCheckWrapper.html#setDefaultArgs",
        "fct-type": "function",
        "title": "setDefaultArgs"
      },
      "index": {
        "description": "Change the default Args used to evaluate quick check properties",
        "hierarchy": "Test Framework QuickCheckWrapper",
        "module": "Test.Framework.QuickCheckWrapper",
        "name": "setDefaultArgs",
        "normalized": "Args-\u003eIO()",
        "package": "HTF",
        "partial": "Default Args",
        "signature": "Args-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-QuickCheckWrapper.html#v:testableAsAssertion",
      "description": {
        "fct-descr": "\u003cp\u003eTurns a \u003ccode\u003e\u003ca\u003eQuickCheck\u003c/a\u003e\u003c/code\u003e property into an \u003ccode\u003e\u003ca\u003eAssertion\u003c/a\u003e\u003c/code\u003e. This function\n is used internally in the code generated by \u003ccode\u003ehtfpp\u003c/code\u003e, do not use it directly.\n\u003c/p\u003e",
        "fct-module": "Test.Framework.QuickCheckWrapper",
        "fct-package": "HTF",
        "fct-signature": "t -\u003e Assertion",
        "fct-source": "src/Test-Framework-QuickCheckWrapper.html#testableAsAssertion",
        "fct-type": "function",
        "title": "testableAsAssertion"
      },
      "index": {
        "description": "Turns QuickCheck property into an Assertion This function is used internally in the code generated by htfpp do not use it directly",
        "hierarchy": "Test Framework QuickCheckWrapper",
        "module": "Test.Framework.QuickCheckWrapper",
        "name": "testableAsAssertion",
        "normalized": "a-\u003eAssertion",
        "package": "HTF",
        "partial": "As Assertion",
        "signature": "t-\u003eAssertion"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-QuickCheckWrapper.html#v:withQCArgs",
      "description": {
        "fct-descr": "\u003cp\u003eRun a \u003ccode\u003e\u003ca\u003eQuickCheck\u003c/a\u003e\u003c/code\u003e property with modified quick check arguments \u003ccode\u003e\u003ca\u003eArgs\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Test.Framework.QuickCheckWrapper",
        "fct-package": "HTF",
        "fct-signature": "(Args -\u003e Args)-\u003e a-\u003e TestableWithQCArgs",
        "fct-type": "function",
        "title": "withQCArgs"
      },
      "index": {
        "description": "Run QuickCheck property with modified quick check arguments Args",
        "hierarchy": "Test Framework QuickCheckWrapper",
        "module": "Test.Framework.QuickCheckWrapper",
        "name": "withQCArgs",
        "normalized": "(Args-\u003eArgs)-\u003ea-\u003eTestableWithQCArgs",
        "package": "HTF",
        "partial": "QCArgs",
        "signature": "(Args-\u003eArgs)-\u003ea-\u003eTestableWithQCArgs"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-TestManager.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines function for running a set of tests. Furthermore,\nit provides functionality for organzing tests into a hierarchical\nstructure. This functionality is mainly used internally in the code\ngenerated by the \u003ccode\u003ehftpp\u003c/code\u003e pre-processor.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Test.Framework.TestManager",
        "fct-package": "HTF",
        "fct-signature": "module",
        "fct-source": "src/Test-Framework-TestManager.html",
        "fct-type": "module",
        "title": "TestManager"
      },
      "index": {
        "description": "This module defines function for running set of tests Furthermore it provides functionality for organzing tests into hierarchical structure This functionality is mainly used internally in the code generated by the hftpp pre-processor",
        "hierarchy": "Test Framework TestManager",
        "module": "Test.Framework.TestManager",
        "name": "TestManager",
        "normalized": "",
        "package": "HTF",
        "partial": "Test Manager",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-TestManager.html#t:TestableHTF",
      "description": {
        "fct-descr": "\u003cp\u003eA type class for things that can be run as tests.\n Mainly used internally.\n\u003c/p\u003e",
        "fct-module": "Test.Framework.TestManager",
        "fct-package": "HTF",
        "fct-signature": "class",
        "fct-source": "src/Test-Framework-TestManager.html#TestableHTF",
        "fct-type": "class",
        "title": "TestableHTF"
      },
      "index": {
        "description": "type class for things that can be run as tests Mainly used internally",
        "hierarchy": "Test Framework TestManager",
        "module": "Test.Framework.TestManager",
        "name": "TestableHTF",
        "normalized": "",
        "package": "HTF",
        "partial": "Testable HTF",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-TestManager.html#v:addToTestSuite",
      "description": {
        "fct-descr": "\u003cp\u003eExtend a \u003ccode\u003e\u003ca\u003eTestSuite\u003c/a\u003e\u003c/code\u003e with a list of \u003ccode\u003e\u003ca\u003eTest\u003c/a\u003e\u003c/code\u003e values\n\u003c/p\u003e",
        "fct-module": "Test.Framework.TestManager",
        "fct-package": "HTF",
        "fct-signature": "TestSuite -\u003e [Test] -\u003e TestSuite",
        "fct-source": "src/Test-Framework-TestManager.html#addToTestSuite",
        "fct-type": "function",
        "title": "addToTestSuite"
      },
      "index": {
        "description": "Extend TestSuite with list of Test values",
        "hierarchy": "Test Framework TestManager",
        "module": "Test.Framework.TestManager",
        "name": "addToTestSuite",
        "normalized": "TestSuite-\u003e[Test]-\u003eTestSuite",
        "package": "HTF",
        "partial": "To Test Suite",
        "signature": "TestSuite-\u003e[Test]-\u003eTestSuite"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-TestManager.html#v:htfMain",
      "description": {
        "fct-descr": "\u003cp\u003eRuns something testable by parsing the commandline arguments as test options\n (using \u003ccode\u003e\u003ca\u003eparseTestArgs\u003c/a\u003e\u003c/code\u003e). Exits with the exit code returned by \u003ccode\u003e\u003ca\u003erunTestWithArgs\u003c/a\u003e\u003c/code\u003e.\n This function is the main entry point for running tests.\n\u003c/p\u003e",
        "fct-module": "Test.Framework.TestManager",
        "fct-package": "HTF",
        "fct-signature": "t -\u003e IO ()",
        "fct-source": "src/Test-Framework-TestManager.html#htfMain",
        "fct-type": "function",
        "title": "htfMain"
      },
      "index": {
        "description": "Runs something testable by parsing the commandline arguments as test options using parseTestArgs Exits with the exit code returned by runTestWithArgs This function is the main entry point for running tests",
        "hierarchy": "Test Framework TestManager",
        "module": "Test.Framework.TestManager",
        "name": "htfMain",
        "normalized": "a-\u003eIO()",
        "package": "HTF",
        "partial": "Main",
        "signature": "t-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-TestManager.html#v:makeAnonTestSuite",
      "description": {
        "fct-descr": "\u003cp\u003eCreate an unnamed \u003ccode\u003e\u003ca\u003eTestSuite\u003c/a\u003e\u003c/code\u003e from a list of \u003ccode\u003e\u003ca\u003eTest\u003c/a\u003e\u003c/code\u003e values.\n\u003c/p\u003e",
        "fct-module": "Test.Framework.TestManager",
        "fct-package": "HTF",
        "fct-signature": "[Test] -\u003e TestSuite",
        "fct-source": "src/Test-Framework-TestManager.html#makeAnonTestSuite",
        "fct-type": "function",
        "title": "makeAnonTestSuite"
      },
      "index": {
        "description": "Create an unnamed TestSuite from list of Test values",
        "hierarchy": "Test Framework TestManager",
        "module": "Test.Framework.TestManager",
        "name": "makeAnonTestSuite",
        "normalized": "[Test]-\u003eTestSuite",
        "package": "HTF",
        "partial": "Anon Test Suite",
        "signature": "[Test]-\u003eTestSuite"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-TestManager.html#v:makeBlackBoxTest",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a black box test from the given \u003ccode\u003e\u003ca\u003eAssertion\u003c/a\u003e\u003c/code\u003e.\n Mainly used internally.\n\u003c/p\u003e",
        "fct-module": "Test.Framework.TestManager",
        "fct-package": "HTF",
        "fct-signature": "TestID -\u003e Assertion -\u003e Test",
        "fct-source": "src/Test-Framework-TestManager.html#makeBlackBoxTest",
        "fct-type": "function",
        "title": "makeBlackBoxTest"
      },
      "index": {
        "description": "Construct black box test from the given Assertion Mainly used internally",
        "hierarchy": "Test Framework TestManager",
        "module": "Test.Framework.TestManager",
        "name": "makeBlackBoxTest",
        "normalized": "TestID-\u003eAssertion-\u003eTest",
        "package": "HTF",
        "partial": "Black Box Test",
        "signature": "TestID-\u003eAssertion-\u003eTest"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-TestManager.html#v:makeQuickCheckTest",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a test where the given \u003ccode\u003e\u003ca\u003eAssertion\u003c/a\u003e\u003c/code\u003e checks a quick check property.\n Mainly used internally by the htfpp preprocessor.\n\u003c/p\u003e",
        "fct-module": "Test.Framework.TestManager",
        "fct-package": "HTF",
        "fct-signature": "TestID -\u003e Location -\u003e Assertion -\u003e Test",
        "fct-source": "src/Test-Framework-TestManager.html#makeQuickCheckTest",
        "fct-type": "function",
        "title": "makeQuickCheckTest"
      },
      "index": {
        "description": "Construct test where the given Assertion checks quick check property Mainly used internally by the htfpp preprocessor",
        "hierarchy": "Test Framework TestManager",
        "module": "Test.Framework.TestManager",
        "name": "makeQuickCheckTest",
        "normalized": "TestID-\u003eLocation-\u003eAssertion-\u003eTest",
        "package": "HTF",
        "partial": "Quick Check Test",
        "signature": "TestID-\u003eLocation-\u003eAssertion-\u003eTest"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-TestManager.html#v:makeTestSuite",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a named \u003ccode\u003e\u003ca\u003eTestSuite\u003c/a\u003e\u003c/code\u003e from a list of \u003ccode\u003e\u003ca\u003eTest\u003c/a\u003e\u003c/code\u003e values.\n\u003c/p\u003e",
        "fct-module": "Test.Framework.TestManager",
        "fct-package": "HTF",
        "fct-signature": "TestID -\u003e [Test] -\u003e TestSuite",
        "fct-source": "src/Test-Framework-TestManager.html#makeTestSuite",
        "fct-type": "function",
        "title": "makeTestSuite"
      },
      "index": {
        "description": "Create named TestSuite from list of Test values",
        "hierarchy": "Test Framework TestManager",
        "module": "Test.Framework.TestManager",
        "name": "makeTestSuite",
        "normalized": "TestID-\u003e[Test]-\u003eTestSuite",
        "package": "HTF",
        "partial": "Test Suite",
        "signature": "TestID-\u003e[Test]-\u003eTestSuite"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-TestManager.html#v:makeUnitTest",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a unit test from the given \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e action.\n Mainly used internally by the htfpp preprocessor.\n\u003c/p\u003e",
        "fct-module": "Test.Framework.TestManager",
        "fct-package": "HTF",
        "fct-signature": "TestID -\u003e Location -\u003e a -\u003e Test",
        "fct-source": "src/Test-Framework-TestManager.html#makeUnitTest",
        "fct-type": "function",
        "title": "makeUnitTest"
      },
      "index": {
        "description": "Construct unit test from the given IO action Mainly used internally by the htfpp preprocessor",
        "hierarchy": "Test Framework TestManager",
        "module": "Test.Framework.TestManager",
        "name": "makeUnitTest",
        "normalized": "TestID-\u003eLocation-\u003ea-\u003eTest",
        "package": "HTF",
        "partial": "Unit Test",
        "signature": "TestID-\u003eLocation-\u003ea-\u003eTest"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-TestManager.html#v:runTest",
      "description": {
        "fct-descr": "\u003cp\u003eRun something testable using the \u003ccode\u003e\u003ca\u003edefaultCmdlineOptions\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Test.Framework.TestManager",
        "fct-package": "HTF",
        "fct-signature": "t-\u003e IO ExitCode",
        "fct-type": "function",
        "title": "runTest"
      },
      "index": {
        "description": "Run something testable using the defaultCmdlineOptions",
        "hierarchy": "Test Framework TestManager",
        "module": "Test.Framework.TestManager",
        "name": "runTest",
        "normalized": "a-\u003eIO ExitCode",
        "package": "HTF",
        "partial": "Test",
        "signature": "t-\u003eIO ExitCode"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-TestManager.html#v:runTest-39-",
      "description": {
        "fct-descr": "\u003cp\u003eRun something testable using the \u003ccode\u003e\u003ca\u003edefaultCmdlineOptions\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Test.Framework.TestManager",
        "fct-package": "HTF",
        "fct-signature": "t-\u003e IO (IO (), ExitCode)",
        "fct-type": "function",
        "title": "runTest'"
      },
      "index": {
        "description": "Run something testable using the defaultCmdlineOptions",
        "hierarchy": "Test Framework TestManager",
        "module": "Test.Framework.TestManager",
        "name": "runTest'",
        "normalized": "a-\u003eIO(IO(),ExitCode)",
        "package": "HTF",
        "partial": "Test'",
        "signature": "t-\u003eIO(IO(),ExitCode)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-TestManager.html#v:runTestWithArgs",
      "description": {
        "fct-descr": "\u003cp\u003eRun something testable, parse the \u003ccode\u003e\u003ca\u003eCmdlineOptions\u003c/a\u003e\u003c/code\u003e from the given commandline arguments.\n Does not print the overall test results but returns an \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e action for doing so.\n\u003c/p\u003e",
        "fct-module": "Test.Framework.TestManager",
        "fct-package": "HTF",
        "fct-signature": "[String]-\u003e t-\u003e IO ExitCode",
        "fct-type": "function",
        "title": "runTestWithArgs"
      },
      "index": {
        "description": "Run something testable parse the CmdlineOptions from the given commandline arguments Does not print the overall test results but returns an IO action for doing so",
        "hierarchy": "Test Framework TestManager",
        "module": "Test.Framework.TestManager",
        "name": "runTestWithArgs",
        "normalized": "[String]-\u003ea-\u003eIO ExitCode",
        "package": "HTF",
        "partial": "Test With Args",
        "signature": "[String]-\u003et-\u003eIO ExitCode"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-TestManager.html#v:runTestWithArgs-39-",
      "description": {
        "fct-descr": "\u003cp\u003eRun something testable, parse the \u003ccode\u003e\u003ca\u003eCmdlineOptions\u003c/a\u003e\u003c/code\u003e from the given commandline arguments.\n\u003c/p\u003e",
        "fct-module": "Test.Framework.TestManager",
        "fct-package": "HTF",
        "fct-signature": "[String]-\u003e t-\u003e IO (IO (), ExitCode)",
        "fct-type": "function",
        "title": "runTestWithArgs'"
      },
      "index": {
        "description": "Run something testable parse the CmdlineOptions from the given commandline arguments",
        "hierarchy": "Test Framework TestManager",
        "module": "Test.Framework.TestManager",
        "name": "runTestWithArgs'",
        "normalized": "[String]-\u003ea-\u003eIO(IO(),ExitCode)",
        "package": "HTF",
        "partial": "Test With Args'",
        "signature": "[String]-\u003et-\u003eIO(IO(),ExitCode)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-TestManager.html#v:runTestWithConfig",
      "description": {
        "fct-descr": "\u003cp\u003eRuns something testable with the given \u003ccode\u003e\u003ca\u003eTestConfig\u003c/a\u003e\u003c/code\u003e.\n The result is \u003ccode\u003e\u003ca\u003eExitSuccess\u003c/a\u003e\u003c/code\u003e if all tests were executed successfully,\n \u003ccode\u003e\u003ca\u003eExitFailure\u003c/a\u003e\u003c/code\u003e otherwise. In the latter case, an error code of \u003ccode\u003e1\u003c/code\u003e indicates\n that failures but no errors occurred, otherwise the error code \u003ccode\u003e2\u003c/code\u003e is used.\n\u003c/p\u003e\u003cp\u003eA test is \u003cem\u003esuccessful\u003c/em\u003e if the test terminates and no assertion fails.\n A test is said to \u003cem\u003efail\u003c/em\u003e if an assertion fails but no other error occur.\n\u003c/p\u003e",
        "fct-module": "Test.Framework.TestManager",
        "fct-package": "HTF",
        "fct-signature": "TestConfig -\u003e t -\u003e IO ExitCode",
        "fct-source": "src/Test-Framework-TestManager.html#runTestWithConfig",
        "fct-type": "function",
        "title": "runTestWithConfig"
      },
      "index": {
        "description": "Runs something testable with the given TestConfig The result is ExitSuccess if all tests were executed successfully ExitFailure otherwise In the latter case an error code of indicates that failures but no errors occurred otherwise the error code is used test is successful if the test terminates and no assertion fails test is said to fail if an assertion fails but no other error occur",
        "hierarchy": "Test Framework TestManager",
        "module": "Test.Framework.TestManager",
        "name": "runTestWithConfig",
        "normalized": "TestConfig-\u003ea-\u003eIO ExitCode",
        "package": "HTF",
        "partial": "Test With Config",
        "signature": "TestConfig-\u003et-\u003eIO ExitCode"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-TestManager.html#v:runTestWithConfig-39-",
      "description": {
        "fct-descr": "\u003cp\u003eRuns something testable with the given \u003ccode\u003e\u003ca\u003eTestConfig\u003c/a\u003e\u003c/code\u003e. Does not\n print the overall test results but returns an \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e action for doing so.\n See \u003ccode\u003e\u003ca\u003erunTestWithConfig\u003c/a\u003e\u003c/code\u003e for a specification of the \u003ccode\u003e\u003ca\u003eExitCode\u003c/a\u003e\u003c/code\u003e result.\n\u003c/p\u003e",
        "fct-module": "Test.Framework.TestManager",
        "fct-package": "HTF",
        "fct-signature": "TestConfig -\u003e t -\u003e IO (IO (), ExitCode)",
        "fct-source": "src/Test-Framework-TestManager.html#runTestWithConfig%27",
        "fct-type": "function",
        "title": "runTestWithConfig'"
      },
      "index": {
        "description": "Runs something testable with the given TestConfig Does not print the overall test results but returns an IO action for doing so See runTestWithConfig for specification of the ExitCode result",
        "hierarchy": "Test Framework TestManager",
        "module": "Test.Framework.TestManager",
        "name": "runTestWithConfig'",
        "normalized": "TestConfig-\u003ea-\u003eIO(IO(),ExitCode)",
        "package": "HTF",
        "partial": "Test With Config'",
        "signature": "TestConfig-\u003et-\u003eIO(IO(),ExitCode)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-TestManager.html#v:runTestWithOptions",
      "description": {
        "fct-descr": "\u003cp\u003eRuns something testable with the given \u003ccode\u003e\u003ca\u003eCmdlineOptions\u003c/a\u003e\u003c/code\u003e.\n See \u003ccode\u003e\u003ca\u003erunTestWithConfig\u003c/a\u003e\u003c/code\u003e for a specification of the \u003ccode\u003e\u003ca\u003eExitCode\u003c/a\u003e\u003c/code\u003e result.\n\u003c/p\u003e",
        "fct-module": "Test.Framework.TestManager",
        "fct-package": "HTF",
        "fct-signature": "CmdlineOptions -\u003e t -\u003e IO ExitCode",
        "fct-source": "src/Test-Framework-TestManager.html#runTestWithOptions",
        "fct-type": "function",
        "title": "runTestWithOptions"
      },
      "index": {
        "description": "Runs something testable with the given CmdlineOptions See runTestWithConfig for specification of the ExitCode result",
        "hierarchy": "Test Framework TestManager",
        "module": "Test.Framework.TestManager",
        "name": "runTestWithOptions",
        "normalized": "CmdlineOptions-\u003ea-\u003eIO ExitCode",
        "package": "HTF",
        "partial": "Test With Options",
        "signature": "CmdlineOptions-\u003et-\u003eIO ExitCode"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-TestManager.html#v:runTestWithOptions-39-",
      "description": {
        "fct-descr": "\u003cp\u003eRuns something testable with the given \u003ccode\u003e\u003ca\u003eCmdlineOptions\u003c/a\u003e\u003c/code\u003e. Does not\n print the overall test results but returns an \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e action for doing so.\n See \u003ccode\u003e\u003ca\u003erunTestWithConfig\u003c/a\u003e\u003c/code\u003e for a specification of the \u003ccode\u003e\u003ca\u003eExitCode\u003c/a\u003e\u003c/code\u003e result.\n\u003c/p\u003e",
        "fct-module": "Test.Framework.TestManager",
        "fct-package": "HTF",
        "fct-signature": "CmdlineOptions -\u003e t -\u003e IO (IO (), ExitCode)",
        "fct-source": "src/Test-Framework-TestManager.html#runTestWithOptions%27",
        "fct-type": "function",
        "title": "runTestWithOptions'"
      },
      "index": {
        "description": "Runs something testable with the given CmdlineOptions Does not print the overall test results but returns an IO action for doing so See runTestWithConfig for specification of the ExitCode result",
        "hierarchy": "Test Framework TestManager",
        "module": "Test.Framework.TestManager",
        "name": "runTestWithOptions'",
        "normalized": "CmdlineOptions-\u003ea-\u003eIO(IO(),ExitCode)",
        "package": "HTF",
        "partial": "Test With Options'",
        "signature": "CmdlineOptions-\u003et-\u003eIO(IO(),ExitCode)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-TestManager.html#v:testSuiteAsTest",
      "description": {
        "fct-descr": "\u003cp\u003eTurn a \u003ccode\u003e\u003ca\u003eTestSuite\u003c/a\u003e\u003c/code\u003e into a proper \u003ccode\u003e\u003ca\u003eTest\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Test.Framework.TestManager",
        "fct-package": "HTF",
        "fct-signature": "TestSuite -\u003e Test",
        "fct-source": "src/Test-Framework-TestManager.html#testSuiteAsTest",
        "fct-type": "function",
        "title": "testSuiteAsTest"
      },
      "index": {
        "description": "Turn TestSuite into proper Test",
        "hierarchy": "Test Framework TestManager",
        "module": "Test.Framework.TestManager",
        "name": "testSuiteAsTest",
        "normalized": "TestSuite-\u003eTest",
        "package": "HTF",
        "partial": "Suite As Test",
        "signature": "TestSuite-\u003eTest"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-TestReporter.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines functions for notifying all test reporters registered about\nparticular events in the lifecycle of a test run.\n\u003c/p\u003e\u003cp\u003eFurther, it defines the standard test reporters for HTF's various output formats.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Test.Framework.TestReporter",
        "fct-package": "HTF",
        "fct-signature": "module",
        "fct-source": "src/Test-Framework-TestReporter.html",
        "fct-type": "module",
        "title": "TestReporter"
      },
      "index": {
        "description": "This module defines functions for notifying all test reporters registered about particular events in the lifecycle of test run Further it defines the standard test reporters for HTF various output formats",
        "hierarchy": "Test Framework TestReporter",
        "module": "Test.Framework.TestReporter",
        "name": "TestReporter",
        "normalized": "",
        "package": "HTF",
        "partial": "Test Reporter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-TestReporter.html#t:IsJsonOutput",
      "description": {
        "fct-module": "Test.Framework.TestReporter",
        "fct-package": "HTF",
        "fct-signature": "data",
        "fct-source": "src/Test-Framework-TestReporter.html#IsJsonOutput",
        "fct-type": "data",
        "title": "IsJsonOutput"
      },
      "index": {
        "description": "",
        "hierarchy": "Test Framework TestReporter",
        "module": "Test.Framework.TestReporter",
        "name": "IsJsonOutput",
        "normalized": "",
        "package": "HTF",
        "partial": "Is Json Output",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-TestReporter.html#t:IsParallel",
      "description": {
        "fct-module": "Test.Framework.TestReporter",
        "fct-package": "HTF",
        "fct-signature": "data",
        "fct-source": "src/Test-Framework-TestReporter.html#IsParallel",
        "fct-type": "data",
        "title": "IsParallel"
      },
      "index": {
        "description": "",
        "hierarchy": "Test Framework TestReporter",
        "module": "Test.Framework.TestReporter",
        "name": "IsParallel",
        "normalized": "",
        "package": "HTF",
        "partial": "Is Parallel",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-TestReporter.html#t:IsXmlOutput",
      "description": {
        "fct-module": "Test.Framework.TestReporter",
        "fct-package": "HTF",
        "fct-signature": "data",
        "fct-source": "src/Test-Framework-TestReporter.html#IsXmlOutput",
        "fct-type": "data",
        "title": "IsXmlOutput"
      },
      "index": {
        "description": "",
        "hierarchy": "Test Framework TestReporter",
        "module": "Test.Framework.TestReporter",
        "name": "IsXmlOutput",
        "normalized": "",
        "package": "HTF",
        "partial": "Is Xml Output",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-TestReporter.html#v:JsonOutput",
      "description": {
        "fct-module": "Test.Framework.TestReporter",
        "fct-package": "HTF",
        "fct-signature": "JsonOutput",
        "fct-source": "src/Test-Framework-TestReporter.html#IsJsonOutput",
        "fct-type": "function",
        "title": "JsonOutput"
      },
      "index": {
        "description": "",
        "hierarchy": "Test Framework TestReporter",
        "module": "Test.Framework.TestReporter",
        "name": "JsonOutput",
        "normalized": "",
        "package": "HTF",
        "partial": "Json Output",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-TestReporter.html#v:NoJsonOutput",
      "description": {
        "fct-module": "Test.Framework.TestReporter",
        "fct-package": "HTF",
        "fct-signature": "NoJsonOutput",
        "fct-source": "src/Test-Framework-TestReporter.html#IsJsonOutput",
        "fct-type": "function",
        "title": "NoJsonOutput"
      },
      "index": {
        "description": "",
        "hierarchy": "Test Framework TestReporter",
        "module": "Test.Framework.TestReporter",
        "name": "NoJsonOutput",
        "normalized": "",
        "package": "HTF",
        "partial": "No Json Output",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-TestReporter.html#v:NoXmlOutput",
      "description": {
        "fct-module": "Test.Framework.TestReporter",
        "fct-package": "HTF",
        "fct-signature": "NoXmlOutput",
        "fct-source": "src/Test-Framework-TestReporter.html#IsXmlOutput",
        "fct-type": "function",
        "title": "NoXmlOutput"
      },
      "index": {
        "description": "",
        "hierarchy": "Test Framework TestReporter",
        "module": "Test.Framework.TestReporter",
        "name": "NoXmlOutput",
        "normalized": "",
        "package": "HTF",
        "partial": "No Xml Output",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-TestReporter.html#v:NonParallel",
      "description": {
        "fct-module": "Test.Framework.TestReporter",
        "fct-package": "HTF",
        "fct-signature": "NonParallel",
        "fct-source": "src/Test-Framework-TestReporter.html#IsParallel",
        "fct-type": "function",
        "title": "NonParallel"
      },
      "index": {
        "description": "",
        "hierarchy": "Test Framework TestReporter",
        "module": "Test.Framework.TestReporter",
        "name": "NonParallel",
        "normalized": "",
        "package": "HTF",
        "partial": "Non Parallel",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-TestReporter.html#v:Parallel",
      "description": {
        "fct-module": "Test.Framework.TestReporter",
        "fct-package": "HTF",
        "fct-signature": "Parallel",
        "fct-source": "src/Test-Framework-TestReporter.html#IsParallel",
        "fct-type": "function",
        "title": "Parallel"
      },
      "index": {
        "description": "",
        "hierarchy": "Test Framework TestReporter",
        "module": "Test.Framework.TestReporter",
        "name": "Parallel",
        "normalized": "",
        "package": "HTF",
        "partial": "Parallel",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-TestReporter.html#v:XmlOutput",
      "description": {
        "fct-module": "Test.Framework.TestReporter",
        "fct-package": "HTF",
        "fct-signature": "XmlOutput",
        "fct-source": "src/Test-Framework-TestReporter.html#IsXmlOutput",
        "fct-type": "function",
        "title": "XmlOutput"
      },
      "index": {
        "description": "",
        "hierarchy": "Test Framework TestReporter",
        "module": "Test.Framework.TestReporter",
        "name": "XmlOutput",
        "normalized": "",
        "package": "HTF",
        "partial": "Xml Output",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-TestReporter.html#v:defaultTestReporters",
      "description": {
        "fct-descr": "\u003cp\u003eThe default test reporters for HTF.\n\u003c/p\u003e",
        "fct-module": "Test.Framework.TestReporter",
        "fct-package": "HTF",
        "fct-signature": "IsParallel -\u003e IsJsonOutput -\u003e IsXmlOutput -\u003e [TestReporter]",
        "fct-source": "src/Test-Framework-TestReporter.html#defaultTestReporters",
        "fct-type": "function",
        "title": "defaultTestReporters"
      },
      "index": {
        "description": "The default test reporters for HTF",
        "hierarchy": "Test Framework TestReporter",
        "module": "Test.Framework.TestReporter",
        "name": "defaultTestReporters",
        "normalized": "IsParallel-\u003eIsJsonOutput-\u003eIsXmlOutput-\u003e[TestReporter]",
        "package": "HTF",
        "partial": "Test Reporters",
        "signature": "IsParallel-\u003eIsJsonOutput-\u003eIsXmlOutput-\u003e[TestReporter]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-TestReporter.html#v:isParallelFromBool",
      "description": {
        "fct-module": "Test.Framework.TestReporter",
        "fct-package": "HTF",
        "fct-signature": "Bool -\u003e IsParallel",
        "fct-source": "src/Test-Framework-TestReporter.html#isParallelFromBool",
        "fct-type": "function",
        "title": "isParallelFromBool"
      },
      "index": {
        "description": "",
        "hierarchy": "Test Framework TestReporter",
        "module": "Test.Framework.TestReporter",
        "name": "isParallelFromBool",
        "normalized": "Bool-\u003eIsParallel",
        "package": "HTF",
        "partial": "Parallel From Bool",
        "signature": "Bool-\u003eIsParallel"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-TestReporter.html#v:reportAllTests",
      "description": {
        "fct-descr": "\u003cp\u003eInvokes \u003ccode\u003e\u003ca\u003etr_reportAllTests\u003c/a\u003e\u003c/code\u003e on all test reporters registered.\n\u003c/p\u003e",
        "fct-module": "Test.Framework.TestReporter",
        "fct-package": "HTF",
        "fct-signature": "ReportAllTests",
        "fct-source": "src/Test-Framework-TestReporter.html#reportAllTests",
        "fct-type": "function",
        "title": "reportAllTests"
      },
      "index": {
        "description": "Invokes tr reportAllTests on all test reporters registered",
        "hierarchy": "Test Framework TestReporter",
        "module": "Test.Framework.TestReporter",
        "name": "reportAllTests",
        "normalized": "",
        "package": "HTF",
        "partial": "All Tests",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-TestReporter.html#v:reportGlobalResults",
      "description": {
        "fct-descr": "\u003cp\u003eInvokes \u003ccode\u003e\u003ca\u003etr_reportGlobalResults\u003c/a\u003e\u003c/code\u003e on all test reporters registered.\n\u003c/p\u003e",
        "fct-module": "Test.Framework.TestReporter",
        "fct-package": "HTF",
        "fct-signature": "ReportGlobalResults",
        "fct-source": "src/Test-Framework-TestReporter.html#reportGlobalResults",
        "fct-type": "function",
        "title": "reportGlobalResults"
      },
      "index": {
        "description": "Invokes tr reportGlobalResults on all test reporters registered",
        "hierarchy": "Test Framework TestReporter",
        "module": "Test.Framework.TestReporter",
        "name": "reportGlobalResults",
        "normalized": "",
        "package": "HTF",
        "partial": "Global Results",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-TestReporter.html#v:reportGlobalStart",
      "description": {
        "fct-descr": "\u003cp\u003eInvokes \u003ccode\u003e\u003ca\u003etr_reportGlobalStart\u003c/a\u003e\u003c/code\u003e on all test reporters registered.\n\u003c/p\u003e",
        "fct-module": "Test.Framework.TestReporter",
        "fct-package": "HTF",
        "fct-signature": "ReportGlobalStart",
        "fct-source": "src/Test-Framework-TestReporter.html#reportGlobalStart",
        "fct-type": "function",
        "title": "reportGlobalStart"
      },
      "index": {
        "description": "Invokes tr reportGlobalStart on all test reporters registered",
        "hierarchy": "Test Framework TestReporter",
        "module": "Test.Framework.TestReporter",
        "name": "reportGlobalStart",
        "normalized": "",
        "package": "HTF",
        "partial": "Global Start",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-TestReporter.html#v:reportTestResult",
      "description": {
        "fct-descr": "\u003cp\u003eInvokes \u003ccode\u003e\u003ca\u003etr_reportTestResult\u003c/a\u003e\u003c/code\u003e on all test reporters registered.\n\u003c/p\u003e",
        "fct-module": "Test.Framework.TestReporter",
        "fct-package": "HTF",
        "fct-signature": "ReportTestResult",
        "fct-source": "src/Test-Framework-TestReporter.html#reportTestResult",
        "fct-type": "function",
        "title": "reportTestResult"
      },
      "index": {
        "description": "Invokes tr reportTestResult on all test reporters registered",
        "hierarchy": "Test Framework TestReporter",
        "module": "Test.Framework.TestReporter",
        "name": "reportTestResult",
        "normalized": "",
        "package": "HTF",
        "partial": "Test Result",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-TestReporter.html#v:reportTestStart",
      "description": {
        "fct-descr": "\u003cp\u003eInvokes \u003ccode\u003e\u003ca\u003etr_reportTestStart\u003c/a\u003e\u003c/code\u003e on all test reporters registered.\n\u003c/p\u003e",
        "fct-module": "Test.Framework.TestReporter",
        "fct-package": "HTF",
        "fct-signature": "ReportTestStart",
        "fct-source": "src/Test-Framework-TestReporter.html#reportTestStart",
        "fct-type": "function",
        "title": "reportTestStart"
      },
      "index": {
        "description": "Invokes tr reportTestStart on all test reporters registered",
        "hierarchy": "Test Framework TestReporter",
        "module": "Test.Framework.TestReporter",
        "name": "reportTestStart",
        "normalized": "",
        "package": "HTF",
        "partial": "Test Start",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-TestTypes.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines types (and small auxiliary functions)\nfor organizing tests, for configuring the execution of\ntests, and for representing and reporting their results.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Test.Framework.TestTypes",
        "fct-package": "HTF",
        "fct-signature": "module",
        "fct-source": "src/Test-Framework-TestTypes.html",
        "fct-type": "module",
        "title": "TestTypes"
      },
      "index": {
        "description": "This module defines types and small auxiliary functions for organizing tests for configuring the execution of tests and for representing and reporting their results",
        "hierarchy": "Test Framework TestTypes",
        "module": "Test.Framework.TestTypes",
        "name": "TestTypes",
        "normalized": "",
        "package": "HTF",
        "partial": "Test Types",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-TestTypes.html#t:Assertion",
      "description": {
        "fct-descr": "\u003cp\u003eAn assertion is just an \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e action.\n\u003c/p\u003e",
        "fct-module": "Test.Framework.TestTypes",
        "fct-package": "HTF",
        "fct-signature": "type",
        "fct-source": "src/Test-Framework-TestTypes.html#Assertion",
        "fct-type": "type",
        "title": "Assertion"
      },
      "index": {
        "description": "An assertion is just an IO action",
        "hierarchy": "Test Framework TestTypes",
        "module": "Test.Framework.TestTypes",
        "name": "Assertion",
        "normalized": "",
        "package": "HTF",
        "partial": "Assertion",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-TestTypes.html#t:AssertionWithTestOptions",
      "description": {
        "fct-descr": "\u003cp\u003eA type class for an assertion with \u003ccode\u003e\u003ca\u003eTestOptions\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Test.Framework.TestTypes",
        "fct-package": "HTF",
        "fct-signature": "class",
        "fct-source": "src/Test-Framework-TestTypes.html#AssertionWithTestOptions",
        "fct-type": "class",
        "title": "AssertionWithTestOptions"
      },
      "index": {
        "description": "type class for an assertion with TestOptions",
        "hierarchy": "Test Framework TestTypes",
        "module": "Test.Framework.TestTypes",
        "name": "AssertionWithTestOptions",
        "normalized": "",
        "package": "HTF",
        "partial": "Assertion With Test Options",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-TestTypes.html#t:CallStack",
      "description": {
        "fct-descr": "\u003cp\u003eA type for call-stacks\n\u003c/p\u003e",
        "fct-module": "Test.Framework.TestTypes",
        "fct-package": "HTF",
        "fct-signature": "type",
        "fct-source": "src/Test-Framework-TestTypes.html#CallStack",
        "fct-type": "type",
        "title": "CallStack"
      },
      "index": {
        "description": "type for call-stacks",
        "hierarchy": "Test Framework TestTypes",
        "module": "Test.Framework.TestTypes",
        "name": "CallStack",
        "normalized": "",
        "package": "HTF",
        "partial": "Call Stack",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-TestTypes.html#t:FlatTest",
      "description": {
        "fct-descr": "\u003cp\u003eFlattened representation of tests.\n\u003c/p\u003e",
        "fct-module": "Test.Framework.TestTypes",
        "fct-package": "HTF",
        "fct-signature": "type",
        "fct-source": "src/Test-Framework-TestTypes.html#FlatTest",
        "fct-type": "type",
        "title": "FlatTest"
      },
      "index": {
        "description": "Flattened representation of tests",
        "hierarchy": "Test Framework TestTypes",
        "module": "Test.Framework.TestTypes",
        "name": "FlatTest",
        "normalized": "",
        "package": "HTF",
        "partial": "Flat Test",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-TestTypes.html#t:FlatTestResult",
      "description": {
        "fct-descr": "\u003cp\u003eThe result of running a \u003ccode\u003e\u003ca\u003eFlatTest\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Test.Framework.TestTypes",
        "fct-package": "HTF",
        "fct-signature": "type",
        "fct-source": "src/Test-Framework-TestTypes.html#FlatTestResult",
        "fct-type": "type",
        "title": "FlatTestResult"
      },
      "index": {
        "description": "The result of running FlatTest",
        "hierarchy": "Test Framework TestTypes",
        "module": "Test.Framework.TestTypes",
        "name": "FlatTestResult",
        "normalized": "",
        "package": "HTF",
        "partial": "Flat Test Result",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-TestTypes.html#t:GenFlatTest",
      "description": {
        "fct-descr": "\u003cp\u003eGeneric type for flattened tests and their results.\n\u003c/p\u003e",
        "fct-module": "Test.Framework.TestTypes",
        "fct-package": "HTF",
        "fct-signature": "data",
        "fct-source": "src/Test-Framework-TestTypes.html#GenFlatTest",
        "fct-type": "data",
        "title": "GenFlatTest"
      },
      "index": {
        "description": "Generic type for flattened tests and their results",
        "hierarchy": "Test Framework TestTypes",
        "module": "Test.Framework.TestTypes",
        "name": "GenFlatTest",
        "normalized": "",
        "package": "HTF",
        "partial": "Gen Flat Test",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-TestTypes.html#t:Milliseconds",
      "description": {
        "fct-descr": "\u003cp\u003eA type synonym for time in milliseconds.\n\u003c/p\u003e",
        "fct-module": "Test.Framework.TestTypes",
        "fct-package": "HTF",
        "fct-signature": "type",
        "fct-source": "src/Test-Framework-TestTypes.html#Milliseconds",
        "fct-type": "type",
        "title": "Milliseconds"
      },
      "index": {
        "description": "type synonym for time in milliseconds",
        "hierarchy": "Test Framework TestTypes",
        "module": "Test.Framework.TestTypes",
        "name": "Milliseconds",
        "normalized": "",
        "package": "HTF",
        "partial": "Milliseconds",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-TestTypes.html#t:ReportAllTests",
      "description": {
        "fct-descr": "\u003cp\u003eReports the IDs of all tests available.\n\u003c/p\u003e",
        "fct-module": "Test.Framework.TestTypes",
        "fct-package": "HTF",
        "fct-signature": "type",
        "fct-source": "src/Test-Framework-TestTypes.html#ReportAllTests",
        "fct-type": "type",
        "title": "ReportAllTests"
      },
      "index": {
        "description": "Reports the IDs of all tests available",
        "hierarchy": "Test Framework TestTypes",
        "module": "Test.Framework.TestTypes",
        "name": "ReportAllTests",
        "normalized": "",
        "package": "HTF",
        "partial": "Report All Tests",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-TestTypes.html#t:ReportGlobalResults",
      "description": {
        "fct-descr": "\u003cp\u003eReports the overall results of all tests.\n\u003c/p\u003e",
        "fct-module": "Test.Framework.TestTypes",
        "fct-package": "HTF",
        "fct-signature": "type",
        "fct-source": "src/Test-Framework-TestTypes.html#ReportGlobalResults",
        "fct-type": "type",
        "title": "ReportGlobalResults"
      },
      "index": {
        "description": "Reports the overall results of all tests",
        "hierarchy": "Test Framework TestTypes",
        "module": "Test.Framework.TestTypes",
        "name": "ReportGlobalResults",
        "normalized": "",
        "package": "HTF",
        "partial": "Report Global Results",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-TestTypes.html#t:ReportGlobalStart",
      "description": {
        "fct-descr": "\u003cp\u003eSignals that test execution is about to start.\n\u003c/p\u003e",
        "fct-module": "Test.Framework.TestTypes",
        "fct-package": "HTF",
        "fct-signature": "type",
        "fct-source": "src/Test-Framework-TestTypes.html#ReportGlobalStart",
        "fct-type": "type",
        "title": "ReportGlobalStart"
      },
      "index": {
        "description": "Signals that test execution is about to start",
        "hierarchy": "Test Framework TestTypes",
        "module": "Test.Framework.TestTypes",
        "name": "ReportGlobalStart",
        "normalized": "",
        "package": "HTF",
        "partial": "Report Global Start",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-TestTypes.html#t:ReportTestResult",
      "description": {
        "fct-descr": "\u003cp\u003eReports the result of a single test.\n\u003c/p\u003e",
        "fct-module": "Test.Framework.TestTypes",
        "fct-package": "HTF",
        "fct-signature": "type",
        "fct-source": "src/Test-Framework-TestTypes.html#ReportTestResult",
        "fct-type": "type",
        "title": "ReportTestResult"
      },
      "index": {
        "description": "Reports the result of single test",
        "hierarchy": "Test Framework TestTypes",
        "module": "Test.Framework.TestTypes",
        "name": "ReportTestResult",
        "normalized": "",
        "package": "HTF",
        "partial": "Report Test Result",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-TestTypes.html#t:ReportTestStart",
      "description": {
        "fct-descr": "\u003cp\u003eReports the start of a single test.\n\u003c/p\u003e",
        "fct-module": "Test.Framework.TestTypes",
        "fct-package": "HTF",
        "fct-signature": "type",
        "fct-source": "src/Test-Framework-TestTypes.html#ReportTestStart",
        "fct-type": "type",
        "title": "ReportTestStart"
      },
      "index": {
        "description": "Reports the start of single test",
        "hierarchy": "Test Framework TestTypes",
        "module": "Test.Framework.TestTypes",
        "name": "ReportTestStart",
        "normalized": "",
        "package": "HTF",
        "partial": "Report Test Start",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-TestTypes.html#t:RunResult",
      "description": {
        "fct-descr": "\u003cp\u003eThe result of a test run.\n\u003c/p\u003e",
        "fct-module": "Test.Framework.TestTypes",
        "fct-package": "HTF",
        "fct-signature": "data",
        "fct-source": "src/Test-Framework-TestTypes.html#RunResult",
        "fct-type": "data",
        "title": "RunResult"
      },
      "index": {
        "description": "The result of test run",
        "hierarchy": "Test Framework TestTypes",
        "module": "Test.Framework.TestTypes",
        "name": "RunResult",
        "normalized": "",
        "package": "HTF",
        "partial": "Run Result",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-TestTypes.html#t:TR",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eTR\u003c/a\u003e\u003c/code\u003e (test runner) monad.\n\u003c/p\u003e",
        "fct-module": "Test.Framework.TestTypes",
        "fct-package": "HTF",
        "fct-signature": "type",
        "fct-source": "src/Test-Framework-TestTypes.html#TR",
        "fct-type": "type",
        "title": "TR"
      },
      "index": {
        "description": "The TR test runner monad",
        "hierarchy": "Test Framework TestTypes",
        "module": "Test.Framework.TestTypes",
        "name": "TR",
        "normalized": "",
        "package": "HTF",
        "partial": "TR",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-TestTypes.html#t:Test",
      "description": {
        "fct-descr": "\u003cp\u003eAbstract type for tests and their results.\n\u003c/p\u003e",
        "fct-module": "Test.Framework.TestTypes",
        "fct-package": "HTF",
        "fct-signature": "data",
        "fct-source": "src/Test-Framework-TestTypes.html#Test",
        "fct-type": "data",
        "title": "Test"
      },
      "index": {
        "description": "Abstract type for tests and their results",
        "hierarchy": "Test Framework TestTypes",
        "module": "Test.Framework.TestTypes",
        "name": "Test",
        "normalized": "",
        "package": "HTF",
        "partial": "Test",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-TestTypes.html#t:TestConfig",
      "description": {
        "fct-descr": "\u003cp\u003eConfiguration of test execution.\n\u003c/p\u003e",
        "fct-module": "Test.Framework.TestTypes",
        "fct-package": "HTF",
        "fct-signature": "data",
        "fct-source": "src/Test-Framework-TestTypes.html#TestConfig",
        "fct-type": "data",
        "title": "TestConfig"
      },
      "index": {
        "description": "Configuration of test execution",
        "hierarchy": "Test Framework TestTypes",
        "module": "Test.Framework.TestTypes",
        "name": "TestConfig",
        "normalized": "",
        "package": "HTF",
        "partial": "Test Config",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-TestTypes.html#t:TestFilter",
      "description": {
        "fct-descr": "\u003cp\u003eA filter is a predicate on \u003ccode\u003e\u003ca\u003eFlatTest\u003c/a\u003e\u003c/code\u003e. If the predicate is \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e, the flat test is run.\n\u003c/p\u003e",
        "fct-module": "Test.Framework.TestTypes",
        "fct-package": "HTF",
        "fct-signature": "type",
        "fct-source": "src/Test-Framework-TestTypes.html#TestFilter",
        "fct-type": "type",
        "title": "TestFilter"
      },
      "index": {
        "description": "filter is predicate on FlatTest If the predicate is True the flat test is run",
        "hierarchy": "Test Framework TestTypes",
        "module": "Test.Framework.TestTypes",
        "name": "TestFilter",
        "normalized": "",
        "package": "HTF",
        "partial": "Test Filter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-TestTypes.html#t:TestID",
      "description": {
        "fct-descr": "\u003cp\u003eType for naming tests.\n\u003c/p\u003e",
        "fct-module": "Test.Framework.TestTypes",
        "fct-package": "HTF",
        "fct-signature": "type",
        "fct-source": "src/Test-Framework-TestTypes.html#TestID",
        "fct-type": "type",
        "title": "TestID"
      },
      "index": {
        "description": "Type for naming tests",
        "hierarchy": "Test Framework TestTypes",
        "module": "Test.Framework.TestTypes",
        "name": "TestID",
        "normalized": "",
        "package": "HTF",
        "partial": "Test ID",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-TestTypes.html#t:TestOptions",
      "description": {
        "fct-descr": "\u003cp\u003eGeneral options for tests\n\u003c/p\u003e",
        "fct-module": "Test.Framework.TestTypes",
        "fct-package": "HTF",
        "fct-signature": "data",
        "fct-source": "src/Test-Framework-TestTypes.html#TestOptions",
        "fct-type": "data",
        "title": "TestOptions"
      },
      "index": {
        "description": "General options for tests",
        "hierarchy": "Test Framework TestTypes",
        "module": "Test.Framework.TestTypes",
        "name": "TestOptions",
        "normalized": "",
        "package": "HTF",
        "partial": "Test Options",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-TestTypes.html#t:TestOutput",
      "description": {
        "fct-descr": "\u003cp\u003eThe destination of progress and result messages from HTF.\n\u003c/p\u003e",
        "fct-module": "Test.Framework.TestTypes",
        "fct-package": "HTF",
        "fct-signature": "data",
        "fct-source": "src/Test-Framework-TestTypes.html#TestOutput",
        "fct-type": "data",
        "title": "TestOutput"
      },
      "index": {
        "description": "The destination of progress and result messages from HTF",
        "hierarchy": "Test Framework TestTypes",
        "module": "Test.Framework.TestTypes",
        "name": "TestOutput",
        "normalized": "",
        "package": "HTF",
        "partial": "Test Output",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-TestTypes.html#t:TestPath",
      "description": {
        "fct-descr": "\u003cp\u003eA type denoting the hierarchical name of a test.\n\u003c/p\u003e",
        "fct-module": "Test.Framework.TestTypes",
        "fct-package": "HTF",
        "fct-signature": "data",
        "fct-source": "src/Test-Framework-TestTypes.html#TestPath",
        "fct-type": "data",
        "title": "TestPath"
      },
      "index": {
        "description": "type denoting the hierarchical name of test",
        "hierarchy": "Test Framework TestTypes",
        "module": "Test.Framework.TestTypes",
        "name": "TestPath",
        "normalized": "",
        "package": "HTF",
        "partial": "Test Path",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-TestTypes.html#t:TestReporter",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eTestReporter\u003c/a\u003e\u003c/code\u003e provides hooks to customize the output of HTF.\n\u003c/p\u003e",
        "fct-module": "Test.Framework.TestTypes",
        "fct-package": "HTF",
        "fct-signature": "data",
        "fct-source": "src/Test-Framework-TestTypes.html#TestReporter",
        "fct-type": "data",
        "title": "TestReporter"
      },
      "index": {
        "description": "TestReporter provides hooks to customize the output of HTF",
        "hierarchy": "Test Framework TestTypes",
        "module": "Test.Framework.TestTypes",
        "name": "TestReporter",
        "normalized": "",
        "package": "HTF",
        "partial": "Test Reporter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-TestTypes.html#t:TestResult",
      "description": {
        "fct-descr": "\u003cp\u003eThe summary result of a test.\n\u003c/p\u003e",
        "fct-module": "Test.Framework.TestTypes",
        "fct-package": "HTF",
        "fct-signature": "data",
        "fct-source": "src/Test-Framework-TestTypes.html#TestResult",
        "fct-type": "data",
        "title": "TestResult"
      },
      "index": {
        "description": "The summary result of test",
        "hierarchy": "Test Framework TestTypes",
        "module": "Test.Framework.TestTypes",
        "name": "TestResult",
        "normalized": "",
        "package": "HTF",
        "partial": "Test Result",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-TestTypes.html#t:TestSort",
      "description": {
        "fct-descr": "\u003cp\u003eType for distinguishing different sorts of tests.\n\u003c/p\u003e",
        "fct-module": "Test.Framework.TestTypes",
        "fct-package": "HTF",
        "fct-signature": "data",
        "fct-source": "src/Test-Framework-TestTypes.html#TestSort",
        "fct-type": "data",
        "title": "TestSort"
      },
      "index": {
        "description": "Type for distinguishing different sorts of tests",
        "hierarchy": "Test Framework TestTypes",
        "module": "Test.Framework.TestTypes",
        "name": "TestSort",
        "normalized": "",
        "package": "HTF",
        "partial": "Test Sort",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-TestTypes.html#t:TestState",
      "description": {
        "fct-descr": "\u003cp\u003eThe state type for the \u003ccode\u003e\u003ca\u003eTR\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
        "fct-module": "Test.Framework.TestTypes",
        "fct-package": "HTF",
        "fct-signature": "data",
        "fct-source": "src/Test-Framework-TestTypes.html#TestState",
        "fct-type": "data",
        "title": "TestState"
      },
      "index": {
        "description": "The state type for the TR monad",
        "hierarchy": "Test Framework TestTypes",
        "module": "Test.Framework.TestTypes",
        "name": "TestState",
        "normalized": "",
        "package": "HTF",
        "partial": "Test State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-TestTypes.html#t:TestSuite",
      "description": {
        "fct-descr": "\u003cp\u003eAbstract type for test suites and their results.\n\u003c/p\u003e",
        "fct-module": "Test.Framework.TestTypes",
        "fct-package": "HTF",
        "fct-signature": "data",
        "fct-source": "src/Test-Framework-TestTypes.html#TestSuite",
        "fct-type": "data",
        "title": "TestSuite"
      },
      "index": {
        "description": "Abstract type for test suites and their results",
        "hierarchy": "Test Framework TestTypes",
        "module": "Test.Framework.TestTypes",
        "name": "TestSuite",
        "normalized": "",
        "package": "HTF",
        "partial": "Test Suite",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-TestTypes.html#t:WithTestOptions",
      "description": {
        "fct-descr": "\u003cp\u003eSomething with \u003ccode\u003e\u003ca\u003eTestOptions\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Test.Framework.TestTypes",
        "fct-package": "HTF",
        "fct-signature": "data",
        "fct-source": "src/Test-Framework-TestTypes.html#WithTestOptions",
        "fct-type": "data",
        "title": "WithTestOptions"
      },
      "index": {
        "description": "Something with TestOptions",
        "hierarchy": "Test Framework TestTypes",
        "module": "Test.Framework.TestTypes",
        "name": "WithTestOptions",
        "normalized": "",
        "package": "HTF",
        "partial": "With Test Options",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-TestTypes.html#v:AnonTestSuite",
      "description": {
        "fct-module": "Test.Framework.TestTypes",
        "fct-package": "HTF",
        "fct-signature": "AnonTestSuite [Test]",
        "fct-source": "src/Test-Framework-TestTypes.html#TestSuite",
        "fct-type": "function",
        "title": "AnonTestSuite"
      },
      "index": {
        "description": "",
        "hierarchy": "Test Framework TestTypes",
        "module": "Test.Framework.TestTypes",
        "name": "AnonTestSuite",
        "normalized": "AnonTestSuite[Test]",
        "package": "HTF",
        "partial": "Anon Test Suite",
        "signature": "AnonTestSuite[Test]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-TestTypes.html#v:BaseTest",
      "description": {
        "fct-module": "Test.Framework.TestTypes",
        "fct-package": "HTF",
        "fct-signature": "BaseTest TestSort TestID (Maybe Location) TestOptions Assertion",
        "fct-source": "src/Test-Framework-TestTypes.html#Test",
        "fct-type": "function",
        "title": "BaseTest"
      },
      "index": {
        "description": "",
        "hierarchy": "Test Framework TestTypes",
        "module": "Test.Framework.TestTypes",
        "name": "BaseTest",
        "normalized": "",
        "package": "HTF",
        "partial": "Base Test",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-TestTypes.html#v:BlackBoxTest",
      "description": {
        "fct-module": "Test.Framework.TestTypes",
        "fct-package": "HTF",
        "fct-signature": "BlackBoxTest",
        "fct-source": "src/Test-Framework-TestTypes.html#TestSort",
        "fct-type": "function",
        "title": "BlackBoxTest"
      },
      "index": {
        "description": "",
        "hierarchy": "Test Framework TestTypes",
        "module": "Test.Framework.TestTypes",
        "name": "BlackBoxTest",
        "normalized": "",
        "package": "HTF",
        "partial": "Black Box Test",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-TestTypes.html#v:CompoundTest",
      "description": {
        "fct-module": "Test.Framework.TestTypes",
        "fct-package": "HTF",
        "fct-signature": "CompoundTest TestSuite",
        "fct-source": "src/Test-Framework-TestTypes.html#Test",
        "fct-type": "function",
        "title": "CompoundTest"
      },
      "index": {
        "description": "",
        "hierarchy": "Test Framework TestTypes",
        "module": "Test.Framework.TestTypes",
        "name": "CompoundTest",
        "normalized": "",
        "package": "HTF",
        "partial": "Compound Test",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-TestTypes.html#v:Error",
      "description": {
        "fct-module": "Test.Framework.TestTypes",
        "fct-package": "HTF",
        "fct-signature": "Error",
        "fct-source": "src/Test-Framework-TestTypes.html#TestResult",
        "fct-type": "function",
        "title": "Error"
      },
      "index": {
        "description": "",
        "hierarchy": "Test Framework TestTypes",
        "module": "Test.Framework.TestTypes",
        "name": "Error",
        "normalized": "",
        "package": "HTF",
        "partial": "Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-TestTypes.html#v:Fail",
      "description": {
        "fct-module": "Test.Framework.TestTypes",
        "fct-package": "HTF",
        "fct-signature": "Fail",
        "fct-source": "src/Test-Framework-TestTypes.html#TestResult",
        "fct-type": "function",
        "title": "Fail"
      },
      "index": {
        "description": "",
        "hierarchy": "Test Framework TestTypes",
        "module": "Test.Framework.TestTypes",
        "name": "Fail",
        "normalized": "",
        "package": "HTF",
        "partial": "Fail",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-TestTypes.html#v:FlatTest",
      "description": {
        "fct-module": "Test.Framework.TestTypes",
        "fct-package": "HTF",
        "fct-signature": "FlatTest",
        "fct-source": "src/Test-Framework-TestTypes.html#GenFlatTest",
        "fct-type": "function",
        "title": "FlatTest"
      },
      "index": {
        "description": "",
        "hierarchy": "Test Framework TestTypes",
        "module": "Test.Framework.TestTypes",
        "name": "FlatTest",
        "normalized": "",
        "package": "HTF",
        "partial": "Flat Test",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-TestTypes.html#v:Pass",
      "description": {
        "fct-module": "Test.Framework.TestTypes",
        "fct-package": "HTF",
        "fct-signature": "Pass",
        "fct-source": "src/Test-Framework-TestTypes.html#TestResult",
        "fct-type": "function",
        "title": "Pass"
      },
      "index": {
        "description": "",
        "hierarchy": "Test Framework TestTypes",
        "module": "Test.Framework.TestTypes",
        "name": "Pass",
        "normalized": "",
        "package": "HTF",
        "partial": "Pass",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-TestTypes.html#v:Pending",
      "description": {
        "fct-module": "Test.Framework.TestTypes",
        "fct-package": "HTF",
        "fct-signature": "Pending",
        "fct-source": "src/Test-Framework-TestTypes.html#TestResult",
        "fct-type": "function",
        "title": "Pending"
      },
      "index": {
        "description": "",
        "hierarchy": "Test Framework TestTypes",
        "module": "Test.Framework.TestTypes",
        "name": "Pending",
        "normalized": "",
        "package": "HTF",
        "partial": "Pending",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-TestTypes.html#v:QuickCheckTest",
      "description": {
        "fct-module": "Test.Framework.TestTypes",
        "fct-package": "HTF",
        "fct-signature": "QuickCheckTest",
        "fct-source": "src/Test-Framework-TestTypes.html#TestSort",
        "fct-type": "function",
        "title": "QuickCheckTest"
      },
      "index": {
        "description": "",
        "hierarchy": "Test Framework TestTypes",
        "module": "Test.Framework.TestTypes",
        "name": "QuickCheckTest",
        "normalized": "",
        "package": "HTF",
        "partial": "Quick Check Test",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-TestTypes.html#v:RunResult",
      "description": {
        "fct-module": "Test.Framework.TestTypes",
        "fct-package": "HTF",
        "fct-signature": "RunResult",
        "fct-source": "src/Test-Framework-TestTypes.html#RunResult",
        "fct-type": "function",
        "title": "RunResult"
      },
      "index": {
        "description": "",
        "hierarchy": "Test Framework TestTypes",
        "module": "Test.Framework.TestTypes",
        "name": "RunResult",
        "normalized": "",
        "package": "HTF",
        "partial": "Run Result",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-TestTypes.html#v:TestConfig",
      "description": {
        "fct-module": "Test.Framework.TestTypes",
        "fct-package": "HTF",
        "fct-signature": "TestConfig",
        "fct-source": "src/Test-Framework-TestTypes.html#TestConfig",
        "fct-type": "function",
        "title": "TestConfig"
      },
      "index": {
        "description": "",
        "hierarchy": "Test Framework TestTypes",
        "module": "Test.Framework.TestTypes",
        "name": "TestConfig",
        "normalized": "",
        "package": "HTF",
        "partial": "Test Config",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-TestTypes.html#v:TestOptions",
      "description": {
        "fct-module": "Test.Framework.TestTypes",
        "fct-package": "HTF",
        "fct-signature": "TestOptions",
        "fct-source": "src/Test-Framework-TestTypes.html#TestOptions",
        "fct-type": "function",
        "title": "TestOptions"
      },
      "index": {
        "description": "",
        "hierarchy": "Test Framework TestTypes",
        "module": "Test.Framework.TestTypes",
        "name": "TestOptions",
        "normalized": "",
        "package": "HTF",
        "partial": "Test Options",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-TestTypes.html#v:TestOutputHandle",
      "description": {
        "fct-descr": "\u003cp\u003eOutput goes to \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e, boolean flag indicates whether the handle should be closed at the end.\n\u003c/p\u003e",
        "fct-module": "Test.Framework.TestTypes",
        "fct-package": "HTF",
        "fct-signature": "TestOutputHandle Handle Bool",
        "fct-source": "src/Test-Framework-TestTypes.html#TestOutput",
        "fct-type": "function",
        "title": "TestOutputHandle"
      },
      "index": {
        "description": "Output goes to Handle boolean flag indicates whether the handle should be closed at the end",
        "hierarchy": "Test Framework TestTypes",
        "module": "Test.Framework.TestTypes",
        "name": "TestOutputHandle",
        "normalized": "",
        "package": "HTF",
        "partial": "Test Output Handle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-TestTypes.html#v:TestOutputSplitted",
      "description": {
        "fct-descr": "\u003cp\u003eOutput goes to files whose names are derived from \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e by appending a number to it. Numbering starts at zero.\n\u003c/p\u003e",
        "fct-module": "Test.Framework.TestTypes",
        "fct-package": "HTF",
        "fct-signature": "TestOutputSplitted FilePath",
        "fct-source": "src/Test-Framework-TestTypes.html#TestOutput",
        "fct-type": "function",
        "title": "TestOutputSplitted"
      },
      "index": {
        "description": "Output goes to files whose names are derived from FilePath by appending number to it Numbering starts at zero",
        "hierarchy": "Test Framework TestTypes",
        "module": "Test.Framework.TestTypes",
        "name": "TestOutputSplitted",
        "normalized": "",
        "package": "HTF",
        "partial": "Test Output Splitted",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-TestTypes.html#v:TestPathBase",
      "description": {
        "fct-module": "Test.Framework.TestTypes",
        "fct-package": "HTF",
        "fct-signature": "TestPathBase TestID",
        "fct-source": "src/Test-Framework-TestTypes.html#TestPath",
        "fct-type": "function",
        "title": "TestPathBase"
      },
      "index": {
        "description": "",
        "hierarchy": "Test Framework TestTypes",
        "module": "Test.Framework.TestTypes",
        "name": "TestPathBase",
        "normalized": "",
        "package": "HTF",
        "partial": "Test Path Base",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-TestTypes.html#v:TestPathCompound",
      "description": {
        "fct-module": "Test.Framework.TestTypes",
        "fct-package": "HTF",
        "fct-signature": "TestPathCompound (Maybe TestID) TestPath",
        "fct-source": "src/Test-Framework-TestTypes.html#TestPath",
        "fct-type": "function",
        "title": "TestPathCompound"
      },
      "index": {
        "description": "",
        "hierarchy": "Test Framework TestTypes",
        "module": "Test.Framework.TestTypes",
        "name": "TestPathCompound",
        "normalized": "",
        "package": "HTF",
        "partial": "Test Path Compound",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-TestTypes.html#v:TestReporter",
      "description": {
        "fct-module": "Test.Framework.TestTypes",
        "fct-package": "HTF",
        "fct-signature": "TestReporter",
        "fct-source": "src/Test-Framework-TestTypes.html#TestReporter",
        "fct-type": "function",
        "title": "TestReporter"
      },
      "index": {
        "description": "",
        "hierarchy": "Test Framework TestTypes",
        "module": "Test.Framework.TestTypes",
        "name": "TestReporter",
        "normalized": "",
        "package": "HTF",
        "partial": "Test Reporter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-TestTypes.html#v:TestState",
      "description": {
        "fct-module": "Test.Framework.TestTypes",
        "fct-package": "HTF",
        "fct-signature": "TestState",
        "fct-source": "src/Test-Framework-TestTypes.html#TestState",
        "fct-type": "function",
        "title": "TestState"
      },
      "index": {
        "description": "",
        "hierarchy": "Test Framework TestTypes",
        "module": "Test.Framework.TestTypes",
        "name": "TestState",
        "normalized": "",
        "package": "HTF",
        "partial": "Test State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-TestTypes.html#v:TestSuite",
      "description": {
        "fct-module": "Test.Framework.TestTypes",
        "fct-package": "HTF",
        "fct-signature": "TestSuite TestID [Test]",
        "fct-source": "src/Test-Framework-TestTypes.html#TestSuite",
        "fct-type": "function",
        "title": "TestSuite"
      },
      "index": {
        "description": "",
        "hierarchy": "Test Framework TestTypes",
        "module": "Test.Framework.TestTypes",
        "name": "TestSuite",
        "normalized": "TestSuite TestID[Test]",
        "package": "HTF",
        "partial": "Test Suite",
        "signature": "TestSuite TestID[Test]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-TestTypes.html#v:UnitTest",
      "description": {
        "fct-module": "Test.Framework.TestTypes",
        "fct-package": "HTF",
        "fct-signature": "UnitTest",
        "fct-source": "src/Test-Framework-TestTypes.html#TestSort",
        "fct-type": "function",
        "title": "UnitTest"
      },
      "index": {
        "description": "",
        "hierarchy": "Test Framework TestTypes",
        "module": "Test.Framework.TestTypes",
        "name": "UnitTest",
        "normalized": "",
        "package": "HTF",
        "partial": "Unit Test",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-TestTypes.html#v:WithTestOptions",
      "description": {
        "fct-module": "Test.Framework.TestTypes",
        "fct-package": "HTF",
        "fct-signature": "WithTestOptions",
        "fct-source": "src/Test-Framework-TestTypes.html#WithTestOptions",
        "fct-type": "function",
        "title": "WithTestOptions"
      },
      "index": {
        "description": "",
        "hierarchy": "Test Framework TestTypes",
        "module": "Test.Framework.TestTypes",
        "name": "WithTestOptions",
        "normalized": "",
        "package": "HTF",
        "partial": "With Test Options",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-TestTypes.html#v:assertion",
      "description": {
        "fct-module": "Test.Framework.TestTypes",
        "fct-package": "HTF",
        "fct-signature": "a -\u003e Assertion",
        "fct-source": "src/Test-Framework-TestTypes.html#assertion",
        "fct-type": "method",
        "title": "assertion"
      },
      "index": {
        "description": "",
        "hierarchy": "Test Framework TestTypes",
        "module": "Test.Framework.TestTypes",
        "name": "assertion",
        "normalized": "a-\u003eAssertion",
        "package": "HTF",
        "partial": "",
        "signature": "a-\u003eAssertion"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-TestTypes.html#v:attachCallStack",
      "description": {
        "fct-module": "Test.Framework.TestTypes",
        "fct-package": "HTF",
        "fct-signature": "ColorString -\u003e CallStack -\u003e ColorString",
        "fct-source": "src/Test-Framework-TestTypes.html#attachCallStack",
        "fct-type": "function",
        "title": "attachCallStack"
      },
      "index": {
        "description": "",
        "hierarchy": "Test Framework TestTypes",
        "module": "Test.Framework.TestTypes",
        "name": "attachCallStack",
        "normalized": "ColorString-\u003eCallStack-\u003eColorString",
        "package": "HTF",
        "partial": "Call Stack",
        "signature": "ColorString-\u003eCallStack-\u003eColorString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-TestTypes.html#v:defaultTestOptions",
      "description": {
        "fct-descr": "\u003cp\u003eThe default \u003ccode\u003e\u003ca\u003eTestOptions\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Test.Framework.TestTypes",
        "fct-package": "HTF",
        "fct-signature": "TestOptions",
        "fct-source": "src/Test-Framework-TestTypes.html#defaultTestOptions",
        "fct-type": "function",
        "title": "defaultTestOptions"
      },
      "index": {
        "description": "The default TestOptions",
        "hierarchy": "Test Framework TestTypes",
        "module": "Test.Framework.TestTypes",
        "name": "defaultTestOptions",
        "normalized": "",
        "package": "HTF",
        "partial": "Test Options",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-TestTypes.html#v:emptyTestReporter",
      "description": {
        "fct-module": "Test.Framework.TestTypes",
        "fct-package": "HTF",
        "fct-signature": "String -\u003e TestReporter",
        "fct-source": "src/Test-Framework-TestTypes.html#emptyTestReporter",
        "fct-type": "function",
        "title": "emptyTestReporter"
      },
      "index": {
        "description": "",
        "hierarchy": "Test Framework TestTypes",
        "module": "Test.Framework.TestTypes",
        "name": "emptyTestReporter",
        "normalized": "String-\u003eTestReporter",
        "package": "HTF",
        "partial": "Test Reporter",
        "signature": "String-\u003eTestReporter"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-TestTypes.html#v:finalName",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the final name of a \u003ccode\u003e\u003ca\u003eTestPath\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Test.Framework.TestTypes",
        "fct-package": "HTF",
        "fct-signature": "TestPath -\u003e String",
        "fct-source": "src/Test-Framework-TestTypes.html#finalName",
        "fct-type": "function",
        "title": "finalName"
      },
      "index": {
        "description": "Returns the final name of TestPath",
        "hierarchy": "Test Framework TestTypes",
        "module": "Test.Framework.TestTypes",
        "name": "finalName",
        "normalized": "TestPath-\u003eString",
        "package": "HTF",
        "partial": "Name",
        "signature": "TestPath-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-TestTypes.html#v:flatName",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a string representation from a \u003ccode\u003e\u003ca\u003eTestPath\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Test.Framework.TestTypes",
        "fct-package": "HTF",
        "fct-signature": "TestPath -\u003e String",
        "fct-source": "src/Test-Framework-TestTypes.html#flatName",
        "fct-type": "function",
        "title": "flatName"
      },
      "index": {
        "description": "Creates string representation from TestPath",
        "hierarchy": "Test Framework TestTypes",
        "module": "Test.Framework.TestTypes",
        "name": "flatName",
        "normalized": "TestPath-\u003eString",
        "package": "HTF",
        "partial": "Name",
        "signature": "TestPath-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-TestTypes.html#v:ft_location",
      "description": {
        "fct-descr": "\u003cp\u003ePlace of definition.\n\u003c/p\u003e",
        "fct-module": "Test.Framework.TestTypes",
        "fct-package": "HTF",
        "fct-signature": "Maybe Location",
        "fct-source": "src/Test-Framework-TestTypes.html#GenFlatTest",
        "fct-type": "function",
        "title": "ft_location"
      },
      "index": {
        "description": "Place of definition",
        "hierarchy": "Test Framework TestTypes",
        "module": "Test.Framework.TestTypes",
        "name": "ft_location",
        "normalized": "",
        "package": "HTF",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-TestTypes.html#v:ft_path",
      "description": {
        "fct-descr": "\u003cp\u003eHierarchival path.\n\u003c/p\u003e",
        "fct-module": "Test.Framework.TestTypes",
        "fct-package": "HTF",
        "fct-signature": "TestPath",
        "fct-source": "src/Test-Framework-TestTypes.html#GenFlatTest",
        "fct-type": "function",
        "title": "ft_path"
      },
      "index": {
        "description": "Hierarchival path",
        "hierarchy": "Test Framework TestTypes",
        "module": "Test.Framework.TestTypes",
        "name": "ft_path",
        "normalized": "",
        "package": "HTF",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-TestTypes.html#v:ft_payload",
      "description": {
        "fct-descr": "\u003cp\u003eA generic payload.\n\u003c/p\u003e",
        "fct-module": "Test.Framework.TestTypes",
        "fct-package": "HTF",
        "fct-signature": "a",
        "fct-source": "src/Test-Framework-TestTypes.html#GenFlatTest",
        "fct-type": "function",
        "title": "ft_payload"
      },
      "index": {
        "description": "generic payload",
        "hierarchy": "Test Framework TestTypes",
        "module": "Test.Framework.TestTypes",
        "name": "ft_payload",
        "normalized": "",
        "package": "HTF",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-TestTypes.html#v:ft_sort",
      "description": {
        "fct-descr": "\u003cp\u003eThe sort of the test.\n\u003c/p\u003e",
        "fct-module": "Test.Framework.TestTypes",
        "fct-package": "HTF",
        "fct-signature": "TestSort",
        "fct-source": "src/Test-Framework-TestTypes.html#GenFlatTest",
        "fct-type": "function",
        "title": "ft_sort"
      },
      "index": {
        "description": "The sort of the test",
        "hierarchy": "Test Framework TestTypes",
        "module": "Test.Framework.TestTypes",
        "name": "ft_sort",
        "normalized": "",
        "package": "HTF",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-TestTypes.html#v:initTestState",
      "description": {
        "fct-descr": "\u003cp\u003eThe initial test state.\n\u003c/p\u003e",
        "fct-module": "Test.Framework.TestTypes",
        "fct-package": "HTF",
        "fct-signature": "TestState",
        "fct-source": "src/Test-Framework-TestTypes.html#initTestState",
        "fct-type": "function",
        "title": "initTestState"
      },
      "index": {
        "description": "The initial test state",
        "hierarchy": "Test Framework TestTypes",
        "module": "Test.Framework.TestTypes",
        "name": "initTestState",
        "normalized": "",
        "package": "HTF",
        "partial": "Test State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-TestTypes.html#v:prefixName",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the name of the prefix of a test path. The prefix is everything except the\n   last element.\n\u003c/p\u003e",
        "fct-module": "Test.Framework.TestTypes",
        "fct-package": "HTF",
        "fct-signature": "TestPath -\u003e String",
        "fct-source": "src/Test-Framework-TestTypes.html#prefixName",
        "fct-type": "function",
        "title": "prefixName"
      },
      "index": {
        "description": "Returns the name of the prefix of test path The prefix is everything except the last element",
        "hierarchy": "Test Framework TestTypes",
        "module": "Test.Framework.TestTypes",
        "name": "prefixName",
        "normalized": "TestPath-\u003eString",
        "package": "HTF",
        "partial": "Name",
        "signature": "TestPath-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-TestTypes.html#v:rr_callers",
      "description": {
        "fct-descr": "\u003cp\u003eInformation about the callers of the location where the test failed\n\u003c/p\u003e",
        "fct-module": "Test.Framework.TestTypes",
        "fct-package": "HTF",
        "fct-signature": "CallStack",
        "fct-source": "src/Test-Framework-TestTypes.html#RunResult",
        "fct-type": "function",
        "title": "rr_callers"
      },
      "index": {
        "description": "Information about the callers of the location where the test failed",
        "hierarchy": "Test Framework TestTypes",
        "module": "Test.Framework.TestTypes",
        "name": "rr_callers",
        "normalized": "",
        "package": "HTF",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-TestTypes.html#v:rr_location",
      "description": {
        "fct-descr": "\u003cp\u003eThe location where the test failed (if applicable).\n\u003c/p\u003e",
        "fct-module": "Test.Framework.TestTypes",
        "fct-package": "HTF",
        "fct-signature": "Maybe Location",
        "fct-source": "src/Test-Framework-TestTypes.html#RunResult",
        "fct-type": "function",
        "title": "rr_location"
      },
      "index": {
        "description": "The location where the test failed if applicable",
        "hierarchy": "Test Framework TestTypes",
        "module": "Test.Framework.TestTypes",
        "name": "rr_location",
        "normalized": "",
        "package": "HTF",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-TestTypes.html#v:rr_message",
      "description": {
        "fct-descr": "\u003cp\u003eA message describing the result.\n\u003c/p\u003e",
        "fct-module": "Test.Framework.TestTypes",
        "fct-package": "HTF",
        "fct-signature": "ColorString",
        "fct-source": "src/Test-Framework-TestTypes.html#RunResult",
        "fct-type": "function",
        "title": "rr_message"
      },
      "index": {
        "description": "message describing the result",
        "hierarchy": "Test Framework TestTypes",
        "module": "Test.Framework.TestTypes",
        "name": "rr_message",
        "normalized": "",
        "package": "HTF",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-TestTypes.html#v:rr_result",
      "description": {
        "fct-descr": "\u003cp\u003eThe summary result of the test.\n\u003c/p\u003e",
        "fct-module": "Test.Framework.TestTypes",
        "fct-package": "HTF",
        "fct-signature": "TestResult",
        "fct-source": "src/Test-Framework-TestTypes.html#RunResult",
        "fct-type": "function",
        "title": "rr_result"
      },
      "index": {
        "description": "The summary result of the test",
        "hierarchy": "Test Framework TestTypes",
        "module": "Test.Framework.TestTypes",
        "name": "rr_result",
        "normalized": "",
        "package": "HTF",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-TestTypes.html#v:rr_wallTimeMs",
      "description": {
        "fct-descr": "\u003cp\u003eExecution time in milliseconds.\n\u003c/p\u003e",
        "fct-module": "Test.Framework.TestTypes",
        "fct-package": "HTF",
        "fct-signature": "Milliseconds",
        "fct-source": "src/Test-Framework-TestTypes.html#RunResult",
        "fct-type": "function",
        "title": "rr_wallTimeMs"
      },
      "index": {
        "description": "Execution time in milliseconds",
        "hierarchy": "Test Framework TestTypes",
        "module": "Test.Framework.TestTypes",
        "name": "rr_wallTimeMs",
        "normalized": "",
        "package": "HTF",
        "partial": "Time Ms",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-TestTypes.html#v:tc_filter",
      "description": {
        "fct-descr": "\u003cp\u003eFilter for the tests to run.\n\u003c/p\u003e",
        "fct-module": "Test.Framework.TestTypes",
        "fct-package": "HTF",
        "fct-signature": "TestFilter",
        "fct-source": "src/Test-Framework-TestTypes.html#TestConfig",
        "fct-type": "function",
        "title": "tc_filter"
      },
      "index": {
        "description": "Filter for the tests to run",
        "hierarchy": "Test Framework TestTypes",
        "module": "Test.Framework.TestTypes",
        "name": "tc_filter",
        "normalized": "",
        "package": "HTF",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-TestTypes.html#v:tc_output",
      "description": {
        "fct-descr": "\u003cp\u003eOutput destination of progress and result messages.\n\u003c/p\u003e",
        "fct-module": "Test.Framework.TestTypes",
        "fct-package": "HTF",
        "fct-signature": "TestOutput",
        "fct-source": "src/Test-Framework-TestTypes.html#TestConfig",
        "fct-type": "function",
        "title": "tc_output"
      },
      "index": {
        "description": "Output destination of progress and result messages",
        "hierarchy": "Test Framework TestTypes",
        "module": "Test.Framework.TestTypes",
        "name": "tc_output",
        "normalized": "",
        "package": "HTF",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-TestTypes.html#v:tc_outputXml",
      "description": {
        "fct-descr": "\u003cp\u003eOutput destination of XML result summary\n\u003c/p\u003e",
        "fct-module": "Test.Framework.TestTypes",
        "fct-package": "HTF",
        "fct-signature": "Maybe FilePath",
        "fct-source": "src/Test-Framework-TestTypes.html#TestConfig",
        "fct-type": "function",
        "title": "tc_outputXml"
      },
      "index": {
        "description": "Output destination of XML result summary",
        "hierarchy": "Test Framework TestTypes",
        "module": "Test.Framework.TestTypes",
        "name": "tc_outputXml",
        "normalized": "",
        "package": "HTF",
        "partial": "Xml",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-TestTypes.html#v:tc_quiet",
      "description": {
        "fct-descr": "\u003cp\u003eIf set, displays messages only for failed tests.\n\u003c/p\u003e",
        "fct-module": "Test.Framework.TestTypes",
        "fct-package": "HTF",
        "fct-signature": "Bool",
        "fct-source": "src/Test-Framework-TestTypes.html#TestConfig",
        "fct-type": "function",
        "title": "tc_quiet"
      },
      "index": {
        "description": "If set displays messages only for failed tests",
        "hierarchy": "Test Framework TestTypes",
        "module": "Test.Framework.TestTypes",
        "name": "tc_quiet",
        "normalized": "",
        "package": "HTF",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-TestTypes.html#v:tc_reporters",
      "description": {
        "fct-descr": "\u003cp\u003eTest reporters to use.\n\u003c/p\u003e",
        "fct-module": "Test.Framework.TestTypes",
        "fct-package": "HTF",
        "fct-signature": "[TestReporter]",
        "fct-source": "src/Test-Framework-TestTypes.html#TestConfig",
        "fct-type": "function",
        "title": "tc_reporters"
      },
      "index": {
        "description": "Test reporters to use",
        "hierarchy": "Test Framework TestTypes",
        "module": "Test.Framework.TestTypes",
        "name": "tc_reporters",
        "normalized": "[TestReporter]",
        "package": "HTF",
        "partial": "",
        "signature": "[TestReporter]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-TestTypes.html#v:tc_shuffle",
      "description": {
        "fct-descr": "\u003cp\u003eShuffle tests before parallel execution\n\u003c/p\u003e",
        "fct-module": "Test.Framework.TestTypes",
        "fct-package": "HTF",
        "fct-signature": "Bool",
        "fct-source": "src/Test-Framework-TestTypes.html#TestConfig",
        "fct-type": "function",
        "title": "tc_shuffle"
      },
      "index": {
        "description": "Shuffle tests before parallel execution",
        "hierarchy": "Test Framework TestTypes",
        "module": "Test.Framework.TestTypes",
        "name": "tc_shuffle",
        "normalized": "",
        "package": "HTF",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-TestTypes.html#v:tc_threads",
      "description": {
        "fct-descr": "\u003cp\u003eUse \u003ccode\u003eJust i\u003c/code\u003e for parallel execution with \u003ccode\u003ei\u003c/code\u003e threads, \u003ccode\u003eNothing\u003c/code\u003e for sequential execution.\n\u003c/p\u003e",
        "fct-module": "Test.Framework.TestTypes",
        "fct-package": "HTF",
        "fct-signature": "Maybe Int",
        "fct-source": "src/Test-Framework-TestTypes.html#TestConfig",
        "fct-type": "function",
        "title": "tc_threads"
      },
      "index": {
        "description": "Use Just for parallel execution with threads Nothing for sequential execution",
        "hierarchy": "Test Framework TestTypes",
        "module": "Test.Framework.TestTypes",
        "name": "tc_threads",
        "normalized": "",
        "package": "HTF",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-TestTypes.html#v:tc_useColors",
      "description": {
        "fct-descr": "\u003cp\u003eWhether to use colored output\n\u003c/p\u003e",
        "fct-module": "Test.Framework.TestTypes",
        "fct-package": "HTF",
        "fct-signature": "Bool",
        "fct-source": "src/Test-Framework-TestTypes.html#TestConfig",
        "fct-type": "function",
        "title": "tc_useColors"
      },
      "index": {
        "description": "Whether to use colored output",
        "hierarchy": "Test Framework TestTypes",
        "module": "Test.Framework.TestTypes",
        "name": "tc_useColors",
        "normalized": "",
        "package": "HTF",
        "partial": "Colors",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-TestTypes.html#v:testOptions",
      "description": {
        "fct-module": "Test.Framework.TestTypes",
        "fct-package": "HTF",
        "fct-signature": "a -\u003e TestOptions",
        "fct-source": "src/Test-Framework-TestTypes.html#testOptions",
        "fct-type": "method",
        "title": "testOptions"
      },
      "index": {
        "description": "",
        "hierarchy": "Test Framework TestTypes",
        "module": "Test.Framework.TestTypes",
        "name": "testOptions",
        "normalized": "a-\u003eTestOptions",
        "package": "HTF",
        "partial": "Options",
        "signature": "a-\u003eTestOptions"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-TestTypes.html#v:testPathToList",
      "description": {
        "fct-descr": "\u003cp\u003eSplits a \u003ccode\u003e\u003ca\u003eTestPath\u003c/a\u003e\u003c/code\u003e into a list of test identifiers.\n\u003c/p\u003e",
        "fct-module": "Test.Framework.TestTypes",
        "fct-package": "HTF",
        "fct-signature": "TestPath -\u003e [Maybe TestID]",
        "fct-source": "src/Test-Framework-TestTypes.html#testPathToList",
        "fct-type": "function",
        "title": "testPathToList"
      },
      "index": {
        "description": "Splits TestPath into list of test identifiers",
        "hierarchy": "Test Framework TestTypes",
        "module": "Test.Framework.TestTypes",
        "name": "testPathToList",
        "normalized": "TestPath-\u003e[Maybe TestID]",
        "package": "HTF",
        "partial": "Path To List",
        "signature": "TestPath-\u003e[Maybe TestID]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-TestTypes.html#v:to_parallel",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Test.Framework.TestTypes",
        "fct-package": "HTF",
        "fct-signature": "Bool",
        "fct-source": "src/Test-Framework-TestTypes.html#TestOptions",
        "fct-type": "function",
        "title": "to_parallel"
      },
      "index": {
        "description": "",
        "hierarchy": "Test Framework TestTypes",
        "module": "Test.Framework.TestTypes",
        "name": "to_parallel",
        "normalized": "",
        "package": "HTF",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-TestTypes.html#v:tr_id",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Test.Framework.TestTypes",
        "fct-package": "HTF",
        "fct-signature": "String",
        "fct-source": "src/Test-Framework-TestTypes.html#TestReporter",
        "fct-type": "function",
        "title": "tr_id"
      },
      "index": {
        "description": "",
        "hierarchy": "Test Framework TestTypes",
        "module": "Test.Framework.TestTypes",
        "name": "tr_id",
        "normalized": "",
        "package": "HTF",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-TestTypes.html#v:tr_reportAllTests",
      "description": {
        "fct-descr": "\u003cp\u003eCalled to report the IDs of all tests available.\n\u003c/p\u003e",
        "fct-module": "Test.Framework.TestTypes",
        "fct-package": "HTF",
        "fct-signature": "ReportAllTests",
        "fct-source": "src/Test-Framework-TestTypes.html#TestReporter",
        "fct-type": "function",
        "title": "tr_reportAllTests"
      },
      "index": {
        "description": "Called to report the IDs of all tests available",
        "hierarchy": "Test Framework TestTypes",
        "module": "Test.Framework.TestTypes",
        "name": "tr_reportAllTests",
        "normalized": "",
        "package": "HTF",
        "partial": "All Tests",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-TestTypes.html#v:tr_reportGlobalResults",
      "description": {
        "fct-descr": "\u003cp\u003eCalled to report the overall results of all tests.\n\u003c/p\u003e",
        "fct-module": "Test.Framework.TestTypes",
        "fct-package": "HTF",
        "fct-signature": "ReportGlobalResults",
        "fct-source": "src/Test-Framework-TestTypes.html#TestReporter",
        "fct-type": "function",
        "title": "tr_reportGlobalResults"
      },
      "index": {
        "description": "Called to report the overall results of all tests",
        "hierarchy": "Test Framework TestTypes",
        "module": "Test.Framework.TestTypes",
        "name": "tr_reportGlobalResults",
        "normalized": "",
        "package": "HTF",
        "partial": "Global Results",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-TestTypes.html#v:tr_reportGlobalStart",
      "description": {
        "fct-descr": "\u003cp\u003eCalled to report the start of test execution.\n\u003c/p\u003e",
        "fct-module": "Test.Framework.TestTypes",
        "fct-package": "HTF",
        "fct-signature": "ReportGlobalStart",
        "fct-source": "src/Test-Framework-TestTypes.html#TestReporter",
        "fct-type": "function",
        "title": "tr_reportGlobalStart"
      },
      "index": {
        "description": "Called to report the start of test execution",
        "hierarchy": "Test Framework TestTypes",
        "module": "Test.Framework.TestTypes",
        "name": "tr_reportGlobalStart",
        "normalized": "",
        "package": "HTF",
        "partial": "Global Start",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-TestTypes.html#v:tr_reportTestResult",
      "description": {
        "fct-descr": "\u003cp\u003eCalled to report the result of a single test.\n\u003c/p\u003e",
        "fct-module": "Test.Framework.TestTypes",
        "fct-package": "HTF",
        "fct-signature": "ReportTestResult",
        "fct-source": "src/Test-Framework-TestTypes.html#TestReporter",
        "fct-type": "function",
        "title": "tr_reportTestResult"
      },
      "index": {
        "description": "Called to report the result of single test",
        "hierarchy": "Test Framework TestTypes",
        "module": "Test.Framework.TestTypes",
        "name": "tr_reportTestResult",
        "normalized": "",
        "package": "HTF",
        "partial": "Test Result",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-TestTypes.html#v:tr_reportTestStart",
      "description": {
        "fct-descr": "\u003cp\u003eCalled to report the start of a single test.\n\u003c/p\u003e",
        "fct-module": "Test.Framework.TestTypes",
        "fct-package": "HTF",
        "fct-signature": "ReportTestStart",
        "fct-source": "src/Test-Framework-TestTypes.html#TestReporter",
        "fct-type": "function",
        "title": "tr_reportTestStart"
      },
      "index": {
        "description": "Called to report the start of single test",
        "hierarchy": "Test Framework TestTypes",
        "module": "Test.Framework.TestTypes",
        "name": "tr_reportTestStart",
        "normalized": "",
        "package": "HTF",
        "partial": "Test Start",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-TestTypes.html#v:ts_index",
      "description": {
        "fct-descr": "\u003cp\u003eCurrent index for splitted output.\n\u003c/p\u003e",
        "fct-module": "Test.Framework.TestTypes",
        "fct-package": "HTF",
        "fct-signature": "Int",
        "fct-source": "src/Test-Framework-TestTypes.html#TestState",
        "fct-type": "function",
        "title": "ts_index"
      },
      "index": {
        "description": "Current index for splitted output",
        "hierarchy": "Test Framework TestTypes",
        "module": "Test.Framework.TestTypes",
        "name": "ts_index",
        "normalized": "",
        "package": "HTF",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-TestTypes.html#v:ts_results",
      "description": {
        "fct-descr": "\u003cp\u003eResults collected so far.\n\u003c/p\u003e",
        "fct-module": "Test.Framework.TestTypes",
        "fct-package": "HTF",
        "fct-signature": "[FlatTestResult]",
        "fct-source": "src/Test-Framework-TestTypes.html#TestState",
        "fct-type": "function",
        "title": "ts_results"
      },
      "index": {
        "description": "Results collected so far",
        "hierarchy": "Test Framework TestTypes",
        "module": "Test.Framework.TestTypes",
        "name": "ts_results",
        "normalized": "[FlatTestResult]",
        "package": "HTF",
        "partial": "",
        "signature": "[FlatTestResult]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-TestTypes.html#v:withOptions",
      "description": {
        "fct-descr": "\u003cp\u003eShortcut for constructing a \u003ccode\u003e\u003ca\u003eWithTestOptions\u003c/a\u003e\u003c/code\u003e value.\n\u003c/p\u003e",
        "fct-module": "Test.Framework.TestTypes",
        "fct-package": "HTF",
        "fct-signature": "(TestOptions -\u003e TestOptions) -\u003e a -\u003e WithTestOptions a",
        "fct-source": "src/Test-Framework-TestTypes.html#withOptions",
        "fct-type": "function",
        "title": "withOptions"
      },
      "index": {
        "description": "Shortcut for constructing WithTestOptions value",
        "hierarchy": "Test Framework TestTypes",
        "module": "Test.Framework.TestTypes",
        "name": "withOptions",
        "normalized": "(TestOptions-\u003eTestOptions)-\u003ea-\u003eWithTestOptions a",
        "package": "HTF",
        "partial": "Options",
        "signature": "(TestOptions-\u003eTestOptions)-\u003ea-\u003eWithTestOptions a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-TestTypes.html#v:wto_options",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Test.Framework.TestTypes",
        "fct-package": "HTF",
        "fct-signature": "TestOptions",
        "fct-source": "src/Test-Framework-TestTypes.html#WithTestOptions",
        "fct-type": "function",
        "title": "wto_options"
      },
      "index": {
        "description": "",
        "hierarchy": "Test Framework TestTypes",
        "module": "Test.Framework.TestTypes",
        "name": "wto_options",
        "normalized": "",
        "package": "HTF",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-TestTypes.html#v:wto_payload",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Test.Framework.TestTypes",
        "fct-package": "HTF",
        "fct-signature": "a",
        "fct-source": "src/Test-Framework-TestTypes.html#WithTestOptions",
        "fct-type": "function",
        "title": "wto_payload"
      },
      "index": {
        "description": "",
        "hierarchy": "Test Framework TestTypes",
        "module": "Test.Framework.TestTypes",
        "name": "wto_payload",
        "normalized": "",
        "package": "HTF",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-ThreadPool.html#",
      "description": {
        "fct-module": "Test.Framework.ThreadPool",
        "fct-package": "HTF",
        "fct-signature": "module",
        "fct-source": "src/Test-Framework-ThreadPool.html",
        "fct-type": "module",
        "title": "ThreadPool"
      },
      "index": {
        "description": "",
        "hierarchy": "Test Framework ThreadPool",
        "module": "Test.Framework.ThreadPool",
        "name": "ThreadPool",
        "normalized": "",
        "package": "HTF",
        "partial": "Thread Pool",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-ThreadPool.html#t:ThreadPool",
      "description": {
        "fct-module": "Test.Framework.ThreadPool",
        "fct-package": "HTF",
        "fct-signature": "data",
        "fct-source": "src/Test-Framework-ThreadPool.html#ThreadPool",
        "fct-type": "data",
        "title": "ThreadPool"
      },
      "index": {
        "description": "",
        "hierarchy": "Test Framework ThreadPool",
        "module": "Test.Framework.ThreadPool",
        "name": "ThreadPool",
        "normalized": "",
        "package": "HTF",
        "partial": "Thread Pool",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-ThreadPool.html#t:ThreadPoolEntry",
      "description": {
        "fct-module": "Test.Framework.ThreadPool",
        "fct-package": "HTF",
        "fct-signature": "type",
        "fct-source": "src/Test-Framework-ThreadPool.html#ThreadPoolEntry",
        "fct-type": "type",
        "title": "ThreadPoolEntry"
      },
      "index": {
        "description": "",
        "hierarchy": "Test Framework ThreadPool",
        "module": "Test.Framework.ThreadPool",
        "name": "ThreadPoolEntry",
        "normalized": "",
        "package": "HTF",
        "partial": "Thread Pool Entry",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-ThreadPool.html#v:ThreadPool",
      "description": {
        "fct-module": "Test.Framework.ThreadPool",
        "fct-package": "HTF",
        "fct-signature": "ThreadPool",
        "fct-source": "src/Test-Framework-ThreadPool.html#ThreadPool",
        "fct-type": "function",
        "title": "ThreadPool"
      },
      "index": {
        "description": "",
        "hierarchy": "Test Framework ThreadPool",
        "module": "Test.Framework.ThreadPool",
        "name": "ThreadPool",
        "normalized": "",
        "package": "HTF",
        "partial": "Thread Pool",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-ThreadPool.html#v:parallelThreadPool",
      "description": {
        "fct-module": "Test.Framework.ThreadPool",
        "fct-package": "HTF",
        "fct-signature": "Int -\u003e m (ThreadPool m a b)",
        "fct-source": "src/Test-Framework-ThreadPool.html#parallelThreadPool",
        "fct-type": "function",
        "title": "parallelThreadPool"
      },
      "index": {
        "description": "",
        "hierarchy": "Test Framework ThreadPool",
        "module": "Test.Framework.ThreadPool",
        "name": "parallelThreadPool",
        "normalized": "Int-\u003ea(ThreadPool a b c)",
        "package": "HTF",
        "partial": "Thread Pool",
        "signature": "Int-\u003em(ThreadPool m a b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-ThreadPool.html#v:sequentialThreadPool",
      "description": {
        "fct-module": "Test.Framework.ThreadPool",
        "fct-package": "HTF",
        "fct-signature": "ThreadPool m a b",
        "fct-source": "src/Test-Framework-ThreadPool.html#sequentialThreadPool",
        "fct-type": "function",
        "title": "sequentialThreadPool"
      },
      "index": {
        "description": "",
        "hierarchy": "Test Framework ThreadPool",
        "module": "Test.Framework.ThreadPool",
        "name": "sequentialThreadPool",
        "normalized": "",
        "package": "HTF",
        "partial": "Thread Pool",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-ThreadPool.html#v:threadPoolTest",
      "description": {
        "fct-module": "Test.Framework.ThreadPool",
        "fct-package": "HTF",
        "fct-signature": "(Int, Int) -\u003e Int -\u003e IO [()]",
        "fct-source": "src/Test-Framework-ThreadPool.html#threadPoolTest",
        "fct-type": "function",
        "title": "threadPoolTest"
      },
      "index": {
        "description": "",
        "hierarchy": "Test Framework ThreadPool",
        "module": "Test.Framework.ThreadPool",
        "name": "threadPoolTest",
        "normalized": "(Int,Int)-\u003eInt-\u003eIO[()]",
        "package": "HTF",
        "partial": "Pool Test",
        "signature": "(Int,Int)-\u003eInt-\u003eIO[()]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-ThreadPool.html#v:tp_run",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Test.Framework.ThreadPool",
        "fct-package": "HTF",
        "fct-signature": "[ThreadPoolEntry m a b] -\u003e m ()",
        "fct-source": "src/Test-Framework-ThreadPool.html#ThreadPool",
        "fct-type": "function",
        "title": "tp_run"
      },
      "index": {
        "description": "",
        "hierarchy": "Test Framework ThreadPool",
        "module": "Test.Framework.ThreadPool",
        "name": "tp_run",
        "normalized": "[ThreadPoolEntry a b c]-\u003ea()",
        "package": "HTF",
        "partial": "",
        "signature": "[ThreadPoolEntry m a b]-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-Tutorial.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides a short tutorial on how to use the HTF. It\nassumes that you are using GHC for compiling your Haskell code. (It is\npossible to use the HTF with other Haskell environments, only the steps\ntaken to invoke the custom preprocessor of the HTF may differ in\nthis case.)\n\u003c/p\u003e\u003cp\u003eWe start with a simple example. Then we show how to use HTF to easily\ncollect test definitions from multiple modules and discuss\nbackwards-compatibility for projects already using \u003ccode\u003eHUnit\u003c/code\u003e. Finally,\nwe give a brief cookbook-like summary on how to setup your tests with HTF.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Test.Framework.Tutorial",
        "fct-package": "HTF",
        "fct-signature": "module",
        "fct-source": "src/Test-Framework-Tutorial.html",
        "fct-type": "module",
        "title": "Tutorial"
      },
      "index": {
        "description": "This module provides short tutorial on how to use the HTF It assumes that you are using GHC for compiling your Haskell code It is possible to use the HTF with other Haskell environments only the steps taken to invoke the custom preprocessor of the HTF may differ in this case We start with simple example Then we show how to use HTF to easily collect test definitions from multiple modules and discuss backwards-compatibility for projects already using HUnit Finally we give brief cookbook-like summary on how to setup your tests with HTF",
        "hierarchy": "Test Framework Tutorial",
        "module": "Test.Framework.Tutorial",
        "name": "Tutorial",
        "normalized": "",
        "package": "HTF",
        "partial": "Tutorial",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-XmlOutput.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSee \u003ca\u003ehttp://pzolee.blogs.balabit.com/2012/11/jenkins-vs-junit-xml-format/\u003c/a\u003e\nfor a description of the format used.\n\u003c/p\u003e\u003cp\u003eThe source code of this module also contains a rough specification of\nthe output format in terms of Haskell data types.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Test.Framework.XmlOutput",
        "fct-package": "HTF",
        "fct-signature": "module",
        "fct-source": "src/Test-Framework-XmlOutput.html",
        "fct-type": "module",
        "title": "XmlOutput"
      },
      "index": {
        "description": "See http pzolee.blogs.balabit.com jenkins-vs-junit-xml-format for description of the format used The source code of this module also contains rough specification of the output format in terms of Haskell data types",
        "hierarchy": "Test Framework XmlOutput",
        "module": "Test.Framework.XmlOutput",
        "name": "XmlOutput",
        "normalized": "",
        "package": "HTF",
        "partial": "Xml Output",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework-XmlOutput.html#v:mkGlobalResultsXml",
      "description": {
        "fct-module": "Test.Framework.XmlOutput",
        "fct-package": "HTF",
        "fct-signature": "Milliseconds-\u003e [FlatTestResult]-\u003e [FlatTestResult]-\u003e [FlatTestResult]-\u003e [FlatTestResult]-\u003e ByteString",
        "fct-type": "function",
        "title": "mkGlobalResultsXml"
      },
      "index": {
        "description": "",
        "hierarchy": "Test Framework XmlOutput",
        "module": "Test.Framework.XmlOutput",
        "name": "mkGlobalResultsXml",
        "normalized": "Milliseconds-\u003e[FlatTestResult]-\u003e[FlatTestResult]-\u003e[FlatTestResult]-\u003e[FlatTestResult]-\u003eByteString",
        "package": "HTF",
        "partial": "Global Results Xml",
        "signature": "Milliseconds-\u003e[FlatTestResult]-\u003e[FlatTestResult]-\u003e[FlatTestResult]-\u003e[FlatTestResult]-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTop-level module that re-exports functionality from sub-modules.\nModules that only define unit tests and quickcheck properties typically\nonly need to import this module.\nYour test driver should additionally import \u003ccode\u003e\u003ca\u003eTestManager\u003c/a\u003e\u003c/code\u003e and,\nif needed, \u003ccode\u003e\u003ca\u003eBlackBoxTest\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Test.Framework",
        "fct-package": "HTF",
        "fct-signature": "module",
        "fct-source": "src/Test-Framework.html",
        "fct-type": "module",
        "title": "Framework"
      },
      "index": {
        "description": "Top-level module that re-exports functionality from sub-modules Modules that only define unit tests and quickcheck properties typically only need to import this module Your test driver should additionally import TestManager and if needed BlackBoxTest",
        "hierarchy": "Test Framework",
        "module": "Test.Framework",
        "name": "Framework",
        "normalized": "",
        "package": "HTF",
        "partial": "Framework",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework.html#t:TestSuite",
      "description": {
        "fct-descr": "\u003cp\u003eAbstract type for test suites and their results.\n\u003c/p\u003e",
        "fct-module": "Test.Framework",
        "fct-package": "HTF",
        "fct-signature": "data",
        "fct-source": "src/Test-Framework-TestTypes.html#TestSuite",
        "fct-type": "data",
        "title": "TestSuite"
      },
      "index": {
        "description": "Abstract type for test suites and their results",
        "hierarchy": "Test Framework",
        "module": "Test.Framework",
        "name": "TestSuite",
        "normalized": "",
        "package": "HTF",
        "partial": "Test Suite",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework.html#v:htfMain",
      "description": {
        "fct-descr": "\u003cp\u003eRuns something testable by parsing the commandline arguments as test options\n (using \u003ccode\u003e\u003ca\u003eparseTestArgs\u003c/a\u003e\u003c/code\u003e). Exits with the exit code returned by \u003ccode\u003e\u003ca\u003erunTestWithArgs\u003c/a\u003e\u003c/code\u003e.\n This function is the main entry point for running tests.\n\u003c/p\u003e",
        "fct-module": "Test.Framework",
        "fct-package": "HTF",
        "fct-signature": "t -\u003e IO ()",
        "fct-source": "src/Test-Framework-TestManager.html#htfMain",
        "fct-type": "function",
        "title": "htfMain"
      },
      "index": {
        "description": "Runs something testable by parsing the commandline arguments as test options using parseTestArgs Exits with the exit code returned by runTestWithArgs This function is the main entry point for running tests",
        "hierarchy": "Test Framework",
        "module": "Test.Framework",
        "name": "htfMain",
        "normalized": "a-\u003eIO()",
        "package": "HTF",
        "partial": "Main",
        "signature": "t-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework.html#v:makeLoc",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new location.\n\u003c/p\u003e",
        "fct-module": "Test.Framework",
        "fct-package": "HTF",
        "fct-signature": "String-\u003e Int-\u003e Location",
        "fct-type": "function",
        "title": "makeLoc"
      },
      "index": {
        "description": "Create new location",
        "hierarchy": "Test Framework",
        "module": "Test.Framework",
        "name": "makeLoc",
        "normalized": "String-\u003eInt-\u003eLocation",
        "package": "HTF",
        "partial": "Loc",
        "signature": "String-\u003eInt-\u003eLocation"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework.html#v:makeQuickCheckTest",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a test where the given \u003ccode\u003e\u003ca\u003eAssertion\u003c/a\u003e\u003c/code\u003e checks a quick check property.\n Mainly used internally by the htfpp preprocessor.\n\u003c/p\u003e",
        "fct-module": "Test.Framework",
        "fct-package": "HTF",
        "fct-signature": "TestID -\u003e Location -\u003e Assertion -\u003e Test",
        "fct-source": "src/Test-Framework-TestManager.html#makeQuickCheckTest",
        "fct-type": "function",
        "title": "makeQuickCheckTest"
      },
      "index": {
        "description": "Construct test where the given Assertion checks quick check property Mainly used internally by the htfpp preprocessor",
        "hierarchy": "Test Framework",
        "module": "Test.Framework",
        "name": "makeQuickCheckTest",
        "normalized": "TestID-\u003eLocation-\u003eAssertion-\u003eTest",
        "package": "HTF",
        "partial": "Quick Check Test",
        "signature": "TestID-\u003eLocation-\u003eAssertion-\u003eTest"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework.html#v:makeTestSuite",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a named \u003ccode\u003e\u003ca\u003eTestSuite\u003c/a\u003e\u003c/code\u003e from a list of \u003ccode\u003e\u003ca\u003eTest\u003c/a\u003e\u003c/code\u003e values.\n\u003c/p\u003e",
        "fct-module": "Test.Framework",
        "fct-package": "HTF",
        "fct-signature": "TestID -\u003e [Test] -\u003e TestSuite",
        "fct-source": "src/Test-Framework-TestManager.html#makeTestSuite",
        "fct-type": "function",
        "title": "makeTestSuite"
      },
      "index": {
        "description": "Create named TestSuite from list of Test values",
        "hierarchy": "Test Framework",
        "module": "Test.Framework",
        "name": "makeTestSuite",
        "normalized": "TestID-\u003e[Test]-\u003eTestSuite",
        "package": "HTF",
        "partial": "Test Suite",
        "signature": "TestID-\u003e[Test]-\u003eTestSuite"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HTF/docs/Test-Framework.html#v:makeUnitTest",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a unit test from the given \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e action.\n Mainly used internally by the htfpp preprocessor.\n\u003c/p\u003e",
        "fct-module": "Test.Framework",
        "fct-package": "HTF",
        "fct-signature": "TestID -\u003e Location -\u003e a -\u003e Test",
        "fct-source": "src/Test-Framework-TestManager.html#makeUnitTest",
        "fct-type": "function",
        "title": "makeUnitTest"
      },
      "index": {
        "description": "Construct unit test from the given IO action Mainly used internally by the htfpp preprocessor",
        "hierarchy": "Test Framework",
        "module": "Test.Framework",
        "name": "makeUnitTest",
        "normalized": "TestID-\u003eLocation-\u003ea-\u003eTest",
        "package": "HTF",
        "partial": "Unit Test",
        "signature": "TestID-\u003eLocation-\u003ea-\u003eTest"
      }
    }
  }
]