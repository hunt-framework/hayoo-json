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
        "word": "fpnla-examples"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eOperations on lists.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.List",
          "name": "List",
          "package": "base",
          "source": "src/Data-List.html",
          "type": "module"
        },
        "index": {
          "description": "Operations on lists",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "List",
          "package": "base",
          "partial": "List",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/base/docs/Data-List.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList index (subscript) operator, starting from 0.\n It is an instance of the more general \u003ccode\u003e\u003ca\u003egenericIndex\u003c/a\u003e\u003c/code\u003e,\n which takes an index of any integral type.\n\u003c/p\u003e",
          "module": "Data.List",
          "name": "(!!)",
          "package": "base",
          "signature": "[a] -\u003e Int -\u003e a",
          "source": "src/GHC-List.html#%21%21",
          "type": "function"
        },
        "index": {
          "description": "List index subscript operator starting from It is an instance of the more general genericIndex which takes an index of any integral type",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "(!!) !!",
          "normalized": "[a]-\u003eInt-\u003ea",
          "package": "base",
          "signature": "[a]-\u003eInt-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/base/docs/Data-List.html#v:-33--33-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAppend two lists, i.e.,\n\u003c/p\u003e\u003cpre\u003e [x1, ..., xm] ++ [y1, ..., yn] == [x1, ..., xm, y1, ..., yn]\n [x1, ..., xm] ++ [y1, ...] == [x1, ..., xm, y1, ...]\n\u003c/pre\u003e\u003cp\u003eIf the first list is not finite, the result is the first list.\n\u003c/p\u003e",
          "module": "Data.List",
          "name": "(++)",
          "package": "base",
          "signature": "[a] -\u003e [a] -\u003e [a]",
          "source": "src/GHC-Base.html#%2B%2B",
          "type": "function"
        },
        "index": {
          "description": "Append two lists i.e x1 xm y1 yn x1 xm y1 yn x1 xm y1 x1 xm y1 If the first list is not finite the result is the first list",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "(++) ++",
          "normalized": "[a]-\u003e[a]-\u003e[a]",
          "package": "base",
          "signature": "[a]-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/base/docs/Data-List.html#v:-43--43-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003e\\\\\u003c/a\u003e\u003c/code\u003e function is list difference (non-associative).\n In the result of \u003ccode\u003exs\u003c/code\u003e \u003ccode\u003e\u003ca\u003e\\\\\u003c/a\u003e\u003c/code\u003e \u003ccode\u003eys\u003c/code\u003e, the first occurrence of each element of\n \u003ccode\u003eys\u003c/code\u003e in turn (if any) has been removed from \u003ccode\u003exs\u003c/code\u003e.  Thus\n\u003c/p\u003e\u003cpre\u003e (xs ++ ys) \\\\ xs == ys.\n\u003c/pre\u003e\u003cp\u003eIt is a special case of \u003ccode\u003e\u003ca\u003edeleteFirstsBy\u003c/a\u003e\u003c/code\u003e, which allows the programmer\n to supply their own equality test.\n\u003c/p\u003e",
          "module": "Data.List",
          "name": "(\\\\)",
          "package": "base",
          "signature": "[a] -\u003e [a] -\u003e [a]",
          "source": "src/Data-List.html#%5C%5C",
          "type": "function"
        },
        "index": {
          "description": "The function is list difference non-associative In the result of xs ys the first occurrence of each element of ys in turn if any has been removed from xs Thus xs ys xs ys It is special case of deleteFirstsBy which allows the programmer to supply their own equality test",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "(\\\\) \\\\",
          "normalized": "[a]-\u003e[a]-\u003e[a]",
          "package": "base",
          "signature": "[a]-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/base/docs/Data-List.html#v:-92--92-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApplied to a predicate and a list, \u003ccode\u003e\u003ca\u003eall\u003c/a\u003e\u003c/code\u003e determines if all elements\n of the list satisfy the predicate. For the result to be\n \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e, the list must be finite; \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e, however, results from a \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e\n value for the predicate applied to an element at a finite index of a finite or infinite list.\n\u003c/p\u003e",
          "module": "Data.List",
          "name": "all",
          "package": "base",
          "signature": "(a -\u003e Bool) -\u003e [a] -\u003e Bool",
          "source": "src/GHC-List.html#all",
          "type": "function"
        },
        "index": {
          "description": "Applied to predicate and list all determines if all elements of the list satisfy the predicate For the result to be True the list must be finite False however results from False value for the predicate applied to an element at finite index of finite or infinite list",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "all",
          "normalized": "(a-\u003eBool)-\u003e[a]-\u003eBool",
          "package": "base",
          "signature": "(a-\u003eBool)-\u003e[a]-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/base/docs/Data-List.html#v:all"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eand\u003c/a\u003e\u003c/code\u003e returns the conjunction of a Boolean list.  For the result to be\n \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e, the list must be finite; \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e, however, results from a \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e\n value at a finite index of a finite or infinite list.\n\u003c/p\u003e",
          "module": "Data.List",
          "name": "and",
          "package": "base",
          "signature": "[Bool] -\u003e Bool",
          "source": "src/GHC-List.html#and",
          "type": "function"
        },
        "index": {
          "description": "and returns the conjunction of Boolean list For the result to be True the list must be finite False however results from False value at finite index of finite or infinite list",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "and",
          "normalized": "[Bool]-\u003eBool",
          "package": "base",
          "signature": "[Bool]-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/base/docs/Data-List.html#v:and"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApplied to a predicate and a list, \u003ccode\u003e\u003ca\u003eany\u003c/a\u003e\u003c/code\u003e determines if any element\n of the list satisfies the predicate.  For the result to be\n \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e, the list must be finite; \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e, however, results from a \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e\n value for the predicate applied to an element at a finite index of a finite or infinite list.\n\u003c/p\u003e",
          "module": "Data.List",
          "name": "any",
          "package": "base",
          "signature": "(a -\u003e Bool) -\u003e [a] -\u003e Bool",
          "source": "src/GHC-List.html#any",
          "type": "function"
        },
        "index": {
          "description": "Applied to predicate and list any determines if any element of the list satisfies the predicate For the result to be False the list must be finite True however results from True value for the predicate applied to an element at finite index of finite or infinite list",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "any",
          "normalized": "(a-\u003eBool)-\u003e[a]-\u003eBool",
          "package": "base",
          "signature": "(a-\u003eBool)-\u003e[a]-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/base/docs/Data-List.html#v:any"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ebreak\u003c/a\u003e\u003c/code\u003e, applied to a predicate \u003ccode\u003ep\u003c/code\u003e and a list \u003ccode\u003exs\u003c/code\u003e, returns a tuple where\n first element is longest prefix (possibly empty) of \u003ccode\u003exs\u003c/code\u003e of elements that\n \u003cem\u003edo not satisfy\u003c/em\u003e \u003ccode\u003ep\u003c/code\u003e and second element is the remainder of the list:\n\u003c/p\u003e\u003cpre\u003e break (\u003e 3) [1,2,3,4,1,2,3,4] == ([1,2,3],[4,1,2,3,4])\n break (\u003c 9) [1,2,3] == ([],[1,2,3])\n break (\u003e 9) [1,2,3] == ([1,2,3],[])\n\u003c/pre\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003ebreak\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ep\u003c/code\u003e is equivalent to \u003ccode\u003e\u003ccode\u003e\u003ca\u003espan\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003enot\u003c/a\u003e\u003c/code\u003e . p)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.List",
          "name": "break",
          "package": "base",
          "signature": "(a -\u003e Bool) -\u003e [a] -\u003e ([a], [a])",
          "source": "src/GHC-List.html#break",
          "type": "function"
        },
        "index": {
          "description": "break applied to predicate and list xs returns tuple where first element is longest prefix possibly empty of xs of elements that do not satisfy and second element is the remainder of the list break break break break is equivalent to span not",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "break",
          "normalized": "(a-\u003eBool)-\u003e[a]-\u003e([a],[a])",
          "package": "base",
          "signature": "(a-\u003eBool)-\u003e[a]-\u003e([a],[a])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/base/docs/Data-List.html#v:break"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConcatenate a list of lists.\n\u003c/p\u003e",
          "module": "Data.List",
          "name": "concat",
          "package": "base",
          "signature": "[[a]] -\u003e [a]",
          "source": "src/GHC-List.html#concat",
          "type": "function"
        },
        "index": {
          "description": "Concatenate list of lists",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "concat",
          "normalized": "[[a]]-\u003e[a]",
          "package": "base",
          "signature": "[[a]]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/base/docs/Data-List.html#v:concat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap a function over a list and concatenate the results.\n\u003c/p\u003e",
          "module": "Data.List",
          "name": "concatMap",
          "package": "base",
          "signature": "(a -\u003e [b]) -\u003e [a] -\u003e [b]",
          "source": "src/GHC-List.html#concatMap",
          "type": "function"
        },
        "index": {
          "description": "Map function over list and concatenate the results",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "concatMap",
          "normalized": "(a-\u003e[b])-\u003e[a]-\u003e[b]",
          "package": "base",
          "partial": "Map",
          "signature": "(a-\u003e[b])-\u003e[a]-\u003e[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/base/docs/Data-List.html#v:concatMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ecycle\u003c/a\u003e\u003c/code\u003e ties a finite list into a circular one, or equivalently,\n the infinite repetition of the original list.  It is the identity\n on infinite lists.\n\u003c/p\u003e",
          "module": "Data.List",
          "name": "cycle",
          "package": "base",
          "signature": "[a] -\u003e [a]",
          "source": "src/GHC-List.html#cycle",
          "type": "function"
        },
        "index": {
          "description": "cycle ties finite list into circular one or equivalently the infinite repetition of the original list It is the identity on infinite lists",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "cycle",
          "normalized": "[a]-\u003e[a]",
          "package": "base",
          "signature": "[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/base/docs/Data-List.html#v:cycle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003edelete\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ex\u003c/code\u003e removes the first occurrence of \u003ccode\u003ex\u003c/code\u003e from its list argument.\n For example,\n\u003c/p\u003e\u003cpre\u003e delete 'a' \"banana\" == \"bnana\"\n\u003c/pre\u003e\u003cp\u003eIt is a special case of \u003ccode\u003e\u003ca\u003edeleteBy\u003c/a\u003e\u003c/code\u003e, which allows the programmer to\n supply their own equality test.\n\u003c/p\u003e",
          "module": "Data.List",
          "name": "delete",
          "package": "base",
          "signature": "a -\u003e [a] -\u003e [a]",
          "source": "src/Data-List.html#delete",
          "type": "function"
        },
        "index": {
          "description": "delete removes the first occurrence of from its list argument For example delete banana bnana It is special case of deleteBy which allows the programmer to supply their own equality test",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "delete",
          "normalized": "a-\u003e[a]-\u003e[a]",
          "package": "base",
          "signature": "a-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/base/docs/Data-List.html#v:delete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003edeleteBy\u003c/a\u003e\u003c/code\u003e function behaves like \u003ccode\u003e\u003ca\u003edelete\u003c/a\u003e\u003c/code\u003e, but takes a\n user-supplied equality predicate.\n\u003c/p\u003e",
          "module": "Data.List",
          "name": "deleteBy",
          "package": "base",
          "signature": "(a -\u003e a -\u003e Bool) -\u003e a -\u003e [a] -\u003e [a]",
          "source": "src/Data-List.html#deleteBy",
          "type": "function"
        },
        "index": {
          "description": "The deleteBy function behaves like delete but takes user-supplied equality predicate",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "deleteBy",
          "normalized": "(a-\u003ea-\u003eBool)-\u003ea-\u003e[a]-\u003e[a]",
          "package": "base",
          "partial": "By",
          "signature": "(a-\u003ea-\u003eBool)-\u003ea-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/base/docs/Data-List.html#v:deleteBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003edeleteFirstsBy\u003c/a\u003e\u003c/code\u003e function takes a predicate and two lists and\n returns the first list with the first occurrence of each element of\n the second list removed.\n\u003c/p\u003e",
          "module": "Data.List",
          "name": "deleteFirstsBy",
          "package": "base",
          "signature": "(a -\u003e a -\u003e Bool) -\u003e [a] -\u003e [a] -\u003e [a]",
          "source": "src/Data-List.html#deleteFirstsBy",
          "type": "function"
        },
        "index": {
          "description": "The deleteFirstsBy function takes predicate and two lists and returns the first list with the first occurrence of each element of the second list removed",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "deleteFirstsBy",
          "normalized": "(a-\u003ea-\u003eBool)-\u003e[a]-\u003e[a]-\u003e[a]",
          "package": "base",
          "partial": "Firsts By",
          "signature": "(a-\u003ea-\u003eBool)-\u003e[a]-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/base/docs/Data-List.html#v:deleteFirstsBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003edrop\u003c/a\u003e\u003c/code\u003e \u003ccode\u003en xs\u003c/code\u003e returns the suffix of \u003ccode\u003exs\u003c/code\u003e\n after the first \u003ccode\u003en\u003c/code\u003e elements, or \u003ccode\u003e[]\u003c/code\u003e if \u003ccode\u003en \u003e \u003ccode\u003e\u003ca\u003elength\u003c/a\u003e\u003c/code\u003e xs\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e drop 6 \"Hello World!\" == \"World!\"\n drop 3 [1,2,3,4,5] == [4,5]\n drop 3 [1,2] == []\n drop 3 [] == []\n drop (-1) [1,2] == [1,2]\n drop 0 [1,2] == [1,2]\n\u003c/pre\u003e\u003cp\u003eIt is an instance of the more general \u003ccode\u003e\u003ca\u003egenericDrop\u003c/a\u003e\u003c/code\u003e,\n in which \u003ccode\u003en\u003c/code\u003e may be of any integral type.\n\u003c/p\u003e",
          "module": "Data.List",
          "name": "drop",
          "package": "base",
          "signature": "Int -\u003e [a] -\u003e [a]",
          "source": "src/GHC-List.html#drop",
          "type": "function"
        },
        "index": {
          "description": "drop xs returns the suffix of xs after the first elements or if length xs drop Hello World World drop drop drop drop drop It is an instance of the more general genericDrop in which may be of any integral type",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "drop",
          "normalized": "Int-\u003e[a]-\u003e[a]",
          "package": "base",
          "signature": "Int-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/base/docs/Data-List.html#v:drop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003edropWhile\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ep xs\u003c/code\u003e returns the suffix remaining after \u003ccode\u003e\u003ca\u003etakeWhile\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ep xs\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e dropWhile (\u003c 3) [1,2,3,4,5,1,2,3] == [3,4,5,1,2,3]\n dropWhile (\u003c 9) [1,2,3] == []\n dropWhile (\u003c 0) [1,2,3] == [1,2,3]\n\u003c/pre\u003e",
          "module": "Data.List",
          "name": "dropWhile",
          "package": "base",
          "signature": "(a -\u003e Bool) -\u003e [a] -\u003e [a]",
          "source": "src/GHC-List.html#dropWhile",
          "type": "function"
        },
        "index": {
          "description": "dropWhile xs returns the suffix remaining after takeWhile xs dropWhile dropWhile dropWhile",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "dropWhile",
          "normalized": "(a-\u003eBool)-\u003e[a]-\u003e[a]",
          "package": "base",
          "partial": "While",
          "signature": "(a-\u003eBool)-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/base/docs/Data-List.html#v:dropWhile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003edropWhileEnd\u003c/a\u003e\u003c/code\u003e function drops the largest suffix of a list\n in which the given predicate holds for all elements.  For example:\n\u003c/p\u003e\u003cpre\u003e dropWhileEnd isSpace \"foo\\n\" == \"foo\"\n dropWhileEnd isSpace \"foo bar\" == \"foo bar\"\n dropWhileEnd isSpace (\"foo\\n\" ++ undefined) == \"foo\" ++ undefined\n\u003c/pre\u003e",
          "module": "Data.List",
          "name": "dropWhileEnd",
          "package": "base",
          "signature": "(a -\u003e Bool) -\u003e [a] -\u003e [a]",
          "source": "src/Data-List.html#dropWhileEnd",
          "type": "function"
        },
        "index": {
          "description": "The dropWhileEnd function drops the largest suffix of list in which the given predicate holds for all elements For example dropWhileEnd isSpace foo foo dropWhileEnd isSpace foo bar foo bar dropWhileEnd isSpace foo undefined foo undefined",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "dropWhileEnd",
          "normalized": "(a-\u003eBool)-\u003e[a]-\u003e[a]",
          "package": "base",
          "partial": "While End",
          "signature": "(a-\u003eBool)-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/base/docs/Data-List.html#v:dropWhileEnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eelem\u003c/a\u003e\u003c/code\u003e is the list membership predicate, usually written in infix form,\n e.g., \u003ccode\u003ex `elem` xs\u003c/code\u003e.  For the result to be\n \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e, the list must be finite; \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e, however, results from an element equal to \u003ccode\u003ex\u003c/code\u003e found at a finite index of a finite or infinite list.\n\u003c/p\u003e",
          "module": "Data.List",
          "name": "elem",
          "package": "base",
          "signature": "a -\u003e [a] -\u003e Bool",
          "source": "src/GHC-List.html#elem",
          "type": "function"
        },
        "index": {
          "description": "elem is the list membership predicate usually written in infix form e.g elem xs For the result to be False the list must be finite True however results from an element equal to found at finite index of finite or infinite list",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "elem",
          "normalized": "a-\u003e[a]-\u003eBool",
          "package": "base",
          "signature": "a-\u003e[a]-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/base/docs/Data-List.html#v:elem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eelemIndex\u003c/a\u003e\u003c/code\u003e function returns the index of the first element\n in the given list which is equal (by \u003ccode\u003e\u003ca\u003e==\u003c/a\u003e\u003c/code\u003e) to the query element,\n or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if there is no such element.\n\u003c/p\u003e",
          "module": "Data.List",
          "name": "elemIndex",
          "package": "base",
          "signature": "a -\u003e [a] -\u003e Maybe Int",
          "source": "src/Data-List.html#elemIndex",
          "type": "function"
        },
        "index": {
          "description": "The elemIndex function returns the index of the first element in the given list which is equal by to the query element or Nothing if there is no such element",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "elemIndex",
          "normalized": "a-\u003e[a]-\u003eMaybe Int",
          "package": "base",
          "partial": "Index",
          "signature": "a-\u003e[a]-\u003eMaybe Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/base/docs/Data-List.html#v:elemIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eelemIndices\u003c/a\u003e\u003c/code\u003e function extends \u003ccode\u003e\u003ca\u003eelemIndex\u003c/a\u003e\u003c/code\u003e, by returning the\n indices of all elements equal to the query element, in ascending order.\n\u003c/p\u003e",
          "module": "Data.List",
          "name": "elemIndices",
          "package": "base",
          "signature": "a -\u003e [a] -\u003e [Int]",
          "source": "src/Data-List.html#elemIndices",
          "type": "function"
        },
        "index": {
          "description": "The elemIndices function extends elemIndex by returning the indices of all elements equal to the query element in ascending order",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "elemIndices",
          "normalized": "a-\u003e[a]-\u003e[Int]",
          "package": "base",
          "partial": "Indices",
          "signature": "a-\u003e[a]-\u003e[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/base/docs/Data-List.html#v:elemIndices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003efilter\u003c/a\u003e\u003c/code\u003e, applied to a predicate and a list, returns the list of\n those elements that satisfy the predicate; i.e.,\n\u003c/p\u003e\u003cpre\u003e filter p xs = [ x | x \u003c- xs, p x]\n\u003c/pre\u003e",
          "module": "Data.List",
          "name": "filter",
          "package": "base",
          "signature": "(a -\u003e Bool) -\u003e [a] -\u003e [a]",
          "source": "src/GHC-List.html#filter",
          "type": "function"
        },
        "index": {
          "description": "filter applied to predicate and list returns the list of those elements that satisfy the predicate i.e filter xs xs",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "filter",
          "normalized": "(a-\u003eBool)-\u003e[a]-\u003e[a]",
          "package": "base",
          "signature": "(a-\u003eBool)-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/base/docs/Data-List.html#v:filter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003efind\u003c/a\u003e\u003c/code\u003e function takes a predicate and a list and returns the\n first element in the list matching the predicate, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if\n there is no such element.\n\u003c/p\u003e",
          "module": "Data.List",
          "name": "find",
          "package": "base",
          "signature": "(a -\u003e Bool) -\u003e [a] -\u003e Maybe a",
          "source": "src/Data-List.html#find",
          "type": "function"
        },
        "index": {
          "description": "The find function takes predicate and list and returns the first element in the list matching the predicate or Nothing if there is no such element",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "find",
          "normalized": "(a-\u003eBool)-\u003e[a]-\u003eMaybe a",
          "package": "base",
          "signature": "(a-\u003eBool)-\u003e[a]-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/base/docs/Data-List.html#v:find"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003efindIndex\u003c/a\u003e\u003c/code\u003e function takes a predicate and a list and returns\n the index of the first element in the list satisfying the predicate,\n or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if there is no such element.\n\u003c/p\u003e",
          "module": "Data.List",
          "name": "findIndex",
          "package": "base",
          "signature": "(a -\u003e Bool) -\u003e [a] -\u003e Maybe Int",
          "source": "src/Data-List.html#findIndex",
          "type": "function"
        },
        "index": {
          "description": "The findIndex function takes predicate and list and returns the index of the first element in the list satisfying the predicate or Nothing if there is no such element",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "findIndex",
          "normalized": "(a-\u003eBool)-\u003e[a]-\u003eMaybe Int",
          "package": "base",
          "partial": "Index",
          "signature": "(a-\u003eBool)-\u003e[a]-\u003eMaybe Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/base/docs/Data-List.html#v:findIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003efindIndices\u003c/a\u003e\u003c/code\u003e function extends \u003ccode\u003e\u003ca\u003efindIndex\u003c/a\u003e\u003c/code\u003e, by returning the\n indices of all elements satisfying the predicate, in ascending order.\n\u003c/p\u003e",
          "module": "Data.List",
          "name": "findIndices",
          "package": "base",
          "signature": "(a -\u003e Bool) -\u003e [a] -\u003e [Int]",
          "source": "src/Data-List.html#findIndices",
          "type": "function"
        },
        "index": {
          "description": "The findIndices function extends findIndex by returning the indices of all elements satisfying the predicate in ascending order",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "findIndices",
          "normalized": "(a-\u003eBool)-\u003e[a]-\u003e[Int]",
          "package": "base",
          "partial": "Indices",
          "signature": "(a-\u003eBool)-\u003e[a]-\u003e[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/base/docs/Data-List.html#v:findIndices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e, applied to a binary operator, a starting value (typically\n the left-identity of the operator), and a list, reduces the list\n using the binary operator, from left to right:\n\u003c/p\u003e\u003cpre\u003e foldl f z [x1, x2, ..., xn] == (...((z `f` x1) `f` x2) `f`...) `f` xn\n\u003c/pre\u003e\u003cp\u003eThe list must be finite.\n\u003c/p\u003e",
          "module": "Data.List",
          "name": "foldl",
          "package": "base",
          "signature": "(a -\u003e b -\u003e a) -\u003e a -\u003e [b] -\u003e a",
          "source": "src/GHC-List.html#foldl",
          "type": "function"
        },
        "index": {
          "description": "foldl applied to binary operator starting value typically the left-identity of the operator and list reduces the list using the binary operator from left to right foldl x1 x2 xn x1 x2 xn The list must be finite",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "foldl",
          "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003e[b]-\u003ea",
          "package": "base",
          "signature": "(a-\u003eb-\u003ea)-\u003ea-\u003e[b]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/base/docs/Data-List.html#v:foldl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA strict version of \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.List",
          "name": "foldl'",
          "package": "base",
          "signature": "(a -\u003e b -\u003e a) -\u003e a -\u003e [b] -\u003e a",
          "source": "src/Data-List.html#foldl%27",
          "type": "function"
        },
        "index": {
          "description": "strict version of foldl",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "foldl'",
          "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003e[b]-\u003ea",
          "package": "base",
          "signature": "(a-\u003eb-\u003ea)-\u003ea-\u003e[b]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/base/docs/Data-List.html#v:foldl-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003efoldl1\u003c/a\u003e\u003c/code\u003e is a variant of \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e that has no starting value argument,\n and thus must be applied to non-empty lists.\n\u003c/p\u003e",
          "module": "Data.List",
          "name": "foldl1",
          "package": "base",
          "signature": "(a -\u003e a -\u003e a) -\u003e [a] -\u003e a",
          "source": "src/Data-List.html#foldl1",
          "type": "function"
        },
        "index": {
          "description": "foldl1 is variant of foldl that has no starting value argument and thus must be applied to non-empty lists",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "foldl1",
          "normalized": "(a-\u003ea-\u003ea)-\u003e[a]-\u003ea",
          "package": "base",
          "signature": "(a-\u003ea-\u003ea)-\u003e[a]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/base/docs/Data-List.html#v:foldl1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA strict version of \u003ccode\u003e\u003ca\u003efoldl1\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.List",
          "name": "foldl1'",
          "package": "base",
          "signature": "(a -\u003e a -\u003e a) -\u003e [a] -\u003e a",
          "source": "src/Data-List.html#foldl1%27",
          "type": "function"
        },
        "index": {
          "description": "strict version of foldl1",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "foldl1'",
          "normalized": "(a-\u003ea-\u003ea)-\u003e[a]-\u003ea",
          "package": "base",
          "signature": "(a-\u003ea-\u003ea)-\u003e[a]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/base/docs/Data-List.html#v:foldl1-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e, applied to a binary operator, a starting value (typically\n the right-identity of the operator), and a list, reduces the list\n using the binary operator, from right to left:\n\u003c/p\u003e\u003cpre\u003e foldr f z [x1, x2, ..., xn] == x1 `f` (x2 `f` ... (xn `f` z)...)\n\u003c/pre\u003e",
          "module": "Data.List",
          "name": "foldr",
          "package": "base",
          "signature": "(a -\u003e b -\u003e b) -\u003e b -\u003e [a] -\u003e b",
          "source": "src/GHC-Base.html#foldr",
          "type": "function"
        },
        "index": {
          "description": "foldr applied to binary operator starting value typically the right-identity of the operator and list reduces the list using the binary operator from right to left foldr x1 x2 xn x1 x2 xn",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "foldr",
          "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003e[a]-\u003eb",
          "package": "base",
          "signature": "(a-\u003eb-\u003eb)-\u003eb-\u003e[a]-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/base/docs/Data-List.html#v:foldr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003efoldr1\u003c/a\u003e\u003c/code\u003e is a variant of \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e that has no starting value argument,\n and thus must be applied to non-empty lists.\n\u003c/p\u003e",
          "module": "Data.List",
          "name": "foldr1",
          "package": "base",
          "signature": "(a -\u003e a -\u003e a) -\u003e [a] -\u003e a",
          "source": "src/GHC-List.html#foldr1",
          "type": "function"
        },
        "index": {
          "description": "foldr1 is variant of foldr that has no starting value argument and thus must be applied to non-empty lists",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "foldr1",
          "normalized": "(a-\u003ea-\u003ea)-\u003e[a]-\u003ea",
          "package": "base",
          "signature": "(a-\u003ea-\u003ea)-\u003e[a]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/base/docs/Data-List.html#v:foldr1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003egenericDrop\u003c/a\u003e\u003c/code\u003e function is an overloaded version of \u003ccode\u003e\u003ca\u003edrop\u003c/a\u003e\u003c/code\u003e, which\n accepts any \u003ccode\u003e\u003ca\u003eIntegral\u003c/a\u003e\u003c/code\u003e value as the number of elements to drop.\n\u003c/p\u003e",
          "module": "Data.List",
          "name": "genericDrop",
          "package": "base",
          "signature": "i -\u003e [a] -\u003e [a]",
          "source": "src/Data-List.html#genericDrop",
          "type": "function"
        },
        "index": {
          "description": "The genericDrop function is an overloaded version of drop which accepts any Integral value as the number of elements to drop",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "genericDrop",
          "normalized": "a-\u003e[b]-\u003e[b]",
          "package": "base",
          "partial": "Drop",
          "signature": "i-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/base/docs/Data-List.html#v:genericDrop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003egenericIndex\u003c/a\u003e\u003c/code\u003e function is an overloaded version of \u003ccode\u003e\u003ca\u003e!!\u003c/a\u003e\u003c/code\u003e, which\n accepts any \u003ccode\u003e\u003ca\u003eIntegral\u003c/a\u003e\u003c/code\u003e value as the index.\n\u003c/p\u003e",
          "module": "Data.List",
          "name": "genericIndex",
          "package": "base",
          "signature": "[b] -\u003e a -\u003e b",
          "source": "src/Data-List.html#genericIndex",
          "type": "function"
        },
        "index": {
          "description": "The genericIndex function is an overloaded version of which accepts any Integral value as the index",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "genericIndex",
          "normalized": "[a]-\u003eb-\u003ea",
          "package": "base",
          "partial": "Index",
          "signature": "[b]-\u003ea-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/base/docs/Data-List.html#v:genericIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003egenericLength\u003c/a\u003e\u003c/code\u003e function is an overloaded version of \u003ccode\u003e\u003ca\u003elength\u003c/a\u003e\u003c/code\u003e.  In\n particular, instead of returning an \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e, it returns any type which is\n an instance of \u003ccode\u003e\u003ca\u003eNum\u003c/a\u003e\u003c/code\u003e.  It is, however, less efficient than \u003ccode\u003e\u003ca\u003elength\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.List",
          "name": "genericLength",
          "package": "base",
          "signature": "[b] -\u003e i",
          "source": "src/Data-List.html#genericLength",
          "type": "function"
        },
        "index": {
          "description": "The genericLength function is an overloaded version of length In particular instead of returning an Int it returns any type which is an instance of Num It is however less efficient than length",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "genericLength",
          "normalized": "[a]-\u003eb",
          "package": "base",
          "partial": "Length",
          "signature": "[b]-\u003ei",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/base/docs/Data-List.html#v:genericLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003egenericReplicate\u003c/a\u003e\u003c/code\u003e function is an overloaded version of \u003ccode\u003e\u003ca\u003ereplicate\u003c/a\u003e\u003c/code\u003e,\n which accepts any \u003ccode\u003e\u003ca\u003eIntegral\u003c/a\u003e\u003c/code\u003e value as the number of repetitions to make.\n\u003c/p\u003e",
          "module": "Data.List",
          "name": "genericReplicate",
          "package": "base",
          "signature": "i -\u003e a -\u003e [a]",
          "source": "src/Data-List.html#genericReplicate",
          "type": "function"
        },
        "index": {
          "description": "The genericReplicate function is an overloaded version of replicate which accepts any Integral value as the number of repetitions to make",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "genericReplicate",
          "normalized": "a-\u003eb-\u003e[b]",
          "package": "base",
          "partial": "Replicate",
          "signature": "i-\u003ea-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/base/docs/Data-List.html#v:genericReplicate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003egenericSplitAt\u003c/a\u003e\u003c/code\u003e function is an overloaded version of \u003ccode\u003e\u003ca\u003esplitAt\u003c/a\u003e\u003c/code\u003e, which\n accepts any \u003ccode\u003e\u003ca\u003eIntegral\u003c/a\u003e\u003c/code\u003e value as the position at which to split.\n\u003c/p\u003e",
          "module": "Data.List",
          "name": "genericSplitAt",
          "package": "base",
          "signature": "i -\u003e [b] -\u003e ([b], [b])",
          "source": "src/Data-List.html#genericSplitAt",
          "type": "function"
        },
        "index": {
          "description": "The genericSplitAt function is an overloaded version of splitAt which accepts any Integral value as the position at which to split",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "genericSplitAt",
          "normalized": "a-\u003e[b]-\u003e([b],[b])",
          "package": "base",
          "partial": "Split At",
          "signature": "i-\u003e[b]-\u003e([b],[b])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/base/docs/Data-List.html#v:genericSplitAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003egenericTake\u003c/a\u003e\u003c/code\u003e function is an overloaded version of \u003ccode\u003e\u003ca\u003etake\u003c/a\u003e\u003c/code\u003e, which\n accepts any \u003ccode\u003e\u003ca\u003eIntegral\u003c/a\u003e\u003c/code\u003e value as the number of elements to take.\n\u003c/p\u003e",
          "module": "Data.List",
          "name": "genericTake",
          "package": "base",
          "signature": "i -\u003e [a] -\u003e [a]",
          "source": "src/Data-List.html#genericTake",
          "type": "function"
        },
        "index": {
          "description": "The genericTake function is an overloaded version of take which accepts any Integral value as the number of elements to take",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "genericTake",
          "normalized": "a-\u003e[b]-\u003e[b]",
          "package": "base",
          "partial": "Take",
          "signature": "i-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/base/docs/Data-List.html#v:genericTake"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003egroup\u003c/a\u003e\u003c/code\u003e function takes a list and returns a list of lists such\n that the concatenation of the result is equal to the argument.  Moreover,\n each sublist in the result contains only equal elements.  For example,\n\u003c/p\u003e\u003cpre\u003e group \"Mississippi\" = [\"M\",\"i\",\"ss\",\"i\",\"ss\",\"i\",\"pp\",\"i\"]\n\u003c/pre\u003e\u003cp\u003eIt is a special case of \u003ccode\u003e\u003ca\u003egroupBy\u003c/a\u003e\u003c/code\u003e, which allows the programmer to supply\n their own equality test.\n\u003c/p\u003e",
          "module": "Data.List",
          "name": "group",
          "package": "base",
          "signature": "[a] -\u003e [[a]]",
          "source": "src/Data-List.html#group",
          "type": "function"
        },
        "index": {
          "description": "The group function takes list and returns list of lists such that the concatenation of the result is equal to the argument Moreover each sublist in the result contains only equal elements For example group Mississippi ss ss pp It is special case of groupBy which allows the programmer to supply their own equality test",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "group",
          "normalized": "[a]-\u003e[[a]]",
          "package": "base",
          "signature": "[a]-\u003e[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/base/docs/Data-List.html#v:group"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003egroupBy\u003c/a\u003e\u003c/code\u003e function is the non-overloaded version of \u003ccode\u003e\u003ca\u003egroup\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.List",
          "name": "groupBy",
          "package": "base",
          "signature": "(a -\u003e a -\u003e Bool) -\u003e [a] -\u003e [[a]]",
          "source": "src/Data-List.html#groupBy",
          "type": "function"
        },
        "index": {
          "description": "The groupBy function is the non-overloaded version of group",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "groupBy",
          "normalized": "(a-\u003ea-\u003eBool)-\u003e[a]-\u003e[[a]]",
          "package": "base",
          "partial": "By",
          "signature": "(a-\u003ea-\u003eBool)-\u003e[a]-\u003e[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/base/docs/Data-List.html#v:groupBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the first element of a list, which must be non-empty.\n\u003c/p\u003e",
          "module": "Data.List",
          "name": "head",
          "package": "base",
          "signature": "[a] -\u003e a",
          "source": "src/GHC-List.html#head",
          "type": "function"
        },
        "index": {
          "description": "Extract the first element of list which must be non-empty",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "head",
          "normalized": "[a]-\u003ea",
          "package": "base",
          "signature": "[a]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/base/docs/Data-List.html#v:head"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn all the elements of a list except the last one.\n The list must be non-empty.\n\u003c/p\u003e",
          "module": "Data.List",
          "name": "init",
          "package": "base",
          "signature": "[a] -\u003e [a]",
          "source": "src/GHC-List.html#init",
          "type": "function"
        },
        "index": {
          "description": "Return all the elements of list except the last one The list must be non-empty",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "init",
          "normalized": "[a]-\u003e[a]",
          "package": "base",
          "signature": "[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/base/docs/Data-List.html#v:init"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003einits\u003c/a\u003e\u003c/code\u003e function returns all initial segments of the argument,\n shortest first.  For example,\n\u003c/p\u003e\u003cpre\u003e inits \"abc\" == [\"\",\"a\",\"ab\",\"abc\"]\n\u003c/pre\u003e\u003cp\u003eNote that \u003ccode\u003e\u003ca\u003einits\u003c/a\u003e\u003c/code\u003e has the following strictness property:\n \u003ccode\u003einits _|_ = [] : _|_\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.List",
          "name": "inits",
          "package": "base",
          "signature": "[a] -\u003e [[a]]",
          "source": "src/Data-List.html#inits",
          "type": "function"
        },
        "index": {
          "description": "The inits function returns all initial segments of the argument shortest first For example inits abc ab abc Note that inits has the following strictness property inits",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "inits",
          "normalized": "[a]-\u003e[[a]]",
          "package": "base",
          "signature": "[a]-\u003e[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/base/docs/Data-List.html#v:inits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003einsert\u003c/a\u003e\u003c/code\u003e function takes an element and a list and inserts the\n element into the list at the first position where it is less\n than or equal to the next element.  In particular, if the list\n is sorted before the call, the result will also be sorted.\n It is a special case of \u003ccode\u003e\u003ca\u003einsertBy\u003c/a\u003e\u003c/code\u003e, which allows the programmer to\n supply their own comparison function.\n\u003c/p\u003e",
          "module": "Data.List",
          "name": "insert",
          "package": "base",
          "signature": "a -\u003e [a] -\u003e [a]",
          "source": "src/Data-List.html#insert",
          "type": "function"
        },
        "index": {
          "description": "The insert function takes an element and list and inserts the element into the list at the first position where it is less than or equal to the next element In particular if the list is sorted before the call the result will also be sorted It is special case of insertBy which allows the programmer to supply their own comparison function",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "insert",
          "normalized": "a-\u003e[a]-\u003e[a]",
          "package": "base",
          "signature": "a-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/base/docs/Data-List.html#v:insert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe non-overloaded version of \u003ccode\u003e\u003ca\u003einsert\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.List",
          "name": "insertBy",
          "package": "base",
          "signature": "(a -\u003e a -\u003e Ordering) -\u003e a -\u003e [a] -\u003e [a]",
          "source": "src/Data-List.html#insertBy",
          "type": "function"
        },
        "index": {
          "description": "The non-overloaded version of insert",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "insertBy",
          "normalized": "(a-\u003ea-\u003eOrdering)-\u003ea-\u003e[a]-\u003e[a]",
          "package": "base",
          "partial": "By",
          "signature": "(a-\u003ea-\u003eOrdering)-\u003ea-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/base/docs/Data-List.html#v:insertBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eintercalate\u003c/a\u003e\u003c/code\u003e \u003ccode\u003exs xss\u003c/code\u003e is equivalent to \u003ccode\u003e(\u003ccode\u003e\u003ca\u003econcat\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eintersperse\u003c/a\u003e\u003c/code\u003e xs xss))\u003c/code\u003e.\n It inserts the list \u003ccode\u003exs\u003c/code\u003e in between the lists in \u003ccode\u003exss\u003c/code\u003e and concatenates the\n result.\n\u003c/p\u003e",
          "module": "Data.List",
          "name": "intercalate",
          "package": "base",
          "signature": "[a] -\u003e [[a]] -\u003e [a]",
          "source": "src/Data-List.html#intercalate",
          "type": "function"
        },
        "index": {
          "description": "intercalate xs xss is equivalent to concat intersperse xs xss It inserts the list xs in between the lists in xss and concatenates the result",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "intercalate",
          "normalized": "[a]-\u003e[[a]]-\u003e[a]",
          "package": "base",
          "signature": "[a]-\u003e[[a]]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/base/docs/Data-List.html#v:intercalate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eintersect\u003c/a\u003e\u003c/code\u003e function takes the list intersection of two lists.\n For example,\n\u003c/p\u003e\u003cpre\u003e [1,2,3,4] `intersect` [2,4,6,8] == [2,4]\n\u003c/pre\u003e\u003cp\u003eIf the first list contains duplicates, so will the result.\n\u003c/p\u003e\u003cpre\u003e [1,2,2,3,4] `intersect` [6,4,4,2] == [2,2,4]\n\u003c/pre\u003e\u003cp\u003eIt is a special case of \u003ccode\u003e\u003ca\u003eintersectBy\u003c/a\u003e\u003c/code\u003e, which allows the programmer to\n supply their own equality test. If the element is found in both the first\n and the second list, the element from the first list will be used.\n\u003c/p\u003e",
          "module": "Data.List",
          "name": "intersect",
          "package": "base",
          "signature": "[a] -\u003e [a] -\u003e [a]",
          "source": "src/Data-List.html#intersect",
          "type": "function"
        },
        "index": {
          "description": "The intersect function takes the list intersection of two lists For example intersect If the first list contains duplicates so will the result intersect It is special case of intersectBy which allows the programmer to supply their own equality test If the element is found in both the first and the second list the element from the first list will be used",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "intersect",
          "normalized": "[a]-\u003e[a]-\u003e[a]",
          "package": "base",
          "signature": "[a]-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/base/docs/Data-List.html#v:intersect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eintersectBy\u003c/a\u003e\u003c/code\u003e function is the non-overloaded version of \u003ccode\u003e\u003ca\u003eintersect\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.List",
          "name": "intersectBy",
          "package": "base",
          "signature": "(a -\u003e a -\u003e Bool) -\u003e [a] -\u003e [a] -\u003e [a]",
          "source": "src/Data-List.html#intersectBy",
          "type": "function"
        },
        "index": {
          "description": "The intersectBy function is the non-overloaded version of intersect",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "intersectBy",
          "normalized": "(a-\u003ea-\u003eBool)-\u003e[a]-\u003e[a]-\u003e[a]",
          "package": "base",
          "partial": "By",
          "signature": "(a-\u003ea-\u003eBool)-\u003e[a]-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/base/docs/Data-List.html#v:intersectBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eintersperse\u003c/a\u003e\u003c/code\u003e function takes an element and a list and\n `intersperses' that element between the elements of the list.\n For example,\n\u003c/p\u003e\u003cpre\u003e intersperse ',' \"abcde\" == \"a,b,c,d,e\"\n\u003c/pre\u003e",
          "module": "Data.List",
          "name": "intersperse",
          "package": "base",
          "signature": "a -\u003e [a] -\u003e [a]",
          "source": "src/Data-List.html#intersperse",
          "type": "function"
        },
        "index": {
          "description": "The intersperse function takes an element and list and intersperses that element between the elements of the list For example intersperse abcde",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "intersperse",
          "normalized": "a-\u003e[a]-\u003e[a]",
          "package": "base",
          "signature": "a-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/base/docs/Data-List.html#v:intersperse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eisInfixOf\u003c/a\u003e\u003c/code\u003e function takes two lists and returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e\n iff the first list is contained, wholly and intact,\n anywhere within the second.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003eisInfixOf \"Haskell\" \"I really like Haskell.\" == True\nisInfixOf \"Ial\" \"I really like Haskell.\" == False\n\u003c/pre\u003e",
          "module": "Data.List",
          "name": "isInfixOf",
          "package": "base",
          "signature": "[a] -\u003e [a] -\u003e Bool",
          "source": "src/Data-List.html#isInfixOf",
          "type": "function"
        },
        "index": {
          "description": "The isInfixOf function takes two lists and returns True iff the first list is contained wholly and intact anywhere within the second Example isInfixOf Haskell really like Haskell True isInfixOf Ial really like Haskell False",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "isInfixOf",
          "normalized": "[a]-\u003e[a]-\u003eBool",
          "package": "base",
          "partial": "Infix Of",
          "signature": "[a]-\u003e[a]-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/base/docs/Data-List.html#v:isInfixOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eisPrefixOf\u003c/a\u003e\u003c/code\u003e function takes two lists and returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e\n iff the first list is a prefix of the second.\n\u003c/p\u003e",
          "module": "Data.List",
          "name": "isPrefixOf",
          "package": "base",
          "signature": "[a] -\u003e [a] -\u003e Bool",
          "source": "src/Data-List.html#isPrefixOf",
          "type": "function"
        },
        "index": {
          "description": "The isPrefixOf function takes two lists and returns True iff the first list is prefix of the second",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "isPrefixOf",
          "normalized": "[a]-\u003e[a]-\u003eBool",
          "package": "base",
          "partial": "Prefix Of",
          "signature": "[a]-\u003e[a]-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/base/docs/Data-List.html#v:isPrefixOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eisSuffixOf\u003c/a\u003e\u003c/code\u003e function takes two lists and returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e\n iff the first list is a suffix of the second.\n Both lists must be finite.\n\u003c/p\u003e",
          "module": "Data.List",
          "name": "isSuffixOf",
          "package": "base",
          "signature": "[a] -\u003e [a] -\u003e Bool",
          "source": "src/Data-List.html#isSuffixOf",
          "type": "function"
        },
        "index": {
          "description": "The isSuffixOf function takes two lists and returns True iff the first list is suffix of the second Both lists must be finite",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "isSuffixOf",
          "normalized": "[a]-\u003e[a]-\u003eBool",
          "package": "base",
          "partial": "Suffix Of",
          "signature": "[a]-\u003e[a]-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/base/docs/Data-List.html#v:isSuffixOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eiterate\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ef x\u003c/code\u003e returns an infinite list of repeated applications\n of \u003ccode\u003ef\u003c/code\u003e to \u003ccode\u003ex\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e iterate f x == [x, f x, f (f x), ...]\n\u003c/pre\u003e",
          "module": "Data.List",
          "name": "iterate",
          "package": "base",
          "signature": "(a -\u003e a) -\u003e a -\u003e [a]",
          "source": "src/GHC-List.html#iterate",
          "type": "function"
        },
        "index": {
          "description": "iterate returns an infinite list of repeated applications of to iterate",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "iterate",
          "normalized": "(a-\u003ea)-\u003ea-\u003e[a]",
          "package": "base",
          "signature": "(a-\u003ea)-\u003ea-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/base/docs/Data-List.html#v:iterate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the last element of a list, which must be finite and non-empty.\n\u003c/p\u003e",
          "module": "Data.List",
          "name": "last",
          "package": "base",
          "signature": "[a] -\u003e a",
          "source": "src/GHC-List.html#last",
          "type": "function"
        },
        "index": {
          "description": "Extract the last element of list which must be finite and non-empty",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "last",
          "normalized": "[a]-\u003ea",
          "package": "base",
          "signature": "[a]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/base/docs/Data-List.html#v:last"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. \u003ccode\u003e\u003ca\u003elength\u003c/a\u003e\u003c/code\u003e returns the length of a finite list as an \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e.\n It is an instance of the more general \u003ccode\u003e\u003ca\u003egenericLength\u003c/a\u003e\u003c/code\u003e,\n the result type of which may be any kind of number.\n\u003c/p\u003e",
          "module": "Data.List",
          "name": "length",
          "package": "base",
          "signature": "[a] -\u003e Int",
          "source": "src/GHC-List.html#length",
          "type": "function"
        },
        "index": {
          "description": "length returns the length of finite list as an Int It is an instance of the more general genericLength the result type of which may be any kind of number",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "length",
          "normalized": "[a]-\u003eInt",
          "package": "base",
          "signature": "[a]-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/base/docs/Data-List.html#v:length"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003elines\u003c/a\u003e\u003c/code\u003e breaks a string up into a list of strings at newline\n characters.  The resulting strings do not contain newlines.\n\u003c/p\u003e",
          "module": "Data.List",
          "name": "lines",
          "package": "base",
          "signature": "String -\u003e [String]",
          "source": "src/Data-List.html#lines",
          "type": "function"
        },
        "index": {
          "description": "lines breaks string up into list of strings at newline characters The resulting strings do not contain newlines",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "lines",
          "normalized": "String-\u003e[String]",
          "package": "base",
          "signature": "String-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/base/docs/Data-List.html#v:lines"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003elookup\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ekey assocs\u003c/code\u003e looks up a key in an association list.\n\u003c/p\u003e",
          "module": "Data.List",
          "name": "lookup",
          "package": "base",
          "signature": "a -\u003e [(a, b)] -\u003e Maybe b",
          "source": "src/GHC-List.html#lookup",
          "type": "function"
        },
        "index": {
          "description": "lookup key assocs looks up key in an association list",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "lookup",
          "normalized": "a-\u003e[(a,b)]-\u003eMaybe b",
          "package": "base",
          "signature": "a-\u003e[(a,b)]-\u003eMaybe b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/base/docs/Data-List.html#v:lookup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ef xs\u003c/code\u003e is the list obtained by applying \u003ccode\u003ef\u003c/code\u003e to each element\n of \u003ccode\u003exs\u003c/code\u003e, i.e.,\n\u003c/p\u003e\u003cpre\u003e map f [x1, x2, ..., xn] == [f x1, f x2, ..., f xn]\n map f [x1, x2, ...] == [f x1, f x2, ...]\n\u003c/pre\u003e",
          "module": "Data.List",
          "name": "map",
          "package": "base",
          "signature": "(a -\u003e b) -\u003e [a] -\u003e [b]",
          "source": "src/GHC-Base.html#map",
          "type": "function"
        },
        "index": {
          "description": "map xs is the list obtained by applying to each element of xs i.e map x1 x2 xn x1 x2 xn map x1 x2 x1 x2",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "map",
          "normalized": "(a-\u003eb)-\u003e[a]-\u003e[b]",
          "package": "base",
          "signature": "(a-\u003eb)-\u003e[a]-\u003e[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/base/docs/Data-List.html#v:map"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003emapAccumL\u003c/a\u003e\u003c/code\u003e function behaves like a combination of \u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e; it applies a function to each element of a list, passing\n an accumulating parameter from left to right, and returning a final\n value of this accumulator together with the new list.\n\u003c/p\u003e",
          "module": "Data.List",
          "name": "mapAccumL",
          "package": "base",
          "signature": "(acc -\u003e x -\u003e (acc, y)) -\u003e acc -\u003e [x] -\u003e (acc, [y])",
          "source": "src/Data-List.html#mapAccumL",
          "type": "function"
        },
        "index": {
          "description": "The mapAccumL function behaves like combination of map and foldl it applies function to each element of list passing an accumulating parameter from left to right and returning final value of this accumulator together with the new list",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "mapAccumL",
          "normalized": "(a-\u003eb-\u003e(a,c))-\u003ea-\u003e[b]-\u003e(a,[c])",
          "package": "base",
          "partial": "Accum",
          "signature": "(acc-\u003ex-\u003e(acc,y))-\u003eacc-\u003e[x]-\u003e(acc,[y])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/base/docs/Data-List.html#v:mapAccumL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003emapAccumR\u003c/a\u003e\u003c/code\u003e function behaves like a combination of \u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e; it applies a function to each element of a list, passing\n an accumulating parameter from right to left, and returning a final\n value of this accumulator together with the new list.\n\u003c/p\u003e",
          "module": "Data.List",
          "name": "mapAccumR",
          "package": "base",
          "signature": "(acc -\u003e x -\u003e (acc, y)) -\u003e acc -\u003e [x] -\u003e (acc, [y])",
          "source": "src/Data-List.html#mapAccumR",
          "type": "function"
        },
        "index": {
          "description": "The mapAccumR function behaves like combination of map and foldr it applies function to each element of list passing an accumulating parameter from right to left and returning final value of this accumulator together with the new list",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "mapAccumR",
          "normalized": "(a-\u003eb-\u003e(a,c))-\u003ea-\u003e[b]-\u003e(a,[c])",
          "package": "base",
          "partial": "Accum",
          "signature": "(acc-\u003ex-\u003e(acc,y))-\u003eacc-\u003e[x]-\u003e(acc,[y])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/base/docs/Data-List.html#v:mapAccumR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003emaximum\u003c/a\u003e\u003c/code\u003e returns the maximum value from a list,\n which must be non-empty, finite, and of an ordered type.\n It is a special case of \u003ccode\u003e\u003ca\u003emaximumBy\u003c/a\u003e\u003c/code\u003e, which allows the\n programmer to supply their own comparison function.\n\u003c/p\u003e",
          "module": "Data.List",
          "name": "maximum",
          "package": "base",
          "signature": "[a] -\u003e a",
          "source": "src/Data-List.html#maximum",
          "type": "function"
        },
        "index": {
          "description": "maximum returns the maximum value from list which must be non-empty finite and of an ordered type It is special case of maximumBy which allows the programmer to supply their own comparison function",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "maximum",
          "normalized": "[a]-\u003ea",
          "package": "base",
          "signature": "[a]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/base/docs/Data-List.html#v:maximum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003emaximumBy\u003c/a\u003e\u003c/code\u003e function takes a comparison function and a list\n and returns the greatest element of the list by the comparison function.\n The list must be finite and non-empty.\n\u003c/p\u003e",
          "module": "Data.List",
          "name": "maximumBy",
          "package": "base",
          "signature": "(a -\u003e a -\u003e Ordering) -\u003e [a] -\u003e a",
          "source": "src/Data-List.html#maximumBy",
          "type": "function"
        },
        "index": {
          "description": "The maximumBy function takes comparison function and list and returns the greatest element of the list by the comparison function The list must be finite and non-empty",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "maximumBy",
          "normalized": "(a-\u003ea-\u003eOrdering)-\u003e[a]-\u003ea",
          "package": "base",
          "partial": "By",
          "signature": "(a-\u003ea-\u003eOrdering)-\u003e[a]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/base/docs/Data-List.html#v:maximumBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eminimum\u003c/a\u003e\u003c/code\u003e returns the minimum value from a list,\n which must be non-empty, finite, and of an ordered type.\n It is a special case of \u003ccode\u003e\u003ca\u003eminimumBy\u003c/a\u003e\u003c/code\u003e, which allows the\n programmer to supply their own comparison function.\n\u003c/p\u003e",
          "module": "Data.List",
          "name": "minimum",
          "package": "base",
          "signature": "[a] -\u003e a",
          "source": "src/Data-List.html#minimum",
          "type": "function"
        },
        "index": {
          "description": "minimum returns the minimum value from list which must be non-empty finite and of an ordered type It is special case of minimumBy which allows the programmer to supply their own comparison function",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "minimum",
          "normalized": "[a]-\u003ea",
          "package": "base",
          "signature": "[a]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/base/docs/Data-List.html#v:minimum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eminimumBy\u003c/a\u003e\u003c/code\u003e function takes a comparison function and a list\n and returns the least element of the list by the comparison function.\n The list must be finite and non-empty.\n\u003c/p\u003e",
          "module": "Data.List",
          "name": "minimumBy",
          "package": "base",
          "signature": "(a -\u003e a -\u003e Ordering) -\u003e [a] -\u003e a",
          "source": "src/Data-List.html#minimumBy",
          "type": "function"
        },
        "index": {
          "description": "The minimumBy function takes comparison function and list and returns the least element of the list by the comparison function The list must be finite and non-empty",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "minimumBy",
          "normalized": "(a-\u003ea-\u003eOrdering)-\u003e[a]-\u003ea",
          "package": "base",
          "partial": "By",
          "signature": "(a-\u003ea-\u003eOrdering)-\u003e[a]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/base/docs/Data-List.html#v:minimumBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003enotElem\u003c/a\u003e\u003c/code\u003e is the negation of \u003ccode\u003e\u003ca\u003eelem\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.List",
          "name": "notElem",
          "package": "base",
          "signature": "a -\u003e [a] -\u003e Bool",
          "source": "src/GHC-List.html#notElem",
          "type": "function"
        },
        "index": {
          "description": "notElem is the negation of elem",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "notElem",
          "normalized": "a-\u003e[a]-\u003eBool",
          "package": "base",
          "partial": "Elem",
          "signature": "a-\u003e[a]-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/base/docs/Data-List.html#v:notElem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n^2)\u003c/em\u003e. The \u003ccode\u003e\u003ca\u003enub\u003c/a\u003e\u003c/code\u003e function removes duplicate elements from a list.\n In particular, it keeps only the first occurrence of each element.\n (The name \u003ccode\u003e\u003ca\u003enub\u003c/a\u003e\u003c/code\u003e means `essence'.)\n It is a special case of \u003ccode\u003e\u003ca\u003enubBy\u003c/a\u003e\u003c/code\u003e, which allows the programmer to supply\n their own equality test.\n\u003c/p\u003e",
          "module": "Data.List",
          "name": "nub",
          "package": "base",
          "signature": "[a] -\u003e [a]",
          "source": "src/Data-List.html#nub",
          "type": "function"
        },
        "index": {
          "description": "The nub function removes duplicate elements from list In particular it keeps only the first occurrence of each element The name nub means essence It is special case of nubBy which allows the programmer to supply their own equality test",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "nub",
          "normalized": "[a]-\u003e[a]",
          "package": "base",
          "signature": "[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/base/docs/Data-List.html#v:nub"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003enubBy\u003c/a\u003e\u003c/code\u003e function behaves just like \u003ccode\u003e\u003ca\u003enub\u003c/a\u003e\u003c/code\u003e, except it uses a\n user-supplied equality predicate instead of the overloaded \u003ccode\u003e\u003ca\u003e==\u003c/a\u003e\u003c/code\u003e\n function.\n\u003c/p\u003e",
          "module": "Data.List",
          "name": "nubBy",
          "package": "base",
          "signature": "(a -\u003e a -\u003e Bool) -\u003e [a] -\u003e [a]",
          "source": "src/Data-List.html#nubBy",
          "type": "function"
        },
        "index": {
          "description": "The nubBy function behaves just like nub except it uses user-supplied equality predicate instead of the overloaded function",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "nubBy",
          "normalized": "(a-\u003ea-\u003eBool)-\u003e[a]-\u003e[a]",
          "package": "base",
          "partial": "By",
          "signature": "(a-\u003ea-\u003eBool)-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/base/docs/Data-List.html#v:nubBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest whether a list is empty.\n\u003c/p\u003e",
          "module": "Data.List",
          "name": "null",
          "package": "base",
          "signature": "[a] -\u003e Bool",
          "source": "src/GHC-List.html#null",
          "type": "function"
        },
        "index": {
          "description": "Test whether list is empty",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "null",
          "normalized": "[a]-\u003eBool",
          "package": "base",
          "signature": "[a]-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/base/docs/Data-List.html#v:null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eor\u003c/a\u003e\u003c/code\u003e returns the disjunction of a Boolean list.  For the result to be\n \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e, the list must be finite; \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e, however, results from a \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e\n value at a finite index of a finite or infinite list.\n\u003c/p\u003e",
          "module": "Data.List",
          "name": "or",
          "package": "base",
          "signature": "[Bool] -\u003e Bool",
          "source": "src/GHC-List.html#or",
          "type": "function"
        },
        "index": {
          "description": "or returns the disjunction of Boolean list For the result to be False the list must be finite True however results from True value at finite index of finite or infinite list",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "or",
          "normalized": "[Bool]-\u003eBool",
          "package": "base",
          "signature": "[Bool]-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/base/docs/Data-List.html#v:or"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003epartition\u003c/a\u003e\u003c/code\u003e function takes a predicate a list and returns\n the pair of lists of elements which do and do not satisfy the\n predicate, respectively; i.e.,\n\u003c/p\u003e\u003cpre\u003e partition p xs == (filter p xs, filter (not . p) xs)\n\u003c/pre\u003e",
          "module": "Data.List",
          "name": "partition",
          "package": "base",
          "signature": "(a -\u003e Bool) -\u003e [a] -\u003e ([a], [a])",
          "source": "src/Data-List.html#partition",
          "type": "function"
        },
        "index": {
          "description": "The partition function takes predicate list and returns the pair of lists of elements which do and do not satisfy the predicate respectively i.e partition xs filter xs filter not xs",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "partition",
          "normalized": "(a-\u003eBool)-\u003e[a]-\u003e([a],[a])",
          "package": "base",
          "signature": "(a-\u003eBool)-\u003e[a]-\u003e([a],[a])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/base/docs/Data-List.html#v:partition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003epermutations\u003c/a\u003e\u003c/code\u003e function returns the list of all permutations of the argument.\n\u003c/p\u003e\u003cpre\u003e permutations \"abc\" == [\"abc\",\"bac\",\"cba\",\"bca\",\"cab\",\"acb\"]\n\u003c/pre\u003e",
          "module": "Data.List",
          "name": "permutations",
          "package": "base",
          "signature": "[a] -\u003e [[a]]",
          "source": "src/Data-List.html#permutations",
          "type": "function"
        },
        "index": {
          "description": "The permutations function returns the list of all permutations of the argument permutations abc abc bac cba bca cab acb",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "permutations",
          "normalized": "[a]-\u003e[[a]]",
          "package": "base",
          "signature": "[a]-\u003e[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/base/docs/Data-List.html#v:permutations"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eproduct\u003c/a\u003e\u003c/code\u003e function computes the product of a finite list of numbers.\n\u003c/p\u003e",
          "module": "Data.List",
          "name": "product",
          "package": "base",
          "signature": "[a] -\u003e a",
          "source": "src/Data-List.html#product",
          "type": "function"
        },
        "index": {
          "description": "The product function computes the product of finite list of numbers",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "product",
          "normalized": "[a]-\u003ea",
          "package": "base",
          "signature": "[a]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/base/docs/Data-List.html#v:product"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003erepeat\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ex\u003c/code\u003e is an infinite list, with \u003ccode\u003ex\u003c/code\u003e the value of every element.\n\u003c/p\u003e",
          "module": "Data.List",
          "name": "repeat",
          "package": "base",
          "signature": "a -\u003e [a]",
          "source": "src/GHC-List.html#repeat",
          "type": "function"
        },
        "index": {
          "description": "repeat is an infinite list with the value of every element",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "repeat",
          "normalized": "a-\u003e[a]",
          "package": "base",
          "signature": "a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/base/docs/Data-List.html#v:repeat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ereplicate\u003c/a\u003e\u003c/code\u003e \u003ccode\u003en x\u003c/code\u003e is a list of length \u003ccode\u003en\u003c/code\u003e with \u003ccode\u003ex\u003c/code\u003e the value of\n every element.\n It is an instance of the more general \u003ccode\u003e\u003ca\u003egenericReplicate\u003c/a\u003e\u003c/code\u003e,\n in which \u003ccode\u003en\u003c/code\u003e may be of any integral type.\n\u003c/p\u003e",
          "module": "Data.List",
          "name": "replicate",
          "package": "base",
          "signature": "Int -\u003e a -\u003e [a]",
          "source": "src/GHC-List.html#replicate",
          "type": "function"
        },
        "index": {
          "description": "replicate is list of length with the value of every element It is an instance of the more general genericReplicate in which may be of any integral type",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "replicate",
          "normalized": "Int-\u003ea-\u003e[a]",
          "package": "base",
          "signature": "Int-\u003ea-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/base/docs/Data-List.html#v:replicate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ereverse\u003c/a\u003e\u003c/code\u003e \u003ccode\u003exs\u003c/code\u003e returns the elements of \u003ccode\u003exs\u003c/code\u003e in reverse order.\n \u003ccode\u003exs\u003c/code\u003e must be finite.\n\u003c/p\u003e",
          "module": "Data.List",
          "name": "reverse",
          "package": "base",
          "signature": "[a] -\u003e [a]",
          "source": "src/GHC-List.html#reverse",
          "type": "function"
        },
        "index": {
          "description": "reverse xs returns the elements of xs in reverse order xs must be finite",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "reverse",
          "normalized": "[a]-\u003e[a]",
          "package": "base",
          "signature": "[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/base/docs/Data-List.html#v:reverse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003escanl\u003c/a\u003e\u003c/code\u003e is similar to \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e, but returns a list of successive\n reduced values from the left:\n\u003c/p\u003e\u003cpre\u003e scanl f z [x1, x2, ...] == [z, z `f` x1, (z `f` x1) `f` x2, ...]\n\u003c/pre\u003e\u003cp\u003eNote that\n\u003c/p\u003e\u003cpre\u003e last (scanl f z xs) == foldl f z xs.\n\u003c/pre\u003e",
          "module": "Data.List",
          "name": "scanl",
          "package": "base",
          "signature": "(a -\u003e b -\u003e a) -\u003e a -\u003e [b] -\u003e [a]",
          "source": "src/GHC-List.html#scanl",
          "type": "function"
        },
        "index": {
          "description": "scanl is similar to foldl but returns list of successive reduced values from the left scanl x1 x2 x1 x1 x2 Note that last scanl xs foldl xs",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "scanl",
          "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003e[b]-\u003e[a]",
          "package": "base",
          "signature": "(a-\u003eb-\u003ea)-\u003ea-\u003e[b]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/base/docs/Data-List.html#v:scanl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003escanl1\u003c/a\u003e\u003c/code\u003e is a variant of \u003ccode\u003e\u003ca\u003escanl\u003c/a\u003e\u003c/code\u003e that has no starting value argument:\n\u003c/p\u003e\u003cpre\u003e scanl1 f [x1, x2, ...] == [x1, x1 `f` x2, ...]\n\u003c/pre\u003e",
          "module": "Data.List",
          "name": "scanl1",
          "package": "base",
          "signature": "(a -\u003e a -\u003e a) -\u003e [a] -\u003e [a]",
          "source": "src/GHC-List.html#scanl1",
          "type": "function"
        },
        "index": {
          "description": "scanl1 is variant of scanl that has no starting value argument scanl1 x1 x2 x1 x1 x2",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "scanl1",
          "normalized": "(a-\u003ea-\u003ea)-\u003e[a]-\u003e[a]",
          "package": "base",
          "signature": "(a-\u003ea-\u003ea)-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/base/docs/Data-List.html#v:scanl1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003escanr\u003c/a\u003e\u003c/code\u003e is the right-to-left dual of \u003ccode\u003e\u003ca\u003escanl\u003c/a\u003e\u003c/code\u003e.\n Note that\n\u003c/p\u003e\u003cpre\u003e head (scanr f z xs) == foldr f z xs.\n\u003c/pre\u003e",
          "module": "Data.List",
          "name": "scanr",
          "package": "base",
          "signature": "(a -\u003e b -\u003e b) -\u003e b -\u003e [a] -\u003e [b]",
          "source": "src/GHC-List.html#scanr",
          "type": "function"
        },
        "index": {
          "description": "scanr is the right-to-left dual of scanl Note that head scanr xs foldr xs",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "scanr",
          "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003e[a]-\u003e[b]",
          "package": "base",
          "signature": "(a-\u003eb-\u003eb)-\u003eb-\u003e[a]-\u003e[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/base/docs/Data-List.html#v:scanr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003escanr1\u003c/a\u003e\u003c/code\u003e is a variant of \u003ccode\u003e\u003ca\u003escanr\u003c/a\u003e\u003c/code\u003e that has no starting value argument.\n\u003c/p\u003e",
          "module": "Data.List",
          "name": "scanr1",
          "package": "base",
          "signature": "(a -\u003e a -\u003e a) -\u003e [a] -\u003e [a]",
          "source": "src/GHC-List.html#scanr1",
          "type": "function"
        },
        "index": {
          "description": "scanr1 is variant of scanr that has no starting value argument",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "scanr1",
          "normalized": "(a-\u003ea-\u003ea)-\u003e[a]-\u003e[a]",
          "package": "base",
          "signature": "(a-\u003ea-\u003ea)-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/base/docs/Data-List.html#v:scanr1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003esort\u003c/a\u003e\u003c/code\u003e function implements a stable sorting algorithm.\n It is a special case of \u003ccode\u003e\u003ca\u003esortBy\u003c/a\u003e\u003c/code\u003e, which allows the programmer to supply\n their own comparison function.\n\u003c/p\u003e",
          "module": "Data.List",
          "name": "sort",
          "package": "base",
          "signature": "[a] -\u003e [a]",
          "source": "src/Data-List.html#sort",
          "type": "function"
        },
        "index": {
          "description": "The sort function implements stable sorting algorithm It is special case of sortBy which allows the programmer to supply their own comparison function",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "sort",
          "normalized": "[a]-\u003e[a]",
          "package": "base",
          "signature": "[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/base/docs/Data-List.html#v:sort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003esortBy\u003c/a\u003e\u003c/code\u003e function is the non-overloaded version of \u003ccode\u003e\u003ca\u003esort\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.List",
          "name": "sortBy",
          "package": "base",
          "signature": "(a -\u003e a -\u003e Ordering) -\u003e [a] -\u003e [a]",
          "source": "src/Data-List.html#sortBy",
          "type": "function"
        },
        "index": {
          "description": "The sortBy function is the non-overloaded version of sort",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "sortBy",
          "normalized": "(a-\u003ea-\u003eOrdering)-\u003e[a]-\u003e[a]",
          "package": "base",
          "partial": "By",
          "signature": "(a-\u003ea-\u003eOrdering)-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/base/docs/Data-List.html#v:sortBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003espan\u003c/a\u003e\u003c/code\u003e, applied to a predicate \u003ccode\u003ep\u003c/code\u003e and a list \u003ccode\u003exs\u003c/code\u003e, returns a tuple where\n first element is longest prefix (possibly empty) of \u003ccode\u003exs\u003c/code\u003e of elements that\n satisfy \u003ccode\u003ep\u003c/code\u003e and second element is the remainder of the list:\n\u003c/p\u003e\u003cpre\u003e span (\u003c 3) [1,2,3,4,1,2,3,4] == ([1,2],[3,4,1,2,3,4])\n span (\u003c 9) [1,2,3] == ([1,2,3],[])\n span (\u003c 0) [1,2,3] == ([],[1,2,3])\n\u003c/pre\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003espan\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ep xs\u003c/code\u003e is equivalent to \u003ccode\u003e(\u003ccode\u003e\u003ca\u003etakeWhile\u003c/a\u003e\u003c/code\u003e p xs, \u003ccode\u003e\u003ca\u003edropWhile\u003c/a\u003e\u003c/code\u003e p xs)\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.List",
          "name": "span",
          "package": "base",
          "signature": "(a -\u003e Bool) -\u003e [a] -\u003e ([a], [a])",
          "source": "src/GHC-List.html#span",
          "type": "function"
        },
        "index": {
          "description": "span applied to predicate and list xs returns tuple where first element is longest prefix possibly empty of xs of elements that satisfy and second element is the remainder of the list span span span span xs is equivalent to takeWhile xs dropWhile xs",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "span",
          "normalized": "(a-\u003eBool)-\u003e[a]-\u003e([a],[a])",
          "package": "base",
          "signature": "(a-\u003eBool)-\u003e[a]-\u003e([a],[a])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/base/docs/Data-List.html#v:span"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003esplitAt\u003c/a\u003e\u003c/code\u003e \u003ccode\u003en xs\u003c/code\u003e returns a tuple where first element is \u003ccode\u003exs\u003c/code\u003e prefix of\n length \u003ccode\u003en\u003c/code\u003e and second element is the remainder of the list:\n\u003c/p\u003e\u003cpre\u003e splitAt 6 \"Hello World!\" == (\"Hello \",\"World!\")\n splitAt 3 [1,2,3,4,5] == ([1,2,3],[4,5])\n splitAt 1 [1,2,3] == ([1],[2,3])\n splitAt 3 [1,2,3] == ([1,2,3],[])\n splitAt 4 [1,2,3] == ([1,2,3],[])\n splitAt 0 [1,2,3] == ([],[1,2,3])\n splitAt (-1) [1,2,3] == ([],[1,2,3])\n\u003c/pre\u003e\u003cp\u003eIt is equivalent to \u003ccode\u003e(\u003ccode\u003e\u003ca\u003etake\u003c/a\u003e\u003c/code\u003e n xs, \u003ccode\u003e\u003ca\u003edrop\u003c/a\u003e\u003c/code\u003e n xs)\u003c/code\u003e when \u003ccode\u003en\u003c/code\u003e is not \u003ccode\u003e_|_\u003c/code\u003e\n (\u003ccode\u003esplitAt _|_ xs = _|_\u003c/code\u003e).\n \u003ccode\u003e\u003ca\u003esplitAt\u003c/a\u003e\u003c/code\u003e is an instance of the more general \u003ccode\u003e\u003ca\u003egenericSplitAt\u003c/a\u003e\u003c/code\u003e,\n in which \u003ccode\u003en\u003c/code\u003e may be of any integral type.\n\u003c/p\u003e",
          "module": "Data.List",
          "name": "splitAt",
          "package": "base",
          "signature": "Int -\u003e [a] -\u003e ([a], [a])",
          "source": "src/GHC-List.html#splitAt",
          "type": "function"
        },
        "index": {
          "description": "splitAt xs returns tuple where first element is xs prefix of length and second element is the remainder of the list splitAt Hello World Hello World splitAt splitAt splitAt splitAt splitAt splitAt It is equivalent to take xs drop xs when is not splitAt xs splitAt is an instance of the more general genericSplitAt in which may be of any integral type",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "splitAt",
          "normalized": "Int-\u003e[a]-\u003e([a],[a])",
          "package": "base",
          "partial": "At",
          "signature": "Int-\u003e[a]-\u003e([a],[a])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/base/docs/Data-List.html#v:splitAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003estripPrefix\u003c/a\u003e\u003c/code\u003e function drops the given prefix from a list.\n It returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the list did not start with the prefix\n given, or \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e the list after the prefix, if it does.\n\u003c/p\u003e\u003cpre\u003e stripPrefix \"foo\" \"foobar\" == Just \"bar\"\n stripPrefix \"foo\" \"foo\" == Just \"\"\n stripPrefix \"foo\" \"barfoo\" == Nothing\n stripPrefix \"foo\" \"barfoobaz\" == Nothing\n\u003c/pre\u003e",
          "module": "Data.List",
          "name": "stripPrefix",
          "package": "base",
          "signature": "[a] -\u003e [a] -\u003e Maybe [a]",
          "source": "src/Data-List.html#stripPrefix",
          "type": "function"
        },
        "index": {
          "description": "The stripPrefix function drops the given prefix from list It returns Nothing if the list did not start with the prefix given or Just the list after the prefix if it does stripPrefix foo foobar Just bar stripPrefix foo foo Just stripPrefix foo barfoo Nothing stripPrefix foo barfoobaz Nothing",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "stripPrefix",
          "normalized": "[a]-\u003e[a]-\u003eMaybe[a]",
          "package": "base",
          "partial": "Prefix",
          "signature": "[a]-\u003e[a]-\u003eMaybe[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/base/docs/Data-List.html#v:stripPrefix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003esubsequences\u003c/a\u003e\u003c/code\u003e function returns the list of all subsequences of the argument.\n\u003c/p\u003e\u003cpre\u003e subsequences \"abc\" == [\"\",\"a\",\"b\",\"ab\",\"c\",\"ac\",\"bc\",\"abc\"]\n\u003c/pre\u003e",
          "module": "Data.List",
          "name": "subsequences",
          "package": "base",
          "signature": "[a] -\u003e [[a]]",
          "source": "src/Data-List.html#subsequences",
          "type": "function"
        },
        "index": {
          "description": "The subsequences function returns the list of all subsequences of the argument subsequences abc ab ac bc abc",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "subsequences",
          "normalized": "[a]-\u003e[[a]]",
          "package": "base",
          "signature": "[a]-\u003e[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/base/docs/Data-List.html#v:subsequences"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003esum\u003c/a\u003e\u003c/code\u003e function computes the sum of a finite list of numbers.\n\u003c/p\u003e",
          "module": "Data.List",
          "name": "sum",
          "package": "base",
          "signature": "[a] -\u003e a",
          "source": "src/Data-List.html#sum",
          "type": "function"
        },
        "index": {
          "description": "The sum function computes the sum of finite list of numbers",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "sum",
          "normalized": "[a]-\u003ea",
          "package": "base",
          "signature": "[a]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/base/docs/Data-List.html#v:sum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the elements after the head of a list, which must be non-empty.\n\u003c/p\u003e",
          "module": "Data.List",
          "name": "tail",
          "package": "base",
          "signature": "[a] -\u003e [a]",
          "source": "src/GHC-List.html#tail",
          "type": "function"
        },
        "index": {
          "description": "Extract the elements after the head of list which must be non-empty",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "tail",
          "normalized": "[a]-\u003e[a]",
          "package": "base",
          "signature": "[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/base/docs/Data-List.html#v:tail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003etails\u003c/a\u003e\u003c/code\u003e function returns all final segments of the argument,\n longest first.  For example,\n\u003c/p\u003e\u003cpre\u003e tails \"abc\" == [\"abc\", \"bc\", \"c\",\"\"]\n\u003c/pre\u003e\u003cp\u003eNote that \u003ccode\u003e\u003ca\u003etails\u003c/a\u003e\u003c/code\u003e has the following strictness property:\n \u003ccode\u003etails _|_ = _|_ : _|_\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.List",
          "name": "tails",
          "package": "base",
          "signature": "[a] -\u003e [[a]]",
          "source": "src/Data-List.html#tails",
          "type": "function"
        },
        "index": {
          "description": "The tails function returns all final segments of the argument longest first For example tails abc abc bc Note that tails has the following strictness property tails",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "tails",
          "normalized": "[a]-\u003e[[a]]",
          "package": "base",
          "signature": "[a]-\u003e[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/base/docs/Data-List.html#v:tails"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003etake\u003c/a\u003e\u003c/code\u003e \u003ccode\u003en\u003c/code\u003e, applied to a list \u003ccode\u003exs\u003c/code\u003e, returns the prefix of \u003ccode\u003exs\u003c/code\u003e\n of length \u003ccode\u003en\u003c/code\u003e, or \u003ccode\u003exs\u003c/code\u003e itself if \u003ccode\u003en \u003e \u003ccode\u003e\u003ca\u003elength\u003c/a\u003e\u003c/code\u003e xs\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e take 5 \"Hello World!\" == \"Hello\"\n take 3 [1,2,3,4,5] == [1,2,3]\n take 3 [1,2] == [1,2]\n take 3 [] == []\n take (-1) [1,2] == []\n take 0 [1,2] == []\n\u003c/pre\u003e\u003cp\u003eIt is an instance of the more general \u003ccode\u003e\u003ca\u003egenericTake\u003c/a\u003e\u003c/code\u003e,\n in which \u003ccode\u003en\u003c/code\u003e may be of any integral type.\n\u003c/p\u003e",
          "module": "Data.List",
          "name": "take",
          "package": "base",
          "signature": "Int -\u003e [a] -\u003e [a]",
          "source": "src/GHC-List.html#take",
          "type": "function"
        },
        "index": {
          "description": "take applied to list xs returns the prefix of xs of length or xs itself if length xs take Hello World Hello take take take take take It is an instance of the more general genericTake in which may be of any integral type",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "take",
          "normalized": "Int-\u003e[a]-\u003e[a]",
          "package": "base",
          "signature": "Int-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/base/docs/Data-List.html#v:take"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003etakeWhile\u003c/a\u003e\u003c/code\u003e, applied to a predicate \u003ccode\u003ep\u003c/code\u003e and a list \u003ccode\u003exs\u003c/code\u003e, returns the\n longest prefix (possibly empty) of \u003ccode\u003exs\u003c/code\u003e of elements that satisfy \u003ccode\u003ep\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e takeWhile (\u003c 3) [1,2,3,4,1,2,3,4] == [1,2]\n takeWhile (\u003c 9) [1,2,3] == [1,2,3]\n takeWhile (\u003c 0) [1,2,3] == []\n\u003c/pre\u003e",
          "module": "Data.List",
          "name": "takeWhile",
          "package": "base",
          "signature": "(a -\u003e Bool) -\u003e [a] -\u003e [a]",
          "source": "src/GHC-List.html#takeWhile",
          "type": "function"
        },
        "index": {
          "description": "takeWhile applied to predicate and list xs returns the longest prefix possibly empty of xs of elements that satisfy takeWhile takeWhile takeWhile",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "takeWhile",
          "normalized": "(a-\u003eBool)-\u003e[a]-\u003e[a]",
          "package": "base",
          "partial": "While",
          "signature": "(a-\u003eBool)-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/base/docs/Data-List.html#v:takeWhile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003etranspose\u003c/a\u003e\u003c/code\u003e function transposes the rows and columns of its argument.\n For example,\n\u003c/p\u003e\u003cpre\u003e transpose [[1,2,3],[4,5,6]] == [[1,4],[2,5],[3,6]]\n\u003c/pre\u003e",
          "module": "Data.List",
          "name": "transpose",
          "package": "base",
          "signature": "[[a]] -\u003e [[a]]",
          "source": "src/Data-List.html#transpose",
          "type": "function"
        },
        "index": {
          "description": "The transpose function transposes the rows and columns of its argument For example transpose",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "transpose",
          "normalized": "[[a]]-\u003e[[a]]",
          "package": "base",
          "signature": "[[a]]-\u003e[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/base/docs/Data-List.html#v:transpose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eunfoldr\u003c/a\u003e\u003c/code\u003e function is a `dual' to \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e: while \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e\n reduces a list to a summary value, \u003ccode\u003e\u003ca\u003eunfoldr\u003c/a\u003e\u003c/code\u003e builds a list from\n a seed value.  The function takes the element and returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e\n if it is done producing the list or returns \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e(a,b)\u003c/code\u003e, in which\n case, \u003ccode\u003ea\u003c/code\u003e is a prepended to the list and \u003ccode\u003eb\u003c/code\u003e is used as the next\n element in a recursive call.  For example,\n\u003c/p\u003e\u003cpre\u003e iterate f == unfoldr (\\x -\u003e Just (x, f x))\n\u003c/pre\u003e\u003cp\u003eIn some cases, \u003ccode\u003e\u003ca\u003eunfoldr\u003c/a\u003e\u003c/code\u003e can undo a \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e operation:\n\u003c/p\u003e\u003cpre\u003e unfoldr f' (foldr f z xs) == xs\n\u003c/pre\u003e\u003cp\u003eif the following holds:\n\u003c/p\u003e\u003cpre\u003e f' (f x y) = Just (x,y)\n f' z       = Nothing\n\u003c/pre\u003e\u003cp\u003eA simple use of unfoldr:\n\u003c/p\u003e\u003cpre\u003e unfoldr (\\b -\u003e if b == 0 then Nothing else Just (b, b-1)) 10\n  [10,9,8,7,6,5,4,3,2,1]\n\u003c/pre\u003e",
          "module": "Data.List",
          "name": "unfoldr",
          "package": "base",
          "signature": "(b -\u003e Maybe (a, b)) -\u003e b -\u003e [a]",
          "source": "src/Data-List.html#unfoldr",
          "type": "function"
        },
        "index": {
          "description": "The unfoldr function is dual to foldr while foldr reduces list to summary value unfoldr builds list from seed value The function takes the element and returns Nothing if it is done producing the list or returns Just in which case is prepended to the list and is used as the next element in recursive call For example iterate unfoldr Just In some cases unfoldr can undo foldr operation unfoldr foldr xs xs if the following holds Just Nothing simple use of unfoldr unfoldr if then Nothing else Just b-1",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "unfoldr",
          "normalized": "(a-\u003eMaybe(b,a))-\u003ea-\u003e[b]",
          "package": "base",
          "signature": "(b-\u003eMaybe(a,b))-\u003eb-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/base/docs/Data-List.html#v:unfoldr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eunion\u003c/a\u003e\u003c/code\u003e function returns the list union of the two lists.\n For example,\n\u003c/p\u003e\u003cpre\u003e \"dog\" `union` \"cow\" == \"dogcw\"\n\u003c/pre\u003e\u003cp\u003eDuplicates, and elements of the first list, are removed from the\n the second list, but if the first list contains duplicates, so will\n the result.\n It is a special case of \u003ccode\u003e\u003ca\u003eunionBy\u003c/a\u003e\u003c/code\u003e, which allows the programmer to supply\n their own equality test.\n\u003c/p\u003e",
          "module": "Data.List",
          "name": "union",
          "package": "base",
          "signature": "[a] -\u003e [a] -\u003e [a]",
          "source": "src/Data-List.html#union",
          "type": "function"
        },
        "index": {
          "description": "The union function returns the list union of the two lists For example dog union cow dogcw Duplicates and elements of the first list are removed from the the second list but if the first list contains duplicates so will the result It is special case of unionBy which allows the programmer to supply their own equality test",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "union",
          "normalized": "[a]-\u003e[a]-\u003e[a]",
          "package": "base",
          "signature": "[a]-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/base/docs/Data-List.html#v:union"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eunionBy\u003c/a\u003e\u003c/code\u003e function is the non-overloaded version of \u003ccode\u003e\u003ca\u003eunion\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.List",
          "name": "unionBy",
          "package": "base",
          "signature": "(a -\u003e a -\u003e Bool) -\u003e [a] -\u003e [a] -\u003e [a]",
          "source": "src/Data-List.html#unionBy",
          "type": "function"
        },
        "index": {
          "description": "The unionBy function is the non-overloaded version of union",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "unionBy",
          "normalized": "(a-\u003ea-\u003eBool)-\u003e[a]-\u003e[a]-\u003e[a]",
          "package": "base",
          "partial": "By",
          "signature": "(a-\u003ea-\u003eBool)-\u003e[a]-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/base/docs/Data-List.html#v:unionBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eunlines\u003c/a\u003e\u003c/code\u003e is an inverse operation to \u003ccode\u003e\u003ca\u003elines\u003c/a\u003e\u003c/code\u003e.\n It joins lines, after appending a terminating newline to each.\n\u003c/p\u003e",
          "module": "Data.List",
          "name": "unlines",
          "package": "base",
          "signature": "[String] -\u003e String",
          "source": "src/Data-List.html#unlines",
          "type": "function"
        },
        "index": {
          "description": "unlines is an inverse operation to lines It joins lines after appending terminating newline to each",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "unlines",
          "normalized": "[String]-\u003eString",
          "package": "base",
          "signature": "[String]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/base/docs/Data-List.html#v:unlines"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eunwords\u003c/a\u003e\u003c/code\u003e is an inverse operation to \u003ccode\u003e\u003ca\u003ewords\u003c/a\u003e\u003c/code\u003e.\n It joins words with separating spaces.\n\u003c/p\u003e",
          "module": "Data.List",
          "name": "unwords",
          "package": "base",
          "signature": "[String] -\u003e String",
          "source": "src/Data-List.html#unwords",
          "type": "function"
        },
        "index": {
          "description": "unwords is an inverse operation to words It joins words with separating spaces",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "unwords",
          "normalized": "[String]-\u003eString",
          "package": "base",
          "signature": "[String]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/base/docs/Data-List.html#v:unwords"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eunzip\u003c/a\u003e\u003c/code\u003e transforms a list of pairs into a list of first components\n and a list of second components.\n\u003c/p\u003e",
          "module": "Data.List",
          "name": "unzip",
          "package": "base",
          "signature": "[(a, b)] -\u003e ([a], [b])",
          "source": "src/GHC-List.html#unzip",
          "type": "function"
        },
        "index": {
          "description": "unzip transforms list of pairs into list of first components and list of second components",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "unzip",
          "normalized": "[(a,b)]-\u003e([a],[b])",
          "package": "base",
          "signature": "[(a,b)]-\u003e([a],[b])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/base/docs/Data-List.html#v:unzip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eunzip3\u003c/a\u003e\u003c/code\u003e function takes a list of triples and returns three\n lists, analogous to \u003ccode\u003e\u003ca\u003eunzip\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.List",
          "name": "unzip3",
          "package": "base",
          "signature": "[(a, b, c)] -\u003e ([a], [b], [c])",
          "source": "src/GHC-List.html#unzip3",
          "type": "function"
        },
        "index": {
          "description": "The unzip3 function takes list of triples and returns three lists analogous to unzip",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "unzip3",
          "normalized": "[(a,b,c)]-\u003e([a],[b],[c])",
          "package": "base",
          "signature": "[(a,b,c)]-\u003e([a],[b],[c])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/base/docs/Data-List.html#v:unzip3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eunzip4\u003c/a\u003e\u003c/code\u003e function takes a list of quadruples and returns four\n lists, analogous to \u003ccode\u003e\u003ca\u003eunzip\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.List",
          "name": "unzip4",
          "package": "base",
          "signature": "[(a, b, c, d)] -\u003e ([a], [b], [c], [d])",
          "source": "src/Data-List.html#unzip4",
          "type": "function"
        },
        "index": {
          "description": "The unzip4 function takes list of quadruples and returns four lists analogous to unzip",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "unzip4",
          "normalized": "[(a,b,c,d)]-\u003e([a],[b],[c],[d])",
          "package": "base",
          "signature": "[(a,b,c,d)]-\u003e([a],[b],[c],[d])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/base/docs/Data-List.html#v:unzip4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eunzip5\u003c/a\u003e\u003c/code\u003e function takes a list of five-tuples and returns five\n lists, analogous to \u003ccode\u003e\u003ca\u003eunzip\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.List",
          "name": "unzip5",
          "package": "base",
          "signature": "[(a, b, c, d, e)] -\u003e ([a], [b], [c], [d], [e])",
          "source": "src/Data-List.html#unzip5",
          "type": "function"
        },
        "index": {
          "description": "The unzip5 function takes list of five-tuples and returns five lists analogous to unzip",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "unzip5",
          "normalized": "[(a,b,c,d,e)]-\u003e([a],[b],[c],[d],[e])",
          "package": "base",
          "signature": "[(a,b,c,d,e)]-\u003e([a],[b],[c],[d],[e])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/base/docs/Data-List.html#v:unzip5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eunzip6\u003c/a\u003e\u003c/code\u003e function takes a list of six-tuples and returns six\n lists, analogous to \u003ccode\u003e\u003ca\u003eunzip\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.List",
          "name": "unzip6",
          "package": "base",
          "signature": "[(a, b, c, d, e, f)] -\u003e ([a], [b], [c], [d], [e], [f])",
          "source": "src/Data-List.html#unzip6",
          "type": "function"
        },
        "index": {
          "description": "The unzip6 function takes list of six-tuples and returns six lists analogous to unzip",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "unzip6",
          "normalized": "[(a,b,c,d,e,f)]-\u003e([a],[b],[c],[d],[e],[f])",
          "package": "base",
          "signature": "[(a,b,c,d,e,f)]-\u003e([a],[b],[c],[d],[e],[f])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/base/docs/Data-List.html#v:unzip6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eunzip7\u003c/a\u003e\u003c/code\u003e function takes a list of seven-tuples and returns\n seven lists, analogous to \u003ccode\u003e\u003ca\u003eunzip\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.List",
          "name": "unzip7",
          "package": "base",
          "signature": "[(a, b, c, d, e, f, g)] -\u003e ([a], [b], [c], [d], [e], [f], [g])",
          "source": "src/Data-List.html#unzip7",
          "type": "function"
        },
        "index": {
          "description": "The unzip7 function takes list of seven-tuples and returns seven lists analogous to unzip",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "unzip7",
          "normalized": "[(a,b,c,d,e,f,g)]-\u003e([a],[b],[c],[d],[e],[f],[g])",
          "package": "base",
          "signature": "[(a,b,c,d,e,f,g)]-\u003e([a],[b],[c],[d],[e],[f],[g])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/base/docs/Data-List.html#v:unzip7"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ewords\u003c/a\u003e\u003c/code\u003e breaks a string up into a list of words, which were delimited\n by white space.\n\u003c/p\u003e",
          "module": "Data.List",
          "name": "words",
          "package": "base",
          "signature": "String -\u003e [String]",
          "source": "src/Data-List.html#words",
          "type": "function"
        },
        "index": {
          "description": "words breaks string up into list of words which were delimited by white space",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "words",
          "normalized": "String-\u003e[String]",
          "package": "base",
          "signature": "String-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/base/docs/Data-List.html#v:words"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ezip\u003c/a\u003e\u003c/code\u003e takes two lists and returns a list of corresponding pairs.\n If one input list is short, excess elements of the longer list are\n discarded.\n\u003c/p\u003e",
          "module": "Data.List",
          "name": "zip",
          "package": "base",
          "signature": "[a] -\u003e [b] -\u003e [(a, b)]",
          "source": "src/GHC-List.html#zip",
          "type": "function"
        },
        "index": {
          "description": "zip takes two lists and returns list of corresponding pairs If one input list is short excess elements of the longer list are discarded",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "zip",
          "normalized": "[a]-\u003e[b]-\u003e[(a,b)]",
          "package": "base",
          "signature": "[a]-\u003e[b]-\u003e[(a,b)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/base/docs/Data-List.html#v:zip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ezip3\u003c/a\u003e\u003c/code\u003e takes three lists and returns a list of triples, analogous to\n \u003ccode\u003e\u003ca\u003ezip\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.List",
          "name": "zip3",
          "package": "base",
          "signature": "[a] -\u003e [b] -\u003e [c] -\u003e [(a, b, c)]",
          "source": "src/GHC-List.html#zip3",
          "type": "function"
        },
        "index": {
          "description": "zip3 takes three lists and returns list of triples analogous to zip",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "zip3",
          "normalized": "[a]-\u003e[b]-\u003e[c]-\u003e[(a,b,c)]",
          "package": "base",
          "signature": "[a]-\u003e[b]-\u003e[c]-\u003e[(a,b,c)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/base/docs/Data-List.html#v:zip3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ezip4\u003c/a\u003e\u003c/code\u003e function takes four lists and returns a list of\n quadruples, analogous to \u003ccode\u003e\u003ca\u003ezip\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.List",
          "name": "zip4",
          "package": "base",
          "signature": "[a] -\u003e [b] -\u003e [c] -\u003e [d] -\u003e [(a, b, c, d)]",
          "source": "src/Data-List.html#zip4",
          "type": "function"
        },
        "index": {
          "description": "The zip4 function takes four lists and returns list of quadruples analogous to zip",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "zip4",
          "normalized": "[a]-\u003e[b]-\u003e[c]-\u003e[d]-\u003e[(a,b,c,d)]",
          "package": "base",
          "signature": "[a]-\u003e[b]-\u003e[c]-\u003e[d]-\u003e[(a,b,c,d)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/base/docs/Data-List.html#v:zip4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ezip5\u003c/a\u003e\u003c/code\u003e function takes five lists and returns a list of\n five-tuples, analogous to \u003ccode\u003e\u003ca\u003ezip\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.List",
          "name": "zip5",
          "package": "base",
          "signature": "[a] -\u003e [b] -\u003e [c] -\u003e [d] -\u003e [e] -\u003e [(a, b, c, d, e)]",
          "source": "src/Data-List.html#zip5",
          "type": "function"
        },
        "index": {
          "description": "The zip5 function takes five lists and returns list of five-tuples analogous to zip",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "zip5",
          "normalized": "[a]-\u003e[b]-\u003e[c]-\u003e[d]-\u003e[e]-\u003e[(a,b,c,d,e)]",
          "package": "base",
          "signature": "[a]-\u003e[b]-\u003e[c]-\u003e[d]-\u003e[e]-\u003e[(a,b,c,d,e)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/base/docs/Data-List.html#v:zip5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ezip6\u003c/a\u003e\u003c/code\u003e function takes six lists and returns a list of six-tuples,\n analogous to \u003ccode\u003e\u003ca\u003ezip\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.List",
          "name": "zip6",
          "package": "base",
          "signature": "[a] -\u003e [b] -\u003e [c] -\u003e [d] -\u003e [e] -\u003e [f] -\u003e [(a, b, c, d, e, f)]",
          "source": "src/Data-List.html#zip6",
          "type": "function"
        },
        "index": {
          "description": "The zip6 function takes six lists and returns list of six-tuples analogous to zip",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "zip6",
          "normalized": "[a]-\u003e[b]-\u003e[c]-\u003e[d]-\u003e[e]-\u003e[f]-\u003e[(a,b,c,d,e,f)]",
          "package": "base",
          "signature": "[a]-\u003e[b]-\u003e[c]-\u003e[d]-\u003e[e]-\u003e[f]-\u003e[(a,b,c,d,e,f)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/base/docs/Data-List.html#v:zip6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ezip7\u003c/a\u003e\u003c/code\u003e function takes seven lists and returns a list of\n seven-tuples, analogous to \u003ccode\u003e\u003ca\u003ezip\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.List",
          "name": "zip7",
          "package": "base",
          "signature": "[a] -\u003e [b] -\u003e [c] -\u003e [d] -\u003e [e] -\u003e [f] -\u003e [g] -\u003e [(a, b, c, d, e, f, g)]",
          "source": "src/Data-List.html#zip7",
          "type": "function"
        },
        "index": {
          "description": "The zip7 function takes seven lists and returns list of seven-tuples analogous to zip",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "zip7",
          "normalized": "[a]-\u003e[b]-\u003e[c]-\u003e[d]-\u003e[e]-\u003e[f]-\u003e[g]-\u003e[(a,b,c,d,e,f,g)]",
          "package": "base",
          "signature": "[a]-\u003e[b]-\u003e[c]-\u003e[d]-\u003e[e]-\u003e[f]-\u003e[g]-\u003e[(a,b,c,d,e,f,g)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/base/docs/Data-List.html#v:zip7"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ezipWith\u003c/a\u003e\u003c/code\u003e generalises \u003ccode\u003e\u003ca\u003ezip\u003c/a\u003e\u003c/code\u003e by zipping with the function given\n as the first argument, instead of a tupling function.\n For example, \u003ccode\u003e\u003ccode\u003e\u003ca\u003ezipWith\u003c/a\u003e\u003c/code\u003e (+)\u003c/code\u003e is applied to two lists to produce the\n list of corresponding sums.\n\u003c/p\u003e",
          "module": "Data.List",
          "name": "zipWith",
          "package": "base",
          "signature": "(a -\u003e b -\u003e c) -\u003e [a] -\u003e [b] -\u003e [c]",
          "source": "src/GHC-List.html#zipWith",
          "type": "function"
        },
        "index": {
          "description": "zipWith generalises zip by zipping with the function given as the first argument instead of tupling function For example zipWith is applied to two lists to produce the list of corresponding sums",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "zipWith",
          "normalized": "(a-\u003eb-\u003ec)-\u003e[a]-\u003e[b]-\u003e[c]",
          "package": "base",
          "partial": "With",
          "signature": "(a-\u003eb-\u003ec)-\u003e[a]-\u003e[b]-\u003e[c]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/base/docs/Data-List.html#v:zipWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ezipWith3\u003c/a\u003e\u003c/code\u003e function takes a function which combines three\n elements, as well as three lists and returns a list of their point-wise\n combination, analogous to \u003ccode\u003e\u003ca\u003ezipWith\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.List",
          "name": "zipWith3",
          "package": "base",
          "signature": "(a -\u003e b -\u003e c -\u003e d) -\u003e [a] -\u003e [b] -\u003e [c] -\u003e [d]",
          "source": "src/GHC-List.html#zipWith3",
          "type": "function"
        },
        "index": {
          "description": "The zipWith3 function takes function which combines three elements as well as three lists and returns list of their point-wise combination analogous to zipWith",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "zipWith3",
          "normalized": "(a-\u003eb-\u003ec-\u003ed)-\u003e[a]-\u003e[b]-\u003e[c]-\u003e[d]",
          "package": "base",
          "partial": "With",
          "signature": "(a-\u003eb-\u003ec-\u003ed)-\u003e[a]-\u003e[b]-\u003e[c]-\u003e[d]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/base/docs/Data-List.html#v:zipWith3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ezipWith4\u003c/a\u003e\u003c/code\u003e function takes a function which combines four\n elements, as well as four lists and returns a list of their point-wise\n combination, analogous to \u003ccode\u003e\u003ca\u003ezipWith\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.List",
          "name": "zipWith4",
          "package": "base",
          "signature": "(a -\u003e b -\u003e c -\u003e d -\u003e e) -\u003e [a] -\u003e [b] -\u003e [c] -\u003e [d] -\u003e [e]",
          "source": "src/Data-List.html#zipWith4",
          "type": "function"
        },
        "index": {
          "description": "The zipWith4 function takes function which combines four elements as well as four lists and returns list of their point-wise combination analogous to zipWith",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "zipWith4",
          "normalized": "(a-\u003eb-\u003ec-\u003ed-\u003ee)-\u003e[a]-\u003e[b]-\u003e[c]-\u003e[d]-\u003e[e]",
          "package": "base",
          "partial": "With",
          "signature": "(a-\u003eb-\u003ec-\u003ed-\u003ee)-\u003e[a]-\u003e[b]-\u003e[c]-\u003e[d]-\u003e[e]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/base/docs/Data-List.html#v:zipWith4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ezipWith5\u003c/a\u003e\u003c/code\u003e function takes a function which combines five\n elements, as well as five lists and returns a list of their point-wise\n combination, analogous to \u003ccode\u003e\u003ca\u003ezipWith\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.List",
          "name": "zipWith5",
          "package": "base",
          "signature": "(a -\u003e b -\u003e c -\u003e d -\u003e e -\u003e f) -\u003e [a] -\u003e [b] -\u003e [c] -\u003e [d] -\u003e [e] -\u003e [f]",
          "source": "src/Data-List.html#zipWith5",
          "type": "function"
        },
        "index": {
          "description": "The zipWith5 function takes function which combines five elements as well as five lists and returns list of their point-wise combination analogous to zipWith",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "zipWith5",
          "normalized": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef)-\u003e[a]-\u003e[b]-\u003e[c]-\u003e[d]-\u003e[e]-\u003e[f]",
          "package": "base",
          "partial": "With",
          "signature": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef)-\u003e[a]-\u003e[b]-\u003e[c]-\u003e[d]-\u003e[e]-\u003e[f]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/base/docs/Data-List.html#v:zipWith5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ezipWith6\u003c/a\u003e\u003c/code\u003e function takes a function which combines six\n elements, as well as six lists and returns a list of their point-wise\n combination, analogous to \u003ccode\u003e\u003ca\u003ezipWith\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.List",
          "name": "zipWith6",
          "package": "base",
          "signature": "(a -\u003e b -\u003e c -\u003e d -\u003e e -\u003e f -\u003e g) -\u003e [a] -\u003e [b] -\u003e [c] -\u003e [d] -\u003e [e] -\u003e [f] -\u003e [g]",
          "source": "src/Data-List.html#zipWith6",
          "type": "function"
        },
        "index": {
          "description": "The zipWith6 function takes function which combines six elements as well as six lists and returns list of their point-wise combination analogous to zipWith",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "zipWith6",
          "normalized": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003eg)-\u003e[a]-\u003e[b]-\u003e[c]-\u003e[d]-\u003e[e]-\u003e[f]-\u003e[g]",
          "package": "base",
          "partial": "With",
          "signature": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003eg)-\u003e[a]-\u003e[b]-\u003e[c]-\u003e[d]-\u003e[e]-\u003e[f]-\u003e[g]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/base/docs/Data-List.html#v:zipWith6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ezipWith7\u003c/a\u003e\u003c/code\u003e function takes a function which combines seven\n elements, as well as seven lists and returns a list of their point-wise\n combination, analogous to \u003ccode\u003e\u003ca\u003ezipWith\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.List",
          "name": "zipWith7",
          "package": "base",
          "signature": "(a -\u003e b -\u003e c -\u003e d -\u003e e -\u003e f -\u003e g -\u003e h) -\u003e [a] -\u003e [b] -\u003e [c] -\u003e [d] -\u003e [e] -\u003e [f] -\u003e [g] -\u003e [h]",
          "source": "src/Data-List.html#zipWith7",
          "type": "function"
        },
        "index": {
          "description": "The zipWith7 function takes function which combines seven elements as well as seven lists and returns list of their point-wise combination analogous to zipWith",
          "hierarchy": "Data List",
          "module": "Data.List",
          "name": "zipWith7",
          "normalized": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003eg-\u003eh)-\u003e[a]-\u003e[b]-\u003e[c]-\u003e[d]-\u003e[e]-\u003e[f]-\u003e[g]-\u003e[h]",
          "package": "base",
          "partial": "With",
          "signature": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003eg-\u003eh)-\u003e[a]-\u003e[b]-\u003e[c]-\u003e[d]-\u003e[e]-\u003e[f]-\u003e[g]-\u003e[h]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/base/docs/Data-List.html#v:zipWith7"
      }
    }
  ]
]