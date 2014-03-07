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
        "word": "range"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eNested Ranges are common in practical usage. They appear in such forms as library\n version numbers (\u003ca\u003eVersion 1.4.5.6\u003c/a\u003e for example). And it is very useful to be able to\n compare these ranges to one another. This module exists for the purpose of allowing\n these comparisons between nested ranges. The module builds upon the basic range concept\n from other parts of this library.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Range.NestedRange",
          "name": "NestedRange",
          "package": "range",
          "source": "src/Data-Range-NestedRange.html",
          "type": "module"
        },
        "index": {
          "description": "Nested Ranges are common in practical usage They appear in such forms as library version numbers Version for example And it is very useful to be able to compare these ranges to one another This module exists for the purpose of allowing these comparisons between nested ranges The module builds upon the basic range concept from other parts of this library",
          "hierarchy": "Data Range NestedRange",
          "module": "Data.Range.NestedRange",
          "name": "NestedRange",
          "package": "range",
          "partial": "Nested Range",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/range/docs/Data-Range-NestedRange.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Nested Range is a structure that in a nested form of many ranges where there can\n be multiple ranges at every level.\n\u003c/p\u003e",
          "module": "Data.Range.NestedRange",
          "name": "NestedRange",
          "package": "range",
          "source": "src/Data-Range-NestedRange.html#NestedRange",
          "type": "data"
        },
        "index": {
          "description": "The Nested Range is structure that in nested form of many ranges where there can be multiple ranges at every level",
          "hierarchy": "Data Range NestedRange",
          "module": "Data.Range.NestedRange",
          "name": "NestedRange",
          "package": "range",
          "partial": "Nested Range",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/range/docs/Data-Range-NestedRange.html#t:NestedRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Range.NestedRange",
          "name": "NestedRange",
          "package": "range",
          "signature": "NestedRange [[Range a]]",
          "source": "src/Data-Range-NestedRange.html#NestedRange",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Range NestedRange",
          "module": "Data.Range.NestedRange",
          "name": "NestedRange",
          "normalized": "NestedRange[[Range a]]",
          "package": "range",
          "partial": "Nested Range",
          "signature": "NestedRange[[Range a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/range/docs/Data-Range-NestedRange.html#v:NestedRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a list of nested values and a nested range tell us wether the nested value\n exists inside the nested range.\n\u003c/p\u003e",
          "module": "Data.Range.NestedRange",
          "name": "inNestedRange",
          "package": "range",
          "signature": "[a] -\u003e NestedRange a -\u003e Bool",
          "source": "src/Data-Range-NestedRange.html#inNestedRange",
          "type": "function"
        },
        "index": {
          "description": "Given list of nested values and nested range tell us wether the nested value exists inside the nested range",
          "hierarchy": "Data Range NestedRange",
          "module": "Data.Range.NestedRange",
          "name": "inNestedRange",
          "normalized": "[a]-\u003eNestedRange a-\u003eBool",
          "package": "range",
          "partial": "Nested Range",
          "signature": "[a]-\u003eNestedRange a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/range/docs/Data-Range-NestedRange.html#v:inNestedRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eIt should not be unexpected that you will be given a string representation of some\n ranges and you will need to parse them so that you can then do some further processing.\n This parser exists in order to make the most common forms of range strings easy to\n parse. It does not cover all cases however but you should not be too worried about\n that because you should be able to write your own parser using parsec or Alex/Happy and\n then you can convert everything that you parse into a RangeTree object for easier\n processing.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Range.Parser",
          "name": "Parser",
          "package": "range",
          "source": "src/Data-Range-Parser.html",
          "type": "module"
        },
        "index": {
          "description": "It should not be unexpected that you will be given string representation of some ranges and you will need to parse them so that you can then do some further processing This parser exists in order to make the most common forms of range strings easy to parse It does not cover all cases however but you should not be too worried about that because you should be able to write your own parser using parsec or Alex Happy and then you can convert everything that you parse into RangeTree object for easier processing",
          "hierarchy": "Data Range Parser",
          "module": "Data.Range.Parser",
          "name": "Parser",
          "package": "range",
          "partial": "Parser",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/range/docs/Data-Range-Parser.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe arguments that are used, and can be modified, while parsing a standard range\n string.\n\u003c/p\u003e",
          "module": "Data.Range.Parser",
          "name": "RangeParserArgs",
          "package": "range",
          "source": "src/Data-Range-Parser.html#RangeParserArgs",
          "type": "data"
        },
        "index": {
          "description": "The arguments that are used and can be modified while parsing standard range string",
          "hierarchy": "Data Range Parser",
          "module": "Data.Range.Parser",
          "name": "RangeParserArgs",
          "package": "range",
          "partial": "Range Parser Args",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/range/docs/Data-Range-Parser.html#t:RangeParserArgs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Range.Parser",
          "name": "Args",
          "package": "range",
          "signature": "Args",
          "source": "src/Data-Range-Parser.html#RangeParserArgs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Range Parser",
          "module": "Data.Range.Parser",
          "name": "Args",
          "package": "range",
          "partial": "Args",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/range/docs/Data-Range-Parser.html#v:Args"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThese are the default arguments that are used by the parser. Please feel free to use\n the default arguments for you own parser and modify it from the defaults at will.\n\u003c/p\u003e",
          "module": "Data.Range.Parser",
          "name": "defaultArgs",
          "package": "range",
          "signature": "RangeParserArgs",
          "source": "src/Data-Range-Parser.html#defaultArgs",
          "type": "function"
        },
        "index": {
          "description": "These are the default arguments that are used by the parser Please feel free to use the default arguments for you own parser and modify it from the defaults at will",
          "hierarchy": "Data Range Parser",
          "module": "Data.Range.Parser",
          "name": "defaultArgs",
          "package": "range",
          "partial": "Args",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/range/docs/Data-Range-Parser.html#v:defaultArgs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a string this function will either return a parse error back to the user or the\n list of ranges that are represented by the parsed string.\n\u003c/p\u003e",
          "module": "Data.Range.Parser",
          "name": "parseRanges",
          "package": "range",
          "signature": "String -\u003e Either ParseError [Range a]",
          "source": "src/Data-Range-Parser.html#parseRanges",
          "type": "function"
        },
        "index": {
          "description": "Given string this function will either return parse error back to the user or the list of ranges that are represented by the parsed string",
          "hierarchy": "Data Range Parser",
          "module": "Data.Range.Parser",
          "name": "parseRanges",
          "normalized": "String-\u003eEither ParseError[Range a]",
          "package": "range",
          "partial": "Ranges",
          "signature": "String-\u003eEither ParseError[Range a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/range/docs/Data-Range-Parser.html#v:parseRanges"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA separator that separates the two halves of a range.\n\u003c/p\u003e",
          "module": "Data.Range.Parser",
          "name": "rangeSeparator",
          "package": "range",
          "signature": "String",
          "source": "src/Data-Range-Parser.html#RangeParserArgs",
          "type": "function"
        },
        "index": {
          "description": "separator that separates the two halves of range",
          "hierarchy": "Data Range Parser",
          "module": "Data.Range.Parser",
          "name": "rangeSeparator",
          "package": "range",
          "partial": "Separator",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/range/docs/Data-Range-Parser.html#v:rangeSeparator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven the parser arguments this returns a parser that is capable of parsing a list of\n ranges.\n\u003c/p\u003e",
          "module": "Data.Range.Parser",
          "name": "ranges",
          "package": "range",
          "signature": "RangeParserArgs -\u003e Parser [Range a]",
          "source": "src/Data-Range-Parser.html#ranges",
          "type": "function"
        },
        "index": {
          "description": "Given the parser arguments this returns parser that is capable of parsing list of ranges",
          "hierarchy": "Data Range Parser",
          "module": "Data.Range.Parser",
          "name": "ranges",
          "normalized": "RangeParserArgs-\u003eParser[Range a]",
          "package": "range",
          "signature": "RangeParserArgs-\u003eParser[Range a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/range/docs/Data-Range-Parser.html#v:ranges"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA separator that represents a union.\n\u003c/p\u003e",
          "module": "Data.Range.Parser",
          "name": "unionSeparator",
          "package": "range",
          "signature": "String",
          "source": "src/Data-Range-Parser.html#RangeParserArgs",
          "type": "function"
        },
        "index": {
          "description": "separator that represents union",
          "hierarchy": "Data Range Parser",
          "module": "Data.Range.Parser",
          "name": "unionSeparator",
          "package": "range",
          "partial": "Separator",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/range/docs/Data-Range-Parser.html#v:unionSeparator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA separator that implies an unbounded range.\n\u003c/p\u003e",
          "module": "Data.Range.Parser",
          "name": "wildcardSymbol",
          "package": "range",
          "signature": "String",
          "source": "src/Data-Range-Parser.html#RangeParserArgs",
          "type": "function"
        },
        "index": {
          "description": "separator that implies an unbounded range",
          "hierarchy": "Data Range Parser",
          "module": "Data.Range.Parser",
          "name": "wildcardSymbol",
          "package": "range",
          "partial": "Symbol",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/range/docs/Data-Range-Parser.html#v:wildcardSymbol"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis entire library is concerned with ranges and this module implements the absolute\n basic range functions.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Range.Range",
          "name": "Range",
          "package": "range",
          "source": "src/Data-Range-Range.html",
          "type": "module"
        },
        "index": {
          "description": "This entire library is concerned with ranges and this module implements the absolute basic range functions",
          "hierarchy": "Data Range Range",
          "module": "Data.Range.Range",
          "name": "Range",
          "package": "range",
          "partial": "Range",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/range/docs/Data-Range-Range.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Range Data structure; it is capable of representing any type of range. This is\n the primary data structure in this library. Everything should be possible to convert\n back into this datatype. All ranges in this structure are inclusively bound.\n\u003c/p\u003e",
          "module": "Data.Range.Range",
          "name": "Range",
          "package": "range",
          "source": "src/Data-Range-Data.html#Range",
          "type": "data"
        },
        "index": {
          "description": "The Range Data structure it is capable of representing any type of range This is the primary data structure in this library Everything should be possible to convert back into this datatype All ranges in this structure are inclusively bound",
          "hierarchy": "Data Range Range",
          "module": "Data.Range.Range",
          "name": "Range",
          "package": "range",
          "partial": "Range",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/range/docs/Data-Range-Range.html#t:Range"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents an infinite range over all values.\n\u003c/p\u003e",
          "module": "Data.Range.Range",
          "name": "InfiniteRange",
          "package": "range",
          "signature": "InfiniteRange",
          "source": "src/Data-Range-Data.html#Range",
          "type": "function"
        },
        "index": {
          "description": "Represents an infinite range over all values",
          "hierarchy": "Data Range Range",
          "module": "Data.Range.Range",
          "name": "InfiniteRange",
          "package": "range",
          "partial": "Infinite Range",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/range/docs/Data-Range-Range.html#v:InfiniteRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents a range with only an inclusive lower bound.\n\u003c/p\u003e",
          "module": "Data.Range.Range",
          "name": "LowerBoundRange",
          "package": "range",
          "signature": "LowerBoundRange a",
          "source": "src/Data-Range-Data.html#Range",
          "type": "function"
        },
        "index": {
          "description": "Represents range with only an inclusive lower bound",
          "hierarchy": "Data Range Range",
          "module": "Data.Range.Range",
          "name": "LowerBoundRange",
          "package": "range",
          "partial": "Lower Bound Range",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/range/docs/Data-Range-Range.html#v:LowerBoundRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents a single element as a range.\n\u003c/p\u003e",
          "module": "Data.Range.Range",
          "name": "SingletonRange",
          "package": "range",
          "signature": "SingletonRange a",
          "source": "src/Data-Range-Data.html#Range",
          "type": "function"
        },
        "index": {
          "description": "Represents single element as range",
          "hierarchy": "Data Range Range",
          "module": "Data.Range.Range",
          "name": "SingletonRange",
          "package": "range",
          "partial": "Singleton Range",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/range/docs/Data-Range-Range.html#v:SingletonRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents a bounded and inclusive range of elements.\n\u003c/p\u003e",
          "module": "Data.Range.Range",
          "name": "SpanRange",
          "package": "range",
          "signature": "SpanRange a a",
          "source": "src/Data-Range-Data.html#Range",
          "type": "function"
        },
        "index": {
          "description": "Represents bounded and inclusive range of elements",
          "hierarchy": "Data Range Range",
          "module": "Data.Range.Range",
          "name": "SpanRange",
          "package": "range",
          "partial": "Span Range",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/range/docs/Data-Range-Range.html#v:SpanRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents a range with only an inclusive upper bound.\n\u003c/p\u003e",
          "module": "Data.Range.Range",
          "name": "UpperBoundRange",
          "package": "range",
          "signature": "UpperBoundRange a",
          "source": "src/Data-Range-Data.html#Range",
          "type": "function"
        },
        "index": {
          "description": "Represents range with only an inclusive upper bound",
          "hierarchy": "Data Range Range",
          "module": "Data.Range.Range",
          "name": "UpperBoundRange",
          "package": "range",
          "partial": "Upper Bound Range",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/range/docs/Data-Range-Range.html#v:UpperBoundRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA set of ranges represents a collection of real values without actually instantiating\n those values. This allows you to have infinite ranges. However, sometimes you wish to\n actually get the values that your range represents, or even get a sample set of the\n values. This function generates as many of the values that belong to your range as you\n like.\n\u003c/p\u003e",
          "module": "Data.Range.Range",
          "name": "fromRanges",
          "package": "range",
          "signature": "[Range a] -\u003e [a]",
          "source": "src/Data-Range-Range.html#fromRanges",
          "type": "function"
        },
        "index": {
          "description": "set of ranges represents collection of real values without actually instantiating those values This allows you to have infinite ranges However sometimes you wish to actually get the values that your range represents or even get sample set of the values This function generates as many of the values that belong to your range as you like",
          "hierarchy": "Data Range Range",
          "module": "Data.Range.Range",
          "name": "fromRanges",
          "normalized": "[Range a]-\u003e[a]",
          "package": "range",
          "partial": "Ranges",
          "signature": "[Range a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/range/docs/Data-Range-Range.html#v:fromRanges"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a range and a value it will tell you wether or not the value is in the range.\n Remember that all ranges are inclusive.\n\u003c/p\u003e",
          "module": "Data.Range.Range",
          "name": "inRange",
          "package": "range",
          "signature": "Range a -\u003e a -\u003e Bool",
          "source": "src/Data-Range-Range.html#inRange",
          "type": "function"
        },
        "index": {
          "description": "Given range and value it will tell you wether or not the value is in the range Remember that all ranges are inclusive",
          "hierarchy": "Data Range Range",
          "module": "Data.Range.Range",
          "name": "inRange",
          "normalized": "Range a-\u003ea-\u003eBool",
          "package": "range",
          "partial": "Range",
          "signature": "Range a-\u003ea-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/range/docs/Data-Range-Range.html#v:inRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a list of ranges this function tells you if a value is in any of those ranges.\n This is especially useful for more complex ranges.\n\u003c/p\u003e",
          "module": "Data.Range.Range",
          "name": "inRanges",
          "package": "range",
          "signature": "[Range a] -\u003e a -\u003e Bool",
          "source": "src/Data-Range-Range.html#inRanges",
          "type": "function"
        },
        "index": {
          "description": "Given list of ranges this function tells you if value is in any of those ranges This is especially useful for more complex ranges",
          "hierarchy": "Data Range Range",
          "module": "Data.Range.Range",
          "name": "inRanges",
          "normalized": "[Range a]-\u003ea-\u003eBool",
          "package": "range",
          "partial": "Ranges",
          "signature": "[Range a]-\u003ea-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/range/docs/Data-Range-Range.html#v:inRanges"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerforms a set intersection between the two input ranges and returns the resultant set of\n ranges.\n\u003c/p\u003e",
          "module": "Data.Range.Range",
          "name": "intersection",
          "package": "range",
          "signature": "[Range a] -\u003e [Range a] -\u003e [Range a]",
          "source": "src/Data-Range-Range.html#intersection",
          "type": "function"
        },
        "index": {
          "description": "Performs set intersection between the two input ranges and returns the resultant set of ranges",
          "hierarchy": "Data Range Range",
          "module": "Data.Range.Range",
          "name": "intersection",
          "normalized": "[Range a]-\u003e[Range a]-\u003e[Range a]",
          "package": "range",
          "signature": "[Range a]-\u003e[Range a]-\u003e[Range a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/range/docs/Data-Range-Range.html#v:intersection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn inversion function, given a set of ranges it returns the inverse set of ranges.\n\u003c/p\u003e",
          "module": "Data.Range.Range",
          "name": "invert",
          "package": "range",
          "signature": "[Range a] -\u003e [Range a]",
          "source": "src/Data-Range-Range.html#invert",
          "type": "function"
        },
        "index": {
          "description": "An inversion function given set of ranges it returns the inverse set of ranges",
          "hierarchy": "Data Range Range",
          "module": "Data.Range.Range",
          "name": "invert",
          "normalized": "[Range a]-\u003e[Range a]",
          "package": "range",
          "signature": "[Range a]-\u003e[Range a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/range/docs/Data-Range-Range.html#v:invert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhen you create a range there may be overlaps in your ranges. However, for the sake\n of efficiency you probably want the list of ranges with no overlaps. The mergeRanges\n function takes a set of ranges and returns the same set specified by the minimum number\n of Range objects. A useful function for cleaning up your ranges. Please note that, if\n you use any of the other operations on sets of ranges like invert, union and\n intersection then this is automatically done for you. Which means that a function like\n this is redundant: mergeRanges . intersection\n\u003c/p\u003e",
          "module": "Data.Range.Range",
          "name": "mergeRanges",
          "package": "range",
          "signature": "[Range a] -\u003e [Range a]",
          "source": "src/Data-Range-Range.html#mergeRanges",
          "type": "function"
        },
        "index": {
          "description": "When you create range there may be overlaps in your ranges However for the sake of efficiency you probably want the list of ranges with no overlaps The mergeRanges function takes set of ranges and returns the same set specified by the minimum number of Range objects useful function for cleaning up your ranges Please note that if you use any of the other operations on sets of ranges like invert union and intersection then this is automatically done for you Which means that function like this is redundant mergeRanges intersection",
          "hierarchy": "Data Range Range",
          "module": "Data.Range.Range",
          "name": "mergeRanges",
          "normalized": "[Range a]-\u003e[Range a]",
          "package": "range",
          "partial": "Ranges",
          "signature": "[Range a]-\u003e[Range a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/range/docs/Data-Range-Range.html#v:mergeRanges"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA check to see if two ranges overlap. If they do then true is returned; false\n otherwise.\n\u003c/p\u003e",
          "module": "Data.Range.Range",
          "name": "rangesOverlap",
          "package": "range",
          "signature": "Range a -\u003e Range a -\u003e Bool",
          "source": "src/Data-Range-Range.html#rangesOverlap",
          "type": "function"
        },
        "index": {
          "description": "check to see if two ranges overlap If they do then true is returned false otherwise",
          "hierarchy": "Data Range Range",
          "module": "Data.Range.Range",
          "name": "rangesOverlap",
          "normalized": "Range a-\u003eRange a-\u003eBool",
          "package": "range",
          "partial": "Overlap",
          "signature": "Range a-\u003eRange a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/range/docs/Data-Range-Range.html#v:rangesOverlap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerforms a set union between the two input ranges and returns the resultant set of\n ranges.\n\u003c/p\u003e",
          "module": "Data.Range.Range",
          "name": "union",
          "package": "range",
          "signature": "[Range a] -\u003e [Range a] -\u003e [Range a]",
          "source": "src/Data-Range-Range.html#union",
          "type": "function"
        },
        "index": {
          "description": "Performs set union between the two input ranges and returns the resultant set of ranges",
          "hierarchy": "Data Range Range",
          "module": "Data.Range.Range",
          "name": "union",
          "normalized": "[Range a]-\u003e[Range a]-\u003e[Range a]",
          "package": "range",
          "signature": "[Range a]-\u003e[Range a]-\u003e[Range a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/range/docs/Data-Range-Range.html#v:union"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eInternally the range library converts your ranges into an internal representation of\n multiple ranges that I call a RangeMerge. When you do multiple unions and intersections\n in a row converting to and from that data structure becomes extra work that is not\n required. To amortize those costs away the RangeTree structure exists. You can specify\n a tree of operations in advance and then evaluate them all at once. This is not only\n useful for efficiency but for parsing too. Use RangeTree's whenever you wish to perform\n multiple operations in a row and wish for it to be as efficient as possible.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Range.RangeTree",
          "name": "RangeTree",
          "package": "range",
          "source": "src/Data-Range-RangeTree.html",
          "type": "module"
        },
        "index": {
          "description": "Internally the range library converts your ranges into an internal representation of multiple ranges that call RangeMerge When you do multiple unions and intersections in row converting to and from that data structure becomes extra work that is not required To amortize those costs away the RangeTree structure exists You can specify tree of operations in advance and then evaluate them all at once This is not only useful for efficiency but for parsing too Use RangeTree whenever you wish to perform multiple operations in row and wish for it to be as efficient as possible",
          "hierarchy": "Data Range RangeTree",
          "module": "Data.Range.RangeTree",
          "name": "RangeTree",
          "package": "range",
          "partial": "Range Tree",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/range/docs/Data-Range-RangeTree.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThese are the operations that can join two disjunct lists of ranges together.\n\u003c/p\u003e",
          "module": "Data.Range.RangeTree",
          "name": "RangeOperation",
          "package": "range",
          "source": "src/Data-Range-Data.html#RangeOperation",
          "type": "data"
        },
        "index": {
          "description": "These are the operations that can join two disjunct lists of ranges together",
          "hierarchy": "Data Range RangeTree",
          "module": "Data.Range.RangeTree",
          "name": "RangeOperation",
          "package": "range",
          "partial": "Range Operation",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/range/docs/Data-Range-RangeTree.html#t:RangeOperation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA Range Tree is a construct that can be built and then efficiently evaluated so that\n you can compress an entire tree of operations on ranges into a single range quickly.\n The only purpose of this tree is to allow efficient construction of range operations\n that can be evaluated as is required.\n\u003c/p\u003e",
          "module": "Data.Range.RangeTree",
          "name": "RangeTree",
          "package": "range",
          "source": "src/Data-Range-Data.html#RangeTree",
          "type": "data"
        },
        "index": {
          "description": "Range Tree is construct that can be built and then efficiently evaluated so that you can compress an entire tree of operations on ranges into single range quickly The only purpose of this tree is to allow efficient construction of range operations that can be evaluated as is required",
          "hierarchy": "Data Range RangeTree",
          "module": "Data.Range.RangeTree",
          "name": "RangeTree",
          "package": "range",
          "partial": "Range Tree",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/range/docs/Data-Range-RangeTree.html#t:RangeTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents the set intersection operation.\n\u003c/p\u003e",
          "module": "Data.Range.RangeTree",
          "name": "RangeIntersection",
          "package": "range",
          "signature": "RangeIntersection",
          "source": "src/Data-Range-Data.html#RangeOperation",
          "type": "function"
        },
        "index": {
          "description": "Represents the set intersection operation",
          "hierarchy": "Data Range RangeTree",
          "module": "Data.Range.RangeTree",
          "name": "RangeIntersection",
          "package": "range",
          "partial": "Range Intersection",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/range/docs/Data-Range-RangeTree.html#v:RangeIntersection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA leaf with a set of ranges that are collected together.\n\u003c/p\u003e",
          "module": "Data.Range.RangeTree",
          "name": "RangeLeaf",
          "package": "range",
          "signature": "RangeLeaf [Range a]",
          "source": "src/Data-Range-Data.html#RangeTree",
          "type": "function"
        },
        "index": {
          "description": "leaf with set of ranges that are collected together",
          "hierarchy": "Data Range RangeTree",
          "module": "Data.Range.RangeTree",
          "name": "RangeLeaf",
          "normalized": "RangeLeaf[Range a]",
          "package": "range",
          "partial": "Range Leaf",
          "signature": "RangeLeaf[Range a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/range/docs/Data-Range-RangeTree.html#v:RangeLeaf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombine two range trees together with a single operation\n\u003c/p\u003e",
          "module": "Data.Range.RangeTree",
          "name": "RangeNode",
          "package": "range",
          "signature": "RangeNode RangeOperation (RangeTree a) (RangeTree a)",
          "source": "src/Data-Range-Data.html#RangeTree",
          "type": "function"
        },
        "index": {
          "description": "Combine two range trees together with single operation",
          "hierarchy": "Data Range RangeTree",
          "module": "Data.Range.RangeTree",
          "name": "RangeNode",
          "package": "range",
          "partial": "Range Node",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/range/docs/Data-Range-RangeTree.html#v:RangeNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInvert a range tree, this is a \u003ccode\u003e\u003ca\u003enot\u003c/a\u003e\u003c/code\u003e operation.\n\u003c/p\u003e",
          "module": "Data.Range.RangeTree",
          "name": "RangeNodeInvert",
          "package": "range",
          "signature": "RangeNodeInvert (RangeTree a)",
          "source": "src/Data-Range-Data.html#RangeTree",
          "type": "function"
        },
        "index": {
          "description": "Invert range tree this is not operation",
          "hierarchy": "Data Range RangeTree",
          "module": "Data.Range.RangeTree",
          "name": "RangeNodeInvert",
          "package": "range",
          "partial": "Range Node Invert",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/range/docs/Data-Range-RangeTree.html#v:RangeNodeInvert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents the set union operation.\n\u003c/p\u003e",
          "module": "Data.Range.RangeTree",
          "name": "RangeUnion",
          "package": "range",
          "signature": "RangeUnion",
          "source": "src/Data-Range-Data.html#RangeOperation",
          "type": "function"
        },
        "index": {
          "description": "Represents the set union operation",
          "hierarchy": "Data Range RangeTree",
          "module": "Data.Range.RangeTree",
          "name": "RangeUnion",
          "package": "range",
          "partial": "Range Union",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/range/docs/Data-Range-RangeTree.html#v:RangeUnion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluates a Range Tree into the final set of ranges that it compresses down to. Use\n this whenever you want to finally evaluate your constructed Range Tree.\n\u003c/p\u003e",
          "module": "Data.Range.RangeTree",
          "name": "evaluate",
          "package": "range",
          "signature": "RangeTree a -\u003e [Range a]",
          "source": "src/Data-Range-RangeTree.html#evaluate",
          "type": "function"
        },
        "index": {
          "description": "Evaluates Range Tree into the final set of ranges that it compresses down to Use this whenever you want to finally evaluate your constructed Range Tree",
          "hierarchy": "Data Range RangeTree",
          "module": "Data.Range.RangeTree",
          "name": "evaluate",
          "normalized": "RangeTree a-\u003e[Range a]",
          "package": "range",
          "signature": "RangeTree a-\u003e[Range a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/range/docs/Data-Range-RangeTree.html#v:evaluate"
      }
    }
  ]
]