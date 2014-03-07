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
        "word": "cookbook"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003ca\u003eglobal\u003c/a\u003e functions for the entirety of the Cookbook library.\nCommon is the potpourri of Cookbook, with no category except \u003ca\u003eeverything uses me!\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Cookbook.Essential.Common",
          "name": "Common",
          "package": "cookbook",
          "source": "src/Cookbook-Essential-Common.html",
          "type": "module"
        },
        "index": {
          "description": "global functions for the entirety of the Cookbook library Common is the potpourri of Cookbook with no category except everything uses me",
          "hierarchy": "Cookbook Essential Common",
          "module": "Cookbook.Essential.Common",
          "name": "Common",
          "package": "cookbook",
          "partial": "Common",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cookbook/docs/Cookbook-Essential-Common.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReversal of map function. Chains calls of functions over a parameter, starting with head.\n\u003c/p\u003e",
          "module": "Cookbook.Essential.Common",
          "name": "apply",
          "package": "cookbook",
          "signature": "[a -\u003e a] -\u003e a -\u003e a",
          "source": "src/Cookbook-Essential-Common.html#apply",
          "type": "function"
        },
        "index": {
          "description": "Reversal of map function Chains calls of functions over parameter starting with head",
          "hierarchy": "Cookbook Essential Common",
          "module": "Cookbook.Essential.Common",
          "name": "apply",
          "normalized": "[a-\u003ea]-\u003ea-\u003ea",
          "package": "cookbook",
          "signature": "[a-\u003ea]-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cookbook/docs/Cookbook-Essential-Common.html#v:apply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFlatten a list one level.\n\u003c/p\u003e",
          "module": "Cookbook.Essential.Common",
          "name": "flt",
          "package": "cookbook",
          "signature": "[[a]] -\u003e [a]",
          "source": "src/Cookbook-Essential-Common.html#flt",
          "type": "function"
        },
        "index": {
          "description": "Flatten list one level",
          "hierarchy": "Cookbook Essential Common",
          "module": "Cookbook.Essential.Common",
          "name": "flt",
          "normalized": "[[a]]-\u003e[a]",
          "package": "cookbook",
          "signature": "[[a]]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cookbook/docs/Cookbook-Essential-Common.html#v:flt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute a function from the end of a list to the front.\n\u003c/p\u003e",
          "module": "Cookbook.Essential.Common",
          "name": "fromLast",
          "package": "cookbook",
          "signature": "([a] -\u003e [a]) -\u003e [a] -\u003e [a]",
          "source": "src/Cookbook-Essential-Common.html#fromLast",
          "type": "function"
        },
        "index": {
          "description": "Execute function from the end of list to the front",
          "hierarchy": "Cookbook Essential Common",
          "module": "Cookbook.Essential.Common",
          "name": "fromLast",
          "normalized": "([a]-\u003e[a])-\u003e[a]-\u003e[a]",
          "package": "cookbook",
          "partial": "Last",
          "signature": "([a]-\u003e[a])-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cookbook/docs/Cookbook-Essential-Common.html#v:fromLast"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eC-style wrapper for positions. Returns the first occurrence in a list, or -1 on notElem.\n\u003c/p\u003e",
          "module": "Cookbook.Essential.Common",
          "name": "pos",
          "package": "cookbook",
          "signature": "[a] -\u003e a -\u003e Int",
          "source": "src/Cookbook-Essential-Common.html#pos",
          "type": "function"
        },
        "index": {
          "description": "C-style wrapper for positions Returns the first occurrence in list or on notElem",
          "hierarchy": "Cookbook Essential Common",
          "module": "Cookbook.Essential.Common",
          "name": "pos",
          "normalized": "[a]-\u003ea-\u003eInt",
          "package": "cookbook",
          "signature": "[a]-\u003ea-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cookbook/docs/Cookbook-Essential-Common.html#v:pos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind the occurrences of an element in a list. \n\u003c/p\u003e",
          "module": "Cookbook.Essential.Common",
          "name": "positions",
          "package": "cookbook",
          "signature": "[a] -\u003e a -\u003e [Int]",
          "source": "src/Cookbook-Essential-Common.html#positions",
          "type": "function"
        },
        "index": {
          "description": "Find the occurrences of an element in list",
          "hierarchy": "Cookbook Essential Common",
          "module": "Cookbook.Essential.Common",
          "name": "positions",
          "normalized": "[a]-\u003ea-\u003e[Int]",
          "package": "cookbook",
          "signature": "[a]-\u003ea-\u003e[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cookbook/docs/Cookbook-Essential-Common.html#v:positions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn a list starting at an index. Indices start at 0.\n\u003c/p\u003e",
          "module": "Cookbook.Essential.Common",
          "name": "sub",
          "package": "cookbook",
          "signature": "[a] -\u003e Int -\u003e [a]",
          "source": "src/Cookbook-Essential-Common.html#sub",
          "type": "function"
        },
        "index": {
          "description": "Return list starting at an index Indices start at",
          "hierarchy": "Cookbook Essential Common",
          "module": "Cookbook.Essential.Common",
          "name": "sub",
          "normalized": "[a]-\u003eInt-\u003e[a]",
          "package": "cookbook",
          "signature": "[a]-\u003eInt-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cookbook/docs/Cookbook-Essential-Common.html#v:sub"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLibrary for overloading functions across lists and singular items, as well as tupples.\nSomewhat abuses FlexibleInstance and Typeclasses.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Cookbook.Essential.Continuous",
          "name": "Continuous",
          "package": "cookbook",
          "source": "src/Cookbook-Essential-Continuous.html",
          "type": "module"
        },
        "index": {
          "description": "Library for overloading functions across lists and singular items as well as tupples Somewhat abuses FlexibleInstance and Typeclasses",
          "hierarchy": "Cookbook Essential Continuous",
          "module": "Cookbook.Essential.Continuous",
          "name": "Continuous",
          "package": "cookbook",
          "partial": "Continuous",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cookbook/docs/Cookbook-Essential-Continuous.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClassifies items that can be modified by either a list or item.\n\u003c/p\u003e",
          "module": "Cookbook.Essential.Continuous",
          "name": "Continuous",
          "package": "cookbook",
          "source": "src/Cookbook-Essential-Continuous.html#Continuous",
          "type": "class"
        },
        "index": {
          "description": "Classifies items that can be modified by either list or item",
          "hierarchy": "Cookbook Essential Continuous",
          "module": "Cookbook.Essential.Continuous",
          "name": "Continuous",
          "package": "cookbook",
          "partial": "Continuous",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/cookbook/docs/Cookbook-Essential-Continuous.html#t:Continuous"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClassifies data which can be removed from a list.\n\u003c/p\u003e",
          "module": "Cookbook.Essential.Continuous",
          "name": "Removable",
          "package": "cookbook",
          "source": "src/Cookbook-Essential-Continuous.html#Removable",
          "type": "class"
        },
        "index": {
          "description": "Classifies data which can be removed from list",
          "hierarchy": "Cookbook Essential Continuous",
          "module": "Cookbook.Essential.Continuous",
          "name": "Removable",
          "package": "cookbook",
          "partial": "Removable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/cookbook/docs/Cookbook-Essential-Continuous.html#t:Removable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClassifies data which can be replaced.\n\u003c/p\u003e",
          "module": "Cookbook.Essential.Continuous",
          "name": "Replacable",
          "package": "cookbook",
          "source": "src/Cookbook-Essential-Continuous.html#Replacable",
          "type": "class"
        },
        "index": {
          "description": "Classifies data which can be replaced",
          "hierarchy": "Cookbook Essential Continuous",
          "module": "Cookbook.Essential.Continuous",
          "name": "Replacable",
          "package": "cookbook",
          "partial": "Replacable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/cookbook/docs/Cookbook-Essential-Continuous.html#t:Replacable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClassifies information which can be split by a tupple.\n\u003c/p\u003e",
          "module": "Cookbook.Essential.Continuous",
          "name": "Splicable",
          "package": "cookbook",
          "source": "src/Cookbook-Essential-Continuous.html#Splicable",
          "type": "class"
        },
        "index": {
          "description": "Classifies information which can be split by tupple",
          "hierarchy": "Cookbook Essential Continuous",
          "module": "Cookbook.Essential.Continuous",
          "name": "Splicable",
          "package": "cookbook",
          "partial": "Splicable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/cookbook/docs/Cookbook-Essential-Continuous.html#t:Splicable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns all elements after part.\n\u003c/p\u003e",
          "module": "Cookbook.Essential.Continuous",
          "name": "after",
          "package": "cookbook",
          "signature": "list -\u003e part -\u003e list",
          "source": "src/Cookbook-Essential-Continuous.html#after",
          "type": "method"
        },
        "index": {
          "description": "Returns all elements after part",
          "hierarchy": "Cookbook Essential Continuous",
          "module": "Cookbook.Essential.Continuous",
          "name": "after",
          "normalized": "a-\u003eb-\u003ea",
          "package": "cookbook",
          "signature": "list-\u003epart-\u003elist",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/cookbook/docs/Cookbook-Essential-Continuous.html#v:after"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns all elements after part.\n\u003c/p\u003e",
          "module": "Cookbook.Essential.Continuous",
          "name": "before",
          "package": "cookbook",
          "signature": "list -\u003e part -\u003e list",
          "source": "src/Cookbook-Essential-Continuous.html#before",
          "type": "method"
        },
        "index": {
          "description": "Returns all elements after part",
          "hierarchy": "Cookbook Essential Continuous",
          "module": "Cookbook.Essential.Continuous",
          "name": "before",
          "normalized": "a-\u003eb-\u003ea",
          "package": "cookbook",
          "signature": "list-\u003epart-\u003elist",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/cookbook/docs/Cookbook-Essential-Continuous.html#v:before"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemoves part from the list.\n\u003c/p\u003e",
          "module": "Cookbook.Essential.Continuous",
          "name": "delete",
          "package": "cookbook",
          "signature": "list -\u003e part -\u003e list",
          "source": "src/Cookbook-Essential-Continuous.html#delete",
          "type": "method"
        },
        "index": {
          "description": "Removes part from the list",
          "hierarchy": "Cookbook Essential Continuous",
          "module": "Cookbook.Essential.Continuous",
          "name": "delete",
          "normalized": "a-\u003eb-\u003ea",
          "package": "cookbook",
          "signature": "list-\u003epart-\u003elist",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/cookbook/docs/Cookbook-Essential-Continuous.html#v:delete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove data from a list.\n\u003c/p\u003e",
          "module": "Cookbook.Essential.Continuous",
          "name": "remove",
          "package": "cookbook",
          "signature": "list -\u003e toRm -\u003e list",
          "source": "src/Cookbook-Essential-Continuous.html#remove",
          "type": "method"
        },
        "index": {
          "description": "Remove data from list",
          "hierarchy": "Cookbook Essential Continuous",
          "module": "Cookbook.Essential.Continuous",
          "name": "remove",
          "normalized": "a-\u003eb-\u003ea",
          "package": "cookbook",
          "signature": "list-\u003etoRm-\u003elist",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/cookbook/docs/Cookbook-Essential-Continuous.html#v:remove"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReplaces part of list.\n\u003c/p\u003e",
          "module": "Cookbook.Essential.Continuous",
          "name": "replace",
          "package": "cookbook",
          "signature": "list -\u003e repls -\u003e list",
          "source": "src/Cookbook-Essential-Continuous.html#replace",
          "type": "method"
        },
        "index": {
          "description": "Replaces part of list",
          "hierarchy": "Cookbook Essential Continuous",
          "module": "Cookbook.Essential.Continuous",
          "name": "replace",
          "normalized": "a-\u003eb-\u003ea",
          "package": "cookbook",
          "signature": "list-\u003erepls-\u003elist",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/cookbook/docs/Cookbook-Essential-Continuous.html#v:replace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemoves everything between the tupple's parameters, including the parameters themselves.\n\u003c/p\u003e",
          "module": "Cookbook.Essential.Continuous",
          "name": "splice",
          "package": "cookbook",
          "signature": "a -\u003e b -\u003e a",
          "source": "src/Cookbook-Essential-Continuous.html#splice",
          "type": "method"
        },
        "index": {
          "description": "Removes everything between the tupple parameters including the parameters themselves",
          "hierarchy": "Cookbook Essential Continuous",
          "module": "Cookbook.Essential.Continuous",
          "name": "splice",
          "normalized": "a-\u003eb-\u003ea",
          "package": "cookbook",
          "signature": "a-\u003eb-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/cookbook/docs/Cookbook-Essential-Continuous.html#v:splice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLibrary for completing common IO tasks, integrating with files and UNIX functions.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Cookbook.Essential.IO",
          "name": "IO",
          "package": "cookbook",
          "source": "src/Cookbook-Essential-IO.html",
          "type": "module"
        },
        "index": {
          "description": "Library for completing common IO tasks integrating with files and UNIX functions",
          "hierarchy": "Cookbook Essential IO",
          "module": "Cookbook.Essential.IO",
          "name": "IO",
          "package": "cookbook",
          "partial": "IO",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cookbook/docs/Cookbook-Essential-IO.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the lines of a file as a list of Strings.\n\u003c/p\u003e",
          "module": "Cookbook.Essential.IO",
          "name": "filelines",
          "package": "cookbook",
          "signature": "String -\u003e IO [String]",
          "source": "src/Cookbook-Essential-IO.html#filelines",
          "type": "function"
        },
        "index": {
          "description": "Return the lines of file as list of Strings",
          "hierarchy": "Cookbook Essential IO",
          "module": "Cookbook.Essential.IO",
          "name": "filelines",
          "normalized": "String-\u003eIO[String]",
          "package": "cookbook",
          "signature": "String-\u003eIO[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cookbook/docs/Cookbook-Essential-IO.html#v:filelines"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePure. Returns the file name with the directory truncated.\n\u003c/p\u003e",
          "module": "Cookbook.Essential.IO",
          "name": "filename",
          "package": "cookbook",
          "signature": "String -\u003e String",
          "source": "src/Cookbook-Essential-IO.html#filename",
          "type": "function"
        },
        "index": {
          "description": "Pure Returns the file name with the directory truncated",
          "hierarchy": "Cookbook Essential IO",
          "module": "Cookbook.Essential.IO",
          "name": "filename",
          "normalized": "String-\u003eString",
          "package": "cookbook",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cookbook/docs/Cookbook-Essential-IO.html#v:filename"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the path of a file in the user's home directory. \n\u003c/p\u003e",
          "module": "Cookbook.Essential.IO",
          "name": "inhome",
          "package": "cookbook",
          "signature": "String -\u003e IOMode -\u003e IO Handle",
          "source": "src/Cookbook-Essential-IO.html#inhome",
          "type": "function"
        },
        "index": {
          "description": "Returns the path of file in the user home directory",
          "hierarchy": "Cookbook Essential IO",
          "module": "Cookbook.Essential.IO",
          "name": "inhome",
          "normalized": "String-\u003eIOMode-\u003eIO Handle",
          "package": "cookbook",
          "signature": "String-\u003eIOMode-\u003eIO Handle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cookbook/docs/Cookbook-Essential-IO.html#v:inhome"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePure. Returns the module name. That is, path to the file with the file cut off.\n\u003c/p\u003e",
          "module": "Cookbook.Essential.IO",
          "name": "modulename",
          "package": "cookbook",
          "signature": "String -\u003e String",
          "source": "src/Cookbook-Essential-IO.html#modulename",
          "type": "function"
        },
        "index": {
          "description": "Pure Returns the module name That is path to the file with the file cut off",
          "hierarchy": "Cookbook Essential IO",
          "module": "Cookbook.Essential.IO",
          "name": "modulename",
          "normalized": "String-\u003eString",
          "package": "cookbook",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cookbook/docs/Cookbook-Essential-IO.html#v:modulename"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrompts the user for keyboard input\n\u003c/p\u003e",
          "module": "Cookbook.Essential.IO",
          "name": "prompt",
          "package": "cookbook",
          "signature": "String -\u003e IO String",
          "source": "src/Cookbook-Essential-IO.html#prompt",
          "type": "function"
        },
        "index": {
          "description": "Prompts the user for keyboard input",
          "hierarchy": "Cookbook Essential IO",
          "module": "Cookbook.Essential.IO",
          "name": "prompt",
          "normalized": "String-\u003eIO String",
          "package": "cookbook",
          "signature": "String-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cookbook/docs/Cookbook-Essential-IO.html#v:prompt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLibrary for breaking conditionally on lists. When one filters a list, it will filter all of the elements. When one filterBREAKS a list, it will stop collecting the list at a desired element. This library also includes functions for conditionally transforming a list.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Cookbook.Ingredients.Functional.Break",
          "name": "Break",
          "package": "cookbook",
          "source": "src/Cookbook-Ingredients-Functional-Break.html",
          "type": "module"
        },
        "index": {
          "description": "Library for breaking conditionally on lists When one filters list it will filter all of the elements When one filterBREAKS list it will stop collecting the list at desired element This library also includes functions for conditionally transforming list",
          "hierarchy": "Cookbook Ingredients Functional Break",
          "module": "Cookbook.Ingredients.Functional.Break",
          "name": "Break",
          "package": "cookbook",
          "partial": "Break",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cookbook/docs/Cookbook-Ingredients-Functional-Break.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConditionally transform a list. If a predicate returns true, use lval. Otherwise, use rval.\n\u003c/p\u003e",
          "module": "Cookbook.Ingredients.Functional.Break",
          "name": "btr",
          "package": "cookbook",
          "signature": "(a -\u003e Bool) -\u003e (b, b) -\u003e [a] -\u003e [b]",
          "source": "src/Cookbook-Ingredients-Functional-Break.html#btr",
          "type": "function"
        },
        "index": {
          "description": "Conditionally transform list If predicate returns true use lval Otherwise use rval",
          "hierarchy": "Cookbook Ingredients Functional Break",
          "module": "Cookbook.Ingredients.Functional.Break",
          "name": "btr",
          "normalized": "(a-\u003eBool)-\u003e(b,b)-\u003e[a]-\u003e[b]",
          "package": "cookbook",
          "signature": "(a-\u003eBool)-\u003e(b,b)-\u003e[a]-\u003e[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cookbook/docs/Cookbook-Ingredients-Functional-Break.html#v:btr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCollect a list until a predicate yields false for a value.\n\u003c/p\u003e",
          "module": "Cookbook.Ingredients.Functional.Break",
          "name": "filterBreak",
          "package": "cookbook",
          "signature": "(a -\u003e Bool) -\u003e [a] -\u003e [a]",
          "source": "src/Cookbook-Ingredients-Functional-Break.html#filterBreak",
          "type": "function"
        },
        "index": {
          "description": "Collect list until predicate yields false for value",
          "hierarchy": "Cookbook Ingredients Functional Break",
          "module": "Cookbook.Ingredients.Functional.Break",
          "name": "filterBreak",
          "normalized": "(a-\u003eBool)-\u003e[a]-\u003e[a]",
          "package": "cookbook",
          "partial": "Break",
          "signature": "(a-\u003eBool)-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cookbook/docs/Cookbook-Ingredients-Functional-Break.html#v:filterBreak"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns true if any element in the list yields true for a predicate.\n\u003c/p\u003e",
          "module": "Cookbook.Ingredients.Functional.Break",
          "name": "imbreak",
          "package": "cookbook",
          "signature": "(a -\u003e Bool) -\u003e [a] -\u003e Bool",
          "source": "src/Cookbook-Ingredients-Functional-Break.html#imbreak",
          "type": "function"
        },
        "index": {
          "description": "Returns true if any element in the list yields true for predicate",
          "hierarchy": "Cookbook Ingredients Functional Break",
          "module": "Cookbook.Ingredients.Functional.Break",
          "name": "imbreak",
          "normalized": "(a-\u003eBool)-\u003e[a]-\u003eBool",
          "package": "cookbook",
          "signature": "(a-\u003eBool)-\u003e[a]-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cookbook/docs/Cookbook-Ingredients-Functional-Break.html#v:imbreak"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDrop a list until a predicate yields false, returning the false item and the rest of the list.\n\u003c/p\u003e",
          "module": "Cookbook.Ingredients.Functional.Break",
          "name": "removeBreak",
          "package": "cookbook",
          "signature": "(a -\u003e Bool) -\u003e [a] -\u003e [a]",
          "source": "src/Cookbook-Ingredients-Functional-Break.html#removeBreak",
          "type": "function"
        },
        "index": {
          "description": "Drop list until predicate yields false returning the false item and the rest of the list",
          "hierarchy": "Cookbook Ingredients Functional Break",
          "module": "Cookbook.Ingredients.Functional.Break",
          "name": "removeBreak",
          "normalized": "(a-\u003eBool)-\u003e[a]-\u003e[a]",
          "package": "cookbook",
          "partial": "Break",
          "signature": "(a-\u003eBool)-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cookbook/docs/Cookbook-Ingredients-Functional-Break.html#v:removeBreak"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLibrary for accessing the information from a list. Modify and Access are six in one and half-dozen in the other in a purely functional language, but the overall theme is this: Access is for functions which return portions of the list, or information about a list. Modify is the library which transforms a list.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Cookbook.Ingredients.Lists.Access",
          "name": "Access",
          "package": "cookbook",
          "source": "src/Cookbook-Ingredients-Lists-Access.html",
          "type": "module"
        },
        "index": {
          "description": "Library for accessing the information from list Modify and Access are six in one and half-dozen in the other in purely functional language but the overall theme is this Access is for functions which return portions of the list or information about list Modify is the library which transforms list",
          "hierarchy": "Cookbook Ingredients Lists Access",
          "module": "Cookbook.Ingredients.Lists.Access",
          "name": "Access",
          "package": "cookbook",
          "partial": "Access",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cookbook/docs/Cookbook-Ingredients-Lists-Access.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest to make sure that all elements in a list are equal to a value.\n\u003c/p\u003e",
          "module": "Cookbook.Ingredients.Lists.Access",
          "name": "areAll",
          "package": "cookbook",
          "signature": "[a] -\u003e a -\u003e Bool",
          "source": "src/Cookbook-Ingredients-Lists-Access.html#areAll",
          "type": "function"
        },
        "index": {
          "description": "Test to make sure that all elements in list are equal to value",
          "hierarchy": "Cookbook Ingredients Lists Access",
          "module": "Cookbook.Ingredients.Lists.Access",
          "name": "areAll",
          "normalized": "[a]-\u003ea-\u003eBool",
          "package": "cookbook",
          "partial": "All",
          "signature": "[a]-\u003ea-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cookbook/docs/Cookbook-Ingredients-Lists-Access.html#v:areAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChecks to see if a list is a sub-list of the list.\n\u003c/p\u003e",
          "module": "Cookbook.Ingredients.Lists.Access",
          "name": "contains",
          "package": "cookbook",
          "signature": "[a] -\u003e [a] -\u003e Bool",
          "source": "src/Cookbook-Ingredients-Lists-Access.html#contains",
          "type": "function"
        },
        "index": {
          "description": "Checks to see if list is sub-list of the list",
          "hierarchy": "Cookbook Ingredients Lists Access",
          "module": "Cookbook.Ingredients.Lists.Access",
          "name": "contains",
          "normalized": "[a]-\u003e[a]-\u003eBool",
          "package": "cookbook",
          "signature": "[a]-\u003e[a]-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cookbook/docs/Cookbook-Ingredients-Lists-Access.html#v:contains"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCounts the occurrences an element has within a list.\n\u003c/p\u003e",
          "module": "Cookbook.Ingredients.Lists.Access",
          "name": "count",
          "package": "cookbook",
          "signature": "[a] -\u003e a -\u003e Int",
          "source": "src/Cookbook-Ingredients-Lists-Access.html#count",
          "type": "function"
        },
        "index": {
          "description": "Counts the occurrences an element has within list",
          "hierarchy": "Cookbook Ingredients Lists Access",
          "module": "Cookbook.Ingredients.Lists.Access",
          "name": "count",
          "normalized": "[a]-\u003ea-\u003eInt",
          "package": "cookbook",
          "signature": "[a]-\u003ea-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cookbook/docs/Cookbook-Ingredients-Lists-Access.html#v:count"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRe-implementation of isPrefixOf for some reason. Tests to see if a list is the first part of antoher list.\n\u003c/p\u003e",
          "module": "Cookbook.Ingredients.Lists.Access",
          "name": "isBefore",
          "package": "cookbook",
          "signature": "[a] -\u003e [a] -\u003e Bool",
          "source": "src/Cookbook-Ingredients-Lists-Access.html#isBefore",
          "type": "function"
        },
        "index": {
          "description": "Re-implementation of isPrefixOf for some reason Tests to see if list is the first part of antoher list",
          "hierarchy": "Cookbook Ingredients Lists Access",
          "module": "Cookbook.Ingredients.Lists.Access",
          "name": "isBefore",
          "normalized": "[a]-\u003e[a]-\u003eBool",
          "package": "cookbook",
          "partial": "Before",
          "signature": "[a]-\u003e[a]-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cookbook/docs/Cookbook-Ingredients-Lists-Access.html#v:isBefore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSafe implementation of !!. Uses maybe instead of error.\n\u003c/p\u003e",
          "module": "Cookbook.Ingredients.Lists.Access",
          "name": "pull",
          "package": "cookbook",
          "signature": "[a] -\u003e Int -\u003e Maybe a",
          "source": "src/Cookbook-Ingredients-Lists-Access.html#pull",
          "type": "function"
        },
        "index": {
          "description": "Safe implementation of Uses maybe instead of error",
          "hierarchy": "Cookbook Ingredients Lists Access",
          "module": "Cookbook.Ingredients.Lists.Access",
          "name": "pull",
          "normalized": "[a]-\u003eInt-\u003eMaybe a",
          "package": "cookbook",
          "signature": "[a]-\u003eInt-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cookbook/docs/Cookbook-Ingredients-Lists-Access.html#v:pull"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eQuickSort implementation. Sorts a list of data quickly?\n\u003c/p\u003e",
          "module": "Cookbook.Ingredients.Lists.Access",
          "name": "qsort",
          "package": "cookbook",
          "signature": "[a] -\u003e [a]",
          "source": "src/Cookbook-Ingredients-Lists-Access.html#qsort",
          "type": "function"
        },
        "index": {
          "description": "QuickSort implementation Sorts list of data quickly",
          "hierarchy": "Cookbook Ingredients Lists Access",
          "module": "Cookbook.Ingredients.Lists.Access",
          "name": "qsort",
          "normalized": "[a]-\u003e[a]",
          "package": "cookbook",
          "signature": "[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cookbook/docs/Cookbook-Ingredients-Lists-Access.html#v:qsort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReferrential positioning. Find the position of an element in the first list, and return the element from the second list of the same position. In the event that the second list is shorter than the position where the element is found in the first list, it returns the parameter. \n\u003c/p\u003e",
          "module": "Cookbook.Ingredients.Lists.Access",
          "name": "refpos",
          "package": "cookbook",
          "signature": "([a], [a]) -\u003e a -\u003e a",
          "source": "src/Cookbook-Ingredients-Lists-Access.html#refpos",
          "type": "function"
        },
        "index": {
          "description": "Referrential positioning Find the position of an element in the first list and return the element from the second list of the same position In the event that the second list is shorter than the position where the element is found in the first list it returns the parameter",
          "hierarchy": "Cookbook Ingredients Lists Access",
          "module": "Cookbook.Ingredients.Lists.Access",
          "name": "refpos",
          "normalized": "([a],[a])-\u003ea-\u003ea",
          "package": "cookbook",
          "signature": "([a],[a])-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cookbook/docs/Cookbook-Ingredients-Lists-Access.html#v:refpos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest to see if a list is surrounded by an item.\n\u003c/p\u003e",
          "module": "Cookbook.Ingredients.Lists.Access",
          "name": "surrounds",
          "package": "cookbook",
          "signature": "(a, a) -\u003e [a] -\u003e Bool",
          "source": "src/Cookbook-Ingredients-Lists-Access.html#surrounds",
          "type": "function"
        },
        "index": {
          "description": "Test to see if list is surrounded by an item",
          "hierarchy": "Cookbook Ingredients Lists Access",
          "module": "Cookbook.Ingredients.Lists.Access",
          "name": "surrounds",
          "normalized": "(a,a)-\u003e[a]-\u003eBool",
          "package": "cookbook",
          "signature": "(a,a)-\u003e[a]-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cookbook/docs/Cookbook-Ingredients-Lists-Access.html#v:surrounds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLibrary for modifying data within a list, and transforming lists in certain ways. While that's vague, so is the definition of \u003ca\u003eTo Modify\u003c/a\u003e. \n\u003c/p\u003e\u003c/div\u003e",
          "module": "Cookbook.Ingredients.Lists.Modify",
          "name": "Modify",
          "package": "cookbook",
          "source": "src/Cookbook-Ingredients-Lists-Modify.html",
          "type": "module"
        },
        "index": {
          "description": "Library for modifying data within list and transforming lists in certain ways While that vague so is the definition of To Modify",
          "hierarchy": "Cookbook Ingredients Lists Modify",
          "module": "Cookbook.Ingredients.Lists.Modify",
          "name": "Modify",
          "package": "cookbook",
          "partial": "Modify",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cookbook/docs/Cookbook-Ingredients-Lists-Modify.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn equivelant to the terenary operator for Haskell.\n\u003c/p\u003e",
          "module": "Cookbook.Ingredients.Lists.Modify",
          "name": "(?)",
          "package": "cookbook",
          "signature": "a -\u003e a -\u003e Bool -\u003e a",
          "source": "src/Cookbook-Ingredients-Lists-Modify.html#%3F",
          "type": "function"
        },
        "index": {
          "description": "An equivelant to the terenary operator for Haskell",
          "hierarchy": "Cookbook Ingredients Lists Modify",
          "module": "Cookbook.Ingredients.Lists.Modify",
          "name": "(?) ?",
          "normalized": "a-\u003ea-\u003eBool-\u003ea",
          "package": "cookbook",
          "signature": "a-\u003ea-\u003eBool-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cookbook/docs/Cookbook-Ingredients-Lists-Modify.html#v:-63-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the data between two items.\n\u003c/p\u003e",
          "module": "Cookbook.Ingredients.Lists.Modify",
          "name": "between",
          "package": "cookbook",
          "signature": "[a] -\u003e (a, a) -\u003e [a]",
          "source": "src/Cookbook-Ingredients-Lists-Modify.html#between",
          "type": "function"
        },
        "index": {
          "description": "Returns the data between two items",
          "hierarchy": "Cookbook Ingredients Lists Modify",
          "module": "Cookbook.Ingredients.Lists.Modify",
          "name": "between",
          "normalized": "[a]-\u003e(a,a)-\u003e[a]",
          "package": "cookbook",
          "signature": "[a]-\u003e(a,a)-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cookbook/docs/Cookbook-Ingredients-Lists-Modify.html#v:between"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePut an element after every element of a list, not including the last element.\n\u003c/p\u003e",
          "module": "Cookbook.Ingredients.Lists.Modify",
          "name": "intersperse",
          "package": "cookbook",
          "signature": "[a] -\u003e a -\u003e [a]",
          "source": "src/Cookbook-Ingredients-Lists-Modify.html#intersperse",
          "type": "function"
        },
        "index": {
          "description": "Put an element after every element of list not including the last element",
          "hierarchy": "Cookbook Ingredients Lists Modify",
          "module": "Cookbook.Ingredients.Lists.Modify",
          "name": "intersperse",
          "normalized": "[a]-\u003ea-\u003e[a]",
          "package": "cookbook",
          "signature": "[a]-\u003ea-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cookbook/docs/Cookbook-Ingredients-Lists-Modify.html#v:intersperse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eImplementation of between that works on a list of lists, and using Contains rather than elem.\n\u003c/p\u003e",
          "module": "Cookbook.Ingredients.Lists.Modify",
          "name": "linesBetween",
          "package": "cookbook",
          "signature": "[[a]] -\u003e ([a], [a]) -\u003e [[a]]",
          "source": "src/Cookbook-Ingredients-Lists-Modify.html#linesBetween",
          "type": "function"
        },
        "index": {
          "description": "Implementation of between that works on list of lists and using Contains rather than elem",
          "hierarchy": "Cookbook Ingredients Lists Modify",
          "module": "Cookbook.Ingredients.Lists.Modify",
          "name": "linesBetween",
          "normalized": "[[a]]-\u003e([a],[a])-\u003e[[a]]",
          "package": "cookbook",
          "partial": "Between",
          "signature": "[[a]]-\u003e([a],[a])-\u003e[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cookbook/docs/Cookbook-Ingredients-Lists-Modify.html#v:linesBetween"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReverses a list.\n\u003c/p\u003e",
          "module": "Cookbook.Ingredients.Lists.Modify",
          "name": "rev",
          "package": "cookbook",
          "signature": "[a] -\u003e [a]",
          "source": "src/Cookbook-Ingredients-Lists-Modify.html#rev",
          "type": "function"
        },
        "index": {
          "description": "Reverses list",
          "hierarchy": "Cookbook Ingredients Lists Modify",
          "module": "Cookbook.Ingredients.Lists.Modify",
          "name": "rev",
          "normalized": "[a]-\u003e[a]",
          "package": "cookbook",
          "signature": "[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cookbook/docs/Cookbook-Ingredients-Lists-Modify.html#v:rev"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemoves all occurances of an element from a list. See MDN1 in the source for a run-down on why it's implemented here and in Continuous.\n\u003c/p\u003e",
          "module": "Cookbook.Ingredients.Lists.Modify",
          "name": "rm",
          "package": "cookbook",
          "signature": "[a] -\u003e a -\u003e [a]",
          "source": "src/Cookbook-Ingredients-Lists-Modify.html#rm",
          "type": "function"
        },
        "index": {
          "description": "Removes all occurances of an element from list See MDN1 in the source for run-down on why it implemented here and in Continuous",
          "hierarchy": "Cookbook Ingredients Lists Modify",
          "module": "Cookbook.Ingredients.Lists.Modify",
          "name": "rm",
          "normalized": "[a]-\u003ea-\u003e[a]",
          "package": "cookbook",
          "signature": "[a]-\u003ea-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cookbook/docs/Cookbook-Ingredients-Lists-Modify.html#v:rm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplits a list on an element, making a list of lists based on the element as a seperator.\n\u003c/p\u003e",
          "module": "Cookbook.Ingredients.Lists.Modify",
          "name": "splitOn",
          "package": "cookbook",
          "signature": "[a] -\u003e a -\u003e [[a]]",
          "source": "src/Cookbook-Ingredients-Lists-Modify.html#splitOn",
          "type": "function"
        },
        "index": {
          "description": "Splits list on an element making list of lists based on the element as seperator",
          "hierarchy": "Cookbook Ingredients Lists Modify",
          "module": "Cookbook.Ingredients.Lists.Modify",
          "name": "splitOn",
          "normalized": "[a]-\u003ea-\u003e[[a]]",
          "package": "cookbook",
          "partial": "On",
          "signature": "[a]-\u003ea-\u003e[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cookbook/docs/Cookbook-Ingredients-Lists-Modify.html#v:splitOn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a list of all elements surrounded by elements. Basically a between which works more than once.\n\u003c/p\u003e",
          "module": "Cookbook.Ingredients.Lists.Modify",
          "name": "surroundedBy",
          "package": "cookbook",
          "signature": "[a] -\u003e (a, a) -\u003e [[a]]",
          "source": "src/Cookbook-Ingredients-Lists-Modify.html#surroundedBy",
          "type": "function"
        },
        "index": {
          "description": "Returns list of all elements surrounded by elements Basically between which works more than once",
          "hierarchy": "Cookbook Ingredients Lists Modify",
          "module": "Cookbook.Ingredients.Lists.Modify",
          "name": "surroundedBy",
          "normalized": "[a]-\u003e(a,a)-\u003e[[a]]",
          "package": "cookbook",
          "partial": "By",
          "signature": "[a]-\u003e(a,a)-\u003e[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cookbook/docs/Cookbook-Ingredients-Lists-Modify.html#v:surroundedBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLibrary for determining mathematically whether two lists are similar.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Cookbook.Ingredients.Lists.Stats",
          "name": "Stats",
          "package": "cookbook",
          "source": "src/Cookbook-Ingredients-Lists-Stats.html",
          "type": "module"
        },
        "index": {
          "description": "Library for determining mathematically whether two lists are similar",
          "hierarchy": "Cookbook Ingredients Lists Stats",
          "module": "Cookbook.Ingredients.Lists.Stats",
          "name": "Stats",
          "package": "cookbook",
          "partial": "Stats",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cookbook/docs/Cookbook-Ingredients-Lists-Stats.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProvides a frequency score between two lists.\n\u003c/p\u003e",
          "module": "Cookbook.Ingredients.Lists.Stats",
          "name": "freqScore",
          "package": "cookbook",
          "signature": "[a] -\u003e [a] -\u003e Double",
          "source": "src/Cookbook-Ingredients-Lists-Stats.html#freqScore",
          "type": "function"
        },
        "index": {
          "description": "Provides frequency score between two lists",
          "hierarchy": "Cookbook Ingredients Lists Stats",
          "module": "Cookbook.Ingredients.Lists.Stats",
          "name": "freqScore",
          "normalized": "[a]-\u003e[a]-\u003eDouble",
          "package": "cookbook",
          "partial": "Score",
          "signature": "[a]-\u003e[a]-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cookbook/docs/Cookbook-Ingredients-Lists-Stats.html#v:freqScore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a list with the frequency of elements in a list.\n\u003c/p\u003e",
          "module": "Cookbook.Ingredients.Lists.Stats",
          "name": "frequency",
          "package": "cookbook",
          "signature": "[a] -\u003e [(a, Int)]",
          "source": "src/Cookbook-Ingredients-Lists-Stats.html#frequency",
          "type": "function"
        },
        "index": {
          "description": "Creates list with the frequency of elements in list",
          "hierarchy": "Cookbook Ingredients Lists Stats",
          "module": "Cookbook.Ingredients.Lists.Stats",
          "name": "frequency",
          "normalized": "[a]-\u003e[(a,Int)]",
          "package": "cookbook",
          "signature": "[a]-\u003e[(a,Int)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cookbook/docs/Cookbook-Ingredients-Lists-Stats.html#v:frequency"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the x-amount of most frequent elements in a list. If there is a \u003ca\u003etie\u003c/a\u003e, the order it appears in a list takes precedence. \n\u003c/p\u003e",
          "module": "Cookbook.Ingredients.Lists.Stats",
          "name": "mostFrequent",
          "package": "cookbook",
          "signature": "[a] -\u003e Int -\u003e [a]",
          "source": "src/Cookbook-Ingredients-Lists-Stats.html#mostFrequent",
          "type": "function"
        },
        "index": {
          "description": "Returns the x-amount of most frequent elements in list If there is tie the order it appears in list takes precedence",
          "hierarchy": "Cookbook Ingredients Lists Stats",
          "module": "Cookbook.Ingredients.Lists.Stats",
          "name": "mostFrequent",
          "normalized": "[a]-\u003eInt-\u003e[a]",
          "package": "cookbook",
          "partial": "Frequent",
          "signature": "[a]-\u003eInt-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cookbook/docs/Cookbook-Ingredients-Lists-Stats.html#v:mostFrequent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProvides a mathematical score out of 1 based on the similarities between the two words. This is freqScore, but it takes into account length.\n\u003c/p\u003e",
          "module": "Cookbook.Ingredients.Lists.Stats",
          "name": "wordscore",
          "package": "cookbook",
          "signature": "[a] -\u003e [a] -\u003e Double",
          "source": "src/Cookbook-Ingredients-Lists-Stats.html#wordscore",
          "type": "function"
        },
        "index": {
          "description": "Provides mathematical score out of based on the similarities between the two words This is freqScore but it takes into account length",
          "hierarchy": "Cookbook Ingredients Lists Stats",
          "module": "Cookbook.Ingredients.Lists.Stats",
          "name": "wordscore",
          "normalized": "[a]-\u003e[a]-\u003eDouble",
          "package": "cookbook",
          "signature": "[a]-\u003e[a]-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cookbook/docs/Cookbook-Ingredients-Lists-Stats.html#v:wordscore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLibrary for arranging and modifying lists of twopples. Dubber Tuppers? There has to be a better word for this. It works on two-sided Tupples.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Cookbook.Ingredients.Tupples.Assemble",
          "name": "Assemble",
          "package": "cookbook",
          "source": "src/Cookbook-Ingredients-Tupples-Assemble.html",
          "type": "module"
        },
        "index": {
          "description": "Library for arranging and modifying lists of twopples Dubber Tuppers There has to be better word for this It works on two-sided Tupples",
          "hierarchy": "Cookbook Ingredients Tupples Assemble",
          "module": "Cookbook.Ingredients.Tupples.Assemble",
          "name": "Assemble",
          "package": "cookbook",
          "partial": "Assemble",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cookbook/docs/Cookbook-Ingredients-Tupples-Assemble.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOrder a list of tupples by their rval, and collect the lvals as a list.\n\u003c/p\u003e",
          "module": "Cookbook.Ingredients.Tupples.Assemble",
          "name": "assemble",
          "package": "cookbook",
          "signature": "[(a, b)] -\u003e [a]",
          "source": "src/Cookbook-Ingredients-Tupples-Assemble.html#assemble",
          "type": "function"
        },
        "index": {
          "description": "Order list of tupples by their rval and collect the lvals as list",
          "hierarchy": "Cookbook Ingredients Tupples Assemble",
          "module": "Cookbook.Ingredients.Tupples.Assemble",
          "name": "assemble",
          "normalized": "[(a,b)]-\u003e[a]",
          "package": "cookbook",
          "signature": "[(a,b)]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cookbook/docs/Cookbook-Ingredients-Tupples-Assemble.html#v:assemble"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemoves all double-entries from a list of tupples, contingent on just lval.\n\u003c/p\u003e",
          "module": "Cookbook.Ingredients.Tupples.Assemble",
          "name": "rmDb",
          "package": "cookbook",
          "signature": "[(a, b)] -\u003e [(a, b)]",
          "source": "src/Cookbook-Ingredients-Tupples-Assemble.html#rmDb",
          "type": "function"
        },
        "index": {
          "description": "Removes all double-entries from list of tupples contingent on just lval",
          "hierarchy": "Cookbook Ingredients Tupples Assemble",
          "module": "Cookbook.Ingredients.Tupples.Assemble",
          "name": "rmDb",
          "normalized": "[(a,b)]-\u003e[(a,b)]",
          "package": "cookbook",
          "partial": "Db",
          "signature": "[(a,b)]-\u003e[(a,b)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cookbook/docs/Cookbook-Ingredients-Tupples-Assemble.html#v:rmDb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSorts a list of Tupples based on their second element.\n\u003c/p\u003e",
          "module": "Cookbook.Ingredients.Tupples.Assemble",
          "name": "tupsort",
          "package": "cookbook",
          "signature": "[(a, b)] -\u003e [(a, b)]",
          "source": "src/Cookbook-Ingredients-Tupples-Assemble.html#tupsort",
          "type": "function"
        },
        "index": {
          "description": "Sorts list of Tupples based on their second element",
          "hierarchy": "Cookbook Ingredients Tupples Assemble",
          "module": "Cookbook.Ingredients.Tupples.Assemble",
          "name": "tupsort",
          "normalized": "[(a,b)]-\u003e[(a,b)]",
          "package": "cookbook",
          "signature": "[(a,b)]-\u003e[(a,b)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cookbook/docs/Cookbook-Ingredients-Tupples-Assemble.html#v:tupsort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLibrary for using tupples as an associative list. It can be thought of like a \u003ca\u003emap\u003c/a\u003e in Clojure, or a database of key-value pairs. This is also the general-purpose tupple library, so there's stragglers.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Cookbook.Ingredients.Tupples.Look",
          "name": "Look",
          "package": "cookbook",
          "source": "src/Cookbook-Ingredients-Tupples-Look.html",
          "type": "module"
        },
        "index": {
          "description": "Library for using tupples as an associative list It can be thought of like map in Clojure or database of key-value pairs This is also the general-purpose tupple library so there stragglers",
          "hierarchy": "Cookbook Ingredients Tupples Look",
          "module": "Cookbook.Ingredients.Tupples.Look",
          "name": "Look",
          "package": "cookbook",
          "partial": "Look",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cookbook/docs/Cookbook-Ingredients-Tupples-Look.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTurns a list into as many double-tupples (a,a) as it can, dropping items from uneven lists.\n\u003c/p\u003e",
          "module": "Cookbook.Ingredients.Tupples.Look",
          "name": "group",
          "package": "cookbook",
          "signature": "[a] -\u003e [(a, a)]",
          "source": "src/Cookbook-Ingredients-Tupples-Look.html#group",
          "type": "function"
        },
        "index": {
          "description": "Turns list into as many double-tupples as it can dropping items from uneven lists",
          "hierarchy": "Cookbook Ingredients Tupples Look",
          "module": "Cookbook.Ingredients.Tupples.Look",
          "name": "group",
          "normalized": "[a]-\u003e[(a,a)]",
          "package": "cookbook",
          "signature": "[a]-\u003e[(a,a)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cookbook/docs/Cookbook-Ingredients-Tupples-Look.html#v:group"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLook up an lval in a list of tupples.\n\u003c/p\u003e",
          "module": "Cookbook.Ingredients.Tupples.Look",
          "name": "look",
          "package": "cookbook",
          "signature": "[(a, b)] -\u003e a -\u003e Maybe b",
          "source": "src/Cookbook-Ingredients-Tupples-Look.html#look",
          "type": "function"
        },
        "index": {
          "description": "Look up an lval in list of tupples",
          "hierarchy": "Cookbook Ingredients Tupples Look",
          "module": "Cookbook.Ingredients.Tupples.Look",
          "name": "look",
          "normalized": "[(a,b)]-\u003ea-\u003eMaybe b",
          "package": "cookbook",
          "signature": "[(a,b)]-\u003ea-\u003eMaybe b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cookbook/docs/Cookbook-Ingredients-Tupples-Look.html#v:look"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns all elements where the lval matches the element.\n\u003c/p\u003e",
          "module": "Cookbook.Ingredients.Tupples.Look",
          "name": "lookList",
          "package": "cookbook",
          "signature": "[(a, b)] -\u003e a -\u003e [b]",
          "source": "src/Cookbook-Ingredients-Tupples-Look.html#lookList",
          "type": "function"
        },
        "index": {
          "description": "Returns all elements where the lval matches the element",
          "hierarchy": "Cookbook Ingredients Tupples Look",
          "module": "Cookbook.Ingredients.Tupples.Look",
          "name": "lookList",
          "normalized": "[(a,b)]-\u003ea-\u003e[b]",
          "package": "cookbook",
          "partial": "List",
          "signature": "[(a,b)]-\u003ea-\u003e[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cookbook/docs/Cookbook-Ingredients-Tupples-Look.html#v:lookList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemoves all matches of the lval.\n\u003c/p\u003e",
          "module": "Cookbook.Ingredients.Tupples.Look",
          "name": "rmLook",
          "package": "cookbook",
          "signature": "[(a, b)] -\u003e a -\u003e [(a, b)]",
          "source": "src/Cookbook-Ingredients-Tupples-Look.html#rmLook",
          "type": "function"
        },
        "index": {
          "description": "Removes all matches of the lval",
          "hierarchy": "Cookbook Ingredients Tupples Look",
          "module": "Cookbook.Ingredients.Tupples.Look",
          "name": "rmLook",
          "normalized": "[(a,b)]-\u003ea-\u003e[(a,b)]",
          "package": "cookbook",
          "partial": "Look",
          "signature": "[(a,b)]-\u003ea-\u003e[(a,b)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cookbook/docs/Cookbook-Ingredients-Tupples-Look.html#v:rmLook"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSwap the lval with the rval, and vice-versa.\n\u003c/p\u003e",
          "module": "Cookbook.Ingredients.Tupples.Look",
          "name": "swp",
          "package": "cookbook",
          "signature": "(a, b) -\u003e (b, a)",
          "source": "src/Cookbook-Ingredients-Tupples-Look.html#swp",
          "type": "function"
        },
        "index": {
          "description": "Swap the lval with the rval and vice-versa",
          "hierarchy": "Cookbook Ingredients Tupples Look",
          "module": "Cookbook.Ingredients.Tupples.Look",
          "name": "swp",
          "normalized": "(a,b)-\u003e(b,a)",
          "package": "cookbook",
          "signature": "(a,b)-\u003e(b,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cookbook/docs/Cookbook-Ingredients-Tupples-Look.html#v:swp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eConfiguration is a library for simple configuration files. It's pretty fragile, but it's been used for some pretty majorly used scripts, namely espion. The lvalue becomes the fst of a name-value pair, and the rvalue becomes the second, with the syntax: lvalue : rvaluen\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Cookbook.Project.Configuration.Configuration",
          "name": "Configuration",
          "package": "cookbook",
          "source": "src/Cookbook-Project-Configuration-Configuration.html",
          "type": "module"
        },
        "index": {
          "description": "Configuration is library for simple configuration files It pretty fragile but it been used for some pretty majorly used scripts namely espion The lvalue becomes the fst of name-value pair and the rvalue becomes the second with the syntax lvalue rvaluen",
          "hierarchy": "Cookbook Project Configuration Configuration",
          "module": "Cookbook.Project.Configuration.Configuration",
          "name": "Configuration",
          "package": "cookbook",
          "partial": "Configuration",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cookbook/docs/Cookbook-Project-Configuration-Configuration.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead the lines of a configuration file, query it, and return an answer to the query.\n\u003c/p\u003e",
          "module": "Cookbook.Project.Configuration.Configuration",
          "name": "conf",
          "package": "cookbook",
          "signature": "[String] -\u003e String -\u003e String",
          "source": "src/Cookbook-Project-Configuration-Configuration.html#conf",
          "type": "function"
        },
        "index": {
          "description": "Read the lines of configuration file query it and return an answer to the query",
          "hierarchy": "Cookbook Project Configuration Configuration",
          "module": "Cookbook.Project.Configuration.Configuration",
          "name": "conf",
          "normalized": "[String]-\u003eString-\u003eString",
          "package": "cookbook",
          "signature": "[String]-\u003eString-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cookbook/docs/Cookbook-Project-Configuration-Configuration.html#v:conf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA library for preprocessing information using replacing sweeps. Supports inline comments. Does not currently support whitespace-insignificant parsing.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Cookbook.Project.Preprocess.Preprocess",
          "name": "Preprocess",
          "package": "cookbook",
          "source": "src/Cookbook-Project-Preprocess-Preprocess.html",
          "type": "module"
        },
        "index": {
          "description": "library for preprocessing information using replacing sweeps Supports inline comments Does not currently support whitespace-insignificant parsing",
          "hierarchy": "Cookbook Project Preprocess Preprocess",
          "module": "Cookbook.Project.Preprocess.Preprocess",
          "name": "Preprocess",
          "package": "cookbook",
          "partial": "Preprocess",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cookbook/docs/Cookbook-Project-Preprocess-Preprocess.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate Program Language. Generates a list of input-output pairs to be replaced.\n\u003c/p\u003e",
          "module": "Cookbook.Project.Preprocess.Preprocess",
          "name": "gPL",
          "package": "cookbook",
          "signature": "[String] -\u003e [(String, String)]",
          "source": "src/Cookbook-Project-Preprocess-Preprocess.html#gPL",
          "type": "function"
        },
        "index": {
          "description": "Generate Program Language Generates list of input-output pairs to be replaced",
          "hierarchy": "Cookbook Project Preprocess Preprocess",
          "module": "Cookbook.Project.Preprocess.Preprocess",
          "name": "gPL",
          "normalized": "[String]-\u003e[(String,String)]",
          "package": "cookbook",
          "partial": "PL",
          "signature": "[String]-\u003e[(String,String)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cookbook/docs/Cookbook-Project-Preprocess-Preprocess.html#v:gPL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBinds possibly multiple inputs on one line to one input. General syntax is: inp1|inp2_out\n\u003c/p\u003e",
          "module": "Cookbook.Project.Preprocess.Preprocess",
          "name": "makeParams",
          "package": "cookbook",
          "signature": "String -\u003e [(String, String)]",
          "source": "src/Cookbook-Project-Preprocess-Preprocess.html#makeParams",
          "type": "function"
        },
        "index": {
          "description": "Binds possibly multiple inputs on one line to one input General syntax is inp1 inp2 out",
          "hierarchy": "Cookbook Project Preprocess Preprocess",
          "module": "Cookbook.Project.Preprocess.Preprocess",
          "name": "makeParams",
          "normalized": "String-\u003e[(String,String)]",
          "package": "cookbook",
          "partial": "Params",
          "signature": "String-\u003e[(String,String)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cookbook/docs/Cookbook-Project-Preprocess-Preprocess.html#v:makeParams"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSanitizes the strings before parsing.\n\u003c/p\u003e",
          "module": "Cookbook.Project.Preprocess.Preprocess",
          "name": "sanitize",
          "package": "cookbook",
          "signature": "String -\u003e String",
          "source": "src/Cookbook-Project-Preprocess-Preprocess.html#sanitize",
          "type": "function"
        },
        "index": {
          "description": "Sanitizes the strings before parsing",
          "hierarchy": "Cookbook Project Preprocess Preprocess",
          "module": "Cookbook.Project.Preprocess.Preprocess",
          "name": "sanitize",
          "normalized": "String-\u003eString",
          "package": "cookbook",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cookbook/docs/Cookbook-Project-Preprocess-Preprocess.html#v:sanitize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA library for reading simple databases. As what was originally a quirk of the library, database tables can be split up and still parsed as if they were a unit, giving it the ability to read the same table from multiple files in parallel. Quill supports a comment syntax, whitespace-insignificant parsing, and a full CRUD API. Quill will EVENTUALLY be replaced by Scribe2, but the planning for Scribe2 has not yet begun.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Cookbook.Project.Quill.Quill",
          "name": "Quill",
          "package": "cookbook",
          "source": "src/Cookbook-Project-Quill-Quill.html",
          "type": "module"
        },
        "index": {
          "description": "library for reading simple databases As what was originally quirk of the library database tables can be split up and still parsed as if they were unit giving it the ability to read the same table from multiple files in parallel Quill supports comment syntax whitespace-insignificant parsing and full CRUD API Quill will EVENTUALLY be replaced by Scribe2 but the planning for Scribe2 has not yet begun",
          "hierarchy": "Cookbook Project Quill Quill",
          "module": "Cookbook.Project.Quill.Quill",
          "name": "Quill",
          "package": "cookbook",
          "partial": "Quill",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cookbook/docs/Cookbook-Project-Quill-Quill.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA table is a record of a name and the information within it.\n\u003c/p\u003e",
          "module": "Cookbook.Project.Quill.Quill",
          "name": "Table",
          "package": "cookbook",
          "source": "src/Cookbook-Project-Quill-Quill.html#Table",
          "type": "data"
        },
        "index": {
          "description": "table is record of name and the information within it",
          "hierarchy": "Cookbook Project Quill Quill",
          "module": "Cookbook.Project.Quill.Quill",
          "name": "Table",
          "package": "cookbook",
          "partial": "Table",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cookbook/docs/Cookbook-Project-Quill-Quill.html#t:Table"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Cookbook.Project.Quill.Quill",
          "name": "Table",
          "package": "cookbook",
          "signature": "Table",
          "source": "src/Cookbook-Project-Quill-Quill.html#Table",
          "type": "function"
        },
        "index": {
          "hierarchy": "Cookbook Project Quill Quill",
          "module": "Cookbook.Project.Quill.Quill",
          "name": "Table",
          "package": "cookbook",
          "partial": "Table",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cookbook/docs/Cookbook-Project-Quill-Quill.html#v:Table"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdds an item to a table within a database.\n\u003c/p\u003e",
          "module": "Cookbook.Project.Quill.Quill",
          "name": "addItem",
          "package": "cookbook",
          "signature": "[(String, [(String, String)])] -\u003e String -\u003e (String, String) -\u003e [(String, [(String, String)])]",
          "source": "src/Cookbook-Project-Quill-Quill.html#addItem",
          "type": "function"
        },
        "index": {
          "description": "Adds an item to table within database",
          "hierarchy": "Cookbook Project Quill Quill",
          "module": "Cookbook.Project.Quill.Quill",
          "name": "addItem",
          "normalized": "[(String,[(String,String)])]-\u003eString-\u003e(String,String)-\u003e[(String,[(String,String)])]",
          "package": "cookbook",
          "partial": "Item",
          "signature": "[(String,[(String,String)])]-\u003eString-\u003e(String,String)-\u003e[(String,[(String,String)])]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cookbook/docs/Cookbook-Project-Quill-Quill.html#v:addItem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChanges an item within a table. The identifier will remain the same; only the rvalue will change.\n\u003c/p\u003e",
          "module": "Cookbook.Project.Quill.Quill",
          "name": "changeItem",
          "package": "cookbook",
          "signature": "[(String, [(String, String)])] -\u003e (String, String) -\u003e String -\u003e [(String, [(String, String)])]",
          "source": "src/Cookbook-Project-Quill-Quill.html#changeItem",
          "type": "function"
        },
        "index": {
          "description": "Changes an item within table The identifier will remain the same only the rvalue will change",
          "hierarchy": "Cookbook Project Quill Quill",
          "module": "Cookbook.Project.Quill.Quill",
          "name": "changeItem",
          "normalized": "[(String,[(String,String)])]-\u003e(String,String)-\u003eString-\u003e[(String,[(String,String)])]",
          "package": "cookbook",
          "partial": "Item",
          "signature": "[(String,[(String,String)])]-\u003e(String,String)-\u003eString-\u003e[(String,[(String,String)])]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cookbook/docs/Cookbook-Project-Quill-Quill.html#v:changeItem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a new table within the database.\n\u003c/p\u003e",
          "module": "Cookbook.Project.Quill.Quill",
          "name": "createTable",
          "package": "cookbook",
          "signature": "[(String, [(String, String)])] -\u003e String -\u003e [(String, [(String, String)])]",
          "source": "src/Cookbook-Project-Quill-Quill.html#createTable",
          "type": "function"
        },
        "index": {
          "description": "Creates new table within the database",
          "hierarchy": "Cookbook Project Quill Quill",
          "module": "Cookbook.Project.Quill.Quill",
          "name": "createTable",
          "normalized": "[(String,[(String,String)])]-\u003eString-\u003e[(String,[(String,String)])]",
          "package": "cookbook",
          "partial": "Table",
          "signature": "[(String,[(String,String)])]-\u003eString-\u003e[(String,[(String,String)])]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cookbook/docs/Cookbook-Project-Quill-Quill.html#v:createTable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets a particular table in the file, returning its key-value pairs.\n\u003c/p\u003e",
          "module": "Cookbook.Project.Quill.Quill",
          "name": "getTable",
          "package": "cookbook",
          "signature": "[(String, [(String, String)])] -\u003e String -\u003e [(String, String)]",
          "source": "src/Cookbook-Project-Quill-Quill.html#getTable",
          "type": "function"
        },
        "index": {
          "description": "Gets particular table in the file returning its key-value pairs",
          "hierarchy": "Cookbook Project Quill Quill",
          "module": "Cookbook.Project.Quill.Quill",
          "name": "getTable",
          "normalized": "[(String,[(String,String)])]-\u003eString-\u003e[(String,String)]",
          "package": "cookbook",
          "partial": "Table",
          "signature": "[(String,[(String,String)])]-\u003eString-\u003e[(String,String)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cookbook/docs/Cookbook-Project-Quill-Quill.html#v:getTable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cul\u003e\u003cli\u003eShould not be used raw except for API programming. Really shouldn't be included, but too lazy to enumerate top-level declarations for selective export* Returns all entry lines from within tables in database.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Cookbook.Project.Quill.Quill",
          "name": "headlessData",
          "package": "cookbook",
          "signature": "String -\u003e [[String]]",
          "source": "src/Cookbook-Project-Quill-Quill.html#headlessData",
          "type": "function"
        },
        "index": {
          "description": "Should not be used raw except for API programming Really shouldn be included but too lazy to enumerate top-level declarations for selective export Returns all entry lines from within tables in database",
          "hierarchy": "Cookbook Project Quill Quill",
          "module": "Cookbook.Project.Quill.Quill",
          "name": "headlessData",
          "normalized": "String-\u003e[[String]]",
          "package": "cookbook",
          "partial": "Data",
          "signature": "String-\u003e[[String]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cookbook/docs/Cookbook-Project-Quill-Quill.html#v:headlessData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Cookbook.Project.Quill.Quill",
          "name": "info",
          "package": "cookbook",
          "signature": "[(String, String)]",
          "source": "src/Cookbook-Project-Quill-Quill.html#Table",
          "type": "function"
        },
        "index": {
          "hierarchy": "Cookbook Project Quill Quill",
          "module": "Cookbook.Project.Quill.Quill",
          "name": "info",
          "normalized": "[(String,String)]",
          "package": "cookbook",
          "signature": "[(String,String)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cookbook/docs/Cookbook-Project-Quill-Quill.html#v:info"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets the particular item within a table from a database.\n\u003c/p\u003e",
          "module": "Cookbook.Project.Quill.Quill",
          "name": "lookUp",
          "package": "cookbook",
          "signature": "[(String, [(String, String)])] -\u003e (String, String) -\u003e [String]",
          "source": "src/Cookbook-Project-Quill-Quill.html#lookUp",
          "type": "function"
        },
        "index": {
          "description": "Gets the particular item within table from database",
          "hierarchy": "Cookbook Project Quill Quill",
          "module": "Cookbook.Project.Quill.Quill",
          "name": "lookUp",
          "normalized": "[(String,[(String,String)])]-\u003e(String,String)-\u003e[String]",
          "package": "cookbook",
          "partial": "Up",
          "signature": "[(String,[(String,String)])]-\u003e(String,String)-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cookbook/docs/Cookbook-Project-Quill-Quill.html#v:lookUp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Cookbook.Project.Quill.Quill",
          "name": "name",
          "package": "cookbook",
          "signature": "String",
          "source": "src/Cookbook-Project-Quill-Quill.html#Table",
          "type": "function"
        },
        "index": {
          "hierarchy": "Cookbook Project Quill Quill",
          "module": "Cookbook.Project.Quill.Quill",
          "name": "name",
          "package": "cookbook",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cookbook/docs/Cookbook-Project-Quill-Quill.html#v:name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSanitizes strings for Quill processing. Removes comments, newlines, and flattens it into a string.\n\u003c/p\u003e",
          "module": "Cookbook.Project.Quill.Quill",
          "name": "prepare",
          "package": "cookbook",
          "signature": "[String] -\u003e String",
          "source": "src/Cookbook-Project-Quill-Quill.html#prepare",
          "type": "function"
        },
        "index": {
          "description": "Sanitizes strings for Quill processing Removes comments newlines and flattens it into string",
          "hierarchy": "Cookbook Project Quill Quill",
          "module": "Cookbook.Project.Quill.Quill",
          "name": "prepare",
          "normalized": "[String]-\u003eString",
          "package": "cookbook",
          "signature": "[String]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cookbook/docs/Cookbook-Project-Quill-Quill.html#v:prepare"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemoves a particular item from a table within a database.\n\u003c/p\u003e",
          "module": "Cookbook.Project.Quill.Quill",
          "name": "removeItem",
          "package": "cookbook",
          "signature": "[(String, [(String, String)])] -\u003e (String, String) -\u003e [(String, [(String, String)])]",
          "source": "src/Cookbook-Project-Quill-Quill.html#removeItem",
          "type": "function"
        },
        "index": {
          "description": "Removes particular item from table within database",
          "hierarchy": "Cookbook Project Quill Quill",
          "module": "Cookbook.Project.Quill.Quill",
          "name": "removeItem",
          "normalized": "[(String,[(String,String)])]-\u003e(String,String)-\u003e[(String,[(String,String)])]",
          "package": "cookbook",
          "partial": "Item",
          "signature": "[(String,[(String,String)])]-\u003e(String,String)-\u003e[(String,[(String,String)])]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cookbook/docs/Cookbook-Project-Quill-Quill.html#v:removeItem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemoves an entire table from the database by name.\n\u003c/p\u003e",
          "module": "Cookbook.Project.Quill.Quill",
          "name": "removeTable",
          "package": "cookbook",
          "signature": "[(String, [(String, String)])] -\u003e String -\u003e [(String, [(String, String)])]",
          "source": "src/Cookbook-Project-Quill-Quill.html#removeTable",
          "type": "function"
        },
        "index": {
          "description": "Removes an entire table from the database by name",
          "hierarchy": "Cookbook Project Quill Quill",
          "module": "Cookbook.Project.Quill.Quill",
          "name": "removeTable",
          "normalized": "[(String,[(String,String)])]-\u003eString-\u003e[(String,[(String,String)])]",
          "package": "cookbook",
          "partial": "Table",
          "signature": "[(String,[(String,String)])]-\u003eString-\u003e[(String,[(String,String)])]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cookbook/docs/Cookbook-Project-Quill-Quill.html#v:removeTable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBasically a toString function for Quill tables. It turns data into a String format which can be parsed by the Quill parsing stack.\n\u003c/p\u003e",
          "module": "Cookbook.Project.Quill.Quill",
          "name": "tableToString",
          "package": "cookbook",
          "signature": "(String, [(String, String)]) -\u003e String",
          "source": "src/Cookbook-Project-Quill-Quill.html#tableToString",
          "type": "function"
        },
        "index": {
          "description": "Basically toString function for Quill tables It turns data into String format which can be parsed by the Quill parsing stack",
          "hierarchy": "Cookbook Project Quill Quill",
          "module": "Cookbook.Project.Quill.Quill",
          "name": "tableToString",
          "normalized": "(String,[(String,String)])-\u003eString",
          "package": "cookbook",
          "partial": "To String",
          "signature": "(String,[(String,String)])-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cookbook/docs/Cookbook-Project-Quill-Quill.html#v:tableToString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a listing of all tables in the file.\n\u003c/p\u003e",
          "module": "Cookbook.Project.Quill.Quill",
          "name": "tables",
          "package": "cookbook",
          "signature": "[String] -\u003e [(String, [(String, String)])]",
          "source": "src/Cookbook-Project-Quill-Quill.html#tables",
          "type": "function"
        },
        "index": {
          "description": "Creates listing of all tables in the file",
          "hierarchy": "Cookbook Project Quill Quill",
          "module": "Cookbook.Project.Quill.Quill",
          "name": "tables",
          "normalized": "[String]-\u003e[(String,[(String,String)])]",
          "package": "cookbook",
          "signature": "[String]-\u003e[(String,[(String,String)])]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cookbook/docs/Cookbook-Project-Quill-Quill.html#v:tables"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the names of all tables in the file.\n\u003c/p\u003e",
          "module": "Cookbook.Project.Quill.Quill",
          "name": "tblNames",
          "package": "cookbook",
          "signature": "String -\u003e [String]",
          "source": "src/Cookbook-Project-Quill-Quill.html#tblNames",
          "type": "function"
        },
        "index": {
          "description": "Returns the names of all tables in the file",
          "hierarchy": "Cookbook Project Quill Quill",
          "module": "Cookbook.Project.Quill.Quill",
          "name": "tblNames",
          "normalized": "String-\u003e[String]",
          "package": "cookbook",
          "partial": "Names",
          "signature": "String-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cookbook/docs/Cookbook-Project-Quill-Quill.html#v:tblNames"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns all of the tokens from headlessData.\n\u003c/p\u003e",
          "module": "Cookbook.Project.Quill.Quill",
          "name": "tokenLists",
          "package": "cookbook",
          "signature": "[[String]] -\u003e [[(String, String)]]",
          "source": "src/Cookbook-Project-Quill-Quill.html#tokenLists",
          "type": "function"
        },
        "index": {
          "description": "Returns all of the tokens from headlessData",
          "hierarchy": "Cookbook Project Quill Quill",
          "module": "Cookbook.Project.Quill.Quill",
          "name": "tokenLists",
          "normalized": "[[String]]-\u003e[[(String,String)]]",
          "package": "cookbook",
          "partial": "Lists",
          "signature": "[[String]]-\u003e[[(String,String)]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cookbook/docs/Cookbook-Project-Quill-Quill.html#v:tokenLists"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplits a list into tupples.\n\u003c/p\u003e",
          "module": "Cookbook.Project.Quill.Quill",
          "name": "tokenize",
          "package": "cookbook",
          "signature": "[a] -\u003e [(a, a)]",
          "source": "src/Cookbook-Project-Quill-Quill.html#tokenize",
          "type": "function"
        },
        "index": {
          "description": "Splits list into tupples",
          "hierarchy": "Cookbook Project Quill Quill",
          "module": "Cookbook.Project.Quill.Quill",
          "name": "tokenize",
          "normalized": "[a]-\u003e[(a,a)]",
          "package": "cookbook",
          "signature": "[a]-\u003e[(a,a)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cookbook/docs/Cookbook-Project-Quill-Quill.html#v:tokenize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLibrary for interacting with high-evel data structures found in Cookbook.Recipes.DataStructures (Ds). It also implements some data types that would have just been type synonyms if implemented in Ds.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Cookbook.Recipes.Algorithm",
          "name": "Algorithm",
          "package": "cookbook",
          "source": "src/Cookbook-Recipes-Algorithm.html",
          "type": "module"
        },
        "index": {
          "description": "Library for interacting with high-evel data structures found in Cookbook.Recipes.DataStructures Ds It also implements some data types that would have just been type synonyms if implemented in Ds",
          "hierarchy": "Cookbook Recipes Algorithm",
          "module": "Cookbook.Recipes.Algorithm",
          "name": "Algorithm",
          "package": "cookbook",
          "partial": "Algorithm",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cookbook/docs/Cookbook-Recipes-Algorithm.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet every node of a tree, put it into a list.\n\u003c/p\u003e",
          "module": "Cookbook.Recipes.Algorithm",
          "name": "climb",
          "package": "cookbook",
          "signature": "Tree a -\u003e [a]",
          "source": "src/Cookbook-Recipes-Algorithm.html#climb",
          "type": "function"
        },
        "index": {
          "description": "Get every node of tree put it into list",
          "hierarchy": "Cookbook Recipes Algorithm",
          "module": "Cookbook.Recipes.Algorithm",
          "name": "climb",
          "normalized": "Tree a-\u003e[a]",
          "package": "cookbook",
          "signature": "Tree a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cookbook/docs/Cookbook-Recipes-Algorithm.html#v:climb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerates a list of points, with the specified null data in the snd of the tupples.\n\u003c/p\u003e",
          "module": "Cookbook.Recipes.Algorithm",
          "name": "genMatrix",
          "package": "cookbook",
          "signature": "(Int, Int) -\u003e a -\u003e [((Int, Int), a)]",
          "source": "src/Cookbook-Recipes-Algorithm.html#genMatrix",
          "type": "function"
        },
        "index": {
          "description": "Generates list of points with the specified null data in the snd of the tupples",
          "hierarchy": "Cookbook Recipes Algorithm",
          "module": "Cookbook.Recipes.Algorithm",
          "name": "genMatrix",
          "normalized": "(Int,Int)-\u003ea-\u003e[((Int,Int),a)]",
          "package": "cookbook",
          "partial": "Matrix",
          "signature": "(Int,Int)-\u003ea-\u003e[((Int,Int),a)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cookbook/docs/Cookbook-Recipes-Algorithm.html#v:genMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCollectively nullify nodes on a tree.\n\u003c/p\u003e",
          "module": "Cookbook.Recipes.Algorithm",
          "name": "treeFilter",
          "package": "cookbook",
          "signature": "Tree a -\u003e (a -\u003e Bool) -\u003e Tree a",
          "source": "src/Cookbook-Recipes-Algorithm.html#treeFilter",
          "type": "function"
        },
        "index": {
          "description": "Collectively nullify nodes on tree",
          "hierarchy": "Cookbook Recipes Algorithm",
          "module": "Cookbook.Recipes.Algorithm",
          "name": "treeFilter",
          "normalized": "Tree a-\u003e(a-\u003eBool)-\u003eTree a",
          "package": "cookbook",
          "partial": "Filter",
          "signature": "Tree a-\u003e(a-\u003eBool)-\u003eTree a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cookbook/docs/Cookbook-Recipes-Algorithm.html#v:treeFilter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a function to every node in a tree.\n\u003c/p\u003e",
          "module": "Cookbook.Recipes.Algorithm",
          "name": "treeMap",
          "package": "cookbook",
          "signature": "Tree a -\u003e (a -\u003e a) -\u003e Tree a",
          "source": "src/Cookbook-Recipes-Algorithm.html#treeMap",
          "type": "function"
        },
        "index": {
          "description": "Apply function to every node in tree",
          "hierarchy": "Cookbook Recipes Algorithm",
          "module": "Cookbook.Recipes.Algorithm",
          "name": "treeMap",
          "normalized": "Tree a-\u003e(a-\u003ea)-\u003eTree a",
          "package": "cookbook",
          "partial": "Map",
          "signature": "Tree a-\u003e(a-\u003ea)-\u003eTree a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cookbook/docs/Cookbook-Recipes-Algorithm.html#v:treeMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLibrary for defining high-level generic data structures, most commonly containers. Specialized data types for specialized projects should go into Projects. It's sort of why it exists.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Cookbook.Recipes.DataStructures",
          "name": "DataStructures",
          "package": "cookbook",
          "source": "src/Cookbook-Recipes-DataStructures.html",
          "type": "module"
        },
        "index": {
          "description": "Library for defining high-level generic data structures most commonly containers Specialized data types for specialized projects should go into Projects It sort of why it exists",
          "hierarchy": "Cookbook Recipes DataStructures",
          "module": "Cookbook.Recipes.DataStructures",
          "name": "DataStructures",
          "package": "cookbook",
          "partial": "Data Structures",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cookbook/docs/Cookbook-Recipes-DataStructures.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eImplementation of a binary tree.\n\u003c/p\u003e",
          "module": "Cookbook.Recipes.DataStructures",
          "name": "Tree",
          "package": "cookbook",
          "source": "src/Cookbook-Recipes-DataStructures.html#Tree",
          "type": "data"
        },
        "index": {
          "description": "Implementation of binary tree",
          "hierarchy": "Cookbook Recipes DataStructures",
          "module": "Cookbook.Recipes.DataStructures",
          "name": "Tree",
          "package": "cookbook",
          "partial": "Tree",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cookbook/docs/Cookbook-Recipes-DataStructures.html#t:Tree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Cookbook.Recipes.DataStructures",
          "name": "Branch",
          "package": "cookbook",
          "signature": "Branch a (Tree a) (Tree a)",
          "source": "src/Cookbook-Recipes-DataStructures.html#Tree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Cookbook Recipes DataStructures",
          "module": "Cookbook.Recipes.DataStructures",
          "name": "Branch",
          "package": "cookbook",
          "partial": "Branch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cookbook/docs/Cookbook-Recipes-DataStructures.html#v:Branch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Cookbook.Recipes.DataStructures",
          "name": "Empty",
          "package": "cookbook",
          "signature": "Empty",
          "source": "src/Cookbook-Recipes-DataStructures.html#Tree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Cookbook Recipes DataStructures",
          "module": "Cookbook.Recipes.DataStructures",
          "name": "Empty",
          "package": "cookbook",
          "partial": "Empty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cookbook/docs/Cookbook-Recipes-DataStructures.html#v:Empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLibrary for working with numbers more easily. It includes somewhat lazy functions for when a lambda will clutter code up too much, as well as more involved mathematical formulae. \n\u003c/p\u003e\u003c/div\u003e",
          "module": "Cookbook.Recipes.Math",
          "name": "Math",
          "package": "cookbook",
          "source": "src/Cookbook-Recipes-Math.html",
          "type": "module"
        },
        "index": {
          "description": "Library for working with numbers more easily It includes somewhat lazy functions for when lambda will clutter code up too much as well as more involved mathematical formulae",
          "hierarchy": "Cookbook Recipes Math",
          "module": "Cookbook.Recipes.Math",
          "name": "Math",
          "package": "cookbook",
          "partial": "Math",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cookbook/docs/Cookbook-Recipes-Math.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind the average of a group of Fractionals.\n\u003c/p\u003e",
          "module": "Cookbook.Recipes.Math",
          "name": "avg",
          "package": "cookbook",
          "signature": "[a] -\u003e a",
          "source": "src/Cookbook-Recipes-Math.html#avg",
          "type": "function"
        },
        "index": {
          "description": "Find the average of group of Fractionals",
          "hierarchy": "Cookbook Recipes Math",
          "module": "Cookbook.Recipes.Math",
          "name": "avg",
          "normalized": "[a]-\u003ea",
          "package": "cookbook",
          "signature": "[a]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cookbook/docs/Cookbook-Recipes-Math.html#v:avg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecrease value by one,\n\u003c/p\u003e",
          "module": "Cookbook.Recipes.Math",
          "name": "dec",
          "package": "cookbook",
          "signature": "a -\u003e a",
          "source": "src/Cookbook-Recipes-Math.html#dec",
          "type": "function"
        },
        "index": {
          "description": "Decrease value by one",
          "hierarchy": "Cookbook Recipes Math",
          "module": "Cookbook.Recipes.Math",
          "name": "dec",
          "normalized": "a-\u003ea",
          "package": "cookbook",
          "signature": "a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cookbook/docs/Cookbook-Recipes-Math.html#v:dec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFactorial, from 1 to point.\n\u003c/p\u003e",
          "module": "Cookbook.Recipes.Math",
          "name": "fact",
          "package": "cookbook",
          "signature": "a -\u003e a",
          "source": "src/Cookbook-Recipes-Math.html#fact",
          "type": "function"
        },
        "index": {
          "description": "Factorial from to point",
          "hierarchy": "Cookbook Recipes Math",
          "module": "Cookbook.Recipes.Math",
          "name": "fact",
          "normalized": "a-\u003ea",
          "package": "cookbook",
          "signature": "a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cookbook/docs/Cookbook-Recipes-Math.html#v:fact"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIncrease value by one.\n\u003c/p\u003e",
          "module": "Cookbook.Recipes.Math",
          "name": "inc",
          "package": "cookbook",
          "signature": "a -\u003e a",
          "source": "src/Cookbook-Recipes-Math.html#inc",
          "type": "function"
        },
        "index": {
          "description": "Increase value by one",
          "hierarchy": "Cookbook Recipes Math",
          "module": "Cookbook.Recipes.Math",
          "name": "inc",
          "normalized": "a-\u003ea",
          "package": "cookbook",
          "signature": "a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cookbook/docs/Cookbook-Recipes-Math.html#v:inc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMultiply a number by itself.\n\u003c/p\u003e",
          "module": "Cookbook.Recipes.Math",
          "name": "sqr",
          "package": "cookbook",
          "signature": "a -\u003e a",
          "source": "src/Cookbook-Recipes-Math.html#sqr",
          "type": "function"
        },
        "index": {
          "description": "Multiply number by itself",
          "hierarchy": "Cookbook Recipes Math",
          "module": "Cookbook.Recipes.Math",
          "name": "sqr",
          "normalized": "a-\u003ea",
          "package": "cookbook",
          "signature": "a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cookbook/docs/Cookbook-Recipes-Math.html#v:sqr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind the standard deviation of a list of data.\n\u003c/p\u003e",
          "module": "Cookbook.Recipes.Math",
          "name": "stdev",
          "package": "cookbook",
          "signature": "[a] -\u003e a",
          "source": "src/Cookbook-Recipes-Math.html#stdev",
          "type": "function"
        },
        "index": {
          "description": "Find the standard deviation of list of data",
          "hierarchy": "Cookbook Recipes Math",
          "module": "Cookbook.Recipes.Math",
          "name": "stdev",
          "normalized": "[a]-\u003ea",
          "package": "cookbook",
          "signature": "[a]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cookbook/docs/Cookbook-Recipes-Math.html#v:stdev"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLibrary for sanitizing data, mainly strings.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Cookbook.Recipes.Sanitize",
          "name": "Sanitize",
          "package": "cookbook",
          "source": "src/Cookbook-Recipes-Sanitize.html",
          "type": "module"
        },
        "index": {
          "description": "Library for sanitizing data mainly strings",
          "hierarchy": "Cookbook Recipes Sanitize",
          "module": "Cookbook.Recipes.Sanitize",
          "name": "Sanitize",
          "package": "cookbook",
          "partial": "Sanitize",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cookbook/docs/Cookbook-Recipes-Sanitize.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRestricts an entire list of information from appearing in another list bit-by-bit.\n\u003c/p\u003e",
          "module": "Cookbook.Recipes.Sanitize",
          "name": "blacklist",
          "package": "cookbook",
          "signature": "[a] -\u003e [a] -\u003e [a]",
          "source": "src/Cookbook-Recipes-Sanitize.html#blacklist",
          "type": "function"
        },
        "index": {
          "description": "Restricts an entire list of information from appearing in another list bit-by-bit",
          "hierarchy": "Cookbook Recipes Sanitize",
          "module": "Cookbook.Recipes.Sanitize",
          "name": "blacklist",
          "normalized": "[a]-\u003e[a]-\u003e[a]",
          "package": "cookbook",
          "signature": "[a]-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cookbook/docs/Cookbook-Recipes-Sanitize.html#v:blacklist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRefpos wrapper for two lists, first to last.\n\u003c/p\u003e",
          "module": "Cookbook.Recipes.Sanitize",
          "name": "down",
          "package": "cookbook",
          "signature": "([a], [a]) -\u003e [a] -\u003e [a]",
          "source": "src/Cookbook-Recipes-Sanitize.html#down",
          "type": "function"
        },
        "index": {
          "description": "Refpos wrapper for two lists first to last",
          "hierarchy": "Cookbook Recipes Sanitize",
          "module": "Cookbook.Recipes.Sanitize",
          "name": "down",
          "normalized": "([a],[a])-\u003e[a]-\u003e[a]",
          "package": "cookbook",
          "signature": "([a],[a])-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cookbook/docs/Cookbook-Recipes-Sanitize.html#v:down"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemoves all doubles in the list, turning them into just one occurrence.\n\u003c/p\u003e",
          "module": "Cookbook.Recipes.Sanitize",
          "name": "rmdb",
          "package": "cookbook",
          "signature": "[a] -\u003e [a]",
          "source": "src/Cookbook-Recipes-Sanitize.html#rmdb",
          "type": "function"
        },
        "index": {
          "description": "Removes all doubles in the list turning them into just one occurrence",
          "hierarchy": "Cookbook Recipes Sanitize",
          "module": "Cookbook.Recipes.Sanitize",
          "name": "rmdb",
          "normalized": "[a]-\u003e[a]",
          "package": "cookbook",
          "signature": "[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cookbook/docs/Cookbook-Recipes-Sanitize.html#v:rmdb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWholly removes doubles from a list.\n\u003c/p\u003e",
          "module": "Cookbook.Recipes.Sanitize",
          "name": "rmdbAll",
          "package": "cookbook",
          "signature": "[a] -\u003e [a]",
          "source": "src/Cookbook-Recipes-Sanitize.html#rmdbAll",
          "type": "function"
        },
        "index": {
          "description": "Wholly removes doubles from list",
          "hierarchy": "Cookbook Recipes Sanitize",
          "module": "Cookbook.Recipes.Sanitize",
          "name": "rmdbAll",
          "normalized": "[a]-\u003e[a]",
          "package": "cookbook",
          "partial": "All",
          "signature": "[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cookbook/docs/Cookbook-Recipes-Sanitize.html#v:rmdbAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemoves a leading character from a list.\n\u003c/p\u003e",
          "module": "Cookbook.Recipes.Sanitize",
          "name": "rmleading",
          "package": "cookbook",
          "signature": "[a] -\u003e a -\u003e [a]",
          "source": "src/Cookbook-Recipes-Sanitize.html#rmleading",
          "type": "function"
        },
        "index": {
          "description": "Removes leading character from list",
          "hierarchy": "Cookbook Recipes Sanitize",
          "module": "Cookbook.Recipes.Sanitize",
          "name": "rmleading",
          "normalized": "[a]-\u003ea-\u003e[a]",
          "package": "cookbook",
          "signature": "[a]-\u003ea-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cookbook/docs/Cookbook-Recipes-Sanitize.html#v:rmleading"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemoves all of the leading whitespace from a string.\n\u003c/p\u003e",
          "module": "Cookbook.Recipes.Sanitize",
          "name": "rmlws",
          "package": "cookbook",
          "signature": "String -\u003e String",
          "source": "src/Cookbook-Recipes-Sanitize.html#rmlws",
          "type": "function"
        },
        "index": {
          "description": "Removes all of the leading whitespace from string",
          "hierarchy": "Cookbook Recipes Sanitize",
          "module": "Cookbook.Recipes.Sanitize",
          "name": "rmlws",
          "normalized": "String-\u003eString",
          "package": "cookbook",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cookbook/docs/Cookbook-Recipes-Sanitize.html#v:rmlws"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemoves all \u003ca\u003esymbols\u003c/a\u003e from a string.\n\u003c/p\u003e",
          "module": "Cookbook.Recipes.Sanitize",
          "name": "rmsymbols",
          "package": "cookbook",
          "signature": "String -\u003e String",
          "source": "src/Cookbook-Recipes-Sanitize.html#rmsymbols",
          "type": "function"
        },
        "index": {
          "description": "Removes all symbols from string",
          "hierarchy": "Cookbook Recipes Sanitize",
          "module": "Cookbook.Recipes.Sanitize",
          "name": "rmsymbols",
          "normalized": "String-\u003eString",
          "package": "cookbook",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cookbook/docs/Cookbook-Recipes-Sanitize.html#v:rmsymbols"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMoves a string to lower-case.\n\u003c/p\u003e",
          "module": "Cookbook.Recipes.Sanitize",
          "name": "tolower",
          "package": "cookbook",
          "signature": "String -\u003e String",
          "source": "src/Cookbook-Recipes-Sanitize.html#tolower",
          "type": "function"
        },
        "index": {
          "description": "Moves string to lower-case",
          "hierarchy": "Cookbook Recipes Sanitize",
          "module": "Cookbook.Recipes.Sanitize",
          "name": "tolower",
          "normalized": "String-\u003eString",
          "package": "cookbook",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cookbook/docs/Cookbook-Recipes-Sanitize.html#v:tolower"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMoves a string to upper-case.\n\u003c/p\u003e",
          "module": "Cookbook.Recipes.Sanitize",
          "name": "toupper",
          "package": "cookbook",
          "signature": "String -\u003e String",
          "source": "src/Cookbook-Recipes-Sanitize.html#toupper",
          "type": "function"
        },
        "index": {
          "description": "Moves string to upper-case",
          "hierarchy": "Cookbook Recipes Sanitize",
          "module": "Cookbook.Recipes.Sanitize",
          "name": "toupper",
          "normalized": "String-\u003eString",
          "package": "cookbook",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cookbook/docs/Cookbook-Recipes-Sanitize.html#v:toupper"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRefpos wrapper for two lists, last to first.\n\u003c/p\u003e",
          "module": "Cookbook.Recipes.Sanitize",
          "name": "up",
          "package": "cookbook",
          "signature": "([a], [a]) -\u003e [a] -\u003e [a]",
          "source": "src/Cookbook-Recipes-Sanitize.html#up",
          "type": "function"
        },
        "index": {
          "description": "Refpos wrapper for two lists last to first",
          "hierarchy": "Cookbook Recipes Sanitize",
          "module": "Cookbook.Recipes.Sanitize",
          "name": "up",
          "normalized": "([a],[a])-\u003e[a]-\u003e[a]",
          "package": "cookbook",
          "signature": "([a],[a])-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cookbook/docs/Cookbook-Recipes-Sanitize.html#v:up"
      }
    }
  ]
]