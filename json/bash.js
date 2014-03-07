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
        "word": "bash"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSome convenient annotations for Bash scripts, provided with example\n    pretty printer typeclass instances.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.Bash.Annotations",
          "name": "Annotations",
          "package": "bash",
          "source": "src/Language-Bash-Annotations.html",
          "type": "module"
        },
        "index": {
          "description": "Some convenient annotations for Bash scripts provided with example pretty printer typeclass instances",
          "hierarchy": "Language Bash Annotations",
          "module": "Language.Bash.Annotations",
          "name": "Annotations",
          "package": "bash",
          "partial": "Annotations",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-Annotations.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAppend some raw lines, in flow, above and below a statement.\n\u003c/p\u003e",
          "module": "Language.Bash.Annotations",
          "name": "Lines",
          "package": "bash",
          "source": "src/Language-Bash-Annotations.html#Lines",
          "type": "data"
        },
        "index": {
          "description": "Append some raw lines in flow above and below statement",
          "hierarchy": "Language Bash Annotations",
          "module": "Language.Bash.Annotations",
          "name": "Lines",
          "package": "bash",
          "partial": "Lines",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-Annotations.html#t:Lines"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAnnotate a statement with statements of different types, with special\n    rules for empty \u003ccode\u003e\u003ca\u003eNoOp\u003c/a\u003e\u003c/code\u003e statements -- as long as the \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e\n    \"comment\" in the \u003ccode\u003e\u003ca\u003eNoOp\u003c/a\u003e\u003c/code\u003e is empty, the \u003ccode\u003e\u003ca\u003eNoOp\u003c/a\u003e\u003c/code\u003e is simply elided.\n\u003c/p\u003e",
          "module": "Language.Bash.Annotations",
          "name": "Statements",
          "package": "bash",
          "source": "src/Language-Bash-Annotations.html#Statements",
          "type": "data"
        },
        "index": {
          "description": "Annotate statement with statements of different types with special rules for empty NoOp statements as long as the ByteString comment in the NoOp is empty the NoOp is simply elided",
          "hierarchy": "Language Bash Annotations",
          "module": "Language.Bash.Annotations",
          "name": "Statements",
          "package": "bash",
          "partial": "Statements",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-Annotations.html#t:Statements"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Bash.Annotations",
          "name": "Lines",
          "package": "bash",
          "signature": "Lines [ByteString] [ByteString]",
          "source": "src/Language-Bash-Annotations.html#Lines",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Bash Annotations",
          "module": "Language.Bash.Annotations",
          "name": "Lines",
          "normalized": "Lines[ByteString][ByteString]",
          "package": "bash",
          "partial": "Lines",
          "signature": "Lines[ByteString][ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-Annotations.html#v:Lines"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Bash.Annotations",
          "name": "Statements",
          "package": "bash",
          "signature": "Statements (Statement a) (Statement b)",
          "source": "src/Language-Bash-Annotations.html#Statements",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Bash Annotations",
          "module": "Language.Bash.Annotations",
          "name": "Statements",
          "package": "bash",
          "partial": "Statements",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-Annotations.html#v:Statements"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eShortcuts for Bash generation that also demonstrate use of the library.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.Bash.Lib",
          "name": "Lib",
          "package": "bash",
          "source": "src/Language-Bash-Lib.html",
          "type": "module"
        },
        "index": {
          "description": "Shortcuts for Bash generation that also demonstrate use of the library",
          "hierarchy": "Language Bash Lib",
          "module": "Language.Bash.Lib",
          "name": "Lib",
          "package": "bash",
          "partial": "Lib",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-Lib.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAnnotate a statement with the 0 value of a monoid.\n\u003c/p\u003e",
          "module": "Language.Bash.Lib",
          "name": "ann_",
          "package": "bash",
          "signature": "Statement m -\u003e Annotated m",
          "source": "src/Language-Bash-Lib.html#ann_",
          "type": "function"
        },
        "index": {
          "description": "Annotate statement with the value of monoid",
          "hierarchy": "Language Bash Lib",
          "module": "Language.Bash.Lib",
          "name": "ann_",
          "normalized": "Statement a-\u003eAnnotated a",
          "package": "bash",
          "signature": "Statement m-\u003eAnnotated m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-Lib.html#v:ann_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a simple command from expressions.\n\u003c/p\u003e",
          "module": "Language.Bash.Lib",
          "name": "cmd",
          "package": "bash",
          "signature": "Expression t -\u003e [Expression t] -\u003e Statement t",
          "source": "src/Language-Bash-Lib.html#cmd",
          "type": "function"
        },
        "index": {
          "description": "Create simple command from expressions",
          "hierarchy": "Language Bash Lib",
          "module": "Language.Bash.Lib",
          "name": "cmd",
          "normalized": "Expression a-\u003e[Expression a]-\u003eStatement a",
          "package": "bash",
          "signature": "Expression t-\u003e[Expression t]-\u003eStatement t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-Lib.html#v:cmd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA statement that allows one to redirect output to a file as root. This is\n    what you might expect \u003ccode\u003esudo echo x \u003e privileged_file\u003c/code\u003e would do (though\n    that does not actually work).\n\u003c/p\u003e",
          "module": "Language.Bash.Lib",
          "name": "dev_null",
          "package": "bash",
          "signature": "Statement m -\u003e Statement m",
          "source": "src/Language-Bash-Lib.html#dev_null",
          "type": "function"
        },
        "index": {
          "description": "statement that allows one to redirect output to file as root This is what you might expect sudo echo privileged file would do though that does not actually work",
          "hierarchy": "Language Bash Lib",
          "module": "Language.Bash.Lib",
          "name": "dev_null",
          "normalized": "Statement a-\u003eStatement a",
          "package": "bash",
          "signature": "Statement m-\u003eStatement m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-Lib.html#v:dev_null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeclare or assign an array to a \u003ccode\u003esed\u003c/code\u003e command line that will use extended\n    regular expressions, checking for GNU or BSD \u003ccode\u003esed\u003c/code\u003e. The \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e argument\n    determines whether to insert the declaration or not.\n\u003c/p\u003e",
          "module": "Language.Bash.Lib",
          "name": "esed",
          "package": "bash",
          "signature": "Identifier -\u003e Annotated m",
          "source": "src/Language-Bash-Lib.html#esed",
          "type": "function"
        },
        "index": {
          "description": "Declare or assign an array to sed command line that will use extended regular expressions checking for GNU or BSD sed The Bool argument determines whether to insert the declaration or not",
          "hierarchy": "Language Bash Lib",
          "module": "Language.Bash.Lib",
          "name": "esed",
          "normalized": "Identifier-\u003eAnnotated a",
          "package": "bash",
          "signature": "Identifier-\u003eAnnotated m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-Lib.html#v:esed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerform a statement for integer values ranging from the first integral\n    parameter to the second, using \u003ccode\u003eseq\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.Bash.Lib",
          "name": "for",
          "package": "bash",
          "signature": "Identifier -\u003e i -\u003e i -\u003e Annotated m -\u003e Statement m",
          "source": "src/Language-Bash-Lib.html#for",
          "type": "function"
        },
        "index": {
          "description": "Perform statement for integer values ranging from the first integral parameter to the second using seq",
          "hierarchy": "Language Bash Lib",
          "module": "Language.Bash.Lib",
          "name": "for",
          "normalized": "Identifier-\u003ea-\u003ea-\u003eAnnotated b-\u003eStatement b",
          "package": "bash",
          "signature": "Identifier-\u003ei-\u003ei-\u003eAnnotated m-\u003eStatement m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-Lib.html#v:for"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluate \u003ccode\u003eseq\u003c/code\u003e for the given arguments.\n\u003c/p\u003e",
          "module": "Language.Bash.Lib",
          "name": "seqAZ",
          "package": "bash",
          "signature": "i -\u003e i -\u003e Statement t",
          "source": "src/Language-Bash-Lib.html#seqAZ",
          "type": "function"
        },
        "index": {
          "description": "Evaluate seq for the given arguments",
          "hierarchy": "Language Bash Lib",
          "module": "Language.Bash.Lib",
          "name": "seqAZ",
          "normalized": "a-\u003ea-\u003eStatement b",
          "package": "bash",
          "partial": "AZ",
          "signature": "i-\u003ei-\u003eStatement t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-Lib.html#v:seqAZ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA set statement that covers a few error handling options, setting\n    \u003ccode\u003eerrexit\u003c/code\u003e, \u003ccode\u003enounset\u003c/code\u003e and \u003ccode\u003epipefail\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.Bash.Lib",
          "name": "setSafe",
          "package": "bash",
          "signature": "Statement t",
          "source": "src/Language-Bash-Lib.html#setSafe",
          "type": "function"
        },
        "index": {
          "description": "set statement that covers few error handling options setting errexit nounset and pipefail",
          "hierarchy": "Language Bash Lib",
          "module": "Language.Bash.Lib",
          "name": "setSafe",
          "package": "bash",
          "partial": "Safe",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-Lib.html#v:setSafe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA statement that allows one to redirect output to a file as root. This is\n    what you might expect \u003ccode\u003esudo echo x \u003e privileged_file\u003c/code\u003e would do (though\n    that does not actually work).\n\u003c/p\u003e",
          "module": "Language.Bash.Lib",
          "name": "sudo_write",
          "package": "bash",
          "signature": "Expression m -\u003e Statement m",
          "source": "src/Language-Bash-Lib.html#sudo_write",
          "type": "function"
        },
        "index": {
          "description": "statement that allows one to redirect output to file as root This is what you might expect sudo echo privileged file would do though that does not actually work",
          "hierarchy": "Language Bash Lib",
          "module": "Language.Bash.Lib",
          "name": "sudo_write",
          "normalized": "Expression a-\u003eStatement a",
          "package": "bash",
          "signature": "Expression m-\u003eStatement m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-Lib.html#v:sudo_write"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePretty printer state, used within a state monad computation.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.Bash.PrettyPrinter.State",
          "name": "State",
          "package": "bash",
          "source": "src/Language-Bash-PrettyPrinter-State.html",
          "type": "module"
        },
        "index": {
          "description": "Pretty printer state used within state monad computation",
          "hierarchy": "Language Bash PrettyPrinter State",
          "module": "Language.Bash.PrettyPrinter.State",
          "name": "State",
          "package": "bash",
          "partial": "State",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-PrettyPrinter-State.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOperations we can perform while pretty printing.\n\u003c/p\u003e",
          "module": "Language.Bash.PrettyPrinter.State",
          "name": "PPOp",
          "package": "bash",
          "source": "src/Language-Bash-PrettyPrinter-State.html#PPOp",
          "type": "data"
        },
        "index": {
          "description": "Operations we can perform while pretty printing",
          "hierarchy": "Language Bash PrettyPrinter State",
          "module": "Language.Bash.PrettyPrinter.State",
          "name": "PPOp",
          "package": "bash",
          "partial": "PPOp",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-PrettyPrinter-State.html#t:PPOp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eState of pretty printing -- string being built, indent levels, present\n    column, brace nesting.\n\u003c/p\u003e",
          "module": "Language.Bash.PrettyPrinter.State",
          "name": "PPState",
          "package": "bash",
          "source": "src/Language-Bash-PrettyPrinter-State.html#PPState",
          "type": "data"
        },
        "index": {
          "description": "State of pretty printing string being built indent levels present column brace nesting",
          "hierarchy": "Language Bash PrettyPrinter State",
          "module": "Language.Bash.PrettyPrinter.State",
          "name": "PPState",
          "package": "bash",
          "partial": "PPState",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-PrettyPrinter-State.html#t:PPState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd bytes to the script.\n\u003c/p\u003e",
          "module": "Language.Bash.PrettyPrinter.State",
          "name": "Bytes",
          "package": "bash",
          "signature": "Bytes ByteString",
          "source": "src/Language-Bash-PrettyPrinter-State.html#PPOp",
          "type": "function"
        },
        "index": {
          "description": "Add bytes to the script",
          "hierarchy": "Language Bash PrettyPrinter State",
          "module": "Language.Bash.PrettyPrinter.State",
          "name": "Bytes",
          "package": "bash",
          "partial": "Bytes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-PrettyPrinter-State.html#v:Bytes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIntroduce a level of braces.\n\u003c/p\u003e",
          "module": "Language.Bash.PrettyPrinter.State",
          "name": "Curly",
          "package": "bash",
          "signature": "Curly Bool",
          "source": "src/Language-Bash-PrettyPrinter-State.html#PPOp",
          "type": "function"
        },
        "index": {
          "description": "Introduce level of braces",
          "hierarchy": "Language Bash PrettyPrinter State",
          "module": "Language.Bash.PrettyPrinter.State",
          "name": "Curly",
          "package": "bash",
          "partial": "Curly",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-PrettyPrinter-State.html#v:Curly"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIndent by N spaces.\n\u003c/p\u003e",
          "module": "Language.Bash.PrettyPrinter.State",
          "name": "Indent",
          "package": "bash",
          "signature": "Indent Word",
          "source": "src/Language-Bash-PrettyPrinter-State.html#PPOp",
          "type": "function"
        },
        "index": {
          "description": "Indent by spaces",
          "hierarchy": "Language Bash PrettyPrinter State",
          "module": "Language.Bash.PrettyPrinter.State",
          "name": "Indent",
          "package": "bash",
          "partial": "Indent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-PrettyPrinter-State.html#v:Indent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMove to newline.\n\u003c/p\u003e",
          "module": "Language.Bash.PrettyPrinter.State",
          "name": "Newline",
          "package": "bash",
          "signature": "Newline",
          "source": "src/Language-Bash-PrettyPrinter-State.html#PPOp",
          "type": "function"
        },
        "index": {
          "description": "Move to newline",
          "hierarchy": "Language Bash PrettyPrinter State",
          "module": "Language.Bash.PrettyPrinter.State",
          "name": "Newline",
          "package": "bash",
          "partial": "Newline",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-PrettyPrinter-State.html#v:Newline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove an indentation level.\n\u003c/p\u003e",
          "module": "Language.Bash.PrettyPrinter.State",
          "name": "Outdent",
          "package": "bash",
          "signature": "Outdent",
          "source": "src/Language-Bash-PrettyPrinter-State.html#PPOp",
          "type": "function"
        },
        "index": {
          "description": "Remove an indentation level",
          "hierarchy": "Language Bash PrettyPrinter State",
          "module": "Language.Bash.PrettyPrinter.State",
          "name": "Outdent",
          "package": "bash",
          "partial": "Outdent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-PrettyPrinter-State.html#v:Outdent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Bash.PrettyPrinter.State",
          "name": "PPState",
          "package": "bash",
          "signature": "PPState",
          "source": "src/Language-Bash-PrettyPrinter-State.html#PPState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Bash PrettyPrinter State",
          "module": "Language.Bash.PrettyPrinter.State",
          "name": "PPState",
          "package": "bash",
          "partial": "PPState",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-PrettyPrinter-State.html#v:PPState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIntroduce a level of parens.\n\u003c/p\u003e",
          "module": "Language.Bash.PrettyPrinter.State",
          "name": "Round",
          "package": "bash",
          "signature": "Round Bool",
          "source": "src/Language-Bash-PrettyPrinter-State.html#PPOp",
          "type": "function"
        },
        "index": {
          "description": "Introduce level of parens",
          "hierarchy": "Language Bash PrettyPrinter State",
          "module": "Language.Bash.PrettyPrinter.State",
          "name": "Round",
          "package": "bash",
          "partial": "Round",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-PrettyPrinter-State.html#v:Round"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSeparate words with space.\n\u003c/p\u003e",
          "module": "Language.Bash.PrettyPrinter.State",
          "name": "WordSeparator",
          "package": "bash",
          "signature": "WordSeparator",
          "source": "src/Language-Bash-PrettyPrinter-State.html#PPOp",
          "type": "function"
        },
        "index": {
          "description": "Separate words with space",
          "hierarchy": "Language Bash PrettyPrinter State",
          "module": "Language.Bash.PrettyPrinter.State",
          "name": "WordSeparator",
          "package": "bash",
          "partial": "Word Separator",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-PrettyPrinter-State.html#v:WordSeparator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Bash.PrettyPrinter.State",
          "name": "cast",
          "package": "bash",
          "signature": "a -\u003e b",
          "source": "src/Language-Bash-PrettyPrinter-State.html#cast",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Bash PrettyPrinter State",
          "module": "Language.Bash.PrettyPrinter.State",
          "name": "cast",
          "normalized": "a-\u003eb",
          "package": "bash",
          "signature": "a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-PrettyPrinter-State.html#v:cast"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Bash.PrettyPrinter.State",
          "name": "columns",
          "package": "bash",
          "signature": "Word",
          "source": "src/Language-Bash-PrettyPrinter-State.html#PPState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Bash PrettyPrinter State",
          "module": "Language.Bash.PrettyPrinter.State",
          "name": "columns",
          "package": "bash",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-PrettyPrinter-State.html#v:columns"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Bash.PrettyPrinter.State",
          "name": "curly",
          "package": "bash",
          "signature": "[()]",
          "source": "src/Language-Bash-PrettyPrinter-State.html#PPState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Bash PrettyPrinter State",
          "module": "Language.Bash.PrettyPrinter.State",
          "name": "curly",
          "normalized": "[()]",
          "package": "bash",
          "signature": "[()]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-PrettyPrinter-State.html#v:curly"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Bash.PrettyPrinter.State",
          "name": "curlyClose",
          "package": "bash",
          "signature": "State PPState ()",
          "source": "src/Language-Bash-PrettyPrinter-State.html#curlyClose",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Bash PrettyPrinter State",
          "module": "Language.Bash.PrettyPrinter.State",
          "name": "curlyClose",
          "normalized": "State PPState()",
          "package": "bash",
          "partial": "Close",
          "signature": "State PPState()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-PrettyPrinter-State.html#v:curlyClose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Bash.PrettyPrinter.State",
          "name": "curlyOpen",
          "package": "bash",
          "signature": "State PPState ()",
          "source": "src/Language-Bash-PrettyPrinter-State.html#curlyOpen",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Bash PrettyPrinter State",
          "module": "Language.Bash.PrettyPrinter.State",
          "name": "curlyOpen",
          "normalized": "State PPState()",
          "package": "bash",
          "partial": "Open",
          "signature": "State PPState()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-PrettyPrinter-State.html#v:curlyOpen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Bash.PrettyPrinter.State",
          "name": "hang",
          "package": "bash",
          "signature": "ByteString -\u003e State PPState ()",
          "source": "src/Language-Bash-PrettyPrinter-State.html#hang",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Bash PrettyPrinter State",
          "module": "Language.Bash.PrettyPrinter.State",
          "name": "hang",
          "normalized": "ByteString-\u003eState PPState()",
          "package": "bash",
          "signature": "ByteString-\u003eState PPState()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-PrettyPrinter-State.html#v:hang"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Bash.PrettyPrinter.State",
          "name": "hangWord",
          "package": "bash",
          "signature": "ByteString -\u003e State PPState ()",
          "source": "src/Language-Bash-PrettyPrinter-State.html#hangWord",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Bash PrettyPrinter State",
          "module": "Language.Bash.PrettyPrinter.State",
          "name": "hangWord",
          "normalized": "ByteString-\u003eState PPState()",
          "package": "bash",
          "partial": "Word",
          "signature": "ByteString-\u003eState PPState()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-PrettyPrinter-State.html#v:hangWord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis procedure is used in printing statements within evals, to set up\n    indentation correctly for lines \u003cem\u003efollowing\u003c/em\u003e the first line. It ensures\n    that the second and following lines are printed aligned with the first\n    character of the first line of the statement, not the first character of\n    the \u003ccode\u003e$(\u003c/code\u003e, \u003ccode\u003e\u003e(\u003c/code\u003e or \u003ccode\u003e\u003c(\u003c/code\u003e enclosing the eval.\n\u003c/p\u003e",
          "module": "Language.Bash.PrettyPrinter.State",
          "name": "indentPadToNextWord",
          "package": "bash",
          "signature": "State PPState ()",
          "source": "src/Language-Bash-PrettyPrinter-State.html#indentPadToNextWord",
          "type": "function"
        },
        "index": {
          "description": "This procedure is used in printing statements within evals to set up indentation correctly for lines following the first line It ensures that the second and following lines are printed aligned with the first character of the first line of the statement not the first character of the or enclosing the eval",
          "hierarchy": "Language Bash PrettyPrinter State",
          "module": "Language.Bash.PrettyPrinter.State",
          "name": "indentPadToNextWord",
          "normalized": "State PPState()",
          "package": "bash",
          "partial": "Pad To Next Word",
          "signature": "State PPState()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-PrettyPrinter-State.html#v:indentPadToNextWord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Bash.PrettyPrinter.State",
          "name": "indents",
          "package": "bash",
          "signature": "[Word]",
          "source": "src/Language-Bash-PrettyPrinter-State.html#PPState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Bash PrettyPrinter State",
          "module": "Language.Bash.PrettyPrinter.State",
          "name": "indents",
          "normalized": "[Word]",
          "package": "bash",
          "signature": "[Word]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-PrettyPrinter-State.html#v:indents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Bash.PrettyPrinter.State",
          "name": "inword",
          "package": "bash",
          "signature": "ByteString -\u003e State PPState ()",
          "source": "src/Language-Bash-PrettyPrinter-State.html#inword",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Bash PrettyPrinter State",
          "module": "Language.Bash.PrettyPrinter.State",
          "name": "inword",
          "normalized": "ByteString-\u003eState PPState()",
          "package": "bash",
          "signature": "ByteString-\u003eState PPState()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-PrettyPrinter-State.html#v:inword"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Bash.PrettyPrinter.State",
          "name": "nl",
          "package": "bash",
          "signature": "State PPState ()",
          "source": "src/Language-Bash-PrettyPrinter-State.html#nl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Bash PrettyPrinter State",
          "module": "Language.Bash.PrettyPrinter.State",
          "name": "nl",
          "normalized": "State PPState()",
          "package": "bash",
          "signature": "State PPState()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-PrettyPrinter-State.html#v:nl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePretty printer state starting on a new line indented to the given column.\n\u003c/p\u003e",
          "module": "[\"Language.Bash.PrettyPrinter.State\",\"Language.Bash\"]",
          "name": "nlCol",
          "package": "bash",
          "signature": "Word -\u003e PPState",
          "source": "src/Language-Bash-PrettyPrinter-State.html#nlCol",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bash/docs/Language-Bash-PrettyPrinter-State.html#v:nlCol\",\"http://hackage.haskell.org/package/bash/docs/Language-Bash.html#v:nlCol\"]"
        },
        "index": {
          "description": "Pretty printer state starting on new line indented to the given column",
          "hierarchy": "Language Bash PrettyPrinter State",
          "module": "Language.Bash.PrettyPrinter.State",
          "name": "nlCol",
          "normalized": "Word-\u003ePPState",
          "package": "bash",
          "partial": "Col",
          "signature": "Word-\u003ePPState",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-PrettyPrinter-State.html#v:nlCol"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply an operation to a state.\n\u003c/p\u003e",
          "module": "Language.Bash.PrettyPrinter.State",
          "name": "op",
          "package": "bash",
          "signature": "PPState -\u003e PPOp -\u003e PPState",
          "source": "src/Language-Bash-PrettyPrinter-State.html#op",
          "type": "function"
        },
        "index": {
          "description": "Apply an operation to state",
          "hierarchy": "Language Bash PrettyPrinter State",
          "module": "Language.Bash.PrettyPrinter.State",
          "name": "op",
          "normalized": "PPState-\u003ePPOp-\u003ePPState",
          "package": "bash",
          "signature": "PPState-\u003ePPOp-\u003ePPState",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-PrettyPrinter-State.html#v:op"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Bash.PrettyPrinter.State",
          "name": "opM",
          "package": "bash",
          "signature": "[PPOp] -\u003e State PPState ()",
          "source": "src/Language-Bash-PrettyPrinter-State.html#opM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Bash PrettyPrinter State",
          "module": "Language.Bash.PrettyPrinter.State",
          "name": "opM",
          "normalized": "[PPOp]-\u003eState PPState()",
          "package": "bash",
          "signature": "[PPOp]-\u003eState PPState()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-PrettyPrinter-State.html#v:opM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Bash.PrettyPrinter.State",
          "name": "outdent",
          "package": "bash",
          "signature": "State PPState ()",
          "source": "src/Language-Bash-PrettyPrinter-State.html#outdent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Bash PrettyPrinter State",
          "module": "Language.Bash.PrettyPrinter.State",
          "name": "outdent",
          "normalized": "State PPState()",
          "package": "bash",
          "signature": "State PPState()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-PrettyPrinter-State.html#v:outdent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Bash.PrettyPrinter.State",
          "name": "outword",
          "package": "bash",
          "signature": "ByteString -\u003e State PPState ()",
          "source": "src/Language-Bash-PrettyPrinter-State.html#outword",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Bash PrettyPrinter State",
          "module": "Language.Bash.PrettyPrinter.State",
          "name": "outword",
          "normalized": "ByteString-\u003eState PPState()",
          "package": "bash",
          "signature": "ByteString-\u003eState PPState()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-PrettyPrinter-State.html#v:outword"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProduce a builder from a pretty printer state computation.\n\u003c/p\u003e",
          "module": "[\"Language.Bash.PrettyPrinter.State\",\"Language.Bash\"]",
          "name": "render",
          "package": "bash",
          "signature": "PPState -\u003e State PPState () -\u003e Builder",
          "source": "src/Language-Bash-PrettyPrinter-State.html#render",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bash/docs/Language-Bash-PrettyPrinter-State.html#v:render\",\"http://hackage.haskell.org/package/bash/docs/Language-Bash.html#v:render\"]"
        },
        "index": {
          "description": "Produce builder from pretty printer state computation",
          "hierarchy": "Language Bash PrettyPrinter State",
          "module": "Language.Bash.PrettyPrinter.State",
          "name": "render",
          "normalized": "PPState-\u003eState PPState()-\u003eBuilder",
          "package": "bash",
          "signature": "PPState-\u003eState PPState()-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-PrettyPrinter-State.html#v:render"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Bash.PrettyPrinter.State",
          "name": "renderBytes",
          "package": "bash",
          "signature": "PPState -\u003e State PPState () -\u003e ByteString",
          "source": "src/Language-Bash-PrettyPrinter-State.html#renderBytes",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Bash PrettyPrinter State",
          "module": "Language.Bash.PrettyPrinter.State",
          "name": "renderBytes",
          "normalized": "PPState-\u003eState PPState()-\u003eByteString",
          "package": "bash",
          "partial": "Bytes",
          "signature": "PPState-\u003eState PPState()-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-PrettyPrinter-State.html#v:renderBytes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Bash.PrettyPrinter.State",
          "name": "renderIndents",
          "package": "bash",
          "signature": "[a] -\u003e c",
          "source": "src/Language-Bash-PrettyPrinter-State.html#renderIndents",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Bash PrettyPrinter State",
          "module": "Language.Bash.PrettyPrinter.State",
          "name": "renderIndents",
          "normalized": "[a]-\u003eb",
          "package": "bash",
          "partial": "Indents",
          "signature": "[a]-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-PrettyPrinter-State.html#v:renderIndents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Bash.PrettyPrinter.State",
          "name": "round",
          "package": "bash",
          "signature": "[()]",
          "source": "src/Language-Bash-PrettyPrinter-State.html#PPState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Bash PrettyPrinter State",
          "module": "Language.Bash.PrettyPrinter.State",
          "name": "round",
          "normalized": "[()]",
          "package": "bash",
          "signature": "[()]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-PrettyPrinter-State.html#v:round"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Bash.PrettyPrinter.State",
          "name": "roundClose",
          "package": "bash",
          "signature": "State PPState ()",
          "source": "src/Language-Bash-PrettyPrinter-State.html#roundClose",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Bash PrettyPrinter State",
          "module": "Language.Bash.PrettyPrinter.State",
          "name": "roundClose",
          "normalized": "State PPState()",
          "package": "bash",
          "partial": "Close",
          "signature": "State PPState()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-PrettyPrinter-State.html#v:roundClose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Bash.PrettyPrinter.State",
          "name": "roundOpen",
          "package": "bash",
          "signature": "State PPState ()",
          "source": "src/Language-Bash-PrettyPrinter-State.html#roundOpen",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Bash PrettyPrinter State",
          "module": "Language.Bash.PrettyPrinter.State",
          "name": "roundOpen",
          "normalized": "State PPState()",
          "package": "bash",
          "partial": "Open",
          "signature": "State PPState()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-PrettyPrinter-State.html#v:roundOpen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Bash.PrettyPrinter.State",
          "name": "separated",
          "package": "bash",
          "signature": "Bool",
          "source": "src/Language-Bash-PrettyPrinter-State.html#PPState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Bash PrettyPrinter State",
          "module": "Language.Bash.PrettyPrinter.State",
          "name": "separated",
          "package": "bash",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-PrettyPrinter-State.html#v:separated"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Bash.PrettyPrinter.State",
          "name": "string",
          "package": "bash",
          "signature": "Builder",
          "source": "src/Language-Bash-PrettyPrinter-State.html#PPState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Bash PrettyPrinter State",
          "module": "Language.Bash.PrettyPrinter.State",
          "name": "string",
          "package": "bash",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-PrettyPrinter-State.html#v:string"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Bash.PrettyPrinter.State",
          "name": "word",
          "package": "bash",
          "signature": "ByteString -\u003e State PPState ()",
          "source": "src/Language-Bash-PrettyPrinter-State.html#word",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Bash PrettyPrinter State",
          "module": "Language.Bash.PrettyPrinter.State",
          "name": "word",
          "normalized": "ByteString-\u003eState PPState()",
          "package": "bash",
          "signature": "ByteString-\u003eState PPState()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-PrettyPrinter-State.html#v:word"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Bash.PrettyPrinter.State",
          "name": "wordcat",
          "package": "bash",
          "signature": "[ByteString] -\u003e State PPState ()",
          "source": "src/Language-Bash-PrettyPrinter-State.html#wordcat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Bash PrettyPrinter State",
          "module": "Language.Bash.PrettyPrinter.State",
          "name": "wordcat",
          "normalized": "[ByteString]-\u003eState PPState()",
          "package": "bash",
          "signature": "[ByteString]-\u003eState PPState()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-PrettyPrinter-State.html#v:wordcat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePretty printer for Bash.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.Bash.PrettyPrinter",
          "name": "PrettyPrinter",
          "package": "bash",
          "source": "src/Language-Bash-PrettyPrinter.html",
          "type": "module"
        },
        "index": {
          "description": "Pretty printer for Bash",
          "hierarchy": "Language Bash PrettyPrinter",
          "module": "Language.Bash.PrettyPrinter",
          "name": "PrettyPrinter",
          "package": "bash",
          "partial": "Pretty Printer",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-PrettyPrinter.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Bash.PrettyPrinter",
          "name": "Annotation",
          "package": "bash",
          "source": "src/Language-Bash-PrettyPrinter.html#Annotation",
          "type": "class"
        },
        "index": {
          "hierarchy": "Language Bash PrettyPrinter",
          "module": "Language.Bash.PrettyPrinter",
          "name": "Annotation",
          "package": "bash",
          "partial": "Annotation",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-PrettyPrinter.html#t:Annotation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Bash.PrettyPrinter",
          "name": "PP",
          "package": "bash",
          "source": "src/Language-Bash-PrettyPrinter.html#PP",
          "type": "class"
        },
        "index": {
          "hierarchy": "Language Bash PrettyPrinter",
          "module": "Language.Bash.PrettyPrinter",
          "name": "PP",
          "package": "bash",
          "partial": "PP",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-PrettyPrinter.html#t:PP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Bash.PrettyPrinter",
          "name": "annotate",
          "package": "bash",
          "signature": "t -\u003e Statement t -\u003e State PPState ()",
          "source": "src/Language-Bash-PrettyPrinter.html#annotate",
          "type": "method"
        },
        "index": {
          "hierarchy": "Language Bash PrettyPrinter",
          "module": "Language.Bash.PrettyPrinter",
          "name": "annotate",
          "normalized": "a-\u003eStatement a-\u003eState PPState()",
          "package": "bash",
          "signature": "t-\u003eStatement t-\u003eState PPState()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-PrettyPrinter.html#v:annotate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Bash.PrettyPrinter",
          "name": "array_pp",
          "package": "bash",
          "signature": "(a -\u003e StateT PPState Identity b) -\u003e [a] -\u003e StateT PPState Identity ()",
          "source": "src/Language-Bash-PrettyPrinter.html#array_pp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Bash PrettyPrinter",
          "module": "Language.Bash.PrettyPrinter",
          "name": "array_pp",
          "normalized": "(a-\u003eStateT PPState Identity b)-\u003e[a]-\u003eStateT PPState Identity()",
          "package": "bash",
          "signature": "(a-\u003eStateT PPState Identity b)-\u003e[a]-\u003eStateT PPState Identity()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-PrettyPrinter.html#v:array_pp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Bash.PrettyPrinter",
          "name": "binGrp",
          "package": "bash",
          "signature": "Annotated t -\u003e StateT PPState Identity ()",
          "source": "src/Language-Bash-PrettyPrinter.html#binGrp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Bash PrettyPrinter",
          "module": "Language.Bash.PrettyPrinter",
          "name": "binGrp",
          "normalized": "Annotated a-\u003eStateT PPState Identity()",
          "package": "bash",
          "partial": "Grp",
          "signature": "Annotated t-\u003eStateT PPState Identity()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-PrettyPrinter.html#v:binGrp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Bash.PrettyPrinter",
          "name": "braces",
          "package": "bash",
          "signature": "ByteString -\u003e ByteString",
          "source": "src/Language-Bash-PrettyPrinter.html#braces",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Bash PrettyPrinter",
          "module": "Language.Bash.PrettyPrinter",
          "name": "braces",
          "normalized": "ByteString-\u003eByteString",
          "package": "bash",
          "signature": "ByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-PrettyPrinter.html#v:braces"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Bash.PrettyPrinter",
          "name": "braces0",
          "package": "bash",
          "signature": "ByteString -\u003e ByteString",
          "source": "src/Language-Bash-PrettyPrinter.html#braces0",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Bash PrettyPrinter",
          "module": "Language.Bash.PrettyPrinter",
          "name": "braces0",
          "normalized": "ByteString-\u003eByteString",
          "package": "bash",
          "signature": "ByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-PrettyPrinter.html#v:braces0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Bash.PrettyPrinter",
          "name": "braces_",
          "package": "bash",
          "signature": "ByteString -\u003e ByteString",
          "source": "src/Language-Bash-PrettyPrinter.html#braces_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Bash PrettyPrinter",
          "module": "Language.Bash.PrettyPrinter",
          "name": "braces_",
          "normalized": "ByteString-\u003eByteString",
          "package": "bash",
          "signature": "ByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-PrettyPrinter.html#v:braces_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Bash.PrettyPrinter",
          "name": "brackets",
          "package": "bash",
          "signature": "ByteString -\u003e ByteString",
          "source": "src/Language-Bash-PrettyPrinter.html#brackets",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Bash PrettyPrinter",
          "module": "Language.Bash.PrettyPrinter",
          "name": "brackets",
          "normalized": "ByteString-\u003eByteString",
          "package": "bash",
          "signature": "ByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-PrettyPrinter.html#v:brackets"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Bash.PrettyPrinter",
          "name": "breakline",
          "package": "bash",
          "signature": "t -\u003e State PPState ()",
          "source": "src/Language-Bash-PrettyPrinter.html#breakline",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Bash PrettyPrinter",
          "module": "Language.Bash.PrettyPrinter",
          "name": "breakline",
          "normalized": "a-\u003eState PPState()",
          "package": "bash",
          "signature": "t-\u003eState PPState()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-PrettyPrinter.html#v:breakline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Language.Bash.PrettyPrinter\",\"Language.Bash\"]",
          "name": "builder",
          "package": "bash",
          "signature": "t -\u003e Builder",
          "source": "src/Language-Bash-PrettyPrinter.html#builder",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bash/docs/Language-Bash-PrettyPrinter.html#v:builder\",\"http://hackage.haskell.org/package/bash/docs/Language-Bash.html#v:builder\"]"
        },
        "index": {
          "hierarchy": "Language Bash PrettyPrinter",
          "module": "Language.Bash.PrettyPrinter",
          "name": "builder",
          "normalized": "a-\u003eBuilder",
          "package": "bash",
          "signature": "t-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-PrettyPrinter.html#v:builder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Language.Bash.PrettyPrinter\",\"Language.Bash\"]",
          "name": "bytes",
          "package": "bash",
          "signature": "t -\u003e ByteString",
          "source": "src/Language-Bash-PrettyPrinter.html#bytes",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bash/docs/Language-Bash-PrettyPrinter.html#v:bytes\",\"http://hackage.haskell.org/package/bash/docs/Language-Bash.html#v:bytes\"]"
        },
        "index": {
          "hierarchy": "Language Bash PrettyPrinter",
          "module": "Language.Bash.PrettyPrinter",
          "name": "bytes",
          "normalized": "a-\u003eByteString",
          "package": "bash",
          "signature": "t-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-PrettyPrinter.html#v:bytes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Bash.PrettyPrinter",
          "name": "bytes_state",
          "package": "bash",
          "signature": "State PPState () -\u003e ByteString",
          "source": "src/Language-Bash-PrettyPrinter.html#bytes_state",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Bash PrettyPrinter",
          "module": "Language.Bash.PrettyPrinter",
          "name": "bytes_state",
          "normalized": "State PPState()-\u003eByteString",
          "package": "bash",
          "signature": "State PPState()-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-PrettyPrinter.html#v:bytes_state"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Bash.PrettyPrinter",
          "name": "case_clause",
          "package": "bash",
          "signature": "(t, t1) -\u003e StateT PPState Identity ()",
          "source": "src/Language-Bash-PrettyPrinter.html#case_clause",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Bash PrettyPrinter",
          "module": "Language.Bash.PrettyPrinter",
          "name": "case_clause",
          "normalized": "(a,a)-\u003eStateT PPState Identity()",
          "package": "bash",
          "signature": "(t,t)-\u003eStateT PPState Identity()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-PrettyPrinter.html#v:case_clause"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Bash.PrettyPrinter",
          "name": "escapeWords",
          "package": "bash",
          "signature": "ByteString -\u003e ByteString",
          "source": "src/Language-Bash-PrettyPrinter.html#escapeWords",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Bash PrettyPrinter",
          "module": "Language.Bash.PrettyPrinter",
          "name": "escapeWords",
          "normalized": "ByteString-\u003eByteString",
          "package": "bash",
          "partial": "Words",
          "signature": "ByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-PrettyPrinter.html#v:escapeWords"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Bash.PrettyPrinter",
          "name": "finalLineLength",
          "package": "bash",
          "signature": "ByteString -\u003e a",
          "source": "src/Language-Bash-PrettyPrinter.html#finalLineLength",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Bash PrettyPrinter",
          "module": "Language.Bash.PrettyPrinter",
          "name": "finalLineLength",
          "normalized": "ByteString-\u003ea",
          "package": "bash",
          "partial": "Line Length",
          "signature": "ByteString-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-PrettyPrinter.html#v:finalLineLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Bash.PrettyPrinter",
          "name": "hangMultiline",
          "package": "bash",
          "signature": "t -\u003e StateT PPState Identity ()",
          "source": "src/Language-Bash-PrettyPrinter.html#hangMultiline",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Bash PrettyPrinter",
          "module": "Language.Bash.PrettyPrinter",
          "name": "hangMultiline",
          "normalized": "a-\u003eStateT PPState Identity()",
          "package": "bash",
          "partial": "Multiline",
          "signature": "t-\u003eStateT PPState Identity()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-PrettyPrinter.html#v:hangMultiline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Bash.PrettyPrinter",
          "name": "hangcat",
          "package": "bash",
          "signature": "[ByteString] -\u003e State PPState ()",
          "source": "src/Language-Bash-PrettyPrinter.html#hangcat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Bash PrettyPrinter",
          "module": "Language.Bash.PrettyPrinter",
          "name": "hangcat",
          "normalized": "[ByteString]-\u003eState PPState()",
          "package": "bash",
          "signature": "[ByteString]-\u003eState PPState()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-PrettyPrinter.html#v:hangcat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Bash.PrettyPrinter",
          "name": "identpart",
          "package": "bash",
          "signature": "VarName -\u003e ByteString",
          "source": "src/Language-Bash-PrettyPrinter.html#identpart",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Bash PrettyPrinter",
          "module": "Language.Bash.PrettyPrinter",
          "name": "identpart",
          "normalized": "VarName-\u003eByteString",
          "package": "bash",
          "signature": "VarName-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-PrettyPrinter.html#v:identpart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Bash.PrettyPrinter",
          "name": "inlineEvalPrinter",
          "package": "bash",
          "signature": "ByteString -\u003e ByteString -\u003e t -\u003e StateT PPState Identity ()",
          "source": "src/Language-Bash-PrettyPrinter.html#inlineEvalPrinter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Bash PrettyPrinter",
          "module": "Language.Bash.PrettyPrinter",
          "name": "inlineEvalPrinter",
          "normalized": "ByteString-\u003eByteString-\u003ea-\u003eStateT PPState Identity()",
          "package": "bash",
          "partial": "Eval Printer",
          "signature": "ByteString-\u003eByteString-\u003et-\u003eStateT PPState Identity()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-PrettyPrinter.html#v:inlineEvalPrinter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Bash.PrettyPrinter",
          "name": "isAndAnd",
          "package": "bash",
          "signature": "Annotated t -\u003e Bool",
          "source": "src/Language-Bash-PrettyPrinter.html#isAndAnd",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Bash PrettyPrinter",
          "module": "Language.Bash.PrettyPrinter",
          "name": "isAndAnd",
          "normalized": "Annotated a-\u003eBool",
          "package": "bash",
          "partial": "And And",
          "signature": "Annotated t-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-PrettyPrinter.html#v:isAndAnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Bash.PrettyPrinter",
          "name": "isOrOr",
          "package": "bash",
          "signature": "Annotated t -\u003e Bool",
          "source": "src/Language-Bash-PrettyPrinter.html#isOrOr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Bash PrettyPrinter",
          "module": "Language.Bash.PrettyPrinter",
          "name": "isOrOr",
          "normalized": "Annotated a-\u003eBool",
          "package": "bash",
          "partial": "Or Or",
          "signature": "Annotated t-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-PrettyPrinter.html#v:isOrOr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Bash.PrettyPrinter",
          "name": "isPipe",
          "package": "bash",
          "signature": "Annotated t -\u003e Bool",
          "source": "src/Language-Bash-PrettyPrinter.html#isPipe",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Bash PrettyPrinter",
          "module": "Language.Bash.PrettyPrinter",
          "name": "isPipe",
          "normalized": "Annotated a-\u003eBool",
          "package": "bash",
          "partial": "Pipe",
          "signature": "Annotated t-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-PrettyPrinter.html#v:isPipe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Bash.PrettyPrinter",
          "name": "isSimple",
          "package": "bash",
          "signature": "Annotated t -\u003e Bool",
          "source": "src/Language-Bash-PrettyPrinter.html#isSimple",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Bash PrettyPrinter",
          "module": "Language.Bash.PrettyPrinter",
          "name": "isSimple",
          "normalized": "Annotated a-\u003eBool",
          "package": "bash",
          "partial": "Simple",
          "signature": "Annotated t-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-PrettyPrinter.html#v:isSimple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Bash.PrettyPrinter",
          "name": "keyset",
          "package": "bash",
          "signature": "(t, t1) -\u003e State PPState ()",
          "source": "src/Language-Bash-PrettyPrinter.html#keyset",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Bash PrettyPrinter",
          "module": "Language.Bash.PrettyPrinter",
          "name": "keyset",
          "normalized": "(a,a)-\u003eState PPState()",
          "package": "bash",
          "signature": "(t,t)-\u003eState PPState()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-PrettyPrinter.html#v:keyset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Bash.PrettyPrinter",
          "name": "maxLineLength",
          "package": "bash",
          "signature": "ByteString -\u003e c",
          "source": "src/Language-Bash-PrettyPrinter.html#maxLineLength",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Bash PrettyPrinter",
          "module": "Language.Bash.PrettyPrinter",
          "name": "maxLineLength",
          "normalized": "ByteString-\u003ea",
          "package": "bash",
          "partial": "Line Length",
          "signature": "ByteString-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-PrettyPrinter.html#v:maxLineLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Bash.PrettyPrinter",
          "name": "pp",
          "package": "bash",
          "signature": "t -\u003e State PPState ()",
          "source": "src/Language-Bash-PrettyPrinter.html#pp",
          "type": "method"
        },
        "index": {
          "hierarchy": "Language Bash PrettyPrinter",
          "module": "Language.Bash.PrettyPrinter",
          "name": "pp",
          "normalized": "a-\u003eState PPState()",
          "package": "bash",
          "signature": "t-\u003eState PPState()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-PrettyPrinter.html#v:pp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Bash.PrettyPrinter",
          "name": "quote",
          "package": "bash",
          "signature": "ByteString -\u003e ByteString",
          "source": "src/Language-Bash-PrettyPrinter.html#quote",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Bash PrettyPrinter",
          "module": "Language.Bash.PrettyPrinter",
          "name": "quote",
          "normalized": "ByteString-\u003eByteString",
          "package": "bash",
          "signature": "ByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-PrettyPrinter.html#v:quote"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Bash.PrettyPrinter",
          "name": "redirectGrp",
          "package": "bash",
          "signature": "Annotated t -\u003e StateT PPState Identity ()",
          "source": "src/Language-Bash-PrettyPrinter.html#redirectGrp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Bash PrettyPrinter",
          "module": "Language.Bash.PrettyPrinter",
          "name": "redirectGrp",
          "normalized": "Annotated a-\u003eStateT PPState Identity()",
          "package": "bash",
          "partial": "Grp",
          "signature": "Annotated t-\u003eStateT PPState Identity()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-PrettyPrinter.html#v:redirectGrp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Bash.PrettyPrinter",
          "name": "render_redirect",
          "package": "bash",
          "signature": "Redirection -\u003e t -\u003e Either t1 t2 -\u003e ByteString",
          "source": "src/Language-Bash-PrettyPrinter.html#render_redirect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Bash PrettyPrinter",
          "module": "Language.Bash.PrettyPrinter",
          "name": "render_redirect",
          "normalized": "Redirection-\u003ea-\u003eEither a a-\u003eByteString",
          "package": "bash",
          "signature": "Redirection-\u003et-\u003eEither t t-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-PrettyPrinter.html#v:render_redirect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Bash.PrettyPrinter",
          "name": "trimPrinter",
          "package": "bash",
          "signature": "Trim -\u003e ByteString",
          "source": "src/Language-Bash-PrettyPrinter.html#trimPrinter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Bash PrettyPrinter",
          "module": "Language.Bash.PrettyPrinter",
          "name": "trimPrinter",
          "normalized": "Trim-\u003eByteString",
          "package": "bash",
          "partial": "Printer",
          "signature": "Trim-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-PrettyPrinter.html#v:trimPrinter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUtilities for turning statements into full scripts.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.Bash.Script",
          "name": "Script",
          "package": "bash",
          "source": "src/Language-Bash-Script.html",
          "type": "module"
        },
        "index": {
          "description": "Utilities for turning statements into full scripts",
          "hierarchy": "Language Bash Script",
          "module": "Language.Bash.Script",
          "name": "Script",
          "package": "bash",
          "partial": "Script",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-Script.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe noop dance -- annotate a \u003ccode\u003e\u003ca\u003eNoOp\u003c/a\u003e\u003c/code\u003e with a statement, essentially as a\n    type coercion.\n\u003c/p\u003e",
          "module": "Language.Bash.Script",
          "name": "dance",
          "package": "bash",
          "signature": "Statement t -\u003e Annotated (Statements t t')",
          "source": "src/Language-Bash-Script.html#dance",
          "type": "function"
        },
        "index": {
          "description": "The noop dance annotate NoOp with statement essentially as type coercion",
          "hierarchy": "Language Bash Script",
          "module": "Language.Bash.Script",
          "name": "dance",
          "normalized": "Statement a-\u003eAnnotated(Statements a b)",
          "package": "bash",
          "signature": "Statement t-\u003eAnnotated(Statements t t')",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-Script.html#v:dance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eScan \u003ccode\u003e$0\u003c/code\u003e for the token before running, correctly producing monoidal\n    annotations. The function argument provides an annotation for the \u003ccode\u003efgrep\u003c/code\u003e\n    check generated to search for the token. (\u003ccode\u003econst mempty\u003c/code\u003e would be\n    appropriate in most cases.)\n\u003c/p\u003e",
          "module": "Language.Bash.Script",
          "name": "mtokenCheck",
          "package": "bash",
          "signature": "ByteString -\u003e (Statement t -\u003e t) -\u003e Statement t -\u003e Statement t",
          "source": "src/Language-Bash-Script.html#mtokenCheck",
          "type": "function"
        },
        "index": {
          "description": "Scan for the token before running correctly producing monoidal annotations The function argument provides an annotation for the fgrep check generated to search for the token const mempty would be appropriate in most cases",
          "hierarchy": "Language Bash Script",
          "module": "Language.Bash.Script",
          "name": "mtokenCheck",
          "normalized": "ByteString-\u003e(Statement a-\u003ea)-\u003eStatement a-\u003eStatement a",
          "package": "bash",
          "partial": "Check",
          "signature": "ByteString-\u003e(Statement t-\u003et)-\u003eStatement t-\u003eStatement t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-Script.html#v:mtokenCheck"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Bash.Script",
          "name": "noop",
          "package": "bash",
          "signature": "Statement any",
          "source": "src/Language-Bash-Script.html#noop",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Bash Script",
          "module": "Language.Bash.Script",
          "name": "noop",
          "package": "bash",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-Script.html#v:noop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProduce a script beginning with \u003ccode\u003e#!/bin/bash\u003c/code\u003e and a safe set statement.\n\u003c/p\u003e",
          "module": "[\"Language.Bash.Script\",\"Language.Bash\"]",
          "name": "script",
          "package": "bash",
          "signature": "Statement t -\u003e Builder",
          "source": "src/Language-Bash-Script.html#script",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bash/docs/Language-Bash-Script.html#v:script\",\"http://hackage.haskell.org/package/bash/docs/Language-Bash.html#v:script\"]"
        },
        "index": {
          "description": "Produce script beginning with bin bash and safe set statement",
          "hierarchy": "Language Bash Script",
          "module": "Language.Bash.Script",
          "name": "script",
          "normalized": "Statement a-\u003eBuilder",
          "package": "bash",
          "signature": "Statement t-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-Script.html#v:script"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProduce a script beginning with \u003ccode\u003e#!/bin/bash\u003c/code\u003e and some (optional)\n    documentation. Cause the script to be scanned for SHA-1 hash of the setup\n    (first statement argument) and main (second statement argument) before\n    running the safe set statement and running the second argument.\n\u003c/p\u003e",
          "module": "[\"Language.Bash.Script\",\"Language.Bash\"]",
          "name": "script_sha1",
          "package": "bash",
          "signature": "ByteString -\u003e Statement t -\u003e Statement t' -\u003e Builder",
          "source": "src/Language-Bash-Script.html#script_sha1",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bash/docs/Language-Bash-Script.html#v:script_sha1\",\"http://hackage.haskell.org/package/bash/docs/Language-Bash.html#v:script_sha1\"]"
        },
        "index": {
          "description": "Produce script beginning with bin bash and some optional documentation Cause the script to be scanned for SHA-1 hash of the setup first statement argument and main second statement argument before running the safe set statement and running the second argument",
          "hierarchy": "Language Bash Script",
          "module": "Language.Bash.Script",
          "name": "script_sha1",
          "normalized": "ByteString-\u003eStatement a-\u003eStatement b-\u003eBuilder",
          "package": "bash",
          "signature": "ByteString-\u003eStatement t-\u003eStatement t'-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-Script.html#v:script_sha1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Bash.Script",
          "name": "sha1",
          "package": "bash",
          "signature": "ByteString -\u003e ByteString",
          "source": "src/Language-Bash-Script.html#sha1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Bash Script",
          "module": "Language.Bash.Script",
          "name": "sha1",
          "normalized": "ByteString-\u003eByteString",
          "package": "bash",
          "signature": "ByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-Script.html#v:sha1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eScan \u003ccode\u003e$0\u003c/code\u003e the SHA1 of the statement before running.\n\u003c/p\u003e",
          "module": "Language.Bash.Script",
          "name": "sha1Check",
          "package": "bash",
          "signature": "Statement t -\u003e Statement (Statements t t')",
          "source": "src/Language-Bash-Script.html#sha1Check",
          "type": "function"
        },
        "index": {
          "description": "Scan the SHA1 of the statement before running",
          "hierarchy": "Language Bash Script",
          "module": "Language.Bash.Script",
          "name": "sha1Check",
          "normalized": "Statement a-\u003eStatement(Statements a b)",
          "package": "bash",
          "partial": "Check",
          "signature": "Statement t-\u003eStatement(Statements t t')",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-Script.html#v:sha1Check"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eScan \u003ccode\u003e$0\u003c/code\u003e for the token before running, producing a statement annotated\n    with the initial statement. This is a bit clumsy but is used internally.\n\u003c/p\u003e",
          "module": "Language.Bash.Script",
          "name": "tokenCheck",
          "package": "bash",
          "signature": "ByteString -\u003e Statement t -\u003e Statement (Statements t t')",
          "source": "src/Language-Bash-Script.html#tokenCheck",
          "type": "function"
        },
        "index": {
          "description": "Scan for the token before running producing statement annotated with the initial statement This is bit clumsy but is used internally",
          "hierarchy": "Language Bash Script",
          "module": "Language.Bash.Script",
          "name": "tokenCheck",
          "normalized": "ByteString-\u003eStatement a-\u003eStatement(Statements a b)",
          "package": "bash",
          "partial": "Check",
          "signature": "ByteString-\u003eStatement t-\u003eStatement(Statements t t')",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-Script.html#v:tokenCheck"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Bash.Script",
          "name": "tokenFGREPq",
          "package": "bash",
          "signature": "ByteString -\u003e Statement t",
          "source": "src/Language-Bash-Script.html#tokenFGREPq",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Bash Script",
          "module": "Language.Bash.Script",
          "name": "tokenFGREPq",
          "normalized": "ByteString-\u003eStatement a",
          "package": "bash",
          "partial": "FGREPq",
          "signature": "ByteString-\u003eStatement t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-Script.html#v:tokenFGREPq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBash statements and expressions. The statement tree is a functor,\n    supporting arbitrary annotations; this is intended to support analysis of\n    effects and privilege levels as well as commenting and arbitrary code\n    inclusion.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.Bash.Syntax",
          "name": "Syntax",
          "package": "bash",
          "source": "src/Language-Bash-Syntax.html",
          "type": "module"
        },
        "index": {
          "description": "Bash statements and expressions The statement tree is functor supporting arbitrary annotations this is intended to support analysis of effects and privilege levels as well as commenting and arbitrary code inclusion",
          "hierarchy": "Language Bash Syntax",
          "module": "Language.Bash.Syntax",
          "name": "Syntax",
          "package": "bash",
          "partial": "Syntax",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eAnnotated\u003c/a\u003e\u003c/code\u003e type captures the annotatedness of a tree of Bash\n    statements. It is \u003ccode\u003e\u003ca\u003eFoldable\u003c/a\u003e\u003c/code\u003e and a \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.Bash.Syntax",
          "name": "Annotated",
          "package": "bash",
          "source": "src/Language-Bash-Syntax.html#Annotated",
          "type": "data"
        },
        "index": {
          "description": "The Annotated type captures the annotatedness of tree of Bash statements It is Foldable and Functor",
          "hierarchy": "Language Bash Syntax",
          "module": "Language.Bash.Syntax",
          "name": "Annotated",
          "package": "bash",
          "partial": "Annotated",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#t:Annotated"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Bash.Syntax",
          "name": "Assignment",
          "package": "bash",
          "source": "src/Language-Bash-Syntax.html#Assignment",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language Bash Syntax",
          "module": "Language.Bash.Syntax",
          "name": "Assignment",
          "package": "bash",
          "partial": "Assignment",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#t:Assignment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnused at present.\n\u003c/p\u003e",
          "module": "Language.Bash.Syntax",
          "name": "ConditionalExpression",
          "package": "bash",
          "source": "src/Language-Bash-Syntax.html#ConditionalExpression",
          "type": "data"
        },
        "index": {
          "description": "Unused at present",
          "hierarchy": "Language Bash Syntax",
          "module": "Language.Bash.Syntax",
          "name": "ConditionalExpression",
          "package": "bash",
          "partial": "Conditional Expression",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#t:ConditionalExpression"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of Bash expressions, handling many kinds of variable reference as\n    well as eval and process substitution. It is \u003ccode\u003e\u003ca\u003eFoldable\u003c/a\u003e\u003c/code\u003e and a \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.Bash.Syntax",
          "name": "Expression",
          "package": "bash",
          "source": "src/Language-Bash-Syntax.html#Expression",
          "type": "data"
        },
        "index": {
          "description": "The type of Bash expressions handling many kinds of variable reference as well as eval and process substitution It is Foldable and Functor",
          "hierarchy": "Language Bash Syntax",
          "module": "Language.Bash.Syntax",
          "name": "Expression",
          "package": "bash",
          "partial": "Expression",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#t:Expression"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA file descriptor in Bash is simply a number between 0 and 255.\n\u003c/p\u003e",
          "module": "Language.Bash.Syntax",
          "name": "FileDescriptor",
          "package": "bash",
          "source": "src/Language-Bash-Syntax.html#FileDescriptor",
          "type": "newtype"
        },
        "index": {
          "description": "file descriptor in Bash is simply number between and",
          "hierarchy": "Language Bash Syntax",
          "module": "Language.Bash.Syntax",
          "name": "FileDescriptor",
          "package": "bash",
          "partial": "File Descriptor",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#t:FileDescriptor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBash functions can have surprising names. Once the word containing the\n    name of the function has been identified by the Bash parser, the only\n    constraint as of this writing is that it not be all digits and contain\n    neither quotes nor dollar signs. Thus the following are all callable\n    functions:\n\u003c/p\u003e\u003cpre\u003e  function http://duckduckgo.com { curl -sSfL http://duckduckgo.com?q=\"$1\" ;}\n  function 123.0 { echo 123.0 ;}\n  function + { echo \"$@\" | sed 's/ / + /g' | bc ;}\n\u003c/pre\u003e\u003cp\u003eYet a function name may only be parsed if its surroundings constitute a\n    valid function declaration. So we are not able to declare these functions:\n\u003c/p\u003e\u003cpre\u003e  function par()ens { echo '(' \"$@\" ')' ;}\n  function (parens) { echo '(' \"$@\" ')' ;}\n\u003c/pre\u003e\u003cp\u003e(The parser thinks the parens are there to separate the function name from\n    the function body.)\n\u003c/p\u003e\u003cp\u003eSome functions can be declared but not called. For example:\n\u003c/p\u003e\u003cpre\u003e  function for { echo for ;}\n  function x=y { echo x is y ;}\n\u003c/pre\u003e\u003cp\u003eCalling the former results in a syntax error. A call to the latter is\n    parsed as an assignment.\n\u003c/p\u003e\u003cp\u003eIt is possible to override important builtins with function declarations.\n    For example:\n\u003c/p\u003e\u003cpre\u003e  function set { echo Haha! ;}\n  function declare { echo Surprise! ;}\n\u003c/pre\u003e\u003cp\u003eOverall, Bash function names are quite flexible but inconsistent and\n    potentially a cause of grave errors.\n\u003c/p\u003e",
          "module": "Language.Bash.Syntax",
          "name": "FuncName",
          "package": "bash",
          "source": "src/Language-Bash-Syntax.html#FuncName",
          "type": "data"
        },
        "index": {
          "description": "Bash functions can have surprising names Once the word containing the name of the function has been identified by the Bash parser the only constraint as of this writing is that it not be all digits and contain neither quotes nor dollar signs Thus the following are all callable functions function http duckduckgo.com curl sSfL http duckduckgo.com function echo function echo sed bc Yet function name may only be parsed if its surroundings constitute valid function declaration So we are not able to declare these functions function par ens echo function parens echo The parser thinks the parens are there to separate the function name from the function body Some functions can be declared but not called For example function for echo for function echo is Calling the former results in syntax error call to the latter is parsed as an assignment It is possible to override important builtins with function declarations For example function set echo Haha function declare echo Surprise Overall Bash function names are quite flexible but inconsistent and potentially cause of grave errors",
          "hierarchy": "Language Bash Syntax",
          "module": "Language.Bash.Syntax",
          "name": "FuncName",
          "package": "bash",
          "partial": "Func Name",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#t:FuncName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of legal Bash identifiers, strings beginning with letters or \u003ccode\u003e_\u003c/code\u003e\n    and containing letters, \u003ccode\u003e_\u003c/code\u003e and digits.\n\u003c/p\u003e",
          "module": "Language.Bash.Syntax",
          "name": "Identifier",
          "package": "bash",
          "source": "src/Language-Bash-Syntax.html#Identifier",
          "type": "newtype"
        },
        "index": {
          "description": "The type of legal Bash identifiers strings beginning with letters or and containing letters and digits",
          "hierarchy": "Language Bash Syntax",
          "module": "Language.Bash.Syntax",
          "name": "Identifier",
          "package": "bash",
          "partial": "Identifier",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#t:Identifier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRedirection \"directions\".\n\u003c/p\u003e",
          "module": "Language.Bash.Syntax",
          "name": "Redirection",
          "package": "bash",
          "source": "src/Language-Bash-Syntax.html#Redirection",
          "type": "data"
        },
        "index": {
          "description": "Redirection directions",
          "hierarchy": "Language Bash Syntax",
          "module": "Language.Bash.Syntax",
          "name": "Redirection",
          "package": "bash",
          "partial": "Redirection",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#t:Redirection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe names of special variables, with otherwise illegal identifiers, are\n    represented by this type.\n\u003c/p\u003e",
          "module": "Language.Bash.Syntax",
          "name": "SpecialVar",
          "package": "bash",
          "source": "src/Language-Bash-Syntax.html#SpecialVar",
          "type": "data"
        },
        "index": {
          "description": "The names of special variables with otherwise illegal identifiers are represented by this type",
          "hierarchy": "Language Bash Syntax",
          "module": "Language.Bash.Syntax",
          "name": "SpecialVar",
          "package": "bash",
          "partial": "Special Var",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#t:SpecialVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eStatement\u003c/a\u003e\u003c/code\u003e type captures the different kind of statements that may\n    exist in a Bash statement tree. It is mutually recursive with \u003ccode\u003e\u003ca\u003eAnnotated\u003c/a\u003e\u003c/code\u003e.\n    It is a \u003ccode\u003e\u003ca\u003eFoldable\u003c/a\u003e\u003c/code\u003e and a \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.Bash.Syntax",
          "name": "Statement",
          "package": "bash",
          "source": "src/Language-Bash-Syntax.html#Statement",
          "type": "data"
        },
        "index": {
          "description": "The Statement type captures the different kind of statements that may exist in Bash statement tree It is mutually recursive with Annotated It is Foldable and Functor",
          "hierarchy": "Language Bash Syntax",
          "module": "Language.Bash.Syntax",
          "name": "Statement",
          "package": "bash",
          "partial": "Statement",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#t:Statement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Bash.Syntax",
          "name": "Trim",
          "package": "bash",
          "source": "src/Language-Bash-Syntax.html#Trim",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language Bash Syntax",
          "module": "Language.Bash.Syntax",
          "name": "Trim",
          "package": "bash",
          "partial": "Trim",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#t:Trim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Bash.Syntax",
          "name": "VarName",
          "package": "bash",
          "source": "src/Language-Bash-Syntax.html#VarName",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language Bash Syntax",
          "module": "Language.Bash.Syntax",
          "name": "VarName",
          "package": "bash",
          "partial": "Var Name",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#t:VarName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Language.Bash.Syntax\",\"Language.Bash\"]",
          "name": "ARGVElements",
          "package": "bash",
          "signature": "ARGVElements",
          "source": "src/Language-Bash-Syntax.html#Expression",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:ARGVElements\",\"http://hackage.haskell.org/package/bash/docs/Language-Bash.html#v:ARGVElements\"]"
        },
        "index": {
          "hierarchy": "Language Bash Syntax",
          "module": "Language.Bash.Syntax",
          "name": "ARGVElements",
          "package": "bash",
          "partial": "ARGVElements",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:ARGVElements"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Language.Bash.Syntax\",\"Language.Bash\"]",
          "name": "ARGVLength",
          "package": "bash",
          "signature": "ARGVLength",
          "source": "src/Language-Bash-Syntax.html#Expression",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:ARGVLength\",\"http://hackage.haskell.org/package/bash/docs/Language-Bash.html#v:ARGVLength\"]"
        },
        "index": {
          "hierarchy": "Language Bash Syntax",
          "module": "Language.Bash.Syntax",
          "name": "ARGVLength",
          "package": "bash",
          "partial": "ARGVLength",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:ARGVLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Bash.Syntax",
          "name": "And",
          "package": "bash",
          "signature": "And (Expression t) (Expression t)",
          "source": "src/Language-Bash-Syntax.html#ConditionalExpression",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Bash Syntax",
          "module": "Language.Bash.Syntax",
          "name": "And",
          "package": "bash",
          "partial": "And",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:And"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Language.Bash.Syntax\",\"Language.Bash\"]",
          "name": "AndAnd",
          "package": "bash",
          "signature": "AndAnd (Annotated t) (Annotated t)",
          "source": "src/Language-Bash-Syntax.html#Statement",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:AndAnd\",\"http://hackage.haskell.org/package/bash/docs/Language-Bash.html#v:AndAnd\"]"
        },
        "index": {
          "hierarchy": "Language Bash Syntax",
          "module": "Language.Bash.Syntax",
          "name": "AndAnd",
          "package": "bash",
          "partial": "And And",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:AndAnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Language.Bash.Syntax\",\"Language.Bash\"]",
          "name": "Annotated",
          "package": "bash",
          "signature": "Annotated",
          "source": "src/Language-Bash-Syntax.html#Annotated",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:Annotated\",\"http://hackage.haskell.org/package/bash/docs/Language-Bash.html#v:Annotated\"]"
        },
        "index": {
          "hierarchy": "Language Bash Syntax",
          "module": "Language.Bash.Syntax",
          "name": "Annotated",
          "package": "bash",
          "partial": "Annotated",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:Annotated"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAppending output, \u003ccode\u003e\u003e\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Language.Bash.Syntax\",\"Language.Bash\"]",
          "name": "Append",
          "package": "bash",
          "signature": "Append",
          "source": "src/Language-Bash-Syntax.html#Redirection",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:Append\",\"http://hackage.haskell.org/package/bash/docs/Language-Bash.html#v:Append\"]"
        },
        "index": {
          "description": "Appending output",
          "hierarchy": "Language Bash Syntax",
          "module": "Language.Bash.Syntax",
          "name": "Append",
          "package": "bash",
          "partial": "Append",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:Append"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Language.Bash.Syntax\",\"Language.Bash\"]",
          "name": "Array",
          "package": "bash",
          "signature": "Array Identifier [Expression t]",
          "source": "src/Language-Bash-Syntax.html#Assignment",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:Array\",\"http://hackage.haskell.org/package/bash/docs/Language-Bash.html#v:Array\"]"
        },
        "index": {
          "hierarchy": "Language Bash Syntax",
          "module": "Language.Bash.Syntax",
          "name": "Array",
          "normalized": "Array Identifier[Expression a]",
          "package": "bash",
          "partial": "Array",
          "signature": "Array Identifier[Expression t]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:Array"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Language.Bash.Syntax\",\"Language.Bash\"]",
          "name": "ArrayLength",
          "package": "bash",
          "signature": "ArrayLength Identifier",
          "source": "src/Language-Bash-Syntax.html#Expression",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:ArrayLength\",\"http://hackage.haskell.org/package/bash/docs/Language-Bash.html#v:ArrayLength\"]"
        },
        "index": {
          "hierarchy": "Language Bash Syntax",
          "module": "Language.Bash.Syntax",
          "name": "ArrayLength",
          "package": "bash",
          "partial": "Array Length",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:ArrayLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Language.Bash.Syntax\",\"Language.Bash\"]",
          "name": "ArrayUpdate",
          "package": "bash",
          "signature": "ArrayUpdate Identifier (Expression t) (Expression t)",
          "source": "src/Language-Bash-Syntax.html#Statement",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:ArrayUpdate\",\"http://hackage.haskell.org/package/bash/docs/Language-Bash.html#v:ArrayUpdate\"]"
        },
        "index": {
          "hierarchy": "Language Bash Syntax",
          "module": "Language.Bash.Syntax",
          "name": "ArrayUpdate",
          "package": "bash",
          "partial": "Array Update",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:ArrayUpdate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Language.Bash.Syntax\",\"Language.Bash\"]",
          "name": "Assign",
          "package": "bash",
          "signature": "Assign (Assignment t)",
          "source": "src/Language-Bash-Syntax.html#Statement",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:Assign\",\"http://hackage.haskell.org/package/bash/docs/Language-Bash.html#v:Assign\"]"
        },
        "index": {
          "hierarchy": "Language Bash Syntax",
          "module": "Language.Bash.Syntax",
          "name": "Assign",
          "package": "bash",
          "partial": "Assign",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:Assign"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Language.Bash.Syntax\",\"Language.Bash\"]",
          "name": "Asterisk",
          "package": "bash",
          "signature": "Asterisk",
          "source": "src/Language-Bash-Syntax.html#Expression",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:Asterisk\",\"http://hackage.haskell.org/package/bash/docs/Language-Bash.html#v:Asterisk\"]"
        },
        "index": {
          "hierarchy": "Language Bash Syntax",
          "module": "Language.Bash.Syntax",
          "name": "Asterisk",
          "package": "bash",
          "partial": "Asterisk",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:Asterisk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Language.Bash.Syntax\",\"Language.Bash\"]",
          "name": "Background",
          "package": "bash",
          "signature": "Background (Annotated t) (Annotated t)",
          "source": "src/Language-Bash-Syntax.html#Statement",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:Background\",\"http://hackage.haskell.org/package/bash/docs/Language-Bash.html#v:Background\"]"
        },
        "index": {
          "hierarchy": "Language Bash Syntax",
          "module": "Language.Bash.Syntax",
          "name": "Background",
          "package": "bash",
          "partial": "Background",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:Background"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Language.Bash.Syntax\",\"Language.Bash\"]",
          "name": "Bang",
          "package": "bash",
          "signature": "Bang (Annotated t)",
          "source": "src/Language-Bash-Syntax.html#Statement",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:Bang\",\"http://hackage.haskell.org/package/bash/docs/Language-Bash.html#v:Bang\"]"
        },
        "index": {
          "hierarchy": "Language Bash Syntax",
          "module": "Language.Bash.Syntax",
          "name": "Bang",
          "package": "bash",
          "partial": "Bang",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:Bang"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Language.Bash.Syntax\",\"Language.Bash\"]",
          "name": "Case",
          "package": "bash",
          "signature": "Case (Expression t) [(Expression t, Annotated t)]",
          "source": "src/Language-Bash-Syntax.html#Statement",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:Case\",\"http://hackage.haskell.org/package/bash/docs/Language-Bash.html#v:Case\"]"
        },
        "index": {
          "hierarchy": "Language Bash Syntax",
          "module": "Language.Bash.Syntax",
          "name": "Case",
          "normalized": "Case(Expression a)[(Expression a,Annotated a)]",
          "package": "bash",
          "partial": "Case",
          "signature": "Case(Expression t)[(Expression t,Annotated t)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:Case"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Language.Bash.Syntax\",\"Language.Bash\"]",
          "name": "Concat",
          "package": "bash",
          "signature": "Concat (Expression t) (Expression t)",
          "source": "src/Language-Bash-Syntax.html#Expression",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:Concat\",\"http://hackage.haskell.org/package/bash/docs/Language-Bash.html#v:Concat\"]"
        },
        "index": {
          "hierarchy": "Language Bash Syntax",
          "module": "Language.Bash.Syntax",
          "name": "Concat",
          "package": "bash",
          "partial": "Concat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:Concat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Language.Bash.Syntax\",\"Language.Bash\"]",
          "name": "Declare",
          "package": "bash",
          "signature": "Declare (Assignment t)",
          "source": "src/Language-Bash-Syntax.html#Statement",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:Declare\",\"http://hackage.haskell.org/package/bash/docs/Language-Bash.html#v:Declare\"]"
        },
        "index": {
          "hierarchy": "Language Bash Syntax",
          "module": "Language.Bash.Syntax",
          "name": "Declare",
          "package": "bash",
          "partial": "Declare",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:Declare"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Language.Bash.Syntax\",\"Language.Bash\"]",
          "name": "Dict",
          "package": "bash",
          "signature": "Dict Identifier [(Expression t, Expression t)]",
          "source": "src/Language-Bash-Syntax.html#Assignment",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:Dict\",\"http://hackage.haskell.org/package/bash/docs/Language-Bash.html#v:Dict\"]"
        },
        "index": {
          "hierarchy": "Language Bash Syntax",
          "module": "Language.Bash.Syntax",
          "name": "Dict",
          "normalized": "Dict Identifier[(Expression a,Expression a)]",
          "package": "bash",
          "partial": "Dict",
          "signature": "Dict Identifier[(Expression t,Expression t)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:Dict"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Language.Bash.Syntax\",\"Language.Bash\"]",
          "name": "DictUpdate",
          "package": "bash",
          "signature": "DictUpdate Identifier (Expression t) (Expression t)",
          "source": "src/Language-Bash-Syntax.html#Statement",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:DictUpdate\",\"http://hackage.haskell.org/package/bash/docs/Language-Bash.html#v:DictUpdate\"]"
        },
        "index": {
          "hierarchy": "Language Bash Syntax",
          "module": "Language.Bash.Syntax",
          "name": "DictUpdate",
          "package": "bash",
          "partial": "Dict Update",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:DictUpdate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Bash.Syntax",
          "name": "Dollar0",
          "package": "bash",
          "signature": "Dollar0",
          "source": "src/Language-Bash-Syntax.html#SpecialVar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Bash Syntax",
          "module": "Language.Bash.Syntax",
          "name": "Dollar0",
          "package": "bash",
          "partial": "Dollar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:Dollar0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Bash.Syntax",
          "name": "Dollar1",
          "package": "bash",
          "signature": "Dollar1",
          "source": "src/Language-Bash-Syntax.html#SpecialVar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Bash Syntax",
          "module": "Language.Bash.Syntax",
          "name": "Dollar1",
          "package": "bash",
          "partial": "Dollar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:Dollar1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Bash.Syntax",
          "name": "Dollar2",
          "package": "bash",
          "signature": "Dollar2",
          "source": "src/Language-Bash-Syntax.html#SpecialVar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Bash Syntax",
          "module": "Language.Bash.Syntax",
          "name": "Dollar2",
          "package": "bash",
          "partial": "Dollar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:Dollar2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Bash.Syntax",
          "name": "Dollar3",
          "package": "bash",
          "signature": "Dollar3",
          "source": "src/Language-Bash-Syntax.html#SpecialVar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Bash Syntax",
          "module": "Language.Bash.Syntax",
          "name": "Dollar3",
          "package": "bash",
          "partial": "Dollar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:Dollar3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Bash.Syntax",
          "name": "Dollar4",
          "package": "bash",
          "signature": "Dollar4",
          "source": "src/Language-Bash-Syntax.html#SpecialVar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Bash Syntax",
          "module": "Language.Bash.Syntax",
          "name": "Dollar4",
          "package": "bash",
          "partial": "Dollar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:Dollar4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Bash.Syntax",
          "name": "Dollar5",
          "package": "bash",
          "signature": "Dollar5",
          "source": "src/Language-Bash-Syntax.html#SpecialVar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Bash Syntax",
          "module": "Language.Bash.Syntax",
          "name": "Dollar5",
          "package": "bash",
          "partial": "Dollar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:Dollar5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Bash.Syntax",
          "name": "Dollar6",
          "package": "bash",
          "signature": "Dollar6",
          "source": "src/Language-Bash-Syntax.html#SpecialVar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Bash Syntax",
          "module": "Language.Bash.Syntax",
          "name": "Dollar6",
          "package": "bash",
          "partial": "Dollar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:Dollar6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Bash.Syntax",
          "name": "Dollar7",
          "package": "bash",
          "signature": "Dollar7",
          "source": "src/Language-Bash-Syntax.html#SpecialVar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Bash Syntax",
          "module": "Language.Bash.Syntax",
          "name": "Dollar7",
          "package": "bash",
          "partial": "Dollar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:Dollar7"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Bash.Syntax",
          "name": "Dollar8",
          "package": "bash",
          "signature": "Dollar8",
          "source": "src/Language-Bash-Syntax.html#SpecialVar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Bash Syntax",
          "module": "Language.Bash.Syntax",
          "name": "Dollar8",
          "package": "bash",
          "partial": "Dollar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:Dollar8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Bash.Syntax",
          "name": "Dollar9",
          "package": "bash",
          "signature": "Dollar9",
          "source": "src/Language-Bash-Syntax.html#SpecialVar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Bash Syntax",
          "module": "Language.Bash.Syntax",
          "name": "Dollar9",
          "package": "bash",
          "partial": "Dollar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:Dollar9"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Bash.Syntax",
          "name": "DollarBang",
          "package": "bash",
          "signature": "DollarBang",
          "source": "src/Language-Bash-Syntax.html#SpecialVar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Bash Syntax",
          "module": "Language.Bash.Syntax",
          "name": "DollarBang",
          "package": "bash",
          "partial": "Dollar Bang",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:DollarBang"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Bash.Syntax",
          "name": "DollarDollar",
          "package": "bash",
          "signature": "DollarDollar",
          "source": "src/Language-Bash-Syntax.html#SpecialVar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Bash Syntax",
          "module": "Language.Bash.Syntax",
          "name": "DollarDollar",
          "package": "bash",
          "partial": "Dollar Dollar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:DollarDollar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Bash.Syntax",
          "name": "DollarHyphen",
          "package": "bash",
          "signature": "DollarHyphen",
          "source": "src/Language-Bash-Syntax.html#SpecialVar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Bash Syntax",
          "module": "Language.Bash.Syntax",
          "name": "DollarHyphen",
          "package": "bash",
          "partial": "Dollar Hyphen",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:DollarHyphen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Bash.Syntax",
          "name": "DollarQuestion",
          "package": "bash",
          "signature": "DollarQuestion",
          "source": "src/Language-Bash-Syntax.html#SpecialVar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Bash Syntax",
          "module": "Language.Bash.Syntax",
          "name": "DollarQuestion",
          "package": "bash",
          "partial": "Dollar Question",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:DollarQuestion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Bash.Syntax",
          "name": "DollarUnderscore",
          "package": "bash",
          "signature": "DollarUnderscore",
          "source": "src/Language-Bash-Syntax.html#SpecialVar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Bash Syntax",
          "module": "Language.Bash.Syntax",
          "name": "DollarUnderscore",
          "package": "bash",
          "partial": "Dollar Underscore",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:DollarUnderscore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Language.Bash.Syntax\",\"Language.Bash\"]",
          "name": "Elements",
          "package": "bash",
          "signature": "Elements Identifier",
          "source": "src/Language-Bash-Syntax.html#Expression",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:Elements\",\"http://hackage.haskell.org/package/bash/docs/Language-Bash.html#v:Elements\"]"
        },
        "index": {
          "hierarchy": "Language Bash Syntax",
          "module": "Language.Bash.Syntax",
          "name": "Elements",
          "package": "bash",
          "partial": "Elements",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:Elements"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Language.Bash.Syntax\",\"Language.Bash\"]",
          "name": "ElementsSafe",
          "package": "bash",
          "signature": "ElementsSafe Identifier",
          "source": "src/Language-Bash-Syntax.html#Expression",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:ElementsSafe\",\"http://hackage.haskell.org/package/bash/docs/Language-Bash.html#v:ElementsSafe\"]"
        },
        "index": {
          "hierarchy": "Language Bash Syntax",
          "module": "Language.Bash.Syntax",
          "name": "ElementsSafe",
          "package": "bash",
          "partial": "Elements Safe",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:ElementsSafe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Language.Bash.Syntax\",\"Language.Bash\"]",
          "name": "Empty",
          "package": "bash",
          "signature": "Empty",
          "source": "src/Language-Bash-Syntax.html#Statement",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:Empty\",\"http://hackage.haskell.org/package/bash/docs/Language-Bash.html#v:Empty\"]"
        },
        "index": {
          "hierarchy": "Language Bash Syntax",
          "module": "Language.Bash.Syntax",
          "name": "Empty",
          "package": "bash",
          "partial": "Empty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:Empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Language.Bash.Syntax\",\"Language.Bash\"]",
          "name": "Eval",
          "package": "bash",
          "signature": "Eval (Annotated t)",
          "source": "src/Language-Bash-Syntax.html#Expression",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:Eval\",\"http://hackage.haskell.org/package/bash/docs/Language-Bash.html#v:Eval\"]"
        },
        "index": {
          "hierarchy": "Language Bash Syntax",
          "module": "Language.Bash.Syntax",
          "name": "Eval",
          "package": "bash",
          "partial": "Eval",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:Eval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Language.Bash.Syntax\",\"Language.Bash\"]",
          "name": "EvalUnquoted",
          "package": "bash",
          "signature": "EvalUnquoted (Annotated t)",
          "source": "src/Language-Bash-Syntax.html#Expression",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:EvalUnquoted\",\"http://hackage.haskell.org/package/bash/docs/Language-Bash.html#v:EvalUnquoted\"]"
        },
        "index": {
          "hierarchy": "Language Bash Syntax",
          "module": "Language.Bash.Syntax",
          "name": "EvalUnquoted",
          "package": "bash",
          "partial": "Eval Unquoted",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:EvalUnquoted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Language.Bash.Syntax\",\"Language.Bash\"]",
          "name": "Export",
          "package": "bash",
          "signature": "Export Identifier (Expression t)",
          "source": "src/Language-Bash-Syntax.html#Statement",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:Export\",\"http://hackage.haskell.org/package/bash/docs/Language-Bash.html#v:Export\"]"
        },
        "index": {
          "hierarchy": "Language Bash Syntax",
          "module": "Language.Bash.Syntax",
          "name": "Export",
          "package": "bash",
          "partial": "Export",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:Export"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Language.Bash.Syntax\",\"Language.Bash\"]",
          "name": "Fancy",
          "package": "bash",
          "signature": "Fancy ByteString",
          "source": "src/Language-Bash-Syntax.html#FuncName",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:Fancy\",\"http://hackage.haskell.org/package/bash/docs/Language-Bash.html#v:Fancy\"]"
        },
        "index": {
          "hierarchy": "Language Bash Syntax",
          "module": "Language.Bash.Syntax",
          "name": "Fancy",
          "package": "bash",
          "partial": "Fancy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:Fancy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Language.Bash.Syntax\",\"Language.Bash\"]",
          "name": "FileDescriptor",
          "package": "bash",
          "signature": "FileDescriptor Word8",
          "source": "src/Language-Bash-Syntax.html#FileDescriptor",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:FileDescriptor\",\"http://hackage.haskell.org/package/bash/docs/Language-Bash.html#v:FileDescriptor\"]"
        },
        "index": {
          "hierarchy": "Language Bash Syntax",
          "module": "Language.Bash.Syntax",
          "name": "FileDescriptor",
          "package": "bash",
          "partial": "File Descriptor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:FileDescriptor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Bash.Syntax",
          "name": "File_G",
          "package": "bash",
          "signature": "File_G (Expression t)",
          "source": "src/Language-Bash-Syntax.html#ConditionalExpression",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Bash Syntax",
          "module": "Language.Bash.Syntax",
          "name": "File_G",
          "package": "bash",
          "partial": "File",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:File_G"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Bash.Syntax",
          "name": "File_L",
          "package": "bash",
          "signature": "File_L (Expression t)",
          "source": "src/Language-Bash-Syntax.html#ConditionalExpression",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Bash Syntax",
          "module": "Language.Bash.Syntax",
          "name": "File_L",
          "package": "bash",
          "partial": "File",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:File_L"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Bash.Syntax",
          "name": "File_N",
          "package": "bash",
          "signature": "File_N (Expression t)",
          "source": "src/Language-Bash-Syntax.html#ConditionalExpression",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Bash Syntax",
          "module": "Language.Bash.Syntax",
          "name": "File_N",
          "package": "bash",
          "partial": "File",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:File_N"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Bash.Syntax",
          "name": "File_O",
          "package": "bash",
          "signature": "File_O (Expression t)",
          "source": "src/Language-Bash-Syntax.html#ConditionalExpression",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Bash Syntax",
          "module": "Language.Bash.Syntax",
          "name": "File_O",
          "package": "bash",
          "partial": "File",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:File_O"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Bash.Syntax",
          "name": "File_S",
          "package": "bash",
          "signature": "File_S (Expression t)",
          "source": "src/Language-Bash-Syntax.html#ConditionalExpression",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Bash Syntax",
          "module": "Language.Bash.Syntax",
          "name": "File_S",
          "package": "bash",
          "partial": "File",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:File_S"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Bash.Syntax",
          "name": "File_a",
          "package": "bash",
          "signature": "File_a (Expression t)",
          "source": "src/Language-Bash-Syntax.html#ConditionalExpression",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Bash Syntax",
          "module": "Language.Bash.Syntax",
          "name": "File_a",
          "package": "bash",
          "partial": "File",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:File_a"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Bash.Syntax",
          "name": "File_b",
          "package": "bash",
          "signature": "File_b (Expression t)",
          "source": "src/Language-Bash-Syntax.html#ConditionalExpression",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Bash Syntax",
          "module": "Language.Bash.Syntax",
          "name": "File_b",
          "package": "bash",
          "partial": "File",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:File_b"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Bash.Syntax",
          "name": "File_c",
          "package": "bash",
          "signature": "File_c (Expression t)",
          "source": "src/Language-Bash-Syntax.html#ConditionalExpression",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Bash Syntax",
          "module": "Language.Bash.Syntax",
          "name": "File_c",
          "package": "bash",
          "partial": "File",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:File_c"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Bash.Syntax",
          "name": "File_d",
          "package": "bash",
          "signature": "File_d (Expression t)",
          "source": "src/Language-Bash-Syntax.html#ConditionalExpression",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Bash Syntax",
          "module": "Language.Bash.Syntax",
          "name": "File_d",
          "package": "bash",
          "partial": "File",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:File_d"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Bash.Syntax",
          "name": "File_e",
          "package": "bash",
          "signature": "File_e (Expression t)",
          "source": "src/Language-Bash-Syntax.html#ConditionalExpression",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Bash Syntax",
          "module": "Language.Bash.Syntax",
          "name": "File_e",
          "package": "bash",
          "partial": "File",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:File_e"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Bash.Syntax",
          "name": "File_ef",
          "package": "bash",
          "signature": "File_ef (Expression t) (Expression t)",
          "source": "src/Language-Bash-Syntax.html#ConditionalExpression",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Bash Syntax",
          "module": "Language.Bash.Syntax",
          "name": "File_ef",
          "package": "bash",
          "partial": "File",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:File_ef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Bash.Syntax",
          "name": "File_f",
          "package": "bash",
          "signature": "File_f (Expression t)",
          "source": "src/Language-Bash-Syntax.html#ConditionalExpression",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Bash Syntax",
          "module": "Language.Bash.Syntax",
          "name": "File_f",
          "package": "bash",
          "partial": "File",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:File_f"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Bash.Syntax",
          "name": "File_g",
          "package": "bash",
          "signature": "File_g (Expression t)",
          "source": "src/Language-Bash-Syntax.html#ConditionalExpression",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Bash Syntax",
          "module": "Language.Bash.Syntax",
          "name": "File_g",
          "package": "bash",
          "partial": "File",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:File_g"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Bash.Syntax",
          "name": "File_h",
          "package": "bash",
          "signature": "File_h (Expression t)",
          "source": "src/Language-Bash-Syntax.html#ConditionalExpression",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Bash Syntax",
          "module": "Language.Bash.Syntax",
          "name": "File_h",
          "package": "bash",
          "partial": "File",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:File_h"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Bash.Syntax",
          "name": "File_k",
          "package": "bash",
          "signature": "File_k (Expression t)",
          "source": "src/Language-Bash-Syntax.html#ConditionalExpression",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Bash Syntax",
          "module": "Language.Bash.Syntax",
          "name": "File_k",
          "package": "bash",
          "partial": "File",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:File_k"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Bash.Syntax",
          "name": "File_nt",
          "package": "bash",
          "signature": "File_nt (Expression t) (Expression t)",
          "source": "src/Language-Bash-Syntax.html#ConditionalExpression",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Bash Syntax",
          "module": "Language.Bash.Syntax",
          "name": "File_nt",
          "package": "bash",
          "partial": "File",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:File_nt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Bash.Syntax",
          "name": "File_ot",
          "package": "bash",
          "signature": "File_ot (Expression t) (Expression t)",
          "source": "src/Language-Bash-Syntax.html#ConditionalExpression",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Bash Syntax",
          "module": "Language.Bash.Syntax",
          "name": "File_ot",
          "package": "bash",
          "partial": "File",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:File_ot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Bash.Syntax",
          "name": "File_p",
          "package": "bash",
          "signature": "File_p (Expression t)",
          "source": "src/Language-Bash-Syntax.html#ConditionalExpression",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Bash Syntax",
          "module": "Language.Bash.Syntax",
          "name": "File_p",
          "package": "bash",
          "partial": "File",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:File_p"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Bash.Syntax",
          "name": "File_r",
          "package": "bash",
          "signature": "File_r (Expression t)",
          "source": "src/Language-Bash-Syntax.html#ConditionalExpression",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Bash Syntax",
          "module": "Language.Bash.Syntax",
          "name": "File_r",
          "package": "bash",
          "partial": "File",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:File_r"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Bash.Syntax",
          "name": "File_s",
          "package": "bash",
          "signature": "File_s (Expression t)",
          "source": "src/Language-Bash-Syntax.html#ConditionalExpression",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Bash Syntax",
          "module": "Language.Bash.Syntax",
          "name": "File_s",
          "package": "bash",
          "partial": "File",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:File_s"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Bash.Syntax",
          "name": "File_t",
          "package": "bash",
          "signature": "File_t (Expression t)",
          "source": "src/Language-Bash-Syntax.html#ConditionalExpression",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Bash Syntax",
          "module": "Language.Bash.Syntax",
          "name": "File_t",
          "package": "bash",
          "partial": "File",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:File_t"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Bash.Syntax",
          "name": "File_u",
          "package": "bash",
          "signature": "File_u (Expression t)",
          "source": "src/Language-Bash-Syntax.html#ConditionalExpression",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Bash Syntax",
          "module": "Language.Bash.Syntax",
          "name": "File_u",
          "package": "bash",
          "partial": "File",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:File_u"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Bash.Syntax",
          "name": "File_w",
          "package": "bash",
          "signature": "File_w (Expression t)",
          "source": "src/Language-Bash-Syntax.html#ConditionalExpression",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Bash Syntax",
          "module": "Language.Bash.Syntax",
          "name": "File_w",
          "package": "bash",
          "partial": "File",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:File_w"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Bash.Syntax",
          "name": "File_x",
          "package": "bash",
          "signature": "File_x (Expression t)",
          "source": "src/Language-Bash-Syntax.html#ConditionalExpression",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Bash Syntax",
          "module": "Language.Bash.Syntax",
          "name": "File_x",
          "package": "bash",
          "partial": "File",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:File_x"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Language.Bash.Syntax\",\"Language.Bash\"]",
          "name": "For",
          "package": "bash",
          "signature": "For Identifier [Expression t] (Annotated t)",
          "source": "src/Language-Bash-Syntax.html#Statement",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:For\",\"http://hackage.haskell.org/package/bash/docs/Language-Bash.html#v:For\"]"
        },
        "index": {
          "hierarchy": "Language Bash Syntax",
          "module": "Language.Bash.Syntax",
          "name": "For",
          "normalized": "For Identifier[Expression a](Annotated a)",
          "package": "bash",
          "partial": "For",
          "signature": "For Identifier[Expression t](Annotated t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:For"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Language.Bash.Syntax\",\"Language.Bash\"]",
          "name": "Function",
          "package": "bash",
          "signature": "Function FuncName (Annotated t)",
          "source": "src/Language-Bash-Syntax.html#Statement",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:Function\",\"http://hackage.haskell.org/package/bash/docs/Language-Bash.html#v:Function\"]"
        },
        "index": {
          "hierarchy": "Language Bash Syntax",
          "module": "Language.Bash.Syntax",
          "name": "Function",
          "package": "bash",
          "partial": "Function",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:Function"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Language.Bash.Syntax\",\"Language.Bash\"]",
          "name": "Group",
          "package": "bash",
          "signature": "Group (Annotated t)",
          "source": "src/Language-Bash-Syntax.html#Statement",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:Group\",\"http://hackage.haskell.org/package/bash/docs/Language-Bash.html#v:Group\"]"
        },
        "index": {
          "hierarchy": "Language Bash Syntax",
          "module": "Language.Bash.Syntax",
          "name": "Group",
          "package": "bash",
          "partial": "Group",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:Group"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Bash.Syntax",
          "name": "Identifier",
          "package": "bash",
          "signature": "Identifier ByteString",
          "source": "src/Language-Bash-Syntax.html#Identifier",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Bash Syntax",
          "module": "Language.Bash.Syntax",
          "name": "Identifier",
          "package": "bash",
          "partial": "Identifier",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:Identifier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Language.Bash.Syntax\",\"Language.Bash\"]",
          "name": "IfThen",
          "package": "bash",
          "signature": "IfThen (Annotated t) (Annotated t)",
          "source": "src/Language-Bash-Syntax.html#Statement",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:IfThen\",\"http://hackage.haskell.org/package/bash/docs/Language-Bash.html#v:IfThen\"]"
        },
        "index": {
          "hierarchy": "Language Bash Syntax",
          "module": "Language.Bash.Syntax",
          "name": "IfThen",
          "package": "bash",
          "partial": "If Then",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:IfThen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Language.Bash.Syntax\",\"Language.Bash\"]",
          "name": "IfThenElse",
          "package": "bash",
          "signature": "IfThenElse (Annotated t) (Annotated t) (Annotated t)",
          "source": "src/Language-Bash-Syntax.html#Statement",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:IfThenElse\",\"http://hackage.haskell.org/package/bash/docs/Language-Bash.html#v:IfThenElse\"]"
        },
        "index": {
          "hierarchy": "Language Bash Syntax",
          "module": "Language.Bash.Syntax",
          "name": "IfThenElse",
          "package": "bash",
          "partial": "If Then Else",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:IfThenElse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInput redirection, \u003ccode\u003e\u003c\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Language.Bash.Syntax\",\"Language.Bash\"]",
          "name": "In",
          "package": "bash",
          "signature": "In",
          "source": "src/Language-Bash-Syntax.html#Redirection",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:In\",\"http://hackage.haskell.org/package/bash/docs/Language-Bash.html#v:In\"]"
        },
        "index": {
          "description": "Input redirection",
          "hierarchy": "Language Bash Syntax",
          "module": "Language.Bash.Syntax",
          "name": "In",
          "package": "bash",
          "partial": "In",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:In"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Language.Bash.Syntax\",\"Language.Bash\"]",
          "name": "IsSet",
          "package": "bash",
          "signature": "IsSet VarName",
          "source": "src/Language-Bash-Syntax.html#Statement",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:IsSet\",\"http://hackage.haskell.org/package/bash/docs/Language-Bash.html#v:IsSet\"]"
        },
        "index": {
          "hierarchy": "Language Bash Syntax",
          "module": "Language.Bash.Syntax",
          "name": "IsSet",
          "package": "bash",
          "partial": "Is Set",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:IsSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Language.Bash.Syntax\",\"Language.Bash\"]",
          "name": "Keys",
          "package": "bash",
          "signature": "Keys Identifier",
          "source": "src/Language-Bash-Syntax.html#Expression",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:Keys\",\"http://hackage.haskell.org/package/bash/docs/Language-Bash.html#v:Keys\"]"
        },
        "index": {
          "hierarchy": "Language Bash Syntax",
          "module": "Language.Bash.Syntax",
          "name": "Keys",
          "package": "bash",
          "partial": "Keys",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:Keys"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Language.Bash.Syntax\",\"Language.Bash\"]",
          "name": "Length",
          "package": "bash",
          "signature": "Length VarName",
          "source": "src/Language-Bash-Syntax.html#Expression",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:Length\",\"http://hackage.haskell.org/package/bash/docs/Language-Bash.html#v:Length\"]"
        },
        "index": {
          "hierarchy": "Language Bash Syntax",
          "module": "Language.Bash.Syntax",
          "name": "Length",
          "package": "bash",
          "partial": "Length",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:Length"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Language.Bash.Syntax\",\"Language.Bash\"]",
          "name": "Literal",
          "package": "bash",
          "signature": "Literal Bash",
          "source": "src/Language-Bash-Syntax.html#Expression",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:Literal\",\"http://hackage.haskell.org/package/bash/docs/Language-Bash.html#v:Literal\"]"
        },
        "index": {
          "hierarchy": "Language Bash Syntax",
          "module": "Language.Bash.Syntax",
          "name": "Literal",
          "package": "bash",
          "partial": "Literal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:Literal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Language.Bash.Syntax\",\"Language.Bash\"]",
          "name": "Local",
          "package": "bash",
          "signature": "Local (Assignment t)",
          "source": "src/Language-Bash-Syntax.html#Statement",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:Local\",\"http://hackage.haskell.org/package/bash/docs/Language-Bash.html#v:Local\"]"
        },
        "index": {
          "hierarchy": "Language Bash Syntax",
          "module": "Language.Bash.Syntax",
          "name": "Local",
          "package": "bash",
          "partial": "Local",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:Local"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Bash.Syntax",
          "name": "LongestLeading",
          "package": "bash",
          "signature": "LongestLeading",
          "source": "src/Language-Bash-Syntax.html#Trim",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Bash Syntax",
          "module": "Language.Bash.Syntax",
          "name": "LongestLeading",
          "package": "bash",
          "partial": "Longest Leading",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:LongestLeading"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Bash.Syntax",
          "name": "LongestTrailing",
          "package": "bash",
          "signature": "LongestTrailing",
          "source": "src/Language-Bash-Syntax.html#Trim",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Bash Syntax",
          "module": "Language.Bash.Syntax",
          "name": "LongestTrailing",
          "package": "bash",
          "partial": "Longest Trailing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:LongestTrailing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Language.Bash.Syntax\",\"Language.Bash\"]",
          "name": "NoOp",
          "package": "bash",
          "signature": "NoOp ByteString",
          "source": "src/Language-Bash-Syntax.html#Statement",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:NoOp\",\"http://hackage.haskell.org/package/bash/docs/Language-Bash.html#v:NoOp\"]"
        },
        "index": {
          "hierarchy": "Language Bash Syntax",
          "module": "Language.Bash.Syntax",
          "name": "NoOp",
          "package": "bash",
          "partial": "No Op",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:NoOp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Bash.Syntax",
          "name": "Not",
          "package": "bash",
          "signature": "Not (Expression t) (Expression t)",
          "source": "src/Language-Bash-Syntax.html#ConditionalExpression",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Bash Syntax",
          "module": "Language.Bash.Syntax",
          "name": "Not",
          "package": "bash",
          "partial": "Not",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:Not"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Bash.Syntax",
          "name": "NumEq",
          "package": "bash",
          "signature": "NumEq (Expression t) (Expression t)",
          "source": "src/Language-Bash-Syntax.html#ConditionalExpression",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Bash Syntax",
          "module": "Language.Bash.Syntax",
          "name": "NumEq",
          "package": "bash",
          "partial": "Num Eq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:NumEq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Bash.Syntax",
          "name": "NumGEq",
          "package": "bash",
          "signature": "NumGEq (Expression t) (Expression t)",
          "source": "src/Language-Bash-Syntax.html#ConditionalExpression",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Bash Syntax",
          "module": "Language.Bash.Syntax",
          "name": "NumGEq",
          "package": "bash",
          "partial": "Num GEq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:NumGEq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Bash.Syntax",
          "name": "NumGT",
          "package": "bash",
          "signature": "NumGT (Expression t) (Expression t)",
          "source": "src/Language-Bash-Syntax.html#ConditionalExpression",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Bash Syntax",
          "module": "Language.Bash.Syntax",
          "name": "NumGT",
          "package": "bash",
          "partial": "Num GT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:NumGT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Bash.Syntax",
          "name": "NumLEq",
          "package": "bash",
          "signature": "NumLEq (Expression t) (Expression t)",
          "source": "src/Language-Bash-Syntax.html#ConditionalExpression",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Bash Syntax",
          "module": "Language.Bash.Syntax",
          "name": "NumLEq",
          "package": "bash",
          "partial": "Num LEq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:NumLEq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Bash.Syntax",
          "name": "NumLT",
          "package": "bash",
          "signature": "NumLT (Expression t) (Expression t)",
          "source": "src/Language-Bash-Syntax.html#ConditionalExpression",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Bash Syntax",
          "module": "Language.Bash.Syntax",
          "name": "NumLT",
          "package": "bash",
          "partial": "Num LT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:NumLT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Bash.Syntax",
          "name": "NumNotEq",
          "package": "bash",
          "signature": "NumNotEq (Expression t) (Expression t)",
          "source": "src/Language-Bash-Syntax.html#ConditionalExpression",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Bash Syntax",
          "module": "Language.Bash.Syntax",
          "name": "NumNotEq",
          "package": "bash",
          "partial": "Num Not Eq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:NumNotEq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Bash.Syntax",
          "name": "OptSet",
          "package": "bash",
          "signature": "OptSet (Expression t)",
          "source": "src/Language-Bash-Syntax.html#ConditionalExpression",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Bash Syntax",
          "module": "Language.Bash.Syntax",
          "name": "OptSet",
          "package": "bash",
          "partial": "Opt Set",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:OptSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Bash.Syntax",
          "name": "Or",
          "package": "bash",
          "signature": "Or (Expression t) (Expression t)",
          "source": "src/Language-Bash-Syntax.html#ConditionalExpression",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Bash Syntax",
          "module": "Language.Bash.Syntax",
          "name": "Or",
          "package": "bash",
          "partial": "Or",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:Or"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Language.Bash.Syntax\",\"Language.Bash\"]",
          "name": "OrOr",
          "package": "bash",
          "signature": "OrOr (Annotated t) (Annotated t)",
          "source": "src/Language-Bash-Syntax.html#Statement",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:OrOr\",\"http://hackage.haskell.org/package/bash/docs/Language-Bash.html#v:OrOr\"]"
        },
        "index": {
          "hierarchy": "Language Bash Syntax",
          "module": "Language.Bash.Syntax",
          "name": "OrOr",
          "package": "bash",
          "partial": "Or Or",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:OrOr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOutput redirection, \u003ccode\u003e\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Language.Bash.Syntax\",\"Language.Bash\"]",
          "name": "Out",
          "package": "bash",
          "signature": "Out",
          "source": "src/Language-Bash-Syntax.html#Redirection",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:Out\",\"http://hackage.haskell.org/package/bash/docs/Language-Bash.html#v:Out\"]"
        },
        "index": {
          "description": "Output redirection",
          "hierarchy": "Language Bash Syntax",
          "module": "Language.Bash.Syntax",
          "name": "Out",
          "package": "bash",
          "partial": "Out",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:Out"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Language.Bash.Syntax\",\"Language.Bash\"]",
          "name": "Pipe",
          "package": "bash",
          "signature": "Pipe (Annotated t) (Annotated t)",
          "source": "src/Language-Bash-Syntax.html#Statement",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:Pipe\",\"http://hackage.haskell.org/package/bash/docs/Language-Bash.html#v:Pipe\"]"
        },
        "index": {
          "hierarchy": "Language Bash Syntax",
          "module": "Language.Bash.Syntax",
          "name": "Pipe",
          "package": "bash",
          "partial": "Pipe",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:Pipe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Language.Bash.Syntax\",\"Language.Bash\"]",
          "name": "ProcessIn",
          "package": "bash",
          "signature": "ProcessIn (Annotated t)",
          "source": "src/Language-Bash-Syntax.html#Expression",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:ProcessIn\",\"http://hackage.haskell.org/package/bash/docs/Language-Bash.html#v:ProcessIn\"]"
        },
        "index": {
          "hierarchy": "Language Bash Syntax",
          "module": "Language.Bash.Syntax",
          "name": "ProcessIn",
          "package": "bash",
          "partial": "Process In",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:ProcessIn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Language.Bash.Syntax\",\"Language.Bash\"]",
          "name": "ProcessOut",
          "package": "bash",
          "signature": "ProcessOut (Annotated t)",
          "source": "src/Language-Bash-Syntax.html#Expression",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:ProcessOut\",\"http://hackage.haskell.org/package/bash/docs/Language-Bash.html#v:ProcessOut\"]"
        },
        "index": {
          "hierarchy": "Language Bash Syntax",
          "module": "Language.Bash.Syntax",
          "name": "ProcessOut",
          "package": "bash",
          "partial": "Process Out",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:ProcessOut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Language.Bash.Syntax\",\"Language.Bash\"]",
          "name": "QuestionMark",
          "package": "bash",
          "signature": "QuestionMark",
          "source": "src/Language-Bash-Syntax.html#Expression",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:QuestionMark\",\"http://hackage.haskell.org/package/bash/docs/Language-Bash.html#v:QuestionMark\"]"
        },
        "index": {
          "hierarchy": "Language Bash Syntax",
          "module": "Language.Bash.Syntax",
          "name": "QuestionMark",
          "package": "bash",
          "partial": "Question Mark",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:QuestionMark"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Language.Bash.Syntax\",\"Language.Bash\"]",
          "name": "ReadArray",
          "package": "bash",
          "signature": "ReadArray Identifier (Expression t)",
          "source": "src/Language-Bash-Syntax.html#Expression",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:ReadArray\",\"http://hackage.haskell.org/package/bash/docs/Language-Bash.html#v:ReadArray\"]"
        },
        "index": {
          "hierarchy": "Language Bash Syntax",
          "module": "Language.Bash.Syntax",
          "name": "ReadArray",
          "package": "bash",
          "partial": "Read Array",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:ReadArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Language.Bash.Syntax\",\"Language.Bash\"]",
          "name": "ReadArraySafe",
          "package": "bash",
          "signature": "ReadArraySafe Identifier (Expression t)",
          "source": "src/Language-Bash-Syntax.html#Expression",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:ReadArraySafe\",\"http://hackage.haskell.org/package/bash/docs/Language-Bash.html#v:ReadArraySafe\"]"
        },
        "index": {
          "hierarchy": "Language Bash Syntax",
          "module": "Language.Bash.Syntax",
          "name": "ReadArraySafe",
          "package": "bash",
          "partial": "Read Array Safe",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:ReadArraySafe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Language.Bash.Syntax\",\"Language.Bash\"]",
          "name": "ReadVar",
          "package": "bash",
          "signature": "ReadVar VarName",
          "source": "src/Language-Bash-Syntax.html#Expression",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:ReadVar\",\"http://hackage.haskell.org/package/bash/docs/Language-Bash.html#v:ReadVar\"]"
        },
        "index": {
          "hierarchy": "Language Bash Syntax",
          "module": "Language.Bash.Syntax",
          "name": "ReadVar",
          "package": "bash",
          "partial": "Read Var",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:ReadVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Language.Bash.Syntax\",\"Language.Bash\"]",
          "name": "ReadVarSafe",
          "package": "bash",
          "signature": "ReadVarSafe VarName",
          "source": "src/Language-Bash-Syntax.html#Expression",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:ReadVarSafe\",\"http://hackage.haskell.org/package/bash/docs/Language-Bash.html#v:ReadVarSafe\"]"
        },
        "index": {
          "hierarchy": "Language Bash Syntax",
          "module": "Language.Bash.Syntax",
          "name": "ReadVarSafe",
          "package": "bash",
          "partial": "Read Var Safe",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:ReadVarSafe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Language.Bash.Syntax\",\"Language.Bash\"]",
          "name": "Redirect",
          "package": "bash",
          "signature": "Redirect (Annotated t) Redirection FileDescriptor (Either (Expression t) FileDescriptor)",
          "source": "src/Language-Bash-Syntax.html#Statement",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:Redirect\",\"http://hackage.haskell.org/package/bash/docs/Language-Bash.html#v:Redirect\"]"
        },
        "index": {
          "hierarchy": "Language Bash Syntax",
          "module": "Language.Bash.Syntax",
          "name": "Redirect",
          "package": "bash",
          "partial": "Redirect",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:Redirect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Language.Bash.Syntax\",\"Language.Bash\"]",
          "name": "Sequence",
          "package": "bash",
          "signature": "Sequence (Annotated t) (Annotated t)",
          "source": "src/Language-Bash-Syntax.html#Statement",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:Sequence\",\"http://hackage.haskell.org/package/bash/docs/Language-Bash.html#v:Sequence\"]"
        },
        "index": {
          "hierarchy": "Language Bash Syntax",
          "module": "Language.Bash.Syntax",
          "name": "Sequence",
          "package": "bash",
          "partial": "Sequence",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:Sequence"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Bash.Syntax",
          "name": "ShortestLeading",
          "package": "bash",
          "signature": "ShortestLeading",
          "source": "src/Language-Bash-Syntax.html#Trim",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Bash Syntax",
          "module": "Language.Bash.Syntax",
          "name": "ShortestLeading",
          "package": "bash",
          "partial": "Shortest Leading",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:ShortestLeading"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Bash.Syntax",
          "name": "ShortestTrailing",
          "package": "bash",
          "signature": "ShortestTrailing",
          "source": "src/Language-Bash-Syntax.html#Trim",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Bash Syntax",
          "module": "Language.Bash.Syntax",
          "name": "ShortestTrailing",
          "package": "bash",
          "partial": "Shortest Trailing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:ShortestTrailing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Language.Bash.Syntax\",\"Language.Bash\"]",
          "name": "Simple",
          "package": "bash",
          "signature": "Simple Identifier",
          "source": "src/Language-Bash-Syntax.html#FuncName",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:Simple\",\"http://hackage.haskell.org/package/bash/docs/Language-Bash.html#v:Simple\"]"
        },
        "index": {
          "hierarchy": "Language Bash Syntax",
          "module": "Language.Bash.Syntax",
          "name": "Simple",
          "package": "bash",
          "partial": "Simple",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:Simple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Language.Bash.Syntax\",\"Language.Bash\"]",
          "name": "SimpleCommand",
          "package": "bash",
          "signature": "SimpleCommand (Expression t) [Expression t]",
          "source": "src/Language-Bash-Syntax.html#Statement",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:SimpleCommand\",\"http://hackage.haskell.org/package/bash/docs/Language-Bash.html#v:SimpleCommand\"]"
        },
        "index": {
          "hierarchy": "Language Bash Syntax",
          "module": "Language.Bash.Syntax",
          "name": "SimpleCommand",
          "normalized": "SimpleCommand(Expression a)[Expression a]",
          "package": "bash",
          "partial": "Simple Command",
          "signature": "SimpleCommand(Expression t)[Expression t]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:SimpleCommand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Bash.Syntax",
          "name": "StringEmpty",
          "package": "bash",
          "signature": "StringEmpty (Expression t)",
          "source": "src/Language-Bash-Syntax.html#ConditionalExpression",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Bash Syntax",
          "module": "Language.Bash.Syntax",
          "name": "StringEmpty",
          "package": "bash",
          "partial": "String Empty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:StringEmpty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Bash.Syntax",
          "name": "StringEq",
          "package": "bash",
          "signature": "StringEq (Expression t) (Expression t)",
          "source": "src/Language-Bash-Syntax.html#ConditionalExpression",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Bash Syntax",
          "module": "Language.Bash.Syntax",
          "name": "StringEq",
          "package": "bash",
          "partial": "String Eq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:StringEq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Bash.Syntax",
          "name": "StringGT",
          "package": "bash",
          "signature": "StringGT (Expression t) (Expression t)",
          "source": "src/Language-Bash-Syntax.html#ConditionalExpression",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Bash Syntax",
          "module": "Language.Bash.Syntax",
          "name": "StringGT",
          "package": "bash",
          "partial": "String GT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:StringGT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Bash.Syntax",
          "name": "StringLT",
          "package": "bash",
          "signature": "StringLT (Expression t) (Expression t)",
          "source": "src/Language-Bash-Syntax.html#ConditionalExpression",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Bash Syntax",
          "module": "Language.Bash.Syntax",
          "name": "StringLT",
          "package": "bash",
          "partial": "String LT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:StringLT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Bash.Syntax",
          "name": "StringNonempty",
          "package": "bash",
          "signature": "StringNonempty (Expression t)",
          "source": "src/Language-Bash-Syntax.html#ConditionalExpression",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Bash Syntax",
          "module": "Language.Bash.Syntax",
          "name": "StringNonempty",
          "package": "bash",
          "partial": "String Nonempty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:StringNonempty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Bash.Syntax",
          "name": "StringNotEq",
          "package": "bash",
          "signature": "StringNotEq (Expression t) (Expression t)",
          "source": "src/Language-Bash-Syntax.html#ConditionalExpression",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Bash Syntax",
          "module": "Language.Bash.Syntax",
          "name": "StringNotEq",
          "package": "bash",
          "partial": "String Not Eq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:StringNotEq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Bash.Syntax",
          "name": "StringRE",
          "package": "bash",
          "signature": "StringRE (Expression t) (Expression t)",
          "source": "src/Language-Bash-Syntax.html#ConditionalExpression",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Bash Syntax",
          "module": "Language.Bash.Syntax",
          "name": "StringRE",
          "package": "bash",
          "partial": "String RE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:StringRE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Language.Bash.Syntax\",\"Language.Bash\"]",
          "name": "Subshell",
          "package": "bash",
          "signature": "Subshell (Annotated t)",
          "source": "src/Language-Bash-Syntax.html#Statement",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:Subshell\",\"http://hackage.haskell.org/package/bash/docs/Language-Bash.html#v:Subshell\"]"
        },
        "index": {
          "hierarchy": "Language Bash Syntax",
          "module": "Language.Bash.Syntax",
          "name": "Subshell",
          "package": "bash",
          "partial": "Subshell",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:Subshell"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Language.Bash.Syntax\",\"Language.Bash\"]",
          "name": "Tilde",
          "package": "bash",
          "signature": "Tilde",
          "source": "src/Language-Bash-Syntax.html#Expression",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:Tilde\",\"http://hackage.haskell.org/package/bash/docs/Language-Bash.html#v:Tilde\"]"
        },
        "index": {
          "hierarchy": "Language Bash Syntax",
          "module": "Language.Bash.Syntax",
          "name": "Tilde",
          "package": "bash",
          "partial": "Tilde",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:Tilde"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Language.Bash.Syntax\",\"Language.Bash\"]",
          "name": "Trim",
          "package": "bash",
          "signature": "Trim Trim VarName (Expression t)",
          "source": "src/Language-Bash-Syntax.html#Expression",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:Trim\",\"http://hackage.haskell.org/package/bash/docs/Language-Bash.html#v:Trim\"]"
        },
        "index": {
          "hierarchy": "Language Bash Syntax",
          "module": "Language.Bash.Syntax",
          "name": "Trim",
          "package": "bash",
          "partial": "Trim",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:Trim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Language.Bash.Syntax\",\"Language.Bash\"]",
          "name": "Until",
          "package": "bash",
          "signature": "Until (Annotated t) (Annotated t)",
          "source": "src/Language-Bash-Syntax.html#Statement",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:Until\",\"http://hackage.haskell.org/package/bash/docs/Language-Bash.html#v:Until\"]"
        },
        "index": {
          "hierarchy": "Language Bash Syntax",
          "module": "Language.Bash.Syntax",
          "name": "Until",
          "package": "bash",
          "partial": "Until",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:Until"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Language.Bash.Syntax\",\"Language.Bash\"]",
          "name": "Var",
          "package": "bash",
          "signature": "Var Identifier (Expression t)",
          "source": "src/Language-Bash-Syntax.html#Assignment",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:Var\",\"http://hackage.haskell.org/package/bash/docs/Language-Bash.html#v:Var\"]"
        },
        "index": {
          "hierarchy": "Language Bash Syntax",
          "module": "Language.Bash.Syntax",
          "name": "Var",
          "package": "bash",
          "partial": "Var",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:Var"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Language.Bash.Syntax\",\"Language.Bash\"]",
          "name": "VarIdent",
          "package": "bash",
          "signature": "VarIdent Identifier",
          "source": "src/Language-Bash-Syntax.html#VarName",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:VarIdent\",\"http://hackage.haskell.org/package/bash/docs/Language-Bash.html#v:VarIdent\"]"
        },
        "index": {
          "hierarchy": "Language Bash Syntax",
          "module": "Language.Bash.Syntax",
          "name": "VarIdent",
          "package": "bash",
          "partial": "Var Ident",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:VarIdent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Language.Bash.Syntax\",\"Language.Bash\"]",
          "name": "VarSpecial",
          "package": "bash",
          "signature": "VarSpecial SpecialVar",
          "source": "src/Language-Bash-Syntax.html#VarName",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:VarSpecial\",\"http://hackage.haskell.org/package/bash/docs/Language-Bash.html#v:VarSpecial\"]"
        },
        "index": {
          "hierarchy": "Language Bash Syntax",
          "module": "Language.Bash.Syntax",
          "name": "VarSpecial",
          "package": "bash",
          "partial": "Var Special",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:VarSpecial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Language.Bash.Syntax\",\"Language.Bash\"]",
          "name": "While",
          "package": "bash",
          "signature": "While (Annotated t) (Annotated t)",
          "source": "src/Language-Bash-Syntax.html#Statement",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:While\",\"http://hackage.haskell.org/package/bash/docs/Language-Bash.html#v:While\"]"
        },
        "index": {
          "hierarchy": "Language Bash Syntax",
          "module": "Language.Bash.Syntax",
          "name": "While",
          "package": "bash",
          "partial": "While",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:While"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Language.Bash.Syntax\",\"Language.Bash\"]",
          "name": "annotation",
          "package": "bash",
          "signature": "t",
          "source": "src/Language-Bash-Syntax.html#Annotated",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:annotation\",\"http://hackage.haskell.org/package/bash/docs/Language-Bash.html#v:annotation\"]"
        },
        "index": {
          "hierarchy": "Language Bash Syntax",
          "module": "Language.Bash.Syntax",
          "name": "annotation",
          "package": "bash",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:annotation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProduce a \u003ccode\u003e\u003ca\u003eFuncName\u003c/a\u003e\u003c/code\u003e, choosing the \u003ccode\u003e\u003ca\u003eSimple\u003c/a\u003e\u003c/code\u003e constructor if the name is a\n    simple identifier.\n\u003c/p\u003e",
          "module": "[\"Language.Bash.Syntax\",\"Language.Bash\"]",
          "name": "funcName",
          "package": "bash",
          "signature": "ByteString -\u003e Maybe FuncName",
          "source": "src/Language-Bash-Syntax.html#funcName",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:funcName\",\"http://hackage.haskell.org/package/bash/docs/Language-Bash.html#v:funcName\"]"
        },
        "index": {
          "description": "Produce FuncName choosing the Simple constructor if the name is simple identifier",
          "hierarchy": "Language Bash Syntax",
          "module": "Language.Bash.Syntax",
          "name": "funcName",
          "normalized": "ByteString-\u003eMaybe FuncName",
          "package": "bash",
          "partial": "Name",
          "signature": "ByteString-\u003eMaybe FuncName",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:funcName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProduce an \u003ccode\u003e\u003ca\u003eIdentifier\u003c/a\u003e\u003c/code\u003e from a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e of legal format.\n\u003c/p\u003e",
          "module": "[\"Language.Bash.Syntax\",\"Language.Bash\"]",
          "name": "identifier",
          "package": "bash",
          "signature": "ByteString -\u003e Maybe Identifier",
          "source": "src/Language-Bash-Syntax.html#identifier",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:identifier\",\"http://hackage.haskell.org/package/bash/docs/Language-Bash.html#v:identifier\"]"
        },
        "index": {
          "description": "Produce an Identifier from ByteString of legal format",
          "hierarchy": "Language Bash Syntax",
          "module": "Language.Bash.Syntax",
          "name": "identifier",
          "normalized": "ByteString-\u003eMaybe Identifier",
          "package": "bash",
          "signature": "ByteString-\u003eMaybe Identifier",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:identifier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEscape a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e to produce a literal expression.\n\u003c/p\u003e",
          "module": "[\"Language.Bash.Syntax\",\"Language.Bash\"]",
          "name": "literal",
          "package": "bash",
          "signature": "ByteString -\u003e Expression t",
          "source": "src/Language-Bash-Syntax.html#literal",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:literal\",\"http://hackage.haskell.org/package/bash/docs/Language-Bash.html#v:literal\"]"
        },
        "index": {
          "description": "Escape ByteString to produce literal expression",
          "hierarchy": "Language Bash Syntax",
          "module": "Language.Bash.Syntax",
          "name": "literal",
          "normalized": "ByteString-\u003eExpression a",
          "package": "bash",
          "signature": "ByteString-\u003eExpression t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:literal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTry to render a \u003ccode\u003e\u003ca\u003eSpecialVar\u003c/a\u003e\u003c/code\u003e from a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Language.Bash.Syntax\",\"Language.Bash\"]",
          "name": "specialVar",
          "package": "bash",
          "signature": "ByteString -\u003e Maybe SpecialVar",
          "source": "src/Language-Bash-Syntax.html#specialVar",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:specialVar\",\"http://hackage.haskell.org/package/bash/docs/Language-Bash.html#v:specialVar\"]"
        },
        "index": {
          "description": "Try to render SpecialVar from ByteString",
          "hierarchy": "Language Bash Syntax",
          "module": "Language.Bash.Syntax",
          "name": "specialVar",
          "normalized": "ByteString-\u003eMaybe SpecialVar",
          "package": "bash",
          "partial": "Var",
          "signature": "ByteString-\u003eMaybe SpecialVar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:specialVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Bash.Syntax",
          "name": "specialVarBytes",
          "package": "bash",
          "signature": "SpecialVar -\u003e ByteString",
          "source": "src/Language-Bash-Syntax.html#specialVarBytes",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Bash Syntax",
          "module": "Language.Bash.Syntax",
          "name": "specialVarBytes",
          "normalized": "SpecialVar-\u003eByteString",
          "package": "bash",
          "partial": "Var Bytes",
          "signature": "SpecialVar-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:specialVarBytes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Language.Bash.Syntax\",\"Language.Bash\"]",
          "name": "statement",
          "package": "bash",
          "signature": "Statement t",
          "source": "src/Language-Bash-Syntax.html#Annotated",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:statement\",\"http://hackage.haskell.org/package/bash/docs/Language-Bash.html#v:statement\"]"
        },
        "index": {
          "hierarchy": "Language Bash Syntax",
          "module": "Language.Bash.Syntax",
          "name": "statement",
          "package": "bash",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:statement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Language.Bash.Syntax\",\"Language.Bash\"]",
          "name": "varName",
          "package": "bash",
          "signature": "ByteString -\u003e Maybe VarName",
          "source": "src/Language-Bash-Syntax.html#varName",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:varName\",\"http://hackage.haskell.org/package/bash/docs/Language-Bash.html#v:varName\"]"
        },
        "index": {
          "hierarchy": "Language Bash Syntax",
          "module": "Language.Bash.Syntax",
          "name": "varName",
          "normalized": "ByteString-\u003eMaybe VarName",
          "package": "bash",
          "partial": "Name",
          "signature": "ByteString-\u003eMaybe VarName",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash-Syntax.html#v:varName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTypes and functions for generation of Bash scripts, with safe escaping\n    and composition of a large subset of Bash statements and expressions.\n\u003c/p\u003e\u003cp\u003eThis module is meant to be imported qualified -- perhaps as \u003ccode\u003eBash\u003c/code\u003e -- and\n    contains everything you need to build and render Bash scripts. For\n    examples of usage, look at \u003ca\u003eLanguage.Bash.Lib\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.Bash",
          "name": "Bash",
          "package": "bash",
          "source": "src/Language-Bash.html",
          "type": "module"
        },
        "index": {
          "description": "Types and functions for generation of Bash scripts with safe escaping and composition of large subset of Bash statements and expressions This module is meant to be imported qualified perhaps as Bash and contains everything you need to build and render Bash scripts For examples of usage look at Language.Bash.Lib",
          "hierarchy": "Language Bash",
          "module": "Language.Bash",
          "name": "Bash",
          "package": "bash",
          "partial": "Bash",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eAnnotated\u003c/a\u003e\u003c/code\u003e type captures the annotatedness of a tree of Bash\n    statements. It is \u003ccode\u003e\u003ca\u003eFoldable\u003c/a\u003e\u003c/code\u003e and a \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.Bash",
          "name": "Annotated",
          "package": "bash",
          "source": "src/Language-Bash-Syntax.html#Annotated",
          "type": "data"
        },
        "index": {
          "description": "The Annotated type captures the annotatedness of tree of Bash statements It is Foldable and Functor",
          "hierarchy": "Language Bash",
          "module": "Language.Bash",
          "name": "Annotated",
          "package": "bash",
          "partial": "Annotated",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash.html#t:Annotated"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Bash",
          "name": "Assignment",
          "package": "bash",
          "source": "src/Language-Bash-Syntax.html#Assignment",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language Bash",
          "module": "Language.Bash",
          "name": "Assignment",
          "package": "bash",
          "partial": "Assignment",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash.html#t:Assignment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of Bash expressions, handling many kinds of variable reference as\n    well as eval and process substitution. It is \u003ccode\u003e\u003ca\u003eFoldable\u003c/a\u003e\u003c/code\u003e and a \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.Bash",
          "name": "Expression",
          "package": "bash",
          "source": "src/Language-Bash-Syntax.html#Expression",
          "type": "data"
        },
        "index": {
          "description": "The type of Bash expressions handling many kinds of variable reference as well as eval and process substitution It is Foldable and Functor",
          "hierarchy": "Language Bash",
          "module": "Language.Bash",
          "name": "Expression",
          "package": "bash",
          "partial": "Expression",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash.html#t:Expression"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA file descriptor in Bash is simply a number between 0 and 255.\n\u003c/p\u003e",
          "module": "Language.Bash",
          "name": "FileDescriptor",
          "package": "bash",
          "source": "src/Language-Bash-Syntax.html#FileDescriptor",
          "type": "newtype"
        },
        "index": {
          "description": "file descriptor in Bash is simply number between and",
          "hierarchy": "Language Bash",
          "module": "Language.Bash",
          "name": "FileDescriptor",
          "package": "bash",
          "partial": "File Descriptor",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash.html#t:FileDescriptor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBash functions can have surprising names. Once the word containing the\n    name of the function has been identified by the Bash parser, the only\n    constraint as of this writing is that it not be all digits and contain\n    neither quotes nor dollar signs. Thus the following are all callable\n    functions:\n\u003c/p\u003e\u003cpre\u003e  function http://duckduckgo.com { curl -sSfL http://duckduckgo.com?q=\"$1\" ;}\n  function 123.0 { echo 123.0 ;}\n  function + { echo \"$@\" | sed 's/ / + /g' | bc ;}\n\u003c/pre\u003e\u003cp\u003eYet a function name may only be parsed if its surroundings constitute a\n    valid function declaration. So we are not able to declare these functions:\n\u003c/p\u003e\u003cpre\u003e  function par()ens { echo '(' \"$@\" ')' ;}\n  function (parens) { echo '(' \"$@\" ')' ;}\n\u003c/pre\u003e\u003cp\u003e(The parser thinks the parens are there to separate the function name from\n    the function body.)\n\u003c/p\u003e\u003cp\u003eSome functions can be declared but not called. For example:\n\u003c/p\u003e\u003cpre\u003e  function for { echo for ;}\n  function x=y { echo x is y ;}\n\u003c/pre\u003e\u003cp\u003eCalling the former results in a syntax error. A call to the latter is\n    parsed as an assignment.\n\u003c/p\u003e\u003cp\u003eIt is possible to override important builtins with function declarations.\n    For example:\n\u003c/p\u003e\u003cpre\u003e  function set { echo Haha! ;}\n  function declare { echo Surprise! ;}\n\u003c/pre\u003e\u003cp\u003eOverall, Bash function names are quite flexible but inconsistent and\n    potentially a cause of grave errors.\n\u003c/p\u003e",
          "module": "Language.Bash",
          "name": "FuncName",
          "package": "bash",
          "source": "src/Language-Bash-Syntax.html#FuncName",
          "type": "data"
        },
        "index": {
          "description": "Bash functions can have surprising names Once the word containing the name of the function has been identified by the Bash parser the only constraint as of this writing is that it not be all digits and contain neither quotes nor dollar signs Thus the following are all callable functions function http duckduckgo.com curl sSfL http duckduckgo.com function echo function echo sed bc Yet function name may only be parsed if its surroundings constitute valid function declaration So we are not able to declare these functions function par ens echo function parens echo The parser thinks the parens are there to separate the function name from the function body Some functions can be declared but not called For example function for echo for function echo is Calling the former results in syntax error call to the latter is parsed as an assignment It is possible to override important builtins with function declarations For example function set echo Haha function declare echo Surprise Overall Bash function names are quite flexible but inconsistent and potentially cause of grave errors",
          "hierarchy": "Language Bash",
          "module": "Language.Bash",
          "name": "FuncName",
          "package": "bash",
          "partial": "Func Name",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash.html#t:FuncName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of legal Bash identifiers, strings beginning with letters or \u003ccode\u003e_\u003c/code\u003e\n    and containing letters, \u003ccode\u003e_\u003c/code\u003e and digits.\n\u003c/p\u003e",
          "module": "Language.Bash",
          "name": "Identifier",
          "package": "bash",
          "source": "src/Language-Bash-Syntax.html#Identifier",
          "type": "data"
        },
        "index": {
          "description": "The type of legal Bash identifiers strings beginning with letters or and containing letters and digits",
          "hierarchy": "Language Bash",
          "module": "Language.Bash",
          "name": "Identifier",
          "package": "bash",
          "partial": "Identifier",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash.html#t:Identifier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Bash",
          "name": "PP",
          "package": "bash",
          "source": "src/Language-Bash-PrettyPrinter.html#PP",
          "type": "class"
        },
        "index": {
          "hierarchy": "Language Bash",
          "module": "Language.Bash",
          "name": "PP",
          "package": "bash",
          "partial": "PP",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash.html#t:PP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eState of pretty printing -- string being built, indent levels, present\n    column, brace nesting.\n\u003c/p\u003e",
          "module": "Language.Bash",
          "name": "PPState",
          "package": "bash",
          "source": "src/Language-Bash-PrettyPrinter-State.html#PPState",
          "type": "data"
        },
        "index": {
          "description": "State of pretty printing string being built indent levels present column brace nesting",
          "hierarchy": "Language Bash",
          "module": "Language.Bash",
          "name": "PPState",
          "package": "bash",
          "partial": "PPState",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash.html#t:PPState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRedirection \"directions\".\n\u003c/p\u003e",
          "module": "Language.Bash",
          "name": "Redirection",
          "package": "bash",
          "source": "src/Language-Bash-Syntax.html#Redirection",
          "type": "data"
        },
        "index": {
          "description": "Redirection directions",
          "hierarchy": "Language Bash",
          "module": "Language.Bash",
          "name": "Redirection",
          "package": "bash",
          "partial": "Redirection",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash.html#t:Redirection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe names of special variables, with otherwise illegal identifiers, are\n    represented by this type.\n\u003c/p\u003e",
          "module": "Language.Bash",
          "name": "SpecialVar",
          "package": "bash",
          "source": "src/Language-Bash-Syntax.html#SpecialVar",
          "type": "data"
        },
        "index": {
          "description": "The names of special variables with otherwise illegal identifiers are represented by this type",
          "hierarchy": "Language Bash",
          "module": "Language.Bash",
          "name": "SpecialVar",
          "package": "bash",
          "partial": "Special Var",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash.html#t:SpecialVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eStatement\u003c/a\u003e\u003c/code\u003e type captures the different kind of statements that may\n    exist in a Bash statement tree. It is mutually recursive with \u003ccode\u003e\u003ca\u003eAnnotated\u003c/a\u003e\u003c/code\u003e.\n    It is a \u003ccode\u003e\u003ca\u003eFoldable\u003c/a\u003e\u003c/code\u003e and a \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.Bash",
          "name": "Statement",
          "package": "bash",
          "source": "src/Language-Bash-Syntax.html#Statement",
          "type": "data"
        },
        "index": {
          "description": "The Statement type captures the different kind of statements that may exist in Bash statement tree It is mutually recursive with Annotated It is Foldable and Functor",
          "hierarchy": "Language Bash",
          "module": "Language.Bash",
          "name": "Statement",
          "package": "bash",
          "partial": "Statement",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash.html#t:Statement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Bash",
          "name": "VarName",
          "package": "bash",
          "source": "src/Language-Bash-Syntax.html#VarName",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language Bash",
          "module": "Language.Bash",
          "name": "VarName",
          "package": "bash",
          "partial": "Var Name",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash.html#t:VarName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Bash",
          "name": "pp",
          "package": "bash",
          "signature": "t -\u003e State PPState ()",
          "source": "src/Language-Bash-PrettyPrinter.html#pp",
          "type": "method"
        },
        "index": {
          "hierarchy": "Language Bash",
          "module": "Language.Bash",
          "name": "pp",
          "normalized": "a-\u003eState PPState()",
          "package": "bash",
          "signature": "t-\u003eState PPState()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/bash/docs/Language-Bash.html#v:pp"
      }
    }
  ]
]