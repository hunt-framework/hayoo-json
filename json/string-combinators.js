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
        "word": "string-combinators"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.String.Combinators",
          "name": "Combinators",
          "package": "string-combinators",
          "source": "src/Data-String-Combinators.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data String Combinators",
          "module": "Data.String.Combinators",
          "name": "Combinators",
          "package": "string-combinators",
          "partial": "Combinators",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/string-combinators/docs/Data-String-Combinators.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePut two string-likes above eachother (separated by a \u003ccode\u003e\u003ca\u003enewline\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Data.String.Combinators",
          "name": "($$)",
          "package": "string-combinators",
          "signature": "s -\u003e s -\u003e s",
          "source": "src/Data-String-Combinators.html#%24%24",
          "type": "function"
        },
        "index": {
          "description": "Put two string-likes above eachother separated by newline",
          "hierarchy": "Data String Combinators",
          "module": "Data.String.Combinators",
          "name": "($$) $$",
          "normalized": "a-\u003ea-\u003ea",
          "package": "string-combinators",
          "signature": "s-\u003es-\u003es",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/string-combinators/docs/Data-String-Combinators.html#v:-36--36-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePut two string-likes besides eachother separated by a \u003ccode\u003e\u003ca\u003espace\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.String.Combinators",
          "name": "(\u003c+\u003e)",
          "package": "string-combinators",
          "signature": "s -\u003e s -\u003e s",
          "source": "src/Data-String-Combinators.html#%3C%2B%3E",
          "type": "function"
        },
        "index": {
          "description": "Put two string-likes besides eachother separated by space",
          "hierarchy": "Data String Combinators",
          "module": "Data.String.Combinators",
          "name": "(\u003c+\u003e) \u003c+\u003e",
          "normalized": "a-\u003ea-\u003ea",
          "package": "string-combinators",
          "signature": "s-\u003es-\u003es",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/string-combinators/docs/Data-String-Combinators.html#v:-60--43--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn infix synonym for \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.String.Combinators",
          "name": "(\u003c\u003e)",
          "package": "string-combinators",
          "signature": "m -\u003e m -\u003e m",
          "type": "function"
        },
        "index": {
          "description": "An infix synonym for mappend",
          "hierarchy": "Data String Combinators",
          "module": "Data.String.Combinators",
          "name": "(\u003c\u003e) \u003c\u003e",
          "normalized": "a-\u003ea-\u003ea",
          "package": "string-combinators",
          "signature": "m-\u003em-\u003em",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/string-combinators/docs/Data-String-Combinators.html#v:-60--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrap a string-like in \u003ccode\u003e\u003c...\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.String.Combinators",
          "name": "angleBrackets",
          "package": "string-combinators",
          "signature": "s -\u003e s",
          "source": "src/Data-String-Combinators.html#angleBrackets",
          "type": "function"
        },
        "index": {
          "description": "Wrap string-like in",
          "hierarchy": "Data String Combinators",
          "module": "Data.String.Combinators",
          "name": "angleBrackets",
          "normalized": "a-\u003ea",
          "package": "string-combinators",
          "partial": "Brackets",
          "signature": "s-\u003es",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/string-combinators/docs/Data-String-Combinators.html#v:angleBrackets"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ebetween b c s\u003c/code\u003e wraps the string-like \u003ccode\u003es\u003c/code\u003e between \u003ccode\u003eb\u003c/code\u003e and \u003ccode\u003ec\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.String.Combinators",
          "name": "between",
          "package": "string-combinators",
          "signature": "s -\u003e s -\u003e s -\u003e s",
          "source": "src/Data-String-Combinators.html#between",
          "type": "function"
        },
        "index": {
          "description": "between wraps the string-like between and",
          "hierarchy": "Data String Combinators",
          "module": "Data.String.Combinators",
          "name": "between",
          "normalized": "a-\u003ea-\u003ea-\u003ea",
          "package": "string-combinators",
          "signature": "s-\u003es-\u003es-\u003es",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/string-combinators/docs/Data-String-Combinators.html#v:between"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrap a string-like in \u003ccode\u003e{...}\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.String.Combinators",
          "name": "braces",
          "package": "string-combinators",
          "signature": "s -\u003e s",
          "source": "src/Data-String-Combinators.html#braces",
          "type": "function"
        },
        "index": {
          "description": "Wrap string-like in",
          "hierarchy": "Data String Combinators",
          "module": "Data.String.Combinators",
          "name": "braces",
          "normalized": "a-\u003ea",
          "package": "string-combinators",
          "signature": "s-\u003es",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/string-combinators/docs/Data-String-Combinators.html#v:braces"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrap a string-like in \u003ccode\u003e[...]\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.String.Combinators",
          "name": "brackets",
          "package": "string-combinators",
          "signature": "s -\u003e s",
          "source": "src/Data-String-Combinators.html#brackets",
          "type": "function"
        },
        "index": {
          "description": "Wrap string-like in",
          "hierarchy": "Data String Combinators",
          "module": "Data.String.Combinators",
          "name": "brackets",
          "normalized": "a-\u003ea",
          "package": "string-combinators",
          "signature": "s-\u003es",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/string-combinators/docs/Data-String-Combinators.html#v:brackets"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a character to a string-like.\n\u003c/p\u003e",
          "module": "Data.String.Combinators",
          "name": "char",
          "package": "string-combinators",
          "signature": "Char -\u003e s",
          "source": "src/Data-String-Combinators.html#char",
          "type": "function"
        },
        "index": {
          "description": "Convert character to string-like",
          "hierarchy": "Data String Combinators",
          "module": "Data.String.Combinators",
          "name": "char",
          "normalized": "Char-\u003ea",
          "package": "string-combinators",
          "signature": "Char-\u003es",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/string-combinators/docs/Data-String-Combinators.html#v:char"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e:\u003c/code\u003e character.\n\u003c/p\u003e",
          "module": "Data.String.Combinators",
          "name": "colon",
          "package": "string-combinators",
          "signature": "s",
          "source": "src/Data-String-Combinators.html#colon",
          "type": "function"
        },
        "index": {
          "description": "character",
          "hierarchy": "Data String Combinators",
          "module": "Data.String.Combinators",
          "name": "colon",
          "package": "string-combinators",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/string-combinators/docs/Data-String-Combinators.html#v:colon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA ',' character.\n\u003c/p\u003e",
          "module": "Data.String.Combinators",
          "name": "comma",
          "package": "string-combinators",
          "signature": "s",
          "source": "src/Data-String-Combinators.html#comma",
          "type": "function"
        },
        "index": {
          "description": "character",
          "hierarchy": "Data String Combinators",
          "module": "Data.String.Combinators",
          "name": "comma",
          "package": "string-combinators",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/string-combinators/docs/Data-String-Combinators.html#v:comma"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a \u003ccode\u003eDouble\u003c/code\u003e to a string-like.\n\u003c/p\u003e",
          "module": "Data.String.Combinators",
          "name": "double",
          "package": "string-combinators",
          "signature": "Double -\u003e s",
          "source": "src/Data-String-Combinators.html#double",
          "type": "function"
        },
        "index": {
          "description": "Convert Double to string-like",
          "hierarchy": "Data String Combinators",
          "module": "Data.String.Combinators",
          "name": "double",
          "normalized": "Double-\u003ea",
          "package": "string-combinators",
          "signature": "Double-\u003es",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/string-combinators/docs/Data-String-Combinators.html#v:double"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrap a string-like in \u003ccode\u003e\"...\"\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.String.Combinators",
          "name": "doubleQuotes",
          "package": "string-combinators",
          "signature": "s -\u003e s",
          "source": "src/Data-String-Combinators.html#doubleQuotes",
          "type": "function"
        },
        "index": {
          "description": "Wrap string-like in",
          "hierarchy": "Data String Combinators",
          "module": "Data.String.Combinators",
          "name": "doubleQuotes",
          "normalized": "a-\u003ea",
          "package": "string-combinators",
          "partial": "Quotes",
          "signature": "s-\u003es",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/string-combinators/docs/Data-String-Combinators.html#v:doubleQuotes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA '=' character.\n\u003c/p\u003e",
          "module": "Data.String.Combinators",
          "name": "equals",
          "package": "string-combinators",
          "signature": "s",
          "source": "src/Data-String-Combinators.html#equals",
          "type": "function"
        },
        "index": {
          "description": "character",
          "hierarchy": "Data String Combinators",
          "module": "Data.String.Combinators",
          "name": "equals",
          "package": "string-combinators",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/string-combinators/docs/Data-String-Combinators.html#v:equals"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a \u003ccode\u003eFloat\u003c/code\u003e to a string-like.\n\u003c/p\u003e",
          "module": "Data.String.Combinators",
          "name": "float",
          "package": "string-combinators",
          "signature": "Float -\u003e s",
          "source": "src/Data-String-Combinators.html#float",
          "type": "function"
        },
        "index": {
          "description": "Convert Float to string-like",
          "hierarchy": "Data String Combinators",
          "module": "Data.String.Combinators",
          "name": "float",
          "normalized": "Float-\u003ea",
          "package": "string-combinators",
          "signature": "Float-\u003es",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/string-combinators/docs/Data-String-Combinators.html#v:float"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a \u003ccode\u003eShow\u003c/code\u003eable value to a string-like.\n\u003c/p\u003e",
          "module": "Data.String.Combinators",
          "name": "fromShow",
          "package": "string-combinators",
          "signature": "α -\u003e s",
          "source": "src/Data-String-Combinators.html#fromShow",
          "type": "function"
        },
        "index": {
          "description": "Convert Show able value to string-like",
          "hierarchy": "Data String Combinators",
          "module": "Data.String.Combinators",
          "name": "fromShow",
          "normalized": "a-\u003eb",
          "package": "string-combinators",
          "partial": "Show",
          "signature": "α-\u003es",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/string-combinators/docs/Data-String-Combinators.html#v:fromShow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList version of \u003ccode\u003e\u003ca\u003e\u003c\u003e\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote that: \u003ccode\u003ehcat = \u003ccode\u003e\u003ca\u003eintercalate\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003e\u003c\u003e\u003c/a\u003e\u003c/code\u003e)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.String.Combinators",
          "name": "hcat",
          "package": "string-combinators",
          "signature": "[s] -\u003e s",
          "source": "src/Data-String-Combinators.html#hcat",
          "type": "function"
        },
        "index": {
          "description": "List version of Note that hcat intercalate",
          "hierarchy": "Data String Combinators",
          "module": "Data.String.Combinators",
          "name": "hcat",
          "normalized": "[a]-\u003ea",
          "package": "string-combinators",
          "signature": "[s]-\u003es",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/string-combinators/docs/Data-String-Combinators.html#v:hcat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert an \u003ccode\u003eInt\u003c/code\u003e to a string-like.\n\u003c/p\u003e",
          "module": "Data.String.Combinators",
          "name": "int",
          "package": "string-combinators",
          "signature": "Int -\u003e s",
          "source": "src/Data-String-Combinators.html#int",
          "type": "function"
        },
        "index": {
          "description": "Convert an Int to string-like",
          "hierarchy": "Data String Combinators",
          "module": "Data.String.Combinators",
          "name": "int",
          "normalized": "Int-\u003ea",
          "package": "string-combinators",
          "signature": "Int-\u003es",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/string-combinators/docs/Data-String-Combinators.html#v:int"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert an \u003ccode\u003eInteger\u003c/code\u003e to a string-like.\n\u003c/p\u003e",
          "module": "Data.String.Combinators",
          "name": "integer",
          "package": "string-combinators",
          "signature": "Integer -\u003e s",
          "source": "src/Data-String-Combinators.html#integer",
          "type": "function"
        },
        "index": {
          "description": "Convert an Integer to string-like",
          "hierarchy": "Data String Combinators",
          "module": "Data.String.Combinators",
          "name": "integer",
          "normalized": "Integer-\u003ea",
          "package": "string-combinators",
          "signature": "Integer-\u003es",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/string-combinators/docs/Data-String-Combinators.html#v:integer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombine the string-likes with a given function.\n\u003c/p\u003e\u003cpre\u003eintercalate f [s1, ... sn] = s1 `f` (s2 `f` (... (sn-1 `f` sn)))\u003c/pre\u003e",
          "module": "Data.String.Combinators",
          "name": "intercalate",
          "package": "string-combinators",
          "signature": "(s -\u003e s -\u003e s) -\u003e [s] -\u003e s",
          "source": "src/Data-String-Combinators.html#intercalate",
          "type": "function"
        },
        "index": {
          "description": "Combine the string-likes with given function intercalate s1 sn s1 s2 sn-1 sn",
          "hierarchy": "Data String Combinators",
          "module": "Data.String.Combinators",
          "name": "intercalate",
          "normalized": "(a-\u003ea-\u003ea)-\u003e[a]-\u003ea",
          "package": "string-combinators",
          "signature": "(s-\u003es-\u003es)-\u003e[s]-\u003es",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/string-combinators/docs/Data-String-Combinators.html#v:intercalate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA '\u003c' character.\n\u003c/p\u003e",
          "module": "Data.String.Combinators",
          "name": "labrack",
          "package": "string-combinators",
          "signature": "s",
          "source": "src/Data-String-Combinators.html#labrack",
          "type": "function"
        },
        "index": {
          "description": "character",
          "hierarchy": "Data String Combinators",
          "module": "Data.String.Combinators",
          "name": "labrack",
          "package": "string-combinators",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/string-combinators/docs/Data-String-Combinators.html#v:labrack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA '{' character.\n\u003c/p\u003e",
          "module": "Data.String.Combinators",
          "name": "lbrace",
          "package": "string-combinators",
          "signature": "s",
          "source": "src/Data-String-Combinators.html#lbrace",
          "type": "function"
        },
        "index": {
          "description": "character",
          "hierarchy": "Data String Combinators",
          "module": "Data.String.Combinators",
          "name": "lbrace",
          "package": "string-combinators",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/string-combinators/docs/Data-String-Combinators.html#v:lbrace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA '[' character.\n\u003c/p\u003e",
          "module": "Data.String.Combinators",
          "name": "lbrack",
          "package": "string-combinators",
          "signature": "s",
          "source": "src/Data-String-Combinators.html#lbrack",
          "type": "function"
        },
        "index": {
          "description": "character",
          "hierarchy": "Data String Combinators",
          "module": "Data.String.Combinators",
          "name": "lbrack",
          "package": "string-combinators",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/string-combinators/docs/Data-String-Combinators.html#v:lbrack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA '(' character.\n\u003c/p\u003e",
          "module": "Data.String.Combinators",
          "name": "lparen",
          "package": "string-combinators",
          "signature": "s",
          "source": "src/Data-String-Combinators.html#lparen",
          "type": "function"
        },
        "index": {
          "description": "character",
          "hierarchy": "Data String Combinators",
          "module": "Data.String.Combinators",
          "name": "lparen",
          "package": "string-combinators",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/string-combinators/docs/Data-String-Combinators.html#v:lparen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003emid m x y\u003c/code\u003e Puts \u003ccode\u003ex\u003c/code\u003e and \u003ccode\u003ey\u003c/code\u003e around \u003ccode\u003em\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote that: \u003ccode\u003emid m x y = \u003ccode\u003e\u003ca\u003ebetween\u003c/a\u003e\u003c/code\u003e x y m\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.String.Combinators",
          "name": "mid",
          "package": "string-combinators",
          "signature": "s -\u003e s -\u003e s -\u003e s",
          "source": "src/Data-String-Combinators.html#mid",
          "type": "function"
        },
        "index": {
          "description": "mid Puts and around Note that mid between",
          "hierarchy": "Data String Combinators",
          "module": "Data.String.Combinators",
          "name": "mid",
          "normalized": "a-\u003ea-\u003ea-\u003ea",
          "package": "string-combinators",
          "signature": "s-\u003es-\u003es-\u003es",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/string-combinators/docs/Data-String-Combinators.html#v:mid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA '\\n' character.\n\u003c/p\u003e",
          "module": "Data.String.Combinators",
          "name": "newline",
          "package": "string-combinators",
          "signature": "s",
          "source": "src/Data-String-Combinators.html#newline",
          "type": "function"
        },
        "index": {
          "description": "character",
          "hierarchy": "Data String Combinators",
          "module": "Data.String.Combinators",
          "name": "newline",
          "package": "string-combinators",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/string-combinators/docs/Data-String-Combinators.html#v:newline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrap a string-like in \u003ccode\u003e(...)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.String.Combinators",
          "name": "parens",
          "package": "string-combinators",
          "signature": "s -\u003e s",
          "source": "src/Data-String-Combinators.html#parens",
          "type": "function"
        },
        "index": {
          "description": "Wrap string-like in",
          "hierarchy": "Data String Combinators",
          "module": "Data.String.Combinators",
          "name": "parens",
          "normalized": "a-\u003ea",
          "package": "string-combinators",
          "signature": "s-\u003es",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/string-combinators/docs/Data-String-Combinators.html#v:parens"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003epunctuate p [s1, ... sn] = [s1 \u003ccode\u003e\u003ca\u003e\u003c\u003e\u003c/a\u003e\u003c/code\u003e p, s2 \u003ccode\u003e\u003ca\u003e\u003c\u003e\u003c/a\u003e\u003c/code\u003e p, ... sn-1 \u003ccode\u003e\u003ca\u003e\u003c\u003e\u003c/a\u003e\u003c/code\u003e p, sn]\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e(Idea and implementation taken from the \u003ccode\u003epretty\u003c/code\u003e package.)\n\u003c/p\u003e",
          "module": "Data.String.Combinators",
          "name": "punctuate",
          "package": "string-combinators",
          "signature": "s -\u003e [s] -\u003e [s]",
          "source": "src/Data-String-Combinators.html#punctuate",
          "type": "function"
        },
        "index": {
          "description": "punctuate s1 sn s1 s2 sn-1 sn Idea and implementation taken from the pretty package",
          "hierarchy": "Data String Combinators",
          "module": "Data.String.Combinators",
          "name": "punctuate",
          "normalized": "a-\u003e[a]-\u003e[a]",
          "package": "string-combinators",
          "signature": "s-\u003e[s]-\u003e[s]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/string-combinators/docs/Data-String-Combinators.html#v:punctuate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrap a string-like in \u003ccode\u003e'...'\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.String.Combinators",
          "name": "quotes",
          "package": "string-combinators",
          "signature": "s -\u003e s",
          "source": "src/Data-String-Combinators.html#quotes",
          "type": "function"
        },
        "index": {
          "description": "Wrap string-like in",
          "hierarchy": "Data String Combinators",
          "module": "Data.String.Combinators",
          "name": "quotes",
          "normalized": "a-\u003ea",
          "package": "string-combinators",
          "signature": "s-\u003es",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/string-combinators/docs/Data-String-Combinators.html#v:quotes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA '\u003e' character.\n\u003c/p\u003e",
          "module": "Data.String.Combinators",
          "name": "rabrack",
          "package": "string-combinators",
          "signature": "s",
          "source": "src/Data-String-Combinators.html#rabrack",
          "type": "function"
        },
        "index": {
          "description": "character",
          "hierarchy": "Data String Combinators",
          "module": "Data.String.Combinators",
          "name": "rabrack",
          "package": "string-combinators",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/string-combinators/docs/Data-String-Combinators.html#v:rabrack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a \u003ccode\u003eRational\u003c/code\u003e to a string-like.\n\u003c/p\u003e",
          "module": "Data.String.Combinators",
          "name": "rational",
          "package": "string-combinators",
          "signature": "Rational -\u003e s",
          "source": "src/Data-String-Combinators.html#rational",
          "type": "function"
        },
        "index": {
          "description": "Convert Rational to string-like",
          "hierarchy": "Data String Combinators",
          "module": "Data.String.Combinators",
          "name": "rational",
          "normalized": "Rational-\u003ea",
          "package": "string-combinators",
          "signature": "Rational-\u003es",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/string-combinators/docs/Data-String-Combinators.html#v:rational"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA '}' character.\n\u003c/p\u003e",
          "module": "Data.String.Combinators",
          "name": "rbrace",
          "package": "string-combinators",
          "signature": "s",
          "source": "src/Data-String-Combinators.html#rbrace",
          "type": "function"
        },
        "index": {
          "description": "character",
          "hierarchy": "Data String Combinators",
          "module": "Data.String.Combinators",
          "name": "rbrace",
          "package": "string-combinators",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/string-combinators/docs/Data-String-Combinators.html#v:rbrace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA ']' character.\n\u003c/p\u003e",
          "module": "Data.String.Combinators",
          "name": "rbrack",
          "package": "string-combinators",
          "signature": "s",
          "source": "src/Data-String-Combinators.html#rbrack",
          "type": "function"
        },
        "index": {
          "description": "character",
          "hierarchy": "Data String Combinators",
          "module": "Data.String.Combinators",
          "name": "rbrack",
          "package": "string-combinators",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/string-combinators/docs/Data-String-Combinators.html#v:rbrack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA ')' character.\n\u003c/p\u003e",
          "module": "Data.String.Combinators",
          "name": "rparen",
          "package": "string-combinators",
          "signature": "s",
          "source": "src/Data-String-Combinators.html#rparen",
          "type": "function"
        },
        "index": {
          "description": "character",
          "hierarchy": "Data String Combinators",
          "module": "Data.String.Combinators",
          "name": "rparen",
          "package": "string-combinators",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/string-combinators/docs/Data-String-Combinators.html#v:rparen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA ';' character.\n\u003c/p\u003e",
          "module": "Data.String.Combinators",
          "name": "semi",
          "package": "string-combinators",
          "signature": "s",
          "source": "src/Data-String-Combinators.html#semi",
          "type": "function"
        },
        "index": {
          "description": "character",
          "hierarchy": "Data String Combinators",
          "module": "Data.String.Combinators",
          "name": "semi",
          "package": "string-combinators",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/string-combinators/docs/Data-String-Combinators.html#v:semi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA ' ' character.\n\u003c/p\u003e",
          "module": "Data.String.Combinators",
          "name": "space",
          "package": "string-combinators",
          "signature": "s",
          "source": "src/Data-String-Combinators.html#space",
          "type": "function"
        },
        "index": {
          "description": "character",
          "hierarchy": "Data String Combinators",
          "module": "Data.String.Combinators",
          "name": "space",
          "package": "string-combinators",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/string-combinators/docs/Data-String-Combinators.html#v:space"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003eshowParen\u003c/code\u003e conditionally wraps a string-like in \u003ccode\u003e(...)\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eThis function is supposed to be used infix as in:\n\u003c/p\u003e\u003cpre\u003e(precedence \u003e= 10) `thenParens` (\"fun\" \u003c+\u003e \"arg\")\u003c/pre\u003e",
          "module": "Data.String.Combinators",
          "name": "thenParens",
          "package": "string-combinators",
          "signature": "Bool -\u003e s -\u003e s",
          "source": "src/Data-String-Combinators.html#thenParens",
          "type": "function"
        },
        "index": {
          "description": "Like showParen conditionally wraps string-like in This function is supposed to be used infix as in precedence thenParens fun arg",
          "hierarchy": "Data String Combinators",
          "module": "Data.String.Combinators",
          "name": "thenParens",
          "normalized": "Bool-\u003ea-\u003ea",
          "package": "string-combinators",
          "partial": "Parens",
          "signature": "Bool-\u003es-\u003es",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/string-combinators/docs/Data-String-Combinators.html#v:thenParens"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList version of \u003ccode\u003e\u003ca\u003e$$\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote that: \u003ccode\u003eunlines = foldr (\u003ccode\u003e\u003ca\u003e$$\u003c/a\u003e\u003c/code\u003e) mempty\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.String.Combinators",
          "name": "unlines",
          "package": "string-combinators",
          "signature": "[s] -\u003e s",
          "source": "src/Data-String-Combinators.html#unlines",
          "type": "function"
        },
        "index": {
          "description": "List version of Note that unlines foldr mempty",
          "hierarchy": "Data String Combinators",
          "module": "Data.String.Combinators",
          "name": "unlines",
          "normalized": "[a]-\u003ea",
          "package": "string-combinators",
          "signature": "[s]-\u003es",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/string-combinators/docs/Data-String-Combinators.html#v:unlines"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList version of \u003ccode\u003e\u003ca\u003e\u003c+\u003e\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote that: \u003ccode\u003eunwords = \u003ccode\u003e\u003ca\u003eintercalate\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003e\u003c+\u003e\u003c/a\u003e\u003c/code\u003e)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.String.Combinators",
          "name": "unwords",
          "package": "string-combinators",
          "signature": "[s] -\u003e s",
          "source": "src/Data-String-Combinators.html#unwords",
          "type": "function"
        },
        "index": {
          "description": "List version of Note that unwords intercalate",
          "hierarchy": "Data String Combinators",
          "module": "Data.String.Combinators",
          "name": "unwords",
          "normalized": "[a]-\u003ea",
          "package": "string-combinators",
          "signature": "[s]-\u003es",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/string-combinators/docs/Data-String-Combinators.html#v:unwords"
      }
    }
  ]
]