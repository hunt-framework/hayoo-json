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
        "word": "language-sqlite"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite.Tools",
          "name": "Tools",
          "package": "language-sqlite",
          "source": "src/Language-SQL-SQLite-Tools.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Language SQL SQLite Tools",
          "module": "Language.SQL.SQLite.Tools",
          "name": "Tools",
          "package": "language-sqlite",
          "partial": "Tools",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite-Tools.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite.Tools",
          "name": "changeTableSchema",
          "package": "language-sqlite",
          "signature": "CreateTable -\u003e CreateTable -\u003e Map UnqualifiedIdentifier Expression -\u003e StatementList",
          "source": "src/Language-SQL-SQLite-Tools.html#changeTableSchema",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite Tools",
          "module": "Language.SQL.SQLite.Tools",
          "name": "changeTableSchema",
          "normalized": "CreateTable-\u003eCreateTable-\u003eMap UnqualifiedIdentifier Expression-\u003eStatementList",
          "package": "language-sqlite",
          "partial": "Table Schema",
          "signature": "CreateTable-\u003eCreateTable-\u003eMap UnqualifiedIdentifier Expression-\u003eStatementList",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite-Tools.html#v:changeTableSchema"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "SQLite",
          "package": "language-sqlite",
          "source": "src/Language-SQL-SQLite.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "SQLite",
          "package": "language-sqlite",
          "partial": "SQLite",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type synonym which matches only the AST node corresponding to\n   an \u003ccode\u003eALTER TABLE\u003c/code\u003e statement.\n   Useful at top level.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "AlterTable",
          "package": "language-sqlite",
          "source": "src/Language-SQL-SQLite-Types.html#AlterTable",
          "type": "type"
        },
        "index": {
          "description": "type synonym which matches only the AST node corresponding to an ALTER TABLE statement Useful at top level",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "AlterTable",
          "package": "language-sqlite",
          "partial": "Alter Table",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#t:AlterTable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe AST node corresponding to the body of an \u003ccode\u003e\u003ca\u003eAlterTable\u003c/a\u003e\u003c/code\u003e statement.\n   Used by \u003ccode\u003e\u003ca\u003eAlterTable\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "AlterTableBody",
          "package": "language-sqlite",
          "source": "src/Language-SQL-SQLite-Types.html#AlterTableBody",
          "type": "data"
        },
        "index": {
          "description": "The AST node corresponding to the body of an AlterTable statement Used by AlterTable",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "AlterTableBody",
          "package": "language-sqlite",
          "partial": "Alter Table Body",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#t:AlterTableBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type synonym which matches only the AST node corresponding to\n   an \u003ccode\u003eANALYZE\u003c/code\u003e statement.\n   Useful at top level.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "Analyze",
          "package": "language-sqlite",
          "source": "src/Language-SQL-SQLite-Types.html#Analyze",
          "type": "type"
        },
        "index": {
          "description": "type synonym which matches only the AST node corresponding to an ANALYZE statement Useful at top level",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "Analyze",
          "package": "language-sqlite",
          "partial": "Analyze",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#t:Analyze"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe AST node corresponding to any statement.  Used by \u003ccode\u003e\u003ca\u003eStatementList\u003c/a\u003e\u003c/code\u003e.\n   Also useful at top level.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "AnyStatement",
          "package": "language-sqlite",
          "source": "src/Language-SQL-SQLite-Types.html#AnyStatement",
          "type": "data"
        },
        "index": {
          "description": "The AST node corresponding to any statement Used by StatementList Also useful at top level",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "AnyStatement",
          "package": "language-sqlite",
          "partial": "Any Statement",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#t:AnyStatement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type synonym which matches only the AST node corresponding to\n   an \u003ccode\u003eATTACH\u003c/code\u003e statement.\n   Useful at top level.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "Attach",
          "package": "language-sqlite",
          "source": "src/Language-SQL-SQLite-Types.html#Attach",
          "type": "type"
        },
        "index": {
          "description": "type synonym which matches only the AST node corresponding to an ATTACH statement Useful at top level",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "Attach",
          "package": "language-sqlite",
          "partial": "Attach",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#t:Attach"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type synonym which matches only the AST node corresponding to\n   a \u003ccode\u003eBEGIN\u003c/code\u003e statement.\n   Useful at top level.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "Begin",
          "package": "language-sqlite",
          "source": "src/Language-SQL-SQLite-Types.html#Begin",
          "type": "type"
        },
        "index": {
          "description": "type synonym which matches only the AST node corresponding to BEGIN statement Useful at top level",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "Begin",
          "package": "language-sqlite",
          "partial": "Begin",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#t:Begin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe AST node corresponding to each \u003ccode\u003eWHEN\u003c/code\u003e-\u003ccode\u003eTHEN\u003c/code\u003e pair of subexpressions in a\n   \u003ccode\u003eCASE\u003c/code\u003e expression.  Used by \u003ccode\u003e\u003ca\u003eExpressionCase\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "CasePair",
          "package": "language-sqlite",
          "source": "src/Language-SQL-SQLite-Types.html#CasePair",
          "type": "data"
        },
        "index": {
          "description": "The AST node corresponding to each WHEN THEN pair of subexpressions in CASE expression Used by ExpressionCase",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "CasePair",
          "package": "language-sqlite",
          "partial": "Case Pair",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#t:CasePair"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe AST node corresponding to a column constraint subclause.  Used by\n   \u003ccode\u003e\u003ca\u003eColumnDefinition\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "ColumnConstraint",
          "package": "language-sqlite",
          "source": "src/Language-SQL-SQLite-Types.html#ColumnConstraint",
          "type": "data"
        },
        "index": {
          "description": "The AST node corresponding to column constraint subclause Used by ColumnDefinition",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "ColumnConstraint",
          "package": "language-sqlite",
          "partial": "Column Constraint",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#t:ColumnConstraint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe AST node corresponding to a column-definition subclause.  Used by\n   \u003ccode\u003e\u003ca\u003eAlterTableBody\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eCreateTableBody\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "ColumnDefinition",
          "package": "language-sqlite",
          "source": "src/Language-SQL-SQLite-Types.html#ColumnDefinition",
          "type": "data"
        },
        "index": {
          "description": "The AST node corresponding to column-definition subclause Used by AlterTableBody and CreateTableBody",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "ColumnDefinition",
          "package": "language-sqlite",
          "partial": "Column Definition",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#t:ColumnDefinition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type synonym which matches only the AST node corresponding to\n   a \u003ccode\u003eCOMMIT\u003c/code\u003e statement.\n   Useful at top level.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "Commit",
          "package": "language-sqlite",
          "source": "src/Language-SQL-SQLite-Types.html#Commit",
          "type": "type"
        },
        "index": {
          "description": "type synonym which matches only the AST node corresponding to COMMIT statement Useful at top level",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "Commit",
          "package": "language-sqlite",
          "partial": "Commit",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#t:Commit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe AST node corresponding to the head of a \u003ccode\u003eCOMMIT\u003c/code\u003e statement.  Used by\n   \u003ccode\u003e\u003ca\u003eCommit\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "CommitHead",
          "package": "language-sqlite",
          "source": "src/Language-SQL-SQLite-Types.html#CommitHead",
          "type": "data"
        },
        "index": {
          "description": "The AST node corresponding to the head of COMMIT statement Used by Commit",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "CommitHead",
          "package": "language-sqlite",
          "partial": "Commit Head",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#t:CommitHead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe AST node corresponding to a compound operator in a \u003ccode\u003eSELECT\u003c/code\u003e statement.\n   Used by \u003ccode\u003e\u003ca\u003eSelect\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "CompoundOperator",
          "package": "language-sqlite",
          "source": "src/Language-SQL-SQLite-Types.html#CompoundOperator",
          "type": "data"
        },
        "index": {
          "description": "The AST node corresponding to compound operator in SELECT statement Used by Select",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "CompoundOperator",
          "package": "language-sqlite",
          "partial": "Compound Operator",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#t:CompoundOperator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe AST node corresponding to an \u003ccode\u003eON CONFLICT\u003c/code\u003e clause.  Used by\n   \u003ccode\u003e\u003ca\u003eColumnConstraint\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eTableConstraint\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "ConflictClause",
          "package": "language-sqlite",
          "source": "src/Language-SQL-SQLite-Types.html#ConflictClause",
          "type": "data"
        },
        "index": {
          "description": "The AST node corresponding to an ON CONFLICT clause Used by ColumnConstraint and TableConstraint",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "ConflictClause",
          "package": "language-sqlite",
          "partial": "Conflict Clause",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#t:ConflictClause"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type synonym which matches only the AST node corresponding to\n   a \u003ccode\u003eCREATE INDEX\u003c/code\u003e statement.\n   Useful at top level.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "CreateIndex",
          "package": "language-sqlite",
          "source": "src/Language-SQL-SQLite-Types.html#CreateIndex",
          "type": "type"
        },
        "index": {
          "description": "type synonym which matches only the AST node corresponding to CREATE INDEX statement Useful at top level",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "CreateIndex",
          "package": "language-sqlite",
          "partial": "Create Index",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#t:CreateIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type synonym which matches only the AST node corresponding to\n   a \u003ccode\u003eCREATE TABLE\u003c/code\u003e statement.\n   Useful at top level.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "CreateTable",
          "package": "language-sqlite",
          "source": "src/Language-SQL-SQLite-Types.html#CreateTable",
          "type": "type"
        },
        "index": {
          "description": "type synonym which matches only the AST node corresponding to CREATE TABLE statement Useful at top level",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "CreateTable",
          "package": "language-sqlite",
          "partial": "Create Table",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#t:CreateTable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe AST node corresponding to a create-table body.  Used by \u003ccode\u003e\u003ca\u003eCreateTable\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "CreateTableBody",
          "package": "language-sqlite",
          "source": "src/Language-SQL-SQLite-Types.html#CreateTableBody",
          "type": "data"
        },
        "index": {
          "description": "The AST node corresponding to create-table body Used by CreateTable",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "CreateTableBody",
          "package": "language-sqlite",
          "partial": "Create Table Body",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#t:CreateTableBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type synonym which matches only the AST node corresponding to\n   a \u003ccode\u003eCREATE TRIGGER\u003c/code\u003e statement.\n   Useful at top level.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "CreateTrigger",
          "package": "language-sqlite",
          "source": "src/Language-SQL-SQLite-Types.html#CreateTrigger",
          "type": "type"
        },
        "index": {
          "description": "type synonym which matches only the AST node corresponding to CREATE TRIGGER statement Useful at top level",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "CreateTrigger",
          "package": "language-sqlite",
          "partial": "Create Trigger",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#t:CreateTrigger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type synonym which matches only the AST node corresponding to\n   a \u003ccode\u003eCREATE VIEW\u003c/code\u003e statement.\n   Useful at top level.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "CreateView",
          "package": "language-sqlite",
          "source": "src/Language-SQL-SQLite-Types.html#CreateView",
          "type": "type"
        },
        "index": {
          "description": "type synonym which matches only the AST node corresponding to CREATE VIEW statement Useful at top level",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "CreateView",
          "package": "language-sqlite",
          "partial": "Create View",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#t:CreateView"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type synonym which matches only the AST node corresponding to\n   a \u003ccode\u003eCREATE VIRTUAL TABLE\u003c/code\u003e statement.\n   Useful at top level.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "CreateVirtualTable",
          "package": "language-sqlite",
          "source": "src/Language-SQL-SQLite-Types.html#CreateVirtualTable",
          "type": "type"
        },
        "index": {
          "description": "type synonym which matches only the AST node corresponding to CREATE VIRTUAL TABLE statement Useful at top level",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "CreateVirtualTable",
          "package": "language-sqlite",
          "partial": "Create Virtual Table",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#t:CreateVirtualTable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe AST node corresponding to a default-value subclause.  Used by\n   \u003ccode\u003e\u003ca\u003eColumnConstraint\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "DefaultValue",
          "package": "language-sqlite",
          "source": "src/Language-SQL-SQLite-Types.html#DefaultValue",
          "type": "data"
        },
        "index": {
          "description": "The AST node corresponding to default-value subclause Used by ColumnConstraint",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "DefaultValue",
          "package": "language-sqlite",
          "partial": "Default Value",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#t:DefaultValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type synonym which matches only the AST node corresponding to\n   a \u003ccode\u003eDELETE\u003c/code\u003e statement without a \u003ccode\u003eLIMIT\u003c/code\u003e clause.\n   Useful at top level.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "Delete",
          "package": "language-sqlite",
          "source": "src/Language-SQL-SQLite-Types.html#Delete",
          "type": "type"
        },
        "index": {
          "description": "type synonym which matches only the AST node corresponding to DELETE statement without LIMIT clause Useful at top level",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "Delete",
          "package": "language-sqlite",
          "partial": "Delete",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#t:Delete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type synonym which matches only the AST node corresponding to\n   a \u003ccode\u003eDELETE\u003c/code\u003e statement with a \u003ccode\u003eLIMIT\u003c/code\u003e clause.\n   Useful at top level.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "DeleteLimited",
          "package": "language-sqlite",
          "source": "src/Language-SQL-SQLite-Types.html#DeleteLimited",
          "type": "type"
        },
        "index": {
          "description": "type synonym which matches only the AST node corresponding to DELETE statement with LIMIT clause Useful at top level",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "DeleteLimited",
          "package": "language-sqlite",
          "partial": "Delete Limited",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#t:DeleteLimited"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type synonym which matches only the AST node corresponding to\n   a \u003ccode\u003eDETACH\u003c/code\u003e statement.\n   Useful at top level.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "Detach",
          "package": "language-sqlite",
          "source": "src/Language-SQL-SQLite-Types.html#Detach",
          "type": "type"
        },
        "index": {
          "description": "type synonym which matches only the AST node corresponding to DETACH statement Useful at top level",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "Detach",
          "package": "language-sqlite",
          "partial": "Detach",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#t:Detach"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe AST node corresponding to an optional \u003ccode\u003eDISTINCT\u003c/code\u003e or \u003ccode\u003eALL\u003c/code\u003e qualifier.\n   Used by \u003ccode\u003e\u003ca\u003eSelectCore\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "Distinctness",
          "package": "language-sqlite",
          "source": "src/Language-SQL-SQLite-Types.html#Distinctness",
          "type": "data"
        },
        "index": {
          "description": "The AST node corresponding to an optional DISTINCT or ALL qualifier Used by SelectCore",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "Distinctness",
          "package": "language-sqlite",
          "partial": "Distinctness",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#t:Distinctness"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn identifier which allows two levels of qualification.  This is typically a\n   column name.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "DoublyQualifiedIdentifier",
          "package": "language-sqlite",
          "source": "src/Language-SQL-SQLite-Types.html#DoublyQualifiedIdentifier",
          "type": "data"
        },
        "index": {
          "description": "An identifier which allows two levels of qualification This is typically column name",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "DoublyQualifiedIdentifier",
          "package": "language-sqlite",
          "partial": "Doubly Qualified Identifier",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#t:DoublyQualifiedIdentifier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type synonym which matches only the AST node corresponding to\n   a \u003ccode\u003eDROP INDEX\u003c/code\u003e statement.\n   Useful at top level.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "DropIndex",
          "package": "language-sqlite",
          "source": "src/Language-SQL-SQLite-Types.html#DropIndex",
          "type": "type"
        },
        "index": {
          "description": "type synonym which matches only the AST node corresponding to DROP INDEX statement Useful at top level",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "DropIndex",
          "package": "language-sqlite",
          "partial": "Drop Index",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#t:DropIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type synonym which matches only the AST node corresponding to\n   a \u003ccode\u003eDROP TABLE\u003c/code\u003e statement.\n   Useful at top level.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "DropTable",
          "package": "language-sqlite",
          "source": "src/Language-SQL-SQLite-Types.html#DropTable",
          "type": "type"
        },
        "index": {
          "description": "type synonym which matches only the AST node corresponding to DROP TABLE statement Useful at top level",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "DropTable",
          "package": "language-sqlite",
          "partial": "Drop Table",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#t:DropTable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type synonym which matches only the AST node corresponding to\n   a \u003ccode\u003eDROP TRIGGER\u003c/code\u003e statement.\n   Useful at top level.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "DropTrigger",
          "package": "language-sqlite",
          "source": "src/Language-SQL-SQLite-Types.html#DropTrigger",
          "type": "type"
        },
        "index": {
          "description": "type synonym which matches only the AST node corresponding to DROP TRIGGER statement Useful at top level",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "DropTrigger",
          "package": "language-sqlite",
          "partial": "Drop Trigger",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#t:DropTrigger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type synonym which matches only the AST node corresponding to\n   a \u003ccode\u003eDROP VIEW\u003c/code\u003e statement.\n   Useful at top level.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "DropView",
          "package": "language-sqlite",
          "source": "src/Language-SQL-SQLite-Types.html#DropView",
          "type": "type"
        },
        "index": {
          "description": "type synonym which matches only the AST node corresponding to DROP VIEW statement Useful at top level",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "DropView",
          "package": "language-sqlite",
          "partial": "Drop View",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#t:DropView"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe AST node corresponding to the optional \u003ccode\u003eELSE\u003c/code\u003e subclause in a \u003ccode\u003eCASE\u003c/code\u003e expression.\n   Used by \u003ccode\u003e\u003ca\u003eExpressionCase\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "Else",
          "package": "language-sqlite",
          "source": "src/Language-SQL-SQLite-Types.html#Else",
          "type": "data"
        },
        "index": {
          "description": "The AST node corresponding to the optional ELSE subclause in CASE expression Used by ExpressionCase",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "Else",
          "package": "language-sqlite",
          "partial": "Else",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#t:Else"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe AST node corresponding to the \u003ccode\u003eESCAPE\u003c/code\u003e subclause of a textual comparison\n   expression.  Used by \u003ccode\u003e\u003ca\u003eExpressionLike\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "Escape",
          "package": "language-sqlite",
          "source": "src/Language-SQL-SQLite-Types.html#Escape",
          "type": "data"
        },
        "index": {
          "description": "The AST node corresponding to the ESCAPE subclause of textual comparison expression Used by ExpressionLike",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "Escape",
          "package": "language-sqlite",
          "partial": "Escape",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#t:Escape"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type synonym which matches only the AST node corresponding to\n   an \u003ccode\u003eEXPLAIN\u003c/code\u003e statement.\n   Useful at top level.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "Explain",
          "package": "language-sqlite",
          "source": "src/Language-SQL-SQLite-Types.html#Explain",
          "type": "type"
        },
        "index": {
          "description": "type synonym which matches only the AST node corresponding to an EXPLAIN statement Useful at top level",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "Explain",
          "package": "language-sqlite",
          "partial": "Explain",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#t:Explain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type synonym which matches only the AST node corresponding to\n   an \u003ccode\u003eEXPLAIN QUERY PLAN\u003c/code\u003e statement.\n   Useful at top level.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "ExplainQueryPlan",
          "package": "language-sqlite",
          "source": "src/Language-SQL-SQLite-Types.html#ExplainQueryPlan",
          "type": "type"
        },
        "index": {
          "description": "type synonym which matches only the AST node corresponding to an EXPLAIN QUERY PLAN statement Useful at top level",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "ExplainQueryPlan",
          "package": "language-sqlite",
          "partial": "Explain Query Plan",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#t:ExplainQueryPlan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "ExplainableStatement",
          "package": "language-sqlite",
          "source": "src/Language-SQL-SQLite-Types.html#ExplainableStatement",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "ExplainableStatement",
          "package": "language-sqlite",
          "partial": "Explainable Statement",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#t:ExplainableStatement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe AST node corresponding to an expression.  Used by \u003ccode\u003e\u003ca\u003eDefaultValue\u003c/a\u003e\u003c/code\u003e,\n   \u003ccode\u003e\u003ca\u003eColumnConstraint\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eTableConstraint\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eOrderingTerm\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eInsertBody\u003c/a\u003e\u003c/code\u003e,\n   \u003ccode\u003e\u003ca\u003eMaybeHaving\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eResultColumn\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eJoinConstraint\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eWhereClause\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eWhenClause\u003c/a\u003e\u003c/code\u003e,\n   \u003ccode\u003e\u003ca\u003eUpdate\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003eUpdateLimited\u003c/a\u003e\u003c/code\u003e.  Also useful at top level.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "Expression",
          "package": "language-sqlite",
          "source": "src/Language-SQL-SQLite-Types.html#Expression",
          "type": "data"
        },
        "index": {
          "description": "The AST node corresponding to an expression Used by DefaultValue ColumnConstraint TableConstraint OrderingTerm InsertBody MaybeHaving ResultColumn JoinConstraint WhereClause WhenClause Update and UpdateLimited Also useful at top level",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "Expression",
          "package": "language-sqlite",
          "partial": "Expression",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#t:Expression"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe AST node corresponding to a \u003ccode\u003eFOREIGN KEY\u003c/code\u003e clause.  Used by\n   \u003ccode\u003e\u003ca\u003eColumnConstraint\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eTableConstraint\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "ForeignKeyClause",
          "package": "language-sqlite",
          "source": "src/Language-SQL-SQLite-Types.html#ForeignKeyClause",
          "type": "data"
        },
        "index": {
          "description": "The AST node corresponding to FOREIGN KEY clause Used by ColumnConstraint and TableConstraint",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "ForeignKeyClause",
          "package": "language-sqlite",
          "partial": "Foreign Key Clause",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#t:ForeignKeyClause"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe AST node corresponding to the first partial body of a \u003ccode\u003eFOREIGN KEY\u003c/code\u003e clause.\n   Used by \u003ccode\u003e\u003ca\u003eForeignKeyClause\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "ForeignKeyClauseActionOrMatchPart",
          "package": "language-sqlite",
          "source": "src/Language-SQL-SQLite-Types.html#ForeignKeyClauseActionOrMatchPart",
          "type": "data"
        },
        "index": {
          "description": "The AST node corresponding to the first partial body of FOREIGN KEY clause Used by ForeignKeyClause",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "ForeignKeyClauseActionOrMatchPart",
          "package": "language-sqlite",
          "partial": "Foreign Key Clause Action Or Match Part",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#t:ForeignKeyClauseActionOrMatchPart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe AST node corresponding to an action subclause in the first partial body of\n   a \u003ccode\u003eFOREIGN KEY\u003c/code\u003e clause.  Used by \u003ccode\u003e\u003ca\u003eForeignKeyClauseActionOrMatchPart\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "ForeignKeyClauseActionPart",
          "package": "language-sqlite",
          "source": "src/Language-SQL-SQLite-Types.html#ForeignKeyClauseActionPart",
          "type": "data"
        },
        "index": {
          "description": "The AST node corresponding to an action subclause in the first partial body of FOREIGN KEY clause Used by ForeignKeyClauseActionOrMatchPart",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "ForeignKeyClauseActionPart",
          "package": "language-sqlite",
          "partial": "Foreign Key Clause Action Part",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#t:ForeignKeyClauseActionPart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe AST node corresponding to a \u003ccode\u003eFROM\u003c/code\u003e clause.  Used by \u003ccode\u003e\u003ca\u003eSelectCore\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "FromClause",
          "package": "language-sqlite",
          "source": "src/Language-SQL-SQLite-Types.html#FromClause",
          "type": "data"
        },
        "index": {
          "description": "The AST node corresponding to FROM clause Used by SelectCore",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "FromClause",
          "package": "language-sqlite",
          "partial": "From Clause",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#t:FromClause"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe AST node corresponding to a \u003ccode\u003eGROUP BY\u003c/code\u003e clause.  Used by \u003ccode\u003e\u003ca\u003eSelectCore\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "GroupClause",
          "package": "language-sqlite",
          "source": "src/Language-SQL-SQLite-Types.html#GroupClause",
          "type": "data"
        },
        "index": {
          "description": "The AST node corresponding to GROUP BY clause Used by SelectCore",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "GroupClause",
          "package": "language-sqlite",
          "partial": "Group Clause",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#t:GroupClause"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA class implemented by all identifiers regardless of how many levels of\n   qualification they allow.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "Identifier",
          "package": "language-sqlite",
          "source": "src/Language-SQL-SQLite-Types.html#Identifier",
          "type": "class"
        },
        "index": {
          "description": "class implemented by all identifiers regardless of how many levels of qualification they allow",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "Identifier",
          "package": "language-sqlite",
          "partial": "Identifier",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#t:Identifier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe AST node corresponding to an indexed-column subclause.  Used by\n   \u003ccode\u003e\u003ca\u003eTableConstraint\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eCreateIndex\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "IndexedColumn",
          "package": "language-sqlite",
          "source": "src/Language-SQL-SQLite-Types.html#IndexedColumn",
          "type": "data"
        },
        "index": {
          "description": "The AST node corresponding to an indexed-column subclause Used by TableConstraint and CreateIndex",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "IndexedColumn",
          "package": "language-sqlite",
          "partial": "Indexed Column",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#t:IndexedColumn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type synonym which matches only the AST node corresponding to\n   an \u003ccode\u003eINSERT\u003c/code\u003e statement.\n   Useful at top level.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "Insert",
          "package": "language-sqlite",
          "source": "src/Language-SQL-SQLite-Types.html#Insert",
          "type": "type"
        },
        "index": {
          "description": "type synonym which matches only the AST node corresponding to an INSERT statement Useful at top level",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "Insert",
          "package": "language-sqlite",
          "partial": "Insert",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#t:Insert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe AST node corresponding to an insert body.  Used by \u003ccode\u003e\u003ca\u003eInsert\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "InsertBody",
          "package": "language-sqlite",
          "source": "src/Language-SQL-SQLite-Types.html#InsertBody",
          "type": "data"
        },
        "index": {
          "description": "The AST node corresponding to an insert body Used by Insert",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "InsertBody",
          "package": "language-sqlite",
          "partial": "Insert Body",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#t:InsertBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe AST node corresponding to an insert head.  Used by \u003ccode\u003e\u003ca\u003eInsert\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "InsertHead",
          "package": "language-sqlite",
          "source": "src/Language-SQL-SQLite-Types.html#InsertHead",
          "type": "data"
        },
        "index": {
          "description": "The AST node corresponding to an insert head Used by Insert",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "InsertHead",
          "package": "language-sqlite",
          "partial": "Insert Head",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#t:InsertHead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe AST node corresponding to a join constraint, a qualifier in the \u003ccode\u003eFROM\u003c/code\u003e\n   clause of a \u003ccode\u003eSELECT\u003c/code\u003e statement.  Used by \u003ccode\u003e\u003ca\u003eJoinSource\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "JoinConstraint",
          "package": "language-sqlite",
          "source": "src/Language-SQL-SQLite-Types.html#JoinConstraint",
          "type": "data"
        },
        "index": {
          "description": "The AST node corresponding to join constraint qualifier in the FROM clause of SELECT statement Used by JoinSource",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "JoinConstraint",
          "package": "language-sqlite",
          "partial": "Join Constraint",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#t:JoinConstraint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe AST node corresponding to a join operation, a conjunction in the \u003ccode\u003eFROM\u003c/code\u003e\n   clause of a \u003ccode\u003eSELECT\u003c/code\u003e statement.  Used by \u003ccode\u003e\u003ca\u003eJoinSource\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "JoinOperation",
          "package": "language-sqlite",
          "source": "src/Language-SQL-SQLite-Types.html#JoinOperation",
          "type": "data"
        },
        "index": {
          "description": "The AST node corresponding to join operation conjunction in the FROM clause of SELECT statement Used by JoinSource",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "JoinOperation",
          "package": "language-sqlite",
          "partial": "Join Operation",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#t:JoinOperation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe AST node corresponding to a source from which to join columns in a \u003ccode\u003eSELECT\u003c/code\u003e\n   statement, which may be the head of the statement's \u003ccode\u003eFROM\u003c/code\u003e clause, or, in the\n   case of a subjoin, only part of it.  Used by \u003ccode\u003e\u003ca\u003eFromClause\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eSingleSource\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "JoinSource",
          "package": "language-sqlite",
          "source": "src/Language-SQL-SQLite-Types.html#JoinSource",
          "type": "data"
        },
        "index": {
          "description": "The AST node corresponding to source from which to join columns in SELECT statement which may be the head of the statement FROM clause or in the case of subjoin only part of it Used by FromClause and SingleSource",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "JoinSource",
          "package": "language-sqlite",
          "partial": "Join Source",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#t:JoinSource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe AST node corresponding to a textual comparison operator in an expression.\n   Used by \u003ccode\u003e\u003ca\u003eExpressionLike\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "LikeType",
          "package": "language-sqlite",
          "source": "src/Language-SQL-SQLite-Types.html#LikeType",
          "type": "data"
        },
        "index": {
          "description": "The AST node corresponding to textual comparison operator in an expression Used by ExpressionLike",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "LikeType",
          "package": "language-sqlite",
          "partial": "Like Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#t:LikeType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe AST node corresponding to a \u003ccode\u003eLIMIT\u003c/code\u003e clause.  Used by \u003ccode\u003e\u003ca\u003eSelect\u003c/a\u003e\u003c/code\u003e,\n   \u003ccode\u003e\u003ca\u003eDeleteLimited\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003eUpdateLimited\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "LimitClause",
          "package": "language-sqlite",
          "source": "src/Language-SQL-SQLite-Types.html#LimitClause",
          "type": "data"
        },
        "index": {
          "description": "The AST node corresponding to LIMIT clause Used by Select DeleteLimited and UpdateLimited",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "LimitClause",
          "package": "language-sqlite",
          "partial": "Limit Clause",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#t:LimitClause"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe AST node corresponding to an optional \u003ccode\u003eAS\u003c/code\u003e subclause, possibly with the\n   actual keyword elided.  Used by \u003ccode\u003e\u003ca\u003eResultColumn\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eSingleSource\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "MaybeAs",
          "package": "language-sqlite",
          "source": "src/Language-SQL-SQLite-Types.html#MaybeAs",
          "type": "data"
        },
        "index": {
          "description": "The AST node corresponding to an optional AS subclause possibly with the actual keyword elided Used by ResultColumn and SingleSource",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "MaybeAs",
          "package": "language-sqlite",
          "partial": "Maybe As",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#t:MaybeAs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe AST node corresponding to an optional \u003ccode\u003eASC\u003c/code\u003e or \u003ccode\u003eDESC\u003c/code\u003e qualifier.  Used by\n   \u003ccode\u003e\u003ca\u003eIndexedColumn\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eColumnConstraint\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003eOrderingTerm\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "MaybeAscDesc",
          "package": "language-sqlite",
          "source": "src/Language-SQL-SQLite-Types.html#MaybeAscDesc",
          "type": "data"
        },
        "index": {
          "description": "The AST node corresponding to an optional ASC or DESC qualifier Used by IndexedColumn ColumnConstraint and OrderingTerm",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "MaybeAscDesc",
          "package": "language-sqlite",
          "partial": "Maybe Asc Desc",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#t:MaybeAscDesc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe AST node corresponding to an optional \u003ccode\u003eAUTOINCREMENT\u003c/code\u003e qualifier.  Used by\n   \u003ccode\u003e\u003ca\u003eColumnConstraint\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "MaybeAutoincrement",
          "package": "language-sqlite",
          "source": "src/Language-SQL-SQLite-Types.html#MaybeAutoincrement",
          "type": "data"
        },
        "index": {
          "description": "The AST node corresponding to an optional AUTOINCREMENT qualifier Used by ColumnConstraint",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "MaybeAutoincrement",
          "package": "language-sqlite",
          "partial": "Maybe Autoincrement",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#t:MaybeAutoincrement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe AST node corresponding to an optional \u003ccode\u003eCOLLATE\u003c/code\u003e subclause.  Used by\n   \u003ccode\u003e\u003ca\u003eIndexedColumn\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eOrderingTerm\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "MaybeCollation",
          "package": "language-sqlite",
          "source": "src/Language-SQL-SQLite-Types.html#MaybeCollation",
          "type": "data"
        },
        "index": {
          "description": "The AST node corresponding to an optional COLLATE subclause Used by IndexedColumn and OrderingTerm",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "MaybeCollation",
          "package": "language-sqlite",
          "partial": "Maybe Collation",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#t:MaybeCollation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe AST node corresponding to an optional \u003ccode\u003eCOLUMN\u003c/code\u003e keyword.\n   Used by \u003ccode\u003e\u003ca\u003eAlterTableBody\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "MaybeColumn",
          "package": "language-sqlite",
          "source": "src/Language-SQL-SQLite-Types.html#MaybeColumn",
          "type": "data"
        },
        "index": {
          "description": "The AST node corresponding to an optional COLUMN keyword Used by AlterTableBody",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "MaybeColumn",
          "package": "language-sqlite",
          "partial": "Maybe Column",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#t:MaybeColumn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe AST node corresponding to an optional constraint name subclause.  Used by\n   \u003ccode\u003e\u003ca\u003eColumnConstraint\u003c/a\u003e\u003c/code\u003e and 'Table Constraint'.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "MaybeConstraintName",
          "package": "language-sqlite",
          "source": "src/Language-SQL-SQLite-Types.html#MaybeConstraintName",
          "type": "data"
        },
        "index": {
          "description": "The AST node corresponding to an optional constraint name subclause Used by ColumnConstraint and Table Constraint",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "MaybeConstraintName",
          "package": "language-sqlite",
          "partial": "Maybe Constraint Name",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#t:MaybeConstraintName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe AST node corresponding to an optional \u003ccode\u003eDATABASE\u003c/code\u003e keyword.  Used by\n   \u003ccode\u003e\u003ca\u003eAttach\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eDetach\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "MaybeDatabase",
          "package": "language-sqlite",
          "source": "src/Language-SQL-SQLite-Types.html#MaybeDatabase",
          "type": "data"
        },
        "index": {
          "description": "The AST node corresponding to an optional DATABASE keyword Used by Attach and Detach",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "MaybeDatabase",
          "package": "language-sqlite",
          "partial": "Maybe Database",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#t:MaybeDatabase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe AST node corresponding to an optional \u003ccode\u003eFOR EACH ROW\u003c/code\u003e qualifier.  Used by\n   \u003ccode\u003e\u003ca\u003eCreateTrigger\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "MaybeForEachRow",
          "package": "language-sqlite",
          "source": "src/Language-SQL-SQLite-Types.html#MaybeForEachRow",
          "type": "data"
        },
        "index": {
          "description": "The AST node corresponding to an optional FOR EACH ROW qualifier Used by CreateTrigger",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "MaybeForEachRow",
          "package": "language-sqlite",
          "partial": "Maybe For Each Row",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#t:MaybeForEachRow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe AST node corresponding to the second partial body of a \u003ccode\u003eFOREIGN KEY\u003c/code\u003e clause.\n   Used by \u003ccode\u003e\u003ca\u003eForeignKeyClause\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "MaybeForeignKeyClauseDeferrablePart",
          "package": "language-sqlite",
          "source": "src/Language-SQL-SQLite-Types.html#MaybeForeignKeyClauseDeferrablePart",
          "type": "data"
        },
        "index": {
          "description": "The AST node corresponding to the second partial body of FOREIGN KEY clause Used by ForeignKeyClause",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "MaybeForeignKeyClauseDeferrablePart",
          "package": "language-sqlite",
          "partial": "Maybe Foreign Key Clause Deferrable Part",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#t:MaybeForeignKeyClauseDeferrablePart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe AST node corresponding to an optional \u003ccode\u003eHAVING\u003c/code\u003e subclause.  Used by\n   \u003ccode\u003e\u003ca\u003eGroupClause\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "MaybeHaving",
          "package": "language-sqlite",
          "source": "src/Language-SQL-SQLite-Types.html#MaybeHaving",
          "type": "data"
        },
        "index": {
          "description": "The AST node corresponding to an optional HAVING subclause Used by GroupClause",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "MaybeHaving",
          "package": "language-sqlite",
          "partial": "Maybe Having",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#t:MaybeHaving"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe AST node corresponding to an optional \u003ccode\u003eIF EXISTS\u003c/code\u003e qualifier.  Used by\n   \u003ccode\u003e\u003ca\u003eDropIndex\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eDropTable\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eDropTrigger\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003eDropView\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "MaybeIfExists",
          "package": "language-sqlite",
          "source": "src/Language-SQL-SQLite-Types.html#MaybeIfExists",
          "type": "data"
        },
        "index": {
          "description": "The AST node corresponding to an optional IF EXISTS qualifier Used by DropIndex DropTable DropTrigger and DropView",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "MaybeIfExists",
          "package": "language-sqlite",
          "partial": "Maybe If Exists",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#t:MaybeIfExists"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe AST node corresponding to an optional \u003ccode\u003eIF NOT EXISTS\u003c/code\u003e qualifier.  Used by\n   \u003ccode\u003e\u003ca\u003eCreateIndex\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eCreateTable\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eCreateTrigger\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003eCreateView\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "MaybeIfNotExists",
          "package": "language-sqlite",
          "source": "src/Language-SQL-SQLite-Types.html#MaybeIfNotExists",
          "type": "data"
        },
        "index": {
          "description": "The AST node corresponding to an optional IF NOT EXISTS qualifier Used by CreateIndex CreateTable CreateTrigger and CreateView",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "MaybeIfNotExists",
          "package": "language-sqlite",
          "partial": "Maybe If Not Exists",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#t:MaybeIfNotExists"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe AST node corresponding to an optional \u003ccode\u003eINDEXED BY\u003c/code\u003e or \u003ccode\u003eNOT INDEXED\u003c/code\u003e qualifier.\n   Used by \u003ccode\u003e\u003ca\u003eSingleSource\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "MaybeIndexedBy",
          "package": "language-sqlite",
          "source": "src/Language-SQL-SQLite-Types.html#MaybeIndexedBy",
          "type": "data"
        },
        "index": {
          "description": "The AST node corresponding to an optional INDEXED BY or NOT INDEXED qualifier Used by SingleSource",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "MaybeIndexedBy",
          "package": "language-sqlite",
          "partial": "Maybe Indexed By",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#t:MaybeIndexedBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe AST node corresponding to an optional \u003ccode\u003eINITIALLY DEFERRED\u003c/code\u003e or\n   \u003ccode\u003eINITIALLY IMMEDIATE\u003c/code\u003e qualifier in a \u003ccode\u003eFOREIGN KEY\u003c/code\u003e clause.  Used by\n   \u003ccode\u003e\u003ca\u003eMaybeForeignKeyClauseDeferrablePart\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "MaybeInitialDeferralStatus",
          "package": "language-sqlite",
          "source": "src/Language-SQL-SQLite-Types.html#MaybeInitialDeferralStatus",
          "type": "data"
        },
        "index": {
          "description": "The AST node corresponding to an optional INITIALLY DEFERRED or INITIALLY IMMEDIATE qualifier in FOREIGN KEY clause Used by MaybeForeignKeyClauseDeferrablePart",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "MaybeInitialDeferralStatus",
          "package": "language-sqlite",
          "partial": "Maybe Initial Deferral Status",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#t:MaybeInitialDeferralStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe AST node corresponding to an optional \u003ccode\u003eRELEASE SAVEPOINT\u003c/code\u003e qualifier.\n   Used by \u003ccode\u003e\u003ca\u003eRelease\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "MaybeReleaseSavepoint",
          "package": "language-sqlite",
          "source": "src/Language-SQL-SQLite-Types.html#MaybeReleaseSavepoint",
          "type": "data"
        },
        "index": {
          "description": "The AST node corresponding to an optional RELEASE SAVEPOINT qualifier Used by Release",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "MaybeReleaseSavepoint",
          "package": "language-sqlite",
          "partial": "Maybe Release Savepoint",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#t:MaybeReleaseSavepoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe AST node corresponding to an optional \u003ccode\u003eTO SAVEPOINT\u003c/code\u003e qualifier.  Used by\n   \u003ccode\u003e\u003ca\u003eRollback\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "MaybeSavepoint",
          "package": "language-sqlite",
          "source": "src/Language-SQL-SQLite-Types.html#MaybeSavepoint",
          "type": "data"
        },
        "index": {
          "description": "The AST node corresponding to an optional TO SAVEPOINT qualifier Used by Rollback",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "MaybeSavepoint",
          "package": "language-sqlite",
          "partial": "Maybe Savepoint",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#t:MaybeSavepoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe AST node corresponding to an optional \u003ccode\u003e+\u003c/code\u003e or \u003ccode\u003e-\u003c/code\u003e sign.  Used by\n   \u003ccode\u003e\u003ca\u003eTypeSizeField\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eDefaultValue\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003ePragmaValue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "MaybeSign",
          "package": "language-sqlite",
          "source": "src/Language-SQL-SQLite-Types.html#MaybeSign",
          "type": "data"
        },
        "index": {
          "description": "The AST node corresponding to an optional or sign Used by TypeSizeField DefaultValue and PragmaValue",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "MaybeSign",
          "package": "language-sqlite",
          "partial": "Maybe Sign",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#t:MaybeSign"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe AST node corresponding to the optional first subexpression in a \u003ccode\u003eCASE\u003c/code\u003e\n   expression.  Used by \u003ccode\u003e\u003ca\u003eExpressionCase\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "MaybeSwitchExpression",
          "package": "language-sqlite",
          "source": "src/Language-SQL-SQLite-Types.html#MaybeSwitchExpression",
          "type": "data"
        },
        "index": {
          "description": "The AST node corresponding to the optional first subexpression in CASE expression Used by ExpressionCase",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "MaybeSwitchExpression",
          "package": "language-sqlite",
          "partial": "Maybe Switch Expression",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#t:MaybeSwitchExpression"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe AST node corresponding to an optional \u003ccode\u003eTEMP\u003c/code\u003e or \u003ccode\u003eTEMPORARY\u003c/code\u003e qualifier.  Used\n   by \u003ccode\u003e\u003ca\u003eCreateTable\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eCreateTrigger\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003eCreateView\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "MaybeTemporary",
          "package": "language-sqlite",
          "source": "src/Language-SQL-SQLite-Types.html#MaybeTemporary",
          "type": "data"
        },
        "index": {
          "description": "The AST node corresponding to an optional TEMP or TEMPORARY qualifier Used by CreateTable CreateTrigger and CreateView",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "MaybeTemporary",
          "package": "language-sqlite",
          "partial": "Maybe Temporary",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#t:MaybeTemporary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe AST node corresponding to an optional \u003ccode\u003eTRASACTION\u003c/code\u003e keyword.  Used by\n   \u003ccode\u003e\u003ca\u003eBegin\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eCommit\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003eRollback\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "MaybeTransaction",
          "package": "language-sqlite",
          "source": "src/Language-SQL-SQLite-Types.html#MaybeTransaction",
          "type": "data"
        },
        "index": {
          "description": "The AST node corresponding to an optional TRASACTION keyword Used by Begin Commit and Rollback",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "MaybeTransaction",
          "package": "language-sqlite",
          "partial": "Maybe Transaction",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#t:MaybeTransaction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe AST node corresponding to an optional transaction-type qualifier.  Used\n   by \u003ccode\u003e\u003ca\u003eBegin\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "MaybeTransactionType",
          "package": "language-sqlite",
          "source": "src/Language-SQL-SQLite-Types.html#MaybeTransactionType",
          "type": "data"
        },
        "index": {
          "description": "The AST node corresponding to an optional transaction-type qualifier Used by Begin",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "MaybeTransactionType",
          "package": "language-sqlite",
          "partial": "Maybe Transaction Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#t:MaybeTransactionType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe AST node corresponding to an optional column type.  Used by \u003ccode\u003e\u003ca\u003eColumnDefinition\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "MaybeType",
          "package": "language-sqlite",
          "source": "src/Language-SQL-SQLite-Types.html#MaybeType",
          "type": "data"
        },
        "index": {
          "description": "The AST node corresponding to an optional column type Used by ColumnDefinition",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "MaybeType",
          "package": "language-sqlite",
          "partial": "Maybe Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#t:MaybeType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "MaybeTypeName",
          "package": "language-sqlite",
          "source": "src/Language-SQL-SQLite-Types.html#MaybeTypeName",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "MaybeTypeName",
          "package": "language-sqlite",
          "partial": "Maybe Type Name",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#t:MaybeTypeName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe AST node corresponding to an optional size annotation on a column or value\n   type.  Used by \u003ccode\u003e\u003ca\u003eType\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "MaybeTypeSize",
          "package": "language-sqlite",
          "source": "src/Language-SQL-SQLite-Types.html#MaybeTypeSize",
          "type": "data"
        },
        "index": {
          "description": "The AST node corresponding to an optional size annotation on column or value type Used by Type",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "MaybeTypeSize",
          "package": "language-sqlite",
          "partial": "Maybe Type Size",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#t:MaybeTypeSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe AST node corresponding to an optional \u003ccode\u003eUNIQUE\u003c/code\u003e qualifier.  Used by\n   \u003ccode\u003e\u003ca\u003eCreateIndex\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "MaybeUnique",
          "package": "language-sqlite",
          "source": "src/Language-SQL-SQLite-Types.html#MaybeUnique",
          "type": "data"
        },
        "index": {
          "description": "The AST node corresponding to an optional UNIQUE qualifier Used by CreateIndex",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "MaybeUnique",
          "package": "language-sqlite",
          "partial": "Maybe Unique",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#t:MaybeUnique"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe AST node corresponding to a module argument.  Used by \u003ccode\u003e\u003ca\u003eCreateVirtualTable\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "ModuleArgument",
          "package": "language-sqlite",
          "source": "src/Language-SQL-SQLite-Types.html#ModuleArgument",
          "type": "data"
        },
        "index": {
          "description": "The AST node corresponding to module argument Used by CreateVirtualTable",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "ModuleArgument",
          "package": "language-sqlite",
          "partial": "Module Argument",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#t:ModuleArgument"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA class with hidden implementation so as to enforce the constraint that\n   it is a nonnegative double.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "NonnegativeDouble",
          "package": "language-sqlite",
          "source": "src/Language-SQL-SQLite-Types.html#NonnegativeDouble",
          "type": "data"
        },
        "index": {
          "description": "class with hidden implementation so as to enforce the constraint that it is nonnegative double",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "NonnegativeDouble",
          "package": "language-sqlite",
          "partial": "Nonnegative Double",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#t:NonnegativeDouble"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA class with hidden implementation so as to enforce the constraint that\n   it is a nonempty homogeneous list of items.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "OneOrMore",
          "package": "language-sqlite",
          "source": "src/Language-SQL-SQLite-Types.html#OneOrMore",
          "type": "data"
        },
        "index": {
          "description": "class with hidden implementation so as to enforce the constraint that it is nonempty homogeneous list of items",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "OneOrMore",
          "package": "language-sqlite",
          "partial": "One Or More",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#t:OneOrMore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe AST node corresponding to an \u003ccode\u003eORDER BY\u003c/code\u003e clause.  Used by \u003ccode\u003e\u003ca\u003eSelect\u003c/a\u003e\u003c/code\u003e,\n   \u003ccode\u003e\u003ca\u003eDeleteLimited\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003eUpdateLimited\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "OrderClause",
          "package": "language-sqlite",
          "source": "src/Language-SQL-SQLite-Types.html#OrderClause",
          "type": "data"
        },
        "index": {
          "description": "The AST node corresponding to an ORDER BY clause Used by Select DeleteLimited and UpdateLimited",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "OrderClause",
          "package": "language-sqlite",
          "partial": "Order Clause",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#t:OrderClause"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe AST node corresponding to an ordering term subclause.  Used by\n   \u003ccode\u003e\u003ca\u003eGroupClause\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eOrderClause\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "OrderingTerm",
          "package": "language-sqlite",
          "source": "src/Language-SQL-SQLite-Types.html#OrderingTerm",
          "type": "data"
        },
        "index": {
          "description": "The AST node corresponding to an ordering term subclause Used by GroupClause and OrderClause",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "OrderingTerm",
          "package": "language-sqlite",
          "partial": "Ordering Term",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#t:OrderingTerm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "ParseError",
          "package": "language-sqlite",
          "source": "src/Language-SQL-SQLite-Syntax.html#ParseError",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "ParseError",
          "package": "language-sqlite",
          "partial": "Parse Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#t:ParseError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type synonym which matches only the AST node corresponding to\n   a \u003ccode\u003ePRAGMA\u003c/code\u003e statement.\n   Useful at top level.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "Pragma",
          "package": "language-sqlite",
          "source": "src/Language-SQL-SQLite-Types.html#Pragma",
          "type": "type"
        },
        "index": {
          "description": "type synonym which matches only the AST node corresponding to PRAGMA statement Useful at top level",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "Pragma",
          "package": "language-sqlite",
          "partial": "Pragma",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#t:Pragma"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe AST node corresponding to a pragma body.  Used by \u003ccode\u003e\u003ca\u003ePragma\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "PragmaBody",
          "package": "language-sqlite",
          "source": "src/Language-SQL-SQLite-Types.html#PragmaBody",
          "type": "data"
        },
        "index": {
          "description": "The AST node corresponding to pragma body Used by Pragma",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "PragmaBody",
          "package": "language-sqlite",
          "partial": "Pragma Body",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#t:PragmaBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe AST node corresponding to a pragma value subclause.  Used by \u003ccode\u003e\u003ca\u003ePragmaBody\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "PragmaValue",
          "package": "language-sqlite",
          "source": "src/Language-SQL-SQLite-Types.html#PragmaValue",
          "type": "data"
        },
        "index": {
          "description": "The AST node corresponding to pragma value subclause Used by PragmaBody",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "PragmaValue",
          "package": "language-sqlite",
          "partial": "Pragma Value",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#t:PragmaValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe AST node corresponding to a qualified table name subclause.  Used by\n   \u003ccode\u003e\u003ca\u003eDelete\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eDeleteLimited\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eUpdate\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003eUpdateLimited\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "QualifiedTableName",
          "package": "language-sqlite",
          "source": "src/Language-SQL-SQLite-Types.html#QualifiedTableName",
          "type": "data"
        },
        "index": {
          "description": "The AST node corresponding to qualified table name subclause Used by Delete DeleteLimited Update and UpdateLimited",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "QualifiedTableName",
          "package": "language-sqlite",
          "partial": "Qualified Table Name",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#t:QualifiedTableName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type synonym which matches only the AST node corresponding to\n   a \u003ccode\u003eREINDEX\u003c/code\u003e statement.\n   Useful at top level.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "Reindex",
          "package": "language-sqlite",
          "source": "src/Language-SQL-SQLite-Types.html#Reindex",
          "type": "type"
        },
        "index": {
          "description": "type synonym which matches only the AST node corresponding to REINDEX statement Useful at top level",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "Reindex",
          "package": "language-sqlite",
          "partial": "Reindex",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#t:Reindex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type synonym which matches only the AST node corresponding to\n   a \u003ccode\u003eRELEASE\u003c/code\u003e statement.\n   Useful at top level.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "Release",
          "package": "language-sqlite",
          "source": "src/Language-SQL-SQLite-Types.html#Release",
          "type": "type"
        },
        "index": {
          "description": "type synonym which matches only the AST node corresponding to RELEASE statement Useful at top level",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "Release",
          "package": "language-sqlite",
          "partial": "Release",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#t:Release"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe AST node corresponding to a result column in a \u003ccode\u003eSELECT\u003c/code\u003e statement.  Used by\n   \u003ccode\u003e\u003ca\u003eSelectCore\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "ResultColumn",
          "package": "language-sqlite",
          "source": "src/Language-SQL-SQLite-Types.html#ResultColumn",
          "type": "data"
        },
        "index": {
          "description": "The AST node corresponding to result column in SELECT statement Used by SelectCore",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "ResultColumn",
          "package": "language-sqlite",
          "partial": "Result Column",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#t:ResultColumn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type synonym which matches only the AST node corresponding to\n   a \u003ccode\u003eROLLBACK\u003c/code\u003e statement.\n   Useful at top level.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "Rollback",
          "package": "language-sqlite",
          "source": "src/Language-SQL-SQLite-Types.html#Rollback",
          "type": "type"
        },
        "index": {
          "description": "type synonym which matches only the AST node corresponding to ROLLBACK statement Useful at top level",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "Rollback",
          "package": "language-sqlite",
          "partial": "Rollback",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#t:Rollback"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type synonym which matches only the AST node corresponding to\n   a \u003ccode\u003eSAVEPOINT\u003c/code\u003e statement.\n   Useful at top level.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "Savepoint",
          "package": "language-sqlite",
          "source": "src/Language-SQL-SQLite-Types.html#Savepoint",
          "type": "type"
        },
        "index": {
          "description": "type synonym which matches only the AST node corresponding to SAVEPOINT statement Useful at top level",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "Savepoint",
          "package": "language-sqlite",
          "partial": "Savepoint",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#t:Savepoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type synonym which matches only the AST node corresponding to\n   a \u003ccode\u003eSELECT\u003c/code\u003e statement.\n   Useful at top level.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "Select",
          "package": "language-sqlite",
          "source": "src/Language-SQL-SQLite-Types.html#Select",
          "type": "type"
        },
        "index": {
          "description": "type synonym which matches only the AST node corresponding to SELECT statement Useful at top level",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "Select",
          "package": "language-sqlite",
          "partial": "Select",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#t:Select"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe AST node corresponding to the core part of a \u003ccode\u003eSELECT\u003c/code\u003e statement, which may\n   be the head of the overall statement, or, in the case of a compound \u003ccode\u003eSELECT\u003c/code\u003e,\n   only part of it.  Used by \u003ccode\u003e\u003ca\u003eSelect\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "SelectCore",
          "package": "language-sqlite",
          "source": "src/Language-SQL-SQLite-Types.html#SelectCore",
          "type": "data"
        },
        "index": {
          "description": "The AST node corresponding to the core part of SELECT statement which may be the head of the overall statement or in the case of compound SELECT only part of it Used by Select",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "SelectCore",
          "package": "language-sqlite",
          "partial": "Select Core",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#t:SelectCore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA class implemented by every node of the AST; converts the node and its\n   children into a list of tokens which correspond to the SQL representation\n   of the node.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "ShowTokens",
          "package": "language-sqlite",
          "source": "src/Language-SQL-SQLite-Types.html#ShowTokens",
          "type": "class"
        },
        "index": {
          "description": "class implemented by every node of the AST converts the node and its children into list of tokens which correspond to the SQL representation of the node",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "ShowTokens",
          "package": "language-sqlite",
          "partial": "Show Tokens",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#t:ShowTokens"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe AST node corresponding to a primitive source from which to join columns in\n   a \u003ccode\u003eSELECT\u003c/code\u003e statement, which is a body of the statement's \u003ccode\u003eFROM\u003c/code\u003e clause.  Used by\n   \u003ccode\u003e\u003ca\u003eJoinSource\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "SingleSource",
          "package": "language-sqlite",
          "source": "src/Language-SQL-SQLite-Types.html#SingleSource",
          "type": "data"
        },
        "index": {
          "description": "The AST node corresponding to primitive source from which to join columns in SELECT statement which is body of the statement FROM clause Used by JoinSource",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "SingleSource",
          "package": "language-sqlite",
          "partial": "Single Source",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#t:SingleSource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn identifier which allows a single level of qualification.  This is typically\n   the name of a table or other database-level object.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "SinglyQualifiedIdentifier",
          "package": "language-sqlite",
          "source": "src/Language-SQL-SQLite-Types.html#SinglyQualifiedIdentifier",
          "type": "data"
        },
        "index": {
          "description": "An identifier which allows single level of qualification This is typically the name of table or other database-level object",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "SinglyQualifiedIdentifier",
          "package": "language-sqlite",
          "partial": "Singly Qualified Identifier",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#t:SinglyQualifiedIdentifier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe AST node which corresponds to a statement.  Not directly useful at\n   top level because it is a generalized algebraic datatype the type parameters\n   to which are not exported; instead, see the existentially qualified\n   types \u003ccode\u003e\u003ca\u003eAnyStatement\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eExplainableStatement\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003eTriggerStatement\u003c/a\u003e\u003c/code\u003e, and the\n   type synonyms such as \u003ccode\u003e\u003ca\u003eSelect\u003c/a\u003e\u003c/code\u003e which correspond to individual statement types.\n\u003c/p\u003e\u003cp\u003eI apologize for the lack of documentation on these individual entries, but\n   Haddock won't let me do it!  At any rate, each of them is an AST node corresponding\n   to an individual statement type.\n\u003c/p\u003e\u003cp\u003eNote the distinctions between\n   \u003ccode\u003e\u003ca\u003eDelete\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eDeleteLimited\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eUpdate\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eUpdateLimited\u003c/a\u003e\u003c/code\u003e:  The \u003ccode\u003eLimited\u003c/code\u003e ones\n   have \u003ccode\u003eLIMIT\u003c/code\u003e clauses and the others do not.  Because SQL imposes stricter\n   restrictions on where the ones with \u003ccode\u003eLIMIT\u003c/code\u003e clauses can occur, these are are\n   separate types.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "Statement",
          "package": "language-sqlite",
          "source": "src/Language-SQL-SQLite-Types.html#Statement",
          "type": "data"
        },
        "index": {
          "description": "The AST node which corresponds to statement Not directly useful at top level because it is generalized algebraic datatype the type parameters to which are not exported instead see the existentially qualified types AnyStatement ExplainableStatement and TriggerStatement and the type synonyms such as Select which correspond to individual statement types apologize for the lack of documentation on these individual entries but Haddock won let me do it At any rate each of them is an AST node corresponding to an individual statement type Note the distinctions between Delete and DeleteLimited and Update and UpdateLimited The Limited ones have LIMIT clauses and the others do not Because SQL imposes stricter restrictions on where the ones with LIMIT clauses can occur these are are separate types",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "Statement",
          "package": "language-sqlite",
          "partial": "Statement",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#t:Statement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe AST node corresponding to a semicolon-separated list of statements.\n   Used at the top level of an SQL file.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "StatementList",
          "package": "language-sqlite",
          "source": "src/Language-SQL-SQLite-Types.html#StatementList",
          "type": "data"
        },
        "index": {
          "description": "The AST node corresponding to semicolon-separated list of statements Used at the top level of an SQL file",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "StatementList",
          "package": "language-sqlite",
          "partial": "Statement List",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#t:StatementList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe AST node corresponding to a table-constraint subclause.  Used by\n   \u003ccode\u003e\u003ca\u003eCreateTableBody\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "TableConstraint",
          "package": "language-sqlite",
          "source": "src/Language-SQL-SQLite-Types.html#TableConstraint",
          "type": "data"
        },
        "index": {
          "description": "The AST node corresponding to table-constraint subclause Used by CreateTableBody",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "TableConstraint",
          "package": "language-sqlite",
          "partial": "Table Constraint",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#t:TableConstraint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNot an AST node but a token which corresponds to a primitive of SQL syntax.\n   Has an instance of \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e which prints a list of them as syntactically-valid\n   SQL with no line wrapping.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "Token",
          "package": "language-sqlite",
          "source": "src/Language-SQL-SQLite-Types.html#Token",
          "type": "data"
        },
        "index": {
          "description": "Not an AST node but token which corresponds to primitive of SQL syntax Has an instance of Show which prints list of them as syntactically-valid SQL with no line wrapping",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "Token",
          "package": "language-sqlite",
          "partial": "Token",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#t:Token"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe AST node corresponding to a trigger-condition subclause.  Used by\n   \u003ccode\u003e\u003ca\u003eCreateTrigger\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "TriggerCondition",
          "package": "language-sqlite",
          "source": "src/Language-SQL-SQLite-Types.html#TriggerCondition",
          "type": "data"
        },
        "index": {
          "description": "The AST node corresponding to trigger-condition subclause Used by CreateTrigger",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "TriggerCondition",
          "package": "language-sqlite",
          "partial": "Trigger Condition",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#t:TriggerCondition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "TriggerStatement",
          "package": "language-sqlite",
          "source": "src/Language-SQL-SQLite-Types.html#TriggerStatement",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "TriggerStatement",
          "package": "language-sqlite",
          "partial": "Trigger Statement",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#t:TriggerStatement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe AST node corresponding to a trigger-time qualifier.  Used by \u003ccode\u003e\u003ca\u003eCreateTrigger\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "TriggerTime",
          "package": "language-sqlite",
          "source": "src/Language-SQL-SQLite-Types.html#TriggerTime",
          "type": "data"
        },
        "index": {
          "description": "The AST node corresponding to trigger-time qualifier Used by CreateTrigger",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "TriggerTime",
          "package": "language-sqlite",
          "partial": "Trigger Time",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#t:TriggerTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe AST node corresponding to a column or value type.  Used by\n   \u003ccode\u003e\u003ca\u003eMaybeType\u003c/a\u003e\u003c/code\u003e which is used by \u003ccode\u003e\u003ca\u003eColumnDefinition\u003c/a\u003e\u003c/code\u003e, and by \u003ccode\u003e\u003ca\u003eExpressionCast\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "Type",
          "package": "language-sqlite",
          "source": "src/Language-SQL-SQLite-Types.html#Type",
          "type": "data"
        },
        "index": {
          "description": "The AST node corresponding to column or value type Used by MaybeType which is used by ColumnDefinition and by ExpressionCast",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "Type",
          "package": "language-sqlite",
          "partial": "Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#t:Type"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe AST node corresponding to the affinity of a column or value type.\n   Used by \u003ccode\u003e\u003ca\u003eType\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "TypeAffinity",
          "package": "language-sqlite",
          "source": "src/Language-SQL-SQLite-Types.html#TypeAffinity",
          "type": "data"
        },
        "index": {
          "description": "The AST node corresponding to the affinity of column or value type Used by Type",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "TypeAffinity",
          "package": "language-sqlite",
          "partial": "Type Affinity",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#t:TypeAffinity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe AST node corresponding to one of zero to two fields annotating a column or\n   value type with size limits.  Used by \u003ccode\u003e\u003ca\u003eMaybeTypeSize\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "TypeSizeField",
          "package": "language-sqlite",
          "source": "src/Language-SQL-SQLite-Types.html#TypeSizeField",
          "type": "data"
        },
        "index": {
          "description": "The AST node corresponding to one of zero to two fields annotating column or value type with size limits Used by MaybeTypeSize",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "TypeSizeField",
          "package": "language-sqlite",
          "partial": "Type Size Field",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#t:TypeSizeField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn identifier which does not allow any levels of qualification.  This is typically\n   a database name.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "UnqualifiedIdentifier",
          "package": "language-sqlite",
          "source": "src/Language-SQL-SQLite-Types.html#UnqualifiedIdentifier",
          "type": "data"
        },
        "index": {
          "description": "An identifier which does not allow any levels of qualification This is typically database name",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "UnqualifiedIdentifier",
          "package": "language-sqlite",
          "partial": "Unqualified Identifier",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#t:UnqualifiedIdentifier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type synonym which matches only the AST node corresponding to\n   an \u003ccode\u003eUPDATE\u003c/code\u003e statement without a \u003ccode\u003eLIMIT\u003c/code\u003e clause.\n   Useful at top level.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "Update",
          "package": "language-sqlite",
          "source": "src/Language-SQL-SQLite-Types.html#Update",
          "type": "type"
        },
        "index": {
          "description": "type synonym which matches only the AST node corresponding to an UPDATE statement without LIMIT clause Useful at top level",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "Update",
          "package": "language-sqlite",
          "partial": "Update",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#t:Update"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe AST node corresponding to an update head.  Used by \u003ccode\u003e\u003ca\u003eUpdate\u003c/a\u003e\u003c/code\u003e and\n   \u003ccode\u003e\u003ca\u003eUpdateLimited\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "UpdateHead",
          "package": "language-sqlite",
          "source": "src/Language-SQL-SQLite-Types.html#UpdateHead",
          "type": "data"
        },
        "index": {
          "description": "The AST node corresponding to an update head Used by Update and UpdateLimited",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "UpdateHead",
          "package": "language-sqlite",
          "partial": "Update Head",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#t:UpdateHead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type synonym which matches only the AST node corresponding to\n   an \u003ccode\u003eUPDATE\u003c/code\u003e statement with a \u003ccode\u003eLIMIT\u003c/code\u003e clause.\n   Useful at top level.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "UpdateLimited",
          "package": "language-sqlite",
          "source": "src/Language-SQL-SQLite-Types.html#UpdateLimited",
          "type": "type"
        },
        "index": {
          "description": "type synonym which matches only the AST node corresponding to an UPDATE statement with LIMIT clause Useful at top level",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "UpdateLimited",
          "package": "language-sqlite",
          "partial": "Update Limited",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#t:UpdateLimited"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type synonym which matches only the AST node corresponding to\n   a \u003ccode\u003eVACUUM\u003c/code\u003e statement.\n   Useful at top level.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "Vacuum",
          "package": "language-sqlite",
          "source": "src/Language-SQL-SQLite-Types.html#Vacuum",
          "type": "type"
        },
        "index": {
          "description": "type synonym which matches only the AST node corresponding to VACUUM statement Useful at top level",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "Vacuum",
          "package": "language-sqlite",
          "partial": "Vacuum",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#t:Vacuum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe AST node corresponding to a \u003ccode\u003eWHEN\u003c/code\u003e clause.  Used by \u003ccode\u003e\u003ca\u003eCreateTrigger\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "WhenClause",
          "package": "language-sqlite",
          "source": "src/Language-SQL-SQLite-Types.html#WhenClause",
          "type": "data"
        },
        "index": {
          "description": "The AST node corresponding to WHEN clause Used by CreateTrigger",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "WhenClause",
          "package": "language-sqlite",
          "partial": "When Clause",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#t:WhenClause"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe AST node corresponding to a \u003ccode\u003eWHERE\u003c/code\u003e clause.  Used by \u003ccode\u003e\u003ca\u003eSelectCore\u003c/a\u003e\u003c/code\u003e,\n   \u003ccode\u003e\u003ca\u003eDelete\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eDeleteLimited\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eUpdate\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003eUpdateLimited\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "WhereClause",
          "package": "language-sqlite",
          "source": "src/Language-SQL-SQLite-Types.html#WhereClause",
          "type": "data"
        },
        "index": {
          "description": "The AST node corresponding to WHERE clause Used by SelectCore Delete DeleteLimited Update and UpdateLimited",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "WhereClause",
          "package": "language-sqlite",
          "partial": "Where Clause",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#t:WhereClause"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "AddColumn",
          "package": "language-sqlite",
          "signature": "AddColumn MaybeColumn ColumnDefinition",
          "source": "src/Language-SQL-SQLite-Types.html#AlterTableBody",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "AddColumn",
          "package": "language-sqlite",
          "partial": "Add Column",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:AddColumn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "After",
          "package": "language-sqlite",
          "signature": "After",
          "source": "src/Language-SQL-SQLite-Types.html#TriggerTime",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "After",
          "package": "language-sqlite",
          "partial": "After",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:After"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "All",
          "package": "language-sqlite",
          "signature": "All",
          "source": "src/Language-SQL-SQLite-Types.html#Distinctness",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "All",
          "package": "language-sqlite",
          "partial": "All",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:All"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "AlterTable",
          "package": "language-sqlite",
          "signature": "SinglyQualifiedIdentifier -\u003e AlterTableBody -\u003e Statement L0 NT NS AlterTable'",
          "source": "src/Language-SQL-SQLite-Types.html#Statement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "AlterTable",
          "normalized": "SinglyQualifiedIdentifier-\u003eAlterTableBody-\u003eStatement L NT NS AlterTable'",
          "package": "language-sqlite",
          "partial": "Alter Table",
          "signature": "SinglyQualifiedIdentifier-\u003eAlterTableBody-\u003eStatement L NT NS AlterTable'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:AlterTable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "Analyze",
          "package": "language-sqlite",
          "signature": "SinglyQualifiedIdentifier -\u003e Statement L0 NT NS Analyze'",
          "source": "src/Language-SQL-SQLite-Types.html#Statement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "Analyze",
          "normalized": "SinglyQualifiedIdentifier-\u003eStatement L NT NS Analyze'",
          "package": "language-sqlite",
          "partial": "Analyze",
          "signature": "SinglyQualifiedIdentifier-\u003eStatement L NT NS Analyze'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:Analyze"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "As",
          "package": "language-sqlite",
          "signature": "As UnqualifiedIdentifier",
          "source": "src/Language-SQL-SQLite-Types.html#MaybeAs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "As",
          "package": "language-sqlite",
          "partial": "As",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:As"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "AsSelect",
          "package": "language-sqlite",
          "signature": "AsSelect Select",
          "source": "src/Language-SQL-SQLite-Types.html#CreateTableBody",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "AsSelect",
          "package": "language-sqlite",
          "partial": "As Select",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:AsSelect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "Asc",
          "package": "language-sqlite",
          "signature": "Asc",
          "source": "src/Language-SQL-SQLite-Types.html#MaybeAscDesc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "Asc",
          "package": "language-sqlite",
          "partial": "Asc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:Asc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "Attach",
          "package": "language-sqlite",
          "signature": "MaybeDatabase -\u003e String -\u003e UnqualifiedIdentifier -\u003e Statement L0 NT NS Attach'",
          "source": "src/Language-SQL-SQLite-Types.html#Statement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "Attach",
          "normalized": "MaybeDatabase-\u003eString-\u003eUnqualifiedIdentifier-\u003eStatement L NT NS Attach'",
          "package": "language-sqlite",
          "partial": "Attach",
          "signature": "MaybeDatabase-\u003eString-\u003eUnqualifiedIdentifier-\u003eStatement L NT NS Attach'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:Attach"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "Autoincrement",
          "package": "language-sqlite",
          "signature": "Autoincrement",
          "source": "src/Language-SQL-SQLite-Types.html#MaybeAutoincrement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "Autoincrement",
          "package": "language-sqlite",
          "partial": "Autoincrement",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:Autoincrement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "Before",
          "package": "language-sqlite",
          "signature": "Before",
          "source": "src/Language-SQL-SQLite-Types.html#TriggerTime",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "Before",
          "package": "language-sqlite",
          "partial": "Before",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:Before"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "Begin",
          "package": "language-sqlite",
          "signature": "MaybeTransactionType -\u003e MaybeTransaction -\u003e Statement L0 NT NS Begin'",
          "source": "src/Language-SQL-SQLite-Types.html#Statement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "Begin",
          "normalized": "MaybeTransactionType-\u003eMaybeTransaction-\u003eStatement L NT NS Begin'",
          "package": "language-sqlite",
          "partial": "Begin",
          "signature": "MaybeTransactionType-\u003eMaybeTransaction-\u003eStatement L NT NS Begin'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:Begin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "CallPragmaBody",
          "package": "language-sqlite",
          "signature": "CallPragmaBody PragmaValue",
          "source": "src/Language-SQL-SQLite-Types.html#PragmaBody",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "CallPragmaBody",
          "package": "language-sqlite",
          "partial": "Call Pragma Body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:CallPragmaBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "Cascade",
          "package": "language-sqlite",
          "signature": "Cascade",
          "source": "src/Language-SQL-SQLite-Types.html#ForeignKeyClauseActionPart",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "Cascade",
          "package": "language-sqlite",
          "partial": "Cascade",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:Cascade"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "Collation",
          "package": "language-sqlite",
          "signature": "Collation UnqualifiedIdentifier",
          "source": "src/Language-SQL-SQLite-Types.html#MaybeCollation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "Collation",
          "package": "language-sqlite",
          "partial": "Collation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:Collation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "Column",
          "package": "language-sqlite",
          "signature": "Column",
          "source": "src/Language-SQL-SQLite-Types.html#MaybeColumn",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "Column",
          "package": "language-sqlite",
          "partial": "Column",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:Column"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "ColumnCheck",
          "package": "language-sqlite",
          "signature": "ColumnCheck MaybeConstraintName Expression",
          "source": "src/Language-SQL-SQLite-Types.html#ColumnConstraint",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "ColumnCheck",
          "package": "language-sqlite",
          "partial": "Column Check",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:ColumnCheck"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "ColumnCollate",
          "package": "language-sqlite",
          "signature": "ColumnCollate MaybeConstraintName UnqualifiedIdentifier",
          "source": "src/Language-SQL-SQLite-Types.html#ColumnConstraint",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "ColumnCollate",
          "package": "language-sqlite",
          "partial": "Column Collate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:ColumnCollate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "ColumnDefault",
          "package": "language-sqlite",
          "signature": "ColumnDefault MaybeConstraintName DefaultValue",
          "source": "src/Language-SQL-SQLite-Types.html#ColumnConstraint",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "ColumnDefault",
          "package": "language-sqlite",
          "partial": "Column Default",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:ColumnDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "ColumnDefinition",
          "package": "language-sqlite",
          "signature": "ColumnDefinition UnqualifiedIdentifier MaybeType [ColumnConstraint]",
          "source": "src/Language-SQL-SQLite-Types.html#ColumnDefinition",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "ColumnDefinition",
          "normalized": "ColumnDefinition UnqualifiedIdentifier MaybeType[ColumnConstraint]",
          "package": "language-sqlite",
          "partial": "Column Definition",
          "signature": "ColumnDefinition UnqualifiedIdentifier MaybeType[ColumnConstraint]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:ColumnDefinition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "ColumnForeignKey",
          "package": "language-sqlite",
          "signature": "ColumnForeignKey MaybeConstraintName ForeignKeyClause",
          "source": "src/Language-SQL-SQLite-Types.html#ColumnConstraint",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "ColumnForeignKey",
          "package": "language-sqlite",
          "partial": "Column Foreign Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:ColumnForeignKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "ColumnNotNull",
          "package": "language-sqlite",
          "signature": "ColumnNotNull MaybeConstraintName (Maybe ConflictClause)",
          "source": "src/Language-SQL-SQLite-Types.html#ColumnConstraint",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "ColumnNotNull",
          "package": "language-sqlite",
          "partial": "Column Not Null",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:ColumnNotNull"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "ColumnPrimaryKey",
          "package": "language-sqlite",
          "signature": "ColumnPrimaryKey MaybeConstraintName MaybeAscDesc (Maybe ConflictClause) MaybeAutoincrement",
          "source": "src/Language-SQL-SQLite-Types.html#ColumnConstraint",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "ColumnPrimaryKey",
          "package": "language-sqlite",
          "partial": "Column Primary Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:ColumnPrimaryKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "ColumnUnique",
          "package": "language-sqlite",
          "signature": "ColumnUnique MaybeConstraintName (Maybe ConflictClause)",
          "source": "src/Language-SQL-SQLite-Types.html#ColumnConstraint",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "ColumnUnique",
          "package": "language-sqlite",
          "partial": "Column Unique",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:ColumnUnique"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "ColumnsAndConstraints",
          "package": "language-sqlite",
          "signature": "ColumnsAndConstraints (OneOrMore ColumnDefinition) [TableConstraint]",
          "source": "src/Language-SQL-SQLite-Types.html#CreateTableBody",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "ColumnsAndConstraints",
          "normalized": "ColumnsAndConstraints(OneOrMore ColumnDefinition)[TableConstraint]",
          "package": "language-sqlite",
          "partial": "Columns And Constraints",
          "signature": "ColumnsAndConstraints(OneOrMore ColumnDefinition)[TableConstraint]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:ColumnsAndConstraints"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "Comma",
          "package": "language-sqlite",
          "signature": "Comma",
          "source": "src/Language-SQL-SQLite-Types.html#JoinOperation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "Comma",
          "package": "language-sqlite",
          "partial": "Comma",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:Comma"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "Commit",
          "package": "language-sqlite",
          "signature": "CommitHead -\u003e MaybeTransaction -\u003e Statement L0 NT NS Commit'",
          "source": "src/Language-SQL-SQLite-Types.html#Statement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "Commit",
          "normalized": "CommitHead-\u003eMaybeTransaction-\u003eStatement L NT NS Commit'",
          "package": "language-sqlite",
          "partial": "Commit",
          "signature": "CommitHead-\u003eMaybeTransaction-\u003eStatement L NT NS Commit'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:Commit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "CommitCommit",
          "package": "language-sqlite",
          "signature": "CommitCommit",
          "source": "src/Language-SQL-SQLite-Types.html#CommitHead",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "CommitCommit",
          "package": "language-sqlite",
          "partial": "Commit Commit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:CommitCommit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "CommitEnd",
          "package": "language-sqlite",
          "signature": "CommitEnd",
          "source": "src/Language-SQL-SQLite-Types.html#CommitHead",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "CommitEnd",
          "package": "language-sqlite",
          "partial": "Commit End",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:CommitEnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "ConstraintName",
          "package": "language-sqlite",
          "signature": "ConstraintName UnqualifiedIdentifier",
          "source": "src/Language-SQL-SQLite-Types.html#MaybeConstraintName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "ConstraintName",
          "package": "language-sqlite",
          "partial": "Constraint Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:ConstraintName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "CreateIndex",
          "package": "language-sqlite",
          "signature": "MaybeUnique -\u003e MaybeIfNotExists -\u003e SinglyQualifiedIdentifier -\u003e UnqualifiedIdentifier -\u003e OneOrMore IndexedColumn -\u003e Statement L0 NT NS CreateIndex'",
          "source": "src/Language-SQL-SQLite-Types.html#Statement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "CreateIndex",
          "normalized": "MaybeUnique-\u003eMaybeIfNotExists-\u003eSinglyQualifiedIdentifier-\u003eUnqualifiedIdentifier-\u003eOneOrMore IndexedColumn-\u003eStatement L NT NS CreateIndex'",
          "package": "language-sqlite",
          "partial": "Create Index",
          "signature": "MaybeUnique-\u003eMaybeIfNotExists-\u003eSinglyQualifiedIdentifier-\u003eUnqualifiedIdentifier-\u003eOneOrMore IndexedColumn-\u003eStatement L NT NS CreateIndex'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:CreateIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "CreateTable",
          "package": "language-sqlite",
          "signature": "MaybeTemporary -\u003e MaybeIfNotExists -\u003e SinglyQualifiedIdentifier -\u003e CreateTableBody -\u003e Statement L0 NT NS CreateTable'",
          "source": "src/Language-SQL-SQLite-Types.html#Statement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "CreateTable",
          "normalized": "MaybeTemporary-\u003eMaybeIfNotExists-\u003eSinglyQualifiedIdentifier-\u003eCreateTableBody-\u003eStatement L NT NS CreateTable'",
          "package": "language-sqlite",
          "partial": "Create Table",
          "signature": "MaybeTemporary-\u003eMaybeIfNotExists-\u003eSinglyQualifiedIdentifier-\u003eCreateTableBody-\u003eStatement L NT NS CreateTable'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:CreateTable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "CreateTrigger",
          "package": "language-sqlite",
          "signature": "MaybeTemporary -\u003e MaybeIfNotExists -\u003e SinglyQualifiedIdentifier -\u003e TriggerTime -\u003e TriggerCondition -\u003e UnqualifiedIdentifier -\u003e MaybeForEachRow -\u003e Maybe WhenClause -\u003e OneOrMore TriggerStatement -\u003e Statement L0 NT NS CreateTrigger'",
          "source": "src/Language-SQL-SQLite-Types.html#Statement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "CreateTrigger",
          "normalized": "MaybeTemporary-\u003eMaybeIfNotExists-\u003eSinglyQualifiedIdentifier-\u003eTriggerTime-\u003eTriggerCondition-\u003eUnqualifiedIdentifier-\u003eMaybeForEachRow-\u003eMaybe WhenClause-\u003eOneOrMore TriggerStatement-\u003eStatement L NT NS CreateTrigger'",
          "package": "language-sqlite",
          "partial": "Create Trigger",
          "signature": "MaybeTemporary-\u003eMaybeIfNotExists-\u003eSinglyQualifiedIdentifier-\u003eTriggerTime-\u003eTriggerCondition-\u003eUnqualifiedIdentifier-\u003eMaybeForEachRow-\u003eMaybe WhenClause-\u003eOneOrMore TriggerStatement-\u003eStatement L NT NS CreateTrigger'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:CreateTrigger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "CreateView",
          "package": "language-sqlite",
          "signature": "MaybeTemporary -\u003e MaybeIfNotExists -\u003e SinglyQualifiedIdentifier -\u003e Statement L0 T S Select' -\u003e Statement L0 NT NS CreateView'",
          "source": "src/Language-SQL-SQLite-Types.html#Statement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "CreateView",
          "normalized": "MaybeTemporary-\u003eMaybeIfNotExists-\u003eSinglyQualifiedIdentifier-\u003eStatement L T S Select'-\u003eStatement L NT NS CreateView'",
          "package": "language-sqlite",
          "partial": "Create View",
          "signature": "MaybeTemporary-\u003eMaybeIfNotExists-\u003eSinglyQualifiedIdentifier-\u003eStatement L T S Select'-\u003eStatement L NT NS CreateView'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:CreateView"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "CreateVirtualTable",
          "package": "language-sqlite",
          "signature": "SinglyQualifiedIdentifier -\u003e UnqualifiedIdentifier -\u003e [ModuleArgument] -\u003e Statement L0 NT NS CreateVirtualTable'",
          "source": "src/Language-SQL-SQLite-Types.html#Statement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "CreateVirtualTable",
          "normalized": "SinglyQualifiedIdentifier-\u003eUnqualifiedIdentifier-\u003e[ModuleArgument]-\u003eStatement L NT NS CreateVirtualTable'",
          "package": "language-sqlite",
          "partial": "Create Virtual Table",
          "signature": "SinglyQualifiedIdentifier-\u003eUnqualifiedIdentifier-\u003e[ModuleArgument]-\u003eStatement L NT NS CreateVirtualTable'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:CreateVirtualTable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "CrossJoin",
          "package": "language-sqlite",
          "signature": "CrossJoin",
          "source": "src/Language-SQL-SQLite-Types.html#JoinOperation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "CrossJoin",
          "package": "language-sqlite",
          "partial": "Cross Join",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:CrossJoin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "Database",
          "package": "language-sqlite",
          "signature": "Database",
          "source": "src/Language-SQL-SQLite-Types.html#MaybeDatabase",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "Database",
          "package": "language-sqlite",
          "partial": "Database",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:Database"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "DefaultValueExpression",
          "package": "language-sqlite",
          "signature": "DefaultValueExpression Expression",
          "source": "src/Language-SQL-SQLite-Types.html#DefaultValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "DefaultValueExpression",
          "package": "language-sqlite",
          "partial": "Default Value Expression",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:DefaultValueExpression"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "DefaultValueLiteralBlob",
          "package": "language-sqlite",
          "signature": "DefaultValueLiteralBlob ByteString",
          "source": "src/Language-SQL-SQLite-Types.html#DefaultValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "DefaultValueLiteralBlob",
          "package": "language-sqlite",
          "partial": "Default Value Literal Blob",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:DefaultValueLiteralBlob"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "DefaultValueLiteralCurrentDate",
          "package": "language-sqlite",
          "signature": "DefaultValueLiteralCurrentDate",
          "source": "src/Language-SQL-SQLite-Types.html#DefaultValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "DefaultValueLiteralCurrentDate",
          "package": "language-sqlite",
          "partial": "Default Value Literal Current Date",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:DefaultValueLiteralCurrentDate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "DefaultValueLiteralCurrentTime",
          "package": "language-sqlite",
          "signature": "DefaultValueLiteralCurrentTime",
          "source": "src/Language-SQL-SQLite-Types.html#DefaultValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "DefaultValueLiteralCurrentTime",
          "package": "language-sqlite",
          "partial": "Default Value Literal Current Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:DefaultValueLiteralCurrentTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "DefaultValueLiteralCurrentTimestamp",
          "package": "language-sqlite",
          "signature": "DefaultValueLiteralCurrentTimestamp",
          "source": "src/Language-SQL-SQLite-Types.html#DefaultValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "DefaultValueLiteralCurrentTimestamp",
          "package": "language-sqlite",
          "partial": "Default Value Literal Current Timestamp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:DefaultValueLiteralCurrentTimestamp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "DefaultValueLiteralNull",
          "package": "language-sqlite",
          "signature": "DefaultValueLiteralNull",
          "source": "src/Language-SQL-SQLite-Types.html#DefaultValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "DefaultValueLiteralNull",
          "package": "language-sqlite",
          "partial": "Default Value Literal Null",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:DefaultValueLiteralNull"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "DefaultValueLiteralString",
          "package": "language-sqlite",
          "signature": "DefaultValueLiteralString String",
          "source": "src/Language-SQL-SQLite-Types.html#DefaultValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "DefaultValueLiteralString",
          "package": "language-sqlite",
          "partial": "Default Value Literal String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:DefaultValueLiteralString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "DefaultValueSignedFloat",
          "package": "language-sqlite",
          "signature": "DefaultValueSignedFloat MaybeSign NonnegativeDouble",
          "source": "src/Language-SQL-SQLite-Types.html#DefaultValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "DefaultValueSignedFloat",
          "package": "language-sqlite",
          "partial": "Default Value Signed Float",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:DefaultValueSignedFloat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "DefaultValueSignedInteger",
          "package": "language-sqlite",
          "signature": "DefaultValueSignedInteger MaybeSign Word64",
          "source": "src/Language-SQL-SQLite-Types.html#DefaultValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "DefaultValueSignedInteger",
          "package": "language-sqlite",
          "partial": "Default Value Signed Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:DefaultValueSignedInteger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "Deferrable",
          "package": "language-sqlite",
          "signature": "Deferrable MaybeInitialDeferralStatus",
          "source": "src/Language-SQL-SQLite-Types.html#MaybeForeignKeyClauseDeferrablePart",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "Deferrable",
          "package": "language-sqlite",
          "partial": "Deferrable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:Deferrable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "Deferred",
          "package": "language-sqlite",
          "signature": "Deferred",
          "source": "src/Language-SQL-SQLite-Types.html#MaybeTransactionType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "Deferred",
          "package": "language-sqlite",
          "partial": "Deferred",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:Deferred"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "Delete",
          "package": "language-sqlite",
          "signature": "QualifiedTableName -\u003e Maybe WhereClause -\u003e Statement L0 T NS Delete'",
          "source": "src/Language-SQL-SQLite-Types.html#Statement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "Delete",
          "normalized": "QualifiedTableName-\u003eMaybe WhereClause-\u003eStatement L T NS Delete'",
          "package": "language-sqlite",
          "partial": "Delete",
          "signature": "QualifiedTableName-\u003eMaybe WhereClause-\u003eStatement L T NS Delete'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:Delete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "DeleteLimited",
          "package": "language-sqlite",
          "signature": "QualifiedTableName -\u003e Maybe WhereClause -\u003e Maybe OrderClause -\u003e LimitClause -\u003e Statement L0 NT NS DeleteLimited'",
          "source": "src/Language-SQL-SQLite-Types.html#Statement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "DeleteLimited",
          "normalized": "QualifiedTableName-\u003eMaybe WhereClause-\u003eMaybe OrderClause-\u003eLimitClause-\u003eStatement L NT NS DeleteLimited'",
          "package": "language-sqlite",
          "partial": "Delete Limited",
          "signature": "QualifiedTableName-\u003eMaybe WhereClause-\u003eMaybe OrderClause-\u003eLimitClause-\u003eStatement L NT NS DeleteLimited'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:DeleteLimited"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "DeleteOn",
          "package": "language-sqlite",
          "signature": "DeleteOn",
          "source": "src/Language-SQL-SQLite-Types.html#TriggerCondition",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "DeleteOn",
          "package": "language-sqlite",
          "partial": "Delete On",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:DeleteOn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "Desc",
          "package": "language-sqlite",
          "signature": "Desc",
          "source": "src/Language-SQL-SQLite-Types.html#MaybeAscDesc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "Desc",
          "package": "language-sqlite",
          "partial": "Desc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:Desc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "Detach",
          "package": "language-sqlite",
          "signature": "MaybeDatabase -\u003e UnqualifiedIdentifier -\u003e Statement L0 NT NS Detach'",
          "source": "src/Language-SQL-SQLite-Types.html#Statement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "Detach",
          "normalized": "MaybeDatabase-\u003eUnqualifiedIdentifier-\u003eStatement L NT NS Detach'",
          "package": "language-sqlite",
          "partial": "Detach",
          "signature": "MaybeDatabase-\u003eUnqualifiedIdentifier-\u003eStatement L NT NS Detach'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:Detach"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "Distinct",
          "package": "language-sqlite",
          "signature": "Distinct",
          "source": "src/Language-SQL-SQLite-Types.html#Distinctness",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "Distinct",
          "package": "language-sqlite",
          "partial": "Distinct",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:Distinct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "DoubleSize",
          "package": "language-sqlite",
          "signature": "DoubleSize MaybeSign NonnegativeDouble",
          "source": "src/Language-SQL-SQLite-Types.html#TypeSizeField",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "DoubleSize",
          "package": "language-sqlite",
          "partial": "Double Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:DoubleSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "DoublyQualifiedIdentifier",
          "package": "language-sqlite",
          "signature": "DoublyQualifiedIdentifier (Maybe (String, Maybe String)) String",
          "source": "src/Language-SQL-SQLite-Types.html#DoublyQualifiedIdentifier",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "DoublyQualifiedIdentifier",
          "normalized": "DoublyQualifiedIdentifier(Maybe(String,Maybe String))String",
          "package": "language-sqlite",
          "partial": "Doubly Qualified Identifier",
          "signature": "DoublyQualifiedIdentifier(Maybe(String,Maybe String))String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:DoublyQualifiedIdentifier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "DropIndex",
          "package": "language-sqlite",
          "signature": "MaybeIfExists -\u003e SinglyQualifiedIdentifier -\u003e Statement L0 NT NS DropIndex'",
          "source": "src/Language-SQL-SQLite-Types.html#Statement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "DropIndex",
          "normalized": "MaybeIfExists-\u003eSinglyQualifiedIdentifier-\u003eStatement L NT NS DropIndex'",
          "package": "language-sqlite",
          "partial": "Drop Index",
          "signature": "MaybeIfExists-\u003eSinglyQualifiedIdentifier-\u003eStatement L NT NS DropIndex'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:DropIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "DropTable",
          "package": "language-sqlite",
          "signature": "MaybeIfExists -\u003e SinglyQualifiedIdentifier -\u003e Statement L0 NT NS DropTable'",
          "source": "src/Language-SQL-SQLite-Types.html#Statement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "DropTable",
          "normalized": "MaybeIfExists-\u003eSinglyQualifiedIdentifier-\u003eStatement L NT NS DropTable'",
          "package": "language-sqlite",
          "partial": "Drop Table",
          "signature": "MaybeIfExists-\u003eSinglyQualifiedIdentifier-\u003eStatement L NT NS DropTable'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:DropTable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "DropTrigger",
          "package": "language-sqlite",
          "signature": "MaybeIfExists -\u003e SinglyQualifiedIdentifier -\u003e Statement L0 NT NS DropTrigger'",
          "source": "src/Language-SQL-SQLite-Types.html#Statement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "DropTrigger",
          "normalized": "MaybeIfExists-\u003eSinglyQualifiedIdentifier-\u003eStatement L NT NS DropTrigger'",
          "package": "language-sqlite",
          "partial": "Drop Trigger",
          "signature": "MaybeIfExists-\u003eSinglyQualifiedIdentifier-\u003eStatement L NT NS DropTrigger'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:DropTrigger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "DropView",
          "package": "language-sqlite",
          "signature": "MaybeIfExists -\u003e SinglyQualifiedIdentifier -\u003e Statement L0 NT NS DropView'",
          "source": "src/Language-SQL-SQLite-Types.html#Statement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "DropView",
          "normalized": "MaybeIfExists-\u003eSinglyQualifiedIdentifier-\u003eStatement L NT NS DropView'",
          "package": "language-sqlite",
          "partial": "Drop View",
          "signature": "MaybeIfExists-\u003eSinglyQualifiedIdentifier-\u003eStatement L NT NS DropView'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:DropView"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "ElidedAs",
          "package": "language-sqlite",
          "signature": "ElidedAs UnqualifiedIdentifier",
          "source": "src/Language-SQL-SQLite-Types.html#MaybeAs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "ElidedAs",
          "package": "language-sqlite",
          "partial": "Elided As",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:ElidedAs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "ElidedColumn",
          "package": "language-sqlite",
          "signature": "ElidedColumn",
          "source": "src/Language-SQL-SQLite-Types.html#MaybeColumn",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "ElidedColumn",
          "package": "language-sqlite",
          "partial": "Elided Column",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:ElidedColumn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "ElidedDatabase",
          "package": "language-sqlite",
          "signature": "ElidedDatabase",
          "source": "src/Language-SQL-SQLite-Types.html#MaybeDatabase",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "ElidedDatabase",
          "package": "language-sqlite",
          "partial": "Elided Database",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:ElidedDatabase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "ElidedReleaseSavepoint",
          "package": "language-sqlite",
          "signature": "ElidedReleaseSavepoint UnqualifiedIdentifier",
          "source": "src/Language-SQL-SQLite-Types.html#MaybeReleaseSavepoint",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "ElidedReleaseSavepoint",
          "package": "language-sqlite",
          "partial": "Elided Release Savepoint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:ElidedReleaseSavepoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "ElidedTransaction",
          "package": "language-sqlite",
          "signature": "ElidedTransaction",
          "source": "src/Language-SQL-SQLite-Types.html#MaybeTransaction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "ElidedTransaction",
          "package": "language-sqlite",
          "partial": "Elided Transaction",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:ElidedTransaction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "Else",
          "package": "language-sqlite",
          "signature": "Else Expression",
          "source": "src/Language-SQL-SQLite-Types.html#Else",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "Else",
          "package": "language-sqlite",
          "partial": "Else",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:Else"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "EmptyPragmaBody",
          "package": "language-sqlite",
          "signature": "EmptyPragmaBody",
          "source": "src/Language-SQL-SQLite-Types.html#PragmaBody",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "EmptyPragmaBody",
          "package": "language-sqlite",
          "partial": "Empty Pragma Body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:EmptyPragmaBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "EndOfInputToken",
          "package": "language-sqlite",
          "signature": "EndOfInputToken",
          "source": "src/Language-SQL-SQLite-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "EndOfInputToken",
          "package": "language-sqlite",
          "partial": "End Of Input Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:EndOfInputToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "EqualsPragmaBody",
          "package": "language-sqlite",
          "signature": "EqualsPragmaBody PragmaValue",
          "source": "src/Language-SQL-SQLite-Types.html#PragmaBody",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "EqualsPragmaBody",
          "package": "language-sqlite",
          "partial": "Equals Pragma Body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:EqualsPragmaBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "Escape",
          "package": "language-sqlite",
          "signature": "Escape Expression",
          "source": "src/Language-SQL-SQLite-Types.html#Escape",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "Escape",
          "package": "language-sqlite",
          "partial": "Escape",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:Escape"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "Except",
          "package": "language-sqlite",
          "signature": "Except",
          "source": "src/Language-SQL-SQLite-Types.html#CompoundOperator",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "Except",
          "package": "language-sqlite",
          "partial": "Except",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:Except"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "Exclusive",
          "package": "language-sqlite",
          "signature": "Exclusive",
          "source": "src/Language-SQL-SQLite-Types.html#MaybeTransactionType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "Exclusive",
          "package": "language-sqlite",
          "partial": "Exclusive",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:Exclusive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "Explain",
          "package": "language-sqlite",
          "signature": "ExplainableStatement -\u003e Statement L1 NT NS Explain'",
          "source": "src/Language-SQL-SQLite-Types.html#Statement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "Explain",
          "normalized": "ExplainableStatement-\u003eStatement L NT NS Explain'",
          "package": "language-sqlite",
          "partial": "Explain",
          "signature": "ExplainableStatement-\u003eStatement L NT NS Explain'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:Explain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "ExplainQueryPlan",
          "package": "language-sqlite",
          "signature": "ExplainableStatement -\u003e Statement L1 NT NS ExplainQueryPlan'",
          "source": "src/Language-SQL-SQLite-Types.html#Statement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "ExplainQueryPlan",
          "normalized": "ExplainableStatement-\u003eStatement L NT NS ExplainQueryPlan'",
          "package": "language-sqlite",
          "partial": "Explain Query Plan",
          "signature": "ExplainableStatement-\u003eStatement L NT NS ExplainQueryPlan'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:ExplainQueryPlan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "ExplainableStatement",
          "package": "language-sqlite",
          "signature": "forall t v w . ExplainableStatement (Statement L0 t v w)",
          "source": "src/Language-SQL-SQLite-Types.html#ExplainableStatement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "ExplainableStatement",
          "package": "language-sqlite",
          "partial": "Explainable Statement",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:ExplainableStatement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents a \u003ccode\u003eBETWEEN\u003c/code\u003e expression.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "ExpressionBetween",
          "package": "language-sqlite",
          "signature": "ExpressionBetween Expression Expression Expression",
          "source": "src/Language-SQL-SQLite-Types.html#Expression",
          "type": "function"
        },
        "index": {
          "description": "Represents BETWEEN expression",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "ExpressionBetween",
          "package": "language-sqlite",
          "partial": "Expression Between",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:ExpressionBetween"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents a binary addition expression.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "ExpressionBinaryAdd",
          "package": "language-sqlite",
          "signature": "ExpressionBinaryAdd Expression Expression",
          "source": "src/Language-SQL-SQLite-Types.html#Expression",
          "type": "function"
        },
        "index": {
          "description": "Represents binary addition expression",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "ExpressionBinaryAdd",
          "package": "language-sqlite",
          "partial": "Expression Binary Add",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:ExpressionBinaryAdd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents a binary bitwise-and expression.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "ExpressionBinaryBitwiseAnd",
          "package": "language-sqlite",
          "signature": "ExpressionBinaryBitwiseAnd Expression Expression",
          "source": "src/Language-SQL-SQLite-Types.html#Expression",
          "type": "function"
        },
        "index": {
          "description": "Represents binary bitwise-and expression",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "ExpressionBinaryBitwiseAnd",
          "package": "language-sqlite",
          "partial": "Expression Binary Bitwise And",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:ExpressionBinaryBitwiseAnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents a binary bitwise-or expression.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "ExpressionBinaryBitwiseOr",
          "package": "language-sqlite",
          "signature": "ExpressionBinaryBitwiseOr Expression Expression",
          "source": "src/Language-SQL-SQLite-Types.html#Expression",
          "type": "function"
        },
        "index": {
          "description": "Represents binary bitwise-or expression",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "ExpressionBinaryBitwiseOr",
          "package": "language-sqlite",
          "partial": "Expression Binary Bitwise Or",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:ExpressionBinaryBitwiseOr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents a binary string-concatenation expression.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "ExpressionBinaryConcatenate",
          "package": "language-sqlite",
          "signature": "ExpressionBinaryConcatenate Expression Expression",
          "source": "src/Language-SQL-SQLite-Types.html#Expression",
          "type": "function"
        },
        "index": {
          "description": "Represents binary string-concatenation expression",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "ExpressionBinaryConcatenate",
          "package": "language-sqlite",
          "partial": "Expression Binary Concatenate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:ExpressionBinaryConcatenate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents a binary division expression.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "ExpressionBinaryDivide",
          "package": "language-sqlite",
          "signature": "ExpressionBinaryDivide Expression Expression",
          "source": "src/Language-SQL-SQLite-Types.html#Expression",
          "type": "function"
        },
        "index": {
          "description": "Represents binary division expression",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "ExpressionBinaryDivide",
          "package": "language-sqlite",
          "partial": "Expression Binary Divide",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:ExpressionBinaryDivide"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents a binary equal-to comparison expression, written in SQL\n   as \u003ccode\u003e=\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "ExpressionBinaryEquals",
          "package": "language-sqlite",
          "signature": "ExpressionBinaryEquals Expression Expression",
          "source": "src/Language-SQL-SQLite-Types.html#Expression",
          "type": "function"
        },
        "index": {
          "description": "Represents binary equal-to comparison expression written in SQL as",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "ExpressionBinaryEquals",
          "package": "language-sqlite",
          "partial": "Expression Binary Equals",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:ExpressionBinaryEquals"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents a binary equal-to comparison expression, written in SQL\n   as \u003ccode\u003e==\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "ExpressionBinaryEqualsEquals",
          "package": "language-sqlite",
          "signature": "ExpressionBinaryEqualsEquals Expression Expression",
          "source": "src/Language-SQL-SQLite-Types.html#Expression",
          "type": "function"
        },
        "index": {
          "description": "Represents binary equal-to comparison expression written in SQL as",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "ExpressionBinaryEqualsEquals",
          "package": "language-sqlite",
          "partial": "Expression Binary Equals Equals",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:ExpressionBinaryEqualsEquals"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents a binary greater-than comparison expression.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "ExpressionBinaryGreater",
          "package": "language-sqlite",
          "signature": "ExpressionBinaryGreater Expression Expression",
          "source": "src/Language-SQL-SQLite-Types.html#Expression",
          "type": "function"
        },
        "index": {
          "description": "Represents binary greater-than comparison expression",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "ExpressionBinaryGreater",
          "package": "language-sqlite",
          "partial": "Expression Binary Greater",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:ExpressionBinaryGreater"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents a binary greater-than-or-equal-to comparison expression.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "ExpressionBinaryGreaterEquals",
          "package": "language-sqlite",
          "signature": "ExpressionBinaryGreaterEquals Expression Expression",
          "source": "src/Language-SQL-SQLite-Types.html#Expression",
          "type": "function"
        },
        "index": {
          "description": "Represents binary greater-than-or-equal-to comparison expression",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "ExpressionBinaryGreaterEquals",
          "package": "language-sqlite",
          "partial": "Expression Binary Greater Equals",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:ExpressionBinaryGreaterEquals"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents a binary left-shift expression.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "ExpressionBinaryLeftShift",
          "package": "language-sqlite",
          "signature": "ExpressionBinaryLeftShift Expression Expression",
          "source": "src/Language-SQL-SQLite-Types.html#Expression",
          "type": "function"
        },
        "index": {
          "description": "Represents binary left-shift expression",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "ExpressionBinaryLeftShift",
          "package": "language-sqlite",
          "partial": "Expression Binary Left Shift",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:ExpressionBinaryLeftShift"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents a binary less-than comparison expression.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "ExpressionBinaryLess",
          "package": "language-sqlite",
          "signature": "ExpressionBinaryLess Expression Expression",
          "source": "src/Language-SQL-SQLite-Types.html#Expression",
          "type": "function"
        },
        "index": {
          "description": "Represents binary less-than comparison expression",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "ExpressionBinaryLess",
          "package": "language-sqlite",
          "partial": "Expression Binary Less",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:ExpressionBinaryLess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents a binary less-than-or-equal-to comparison expression.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "ExpressionBinaryLessEquals",
          "package": "language-sqlite",
          "signature": "ExpressionBinaryLessEquals Expression Expression",
          "source": "src/Language-SQL-SQLite-Types.html#Expression",
          "type": "function"
        },
        "index": {
          "description": "Represents binary less-than-or-equal-to comparison expression",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "ExpressionBinaryLessEquals",
          "package": "language-sqlite",
          "partial": "Expression Binary Less Equals",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:ExpressionBinaryLessEquals"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents a binary not-equal-to comparison expression, written in\n   SQL as \u003ccode\u003e\u003ca/\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "ExpressionBinaryLessGreater",
          "package": "language-sqlite",
          "signature": "ExpressionBinaryLessGreater Expression Expression",
          "source": "src/Language-SQL-SQLite-Types.html#Expression",
          "type": "function"
        },
        "index": {
          "description": "Represents binary not-equal-to comparison expression written in SQL as",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "ExpressionBinaryLessGreater",
          "package": "language-sqlite",
          "partial": "Expression Binary Less Greater",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:ExpressionBinaryLessGreater"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents a binary logical-and expression.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "ExpressionBinaryLogicalAnd",
          "package": "language-sqlite",
          "signature": "ExpressionBinaryLogicalAnd Expression Expression",
          "source": "src/Language-SQL-SQLite-Types.html#Expression",
          "type": "function"
        },
        "index": {
          "description": "Represents binary logical-and expression",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "ExpressionBinaryLogicalAnd",
          "package": "language-sqlite",
          "partial": "Expression Binary Logical And",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:ExpressionBinaryLogicalAnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents a binary logical-or expression.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "ExpressionBinaryLogicalOr",
          "package": "language-sqlite",
          "signature": "ExpressionBinaryLogicalOr Expression Expression",
          "source": "src/Language-SQL-SQLite-Types.html#Expression",
          "type": "function"
        },
        "index": {
          "description": "Represents binary logical-or expression",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "ExpressionBinaryLogicalOr",
          "package": "language-sqlite",
          "partial": "Expression Binary Logical Or",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:ExpressionBinaryLogicalOr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents a binary modulus expression.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "ExpressionBinaryModulus",
          "package": "language-sqlite",
          "signature": "ExpressionBinaryModulus Expression Expression",
          "source": "src/Language-SQL-SQLite-Types.html#Expression",
          "type": "function"
        },
        "index": {
          "description": "Represents binary modulus expression",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "ExpressionBinaryModulus",
          "package": "language-sqlite",
          "partial": "Expression Binary Modulus",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:ExpressionBinaryModulus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents a binary multiplication expression.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "ExpressionBinaryMultiply",
          "package": "language-sqlite",
          "signature": "ExpressionBinaryMultiply Expression Expression",
          "source": "src/Language-SQL-SQLite-Types.html#Expression",
          "type": "function"
        },
        "index": {
          "description": "Represents binary multiplication expression",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "ExpressionBinaryMultiply",
          "package": "language-sqlite",
          "partial": "Expression Binary Multiply",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:ExpressionBinaryMultiply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents a binary not-equal-to comparison expression, written in\n   SQL as \u003ccode\u003e!=\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "ExpressionBinaryNotEquals",
          "package": "language-sqlite",
          "signature": "ExpressionBinaryNotEquals Expression Expression",
          "source": "src/Language-SQL-SQLite-Types.html#Expression",
          "type": "function"
        },
        "index": {
          "description": "Represents binary not-equal-to comparison expression written in SQL as",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "ExpressionBinaryNotEquals",
          "package": "language-sqlite",
          "partial": "Expression Binary Not Equals",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:ExpressionBinaryNotEquals"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents a binary right-shift expression.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "ExpressionBinaryRightShift",
          "package": "language-sqlite",
          "signature": "ExpressionBinaryRightShift Expression Expression",
          "source": "src/Language-SQL-SQLite-Types.html#Expression",
          "type": "function"
        },
        "index": {
          "description": "Represents binary right-shift expression",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "ExpressionBinaryRightShift",
          "package": "language-sqlite",
          "partial": "Expression Binary Right Shift",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:ExpressionBinaryRightShift"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents a binary subtraction expression.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "ExpressionBinarySubtract",
          "package": "language-sqlite",
          "signature": "ExpressionBinarySubtract Expression Expression",
          "source": "src/Language-SQL-SQLite-Types.html#Expression",
          "type": "function"
        },
        "index": {
          "description": "Represents binary subtraction expression",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "ExpressionBinarySubtract",
          "package": "language-sqlite",
          "partial": "Expression Binary Subtract",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:ExpressionBinarySubtract"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents a \u003ccode\u003eCASE\u003c/code\u003e expression.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "ExpressionCase",
          "package": "language-sqlite",
          "signature": "ExpressionCase MaybeSwitchExpression (OneOrMore CasePair) Else",
          "source": "src/Language-SQL-SQLite-Types.html#Expression",
          "type": "function"
        },
        "index": {
          "description": "Represents CASE expression",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "ExpressionCase",
          "package": "language-sqlite",
          "partial": "Expression Case",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:ExpressionCase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents a type-cast expression.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "ExpressionCast",
          "package": "language-sqlite",
          "signature": "ExpressionCast Expression Type",
          "source": "src/Language-SQL-SQLite-Types.html#Expression",
          "type": "function"
        },
        "index": {
          "description": "Represents type-cast expression",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "ExpressionCast",
          "package": "language-sqlite",
          "partial": "Expression Cast",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:ExpressionCast"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents a \u003ccode\u003eCOLLATE\u003c/code\u003e expression.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "ExpressionCollate",
          "package": "language-sqlite",
          "signature": "ExpressionCollate Expression UnqualifiedIdentifier",
          "source": "src/Language-SQL-SQLite-Types.html#Expression",
          "type": "function"
        },
        "index": {
          "description": "Represents COLLATE expression",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "ExpressionCollate",
          "package": "language-sqlite",
          "partial": "Expression Collate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:ExpressionCollate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents a subquery \u003ccode\u003eSELECT\u003c/code\u003e expression with the \u003ccode\u003eEXISTS\u003c/code\u003e\n   qualifier.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "ExpressionExistsSubquery",
          "package": "language-sqlite",
          "signature": "ExpressionExistsSubquery Select",
          "source": "src/Language-SQL-SQLite-Types.html#Expression",
          "type": "function"
        },
        "index": {
          "description": "Represents subquery SELECT expression with the EXISTS qualifier",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "ExpressionExistsSubquery",
          "package": "language-sqlite",
          "partial": "Expression Exists Subquery",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:ExpressionExistsSubquery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents a call to a built-in function.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "ExpressionFunctionCall",
          "package": "language-sqlite",
          "signature": "ExpressionFunctionCall UnqualifiedIdentifier [Expression]",
          "source": "src/Language-SQL-SQLite-Types.html#Expression",
          "type": "function"
        },
        "index": {
          "description": "Represents call to built-in function",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "ExpressionFunctionCall",
          "normalized": "ExpressionFunctionCall UnqualifiedIdentifier[Expression]",
          "package": "language-sqlite",
          "partial": "Expression Function Call",
          "signature": "ExpressionFunctionCall UnqualifiedIdentifier[Expression]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:ExpressionFunctionCall"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents a call to a built-in function, with the \u003ccode\u003eDISTINCT\u003c/code\u003e\n   qualifier.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "ExpressionFunctionCallDistinct",
          "package": "language-sqlite",
          "signature": "ExpressionFunctionCallDistinct UnqualifiedIdentifier (OneOrMore Expression)",
          "source": "src/Language-SQL-SQLite-Types.html#Expression",
          "type": "function"
        },
        "index": {
          "description": "Represents call to built-in function with the DISTINCT qualifier",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "ExpressionFunctionCallDistinct",
          "package": "language-sqlite",
          "partial": "Expression Function Call Distinct",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:ExpressionFunctionCallDistinct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents a call to a built-in function, with \u003ccode\u003e*\u003c/code\u003e as \n   parameter.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "ExpressionFunctionCallStar",
          "package": "language-sqlite",
          "signature": "ExpressionFunctionCallStar UnqualifiedIdentifier",
          "source": "src/Language-SQL-SQLite-Types.html#Expression",
          "type": "function"
        },
        "index": {
          "description": "Represents call to built-in function with as parameter",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "ExpressionFunctionCallStar",
          "package": "language-sqlite",
          "partial": "Expression Function Call Star",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:ExpressionFunctionCallStar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents a column-name expression, optionally qualified by a\n   table name and further by a database name.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "ExpressionIdentifier",
          "package": "language-sqlite",
          "signature": "ExpressionIdentifier DoublyQualifiedIdentifier",
          "source": "src/Language-SQL-SQLite-Types.html#Expression",
          "type": "function"
        },
        "index": {
          "description": "Represents column-name expression optionally qualified by table name and further by database name",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "ExpressionIdentifier",
          "package": "language-sqlite",
          "partial": "Expression Identifier",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:ExpressionIdentifier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents an \u003ccode\u003eIN\u003c/code\u003e expression with the right-hand side being a\n   list of subexpressions.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "ExpressionInList",
          "package": "language-sqlite",
          "signature": "ExpressionInList Expression [Expression]",
          "source": "src/Language-SQL-SQLite-Types.html#Expression",
          "type": "function"
        },
        "index": {
          "description": "Represents an IN expression with the right-hand side being list of subexpressions",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "ExpressionInList",
          "normalized": "ExpressionInList Expression[Expression]",
          "package": "language-sqlite",
          "partial": "Expression In List",
          "signature": "ExpressionInList Expression[Expression]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:ExpressionInList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents an \u003ccode\u003eIN\u003c/code\u003e expression with the right-hand side being a\n   \u003ccode\u003eSELECT\u003c/code\u003e statement.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "ExpressionInSelect",
          "package": "language-sqlite",
          "signature": "ExpressionInSelect Expression Select",
          "source": "src/Language-SQL-SQLite-Types.html#Expression",
          "type": "function"
        },
        "index": {
          "description": "Represents an IN expression with the right-hand side being SELECT statement",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "ExpressionInSelect",
          "package": "language-sqlite",
          "partial": "Expression In Select",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:ExpressionInSelect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents an \u003ccode\u003eIN\u003c/code\u003e expression with the right-hand side being a\n   table name, optionally qualified by a database name.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "ExpressionInTable",
          "package": "language-sqlite",
          "signature": "ExpressionInTable Expression SinglyQualifiedIdentifier",
          "source": "src/Language-SQL-SQLite-Types.html#Expression",
          "type": "function"
        },
        "index": {
          "description": "Represents an IN expression with the right-hand side being table name optionally qualified by database name",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "ExpressionInTable",
          "package": "language-sqlite",
          "partial": "Expression In Table",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:ExpressionInTable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents an \u003ccode\u003eIS\u003c/code\u003e expression.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "ExpressionIs",
          "package": "language-sqlite",
          "signature": "ExpressionIs Expression Expression",
          "source": "src/Language-SQL-SQLite-Types.html#Expression",
          "type": "function"
        },
        "index": {
          "description": "Represents an IS expression",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "ExpressionIs",
          "package": "language-sqlite",
          "partial": "Expression Is",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:ExpressionIs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents an \u003ccode\u003eIS NOT\u003c/code\u003e expression.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "ExpressionIsNot",
          "package": "language-sqlite",
          "signature": "ExpressionIsNot Expression Expression",
          "source": "src/Language-SQL-SQLite-Types.html#Expression",
          "type": "function"
        },
        "index": {
          "description": "Represents an IS NOT expression",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "ExpressionIsNot",
          "package": "language-sqlite",
          "partial": "Expression Is Not",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:ExpressionIsNot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents an \u003ccode\u003eISNULL\u003c/code\u003e expression.  Not to be confused with an\n   \u003ccode\u003eIS\u003c/code\u003e expression with a literal \u003ccode\u003eNULL\u003c/code\u003e as its right side; the\n   meaning is the same but the parsing is different.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "ExpressionIsnull",
          "package": "language-sqlite",
          "signature": "ExpressionIsnull Expression",
          "source": "src/Language-SQL-SQLite-Types.html#Expression",
          "type": "function"
        },
        "index": {
          "description": "Represents an ISNULL expression Not to be confused with an IS expression with literal NULL as its right side the meaning is the same but the parsing is different",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "ExpressionIsnull",
          "package": "language-sqlite",
          "partial": "Expression Isnull",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:ExpressionIsnull"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents a textual comparison expression.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "ExpressionLike",
          "package": "language-sqlite",
          "signature": "ExpressionLike Expression LikeType Expression Escape",
          "source": "src/Language-SQL-SQLite-Types.html#Expression",
          "type": "function"
        },
        "index": {
          "description": "Represents textual comparison expression",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "ExpressionLike",
          "package": "language-sqlite",
          "partial": "Expression Like",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:ExpressionLike"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents a literal blob (binary large object) expression.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "ExpressionLiteralBlob",
          "package": "language-sqlite",
          "signature": "ExpressionLiteralBlob ByteString",
          "source": "src/Language-SQL-SQLite-Types.html#Expression",
          "type": "function"
        },
        "index": {
          "description": "Represents literal blob binary large object expression",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "ExpressionLiteralBlob",
          "package": "language-sqlite",
          "partial": "Expression Literal Blob",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:ExpressionLiteralBlob"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents a literal \u003ccode\u003ecurrent_date\u003c/code\u003e expression.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "ExpressionLiteralCurrentDate",
          "package": "language-sqlite",
          "signature": "ExpressionLiteralCurrentDate",
          "source": "src/Language-SQL-SQLite-Types.html#Expression",
          "type": "function"
        },
        "index": {
          "description": "Represents literal current date expression",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "ExpressionLiteralCurrentDate",
          "package": "language-sqlite",
          "partial": "Expression Literal Current Date",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:ExpressionLiteralCurrentDate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents a literal \u003ccode\u003ecurrent_time\u003c/code\u003e expression.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "ExpressionLiteralCurrentTime",
          "package": "language-sqlite",
          "signature": "ExpressionLiteralCurrentTime",
          "source": "src/Language-SQL-SQLite-Types.html#Expression",
          "type": "function"
        },
        "index": {
          "description": "Represents literal current time expression",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "ExpressionLiteralCurrentTime",
          "package": "language-sqlite",
          "partial": "Expression Literal Current Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:ExpressionLiteralCurrentTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents a literal \u003ccode\u003ecurrent_timestamp\u003c/code\u003e expression.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "ExpressionLiteralCurrentTimestamp",
          "package": "language-sqlite",
          "signature": "ExpressionLiteralCurrentTimestamp",
          "source": "src/Language-SQL-SQLite-Types.html#Expression",
          "type": "function"
        },
        "index": {
          "description": "Represents literal current timestamp expression",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "ExpressionLiteralCurrentTimestamp",
          "package": "language-sqlite",
          "partial": "Expression Literal Current Timestamp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:ExpressionLiteralCurrentTimestamp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents a literal floating-point expression.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "ExpressionLiteralFloat",
          "package": "language-sqlite",
          "signature": "ExpressionLiteralFloat NonnegativeDouble",
          "source": "src/Language-SQL-SQLite-Types.html#Expression",
          "type": "function"
        },
        "index": {
          "description": "Represents literal floating-point expression",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "ExpressionLiteralFloat",
          "package": "language-sqlite",
          "partial": "Expression Literal Float",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:ExpressionLiteralFloat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents a literal integer expression.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "ExpressionLiteralInteger",
          "package": "language-sqlite",
          "signature": "ExpressionLiteralInteger Word64",
          "source": "src/Language-SQL-SQLite-Types.html#Expression",
          "type": "function"
        },
        "index": {
          "description": "Represents literal integer expression",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "ExpressionLiteralInteger",
          "package": "language-sqlite",
          "partial": "Expression Literal Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:ExpressionLiteralInteger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents a literal \u003ccode\u003eNULL\u003c/code\u003e expression.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "ExpressionLiteralNull",
          "package": "language-sqlite",
          "signature": "ExpressionLiteralNull",
          "source": "src/Language-SQL-SQLite-Types.html#Expression",
          "type": "function"
        },
        "index": {
          "description": "Represents literal NULL expression",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "ExpressionLiteralNull",
          "package": "language-sqlite",
          "partial": "Expression Literal Null",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:ExpressionLiteralNull"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents a literal string expression.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "ExpressionLiteralString",
          "package": "language-sqlite",
          "signature": "ExpressionLiteralString String",
          "source": "src/Language-SQL-SQLite-Types.html#Expression",
          "type": "function"
        },
        "index": {
          "description": "Represents literal string expression",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "ExpressionLiteralString",
          "package": "language-sqlite",
          "partial": "Expression Literal String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:ExpressionLiteralString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents a \u003ccode\u003eNOT BETWEEN\u003c/code\u003e expression.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "ExpressionNotBetween",
          "package": "language-sqlite",
          "signature": "ExpressionNotBetween Expression Expression Expression",
          "source": "src/Language-SQL-SQLite-Types.html#Expression",
          "type": "function"
        },
        "index": {
          "description": "Represents NOT BETWEEN expression",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "ExpressionNotBetween",
          "package": "language-sqlite",
          "partial": "Expression Not Between",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:ExpressionNotBetween"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents a subquery \u003ccode\u003eSELECT\u003c/code\u003e expression with the \u003ccode\u003eNOT EXISTS\u003c/code\u003e\n   qualifier.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "ExpressionNotExistsSubquery",
          "package": "language-sqlite",
          "signature": "ExpressionNotExistsSubquery Select",
          "source": "src/Language-SQL-SQLite-Types.html#Expression",
          "type": "function"
        },
        "index": {
          "description": "Represents subquery SELECT expression with the NOT EXISTS qualifier",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "ExpressionNotExistsSubquery",
          "package": "language-sqlite",
          "partial": "Expression Not Exists Subquery",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:ExpressionNotExistsSubquery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents a \u003ccode\u003eNOT IN\u003c/code\u003e expression with the right-hand side being a\n   list of subexpressions.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "ExpressionNotInList",
          "package": "language-sqlite",
          "signature": "ExpressionNotInList Expression [Expression]",
          "source": "src/Language-SQL-SQLite-Types.html#Expression",
          "type": "function"
        },
        "index": {
          "description": "Represents NOT IN expression with the right-hand side being list of subexpressions",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "ExpressionNotInList",
          "normalized": "ExpressionNotInList Expression[Expression]",
          "package": "language-sqlite",
          "partial": "Expression Not In List",
          "signature": "ExpressionNotInList Expression[Expression]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:ExpressionNotInList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents a \u003ccode\u003eNOT IN\u003c/code\u003e expression with the right-hand side being a\n   \u003ccode\u003eSELECT\u003c/code\u003e statement.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "ExpressionNotInSelect",
          "package": "language-sqlite",
          "signature": "ExpressionNotInSelect Expression Select",
          "source": "src/Language-SQL-SQLite-Types.html#Expression",
          "type": "function"
        },
        "index": {
          "description": "Represents NOT IN expression with the right-hand side being SELECT statement",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "ExpressionNotInSelect",
          "package": "language-sqlite",
          "partial": "Expression Not In Select",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:ExpressionNotInSelect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents a \u003ccode\u003eNOT IN\u003c/code\u003e expression with the right-hand side being a\n   table name, optionally qualified by a database name.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "ExpressionNotInTable",
          "package": "language-sqlite",
          "signature": "ExpressionNotInTable Expression SinglyQualifiedIdentifier",
          "source": "src/Language-SQL-SQLite-Types.html#Expression",
          "type": "function"
        },
        "index": {
          "description": "Represents NOT IN expression with the right-hand side being table name optionally qualified by database name",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "ExpressionNotInTable",
          "package": "language-sqlite",
          "partial": "Expression Not In Table",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:ExpressionNotInTable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents a \u003ccode\u003eNOT NULL\u003c/code\u003e expression.  Not to be confused with a\n   \u003ccode\u003eNOTNULL\u003c/code\u003e expression; the meaning is the same but the parsing is\n   different.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "ExpressionNotNull",
          "package": "language-sqlite",
          "signature": "ExpressionNotNull Expression",
          "source": "src/Language-SQL-SQLite-Types.html#Expression",
          "type": "function"
        },
        "index": {
          "description": "Represents NOT NULL expression Not to be confused with NOTNULL expression the meaning is the same but the parsing is different",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "ExpressionNotNull",
          "package": "language-sqlite",
          "partial": "Expression Not Null",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:ExpressionNotNull"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents a \u003ccode\u003eNOTNULL\u003c/code\u003e expression.  Not to be confused with a\n   \u003ccode\u003eNOT NULL\u003c/code\u003e expression; the meaning is the same but the parsing is\n   different.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "ExpressionNotnull",
          "package": "language-sqlite",
          "signature": "ExpressionNotnull Expression",
          "source": "src/Language-SQL-SQLite-Types.html#Expression",
          "type": "function"
        },
        "index": {
          "description": "Represents NOTNULL expression Not to be confused with NOT NULL expression the meaning is the same but the parsing is different",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "ExpressionNotnull",
          "package": "language-sqlite",
          "partial": "Expression Notnull",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:ExpressionNotnull"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents a parenthesized subexpression.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "ExpressionParenthesized",
          "package": "language-sqlite",
          "signature": "ExpressionParenthesized Expression",
          "source": "src/Language-SQL-SQLite-Types.html#Expression",
          "type": "function"
        },
        "index": {
          "description": "Represents parenthesized subexpression",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "ExpressionParenthesized",
          "package": "language-sqlite",
          "partial": "Expression Parenthesized",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:ExpressionParenthesized"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents a \u003ccode\u003eRAISE(ABORT, string)\u003c/code\u003e expression.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "ExpressionRaiseAbort",
          "package": "language-sqlite",
          "signature": "ExpressionRaiseAbort String",
          "source": "src/Language-SQL-SQLite-Types.html#Expression",
          "type": "function"
        },
        "index": {
          "description": "Represents RAISE ABORT string expression",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "ExpressionRaiseAbort",
          "package": "language-sqlite",
          "partial": "Expression Raise Abort",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:ExpressionRaiseAbort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents a \u003ccode\u003eRAISE(FAIL, string)\u003c/code\u003e expression.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "ExpressionRaiseFail",
          "package": "language-sqlite",
          "signature": "ExpressionRaiseFail String",
          "source": "src/Language-SQL-SQLite-Types.html#Expression",
          "type": "function"
        },
        "index": {
          "description": "Represents RAISE FAIL string expression",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "ExpressionRaiseFail",
          "package": "language-sqlite",
          "partial": "Expression Raise Fail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:ExpressionRaiseFail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents a \u003ccode\u003eRAISE(IGNORE)\u003c/code\u003e expression.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "ExpressionRaiseIgnore",
          "package": "language-sqlite",
          "signature": "ExpressionRaiseIgnore",
          "source": "src/Language-SQL-SQLite-Types.html#Expression",
          "type": "function"
        },
        "index": {
          "description": "Represents RAISE IGNORE expression",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "ExpressionRaiseIgnore",
          "package": "language-sqlite",
          "partial": "Expression Raise Ignore",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:ExpressionRaiseIgnore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents a \u003ccode\u003eRAISE(ROLLBACK, string)\u003c/code\u003e expression.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "ExpressionRaiseRollback",
          "package": "language-sqlite",
          "signature": "ExpressionRaiseRollback String",
          "source": "src/Language-SQL-SQLite-Types.html#Expression",
          "type": "function"
        },
        "index": {
          "description": "Represents RAISE ROLLBACK string expression",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "ExpressionRaiseRollback",
          "package": "language-sqlite",
          "partial": "Expression Raise Rollback",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:ExpressionRaiseRollback"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents a subquery \u003ccode\u003eSELECT\u003c/code\u003e expression.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "ExpressionSubquery",
          "package": "language-sqlite",
          "signature": "ExpressionSubquery Select",
          "source": "src/Language-SQL-SQLite-Types.html#Expression",
          "type": "function"
        },
        "index": {
          "description": "Represents subquery SELECT expression",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "ExpressionSubquery",
          "package": "language-sqlite",
          "partial": "Expression Subquery",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:ExpressionSubquery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents a unary bitwise negation expression.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "ExpressionUnaryBitwiseNot",
          "package": "language-sqlite",
          "signature": "ExpressionUnaryBitwiseNot Expression",
          "source": "src/Language-SQL-SQLite-Types.html#Expression",
          "type": "function"
        },
        "index": {
          "description": "Represents unary bitwise negation expression",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "ExpressionUnaryBitwiseNot",
          "package": "language-sqlite",
          "partial": "Expression Unary Bitwise Not",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:ExpressionUnaryBitwiseNot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents a unary logical negation expression.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "ExpressionUnaryLogicalNot",
          "package": "language-sqlite",
          "signature": "ExpressionUnaryLogicalNot Expression",
          "source": "src/Language-SQL-SQLite-Types.html#Expression",
          "type": "function"
        },
        "index": {
          "description": "Represents unary logical negation expression",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "ExpressionUnaryLogicalNot",
          "package": "language-sqlite",
          "partial": "Expression Unary Logical Not",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:ExpressionUnaryLogicalNot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents a unary negation expression.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "ExpressionUnaryNegative",
          "package": "language-sqlite",
          "signature": "ExpressionUnaryNegative Expression",
          "source": "src/Language-SQL-SQLite-Types.html#Expression",
          "type": "function"
        },
        "index": {
          "description": "Represents unary negation expression",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "ExpressionUnaryNegative",
          "package": "language-sqlite",
          "partial": "Expression Unary Negative",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:ExpressionUnaryNegative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents a unary positive-sign expression.  Yes, this is an nop.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "ExpressionUnaryPositive",
          "package": "language-sqlite",
          "signature": "ExpressionUnaryPositive Expression",
          "source": "src/Language-SQL-SQLite-Types.html#Expression",
          "type": "function"
        },
        "index": {
          "description": "Represents unary positive-sign expression Yes this is an nop",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "ExpressionUnaryPositive",
          "package": "language-sqlite",
          "partial": "Expression Unary Positive",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:ExpressionUnaryPositive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents a positional-variable expression, written in SQL as \u003ccode\u003e?\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "ExpressionVariable",
          "package": "language-sqlite",
          "signature": "ExpressionVariable",
          "source": "src/Language-SQL-SQLite-Types.html#Expression",
          "type": "function"
        },
        "index": {
          "description": "Represents positional-variable expression written in SQL as",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "ExpressionVariable",
          "package": "language-sqlite",
          "partial": "Expression Variable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:ExpressionVariable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents a numbered positional variable expression, written in\n   SQL as \u003ccode\u003e?nnn\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "ExpressionVariableN",
          "package": "language-sqlite",
          "signature": "ExpressionVariableN Word64",
          "source": "src/Language-SQL-SQLite-Types.html#Expression",
          "type": "function"
        },
        "index": {
          "description": "Represents numbered positional variable expression written in SQL as nnn",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "ExpressionVariableN",
          "package": "language-sqlite",
          "partial": "Expression Variable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:ExpressionVariableN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents a named positional variable expression, written in\n   SQL as \u003ccode\u003e:aaaa\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "ExpressionVariableNamed",
          "package": "language-sqlite",
          "signature": "ExpressionVariableNamed String",
          "source": "src/Language-SQL-SQLite-Types.html#Expression",
          "type": "function"
        },
        "index": {
          "description": "Represents named positional variable expression written in SQL as aaaa",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "ExpressionVariableNamed",
          "package": "language-sqlite",
          "partial": "Expression Variable Named",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:ExpressionVariableNamed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "ForEachRow",
          "package": "language-sqlite",
          "signature": "ForEachRow",
          "source": "src/Language-SQL-SQLite-Types.html#MaybeForEachRow",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "ForEachRow",
          "package": "language-sqlite",
          "partial": "For Each Row",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:ForEachRow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "From",
          "package": "language-sqlite",
          "signature": "From JoinSource",
          "source": "src/Language-SQL-SQLite-Types.html#FromClause",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "From",
          "package": "language-sqlite",
          "partial": "From",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:From"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "Glob",
          "package": "language-sqlite",
          "signature": "Glob",
          "source": "src/Language-SQL-SQLite-Types.html#LikeType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "Glob",
          "package": "language-sqlite",
          "partial": "Glob",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:Glob"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "GroupBy",
          "package": "language-sqlite",
          "signature": "GroupBy (OneOrMore OrderingTerm) MaybeHaving",
          "source": "src/Language-SQL-SQLite-Types.html#GroupClause",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "GroupBy",
          "package": "language-sqlite",
          "partial": "Group By",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:GroupBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "Having",
          "package": "language-sqlite",
          "signature": "Having Expression",
          "source": "src/Language-SQL-SQLite-Types.html#MaybeHaving",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "Having",
          "package": "language-sqlite",
          "partial": "Having",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:Having"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "Identifier",
          "package": "language-sqlite",
          "signature": "Identifier String",
          "source": "src/Language-SQL-SQLite-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "Identifier",
          "package": "language-sqlite",
          "partial": "Identifier",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:Identifier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "IfExists",
          "package": "language-sqlite",
          "signature": "IfExists",
          "source": "src/Language-SQL-SQLite-Types.html#MaybeIfExists",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "IfExists",
          "package": "language-sqlite",
          "partial": "If Exists",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:IfExists"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "IfNotExists",
          "package": "language-sqlite",
          "signature": "IfNotExists",
          "source": "src/Language-SQL-SQLite-Types.html#MaybeIfNotExists",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "IfNotExists",
          "package": "language-sqlite",
          "partial": "If Not Exists",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:IfNotExists"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "Immediate",
          "package": "language-sqlite",
          "signature": "Immediate",
          "source": "src/Language-SQL-SQLite-Types.html#MaybeTransactionType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "Immediate",
          "package": "language-sqlite",
          "partial": "Immediate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:Immediate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "IndexedBy",
          "package": "language-sqlite",
          "signature": "IndexedBy UnqualifiedIdentifier",
          "source": "src/Language-SQL-SQLite-Types.html#MaybeIndexedBy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "IndexedBy",
          "package": "language-sqlite",
          "partial": "Indexed By",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:IndexedBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "IndexedColumn",
          "package": "language-sqlite",
          "signature": "IndexedColumn UnqualifiedIdentifier MaybeCollation MaybeAscDesc",
          "source": "src/Language-SQL-SQLite-Types.html#IndexedColumn",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "IndexedColumn",
          "package": "language-sqlite",
          "partial": "Indexed Column",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:IndexedColumn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "InitiallyDeferred",
          "package": "language-sqlite",
          "signature": "InitiallyDeferred",
          "source": "src/Language-SQL-SQLite-Types.html#MaybeInitialDeferralStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "InitiallyDeferred",
          "package": "language-sqlite",
          "partial": "Initially Deferred",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:InitiallyDeferred"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "InitiallyImmediate",
          "package": "language-sqlite",
          "signature": "InitiallyImmediate",
          "source": "src/Language-SQL-SQLite-Types.html#MaybeInitialDeferralStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "InitiallyImmediate",
          "package": "language-sqlite",
          "partial": "Initially Immediate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:InitiallyImmediate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "InnerJoin",
          "package": "language-sqlite",
          "signature": "InnerJoin",
          "source": "src/Language-SQL-SQLite-Types.html#JoinOperation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "InnerJoin",
          "package": "language-sqlite",
          "partial": "Inner Join",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:InnerJoin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "Insert",
          "package": "language-sqlite",
          "signature": "InsertHead -\u003e SinglyQualifiedIdentifier -\u003e InsertBody -\u003e Statement L0 T NS Insert'",
          "source": "src/Language-SQL-SQLite-Types.html#Statement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "Insert",
          "normalized": "InsertHead-\u003eSinglyQualifiedIdentifier-\u003eInsertBody-\u003eStatement L T NS Insert'",
          "package": "language-sqlite",
          "partial": "Insert",
          "signature": "InsertHead-\u003eSinglyQualifiedIdentifier-\u003eInsertBody-\u003eStatement L T NS Insert'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:Insert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "InsertDefaultValues",
          "package": "language-sqlite",
          "signature": "InsertDefaultValues",
          "source": "src/Language-SQL-SQLite-Types.html#InsertBody",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "InsertDefaultValues",
          "package": "language-sqlite",
          "partial": "Insert Default Values",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:InsertDefaultValues"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "InsertNoAlternative",
          "package": "language-sqlite",
          "signature": "InsertNoAlternative",
          "source": "src/Language-SQL-SQLite-Types.html#InsertHead",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "InsertNoAlternative",
          "package": "language-sqlite",
          "partial": "Insert No Alternative",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:InsertNoAlternative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "InsertOn",
          "package": "language-sqlite",
          "signature": "InsertOn",
          "source": "src/Language-SQL-SQLite-Types.html#TriggerCondition",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "InsertOn",
          "package": "language-sqlite",
          "partial": "Insert On",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:InsertOn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "InsertOrAbort",
          "package": "language-sqlite",
          "signature": "InsertOrAbort",
          "source": "src/Language-SQL-SQLite-Types.html#InsertHead",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "InsertOrAbort",
          "package": "language-sqlite",
          "partial": "Insert Or Abort",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:InsertOrAbort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "InsertOrFail",
          "package": "language-sqlite",
          "signature": "InsertOrFail",
          "source": "src/Language-SQL-SQLite-Types.html#InsertHead",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "InsertOrFail",
          "package": "language-sqlite",
          "partial": "Insert Or Fail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:InsertOrFail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "InsertOrIgnore",
          "package": "language-sqlite",
          "signature": "InsertOrIgnore",
          "source": "src/Language-SQL-SQLite-Types.html#InsertHead",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "InsertOrIgnore",
          "package": "language-sqlite",
          "partial": "Insert Or Ignore",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:InsertOrIgnore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "InsertOrReplace",
          "package": "language-sqlite",
          "signature": "InsertOrReplace",
          "source": "src/Language-SQL-SQLite-Types.html#InsertHead",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "InsertOrReplace",
          "package": "language-sqlite",
          "partial": "Insert Or Replace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:InsertOrReplace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "InsertOrRollback",
          "package": "language-sqlite",
          "signature": "InsertOrRollback",
          "source": "src/Language-SQL-SQLite-Types.html#InsertHead",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "InsertOrRollback",
          "package": "language-sqlite",
          "partial": "Insert Or Rollback",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:InsertOrRollback"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "InsertSelect",
          "package": "language-sqlite",
          "signature": "InsertSelect [UnqualifiedIdentifier] Select",
          "source": "src/Language-SQL-SQLite-Types.html#InsertBody",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "InsertSelect",
          "normalized": "InsertSelect[UnqualifiedIdentifier]Select",
          "package": "language-sqlite",
          "partial": "Insert Select",
          "signature": "InsertSelect[UnqualifiedIdentifier]Select",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:InsertSelect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "InsertValues",
          "package": "language-sqlite",
          "signature": "InsertValues [UnqualifiedIdentifier] (OneOrMore Expression)",
          "source": "src/Language-SQL-SQLite-Types.html#InsertBody",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "InsertValues",
          "normalized": "InsertValues[UnqualifiedIdentifier](OneOrMore Expression)",
          "package": "language-sqlite",
          "partial": "Insert Values",
          "signature": "InsertValues[UnqualifiedIdentifier](OneOrMore Expression)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:InsertValues"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "InsteadOf",
          "package": "language-sqlite",
          "signature": "InsteadOf",
          "source": "src/Language-SQL-SQLite-Types.html#TriggerTime",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "InsteadOf",
          "package": "language-sqlite",
          "partial": "Instead Of",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:InsteadOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "IntegerSize",
          "package": "language-sqlite",
          "signature": "IntegerSize MaybeSign Word64",
          "source": "src/Language-SQL-SQLite-Types.html#TypeSizeField",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "IntegerSize",
          "package": "language-sqlite",
          "partial": "Integer Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:IntegerSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "Intersect",
          "package": "language-sqlite",
          "signature": "Intersect",
          "source": "src/Language-SQL-SQLite-Types.html#CompoundOperator",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "Intersect",
          "package": "language-sqlite",
          "partial": "Intersect",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:Intersect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "Join",
          "package": "language-sqlite",
          "signature": "Join",
          "source": "src/Language-SQL-SQLite-Types.html#JoinOperation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "Join",
          "package": "language-sqlite",
          "partial": "Join",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:Join"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "JoinSource",
          "package": "language-sqlite",
          "signature": "JoinSource SingleSource [(JoinOperation, SingleSource, JoinConstraint)]",
          "source": "src/Language-SQL-SQLite-Types.html#JoinSource",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "JoinSource",
          "normalized": "JoinSource SingleSource[(JoinOperation,SingleSource,JoinConstraint)]",
          "package": "language-sqlite",
          "partial": "Join Source",
          "signature": "JoinSource SingleSource[(JoinOperation,SingleSource,JoinConstraint)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:JoinSource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "JustType",
          "package": "language-sqlite",
          "signature": "JustType Type",
          "source": "src/Language-SQL-SQLite-Types.html#MaybeType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "JustType",
          "package": "language-sqlite",
          "partial": "Just Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:JustType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "KeywordAbort",
          "package": "language-sqlite",
          "signature": "KeywordAbort",
          "source": "src/Language-SQL-SQLite-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "KeywordAbort",
          "package": "language-sqlite",
          "partial": "Keyword Abort",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:KeywordAbort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "KeywordAction",
          "package": "language-sqlite",
          "signature": "KeywordAction",
          "source": "src/Language-SQL-SQLite-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "KeywordAction",
          "package": "language-sqlite",
          "partial": "Keyword Action",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:KeywordAction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "KeywordAdd",
          "package": "language-sqlite",
          "signature": "KeywordAdd",
          "source": "src/Language-SQL-SQLite-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "KeywordAdd",
          "package": "language-sqlite",
          "partial": "Keyword Add",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:KeywordAdd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "KeywordAfter",
          "package": "language-sqlite",
          "signature": "KeywordAfter",
          "source": "src/Language-SQL-SQLite-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "KeywordAfter",
          "package": "language-sqlite",
          "partial": "Keyword After",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:KeywordAfter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "KeywordAll",
          "package": "language-sqlite",
          "signature": "KeywordAll",
          "source": "src/Language-SQL-SQLite-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "KeywordAll",
          "package": "language-sqlite",
          "partial": "Keyword All",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:KeywordAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "KeywordAlter",
          "package": "language-sqlite",
          "signature": "KeywordAlter",
          "source": "src/Language-SQL-SQLite-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "KeywordAlter",
          "package": "language-sqlite",
          "partial": "Keyword Alter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:KeywordAlter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "KeywordAnalyze",
          "package": "language-sqlite",
          "signature": "KeywordAnalyze",
          "source": "src/Language-SQL-SQLite-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "KeywordAnalyze",
          "package": "language-sqlite",
          "partial": "Keyword Analyze",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:KeywordAnalyze"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "KeywordAnd",
          "package": "language-sqlite",
          "signature": "KeywordAnd",
          "source": "src/Language-SQL-SQLite-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "KeywordAnd",
          "package": "language-sqlite",
          "partial": "Keyword And",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:KeywordAnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "KeywordAs",
          "package": "language-sqlite",
          "signature": "KeywordAs",
          "source": "src/Language-SQL-SQLite-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "KeywordAs",
          "package": "language-sqlite",
          "partial": "Keyword As",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:KeywordAs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "KeywordAsc",
          "package": "language-sqlite",
          "signature": "KeywordAsc",
          "source": "src/Language-SQL-SQLite-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "KeywordAsc",
          "package": "language-sqlite",
          "partial": "Keyword Asc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:KeywordAsc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "KeywordAttach",
          "package": "language-sqlite",
          "signature": "KeywordAttach",
          "source": "src/Language-SQL-SQLite-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "KeywordAttach",
          "package": "language-sqlite",
          "partial": "Keyword Attach",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:KeywordAttach"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "KeywordAutoincrement",
          "package": "language-sqlite",
          "signature": "KeywordAutoincrement",
          "source": "src/Language-SQL-SQLite-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "KeywordAutoincrement",
          "package": "language-sqlite",
          "partial": "Keyword Autoincrement",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:KeywordAutoincrement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "KeywordBefore",
          "package": "language-sqlite",
          "signature": "KeywordBefore",
          "source": "src/Language-SQL-SQLite-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "KeywordBefore",
          "package": "language-sqlite",
          "partial": "Keyword Before",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:KeywordBefore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "KeywordBegin",
          "package": "language-sqlite",
          "signature": "KeywordBegin",
          "source": "src/Language-SQL-SQLite-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "KeywordBegin",
          "package": "language-sqlite",
          "partial": "Keyword Begin",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:KeywordBegin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "KeywordBetween",
          "package": "language-sqlite",
          "signature": "KeywordBetween",
          "source": "src/Language-SQL-SQLite-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "KeywordBetween",
          "package": "language-sqlite",
          "partial": "Keyword Between",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:KeywordBetween"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "KeywordBy",
          "package": "language-sqlite",
          "signature": "KeywordBy",
          "source": "src/Language-SQL-SQLite-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "KeywordBy",
          "package": "language-sqlite",
          "partial": "Keyword By",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:KeywordBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "KeywordCascade",
          "package": "language-sqlite",
          "signature": "KeywordCascade",
          "source": "src/Language-SQL-SQLite-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "KeywordCascade",
          "package": "language-sqlite",
          "partial": "Keyword Cascade",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:KeywordCascade"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "KeywordCase",
          "package": "language-sqlite",
          "signature": "KeywordCase",
          "source": "src/Language-SQL-SQLite-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "KeywordCase",
          "package": "language-sqlite",
          "partial": "Keyword Case",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:KeywordCase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "KeywordCast",
          "package": "language-sqlite",
          "signature": "KeywordCast",
          "source": "src/Language-SQL-SQLite-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "KeywordCast",
          "package": "language-sqlite",
          "partial": "Keyword Cast",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:KeywordCast"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "KeywordCheck",
          "package": "language-sqlite",
          "signature": "KeywordCheck",
          "source": "src/Language-SQL-SQLite-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "KeywordCheck",
          "package": "language-sqlite",
          "partial": "Keyword Check",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:KeywordCheck"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "KeywordCollate",
          "package": "language-sqlite",
          "signature": "KeywordCollate",
          "source": "src/Language-SQL-SQLite-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "KeywordCollate",
          "package": "language-sqlite",
          "partial": "Keyword Collate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:KeywordCollate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "KeywordColumn",
          "package": "language-sqlite",
          "signature": "KeywordColumn",
          "source": "src/Language-SQL-SQLite-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "KeywordColumn",
          "package": "language-sqlite",
          "partial": "Keyword Column",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:KeywordColumn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "KeywordCommit",
          "package": "language-sqlite",
          "signature": "KeywordCommit",
          "source": "src/Language-SQL-SQLite-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "KeywordCommit",
          "package": "language-sqlite",
          "partial": "Keyword Commit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:KeywordCommit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "KeywordConflict",
          "package": "language-sqlite",
          "signature": "KeywordConflict",
          "source": "src/Language-SQL-SQLite-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "KeywordConflict",
          "package": "language-sqlite",
          "partial": "Keyword Conflict",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:KeywordConflict"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "KeywordConstraint",
          "package": "language-sqlite",
          "signature": "KeywordConstraint",
          "source": "src/Language-SQL-SQLite-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "KeywordConstraint",
          "package": "language-sqlite",
          "partial": "Keyword Constraint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:KeywordConstraint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "KeywordCreate",
          "package": "language-sqlite",
          "signature": "KeywordCreate",
          "source": "src/Language-SQL-SQLite-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "KeywordCreate",
          "package": "language-sqlite",
          "partial": "Keyword Create",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:KeywordCreate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "KeywordCross",
          "package": "language-sqlite",
          "signature": "KeywordCross",
          "source": "src/Language-SQL-SQLite-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "KeywordCross",
          "package": "language-sqlite",
          "partial": "Keyword Cross",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:KeywordCross"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "KeywordCurrentDate",
          "package": "language-sqlite",
          "signature": "KeywordCurrentDate",
          "source": "src/Language-SQL-SQLite-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "KeywordCurrentDate",
          "package": "language-sqlite",
          "partial": "Keyword Current Date",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:KeywordCurrentDate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "KeywordCurrentTime",
          "package": "language-sqlite",
          "signature": "KeywordCurrentTime",
          "source": "src/Language-SQL-SQLite-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "KeywordCurrentTime",
          "package": "language-sqlite",
          "partial": "Keyword Current Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:KeywordCurrentTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "KeywordCurrentTimestamp",
          "package": "language-sqlite",
          "signature": "KeywordCurrentTimestamp",
          "source": "src/Language-SQL-SQLite-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "KeywordCurrentTimestamp",
          "package": "language-sqlite",
          "partial": "Keyword Current Timestamp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:KeywordCurrentTimestamp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "KeywordDatabase",
          "package": "language-sqlite",
          "signature": "KeywordDatabase",
          "source": "src/Language-SQL-SQLite-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "KeywordDatabase",
          "package": "language-sqlite",
          "partial": "Keyword Database",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:KeywordDatabase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "KeywordDefault",
          "package": "language-sqlite",
          "signature": "KeywordDefault",
          "source": "src/Language-SQL-SQLite-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "KeywordDefault",
          "package": "language-sqlite",
          "partial": "Keyword Default",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:KeywordDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "KeywordDeferrable",
          "package": "language-sqlite",
          "signature": "KeywordDeferrable",
          "source": "src/Language-SQL-SQLite-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "KeywordDeferrable",
          "package": "language-sqlite",
          "partial": "Keyword Deferrable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:KeywordDeferrable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "KeywordDeferred",
          "package": "language-sqlite",
          "signature": "KeywordDeferred",
          "source": "src/Language-SQL-SQLite-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "KeywordDeferred",
          "package": "language-sqlite",
          "partial": "Keyword Deferred",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:KeywordDeferred"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "KeywordDelete",
          "package": "language-sqlite",
          "signature": "KeywordDelete",
          "source": "src/Language-SQL-SQLite-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "KeywordDelete",
          "package": "language-sqlite",
          "partial": "Keyword Delete",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:KeywordDelete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "KeywordDesc",
          "package": "language-sqlite",
          "signature": "KeywordDesc",
          "source": "src/Language-SQL-SQLite-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "KeywordDesc",
          "package": "language-sqlite",
          "partial": "Keyword Desc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:KeywordDesc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "KeywordDetach",
          "package": "language-sqlite",
          "signature": "KeywordDetach",
          "source": "src/Language-SQL-SQLite-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "KeywordDetach",
          "package": "language-sqlite",
          "partial": "Keyword Detach",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:KeywordDetach"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "KeywordDistinct",
          "package": "language-sqlite",
          "signature": "KeywordDistinct",
          "source": "src/Language-SQL-SQLite-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "KeywordDistinct",
          "package": "language-sqlite",
          "partial": "Keyword Distinct",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:KeywordDistinct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "KeywordDrop",
          "package": "language-sqlite",
          "signature": "KeywordDrop",
          "source": "src/Language-SQL-SQLite-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "KeywordDrop",
          "package": "language-sqlite",
          "partial": "Keyword Drop",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:KeywordDrop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "KeywordEach",
          "package": "language-sqlite",
          "signature": "KeywordEach",
          "source": "src/Language-SQL-SQLite-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "KeywordEach",
          "package": "language-sqlite",
          "partial": "Keyword Each",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:KeywordEach"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "KeywordElse",
          "package": "language-sqlite",
          "signature": "KeywordElse",
          "source": "src/Language-SQL-SQLite-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "KeywordElse",
          "package": "language-sqlite",
          "partial": "Keyword Else",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:KeywordElse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "KeywordEnd",
          "package": "language-sqlite",
          "signature": "KeywordEnd",
          "source": "src/Language-SQL-SQLite-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "KeywordEnd",
          "package": "language-sqlite",
          "partial": "Keyword End",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:KeywordEnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "KeywordEscape",
          "package": "language-sqlite",
          "signature": "KeywordEscape",
          "source": "src/Language-SQL-SQLite-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "KeywordEscape",
          "package": "language-sqlite",
          "partial": "Keyword Escape",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:KeywordEscape"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "KeywordExcept",
          "package": "language-sqlite",
          "signature": "KeywordExcept",
          "source": "src/Language-SQL-SQLite-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "KeywordExcept",
          "package": "language-sqlite",
          "partial": "Keyword Except",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:KeywordExcept"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "KeywordExclusive",
          "package": "language-sqlite",
          "signature": "KeywordExclusive",
          "source": "src/Language-SQL-SQLite-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "KeywordExclusive",
          "package": "language-sqlite",
          "partial": "Keyword Exclusive",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:KeywordExclusive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "KeywordExists",
          "package": "language-sqlite",
          "signature": "KeywordExists",
          "source": "src/Language-SQL-SQLite-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "KeywordExists",
          "package": "language-sqlite",
          "partial": "Keyword Exists",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:KeywordExists"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "KeywordExplain",
          "package": "language-sqlite",
          "signature": "KeywordExplain",
          "source": "src/Language-SQL-SQLite-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "KeywordExplain",
          "package": "language-sqlite",
          "partial": "Keyword Explain",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:KeywordExplain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "KeywordFail",
          "package": "language-sqlite",
          "signature": "KeywordFail",
          "source": "src/Language-SQL-SQLite-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "KeywordFail",
          "package": "language-sqlite",
          "partial": "Keyword Fail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:KeywordFail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "KeywordFor",
          "package": "language-sqlite",
          "signature": "KeywordFor",
          "source": "src/Language-SQL-SQLite-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "KeywordFor",
          "package": "language-sqlite",
          "partial": "Keyword For",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:KeywordFor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "KeywordForeign",
          "package": "language-sqlite",
          "signature": "KeywordForeign",
          "source": "src/Language-SQL-SQLite-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "KeywordForeign",
          "package": "language-sqlite",
          "partial": "Keyword Foreign",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:KeywordForeign"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "KeywordFrom",
          "package": "language-sqlite",
          "signature": "KeywordFrom",
          "source": "src/Language-SQL-SQLite-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "KeywordFrom",
          "package": "language-sqlite",
          "partial": "Keyword From",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:KeywordFrom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "KeywordFull",
          "package": "language-sqlite",
          "signature": "KeywordFull",
          "source": "src/Language-SQL-SQLite-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "KeywordFull",
          "package": "language-sqlite",
          "partial": "Keyword Full",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:KeywordFull"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "KeywordGlob",
          "package": "language-sqlite",
          "signature": "KeywordGlob",
          "source": "src/Language-SQL-SQLite-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "KeywordGlob",
          "package": "language-sqlite",
          "partial": "Keyword Glob",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:KeywordGlob"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "KeywordGroup",
          "package": "language-sqlite",
          "signature": "KeywordGroup",
          "source": "src/Language-SQL-SQLite-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "KeywordGroup",
          "package": "language-sqlite",
          "partial": "Keyword Group",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:KeywordGroup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "KeywordHaving",
          "package": "language-sqlite",
          "signature": "KeywordHaving",
          "source": "src/Language-SQL-SQLite-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "KeywordHaving",
          "package": "language-sqlite",
          "partial": "Keyword Having",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:KeywordHaving"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "KeywordIf",
          "package": "language-sqlite",
          "signature": "KeywordIf",
          "source": "src/Language-SQL-SQLite-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "KeywordIf",
          "package": "language-sqlite",
          "partial": "Keyword If",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:KeywordIf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "KeywordIgnore",
          "package": "language-sqlite",
          "signature": "KeywordIgnore",
          "source": "src/Language-SQL-SQLite-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "KeywordIgnore",
          "package": "language-sqlite",
          "partial": "Keyword Ignore",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:KeywordIgnore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "KeywordImmediate",
          "package": "language-sqlite",
          "signature": "KeywordImmediate",
          "source": "src/Language-SQL-SQLite-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "KeywordImmediate",
          "package": "language-sqlite",
          "partial": "Keyword Immediate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:KeywordImmediate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "KeywordIn",
          "package": "language-sqlite",
          "signature": "KeywordIn",
          "source": "src/Language-SQL-SQLite-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "KeywordIn",
          "package": "language-sqlite",
          "partial": "Keyword In",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:KeywordIn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "KeywordIndex",
          "package": "language-sqlite",
          "signature": "KeywordIndex",
          "source": "src/Language-SQL-SQLite-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "KeywordIndex",
          "package": "language-sqlite",
          "partial": "Keyword Index",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:KeywordIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "KeywordIndexed",
          "package": "language-sqlite",
          "signature": "KeywordIndexed",
          "source": "src/Language-SQL-SQLite-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "KeywordIndexed",
          "package": "language-sqlite",
          "partial": "Keyword Indexed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:KeywordIndexed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "KeywordInitially",
          "package": "language-sqlite",
          "signature": "KeywordInitially",
          "source": "src/Language-SQL-SQLite-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "KeywordInitially",
          "package": "language-sqlite",
          "partial": "Keyword Initially",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:KeywordInitially"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "KeywordInner",
          "package": "language-sqlite",
          "signature": "KeywordInner",
          "source": "src/Language-SQL-SQLite-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "KeywordInner",
          "package": "language-sqlite",
          "partial": "Keyword Inner",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:KeywordInner"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "KeywordInsert",
          "package": "language-sqlite",
          "signature": "KeywordInsert",
          "source": "src/Language-SQL-SQLite-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "KeywordInsert",
          "package": "language-sqlite",
          "partial": "Keyword Insert",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:KeywordInsert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "KeywordInstead",
          "package": "language-sqlite",
          "signature": "KeywordInstead",
          "source": "src/Language-SQL-SQLite-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "KeywordInstead",
          "package": "language-sqlite",
          "partial": "Keyword Instead",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:KeywordInstead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "KeywordIntersect",
          "package": "language-sqlite",
          "signature": "KeywordIntersect",
          "source": "src/Language-SQL-SQLite-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "KeywordIntersect",
          "package": "language-sqlite",
          "partial": "Keyword Intersect",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:KeywordIntersect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "KeywordInto",
          "package": "language-sqlite",
          "signature": "KeywordInto",
          "source": "src/Language-SQL-SQLite-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "KeywordInto",
          "package": "language-sqlite",
          "partial": "Keyword Into",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:KeywordInto"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "KeywordIs",
          "package": "language-sqlite",
          "signature": "KeywordIs",
          "source": "src/Language-SQL-SQLite-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "KeywordIs",
          "package": "language-sqlite",
          "partial": "Keyword Is",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:KeywordIs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "KeywordIsnull",
          "package": "language-sqlite",
          "signature": "KeywordIsnull",
          "source": "src/Language-SQL-SQLite-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "KeywordIsnull",
          "package": "language-sqlite",
          "partial": "Keyword Isnull",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:KeywordIsnull"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "KeywordJoin",
          "package": "language-sqlite",
          "signature": "KeywordJoin",
          "source": "src/Language-SQL-SQLite-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "KeywordJoin",
          "package": "language-sqlite",
          "partial": "Keyword Join",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:KeywordJoin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "KeywordKey",
          "package": "language-sqlite",
          "signature": "KeywordKey",
          "source": "src/Language-SQL-SQLite-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "KeywordKey",
          "package": "language-sqlite",
          "partial": "Keyword Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:KeywordKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "KeywordLeft",
          "package": "language-sqlite",
          "signature": "KeywordLeft",
          "source": "src/Language-SQL-SQLite-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "KeywordLeft",
          "package": "language-sqlite",
          "partial": "Keyword Left",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:KeywordLeft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "KeywordLike",
          "package": "language-sqlite",
          "signature": "KeywordLike",
          "source": "src/Language-SQL-SQLite-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "KeywordLike",
          "package": "language-sqlite",
          "partial": "Keyword Like",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:KeywordLike"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "KeywordLimit",
          "package": "language-sqlite",
          "signature": "KeywordLimit",
          "source": "src/Language-SQL-SQLite-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "KeywordLimit",
          "package": "language-sqlite",
          "partial": "Keyword Limit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:KeywordLimit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "KeywordMatch",
          "package": "language-sqlite",
          "signature": "KeywordMatch",
          "source": "src/Language-SQL-SQLite-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "KeywordMatch",
          "package": "language-sqlite",
          "partial": "Keyword Match",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:KeywordMatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "KeywordNatural",
          "package": "language-sqlite",
          "signature": "KeywordNatural",
          "source": "src/Language-SQL-SQLite-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "KeywordNatural",
          "package": "language-sqlite",
          "partial": "Keyword Natural",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:KeywordNatural"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "KeywordNo",
          "package": "language-sqlite",
          "signature": "KeywordNo",
          "source": "src/Language-SQL-SQLite-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "KeywordNo",
          "package": "language-sqlite",
          "partial": "Keyword No",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:KeywordNo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "KeywordNot",
          "package": "language-sqlite",
          "signature": "KeywordNot",
          "source": "src/Language-SQL-SQLite-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "KeywordNot",
          "package": "language-sqlite",
          "partial": "Keyword Not",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:KeywordNot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "KeywordNotnull",
          "package": "language-sqlite",
          "signature": "KeywordNotnull",
          "source": "src/Language-SQL-SQLite-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "KeywordNotnull",
          "package": "language-sqlite",
          "partial": "Keyword Notnull",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:KeywordNotnull"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "KeywordNull",
          "package": "language-sqlite",
          "signature": "KeywordNull",
          "source": "src/Language-SQL-SQLite-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "KeywordNull",
          "package": "language-sqlite",
          "partial": "Keyword Null",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:KeywordNull"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "KeywordOf",
          "package": "language-sqlite",
          "signature": "KeywordOf",
          "source": "src/Language-SQL-SQLite-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "KeywordOf",
          "package": "language-sqlite",
          "partial": "Keyword Of",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:KeywordOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "KeywordOffset",
          "package": "language-sqlite",
          "signature": "KeywordOffset",
          "source": "src/Language-SQL-SQLite-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "KeywordOffset",
          "package": "language-sqlite",
          "partial": "Keyword Offset",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:KeywordOffset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "KeywordOn",
          "package": "language-sqlite",
          "signature": "KeywordOn",
          "source": "src/Language-SQL-SQLite-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "KeywordOn",
          "package": "language-sqlite",
          "partial": "Keyword On",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:KeywordOn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "KeywordOr",
          "package": "language-sqlite",
          "signature": "KeywordOr",
          "source": "src/Language-SQL-SQLite-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "KeywordOr",
          "package": "language-sqlite",
          "partial": "Keyword Or",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:KeywordOr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "KeywordOrder",
          "package": "language-sqlite",
          "signature": "KeywordOrder",
          "source": "src/Language-SQL-SQLite-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "KeywordOrder",
          "package": "language-sqlite",
          "partial": "Keyword Order",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:KeywordOrder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "KeywordOuter",
          "package": "language-sqlite",
          "signature": "KeywordOuter",
          "source": "src/Language-SQL-SQLite-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "KeywordOuter",
          "package": "language-sqlite",
          "partial": "Keyword Outer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:KeywordOuter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "KeywordPlan",
          "package": "language-sqlite",
          "signature": "KeywordPlan",
          "source": "src/Language-SQL-SQLite-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "KeywordPlan",
          "package": "language-sqlite",
          "partial": "Keyword Plan",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:KeywordPlan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "KeywordPragma",
          "package": "language-sqlite",
          "signature": "KeywordPragma",
          "source": "src/Language-SQL-SQLite-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "KeywordPragma",
          "package": "language-sqlite",
          "partial": "Keyword Pragma",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:KeywordPragma"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "KeywordPrimary",
          "package": "language-sqlite",
          "signature": "KeywordPrimary",
          "source": "src/Language-SQL-SQLite-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "KeywordPrimary",
          "package": "language-sqlite",
          "partial": "Keyword Primary",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:KeywordPrimary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "KeywordQuery",
          "package": "language-sqlite",
          "signature": "KeywordQuery",
          "source": "src/Language-SQL-SQLite-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "KeywordQuery",
          "package": "language-sqlite",
          "partial": "Keyword Query",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:KeywordQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "KeywordRaise",
          "package": "language-sqlite",
          "signature": "KeywordRaise",
          "source": "src/Language-SQL-SQLite-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "KeywordRaise",
          "package": "language-sqlite",
          "partial": "Keyword Raise",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:KeywordRaise"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "KeywordReferences",
          "package": "language-sqlite",
          "signature": "KeywordReferences",
          "source": "src/Language-SQL-SQLite-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "KeywordReferences",
          "package": "language-sqlite",
          "partial": "Keyword References",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:KeywordReferences"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "KeywordRegexp",
          "package": "language-sqlite",
          "signature": "KeywordRegexp",
          "source": "src/Language-SQL-SQLite-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "KeywordRegexp",
          "package": "language-sqlite",
          "partial": "Keyword Regexp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:KeywordRegexp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "KeywordReindex",
          "package": "language-sqlite",
          "signature": "KeywordReindex",
          "source": "src/Language-SQL-SQLite-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "KeywordReindex",
          "package": "language-sqlite",
          "partial": "Keyword Reindex",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:KeywordReindex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "KeywordRelease",
          "package": "language-sqlite",
          "signature": "KeywordRelease",
          "source": "src/Language-SQL-SQLite-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "KeywordRelease",
          "package": "language-sqlite",
          "partial": "Keyword Release",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:KeywordRelease"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "KeywordRename",
          "package": "language-sqlite",
          "signature": "KeywordRename",
          "source": "src/Language-SQL-SQLite-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "KeywordRename",
          "package": "language-sqlite",
          "partial": "Keyword Rename",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:KeywordRename"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "KeywordReplace",
          "package": "language-sqlite",
          "signature": "KeywordReplace",
          "source": "src/Language-SQL-SQLite-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "KeywordReplace",
          "package": "language-sqlite",
          "partial": "Keyword Replace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:KeywordReplace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "KeywordRestrict",
          "package": "language-sqlite",
          "signature": "KeywordRestrict",
          "source": "src/Language-SQL-SQLite-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "KeywordRestrict",
          "package": "language-sqlite",
          "partial": "Keyword Restrict",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:KeywordRestrict"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "KeywordRight",
          "package": "language-sqlite",
          "signature": "KeywordRight",
          "source": "src/Language-SQL-SQLite-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "KeywordRight",
          "package": "language-sqlite",
          "partial": "Keyword Right",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:KeywordRight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "KeywordRollback",
          "package": "language-sqlite",
          "signature": "KeywordRollback",
          "source": "src/Language-SQL-SQLite-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "KeywordRollback",
          "package": "language-sqlite",
          "partial": "Keyword Rollback",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:KeywordRollback"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "KeywordRow",
          "package": "language-sqlite",
          "signature": "KeywordRow",
          "source": "src/Language-SQL-SQLite-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "KeywordRow",
          "package": "language-sqlite",
          "partial": "Keyword Row",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:KeywordRow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "KeywordSavepoint",
          "package": "language-sqlite",
          "signature": "KeywordSavepoint",
          "source": "src/Language-SQL-SQLite-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "KeywordSavepoint",
          "package": "language-sqlite",
          "partial": "Keyword Savepoint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:KeywordSavepoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "KeywordSelect",
          "package": "language-sqlite",
          "signature": "KeywordSelect",
          "source": "src/Language-SQL-SQLite-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "KeywordSelect",
          "package": "language-sqlite",
          "partial": "Keyword Select",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:KeywordSelect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "KeywordSet",
          "package": "language-sqlite",
          "signature": "KeywordSet",
          "source": "src/Language-SQL-SQLite-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "KeywordSet",
          "package": "language-sqlite",
          "partial": "Keyword Set",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:KeywordSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "KeywordTable",
          "package": "language-sqlite",
          "signature": "KeywordTable",
          "source": "src/Language-SQL-SQLite-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "KeywordTable",
          "package": "language-sqlite",
          "partial": "Keyword Table",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:KeywordTable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "KeywordTemp",
          "package": "language-sqlite",
          "signature": "KeywordTemp",
          "source": "src/Language-SQL-SQLite-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "KeywordTemp",
          "package": "language-sqlite",
          "partial": "Keyword Temp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:KeywordTemp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "KeywordTemporary",
          "package": "language-sqlite",
          "signature": "KeywordTemporary",
          "source": "src/Language-SQL-SQLite-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "KeywordTemporary",
          "package": "language-sqlite",
          "partial": "Keyword Temporary",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:KeywordTemporary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "KeywordThen",
          "package": "language-sqlite",
          "signature": "KeywordThen",
          "source": "src/Language-SQL-SQLite-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "KeywordThen",
          "package": "language-sqlite",
          "partial": "Keyword Then",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:KeywordThen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "KeywordTo",
          "package": "language-sqlite",
          "signature": "KeywordTo",
          "source": "src/Language-SQL-SQLite-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "KeywordTo",
          "package": "language-sqlite",
          "partial": "Keyword To",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:KeywordTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "KeywordTransaction",
          "package": "language-sqlite",
          "signature": "KeywordTransaction",
          "source": "src/Language-SQL-SQLite-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "KeywordTransaction",
          "package": "language-sqlite",
          "partial": "Keyword Transaction",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:KeywordTransaction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "KeywordTrigger",
          "package": "language-sqlite",
          "signature": "KeywordTrigger",
          "source": "src/Language-SQL-SQLite-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "KeywordTrigger",
          "package": "language-sqlite",
          "partial": "Keyword Trigger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:KeywordTrigger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "KeywordUnion",
          "package": "language-sqlite",
          "signature": "KeywordUnion",
          "source": "src/Language-SQL-SQLite-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "KeywordUnion",
          "package": "language-sqlite",
          "partial": "Keyword Union",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:KeywordUnion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "KeywordUnique",
          "package": "language-sqlite",
          "signature": "KeywordUnique",
          "source": "src/Language-SQL-SQLite-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "KeywordUnique",
          "package": "language-sqlite",
          "partial": "Keyword Unique",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:KeywordUnique"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "KeywordUpdate",
          "package": "language-sqlite",
          "signature": "KeywordUpdate",
          "source": "src/Language-SQL-SQLite-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "KeywordUpdate",
          "package": "language-sqlite",
          "partial": "Keyword Update",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:KeywordUpdate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "KeywordUsing",
          "package": "language-sqlite",
          "signature": "KeywordUsing",
          "source": "src/Language-SQL-SQLite-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "KeywordUsing",
          "package": "language-sqlite",
          "partial": "Keyword Using",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:KeywordUsing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "KeywordVacuum",
          "package": "language-sqlite",
          "signature": "KeywordVacuum",
          "source": "src/Language-SQL-SQLite-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "KeywordVacuum",
          "package": "language-sqlite",
          "partial": "Keyword Vacuum",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:KeywordVacuum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "KeywordValues",
          "package": "language-sqlite",
          "signature": "KeywordValues",
          "source": "src/Language-SQL-SQLite-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "KeywordValues",
          "package": "language-sqlite",
          "partial": "Keyword Values",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:KeywordValues"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "KeywordView",
          "package": "language-sqlite",
          "signature": "KeywordView",
          "source": "src/Language-SQL-SQLite-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "KeywordView",
          "package": "language-sqlite",
          "partial": "Keyword View",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:KeywordView"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "KeywordVirtual",
          "package": "language-sqlite",
          "signature": "KeywordVirtual",
          "source": "src/Language-SQL-SQLite-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "KeywordVirtual",
          "package": "language-sqlite",
          "partial": "Keyword Virtual",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:KeywordVirtual"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "KeywordWhen",
          "package": "language-sqlite",
          "signature": "KeywordWhen",
          "source": "src/Language-SQL-SQLite-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "KeywordWhen",
          "package": "language-sqlite",
          "partial": "Keyword When",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:KeywordWhen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "KeywordWhere",
          "package": "language-sqlite",
          "signature": "KeywordWhere",
          "source": "src/Language-SQL-SQLite-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "KeywordWhere",
          "package": "language-sqlite",
          "partial": "Keyword Where",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:KeywordWhere"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "LeftJoin",
          "package": "language-sqlite",
          "signature": "LeftJoin",
          "source": "src/Language-SQL-SQLite-Types.html#JoinOperation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "LeftJoin",
          "package": "language-sqlite",
          "partial": "Left Join",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:LeftJoin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "LeftOuterJoin",
          "package": "language-sqlite",
          "signature": "LeftOuterJoin",
          "source": "src/Language-SQL-SQLite-Types.html#JoinOperation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "LeftOuterJoin",
          "package": "language-sqlite",
          "partial": "Left Outer Join",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:LeftOuterJoin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "Like",
          "package": "language-sqlite",
          "signature": "Like",
          "source": "src/Language-SQL-SQLite-Types.html#LikeType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "Like",
          "package": "language-sqlite",
          "partial": "Like",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:Like"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "Limit",
          "package": "language-sqlite",
          "signature": "Limit Word64",
          "source": "src/Language-SQL-SQLite-Types.html#LimitClause",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "Limit",
          "package": "language-sqlite",
          "partial": "Limit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:Limit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "LimitComma",
          "package": "language-sqlite",
          "signature": "LimitComma Word64 Word64",
          "source": "src/Language-SQL-SQLite-Types.html#LimitClause",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "LimitComma",
          "package": "language-sqlite",
          "partial": "Limit Comma",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:LimitComma"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "LimitOffset",
          "package": "language-sqlite",
          "signature": "LimitOffset Word64 Word64",
          "source": "src/Language-SQL-SQLite-Types.html#LimitClause",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "LimitOffset",
          "package": "language-sqlite",
          "partial": "Limit Offset",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:LimitOffset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "LiteralBlob",
          "package": "language-sqlite",
          "signature": "LiteralBlob ByteString",
          "source": "src/Language-SQL-SQLite-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "LiteralBlob",
          "package": "language-sqlite",
          "partial": "Literal Blob",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:LiteralBlob"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "LiteralFloat",
          "package": "language-sqlite",
          "signature": "LiteralFloat NonnegativeDouble",
          "source": "src/Language-SQL-SQLite-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "LiteralFloat",
          "package": "language-sqlite",
          "partial": "Literal Float",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:LiteralFloat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "LiteralInteger",
          "package": "language-sqlite",
          "signature": "LiteralInteger Word64",
          "source": "src/Language-SQL-SQLite-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "LiteralInteger",
          "package": "language-sqlite",
          "partial": "Literal Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:LiteralInteger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "LiteralString",
          "package": "language-sqlite",
          "signature": "LiteralString String",
          "source": "src/Language-SQL-SQLite-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "LiteralString",
          "package": "language-sqlite",
          "partial": "Literal String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:LiteralString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "Match",
          "package": "language-sqlite",
          "signature": "Match",
          "source": "src/Language-SQL-SQLite-Types.html#LikeType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "Match",
          "package": "language-sqlite",
          "partial": "Match",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:Match"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "ModuleArgument",
          "package": "language-sqlite",
          "signature": "ModuleArgument String",
          "source": "src/Language-SQL-SQLite-Types.html#ModuleArgument",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "ModuleArgument",
          "package": "language-sqlite",
          "partial": "Module Argument",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:ModuleArgument"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "ModuleArgumentToken",
          "package": "language-sqlite",
          "signature": "ModuleArgumentToken String",
          "source": "src/Language-SQL-SQLite-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "ModuleArgumentToken",
          "package": "language-sqlite",
          "partial": "Module Argument Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:ModuleArgumentToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "NamePragmaValue",
          "package": "language-sqlite",
          "signature": "NamePragmaValue UnqualifiedIdentifier",
          "source": "src/Language-SQL-SQLite-Types.html#PragmaValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "NamePragmaValue",
          "package": "language-sqlite",
          "partial": "Name Pragma Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:NamePragmaValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "NaturalCrossJoin",
          "package": "language-sqlite",
          "signature": "NaturalCrossJoin",
          "source": "src/Language-SQL-SQLite-Types.html#JoinOperation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "NaturalCrossJoin",
          "package": "language-sqlite",
          "partial": "Natural Cross Join",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:NaturalCrossJoin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "NaturalInnerJoin",
          "package": "language-sqlite",
          "signature": "NaturalInnerJoin",
          "source": "src/Language-SQL-SQLite-Types.html#JoinOperation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "NaturalInnerJoin",
          "package": "language-sqlite",
          "partial": "Natural Inner Join",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:NaturalInnerJoin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "NaturalJoin",
          "package": "language-sqlite",
          "signature": "NaturalJoin",
          "source": "src/Language-SQL-SQLite-Types.html#JoinOperation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "NaturalJoin",
          "package": "language-sqlite",
          "partial": "Natural Join",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:NaturalJoin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "NaturalLeftJoin",
          "package": "language-sqlite",
          "signature": "NaturalLeftJoin",
          "source": "src/Language-SQL-SQLite-Types.html#JoinOperation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "NaturalLeftJoin",
          "package": "language-sqlite",
          "partial": "Natural Left Join",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:NaturalLeftJoin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "NaturalLeftOuterJoin",
          "package": "language-sqlite",
          "signature": "NaturalLeftOuterJoin",
          "source": "src/Language-SQL-SQLite-Types.html#JoinOperation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "NaturalLeftOuterJoin",
          "package": "language-sqlite",
          "partial": "Natural Left Outer Join",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:NaturalLeftOuterJoin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "NaturalOuterJoin",
          "package": "language-sqlite",
          "signature": "NaturalOuterJoin",
          "source": "src/Language-SQL-SQLite-Types.html#JoinOperation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "NaturalOuterJoin",
          "package": "language-sqlite",
          "partial": "Natural Outer Join",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:NaturalOuterJoin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "NegativeSign",
          "package": "language-sqlite",
          "signature": "NegativeSign",
          "source": "src/Language-SQL-SQLite-Types.html#MaybeSign",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "NegativeSign",
          "package": "language-sqlite",
          "partial": "Negative Sign",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:NegativeSign"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "NoAction",
          "package": "language-sqlite",
          "signature": "NoAction",
          "source": "src/Language-SQL-SQLite-Types.html#ForeignKeyClauseActionPart",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "NoAction",
          "package": "language-sqlite",
          "partial": "No Action",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:NoAction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "NoAs",
          "package": "language-sqlite",
          "signature": "NoAs",
          "source": "src/Language-SQL-SQLite-Types.html#MaybeAs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "NoAs",
          "package": "language-sqlite",
          "partial": "No As",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:NoAs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "NoAscDesc",
          "package": "language-sqlite",
          "signature": "NoAscDesc",
          "source": "src/Language-SQL-SQLite-Types.html#MaybeAscDesc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "NoAscDesc",
          "package": "language-sqlite",
          "partial": "No Asc Desc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:NoAscDesc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "NoAutoincrement",
          "package": "language-sqlite",
          "signature": "NoAutoincrement",
          "source": "src/Language-SQL-SQLite-Types.html#MaybeAutoincrement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "NoAutoincrement",
          "package": "language-sqlite",
          "partial": "No Autoincrement",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:NoAutoincrement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "NoCollation",
          "package": "language-sqlite",
          "signature": "NoCollation",
          "source": "src/Language-SQL-SQLite-Types.html#MaybeCollation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "NoCollation",
          "package": "language-sqlite",
          "partial": "No Collation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:NoCollation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "NoConstraint",
          "package": "language-sqlite",
          "signature": "NoConstraint",
          "source": "src/Language-SQL-SQLite-Types.html#JoinConstraint",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "NoConstraint",
          "package": "language-sqlite",
          "partial": "No Constraint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:NoConstraint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "NoConstraintName",
          "package": "language-sqlite",
          "signature": "NoConstraintName",
          "source": "src/Language-SQL-SQLite-Types.html#MaybeConstraintName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "NoConstraintName",
          "package": "language-sqlite",
          "partial": "No Constraint Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:NoConstraintName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "NoDeferrablePart",
          "package": "language-sqlite",
          "signature": "NoDeferrablePart",
          "source": "src/Language-SQL-SQLite-Types.html#MaybeForeignKeyClauseDeferrablePart",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "NoDeferrablePart",
          "package": "language-sqlite",
          "partial": "No Deferrable Part",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:NoDeferrablePart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "NoDistinctness",
          "package": "language-sqlite",
          "signature": "NoDistinctness",
          "source": "src/Language-SQL-SQLite-Types.html#Distinctness",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "NoDistinctness",
          "package": "language-sqlite",
          "partial": "No Distinctness",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:NoDistinctness"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "NoElse",
          "package": "language-sqlite",
          "signature": "NoElse",
          "source": "src/Language-SQL-SQLite-Types.html#Else",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "NoElse",
          "package": "language-sqlite",
          "partial": "No Else",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:NoElse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "NoEscape",
          "package": "language-sqlite",
          "signature": "NoEscape",
          "source": "src/Language-SQL-SQLite-Types.html#Escape",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "NoEscape",
          "package": "language-sqlite",
          "partial": "No Escape",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:NoEscape"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "NoForEachRow",
          "package": "language-sqlite",
          "signature": "NoForEachRow",
          "source": "src/Language-SQL-SQLite-Types.html#MaybeForEachRow",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "NoForEachRow",
          "package": "language-sqlite",
          "partial": "No For Each Row",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:NoForEachRow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "NoHaving",
          "package": "language-sqlite",
          "signature": "NoHaving",
          "source": "src/Language-SQL-SQLite-Types.html#MaybeHaving",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "NoHaving",
          "package": "language-sqlite",
          "partial": "No Having",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:NoHaving"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "NoIfExists",
          "package": "language-sqlite",
          "signature": "NoIfExists",
          "source": "src/Language-SQL-SQLite-Types.html#MaybeIfExists",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "NoIfExists",
          "package": "language-sqlite",
          "partial": "No If Exists",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:NoIfExists"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "NoIfNotExists",
          "package": "language-sqlite",
          "signature": "NoIfNotExists",
          "source": "src/Language-SQL-SQLite-Types.html#MaybeIfNotExists",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "NoIfNotExists",
          "package": "language-sqlite",
          "partial": "No If Not Exists",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:NoIfNotExists"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "NoIndexedBy",
          "package": "language-sqlite",
          "signature": "NoIndexedBy",
          "source": "src/Language-SQL-SQLite-Types.html#MaybeIndexedBy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "NoIndexedBy",
          "package": "language-sqlite",
          "partial": "No Indexed By",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:NoIndexedBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "NoInitialDeferralStatus",
          "package": "language-sqlite",
          "signature": "NoInitialDeferralStatus",
          "source": "src/Language-SQL-SQLite-Types.html#MaybeInitialDeferralStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "NoInitialDeferralStatus",
          "package": "language-sqlite",
          "partial": "No Initial Deferral Status",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:NoInitialDeferralStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "NoSavepoint",
          "package": "language-sqlite",
          "signature": "NoSavepoint",
          "source": "src/Language-SQL-SQLite-Types.html#MaybeSavepoint",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "NoSavepoint",
          "package": "language-sqlite",
          "partial": "No Savepoint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:NoSavepoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "NoSign",
          "package": "language-sqlite",
          "signature": "NoSign",
          "source": "src/Language-SQL-SQLite-Types.html#MaybeSign",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "NoSign",
          "package": "language-sqlite",
          "partial": "No Sign",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:NoSign"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "NoSwitch",
          "package": "language-sqlite",
          "signature": "NoSwitch",
          "source": "src/Language-SQL-SQLite-Types.html#MaybeSwitchExpression",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "NoSwitch",
          "package": "language-sqlite",
          "partial": "No Switch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:NoSwitch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "NoTemporary",
          "package": "language-sqlite",
          "signature": "NoTemporary",
          "source": "src/Language-SQL-SQLite-Types.html#MaybeTemporary",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "NoTemporary",
          "package": "language-sqlite",
          "partial": "No Temporary",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:NoTemporary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "NoTransactionType",
          "package": "language-sqlite",
          "signature": "NoTransactionType",
          "source": "src/Language-SQL-SQLite-Types.html#MaybeTransactionType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "NoTransactionType",
          "package": "language-sqlite",
          "partial": "No Transaction Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:NoTransactionType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "NoType",
          "package": "language-sqlite",
          "signature": "NoType",
          "source": "src/Language-SQL-SQLite-Types.html#MaybeType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "NoType",
          "package": "language-sqlite",
          "partial": "No Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:NoType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "NoTypeName",
          "package": "language-sqlite",
          "signature": "NoTypeName",
          "source": "src/Language-SQL-SQLite-Types.html#MaybeTypeName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "NoTypeName",
          "package": "language-sqlite",
          "partial": "No Type Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:NoTypeName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "NoTypeSize",
          "package": "language-sqlite",
          "signature": "NoTypeSize",
          "source": "src/Language-SQL-SQLite-Types.html#MaybeTypeSize",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "NoTypeSize",
          "package": "language-sqlite",
          "partial": "No Type Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:NoTypeSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "NoUnique",
          "package": "language-sqlite",
          "signature": "NoUnique",
          "source": "src/Language-SQL-SQLite-Types.html#MaybeUnique",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "NoUnique",
          "package": "language-sqlite",
          "partial": "No Unique",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:NoUnique"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "NotDeferrable",
          "package": "language-sqlite",
          "signature": "NotDeferrable MaybeInitialDeferralStatus",
          "source": "src/Language-SQL-SQLite-Types.html#MaybeForeignKeyClauseDeferrablePart",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "NotDeferrable",
          "package": "language-sqlite",
          "partial": "Not Deferrable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:NotDeferrable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "NotGlob",
          "package": "language-sqlite",
          "signature": "NotGlob",
          "source": "src/Language-SQL-SQLite-Types.html#LikeType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "NotGlob",
          "package": "language-sqlite",
          "partial": "Not Glob",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:NotGlob"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "NotIndexed",
          "package": "language-sqlite",
          "signature": "NotIndexed",
          "source": "src/Language-SQL-SQLite-Types.html#MaybeIndexedBy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "NotIndexed",
          "package": "language-sqlite",
          "partial": "Not Indexed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:NotIndexed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "NotLike",
          "package": "language-sqlite",
          "signature": "NotLike",
          "source": "src/Language-SQL-SQLite-Types.html#LikeType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "NotLike",
          "package": "language-sqlite",
          "partial": "Not Like",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:NotLike"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "NotMatch",
          "package": "language-sqlite",
          "signature": "NotMatch",
          "source": "src/Language-SQL-SQLite-Types.html#LikeType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "NotMatch",
          "package": "language-sqlite",
          "partial": "Not Match",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:NotMatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "NotRegexp",
          "package": "language-sqlite",
          "signature": "NotRegexp",
          "source": "src/Language-SQL-SQLite-Types.html#LikeType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "NotRegexp",
          "package": "language-sqlite",
          "partial": "Not Regexp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:NotRegexp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "On",
          "package": "language-sqlite",
          "signature": "On Expression",
          "source": "src/Language-SQL-SQLite-Types.html#JoinConstraint",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "On",
          "package": "language-sqlite",
          "partial": "On",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:On"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "OnConflictAbort",
          "package": "language-sqlite",
          "signature": "OnConflictAbort",
          "source": "src/Language-SQL-SQLite-Types.html#ConflictClause",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "OnConflictAbort",
          "package": "language-sqlite",
          "partial": "On Conflict Abort",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:OnConflictAbort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "OnConflictFail",
          "package": "language-sqlite",
          "signature": "OnConflictFail",
          "source": "src/Language-SQL-SQLite-Types.html#ConflictClause",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "OnConflictFail",
          "package": "language-sqlite",
          "partial": "On Conflict Fail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:OnConflictFail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "OnConflictIgnore",
          "package": "language-sqlite",
          "signature": "OnConflictIgnore",
          "source": "src/Language-SQL-SQLite-Types.html#ConflictClause",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "OnConflictIgnore",
          "package": "language-sqlite",
          "partial": "On Conflict Ignore",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:OnConflictIgnore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "OnConflictReplace",
          "package": "language-sqlite",
          "signature": "OnConflictReplace",
          "source": "src/Language-SQL-SQLite-Types.html#ConflictClause",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "OnConflictReplace",
          "package": "language-sqlite",
          "partial": "On Conflict Replace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:OnConflictReplace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "OnConflictRollback",
          "package": "language-sqlite",
          "signature": "OnConflictRollback",
          "source": "src/Language-SQL-SQLite-Types.html#ConflictClause",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "OnConflictRollback",
          "package": "language-sqlite",
          "partial": "On Conflict Rollback",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:OnConflictRollback"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "OnDelete",
          "package": "language-sqlite",
          "signature": "OnDelete ForeignKeyClauseActionPart",
          "source": "src/Language-SQL-SQLite-Types.html#ForeignKeyClauseActionOrMatchPart",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "OnDelete",
          "package": "language-sqlite",
          "partial": "On Delete",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:OnDelete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "OnUpdate",
          "package": "language-sqlite",
          "signature": "OnUpdate ForeignKeyClauseActionPart",
          "source": "src/Language-SQL-SQLite-Types.html#ForeignKeyClauseActionOrMatchPart",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "OnUpdate",
          "package": "language-sqlite",
          "partial": "On Update",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:OnUpdate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "OrderBy",
          "package": "language-sqlite",
          "signature": "OrderBy (OneOrMore OrderingTerm)",
          "source": "src/Language-SQL-SQLite-Types.html#OrderClause",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "OrderBy",
          "package": "language-sqlite",
          "partial": "Order By",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:OrderBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "OrderingTerm",
          "package": "language-sqlite",
          "signature": "OrderingTerm Expression MaybeCollation MaybeAscDesc",
          "source": "src/Language-SQL-SQLite-Types.html#OrderingTerm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "OrderingTerm",
          "package": "language-sqlite",
          "partial": "Ordering Term",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:OrderingTerm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "OuterJoin",
          "package": "language-sqlite",
          "signature": "OuterJoin",
          "source": "src/Language-SQL-SQLite-Types.html#JoinOperation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "OuterJoin",
          "package": "language-sqlite",
          "partial": "Outer Join",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:OuterJoin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "PositiveSign",
          "package": "language-sqlite",
          "signature": "PositiveSign",
          "source": "src/Language-SQL-SQLite-Types.html#MaybeSign",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "PositiveSign",
          "package": "language-sqlite",
          "partial": "Positive Sign",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:PositiveSign"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "Pragma",
          "package": "language-sqlite",
          "signature": "SinglyQualifiedIdentifier -\u003e PragmaBody -\u003e Statement L0 NT NS Pragma'",
          "source": "src/Language-SQL-SQLite-Types.html#Statement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "Pragma",
          "normalized": "SinglyQualifiedIdentifier-\u003ePragmaBody-\u003eStatement L NT NS Pragma'",
          "package": "language-sqlite",
          "partial": "Pragma",
          "signature": "SinglyQualifiedIdentifier-\u003ePragmaBody-\u003eStatement L NT NS Pragma'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:Pragma"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "PunctuationAmpersand",
          "package": "language-sqlite",
          "signature": "PunctuationAmpersand",
          "source": "src/Language-SQL-SQLite-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "PunctuationAmpersand",
          "package": "language-sqlite",
          "partial": "Punctuation Ampersand",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:PunctuationAmpersand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "PunctuationBangEquals",
          "package": "language-sqlite",
          "signature": "PunctuationBangEquals",
          "source": "src/Language-SQL-SQLite-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "PunctuationBangEquals",
          "package": "language-sqlite",
          "partial": "Punctuation Bang Equals",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:PunctuationBangEquals"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "PunctuationBar",
          "package": "language-sqlite",
          "signature": "PunctuationBar",
          "source": "src/Language-SQL-SQLite-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "PunctuationBar",
          "package": "language-sqlite",
          "partial": "Punctuation Bar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:PunctuationBar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "PunctuationBarBar",
          "package": "language-sqlite",
          "signature": "PunctuationBarBar",
          "source": "src/Language-SQL-SQLite-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "PunctuationBarBar",
          "package": "language-sqlite",
          "partial": "Punctuation Bar Bar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:PunctuationBarBar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "PunctuationComma",
          "package": "language-sqlite",
          "signature": "PunctuationComma",
          "source": "src/Language-SQL-SQLite-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "PunctuationComma",
          "package": "language-sqlite",
          "partial": "Punctuation Comma",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:PunctuationComma"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "PunctuationDot",
          "package": "language-sqlite",
          "signature": "PunctuationDot",
          "source": "src/Language-SQL-SQLite-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "PunctuationDot",
          "package": "language-sqlite",
          "partial": "Punctuation Dot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:PunctuationDot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "PunctuationEquals",
          "package": "language-sqlite",
          "signature": "PunctuationEquals",
          "source": "src/Language-SQL-SQLite-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "PunctuationEquals",
          "package": "language-sqlite",
          "partial": "Punctuation Equals",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:PunctuationEquals"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "PunctuationEqualsEquals",
          "package": "language-sqlite",
          "signature": "PunctuationEqualsEquals",
          "source": "src/Language-SQL-SQLite-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "PunctuationEqualsEquals",
          "package": "language-sqlite",
          "partial": "Punctuation Equals Equals",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:PunctuationEqualsEquals"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "PunctuationGreater",
          "package": "language-sqlite",
          "signature": "PunctuationGreater",
          "source": "src/Language-SQL-SQLite-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "PunctuationGreater",
          "package": "language-sqlite",
          "partial": "Punctuation Greater",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:PunctuationGreater"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "PunctuationGreaterEquals",
          "package": "language-sqlite",
          "signature": "PunctuationGreaterEquals",
          "source": "src/Language-SQL-SQLite-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "PunctuationGreaterEquals",
          "package": "language-sqlite",
          "partial": "Punctuation Greater Equals",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:PunctuationGreaterEquals"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "PunctuationGreaterGreater",
          "package": "language-sqlite",
          "signature": "PunctuationGreaterGreater",
          "source": "src/Language-SQL-SQLite-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "PunctuationGreaterGreater",
          "package": "language-sqlite",
          "partial": "Punctuation Greater Greater",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:PunctuationGreaterGreater"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "PunctuationLeftParenthesis",
          "package": "language-sqlite",
          "signature": "PunctuationLeftParenthesis",
          "source": "src/Language-SQL-SQLite-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "PunctuationLeftParenthesis",
          "package": "language-sqlite",
          "partial": "Punctuation Left Parenthesis",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:PunctuationLeftParenthesis"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "PunctuationLess",
          "package": "language-sqlite",
          "signature": "PunctuationLess",
          "source": "src/Language-SQL-SQLite-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "PunctuationLess",
          "package": "language-sqlite",
          "partial": "Punctuation Less",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:PunctuationLess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "PunctuationLessEquals",
          "package": "language-sqlite",
          "signature": "PunctuationLessEquals",
          "source": "src/Language-SQL-SQLite-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "PunctuationLessEquals",
          "package": "language-sqlite",
          "partial": "Punctuation Less Equals",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:PunctuationLessEquals"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "PunctuationLessGreater",
          "package": "language-sqlite",
          "signature": "PunctuationLessGreater",
          "source": "src/Language-SQL-SQLite-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "PunctuationLessGreater",
          "package": "language-sqlite",
          "partial": "Punctuation Less Greater",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:PunctuationLessGreater"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "PunctuationLessLess",
          "package": "language-sqlite",
          "signature": "PunctuationLessLess",
          "source": "src/Language-SQL-SQLite-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "PunctuationLessLess",
          "package": "language-sqlite",
          "partial": "Punctuation Less Less",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:PunctuationLessLess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "PunctuationMinus",
          "package": "language-sqlite",
          "signature": "PunctuationMinus",
          "source": "src/Language-SQL-SQLite-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "PunctuationMinus",
          "package": "language-sqlite",
          "partial": "Punctuation Minus",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:PunctuationMinus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "PunctuationPercent",
          "package": "language-sqlite",
          "signature": "PunctuationPercent",
          "source": "src/Language-SQL-SQLite-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "PunctuationPercent",
          "package": "language-sqlite",
          "partial": "Punctuation Percent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:PunctuationPercent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "PunctuationPlus",
          "package": "language-sqlite",
          "signature": "PunctuationPlus",
          "source": "src/Language-SQL-SQLite-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "PunctuationPlus",
          "package": "language-sqlite",
          "partial": "Punctuation Plus",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:PunctuationPlus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "PunctuationRightParenthesis",
          "package": "language-sqlite",
          "signature": "PunctuationRightParenthesis",
          "source": "src/Language-SQL-SQLite-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "PunctuationRightParenthesis",
          "package": "language-sqlite",
          "partial": "Punctuation Right Parenthesis",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:PunctuationRightParenthesis"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "PunctuationSemicolon",
          "package": "language-sqlite",
          "signature": "PunctuationSemicolon",
          "source": "src/Language-SQL-SQLite-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "PunctuationSemicolon",
          "package": "language-sqlite",
          "partial": "Punctuation Semicolon",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:PunctuationSemicolon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "PunctuationSlash",
          "package": "language-sqlite",
          "signature": "PunctuationSlash",
          "source": "src/Language-SQL-SQLite-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "PunctuationSlash",
          "package": "language-sqlite",
          "partial": "Punctuation Slash",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:PunctuationSlash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "PunctuationStar",
          "package": "language-sqlite",
          "signature": "PunctuationStar",
          "source": "src/Language-SQL-SQLite-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "PunctuationStar",
          "package": "language-sqlite",
          "partial": "Punctuation Star",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:PunctuationStar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "PunctuationTilde",
          "package": "language-sqlite",
          "signature": "PunctuationTilde",
          "source": "src/Language-SQL-SQLite-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "PunctuationTilde",
          "package": "language-sqlite",
          "partial": "Punctuation Tilde",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:PunctuationTilde"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "References",
          "package": "language-sqlite",
          "signature": "References UnqualifiedIdentifier [UnqualifiedIdentifier] [ForeignKeyClauseActionOrMatchPart] MaybeForeignKeyClauseDeferrablePart",
          "source": "src/Language-SQL-SQLite-Types.html#ForeignKeyClause",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "References",
          "normalized": "References UnqualifiedIdentifier[UnqualifiedIdentifier][ForeignKeyClauseActionOrMatchPart]MaybeForeignKeyClauseDeferrablePart",
          "package": "language-sqlite",
          "partial": "References",
          "signature": "References UnqualifiedIdentifier[UnqualifiedIdentifier][ForeignKeyClauseActionOrMatchPart]MaybeForeignKeyClauseDeferrablePart",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:References"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "ReferencesMatch",
          "package": "language-sqlite",
          "signature": "ReferencesMatch UnqualifiedIdentifier",
          "source": "src/Language-SQL-SQLite-Types.html#ForeignKeyClauseActionOrMatchPart",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "ReferencesMatch",
          "package": "language-sqlite",
          "partial": "References Match",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:ReferencesMatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "Regexp",
          "package": "language-sqlite",
          "signature": "Regexp",
          "source": "src/Language-SQL-SQLite-Types.html#LikeType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "Regexp",
          "package": "language-sqlite",
          "partial": "Regexp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:Regexp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "Reindex",
          "package": "language-sqlite",
          "signature": "SinglyQualifiedIdentifier -\u003e Statement L0 NT NS Reindex'",
          "source": "src/Language-SQL-SQLite-Types.html#Statement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "Reindex",
          "normalized": "SinglyQualifiedIdentifier-\u003eStatement L NT NS Reindex'",
          "package": "language-sqlite",
          "partial": "Reindex",
          "signature": "SinglyQualifiedIdentifier-\u003eStatement L NT NS Reindex'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:Reindex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "Release",
          "package": "language-sqlite",
          "signature": "MaybeReleaseSavepoint -\u003e UnqualifiedIdentifier -\u003e Statement L0 NT NS Release'",
          "source": "src/Language-SQL-SQLite-Types.html#Statement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "Release",
          "normalized": "MaybeReleaseSavepoint-\u003eUnqualifiedIdentifier-\u003eStatement L NT NS Release'",
          "package": "language-sqlite",
          "partial": "Release",
          "signature": "MaybeReleaseSavepoint-\u003eUnqualifiedIdentifier-\u003eStatement L NT NS Release'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:Release"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "ReleaseSavepoint",
          "package": "language-sqlite",
          "signature": "ReleaseSavepoint UnqualifiedIdentifier",
          "source": "src/Language-SQL-SQLite-Types.html#MaybeReleaseSavepoint",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "ReleaseSavepoint",
          "package": "language-sqlite",
          "partial": "Release Savepoint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:ReleaseSavepoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "RenameTo",
          "package": "language-sqlite",
          "signature": "RenameTo UnqualifiedIdentifier",
          "source": "src/Language-SQL-SQLite-Types.html#AlterTableBody",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "RenameTo",
          "package": "language-sqlite",
          "partial": "Rename To",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:RenameTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "Replace",
          "package": "language-sqlite",
          "signature": "Replace",
          "source": "src/Language-SQL-SQLite-Types.html#InsertHead",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "Replace",
          "package": "language-sqlite",
          "partial": "Replace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:Replace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "Restrict",
          "package": "language-sqlite",
          "signature": "Restrict",
          "source": "src/Language-SQL-SQLite-Types.html#ForeignKeyClauseActionPart",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "Restrict",
          "package": "language-sqlite",
          "partial": "Restrict",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:Restrict"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "Result",
          "package": "language-sqlite",
          "signature": "Result Expression MaybeAs",
          "source": "src/Language-SQL-SQLite-Types.html#ResultColumn",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "Result",
          "package": "language-sqlite",
          "partial": "Result",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:Result"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "Rollback",
          "package": "language-sqlite",
          "signature": "MaybeTransaction -\u003e MaybeSavepoint -\u003e Statement L0 NT NS Rollback'",
          "source": "src/Language-SQL-SQLite-Types.html#Statement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "Rollback",
          "normalized": "MaybeTransaction-\u003eMaybeSavepoint-\u003eStatement L NT NS Rollback'",
          "package": "language-sqlite",
          "partial": "Rollback",
          "signature": "MaybeTransaction-\u003eMaybeSavepoint-\u003eStatement L NT NS Rollback'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:Rollback"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "Savepoint",
          "package": "language-sqlite",
          "signature": "UnqualifiedIdentifier -\u003e Statement L0 NT NS Savepoint'",
          "source": "src/Language-SQL-SQLite-Types.html#Statement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "Savepoint",
          "normalized": "UnqualifiedIdentifier-\u003eStatement L NT NS Savepoint'",
          "package": "language-sqlite",
          "partial": "Savepoint",
          "signature": "UnqualifiedIdentifier-\u003eStatement L NT NS Savepoint'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:Savepoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "Select",
          "package": "language-sqlite",
          "signature": "SelectCore -\u003e [(CompoundOperator, SelectCore)] -\u003e Maybe OrderClause -\u003e Maybe LimitClause -\u003e Statement L0 T S Select'",
          "source": "src/Language-SQL-SQLite-Types.html#Statement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "Select",
          "normalized": "SelectCore-\u003e[(CompoundOperator,SelectCore)]-\u003eMaybe OrderClause-\u003eMaybe LimitClause-\u003eStatement L T S Select'",
          "package": "language-sqlite",
          "partial": "Select",
          "signature": "SelectCore-\u003e[(CompoundOperator,SelectCore)]-\u003eMaybe OrderClause-\u003eMaybe LimitClause-\u003eStatement L T S Select'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:Select"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "SelectCore",
          "package": "language-sqlite",
          "signature": "SelectCore Distinctness (OneOrMore ResultColumn) (Maybe FromClause) (Maybe WhereClause) (Maybe GroupClause)",
          "source": "src/Language-SQL-SQLite-Types.html#SelectCore",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "SelectCore",
          "package": "language-sqlite",
          "partial": "Select Core",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:SelectCore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "SelectSource",
          "package": "language-sqlite",
          "signature": "SelectSource Select MaybeAs",
          "source": "src/Language-SQL-SQLite-Types.html#SingleSource",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "SelectSource",
          "package": "language-sqlite",
          "partial": "Select Source",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:SelectSource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "SetDefault",
          "package": "language-sqlite",
          "signature": "SetDefault",
          "source": "src/Language-SQL-SQLite-Types.html#ForeignKeyClauseActionPart",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "SetDefault",
          "package": "language-sqlite",
          "partial": "Set Default",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:SetDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "SetNull",
          "package": "language-sqlite",
          "signature": "SetNull",
          "source": "src/Language-SQL-SQLite-Types.html#ForeignKeyClauseActionPart",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "SetNull",
          "package": "language-sqlite",
          "partial": "Set Null",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:SetNull"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "SignedFloatPragmaValue",
          "package": "language-sqlite",
          "signature": "SignedFloatPragmaValue MaybeSign NonnegativeDouble",
          "source": "src/Language-SQL-SQLite-Types.html#PragmaValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "SignedFloatPragmaValue",
          "package": "language-sqlite",
          "partial": "Signed Float Pragma Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:SignedFloatPragmaValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "SignedIntegerPragmaValue",
          "package": "language-sqlite",
          "signature": "SignedIntegerPragmaValue MaybeSign Word64",
          "source": "src/Language-SQL-SQLite-Types.html#PragmaValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "SignedIntegerPragmaValue",
          "package": "language-sqlite",
          "partial": "Signed Integer Pragma Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:SignedIntegerPragmaValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "SinglyQualifiedIdentifier",
          "package": "language-sqlite",
          "signature": "SinglyQualifiedIdentifier (Maybe String) String",
          "source": "src/Language-SQL-SQLite-Types.html#SinglyQualifiedIdentifier",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "SinglyQualifiedIdentifier",
          "package": "language-sqlite",
          "partial": "Singly Qualified Identifier",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:SinglyQualifiedIdentifier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "Star",
          "package": "language-sqlite",
          "signature": "Star",
          "source": "src/Language-SQL-SQLite-Types.html#ResultColumn",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "Star",
          "package": "language-sqlite",
          "partial": "Star",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:Star"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "Statement",
          "package": "language-sqlite",
          "signature": "forall l t v w . Statement (Statement l t v w)",
          "source": "src/Language-SQL-SQLite-Types.html#AnyStatement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "Statement",
          "package": "language-sqlite",
          "partial": "Statement",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:Statement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "StatementList",
          "package": "language-sqlite",
          "signature": "StatementList [AnyStatement]",
          "source": "src/Language-SQL-SQLite-Types.html#StatementList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "StatementList",
          "normalized": "StatementList[AnyStatement]",
          "package": "language-sqlite",
          "partial": "Statement List",
          "signature": "StatementList[AnyStatement]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:StatementList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "StringPragmaValue",
          "package": "language-sqlite",
          "signature": "StringPragmaValue String",
          "source": "src/Language-SQL-SQLite-Types.html#PragmaValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "StringPragmaValue",
          "package": "language-sqlite",
          "partial": "String Pragma Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:StringPragmaValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "SubjoinSource",
          "package": "language-sqlite",
          "signature": "SubjoinSource JoinSource",
          "source": "src/Language-SQL-SQLite-Types.html#SingleSource",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "SubjoinSource",
          "package": "language-sqlite",
          "partial": "Subjoin Source",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:SubjoinSource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "Switch",
          "package": "language-sqlite",
          "signature": "Switch Expression",
          "source": "src/Language-SQL-SQLite-Types.html#MaybeSwitchExpression",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "Switch",
          "package": "language-sqlite",
          "partial": "Switch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:Switch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "TableCheck",
          "package": "language-sqlite",
          "signature": "TableCheck MaybeConstraintName Expression",
          "source": "src/Language-SQL-SQLite-Types.html#TableConstraint",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "TableCheck",
          "package": "language-sqlite",
          "partial": "Table Check",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:TableCheck"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "TableForeignKey",
          "package": "language-sqlite",
          "signature": "TableForeignKey MaybeConstraintName (OneOrMore UnqualifiedIdentifier) ForeignKeyClause",
          "source": "src/Language-SQL-SQLite-Types.html#TableConstraint",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "TableForeignKey",
          "package": "language-sqlite",
          "partial": "Table Foreign Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:TableForeignKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "TableIndexedBy",
          "package": "language-sqlite",
          "signature": "TableIndexedBy SinglyQualifiedIdentifier UnqualifiedIdentifier",
          "source": "src/Language-SQL-SQLite-Types.html#QualifiedTableName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "TableIndexedBy",
          "package": "language-sqlite",
          "partial": "Table Indexed By",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:TableIndexedBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "TableNoIndexedBy",
          "package": "language-sqlite",
          "signature": "TableNoIndexedBy SinglyQualifiedIdentifier",
          "source": "src/Language-SQL-SQLite-Types.html#QualifiedTableName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "TableNoIndexedBy",
          "package": "language-sqlite",
          "partial": "Table No Indexed By",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:TableNoIndexedBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "TableNotIndexed",
          "package": "language-sqlite",
          "signature": "TableNotIndexed SinglyQualifiedIdentifier",
          "source": "src/Language-SQL-SQLite-Types.html#QualifiedTableName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "TableNotIndexed",
          "package": "language-sqlite",
          "partial": "Table Not Indexed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:TableNotIndexed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "TablePrimaryKey",
          "package": "language-sqlite",
          "signature": "TablePrimaryKey MaybeConstraintName (OneOrMore IndexedColumn) (Maybe ConflictClause)",
          "source": "src/Language-SQL-SQLite-Types.html#TableConstraint",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "TablePrimaryKey",
          "package": "language-sqlite",
          "partial": "Table Primary Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:TablePrimaryKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "TableSource",
          "package": "language-sqlite",
          "signature": "TableSource SinglyQualifiedIdentifier MaybeAs MaybeIndexedBy",
          "source": "src/Language-SQL-SQLite-Types.html#SingleSource",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "TableSource",
          "package": "language-sqlite",
          "partial": "Table Source",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:TableSource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "TableStar",
          "package": "language-sqlite",
          "signature": "TableStar UnqualifiedIdentifier",
          "source": "src/Language-SQL-SQLite-Types.html#ResultColumn",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "TableStar",
          "package": "language-sqlite",
          "partial": "Table Star",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:TableStar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "TableUnique",
          "package": "language-sqlite",
          "signature": "TableUnique MaybeConstraintName (OneOrMore IndexedColumn) (Maybe ConflictClause)",
          "source": "src/Language-SQL-SQLite-Types.html#TableConstraint",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "TableUnique",
          "package": "language-sqlite",
          "partial": "Table Unique",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:TableUnique"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "Temp",
          "package": "language-sqlite",
          "signature": "Temp",
          "source": "src/Language-SQL-SQLite-Types.html#MaybeTemporary",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "Temp",
          "package": "language-sqlite",
          "partial": "Temp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:Temp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "Temporary",
          "package": "language-sqlite",
          "signature": "Temporary",
          "source": "src/Language-SQL-SQLite-Types.html#MaybeTemporary",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "Temporary",
          "package": "language-sqlite",
          "partial": "Temporary",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:Temporary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "To",
          "package": "language-sqlite",
          "signature": "To UnqualifiedIdentifier",
          "source": "src/Language-SQL-SQLite-Types.html#MaybeSavepoint",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "To",
          "package": "language-sqlite",
          "partial": "To",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:To"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "ToSavepoint",
          "package": "language-sqlite",
          "signature": "ToSavepoint UnqualifiedIdentifier",
          "source": "src/Language-SQL-SQLite-Types.html#MaybeSavepoint",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "ToSavepoint",
          "package": "language-sqlite",
          "partial": "To Savepoint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:ToSavepoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "Transaction",
          "package": "language-sqlite",
          "signature": "Transaction",
          "source": "src/Language-SQL-SQLite-Types.html#MaybeTransaction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "Transaction",
          "package": "language-sqlite",
          "partial": "Transaction",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:Transaction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "TriggerStatement",
          "package": "language-sqlite",
          "signature": "forall l v w . TriggerStatement (Statement l T v w)",
          "source": "src/Language-SQL-SQLite-Types.html#TriggerStatement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "TriggerStatement",
          "package": "language-sqlite",
          "partial": "Trigger Statement",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:TriggerStatement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "Type",
          "package": "language-sqlite",
          "signature": "Type TypeAffinity MaybeTypeName MaybeTypeSize",
          "source": "src/Language-SQL-SQLite-Types.html#Type",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "Type",
          "package": "language-sqlite",
          "partial": "Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:Type"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "TypeAffinityInteger",
          "package": "language-sqlite",
          "signature": "TypeAffinityInteger",
          "source": "src/Language-SQL-SQLite-Types.html#TypeAffinity",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "TypeAffinityInteger",
          "package": "language-sqlite",
          "partial": "Type Affinity Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:TypeAffinityInteger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "TypeAffinityNone",
          "package": "language-sqlite",
          "signature": "TypeAffinityNone",
          "source": "src/Language-SQL-SQLite-Types.html#TypeAffinity",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "TypeAffinityNone",
          "package": "language-sqlite",
          "partial": "Type Affinity None",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:TypeAffinityNone"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "TypeAffinityNumeric",
          "package": "language-sqlite",
          "signature": "TypeAffinityNumeric",
          "source": "src/Language-SQL-SQLite-Types.html#TypeAffinity",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "TypeAffinityNumeric",
          "package": "language-sqlite",
          "partial": "Type Affinity Numeric",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:TypeAffinityNumeric"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "TypeAffinityReal",
          "package": "language-sqlite",
          "signature": "TypeAffinityReal",
          "source": "src/Language-SQL-SQLite-Types.html#TypeAffinity",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "TypeAffinityReal",
          "package": "language-sqlite",
          "partial": "Type Affinity Real",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:TypeAffinityReal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "TypeAffinityText",
          "package": "language-sqlite",
          "signature": "TypeAffinityText",
          "source": "src/Language-SQL-SQLite-Types.html#TypeAffinity",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "TypeAffinityText",
          "package": "language-sqlite",
          "partial": "Type Affinity Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:TypeAffinityText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "TypeMaximumSize",
          "package": "language-sqlite",
          "signature": "TypeMaximumSize TypeSizeField",
          "source": "src/Language-SQL-SQLite-Types.html#MaybeTypeSize",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "TypeMaximumSize",
          "package": "language-sqlite",
          "partial": "Type Maximum Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:TypeMaximumSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "TypeName",
          "package": "language-sqlite",
          "signature": "TypeName (OneOrMore UnqualifiedIdentifier)",
          "source": "src/Language-SQL-SQLite-Types.html#MaybeTypeName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "TypeName",
          "package": "language-sqlite",
          "partial": "Type Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:TypeName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "TypeSize",
          "package": "language-sqlite",
          "signature": "TypeSize TypeSizeField TypeSizeField",
          "source": "src/Language-SQL-SQLite-Types.html#MaybeTypeSize",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "TypeSize",
          "package": "language-sqlite",
          "partial": "Type Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:TypeSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "Union",
          "package": "language-sqlite",
          "signature": "Union",
          "source": "src/Language-SQL-SQLite-Types.html#CompoundOperator",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "Union",
          "package": "language-sqlite",
          "partial": "Union",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:Union"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "UnionAll",
          "package": "language-sqlite",
          "signature": "UnionAll",
          "source": "src/Language-SQL-SQLite-Types.html#CompoundOperator",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "UnionAll",
          "package": "language-sqlite",
          "partial": "Union All",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:UnionAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "Unique",
          "package": "language-sqlite",
          "signature": "Unique",
          "source": "src/Language-SQL-SQLite-Types.html#MaybeUnique",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "Unique",
          "package": "language-sqlite",
          "partial": "Unique",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:Unique"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "UnqualifiedIdentifier",
          "package": "language-sqlite",
          "signature": "UnqualifiedIdentifier String",
          "source": "src/Language-SQL-SQLite-Types.html#UnqualifiedIdentifier",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "UnqualifiedIdentifier",
          "package": "language-sqlite",
          "partial": "Unqualified Identifier",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:UnqualifiedIdentifier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "Update",
          "package": "language-sqlite",
          "signature": "UpdateHead -\u003e QualifiedTableName -\u003e OneOrMore (UnqualifiedIdentifier, Expression) -\u003e Maybe WhereClause -\u003e Statement L0 T NS Update'",
          "source": "src/Language-SQL-SQLite-Types.html#Statement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "Update",
          "normalized": "UpdateHead-\u003eQualifiedTableName-\u003eOneOrMore(UnqualifiedIdentifier,Expression)-\u003eMaybe WhereClause-\u003eStatement L T NS Update'",
          "package": "language-sqlite",
          "partial": "Update",
          "signature": "UpdateHead-\u003eQualifiedTableName-\u003eOneOrMore(UnqualifiedIdentifier,Expression)-\u003eMaybe WhereClause-\u003eStatement L T NS Update'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:Update"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "UpdateLimited",
          "package": "language-sqlite",
          "signature": "UpdateHead -\u003e QualifiedTableName -\u003e OneOrMore (UnqualifiedIdentifier, Expression) -\u003e Maybe WhereClause -\u003e Maybe OrderClause -\u003e LimitClause -\u003e Statement L0 NT NS UpdateLimited'",
          "source": "src/Language-SQL-SQLite-Types.html#Statement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "UpdateLimited",
          "normalized": "UpdateHead-\u003eQualifiedTableName-\u003eOneOrMore(UnqualifiedIdentifier,Expression)-\u003eMaybe WhereClause-\u003eMaybe OrderClause-\u003eLimitClause-\u003eStatement L NT NS UpdateLimited'",
          "package": "language-sqlite",
          "partial": "Update Limited",
          "signature": "UpdateHead-\u003eQualifiedTableName-\u003eOneOrMore(UnqualifiedIdentifier,Expression)-\u003eMaybe WhereClause-\u003eMaybe OrderClause-\u003eLimitClause-\u003eStatement L NT NS UpdateLimited'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:UpdateLimited"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "UpdateNoAlternative",
          "package": "language-sqlite",
          "signature": "UpdateNoAlternative",
          "source": "src/Language-SQL-SQLite-Types.html#UpdateHead",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "UpdateNoAlternative",
          "package": "language-sqlite",
          "partial": "Update No Alternative",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:UpdateNoAlternative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "UpdateOn",
          "package": "language-sqlite",
          "signature": "UpdateOn [UnqualifiedIdentifier]",
          "source": "src/Language-SQL-SQLite-Types.html#TriggerCondition",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "UpdateOn",
          "normalized": "UpdateOn[UnqualifiedIdentifier]",
          "package": "language-sqlite",
          "partial": "Update On",
          "signature": "UpdateOn[UnqualifiedIdentifier]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:UpdateOn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "UpdateOrAbort",
          "package": "language-sqlite",
          "signature": "UpdateOrAbort",
          "source": "src/Language-SQL-SQLite-Types.html#UpdateHead",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "UpdateOrAbort",
          "package": "language-sqlite",
          "partial": "Update Or Abort",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:UpdateOrAbort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "UpdateOrFail",
          "package": "language-sqlite",
          "signature": "UpdateOrFail",
          "source": "src/Language-SQL-SQLite-Types.html#UpdateHead",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "UpdateOrFail",
          "package": "language-sqlite",
          "partial": "Update Or Fail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:UpdateOrFail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "UpdateOrIgnore",
          "package": "language-sqlite",
          "signature": "UpdateOrIgnore",
          "source": "src/Language-SQL-SQLite-Types.html#UpdateHead",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "UpdateOrIgnore",
          "package": "language-sqlite",
          "partial": "Update Or Ignore",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:UpdateOrIgnore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "UpdateOrReplace",
          "package": "language-sqlite",
          "signature": "UpdateOrReplace",
          "source": "src/Language-SQL-SQLite-Types.html#UpdateHead",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "UpdateOrReplace",
          "package": "language-sqlite",
          "partial": "Update Or Replace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:UpdateOrReplace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "UpdateOrRollback",
          "package": "language-sqlite",
          "signature": "UpdateOrRollback",
          "source": "src/Language-SQL-SQLite-Types.html#UpdateHead",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "UpdateOrRollback",
          "package": "language-sqlite",
          "partial": "Update Or Rollback",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:UpdateOrRollback"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "Using",
          "package": "language-sqlite",
          "signature": "Using (OneOrMore UnqualifiedIdentifier)",
          "source": "src/Language-SQL-SQLite-Types.html#JoinConstraint",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "Using",
          "package": "language-sqlite",
          "partial": "Using",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:Using"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "Vacuum",
          "package": "language-sqlite",
          "signature": "Statement L0 NT NS Vacuum'",
          "source": "src/Language-SQL-SQLite-Types.html#Statement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "Vacuum",
          "package": "language-sqlite",
          "partial": "Vacuum",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:Vacuum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "Variable",
          "package": "language-sqlite",
          "signature": "Variable",
          "source": "src/Language-SQL-SQLite-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "Variable",
          "package": "language-sqlite",
          "partial": "Variable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:Variable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "VariableN",
          "package": "language-sqlite",
          "signature": "VariableN Word64",
          "source": "src/Language-SQL-SQLite-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "VariableN",
          "package": "language-sqlite",
          "partial": "Variable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:VariableN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "VariableNamed",
          "package": "language-sqlite",
          "signature": "VariableNamed String",
          "source": "src/Language-SQL-SQLite-Types.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "VariableNamed",
          "package": "language-sqlite",
          "partial": "Variable Named",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:VariableNamed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "When",
          "package": "language-sqlite",
          "signature": "When Expression",
          "source": "src/Language-SQL-SQLite-Types.html#WhenClause",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "When",
          "package": "language-sqlite",
          "partial": "When",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:When"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "WhenThen",
          "package": "language-sqlite",
          "signature": "WhenThen Expression Expression",
          "source": "src/Language-SQL-SQLite-Types.html#CasePair",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "WhenThen",
          "package": "language-sqlite",
          "partial": "When Then",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:WhenThen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "Where",
          "package": "language-sqlite",
          "signature": "Where Expression",
          "source": "src/Language-SQL-SQLite-Types.html#WhereClause",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "Where",
          "package": "language-sqlite",
          "partial": "Where",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:Where"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputes a \u003ccode\u003e\u003ca\u003eMaybeTypeName\u003c/a\u003e\u003c/code\u003e from a \u003ccode\u003e\u003ca\u003eTypeAffinity\u003c/a\u003e\u003c/code\u003e, as used in\n   \u003ccode\u003e\u003ca\u003eType\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "computeAffinityTypeName",
          "package": "language-sqlite",
          "signature": "TypeAffinity -\u003e MaybeTypeName",
          "source": "src/Language-SQL-SQLite-Types.html#computeAffinityTypeName",
          "type": "function"
        },
        "index": {
          "description": "Computes MaybeTypeName from TypeAffinity as used in Type",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "computeAffinityTypeName",
          "normalized": "TypeAffinity-\u003eMaybeTypeName",
          "package": "language-sqlite",
          "partial": "Affinity Type Name",
          "signature": "TypeAffinity-\u003eMaybeTypeName",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:computeAffinityTypeName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputes a \u003ccode\u003e\u003ca\u003eTypeAffinity\u003c/a\u003e\u003c/code\u003e from a \u003ccode\u003e\u003ca\u003eMaybeTypeName\u003c/a\u003e\u003c/code\u003e, as used in\n   \u003ccode\u003e\u003ca\u003eType\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "computeTypeNameAffinity",
          "package": "language-sqlite",
          "signature": "MaybeTypeName -\u003e TypeAffinity",
          "source": "src/Language-SQL-SQLite-Types.html#computeTypeNameAffinity",
          "type": "function"
        },
        "index": {
          "description": "Computes TypeAffinity from MaybeTypeName as used in Type",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "computeTypeNameAffinity",
          "normalized": "MaybeTypeName-\u003eTypeAffinity",
          "package": "language-sqlite",
          "partial": "Type Name Affinity",
          "signature": "MaybeTypeName-\u003eTypeAffinity",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:computeTypeNameAffinity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "fromAnyStatement",
          "package": "language-sqlite",
          "signature": "AnyStatement -\u003e a",
          "source": "src/Language-SQL-SQLite-Types.html#fromAnyStatement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "fromAnyStatement",
          "normalized": "AnyStatement-\u003ea",
          "package": "language-sqlite",
          "partial": "Any Statement",
          "signature": "AnyStatement-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:fromAnyStatement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "fromExplainableStatement",
          "package": "language-sqlite",
          "signature": "ExplainableStatement -\u003e a",
          "source": "src/Language-SQL-SQLite-Types.html#fromExplainableStatement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "fromExplainableStatement",
          "normalized": "ExplainableStatement-\u003ea",
          "package": "language-sqlite",
          "partial": "Explainable Statement",
          "signature": "ExplainableStatement-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:fromExplainableStatement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe accessor for \u003ccode\u003e\u003ca\u003eNonnegativeDouble\u003c/a\u003e\u003c/code\u003e.  Returns a double.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "fromNonnegativeDouble",
          "package": "language-sqlite",
          "signature": "NonnegativeDouble -\u003e Double",
          "source": "src/Language-SQL-SQLite-Types.html#fromNonnegativeDouble",
          "type": "function"
        },
        "index": {
          "description": "The accessor for NonnegativeDouble Returns double",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "fromNonnegativeDouble",
          "normalized": "NonnegativeDouble-\u003eDouble",
          "package": "language-sqlite",
          "partial": "Nonnegative Double",
          "signature": "NonnegativeDouble-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:fromNonnegativeDouble"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe accessor for \u003ccode\u003e\u003ca\u003eOneOrMore\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ea\u003c/code\u003e.  Returns \u003ccode\u003e[a]\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "fromOneOrMore",
          "package": "language-sqlite",
          "signature": "OneOrMore a -\u003e [a]",
          "source": "src/Language-SQL-SQLite-Types.html#fromOneOrMore",
          "type": "function"
        },
        "index": {
          "description": "The accessor for OneOrMore Returns",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "fromOneOrMore",
          "normalized": "OneOrMore a-\u003e[a]",
          "package": "language-sqlite",
          "partial": "One Or More",
          "signature": "OneOrMore a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:fromOneOrMore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "fromTriggerStatement",
          "package": "language-sqlite",
          "signature": "TriggerStatement -\u003e a",
          "source": "src/Language-SQL-SQLite-Types.html#fromTriggerStatement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "fromTriggerStatement",
          "normalized": "TriggerStatement-\u003ea",
          "package": "language-sqlite",
          "partial": "Trigger Statement",
          "signature": "TriggerStatement-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:fromTriggerStatement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the \u003ca\u003egrandparent name\u003c/a\u003e component of an identifier, if it exists.  In\n   an identifier which names a column, this is the database name.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "identifierGrandparentName",
          "package": "language-sqlite",
          "signature": "a -\u003e Maybe String",
          "source": "src/Language-SQL-SQLite-Types.html#identifierGrandparentName",
          "type": "method"
        },
        "index": {
          "description": "Returns the grandparent name component of an identifier if it exists In an identifier which names column this is the database name",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "identifierGrandparentName",
          "normalized": "a-\u003eMaybe String",
          "package": "language-sqlite",
          "partial": "Grandparent Name",
          "signature": "a-\u003eMaybe String",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:identifierGrandparentName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the \u003ca\u003eparent name\u003c/a\u003e component of an identifier, if it exists.  In an\n   identifier which names a column, this is the table name.  In an identifier\n   which names a table or other database-level object, this is the database name.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "identifierParentName",
          "package": "language-sqlite",
          "signature": "a -\u003e Maybe String",
          "source": "src/Language-SQL-SQLite-Types.html#identifierParentName",
          "type": "method"
        },
        "index": {
          "description": "Returns the parent name component of an identifier if it exists In an identifier which names column this is the table name In an identifier which names table or other database-level object this is the database name",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "identifierParentName",
          "normalized": "a-\u003eMaybe String",
          "package": "language-sqlite",
          "partial": "Parent Name",
          "signature": "a-\u003eMaybe String",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:identifierParentName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the final, \u003ca\u003eproper name\u003c/a\u003e component of an identifier.  In an identifier\n   which names a column, this is the column name.  In an identifier which names\n   a table, this is the table name.  All identifiers\n   have this component, so it is a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e and not a \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "identifierProperName",
          "package": "language-sqlite",
          "signature": "a -\u003e String",
          "source": "src/Language-SQL-SQLite-Types.html#identifierProperName",
          "type": "method"
        },
        "index": {
          "description": "Returns the final proper name component of an identifier In an identifier which names column this is the column name In an identifier which names table this is the table name All identifiers have this component so it is String and not Maybe",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "identifierProperName",
          "normalized": "a-\u003eString",
          "package": "language-sqlite",
          "partial": "Proper Name",
          "signature": "a-\u003eString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:identifierProperName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "lexModuleArgument",
          "package": "language-sqlite",
          "signature": "String -\u003e Parse (Token, String)",
          "source": "src/Language-SQL-SQLite-Syntax.html#lexModuleArgument",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "lexModuleArgument",
          "normalized": "String-\u003eParse(Token,String)",
          "package": "language-sqlite",
          "partial": "Module Argument",
          "signature": "String-\u003eParse(Token,String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:lexModuleArgument"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe constructor for \u003ccode\u003e\u003ca\u003eNonnegativeDouble\u003c/a\u003e\u003c/code\u003e.  Returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the double it's\n   given is negative, or \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eNonnegativeDouble\u003c/a\u003e\u003c/code\u003e if it is not.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "mkNonnegativeDouble",
          "package": "language-sqlite",
          "signature": "Double -\u003e Maybe NonnegativeDouble",
          "source": "src/Language-SQL-SQLite-Types.html#mkNonnegativeDouble",
          "type": "function"
        },
        "index": {
          "description": "The constructor for NonnegativeDouble Returns Nothing if the double it given is negative or Just NonnegativeDouble if it is not",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "mkNonnegativeDouble",
          "normalized": "Double-\u003eMaybe NonnegativeDouble",
          "package": "language-sqlite",
          "partial": "Nonnegative Double",
          "signature": "Double-\u003eMaybe NonnegativeDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:mkNonnegativeDouble"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe constructor for \u003ccode\u003e\u003ca\u003eOneOrMore\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ea\u003c/code\u003e.  Returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the list it's\n   given is empty, or \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eOneOrMore\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ea\u003c/code\u003e if it is not.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "mkOneOrMore",
          "package": "language-sqlite",
          "signature": "[a] -\u003e Maybe (OneOrMore a)",
          "source": "src/Language-SQL-SQLite-Types.html#mkOneOrMore",
          "type": "function"
        },
        "index": {
          "description": "The constructor for OneOrMore Returns Nothing if the list it given is empty or Just OneOrMore if it is not",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "mkOneOrMore",
          "normalized": "[a]-\u003eMaybe(OneOrMore a)",
          "package": "language-sqlite",
          "partial": "One Or More",
          "signature": "[a]-\u003eMaybe(OneOrMore a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:mkOneOrMore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "readAlterTable",
          "package": "language-sqlite",
          "signature": "String -\u003e Either ParseError AlterTable",
          "source": "src/Language-SQL-SQLite-Syntax.html#readAlterTable",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "readAlterTable",
          "normalized": "String-\u003eEither ParseError AlterTable",
          "package": "language-sqlite",
          "partial": "Alter Table",
          "signature": "String-\u003eEither ParseError AlterTable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:readAlterTable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "readAlterTableBody",
          "package": "language-sqlite",
          "signature": "String -\u003e Either ParseError AlterTableBody",
          "source": "src/Language-SQL-SQLite-Syntax.html#readAlterTableBody",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "readAlterTableBody",
          "normalized": "String-\u003eEither ParseError AlterTableBody",
          "package": "language-sqlite",
          "partial": "Alter Table Body",
          "signature": "String-\u003eEither ParseError AlterTableBody",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:readAlterTableBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "readAnalyze",
          "package": "language-sqlite",
          "signature": "String -\u003e Either ParseError Analyze",
          "source": "src/Language-SQL-SQLite-Syntax.html#readAnalyze",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "readAnalyze",
          "normalized": "String-\u003eEither ParseError Analyze",
          "package": "language-sqlite",
          "partial": "Analyze",
          "signature": "String-\u003eEither ParseError Analyze",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:readAnalyze"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "readAnyStatement",
          "package": "language-sqlite",
          "signature": "String -\u003e Either ParseError AnyStatement",
          "source": "src/Language-SQL-SQLite-Syntax.html#readAnyStatement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "readAnyStatement",
          "normalized": "String-\u003eEither ParseError AnyStatement",
          "package": "language-sqlite",
          "partial": "Any Statement",
          "signature": "String-\u003eEither ParseError AnyStatement",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:readAnyStatement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "readAttach",
          "package": "language-sqlite",
          "signature": "String -\u003e Either ParseError Attach",
          "source": "src/Language-SQL-SQLite-Syntax.html#readAttach",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "readAttach",
          "normalized": "String-\u003eEither ParseError Attach",
          "package": "language-sqlite",
          "partial": "Attach",
          "signature": "String-\u003eEither ParseError Attach",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:readAttach"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "readBegin",
          "package": "language-sqlite",
          "signature": "String -\u003e Either ParseError Begin",
          "source": "src/Language-SQL-SQLite-Syntax.html#readBegin",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "readBegin",
          "normalized": "String-\u003eEither ParseError Begin",
          "package": "language-sqlite",
          "partial": "Begin",
          "signature": "String-\u003eEither ParseError Begin",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:readBegin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "readCasePair",
          "package": "language-sqlite",
          "signature": "String -\u003e Either ParseError CasePair",
          "source": "src/Language-SQL-SQLite-Syntax.html#readCasePair",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "readCasePair",
          "normalized": "String-\u003eEither ParseError CasePair",
          "package": "language-sqlite",
          "partial": "Case Pair",
          "signature": "String-\u003eEither ParseError CasePair",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:readCasePair"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "readColumnConstraint",
          "package": "language-sqlite",
          "signature": "String -\u003e Either ParseError ColumnConstraint",
          "source": "src/Language-SQL-SQLite-Syntax.html#readColumnConstraint",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "readColumnConstraint",
          "normalized": "String-\u003eEither ParseError ColumnConstraint",
          "package": "language-sqlite",
          "partial": "Column Constraint",
          "signature": "String-\u003eEither ParseError ColumnConstraint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:readColumnConstraint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "readColumnDefinition",
          "package": "language-sqlite",
          "signature": "String -\u003e Either ParseError ColumnDefinition",
          "source": "src/Language-SQL-SQLite-Syntax.html#readColumnDefinition",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "readColumnDefinition",
          "normalized": "String-\u003eEither ParseError ColumnDefinition",
          "package": "language-sqlite",
          "partial": "Column Definition",
          "signature": "String-\u003eEither ParseError ColumnDefinition",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:readColumnDefinition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "readCommit",
          "package": "language-sqlite",
          "signature": "String -\u003e Either ParseError Commit",
          "source": "src/Language-SQL-SQLite-Syntax.html#readCommit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "readCommit",
          "normalized": "String-\u003eEither ParseError Commit",
          "package": "language-sqlite",
          "partial": "Commit",
          "signature": "String-\u003eEither ParseError Commit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:readCommit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "readCommitHead",
          "package": "language-sqlite",
          "signature": "String -\u003e Either ParseError CommitHead",
          "source": "src/Language-SQL-SQLite-Syntax.html#readCommitHead",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "readCommitHead",
          "normalized": "String-\u003eEither ParseError CommitHead",
          "package": "language-sqlite",
          "partial": "Commit Head",
          "signature": "String-\u003eEither ParseError CommitHead",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:readCommitHead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "readCompoundOperator",
          "package": "language-sqlite",
          "signature": "String -\u003e Either ParseError CompoundOperator",
          "source": "src/Language-SQL-SQLite-Syntax.html#readCompoundOperator",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "readCompoundOperator",
          "normalized": "String-\u003eEither ParseError CompoundOperator",
          "package": "language-sqlite",
          "partial": "Compound Operator",
          "signature": "String-\u003eEither ParseError CompoundOperator",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:readCompoundOperator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "readConflictClause",
          "package": "language-sqlite",
          "signature": "String -\u003e Either ParseError ConflictClause",
          "source": "src/Language-SQL-SQLite-Syntax.html#readConflictClause",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "readConflictClause",
          "normalized": "String-\u003eEither ParseError ConflictClause",
          "package": "language-sqlite",
          "partial": "Conflict Clause",
          "signature": "String-\u003eEither ParseError ConflictClause",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:readConflictClause"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "readCreateIndex",
          "package": "language-sqlite",
          "signature": "String -\u003e Either ParseError CreateIndex",
          "source": "src/Language-SQL-SQLite-Syntax.html#readCreateIndex",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "readCreateIndex",
          "normalized": "String-\u003eEither ParseError CreateIndex",
          "package": "language-sqlite",
          "partial": "Create Index",
          "signature": "String-\u003eEither ParseError CreateIndex",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:readCreateIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "readCreateTable",
          "package": "language-sqlite",
          "signature": "String -\u003e Either ParseError CreateTable",
          "source": "src/Language-SQL-SQLite-Syntax.html#readCreateTable",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "readCreateTable",
          "normalized": "String-\u003eEither ParseError CreateTable",
          "package": "language-sqlite",
          "partial": "Create Table",
          "signature": "String-\u003eEither ParseError CreateTable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:readCreateTable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "readCreateTableBody",
          "package": "language-sqlite",
          "signature": "String -\u003e Either ParseError CreateTableBody",
          "source": "src/Language-SQL-SQLite-Syntax.html#readCreateTableBody",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "readCreateTableBody",
          "normalized": "String-\u003eEither ParseError CreateTableBody",
          "package": "language-sqlite",
          "partial": "Create Table Body",
          "signature": "String-\u003eEither ParseError CreateTableBody",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:readCreateTableBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "readCreateTrigger",
          "package": "language-sqlite",
          "signature": "String -\u003e Either ParseError CreateTrigger",
          "source": "src/Language-SQL-SQLite-Syntax.html#readCreateTrigger",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "readCreateTrigger",
          "normalized": "String-\u003eEither ParseError CreateTrigger",
          "package": "language-sqlite",
          "partial": "Create Trigger",
          "signature": "String-\u003eEither ParseError CreateTrigger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:readCreateTrigger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "readCreateView",
          "package": "language-sqlite",
          "signature": "String -\u003e Either ParseError CreateView",
          "source": "src/Language-SQL-SQLite-Syntax.html#readCreateView",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "readCreateView",
          "normalized": "String-\u003eEither ParseError CreateView",
          "package": "language-sqlite",
          "partial": "Create View",
          "signature": "String-\u003eEither ParseError CreateView",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:readCreateView"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "readCreateVirtualTable",
          "package": "language-sqlite",
          "signature": "String -\u003e Either ParseError CreateVirtualTable",
          "source": "src/Language-SQL-SQLite-Syntax.html#readCreateVirtualTable",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "readCreateVirtualTable",
          "normalized": "String-\u003eEither ParseError CreateVirtualTable",
          "package": "language-sqlite",
          "partial": "Create Virtual Table",
          "signature": "String-\u003eEither ParseError CreateVirtualTable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:readCreateVirtualTable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "readDefaultValue",
          "package": "language-sqlite",
          "signature": "String -\u003e Either ParseError DefaultValue",
          "source": "src/Language-SQL-SQLite-Syntax.html#readDefaultValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "readDefaultValue",
          "normalized": "String-\u003eEither ParseError DefaultValue",
          "package": "language-sqlite",
          "partial": "Default Value",
          "signature": "String-\u003eEither ParseError DefaultValue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:readDefaultValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "readDelete",
          "package": "language-sqlite",
          "signature": "String -\u003e Either ParseError Delete",
          "source": "src/Language-SQL-SQLite-Syntax.html#readDelete",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "readDelete",
          "normalized": "String-\u003eEither ParseError Delete",
          "package": "language-sqlite",
          "partial": "Delete",
          "signature": "String-\u003eEither ParseError Delete",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:readDelete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "readDeleteLimited",
          "package": "language-sqlite",
          "signature": "String -\u003e Either ParseError DeleteLimited",
          "source": "src/Language-SQL-SQLite-Syntax.html#readDeleteLimited",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "readDeleteLimited",
          "normalized": "String-\u003eEither ParseError DeleteLimited",
          "package": "language-sqlite",
          "partial": "Delete Limited",
          "signature": "String-\u003eEither ParseError DeleteLimited",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:readDeleteLimited"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "readDeleteOrDeleteLimited",
          "package": "language-sqlite",
          "signature": "String -\u003e Either ParseError AnyStatement",
          "source": "src/Language-SQL-SQLite-Syntax.html#readDeleteOrDeleteLimited",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "readDeleteOrDeleteLimited",
          "normalized": "String-\u003eEither ParseError AnyStatement",
          "package": "language-sqlite",
          "partial": "Delete Or Delete Limited",
          "signature": "String-\u003eEither ParseError AnyStatement",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:readDeleteOrDeleteLimited"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "readDetach",
          "package": "language-sqlite",
          "signature": "String -\u003e Either ParseError Detach",
          "source": "src/Language-SQL-SQLite-Syntax.html#readDetach",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "readDetach",
          "normalized": "String-\u003eEither ParseError Detach",
          "package": "language-sqlite",
          "partial": "Detach",
          "signature": "String-\u003eEither ParseError Detach",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:readDetach"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "readDistinctness",
          "package": "language-sqlite",
          "signature": "String -\u003e Either ParseError Distinctness",
          "source": "src/Language-SQL-SQLite-Syntax.html#readDistinctness",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "readDistinctness",
          "normalized": "String-\u003eEither ParseError Distinctness",
          "package": "language-sqlite",
          "partial": "Distinctness",
          "signature": "String-\u003eEither ParseError Distinctness",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:readDistinctness"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "readDoublyQualifiedIdentifier",
          "package": "language-sqlite",
          "signature": "String -\u003e Either ParseError DoublyQualifiedIdentifier",
          "source": "src/Language-SQL-SQLite-Syntax.html#readDoublyQualifiedIdentifier",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "readDoublyQualifiedIdentifier",
          "normalized": "String-\u003eEither ParseError DoublyQualifiedIdentifier",
          "package": "language-sqlite",
          "partial": "Doubly Qualified Identifier",
          "signature": "String-\u003eEither ParseError DoublyQualifiedIdentifier",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:readDoublyQualifiedIdentifier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "readDropIndex",
          "package": "language-sqlite",
          "signature": "String -\u003e Either ParseError DropIndex",
          "source": "src/Language-SQL-SQLite-Syntax.html#readDropIndex",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "readDropIndex",
          "normalized": "String-\u003eEither ParseError DropIndex",
          "package": "language-sqlite",
          "partial": "Drop Index",
          "signature": "String-\u003eEither ParseError DropIndex",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:readDropIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "readDropTable",
          "package": "language-sqlite",
          "signature": "String -\u003e Either ParseError DropTable",
          "source": "src/Language-SQL-SQLite-Syntax.html#readDropTable",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "readDropTable",
          "normalized": "String-\u003eEither ParseError DropTable",
          "package": "language-sqlite",
          "partial": "Drop Table",
          "signature": "String-\u003eEither ParseError DropTable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:readDropTable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "readDropTrigger",
          "package": "language-sqlite",
          "signature": "String -\u003e Either ParseError DropTrigger",
          "source": "src/Language-SQL-SQLite-Syntax.html#readDropTrigger",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "readDropTrigger",
          "normalized": "String-\u003eEither ParseError DropTrigger",
          "package": "language-sqlite",
          "partial": "Drop Trigger",
          "signature": "String-\u003eEither ParseError DropTrigger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:readDropTrigger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "readDropView",
          "package": "language-sqlite",
          "signature": "String -\u003e Either ParseError DropView",
          "source": "src/Language-SQL-SQLite-Syntax.html#readDropView",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "readDropView",
          "normalized": "String-\u003eEither ParseError DropView",
          "package": "language-sqlite",
          "partial": "Drop View",
          "signature": "String-\u003eEither ParseError DropView",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:readDropView"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "readElse",
          "package": "language-sqlite",
          "signature": "String -\u003e Either ParseError Else",
          "source": "src/Language-SQL-SQLite-Syntax.html#readElse",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "readElse",
          "normalized": "String-\u003eEither ParseError Else",
          "package": "language-sqlite",
          "partial": "Else",
          "signature": "String-\u003eEither ParseError Else",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:readElse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "readEscape",
          "package": "language-sqlite",
          "signature": "String -\u003e Either ParseError Escape",
          "source": "src/Language-SQL-SQLite-Syntax.html#readEscape",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "readEscape",
          "normalized": "String-\u003eEither ParseError Escape",
          "package": "language-sqlite",
          "partial": "Escape",
          "signature": "String-\u003eEither ParseError Escape",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:readEscape"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "readExplain",
          "package": "language-sqlite",
          "signature": "String -\u003e Either ParseError Explain",
          "source": "src/Language-SQL-SQLite-Syntax.html#readExplain",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "readExplain",
          "normalized": "String-\u003eEither ParseError Explain",
          "package": "language-sqlite",
          "partial": "Explain",
          "signature": "String-\u003eEither ParseError Explain",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:readExplain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "readExplainQueryPlan",
          "package": "language-sqlite",
          "signature": "String -\u003e Either ParseError ExplainQueryPlan",
          "source": "src/Language-SQL-SQLite-Syntax.html#readExplainQueryPlan",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "readExplainQueryPlan",
          "normalized": "String-\u003eEither ParseError ExplainQueryPlan",
          "package": "language-sqlite",
          "partial": "Explain Query Plan",
          "signature": "String-\u003eEither ParseError ExplainQueryPlan",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:readExplainQueryPlan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "readExplainableStatement",
          "package": "language-sqlite",
          "signature": "String -\u003e Either ParseError ExplainableStatement",
          "source": "src/Language-SQL-SQLite-Syntax.html#readExplainableStatement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "readExplainableStatement",
          "normalized": "String-\u003eEither ParseError ExplainableStatement",
          "package": "language-sqlite",
          "partial": "Explainable Statement",
          "signature": "String-\u003eEither ParseError ExplainableStatement",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:readExplainableStatement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "readExpression",
          "package": "language-sqlite",
          "signature": "String -\u003e Either ParseError Expression",
          "source": "src/Language-SQL-SQLite-Syntax.html#readExpression",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "readExpression",
          "normalized": "String-\u003eEither ParseError Expression",
          "package": "language-sqlite",
          "partial": "Expression",
          "signature": "String-\u003eEither ParseError Expression",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:readExpression"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "readForeignKeyClause",
          "package": "language-sqlite",
          "signature": "String -\u003e Either ParseError ForeignKeyClause",
          "source": "src/Language-SQL-SQLite-Syntax.html#readForeignKeyClause",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "readForeignKeyClause",
          "normalized": "String-\u003eEither ParseError ForeignKeyClause",
          "package": "language-sqlite",
          "partial": "Foreign Key Clause",
          "signature": "String-\u003eEither ParseError ForeignKeyClause",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:readForeignKeyClause"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "readForeignKeyClauseActionOrMatchPart",
          "package": "language-sqlite",
          "signature": "String -\u003e Either ParseError ForeignKeyClauseActionOrMatchPart",
          "source": "src/Language-SQL-SQLite-Syntax.html#readForeignKeyClauseActionOrMatchPart",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "readForeignKeyClauseActionOrMatchPart",
          "normalized": "String-\u003eEither ParseError ForeignKeyClauseActionOrMatchPart",
          "package": "language-sqlite",
          "partial": "Foreign Key Clause Action Or Match Part",
          "signature": "String-\u003eEither ParseError ForeignKeyClauseActionOrMatchPart",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:readForeignKeyClauseActionOrMatchPart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "readForeignKeyClauseActionPart",
          "package": "language-sqlite",
          "signature": "String -\u003e Either ParseError ForeignKeyClauseActionPart",
          "source": "src/Language-SQL-SQLite-Syntax.html#readForeignKeyClauseActionPart",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "readForeignKeyClauseActionPart",
          "normalized": "String-\u003eEither ParseError ForeignKeyClauseActionPart",
          "package": "language-sqlite",
          "partial": "Foreign Key Clause Action Part",
          "signature": "String-\u003eEither ParseError ForeignKeyClauseActionPart",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:readForeignKeyClauseActionPart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "readFromClause",
          "package": "language-sqlite",
          "signature": "String -\u003e Either ParseError FromClause",
          "source": "src/Language-SQL-SQLite-Syntax.html#readFromClause",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "readFromClause",
          "normalized": "String-\u003eEither ParseError FromClause",
          "package": "language-sqlite",
          "partial": "From Clause",
          "signature": "String-\u003eEither ParseError FromClause",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:readFromClause"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "readGroupClause",
          "package": "language-sqlite",
          "signature": "String -\u003e Either ParseError GroupClause",
          "source": "src/Language-SQL-SQLite-Syntax.html#readGroupClause",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "readGroupClause",
          "normalized": "String-\u003eEither ParseError GroupClause",
          "package": "language-sqlite",
          "partial": "Group Clause",
          "signature": "String-\u003eEither ParseError GroupClause",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:readGroupClause"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "readIndexedColumn",
          "package": "language-sqlite",
          "signature": "String -\u003e Either ParseError IndexedColumn",
          "source": "src/Language-SQL-SQLite-Syntax.html#readIndexedColumn",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "readIndexedColumn",
          "normalized": "String-\u003eEither ParseError IndexedColumn",
          "package": "language-sqlite",
          "partial": "Indexed Column",
          "signature": "String-\u003eEither ParseError IndexedColumn",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:readIndexedColumn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "readInsert",
          "package": "language-sqlite",
          "signature": "String -\u003e Either ParseError Insert",
          "source": "src/Language-SQL-SQLite-Syntax.html#readInsert",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "readInsert",
          "normalized": "String-\u003eEither ParseError Insert",
          "package": "language-sqlite",
          "partial": "Insert",
          "signature": "String-\u003eEither ParseError Insert",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:readInsert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "readInsertBody",
          "package": "language-sqlite",
          "signature": "String -\u003e Either ParseError InsertBody",
          "source": "src/Language-SQL-SQLite-Syntax.html#readInsertBody",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "readInsertBody",
          "normalized": "String-\u003eEither ParseError InsertBody",
          "package": "language-sqlite",
          "partial": "Insert Body",
          "signature": "String-\u003eEither ParseError InsertBody",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:readInsertBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "readInsertHead",
          "package": "language-sqlite",
          "signature": "String -\u003e Either ParseError InsertHead",
          "source": "src/Language-SQL-SQLite-Syntax.html#readInsertHead",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "readInsertHead",
          "normalized": "String-\u003eEither ParseError InsertHead",
          "package": "language-sqlite",
          "partial": "Insert Head",
          "signature": "String-\u003eEither ParseError InsertHead",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:readInsertHead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "readJoinConstraint",
          "package": "language-sqlite",
          "signature": "String -\u003e Either ParseError JoinConstraint",
          "source": "src/Language-SQL-SQLite-Syntax.html#readJoinConstraint",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "readJoinConstraint",
          "normalized": "String-\u003eEither ParseError JoinConstraint",
          "package": "language-sqlite",
          "partial": "Join Constraint",
          "signature": "String-\u003eEither ParseError JoinConstraint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:readJoinConstraint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "readJoinOperation",
          "package": "language-sqlite",
          "signature": "String -\u003e Either ParseError JoinOperation",
          "source": "src/Language-SQL-SQLite-Syntax.html#readJoinOperation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "readJoinOperation",
          "normalized": "String-\u003eEither ParseError JoinOperation",
          "package": "language-sqlite",
          "partial": "Join Operation",
          "signature": "String-\u003eEither ParseError JoinOperation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:readJoinOperation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "readJoinSource",
          "package": "language-sqlite",
          "signature": "String -\u003e Either ParseError JoinSource",
          "source": "src/Language-SQL-SQLite-Syntax.html#readJoinSource",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "readJoinSource",
          "normalized": "String-\u003eEither ParseError JoinSource",
          "package": "language-sqlite",
          "partial": "Join Source",
          "signature": "String-\u003eEither ParseError JoinSource",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:readJoinSource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "readLikeType",
          "package": "language-sqlite",
          "signature": "String -\u003e Either ParseError LikeType",
          "source": "src/Language-SQL-SQLite-Syntax.html#readLikeType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "readLikeType",
          "normalized": "String-\u003eEither ParseError LikeType",
          "package": "language-sqlite",
          "partial": "Like Type",
          "signature": "String-\u003eEither ParseError LikeType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:readLikeType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "readLimitClause",
          "package": "language-sqlite",
          "signature": "String -\u003e Either ParseError LimitClause",
          "source": "src/Language-SQL-SQLite-Syntax.html#readLimitClause",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "readLimitClause",
          "normalized": "String-\u003eEither ParseError LimitClause",
          "package": "language-sqlite",
          "partial": "Limit Clause",
          "signature": "String-\u003eEither ParseError LimitClause",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:readLimitClause"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "readMaybeAs",
          "package": "language-sqlite",
          "signature": "String -\u003e Either ParseError MaybeAs",
          "source": "src/Language-SQL-SQLite-Syntax.html#readMaybeAs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "readMaybeAs",
          "normalized": "String-\u003eEither ParseError MaybeAs",
          "package": "language-sqlite",
          "partial": "Maybe As",
          "signature": "String-\u003eEither ParseError MaybeAs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:readMaybeAs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "readMaybeAscDesc",
          "package": "language-sqlite",
          "signature": "String -\u003e Either ParseError MaybeAscDesc",
          "source": "src/Language-SQL-SQLite-Syntax.html#readMaybeAscDesc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "readMaybeAscDesc",
          "normalized": "String-\u003eEither ParseError MaybeAscDesc",
          "package": "language-sqlite",
          "partial": "Maybe Asc Desc",
          "signature": "String-\u003eEither ParseError MaybeAscDesc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:readMaybeAscDesc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "readMaybeAutoincrement",
          "package": "language-sqlite",
          "signature": "String -\u003e Either ParseError MaybeAutoincrement",
          "source": "src/Language-SQL-SQLite-Syntax.html#readMaybeAutoincrement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "readMaybeAutoincrement",
          "normalized": "String-\u003eEither ParseError MaybeAutoincrement",
          "package": "language-sqlite",
          "partial": "Maybe Autoincrement",
          "signature": "String-\u003eEither ParseError MaybeAutoincrement",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:readMaybeAutoincrement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "readMaybeCollation",
          "package": "language-sqlite",
          "signature": "String -\u003e Either ParseError MaybeCollation",
          "source": "src/Language-SQL-SQLite-Syntax.html#readMaybeCollation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "readMaybeCollation",
          "normalized": "String-\u003eEither ParseError MaybeCollation",
          "package": "language-sqlite",
          "partial": "Maybe Collation",
          "signature": "String-\u003eEither ParseError MaybeCollation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:readMaybeCollation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "readMaybeColumn",
          "package": "language-sqlite",
          "signature": "String -\u003e Either ParseError MaybeColumn",
          "source": "src/Language-SQL-SQLite-Syntax.html#readMaybeColumn",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "readMaybeColumn",
          "normalized": "String-\u003eEither ParseError MaybeColumn",
          "package": "language-sqlite",
          "partial": "Maybe Column",
          "signature": "String-\u003eEither ParseError MaybeColumn",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:readMaybeColumn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "readMaybeConstraintName",
          "package": "language-sqlite",
          "signature": "String -\u003e Either ParseError MaybeConstraintName",
          "source": "src/Language-SQL-SQLite-Syntax.html#readMaybeConstraintName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "readMaybeConstraintName",
          "normalized": "String-\u003eEither ParseError MaybeConstraintName",
          "package": "language-sqlite",
          "partial": "Maybe Constraint Name",
          "signature": "String-\u003eEither ParseError MaybeConstraintName",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:readMaybeConstraintName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "readMaybeDatabase",
          "package": "language-sqlite",
          "signature": "String -\u003e Either ParseError MaybeDatabase",
          "source": "src/Language-SQL-SQLite-Syntax.html#readMaybeDatabase",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "readMaybeDatabase",
          "normalized": "String-\u003eEither ParseError MaybeDatabase",
          "package": "language-sqlite",
          "partial": "Maybe Database",
          "signature": "String-\u003eEither ParseError MaybeDatabase",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:readMaybeDatabase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "readMaybeForEachRow",
          "package": "language-sqlite",
          "signature": "String -\u003e Either ParseError MaybeForEachRow",
          "source": "src/Language-SQL-SQLite-Syntax.html#readMaybeForEachRow",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "readMaybeForEachRow",
          "normalized": "String-\u003eEither ParseError MaybeForEachRow",
          "package": "language-sqlite",
          "partial": "Maybe For Each Row",
          "signature": "String-\u003eEither ParseError MaybeForEachRow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:readMaybeForEachRow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "readMaybeForeignKeyClauseDeferrablePart",
          "package": "language-sqlite",
          "signature": "String -\u003e Either ParseError MaybeForeignKeyClauseDeferrablePart",
          "source": "src/Language-SQL-SQLite-Syntax.html#readMaybeForeignKeyClauseDeferrablePart",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "readMaybeForeignKeyClauseDeferrablePart",
          "normalized": "String-\u003eEither ParseError MaybeForeignKeyClauseDeferrablePart",
          "package": "language-sqlite",
          "partial": "Maybe Foreign Key Clause Deferrable Part",
          "signature": "String-\u003eEither ParseError MaybeForeignKeyClauseDeferrablePart",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:readMaybeForeignKeyClauseDeferrablePart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "readMaybeHaving",
          "package": "language-sqlite",
          "signature": "String -\u003e Either ParseError MaybeHaving",
          "source": "src/Language-SQL-SQLite-Syntax.html#readMaybeHaving",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "readMaybeHaving",
          "normalized": "String-\u003eEither ParseError MaybeHaving",
          "package": "language-sqlite",
          "partial": "Maybe Having",
          "signature": "String-\u003eEither ParseError MaybeHaving",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:readMaybeHaving"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "readMaybeIfExists",
          "package": "language-sqlite",
          "signature": "String -\u003e Either ParseError MaybeIfExists",
          "source": "src/Language-SQL-SQLite-Syntax.html#readMaybeIfExists",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "readMaybeIfExists",
          "normalized": "String-\u003eEither ParseError MaybeIfExists",
          "package": "language-sqlite",
          "partial": "Maybe If Exists",
          "signature": "String-\u003eEither ParseError MaybeIfExists",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:readMaybeIfExists"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "readMaybeIfNotExists",
          "package": "language-sqlite",
          "signature": "String -\u003e Either ParseError MaybeIfNotExists",
          "source": "src/Language-SQL-SQLite-Syntax.html#readMaybeIfNotExists",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "readMaybeIfNotExists",
          "normalized": "String-\u003eEither ParseError MaybeIfNotExists",
          "package": "language-sqlite",
          "partial": "Maybe If Not Exists",
          "signature": "String-\u003eEither ParseError MaybeIfNotExists",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:readMaybeIfNotExists"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "readMaybeIndexedBy",
          "package": "language-sqlite",
          "signature": "String -\u003e Either ParseError MaybeIndexedBy",
          "source": "src/Language-SQL-SQLite-Syntax.html#readMaybeIndexedBy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "readMaybeIndexedBy",
          "normalized": "String-\u003eEither ParseError MaybeIndexedBy",
          "package": "language-sqlite",
          "partial": "Maybe Indexed By",
          "signature": "String-\u003eEither ParseError MaybeIndexedBy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:readMaybeIndexedBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "readMaybeInitialDeferralStatus",
          "package": "language-sqlite",
          "signature": "String -\u003e Either ParseError MaybeInitialDeferralStatus",
          "source": "src/Language-SQL-SQLite-Syntax.html#readMaybeInitialDeferralStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "readMaybeInitialDeferralStatus",
          "normalized": "String-\u003eEither ParseError MaybeInitialDeferralStatus",
          "package": "language-sqlite",
          "partial": "Maybe Initial Deferral Status",
          "signature": "String-\u003eEither ParseError MaybeInitialDeferralStatus",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:readMaybeInitialDeferralStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "readMaybeReleaseSavepoint",
          "package": "language-sqlite",
          "signature": "String -\u003e Either ParseError MaybeReleaseSavepoint",
          "source": "src/Language-SQL-SQLite-Syntax.html#readMaybeReleaseSavepoint",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "readMaybeReleaseSavepoint",
          "normalized": "String-\u003eEither ParseError MaybeReleaseSavepoint",
          "package": "language-sqlite",
          "partial": "Maybe Release Savepoint",
          "signature": "String-\u003eEither ParseError MaybeReleaseSavepoint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:readMaybeReleaseSavepoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "readMaybeSavepoint",
          "package": "language-sqlite",
          "signature": "String -\u003e Either ParseError MaybeSavepoint",
          "source": "src/Language-SQL-SQLite-Syntax.html#readMaybeSavepoint",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "readMaybeSavepoint",
          "normalized": "String-\u003eEither ParseError MaybeSavepoint",
          "package": "language-sqlite",
          "partial": "Maybe Savepoint",
          "signature": "String-\u003eEither ParseError MaybeSavepoint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:readMaybeSavepoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "readMaybeSign",
          "package": "language-sqlite",
          "signature": "String -\u003e Either ParseError MaybeSign",
          "source": "src/Language-SQL-SQLite-Syntax.html#readMaybeSign",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "readMaybeSign",
          "normalized": "String-\u003eEither ParseError MaybeSign",
          "package": "language-sqlite",
          "partial": "Maybe Sign",
          "signature": "String-\u003eEither ParseError MaybeSign",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:readMaybeSign"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "readMaybeSwitchExpression",
          "package": "language-sqlite",
          "signature": "String -\u003e Either ParseError MaybeSwitchExpression",
          "source": "src/Language-SQL-SQLite-Syntax.html#readMaybeSwitchExpression",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "readMaybeSwitchExpression",
          "normalized": "String-\u003eEither ParseError MaybeSwitchExpression",
          "package": "language-sqlite",
          "partial": "Maybe Switch Expression",
          "signature": "String-\u003eEither ParseError MaybeSwitchExpression",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:readMaybeSwitchExpression"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "readMaybeTemporary",
          "package": "language-sqlite",
          "signature": "String -\u003e Either ParseError MaybeTemporary",
          "source": "src/Language-SQL-SQLite-Syntax.html#readMaybeTemporary",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "readMaybeTemporary",
          "normalized": "String-\u003eEither ParseError MaybeTemporary",
          "package": "language-sqlite",
          "partial": "Maybe Temporary",
          "signature": "String-\u003eEither ParseError MaybeTemporary",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:readMaybeTemporary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "readMaybeTransaction",
          "package": "language-sqlite",
          "signature": "String -\u003e Either ParseError MaybeTransaction",
          "source": "src/Language-SQL-SQLite-Syntax.html#readMaybeTransaction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "readMaybeTransaction",
          "normalized": "String-\u003eEither ParseError MaybeTransaction",
          "package": "language-sqlite",
          "partial": "Maybe Transaction",
          "signature": "String-\u003eEither ParseError MaybeTransaction",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:readMaybeTransaction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "readMaybeTransactionType",
          "package": "language-sqlite",
          "signature": "String -\u003e Either ParseError MaybeTransactionType",
          "source": "src/Language-SQL-SQLite-Syntax.html#readMaybeTransactionType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "readMaybeTransactionType",
          "normalized": "String-\u003eEither ParseError MaybeTransactionType",
          "package": "language-sqlite",
          "partial": "Maybe Transaction Type",
          "signature": "String-\u003eEither ParseError MaybeTransactionType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:readMaybeTransactionType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "readMaybeType",
          "package": "language-sqlite",
          "signature": "String -\u003e Either ParseError MaybeType",
          "source": "src/Language-SQL-SQLite-Syntax.html#readMaybeType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "readMaybeType",
          "normalized": "String-\u003eEither ParseError MaybeType",
          "package": "language-sqlite",
          "partial": "Maybe Type",
          "signature": "String-\u003eEither ParseError MaybeType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:readMaybeType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "readMaybeTypeName",
          "package": "language-sqlite",
          "signature": "String -\u003e Either ParseError MaybeTypeName",
          "source": "src/Language-SQL-SQLite-Syntax.html#readMaybeTypeName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "readMaybeTypeName",
          "normalized": "String-\u003eEither ParseError MaybeTypeName",
          "package": "language-sqlite",
          "partial": "Maybe Type Name",
          "signature": "String-\u003eEither ParseError MaybeTypeName",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:readMaybeTypeName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "readMaybeTypeSize",
          "package": "language-sqlite",
          "signature": "String -\u003e Either ParseError MaybeTypeSize",
          "source": "src/Language-SQL-SQLite-Syntax.html#readMaybeTypeSize",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "readMaybeTypeSize",
          "normalized": "String-\u003eEither ParseError MaybeTypeSize",
          "package": "language-sqlite",
          "partial": "Maybe Type Size",
          "signature": "String-\u003eEither ParseError MaybeTypeSize",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:readMaybeTypeSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "readMaybeUnique",
          "package": "language-sqlite",
          "signature": "String -\u003e Either ParseError MaybeUnique",
          "source": "src/Language-SQL-SQLite-Syntax.html#readMaybeUnique",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "readMaybeUnique",
          "normalized": "String-\u003eEither ParseError MaybeUnique",
          "package": "language-sqlite",
          "partial": "Maybe Unique",
          "signature": "String-\u003eEither ParseError MaybeUnique",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:readMaybeUnique"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "readModuleArgument",
          "package": "language-sqlite",
          "signature": "String -\u003e Either ParseError ModuleArgument",
          "source": "src/Language-SQL-SQLite-Syntax.html#readModuleArgument",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "readModuleArgument",
          "normalized": "String-\u003eEither ParseError ModuleArgument",
          "package": "language-sqlite",
          "partial": "Module Argument",
          "signature": "String-\u003eEither ParseError ModuleArgument",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:readModuleArgument"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "readOrderClause",
          "package": "language-sqlite",
          "signature": "String -\u003e Either ParseError OrderClause",
          "source": "src/Language-SQL-SQLite-Syntax.html#readOrderClause",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "readOrderClause",
          "normalized": "String-\u003eEither ParseError OrderClause",
          "package": "language-sqlite",
          "partial": "Order Clause",
          "signature": "String-\u003eEither ParseError OrderClause",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:readOrderClause"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "readOrderingTerm",
          "package": "language-sqlite",
          "signature": "String -\u003e Either ParseError OrderingTerm",
          "source": "src/Language-SQL-SQLite-Syntax.html#readOrderingTerm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "readOrderingTerm",
          "normalized": "String-\u003eEither ParseError OrderingTerm",
          "package": "language-sqlite",
          "partial": "Ordering Term",
          "signature": "String-\u003eEither ParseError OrderingTerm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:readOrderingTerm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "readPragma",
          "package": "language-sqlite",
          "signature": "String -\u003e Either ParseError Pragma",
          "source": "src/Language-SQL-SQLite-Syntax.html#readPragma",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "readPragma",
          "normalized": "String-\u003eEither ParseError Pragma",
          "package": "language-sqlite",
          "partial": "Pragma",
          "signature": "String-\u003eEither ParseError Pragma",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:readPragma"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "readPragmaBody",
          "package": "language-sqlite",
          "signature": "String -\u003e Either ParseError PragmaBody",
          "source": "src/Language-SQL-SQLite-Syntax.html#readPragmaBody",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "readPragmaBody",
          "normalized": "String-\u003eEither ParseError PragmaBody",
          "package": "language-sqlite",
          "partial": "Pragma Body",
          "signature": "String-\u003eEither ParseError PragmaBody",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:readPragmaBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "readPragmaValue",
          "package": "language-sqlite",
          "signature": "String -\u003e Either ParseError PragmaValue",
          "source": "src/Language-SQL-SQLite-Syntax.html#readPragmaValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "readPragmaValue",
          "normalized": "String-\u003eEither ParseError PragmaValue",
          "package": "language-sqlite",
          "partial": "Pragma Value",
          "signature": "String-\u003eEither ParseError PragmaValue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:readPragmaValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "readQualifiedTableName",
          "package": "language-sqlite",
          "signature": "String -\u003e Either ParseError QualifiedTableName",
          "source": "src/Language-SQL-SQLite-Syntax.html#readQualifiedTableName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "readQualifiedTableName",
          "normalized": "String-\u003eEither ParseError QualifiedTableName",
          "package": "language-sqlite",
          "partial": "Qualified Table Name",
          "signature": "String-\u003eEither ParseError QualifiedTableName",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:readQualifiedTableName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "readReindex",
          "package": "language-sqlite",
          "signature": "String -\u003e Either ParseError Reindex",
          "source": "src/Language-SQL-SQLite-Syntax.html#readReindex",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "readReindex",
          "normalized": "String-\u003eEither ParseError Reindex",
          "package": "language-sqlite",
          "partial": "Reindex",
          "signature": "String-\u003eEither ParseError Reindex",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:readReindex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "readRelease",
          "package": "language-sqlite",
          "signature": "String -\u003e Either ParseError Release",
          "source": "src/Language-SQL-SQLite-Syntax.html#readRelease",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "readRelease",
          "normalized": "String-\u003eEither ParseError Release",
          "package": "language-sqlite",
          "partial": "Release",
          "signature": "String-\u003eEither ParseError Release",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:readRelease"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "readResultColumn",
          "package": "language-sqlite",
          "signature": "String -\u003e Either ParseError ResultColumn",
          "source": "src/Language-SQL-SQLite-Syntax.html#readResultColumn",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "readResultColumn",
          "normalized": "String-\u003eEither ParseError ResultColumn",
          "package": "language-sqlite",
          "partial": "Result Column",
          "signature": "String-\u003eEither ParseError ResultColumn",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:readResultColumn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "readRollback",
          "package": "language-sqlite",
          "signature": "String -\u003e Either ParseError Rollback",
          "source": "src/Language-SQL-SQLite-Syntax.html#readRollback",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "readRollback",
          "normalized": "String-\u003eEither ParseError Rollback",
          "package": "language-sqlite",
          "partial": "Rollback",
          "signature": "String-\u003eEither ParseError Rollback",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:readRollback"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "readSavepoint",
          "package": "language-sqlite",
          "signature": "String -\u003e Either ParseError Savepoint",
          "source": "src/Language-SQL-SQLite-Syntax.html#readSavepoint",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "readSavepoint",
          "normalized": "String-\u003eEither ParseError Savepoint",
          "package": "language-sqlite",
          "partial": "Savepoint",
          "signature": "String-\u003eEither ParseError Savepoint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:readSavepoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "readSelect",
          "package": "language-sqlite",
          "signature": "String -\u003e Either ParseError Select",
          "source": "src/Language-SQL-SQLite-Syntax.html#readSelect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "readSelect",
          "normalized": "String-\u003eEither ParseError Select",
          "package": "language-sqlite",
          "partial": "Select",
          "signature": "String-\u003eEither ParseError Select",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:readSelect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "readSelectCore",
          "package": "language-sqlite",
          "signature": "String -\u003e Either ParseError SelectCore",
          "source": "src/Language-SQL-SQLite-Syntax.html#readSelectCore",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "readSelectCore",
          "normalized": "String-\u003eEither ParseError SelectCore",
          "package": "language-sqlite",
          "partial": "Select Core",
          "signature": "String-\u003eEither ParseError SelectCore",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:readSelectCore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "readSingleSource",
          "package": "language-sqlite",
          "signature": "String -\u003e Either ParseError SingleSource",
          "source": "src/Language-SQL-SQLite-Syntax.html#readSingleSource",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "readSingleSource",
          "normalized": "String-\u003eEither ParseError SingleSource",
          "package": "language-sqlite",
          "partial": "Single Source",
          "signature": "String-\u003eEither ParseError SingleSource",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:readSingleSource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "readSinglyQualifiedIdentifier",
          "package": "language-sqlite",
          "signature": "String -\u003e Either ParseError SinglyQualifiedIdentifier",
          "source": "src/Language-SQL-SQLite-Syntax.html#readSinglyQualifiedIdentifier",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "readSinglyQualifiedIdentifier",
          "normalized": "String-\u003eEither ParseError SinglyQualifiedIdentifier",
          "package": "language-sqlite",
          "partial": "Singly Qualified Identifier",
          "signature": "String-\u003eEither ParseError SinglyQualifiedIdentifier",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:readSinglyQualifiedIdentifier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "readStatementList",
          "package": "language-sqlite",
          "signature": "String -\u003e Either ParseError StatementList",
          "source": "src/Language-SQL-SQLite-Syntax.html#readStatementList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "readStatementList",
          "normalized": "String-\u003eEither ParseError StatementList",
          "package": "language-sqlite",
          "partial": "Statement List",
          "signature": "String-\u003eEither ParseError StatementList",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:readStatementList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "readTableConstraint",
          "package": "language-sqlite",
          "signature": "String -\u003e Either ParseError TableConstraint",
          "source": "src/Language-SQL-SQLite-Syntax.html#readTableConstraint",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "readTableConstraint",
          "normalized": "String-\u003eEither ParseError TableConstraint",
          "package": "language-sqlite",
          "partial": "Table Constraint",
          "signature": "String-\u003eEither ParseError TableConstraint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:readTableConstraint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "readTriggerCondition",
          "package": "language-sqlite",
          "signature": "String -\u003e Either ParseError TriggerCondition",
          "source": "src/Language-SQL-SQLite-Syntax.html#readTriggerCondition",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "readTriggerCondition",
          "normalized": "String-\u003eEither ParseError TriggerCondition",
          "package": "language-sqlite",
          "partial": "Trigger Condition",
          "signature": "String-\u003eEither ParseError TriggerCondition",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:readTriggerCondition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "readTriggerStatement",
          "package": "language-sqlite",
          "signature": "String -\u003e Either ParseError TriggerStatement",
          "source": "src/Language-SQL-SQLite-Syntax.html#readTriggerStatement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "readTriggerStatement",
          "normalized": "String-\u003eEither ParseError TriggerStatement",
          "package": "language-sqlite",
          "partial": "Trigger Statement",
          "signature": "String-\u003eEither ParseError TriggerStatement",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:readTriggerStatement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "readTriggerTime",
          "package": "language-sqlite",
          "signature": "String -\u003e Either ParseError TriggerTime",
          "source": "src/Language-SQL-SQLite-Syntax.html#readTriggerTime",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "readTriggerTime",
          "normalized": "String-\u003eEither ParseError TriggerTime",
          "package": "language-sqlite",
          "partial": "Trigger Time",
          "signature": "String-\u003eEither ParseError TriggerTime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:readTriggerTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "readType",
          "package": "language-sqlite",
          "signature": "String -\u003e Either ParseError Type",
          "source": "src/Language-SQL-SQLite-Syntax.html#readType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "readType",
          "normalized": "String-\u003eEither ParseError Type",
          "package": "language-sqlite",
          "partial": "Type",
          "signature": "String-\u003eEither ParseError Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:readType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "readTypeSizeField",
          "package": "language-sqlite",
          "signature": "String -\u003e Either ParseError TypeSizeField",
          "source": "src/Language-SQL-SQLite-Syntax.html#readTypeSizeField",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "readTypeSizeField",
          "normalized": "String-\u003eEither ParseError TypeSizeField",
          "package": "language-sqlite",
          "partial": "Type Size Field",
          "signature": "String-\u003eEither ParseError TypeSizeField",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:readTypeSizeField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "readUnqualifiedIdentifier",
          "package": "language-sqlite",
          "signature": "String -\u003e Either ParseError UnqualifiedIdentifier",
          "source": "src/Language-SQL-SQLite-Syntax.html#readUnqualifiedIdentifier",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "readUnqualifiedIdentifier",
          "normalized": "String-\u003eEither ParseError UnqualifiedIdentifier",
          "package": "language-sqlite",
          "partial": "Unqualified Identifier",
          "signature": "String-\u003eEither ParseError UnqualifiedIdentifier",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:readUnqualifiedIdentifier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "readUpdate",
          "package": "language-sqlite",
          "signature": "String -\u003e Either ParseError Update",
          "source": "src/Language-SQL-SQLite-Syntax.html#readUpdate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "readUpdate",
          "normalized": "String-\u003eEither ParseError Update",
          "package": "language-sqlite",
          "partial": "Update",
          "signature": "String-\u003eEither ParseError Update",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:readUpdate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "readUpdateHead",
          "package": "language-sqlite",
          "signature": "String -\u003e Either ParseError UpdateHead",
          "source": "src/Language-SQL-SQLite-Syntax.html#readUpdateHead",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "readUpdateHead",
          "normalized": "String-\u003eEither ParseError UpdateHead",
          "package": "language-sqlite",
          "partial": "Update Head",
          "signature": "String-\u003eEither ParseError UpdateHead",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:readUpdateHead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "readUpdateLimited",
          "package": "language-sqlite",
          "signature": "String -\u003e Either ParseError UpdateLimited",
          "source": "src/Language-SQL-SQLite-Syntax.html#readUpdateLimited",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "readUpdateLimited",
          "normalized": "String-\u003eEither ParseError UpdateLimited",
          "package": "language-sqlite",
          "partial": "Update Limited",
          "signature": "String-\u003eEither ParseError UpdateLimited",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:readUpdateLimited"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "readUpdateOrUpdateLimited",
          "package": "language-sqlite",
          "signature": "String -\u003e Either ParseError AnyStatement",
          "source": "src/Language-SQL-SQLite-Syntax.html#readUpdateOrUpdateLimited",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "readUpdateOrUpdateLimited",
          "normalized": "String-\u003eEither ParseError AnyStatement",
          "package": "language-sqlite",
          "partial": "Update Or Update Limited",
          "signature": "String-\u003eEither ParseError AnyStatement",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:readUpdateOrUpdateLimited"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "readVacuum",
          "package": "language-sqlite",
          "signature": "String -\u003e Either ParseError Vacuum",
          "source": "src/Language-SQL-SQLite-Syntax.html#readVacuum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "readVacuum",
          "normalized": "String-\u003eEither ParseError Vacuum",
          "package": "language-sqlite",
          "partial": "Vacuum",
          "signature": "String-\u003eEither ParseError Vacuum",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:readVacuum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "readWhenClause",
          "package": "language-sqlite",
          "signature": "String -\u003e Either ParseError WhenClause",
          "source": "src/Language-SQL-SQLite-Syntax.html#readWhenClause",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "readWhenClause",
          "normalized": "String-\u003eEither ParseError WhenClause",
          "package": "language-sqlite",
          "partial": "When Clause",
          "signature": "String-\u003eEither ParseError WhenClause",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:readWhenClause"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "readWhereClause",
          "package": "language-sqlite",
          "signature": "String -\u003e Either ParseError WhereClause",
          "source": "src/Language-SQL-SQLite-Syntax.html#readWhereClause",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "readWhereClause",
          "normalized": "String-\u003eEither ParseError WhereClause",
          "package": "language-sqlite",
          "partial": "Where Clause",
          "signature": "String-\u003eEither ParseError WhereClause",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:readWhereClause"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SQL.SQLite",
          "name": "showTokens",
          "package": "language-sqlite",
          "signature": "a -\u003e [Token]",
          "source": "src/Language-SQL-SQLite-Types.html#showTokens",
          "type": "method"
        },
        "index": {
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "showTokens",
          "normalized": "a-\u003e[Token]",
          "package": "language-sqlite",
          "partial": "Tokens",
          "signature": "a-\u003e[Token]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:showTokens"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts an identifier to be doubly-qualified.  This does not actually synthesize\n   any missing components, merely provides \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e for them.\n\u003c/p\u003e",
          "module": "Language.SQL.SQLite",
          "name": "toDoublyQualifiedIdentifier",
          "package": "language-sqlite",
          "signature": "a -\u003e DoublyQualifiedIdentifier",
          "source": "src/Language-SQL-SQLite-Types.html#toDoublyQualifiedIdentifier",
          "type": "function"
        },
        "index": {
          "description": "Converts an identifier to be doubly-qualified This does not actually synthesize any missing components merely provides Nothing for them",
          "hierarchy": "Language SQL SQLite",
          "module": "Language.SQL.SQLite",
          "name": "toDoublyQualifiedIdentifier",
          "normalized": "a-\u003eDoublyQualifiedIdentifier",
          "package": "language-sqlite",
          "partial": "Doubly Qualified Identifier",
          "signature": "a-\u003eDoublyQualifiedIdentifier",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-sqlite/docs/Language-SQL-SQLite.html#v:toDoublyQualifiedIdentifier"
      }
    }
  ]
]