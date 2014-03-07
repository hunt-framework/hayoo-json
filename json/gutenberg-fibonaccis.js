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
        "word": "gutenberg-fibonaccis"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eProvides the first 1001 Fibonacci numbers, retrieved from the Gutenberg Project,\nalong with functions to retrieve and query these numbers.\n\u003c/p\u003e\u003cp\u003eExamples:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003efibsLen\n\u003c/code\u003e\u003c/strong\u003e1001\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003efibsUpTo 35\n\u003c/code\u003e\u003c/strong\u003e[1, 1, 2, 3, 5, 8, 13, 21, 34]\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eisFib 21\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eisFib 23\n\u003c/code\u003e\u003c/strong\u003eFalse\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003efirstFib\n\u003c/code\u003e\u003c/strong\u003e1\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003enthFib 6\n\u003c/code\u003e\u003c/strong\u003e8\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003enthFib lastFib\n\u003c/code\u003e\u003c/strong\u003e70330367711422815821835254877183549770181269836358732742604905087154537118196933579742249494562611733487750449241765991088186363265450223647106012053374121273867339111198139373125598767690091902245245323403501\n\u003c/pre\u003e\u003cp\u003eChanges in 1.1.0:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Added function \u003ccode\u003e\u003ca\u003efirstFib\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e Fixed documentation formatting\n\u003c/li\u003e\u003cli\u003e Created Git repository at \u003ca\u003ehttps://github.com/justinhanekom/gutenberg-fibonaccis\u003c/a\u003e \n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eChanges in 1.0.5:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Updated and expanded documentation using Haddock markup\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "Algorithm.Gutenberg.Fibonaccis",
          "name": "Fibonaccis",
          "package": "gutenberg-fibonaccis",
          "source": "src/Algorithm-Gutenberg-Fibonaccis.html",
          "type": "module"
        },
        "index": {
          "description": "Provides the first Fibonacci numbers retrieved from the Gutenberg Project along with functions to retrieve and query these numbers Examples fibsLen fibsUpTo isFib True isFib False firstFib nthFib nthFib lastFib Changes in Added function firstFib Fixed documentation formatting Created Git repository at https github.com justinhanekom gutenberg-fibonaccis Changes in Updated and expanded documentation using Haddock markup",
          "hierarchy": "Algorithm Gutenberg Fibonaccis",
          "module": "Algorithm.Gutenberg.Fibonaccis",
          "name": "Fibonaccis",
          "package": "gutenberg-fibonaccis",
          "partial": "Fibonaccis",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/gutenberg-fibonaccis/docs/Algorithm-Gutenberg-Fibonaccis.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003efibsLen\u003c/a\u003e\u003c/code\u003e function returns the number of Fibonacci numbers in the\n\u003ccode\u003e\u003ca\u003efirst1001Fibs\u003c/a\u003e\u003c/code\u003e list.\n\u003c/p\u003e\u003cp\u003eAs this list is based on the list of the first 1001 Fibonacci numbers as\nretrieved from the Gutenberg Project at\n\u003ca\u003ehttp://www.ibiblio.org/pub/docs/books/gutenberg/etext01/fbncc10.txt\u003c/a\u003e\nit will be equal to \u003ccode\u003e1001\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIf a subsequent version of this module uses a new, expanded list from the\nGutenberg Project then this number will change accordingly. \n\u003c/p\u003e",
          "module": "Algorithm.Gutenberg.Fibonaccis",
          "name": "fibsLen",
          "package": "gutenberg-fibonaccis",
          "signature": "Int",
          "source": "src/Algorithm-Gutenberg-Fibonaccis.html#fibsLen",
          "type": "function"
        },
        "index": {
          "description": "The fibsLen function returns the number of Fibonacci numbers in the first1001Fibs list As this list is based on the list of the first Fibonacci numbers as retrieved from the Gutenberg Project at http www.ibiblio.org pub docs books gutenberg etext01 fbncc10.txt it will be equal to If subsequent version of this module uses new expanded list from the Gutenberg Project then this number will change accordingly",
          "hierarchy": "Algorithm Gutenberg Fibonaccis",
          "module": "Algorithm.Gutenberg.Fibonaccis",
          "name": "fibsLen",
          "package": "gutenberg-fibonaccis",
          "partial": "Len",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gutenberg-fibonaccis/docs/Algorithm-Gutenberg-Fibonaccis.html#v:fibsLen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003efibsUpTo\u003c/a\u003e\u003c/code\u003e function returns the list of Fibonacci numbers that are\nless than or equal to the given number.\n\u003c/p\u003e\u003cp\u003eAn error is thrown if the number given is less than the minimum Fibonacci\nnumber represented by this module (i.e. \u003ccode\u003e\u003ca\u003efirstFib\u003c/a\u003e\u003c/code\u003e) or greater than\nthe maximum Fibonacci number represented by this module (i.e. \u003ccode\u003e\u003ca\u003elastFib\u003c/a\u003e\u003c/code\u003e). \n\u003c/p\u003e",
          "module": "Algorithm.Gutenberg.Fibonaccis",
          "name": "fibsUpTo",
          "package": "gutenberg-fibonaccis",
          "signature": "Integer-\u003e [Integer]",
          "type": "function"
        },
        "index": {
          "description": "The fibsUpTo function returns the list of Fibonacci numbers that are less than or equal to the given number An error is thrown if the number given is less than the minimum Fibonacci number represented by this module i.e firstFib or greater than the maximum Fibonacci number represented by this module i.e lastFib",
          "hierarchy": "Algorithm Gutenberg Fibonaccis",
          "module": "Algorithm.Gutenberg.Fibonaccis",
          "name": "fibsUpTo",
          "normalized": "Integer-\u003e[Integer]",
          "package": "gutenberg-fibonaccis",
          "partial": "Up To",
          "signature": "Integer-\u003e[Integer]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gutenberg-fibonaccis/docs/Algorithm-Gutenberg-Fibonaccis.html#v:fibsUpTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003efirst1001Fibs\u003c/a\u003e\u003c/code\u003e is a list of the first 1001 Fibonacci numbers.\n\u003c/p\u003e\u003cp\u003eThis list was retrieved from the Gutenberg Project at\n\u003ca\u003ehttp://www.ibiblio.org/pub/docs/books/gutenberg/etext01/fbncc10.txt\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eThe first Fibonacci number in the list is \u003ccode\u003e1\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe last Fibonacci number in the list is \u003ccode\u003e70,330,367,711,422,815,821,835,254,877,183,549,770,181,269,836,358,732,742,604,905,087,154,537,118,196,933,579,742,249,494,562,611,733,487,750,449,241,765,991,088,186,363,265,450,223,647,106,012,053,374,121,273,867,339,111,198,139,373,125,598,767,690,091,902,245,245,323,403,501\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Algorithm.Gutenberg.Fibonaccis",
          "name": "first1001Fibs",
          "package": "gutenberg-fibonaccis",
          "signature": "[Integer]",
          "source": "src/Algorithm-Gutenberg-Fibonaccis.html#first1001Fibs",
          "type": "function"
        },
        "index": {
          "description": "first1001Fibs is list of the first Fibonacci numbers This list was retrieved from the Gutenberg Project at http www.ibiblio.org pub docs books gutenberg etext01 fbncc10.txt The first Fibonacci number in the list is The last Fibonacci number in the list is",
          "hierarchy": "Algorithm Gutenberg Fibonaccis",
          "module": "Algorithm.Gutenberg.Fibonaccis",
          "name": "first1001Fibs",
          "normalized": "[Integer]",
          "package": "gutenberg-fibonaccis",
          "partial": "Fibs",
          "signature": "[Integer]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gutenberg-fibonaccis/docs/Algorithm-Gutenberg-Fibonaccis.html#v:first1001Fibs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003efirstFib\u003c/a\u003e\u003c/code\u003e function returns the first Fibonacci number in the \u003ccode\u003e\u003ca\u003efirst1001Fibs\u003c/a\u003e\u003c/code\u003e list.\n\u003c/p\u003e\u003cp\u003eThe first Fibonacci number in this list is \u003ccode\u003e1\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Algorithm.Gutenberg.Fibonaccis",
          "name": "firstFib",
          "package": "gutenberg-fibonaccis",
          "signature": "Integer",
          "type": "function"
        },
        "index": {
          "description": "The firstFib function returns the first Fibonacci number in the first1001Fibs list The first Fibonacci number in this list is",
          "hierarchy": "Algorithm Gutenberg Fibonaccis",
          "module": "Algorithm.Gutenberg.Fibonaccis",
          "name": "firstFib",
          "package": "gutenberg-fibonaccis",
          "partial": "Fib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gutenberg-fibonaccis/docs/Algorithm-Gutenberg-Fibonaccis.html#v:firstFib"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eisFib\u003c/a\u003e\u003c/code\u003e function returns whether or not the given number is a\nFibonacci number.\n\u003c/p\u003e\u003cp\u003eAn error is thrown if the number given is less than the minumum Fibonacci\nnumber represented by this module (i.e. \u003ccode\u003e\u003ca\u003efirstFib\u003c/a\u003e\u003c/code\u003e) or greater than\nthe maximum Fibonacci number represented by this module (i.e. \u003ccode\u003e\u003ca\u003elastFib\u003c/a\u003e\u003c/code\u003e). \n\u003c/p\u003e",
          "module": "Algorithm.Gutenberg.Fibonaccis",
          "name": "isFib",
          "package": "gutenberg-fibonaccis",
          "signature": "Integer-\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "The isFib function returns whether or not the given number is Fibonacci number An error is thrown if the number given is less than the minumum Fibonacci number represented by this module i.e firstFib or greater than the maximum Fibonacci number represented by this module i.e lastFib",
          "hierarchy": "Algorithm Gutenberg Fibonaccis",
          "module": "Algorithm.Gutenberg.Fibonaccis",
          "name": "isFib",
          "normalized": "Integer-\u003eBool",
          "package": "gutenberg-fibonaccis",
          "partial": "Fib",
          "signature": "Integer-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gutenberg-fibonaccis/docs/Algorithm-Gutenberg-Fibonaccis.html#v:isFib"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003elastFib\u003c/a\u003e\u003c/code\u003e function returns the last Fibonacci number in the list\nof Fibonacci numbers, \u003ccode\u003e\u003ca\u003efirst1001Fibs\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe last Fibonacci number in the list is \u003ccode\u003e70,330,367,711,422,815,821,835,254,877,183,549,770,181,269,836,358,732,742,604,905,087,154,537,118,196,933,579,742,249,494,562,611,733,487,750,449,241,765,991,088,186,363,265,450,223,647,106,012,053,374,121,273,867,339,111,198,139,373,125,598,767,690,091,902,245,245,323,403,501\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Algorithm.Gutenberg.Fibonaccis",
          "name": "lastFib",
          "package": "gutenberg-fibonaccis",
          "signature": "Integer",
          "source": "src/Algorithm-Gutenberg-Fibonaccis.html#lastFib",
          "type": "function"
        },
        "index": {
          "description": "The lastFib function returns the last Fibonacci number in the list of Fibonacci numbers first1001Fibs The last Fibonacci number in the list is",
          "hierarchy": "Algorithm Gutenberg Fibonaccis",
          "module": "Algorithm.Gutenberg.Fibonaccis",
          "name": "lastFib",
          "package": "gutenberg-fibonaccis",
          "partial": "Fib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gutenberg-fibonaccis/docs/Algorithm-Gutenberg-Fibonaccis.html#v:lastFib"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003enthFib\u003c/a\u003e\u003c/code\u003e function returns the nth Fibonacci number.\n\u003c/p\u003e\u003cp\u003eAn error is thrown if the index number given is less than one (\u003ccode\u003e1\u003c/code\u003e), the index of\nthe first Fibonacci, or greater than the number of Fibonacci numbers in the\n\u003ccode\u003e\u003ca\u003efirst1001Fibs\u003c/a\u003e\u003c/code\u003e list, i.e., \u003ccode\u003e\u003ca\u003efibsLen\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "Algorithm.Gutenberg.Fibonaccis",
          "name": "nthFib",
          "package": "gutenberg-fibonaccis",
          "signature": "Int-\u003e Integer",
          "type": "function"
        },
        "index": {
          "description": "The nthFib function returns the nth Fibonacci number An error is thrown if the index number given is less than one the index of the first Fibonacci or greater than the number of Fibonacci numbers in the first1001Fibs list i.e fibsLen",
          "hierarchy": "Algorithm Gutenberg Fibonaccis",
          "module": "Algorithm.Gutenberg.Fibonaccis",
          "name": "nthFib",
          "normalized": "Int-\u003eInteger",
          "package": "gutenberg-fibonaccis",
          "partial": "Fib",
          "signature": "Int-\u003eInteger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gutenberg-fibonaccis/docs/Algorithm-Gutenberg-Fibonaccis.html#v:nthFib"
      }
    }
  ]
]