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
        "word": "adaptive-containers"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSelf adapting polymorphic lists.\n\u003c/p\u003e\u003cp\u003eThis library statically specializes the polymorphic container\n representation of lists to specific, more efficient representations,\n when instantiated with particular monomorphic types. It does this via\n an associated more efficient data type for each pair of elements you\n wish to store in your container.\n\u003c/p\u003e\u003cp\u003eThe resulting list structures use less space, and functions on them tend to\n be faster, than regular lists.\n\u003c/p\u003e\u003cp\u003eInstead of representing '[1..5] :: [Int]' as:\n\u003c/p\u003e\u003cpre\u003e      (:) \n     /   \\\n    /     \\\n I# 1#    (:)\n         /   \\\n        /     \\\n     I# 2#    (:)\n             /   \\\n            /     \\\n         I# 3#    []\n\u003c/pre\u003e\u003cp\u003eThe compiler will select an associated data type that packs better,\n via the class instances, resulting in:\n\u003c/p\u003e\u003cpre\u003e   ConsInt 1#\n    |\n   ConsInt 2#\n    |\n   ConsInt 3#\n    |\n    []\n\u003c/pre\u003e\u003cp\u003eThe user however, still sees a polymorphic list type.\n\u003c/p\u003e\u003cp\u003eThis list type currently doesn't fuse.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Adaptive.List",
          "name": "List",
          "package": "adaptive-containers",
          "source": "src/Data-Adaptive-List.html",
          "type": "module"
        },
        "index": {
          "description": "Self adapting polymorphic lists This library statically specializes the polymorphic container representation of lists to specific more efficient representations when instantiated with particular monomorphic types It does this via an associated more efficient data type for each pair of elements you wish to store in your container The resulting list structures use less space and functions on them tend to be faster than regular lists Instead of representing Int as The compiler will select an associated data type that packs better via the class instances resulting in ConsInt ConsInt ConsInt The user however still sees polymorphic list type This list type currently doesn fuse",
          "hierarchy": "Data Adaptive List",
          "module": "Data.Adaptive.List",
          "name": "List",
          "package": "adaptive-containers",
          "partial": "List",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/adaptive-containers/docs/Data-Adaptive-List.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresentation-improving polymorphic lists.\n\u003c/p\u003e",
          "module": "Data.Adaptive.List",
          "name": "AdaptList",
          "package": "adaptive-containers",
          "source": "src/Data-Adaptive-List.html#AdaptList",
          "type": "class"
        },
        "index": {
          "description": "Representation-improving polymorphic lists",
          "hierarchy": "Data Adaptive List",
          "module": "Data.Adaptive.List",
          "name": "AdaptList",
          "package": "adaptive-containers",
          "partial": "Adapt List",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/adaptive-containers/docs/Data-Adaptive-List.html#t:AdaptList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e, Append two lists, i.e.,\n\u003c/p\u003e\u003cpre\u003e [x1, ..., xm] ++ [y1, ..., yn] == [x1, ..., xm, y1, ..., yn]\n [x1, ..., xm] ++ [y1, ...] == [x1, ..., xm, y1, ...]\n\u003c/pre\u003e\u003cp\u003eIf the first list is not finite, the result is the first list.\n The spine of the first list argument must be copied.\n\u003c/p\u003e",
          "module": "Data.Adaptive.List",
          "name": "(++)",
          "package": "adaptive-containers",
          "signature": "List a -\u003e List a -\u003e List a",
          "source": "src/Data-Adaptive-List.html#%2B%2B",
          "type": "function"
        },
        "index": {
          "description": "Append two lists i.e x1 xm y1 yn x1 xm y1 yn x1 xm y1 x1 xm y1 If the first list is not finite the result is the first list The spine of the first list argument must be copied",
          "hierarchy": "Data Adaptive List",
          "module": "Data.Adaptive.List",
          "name": "(++) ++",
          "normalized": "List a-\u003eList a-\u003eList a",
          "package": "adaptive-containers",
          "signature": "List a-\u003eList a-\u003eList a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adaptive-containers/docs/Data-Adaptive-List.html#v:-43--43-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApplied to a predicate and a list, \u003ccode\u003e\u003ca\u003eall\u003c/a\u003e\u003c/code\u003e determines if all elements\n of the list satisfy the predicate.\n\u003c/p\u003e",
          "module": "Data.Adaptive.List",
          "name": "all",
          "package": "adaptive-containers",
          "signature": "(a -\u003e Bool) -\u003e List a -\u003e Bool",
          "source": "src/Data-Adaptive-List.html#all",
          "type": "function"
        },
        "index": {
          "description": "Applied to predicate and list all determines if all elements of the list satisfy the predicate",
          "hierarchy": "Data Adaptive List",
          "module": "Data.Adaptive.List",
          "name": "all",
          "normalized": "(a-\u003eBool)-\u003eList a-\u003eBool",
          "package": "adaptive-containers",
          "signature": "(a-\u003eBool)-\u003eList a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adaptive-containers/docs/Data-Adaptive-List.html#v:all"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. \u003ccode\u003e\u003ca\u003eand\u003c/a\u003e\u003c/code\u003e returns the conjunction of a Boolean list.  For the result to be\n \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e, the list must be finite; \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e, however, results from a \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e\n value at a finite index of a finite or infinite list.\n\u003c/p\u003e",
          "module": "Data.Adaptive.List",
          "name": "and",
          "package": "adaptive-containers",
          "signature": "List Bool -\u003e Bool",
          "source": "src/Data-Adaptive-List.html#and",
          "type": "function"
        },
        "index": {
          "description": "and returns the conjunction of Boolean list For the result to be True the list must be finite False however results from False value at finite index of finite or infinite list",
          "hierarchy": "Data Adaptive List",
          "module": "Data.Adaptive.List",
          "name": "and",
          "normalized": "List Bool-\u003eBool",
          "package": "adaptive-containers",
          "signature": "List Bool-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adaptive-containers/docs/Data-Adaptive-List.html#v:and"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Applied to a predicate and a list, \u003ccode\u003e\u003ca\u003eany\u003c/a\u003e\u003c/code\u003e determines if any element\n of the list satisfies the predicate.\n\u003c/p\u003e",
          "module": "Data.Adaptive.List",
          "name": "any",
          "package": "adaptive-containers",
          "signature": "(a -\u003e Bool) -\u003e List a -\u003e Bool",
          "source": "src/Data-Adaptive-List.html#any",
          "type": "function"
        },
        "index": {
          "description": "Applied to predicate and list any determines if any element of the list satisfies the predicate",
          "hierarchy": "Data Adaptive List",
          "module": "Data.Adaptive.List",
          "name": "any",
          "normalized": "(a-\u003eBool)-\u003eList a-\u003eBool",
          "package": "adaptive-containers",
          "signature": "(a-\u003eBool)-\u003eList a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adaptive-containers/docs/Data-Adaptive-List.html#v:any"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Adaptive.List",
          "name": "bottom",
          "package": "adaptive-containers",
          "signature": "a",
          "source": "src/Data-Adaptive-List.html#bottom",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Adaptive List",
          "module": "Data.Adaptive.List",
          "name": "bottom",
          "package": "adaptive-containers",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adaptive-containers/docs/Data-Adaptive-List.html#v:bottom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Concatenate a list of lists.\n concat :: [[a]] -\u003e [a]\n\u003c/p\u003e",
          "module": "Data.Adaptive.List",
          "name": "concat",
          "package": "adaptive-containers",
          "signature": "List (List a) -\u003e List a",
          "source": "src/Data-Adaptive-List.html#concat",
          "type": "function"
        },
        "index": {
          "description": "Concatenate list of lists concat",
          "hierarchy": "Data Adaptive List",
          "module": "Data.Adaptive.List",
          "name": "concat",
          "normalized": "List(List a)-\u003eList a",
          "package": "adaptive-containers",
          "signature": "List(List a)-\u003eList a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adaptive-containers/docs/Data-Adaptive-List.html#v:concat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e, \u003cem\u003efusion\u003c/em\u003e. Map a function over a list and concatenate the results.\n\u003c/p\u003e",
          "module": "Data.Adaptive.List",
          "name": "concatMap",
          "package": "adaptive-containers",
          "signature": "(a -\u003e List a1) -\u003e List a -\u003e List a1",
          "source": "src/Data-Adaptive-List.html#concatMap",
          "type": "function"
        },
        "index": {
          "description": "fusion Map function over list and concatenate the results",
          "hierarchy": "Data Adaptive List",
          "module": "Data.Adaptive.List",
          "name": "concatMap",
          "normalized": "(a-\u003eList a)-\u003eList a-\u003eList a",
          "package": "adaptive-containers",
          "partial": "Map",
          "signature": "(a-\u003eList a)-\u003eList a-\u003eList a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adaptive-containers/docs/Data-Adaptive-List.html#v:concatMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrepend a value onto a list\n\u003c/p\u003e",
          "module": "Data.Adaptive.List",
          "name": "cons",
          "package": "adaptive-containers",
          "signature": "a -\u003e List a -\u003e List a",
          "source": "src/Data-Adaptive-List.html#cons",
          "type": "method"
        },
        "index": {
          "description": "Prepend value onto list",
          "hierarchy": "Data Adaptive List",
          "module": "Data.Adaptive.List",
          "name": "cons",
          "normalized": "a-\u003eList a-\u003eList a",
          "package": "adaptive-containers",
          "signature": "a-\u003eList a-\u003eList a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/adaptive-containers/docs/Data-Adaptive-List.html#v:cons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003efusion\u003c/em\u003e. \u003ccode\u003e\u003ca\u003ecycle\u003c/a\u003e\u003c/code\u003e ties a finite list into a circular one, or equivalently,\n the infinite repetition of the original list.  It is the identity\n on infinite lists.\n\u003c/p\u003e",
          "module": "Data.Adaptive.List",
          "name": "cycle",
          "package": "adaptive-containers",
          "signature": "List a -\u003e List a",
          "source": "src/Data-Adaptive-List.html#cycle",
          "type": "function"
        },
        "index": {
          "description": "fusion cycle ties finite list into circular one or equivalently the infinite repetition of the original list It is the identity on infinite lists",
          "hierarchy": "Data Adaptive List",
          "module": "Data.Adaptive.List",
          "name": "cycle",
          "normalized": "List a-\u003eList a",
          "package": "adaptive-containers",
          "signature": "List a-\u003eList a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adaptive-containers/docs/Data-Adaptive-List.html#v:cycle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. \u003ccode\u003e\u003ca\u003edrop\u003c/a\u003e\u003c/code\u003e \u003ccode\u003en xs\u003c/code\u003e returns the suffix of \u003ccode\u003exs\u003c/code\u003e\n after the first \u003ccode\u003en\u003c/code\u003e elements, or \u003ccode\u003e[]\u003c/code\u003e if \u003ccode\u003en \u003e \u003ccode\u003e\u003ca\u003elength\u003c/a\u003e\u003c/code\u003e xs\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e drop 6 \"Hello World!\" == \"World!\"\n drop 3 [1,2,3,4,5] == [4,5]\n drop 3 [1,2] == []\n drop 3 [] == []\n drop (-1) [1,2] == [1,2]\n drop 0 [1,2] == [1,2]\n\u003c/pre\u003e\u003cp\u003eIt is an instance of the more general \u003ccode\u003eData.List.genericDrop\u003c/code\u003e,\n in which \u003ccode\u003en\u003c/code\u003e may be of any integral type.\n\u003c/p\u003e",
          "module": "Data.Adaptive.List",
          "name": "drop",
          "package": "adaptive-containers",
          "signature": "Int -\u003e List a -\u003e List a",
          "source": "src/Data-Adaptive-List.html#drop",
          "type": "function"
        },
        "index": {
          "description": "drop xs returns the suffix of xs after the first elements or if length xs drop Hello World World drop drop drop drop drop It is an instance of the more general Data.List.genericDrop in which may be of any integral type",
          "hierarchy": "Data Adaptive List",
          "module": "Data.Adaptive.List",
          "name": "drop",
          "normalized": "Int-\u003eList a-\u003eList a",
          "package": "adaptive-containers",
          "signature": "Int-\u003eList a-\u003eList a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adaptive-containers/docs/Data-Adaptive-List.html#v:drop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. \u003ccode\u003e\u003ca\u003eelem\u003c/a\u003e\u003c/code\u003e is the list membership predicate, usually written\n in infix form, e.g., \u003ccode\u003ex \u003ccode\u003e\u003ca\u003eelem\u003c/a\u003e\u003c/code\u003e xs\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Adaptive.List",
          "name": "elem",
          "package": "adaptive-containers",
          "signature": "a -\u003e List a -\u003e Bool",
          "source": "src/Data-Adaptive-List.html#elem",
          "type": "function"
        },
        "index": {
          "description": "elem is the list membership predicate usually written in infix form e.g elem xs",
          "hierarchy": "Data Adaptive List",
          "module": "Data.Adaptive.List",
          "name": "elem",
          "normalized": "a-\u003eList a-\u003eBool",
          "package": "adaptive-containers",
          "signature": "a-\u003eList a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adaptive-containers/docs/Data-Adaptive-List.html#v:elem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe empty list\n\u003c/p\u003e",
          "module": "Data.Adaptive.List",
          "name": "empty",
          "package": "adaptive-containers",
          "signature": "List a",
          "source": "src/Data-Adaptive-List.html#empty",
          "type": "method"
        },
        "index": {
          "description": "The empty list",
          "hierarchy": "Data Adaptive List",
          "module": "Data.Adaptive.List",
          "name": "empty",
          "package": "adaptive-containers",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/adaptive-containers/docs/Data-Adaptive-List.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e, construct a list by enumerating a range\n\u003c/p\u003e",
          "module": "Data.Adaptive.List",
          "name": "enumFromToList",
          "package": "adaptive-containers",
          "signature": "a -\u003e a -\u003e List a",
          "source": "src/Data-Adaptive-List.html#enumFromToList",
          "type": "function"
        },
        "index": {
          "description": "construct list by enumerating range",
          "hierarchy": "Data Adaptive List",
          "module": "Data.Adaptive.List",
          "name": "enumFromToList",
          "normalized": "a-\u003ea-\u003eList a",
          "package": "adaptive-containers",
          "partial": "From To List",
          "signature": "a-\u003ea-\u003eList a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adaptive-containers/docs/Data-Adaptive-List.html#v:enumFromToList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Adaptive.List",
          "name": "errorEmptyList",
          "package": "adaptive-containers",
          "signature": "String -\u003e a",
          "source": "src/Data-Adaptive-List.html#errorEmptyList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Adaptive List",
          "module": "Data.Adaptive.List",
          "name": "errorEmptyList",
          "normalized": "String-\u003ea",
          "package": "adaptive-containers",
          "partial": "Empty List",
          "signature": "String-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adaptive-containers/docs/Data-Adaptive-List.html#v:errorEmptyList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. \u003ccode\u003e\u003ca\u003efilter\u003c/a\u003e\u003c/code\u003e, applied to a predicate and a list, returns the list of\n those elements that satisfy the predicate; i.e.,\n\u003c/p\u003e\u003cpre\u003e filter p xs = [ x | x \u003c- xs, p x]\n\u003c/pre\u003e\u003cp\u003eProperties:\n\u003c/p\u003e\u003cpre\u003e filter p (filter q s) = filter (\\x -\u003e q x && p x) s\n\u003c/pre\u003e",
          "module": "Data.Adaptive.List",
          "name": "filter",
          "package": "adaptive-containers",
          "signature": "(a -\u003e Bool) -\u003e List a -\u003e List a",
          "source": "src/Data-Adaptive-List.html#filter",
          "type": "function"
        },
        "index": {
          "description": "filter applied to predicate and list returns the list of those elements that satisfy the predicate i.e filter xs xs Properties filter filter filter",
          "hierarchy": "Data Adaptive List",
          "module": "Data.Adaptive.List",
          "name": "filter",
          "normalized": "(a-\u003eBool)-\u003eList a-\u003eList a",
          "package": "adaptive-containers",
          "signature": "(a-\u003eBool)-\u003eList a-\u003eList a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adaptive-containers/docs/Data-Adaptive-List.html#v:filter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e, applied to a binary operator, a starting value (typically\n the left-identity of the operator), and a list, reduces the list\n using the binary operator, from left to right:\n\u003c/p\u003e\u003cpre\u003e foldl f z [x1, x2, ..., xn] == (...((z `f` x1) `f` x2) `f`...) `f` xn\n\u003c/pre\u003e\u003cp\u003eThe list must be finite. The accumulator is whnf strict.\n\u003c/p\u003e",
          "module": "Data.Adaptive.List",
          "name": "foldl",
          "package": "adaptive-containers",
          "signature": "(a -\u003e b -\u003e a) -\u003e a -\u003e List b -\u003e a",
          "source": "src/Data-Adaptive-List.html#foldl",
          "type": "function"
        },
        "index": {
          "description": "foldl applied to binary operator starting value typically the left-identity of the operator and list reduces the list using the binary operator from left to right foldl x1 x2 xn x1 x2 xn The list must be finite The accumulator is whnf strict",
          "hierarchy": "Data Adaptive List",
          "module": "Data.Adaptive.List",
          "name": "foldl",
          "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003eList b-\u003ea",
          "package": "adaptive-containers",
          "signature": "(a-\u003eb-\u003ea)-\u003ea-\u003eList b-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adaptive-containers/docs/Data-Adaptive-List.html#v:foldl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. \u003ccode\u003e\u003ca\u003efoldl1\u003c/a\u003e\u003c/code\u003e is a variant of \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e that has no starting value argument,\n and thus must be applied to non-empty lists.\n\u003c/p\u003e",
          "module": "Data.Adaptive.List",
          "name": "foldl1",
          "package": "adaptive-containers",
          "signature": "(a -\u003e a -\u003e a) -\u003e List a -\u003e a",
          "source": "src/Data-Adaptive-List.html#foldl1",
          "type": "function"
        },
        "index": {
          "description": "foldl1 is variant of foldl that has no starting value argument and thus must be applied to non-empty lists",
          "hierarchy": "Data Adaptive List",
          "module": "Data.Adaptive.List",
          "name": "foldl1",
          "normalized": "(a-\u003ea-\u003ea)-\u003eList a-\u003ea",
          "package": "adaptive-containers",
          "signature": "(a-\u003ea-\u003ea)-\u003eList a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adaptive-containers/docs/Data-Adaptive-List.html#v:foldl1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e, applied to a binary operator, a starting value (typically\n the right-identity of the operator), and a list, reduces the list\n using the binary operator, from right to left:\n\u003c/p\u003e\u003cpre\u003e foldr f z [x1, x2, ..., xn] == x1 `f` (x2 `f` ... (xn `f` z)...)\n\u003c/pre\u003e",
          "module": "Data.Adaptive.List",
          "name": "foldr",
          "package": "adaptive-containers",
          "signature": "(a -\u003e b -\u003e b) -\u003e b -\u003e List a -\u003e b",
          "source": "src/Data-Adaptive-List.html#foldr",
          "type": "function"
        },
        "index": {
          "description": "foldr applied to binary operator starting value typically the right-identity of the operator and list reduces the list using the binary operator from right to left foldr x1 x2 xn x1 x2 xn",
          "hierarchy": "Data Adaptive List",
          "module": "Data.Adaptive.List",
          "name": "foldr",
          "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003eList a-\u003eb",
          "package": "adaptive-containers",
          "signature": "(a-\u003eb-\u003eb)-\u003eb-\u003eList a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adaptive-containers/docs/Data-Adaptive-List.html#v:foldr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. \u003ccode\u003e\u003ca\u003efoldr1\u003c/a\u003e\u003c/code\u003e is a variant of \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e that has no starting value argument,\n and thus must be applied to non-empty lists.\n\u003c/p\u003e",
          "module": "Data.Adaptive.List",
          "name": "foldr1",
          "package": "adaptive-containers",
          "signature": "(a -\u003e a -\u003e a) -\u003e List a -\u003e a",
          "source": "src/Data-Adaptive-List.html#foldr1",
          "type": "function"
        },
        "index": {
          "description": "foldr1 is variant of foldr that has no starting value argument and thus must be applied to non-empty lists",
          "hierarchy": "Data Adaptive List",
          "module": "Data.Adaptive.List",
          "name": "foldr1",
          "normalized": "(a-\u003ea-\u003ea)-\u003eList a-\u003ea",
          "package": "adaptive-containers",
          "signature": "(a-\u003ea-\u003ea)-\u003eList a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adaptive-containers/docs/Data-Adaptive-List.html#v:foldr1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e, convert an adaptive list to a regular list\n\u003c/p\u003e",
          "module": "Data.Adaptive.List",
          "name": "fromList",
          "package": "adaptive-containers",
          "signature": "[a] -\u003e List a",
          "source": "src/Data-Adaptive-List.html#fromList",
          "type": "function"
        },
        "index": {
          "description": "convert an adaptive list to regular list",
          "hierarchy": "Data Adaptive List",
          "module": "Data.Adaptive.List",
          "name": "fromList",
          "normalized": "[a]-\u003eList a",
          "package": "adaptive-containers",
          "partial": "List",
          "signature": "[a]-\u003eList a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adaptive-containers/docs/Data-Adaptive-List.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe first element of the list\n\u003c/p\u003e",
          "module": "Data.Adaptive.List",
          "name": "head",
          "package": "adaptive-containers",
          "signature": "List a -\u003e a",
          "source": "src/Data-Adaptive-List.html#head",
          "type": "method"
        },
        "index": {
          "description": "The first element of the list",
          "hierarchy": "Data Adaptive List",
          "module": "Data.Adaptive.List",
          "name": "head",
          "normalized": "List a-\u003ea",
          "package": "adaptive-containers",
          "signature": "List a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/adaptive-containers/docs/Data-Adaptive-List.html#v:head"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Return all the elements of a list except the last one.\n The list must be finite and non-empty.\n\u003c/p\u003e",
          "module": "Data.Adaptive.List",
          "name": "init",
          "package": "adaptive-containers",
          "signature": "List a -\u003e List a",
          "source": "src/Data-Adaptive-List.html#init",
          "type": "function"
        },
        "index": {
          "description": "Return all the elements of list except the last one The list must be finite and non-empty",
          "hierarchy": "Data Adaptive List",
          "module": "Data.Adaptive.List",
          "name": "init",
          "normalized": "List a-\u003eList a",
          "package": "adaptive-containers",
          "signature": "List a-\u003eList a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adaptive-containers/docs/Data-Adaptive-List.html#v:init"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. \u003ccode\u003e\u003ca\u003eintercalate\u003c/a\u003e\u003c/code\u003e \u003ccode\u003exs xss\u003c/code\u003e is equivalent to \u003ccode\u003e(\u003ccode\u003e\u003ca\u003econcat\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eintersperse\u003c/a\u003e\u003c/code\u003e xs xss))\u003c/code\u003e.\n It inserts the list \u003ccode\u003exs\u003c/code\u003e in between the lists in \u003ccode\u003exss\u003c/code\u003e and concatenates the\n result.\n\u003c/p\u003e\u003cpre\u003e intercalate = concat . intersperse\n\u003c/pre\u003e",
          "module": "Data.Adaptive.List",
          "name": "intercalate",
          "package": "adaptive-containers",
          "signature": "List a -\u003e List (List a) -\u003e List a",
          "source": "src/Data-Adaptive-List.html#intercalate",
          "type": "function"
        },
        "index": {
          "description": "intercalate xs xss is equivalent to concat intersperse xs xss It inserts the list xs in between the lists in xss and concatenates the result intercalate concat intersperse",
          "hierarchy": "Data Adaptive List",
          "module": "Data.Adaptive.List",
          "name": "intercalate",
          "normalized": "List a-\u003eList(List a)-\u003eList a",
          "package": "adaptive-containers",
          "signature": "List a-\u003eList(List a)-\u003eList a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adaptive-containers/docs/Data-Adaptive-List.html#v:intercalate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. The \u003ccode\u003e\u003ca\u003eintersperse\u003c/a\u003e\u003c/code\u003e function takes an element and a list and\n `intersperses' that element between the elements of the list.\n For example,\n\u003c/p\u003e\u003cpre\u003e intersperse ',' \"abcde\" == \"a,b,c,d,e\"\n\u003c/pre\u003e",
          "module": "Data.Adaptive.List",
          "name": "intersperse",
          "package": "adaptive-containers",
          "signature": "a -\u003e List a -\u003e List a",
          "source": "src/Data-Adaptive-List.html#intersperse",
          "type": "function"
        },
        "index": {
          "description": "The intersperse function takes an element and list and intersperses that element between the elements of the list For example intersperse abcde",
          "hierarchy": "Data Adaptive List",
          "module": "Data.Adaptive.List",
          "name": "intersperse",
          "normalized": "a-\u003eList a-\u003eList a",
          "package": "adaptive-containers",
          "signature": "a-\u003eList a-\u003eList a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adaptive-containers/docs/Data-Adaptive-List.html#v:intersperse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e, \u003ccode\u003e\u003ca\u003eiterate\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ef x\u003c/code\u003e returns an infinite list of repeated applications\n of \u003ccode\u003ef\u003c/code\u003e to \u003ccode\u003ex\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e iterate f x == [x, f x, f (f x), ...]\n\u003c/pre\u003e",
          "module": "Data.Adaptive.List",
          "name": "iterate",
          "package": "adaptive-containers",
          "signature": "(a -\u003e a) -\u003e a -\u003e List a",
          "source": "src/Data-Adaptive-List.html#iterate",
          "type": "function"
        },
        "index": {
          "description": "iterate returns an infinite list of repeated applications of to iterate",
          "hierarchy": "Data Adaptive List",
          "module": "Data.Adaptive.List",
          "name": "iterate",
          "normalized": "(a-\u003ea)-\u003ea-\u003eList a",
          "package": "adaptive-containers",
          "signature": "(a-\u003ea)-\u003ea-\u003eList a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adaptive-containers/docs/Data-Adaptive-List.html#v:iterate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e, Extract the last element of a list, which must be finite\n and non-empty.\n\u003c/p\u003e",
          "module": "Data.Adaptive.List",
          "name": "last",
          "package": "adaptive-containers",
          "signature": "List a -\u003e a",
          "source": "src/Data-Adaptive-List.html#last",
          "type": "function"
        },
        "index": {
          "description": "Extract the last element of list which must be finite and non-empty",
          "hierarchy": "Data Adaptive List",
          "module": "Data.Adaptive.List",
          "name": "last",
          "normalized": "List a-\u003ea",
          "package": "adaptive-containers",
          "signature": "List a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adaptive-containers/docs/Data-Adaptive-List.html#v:last"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. \u003ccode\u003e\u003ca\u003elength\u003c/a\u003e\u003c/code\u003e returns the length of a finite list as an \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e.\n It is an instance of the more general \u003ccode\u003eData.List.genericLength\u003c/code\u003e,\n the result type of which may be any kind of number.\n\u003c/p\u003e",
          "module": "Data.Adaptive.List",
          "name": "length",
          "package": "adaptive-containers",
          "signature": "List a -\u003e Int",
          "source": "src/Data-Adaptive-List.html#length",
          "type": "function"
        },
        "index": {
          "description": "length returns the length of finite list as an Int It is an instance of the more general Data.List.genericLength the result type of which may be any kind of number",
          "hierarchy": "Data Adaptive List",
          "module": "Data.Adaptive.List",
          "name": "length",
          "normalized": "List a-\u003eInt",
          "package": "adaptive-containers",
          "signature": "List a-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adaptive-containers/docs/Data-Adaptive-List.html#v:length"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. \u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ef xs\u003c/code\u003e is the list obtained by applying \u003ccode\u003ef\u003c/code\u003e to each element\n of \u003ccode\u003exs\u003c/code\u003e, i.e.,\n\u003c/p\u003e\u003cpre\u003e map f [x1, x2, ..., xn] == [f x1, f x2, ..., f xn]\n map f [x1, x2, ...] == [f x1, f x2, ...]\n\u003c/pre\u003e\u003cp\u003eProperties:\n\u003c/p\u003e\u003cpre\u003e map f . map g         = map (f . g)\n map f (repeat x)      = repeat (f x)\n map f (replicate n x) = replicate n (f x)\n\u003c/pre\u003e",
          "module": "Data.Adaptive.List",
          "name": "map",
          "package": "adaptive-containers",
          "signature": "(a -\u003e b) -\u003e List a -\u003e List b",
          "source": "src/Data-Adaptive-List.html#map",
          "type": "function"
        },
        "index": {
          "description": "map xs is the list obtained by applying to each element of xs i.e map x1 x2 xn x1 x2 xn map x1 x2 x1 x2 Properties map map map map repeat repeat map replicate replicate",
          "hierarchy": "Data Adaptive List",
          "module": "Data.Adaptive.List",
          "name": "map",
          "normalized": "(a-\u003eb)-\u003eList a-\u003eList b",
          "package": "adaptive-containers",
          "signature": "(a-\u003eb)-\u003eList a-\u003eList b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adaptive-containers/docs/Data-Adaptive-List.html#v:map"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. \u003ccode\u003e\u003ca\u003emaximum\u003c/a\u003e\u003c/code\u003e returns the maximum value from a list,\n which must be non-empty, finite, and of an ordered type.\n It is a special case of \u003ccode\u003eData.List.maximumBy\u003c/code\u003e, which allows the\n programmer to supply their own comparison function.\n\u003c/p\u003e",
          "module": "Data.Adaptive.List",
          "name": "maximum",
          "package": "adaptive-containers",
          "signature": "List a -\u003e a",
          "source": "src/Data-Adaptive-List.html#maximum",
          "type": "function"
        },
        "index": {
          "description": "maximum returns the maximum value from list which must be non-empty finite and of an ordered type It is special case of Data.List.maximumBy which allows the programmer to supply their own comparison function",
          "hierarchy": "Data Adaptive List",
          "module": "Data.Adaptive.List",
          "name": "maximum",
          "normalized": "List a-\u003ea",
          "package": "adaptive-containers",
          "signature": "List a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adaptive-containers/docs/Data-Adaptive-List.html#v:maximum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. \u003ccode\u003e\u003ca\u003eminimum\u003c/a\u003e\u003c/code\u003e returns the minimum value from a list,\n which must be non-empty, finite, and of an ordered type.\n It is a special case of \u003ccode\u003eData.List.minimumBy\u003c/code\u003e, which allows the\n programmer to supply their own comparison function.\n\u003c/p\u003e",
          "module": "Data.Adaptive.List",
          "name": "minimum",
          "package": "adaptive-containers",
          "signature": "List a -\u003e a",
          "source": "src/Data-Adaptive-List.html#minimum",
          "type": "function"
        },
        "index": {
          "description": "minimum returns the minimum value from list which must be non-empty finite and of an ordered type It is special case of Data.List.minimumBy which allows the programmer to supply their own comparison function",
          "hierarchy": "Data Adaptive List",
          "module": "Data.Adaptive.List",
          "name": "minimum",
          "normalized": "List a-\u003ea",
          "package": "adaptive-containers",
          "signature": "List a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adaptive-containers/docs/Data-Adaptive-List.html#v:minimum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Adaptive.List",
          "name": "moduleError",
          "package": "adaptive-containers",
          "signature": "String -\u003e String -\u003e a",
          "source": "src/Data-Adaptive-List.html#moduleError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Adaptive List",
          "module": "Data.Adaptive.List",
          "name": "moduleError",
          "normalized": "String-\u003eString-\u003ea",
          "package": "adaptive-containers",
          "partial": "Error",
          "signature": "String-\u003eString-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adaptive-containers/docs/Data-Adaptive-List.html#v:moduleError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. \u003ccode\u003e\u003ca\u003enotElem\u003c/a\u003e\u003c/code\u003e is the negation of \u003ccode\u003e\u003ca\u003eelem\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Adaptive.List",
          "name": "notElem",
          "package": "adaptive-containers",
          "signature": "a -\u003e List a -\u003e Bool",
          "source": "src/Data-Adaptive-List.html#notElem",
          "type": "function"
        },
        "index": {
          "description": "notElem is the negation of elem",
          "hierarchy": "Data Adaptive List",
          "module": "Data.Adaptive.List",
          "name": "notElem",
          "normalized": "a-\u003eList a-\u003eBool",
          "package": "adaptive-containers",
          "partial": "Elem",
          "signature": "a-\u003eList a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adaptive-containers/docs/Data-Adaptive-List.html#v:notElem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIs the list empty?\n\u003c/p\u003e",
          "module": "Data.Adaptive.List",
          "name": "null",
          "package": "adaptive-containers",
          "signature": "List a -\u003e Bool",
          "source": "src/Data-Adaptive-List.html#null",
          "type": "method"
        },
        "index": {
          "description": "Is the list empty",
          "hierarchy": "Data Adaptive List",
          "module": "Data.Adaptive.List",
          "name": "null",
          "normalized": "List a-\u003eBool",
          "package": "adaptive-containers",
          "signature": "List a-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/adaptive-containers/docs/Data-Adaptive-List.html#v:null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. \u003ccode\u003e\u003ca\u003eor\u003c/a\u003e\u003c/code\u003e returns the disjunction of a Boolean list.  For the result to be\n \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e, the list must be finite; \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e, however, results from a \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e\n value at a finite index of a finite or infinite list.\n\u003c/p\u003e",
          "module": "Data.Adaptive.List",
          "name": "or",
          "package": "adaptive-containers",
          "signature": "List Bool -\u003e Bool",
          "source": "src/Data-Adaptive-List.html#or",
          "type": "function"
        },
        "index": {
          "description": "or returns the disjunction of Boolean list For the result to be False the list must be finite True however results from True value at finite index of finite or infinite list",
          "hierarchy": "Data Adaptive List",
          "module": "Data.Adaptive.List",
          "name": "or",
          "normalized": "List Bool-\u003eBool",
          "package": "adaptive-containers",
          "signature": "List Bool-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adaptive-containers/docs/Data-Adaptive-List.html#v:or"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e,\u003cem\u003efusion\u003c/em\u003e. The \u003ccode\u003e\u003ca\u003eproduct\u003c/a\u003e\u003c/code\u003e function computes the product of a finite list of numbers.\n\u003c/p\u003e",
          "module": "Data.Adaptive.List",
          "name": "product",
          "package": "adaptive-containers",
          "signature": "List a -\u003e a",
          "source": "src/Data-Adaptive-List.html#product",
          "type": "function"
        },
        "index": {
          "description": "fusion The product function computes the product of finite list of numbers",
          "hierarchy": "Data Adaptive List",
          "module": "Data.Adaptive.List",
          "name": "product",
          "normalized": "List a-\u003ea",
          "package": "adaptive-containers",
          "signature": "List a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adaptive-containers/docs/Data-Adaptive-List.html#v:product"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. \u003ccode\u003e\u003ca\u003erepeat\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ex\u003c/code\u003e is an infinite list, with \u003ccode\u003ex\u003c/code\u003e the value of every element.\n\u003c/p\u003e",
          "module": "Data.Adaptive.List",
          "name": "repeat",
          "package": "adaptive-containers",
          "signature": "a -\u003e List a",
          "source": "src/Data-Adaptive-List.html#repeat",
          "type": "function"
        },
        "index": {
          "description": "repeat is an infinite list with the value of every element",
          "hierarchy": "Data Adaptive List",
          "module": "Data.Adaptive.List",
          "name": "repeat",
          "normalized": "a-\u003eList a",
          "package": "adaptive-containers",
          "signature": "a-\u003eList a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adaptive-containers/docs/Data-Adaptive-List.html#v:repeat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. \u003ccode\u003e\u003ca\u003ereplicate\u003c/a\u003e\u003c/code\u003e \u003ccode\u003en x\u003c/code\u003e is a list of length \u003ccode\u003en\u003c/code\u003e with \u003ccode\u003ex\u003c/code\u003e the value of\n every element.\n It is an instance of the more general \u003ccode\u003eData.List.genericReplicate\u003c/code\u003e,\n in which \u003ccode\u003en\u003c/code\u003e may be of any integral type.\n\u003c/p\u003e",
          "module": "Data.Adaptive.List",
          "name": "replicate",
          "package": "adaptive-containers",
          "signature": "Int -\u003e a -\u003e List a",
          "source": "src/Data-Adaptive-List.html#replicate",
          "type": "function"
        },
        "index": {
          "description": "replicate is list of length with the value of every element It is an instance of the more general Data.List.genericReplicate in which may be of any integral type",
          "hierarchy": "Data Adaptive List",
          "module": "Data.Adaptive.List",
          "name": "replicate",
          "normalized": "Int-\u003ea-\u003eList a",
          "package": "adaptive-containers",
          "signature": "Int-\u003ea-\u003eList a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adaptive-containers/docs/Data-Adaptive-List.html#v:replicate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. \u003ccode\u003e\u003ca\u003ereverse\u003c/a\u003e\u003c/code\u003e \u003ccode\u003exs\u003c/code\u003e returns the elements of \u003ccode\u003exs\u003c/code\u003e in reverse order.\n \u003ccode\u003exs\u003c/code\u003e must be finite. Will fuse as a consumer only.\n\u003c/p\u003e",
          "module": "Data.Adaptive.List",
          "name": "reverse",
          "package": "adaptive-containers",
          "signature": "List a -\u003e List a",
          "source": "src/Data-Adaptive-List.html#reverse",
          "type": "function"
        },
        "index": {
          "description": "reverse xs returns the elements of xs in reverse order xs must be finite Will fuse as consumer only",
          "hierarchy": "Data Adaptive List",
          "module": "Data.Adaptive.List",
          "name": "reverse",
          "normalized": "List a-\u003eList a",
          "package": "adaptive-containers",
          "signature": "List a-\u003eList a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adaptive-containers/docs/Data-Adaptive-List.html#v:reverse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. \u003ccode\u003e\u003ca\u003escanl\u003c/a\u003e\u003c/code\u003e is similar to \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e, but returns a list of successive\n reduced values from the left:\n\u003c/p\u003e\u003cpre\u003e scanl f z [x1, x2, ...] == [z, z `f` x1, (z `f` x1) `f` x2, ...]\n\u003c/pre\u003e\u003cp\u003eProperties:\n\u003c/p\u003e\u003cpre\u003e last (scanl f z xs) == foldl f z x\n\u003c/pre\u003e",
          "module": "Data.Adaptive.List",
          "name": "scanl",
          "package": "adaptive-containers",
          "signature": "(a -\u003e b -\u003e a) -\u003e a -\u003e List b -\u003e List a",
          "source": "src/Data-Adaptive-List.html#scanl",
          "type": "function"
        },
        "index": {
          "description": "scanl is similar to foldl but returns list of successive reduced values from the left scanl x1 x2 x1 x1 x2 Properties last scanl xs foldl",
          "hierarchy": "Data Adaptive List",
          "module": "Data.Adaptive.List",
          "name": "scanl",
          "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003eList b-\u003eList a",
          "package": "adaptive-containers",
          "signature": "(a-\u003eb-\u003ea)-\u003ea-\u003eList b-\u003eList a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adaptive-containers/docs/Data-Adaptive-List.html#v:scanl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. \u003ccode\u003e\u003ca\u003escanl1\u003c/a\u003e\u003c/code\u003e is a variant of \u003ccode\u003e\u003ca\u003escanl\u003c/a\u003e\u003c/code\u003e that has no starting value argument:\n\u003c/p\u003e\u003cpre\u003e scanl1 f [x1, x2, ...] == [x1, x1 `f` x2, ...]\n\u003c/pre\u003e",
          "module": "Data.Adaptive.List",
          "name": "scanl1",
          "package": "adaptive-containers",
          "signature": "(a -\u003e a -\u003e a) -\u003e List a -\u003e List a",
          "source": "src/Data-Adaptive-List.html#scanl1",
          "type": "function"
        },
        "index": {
          "description": "scanl1 is variant of scanl that has no starting value argument scanl1 x1 x2 x1 x1 x2",
          "hierarchy": "Data Adaptive List",
          "module": "Data.Adaptive.List",
          "name": "scanl1",
          "normalized": "(a-\u003ea-\u003ea)-\u003eList a-\u003eList a",
          "package": "adaptive-containers",
          "signature": "(a-\u003ea-\u003ea)-\u003eList a-\u003eList a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adaptive-containers/docs/Data-Adaptive-List.html#v:scanl1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. \u003ccode\u003e\u003ca\u003escanr\u003c/a\u003e\u003c/code\u003e is the right-to-left dual of \u003ccode\u003e\u003ca\u003escanl\u003c/a\u003e\u003c/code\u003e.\n Properties:\n\u003c/p\u003e\u003cpre\u003e head (scanr f z xs) == foldr f z xs\n\u003c/pre\u003e",
          "module": "Data.Adaptive.List",
          "name": "scanr",
          "package": "adaptive-containers",
          "signature": "(a -\u003e b -\u003e b) -\u003e b -\u003e List a -\u003e List b",
          "source": "src/Data-Adaptive-List.html#scanr",
          "type": "function"
        },
        "index": {
          "description": "scanr is the right-to-left dual of scanl Properties head scanr xs foldr xs",
          "hierarchy": "Data Adaptive List",
          "module": "Data.Adaptive.List",
          "name": "scanr",
          "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003eList a-\u003eList b",
          "package": "adaptive-containers",
          "signature": "(a-\u003eb-\u003eb)-\u003eb-\u003eList a-\u003eList b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adaptive-containers/docs/Data-Adaptive-List.html#v:scanr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003escanr1\u003c/a\u003e\u003c/code\u003e is a variant of \u003ccode\u003e\u003ca\u003escanr\u003c/a\u003e\u003c/code\u003e that has no starting value argument.\n\u003c/p\u003e",
          "module": "Data.Adaptive.List",
          "name": "scanr1",
          "package": "adaptive-containers",
          "signature": "(a -\u003e a -\u003e a) -\u003e List a -\u003e List a",
          "source": "src/Data-Adaptive-List.html#scanr1",
          "type": "function"
        },
        "index": {
          "description": "scanr1 is variant of scanr that has no starting value argument",
          "hierarchy": "Data Adaptive List",
          "module": "Data.Adaptive.List",
          "name": "scanr1",
          "normalized": "(a-\u003ea-\u003ea)-\u003eList a-\u003eList a",
          "package": "adaptive-containers",
          "signature": "(a-\u003ea-\u003ea)-\u003eList a-\u003eList a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adaptive-containers/docs/Data-Adaptive-List.html#v:scanr1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003esplitAt\u003c/a\u003e\u003c/code\u003e \u003ccode\u003en xs\u003c/code\u003e returns a tuple where first element is \u003ccode\u003exs\u003c/code\u003e prefix of\n length \u003ccode\u003en\u003c/code\u003e and second element is the remainder of the list:\n\u003c/p\u003e\u003cpre\u003e splitAt 6 \"Hello World!\" == (\"Hello \",\"World!\")\n splitAt 3 [1,2,3,4,5] == ([1,2,3],[4,5])\n splitAt 1 [1,2,3] == ([1],[2,3])\n splitAt 3 [1,2,3] == ([1,2,3],[])\n splitAt 4 [1,2,3] == ([1,2,3],[])\n splitAt 0 [1,2,3] == ([],[1,2,3])\n splitAt (-1) [1,2,3] == ([],[1,2,3])\n\u003c/pre\u003e\u003cp\u003eIt is equivalent to \u003ccode\u003e(\u003ccode\u003e\u003ca\u003etake\u003c/a\u003e\u003c/code\u003e n xs, \u003ccode\u003e\u003ca\u003edrop\u003c/a\u003e\u003c/code\u003e n xs)\u003c/code\u003e.\n \u003ccode\u003e\u003ca\u003esplitAt\u003c/a\u003e\u003c/code\u003e is an instance of the more general \u003ccode\u003eData.List.genericSplitAt\u003c/code\u003e,\n in which \u003ccode\u003en\u003c/code\u003e may be of any integral type.\n\u003c/p\u003e",
          "module": "Data.Adaptive.List",
          "name": "splitAt",
          "package": "adaptive-containers",
          "signature": "Int -\u003e List a -\u003e (List a, List a)",
          "source": "src/Data-Adaptive-List.html#splitAt",
          "type": "function"
        },
        "index": {
          "description": "splitAt xs returns tuple where first element is xs prefix of length and second element is the remainder of the list splitAt Hello World Hello World splitAt splitAt splitAt splitAt splitAt splitAt It is equivalent to take xs drop xs splitAt is an instance of the more general Data.List.genericSplitAt in which may be of any integral type",
          "hierarchy": "Data Adaptive List",
          "module": "Data.Adaptive.List",
          "name": "splitAt",
          "normalized": "Int-\u003eList a-\u003e(List a,List a)",
          "package": "adaptive-containers",
          "partial": "At",
          "signature": "Int-\u003eList a-\u003e(List a,List a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adaptive-containers/docs/Data-Adaptive-List.html#v:splitAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e, \u003cem\u003efusion\u003c/em\u003e. The \u003ccode\u003e\u003ca\u003esum\u003c/a\u003e\u003c/code\u003e function computes the sum of a finite list of numbers.\n\u003c/p\u003e",
          "module": "Data.Adaptive.List",
          "name": "sum",
          "package": "adaptive-containers",
          "signature": "List a -\u003e a",
          "source": "src/Data-Adaptive-List.html#sum",
          "type": "function"
        },
        "index": {
          "description": "fusion The sum function computes the sum of finite list of numbers",
          "hierarchy": "Data Adaptive List",
          "module": "Data.Adaptive.List",
          "name": "sum",
          "normalized": "List a-\u003ea",
          "package": "adaptive-containers",
          "signature": "List a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adaptive-containers/docs/Data-Adaptive-List.html#v:sum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe tail of the list\n\u003c/p\u003e",
          "module": "Data.Adaptive.List",
          "name": "tail",
          "package": "adaptive-containers",
          "signature": "List a -\u003e List a",
          "source": "src/Data-Adaptive-List.html#tail",
          "type": "method"
        },
        "index": {
          "description": "The tail of the list",
          "hierarchy": "Data Adaptive List",
          "module": "Data.Adaptive.List",
          "name": "tail",
          "normalized": "List a-\u003eList a",
          "package": "adaptive-containers",
          "signature": "List a-\u003eList a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/adaptive-containers/docs/Data-Adaptive-List.html#v:tail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. \u003ccode\u003e\u003ca\u003etake\u003c/a\u003e\u003c/code\u003e \u003ccode\u003en\u003c/code\u003e, applied to a list \u003ccode\u003exs\u003c/code\u003e, returns the prefix of \u003ccode\u003exs\u003c/code\u003e\n of length \u003ccode\u003en\u003c/code\u003e, or \u003ccode\u003exs\u003c/code\u003e itself if \u003ccode\u003en \u003e \u003ccode\u003e\u003ca\u003elength\u003c/a\u003e\u003c/code\u003e xs\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e take 5 \"Hello World!\" == \"Hello\"\n take 3 [1,2,3,4,5] == [1,2,3]\n take 3 [1,2] == [1,2]\n take 3 [] == []\n take (-1) [1,2] == []\n take 0 [1,2] == []\n\u003c/pre\u003e\u003cp\u003eIt is an instance of the more general \u003ccode\u003eData.List.genericTake\u003c/code\u003e,\n in which \u003ccode\u003en\u003c/code\u003e may be of any integral type.\n\u003c/p\u003e",
          "module": "Data.Adaptive.List",
          "name": "take",
          "package": "adaptive-containers",
          "signature": "Int -\u003e List a -\u003e List a",
          "source": "src/Data-Adaptive-List.html#take",
          "type": "function"
        },
        "index": {
          "description": "take applied to list xs returns the prefix of xs of length or xs itself if length xs take Hello World Hello take take take take take It is an instance of the more general Data.List.genericTake in which may be of any integral type",
          "hierarchy": "Data Adaptive List",
          "module": "Data.Adaptive.List",
          "name": "take",
          "normalized": "Int-\u003eList a-\u003eList a",
          "package": "adaptive-containers",
          "signature": "Int-\u003eList a-\u003eList a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adaptive-containers/docs/Data-Adaptive-List.html#v:take"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e, convert an adaptive list to a regular list\n\u003c/p\u003e",
          "module": "Data.Adaptive.List",
          "name": "toList",
          "package": "adaptive-containers",
          "signature": "List a -\u003e [a]",
          "source": "src/Data-Adaptive-List.html#toList",
          "type": "function"
        },
        "index": {
          "description": "convert an adaptive list to regular list",
          "hierarchy": "Data Adaptive List",
          "module": "Data.Adaptive.List",
          "name": "toList",
          "normalized": "List a-\u003e[a]",
          "package": "adaptive-containers",
          "partial": "List",
          "signature": "List a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adaptive-containers/docs/Data-Adaptive-List.html#v:toList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e, uncons, take apart a list into the head and tail.\n\u003c/p\u003e",
          "module": "Data.Adaptive.List",
          "name": "uncons",
          "package": "adaptive-containers",
          "signature": "List a -\u003e Maybe (a, List a)",
          "source": "src/Data-Adaptive-List.html#uncons",
          "type": "function"
        },
        "index": {
          "description": "uncons take apart list into the head and tail",
          "hierarchy": "Data Adaptive List",
          "module": "Data.Adaptive.List",
          "name": "uncons",
          "normalized": "List a-\u003eMaybe(a,List a)",
          "package": "adaptive-containers",
          "signature": "List a-\u003eMaybe(a,List a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adaptive-containers/docs/Data-Adaptive-List.html#v:uncons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eunfoldr\u003c/a\u003e\u003c/code\u003e function is a `dual' to \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e: while \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e\n reduces a list to a summary value, \u003ccode\u003e\u003ca\u003eunfoldr\u003c/a\u003e\u003c/code\u003e builds a list from\n a seed value.  The function takes the element and returns \u003ccode\u003eNothing\u003c/code\u003e\n if it is done producing the list or returns \u003ccode\u003eJust\u003c/code\u003e \u003ccode\u003e(a,b)\u003c/code\u003e, in which\n case, \u003ccode\u003ea\u003c/code\u003e is a prepended to the list and \u003ccode\u003eb\u003c/code\u003e is used as the next\n element in a recursive call.  For example,\n\u003c/p\u003e\u003cpre\u003e iterate f == unfoldr (\\x -\u003e Just (x, f x))\n\u003c/pre\u003e\u003cp\u003eIn some cases, \u003ccode\u003e\u003ca\u003eunfoldr\u003c/a\u003e\u003c/code\u003e can undo a \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e operation:\n\u003c/p\u003e\u003cpre\u003e unfoldr f' (foldr f z xs) == xs\n\u003c/pre\u003e\u003cp\u003eif the following holds:\n\u003c/p\u003e\u003cpre\u003e f' (f x y) = Just (x,y)\n f' z       = Nothing\n\u003c/pre\u003e\u003cp\u003eA simple use of unfoldr:\n\u003c/p\u003e\u003cpre\u003e unfoldr (\\b -\u003e if b == 0 then Nothing else Just (b, b-1)) 10\n  [10,9,8,7,6,5,4,3,2,1]\n\u003c/pre\u003e\u003cp\u003e\u003cem\u003eTODO\u003c/em\u003e: AdaptPair state.\n\u003c/p\u003e",
          "module": "Data.Adaptive.List",
          "name": "unfoldr",
          "package": "adaptive-containers",
          "signature": "(b -\u003e Maybe (a, b)) -\u003e b -\u003e List a",
          "source": "src/Data-Adaptive-List.html#unfoldr",
          "type": "function"
        },
        "index": {
          "description": "The unfoldr function is dual to foldr while foldr reduces list to summary value unfoldr builds list from seed value The function takes the element and returns Nothing if it is done producing the list or returns Just in which case is prepended to the list and is used as the next element in recursive call For example iterate unfoldr Just In some cases unfoldr can undo foldr operation unfoldr foldr xs xs if the following holds Just Nothing simple use of unfoldr unfoldr if then Nothing else Just b-1 TODO AdaptPair state",
          "hierarchy": "Data Adaptive List",
          "module": "Data.Adaptive.List",
          "name": "unfoldr",
          "normalized": "(a-\u003eMaybe(b,a))-\u003ea-\u003eList b",
          "package": "adaptive-containers",
          "signature": "(b-\u003eMaybe(a,b))-\u003eb-\u003eList a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adaptive-containers/docs/Data-Adaptive-List.html#v:unfoldr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e,\u003cem\u003efusion\u003c/em\u003e. \u003ccode\u003e\u003ca\u003ezip\u003c/a\u003e\u003c/code\u003e takes two lists and returns a list of\n corresponding pairs. If one input list is short, excess elements of\n the longer list are discarded.\n\u003c/p\u003e\u003cp\u003eProperties:\n\u003c/p\u003e\u003cpre\u003e zip a b = zipWith (,) a b\n\u003c/pre\u003e",
          "module": "Data.Adaptive.List",
          "name": "zip",
          "package": "adaptive-containers",
          "signature": "List a -\u003e List b -\u003e List (Pair a b)",
          "source": "src/Data-Adaptive-List.html#zip",
          "type": "function"
        },
        "index": {
          "description": "fusion zip takes two lists and returns list of corresponding pairs If one input list is short excess elements of the longer list are discarded Properties zip zipWith",
          "hierarchy": "Data Adaptive List",
          "module": "Data.Adaptive.List",
          "name": "zip",
          "normalized": "List a-\u003eList b-\u003eList(Pair a b)",
          "package": "adaptive-containers",
          "signature": "List a-\u003eList b-\u003eList(Pair a b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adaptive-containers/docs/Data-Adaptive-List.html#v:zip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSelf optimzing sum types.\n\u003c/p\u003e\u003cp\u003eThis library statically adapts the polymorphic container\n representation of Maybe to specific, more efficient representations,\n when instantiated with particular monomorphic types. It does this via\n an associated more efficient data type for each pair of elements you\n wish to store in your container.\n\u003c/p\u003e\u003cp\u003eThat is, instead of representing 'Maybe Int' as:\n\u003c/p\u003e\u003cpre\u003e           Just\n             | \n           I# 3#\n\u003c/pre\u003e\u003cp\u003eA self-optimizing pair will unpack the constructors, yielding this\n data representation:\n\u003c/p\u003e\u003cpre\u003e       JustInt 3#\n\u003c/pre\u003e\u003cp\u003eSaving an indirection. The resulting structure should be both more\n time and space efficient than the generic polymorphic container it is\n derived from.\n\u003c/p\u003e\u003cp\u003eSelf adaptive polymorphic containers are able to unpack their\n components, something not possible with, for example, strict\n polymorphic containers.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Adaptive.Maybe",
          "name": "Maybe",
          "package": "adaptive-containers",
          "source": "src/Data-Adaptive-Maybe.html",
          "type": "module"
        },
        "index": {
          "description": "Self optimzing sum types This library statically adapts the polymorphic container representation of Maybe to specific more efficient representations when instantiated with particular monomorphic types It does this via an associated more efficient data type for each pair of elements you wish to store in your container That is instead of representing Maybe Int as Just self-optimizing pair will unpack the constructors yielding this data representation JustInt Saving an indirection The resulting structure should be both more time and space efficient than the generic polymorphic container it is derived from Self adaptive polymorphic containers are able to unpack their components something not possible with for example strict polymorphic containers",
          "hierarchy": "Data Adaptive Maybe",
          "module": "Data.Adaptive.Maybe",
          "name": "Maybe",
          "package": "adaptive-containers",
          "partial": "Maybe",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/adaptive-containers/docs/Data-Adaptive-Maybe.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Adaptive.Maybe",
          "name": "AdaptMaybe",
          "package": "adaptive-containers",
          "source": "src/Data-Adaptive-Maybe.html#AdaptMaybe",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Adaptive Maybe",
          "module": "Data.Adaptive.Maybe",
          "name": "AdaptMaybe",
          "package": "adaptive-containers",
          "partial": "Adapt Maybe",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/adaptive-containers/docs/Data-Adaptive-Maybe.html#t:AdaptMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ecatMaybes\u003c/a\u003e\u003c/code\u003e function takes a list of \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003es and returns\n a list of all the \u003ccode\u003eJust\u003c/code\u003e values. \n\u003c/p\u003e",
          "module": "Data.Adaptive.Maybe",
          "name": "catMaybes",
          "package": "adaptive-containers",
          "signature": "[Maybe a] -\u003e [a]",
          "source": "src/Data-Adaptive-Maybe.html#catMaybes",
          "type": "function"
        },
        "index": {
          "description": "The catMaybes function takes list of Maybe and returns list of all the Just values",
          "hierarchy": "Data Adaptive Maybe",
          "module": "Data.Adaptive.Maybe",
          "name": "catMaybes",
          "normalized": "[Maybe a]-\u003e[a]",
          "package": "adaptive-containers",
          "partial": "Maybes",
          "signature": "[Maybe a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adaptive-containers/docs/Data-Adaptive-Maybe.html#v:catMaybes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003efromJust\u003c/a\u003e\u003c/code\u003e function extracts the element out of a \u003ccode\u003eJust\u003c/code\u003e and\n throws an error if its argument is \u003ccode\u003eNothing\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Adaptive.Maybe",
          "name": "fromJust",
          "package": "adaptive-containers",
          "signature": "Maybe a -\u003e a",
          "source": "src/Data-Adaptive-Maybe.html#fromJust",
          "type": "function"
        },
        "index": {
          "description": "The fromJust function extracts the element out of Just and throws an error if its argument is Nothing",
          "hierarchy": "Data Adaptive Maybe",
          "module": "Data.Adaptive.Maybe",
          "name": "fromJust",
          "normalized": "Maybe a-\u003ea",
          "package": "adaptive-containers",
          "partial": "Just",
          "signature": "Maybe a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adaptive-containers/docs/Data-Adaptive-Maybe.html#v:fromJust"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003efromMaybe\u003c/a\u003e\u003c/code\u003e function takes a default value and and \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e\n value.  If the \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e is \u003ccode\u003eNothing\u003c/code\u003e, it returns the default values;\n otherwise, it returns the value contained in the \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Adaptive.Maybe",
          "name": "fromMaybe",
          "package": "adaptive-containers",
          "signature": "a -\u003e Maybe a -\u003e a",
          "source": "src/Data-Adaptive-Maybe.html#fromMaybe",
          "type": "function"
        },
        "index": {
          "description": "The fromMaybe function takes default value and and Maybe value If the Maybe is Nothing it returns the default values otherwise it returns the value contained in the Maybe",
          "hierarchy": "Data Adaptive Maybe",
          "module": "Data.Adaptive.Maybe",
          "name": "fromMaybe",
          "normalized": "a-\u003eMaybe a-\u003ea",
          "package": "adaptive-containers",
          "partial": "Maybe",
          "signature": "a-\u003eMaybe a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adaptive-containers/docs/Data-Adaptive-Maybe.html#v:fromMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eisJust\u003c/a\u003e\u003c/code\u003e function returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e iff its argument is of the\n form \u003ccode\u003eJust _\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Adaptive.Maybe",
          "name": "isJust",
          "package": "adaptive-containers",
          "signature": "Maybe a -\u003e Bool",
          "source": "src/Data-Adaptive-Maybe.html#isJust",
          "type": "method"
        },
        "index": {
          "description": "The isJust function returns True iff its argument is of the form Just",
          "hierarchy": "Data Adaptive Maybe",
          "module": "Data.Adaptive.Maybe",
          "name": "isJust",
          "normalized": "Maybe a-\u003eBool",
          "package": "adaptive-containers",
          "partial": "Just",
          "signature": "Maybe a-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/adaptive-containers/docs/Data-Adaptive-Maybe.html#v:isJust"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eisNothing\u003c/a\u003e\u003c/code\u003e function returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e iff its argument is \u003ccode\u003eNothing\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Adaptive.Maybe",
          "name": "isNothing",
          "package": "adaptive-containers",
          "signature": "Maybe a -\u003e Bool",
          "source": "src/Data-Adaptive-Maybe.html#isNothing",
          "type": "function"
        },
        "index": {
          "description": "The isNothing function returns True iff its argument is Nothing",
          "hierarchy": "Data Adaptive Maybe",
          "module": "Data.Adaptive.Maybe",
          "name": "isNothing",
          "normalized": "Maybe a-\u003eBool",
          "package": "adaptive-containers",
          "partial": "Nothing",
          "signature": "Maybe a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adaptive-containers/docs/Data-Adaptive-Maybe.html#v:isNothing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Adaptive.Maybe",
          "name": "just",
          "package": "adaptive-containers",
          "signature": "a -\u003e Maybe a",
          "source": "src/Data-Adaptive-Maybe.html#just",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Adaptive Maybe",
          "module": "Data.Adaptive.Maybe",
          "name": "just",
          "normalized": "a-\u003eMaybe a",
          "package": "adaptive-containers",
          "signature": "a-\u003eMaybe a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/adaptive-containers/docs/Data-Adaptive-Maybe.html#v:just"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003elistToMaybe\u003c/a\u003e\u003c/code\u003e function returns \u003ccode\u003eNothing\u003c/code\u003e on an empty list\n or \u003ccode\u003e\u003ccode\u003eJust\u003c/code\u003e a\u003c/code\u003e where \u003ccode\u003ea\u003c/code\u003e is the first element of the list.\n\u003c/p\u003e",
          "module": "Data.Adaptive.Maybe",
          "name": "listToMaybe",
          "package": "adaptive-containers",
          "signature": "[a] -\u003e Maybe a",
          "source": "src/Data-Adaptive-Maybe.html#listToMaybe",
          "type": "function"
        },
        "index": {
          "description": "The listToMaybe function returns Nothing on an empty list or Just where is the first element of the list",
          "hierarchy": "Data Adaptive Maybe",
          "module": "Data.Adaptive.Maybe",
          "name": "listToMaybe",
          "normalized": "[a]-\u003eMaybe a",
          "package": "adaptive-containers",
          "partial": "To Maybe",
          "signature": "[a]-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adaptive-containers/docs/Data-Adaptive-Maybe.html#v:listToMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003emapMaybe\u003c/a\u003e\u003c/code\u003e function is a version of \u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e which can throw\n out elements.  In particular, the functional argument returns\n something of type \u003ccode\u003e\u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e b\u003c/code\u003e.  If this is \u003ccode\u003eNothing\u003c/code\u003e, no element\n is added on to the result list.  If it just \u003ccode\u003e\u003ccode\u003eJust\u003c/code\u003e b\u003c/code\u003e, then \u003ccode\u003eb\u003c/code\u003e is\n included in the result list.\n\u003c/p\u003e",
          "module": "Data.Adaptive.Maybe",
          "name": "mapMaybe",
          "package": "adaptive-containers",
          "signature": "(a -\u003e Maybe b) -\u003e [a] -\u003e [b]",
          "source": "src/Data-Adaptive-Maybe.html#mapMaybe",
          "type": "function"
        },
        "index": {
          "description": "The mapMaybe function is version of map which can throw out elements In particular the functional argument returns something of type Maybe If this is Nothing no element is added on to the result list If it just Just then is included in the result list",
          "hierarchy": "Data Adaptive Maybe",
          "module": "Data.Adaptive.Maybe",
          "name": "mapMaybe",
          "normalized": "(a-\u003eMaybe b)-\u003e[a]-\u003e[b]",
          "package": "adaptive-containers",
          "partial": "Maybe",
          "signature": "(a-\u003eMaybe b)-\u003e[a]-\u003e[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adaptive-containers/docs/Data-Adaptive-Maybe.html#v:mapMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Adaptive.Maybe",
          "name": "maybe",
          "package": "adaptive-containers",
          "signature": "b -\u003e (a -\u003e b) -\u003e Maybe a -\u003e b",
          "source": "src/Data-Adaptive-Maybe.html#maybe",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Adaptive Maybe",
          "module": "Data.Adaptive.Maybe",
          "name": "maybe",
          "normalized": "a-\u003e(b-\u003ea)-\u003eMaybe b-\u003ea",
          "package": "adaptive-containers",
          "signature": "b-\u003e(a-\u003eb)-\u003eMaybe a-\u003eb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/adaptive-containers/docs/Data-Adaptive-Maybe.html#v:maybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003emaybeToList\u003c/a\u003e\u003c/code\u003e function returns an empty list when given\n \u003ccode\u003eNothing\u003c/code\u003e or a singleton list when not given \u003ccode\u003eNothing\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Adaptive.Maybe",
          "name": "maybeToList",
          "package": "adaptive-containers",
          "signature": "Maybe a -\u003e [a]",
          "source": "src/Data-Adaptive-Maybe.html#maybeToList",
          "type": "function"
        },
        "index": {
          "description": "The maybeToList function returns an empty list when given Nothing or singleton list when not given Nothing",
          "hierarchy": "Data Adaptive Maybe",
          "module": "Data.Adaptive.Maybe",
          "name": "maybeToList",
          "normalized": "Maybe a-\u003e[a]",
          "package": "adaptive-containers",
          "partial": "To List",
          "signature": "Maybe a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adaptive-containers/docs/Data-Adaptive-Maybe.html#v:maybeToList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Adaptive.Maybe",
          "name": "nothing",
          "package": "adaptive-containers",
          "signature": "Maybe a",
          "source": "src/Data-Adaptive-Maybe.html#nothing",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Adaptive Maybe",
          "module": "Data.Adaptive.Maybe",
          "name": "nothing",
          "package": "adaptive-containers",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/adaptive-containers/docs/Data-Adaptive-Maybe.html#v:nothing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSelf optimzing pair types.\n\u003c/p\u003e\u003cp\u003eThis library statically adapts the polymorphic container\n representation of tuples to specific, more efficient representations,\n when instantiated with particular monomorphic types. It does this via\n an associated more efficient data type for each pair of elements you\n wish to store in your container.\n\u003c/p\u003e\u003cp\u003eThat is, instead of representing '(Int,Char)' as:\n\u003c/p\u003e\u003cpre\u003e            (,)\n           /   \\\n       I# 3#   C# x#\n\u003c/pre\u003e\u003cp\u003eA self-optimizing pair will unpack the constructors, yielding this\n data representation:\n\u003c/p\u003e\u003cpre\u003e       PairIntChar 3# x#\n\u003c/pre\u003e\u003cp\u003eSaving two indirections. The resulting structure should be both more\n time and space efficient than the generic polymorphic container it is\n derived from. For example, adaptive pairs use 8 bytes to store an Int and\n Char pair, while a lazy pair uses 24 bytes.\n\u003c/p\u003e\u003cpre\u003e \u003e Prelude Size\u003e unsafeSizeof ((42, 'x') :: (Int,Char))\n \u003e 24\n\u003c/pre\u003e\u003cpre\u003e Prelude Size\u003e unsafeSizeof (pair 42 'x' :: Pair Int Char)\n \u003e 8\n\u003c/pre\u003e\u003cp\u003eYou can inspect the size and layout of your adaptive structures using two scripts, \n one for measuring the size of a closure, described in\n \u003ca\u003ehttp://ghcmutterings.wordpress.com/2009/02/\u003c/a\u003e, and vacuum-cairo, for rendering \n the heap structure explicitly\n \u003ca\u003ehttp://hackage.haskell.org/cgi-bin/hackage-scripts/package/vacuum-cairo\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eTypes that instantiate the \u003ccode\u003eAdapt\u003c/code\u003e class will self-adapt this way.\n\u003c/p\u003e\u003cp\u003eSelf adaptive polymorphic containers are able to unpack their\n components, something not possible with, for example, strict\n polymorphic containers.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Adaptive.Tuple",
          "name": "Tuple",
          "package": "adaptive-containers",
          "source": "src/Data-Adaptive-Tuple.html",
          "type": "module"
        },
        "index": {
          "description": "Self optimzing pair types This library statically adapts the polymorphic container representation of tuples to specific more efficient representations when instantiated with particular monomorphic types It does this via an associated more efficient data type for each pair of elements you wish to store in your container That is instead of representing Int Char as self-optimizing pair will unpack the constructors yielding this data representation PairIntChar Saving two indirections The resulting structure should be both more time and space efficient than the generic polymorphic container it is derived from For example adaptive pairs use bytes to store an Int and Char pair while lazy pair uses bytes Prelude Size unsafeSizeof Int Char Prelude Size unsafeSizeof pair Pair Int Char You can inspect the size and layout of your adaptive structures using two scripts one for measuring the size of closure described in http ghcmutterings.wordpress.com and vacuum-cairo for rendering the heap structure explicitly http hackage.haskell.org cgi-bin hackage-scripts package vacuum-cairo Types that instantiate the Adapt class will self-adapt this way Self adaptive polymorphic containers are able to unpack their components something not possible with for example strict polymorphic containers",
          "hierarchy": "Data Adaptive Tuple",
          "module": "Data.Adaptive.Tuple",
          "name": "Tuple",
          "package": "adaptive-containers",
          "partial": "Tuple",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/adaptive-containers/docs/Data-Adaptive-Tuple.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresentation-improving polymorphic tuples.\n\u003c/p\u003e",
          "module": "Data.Adaptive.Tuple",
          "name": "AdaptPair",
          "package": "adaptive-containers",
          "source": "src/Data-Adaptive-Tuple.html#AdaptPair",
          "type": "class"
        },
        "index": {
          "description": "Representation-improving polymorphic tuples",
          "hierarchy": "Data Adaptive Tuple",
          "module": "Data.Adaptive.Tuple",
          "name": "AdaptPair",
          "package": "adaptive-containers",
          "partial": "Adapt Pair",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/adaptive-containers/docs/Data-Adaptive-Tuple.html#t:AdaptPair"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ecurry\u003c/a\u003e\u003c/code\u003e converts an uncurried function to a curried function.\n\u003c/p\u003e",
          "module": "Data.Adaptive.Tuple",
          "name": "curry",
          "package": "adaptive-containers",
          "signature": "(Pair a b -\u003e c) -\u003e a -\u003e b -\u003e c",
          "source": "src/Data-Adaptive-Tuple.html#curry",
          "type": "method"
        },
        "index": {
          "description": "curry converts an uncurried function to curried function",
          "hierarchy": "Data Adaptive Tuple",
          "module": "Data.Adaptive.Tuple",
          "name": "curry",
          "normalized": "(Pair a b-\u003ec)-\u003ea-\u003eb-\u003ec",
          "package": "adaptive-containers",
          "signature": "(Pair a b-\u003ec)-\u003ea-\u003eb-\u003ec",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/adaptive-containers/docs/Data-Adaptive-Tuple.html#v:curry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert an adaptive pair to a regular polymorphic tuple\n\u003c/p\u003e",
          "module": "Data.Adaptive.Tuple",
          "name": "fromPair",
          "package": "adaptive-containers",
          "signature": "Pair a b -\u003e (a, b)",
          "source": "src/Data-Adaptive-Tuple.html#fromPair",
          "type": "function"
        },
        "index": {
          "description": "Convert an adaptive pair to regular polymorphic tuple",
          "hierarchy": "Data Adaptive Tuple",
          "module": "Data.Adaptive.Tuple",
          "name": "fromPair",
          "normalized": "Pair a b-\u003e(a,b)",
          "package": "adaptive-containers",
          "partial": "Pair",
          "signature": "Pair a b-\u003e(a,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adaptive-containers/docs/Data-Adaptive-Tuple.html#v:fromPair"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the first component of a pair.\n\u003c/p\u003e",
          "module": "Data.Adaptive.Tuple",
          "name": "fst",
          "package": "adaptive-containers",
          "signature": "Pair a b -\u003e a",
          "source": "src/Data-Adaptive-Tuple.html#fst",
          "type": "method"
        },
        "index": {
          "description": "Extract the first component of pair",
          "hierarchy": "Data Adaptive Tuple",
          "module": "Data.Adaptive.Tuple",
          "name": "fst",
          "normalized": "Pair a b-\u003ea",
          "package": "adaptive-containers",
          "signature": "Pair a b-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/adaptive-containers/docs/Data-Adaptive-Tuple.html#v:fst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a new pair.\n\u003c/p\u003e",
          "module": "Data.Adaptive.Tuple",
          "name": "pair",
          "package": "adaptive-containers",
          "signature": "a -\u003e b -\u003e Pair a b",
          "source": "src/Data-Adaptive-Tuple.html#pair",
          "type": "function"
        },
        "index": {
          "description": "Construct new pair",
          "hierarchy": "Data Adaptive Tuple",
          "module": "Data.Adaptive.Tuple",
          "name": "pair",
          "normalized": "a-\u003eb-\u003ePair a b",
          "package": "adaptive-containers",
          "signature": "a-\u003eb-\u003ePair a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adaptive-containers/docs/Data-Adaptive-Tuple.html#v:pair"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the second component of a pair.\n\u003c/p\u003e",
          "module": "Data.Adaptive.Tuple",
          "name": "snd",
          "package": "adaptive-containers",
          "signature": "Pair a b -\u003e b",
          "source": "src/Data-Adaptive-Tuple.html#snd",
          "type": "method"
        },
        "index": {
          "description": "Extract the second component of pair",
          "hierarchy": "Data Adaptive Tuple",
          "module": "Data.Adaptive.Tuple",
          "name": "snd",
          "normalized": "Pair a b-\u003eb",
          "package": "adaptive-containers",
          "signature": "Pair a b-\u003eb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/adaptive-containers/docs/Data-Adaptive-Tuple.html#v:snd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a regular polymorphic tuple to an adaptive pair\n\u003c/p\u003e",
          "module": "Data.Adaptive.Tuple",
          "name": "toPair",
          "package": "adaptive-containers",
          "signature": "(a, b) -\u003e Pair a b",
          "source": "src/Data-Adaptive-Tuple.html#toPair",
          "type": "function"
        },
        "index": {
          "description": "Convert regular polymorphic tuple to an adaptive pair",
          "hierarchy": "Data Adaptive Tuple",
          "module": "Data.Adaptive.Tuple",
          "name": "toPair",
          "normalized": "(a,b)-\u003ePair a b",
          "package": "adaptive-containers",
          "partial": "Pair",
          "signature": "(a,b)-\u003ePair a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adaptive-containers/docs/Data-Adaptive-Tuple.html#v:toPair"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003euncurry\u003c/a\u003e\u003c/code\u003e converts a curried function to a function on pairs.\n\u003c/p\u003e",
          "module": "Data.Adaptive.Tuple",
          "name": "uncurry",
          "package": "adaptive-containers",
          "signature": "(a -\u003e b -\u003e c) -\u003e Pair a b -\u003e c",
          "source": "src/Data-Adaptive-Tuple.html#uncurry",
          "type": "function"
        },
        "index": {
          "description": "uncurry converts curried function to function on pairs",
          "hierarchy": "Data Adaptive Tuple",
          "module": "Data.Adaptive.Tuple",
          "name": "uncurry",
          "normalized": "(a-\u003eb-\u003ec)-\u003ePair a b-\u003ec",
          "package": "adaptive-containers",
          "signature": "(a-\u003eb-\u003ec)-\u003ePair a b-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adaptive-containers/docs/Data-Adaptive-Tuple.html#v:uncurry"
      }
    }
  ]
]