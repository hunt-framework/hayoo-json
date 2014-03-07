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
        "word": "List"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.ListT",
          "name": "ListT",
          "package": "List",
          "source": "src/Control-Monad-ListT.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Monad ListT",
          "module": "Control.Monad.ListT",
          "name": "ListT",
          "package": "List",
          "partial": "List",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/List/docs/Control-Monad-ListT.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.ListT",
          "name": "ListT",
          "package": "List",
          "source": "src/Control-Monad-Trans-List.html#ListT",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Control Monad ListT",
          "module": "Control.Monad.ListT",
          "name": "ListT",
          "package": "List",
          "partial": "List",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/List/docs/Control-Monad-ListT.html#t:ListT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Control.Monad.ListT\",\"Control.Monad.Trans.List\"]",
          "name": "ListT",
          "package": "List",
          "signature": "ListT",
          "source": "src/Control-Monad-Trans-List.html#ListT",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/List/docs/Control-Monad-ListT.html#v:ListT\",\"http://hackage.haskell.org/package/List/docs/Control-Monad-Trans-List.html#v:ListT\"]"
        },
        "index": {
          "hierarchy": "Control Monad ListT",
          "module": "Control.Monad.ListT",
          "name": "ListT",
          "package": "List",
          "partial": "List",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/List/docs/Control-Monad-ListT.html#v:ListT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Control.Monad.ListT\",\"Control.Monad.Trans.List\"]",
          "name": "runListT",
          "package": "List",
          "signature": "m (ListItem (ListT m) a)",
          "source": "src/Control-Monad-Trans-List.html#ListT",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/List/docs/Control-Monad-ListT.html#v:runListT\",\"http://hackage.haskell.org/package/List/docs/Control-Monad-Trans-List.html#v:runListT\"]"
        },
        "index": {
          "hierarchy": "Control Monad ListT",
          "module": "Control.Monad.ListT",
          "name": "runListT",
          "package": "List",
          "partial": "List",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/List/docs/Control-Monad-ListT.html#v:runListT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003ccode\u003eList\u003c/code\u003e functions with type limited to use \u003ccode\u003eListT\u003c/code\u003e.\n This might come useful for type interference.\n\u003c/p\u003e\u003cp\u003eFunctions where the \u003ccode\u003eList\u003c/code\u003e is an input type and not only the result type do not need special limited versions.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.Trans.List.Funcs",
          "name": "Funcs",
          "package": "List",
          "source": "src/Control-Monad-Trans-List-Funcs.html",
          "type": "module"
        },
        "index": {
          "description": "List functions with type limited to use ListT This might come useful for type interference Functions where the List is an input type and not only the result type do not need special limited versions",
          "hierarchy": "Control Monad Trans List Funcs",
          "module": "Control.Monad.Trans.List.Funcs",
          "name": "Funcs",
          "package": "List",
          "partial": "Funcs",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/List/docs/Control-Monad-Trans-List-Funcs.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.List.Funcs",
          "name": "fromList",
          "package": "List",
          "signature": "[a] -\u003e ListT m a",
          "source": "src/Control-Monad-Trans-List-Funcs.html#fromList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Trans List Funcs",
          "module": "Control.Monad.Trans.List.Funcs",
          "name": "fromList",
          "normalized": "[a]-\u003eListT b a",
          "package": "List",
          "partial": "List",
          "signature": "[a]-\u003eListT m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/List/docs/Control-Monad-Trans-List-Funcs.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.List.Funcs",
          "name": "iterateM",
          "package": "List",
          "signature": "(a -\u003e m a) -\u003e m a -\u003e ListT m a",
          "source": "src/Control-Monad-Trans-List-Funcs.html#iterateM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Trans List Funcs",
          "module": "Control.Monad.Trans.List.Funcs",
          "name": "iterateM",
          "normalized": "(a-\u003eb a)-\u003eb a-\u003eListT b a",
          "package": "List",
          "signature": "(a-\u003em a)-\u003em a-\u003eListT m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/List/docs/Control-Monad-Trans-List-Funcs.html#v:iterateM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.List.Funcs",
          "name": "repeat",
          "package": "List",
          "signature": "a -\u003e ListT m a",
          "source": "src/Control-Monad-Trans-List-Funcs.html#repeat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Trans List Funcs",
          "module": "Control.Monad.Trans.List.Funcs",
          "name": "repeat",
          "normalized": "a-\u003eListT b a",
          "package": "List",
          "signature": "a-\u003eListT m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/List/docs/Control-Monad-Trans-List-Funcs.html#v:repeat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.List.Funcs",
          "name": "repeatM",
          "package": "List",
          "signature": "m a -\u003e ListT m a",
          "source": "src/Control-Monad-Trans-List-Funcs.html#repeatM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Trans List Funcs",
          "module": "Control.Monad.Trans.List.Funcs",
          "name": "repeatM",
          "normalized": "a b-\u003eListT a b",
          "package": "List",
          "signature": "m a-\u003eListT m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/List/docs/Control-Monad-Trans-List-Funcs.html#v:repeatM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA list monad transformer / a monadic list.\n\u003c/p\u003e\u003cp\u003eMonadic list example:\n   A program which reads numbers from the user and accumulates them.\n\u003c/p\u003e\u003cpre\u003e import Control.Monad.Trans.List.Funcs (repeatM)\n import Data.List.Class (execute, scanl, takeWhile, mapL)\n import Prelude hiding (scanl, takeWhile)\n \n main =\n     execute . mapL print .\n     scanl (+) 0 .\n     fmap (fst . head) .\n     takeWhile (not . null) .\n     fmap reads $ repeatM getLine\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Control.Monad.Trans.List",
          "name": "List",
          "package": "List",
          "source": "src/Control-Monad-Trans-List.html",
          "type": "module"
        },
        "index": {
          "description": "list monad transformer monadic list Monadic list example program which reads numbers from the user and accumulates them import Control.Monad.Trans.List.Funcs repeatM import Data.List.Class execute scanl takeWhile mapL import Prelude hiding scanl takeWhile main execute mapL print scanl fmap fst head takeWhile not null fmap reads repeatM getLine",
          "hierarchy": "Control Monad Trans List",
          "module": "Control.Monad.Trans.List",
          "name": "List",
          "package": "List",
          "partial": "List",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/List/docs/Control-Monad-Trans-List.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.List",
          "name": "ListT",
          "package": "List",
          "source": "src/Control-Monad-Trans-List.html#ListT",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Control Monad Trans List",
          "module": "Control.Monad.Trans.List",
          "name": "ListT",
          "package": "List",
          "partial": "List",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/List/docs/Control-Monad-Trans-List.html#t:ListT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eList\u003c/a\u003e\u003c/code\u003e class and actions for lists\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.List.Class",
          "name": "Class",
          "package": "List",
          "source": "src/Data-List-Class.html",
          "type": "module"
        },
        "index": {
          "description": "The List class and actions for lists",
          "hierarchy": "Data List Class",
          "module": "Data.List.Class",
          "name": "Class",
          "package": "List",
          "partial": "Class",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/List/docs/Data-List-Class.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA class for list types.\n Every list has an underlying monad.\n\u003c/p\u003e",
          "module": "Data.List.Class",
          "name": "List",
          "package": "List",
          "source": "src/Data-List-Class.html#List",
          "type": "class"
        },
        "index": {
          "description": "class for list types Every list has an underlying monad",
          "hierarchy": "Data List Class",
          "module": "Data.List.Class",
          "name": "List",
          "package": "List",
          "partial": "List",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/List/docs/Data-List-Class.html#t:List"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.List.Class",
          "name": "ListItem",
          "package": "List",
          "source": "src/Data-List-Class.html#ListItem",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data List Class",
          "module": "Data.List.Class",
          "name": "ListItem",
          "package": "List",
          "partial": "List Item",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/List/docs/Data-List-Class.html#t:ListItem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.List.Class",
          "name": "Cons",
          "package": "List",
          "signature": "Cons",
          "source": "src/Data-List-Class.html#ListItem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data List Class",
          "module": "Data.List.Class",
          "name": "Cons",
          "package": "List",
          "partial": "Cons",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/List/docs/Data-List-Class.html#v:Cons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.List.Class",
          "name": "Nil",
          "package": "List",
          "signature": "Nil",
          "source": "src/Data-List-Class.html#ListItem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data List Class",
          "module": "Data.List.Class",
          "name": "Nil",
          "package": "List",
          "partial": "Nil",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/List/docs/Data-List-Class.html#v:Nil"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.List.Class",
          "name": "catMaybes",
          "package": "List",
          "signature": "l (Maybe a) -\u003e l a",
          "source": "src/Data-List-Class.html#catMaybes",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data List Class",
          "module": "Data.List.Class",
          "name": "catMaybes",
          "normalized": "a(Maybe b)-\u003ea b",
          "package": "List",
          "partial": "Maybes",
          "signature": "l(Maybe a)-\u003el a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/List/docs/Data-List-Class.html#v:catMaybes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralized \u003ccode\u003e\u003ca\u003econcat\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eFor \u003ccode\u003eList l =\u003e l (l a) -\u003e l a\u003c/code\u003e use \u003ccode\u003e\u003ca\u003ejoin\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.List.Class",
          "name": "concat",
          "package": "List",
          "signature": "l [a] -\u003e l a",
          "source": "src/Data-List-Class.html#concat",
          "type": "function"
        },
        "index": {
          "description": "Generalized concat For List use join",
          "hierarchy": "Data List Class",
          "module": "Data.List.Class",
          "name": "concat",
          "normalized": "a[b]-\u003ea b",
          "package": "List",
          "signature": "l[a]-\u003el a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/List/docs/Data-List-Class.html#v:concat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenereralized \u003ccode\u003e\u003ca\u003econcatMap\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eFor \u003ccode\u003eList l =\u003e (a -\u003e l b) -\u003e l a -\u003e l b\u003c/code\u003e use \u003ccode\u003e\u003ca\u003e=\u003c\u003c\u003c/a\u003e\u003c/code\u003e (monadic bind)\n\u003c/p\u003e",
          "module": "Data.List.Class",
          "name": "concatMap",
          "package": "List",
          "signature": "(a -\u003e [b]) -\u003e l a -\u003e l b",
          "source": "src/Data-List-Class.html#concatMap",
          "type": "function"
        },
        "index": {
          "description": "Genereralized concatMap For List use monadic bind",
          "hierarchy": "Data List Class",
          "module": "Data.List.Class",
          "name": "concatMap",
          "normalized": "(a-\u003e[b])-\u003ec a-\u003ec b",
          "package": "List",
          "partial": "Map",
          "signature": "(a-\u003e[b])-\u003el a-\u003el b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/List/docs/Data-List-Class.html#v:concatMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econs. Can be derived from MonadPlus but is part of class for performance.\n\u003c/p\u003e",
          "module": "Data.List.Class",
          "name": "cons",
          "package": "List",
          "signature": "a -\u003e l a -\u003e l a",
          "source": "src/Data-List-Class.html#cons",
          "type": "method"
        },
        "index": {
          "description": "cons Can be derived from MonadPlus but is part of class for performance",
          "hierarchy": "Data List Class",
          "module": "Data.List.Class",
          "name": "cons",
          "normalized": "a-\u003eb a-\u003eb a",
          "package": "List",
          "signature": "a-\u003el a-\u003el a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/List/docs/Data-List-Class.html#v:cons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.List.Class",
          "name": "enumFrom",
          "package": "List",
          "signature": "a -\u003e l a",
          "source": "src/Data-List-Class.html#enumFrom",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data List Class",
          "module": "Data.List.Class",
          "name": "enumFrom",
          "normalized": "a-\u003eb a",
          "package": "List",
          "partial": "From",
          "signature": "a-\u003el a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/List/docs/Data-List-Class.html#v:enumFrom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.List.Class",
          "name": "enumFromTo",
          "package": "List",
          "signature": "a -\u003e a -\u003e l a",
          "source": "src/Data-List-Class.html#enumFromTo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data List Class",
          "module": "Data.List.Class",
          "name": "enumFromTo",
          "normalized": "a-\u003ea-\u003eb a",
          "package": "List",
          "partial": "From To",
          "signature": "a-\u003ea-\u003el a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/List/docs/Data-List-Class.html#v:enumFromTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute the monadic actions in a \u003ccode\u003e\u003ca\u003eList\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.List.Class",
          "name": "execute",
          "package": "List",
          "signature": "l a -\u003e ItemM l ()",
          "source": "src/Data-List-Class.html#execute",
          "type": "function"
        },
        "index": {
          "description": "Execute the monadic actions in List",
          "hierarchy": "Data List Class",
          "module": "Data.List.Class",
          "name": "execute",
          "normalized": "a b-\u003eItemM a()",
          "package": "List",
          "signature": "l a-\u003eItemM l()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/List/docs/Data-List-Class.html#v:execute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efilter for any MonadPlus\n\u003c/p\u003e\u003cpre\u003e \u003e filter (\u003e 5) (Just 3)\n Nothing\n\u003c/pre\u003e",
          "module": "Data.List.Class",
          "name": "filter",
          "package": "List",
          "signature": "(a -\u003e Bool) -\u003e m a -\u003e m a",
          "source": "src/Data-List-Class.html#filter",
          "type": "function"
        },
        "index": {
          "description": "filter for any MonadPlus filter Just Nothing",
          "hierarchy": "Data List Class",
          "module": "Data.List.Class",
          "name": "filter",
          "normalized": "(a-\u003eBool)-\u003eb a-\u003eb a",
          "package": "List",
          "signature": "(a-\u003eBool)-\u003em a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/List/docs/Data-List-Class.html#v:filter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.List.Class",
          "name": "filterL",
          "package": "List",
          "signature": "(a -\u003e ItemM l Bool) -\u003e l a -\u003e l a",
          "source": "src/Data-List-Class.html#filterL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data List Class",
          "module": "Data.List.Class",
          "name": "filterL",
          "normalized": "(a-\u003eItemM b Bool)-\u003eb a-\u003eb a",
          "package": "List",
          "signature": "(a-\u003eItemM l Bool)-\u003el a-\u003el a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/List/docs/Data-List-Class.html#v:filterL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.List.Class",
          "name": "foldl1L",
          "package": "List",
          "signature": "(a -\u003e a -\u003e a) -\u003e l a -\u003e ItemM l a",
          "source": "src/Data-List-Class.html#foldl1L",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data List Class",
          "module": "Data.List.Class",
          "name": "foldl1L",
          "normalized": "(a-\u003ea-\u003ea)-\u003eb a-\u003eItemM b a",
          "package": "List",
          "signature": "(a-\u003ea-\u003ea)-\u003el a-\u003eItemM l a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/List/docs/Data-List-Class.html#v:foldl1L"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn action to do foldl for \u003ccode\u003e\u003ca\u003eList\u003c/a\u003e\u003c/code\u003es\n\u003c/p\u003e",
          "module": "Data.List.Class",
          "name": "foldlL",
          "package": "List",
          "signature": "(a -\u003e b -\u003e a) -\u003e a -\u003e l b -\u003e ItemM l a",
          "source": "src/Data-List-Class.html#foldlL",
          "type": "function"
        },
        "index": {
          "description": "An action to do foldl for List",
          "hierarchy": "Data List Class",
          "module": "Data.List.Class",
          "name": "foldlL",
          "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003ec b-\u003eItemM c a",
          "package": "List",
          "signature": "(a-\u003eb-\u003ea)-\u003ea-\u003el b-\u003eItemM l a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/List/docs/Data-List-Class.html#v:foldlL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efoldr for \u003ccode\u003e\u003ca\u003eList\u003c/a\u003e\u003c/code\u003es.\n the result and 'right side' values are monadic actions.\n\u003c/p\u003e",
          "module": "Data.List.Class",
          "name": "foldrL",
          "package": "List",
          "signature": "(a -\u003e ItemM l b -\u003e ItemM l b) -\u003e ItemM l b -\u003e l a -\u003e ItemM l b",
          "source": "src/Data-List-Class.html#foldrL",
          "type": "function"
        },
        "index": {
          "description": "foldr for List the result and right side values are monadic actions",
          "hierarchy": "Data List Class",
          "module": "Data.List.Class",
          "name": "foldrL",
          "normalized": "(a-\u003eItemM b c-\u003eItemM b c)-\u003eItemM b c-\u003eb a-\u003eItemM b c",
          "package": "List",
          "signature": "(a-\u003eItemM l b-\u003eItemM l b)-\u003eItemM l b-\u003el a-\u003eItemM l b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/List/docs/Data-List-Class.html#v:foldrL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a list to a \u003ccode\u003e\u003ca\u003eMonadPlus\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cpre\u003e \u003e fromList [] :: Maybe Int\n Nothing\n \u003e fromList [5] :: Maybe Int\n Just 5\n\u003c/pre\u003e",
          "module": "Data.List.Class",
          "name": "fromList",
          "package": "List",
          "signature": "[a] -\u003e l a",
          "source": "src/Data-List-Class.html#fromList",
          "type": "function"
        },
        "index": {
          "description": "Convert list to MonadPlus fromList Maybe Int Nothing fromList Maybe Int Just",
          "hierarchy": "Data List Class",
          "module": "Data.List.Class",
          "name": "fromList",
          "normalized": "[a]-\u003eb a",
          "package": "List",
          "partial": "List",
          "signature": "[a]-\u003el a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/List/docs/Data-List-Class.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.List.Class",
          "name": "genericTake",
          "package": "List",
          "signature": "i -\u003e l a -\u003e l a",
          "source": "src/Data-List-Class.html#genericTake",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data List Class",
          "module": "Data.List.Class",
          "name": "genericTake",
          "normalized": "a-\u003eb c-\u003eb c",
          "package": "List",
          "partial": "Take",
          "signature": "i-\u003el a-\u003el a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/List/docs/Data-List-Class.html#v:genericTake"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.List.Class",
          "name": "headL",
          "package": "List",
          "signature": "a",
          "source": "src/Data-List-Class.html#ListItem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data List Class",
          "module": "Data.List.Class",
          "name": "headL",
          "package": "List",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/List/docs/Data-List-Class.html#v:headL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMonadic version of iterate.\n Can be used to produce trees given a children of node function.\n\u003c/p\u003e\u003cpre\u003e import Data.List.Tree (bfsLayers)\n take 3 $ bfsLayers (iterateM (\\i -\u003e [i*2, i*2+1]) [1] :: ListT [] Int)\n [[1],[2,3],[4,5,6,7]]\n\u003c/pre\u003e",
          "module": "Data.List.Class",
          "name": "iterateM",
          "package": "List",
          "signature": "(a -\u003e ItemM l a) -\u003e ItemM l a -\u003e l a",
          "source": "src/Data-List-Class.html#iterateM",
          "type": "function"
        },
        "index": {
          "description": "Monadic version of iterate Can be used to produce trees given children of node function import Data.List.Tree bfsLayers take bfsLayers iterateM ListT Int",
          "hierarchy": "Data List Class",
          "module": "Data.List.Class",
          "name": "iterateM",
          "normalized": "(a-\u003eItemM b a)-\u003eItemM b a-\u003eb a",
          "package": "List",
          "signature": "(a-\u003eItemM l a)-\u003eItemM l a-\u003el a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/List/docs/Data-List-Class.html#v:iterateM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransform an action returning a list to the returned list\n\u003c/p\u003e\u003cpre\u003e \u003e joinL $ Identity \"hello\"\n \"hello\"\n\u003c/pre\u003e",
          "module": "Data.List.Class",
          "name": "joinL",
          "package": "List",
          "signature": "ItemM l (l a) -\u003e l a",
          "source": "src/Data-List-Class.html#joinL",
          "type": "method"
        },
        "index": {
          "description": "Transform an action returning list to the returned list joinL Identity hello hello",
          "hierarchy": "Data List Class",
          "module": "Data.List.Class",
          "name": "joinL",
          "normalized": "ItemM a(a b)-\u003ea b",
          "package": "List",
          "signature": "ItemM l(l a)-\u003el a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/List/docs/Data-List-Class.html#v:joinL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransform a list of actions to a list of their results\n\u003c/p\u003e\u003cpre\u003e \u003e joinM [Identity 4, Identity 7]\n [4,7]\n\u003c/pre\u003e",
          "module": "Data.List.Class",
          "name": "joinM",
          "package": "List",
          "signature": "l (ItemM l a) -\u003e l a",
          "source": "src/Data-List-Class.html#joinM",
          "type": "function"
        },
        "index": {
          "description": "Transform list of actions to list of their results joinM Identity Identity",
          "hierarchy": "Data List Class",
          "module": "Data.List.Class",
          "name": "joinM",
          "normalized": "a(ItemM a b)-\u003ea b",
          "package": "List",
          "signature": "l(ItemM l a)-\u003el a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/List/docs/Data-List-Class.html#v:joinM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConsume all items and return the last one\n\u003c/p\u003e\u003cpre\u003e \u003e runIdentity $ lastL \"hello\"\n 'o'\n\u003c/pre\u003e",
          "module": "Data.List.Class",
          "name": "lastL",
          "package": "List",
          "signature": "l a -\u003e ItemM l a",
          "source": "src/Data-List-Class.html#lastL",
          "type": "function"
        },
        "index": {
          "description": "Consume all items and return the last one runIdentity lastL hello",
          "hierarchy": "Data List Class",
          "module": "Data.List.Class",
          "name": "lastL",
          "normalized": "a b-\u003eItemM a b",
          "package": "List",
          "signature": "l a-\u003eItemM l a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/List/docs/Data-List-Class.html#v:lastL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConsume a list (execute its actions) and return its length\n\u003c/p\u003e\u003cpre\u003e \u003e runIdentity $ lengthL [1,2,3]\n 3\n\u003c/pre\u003e",
          "module": "Data.List.Class",
          "name": "lengthL",
          "package": "List",
          "signature": "l a -\u003e ItemM l i",
          "source": "src/Data-List-Class.html#lengthL",
          "type": "function"
        },
        "index": {
          "description": "Consume list execute its actions and return its length runIdentity lengthL",
          "hierarchy": "Data List Class",
          "module": "Data.List.Class",
          "name": "lengthL",
          "normalized": "a b-\u003eItemM a c",
          "package": "List",
          "signature": "l a-\u003eItemM l i",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/List/docs/Data-List-Class.html#v:lengthL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elistStateJoin can transform a\n \u003ccode\u003eListT (StateT s m) a\u003c/code\u003e to a \u003ccode\u003eStateT s m (ListT m a)\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eWhen iterating a list, a state is already maintained and passed along\n in the form of the location along the list.\n This joins the inner \u003ccode\u003eStateT s\u003c/code\u003e into the list.\n The list will fork the state given to it and won't share its changes.\n\u003c/p\u003e",
          "module": "Data.List.Class",
          "name": "listStateJoin",
          "package": "List",
          "signature": "l a -\u003e ItemM l (k a)",
          "source": "src/Data-List-Class.html#listStateJoin",
          "type": "function"
        },
        "index": {
          "description": "listStateJoin can transform ListT StateT to StateT ListT When iterating list state is already maintained and passed along in the form of the location along the list This joins the inner StateT into the list The list will fork the state given to it and won share its changes",
          "hierarchy": "Data List Class",
          "module": "Data.List.Class",
          "name": "listStateJoin",
          "normalized": "a b-\u003eItemM a(c b)",
          "package": "List",
          "partial": "State Join",
          "signature": "l a-\u003eItemM l(k a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/List/docs/Data-List-Class.html#v:listStateJoin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.List.Class",
          "name": "mapL",
          "package": "List",
          "signature": "(a -\u003e ItemM l b) -\u003e l a -\u003e l b",
          "source": "src/Data-List-Class.html#mapL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data List Class",
          "module": "Data.List.Class",
          "name": "mapL",
          "normalized": "(a-\u003eItemM b c)-\u003eb a-\u003eb c",
          "package": "List",
          "signature": "(a-\u003eItemM l b)-\u003el a-\u003el b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/List/docs/Data-List-Class.html#v:mapL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.List.Class",
          "name": "mapMaybe",
          "package": "List",
          "signature": "(a -\u003e Maybe b) -\u003e l a -\u003e l b",
          "source": "src/Data-List-Class.html#mapMaybe",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data List Class",
          "module": "Data.List.Class",
          "name": "mapMaybe",
          "normalized": "(a-\u003eMaybe b)-\u003ec a-\u003ec b",
          "package": "List",
          "partial": "Maybe",
          "signature": "(a-\u003eMaybe b)-\u003el a-\u003el b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/List/docs/Data-List-Class.html#v:mapMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMerge two lists sorted by a criteria given the criteria\n\u003c/p\u003e\u003cpre\u003e \u003e merge2On id \"01568\" \"239\"\n \"01235689\"\n\u003c/pre\u003e",
          "module": "Data.List.Class",
          "name": "merge2On",
          "package": "List",
          "signature": "(a -\u003e b) -\u003e l a -\u003e l a -\u003e l a",
          "source": "src/Data-List-Class.html#merge2On",
          "type": "function"
        },
        "index": {
          "description": "Merge two lists sorted by criteria given the criteria merge2On id",
          "hierarchy": "Data List Class",
          "module": "Data.List.Class",
          "name": "merge2On",
          "normalized": "(a-\u003eb)-\u003ec a-\u003ec a-\u003ec a",
          "package": "List",
          "partial": "On",
          "signature": "(a-\u003eb)-\u003el a-\u003el a-\u003el a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/List/docs/Data-List-Class.html#v:merge2On"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMerge many lists sorted by a criteria given the criteria\n\u003c/p\u003e\u003cpre\u003e \u003e mergeOn length [[\"hi\", \"hey\", \"hello\"], [\"cat\", \"falcon\"], [\"banana\", \"cucumber\"]]\n [\"hi\",\"cat\",\"hey\",\"hello\",\"banana\",\"falcon\",\"cucumber\"]\n\u003c/pre\u003e",
          "module": "Data.List.Class",
          "name": "mergeOn",
          "package": "List",
          "signature": "(a -\u003e b) -\u003e l (l a) -\u003e l a",
          "source": "src/Data-List-Class.html#mergeOn",
          "type": "function"
        },
        "index": {
          "description": "Merge many lists sorted by criteria given the criteria mergeOn length hi hey hello cat falcon banana cucumber hi cat hey hello banana falcon cucumber",
          "hierarchy": "Data List Class",
          "module": "Data.List.Class",
          "name": "mergeOn",
          "normalized": "(a-\u003eb)-\u003ec(c a)-\u003ec a",
          "package": "List",
          "partial": "On",
          "signature": "(a-\u003eb)-\u003el(l a)-\u003el a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/List/docs/Data-List-Class.html#v:mergeOn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.List.Class",
          "name": "repeat",
          "package": "List",
          "signature": "a -\u003e l a",
          "source": "src/Data-List-Class.html#repeat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data List Class",
          "module": "Data.List.Class",
          "name": "repeat",
          "normalized": "a-\u003eb a",
          "package": "List",
          "signature": "a-\u003el a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/List/docs/Data-List-Class.html#v:repeat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.List.Class",
          "name": "repeatM",
          "package": "List",
          "signature": "ItemM l a -\u003e l a",
          "source": "src/Data-List-Class.html#repeatM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data List Class",
          "module": "Data.List.Class",
          "name": "repeatM",
          "normalized": "ItemM a b-\u003ea b",
          "package": "List",
          "signature": "ItemM l a-\u003el a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/List/docs/Data-List-Class.html#v:repeatM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.List.Class",
          "name": "runList",
          "package": "List",
          "signature": "l a -\u003e ItemM l (ListItem l a)",
          "source": "src/Data-List-Class.html#runList",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data List Class",
          "module": "Data.List.Class",
          "name": "runList",
          "normalized": "a b-\u003eItemM a(ListItem a b)",
          "package": "List",
          "partial": "List",
          "signature": "l a-\u003eItemM l(ListItem l a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/List/docs/Data-List-Class.html#v:runList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.List.Class",
          "name": "scanl",
          "package": "List",
          "signature": "(a -\u003e b -\u003e a) -\u003e a -\u003e l b -\u003e l a",
          "source": "src/Data-List-Class.html#scanl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data List Class",
          "module": "Data.List.Class",
          "name": "scanl",
          "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003ec b-\u003ec a",
          "package": "List",
          "signature": "(a-\u003eb-\u003ea)-\u003ea-\u003el b-\u003el a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/List/docs/Data-List-Class.html#v:scanl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.List.Class",
          "name": "scanl1",
          "package": "List",
          "signature": "(a -\u003e a -\u003e a) -\u003e l a -\u003e l a",
          "source": "src/Data-List-Class.html#scanl1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data List Class",
          "module": "Data.List.Class",
          "name": "scanl1",
          "normalized": "(a-\u003ea-\u003ea)-\u003eb a-\u003eb a",
          "package": "List",
          "signature": "(a-\u003ea-\u003ea)-\u003el a-\u003el a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/List/docs/Data-List-Class.html#v:scanl1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.List.Class",
          "name": "sortOn",
          "package": "List",
          "signature": "(a -\u003e b) -\u003e [a] -\u003e [a]",
          "source": "src/Data-List-Class.html#sortOn",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data List Class",
          "module": "Data.List.Class",
          "name": "sortOn",
          "normalized": "(a-\u003eb)-\u003e[a]-\u003e[a]",
          "package": "List",
          "partial": "On",
          "signature": "(a-\u003eb)-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/List/docs/Data-List-Class.html#v:sortOn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMonadic variant of splitAt.\n Consumes x items from the list and return them with the remaining monadic list.\n\u003c/p\u003e",
          "module": "Data.List.Class",
          "name": "splitAtM",
          "package": "List",
          "signature": "Int -\u003e l a -\u003e ItemM l ([a], l a)",
          "source": "src/Data-List-Class.html#splitAtM",
          "type": "function"
        },
        "index": {
          "description": "Monadic variant of splitAt Consumes items from the list and return them with the remaining monadic list",
          "hierarchy": "Data List Class",
          "module": "Data.List.Class",
          "name": "splitAtM",
          "normalized": "Int-\u003ea b-\u003eItemM a([b],a b)",
          "package": "List",
          "partial": "At",
          "signature": "Int-\u003el a-\u003eItemM l([a],l a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/List/docs/Data-List-Class.html#v:splitAtM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMonadic variant of break.\n Consumes items from the list until a condition holds.\n\u003c/p\u003e",
          "module": "Data.List.Class",
          "name": "splitWhenM",
          "package": "List",
          "signature": "(a -\u003e ItemM l Bool) -\u003e l a -\u003e ItemM l ([a], l a)",
          "source": "src/Data-List-Class.html#splitWhenM",
          "type": "function"
        },
        "index": {
          "description": "Monadic variant of break Consumes items from the list until condition holds",
          "hierarchy": "Data List Class",
          "module": "Data.List.Class",
          "name": "splitWhenM",
          "normalized": "(a-\u003eItemM b Bool)-\u003eb a-\u003eItemM b([a],b a)",
          "package": "List",
          "partial": "When",
          "signature": "(a-\u003eItemM l Bool)-\u003el a-\u003eItemM l([a],l a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/List/docs/Data-List-Class.html#v:splitWhenM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.List.Class",
          "name": "tail",
          "package": "List",
          "signature": "l a -\u003e l a",
          "source": "src/Data-List-Class.html#tail",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data List Class",
          "module": "Data.List.Class",
          "name": "tail",
          "normalized": "a b-\u003ea b",
          "package": "List",
          "signature": "l a-\u003el a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/List/docs/Data-List-Class.html#v:tail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.List.Class",
          "name": "tailL",
          "package": "List",
          "signature": "l a",
          "source": "src/Data-List-Class.html#ListItem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data List Class",
          "module": "Data.List.Class",
          "name": "tailL",
          "package": "List",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/List/docs/Data-List-Class.html#v:tailL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.List.Class",
          "name": "take",
          "package": "List",
          "signature": "Int -\u003e l a -\u003e l a",
          "source": "src/Data-List-Class.html#take",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data List Class",
          "module": "Data.List.Class",
          "name": "take",
          "normalized": "Int-\u003ea b-\u003ea b",
          "package": "List",
          "signature": "Int-\u003el a-\u003el a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/List/docs/Data-List-Class.html#v:take"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.List.Class",
          "name": "takeWhile",
          "package": "List",
          "signature": "(a -\u003e Bool) -\u003e l a -\u003e l a",
          "source": "src/Data-List-Class.html#takeWhile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data List Class",
          "module": "Data.List.Class",
          "name": "takeWhile",
          "normalized": "(a-\u003eBool)-\u003eb a-\u003eb a",
          "package": "List",
          "partial": "While",
          "signature": "(a-\u003eBool)-\u003el a-\u003el a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/List/docs/Data-List-Class.html#v:takeWhile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.List.Class",
          "name": "takeWhileM",
          "package": "List",
          "signature": "(a -\u003e ItemM l Bool) -\u003e l a -\u003e l a",
          "source": "src/Data-List-Class.html#takeWhileM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data List Class",
          "module": "Data.List.Class",
          "name": "takeWhileM",
          "normalized": "(a-\u003eItemM b Bool)-\u003eb a-\u003eb a",
          "package": "List",
          "partial": "While",
          "signature": "(a-\u003eItemM l Bool)-\u003el a-\u003el a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/List/docs/Data-List-Class.html#v:takeWhileM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn action to transform a \u003ccode\u003e\u003ca\u003eList\u003c/a\u003e\u003c/code\u003e to a list\n\u003c/p\u003e\u003cpre\u003e \u003e runIdentity $ toList \"hello!\"\n \"hello!\"\n\u003c/pre\u003e",
          "module": "Data.List.Class",
          "name": "toList",
          "package": "List",
          "signature": "l a -\u003e ItemM l [a]",
          "source": "src/Data-List-Class.html#toList",
          "type": "function"
        },
        "index": {
          "description": "An action to transform List to list runIdentity toList hello hello",
          "hierarchy": "Data List Class",
          "module": "Data.List.Class",
          "name": "toList",
          "normalized": "a b-\u003eItemM a[b]",
          "package": "List",
          "partial": "List",
          "signature": "l a-\u003eItemM l[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/List/docs/Data-List-Class.html#v:toList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransform the underlying monad of a list given a way to transform the monad\n\u003c/p\u003e\u003cpre\u003e \u003e import Data.List.Tree (bfs)\n \u003e bfs (transformListMonad (\\(Identity x) -\u003e [x, x]) \"hey\" :: ListT [] Char)\n \"hheeeeyyyyyyyy\"\n\u003c/pre\u003e",
          "module": "Data.List.Class",
          "name": "transformListMonad",
          "package": "List",
          "signature": "(ItemM l (k a) -\u003e ItemM k (k a)) -\u003e l a -\u003e k a",
          "source": "src/Data-List-Class.html#transformListMonad",
          "type": "function"
        },
        "index": {
          "description": "Transform the underlying monad of list given way to transform the monad import Data.List.Tree bfs bfs transformListMonad Identity hey ListT Char hheeeeyyyyyyyy",
          "hierarchy": "Data List Class",
          "module": "Data.List.Class",
          "name": "transformListMonad",
          "normalized": "(ItemM a(b c)-\u003eItemM b(b c))-\u003ea c-\u003eb c",
          "package": "List",
          "partial": "List Monad",
          "signature": "(ItemM l(k a)-\u003eItemM k(k a))-\u003el a-\u003ek a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/List/docs/Data-List-Class.html#v:transformListMonad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.List.Class",
          "name": "transpose",
          "package": "List",
          "signature": "l (l a) -\u003e l (l a)",
          "source": "src/Data-List-Class.html#transpose",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data List Class",
          "module": "Data.List.Class",
          "name": "transpose",
          "normalized": "a(a b)-\u003ea(a b)",
          "package": "List",
          "signature": "l(l a)-\u003el(l a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/List/docs/Data-List-Class.html#v:transpose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.List.Class",
          "name": "zip",
          "package": "List",
          "signature": "l a -\u003e l b -\u003e l (a, b)",
          "source": "src/Data-List-Class.html#zip",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data List Class",
          "module": "Data.List.Class",
          "name": "zip",
          "normalized": "a b-\u003ea c-\u003ea(b,c)",
          "package": "List",
          "signature": "l a-\u003el b-\u003el(a,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/List/docs/Data-List-Class.html#v:zip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.List.Class",
          "name": "zipWith",
          "package": "List",
          "signature": "(a -\u003e b -\u003e c) -\u003e l a -\u003e l b -\u003e l c",
          "source": "src/Data-List-Class.html#zipWith",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data List Class",
          "module": "Data.List.Class",
          "name": "zipWith",
          "normalized": "(a-\u003eb-\u003ec)-\u003ed a-\u003ed b-\u003ed c",
          "package": "List",
          "partial": "With",
          "signature": "(a-\u003eb-\u003ec)-\u003el a-\u003el b-\u003el c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/List/docs/Data-List-Class.html#v:zipWith"
      }
    }
  ]
]