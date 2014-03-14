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
        "word": "ListLike"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGeneric operations over list-like structures\n\u003c/p\u003e\u003cp\u003eWritten by John Goerzen, jgoerzen@complete.org\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.ListLike.Base",
          "name": "Base",
          "package": "ListLike",
          "source": "src/Data-ListLike-Base.html",
          "type": "module"
        },
        "index": {
          "description": "Generic operations over list-like structures Written by John Goerzen jgoerzen@complete.org",
          "hierarchy": "Data ListLike Base",
          "module": "Data.ListLike.Base",
          "name": "Base",
          "package": "ListLike",
          "partial": "Base",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike-Base.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn extension to \u003ccode\u003e\u003ca\u003eListLike\u003c/a\u003e\u003c/code\u003e for those data types that are capable\nof dealing with infinite lists.  Some \u003ccode\u003e\u003ca\u003eListLike\u003c/a\u003e\u003c/code\u003e functions are capable\nof working with finite or infinite lists.  The functions here require\ninfinite list capability in order to work at all. \n\u003c/p\u003e",
          "module": "Data.ListLike.Base",
          "name": "InfiniteListLike",
          "package": "ListLike",
          "source": "src/Data-ListLike-Base.html#InfiniteListLike",
          "type": "class"
        },
        "index": {
          "description": "An extension to ListLike for those data types that are capable of dealing with infinite lists Some ListLike functions are capable of working with finite or infinite lists The functions here require infinite list capability in order to work at all",
          "hierarchy": "Data ListLike Base",
          "module": "Data.ListLike.Base",
          "name": "InfiniteListLike",
          "package": "ListLike",
          "partial": "Infinite List Like",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike-Base.html#t:InfiniteListLike"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe class implementing list-like functions.\n\u003c/p\u003e\u003cp\u003eIt is worth noting that types such as \u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e can be instances of\n\u003ccode\u003e\u003ca\u003eListLike\u003c/a\u003e\u003c/code\u003e.  Due to their specific ways of operating, they may not behave\nin the expected way in some cases.  For instance, \u003ccode\u003e\u003ca\u003econs\u003c/a\u003e\u003c/code\u003e may not increase\nthe size of a map if the key you have given is already in the map; it will\njust replace the value already there.\n\u003c/p\u003e\u003cp\u003eImplementators must define at least:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e singleton\n\u003c/li\u003e\u003cli\u003e head\n\u003c/li\u003e\u003cli\u003e tail\n\u003c/li\u003e\u003cli\u003e null or genericLength\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.ListLike.Base",
          "name": "ListLike",
          "package": "ListLike",
          "source": "src/Data-ListLike-Base.html#ListLike",
          "type": "class"
        },
        "index": {
          "description": "The class implementing list-like functions It is worth noting that types such as Map can be instances of ListLike Due to their specific ways of operating they may not behave in the expected way in some cases For instance cons may not increase the size of map if the key you have given is already in the map it will just replace the value already there Implementators must define at least singleton head tail null or genericLength",
          "hierarchy": "Data ListLike Base",
          "module": "Data.ListLike.Base",
          "name": "ListLike",
          "package": "ListLike",
          "partial": "List Like",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike-Base.html#t:ListLike"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrue if all items satisfy the function \n\u003c/p\u003e",
          "module": "Data.ListLike.Base",
          "name": "all",
          "package": "ListLike",
          "signature": "(item -\u003e Bool) -\u003e full -\u003e Bool",
          "source": "src/Data-ListLike-Base.html#all",
          "type": "method"
        },
        "index": {
          "description": "True if all items satisfy the function",
          "hierarchy": "Data ListLike Base",
          "module": "Data.ListLike.Base",
          "name": "all",
          "normalized": "(a-\u003eBool)-\u003eb-\u003eBool",
          "package": "ListLike",
          "signature": "(item-\u003eBool)-\u003efull-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike-Base.html#v:all"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrue if any items satisfy the function \n\u003c/p\u003e",
          "module": "Data.ListLike.Base",
          "name": "any",
          "package": "ListLike",
          "signature": "(item -\u003e Bool) -\u003e full -\u003e Bool",
          "source": "src/Data-ListLike-Base.html#any",
          "type": "method"
        },
        "index": {
          "description": "True if any items satisfy the function",
          "hierarchy": "Data ListLike Base",
          "module": "Data.ListLike.Base",
          "name": "any",
          "normalized": "(a-\u003eBool)-\u003eb-\u003eBool",
          "package": "ListLike",
          "signature": "(item-\u003eBool)-\u003efull-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike-Base.html#v:any"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombines two lists.  Like (++). \n\u003c/p\u003e",
          "module": "Data.ListLike.Base",
          "name": "append",
          "package": "ListLike",
          "signature": "full -\u003e full -\u003e full",
          "source": "src/Data-ListLike-Base.html#append",
          "type": "method"
        },
        "index": {
          "description": "Combines two lists Like",
          "hierarchy": "Data ListLike Base",
          "module": "Data.ListLike.Base",
          "name": "append",
          "normalized": "a-\u003ea-\u003ea",
          "package": "ListLike",
          "signature": "full-\u003efull-\u003efull",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike-Base.html#v:append"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe equivalent of \u003ccode\u003e\u003ccode\u003e\u003ca\u003espan\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003enot\u003c/a\u003e\u003c/code\u003e . f)\u003c/code\u003e \n\u003c/p\u003e",
          "module": "Data.ListLike.Base",
          "name": "break",
          "package": "ListLike",
          "signature": "(item -\u003e Bool) -\u003e full -\u003e (full, full)",
          "source": "src/Data-ListLike-Base.html#break",
          "type": "method"
        },
        "index": {
          "description": "The equivalent of span not",
          "hierarchy": "Data ListLike Base",
          "module": "Data.ListLike.Base",
          "name": "break",
          "normalized": "(a-\u003eBool)-\u003eb-\u003e(b,b)",
          "package": "ListLike",
          "signature": "(item-\u003eBool)-\u003efull-\u003e(full,full)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike-Base.html#v:break"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFlatten the structure. \n\u003c/p\u003e",
          "module": "Data.ListLike.Base",
          "name": "concat",
          "package": "ListLike",
          "signature": "full' -\u003e full",
          "source": "src/Data-ListLike-Base.html#concat",
          "type": "method"
        },
        "index": {
          "description": "Flatten the structure",
          "hierarchy": "Data ListLike Base",
          "module": "Data.ListLike.Base",
          "name": "concat",
          "normalized": "a-\u003eb",
          "package": "ListLike",
          "signature": "full'-\u003efull",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike-Base.html#v:concat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap a function over the items and concatenate the results.\n         See also \u003ccode\u003e\u003ca\u003erigidConcatMap\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.ListLike.Base",
          "name": "concatMap",
          "package": "ListLike",
          "signature": "(item -\u003e full') -\u003e full -\u003e full'",
          "source": "src/Data-ListLike-Base.html#concatMap",
          "type": "method"
        },
        "index": {
          "description": "Map function over the items and concatenate the results See also rigidConcatMap",
          "hierarchy": "Data ListLike Base",
          "module": "Data.ListLike.Base",
          "name": "concatMap",
          "normalized": "(a-\u003eb)-\u003ec-\u003eb",
          "package": "ListLike",
          "partial": "Map",
          "signature": "(item-\u003efull')-\u003efull-\u003efull'",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike-Base.html#v:concatMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike (:) for lists: adds an element to the beginning of a list \n\u003c/p\u003e",
          "module": "Data.ListLike.Base",
          "name": "cons",
          "package": "ListLike",
          "signature": "item -\u003e full -\u003e full",
          "source": "src/Data-ListLike-Base.html#cons",
          "type": "method"
        },
        "index": {
          "description": "Like for lists adds an element to the beginning of list",
          "hierarchy": "Data ListLike Base",
          "module": "Data.ListLike.Base",
          "name": "cons",
          "normalized": "a-\u003eb-\u003eb",
          "package": "ListLike",
          "signature": "item-\u003efull-\u003efull",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike-Base.html#v:cons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a finite list into a circular one \n\u003c/p\u003e",
          "module": "Data.ListLike.Base",
          "name": "cycle",
          "package": "ListLike",
          "signature": "full -\u003e full",
          "source": "src/Data-ListLike-Base.html#cycle",
          "type": "method"
        },
        "index": {
          "description": "Converts finite list into circular one",
          "hierarchy": "Data ListLike Base",
          "module": "Data.ListLike.Base",
          "name": "cycle",
          "normalized": "a-\u003ea",
          "package": "ListLike",
          "signature": "full-\u003efull",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike-Base.html#v:cycle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemoves the first instance of the element from the list.\n       See also \u003ccode\u003e\u003ca\u003edeleteBy\u003c/a\u003e\u003c/code\u003e \n\u003c/p\u003e",
          "module": "Data.ListLike.Base",
          "name": "delete",
          "package": "ListLike",
          "signature": "item -\u003e full -\u003e full",
          "source": "src/Data-ListLike-Base.html#delete",
          "type": "method"
        },
        "index": {
          "description": "Removes the first instance of the element from the list See also deleteBy",
          "hierarchy": "Data ListLike Base",
          "module": "Data.ListLike.Base",
          "name": "delete",
          "normalized": "a-\u003eb-\u003eb",
          "package": "ListLike",
          "signature": "item-\u003efull-\u003efull",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike-Base.html#v:delete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneric version of \u003ccode\u003e\u003ca\u003edeleteBy\u003c/a\u003e\u003c/code\u003e \n\u003c/p\u003e",
          "module": "Data.ListLike.Base",
          "name": "deleteBy",
          "package": "ListLike",
          "signature": "(item -\u003e item -\u003e Bool) -\u003e item -\u003e full -\u003e full",
          "source": "src/Data-ListLike-Base.html#deleteBy",
          "type": "method"
        },
        "index": {
          "description": "Generic version of deleteBy",
          "hierarchy": "Data ListLike Base",
          "module": "Data.ListLike.Base",
          "name": "deleteBy",
          "normalized": "(a-\u003ea-\u003eBool)-\u003ea-\u003eb-\u003eb",
          "package": "ListLike",
          "partial": "By",
          "signature": "(item-\u003eitem-\u003eBool)-\u003eitem-\u003efull-\u003efull",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike-Base.html#v:deleteBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList difference.  Removes from the first list the first instance\n       of each element of the second list.  See '(\\)' and \u003ccode\u003e\u003ca\u003edeleteFirstsBy\u003c/a\u003e\u003c/code\u003e \n\u003c/p\u003e",
          "module": "Data.ListLike.Base",
          "name": "deleteFirsts",
          "package": "ListLike",
          "signature": "full -\u003e full -\u003e full",
          "source": "src/Data-ListLike-Base.html#deleteFirsts",
          "type": "method"
        },
        "index": {
          "description": "List difference Removes from the first list the first instance of each element of the second list See and deleteFirstsBy",
          "hierarchy": "Data ListLike Base",
          "module": "Data.ListLike.Base",
          "name": "deleteFirsts",
          "normalized": "a-\u003ea-\u003ea",
          "package": "ListLike",
          "partial": "Firsts",
          "signature": "full-\u003efull-\u003efull",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike-Base.html#v:deleteFirsts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneric version of \u003ccode\u003e\u003ca\u003edeleteFirsts\u003c/a\u003e\u003c/code\u003e \n\u003c/p\u003e",
          "module": "Data.ListLike.Base",
          "name": "deleteFirstsBy",
          "package": "ListLike",
          "signature": "(item -\u003e item -\u003e Bool) -\u003e full -\u003e full -\u003e full",
          "source": "src/Data-ListLike-Base.html#deleteFirstsBy",
          "type": "method"
        },
        "index": {
          "description": "Generic version of deleteFirsts",
          "hierarchy": "Data ListLike Base",
          "module": "Data.ListLike.Base",
          "name": "deleteFirstsBy",
          "normalized": "(a-\u003ea-\u003eBool)-\u003eb-\u003eb-\u003eb",
          "package": "ListLike",
          "partial": "Firsts By",
          "signature": "(item-\u003eitem-\u003eBool)-\u003efull-\u003efull-\u003efull",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike-Base.html#v:deleteFirstsBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDrops the first n elements of the list.  See also \u003ccode\u003e\u003ca\u003egenericDrop\u003c/a\u003e\u003c/code\u003e \n\u003c/p\u003e",
          "module": "Data.ListLike.Base",
          "name": "drop",
          "package": "ListLike",
          "signature": "Int -\u003e full -\u003e full",
          "source": "src/Data-ListLike-Base.html#drop",
          "type": "method"
        },
        "index": {
          "description": "Drops the first elements of the list See also genericDrop",
          "hierarchy": "Data ListLike Base",
          "module": "Data.ListLike.Base",
          "name": "drop",
          "normalized": "Int-\u003ea-\u003ea",
          "package": "ListLike",
          "signature": "Int-\u003efull-\u003efull",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike-Base.html#v:drop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDrops all elements form the start of the list that satisfy the\n       function. \n\u003c/p\u003e",
          "module": "Data.ListLike.Base",
          "name": "dropWhile",
          "package": "ListLike",
          "signature": "(item -\u003e Bool) -\u003e full -\u003e full",
          "source": "src/Data-ListLike-Base.html#dropWhile",
          "type": "method"
        },
        "index": {
          "description": "Drops all elements form the start of the list that satisfy the function",
          "hierarchy": "Data ListLike Base",
          "module": "Data.ListLike.Base",
          "name": "dropWhile",
          "normalized": "(a-\u003eBool)-\u003eb-\u003eb",
          "package": "ListLike",
          "partial": "While",
          "signature": "(item-\u003eBool)-\u003efull-\u003efull",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike-Base.html#v:dropWhile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrue if the item occurs in the list \n\u003c/p\u003e",
          "module": "Data.ListLike.Base",
          "name": "elem",
          "package": "ListLike",
          "signature": "item -\u003e full -\u003e Bool",
          "source": "src/Data-ListLike-Base.html#elem",
          "type": "method"
        },
        "index": {
          "description": "True if the item occurs in the list",
          "hierarchy": "Data ListLike Base",
          "module": "Data.ListLike.Base",
          "name": "elem",
          "normalized": "a-\u003eb-\u003eBool",
          "package": "ListLike",
          "signature": "item-\u003efull-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike-Base.html#v:elem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the index of the element, if it exists. \n\u003c/p\u003e",
          "module": "Data.ListLike.Base",
          "name": "elemIndex",
          "package": "ListLike",
          "signature": "item -\u003e full -\u003e Maybe Int",
          "source": "src/Data-ListLike-Base.html#elemIndex",
          "type": "method"
        },
        "index": {
          "description": "Returns the index of the element if it exists",
          "hierarchy": "Data ListLike Base",
          "module": "Data.ListLike.Base",
          "name": "elemIndex",
          "normalized": "a-\u003eb-\u003eMaybe Int",
          "package": "ListLike",
          "partial": "Index",
          "signature": "item-\u003efull-\u003eMaybe Int",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike-Base.html#v:elemIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the indices of the matching elements.  See also \n       \u003ccode\u003e\u003ca\u003efindIndices\u003c/a\u003e\u003c/code\u003e \n\u003c/p\u003e",
          "module": "Data.ListLike.Base",
          "name": "elemIndices",
          "package": "ListLike",
          "signature": "item -\u003e full -\u003e result",
          "source": "src/Data-ListLike-Base.html#elemIndices",
          "type": "method"
        },
        "index": {
          "description": "Returns the indices of the matching elements See also findIndices",
          "hierarchy": "Data ListLike Base",
          "module": "Data.ListLike.Base",
          "name": "elemIndices",
          "normalized": "a-\u003eb-\u003ec",
          "package": "ListLike",
          "partial": "Indices",
          "signature": "item-\u003efull-\u003eresult",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike-Base.html#v:elemIndices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe empty list \n\u003c/p\u003e",
          "module": "Data.ListLike.Base",
          "name": "empty",
          "package": "ListLike",
          "signature": "full",
          "source": "src/Data-ListLike-Base.html#empty",
          "type": "method"
        },
        "index": {
          "description": "The empty list",
          "hierarchy": "Data ListLike Base",
          "module": "Data.ListLike.Base",
          "name": "empty",
          "package": "ListLike",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike-Base.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns only the elements that satisfy the function. \n\u003c/p\u003e",
          "module": "Data.ListLike.Base",
          "name": "filter",
          "package": "ListLike",
          "signature": "(item -\u003e Bool) -\u003e full -\u003e full",
          "source": "src/Data-ListLike-Base.html#filter",
          "type": "method"
        },
        "index": {
          "description": "Returns only the elements that satisfy the function",
          "hierarchy": "Data ListLike Base",
          "module": "Data.ListLike.Base",
          "name": "filter",
          "normalized": "(a-\u003eBool)-\u003eb-\u003eb",
          "package": "ListLike",
          "signature": "(item-\u003eBool)-\u003efull-\u003efull",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike-Base.html#v:filter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake a function and return the first matching element, or Nothing\n       if there is no such element. \n\u003c/p\u003e",
          "module": "Data.ListLike.Base",
          "name": "find",
          "package": "ListLike",
          "signature": "(item -\u003e Bool) -\u003e full -\u003e Maybe item",
          "source": "src/Data-ListLike-Base.html#find",
          "type": "method"
        },
        "index": {
          "description": "Take function and return the first matching element or Nothing if there is no such element",
          "hierarchy": "Data ListLike Base",
          "module": "Data.ListLike.Base",
          "name": "find",
          "normalized": "(a-\u003eBool)-\u003eb-\u003eMaybe a",
          "package": "ListLike",
          "signature": "(item-\u003eBool)-\u003efull-\u003eMaybe item",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike-Base.html#v:find"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake a function and return the index of the first matching element,\n         or Nothing if no element matches \n\u003c/p\u003e",
          "module": "Data.ListLike.Base",
          "name": "findIndex",
          "package": "ListLike",
          "signature": "(item -\u003e Bool) -\u003e full -\u003e Maybe Int",
          "source": "src/Data-ListLike-Base.html#findIndex",
          "type": "method"
        },
        "index": {
          "description": "Take function and return the index of the first matching element or Nothing if no element matches",
          "hierarchy": "Data ListLike Base",
          "module": "Data.ListLike.Base",
          "name": "findIndex",
          "normalized": "(a-\u003eBool)-\u003eb-\u003eMaybe Int",
          "package": "ListLike",
          "partial": "Index",
          "signature": "(item-\u003eBool)-\u003efull-\u003eMaybe Int",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike-Base.html#v:findIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the indices of all elements satisfying the function \n\u003c/p\u003e",
          "module": "Data.ListLike.Base",
          "name": "findIndices",
          "package": "ListLike",
          "signature": "(item -\u003e Bool) -\u003e full -\u003e result",
          "source": "src/Data-ListLike-Base.html#findIndices",
          "type": "method"
        },
        "index": {
          "description": "Returns the indices of all elements satisfying the function",
          "hierarchy": "Data ListLike Base",
          "module": "Data.ListLike.Base",
          "name": "findIndices",
          "normalized": "(a-\u003eBool)-\u003eb-\u003ec",
          "package": "ListLike",
          "partial": "Indices",
          "signature": "(item-\u003eBool)-\u003efull-\u003eresult",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike-Base.html#v:findIndices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerates the structure from a list. \n\u003c/p\u003e",
          "module": "Data.ListLike.Base",
          "name": "fromList",
          "package": "ListLike",
          "signature": "[item] -\u003e full",
          "source": "src/Data-ListLike-Base.html#fromList",
          "type": "method"
        },
        "index": {
          "description": "Generates the structure from list",
          "hierarchy": "Data ListLike Base",
          "module": "Data.ListLike.Base",
          "name": "fromList",
          "normalized": "[a]-\u003eb",
          "package": "ListLike",
          "partial": "List",
          "signature": "[item]-\u003efull",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike-Base.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts one ListLike to another.  See also \u003ccode\u003e\u003ca\u003etoList\u003c/a\u003e\u003c/code\u003e.\n         Default implementation is \u003ccode\u003efromListLike = map id\u003c/code\u003e \n\u003c/p\u003e",
          "module": "Data.ListLike.Base",
          "name": "fromListLike",
          "package": "ListLike",
          "signature": "full -\u003e full'",
          "source": "src/Data-ListLike-Base.html#fromListLike",
          "type": "method"
        },
        "index": {
          "description": "Converts one ListLike to another See also toList Default implementation is fromListLike map id",
          "hierarchy": "Data ListLike Base",
          "module": "Data.ListLike.Base",
          "name": "fromListLike",
          "normalized": "a-\u003eb",
          "package": "ListLike",
          "partial": "List Like",
          "signature": "full-\u003efull'",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike-Base.html#v:fromListLike"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneric version of \u003ccode\u003e\u003ca\u003edrop\u003c/a\u003e\u003c/code\u003e \n\u003c/p\u003e",
          "module": "Data.ListLike.Base",
          "name": "genericDrop",
          "package": "ListLike",
          "signature": "a -\u003e full -\u003e full",
          "source": "src/Data-ListLike-Base.html#genericDrop",
          "type": "method"
        },
        "index": {
          "description": "Generic version of drop",
          "hierarchy": "Data ListLike Base",
          "module": "Data.ListLike.Base",
          "name": "genericDrop",
          "normalized": "a-\u003eb-\u003eb",
          "package": "ListLike",
          "partial": "Drop",
          "signature": "a-\u003efull-\u003efull",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike-Base.html#v:genericDrop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLength of the list \n\u003c/p\u003e",
          "module": "Data.ListLike.Base",
          "name": "genericLength",
          "package": "ListLike",
          "signature": "full -\u003e a",
          "source": "src/Data-ListLike-Base.html#genericLength",
          "type": "method"
        },
        "index": {
          "description": "Length of the list",
          "hierarchy": "Data ListLike Base",
          "module": "Data.ListLike.Base",
          "name": "genericLength",
          "normalized": "a-\u003eb",
          "package": "ListLike",
          "partial": "Length",
          "signature": "full-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike-Base.html#v:genericLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneric version of \u003ccode\u003e\u003ca\u003ereplicate\u003c/a\u003e\u003c/code\u003e \n\u003c/p\u003e",
          "module": "Data.ListLike.Base",
          "name": "genericReplicate",
          "package": "ListLike",
          "signature": "a -\u003e item -\u003e full",
          "source": "src/Data-ListLike-Base.html#genericReplicate",
          "type": "method"
        },
        "index": {
          "description": "Generic version of replicate",
          "hierarchy": "Data ListLike Base",
          "module": "Data.ListLike.Base",
          "name": "genericReplicate",
          "normalized": "a-\u003eb-\u003ec",
          "package": "ListLike",
          "partial": "Replicate",
          "signature": "a-\u003eitem-\u003efull",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike-Base.html#v:genericReplicate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneric version of \u003ccode\u003e\u003ca\u003esplitAt\u003c/a\u003e\u003c/code\u003e \n\u003c/p\u003e",
          "module": "Data.ListLike.Base",
          "name": "genericSplitAt",
          "package": "ListLike",
          "signature": "a -\u003e full -\u003e (full, full)",
          "source": "src/Data-ListLike-Base.html#genericSplitAt",
          "type": "method"
        },
        "index": {
          "description": "Generic version of splitAt",
          "hierarchy": "Data ListLike Base",
          "module": "Data.ListLike.Base",
          "name": "genericSplitAt",
          "normalized": "a-\u003eb-\u003e(b,b)",
          "package": "ListLike",
          "partial": "Split At",
          "signature": "a-\u003efull-\u003e(full,full)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike-Base.html#v:genericSplitAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneric version of \u003ccode\u003e\u003ca\u003etake\u003c/a\u003e\u003c/code\u003e \n\u003c/p\u003e",
          "module": "Data.ListLike.Base",
          "name": "genericTake",
          "package": "ListLike",
          "signature": "a -\u003e full -\u003e full",
          "source": "src/Data-ListLike-Base.html#genericTake",
          "type": "method"
        },
        "index": {
          "description": "Generic version of take",
          "hierarchy": "Data ListLike Base",
          "module": "Data.ListLike.Base",
          "name": "genericTake",
          "normalized": "a-\u003eb-\u003eb",
          "package": "ListLike",
          "partial": "Take",
          "signature": "a-\u003efull-\u003efull",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike-Base.html#v:genericTake"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplit a list into sublists, each which contains equal arguments.\n       For order-preserving types, concatenating these sublists will produce\n       the original list. See also \u003ccode\u003e\u003ca\u003egroupBy\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "Data.ListLike.Base",
          "name": "group",
          "package": "ListLike",
          "signature": "full -\u003e full'",
          "source": "src/Data-ListLike-Base.html#group",
          "type": "method"
        },
        "index": {
          "description": "Split list into sublists each which contains equal arguments For order-preserving types concatenating these sublists will produce the original list See also groupBy",
          "hierarchy": "Data ListLike Base",
          "module": "Data.ListLike.Base",
          "name": "group",
          "normalized": "a-\u003eb",
          "package": "ListLike",
          "signature": "full-\u003efull'",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike-Base.html#v:group"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneric version of \u003ccode\u003e\u003ca\u003egroup\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "Data.ListLike.Base",
          "name": "groupBy",
          "package": "ListLike",
          "signature": "(item -\u003e item -\u003e Bool) -\u003e full -\u003e full'",
          "source": "src/Data-ListLike-Base.html#groupBy",
          "type": "method"
        },
        "index": {
          "description": "Generic version of group",
          "hierarchy": "Data ListLike Base",
          "module": "Data.ListLike.Base",
          "name": "groupBy",
          "normalized": "(a-\u003ea-\u003eBool)-\u003eb-\u003ec",
          "package": "ListLike",
          "partial": "By",
          "signature": "(item-\u003eitem-\u003eBool)-\u003efull-\u003efull'",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike-Base.html#v:groupBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtracts the first element of a \u003ccode\u003e\u003ca\u003eListLike\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "Data.ListLike.Base",
          "name": "head",
          "package": "ListLike",
          "signature": "full -\u003e item",
          "source": "src/Data-ListLike-Base.html#head",
          "type": "method"
        },
        "index": {
          "description": "Extracts the first element of ListLike",
          "hierarchy": "Data ListLike Base",
          "module": "Data.ListLike.Base",
          "name": "head",
          "normalized": "a-\u003eb",
          "package": "ListLike",
          "signature": "full-\u003eitem",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike-Base.html#v:head"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe element at 0-based index i.  Raises an exception if i is out\n         of bounds.  Like (!!) for lists. \n\u003c/p\u003e",
          "module": "Data.ListLike.Base",
          "name": "index",
          "package": "ListLike",
          "signature": "full -\u003e Int -\u003e item",
          "source": "src/Data-ListLike-Base.html#index",
          "type": "method"
        },
        "index": {
          "description": "The element at based index Raises an exception if is out of bounds Like for lists",
          "hierarchy": "Data ListLike Base",
          "module": "Data.ListLike.Base",
          "name": "index",
          "normalized": "a-\u003eInt-\u003eb",
          "package": "ListLike",
          "signature": "full-\u003eInt-\u003eitem",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike-Base.html#v:index"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll elements of the list except the last one.  See also \u003ccode\u003e\u003ca\u003einits\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "Data.ListLike.Base",
          "name": "init",
          "package": "ListLike",
          "signature": "full -\u003e full",
          "source": "src/Data-ListLike-Base.html#init",
          "type": "method"
        },
        "index": {
          "description": "All elements of the list except the last one See also inits",
          "hierarchy": "Data ListLike Base",
          "module": "Data.ListLike.Base",
          "name": "init",
          "normalized": "a-\u003ea",
          "package": "ListLike",
          "signature": "full-\u003efull",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike-Base.html#v:init"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll initial segments of the list, shortest first \n\u003c/p\u003e",
          "module": "Data.ListLike.Base",
          "name": "inits",
          "package": "ListLike",
          "signature": "full -\u003e full'",
          "source": "src/Data-ListLike-Base.html#inits",
          "type": "method"
        },
        "index": {
          "description": "All initial segments of the list shortest first",
          "hierarchy": "Data ListLike Base",
          "module": "Data.ListLike.Base",
          "name": "inits",
          "normalized": "a-\u003eb",
          "package": "ListLike",
          "signature": "full-\u003efull'",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike-Base.html#v:inits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInserts the element at the last place where it is still less than or\n         equal to the next element.  On data types that do not preserve \n         ordering, or enforce their own ordering, the result may not\n         be what you expect.  On types such as maps, this may result in\n         changing an existing item.  See also \u003ccode\u003e\u003ca\u003einsertBy\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "Data.ListLike.Base",
          "name": "insert",
          "package": "ListLike",
          "signature": "item -\u003e full -\u003e full",
          "source": "src/Data-ListLike-Base.html#insert",
          "type": "method"
        },
        "index": {
          "description": "Inserts the element at the last place where it is still less than or equal to the next element On data types that do not preserve ordering or enforce their own ordering the result may not be what you expect On types such as maps this may result in changing an existing item See also insertBy",
          "hierarchy": "Data ListLike Base",
          "module": "Data.ListLike.Base",
          "name": "insert",
          "normalized": "a-\u003eb-\u003eb",
          "package": "ListLike",
          "signature": "item-\u003efull-\u003efull",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike-Base.html#v:insert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003einsert\u003c/a\u003e\u003c/code\u003e, but with a custom comparison function \n\u003c/p\u003e",
          "module": "Data.ListLike.Base",
          "name": "insertBy",
          "package": "ListLike",
          "signature": "(item -\u003e item -\u003e Ordering) -\u003e item -\u003e full -\u003e full",
          "source": "src/Data-ListLike-Base.html#insertBy",
          "type": "method"
        },
        "index": {
          "description": "Like insert but with custom comparison function",
          "hierarchy": "Data ListLike Base",
          "module": "Data.ListLike.Base",
          "name": "insertBy",
          "normalized": "(a-\u003ea-\u003eOrdering)-\u003ea-\u003eb-\u003eb",
          "package": "ListLike",
          "partial": "By",
          "signature": "(item-\u003eitem-\u003eOrdering)-\u003eitem-\u003efull-\u003efull",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike-Base.html#v:insertBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList intersection: the set of elements that occur in both lists.\n         See also \u003ccode\u003e\u003ca\u003eintersectBy\u003c/a\u003e\u003c/code\u003e \n\u003c/p\u003e",
          "module": "Data.ListLike.Base",
          "name": "intersect",
          "package": "ListLike",
          "signature": "full -\u003e full -\u003e full",
          "source": "src/Data-ListLike-Base.html#intersect",
          "type": "method"
        },
        "index": {
          "description": "List intersection the set of elements that occur in both lists See also intersectBy",
          "hierarchy": "Data ListLike Base",
          "module": "Data.ListLike.Base",
          "name": "intersect",
          "normalized": "a-\u003ea-\u003ea",
          "package": "ListLike",
          "signature": "full-\u003efull-\u003efull",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike-Base.html#v:intersect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneric version of \u003ccode\u003e\u003ca\u003eintersect\u003c/a\u003e\u003c/code\u003e \n\u003c/p\u003e",
          "module": "Data.ListLike.Base",
          "name": "intersectBy",
          "package": "ListLike",
          "signature": "(item -\u003e item -\u003e Bool) -\u003e full -\u003e full -\u003e full",
          "source": "src/Data-ListLike-Base.html#intersectBy",
          "type": "method"
        },
        "index": {
          "description": "Generic version of intersect",
          "hierarchy": "Data ListLike Base",
          "module": "Data.ListLike.Base",
          "name": "intersectBy",
          "normalized": "(a-\u003ea-\u003eBool)-\u003eb-\u003eb-\u003eb",
          "package": "ListLike",
          "partial": "By",
          "signature": "(item-\u003eitem-\u003eBool)-\u003efull-\u003efull-\u003efull",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike-Base.html#v:intersectBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd an item between each element in the structure \n\u003c/p\u003e",
          "module": "Data.ListLike.Base",
          "name": "intersperse",
          "package": "ListLike",
          "signature": "item -\u003e full -\u003e full",
          "source": "src/Data-ListLike-Base.html#intersperse",
          "type": "method"
        },
        "index": {
          "description": "Add an item between each element in the structure",
          "hierarchy": "Data ListLike Base",
          "module": "Data.ListLike.Base",
          "name": "intersperse",
          "normalized": "a-\u003eb-\u003eb",
          "package": "ListLike",
          "signature": "item-\u003efull-\u003efull",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike-Base.html#v:intersperse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrue when the first list is wholly containted within the second \n\u003c/p\u003e",
          "module": "Data.ListLike.Base",
          "name": "isInfixOf",
          "package": "ListLike",
          "signature": "full -\u003e full -\u003e Bool",
          "source": "src/Data-ListLike-Base.html#isInfixOf",
          "type": "method"
        },
        "index": {
          "description": "True when the first list is wholly containted within the second",
          "hierarchy": "Data ListLike Base",
          "module": "Data.ListLike.Base",
          "name": "isInfixOf",
          "normalized": "a-\u003ea-\u003eBool",
          "package": "ListLike",
          "partial": "Infix Of",
          "signature": "full-\u003efull-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike-Base.html#v:isInfixOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrue when the first list is at the beginning of the second. \n\u003c/p\u003e",
          "module": "Data.ListLike.Base",
          "name": "isPrefixOf",
          "package": "ListLike",
          "signature": "full -\u003e full -\u003e Bool",
          "source": "src/Data-ListLike-Base.html#isPrefixOf",
          "type": "method"
        },
        "index": {
          "description": "True when the first list is at the beginning of the second",
          "hierarchy": "Data ListLike Base",
          "module": "Data.ListLike.Base",
          "name": "isPrefixOf",
          "normalized": "a-\u003ea-\u003eBool",
          "package": "ListLike",
          "partial": "Prefix Of",
          "signature": "full-\u003efull-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike-Base.html#v:isPrefixOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrue when the first list is at the beginning of the second. \n\u003c/p\u003e",
          "module": "Data.ListLike.Base",
          "name": "isSuffixOf",
          "package": "ListLike",
          "signature": "full -\u003e full -\u003e Bool",
          "source": "src/Data-ListLike-Base.html#isSuffixOf",
          "type": "method"
        },
        "index": {
          "description": "True when the first list is at the beginning of the second",
          "hierarchy": "Data ListLike Base",
          "module": "Data.ListLike.Base",
          "name": "isSuffixOf",
          "normalized": "a-\u003ea-\u003eBool",
          "package": "ListLike",
          "partial": "Suffix Of",
          "signature": "full-\u003efull-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike-Base.html#v:isSuffixOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn infinite list of repeated calls of the function to args \n\u003c/p\u003e",
          "module": "Data.ListLike.Base",
          "name": "iterate",
          "package": "ListLike",
          "signature": "(item -\u003e item) -\u003e item -\u003e full",
          "source": "src/Data-ListLike-Base.html#iterate",
          "type": "method"
        },
        "index": {
          "description": "An infinite list of repeated calls of the function to args",
          "hierarchy": "Data ListLike Base",
          "module": "Data.ListLike.Base",
          "name": "iterate",
          "normalized": "(a-\u003ea)-\u003ea-\u003eb",
          "package": "ListLike",
          "signature": "(item-\u003eitem)-\u003eitem-\u003efull",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike-Base.html#v:iterate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtracts the last element of a \u003ccode\u003e\u003ca\u003eListLike\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "Data.ListLike.Base",
          "name": "last",
          "package": "ListLike",
          "signature": "full -\u003e item",
          "source": "src/Data-ListLike-Base.html#last",
          "type": "method"
        },
        "index": {
          "description": "Extracts the last element of ListLike",
          "hierarchy": "Data ListLike Base",
          "module": "Data.ListLike.Base",
          "name": "last",
          "normalized": "a-\u003eb",
          "package": "ListLike",
          "signature": "full-\u003eitem",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike-Base.html#v:last"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLength of the list.  See also \u003ccode\u003e\u003ca\u003egenericLength\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "Data.ListLike.Base",
          "name": "length",
          "package": "ListLike",
          "signature": "full -\u003e Int",
          "source": "src/Data-ListLike-Base.html#length",
          "type": "method"
        },
        "index": {
          "description": "Length of the list See also genericLength",
          "hierarchy": "Data ListLike Base",
          "module": "Data.ListLike.Base",
          "name": "length",
          "normalized": "a-\u003eInt",
          "package": "ListLike",
          "signature": "full-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike-Base.html#v:length"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a function to each element, returning any other\n         valid \u003ccode\u003e\u003ca\u003eListLike\u003c/a\u003e\u003c/code\u003e.  \u003ccode\u003e\u003ca\u003erigidMap\u003c/a\u003e\u003c/code\u003e will always be at least\n         as fast, if not faster, than this function and is recommended\n         if it will work for your purposes.  See also \u003ccode\u003e\u003ca\u003emapM\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "Data.ListLike.Base",
          "name": "map",
          "package": "ListLike",
          "signature": "(item -\u003e item') -\u003e full -\u003e full'",
          "source": "src/Data-ListLike-Base.html#map",
          "type": "method"
        },
        "index": {
          "description": "Apply function to each element returning any other valid ListLike rigidMap will always be at least as fast if not faster than this function and is recommended if it will work for your purposes See also mapM",
          "hierarchy": "Data ListLike Base",
          "module": "Data.ListLike.Base",
          "name": "map",
          "normalized": "(a-\u003eb)-\u003ec-\u003ed",
          "package": "ListLike",
          "signature": "(item-\u003eitem')-\u003efull-\u003efull'",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike-Base.html#v:map"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA map in monad space.  Same as \u003ccode\u003e\u003ccode\u003e\u003ca\u003esequence\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e \n\u003c/p\u003e\u003cp\u003eSee also \u003ccode\u003e\u003ca\u003erigidMapM\u003c/a\u003e\u003c/code\u003e \n\u003c/p\u003e",
          "module": "Data.ListLike.Base",
          "name": "mapM",
          "package": "ListLike",
          "signature": "(item -\u003e m item') -\u003e full -\u003e m full'",
          "source": "src/Data-ListLike-Base.html#mapM",
          "type": "method"
        },
        "index": {
          "description": "map in monad space Same as sequence map See also rigidMapM",
          "hierarchy": "Data ListLike Base",
          "module": "Data.ListLike.Base",
          "name": "mapM",
          "normalized": "(a-\u003eb c)-\u003ed-\u003eb e",
          "package": "ListLike",
          "signature": "(item-\u003em item')-\u003efull-\u003em full'",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike-Base.html#v:mapM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe maximum value of the list \n\u003c/p\u003e",
          "module": "Data.ListLike.Base",
          "name": "maximum",
          "package": "ListLike",
          "signature": "full -\u003e item",
          "source": "src/Data-ListLike-Base.html#maximum",
          "type": "method"
        },
        "index": {
          "description": "The maximum value of the list",
          "hierarchy": "Data ListLike Base",
          "module": "Data.ListLike.Base",
          "name": "maximum",
          "normalized": "a-\u003eb",
          "package": "ListLike",
          "signature": "full-\u003eitem",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike-Base.html#v:maximum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe minimum value of the list \n\u003c/p\u003e",
          "module": "Data.ListLike.Base",
          "name": "minimum",
          "package": "ListLike",
          "signature": "full -\u003e item",
          "source": "src/Data-ListLike-Base.html#minimum",
          "type": "method"
        },
        "index": {
          "description": "The minimum value of the list",
          "hierarchy": "Data ListLike Base",
          "module": "Data.ListLike.Base",
          "name": "minimum",
          "normalized": "a-\u003eb",
          "package": "ListLike",
          "signature": "full-\u003eitem",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike-Base.html#v:minimum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrue if the item does not occur in the list \n\u003c/p\u003e",
          "module": "Data.ListLike.Base",
          "name": "notElem",
          "package": "ListLike",
          "signature": "item -\u003e full -\u003e Bool",
          "source": "src/Data-ListLike-Base.html#notElem",
          "type": "method"
        },
        "index": {
          "description": "True if the item does not occur in the list",
          "hierarchy": "Data ListLike Base",
          "module": "Data.ListLike.Base",
          "name": "notElem",
          "normalized": "a-\u003eb-\u003eBool",
          "package": "ListLike",
          "partial": "Elem",
          "signature": "item-\u003efull-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike-Base.html#v:notElem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemoves duplicate elements from the list.  See also \u003ccode\u003e\u003ca\u003enubBy\u003c/a\u003e\u003c/code\u003e \n\u003c/p\u003e",
          "module": "Data.ListLike.Base",
          "name": "nub",
          "package": "ListLike",
          "signature": "full -\u003e full",
          "source": "src/Data-ListLike-Base.html#nub",
          "type": "method"
        },
        "index": {
          "description": "Removes duplicate elements from the list See also nubBy",
          "hierarchy": "Data ListLike Base",
          "module": "Data.ListLike.Base",
          "name": "nub",
          "normalized": "a-\u003ea",
          "package": "ListLike",
          "signature": "full-\u003efull",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike-Base.html#v:nub"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneric version of \u003ccode\u003e\u003ca\u003enub\u003c/a\u003e\u003c/code\u003e \n\u003c/p\u003e",
          "module": "Data.ListLike.Base",
          "name": "nubBy",
          "package": "ListLike",
          "signature": "(item -\u003e item -\u003e Bool) -\u003e full -\u003e full",
          "source": "src/Data-ListLike-Base.html#nubBy",
          "type": "method"
        },
        "index": {
          "description": "Generic version of nub",
          "hierarchy": "Data ListLike Base",
          "module": "Data.ListLike.Base",
          "name": "nubBy",
          "normalized": "(a-\u003ea-\u003eBool)-\u003eb-\u003eb",
          "package": "ListLike",
          "partial": "By",
          "signature": "(item-\u003eitem-\u003eBool)-\u003efull-\u003efull",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike-Base.html#v:nubBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTests whether the list is empty. \n\u003c/p\u003e",
          "module": "Data.ListLike.Base",
          "name": "null",
          "package": "ListLike",
          "signature": "full -\u003e Bool",
          "source": "src/Data-ListLike-Base.html#null",
          "type": "method"
        },
        "index": {
          "description": "Tests whether the list is empty",
          "hierarchy": "Data ListLike Base",
          "module": "Data.ListLike.Base",
          "name": "null",
          "normalized": "a-\u003eBool",
          "package": "ListLike",
          "signature": "full-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike-Base.html#v:null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the lists that do and do not satisfy the function.\n       Same as \u003ccode\u003e(\u003ccode\u003e\u003ca\u003efilter\u003c/a\u003e\u003c/code\u003e p xs, \u003ccode\u003e\u003ca\u003efilter\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003enot\u003c/a\u003e\u003c/code\u003e . p) xs)\u003c/code\u003e \n\u003c/p\u003e",
          "module": "Data.ListLike.Base",
          "name": "partition",
          "package": "ListLike",
          "signature": "(item -\u003e Bool) -\u003e full -\u003e (full, full)",
          "source": "src/Data-ListLike-Base.html#partition",
          "type": "method"
        },
        "index": {
          "description": "Returns the lists that do and do not satisfy the function Same as filter xs filter not xs",
          "hierarchy": "Data ListLike Base",
          "module": "Data.ListLike.Base",
          "name": "partition",
          "normalized": "(a-\u003eBool)-\u003eb-\u003e(b,b)",
          "package": "ListLike",
          "signature": "(item-\u003eBool)-\u003efull-\u003e(full,full)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike-Base.html#v:partition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn infinite list where each element is the same \n\u003c/p\u003e",
          "module": "Data.ListLike.Base",
          "name": "repeat",
          "package": "ListLike",
          "signature": "item -\u003e full",
          "source": "src/Data-ListLike-Base.html#repeat",
          "type": "method"
        },
        "index": {
          "description": "An infinite list where each element is the same",
          "hierarchy": "Data ListLike Base",
          "module": "Data.ListLike.Base",
          "name": "repeat",
          "normalized": "a-\u003eb",
          "package": "ListLike",
          "signature": "item-\u003efull",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike-Base.html#v:repeat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a structure with the specified length with every element\n    set to the item passed in.  See also \u003ccode\u003e\u003ca\u003egenericReplicate\u003c/a\u003e\u003c/code\u003e \n\u003c/p\u003e",
          "module": "Data.ListLike.Base",
          "name": "replicate",
          "package": "ListLike",
          "signature": "Int -\u003e item -\u003e full",
          "source": "src/Data-ListLike-Base.html#replicate",
          "type": "method"
        },
        "index": {
          "description": "Generate structure with the specified length with every element set to the item passed in See also genericReplicate",
          "hierarchy": "Data ListLike Base",
          "module": "Data.ListLike.Base",
          "name": "replicate",
          "normalized": "Int-\u003ea-\u003eb",
          "package": "ListLike",
          "signature": "Int-\u003eitem-\u003efull",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike-Base.html#v:replicate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReverse the elements in a list. \n\u003c/p\u003e",
          "module": "Data.ListLike.Base",
          "name": "reverse",
          "package": "ListLike",
          "signature": "full -\u003e full",
          "source": "src/Data-ListLike-Base.html#reverse",
          "type": "method"
        },
        "index": {
          "description": "Reverse the elements in list",
          "hierarchy": "Data ListLike Base",
          "module": "Data.ListLike.Base",
          "name": "reverse",
          "normalized": "a-\u003ea",
          "package": "ListLike",
          "signature": "full-\u003efull",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike-Base.html#v:reverse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003econcatMap\u003c/a\u003e\u003c/code\u003e, but without the possibility of changing\n         the type of the item.  This can have performance benefits\n         for some things such as ByteString. \n\u003c/p\u003e",
          "module": "Data.ListLike.Base",
          "name": "rigidConcatMap",
          "package": "ListLike",
          "signature": "(item -\u003e full) -\u003e full -\u003e full",
          "source": "src/Data-ListLike-Base.html#rigidConcatMap",
          "type": "method"
        },
        "index": {
          "description": "Like concatMap but without the possibility of changing the type of the item This can have performance benefits for some things such as ByteString",
          "hierarchy": "Data ListLike Base",
          "module": "Data.ListLike.Base",
          "name": "rigidConcatMap",
          "normalized": "(a-\u003eb)-\u003eb-\u003eb",
          "package": "ListLike",
          "partial": "Concat Map",
          "signature": "(item-\u003efull)-\u003efull-\u003efull",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike-Base.html#v:rigidConcatMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e, but without the possibility of changing the type of\n       the item.  This can have performance benefits for things such as\n       ByteStrings, since it will let the ByteString use its native\n       low-level map implementation. \n\u003c/p\u003e",
          "module": "Data.ListLike.Base",
          "name": "rigidMap",
          "package": "ListLike",
          "signature": "(item -\u003e item) -\u003e full -\u003e full",
          "source": "src/Data-ListLike-Base.html#rigidMap",
          "type": "method"
        },
        "index": {
          "description": "Like map but without the possibility of changing the type of the item This can have performance benefits for things such as ByteStrings since it will let the ByteString use its native low-level map implementation",
          "hierarchy": "Data ListLike Base",
          "module": "Data.ListLike.Base",
          "name": "rigidMap",
          "normalized": "(a-\u003ea)-\u003eb-\u003eb",
          "package": "ListLike",
          "partial": "Map",
          "signature": "(item-\u003eitem)-\u003efull-\u003efull",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike-Base.html#v:rigidMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003emapM\u003c/a\u003e\u003c/code\u003e, but without the possibility of changing the type\n         of the item.  This can have performance benefits with some types. \n\u003c/p\u003e",
          "module": "Data.ListLike.Base",
          "name": "rigidMapM",
          "package": "ListLike",
          "signature": "(item -\u003e m item) -\u003e full -\u003e m full",
          "source": "src/Data-ListLike-Base.html#rigidMapM",
          "type": "method"
        },
        "index": {
          "description": "Like mapM but without the possibility of changing the type of the item This can have performance benefits with some types",
          "hierarchy": "Data ListLike Base",
          "module": "Data.ListLike.Base",
          "name": "rigidMapM",
          "normalized": "(a-\u003eb a)-\u003ec-\u003eb c",
          "package": "ListLike",
          "partial": "Map",
          "signature": "(item-\u003em item)-\u003efull-\u003em full",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike-Base.html#v:rigidMapM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluate each action in the sequence and collect the results \n\u003c/p\u003e",
          "module": "Data.ListLike.Base",
          "name": "sequence",
          "package": "ListLike",
          "signature": "fullinp -\u003e m full",
          "source": "src/Data-ListLike-Base.html#sequence",
          "type": "method"
        },
        "index": {
          "description": "Evaluate each action in the sequence and collect the results",
          "hierarchy": "Data ListLike Base",
          "module": "Data.ListLike.Base",
          "name": "sequence",
          "normalized": "a-\u003eb c",
          "package": "ListLike",
          "signature": "fullinp-\u003em full",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike-Base.html#v:sequence"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluate each action, ignoring the results.\n   Same as \u003ccode\u003e\u003ccode\u003e\u003ca\u003emapM_\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "[\"Data.ListLike.Base\",\"Data.ListLike.FoldableLL\",\"Data.ListLike.Utils\",\"Data.ListLike\"]",
          "name": "sequence_",
          "package": "ListLike",
          "signature": "full -\u003e m ()",
          "source": "src/Data-ListLike-FoldableLL.html#sequence_",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ListLike/docs/Data-ListLike-Base.html#v:sequence_\",\"http://hackage.haskell.org/package/ListLike/docs/Data-ListLike-FoldableLL.html#v:sequence_\",\"http://hackage.haskell.org/package/ListLike/docs/Data-ListLike-Utils.html#v:sequence_\",\"http://hackage.haskell.org/package/ListLike/docs/Data-ListLike.html#v:sequence_\"]"
        },
        "index": {
          "description": "Evaluate each action ignoring the results Same as mapM id",
          "hierarchy": "Data ListLike Base",
          "module": "Data.ListLike.Base",
          "name": "sequence_",
          "normalized": "a-\u003eb()",
          "package": "ListLike",
          "signature": "full-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike-Base.html#v:sequence_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a single-element list out of an element \n\u003c/p\u003e",
          "module": "Data.ListLike.Base",
          "name": "singleton",
          "package": "ListLike",
          "signature": "item -\u003e full",
          "source": "src/Data-ListLike-Base.html#singleton",
          "type": "method"
        },
        "index": {
          "description": "Creates single-element list out of an element",
          "hierarchy": "Data ListLike Base",
          "module": "Data.ListLike.Base",
          "name": "singleton",
          "normalized": "a-\u003eb",
          "package": "ListLike",
          "signature": "item-\u003efull",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike-Base.html#v:singleton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdds an element to the *end* of a \u003ccode\u003e\u003ca\u003eListLike\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "Data.ListLike.Base",
          "name": "snoc",
          "package": "ListLike",
          "signature": "full -\u003e item -\u003e full",
          "source": "src/Data-ListLike-Base.html#snoc",
          "type": "method"
        },
        "index": {
          "description": "Adds an element to the end of ListLike",
          "hierarchy": "Data ListLike Base",
          "module": "Data.ListLike.Base",
          "name": "snoc",
          "normalized": "a-\u003eb-\u003ea",
          "package": "ListLike",
          "signature": "full-\u003eitem-\u003efull",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike-Base.html#v:snoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSorts the list.  On data types that do not preserve ordering,\n         or enforce their own ordering, the result may not be what\n         you expect.  See also \u003ccode\u003e\u003ca\u003esortBy\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "Data.ListLike.Base",
          "name": "sort",
          "package": "ListLike",
          "signature": "full -\u003e full",
          "source": "src/Data-ListLike-Base.html#sort",
          "type": "method"
        },
        "index": {
          "description": "Sorts the list On data types that do not preserve ordering or enforce their own ordering the result may not be what you expect See also sortBy",
          "hierarchy": "Data ListLike Base",
          "module": "Data.ListLike.Base",
          "name": "sort",
          "normalized": "a-\u003ea",
          "package": "ListLike",
          "signature": "full-\u003efull",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike-Base.html#v:sort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSort function taking a custom comparison function \n\u003c/p\u003e",
          "module": "Data.ListLike.Base",
          "name": "sortBy",
          "package": "ListLike",
          "signature": "(item -\u003e item -\u003e Ordering) -\u003e full -\u003e full",
          "source": "src/Data-ListLike-Base.html#sortBy",
          "type": "method"
        },
        "index": {
          "description": "Sort function taking custom comparison function",
          "hierarchy": "Data ListLike Base",
          "module": "Data.ListLike.Base",
          "name": "sortBy",
          "normalized": "(a-\u003ea-\u003eOrdering)-\u003eb-\u003eb",
          "package": "ListLike",
          "partial": "By",
          "signature": "(item-\u003eitem-\u003eOrdering)-\u003efull-\u003efull",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike-Base.html#v:sortBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe equivalent of \u003ccode\u003e(\u003ccode\u003e\u003ca\u003etakeWhile\u003c/a\u003e\u003c/code\u003e f xs, \u003ccode\u003e\u003ca\u003edropWhile\u003c/a\u003e\u003c/code\u003e f xs)\u003c/code\u003e \n\u003c/p\u003e",
          "module": "Data.ListLike.Base",
          "name": "span",
          "package": "ListLike",
          "signature": "(item -\u003e Bool) -\u003e full -\u003e (full, full)",
          "source": "src/Data-ListLike-Base.html#span",
          "type": "method"
        },
        "index": {
          "description": "The equivalent of takeWhile xs dropWhile xs",
          "hierarchy": "Data ListLike Base",
          "module": "Data.ListLike.Base",
          "name": "span",
          "normalized": "(a-\u003eBool)-\u003eb-\u003e(b,b)",
          "package": "ListLike",
          "signature": "(item-\u003eBool)-\u003efull-\u003e(full,full)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike-Base.html#v:span"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEquivalent to \u003ccode\u003e(\u003ccode\u003e\u003ca\u003etake\u003c/a\u003e\u003c/code\u003e n xs, \u003ccode\u003e\u003ca\u003edrop\u003c/a\u003e\u003c/code\u003e n xs)\u003c/code\u003e.  See also \u003ccode\u003e\u003ca\u003egenericSplitAt\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "Data.ListLike.Base",
          "name": "splitAt",
          "package": "ListLike",
          "signature": "Int -\u003e full -\u003e (full, full)",
          "source": "src/Data-ListLike-Base.html#splitAt",
          "type": "method"
        },
        "index": {
          "description": "Equivalent to take xs drop xs See also genericSplitAt",
          "hierarchy": "Data ListLike Base",
          "module": "Data.ListLike.Base",
          "name": "splitAt",
          "normalized": "Int-\u003ea-\u003e(a,a)",
          "package": "ListLike",
          "partial": "At",
          "signature": "Int-\u003efull-\u003e(full,full)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike-Base.html#v:splitAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGives all elements after the head. \n\u003c/p\u003e",
          "module": "Data.ListLike.Base",
          "name": "tail",
          "package": "ListLike",
          "signature": "full -\u003e full",
          "source": "src/Data-ListLike-Base.html#tail",
          "type": "method"
        },
        "index": {
          "description": "Gives all elements after the head",
          "hierarchy": "Data ListLike Base",
          "module": "Data.ListLike.Base",
          "name": "tail",
          "normalized": "a-\u003ea",
          "package": "ListLike",
          "signature": "full-\u003efull",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike-Base.html#v:tail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll final segnemts, longest first \n\u003c/p\u003e",
          "module": "Data.ListLike.Base",
          "name": "tails",
          "package": "ListLike",
          "signature": "full -\u003e full'",
          "source": "src/Data-ListLike-Base.html#tails",
          "type": "method"
        },
        "index": {
          "description": "All final segnemts longest first",
          "hierarchy": "Data ListLike Base",
          "module": "Data.ListLike.Base",
          "name": "tails",
          "normalized": "a-\u003eb",
          "package": "ListLike",
          "signature": "full-\u003efull'",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike-Base.html#v:tails"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTakes the first n elements of the list.  See also \u003ccode\u003e\u003ca\u003egenericTake\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "Data.ListLike.Base",
          "name": "take",
          "package": "ListLike",
          "signature": "Int -\u003e full -\u003e full",
          "source": "src/Data-ListLike-Base.html#take",
          "type": "method"
        },
        "index": {
          "description": "Takes the first elements of the list See also genericTake",
          "hierarchy": "Data ListLike Base",
          "module": "Data.ListLike.Base",
          "name": "take",
          "normalized": "Int-\u003ea-\u003ea",
          "package": "ListLike",
          "signature": "Int-\u003efull-\u003efull",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike-Base.html#v:take"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns all elements at start of list that satisfy the function. \n\u003c/p\u003e",
          "module": "Data.ListLike.Base",
          "name": "takeWhile",
          "package": "ListLike",
          "signature": "(item -\u003e Bool) -\u003e full -\u003e full",
          "source": "src/Data-ListLike-Base.html#takeWhile",
          "type": "method"
        },
        "index": {
          "description": "Returns all elements at start of list that satisfy the function",
          "hierarchy": "Data ListLike Base",
          "module": "Data.ListLike.Base",
          "name": "takeWhile",
          "normalized": "(a-\u003eBool)-\u003eb-\u003eb",
          "package": "ListLike",
          "partial": "While",
          "signature": "(item-\u003eBool)-\u003efull-\u003efull",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike-Base.html#v:takeWhile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts the structure to a list.  This is logically equivolent\n         to \u003ccode\u003e\u003ca\u003efromListLike\u003c/a\u003e\u003c/code\u003e, but may have a more optimized implementation. \n\u003c/p\u003e",
          "module": "Data.ListLike.Base",
          "name": "toList",
          "package": "ListLike",
          "signature": "full -\u003e [item]",
          "source": "src/Data-ListLike-Base.html#toList",
          "type": "method"
        },
        "index": {
          "description": "Converts the structure to list This is logically equivolent to fromListLike but may have more optimized implementation",
          "hierarchy": "Data ListLike Base",
          "module": "Data.ListLike.Base",
          "name": "toList",
          "normalized": "a-\u003e[b]",
          "package": "ListLike",
          "partial": "List",
          "signature": "full-\u003e[item]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike-Base.html#v:toList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList union: the set of elements that occur in either list.\n         Duplicate elements in the first list will remain duplicate.\n         See also \u003ccode\u003e\u003ca\u003eunionBy\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "Data.ListLike.Base",
          "name": "union",
          "package": "ListLike",
          "signature": "full -\u003e full -\u003e full",
          "source": "src/Data-ListLike-Base.html#union",
          "type": "method"
        },
        "index": {
          "description": "List union the set of elements that occur in either list Duplicate elements in the first list will remain duplicate See also unionBy",
          "hierarchy": "Data ListLike Base",
          "module": "Data.ListLike.Base",
          "name": "union",
          "normalized": "a-\u003ea-\u003ea",
          "package": "ListLike",
          "signature": "full-\u003efull-\u003efull",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike-Base.html#v:union"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneric version of \u003ccode\u003e\u003ca\u003eunion\u003c/a\u003e\u003c/code\u003e \n\u003c/p\u003e",
          "module": "Data.ListLike.Base",
          "name": "unionBy",
          "package": "ListLike",
          "signature": "(item -\u003e item -\u003e Bool) -\u003e full -\u003e full -\u003e full",
          "source": "src/Data-ListLike-Base.html#unionBy",
          "type": "method"
        },
        "index": {
          "description": "Generic version of union",
          "hierarchy": "Data ListLike Base",
          "module": "Data.ListLike.Base",
          "name": "unionBy",
          "normalized": "(a-\u003ea-\u003eBool)-\u003eb-\u003eb-\u003eb",
          "package": "ListLike",
          "partial": "By",
          "signature": "(item-\u003eitem-\u003eBool)-\u003efull-\u003efull-\u003efull",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike-Base.html#v:unionBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTakes two lists and returns a list of corresponding pairs. \n\u003c/p\u003e",
          "module": "[\"Data.ListLike.Base\",\"Data.ListLike.Utils\",\"Data.ListLike\"]",
          "name": "zip",
          "package": "ListLike",
          "signature": "full -\u003e fullb -\u003e result",
          "source": "src/Data-ListLike-Base.html#zip",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ListLike/docs/Data-ListLike-Base.html#v:zip\",\"http://hackage.haskell.org/package/ListLike/docs/Data-ListLike-Utils.html#v:zip\",\"http://hackage.haskell.org/package/ListLike/docs/Data-ListLike.html#v:zip\"]"
        },
        "index": {
          "description": "Takes two lists and returns list of corresponding pairs",
          "hierarchy": "Data ListLike Base",
          "module": "Data.ListLike.Base",
          "name": "zip",
          "normalized": "a-\u003eb-\u003ec",
          "package": "ListLike",
          "signature": "full-\u003efullb-\u003eresult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike-Base.html#v:zip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTakes two lists and combines them with a custom combining function \n\u003c/p\u003e",
          "module": "[\"Data.ListLike.Base\",\"Data.ListLike.Utils\",\"Data.ListLike\"]",
          "name": "zipWith",
          "package": "ListLike",
          "signature": "(item -\u003e itemb -\u003e resultitem) -\u003e full -\u003e fullb -\u003e result",
          "source": "src/Data-ListLike-Base.html#zipWith",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ListLike/docs/Data-ListLike-Base.html#v:zipWith\",\"http://hackage.haskell.org/package/ListLike/docs/Data-ListLike-Utils.html#v:zipWith\",\"http://hackage.haskell.org/package/ListLike/docs/Data-ListLike.html#v:zipWith\"]"
        },
        "index": {
          "description": "Takes two lists and combines them with custom combining function",
          "hierarchy": "Data ListLike Base",
          "module": "Data.ListLike.Base",
          "name": "zipWith",
          "normalized": "(a-\u003eb-\u003ec)-\u003ed-\u003ee-\u003ef",
          "package": "ListLike",
          "partial": "With",
          "signature": "(item-\u003eitemb-\u003eresultitem)-\u003efull-\u003efullb-\u003eresult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike-Base.html#v:zipWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eNewtype wrapper for ByteString to enable a Char-based interface\nRe-exported by \u003ca\u003eData.ListLike\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eWritten by John Lato, jwlato@gmail.com\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.ListLike.CharString",
          "name": "CharString",
          "package": "ListLike",
          "source": "src/Data-ListLike-CharString.html",
          "type": "module"
        },
        "index": {
          "description": "Newtype wrapper for ByteString to enable Char-based interface Re-exported by Data.ListLike Written by John Lato jwlato@gmail.com",
          "hierarchy": "Data ListLike CharString",
          "module": "Data.ListLike.CharString",
          "name": "CharString",
          "package": "ListLike",
          "partial": "Char String",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike-CharString.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNewtype wrapper around Data.ByteString.Char8.ByteString,\n   this allows for ListLike instances with Char elements.\n\u003c/p\u003e",
          "module": "Data.ListLike.CharString",
          "name": "CharString",
          "package": "ListLike",
          "source": "src/Data-ListLike-CharString.html#CharString",
          "type": "newtype"
        },
        "index": {
          "description": "Newtype wrapper around Data.ByteString.Char8.ByteString this allows for ListLike instances with Char elements",
          "hierarchy": "Data ListLike CharString",
          "module": "Data.ListLike.CharString",
          "name": "CharString",
          "package": "ListLike",
          "partial": "Char String",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike-CharString.html#t:CharString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNewtype wrapper around Data.ByteString.Lazy.Char8.ByteString,\n   this allows for ListLike instances with Char elements.\n\u003c/p\u003e",
          "module": "Data.ListLike.CharString",
          "name": "CharStringLazy",
          "package": "ListLike",
          "source": "src/Data-ListLike-CharString.html#CharStringLazy",
          "type": "newtype"
        },
        "index": {
          "description": "Newtype wrapper around Data.ByteString.Lazy.Char8.ByteString this allows for ListLike instances with Char elements",
          "hierarchy": "Data ListLike CharString",
          "module": "Data.ListLike.CharString",
          "name": "CharStringLazy",
          "package": "ListLike",
          "partial": "Char String Lazy",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike-CharString.html#t:CharStringLazy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.ListLike.CharString\",\"Data.ListLike\"]",
          "name": "CS",
          "package": "ListLike",
          "signature": "CS",
          "source": "src/Data-ListLike-CharString.html#CharString",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ListLike/docs/Data-ListLike-CharString.html#v:CS\",\"http://hackage.haskell.org/package/ListLike/docs/Data-ListLike.html#v:CS\"]"
        },
        "index": {
          "hierarchy": "Data ListLike CharString",
          "module": "Data.ListLike.CharString",
          "name": "CS",
          "package": "ListLike",
          "partial": "CS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike-CharString.html#v:CS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.ListLike.CharString\",\"Data.ListLike\"]",
          "name": "CSL",
          "package": "ListLike",
          "signature": "CSL",
          "source": "src/Data-ListLike-CharString.html#CharStringLazy",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ListLike/docs/Data-ListLike-CharString.html#v:CSL\",\"http://hackage.haskell.org/package/ListLike/docs/Data-ListLike.html#v:CSL\"]"
        },
        "index": {
          "hierarchy": "Data ListLike CharString",
          "module": "Data.ListLike.CharString",
          "name": "CSL",
          "package": "ListLike",
          "partial": "CSL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike-CharString.html#v:CSL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.ListLike.CharString\",\"Data.ListLike\"]",
          "name": "unCS",
          "package": "ListLike",
          "signature": "ByteString",
          "source": "src/Data-ListLike-CharString.html#CharString",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ListLike/docs/Data-ListLike-CharString.html#v:unCS\",\"http://hackage.haskell.org/package/ListLike/docs/Data-ListLike.html#v:unCS\"]"
        },
        "index": {
          "hierarchy": "Data ListLike CharString",
          "module": "Data.ListLike.CharString",
          "name": "unCS",
          "package": "ListLike",
          "partial": "CS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike-CharString.html#v:unCS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.ListLike.CharString\",\"Data.ListLike\"]",
          "name": "unCSL",
          "package": "ListLike",
          "signature": "ByteString",
          "source": "src/Data-ListLike-CharString.html#CharStringLazy",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ListLike/docs/Data-ListLike-CharString.html#v:unCSL\",\"http://hackage.haskell.org/package/ListLike/docs/Data-ListLike.html#v:unCSL\"]"
        },
        "index": {
          "hierarchy": "Data ListLike CharString",
          "module": "Data.ListLike.CharString",
          "name": "unCSL",
          "package": "ListLike",
          "partial": "CSL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike-CharString.html#v:unCSL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGeneric tools for data structures that can be folded.\n\u003c/p\u003e\u003cp\u003eWritten by John Goerzen, jgoerzen@complete.org\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.ListLike.FoldableLL",
          "name": "FoldableLL",
          "package": "ListLike",
          "source": "src/Data-ListLike-FoldableLL.html",
          "type": "module"
        },
        "index": {
          "description": "Generic tools for data structures that can be folded Written by John Goerzen jgoerzen@complete.org",
          "hierarchy": "Data ListLike FoldableLL",
          "module": "Data.ListLike.FoldableLL",
          "name": "FoldableLL",
          "package": "ListLike",
          "partial": "Foldable LL",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike-FoldableLL.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is the primary class for structures that are to be considered \nfoldable.  A minimum complete definition provides \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eInstances of \u003ccode\u003e\u003ca\u003eFoldableLL\u003c/a\u003e\u003c/code\u003e can be folded, and can be many and varied.\n\u003c/p\u003e\u003cp\u003eThese functions are used heavily in \u003ca\u003eData.ListLike\u003c/a\u003e. \n\u003c/p\u003e",
          "module": "Data.ListLike.FoldableLL",
          "name": "FoldableLL",
          "package": "ListLike",
          "source": "src/Data-ListLike-FoldableLL.html#FoldableLL",
          "type": "class"
        },
        "index": {
          "description": "This is the primary class for structures that are to be considered foldable minimum complete definition provides foldl and foldr Instances of FoldableLL can be folded and can be many and varied These functions are used heavily in Data.ListLike",
          "hierarchy": "Data ListLike FoldableLL",
          "module": "Data.ListLike.FoldableLL",
          "name": "FoldableLL",
          "package": "ListLike",
          "partial": "Foldable LL",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike-FoldableLL.html#t:FoldableLL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombine the elements of a structure using a monoid.\n     \u003ccode\u003e\u003ccode\u003e\u003ca\u003efold\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003efoldMap\u003c/a\u003e\u003c/code\u003e id\u003c/code\u003e \n\u003c/p\u003e",
          "module": "[\"Data.ListLike.FoldableLL\",\"Data.ListLike\"]",
          "name": "fold",
          "package": "ListLike",
          "signature": "full -\u003e item",
          "source": "src/Data-ListLike-FoldableLL.html#fold",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ListLike/docs/Data-ListLike-FoldableLL.html#v:fold\",\"http://hackage.haskell.org/package/ListLike/docs/Data-ListLike.html#v:fold\"]"
        },
        "index": {
          "description": "Combine the elements of structure using monoid fold foldMap id",
          "hierarchy": "Data ListLike FoldableLL",
          "module": "Data.ListLike.FoldableLL",
          "name": "fold",
          "normalized": "a-\u003eb",
          "package": "ListLike",
          "signature": "full-\u003eitem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike-FoldableLL.html#v:fold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMonadic version of left fold, similar to \u003ccode\u003e\u003ca\u003efoldM\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "Data.ListLike.FoldableLL",
          "name": "foldM",
          "package": "ListLike",
          "signature": "(a -\u003e item -\u003e m a) -\u003e a -\u003e full -\u003e m a",
          "source": "src/Data-ListLike-FoldableLL.html#foldM",
          "type": "function"
        },
        "index": {
          "description": "Monadic version of left fold similar to foldM",
          "hierarchy": "Data ListLike FoldableLL",
          "module": "Data.ListLike.FoldableLL",
          "name": "foldM",
          "normalized": "(a-\u003eb-\u003ec a)-\u003ea-\u003ed-\u003ec a",
          "package": "ListLike",
          "signature": "(a-\u003eitem-\u003em a)-\u003ea-\u003efull-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike-FoldableLL.html#v:foldM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap each element to a monoid, then combine the results \n\u003c/p\u003e",
          "module": "[\"Data.ListLike.FoldableLL\",\"Data.ListLike\"]",
          "name": "foldMap",
          "package": "ListLike",
          "signature": "(item -\u003e m) -\u003e full -\u003e m",
          "source": "src/Data-ListLike-FoldableLL.html#foldMap",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ListLike/docs/Data-ListLike-FoldableLL.html#v:foldMap\",\"http://hackage.haskell.org/package/ListLike/docs/Data-ListLike.html#v:foldMap\"]"
        },
        "index": {
          "description": "Map each element to monoid then combine the results",
          "hierarchy": "Data ListLike FoldableLL",
          "module": "Data.ListLike.FoldableLL",
          "name": "foldMap",
          "normalized": "(a-\u003eb)-\u003ec-\u003eb",
          "package": "ListLike",
          "partial": "Map",
          "signature": "(item-\u003em)-\u003efull-\u003em",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike-FoldableLL.html#v:foldMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLeft-associative fold \n\u003c/p\u003e",
          "module": "Data.ListLike.FoldableLL",
          "name": "foldl",
          "package": "ListLike",
          "signature": "(a -\u003e item -\u003e a) -\u003e a -\u003e full -\u003e a",
          "source": "src/Data-ListLike-FoldableLL.html#foldl",
          "type": "method"
        },
        "index": {
          "description": "Left-associative fold",
          "hierarchy": "Data ListLike FoldableLL",
          "module": "Data.ListLike.FoldableLL",
          "name": "foldl",
          "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003ec-\u003ea",
          "package": "ListLike",
          "signature": "(a-\u003eitem-\u003ea)-\u003ea-\u003efull-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike-FoldableLL.html#v:foldl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStrict version of \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "Data.ListLike.FoldableLL",
          "name": "foldl'",
          "package": "ListLike",
          "signature": "(a -\u003e item -\u003e a) -\u003e a -\u003e full -\u003e a",
          "source": "src/Data-ListLike-FoldableLL.html#foldl%27",
          "type": "method"
        },
        "index": {
          "description": "Strict version of foldl",
          "hierarchy": "Data ListLike FoldableLL",
          "module": "Data.ListLike.FoldableLL",
          "name": "foldl'",
          "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003ec-\u003ea",
          "package": "ListLike",
          "signature": "(a-\u003eitem-\u003ea)-\u003ea-\u003efull-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike-FoldableLL.html#v:foldl-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e with no base case.  Requires at least 1\n list element.\n\u003c/p\u003e",
          "module": "Data.ListLike.FoldableLL",
          "name": "foldl1",
          "package": "ListLike",
          "signature": "(item -\u003e item -\u003e item) -\u003e full -\u003e item",
          "source": "src/Data-ListLike-FoldableLL.html#foldl1",
          "type": "method"
        },
        "index": {
          "description": "variant of foldl with no base case Requires at least list element",
          "hierarchy": "Data ListLike FoldableLL",
          "module": "Data.ListLike.FoldableLL",
          "name": "foldl1",
          "normalized": "(a-\u003ea-\u003ea)-\u003eb-\u003ea",
          "package": "ListLike",
          "signature": "(item-\u003eitem-\u003eitem)-\u003efull-\u003eitem",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike-FoldableLL.html#v:foldl1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRight-associative fold \n\u003c/p\u003e",
          "module": "Data.ListLike.FoldableLL",
          "name": "foldr",
          "package": "ListLike",
          "signature": "(item -\u003e b -\u003e b) -\u003e b -\u003e full -\u003e b",
          "source": "src/Data-ListLike-FoldableLL.html#foldr",
          "type": "method"
        },
        "index": {
          "description": "Right-associative fold",
          "hierarchy": "Data ListLike FoldableLL",
          "module": "Data.ListLike.FoldableLL",
          "name": "foldr",
          "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003ec-\u003eb",
          "package": "ListLike",
          "signature": "(item-\u003eb-\u003eb)-\u003eb-\u003efull-\u003eb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike-FoldableLL.html#v:foldr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStrict version of \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.ListLike.FoldableLL",
          "name": "foldr'",
          "package": "ListLike",
          "signature": "(item -\u003e b -\u003e b) -\u003e b -\u003e full -\u003e b",
          "source": "src/Data-ListLike-FoldableLL.html#foldr%27",
          "type": "method"
        },
        "index": {
          "description": "Strict version of foldr",
          "hierarchy": "Data ListLike FoldableLL",
          "module": "Data.ListLike.FoldableLL",
          "name": "foldr'",
          "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003ec-\u003eb",
          "package": "ListLike",
          "signature": "(item-\u003eb-\u003eb)-\u003eb-\u003efull-\u003eb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike-FoldableLL.html#v:foldr-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e, but with no starting value\n\u003c/p\u003e",
          "module": "Data.ListLike.FoldableLL",
          "name": "foldr1",
          "package": "ListLike",
          "signature": "(item -\u003e item -\u003e item) -\u003e full -\u003e item",
          "source": "src/Data-ListLike-FoldableLL.html#foldr1",
          "type": "method"
        },
        "index": {
          "description": "Like foldr but with no starting value",
          "hierarchy": "Data ListLike FoldableLL",
          "module": "Data.ListLike.FoldableLL",
          "name": "foldr1",
          "normalized": "(a-\u003ea-\u003ea)-\u003eb-\u003ea",
          "package": "ListLike",
          "signature": "(item-\u003eitem-\u003eitem)-\u003efull-\u003eitem",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike-FoldableLL.html#v:foldr1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA map in monad space, discarding results. \n\u003c/p\u003e",
          "module": "[\"Data.ListLike.FoldableLL\",\"Data.ListLike\"]",
          "name": "mapM_",
          "package": "ListLike",
          "signature": "(item -\u003e m b) -\u003e full -\u003e m ()",
          "source": "src/Data-ListLike-FoldableLL.html#mapM_",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ListLike/docs/Data-ListLike-FoldableLL.html#v:mapM_\",\"http://hackage.haskell.org/package/ListLike/docs/Data-ListLike.html#v:mapM_\"]"
        },
        "index": {
          "description": "map in monad space discarding results",
          "hierarchy": "Data ListLike FoldableLL",
          "module": "Data.ListLike.FoldableLL",
          "name": "mapM_",
          "normalized": "(a-\u003eb c)-\u003ed-\u003eb()",
          "package": "ListLike",
          "signature": "(item-\u003em b)-\u003efull-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike-FoldableLL.html#v:mapM_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eString-like functions\n\u003c/p\u003e\u003cp\u003eWritten by John Goerzen, jgoerzen@complete.org\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.ListLike.IO",
          "name": "IO",
          "package": "ListLike",
          "source": "src/Data-ListLike-IO.html",
          "type": "module"
        },
        "index": {
          "description": "String-like functions Written by John Goerzen jgoerzen@complete.org",
          "hierarchy": "Data ListLike IO",
          "module": "Data.ListLike.IO",
          "name": "IO",
          "package": "ListLike",
          "partial": "IO",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike-IO.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn extension to \u003ccode\u003e\u003ca\u003eListLike\u003c/a\u003e\u003c/code\u003e for those data types that support\nI/O.  These functions mirror those in \u003ca\u003eSystem.IO\u003c/a\u003e for the most part.  They\nalso share the same names; see the comments in \u003ca\u003eData.ListLike\u003c/a\u003e for help\nimporting them.\n\u003c/p\u003e\u003cp\u003eNote that some types may not be capable of lazy reading or writing.\nTherefore, the usual semantics of \u003ca\u003eSystem.IO\u003c/a\u003e functions regarding laziness\nmay or may not be available from a particular implementation.\n\u003c/p\u003e\u003cp\u003eMinimal complete definition:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e hGetLine\n\u003c/li\u003e\u003cli\u003e hGetContents\n\u003c/li\u003e\u003cli\u003e hGet\n\u003c/li\u003e\u003cli\u003e hGetNonBlocking\n\u003c/li\u003e\u003cli\u003e hPutStr\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.ListLike.IO",
          "name": "ListLikeIO",
          "package": "ListLike",
          "source": "src/Data-ListLike-IO.html#ListLikeIO",
          "type": "class"
        },
        "index": {
          "description": "An extension to ListLike for those data types that support These functions mirror those in System.IO for the most part They also share the same names see the comments in Data.ListLike for help importing them Note that some types may not be capable of lazy reading or writing Therefore the usual semantics of System.IO functions regarding laziness may or may not be available from particular implementation Minimal complete definition hGetLine hGetContents hGet hGetNonBlocking hPutStr",
          "hierarchy": "Data ListLike IO",
          "module": "Data.ListLike.IO",
          "name": "ListLikeIO",
          "package": "ListLike",
          "partial": "List Like IO",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike-IO.html#t:ListLikeIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAppend data to file.\n\u003c/p\u003e",
          "module": "Data.ListLike.IO",
          "name": "appendFile",
          "package": "ListLike",
          "signature": "FilePath -\u003e full -\u003e IO ()",
          "source": "src/Data-ListLike-IO.html#appendFile",
          "type": "method"
        },
        "index": {
          "description": "Append data to file",
          "hierarchy": "Data ListLike IO",
          "module": "Data.ListLike.IO",
          "name": "appendFile",
          "normalized": "FilePath-\u003ea-\u003eIO()",
          "package": "ListLike",
          "partial": "File",
          "signature": "FilePath-\u003efull-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike-IO.html#v:appendFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead entire content from stdin.  See \u003ccode\u003e\u003ca\u003ehGetContents\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.ListLike.IO",
          "name": "getContents",
          "package": "ListLike",
          "signature": "IO full",
          "source": "src/Data-ListLike-IO.html#getContents",
          "type": "method"
        },
        "index": {
          "description": "Read entire content from stdin See hGetContents",
          "hierarchy": "Data ListLike IO",
          "module": "Data.ListLike.IO",
          "name": "getContents",
          "package": "ListLike",
          "partial": "Contents",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike-IO.html#v:getContents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead one line\n\u003c/p\u003e",
          "module": "Data.ListLike.IO",
          "name": "getLine",
          "package": "ListLike",
          "signature": "IO full",
          "source": "src/Data-ListLike-IO.html#getLine",
          "type": "method"
        },
        "index": {
          "description": "Read one line",
          "hierarchy": "Data ListLike IO",
          "module": "Data.ListLike.IO",
          "name": "getLine",
          "package": "ListLike",
          "partial": "Line",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike-IO.html#v:getLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead specified number of bytes.  See \u003ccode\u003e\u003ca\u003ehGet\u003c/a\u003e\u003c/code\u003e for\n particular semantics.\n\u003c/p\u003e",
          "module": "Data.ListLike.IO",
          "name": "hGet",
          "package": "ListLike",
          "signature": "Handle -\u003e Int -\u003e IO full",
          "source": "src/Data-ListLike-IO.html#hGet",
          "type": "method"
        },
        "index": {
          "description": "Read specified number of bytes See hGet for particular semantics",
          "hierarchy": "Data ListLike IO",
          "module": "Data.ListLike.IO",
          "name": "hGet",
          "normalized": "Handle-\u003eInt-\u003eIO a",
          "package": "ListLike",
          "partial": "Get",
          "signature": "Handle-\u003eInt-\u003eIO full",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike-IO.html#v:hGet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead entire handle contents.  May be done lazily like\n \u003ccode\u003e\u003ca\u003ehGetContents\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.ListLike.IO",
          "name": "hGetContents",
          "package": "ListLike",
          "signature": "Handle -\u003e IO full",
          "source": "src/Data-ListLike-IO.html#hGetContents",
          "type": "method"
        },
        "index": {
          "description": "Read entire handle contents May be done lazily like hGetContents",
          "hierarchy": "Data ListLike IO",
          "module": "Data.ListLike.IO",
          "name": "hGetContents",
          "normalized": "Handle-\u003eIO a",
          "package": "ListLike",
          "partial": "Get Contents",
          "signature": "Handle-\u003eIO full",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike-IO.html#v:hGetContents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReads a line from the specified handle \n\u003c/p\u003e",
          "module": "Data.ListLike.IO",
          "name": "hGetLine",
          "package": "ListLike",
          "signature": "Handle -\u003e IO full",
          "source": "src/Data-ListLike-IO.html#hGetLine",
          "type": "method"
        },
        "index": {
          "description": "Reads line from the specified handle",
          "hierarchy": "Data ListLike IO",
          "module": "Data.ListLike.IO",
          "name": "hGetLine",
          "normalized": "Handle-\u003eIO a",
          "package": "ListLike",
          "partial": "Get Line",
          "signature": "Handle-\u003eIO full",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike-IO.html#v:hGetLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNon-blocking read.  See \u003ccode\u003e\u003ca\u003ehGetNonBlocking\u003c/a\u003e\u003c/code\u003e for more.\n\u003c/p\u003e",
          "module": "Data.ListLike.IO",
          "name": "hGetNonBlocking",
          "package": "ListLike",
          "signature": "Handle -\u003e Int -\u003e IO full",
          "source": "src/Data-ListLike-IO.html#hGetNonBlocking",
          "type": "method"
        },
        "index": {
          "description": "Non-blocking read See hGetNonBlocking for more",
          "hierarchy": "Data ListLike IO",
          "module": "Data.ListLike.IO",
          "name": "hGetNonBlocking",
          "normalized": "Handle-\u003eInt-\u003eIO a",
          "package": "ListLike",
          "partial": "Get Non Blocking",
          "signature": "Handle-\u003eInt-\u003eIO full",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike-IO.html#v:hGetNonBlocking"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWriting entire data.\n\u003c/p\u003e",
          "module": "Data.ListLike.IO",
          "name": "hPutStr",
          "package": "ListLike",
          "signature": "Handle -\u003e full -\u003e IO ()",
          "source": "src/Data-ListLike-IO.html#hPutStr",
          "type": "method"
        },
        "index": {
          "description": "Writing entire data",
          "hierarchy": "Data ListLike IO",
          "module": "Data.ListLike.IO",
          "name": "hPutStr",
          "normalized": "Handle-\u003ea-\u003eIO()",
          "package": "ListLike",
          "partial": "Put Str",
          "signature": "Handle-\u003efull-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike-IO.html#v:hPutStr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite data plus newline character.\n\u003c/p\u003e",
          "module": "Data.ListLike.IO",
          "name": "hPutStrLn",
          "package": "ListLike",
          "signature": "Handle -\u003e full -\u003e IO ()",
          "source": "src/Data-ListLike-IO.html#hPutStrLn",
          "type": "method"
        },
        "index": {
          "description": "Write data plus newline character",
          "hierarchy": "Data ListLike IO",
          "module": "Data.ListLike.IO",
          "name": "hPutStrLn",
          "normalized": "Handle-\u003ea-\u003eIO()",
          "package": "ListLike",
          "partial": "Put Str Ln",
          "signature": "Handle-\u003efull-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike-IO.html#v:hPutStrLn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInteract with stdin and stdout by using a function to transform\n input to output.  May be lazy.  See \u003ccode\u003e\u003ca\u003einteract\u003c/a\u003e\u003c/code\u003e for more.\n\u003c/p\u003e",
          "module": "Data.ListLike.IO",
          "name": "interact",
          "package": "ListLike",
          "signature": "(full -\u003e full) -\u003e IO ()",
          "source": "src/Data-ListLike-IO.html#interact",
          "type": "method"
        },
        "index": {
          "description": "Interact with stdin and stdout by using function to transform input to output May be lazy See interact for more",
          "hierarchy": "Data ListLike IO",
          "module": "Data.ListLike.IO",
          "name": "interact",
          "normalized": "(a-\u003ea)-\u003eIO()",
          "package": "ListLike",
          "signature": "(full-\u003efull)-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike-IO.html#v:interact"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite data to stdout.\n\u003c/p\u003e",
          "module": "Data.ListLike.IO",
          "name": "putStr",
          "package": "ListLike",
          "signature": "full -\u003e IO ()",
          "source": "src/Data-ListLike-IO.html#putStr",
          "type": "method"
        },
        "index": {
          "description": "Write data to stdout",
          "hierarchy": "Data ListLike IO",
          "module": "Data.ListLike.IO",
          "name": "putStr",
          "normalized": "a-\u003eIO()",
          "package": "ListLike",
          "partial": "Str",
          "signature": "full-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike-IO.html#v:putStr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite data plus newline character to stdout.\n\u003c/p\u003e",
          "module": "Data.ListLike.IO",
          "name": "putStrLn",
          "package": "ListLike",
          "signature": "full -\u003e IO ()",
          "source": "src/Data-ListLike-IO.html#putStrLn",
          "type": "method"
        },
        "index": {
          "description": "Write data plus newline character to stdout",
          "hierarchy": "Data ListLike IO",
          "module": "Data.ListLike.IO",
          "name": "putStrLn",
          "normalized": "a-\u003eIO()",
          "package": "ListLike",
          "partial": "Str Ln",
          "signature": "full-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike-IO.html#v:putStrLn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead file.  May be lazy.\n\u003c/p\u003e",
          "module": "Data.ListLike.IO",
          "name": "readFile",
          "package": "ListLike",
          "signature": "FilePath -\u003e IO full",
          "source": "src/Data-ListLike-IO.html#readFile",
          "type": "method"
        },
        "index": {
          "description": "Read file May be lazy",
          "hierarchy": "Data ListLike IO",
          "module": "Data.ListLike.IO",
          "name": "readFile",
          "normalized": "FilePath-\u003eIO a",
          "package": "ListLike",
          "partial": "File",
          "signature": "FilePath-\u003eIO full",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike-IO.html#v:readFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite data to file.\n\u003c/p\u003e",
          "module": "Data.ListLike.IO",
          "name": "writeFile",
          "package": "ListLike",
          "signature": "FilePath -\u003e full -\u003e IO ()",
          "source": "src/Data-ListLike-IO.html#writeFile",
          "type": "method"
        },
        "index": {
          "description": "Write data to file",
          "hierarchy": "Data ListLike IO",
          "module": "Data.ListLike.IO",
          "name": "writeFile",
          "normalized": "FilePath-\u003ea-\u003eIO()",
          "package": "ListLike",
          "partial": "File",
          "signature": "FilePath-\u003efull-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike-IO.html#v:writeFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eInstances of \u003ccode\u003e\u003ca\u003eListLike\u003c/a\u003e\u003c/code\u003e and related classes.\nRe-exported by \u003ca\u003eData.ListLike\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eWritten by John Goerzen, jgoerzen@complete.org\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.ListLike.Instances",
          "name": "Instances",
          "package": "ListLike",
          "source": "src/Data-ListLike-Instances.html",
          "type": "module"
        },
        "index": {
          "description": "Instances of ListLike and related classes Re-exported by Data.ListLike Written by John Goerzen jgoerzen@complete.org",
          "hierarchy": "Data ListLike Instances",
          "module": "Data.ListLike.Instances",
          "name": "Instances",
          "package": "ListLike",
          "partial": "Instances",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike-Instances.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eString-like functions\n\u003c/p\u003e\u003cp\u003eWritten by John Goerzen, jgoerzen@complete.org\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.ListLike.String",
          "name": "String",
          "package": "ListLike",
          "source": "src/Data-ListLike-String.html",
          "type": "module"
        },
        "index": {
          "description": "String-like functions Written by John Goerzen jgoerzen@complete.org",
          "hierarchy": "Data ListLike String",
          "module": "Data.ListLike.String",
          "name": "String",
          "package": "ListLike",
          "partial": "String",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike-String.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn extension to \u003ccode\u003e\u003ca\u003eListLike\u003c/a\u003e\u003c/code\u003e for those data types that are similar\nto a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e.  Minimal complete definition is \u003ccode\u003e\u003ca\u003etoString\u003c/a\u003e\u003c/code\u003e and\n\u003ccode\u003e\u003ca\u003efromString\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "Data.ListLike.String",
          "name": "StringLike",
          "package": "ListLike",
          "source": "src/Data-ListLike-String.html#StringLike",
          "type": "class"
        },
        "index": {
          "description": "An extension to ListLike for those data types that are similar to String Minimal complete definition is toString and fromString",
          "hierarchy": "Data ListLike String",
          "module": "Data.ListLike.String",
          "name": "StringLike",
          "package": "ListLike",
          "partial": "String Like",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike-String.html#t:StringLike"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e to a list \n\u003c/p\u003e",
          "module": "Data.ListLike.String",
          "name": "fromString",
          "package": "ListLike",
          "signature": "String -\u003e s",
          "source": "src/Data-ListLike-String.html#fromString",
          "type": "method"
        },
        "index": {
          "description": "Converts String to list",
          "hierarchy": "Data ListLike String",
          "module": "Data.ListLike.String",
          "name": "fromString",
          "normalized": "String-\u003ea",
          "package": "ListLike",
          "partial": "String",
          "signature": "String-\u003es",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike-String.html#v:fromString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBreaks a string into a list of strings \n\u003c/p\u003e",
          "module": "Data.ListLike.String",
          "name": "lines",
          "package": "ListLike",
          "signature": "s -\u003e full",
          "source": "src/Data-ListLike-String.html#lines",
          "type": "method"
        },
        "index": {
          "description": "Breaks string into list of strings",
          "hierarchy": "Data ListLike String",
          "module": "Data.ListLike.String",
          "name": "lines",
          "normalized": "a-\u003eb",
          "package": "ListLike",
          "signature": "s-\u003efull",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike-String.html#v:lines"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts the structure to a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e \n\u003c/p\u003e",
          "module": "Data.ListLike.String",
          "name": "toString",
          "package": "ListLike",
          "signature": "s -\u003e String",
          "source": "src/Data-ListLike-String.html#toString",
          "type": "method"
        },
        "index": {
          "description": "Converts the structure to String",
          "hierarchy": "Data ListLike String",
          "module": "Data.ListLike.String",
          "name": "toString",
          "normalized": "a-\u003eString",
          "package": "ListLike",
          "partial": "String",
          "signature": "s-\u003eString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike-String.html#v:toString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJoins lines \n\u003c/p\u003e",
          "module": "Data.ListLike.String",
          "name": "unlines",
          "package": "ListLike",
          "signature": "full -\u003e s",
          "source": "src/Data-ListLike-String.html#unlines",
          "type": "method"
        },
        "index": {
          "description": "Joins lines",
          "hierarchy": "Data ListLike String",
          "module": "Data.ListLike.String",
          "name": "unlines",
          "normalized": "a-\u003eb",
          "package": "ListLike",
          "signature": "full-\u003es",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike-String.html#v:unlines"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJoins words \n\u003c/p\u003e",
          "module": "Data.ListLike.String",
          "name": "unwords",
          "package": "ListLike",
          "signature": "full -\u003e s",
          "source": "src/Data-ListLike-String.html#unwords",
          "type": "method"
        },
        "index": {
          "description": "Joins words",
          "hierarchy": "Data ListLike String",
          "module": "Data.ListLike.String",
          "name": "unwords",
          "normalized": "a-\u003eb",
          "package": "ListLike",
          "signature": "full-\u003es",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike-String.html#v:unwords"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBreaks a string into a list of words \n\u003c/p\u003e",
          "module": "Data.ListLike.String",
          "name": "words",
          "package": "ListLike",
          "signature": "s -\u003e full",
          "source": "src/Data-ListLike-String.html#words",
          "type": "method"
        },
        "index": {
          "description": "Breaks string into list of words",
          "hierarchy": "Data ListLike String",
          "module": "Data.ListLike.String",
          "name": "words",
          "normalized": "a-\u003eb",
          "package": "ListLike",
          "signature": "s-\u003efull",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike-String.html#v:words"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ListLike.Text.Text",
          "name": "Text",
          "package": "ListLike",
          "source": "src/Data-ListLike-Text-Text.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data ListLike Text Text",
          "module": "Data.ListLike.Text.Text",
          "name": "Text",
          "package": "ListLike",
          "partial": "Text",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike-Text-Text.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ListLike.Text.TextLazy",
          "name": "TextLazy",
          "package": "ListLike",
          "source": "src/Data-ListLike-Text-TextLazy.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data ListLike Text TextLazy",
          "module": "Data.ListLike.Text.TextLazy",
          "name": "TextLazy",
          "package": "ListLike",
          "partial": "Text Lazy",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike-Text-TextLazy.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ListLike.Text",
          "name": "Text",
          "package": "ListLike",
          "source": "src/Data-ListLike-Text.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data ListLike Text",
          "module": "Data.ListLike.Text",
          "name": "Text",
          "package": "ListLike",
          "partial": "Text",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike-Text.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUtilities for \u003ccode\u003e\u003ca\u003eListLike\u003c/a\u003e\u003c/code\u003e and friends.  More functions\nsimilar to \u003ccode\u003e\u003ca\u003eList\u003c/a\u003e\u003c/code\u003e but not part of the main typeclass.\n\u003c/p\u003e\u003cp\u003eWritten by John Goerzen, jgoerzen@complete.org\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.ListLike.Utils",
          "name": "Utils",
          "package": "ListLike",
          "source": "src/Data-ListLike-Utils.html",
          "type": "module"
        },
        "index": {
          "description": "Utilities for ListLike and friends More functions similar to List but not part of the main typeclass Written by John Goerzen jgoerzen@complete.org",
          "hierarchy": "Data ListLike Utils",
          "module": "Data.ListLike.Utils",
          "name": "Utils",
          "package": "ListLike",
          "partial": "Utils",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike-Utils.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns True if all elements are True\n\u003c/p\u003e",
          "module": "[\"Data.ListLike.Utils\",\"Data.ListLike\"]",
          "name": "and",
          "package": "ListLike",
          "signature": "full -\u003e Bool",
          "source": "src/Data-ListLike-Utils.html#and",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ListLike/docs/Data-ListLike-Utils.html#v:and\",\"http://hackage.haskell.org/package/ListLike/docs/Data-ListLike.html#v:and\"]"
        },
        "index": {
          "description": "Returns True if all elements are True",
          "hierarchy": "Data ListLike Utils",
          "module": "Data.ListLike.Utils",
          "name": "and",
          "normalized": "a-\u003eBool",
          "package": "ListLike",
          "signature": "full-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike-Utils.html#v:and"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList-like destructor (like Data.Maybe.maybe)\n\u003c/p\u003e",
          "module": "Data.ListLike.Utils",
          "name": "list",
          "package": "ListLike",
          "signature": "b -\u003e (a -\u003e full -\u003e b) -\u003e full -\u003e b",
          "source": "src/Data-ListLike-Utils.html#list",
          "type": "function"
        },
        "index": {
          "description": "List-like destructor like Data.Maybe.maybe",
          "hierarchy": "Data ListLike Utils",
          "module": "Data.ListLike.Utils",
          "name": "list",
          "normalized": "a-\u003e(b-\u003ec-\u003ea)-\u003ec-\u003ea",
          "package": "ListLike",
          "signature": "b-\u003e(a-\u003efull-\u003eb)-\u003efull-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike-Utils.html#v:list"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns True if any element is True\n\u003c/p\u003e",
          "module": "[\"Data.ListLike.Utils\",\"Data.ListLike\"]",
          "name": "or",
          "package": "ListLike",
          "signature": "full -\u003e Bool",
          "source": "src/Data-ListLike-Utils.html#or",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ListLike/docs/Data-ListLike-Utils.html#v:or\",\"http://hackage.haskell.org/package/ListLike/docs/Data-ListLike.html#v:or\"]"
        },
        "index": {
          "description": "Returns True if any element is True",
          "hierarchy": "Data ListLike Utils",
          "module": "Data.ListLike.Utils",
          "name": "or",
          "normalized": "a-\u003eBool",
          "package": "ListLike",
          "signature": "full-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike-Utils.html#v:or"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe product of the list\n\u003c/p\u003e",
          "module": "[\"Data.ListLike.Utils\",\"Data.ListLike\"]",
          "name": "product",
          "package": "ListLike",
          "signature": "full -\u003e a",
          "source": "src/Data-ListLike-Utils.html#product",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ListLike/docs/Data-ListLike-Utils.html#v:product\",\"http://hackage.haskell.org/package/ListLike/docs/Data-ListLike.html#v:product\"]"
        },
        "index": {
          "description": "The product of the list",
          "hierarchy": "Data ListLike Utils",
          "module": "Data.ListLike.Utils",
          "name": "product",
          "normalized": "a-\u003eb",
          "package": "ListLike",
          "signature": "full-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike-Utils.html#v:product"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe sum of the list\n\u003c/p\u003e",
          "module": "[\"Data.ListLike.Utils\",\"Data.ListLike\"]",
          "name": "sum",
          "package": "ListLike",
          "signature": "full -\u003e a",
          "source": "src/Data-ListLike-Utils.html#sum",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ListLike/docs/Data-ListLike-Utils.html#v:sum\",\"http://hackage.haskell.org/package/ListLike/docs/Data-ListLike.html#v:sum\"]"
        },
        "index": {
          "description": "The sum of the list",
          "hierarchy": "Data ListLike Utils",
          "module": "Data.ListLike.Utils",
          "name": "sum",
          "normalized": "a-\u003eb",
          "package": "ListLike",
          "signature": "full-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike-Utils.html#v:sum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts to a MonadPlus instance\n\u003c/p\u003e",
          "module": "Data.ListLike.Utils",
          "name": "toMonadPlus",
          "package": "ListLike",
          "signature": "full -\u003e m (a, full)",
          "source": "src/Data-ListLike-Utils.html#toMonadPlus",
          "type": "function"
        },
        "index": {
          "description": "Converts to MonadPlus instance",
          "hierarchy": "Data ListLike Utils",
          "module": "Data.ListLike.Utils",
          "name": "toMonadPlus",
          "normalized": "a-\u003eb(c,a)",
          "package": "ListLike",
          "partial": "Monad Plus",
          "signature": "full-\u003em(a,full)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike-Utils.html#v:toMonadPlus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a list of pairs into two separate lists of elements \n\u003c/p\u003e",
          "module": "[\"Data.ListLike.Utils\",\"Data.ListLike\"]",
          "name": "unzip",
          "package": "ListLike",
          "signature": "full -\u003e (ra, rb)",
          "source": "src/Data-ListLike-Utils.html#unzip",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ListLike/docs/Data-ListLike-Utils.html#v:unzip\",\"http://hackage.haskell.org/package/ListLike/docs/Data-ListLike.html#v:unzip\"]"
        },
        "index": {
          "description": "Converts list of pairs into two separate lists of elements",
          "hierarchy": "Data ListLike Utils",
          "module": "Data.ListLike.Utils",
          "name": "unzip",
          "normalized": "a-\u003e(b,c)",
          "package": "ListLike",
          "signature": "full-\u003e(ra,rb)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike-Utils.html#v:unzip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eListLike instance for any type supporting the \u003ccode\u003eData.Vector.Generic\u003c/code\u003e\n interface.  To avoid collisions with other Vector instances, this module\n must be imported directly.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.ListLike.Vector.Generic",
          "name": "Generic",
          "package": "ListLike",
          "source": "src/Data-ListLike-Vector-Generic.html",
          "type": "module"
        },
        "index": {
          "description": "ListLike instance for any type supporting the Data.Vector.Generic interface To avoid collisions with other Vector instances this module must be imported directly",
          "hierarchy": "Data ListLike Vector Generic",
          "module": "Data.ListLike.Vector.Generic",
          "name": "Generic",
          "package": "ListLike",
          "partial": "Generic",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike-Vector-Generic.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ListLike.Vector.Storable",
          "name": "Storable",
          "package": "ListLike",
          "source": "src/Data-ListLike-Vector-Storable.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data ListLike Vector Storable",
          "module": "Data.ListLike.Vector.Storable",
          "name": "Storable",
          "package": "ListLike",
          "partial": "Storable",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike-Vector-Storable.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ListLike.Vector.Unboxed",
          "name": "Unboxed",
          "package": "ListLike",
          "source": "src/Data-ListLike-Vector-Unboxed.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data ListLike Vector Unboxed",
          "module": "Data.ListLike.Vector.Unboxed",
          "name": "Unboxed",
          "package": "ListLike",
          "partial": "Unboxed",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike-Vector-Unboxed.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ListLike.Vector.Vector",
          "name": "Vector",
          "package": "ListLike",
          "source": "src/Data-ListLike-Vector-Vector.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data ListLike Vector Vector",
          "module": "Data.ListLike.Vector.Vector",
          "name": "Vector",
          "package": "ListLike",
          "partial": "Vector",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike-Vector-Vector.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eListLike instances for several \u003ccode\u003eData.Vector\u003c/code\u003e types.\n The \u003ccode\u003e\u003ca\u003eGeneric\u003c/a\u003e\u003c/code\u003e instances are not exported from this\n module in order to prevent collisions.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.ListLike.Vector",
          "name": "Vector",
          "package": "ListLike",
          "source": "src/Data-ListLike-Vector.html",
          "type": "module"
        },
        "index": {
          "description": "ListLike instances for several Data.Vector types The Generic instances are not exported from this module in order to prevent collisions",
          "hierarchy": "Data ListLike Vector",
          "module": "Data.ListLike.Vector",
          "name": "Vector",
          "package": "ListLike",
          "partial": "Vector",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike-Vector.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGeneric operations over list-like structures\n\u003c/p\u003e\u003cp\u003eWritten by John Goerzen, jgoerzen@complete.org\n\u003c/p\u003e\u003cp\u003ePlease start with the introduction at \u003ca\u003eData.ListLike\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.ListLike",
          "name": "ListLike",
          "package": "ListLike",
          "source": "src/Data-ListLike.html",
          "type": "module"
        },
        "index": {
          "description": "Generic operations over list-like structures Written by John Goerzen jgoerzen@complete.org Please start with the introduction at Data.ListLike",
          "hierarchy": "Data ListLike",
          "module": "Data.ListLike",
          "name": "ListLike",
          "package": "ListLike",
          "partial": "List Like",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNewtype wrapper around Data.ByteString.Char8.ByteString,\n   this allows for ListLike instances with Char elements.\n\u003c/p\u003e",
          "module": "Data.ListLike",
          "name": "CharString",
          "package": "ListLike",
          "source": "src/Data-ListLike-CharString.html#CharString",
          "type": "newtype"
        },
        "index": {
          "description": "Newtype wrapper around Data.ByteString.Char8.ByteString this allows for ListLike instances with Char elements",
          "hierarchy": "Data ListLike",
          "module": "Data.ListLike",
          "name": "CharString",
          "package": "ListLike",
          "partial": "Char String",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike.html#t:CharString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNewtype wrapper around Data.ByteString.Lazy.Char8.ByteString,\n   this allows for ListLike instances with Char elements.\n\u003c/p\u003e",
          "module": "Data.ListLike",
          "name": "CharStringLazy",
          "package": "ListLike",
          "source": "src/Data-ListLike-CharString.html#CharStringLazy",
          "type": "newtype"
        },
        "index": {
          "description": "Newtype wrapper around Data.ByteString.Lazy.Char8.ByteString this allows for ListLike instances with Char elements",
          "hierarchy": "Data ListLike",
          "module": "Data.ListLike",
          "name": "CharStringLazy",
          "package": "ListLike",
          "partial": "Char String Lazy",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike.html#t:CharStringLazy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is the primary class for structures that are to be considered \nfoldable.  A minimum complete definition provides \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eInstances of \u003ccode\u003e\u003ca\u003eFoldableLL\u003c/a\u003e\u003c/code\u003e can be folded, and can be many and varied.\n\u003c/p\u003e\u003cp\u003eThese functions are used heavily in \u003ca\u003eData.ListLike\u003c/a\u003e. \n\u003c/p\u003e",
          "module": "Data.ListLike",
          "name": "FoldableLL",
          "package": "ListLike",
          "source": "src/Data-ListLike-FoldableLL.html#FoldableLL",
          "type": "class"
        },
        "index": {
          "description": "This is the primary class for structures that are to be considered foldable minimum complete definition provides foldl and foldr Instances of FoldableLL can be folded and can be many and varied These functions are used heavily in Data.ListLike",
          "hierarchy": "Data ListLike",
          "module": "Data.ListLike",
          "name": "FoldableLL",
          "package": "ListLike",
          "partial": "Foldable LL",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike.html#t:FoldableLL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn extension to \u003ccode\u003e\u003ca\u003eListLike\u003c/a\u003e\u003c/code\u003e for those data types that are capable\nof dealing with infinite lists.  Some \u003ccode\u003e\u003ca\u003eListLike\u003c/a\u003e\u003c/code\u003e functions are capable\nof working with finite or infinite lists.  The functions here require\ninfinite list capability in order to work at all. \n\u003c/p\u003e",
          "module": "Data.ListLike",
          "name": "InfiniteListLike",
          "package": "ListLike",
          "source": "src/Data-ListLike-Base.html#InfiniteListLike",
          "type": "class"
        },
        "index": {
          "description": "An extension to ListLike for those data types that are capable of dealing with infinite lists Some ListLike functions are capable of working with finite or infinite lists The functions here require infinite list capability in order to work at all",
          "hierarchy": "Data ListLike",
          "module": "Data.ListLike",
          "name": "InfiniteListLike",
          "package": "ListLike",
          "partial": "Infinite List Like",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike.html#t:InfiniteListLike"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe class implementing list-like functions.\n\u003c/p\u003e\u003cp\u003eIt is worth noting that types such as \u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e can be instances of\n\u003ccode\u003e\u003ca\u003eListLike\u003c/a\u003e\u003c/code\u003e.  Due to their specific ways of operating, they may not behave\nin the expected way in some cases.  For instance, \u003ccode\u003e\u003ca\u003econs\u003c/a\u003e\u003c/code\u003e may not increase\nthe size of a map if the key you have given is already in the map; it will\njust replace the value already there.\n\u003c/p\u003e\u003cp\u003eImplementators must define at least:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e singleton\n\u003c/li\u003e\u003cli\u003e head\n\u003c/li\u003e\u003cli\u003e tail\n\u003c/li\u003e\u003cli\u003e null or genericLength\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.ListLike",
          "name": "ListLike",
          "package": "ListLike",
          "source": "src/Data-ListLike-Base.html#ListLike",
          "type": "class"
        },
        "index": {
          "description": "The class implementing list-like functions It is worth noting that types such as Map can be instances of ListLike Due to their specific ways of operating they may not behave in the expected way in some cases For instance cons may not increase the size of map if the key you have given is already in the map it will just replace the value already there Implementators must define at least singleton head tail null or genericLength",
          "hierarchy": "Data ListLike",
          "module": "Data.ListLike",
          "name": "ListLike",
          "package": "ListLike",
          "partial": "List Like",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike.html#t:ListLike"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn extension to \u003ccode\u003e\u003ca\u003eListLike\u003c/a\u003e\u003c/code\u003e for those data types that support\nI/O.  These functions mirror those in \u003ca\u003eSystem.IO\u003c/a\u003e for the most part.  They\nalso share the same names; see the comments in \u003ca\u003eData.ListLike\u003c/a\u003e for help\nimporting them.\n\u003c/p\u003e\u003cp\u003eNote that some types may not be capable of lazy reading or writing.\nTherefore, the usual semantics of \u003ca\u003eSystem.IO\u003c/a\u003e functions regarding laziness\nmay or may not be available from a particular implementation.\n\u003c/p\u003e\u003cp\u003eMinimal complete definition:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e hGetLine\n\u003c/li\u003e\u003cli\u003e hGetContents\n\u003c/li\u003e\u003cli\u003e hGet\n\u003c/li\u003e\u003cli\u003e hGetNonBlocking\n\u003c/li\u003e\u003cli\u003e hPutStr\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.ListLike",
          "name": "ListLikeIO",
          "package": "ListLike",
          "source": "src/Data-ListLike-IO.html#ListLikeIO",
          "type": "class"
        },
        "index": {
          "description": "An extension to ListLike for those data types that support These functions mirror those in System.IO for the most part They also share the same names see the comments in Data.ListLike for help importing them Note that some types may not be capable of lazy reading or writing Therefore the usual semantics of System.IO functions regarding laziness may or may not be available from particular implementation Minimal complete definition hGetLine hGetContents hGet hGetNonBlocking hPutStr",
          "hierarchy": "Data ListLike",
          "module": "Data.ListLike",
          "name": "ListLikeIO",
          "package": "ListLike",
          "partial": "List Like IO",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike.html#t:ListLikeIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn extension to \u003ccode\u003e\u003ca\u003eListLike\u003c/a\u003e\u003c/code\u003e for those data types that are similar\nto a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e.  Minimal complete definition is \u003ccode\u003e\u003ca\u003etoString\u003c/a\u003e\u003c/code\u003e and\n\u003ccode\u003e\u003ca\u003efromString\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "Data.ListLike",
          "name": "StringLike",
          "package": "ListLike",
          "source": "src/Data-ListLike-String.html#StringLike",
          "type": "class"
        },
        "index": {
          "description": "An extension to ListLike for those data types that are similar to String Minimal complete definition is toString and fromString",
          "hierarchy": "Data ListLike",
          "module": "Data.ListLike",
          "name": "StringLike",
          "package": "ListLike",
          "partial": "String Like",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike.html#t:StringLike"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrue if all items satisfy the function \n\u003c/p\u003e",
          "module": "Data.ListLike",
          "name": "all",
          "package": "ListLike",
          "signature": "(item -\u003e Bool) -\u003e full -\u003e Bool",
          "source": "src/Data-ListLike-Base.html#all",
          "type": "method"
        },
        "index": {
          "description": "True if all items satisfy the function",
          "hierarchy": "Data ListLike",
          "module": "Data.ListLike",
          "name": "all",
          "normalized": "(a-\u003eBool)-\u003eb-\u003eBool",
          "package": "ListLike",
          "signature": "(item-\u003eBool)-\u003efull-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike.html#v:all"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrue if any items satisfy the function \n\u003c/p\u003e",
          "module": "Data.ListLike",
          "name": "any",
          "package": "ListLike",
          "signature": "(item -\u003e Bool) -\u003e full -\u003e Bool",
          "source": "src/Data-ListLike-Base.html#any",
          "type": "method"
        },
        "index": {
          "description": "True if any items satisfy the function",
          "hierarchy": "Data ListLike",
          "module": "Data.ListLike",
          "name": "any",
          "normalized": "(a-\u003eBool)-\u003eb-\u003eBool",
          "package": "ListLike",
          "signature": "(item-\u003eBool)-\u003efull-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike.html#v:any"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombines two lists.  Like (++). \n\u003c/p\u003e",
          "module": "Data.ListLike",
          "name": "append",
          "package": "ListLike",
          "signature": "full -\u003e full -\u003e full",
          "source": "src/Data-ListLike-Base.html#append",
          "type": "method"
        },
        "index": {
          "description": "Combines two lists Like",
          "hierarchy": "Data ListLike",
          "module": "Data.ListLike",
          "name": "append",
          "normalized": "a-\u003ea-\u003ea",
          "package": "ListLike",
          "signature": "full-\u003efull-\u003efull",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike.html#v:append"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAppend data to file.\n\u003c/p\u003e",
          "module": "Data.ListLike",
          "name": "appendFile",
          "package": "ListLike",
          "signature": "FilePath -\u003e full -\u003e IO ()",
          "source": "src/Data-ListLike-IO.html#appendFile",
          "type": "method"
        },
        "index": {
          "description": "Append data to file",
          "hierarchy": "Data ListLike",
          "module": "Data.ListLike",
          "name": "appendFile",
          "normalized": "FilePath-\u003ea-\u003eIO()",
          "package": "ListLike",
          "partial": "File",
          "signature": "FilePath-\u003efull-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike.html#v:appendFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe equivalent of \u003ccode\u003e\u003ccode\u003e\u003ca\u003espan\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003enot\u003c/a\u003e\u003c/code\u003e . f)\u003c/code\u003e \n\u003c/p\u003e",
          "module": "Data.ListLike",
          "name": "break",
          "package": "ListLike",
          "signature": "(item -\u003e Bool) -\u003e full -\u003e (full, full)",
          "source": "src/Data-ListLike-Base.html#break",
          "type": "method"
        },
        "index": {
          "description": "The equivalent of span not",
          "hierarchy": "Data ListLike",
          "module": "Data.ListLike",
          "name": "break",
          "normalized": "(a-\u003eBool)-\u003eb-\u003e(b,b)",
          "package": "ListLike",
          "signature": "(item-\u003eBool)-\u003efull-\u003e(full,full)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike.html#v:break"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFlatten the structure. \n\u003c/p\u003e",
          "module": "Data.ListLike",
          "name": "concat",
          "package": "ListLike",
          "signature": "full' -\u003e full",
          "source": "src/Data-ListLike-Base.html#concat",
          "type": "method"
        },
        "index": {
          "description": "Flatten the structure",
          "hierarchy": "Data ListLike",
          "module": "Data.ListLike",
          "name": "concat",
          "normalized": "a-\u003eb",
          "package": "ListLike",
          "signature": "full'-\u003efull",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike.html#v:concat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap a function over the items and concatenate the results.\n         See also \u003ccode\u003e\u003ca\u003erigidConcatMap\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.ListLike",
          "name": "concatMap",
          "package": "ListLike",
          "signature": "(item -\u003e full') -\u003e full -\u003e full'",
          "source": "src/Data-ListLike-Base.html#concatMap",
          "type": "method"
        },
        "index": {
          "description": "Map function over the items and concatenate the results See also rigidConcatMap",
          "hierarchy": "Data ListLike",
          "module": "Data.ListLike",
          "name": "concatMap",
          "normalized": "(a-\u003eb)-\u003ec-\u003eb",
          "package": "ListLike",
          "partial": "Map",
          "signature": "(item-\u003efull')-\u003efull-\u003efull'",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike.html#v:concatMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike (:) for lists: adds an element to the beginning of a list \n\u003c/p\u003e",
          "module": "Data.ListLike",
          "name": "cons",
          "package": "ListLike",
          "signature": "item -\u003e full -\u003e full",
          "source": "src/Data-ListLike-Base.html#cons",
          "type": "method"
        },
        "index": {
          "description": "Like for lists adds an element to the beginning of list",
          "hierarchy": "Data ListLike",
          "module": "Data.ListLike",
          "name": "cons",
          "normalized": "a-\u003eb-\u003eb",
          "package": "ListLike",
          "signature": "item-\u003efull-\u003efull",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike.html#v:cons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a finite list into a circular one \n\u003c/p\u003e",
          "module": "Data.ListLike",
          "name": "cycle",
          "package": "ListLike",
          "signature": "full -\u003e full",
          "source": "src/Data-ListLike-Base.html#cycle",
          "type": "method"
        },
        "index": {
          "description": "Converts finite list into circular one",
          "hierarchy": "Data ListLike",
          "module": "Data.ListLike",
          "name": "cycle",
          "normalized": "a-\u003ea",
          "package": "ListLike",
          "signature": "full-\u003efull",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike.html#v:cycle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemoves the first instance of the element from the list.\n       See also \u003ccode\u003e\u003ca\u003edeleteBy\u003c/a\u003e\u003c/code\u003e \n\u003c/p\u003e",
          "module": "Data.ListLike",
          "name": "delete",
          "package": "ListLike",
          "signature": "item -\u003e full -\u003e full",
          "source": "src/Data-ListLike-Base.html#delete",
          "type": "method"
        },
        "index": {
          "description": "Removes the first instance of the element from the list See also deleteBy",
          "hierarchy": "Data ListLike",
          "module": "Data.ListLike",
          "name": "delete",
          "normalized": "a-\u003eb-\u003eb",
          "package": "ListLike",
          "signature": "item-\u003efull-\u003efull",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike.html#v:delete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneric version of \u003ccode\u003e\u003ca\u003edeleteBy\u003c/a\u003e\u003c/code\u003e \n\u003c/p\u003e",
          "module": "Data.ListLike",
          "name": "deleteBy",
          "package": "ListLike",
          "signature": "(item -\u003e item -\u003e Bool) -\u003e item -\u003e full -\u003e full",
          "source": "src/Data-ListLike-Base.html#deleteBy",
          "type": "method"
        },
        "index": {
          "description": "Generic version of deleteBy",
          "hierarchy": "Data ListLike",
          "module": "Data.ListLike",
          "name": "deleteBy",
          "normalized": "(a-\u003ea-\u003eBool)-\u003ea-\u003eb-\u003eb",
          "package": "ListLike",
          "partial": "By",
          "signature": "(item-\u003eitem-\u003eBool)-\u003eitem-\u003efull-\u003efull",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike.html#v:deleteBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList difference.  Removes from the first list the first instance\n       of each element of the second list.  See '(\\)' and \u003ccode\u003e\u003ca\u003edeleteFirstsBy\u003c/a\u003e\u003c/code\u003e \n\u003c/p\u003e",
          "module": "Data.ListLike",
          "name": "deleteFirsts",
          "package": "ListLike",
          "signature": "full -\u003e full -\u003e full",
          "source": "src/Data-ListLike-Base.html#deleteFirsts",
          "type": "method"
        },
        "index": {
          "description": "List difference Removes from the first list the first instance of each element of the second list See and deleteFirstsBy",
          "hierarchy": "Data ListLike",
          "module": "Data.ListLike",
          "name": "deleteFirsts",
          "normalized": "a-\u003ea-\u003ea",
          "package": "ListLike",
          "partial": "Firsts",
          "signature": "full-\u003efull-\u003efull",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike.html#v:deleteFirsts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneric version of \u003ccode\u003e\u003ca\u003edeleteFirsts\u003c/a\u003e\u003c/code\u003e \n\u003c/p\u003e",
          "module": "Data.ListLike",
          "name": "deleteFirstsBy",
          "package": "ListLike",
          "signature": "(item -\u003e item -\u003e Bool) -\u003e full -\u003e full -\u003e full",
          "source": "src/Data-ListLike-Base.html#deleteFirstsBy",
          "type": "method"
        },
        "index": {
          "description": "Generic version of deleteFirsts",
          "hierarchy": "Data ListLike",
          "module": "Data.ListLike",
          "name": "deleteFirstsBy",
          "normalized": "(a-\u003ea-\u003eBool)-\u003eb-\u003eb-\u003eb",
          "package": "ListLike",
          "partial": "Firsts By",
          "signature": "(item-\u003eitem-\u003eBool)-\u003efull-\u003efull-\u003efull",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike.html#v:deleteFirstsBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDrops the first n elements of the list.  See also \u003ccode\u003e\u003ca\u003egenericDrop\u003c/a\u003e\u003c/code\u003e \n\u003c/p\u003e",
          "module": "Data.ListLike",
          "name": "drop",
          "package": "ListLike",
          "signature": "Int -\u003e full -\u003e full",
          "source": "src/Data-ListLike-Base.html#drop",
          "type": "method"
        },
        "index": {
          "description": "Drops the first elements of the list See also genericDrop",
          "hierarchy": "Data ListLike",
          "module": "Data.ListLike",
          "name": "drop",
          "normalized": "Int-\u003ea-\u003ea",
          "package": "ListLike",
          "signature": "Int-\u003efull-\u003efull",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike.html#v:drop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDrops all elements form the start of the list that satisfy the\n       function. \n\u003c/p\u003e",
          "module": "Data.ListLike",
          "name": "dropWhile",
          "package": "ListLike",
          "signature": "(item -\u003e Bool) -\u003e full -\u003e full",
          "source": "src/Data-ListLike-Base.html#dropWhile",
          "type": "method"
        },
        "index": {
          "description": "Drops all elements form the start of the list that satisfy the function",
          "hierarchy": "Data ListLike",
          "module": "Data.ListLike",
          "name": "dropWhile",
          "normalized": "(a-\u003eBool)-\u003eb-\u003eb",
          "package": "ListLike",
          "partial": "While",
          "signature": "(item-\u003eBool)-\u003efull-\u003efull",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike.html#v:dropWhile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrue if the item occurs in the list \n\u003c/p\u003e",
          "module": "Data.ListLike",
          "name": "elem",
          "package": "ListLike",
          "signature": "item -\u003e full -\u003e Bool",
          "source": "src/Data-ListLike-Base.html#elem",
          "type": "method"
        },
        "index": {
          "description": "True if the item occurs in the list",
          "hierarchy": "Data ListLike",
          "module": "Data.ListLike",
          "name": "elem",
          "normalized": "a-\u003eb-\u003eBool",
          "package": "ListLike",
          "signature": "item-\u003efull-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike.html#v:elem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the index of the element, if it exists. \n\u003c/p\u003e",
          "module": "Data.ListLike",
          "name": "elemIndex",
          "package": "ListLike",
          "signature": "item -\u003e full -\u003e Maybe Int",
          "source": "src/Data-ListLike-Base.html#elemIndex",
          "type": "method"
        },
        "index": {
          "description": "Returns the index of the element if it exists",
          "hierarchy": "Data ListLike",
          "module": "Data.ListLike",
          "name": "elemIndex",
          "normalized": "a-\u003eb-\u003eMaybe Int",
          "package": "ListLike",
          "partial": "Index",
          "signature": "item-\u003efull-\u003eMaybe Int",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike.html#v:elemIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the indices of the matching elements.  See also \n       \u003ccode\u003e\u003ca\u003efindIndices\u003c/a\u003e\u003c/code\u003e \n\u003c/p\u003e",
          "module": "Data.ListLike",
          "name": "elemIndices",
          "package": "ListLike",
          "signature": "item -\u003e full -\u003e result",
          "source": "src/Data-ListLike-Base.html#elemIndices",
          "type": "method"
        },
        "index": {
          "description": "Returns the indices of the matching elements See also findIndices",
          "hierarchy": "Data ListLike",
          "module": "Data.ListLike",
          "name": "elemIndices",
          "normalized": "a-\u003eb-\u003ec",
          "package": "ListLike",
          "partial": "Indices",
          "signature": "item-\u003efull-\u003eresult",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike.html#v:elemIndices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe empty list \n\u003c/p\u003e",
          "module": "Data.ListLike",
          "name": "empty",
          "package": "ListLike",
          "signature": "full",
          "source": "src/Data-ListLike-Base.html#empty",
          "type": "method"
        },
        "index": {
          "description": "The empty list",
          "hierarchy": "Data ListLike",
          "module": "Data.ListLike",
          "name": "empty",
          "package": "ListLike",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns only the elements that satisfy the function. \n\u003c/p\u003e",
          "module": "Data.ListLike",
          "name": "filter",
          "package": "ListLike",
          "signature": "(item -\u003e Bool) -\u003e full -\u003e full",
          "source": "src/Data-ListLike-Base.html#filter",
          "type": "method"
        },
        "index": {
          "description": "Returns only the elements that satisfy the function",
          "hierarchy": "Data ListLike",
          "module": "Data.ListLike",
          "name": "filter",
          "normalized": "(a-\u003eBool)-\u003eb-\u003eb",
          "package": "ListLike",
          "signature": "(item-\u003eBool)-\u003efull-\u003efull",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike.html#v:filter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake a function and return the first matching element, or Nothing\n       if there is no such element. \n\u003c/p\u003e",
          "module": "Data.ListLike",
          "name": "find",
          "package": "ListLike",
          "signature": "(item -\u003e Bool) -\u003e full -\u003e Maybe item",
          "source": "src/Data-ListLike-Base.html#find",
          "type": "method"
        },
        "index": {
          "description": "Take function and return the first matching element or Nothing if there is no such element",
          "hierarchy": "Data ListLike",
          "module": "Data.ListLike",
          "name": "find",
          "normalized": "(a-\u003eBool)-\u003eb-\u003eMaybe a",
          "package": "ListLike",
          "signature": "(item-\u003eBool)-\u003efull-\u003eMaybe item",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike.html#v:find"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake a function and return the index of the first matching element,\n         or Nothing if no element matches \n\u003c/p\u003e",
          "module": "Data.ListLike",
          "name": "findIndex",
          "package": "ListLike",
          "signature": "(item -\u003e Bool) -\u003e full -\u003e Maybe Int",
          "source": "src/Data-ListLike-Base.html#findIndex",
          "type": "method"
        },
        "index": {
          "description": "Take function and return the index of the first matching element or Nothing if no element matches",
          "hierarchy": "Data ListLike",
          "module": "Data.ListLike",
          "name": "findIndex",
          "normalized": "(a-\u003eBool)-\u003eb-\u003eMaybe Int",
          "package": "ListLike",
          "partial": "Index",
          "signature": "(item-\u003eBool)-\u003efull-\u003eMaybe Int",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike.html#v:findIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the indices of all elements satisfying the function \n\u003c/p\u003e",
          "module": "Data.ListLike",
          "name": "findIndices",
          "package": "ListLike",
          "signature": "(item -\u003e Bool) -\u003e full -\u003e result",
          "source": "src/Data-ListLike-Base.html#findIndices",
          "type": "method"
        },
        "index": {
          "description": "Returns the indices of all elements satisfying the function",
          "hierarchy": "Data ListLike",
          "module": "Data.ListLike",
          "name": "findIndices",
          "normalized": "(a-\u003eBool)-\u003eb-\u003ec",
          "package": "ListLike",
          "partial": "Indices",
          "signature": "(item-\u003eBool)-\u003efull-\u003eresult",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike.html#v:findIndices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLeft-associative fold \n\u003c/p\u003e",
          "module": "Data.ListLike",
          "name": "foldl",
          "package": "ListLike",
          "signature": "(a -\u003e item -\u003e a) -\u003e a -\u003e full -\u003e a",
          "source": "src/Data-ListLike-FoldableLL.html#foldl",
          "type": "method"
        },
        "index": {
          "description": "Left-associative fold",
          "hierarchy": "Data ListLike",
          "module": "Data.ListLike",
          "name": "foldl",
          "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003ec-\u003ea",
          "package": "ListLike",
          "signature": "(a-\u003eitem-\u003ea)-\u003ea-\u003efull-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike.html#v:foldl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStrict version of \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "Data.ListLike",
          "name": "foldl'",
          "package": "ListLike",
          "signature": "(a -\u003e item -\u003e a) -\u003e a -\u003e full -\u003e a",
          "source": "src/Data-ListLike-FoldableLL.html#foldl%27",
          "type": "method"
        },
        "index": {
          "description": "Strict version of foldl",
          "hierarchy": "Data ListLike",
          "module": "Data.ListLike",
          "name": "foldl'",
          "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003ec-\u003ea",
          "package": "ListLike",
          "signature": "(a-\u003eitem-\u003ea)-\u003ea-\u003efull-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike.html#v:foldl-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e with no base case.  Requires at least 1\n list element.\n\u003c/p\u003e",
          "module": "Data.ListLike",
          "name": "foldl1",
          "package": "ListLike",
          "signature": "(item -\u003e item -\u003e item) -\u003e full -\u003e item",
          "source": "src/Data-ListLike-FoldableLL.html#foldl1",
          "type": "method"
        },
        "index": {
          "description": "variant of foldl with no base case Requires at least list element",
          "hierarchy": "Data ListLike",
          "module": "Data.ListLike",
          "name": "foldl1",
          "normalized": "(a-\u003ea-\u003ea)-\u003eb-\u003ea",
          "package": "ListLike",
          "signature": "(item-\u003eitem-\u003eitem)-\u003efull-\u003eitem",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike.html#v:foldl1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRight-associative fold \n\u003c/p\u003e",
          "module": "Data.ListLike",
          "name": "foldr",
          "package": "ListLike",
          "signature": "(item -\u003e b -\u003e b) -\u003e b -\u003e full -\u003e b",
          "source": "src/Data-ListLike-FoldableLL.html#foldr",
          "type": "method"
        },
        "index": {
          "description": "Right-associative fold",
          "hierarchy": "Data ListLike",
          "module": "Data.ListLike",
          "name": "foldr",
          "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003ec-\u003eb",
          "package": "ListLike",
          "signature": "(item-\u003eb-\u003eb)-\u003eb-\u003efull-\u003eb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike.html#v:foldr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStrict version of \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.ListLike",
          "name": "foldr'",
          "package": "ListLike",
          "signature": "(item -\u003e b -\u003e b) -\u003e b -\u003e full -\u003e b",
          "source": "src/Data-ListLike-FoldableLL.html#foldr%27",
          "type": "method"
        },
        "index": {
          "description": "Strict version of foldr",
          "hierarchy": "Data ListLike",
          "module": "Data.ListLike",
          "name": "foldr'",
          "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003ec-\u003eb",
          "package": "ListLike",
          "signature": "(item-\u003eb-\u003eb)-\u003eb-\u003efull-\u003eb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike.html#v:foldr-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e, but with no starting value\n\u003c/p\u003e",
          "module": "Data.ListLike",
          "name": "foldr1",
          "package": "ListLike",
          "signature": "(item -\u003e item -\u003e item) -\u003e full -\u003e item",
          "source": "src/Data-ListLike-FoldableLL.html#foldr1",
          "type": "method"
        },
        "index": {
          "description": "Like foldr but with no starting value",
          "hierarchy": "Data ListLike",
          "module": "Data.ListLike",
          "name": "foldr1",
          "normalized": "(a-\u003ea-\u003ea)-\u003eb-\u003ea",
          "package": "ListLike",
          "signature": "(item-\u003eitem-\u003eitem)-\u003efull-\u003eitem",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike.html#v:foldr1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerates the structure from a list. \n\u003c/p\u003e",
          "module": "Data.ListLike",
          "name": "fromList",
          "package": "ListLike",
          "signature": "[item] -\u003e full",
          "source": "src/Data-ListLike-Base.html#fromList",
          "type": "method"
        },
        "index": {
          "description": "Generates the structure from list",
          "hierarchy": "Data ListLike",
          "module": "Data.ListLike",
          "name": "fromList",
          "normalized": "[a]-\u003eb",
          "package": "ListLike",
          "partial": "List",
          "signature": "[item]-\u003efull",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts one ListLike to another.  See also \u003ccode\u003e\u003ca\u003etoList\u003c/a\u003e\u003c/code\u003e.\n         Default implementation is \u003ccode\u003efromListLike = map id\u003c/code\u003e \n\u003c/p\u003e",
          "module": "Data.ListLike",
          "name": "fromListLike",
          "package": "ListLike",
          "signature": "full -\u003e full'",
          "source": "src/Data-ListLike-Base.html#fromListLike",
          "type": "method"
        },
        "index": {
          "description": "Converts one ListLike to another See also toList Default implementation is fromListLike map id",
          "hierarchy": "Data ListLike",
          "module": "Data.ListLike",
          "name": "fromListLike",
          "normalized": "a-\u003eb",
          "package": "ListLike",
          "partial": "List Like",
          "signature": "full-\u003efull'",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike.html#v:fromListLike"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e to a list \n\u003c/p\u003e",
          "module": "Data.ListLike",
          "name": "fromString",
          "package": "ListLike",
          "signature": "String -\u003e s",
          "source": "src/Data-ListLike-String.html#fromString",
          "type": "method"
        },
        "index": {
          "description": "Converts String to list",
          "hierarchy": "Data ListLike",
          "module": "Data.ListLike",
          "name": "fromString",
          "normalized": "String-\u003ea",
          "package": "ListLike",
          "partial": "String",
          "signature": "String-\u003es",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike.html#v:fromString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneric version of \u003ccode\u003e\u003ca\u003edrop\u003c/a\u003e\u003c/code\u003e \n\u003c/p\u003e",
          "module": "Data.ListLike",
          "name": "genericDrop",
          "package": "ListLike",
          "signature": "a -\u003e full -\u003e full",
          "source": "src/Data-ListLike-Base.html#genericDrop",
          "type": "method"
        },
        "index": {
          "description": "Generic version of drop",
          "hierarchy": "Data ListLike",
          "module": "Data.ListLike",
          "name": "genericDrop",
          "normalized": "a-\u003eb-\u003eb",
          "package": "ListLike",
          "partial": "Drop",
          "signature": "a-\u003efull-\u003efull",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike.html#v:genericDrop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLength of the list \n\u003c/p\u003e",
          "module": "Data.ListLike",
          "name": "genericLength",
          "package": "ListLike",
          "signature": "full -\u003e a",
          "source": "src/Data-ListLike-Base.html#genericLength",
          "type": "method"
        },
        "index": {
          "description": "Length of the list",
          "hierarchy": "Data ListLike",
          "module": "Data.ListLike",
          "name": "genericLength",
          "normalized": "a-\u003eb",
          "package": "ListLike",
          "partial": "Length",
          "signature": "full-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike.html#v:genericLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneric version of \u003ccode\u003e\u003ca\u003ereplicate\u003c/a\u003e\u003c/code\u003e \n\u003c/p\u003e",
          "module": "Data.ListLike",
          "name": "genericReplicate",
          "package": "ListLike",
          "signature": "a -\u003e item -\u003e full",
          "source": "src/Data-ListLike-Base.html#genericReplicate",
          "type": "method"
        },
        "index": {
          "description": "Generic version of replicate",
          "hierarchy": "Data ListLike",
          "module": "Data.ListLike",
          "name": "genericReplicate",
          "normalized": "a-\u003eb-\u003ec",
          "package": "ListLike",
          "partial": "Replicate",
          "signature": "a-\u003eitem-\u003efull",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike.html#v:genericReplicate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneric version of \u003ccode\u003e\u003ca\u003esplitAt\u003c/a\u003e\u003c/code\u003e \n\u003c/p\u003e",
          "module": "Data.ListLike",
          "name": "genericSplitAt",
          "package": "ListLike",
          "signature": "a -\u003e full -\u003e (full, full)",
          "source": "src/Data-ListLike-Base.html#genericSplitAt",
          "type": "method"
        },
        "index": {
          "description": "Generic version of splitAt",
          "hierarchy": "Data ListLike",
          "module": "Data.ListLike",
          "name": "genericSplitAt",
          "normalized": "a-\u003eb-\u003e(b,b)",
          "package": "ListLike",
          "partial": "Split At",
          "signature": "a-\u003efull-\u003e(full,full)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike.html#v:genericSplitAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneric version of \u003ccode\u003e\u003ca\u003etake\u003c/a\u003e\u003c/code\u003e \n\u003c/p\u003e",
          "module": "Data.ListLike",
          "name": "genericTake",
          "package": "ListLike",
          "signature": "a -\u003e full -\u003e full",
          "source": "src/Data-ListLike-Base.html#genericTake",
          "type": "method"
        },
        "index": {
          "description": "Generic version of take",
          "hierarchy": "Data ListLike",
          "module": "Data.ListLike",
          "name": "genericTake",
          "normalized": "a-\u003eb-\u003eb",
          "package": "ListLike",
          "partial": "Take",
          "signature": "a-\u003efull-\u003efull",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike.html#v:genericTake"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead entire content from stdin.  See \u003ccode\u003e\u003ca\u003ehGetContents\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.ListLike",
          "name": "getContents",
          "package": "ListLike",
          "signature": "IO full",
          "source": "src/Data-ListLike-IO.html#getContents",
          "type": "method"
        },
        "index": {
          "description": "Read entire content from stdin See hGetContents",
          "hierarchy": "Data ListLike",
          "module": "Data.ListLike",
          "name": "getContents",
          "package": "ListLike",
          "partial": "Contents",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike.html#v:getContents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead one line\n\u003c/p\u003e",
          "module": "Data.ListLike",
          "name": "getLine",
          "package": "ListLike",
          "signature": "IO full",
          "source": "src/Data-ListLike-IO.html#getLine",
          "type": "method"
        },
        "index": {
          "description": "Read one line",
          "hierarchy": "Data ListLike",
          "module": "Data.ListLike",
          "name": "getLine",
          "package": "ListLike",
          "partial": "Line",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike.html#v:getLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplit a list into sublists, each which contains equal arguments.\n       For order-preserving types, concatenating these sublists will produce\n       the original list. See also \u003ccode\u003e\u003ca\u003egroupBy\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "Data.ListLike",
          "name": "group",
          "package": "ListLike",
          "signature": "full -\u003e full'",
          "source": "src/Data-ListLike-Base.html#group",
          "type": "method"
        },
        "index": {
          "description": "Split list into sublists each which contains equal arguments For order-preserving types concatenating these sublists will produce the original list See also groupBy",
          "hierarchy": "Data ListLike",
          "module": "Data.ListLike",
          "name": "group",
          "normalized": "a-\u003eb",
          "package": "ListLike",
          "signature": "full-\u003efull'",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike.html#v:group"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneric version of \u003ccode\u003e\u003ca\u003egroup\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "Data.ListLike",
          "name": "groupBy",
          "package": "ListLike",
          "signature": "(item -\u003e item -\u003e Bool) -\u003e full -\u003e full'",
          "source": "src/Data-ListLike-Base.html#groupBy",
          "type": "method"
        },
        "index": {
          "description": "Generic version of group",
          "hierarchy": "Data ListLike",
          "module": "Data.ListLike",
          "name": "groupBy",
          "normalized": "(a-\u003ea-\u003eBool)-\u003eb-\u003ec",
          "package": "ListLike",
          "partial": "By",
          "signature": "(item-\u003eitem-\u003eBool)-\u003efull-\u003efull'",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike.html#v:groupBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead specified number of bytes.  See \u003ccode\u003e\u003ca\u003ehGet\u003c/a\u003e\u003c/code\u003e for\n particular semantics.\n\u003c/p\u003e",
          "module": "Data.ListLike",
          "name": "hGet",
          "package": "ListLike",
          "signature": "Handle -\u003e Int -\u003e IO full",
          "source": "src/Data-ListLike-IO.html#hGet",
          "type": "method"
        },
        "index": {
          "description": "Read specified number of bytes See hGet for particular semantics",
          "hierarchy": "Data ListLike",
          "module": "Data.ListLike",
          "name": "hGet",
          "normalized": "Handle-\u003eInt-\u003eIO a",
          "package": "ListLike",
          "partial": "Get",
          "signature": "Handle-\u003eInt-\u003eIO full",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike.html#v:hGet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead entire handle contents.  May be done lazily like\n \u003ccode\u003e\u003ca\u003ehGetContents\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.ListLike",
          "name": "hGetContents",
          "package": "ListLike",
          "signature": "Handle -\u003e IO full",
          "source": "src/Data-ListLike-IO.html#hGetContents",
          "type": "method"
        },
        "index": {
          "description": "Read entire handle contents May be done lazily like hGetContents",
          "hierarchy": "Data ListLike",
          "module": "Data.ListLike",
          "name": "hGetContents",
          "normalized": "Handle-\u003eIO a",
          "package": "ListLike",
          "partial": "Get Contents",
          "signature": "Handle-\u003eIO full",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike.html#v:hGetContents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReads a line from the specified handle \n\u003c/p\u003e",
          "module": "Data.ListLike",
          "name": "hGetLine",
          "package": "ListLike",
          "signature": "Handle -\u003e IO full",
          "source": "src/Data-ListLike-IO.html#hGetLine",
          "type": "method"
        },
        "index": {
          "description": "Reads line from the specified handle",
          "hierarchy": "Data ListLike",
          "module": "Data.ListLike",
          "name": "hGetLine",
          "normalized": "Handle-\u003eIO a",
          "package": "ListLike",
          "partial": "Get Line",
          "signature": "Handle-\u003eIO full",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike.html#v:hGetLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNon-blocking read.  See \u003ccode\u003e\u003ca\u003ehGetNonBlocking\u003c/a\u003e\u003c/code\u003e for more.\n\u003c/p\u003e",
          "module": "Data.ListLike",
          "name": "hGetNonBlocking",
          "package": "ListLike",
          "signature": "Handle -\u003e Int -\u003e IO full",
          "source": "src/Data-ListLike-IO.html#hGetNonBlocking",
          "type": "method"
        },
        "index": {
          "description": "Non-blocking read See hGetNonBlocking for more",
          "hierarchy": "Data ListLike",
          "module": "Data.ListLike",
          "name": "hGetNonBlocking",
          "normalized": "Handle-\u003eInt-\u003eIO a",
          "package": "ListLike",
          "partial": "Get Non Blocking",
          "signature": "Handle-\u003eInt-\u003eIO full",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike.html#v:hGetNonBlocking"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWriting entire data.\n\u003c/p\u003e",
          "module": "Data.ListLike",
          "name": "hPutStr",
          "package": "ListLike",
          "signature": "Handle -\u003e full -\u003e IO ()",
          "source": "src/Data-ListLike-IO.html#hPutStr",
          "type": "method"
        },
        "index": {
          "description": "Writing entire data",
          "hierarchy": "Data ListLike",
          "module": "Data.ListLike",
          "name": "hPutStr",
          "normalized": "Handle-\u003ea-\u003eIO()",
          "package": "ListLike",
          "partial": "Put Str",
          "signature": "Handle-\u003efull-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike.html#v:hPutStr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite data plus newline character.\n\u003c/p\u003e",
          "module": "Data.ListLike",
          "name": "hPutStrLn",
          "package": "ListLike",
          "signature": "Handle -\u003e full -\u003e IO ()",
          "source": "src/Data-ListLike-IO.html#hPutStrLn",
          "type": "method"
        },
        "index": {
          "description": "Write data plus newline character",
          "hierarchy": "Data ListLike",
          "module": "Data.ListLike",
          "name": "hPutStrLn",
          "normalized": "Handle-\u003ea-\u003eIO()",
          "package": "ListLike",
          "partial": "Put Str Ln",
          "signature": "Handle-\u003efull-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike.html#v:hPutStrLn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtracts the first element of a \u003ccode\u003e\u003ca\u003eListLike\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "Data.ListLike",
          "name": "head",
          "package": "ListLike",
          "signature": "full -\u003e item",
          "source": "src/Data-ListLike-Base.html#head",
          "type": "method"
        },
        "index": {
          "description": "Extracts the first element of ListLike",
          "hierarchy": "Data ListLike",
          "module": "Data.ListLike",
          "name": "head",
          "normalized": "a-\u003eb",
          "package": "ListLike",
          "signature": "full-\u003eitem",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike.html#v:head"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe element at 0-based index i.  Raises an exception if i is out\n         of bounds.  Like (!!) for lists. \n\u003c/p\u003e",
          "module": "Data.ListLike",
          "name": "index",
          "package": "ListLike",
          "signature": "full -\u003e Int -\u003e item",
          "source": "src/Data-ListLike-Base.html#index",
          "type": "method"
        },
        "index": {
          "description": "The element at based index Raises an exception if is out of bounds Like for lists",
          "hierarchy": "Data ListLike",
          "module": "Data.ListLike",
          "name": "index",
          "normalized": "a-\u003eInt-\u003eb",
          "package": "ListLike",
          "signature": "full-\u003eInt-\u003eitem",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike.html#v:index"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll elements of the list except the last one.  See also \u003ccode\u003e\u003ca\u003einits\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "Data.ListLike",
          "name": "init",
          "package": "ListLike",
          "signature": "full -\u003e full",
          "source": "src/Data-ListLike-Base.html#init",
          "type": "method"
        },
        "index": {
          "description": "All elements of the list except the last one See also inits",
          "hierarchy": "Data ListLike",
          "module": "Data.ListLike",
          "name": "init",
          "normalized": "a-\u003ea",
          "package": "ListLike",
          "signature": "full-\u003efull",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike.html#v:init"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll initial segments of the list, shortest first \n\u003c/p\u003e",
          "module": "Data.ListLike",
          "name": "inits",
          "package": "ListLike",
          "signature": "full -\u003e full'",
          "source": "src/Data-ListLike-Base.html#inits",
          "type": "method"
        },
        "index": {
          "description": "All initial segments of the list shortest first",
          "hierarchy": "Data ListLike",
          "module": "Data.ListLike",
          "name": "inits",
          "normalized": "a-\u003eb",
          "package": "ListLike",
          "signature": "full-\u003efull'",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike.html#v:inits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInserts the element at the last place where it is still less than or\n         equal to the next element.  On data types that do not preserve \n         ordering, or enforce their own ordering, the result may not\n         be what you expect.  On types such as maps, this may result in\n         changing an existing item.  See also \u003ccode\u003e\u003ca\u003einsertBy\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "Data.ListLike",
          "name": "insert",
          "package": "ListLike",
          "signature": "item -\u003e full -\u003e full",
          "source": "src/Data-ListLike-Base.html#insert",
          "type": "method"
        },
        "index": {
          "description": "Inserts the element at the last place where it is still less than or equal to the next element On data types that do not preserve ordering or enforce their own ordering the result may not be what you expect On types such as maps this may result in changing an existing item See also insertBy",
          "hierarchy": "Data ListLike",
          "module": "Data.ListLike",
          "name": "insert",
          "normalized": "a-\u003eb-\u003eb",
          "package": "ListLike",
          "signature": "item-\u003efull-\u003efull",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike.html#v:insert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003einsert\u003c/a\u003e\u003c/code\u003e, but with a custom comparison function \n\u003c/p\u003e",
          "module": "Data.ListLike",
          "name": "insertBy",
          "package": "ListLike",
          "signature": "(item -\u003e item -\u003e Ordering) -\u003e item -\u003e full -\u003e full",
          "source": "src/Data-ListLike-Base.html#insertBy",
          "type": "method"
        },
        "index": {
          "description": "Like insert but with custom comparison function",
          "hierarchy": "Data ListLike",
          "module": "Data.ListLike",
          "name": "insertBy",
          "normalized": "(a-\u003ea-\u003eOrdering)-\u003ea-\u003eb-\u003eb",
          "package": "ListLike",
          "partial": "By",
          "signature": "(item-\u003eitem-\u003eOrdering)-\u003eitem-\u003efull-\u003efull",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike.html#v:insertBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInteract with stdin and stdout by using a function to transform\n input to output.  May be lazy.  See \u003ccode\u003e\u003ca\u003einteract\u003c/a\u003e\u003c/code\u003e for more.\n\u003c/p\u003e",
          "module": "Data.ListLike",
          "name": "interact",
          "package": "ListLike",
          "signature": "(full -\u003e full) -\u003e IO ()",
          "source": "src/Data-ListLike-IO.html#interact",
          "type": "method"
        },
        "index": {
          "description": "Interact with stdin and stdout by using function to transform input to output May be lazy See interact for more",
          "hierarchy": "Data ListLike",
          "module": "Data.ListLike",
          "name": "interact",
          "normalized": "(a-\u003ea)-\u003eIO()",
          "package": "ListLike",
          "signature": "(full-\u003efull)-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike.html#v:interact"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList intersection: the set of elements that occur in both lists.\n         See also \u003ccode\u003e\u003ca\u003eintersectBy\u003c/a\u003e\u003c/code\u003e \n\u003c/p\u003e",
          "module": "Data.ListLike",
          "name": "intersect",
          "package": "ListLike",
          "signature": "full -\u003e full -\u003e full",
          "source": "src/Data-ListLike-Base.html#intersect",
          "type": "method"
        },
        "index": {
          "description": "List intersection the set of elements that occur in both lists See also intersectBy",
          "hierarchy": "Data ListLike",
          "module": "Data.ListLike",
          "name": "intersect",
          "normalized": "a-\u003ea-\u003ea",
          "package": "ListLike",
          "signature": "full-\u003efull-\u003efull",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike.html#v:intersect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneric version of \u003ccode\u003e\u003ca\u003eintersect\u003c/a\u003e\u003c/code\u003e \n\u003c/p\u003e",
          "module": "Data.ListLike",
          "name": "intersectBy",
          "package": "ListLike",
          "signature": "(item -\u003e item -\u003e Bool) -\u003e full -\u003e full -\u003e full",
          "source": "src/Data-ListLike-Base.html#intersectBy",
          "type": "method"
        },
        "index": {
          "description": "Generic version of intersect",
          "hierarchy": "Data ListLike",
          "module": "Data.ListLike",
          "name": "intersectBy",
          "normalized": "(a-\u003ea-\u003eBool)-\u003eb-\u003eb-\u003eb",
          "package": "ListLike",
          "partial": "By",
          "signature": "(item-\u003eitem-\u003eBool)-\u003efull-\u003efull-\u003efull",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike.html#v:intersectBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd an item between each element in the structure \n\u003c/p\u003e",
          "module": "Data.ListLike",
          "name": "intersperse",
          "package": "ListLike",
          "signature": "item -\u003e full -\u003e full",
          "source": "src/Data-ListLike-Base.html#intersperse",
          "type": "method"
        },
        "index": {
          "description": "Add an item between each element in the structure",
          "hierarchy": "Data ListLike",
          "module": "Data.ListLike",
          "name": "intersperse",
          "normalized": "a-\u003eb-\u003eb",
          "package": "ListLike",
          "signature": "item-\u003efull-\u003efull",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike.html#v:intersperse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrue when the first list is wholly containted within the second \n\u003c/p\u003e",
          "module": "Data.ListLike",
          "name": "isInfixOf",
          "package": "ListLike",
          "signature": "full -\u003e full -\u003e Bool",
          "source": "src/Data-ListLike-Base.html#isInfixOf",
          "type": "method"
        },
        "index": {
          "description": "True when the first list is wholly containted within the second",
          "hierarchy": "Data ListLike",
          "module": "Data.ListLike",
          "name": "isInfixOf",
          "normalized": "a-\u003ea-\u003eBool",
          "package": "ListLike",
          "partial": "Infix Of",
          "signature": "full-\u003efull-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike.html#v:isInfixOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrue when the first list is at the beginning of the second. \n\u003c/p\u003e",
          "module": "Data.ListLike",
          "name": "isPrefixOf",
          "package": "ListLike",
          "signature": "full -\u003e full -\u003e Bool",
          "source": "src/Data-ListLike-Base.html#isPrefixOf",
          "type": "method"
        },
        "index": {
          "description": "True when the first list is at the beginning of the second",
          "hierarchy": "Data ListLike",
          "module": "Data.ListLike",
          "name": "isPrefixOf",
          "normalized": "a-\u003ea-\u003eBool",
          "package": "ListLike",
          "partial": "Prefix Of",
          "signature": "full-\u003efull-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike.html#v:isPrefixOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrue when the first list is at the beginning of the second. \n\u003c/p\u003e",
          "module": "Data.ListLike",
          "name": "isSuffixOf",
          "package": "ListLike",
          "signature": "full -\u003e full -\u003e Bool",
          "source": "src/Data-ListLike-Base.html#isSuffixOf",
          "type": "method"
        },
        "index": {
          "description": "True when the first list is at the beginning of the second",
          "hierarchy": "Data ListLike",
          "module": "Data.ListLike",
          "name": "isSuffixOf",
          "normalized": "a-\u003ea-\u003eBool",
          "package": "ListLike",
          "partial": "Suffix Of",
          "signature": "full-\u003efull-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike.html#v:isSuffixOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn infinite list of repeated calls of the function to args \n\u003c/p\u003e",
          "module": "Data.ListLike",
          "name": "iterate",
          "package": "ListLike",
          "signature": "(item -\u003e item) -\u003e item -\u003e full",
          "source": "src/Data-ListLike-Base.html#iterate",
          "type": "method"
        },
        "index": {
          "description": "An infinite list of repeated calls of the function to args",
          "hierarchy": "Data ListLike",
          "module": "Data.ListLike",
          "name": "iterate",
          "normalized": "(a-\u003ea)-\u003ea-\u003eb",
          "package": "ListLike",
          "signature": "(item-\u003eitem)-\u003eitem-\u003efull",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike.html#v:iterate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtracts the last element of a \u003ccode\u003e\u003ca\u003eListLike\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "Data.ListLike",
          "name": "last",
          "package": "ListLike",
          "signature": "full -\u003e item",
          "source": "src/Data-ListLike-Base.html#last",
          "type": "method"
        },
        "index": {
          "description": "Extracts the last element of ListLike",
          "hierarchy": "Data ListLike",
          "module": "Data.ListLike",
          "name": "last",
          "normalized": "a-\u003eb",
          "package": "ListLike",
          "signature": "full-\u003eitem",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike.html#v:last"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLength of the list.  See also \u003ccode\u003e\u003ca\u003egenericLength\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "Data.ListLike",
          "name": "length",
          "package": "ListLike",
          "signature": "full -\u003e Int",
          "source": "src/Data-ListLike-Base.html#length",
          "type": "method"
        },
        "index": {
          "description": "Length of the list See also genericLength",
          "hierarchy": "Data ListLike",
          "module": "Data.ListLike",
          "name": "length",
          "normalized": "a-\u003eInt",
          "package": "ListLike",
          "signature": "full-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike.html#v:length"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBreaks a string into a list of strings \n\u003c/p\u003e",
          "module": "Data.ListLike",
          "name": "lines",
          "package": "ListLike",
          "signature": "s -\u003e full",
          "source": "src/Data-ListLike-String.html#lines",
          "type": "method"
        },
        "index": {
          "description": "Breaks string into list of strings",
          "hierarchy": "Data ListLike",
          "module": "Data.ListLike",
          "name": "lines",
          "normalized": "a-\u003eb",
          "package": "ListLike",
          "signature": "s-\u003efull",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike.html#v:lines"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a function to each element, returning any other\n         valid \u003ccode\u003e\u003ca\u003eListLike\u003c/a\u003e\u003c/code\u003e.  \u003ccode\u003e\u003ca\u003erigidMap\u003c/a\u003e\u003c/code\u003e will always be at least\n         as fast, if not faster, than this function and is recommended\n         if it will work for your purposes.  See also \u003ccode\u003e\u003ca\u003emapM\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "Data.ListLike",
          "name": "map",
          "package": "ListLike",
          "signature": "(item -\u003e item') -\u003e full -\u003e full'",
          "source": "src/Data-ListLike-Base.html#map",
          "type": "method"
        },
        "index": {
          "description": "Apply function to each element returning any other valid ListLike rigidMap will always be at least as fast if not faster than this function and is recommended if it will work for your purposes See also mapM",
          "hierarchy": "Data ListLike",
          "module": "Data.ListLike",
          "name": "map",
          "normalized": "(a-\u003eb)-\u003ec-\u003ed",
          "package": "ListLike",
          "signature": "(item-\u003eitem')-\u003efull-\u003efull'",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike.html#v:map"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA map in monad space.  Same as \u003ccode\u003e\u003ccode\u003e\u003ca\u003esequence\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e \n\u003c/p\u003e\u003cp\u003eSee also \u003ccode\u003e\u003ca\u003erigidMapM\u003c/a\u003e\u003c/code\u003e \n\u003c/p\u003e",
          "module": "Data.ListLike",
          "name": "mapM",
          "package": "ListLike",
          "signature": "(item -\u003e m item') -\u003e full -\u003e m full'",
          "source": "src/Data-ListLike-Base.html#mapM",
          "type": "method"
        },
        "index": {
          "description": "map in monad space Same as sequence map See also rigidMapM",
          "hierarchy": "Data ListLike",
          "module": "Data.ListLike",
          "name": "mapM",
          "normalized": "(a-\u003eb c)-\u003ed-\u003eb e",
          "package": "ListLike",
          "signature": "(item-\u003em item')-\u003efull-\u003em full'",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike.html#v:mapM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe maximum value of the list \n\u003c/p\u003e",
          "module": "Data.ListLike",
          "name": "maximum",
          "package": "ListLike",
          "signature": "full -\u003e item",
          "source": "src/Data-ListLike-Base.html#maximum",
          "type": "method"
        },
        "index": {
          "description": "The maximum value of the list",
          "hierarchy": "Data ListLike",
          "module": "Data.ListLike",
          "name": "maximum",
          "normalized": "a-\u003eb",
          "package": "ListLike",
          "signature": "full-\u003eitem",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike.html#v:maximum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe minimum value of the list \n\u003c/p\u003e",
          "module": "Data.ListLike",
          "name": "minimum",
          "package": "ListLike",
          "signature": "full -\u003e item",
          "source": "src/Data-ListLike-Base.html#minimum",
          "type": "method"
        },
        "index": {
          "description": "The minimum value of the list",
          "hierarchy": "Data ListLike",
          "module": "Data.ListLike",
          "name": "minimum",
          "normalized": "a-\u003eb",
          "package": "ListLike",
          "signature": "full-\u003eitem",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike.html#v:minimum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrue if the item does not occur in the list \n\u003c/p\u003e",
          "module": "Data.ListLike",
          "name": "notElem",
          "package": "ListLike",
          "signature": "item -\u003e full -\u003e Bool",
          "source": "src/Data-ListLike-Base.html#notElem",
          "type": "method"
        },
        "index": {
          "description": "True if the item does not occur in the list",
          "hierarchy": "Data ListLike",
          "module": "Data.ListLike",
          "name": "notElem",
          "normalized": "a-\u003eb-\u003eBool",
          "package": "ListLike",
          "partial": "Elem",
          "signature": "item-\u003efull-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike.html#v:notElem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemoves duplicate elements from the list.  See also \u003ccode\u003e\u003ca\u003enubBy\u003c/a\u003e\u003c/code\u003e \n\u003c/p\u003e",
          "module": "Data.ListLike",
          "name": "nub",
          "package": "ListLike",
          "signature": "full -\u003e full",
          "source": "src/Data-ListLike-Base.html#nub",
          "type": "method"
        },
        "index": {
          "description": "Removes duplicate elements from the list See also nubBy",
          "hierarchy": "Data ListLike",
          "module": "Data.ListLike",
          "name": "nub",
          "normalized": "a-\u003ea",
          "package": "ListLike",
          "signature": "full-\u003efull",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike.html#v:nub"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneric version of \u003ccode\u003e\u003ca\u003enub\u003c/a\u003e\u003c/code\u003e \n\u003c/p\u003e",
          "module": "Data.ListLike",
          "name": "nubBy",
          "package": "ListLike",
          "signature": "(item -\u003e item -\u003e Bool) -\u003e full -\u003e full",
          "source": "src/Data-ListLike-Base.html#nubBy",
          "type": "method"
        },
        "index": {
          "description": "Generic version of nub",
          "hierarchy": "Data ListLike",
          "module": "Data.ListLike",
          "name": "nubBy",
          "normalized": "(a-\u003ea-\u003eBool)-\u003eb-\u003eb",
          "package": "ListLike",
          "partial": "By",
          "signature": "(item-\u003eitem-\u003eBool)-\u003efull-\u003efull",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike.html#v:nubBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTests whether the list is empty. \n\u003c/p\u003e",
          "module": "Data.ListLike",
          "name": "null",
          "package": "ListLike",
          "signature": "full -\u003e Bool",
          "source": "src/Data-ListLike-Base.html#null",
          "type": "method"
        },
        "index": {
          "description": "Tests whether the list is empty",
          "hierarchy": "Data ListLike",
          "module": "Data.ListLike",
          "name": "null",
          "normalized": "a-\u003eBool",
          "package": "ListLike",
          "signature": "full-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike.html#v:null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the lists that do and do not satisfy the function.\n       Same as \u003ccode\u003e(\u003ccode\u003e\u003ca\u003efilter\u003c/a\u003e\u003c/code\u003e p xs, \u003ccode\u003e\u003ca\u003efilter\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003enot\u003c/a\u003e\u003c/code\u003e . p) xs)\u003c/code\u003e \n\u003c/p\u003e",
          "module": "Data.ListLike",
          "name": "partition",
          "package": "ListLike",
          "signature": "(item -\u003e Bool) -\u003e full -\u003e (full, full)",
          "source": "src/Data-ListLike-Base.html#partition",
          "type": "method"
        },
        "index": {
          "description": "Returns the lists that do and do not satisfy the function Same as filter xs filter not xs",
          "hierarchy": "Data ListLike",
          "module": "Data.ListLike",
          "name": "partition",
          "normalized": "(a-\u003eBool)-\u003eb-\u003e(b,b)",
          "package": "ListLike",
          "signature": "(item-\u003eBool)-\u003efull-\u003e(full,full)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike.html#v:partition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite data to stdout.\n\u003c/p\u003e",
          "module": "Data.ListLike",
          "name": "putStr",
          "package": "ListLike",
          "signature": "full -\u003e IO ()",
          "source": "src/Data-ListLike-IO.html#putStr",
          "type": "method"
        },
        "index": {
          "description": "Write data to stdout",
          "hierarchy": "Data ListLike",
          "module": "Data.ListLike",
          "name": "putStr",
          "normalized": "a-\u003eIO()",
          "package": "ListLike",
          "partial": "Str",
          "signature": "full-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike.html#v:putStr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite data plus newline character to stdout.\n\u003c/p\u003e",
          "module": "Data.ListLike",
          "name": "putStrLn",
          "package": "ListLike",
          "signature": "full -\u003e IO ()",
          "source": "src/Data-ListLike-IO.html#putStrLn",
          "type": "method"
        },
        "index": {
          "description": "Write data plus newline character to stdout",
          "hierarchy": "Data ListLike",
          "module": "Data.ListLike",
          "name": "putStrLn",
          "normalized": "a-\u003eIO()",
          "package": "ListLike",
          "partial": "Str Ln",
          "signature": "full-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike.html#v:putStrLn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead file.  May be lazy.\n\u003c/p\u003e",
          "module": "Data.ListLike",
          "name": "readFile",
          "package": "ListLike",
          "signature": "FilePath -\u003e IO full",
          "source": "src/Data-ListLike-IO.html#readFile",
          "type": "method"
        },
        "index": {
          "description": "Read file May be lazy",
          "hierarchy": "Data ListLike",
          "module": "Data.ListLike",
          "name": "readFile",
          "normalized": "FilePath-\u003eIO a",
          "package": "ListLike",
          "partial": "File",
          "signature": "FilePath-\u003eIO full",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike.html#v:readFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn infinite list where each element is the same \n\u003c/p\u003e",
          "module": "Data.ListLike",
          "name": "repeat",
          "package": "ListLike",
          "signature": "item -\u003e full",
          "source": "src/Data-ListLike-Base.html#repeat",
          "type": "method"
        },
        "index": {
          "description": "An infinite list where each element is the same",
          "hierarchy": "Data ListLike",
          "module": "Data.ListLike",
          "name": "repeat",
          "normalized": "a-\u003eb",
          "package": "ListLike",
          "signature": "item-\u003efull",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike.html#v:repeat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a structure with the specified length with every element\n    set to the item passed in.  See also \u003ccode\u003e\u003ca\u003egenericReplicate\u003c/a\u003e\u003c/code\u003e \n\u003c/p\u003e",
          "module": "Data.ListLike",
          "name": "replicate",
          "package": "ListLike",
          "signature": "Int -\u003e item -\u003e full",
          "source": "src/Data-ListLike-Base.html#replicate",
          "type": "method"
        },
        "index": {
          "description": "Generate structure with the specified length with every element set to the item passed in See also genericReplicate",
          "hierarchy": "Data ListLike",
          "module": "Data.ListLike",
          "name": "replicate",
          "normalized": "Int-\u003ea-\u003eb",
          "package": "ListLike",
          "signature": "Int-\u003eitem-\u003efull",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike.html#v:replicate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReverse the elements in a list. \n\u003c/p\u003e",
          "module": "Data.ListLike",
          "name": "reverse",
          "package": "ListLike",
          "signature": "full -\u003e full",
          "source": "src/Data-ListLike-Base.html#reverse",
          "type": "method"
        },
        "index": {
          "description": "Reverse the elements in list",
          "hierarchy": "Data ListLike",
          "module": "Data.ListLike",
          "name": "reverse",
          "normalized": "a-\u003ea",
          "package": "ListLike",
          "signature": "full-\u003efull",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike.html#v:reverse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003econcatMap\u003c/a\u003e\u003c/code\u003e, but without the possibility of changing\n         the type of the item.  This can have performance benefits\n         for some things such as ByteString. \n\u003c/p\u003e",
          "module": "Data.ListLike",
          "name": "rigidConcatMap",
          "package": "ListLike",
          "signature": "(item -\u003e full) -\u003e full -\u003e full",
          "source": "src/Data-ListLike-Base.html#rigidConcatMap",
          "type": "method"
        },
        "index": {
          "description": "Like concatMap but without the possibility of changing the type of the item This can have performance benefits for some things such as ByteString",
          "hierarchy": "Data ListLike",
          "module": "Data.ListLike",
          "name": "rigidConcatMap",
          "normalized": "(a-\u003eb)-\u003eb-\u003eb",
          "package": "ListLike",
          "partial": "Concat Map",
          "signature": "(item-\u003efull)-\u003efull-\u003efull",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike.html#v:rigidConcatMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e, but without the possibility of changing the type of\n       the item.  This can have performance benefits for things such as\n       ByteStrings, since it will let the ByteString use its native\n       low-level map implementation. \n\u003c/p\u003e",
          "module": "Data.ListLike",
          "name": "rigidMap",
          "package": "ListLike",
          "signature": "(item -\u003e item) -\u003e full -\u003e full",
          "source": "src/Data-ListLike-Base.html#rigidMap",
          "type": "method"
        },
        "index": {
          "description": "Like map but without the possibility of changing the type of the item This can have performance benefits for things such as ByteStrings since it will let the ByteString use its native low-level map implementation",
          "hierarchy": "Data ListLike",
          "module": "Data.ListLike",
          "name": "rigidMap",
          "normalized": "(a-\u003ea)-\u003eb-\u003eb",
          "package": "ListLike",
          "partial": "Map",
          "signature": "(item-\u003eitem)-\u003efull-\u003efull",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike.html#v:rigidMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003emapM\u003c/a\u003e\u003c/code\u003e, but without the possibility of changing the type\n         of the item.  This can have performance benefits with some types. \n\u003c/p\u003e",
          "module": "Data.ListLike",
          "name": "rigidMapM",
          "package": "ListLike",
          "signature": "(item -\u003e m item) -\u003e full -\u003e m full",
          "source": "src/Data-ListLike-Base.html#rigidMapM",
          "type": "method"
        },
        "index": {
          "description": "Like mapM but without the possibility of changing the type of the item This can have performance benefits with some types",
          "hierarchy": "Data ListLike",
          "module": "Data.ListLike",
          "name": "rigidMapM",
          "normalized": "(a-\u003eb a)-\u003ec-\u003eb c",
          "package": "ListLike",
          "partial": "Map",
          "signature": "(item-\u003em item)-\u003efull-\u003em full",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike.html#v:rigidMapM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluate each action in the sequence and collect the results \n\u003c/p\u003e",
          "module": "Data.ListLike",
          "name": "sequence",
          "package": "ListLike",
          "signature": "fullinp -\u003e m full",
          "source": "src/Data-ListLike-Base.html#sequence",
          "type": "method"
        },
        "index": {
          "description": "Evaluate each action in the sequence and collect the results",
          "hierarchy": "Data ListLike",
          "module": "Data.ListLike",
          "name": "sequence",
          "normalized": "a-\u003eb c",
          "package": "ListLike",
          "signature": "fullinp-\u003em full",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike.html#v:sequence"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a single-element list out of an element \n\u003c/p\u003e",
          "module": "Data.ListLike",
          "name": "singleton",
          "package": "ListLike",
          "signature": "item -\u003e full",
          "source": "src/Data-ListLike-Base.html#singleton",
          "type": "method"
        },
        "index": {
          "description": "Creates single-element list out of an element",
          "hierarchy": "Data ListLike",
          "module": "Data.ListLike",
          "name": "singleton",
          "normalized": "a-\u003eb",
          "package": "ListLike",
          "signature": "item-\u003efull",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike.html#v:singleton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdds an element to the *end* of a \u003ccode\u003e\u003ca\u003eListLike\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "Data.ListLike",
          "name": "snoc",
          "package": "ListLike",
          "signature": "full -\u003e item -\u003e full",
          "source": "src/Data-ListLike-Base.html#snoc",
          "type": "method"
        },
        "index": {
          "description": "Adds an element to the end of ListLike",
          "hierarchy": "Data ListLike",
          "module": "Data.ListLike",
          "name": "snoc",
          "normalized": "a-\u003eb-\u003ea",
          "package": "ListLike",
          "signature": "full-\u003eitem-\u003efull",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike.html#v:snoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSorts the list.  On data types that do not preserve ordering,\n         or enforce their own ordering, the result may not be what\n         you expect.  See also \u003ccode\u003e\u003ca\u003esortBy\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "Data.ListLike",
          "name": "sort",
          "package": "ListLike",
          "signature": "full -\u003e full",
          "source": "src/Data-ListLike-Base.html#sort",
          "type": "method"
        },
        "index": {
          "description": "Sorts the list On data types that do not preserve ordering or enforce their own ordering the result may not be what you expect See also sortBy",
          "hierarchy": "Data ListLike",
          "module": "Data.ListLike",
          "name": "sort",
          "normalized": "a-\u003ea",
          "package": "ListLike",
          "signature": "full-\u003efull",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike.html#v:sort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSort function taking a custom comparison function \n\u003c/p\u003e",
          "module": "Data.ListLike",
          "name": "sortBy",
          "package": "ListLike",
          "signature": "(item -\u003e item -\u003e Ordering) -\u003e full -\u003e full",
          "source": "src/Data-ListLike-Base.html#sortBy",
          "type": "method"
        },
        "index": {
          "description": "Sort function taking custom comparison function",
          "hierarchy": "Data ListLike",
          "module": "Data.ListLike",
          "name": "sortBy",
          "normalized": "(a-\u003ea-\u003eOrdering)-\u003eb-\u003eb",
          "package": "ListLike",
          "partial": "By",
          "signature": "(item-\u003eitem-\u003eOrdering)-\u003efull-\u003efull",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike.html#v:sortBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe equivalent of \u003ccode\u003e(\u003ccode\u003e\u003ca\u003etakeWhile\u003c/a\u003e\u003c/code\u003e f xs, \u003ccode\u003e\u003ca\u003edropWhile\u003c/a\u003e\u003c/code\u003e f xs)\u003c/code\u003e \n\u003c/p\u003e",
          "module": "Data.ListLike",
          "name": "span",
          "package": "ListLike",
          "signature": "(item -\u003e Bool) -\u003e full -\u003e (full, full)",
          "source": "src/Data-ListLike-Base.html#span",
          "type": "method"
        },
        "index": {
          "description": "The equivalent of takeWhile xs dropWhile xs",
          "hierarchy": "Data ListLike",
          "module": "Data.ListLike",
          "name": "span",
          "normalized": "(a-\u003eBool)-\u003eb-\u003e(b,b)",
          "package": "ListLike",
          "signature": "(item-\u003eBool)-\u003efull-\u003e(full,full)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike.html#v:span"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEquivalent to \u003ccode\u003e(\u003ccode\u003e\u003ca\u003etake\u003c/a\u003e\u003c/code\u003e n xs, \u003ccode\u003e\u003ca\u003edrop\u003c/a\u003e\u003c/code\u003e n xs)\u003c/code\u003e.  See also \u003ccode\u003e\u003ca\u003egenericSplitAt\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "Data.ListLike",
          "name": "splitAt",
          "package": "ListLike",
          "signature": "Int -\u003e full -\u003e (full, full)",
          "source": "src/Data-ListLike-Base.html#splitAt",
          "type": "method"
        },
        "index": {
          "description": "Equivalent to take xs drop xs See also genericSplitAt",
          "hierarchy": "Data ListLike",
          "module": "Data.ListLike",
          "name": "splitAt",
          "normalized": "Int-\u003ea-\u003e(a,a)",
          "package": "ListLike",
          "partial": "At",
          "signature": "Int-\u003efull-\u003e(full,full)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike.html#v:splitAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGives all elements after the head. \n\u003c/p\u003e",
          "module": "Data.ListLike",
          "name": "tail",
          "package": "ListLike",
          "signature": "full -\u003e full",
          "source": "src/Data-ListLike-Base.html#tail",
          "type": "method"
        },
        "index": {
          "description": "Gives all elements after the head",
          "hierarchy": "Data ListLike",
          "module": "Data.ListLike",
          "name": "tail",
          "normalized": "a-\u003ea",
          "package": "ListLike",
          "signature": "full-\u003efull",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike.html#v:tail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll final segnemts, longest first \n\u003c/p\u003e",
          "module": "Data.ListLike",
          "name": "tails",
          "package": "ListLike",
          "signature": "full -\u003e full'",
          "source": "src/Data-ListLike-Base.html#tails",
          "type": "method"
        },
        "index": {
          "description": "All final segnemts longest first",
          "hierarchy": "Data ListLike",
          "module": "Data.ListLike",
          "name": "tails",
          "normalized": "a-\u003eb",
          "package": "ListLike",
          "signature": "full-\u003efull'",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike.html#v:tails"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTakes the first n elements of the list.  See also \u003ccode\u003e\u003ca\u003egenericTake\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "Data.ListLike",
          "name": "take",
          "package": "ListLike",
          "signature": "Int -\u003e full -\u003e full",
          "source": "src/Data-ListLike-Base.html#take",
          "type": "method"
        },
        "index": {
          "description": "Takes the first elements of the list See also genericTake",
          "hierarchy": "Data ListLike",
          "module": "Data.ListLike",
          "name": "take",
          "normalized": "Int-\u003ea-\u003ea",
          "package": "ListLike",
          "signature": "Int-\u003efull-\u003efull",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike.html#v:take"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns all elements at start of list that satisfy the function. \n\u003c/p\u003e",
          "module": "Data.ListLike",
          "name": "takeWhile",
          "package": "ListLike",
          "signature": "(item -\u003e Bool) -\u003e full -\u003e full",
          "source": "src/Data-ListLike-Base.html#takeWhile",
          "type": "method"
        },
        "index": {
          "description": "Returns all elements at start of list that satisfy the function",
          "hierarchy": "Data ListLike",
          "module": "Data.ListLike",
          "name": "takeWhile",
          "normalized": "(a-\u003eBool)-\u003eb-\u003eb",
          "package": "ListLike",
          "partial": "While",
          "signature": "(item-\u003eBool)-\u003efull-\u003efull",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike.html#v:takeWhile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts the structure to a list.  This is logically equivolent\n         to \u003ccode\u003e\u003ca\u003efromListLike\u003c/a\u003e\u003c/code\u003e, but may have a more optimized implementation. \n\u003c/p\u003e",
          "module": "Data.ListLike",
          "name": "toList",
          "package": "ListLike",
          "signature": "full -\u003e [item]",
          "source": "src/Data-ListLike-Base.html#toList",
          "type": "method"
        },
        "index": {
          "description": "Converts the structure to list This is logically equivolent to fromListLike but may have more optimized implementation",
          "hierarchy": "Data ListLike",
          "module": "Data.ListLike",
          "name": "toList",
          "normalized": "a-\u003e[b]",
          "package": "ListLike",
          "partial": "List",
          "signature": "full-\u003e[item]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike.html#v:toList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts the structure to a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e \n\u003c/p\u003e",
          "module": "Data.ListLike",
          "name": "toString",
          "package": "ListLike",
          "signature": "s -\u003e String",
          "source": "src/Data-ListLike-String.html#toString",
          "type": "method"
        },
        "index": {
          "description": "Converts the structure to String",
          "hierarchy": "Data ListLike",
          "module": "Data.ListLike",
          "name": "toString",
          "normalized": "a-\u003eString",
          "package": "ListLike",
          "partial": "String",
          "signature": "s-\u003eString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike.html#v:toString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList union: the set of elements that occur in either list.\n         Duplicate elements in the first list will remain duplicate.\n         See also \u003ccode\u003e\u003ca\u003eunionBy\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "Data.ListLike",
          "name": "union",
          "package": "ListLike",
          "signature": "full -\u003e full -\u003e full",
          "source": "src/Data-ListLike-Base.html#union",
          "type": "method"
        },
        "index": {
          "description": "List union the set of elements that occur in either list Duplicate elements in the first list will remain duplicate See also unionBy",
          "hierarchy": "Data ListLike",
          "module": "Data.ListLike",
          "name": "union",
          "normalized": "a-\u003ea-\u003ea",
          "package": "ListLike",
          "signature": "full-\u003efull-\u003efull",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike.html#v:union"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneric version of \u003ccode\u003e\u003ca\u003eunion\u003c/a\u003e\u003c/code\u003e \n\u003c/p\u003e",
          "module": "Data.ListLike",
          "name": "unionBy",
          "package": "ListLike",
          "signature": "(item -\u003e item -\u003e Bool) -\u003e full -\u003e full -\u003e full",
          "source": "src/Data-ListLike-Base.html#unionBy",
          "type": "method"
        },
        "index": {
          "description": "Generic version of union",
          "hierarchy": "Data ListLike",
          "module": "Data.ListLike",
          "name": "unionBy",
          "normalized": "(a-\u003ea-\u003eBool)-\u003eb-\u003eb-\u003eb",
          "package": "ListLike",
          "partial": "By",
          "signature": "(item-\u003eitem-\u003eBool)-\u003efull-\u003efull-\u003efull",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike.html#v:unionBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBreaks a string into a list of words \n\u003c/p\u003e",
          "module": "Data.ListLike",
          "name": "words",
          "package": "ListLike",
          "signature": "s -\u003e full",
          "source": "src/Data-ListLike-String.html#words",
          "type": "method"
        },
        "index": {
          "description": "Breaks string into list of words",
          "hierarchy": "Data ListLike",
          "module": "Data.ListLike",
          "name": "words",
          "normalized": "a-\u003eb",
          "package": "ListLike",
          "signature": "s-\u003efull",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike.html#v:words"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite data to file.\n\u003c/p\u003e",
          "module": "Data.ListLike",
          "name": "writeFile",
          "package": "ListLike",
          "signature": "FilePath -\u003e full -\u003e IO ()",
          "source": "src/Data-ListLike-IO.html#writeFile",
          "type": "method"
        },
        "index": {
          "description": "Write data to file",
          "hierarchy": "Data ListLike",
          "module": "Data.ListLike",
          "name": "writeFile",
          "normalized": "FilePath-\u003ea-\u003eIO()",
          "package": "ListLike",
          "partial": "File",
          "signature": "FilePath-\u003efull-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ListLike/docs/Data-ListLike.html#v:writeFile"
      }
    }
  ]
]