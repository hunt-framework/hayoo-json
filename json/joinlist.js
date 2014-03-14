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
        "word": "joinlist"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA \"join list\" datatype and operations. \n\u003c/p\u003e\u003cp\u003eA join list is implemented a binary tree, so joining two \n lists (catenation, aka (++)) is a cheap operation. \n\u003c/p\u003e\u003cp\u003eThis constrasts with the regular list datatype which is a \n cons list: while consing on a regular list is by nature cheap, \n joining (++) is expensive. \n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.JoinList",
          "name": "JoinList",
          "package": "joinlist",
          "source": "src/Data-JoinList.html",
          "type": "module"
        },
        "index": {
          "description": "join list datatype and operations join list is implemented binary tree so joining two lists catenation aka is cheap operation This constrasts with the regular list datatype which is cons list while consing on regular list is by nature cheap joining is expensive",
          "hierarchy": "Data JoinList",
          "module": "Data.JoinList",
          "name": "JoinList",
          "package": "joinlist",
          "partial": "Join List",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/joinlist/docs/Data-JoinList.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.JoinList",
          "name": "JoinList",
          "package": "joinlist",
          "source": "src/Data-JoinList.html#JoinList",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data JoinList",
          "module": "Data.JoinList",
          "name": "JoinList",
          "package": "joinlist",
          "partial": "Join List",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/joinlist/docs/Data-JoinList.html#t:JoinList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.JoinList",
          "name": "ViewL",
          "package": "joinlist",
          "source": "src/Data-JoinList.html#ViewL",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data JoinList",
          "module": "Data.JoinList",
          "name": "ViewL",
          "package": "joinlist",
          "partial": "View",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/joinlist/docs/Data-JoinList.html#t:ViewL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.JoinList",
          "name": "ViewR",
          "package": "joinlist",
          "source": "src/Data-JoinList.html#ViewR",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data JoinList",
          "module": "Data.JoinList",
          "name": "ViewR",
          "package": "joinlist",
          "partial": "View",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/joinlist/docs/Data-JoinList.html#t:ViewR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCatenate two join lists. Unlike (++) on regular lists, \n catenation on join lists is (relatively) cheap hence the \n name \u003cem\u003ejoin list\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.JoinList",
          "name": "(++)",
          "package": "joinlist",
          "signature": "JoinList a -\u003e JoinList a -\u003e JoinList a",
          "source": "src/Data-JoinList.html#%2B%2B",
          "type": "function"
        },
        "index": {
          "description": "Catenate two join lists Unlike on regular lists catenation on join lists is relatively cheap hence the name join list",
          "hierarchy": "Data JoinList",
          "module": "Data.JoinList",
          "name": "(++) ++",
          "normalized": "JoinList a-\u003eJoinList a-\u003eJoinList a",
          "package": "joinlist",
          "signature": "JoinList a-\u003eJoinList a-\u003eJoinList a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/joinlist/docs/Data-JoinList.html#v:-43--43-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.JoinList",
          "name": ":\u003c",
          "package": "joinlist",
          "signature": "a :\u003c (JoinList a)",
          "source": "src/Data-JoinList.html#ViewL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data JoinList",
          "module": "Data.JoinList",
          "name": ":\u003c",
          "package": "joinlist",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/joinlist/docs/Data-JoinList.html#v::-60-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.JoinList",
          "name": ":\u003e",
          "package": "joinlist",
          "signature": "(JoinList a) :\u003e a",
          "source": "src/Data-JoinList.html#ViewR",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data JoinList",
          "module": "Data.JoinList",
          "name": ":\u003e",
          "package": "joinlist",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/joinlist/docs/Data-JoinList.html#v::-62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.JoinList",
          "name": "EmptyL",
          "package": "joinlist",
          "signature": "EmptyL",
          "source": "src/Data-JoinList.html#ViewL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data JoinList",
          "module": "Data.JoinList",
          "name": "EmptyL",
          "package": "joinlist",
          "partial": "Empty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/joinlist/docs/Data-JoinList.html#v:EmptyL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.JoinList",
          "name": "EmptyR",
          "package": "joinlist",
          "signature": "EmptyR",
          "source": "src/Data-JoinList.html#ViewR",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data JoinList",
          "module": "Data.JoinList",
          "name": "EmptyR",
          "package": "joinlist",
          "partial": "Empty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/joinlist/docs/Data-JoinList.html#v:EmptyR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConcatenate a join list of join lists. \n\u003c/p\u003e",
          "module": "Data.JoinList",
          "name": "concat",
          "package": "joinlist",
          "signature": "JoinList (JoinList a) -\u003e JoinList a",
          "source": "src/Data-JoinList.html#concat",
          "type": "function"
        },
        "index": {
          "description": "Concatenate join list of join lists",
          "hierarchy": "Data JoinList",
          "module": "Data.JoinList",
          "name": "concat",
          "normalized": "JoinList(JoinList a)-\u003eJoinList a",
          "package": "joinlist",
          "signature": "JoinList(JoinList a)-\u003eJoinList a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/joinlist/docs/Data-JoinList.html#v:concat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCons an element to the front of the join list.\n\u003c/p\u003e",
          "module": "Data.JoinList",
          "name": "cons",
          "package": "joinlist",
          "signature": "a -\u003e JoinList a -\u003e JoinList a",
          "source": "src/Data-JoinList.html#cons",
          "type": "function"
        },
        "index": {
          "description": "Cons an element to the front of the join list",
          "hierarchy": "Data JoinList",
          "module": "Data.JoinList",
          "name": "cons",
          "normalized": "a-\u003eJoinList a-\u003eJoinList a",
          "package": "joinlist",
          "signature": "a-\u003eJoinList a-\u003eJoinList a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/joinlist/docs/Data-JoinList.html#v:cons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDrop the left \u003ccode\u003en\u003c/code\u003e elements of the list.\n\u003c/p\u003e\u003cp\u003eImplemented with \u003ccode\u003e\u003ca\u003eviewl\u003c/a\u003e\u003c/code\u003e hence the same performance caveats\n apply.\n\u003c/p\u003e",
          "module": "Data.JoinList",
          "name": "dropLeft",
          "package": "joinlist",
          "signature": "Int -\u003e JoinList a -\u003e JoinList a",
          "source": "src/Data-JoinList.html#dropLeft",
          "type": "function"
        },
        "index": {
          "description": "Drop the left elements of the list Implemented with viewl hence the same performance caveats apply",
          "hierarchy": "Data JoinList",
          "module": "Data.JoinList",
          "name": "dropLeft",
          "normalized": "Int-\u003eJoinList a-\u003eJoinList a",
          "package": "joinlist",
          "partial": "Left",
          "signature": "Int-\u003eJoinList a-\u003eJoinList a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/joinlist/docs/Data-JoinList.html#v:dropLeft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDrop the right \u003ccode\u003en\u003c/code\u003e elements of the list.\n\u003c/p\u003e\u003cp\u003eImplemented with \u003ccode\u003e\u003ca\u003eviewr\u003c/a\u003e\u003c/code\u003e hence the same performance caveats\n apply.\n\u003c/p\u003e",
          "module": "Data.JoinList",
          "name": "dropRight",
          "package": "joinlist",
          "signature": "Int -\u003e JoinList a -\u003e JoinList a",
          "source": "src/Data-JoinList.html#dropRight",
          "type": "function"
        },
        "index": {
          "description": "Drop the right elements of the list Implemented with viewr hence the same performance caveats apply",
          "hierarchy": "Data JoinList",
          "module": "Data.JoinList",
          "name": "dropRight",
          "normalized": "Int-\u003eJoinList a-\u003eJoinList a",
          "package": "joinlist",
          "partial": "Right",
          "signature": "Int-\u003eJoinList a-\u003eJoinList a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/joinlist/docs/Data-JoinList.html#v:dropRight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an empty join list. \n\u003c/p\u003e",
          "module": "Data.JoinList",
          "name": "empty",
          "package": "joinlist",
          "signature": "JoinList a",
          "source": "src/Data-JoinList.html#empty",
          "type": "function"
        },
        "index": {
          "description": "Create an empty join list",
          "hierarchy": "Data JoinList",
          "module": "Data.JoinList",
          "name": "empty",
          "package": "joinlist",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/joinlist/docs/Data-JoinList.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLeft-associative fold of a JoinList.\n\u003c/p\u003e",
          "module": "Data.JoinList",
          "name": "foldl",
          "package": "joinlist",
          "signature": "(b -\u003e a -\u003e b) -\u003e b -\u003e JoinList a -\u003e b",
          "source": "src/Data-JoinList.html#foldl",
          "type": "function"
        },
        "index": {
          "description": "Left-associative fold of JoinList",
          "hierarchy": "Data JoinList",
          "module": "Data.JoinList",
          "name": "foldl",
          "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003eJoinList b-\u003ea",
          "package": "joinlist",
          "signature": "(b-\u003ea-\u003eb)-\u003eb-\u003eJoinList a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/joinlist/docs/Data-JoinList.html#v:foldl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRight-associative fold of a JoinList.\n\u003c/p\u003e",
          "module": "Data.JoinList",
          "name": "foldr",
          "package": "joinlist",
          "signature": "(a -\u003e b -\u003e b) -\u003e b -\u003e JoinList a -\u003e b",
          "source": "src/Data-JoinList.html#foldr",
          "type": "function"
        },
        "index": {
          "description": "Right-associative fold of JoinList",
          "hierarchy": "Data JoinList",
          "module": "Data.JoinList",
          "name": "foldr",
          "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003eJoinList a-\u003eb",
          "package": "joinlist",
          "signature": "(a-\u003eb-\u003eb)-\u003eb-\u003eJoinList a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/joinlist/docs/Data-JoinList.html#v:foldr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuild a join list from a regular list.\n\u003c/p\u003e",
          "module": "Data.JoinList",
          "name": "fromList",
          "package": "joinlist",
          "signature": "[a] -\u003e JoinList a",
          "source": "src/Data-JoinList.html#fromList",
          "type": "function"
        },
        "index": {
          "description": "Build join list from regular list",
          "hierarchy": "Data JoinList",
          "module": "Data.JoinList",
          "name": "fromList",
          "normalized": "[a]-\u003eJoinList a",
          "package": "joinlist",
          "partial": "List",
          "signature": "[a]-\u003eJoinList a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/joinlist/docs/Data-JoinList.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA generalized fold, where each constructor has an operation.\n\u003c/p\u003e",
          "module": "Data.JoinList",
          "name": "gfold",
          "package": "joinlist",
          "signature": "b -\u003e (a -\u003e b) -\u003e (b -\u003e b -\u003e b) -\u003e JoinList a -\u003e b",
          "source": "src/Data-JoinList.html#gfold",
          "type": "function"
        },
        "index": {
          "description": "generalized fold where each constructor has an operation",
          "hierarchy": "Data JoinList",
          "module": "Data.JoinList",
          "name": "gfold",
          "normalized": "a-\u003e(b-\u003ea)-\u003e(a-\u003ea-\u003ea)-\u003eJoinList b-\u003ea",
          "package": "joinlist",
          "signature": "b-\u003e(a-\u003eb)-\u003e(b-\u003eb-\u003eb)-\u003eJoinList a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/joinlist/docs/Data-JoinList.html#v:gfold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the first element of a join list - i.e. the leftmost\n element of the left spine. An error is thrown if the list is \n empty. \n\u003c/p\u003e\u003cp\u003eThis function performs a traversal down the left spine, so \n unlike \u003ccode\u003ehead\u003c/code\u003e on regular lists this function is not performed \n in constant time.\n\u003c/p\u003e",
          "module": "Data.JoinList",
          "name": "head",
          "package": "joinlist",
          "signature": "JoinList a -\u003e a",
          "source": "src/Data-JoinList.html#head",
          "type": "function"
        },
        "index": {
          "description": "Extract the first element of join list i.e the leftmost element of the left spine An error is thrown if the list is empty This function performs traversal down the left spine so unlike head on regular lists this function is not performed in constant time",
          "hierarchy": "Data JoinList",
          "module": "Data.JoinList",
          "name": "head",
          "normalized": "JoinList a-\u003ea",
          "package": "joinlist",
          "signature": "JoinList a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/joinlist/docs/Data-JoinList.html#v:head"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract all the elements except the last one. An error is thrown\n if the list is empty.\n\u003c/p\u003e",
          "module": "Data.JoinList",
          "name": "init",
          "package": "joinlist",
          "signature": "JoinList a -\u003e JoinList a",
          "source": "src/Data-JoinList.html#init",
          "type": "function"
        },
        "index": {
          "description": "Extract all the elements except the last one An error is thrown if the list is empty",
          "hierarchy": "Data JoinList",
          "module": "Data.JoinList",
          "name": "init",
          "normalized": "JoinList a-\u003eJoinList a",
          "package": "joinlist",
          "signature": "JoinList a-\u003eJoinList a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/joinlist/docs/Data-JoinList.html#v:init"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn alias for (++) that does not cause a name clash with the \n Prelude.\n\u003c/p\u003e",
          "module": "Data.JoinList",
          "name": "join",
          "package": "joinlist",
          "signature": "JoinList a -\u003e JoinList a -\u003e JoinList a",
          "source": "src/Data-JoinList.html#join",
          "type": "function"
        },
        "index": {
          "description": "An alias for that does not cause name clash with the Prelude",
          "hierarchy": "Data JoinList",
          "module": "Data.JoinList",
          "name": "join",
          "normalized": "JoinList a-\u003eJoinList a-\u003eJoinList a",
          "package": "joinlist",
          "signature": "JoinList a-\u003eJoinList a-\u003eJoinList a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/joinlist/docs/Data-JoinList.html#v:join"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the last element of a join list - i.e. the rightmost\n element of the right spine. An error is thrown if the list is \n empty.\n\u003c/p\u003e",
          "module": "Data.JoinList",
          "name": "last",
          "package": "joinlist",
          "signature": "JoinList a -\u003e a",
          "source": "src/Data-JoinList.html#last",
          "type": "function"
        },
        "index": {
          "description": "Extract the last element of join list i.e the rightmost element of the right spine An error is thrown if the list is empty",
          "hierarchy": "Data JoinList",
          "module": "Data.JoinList",
          "name": "last",
          "normalized": "JoinList a-\u003ea",
          "package": "joinlist",
          "signature": "JoinList a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/joinlist/docs/Data-JoinList.html#v:last"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the length of a join list.\n\u003c/p\u003e",
          "module": "Data.JoinList",
          "name": "length",
          "package": "joinlist",
          "signature": "JoinList a -\u003e Int",
          "source": "src/Data-JoinList.html#length",
          "type": "function"
        },
        "index": {
          "description": "Get the length of join list",
          "hierarchy": "Data JoinList",
          "module": "Data.JoinList",
          "name": "length",
          "normalized": "JoinList a-\u003eInt",
          "package": "joinlist",
          "signature": "JoinList a-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/joinlist/docs/Data-JoinList.html#v:length"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap a function over a join list.\n\u003c/p\u003e",
          "module": "Data.JoinList",
          "name": "map",
          "package": "joinlist",
          "signature": "(a -\u003e b) -\u003e JoinList a -\u003e JoinList b",
          "source": "src/Data-JoinList.html#map",
          "type": "function"
        },
        "index": {
          "description": "Map function over join list",
          "hierarchy": "Data JoinList",
          "module": "Data.JoinList",
          "name": "map",
          "normalized": "(a-\u003eb)-\u003eJoinList a-\u003eJoinList b",
          "package": "joinlist",
          "signature": "(a-\u003eb)-\u003eJoinList a-\u003eJoinList b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/joinlist/docs/Data-JoinList.html#v:map"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest whether a join list is empty.\n\u003c/p\u003e",
          "module": "Data.JoinList",
          "name": "null",
          "package": "joinlist",
          "signature": "JoinList a -\u003e Bool",
          "source": "src/Data-JoinList.html#null",
          "type": "function"
        },
        "index": {
          "description": "Test whether join list is empty",
          "hierarchy": "Data JoinList",
          "module": "Data.JoinList",
          "name": "null",
          "normalized": "JoinList a-\u003eBool",
          "package": "joinlist",
          "signature": "JoinList a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/joinlist/docs/Data-JoinList.html#v:null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepeatedly build a join list by catenating the seed list.\n\u003c/p\u003e",
          "module": "Data.JoinList",
          "name": "repeated",
          "package": "joinlist",
          "signature": "Int -\u003e JoinList a -\u003e JoinList a",
          "source": "src/Data-JoinList.html#repeated",
          "type": "function"
        },
        "index": {
          "description": "Repeatedly build join list by catenating the seed list",
          "hierarchy": "Data JoinList",
          "module": "Data.JoinList",
          "name": "repeated",
          "normalized": "Int-\u003eJoinList a-\u003eJoinList a",
          "package": "joinlist",
          "signature": "Int-\u003eJoinList a-\u003eJoinList a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/joinlist/docs/Data-JoinList.html#v:repeated"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuild a join list of n elements. \n\u003c/p\u003e",
          "module": "Data.JoinList",
          "name": "replicate",
          "package": "joinlist",
          "signature": "Int -\u003e a -\u003e JoinList a",
          "source": "src/Data-JoinList.html#replicate",
          "type": "function"
        },
        "index": {
          "description": "Build join list of elements",
          "hierarchy": "Data JoinList",
          "module": "Data.JoinList",
          "name": "replicate",
          "normalized": "Int-\u003ea-\u003eJoinList a",
          "package": "joinlist",
          "signature": "Int-\u003ea-\u003eJoinList a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/joinlist/docs/Data-JoinList.html#v:replicate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.JoinList",
          "name": "reverse",
          "package": "joinlist",
          "signature": "JoinList a -\u003e JoinList a",
          "source": "src/Data-JoinList.html#reverse",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data JoinList",
          "module": "Data.JoinList",
          "name": "reverse",
          "normalized": "JoinList a-\u003eJoinList a",
          "package": "joinlist",
          "signature": "JoinList a-\u003eJoinList a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/joinlist/docs/Data-JoinList.html#v:reverse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a singleton join list.\n\u003c/p\u003e",
          "module": "Data.JoinList",
          "name": "singleton",
          "package": "joinlist",
          "signature": "a -\u003e JoinList a",
          "source": "src/Data-JoinList.html#singleton",
          "type": "function"
        },
        "index": {
          "description": "Create singleton join list",
          "hierarchy": "Data JoinList",
          "module": "Data.JoinList",
          "name": "singleton",
          "normalized": "a-\u003eJoinList a",
          "package": "joinlist",
          "signature": "a-\u003eJoinList a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/joinlist/docs/Data-JoinList.html#v:singleton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSnoc an element to the tail of the join list.\n\u003c/p\u003e",
          "module": "Data.JoinList",
          "name": "snoc",
          "package": "joinlist",
          "signature": "JoinList a -\u003e a -\u003e JoinList a",
          "source": "src/Data-JoinList.html#snoc",
          "type": "function"
        },
        "index": {
          "description": "Snoc an element to the tail of the join list",
          "hierarchy": "Data JoinList",
          "module": "Data.JoinList",
          "name": "snoc",
          "normalized": "JoinList a-\u003ea-\u003eJoinList a",
          "package": "joinlist",
          "signature": "JoinList a-\u003ea-\u003eJoinList a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/joinlist/docs/Data-JoinList.html#v:snoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the elements after the head of a list. An error is thrown\n if the list is empty.\n\u003c/p\u003e",
          "module": "Data.JoinList",
          "name": "tail",
          "package": "joinlist",
          "signature": "JoinList a -\u003e JoinList a",
          "source": "src/Data-JoinList.html#tail",
          "type": "function"
        },
        "index": {
          "description": "Extract the elements after the head of list An error is thrown if the list is empty",
          "hierarchy": "Data JoinList",
          "module": "Data.JoinList",
          "name": "tail",
          "normalized": "JoinList a-\u003eJoinList a",
          "package": "joinlist",
          "signature": "JoinList a-\u003eJoinList a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/joinlist/docs/Data-JoinList.html#v:tail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake the left \u003ccode\u003en\u003c/code\u003e elements of the list.\n\u003c/p\u003e\u003cp\u003eImplemented with \u003ccode\u003e\u003ca\u003eviewl\u003c/a\u003e\u003c/code\u003e hence the same performance caveats\n apply.\n\u003c/p\u003e",
          "module": "Data.JoinList",
          "name": "takeLeft",
          "package": "joinlist",
          "signature": "Int -\u003e JoinList a -\u003e JoinList a",
          "source": "src/Data-JoinList.html#takeLeft",
          "type": "function"
        },
        "index": {
          "description": "Take the left elements of the list Implemented with viewl hence the same performance caveats apply",
          "hierarchy": "Data JoinList",
          "module": "Data.JoinList",
          "name": "takeLeft",
          "normalized": "Int-\u003eJoinList a-\u003eJoinList a",
          "package": "joinlist",
          "partial": "Left",
          "signature": "Int-\u003eJoinList a-\u003eJoinList a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/joinlist/docs/Data-JoinList.html#v:takeLeft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake the right \u003ccode\u003en\u003c/code\u003e elements of the list.\n\u003c/p\u003e\u003cp\u003eImplemented with \u003ccode\u003e\u003ca\u003eviewr\u003c/a\u003e\u003c/code\u003e hence the same performance caveats\n apply.\n\u003c/p\u003e",
          "module": "Data.JoinList",
          "name": "takeRight",
          "package": "joinlist",
          "signature": "Int -\u003e JoinList a -\u003e JoinList a",
          "source": "src/Data-JoinList.html#takeRight",
          "type": "function"
        },
        "index": {
          "description": "Take the right elements of the list Implemented with viewr hence the same performance caveats apply",
          "hierarchy": "Data JoinList",
          "module": "Data.JoinList",
          "name": "takeRight",
          "normalized": "Int-\u003eJoinList a-\u003eJoinList a",
          "package": "joinlist",
          "partial": "Right",
          "signature": "Int-\u003eJoinList a-\u003eJoinList a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/joinlist/docs/Data-JoinList.html#v:takeRight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a join list to a regular list.\n\u003c/p\u003e",
          "module": "Data.JoinList",
          "name": "toList",
          "package": "joinlist",
          "signature": "JoinList a -\u003e [a]",
          "source": "src/Data-JoinList.html#toList",
          "type": "function"
        },
        "index": {
          "description": "Convert join list to regular list",
          "hierarchy": "Data JoinList",
          "module": "Data.JoinList",
          "name": "toList",
          "normalized": "JoinList a-\u003e[a]",
          "package": "joinlist",
          "partial": "List",
          "signature": "JoinList a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/joinlist/docs/Data-JoinList.html#v:toList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eunfoldl is permitted due to cheap \u003cem\u003esnoc-ing\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.JoinList",
          "name": "unfoldl",
          "package": "joinlist",
          "signature": "(b -\u003e Maybe (a, b)) -\u003e b -\u003e JoinList a",
          "source": "src/Data-JoinList.html#unfoldl",
          "type": "function"
        },
        "index": {
          "description": "unfoldl is permitted due to cheap snoc-ing",
          "hierarchy": "Data JoinList",
          "module": "Data.JoinList",
          "name": "unfoldl",
          "normalized": "(a-\u003eMaybe(b,a))-\u003ea-\u003eJoinList b",
          "package": "joinlist",
          "signature": "(b-\u003eMaybe(a,b))-\u003eb-\u003eJoinList a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/joinlist/docs/Data-JoinList.html#v:unfoldl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eunfoldr - the \u003cem\u003eusual\u003c/em\u003e unfoldr opertation.\n\u003c/p\u003e",
          "module": "Data.JoinList",
          "name": "unfoldr",
          "package": "joinlist",
          "signature": "(b -\u003e Maybe (a, b)) -\u003e b -\u003e JoinList a",
          "source": "src/Data-JoinList.html#unfoldr",
          "type": "function"
        },
        "index": {
          "description": "unfoldr the usual unfoldr opertation",
          "hierarchy": "Data JoinList",
          "module": "Data.JoinList",
          "name": "unfoldr",
          "normalized": "(a-\u003eMaybe(b,a))-\u003ea-\u003eJoinList b",
          "package": "joinlist",
          "signature": "(b-\u003eMaybe(a,b))-\u003eb-\u003eJoinList a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/joinlist/docs/Data-JoinList.html#v:unfoldr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAccess the left end of a sequence.\n\u003c/p\u003e\u003cp\u003eUnlike the corresponing operation on Data.Sequence this is \n not a cheap operation, the joinlist must be traversed down \n the left spine to find the leftmost node.\n\u003c/p\u003e\u003cp\u003eAlso the traversal may involve changing the shape of the \n underlying binary tree.\n\u003c/p\u003e",
          "module": "Data.JoinList",
          "name": "viewl",
          "package": "joinlist",
          "signature": "JoinList a -\u003e ViewL a",
          "source": "src/Data-JoinList.html#viewl",
          "type": "function"
        },
        "index": {
          "description": "Access the left end of sequence Unlike the corresponing operation on Data.Sequence this is not cheap operation the joinlist must be traversed down the left spine to find the leftmost node Also the traversal may involve changing the shape of the underlying binary tree",
          "hierarchy": "Data JoinList",
          "module": "Data.JoinList",
          "name": "viewl",
          "normalized": "JoinList a-\u003eViewL a",
          "package": "joinlist",
          "signature": "JoinList a-\u003eViewL a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/joinlist/docs/Data-JoinList.html#v:viewl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAccess the rightt end of a sequence.\n\u003c/p\u003e\u003cp\u003eUnlike the corresponing operation on Data.Sequence this is \n not a cheap operation, the joinlist must be traversed down \n the right spine to find the rightmost node.\n\u003c/p\u003e\u003cp\u003eAlso the traversal may involve changing the shape of the \n underlying binary tree.\n\u003c/p\u003e",
          "module": "Data.JoinList",
          "name": "viewr",
          "package": "joinlist",
          "signature": "JoinList a -\u003e ViewR a",
          "source": "src/Data-JoinList.html#viewr",
          "type": "function"
        },
        "index": {
          "description": "Access the rightt end of sequence Unlike the corresponing operation on Data.Sequence this is not cheap operation the joinlist must be traversed down the right spine to find the rightmost node Also the traversal may involve changing the shape of the underlying binary tree",
          "hierarchy": "Data JoinList",
          "module": "Data.JoinList",
          "name": "viewr",
          "normalized": "JoinList a-\u003eViewR a",
          "package": "joinlist",
          "signature": "JoinList a-\u003eViewR a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/joinlist/docs/Data-JoinList.html#v:viewr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function should be considered deprecated.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003ecross zip\u003c/em\u003e - zip a join list against a regular list, \n maintaining the shape of the join list provided the lengths \n of the lists match.\n\u003c/p\u003e",
          "module": "Data.JoinList",
          "name": "xzip",
          "package": "joinlist",
          "signature": "JoinList a -\u003e [b] -\u003e JoinList (a, b)",
          "source": "src/Data-JoinList.html#xzip",
          "type": "function"
        },
        "index": {
          "description": "This function should be considered deprecated cross zip zip join list against regular list maintaining the shape of the join list provided the lengths of the lists match",
          "hierarchy": "Data JoinList",
          "module": "Data.JoinList",
          "name": "xzip",
          "normalized": "JoinList a-\u003e[b]-\u003eJoinList(a,b)",
          "package": "joinlist",
          "signature": "JoinList a-\u003e[b]-\u003eJoinList(a,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/joinlist/docs/Data-JoinList.html#v:xzip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function should be considered deprecated.\n\u003c/p\u003e\u003cp\u003eGeneralized cross zip - c.f. zipWith on regular lists.\n\u003c/p\u003e",
          "module": "Data.JoinList",
          "name": "xzipWith",
          "package": "joinlist",
          "signature": "(a -\u003e b -\u003e c) -\u003e JoinList a -\u003e [b] -\u003e JoinList c",
          "source": "src/Data-JoinList.html#xzipWith",
          "type": "function"
        },
        "index": {
          "description": "This function should be considered deprecated Generalized cross zip c.f zipWith on regular lists",
          "hierarchy": "Data JoinList",
          "module": "Data.JoinList",
          "name": "xzipWith",
          "normalized": "(a-\u003eb-\u003ec)-\u003eJoinList a-\u003e[b]-\u003eJoinList c",
          "package": "joinlist",
          "partial": "With",
          "signature": "(a-\u003eb-\u003ec)-\u003eJoinList a-\u003e[b]-\u003eJoinList c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/joinlist/docs/Data-JoinList.html#v:xzipWith"
      }
    }
  ]
]