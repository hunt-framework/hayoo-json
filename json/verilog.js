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
        "word": "verilog"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Lex",
          "name": "Lex",
          "package": "verilog",
          "source": "src/Language-Verilog-Lex.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Language Verilog Lex",
          "module": "Language.Verilog.Lex",
          "name": "Lex",
          "package": "verilog",
          "partial": "Lex",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Lex.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Lex",
          "name": "alexScanTokens",
          "package": "verilog",
          "signature": "String -\u003e [Token]",
          "source": "src/Language-Verilog-Lex.html#alexScanTokens",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Lex",
          "module": "Language.Verilog.Lex",
          "name": "alexScanTokens",
          "normalized": "String-\u003e[Token]",
          "package": "verilog",
          "partial": "Scan Tokens",
          "signature": "String-\u003e[Token]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Lex.html#v:alexScanTokens"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Parse",
          "name": "Parse",
          "package": "verilog",
          "source": "src/Language-Verilog-Parse.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Language Verilog Parse",
          "module": "Language.Verilog.Parse",
          "name": "Parse",
          "package": "verilog",
          "partial": "Parse",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Parse.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses a file given a table of predefined macros, the file name, and the file contents.\n\u003c/p\u003e",
          "module": "Language.Verilog.Parse",
          "name": "parseFile",
          "package": "verilog",
          "signature": "[(String, String)] -\u003e FilePath -\u003e String -\u003e [Module]",
          "source": "src/Language-Verilog-Parse.html#parseFile",
          "type": "function"
        },
        "index": {
          "description": "Parses file given table of predefined macros the file name and the file contents",
          "hierarchy": "Language Verilog Parse",
          "module": "Language.Verilog.Parse",
          "name": "parseFile",
          "normalized": "[(String,String)]-\u003eFilePath-\u003eString-\u003e[Module]",
          "package": "verilog",
          "partial": "File",
          "signature": "[(String,String)]-\u003eFilePath-\u003eString-\u003e[Module]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Parse.html#v:parseFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Preprocess",
          "name": "Preprocess",
          "package": "verilog",
          "source": "src/Language-Verilog-Preprocess.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Language Verilog Preprocess",
          "module": "Language.Verilog.Preprocess",
          "name": "Preprocess",
          "package": "verilog",
          "partial": "Preprocess",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Preprocess.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA simple `define preprocessor.  \n\u003c/p\u003e",
          "module": "Language.Verilog.Preprocess",
          "name": "preprocess",
          "package": "verilog",
          "signature": "[(String, String)] -\u003e FilePath -\u003e String -\u003e String",
          "source": "src/Language-Verilog-Preprocess.html#preprocess",
          "type": "function"
        },
        "index": {
          "description": "simple define preprocessor",
          "hierarchy": "Language Verilog Preprocess",
          "module": "Language.Verilog.Preprocess",
          "name": "preprocess",
          "normalized": "[(String,String)]-\u003eFilePath-\u003eString-\u003eString",
          "package": "verilog",
          "signature": "[(String,String)]-\u003eFilePath-\u003eString-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Preprocess.html#v:preprocess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove comments from code.\n\u003c/p\u003e",
          "module": "Language.Verilog.Preprocess",
          "name": "uncomment",
          "package": "verilog",
          "signature": "FilePath -\u003e String -\u003e String",
          "source": "src/Language-Verilog-Preprocess.html#uncomment",
          "type": "function"
        },
        "index": {
          "description": "Remove comments from code",
          "hierarchy": "Language Verilog Preprocess",
          "module": "Language.Verilog.Preprocess",
          "name": "uncomment",
          "normalized": "FilePath-\u003eString-\u003eString",
          "package": "verilog",
          "signature": "FilePath-\u003eString-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Preprocess.html#v:uncomment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "Tokens",
          "package": "verilog",
          "source": "src/Language-Verilog-Tokens.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "Tokens",
          "package": "verilog",
          "partial": "Tokens",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "Position",
          "package": "verilog",
          "source": "src/Language-Verilog-Tokens.html#Position",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "Position",
          "package": "verilog",
          "partial": "Position",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#t:Position"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "Token",
          "package": "verilog",
          "source": "src/Language-Verilog-Tokens.html#Token",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "Token",
          "package": "verilog",
          "partial": "Token",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#t:Token"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "TokenInfo",
          "package": "verilog",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "TokenInfo",
          "package": "verilog",
          "partial": "Token Info",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#t:TokenInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "Id_escaped",
          "package": "verilog",
          "signature": "Id_escaped",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "Id_escaped",
          "package": "verilog",
          "partial": "Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:Id_escaped"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "Id_simple",
          "package": "verilog",
          "signature": "Id_simple",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "Id_simple",
          "package": "verilog",
          "partial": "Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:Id_simple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "Id_system",
          "package": "verilog",
          "signature": "Id_system",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "Id_system",
          "package": "verilog",
          "partial": "Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:Id_system"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_alias",
          "package": "verilog",
          "signature": "KW_alias",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_alias",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_alias"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_always",
          "package": "verilog",
          "signature": "KW_always",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_always",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_always"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_always_comb",
          "package": "verilog",
          "signature": "KW_always_comb",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_always_comb",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_always_comb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_always_ff",
          "package": "verilog",
          "signature": "KW_always_ff",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_always_ff",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_always_ff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_always_latch",
          "package": "verilog",
          "signature": "KW_always_latch",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_always_latch",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_always_latch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_and",
          "package": "verilog",
          "signature": "KW_and",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_and",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_and"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_assert",
          "package": "verilog",
          "signature": "KW_assert",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_assert",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_assert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_assign",
          "package": "verilog",
          "signature": "KW_assign",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_assign",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_assign"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_assume",
          "package": "verilog",
          "signature": "KW_assume",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_assume",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_assume"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_automatic",
          "package": "verilog",
          "signature": "KW_automatic",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_automatic",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_automatic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_before",
          "package": "verilog",
          "signature": "KW_before",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_before",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_before"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_begin",
          "package": "verilog",
          "signature": "KW_begin",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_begin",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_begin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_bind",
          "package": "verilog",
          "signature": "KW_bind",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_bind",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_bind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_bins",
          "package": "verilog",
          "signature": "KW_bins",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_bins",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_bins"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_binsof",
          "package": "verilog",
          "signature": "KW_binsof",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_binsof",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_binsof"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_bit",
          "package": "verilog",
          "signature": "KW_bit",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_bit",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_bit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_break",
          "package": "verilog",
          "signature": "KW_break",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_break",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_break"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_buf",
          "package": "verilog",
          "signature": "KW_buf",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_buf",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_buf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_bufif0",
          "package": "verilog",
          "signature": "KW_bufif0",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_bufif0",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_bufif0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_bufif1",
          "package": "verilog",
          "signature": "KW_bufif1",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_bufif1",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_bufif1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_byte",
          "package": "verilog",
          "signature": "KW_byte",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_byte",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_byte"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_case",
          "package": "verilog",
          "signature": "KW_case",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_case",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_case"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_casex",
          "package": "verilog",
          "signature": "KW_casex",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_casex",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_casex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_casez",
          "package": "verilog",
          "signature": "KW_casez",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_casez",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_casez"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_cell",
          "package": "verilog",
          "signature": "KW_cell",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_cell",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_cell"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_chandle",
          "package": "verilog",
          "signature": "KW_chandle",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_chandle",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_chandle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_class",
          "package": "verilog",
          "signature": "KW_class",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_class",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_class"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_clocking",
          "package": "verilog",
          "signature": "KW_clocking",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_clocking",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_clocking"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_cmos",
          "package": "verilog",
          "signature": "KW_cmos",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_cmos",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_cmos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_config",
          "package": "verilog",
          "signature": "KW_config",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_config",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_config"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_const",
          "package": "verilog",
          "signature": "KW_const",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_const",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_const"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_constraint",
          "package": "verilog",
          "signature": "KW_constraint",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_constraint",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_constraint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_context",
          "package": "verilog",
          "signature": "KW_context",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_context",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_context"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_continue",
          "package": "verilog",
          "signature": "KW_continue",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_continue",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_continue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_cover",
          "package": "verilog",
          "signature": "KW_cover",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_cover",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_cover"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_covergroup",
          "package": "verilog",
          "signature": "KW_covergroup",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_covergroup",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_covergroup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_coverpoint",
          "package": "verilog",
          "signature": "KW_coverpoint",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_coverpoint",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_coverpoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_cross",
          "package": "verilog",
          "signature": "KW_cross",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_cross",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_cross"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_deassign",
          "package": "verilog",
          "signature": "KW_deassign",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_deassign",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_deassign"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_default",
          "package": "verilog",
          "signature": "KW_default",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_default",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_default"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_defparam",
          "package": "verilog",
          "signature": "KW_defparam",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_defparam",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_defparam"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_design",
          "package": "verilog",
          "signature": "KW_design",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_design",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_design"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_disable",
          "package": "verilog",
          "signature": "KW_disable",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_disable",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_disable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_dist",
          "package": "verilog",
          "signature": "KW_dist",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_dist",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_dist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_do",
          "package": "verilog",
          "signature": "KW_do",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_do",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_do"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_edge",
          "package": "verilog",
          "signature": "KW_edge",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_edge",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_edge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_else",
          "package": "verilog",
          "signature": "KW_else",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_else",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_else"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_end",
          "package": "verilog",
          "signature": "KW_end",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_end",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_end"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_endcase",
          "package": "verilog",
          "signature": "KW_endcase",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_endcase",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_endcase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_endclass",
          "package": "verilog",
          "signature": "KW_endclass",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_endclass",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_endclass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_endclocking",
          "package": "verilog",
          "signature": "KW_endclocking",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_endclocking",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_endclocking"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_endconfig",
          "package": "verilog",
          "signature": "KW_endconfig",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_endconfig",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_endconfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_endfunction",
          "package": "verilog",
          "signature": "KW_endfunction",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_endfunction",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_endfunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_endgenerate",
          "package": "verilog",
          "signature": "KW_endgenerate",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_endgenerate",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_endgenerate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_endgroup",
          "package": "verilog",
          "signature": "KW_endgroup",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_endgroup",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_endgroup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_endinterface",
          "package": "verilog",
          "signature": "KW_endinterface",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_endinterface",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_endinterface"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_endmodule",
          "package": "verilog",
          "signature": "KW_endmodule",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_endmodule",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_endmodule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_endpackage",
          "package": "verilog",
          "signature": "KW_endpackage",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_endpackage",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_endpackage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_endprimitive",
          "package": "verilog",
          "signature": "KW_endprimitive",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_endprimitive",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_endprimitive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_endprogram",
          "package": "verilog",
          "signature": "KW_endprogram",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_endprogram",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_endprogram"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_endproperty",
          "package": "verilog",
          "signature": "KW_endproperty",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_endproperty",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_endproperty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_endsequence",
          "package": "verilog",
          "signature": "KW_endsequence",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_endsequence",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_endsequence"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_endspecify",
          "package": "verilog",
          "signature": "KW_endspecify",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_endspecify",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_endspecify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_endtable",
          "package": "verilog",
          "signature": "KW_endtable",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_endtable",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_endtable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_endtask",
          "package": "verilog",
          "signature": "KW_endtask",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_endtask",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_endtask"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_enum",
          "package": "verilog",
          "signature": "KW_enum",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_enum",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_enum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_event",
          "package": "verilog",
          "signature": "KW_event",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_event",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_event"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_expect",
          "package": "verilog",
          "signature": "KW_expect",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_expect",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_expect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_export",
          "package": "verilog",
          "signature": "KW_export",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_export",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_export"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_extends",
          "package": "verilog",
          "signature": "KW_extends",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_extends",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_extends"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_extern",
          "package": "verilog",
          "signature": "KW_extern",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_extern",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_extern"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_final",
          "package": "verilog",
          "signature": "KW_final",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_final",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_final"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_first_match",
          "package": "verilog",
          "signature": "KW_first_match",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_first_match",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_first_match"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_for",
          "package": "verilog",
          "signature": "KW_for",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_for",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_for"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_force",
          "package": "verilog",
          "signature": "KW_force",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_force",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_force"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_foreach",
          "package": "verilog",
          "signature": "KW_foreach",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_foreach",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_foreach"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_forever",
          "package": "verilog",
          "signature": "KW_forever",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_forever",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_forever"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_fork",
          "package": "verilog",
          "signature": "KW_fork",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_fork",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_fork"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_forkjoin",
          "package": "verilog",
          "signature": "KW_forkjoin",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_forkjoin",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_forkjoin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_function",
          "package": "verilog",
          "signature": "KW_function",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_function",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_function"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_function_prototype",
          "package": "verilog",
          "signature": "KW_function_prototype",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_function_prototype",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_function_prototype"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_generate",
          "package": "verilog",
          "signature": "KW_generate",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_generate",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_generate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_genvar",
          "package": "verilog",
          "signature": "KW_genvar",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_genvar",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_genvar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_highz0",
          "package": "verilog",
          "signature": "KW_highz0",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_highz0",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_highz0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_highz1",
          "package": "verilog",
          "signature": "KW_highz1",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_highz1",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_highz1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_if",
          "package": "verilog",
          "signature": "KW_if",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_if",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_if"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_iff",
          "package": "verilog",
          "signature": "KW_iff",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_iff",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_iff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_ifnone",
          "package": "verilog",
          "signature": "KW_ifnone",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_ifnone",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_ifnone"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_ignore_bins",
          "package": "verilog",
          "signature": "KW_ignore_bins",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_ignore_bins",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_ignore_bins"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_illegal_bins",
          "package": "verilog",
          "signature": "KW_illegal_bins",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_illegal_bins",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_illegal_bins"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_import",
          "package": "verilog",
          "signature": "KW_import",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_import",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_import"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_incdir",
          "package": "verilog",
          "signature": "KW_incdir",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_incdir",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_incdir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_include",
          "package": "verilog",
          "signature": "KW_include",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_include",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_include"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_initial",
          "package": "verilog",
          "signature": "KW_initial",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_initial",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_initial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_inout",
          "package": "verilog",
          "signature": "KW_inout",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_inout",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_inout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_input",
          "package": "verilog",
          "signature": "KW_input",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_input",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_input"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_inside",
          "package": "verilog",
          "signature": "KW_inside",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_inside",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_inside"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_instance",
          "package": "verilog",
          "signature": "KW_instance",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_instance",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_instance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_int",
          "package": "verilog",
          "signature": "KW_int",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_int",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_int"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_integer",
          "package": "verilog",
          "signature": "KW_integer",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_integer",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_integer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_interface",
          "package": "verilog",
          "signature": "KW_interface",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_interface",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_interface"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_intersect",
          "package": "verilog",
          "signature": "KW_intersect",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_intersect",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_intersect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_join",
          "package": "verilog",
          "signature": "KW_join",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_join",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_join"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_join_any",
          "package": "verilog",
          "signature": "KW_join_any",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_join_any",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_join_any"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_join_none",
          "package": "verilog",
          "signature": "KW_join_none",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_join_none",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_join_none"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_large",
          "package": "verilog",
          "signature": "KW_large",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_large",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_large"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_liblist",
          "package": "verilog",
          "signature": "KW_liblist",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_liblist",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_liblist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_library",
          "package": "verilog",
          "signature": "KW_library",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_library",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_library"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_local",
          "package": "verilog",
          "signature": "KW_local",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_local",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_local"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_localparam",
          "package": "verilog",
          "signature": "KW_localparam",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_localparam",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_localparam"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_logic",
          "package": "verilog",
          "signature": "KW_logic",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_logic",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_logic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_longint",
          "package": "verilog",
          "signature": "KW_longint",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_longint",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_longint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_macromodule",
          "package": "verilog",
          "signature": "KW_macromodule",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_macromodule",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_macromodule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_matches",
          "package": "verilog",
          "signature": "KW_matches",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_matches",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_matches"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_medium",
          "package": "verilog",
          "signature": "KW_medium",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_medium",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_medium"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_modport",
          "package": "verilog",
          "signature": "KW_modport",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_modport",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_modport"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_module",
          "package": "verilog",
          "signature": "KW_module",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_module",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_module"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_nand",
          "package": "verilog",
          "signature": "KW_nand",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_nand",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_nand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_negedge",
          "package": "verilog",
          "signature": "KW_negedge",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_negedge",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_negedge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_new",
          "package": "verilog",
          "signature": "KW_new",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_new",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_new"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_nmos",
          "package": "verilog",
          "signature": "KW_nmos",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_nmos",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_nmos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_nor",
          "package": "verilog",
          "signature": "KW_nor",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_nor",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_nor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_noshowcancelled",
          "package": "verilog",
          "signature": "KW_noshowcancelled",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_noshowcancelled",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_noshowcancelled"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_not",
          "package": "verilog",
          "signature": "KW_not",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_not",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_not"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_notif0",
          "package": "verilog",
          "signature": "KW_notif0",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_notif0",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_notif0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_notif1",
          "package": "verilog",
          "signature": "KW_notif1",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_notif1",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_notif1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_null",
          "package": "verilog",
          "signature": "KW_null",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_null",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_option",
          "package": "verilog",
          "signature": "KW_option",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_option",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_option"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_or",
          "package": "verilog",
          "signature": "KW_or",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_or",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_or"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_output",
          "package": "verilog",
          "signature": "KW_output",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_output",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_output"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_package",
          "package": "verilog",
          "signature": "KW_package",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_package",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_package"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_packed",
          "package": "verilog",
          "signature": "KW_packed",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_packed",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_packed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_parameter",
          "package": "verilog",
          "signature": "KW_parameter",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_parameter",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_parameter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_pathpulse_dollar",
          "package": "verilog",
          "signature": "KW_pathpulse_dollar",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_pathpulse_dollar",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_pathpulse_dollar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_pmos",
          "package": "verilog",
          "signature": "KW_pmos",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_pmos",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_pmos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_posedge",
          "package": "verilog",
          "signature": "KW_posedge",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_posedge",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_posedge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_primitive",
          "package": "verilog",
          "signature": "KW_primitive",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_primitive",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_primitive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_priority",
          "package": "verilog",
          "signature": "KW_priority",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_priority",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_priority"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_program",
          "package": "verilog",
          "signature": "KW_program",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_program",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_program"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_property",
          "package": "verilog",
          "signature": "KW_property",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_property",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_property"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_protected",
          "package": "verilog",
          "signature": "KW_protected",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_protected",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_protected"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_pull0",
          "package": "verilog",
          "signature": "KW_pull0",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_pull0",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_pull0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_pull1",
          "package": "verilog",
          "signature": "KW_pull1",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_pull1",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_pull1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_pulldown",
          "package": "verilog",
          "signature": "KW_pulldown",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_pulldown",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_pulldown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_pullup",
          "package": "verilog",
          "signature": "KW_pullup",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_pullup",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_pullup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_pulsestyle_ondetect",
          "package": "verilog",
          "signature": "KW_pulsestyle_ondetect",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_pulsestyle_ondetect",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_pulsestyle_ondetect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_pulsestyle_onevent",
          "package": "verilog",
          "signature": "KW_pulsestyle_onevent",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_pulsestyle_onevent",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_pulsestyle_onevent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_pure",
          "package": "verilog",
          "signature": "KW_pure",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_pure",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_pure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_rand",
          "package": "verilog",
          "signature": "KW_rand",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_rand",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_rand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_randc",
          "package": "verilog",
          "signature": "KW_randc",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_randc",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_randc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_randcase",
          "package": "verilog",
          "signature": "KW_randcase",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_randcase",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_randcase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_randsequence",
          "package": "verilog",
          "signature": "KW_randsequence",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_randsequence",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_randsequence"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_rcmos",
          "package": "verilog",
          "signature": "KW_rcmos",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_rcmos",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_rcmos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_real",
          "package": "verilog",
          "signature": "KW_real",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_real",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_real"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_realtime",
          "package": "verilog",
          "signature": "KW_realtime",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_realtime",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_realtime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_ref",
          "package": "verilog",
          "signature": "KW_ref",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_ref",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_ref"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_reg",
          "package": "verilog",
          "signature": "KW_reg",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_reg",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_reg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_release",
          "package": "verilog",
          "signature": "KW_release",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_release",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_release"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_repeat",
          "package": "verilog",
          "signature": "KW_repeat",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_repeat",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_repeat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_return",
          "package": "verilog",
          "signature": "KW_return",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_return",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_return"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_rnmos",
          "package": "verilog",
          "signature": "KW_rnmos",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_rnmos",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_rnmos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_rpmos",
          "package": "verilog",
          "signature": "KW_rpmos",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_rpmos",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_rpmos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_rtran",
          "package": "verilog",
          "signature": "KW_rtran",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_rtran",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_rtran"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_rtranif0",
          "package": "verilog",
          "signature": "KW_rtranif0",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_rtranif0",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_rtranif0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_rtranif1",
          "package": "verilog",
          "signature": "KW_rtranif1",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_rtranif1",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_rtranif1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_scalared",
          "package": "verilog",
          "signature": "KW_scalared",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_scalared",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_scalared"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_sequence",
          "package": "verilog",
          "signature": "KW_sequence",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_sequence",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_sequence"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_shortint",
          "package": "verilog",
          "signature": "KW_shortint",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_shortint",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_shortint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_shortreal",
          "package": "verilog",
          "signature": "KW_shortreal",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_shortreal",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_shortreal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_showcancelled",
          "package": "verilog",
          "signature": "KW_showcancelled",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_showcancelled",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_showcancelled"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_signed",
          "package": "verilog",
          "signature": "KW_signed",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_signed",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_signed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_small",
          "package": "verilog",
          "signature": "KW_small",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_small",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_small"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_solve",
          "package": "verilog",
          "signature": "KW_solve",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_solve",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_solve"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_specify",
          "package": "verilog",
          "signature": "KW_specify",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_specify",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_specify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_specparam",
          "package": "verilog",
          "signature": "KW_specparam",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_specparam",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_specparam"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_static",
          "package": "verilog",
          "signature": "KW_static",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_static",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_static"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_strength0",
          "package": "verilog",
          "signature": "KW_strength0",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_strength0",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_strength0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_strength1",
          "package": "verilog",
          "signature": "KW_strength1",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_strength1",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_strength1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_string",
          "package": "verilog",
          "signature": "KW_string",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_string",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_string"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_strong0",
          "package": "verilog",
          "signature": "KW_strong0",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_strong0",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_strong0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_strong1",
          "package": "verilog",
          "signature": "KW_strong1",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_strong1",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_strong1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_struct",
          "package": "verilog",
          "signature": "KW_struct",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_struct",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_struct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_super",
          "package": "verilog",
          "signature": "KW_super",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_super",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_super"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_supply0",
          "package": "verilog",
          "signature": "KW_supply0",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_supply0",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_supply0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_supply1",
          "package": "verilog",
          "signature": "KW_supply1",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_supply1",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_supply1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_table",
          "package": "verilog",
          "signature": "KW_table",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_table",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_table"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_tagged",
          "package": "verilog",
          "signature": "KW_tagged",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_tagged",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_tagged"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_task",
          "package": "verilog",
          "signature": "KW_task",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_task",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_task"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_this",
          "package": "verilog",
          "signature": "KW_this",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_this",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_this"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_throughout",
          "package": "verilog",
          "signature": "KW_throughout",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_throughout",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_throughout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_time",
          "package": "verilog",
          "signature": "KW_time",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_time",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_time"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_timeprecision",
          "package": "verilog",
          "signature": "KW_timeprecision",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_timeprecision",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_timeprecision"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_timeunit",
          "package": "verilog",
          "signature": "KW_timeunit",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_timeunit",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_timeunit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_tran",
          "package": "verilog",
          "signature": "KW_tran",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_tran",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_tran"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_tranif0",
          "package": "verilog",
          "signature": "KW_tranif0",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_tranif0",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_tranif0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_tranif1",
          "package": "verilog",
          "signature": "KW_tranif1",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_tranif1",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_tranif1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_tri",
          "package": "verilog",
          "signature": "KW_tri",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_tri",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_tri"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_tri0",
          "package": "verilog",
          "signature": "KW_tri0",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_tri0",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_tri0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_tri1",
          "package": "verilog",
          "signature": "KW_tri1",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_tri1",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_tri1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_triand",
          "package": "verilog",
          "signature": "KW_triand",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_triand",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_triand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_trior",
          "package": "verilog",
          "signature": "KW_trior",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_trior",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_trior"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_trireg",
          "package": "verilog",
          "signature": "KW_trireg",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_trireg",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_trireg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_type",
          "package": "verilog",
          "signature": "KW_type",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_type",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_type"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_type_option",
          "package": "verilog",
          "signature": "KW_type_option",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_type_option",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_type_option"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_typedef",
          "package": "verilog",
          "signature": "KW_typedef",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_typedef",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_typedef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_union",
          "package": "verilog",
          "signature": "KW_union",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_union",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_union"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_unique",
          "package": "verilog",
          "signature": "KW_unique",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_unique",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_unique"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_unsigned",
          "package": "verilog",
          "signature": "KW_unsigned",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_unsigned",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_unsigned"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_use",
          "package": "verilog",
          "signature": "KW_use",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_use",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_use"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_var",
          "package": "verilog",
          "signature": "KW_var",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_var",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_var"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_vectored",
          "package": "verilog",
          "signature": "KW_vectored",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_vectored",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_vectored"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_virtual",
          "package": "verilog",
          "signature": "KW_virtual",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_virtual",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_virtual"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_void",
          "package": "verilog",
          "signature": "KW_void",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_void",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_void"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_wait",
          "package": "verilog",
          "signature": "KW_wait",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_wait",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_wait"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_wait_order",
          "package": "verilog",
          "signature": "KW_wait_order",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_wait_order",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_wait_order"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_wand",
          "package": "verilog",
          "signature": "KW_wand",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_wand",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_wand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_weak0",
          "package": "verilog",
          "signature": "KW_weak0",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_weak0",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_weak0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_weak1",
          "package": "verilog",
          "signature": "KW_weak1",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_weak1",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_weak1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_while",
          "package": "verilog",
          "signature": "KW_while",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_while",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_while"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_wildcard",
          "package": "verilog",
          "signature": "KW_wildcard",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_wildcard",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_wildcard"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_wire",
          "package": "verilog",
          "signature": "KW_wire",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_wire",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_wire"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_with",
          "package": "verilog",
          "signature": "KW_with",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_with",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_with"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_within",
          "package": "verilog",
          "signature": "KW_within",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_within",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_within"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_wor",
          "package": "verilog",
          "signature": "KW_wor",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_wor",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_wor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_xnor",
          "package": "verilog",
          "signature": "KW_xnor",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_xnor",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_xnor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "KW_xor",
          "package": "verilog",
          "signature": "KW_xor",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "KW_xor",
          "package": "verilog",
          "partial": "KW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:KW_xor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "Lit_number",
          "package": "verilog",
          "signature": "Lit_number",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "Lit_number",
          "package": "verilog",
          "partial": "Lit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:Lit_number"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "Lit_number_unsigned",
          "package": "verilog",
          "signature": "Lit_number_unsigned",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "Lit_number_unsigned",
          "package": "verilog",
          "partial": "Lit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:Lit_number_unsigned"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "Lit_string",
          "package": "verilog",
          "signature": "Lit_string",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "Lit_string",
          "package": "verilog",
          "partial": "Lit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:Lit_string"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "Position",
          "package": "verilog",
          "signature": "Position String Int Int",
          "source": "src/Language-Verilog-Tokens.html#Position",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "Position",
          "package": "verilog",
          "partial": "Position",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:Position"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "Sym_amp",
          "package": "verilog",
          "signature": "Sym_amp",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "Sym_amp",
          "package": "verilog",
          "partial": "Sym",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:Sym_amp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "Sym_amp_amp",
          "package": "verilog",
          "signature": "Sym_amp_amp",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "Sym_amp_amp",
          "package": "verilog",
          "partial": "Sym",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:Sym_amp_amp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "Sym_amp_amp_amp",
          "package": "verilog",
          "signature": "Sym_amp_amp_amp",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "Sym_amp_amp_amp",
          "package": "verilog",
          "partial": "Sym",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:Sym_amp_amp_amp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "Sym_amp_eq",
          "package": "verilog",
          "signature": "Sym_amp_eq",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "Sym_amp_eq",
          "package": "verilog",
          "partial": "Sym",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:Sym_amp_eq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "Sym_aster",
          "package": "verilog",
          "signature": "Sym_aster",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "Sym_aster",
          "package": "verilog",
          "partial": "Sym",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:Sym_aster"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "Sym_aster_aster",
          "package": "verilog",
          "signature": "Sym_aster_aster",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "Sym_aster_aster",
          "package": "verilog",
          "partial": "Sym",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:Sym_aster_aster"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "Sym_aster_eq",
          "package": "verilog",
          "signature": "Sym_aster_eq",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "Sym_aster_eq",
          "package": "verilog",
          "partial": "Sym",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:Sym_aster_eq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "Sym_aster_gt",
          "package": "verilog",
          "signature": "Sym_aster_gt",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "Sym_aster_gt",
          "package": "verilog",
          "partial": "Sym",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:Sym_aster_gt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "Sym_aster_paren_r",
          "package": "verilog",
          "signature": "Sym_aster_paren_r",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "Sym_aster_paren_r",
          "package": "verilog",
          "partial": "Sym",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:Sym_aster_paren_r"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "Sym_at",
          "package": "verilog",
          "signature": "Sym_at",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "Sym_at",
          "package": "verilog",
          "partial": "Sym",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:Sym_at"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "Sym_at_aster",
          "package": "verilog",
          "signature": "Sym_at_aster",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "Sym_at_aster",
          "package": "verilog",
          "partial": "Sym",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:Sym_at_aster"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "Sym_at_at_paren_l",
          "package": "verilog",
          "signature": "Sym_at_at_paren_l",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "Sym_at_at_paren_l",
          "package": "verilog",
          "partial": "Sym",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:Sym_at_at_paren_l"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "Sym_bang",
          "package": "verilog",
          "signature": "Sym_bang",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "Sym_bang",
          "package": "verilog",
          "partial": "Sym",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:Sym_bang"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "Sym_bang_eq",
          "package": "verilog",
          "signature": "Sym_bang_eq",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "Sym_bang_eq",
          "package": "verilog",
          "partial": "Sym",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:Sym_bang_eq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "Sym_bang_eq_eq",
          "package": "verilog",
          "signature": "Sym_bang_eq_eq",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "Sym_bang_eq_eq",
          "package": "verilog",
          "partial": "Sym",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:Sym_bang_eq_eq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "Sym_bang_question_eq",
          "package": "verilog",
          "signature": "Sym_bang_question_eq",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "Sym_bang_question_eq",
          "package": "verilog",
          "partial": "Sym",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:Sym_bang_question_eq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "Sym_bar",
          "package": "verilog",
          "signature": "Sym_bar",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "Sym_bar",
          "package": "verilog",
          "partial": "Sym",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:Sym_bar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "Sym_bar_bar",
          "package": "verilog",
          "signature": "Sym_bar_bar",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "Sym_bar_bar",
          "package": "verilog",
          "partial": "Sym",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:Sym_bar_bar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "Sym_bar_dash_gt",
          "package": "verilog",
          "signature": "Sym_bar_dash_gt",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "Sym_bar_dash_gt",
          "package": "verilog",
          "partial": "Sym",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:Sym_bar_dash_gt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "Sym_bar_eq",
          "package": "verilog",
          "signature": "Sym_bar_eq",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "Sym_bar_eq",
          "package": "verilog",
          "partial": "Sym",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:Sym_bar_eq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "Sym_bar_eq_gt",
          "package": "verilog",
          "signature": "Sym_bar_eq_gt",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "Sym_bar_eq_gt",
          "package": "verilog",
          "partial": "Sym",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:Sym_bar_eq_gt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "Sym_brace_l",
          "package": "verilog",
          "signature": "Sym_brace_l",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "Sym_brace_l",
          "package": "verilog",
          "partial": "Sym",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:Sym_brace_l"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "Sym_brace_r",
          "package": "verilog",
          "signature": "Sym_brace_r",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "Sym_brace_r",
          "package": "verilog",
          "partial": "Sym",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:Sym_brace_r"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "Sym_brack_l",
          "package": "verilog",
          "signature": "Sym_brack_l",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "Sym_brack_l",
          "package": "verilog",
          "partial": "Sym",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:Sym_brack_l"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "Sym_brack_l_aster",
          "package": "verilog",
          "signature": "Sym_brack_l_aster",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "Sym_brack_l_aster",
          "package": "verilog",
          "partial": "Sym",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:Sym_brack_l_aster"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "Sym_brack_l_dash_gt",
          "package": "verilog",
          "signature": "Sym_brack_l_dash_gt",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "Sym_brack_l_dash_gt",
          "package": "verilog",
          "partial": "Sym",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:Sym_brack_l_dash_gt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "Sym_brack_l_eq",
          "package": "verilog",
          "signature": "Sym_brack_l_eq",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "Sym_brack_l_eq",
          "package": "verilog",
          "partial": "Sym",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:Sym_brack_l_eq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "Sym_brack_r",
          "package": "verilog",
          "signature": "Sym_brack_r",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "Sym_brack_r",
          "package": "verilog",
          "partial": "Sym",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:Sym_brack_r"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "Sym_colon",
          "package": "verilog",
          "signature": "Sym_colon",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "Sym_colon",
          "package": "verilog",
          "partial": "Sym",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:Sym_colon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "Sym_colon_colon",
          "package": "verilog",
          "signature": "Sym_colon_colon",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "Sym_colon_colon",
          "package": "verilog",
          "partial": "Sym",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:Sym_colon_colon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "Sym_colon_eq",
          "package": "verilog",
          "signature": "Sym_colon_eq",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "Sym_colon_eq",
          "package": "verilog",
          "partial": "Sym",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:Sym_colon_eq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "Sym_colon_slash",
          "package": "verilog",
          "signature": "Sym_colon_slash",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "Sym_colon_slash",
          "package": "verilog",
          "partial": "Sym",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:Sym_colon_slash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "Sym_comma",
          "package": "verilog",
          "signature": "Sym_comma",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "Sym_comma",
          "package": "verilog",
          "partial": "Sym",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:Sym_comma"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "Sym_dash",
          "package": "verilog",
          "signature": "Sym_dash",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "Sym_dash",
          "package": "verilog",
          "partial": "Sym",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:Sym_dash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "Sym_dash_colon",
          "package": "verilog",
          "signature": "Sym_dash_colon",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "Sym_dash_colon",
          "package": "verilog",
          "partial": "Sym",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:Sym_dash_colon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "Sym_dash_dash",
          "package": "verilog",
          "signature": "Sym_dash_dash",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "Sym_dash_dash",
          "package": "verilog",
          "partial": "Sym",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:Sym_dash_dash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "Sym_dash_eq",
          "package": "verilog",
          "signature": "Sym_dash_eq",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "Sym_dash_eq",
          "package": "verilog",
          "partial": "Sym",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:Sym_dash_eq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "Sym_dash_gt",
          "package": "verilog",
          "signature": "Sym_dash_gt",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "Sym_dash_gt",
          "package": "verilog",
          "partial": "Sym",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:Sym_dash_gt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "Sym_dash_gt_gt",
          "package": "verilog",
          "signature": "Sym_dash_gt_gt",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "Sym_dash_gt_gt",
          "package": "verilog",
          "partial": "Sym",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:Sym_dash_gt_gt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "Sym_dollar",
          "package": "verilog",
          "signature": "Sym_dollar",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "Sym_dollar",
          "package": "verilog",
          "partial": "Sym",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:Sym_dollar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "Sym_dot",
          "package": "verilog",
          "signature": "Sym_dot",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "Sym_dot",
          "package": "verilog",
          "partial": "Sym",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:Sym_dot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "Sym_dot_aster",
          "package": "verilog",
          "signature": "Sym_dot_aster",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "Sym_dot_aster",
          "package": "verilog",
          "partial": "Sym",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:Sym_dot_aster"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "Sym_eq",
          "package": "verilog",
          "signature": "Sym_eq",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "Sym_eq",
          "package": "verilog",
          "partial": "Sym",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:Sym_eq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "Sym_eq_eq",
          "package": "verilog",
          "signature": "Sym_eq_eq",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "Sym_eq_eq",
          "package": "verilog",
          "partial": "Sym",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:Sym_eq_eq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "Sym_eq_eq_eq",
          "package": "verilog",
          "signature": "Sym_eq_eq_eq",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "Sym_eq_eq_eq",
          "package": "verilog",
          "partial": "Sym",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:Sym_eq_eq_eq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "Sym_eq_gt",
          "package": "verilog",
          "signature": "Sym_eq_gt",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "Sym_eq_gt",
          "package": "verilog",
          "partial": "Sym",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:Sym_eq_gt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "Sym_eq_question_eq",
          "package": "verilog",
          "signature": "Sym_eq_question_eq",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "Sym_eq_question_eq",
          "package": "verilog",
          "partial": "Sym",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:Sym_eq_question_eq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "Sym_gt",
          "package": "verilog",
          "signature": "Sym_gt",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "Sym_gt",
          "package": "verilog",
          "partial": "Sym",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:Sym_gt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "Sym_gt_eq",
          "package": "verilog",
          "signature": "Sym_gt_eq",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "Sym_gt_eq",
          "package": "verilog",
          "partial": "Sym",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:Sym_gt_eq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "Sym_gt_gt",
          "package": "verilog",
          "signature": "Sym_gt_gt",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "Sym_gt_gt",
          "package": "verilog",
          "partial": "Sym",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:Sym_gt_gt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "Sym_gt_gt_eq",
          "package": "verilog",
          "signature": "Sym_gt_gt_eq",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "Sym_gt_gt_eq",
          "package": "verilog",
          "partial": "Sym",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:Sym_gt_gt_eq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "Sym_gt_gt_gt",
          "package": "verilog",
          "signature": "Sym_gt_gt_gt",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "Sym_gt_gt_gt",
          "package": "verilog",
          "partial": "Sym",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:Sym_gt_gt_gt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "Sym_gt_gt_gt_eq",
          "package": "verilog",
          "signature": "Sym_gt_gt_gt_eq",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "Sym_gt_gt_gt_eq",
          "package": "verilog",
          "partial": "Sym",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:Sym_gt_gt_gt_eq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "Sym_hat",
          "package": "verilog",
          "signature": "Sym_hat",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "Sym_hat",
          "package": "verilog",
          "partial": "Sym",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:Sym_hat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "Sym_hat_eq",
          "package": "verilog",
          "signature": "Sym_hat_eq",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "Sym_hat_eq",
          "package": "verilog",
          "partial": "Sym",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:Sym_hat_eq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "Sym_hat_tildy",
          "package": "verilog",
          "signature": "Sym_hat_tildy",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "Sym_hat_tildy",
          "package": "verilog",
          "partial": "Sym",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:Sym_hat_tildy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "Sym_lt",
          "package": "verilog",
          "signature": "Sym_lt",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "Sym_lt",
          "package": "verilog",
          "partial": "Sym",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:Sym_lt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "Sym_lt_eq",
          "package": "verilog",
          "signature": "Sym_lt_eq",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "Sym_lt_eq",
          "package": "verilog",
          "partial": "Sym",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:Sym_lt_eq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "Sym_lt_lt",
          "package": "verilog",
          "signature": "Sym_lt_lt",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "Sym_lt_lt",
          "package": "verilog",
          "partial": "Sym",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:Sym_lt_lt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "Sym_lt_lt_eq",
          "package": "verilog",
          "signature": "Sym_lt_lt_eq",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "Sym_lt_lt_eq",
          "package": "verilog",
          "partial": "Sym",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:Sym_lt_lt_eq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "Sym_lt_lt_lt",
          "package": "verilog",
          "signature": "Sym_lt_lt_lt",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "Sym_lt_lt_lt",
          "package": "verilog",
          "partial": "Sym",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:Sym_lt_lt_lt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "Sym_lt_lt_lt_eq",
          "package": "verilog",
          "signature": "Sym_lt_lt_lt_eq",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "Sym_lt_lt_lt_eq",
          "package": "verilog",
          "partial": "Sym",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:Sym_lt_lt_lt_eq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "Sym_paren_l",
          "package": "verilog",
          "signature": "Sym_paren_l",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "Sym_paren_l",
          "package": "verilog",
          "partial": "Sym",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:Sym_paren_l"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "Sym_paren_l_aster",
          "package": "verilog",
          "signature": "Sym_paren_l_aster",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "Sym_paren_l_aster",
          "package": "verilog",
          "partial": "Sym",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:Sym_paren_l_aster"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "Sym_paren_l_aster_paren_r",
          "package": "verilog",
          "signature": "Sym_paren_l_aster_paren_r",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "Sym_paren_l_aster_paren_r",
          "package": "verilog",
          "partial": "Sym",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:Sym_paren_l_aster_paren_r"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "Sym_paren_r",
          "package": "verilog",
          "signature": "Sym_paren_r",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "Sym_paren_r",
          "package": "verilog",
          "partial": "Sym",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:Sym_paren_r"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "Sym_percent",
          "package": "verilog",
          "signature": "Sym_percent",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "Sym_percent",
          "package": "verilog",
          "partial": "Sym",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:Sym_percent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "Sym_percent_eq",
          "package": "verilog",
          "signature": "Sym_percent_eq",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "Sym_percent_eq",
          "package": "verilog",
          "partial": "Sym",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:Sym_percent_eq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "Sym_plus",
          "package": "verilog",
          "signature": "Sym_plus",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "Sym_plus",
          "package": "verilog",
          "partial": "Sym",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:Sym_plus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "Sym_plus_colon",
          "package": "verilog",
          "signature": "Sym_plus_colon",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "Sym_plus_colon",
          "package": "verilog",
          "partial": "Sym",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:Sym_plus_colon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "Sym_plus_eq",
          "package": "verilog",
          "signature": "Sym_plus_eq",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "Sym_plus_eq",
          "package": "verilog",
          "partial": "Sym",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:Sym_plus_eq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "Sym_plus_plus",
          "package": "verilog",
          "signature": "Sym_plus_plus",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "Sym_plus_plus",
          "package": "verilog",
          "partial": "Sym",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:Sym_plus_plus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "Sym_pound",
          "package": "verilog",
          "signature": "Sym_pound",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "Sym_pound",
          "package": "verilog",
          "partial": "Sym",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:Sym_pound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "Sym_pound_pound",
          "package": "verilog",
          "signature": "Sym_pound_pound",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "Sym_pound_pound",
          "package": "verilog",
          "partial": "Sym",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:Sym_pound_pound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "Sym_question",
          "package": "verilog",
          "signature": "Sym_question",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "Sym_question",
          "package": "verilog",
          "partial": "Sym",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:Sym_question"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "Sym_s_quote",
          "package": "verilog",
          "signature": "Sym_s_quote",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "Sym_s_quote",
          "package": "verilog",
          "partial": "Sym",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:Sym_s_quote"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "Sym_semi",
          "package": "verilog",
          "signature": "Sym_semi",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "Sym_semi",
          "package": "verilog",
          "partial": "Sym",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:Sym_semi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "Sym_slash",
          "package": "verilog",
          "signature": "Sym_slash",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "Sym_slash",
          "package": "verilog",
          "partial": "Sym",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:Sym_slash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "Sym_slash_eq",
          "package": "verilog",
          "signature": "Sym_slash_eq",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "Sym_slash_eq",
          "package": "verilog",
          "partial": "Sym",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:Sym_slash_eq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "Sym_tildy",
          "package": "verilog",
          "signature": "Sym_tildy",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "Sym_tildy",
          "package": "verilog",
          "partial": "Sym",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:Sym_tildy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "Sym_tildy_amp",
          "package": "verilog",
          "signature": "Sym_tildy_amp",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "Sym_tildy_amp",
          "package": "verilog",
          "partial": "Sym",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:Sym_tildy_amp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "Sym_tildy_bar",
          "package": "verilog",
          "signature": "Sym_tildy_bar",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "Sym_tildy_bar",
          "package": "verilog",
          "partial": "Sym",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:Sym_tildy_bar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "Sym_tildy_hat",
          "package": "verilog",
          "signature": "Sym_tildy_hat",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "Sym_tildy_hat",
          "package": "verilog",
          "partial": "Sym",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:Sym_tildy_hat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "Token",
          "package": "verilog",
          "signature": "Token TokenInfo String Position",
          "source": "src/Language-Verilog-Tokens.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "Token",
          "package": "verilog",
          "partial": "Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:Token"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "Unknown",
          "package": "verilog",
          "signature": "Unknown",
          "source": "src/Language-Verilog-Tokens.html#TokenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "Unknown",
          "package": "verilog",
          "partial": "Unknown",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:Unknown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Tokens",
          "name": "tokenString",
          "package": "verilog",
          "signature": "Token -\u003e String",
          "source": "src/Language-Verilog-Tokens.html#tokenString",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Tokens",
          "module": "Language.Verilog.Tokens",
          "name": "tokenString",
          "normalized": "Token-\u003eString",
          "package": "verilog",
          "partial": "String",
          "signature": "Token-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Tokens.html#v:tokenString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Types",
          "name": "Types",
          "package": "verilog",
          "source": "src/Language-Verilog-Types.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Language Verilog Types",
          "module": "Language.Verilog.Types",
          "name": "Types",
          "package": "verilog",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Types",
          "name": "Call",
          "package": "verilog",
          "source": "src/Language-Verilog-Types.html#Call",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language Verilog Types",
          "module": "Language.Verilog.Types",
          "name": "Call",
          "package": "verilog",
          "partial": "Call",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Types.html#t:Call"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Types",
          "name": "Case",
          "package": "verilog",
          "source": "src/Language-Verilog-Types.html#Case",
          "type": "type"
        },
        "index": {
          "hierarchy": "Language Verilog Types",
          "module": "Language.Verilog.Types",
          "name": "Case",
          "package": "verilog",
          "partial": "Case",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Types.html#t:Case"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Types",
          "name": "Expr",
          "package": "verilog",
          "source": "src/Language-Verilog-Types.html#Expr",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language Verilog Types",
          "module": "Language.Verilog.Types",
          "name": "Expr",
          "package": "verilog",
          "partial": "Expr",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Types.html#t:Expr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Types",
          "name": "Identifier",
          "package": "verilog",
          "source": "src/Language-Verilog-Types.html#Identifier",
          "type": "type"
        },
        "index": {
          "hierarchy": "Language Verilog Types",
          "module": "Language.Verilog.Types",
          "name": "Identifier",
          "package": "verilog",
          "partial": "Identifier",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Types.html#t:Identifier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Types",
          "name": "LHS",
          "package": "verilog",
          "source": "src/Language-Verilog-Types.html#LHS",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language Verilog Types",
          "module": "Language.Verilog.Types",
          "name": "LHS",
          "package": "verilog",
          "partial": "LHS",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Types.html#t:LHS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Types",
          "name": "Module",
          "package": "verilog",
          "source": "src/Language-Verilog-Types.html#Module",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language Verilog Types",
          "module": "Language.Verilog.Types",
          "name": "Module",
          "package": "verilog",
          "partial": "Module",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Types.html#t:Module"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Types",
          "name": "ModuleItem",
          "package": "verilog",
          "source": "src/Language-Verilog-Types.html#ModuleItem",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language Verilog Types",
          "module": "Language.Verilog.Types",
          "name": "ModuleItem",
          "package": "verilog",
          "partial": "Module Item",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Types.html#t:ModuleItem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Types",
          "name": "Range",
          "package": "verilog",
          "source": "src/Language-Verilog-Types.html#Range",
          "type": "type"
        },
        "index": {
          "hierarchy": "Language Verilog Types",
          "module": "Language.Verilog.Types",
          "name": "Range",
          "package": "verilog",
          "partial": "Range",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Types.html#t:Range"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Types",
          "name": "Sense",
          "package": "verilog",
          "source": "src/Language-Verilog-Types.html#Sense",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language Verilog Types",
          "module": "Language.Verilog.Types",
          "name": "Sense",
          "package": "verilog",
          "partial": "Sense",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Types.html#t:Sense"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Types",
          "name": "Stmt",
          "package": "verilog",
          "source": "src/Language-Verilog-Types.html#Stmt",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language Verilog Types",
          "module": "Language.Verilog.Types",
          "name": "Stmt",
          "package": "verilog",
          "partial": "Stmt",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Types.html#t:Stmt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Types",
          "name": "Add",
          "package": "verilog",
          "signature": "Add Expr Expr",
          "source": "src/Language-Verilog-Types.html#Expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Types",
          "module": "Language.Verilog.Types",
          "name": "Add",
          "package": "verilog",
          "partial": "Add",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Types.html#v:Add"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Types",
          "name": "Always",
          "package": "verilog",
          "signature": "Always Sense Stmt",
          "source": "src/Language-Verilog-Types.html#ModuleItem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Types",
          "module": "Language.Verilog.Types",
          "name": "Always",
          "package": "verilog",
          "partial": "Always",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Types.html#v:Always"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Types",
          "name": "And",
          "package": "verilog",
          "signature": "And Expr Expr",
          "source": "src/Language-Verilog-Types.html#Expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Types",
          "module": "Language.Verilog.Types",
          "name": "And",
          "package": "verilog",
          "partial": "And",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Types.html#v:And"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Types",
          "name": "Assign",
          "package": "verilog",
          "signature": "Assign LHS Expr",
          "source": "src/Language-Verilog-Types.html#ModuleItem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Types",
          "module": "Language.Verilog.Types",
          "name": "Assign",
          "package": "verilog",
          "partial": "Assign",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Types.html#v:Assign"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Types",
          "name": "BWAnd",
          "package": "verilog",
          "signature": "BWAnd Expr Expr",
          "source": "src/Language-Verilog-Types.html#Expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Types",
          "module": "Language.Verilog.Types",
          "name": "BWAnd",
          "package": "verilog",
          "partial": "BWAnd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Types.html#v:BWAnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Types",
          "name": "BWNot",
          "package": "verilog",
          "signature": "BWNot Expr",
          "source": "src/Language-Verilog-Types.html#Expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Types",
          "module": "Language.Verilog.Types",
          "name": "BWNot",
          "package": "verilog",
          "partial": "BWNot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Types.html#v:BWNot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Types",
          "name": "BWOr",
          "package": "verilog",
          "signature": "BWOr Expr Expr",
          "source": "src/Language-Verilog-Types.html#Expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Types",
          "module": "Language.Verilog.Types",
          "name": "BWOr",
          "package": "verilog",
          "partial": "BWOr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Types.html#v:BWOr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Types",
          "name": "BWXor",
          "package": "verilog",
          "signature": "BWXor Expr Expr",
          "source": "src/Language-Verilog-Types.html#Expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Types",
          "module": "Language.Verilog.Types",
          "name": "BWXor",
          "package": "verilog",
          "partial": "BWXor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Types.html#v:BWXor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Types",
          "name": "Block",
          "package": "verilog",
          "signature": "Block (Maybe Identifier) [Stmt]",
          "source": "src/Language-Verilog-Types.html#Stmt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Types",
          "module": "Language.Verilog.Types",
          "name": "Block",
          "normalized": "Block(Maybe Identifier)[Stmt]",
          "package": "verilog",
          "partial": "Block",
          "signature": "Block(Maybe Identifier)[Stmt]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Types.html#v:Block"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Types",
          "name": "BlockingAssignment",
          "package": "verilog",
          "signature": "BlockingAssignment LHS Expr",
          "source": "src/Language-Verilog-Types.html#Stmt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Types",
          "module": "Language.Verilog.Types",
          "name": "BlockingAssignment",
          "package": "verilog",
          "partial": "Blocking Assignment",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Types.html#v:BlockingAssignment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Types",
          "name": "Call",
          "package": "verilog",
          "signature": "Call Identifier [Expr]",
          "source": "src/Language-Verilog-Types.html#Call",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Types",
          "module": "Language.Verilog.Types",
          "name": "Call",
          "normalized": "Call Identifier[Expr]",
          "package": "verilog",
          "partial": "Call",
          "signature": "Call Identifier[Expr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Types.html#v:Call"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Types",
          "name": "Case",
          "package": "verilog",
          "signature": "Case Expr [Case] Stmt",
          "source": "src/Language-Verilog-Types.html#Stmt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Types",
          "module": "Language.Verilog.Types",
          "name": "Case",
          "normalized": "Case Expr[Case]Stmt",
          "package": "verilog",
          "partial": "Case",
          "signature": "Case Expr[Case]Stmt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Types.html#v:Case"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Types",
          "name": "Concat",
          "package": "verilog",
          "signature": "Concat [Expr]",
          "source": "src/Language-Verilog-Types.html#Expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Types",
          "module": "Language.Verilog.Types",
          "name": "Concat",
          "normalized": "Concat[Expr]",
          "package": "verilog",
          "partial": "Concat",
          "signature": "Concat[Expr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Types.html#v:Concat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Types",
          "name": "Delay",
          "package": "verilog",
          "signature": "Delay String Stmt",
          "source": "src/Language-Verilog-Types.html#Stmt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Types",
          "module": "Language.Verilog.Types",
          "name": "Delay",
          "package": "verilog",
          "partial": "Delay",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Types.html#v:Delay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Types",
          "name": "Div",
          "package": "verilog",
          "signature": "Div Expr Expr",
          "source": "src/Language-Verilog-Types.html#Expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Types",
          "module": "Language.Verilog.Types",
          "name": "Div",
          "package": "verilog",
          "partial": "Div",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Types.html#v:Div"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Types",
          "name": "Eq",
          "package": "verilog",
          "signature": "Eq Expr Expr",
          "source": "src/Language-Verilog-Types.html#Expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Types",
          "module": "Language.Verilog.Types",
          "name": "Eq",
          "package": "verilog",
          "partial": "Eq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Types.html#v:Eq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Types",
          "name": "ExprCall",
          "package": "verilog",
          "signature": "ExprCall Call",
          "source": "src/Language-Verilog-Types.html#Expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Types",
          "module": "Language.Verilog.Types",
          "name": "ExprCall",
          "package": "verilog",
          "partial": "Expr Call",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Types.html#v:ExprCall"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Types",
          "name": "ExprLHS",
          "package": "verilog",
          "signature": "ExprLHS LHS",
          "source": "src/Language-Verilog-Types.html#Expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Types",
          "module": "Language.Verilog.Types",
          "name": "ExprLHS",
          "package": "verilog",
          "partial": "Expr LHS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Types.html#v:ExprLHS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Types",
          "name": "For",
          "package": "verilog",
          "signature": "For (Identifier, Expr) Expr (Identifier, Expr) Stmt",
          "source": "src/Language-Verilog-Types.html#Stmt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Types",
          "module": "Language.Verilog.Types",
          "name": "For",
          "normalized": "For(Identifier,Expr)Expr(Identifier,Expr)Stmt",
          "package": "verilog",
          "partial": "For",
          "signature": "For(Identifier,Expr)Expr(Identifier,Expr)Stmt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Types.html#v:For"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Types",
          "name": "Ge",
          "package": "verilog",
          "signature": "Ge Expr Expr",
          "source": "src/Language-Verilog-Types.html#Expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Types",
          "module": "Language.Verilog.Types",
          "name": "Ge",
          "package": "verilog",
          "partial": "Ge",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Types.html#v:Ge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Types",
          "name": "Gt",
          "package": "verilog",
          "signature": "Gt Expr Expr",
          "source": "src/Language-Verilog-Types.html#Expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Types",
          "module": "Language.Verilog.Types",
          "name": "Gt",
          "package": "verilog",
          "partial": "Gt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Types.html#v:Gt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Types",
          "name": "If",
          "package": "verilog",
          "signature": "If Expr Stmt Stmt",
          "source": "src/Language-Verilog-Types.html#Stmt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Types",
          "module": "Language.Verilog.Types",
          "name": "If",
          "package": "verilog",
          "partial": "If",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Types.html#v:If"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Types",
          "name": "Initial",
          "package": "verilog",
          "signature": "Initial Stmt",
          "source": "src/Language-Verilog-Types.html#ModuleItem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Types",
          "module": "Language.Verilog.Types",
          "name": "Initial",
          "package": "verilog",
          "partial": "Initial",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Types.html#v:Initial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Types",
          "name": "Inout",
          "package": "verilog",
          "signature": "Inout (Maybe Range) [(Identifier, Maybe Range)]",
          "source": "src/Language-Verilog-Types.html#ModuleItem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Types",
          "module": "Language.Verilog.Types",
          "name": "Inout",
          "normalized": "Inout(Maybe Range)[(Identifier,Maybe Range)]",
          "package": "verilog",
          "partial": "Inout",
          "signature": "Inout(Maybe Range)[(Identifier,Maybe Range)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Types.html#v:Inout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Types",
          "name": "Input",
          "package": "verilog",
          "signature": "Input (Maybe Range) [(Identifier, Maybe Range)]",
          "source": "src/Language-Verilog-Types.html#ModuleItem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Types",
          "module": "Language.Verilog.Types",
          "name": "Input",
          "normalized": "Input(Maybe Range)[(Identifier,Maybe Range)]",
          "package": "verilog",
          "partial": "Input",
          "signature": "Input(Maybe Range)[(Identifier,Maybe Range)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Types.html#v:Input"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Types",
          "name": "Instance",
          "package": "verilog",
          "signature": "Instance Identifier [(Identifier, Maybe Expr)] Identifier [(Identifier, Maybe Expr)]",
          "source": "src/Language-Verilog-Types.html#ModuleItem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Types",
          "module": "Language.Verilog.Types",
          "name": "Instance",
          "normalized": "Instance Identifier[(Identifier,Maybe Expr)]Identifier[(Identifier,Maybe Expr)]",
          "package": "verilog",
          "partial": "Instance",
          "signature": "Instance Identifier[(Identifier,Maybe Expr)]Identifier[(Identifier,Maybe Expr)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Types.html#v:Instance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Types",
          "name": "Integer",
          "package": "verilog",
          "signature": "Integer Identifier",
          "source": "src/Language-Verilog-Types.html#Stmt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Types",
          "module": "Language.Verilog.Types",
          "name": "Integer",
          "package": "verilog",
          "partial": "Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Types.html#v:Integer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Types",
          "name": "LHS",
          "package": "verilog",
          "signature": "LHS Identifier",
          "source": "src/Language-Verilog-Types.html#LHS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Types",
          "module": "Language.Verilog.Types",
          "name": "LHS",
          "package": "verilog",
          "partial": "LHS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Types.html#v:LHS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Types",
          "name": "LHSBit",
          "package": "verilog",
          "signature": "LHSBit Identifier Expr",
          "source": "src/Language-Verilog-Types.html#LHS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Types",
          "module": "Language.Verilog.Types",
          "name": "LHSBit",
          "package": "verilog",
          "partial": "LHSBit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Types.html#v:LHSBit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Types",
          "name": "LHSRange",
          "package": "verilog",
          "signature": "LHSRange Identifier Range",
          "source": "src/Language-Verilog-Types.html#LHS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Types",
          "module": "Language.Verilog.Types",
          "name": "LHSRange",
          "package": "verilog",
          "partial": "LHSRange",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Types.html#v:LHSRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Types",
          "name": "Le",
          "package": "verilog",
          "signature": "Le Expr Expr",
          "source": "src/Language-Verilog-Types.html#Expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Types",
          "module": "Language.Verilog.Types",
          "name": "Le",
          "package": "verilog",
          "partial": "Le",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Types.html#v:Le"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Types",
          "name": "Lt",
          "package": "verilog",
          "signature": "Lt Expr Expr",
          "source": "src/Language-Verilog-Types.html#Expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Types",
          "module": "Language.Verilog.Types",
          "name": "Lt",
          "package": "verilog",
          "partial": "Lt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Types.html#v:Lt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Types",
          "name": "Mod",
          "package": "verilog",
          "signature": "Mod Expr Expr",
          "source": "src/Language-Verilog-Types.html#Expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Types",
          "module": "Language.Verilog.Types",
          "name": "Mod",
          "package": "verilog",
          "partial": "Mod",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Types.html#v:Mod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Types",
          "name": "Module",
          "package": "verilog",
          "signature": "Module Identifier [Identifier] [ModuleItem]",
          "source": "src/Language-Verilog-Types.html#Module",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Types",
          "module": "Language.Verilog.Types",
          "name": "Module",
          "normalized": "Module Identifier[Identifier][ModuleItem]",
          "package": "verilog",
          "partial": "Module",
          "signature": "Module Identifier[Identifier][ModuleItem]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Types.html#v:Module"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Types",
          "name": "Mul",
          "package": "verilog",
          "signature": "Mul Expr Expr",
          "source": "src/Language-Verilog-Types.html#Expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Types",
          "module": "Language.Verilog.Types",
          "name": "Mul",
          "package": "verilog",
          "partial": "Mul",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Types.html#v:Mul"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Types",
          "name": "Mux",
          "package": "verilog",
          "signature": "Mux Expr Expr Expr",
          "source": "src/Language-Verilog-Types.html#Expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Types",
          "module": "Language.Verilog.Types",
          "name": "Mux",
          "package": "verilog",
          "partial": "Mux",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Types.html#v:Mux"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Types",
          "name": "Ne",
          "package": "verilog",
          "signature": "Ne Expr Expr",
          "source": "src/Language-Verilog-Types.html#Expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Types",
          "module": "Language.Verilog.Types",
          "name": "Ne",
          "package": "verilog",
          "partial": "Ne",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Types.html#v:Ne"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Types",
          "name": "NonBlockingAssignment",
          "package": "verilog",
          "signature": "NonBlockingAssignment LHS Expr",
          "source": "src/Language-Verilog-Types.html#Stmt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Types",
          "module": "Language.Verilog.Types",
          "name": "NonBlockingAssignment",
          "package": "verilog",
          "partial": "Non Blocking Assignment",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Types.html#v:NonBlockingAssignment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Types",
          "name": "Not",
          "package": "verilog",
          "signature": "Not Expr",
          "source": "src/Language-Verilog-Types.html#Expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Types",
          "module": "Language.Verilog.Types",
          "name": "Not",
          "package": "verilog",
          "partial": "Not",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Types.html#v:Not"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Types",
          "name": "Null",
          "package": "verilog",
          "signature": "Null",
          "source": "src/Language-Verilog-Types.html#Stmt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Types",
          "module": "Language.Verilog.Types",
          "name": "Null",
          "package": "verilog",
          "partial": "Null",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Types.html#v:Null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Types",
          "name": "Number",
          "package": "verilog",
          "signature": "Number String",
          "source": "src/Language-Verilog-Types.html#Expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Types",
          "module": "Language.Verilog.Types",
          "name": "Number",
          "package": "verilog",
          "partial": "Number",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Types.html#v:Number"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Types",
          "name": "Or",
          "package": "verilog",
          "signature": "Or Expr Expr",
          "source": "src/Language-Verilog-Types.html#Expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Types",
          "module": "Language.Verilog.Types",
          "name": "Or",
          "package": "verilog",
          "partial": "Or",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Types.html#v:Or"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Types",
          "name": "Output",
          "package": "verilog",
          "signature": "Output (Maybe Range) [(Identifier, Maybe Range)]",
          "source": "src/Language-Verilog-Types.html#ModuleItem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Types",
          "module": "Language.Verilog.Types",
          "name": "Output",
          "normalized": "Output(Maybe Range)[(Identifier,Maybe Range)]",
          "package": "verilog",
          "partial": "Output",
          "signature": "Output(Maybe Range)[(Identifier,Maybe Range)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Types.html#v:Output"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Types",
          "name": "Paremeter",
          "package": "verilog",
          "signature": "Paremeter (Maybe Range) Identifier Expr",
          "source": "src/Language-Verilog-Types.html#ModuleItem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Types",
          "module": "Language.Verilog.Types",
          "name": "Paremeter",
          "package": "verilog",
          "partial": "Paremeter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Types.html#v:Paremeter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Types",
          "name": "Reg",
          "package": "verilog",
          "signature": "Reg (Maybe Range) [(Identifier, Maybe Range)]",
          "source": "src/Language-Verilog-Types.html#ModuleItem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Types",
          "module": "Language.Verilog.Types",
          "name": "Reg",
          "normalized": "Reg(Maybe Range)[(Identifier,Maybe Range)]",
          "package": "verilog",
          "partial": "Reg",
          "signature": "Reg(Maybe Range)[(Identifier,Maybe Range)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Types.html#v:Reg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Types",
          "name": "Repeat",
          "package": "verilog",
          "signature": "Repeat Expr [Expr]",
          "source": "src/Language-Verilog-Types.html#Expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Types",
          "module": "Language.Verilog.Types",
          "name": "Repeat",
          "normalized": "Repeat Expr[Expr]",
          "package": "verilog",
          "partial": "Repeat",
          "signature": "Repeat Expr[Expr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Types.html#v:Repeat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Types",
          "name": "Sense",
          "package": "verilog",
          "signature": "Sense LHS",
          "source": "src/Language-Verilog-Types.html#Sense",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Types",
          "module": "Language.Verilog.Types",
          "name": "Sense",
          "package": "verilog",
          "partial": "Sense",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Types.html#v:Sense"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Types",
          "name": "SenseNegedge",
          "package": "verilog",
          "signature": "SenseNegedge LHS",
          "source": "src/Language-Verilog-Types.html#Sense",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Types",
          "module": "Language.Verilog.Types",
          "name": "SenseNegedge",
          "package": "verilog",
          "partial": "Sense Negedge",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Types.html#v:SenseNegedge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Types",
          "name": "SenseOr",
          "package": "verilog",
          "signature": "SenseOr Sense Sense",
          "source": "src/Language-Verilog-Types.html#Sense",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Types",
          "module": "Language.Verilog.Types",
          "name": "SenseOr",
          "package": "verilog",
          "partial": "Sense Or",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Types.html#v:SenseOr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Types",
          "name": "SensePosedge",
          "package": "verilog",
          "signature": "SensePosedge LHS",
          "source": "src/Language-Verilog-Types.html#Sense",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Types",
          "module": "Language.Verilog.Types",
          "name": "SensePosedge",
          "package": "verilog",
          "partial": "Sense Posedge",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Types.html#v:SensePosedge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Types",
          "name": "ShiftL",
          "package": "verilog",
          "signature": "ShiftL Expr Expr",
          "source": "src/Language-Verilog-Types.html#Expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Types",
          "module": "Language.Verilog.Types",
          "name": "ShiftL",
          "package": "verilog",
          "partial": "Shift",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Types.html#v:ShiftL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Types",
          "name": "ShiftR",
          "package": "verilog",
          "signature": "ShiftR Expr Expr",
          "source": "src/Language-Verilog-Types.html#Expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Types",
          "module": "Language.Verilog.Types",
          "name": "ShiftR",
          "package": "verilog",
          "partial": "Shift",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Types.html#v:ShiftR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Types",
          "name": "StmtCall",
          "package": "verilog",
          "signature": "StmtCall Call",
          "source": "src/Language-Verilog-Types.html#Stmt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Types",
          "module": "Language.Verilog.Types",
          "name": "StmtCall",
          "package": "verilog",
          "partial": "Stmt Call",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Types.html#v:StmtCall"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Types",
          "name": "String",
          "package": "verilog",
          "signature": "String String",
          "source": "src/Language-Verilog-Types.html#Expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Types",
          "module": "Language.Verilog.Types",
          "name": "String",
          "package": "verilog",
          "partial": "String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Types.html#v:String"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Types",
          "name": "Sub",
          "package": "verilog",
          "signature": "Sub Expr Expr",
          "source": "src/Language-Verilog-Types.html#Expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Types",
          "module": "Language.Verilog.Types",
          "name": "Sub",
          "package": "verilog",
          "partial": "Sub",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Types.html#v:Sub"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Verilog.Types",
          "name": "Wire",
          "package": "verilog",
          "signature": "Wire (Maybe Range) [(Identifier, Maybe Range)]",
          "source": "src/Language-Verilog-Types.html#ModuleItem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Verilog Types",
          "module": "Language.Verilog.Types",
          "name": "Wire",
          "normalized": "Wire(Maybe Range)[(Identifier,Maybe Range)]",
          "package": "verilog",
          "partial": "Wire",
          "signature": "Wire(Maybe Range)[(Identifier,Maybe Range)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog-Types.html#v:Wire"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA parser for the Verilog hardware description language.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.Verilog",
          "name": "Verilog",
          "package": "verilog",
          "source": "src/Language-Verilog.html",
          "type": "module"
        },
        "index": {
          "description": "parser for the Verilog hardware description language",
          "hierarchy": "Language Verilog",
          "module": "Language.Verilog",
          "name": "Verilog",
          "package": "verilog",
          "partial": "Verilog",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/verilog/docs/Language-Verilog.html#"
      }
    }
  ]
]