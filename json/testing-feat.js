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
        "word": "testing-feat"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFunctions for accessing the values of enumerations including \n compatibility with the property based testing frameworks QuickCheck and\n SmallCheck.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Test.Feat.Access",
          "name": "Access",
          "package": "testing-feat",
          "source": "src/Test-Feat-Access.html",
          "type": "module"
        },
        "index": {
          "description": "Functions for accessing the values of enumerations including compatibility with the property based testing frameworks QuickCheck and SmallCheck",
          "hierarchy": "Test Feat Access",
          "module": "Test.Feat.Access",
          "name": "Access",
          "package": "testing-feat",
          "partial": "Access",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Access.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFunctions that test a property and reports the result.\n\u003c/p\u003e",
          "module": "Test.Feat.Access",
          "name": "Report",
          "package": "testing-feat",
          "source": "src/Test-Feat-Access.html#Report",
          "type": "type"
        },
        "index": {
          "description": "Functions that test property and reports the result",
          "hierarchy": "Test Feat Access",
          "module": "Test.Feat.Access",
          "name": "Report",
          "package": "testing-feat",
          "partial": "Report",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Access.html#t:Report"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA version of values with a limited number of values in each inner list.\n If the list corresponds to a Part which is larger than the bound it evenly\n distributes the values across the enumeration of the Part.\n\u003c/p\u003e",
          "module": "[\"Test.Feat.Access\",\"Test.Feat\"]",
          "name": "bounded",
          "package": "testing-feat",
          "signature": "Integer -\u003e [(Integer, [a])]",
          "source": "src/Test-Feat-Access.html#bounded",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Access.html#v:bounded\",\"http://hackage.haskell.org/package/testing-feat/docs/Test-Feat.html#v:bounded\"]"
        },
        "index": {
          "description": "version of values with limited number of values in each inner list If the list corresponds to Part which is larger than the bound it evenly distributes the values across the enumeration of the Part",
          "hierarchy": "Test Feat Access",
          "module": "Test.Feat.Access",
          "name": "bounded",
          "normalized": "Integer-\u003e[(Integer,[a])]",
          "package": "testing-feat",
          "signature": "Integer-\u003e[(Integer,[a])]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Access.html#v:bounded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNon class version of \u003ccode\u003e\u003ca\u003ebounded\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Test.Feat.Access",
          "name": "boundedWith",
          "package": "testing-feat",
          "signature": "Enumerate a -\u003e Integer -\u003e [(Integer, [a])]",
          "source": "src/Test-Feat-Access.html#boundedWith",
          "type": "function"
        },
        "index": {
          "description": "Non class version of bounded",
          "hierarchy": "Test Feat Access",
          "module": "Test.Feat.Access",
          "name": "boundedWith",
          "normalized": "Enumerate a-\u003eInteger-\u003e[(Integer,[a])]",
          "package": "testing-feat",
          "partial": "With",
          "signature": "Enumerate a-\u003eInteger-\u003e[(Integer,[a])]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Access.html#v:boundedWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck a property for all values up to a given size.\n \u003ccode\u003e featCheck p prop = \u003ccode\u003e\u003ca\u003eioAll\u003c/a\u003e\u003c/code\u003e p (\u003ccode\u003e\u003ca\u003einputRep\u003c/a\u003e\u003c/code\u003e prop) \u003c/code\u003e\n\u003c/p\u003e",
          "module": "[\"Test.Feat.Access\",\"Test.Feat\"]",
          "name": "featCheck",
          "package": "testing-feat",
          "signature": "Int -\u003e (a -\u003e Bool) -\u003e IO ()",
          "source": "src/Test-Feat-Access.html#featCheck",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Access.html#v:featCheck\",\"http://hackage.haskell.org/package/testing-feat/docs/Test-Feat.html#v:featCheck\"]"
        },
        "index": {
          "description": "Check property for all values up to given size featCheck prop ioAll inputRep prop",
          "hierarchy": "Test Feat Access",
          "module": "Test.Feat.Access",
          "name": "featCheck",
          "normalized": "Int-\u003e(a-\u003eBool)-\u003eIO()",
          "package": "testing-feat",
          "partial": "Check",
          "signature": "Int-\u003e(a-\u003eBool)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Access.html#v:featCheck"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMainly as a proof of concept we define a function to index into\n an enumeration. (If this is repeated multiple times it might be\n very inefficient, depending on whether the dictionary for the\n Enumerable is shared or not.)\n\u003c/p\u003e",
          "module": "[\"Test.Feat.Access\",\"Test.Feat\"]",
          "name": "index",
          "package": "testing-feat",
          "signature": "Integer -\u003e a",
          "source": "src/Test-Feat-Access.html#index",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Access.html#v:index\",\"http://hackage.haskell.org/package/testing-feat/docs/Test-Feat.html#v:index\"]"
        },
        "index": {
          "description": "Mainly as proof of concept we define function to index into an enumeration If this is repeated multiple times it might be very inefficient depending on whether the dictionary for the Enumerable is shared or not",
          "hierarchy": "Test Feat Access",
          "module": "Test.Feat.Access",
          "name": "index",
          "normalized": "Integer-\u003ea",
          "package": "testing-feat",
          "signature": "Integer-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Access.html#v:index"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNon class version of \u003ccode\u003e\u003ca\u003eindex\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Test.Feat.Access",
          "name": "indexWith",
          "package": "testing-feat",
          "signature": "Enumerate a -\u003e Integer -\u003e a",
          "source": "src/Test-Feat-Access.html#indexWith",
          "type": "function"
        },
        "index": {
          "description": "Non class version of index",
          "hierarchy": "Test Feat Access",
          "module": "Test.Feat.Access",
          "name": "indexWith",
          "normalized": "Enumerate a-\u003eInteger-\u003ea",
          "package": "testing-feat",
          "partial": "With",
          "signature": "Enumerate a-\u003eInteger-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Access.html#v:indexWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReports counterexamples to the given predicate by printing them\n\u003c/p\u003e",
          "module": "[\"Test.Feat.Access\",\"Test.Feat\"]",
          "name": "inputRep",
          "package": "testing-feat",
          "signature": "(a -\u003e Bool) -\u003e Report a",
          "source": "src/Test-Feat-Access.html#inputRep",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Access.html#v:inputRep\",\"http://hackage.haskell.org/package/testing-feat/docs/Test-Feat.html#v:inputRep\"]"
        },
        "index": {
          "description": "Reports counterexamples to the given predicate by printing them",
          "hierarchy": "Test Feat Access",
          "module": "Test.Feat.Access",
          "name": "inputRep",
          "normalized": "(a-\u003eBool)-\u003eReport a",
          "package": "testing-feat",
          "partial": "Rep",
          "signature": "(a-\u003eBool)-\u003eReport a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Access.html#v:inputRep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefined as \u003ccode\u003eioAll p = \u003ccode\u003e\u003ca\u003eioFeat\u003c/a\u003e\u003c/code\u003e (take p \u003ccode\u003e\u003ca\u003evalues\u003c/a\u003e\u003c/code\u003e) \u003c/code\u003e\n\u003c/p\u003e",
          "module": "[\"Test.Feat.Access\",\"Test.Feat\"]",
          "name": "ioAll",
          "package": "testing-feat",
          "signature": "Int -\u003e Report a -\u003e IO ()",
          "source": "src/Test-Feat-Access.html#ioAll",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Access.html#v:ioAll\",\"http://hackage.haskell.org/package/testing-feat/docs/Test-Feat.html#v:ioAll\"]"
        },
        "index": {
          "description": "Defined as ioAll ioFeat take values",
          "hierarchy": "Test Feat Access",
          "module": "Test.Feat.Access",
          "name": "ioAll",
          "normalized": "Int-\u003eReport a-\u003eIO()",
          "package": "testing-feat",
          "partial": "All",
          "signature": "Int-\u003eReport a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Access.html#v:ioAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefined as \u003ccode\u003eioBounded n p = \u003ccode\u003e\u003ca\u003eioFeat\u003c/a\u003e\u003c/code\u003e (take p $ \u003ccode\u003e\u003ca\u003ebounded\u003c/a\u003e\u003c/code\u003e n)\u003c/code\u003e\n\u003c/p\u003e",
          "module": "[\"Test.Feat.Access\",\"Test.Feat\"]",
          "name": "ioBounded",
          "package": "testing-feat",
          "signature": "Integer -\u003e Int -\u003e Report a -\u003e IO ()",
          "source": "src/Test-Feat-Access.html#ioBounded",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Access.html#v:ioBounded\",\"http://hackage.haskell.org/package/testing-feat/docs/Test-Feat.html#v:ioBounded\"]"
        },
        "index": {
          "description": "Defined as ioBounded ioFeat take bounded",
          "hierarchy": "Test Feat Access",
          "module": "Test.Feat.Access",
          "name": "ioBounded",
          "normalized": "Integer-\u003eInt-\u003eReport a-\u003eIO()",
          "package": "testing-feat",
          "partial": "Bounded",
          "signature": "Integer-\u003eInt-\u003eReport a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Access.html#v:ioBounded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA rather simple but general property testing driver.\n The property is an (funcurried) IO function that both tests and reports the \n error. The driver goes on forever or until the list is exhausted, \n reporting its progress and the number of \n tests before each new part.\n\u003c/p\u003e",
          "module": "[\"Test.Feat.Access\",\"Test.Feat\"]",
          "name": "ioFeat",
          "package": "testing-feat",
          "signature": "[(Integer, [a])] -\u003e Report a -\u003e IO ()",
          "source": "src/Test-Feat-Access.html#ioFeat",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Access.html#v:ioFeat\",\"http://hackage.haskell.org/package/testing-feat/docs/Test-Feat.html#v:ioFeat\"]"
        },
        "index": {
          "description": "rather simple but general property testing driver The property is an funcurried IO function that both tests and reports the error The driver goes on forever or until the list is exhausted reporting its progress and the number of tests before each new part",
          "hierarchy": "Test Feat Access",
          "module": "Test.Feat.Access",
          "name": "ioFeat",
          "normalized": "[(Integer,[a])]-\u003eReport a-\u003eIO()",
          "package": "testing-feat",
          "partial": "Feat",
          "signature": "[(Integer,[a])]-\u003eReport a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Access.html#v:ioFeat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTakes a function and a predicate on its input/output pairs. \n Reports counterexamples by printing the failing input/output pair.\n\u003c/p\u003e",
          "module": "Test.Feat.Access",
          "name": "prePostRep",
          "package": "testing-feat",
          "signature": "(a -\u003e b) -\u003e (a -\u003e b -\u003e Bool) -\u003e Report a",
          "source": "src/Test-Feat-Access.html#prePostRep",
          "type": "function"
        },
        "index": {
          "description": "Takes function and predicate on its input output pairs Reports counterexamples by printing the failing input output pair",
          "hierarchy": "Test Feat Access",
          "module": "Test.Feat.Access",
          "name": "prePostRep",
          "normalized": "(a-\u003eb)-\u003e(a-\u003eb-\u003eBool)-\u003eReport a",
          "package": "testing-feat",
          "partial": "Post Rep",
          "signature": "(a-\u003eb)-\u003e(a-\u003eb-\u003eBool)-\u003eReport a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Access.html#v:prePostRep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA more fine grained version of index that takes a size and an \n index into the values of that size. \u003ccode\u003eselect p i\u003c/code\u003e is only defined for \u003ccode\u003ei\u003c/code\u003e \n\u003c/p\u003e",
          "module": "[\"Test.Feat.Access\",\"Test.Feat\"]",
          "name": "select",
          "package": "testing-feat",
          "signature": "Int -\u003e Index -\u003e a",
          "source": "src/Test-Feat-Access.html#select",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Access.html#v:select\",\"http://hackage.haskell.org/package/testing-feat/docs/Test-Feat.html#v:select\"]"
        },
        "index": {
          "description": "more fine grained version of index that takes size and an index into the values of that size select is only defined for",
          "hierarchy": "Test Feat Access",
          "module": "Test.Feat.Access",
          "name": "select",
          "normalized": "Int-\u003eIndex-\u003ea",
          "package": "testing-feat",
          "signature": "Int-\u003eIndex-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Access.html#v:select"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNon class version of \u003ccode\u003e\u003ca\u003eselect\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Test.Feat.Access",
          "name": "selectWith",
          "package": "testing-feat",
          "signature": "Enumerate a -\u003e Int -\u003e Index -\u003e a",
          "source": "src/Test-Feat-Access.html#selectWith",
          "type": "function"
        },
        "index": {
          "description": "Non class version of select",
          "hierarchy": "Test Feat Access",
          "module": "Test.Feat.Access",
          "name": "selectWith",
          "normalized": "Enumerate a-\u003eInt-\u003eIndex-\u003ea",
          "package": "testing-feat",
          "partial": "With",
          "signature": "Enumerate a-\u003eInt-\u003eIndex-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Access.html#v:selectWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA generalisation of \u003ccode\u003evalues\u003c/code\u003e that enumerates every nth value of the \n enumeration from a given starting point.\n As a special case \u003ccode\u003evalues = striped 0 1\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eUseful for running enumerations in parallel since e.g. \u003ccode\u003estriped 0 2\u003c/code\u003e is \n disjoint from \u003ccode\u003estriped 0 1 2\u003c/code\u003e and the union of the two cover all values.\n\u003c/p\u003e",
          "module": "Test.Feat.Access",
          "name": "striped",
          "package": "testing-feat",
          "signature": "Index -\u003e Integer -\u003e [(Integer, [a])]",
          "source": "src/Test-Feat-Access.html#striped",
          "type": "function"
        },
        "index": {
          "description": "generalisation of values that enumerates every nth value of the enumeration from given starting point As special case values striped Useful for running enumerations in parallel since e.g striped is disjoint from striped and the union of the two cover all values",
          "hierarchy": "Test Feat Access",
          "module": "Test.Feat.Access",
          "name": "striped",
          "normalized": "Index-\u003eInteger-\u003e[(Integer,[a])]",
          "package": "testing-feat",
          "signature": "Index-\u003eInteger-\u003e[(Integer,[a])]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Access.html#v:striped"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNon class version of \u003ccode\u003e\u003ca\u003estriped\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Test.Feat.Access",
          "name": "stripedWith",
          "package": "testing-feat",
          "signature": "Enumerate a -\u003e Index -\u003e Integer -\u003e [(Integer, [a])]",
          "source": "src/Test-Feat-Access.html#stripedWith",
          "type": "function"
        },
        "index": {
          "description": "Non class version of striped",
          "hierarchy": "Test Feat Access",
          "module": "Test.Feat.Access",
          "name": "stripedWith",
          "normalized": "Enumerate a-\u003eIndex-\u003eInteger-\u003e[(Integer,[a])]",
          "package": "testing-feat",
          "partial": "With",
          "signature": "Enumerate a-\u003eIndex-\u003eInteger-\u003e[(Integer,[a])]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Access.html#v:stripedWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompatibility with SmallCheck. \n\u003c/p\u003e",
          "module": "Test.Feat.Access",
          "name": "toSeries",
          "package": "testing-feat",
          "signature": "Int -\u003e [a]",
          "source": "src/Test-Feat-Access.html#toSeries",
          "type": "function"
        },
        "index": {
          "description": "Compatibility with SmallCheck",
          "hierarchy": "Test Feat Access",
          "module": "Test.Feat.Access",
          "name": "toSeries",
          "normalized": "Int-\u003e[a]",
          "package": "testing-feat",
          "partial": "Series",
          "signature": "Int-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Access.html#v:toSeries"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNon class version of \u003ccode\u003e\u003ca\u003etoSeries\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Test.Feat.Access",
          "name": "toSeriesWith",
          "package": "testing-feat",
          "signature": "Enumerate a -\u003e Int -\u003e [a]",
          "source": "src/Test-Feat-Access.html#toSeriesWith",
          "type": "function"
        },
        "index": {
          "description": "Non class version of toSeries",
          "hierarchy": "Test Feat Access",
          "module": "Test.Feat.Access",
          "name": "toSeriesWith",
          "normalized": "Enumerate a-\u003eInt-\u003e[a]",
          "package": "testing-feat",
          "partial": "Series With",
          "signature": "Enumerate a-\u003eInt-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Access.html#v:toSeriesWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompatibility with QuickCheck. Distribution is uniform generator over \n values bounded by the given size. Typical use: \u003ccode\u003esized uniform\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Test.Feat.Access\",\"Test.Feat\"]",
          "name": "uniform",
          "package": "testing-feat",
          "signature": "Int -\u003e Gen a",
          "source": "src/Test-Feat-Access.html#uniform",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Access.html#v:uniform\",\"http://hackage.haskell.org/package/testing-feat/docs/Test-Feat.html#v:uniform\"]"
        },
        "index": {
          "description": "Compatibility with QuickCheck Distribution is uniform generator over values bounded by the given size Typical use sized uniform",
          "hierarchy": "Test Feat Access",
          "module": "Test.Feat.Access",
          "name": "uniform",
          "normalized": "Int-\u003eGen a",
          "package": "testing-feat",
          "signature": "Int-\u003eGen a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Access.html#v:uniform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNon class version of \u003ccode\u003e\u003ca\u003euniform\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Test.Feat.Access",
          "name": "uniformWith",
          "package": "testing-feat",
          "signature": "Enumerate a -\u003e Int -\u003e Gen a",
          "source": "src/Test-Feat-Access.html#uniformWith",
          "type": "function"
        },
        "index": {
          "description": "Non class version of uniform",
          "hierarchy": "Test Feat Access",
          "module": "Test.Feat.Access",
          "name": "uniformWith",
          "normalized": "Enumerate a-\u003eInt-\u003eGen a",
          "package": "testing-feat",
          "partial": "With",
          "signature": "Enumerate a-\u003eInt-\u003eGen a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Access.html#v:uniformWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll values of the enumeration by increasing cost (which is the number\n of constructors for most types). Also contains the cardinality of each list.\n\u003c/p\u003e",
          "module": "[\"Test.Feat.Access\",\"Test.Feat\"]",
          "name": "values",
          "package": "testing-feat",
          "signature": "[(Integer, [a])]",
          "source": "src/Test-Feat-Access.html#values",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Access.html#v:values\",\"http://hackage.haskell.org/package/testing-feat/docs/Test-Feat.html#v:values\"]"
        },
        "index": {
          "description": "All values of the enumeration by increasing cost which is the number of constructors for most types Also contains the cardinality of each list",
          "hierarchy": "Test Feat Access",
          "module": "Test.Feat.Access",
          "name": "values",
          "normalized": "[(Integer,[a])]",
          "package": "testing-feat",
          "signature": "[(Integer,[a])]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Access.html#v:values"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNon class version of \u003ccode\u003e\u003ca\u003evalues\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Test.Feat.Access",
          "name": "valuesWith",
          "package": "testing-feat",
          "signature": "Enumerate a -\u003e [(Integer, [a])]",
          "source": "src/Test-Feat-Access.html#valuesWith",
          "type": "function"
        },
        "index": {
          "description": "Non class version of values",
          "hierarchy": "Test Feat Access",
          "module": "Test.Feat.Access",
          "name": "valuesWith",
          "normalized": "Enumerate a-\u003e[(Integer,[a])]",
          "package": "testing-feat",
          "partial": "With",
          "signature": "Enumerate a-\u003e[(Integer,[a])]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Access.html#v:valuesWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAnexperimental feature to override the \u003ccode\u003e\u003ca\u003eEnumerable\u003c/a\u003e\u003c/code\u003e instance for any type.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Test.Feat.Class.Override",
          "name": "Override",
          "package": "testing-feat",
          "source": "src/Test-Feat-Class-Override.html",
          "type": "module"
        },
        "index": {
          "description": "Anexperimental feature to override the Enumerable instance for any type",
          "hierarchy": "Test Feat Class Override",
          "module": "Test.Feat.Class.Override",
          "name": "Override",
          "package": "testing-feat",
          "partial": "Override",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Class-Override.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Feat.Class.Override",
          "name": "Override",
          "package": "testing-feat",
          "source": "src/Test-Feat-Class-Override.html#Override",
          "type": "type"
        },
        "index": {
          "hierarchy": "Test Feat Class Override",
          "module": "Test.Feat.Class.Override",
          "name": "Override",
          "package": "testing-feat",
          "partial": "Override",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Class-Override.html#t:Override"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Feat.Class.Override",
          "name": "addOverride",
          "package": "testing-feat",
          "signature": "Enumerate a -\u003e Override -\u003e Override",
          "source": "src/Test-Feat-Class-Override.html#addOverride",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Feat Class Override",
          "module": "Test.Feat.Class.Override",
          "name": "addOverride",
          "normalized": "Enumerate a-\u003eOverride-\u003eOverride",
          "package": "testing-feat",
          "partial": "Override",
          "signature": "Enumerate a-\u003eOverride-\u003eOverride",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Class-Override.html#v:addOverride"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Feat.Class.Override",
          "name": "noOverride",
          "package": "testing-feat",
          "signature": "Override",
          "source": "src/Test-Feat-Class-Override.html#noOverride",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Feat Class Override",
          "module": "Test.Feat.Class.Override",
          "name": "noOverride",
          "package": "testing-feat",
          "partial": "Override",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Class-Override.html#v:noOverride"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function is best described with an example:\n\u003c/p\u003e\u003cpre\u003e\n    let e1 = override $ addOverride (unary \u003ccode\u003e\u003ca\u003eprintable\u003c/a\u003e\u003c/code\u003e) noOverride :: Enumerate T\n\u003c/pre\u003e\u003cp\u003e\u003ccode\u003ee1\u003c/code\u003e enumerates values of type \u003ccode\u003eT\u003c/code\u003e where all characters (accessed using \n the \u003ccode\u003eEnumerable\u003c/code\u003e instance for \u003ccode\u003eChar\u003c/code\u003e) are printable. Sometimes this can save \n you from placing lots of \u003ccode\u003e\u003ca\u003eprintable\u003c/a\u003e\u003c/code\u003e modifiers in your instances or \n newtypes in your data type definitions.\n\u003c/p\u003e\u003cp\u003eThis works for any type (not just characters). This function should typically \n not be used when combining enumerations (doing so might increase memory \n usage because the resulting enumeration is optimised).\n Also this only has effect on enumerations which have not already been \n optimised, so using override again on the result of override has no effect.\n\u003c/p\u003e",
          "module": "Test.Feat.Class.Override",
          "name": "override",
          "package": "testing-feat",
          "signature": "Override -\u003e Enumerate a",
          "source": "src/Test-Feat-Class-Override.html#override",
          "type": "function"
        },
        "index": {
          "description": "This function is best described with an example let e1 override addOverride unary printable noOverride Enumerate e1 enumerates values of type where all characters accessed using the Enumerable instance for Char are printable Sometimes this can save you from placing lots of printable modifiers in your instances or newtypes in your data type definitions This works for any type not just characters This function should typically not be used when combining enumerations doing so might increase memory usage because the resulting enumeration is optimised Also this only has effect on enumerations which have not already been optimised so using override again on the result of override has no effect",
          "hierarchy": "Test Feat Class Override",
          "module": "Test.Feat.Class.Override",
          "name": "override",
          "normalized": "Override-\u003eEnumerate a",
          "package": "testing-feat",
          "signature": "Override-\u003eEnumerate a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Class-Override.html#v:override"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eEverything you need to construct an enumeration for an algebraic type.\n Just define each constructor using pure for nullary constructors and \n unary and funcurry for positive arity constructors, then combine the \n constructors with consts. Example:\n\u003c/p\u003e\u003cpre\u003e\n  instance Enumerable a =\u003e Enumerable [a] where\n    enumerate = consts [unary (funcurry (:)), pure []]\n\u003c/pre\u003e\u003cp\u003eThere's also a handy Template Haskell function for automatic derivation.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Test.Feat.Class",
          "name": "Class",
          "package": "testing-feat",
          "source": "src/Test-Feat-Class.html",
          "type": "module"
        },
        "index": {
          "description": "Everything you need to construct an enumeration for an algebraic type Just define each constructor using pure for nullary constructors and unary and funcurry for positive arity constructors then combine the constructors with consts Example instance Enumerable Enumerable where enumerate consts unary funcurry pure There also handy Template Haskell function for automatic derivation",
          "hierarchy": "Test Feat Class",
          "module": "Test.Feat.Class",
          "name": "Class",
          "package": "testing-feat",
          "partial": "Class",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Class.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Feat.Class",
          "name": "Constructor",
          "package": "testing-feat",
          "source": "src/Test-Feat-Class.html#Constructor",
          "type": "type"
        },
        "index": {
          "hierarchy": "Test Feat Class",
          "module": "Test.Feat.Class",
          "name": "Constructor",
          "package": "testing-feat",
          "partial": "Constructor",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Class.html#t:Constructor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Feat.Class",
          "name": "ConstructorDeriv",
          "package": "testing-feat",
          "source": "src/Test-Feat-Class.html#ConstructorDeriv",
          "type": "type"
        },
        "index": {
          "hierarchy": "Test Feat Class",
          "module": "Test.Feat.Class",
          "name": "ConstructorDeriv",
          "package": "testing-feat",
          "partial": "Constructor Deriv",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Class.html#t:ConstructorDeriv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA class of functionally enumerable types\n\u003c/p\u003e",
          "module": "Test.Feat.Class",
          "name": "Enumerable",
          "package": "testing-feat",
          "source": "src/Test-Feat-Class.html#Enumerable",
          "type": "class"
        },
        "index": {
          "description": "class of functionally enumerable types",
          "hierarchy": "Test Feat Class",
          "module": "Test.Feat.Class",
          "name": "Enumerable",
          "package": "testing-feat",
          "partial": "Enumerable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Class.html#t:Enumerable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA free pair constructor. The cost of constructing a free pair\n is equal to the sum of the costs of its components. \n\u003c/p\u003e",
          "module": "Test.Feat.Class",
          "name": "FreePair",
          "package": "testing-feat",
          "source": "src/Test-Feat-Class.html#FreePair",
          "type": "newtype"
        },
        "index": {
          "description": "free pair constructor The cost of constructing free pair is equal to the sum of the costs of its components",
          "hierarchy": "Test Feat Class",
          "module": "Test.Feat.Class",
          "name": "FreePair",
          "package": "testing-feat",
          "partial": "Free Pair",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Class.html#t:FreePair"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.Feat.Class\",\"Test.Feat\"]",
          "name": "Free",
          "package": "testing-feat",
          "signature": "Free",
          "source": "src/Test-Feat-Class.html#FreePair",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Class.html#v:Free\",\"http://hackage.haskell.org/package/testing-feat/docs/Test-Feat.html#v:Free\"]"
        },
        "index": {
          "hierarchy": "Test Feat Class",
          "module": "Test.Feat.Class",
          "name": "Free",
          "package": "testing-feat",
          "partial": "Free",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Class.html#v:Free"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProduces the enumeration of a type given the enumerators for each of its\n constructors. The result of \u003ccode\u003e\u003ca\u003eunary\u003c/a\u003e\u003c/code\u003e should typically not be used \n directly in an instance even if it only has one constructor. So you \n should apply consts even in that case. \n\u003c/p\u003e",
          "module": "[\"Test.Feat.Class\",\"Test.Feat\"]",
          "name": "consts",
          "package": "testing-feat",
          "signature": "[Constructor a] -\u003e Enumerate a",
          "source": "src/Test-Feat-Class.html#consts",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Class.html#v:consts\",\"http://hackage.haskell.org/package/testing-feat/docs/Test-Feat.html#v:consts\"]"
        },
        "index": {
          "description": "Produces the enumeration of type given the enumerators for each of its constructors The result of unary should typically not be used directly in an instance even if it only has one constructor So you should apply consts even in that case",
          "hierarchy": "Test Feat Class",
          "module": "Test.Feat.Class",
          "name": "consts",
          "normalized": "[Constructor a]-\u003eEnumerate a",
          "package": "testing-feat",
          "signature": "[Constructor a]-\u003eEnumerate a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Class.html#v:consts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Feat.Class",
          "name": "dAll",
          "package": "testing-feat",
          "signature": "Name -\u003e ConstructorDeriv",
          "source": "src/Test-Feat-Class.html#dAll",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Feat Class",
          "module": "Test.Feat.Class",
          "name": "dAll",
          "normalized": "Name-\u003eConstructorDeriv",
          "package": "testing-feat",
          "partial": "All",
          "signature": "Name-\u003eConstructorDeriv",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Class.html#v:dAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Feat.Class",
          "name": "dExcept",
          "package": "testing-feat",
          "signature": "Name -\u003e ExpQ -\u003e ConstructorDeriv -\u003e ConstructorDeriv",
          "source": "src/Test-Feat-Class.html#dExcept",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Feat Class",
          "module": "Test.Feat.Class",
          "name": "dExcept",
          "normalized": "Name-\u003eExpQ-\u003eConstructorDeriv-\u003eConstructorDeriv",
          "package": "testing-feat",
          "partial": "Except",
          "signature": "Name-\u003eExpQ-\u003eConstructorDeriv-\u003eConstructorDeriv",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Class.html#v:dExcept"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Feat.Class",
          "name": "dExcluding",
          "package": "testing-feat",
          "signature": "Name -\u003e ConstructorDeriv -\u003e ConstructorDeriv",
          "source": "src/Test-Feat-Class.html#dExcluding",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Feat Class",
          "module": "Test.Feat.Class",
          "name": "dExcluding",
          "normalized": "Name-\u003eConstructorDeriv-\u003eConstructorDeriv",
          "package": "testing-feat",
          "partial": "Excluding",
          "signature": "Name-\u003eConstructorDeriv-\u003eConstructorDeriv",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Class.html#v:dExcluding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDerive an instance of Enumberable with Template Haskell. To derive\n an instance for \u003ccode\u003eEnumerable A\u003c/code\u003e, just put this as a top level declaration \n in your module (with the TemplateHaskell extension enabled):\n\u003c/p\u003e\u003cpre\u003e\n   deriveEnumerable ''A\n\u003c/pre\u003e",
          "module": "[\"Test.Feat.Class\",\"Test.Feat\"]",
          "name": "deriveEnumerable",
          "package": "testing-feat",
          "signature": "Name -\u003e Q [Dec]",
          "source": "src/Test-Feat-Class.html#deriveEnumerable",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Class.html#v:deriveEnumerable\",\"http://hackage.haskell.org/package/testing-feat/docs/Test-Feat.html#v:deriveEnumerable\"]"
        },
        "index": {
          "description": "Derive an instance of Enumberable with Template Haskell To derive an instance for Enumerable just put this as top level declaration in your module with the TemplateHaskell extension enabled deriveEnumerable",
          "hierarchy": "Test Feat Class",
          "module": "Test.Feat.Class",
          "name": "deriveEnumerable",
          "normalized": "Name-\u003eQ[Dec]",
          "package": "testing-feat",
          "partial": "Enumerable",
          "signature": "Name-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Class.html#v:deriveEnumerable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDerive an instance of Enumberable with Template Haskell, with \n rules for some specific constructors\n\u003c/p\u003e",
          "module": "Test.Feat.Class",
          "name": "deriveEnumerable'",
          "package": "testing-feat",
          "signature": "ConstructorDeriv -\u003e Q [Dec]",
          "source": "src/Test-Feat-Class.html#deriveEnumerable%27",
          "type": "function"
        },
        "index": {
          "description": "Derive an instance of Enumberable with Template Haskell with rules for some specific constructors",
          "hierarchy": "Test Feat Class",
          "module": "Test.Feat.Class",
          "name": "deriveEnumerable'",
          "normalized": "ConstructorDeriv-\u003eQ[Dec]",
          "package": "testing-feat",
          "partial": "Enumerable'",
          "signature": "ConstructorDeriv-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Class.html#v:deriveEnumerable-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is the interface for defining an instance. When combining \n enumerations use \u003ccode\u003e\u003ca\u003eshared\u003c/a\u003e\u003c/code\u003e instead and when accessing the data of \n enumerations use \u003ccode\u003e\u003ca\u003eoptimal\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Test.Feat.Class",
          "name": "enumerate",
          "package": "testing-feat",
          "signature": "Enumerate a",
          "source": "src/Test-Feat-Class.html#enumerate",
          "type": "method"
        },
        "index": {
          "description": "This is the interface for defining an instance When combining enumerations use shared instead and when accessing the data of enumerations use optimal",
          "hierarchy": "Test Feat Class",
          "module": "Test.Feat.Class",
          "name": "enumerate",
          "package": "testing-feat",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Class.html#v:enumerate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.Feat.Class\",\"Test.Feat\"]",
          "name": "free",
          "package": "testing-feat",
          "signature": "(a, b)",
          "source": "src/Test-Feat-Class.html#FreePair",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Class.html#v:free\",\"http://hackage.haskell.org/package/testing-feat/docs/Test-Feat.html#v:free\"]"
        },
        "index": {
          "hierarchy": "Test Feat Class",
          "module": "Test.Feat.Class",
          "name": "free",
          "normalized": "(a,b)",
          "package": "testing-feat",
          "signature": "(a,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Class.html#v:free"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUncurry a function (typically a constructor) to a function on free pairs.\n\u003c/p\u003e",
          "module": "[\"Test.Feat.Class\",\"Test.Feat\"]",
          "name": "funcurry",
          "package": "testing-feat",
          "signature": "(a -\u003e b -\u003e c) -\u003e FreePair a b -\u003e c",
          "source": "src/Test-Feat-Class.html#funcurry",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Class.html#v:funcurry\",\"http://hackage.haskell.org/package/testing-feat/docs/Test-Feat.html#v:funcurry\"]"
        },
        "index": {
          "description": "Uncurry function typically constructor to function on free pairs",
          "hierarchy": "Test Feat Class",
          "module": "Test.Feat.Class",
          "name": "funcurry",
          "normalized": "(a-\u003eb-\u003ec)-\u003eFreePair a b-\u003ec",
          "package": "testing-feat",
          "signature": "(a-\u003eb-\u003ec)-\u003eFreePair a b-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Class.html#v:funcurry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFor nullary constructors such as \u003ccode\u003eTrue\u003c/code\u003e and \u003ccode\u003e[]\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Test.Feat.Class\",\"Test.Feat\"]",
          "name": "nullary",
          "package": "testing-feat",
          "signature": "a -\u003e Constructor a",
          "source": "src/Test-Feat-Class.html#nullary",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Class.html#v:nullary\",\"http://hackage.haskell.org/package/testing-feat/docs/Test-Feat.html#v:nullary\"]"
        },
        "index": {
          "description": "For nullary constructors such as True and",
          "hierarchy": "Test Feat Class",
          "module": "Test.Feat.Class",
          "name": "nullary",
          "normalized": "a-\u003eConstructor a",
          "package": "testing-feat",
          "signature": "a-\u003eConstructor a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Class.html#v:nullary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn optimal version of enumerate. Used by all\n library functions that access enumerated values (but not \n by combining functions). Library functions should ensure that \n \u003ccode\u003eoptimal\u003c/code\u003e is not reevaluated.\n\u003c/p\u003e",
          "module": "[\"Test.Feat.Class\",\"Test.Feat\"]",
          "name": "optimal",
          "package": "testing-feat",
          "signature": "Enumerate a",
          "source": "src/Test-Feat-Class.html#optimal",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Class.html#v:optimal\",\"http://hackage.haskell.org/package/testing-feat/docs/Test-Feat.html#v:optimal\"]"
        },
        "index": {
          "description": "An optimal version of enumerate Used by all library functions that access enumerated values but not by combining functions Library functions should ensure that optimal is not reevaluated",
          "hierarchy": "Test Feat Class",
          "module": "Test.Feat.Class",
          "name": "optimal",
          "package": "testing-feat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Class.html#v:optimal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVersion of \u003ccode\u003e\u003ca\u003eenumerate\u003c/a\u003e\u003c/code\u003e that ensures that the enumeration is shared \n between all accesses. Should always be used when \n combining enumerations.\n\u003c/p\u003e",
          "module": "[\"Test.Feat.Class\",\"Test.Feat\"]",
          "name": "shared",
          "package": "testing-feat",
          "signature": "Enumerate a",
          "source": "src/Test-Feat-Class.html#shared",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Class.html#v:shared\",\"http://hackage.haskell.org/package/testing-feat/docs/Test-Feat.html#v:shared\"]"
        },
        "index": {
          "description": "Version of enumerate that ensures that the enumeration is shared between all accesses Should always be used when combining enumerations",
          "hierarchy": "Test Feat Class",
          "module": "Test.Feat.Class",
          "name": "shared",
          "package": "testing-feat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Class.html#v:shared"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFor any non-nullary constructor. Apply \u003ccode\u003e\u003ca\u003efuncurry\u003c/a\u003e\u003c/code\u003e until the type of\n the result is unary (i.e. n-1 times where n is the number of fields \n of the constructor).\n\u003c/p\u003e",
          "module": "[\"Test.Feat.Class\",\"Test.Feat\"]",
          "name": "unary",
          "package": "testing-feat",
          "signature": "(a -\u003e b) -\u003e Constructor b",
          "source": "src/Test-Feat-Class.html#unary",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Class.html#v:unary\",\"http://hackage.haskell.org/package/testing-feat/docs/Test-Feat.html#v:unary\"]"
        },
        "index": {
          "description": "For any non-nullary constructor Apply funcurry until the type of the result is unary i.e n-1 times where is the number of fields of the constructor",
          "hierarchy": "Test Feat Class",
          "module": "Test.Feat.Class",
          "name": "unary",
          "normalized": "(a-\u003eb)-\u003eConstructor b",
          "package": "testing-feat",
          "signature": "(a-\u003eb)-\u003eConstructor b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Class.html#v:unary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBasic combinators for building enumerations\n most users will want to use the type class \n based combinators in \u003ca\u003eTest.Feat.Class\u003c/a\u003e instead. \n\u003c/p\u003e\u003c/div\u003e",
          "module": "Test.Feat.Enumerate",
          "name": "Enumerate",
          "package": "testing-feat",
          "source": "src/Test-Feat-Enumerate.html",
          "type": "module"
        },
        "index": {
          "description": "Basic combinators for building enumerations most users will want to use the type class based combinators in Test.Feat.Class instead",
          "hierarchy": "Test Feat Enumerate",
          "module": "Test.Feat.Enumerate",
          "name": "Enumerate",
          "package": "testing-feat",
          "partial": "Enumerate",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Enumerate.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA functional enumeration of type \u003ccode\u003et\u003c/code\u003e is a partition of\n \u003ccode\u003et\u003c/code\u003e into finite numbered sets called Parts. Each parts contains values\n of a certain cost (typically the size of the value).\n\u003c/p\u003e",
          "module": "Test.Feat.Enumerate",
          "name": "Enumerate",
          "package": "testing-feat",
          "source": "src/Test-Feat-Enumerate.html#Enumerate",
          "type": "data"
        },
        "index": {
          "description": "functional enumeration of type is partition of into finite numbered sets called Parts Each parts contains values of certain cost typically the size of the value",
          "hierarchy": "Test Feat Enumerate",
          "module": "Test.Feat.Enumerate",
          "name": "Enumerate",
          "package": "testing-feat",
          "partial": "Enumerate",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Enumerate.html#t:Enumerate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Feat.Enumerate",
          "name": "Finite",
          "package": "testing-feat",
          "source": "src/Test-Feat-Enumerate.html#Finite",
          "type": "data"
        },
        "index": {
          "hierarchy": "Test Feat Enumerate",
          "module": "Test.Feat.Enumerate",
          "name": "Finite",
          "package": "testing-feat",
          "partial": "Finite",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Enumerate.html#t:Finite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Feat.Enumerate",
          "name": "Index",
          "package": "testing-feat",
          "source": "src/Test-Feat-Enumerate.html#Index",
          "type": "type"
        },
        "index": {
          "hierarchy": "Test Feat Enumerate",
          "module": "Test.Feat.Enumerate",
          "name": "Index",
          "package": "testing-feat",
          "partial": "Index",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Enumerate.html#t:Index"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA data structure that contains a list and the reversals of all initial \n segments of the list. Intuitively \n\u003c/p\u003e\u003cpre\u003ereversals xs !! n = reverse (take (n+1) (fromRev xs))\u003c/pre\u003e\u003cp\u003eAny operation on a \u003ccode\u003eRevList\u003c/code\u003e typically discards the reversals and constructs\n new reversals on demand.\n\u003c/p\u003e",
          "module": "Test.Feat.Enumerate",
          "name": "RevList",
          "package": "testing-feat",
          "source": "src/Test-Feat-Enumerate.html#RevList",
          "type": "data"
        },
        "index": {
          "description": "data structure that contains list and the reversals of all initial segments of the list Intuitively reversals xs reverse take fromRev xs Any operation on RevList typically discards the reversals and constructs new reversals on demand",
          "hierarchy": "Test Feat Enumerate",
          "module": "Test.Feat.Enumerate",
          "name": "RevList",
          "package": "testing-feat",
          "partial": "Rev List",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Enumerate.html#t:RevList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Feat.Enumerate",
          "name": "Tag",
          "package": "testing-feat",
          "source": "src/Test-Feat-Internals-Tag.html#Tag",
          "type": "data"
        },
        "index": {
          "hierarchy": "Test Feat Enumerate",
          "module": "Test.Feat.Enumerate",
          "name": "Tag",
          "package": "testing-feat",
          "partial": "Tag",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Enumerate.html#t:Tag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Feat.Enumerate",
          "name": "Enumerate",
          "package": "testing-feat",
          "signature": "Enumerate",
          "source": "src/Test-Feat-Enumerate.html#Enumerate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Feat Enumerate",
          "module": "Test.Feat.Enumerate",
          "name": "Enumerate",
          "package": "testing-feat",
          "partial": "Enumerate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Enumerate.html#v:Enumerate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Feat.Enumerate",
          "name": "Finite",
          "package": "testing-feat",
          "signature": "Finite",
          "source": "src/Test-Feat-Enumerate.html#Finite",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Feat Enumerate",
          "module": "Test.Feat.Enumerate",
          "name": "Finite",
          "package": "testing-feat",
          "partial": "Finite",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Enumerate.html#v:Finite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Feat.Enumerate",
          "name": "RevList",
          "package": "testing-feat",
          "signature": "RevList",
          "source": "src/Test-Feat-Enumerate.html#RevList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Feat Enumerate",
          "module": "Test.Feat.Enumerate",
          "name": "RevList",
          "package": "testing-feat",
          "partial": "Rev List",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Enumerate.html#v:RevList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Feat.Enumerate",
          "name": "Source",
          "package": "testing-feat",
          "signature": "Source String String Int Int",
          "source": "src/Test-Feat-Internals-Tag.html#Tag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Feat Enumerate",
          "module": "Test.Feat.Enumerate",
          "name": "Source",
          "package": "testing-feat",
          "partial": "Source",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Enumerate.html#v:Source"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Feat.Enumerate",
          "name": "cartesian",
          "package": "testing-feat",
          "signature": "Enumerate a -\u003e Enumerate b -\u003e Enumerate (a, b)",
          "source": "src/Test-Feat-Enumerate.html#cartesian",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Feat Enumerate",
          "module": "Test.Feat.Enumerate",
          "name": "cartesian",
          "normalized": "Enumerate a-\u003eEnumerate b-\u003eEnumerate(a,b)",
          "package": "testing-feat",
          "signature": "Enumerate a-\u003eEnumerate b-\u003eEnumerate(a,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Enumerate.html#v:cartesian"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Feat.Enumerate",
          "name": "eShare",
          "package": "testing-feat",
          "signature": "Tag -\u003e Enumerate a -\u003e Enumerate a",
          "source": "src/Test-Feat-Enumerate.html#eShare",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Feat Enumerate",
          "module": "Test.Feat.Enumerate",
          "name": "eShare",
          "normalized": "Tag-\u003eEnumerate a-\u003eEnumerate a",
          "package": "testing-feat",
          "partial": "Share",
          "signature": "Tag-\u003eEnumerate a-\u003eEnumerate a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Enumerate.html#v:eShare"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Feat.Enumerate",
          "name": "fCard",
          "package": "testing-feat",
          "signature": "Index",
          "source": "src/Test-Feat-Enumerate.html#Finite",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Feat Enumerate",
          "module": "Test.Feat.Enumerate",
          "name": "fCard",
          "package": "testing-feat",
          "partial": "Card",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Enumerate.html#v:fCard"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Feat.Enumerate",
          "name": "fIndex",
          "package": "testing-feat",
          "signature": "Index -\u003e a",
          "source": "src/Test-Feat-Enumerate.html#Finite",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Feat Enumerate",
          "module": "Test.Feat.Enumerate",
          "name": "fIndex",
          "normalized": "Index-\u003ea",
          "package": "testing-feat",
          "partial": "Index",
          "signature": "Index-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Enumerate.html#v:fIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Feat.Enumerate",
          "name": "fromFinite",
          "package": "testing-feat",
          "signature": "Finite a -\u003e (Index, [a])",
          "source": "src/Test-Feat-Enumerate.html#fromFinite",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Feat Enumerate",
          "module": "Test.Feat.Enumerate",
          "name": "fromFinite",
          "normalized": "Finite a-\u003e(Index,[a])",
          "package": "testing-feat",
          "partial": "Finite",
          "signature": "Finite a-\u003e(Index,[a])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Enumerate.html#v:fromFinite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Feat.Enumerate",
          "name": "fromParts",
          "package": "testing-feat",
          "signature": "[Finite a] -\u003e Enumerate a",
          "source": "src/Test-Feat-Enumerate.html#fromParts",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Feat Enumerate",
          "module": "Test.Feat.Enumerate",
          "name": "fromParts",
          "normalized": "[Finite a]-\u003eEnumerate a",
          "package": "testing-feat",
          "partial": "Parts",
          "signature": "[Finite a]-\u003eEnumerate a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Enumerate.html#v:fromParts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Feat.Enumerate",
          "name": "fromRev",
          "package": "testing-feat",
          "signature": "[a]",
          "source": "src/Test-Feat-Enumerate.html#RevList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Feat Enumerate",
          "module": "Test.Feat.Enumerate",
          "name": "fromRev",
          "normalized": "[a]",
          "package": "testing-feat",
          "partial": "Rev",
          "signature": "[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Enumerate.html#v:fromRev"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsed to avoid non-termination of \u003ccode\u003e\u003ca\u003eoptimise\u003c/a\u003e\u003c/code\u003e in the presence of \n irregular data types. \u003ccode\u003eirregular\u003c/code\u003e should be applied to the enumeration for the \n constructor that introduces the irregularity. Excessive use may impact \n performance\n\u003c/p\u003e",
          "module": "Test.Feat.Enumerate",
          "name": "irregular",
          "package": "testing-feat",
          "signature": "Enumerate a -\u003e Enumerate a",
          "source": "src/Test-Feat-Enumerate.html#irregular",
          "type": "function"
        },
        "index": {
          "description": "Used to avoid non-termination of optimise in the presence of irregular data types irregular should be applied to the enumeration for the constructor that introduces the irregularity Excessive use may impact performance",
          "hierarchy": "Test Feat Enumerate",
          "module": "Test.Feat.Enumerate",
          "name": "irregular",
          "normalized": "Enumerate a-\u003eEnumerate a",
          "package": "testing-feat",
          "signature": "Enumerate a-\u003eEnumerate a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Enumerate.html#v:irregular"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Feat.Enumerate",
          "name": "noOptim",
          "package": "testing-feat",
          "signature": "Enumerate a -\u003e Enumerate a",
          "source": "src/Test-Feat-Enumerate.html#noOptim",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Feat Enumerate",
          "module": "Test.Feat.Enumerate",
          "name": "noOptim",
          "normalized": "Enumerate a-\u003eEnumerate a",
          "package": "testing-feat",
          "partial": "Optim",
          "signature": "Enumerate a-\u003eEnumerate a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Enumerate.html#v:noOptim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Feat.Enumerate",
          "name": "optimise",
          "package": "testing-feat",
          "signature": "Enumerate a -\u003e Enumerate a",
          "source": "src/Test-Feat-Enumerate.html#optimise",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Feat Enumerate",
          "module": "Test.Feat.Enumerate",
          "name": "optimise",
          "normalized": "Enumerate a-\u003eEnumerate a",
          "package": "testing-feat",
          "signature": "Enumerate a-\u003eEnumerate a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Enumerate.html#v:optimise"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Feat.Enumerate",
          "name": "optimiser",
          "package": "testing-feat",
          "signature": "Sharing Tag (Enumerate a)",
          "source": "src/Test-Feat-Enumerate.html#Enumerate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Feat Enumerate",
          "module": "Test.Feat.Enumerate",
          "name": "optimiser",
          "package": "testing-feat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Enumerate.html#v:optimiser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Feat.Enumerate",
          "name": "parts",
          "package": "testing-feat",
          "signature": "Enumerate a -\u003e [Finite a]",
          "source": "src/Test-Feat-Enumerate.html#parts",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Feat Enumerate",
          "module": "Test.Feat.Enumerate",
          "name": "parts",
          "normalized": "Enumerate a-\u003e[Finite a]",
          "package": "testing-feat",
          "signature": "Enumerate a-\u003e[Finite a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Enumerate.html#v:parts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIncreases the cost of all values in an enumeration by one.\n\u003c/p\u003e",
          "module": "Test.Feat.Enumerate",
          "name": "pay",
          "package": "testing-feat",
          "signature": "Enumerate a -\u003e Enumerate a",
          "source": "src/Test-Feat-Enumerate.html#pay",
          "type": "function"
        },
        "index": {
          "description": "Increases the cost of all values in an enumeration by one",
          "hierarchy": "Test Feat Enumerate",
          "module": "Test.Feat.Enumerate",
          "name": "pay",
          "normalized": "Enumerate a-\u003eEnumerate a",
          "package": "testing-feat",
          "signature": "Enumerate a-\u003eEnumerate a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Enumerate.html#v:pay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Feat.Enumerate",
          "name": "revParts",
          "package": "testing-feat",
          "signature": "RevList (Finite a)",
          "source": "src/Test-Feat-Enumerate.html#Enumerate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Feat Enumerate",
          "module": "Test.Feat.Enumerate",
          "name": "revParts",
          "package": "testing-feat",
          "partial": "Parts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Enumerate.html#v:revParts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Feat.Enumerate",
          "name": "reversals",
          "package": "testing-feat",
          "signature": "[[a]]",
          "source": "src/Test-Feat-Enumerate.html#RevList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Feat Enumerate",
          "module": "Test.Feat.Enumerate",
          "name": "reversals",
          "normalized": "[[a]]",
          "package": "testing-feat",
          "signature": "[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Enumerate.html#v:reversals"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe definition of \u003ccode\u003epure\u003c/code\u003e for the applicative instance. \n\u003c/p\u003e",
          "module": "Test.Feat.Enumerate",
          "name": "singleton",
          "package": "testing-feat",
          "signature": "a -\u003e Enumerate a",
          "source": "src/Test-Feat-Enumerate.html#singleton",
          "type": "function"
        },
        "index": {
          "description": "The definition of pure for the applicative instance",
          "hierarchy": "Test Feat Enumerate",
          "module": "Test.Feat.Enumerate",
          "name": "singleton",
          "normalized": "a-\u003eEnumerate a",
          "package": "testing-feat",
          "signature": "a-\u003eEnumerate a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Enumerate.html#v:singleton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Feat.Enumerate",
          "name": "tag",
          "package": "testing-feat",
          "signature": "Q Exp",
          "source": "src/Test-Feat-Enumerate.html#tag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Feat Enumerate",
          "module": "Test.Feat.Enumerate",
          "name": "tag",
          "package": "testing-feat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Enumerate.html#v:tag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructs a \u003ca\u003eReverse list\u003c/a\u003e variant of a given list. In a sensible \n Haskell implementation evaluating any inital segment of \n \u003ccode\u003e\u003ccode\u003e\u003ca\u003ereversals\u003c/a\u003e\u003c/code\u003e (toRev xs)\u003c/code\u003e uses linear memory in the size of the segment.\n\u003c/p\u003e",
          "module": "Test.Feat.Enumerate",
          "name": "toRev",
          "package": "testing-feat",
          "signature": "[a] -\u003e RevList a",
          "source": "src/Test-Feat-Enumerate.html#toRev",
          "type": "function"
        },
        "index": {
          "description": "Constructs Reverse list variant of given list In sensible Haskell implementation evaluating any inital segment of reversals toRev xs uses linear memory in the size of the segment",
          "hierarchy": "Test Feat Enumerate",
          "module": "Test.Feat.Enumerate",
          "name": "toRev",
          "normalized": "[a]-\u003eRevList a",
          "package": "testing-feat",
          "partial": "Rev",
          "signature": "[a]-\u003eRevList a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Enumerate.html#v:toRev"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Feat.Enumerate",
          "name": "union",
          "package": "testing-feat",
          "signature": "Enumerate a -\u003e Enumerate a -\u003e Enumerate a",
          "source": "src/Test-Feat-Enumerate.html#union",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Feat Enumerate",
          "module": "Test.Feat.Enumerate",
          "name": "union",
          "normalized": "Enumerate a-\u003eEnumerate a-\u003eEnumerate a",
          "package": "testing-feat",
          "signature": "Enumerate a-\u003eEnumerate a-\u003eEnumerate a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Enumerate.html#v:union"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eModifiers for types, i.e. newtype wrappers where the values satisfy some \n constraint (non-empty, positive etc.). Suggestions on useful types are \n appreciated.\n\u003c/p\u003e\u003cp\u003eTo apply the modifiers types you can use the record label. For instance:\n\u003c/p\u003e\u003cpre\u003e\n  data C a = C [a] [a] deriving \u003ccode\u003e\u003ca\u003eTypeable\u003c/a\u003e\u003c/code\u003e\n  instance \u003ccode\u003e\u003ca\u003eEnumerable\u003c/a\u003e\u003c/code\u003e a =\u003e \u003ccode\u003e\u003ca\u003eEnumerable\u003c/a\u003e\u003c/code\u003e (C a) where\n     \u003ccode\u003e\u003ca\u003eenumerate\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003eunary\u003c/a\u003e\u003c/code\u003e $ \u003ccode\u003e\u003ca\u003efuncurry\u003c/a\u003e\u003c/code\u003e $ \n       \\xs ys -\u003e C (\u003ccode\u003e\u003ca\u003enonEmpty\u003c/a\u003e\u003c/code\u003e xs) (\u003ccode\u003e\u003ca\u003enonEmpty\u003c/a\u003e\u003c/code\u003e ys)\n\u003c/pre\u003e\u003cp\u003eAlternatively you can put everything in pattern postition:\n\u003c/p\u003e\u003cpre\u003e\n  instance \u003ccode\u003e\u003ca\u003eEnumerable\u003c/a\u003e\u003c/code\u003e a =\u003e \u003ccode\u003e\u003ca\u003eEnumerable\u003c/a\u003e\u003c/code\u003e (C a) where\n     \u003ccode\u003e\u003ca\u003eenumerate\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003eunary\u003c/a\u003e\u003c/code\u003e $ \u003ccode\u003e\u003ca\u003efuncurry\u003c/a\u003e\u003c/code\u003e $ \n       \\(\u003ccode\u003e\u003ca\u003eFree\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eNonEmpty\u003c/a\u003e\u003c/code\u003e xs,\u003ccode\u003e\u003ca\u003eNonEmpty\u003c/a\u003e\u003c/code\u003e ys)) -\u003e C xs ys)\n\u003c/pre\u003e\u003cp\u003eThe first approach has the advantage of being usable with a \n point free style: \u003ccode\u003e \\xs -\u003e C (\u003ccode\u003e\u003ca\u003enonEmpty\u003c/a\u003e\u003c/code\u003e xs) . \u003ccode\u003e\u003ca\u003enonEmpty\u003c/a\u003e\u003c/code\u003e \u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Test.Feat.Modifiers",
          "name": "Modifiers",
          "package": "testing-feat",
          "source": "src/Test-Feat-Modifiers.html",
          "type": "module"
        },
        "index": {
          "description": "Modifiers for types i.e newtype wrappers where the values satisfy some constraint non-empty positive etc Suggestions on useful types are appreciated To apply the modifiers types you can use the record label For instance data deriving Typeable instance Enumerable Enumerable where enumerate unary funcurry xs ys nonEmpty xs nonEmpty ys Alternatively you can put everything in pattern postition instance Enumerable Enumerable where enumerate unary funcurry Free NonEmpty xs NonEmpty ys xs ys The first approach has the advantage of being usable with point free style xs nonEmpty xs nonEmpty",
          "hierarchy": "Test Feat Modifiers",
          "module": "Test.Feat.Modifiers",
          "name": "Modifiers",
          "package": "testing-feat",
          "partial": "Modifiers",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Modifiers.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA class of infinite precision integral types. \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e is the principal \n class member.\n\u003c/p\u003e",
          "module": "Test.Feat.Modifiers",
          "name": "Infinite",
          "package": "testing-feat",
          "source": "src/Test-Feat-Internals-Newtypes.html#Infinite",
          "type": "class"
        },
        "index": {
          "description": "class of infinite precision integral types Integer is the principal class member",
          "hierarchy": "Test Feat Modifiers",
          "module": "Test.Feat.Modifiers",
          "name": "Infinite",
          "package": "testing-feat",
          "partial": "Infinite",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Modifiers.html#t:Infinite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type of (infinite precision) natural numbers such that \u003ccode\u003e nat a \u003e= 0 \u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Test.Feat.Modifiers",
          "name": "Nat",
          "package": "testing-feat",
          "source": "src/Test-Feat-Internals-Newtypes.html#Nat",
          "type": "newtype"
        },
        "index": {
          "description": "type of infinite precision natural numbers such that nat",
          "hierarchy": "Test Feat Modifiers",
          "module": "Test.Feat.Modifiers",
          "name": "Nat",
          "package": "testing-feat",
          "partial": "Nat",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Modifiers.html#t:Nat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type of non empty lists.\n\u003c/p\u003e",
          "module": "Test.Feat.Modifiers",
          "name": "NonEmpty",
          "package": "testing-feat",
          "source": "src/Test-Feat-Modifiers.html#NonEmpty",
          "type": "newtype"
        },
        "index": {
          "description": "type of non empty lists",
          "hierarchy": "Test Feat Modifiers",
          "module": "Test.Feat.Modifiers",
          "name": "NonEmpty",
          "package": "testing-feat",
          "partial": "Non Empty",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Modifiers.html#t:NonEmpty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type of (infinite precision) non-zero integers such that \u003ccode\u003e nonZero a /= 0 \u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Test.Feat.Modifiers",
          "name": "NonZero",
          "package": "testing-feat",
          "source": "src/Test-Feat-Internals-Newtypes.html#NonZero",
          "type": "newtype"
        },
        "index": {
          "description": "type of infinite precision non-zero integers such that nonZero",
          "hierarchy": "Test Feat Modifiers",
          "module": "Test.Feat.Modifiers",
          "name": "NonZero",
          "package": "testing-feat",
          "partial": "Non Zero",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Modifiers.html#t:NonZero"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrintable ASCII characters\n\u003c/p\u003e",
          "module": "Test.Feat.Modifiers",
          "name": "Printable",
          "package": "testing-feat",
          "source": "src/Test-Feat-Modifiers.html#Printable",
          "type": "newtype"
        },
        "index": {
          "description": "Printable ASCII characters",
          "hierarchy": "Test Feat Modifiers",
          "module": "Test.Feat.Modifiers",
          "name": "Printable",
          "package": "testing-feat",
          "partial": "Printable",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Modifiers.html#t:Printable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAny unicode character.\n\u003c/p\u003e",
          "module": "Test.Feat.Modifiers",
          "name": "Unicode",
          "package": "testing-feat",
          "source": "src/Test-Feat-Modifiers.html#Unicode",
          "type": "newtype"
        },
        "index": {
          "description": "Any unicode character",
          "hierarchy": "Test Feat Modifiers",
          "module": "Test.Feat.Modifiers",
          "name": "Unicode",
          "package": "testing-feat",
          "partial": "Unicode",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Modifiers.html#t:Unicode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Feat.Modifiers",
          "name": "Nat",
          "package": "testing-feat",
          "signature": "Nat",
          "source": "src/Test-Feat-Internals-Newtypes.html#Nat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Feat Modifiers",
          "module": "Test.Feat.Modifiers",
          "name": "Nat",
          "package": "testing-feat",
          "partial": "Nat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Modifiers.html#v:Nat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Feat.Modifiers",
          "name": "NonEmpty",
          "package": "testing-feat",
          "signature": "NonEmpty",
          "source": "src/Test-Feat-Modifiers.html#NonEmpty",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Feat Modifiers",
          "module": "Test.Feat.Modifiers",
          "name": "NonEmpty",
          "package": "testing-feat",
          "partial": "Non Empty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Modifiers.html#v:NonEmpty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Feat.Modifiers",
          "name": "NonZero",
          "package": "testing-feat",
          "signature": "NonZero",
          "source": "src/Test-Feat-Internals-Newtypes.html#NonZero",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Feat Modifiers",
          "module": "Test.Feat.Modifiers",
          "name": "NonZero",
          "package": "testing-feat",
          "partial": "Non Zero",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Modifiers.html#v:NonZero"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Feat.Modifiers",
          "name": "Printable",
          "package": "testing-feat",
          "signature": "Printable",
          "source": "src/Test-Feat-Modifiers.html#Printable",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Feat Modifiers",
          "module": "Test.Feat.Modifiers",
          "name": "Printable",
          "package": "testing-feat",
          "partial": "Printable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Modifiers.html#v:Printable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Feat.Modifiers",
          "name": "Unicode",
          "package": "testing-feat",
          "signature": "Unicode",
          "source": "src/Test-Feat-Modifiers.html#Unicode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Feat Modifiers",
          "module": "Test.Feat.Modifiers",
          "name": "Unicode",
          "package": "testing-feat",
          "partial": "Unicode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Modifiers.html#v:Unicode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Feat.Modifiers",
          "name": "mkNonEmpty",
          "package": "testing-feat",
          "signature": "(a, [a]) -\u003e NonEmpty a",
          "source": "src/Test-Feat-Modifiers.html#mkNonEmpty",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Feat Modifiers",
          "module": "Test.Feat.Modifiers",
          "name": "mkNonEmpty",
          "normalized": "(a,[a])-\u003eNonEmpty a",
          "package": "testing-feat",
          "partial": "Non Empty",
          "signature": "(a,[a])-\u003eNonEmpty a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Modifiers.html#v:mkNonEmpty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Feat.Modifiers",
          "name": "nat",
          "package": "testing-feat",
          "signature": "a",
          "source": "src/Test-Feat-Internals-Newtypes.html#Nat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Feat Modifiers",
          "module": "Test.Feat.Modifiers",
          "name": "nat",
          "package": "testing-feat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Modifiers.html#v:nat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Feat.Modifiers",
          "name": "nonEmpty",
          "package": "testing-feat",
          "signature": "[a]",
          "source": "src/Test-Feat-Modifiers.html#NonEmpty",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Feat Modifiers",
          "module": "Test.Feat.Modifiers",
          "name": "nonEmpty",
          "normalized": "[a]",
          "package": "testing-feat",
          "partial": "Empty",
          "signature": "[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Modifiers.html#v:nonEmpty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Feat.Modifiers",
          "name": "nonZero",
          "package": "testing-feat",
          "signature": "a",
          "source": "src/Test-Feat-Internals-Newtypes.html#NonZero",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Feat Modifiers",
          "module": "Test.Feat.Modifiers",
          "name": "nonZero",
          "package": "testing-feat",
          "partial": "Zero",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Modifiers.html#v:nonZero"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Feat.Modifiers",
          "name": "printable",
          "package": "testing-feat",
          "signature": "Char",
          "source": "src/Test-Feat-Modifiers.html#Printable",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Feat Modifiers",
          "module": "Test.Feat.Modifiers",
          "name": "printable",
          "package": "testing-feat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Modifiers.html#v:printable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSmart constructor for printable ASCII strings\n\u003c/p\u003e",
          "module": "Test.Feat.Modifiers",
          "name": "printables",
          "package": "testing-feat",
          "signature": "[Printable] -\u003e String",
          "source": "src/Test-Feat-Modifiers.html#printables",
          "type": "function"
        },
        "index": {
          "description": "Smart constructor for printable ASCII strings",
          "hierarchy": "Test Feat Modifiers",
          "module": "Test.Feat.Modifiers",
          "name": "printables",
          "normalized": "[Printable]-\u003eString",
          "package": "testing-feat",
          "signature": "[Printable]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Modifiers.html#v:printables"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Feat.Modifiers",
          "name": "unicode",
          "package": "testing-feat",
          "signature": "Char",
          "source": "src/Test-Feat-Modifiers.html#Unicode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Feat Modifiers",
          "module": "Test.Feat.Modifiers",
          "name": "unicode",
          "package": "testing-feat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Modifiers.html#v:unicode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSmart constructor for unicode strings.\n\u003c/p\u003e",
          "module": "Test.Feat.Modifiers",
          "name": "unicodes",
          "package": "testing-feat",
          "signature": "[Unicode] -\u003e String",
          "source": "src/Test-Feat-Modifiers.html#unicodes",
          "type": "function"
        },
        "index": {
          "description": "Smart constructor for unicode strings",
          "hierarchy": "Test Feat Modifiers",
          "module": "Test.Feat.Modifiers",
          "name": "unicodes",
          "normalized": "[Unicode]-\u003eString",
          "package": "testing-feat",
          "signature": "[Unicode]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Modifiers.html#v:unicodes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains a (hopefully) manageable subset of the functionality\n of Feat. The rest resides only in the Test.Feat.* modules.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Test.Feat",
          "name": "Feat",
          "package": "testing-feat",
          "source": "src/Test-Feat.html",
          "type": "module"
        },
        "index": {
          "description": "This module contains hopefully manageable subset of the functionality of Feat The rest resides only in the Test.Feat modules",
          "hierarchy": "Test Feat",
          "module": "Test.Feat",
          "name": "Feat",
          "package": "testing-feat",
          "partial": "Feat",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA class of functionally enumerable types\n\u003c/p\u003e",
          "module": "Test.Feat",
          "name": "Enumerable",
          "package": "testing-feat",
          "source": "src/Test-Feat-Class.html#Enumerable",
          "type": "class"
        },
        "index": {
          "description": "class of functionally enumerable types",
          "hierarchy": "Test Feat",
          "module": "Test.Feat",
          "name": "Enumerable",
          "package": "testing-feat",
          "partial": "Enumerable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat.html#t:Enumerable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA functional enumeration of type \u003ccode\u003et\u003c/code\u003e is a partition of\n \u003ccode\u003et\u003c/code\u003e into finite numbered sets called Parts. Each parts contains values\n of a certain cost (typically the size of the value).\n\u003c/p\u003e",
          "module": "Test.Feat",
          "name": "Enumerate",
          "package": "testing-feat",
          "source": "src/Test-Feat-Enumerate.html#Enumerate",
          "type": "data"
        },
        "index": {
          "description": "functional enumeration of type is partition of into finite numbered sets called Parts Each parts contains values of certain cost typically the size of the value",
          "hierarchy": "Test Feat",
          "module": "Test.Feat",
          "name": "Enumerate",
          "package": "testing-feat",
          "partial": "Enumerate",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat.html#t:Enumerate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA free pair constructor. The cost of constructing a free pair\n is equal to the sum of the costs of its components. \n\u003c/p\u003e",
          "module": "Test.Feat",
          "name": "FreePair",
          "package": "testing-feat",
          "source": "src/Test-Feat-Class.html#FreePair",
          "type": "newtype"
        },
        "index": {
          "description": "free pair constructor The cost of constructing free pair is equal to the sum of the costs of its components",
          "hierarchy": "Test Feat",
          "module": "Test.Feat",
          "name": "FreePair",
          "package": "testing-feat",
          "partial": "Free Pair",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat.html#t:FreePair"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFunctions that test a property and reports the result.\n\u003c/p\u003e",
          "module": "Test.Feat",
          "name": "Report",
          "package": "testing-feat",
          "source": "src/Test-Feat-Access.html#Report",
          "type": "type"
        },
        "index": {
          "description": "Functions that test property and reports the result",
          "hierarchy": "Test Feat",
          "module": "Test.Feat",
          "name": "Report",
          "package": "testing-feat",
          "partial": "Report",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat.html#t:Report"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is the interface for defining an instance. When combining \n enumerations use \u003ccode\u003e\u003ca\u003eshared\u003c/a\u003e\u003c/code\u003e instead and when accessing the data of \n enumerations use \u003ccode\u003e\u003ca\u003eoptimal\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Test.Feat",
          "name": "enumerate",
          "package": "testing-feat",
          "signature": "Enumerate a",
          "source": "src/Test-Feat-Class.html#enumerate",
          "type": "method"
        },
        "index": {
          "description": "This is the interface for defining an instance When combining enumerations use shared instead and when accessing the data of enumerations use optimal",
          "hierarchy": "Test Feat",
          "module": "Test.Feat",
          "name": "enumerate",
          "package": "testing-feat",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat.html#v:enumerate"
      }
    }
  ]
]