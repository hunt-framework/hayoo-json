[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoogle/docs/Hoogle.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe Hoogle API. To perform a search you call \u003ccode\u003e\u003ca\u003esearch\u003c/a\u003e\u003c/code\u003e with a \u003ccode\u003e\u003ca\u003eDatabase\u003c/a\u003e\u003c/code\u003e (obtained by \u003ccode\u003e\u003ca\u003eloadDatabase\u003c/a\u003e\u003c/code\u003e) and a\n   \u003ccode\u003e\u003ca\u003eQuery\u003c/a\u003e\u003c/code\u003e (obtained by \u003ccode\u003e\u003ca\u003eparseQuery\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Hoogle",
        "fct-package": "hoogle",
        "fct-signature": "module",
        "fct-source": "src/Hoogle.html",
        "fct-type": "module",
        "title": "Hoogle"
      },
      "index": {
        "description": "The Hoogle API To perform search you call search with Database obtained by loadDatabase and Query obtained by parseQuery",
        "hierarchy": "Hoogle",
        "module": "Hoogle",
        "name": "Hoogle",
        "normalized": "",
        "package": "hoogle",
        "partial": "Hoogle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoogle/docs/Hoogle.html#t:Database",
      "description": {
        "fct-descr": "\u003cp\u003eA Hoogle database, containing a set of functions/items which can be searched. The \u003ccode\u003e\u003ca\u003eDatabase\u003c/a\u003e\u003c/code\u003e type is used\n   for a variety of purposes:\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003eCreation\u003c/dt\u003e\u003cdd\u003e A database is created by merging existing databases with the \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e instance and \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e,\n   or by creating a new \u003ccode\u003e\u003ca\u003eDatabase\u003c/a\u003e\u003c/code\u003e from an input file with \u003ccode\u003e\u003ca\u003ecreateDatabase\u003c/a\u003e\u003c/code\u003e.\n\u003c/dd\u003e\u003cdt\u003eSerialization\u003c/dt\u003e\u003cdd\u003e A database is saved to disk with \u003ccode\u003e\u003ca\u003esaveDatabase\u003c/a\u003e\u003c/code\u003e and loaded from disk with \u003ccode\u003e\u003ca\u003eloadDatabase\u003c/a\u003e\u003c/code\u003e.\n\u003c/dd\u003e\u003cdt\u003eSearching\u003c/dt\u003e\u003cdd\u003e A database is searched using \u003ccode\u003e\u003ca\u003esearch\u003c/a\u003e\u003c/code\u003e.\n\u003c/dd\u003e\u003c/dl\u003e",
        "fct-module": "Hoogle",
        "fct-package": "hoogle",
        "fct-signature": "data",
        "fct-source": "src/Hoogle.html#Database",
        "fct-type": "data",
        "title": "Database"
      },
      "index": {
        "description": "Hoogle database containing set of functions items which can be searched The Database type is used for variety of purposes Creation database is created by merging existing databases with the Monoid instance and mappend or by creating new Database from an input file with createDatabase Serialization database is saved to disk with saveDatabase and loaded from disk with loadDatabase Searching database is searched using search",
        "hierarchy": "Hoogle",
        "module": "Hoogle",
        "name": "Database",
        "normalized": "",
        "package": "hoogle",
        "partial": "Database",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoogle/docs/Hoogle.html#t:ItemKind",
      "description": {
        "fct-module": "Hoogle",
        "fct-package": "hoogle",
        "fct-signature": "data",
        "fct-source": "src/Hoogle-Type-Item.html#ItemKind",
        "fct-type": "data",
        "title": "ItemKind"
      },
      "index": {
        "description": "",
        "hierarchy": "Hoogle",
        "module": "Hoogle",
        "name": "ItemKind",
        "normalized": "",
        "package": "hoogle",
        "partial": "Item Kind",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoogle/docs/Hoogle.html#t:Language",
      "description": {
        "fct-descr": "\u003cp\u003eThe languages supported by Hoogle.\n\u003c/p\u003e",
        "fct-module": "Hoogle",
        "fct-package": "hoogle",
        "fct-signature": "data",
        "fct-source": "src/Hoogle-Type-Language.html#Language",
        "fct-type": "data",
        "title": "Language"
      },
      "index": {
        "description": "The languages supported by Hoogle",
        "hierarchy": "Hoogle",
        "module": "Hoogle",
        "name": "Language",
        "normalized": "",
        "package": "hoogle",
        "partial": "Language",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoogle/docs/Hoogle.html#t:ParseError",
      "description": {
        "fct-descr": "\u003cp\u003eData type representing a parse error. All indecies are 1-based.\n\u003c/p\u003e",
        "fct-module": "Hoogle",
        "fct-package": "hoogle",
        "fct-signature": "data",
        "fct-source": "src/Hoogle-Type-ParseError.html#ParseError",
        "fct-type": "data",
        "title": "ParseError"
      },
      "index": {
        "description": "Data type representing parse error All indecies are based",
        "hierarchy": "Hoogle",
        "module": "Hoogle",
        "name": "ParseError",
        "normalized": "",
        "package": "hoogle",
        "partial": "Parse Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoogle/docs/Hoogle.html#t:Query",
      "description": {
        "fct-descr": "\u003cp\u003eA query, representing a user input.\n\u003c/p\u003e",
        "fct-module": "Hoogle",
        "fct-package": "hoogle",
        "fct-signature": "data",
        "fct-source": "src/Hoogle-Query-Type.html#Query",
        "fct-type": "data",
        "title": "Query"
      },
      "index": {
        "description": "query representing user input",
        "hierarchy": "Hoogle",
        "module": "Hoogle",
        "name": "Query",
        "normalized": "",
        "package": "hoogle",
        "partial": "Query",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoogle/docs/Hoogle.html#t:Result",
      "description": {
        "fct-module": "Hoogle",
        "fct-package": "hoogle",
        "fct-signature": "data",
        "fct-source": "src/Hoogle.html#Result",
        "fct-type": "data",
        "title": "Result"
      },
      "index": {
        "description": "",
        "hierarchy": "Hoogle",
        "module": "Hoogle",
        "name": "Result",
        "normalized": "",
        "package": "hoogle",
        "partial": "Result",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoogle/docs/Hoogle.html#t:Score",
      "description": {
        "fct-descr": "\u003cp\u003eA score, representing how close a match is. Lower scores are better.\n\u003c/p\u003e",
        "fct-module": "Hoogle",
        "fct-package": "hoogle",
        "fct-signature": "data",
        "fct-source": "src/Hoogle-Score-Type.html#Score",
        "fct-type": "data",
        "title": "Score"
      },
      "index": {
        "description": "score representing how close match is Lower scores are better",
        "hierarchy": "Hoogle",
        "module": "Hoogle",
        "name": "Score",
        "normalized": "",
        "package": "hoogle",
        "partial": "Score",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoogle/docs/Hoogle.html#t:TagStr",
      "description": {
        "fct-module": "Hoogle",
        "fct-package": "hoogle",
        "fct-signature": "data",
        "fct-source": "src/Hoogle-Type-TagStr.html#TagStr",
        "fct-type": "data",
        "title": "TagStr"
      },
      "index": {
        "description": "",
        "hierarchy": "Hoogle",
        "module": "Hoogle",
        "name": "TagStr",
        "normalized": "",
        "package": "hoogle",
        "partial": "Tag Str",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoogle/docs/Hoogle.html#t:URL",
      "description": {
        "fct-descr": "\u003cp\u003eA URL, or internet address. These addresses will usually start with either\n   \u003ccode\u003ehttp://\u003c/code\u003e or \u003ccode\u003efile://\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Hoogle",
        "fct-package": "hoogle",
        "fct-signature": "type",
        "fct-source": "src/General-Base.html#URL",
        "fct-type": "type",
        "title": "URL"
      },
      "index": {
        "description": "URL or internet address These addresses will usually start with either http or file",
        "hierarchy": "Hoogle",
        "module": "Hoogle",
        "name": "URL",
        "normalized": "",
        "package": "hoogle",
        "partial": "URL",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoogle/docs/Hoogle.html#v:ClassItem",
      "description": {
        "fct-module": "Hoogle",
        "fct-package": "hoogle",
        "fct-signature": "ClassItem",
        "fct-source": "src/Hoogle-Type-Item.html#ItemKind",
        "fct-type": "function",
        "title": "ClassItem"
      },
      "index": {
        "description": "",
        "hierarchy": "Hoogle",
        "module": "Hoogle",
        "name": "ClassItem",
        "normalized": "",
        "package": "hoogle",
        "partial": "Class Item",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoogle/docs/Hoogle.html#v:DataCtorItem",
      "description": {
        "fct-module": "Hoogle",
        "fct-package": "hoogle",
        "fct-signature": "DataCtorItem",
        "fct-source": "src/Hoogle-Type-Item.html#ItemKind",
        "fct-type": "function",
        "title": "DataCtorItem"
      },
      "index": {
        "description": "",
        "hierarchy": "Hoogle",
        "module": "Hoogle",
        "name": "DataCtorItem",
        "normalized": "",
        "package": "hoogle",
        "partial": "Data Ctor Item",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoogle/docs/Hoogle.html#v:FunctionItem",
      "description": {
        "fct-module": "Hoogle",
        "fct-package": "hoogle",
        "fct-signature": "FunctionItem",
        "fct-source": "src/Hoogle-Type-Item.html#ItemKind",
        "fct-type": "function",
        "title": "FunctionItem"
      },
      "index": {
        "description": "",
        "hierarchy": "Hoogle",
        "module": "Hoogle",
        "name": "FunctionItem",
        "normalized": "",
        "package": "hoogle",
        "partial": "Function Item",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoogle/docs/Hoogle.html#v:Haskell",
      "description": {
        "fct-descr": "\u003cp\u003eThe Haskell language (\u003ca\u003ehttp://haskell.org/\u003c/a\u003e), along with many GHC specific extensions.\n\u003c/p\u003e",
        "fct-module": "Hoogle",
        "fct-package": "hoogle",
        "fct-signature": "Haskell",
        "fct-source": "src/Hoogle-Type-Language.html#Language",
        "fct-type": "function",
        "title": "Haskell"
      },
      "index": {
        "description": "The Haskell language http haskell.org along with many GHC specific extensions",
        "hierarchy": "Hoogle",
        "module": "Hoogle",
        "name": "Haskell",
        "normalized": "",
        "package": "hoogle",
        "partial": "Haskell",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoogle/docs/Hoogle.html#v:InstanceItem",
      "description": {
        "fct-module": "Hoogle",
        "fct-package": "hoogle",
        "fct-signature": "InstanceItem",
        "fct-source": "src/Hoogle-Type-Item.html#ItemKind",
        "fct-type": "function",
        "title": "InstanceItem"
      },
      "index": {
        "description": "",
        "hierarchy": "Hoogle",
        "module": "Hoogle",
        "name": "InstanceItem",
        "normalized": "",
        "package": "hoogle",
        "partial": "Instance Item",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoogle/docs/Hoogle.html#v:ModuleItem",
      "description": {
        "fct-module": "Hoogle",
        "fct-package": "hoogle",
        "fct-signature": "ModuleItem",
        "fct-source": "src/Hoogle-Type-Item.html#ItemKind",
        "fct-type": "function",
        "title": "ModuleItem"
      },
      "index": {
        "description": "",
        "hierarchy": "Hoogle",
        "module": "Hoogle",
        "name": "ModuleItem",
        "normalized": "",
        "package": "hoogle",
        "partial": "Module Item",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoogle/docs/Hoogle.html#v:PackageItem",
      "description": {
        "fct-module": "Hoogle",
        "fct-package": "hoogle",
        "fct-signature": "PackageItem",
        "fct-source": "src/Hoogle-Type-Item.html#ItemKind",
        "fct-type": "function",
        "title": "PackageItem"
      },
      "index": {
        "description": "",
        "hierarchy": "Hoogle",
        "module": "Hoogle",
        "name": "PackageItem",
        "normalized": "",
        "package": "hoogle",
        "partial": "Package Item",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoogle/docs/Hoogle.html#v:ParseError",
      "description": {
        "fct-module": "Hoogle",
        "fct-package": "hoogle",
        "fct-signature": "ParseError",
        "fct-source": "src/Hoogle-Type-ParseError.html#ParseError",
        "fct-type": "function",
        "title": "ParseError"
      },
      "index": {
        "description": "",
        "hierarchy": "Hoogle",
        "module": "Hoogle",
        "name": "ParseError",
        "normalized": "",
        "package": "hoogle",
        "partial": "Parse Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoogle/docs/Hoogle.html#v:Result",
      "description": {
        "fct-module": "Hoogle",
        "fct-package": "hoogle",
        "fct-signature": "Result",
        "fct-source": "src/Hoogle.html#Result",
        "fct-type": "function",
        "title": "Result"
      },
      "index": {
        "description": "",
        "hierarchy": "Hoogle",
        "module": "Hoogle",
        "name": "Result",
        "normalized": "",
        "package": "hoogle",
        "partial": "Result",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoogle/docs/Hoogle.html#v:Str",
      "description": {
        "fct-descr": "\u003cp\u003ePlain text.\n\u003c/p\u003e",
        "fct-module": "Hoogle",
        "fct-package": "hoogle",
        "fct-signature": "Str String",
        "fct-source": "src/Hoogle-Type-TagStr.html#TagStr",
        "fct-type": "function",
        "title": "Str"
      },
      "index": {
        "description": "Plain text",
        "hierarchy": "Hoogle",
        "module": "Hoogle",
        "name": "Str",
        "normalized": "",
        "package": "hoogle",
        "partial": "Str",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoogle/docs/Hoogle.html#v:TagBold",
      "description": {
        "fct-descr": "\u003cp\u003eBold text.\n\u003c/p\u003e",
        "fct-module": "Hoogle",
        "fct-package": "hoogle",
        "fct-signature": "TagBold TagStr",
        "fct-source": "src/Hoogle-Type-TagStr.html#TagStr",
        "fct-type": "function",
        "title": "TagBold"
      },
      "index": {
        "description": "Bold text",
        "hierarchy": "Hoogle",
        "module": "Hoogle",
        "name": "TagBold",
        "normalized": "",
        "package": "hoogle",
        "partial": "Tag Bold",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoogle/docs/Hoogle.html#v:TagColor",
      "description": {
        "fct-descr": "\u003cp\u003eColored text. Index into a 0-based palette. Text without any \u003ccode\u003e\u003ca\u003eTagColor\u003c/a\u003e\u003c/code\u003e should be black.\n\u003c/p\u003e",
        "fct-module": "Hoogle",
        "fct-package": "hoogle",
        "fct-signature": "TagColor Int TagStr",
        "fct-source": "src/Hoogle-Type-TagStr.html#TagStr",
        "fct-type": "function",
        "title": "TagColor"
      },
      "index": {
        "description": "Colored text Index into based palette Text without any TagColor should be black",
        "hierarchy": "Hoogle",
        "module": "Hoogle",
        "name": "TagColor",
        "normalized": "",
        "package": "hoogle",
        "partial": "Tag Color",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoogle/docs/Hoogle.html#v:TagEmph",
      "description": {
        "fct-descr": "\u003cp\u003eUnderlined/italic text.\n\u003c/p\u003e",
        "fct-module": "Hoogle",
        "fct-package": "hoogle",
        "fct-signature": "TagEmph TagStr",
        "fct-source": "src/Hoogle-Type-TagStr.html#TagStr",
        "fct-type": "function",
        "title": "TagEmph"
      },
      "index": {
        "description": "Underlined italic text",
        "hierarchy": "Hoogle",
        "module": "Hoogle",
        "name": "TagEmph",
        "normalized": "",
        "package": "hoogle",
        "partial": "Tag Emph",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoogle/docs/Hoogle.html#v:TagLink",
      "description": {
        "fct-descr": "\u003cp\u003eA hyperlink to a URL.\n\u003c/p\u003e",
        "fct-module": "Hoogle",
        "fct-package": "hoogle",
        "fct-signature": "TagLink String TagStr",
        "fct-source": "src/Hoogle-Type-TagStr.html#TagStr",
        "fct-type": "function",
        "title": "TagLink"
      },
      "index": {
        "description": "hyperlink to URL",
        "hierarchy": "Hoogle",
        "module": "Hoogle",
        "name": "TagLink",
        "normalized": "",
        "package": "hoogle",
        "partial": "Tag Link",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoogle/docs/Hoogle.html#v:Tags",
      "description": {
        "fct-descr": "\u003cp\u003eA list of tags one after another.\n\u003c/p\u003e",
        "fct-module": "Hoogle",
        "fct-package": "hoogle",
        "fct-signature": "Tags [TagStr]",
        "fct-source": "src/Hoogle-Type-TagStr.html#TagStr",
        "fct-type": "function",
        "title": "Tags"
      },
      "index": {
        "description": "list of tags one after another",
        "hierarchy": "Hoogle",
        "module": "Hoogle",
        "name": "Tags",
        "normalized": "Tags[TagStr]",
        "package": "hoogle",
        "partial": "Tags",
        "signature": "Tags[TagStr]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoogle/docs/Hoogle.html#v:TypeCtorItem",
      "description": {
        "fct-module": "Hoogle",
        "fct-package": "hoogle",
        "fct-signature": "TypeCtorItem",
        "fct-source": "src/Hoogle-Type-Item.html#ItemKind",
        "fct-type": "function",
        "title": "TypeCtorItem"
      },
      "index": {
        "description": "",
        "hierarchy": "Hoogle",
        "module": "Hoogle",
        "name": "TypeCtorItem",
        "normalized": "",
        "package": "hoogle",
        "partial": "Type Ctor Item",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoogle/docs/Hoogle.html#v:TypeSynonymItem",
      "description": {
        "fct-module": "Hoogle",
        "fct-package": "hoogle",
        "fct-signature": "TypeSynonymItem",
        "fct-source": "src/Hoogle-Type-Item.html#ItemKind",
        "fct-type": "function",
        "title": "TypeSynonymItem"
      },
      "index": {
        "description": "",
        "hierarchy": "Hoogle",
        "module": "Hoogle",
        "name": "TypeSynonymItem",
        "normalized": "",
        "package": "hoogle",
        "partial": "Type Synonym Item",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoogle/docs/Hoogle.html#v:UnclassifiedItem",
      "description": {
        "fct-module": "Hoogle",
        "fct-package": "hoogle",
        "fct-signature": "UnclassifiedItem",
        "fct-source": "src/Hoogle-Type-Item.html#ItemKind",
        "fct-type": "function",
        "title": "UnclassifiedItem"
      },
      "index": {
        "description": "",
        "hierarchy": "Hoogle",
        "module": "Hoogle",
        "name": "UnclassifiedItem",
        "normalized": "",
        "package": "hoogle",
        "partial": "Unclassified Item",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoogle/docs/Hoogle.html#v:columnNo",
      "description": {
        "fct-descr": "\u003cp\u003eColumn number on which the error occured, 1 for the first character of a line.\n\u003c/p\u003e",
        "fct-module": "Hoogle",
        "fct-package": "hoogle",
        "fct-signature": "Int",
        "fct-source": "src/Hoogle-Type-ParseError.html#ParseError",
        "fct-type": "function",
        "title": "columnNo"
      },
      "index": {
        "description": "Column number on which the error occured for the first character of line",
        "hierarchy": "Hoogle",
        "module": "Hoogle",
        "name": "columnNo",
        "normalized": "",
        "package": "hoogle",
        "partial": "No",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoogle/docs/Hoogle.html#v:completions",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a query string and a database return a list of the possible completions for the search.\n\u003c/p\u003e",
        "fct-module": "Hoogle",
        "fct-package": "hoogle",
        "fct-signature": "Database -\u003e String -\u003e [String]",
        "fct-source": "src/Hoogle.html#completions",
        "fct-type": "function",
        "title": "completions"
      },
      "index": {
        "description": "Given query string and database return list of the possible completions for the search",
        "hierarchy": "Hoogle",
        "module": "Hoogle",
        "name": "completions",
        "normalized": "Database-\u003eString-\u003e[String]",
        "package": "hoogle",
        "partial": "",
        "signature": "Database-\u003eString-\u003e[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoogle/docs/Hoogle.html#v:createDatabase",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a database from an input definition. Source files for Hoogle databases are usually\n   stored in UTF8 format, and should be read using \u003ccode\u003e\u003ca\u003ehSetEncoding\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eutf8\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Hoogle",
        "fct-package": "hoogle",
        "fct-signature": "Language-\u003e [Database]-\u003e String-\u003e ([ParseError], Database)",
        "fct-type": "function",
        "title": "createDatabase"
      },
      "index": {
        "description": "Create database from an input definition Source files for Hoogle databases are usually stored in UTF8 format and should be read using hSetEncoding and utf8",
        "hierarchy": "Hoogle",
        "module": "Hoogle",
        "name": "createDatabase",
        "normalized": "Language-\u003e[Database]-\u003eString-\u003e([ParseError],Database)",
        "package": "hoogle",
        "partial": "Database",
        "signature": "Language-\u003e[Database]-\u003eString-\u003e([ParseError],Database)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoogle/docs/Hoogle.html#v:docs",
      "description": {
        "fct-descr": "\u003cp\u003eDocumentation for the entry\n\u003c/p\u003e",
        "fct-module": "Hoogle",
        "fct-package": "hoogle",
        "fct-signature": "TagStr",
        "fct-source": "src/Hoogle.html#Result",
        "fct-type": "function",
        "title": "docs"
      },
      "index": {
        "description": "Documentation for the entry",
        "hierarchy": "Hoogle",
        "module": "Hoogle",
        "name": "docs",
        "normalized": "",
        "package": "hoogle",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoogle/docs/Hoogle.html#v:errorMessage",
      "description": {
        "fct-descr": "\u003cp\u003eError message caused by the parse error.\n\u003c/p\u003e",
        "fct-module": "Hoogle",
        "fct-package": "hoogle",
        "fct-signature": "String",
        "fct-source": "src/Hoogle-Type-ParseError.html#ParseError",
        "fct-type": "function",
        "title": "errorMessage"
      },
      "index": {
        "description": "Error message caused by the parse error",
        "hierarchy": "Hoogle",
        "module": "Hoogle",
        "name": "errorMessage",
        "normalized": "",
        "package": "hoogle",
        "partial": "Message",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoogle/docs/Hoogle.html#v:lineNo",
      "description": {
        "fct-descr": "\u003cp\u003eLine number on which the error occured, 1 for the first line of a file.\n\u003c/p\u003e",
        "fct-module": "Hoogle",
        "fct-package": "hoogle",
        "fct-signature": "Int",
        "fct-source": "src/Hoogle-Type-ParseError.html#ParseError",
        "fct-type": "function",
        "title": "lineNo"
      },
      "index": {
        "description": "Line number on which the error occured for the first line of file",
        "hierarchy": "Hoogle",
        "module": "Hoogle",
        "name": "lineNo",
        "normalized": "",
        "package": "hoogle",
        "partial": "No",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoogle/docs/Hoogle.html#v:loadDatabase",
      "description": {
        "fct-descr": "\u003cp\u003eLoad a database from a file. If the database was not saved with the same version of Hoogle,\n   it will probably throw an error.\n\u003c/p\u003e",
        "fct-module": "Hoogle",
        "fct-package": "hoogle",
        "fct-signature": "FilePath -\u003e IO Database",
        "fct-source": "src/Hoogle.html#loadDatabase",
        "fct-type": "function",
        "title": "loadDatabase"
      },
      "index": {
        "description": "Load database from file If the database was not saved with the same version of Hoogle it will probably throw an error",
        "hierarchy": "Hoogle",
        "module": "Hoogle",
        "name": "loadDatabase",
        "normalized": "FilePath-\u003eIO Database",
        "package": "hoogle",
        "partial": "Database",
        "signature": "FilePath-\u003eIO Database"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoogle/docs/Hoogle.html#v:locations",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Hoogle",
        "fct-package": "hoogle",
        "fct-signature": "[(URL, [(URL, String)])]",
        "fct-source": "src/Hoogle.html#Result",
        "fct-type": "function",
        "title": "locations"
      },
      "index": {
        "description": "",
        "hierarchy": "Hoogle",
        "module": "Hoogle",
        "name": "locations",
        "normalized": "[(URL,[(URL,String)])]",
        "package": "hoogle",
        "partial": "",
        "signature": "[(URL,[(URL,String)])]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoogle/docs/Hoogle.html#v:parseInput",
      "description": {
        "fct-descr": "\u003cp\u003eInput string which caused the error - sometimes with a \u003ccode\u003e\u003ca\u003eTagEmph\u003c/a\u003e\u003c/code\u003e to indicate which part was incorrect.\n\u003c/p\u003e",
        "fct-module": "Hoogle",
        "fct-package": "hoogle",
        "fct-signature": "TagStr",
        "fct-source": "src/Hoogle-Type-ParseError.html#ParseError",
        "fct-type": "function",
        "title": "parseInput"
      },
      "index": {
        "description": "Input string which caused the error sometimes with TagEmph to indicate which part was incorrect",
        "hierarchy": "Hoogle",
        "module": "Hoogle",
        "name": "parseInput",
        "normalized": "",
        "package": "hoogle",
        "partial": "Input",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoogle/docs/Hoogle.html#v:parseQuery",
      "description": {
        "fct-descr": "\u003cp\u003eParse a query for a given language, returning either a parse error, or a query.\n\u003c/p\u003e",
        "fct-module": "Hoogle",
        "fct-package": "hoogle",
        "fct-signature": "Language -\u003e String -\u003e Either ParseError Query",
        "fct-source": "src/Hoogle.html#parseQuery",
        "fct-type": "function",
        "title": "parseQuery"
      },
      "index": {
        "description": "Parse query for given language returning either parse error or query",
        "hierarchy": "Hoogle",
        "module": "Hoogle",
        "name": "parseQuery",
        "normalized": "Language-\u003eString-\u003eEither ParseError Query",
        "package": "hoogle",
        "partial": "Query",
        "signature": "Language-\u003eString-\u003eEither ParseError Query"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoogle/docs/Hoogle.html#v:queryDatabases",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a query, return the list of packages that should be searched. Each package will be\n   the name of a database, without any file path or extension included.\n\u003c/p\u003e",
        "fct-module": "Hoogle",
        "fct-package": "hoogle",
        "fct-signature": "Query -\u003e [String]",
        "fct-source": "src/Hoogle-Query-Type.html#queryDatabases",
        "fct-type": "function",
        "title": "queryDatabases"
      },
      "index": {
        "description": "Given query return the list of packages that should be searched Each package will be the name of database without any file path or extension included",
        "hierarchy": "Hoogle",
        "module": "Hoogle",
        "name": "queryDatabases",
        "normalized": "Query-\u003e[String]",
        "package": "hoogle",
        "partial": "Databases",
        "signature": "Query-\u003e[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoogle/docs/Hoogle.html#v:queryExact",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a query, set whether it is an exact query.\n\u003c/p\u003e",
        "fct-module": "Hoogle",
        "fct-package": "hoogle",
        "fct-signature": "Maybe ItemKind -\u003e Query -\u003e Query",
        "fct-source": "src/Hoogle.html#queryExact",
        "fct-type": "function",
        "title": "queryExact"
      },
      "index": {
        "description": "Given query set whether it is an exact query",
        "hierarchy": "Hoogle",
        "module": "Hoogle",
        "name": "queryExact",
        "normalized": "Maybe ItemKind-\u003eQuery-\u003eQuery",
        "package": "hoogle",
        "partial": "Exact",
        "signature": "Maybe ItemKind-\u003eQuery-\u003eQuery"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoogle/docs/Hoogle.html#v:queryPackages",
      "description": {
        "fct-descr": "\u003cp\u003eReturn those packages which are explicitly excluded (paired with \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e)\n   or included (paired with \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e) in the query.\n\u003c/p\u003e",
        "fct-module": "Hoogle",
        "fct-package": "hoogle",
        "fct-signature": "Query -\u003e [(Bool, String)]",
        "fct-source": "src/Hoogle-Query-Type.html#queryPackages",
        "fct-type": "function",
        "title": "queryPackages"
      },
      "index": {
        "description": "Return those packages which are explicitly excluded paired with False or included paired with True in the query",
        "hierarchy": "Hoogle",
        "module": "Hoogle",
        "name": "queryPackages",
        "normalized": "Query-\u003e[(Bool,String)]",
        "package": "hoogle",
        "partial": "Packages",
        "signature": "Query-\u003e[(Bool,String)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoogle/docs/Hoogle.html#v:querySetPackage",
      "description": {
        "fct-descr": "\u003cp\u003eSet the state of a package within a query. \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e means delete the package,\n   \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e for add it, and \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e for remove it.\n\u003c/p\u003e",
        "fct-module": "Hoogle",
        "fct-package": "hoogle",
        "fct-signature": "Maybe Bool -\u003e String -\u003e Query -\u003e Query",
        "fct-source": "src/Hoogle-Query-Type.html#querySetPackage",
        "fct-type": "function",
        "title": "querySetPackage"
      },
      "index": {
        "description": "Set the state of package within query Nothing means delete the package Just True for add it and Just False for remove it",
        "hierarchy": "Hoogle",
        "module": "Hoogle",
        "name": "querySetPackage",
        "normalized": "Maybe Bool-\u003eString-\u003eQuery-\u003eQuery",
        "package": "hoogle",
        "partial": "Set Package",
        "signature": "Maybe Bool-\u003eString-\u003eQuery-\u003eQuery"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoogle/docs/Hoogle.html#v:renderQuery",
      "description": {
        "fct-descr": "\u003cp\u003eRender a query, in particular using \u003ccode\u003e\u003ca\u003eTagColor\u003c/a\u003e\u003c/code\u003e for any type signature argument positions.\n\u003c/p\u003e",
        "fct-module": "Hoogle",
        "fct-package": "hoogle",
        "fct-signature": "Query -\u003e TagStr",
        "fct-source": "src/Hoogle-Query-Render.html#renderQuery",
        "fct-type": "function",
        "title": "renderQuery"
      },
      "index": {
        "description": "Render query in particular using TagColor for any type signature argument positions",
        "hierarchy": "Hoogle",
        "module": "Hoogle",
        "name": "renderQuery",
        "normalized": "Query-\u003eTagStr",
        "package": "hoogle",
        "partial": "Query",
        "signature": "Query-\u003eTagStr"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoogle/docs/Hoogle.html#v:saveDatabase",
      "description": {
        "fct-descr": "\u003cp\u003eSave a database to a file.\n\u003c/p\u003e",
        "fct-module": "Hoogle",
        "fct-package": "hoogle",
        "fct-signature": "FilePath -\u003e Database -\u003e IO ()",
        "fct-source": "src/Hoogle.html#saveDatabase",
        "fct-type": "function",
        "title": "saveDatabase"
      },
      "index": {
        "description": "Save database to file",
        "hierarchy": "Hoogle",
        "module": "Hoogle",
        "name": "saveDatabase",
        "normalized": "FilePath-\u003eDatabase-\u003eIO()",
        "package": "hoogle",
        "partial": "Database",
        "signature": "FilePath-\u003eDatabase-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoogle/docs/Hoogle.html#v:scoring",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a set of scores, where the first is lower than the second, returns details for how to rank scores.\n   This function is in the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad since it may require randomness, and it may output status messages while solving,\n   particularly if in Verbose mode.\n\u003c/p\u003e",
        "fct-module": "Hoogle",
        "fct-package": "hoogle",
        "fct-signature": "[(Score, Score)] -\u003e IO String",
        "fct-source": "src/Hoogle-Score-Scoring.html#scoring",
        "fct-type": "function",
        "title": "scoring"
      },
      "index": {
        "description": "Given set of scores where the first is lower than the second returns details for how to rank scores This function is in the IO monad since it may require randomness and it may output status messages while solving particularly if in Verbose mode",
        "hierarchy": "Hoogle",
        "module": "Hoogle",
        "name": "scoring",
        "normalized": "[(Score,Score)]-\u003eIO String",
        "package": "hoogle",
        "partial": "",
        "signature": "[(Score,Score)]-\u003eIO String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoogle/docs/Hoogle.html#v:search",
      "description": {
        "fct-descr": "\u003cp\u003ePerform a search. The results are returned lazily.\n\u003c/p\u003e",
        "fct-module": "Hoogle",
        "fct-package": "hoogle",
        "fct-signature": "Database -\u003e Query -\u003e [(Score, Result)]",
        "fct-source": "src/Hoogle.html#search",
        "fct-type": "function",
        "title": "search"
      },
      "index": {
        "description": "Perform search The results are returned lazily",
        "hierarchy": "Hoogle",
        "module": "Hoogle",
        "name": "search",
        "normalized": "Database-\u003eQuery-\u003e[(Score,Result)]",
        "package": "hoogle",
        "partial": "",
        "signature": "Database-\u003eQuery-\u003e[(Score,Result)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoogle/docs/Hoogle.html#v:self",
      "description": {
        "fct-descr": "\u003cp\u003eRendered view for the entry, including name\u003cem\u003ekeywords\u003c/em\u003etype as appropriate, colors matching \u003ccode\u003erenderQuery\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Hoogle",
        "fct-package": "hoogle",
        "fct-signature": "TagStr",
        "fct-source": "src/Hoogle.html#Result",
        "fct-type": "function",
        "title": "self"
      },
      "index": {
        "description": "Rendered view for the entry including name keywords type as appropriate colors matching renderQuery",
        "hierarchy": "Hoogle",
        "module": "Hoogle",
        "name": "self",
        "normalized": "",
        "package": "hoogle",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoogle/docs/Hoogle.html#v:showDatabase",
      "description": {
        "fct-descr": "\u003cp\u003eShow debugging information on some parts of the database. If the second argument\n   is \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e the whole database will be shown. Otherwise, the listed parts will be shown.\n\u003c/p\u003e",
        "fct-module": "Hoogle",
        "fct-package": "hoogle",
        "fct-signature": "Database -\u003e Maybe [String] -\u003e String",
        "fct-source": "src/Hoogle.html#showDatabase",
        "fct-type": "function",
        "title": "showDatabase"
      },
      "index": {
        "description": "Show debugging information on some parts of the database If the second argument is Nothing the whole database will be shown Otherwise the listed parts will be shown",
        "hierarchy": "Hoogle",
        "module": "Hoogle",
        "name": "showDatabase",
        "normalized": "Database-\u003eMaybe[String]-\u003eString",
        "package": "hoogle",
        "partial": "Database",
        "signature": "Database-\u003eMaybe[String]-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoogle/docs/Hoogle.html#v:showTagANSI",
      "description": {
        "fct-descr": "\u003cp\u003eShow a \u003ccode\u003e\u003ca\u003eTagStr\u003c/a\u003e\u003c/code\u003e on a console with ANSI escape sequences.\n\u003c/p\u003e",
        "fct-module": "Hoogle",
        "fct-package": "hoogle",
        "fct-signature": "TagStr -\u003e String",
        "fct-source": "src/Hoogle-Type-TagStr.html#showTagANSI",
        "fct-type": "function",
        "title": "showTagANSI"
      },
      "index": {
        "description": "Show TagStr on console with ANSI escape sequences",
        "hierarchy": "Hoogle",
        "module": "Hoogle",
        "name": "showTagANSI",
        "normalized": "TagStr-\u003eString",
        "package": "hoogle",
        "partial": "Tag ANSI",
        "signature": "TagStr-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoogle/docs/Hoogle.html#v:showTagHTML",
      "description": {
        "fct-descr": "\u003cp\u003eShow a \u003ccode\u003e\u003ca\u003eTagStr\u003c/a\u003e\u003c/code\u003e as HTML, using CSS classes for color styling.\n\u003c/p\u003e",
        "fct-module": "Hoogle",
        "fct-package": "hoogle",
        "fct-signature": "TagStr -\u003e String",
        "fct-source": "src/Hoogle-Type-TagStr.html#showTagHTML",
        "fct-type": "function",
        "title": "showTagHTML"
      },
      "index": {
        "description": "Show TagStr as HTML using CSS classes for color styling",
        "hierarchy": "Hoogle",
        "module": "Hoogle",
        "name": "showTagHTML",
        "normalized": "TagStr-\u003eString",
        "package": "hoogle",
        "partial": "Tag HTML",
        "signature": "TagStr-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoogle/docs/Hoogle.html#v:showTagHTMLWith",
      "description": {
        "fct-descr": "\u003cp\u003eShow TagStr with an override for specific tags.\n\u003c/p\u003e",
        "fct-module": "Hoogle",
        "fct-package": "hoogle",
        "fct-signature": "(TagStr -\u003e Maybe String) -\u003e TagStr -\u003e String",
        "fct-source": "src/Hoogle-Type-TagStr.html#showTagHTMLWith",
        "fct-type": "function",
        "title": "showTagHTMLWith"
      },
      "index": {
        "description": "Show TagStr with an override for specific tags",
        "hierarchy": "Hoogle",
        "module": "Hoogle",
        "name": "showTagHTMLWith",
        "normalized": "(TagStr-\u003eMaybe String)-\u003eTagStr-\u003eString",
        "package": "hoogle",
        "partial": "Tag HTMLWith",
        "signature": "(TagStr-\u003eMaybe String)-\u003eTagStr-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoogle/docs/Hoogle.html#v:showTagText",
      "description": {
        "fct-descr": "\u003cp\u003eShow a \u003ccode\u003e\u003ca\u003eTagStr\u003c/a\u003e\u003c/code\u003e as a string, without any formatting.\n\u003c/p\u003e",
        "fct-module": "Hoogle",
        "fct-package": "hoogle",
        "fct-signature": "TagStr -\u003e String",
        "fct-source": "src/Hoogle-Type-TagStr.html#showTagText",
        "fct-type": "function",
        "title": "showTagText"
      },
      "index": {
        "description": "Show TagStr as string without any formatting",
        "hierarchy": "Hoogle",
        "module": "Hoogle",
        "name": "showTagText",
        "normalized": "TagStr-\u003eString",
        "package": "hoogle",
        "partial": "Tag Text",
        "signature": "TagStr-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hoogle/docs/Hoogle.html#v:suggestions",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a query and a database optionally give a list of what the user might have meant.\n\u003c/p\u003e",
        "fct-module": "Hoogle",
        "fct-package": "hoogle",
        "fct-signature": "Database -\u003e Query -\u003e Maybe TagStr",
        "fct-source": "src/Hoogle.html#suggestions",
        "fct-type": "function",
        "title": "suggestions"
      },
      "index": {
        "description": "Given query and database optionally give list of what the user might have meant",
        "hierarchy": "Hoogle",
        "module": "Hoogle",
        "name": "suggestions",
        "normalized": "Database-\u003eQuery-\u003eMaybe TagStr",
        "package": "hoogle",
        "partial": "",
        "signature": "Database-\u003eQuery-\u003eMaybe TagStr"
      }
    }
  }
]