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
        "word": "binding-core"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binding.List",
          "name": "List",
          "package": "binding-core",
          "source": "src/Data-Binding-List.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Binding List",
          "module": "Data.Binding.List",
          "name": "List",
          "package": "binding-core",
          "partial": "List",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/binding-core/docs/Data-Binding-List.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBinding List\n\u003c/p\u003e",
          "module": "Data.Binding.List",
          "name": "BindingList",
          "package": "binding-core",
          "source": "src/Data-Binding-List.html#BindingList",
          "type": "data"
        },
        "index": {
          "description": "Binding List",
          "hierarchy": "Data Binding List",
          "module": "Data.Binding.List",
          "name": "BindingList",
          "package": "binding-core",
          "partial": "Binding List",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/binding-core/docs/Data-Binding-List.html#t:BindingList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the data from a binding list.\n\u003c/p\u003e",
          "module": "Data.Binding.List",
          "name": "fromBindingList",
          "package": "binding-core",
          "signature": "BindingList v a -\u003e IO [a]",
          "source": "src/Data-Binding-List.html#fromBindingList",
          "type": "function"
        },
        "index": {
          "description": "Extract the data from binding list",
          "hierarchy": "Data Binding List",
          "module": "Data.Binding.List",
          "name": "fromBindingList",
          "normalized": "BindingList a b-\u003eIO[b]",
          "package": "binding-core",
          "partial": "Binding List",
          "signature": "BindingList v a-\u003eIO[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binding-core/docs/Data-Binding-List.html#v:fromBindingList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInsert an element into the list.\n The new element is inserted after the current element.\n This allows appending, but precludes prepending.\n\u003c/p\u003e",
          "module": "Data.Binding.List",
          "name": "insert",
          "package": "binding-core",
          "signature": "BindingList v a -\u003e a -\u003e IO Int",
          "source": "src/Data-Binding-List.html#insert",
          "type": "function"
        },
        "index": {
          "description": "Insert an element into the list The new element is inserted after the current element This allows appending but precludes prepending",
          "hierarchy": "Data Binding List",
          "module": "Data.Binding.List",
          "name": "insert",
          "normalized": "BindingList a b-\u003eb-\u003eIO Int",
          "package": "binding-core",
          "signature": "BindingList v a-\u003ea-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binding-core/docs/Data-Binding-List.html#v:insert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInsert an element into a list.\n\u003c/p\u003e",
          "module": "Data.Binding.List",
          "name": "insert'",
          "package": "binding-core",
          "signature": "[a] -\u003e Int -\u003e a -\u003e [a]",
          "source": "src/Data-Binding-List.html#insert%27",
          "type": "function"
        },
        "index": {
          "description": "Insert an element into list",
          "hierarchy": "Data Binding List",
          "module": "Data.Binding.List",
          "name": "insert'",
          "normalized": "[a]-\u003eInt-\u003ea-\u003e[a]",
          "package": "binding-core",
          "signature": "[a]-\u003eInt-\u003ea-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binding-core/docs/Data-Binding-List.html#v:insert-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe size of a binding list.\n\u003c/p\u003e",
          "module": "Data.Binding.List",
          "name": "length",
          "package": "binding-core",
          "signature": "BindingList v a -\u003e IO Int",
          "source": "src/Data-Binding-List.html#length",
          "type": "function"
        },
        "index": {
          "description": "The size of binding list",
          "hierarchy": "Data Binding List",
          "module": "Data.Binding.List",
          "name": "length",
          "normalized": "BindingList a b-\u003eIO Int",
          "package": "binding-core",
          "signature": "BindingList v a-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binding-core/docs/Data-Binding-List.html#v:length"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBind to the next item in a binding list.\n\u003c/p\u003e",
          "module": "Data.Binding.List",
          "name": "next",
          "package": "binding-core",
          "signature": "BindingList v a -\u003e IO Int",
          "source": "src/Data-Binding-List.html#next",
          "type": "function"
        },
        "index": {
          "description": "Bind to the next item in binding list",
          "hierarchy": "Data Binding List",
          "module": "Data.Binding.List",
          "name": "next",
          "normalized": "BindingList a b-\u003eIO Int",
          "package": "binding-core",
          "signature": "BindingList v a-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binding-core/docs/Data-Binding-List.html#v:next"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the current position.\n\u003c/p\u003e",
          "module": "Data.Binding.List",
          "name": "position",
          "package": "binding-core",
          "signature": "BindingList v a -\u003e IO Int",
          "source": "src/Data-Binding-List.html#position",
          "type": "function"
        },
        "index": {
          "description": "Get the current position",
          "hierarchy": "Data Binding List",
          "module": "Data.Binding.List",
          "name": "position",
          "normalized": "BindingList a b-\u003eIO Int",
          "package": "binding-core",
          "signature": "BindingList v a-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binding-core/docs/Data-Binding-List.html#v:position"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBind to the previous item in a binding list.\n\u003c/p\u003e",
          "module": "Data.Binding.List",
          "name": "prev",
          "package": "binding-core",
          "signature": "BindingList v a -\u003e IO Int",
          "source": "src/Data-Binding-List.html#prev",
          "type": "function"
        },
        "index": {
          "description": "Bind to the previous item in binding list",
          "hierarchy": "Data Binding List",
          "module": "Data.Binding.List",
          "name": "prev",
          "normalized": "BindingList a b-\u003eIO Int",
          "package": "binding-core",
          "signature": "BindingList v a-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binding-core/docs/Data-Binding-List.html#v:prev"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove the current element from the list.\n\u003c/p\u003e",
          "module": "Data.Binding.List",
          "name": "remove",
          "package": "binding-core",
          "signature": "BindingList v a -\u003e IO Int",
          "source": "src/Data-Binding-List.html#remove",
          "type": "function"
        },
        "index": {
          "description": "Remove the current element from the list",
          "hierarchy": "Data Binding List",
          "module": "Data.Binding.List",
          "name": "remove",
          "normalized": "BindingList a b-\u003eIO Int",
          "package": "binding-core",
          "signature": "BindingList v a-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binding-core/docs/Data-Binding-List.html#v:remove"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove an element from a list.\n\u003c/p\u003e",
          "module": "Data.Binding.List",
          "name": "remove'",
          "package": "binding-core",
          "signature": "[a] -\u003e Int -\u003e [a]",
          "source": "src/Data-Binding-List.html#remove%27",
          "type": "function"
        },
        "index": {
          "description": "Remove an element from list",
          "hierarchy": "Data Binding List",
          "module": "Data.Binding.List",
          "name": "remove'",
          "normalized": "[a]-\u003eInt-\u003e[a]",
          "package": "binding-core",
          "signature": "[a]-\u003eInt-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binding-core/docs/Data-Binding-List.html#v:remove-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBind to a new position in a binding list.\n Returns the new position; this is convenient for \u003ccode\u003e\u003ca\u003eseekBy\u003c/a\u003e\u003c/code\u003e and friends.\n\u003c/p\u003e",
          "module": "Data.Binding.List",
          "name": "seek",
          "package": "binding-core",
          "signature": "BindingList v a -\u003e Int -\u003e IO Int",
          "source": "src/Data-Binding-List.html#seek",
          "type": "function"
        },
        "index": {
          "description": "Bind to new position in binding list Returns the new position this is convenient for seekBy and friends",
          "hierarchy": "Data Binding List",
          "module": "Data.Binding.List",
          "name": "seek",
          "normalized": "BindingList a b-\u003eInt-\u003eIO Int",
          "package": "binding-core",
          "signature": "BindingList v a-\u003eInt-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binding-core/docs/Data-Binding-List.html#v:seek"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBind to a new position in a binding list.\n\u003c/p\u003e",
          "module": "Data.Binding.List",
          "name": "seekBy",
          "package": "binding-core",
          "signature": "(Int -\u003e Int) -\u003e BindingList v a -\u003e IO Int",
          "source": "src/Data-Binding-List.html#seekBy",
          "type": "function"
        },
        "index": {
          "description": "Bind to new position in binding list",
          "hierarchy": "Data Binding List",
          "module": "Data.Binding.List",
          "name": "seekBy",
          "normalized": "(Int-\u003eInt)-\u003eBindingList a b-\u003eIO Int",
          "package": "binding-core",
          "partial": "By",
          "signature": "(Int-\u003eInt)-\u003eBindingList v a-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binding-core/docs/Data-Binding-List.html#v:seekBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a binding list.\n\u003c/p\u003e",
          "module": "Data.Binding.List",
          "name": "toBindingList",
          "package": "binding-core",
          "signature": "[a] -\u003e IO (BindingList v a)",
          "source": "src/Data-Binding-List.html#toBindingList",
          "type": "function"
        },
        "index": {
          "description": "Create binding list",
          "hierarchy": "Data Binding List",
          "module": "Data.Binding.List",
          "name": "toBindingList",
          "normalized": "[a]-\u003eIO(BindingList b a)",
          "package": "binding-core",
          "partial": "Binding List",
          "signature": "[a]-\u003eIO(BindingList v a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/binding-core/docs/Data-Binding-List.html#v:toBindingList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Binding.Simple",
          "name": "Simple",
          "package": "binding-core",
          "source": "src/Data-Binding-Simple.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Binding Simple",
          "module": "Data.Binding.Simple",
          "name": "Simple",
          "package": "binding-core",
          "partial": "Simple",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/binding-core/docs/Data-Binding-Simple.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSources for data binding.\n\u003c/p\u003e",
          "module": "Data.Binding.Simple",
          "name": "Bindable",
          "package": "binding-core",
          "source": "src/Data-Binding-Simple.html#Bindable",
          "type": "class"
        },
        "index": {
          "description": "Sources for data binding",
          "hierarchy": "Data Binding Simple",
          "module": "Data.Binding.Simple",
          "name": "Bindable",
          "package": "binding-core",
          "partial": "Bindable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/binding-core/docs/Data-Binding-Simple.html#t:Bindable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBinding Source\n\u003c/p\u003e",
          "module": "Data.Binding.Simple",
          "name": "Source",
          "package": "binding-core",
          "source": "src/Data-Binding-Simple.html#Source",
          "type": "data"
        },
        "index": {
          "description": "Binding Source",
          "hierarchy": "Data Binding Simple",
          "module": "Data.Binding.Simple",
          "name": "Source",
          "package": "binding-core",
          "partial": "Source",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/binding-core/docs/Data-Binding-Simple.html#t:Source"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a data binding\n\u003c/p\u003e",
          "module": "Data.Binding.Simple",
          "name": "bind",
          "package": "binding-core",
          "signature": "bind",
          "source": "src/Data-Binding-Simple.html#bind",
          "type": "method"
        },
        "index": {
          "description": "Create data binding",
          "hierarchy": "Data Binding Simple",
          "module": "Data.Binding.Simple",
          "name": "bind",
          "package": "binding-core",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/binding-core/docs/Data-Binding-Simple.html#v:bind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMutable variables in the IO Monad.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Variable",
          "name": "Variable",
          "package": "binding-core",
          "source": "src/Data-Variable.html",
          "type": "module"
        },
        "index": {
          "description": "Mutable variables in the IO Monad",
          "hierarchy": "Data Variable",
          "module": "Data.Variable",
          "name": "Variable",
          "package": "binding-core",
          "partial": "Variable",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/binding-core/docs/Data-Variable.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Variable",
          "name": "Variable",
          "package": "binding-core",
          "source": "src/Data-Variable.html#Variable",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Variable",
          "module": "Data.Variable",
          "name": "Variable",
          "package": "binding-core",
          "partial": "Variable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/binding-core/docs/Data-Variable.html#t:Variable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModify a variable.\n\u003c/p\u003e",
          "module": "Data.Variable",
          "name": "modifyVar",
          "package": "binding-core",
          "signature": "v a -\u003e (a -\u003e a) -\u003e IO ()",
          "source": "src/Data-Variable.html#modifyVar",
          "type": "method"
        },
        "index": {
          "description": "Modify variable",
          "hierarchy": "Data Variable",
          "module": "Data.Variable",
          "name": "modifyVar",
          "normalized": "a b-\u003e(b-\u003eb)-\u003eIO()",
          "package": "binding-core",
          "partial": "Var",
          "signature": "v a-\u003e(a-\u003ea)-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/binding-core/docs/Data-Variable.html#v:modifyVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModify a variable, and return some value.\n\u003c/p\u003e",
          "module": "Data.Variable",
          "name": "modifyVar'",
          "package": "binding-core",
          "signature": "v a -\u003e (a -\u003e (a, b)) -\u003e IO b",
          "source": "src/Data-Variable.html#modifyVar%27",
          "type": "method"
        },
        "index": {
          "description": "Modify variable and return some value",
          "hierarchy": "Data Variable",
          "module": "Data.Variable",
          "name": "modifyVar'",
          "normalized": "a b-\u003e(b-\u003e(b,c))-\u003eIO c",
          "package": "binding-core",
          "partial": "Var'",
          "signature": "v a-\u003e(a-\u003e(a,b))-\u003eIO b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/binding-core/docs/Data-Variable.html#v:modifyVar-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new variable.\n\u003c/p\u003e",
          "module": "Data.Variable",
          "name": "newVar",
          "package": "binding-core",
          "signature": "a -\u003e IO (v a)",
          "source": "src/Data-Variable.html#newVar",
          "type": "method"
        },
        "index": {
          "description": "Create new variable",
          "hierarchy": "Data Variable",
          "module": "Data.Variable",
          "name": "newVar",
          "normalized": "a-\u003eIO(b a)",
          "package": "binding-core",
          "partial": "Var",
          "signature": "a-\u003eIO(v a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/binding-core/docs/Data-Variable.html#v:newVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a variable.\n\u003c/p\u003e",
          "module": "Data.Variable",
          "name": "readVar",
          "package": "binding-core",
          "signature": "v a -\u003e IO a",
          "source": "src/Data-Variable.html#readVar",
          "type": "method"
        },
        "index": {
          "description": "Read variable",
          "hierarchy": "Data Variable",
          "module": "Data.Variable",
          "name": "readVar",
          "normalized": "a b-\u003eIO b",
          "package": "binding-core",
          "partial": "Var",
          "signature": "v a-\u003eIO a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/binding-core/docs/Data-Variable.html#v:readVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a variable.\n\u003c/p\u003e",
          "module": "Data.Variable",
          "name": "writeVar",
          "package": "binding-core",
          "signature": "v a -\u003e a -\u003e IO ()",
          "source": "src/Data-Variable.html#writeVar",
          "type": "method"
        },
        "index": {
          "description": "Write variable",
          "hierarchy": "Data Variable",
          "module": "Data.Variable",
          "name": "writeVar",
          "normalized": "a b-\u003eb-\u003eIO()",
          "package": "binding-core",
          "partial": "Var",
          "signature": "v a-\u003ea-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/binding-core/docs/Data-Variable.html#v:writeVar"
      }
    }
  ]
]