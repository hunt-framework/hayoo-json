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
        "word": "shqq"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eEmbed shell commands with interpolated Haskell\n variables, and capture output.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.ShQQ",
          "name": "ShQQ",
          "package": "shqq",
          "source": "src/System-ShQQ.html",
          "type": "module"
        },
        "index": {
          "description": "Embed shell commands with interpolated Haskell variables and capture output",
          "hierarchy": "System ShQQ",
          "module": "System.ShQQ",
          "name": "ShQQ",
          "package": "shqq",
          "partial": "Sh QQ",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/shqq/docs/System-ShQQ.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute a shell command, capturing output.\n\u003c/p\u003e\u003cp\u003eUsed in the implementation of \u003ccode\u003e\u003ccode\u003e\u003ca\u003esh\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.ShQQ",
          "name": "readShell",
          "package": "shqq",
          "signature": "String -\u003e IO String",
          "source": "src/System-ShQQ.html#readShell",
          "type": "function"
        },
        "index": {
          "description": "Execute shell command capturing output Used in the implementation of sh",
          "hierarchy": "System ShQQ",
          "module": "System.ShQQ",
          "name": "readShell",
          "normalized": "String-\u003eIO String",
          "package": "shqq",
          "partial": "Shell",
          "signature": "String-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shqq/docs/System-ShQQ.html#v:readShell"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute a shell command, capturing output and exit code.\n\u003c/p\u003e\u003cp\u003eUsed in the implementation of \u003ccode\u003e\u003ccode\u003e\u003ca\u003eshc\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.ShQQ",
          "name": "readShellWithCode",
          "package": "shqq",
          "signature": "String -\u003e IO (ExitCode, String)",
          "source": "src/System-ShQQ.html#readShellWithCode",
          "type": "function"
        },
        "index": {
          "description": "Execute shell command capturing output and exit code Used in the implementation of shc",
          "hierarchy": "System ShQQ",
          "module": "System.ShQQ",
          "name": "readShellWithCode",
          "normalized": "String-\u003eIO(ExitCode,String)",
          "package": "shqq",
          "partial": "Shell With Code",
          "signature": "String-\u003eIO(ExitCode,String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shqq/docs/System-ShQQ.html#v:readShellWithCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute a shell command, capturing output.\n\u003c/p\u003e\u003cp\u003eThis requires the \u003ccode\u003eQuasiQuotes\u003c/code\u003e extension.\n\u003c/p\u003e\u003cp\u003eThe expression \u003ccode\u003e[sh| ... |]\u003c/code\u003e has type \u003ccode\u003e\u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\nExecuting this IO action will invoke the quoted shell\ncommand and produce its standard output as a \u003ccode\u003e\u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e[sh| sha1sum /proc/uptime |]\n\u003c/code\u003e\u003c/strong\u003e\"ebe14a88cf9be69d2192dcd7bec395e3f00ca7a4  /proc/uptime\\n\"\n\u003c/pre\u003e\u003cp\u003eYou can interpolate Haskell \u003ccode\u003e\u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e variables using the\nsyntax \u003ccode\u003e$x\u003c/code\u003e.  Special characters are escaped, so that the\nprogram invoked by the shell will see each interpolated\nvariable as a single argument.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet x = \"foo bar\" in [sh| cat $x |]\n\u003c/code\u003e\u003c/strong\u003ecat: foo bar: No such file or directory\n*** Exception: ExitFailure 1\n\u003c/pre\u003e\u003cp\u003eYou can also write \u003ccode\u003e${x}\u003c/code\u003e to separate the variable name from\nadjacent characters.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet x = \"b\" in [sh| echo a${x}c |]\n\u003c/code\u003e\u003c/strong\u003e\"abc\\n\"\n\u003c/pre\u003e\u003cp\u003eBe careful: the automatic escaping means that \u003ccode\u003e[sh| cat '$x'\n|]\u003c/code\u003e is \u003cem\u003eless safe\u003c/em\u003e than \u003ccode\u003e[sh| cat $x |]\u003c/code\u003e, though it will\nwork \"by accident\" in common cases.\n\u003c/p\u003e\u003cp\u003eTo interpolate \u003cem\u003ewithout\u003c/em\u003e escaping special characters, use\nthe syntax \u003ccode\u003e$+x\u003c/code\u003e .\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet x = \"foo bar\" in [sh| cat $+x |]\n\u003c/code\u003e\u003c/strong\u003ecat: foo: No such file or directory\ncat: bar: No such file or directory\n*** Exception: ExitFailure 1\n\u003c/pre\u003e\u003cp\u003eYou can pass a literal \u003ccode\u003e$\u003c/code\u003e to the shell as \u003ccode\u003e\\$\u003c/code\u003e, or a\nliteral \u003ccode\u003e\\\u003c/code\u003e as \u003ccode\u003e\\\\\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eAs demonstrated above, a non-zero exit code from the\nsubprocess will raise an exception in your Haskell program.\n\u003c/p\u003e\u003cp\u003eVariables of type other than \u003ccode\u003e\u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e are interpolated via\n\u003ccode\u003e\u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet x = Just (2 + 2) in [sh| touch $x; ls -l J* |]\n\u003c/code\u003e\u003c/strong\u003e\"-rw-r--r-- 1 keegan keegan 0 Oct  7 23:28 Just 4\\n\"\n\u003c/pre\u003e\u003cp\u003eThe interpolated variable's type must be an instance of\n\u003ccode\u003e\u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e and of \u003ccode\u003e\u003ccode\u003e\u003ca\u003eTypeable\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.ShQQ",
          "name": "sh",
          "package": "shqq",
          "signature": "QuasiQuoter",
          "source": "src/System-ShQQ.html#sh",
          "type": "function"
        },
        "index": {
          "description": "Execute shell command capturing output This requires the QuasiQuotes extension The expression sh has type IO String Executing this IO action will invoke the quoted shell command and produce its standard output as String sh sha1sum proc uptime ebe14a88cf9be69d2192dcd7bec395e3f00ca7a4 proc uptime You can interpolate Haskell String variables using the syntax Special characters are escaped so that the program invoked by the shell will see each interpolated variable as single argument let foo bar in sh cat cat foo bar No such file or directory Exception ExitFailure You can also write to separate the variable name from adjacent characters let in sh echo abc Be careful the automatic escaping means that sh cat is less safe than sh cat though it will work by accident in common cases To interpolate without escaping special characters use the syntax let foo bar in sh cat cat foo No such file or directory cat bar No such file or directory Exception ExitFailure You can pass literal to the shell as or literal as As demonstrated above non-zero exit code from the subprocess will raise an exception in your Haskell program Variables of type other than String are interpolated via show let Just in sh touch ls rw-r--r keegan keegan Oct Just The interpolated variable type must be an instance of Show and of Typeable",
          "hierarchy": "System ShQQ",
          "module": "System.ShQQ",
          "name": "sh",
          "package": "shqq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shqq/docs/System-ShQQ.html#v:sh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute a shell command, capturing output and exit code.\n\u003c/p\u003e\u003cp\u003eThe expression \u003ccode\u003e[shc| ... |]\u003c/code\u003e has type \u003ccode\u003e\u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eExitCode\u003c/a\u003e\u003c/code\u003e,\n\u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e)\u003c/code\u003e.  A non-zero exit code does not raise an\nexception your the Haskell program.\n\u003c/p\u003e\u003cp\u003eOtherwise, \u003ccode\u003e\u003ccode\u003e\u003ca\u003eshc\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e acts like \u003ccode\u003e\u003ccode\u003e\u003ca\u003esh\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.ShQQ",
          "name": "shc",
          "package": "shqq",
          "signature": "QuasiQuoter",
          "source": "src/System-ShQQ.html#shc",
          "type": "function"
        },
        "index": {
          "description": "Execute shell command capturing output and exit code The expression shc has type IO ExitCode String non-zero exit code does not raise an exception your the Haskell program Otherwise shc acts like sh",
          "hierarchy": "System ShQQ",
          "module": "System.ShQQ",
          "name": "shc",
          "package": "shqq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shqq/docs/System-ShQQ.html#v:shc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eActs like the identity function on \u003ccode\u003e\u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e, and\n like \u003ccode\u003e\u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e on other types.\n\u003c/p\u003e",
          "module": "System.ShQQ",
          "name": "showNonString",
          "package": "shqq",
          "signature": "a -\u003e String",
          "source": "src/System-ShQQ.html#showNonString",
          "type": "function"
        },
        "index": {
          "description": "Acts like the identity function on String and like show on other types",
          "hierarchy": "System ShQQ",
          "module": "System.ShQQ",
          "name": "showNonString",
          "normalized": "a-\u003eString",
          "package": "shqq",
          "partial": "Non String",
          "signature": "a-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shqq/docs/System-ShQQ.html#v:showNonString"
      }
    }
  ]
]