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
        "word": "Hsed"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe main types used in the program\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Hsed.Ast",
          "name": "Ast",
          "package": "Hsed",
          "source": "src/Hsed-Ast.html",
          "type": "module"
        },
        "index": {
          "description": "The main types used in the program",
          "hierarchy": "Hsed Ast",
          "module": "Hsed.Ast",
          "name": "Ast",
          "package": "Hsed",
          "partial": "Ast",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Hsed/docs/Hsed-Ast.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn address is either a decimal number that counts input lines cumulatively across files, \n   a \u003ccode\u003e\u003ca\u003e$\u003c/a\u003e\u003c/code\u003e character that addresses the last line of input, or a context address as BRE \n\u003c/p\u003e",
          "module": "Hsed.Ast",
          "name": "Addr",
          "package": "Hsed",
          "source": "src/Hsed-Ast.html#Addr",
          "type": "data"
        },
        "index": {
          "description": "An address is either decimal number that counts input lines cumulatively across files character that addresses the last line of input or context address as BRE",
          "hierarchy": "Hsed Ast",
          "module": "Hsed.Ast",
          "name": "Addr",
          "package": "Hsed",
          "partial": "Addr",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Hsed/docs/Hsed-Ast.html#t:Addr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA permissable address is representing by zero, one or two addresses\n\u003c/p\u003e",
          "module": "Hsed.Ast",
          "name": "Address",
          "package": "Hsed",
          "source": "src/Hsed-Ast.html#Address",
          "type": "data"
        },
        "index": {
          "description": "permissable address is representing by zero one or two addresses",
          "hierarchy": "Hsed Ast",
          "module": "Hsed.Ast",
          "name": "Address",
          "package": "Hsed",
          "partial": "Address",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Hsed/docs/Hsed-Ast.html#t:Address"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFlags used in the substitute command\n\u003c/p\u003e",
          "module": "Hsed.Ast",
          "name": "Flags",
          "package": "Hsed",
          "source": "src/Hsed-Ast.html#Flags",
          "type": "data"
        },
        "index": {
          "description": "Flags used in the substitute command",
          "hierarchy": "Hsed Ast",
          "module": "Hsed.Ast",
          "name": "Flags",
          "package": "Hsed",
          "partial": "Flags",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Hsed/docs/Hsed-Ast.html#t:Flags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hsed.Ast",
          "name": "Invert",
          "package": "Hsed",
          "source": "src/Hsed-Ast.html#Invert",
          "type": "type"
        },
        "index": {
          "hierarchy": "Hsed Ast",
          "module": "Hsed.Ast",
          "name": "Invert",
          "package": "Hsed",
          "partial": "Invert",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Hsed/docs/Hsed-Ast.html#t:Invert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hsed.Ast",
          "name": "Label",
          "package": "Hsed",
          "source": "src/Hsed-Ast.html#Label",
          "type": "type"
        },
        "index": {
          "hierarchy": "Hsed Ast",
          "module": "Hsed.Ast",
          "name": "Label",
          "package": "Hsed",
          "partial": "Label",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Hsed/docs/Hsed-Ast.html#t:Label"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsed in the replacement string. An appersand (\u003ccode\u003e&\u003c/code\u003e) will be replaced by the\n   string matched the BRE. The characters \u003ca\u003en\u003c/a\u003e, where n is a digit will be\n   replaced by the corresponding back-reference expression.\n\u003c/p\u003e",
          "module": "Hsed.Ast",
          "name": "Occurrence",
          "package": "Hsed",
          "source": "src/Hsed-Ast.html#Occurrence",
          "type": "data"
        },
        "index": {
          "description": "Used in the replacement string An appersand will be replaced by the string matched the BRE The characters where is digit will be replaced by the corresponding back-reference expression",
          "hierarchy": "Hsed Ast",
          "module": "Hsed.Ast",
          "name": "Occurrence",
          "package": "Hsed",
          "partial": "Occurrence",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Hsed/docs/Hsed-Ast.html#t:Occurrence"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe allowed sequence of the Occurrence and OutputPat flags in the substitute\n   function\n\u003c/p\u003e",
          "module": "Hsed.Ast",
          "name": "OccurrencePrint",
          "package": "Hsed",
          "source": "src/Hsed-Ast.html#OccurrencePrint",
          "type": "data"
        },
        "index": {
          "description": "The allowed sequence of the Occurrence and OutputPat flags in the substitute function",
          "hierarchy": "Hsed Ast",
          "module": "Hsed.Ast",
          "name": "OccurrencePrint",
          "package": "Hsed",
          "partial": "Occurrence Print",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Hsed/docs/Hsed-Ast.html#t:OccurrencePrint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe flag to control the pattern space output in the substitute function\n\u003c/p\u003e",
          "module": "Hsed.Ast",
          "name": "OutputPat",
          "package": "Hsed",
          "source": "src/Hsed-Ast.html#OutputPat",
          "type": "type"
        },
        "index": {
          "description": "The flag to control the pattern space output in the substitute function",
          "hierarchy": "Hsed Ast",
          "module": "Hsed.Ast",
          "name": "OutputPat",
          "package": "Hsed",
          "partial": "Output Pat",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Hsed/docs/Hsed-Ast.html#t:OutputPat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hsed.Ast",
          "name": "Replacement",
          "package": "Hsed",
          "source": "src/Hsed-Ast.html#Replacement",
          "type": "type"
        },
        "index": {
          "hierarchy": "Hsed Ast",
          "module": "Hsed.Ast",
          "name": "Replacement",
          "package": "Hsed",
          "partial": "Replacement",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Hsed/docs/Hsed-Ast.html#t:Replacement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEditing commands\n\u003c/p\u003e",
          "module": "Hsed.Ast",
          "name": "SedCmd",
          "package": "Hsed",
          "source": "src/Hsed-Ast.html#SedCmd",
          "type": "data"
        },
        "index": {
          "description": "Editing commands",
          "hierarchy": "Hsed Ast",
          "module": "Hsed.Ast",
          "name": "SedCmd",
          "package": "Hsed",
          "partial": "Sed Cmd",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Hsed/docs/Hsed-Ast.html#t:SedCmd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFunctions represents a single-character command verb\n\u003c/p\u003e",
          "module": "Hsed.Ast",
          "name": "SedFun",
          "package": "Hsed",
          "source": "src/Hsed-Ast.html#SedFun",
          "type": "data"
        },
        "index": {
          "description": "Functions represents single-character command verb",
          "hierarchy": "Hsed Ast",
          "module": "Hsed.Ast",
          "name": "SedFun",
          "package": "Hsed",
          "partial": "Sed Fun",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Hsed/docs/Hsed-Ast.html#t:SedFun"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hsed.Ast",
          "name": "Text",
          "package": "Hsed",
          "source": "src/Hsed-Ast.html#Text",
          "type": "type"
        },
        "index": {
          "hierarchy": "Hsed Ast",
          "module": "Hsed.Ast",
          "name": "Text",
          "package": "Hsed",
          "partial": "Text",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Hsed/docs/Hsed-Ast.html#t:Text"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hsed.Ast",
          "name": "Address",
          "package": "Hsed",
          "signature": "Address (Maybe Addr) (Maybe Addr) Invert",
          "source": "src/Hsed-Ast.html#Address",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hsed Ast",
          "module": "Hsed.Ast",
          "name": "Address",
          "package": "Hsed",
          "partial": "Address",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hsed/docs/Hsed-Ast.html#v:Address"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea - append text following each line matched by address \n\u003c/p\u003e",
          "module": "Hsed.Ast",
          "name": "Append",
          "package": "Hsed",
          "signature": "Append Text",
          "source": "src/Hsed-Ast.html#SedFun",
          "type": "function"
        },
        "index": {
          "description": "append text following each line matched by address",
          "hierarchy": "Hsed Ast",
          "module": "Hsed.Ast",
          "name": "Append",
          "package": "Hsed",
          "partial": "Append",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hsed/docs/Hsed-Ast.html#v:Append"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eH - add newline followed by pattern space into the hold space\n\u003c/p\u003e",
          "module": "Hsed.Ast",
          "name": "AppendHold",
          "package": "Hsed",
          "signature": "AppendHold",
          "source": "src/Hsed-Ast.html#SedFun",
          "type": "function"
        },
        "index": {
          "description": "add newline followed by pattern space into the hold space",
          "hierarchy": "Hsed Ast",
          "module": "Hsed.Ast",
          "name": "AppendHold",
          "package": "Hsed",
          "partial": "Append Hold",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hsed/docs/Hsed-Ast.html#v:AppendHold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eN - add next input line and newline into pattern space\n\u003c/p\u003e",
          "module": "Hsed.Ast",
          "name": "AppendLinePat",
          "package": "Hsed",
          "signature": "AppendLinePat",
          "source": "src/Hsed-Ast.html#SedFun",
          "type": "function"
        },
        "index": {
          "description": "add next input line and newline into pattern space",
          "hierarchy": "Hsed Ast",
          "module": "Hsed.Ast",
          "name": "AppendLinePat",
          "package": "Hsed",
          "partial": "Append Line Pat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hsed/docs/Hsed-Ast.html#v:AppendLinePat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eG - add newline followed by hold space into the pattern space\n\u003c/p\u003e",
          "module": "Hsed.Ast",
          "name": "AppendPat",
          "package": "Hsed",
          "signature": "AppendPat",
          "source": "src/Hsed-Ast.html#SedFun",
          "type": "function"
        },
        "index": {
          "description": "add newline followed by hold space into the pattern space",
          "hierarchy": "Hsed Ast",
          "module": "Hsed.Ast",
          "name": "AppendPat",
          "package": "Hsed",
          "partial": "Append Pat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hsed/docs/Hsed-Ast.html#v:AppendPat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eb - transfer control to Label\n\u003c/p\u003e",
          "module": "Hsed.Ast",
          "name": "Branch",
          "package": "Hsed",
          "signature": "Branch (Maybe Label)",
          "source": "src/Hsed-Ast.html#SedFun",
          "type": "function"
        },
        "index": {
          "description": "transfer control to Label",
          "hierarchy": "Hsed Ast",
          "module": "Hsed.Ast",
          "name": "Branch",
          "package": "Hsed",
          "partial": "Branch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hsed/docs/Hsed-Ast.html#v:Branch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ec - replace the lines selected by the address with Text\n\u003c/p\u003e",
          "module": "Hsed.Ast",
          "name": "Change",
          "package": "Hsed",
          "signature": "Change Text",
          "source": "src/Hsed-Ast.html#SedFun",
          "type": "function"
        },
        "index": {
          "description": "replace the lines selected by the address with Text",
          "hierarchy": "Hsed Ast",
          "module": "Hsed.Ast",
          "name": "Change",
          "package": "Hsed",
          "partial": "Change",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hsed/docs/Hsed-Ast.html#v:Change"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ca name=\" - ignore a line in the script except \\\"\"/\u003en\" in the first line \n\u003c/p\u003e",
          "module": "Hsed.Ast",
          "name": "Comment",
          "package": "Hsed",
          "signature": "Comment",
          "source": "src/Hsed-Ast.html#SedFun",
          "type": "function"
        },
        "index": {
          "description": "in the first line",
          "hierarchy": "Hsed Ast",
          "module": "Hsed.Ast",
          "name": "Comment",
          "package": "Hsed",
          "partial": "Comment",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hsed/docs/Hsed-Ast.html#v:Comment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ed - delete line(s) from pattern space\n\u003c/p\u003e",
          "module": "Hsed.Ast",
          "name": "DeleteLine",
          "package": "Hsed",
          "signature": "DeleteLine",
          "source": "src/Hsed-Ast.html#SedFun",
          "type": "function"
        },
        "index": {
          "description": "delete line from pattern space",
          "hierarchy": "Hsed Ast",
          "module": "Hsed.Ast",
          "name": "DeleteLine",
          "package": "Hsed",
          "partial": "Delete Line",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hsed/docs/Hsed-Ast.html#v:DeleteLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eD - delete (up to newline) of multiline pattern space\n\u003c/p\u003e",
          "module": "Hsed.Ast",
          "name": "DeletePat",
          "package": "Hsed",
          "signature": "DeletePat",
          "source": "src/Hsed-Ast.html#SedFun",
          "type": "function"
        },
        "index": {
          "description": "delete up to newline of multiline pattern space",
          "hierarchy": "Hsed Ast",
          "module": "Hsed.Ast",
          "name": "DeletePat",
          "package": "Hsed",
          "partial": "Delete Pat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hsed/docs/Hsed-Ast.html#v:DeletePat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cul\u003e\u003cli\u003e ignore spaces\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Hsed.Ast",
          "name": "EmptyCmd",
          "package": "Hsed",
          "signature": "EmptyCmd",
          "source": "src/Hsed-Ast.html#SedFun",
          "type": "function"
        },
        "index": {
          "description": "ignore spaces",
          "hierarchy": "Hsed Ast",
          "module": "Hsed.Ast",
          "name": "EmptyCmd",
          "package": "Hsed",
          "partial": "Empty Cmd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hsed/docs/Hsed-Ast.html#v:EmptyCmd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ex - exchange pattern space with hold space\n\u003c/p\u003e",
          "module": "Hsed.Ast",
          "name": "Exchange",
          "package": "Hsed",
          "signature": "Exchange",
          "source": "src/Hsed-Ast.html#SedFun",
          "type": "function"
        },
        "index": {
          "description": "exchange pattern space with hold space",
          "hierarchy": "Hsed Ast",
          "module": "Hsed.Ast",
          "name": "Exchange",
          "package": "Hsed",
          "partial": "Exchange",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hsed/docs/Hsed-Ast.html#v:Exchange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hsed.Ast",
          "name": "Flags",
          "package": "Hsed",
          "signature": "Flags (Maybe OccurrencePrint) (Maybe FilePath)",
          "source": "src/Hsed-Ast.html#Flags",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hsed Ast",
          "module": "Hsed.Ast",
          "name": "Flags",
          "package": "Hsed",
          "partial": "Flags",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hsed/docs/Hsed-Ast.html#v:Flags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e{ - group of the sed commands\n\u003c/p\u003e",
          "module": "Hsed.Ast",
          "name": "Group",
          "package": "Hsed",
          "signature": "Group [SedCmd]",
          "source": "src/Hsed-Ast.html#SedFun",
          "type": "function"
        },
        "index": {
          "description": "group of the sed commands",
          "hierarchy": "Hsed Ast",
          "module": "Hsed.Ast",
          "name": "Group",
          "normalized": "Group[SedCmd]",
          "package": "Hsed",
          "partial": "Group",
          "signature": "Group[SedCmd]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hsed/docs/Hsed-Ast.html#v:Group"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ei - insert Text before each line matched by address \n\u003c/p\u003e",
          "module": "Hsed.Ast",
          "name": "Insert",
          "package": "Hsed",
          "signature": "Insert Text",
          "source": "src/Hsed-Ast.html#SedFun",
          "type": "function"
        },
        "index": {
          "description": "insert Text before each line matched by address",
          "hierarchy": "Hsed Ast",
          "module": "Hsed.Ast",
          "name": "Insert",
          "package": "Hsed",
          "partial": "Insert",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hsed/docs/Hsed-Ast.html#v:Insert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e: - label a line in the scipt for transfering by b or t.\n\u003c/p\u003e",
          "module": "Hsed.Ast",
          "name": "Label",
          "package": "Hsed",
          "signature": "Label Label",
          "source": "src/Hsed-Ast.html#SedFun",
          "type": "function"
        },
        "index": {
          "description": "label line in the scipt for transfering by or",
          "hierarchy": "Hsed Ast",
          "module": "Hsed.Ast",
          "name": "Label",
          "package": "Hsed",
          "partial": "Label",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hsed/docs/Hsed-Ast.html#v:Label"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hsed.Ast",
          "name": "LastLine",
          "package": "Hsed",
          "signature": "LastLine",
          "source": "src/Hsed-Ast.html#Addr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hsed Ast",
          "module": "Hsed.Ast",
          "name": "LastLine",
          "package": "Hsed",
          "partial": "Last Line",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hsed/docs/Hsed-Ast.html#v:LastLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e= - write to standard output the current line number\n\u003c/p\u003e",
          "module": "Hsed.Ast",
          "name": "LineNum",
          "package": "Hsed",
          "signature": "LineNum",
          "source": "src/Hsed-Ast.html#SedFun",
          "type": "function"
        },
        "index": {
          "description": "write to standard output the current line number",
          "hierarchy": "Hsed Ast",
          "module": "Hsed.Ast",
          "name": "LineNum",
          "package": "Hsed",
          "partial": "Line Num",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hsed/docs/Hsed-Ast.html#v:LineNum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hsed.Ast",
          "name": "LineNumber",
          "package": "Hsed",
          "signature": "LineNumber Int",
          "source": "src/Hsed-Ast.html#Addr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hsed Ast",
          "module": "Hsed.Ast",
          "name": "LineNumber",
          "package": "Hsed",
          "partial": "Line Number",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hsed/docs/Hsed-Ast.html#v:LineNumber"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003el - list the pattern space, showing non-printing chars in ASCII\n\u003c/p\u003e",
          "module": "Hsed.Ast",
          "name": "List",
          "package": "Hsed",
          "signature": "List",
          "source": "src/Hsed-Ast.html#SedFun",
          "type": "function"
        },
        "index": {
          "description": "list the pattern space showing non-printing chars in ASCII",
          "hierarchy": "Hsed Ast",
          "module": "Hsed.Ast",
          "name": "List",
          "package": "Hsed",
          "partial": "List",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hsed/docs/Hsed-Ast.html#v:List"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003en - read next line of input into pattern space\n\u003c/p\u003e",
          "module": "Hsed.Ast",
          "name": "NextLine",
          "package": "Hsed",
          "signature": "NextLine",
          "source": "src/Hsed-Ast.html#SedFun",
          "type": "function"
        },
        "index": {
          "description": "read next line of input into pattern space",
          "hierarchy": "Hsed Ast",
          "module": "Hsed.Ast",
          "name": "NextLine",
          "package": "Hsed",
          "partial": "Next Line",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hsed/docs/Hsed-Ast.html#v:NextLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hsed.Ast",
          "name": "OccurrencePrint",
          "package": "Hsed",
          "signature": "OccurrencePrint (Maybe Occurrence) OutputPat",
          "source": "src/Hsed-Ast.html#OccurrencePrint",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hsed Ast",
          "module": "Hsed.Ast",
          "name": "OccurrencePrint",
          "package": "Hsed",
          "partial": "Occurrence Print",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hsed/docs/Hsed-Ast.html#v:OccurrencePrint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hsed.Ast",
          "name": "Pat",
          "package": "Hsed",
          "signature": "Pat Pattern",
          "source": "src/Hsed-Ast.html#Addr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hsed Ast",
          "module": "Hsed.Ast",
          "name": "Pat",
          "package": "Hsed",
          "partial": "Pat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hsed/docs/Hsed-Ast.html#v:Pat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hsed.Ast",
          "name": "PrintOccurrence",
          "package": "Hsed",
          "signature": "PrintOccurrence OutputPat (Maybe Occurrence)",
          "source": "src/Hsed-Ast.html#OccurrencePrint",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hsed Ast",
          "module": "Hsed.Ast",
          "name": "PrintOccurrence",
          "package": "Hsed",
          "partial": "Print Occurrence",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hsed/docs/Hsed-Ast.html#v:PrintOccurrence"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ep - print the addressed line(s)\n\u003c/p\u003e",
          "module": "Hsed.Ast",
          "name": "PrintPat",
          "package": "Hsed",
          "signature": "PrintPat",
          "source": "src/Hsed-Ast.html#SedFun",
          "type": "function"
        },
        "index": {
          "description": "print the addressed line",
          "hierarchy": "Hsed Ast",
          "module": "Hsed.Ast",
          "name": "PrintPat",
          "package": "Hsed",
          "partial": "Print Pat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hsed/docs/Hsed-Ast.html#v:PrintPat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eq - quit when address is encounterd\n\u003c/p\u003e",
          "module": "Hsed.Ast",
          "name": "Quit",
          "package": "Hsed",
          "signature": "Quit",
          "source": "src/Hsed-Ast.html#SedFun",
          "type": "function"
        },
        "index": {
          "description": "quit when address is encounterd",
          "hierarchy": "Hsed Ast",
          "module": "Hsed.Ast",
          "name": "Quit",
          "package": "Hsed",
          "partial": "Quit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hsed/docs/Hsed-Ast.html#v:Quit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003er - add contents of file to the pattern space\n\u003c/p\u003e",
          "module": "Hsed.Ast",
          "name": "ReadFile",
          "package": "Hsed",
          "signature": "ReadFile FilePath",
          "source": "src/Hsed-Ast.html#SedFun",
          "type": "function"
        },
        "index": {
          "description": "add contents of file to the pattern space",
          "hierarchy": "Hsed Ast",
          "module": "Hsed.Ast",
          "name": "ReadFile",
          "package": "Hsed",
          "partial": "Read File",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hsed/docs/Hsed-Ast.html#v:ReadFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hsed.Ast",
          "name": "Replace",
          "package": "Hsed",
          "signature": "Replace Int",
          "source": "src/Hsed-Ast.html#Occurrence",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hsed Ast",
          "module": "Hsed.Ast",
          "name": "Replace",
          "package": "Hsed",
          "partial": "Replace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hsed/docs/Hsed-Ast.html#v:Replace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hsed.Ast",
          "name": "ReplaceAll",
          "package": "Hsed",
          "signature": "ReplaceAll",
          "source": "src/Hsed-Ast.html#Occurrence",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hsed Ast",
          "module": "Hsed.Ast",
          "name": "ReplaceAll",
          "package": "Hsed",
          "partial": "Replace All",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hsed/docs/Hsed-Ast.html#v:ReplaceAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eh - copy pattern space into hold space\n\u003c/p\u003e",
          "module": "Hsed.Ast",
          "name": "ReplaceHold",
          "package": "Hsed",
          "signature": "ReplaceHold",
          "source": "src/Hsed-Ast.html#SedFun",
          "type": "function"
        },
        "index": {
          "description": "copy pattern space into hold space",
          "hierarchy": "Hsed Ast",
          "module": "Hsed.Ast",
          "name": "ReplaceHold",
          "package": "Hsed",
          "partial": "Replace Hold",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hsed/docs/Hsed-Ast.html#v:ReplaceHold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eg - copy hold space into the pattern space\n\u003c/p\u003e",
          "module": "Hsed.Ast",
          "name": "ReplacePat",
          "package": "Hsed",
          "signature": "ReplacePat",
          "source": "src/Hsed-Ast.html#SedFun",
          "type": "function"
        },
        "index": {
          "description": "copy hold space into the pattern space",
          "hierarchy": "Hsed Ast",
          "module": "Hsed.Ast",
          "name": "ReplacePat",
          "package": "Hsed",
          "partial": "Replace Pat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hsed/docs/Hsed-Ast.html#v:ReplacePat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hsed.Ast",
          "name": "SedCmd",
          "package": "Hsed",
          "signature": "SedCmd Address SedFun",
          "source": "src/Hsed-Ast.html#SedCmd",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hsed Ast",
          "module": "Hsed.Ast",
          "name": "SedCmd",
          "package": "Hsed",
          "partial": "Sed Cmd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hsed/docs/Hsed-Ast.html#v:SedCmd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003es - substitute Replacement for Pattern\n\u003c/p\u003e",
          "module": "Hsed.Ast",
          "name": "Substitute",
          "package": "Hsed",
          "signature": "Substitute Pattern Replacement Flags",
          "source": "src/Hsed-Ast.html#SedFun",
          "type": "function"
        },
        "index": {
          "description": "substitute Replacement for Pattern",
          "hierarchy": "Hsed Ast",
          "module": "Hsed.Ast",
          "name": "Substitute",
          "package": "Hsed",
          "partial": "Substitute",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hsed/docs/Hsed-Ast.html#v:Substitute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003et - branch to line marked by :label if substitution was made \n\u003c/p\u003e",
          "module": "Hsed.Ast",
          "name": "Test",
          "package": "Hsed",
          "signature": "Test (Maybe Label)",
          "source": "src/Hsed-Ast.html#SedFun",
          "type": "function"
        },
        "index": {
          "description": "branch to line marked by label if substitution was made",
          "hierarchy": "Hsed Ast",
          "module": "Hsed.Ast",
          "name": "Test",
          "package": "Hsed",
          "partial": "Test",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hsed/docs/Hsed-Ast.html#v:Test"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ey - transform each char by position in Text to Text\n\u003c/p\u003e",
          "module": "Hsed.Ast",
          "name": "Transform",
          "package": "Hsed",
          "signature": "Transform Text Text",
          "source": "src/Hsed-Ast.html#SedFun",
          "type": "function"
        },
        "index": {
          "description": "transform each char by position in Text to Text",
          "hierarchy": "Hsed Ast",
          "module": "Hsed.Ast",
          "name": "Transform",
          "package": "Hsed",
          "partial": "Transform",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hsed/docs/Hsed-Ast.html#v:Transform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ew - write the line to file if a replacement was done\n\u003c/p\u003e",
          "module": "Hsed.Ast",
          "name": "WriteFile",
          "package": "Hsed",
          "signature": "WriteFile FilePath",
          "source": "src/Hsed-Ast.html#SedFun",
          "type": "function"
        },
        "index": {
          "description": "write the line to file if replacement was done",
          "hierarchy": "Hsed Ast",
          "module": "Hsed.Ast",
          "name": "WriteFile",
          "package": "Hsed",
          "partial": "Write File",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hsed/docs/Hsed-Ast.html#v:WriteFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eP - print (up to newline) of multiline pattern space   \n\u003c/p\u003e",
          "module": "Hsed.Ast",
          "name": "WriteUpPat",
          "package": "Hsed",
          "signature": "WriteUpPat",
          "source": "src/Hsed-Ast.html#SedFun",
          "type": "function"
        },
        "index": {
          "description": "print up to newline of multiline pattern space",
          "hierarchy": "Hsed Ast",
          "module": "Hsed.Ast",
          "name": "WriteUpPat",
          "package": "Hsed",
          "partial": "Write Up Pat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hsed/docs/Hsed-Ast.html#v:WriteUpPat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSed commands parser. See \u003ca\u003eThe Open Group Base Specifications Issue 7\u003c/a\u003e for\n parsing requirements. The current version of the Haskell Sed doesn't supports\n the back-references in the RE.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Hsed.Parsec",
          "name": "Parsec",
          "package": "Hsed",
          "source": "src/Hsed-Parsec.html",
          "type": "module"
        },
        "index": {
          "description": "Sed commands parser See The Open Group Base Specifications Issue for parsing requirements The current version of the Haskell Sed doesn supports the back-references in the RE",
          "hierarchy": "Hsed Parsec",
          "module": "Hsed.Parsec",
          "name": "Parsec",
          "package": "Hsed",
          "partial": "Parsec",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Hsed/docs/Hsed-Parsec.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf an RE is empty last RE used in the last command applied \n\u003c/p\u003e",
          "module": "Hsed.Parsec",
          "name": "ParserState",
          "package": "Hsed",
          "source": "src/Hsed-Parsec.html#ParserState",
          "type": "data"
        },
        "index": {
          "description": "If an RE is empty last RE used in the last command applied",
          "hierarchy": "Hsed Parsec",
          "module": "Hsed.Parsec",
          "name": "ParserState",
          "package": "Hsed",
          "partial": "Parser State",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Hsed/docs/Hsed-Parsec.html#t:ParserState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hsed.Parsec",
          "name": "SedParser",
          "package": "Hsed",
          "source": "src/Hsed-Parsec.html#SedParser",
          "type": "type"
        },
        "index": {
          "hierarchy": "Hsed Parsec",
          "module": "Hsed.Parsec",
          "name": "SedParser",
          "package": "Hsed",
          "partial": "Sed Parser",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Hsed/docs/Hsed-Parsec.html#t:SedParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hsed.Parsec",
          "name": "Stream",
          "package": "Hsed",
          "source": "src/Hsed-Parsec.html#Stream",
          "type": "type"
        },
        "index": {
          "hierarchy": "Hsed Parsec",
          "module": "Hsed.Parsec",
          "name": "Stream",
          "package": "Hsed",
          "partial": "Stream",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Hsed/docs/Hsed-Parsec.html#t:Stream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hsed.Parsec",
          "name": "ParserState",
          "package": "Hsed",
          "signature": "ParserState",
          "source": "src/Hsed-Parsec.html#ParserState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hsed Parsec",
          "module": "Hsed.Parsec",
          "name": "ParserState",
          "package": "Hsed",
          "partial": "Parser State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hsed/docs/Hsed-Parsec.html#v:ParserState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hsed.Parsec",
          "name": "address",
          "package": "Hsed",
          "signature": "SedParser Address",
          "source": "src/Hsed-Parsec.html#address",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hsed Parsec",
          "module": "Hsed.Parsec",
          "name": "address",
          "package": "Hsed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hsed/docs/Hsed-Parsec.html#v:address"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hsed.Parsec",
          "name": "argFun",
          "package": "Hsed",
          "signature": "Char -\u003e (ByteString -\u003e SedFun) -\u003e SedParser SedFun",
          "source": "src/Hsed-Parsec.html#argFun",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hsed Parsec",
          "module": "Hsed.Parsec",
          "name": "argFun",
          "normalized": "Char-\u003e(ByteString-\u003eSedFun)-\u003eSedParser SedFun",
          "package": "Hsed",
          "partial": "Fun",
          "signature": "Char-\u003e(ByteString-\u003eSedFun)-\u003eSedParser SedFun",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hsed/docs/Hsed-Parsec.html#v:argFun"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hsed.Parsec",
          "name": "bareFun",
          "package": "Hsed",
          "signature": "Char -\u003e SedFun -\u003e SedParser SedFun",
          "source": "src/Hsed-Parsec.html#bareFun",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hsed Parsec",
          "module": "Hsed.Parsec",
          "name": "bareFun",
          "normalized": "Char-\u003eSedFun-\u003eSedParser SedFun",
          "package": "Hsed",
          "partial": "Fun",
          "signature": "Char-\u003eSedFun-\u003eSedParser SedFun",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hsed/docs/Hsed-Parsec.html#v:bareFun"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hsed.Parsec",
          "name": "fileFun",
          "package": "Hsed",
          "signature": "Char -\u003e (FilePath -\u003e SedFun) -\u003e SedParser SedFun",
          "source": "src/Hsed-Parsec.html#fileFun",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hsed Parsec",
          "module": "Hsed.Parsec",
          "name": "fileFun",
          "normalized": "Char-\u003e(FilePath-\u003eSedFun)-\u003eSedParser SedFun",
          "package": "Hsed",
          "partial": "Fun",
          "signature": "Char-\u003e(FilePath-\u003eSedFun)-\u003eSedParser SedFun",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hsed/docs/Hsed-Parsec.html#v:fileFun"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hsed.Parsec",
          "name": "gotoFun",
          "package": "Hsed",
          "signature": "Char -\u003e (Maybe Label -\u003e SedFun) -\u003e SedParser SedFun",
          "source": "src/Hsed-Parsec.html#gotoFun",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hsed Parsec",
          "module": "Hsed.Parsec",
          "name": "gotoFun",
          "normalized": "Char-\u003e(Maybe Label-\u003eSedFun)-\u003eSedParser SedFun",
          "package": "Hsed",
          "partial": "Fun",
          "signature": "Char-\u003e(Maybe Label-\u003eSedFun)-\u003eSedParser SedFun",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hsed/docs/Hsed-Parsec.html#v:gotoFun"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hsed.Parsec",
          "name": "lastRE",
          "package": "Hsed",
          "signature": "Pattern",
          "source": "src/Hsed-Parsec.html#ParserState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hsed Parsec",
          "module": "Hsed.Parsec",
          "name": "lastRE",
          "package": "Hsed",
          "partial": "RE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hsed/docs/Hsed-Parsec.html#v:lastRE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hsed.Parsec",
          "name": "parseRE",
          "package": "Hsed",
          "signature": "String -\u003e SedParser Pattern",
          "source": "src/Hsed-Parsec.html#parseRE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hsed Parsec",
          "module": "Hsed.Parsec",
          "name": "parseRE",
          "normalized": "String-\u003eSedParser Pattern",
          "package": "Hsed",
          "partial": "RE",
          "signature": "String-\u003eSedParser Pattern",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hsed/docs/Hsed-Parsec.html#v:parseRE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hsed.Parsec",
          "name": "parseSed",
          "package": "Hsed",
          "signature": "SedParser a -\u003e Stream -\u003e Either ParseError a",
          "source": "src/Hsed-Parsec.html#parseSed",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hsed Parsec",
          "module": "Hsed.Parsec",
          "name": "parseSed",
          "normalized": "SedParser a-\u003eStream-\u003eEither ParseError a",
          "package": "Hsed",
          "partial": "Sed",
          "signature": "SedParser a-\u003eStream-\u003eEither ParseError a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hsed/docs/Hsed-Parsec.html#v:parseSed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hsed.Parsec",
          "name": "sedCmd",
          "package": "Hsed",
          "signature": "SedParser SedCmd",
          "source": "src/Hsed-Parsec.html#sedCmd",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hsed Parsec",
          "module": "Hsed.Parsec",
          "name": "sedCmd",
          "package": "Hsed",
          "partial": "Cmd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hsed/docs/Hsed-Parsec.html#v:sedCmd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hsed.Parsec",
          "name": "sedCmds",
          "package": "Hsed",
          "signature": "SedParser [SedCmd]",
          "source": "src/Hsed-Parsec.html#sedCmds",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hsed Parsec",
          "module": "Hsed.Parsec",
          "name": "sedCmds",
          "normalized": "SedParser[SedCmd]",
          "package": "Hsed",
          "partial": "Cmds",
          "signature": "SedParser[SedCmd]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hsed/docs/Hsed-Parsec.html#v:sedCmds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hsed.Parsec",
          "name": "sedFun",
          "package": "Hsed",
          "signature": "SedParser SedFun",
          "source": "src/Hsed-Parsec.html#sedFun",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hsed Parsec",
          "module": "Hsed.Parsec",
          "name": "sedFun",
          "package": "Hsed",
          "partial": "Fun",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hsed/docs/Hsed-Parsec.html#v:sedFun"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hsed.Parsec",
          "name": "textFun",
          "package": "Hsed",
          "signature": "Char -\u003e (Text -\u003e SedFun) -\u003e SedParser SedFun",
          "source": "src/Hsed-Parsec.html#textFun",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hsed Parsec",
          "module": "Hsed.Parsec",
          "name": "textFun",
          "normalized": "Char-\u003e(Text-\u003eSedFun)-\u003eSedParser SedFun",
          "package": "Hsed",
          "partial": "Fun",
          "signature": "Char-\u003e(Text-\u003eSedFun)-\u003eSedParser SedFun",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hsed/docs/Hsed-Parsec.html#v:textFun"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides functions to execute the sed script. \n See \u003ccode\u003e\u003ca\u003eexecScript\u003c/a\u003e\u003c/code\u003e below for an example\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Hsed.Sed",
          "name": "Sed",
          "package": "Hsed",
          "source": "src/Hsed-Sed.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides functions to execute the sed script See execScript below for an example",
          "hierarchy": "Hsed Sed",
          "module": "Hsed.Sed",
          "name": "Sed",
          "package": "Hsed",
          "partial": "Sed",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Hsed/docs/Hsed-Sed.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hsed.Sed",
          "name": "SedScript",
          "package": "Hsed",
          "source": "src/Hsed-Sed.html#SedScript",
          "type": "type"
        },
        "index": {
          "hierarchy": "Hsed Sed",
          "module": "Hsed.Sed",
          "name": "SedScript",
          "package": "Hsed",
          "partial": "Sed Script",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Hsed/docs/Hsed-Sed.html#t:SedScript"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute the sed script and print the output to ByteString. \n Example. Suppose the ..\u003cem\u003etests\u003c/em\u003eTransform.in file contains the line 'Hello world!'.\n execScript [\"..\u003cem\u003etests\u003c/em\u003eTransform.in\"] \"y\u003cem\u003eabcdefghijklmnopqrstuvwxyz\u003c/em\u003eABCDEFGHIJKLMNOPQRSTUVWXYZ/\"\n will produce 'HELLO WORLD!' bytestring.\n\u003c/p\u003e",
          "module": "Hsed.Sed",
          "name": "execScript",
          "package": "Hsed",
          "signature": "[FilePath] -\u003e SedScript -\u003e IO ByteString",
          "source": "src/Hsed-Sed.html#execScript",
          "type": "function"
        },
        "index": {
          "description": "Execute the sed script and print the output to ByteString Example Suppose the tests Transform.in file contains the line Hello world execScript tests Transform.in abcdefghijklmnopqrstuvwxyz ABCDEFGHIJKLMNOPQRSTUVWXYZ will produce HELLO WORLD bytestring",
          "hierarchy": "Hsed Sed",
          "module": "Hsed.Sed",
          "name": "execScript",
          "normalized": "[FilePath]-\u003eSedScript-\u003eIO ByteString",
          "package": "Hsed",
          "partial": "Script",
          "signature": "[FilePath]-\u003eSedScript-\u003eIO ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hsed/docs/Hsed-Sed.html#v:execScript"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute the sed script and print the result to stdout \n\u003c/p\u003e",
          "module": "Hsed.Sed",
          "name": "execScript_",
          "package": "Hsed",
          "signature": "[FilePath] -\u003e SedScript -\u003e IO ()",
          "source": "src/Hsed-Sed.html#execScript_",
          "type": "function"
        },
        "index": {
          "description": "Execute the sed script and print the result to stdout",
          "hierarchy": "Hsed Sed",
          "module": "Hsed.Sed",
          "name": "execScript_",
          "normalized": "[FilePath]-\u003eSedScript-\u003eIO()",
          "package": "Hsed",
          "partial": "Script",
          "signature": "[FilePath]-\u003eSedScript-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hsed/docs/Hsed-Sed.html#v:execScript_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hsed.SedRegex",
          "name": "SedRegex",
          "package": "Hsed",
          "source": "src/Hsed-SedRegex.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Hsed SedRegex",
          "module": "Hsed.SedRegex",
          "name": "SedRegex",
          "package": "Hsed",
          "partial": "Sed Regex",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Hsed/docs/Hsed-SedRegex.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hsed.SedRegex",
          "name": "Pattern",
          "package": "Hsed",
          "source": "src/Hsed-SedRegex.html#Pattern",
          "type": "type"
        },
        "index": {
          "hierarchy": "Hsed SedRegex",
          "module": "Hsed.SedRegex",
          "name": "Pattern",
          "package": "Hsed",
          "partial": "Pattern",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Hsed/docs/Hsed-SedRegex.html#t:Pattern"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReplaces every occurance of the given regexp with the replacement string. \n   Modification of the subRegex function from regex-posix package.\n\u003c/p\u003e",
          "module": "Hsed.SedRegex",
          "name": "sedSubRegex",
          "package": "Hsed",
          "signature": "ByteString-\u003e ByteString-\u003e ByteString-\u003e Int-\u003e (ByteString, Bool)",
          "type": "function"
        },
        "index": {
          "description": "Replaces every occurance of the given regexp with the replacement string Modification of the subRegex function from regex-posix package",
          "hierarchy": "Hsed SedRegex",
          "module": "Hsed.SedRegex",
          "name": "sedSubRegex",
          "normalized": "ByteString-\u003eByteString-\u003eByteString-\u003eInt-\u003e(ByteString,Bool)",
          "package": "Hsed",
          "partial": "Sub Regex",
          "signature": "ByteString-\u003eByteString-\u003eByteString-\u003eInt-\u003e(ByteString,Bool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hsed/docs/Hsed-SedRegex.html#v:sedSubRegex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe state of the program \n\u003c/p\u003e\u003c/div\u003e",
          "module": "Hsed.SedState",
          "name": "SedState",
          "package": "Hsed",
          "source": "src/Hsed-SedState.html",
          "type": "module"
        },
        "index": {
          "description": "The state of the program",
          "hierarchy": "Hsed SedState",
          "module": "Hsed.SedState",
          "name": "SedState",
          "package": "Hsed",
          "partial": "Sed State",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Hsed/docs/Hsed-SedState.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hsed.SedState",
          "name": "Env",
          "package": "Hsed",
          "source": "src/Hsed-SedState.html#Env",
          "type": "data"
        },
        "index": {
          "hierarchy": "Hsed SedState",
          "module": "Hsed.SedState",
          "name": "Env",
          "package": "Hsed",
          "partial": "Env",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Hsed/docs/Hsed-SedState.html#t:Env"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hsed.SedState",
          "name": "SedState",
          "package": "Hsed",
          "source": "src/Hsed-SedState.html#SedState",
          "type": "type"
        },
        "index": {
          "hierarchy": "Hsed SedState",
          "module": "Hsed.SedState",
          "name": "SedState",
          "package": "Hsed",
          "partial": "Sed State",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Hsed/docs/Hsed-SedState.html#t:SedState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hsed.SedState",
          "name": "Env",
          "package": "Hsed",
          "signature": "Env",
          "source": "src/Hsed-SedState.html#Env",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hsed SedState",
          "module": "Hsed.SedState",
          "name": "Env",
          "package": "Hsed",
          "partial": "Env",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hsed/docs/Hsed-SedState.html#v:Env"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hsed.SedState",
          "name": "appendSpace",
          "package": "Hsed",
          "signature": "T Env [ByteString]",
          "source": "src/Hsed-SedState.html#appendSpace",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hsed SedState",
          "module": "Hsed.SedState",
          "name": "appendSpace",
          "normalized": "T Env[ByteString]",
          "package": "Hsed",
          "partial": "Space",
          "signature": "T Env[ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hsed/docs/Hsed-SedState.html#v:appendSpace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe buffer to keep the append lines\n\u003c/p\u003e",
          "module": "Hsed.SedState",
          "name": "appendSpace_",
          "package": "Hsed",
          "signature": "[ByteString]",
          "source": "src/Hsed-SedState.html#Env",
          "type": "function"
        },
        "index": {
          "description": "The buffer to keep the append lines",
          "hierarchy": "Hsed SedState",
          "module": "Hsed.SedState",
          "name": "appendSpace_",
          "normalized": "[ByteString]",
          "package": "Hsed",
          "partial": "Space",
          "signature": "[ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hsed/docs/Hsed-SedState.html#v:appendSpace_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hsed.SedState",
          "name": "ast",
          "package": "Hsed",
          "signature": "T Env [SedCmd]",
          "source": "src/Hsed-SedState.html#ast",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hsed SedState",
          "module": "Hsed.SedState",
          "name": "ast",
          "normalized": "T Env[SedCmd]",
          "package": "Hsed",
          "signature": "T Env[SedCmd]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hsed/docs/Hsed-SedState.html#v:ast"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParsed Sed commands\n\u003c/p\u003e",
          "module": "Hsed.SedState",
          "name": "ast_",
          "package": "Hsed",
          "signature": "[SedCmd]",
          "source": "src/Hsed-SedState.html#Env",
          "type": "function"
        },
        "index": {
          "description": "Parsed Sed commands",
          "hierarchy": "Hsed SedState",
          "module": "Hsed.SedState",
          "name": "ast_",
          "normalized": "[SedCmd]",
          "package": "Hsed",
          "signature": "[SedCmd]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hsed/docs/Hsed-SedState.html#v:ast_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hsed.SedState",
          "name": "curFile",
          "package": "Hsed",
          "signature": "T Env (Handle, Bool)",
          "source": "src/Hsed-SedState.html#curFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hsed SedState",
          "module": "Hsed.SedState",
          "name": "curFile",
          "normalized": "T Env(Handle,Bool)",
          "package": "Hsed",
          "partial": "File",
          "signature": "T Env(Handle,Bool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hsed/docs/Hsed-SedState.html#v:curFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCurrent input file handle  \n\u003c/p\u003e",
          "module": "Hsed.SedState",
          "name": "curFile_",
          "package": "Hsed",
          "signature": "(Handle, Bool)",
          "source": "src/Hsed-SedState.html#Env",
          "type": "function"
        },
        "index": {
          "description": "Current input file handle",
          "hierarchy": "Hsed SedState",
          "module": "Hsed.SedState",
          "name": "curFile_",
          "normalized": "(Handle,Bool)",
          "package": "Hsed",
          "partial": "File",
          "signature": "(Handle,Bool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hsed/docs/Hsed-SedState.html#v:curFile_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hsed.SedState",
          "name": "curLine",
          "package": "Hsed",
          "signature": "T Env Int",
          "source": "src/Hsed-SedState.html#curLine",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hsed SedState",
          "module": "Hsed.SedState",
          "name": "curLine",
          "package": "Hsed",
          "partial": "Line",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hsed/docs/Hsed-SedState.html#v:curLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe current line index\n\u003c/p\u003e",
          "module": "Hsed.SedState",
          "name": "curLine_",
          "package": "Hsed",
          "signature": "Int",
          "source": "src/Hsed-SedState.html#Env",
          "type": "function"
        },
        "index": {
          "description": "The current line index",
          "hierarchy": "Hsed SedState",
          "module": "Hsed.SedState",
          "name": "curLine_",
          "package": "Hsed",
          "partial": "Line",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hsed/docs/Hsed-SedState.html#v:curLine_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hsed.SedState",
          "name": "defOutput",
          "package": "Hsed",
          "signature": "T Env Bool",
          "source": "src/Hsed-SedState.html#defOutput",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hsed SedState",
          "module": "Hsed.SedState",
          "name": "defOutput",
          "package": "Hsed",
          "partial": "Output",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hsed/docs/Hsed-SedState.html#v:defOutput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSuppress the default output\n\u003c/p\u003e",
          "module": "Hsed.SedState",
          "name": "defOutput_",
          "package": "Hsed",
          "signature": "Bool",
          "source": "src/Hsed-SedState.html#Env",
          "type": "function"
        },
        "index": {
          "description": "Suppress the default output",
          "hierarchy": "Hsed SedState",
          "module": "Hsed.SedState",
          "name": "defOutput_",
          "package": "Hsed",
          "partial": "Output",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hsed/docs/Hsed-SedState.html#v:defOutput_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hsed.SedState",
          "name": "exit",
          "package": "Hsed",
          "signature": "T Env Bool",
          "source": "src/Hsed-SedState.html#exit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hsed SedState",
          "module": "Hsed.SedState",
          "name": "exit",
          "package": "Hsed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hsed/docs/Hsed-SedState.html#v:exit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExit the stream editor\n\u003c/p\u003e",
          "module": "Hsed.SedState",
          "name": "exit_",
          "package": "Hsed",
          "signature": "Bool",
          "source": "src/Hsed-SedState.html#Env",
          "type": "function"
        },
        "index": {
          "description": "Exit the stream editor",
          "hierarchy": "Hsed SedState",
          "module": "Hsed.SedState",
          "name": "exit_",
          "package": "Hsed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hsed/docs/Hsed-SedState.html#v:exit_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hsed.SedState",
          "name": "fileout",
          "package": "Hsed",
          "signature": "T Env [(FilePath, Handle)]",
          "source": "src/Hsed-SedState.html#fileout",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hsed SedState",
          "module": "Hsed.SedState",
          "name": "fileout",
          "normalized": "T Env[(FilePath,Handle)]",
          "package": "Hsed",
          "signature": "T Env[(FilePath,Handle)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hsed/docs/Hsed-SedState.html#v:fileout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite (w command) files handles \n\u003c/p\u003e",
          "module": "Hsed.SedState",
          "name": "fileout_",
          "package": "Hsed",
          "signature": "[(FilePath, Handle)]",
          "source": "src/Hsed-SedState.html#Env",
          "type": "function"
        },
        "index": {
          "description": "Write command files handles",
          "hierarchy": "Hsed SedState",
          "module": "Hsed.SedState",
          "name": "fileout_",
          "normalized": "[(FilePath,Handle)]",
          "package": "Hsed",
          "signature": "[(FilePath,Handle)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hsed/docs/Hsed-SedState.html#v:fileout_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hsed.SedState",
          "name": "get",
          "package": "Hsed",
          "signature": "T Env a -\u003e SedState a",
          "source": "src/Hsed-SedState.html#get",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hsed SedState",
          "module": "Hsed.SedState",
          "name": "get",
          "normalized": "T Env a-\u003eSedState a",
          "package": "Hsed",
          "signature": "T Env a-\u003eSedState a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hsed/docs/Hsed-SedState.html#v:get"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hsed.SedState",
          "name": "holdSpace",
          "package": "Hsed",
          "signature": "T Env ByteString",
          "source": "src/Hsed-SedState.html#holdSpace",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hsed SedState",
          "module": "Hsed.SedState",
          "name": "holdSpace",
          "package": "Hsed",
          "partial": "Space",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hsed/docs/Hsed-SedState.html#v:holdSpace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe buffer to keep the line(s) temporarily\n\u003c/p\u003e",
          "module": "Hsed.SedState",
          "name": "holdSpace_",
          "package": "Hsed",
          "signature": "ByteString",
          "source": "src/Hsed-SedState.html#Env",
          "type": "function"
        },
        "index": {
          "description": "The buffer to keep the line temporarily",
          "hierarchy": "Hsed SedState",
          "module": "Hsed.SedState",
          "name": "holdSpace_",
          "package": "Hsed",
          "partial": "Space",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hsed/docs/Hsed-SedState.html#v:holdSpace_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hsed.SedState",
          "name": "inRange",
          "package": "Hsed",
          "signature": "T Env Bool",
          "source": "src/Hsed-SedState.html#inRange",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hsed SedState",
          "module": "Hsed.SedState",
          "name": "inRange",
          "package": "Hsed",
          "partial": "Range",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hsed/docs/Hsed-SedState.html#v:inRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIs pattern space matches the address range\n\u003c/p\u003e",
          "module": "Hsed.SedState",
          "name": "inRange_",
          "package": "Hsed",
          "signature": "Bool",
          "source": "src/Hsed-SedState.html#Env",
          "type": "function"
        },
        "index": {
          "description": "Is pattern space matches the address range",
          "hierarchy": "Hsed SedState",
          "module": "Hsed.SedState",
          "name": "inRange_",
          "package": "Hsed",
          "partial": "Range",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hsed/docs/Hsed-SedState.html#v:inRange_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hsed.SedState",
          "name": "initEnv",
          "package": "Hsed",
          "signature": "Env",
          "source": "src/Hsed-SedState.html#initEnv",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hsed SedState",
          "module": "Hsed.SedState",
          "name": "initEnv",
          "package": "Hsed",
          "partial": "Env",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hsed/docs/Hsed-SedState.html#v:initEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hsed.SedState",
          "name": "lastLine",
          "package": "Hsed",
          "signature": "T Env Int",
          "source": "src/Hsed-SedState.html#lastLine",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hsed SedState",
          "module": "Hsed.SedState",
          "name": "lastLine",
          "package": "Hsed",
          "partial": "Line",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hsed/docs/Hsed-SedState.html#v:lastLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe last line index\n\u003c/p\u003e",
          "module": "Hsed.SedState",
          "name": "lastLine_",
          "package": "Hsed",
          "signature": "Int",
          "source": "src/Hsed-SedState.html#Env",
          "type": "function"
        },
        "index": {
          "description": "The last line index",
          "hierarchy": "Hsed SedState",
          "module": "Hsed.SedState",
          "name": "lastLine_",
          "package": "Hsed",
          "partial": "Line",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hsed/docs/Hsed-SedState.html#v:lastLine_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hsed.SedState",
          "name": "memorySpace",
          "package": "Hsed",
          "signature": "T Env ByteString",
          "source": "src/Hsed-SedState.html#memorySpace",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hsed SedState",
          "module": "Hsed.SedState",
          "name": "memorySpace",
          "package": "Hsed",
          "partial": "Space",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hsed/docs/Hsed-SedState.html#v:memorySpace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStore the output in the memory\n\u003c/p\u003e",
          "module": "Hsed.SedState",
          "name": "memorySpace_",
          "package": "Hsed",
          "signature": "ByteString",
          "source": "src/Hsed-SedState.html#Env",
          "type": "function"
        },
        "index": {
          "description": "Store the output in the memory",
          "hierarchy": "Hsed SedState",
          "module": "Hsed.SedState",
          "name": "memorySpace_",
          "package": "Hsed",
          "partial": "Space",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hsed/docs/Hsed-SedState.html#v:memorySpace_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hsed.SedState",
          "name": "modify",
          "package": "Hsed",
          "signature": "T Env a -\u003e (a -\u003e a) -\u003e SedState ()",
          "source": "src/Hsed-SedState.html#modify",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hsed SedState",
          "module": "Hsed.SedState",
          "name": "modify",
          "normalized": "T Env a-\u003e(a-\u003ea)-\u003eSedState()",
          "package": "Hsed",
          "signature": "T Env a-\u003e(a-\u003ea)-\u003eSedState()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hsed/docs/Hsed-SedState.html#v:modify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hsed.SedState",
          "name": "patternSpace",
          "package": "Hsed",
          "signature": "T Env ByteString",
          "source": "src/Hsed-SedState.html#patternSpace",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hsed SedState",
          "module": "Hsed.SedState",
          "name": "patternSpace",
          "package": "Hsed",
          "partial": "Space",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hsed/docs/Hsed-SedState.html#v:patternSpace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe buffer to keep the selected line(s)\n\u003c/p\u003e",
          "module": "Hsed.SedState",
          "name": "patternSpace_",
          "package": "Hsed",
          "signature": "ByteString",
          "source": "src/Hsed-SedState.html#Env",
          "type": "function"
        },
        "index": {
          "description": "The buffer to keep the selected line",
          "hierarchy": "Hsed SedState",
          "module": "Hsed.SedState",
          "name": "patternSpace_",
          "package": "Hsed",
          "partial": "Space",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hsed/docs/Hsed-SedState.html#v:patternSpace_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hsed.SedState",
          "name": "set",
          "package": "Hsed",
          "signature": "T Env a -\u003e a -\u003e SedState ()",
          "source": "src/Hsed-SedState.html#set",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hsed SedState",
          "module": "Hsed.SedState",
          "name": "set",
          "normalized": "T Env a-\u003ea-\u003eSedState()",
          "package": "Hsed",
          "signature": "T Env a-\u003ea-\u003eSedState()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hsed/docs/Hsed-SedState.html#v:set"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hsed.SedState",
          "name": "subst",
          "package": "Hsed",
          "signature": "T Env Bool",
          "source": "src/Hsed-SedState.html#subst",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hsed SedState",
          "module": "Hsed.SedState",
          "name": "subst",
          "package": "Hsed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hsed/docs/Hsed-SedState.html#v:subst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe result of the last substitution\n\u003c/p\u003e",
          "module": "Hsed.SedState",
          "name": "subst_",
          "package": "Hsed",
          "signature": "Bool",
          "source": "src/Hsed-SedState.html#Env",
          "type": "function"
        },
        "index": {
          "description": "The result of the last substitution",
          "hierarchy": "Hsed SedState",
          "module": "Hsed.SedState",
          "name": "subst_",
          "package": "Hsed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hsed/docs/Hsed-SedState.html#v:subst_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hsed.SedState",
          "name": "useMemSpace",
          "package": "Hsed",
          "signature": "T Env Bool",
          "source": "src/Hsed-SedState.html#useMemSpace",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hsed SedState",
          "module": "Hsed.SedState",
          "name": "useMemSpace",
          "package": "Hsed",
          "partial": "Mem Space",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hsed/docs/Hsed-SedState.html#v:useMemSpace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf True the Sed output is stored in the memory buffer\n\u003c/p\u003e",
          "module": "Hsed.SedState",
          "name": "useMemSpace_",
          "package": "Hsed",
          "signature": "Bool",
          "source": "src/Hsed-SedState.html#Env",
          "type": "function"
        },
        "index": {
          "description": "If True the Sed output is stored in the memory buffer",
          "hierarchy": "Hsed SedState",
          "module": "Hsed.SedState",
          "name": "useMemSpace_",
          "package": "Hsed",
          "partial": "Mem Space",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hsed/docs/Hsed-SedState.html#v:useMemSpace_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe Sed runtime engine\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Hsed.StreamEd",
          "name": "StreamEd",
          "package": "Hsed",
          "source": "src/Hsed-StreamEd.html",
          "type": "module"
        },
        "index": {
          "description": "The Sed runtime engine",
          "hierarchy": "Hsed StreamEd",
          "module": "Hsed.StreamEd",
          "name": "StreamEd",
          "package": "Hsed",
          "partial": "Stream Ed",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Hsed/docs/Hsed-StreamEd.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hsed.StreamEd",
          "name": "FlowControl",
          "package": "Hsed",
          "source": "src/Hsed-StreamEd.html#FlowControl",
          "type": "data"
        },
        "index": {
          "hierarchy": "Hsed StreamEd",
          "module": "Hsed.StreamEd",
          "name": "FlowControl",
          "package": "Hsed",
          "partial": "Flow Control",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Hsed/docs/Hsed-StreamEd.html#t:FlowControl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hsed.StreamEd",
          "name": "SedEngine",
          "package": "Hsed",
          "source": "src/Hsed-StreamEd.html#SedEngine",
          "type": "type"
        },
        "index": {
          "hierarchy": "Hsed StreamEd",
          "module": "Hsed.StreamEd",
          "name": "SedEngine",
          "package": "Hsed",
          "partial": "Sed Engine",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Hsed/docs/Hsed-StreamEd.html#t:SedEngine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hsed.StreamEd",
          "name": "Status",
          "package": "Hsed",
          "source": "src/Hsed-StreamEd.html#Status",
          "type": "data"
        },
        "index": {
          "hierarchy": "Hsed StreamEd",
          "module": "Hsed.StreamEd",
          "name": "Status",
          "package": "Hsed",
          "partial": "Status",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Hsed/docs/Hsed-StreamEd.html#t:Status"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead the new line to the pattern space and apply sed script  \n\u003c/p\u003e",
          "module": "Hsed.StreamEd",
          "name": "Break",
          "package": "Hsed",
          "signature": "Break",
          "source": "src/Hsed-StreamEd.html#FlowControl",
          "type": "function"
        },
        "index": {
          "description": "Read the new line to the pattern space and apply sed script",
          "hierarchy": "Hsed StreamEd",
          "module": "Hsed.StreamEd",
          "name": "Break",
          "package": "Hsed",
          "partial": "Break",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hsed/docs/Hsed-StreamEd.html#v:Break"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hsed.StreamEd",
          "name": "Cont",
          "package": "Hsed",
          "signature": "Cont",
          "source": "src/Hsed-StreamEd.html#Status",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hsed StreamEd",
          "module": "Hsed.StreamEd",
          "name": "Cont",
          "package": "Hsed",
          "partial": "Cont",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hsed/docs/Hsed-StreamEd.html#v:Cont"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReapply the sed script to the current pattern space\n\u003c/p\u003e",
          "module": "Hsed.StreamEd",
          "name": "Continue",
          "package": "Hsed",
          "signature": "Continue",
          "source": "src/Hsed-StreamEd.html#FlowControl",
          "type": "function"
        },
        "index": {
          "description": "Reapply the sed script to the current pattern space",
          "hierarchy": "Hsed StreamEd",
          "module": "Hsed.StreamEd",
          "name": "Continue",
          "package": "Hsed",
          "partial": "Continue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hsed/docs/Hsed-StreamEd.html#v:Continue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hsed.StreamEd",
          "name": "EOF",
          "package": "Hsed",
          "signature": "EOF",
          "source": "src/Hsed-StreamEd.html#Status",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hsed StreamEd",
          "module": "Hsed.StreamEd",
          "name": "EOF",
          "package": "Hsed",
          "partial": "EOF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hsed/docs/Hsed-StreamEd.html#v:EOF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eQuit \n\u003c/p\u003e",
          "module": "Hsed.StreamEd",
          "name": "Exit",
          "package": "Hsed",
          "signature": "Exit",
          "source": "src/Hsed-StreamEd.html#FlowControl",
          "type": "function"
        },
        "index": {
          "description": "Quit",
          "hierarchy": "Hsed StreamEd",
          "module": "Hsed.StreamEd",
          "name": "Exit",
          "package": "Hsed",
          "partial": "Exit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hsed/docs/Hsed-StreamEd.html#v:Exit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJump to the marked sed command and apply it to the pattern space   \n\u003c/p\u003e",
          "module": "Hsed.StreamEd",
          "name": "Goto",
          "package": "Hsed",
          "signature": "Goto (Maybe ByteString)",
          "source": "src/Hsed-StreamEd.html#FlowControl",
          "type": "function"
        },
        "index": {
          "description": "Jump to the marked sed command and apply it to the pattern space",
          "hierarchy": "Hsed StreamEd",
          "module": "Hsed.StreamEd",
          "name": "Goto",
          "package": "Hsed",
          "partial": "Goto",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hsed/docs/Hsed-StreamEd.html#v:Goto"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply the next sed command from the script to the pattern space\n\u003c/p\u003e",
          "module": "Hsed.StreamEd",
          "name": "Next",
          "package": "Hsed",
          "signature": "Next",
          "source": "src/Hsed-StreamEd.html#FlowControl",
          "type": "function"
        },
        "index": {
          "description": "Apply the next sed command from the script to the pattern space",
          "hierarchy": "Hsed StreamEd",
          "module": "Hsed.StreamEd",
          "name": "Next",
          "package": "Hsed",
          "partial": "Next",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hsed/docs/Hsed-StreamEd.html#v:Next"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e'a\\\\ntext' Places the text variable in output before reading \n the next input line\n\u003c/p\u003e",
          "module": "Hsed.StreamEd",
          "name": "append",
          "package": "Hsed",
          "signature": "ByteString -\u003e SedState FlowControl",
          "source": "src/Hsed-StreamEd.html#append",
          "type": "function"
        },
        "index": {
          "description": "ntext Places the text variable in output before reading the next input line",
          "hierarchy": "Hsed StreamEd",
          "module": "Hsed.StreamEd",
          "name": "append",
          "normalized": "ByteString-\u003eSedState FlowControl",
          "package": "Hsed",
          "signature": "ByteString-\u003eSedState FlowControl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hsed/docs/Hsed-StreamEd.html#v:append"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eH\u003c/code\u003e Append newline and contents of pattern space to contents \n of the hold space\n\u003c/p\u003e",
          "module": "Hsed.StreamEd",
          "name": "appendHold",
          "package": "Hsed",
          "signature": "SedState FlowControl",
          "source": "src/Hsed-StreamEd.html#appendHold",
          "type": "function"
        },
        "index": {
          "description": "Append newline and contents of pattern space to contents of the hold space",
          "hierarchy": "Hsed StreamEd",
          "module": "Hsed.StreamEd",
          "name": "appendHold",
          "package": "Hsed",
          "partial": "Hold",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hsed/docs/Hsed-StreamEd.html#v:appendHold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eN\u003c/code\u003e Append next input line to contents of pattern space\n\u003c/p\u003e",
          "module": "Hsed.StreamEd",
          "name": "appendLinePat",
          "package": "Hsed",
          "signature": "SedState FlowControl",
          "source": "src/Hsed-StreamEd.html#appendLinePat",
          "type": "function"
        },
        "index": {
          "description": "Append next input line to contents of pattern space",
          "hierarchy": "Hsed StreamEd",
          "module": "Hsed.StreamEd",
          "name": "appendLinePat",
          "package": "Hsed",
          "partial": "Line Pat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hsed/docs/Hsed-StreamEd.html#v:appendLinePat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eG\u003c/code\u003e Append newline followed by contents of hold space \n to contents of the pattern space.\n\u003c/p\u003e",
          "module": "Hsed.StreamEd",
          "name": "appendPat",
          "package": "Hsed",
          "signature": "SedState FlowControl",
          "source": "src/Hsed-StreamEd.html#appendPat",
          "type": "function"
        },
        "index": {
          "description": "Append newline followed by contents of hold space to contents of the pattern space",
          "hierarchy": "Hsed StreamEd",
          "module": "Hsed.StreamEd",
          "name": "appendPat",
          "package": "Hsed",
          "partial": "Pat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hsed/docs/Hsed-StreamEd.html#v:appendPat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e'b label' Transfer control to :label elsewhere in script\n\u003c/p\u003e",
          "module": "Hsed.StreamEd",
          "name": "branch",
          "package": "Hsed",
          "signature": "Maybe Label -\u003e SedState FlowControl",
          "source": "src/Hsed-StreamEd.html#branch",
          "type": "function"
        },
        "index": {
          "description": "label Transfer control to label elsewhere in script",
          "hierarchy": "Hsed StreamEd",
          "module": "Hsed.StreamEd",
          "name": "branch",
          "normalized": "Maybe Label-\u003eSedState FlowControl",
          "package": "Hsed",
          "signature": "Maybe Label-\u003eSedState FlowControl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hsed/docs/Hsed-StreamEd.html#v:branch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e'c\\\\ntext' Replace the lines with the text variable\n\u003c/p\u003e",
          "module": "Hsed.StreamEd",
          "name": "change",
          "package": "Hsed",
          "signature": "ByteString -\u003e SedState FlowControl",
          "source": "src/Hsed-StreamEd.html#change",
          "type": "function"
        },
        "index": {
          "description": "ntext Replace the lines with the text variable",
          "hierarchy": "Hsed StreamEd",
          "module": "Hsed.StreamEd",
          "name": "change",
          "normalized": "ByteString-\u003eSedState FlowControl",
          "package": "Hsed",
          "signature": "ByteString-\u003eSedState FlowControl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hsed/docs/Hsed-StreamEd.html#v:change"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse the Sed commands\n\u003c/p\u003e",
          "module": "Hsed.StreamEd",
          "name": "compile",
          "package": "Hsed",
          "signature": "String -\u003e SedState ()",
          "source": "src/Hsed-StreamEd.html#compile",
          "type": "function"
        },
        "index": {
          "description": "Parse the Sed commands",
          "hierarchy": "Hsed StreamEd",
          "module": "Hsed.StreamEd",
          "name": "compile",
          "normalized": "String-\u003eSedState()",
          "package": "Hsed",
          "signature": "String-\u003eSedState()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hsed/docs/Hsed-StreamEd.html#v:compile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ed\u003c/code\u003e Delete line(s) from pattern space\n\u003c/p\u003e",
          "module": "Hsed.StreamEd",
          "name": "deleteLine",
          "package": "Hsed",
          "signature": "SedState FlowControl",
          "source": "src/Hsed-StreamEd.html#deleteLine",
          "type": "function"
        },
        "index": {
          "description": "Delete line from pattern space",
          "hierarchy": "Hsed StreamEd",
          "module": "Hsed.StreamEd",
          "name": "deleteLine",
          "package": "Hsed",
          "partial": "Line",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hsed/docs/Hsed-StreamEd.html#v:deleteLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eD\u003c/code\u003e Delete first part (up to embedded newline) of multiline pattern space\n\u003c/p\u003e",
          "module": "Hsed.StreamEd",
          "name": "deletePat",
          "package": "Hsed",
          "signature": "SedState FlowControl",
          "source": "src/Hsed-StreamEd.html#deletePat",
          "type": "function"
        },
        "index": {
          "description": "Delete first part up to embedded newline of multiline pattern space",
          "hierarchy": "Hsed StreamEd",
          "module": "Hsed.StreamEd",
          "name": "deletePat",
          "package": "Hsed",
          "partial": "Pat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hsed/docs/Hsed-StreamEd.html#v:deletePat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ex\u003c/code\u003e Exchange contents of the pattern space with the \n contents of the hold space\n\u003c/p\u003e",
          "module": "Hsed.StreamEd",
          "name": "exchange",
          "package": "Hsed",
          "signature": "SedState FlowControl",
          "source": "src/Hsed-StreamEd.html#exchange",
          "type": "function"
        },
        "index": {
          "description": "Exchange contents of the pattern space with the contents of the hold space",
          "hierarchy": "Hsed StreamEd",
          "module": "Hsed.StreamEd",
          "name": "exchange",
          "package": "Hsed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hsed/docs/Hsed-StreamEd.html#v:exchange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute the Sed function if the address is matched\n\u003c/p\u003e",
          "module": "Hsed.StreamEd",
          "name": "execCmd",
          "package": "Hsed",
          "signature": "SedCmd -\u003e SedState FlowControl",
          "source": "src/Hsed-StreamEd.html#execCmd",
          "type": "function"
        },
        "index": {
          "description": "Execute the Sed function if the address is matched",
          "hierarchy": "Hsed StreamEd",
          "module": "Hsed.StreamEd",
          "name": "execCmd",
          "normalized": "SedCmd-\u003eSedState FlowControl",
          "package": "Hsed",
          "partial": "Cmd",
          "signature": "SedCmd-\u003eSedState FlowControl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hsed/docs/Hsed-StreamEd.html#v:execCmd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute sed script\n\u003c/p\u003e",
          "module": "Hsed.StreamEd",
          "name": "execCmds",
          "package": "Hsed",
          "signature": "[SedCmd] -\u003e SedEngine ()",
          "source": "src/Hsed-StreamEd.html#execCmds",
          "type": "function"
        },
        "index": {
          "description": "Execute sed script",
          "hierarchy": "Hsed StreamEd",
          "module": "Hsed.StreamEd",
          "name": "execCmds",
          "normalized": "[SedCmd]-\u003eSedEngine()",
          "package": "Hsed",
          "partial": "Cmds",
          "signature": "[SedCmd]-\u003eSedEngine()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hsed/docs/Hsed-StreamEd.html#v:execCmds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute the parsed Sed commands against input data\n\u003c/p\u003e",
          "module": "Hsed.StreamEd",
          "name": "execute",
          "package": "Hsed",
          "signature": "[FilePath] -\u003e SedEngine ()",
          "source": "src/Hsed-StreamEd.html#execute",
          "type": "function"
        },
        "index": {
          "description": "Execute the parsed Sed commands against input data",
          "hierarchy": "Hsed StreamEd",
          "module": "Hsed.StreamEd",
          "name": "execute",
          "normalized": "[FilePath]-\u003eSedEngine()",
          "package": "Hsed",
          "signature": "[FilePath]-\u003eSedEngine()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hsed/docs/Hsed-StreamEd.html#v:execute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e'{cmd...}' Groups subcommands enclosed in {} (braces)\n\u003c/p\u003e",
          "module": "Hsed.StreamEd",
          "name": "group",
          "package": "Hsed",
          "signature": "[SedCmd] -\u003e SedState FlowControl",
          "source": "src/Hsed-StreamEd.html#group",
          "type": "function"
        },
        "index": {
          "description": "cmd Groups subcommands enclosed in braces",
          "hierarchy": "Hsed StreamEd",
          "module": "Hsed.StreamEd",
          "name": "group",
          "normalized": "[SedCmd]-\u003eSedState FlowControl",
          "package": "Hsed",
          "signature": "[SedCmd]-\u003eSedState FlowControl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hsed/docs/Hsed-StreamEd.html#v:group"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e'i\\\\ntext' Writes the text variable to standard output before \n reading the next line into the pattern space.\n\u003c/p\u003e",
          "module": "Hsed.StreamEd",
          "name": "insert",
          "package": "Hsed",
          "signature": "ByteString -\u003e SedState FlowControl",
          "source": "src/Hsed-StreamEd.html#insert",
          "type": "function"
        },
        "index": {
          "description": "ntext Writes the text variable to standard output before reading the next line into the pattern space",
          "hierarchy": "Hsed StreamEd",
          "module": "Hsed.StreamEd",
          "name": "insert",
          "normalized": "ByteString-\u003eSedState FlowControl",
          "package": "Hsed",
          "signature": "ByteString-\u003eSedState FlowControl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hsed/docs/Hsed-StreamEd.html#v:insert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck if the current line in the pattern space is the last line\n\u003c/p\u003e",
          "module": "Hsed.StreamEd",
          "name": "isLastLine",
          "package": "Hsed",
          "signature": "SedState Bool",
          "source": "src/Hsed-StreamEd.html#isLastLine",
          "type": "function"
        },
        "index": {
          "description": "Check if the current line in the pattern space is the last line",
          "hierarchy": "Hsed StreamEd",
          "module": "Hsed.StreamEd",
          "name": "isLastLine",
          "package": "Hsed",
          "partial": "Last Line",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hsed/docs/Hsed-StreamEd.html#v:isLastLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransfer control to the command marked with the label\n\u003c/p\u003e",
          "module": "Hsed.StreamEd",
          "name": "jump",
          "package": "Hsed",
          "signature": "[SedCmd] -\u003e Maybe Label -\u003e [SedCmd]",
          "source": "src/Hsed-StreamEd.html#jump",
          "type": "function"
        },
        "index": {
          "description": "Transfer control to the command marked with the label",
          "hierarchy": "Hsed StreamEd",
          "module": "Hsed.StreamEd",
          "name": "jump",
          "normalized": "[SedCmd]-\u003eMaybe Label-\u003e[SedCmd]",
          "package": "Hsed",
          "signature": "[SedCmd]-\u003eMaybe Label-\u003e[SedCmd]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hsed/docs/Hsed-StreamEd.html#v:jump"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead an input line\n\u003c/p\u003e",
          "module": "Hsed.StreamEd",
          "name": "line",
          "package": "Hsed",
          "signature": "SedState (Status, ByteString)",
          "source": "src/Hsed-StreamEd.html#line",
          "type": "function"
        },
        "index": {
          "description": "Read an input line",
          "hierarchy": "Hsed StreamEd",
          "module": "Hsed.StreamEd",
          "name": "line",
          "normalized": "SedState(Status,ByteString)",
          "package": "Hsed",
          "signature": "SedState(Status,ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hsed/docs/Hsed-StreamEd.html#v:line"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e'=' Writes the current line number to standard output as a line\n\u003c/p\u003e",
          "module": "Hsed.StreamEd",
          "name": "lineNum",
          "package": "Hsed",
          "signature": "SedState FlowControl",
          "source": "src/Hsed-StreamEd.html#lineNum",
          "type": "function"
        },
        "index": {
          "description": "Writes the current line number to standard output as line",
          "hierarchy": "Hsed StreamEd",
          "module": "Hsed.StreamEd",
          "name": "lineNum",
          "package": "Hsed",
          "partial": "Num",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hsed/docs/Hsed-StreamEd.html#v:lineNum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003el\u003c/code\u003e List the contents of the pattern space, showing \n nonprinting characters as ASCII codes\n\u003c/p\u003e",
          "module": "Hsed.StreamEd",
          "name": "list",
          "package": "Hsed",
          "signature": "SedState FlowControl",
          "source": "src/Hsed-StreamEd.html#list",
          "type": "function"
        },
        "index": {
          "description": "List the contents of the pattern space showing nonprinting characters as ASCII codes",
          "hierarchy": "Hsed StreamEd",
          "module": "Hsed.StreamEd",
          "name": "list",
          "package": "Hsed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hsed/docs/Hsed-StreamEd.html#v:list"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck if the address interval is matched  \n\u003c/p\u003e",
          "module": "Hsed.StreamEd",
          "name": "matchAddress",
          "package": "Hsed",
          "signature": "Address -\u003e SedState Bool",
          "source": "src/Hsed-StreamEd.html#matchAddress",
          "type": "function"
        },
        "index": {
          "description": "Check if the address interval is matched",
          "hierarchy": "Hsed StreamEd",
          "module": "Hsed.StreamEd",
          "name": "matchAddress",
          "normalized": "Address-\u003eSedState Bool",
          "package": "Hsed",
          "partial": "Address",
          "signature": "Address-\u003eSedState Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hsed/docs/Hsed-StreamEd.html#v:matchAddress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003en\u003c/code\u003e Read next line of input into pattern space. \n\u003c/p\u003e",
          "module": "Hsed.StreamEd",
          "name": "next",
          "package": "Hsed",
          "signature": "SedState FlowControl",
          "source": "src/Hsed-StreamEd.html#next",
          "type": "function"
        },
        "index": {
          "description": "Read next line of input into pattern space",
          "hierarchy": "Hsed StreamEd",
          "module": "Hsed.StreamEd",
          "name": "next",
          "package": "Hsed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hsed/docs/Hsed-StreamEd.html#v:next"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProcess the next input line from the file\n\u003c/p\u003e",
          "module": "Hsed.StreamEd",
          "name": "nextLine",
          "package": "Hsed",
          "signature": "SedEngine ()",
          "source": "src/Hsed-StreamEd.html#nextLine",
          "type": "function"
        },
        "index": {
          "description": "Process the next input line from the file",
          "hierarchy": "Hsed StreamEd",
          "module": "Hsed.StreamEd",
          "name": "nextLine",
          "normalized": "SedEngine()",
          "package": "Hsed",
          "partial": "Line",
          "signature": "SedEngine()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hsed/docs/Hsed-StreamEd.html#v:nextLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ep\u003c/code\u003e Print the lines\n\u003c/p\u003e",
          "module": "Hsed.StreamEd",
          "name": "printPat",
          "package": "Hsed",
          "signature": "SedState FlowControl",
          "source": "src/Hsed-StreamEd.html#printPat",
          "type": "function"
        },
        "index": {
          "description": "Print the lines",
          "hierarchy": "Hsed StreamEd",
          "module": "Hsed.StreamEd",
          "name": "printPat",
          "package": "Hsed",
          "partial": "Pat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hsed/docs/Hsed-StreamEd.html#v:printPat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSkip label, comment and empty command\n\u003c/p\u003e\u003cp\u003ePrint the pattern space to the standard output\n\u003c/p\u003e",
          "module": "Hsed.StreamEd",
          "name": "printPatSpace",
          "package": "Hsed",
          "signature": "SedState ()",
          "source": "src/Hsed-StreamEd.html#printPatSpace",
          "type": "function"
        },
        "index": {
          "description": "Skip label comment and empty command Print the pattern space to the standard output",
          "hierarchy": "Hsed StreamEd",
          "module": "Hsed.StreamEd",
          "name": "printPatSpace",
          "normalized": "SedState()",
          "package": "Hsed",
          "partial": "Pat Space",
          "signature": "SedState()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hsed/docs/Hsed-StreamEd.html#v:printPatSpace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe same as prnStr, but for char\n\u003c/p\u003e",
          "module": "Hsed.StreamEd",
          "name": "prnChar",
          "package": "Hsed",
          "signature": "Char -\u003e SedState ()",
          "source": "src/Hsed-StreamEd.html#prnChar",
          "type": "function"
        },
        "index": {
          "description": "The same as prnStr but for char",
          "hierarchy": "Hsed StreamEd",
          "module": "Hsed.StreamEd",
          "name": "prnChar",
          "normalized": "Char-\u003eSedState()",
          "package": "Hsed",
          "partial": "Char",
          "signature": "Char-\u003eSedState()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hsed/docs/Hsed-StreamEd.html#v:prnChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrint the character as three-digit octal number\n\u003c/p\u003e",
          "module": "Hsed.StreamEd",
          "name": "prnPrintf",
          "package": "Hsed",
          "signature": "Char -\u003e SedState ()",
          "source": "src/Hsed-StreamEd.html#prnPrintf",
          "type": "function"
        },
        "index": {
          "description": "Print the character as three-digit octal number",
          "hierarchy": "Hsed StreamEd",
          "module": "Hsed.StreamEd",
          "name": "prnPrintf",
          "normalized": "Char-\u003eSedState()",
          "package": "Hsed",
          "partial": "Printf",
          "signature": "Char-\u003eSedState()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hsed/docs/Hsed-StreamEd.html#v:prnPrintf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrites the string to the standard output or save the string in the memory buffer\n\u003c/p\u003e",
          "module": "Hsed.StreamEd",
          "name": "prnStr",
          "package": "Hsed",
          "signature": "ByteString -\u003e SedState ()",
          "source": "src/Hsed-StreamEd.html#prnStr",
          "type": "function"
        },
        "index": {
          "description": "Writes the string to the standard output or save the string in the memory buffer",
          "hierarchy": "Hsed StreamEd",
          "module": "Hsed.StreamEd",
          "name": "prnStr",
          "normalized": "ByteString-\u003eSedState()",
          "package": "Hsed",
          "partial": "Str",
          "signature": "ByteString-\u003eSedState()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hsed/docs/Hsed-StreamEd.html#v:prnStr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe same as prnStr, but adds a newline character\n\u003c/p\u003e",
          "module": "Hsed.StreamEd",
          "name": "prnStrLn",
          "package": "Hsed",
          "signature": "ByteString -\u003e SedState ()",
          "source": "src/Hsed-StreamEd.html#prnStrLn",
          "type": "function"
        },
        "index": {
          "description": "The same as prnStr but adds newline character",
          "hierarchy": "Hsed StreamEd",
          "module": "Hsed.StreamEd",
          "name": "prnStrLn",
          "normalized": "ByteString-\u003eSedState()",
          "package": "Hsed",
          "partial": "Str Ln",
          "signature": "ByteString-\u003eSedState()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hsed/docs/Hsed-StreamEd.html#v:prnStrLn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProcess the input text files\n\u003c/p\u003e",
          "module": "Hsed.StreamEd",
          "name": "processFiles",
          "package": "Hsed",
          "signature": "[FilePath] -\u003e SedEngine ()",
          "source": "src/Hsed-StreamEd.html#processFiles",
          "type": "function"
        },
        "index": {
          "description": "Process the input text files",
          "hierarchy": "Hsed StreamEd",
          "module": "Hsed.StreamEd",
          "name": "processFiles",
          "normalized": "[FilePath]-\u003eSedEngine()",
          "package": "Hsed",
          "partial": "Files",
          "signature": "[FilePath]-\u003eSedEngine()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hsed/docs/Hsed-StreamEd.html#v:processFiles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eq\u003c/code\u003e Quit\n\u003c/p\u003e",
          "module": "Hsed.StreamEd",
          "name": "quit",
          "package": "Hsed",
          "signature": "SedState FlowControl",
          "source": "src/Hsed-StreamEd.html#quit",
          "type": "function"
        },
        "index": {
          "description": "Quit",
          "hierarchy": "Hsed StreamEd",
          "module": "Hsed.StreamEd",
          "name": "quit",
          "package": "Hsed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hsed/docs/Hsed-StreamEd.html#v:quit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003er\u003c/code\u003e Read contents of file and append after the contents of the \n pattern space\n\u003c/p\u003e",
          "module": "Hsed.StreamEd",
          "name": "readF",
          "package": "Hsed",
          "signature": "FilePath -\u003e SedState FlowControl",
          "source": "src/Hsed-StreamEd.html#readF",
          "type": "function"
        },
        "index": {
          "description": "Read contents of file and append after the contents of the pattern space",
          "hierarchy": "Hsed StreamEd",
          "module": "Hsed.StreamEd",
          "name": "readF",
          "normalized": "FilePath-\u003eSedState FlowControl",
          "package": "Hsed",
          "signature": "FilePath-\u003eSedState FlowControl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hsed/docs/Hsed-StreamEd.html#v:readF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eh\u003c/code\u003e Copy pattern space into hold space\n\u003c/p\u003e",
          "module": "Hsed.StreamEd",
          "name": "replaceHold",
          "package": "Hsed",
          "signature": "SedState FlowControl",
          "source": "src/Hsed-StreamEd.html#replaceHold",
          "type": "function"
        },
        "index": {
          "description": "Copy pattern space into hold space",
          "hierarchy": "Hsed StreamEd",
          "module": "Hsed.StreamEd",
          "name": "replaceHold",
          "package": "Hsed",
          "partial": "Hold",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hsed/docs/Hsed-StreamEd.html#v:replaceHold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eg\u003c/code\u003e Copy contents of hold space into the pattern space\n\u003c/p\u003e",
          "module": "Hsed.StreamEd",
          "name": "replacePat",
          "package": "Hsed",
          "signature": "SedState FlowControl",
          "source": "src/Hsed-StreamEd.html#replacePat",
          "type": "function"
        },
        "index": {
          "description": "Copy contents of hold space into the pattern space",
          "hierarchy": "Hsed StreamEd",
          "module": "Hsed.StreamEd",
          "name": "replacePat",
          "package": "Hsed",
          "partial": "Pat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hsed/docs/Hsed-StreamEd.html#v:replacePat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute the Sed function\n\u003c/p\u003e",
          "module": "Hsed.StreamEd",
          "name": "runCmd",
          "package": "Hsed",
          "signature": "SedFun -\u003e SedState FlowControl",
          "source": "src/Hsed-StreamEd.html#runCmd",
          "type": "function"
        },
        "index": {
          "description": "Execute the Sed function",
          "hierarchy": "Hsed StreamEd",
          "module": "Hsed.StreamEd",
          "name": "runCmd",
          "normalized": "SedFun-\u003eSedState FlowControl",
          "package": "Hsed",
          "partial": "Cmd",
          "signature": "SedFun-\u003eSedState FlowControl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hsed/docs/Hsed-StreamEd.html#v:runCmd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompile and execute the sed script\n\u003c/p\u003e",
          "module": "Hsed.StreamEd",
          "name": "runSed",
          "package": "Hsed",
          "signature": "[FilePath] -\u003e String -\u003e Env -\u003e IO Env",
          "source": "src/Hsed-StreamEd.html#runSed",
          "type": "function"
        },
        "index": {
          "description": "Compile and execute the sed script",
          "hierarchy": "Hsed StreamEd",
          "module": "Hsed.StreamEd",
          "name": "runSed",
          "normalized": "[FilePath]-\u003eString-\u003eEnv-\u003eIO Env",
          "package": "Hsed",
          "partial": "Sed",
          "signature": "[FilePath]-\u003eString-\u003eEnv-\u003eIO Env",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hsed/docs/Hsed-StreamEd.html#v:runSed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e's\u003cem\u003epattern\u003c/em\u003ereplacement/[flags]' Substitute replacement for pattern\n\u003c/p\u003e",
          "module": "Hsed.StreamEd",
          "name": "substitute",
          "package": "Hsed",
          "signature": "ByteString -\u003e ByteString -\u003e Flags -\u003e SedState FlowControl",
          "source": "src/Hsed-StreamEd.html#substitute",
          "type": "function"
        },
        "index": {
          "description": "pattern replacement flags Substitute replacement for pattern",
          "hierarchy": "Hsed StreamEd",
          "module": "Hsed.StreamEd",
          "name": "substitute",
          "normalized": "ByteString-\u003eByteString-\u003eFlags-\u003eSedState FlowControl",
          "package": "Hsed",
          "signature": "ByteString-\u003eByteString-\u003eFlags-\u003eSedState FlowControl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hsed/docs/Hsed-StreamEd.html#v:substitute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e't label' Jump to line if successful substitutions have been made\n\u003c/p\u003e",
          "module": "Hsed.StreamEd",
          "name": "test",
          "package": "Hsed",
          "signature": "Maybe Label -\u003e SedState FlowControl",
          "source": "src/Hsed-StreamEd.html#test",
          "type": "function"
        },
        "index": {
          "description": "label Jump to line if successful substitutions have been made",
          "hierarchy": "Hsed StreamEd",
          "module": "Hsed.StreamEd",
          "name": "test",
          "normalized": "Maybe Label-\u003eSedState FlowControl",
          "package": "Hsed",
          "signature": "Maybe Label-\u003eSedState FlowControl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hsed/docs/Hsed-StreamEd.html#v:test"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e'y/abc/xyz' Transform each character by position in string abc \n to its equivalent in string xyz\n\u003c/p\u003e",
          "module": "Hsed.StreamEd",
          "name": "transform",
          "package": "Hsed",
          "signature": "ByteString -\u003e ByteString -\u003e SedState FlowControl",
          "source": "src/Hsed-StreamEd.html#transform",
          "type": "function"
        },
        "index": {
          "description": "abc xyz Transform each character by position in string abc to its equivalent in string xyz",
          "hierarchy": "Hsed StreamEd",
          "module": "Hsed.StreamEd",
          "name": "transform",
          "normalized": "ByteString-\u003eByteString-\u003eSedState FlowControl",
          "package": "Hsed",
          "signature": "ByteString-\u003eByteString-\u003eSedState FlowControl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hsed/docs/Hsed-StreamEd.html#v:transform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e'w file' Append contents of pattern space to file\n\u003c/p\u003e",
          "module": "Hsed.StreamEd",
          "name": "writeF",
          "package": "Hsed",
          "signature": "FilePath -\u003e SedState FlowControl",
          "source": "src/Hsed-StreamEd.html#writeF",
          "type": "function"
        },
        "index": {
          "description": "file Append contents of pattern space to file",
          "hierarchy": "Hsed StreamEd",
          "module": "Hsed.StreamEd",
          "name": "writeF",
          "normalized": "FilePath-\u003eSedState FlowControl",
          "package": "Hsed",
          "signature": "FilePath-\u003eSedState FlowControl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hsed/docs/Hsed-StreamEd.html#v:writeF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eP\u003c/code\u003e Print first part (up to embedded newline) of \n multiline pattern space\n\u003c/p\u003e",
          "module": "Hsed.StreamEd",
          "name": "writeUpPat",
          "package": "Hsed",
          "signature": "SedState FlowControl",
          "source": "src/Hsed-StreamEd.html#writeUpPat",
          "type": "function"
        },
        "index": {
          "description": "Print first part up to embedded newline of multiline pattern space",
          "hierarchy": "Hsed StreamEd",
          "module": "Hsed.StreamEd",
          "name": "writeUpPat",
          "package": "Hsed",
          "partial": "Up Pat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hsed/docs/Hsed-StreamEd.html#v:writeUpPat"
      }
    }
  ]
]