[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-memocombinators/docs/Data-MemoCombinators-Class.html#",
      "description": {
        "fct-module": "Data.MemoCombinators.Class",
        "fct-package": "data-memocombinators",
        "fct-signature": "module",
        "fct-source": "src/Data-MemoCombinators-Class.html",
        "fct-type": "module",
        "title": "Class"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MemoCombinators Class",
        "module": "Data.MemoCombinators.Class",
        "name": "Class",
        "normalized": "",
        "package": "data-memocombinators",
        "partial": "Class",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-memocombinators/docs/Data-MemoCombinators-Class.html#t:MemoTable",
      "description": {
        "fct-descr": "\u003cp\u003eThe class of types which have complete memo tables.\n\u003c/p\u003e",
        "fct-module": "Data.MemoCombinators.Class",
        "fct-package": "data-memocombinators",
        "fct-signature": "class",
        "fct-source": "src/Data-MemoCombinators-Class.html#MemoTable",
        "fct-type": "class",
        "title": "MemoTable"
      },
      "index": {
        "description": "The class of types which have complete memo tables",
        "hierarchy": "Data MemoCombinators Class",
        "module": "Data.MemoCombinators.Class",
        "name": "MemoTable",
        "normalized": "",
        "package": "data-memocombinators",
        "partial": "Memo Table",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-memocombinators/docs/Data-MemoCombinators-Class.html#t:Memoizable",
      "description": {
        "fct-descr": "\u003cp\u003eThe class of functions which can be completely memoized.\n\u003c/p\u003e",
        "fct-module": "Data.MemoCombinators.Class",
        "fct-package": "data-memocombinators",
        "fct-signature": "class",
        "fct-source": "src/Data-MemoCombinators-Class.html#Memoizable",
        "fct-type": "class",
        "title": "Memoizable"
      },
      "index": {
        "description": "The class of functions which can be completely memoized",
        "hierarchy": "Data MemoCombinators Class",
        "module": "Data.MemoCombinators.Class",
        "name": "Memoizable",
        "normalized": "",
        "package": "data-memocombinators",
        "partial": "Memoizable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-memocombinators/docs/Data-MemoCombinators-Class.html#v:memoize",
      "description": {
        "fct-module": "Data.MemoCombinators.Class",
        "fct-package": "data-memocombinators",
        "fct-signature": "a -\u003e a",
        "fct-source": "src/Data-MemoCombinators-Class.html#memoize",
        "fct-type": "method",
        "title": "memoize"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MemoCombinators Class",
        "module": "Data.MemoCombinators.Class",
        "name": "memoize",
        "normalized": "a-\u003ea",
        "package": "data-memocombinators",
        "partial": "",
        "signature": "a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-memocombinators/docs/Data-MemoCombinators-Class.html#v:table",
      "description": {
        "fct-module": "Data.MemoCombinators.Class",
        "fct-package": "data-memocombinators",
        "fct-signature": "Memo a",
        "fct-source": "src/Data-MemoCombinators-Class.html#table",
        "fct-type": "method",
        "title": "table"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MemoCombinators Class",
        "module": "Data.MemoCombinators.Class",
        "name": "table",
        "normalized": "",
        "package": "data-memocombinators",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-memocombinators/docs/Data-MemoCombinators.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides combinators for building memo tables\n over various data types, so that the type of table can\n be customized depending on the application.\n\u003c/p\u003e\u003cp\u003eThis module is designed to be imported \u003cem\u003equalified\u003c/em\u003e, eg.\n\u003c/p\u003e\u003cpre\u003e import qualified Data.MemoCombinators as Memo\n\u003c/pre\u003e\u003cp\u003eUsage is straightforward: apply an object of type \u003ccode\u003eMemo a\u003c/code\u003e\n to a function of type \u003ccode\u003ea -\u003e b\u003c/code\u003e, and get a memoized function\n of type \u003ccode\u003ea -\u003e b\u003c/code\u003e.  For example:\n\u003c/p\u003e\u003cpre\u003e fib = Memo.integral fib'\n    where\n    fib' 0 = 0\n    fib' 1 = 1\n    fib' x = fib (x-1) + fib (x-2)\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Data.MemoCombinators",
        "fct-package": "data-memocombinators",
        "fct-signature": "module",
        "fct-source": "src/Data-MemoCombinators.html",
        "fct-type": "module",
        "title": "MemoCombinators"
      },
      "index": {
        "description": "This module provides combinators for building memo tables over various data types so that the type of table can be customized depending on the application This module is designed to be imported qualified eg import qualified Data.MemoCombinators as Memo Usage is straightforward apply an object of type Memo to function of type and get memoized function of type For example fib Memo.integral fib where fib fib fib fib x-1 fib x-2",
        "hierarchy": "Data MemoCombinators",
        "module": "Data.MemoCombinators",
        "name": "MemoCombinators",
        "normalized": "",
        "package": "data-memocombinators",
        "partial": "Memo Combinators",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-memocombinators/docs/Data-MemoCombinators.html#t:Memo",
      "description": {
        "fct-descr": "\u003cp\u003eThe type of a memo table for functions of a.\n\u003c/p\u003e",
        "fct-module": "Data.MemoCombinators",
        "fct-package": "data-memocombinators",
        "fct-signature": "type",
        "fct-source": "src/Data-MemoCombinators.html#Memo",
        "fct-type": "type",
        "title": "Memo"
      },
      "index": {
        "description": "The type of memo table for functions of",
        "hierarchy": "Data MemoCombinators",
        "module": "Data.MemoCombinators",
        "name": "Memo",
        "normalized": "",
        "package": "data-memocombinators",
        "partial": "Memo",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-memocombinators/docs/Data-MemoCombinators.html#t:RangeMemo",
      "description": {
        "fct-descr": "\u003cp\u003eThe type of builders for ranged tables; takes a lower bound and an upper\n bound, and returns a memo table for that range.\n\u003c/p\u003e",
        "fct-module": "Data.MemoCombinators",
        "fct-package": "data-memocombinators",
        "fct-signature": "type",
        "fct-source": "src/Data-MemoCombinators.html#RangeMemo",
        "fct-type": "type",
        "title": "RangeMemo"
      },
      "index": {
        "description": "The type of builders for ranged tables takes lower bound and an upper bound and returns memo table for that range",
        "hierarchy": "Data MemoCombinators",
        "module": "Data.MemoCombinators",
        "name": "RangeMemo",
        "normalized": "",
        "package": "data-memocombinators",
        "partial": "Range Memo",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-memocombinators/docs/Data-MemoCombinators.html#v:arrayRange",
      "description": {
        "fct-descr": "\u003cp\u003eBuild a memo table for a range using a flat array.  If items are\n given outside the range, don't memoize.\n\u003c/p\u003e",
        "fct-module": "Data.MemoCombinators",
        "fct-package": "data-memocombinators",
        "fct-signature": "RangeMemo a",
        "fct-source": "src/Data-MemoCombinators.html#arrayRange",
        "fct-type": "function",
        "title": "arrayRange"
      },
      "index": {
        "description": "Build memo table for range using flat array If items are given outside the range don memoize",
        "hierarchy": "Data MemoCombinators",
        "module": "Data.MemoCombinators",
        "name": "arrayRange",
        "normalized": "",
        "package": "data-memocombinators",
        "partial": "Range",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-memocombinators/docs/Data-MemoCombinators.html#v:bits",
      "description": {
        "fct-descr": "\u003cp\u003eMemoize an ordered type with a bits instance.\n\u003c/p\u003e",
        "fct-module": "Data.MemoCombinators",
        "fct-package": "data-memocombinators",
        "fct-signature": "Memo a",
        "fct-source": "src/Data-MemoCombinators.html#bits",
        "fct-type": "function",
        "title": "bits"
      },
      "index": {
        "description": "Memoize an ordered type with bits instance",
        "hierarchy": "Data MemoCombinators",
        "module": "Data.MemoCombinators",
        "name": "bits",
        "normalized": "",
        "package": "data-memocombinators",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-memocombinators/docs/Data-MemoCombinators.html#v:bool",
      "description": {
        "fct-module": "Data.MemoCombinators",
        "fct-package": "data-memocombinators",
        "fct-signature": "Memo Bool",
        "fct-source": "src/Data-MemoCombinators.html#bool",
        "fct-type": "function",
        "title": "bool"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MemoCombinators",
        "module": "Data.MemoCombinators",
        "name": "bool",
        "normalized": "",
        "package": "data-memocombinators",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-memocombinators/docs/Data-MemoCombinators.html#v:boundedList",
      "description": {
        "fct-descr": "\u003cp\u003eBuild a table which memoizes all lists of less than the given length.\n\u003c/p\u003e",
        "fct-module": "Data.MemoCombinators",
        "fct-package": "data-memocombinators",
        "fct-signature": "Int -\u003e Memo a -\u003e Memo [a]",
        "fct-source": "src/Data-MemoCombinators.html#boundedList",
        "fct-type": "function",
        "title": "boundedList"
      },
      "index": {
        "description": "Build table which memoizes all lists of less than the given length",
        "hierarchy": "Data MemoCombinators",
        "module": "Data.MemoCombinators",
        "name": "boundedList",
        "normalized": "Int-\u003eMemo a-\u003eMemo[a]",
        "package": "data-memocombinators",
        "partial": "List",
        "signature": "Int-\u003eMemo a-\u003eMemo[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-memocombinators/docs/Data-MemoCombinators.html#v:char",
      "description": {
        "fct-module": "Data.MemoCombinators",
        "fct-package": "data-memocombinators",
        "fct-signature": "Memo Char",
        "fct-source": "src/Data-MemoCombinators.html#char",
        "fct-type": "function",
        "title": "char"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MemoCombinators",
        "module": "Data.MemoCombinators",
        "name": "char",
        "normalized": "",
        "package": "data-memocombinators",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-memocombinators/docs/Data-MemoCombinators.html#v:chunks",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a list of ranges, (lazily) build a memo table for each one\n and combine them using linear search.\n\u003c/p\u003e",
        "fct-module": "Data.MemoCombinators",
        "fct-package": "data-memocombinators",
        "fct-signature": "RangeMemo a -\u003e [(a, a)] -\u003e Memo a",
        "fct-source": "src/Data-MemoCombinators.html#chunks",
        "fct-type": "function",
        "title": "chunks"
      },
      "index": {
        "description": "Given list of ranges lazily build memo table for each one and combine them using linear search",
        "hierarchy": "Data MemoCombinators",
        "module": "Data.MemoCombinators",
        "name": "chunks",
        "normalized": "RangeMemo a-\u003e[(a,a)]-\u003eMemo a",
        "package": "data-memocombinators",
        "partial": "",
        "signature": "RangeMemo a-\u003e[(a,a)]-\u003eMemo a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-memocombinators/docs/Data-MemoCombinators.html#v:either",
      "description": {
        "fct-module": "Data.MemoCombinators",
        "fct-package": "data-memocombinators",
        "fct-signature": "Memo a -\u003e Memo b -\u003e Memo (Either a b)",
        "fct-source": "src/Data-MemoCombinators.html#either",
        "fct-type": "function",
        "title": "either"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MemoCombinators",
        "module": "Data.MemoCombinators",
        "name": "either",
        "normalized": "Memo a-\u003eMemo b-\u003eMemo(Either a b)",
        "package": "data-memocombinators",
        "partial": "",
        "signature": "Memo a-\u003eMemo b-\u003eMemo(Either a b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-memocombinators/docs/Data-MemoCombinators.html#v:enum",
      "description": {
        "fct-descr": "\u003cp\u003eMemoize an enum type.\n\u003c/p\u003e",
        "fct-module": "Data.MemoCombinators",
        "fct-package": "data-memocombinators",
        "fct-signature": "Memo a",
        "fct-source": "src/Data-MemoCombinators.html#enum",
        "fct-type": "function",
        "title": "enum"
      },
      "index": {
        "description": "Memoize an enum type",
        "hierarchy": "Data MemoCombinators",
        "module": "Data.MemoCombinators",
        "name": "enum",
        "normalized": "",
        "package": "data-memocombinators",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-memocombinators/docs/Data-MemoCombinators.html#v:integral",
      "description": {
        "fct-descr": "\u003cp\u003eMemoize an integral type.\n\u003c/p\u003e",
        "fct-module": "Data.MemoCombinators",
        "fct-package": "data-memocombinators",
        "fct-signature": "Memo a",
        "fct-source": "src/Data-MemoCombinators.html#integral",
        "fct-type": "function",
        "title": "integral"
      },
      "index": {
        "description": "Memoize an integral type",
        "hierarchy": "Data MemoCombinators",
        "module": "Data.MemoCombinators",
        "name": "integral",
        "normalized": "",
        "package": "data-memocombinators",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-memocombinators/docs/Data-MemoCombinators.html#v:list",
      "description": {
        "fct-module": "Data.MemoCombinators",
        "fct-package": "data-memocombinators",
        "fct-signature": "Memo a -\u003e Memo [a]",
        "fct-source": "src/Data-MemoCombinators.html#list",
        "fct-type": "function",
        "title": "list"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MemoCombinators",
        "module": "Data.MemoCombinators",
        "name": "list",
        "normalized": "Memo a-\u003eMemo[a]",
        "package": "data-memocombinators",
        "partial": "",
        "signature": "Memo a-\u003eMemo[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-memocombinators/docs/Data-MemoCombinators.html#v:maybe",
      "description": {
        "fct-module": "Data.MemoCombinators",
        "fct-package": "data-memocombinators",
        "fct-signature": "Memo a -\u003e Memo (Maybe a)",
        "fct-source": "src/Data-MemoCombinators.html#maybe",
        "fct-type": "function",
        "title": "maybe"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MemoCombinators",
        "module": "Data.MemoCombinators",
        "name": "maybe",
        "normalized": "Memo a-\u003eMemo(Maybe a)",
        "package": "data-memocombinators",
        "partial": "",
        "signature": "Memo a-\u003eMemo(Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-memocombinators/docs/Data-MemoCombinators.html#v:memo2",
      "description": {
        "fct-descr": "\u003cp\u003eMemoize a two argument function (just apply the table directly for\n single argument functions).\n\u003c/p\u003e",
        "fct-module": "Data.MemoCombinators",
        "fct-package": "data-memocombinators",
        "fct-signature": "Memo a -\u003e Memo b -\u003e (a -\u003e b -\u003e r) -\u003e a -\u003e b -\u003e r",
        "fct-source": "src/Data-MemoCombinators.html#memo2",
        "fct-type": "function",
        "title": "memo2"
      },
      "index": {
        "description": "Memoize two argument function just apply the table directly for single argument functions",
        "hierarchy": "Data MemoCombinators",
        "module": "Data.MemoCombinators",
        "name": "memo2",
        "normalized": "Memo a-\u003eMemo b-\u003e(a-\u003eb-\u003ec)-\u003ea-\u003eb-\u003ec",
        "package": "data-memocombinators",
        "partial": "",
        "signature": "Memo a-\u003eMemo b-\u003e(a-\u003eb-\u003er)-\u003ea-\u003eb-\u003er"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-memocombinators/docs/Data-MemoCombinators.html#v:memo3",
      "description": {
        "fct-descr": "\u003cp\u003eMemoize a three argument function.\n\u003c/p\u003e",
        "fct-module": "Data.MemoCombinators",
        "fct-package": "data-memocombinators",
        "fct-signature": "Memo a -\u003e Memo b -\u003e Memo c -\u003e (a -\u003e b -\u003e c -\u003e r) -\u003e a -\u003e b -\u003e c -\u003e r",
        "fct-source": "src/Data-MemoCombinators.html#memo3",
        "fct-type": "function",
        "title": "memo3"
      },
      "index": {
        "description": "Memoize three argument function",
        "hierarchy": "Data MemoCombinators",
        "module": "Data.MemoCombinators",
        "name": "memo3",
        "normalized": "Memo a-\u003eMemo b-\u003eMemo c-\u003e(a-\u003eb-\u003ec-\u003ed)-\u003ea-\u003eb-\u003ec-\u003ed",
        "package": "data-memocombinators",
        "partial": "",
        "signature": "Memo a-\u003eMemo b-\u003eMemo c-\u003e(a-\u003eb-\u003ec-\u003er)-\u003ea-\u003eb-\u003ec-\u003er"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-memocombinators/docs/Data-MemoCombinators.html#v:memoSecond",
      "description": {
        "fct-descr": "\u003cp\u003eMemoize the second argument of a function.\n\u003c/p\u003e",
        "fct-module": "Data.MemoCombinators",
        "fct-package": "data-memocombinators",
        "fct-signature": "Memo b -\u003e (a -\u003e b -\u003e r) -\u003e a -\u003e b -\u003e r",
        "fct-source": "src/Data-MemoCombinators.html#memoSecond",
        "fct-type": "function",
        "title": "memoSecond"
      },
      "index": {
        "description": "Memoize the second argument of function",
        "hierarchy": "Data MemoCombinators",
        "module": "Data.MemoCombinators",
        "name": "memoSecond",
        "normalized": "Memo a-\u003e(b-\u003ea-\u003ec)-\u003eb-\u003ea-\u003ec",
        "package": "data-memocombinators",
        "partial": "Second",
        "signature": "Memo b-\u003e(a-\u003eb-\u003er)-\u003ea-\u003eb-\u003er"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-memocombinators/docs/Data-MemoCombinators.html#v:memoThird",
      "description": {
        "fct-descr": "\u003cp\u003eMemoize the third argument of a function.\n\u003c/p\u003e",
        "fct-module": "Data.MemoCombinators",
        "fct-package": "data-memocombinators",
        "fct-signature": "Memo c -\u003e (a -\u003e b -\u003e c -\u003e r) -\u003e a -\u003e b -\u003e c -\u003e r",
        "fct-source": "src/Data-MemoCombinators.html#memoThird",
        "fct-type": "function",
        "title": "memoThird"
      },
      "index": {
        "description": "Memoize the third argument of function",
        "hierarchy": "Data MemoCombinators",
        "module": "Data.MemoCombinators",
        "name": "memoThird",
        "normalized": "Memo a-\u003e(b-\u003ec-\u003ea-\u003ed)-\u003eb-\u003ec-\u003ea-\u003ed",
        "package": "data-memocombinators",
        "partial": "Third",
        "signature": "Memo c-\u003e(a-\u003eb-\u003ec-\u003er)-\u003ea-\u003eb-\u003ec-\u003er"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-memocombinators/docs/Data-MemoCombinators.html#v:pair",
      "description": {
        "fct-module": "Data.MemoCombinators",
        "fct-package": "data-memocombinators",
        "fct-signature": "Memo a -\u003e Memo b -\u003e Memo (a, b)",
        "fct-source": "src/Data-MemoCombinators.html#pair",
        "fct-type": "function",
        "title": "pair"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MemoCombinators",
        "module": "Data.MemoCombinators",
        "name": "pair",
        "normalized": "Memo a-\u003eMemo b-\u003eMemo(a,b)",
        "package": "data-memocombinators",
        "partial": "",
        "signature": "Memo a-\u003eMemo b-\u003eMemo(a,b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-memocombinators/docs/Data-MemoCombinators.html#v:switch",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eswitch p a b\u003c/code\u003e uses the memo table a whenever p gives\n true and the memo table b whenever p gives false.\n\u003c/p\u003e",
        "fct-module": "Data.MemoCombinators",
        "fct-package": "data-memocombinators",
        "fct-signature": "(a -\u003e Bool) -\u003e Memo a -\u003e Memo a -\u003e Memo a",
        "fct-source": "src/Data-MemoCombinators.html#switch",
        "fct-type": "function",
        "title": "switch"
      },
      "index": {
        "description": "switch uses the memo table whenever gives true and the memo table whenever gives false",
        "hierarchy": "Data MemoCombinators",
        "module": "Data.MemoCombinators",
        "name": "switch",
        "normalized": "(a-\u003eBool)-\u003eMemo a-\u003eMemo a-\u003eMemo a",
        "package": "data-memocombinators",
        "partial": "",
        "signature": "(a-\u003eBool)-\u003eMemo a-\u003eMemo a-\u003eMemo a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-memocombinators/docs/Data-MemoCombinators.html#v:unit",
      "description": {
        "fct-module": "Data.MemoCombinators",
        "fct-package": "data-memocombinators",
        "fct-signature": "Memo ()",
        "fct-source": "src/Data-MemoCombinators.html#unit",
        "fct-type": "function",
        "title": "unit"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MemoCombinators",
        "module": "Data.MemoCombinators",
        "name": "unit",
        "normalized": "Memo()",
        "package": "data-memocombinators",
        "partial": "",
        "signature": "Memo()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-memocombinators/docs/Data-MemoCombinators.html#v:unsafeArrayRange",
      "description": {
        "fct-descr": "\u003cp\u003eBuild a memo table for a range using a flat array.  If items are\n given outside the range, behavior is undefined.\n\u003c/p\u003e",
        "fct-module": "Data.MemoCombinators",
        "fct-package": "data-memocombinators",
        "fct-signature": "RangeMemo a",
        "fct-source": "src/Data-MemoCombinators.html#unsafeArrayRange",
        "fct-type": "function",
        "title": "unsafeArrayRange"
      },
      "index": {
        "description": "Build memo table for range using flat array If items are given outside the range behavior is undefined",
        "hierarchy": "Data MemoCombinators",
        "module": "Data.MemoCombinators",
        "name": "unsafeArrayRange",
        "normalized": "",
        "package": "data-memocombinators",
        "partial": "Array Range",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-memocombinators/docs/Data-MemoCombinators.html#v:wrap",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a memoizer for a and an isomorphism between a and b, build\n a memoizer for b.\n\u003c/p\u003e",
        "fct-module": "Data.MemoCombinators",
        "fct-package": "data-memocombinators",
        "fct-signature": "(a -\u003e b) -\u003e (b -\u003e a) -\u003e Memo a -\u003e Memo b",
        "fct-source": "src/Data-MemoCombinators.html#wrap",
        "fct-type": "function",
        "title": "wrap"
      },
      "index": {
        "description": "Given memoizer for and an isomorphism between and build memoizer for",
        "hierarchy": "Data MemoCombinators",
        "module": "Data.MemoCombinators",
        "name": "wrap",
        "normalized": "(a-\u003eb)-\u003e(b-\u003ea)-\u003eMemo a-\u003eMemo b",
        "package": "data-memocombinators",
        "partial": "",
        "signature": "(a-\u003eb)-\u003e(b-\u003ea)-\u003eMemo a-\u003eMemo b"
      }
    }
  }
]