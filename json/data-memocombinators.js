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
        "word": "data-memocombinators"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MemoCombinators.Class",
          "name": "Class",
          "package": "data-memocombinators",
          "source": "src/Data-MemoCombinators-Class.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data MemoCombinators Class",
          "module": "Data.MemoCombinators.Class",
          "name": "Class",
          "package": "data-memocombinators",
          "partial": "Class",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/data-memocombinators/docs/Data-MemoCombinators-Class.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe class of types which have complete memo tables.\n\u003c/p\u003e",
          "module": "Data.MemoCombinators.Class",
          "name": "MemoTable",
          "package": "data-memocombinators",
          "source": "src/Data-MemoCombinators-Class.html#MemoTable",
          "type": "class"
        },
        "index": {
          "description": "The class of types which have complete memo tables",
          "hierarchy": "Data MemoCombinators Class",
          "module": "Data.MemoCombinators.Class",
          "name": "MemoTable",
          "package": "data-memocombinators",
          "partial": "Memo Table",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/data-memocombinators/docs/Data-MemoCombinators-Class.html#t:MemoTable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe class of functions which can be completely memoized.\n\u003c/p\u003e",
          "module": "Data.MemoCombinators.Class",
          "name": "Memoizable",
          "package": "data-memocombinators",
          "source": "src/Data-MemoCombinators-Class.html#Memoizable",
          "type": "class"
        },
        "index": {
          "description": "The class of functions which can be completely memoized",
          "hierarchy": "Data MemoCombinators Class",
          "module": "Data.MemoCombinators.Class",
          "name": "Memoizable",
          "package": "data-memocombinators",
          "partial": "Memoizable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/data-memocombinators/docs/Data-MemoCombinators-Class.html#t:Memoizable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MemoCombinators.Class",
          "name": "memoize",
          "package": "data-memocombinators",
          "signature": "a -\u003e a",
          "source": "src/Data-MemoCombinators-Class.html#memoize",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data MemoCombinators Class",
          "module": "Data.MemoCombinators.Class",
          "name": "memoize",
          "normalized": "a-\u003ea",
          "package": "data-memocombinators",
          "signature": "a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/data-memocombinators/docs/Data-MemoCombinators-Class.html#v:memoize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MemoCombinators.Class",
          "name": "table",
          "package": "data-memocombinators",
          "signature": "Memo a",
          "source": "src/Data-MemoCombinators-Class.html#table",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data MemoCombinators Class",
          "module": "Data.MemoCombinators.Class",
          "name": "table",
          "package": "data-memocombinators",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/data-memocombinators/docs/Data-MemoCombinators-Class.html#v:table"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides combinators for building memo tables\n over various data types, so that the type of table can\n be customized depending on the application.\n\u003c/p\u003e\u003cp\u003eThis module is designed to be imported \u003cem\u003equalified\u003c/em\u003e, eg.\n\u003c/p\u003e\u003cpre\u003e import qualified Data.MemoCombinators as Memo\n\u003c/pre\u003e\u003cp\u003eUsage is straightforward: apply an object of type \u003ccode\u003eMemo a\u003c/code\u003e\n to a function of type \u003ccode\u003ea -\u003e b\u003c/code\u003e, and get a memoized function\n of type \u003ccode\u003ea -\u003e b\u003c/code\u003e.  For example:\n\u003c/p\u003e\u003cpre\u003e fib = Memo.integral fib'\n    where\n    fib' 0 = 0\n    fib' 1 = 1\n    fib' x = fib (x-1) + fib (x-2)\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Data.MemoCombinators",
          "name": "MemoCombinators",
          "package": "data-memocombinators",
          "source": "src/Data-MemoCombinators.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides combinators for building memo tables over various data types so that the type of table can be customized depending on the application This module is designed to be imported qualified eg import qualified Data.MemoCombinators as Memo Usage is straightforward apply an object of type Memo to function of type and get memoized function of type For example fib Memo.integral fib where fib fib fib fib x-1 fib x-2",
          "hierarchy": "Data MemoCombinators",
          "module": "Data.MemoCombinators",
          "name": "MemoCombinators",
          "package": "data-memocombinators",
          "partial": "Memo Combinators",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/data-memocombinators/docs/Data-MemoCombinators.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of a memo table for functions of a.\n\u003c/p\u003e",
          "module": "Data.MemoCombinators",
          "name": "Memo",
          "package": "data-memocombinators",
          "source": "src/Data-MemoCombinators.html#Memo",
          "type": "type"
        },
        "index": {
          "description": "The type of memo table for functions of",
          "hierarchy": "Data MemoCombinators",
          "module": "Data.MemoCombinators",
          "name": "Memo",
          "package": "data-memocombinators",
          "partial": "Memo",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/data-memocombinators/docs/Data-MemoCombinators.html#t:Memo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of builders for ranged tables; takes a lower bound and an upper\n bound, and returns a memo table for that range.\n\u003c/p\u003e",
          "module": "Data.MemoCombinators",
          "name": "RangeMemo",
          "package": "data-memocombinators",
          "source": "src/Data-MemoCombinators.html#RangeMemo",
          "type": "type"
        },
        "index": {
          "description": "The type of builders for ranged tables takes lower bound and an upper bound and returns memo table for that range",
          "hierarchy": "Data MemoCombinators",
          "module": "Data.MemoCombinators",
          "name": "RangeMemo",
          "package": "data-memocombinators",
          "partial": "Range Memo",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/data-memocombinators/docs/Data-MemoCombinators.html#t:RangeMemo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuild a memo table for a range using a flat array.  If items are\n given outside the range, don't memoize.\n\u003c/p\u003e",
          "module": "Data.MemoCombinators",
          "name": "arrayRange",
          "package": "data-memocombinators",
          "signature": "RangeMemo a",
          "source": "src/Data-MemoCombinators.html#arrayRange",
          "type": "function"
        },
        "index": {
          "description": "Build memo table for range using flat array If items are given outside the range don memoize",
          "hierarchy": "Data MemoCombinators",
          "module": "Data.MemoCombinators",
          "name": "arrayRange",
          "package": "data-memocombinators",
          "partial": "Range",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-memocombinators/docs/Data-MemoCombinators.html#v:arrayRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMemoize an ordered type with a bits instance.\n\u003c/p\u003e",
          "module": "Data.MemoCombinators",
          "name": "bits",
          "package": "data-memocombinators",
          "signature": "Memo a",
          "source": "src/Data-MemoCombinators.html#bits",
          "type": "function"
        },
        "index": {
          "description": "Memoize an ordered type with bits instance",
          "hierarchy": "Data MemoCombinators",
          "module": "Data.MemoCombinators",
          "name": "bits",
          "package": "data-memocombinators",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-memocombinators/docs/Data-MemoCombinators.html#v:bits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MemoCombinators",
          "name": "bool",
          "package": "data-memocombinators",
          "signature": "Memo Bool",
          "source": "src/Data-MemoCombinators.html#bool",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MemoCombinators",
          "module": "Data.MemoCombinators",
          "name": "bool",
          "package": "data-memocombinators",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-memocombinators/docs/Data-MemoCombinators.html#v:bool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuild a table which memoizes all lists of less than the given length.\n\u003c/p\u003e",
          "module": "Data.MemoCombinators",
          "name": "boundedList",
          "package": "data-memocombinators",
          "signature": "Int -\u003e Memo a -\u003e Memo [a]",
          "source": "src/Data-MemoCombinators.html#boundedList",
          "type": "function"
        },
        "index": {
          "description": "Build table which memoizes all lists of less than the given length",
          "hierarchy": "Data MemoCombinators",
          "module": "Data.MemoCombinators",
          "name": "boundedList",
          "normalized": "Int-\u003eMemo a-\u003eMemo[a]",
          "package": "data-memocombinators",
          "partial": "List",
          "signature": "Int-\u003eMemo a-\u003eMemo[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-memocombinators/docs/Data-MemoCombinators.html#v:boundedList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MemoCombinators",
          "name": "char",
          "package": "data-memocombinators",
          "signature": "Memo Char",
          "source": "src/Data-MemoCombinators.html#char",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MemoCombinators",
          "module": "Data.MemoCombinators",
          "name": "char",
          "package": "data-memocombinators",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-memocombinators/docs/Data-MemoCombinators.html#v:char"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a list of ranges, (lazily) build a memo table for each one\n and combine them using linear search.\n\u003c/p\u003e",
          "module": "Data.MemoCombinators",
          "name": "chunks",
          "package": "data-memocombinators",
          "signature": "RangeMemo a -\u003e [(a, a)] -\u003e Memo a",
          "source": "src/Data-MemoCombinators.html#chunks",
          "type": "function"
        },
        "index": {
          "description": "Given list of ranges lazily build memo table for each one and combine them using linear search",
          "hierarchy": "Data MemoCombinators",
          "module": "Data.MemoCombinators",
          "name": "chunks",
          "normalized": "RangeMemo a-\u003e[(a,a)]-\u003eMemo a",
          "package": "data-memocombinators",
          "signature": "RangeMemo a-\u003e[(a,a)]-\u003eMemo a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-memocombinators/docs/Data-MemoCombinators.html#v:chunks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MemoCombinators",
          "name": "either",
          "package": "data-memocombinators",
          "signature": "Memo a -\u003e Memo b -\u003e Memo (Either a b)",
          "source": "src/Data-MemoCombinators.html#either",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MemoCombinators",
          "module": "Data.MemoCombinators",
          "name": "either",
          "normalized": "Memo a-\u003eMemo b-\u003eMemo(Either a b)",
          "package": "data-memocombinators",
          "signature": "Memo a-\u003eMemo b-\u003eMemo(Either a b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-memocombinators/docs/Data-MemoCombinators.html#v:either"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMemoize an enum type.\n\u003c/p\u003e",
          "module": "Data.MemoCombinators",
          "name": "enum",
          "package": "data-memocombinators",
          "signature": "Memo a",
          "source": "src/Data-MemoCombinators.html#enum",
          "type": "function"
        },
        "index": {
          "description": "Memoize an enum type",
          "hierarchy": "Data MemoCombinators",
          "module": "Data.MemoCombinators",
          "name": "enum",
          "package": "data-memocombinators",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-memocombinators/docs/Data-MemoCombinators.html#v:enum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMemoize an integral type.\n\u003c/p\u003e",
          "module": "Data.MemoCombinators",
          "name": "integral",
          "package": "data-memocombinators",
          "signature": "Memo a",
          "source": "src/Data-MemoCombinators.html#integral",
          "type": "function"
        },
        "index": {
          "description": "Memoize an integral type",
          "hierarchy": "Data MemoCombinators",
          "module": "Data.MemoCombinators",
          "name": "integral",
          "package": "data-memocombinators",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-memocombinators/docs/Data-MemoCombinators.html#v:integral"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MemoCombinators",
          "name": "list",
          "package": "data-memocombinators",
          "signature": "Memo a -\u003e Memo [a]",
          "source": "src/Data-MemoCombinators.html#list",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MemoCombinators",
          "module": "Data.MemoCombinators",
          "name": "list",
          "normalized": "Memo a-\u003eMemo[a]",
          "package": "data-memocombinators",
          "signature": "Memo a-\u003eMemo[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-memocombinators/docs/Data-MemoCombinators.html#v:list"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MemoCombinators",
          "name": "maybe",
          "package": "data-memocombinators",
          "signature": "Memo a -\u003e Memo (Maybe a)",
          "source": "src/Data-MemoCombinators.html#maybe",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MemoCombinators",
          "module": "Data.MemoCombinators",
          "name": "maybe",
          "normalized": "Memo a-\u003eMemo(Maybe a)",
          "package": "data-memocombinators",
          "signature": "Memo a-\u003eMemo(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-memocombinators/docs/Data-MemoCombinators.html#v:maybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMemoize a two argument function (just apply the table directly for\n single argument functions).\n\u003c/p\u003e",
          "module": "Data.MemoCombinators",
          "name": "memo2",
          "package": "data-memocombinators",
          "signature": "Memo a -\u003e Memo b -\u003e (a -\u003e b -\u003e r) -\u003e a -\u003e b -\u003e r",
          "source": "src/Data-MemoCombinators.html#memo2",
          "type": "function"
        },
        "index": {
          "description": "Memoize two argument function just apply the table directly for single argument functions",
          "hierarchy": "Data MemoCombinators",
          "module": "Data.MemoCombinators",
          "name": "memo2",
          "normalized": "Memo a-\u003eMemo b-\u003e(a-\u003eb-\u003ec)-\u003ea-\u003eb-\u003ec",
          "package": "data-memocombinators",
          "signature": "Memo a-\u003eMemo b-\u003e(a-\u003eb-\u003er)-\u003ea-\u003eb-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-memocombinators/docs/Data-MemoCombinators.html#v:memo2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMemoize a three argument function.\n\u003c/p\u003e",
          "module": "Data.MemoCombinators",
          "name": "memo3",
          "package": "data-memocombinators",
          "signature": "Memo a -\u003e Memo b -\u003e Memo c -\u003e (a -\u003e b -\u003e c -\u003e r) -\u003e a -\u003e b -\u003e c -\u003e r",
          "source": "src/Data-MemoCombinators.html#memo3",
          "type": "function"
        },
        "index": {
          "description": "Memoize three argument function",
          "hierarchy": "Data MemoCombinators",
          "module": "Data.MemoCombinators",
          "name": "memo3",
          "normalized": "Memo a-\u003eMemo b-\u003eMemo c-\u003e(a-\u003eb-\u003ec-\u003ed)-\u003ea-\u003eb-\u003ec-\u003ed",
          "package": "data-memocombinators",
          "signature": "Memo a-\u003eMemo b-\u003eMemo c-\u003e(a-\u003eb-\u003ec-\u003er)-\u003ea-\u003eb-\u003ec-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-memocombinators/docs/Data-MemoCombinators.html#v:memo3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMemoize the second argument of a function.\n\u003c/p\u003e",
          "module": "Data.MemoCombinators",
          "name": "memoSecond",
          "package": "data-memocombinators",
          "signature": "Memo b -\u003e (a -\u003e b -\u003e r) -\u003e a -\u003e b -\u003e r",
          "source": "src/Data-MemoCombinators.html#memoSecond",
          "type": "function"
        },
        "index": {
          "description": "Memoize the second argument of function",
          "hierarchy": "Data MemoCombinators",
          "module": "Data.MemoCombinators",
          "name": "memoSecond",
          "normalized": "Memo a-\u003e(b-\u003ea-\u003ec)-\u003eb-\u003ea-\u003ec",
          "package": "data-memocombinators",
          "partial": "Second",
          "signature": "Memo b-\u003e(a-\u003eb-\u003er)-\u003ea-\u003eb-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-memocombinators/docs/Data-MemoCombinators.html#v:memoSecond"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMemoize the third argument of a function.\n\u003c/p\u003e",
          "module": "Data.MemoCombinators",
          "name": "memoThird",
          "package": "data-memocombinators",
          "signature": "Memo c -\u003e (a -\u003e b -\u003e c -\u003e r) -\u003e a -\u003e b -\u003e c -\u003e r",
          "source": "src/Data-MemoCombinators.html#memoThird",
          "type": "function"
        },
        "index": {
          "description": "Memoize the third argument of function",
          "hierarchy": "Data MemoCombinators",
          "module": "Data.MemoCombinators",
          "name": "memoThird",
          "normalized": "Memo a-\u003e(b-\u003ec-\u003ea-\u003ed)-\u003eb-\u003ec-\u003ea-\u003ed",
          "package": "data-memocombinators",
          "partial": "Third",
          "signature": "Memo c-\u003e(a-\u003eb-\u003ec-\u003er)-\u003ea-\u003eb-\u003ec-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-memocombinators/docs/Data-MemoCombinators.html#v:memoThird"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MemoCombinators",
          "name": "pair",
          "package": "data-memocombinators",
          "signature": "Memo a -\u003e Memo b -\u003e Memo (a, b)",
          "source": "src/Data-MemoCombinators.html#pair",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MemoCombinators",
          "module": "Data.MemoCombinators",
          "name": "pair",
          "normalized": "Memo a-\u003eMemo b-\u003eMemo(a,b)",
          "package": "data-memocombinators",
          "signature": "Memo a-\u003eMemo b-\u003eMemo(a,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-memocombinators/docs/Data-MemoCombinators.html#v:pair"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eswitch p a b\u003c/code\u003e uses the memo table a whenever p gives\n true and the memo table b whenever p gives false.\n\u003c/p\u003e",
          "module": "Data.MemoCombinators",
          "name": "switch",
          "package": "data-memocombinators",
          "signature": "(a -\u003e Bool) -\u003e Memo a -\u003e Memo a -\u003e Memo a",
          "source": "src/Data-MemoCombinators.html#switch",
          "type": "function"
        },
        "index": {
          "description": "switch uses the memo table whenever gives true and the memo table whenever gives false",
          "hierarchy": "Data MemoCombinators",
          "module": "Data.MemoCombinators",
          "name": "switch",
          "normalized": "(a-\u003eBool)-\u003eMemo a-\u003eMemo a-\u003eMemo a",
          "package": "data-memocombinators",
          "signature": "(a-\u003eBool)-\u003eMemo a-\u003eMemo a-\u003eMemo a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-memocombinators/docs/Data-MemoCombinators.html#v:switch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MemoCombinators",
          "name": "unit",
          "package": "data-memocombinators",
          "signature": "Memo ()",
          "source": "src/Data-MemoCombinators.html#unit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MemoCombinators",
          "module": "Data.MemoCombinators",
          "name": "unit",
          "normalized": "Memo()",
          "package": "data-memocombinators",
          "signature": "Memo()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-memocombinators/docs/Data-MemoCombinators.html#v:unit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuild a memo table for a range using a flat array.  If items are\n given outside the range, behavior is undefined.\n\u003c/p\u003e",
          "module": "Data.MemoCombinators",
          "name": "unsafeArrayRange",
          "package": "data-memocombinators",
          "signature": "RangeMemo a",
          "source": "src/Data-MemoCombinators.html#unsafeArrayRange",
          "type": "function"
        },
        "index": {
          "description": "Build memo table for range using flat array If items are given outside the range behavior is undefined",
          "hierarchy": "Data MemoCombinators",
          "module": "Data.MemoCombinators",
          "name": "unsafeArrayRange",
          "package": "data-memocombinators",
          "partial": "Array Range",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-memocombinators/docs/Data-MemoCombinators.html#v:unsafeArrayRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a memoizer for a and an isomorphism between a and b, build\n a memoizer for b.\n\u003c/p\u003e",
          "module": "Data.MemoCombinators",
          "name": "wrap",
          "package": "data-memocombinators",
          "signature": "(a -\u003e b) -\u003e (b -\u003e a) -\u003e Memo a -\u003e Memo b",
          "source": "src/Data-MemoCombinators.html#wrap",
          "type": "function"
        },
        "index": {
          "description": "Given memoizer for and an isomorphism between and build memoizer for",
          "hierarchy": "Data MemoCombinators",
          "module": "Data.MemoCombinators",
          "name": "wrap",
          "normalized": "(a-\u003eb)-\u003e(b-\u003ea)-\u003eMemo a-\u003eMemo b",
          "package": "data-memocombinators",
          "signature": "(a-\u003eb)-\u003e(b-\u003ea)-\u003eMemo a-\u003eMemo b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-memocombinators/docs/Data-MemoCombinators.html#v:wrap"
      }
    }
  ]
]