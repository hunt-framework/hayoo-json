[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ListZipper/docs/Data-List-Zipper.html#",
      "description": {
        "fct-module": "Data.List.Zipper",
        "fct-package": "ListZipper",
        "fct-signature": "module",
        "fct-source": "src/Data-List-Zipper.html",
        "fct-type": "module",
        "title": "Zipper"
      },
      "index": {
        "description": "",
        "hierarchy": "Data List Zipper",
        "module": "Data.List.Zipper",
        "name": "Zipper",
        "normalized": "",
        "package": "ListZipper",
        "partial": "Zipper",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ListZipper/docs/Data-List-Zipper.html#t:Zipper",
      "description": {
        "fct-module": "Data.List.Zipper",
        "fct-package": "ListZipper",
        "fct-signature": "data",
        "fct-source": "src/Data-List-Zipper.html#Zipper",
        "fct-type": "data",
        "title": "Zipper"
      },
      "index": {
        "description": "",
        "hierarchy": "Data List Zipper",
        "module": "Data.List.Zipper",
        "name": "Zipper",
        "normalized": "",
        "package": "ListZipper",
        "partial": "Zipper",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ListZipper/docs/Data-List-Zipper.html#v:Zip",
      "description": {
        "fct-module": "Data.List.Zipper",
        "fct-package": "ListZipper",
        "fct-signature": "Zip ![a] ![a]",
        "fct-source": "src/Data-List-Zipper.html#Zipper",
        "fct-type": "function",
        "title": "Zip"
      },
      "index": {
        "description": "",
        "hierarchy": "Data List Zipper",
        "module": "Data.List.Zipper",
        "name": "Zip",
        "normalized": "Zip[a][a]",
        "package": "ListZipper",
        "partial": "Zip",
        "signature": "Zip[a][a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ListZipper/docs/Data-List-Zipper.html#v:beginp",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003ebeginp z\u003c/code\u003e returns \u003ccode\u003eTrue\u003c/code\u003e if the zipper is at the start.\n\u003c/p\u003e",
        "fct-module": "Data.List.Zipper",
        "fct-package": "ListZipper",
        "fct-signature": "Zipper a -\u003e Bool",
        "fct-source": "src/Data-List-Zipper.html#beginp",
        "fct-type": "function",
        "title": "beginp"
      },
      "index": {
        "description": "beginp returns True if the zipper is at the start",
        "hierarchy": "Data List Zipper",
        "module": "Data.List.Zipper",
        "name": "beginp",
        "normalized": "Zipper a-\u003eBool",
        "package": "ListZipper",
        "partial": "",
        "signature": "Zipper a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ListZipper/docs/Data-List-Zipper.html#v:cursor",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003ecursor z\u003c/code\u003e returns the targeted element in \u003ccode\u003ez\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis function is not total, but the invariant is that\n \u003ccode\u003eendp z == False\u003c/code\u003e means that you can safely call\n \u003ccode\u003ecursor z\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.List.Zipper",
        "fct-package": "ListZipper",
        "fct-signature": "Zipper a -\u003e a",
        "fct-source": "src/Data-List-Zipper.html#cursor",
        "fct-type": "function",
        "title": "cursor"
      },
      "index": {
        "description": "cursor returns the targeted element in This function is not total but the invariant is that endp False means that you can safely call cursor",
        "hierarchy": "Data List Zipper",
        "module": "Data.List.Zipper",
        "name": "cursor",
        "normalized": "Zipper a-\u003ea",
        "package": "ListZipper",
        "partial": "",
        "signature": "Zipper a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ListZipper/docs/Data-List-Zipper.html#v:delete",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003edelete z\u003c/code\u003e removes the element at the cursor (if any).\n Safe to call on an empty zipper.\n forall x z. delete (insert x z) == z\n\u003c/p\u003e",
        "fct-module": "Data.List.Zipper",
        "fct-package": "ListZipper",
        "fct-signature": "Zipper a -\u003e Zipper a",
        "fct-source": "src/Data-List-Zipper.html#delete",
        "fct-type": "function",
        "title": "delete"
      },
      "index": {
        "description": "delete removes the element at the cursor if any Safe to call on an empty zipper forall delete insert",
        "hierarchy": "Data List Zipper",
        "module": "Data.List.Zipper",
        "name": "delete",
        "normalized": "Zipper a-\u003eZipper a",
        "package": "ListZipper",
        "partial": "",
        "signature": "Zipper a-\u003eZipper a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ListZipper/docs/Data-List-Zipper.html#v:duplicatez",
      "description": {
        "fct-module": "Data.List.Zipper",
        "fct-package": "ListZipper",
        "fct-signature": "Zipper a -\u003e Zipper (Zipper a)",
        "fct-source": "src/Data-List-Zipper.html#duplicatez",
        "fct-type": "function",
        "title": "duplicatez"
      },
      "index": {
        "description": "",
        "hierarchy": "Data List Zipper",
        "module": "Data.List.Zipper",
        "name": "duplicatez",
        "normalized": "Zipper a-\u003eZipper(Zipper a)",
        "package": "ListZipper",
        "partial": "",
        "signature": "Zipper a-\u003eZipper(Zipper a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ListZipper/docs/Data-List-Zipper.html#v:empty",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eempty\u003c/code\u003e is an empty zipper\n\u003c/p\u003e",
        "fct-module": "Data.List.Zipper",
        "fct-package": "ListZipper",
        "fct-signature": "Zipper a",
        "fct-source": "src/Data-List-Zipper.html#empty",
        "fct-type": "function",
        "title": "empty"
      },
      "index": {
        "description": "empty is an empty zipper",
        "hierarchy": "Data List Zipper",
        "module": "Data.List.Zipper",
        "name": "empty",
        "normalized": "",
        "package": "ListZipper",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ListZipper/docs/Data-List-Zipper.html#v:emptyp",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eemptyp z\u003c/code\u003e returns \u003ccode\u003eTrue\u003c/code\u003e if the zipper is completely empty.\n forall z. emptyp z == beginp z && endp z\n\u003c/p\u003e",
        "fct-module": "Data.List.Zipper",
        "fct-package": "ListZipper",
        "fct-signature": "Zipper a -\u003e Bool",
        "fct-source": "src/Data-List-Zipper.html#emptyp",
        "fct-type": "function",
        "title": "emptyp"
      },
      "index": {
        "description": "emptyp returns True if the zipper is completely empty forall emptyp beginp endp",
        "hierarchy": "Data List Zipper",
        "module": "Data.List.Zipper",
        "name": "emptyp",
        "normalized": "Zipper a-\u003eBool",
        "package": "ListZipper",
        "partial": "",
        "signature": "Zipper a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ListZipper/docs/Data-List-Zipper.html#v:end",
      "description": {
        "fct-module": "Data.List.Zipper",
        "fct-package": "ListZipper",
        "fct-signature": "Zipper a -\u003e Zipper a",
        "fct-source": "src/Data-List-Zipper.html#start",
        "fct-type": "function",
        "title": "end"
      },
      "index": {
        "description": "",
        "hierarchy": "Data List Zipper",
        "module": "Data.List.Zipper",
        "name": "end",
        "normalized": "Zipper a-\u003eZipper a",
        "package": "ListZipper",
        "partial": "",
        "signature": "Zipper a-\u003eZipper a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ListZipper/docs/Data-List-Zipper.html#v:endp",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eendp z\u003c/code\u003e returns \u003ccode\u003eTrue\u003c/code\u003e if the zipper is at the end.\n It is not safe to call \u003ccode\u003ecursor\u003c/code\u003e on \u003ccode\u003ez\u003c/code\u003e if \u003ccode\u003eendp z\u003c/code\u003e returns \u003ccode\u003eTrue\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.List.Zipper",
        "fct-package": "ListZipper",
        "fct-signature": "Zipper a -\u003e Bool",
        "fct-source": "src/Data-List-Zipper.html#endp",
        "fct-type": "function",
        "title": "endp"
      },
      "index": {
        "description": "endp returns True if the zipper is at the end It is not safe to call cursor on if endp returns True",
        "hierarchy": "Data List Zipper",
        "module": "Data.List.Zipper",
        "name": "endp",
        "normalized": "Zipper a-\u003eBool",
        "package": "ListZipper",
        "partial": "",
        "signature": "Zipper a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ListZipper/docs/Data-List-Zipper.html#v:extendz",
      "description": {
        "fct-module": "Data.List.Zipper",
        "fct-package": "ListZipper",
        "fct-signature": "(Zipper a -\u003e b) -\u003e Zipper a -\u003e Zipper b",
        "fct-source": "src/Data-List-Zipper.html#extendz",
        "fct-type": "function",
        "title": "extendz"
      },
      "index": {
        "description": "",
        "hierarchy": "Data List Zipper",
        "module": "Data.List.Zipper",
        "name": "extendz",
        "normalized": "(Zipper a-\u003eb)-\u003eZipper a-\u003eZipper b",
        "package": "ListZipper",
        "partial": "",
        "signature": "(Zipper a-\u003eb)-\u003eZipper a-\u003eZipper b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ListZipper/docs/Data-List-Zipper.html#v:extractz",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eextractz\u003c/code\u003e, \u003ccode\u003eextendz\u003c/code\u003e, and \u003ccode\u003eduplicatez\u003c/code\u003e can be used to\n implement Copointed and Comonad from category-extras.  I didn't\n add the instances here so as not to introduce a dependency\n on that package.\n\u003c/p\u003e",
        "fct-module": "Data.List.Zipper",
        "fct-package": "ListZipper",
        "fct-signature": "Zipper a -\u003e a",
        "fct-source": "src/Data-List-Zipper.html#extractz",
        "fct-type": "function",
        "title": "extractz"
      },
      "index": {
        "description": "extractz extendz and duplicatez can be used to implement Copointed and Comonad from category-extras didn add the instances here so as not to introduce dependency on that package",
        "hierarchy": "Data List Zipper",
        "module": "Data.List.Zipper",
        "name": "extractz",
        "normalized": "Zipper a-\u003ea",
        "package": "ListZipper",
        "partial": "",
        "signature": "Zipper a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ListZipper/docs/Data-List-Zipper.html#v:foldlz",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003efoldlz f x zip\u003c/code\u003e calls f with the zipper focused on\n each element in order, starting with the current.\n You are guaranteed that f can safely call \u003ca\u003ecursor\u003c/a\u003e on\n its argument; the zipper won't be at the end.\n\u003c/p\u003e",
        "fct-module": "Data.List.Zipper",
        "fct-package": "ListZipper",
        "fct-signature": "(b -\u003e Zipper a -\u003e b) -\u003e b -\u003e Zipper a -\u003e b",
        "fct-source": "src/Data-List-Zipper.html#foldlz",
        "fct-type": "function",
        "title": "foldlz"
      },
      "index": {
        "description": "foldlz zip calls with the zipper focused on each element in order starting with the current You are guaranteed that can safely call cursor on its argument the zipper won be at the end",
        "hierarchy": "Data List Zipper",
        "module": "Data.List.Zipper",
        "name": "foldlz",
        "normalized": "(a-\u003eZipper b-\u003ea)-\u003ea-\u003eZipper b-\u003ea",
        "package": "ListZipper",
        "partial": "",
        "signature": "(b-\u003eZipper a-\u003eb)-\u003eb-\u003eZipper a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ListZipper/docs/Data-List-Zipper.html#v:foldlz-39-",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003efoldlz'\u003c/code\u003e is foldlz with a strict accumulator\n\u003c/p\u003e",
        "fct-module": "Data.List.Zipper",
        "fct-package": "ListZipper",
        "fct-signature": "(b -\u003e Zipper a -\u003e b) -\u003e b -\u003e Zipper a -\u003e b",
        "fct-source": "src/Data-List-Zipper.html#foldlz%27",
        "fct-type": "function",
        "title": "foldlz'"
      },
      "index": {
        "description": "foldlz is foldlz with strict accumulator",
        "hierarchy": "Data List Zipper",
        "module": "Data.List.Zipper",
        "name": "foldlz'",
        "normalized": "(a-\u003eZipper b-\u003ea)-\u003ea-\u003eZipper b-\u003ea",
        "package": "ListZipper",
        "partial": "",
        "signature": "(b-\u003eZipper a-\u003eb)-\u003eb-\u003eZipper a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ListZipper/docs/Data-List-Zipper.html#v:foldrz",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003efoldrz f x zip\u003c/code\u003e calls \u003ccode\u003ef\u003c/code\u003e with the zipper focused on\n each element in order, starting with the current.\n You are guaranteed that f can safely call \u003ca\u003ecursor\u003c/a\u003e on\n its argument; the zipper won't be at the end.\n\u003c/p\u003e",
        "fct-module": "Data.List.Zipper",
        "fct-package": "ListZipper",
        "fct-signature": "(Zipper a -\u003e b -\u003e b) -\u003e b -\u003e Zipper a -\u003e b",
        "fct-source": "src/Data-List-Zipper.html#foldrz",
        "fct-type": "function",
        "title": "foldrz"
      },
      "index": {
        "description": "foldrz zip calls with the zipper focused on each element in order starting with the current You are guaranteed that can safely call cursor on its argument the zipper won be at the end",
        "hierarchy": "Data List Zipper",
        "module": "Data.List.Zipper",
        "name": "foldrz",
        "normalized": "(Zipper a-\u003eb-\u003eb)-\u003eb-\u003eZipper a-\u003eb",
        "package": "ListZipper",
        "partial": "",
        "signature": "(Zipper a-\u003eb-\u003eb)-\u003eb-\u003eZipper a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ListZipper/docs/Data-List-Zipper.html#v:fromList",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003efromList xs\u003c/code\u003e returns a zipper containing the elements of xs,\n focused on the first element.\n\u003c/p\u003e",
        "fct-module": "Data.List.Zipper",
        "fct-package": "ListZipper",
        "fct-signature": "[a] -\u003e Zipper a",
        "fct-source": "src/Data-List-Zipper.html#fromList",
        "fct-type": "function",
        "title": "fromList"
      },
      "index": {
        "description": "fromList xs returns zipper containing the elements of xs focused on the first element",
        "hierarchy": "Data List Zipper",
        "module": "Data.List.Zipper",
        "name": "fromList",
        "normalized": "[a]-\u003eZipper a",
        "package": "ListZipper",
        "partial": "List",
        "signature": "[a]-\u003eZipper a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ListZipper/docs/Data-List-Zipper.html#v:fromListEnd",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003efromListEnd xs\u003c/code\u003e returns a zipper containing the elements of xs,\n focused just off the right end of the list.\n\u003c/p\u003e",
        "fct-module": "Data.List.Zipper",
        "fct-package": "ListZipper",
        "fct-signature": "[a] -\u003e Zipper a",
        "fct-source": "src/Data-List-Zipper.html#fromListEnd",
        "fct-type": "function",
        "title": "fromListEnd"
      },
      "index": {
        "description": "fromListEnd xs returns zipper containing the elements of xs focused just off the right end of the list",
        "hierarchy": "Data List Zipper",
        "module": "Data.List.Zipper",
        "name": "fromListEnd",
        "normalized": "[a]-\u003eZipper a",
        "package": "ListZipper",
        "partial": "List End",
        "signature": "[a]-\u003eZipper a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ListZipper/docs/Data-List-Zipper.html#v:insert",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003einsert x z\u003c/code\u003e adds x at the cursor.\n\u003c/p\u003e",
        "fct-module": "Data.List.Zipper",
        "fct-package": "ListZipper",
        "fct-signature": "a -\u003e Zipper a -\u003e Zipper a",
        "fct-source": "src/Data-List-Zipper.html#insert",
        "fct-type": "function",
        "title": "insert"
      },
      "index": {
        "description": "insert adds at the cursor",
        "hierarchy": "Data List Zipper",
        "module": "Data.List.Zipper",
        "name": "insert",
        "normalized": "a-\u003eZipper a-\u003eZipper a",
        "package": "ListZipper",
        "partial": "",
        "signature": "a-\u003eZipper a-\u003eZipper a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ListZipper/docs/Data-List-Zipper.html#v:left",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eleft z\u003c/code\u003e returns the zipper with the focus\n shifted left one element.\n\u003c/p\u003e",
        "fct-module": "Data.List.Zipper",
        "fct-package": "ListZipper",
        "fct-signature": "Zipper a -\u003e Zipper a",
        "fct-source": "src/Data-List-Zipper.html#left",
        "fct-type": "function",
        "title": "left"
      },
      "index": {
        "description": "left returns the zipper with the focus shifted left one element",
        "hierarchy": "Data List Zipper",
        "module": "Data.List.Zipper",
        "name": "left",
        "normalized": "Zipper a-\u003eZipper a",
        "package": "ListZipper",
        "partial": "",
        "signature": "Zipper a-\u003eZipper a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ListZipper/docs/Data-List-Zipper.html#v:pop",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003epop z\u003c/code\u003e removes the element before the cursor (if any).\n Safe to call on an empty zipper.\n forall x z. pop (push x z) == z\n\u003c/p\u003e",
        "fct-module": "Data.List.Zipper",
        "fct-package": "ListZipper",
        "fct-signature": "Zipper a -\u003e Zipper a",
        "fct-source": "src/Data-List-Zipper.html#pop",
        "fct-type": "function",
        "title": "pop"
      },
      "index": {
        "description": "pop removes the element before the cursor if any Safe to call on an empty zipper forall pop push",
        "hierarchy": "Data List Zipper",
        "module": "Data.List.Zipper",
        "name": "pop",
        "normalized": "Zipper a-\u003eZipper a",
        "package": "ListZipper",
        "partial": "",
        "signature": "Zipper a-\u003eZipper a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ListZipper/docs/Data-List-Zipper.html#v:push",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003epush x z\u003c/code\u003e inserts x into the zipper, and advances\n the cursor past it.\n\u003c/p\u003e",
        "fct-module": "Data.List.Zipper",
        "fct-package": "ListZipper",
        "fct-signature": "a -\u003e Zipper a -\u003e Zipper a",
        "fct-source": "src/Data-List-Zipper.html#push",
        "fct-type": "function",
        "title": "push"
      },
      "index": {
        "description": "push inserts into the zipper and advances the cursor past it",
        "hierarchy": "Data List Zipper",
        "module": "Data.List.Zipper",
        "name": "push",
        "normalized": "a-\u003eZipper a-\u003eZipper a",
        "package": "ListZipper",
        "partial": "",
        "signature": "a-\u003eZipper a-\u003eZipper a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ListZipper/docs/Data-List-Zipper.html#v:replace",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003ereplace a z\u003c/code\u003e changes the current element in the zipper\n to the passed in value.  If there is no current element,\n the zipper is unchanged.  If you want to add the element\n in that case instead, use \u003ccode\u003einsert a (delete z)\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.List.Zipper",
        "fct-package": "ListZipper",
        "fct-signature": "a -\u003e Zipper a -\u003e Zipper a",
        "fct-source": "src/Data-List-Zipper.html#replace",
        "fct-type": "function",
        "title": "replace"
      },
      "index": {
        "description": "replace changes the current element in the zipper to the passed in value If there is no current element the zipper is unchanged If you want to add the element in that case instead use insert delete",
        "hierarchy": "Data List Zipper",
        "module": "Data.List.Zipper",
        "name": "replace",
        "normalized": "a-\u003eZipper a-\u003eZipper a",
        "package": "ListZipper",
        "partial": "",
        "signature": "a-\u003eZipper a-\u003eZipper a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ListZipper/docs/Data-List-Zipper.html#v:reversez",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003ereversez z\u003c/code\u003e returns the zipper with the elements in\n the reverse order.  O(1).  The cursor is moved to the\n previous element, so if the cursor was at the start,\n it's now off the right end, and if it was off the\n right end, it's now at the start of the reversed list.\n\u003c/p\u003e",
        "fct-module": "Data.List.Zipper",
        "fct-package": "ListZipper",
        "fct-signature": "Zipper a -\u003e Zipper a",
        "fct-source": "src/Data-List-Zipper.html#reversez",
        "fct-type": "function",
        "title": "reversez"
      },
      "index": {
        "description": "reversez returns the zipper with the elements in the reverse order The cursor is moved to the previous element so if the cursor was at the start it now off the right end and if it was off the right end it now at the start of the reversed list",
        "hierarchy": "Data List Zipper",
        "module": "Data.List.Zipper",
        "name": "reversez",
        "normalized": "Zipper a-\u003eZipper a",
        "package": "ListZipper",
        "partial": "",
        "signature": "Zipper a-\u003eZipper a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ListZipper/docs/Data-List-Zipper.html#v:right",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eright z\u003c/code\u003e returns the zipper with the focus\n shifted right one element; this can move the\n cursor off the end.\n\u003c/p\u003e",
        "fct-module": "Data.List.Zipper",
        "fct-package": "ListZipper",
        "fct-signature": "Zipper a -\u003e Zipper a",
        "fct-source": "src/Data-List-Zipper.html#right",
        "fct-type": "function",
        "title": "right"
      },
      "index": {
        "description": "right returns the zipper with the focus shifted right one element this can move the cursor off the end",
        "hierarchy": "Data List Zipper",
        "module": "Data.List.Zipper",
        "name": "right",
        "normalized": "Zipper a-\u003eZipper a",
        "package": "ListZipper",
        "partial": "",
        "signature": "Zipper a-\u003eZipper a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ListZipper/docs/Data-List-Zipper.html#v:safeCursor",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003esafeCursor\u003c/code\u003e is like \u003ccode\u003ecursor\u003c/code\u003e but total.\n\u003c/p\u003e",
        "fct-module": "Data.List.Zipper",
        "fct-package": "ListZipper",
        "fct-signature": "Zipper a -\u003e Maybe a",
        "fct-source": "src/Data-List-Zipper.html#safeCursor",
        "fct-type": "function",
        "title": "safeCursor"
      },
      "index": {
        "description": "safeCursor is like cursor but total",
        "hierarchy": "Data List Zipper",
        "module": "Data.List.Zipper",
        "name": "safeCursor",
        "normalized": "Zipper a-\u003eMaybe a",
        "package": "ListZipper",
        "partial": "Cursor",
        "signature": "Zipper a-\u003eMaybe a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ListZipper/docs/Data-List-Zipper.html#v:start",
      "description": {
        "fct-module": "Data.List.Zipper",
        "fct-package": "ListZipper",
        "fct-signature": "Zipper a -\u003e Zipper a",
        "fct-source": "src/Data-List-Zipper.html#start",
        "fct-type": "function",
        "title": "start"
      },
      "index": {
        "description": "",
        "hierarchy": "Data List Zipper",
        "module": "Data.List.Zipper",
        "name": "start",
        "normalized": "Zipper a-\u003eZipper a",
        "package": "ListZipper",
        "partial": "",
        "signature": "Zipper a-\u003eZipper a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ListZipper/docs/Data-List-Zipper.html#v:toList",
      "description": {
        "fct-module": "Data.List.Zipper",
        "fct-package": "ListZipper",
        "fct-signature": "Zipper a -\u003e [a]",
        "fct-source": "src/Data-List-Zipper.html#toList",
        "fct-type": "function",
        "title": "toList"
      },
      "index": {
        "description": "",
        "hierarchy": "Data List Zipper",
        "module": "Data.List.Zipper",
        "name": "toList",
        "normalized": "Zipper a-\u003e[a]",
        "package": "ListZipper",
        "partial": "List",
        "signature": "Zipper a-\u003e[a]"
      }
    }
  }
]