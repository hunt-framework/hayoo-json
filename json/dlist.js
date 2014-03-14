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
        "word": "dlist"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDifference lists: a data structure for \u003cem\u003eO(1)\u003c/em\u003e append on lists.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.DList",
          "name": "DList",
          "package": "dlist",
          "source": "src/Data-DList.html",
          "type": "module"
        },
        "index": {
          "description": "Difference lists data structure for append on lists",
          "hierarchy": "Data DList",
          "module": "Data.DList",
          "name": "DList",
          "package": "dlist",
          "partial": "DList",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dlist/docs/Data-DList.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA difference list is a function that, given a list, returns the original\n contents of the difference list prepended to the given list.\n\u003c/p\u003e\u003cp\u003eThis structure supports \u003cem\u003eO(1)\u003c/em\u003e append and snoc operations on lists, making it\n very useful for append-heavy uses (esp. left-nested uses of \u003ccode\u003e\u003ca\u003e++\u003c/a\u003e\u003c/code\u003e), such\n as logging and pretty printing.\n\u003c/p\u003e\u003cp\u003eHere is an example using DList as the state type when printing a tree with\n the Writer monad:\n\u003c/p\u003e\u003cpre\u003e import Control.Monad.Writer\n import Data.DList\n\n data Tree a = Leaf a | Branch (Tree a) (Tree a)\n\n flatten_writer :: Tree x -\u003e DList x\n flatten_writer = snd . runWriter . flatten\n     where\n       flatten (Leaf x)     = tell (singleton x)\n       flatten (Branch x y) = flatten x \u003e\u003e flatten y\n\u003c/pre\u003e",
          "module": "Data.DList",
          "name": "DList",
          "package": "dlist",
          "source": "src/Data-DList.html#DList",
          "type": "newtype"
        },
        "index": {
          "description": "difference list is function that given list returns the original contents of the difference list prepended to the given list This structure supports append and snoc operations on lists making it very useful for append-heavy uses esp left-nested uses of such as logging and pretty printing Here is an example using DList as the state type when printing tree with the Writer monad import Control.Monad.Writer import Data.DList data Tree Leaf Branch Tree Tree flatten writer Tree DList flatten writer snd runWriter flatten where flatten Leaf tell singleton flatten Branch flatten flatten",
          "hierarchy": "Data DList",
          "module": "Data.DList",
          "name": "DList",
          "package": "dlist",
          "partial": "DList",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/dlist/docs/Data-DList.html#t:DList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: It will be removed in dlist-v0.7 (see \u003ca\u003e#4\u003c/a\u003e).\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.DList",
          "name": "DL",
          "package": "dlist",
          "signature": "DL",
          "source": "src/Data-DList.html#DList",
          "type": "function"
        },
        "index": {
          "description": "Deprecated It will be removed in dlist-v0.7 see",
          "hierarchy": "Data DList",
          "module": "Data.DList",
          "name": "DL",
          "package": "dlist",
          "partial": "DL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dlist/docs/Data-DList.html#v:DL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Append dlists\n\u003c/p\u003e",
          "module": "Data.DList",
          "name": "append",
          "package": "dlist",
          "signature": "DList a -\u003e DList a -\u003e DList a",
          "source": "src/Data-DList.html#append",
          "type": "function"
        },
        "index": {
          "description": "Append dlists",
          "hierarchy": "Data DList",
          "module": "Data.DList",
          "name": "append",
          "normalized": "DList a-\u003eDList a-\u003eDList a",
          "package": "dlist",
          "signature": "DList a-\u003eDList a-\u003eDList a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dlist/docs/Data-DList.html#v:append"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a dlist to a list to get the underlying list with an extension\n\u003c/p\u003e\u003cpre\u003e apply (fromList xs) ys = xs ++ ys\n\u003c/pre\u003e",
          "module": "Data.DList",
          "name": "apply",
          "package": "dlist",
          "signature": "DList a -\u003e [a] -\u003e [a]",
          "source": "src/Data-DList.html#apply",
          "type": "function"
        },
        "index": {
          "description": "Apply dlist to list to get the underlying list with an extension apply fromList xs ys xs ys",
          "hierarchy": "Data DList",
          "module": "Data.DList",
          "name": "apply",
          "normalized": "DList a-\u003e[a]-\u003e[a]",
          "package": "dlist",
          "signature": "DList a-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dlist/docs/Data-DList.html#v:apply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(spine)\u003c/em\u003e. Concatenate dlists\n\u003c/p\u003e",
          "module": "Data.DList",
          "name": "concat",
          "package": "dlist",
          "signature": "[DList a] -\u003e DList a",
          "source": "src/Data-DList.html#concat",
          "type": "function"
        },
        "index": {
          "description": "spine Concatenate dlists",
          "hierarchy": "Data DList",
          "module": "Data.DList",
          "name": "concat",
          "normalized": "[DList a]-\u003eDList a",
          "package": "dlist",
          "signature": "[DList a]-\u003eDList a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dlist/docs/Data-DList.html#v:concat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Prepend a single element to a dlist\n\u003c/p\u003e",
          "module": "Data.DList",
          "name": "cons",
          "package": "dlist",
          "signature": "a -\u003e DList a -\u003e DList a",
          "source": "src/Data-DList.html#cons",
          "type": "function"
        },
        "index": {
          "description": "Prepend single element to dlist",
          "hierarchy": "Data DList",
          "module": "Data.DList",
          "name": "cons",
          "normalized": "a-\u003eDList a-\u003eDList a",
          "package": "dlist",
          "signature": "a-\u003eDList a-\u003eDList a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dlist/docs/Data-DList.html#v:cons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a dlist containing no elements\n\u003c/p\u003e",
          "module": "Data.DList",
          "name": "empty",
          "package": "dlist",
          "signature": "DList a",
          "source": "src/Data-DList.html#empty",
          "type": "function"
        },
        "index": {
          "description": "Create dlist containing no elements",
          "hierarchy": "Data DList",
          "module": "Data.DList",
          "name": "empty",
          "package": "dlist",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dlist/docs/Data-DList.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Foldr over difference lists\n\u003c/p\u003e",
          "module": "Data.DList",
          "name": "foldr",
          "package": "dlist",
          "signature": "(a -\u003e b -\u003e b) -\u003e b -\u003e DList a -\u003e b",
          "source": "src/Data-DList.html#foldr",
          "type": "function"
        },
        "index": {
          "description": "Foldr over difference lists",
          "hierarchy": "Data DList",
          "module": "Data.DList",
          "name": "foldr",
          "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003eDList a-\u003eb",
          "package": "dlist",
          "signature": "(a-\u003eb-\u003eb)-\u003eb-\u003eDList a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dlist/docs/Data-DList.html#v:foldr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a list to a dlist\n\u003c/p\u003e",
          "module": "Data.DList",
          "name": "fromList",
          "package": "dlist",
          "signature": "[a] -\u003e DList a",
          "source": "src/Data-DList.html#fromList",
          "type": "function"
        },
        "index": {
          "description": "Convert list to dlist",
          "hierarchy": "Data DList",
          "module": "Data.DList",
          "name": "fromList",
          "normalized": "[a]-\u003eDList a",
          "package": "dlist",
          "partial": "List",
          "signature": "[a]-\u003eDList a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dlist/docs/Data-DList.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Return the head of the dlist\n\u003c/p\u003e",
          "module": "Data.DList",
          "name": "head",
          "package": "dlist",
          "signature": "DList a -\u003e a",
          "source": "src/Data-DList.html#head",
          "type": "function"
        },
        "index": {
          "description": "Return the head of the dlist",
          "hierarchy": "Data DList",
          "module": "Data.DList",
          "name": "head",
          "normalized": "DList a-\u003ea",
          "package": "dlist",
          "signature": "DList a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dlist/docs/Data-DList.html#v:head"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. List elimination for dlists\n\u003c/p\u003e",
          "module": "Data.DList",
          "name": "list",
          "package": "dlist",
          "signature": "b -\u003e (a -\u003e DList a -\u003e b) -\u003e DList a -\u003e b",
          "source": "src/Data-DList.html#list",
          "type": "function"
        },
        "index": {
          "description": "List elimination for dlists",
          "hierarchy": "Data DList",
          "module": "Data.DList",
          "name": "list",
          "normalized": "a-\u003e(b-\u003eDList b-\u003ea)-\u003eDList b-\u003ea",
          "package": "dlist",
          "signature": "b-\u003e(a-\u003eDList a-\u003eb)-\u003eDList a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dlist/docs/Data-DList.html#v:list"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Map over difference lists.\n\u003c/p\u003e",
          "module": "Data.DList",
          "name": "map",
          "package": "dlist",
          "signature": "(a -\u003e b) -\u003e DList a -\u003e DList b",
          "source": "src/Data-DList.html#map",
          "type": "function"
        },
        "index": {
          "description": "Map over difference lists",
          "hierarchy": "Data DList",
          "module": "Data.DList",
          "name": "map",
          "normalized": "(a-\u003eb)-\u003eDList a-\u003eDList b",
          "package": "dlist",
          "signature": "(a-\u003eb)-\u003eDList a-\u003eDList b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dlist/docs/Data-DList.html#v:map"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Create a dlist of the given number of elements\n\u003c/p\u003e",
          "module": "Data.DList",
          "name": "replicate",
          "package": "dlist",
          "signature": "Int -\u003e a -\u003e DList a",
          "source": "src/Data-DList.html#replicate",
          "type": "function"
        },
        "index": {
          "description": "Create dlist of the given number of elements",
          "hierarchy": "Data DList",
          "module": "Data.DList",
          "name": "replicate",
          "normalized": "Int-\u003ea-\u003eDList a",
          "package": "dlist",
          "signature": "Int-\u003ea-\u003eDList a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dlist/docs/Data-DList.html#v:replicate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate dlist with a single element\n\u003c/p\u003e",
          "module": "Data.DList",
          "name": "singleton",
          "package": "dlist",
          "signature": "a -\u003e DList a",
          "source": "src/Data-DList.html#singleton",
          "type": "function"
        },
        "index": {
          "description": "Create dlist with single element",
          "hierarchy": "Data DList",
          "module": "Data.DList",
          "name": "singleton",
          "normalized": "a-\u003eDList a",
          "package": "dlist",
          "signature": "a-\u003eDList a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dlist/docs/Data-DList.html#v:singleton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Append a single element to a dlist\n\u003c/p\u003e",
          "module": "Data.DList",
          "name": "snoc",
          "package": "dlist",
          "signature": "DList a -\u003e a -\u003e DList a",
          "source": "src/Data-DList.html#snoc",
          "type": "function"
        },
        "index": {
          "description": "Append single element to dlist",
          "hierarchy": "Data DList",
          "module": "Data.DList",
          "name": "snoc",
          "normalized": "DList a-\u003ea-\u003eDList a",
          "package": "dlist",
          "signature": "DList a-\u003ea-\u003eDList a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dlist/docs/Data-DList.html#v:snoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Return the tail of the dlist\n\u003c/p\u003e",
          "module": "Data.DList",
          "name": "tail",
          "package": "dlist",
          "signature": "DList a -\u003e DList a",
          "source": "src/Data-DList.html#tail",
          "type": "function"
        },
        "index": {
          "description": "Return the tail of the dlist",
          "hierarchy": "Data DList",
          "module": "Data.DList",
          "name": "tail",
          "normalized": "DList a-\u003eDList a",
          "package": "dlist",
          "signature": "DList a-\u003eDList a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dlist/docs/Data-DList.html#v:tail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a dlist to a list\n\u003c/p\u003e",
          "module": "Data.DList",
          "name": "toList",
          "package": "dlist",
          "signature": "DList a -\u003e [a]",
          "source": "src/Data-DList.html#toList",
          "type": "function"
        },
        "index": {
          "description": "Convert dlist to list",
          "hierarchy": "Data DList",
          "module": "Data.DList",
          "name": "toList",
          "normalized": "DList a-\u003e[a]",
          "package": "dlist",
          "partial": "List",
          "signature": "DList a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dlist/docs/Data-DList.html#v:toList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: It will be removed in dlist-v0.7. Use \u003ccode\u003e\u003ca\u003eapply\u003c/a\u003e\u003c/code\u003e instead.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.DList",
          "name": "unDL",
          "package": "dlist",
          "signature": "[a] -\u003e [a]",
          "source": "src/Data-DList.html#DList",
          "type": "function"
        },
        "index": {
          "description": "Deprecated It will be removed in dlist-v0.7 Use apply instead",
          "hierarchy": "Data DList",
          "module": "Data.DList",
          "name": "unDL",
          "normalized": "[a]-\u003e[a]",
          "package": "dlist",
          "partial": "DL",
          "signature": "[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dlist/docs/Data-DList.html#v:unDL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Unfoldr for dlists\n\u003c/p\u003e",
          "module": "Data.DList",
          "name": "unfoldr",
          "package": "dlist",
          "signature": "(b -\u003e Maybe (a, b)) -\u003e b -\u003e DList a",
          "source": "src/Data-DList.html#unfoldr",
          "type": "function"
        },
        "index": {
          "description": "Unfoldr for dlists",
          "hierarchy": "Data DList",
          "module": "Data.DList",
          "name": "unfoldr",
          "normalized": "(a-\u003eMaybe(b,a))-\u003ea-\u003eDList b",
          "package": "dlist",
          "signature": "(b-\u003eMaybe(a,b))-\u003eb-\u003eDList a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dlist/docs/Data-DList.html#v:unfoldr"
      }
    }
  ]
]