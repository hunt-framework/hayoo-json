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
        "word": "runmemo"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRun \u003ccode\u003e\u003ca\u003eMemoizer\u003c/a\u003e\u003c/code\u003es on \u003ccode\u003e\u003ca\u003eMemoizable\u003c/a\u003e\u003c/code\u003e functions.\n The beauty of \u003ccode\u003e\u003ca\u003erunMemo\u003c/a\u003e\u003c/code\u003e is that it decouples\n the definition of a Memoizable function\n from the process of actually memoizing it.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.RunMemo",
          "name": "RunMemo",
          "package": "runmemo",
          "source": "src/Data-RunMemo.html",
          "type": "module"
        },
        "index": {
          "description": "Run Memoizer on Memoizable functions The beauty of runMemo is that it decouples the definition of Memoizable function from the process of actually memoizing it",
          "hierarchy": "Data RunMemo",
          "module": "Data.RunMemo",
          "name": "RunMemo",
          "package": "runmemo",
          "partial": "Run Memo",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/runmemo/docs/Data-RunMemo.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA memoizable thing takes itself as input\n and produces itself.\n\u003c/p\u003e\u003cp\u003eUsually you will use this for functions:\n e.g. \u003ccode\u003efoo :: Memoizable (String -\u003e String)\u003c/code\u003e,\n which desugars to \u003ccode\u003efoo :: (String -\u003e String) -\u003e String -\u003e String\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.RunMemo",
          "name": "Memoizable",
          "package": "runmemo",
          "source": "src/Data-RunMemo.html#Memoizable",
          "type": "type"
        },
        "index": {
          "description": "memoizable thing takes itself as input and produces itself Usually you will use this for functions e.g foo Memoizable String String which desugars to foo String String String String",
          "hierarchy": "Data RunMemo",
          "module": "Data.RunMemo",
          "name": "Memoizable",
          "package": "runmemo",
          "partial": "Memoizable",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/runmemo/docs/Data-RunMemo.html#t:Memoizable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA memoizer from a to b\n takes a function with input a and output b\n and memoizes it\n\u003c/p\u003e\u003cp\u003eIf you have a \u003ccode\u003eMemo Foo\u003c/code\u003e from \u003ccode\u003eData.MemoCombinators\u003c/code\u003e,\n then it is also a \u003ccode\u003eMemoizer Foo b\u003c/code\u003e, which can unify\n with any type \u003ccode\u003eb\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.RunMemo",
          "name": "Memoizer",
          "package": "runmemo",
          "source": "src/Data-RunMemo.html#Memoizer",
          "type": "type"
        },
        "index": {
          "description": "memoizer from to takes function with input and output and memoizes it If you have Memo Foo from Data.MemoCombinators then it is also Memoizer Foo which can unify with any type",
          "hierarchy": "Data RunMemo",
          "module": "Data.RunMemo",
          "name": "Memoizer",
          "package": "runmemo",
          "partial": "Memoizer",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/runmemo/docs/Data-RunMemo.html#t:Memoizer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe trivial memoizer.\n It doesn't actually memoize anything,\n it just passes values straight through\n to the original function.\n\u003c/p\u003e\u003cp\u003eIt is not recommended that you actually use this memoizer.\n\u003c/p\u003e",
          "module": "Data.RunMemo",
          "name": "noMemo",
          "package": "runmemo",
          "signature": "Memoizer a b",
          "source": "src/Data-RunMemo.html#noMemo",
          "type": "function"
        },
        "index": {
          "description": "The trivial memoizer It doesn actually memoize anything it just passes values straight through to the original function It is not recommended that you actually use this memoizer",
          "hierarchy": "Data RunMemo",
          "module": "Data.RunMemo",
          "name": "noMemo",
          "package": "runmemo",
          "partial": "Memo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/runmemo/docs/Data-RunMemo.html#v:noMemo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a memoizable function and a memoizer,\n put two and two together!\n\u003c/p\u003e\u003cp\u003eYour memoizable should look something like this:\n\u003c/p\u003e\u003cpre\u003e foo :: Memoizable (Foo -\u003e Bar)\n foo self = go\n   where go x = ... self a ...\n\u003c/pre\u003e\u003cp\u003eThe main feature is that \u003ccode\u003eself\u003c/code\u003e is the first input\n of a \u003ccode\u003eMemoizable\u003c/code\u003e function,\n \u003ccode\u003eself\u003c/code\u003e and is used for all recursive calls.\n\u003c/p\u003e\u003cp\u003eMemoizables can take as many arguments as you like,\n given an appropriate Memoizer\n\u003c/p\u003e\u003cpre\u003e foo2 :: Memoizable (Bar -\u003e Baz -\u003e Quux)\n foo2 self = go\n   where go x y = ... self a b ...\n\u003c/pre\u003e\u003cp\u003eUsing \u003ccode\u003eData.MemoCombinators\u003c/code\u003e, for example,\n you could do \u003ccode\u003erunMemo (Memo.memo2 Memo.bar Memo.baz) foo2\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.RunMemo",
          "name": "runMemo",
          "package": "runmemo",
          "signature": "Memoizer a b -\u003e Memoizable (a -\u003e b) -\u003e a -\u003e b",
          "source": "src/Data-RunMemo.html#runMemo",
          "type": "function"
        },
        "index": {
          "description": "Given memoizable function and memoizer put two and two together Your memoizable should look something like this foo Memoizable Foo Bar foo self go where go self The main feature is that self is the first input of Memoizable function self and is used for all recursive calls Memoizables can take as many arguments as you like given an appropriate Memoizer foo2 Memoizable Bar Baz Quux foo2 self go where go self Using Data.MemoCombinators for example you could do runMemo Memo.memo2 Memo.bar Memo.baz foo2",
          "hierarchy": "Data RunMemo",
          "module": "Data.RunMemo",
          "name": "runMemo",
          "normalized": "Memoizer a b-\u003eMemoizable(a-\u003eb)-\u003ea-\u003eb",
          "package": "runmemo",
          "partial": "Memo",
          "signature": "Memoizer a b-\u003eMemoizable(a-\u003eb)-\u003ea-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/runmemo/docs/Data-RunMemo.html#v:runMemo"
      }
    }
  ]
]