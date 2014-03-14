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
        "word": "semigroups"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA NonEmpty list forms a monad as per list, but always contains at least\n one element.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.List.NonEmpty",
          "name": "NonEmpty",
          "package": "semigroups",
          "source": "src/Data-List-NonEmpty.html",
          "type": "module"
        },
        "index": {
          "description": "NonEmpty list forms monad as per list but always contains at least one element",
          "hierarchy": "Data List NonEmpty",
          "module": "Data.List.NonEmpty",
          "name": "NonEmpty",
          "package": "semigroups",
          "partial": "Non Empty",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/semigroups/docs/Data-List-NonEmpty.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.List.NonEmpty",
          "name": "NonEmpty",
          "package": "semigroups",
          "source": "src/Data-List-NonEmpty.html#NonEmpty",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data List NonEmpty",
          "module": "Data.List.NonEmpty",
          "name": "NonEmpty",
          "package": "semigroups",
          "partial": "Non Empty",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/semigroups/docs/Data-List-NonEmpty.html#t:NonEmpty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003exs !! n\u003c/code\u003e returns the element of the stream \u003ccode\u003exs\u003c/code\u003e at index\n \u003ccode\u003en\u003c/code\u003e. Note that the head of the stream has index 0.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eBeware\u003c/em\u003e: a negative or out-of-bounds index will cause an error.\n\u003c/p\u003e",
          "module": "Data.List.NonEmpty",
          "name": "(!!)",
          "package": "semigroups",
          "signature": "NonEmpty a -\u003e Int -\u003e a",
          "source": "src/Data-List-NonEmpty.html#%21%21",
          "type": "function"
        },
        "index": {
          "description": "xs returns the element of the stream xs at index Note that the head of the stream has index Beware negative or out-of-bounds index will cause an error",
          "hierarchy": "Data List NonEmpty",
          "module": "Data.List.NonEmpty",
          "name": "(!!) !!",
          "normalized": "NonEmpty a-\u003eInt-\u003ea",
          "package": "semigroups",
          "signature": "NonEmpty a-\u003eInt-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/semigroups/docs/Data-List-NonEmpty.html#v:-33--33-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrepend an element to the stream.\n\u003c/p\u003e",
          "module": "Data.List.NonEmpty",
          "name": "(\u003c|)",
          "package": "semigroups",
          "signature": "a -\u003e NonEmpty a -\u003e NonEmpty a",
          "source": "src/Data-List-NonEmpty.html#%3C%7C",
          "type": "function"
        },
        "index": {
          "description": "Prepend an element to the stream",
          "hierarchy": "Data List NonEmpty",
          "module": "Data.List.NonEmpty",
          "name": "(\u003c|) \u003c|",
          "normalized": "a-\u003eNonEmpty a-\u003eNonEmpty a",
          "package": "semigroups",
          "signature": "a-\u003eNonEmpty a-\u003eNonEmpty a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/semigroups/docs/Data-List-NonEmpty.html#v:-60--124-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.List.NonEmpty",
          "name": ":|",
          "package": "semigroups",
          "signature": "a :| [a]",
          "source": "src/Data-List-NonEmpty.html#NonEmpty",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data List NonEmpty",
          "module": "Data.List.NonEmpty",
          "name": ":|",
          "normalized": "a[a]",
          "package": "semigroups",
          "signature": "a[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/semigroups/docs/Data-List-NonEmpty.html#v::-124-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ccode\u003e\u003ca\u003ebreak\u003c/a\u003e\u003c/code\u003e p\u003c/code\u003e function is equivalent to \u003ccode\u003e\u003ccode\u003e\u003ca\u003espan\u003c/a\u003e\u003c/code\u003e (not . p)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.List.NonEmpty",
          "name": "break",
          "package": "semigroups",
          "signature": "(a -\u003e Bool) -\u003e NonEmpty a -\u003e ([a], [a])",
          "source": "src/Data-List-NonEmpty.html#break",
          "type": "function"
        },
        "index": {
          "description": "The break function is equivalent to span not",
          "hierarchy": "Data List NonEmpty",
          "module": "Data.List.NonEmpty",
          "name": "break",
          "normalized": "(a-\u003eBool)-\u003eNonEmpty a-\u003e([a],[a])",
          "package": "semigroups",
          "signature": "(a-\u003eBool)-\u003eNonEmpty a-\u003e([a],[a])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/semigroups/docs/Data-List-NonEmpty.html#v:break"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSynonym for \u003ccode\u003e\u003ca\u003e\u003c|\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.List.NonEmpty",
          "name": "cons",
          "package": "semigroups",
          "signature": "a -\u003e NonEmpty a -\u003e NonEmpty a",
          "source": "src/Data-List-NonEmpty.html#cons",
          "type": "function"
        },
        "index": {
          "description": "Synonym for",
          "hierarchy": "Data List NonEmpty",
          "module": "Data.List.NonEmpty",
          "name": "cons",
          "normalized": "a-\u003eNonEmpty a-\u003eNonEmpty a",
          "package": "semigroups",
          "signature": "a-\u003eNonEmpty a-\u003eNonEmpty a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/semigroups/docs/Data-List-NonEmpty.html#v:cons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ecycle\u003c/a\u003e\u003c/code\u003e xs\u003c/code\u003e returns the infinite repetition of \u003ccode\u003exs\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e cycle [1,2,3] = 1 :| [2,3,1,2,3,...]\n\u003c/pre\u003e",
          "module": "Data.List.NonEmpty",
          "name": "cycle",
          "package": "semigroups",
          "signature": "NonEmpty a -\u003e NonEmpty a",
          "source": "src/Data-List-NonEmpty.html#cycle",
          "type": "function"
        },
        "index": {
          "description": "cycle xs returns the infinite repetition of xs cycle",
          "hierarchy": "Data List NonEmpty",
          "module": "Data.List.NonEmpty",
          "name": "cycle",
          "normalized": "NonEmpty a-\u003eNonEmpty a",
          "package": "semigroups",
          "signature": "NonEmpty a-\u003eNonEmpty a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/semigroups/docs/Data-List-NonEmpty.html#v:cycle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003edrop\u003c/a\u003e\u003c/code\u003e n xs\u003c/code\u003e drops the first \u003ccode\u003en\u003c/code\u003e elements off the front of\n the sequence \u003ccode\u003exs\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.List.NonEmpty",
          "name": "drop",
          "package": "semigroups",
          "signature": "Int -\u003e NonEmpty a -\u003e [a]",
          "source": "src/Data-List-NonEmpty.html#drop",
          "type": "function"
        },
        "index": {
          "description": "drop xs drops the first elements off the front of the sequence xs",
          "hierarchy": "Data List NonEmpty",
          "module": "Data.List.NonEmpty",
          "name": "drop",
          "normalized": "Int-\u003eNonEmpty a-\u003e[a]",
          "package": "semigroups",
          "signature": "Int-\u003eNonEmpty a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/semigroups/docs/Data-List-NonEmpty.html#v:drop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003edropWhile\u003c/a\u003e\u003c/code\u003e p xs\u003c/code\u003e returns the suffix remaining after\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003etakeWhile\u003c/a\u003e\u003c/code\u003e p xs\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.List.NonEmpty",
          "name": "dropWhile",
          "package": "semigroups",
          "signature": "(a -\u003e Bool) -\u003e NonEmpty a -\u003e [a]",
          "source": "src/Data-List-NonEmpty.html#dropWhile",
          "type": "function"
        },
        "index": {
          "description": "dropWhile xs returns the suffix remaining after takeWhile xs",
          "hierarchy": "Data List NonEmpty",
          "module": "Data.List.NonEmpty",
          "name": "dropWhile",
          "normalized": "(a-\u003eBool)-\u003eNonEmpty a-\u003e[a]",
          "package": "semigroups",
          "partial": "While",
          "signature": "(a-\u003eBool)-\u003eNonEmpty a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/semigroups/docs/Data-List-NonEmpty.html#v:dropWhile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003efilter\u003c/a\u003e\u003c/code\u003e p xs\u003c/code\u003e removes any elements from \u003ccode\u003exs\u003c/code\u003e that do not satisfy \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.List.NonEmpty",
          "name": "filter",
          "package": "semigroups",
          "signature": "(a -\u003e Bool) -\u003e NonEmpty a -\u003e [a]",
          "source": "src/Data-List-NonEmpty.html#filter",
          "type": "function"
        },
        "index": {
          "description": "filter xs removes any elements from xs that do not satisfy",
          "hierarchy": "Data List NonEmpty",
          "module": "Data.List.NonEmpty",
          "name": "filter",
          "normalized": "(a-\u003eBool)-\u003eNonEmpty a-\u003e[a]",
          "package": "semigroups",
          "signature": "(a-\u003eBool)-\u003eNonEmpty a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/semigroups/docs/Data-List-NonEmpty.html#v:filter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a normal list to a \u003ccode\u003e\u003ca\u003eNonEmpty\u003c/a\u003e\u003c/code\u003e stream.\n\u003c/p\u003e\u003cp\u003eRaises an error if given an empty list.\n\u003c/p\u003e",
          "module": "Data.List.NonEmpty",
          "name": "fromList",
          "package": "semigroups",
          "signature": "[a] -\u003e NonEmpty a",
          "source": "src/Data-List-NonEmpty.html#fromList",
          "type": "function"
        },
        "index": {
          "description": "Converts normal list to NonEmpty stream Raises an error if given an empty list",
          "hierarchy": "Data List NonEmpty",
          "module": "Data.List.NonEmpty",
          "name": "fromList",
          "normalized": "[a]-\u003eNonEmpty a",
          "package": "semigroups",
          "partial": "List",
          "signature": "[a]-\u003eNonEmpty a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/semigroups/docs/Data-List-NonEmpty.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003egroup\u003c/a\u003e\u003c/code\u003e function takes a stream and returns a list of\n streams such that flattening the resulting list is equal to the\n argument.  Moreover, each stream in the resulting list\n contains only equal elements.  For example, in list notation:\n\u003c/p\u003e\u003cpre\u003e 'group' $ 'cycle' \"Mississippi\" = \"M\" : \"i\" : \"ss\" : \"i\" : \"ss\" : \"i\" : \"pp\" : \"i\" : \"M\" : \"i\" : ...\n\u003c/pre\u003e",
          "module": "Data.List.NonEmpty",
          "name": "group",
          "package": "semigroups",
          "signature": "f a -\u003e [NonEmpty a]",
          "source": "src/Data-List-NonEmpty.html#group",
          "type": "function"
        },
        "index": {
          "description": "The group function takes stream and returns list of streams such that flattening the resulting list is equal to the argument Moreover each stream in the resulting list contains only equal elements For example in list notation group cycle Mississippi ss ss pp",
          "hierarchy": "Data List NonEmpty",
          "module": "Data.List.NonEmpty",
          "name": "group",
          "normalized": "a b-\u003e[NonEmpty b]",
          "package": "semigroups",
          "signature": "f a-\u003e[NonEmpty a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/semigroups/docs/Data-List-NonEmpty.html#v:group"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003egroup1\u003c/a\u003e\u003c/code\u003e operates like \u003ccode\u003e\u003ca\u003egroup\u003c/a\u003e\u003c/code\u003e, but uses the knowledge that its\n input is non-empty to produce guaranteed non-empty output.\n\u003c/p\u003e",
          "module": "Data.List.NonEmpty",
          "name": "group1",
          "package": "semigroups",
          "signature": "NonEmpty a -\u003e NonEmpty (NonEmpty a)",
          "source": "src/Data-List-NonEmpty.html#group1",
          "type": "function"
        },
        "index": {
          "description": "group1 operates like group but uses the knowledge that its input is non-empty to produce guaranteed non-empty output",
          "hierarchy": "Data List NonEmpty",
          "module": "Data.List.NonEmpty",
          "name": "group1",
          "normalized": "NonEmpty a-\u003eNonEmpty(NonEmpty a)",
          "package": "semigroups",
          "signature": "NonEmpty a-\u003eNonEmpty(NonEmpty a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/semigroups/docs/Data-List-NonEmpty.html#v:group1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003egroupBy\u003c/a\u003e\u003c/code\u003e operates like \u003ccode\u003e\u003ca\u003egroup\u003c/a\u003e\u003c/code\u003e, but uses the provided equality\n predicate instead of \u003ccode\u003e\u003ca\u003e==\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.List.NonEmpty",
          "name": "groupBy",
          "package": "semigroups",
          "signature": "(a -\u003e a -\u003e Bool) -\u003e f a -\u003e [NonEmpty a]",
          "source": "src/Data-List-NonEmpty.html#groupBy",
          "type": "function"
        },
        "index": {
          "description": "groupBy operates like group but uses the provided equality predicate instead of",
          "hierarchy": "Data List NonEmpty",
          "module": "Data.List.NonEmpty",
          "name": "groupBy",
          "normalized": "(a-\u003ea-\u003eBool)-\u003eb a-\u003e[NonEmpty a]",
          "package": "semigroups",
          "partial": "By",
          "signature": "(a-\u003ea-\u003eBool)-\u003ef a-\u003e[NonEmpty a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/semigroups/docs/Data-List-NonEmpty.html#v:groupBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003egroupBy1\u003c/a\u003e\u003c/code\u003e is to \u003ccode\u003e\u003ca\u003egroup1\u003c/a\u003e\u003c/code\u003e as \u003ccode\u003e\u003ca\u003egroupBy\u003c/a\u003e\u003c/code\u003e is to \u003ccode\u003e\u003ca\u003egroup\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.List.NonEmpty",
          "name": "groupBy1",
          "package": "semigroups",
          "signature": "(a -\u003e a -\u003e Bool) -\u003e NonEmpty a -\u003e NonEmpty (NonEmpty a)",
          "source": "src/Data-List-NonEmpty.html#groupBy1",
          "type": "function"
        },
        "index": {
          "description": "groupBy1 is to group1 as groupBy is to group",
          "hierarchy": "Data List NonEmpty",
          "module": "Data.List.NonEmpty",
          "name": "groupBy1",
          "normalized": "(a-\u003ea-\u003eBool)-\u003eNonEmpty a-\u003eNonEmpty(NonEmpty a)",
          "package": "semigroups",
          "partial": "By",
          "signature": "(a-\u003ea-\u003eBool)-\u003eNonEmpty a-\u003eNonEmpty(NonEmpty a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/semigroups/docs/Data-List-NonEmpty.html#v:groupBy1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the first element of the stream.\n\u003c/p\u003e",
          "module": "Data.List.NonEmpty",
          "name": "head",
          "package": "semigroups",
          "signature": "NonEmpty a -\u003e a",
          "source": "src/Data-List-NonEmpty.html#head",
          "type": "function"
        },
        "index": {
          "description": "Extract the first element of the stream",
          "hierarchy": "Data List NonEmpty",
          "module": "Data.List.NonEmpty",
          "name": "head",
          "normalized": "NonEmpty a-\u003ea",
          "package": "semigroups",
          "signature": "NonEmpty a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/semigroups/docs/Data-List-NonEmpty.html#v:head"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract everything except the last element of the stream.\n\u003c/p\u003e",
          "module": "Data.List.NonEmpty",
          "name": "init",
          "package": "semigroups",
          "signature": "NonEmpty a -\u003e [a]",
          "source": "src/Data-List-NonEmpty.html#init",
          "type": "function"
        },
        "index": {
          "description": "Extract everything except the last element of the stream",
          "hierarchy": "Data List NonEmpty",
          "module": "Data.List.NonEmpty",
          "name": "init",
          "normalized": "NonEmpty a-\u003e[a]",
          "package": "semigroups",
          "signature": "NonEmpty a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/semigroups/docs/Data-List-NonEmpty.html#v:init"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003einits\u003c/a\u003e\u003c/code\u003e function takes a stream \u003ccode\u003exs\u003c/code\u003e and returns all the\n finite prefixes of \u003ccode\u003exs\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.List.NonEmpty",
          "name": "inits",
          "package": "semigroups",
          "signature": "f a -\u003e NonEmpty [a]",
          "source": "src/Data-List-NonEmpty.html#inits",
          "type": "function"
        },
        "index": {
          "description": "The inits function takes stream xs and returns all the finite prefixes of xs",
          "hierarchy": "Data List NonEmpty",
          "module": "Data.List.NonEmpty",
          "name": "inits",
          "normalized": "a b-\u003eNonEmpty[b]",
          "package": "semigroups",
          "signature": "f a-\u003eNonEmpty[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/semigroups/docs/Data-List-NonEmpty.html#v:inits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003einsert\u003c/a\u003e\u003c/code\u003e x xs\u003c/code\u003e inserts \u003ccode\u003ex\u003c/code\u003e into the last position in \u003ccode\u003exs\u003c/code\u003e where it\n is still less than or equal to the next element. In particular, if the\n list is sorted beforehand, the result will also be sorted.\n\u003c/p\u003e",
          "module": "Data.List.NonEmpty",
          "name": "insert",
          "package": "semigroups",
          "signature": "a -\u003e f a -\u003e NonEmpty a",
          "source": "src/Data-List-NonEmpty.html#insert",
          "type": "function"
        },
        "index": {
          "description": "insert xs inserts into the last position in xs where it is still less than or equal to the next element In particular if the list is sorted beforehand the result will also be sorted",
          "hierarchy": "Data List NonEmpty",
          "module": "Data.List.NonEmpty",
          "name": "insert",
          "normalized": "a-\u003eb a-\u003eNonEmpty a",
          "package": "semigroups",
          "signature": "a-\u003ef a-\u003eNonEmpty a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/semigroups/docs/Data-List-NonEmpty.html#v:insert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e'intersperse x xs' alternates elements of the list with copies of \u003ccode\u003ex\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e intersperse 0 (1 :| [2,3]) == 1 :| [0,2,0,3]\n\u003c/pre\u003e",
          "module": "Data.List.NonEmpty",
          "name": "intersperse",
          "package": "semigroups",
          "signature": "a -\u003e NonEmpty a -\u003e NonEmpty a",
          "source": "src/Data-List-NonEmpty.html#intersperse",
          "type": "function"
        },
        "index": {
          "description": "intersperse xs alternates elements of the list with copies of intersperse",
          "hierarchy": "Data List NonEmpty",
          "module": "Data.List.NonEmpty",
          "name": "intersperse",
          "normalized": "a-\u003eNonEmpty a-\u003eNonEmpty a",
          "package": "semigroups",
          "signature": "a-\u003eNonEmpty a-\u003eNonEmpty a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/semigroups/docs/Data-List-NonEmpty.html#v:intersperse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003eisPrefix\u003c/code\u003e function returns \u003ccode\u003eTrue\u003c/code\u003e if the first argument is\n a prefix of the second.\n\u003c/p\u003e",
          "module": "Data.List.NonEmpty",
          "name": "isPrefixOf",
          "package": "semigroups",
          "signature": "[a] -\u003e NonEmpty a -\u003e Bool",
          "source": "src/Data-List-NonEmpty.html#isPrefixOf",
          "type": "function"
        },
        "index": {
          "description": "The isPrefix function returns True if the first argument is prefix of the second",
          "hierarchy": "Data List NonEmpty",
          "module": "Data.List.NonEmpty",
          "name": "isPrefixOf",
          "normalized": "[a]-\u003eNonEmpty a-\u003eBool",
          "package": "semigroups",
          "partial": "Prefix Of",
          "signature": "[a]-\u003eNonEmpty a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/semigroups/docs/Data-List-NonEmpty.html#v:isPrefixOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eiterate\u003c/a\u003e\u003c/code\u003e f x\u003c/code\u003e produces the infinite sequence\n of repeated applications of \u003ccode\u003ef\u003c/code\u003e to \u003ccode\u003ex\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e iterate f x = x :| [f x, f (f x), ..]\n\u003c/pre\u003e",
          "module": "Data.List.NonEmpty",
          "name": "iterate",
          "package": "semigroups",
          "signature": "(a -\u003e a) -\u003e a -\u003e NonEmpty a",
          "source": "src/Data-List-NonEmpty.html#iterate",
          "type": "function"
        },
        "index": {
          "description": "iterate produces the infinite sequence of repeated applications of to iterate",
          "hierarchy": "Data List NonEmpty",
          "module": "Data.List.NonEmpty",
          "name": "iterate",
          "normalized": "(a-\u003ea)-\u003ea-\u003eNonEmpty a",
          "package": "semigroups",
          "signature": "(a-\u003ea)-\u003ea-\u003eNonEmpty a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/semigroups/docs/Data-List-NonEmpty.html#v:iterate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the last element of the stream.\n\u003c/p\u003e",
          "module": "Data.List.NonEmpty",
          "name": "last",
          "package": "semigroups",
          "signature": "NonEmpty a -\u003e a",
          "source": "src/Data-List-NonEmpty.html#last",
          "type": "function"
        },
        "index": {
          "description": "Extract the last element of the stream",
          "hierarchy": "Data List NonEmpty",
          "module": "Data.List.NonEmpty",
          "name": "last",
          "normalized": "NonEmpty a-\u003ea",
          "package": "semigroups",
          "signature": "NonEmpty a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/semigroups/docs/Data-List-NonEmpty.html#v:last"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.List.NonEmpty",
          "name": "length",
          "package": "semigroups",
          "signature": "NonEmpty a -\u003e Int",
          "source": "src/Data-List-NonEmpty.html#length",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data List NonEmpty",
          "module": "Data.List.NonEmpty",
          "name": "length",
          "normalized": "NonEmpty a-\u003eInt",
          "package": "semigroups",
          "signature": "NonEmpty a-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/semigroups/docs/Data-List-NonEmpty.html#v:length"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003elines\u003c/a\u003e\u003c/code\u003e function breaks a stream of characters into a stream\n of strings at newline characters. The resulting strings do not\n contain newlines.\n\u003c/p\u003e",
          "module": "Data.List.NonEmpty",
          "name": "lines",
          "package": "semigroups",
          "signature": "NonEmpty Char -\u003e NonEmpty String",
          "source": "src/Data-List-NonEmpty.html#lines",
          "type": "function"
        },
        "index": {
          "description": "The lines function breaks stream of characters into stream of strings at newline characters The resulting strings do not contain newlines",
          "hierarchy": "Data List NonEmpty",
          "module": "Data.List.NonEmpty",
          "name": "lines",
          "normalized": "NonEmpty Char-\u003eNonEmpty String",
          "package": "semigroups",
          "signature": "NonEmpty Char-\u003eNonEmpty String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/semigroups/docs/Data-List-NonEmpty.html#v:lines"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap a function over a \u003ccode\u003e\u003ca\u003eNonEmpty\u003c/a\u003e\u003c/code\u003e stream.\n\u003c/p\u003e",
          "module": "Data.List.NonEmpty",
          "name": "map",
          "package": "semigroups",
          "signature": "(a -\u003e b) -\u003e NonEmpty a -\u003e NonEmpty b",
          "source": "src/Data-List-NonEmpty.html#map",
          "type": "function"
        },
        "index": {
          "description": "Map function over NonEmpty stream",
          "hierarchy": "Data List NonEmpty",
          "module": "Data.List.NonEmpty",
          "name": "map",
          "normalized": "(a-\u003eb)-\u003eNonEmpty a-\u003eNonEmpty b",
          "package": "semigroups",
          "signature": "(a-\u003eb)-\u003eNonEmpty a-\u003eNonEmpty b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/semigroups/docs/Data-List-NonEmpty.html#v:map"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003enonEmpty\u003c/a\u003e\u003c/code\u003e efficiently turns a normal list into a \u003ccode\u003e\u003ca\u003eNonEmpty\u003c/a\u003e\u003c/code\u003e stream,\n producing \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the input is empty.\n\u003c/p\u003e",
          "module": "Data.List.NonEmpty",
          "name": "nonEmpty",
          "package": "semigroups",
          "signature": "[a] -\u003e Maybe (NonEmpty a)",
          "source": "src/Data-List-NonEmpty.html#nonEmpty",
          "type": "function"
        },
        "index": {
          "description": "nonEmpty efficiently turns normal list into NonEmpty stream producing Nothing if the input is empty",
          "hierarchy": "Data List NonEmpty",
          "module": "Data.List.NonEmpty",
          "name": "nonEmpty",
          "normalized": "[a]-\u003eMaybe(NonEmpty a)",
          "package": "semigroups",
          "partial": "Empty",
          "signature": "[a]-\u003eMaybe(NonEmpty a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/semigroups/docs/Data-List-NonEmpty.html#v:nonEmpty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003enub\u003c/a\u003e\u003c/code\u003e function removes duplicate elements from a list. In\n particular, it keeps only the first occurence of each element.\n (The name \u003ccode\u003e\u003ca\u003enub\u003c/a\u003e\u003c/code\u003e means 'essence'.)\n It is a special case of \u003ccode\u003e\u003ca\u003enubBy\u003c/a\u003e\u003c/code\u003e, which allows the programmer to\n supply their own inequality test.\n\u003c/p\u003e",
          "module": "Data.List.NonEmpty",
          "name": "nub",
          "package": "semigroups",
          "signature": "NonEmpty a -\u003e NonEmpty a",
          "source": "src/Data-List-NonEmpty.html#nub",
          "type": "function"
        },
        "index": {
          "description": "The nub function removes duplicate elements from list In particular it keeps only the first occurence of each element The name nub means essence It is special case of nubBy which allows the programmer to supply their own inequality test",
          "hierarchy": "Data List NonEmpty",
          "module": "Data.List.NonEmpty",
          "name": "nub",
          "normalized": "NonEmpty a-\u003eNonEmpty a",
          "package": "semigroups",
          "signature": "NonEmpty a-\u003eNonEmpty a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/semigroups/docs/Data-List-NonEmpty.html#v:nub"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003enubBy\u003c/a\u003e\u003c/code\u003e function behaves just like \u003ccode\u003e\u003ca\u003enub\u003c/a\u003e\u003c/code\u003e, except it uses a\n user-supplied equality predicate instead of the overloaded \u003ccode\u003e\u003ca\u003e==\u003c/a\u003e\u003c/code\u003e\n function.\n\u003c/p\u003e",
          "module": "Data.List.NonEmpty",
          "name": "nubBy",
          "package": "semigroups",
          "signature": "(a -\u003e a -\u003e Bool) -\u003e NonEmpty a -\u003e NonEmpty a",
          "source": "src/Data-List-NonEmpty.html#nubBy",
          "type": "function"
        },
        "index": {
          "description": "The nubBy function behaves just like nub except it uses user-supplied equality predicate instead of the overloaded function",
          "hierarchy": "Data List NonEmpty",
          "module": "Data.List.NonEmpty",
          "name": "nubBy",
          "normalized": "(a-\u003ea-\u003eBool)-\u003eNonEmpty a-\u003eNonEmpty a",
          "package": "semigroups",
          "partial": "By",
          "signature": "(a-\u003ea-\u003eBool)-\u003eNonEmpty a-\u003eNonEmpty a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/semigroups/docs/Data-List-NonEmpty.html#v:nubBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003epartition\u003c/a\u003e\u003c/code\u003e function takes a predicate \u003ccode\u003ep\u003c/code\u003e and a stream\n \u003ccode\u003exs\u003c/code\u003e, and returns a pair of lists. The first list corresponds to the\n elements of \u003ccode\u003exs\u003c/code\u003e for which \u003ccode\u003ep\u003c/code\u003e holds; the second corresponds to the\n elements of \u003ccode\u003exs\u003c/code\u003e for which \u003ccode\u003ep\u003c/code\u003e does not hold.\n\u003c/p\u003e\u003cpre\u003e 'partition' p xs = ('filter' p xs, 'filter' (not . p) xs)\n\u003c/pre\u003e",
          "module": "Data.List.NonEmpty",
          "name": "partition",
          "package": "semigroups",
          "signature": "(a -\u003e Bool) -\u003e NonEmpty a -\u003e ([a], [a])",
          "source": "src/Data-List-NonEmpty.html#partition",
          "type": "function"
        },
        "index": {
          "description": "The partition function takes predicate and stream xs and returns pair of lists The first list corresponds to the elements of xs for which holds the second corresponds to the elements of xs for which does not hold partition xs filter xs filter not xs",
          "hierarchy": "Data List NonEmpty",
          "module": "Data.List.NonEmpty",
          "name": "partition",
          "normalized": "(a-\u003eBool)-\u003eNonEmpty a-\u003e([a],[a])",
          "package": "semigroups",
          "signature": "(a-\u003eBool)-\u003eNonEmpty a-\u003e([a],[a])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/semigroups/docs/Data-List-NonEmpty.html#v:partition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003erepeat\u003c/a\u003e\u003c/code\u003e x\u003c/code\u003e returns a constant stream, where all elements are\n equal to \u003ccode\u003ex\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.List.NonEmpty",
          "name": "repeat",
          "package": "semigroups",
          "signature": "a -\u003e NonEmpty a",
          "source": "src/Data-List-NonEmpty.html#repeat",
          "type": "function"
        },
        "index": {
          "description": "repeat returns constant stream where all elements are equal to",
          "hierarchy": "Data List NonEmpty",
          "module": "Data.List.NonEmpty",
          "name": "repeat",
          "normalized": "a-\u003eNonEmpty a",
          "package": "semigroups",
          "signature": "a-\u003eNonEmpty a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/semigroups/docs/Data-List-NonEmpty.html#v:repeat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ereverse\u003c/a\u003e\u003c/code\u003e a finite NonEmpty stream.\n\u003c/p\u003e",
          "module": "Data.List.NonEmpty",
          "name": "reverse",
          "package": "semigroups",
          "signature": "NonEmpty a -\u003e NonEmpty a",
          "source": "src/Data-List-NonEmpty.html#reverse",
          "type": "function"
        },
        "index": {
          "description": "reverse finite NonEmpty stream",
          "hierarchy": "Data List NonEmpty",
          "module": "Data.List.NonEmpty",
          "name": "reverse",
          "normalized": "NonEmpty a-\u003eNonEmpty a",
          "package": "semigroups",
          "signature": "NonEmpty a-\u003eNonEmpty a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/semigroups/docs/Data-List-NonEmpty.html#v:reverse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003escanl\u003c/a\u003e\u003c/code\u003e is similar to \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e, but returns a stream of successive\n reduced values from the left:\n\u003c/p\u003e\u003cpre\u003e scanl f z [x1, x2, ...] == z :| [z `f` x1, (z `f` x1) `f` x2, ...]\n\u003c/pre\u003e\u003cp\u003eNote that\n\u003c/p\u003e\u003cpre\u003e last (scanl f z xs) == foldl f z xs.\n\u003c/pre\u003e",
          "module": "Data.List.NonEmpty",
          "name": "scanl",
          "package": "semigroups",
          "signature": "(b -\u003e a -\u003e b) -\u003e b -\u003e f a -\u003e NonEmpty b",
          "source": "src/Data-List-NonEmpty.html#scanl",
          "type": "function"
        },
        "index": {
          "description": "scanl is similar to foldl but returns stream of successive reduced values from the left scanl x1 x2 x1 x1 x2 Note that last scanl xs foldl xs",
          "hierarchy": "Data List NonEmpty",
          "module": "Data.List.NonEmpty",
          "name": "scanl",
          "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003ec b-\u003eNonEmpty a",
          "package": "semigroups",
          "signature": "(b-\u003ea-\u003eb)-\u003eb-\u003ef a-\u003eNonEmpty b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/semigroups/docs/Data-List-NonEmpty.html#v:scanl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003escanl1\u003c/a\u003e\u003c/code\u003e is a variant of \u003ccode\u003e\u003ca\u003escanl\u003c/a\u003e\u003c/code\u003e that has no starting value argument:\n\u003c/p\u003e\u003cpre\u003e scanl1 f [x1, x2, ...] == x1 :| [x1 `f` x2, x1 `f` (x2 `f` x3), ...]\n\u003c/pre\u003e",
          "module": "Data.List.NonEmpty",
          "name": "scanl1",
          "package": "semigroups",
          "signature": "(a -\u003e a -\u003e a) -\u003e NonEmpty a -\u003e NonEmpty a",
          "source": "src/Data-List-NonEmpty.html#scanl1",
          "type": "function"
        },
        "index": {
          "description": "scanl1 is variant of scanl that has no starting value argument scanl1 x1 x2 x1 x1 x2 x1 x2 x3",
          "hierarchy": "Data List NonEmpty",
          "module": "Data.List.NonEmpty",
          "name": "scanl1",
          "normalized": "(a-\u003ea-\u003ea)-\u003eNonEmpty a-\u003eNonEmpty a",
          "package": "semigroups",
          "signature": "(a-\u003ea-\u003ea)-\u003eNonEmpty a-\u003eNonEmpty a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/semigroups/docs/Data-List-NonEmpty.html#v:scanl1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003escanr\u003c/a\u003e\u003c/code\u003e is the right-to-left dual of \u003ccode\u003e\u003ca\u003escanl\u003c/a\u003e\u003c/code\u003e.\n Note that\n\u003c/p\u003e\u003cpre\u003e head (scanr f z xs) == foldr f z xs.\n\u003c/pre\u003e",
          "module": "Data.List.NonEmpty",
          "name": "scanr",
          "package": "semigroups",
          "signature": "(a -\u003e b -\u003e b) -\u003e b -\u003e f a -\u003e NonEmpty b",
          "source": "src/Data-List-NonEmpty.html#scanr",
          "type": "function"
        },
        "index": {
          "description": "scanr is the right-to-left dual of scanl Note that head scanr xs foldr xs",
          "hierarchy": "Data List NonEmpty",
          "module": "Data.List.NonEmpty",
          "name": "scanr",
          "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003ec a-\u003eNonEmpty b",
          "package": "semigroups",
          "signature": "(a-\u003eb-\u003eb)-\u003eb-\u003ef a-\u003eNonEmpty b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/semigroups/docs/Data-List-NonEmpty.html#v:scanr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003escanr1\u003c/a\u003e\u003c/code\u003e is a variant of \u003ccode\u003e\u003ca\u003escanr\u003c/a\u003e\u003c/code\u003e that has no starting value argument.\n\u003c/p\u003e",
          "module": "Data.List.NonEmpty",
          "name": "scanr1",
          "package": "semigroups",
          "signature": "(a -\u003e a -\u003e a) -\u003e NonEmpty a -\u003e NonEmpty a",
          "source": "src/Data-List-NonEmpty.html#scanr1",
          "type": "function"
        },
        "index": {
          "description": "scanr1 is variant of scanr that has no starting value argument",
          "hierarchy": "Data List NonEmpty",
          "module": "Data.List.NonEmpty",
          "name": "scanr1",
          "normalized": "(a-\u003ea-\u003ea)-\u003eNonEmpty a-\u003eNonEmpty a",
          "package": "semigroups",
          "signature": "(a-\u003ea-\u003ea)-\u003eNonEmpty a-\u003eNonEmpty a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/semigroups/docs/Data-List-NonEmpty.html#v:scanr1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003esome1\u003c/a\u003e\u003c/code\u003e x\u003c/code\u003e sequences \u003ccode\u003ex\u003c/code\u003e one or more times.\n\u003c/p\u003e",
          "module": "Data.List.NonEmpty",
          "name": "some1",
          "package": "semigroups",
          "signature": "f a -\u003e f (NonEmpty a)",
          "source": "src/Data-List-NonEmpty.html#some1",
          "type": "function"
        },
        "index": {
          "description": "some1 sequences one or more times",
          "hierarchy": "Data List NonEmpty",
          "module": "Data.List.NonEmpty",
          "name": "some1",
          "normalized": "a b-\u003ea(NonEmpty b)",
          "package": "semigroups",
          "signature": "f a-\u003ef(NonEmpty a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/semigroups/docs/Data-List-NonEmpty.html#v:some1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSort a stream.\n\u003c/p\u003e",
          "module": "Data.List.NonEmpty",
          "name": "sort",
          "package": "semigroups",
          "signature": "NonEmpty a -\u003e NonEmpty a",
          "source": "src/Data-List-NonEmpty.html#sort",
          "type": "function"
        },
        "index": {
          "description": "Sort stream",
          "hierarchy": "Data List NonEmpty",
          "module": "Data.List.NonEmpty",
          "name": "sort",
          "normalized": "NonEmpty a-\u003eNonEmpty a",
          "package": "semigroups",
          "signature": "NonEmpty a-\u003eNonEmpty a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/semigroups/docs/Data-List-NonEmpty.html#v:sort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003esortBy\u003c/a\u003e\u003c/code\u003e for NonEmtpy, behaves the same as \u003ccode\u003e\u003ca\u003esortBy\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.List.NonEmpty",
          "name": "sortBy",
          "package": "semigroups",
          "signature": "(a -\u003e a -\u003e Ordering) -\u003e NonEmpty a -\u003e NonEmpty a",
          "source": "src/Data-List-NonEmpty.html#sortBy",
          "type": "function"
        },
        "index": {
          "description": "sortBy for NonEmtpy behaves the same as sortBy",
          "hierarchy": "Data List NonEmpty",
          "module": "Data.List.NonEmpty",
          "name": "sortBy",
          "normalized": "(a-\u003ea-\u003eOrdering)-\u003eNonEmpty a-\u003eNonEmpty a",
          "package": "semigroups",
          "partial": "By",
          "signature": "(a-\u003ea-\u003eOrdering)-\u003eNonEmpty a-\u003eNonEmpty a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/semigroups/docs/Data-List-NonEmpty.html#v:sortBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003esortOn\u003c/a\u003e\u003c/code\u003e for NonEmtpy, behaves the same as:\n\u003c/p\u003e\u003cpre\u003e sortBy . comparing\n\u003c/pre\u003e",
          "module": "Data.List.NonEmpty",
          "name": "sortOn",
          "package": "semigroups",
          "signature": "(a -\u003e o) -\u003e NonEmpty a -\u003e NonEmpty a",
          "source": "src/Data-List-NonEmpty.html#sortOn",
          "type": "function"
        },
        "index": {
          "description": "sortOn for NonEmtpy behaves the same as sortBy comparing",
          "hierarchy": "Data List NonEmpty",
          "module": "Data.List.NonEmpty",
          "name": "sortOn",
          "normalized": "(a-\u003eb)-\u003eNonEmpty a-\u003eNonEmpty a",
          "package": "semigroups",
          "partial": "On",
          "signature": "(a-\u003eo)-\u003eNonEmpty a-\u003eNonEmpty a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/semigroups/docs/Data-List-NonEmpty.html#v:sortOn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003espan\u003c/a\u003e\u003c/code\u003e p xs\u003c/code\u003e returns the longest prefix of \u003ccode\u003exs\u003c/code\u003e that satisfies\n \u003ccode\u003ep\u003c/code\u003e, together with the remainder of the stream.\n\u003c/p\u003e\u003cpre\u003e 'span' p xs == ('takeWhile' p xs, 'dropWhile' p xs)\n xs == ys ++ zs where (ys, zs) = 'span' p xs\n\u003c/pre\u003e",
          "module": "Data.List.NonEmpty",
          "name": "span",
          "package": "semigroups",
          "signature": "(a -\u003e Bool) -\u003e NonEmpty a -\u003e ([a], [a])",
          "source": "src/Data-List-NonEmpty.html#span",
          "type": "function"
        },
        "index": {
          "description": "span xs returns the longest prefix of xs that satisfies together with the remainder of the stream span xs takeWhile xs dropWhile xs xs ys zs where ys zs span xs",
          "hierarchy": "Data List NonEmpty",
          "module": "Data.List.NonEmpty",
          "name": "span",
          "normalized": "(a-\u003eBool)-\u003eNonEmpty a-\u003e([a],[a])",
          "package": "semigroups",
          "signature": "(a-\u003eBool)-\u003eNonEmpty a-\u003e([a],[a])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/semigroups/docs/Data-List-NonEmpty.html#v:span"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003esplitAt\u003c/a\u003e\u003c/code\u003e n xs\u003c/code\u003e returns a pair consisting of the prefix of \u003ccode\u003exs\u003c/code\u003e\n of length \u003ccode\u003en\u003c/code\u003e and the remaining stream immediately following this prefix.\n\u003c/p\u003e\u003cpre\u003e 'splitAt' n xs == ('take' n xs, 'drop' n xs)\n xs == ys ++ zs where (ys, zs) = 'splitAt' n xs\n\u003c/pre\u003e",
          "module": "Data.List.NonEmpty",
          "name": "splitAt",
          "package": "semigroups",
          "signature": "Int -\u003e NonEmpty a -\u003e ([a], [a])",
          "source": "src/Data-List-NonEmpty.html#splitAt",
          "type": "function"
        },
        "index": {
          "description": "splitAt xs returns pair consisting of the prefix of xs of length and the remaining stream immediately following this prefix splitAt xs take xs drop xs xs ys zs where ys zs splitAt xs",
          "hierarchy": "Data List NonEmpty",
          "module": "Data.List.NonEmpty",
          "name": "splitAt",
          "normalized": "Int-\u003eNonEmpty a-\u003e([a],[a])",
          "package": "semigroups",
          "partial": "At",
          "signature": "Int-\u003eNonEmpty a-\u003e([a],[a])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/semigroups/docs/Data-List-NonEmpty.html#v:splitAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the possibly-empty tail of the stream.\n\u003c/p\u003e",
          "module": "Data.List.NonEmpty",
          "name": "tail",
          "package": "semigroups",
          "signature": "NonEmpty a -\u003e [a]",
          "source": "src/Data-List-NonEmpty.html#tail",
          "type": "function"
        },
        "index": {
          "description": "Extract the possibly-empty tail of the stream",
          "hierarchy": "Data List NonEmpty",
          "module": "Data.List.NonEmpty",
          "name": "tail",
          "normalized": "NonEmpty a-\u003e[a]",
          "package": "semigroups",
          "signature": "NonEmpty a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/semigroups/docs/Data-List-NonEmpty.html#v:tail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003etails\u003c/a\u003e\u003c/code\u003e function takes a stream \u003ccode\u003exs\u003c/code\u003e and returns all the\n suffixes of \u003ccode\u003exs\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.List.NonEmpty",
          "name": "tails",
          "package": "semigroups",
          "signature": "f a -\u003e NonEmpty [a]",
          "source": "src/Data-List-NonEmpty.html#tails",
          "type": "function"
        },
        "index": {
          "description": "The tails function takes stream xs and returns all the suffixes of xs",
          "hierarchy": "Data List NonEmpty",
          "module": "Data.List.NonEmpty",
          "name": "tails",
          "normalized": "a b-\u003eNonEmpty[b]",
          "package": "semigroups",
          "signature": "f a-\u003eNonEmpty[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/semigroups/docs/Data-List-NonEmpty.html#v:tails"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003etake\u003c/a\u003e\u003c/code\u003e n xs\u003c/code\u003e returns the first \u003ccode\u003en\u003c/code\u003e elements of \u003ccode\u003exs\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.List.NonEmpty",
          "name": "take",
          "package": "semigroups",
          "signature": "Int -\u003e NonEmpty a -\u003e [a]",
          "source": "src/Data-List-NonEmpty.html#take",
          "type": "function"
        },
        "index": {
          "description": "take xs returns the first elements of xs",
          "hierarchy": "Data List NonEmpty",
          "module": "Data.List.NonEmpty",
          "name": "take",
          "normalized": "Int-\u003eNonEmpty a-\u003e[a]",
          "package": "semigroups",
          "signature": "Int-\u003eNonEmpty a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/semigroups/docs/Data-List-NonEmpty.html#v:take"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003etakeWhile\u003c/a\u003e\u003c/code\u003e p xs\u003c/code\u003e returns the longest prefix of the stream\n \u003ccode\u003exs\u003c/code\u003e for which the predicate \u003ccode\u003ep\u003c/code\u003e holds.\n\u003c/p\u003e",
          "module": "Data.List.NonEmpty",
          "name": "takeWhile",
          "package": "semigroups",
          "signature": "(a -\u003e Bool) -\u003e NonEmpty a -\u003e [a]",
          "source": "src/Data-List-NonEmpty.html#takeWhile",
          "type": "function"
        },
        "index": {
          "description": "takeWhile xs returns the longest prefix of the stream xs for which the predicate holds",
          "hierarchy": "Data List NonEmpty",
          "module": "Data.List.NonEmpty",
          "name": "takeWhile",
          "normalized": "(a-\u003eBool)-\u003eNonEmpty a-\u003e[a]",
          "package": "semigroups",
          "partial": "While",
          "signature": "(a-\u003eBool)-\u003eNonEmpty a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/semigroups/docs/Data-List-NonEmpty.html#v:takeWhile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a stream to a normal list efficiently.\n\u003c/p\u003e",
          "module": "Data.List.NonEmpty",
          "name": "toList",
          "package": "semigroups",
          "signature": "NonEmpty a -\u003e [a]",
          "source": "src/Data-List-NonEmpty.html#toList",
          "type": "function"
        },
        "index": {
          "description": "Convert stream to normal list efficiently",
          "hierarchy": "Data List NonEmpty",
          "module": "Data.List.NonEmpty",
          "name": "toList",
          "normalized": "NonEmpty a-\u003e[a]",
          "package": "semigroups",
          "partial": "List",
          "signature": "NonEmpty a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/semigroups/docs/Data-List-NonEmpty.html#v:toList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.List.NonEmpty",
          "name": "transpose",
          "package": "semigroups",
          "signature": "NonEmpty (NonEmpty a) -\u003e NonEmpty (NonEmpty a)",
          "source": "src/Data-List-NonEmpty.html#transpose",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data List NonEmpty",
          "module": "Data.List.NonEmpty",
          "name": "transpose",
          "normalized": "NonEmpty(NonEmpty a)-\u003eNonEmpty(NonEmpty a)",
          "package": "semigroups",
          "signature": "NonEmpty(NonEmpty a)-\u003eNonEmpty(NonEmpty a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/semigroups/docs/Data-List-NonEmpty.html#v:transpose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003euncons\u003c/a\u003e\u003c/code\u003e produces the first element of the stream, and a stream of the\n remaining elements, if any.\n\u003c/p\u003e",
          "module": "Data.List.NonEmpty",
          "name": "uncons",
          "package": "semigroups",
          "signature": "NonEmpty a -\u003e (a, Maybe (NonEmpty a))",
          "source": "src/Data-List-NonEmpty.html#uncons",
          "type": "function"
        },
        "index": {
          "description": "uncons produces the first element of the stream and stream of the remaining elements if any",
          "hierarchy": "Data List NonEmpty",
          "module": "Data.List.NonEmpty",
          "name": "uncons",
          "normalized": "NonEmpty a-\u003e(a,Maybe(NonEmpty a))",
          "package": "semigroups",
          "signature": "NonEmpty a-\u003e(a,Maybe(NonEmpty a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/semigroups/docs/Data-List-NonEmpty.html#v:uncons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eunfold\u003c/a\u003e\u003c/code\u003e produces a new stream by repeatedly applying the unfolding\n function to the seed value to produce an element of type \u003ccode\u003eb\u003c/code\u003e and a new\n seed value.  When the unfolding function returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e instead of\n a new seed value, the stream ends.\n\u003c/p\u003e",
          "module": "Data.List.NonEmpty",
          "name": "unfold",
          "package": "semigroups",
          "signature": "(a -\u003e (b, Maybe a)) -\u003e a -\u003e NonEmpty b",
          "source": "src/Data-List-NonEmpty.html#unfold",
          "type": "function"
        },
        "index": {
          "description": "unfold produces new stream by repeatedly applying the unfolding function to the seed value to produce an element of type and new seed value When the unfolding function returns Nothing instead of new seed value the stream ends",
          "hierarchy": "Data List NonEmpty",
          "module": "Data.List.NonEmpty",
          "name": "unfold",
          "normalized": "(a-\u003e(b,Maybe a))-\u003ea-\u003eNonEmpty b",
          "package": "semigroups",
          "signature": "(a-\u003e(b,Maybe a))-\u003ea-\u003eNonEmpty b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/semigroups/docs/Data-List-NonEmpty.html#v:unfold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.List.NonEmpty",
          "name": "unfoldr",
          "package": "semigroups",
          "signature": "(a -\u003e (b, Maybe a)) -\u003e a -\u003e NonEmpty b",
          "source": "src/Data-List-NonEmpty.html#unfoldr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data List NonEmpty",
          "module": "Data.List.NonEmpty",
          "name": "unfoldr",
          "normalized": "(a-\u003e(b,Maybe a))-\u003ea-\u003eNonEmpty b",
          "package": "semigroups",
          "signature": "(a-\u003e(b,Maybe a))-\u003ea-\u003eNonEmpty b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/semigroups/docs/Data-List-NonEmpty.html#v:unfoldr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eunlines\u003c/a\u003e\u003c/code\u003e function is an inverse operation to \u003ccode\u003e\u003ca\u003elines\u003c/a\u003e\u003c/code\u003e. It\n joins lines, after appending a terminating newline to each.\n\u003c/p\u003e",
          "module": "Data.List.NonEmpty",
          "name": "unlines",
          "package": "semigroups",
          "signature": "NonEmpty String -\u003e NonEmpty Char",
          "source": "src/Data-List-NonEmpty.html#unlines",
          "type": "function"
        },
        "index": {
          "description": "The unlines function is an inverse operation to lines It joins lines after appending terminating newline to each",
          "hierarchy": "Data List NonEmpty",
          "module": "Data.List.NonEmpty",
          "name": "unlines",
          "normalized": "NonEmpty String-\u003eNonEmpty Char",
          "package": "semigroups",
          "signature": "NonEmpty String-\u003eNonEmpty Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/semigroups/docs/Data-List-NonEmpty.html#v:unlines"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eunwords\u003c/a\u003e\u003c/code\u003e function is an inverse operation to \u003ccode\u003e\u003ca\u003ewords\u003c/a\u003e\u003c/code\u003e. It\n joins words with separating spaces.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eBeware\u003c/em\u003e: the input \u003ccode\u003e(\"\" :| [])\u003c/code\u003e will cause an error.\n\u003c/p\u003e",
          "module": "Data.List.NonEmpty",
          "name": "unwords",
          "package": "semigroups",
          "signature": "NonEmpty String -\u003e NonEmpty Char",
          "source": "src/Data-List-NonEmpty.html#unwords",
          "type": "function"
        },
        "index": {
          "description": "The unwords function is an inverse operation to words It joins words with separating spaces Beware the input will cause an error",
          "hierarchy": "Data List NonEmpty",
          "module": "Data.List.NonEmpty",
          "name": "unwords",
          "normalized": "NonEmpty String-\u003eNonEmpty Char",
          "package": "semigroups",
          "signature": "NonEmpty String-\u003eNonEmpty Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/semigroups/docs/Data-List-NonEmpty.html#v:unwords"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eunzip\u003c/a\u003e\u003c/code\u003e function is the inverse of the \u003ccode\u003e\u003ca\u003ezip\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e",
          "module": "Data.List.NonEmpty",
          "name": "unzip",
          "package": "semigroups",
          "signature": "f (a, b) -\u003e (f a, f b)",
          "source": "src/Data-List-NonEmpty.html#unzip",
          "type": "function"
        },
        "index": {
          "description": "The unzip function is the inverse of the zip function",
          "hierarchy": "Data List NonEmpty",
          "module": "Data.List.NonEmpty",
          "name": "unzip",
          "normalized": "a(b,c)-\u003e(a b,a c)",
          "package": "semigroups",
          "signature": "f(a,b)-\u003e(f a,f b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/semigroups/docs/Data-List-NonEmpty.html#v:unzip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ewords\u003c/a\u003e\u003c/code\u003e function breaks a stream of characters into a\n stream of words, which were delimited by white space.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eBeware\u003c/em\u003e: if the input contains no words (i.e. is entirely\n whitespace), this will cause an error.\n\u003c/p\u003e",
          "module": "Data.List.NonEmpty",
          "name": "words",
          "package": "semigroups",
          "signature": "NonEmpty Char -\u003e NonEmpty String",
          "source": "src/Data-List-NonEmpty.html#words",
          "type": "function"
        },
        "index": {
          "description": "The words function breaks stream of characters into stream of words which were delimited by white space Beware if the input contains no words i.e is entirely whitespace this will cause an error",
          "hierarchy": "Data List NonEmpty",
          "module": "Data.List.NonEmpty",
          "name": "words",
          "normalized": "NonEmpty Char-\u003eNonEmpty String",
          "package": "semigroups",
          "signature": "NonEmpty Char-\u003eNonEmpty String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/semigroups/docs/Data-List-NonEmpty.html#v:words"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.List.NonEmpty",
          "name": "xor",
          "package": "semigroups",
          "signature": "NonEmpty Bool -\u003e Bool",
          "source": "src/Data-List-NonEmpty.html#xor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data List NonEmpty",
          "module": "Data.List.NonEmpty",
          "name": "xor",
          "normalized": "NonEmpty Bool-\u003eBool",
          "package": "semigroups",
          "signature": "NonEmpty Bool-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/semigroups/docs/Data-List-NonEmpty.html#v:xor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ezip\u003c/a\u003e\u003c/code\u003e function takes two streams and returns a stream of\n corresponding pairs.\n\u003c/p\u003e",
          "module": "Data.List.NonEmpty",
          "name": "zip",
          "package": "semigroups",
          "signature": "NonEmpty a -\u003e NonEmpty b -\u003e NonEmpty (a, b)",
          "source": "src/Data-List-NonEmpty.html#zip",
          "type": "function"
        },
        "index": {
          "description": "The zip function takes two streams and returns stream of corresponding pairs",
          "hierarchy": "Data List NonEmpty",
          "module": "Data.List.NonEmpty",
          "name": "zip",
          "normalized": "NonEmpty a-\u003eNonEmpty b-\u003eNonEmpty(a,b)",
          "package": "semigroups",
          "signature": "NonEmpty a-\u003eNonEmpty b-\u003eNonEmpty(a,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/semigroups/docs/Data-List-NonEmpty.html#v:zip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ezipWith\u003c/a\u003e\u003c/code\u003e function generalizes \u003ccode\u003e\u003ca\u003ezip\u003c/a\u003e\u003c/code\u003e. Rather than tupling\n the elements, the elements are combined using the function\n passed as the first argument.\n\u003c/p\u003e",
          "module": "Data.List.NonEmpty",
          "name": "zipWith",
          "package": "semigroups",
          "signature": "(a -\u003e b -\u003e c) -\u003e NonEmpty a -\u003e NonEmpty b -\u003e NonEmpty c",
          "source": "src/Data-List-NonEmpty.html#zipWith",
          "type": "function"
        },
        "index": {
          "description": "The zipWith function generalizes zip Rather than tupling the elements the elements are combined using the function passed as the first argument",
          "hierarchy": "Data List NonEmpty",
          "module": "Data.List.NonEmpty",
          "name": "zipWith",
          "normalized": "(a-\u003eb-\u003ec)-\u003eNonEmpty a-\u003eNonEmpty b-\u003eNonEmpty c",
          "package": "semigroups",
          "partial": "With",
          "signature": "(a-\u003eb-\u003ec)-\u003eNonEmpty a-\u003eNonEmpty b-\u003eNonEmpty c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/semigroups/docs/Data-List-NonEmpty.html#v:zipWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eIn mathematics, a semigroup is an algebraic structure consisting of a\n set together with an associative binary operation. A semigroup\n generalizes a monoid in that there might not exist an identity\n element. It also (originally) generalized a group (a monoid with all\n inverses) to a type where every element did not have to have an inverse,\n thus the name semigroup.\n\u003c/p\u003e\u003cp\u003eThe use of \u003ccode\u003e(\u003c\u003e)\u003c/code\u003e in this module conflicts with an operator with the same\n name that is being exported by Data.Monoid. However, this package\n re-exports (most of) the contents of Data.Monoid, so to use semigroups\n and monoids in the same package just\n\u003c/p\u003e\u003cpre\u003e import Data.Semigroup\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Data.Semigroup",
          "name": "Semigroup",
          "package": "semigroups",
          "source": "src/Data-Semigroup.html",
          "type": "module"
        },
        "index": {
          "description": "In mathematics semigroup is an algebraic structure consisting of set together with an associative binary operation semigroup generalizes monoid in that there might not exist an identity element It also originally generalized group monoid with all inverses to type where every element did not have to have an inverse thus the name semigroup The use of in this module conflicts with an operator with the same name that is being exported by Data.Monoid However this package re-exports most of the contents of Data.Monoid so to use semigroups and monoids in the same package just import Data.Semigroup",
          "hierarchy": "Data Semigroup",
          "module": "Data.Semigroup",
          "name": "Semigroup",
          "package": "semigroups",
          "partial": "Semigroup",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/semigroups/docs/Data-Semigroup.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBoolean monoid under conjunction.\n\u003c/p\u003e",
          "module": "Data.Semigroup",
          "name": "All",
          "package": "semigroups",
          "type": "newtype"
        },
        "index": {
          "description": "Boolean monoid under conjunction",
          "hierarchy": "Data Semigroup",
          "module": "Data.Semigroup",
          "name": "All",
          "package": "semigroups",
          "partial": "All",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/semigroups/docs/Data-Semigroup.html#t:All"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBoolean monoid under disjunction.\n\u003c/p\u003e",
          "module": "Data.Semigroup",
          "name": "Any",
          "package": "semigroups",
          "type": "newtype"
        },
        "index": {
          "description": "Boolean monoid under disjunction",
          "hierarchy": "Data Semigroup",
          "module": "Data.Semigroup",
          "name": "Any",
          "package": "semigroups",
          "partial": "Any",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/semigroups/docs/Data-Semigroup.html#t:Any"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe dual of a monoid, obtained by swapping the arguments of \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Semigroup",
          "name": "Dual",
          "package": "semigroups",
          "type": "newtype"
        },
        "index": {
          "description": "The dual of monoid obtained by swapping the arguments of mappend",
          "hierarchy": "Data Semigroup",
          "module": "Data.Semigroup",
          "name": "Dual",
          "package": "semigroups",
          "partial": "Dual",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/semigroups/docs/Data-Semigroup.html#t:Dual"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe monoid of endomorphisms under composition.\n\u003c/p\u003e",
          "module": "Data.Semigroup",
          "name": "Endo",
          "package": "semigroups",
          "type": "newtype"
        },
        "index": {
          "description": "The monoid of endomorphisms under composition",
          "hierarchy": "Data Semigroup",
          "module": "Data.Semigroup",
          "name": "Endo",
          "package": "semigroups",
          "partial": "Endo",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/semigroups/docs/Data-Semigroup.html#t:Endo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse \u003ccode\u003e\u003ccode\u003e\u003ca\u003eOption\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eFirst\u003c/a\u003e\u003c/code\u003e a)\u003c/code\u003e to get the behavior of \u003ccode\u003e\u003ca\u003eFirst\u003c/a\u003e\u003c/code\u003e from \u003ccode\u003eData.Monoid\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Semigroup",
          "name": "First",
          "package": "semigroups",
          "source": "src/Data-Semigroup.html#First",
          "type": "newtype"
        },
        "index": {
          "description": "Use Option First to get the behavior of First from Data.Monoid",
          "hierarchy": "Data Semigroup",
          "module": "Data.Semigroup",
          "name": "First",
          "package": "semigroups",
          "partial": "First",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/semigroups/docs/Data-Semigroup.html#t:First"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse \u003ccode\u003e\u003ccode\u003e\u003ca\u003eOption\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eLast\u003c/a\u003e\u003c/code\u003e a)\u003c/code\u003e to get the behavior of \u003ccode\u003e\u003ca\u003eLast\u003c/a\u003e\u003c/code\u003e from \u003ccode\u003eData.Monoid\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Semigroup",
          "name": "Last",
          "package": "semigroups",
          "source": "src/Data-Semigroup.html#Last",
          "type": "newtype"
        },
        "index": {
          "description": "Use Option Last to get the behavior of Last from Data.Monoid",
          "hierarchy": "Data Semigroup",
          "module": "Data.Semigroup",
          "name": "Last",
          "package": "semigroups",
          "partial": "Last",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/semigroups/docs/Data-Semigroup.html#t:Last"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Semigroup",
          "name": "Max",
          "package": "semigroups",
          "source": "src/Data-Semigroup.html#Max",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Data Semigroup",
          "module": "Data.Semigroup",
          "name": "Max",
          "package": "semigroups",
          "partial": "Max",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/semigroups/docs/Data-Semigroup.html#t:Max"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Semigroup",
          "name": "Min",
          "package": "semigroups",
          "source": "src/Data-Semigroup.html#Min",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Data Semigroup",
          "module": "Data.Semigroup",
          "name": "Min",
          "package": "semigroups",
          "partial": "Min",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/semigroups/docs/Data-Semigroup.html#t:Min"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe class of monoids (types with an associative binary operation that\n has an identity).  Instances should satisfy the following laws:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003emappend mempty x = x\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003emappend x mempty = x\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003emappend x (mappend y z) = mappend (mappend x y) z\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003emconcat = \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e mappend mempty\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe method names refer to the monoid of lists under concatenation,\n but there are many other instances.\n\u003c/p\u003e\u003cp\u003eMinimal complete definition: \u003ccode\u003e\u003ca\u003emempty\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSome types can be viewed as a monoid in more than one way,\n e.g. both addition and multiplication on numbers.\n In such cases we often define \u003ccode\u003enewtype\u003c/code\u003es and make those instances\n of \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e, e.g. \u003ccode\u003e\u003ca\u003eSum\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eProduct\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Semigroup",
          "name": "Monoid",
          "package": "semigroups",
          "type": "class"
        },
        "index": {
          "description": "The class of monoids types with an associative binary operation that has an identity Instances should satisfy the following laws mappend mempty mappend mempty mappend mappend mappend mappend mconcat foldr mappend mempty The method names refer to the monoid of lists under concatenation but there are many other instances Minimal complete definition mempty and mappend Some types can be viewed as monoid in more than one way e.g both addition and multiplication on numbers In such cases we often define newtype and make those instances of Monoid e.g Sum and Product",
          "hierarchy": "Data Semigroup",
          "module": "Data.Semigroup",
          "name": "Monoid",
          "package": "semigroups",
          "partial": "Monoid",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/semigroups/docs/Data-Semigroup.html#t:Monoid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOption is effectively \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e with a better instance of \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e, built off of an underlying \u003ccode\u003e\u003ca\u003eSemigroup\u003c/a\u003e\u003c/code\u003e\n instead of an underlying \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e. Ideally, this type would not exist at all and we would just fix the \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e intance of \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Semigroup",
          "name": "Option",
          "package": "semigroups",
          "source": "src/Data-Semigroup.html#Option",
          "type": "newtype"
        },
        "index": {
          "description": "Option is effectively Maybe with better instance of Monoid built off of an underlying Semigroup instead of an underlying Monoid Ideally this type would not exist at all and we would just fix the Monoid intance of Maybe",
          "hierarchy": "Data Semigroup",
          "module": "Data.Semigroup",
          "name": "Option",
          "package": "semigroups",
          "partial": "Option",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/semigroups/docs/Data-Semigroup.html#t:Option"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMonoid under multiplication.\n\u003c/p\u003e",
          "module": "Data.Semigroup",
          "name": "Product",
          "package": "semigroups",
          "type": "newtype"
        },
        "index": {
          "description": "Monoid under multiplication",
          "hierarchy": "Data Semigroup",
          "module": "Data.Semigroup",
          "name": "Product",
          "package": "semigroups",
          "partial": "Product",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/semigroups/docs/Data-Semigroup.html#t:Product"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Semigroup",
          "name": "Semigroup",
          "package": "semigroups",
          "source": "src/Data-Semigroup.html#Semigroup",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Semigroup",
          "module": "Data.Semigroup",
          "name": "Semigroup",
          "package": "semigroups",
          "partial": "Semigroup",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/semigroups/docs/Data-Semigroup.html#t:Semigroup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMonoid under addition.\n\u003c/p\u003e",
          "module": "Data.Semigroup",
          "name": "Sum",
          "package": "semigroups",
          "type": "newtype"
        },
        "index": {
          "description": "Monoid under addition",
          "hierarchy": "Data Semigroup",
          "module": "Data.Semigroup",
          "name": "Sum",
          "package": "semigroups",
          "partial": "Sum",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/semigroups/docs/Data-Semigroup.html#t:Sum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProvide a Semigroup for an arbitrary Monoid.\n\u003c/p\u003e",
          "module": "Data.Semigroup",
          "name": "WrappedMonoid",
          "package": "semigroups",
          "source": "src/Data-Semigroup.html#WrappedMonoid",
          "type": "newtype"
        },
        "index": {
          "description": "Provide Semigroup for an arbitrary Monoid",
          "hierarchy": "Data Semigroup",
          "module": "Data.Semigroup",
          "name": "WrappedMonoid",
          "package": "semigroups",
          "partial": "Wrapped Monoid",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/semigroups/docs/Data-Semigroup.html#t:WrappedMonoid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn associative operation.\n\u003c/p\u003e\u003cpre\u003e (a \u003c\u003e b) \u003c\u003e c = a \u003c\u003e (b \u003c\u003e c)\n\u003c/pre\u003e\u003cp\u003eIf \u003ccode\u003ea\u003c/code\u003e is also a \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e we further require\n\u003c/p\u003e\u003cpre\u003e (\u003c\u003e) = mappend\n\u003c/pre\u003e",
          "module": "Data.Semigroup",
          "name": "(\u003c\u003e)",
          "package": "semigroups",
          "signature": "a -\u003e a -\u003e a",
          "source": "src/Data-Semigroup.html#%3C%3E",
          "type": "method"
        },
        "index": {
          "description": "An associative operation If is also Monoid we further require mappend",
          "hierarchy": "Data Semigroup",
          "module": "Data.Semigroup",
          "name": "(\u003c\u003e) \u003c\u003e",
          "normalized": "a-\u003ea-\u003ea",
          "package": "semigroups",
          "signature": "a-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/semigroups/docs/Data-Semigroup.html#v:-60--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Semigroup",
          "name": "All",
          "package": "semigroups",
          "signature": "All",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Semigroup",
          "module": "Data.Semigroup",
          "name": "All",
          "package": "semigroups",
          "partial": "All",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/semigroups/docs/Data-Semigroup.html#v:All"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Semigroup",
          "name": "Any",
          "package": "semigroups",
          "signature": "Any",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Semigroup",
          "module": "Data.Semigroup",
          "name": "Any",
          "package": "semigroups",
          "partial": "Any",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/semigroups/docs/Data-Semigroup.html#v:Any"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Semigroup",
          "name": "Dual",
          "package": "semigroups",
          "signature": "Dual",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Semigroup",
          "module": "Data.Semigroup",
          "name": "Dual",
          "package": "semigroups",
          "partial": "Dual",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/semigroups/docs/Data-Semigroup.html#v:Dual"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Semigroup",
          "name": "Endo",
          "package": "semigroups",
          "signature": "Endo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Semigroup",
          "module": "Data.Semigroup",
          "name": "Endo",
          "package": "semigroups",
          "partial": "Endo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/semigroups/docs/Data-Semigroup.html#v:Endo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Semigroup",
          "name": "First",
          "package": "semigroups",
          "signature": "First",
          "source": "src/Data-Semigroup.html#First",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Semigroup",
          "module": "Data.Semigroup",
          "name": "First",
          "package": "semigroups",
          "partial": "First",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/semigroups/docs/Data-Semigroup.html#v:First"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Semigroup",
          "name": "Last",
          "package": "semigroups",
          "signature": "Last",
          "source": "src/Data-Semigroup.html#Last",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Semigroup",
          "module": "Data.Semigroup",
          "name": "Last",
          "package": "semigroups",
          "partial": "Last",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/semigroups/docs/Data-Semigroup.html#v:Last"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Semigroup",
          "name": "Max",
          "package": "semigroups",
          "signature": "Max",
          "source": "src/Data-Semigroup.html#Max",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Semigroup",
          "module": "Data.Semigroup",
          "name": "Max",
          "package": "semigroups",
          "partial": "Max",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/semigroups/docs/Data-Semigroup.html#v:Max"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Semigroup",
          "name": "Min",
          "package": "semigroups",
          "signature": "Min",
          "source": "src/Data-Semigroup.html#Min",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Semigroup",
          "module": "Data.Semigroup",
          "name": "Min",
          "package": "semigroups",
          "partial": "Min",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/semigroups/docs/Data-Semigroup.html#v:Min"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Semigroup",
          "name": "Option",
          "package": "semigroups",
          "signature": "Option",
          "source": "src/Data-Semigroup.html#Option",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Semigroup",
          "module": "Data.Semigroup",
          "name": "Option",
          "package": "semigroups",
          "partial": "Option",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/semigroups/docs/Data-Semigroup.html#v:Option"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Semigroup",
          "name": "Product",
          "package": "semigroups",
          "signature": "Product",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Semigroup",
          "module": "Data.Semigroup",
          "name": "Product",
          "package": "semigroups",
          "partial": "Product",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/semigroups/docs/Data-Semigroup.html#v:Product"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Semigroup",
          "name": "Sum",
          "package": "semigroups",
          "signature": "Sum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Semigroup",
          "module": "Data.Semigroup",
          "name": "Sum",
          "package": "semigroups",
          "partial": "Sum",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/semigroups/docs/Data-Semigroup.html#v:Sum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Semigroup",
          "name": "WrapMonoid",
          "package": "semigroups",
          "signature": "WrapMonoid",
          "source": "src/Data-Semigroup.html#WrappedMonoid",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Semigroup",
          "module": "Data.Semigroup",
          "name": "WrapMonoid",
          "package": "semigroups",
          "partial": "Wrap Monoid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/semigroups/docs/Data-Semigroup.html#v:WrapMonoid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Semigroup",
          "name": "appEndo",
          "package": "semigroups",
          "signature": "a -\u003e a",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Semigroup",
          "module": "Data.Semigroup",
          "name": "appEndo",
          "normalized": "a-\u003ea",
          "package": "semigroups",
          "partial": "Endo",
          "signature": "a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/semigroups/docs/Data-Semigroup.html#v:appEndo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA generalization of \u003ccode\u003e\u003ca\u003ecycle\u003c/a\u003e\u003c/code\u003e to an arbitrary \u003ccode\u003e\u003ca\u003eSemigroup\u003c/a\u003e\u003c/code\u003e.\n May fail to terminate for some values in some semigroups.\n\u003c/p\u003e",
          "module": "Data.Semigroup",
          "name": "cycle1",
          "package": "semigroups",
          "signature": "m -\u003e m",
          "source": "src/Data-Semigroup.html#cycle1",
          "type": "function"
        },
        "index": {
          "description": "generalization of cycle to an arbitrary Semigroup May fail to terminate for some values in some semigroups",
          "hierarchy": "Data Semigroup",
          "module": "Data.Semigroup",
          "name": "cycle1",
          "normalized": "a-\u003ea",
          "package": "semigroups",
          "signature": "m-\u003em",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/semigroups/docs/Data-Semigroup.html#v:cycle1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis lets you use a difference list of a Semigroup as a Monoid.\n\u003c/p\u003e",
          "module": "Data.Semigroup",
          "name": "diff",
          "package": "semigroups",
          "signature": "m -\u003e Endo m",
          "source": "src/Data-Semigroup.html#diff",
          "type": "function"
        },
        "index": {
          "description": "This lets you use difference list of Semigroup as Monoid",
          "hierarchy": "Data Semigroup",
          "module": "Data.Semigroup",
          "name": "diff",
          "normalized": "a-\u003eEndo a",
          "package": "semigroups",
          "signature": "m-\u003eEndo m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/semigroups/docs/Data-Semigroup.html#v:diff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Semigroup",
          "name": "getAll",
          "package": "semigroups",
          "signature": "Bool",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Semigroup",
          "module": "Data.Semigroup",
          "name": "getAll",
          "package": "semigroups",
          "partial": "All",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/semigroups/docs/Data-Semigroup.html#v:getAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Semigroup",
          "name": "getAny",
          "package": "semigroups",
          "signature": "Bool",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Semigroup",
          "module": "Data.Semigroup",
          "name": "getAny",
          "package": "semigroups",
          "partial": "Any",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/semigroups/docs/Data-Semigroup.html#v:getAny"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Semigroup",
          "name": "getDual",
          "package": "semigroups",
          "signature": "a",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Semigroup",
          "module": "Data.Semigroup",
          "name": "getDual",
          "package": "semigroups",
          "partial": "Dual",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/semigroups/docs/Data-Semigroup.html#v:getDual"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Semigroup",
          "name": "getFirst",
          "package": "semigroups",
          "signature": "a",
          "source": "src/Data-Semigroup.html#First",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Semigroup",
          "module": "Data.Semigroup",
          "name": "getFirst",
          "package": "semigroups",
          "partial": "First",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/semigroups/docs/Data-Semigroup.html#v:getFirst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Semigroup",
          "name": "getLast",
          "package": "semigroups",
          "signature": "a",
          "source": "src/Data-Semigroup.html#Last",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Semigroup",
          "module": "Data.Semigroup",
          "name": "getLast",
          "package": "semigroups",
          "partial": "Last",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/semigroups/docs/Data-Semigroup.html#v:getLast"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Semigroup",
          "name": "getMax",
          "package": "semigroups",
          "signature": "a",
          "source": "src/Data-Semigroup.html#Max",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Semigroup",
          "module": "Data.Semigroup",
          "name": "getMax",
          "package": "semigroups",
          "partial": "Max",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/semigroups/docs/Data-Semigroup.html#v:getMax"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Semigroup",
          "name": "getMin",
          "package": "semigroups",
          "signature": "a",
          "source": "src/Data-Semigroup.html#Min",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Semigroup",
          "module": "Data.Semigroup",
          "name": "getMin",
          "package": "semigroups",
          "partial": "Min",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/semigroups/docs/Data-Semigroup.html#v:getMin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Semigroup",
          "name": "getOption",
          "package": "semigroups",
          "signature": "Maybe a",
          "source": "src/Data-Semigroup.html#Option",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Semigroup",
          "module": "Data.Semigroup",
          "name": "getOption",
          "package": "semigroups",
          "partial": "Option",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/semigroups/docs/Data-Semigroup.html#v:getOption"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Semigroup",
          "name": "getProduct",
          "package": "semigroups",
          "signature": "a",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Semigroup",
          "module": "Data.Semigroup",
          "name": "getProduct",
          "package": "semigroups",
          "partial": "Product",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/semigroups/docs/Data-Semigroup.html#v:getProduct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Semigroup",
          "name": "getSum",
          "package": "semigroups",
          "signature": "a",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Semigroup",
          "module": "Data.Semigroup",
          "name": "getSum",
          "package": "semigroups",
          "partial": "Sum",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/semigroups/docs/Data-Semigroup.html#v:getSum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn associative operation\n\u003c/p\u003e",
          "module": "Data.Semigroup",
          "name": "mappend",
          "package": "semigroups",
          "signature": "a -\u003e a -\u003e a",
          "type": "method"
        },
        "index": {
          "description": "An associative operation",
          "hierarchy": "Data Semigroup",
          "module": "Data.Semigroup",
          "name": "mappend",
          "normalized": "a-\u003ea-\u003ea",
          "package": "semigroups",
          "signature": "a-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/semigroups/docs/Data-Semigroup.html#v:mappend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFold a list using the monoid.\n For most types, the default definition for \u003ccode\u003e\u003ca\u003emconcat\u003c/a\u003e\u003c/code\u003e will be\n used, but the function is included in the class definition so\n that an optimized version can be provided for specific types.\n\u003c/p\u003e",
          "module": "Data.Semigroup",
          "name": "mconcat",
          "package": "semigroups",
          "signature": "[a] -\u003e a",
          "type": "method"
        },
        "index": {
          "description": "Fold list using the monoid For most types the default definition for mconcat will be used but the function is included in the class definition so that an optimized version can be provided for specific types",
          "hierarchy": "Data Semigroup",
          "module": "Data.Semigroup",
          "name": "mconcat",
          "normalized": "[a]-\u003ea",
          "package": "semigroups",
          "signature": "[a]-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/semigroups/docs/Data-Semigroup.html#v:mconcat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIdentity of \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Semigroup",
          "name": "mempty",
          "package": "semigroups",
          "signature": "a",
          "type": "method"
        },
        "index": {
          "description": "Identity of mappend",
          "hierarchy": "Data Semigroup",
          "module": "Data.Semigroup",
          "name": "mempty",
          "package": "semigroups",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/semigroups/docs/Data-Semigroup.html#v:mempty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFold an \u003ccode\u003e\u003ca\u003eOption\u003c/a\u003e\u003c/code\u003e case-wise, just like \u003ccode\u003e\u003ca\u003emaybe\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Semigroup",
          "name": "option",
          "package": "semigroups",
          "signature": "b -\u003e (a -\u003e b) -\u003e Option a -\u003e b",
          "source": "src/Data-Semigroup.html#option",
          "type": "function"
        },
        "index": {
          "description": "Fold an Option case-wise just like maybe",
          "hierarchy": "Data Semigroup",
          "module": "Data.Semigroup",
          "name": "option",
          "normalized": "a-\u003e(b-\u003ea)-\u003eOption b-\u003ea",
          "package": "semigroups",
          "signature": "b-\u003e(a-\u003eb)-\u003eOption a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/semigroups/docs/Data-Semigroup.html#v:option"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReduce a non-empty list with \u003ccode\u003e\u003c\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eThe default definition should be sufficient, but this can be overridden for efficiency.\n\u003c/p\u003e",
          "module": "Data.Semigroup",
          "name": "sconcat",
          "package": "semigroups",
          "signature": "NonEmpty a -\u003e a",
          "source": "src/Data-Semigroup.html#sconcat",
          "type": "method"
        },
        "index": {
          "description": "Reduce non-empty list with The default definition should be sufficient but this can be overridden for efficiency",
          "hierarchy": "Data Semigroup",
          "module": "Data.Semigroup",
          "name": "sconcat",
          "normalized": "NonEmpty a-\u003ea",
          "package": "semigroups",
          "signature": "NonEmpty a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/semigroups/docs/Data-Semigroup.html#v:sconcat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepeat a value (n + 1) times.\n\u003c/p\u003e\u003cpre\u003e times1p n a = a \u003c\u003e a \u003c\u003e ... \u003c\u003e a  -- using \u003c\u003e n times\n\u003c/pre\u003e\u003cp\u003eThe default definition uses peasant multiplication, exploiting associativity to only\n require \u003cem\u003eO(log n)\u003c/em\u003e uses of \u003ccode\u003e\u003c\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSee also \u003ccode\u003etimes\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Semigroup",
          "name": "times1p",
          "package": "semigroups",
          "signature": "n -\u003e a -\u003e a",
          "source": "src/Data-Semigroup.html#times1p",
          "type": "method"
        },
        "index": {
          "description": "Repeat value times times1p using times The default definition uses peasant multiplication exploiting associativity to only require log uses of See also times",
          "hierarchy": "Data Semigroup",
          "module": "Data.Semigroup",
          "name": "times1p",
          "normalized": "a-\u003eb-\u003eb",
          "package": "semigroups",
          "signature": "n-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/semigroups/docs/Data-Semigroup.html#v:times1p"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepeat a value \u003ccode\u003en\u003c/code\u003e times.\n\u003c/p\u003e\u003cpre\u003e times n a = a \u003c\u003e a \u003c\u003e ... \u003c\u003e a  -- using \u003c\u003e (n-1) times\n\u003c/pre\u003e\u003cp\u003eImplemented using \u003ccode\u003e\u003ca\u003etimes1p\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Semigroup",
          "name": "timesN",
          "package": "semigroups",
          "signature": "n -\u003e a -\u003e a",
          "source": "src/Data-Semigroup.html#timesN",
          "type": "function"
        },
        "index": {
          "description": "Repeat value times times using n-1 times Implemented using times1p",
          "hierarchy": "Data Semigroup",
          "module": "Data.Semigroup",
          "name": "timesN",
          "normalized": "a-\u003eb-\u003eb",
          "package": "semigroups",
          "signature": "n-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/semigroups/docs/Data-Semigroup.html#v:timesN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Semigroup",
          "name": "unwrapMonoid",
          "package": "semigroups",
          "signature": "m",
          "source": "src/Data-Semigroup.html#WrappedMonoid",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Semigroup",
          "module": "Data.Semigroup",
          "name": "unwrapMonoid",
          "package": "semigroups",
          "partial": "Monoid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/semigroups/docs/Data-Semigroup.html#v:unwrapMonoid"
      }
    }
  ]
]