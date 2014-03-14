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
        "word": "sieve"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn implementation of the Sieve abstract data type in Haskell. \n\u003c/p\u003e\u003cp\u003eA Sieve is a data type with properties analogous to a physical Sieve and it is useful\n for building up lists of data wherein a specific constraint must be met that cannot be achieved \n using normal type semantics. A Sieve encapsulates a list that can only hold a certain type, specified by a\n identity function and is preferable to creating or building up lists by using conditional blocks or by the\n progressive use of \u003ccode\u003e\u003ca\u003efilter\u003c/a\u003e\u003c/code\u003e. This is especially advantageous if a list is to be passed around and used as an\n accumulator. In such a configuration, the original declaring type is passed around with the Sieve so that it\n can be used transparently in subsequent areas of the program.\n\u003c/p\u003e\u003cp\u003eA Sieve is especially useful for applications that:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Will hold onto a list for longer than a single function\n\u003c/li\u003e\u003cli\u003e Need to perform asynchronous stream processing\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eConsider the following example wherein we wish to create and maintain a list with \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e values greater than 2. \n\u003c/p\u003e\u003cpre\u003e f2 :: Sieve Int -\u003e Sieve Int\n f2 s = [7,8,1] ++? s\n\u003c/pre\u003e\u003cpre\u003e f1 :: Sieve Int \n f1 = let numbersGreaterThanTwo = newSieve (\\x -\u003e x \u003e 2) [1,2,3] in f2 $ [4,5,6] ++? numbersGreaterThanTwo\n\u003c/pre\u003e\u003cp\u003eThis example produces the list: \u003ccode\u003e[7,8,4,5,6,3]\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Sieve",
          "name": "Sieve",
          "package": "sieve",
          "source": "src/Data-Sieve.html",
          "type": "module"
        },
        "index": {
          "description": "An implementation of the Sieve abstract data type in Haskell Sieve is data type with properties analogous to physical Sieve and it is useful for building up lists of data wherein specific constraint must be met that cannot be achieved using normal type semantics Sieve encapsulates list that can only hold certain type specified by identity function and is preferable to creating or building up lists by using conditional blocks or by the progressive use of filter This is especially advantageous if list is to be passed around and used as an accumulator In such configuration the original declaring type is passed around with the Sieve so that it can be used transparently in subsequent areas of the program Sieve is especially useful for applications that Will hold onto list for longer than single function Need to perform asynchronous stream processing Consider the following example wherein we wish to create and maintain list with Integer values greater than f2 Sieve Int Sieve Int f2 f1 Sieve Int f1 let numbersGreaterThanTwo newSieve in f2 numbersGreaterThanTwo This example produces the list",
          "hierarchy": "Data Sieve",
          "module": "Data.Sieve",
          "name": "Sieve",
          "package": "sieve",
          "partial": "Sieve",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sieve/docs/Data-Sieve.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type that backs created Sieves. \n\u003c/p\u003e",
          "module": "Data.Sieve",
          "name": "Sieve",
          "package": "sieve",
          "source": "src/Data-Sieve.html#Sieve",
          "type": "data"
        },
        "index": {
          "description": "The type that backs created Sieves",
          "hierarchy": "Data Sieve",
          "module": "Data.Sieve",
          "name": "Sieve",
          "package": "sieve",
          "partial": "Sieve",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sieve/docs/Data-Sieve.html#t:Sieve"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe operator for building up lists with a Sieve. The operator should be read as \"Conditionally Add.\" All interaction with\n Sieve should ideally be through this function/operator. The most basic usage of it can be seen in the following example:\n\u003c/p\u003e\u003cpre\u003e  f3 =  [0,11,10] ++? ([7,8,9]  ++?  ([4,5,6] ++? newSieve (\\x -\u003e x \u003e 2) [1,2,3]))\n\u003c/pre\u003e\u003cp\u003eThis produces the list \u003ccode\u003e[11,10,7,8,9,4,5,6,3]\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Sieve",
          "name": "(++?)",
          "package": "sieve",
          "signature": "[a]-\u003e Sieve a-\u003e Sieve a",
          "type": "function"
        },
        "index": {
          "description": "The operator for building up lists with Sieve The operator should be read as Conditionally Add All interaction with Sieve should ideally be through this function operator The most basic usage of it can be seen in the following example f3 newSieve This produces the list",
          "hierarchy": "Data Sieve",
          "module": "Data.Sieve",
          "name": "(++?) ++?",
          "normalized": "[a]-\u003eSieve a-\u003eSieve a",
          "package": "sieve",
          "signature": "[a]-\u003eSieve a-\u003eSieve a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sieve/docs/Data-Sieve.html#v:-43--43--63-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe function \u003ccode\u003e\u003ca\u003enewSieve\u003c/a\u003e\u003c/code\u003e is the preferred method of creating a new \u003ccode\u003e\u003ca\u003eSieve\u003c/a\u003e\u003c/code\u003e. The sieve that is constructed will immediately filter the list passed as the second parameter to \u003ccode\u003e\u003ca\u003enewSieve\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Sieve",
          "name": "newSieve",
          "package": "sieve",
          "signature": "(a -\u003e Bool)-\u003e [a]-\u003e Sieve a",
          "type": "function"
        },
        "index": {
          "description": "The function newSieve is the preferred method of creating new Sieve The sieve that is constructed will immediately filter the list passed as the second parameter to newSieve",
          "hierarchy": "Data Sieve",
          "module": "Data.Sieve",
          "name": "newSieve",
          "normalized": "(a-\u003eBool)-\u003e[a]-\u003eSieve a",
          "package": "sieve",
          "partial": "Sieve",
          "signature": "(a-\u003eBool)-\u003e[a]-\u003eSieve a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sieve/docs/Data-Sieve.html#v:newSieve"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the backing relation used to determine if a given element is a member of the list.\n\u003c/p\u003e",
          "module": "Data.Sieve",
          "name": "relation",
          "package": "sieve",
          "signature": "Sieve a -\u003e a -\u003e Bool",
          "source": "src/Data-Sieve.html#relation",
          "type": "function"
        },
        "index": {
          "description": "Returns the backing relation used to determine if given element is member of the list",
          "hierarchy": "Data Sieve",
          "module": "Data.Sieve",
          "name": "relation",
          "normalized": "Sieve a-\u003ea-\u003eBool",
          "package": "sieve",
          "signature": "Sieve a-\u003ea-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sieve/docs/Data-Sieve.html#v:relation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003etoList\u003c/a\u003e\u003c/code\u003e function returns the resulting backing list.\n\u003c/p\u003e",
          "module": "Data.Sieve",
          "name": "toList",
          "package": "sieve",
          "signature": "Sieve a -\u003e [a]",
          "source": "src/Data-Sieve.html#toList",
          "type": "function"
        },
        "index": {
          "description": "The toList function returns the resulting backing list",
          "hierarchy": "Data Sieve",
          "module": "Data.Sieve",
          "name": "toList",
          "normalized": "Sieve a-\u003e[a]",
          "package": "sieve",
          "partial": "List",
          "signature": "Sieve a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sieve/docs/Data-Sieve.html#v:toList"
      }
    }
  ]
]