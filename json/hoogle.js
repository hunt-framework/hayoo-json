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
        "word": "hoogle"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe Hoogle API. To perform a search you call \u003ccode\u003e\u003ca\u003esearch\u003c/a\u003e\u003c/code\u003e with a \u003ccode\u003e\u003ca\u003eDatabase\u003c/a\u003e\u003c/code\u003e (obtained by \u003ccode\u003e\u003ca\u003eloadDatabase\u003c/a\u003e\u003c/code\u003e) and a\n   \u003ccode\u003e\u003ca\u003eQuery\u003c/a\u003e\u003c/code\u003e (obtained by \u003ccode\u003e\u003ca\u003eparseQuery\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Hoogle",
          "name": "Hoogle",
          "package": "hoogle",
          "source": "src/Hoogle.html",
          "type": "module"
        },
        "index": {
          "description": "The Hoogle API To perform search you call search with Database obtained by loadDatabase and Query obtained by parseQuery",
          "hierarchy": "Hoogle",
          "module": "Hoogle",
          "name": "Hoogle",
          "package": "hoogle",
          "partial": "Hoogle",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hoogle/docs/Hoogle.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA Hoogle database, containing a set of functions/items which can be searched. The \u003ccode\u003e\u003ca\u003eDatabase\u003c/a\u003e\u003c/code\u003e type is used\n   for a variety of purposes:\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003eCreation\u003c/dt\u003e\u003cdd\u003e A database is created by merging existing databases with the \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e instance and \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e,\n   or by creating a new \u003ccode\u003e\u003ca\u003eDatabase\u003c/a\u003e\u003c/code\u003e from an input file with \u003ccode\u003e\u003ca\u003ecreateDatabase\u003c/a\u003e\u003c/code\u003e.\n\u003c/dd\u003e\u003cdt\u003eSerialization\u003c/dt\u003e\u003cdd\u003e A database is saved to disk with \u003ccode\u003e\u003ca\u003esaveDatabase\u003c/a\u003e\u003c/code\u003e and loaded from disk with \u003ccode\u003e\u003ca\u003eloadDatabase\u003c/a\u003e\u003c/code\u003e.\n\u003c/dd\u003e\u003cdt\u003eSearching\u003c/dt\u003e\u003cdd\u003e A database is searched using \u003ccode\u003e\u003ca\u003esearch\u003c/a\u003e\u003c/code\u003e.\n\u003c/dd\u003e\u003c/dl\u003e",
          "module": "Hoogle",
          "name": "Database",
          "package": "hoogle",
          "source": "src/Hoogle.html#Database",
          "type": "data"
        },
        "index": {
          "description": "Hoogle database containing set of functions items which can be searched The Database type is used for variety of purposes Creation database is created by merging existing databases with the Monoid instance and mappend or by creating new Database from an input file with createDatabase Serialization database is saved to disk with saveDatabase and loaded from disk with loadDatabase Searching database is searched using search",
          "hierarchy": "Hoogle",
          "module": "Hoogle",
          "name": "Database",
          "package": "hoogle",
          "partial": "Database",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hoogle/docs/Hoogle.html#t:Database"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoogle",
          "name": "ItemKind",
          "package": "hoogle",
          "source": "src/Hoogle-Type-Item.html#ItemKind",
          "type": "data"
        },
        "index": {
          "hierarchy": "Hoogle",
          "module": "Hoogle",
          "name": "ItemKind",
          "package": "hoogle",
          "partial": "Item Kind",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hoogle/docs/Hoogle.html#t:ItemKind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe languages supported by Hoogle.\n\u003c/p\u003e",
          "module": "Hoogle",
          "name": "Language",
          "package": "hoogle",
          "source": "src/Hoogle-Type-Language.html#Language",
          "type": "data"
        },
        "index": {
          "description": "The languages supported by Hoogle",
          "hierarchy": "Hoogle",
          "module": "Hoogle",
          "name": "Language",
          "package": "hoogle",
          "partial": "Language",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hoogle/docs/Hoogle.html#t:Language"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData type representing a parse error. All indecies are 1-based.\n\u003c/p\u003e",
          "module": "Hoogle",
          "name": "ParseError",
          "package": "hoogle",
          "source": "src/Hoogle-Type-ParseError.html#ParseError",
          "type": "data"
        },
        "index": {
          "description": "Data type representing parse error All indecies are based",
          "hierarchy": "Hoogle",
          "module": "Hoogle",
          "name": "ParseError",
          "package": "hoogle",
          "partial": "Parse Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hoogle/docs/Hoogle.html#t:ParseError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA query, representing a user input.\n\u003c/p\u003e",
          "module": "Hoogle",
          "name": "Query",
          "package": "hoogle",
          "source": "src/Hoogle-Query-Type.html#Query",
          "type": "data"
        },
        "index": {
          "description": "query representing user input",
          "hierarchy": "Hoogle",
          "module": "Hoogle",
          "name": "Query",
          "package": "hoogle",
          "partial": "Query",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hoogle/docs/Hoogle.html#t:Query"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoogle",
          "name": "Result",
          "package": "hoogle",
          "source": "src/Hoogle.html#Result",
          "type": "data"
        },
        "index": {
          "hierarchy": "Hoogle",
          "module": "Hoogle",
          "name": "Result",
          "package": "hoogle",
          "partial": "Result",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hoogle/docs/Hoogle.html#t:Result"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA score, representing how close a match is. Lower scores are better.\n\u003c/p\u003e",
          "module": "Hoogle",
          "name": "Score",
          "package": "hoogle",
          "source": "src/Hoogle-Score-Type.html#Score",
          "type": "data"
        },
        "index": {
          "description": "score representing how close match is Lower scores are better",
          "hierarchy": "Hoogle",
          "module": "Hoogle",
          "name": "Score",
          "package": "hoogle",
          "partial": "Score",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hoogle/docs/Hoogle.html#t:Score"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoogle",
          "name": "TagStr",
          "package": "hoogle",
          "source": "src/Hoogle-Type-TagStr.html#TagStr",
          "type": "data"
        },
        "index": {
          "hierarchy": "Hoogle",
          "module": "Hoogle",
          "name": "TagStr",
          "package": "hoogle",
          "partial": "Tag Str",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hoogle/docs/Hoogle.html#t:TagStr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA URL, or internet address. These addresses will usually start with either\n   \u003ccode\u003ehttp://\u003c/code\u003e or \u003ccode\u003efile://\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Hoogle",
          "name": "URL",
          "package": "hoogle",
          "source": "src/General-Base.html#URL",
          "type": "type"
        },
        "index": {
          "description": "URL or internet address These addresses will usually start with either http or file",
          "hierarchy": "Hoogle",
          "module": "Hoogle",
          "name": "URL",
          "package": "hoogle",
          "partial": "URL",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hoogle/docs/Hoogle.html#t:URL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoogle",
          "name": "ClassItem",
          "package": "hoogle",
          "signature": "ClassItem",
          "source": "src/Hoogle-Type-Item.html#ItemKind",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoogle",
          "module": "Hoogle",
          "name": "ClassItem",
          "package": "hoogle",
          "partial": "Class Item",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoogle/docs/Hoogle.html#v:ClassItem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoogle",
          "name": "DataCtorItem",
          "package": "hoogle",
          "signature": "DataCtorItem",
          "source": "src/Hoogle-Type-Item.html#ItemKind",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoogle",
          "module": "Hoogle",
          "name": "DataCtorItem",
          "package": "hoogle",
          "partial": "Data Ctor Item",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoogle/docs/Hoogle.html#v:DataCtorItem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoogle",
          "name": "FunctionItem",
          "package": "hoogle",
          "signature": "FunctionItem",
          "source": "src/Hoogle-Type-Item.html#ItemKind",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoogle",
          "module": "Hoogle",
          "name": "FunctionItem",
          "package": "hoogle",
          "partial": "Function Item",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoogle/docs/Hoogle.html#v:FunctionItem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Haskell language (\u003ca\u003ehttp://haskell.org/\u003c/a\u003e), along with many GHC specific extensions.\n\u003c/p\u003e",
          "module": "Hoogle",
          "name": "Haskell",
          "package": "hoogle",
          "signature": "Haskell",
          "source": "src/Hoogle-Type-Language.html#Language",
          "type": "function"
        },
        "index": {
          "description": "The Haskell language http haskell.org along with many GHC specific extensions",
          "hierarchy": "Hoogle",
          "module": "Hoogle",
          "name": "Haskell",
          "package": "hoogle",
          "partial": "Haskell",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoogle/docs/Hoogle.html#v:Haskell"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoogle",
          "name": "InstanceItem",
          "package": "hoogle",
          "signature": "InstanceItem",
          "source": "src/Hoogle-Type-Item.html#ItemKind",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoogle",
          "module": "Hoogle",
          "name": "InstanceItem",
          "package": "hoogle",
          "partial": "Instance Item",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoogle/docs/Hoogle.html#v:InstanceItem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoogle",
          "name": "ModuleItem",
          "package": "hoogle",
          "signature": "ModuleItem",
          "source": "src/Hoogle-Type-Item.html#ItemKind",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoogle",
          "module": "Hoogle",
          "name": "ModuleItem",
          "package": "hoogle",
          "partial": "Module Item",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoogle/docs/Hoogle.html#v:ModuleItem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoogle",
          "name": "PackageItem",
          "package": "hoogle",
          "signature": "PackageItem",
          "source": "src/Hoogle-Type-Item.html#ItemKind",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoogle",
          "module": "Hoogle",
          "name": "PackageItem",
          "package": "hoogle",
          "partial": "Package Item",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoogle/docs/Hoogle.html#v:PackageItem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoogle",
          "name": "ParseError",
          "package": "hoogle",
          "signature": "ParseError",
          "source": "src/Hoogle-Type-ParseError.html#ParseError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoogle",
          "module": "Hoogle",
          "name": "ParseError",
          "package": "hoogle",
          "partial": "Parse Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoogle/docs/Hoogle.html#v:ParseError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoogle",
          "name": "Result",
          "package": "hoogle",
          "signature": "Result",
          "source": "src/Hoogle.html#Result",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoogle",
          "module": "Hoogle",
          "name": "Result",
          "package": "hoogle",
          "partial": "Result",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoogle/docs/Hoogle.html#v:Result"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePlain text.\n\u003c/p\u003e",
          "module": "Hoogle",
          "name": "Str",
          "package": "hoogle",
          "signature": "Str String",
          "source": "src/Hoogle-Type-TagStr.html#TagStr",
          "type": "function"
        },
        "index": {
          "description": "Plain text",
          "hierarchy": "Hoogle",
          "module": "Hoogle",
          "name": "Str",
          "package": "hoogle",
          "partial": "Str",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoogle/docs/Hoogle.html#v:Str"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBold text.\n\u003c/p\u003e",
          "module": "Hoogle",
          "name": "TagBold",
          "package": "hoogle",
          "signature": "TagBold TagStr",
          "source": "src/Hoogle-Type-TagStr.html#TagStr",
          "type": "function"
        },
        "index": {
          "description": "Bold text",
          "hierarchy": "Hoogle",
          "module": "Hoogle",
          "name": "TagBold",
          "package": "hoogle",
          "partial": "Tag Bold",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoogle/docs/Hoogle.html#v:TagBold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eColored text. Index into a 0-based palette. Text without any \u003ccode\u003e\u003ca\u003eTagColor\u003c/a\u003e\u003c/code\u003e should be black.\n\u003c/p\u003e",
          "module": "Hoogle",
          "name": "TagColor",
          "package": "hoogle",
          "signature": "TagColor Int TagStr",
          "source": "src/Hoogle-Type-TagStr.html#TagStr",
          "type": "function"
        },
        "index": {
          "description": "Colored text Index into based palette Text without any TagColor should be black",
          "hierarchy": "Hoogle",
          "module": "Hoogle",
          "name": "TagColor",
          "package": "hoogle",
          "partial": "Tag Color",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoogle/docs/Hoogle.html#v:TagColor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnderlined/italic text.\n\u003c/p\u003e",
          "module": "Hoogle",
          "name": "TagEmph",
          "package": "hoogle",
          "signature": "TagEmph TagStr",
          "source": "src/Hoogle-Type-TagStr.html#TagStr",
          "type": "function"
        },
        "index": {
          "description": "Underlined italic text",
          "hierarchy": "Hoogle",
          "module": "Hoogle",
          "name": "TagEmph",
          "package": "hoogle",
          "partial": "Tag Emph",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoogle/docs/Hoogle.html#v:TagEmph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA hyperlink to a URL.\n\u003c/p\u003e",
          "module": "Hoogle",
          "name": "TagLink",
          "package": "hoogle",
          "signature": "TagLink String TagStr",
          "source": "src/Hoogle-Type-TagStr.html#TagStr",
          "type": "function"
        },
        "index": {
          "description": "hyperlink to URL",
          "hierarchy": "Hoogle",
          "module": "Hoogle",
          "name": "TagLink",
          "package": "hoogle",
          "partial": "Tag Link",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoogle/docs/Hoogle.html#v:TagLink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA list of tags one after another.\n\u003c/p\u003e",
          "module": "Hoogle",
          "name": "Tags",
          "package": "hoogle",
          "signature": "Tags [TagStr]",
          "source": "src/Hoogle-Type-TagStr.html#TagStr",
          "type": "function"
        },
        "index": {
          "description": "list of tags one after another",
          "hierarchy": "Hoogle",
          "module": "Hoogle",
          "name": "Tags",
          "normalized": "Tags[TagStr]",
          "package": "hoogle",
          "partial": "Tags",
          "signature": "Tags[TagStr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoogle/docs/Hoogle.html#v:Tags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoogle",
          "name": "TypeCtorItem",
          "package": "hoogle",
          "signature": "TypeCtorItem",
          "source": "src/Hoogle-Type-Item.html#ItemKind",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoogle",
          "module": "Hoogle",
          "name": "TypeCtorItem",
          "package": "hoogle",
          "partial": "Type Ctor Item",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoogle/docs/Hoogle.html#v:TypeCtorItem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoogle",
          "name": "TypeSynonymItem",
          "package": "hoogle",
          "signature": "TypeSynonymItem",
          "source": "src/Hoogle-Type-Item.html#ItemKind",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoogle",
          "module": "Hoogle",
          "name": "TypeSynonymItem",
          "package": "hoogle",
          "partial": "Type Synonym Item",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoogle/docs/Hoogle.html#v:TypeSynonymItem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoogle",
          "name": "UnclassifiedItem",
          "package": "hoogle",
          "signature": "UnclassifiedItem",
          "source": "src/Hoogle-Type-Item.html#ItemKind",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoogle",
          "module": "Hoogle",
          "name": "UnclassifiedItem",
          "package": "hoogle",
          "partial": "Unclassified Item",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoogle/docs/Hoogle.html#v:UnclassifiedItem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eColumn number on which the error occured, 1 for the first character of a line.\n\u003c/p\u003e",
          "module": "Hoogle",
          "name": "columnNo",
          "package": "hoogle",
          "signature": "Int",
          "source": "src/Hoogle-Type-ParseError.html#ParseError",
          "type": "function"
        },
        "index": {
          "description": "Column number on which the error occured for the first character of line",
          "hierarchy": "Hoogle",
          "module": "Hoogle",
          "name": "columnNo",
          "package": "hoogle",
          "partial": "No",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoogle/docs/Hoogle.html#v:columnNo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a query string and a database return a list of the possible completions for the search.\n\u003c/p\u003e",
          "module": "Hoogle",
          "name": "completions",
          "package": "hoogle",
          "signature": "Database -\u003e String -\u003e [String]",
          "source": "src/Hoogle.html#completions",
          "type": "function"
        },
        "index": {
          "description": "Given query string and database return list of the possible completions for the search",
          "hierarchy": "Hoogle",
          "module": "Hoogle",
          "name": "completions",
          "normalized": "Database-\u003eString-\u003e[String]",
          "package": "hoogle",
          "signature": "Database-\u003eString-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoogle/docs/Hoogle.html#v:completions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a database from an input definition. Source files for Hoogle databases are usually\n   stored in UTF8 format, and should be read using \u003ccode\u003e\u003ca\u003ehSetEncoding\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eutf8\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Hoogle",
          "name": "createDatabase",
          "package": "hoogle",
          "signature": "HackageURL-\u003e Language-\u003e [Database]-\u003e String-\u003e FilePath-\u003e IO [ParseError]",
          "type": "function"
        },
        "index": {
          "description": "Create database from an input definition Source files for Hoogle databases are usually stored in UTF8 format and should be read using hSetEncoding and utf8",
          "hierarchy": "Hoogle",
          "module": "Hoogle",
          "name": "createDatabase",
          "normalized": "HackageURL-\u003eLanguage-\u003e[Database]-\u003eString-\u003eFilePath-\u003eIO[ParseError]",
          "package": "hoogle",
          "partial": "Database",
          "signature": "HackageURL-\u003eLanguage-\u003e[Database]-\u003eString-\u003eFilePath-\u003eIO[ParseError]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoogle/docs/Hoogle.html#v:createDatabase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDocumentation for the entry\n\u003c/p\u003e",
          "module": "Hoogle",
          "name": "docs",
          "package": "hoogle",
          "signature": "TagStr",
          "source": "src/Hoogle.html#Result",
          "type": "function"
        },
        "index": {
          "description": "Documentation for the entry",
          "hierarchy": "Hoogle",
          "module": "Hoogle",
          "name": "docs",
          "package": "hoogle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoogle/docs/Hoogle.html#v:docs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eError message caused by the parse error.\n\u003c/p\u003e",
          "module": "Hoogle",
          "name": "errorMessage",
          "package": "hoogle",
          "signature": "String",
          "source": "src/Hoogle-Type-ParseError.html#ParseError",
          "type": "function"
        },
        "index": {
          "description": "Error message caused by the parse error",
          "hierarchy": "Hoogle",
          "module": "Hoogle",
          "name": "errorMessage",
          "package": "hoogle",
          "partial": "Message",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoogle/docs/Hoogle.html#v:errorMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLine number on which the error occured, 1 for the first line of a file.\n\u003c/p\u003e",
          "module": "Hoogle",
          "name": "lineNo",
          "package": "hoogle",
          "signature": "Int",
          "source": "src/Hoogle-Type-ParseError.html#ParseError",
          "type": "function"
        },
        "index": {
          "description": "Line number on which the error occured for the first line of file",
          "hierarchy": "Hoogle",
          "module": "Hoogle",
          "name": "lineNo",
          "package": "hoogle",
          "partial": "No",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoogle/docs/Hoogle.html#v:lineNo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLoad a database from a file. If the database was not saved with the same version of Hoogle,\n   it will probably throw an error.\n\u003c/p\u003e",
          "module": "Hoogle",
          "name": "loadDatabase",
          "package": "hoogle",
          "signature": "FilePath -\u003e IO Database",
          "source": "src/Hoogle.html#loadDatabase",
          "type": "function"
        },
        "index": {
          "description": "Load database from file If the database was not saved with the same version of Hoogle it will probably throw an error",
          "hierarchy": "Hoogle",
          "module": "Hoogle",
          "name": "loadDatabase",
          "normalized": "FilePath-\u003eIO Database",
          "package": "hoogle",
          "partial": "Database",
          "signature": "FilePath-\u003eIO Database",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoogle/docs/Hoogle.html#v:loadDatabase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoogle",
          "name": "locations",
          "package": "hoogle",
          "signature": "[(URL, [(URL, String)])]",
          "source": "src/Hoogle.html#Result",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoogle",
          "module": "Hoogle",
          "name": "locations",
          "normalized": "[(URL,[(URL,String)])]",
          "package": "hoogle",
          "signature": "[(URL,[(URL,String)])]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoogle/docs/Hoogle.html#v:locations"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoogle",
          "name": "mergeDatabase",
          "package": "hoogle",
          "signature": "[FilePath] -\u003e FilePath -\u003e IO ()",
          "source": "src/Hoogle.html#mergeDatabase",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoogle",
          "module": "Hoogle",
          "name": "mergeDatabase",
          "normalized": "[FilePath]-\u003eFilePath-\u003eIO()",
          "package": "hoogle",
          "partial": "Database",
          "signature": "[FilePath]-\u003eFilePath-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoogle/docs/Hoogle.html#v:mergeDatabase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInput string which caused the error - sometimes with a \u003ccode\u003e\u003ca\u003eTagEmph\u003c/a\u003e\u003c/code\u003e to indicate which part was incorrect.\n\u003c/p\u003e",
          "module": "Hoogle",
          "name": "parseInput",
          "package": "hoogle",
          "signature": "TagStr",
          "source": "src/Hoogle-Type-ParseError.html#ParseError",
          "type": "function"
        },
        "index": {
          "description": "Input string which caused the error sometimes with TagEmph to indicate which part was incorrect",
          "hierarchy": "Hoogle",
          "module": "Hoogle",
          "name": "parseInput",
          "package": "hoogle",
          "partial": "Input",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoogle/docs/Hoogle.html#v:parseInput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a query for a given language, returning either a parse error, or a query.\n\u003c/p\u003e",
          "module": "Hoogle",
          "name": "parseQuery",
          "package": "hoogle",
          "signature": "Language -\u003e String -\u003e Either ParseError Query",
          "source": "src/Hoogle.html#parseQuery",
          "type": "function"
        },
        "index": {
          "description": "Parse query for given language returning either parse error or query",
          "hierarchy": "Hoogle",
          "module": "Hoogle",
          "name": "parseQuery",
          "normalized": "Language-\u003eString-\u003eEither ParseError Query",
          "package": "hoogle",
          "partial": "Query",
          "signature": "Language-\u003eString-\u003eEither ParseError Query",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoogle/docs/Hoogle.html#v:parseQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a query, return the list of packages that should be searched. Each package will be\n   the name of a database, without any file path or extension included.\n\u003c/p\u003e",
          "module": "Hoogle",
          "name": "queryDatabases",
          "package": "hoogle",
          "signature": "Query -\u003e [String]",
          "source": "src/Hoogle-Query-Type.html#queryDatabases",
          "type": "function"
        },
        "index": {
          "description": "Given query return the list of packages that should be searched Each package will be the name of database without any file path or extension included",
          "hierarchy": "Hoogle",
          "module": "Hoogle",
          "name": "queryDatabases",
          "normalized": "Query-\u003e[String]",
          "package": "hoogle",
          "partial": "Databases",
          "signature": "Query-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoogle/docs/Hoogle.html#v:queryDatabases"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a query, set whether it is an exact query.\n\u003c/p\u003e",
          "module": "Hoogle",
          "name": "queryExact",
          "package": "hoogle",
          "signature": "Maybe ItemKind -\u003e Query -\u003e Query",
          "source": "src/Hoogle.html#queryExact",
          "type": "function"
        },
        "index": {
          "description": "Given query set whether it is an exact query",
          "hierarchy": "Hoogle",
          "module": "Hoogle",
          "name": "queryExact",
          "normalized": "Maybe ItemKind-\u003eQuery-\u003eQuery",
          "package": "hoogle",
          "partial": "Exact",
          "signature": "Maybe ItemKind-\u003eQuery-\u003eQuery",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoogle/docs/Hoogle.html#v:queryExact"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn those packages which are explicitly excluded (paired with \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e)\n   or included (paired with \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e) in the query.\n\u003c/p\u003e",
          "module": "Hoogle",
          "name": "queryPackages",
          "package": "hoogle",
          "signature": "Query -\u003e [(Bool, String)]",
          "source": "src/Hoogle-Query-Type.html#queryPackages",
          "type": "function"
        },
        "index": {
          "description": "Return those packages which are explicitly excluded paired with False or included paired with True in the query",
          "hierarchy": "Hoogle",
          "module": "Hoogle",
          "name": "queryPackages",
          "normalized": "Query-\u003e[(Bool,String)]",
          "package": "hoogle",
          "partial": "Packages",
          "signature": "Query-\u003e[(Bool,String)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoogle/docs/Hoogle.html#v:queryPackages"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the state of a package within a query. \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e means delete the package,\n   \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e for add it, and \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e for remove it.\n\u003c/p\u003e",
          "module": "Hoogle",
          "name": "querySetPackage",
          "package": "hoogle",
          "signature": "Maybe Bool -\u003e String -\u003e Query -\u003e Query",
          "source": "src/Hoogle-Query-Type.html#querySetPackage",
          "type": "function"
        },
        "index": {
          "description": "Set the state of package within query Nothing means delete the package Just True for add it and Just False for remove it",
          "hierarchy": "Hoogle",
          "module": "Hoogle",
          "name": "querySetPackage",
          "normalized": "Maybe Bool-\u003eString-\u003eQuery-\u003eQuery",
          "package": "hoogle",
          "partial": "Set Package",
          "signature": "Maybe Bool-\u003eString-\u003eQuery-\u003eQuery",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoogle/docs/Hoogle.html#v:querySetPackage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRender a query, in particular using \u003ccode\u003e\u003ca\u003eTagColor\u003c/a\u003e\u003c/code\u003e for any type signature argument positions.\n\u003c/p\u003e",
          "module": "Hoogle",
          "name": "renderQuery",
          "package": "hoogle",
          "signature": "Query -\u003e TagStr",
          "source": "src/Hoogle-Query-Render.html#renderQuery",
          "type": "function"
        },
        "index": {
          "description": "Render query in particular using TagColor for any type signature argument positions",
          "hierarchy": "Hoogle",
          "module": "Hoogle",
          "name": "renderQuery",
          "normalized": "Query-\u003eTagStr",
          "package": "hoogle",
          "partial": "Query",
          "signature": "Query-\u003eTagStr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoogle/docs/Hoogle.html#v:renderQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSave a database to a file.\n\u003c/p\u003e",
          "module": "Hoogle",
          "name": "saveDatabase",
          "package": "hoogle",
          "signature": "FilePath -\u003e Database -\u003e IO ()",
          "source": "src/Hoogle.html#saveDatabase",
          "type": "function"
        },
        "index": {
          "description": "Save database to file",
          "hierarchy": "Hoogle",
          "module": "Hoogle",
          "name": "saveDatabase",
          "normalized": "FilePath-\u003eDatabase-\u003eIO()",
          "package": "hoogle",
          "partial": "Database",
          "signature": "FilePath-\u003eDatabase-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoogle/docs/Hoogle.html#v:saveDatabase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a set of scores, where the first is lower than the second, returns details for how to rank scores.\n   This function is in the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad since it may require randomness, and it may output status messages while solving,\n   particularly if in Verbose mode.\n\u003c/p\u003e",
          "module": "Hoogle",
          "name": "scoring",
          "package": "hoogle",
          "signature": "[(Score, Score)] -\u003e IO String",
          "source": "src/Hoogle-Score-Scoring.html#scoring",
          "type": "function"
        },
        "index": {
          "description": "Given set of scores where the first is lower than the second returns details for how to rank scores This function is in the IO monad since it may require randomness and it may output status messages while solving particularly if in Verbose mode",
          "hierarchy": "Hoogle",
          "module": "Hoogle",
          "name": "scoring",
          "normalized": "[(Score,Score)]-\u003eIO String",
          "package": "hoogle",
          "signature": "[(Score,Score)]-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoogle/docs/Hoogle.html#v:scoring"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerform a search. The results are returned lazily.\n\u003c/p\u003e",
          "module": "Hoogle",
          "name": "search",
          "package": "hoogle",
          "signature": "Database -\u003e Query -\u003e [(Score, Result)]",
          "source": "src/Hoogle.html#search",
          "type": "function"
        },
        "index": {
          "description": "Perform search The results are returned lazily",
          "hierarchy": "Hoogle",
          "module": "Hoogle",
          "name": "search",
          "normalized": "Database-\u003eQuery-\u003e[(Score,Result)]",
          "package": "hoogle",
          "signature": "Database-\u003eQuery-\u003e[(Score,Result)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoogle/docs/Hoogle.html#v:search"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRendered view for the entry, including name\u003cem\u003ekeywords\u003c/em\u003etype as appropriate, colors matching \u003ccode\u003erenderQuery\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Hoogle",
          "name": "self",
          "package": "hoogle",
          "signature": "TagStr",
          "source": "src/Hoogle.html#Result",
          "type": "function"
        },
        "index": {
          "description": "Rendered view for the entry including name keywords type as appropriate colors matching renderQuery",
          "hierarchy": "Hoogle",
          "module": "Hoogle",
          "name": "self",
          "package": "hoogle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoogle/docs/Hoogle.html#v:self"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShow debugging information on some parts of the database. If the second argument\n   is \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e the whole database will be shown. Otherwise, the listed parts will be shown.\n\u003c/p\u003e",
          "module": "Hoogle",
          "name": "showDatabase",
          "package": "hoogle",
          "signature": "Database -\u003e Maybe [String] -\u003e String",
          "source": "src/Hoogle.html#showDatabase",
          "type": "function"
        },
        "index": {
          "description": "Show debugging information on some parts of the database If the second argument is Nothing the whole database will be shown Otherwise the listed parts will be shown",
          "hierarchy": "Hoogle",
          "module": "Hoogle",
          "name": "showDatabase",
          "normalized": "Database-\u003eMaybe[String]-\u003eString",
          "package": "hoogle",
          "partial": "Database",
          "signature": "Database-\u003eMaybe[String]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoogle/docs/Hoogle.html#v:showDatabase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShow a \u003ccode\u003e\u003ca\u003eTagStr\u003c/a\u003e\u003c/code\u003e on a console with ANSI escape sequences.\n\u003c/p\u003e",
          "module": "Hoogle",
          "name": "showTagANSI",
          "package": "hoogle",
          "signature": "TagStr -\u003e String",
          "source": "src/Hoogle-Type-TagStr.html#showTagANSI",
          "type": "function"
        },
        "index": {
          "description": "Show TagStr on console with ANSI escape sequences",
          "hierarchy": "Hoogle",
          "module": "Hoogle",
          "name": "showTagANSI",
          "normalized": "TagStr-\u003eString",
          "package": "hoogle",
          "partial": "Tag ANSI",
          "signature": "TagStr-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoogle/docs/Hoogle.html#v:showTagANSI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShow a \u003ccode\u003e\u003ca\u003eTagStr\u003c/a\u003e\u003c/code\u003e as HTML, using CSS classes for color styling.\n\u003c/p\u003e",
          "module": "Hoogle",
          "name": "showTagHTML",
          "package": "hoogle",
          "signature": "TagStr -\u003e String",
          "source": "src/Hoogle-Type-TagStr.html#showTagHTML",
          "type": "function"
        },
        "index": {
          "description": "Show TagStr as HTML using CSS classes for color styling",
          "hierarchy": "Hoogle",
          "module": "Hoogle",
          "name": "showTagHTML",
          "normalized": "TagStr-\u003eString",
          "package": "hoogle",
          "partial": "Tag HTML",
          "signature": "TagStr-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoogle/docs/Hoogle.html#v:showTagHTML"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShow TagStr with an override for specific tags.\n\u003c/p\u003e",
          "module": "Hoogle",
          "name": "showTagHTMLWith",
          "package": "hoogle",
          "signature": "(TagStr -\u003e Maybe String) -\u003e TagStr -\u003e String",
          "source": "src/Hoogle-Type-TagStr.html#showTagHTMLWith",
          "type": "function"
        },
        "index": {
          "description": "Show TagStr with an override for specific tags",
          "hierarchy": "Hoogle",
          "module": "Hoogle",
          "name": "showTagHTMLWith",
          "normalized": "(TagStr-\u003eMaybe String)-\u003eTagStr-\u003eString",
          "package": "hoogle",
          "partial": "Tag HTMLWith",
          "signature": "(TagStr-\u003eMaybe String)-\u003eTagStr-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoogle/docs/Hoogle.html#v:showTagHTMLWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShow a \u003ccode\u003e\u003ca\u003eTagStr\u003c/a\u003e\u003c/code\u003e as a string, without any formatting.\n\u003c/p\u003e",
          "module": "Hoogle",
          "name": "showTagText",
          "package": "hoogle",
          "signature": "TagStr -\u003e String",
          "source": "src/Hoogle-Type-TagStr.html#showTagText",
          "type": "function"
        },
        "index": {
          "description": "Show TagStr as string without any formatting",
          "hierarchy": "Hoogle",
          "module": "Hoogle",
          "name": "showTagText",
          "normalized": "TagStr-\u003eString",
          "package": "hoogle",
          "partial": "Tag Text",
          "signature": "TagStr-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoogle/docs/Hoogle.html#v:showTagText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a query and a database optionally give a list of what the user might have meant.\n\u003c/p\u003e",
          "module": "Hoogle",
          "name": "suggestions",
          "package": "hoogle",
          "signature": "Database -\u003e Query -\u003e Maybe TagStr",
          "source": "src/Hoogle.html#suggestions",
          "type": "function"
        },
        "index": {
          "description": "Given query and database optionally give list of what the user might have meant",
          "hierarchy": "Hoogle",
          "module": "Hoogle",
          "name": "suggestions",
          "normalized": "Database-\u003eQuery-\u003eMaybe TagStr",
          "package": "hoogle",
          "signature": "Database-\u003eQuery-\u003eMaybe TagStr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoogle/docs/Hoogle.html#v:suggestions"
      }
    }
  ]
]