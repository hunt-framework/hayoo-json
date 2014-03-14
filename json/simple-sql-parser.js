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
        "word": "simple-sql-parser"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis is the module with the parser functions.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.SQL.SimpleSQL.Parser",
          "name": "Parser",
          "package": "simple-sql-parser",
          "source": "src/Language-SQL-SimpleSQL-Parser.html",
          "type": "module"
        },
        "index": {
          "description": "This is the module with the parser functions",
          "hierarchy": "Language SQL SimpleSQL Parser",
          "module": "Language.SQL.SimpleSQL.Parser",
          "name": "Parser",
          "package": "simple-sql-parser",
          "partial": "Parser",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/simple-sql-parser/docs/Language-SQL-SimpleSQL-Parser.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType to represent parse errors.\n\u003c/p\u003e",
          "module": "Language.SQL.SimpleSQL.Parser",
          "name": "ParseError",
          "package": "simple-sql-parser",
          "source": "src/Language-SQL-SimpleSQL-Parser.html#ParseError",
          "type": "data"
        },
        "index": {
          "description": "Type to represent parse errors",
          "hierarchy": "Language SQL SimpleSQL Parser",
          "module": "Language.SQL.SimpleSQL.Parser",
          "name": "ParseError",
          "package": "simple-sql-parser",
          "partial": "Parse Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/simple-sql-parser/docs/Language-SQL-SimpleSQL-Parser.html#t:ParseError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SimpleSQL.Parser",
          "name": "ParseError",
          "package": "simple-sql-parser",
          "signature": "ParseError",
          "source": "src/Language-SQL-SimpleSQL-Parser.html#ParseError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SimpleSQL Parser",
          "module": "Language.SQL.SimpleSQL.Parser",
          "name": "ParseError",
          "package": "simple-sql-parser",
          "partial": "Parse Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-sql-parser/docs/Language-SQL-SimpleSQL-Parser.html#v:ParseError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses a query expr, trailing semicolon optional.\n\u003c/p\u003e",
          "module": "Language.SQL.SimpleSQL.Parser",
          "name": "parseQueryExpr",
          "package": "simple-sql-parser",
          "signature": "FilePath-\u003e Maybe (Int, Int)-\u003e String-\u003e Either ParseError QueryExpr",
          "type": "function"
        },
        "index": {
          "description": "Parses query expr trailing semicolon optional",
          "hierarchy": "Language SQL SimpleSQL Parser",
          "module": "Language.SQL.SimpleSQL.Parser",
          "name": "parseQueryExpr",
          "normalized": "FilePath-\u003eMaybe(Int,Int)-\u003eString-\u003eEither ParseError QueryExpr",
          "package": "simple-sql-parser",
          "partial": "Query Expr",
          "signature": "FilePath-\u003eMaybe(Int,Int)-\u003eString-\u003eEither ParseError QueryExpr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-sql-parser/docs/Language-SQL-SimpleSQL-Parser.html#v:parseQueryExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses a list of query expressions, with semi colons between\n them. The final semicolon is optional.\n\u003c/p\u003e",
          "module": "Language.SQL.SimpleSQL.Parser",
          "name": "parseQueryExprs",
          "package": "simple-sql-parser",
          "signature": "FilePath-\u003e Maybe (Int, Int)-\u003e String-\u003e Either ParseError [QueryExpr]",
          "type": "function"
        },
        "index": {
          "description": "Parses list of query expressions with semi colons between them The final semicolon is optional",
          "hierarchy": "Language SQL SimpleSQL Parser",
          "module": "Language.SQL.SimpleSQL.Parser",
          "name": "parseQueryExprs",
          "normalized": "FilePath-\u003eMaybe(Int,Int)-\u003eString-\u003eEither ParseError[QueryExpr]",
          "package": "simple-sql-parser",
          "partial": "Query Exprs",
          "signature": "FilePath-\u003eMaybe(Int,Int)-\u003eString-\u003eEither ParseError[QueryExpr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-sql-parser/docs/Language-SQL-SimpleSQL-Parser.html#v:parseQueryExprs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses a value expression.\n\u003c/p\u003e",
          "module": "Language.SQL.SimpleSQL.Parser",
          "name": "parseValueExpr",
          "package": "simple-sql-parser",
          "signature": "FilePath-\u003e Maybe (Int, Int)-\u003e String-\u003e Either ParseError ValueExpr",
          "type": "function"
        },
        "index": {
          "description": "Parses value expression",
          "hierarchy": "Language SQL SimpleSQL Parser",
          "module": "Language.SQL.SimpleSQL.Parser",
          "name": "parseValueExpr",
          "normalized": "FilePath-\u003eMaybe(Int,Int)-\u003eString-\u003eEither ParseError ValueExpr",
          "package": "simple-sql-parser",
          "partial": "Value Expr",
          "signature": "FilePath-\u003eMaybe(Int,Int)-\u003eString-\u003eEither ParseError ValueExpr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-sql-parser/docs/Language-SQL-SimpleSQL-Parser.html#v:parseValueExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econtains the error message\n\u003c/p\u003e",
          "module": "Language.SQL.SimpleSQL.Parser",
          "name": "peErrorString",
          "package": "simple-sql-parser",
          "signature": "String",
          "source": "src/Language-SQL-SimpleSQL-Parser.html#ParseError",
          "type": "function"
        },
        "index": {
          "description": "contains the error message",
          "hierarchy": "Language SQL SimpleSQL Parser",
          "module": "Language.SQL.SimpleSQL.Parser",
          "name": "peErrorString",
          "package": "simple-sql-parser",
          "partial": "Error String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-sql-parser/docs/Language-SQL-SimpleSQL-Parser.html#v:peErrorString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efilename location for the error\n\u003c/p\u003e",
          "module": "Language.SQL.SimpleSQL.Parser",
          "name": "peFilename",
          "package": "simple-sql-parser",
          "signature": "FilePath",
          "source": "src/Language-SQL-SimpleSQL-Parser.html#ParseError",
          "type": "function"
        },
        "index": {
          "description": "filename location for the error",
          "hierarchy": "Language SQL SimpleSQL Parser",
          "module": "Language.SQL.SimpleSQL.Parser",
          "name": "peFilename",
          "package": "simple-sql-parser",
          "partial": "Filename",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-sql-parser/docs/Language-SQL-SimpleSQL-Parser.html#v:peFilename"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eformatted error with the position, error\n message and source context\n\u003c/p\u003e",
          "module": "Language.SQL.SimpleSQL.Parser",
          "name": "peFormattedError",
          "package": "simple-sql-parser",
          "signature": "String",
          "source": "src/Language-SQL-SimpleSQL-Parser.html#ParseError",
          "type": "function"
        },
        "index": {
          "description": "formatted error with the position error message and source context",
          "hierarchy": "Language SQL SimpleSQL Parser",
          "module": "Language.SQL.SimpleSQL.Parser",
          "name": "peFormattedError",
          "package": "simple-sql-parser",
          "partial": "Formatted Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-sql-parser/docs/Language-SQL-SimpleSQL-Parser.html#v:peFormattedError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eline number and column number location for the error\n\u003c/p\u003e",
          "module": "Language.SQL.SimpleSQL.Parser",
          "name": "pePosition",
          "package": "simple-sql-parser",
          "signature": "(Int, Int)",
          "source": "src/Language-SQL-SimpleSQL-Parser.html#ParseError",
          "type": "function"
        },
        "index": {
          "description": "line number and column number location for the error",
          "hierarchy": "Language SQL SimpleSQL Parser",
          "module": "Language.SQL.SimpleSQL.Parser",
          "name": "pePosition",
          "normalized": "(Int,Int)",
          "package": "simple-sql-parser",
          "partial": "Position",
          "signature": "(Int,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-sql-parser/docs/Language-SQL-SimpleSQL-Parser.html#v:pePosition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThese is the pretty printing functions, which produce SQL\n source from ASTs. The code attempts to format the output in a\n readable way.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.SQL.SimpleSQL.Pretty",
          "name": "Pretty",
          "package": "simple-sql-parser",
          "source": "src/Language-SQL-SimpleSQL-Pretty.html",
          "type": "module"
        },
        "index": {
          "description": "These is the pretty printing functions which produce SQL source from ASTs The code attempts to format the output in readable way",
          "hierarchy": "Language SQL SimpleSQL Pretty",
          "module": "Language.SQL.SimpleSQL.Pretty",
          "name": "Pretty",
          "package": "simple-sql-parser",
          "partial": "Pretty",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/simple-sql-parser/docs/Language-SQL-SimpleSQL-Pretty.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a query expr ast to concrete syntax.\n\u003c/p\u003e",
          "module": "Language.SQL.SimpleSQL.Pretty",
          "name": "prettyQueryExpr",
          "package": "simple-sql-parser",
          "signature": "QueryExpr -\u003e String",
          "source": "src/Language-SQL-SimpleSQL-Pretty.html#prettyQueryExpr",
          "type": "function"
        },
        "index": {
          "description": "Convert query expr ast to concrete syntax",
          "hierarchy": "Language SQL SimpleSQL Pretty",
          "module": "Language.SQL.SimpleSQL.Pretty",
          "name": "prettyQueryExpr",
          "normalized": "QueryExpr-\u003eString",
          "package": "simple-sql-parser",
          "partial": "Query Expr",
          "signature": "QueryExpr-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-sql-parser/docs/Language-SQL-SimpleSQL-Pretty.html#v:prettyQueryExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a list of query exprs to concrete syntax. A semi colon\n is inserted after each query expr.\n\u003c/p\u003e",
          "module": "Language.SQL.SimpleSQL.Pretty",
          "name": "prettyQueryExprs",
          "package": "simple-sql-parser",
          "signature": "[QueryExpr] -\u003e String",
          "source": "src/Language-SQL-SimpleSQL-Pretty.html#prettyQueryExprs",
          "type": "function"
        },
        "index": {
          "description": "Convert list of query exprs to concrete syntax semi colon is inserted after each query expr",
          "hierarchy": "Language SQL SimpleSQL Pretty",
          "module": "Language.SQL.SimpleSQL.Pretty",
          "name": "prettyQueryExprs",
          "normalized": "[QueryExpr]-\u003eString",
          "package": "simple-sql-parser",
          "partial": "Query Exprs",
          "signature": "[QueryExpr]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-sql-parser/docs/Language-SQL-SimpleSQL-Pretty.html#v:prettyQueryExprs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a value expr ast to concrete syntax.\n\u003c/p\u003e",
          "module": "Language.SQL.SimpleSQL.Pretty",
          "name": "prettyValueExpr",
          "package": "simple-sql-parser",
          "signature": "ValueExpr -\u003e String",
          "source": "src/Language-SQL-SimpleSQL-Pretty.html#prettyValueExpr",
          "type": "function"
        },
        "index": {
          "description": "Convert value expr ast to concrete syntax",
          "hierarchy": "Language SQL SimpleSQL Pretty",
          "module": "Language.SQL.SimpleSQL.Pretty",
          "name": "prettyValueExpr",
          "normalized": "ValueExpr-\u003eString",
          "package": "simple-sql-parser",
          "partial": "Value Expr",
          "signature": "ValueExpr-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-sql-parser/docs/Language-SQL-SimpleSQL-Pretty.html#v:prettyValueExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe AST for SQL queries.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "Syntax",
          "package": "simple-sql-parser",
          "source": "src/Language-SQL-SimpleSQL-Syntax.html",
          "type": "module"
        },
        "index": {
          "description": "The AST for SQL queries",
          "hierarchy": "Language SQL SimpleSQL Syntax",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "Syntax",
          "package": "simple-sql-parser",
          "partial": "Syntax",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/simple-sql-parser/docs/Language-SQL-SimpleSQL-Syntax.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents an alias for a table valued expression, used in with\n queries and in from alias, e.g. select a from t u, select a from t u(b),\n with a(c) as select 1, select * from a.\n\u003c/p\u003e",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "Alias",
          "package": "simple-sql-parser",
          "source": "src/Language-SQL-SimpleSQL-Syntax.html#Alias",
          "type": "data"
        },
        "index": {
          "description": "Represents an alias for table valued expression used in with queries and in from alias e.g select from select from with as select select from",
          "hierarchy": "Language SQL SimpleSQL Syntax",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "Alias",
          "package": "simple-sql-parser",
          "partial": "Alias",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/simple-sql-parser/docs/Language-SQL-SimpleSQL-Syntax.html#t:Alias"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eQuery expression set operators.\n\u003c/p\u003e",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "CombineOp",
          "package": "simple-sql-parser",
          "source": "src/Language-SQL-SimpleSQL-Syntax.html#CombineOp",
          "type": "data"
        },
        "index": {
          "description": "Query expression set operators",
          "hierarchy": "Language SQL SimpleSQL Syntax",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "CombineOp",
          "package": "simple-sql-parser",
          "partial": "Combine Op",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/simple-sql-parser/docs/Language-SQL-SimpleSQL-Syntax.html#t:CombineOp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCorresponding, an option for the set operators.\n\u003c/p\u003e",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "Corresponding",
          "package": "simple-sql-parser",
          "source": "src/Language-SQL-SimpleSQL-Syntax.html#Corresponding",
          "type": "data"
        },
        "index": {
          "description": "Corresponding an option for the set operators",
          "hierarchy": "Language SQL SimpleSQL Syntax",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "Corresponding",
          "package": "simple-sql-parser",
          "partial": "Corresponding",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/simple-sql-parser/docs/Language-SQL-SimpleSQL-Syntax.html#t:Corresponding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe direction for a column in order by.\n\u003c/p\u003e",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "Direction",
          "package": "simple-sql-parser",
          "source": "src/Language-SQL-SimpleSQL-Syntax.html#Direction",
          "type": "data"
        },
        "index": {
          "description": "The direction for column in order by",
          "hierarchy": "Language SQL SimpleSQL Syntax",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "Direction",
          "package": "simple-sql-parser",
          "partial": "Direction",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/simple-sql-parser/docs/Language-SQL-SimpleSQL-Syntax.html#t:Direction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents the frame clause of a window\n this can be [range | rows] frame_start\n or [range | rows] between frame_start and frame_end\n\u003c/p\u003e",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "Frame",
          "package": "simple-sql-parser",
          "source": "src/Language-SQL-SimpleSQL-Syntax.html#Frame",
          "type": "data"
        },
        "index": {
          "description": "Represents the frame clause of window this can be range rows frame start or range rows between frame start and frame end",
          "hierarchy": "Language SQL SimpleSQL Syntax",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "Frame",
          "package": "simple-sql-parser",
          "partial": "Frame",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/simple-sql-parser/docs/Language-SQL-SimpleSQL-Syntax.html#t:Frame"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003erepresents the start or end of a frame\n\u003c/p\u003e",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "FramePos",
          "package": "simple-sql-parser",
          "source": "src/Language-SQL-SimpleSQL-Syntax.html#FramePos",
          "type": "data"
        },
        "index": {
          "description": "represents the start or end of frame",
          "hierarchy": "Language SQL SimpleSQL Syntax",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "FramePos",
          "package": "simple-sql-parser",
          "partial": "Frame Pos",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/simple-sql-parser/docs/Language-SQL-SimpleSQL-Syntax.html#t:FramePos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents whether a window frame clause is over rows or ranges.\n\u003c/p\u003e",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "FrameRows",
          "package": "simple-sql-parser",
          "source": "src/Language-SQL-SimpleSQL-Syntax.html#FrameRows",
          "type": "data"
        },
        "index": {
          "description": "Represents whether window frame clause is over rows or ranges",
          "hierarchy": "Language SQL SimpleSQL Syntax",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "FrameRows",
          "package": "simple-sql-parser",
          "partial": "Frame Rows",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/simple-sql-parser/docs/Language-SQL-SimpleSQL-Syntax.html#t:FrameRows"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents an item in a group by clause.\n\u003c/p\u003e",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "GroupingExpr",
          "package": "simple-sql-parser",
          "source": "src/Language-SQL-SimpleSQL-Syntax.html#GroupingExpr",
          "type": "data"
        },
        "index": {
          "description": "Represents an item in group by clause",
          "hierarchy": "Language SQL SimpleSQL Syntax",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "GroupingExpr",
          "package": "simple-sql-parser",
          "partial": "Grouping Expr",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/simple-sql-parser/docs/Language-SQL-SimpleSQL-Syntax.html#t:GroupingExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsed for 'expr in (value expression list)', and 'expr in\n (subquery)' syntax.\n\u003c/p\u003e",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "InPredValue",
          "package": "simple-sql-parser",
          "source": "src/Language-SQL-SimpleSQL-Syntax.html#InPredValue",
          "type": "data"
        },
        "index": {
          "description": "Used for expr in value expression list and expr in subquery syntax",
          "hierarchy": "Language SQL SimpleSQL Syntax",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "InPredValue",
          "package": "simple-sql-parser",
          "partial": "In Pred Value",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/simple-sql-parser/docs/Language-SQL-SimpleSQL-Syntax.html#t:InPredValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe join condition.\n\u003c/p\u003e",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "JoinCondition",
          "package": "simple-sql-parser",
          "source": "src/Language-SQL-SimpleSQL-Syntax.html#JoinCondition",
          "type": "data"
        },
        "index": {
          "description": "The join condition",
          "hierarchy": "Language SQL SimpleSQL Syntax",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "JoinCondition",
          "package": "simple-sql-parser",
          "partial": "Join Condition",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/simple-sql-parser/docs/Language-SQL-SimpleSQL-Syntax.html#t:JoinCondition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of a join.\n\u003c/p\u003e",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "JoinType",
          "package": "simple-sql-parser",
          "source": "src/Language-SQL-SimpleSQL-Syntax.html#JoinType",
          "type": "data"
        },
        "index": {
          "description": "The type of join",
          "hierarchy": "Language SQL SimpleSQL Syntax",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "JoinType",
          "package": "simple-sql-parser",
          "partial": "Join Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/simple-sql-parser/docs/Language-SQL-SimpleSQL-Syntax.html#t:JoinType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents an identifier name, which can be quoted or unquoted.\n\u003c/p\u003e",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "Name",
          "package": "simple-sql-parser",
          "source": "src/Language-SQL-SimpleSQL-Syntax.html#Name",
          "type": "data"
        },
        "index": {
          "description": "Represents an identifier name which can be quoted or unquoted",
          "hierarchy": "Language SQL SimpleSQL Syntax",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "Name",
          "package": "simple-sql-parser",
          "partial": "Name",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/simple-sql-parser/docs/Language-SQL-SimpleSQL-Syntax.html#t:Name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents 'nulls first' or 'nulls last' in an order by clause.\n\u003c/p\u003e",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "NullsOrder",
          "package": "simple-sql-parser",
          "source": "src/Language-SQL-SimpleSQL-Syntax.html#NullsOrder",
          "type": "data"
        },
        "index": {
          "description": "Represents nulls first or nulls last in an order by clause",
          "hierarchy": "Language SQL SimpleSQL Syntax",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "NullsOrder",
          "package": "simple-sql-parser",
          "partial": "Nulls Order",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/simple-sql-parser/docs/Language-SQL-SimpleSQL-Syntax.html#t:NullsOrder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents a query expression, which can be:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e a regular select;\n\u003c/li\u003e\u003cli\u003e a set operator (union, except, intersect);\n\u003c/li\u003e\u003cli\u003e a common table expression (with);\n\u003c/li\u003e\u003cli\u003e a table value constructor (values (1,2),(3,4)); or\n\u003c/li\u003e\u003cli\u003e an explicit table (table t).\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "QueryExpr",
          "package": "simple-sql-parser",
          "source": "src/Language-SQL-SimpleSQL-Syntax.html#QueryExpr",
          "type": "data"
        },
        "index": {
          "description": "Represents query expression which can be regular select set operator union except intersect common table expression with table value constructor values or an explicit table table",
          "hierarchy": "Language SQL SimpleSQL Syntax",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "QueryExpr",
          "package": "simple-sql-parser",
          "partial": "Query Expr",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/simple-sql-parser/docs/Language-SQL-SimpleSQL-Syntax.html#t:QueryExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents the Distinct or All keywords, which can be used\n before a select list, in an aggregate/window function\n application, or in a query expression set operator.\n\u003c/p\u003e",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "SetQuantifier",
          "package": "simple-sql-parser",
          "source": "src/Language-SQL-SimpleSQL-Syntax.html#SetQuantifier",
          "type": "data"
        },
        "index": {
          "description": "Represents the Distinct or All keywords which can be used before select list in an aggregate window function application or in query expression set operator",
          "hierarchy": "Language SQL SimpleSQL Syntax",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "SetQuantifier",
          "package": "simple-sql-parser",
          "partial": "Set Quantifier",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/simple-sql-parser/docs/Language-SQL-SimpleSQL-Syntax.html#t:SetQuantifier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents one field in an order by list.\n\u003c/p\u003e",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "SortSpec",
          "package": "simple-sql-parser",
          "source": "src/Language-SQL-SimpleSQL-Syntax.html#SortSpec",
          "type": "data"
        },
        "index": {
          "description": "Represents one field in an order by list",
          "hierarchy": "Language SQL SimpleSQL Syntax",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "SortSpec",
          "package": "simple-sql-parser",
          "partial": "Sort Spec",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/simple-sql-parser/docs/Language-SQL-SimpleSQL-Syntax.html#t:SortSpec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA subquery in a value expression.\n\u003c/p\u003e",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "SubQueryExprType",
          "package": "simple-sql-parser",
          "source": "src/Language-SQL-SimpleSQL-Syntax.html#SubQueryExprType",
          "type": "data"
        },
        "index": {
          "description": "subquery in value expression",
          "hierarchy": "Language SQL SimpleSQL Syntax",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "SubQueryExprType",
          "package": "simple-sql-parser",
          "partial": "Sub Query Expr Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/simple-sql-parser/docs/Language-SQL-SimpleSQL-Syntax.html#t:SubQueryExprType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents a entry in the csv of tables in the from clause.\n\u003c/p\u003e",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "TableRef",
          "package": "simple-sql-parser",
          "source": "src/Language-SQL-SimpleSQL-Syntax.html#TableRef",
          "type": "data"
        },
        "index": {
          "description": "Represents entry in the csv of tables in the from clause",
          "hierarchy": "Language SQL SimpleSQL Syntax",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "TableRef",
          "package": "simple-sql-parser",
          "partial": "Table Ref",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/simple-sql-parser/docs/Language-SQL-SimpleSQL-Syntax.html#t:TableRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents a type name, used in casts.\n\u003c/p\u003e",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "TypeName",
          "package": "simple-sql-parser",
          "source": "src/Language-SQL-SimpleSQL-Syntax.html#TypeName",
          "type": "data"
        },
        "index": {
          "description": "Represents type name used in casts",
          "hierarchy": "Language SQL SimpleSQL Syntax",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "TypeName",
          "package": "simple-sql-parser",
          "partial": "Type Name",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/simple-sql-parser/docs/Language-SQL-SimpleSQL-Syntax.html#t:TypeName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents a value expression. This is used for the expressions\n in select lists. It is also used for expressions in where, group\n by, having, order by and so on.\n\u003c/p\u003e",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "ValueExpr",
          "package": "simple-sql-parser",
          "source": "src/Language-SQL-SimpleSQL-Syntax.html#ValueExpr",
          "type": "data"
        },
        "index": {
          "description": "Represents value expression This is used for the expressions in select lists It is also used for expressions in where group by having order by and so on",
          "hierarchy": "Language SQL SimpleSQL Syntax",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "ValueExpr",
          "package": "simple-sql-parser",
          "partial": "Value Expr",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/simple-sql-parser/docs/Language-SQL-SimpleSQL-Syntax.html#t:ValueExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eaggregate application, which adds distinct or all, and\n order by, to regular function application\n\u003c/p\u003e",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "AggregateApp",
          "package": "simple-sql-parser",
          "signature": "AggregateApp",
          "source": "src/Language-SQL-SimpleSQL-Syntax.html#ValueExpr",
          "type": "function"
        },
        "index": {
          "description": "aggregate application which adds distinct or all and order by to regular function application",
          "hierarchy": "Language SQL SimpleSQL Syntax",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "AggregateApp",
          "package": "simple-sql-parser",
          "partial": "Aggregate App",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-sql-parser/docs/Language-SQL-SimpleSQL-Syntax.html#v:AggregateApp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "Alias",
          "package": "simple-sql-parser",
          "signature": "Alias Name (Maybe [Name])",
          "source": "src/Language-SQL-SimpleSQL-Syntax.html#Alias",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SimpleSQL Syntax",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "Alias",
          "normalized": "Alias Name(Maybe[Name])",
          "package": "simple-sql-parser",
          "partial": "Alias",
          "signature": "Alias Name(Maybe[Name])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-sql-parser/docs/Language-SQL-SimpleSQL-Syntax.html#v:Alias"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "All",
          "package": "simple-sql-parser",
          "signature": "All",
          "source": "src/Language-SQL-SimpleSQL-Syntax.html#SetQuantifier",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SimpleSQL Syntax",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "All",
          "package": "simple-sql-parser",
          "partial": "All",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-sql-parser/docs/Language-SQL-SimpleSQL-Syntax.html#v:All"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efunction application (anything that looks like c style\n function application syntactically)\n\u003c/p\u003e",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "App",
          "package": "simple-sql-parser",
          "signature": "App Name [ValueExpr]",
          "source": "src/Language-SQL-SimpleSQL-Syntax.html#ValueExpr",
          "type": "function"
        },
        "index": {
          "description": "function application anything that looks like style function application syntactically",
          "hierarchy": "Language SQL SimpleSQL Syntax",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "App",
          "normalized": "App Name[ValueExpr]",
          "package": "simple-sql-parser",
          "partial": "App",
          "signature": "App Name[ValueExpr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-sql-parser/docs/Language-SQL-SimpleSQL-Syntax.html#v:App"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "Asc",
          "package": "simple-sql-parser",
          "signature": "Asc",
          "source": "src/Language-SQL-SimpleSQL-Syntax.html#Direction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SimpleSQL Syntax",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "Asc",
          "package": "simple-sql-parser",
          "partial": "Asc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-sql-parser/docs/Language-SQL-SimpleSQL-Syntax.html#v:Asc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInfix binary operators. This is used for symbol operators\n (a + b), keyword operators (a and b) and multiple keyword\n operators (a is similar to b)\n\u003c/p\u003e",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "BinOp",
          "package": "simple-sql-parser",
          "signature": "BinOp ValueExpr Name ValueExpr",
          "source": "src/Language-SQL-SimpleSQL-Syntax.html#ValueExpr",
          "type": "function"
        },
        "index": {
          "description": "Infix binary operators This is used for symbol operators keyword operators and and multiple keyword operators is similar to",
          "hierarchy": "Language SQL SimpleSQL Syntax",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "BinOp",
          "package": "simple-sql-parser",
          "partial": "Bin Op",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-sql-parser/docs/Language-SQL-SimpleSQL-Syntax.html#v:BinOp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecase expression. both flavours supported\n\u003c/p\u003e",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "Case",
          "package": "simple-sql-parser",
          "signature": "Case",
          "source": "src/Language-SQL-SimpleSQL-Syntax.html#ValueExpr",
          "type": "function"
        },
        "index": {
          "description": "case expression both flavours supported",
          "hierarchy": "Language SQL SimpleSQL Syntax",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "Case",
          "package": "simple-sql-parser",
          "partial": "Case",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-sql-parser/docs/Language-SQL-SimpleSQL-Syntax.html#v:Case"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecast(a as typename)\n\u003c/p\u003e",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "Cast",
          "package": "simple-sql-parser",
          "signature": "Cast ValueExpr TypeName",
          "source": "src/Language-SQL-SimpleSQL-Syntax.html#ValueExpr",
          "type": "function"
        },
        "index": {
          "description": "cast as typename",
          "hierarchy": "Language SQL SimpleSQL Syntax",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "Cast",
          "package": "simple-sql-parser",
          "partial": "Cast",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-sql-parser/docs/Language-SQL-SimpleSQL-Syntax.html#v:Cast"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "CombineQueryExpr",
          "package": "simple-sql-parser",
          "signature": "CombineQueryExpr",
          "source": "src/Language-SQL-SimpleSQL-Syntax.html#QueryExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SimpleSQL Syntax",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "CombineQueryExpr",
          "package": "simple-sql-parser",
          "partial": "Combine Query Expr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-sql-parser/docs/Language-SQL-SimpleSQL-Syntax.html#v:CombineQueryExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "Corresponding",
          "package": "simple-sql-parser",
          "signature": "Corresponding",
          "source": "src/Language-SQL-SimpleSQL-Syntax.html#Corresponding",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SimpleSQL Syntax",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "Corresponding",
          "package": "simple-sql-parser",
          "partial": "Corresponding",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-sql-parser/docs/Language-SQL-SimpleSQL-Syntax.html#v:Corresponding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "Cube",
          "package": "simple-sql-parser",
          "signature": "Cube [GroupingExpr]",
          "source": "src/Language-SQL-SimpleSQL-Syntax.html#GroupingExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SimpleSQL Syntax",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "Cube",
          "normalized": "Cube[GroupingExpr]",
          "package": "simple-sql-parser",
          "partial": "Cube",
          "signature": "Cube[GroupingExpr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-sql-parser/docs/Language-SQL-SimpleSQL-Syntax.html#v:Cube"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "Current",
          "package": "simple-sql-parser",
          "signature": "Current",
          "source": "src/Language-SQL-SimpleSQL-Syntax.html#FramePos",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SimpleSQL Syntax",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "Current",
          "package": "simple-sql-parser",
          "partial": "Current",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-sql-parser/docs/Language-SQL-SimpleSQL-Syntax.html#v:Current"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "Desc",
          "package": "simple-sql-parser",
          "signature": "Desc",
          "source": "src/Language-SQL-SimpleSQL-Syntax.html#Direction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SimpleSQL Syntax",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "Desc",
          "package": "simple-sql-parser",
          "partial": "Desc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-sql-parser/docs/Language-SQL-SimpleSQL-Syntax.html#v:Desc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "Distinct",
          "package": "simple-sql-parser",
          "signature": "Distinct",
          "source": "src/Language-SQL-SimpleSQL-Syntax.html#SetQuantifier",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SimpleSQL Syntax",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "Distinct",
          "package": "simple-sql-parser",
          "partial": "Distinct",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-sql-parser/docs/Language-SQL-SimpleSQL-Syntax.html#v:Distinct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "Except",
          "package": "simple-sql-parser",
          "signature": "Except",
          "source": "src/Language-SQL-SimpleSQL-Syntax.html#CombineOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SimpleSQL Syntax",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "Except",
          "package": "simple-sql-parser",
          "partial": "Except",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-sql-parser/docs/Language-SQL-SimpleSQL-Syntax.html#v:Except"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "Following",
          "package": "simple-sql-parser",
          "signature": "Following ValueExpr",
          "source": "src/Language-SQL-SimpleSQL-Syntax.html#FramePos",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SimpleSQL Syntax",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "Following",
          "package": "simple-sql-parser",
          "partial": "Following",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-sql-parser/docs/Language-SQL-SimpleSQL-Syntax.html#v:Following"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "FrameBetween",
          "package": "simple-sql-parser",
          "signature": "FrameBetween FrameRows FramePos FramePos",
          "source": "src/Language-SQL-SimpleSQL-Syntax.html#Frame",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SimpleSQL Syntax",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "FrameBetween",
          "package": "simple-sql-parser",
          "partial": "Frame Between",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-sql-parser/docs/Language-SQL-SimpleSQL-Syntax.html#v:FrameBetween"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "FrameFrom",
          "package": "simple-sql-parser",
          "signature": "FrameFrom FrameRows FramePos",
          "source": "src/Language-SQL-SimpleSQL-Syntax.html#Frame",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SimpleSQL Syntax",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "FrameFrom",
          "package": "simple-sql-parser",
          "partial": "Frame From",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-sql-parser/docs/Language-SQL-SimpleSQL-Syntax.html#v:FrameFrom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "FrameRange",
          "package": "simple-sql-parser",
          "signature": "FrameRange",
          "source": "src/Language-SQL-SimpleSQL-Syntax.html#FrameRows",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SimpleSQL Syntax",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "FrameRange",
          "package": "simple-sql-parser",
          "partial": "Frame Range",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-sql-parser/docs/Language-SQL-SimpleSQL-Syntax.html#v:FrameRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "FrameRows",
          "package": "simple-sql-parser",
          "signature": "FrameRows",
          "source": "src/Language-SQL-SimpleSQL-Syntax.html#FrameRows",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SimpleSQL Syntax",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "FrameRows",
          "package": "simple-sql-parser",
          "partial": "Frame Rows",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-sql-parser/docs/Language-SQL-SimpleSQL-Syntax.html#v:FrameRows"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "GroupingParens",
          "package": "simple-sql-parser",
          "signature": "GroupingParens [GroupingExpr]",
          "source": "src/Language-SQL-SimpleSQL-Syntax.html#GroupingExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SimpleSQL Syntax",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "GroupingParens",
          "normalized": "GroupingParens[GroupingExpr]",
          "package": "simple-sql-parser",
          "partial": "Grouping Parens",
          "signature": "GroupingParens[GroupingExpr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-sql-parser/docs/Language-SQL-SimpleSQL-Syntax.html#v:GroupingParens"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "GroupingSets",
          "package": "simple-sql-parser",
          "signature": "GroupingSets [GroupingExpr]",
          "source": "src/Language-SQL-SimpleSQL-Syntax.html#GroupingExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SimpleSQL Syntax",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "GroupingSets",
          "normalized": "GroupingSets[GroupingExpr]",
          "package": "simple-sql-parser",
          "partial": "Grouping Sets",
          "signature": "GroupingSets[GroupingExpr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-sql-parser/docs/Language-SQL-SimpleSQL-Syntax.html#v:GroupingSets"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eidentifier without dots\n\u003c/p\u003e",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "Iden",
          "package": "simple-sql-parser",
          "signature": "Iden Name",
          "source": "src/Language-SQL-SimpleSQL-Syntax.html#ValueExpr",
          "type": "function"
        },
        "index": {
          "description": "identifier without dots",
          "hierarchy": "Language SQL SimpleSQL Syntax",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "Iden",
          "package": "simple-sql-parser",
          "partial": "Iden",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-sql-parser/docs/Language-SQL-SimpleSQL-Syntax.html#v:Iden"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ein list literal and in subquery, if the bool is false it\n means not in was used ('a not in (1,2)')\n\u003c/p\u003e",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "In",
          "package": "simple-sql-parser",
          "signature": "In Bool ValueExpr InPredValue",
          "source": "src/Language-SQL-SimpleSQL-Syntax.html#ValueExpr",
          "type": "function"
        },
        "index": {
          "description": "in list literal and in subquery if the bool is false it means not in was used not in",
          "hierarchy": "Language SQL SimpleSQL Syntax",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "In",
          "package": "simple-sql-parser",
          "partial": "In",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-sql-parser/docs/Language-SQL-SimpleSQL-Syntax.html#v:In"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "InList",
          "package": "simple-sql-parser",
          "signature": "InList [ValueExpr]",
          "source": "src/Language-SQL-SimpleSQL-Syntax.html#InPredValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SimpleSQL Syntax",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "InList",
          "normalized": "InList[ValueExpr]",
          "package": "simple-sql-parser",
          "partial": "In List",
          "signature": "InList[ValueExpr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-sql-parser/docs/Language-SQL-SimpleSQL-Syntax.html#v:InList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "InQueryExpr",
          "package": "simple-sql-parser",
          "signature": "InQueryExpr QueryExpr",
          "source": "src/Language-SQL-SimpleSQL-Syntax.html#InPredValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SimpleSQL Syntax",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "InQueryExpr",
          "package": "simple-sql-parser",
          "partial": "In Query Expr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-sql-parser/docs/Language-SQL-SimpleSQL-Syntax.html#v:InQueryExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "Intersect",
          "package": "simple-sql-parser",
          "signature": "Intersect",
          "source": "src/Language-SQL-SimpleSQL-Syntax.html#CombineOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SimpleSQL Syntax",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "Intersect",
          "package": "simple-sql-parser",
          "partial": "Intersect",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-sql-parser/docs/Language-SQL-SimpleSQL-Syntax.html#v:Intersect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etext of interval literal, units of interval precision,\n e.g. interval 3 days (3)\n\u003c/p\u003e",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "IntervalLit",
          "package": "simple-sql-parser",
          "signature": "IntervalLit",
          "source": "src/Language-SQL-SimpleSQL-Syntax.html#ValueExpr",
          "type": "function"
        },
        "index": {
          "description": "text of interval literal units of interval precision e.g interval days",
          "hierarchy": "Language SQL SimpleSQL Syntax",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "IntervalLit",
          "package": "simple-sql-parser",
          "partial": "Interval Lit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-sql-parser/docs/Language-SQL-SimpleSQL-Syntax.html#v:IntervalLit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "JCross",
          "package": "simple-sql-parser",
          "signature": "JCross",
          "source": "src/Language-SQL-SimpleSQL-Syntax.html#JoinType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SimpleSQL Syntax",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "JCross",
          "package": "simple-sql-parser",
          "partial": "JCross",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-sql-parser/docs/Language-SQL-SimpleSQL-Syntax.html#v:JCross"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "JFull",
          "package": "simple-sql-parser",
          "signature": "JFull",
          "source": "src/Language-SQL-SimpleSQL-Syntax.html#JoinType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SimpleSQL Syntax",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "JFull",
          "package": "simple-sql-parser",
          "partial": "JFull",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-sql-parser/docs/Language-SQL-SimpleSQL-Syntax.html#v:JFull"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "JInner",
          "package": "simple-sql-parser",
          "signature": "JInner",
          "source": "src/Language-SQL-SimpleSQL-Syntax.html#JoinType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SimpleSQL Syntax",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "JInner",
          "package": "simple-sql-parser",
          "partial": "JInner",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-sql-parser/docs/Language-SQL-SimpleSQL-Syntax.html#v:JInner"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "JLeft",
          "package": "simple-sql-parser",
          "signature": "JLeft",
          "source": "src/Language-SQL-SimpleSQL-Syntax.html#JoinType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SimpleSQL Syntax",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "JLeft",
          "package": "simple-sql-parser",
          "partial": "JLeft",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-sql-parser/docs/Language-SQL-SimpleSQL-Syntax.html#v:JLeft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "JRight",
          "package": "simple-sql-parser",
          "signature": "JRight",
          "source": "src/Language-SQL-SimpleSQL-Syntax.html#JoinType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SimpleSQL Syntax",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "JRight",
          "package": "simple-sql-parser",
          "partial": "JRight",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-sql-parser/docs/Language-SQL-SimpleSQL-Syntax.html#v:JRight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003enatural join was used\n\u003c/p\u003e",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "JoinNatural",
          "package": "simple-sql-parser",
          "signature": "JoinNatural",
          "source": "src/Language-SQL-SimpleSQL-Syntax.html#JoinCondition",
          "type": "function"
        },
        "index": {
          "description": "natural join was used",
          "hierarchy": "Language SQL SimpleSQL Syntax",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "JoinNatural",
          "package": "simple-sql-parser",
          "partial": "Join Natural",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-sql-parser/docs/Language-SQL-SimpleSQL-Syntax.html#v:JoinNatural"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eon expr\n\u003c/p\u003e",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "JoinOn",
          "package": "simple-sql-parser",
          "signature": "JoinOn ValueExpr",
          "source": "src/Language-SQL-SimpleSQL-Syntax.html#JoinCondition",
          "type": "function"
        },
        "index": {
          "description": "on expr",
          "hierarchy": "Language SQL SimpleSQL Syntax",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "JoinOn",
          "package": "simple-sql-parser",
          "partial": "Join On",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-sql-parser/docs/Language-SQL-SimpleSQL-Syntax.html#v:JoinOn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eusing (column list)\n\u003c/p\u003e",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "JoinUsing",
          "package": "simple-sql-parser",
          "signature": "JoinUsing [Name]",
          "source": "src/Language-SQL-SimpleSQL-Syntax.html#JoinCondition",
          "type": "function"
        },
        "index": {
          "description": "using column list",
          "hierarchy": "Language SQL SimpleSQL Syntax",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "JoinUsing",
          "normalized": "JoinUsing[Name]",
          "package": "simple-sql-parser",
          "partial": "Join Using",
          "signature": "JoinUsing[Name]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-sql-parser/docs/Language-SQL-SimpleSQL-Syntax.html#v:JoinUsing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "Name",
          "package": "simple-sql-parser",
          "signature": "Name String",
          "source": "src/Language-SQL-SimpleSQL-Syntax.html#Name",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SimpleSQL Syntax",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "Name",
          "package": "simple-sql-parser",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-sql-parser/docs/Language-SQL-SimpleSQL-Syntax.html#v:Name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "NullsFirst",
          "package": "simple-sql-parser",
          "signature": "NullsFirst",
          "source": "src/Language-SQL-SimpleSQL-Syntax.html#NullsOrder",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SimpleSQL Syntax",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "NullsFirst",
          "package": "simple-sql-parser",
          "partial": "Nulls First",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-sql-parser/docs/Language-SQL-SimpleSQL-Syntax.html#v:NullsFirst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "NullsLast",
          "package": "simple-sql-parser",
          "signature": "NullsLast",
          "source": "src/Language-SQL-SimpleSQL-Syntax.html#NullsOrder",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SimpleSQL Syntax",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "NullsLast",
          "package": "simple-sql-parser",
          "partial": "Nulls Last",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-sql-parser/docs/Language-SQL-SimpleSQL-Syntax.html#v:NullsLast"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "NullsOrderDefault",
          "package": "simple-sql-parser",
          "signature": "NullsOrderDefault",
          "source": "src/Language-SQL-SimpleSQL-Syntax.html#NullsOrder",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SimpleSQL Syntax",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "NullsOrderDefault",
          "package": "simple-sql-parser",
          "partial": "Nulls Order Default",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-sql-parser/docs/Language-SQL-SimpleSQL-Syntax.html#v:NullsOrderDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea numeric literal optional decimal point, e+-\n integral exponent, e.g\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 10\n\u003c/li\u003e\u003cli\u003e 10.\n\u003c/li\u003e\u003cli\u003e .1\n\u003c/li\u003e\u003cli\u003e 10.1\n\u003c/li\u003e\u003cli\u003e 1e5\n\u003c/li\u003e\u003cli\u003e 12.34e-6\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "NumLit",
          "package": "simple-sql-parser",
          "signature": "NumLit String",
          "source": "src/Language-SQL-SimpleSQL-Syntax.html#ValueExpr",
          "type": "function"
        },
        "index": {
          "description": "numeric literal optional decimal point integral exponent e.g e5 e-6",
          "hierarchy": "Language SQL SimpleSQL Syntax",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "NumLit",
          "package": "simple-sql-parser",
          "partial": "Num Lit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-sql-parser/docs/Language-SQL-SimpleSQL-Syntax.html#v:NumLit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents a ? in a parameterized query\n\u003c/p\u003e",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "Parameter",
          "package": "simple-sql-parser",
          "signature": "Parameter",
          "source": "src/Language-SQL-SimpleSQL-Syntax.html#ValueExpr",
          "type": "function"
        },
        "index": {
          "description": "Represents in parameterized query",
          "hierarchy": "Language SQL SimpleSQL Syntax",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "Parameter",
          "package": "simple-sql-parser",
          "partial": "Parameter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-sql-parser/docs/Language-SQL-SimpleSQL-Syntax.html#v:Parameter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "Parens",
          "package": "simple-sql-parser",
          "signature": "Parens ValueExpr",
          "source": "src/Language-SQL-SimpleSQL-Syntax.html#ValueExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SimpleSQL Syntax",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "Parens",
          "package": "simple-sql-parser",
          "partial": "Parens",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-sql-parser/docs/Language-SQL-SimpleSQL-Syntax.html#v:Parens"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePostfix unary operators. This is used for symbol\n operators, keyword operators and multiple keyword operators.\n\u003c/p\u003e",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "PostfixOp",
          "package": "simple-sql-parser",
          "signature": "PostfixOp Name ValueExpr",
          "source": "src/Language-SQL-SimpleSQL-Syntax.html#ValueExpr",
          "type": "function"
        },
        "index": {
          "description": "Postfix unary operators This is used for symbol operators keyword operators and multiple keyword operators",
          "hierarchy": "Language SQL SimpleSQL Syntax",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "PostfixOp",
          "package": "simple-sql-parser",
          "partial": "Postfix Op",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-sql-parser/docs/Language-SQL-SimpleSQL-Syntax.html#v:PostfixOp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "PrecScaleTypeName",
          "package": "simple-sql-parser",
          "signature": "PrecScaleTypeName String Int Int",
          "source": "src/Language-SQL-SimpleSQL-Syntax.html#TypeName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SimpleSQL Syntax",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "PrecScaleTypeName",
          "package": "simple-sql-parser",
          "partial": "Prec Scale Type Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-sql-parser/docs/Language-SQL-SimpleSQL-Syntax.html#v:PrecScaleTypeName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "PrecTypeName",
          "package": "simple-sql-parser",
          "signature": "PrecTypeName String Int",
          "source": "src/Language-SQL-SimpleSQL-Syntax.html#TypeName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SimpleSQL Syntax",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "PrecTypeName",
          "package": "simple-sql-parser",
          "partial": "Prec Type Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-sql-parser/docs/Language-SQL-SimpleSQL-Syntax.html#v:PrecTypeName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "Preceding",
          "package": "simple-sql-parser",
          "signature": "Preceding ValueExpr",
          "source": "src/Language-SQL-SimpleSQL-Syntax.html#FramePos",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SimpleSQL Syntax",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "Preceding",
          "package": "simple-sql-parser",
          "partial": "Preceding",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-sql-parser/docs/Language-SQL-SimpleSQL-Syntax.html#v:Preceding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrefix unary operators. This is used for symbol\n operators, keyword operators and multiple keyword operators.\n\u003c/p\u003e",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "PrefixOp",
          "package": "simple-sql-parser",
          "signature": "PrefixOp Name ValueExpr",
          "source": "src/Language-SQL-SimpleSQL-Syntax.html#ValueExpr",
          "type": "function"
        },
        "index": {
          "description": "Prefix unary operators This is used for symbol operators keyword operators and multiple keyword operators",
          "hierarchy": "Language SQL SimpleSQL Syntax",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "PrefixOp",
          "package": "simple-sql-parser",
          "partial": "Prefix Op",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-sql-parser/docs/Language-SQL-SimpleSQL-Syntax.html#v:PrefixOp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "QName",
          "package": "simple-sql-parser",
          "signature": "QName String",
          "source": "src/Language-SQL-SimpleSQL-Syntax.html#Name",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SimpleSQL Syntax",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "QName",
          "package": "simple-sql-parser",
          "partial": "QName",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-sql-parser/docs/Language-SQL-SimpleSQL-Syntax.html#v:QName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "Respectively",
          "package": "simple-sql-parser",
          "signature": "Respectively",
          "source": "src/Language-SQL-SimpleSQL-Syntax.html#Corresponding",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SimpleSQL Syntax",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "Respectively",
          "package": "simple-sql-parser",
          "partial": "Respectively",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-sql-parser/docs/Language-SQL-SimpleSQL-Syntax.html#v:Respectively"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "Rollup",
          "package": "simple-sql-parser",
          "signature": "Rollup [GroupingExpr]",
          "source": "src/Language-SQL-SimpleSQL-Syntax.html#GroupingExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SimpleSQL Syntax",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "Rollup",
          "normalized": "Rollup[GroupingExpr]",
          "package": "simple-sql-parser",
          "partial": "Rollup",
          "signature": "Rollup[GroupingExpr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-sql-parser/docs/Language-SQL-SimpleSQL-Syntax.html#v:Rollup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "Select",
          "package": "simple-sql-parser",
          "signature": "Select",
          "source": "src/Language-SQL-SimpleSQL-Syntax.html#QueryExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SimpleSQL Syntax",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "Select",
          "package": "simple-sql-parser",
          "partial": "Select",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-sql-parser/docs/Language-SQL-SimpleSQL-Syntax.html#v:Select"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "SimpleGroup",
          "package": "simple-sql-parser",
          "signature": "SimpleGroup ValueExpr",
          "source": "src/Language-SQL-SimpleSQL-Syntax.html#GroupingExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SimpleSQL Syntax",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "SimpleGroup",
          "package": "simple-sql-parser",
          "partial": "Simple Group",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-sql-parser/docs/Language-SQL-SimpleSQL-Syntax.html#v:SimpleGroup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "SortSpec",
          "package": "simple-sql-parser",
          "signature": "SortSpec ValueExpr Direction NullsOrder",
          "source": "src/Language-SQL-SimpleSQL-Syntax.html#SortSpec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SimpleSQL Syntax",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "SortSpec",
          "package": "simple-sql-parser",
          "partial": "Sort Spec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-sql-parser/docs/Language-SQL-SimpleSQL-Syntax.html#v:SortSpec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsed for ternary, mixfix and other non orthodox\n operators. Currently used for row constructors, and for\n between.\n\u003c/p\u003e",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "SpecialOp",
          "package": "simple-sql-parser",
          "signature": "SpecialOp Name [ValueExpr]",
          "source": "src/Language-SQL-SimpleSQL-Syntax.html#ValueExpr",
          "type": "function"
        },
        "index": {
          "description": "Used for ternary mixfix and other non orthodox operators Currently used for row constructors and for between",
          "hierarchy": "Language SQL SimpleSQL Syntax",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "SpecialOp",
          "normalized": "SpecialOp Name[ValueExpr]",
          "package": "simple-sql-parser",
          "partial": "Special Op",
          "signature": "SpecialOp Name[ValueExpr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-sql-parser/docs/Language-SQL-SimpleSQL-Syntax.html#v:SpecialOp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsed for the operators which look like functions\n except the arguments are separated by keywords instead\n of commas. The maybe is for the first unnamed argument\n if it is present, and the list is for the keyword argument\n pairs.\n\u003c/p\u003e",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "SpecialOpK",
          "package": "simple-sql-parser",
          "signature": "SpecialOpK Name (Maybe ValueExpr) [(String, ValueExpr)]",
          "source": "src/Language-SQL-SimpleSQL-Syntax.html#ValueExpr",
          "type": "function"
        },
        "index": {
          "description": "Used for the operators which look like functions except the arguments are separated by keywords instead of commas The maybe is for the first unnamed argument if it is present and the list is for the keyword argument pairs",
          "hierarchy": "Language SQL SimpleSQL Syntax",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "SpecialOpK",
          "normalized": "SpecialOpK Name(Maybe ValueExpr)[(String,ValueExpr)]",
          "package": "simple-sql-parser",
          "partial": "Special Op",
          "signature": "SpecialOpK Name(Maybe ValueExpr)[(String,ValueExpr)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-sql-parser/docs/Language-SQL-SimpleSQL-Syntax.html#v:SpecialOpK"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eall (query expr)\n\u003c/p\u003e",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "SqAll",
          "package": "simple-sql-parser",
          "signature": "SqAll",
          "source": "src/Language-SQL-SimpleSQL-Syntax.html#SubQueryExprType",
          "type": "function"
        },
        "index": {
          "description": "all query expr",
          "hierarchy": "Language SQL SimpleSQL Syntax",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "SqAll",
          "package": "simple-sql-parser",
          "partial": "Sq All",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-sql-parser/docs/Language-SQL-SimpleSQL-Syntax.html#v:SqAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eany (query expr)\n\u003c/p\u003e",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "SqAny",
          "package": "simple-sql-parser",
          "signature": "SqAny",
          "source": "src/Language-SQL-SimpleSQL-Syntax.html#SubQueryExprType",
          "type": "function"
        },
        "index": {
          "description": "any query expr",
          "hierarchy": "Language SQL SimpleSQL Syntax",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "SqAny",
          "package": "simple-sql-parser",
          "partial": "Sq Any",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-sql-parser/docs/Language-SQL-SimpleSQL-Syntax.html#v:SqAny"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eexists (query expr)\n\u003c/p\u003e",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "SqExists",
          "package": "simple-sql-parser",
          "signature": "SqExists",
          "source": "src/Language-SQL-SimpleSQL-Syntax.html#SubQueryExprType",
          "type": "function"
        },
        "index": {
          "description": "exists query expr",
          "hierarchy": "Language SQL SimpleSQL Syntax",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "SqExists",
          "package": "simple-sql-parser",
          "partial": "Sq Exists",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-sql-parser/docs/Language-SQL-SimpleSQL-Syntax.html#v:SqExists"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esome (query expr)\n\u003c/p\u003e",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "SqSome",
          "package": "simple-sql-parser",
          "signature": "SqSome",
          "source": "src/Language-SQL-SimpleSQL-Syntax.html#SubQueryExprType",
          "type": "function"
        },
        "index": {
          "description": "some query expr",
          "hierarchy": "Language SQL SimpleSQL Syntax",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "SqSome",
          "package": "simple-sql-parser",
          "partial": "Sq Some",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-sql-parser/docs/Language-SQL-SimpleSQL-Syntax.html#v:SqSome"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea scalar subquery\n\u003c/p\u003e",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "SqSq",
          "package": "simple-sql-parser",
          "signature": "SqSq",
          "source": "src/Language-SQL-SimpleSQL-Syntax.html#SubQueryExprType",
          "type": "function"
        },
        "index": {
          "description": "scalar subquery",
          "hierarchy": "Language SQL SimpleSQL Syntax",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "SqSq",
          "package": "simple-sql-parser",
          "partial": "Sq Sq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-sql-parser/docs/Language-SQL-SimpleSQL-Syntax.html#v:SqSq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003estar, as in select *, t.*, count(*)\n\u003c/p\u003e",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "Star",
          "package": "simple-sql-parser",
          "signature": "Star",
          "source": "src/Language-SQL-SimpleSQL-Syntax.html#ValueExpr",
          "type": "function"
        },
        "index": {
          "description": "star as in select count",
          "hierarchy": "Language SQL SimpleSQL Syntax",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "Star",
          "package": "simple-sql-parser",
          "partial": "Star",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-sql-parser/docs/Language-SQL-SimpleSQL-Syntax.html#v:Star"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003estring literal, currently only basic strings between\n single quotes with a single quote escaped using ''\n\u003c/p\u003e",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "StringLit",
          "package": "simple-sql-parser",
          "signature": "StringLit String",
          "source": "src/Language-SQL-SimpleSQL-Syntax.html#ValueExpr",
          "type": "function"
        },
        "index": {
          "description": "string literal currently only basic strings between single quotes with single quote escaped using",
          "hierarchy": "Language SQL SimpleSQL Syntax",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "StringLit",
          "package": "simple-sql-parser",
          "partial": "String Lit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-sql-parser/docs/Language-SQL-SimpleSQL-Syntax.html#v:StringLit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eexists, all, any, some subqueries\n\u003c/p\u003e",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "SubQueryExpr",
          "package": "simple-sql-parser",
          "signature": "SubQueryExpr SubQueryExprType QueryExpr",
          "source": "src/Language-SQL-SimpleSQL-Syntax.html#ValueExpr",
          "type": "function"
        },
        "index": {
          "description": "exists all any some subqueries",
          "hierarchy": "Language SQL SimpleSQL Syntax",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "SubQueryExpr",
          "package": "simple-sql-parser",
          "partial": "Sub Query Expr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-sql-parser/docs/Language-SQL-SimpleSQL-Syntax.html#v:SubQueryExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efrom a as b(c,d)\n\u003c/p\u003e",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "TRAlias",
          "package": "simple-sql-parser",
          "signature": "TRAlias TableRef Alias",
          "source": "src/Language-SQL-SimpleSQL-Syntax.html#TableRef",
          "type": "function"
        },
        "index": {
          "description": "from as",
          "hierarchy": "Language SQL SimpleSQL Syntax",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "TRAlias",
          "package": "simple-sql-parser",
          "partial": "TRAlias",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-sql-parser/docs/Language-SQL-SimpleSQL-Syntax.html#v:TRAlias"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efrom function(args)\n\u003c/p\u003e",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "TRFunction",
          "package": "simple-sql-parser",
          "signature": "TRFunction Name [ValueExpr]",
          "source": "src/Language-SQL-SimpleSQL-Syntax.html#TableRef",
          "type": "function"
        },
        "index": {
          "description": "from function args",
          "hierarchy": "Language SQL SimpleSQL Syntax",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "TRFunction",
          "normalized": "TRFunction Name[ValueExpr]",
          "package": "simple-sql-parser",
          "partial": "TRFunction",
          "signature": "TRFunction Name[ValueExpr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-sql-parser/docs/Language-SQL-SimpleSQL-Syntax.html#v:TRFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efrom a join b\n\u003c/p\u003e",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "TRJoin",
          "package": "simple-sql-parser",
          "signature": "TRJoin TableRef JoinType TableRef (Maybe JoinCondition)",
          "source": "src/Language-SQL-SimpleSQL-Syntax.html#TableRef",
          "type": "function"
        },
        "index": {
          "description": "from join",
          "hierarchy": "Language SQL SimpleSQL Syntax",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "TRJoin",
          "package": "simple-sql-parser",
          "partial": "TRJoin",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-sql-parser/docs/Language-SQL-SimpleSQL-Syntax.html#v:TRJoin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efrom lateral t\n\u003c/p\u003e",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "TRLateral",
          "package": "simple-sql-parser",
          "signature": "TRLateral TableRef",
          "source": "src/Language-SQL-SimpleSQL-Syntax.html#TableRef",
          "type": "function"
        },
        "index": {
          "description": "from lateral",
          "hierarchy": "Language SQL SimpleSQL Syntax",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "TRLateral",
          "package": "simple-sql-parser",
          "partial": "TRLateral",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-sql-parser/docs/Language-SQL-SimpleSQL-Syntax.html#v:TRLateral"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efrom (a)\n\u003c/p\u003e",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "TRParens",
          "package": "simple-sql-parser",
          "signature": "TRParens TableRef",
          "source": "src/Language-SQL-SimpleSQL-Syntax.html#TableRef",
          "type": "function"
        },
        "index": {
          "description": "from",
          "hierarchy": "Language SQL SimpleSQL Syntax",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "TRParens",
          "package": "simple-sql-parser",
          "partial": "TRParens",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-sql-parser/docs/Language-SQL-SimpleSQL-Syntax.html#v:TRParens"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efrom (query expr)\n\u003c/p\u003e",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "TRQueryExpr",
          "package": "simple-sql-parser",
          "signature": "TRQueryExpr QueryExpr",
          "source": "src/Language-SQL-SimpleSQL-Syntax.html#TableRef",
          "type": "function"
        },
        "index": {
          "description": "from query expr",
          "hierarchy": "Language SQL SimpleSQL Syntax",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "TRQueryExpr",
          "package": "simple-sql-parser",
          "partial": "TRQuery Expr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-sql-parser/docs/Language-SQL-SimpleSQL-Syntax.html#v:TRQueryExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efrom t\n\u003c/p\u003e",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "TRSimple",
          "package": "simple-sql-parser",
          "signature": "TRSimple Name",
          "source": "src/Language-SQL-SimpleSQL-Syntax.html#TableRef",
          "type": "function"
        },
        "index": {
          "description": "from",
          "hierarchy": "Language SQL SimpleSQL Syntax",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "TRSimple",
          "package": "simple-sql-parser",
          "partial": "TRSimple",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-sql-parser/docs/Language-SQL-SimpleSQL-Syntax.html#v:TRSimple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "Table",
          "package": "simple-sql-parser",
          "signature": "Table Name",
          "source": "src/Language-SQL-SimpleSQL-Syntax.html#QueryExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SimpleSQL Syntax",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "Table",
          "package": "simple-sql-parser",
          "partial": "Table",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-sql-parser/docs/Language-SQL-SimpleSQL-Syntax.html#v:Table"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "TypeName",
          "package": "simple-sql-parser",
          "signature": "TypeName String",
          "source": "src/Language-SQL-SimpleSQL-Syntax.html#TypeName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SimpleSQL Syntax",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "TypeName",
          "package": "simple-sql-parser",
          "partial": "Type Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-sql-parser/docs/Language-SQL-SimpleSQL-Syntax.html#v:TypeName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eprefix 'typed literal', e.g. int '42'\n\u003c/p\u003e",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "TypedLit",
          "package": "simple-sql-parser",
          "signature": "TypedLit TypeName String",
          "source": "src/Language-SQL-SimpleSQL-Syntax.html#ValueExpr",
          "type": "function"
        },
        "index": {
          "description": "prefix typed literal e.g int",
          "hierarchy": "Language SQL SimpleSQL Syntax",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "TypedLit",
          "package": "simple-sql-parser",
          "partial": "Typed Lit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-sql-parser/docs/Language-SQL-SimpleSQL-Syntax.html#v:TypedLit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "UnboundedFollowing",
          "package": "simple-sql-parser",
          "signature": "UnboundedFollowing",
          "source": "src/Language-SQL-SimpleSQL-Syntax.html#FramePos",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SimpleSQL Syntax",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "UnboundedFollowing",
          "package": "simple-sql-parser",
          "partial": "Unbounded Following",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-sql-parser/docs/Language-SQL-SimpleSQL-Syntax.html#v:UnboundedFollowing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "UnboundedPreceding",
          "package": "simple-sql-parser",
          "signature": "UnboundedPreceding",
          "source": "src/Language-SQL-SimpleSQL-Syntax.html#FramePos",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SimpleSQL Syntax",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "UnboundedPreceding",
          "package": "simple-sql-parser",
          "partial": "Unbounded Preceding",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-sql-parser/docs/Language-SQL-SimpleSQL-Syntax.html#v:UnboundedPreceding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "Union",
          "package": "simple-sql-parser",
          "signature": "Union",
          "source": "src/Language-SQL-SimpleSQL-Syntax.html#CombineOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SimpleSQL Syntax",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "Union",
          "package": "simple-sql-parser",
          "partial": "Union",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-sql-parser/docs/Language-SQL-SimpleSQL-Syntax.html#v:Union"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "Values",
          "package": "simple-sql-parser",
          "signature": "Values [[ValueExpr]]",
          "source": "src/Language-SQL-SimpleSQL-Syntax.html#QueryExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SimpleSQL Syntax",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "Values",
          "normalized": "Values[[ValueExpr]]",
          "package": "simple-sql-parser",
          "partial": "Values",
          "signature": "Values[[ValueExpr]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-sql-parser/docs/Language-SQL-SimpleSQL-Syntax.html#v:Values"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ewindow application, which adds over (partition by a order\n by b) to regular function application. Explicit frames are\n not currently supported\n\u003c/p\u003e",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "WindowApp",
          "package": "simple-sql-parser",
          "signature": "WindowApp",
          "source": "src/Language-SQL-SimpleSQL-Syntax.html#ValueExpr",
          "type": "function"
        },
        "index": {
          "description": "window application which adds over partition by order by to regular function application Explicit frames are not currently supported",
          "hierarchy": "Language SQL SimpleSQL Syntax",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "WindowApp",
          "package": "simple-sql-parser",
          "partial": "Window App",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-sql-parser/docs/Language-SQL-SimpleSQL-Syntax.html#v:WindowApp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "With",
          "package": "simple-sql-parser",
          "signature": "With",
          "source": "src/Language-SQL-SimpleSQL-Syntax.html#QueryExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SimpleSQL Syntax",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "With",
          "package": "simple-sql-parser",
          "partial": "With",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-sql-parser/docs/Language-SQL-SimpleSQL-Syntax.html#v:With"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eargs\n\u003c/p\u003e",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "aggArgs",
          "package": "simple-sql-parser",
          "signature": "[ValueExpr]",
          "source": "src/Language-SQL-SimpleSQL-Syntax.html#ValueExpr",
          "type": "function"
        },
        "index": {
          "description": "args",
          "hierarchy": "Language SQL SimpleSQL Syntax",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "aggArgs",
          "normalized": "[ValueExpr]",
          "package": "simple-sql-parser",
          "partial": "Args",
          "signature": "[ValueExpr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-sql-parser/docs/Language-SQL-SimpleSQL-Syntax.html#v:aggArgs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edistinct\n\u003c/p\u003e",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "aggDistinct",
          "package": "simple-sql-parser",
          "signature": "Maybe SetQuantifier",
          "source": "src/Language-SQL-SimpleSQL-Syntax.html#ValueExpr",
          "type": "function"
        },
        "index": {
          "description": "distinct",
          "hierarchy": "Language SQL SimpleSQL Syntax",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "aggDistinct",
          "package": "simple-sql-parser",
          "partial": "Distinct",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-sql-parser/docs/Language-SQL-SimpleSQL-Syntax.html#v:aggDistinct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eaggregate function name\n\u003c/p\u003e",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "aggName",
          "package": "simple-sql-parser",
          "signature": "Name",
          "source": "src/Language-SQL-SimpleSQL-Syntax.html#ValueExpr",
          "type": "function"
        },
        "index": {
          "description": "aggregate function name",
          "hierarchy": "Language SQL SimpleSQL Syntax",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "aggName",
          "package": "simple-sql-parser",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-sql-parser/docs/Language-SQL-SimpleSQL-Syntax.html#v:aggName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eorder by\n\u003c/p\u003e",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "aggOrderBy",
          "package": "simple-sql-parser",
          "signature": "[SortSpec]",
          "source": "src/Language-SQL-SimpleSQL-Syntax.html#ValueExpr",
          "type": "function"
        },
        "index": {
          "description": "order by",
          "hierarchy": "Language SQL SimpleSQL Syntax",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "aggOrderBy",
          "normalized": "[SortSpec]",
          "package": "simple-sql-parser",
          "partial": "Order By",
          "signature": "[SortSpec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-sql-parser/docs/Language-SQL-SimpleSQL-Syntax.html#v:aggOrderBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eelse value\n\u003c/p\u003e",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "caseElse",
          "package": "simple-sql-parser",
          "signature": "Maybe ValueExpr",
          "source": "src/Language-SQL-SimpleSQL-Syntax.html#ValueExpr",
          "type": "function"
        },
        "index": {
          "description": "else value",
          "hierarchy": "Language SQL SimpleSQL Syntax",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "caseElse",
          "package": "simple-sql-parser",
          "partial": "Else",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-sql-parser/docs/Language-SQL-SimpleSQL-Syntax.html#v:caseElse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etest value\n\u003c/p\u003e",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "caseTest",
          "package": "simple-sql-parser",
          "signature": "Maybe ValueExpr",
          "source": "src/Language-SQL-SimpleSQL-Syntax.html#ValueExpr",
          "type": "function"
        },
        "index": {
          "description": "test value",
          "hierarchy": "Language SQL SimpleSQL Syntax",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "caseTest",
          "package": "simple-sql-parser",
          "partial": "Test",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-sql-parser/docs/Language-SQL-SimpleSQL-Syntax.html#v:caseTest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ewhen branches\n\u003c/p\u003e",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "caseWhens",
          "package": "simple-sql-parser",
          "signature": "[([ValueExpr], ValueExpr)]",
          "source": "src/Language-SQL-SimpleSQL-Syntax.html#ValueExpr",
          "type": "function"
        },
        "index": {
          "description": "when branches",
          "hierarchy": "Language SQL SimpleSQL Syntax",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "caseWhens",
          "normalized": "[([ValueExpr],ValueExpr)]",
          "package": "simple-sql-parser",
          "partial": "Whens",
          "signature": "[([ValueExpr],ValueExpr)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-sql-parser/docs/Language-SQL-SimpleSQL-Syntax.html#v:caseWhens"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eliteral text\n\u003c/p\u003e",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "ilLiteral",
          "package": "simple-sql-parser",
          "signature": "String",
          "source": "src/Language-SQL-SimpleSQL-Syntax.html#ValueExpr",
          "type": "function"
        },
        "index": {
          "description": "literal text",
          "hierarchy": "Language SQL SimpleSQL Syntax",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "ilLiteral",
          "package": "simple-sql-parser",
          "partial": "Literal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-sql-parser/docs/Language-SQL-SimpleSQL-Syntax.html#v:ilLiteral"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eprecision\n\u003c/p\u003e",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "ilPrecision",
          "package": "simple-sql-parser",
          "signature": "Maybe Int",
          "source": "src/Language-SQL-SimpleSQL-Syntax.html#ValueExpr",
          "type": "function"
        },
        "index": {
          "description": "precision",
          "hierarchy": "Language SQL SimpleSQL Syntax",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "ilPrecision",
          "package": "simple-sql-parser",
          "partial": "Precision",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-sql-parser/docs/Language-SQL-SimpleSQL-Syntax.html#v:ilPrecision"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eunits\n\u003c/p\u003e",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "ilUnits",
          "package": "simple-sql-parser",
          "signature": "String",
          "source": "src/Language-SQL-SimpleSQL-Syntax.html#ValueExpr",
          "type": "function"
        },
        "index": {
          "description": "units",
          "hierarchy": "Language SQL SimpleSQL Syntax",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "ilUnits",
          "package": "simple-sql-parser",
          "partial": "Units",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-sql-parser/docs/Language-SQL-SimpleSQL-Syntax.html#v:ilUnits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHelper/'default' value for query exprs to make creating query\n expr values a little easier. It is defined like this:\n\u003c/p\u003e\u003cpre\u003e makeSelect :: QueryExpr\n makeSelect = Select {qeSetQuantifier = All\n                     ,qeSelectList = []\n                     ,qeFrom = []\n                     ,qeWhere = Nothing\n                     ,qeGroupBy = []\n                     ,qeHaving = Nothing\n                     ,qeOrderBy = []\n                     ,qeOffset = Nothing\n                     ,qeFetchFirst = Nothing}\n\u003c/pre\u003e",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "makeSelect",
          "package": "simple-sql-parser",
          "signature": "QueryExpr",
          "source": "src/Language-SQL-SimpleSQL-Syntax.html#makeSelect",
          "type": "function"
        },
        "index": {
          "description": "Helper default value for query exprs to make creating query expr values little easier It is defined like this makeSelect QueryExpr makeSelect Select qeSetQuantifier All qeSelectList qeFrom qeWhere Nothing qeGroupBy qeHaving Nothing qeOrderBy qeOffset Nothing qeFetchFirst Nothing",
          "hierarchy": "Language SQL SimpleSQL Syntax",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "makeSelect",
          "package": "simple-sql-parser",
          "partial": "Select",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-sql-parser/docs/Language-SQL-SimpleSQL-Syntax.html#v:makeSelect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "qe0",
          "package": "simple-sql-parser",
          "signature": "QueryExpr",
          "source": "src/Language-SQL-SimpleSQL-Syntax.html#QueryExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SimpleSQL Syntax",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "qe0",
          "package": "simple-sql-parser",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-sql-parser/docs/Language-SQL-SimpleSQL-Syntax.html#v:qe0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "qe1",
          "package": "simple-sql-parser",
          "signature": "QueryExpr",
          "source": "src/Language-SQL-SimpleSQL-Syntax.html#QueryExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SimpleSQL Syntax",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "qe1",
          "package": "simple-sql-parser",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-sql-parser/docs/Language-SQL-SimpleSQL-Syntax.html#v:qe1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "qeCombOp",
          "package": "simple-sql-parser",
          "signature": "CombineOp",
          "source": "src/Language-SQL-SimpleSQL-Syntax.html#QueryExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SimpleSQL Syntax",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "qeCombOp",
          "package": "simple-sql-parser",
          "partial": "Comb Op",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-sql-parser/docs/Language-SQL-SimpleSQL-Syntax.html#v:qeCombOp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "qeCorresponding",
          "package": "simple-sql-parser",
          "signature": "Corresponding",
          "source": "src/Language-SQL-SimpleSQL-Syntax.html#QueryExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SimpleSQL Syntax",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "qeCorresponding",
          "package": "simple-sql-parser",
          "partial": "Corresponding",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-sql-parser/docs/Language-SQL-SimpleSQL-Syntax.html#v:qeCorresponding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "qeFetchFirst",
          "package": "simple-sql-parser",
          "signature": "Maybe ValueExpr",
          "source": "src/Language-SQL-SimpleSQL-Syntax.html#QueryExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SimpleSQL Syntax",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "qeFetchFirst",
          "package": "simple-sql-parser",
          "partial": "Fetch First",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-sql-parser/docs/Language-SQL-SimpleSQL-Syntax.html#v:qeFetchFirst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "qeFrom",
          "package": "simple-sql-parser",
          "signature": "[TableRef]",
          "source": "src/Language-SQL-SimpleSQL-Syntax.html#QueryExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SimpleSQL Syntax",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "qeFrom",
          "normalized": "[TableRef]",
          "package": "simple-sql-parser",
          "partial": "From",
          "signature": "[TableRef]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-sql-parser/docs/Language-SQL-SimpleSQL-Syntax.html#v:qeFrom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "qeGroupBy",
          "package": "simple-sql-parser",
          "signature": "[GroupingExpr]",
          "source": "src/Language-SQL-SimpleSQL-Syntax.html#QueryExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SimpleSQL Syntax",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "qeGroupBy",
          "normalized": "[GroupingExpr]",
          "package": "simple-sql-parser",
          "partial": "Group By",
          "signature": "[GroupingExpr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-sql-parser/docs/Language-SQL-SimpleSQL-Syntax.html#v:qeGroupBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "qeHaving",
          "package": "simple-sql-parser",
          "signature": "Maybe ValueExpr",
          "source": "src/Language-SQL-SimpleSQL-Syntax.html#QueryExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SimpleSQL Syntax",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "qeHaving",
          "package": "simple-sql-parser",
          "partial": "Having",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-sql-parser/docs/Language-SQL-SimpleSQL-Syntax.html#v:qeHaving"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "qeOffset",
          "package": "simple-sql-parser",
          "signature": "Maybe ValueExpr",
          "source": "src/Language-SQL-SimpleSQL-Syntax.html#QueryExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SimpleSQL Syntax",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "qeOffset",
          "package": "simple-sql-parser",
          "partial": "Offset",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-sql-parser/docs/Language-SQL-SimpleSQL-Syntax.html#v:qeOffset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "qeOrderBy",
          "package": "simple-sql-parser",
          "signature": "[SortSpec]",
          "source": "src/Language-SQL-SimpleSQL-Syntax.html#QueryExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SimpleSQL Syntax",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "qeOrderBy",
          "normalized": "[SortSpec]",
          "package": "simple-sql-parser",
          "partial": "Order By",
          "signature": "[SortSpec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-sql-parser/docs/Language-SQL-SimpleSQL-Syntax.html#v:qeOrderBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "qeQueryExpression",
          "package": "simple-sql-parser",
          "signature": "QueryExpr",
          "source": "src/Language-SQL-SimpleSQL-Syntax.html#QueryExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SimpleSQL Syntax",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "qeQueryExpression",
          "package": "simple-sql-parser",
          "partial": "Query Expression",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-sql-parser/docs/Language-SQL-SimpleSQL-Syntax.html#v:qeQueryExpression"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe expressions and the column aliases\n\u003c/p\u003e",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "qeSelectList",
          "package": "simple-sql-parser",
          "signature": "[(ValueExpr, Maybe Name)]",
          "source": "src/Language-SQL-SimpleSQL-Syntax.html#QueryExpr",
          "type": "function"
        },
        "index": {
          "description": "the expressions and the column aliases",
          "hierarchy": "Language SQL SimpleSQL Syntax",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "qeSelectList",
          "normalized": "[(ValueExpr,Maybe Name)]",
          "package": "simple-sql-parser",
          "partial": "Select List",
          "signature": "[(ValueExpr,Maybe Name)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-sql-parser/docs/Language-SQL-SimpleSQL-Syntax.html#v:qeSelectList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "qeSetQuantifier",
          "package": "simple-sql-parser",
          "signature": "SetQuantifier",
          "source": "src/Language-SQL-SimpleSQL-Syntax.html#QueryExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SimpleSQL Syntax",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "qeSetQuantifier",
          "package": "simple-sql-parser",
          "partial": "Set Quantifier",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-sql-parser/docs/Language-SQL-SimpleSQL-Syntax.html#v:qeSetQuantifier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "qeViews",
          "package": "simple-sql-parser",
          "signature": "[(Alias, QueryExpr)]",
          "source": "src/Language-SQL-SimpleSQL-Syntax.html#QueryExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SimpleSQL Syntax",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "qeViews",
          "normalized": "[(Alias,QueryExpr)]",
          "package": "simple-sql-parser",
          "partial": "Views",
          "signature": "[(Alias,QueryExpr)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-sql-parser/docs/Language-SQL-SimpleSQL-Syntax.html#v:qeViews"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "qeWhere",
          "package": "simple-sql-parser",
          "signature": "Maybe ValueExpr",
          "source": "src/Language-SQL-SimpleSQL-Syntax.html#QueryExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SimpleSQL Syntax",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "qeWhere",
          "package": "simple-sql-parser",
          "partial": "Where",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-sql-parser/docs/Language-SQL-SimpleSQL-Syntax.html#v:qeWhere"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "qeWithRecursive",
          "package": "simple-sql-parser",
          "signature": "Bool",
          "source": "src/Language-SQL-SimpleSQL-Syntax.html#QueryExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SimpleSQL Syntax",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "qeWithRecursive",
          "package": "simple-sql-parser",
          "partial": "With Recursive",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-sql-parser/docs/Language-SQL-SimpleSQL-Syntax.html#v:qeWithRecursive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eargs\n\u003c/p\u003e",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "wnArgs",
          "package": "simple-sql-parser",
          "signature": "[ValueExpr]",
          "source": "src/Language-SQL-SimpleSQL-Syntax.html#ValueExpr",
          "type": "function"
        },
        "index": {
          "description": "args",
          "hierarchy": "Language SQL SimpleSQL Syntax",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "wnArgs",
          "normalized": "[ValueExpr]",
          "package": "simple-sql-parser",
          "partial": "Args",
          "signature": "[ValueExpr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-sql-parser/docs/Language-SQL-SimpleSQL-Syntax.html#v:wnArgs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eframe clause\n\u003c/p\u003e",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "wnFrame",
          "package": "simple-sql-parser",
          "signature": "Maybe Frame",
          "source": "src/Language-SQL-SimpleSQL-Syntax.html#ValueExpr",
          "type": "function"
        },
        "index": {
          "description": "frame clause",
          "hierarchy": "Language SQL SimpleSQL Syntax",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "wnFrame",
          "package": "simple-sql-parser",
          "partial": "Frame",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-sql-parser/docs/Language-SQL-SimpleSQL-Syntax.html#v:wnFrame"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ewindow function name\n\u003c/p\u003e",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "wnName",
          "package": "simple-sql-parser",
          "signature": "Name",
          "source": "src/Language-SQL-SimpleSQL-Syntax.html#ValueExpr",
          "type": "function"
        },
        "index": {
          "description": "window function name",
          "hierarchy": "Language SQL SimpleSQL Syntax",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "wnName",
          "package": "simple-sql-parser",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-sql-parser/docs/Language-SQL-SimpleSQL-Syntax.html#v:wnName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eorder by\n\u003c/p\u003e",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "wnOrderBy",
          "package": "simple-sql-parser",
          "signature": "[SortSpec]",
          "source": "src/Language-SQL-SimpleSQL-Syntax.html#ValueExpr",
          "type": "function"
        },
        "index": {
          "description": "order by",
          "hierarchy": "Language SQL SimpleSQL Syntax",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "wnOrderBy",
          "normalized": "[SortSpec]",
          "package": "simple-sql-parser",
          "partial": "Order By",
          "signature": "[SortSpec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-sql-parser/docs/Language-SQL-SimpleSQL-Syntax.html#v:wnOrderBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003epartition by\n\u003c/p\u003e",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "wnPartition",
          "package": "simple-sql-parser",
          "signature": "[ValueExpr]",
          "source": "src/Language-SQL-SimpleSQL-Syntax.html#ValueExpr",
          "type": "function"
        },
        "index": {
          "description": "partition by",
          "hierarchy": "Language SQL SimpleSQL Syntax",
          "module": "Language.SQL.SimpleSQL.Syntax",
          "name": "wnPartition",
          "normalized": "[ValueExpr]",
          "package": "simple-sql-parser",
          "partial": "Partition",
          "signature": "[ValueExpr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-sql-parser/docs/Language-SQL-SimpleSQL-Syntax.html#v:wnPartition"
      }
    }
  ]
]