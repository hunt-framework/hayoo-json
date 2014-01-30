[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Access.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFunctions for accessing the values of enumerations including \n compatibility with the property based testing frameworks QuickCheck and\n SmallCheck.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Test.Feat.Access",
        "fct-package": "testing-feat",
        "fct-signature": "module",
        "fct-source": "src/Test-Feat-Access.html",
        "fct-type": "module",
        "title": "Access"
      },
      "index": {
        "description": "Functions for accessing the values of enumerations including compatibility with the property based testing frameworks QuickCheck and SmallCheck",
        "hierarchy": "Test Feat Access",
        "module": "Test.Feat.Access",
        "name": "Access",
        "normalized": "",
        "package": "testing-feat",
        "partial": "Access",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Access.html#t:Report",
      "description": {
        "fct-descr": "\u003cp\u003eFunctions that test a property and reports the result.\n\u003c/p\u003e",
        "fct-module": "Test.Feat.Access",
        "fct-package": "testing-feat",
        "fct-signature": "type",
        "fct-source": "src/Test-Feat-Access.html#Report",
        "fct-type": "type",
        "title": "Report"
      },
      "index": {
        "description": "Functions that test property and reports the result",
        "hierarchy": "Test Feat Access",
        "module": "Test.Feat.Access",
        "name": "Report",
        "normalized": "",
        "package": "testing-feat",
        "partial": "Report",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Access.html#v:bounded",
      "description": {
        "fct-descr": "\u003cp\u003eA version of values with a limited number of values in each inner list.\n If the list corresponds to a Part which is larger than the bound it evenly\n distributes the values across the enumeration of the Part.\n\u003c/p\u003e",
        "fct-module": "Test.Feat.Access",
        "fct-package": "testing-feat",
        "fct-signature": "Integer -\u003e [(Integer, [a])]",
        "fct-source": "src/Test-Feat-Access.html#bounded",
        "fct-type": "function",
        "title": "bounded"
      },
      "index": {
        "description": "version of values with limited number of values in each inner list If the list corresponds to Part which is larger than the bound it evenly distributes the values across the enumeration of the Part",
        "hierarchy": "Test Feat Access",
        "module": "Test.Feat.Access",
        "name": "bounded",
        "normalized": "Integer-\u003e[(Integer,[a])]",
        "package": "testing-feat",
        "partial": "",
        "signature": "Integer-\u003e[(Integer,[a])]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Access.html#v:boundedWith",
      "description": {
        "fct-descr": "\u003cp\u003eNon class version of \u003ccode\u003e\u003ca\u003ebounded\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Test.Feat.Access",
        "fct-package": "testing-feat",
        "fct-signature": "Enumerate a -\u003e Integer -\u003e [(Integer, [a])]",
        "fct-source": "src/Test-Feat-Access.html#boundedWith",
        "fct-type": "function",
        "title": "boundedWith"
      },
      "index": {
        "description": "Non class version of bounded",
        "hierarchy": "Test Feat Access",
        "module": "Test.Feat.Access",
        "name": "boundedWith",
        "normalized": "Enumerate a-\u003eInteger-\u003e[(Integer,[a])]",
        "package": "testing-feat",
        "partial": "With",
        "signature": "Enumerate a-\u003eInteger-\u003e[(Integer,[a])]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Access.html#v:featCheck",
      "description": {
        "fct-descr": "\u003cp\u003eCheck a property for all values up to a given size.\n \u003ccode\u003e featCheck p prop = \u003ccode\u003e\u003ca\u003eioAll\u003c/a\u003e\u003c/code\u003e p (\u003ccode\u003e\u003ca\u003einputRep\u003c/a\u003e\u003c/code\u003e prop) \u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Test.Feat.Access",
        "fct-package": "testing-feat",
        "fct-signature": "Int -\u003e (a -\u003e Bool) -\u003e IO ()",
        "fct-source": "src/Test-Feat-Access.html#featCheck",
        "fct-type": "function",
        "title": "featCheck"
      },
      "index": {
        "description": "Check property for all values up to given size featCheck prop ioAll inputRep prop",
        "hierarchy": "Test Feat Access",
        "module": "Test.Feat.Access",
        "name": "featCheck",
        "normalized": "Int-\u003e(a-\u003eBool)-\u003eIO()",
        "package": "testing-feat",
        "partial": "Check",
        "signature": "Int-\u003e(a-\u003eBool)-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Access.html#v:index",
      "description": {
        "fct-descr": "\u003cp\u003eMainly as a proof of concept we define a function to index into\n an enumeration. (If this is repeated multiple times it might be\n very inefficient, depending on whether the dictionary for the\n Enumerable is shared or not.)\n\u003c/p\u003e",
        "fct-module": "Test.Feat.Access",
        "fct-package": "testing-feat",
        "fct-signature": "Integer -\u003e a",
        "fct-source": "src/Test-Feat-Access.html#index",
        "fct-type": "function",
        "title": "index"
      },
      "index": {
        "description": "Mainly as proof of concept we define function to index into an enumeration If this is repeated multiple times it might be very inefficient depending on whether the dictionary for the Enumerable is shared or not",
        "hierarchy": "Test Feat Access",
        "module": "Test.Feat.Access",
        "name": "index",
        "normalized": "Integer-\u003ea",
        "package": "testing-feat",
        "partial": "",
        "signature": "Integer-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Access.html#v:indexWith",
      "description": {
        "fct-descr": "\u003cp\u003eNon class version of \u003ccode\u003e\u003ca\u003eindex\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Test.Feat.Access",
        "fct-package": "testing-feat",
        "fct-signature": "Enumerate a -\u003e Integer -\u003e a",
        "fct-source": "src/Test-Feat-Access.html#indexWith",
        "fct-type": "function",
        "title": "indexWith"
      },
      "index": {
        "description": "Non class version of index",
        "hierarchy": "Test Feat Access",
        "module": "Test.Feat.Access",
        "name": "indexWith",
        "normalized": "Enumerate a-\u003eInteger-\u003ea",
        "package": "testing-feat",
        "partial": "With",
        "signature": "Enumerate a-\u003eInteger-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Access.html#v:inputRep",
      "description": {
        "fct-descr": "\u003cp\u003eReports counterexamples to the given predicate by printing them\n\u003c/p\u003e",
        "fct-module": "Test.Feat.Access",
        "fct-package": "testing-feat",
        "fct-signature": "(a -\u003e Bool) -\u003e Report a",
        "fct-source": "src/Test-Feat-Access.html#inputRep",
        "fct-type": "function",
        "title": "inputRep"
      },
      "index": {
        "description": "Reports counterexamples to the given predicate by printing them",
        "hierarchy": "Test Feat Access",
        "module": "Test.Feat.Access",
        "name": "inputRep",
        "normalized": "(a-\u003eBool)-\u003eReport a",
        "package": "testing-feat",
        "partial": "Rep",
        "signature": "(a-\u003eBool)-\u003eReport a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Access.html#v:ioAll",
      "description": {
        "fct-descr": "\u003cp\u003eDefined as \u003ccode\u003eioAll p = \u003ccode\u003e\u003ca\u003eioFeat\u003c/a\u003e\u003c/code\u003e (take p \u003ccode\u003e\u003ca\u003evalues\u003c/a\u003e\u003c/code\u003e) \u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Test.Feat.Access",
        "fct-package": "testing-feat",
        "fct-signature": "Int -\u003e Report a -\u003e IO ()",
        "fct-source": "src/Test-Feat-Access.html#ioAll",
        "fct-type": "function",
        "title": "ioAll"
      },
      "index": {
        "description": "Defined as ioAll ioFeat take values",
        "hierarchy": "Test Feat Access",
        "module": "Test.Feat.Access",
        "name": "ioAll",
        "normalized": "Int-\u003eReport a-\u003eIO()",
        "package": "testing-feat",
        "partial": "All",
        "signature": "Int-\u003eReport a-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Access.html#v:ioBounded",
      "description": {
        "fct-descr": "\u003cp\u003eDefined as \u003ccode\u003eioBounded n p = \u003ccode\u003e\u003ca\u003eioFeat\u003c/a\u003e\u003c/code\u003e (take p $ \u003ccode\u003e\u003ca\u003ebounded\u003c/a\u003e\u003c/code\u003e n)\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Test.Feat.Access",
        "fct-package": "testing-feat",
        "fct-signature": "Integer -\u003e Int -\u003e Report a -\u003e IO ()",
        "fct-source": "src/Test-Feat-Access.html#ioBounded",
        "fct-type": "function",
        "title": "ioBounded"
      },
      "index": {
        "description": "Defined as ioBounded ioFeat take bounded",
        "hierarchy": "Test Feat Access",
        "module": "Test.Feat.Access",
        "name": "ioBounded",
        "normalized": "Integer-\u003eInt-\u003eReport a-\u003eIO()",
        "package": "testing-feat",
        "partial": "Bounded",
        "signature": "Integer-\u003eInt-\u003eReport a-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Access.html#v:ioFeat",
      "description": {
        "fct-descr": "\u003cp\u003eA rather simple but general property testing driver.\n The property is an (funcurried) IO function that both tests and reports the \n error. The driver goes on forever or until the list is exhausted, \n reporting its progress and the number of \n tests before each new part.\n\u003c/p\u003e",
        "fct-module": "Test.Feat.Access",
        "fct-package": "testing-feat",
        "fct-signature": "[(Integer, [a])] -\u003e Report a -\u003e IO ()",
        "fct-source": "src/Test-Feat-Access.html#ioFeat",
        "fct-type": "function",
        "title": "ioFeat"
      },
      "index": {
        "description": "rather simple but general property testing driver The property is an funcurried IO function that both tests and reports the error The driver goes on forever or until the list is exhausted reporting its progress and the number of tests before each new part",
        "hierarchy": "Test Feat Access",
        "module": "Test.Feat.Access",
        "name": "ioFeat",
        "normalized": "[(Integer,[a])]-\u003eReport a-\u003eIO()",
        "package": "testing-feat",
        "partial": "Feat",
        "signature": "[(Integer,[a])]-\u003eReport a-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Access.html#v:prePostRep",
      "description": {
        "fct-descr": "\u003cp\u003eTakes a function and a predicate on its input/output pairs. \n Reports counterexamples by printing the failing input/output pair.\n\u003c/p\u003e",
        "fct-module": "Test.Feat.Access",
        "fct-package": "testing-feat",
        "fct-signature": "(a -\u003e b) -\u003e (a -\u003e b -\u003e Bool) -\u003e Report a",
        "fct-source": "src/Test-Feat-Access.html#prePostRep",
        "fct-type": "function",
        "title": "prePostRep"
      },
      "index": {
        "description": "Takes function and predicate on its input output pairs Reports counterexamples by printing the failing input output pair",
        "hierarchy": "Test Feat Access",
        "module": "Test.Feat.Access",
        "name": "prePostRep",
        "normalized": "(a-\u003eb)-\u003e(a-\u003eb-\u003eBool)-\u003eReport a",
        "package": "testing-feat",
        "partial": "Post Rep",
        "signature": "(a-\u003eb)-\u003e(a-\u003eb-\u003eBool)-\u003eReport a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Access.html#v:select",
      "description": {
        "fct-descr": "\u003cp\u003eA more fine grained version of index that takes a size and an \n index into the values of that size. \u003ccode\u003eselect p i\u003c/code\u003e is only defined for \u003ccode\u003ei\u003c/code\u003e \n\u003c/p\u003e",
        "fct-module": "Test.Feat.Access",
        "fct-package": "testing-feat",
        "fct-signature": "Int -\u003e Index -\u003e a",
        "fct-source": "src/Test-Feat-Access.html#select",
        "fct-type": "function",
        "title": "select"
      },
      "index": {
        "description": "more fine grained version of index that takes size and an index into the values of that size select is only defined for",
        "hierarchy": "Test Feat Access",
        "module": "Test.Feat.Access",
        "name": "select",
        "normalized": "Int-\u003eIndex-\u003ea",
        "package": "testing-feat",
        "partial": "",
        "signature": "Int-\u003eIndex-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Access.html#v:selectWith",
      "description": {
        "fct-descr": "\u003cp\u003eNon class version of \u003ccode\u003e\u003ca\u003eselect\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Test.Feat.Access",
        "fct-package": "testing-feat",
        "fct-signature": "Enumerate a -\u003e Int -\u003e Index -\u003e a",
        "fct-source": "src/Test-Feat-Access.html#selectWith",
        "fct-type": "function",
        "title": "selectWith"
      },
      "index": {
        "description": "Non class version of select",
        "hierarchy": "Test Feat Access",
        "module": "Test.Feat.Access",
        "name": "selectWith",
        "normalized": "Enumerate a-\u003eInt-\u003eIndex-\u003ea",
        "package": "testing-feat",
        "partial": "With",
        "signature": "Enumerate a-\u003eInt-\u003eIndex-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Access.html#v:striped",
      "description": {
        "fct-descr": "\u003cp\u003eA generalisation of \u003ccode\u003evalues\u003c/code\u003e that enumerates every nth value of the \n enumeration from a given starting point.\n As a special case \u003ccode\u003evalues = striped 0 1\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eUseful for running enumerations in parallel since e.g. \u003ccode\u003estriped 0 2\u003c/code\u003e is \n disjoint from \u003ccode\u003estriped 0 1 2\u003c/code\u003e and the union of the two cover all values.\n\u003c/p\u003e",
        "fct-module": "Test.Feat.Access",
        "fct-package": "testing-feat",
        "fct-signature": "Index -\u003e Integer -\u003e [(Integer, [a])]",
        "fct-source": "src/Test-Feat-Access.html#striped",
        "fct-type": "function",
        "title": "striped"
      },
      "index": {
        "description": "generalisation of values that enumerates every nth value of the enumeration from given starting point As special case values striped Useful for running enumerations in parallel since e.g striped is disjoint from striped and the union of the two cover all values",
        "hierarchy": "Test Feat Access",
        "module": "Test.Feat.Access",
        "name": "striped",
        "normalized": "Index-\u003eInteger-\u003e[(Integer,[a])]",
        "package": "testing-feat",
        "partial": "",
        "signature": "Index-\u003eInteger-\u003e[(Integer,[a])]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Access.html#v:stripedWith",
      "description": {
        "fct-descr": "\u003cp\u003eNon class version of \u003ccode\u003e\u003ca\u003estriped\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Test.Feat.Access",
        "fct-package": "testing-feat",
        "fct-signature": "Enumerate a -\u003e Index -\u003e Integer -\u003e [(Integer, [a])]",
        "fct-source": "src/Test-Feat-Access.html#stripedWith",
        "fct-type": "function",
        "title": "stripedWith"
      },
      "index": {
        "description": "Non class version of striped",
        "hierarchy": "Test Feat Access",
        "module": "Test.Feat.Access",
        "name": "stripedWith",
        "normalized": "Enumerate a-\u003eIndex-\u003eInteger-\u003e[(Integer,[a])]",
        "package": "testing-feat",
        "partial": "With",
        "signature": "Enumerate a-\u003eIndex-\u003eInteger-\u003e[(Integer,[a])]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Access.html#v:toSeries",
      "description": {
        "fct-descr": "\u003cp\u003eCompatibility with SmallCheck. \n\u003c/p\u003e",
        "fct-module": "Test.Feat.Access",
        "fct-package": "testing-feat",
        "fct-signature": "Int -\u003e [a]",
        "fct-source": "src/Test-Feat-Access.html#toSeries",
        "fct-type": "function",
        "title": "toSeries"
      },
      "index": {
        "description": "Compatibility with SmallCheck",
        "hierarchy": "Test Feat Access",
        "module": "Test.Feat.Access",
        "name": "toSeries",
        "normalized": "Int-\u003e[a]",
        "package": "testing-feat",
        "partial": "Series",
        "signature": "Int-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Access.html#v:toSeriesWith",
      "description": {
        "fct-descr": "\u003cp\u003eNon class version of \u003ccode\u003e\u003ca\u003etoSeries\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Test.Feat.Access",
        "fct-package": "testing-feat",
        "fct-signature": "Enumerate a -\u003e Int -\u003e [a]",
        "fct-source": "src/Test-Feat-Access.html#toSeriesWith",
        "fct-type": "function",
        "title": "toSeriesWith"
      },
      "index": {
        "description": "Non class version of toSeries",
        "hierarchy": "Test Feat Access",
        "module": "Test.Feat.Access",
        "name": "toSeriesWith",
        "normalized": "Enumerate a-\u003eInt-\u003e[a]",
        "package": "testing-feat",
        "partial": "Series With",
        "signature": "Enumerate a-\u003eInt-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Access.html#v:uniform",
      "description": {
        "fct-descr": "\u003cp\u003eCompatibility with QuickCheck. Distribution is uniform generator over \n values bounded by the given size. Typical use: \u003ccode\u003esized uniform\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Test.Feat.Access",
        "fct-package": "testing-feat",
        "fct-signature": "Int -\u003e Gen a",
        "fct-source": "src/Test-Feat-Access.html#uniform",
        "fct-type": "function",
        "title": "uniform"
      },
      "index": {
        "description": "Compatibility with QuickCheck Distribution is uniform generator over values bounded by the given size Typical use sized uniform",
        "hierarchy": "Test Feat Access",
        "module": "Test.Feat.Access",
        "name": "uniform",
        "normalized": "Int-\u003eGen a",
        "package": "testing-feat",
        "partial": "",
        "signature": "Int-\u003eGen a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Access.html#v:uniformWith",
      "description": {
        "fct-descr": "\u003cp\u003eNon class version of \u003ccode\u003e\u003ca\u003euniform\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Test.Feat.Access",
        "fct-package": "testing-feat",
        "fct-signature": "Enumerate a -\u003e Int -\u003e Gen a",
        "fct-source": "src/Test-Feat-Access.html#uniformWith",
        "fct-type": "function",
        "title": "uniformWith"
      },
      "index": {
        "description": "Non class version of uniform",
        "hierarchy": "Test Feat Access",
        "module": "Test.Feat.Access",
        "name": "uniformWith",
        "normalized": "Enumerate a-\u003eInt-\u003eGen a",
        "package": "testing-feat",
        "partial": "With",
        "signature": "Enumerate a-\u003eInt-\u003eGen a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Access.html#v:values",
      "description": {
        "fct-descr": "\u003cp\u003eAll values of the enumeration by increasing cost (which is the number\n of constructors for most types). Also contains the cardinality of each list.\n\u003c/p\u003e",
        "fct-module": "Test.Feat.Access",
        "fct-package": "testing-feat",
        "fct-signature": "[(Integer, [a])]",
        "fct-source": "src/Test-Feat-Access.html#values",
        "fct-type": "function",
        "title": "values"
      },
      "index": {
        "description": "All values of the enumeration by increasing cost which is the number of constructors for most types Also contains the cardinality of each list",
        "hierarchy": "Test Feat Access",
        "module": "Test.Feat.Access",
        "name": "values",
        "normalized": "[(Integer,[a])]",
        "package": "testing-feat",
        "partial": "",
        "signature": "[(Integer,[a])]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Access.html#v:valuesWith",
      "description": {
        "fct-descr": "\u003cp\u003eNon class version of \u003ccode\u003e\u003ca\u003evalues\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Test.Feat.Access",
        "fct-package": "testing-feat",
        "fct-signature": "Enumerate a -\u003e [(Integer, [a])]",
        "fct-source": "src/Test-Feat-Access.html#valuesWith",
        "fct-type": "function",
        "title": "valuesWith"
      },
      "index": {
        "description": "Non class version of values",
        "hierarchy": "Test Feat Access",
        "module": "Test.Feat.Access",
        "name": "valuesWith",
        "normalized": "Enumerate a-\u003e[(Integer,[a])]",
        "package": "testing-feat",
        "partial": "With",
        "signature": "Enumerate a-\u003e[(Integer,[a])]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Class-Override.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAnexperimental feature to override the \u003ccode\u003e\u003ca\u003eEnumerable\u003c/a\u003e\u003c/code\u003e instance for any type.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Test.Feat.Class.Override",
        "fct-package": "testing-feat",
        "fct-signature": "module",
        "fct-source": "src/Test-Feat-Class-Override.html",
        "fct-type": "module",
        "title": "Override"
      },
      "index": {
        "description": "Anexperimental feature to override the Enumerable instance for any type",
        "hierarchy": "Test Feat Class Override",
        "module": "Test.Feat.Class.Override",
        "name": "Override",
        "normalized": "",
        "package": "testing-feat",
        "partial": "Override",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Class-Override.html#t:Override",
      "description": {
        "fct-module": "Test.Feat.Class.Override",
        "fct-package": "testing-feat",
        "fct-signature": "type",
        "fct-source": "src/Test-Feat-Class-Override.html#Override",
        "fct-type": "type",
        "title": "Override"
      },
      "index": {
        "description": "",
        "hierarchy": "Test Feat Class Override",
        "module": "Test.Feat.Class.Override",
        "name": "Override",
        "normalized": "",
        "package": "testing-feat",
        "partial": "Override",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Class-Override.html#v:addOverride",
      "description": {
        "fct-module": "Test.Feat.Class.Override",
        "fct-package": "testing-feat",
        "fct-signature": "Enumerate a -\u003e Override -\u003e Override",
        "fct-source": "src/Test-Feat-Class-Override.html#addOverride",
        "fct-type": "function",
        "title": "addOverride"
      },
      "index": {
        "description": "",
        "hierarchy": "Test Feat Class Override",
        "module": "Test.Feat.Class.Override",
        "name": "addOverride",
        "normalized": "Enumerate a-\u003eOverride-\u003eOverride",
        "package": "testing-feat",
        "partial": "Override",
        "signature": "Enumerate a-\u003eOverride-\u003eOverride"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Class-Override.html#v:noOverride",
      "description": {
        "fct-module": "Test.Feat.Class.Override",
        "fct-package": "testing-feat",
        "fct-signature": "Override",
        "fct-source": "src/Test-Feat-Class-Override.html#noOverride",
        "fct-type": "function",
        "title": "noOverride"
      },
      "index": {
        "description": "",
        "hierarchy": "Test Feat Class Override",
        "module": "Test.Feat.Class.Override",
        "name": "noOverride",
        "normalized": "",
        "package": "testing-feat",
        "partial": "Override",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Class-Override.html#v:override",
      "description": {
        "fct-descr": "\u003cp\u003eThis function is best described with an example:\n\u003c/p\u003e\u003cpre\u003e\n    let e1 = override $ addOverride (unary \u003ccode\u003e\u003ca\u003eprintable\u003c/a\u003e\u003c/code\u003e) noOverride :: Enumerate T\n\u003c/pre\u003e\u003cp\u003e\u003ccode\u003ee1\u003c/code\u003e enumerates values of type \u003ccode\u003eT\u003c/code\u003e where all characters (accessed using \n the \u003ccode\u003eEnumerable\u003c/code\u003e instance for \u003ccode\u003eChar\u003c/code\u003e) are printable. Sometimes this can save \n you from placing lots of \u003ccode\u003e\u003ca\u003eprintable\u003c/a\u003e\u003c/code\u003e modifiers in your instances or \n newtypes in your data type definitions.\n\u003c/p\u003e\u003cp\u003eThis works for any type (not just characters). This function should typically \n not be used when combining enumerations (doing so might increase memory \n usage because the resulting enumeration is optimised).\n Also this only has effect on enumerations which have not already been \n optimised, so using override again on the result of override has no effect.\n\u003c/p\u003e",
        "fct-module": "Test.Feat.Class.Override",
        "fct-package": "testing-feat",
        "fct-signature": "Override -\u003e Enumerate a",
        "fct-source": "src/Test-Feat-Class-Override.html#override",
        "fct-type": "function",
        "title": "override"
      },
      "index": {
        "description": "This function is best described with an example let e1 override addOverride unary printable noOverride Enumerate e1 enumerates values of type where all characters accessed using the Enumerable instance for Char are printable Sometimes this can save you from placing lots of printable modifiers in your instances or newtypes in your data type definitions This works for any type not just characters This function should typically not be used when combining enumerations doing so might increase memory usage because the resulting enumeration is optimised Also this only has effect on enumerations which have not already been optimised so using override again on the result of override has no effect",
        "hierarchy": "Test Feat Class Override",
        "module": "Test.Feat.Class.Override",
        "name": "override",
        "normalized": "Override-\u003eEnumerate a",
        "package": "testing-feat",
        "partial": "",
        "signature": "Override-\u003eEnumerate a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Class.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eEverything you need to construct an enumeration for an algebraic type.\n Just define each constructor using pure for nullary constructors and \n unary and funcurry for positive arity constructors, then combine the \n constructors with consts. Example:\n\u003c/p\u003e\u003cpre\u003e\n  instance Enumerable a =\u003e Enumerable [a] where\n    enumerate = consts [unary (funcurry (:)), pure []]\n\u003c/pre\u003e\u003cp\u003eThere's also a handy Template Haskell function for automatic derivation.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Test.Feat.Class",
        "fct-package": "testing-feat",
        "fct-signature": "module",
        "fct-source": "src/Test-Feat-Class.html",
        "fct-type": "module",
        "title": "Class"
      },
      "index": {
        "description": "Everything you need to construct an enumeration for an algebraic type Just define each constructor using pure for nullary constructors and unary and funcurry for positive arity constructors then combine the constructors with consts Example instance Enumerable Enumerable where enumerate consts unary funcurry pure There also handy Template Haskell function for automatic derivation",
        "hierarchy": "Test Feat Class",
        "module": "Test.Feat.Class",
        "name": "Class",
        "normalized": "",
        "package": "testing-feat",
        "partial": "Class",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Class.html#t:Constructor",
      "description": {
        "fct-module": "Test.Feat.Class",
        "fct-package": "testing-feat",
        "fct-signature": "type",
        "fct-source": "src/Test-Feat-Class.html#Constructor",
        "fct-type": "type",
        "title": "Constructor"
      },
      "index": {
        "description": "",
        "hierarchy": "Test Feat Class",
        "module": "Test.Feat.Class",
        "name": "Constructor",
        "normalized": "",
        "package": "testing-feat",
        "partial": "Constructor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Class.html#t:ConstructorDeriv",
      "description": {
        "fct-module": "Test.Feat.Class",
        "fct-package": "testing-feat",
        "fct-signature": "type",
        "fct-source": "src/Test-Feat-Class.html#ConstructorDeriv",
        "fct-type": "type",
        "title": "ConstructorDeriv"
      },
      "index": {
        "description": "",
        "hierarchy": "Test Feat Class",
        "module": "Test.Feat.Class",
        "name": "ConstructorDeriv",
        "normalized": "",
        "package": "testing-feat",
        "partial": "Constructor Deriv",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Class.html#t:Enumerable",
      "description": {
        "fct-descr": "\u003cp\u003eA class of functionally enumerable types\n\u003c/p\u003e",
        "fct-module": "Test.Feat.Class",
        "fct-package": "testing-feat",
        "fct-signature": "class",
        "fct-source": "src/Test-Feat-Class.html#Enumerable",
        "fct-type": "class",
        "title": "Enumerable"
      },
      "index": {
        "description": "class of functionally enumerable types",
        "hierarchy": "Test Feat Class",
        "module": "Test.Feat.Class",
        "name": "Enumerable",
        "normalized": "",
        "package": "testing-feat",
        "partial": "Enumerable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Class.html#t:FreePair",
      "description": {
        "fct-descr": "\u003cp\u003eA free pair constructor. The cost of constructing a free pair\n is equal to the sum of the costs of its components. \n\u003c/p\u003e",
        "fct-module": "Test.Feat.Class",
        "fct-package": "testing-feat",
        "fct-signature": "newtype",
        "fct-source": "src/Test-Feat-Class.html#FreePair",
        "fct-type": "newtype",
        "title": "FreePair"
      },
      "index": {
        "description": "free pair constructor The cost of constructing free pair is equal to the sum of the costs of its components",
        "hierarchy": "Test Feat Class",
        "module": "Test.Feat.Class",
        "name": "FreePair",
        "normalized": "",
        "package": "testing-feat",
        "partial": "Free Pair",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Class.html#v:Free",
      "description": {
        "fct-module": "Test.Feat.Class",
        "fct-package": "testing-feat",
        "fct-signature": "Free",
        "fct-source": "src/Test-Feat-Class.html#FreePair",
        "fct-type": "function",
        "title": "Free"
      },
      "index": {
        "description": "",
        "hierarchy": "Test Feat Class",
        "module": "Test.Feat.Class",
        "name": "Free",
        "normalized": "",
        "package": "testing-feat",
        "partial": "Free",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Class.html#v:consts",
      "description": {
        "fct-descr": "\u003cp\u003eProduces the enumeration of a type given the enumerators for each of its\n constructors. The result of \u003ccode\u003e\u003ca\u003eunary\u003c/a\u003e\u003c/code\u003e should typically not be used \n directly in an instance even if it only has one constructor. So you \n should apply consts even in that case. \n\u003c/p\u003e",
        "fct-module": "Test.Feat.Class",
        "fct-package": "testing-feat",
        "fct-signature": "[Constructor a] -\u003e Enumerate a",
        "fct-source": "src/Test-Feat-Class.html#consts",
        "fct-type": "function",
        "title": "consts"
      },
      "index": {
        "description": "Produces the enumeration of type given the enumerators for each of its constructors The result of unary should typically not be used directly in an instance even if it only has one constructor So you should apply consts even in that case",
        "hierarchy": "Test Feat Class",
        "module": "Test.Feat.Class",
        "name": "consts",
        "normalized": "[Constructor a]-\u003eEnumerate a",
        "package": "testing-feat",
        "partial": "",
        "signature": "[Constructor a]-\u003eEnumerate a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Class.html#v:dAll",
      "description": {
        "fct-module": "Test.Feat.Class",
        "fct-package": "testing-feat",
        "fct-signature": "Name -\u003e ConstructorDeriv",
        "fct-source": "src/Test-Feat-Class.html#dAll",
        "fct-type": "function",
        "title": "dAll"
      },
      "index": {
        "description": "",
        "hierarchy": "Test Feat Class",
        "module": "Test.Feat.Class",
        "name": "dAll",
        "normalized": "Name-\u003eConstructorDeriv",
        "package": "testing-feat",
        "partial": "All",
        "signature": "Name-\u003eConstructorDeriv"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Class.html#v:dExcept",
      "description": {
        "fct-module": "Test.Feat.Class",
        "fct-package": "testing-feat",
        "fct-signature": "Name -\u003e ExpQ -\u003e ConstructorDeriv -\u003e ConstructorDeriv",
        "fct-source": "src/Test-Feat-Class.html#dExcept",
        "fct-type": "function",
        "title": "dExcept"
      },
      "index": {
        "description": "",
        "hierarchy": "Test Feat Class",
        "module": "Test.Feat.Class",
        "name": "dExcept",
        "normalized": "Name-\u003eExpQ-\u003eConstructorDeriv-\u003eConstructorDeriv",
        "package": "testing-feat",
        "partial": "Except",
        "signature": "Name-\u003eExpQ-\u003eConstructorDeriv-\u003eConstructorDeriv"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Class.html#v:dExcluding",
      "description": {
        "fct-module": "Test.Feat.Class",
        "fct-package": "testing-feat",
        "fct-signature": "Name -\u003e ConstructorDeriv -\u003e ConstructorDeriv",
        "fct-source": "src/Test-Feat-Class.html#dExcluding",
        "fct-type": "function",
        "title": "dExcluding"
      },
      "index": {
        "description": "",
        "hierarchy": "Test Feat Class",
        "module": "Test.Feat.Class",
        "name": "dExcluding",
        "normalized": "Name-\u003eConstructorDeriv-\u003eConstructorDeriv",
        "package": "testing-feat",
        "partial": "Excluding",
        "signature": "Name-\u003eConstructorDeriv-\u003eConstructorDeriv"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Class.html#v:deriveEnumerable",
      "description": {
        "fct-descr": "\u003cp\u003eDerive an instance of Enumberable with Template Haskell. To derive\n an instance for \u003ccode\u003eEnumerable A\u003c/code\u003e, just put this as a top level declaration \n in your module (with the TemplateHaskell extension enabled):\n\u003c/p\u003e\u003cpre\u003e\n   deriveEnumerable ''A\n\u003c/pre\u003e",
        "fct-module": "Test.Feat.Class",
        "fct-package": "testing-feat",
        "fct-signature": "Name -\u003e Q [Dec]",
        "fct-source": "src/Test-Feat-Class.html#deriveEnumerable",
        "fct-type": "function",
        "title": "deriveEnumerable"
      },
      "index": {
        "description": "Derive an instance of Enumberable with Template Haskell To derive an instance for Enumerable just put this as top level declaration in your module with the TemplateHaskell extension enabled deriveEnumerable",
        "hierarchy": "Test Feat Class",
        "module": "Test.Feat.Class",
        "name": "deriveEnumerable",
        "normalized": "Name-\u003eQ[Dec]",
        "package": "testing-feat",
        "partial": "Enumerable",
        "signature": "Name-\u003eQ[Dec]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Class.html#v:deriveEnumerable-39-",
      "description": {
        "fct-descr": "\u003cp\u003eDerive an instance of Enumberable with Template Haskell, with \n rules for some specific constructors\n\u003c/p\u003e",
        "fct-module": "Test.Feat.Class",
        "fct-package": "testing-feat",
        "fct-signature": "ConstructorDeriv -\u003e Q [Dec]",
        "fct-source": "src/Test-Feat-Class.html#deriveEnumerable%27",
        "fct-type": "function",
        "title": "deriveEnumerable'"
      },
      "index": {
        "description": "Derive an instance of Enumberable with Template Haskell with rules for some specific constructors",
        "hierarchy": "Test Feat Class",
        "module": "Test.Feat.Class",
        "name": "deriveEnumerable'",
        "normalized": "ConstructorDeriv-\u003eQ[Dec]",
        "package": "testing-feat",
        "partial": "Enumerable'",
        "signature": "ConstructorDeriv-\u003eQ[Dec]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Class.html#v:enumerate",
      "description": {
        "fct-descr": "\u003cp\u003eThis is the interface for defining an instance. When combining \n enumerations use \u003ccode\u003e\u003ca\u003eshared\u003c/a\u003e\u003c/code\u003e instead and when accessing the data of \n enumerations use \u003ccode\u003e\u003ca\u003eoptimal\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Test.Feat.Class",
        "fct-package": "testing-feat",
        "fct-signature": "Enumerate a",
        "fct-source": "src/Test-Feat-Class.html#enumerate",
        "fct-type": "method",
        "title": "enumerate"
      },
      "index": {
        "description": "This is the interface for defining an instance When combining enumerations use shared instead and when accessing the data of enumerations use optimal",
        "hierarchy": "Test Feat Class",
        "module": "Test.Feat.Class",
        "name": "enumerate",
        "normalized": "",
        "package": "testing-feat",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Class.html#v:free",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Test.Feat.Class",
        "fct-package": "testing-feat",
        "fct-signature": "(a, b)",
        "fct-source": "src/Test-Feat-Class.html#FreePair",
        "fct-type": "function",
        "title": "free"
      },
      "index": {
        "description": "",
        "hierarchy": "Test Feat Class",
        "module": "Test.Feat.Class",
        "name": "free",
        "normalized": "(a,b)",
        "package": "testing-feat",
        "partial": "",
        "signature": "(a,b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Class.html#v:funcurry",
      "description": {
        "fct-descr": "\u003cp\u003eUncurry a function (typically a constructor) to a function on free pairs.\n\u003c/p\u003e",
        "fct-module": "Test.Feat.Class",
        "fct-package": "testing-feat",
        "fct-signature": "(a -\u003e b -\u003e c) -\u003e FreePair a b -\u003e c",
        "fct-source": "src/Test-Feat-Class.html#funcurry",
        "fct-type": "function",
        "title": "funcurry"
      },
      "index": {
        "description": "Uncurry function typically constructor to function on free pairs",
        "hierarchy": "Test Feat Class",
        "module": "Test.Feat.Class",
        "name": "funcurry",
        "normalized": "(a-\u003eb-\u003ec)-\u003eFreePair a b-\u003ec",
        "package": "testing-feat",
        "partial": "",
        "signature": "(a-\u003eb-\u003ec)-\u003eFreePair a b-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Class.html#v:nullary",
      "description": {
        "fct-descr": "\u003cp\u003eFor nullary constructors such as \u003ccode\u003eTrue\u003c/code\u003e and \u003ccode\u003e[]\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Test.Feat.Class",
        "fct-package": "testing-feat",
        "fct-signature": "a -\u003e Constructor a",
        "fct-source": "src/Test-Feat-Class.html#nullary",
        "fct-type": "function",
        "title": "nullary"
      },
      "index": {
        "description": "For nullary constructors such as True and",
        "hierarchy": "Test Feat Class",
        "module": "Test.Feat.Class",
        "name": "nullary",
        "normalized": "a-\u003eConstructor a",
        "package": "testing-feat",
        "partial": "",
        "signature": "a-\u003eConstructor a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Class.html#v:optimal",
      "description": {
        "fct-descr": "\u003cp\u003eAn optimal version of enumerate. Used by all\n library functions that access enumerated values (but not \n by combining functions). Library functions should ensure that \n \u003ccode\u003eoptimal\u003c/code\u003e is not reevaluated.\n\u003c/p\u003e",
        "fct-module": "Test.Feat.Class",
        "fct-package": "testing-feat",
        "fct-signature": "Enumerate a",
        "fct-source": "src/Test-Feat-Class.html#optimal",
        "fct-type": "function",
        "title": "optimal"
      },
      "index": {
        "description": "An optimal version of enumerate Used by all library functions that access enumerated values but not by combining functions Library functions should ensure that optimal is not reevaluated",
        "hierarchy": "Test Feat Class",
        "module": "Test.Feat.Class",
        "name": "optimal",
        "normalized": "",
        "package": "testing-feat",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Class.html#v:shared",
      "description": {
        "fct-descr": "\u003cp\u003eVersion of \u003ccode\u003e\u003ca\u003eenumerate\u003c/a\u003e\u003c/code\u003e that ensures that the enumeration is shared \n between all accesses. Should always be used when \n combining enumerations.\n\u003c/p\u003e",
        "fct-module": "Test.Feat.Class",
        "fct-package": "testing-feat",
        "fct-signature": "Enumerate a",
        "fct-source": "src/Test-Feat-Class.html#shared",
        "fct-type": "function",
        "title": "shared"
      },
      "index": {
        "description": "Version of enumerate that ensures that the enumeration is shared between all accesses Should always be used when combining enumerations",
        "hierarchy": "Test Feat Class",
        "module": "Test.Feat.Class",
        "name": "shared",
        "normalized": "",
        "package": "testing-feat",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Class.html#v:unary",
      "description": {
        "fct-descr": "\u003cp\u003eFor any non-nullary constructor. Apply \u003ccode\u003e\u003ca\u003efuncurry\u003c/a\u003e\u003c/code\u003e until the type of\n the result is unary (i.e. n-1 times where n is the number of fields \n of the constructor).\n\u003c/p\u003e",
        "fct-module": "Test.Feat.Class",
        "fct-package": "testing-feat",
        "fct-signature": "(a -\u003e b) -\u003e Constructor b",
        "fct-source": "src/Test-Feat-Class.html#unary",
        "fct-type": "function",
        "title": "unary"
      },
      "index": {
        "description": "For any non-nullary constructor Apply funcurry until the type of the result is unary i.e n-1 times where is the number of fields of the constructor",
        "hierarchy": "Test Feat Class",
        "module": "Test.Feat.Class",
        "name": "unary",
        "normalized": "(a-\u003eb)-\u003eConstructor b",
        "package": "testing-feat",
        "partial": "",
        "signature": "(a-\u003eb)-\u003eConstructor b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Enumerate.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBasic combinators for building enumerations\n most users will want to use the type class \n based combinators in \u003ca\u003eTest.Feat.Class\u003c/a\u003e instead. \n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Test.Feat.Enumerate",
        "fct-package": "testing-feat",
        "fct-signature": "module",
        "fct-source": "src/Test-Feat-Enumerate.html",
        "fct-type": "module",
        "title": "Enumerate"
      },
      "index": {
        "description": "Basic combinators for building enumerations most users will want to use the type class based combinators in Test.Feat.Class instead",
        "hierarchy": "Test Feat Enumerate",
        "module": "Test.Feat.Enumerate",
        "name": "Enumerate",
        "normalized": "",
        "package": "testing-feat",
        "partial": "Enumerate",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Enumerate.html#t:Enumerate",
      "description": {
        "fct-descr": "\u003cp\u003eA functional enumeration of type \u003ccode\u003et\u003c/code\u003e is a partition of\n \u003ccode\u003et\u003c/code\u003e into finite numbered sets called Parts. Each parts contains values\n of a certain cost (typically the size of the value).\n\u003c/p\u003e",
        "fct-module": "Test.Feat.Enumerate",
        "fct-package": "testing-feat",
        "fct-signature": "data",
        "fct-source": "src/Test-Feat-Enumerate.html#Enumerate",
        "fct-type": "data",
        "title": "Enumerate"
      },
      "index": {
        "description": "functional enumeration of type is partition of into finite numbered sets called Parts Each parts contains values of certain cost typically the size of the value",
        "hierarchy": "Test Feat Enumerate",
        "module": "Test.Feat.Enumerate",
        "name": "Enumerate",
        "normalized": "",
        "package": "testing-feat",
        "partial": "Enumerate",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Enumerate.html#t:Finite",
      "description": {
        "fct-module": "Test.Feat.Enumerate",
        "fct-package": "testing-feat",
        "fct-signature": "data",
        "fct-source": "src/Test-Feat-Enumerate.html#Finite",
        "fct-type": "data",
        "title": "Finite"
      },
      "index": {
        "description": "",
        "hierarchy": "Test Feat Enumerate",
        "module": "Test.Feat.Enumerate",
        "name": "Finite",
        "normalized": "",
        "package": "testing-feat",
        "partial": "Finite",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Enumerate.html#t:Index",
      "description": {
        "fct-module": "Test.Feat.Enumerate",
        "fct-package": "testing-feat",
        "fct-signature": "type",
        "fct-source": "src/Test-Feat-Enumerate.html#Index",
        "fct-type": "type",
        "title": "Index"
      },
      "index": {
        "description": "",
        "hierarchy": "Test Feat Enumerate",
        "module": "Test.Feat.Enumerate",
        "name": "Index",
        "normalized": "",
        "package": "testing-feat",
        "partial": "Index",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Enumerate.html#t:RevList",
      "description": {
        "fct-descr": "\u003cp\u003eA data structure that contains a list and the reversals of all initial \n segments of the list. Intuitively \n\u003c/p\u003e\u003cpre\u003ereversals xs !! n = reverse (take (n+1) (fromRev xs))\u003c/pre\u003e\u003cp\u003eAny operation on a \u003ccode\u003eRevList\u003c/code\u003e typically discards the reversals and constructs\n new reversals on demand.\n\u003c/p\u003e",
        "fct-module": "Test.Feat.Enumerate",
        "fct-package": "testing-feat",
        "fct-signature": "data",
        "fct-source": "src/Test-Feat-Enumerate.html#RevList",
        "fct-type": "data",
        "title": "RevList"
      },
      "index": {
        "description": "data structure that contains list and the reversals of all initial segments of the list Intuitively reversals xs reverse take fromRev xs Any operation on RevList typically discards the reversals and constructs new reversals on demand",
        "hierarchy": "Test Feat Enumerate",
        "module": "Test.Feat.Enumerate",
        "name": "RevList",
        "normalized": "",
        "package": "testing-feat",
        "partial": "Rev List",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Enumerate.html#t:Tag",
      "description": {
        "fct-module": "Test.Feat.Enumerate",
        "fct-package": "testing-feat",
        "fct-signature": "data",
        "fct-source": "src/Test-Feat-Internals-Tag.html#Tag",
        "fct-type": "data",
        "title": "Tag"
      },
      "index": {
        "description": "",
        "hierarchy": "Test Feat Enumerate",
        "module": "Test.Feat.Enumerate",
        "name": "Tag",
        "normalized": "",
        "package": "testing-feat",
        "partial": "Tag",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Enumerate.html#v:Enumerate",
      "description": {
        "fct-module": "Test.Feat.Enumerate",
        "fct-package": "testing-feat",
        "fct-signature": "Enumerate",
        "fct-source": "src/Test-Feat-Enumerate.html#Enumerate",
        "fct-type": "function",
        "title": "Enumerate"
      },
      "index": {
        "description": "",
        "hierarchy": "Test Feat Enumerate",
        "module": "Test.Feat.Enumerate",
        "name": "Enumerate",
        "normalized": "",
        "package": "testing-feat",
        "partial": "Enumerate",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Enumerate.html#v:Finite",
      "description": {
        "fct-module": "Test.Feat.Enumerate",
        "fct-package": "testing-feat",
        "fct-signature": "Finite",
        "fct-source": "src/Test-Feat-Enumerate.html#Finite",
        "fct-type": "function",
        "title": "Finite"
      },
      "index": {
        "description": "",
        "hierarchy": "Test Feat Enumerate",
        "module": "Test.Feat.Enumerate",
        "name": "Finite",
        "normalized": "",
        "package": "testing-feat",
        "partial": "Finite",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Enumerate.html#v:RevList",
      "description": {
        "fct-module": "Test.Feat.Enumerate",
        "fct-package": "testing-feat",
        "fct-signature": "RevList",
        "fct-source": "src/Test-Feat-Enumerate.html#RevList",
        "fct-type": "function",
        "title": "RevList"
      },
      "index": {
        "description": "",
        "hierarchy": "Test Feat Enumerate",
        "module": "Test.Feat.Enumerate",
        "name": "RevList",
        "normalized": "",
        "package": "testing-feat",
        "partial": "Rev List",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Enumerate.html#v:Source",
      "description": {
        "fct-module": "Test.Feat.Enumerate",
        "fct-package": "testing-feat",
        "fct-signature": "Source String String Int Int",
        "fct-source": "src/Test-Feat-Internals-Tag.html#Tag",
        "fct-type": "function",
        "title": "Source"
      },
      "index": {
        "description": "",
        "hierarchy": "Test Feat Enumerate",
        "module": "Test.Feat.Enumerate",
        "name": "Source",
        "normalized": "",
        "package": "testing-feat",
        "partial": "Source",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Enumerate.html#v:cartesian",
      "description": {
        "fct-module": "Test.Feat.Enumerate",
        "fct-package": "testing-feat",
        "fct-signature": "Enumerate a -\u003e Enumerate b -\u003e Enumerate (a, b)",
        "fct-source": "src/Test-Feat-Enumerate.html#cartesian",
        "fct-type": "function",
        "title": "cartesian"
      },
      "index": {
        "description": "",
        "hierarchy": "Test Feat Enumerate",
        "module": "Test.Feat.Enumerate",
        "name": "cartesian",
        "normalized": "Enumerate a-\u003eEnumerate b-\u003eEnumerate(a,b)",
        "package": "testing-feat",
        "partial": "",
        "signature": "Enumerate a-\u003eEnumerate b-\u003eEnumerate(a,b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Enumerate.html#v:eShare",
      "description": {
        "fct-module": "Test.Feat.Enumerate",
        "fct-package": "testing-feat",
        "fct-signature": "Tag -\u003e Enumerate a -\u003e Enumerate a",
        "fct-source": "src/Test-Feat-Enumerate.html#eShare",
        "fct-type": "function",
        "title": "eShare"
      },
      "index": {
        "description": "",
        "hierarchy": "Test Feat Enumerate",
        "module": "Test.Feat.Enumerate",
        "name": "eShare",
        "normalized": "Tag-\u003eEnumerate a-\u003eEnumerate a",
        "package": "testing-feat",
        "partial": "Share",
        "signature": "Tag-\u003eEnumerate a-\u003eEnumerate a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Enumerate.html#v:fCard",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Test.Feat.Enumerate",
        "fct-package": "testing-feat",
        "fct-signature": "Index",
        "fct-source": "src/Test-Feat-Enumerate.html#Finite",
        "fct-type": "function",
        "title": "fCard"
      },
      "index": {
        "description": "",
        "hierarchy": "Test Feat Enumerate",
        "module": "Test.Feat.Enumerate",
        "name": "fCard",
        "normalized": "",
        "package": "testing-feat",
        "partial": "Card",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Enumerate.html#v:fIndex",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Test.Feat.Enumerate",
        "fct-package": "testing-feat",
        "fct-signature": "Index -\u003e a",
        "fct-source": "src/Test-Feat-Enumerate.html#Finite",
        "fct-type": "function",
        "title": "fIndex"
      },
      "index": {
        "description": "",
        "hierarchy": "Test Feat Enumerate",
        "module": "Test.Feat.Enumerate",
        "name": "fIndex",
        "normalized": "Index-\u003ea",
        "package": "testing-feat",
        "partial": "Index",
        "signature": "Index-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Enumerate.html#v:fromFinite",
      "description": {
        "fct-module": "Test.Feat.Enumerate",
        "fct-package": "testing-feat",
        "fct-signature": "Finite a -\u003e (Index, [a])",
        "fct-source": "src/Test-Feat-Enumerate.html#fromFinite",
        "fct-type": "function",
        "title": "fromFinite"
      },
      "index": {
        "description": "",
        "hierarchy": "Test Feat Enumerate",
        "module": "Test.Feat.Enumerate",
        "name": "fromFinite",
        "normalized": "Finite a-\u003e(Index,[a])",
        "package": "testing-feat",
        "partial": "Finite",
        "signature": "Finite a-\u003e(Index,[a])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Enumerate.html#v:fromParts",
      "description": {
        "fct-module": "Test.Feat.Enumerate",
        "fct-package": "testing-feat",
        "fct-signature": "[Finite a] -\u003e Enumerate a",
        "fct-source": "src/Test-Feat-Enumerate.html#fromParts",
        "fct-type": "function",
        "title": "fromParts"
      },
      "index": {
        "description": "",
        "hierarchy": "Test Feat Enumerate",
        "module": "Test.Feat.Enumerate",
        "name": "fromParts",
        "normalized": "[Finite a]-\u003eEnumerate a",
        "package": "testing-feat",
        "partial": "Parts",
        "signature": "[Finite a]-\u003eEnumerate a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Enumerate.html#v:fromRev",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Test.Feat.Enumerate",
        "fct-package": "testing-feat",
        "fct-signature": "[a]",
        "fct-source": "src/Test-Feat-Enumerate.html#RevList",
        "fct-type": "function",
        "title": "fromRev"
      },
      "index": {
        "description": "",
        "hierarchy": "Test Feat Enumerate",
        "module": "Test.Feat.Enumerate",
        "name": "fromRev",
        "normalized": "[a]",
        "package": "testing-feat",
        "partial": "Rev",
        "signature": "[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Enumerate.html#v:irregular",
      "description": {
        "fct-descr": "\u003cp\u003eUsed to avoid non-termination of \u003ccode\u003e\u003ca\u003eoptimise\u003c/a\u003e\u003c/code\u003e in the presence of \n irregular data types. \u003ccode\u003eirregular\u003c/code\u003e should be applied to the enumeration for the \n constructor that introduces the irregularity. Excessive use may impact \n performance\n\u003c/p\u003e",
        "fct-module": "Test.Feat.Enumerate",
        "fct-package": "testing-feat",
        "fct-signature": "Enumerate a -\u003e Enumerate a",
        "fct-source": "src/Test-Feat-Enumerate.html#irregular",
        "fct-type": "function",
        "title": "irregular"
      },
      "index": {
        "description": "Used to avoid non-termination of optimise in the presence of irregular data types irregular should be applied to the enumeration for the constructor that introduces the irregularity Excessive use may impact performance",
        "hierarchy": "Test Feat Enumerate",
        "module": "Test.Feat.Enumerate",
        "name": "irregular",
        "normalized": "Enumerate a-\u003eEnumerate a",
        "package": "testing-feat",
        "partial": "",
        "signature": "Enumerate a-\u003eEnumerate a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Enumerate.html#v:noOptim",
      "description": {
        "fct-module": "Test.Feat.Enumerate",
        "fct-package": "testing-feat",
        "fct-signature": "Enumerate a -\u003e Enumerate a",
        "fct-source": "src/Test-Feat-Enumerate.html#noOptim",
        "fct-type": "function",
        "title": "noOptim"
      },
      "index": {
        "description": "",
        "hierarchy": "Test Feat Enumerate",
        "module": "Test.Feat.Enumerate",
        "name": "noOptim",
        "normalized": "Enumerate a-\u003eEnumerate a",
        "package": "testing-feat",
        "partial": "Optim",
        "signature": "Enumerate a-\u003eEnumerate a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Enumerate.html#v:optimise",
      "description": {
        "fct-module": "Test.Feat.Enumerate",
        "fct-package": "testing-feat",
        "fct-signature": "Enumerate a -\u003e Enumerate a",
        "fct-source": "src/Test-Feat-Enumerate.html#optimise",
        "fct-type": "function",
        "title": "optimise"
      },
      "index": {
        "description": "",
        "hierarchy": "Test Feat Enumerate",
        "module": "Test.Feat.Enumerate",
        "name": "optimise",
        "normalized": "Enumerate a-\u003eEnumerate a",
        "package": "testing-feat",
        "partial": "",
        "signature": "Enumerate a-\u003eEnumerate a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Enumerate.html#v:optimiser",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Test.Feat.Enumerate",
        "fct-package": "testing-feat",
        "fct-signature": "Sharing Tag (Enumerate a)",
        "fct-source": "src/Test-Feat-Enumerate.html#Enumerate",
        "fct-type": "function",
        "title": "optimiser"
      },
      "index": {
        "description": "",
        "hierarchy": "Test Feat Enumerate",
        "module": "Test.Feat.Enumerate",
        "name": "optimiser",
        "normalized": "",
        "package": "testing-feat",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Enumerate.html#v:parts",
      "description": {
        "fct-module": "Test.Feat.Enumerate",
        "fct-package": "testing-feat",
        "fct-signature": "Enumerate a -\u003e [Finite a]",
        "fct-source": "src/Test-Feat-Enumerate.html#parts",
        "fct-type": "function",
        "title": "parts"
      },
      "index": {
        "description": "",
        "hierarchy": "Test Feat Enumerate",
        "module": "Test.Feat.Enumerate",
        "name": "parts",
        "normalized": "Enumerate a-\u003e[Finite a]",
        "package": "testing-feat",
        "partial": "",
        "signature": "Enumerate a-\u003e[Finite a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Enumerate.html#v:pay",
      "description": {
        "fct-descr": "\u003cp\u003eIncreases the cost of all values in an enumeration by one.\n\u003c/p\u003e",
        "fct-module": "Test.Feat.Enumerate",
        "fct-package": "testing-feat",
        "fct-signature": "Enumerate a -\u003e Enumerate a",
        "fct-source": "src/Test-Feat-Enumerate.html#pay",
        "fct-type": "function",
        "title": "pay"
      },
      "index": {
        "description": "Increases the cost of all values in an enumeration by one",
        "hierarchy": "Test Feat Enumerate",
        "module": "Test.Feat.Enumerate",
        "name": "pay",
        "normalized": "Enumerate a-\u003eEnumerate a",
        "package": "testing-feat",
        "partial": "",
        "signature": "Enumerate a-\u003eEnumerate a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Enumerate.html#v:revParts",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Test.Feat.Enumerate",
        "fct-package": "testing-feat",
        "fct-signature": "RevList (Finite a)",
        "fct-source": "src/Test-Feat-Enumerate.html#Enumerate",
        "fct-type": "function",
        "title": "revParts"
      },
      "index": {
        "description": "",
        "hierarchy": "Test Feat Enumerate",
        "module": "Test.Feat.Enumerate",
        "name": "revParts",
        "normalized": "",
        "package": "testing-feat",
        "partial": "Parts",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Enumerate.html#v:reversals",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Test.Feat.Enumerate",
        "fct-package": "testing-feat",
        "fct-signature": "[[a]]",
        "fct-source": "src/Test-Feat-Enumerate.html#RevList",
        "fct-type": "function",
        "title": "reversals"
      },
      "index": {
        "description": "",
        "hierarchy": "Test Feat Enumerate",
        "module": "Test.Feat.Enumerate",
        "name": "reversals",
        "normalized": "[[a]]",
        "package": "testing-feat",
        "partial": "",
        "signature": "[[a]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Enumerate.html#v:singleton",
      "description": {
        "fct-descr": "\u003cp\u003eThe definition of \u003ccode\u003epure\u003c/code\u003e for the applicative instance. \n\u003c/p\u003e",
        "fct-module": "Test.Feat.Enumerate",
        "fct-package": "testing-feat",
        "fct-signature": "a -\u003e Enumerate a",
        "fct-source": "src/Test-Feat-Enumerate.html#singleton",
        "fct-type": "function",
        "title": "singleton"
      },
      "index": {
        "description": "The definition of pure for the applicative instance",
        "hierarchy": "Test Feat Enumerate",
        "module": "Test.Feat.Enumerate",
        "name": "singleton",
        "normalized": "a-\u003eEnumerate a",
        "package": "testing-feat",
        "partial": "",
        "signature": "a-\u003eEnumerate a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Enumerate.html#v:tag",
      "description": {
        "fct-module": "Test.Feat.Enumerate",
        "fct-package": "testing-feat",
        "fct-signature": "Q Exp",
        "fct-source": "src/Test-Feat-Enumerate.html#tag",
        "fct-type": "function",
        "title": "tag"
      },
      "index": {
        "description": "",
        "hierarchy": "Test Feat Enumerate",
        "module": "Test.Feat.Enumerate",
        "name": "tag",
        "normalized": "",
        "package": "testing-feat",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Enumerate.html#v:toRev",
      "description": {
        "fct-descr": "\u003cp\u003eConstructs a \u003ca\u003eReverse list\u003c/a\u003e variant of a given list. In a sensible \n Haskell implementation evaluating any inital segment of \n \u003ccode\u003e\u003ccode\u003e\u003ca\u003ereversals\u003c/a\u003e\u003c/code\u003e (toRev xs)\u003c/code\u003e uses linear memory in the size of the segment.\n\u003c/p\u003e",
        "fct-module": "Test.Feat.Enumerate",
        "fct-package": "testing-feat",
        "fct-signature": "[a] -\u003e RevList a",
        "fct-source": "src/Test-Feat-Enumerate.html#toRev",
        "fct-type": "function",
        "title": "toRev"
      },
      "index": {
        "description": "Constructs Reverse list variant of given list In sensible Haskell implementation evaluating any inital segment of reversals toRev xs uses linear memory in the size of the segment",
        "hierarchy": "Test Feat Enumerate",
        "module": "Test.Feat.Enumerate",
        "name": "toRev",
        "normalized": "[a]-\u003eRevList a",
        "package": "testing-feat",
        "partial": "Rev",
        "signature": "[a]-\u003eRevList a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Enumerate.html#v:union",
      "description": {
        "fct-module": "Test.Feat.Enumerate",
        "fct-package": "testing-feat",
        "fct-signature": "Enumerate a -\u003e Enumerate a -\u003e Enumerate a",
        "fct-source": "src/Test-Feat-Enumerate.html#union",
        "fct-type": "function",
        "title": "union"
      },
      "index": {
        "description": "",
        "hierarchy": "Test Feat Enumerate",
        "module": "Test.Feat.Enumerate",
        "name": "union",
        "normalized": "Enumerate a-\u003eEnumerate a-\u003eEnumerate a",
        "package": "testing-feat",
        "partial": "",
        "signature": "Enumerate a-\u003eEnumerate a-\u003eEnumerate a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Modifiers.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eModifiers for types, i.e. newtype wrappers where the values satisfy some \n constraint (non-empty, positive etc.). Suggestions on useful types are \n appreciated.\n\u003c/p\u003e\u003cp\u003eTo apply the modifiers types you can use the record label. For instance:\n\u003c/p\u003e\u003cpre\u003e\n  data C a = C [a] [a] deriving \u003ccode\u003e\u003ca\u003eTypeable\u003c/a\u003e\u003c/code\u003e\n  instance \u003ccode\u003e\u003ca\u003eEnumerable\u003c/a\u003e\u003c/code\u003e a =\u003e \u003ccode\u003e\u003ca\u003eEnumerable\u003c/a\u003e\u003c/code\u003e (C a) where\n     \u003ccode\u003e\u003ca\u003eenumerate\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003eunary\u003c/a\u003e\u003c/code\u003e $ \u003ccode\u003e\u003ca\u003efuncurry\u003c/a\u003e\u003c/code\u003e $ \n       \\xs ys -\u003e C (\u003ccode\u003e\u003ca\u003enonEmpty\u003c/a\u003e\u003c/code\u003e xs) (\u003ccode\u003e\u003ca\u003enonEmpty\u003c/a\u003e\u003c/code\u003e ys)\n\u003c/pre\u003e\u003cp\u003eAlternatively you can put everything in pattern postition:\n\u003c/p\u003e\u003cpre\u003e\n  instance \u003ccode\u003e\u003ca\u003eEnumerable\u003c/a\u003e\u003c/code\u003e a =\u003e \u003ccode\u003e\u003ca\u003eEnumerable\u003c/a\u003e\u003c/code\u003e (C a) where\n     \u003ccode\u003e\u003ca\u003eenumerate\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003eunary\u003c/a\u003e\u003c/code\u003e $ \u003ccode\u003e\u003ca\u003efuncurry\u003c/a\u003e\u003c/code\u003e $ \n       \\(\u003ccode\u003e\u003ca\u003eFree\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eNonEmpty\u003c/a\u003e\u003c/code\u003e xs,\u003ccode\u003e\u003ca\u003eNonEmpty\u003c/a\u003e\u003c/code\u003e ys)) -\u003e C xs ys)\n\u003c/pre\u003e\u003cp\u003eThe first approach has the advantage of being usable with a \n point free style: \u003ccode\u003e \\xs -\u003e C (\u003ccode\u003e\u003ca\u003enonEmpty\u003c/a\u003e\u003c/code\u003e xs) . \u003ccode\u003e\u003ca\u003enonEmpty\u003c/a\u003e\u003c/code\u003e \u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Test.Feat.Modifiers",
        "fct-package": "testing-feat",
        "fct-signature": "module",
        "fct-source": "src/Test-Feat-Modifiers.html",
        "fct-type": "module",
        "title": "Modifiers"
      },
      "index": {
        "description": "Modifiers for types i.e newtype wrappers where the values satisfy some constraint non-empty positive etc Suggestions on useful types are appreciated To apply the modifiers types you can use the record label For instance data deriving Typeable instance Enumerable Enumerable where enumerate unary funcurry xs ys nonEmpty xs nonEmpty ys Alternatively you can put everything in pattern postition instance Enumerable Enumerable where enumerate unary funcurry Free NonEmpty xs NonEmpty ys xs ys The first approach has the advantage of being usable with point free style xs nonEmpty xs nonEmpty",
        "hierarchy": "Test Feat Modifiers",
        "module": "Test.Feat.Modifiers",
        "name": "Modifiers",
        "normalized": "",
        "package": "testing-feat",
        "partial": "Modifiers",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Modifiers.html#t:Infinite",
      "description": {
        "fct-descr": "\u003cp\u003eA class of infinite precision integral types. \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e is the principal \n class member.\n\u003c/p\u003e",
        "fct-module": "Test.Feat.Modifiers",
        "fct-package": "testing-feat",
        "fct-signature": "class",
        "fct-source": "src/Test-Feat-Internals-Newtypes.html#Infinite",
        "fct-type": "class",
        "title": "Infinite"
      },
      "index": {
        "description": "class of infinite precision integral types Integer is the principal class member",
        "hierarchy": "Test Feat Modifiers",
        "module": "Test.Feat.Modifiers",
        "name": "Infinite",
        "normalized": "",
        "package": "testing-feat",
        "partial": "Infinite",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Modifiers.html#t:Nat",
      "description": {
        "fct-descr": "\u003cp\u003eA type of (infinite precision) natural numbers such that \u003ccode\u003e nat a \u003e= 0 \u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Test.Feat.Modifiers",
        "fct-package": "testing-feat",
        "fct-signature": "newtype",
        "fct-source": "src/Test-Feat-Internals-Newtypes.html#Nat",
        "fct-type": "newtype",
        "title": "Nat"
      },
      "index": {
        "description": "type of infinite precision natural numbers such that nat",
        "hierarchy": "Test Feat Modifiers",
        "module": "Test.Feat.Modifiers",
        "name": "Nat",
        "normalized": "",
        "package": "testing-feat",
        "partial": "Nat",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Modifiers.html#t:NonEmpty",
      "description": {
        "fct-descr": "\u003cp\u003eA type of non empty lists.\n\u003c/p\u003e",
        "fct-module": "Test.Feat.Modifiers",
        "fct-package": "testing-feat",
        "fct-signature": "newtype",
        "fct-source": "src/Test-Feat-Modifiers.html#NonEmpty",
        "fct-type": "newtype",
        "title": "NonEmpty"
      },
      "index": {
        "description": "type of non empty lists",
        "hierarchy": "Test Feat Modifiers",
        "module": "Test.Feat.Modifiers",
        "name": "NonEmpty",
        "normalized": "",
        "package": "testing-feat",
        "partial": "Non Empty",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Modifiers.html#t:NonZero",
      "description": {
        "fct-descr": "\u003cp\u003eA type of (infinite precision) non-zero integers such that \u003ccode\u003e nonZero a /= 0 \u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Test.Feat.Modifiers",
        "fct-package": "testing-feat",
        "fct-signature": "newtype",
        "fct-source": "src/Test-Feat-Internals-Newtypes.html#NonZero",
        "fct-type": "newtype",
        "title": "NonZero"
      },
      "index": {
        "description": "type of infinite precision non-zero integers such that nonZero",
        "hierarchy": "Test Feat Modifiers",
        "module": "Test.Feat.Modifiers",
        "name": "NonZero",
        "normalized": "",
        "package": "testing-feat",
        "partial": "Non Zero",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Modifiers.html#t:Printable",
      "description": {
        "fct-descr": "\u003cp\u003ePrintable ASCII characters\n\u003c/p\u003e",
        "fct-module": "Test.Feat.Modifiers",
        "fct-package": "testing-feat",
        "fct-signature": "newtype",
        "fct-source": "src/Test-Feat-Modifiers.html#Printable",
        "fct-type": "newtype",
        "title": "Printable"
      },
      "index": {
        "description": "Printable ASCII characters",
        "hierarchy": "Test Feat Modifiers",
        "module": "Test.Feat.Modifiers",
        "name": "Printable",
        "normalized": "",
        "package": "testing-feat",
        "partial": "Printable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Modifiers.html#t:Unicode",
      "description": {
        "fct-descr": "\u003cp\u003eAny unicode character.\n\u003c/p\u003e",
        "fct-module": "Test.Feat.Modifiers",
        "fct-package": "testing-feat",
        "fct-signature": "newtype",
        "fct-source": "src/Test-Feat-Modifiers.html#Unicode",
        "fct-type": "newtype",
        "title": "Unicode"
      },
      "index": {
        "description": "Any unicode character",
        "hierarchy": "Test Feat Modifiers",
        "module": "Test.Feat.Modifiers",
        "name": "Unicode",
        "normalized": "",
        "package": "testing-feat",
        "partial": "Unicode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Modifiers.html#v:Nat",
      "description": {
        "fct-module": "Test.Feat.Modifiers",
        "fct-package": "testing-feat",
        "fct-signature": "Nat",
        "fct-source": "src/Test-Feat-Internals-Newtypes.html#Nat",
        "fct-type": "function",
        "title": "Nat"
      },
      "index": {
        "description": "",
        "hierarchy": "Test Feat Modifiers",
        "module": "Test.Feat.Modifiers",
        "name": "Nat",
        "normalized": "",
        "package": "testing-feat",
        "partial": "Nat",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Modifiers.html#v:NonEmpty",
      "description": {
        "fct-module": "Test.Feat.Modifiers",
        "fct-package": "testing-feat",
        "fct-signature": "NonEmpty",
        "fct-source": "src/Test-Feat-Modifiers.html#NonEmpty",
        "fct-type": "function",
        "title": "NonEmpty"
      },
      "index": {
        "description": "",
        "hierarchy": "Test Feat Modifiers",
        "module": "Test.Feat.Modifiers",
        "name": "NonEmpty",
        "normalized": "",
        "package": "testing-feat",
        "partial": "Non Empty",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Modifiers.html#v:NonZero",
      "description": {
        "fct-module": "Test.Feat.Modifiers",
        "fct-package": "testing-feat",
        "fct-signature": "NonZero",
        "fct-source": "src/Test-Feat-Internals-Newtypes.html#NonZero",
        "fct-type": "function",
        "title": "NonZero"
      },
      "index": {
        "description": "",
        "hierarchy": "Test Feat Modifiers",
        "module": "Test.Feat.Modifiers",
        "name": "NonZero",
        "normalized": "",
        "package": "testing-feat",
        "partial": "Non Zero",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Modifiers.html#v:Printable",
      "description": {
        "fct-module": "Test.Feat.Modifiers",
        "fct-package": "testing-feat",
        "fct-signature": "Printable",
        "fct-source": "src/Test-Feat-Modifiers.html#Printable",
        "fct-type": "function",
        "title": "Printable"
      },
      "index": {
        "description": "",
        "hierarchy": "Test Feat Modifiers",
        "module": "Test.Feat.Modifiers",
        "name": "Printable",
        "normalized": "",
        "package": "testing-feat",
        "partial": "Printable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Modifiers.html#v:Unicode",
      "description": {
        "fct-module": "Test.Feat.Modifiers",
        "fct-package": "testing-feat",
        "fct-signature": "Unicode",
        "fct-source": "src/Test-Feat-Modifiers.html#Unicode",
        "fct-type": "function",
        "title": "Unicode"
      },
      "index": {
        "description": "",
        "hierarchy": "Test Feat Modifiers",
        "module": "Test.Feat.Modifiers",
        "name": "Unicode",
        "normalized": "",
        "package": "testing-feat",
        "partial": "Unicode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Modifiers.html#v:mkNonEmpty",
      "description": {
        "fct-module": "Test.Feat.Modifiers",
        "fct-package": "testing-feat",
        "fct-signature": "(a, [a]) -\u003e NonEmpty a",
        "fct-source": "src/Test-Feat-Modifiers.html#mkNonEmpty",
        "fct-type": "function",
        "title": "mkNonEmpty"
      },
      "index": {
        "description": "",
        "hierarchy": "Test Feat Modifiers",
        "module": "Test.Feat.Modifiers",
        "name": "mkNonEmpty",
        "normalized": "(a,[a])-\u003eNonEmpty a",
        "package": "testing-feat",
        "partial": "Non Empty",
        "signature": "(a,[a])-\u003eNonEmpty a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Modifiers.html#v:nat",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Test.Feat.Modifiers",
        "fct-package": "testing-feat",
        "fct-signature": "a",
        "fct-source": "src/Test-Feat-Internals-Newtypes.html#Nat",
        "fct-type": "function",
        "title": "nat"
      },
      "index": {
        "description": "",
        "hierarchy": "Test Feat Modifiers",
        "module": "Test.Feat.Modifiers",
        "name": "nat",
        "normalized": "",
        "package": "testing-feat",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Modifiers.html#v:nonEmpty",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Test.Feat.Modifiers",
        "fct-package": "testing-feat",
        "fct-signature": "[a]",
        "fct-source": "src/Test-Feat-Modifiers.html#NonEmpty",
        "fct-type": "function",
        "title": "nonEmpty"
      },
      "index": {
        "description": "",
        "hierarchy": "Test Feat Modifiers",
        "module": "Test.Feat.Modifiers",
        "name": "nonEmpty",
        "normalized": "[a]",
        "package": "testing-feat",
        "partial": "Empty",
        "signature": "[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Modifiers.html#v:nonZero",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Test.Feat.Modifiers",
        "fct-package": "testing-feat",
        "fct-signature": "a",
        "fct-source": "src/Test-Feat-Internals-Newtypes.html#NonZero",
        "fct-type": "function",
        "title": "nonZero"
      },
      "index": {
        "description": "",
        "hierarchy": "Test Feat Modifiers",
        "module": "Test.Feat.Modifiers",
        "name": "nonZero",
        "normalized": "",
        "package": "testing-feat",
        "partial": "Zero",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Modifiers.html#v:printable",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Test.Feat.Modifiers",
        "fct-package": "testing-feat",
        "fct-signature": "Char",
        "fct-source": "src/Test-Feat-Modifiers.html#Printable",
        "fct-type": "function",
        "title": "printable"
      },
      "index": {
        "description": "",
        "hierarchy": "Test Feat Modifiers",
        "module": "Test.Feat.Modifiers",
        "name": "printable",
        "normalized": "",
        "package": "testing-feat",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Modifiers.html#v:printables",
      "description": {
        "fct-descr": "\u003cp\u003eSmart constructor for printable ASCII strings\n\u003c/p\u003e",
        "fct-module": "Test.Feat.Modifiers",
        "fct-package": "testing-feat",
        "fct-signature": "[Printable] -\u003e String",
        "fct-source": "src/Test-Feat-Modifiers.html#printables",
        "fct-type": "function",
        "title": "printables"
      },
      "index": {
        "description": "Smart constructor for printable ASCII strings",
        "hierarchy": "Test Feat Modifiers",
        "module": "Test.Feat.Modifiers",
        "name": "printables",
        "normalized": "[Printable]-\u003eString",
        "package": "testing-feat",
        "partial": "",
        "signature": "[Printable]-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Modifiers.html#v:unicode",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Test.Feat.Modifiers",
        "fct-package": "testing-feat",
        "fct-signature": "Char",
        "fct-source": "src/Test-Feat-Modifiers.html#Unicode",
        "fct-type": "function",
        "title": "unicode"
      },
      "index": {
        "description": "",
        "hierarchy": "Test Feat Modifiers",
        "module": "Test.Feat.Modifiers",
        "name": "unicode",
        "normalized": "",
        "package": "testing-feat",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat-Modifiers.html#v:unicodes",
      "description": {
        "fct-descr": "\u003cp\u003eSmart constructor for unicode strings.\n\u003c/p\u003e",
        "fct-module": "Test.Feat.Modifiers",
        "fct-package": "testing-feat",
        "fct-signature": "[Unicode] -\u003e String",
        "fct-source": "src/Test-Feat-Modifiers.html#unicodes",
        "fct-type": "function",
        "title": "unicodes"
      },
      "index": {
        "description": "Smart constructor for unicode strings",
        "hierarchy": "Test Feat Modifiers",
        "module": "Test.Feat.Modifiers",
        "name": "unicodes",
        "normalized": "[Unicode]-\u003eString",
        "package": "testing-feat",
        "partial": "",
        "signature": "[Unicode]-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains a (hopefully) manageable subset of the functionality\n of Feat. The rest resides only in the Test.Feat.* modules.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Test.Feat",
        "fct-package": "testing-feat",
        "fct-signature": "module",
        "fct-source": "src/Test-Feat.html",
        "fct-type": "module",
        "title": "Feat"
      },
      "index": {
        "description": "This module contains hopefully manageable subset of the functionality of Feat The rest resides only in the Test.Feat modules",
        "hierarchy": "Test Feat",
        "module": "Test.Feat",
        "name": "Feat",
        "normalized": "",
        "package": "testing-feat",
        "partial": "Feat",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat.html#t:Enumerable",
      "description": {
        "fct-descr": "\u003cp\u003eA class of functionally enumerable types\n\u003c/p\u003e",
        "fct-module": "Test.Feat",
        "fct-package": "testing-feat",
        "fct-signature": "class",
        "fct-source": "src/Test-Feat-Class.html#Enumerable",
        "fct-type": "class",
        "title": "Enumerable"
      },
      "index": {
        "description": "class of functionally enumerable types",
        "hierarchy": "Test Feat",
        "module": "Test.Feat",
        "name": "Enumerable",
        "normalized": "",
        "package": "testing-feat",
        "partial": "Enumerable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat.html#t:Enumerate",
      "description": {
        "fct-descr": "\u003cp\u003eA functional enumeration of type \u003ccode\u003et\u003c/code\u003e is a partition of\n \u003ccode\u003et\u003c/code\u003e into finite numbered sets called Parts. Each parts contains values\n of a certain cost (typically the size of the value).\n\u003c/p\u003e",
        "fct-module": "Test.Feat",
        "fct-package": "testing-feat",
        "fct-signature": "data",
        "fct-source": "src/Test-Feat-Enumerate.html#Enumerate",
        "fct-type": "data",
        "title": "Enumerate"
      },
      "index": {
        "description": "functional enumeration of type is partition of into finite numbered sets called Parts Each parts contains values of certain cost typically the size of the value",
        "hierarchy": "Test Feat",
        "module": "Test.Feat",
        "name": "Enumerate",
        "normalized": "",
        "package": "testing-feat",
        "partial": "Enumerate",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat.html#t:FreePair",
      "description": {
        "fct-descr": "\u003cp\u003eA free pair constructor. The cost of constructing a free pair\n is equal to the sum of the costs of its components. \n\u003c/p\u003e",
        "fct-module": "Test.Feat",
        "fct-package": "testing-feat",
        "fct-signature": "newtype",
        "fct-source": "src/Test-Feat-Class.html#FreePair",
        "fct-type": "newtype",
        "title": "FreePair"
      },
      "index": {
        "description": "free pair constructor The cost of constructing free pair is equal to the sum of the costs of its components",
        "hierarchy": "Test Feat",
        "module": "Test.Feat",
        "name": "FreePair",
        "normalized": "",
        "package": "testing-feat",
        "partial": "Free Pair",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat.html#t:Report",
      "description": {
        "fct-descr": "\u003cp\u003eFunctions that test a property and reports the result.\n\u003c/p\u003e",
        "fct-module": "Test.Feat",
        "fct-package": "testing-feat",
        "fct-signature": "type",
        "fct-source": "src/Test-Feat-Access.html#Report",
        "fct-type": "type",
        "title": "Report"
      },
      "index": {
        "description": "Functions that test property and reports the result",
        "hierarchy": "Test Feat",
        "module": "Test.Feat",
        "name": "Report",
        "normalized": "",
        "package": "testing-feat",
        "partial": "Report",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat.html#v:Free",
      "description": {
        "fct-module": "Test.Feat",
        "fct-package": "testing-feat",
        "fct-signature": "Free",
        "fct-source": "src/Test-Feat-Class.html#FreePair",
        "fct-type": "function",
        "title": "Free"
      },
      "index": {
        "description": "",
        "hierarchy": "Test Feat",
        "module": "Test.Feat",
        "name": "Free",
        "normalized": "",
        "package": "testing-feat",
        "partial": "Free",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat.html#v:bounded",
      "description": {
        "fct-descr": "\u003cp\u003eA version of values with a limited number of values in each inner list.\n If the list corresponds to a Part which is larger than the bound it evenly\n distributes the values across the enumeration of the Part.\n\u003c/p\u003e",
        "fct-module": "Test.Feat",
        "fct-package": "testing-feat",
        "fct-signature": "Integer -\u003e [(Integer, [a])]",
        "fct-source": "src/Test-Feat-Access.html#bounded",
        "fct-type": "function",
        "title": "bounded"
      },
      "index": {
        "description": "version of values with limited number of values in each inner list If the list corresponds to Part which is larger than the bound it evenly distributes the values across the enumeration of the Part",
        "hierarchy": "Test Feat",
        "module": "Test.Feat",
        "name": "bounded",
        "normalized": "Integer-\u003e[(Integer,[a])]",
        "package": "testing-feat",
        "partial": "",
        "signature": "Integer-\u003e[(Integer,[a])]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat.html#v:consts",
      "description": {
        "fct-descr": "\u003cp\u003eProduces the enumeration of a type given the enumerators for each of its\n constructors. The result of \u003ccode\u003e\u003ca\u003eunary\u003c/a\u003e\u003c/code\u003e should typically not be used \n directly in an instance even if it only has one constructor. So you \n should apply consts even in that case. \n\u003c/p\u003e",
        "fct-module": "Test.Feat",
        "fct-package": "testing-feat",
        "fct-signature": "[Constructor a] -\u003e Enumerate a",
        "fct-source": "src/Test-Feat-Class.html#consts",
        "fct-type": "function",
        "title": "consts"
      },
      "index": {
        "description": "Produces the enumeration of type given the enumerators for each of its constructors The result of unary should typically not be used directly in an instance even if it only has one constructor So you should apply consts even in that case",
        "hierarchy": "Test Feat",
        "module": "Test.Feat",
        "name": "consts",
        "normalized": "[Constructor a]-\u003eEnumerate a",
        "package": "testing-feat",
        "partial": "",
        "signature": "[Constructor a]-\u003eEnumerate a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat.html#v:deriveEnumerable",
      "description": {
        "fct-descr": "\u003cp\u003eDerive an instance of Enumberable with Template Haskell. To derive\n an instance for \u003ccode\u003eEnumerable A\u003c/code\u003e, just put this as a top level declaration \n in your module (with the TemplateHaskell extension enabled):\n\u003c/p\u003e\u003cpre\u003e\n   deriveEnumerable ''A\n\u003c/pre\u003e",
        "fct-module": "Test.Feat",
        "fct-package": "testing-feat",
        "fct-signature": "Name -\u003e Q [Dec]",
        "fct-source": "src/Test-Feat-Class.html#deriveEnumerable",
        "fct-type": "function",
        "title": "deriveEnumerable"
      },
      "index": {
        "description": "Derive an instance of Enumberable with Template Haskell To derive an instance for Enumerable just put this as top level declaration in your module with the TemplateHaskell extension enabled deriveEnumerable",
        "hierarchy": "Test Feat",
        "module": "Test.Feat",
        "name": "deriveEnumerable",
        "normalized": "Name-\u003eQ[Dec]",
        "package": "testing-feat",
        "partial": "Enumerable",
        "signature": "Name-\u003eQ[Dec]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat.html#v:enumerate",
      "description": {
        "fct-descr": "\u003cp\u003eThis is the interface for defining an instance. When combining \n enumerations use \u003ccode\u003e\u003ca\u003eshared\u003c/a\u003e\u003c/code\u003e instead and when accessing the data of \n enumerations use \u003ccode\u003e\u003ca\u003eoptimal\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Test.Feat",
        "fct-package": "testing-feat",
        "fct-signature": "Enumerate a",
        "fct-source": "src/Test-Feat-Class.html#enumerate",
        "fct-type": "method",
        "title": "enumerate"
      },
      "index": {
        "description": "This is the interface for defining an instance When combining enumerations use shared instead and when accessing the data of enumerations use optimal",
        "hierarchy": "Test Feat",
        "module": "Test.Feat",
        "name": "enumerate",
        "normalized": "",
        "package": "testing-feat",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat.html#v:featCheck",
      "description": {
        "fct-descr": "\u003cp\u003eCheck a property for all values up to a given size.\n \u003ccode\u003e featCheck p prop = \u003ccode\u003e\u003ca\u003eioAll\u003c/a\u003e\u003c/code\u003e p (\u003ccode\u003e\u003ca\u003einputRep\u003c/a\u003e\u003c/code\u003e prop) \u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Test.Feat",
        "fct-package": "testing-feat",
        "fct-signature": "Int -\u003e (a -\u003e Bool) -\u003e IO ()",
        "fct-source": "src/Test-Feat-Access.html#featCheck",
        "fct-type": "function",
        "title": "featCheck"
      },
      "index": {
        "description": "Check property for all values up to given size featCheck prop ioAll inputRep prop",
        "hierarchy": "Test Feat",
        "module": "Test.Feat",
        "name": "featCheck",
        "normalized": "Int-\u003e(a-\u003eBool)-\u003eIO()",
        "package": "testing-feat",
        "partial": "Check",
        "signature": "Int-\u003e(a-\u003eBool)-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat.html#v:free",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Test.Feat",
        "fct-package": "testing-feat",
        "fct-signature": "(a, b)",
        "fct-source": "src/Test-Feat-Class.html#FreePair",
        "fct-type": "function",
        "title": "free"
      },
      "index": {
        "description": "",
        "hierarchy": "Test Feat",
        "module": "Test.Feat",
        "name": "free",
        "normalized": "(a,b)",
        "package": "testing-feat",
        "partial": "",
        "signature": "(a,b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat.html#v:funcurry",
      "description": {
        "fct-descr": "\u003cp\u003eUncurry a function (typically a constructor) to a function on free pairs.\n\u003c/p\u003e",
        "fct-module": "Test.Feat",
        "fct-package": "testing-feat",
        "fct-signature": "(a -\u003e b -\u003e c) -\u003e FreePair a b -\u003e c",
        "fct-source": "src/Test-Feat-Class.html#funcurry",
        "fct-type": "function",
        "title": "funcurry"
      },
      "index": {
        "description": "Uncurry function typically constructor to function on free pairs",
        "hierarchy": "Test Feat",
        "module": "Test.Feat",
        "name": "funcurry",
        "normalized": "(a-\u003eb-\u003ec)-\u003eFreePair a b-\u003ec",
        "package": "testing-feat",
        "partial": "",
        "signature": "(a-\u003eb-\u003ec)-\u003eFreePair a b-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat.html#v:index",
      "description": {
        "fct-descr": "\u003cp\u003eMainly as a proof of concept we define a function to index into\n an enumeration. (If this is repeated multiple times it might be\n very inefficient, depending on whether the dictionary for the\n Enumerable is shared or not.)\n\u003c/p\u003e",
        "fct-module": "Test.Feat",
        "fct-package": "testing-feat",
        "fct-signature": "Integer -\u003e a",
        "fct-source": "src/Test-Feat-Access.html#index",
        "fct-type": "function",
        "title": "index"
      },
      "index": {
        "description": "Mainly as proof of concept we define function to index into an enumeration If this is repeated multiple times it might be very inefficient depending on whether the dictionary for the Enumerable is shared or not",
        "hierarchy": "Test Feat",
        "module": "Test.Feat",
        "name": "index",
        "normalized": "Integer-\u003ea",
        "package": "testing-feat",
        "partial": "",
        "signature": "Integer-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat.html#v:inputRep",
      "description": {
        "fct-descr": "\u003cp\u003eReports counterexamples to the given predicate by printing them\n\u003c/p\u003e",
        "fct-module": "Test.Feat",
        "fct-package": "testing-feat",
        "fct-signature": "(a -\u003e Bool) -\u003e Report a",
        "fct-source": "src/Test-Feat-Access.html#inputRep",
        "fct-type": "function",
        "title": "inputRep"
      },
      "index": {
        "description": "Reports counterexamples to the given predicate by printing them",
        "hierarchy": "Test Feat",
        "module": "Test.Feat",
        "name": "inputRep",
        "normalized": "(a-\u003eBool)-\u003eReport a",
        "package": "testing-feat",
        "partial": "Rep",
        "signature": "(a-\u003eBool)-\u003eReport a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat.html#v:ioAll",
      "description": {
        "fct-descr": "\u003cp\u003eDefined as \u003ccode\u003eioAll p = \u003ccode\u003e\u003ca\u003eioFeat\u003c/a\u003e\u003c/code\u003e (take p \u003ccode\u003e\u003ca\u003evalues\u003c/a\u003e\u003c/code\u003e) \u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Test.Feat",
        "fct-package": "testing-feat",
        "fct-signature": "Int -\u003e Report a -\u003e IO ()",
        "fct-source": "src/Test-Feat-Access.html#ioAll",
        "fct-type": "function",
        "title": "ioAll"
      },
      "index": {
        "description": "Defined as ioAll ioFeat take values",
        "hierarchy": "Test Feat",
        "module": "Test.Feat",
        "name": "ioAll",
        "normalized": "Int-\u003eReport a-\u003eIO()",
        "package": "testing-feat",
        "partial": "All",
        "signature": "Int-\u003eReport a-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat.html#v:ioBounded",
      "description": {
        "fct-descr": "\u003cp\u003eDefined as \u003ccode\u003eioBounded n p = \u003ccode\u003e\u003ca\u003eioFeat\u003c/a\u003e\u003c/code\u003e (take p $ \u003ccode\u003e\u003ca\u003ebounded\u003c/a\u003e\u003c/code\u003e n)\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Test.Feat",
        "fct-package": "testing-feat",
        "fct-signature": "Integer -\u003e Int -\u003e Report a -\u003e IO ()",
        "fct-source": "src/Test-Feat-Access.html#ioBounded",
        "fct-type": "function",
        "title": "ioBounded"
      },
      "index": {
        "description": "Defined as ioBounded ioFeat take bounded",
        "hierarchy": "Test Feat",
        "module": "Test.Feat",
        "name": "ioBounded",
        "normalized": "Integer-\u003eInt-\u003eReport a-\u003eIO()",
        "package": "testing-feat",
        "partial": "Bounded",
        "signature": "Integer-\u003eInt-\u003eReport a-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat.html#v:ioFeat",
      "description": {
        "fct-descr": "\u003cp\u003eA rather simple but general property testing driver.\n The property is an (funcurried) IO function that both tests and reports the \n error. The driver goes on forever or until the list is exhausted, \n reporting its progress and the number of \n tests before each new part.\n\u003c/p\u003e",
        "fct-module": "Test.Feat",
        "fct-package": "testing-feat",
        "fct-signature": "[(Integer, [a])] -\u003e Report a -\u003e IO ()",
        "fct-source": "src/Test-Feat-Access.html#ioFeat",
        "fct-type": "function",
        "title": "ioFeat"
      },
      "index": {
        "description": "rather simple but general property testing driver The property is an funcurried IO function that both tests and reports the error The driver goes on forever or until the list is exhausted reporting its progress and the number of tests before each new part",
        "hierarchy": "Test Feat",
        "module": "Test.Feat",
        "name": "ioFeat",
        "normalized": "[(Integer,[a])]-\u003eReport a-\u003eIO()",
        "package": "testing-feat",
        "partial": "Feat",
        "signature": "[(Integer,[a])]-\u003eReport a-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat.html#v:nullary",
      "description": {
        "fct-descr": "\u003cp\u003eFor nullary constructors such as \u003ccode\u003eTrue\u003c/code\u003e and \u003ccode\u003e[]\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Test.Feat",
        "fct-package": "testing-feat",
        "fct-signature": "a -\u003e Constructor a",
        "fct-source": "src/Test-Feat-Class.html#nullary",
        "fct-type": "function",
        "title": "nullary"
      },
      "index": {
        "description": "For nullary constructors such as True and",
        "hierarchy": "Test Feat",
        "module": "Test.Feat",
        "name": "nullary",
        "normalized": "a-\u003eConstructor a",
        "package": "testing-feat",
        "partial": "",
        "signature": "a-\u003eConstructor a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat.html#v:optimal",
      "description": {
        "fct-descr": "\u003cp\u003eAn optimal version of enumerate. Used by all\n library functions that access enumerated values (but not \n by combining functions). Library functions should ensure that \n \u003ccode\u003eoptimal\u003c/code\u003e is not reevaluated.\n\u003c/p\u003e",
        "fct-module": "Test.Feat",
        "fct-package": "testing-feat",
        "fct-signature": "Enumerate a",
        "fct-source": "src/Test-Feat-Class.html#optimal",
        "fct-type": "function",
        "title": "optimal"
      },
      "index": {
        "description": "An optimal version of enumerate Used by all library functions that access enumerated values but not by combining functions Library functions should ensure that optimal is not reevaluated",
        "hierarchy": "Test Feat",
        "module": "Test.Feat",
        "name": "optimal",
        "normalized": "",
        "package": "testing-feat",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat.html#v:select",
      "description": {
        "fct-descr": "\u003cp\u003eA more fine grained version of index that takes a size and an \n index into the values of that size. \u003ccode\u003eselect p i\u003c/code\u003e is only defined for \u003ccode\u003ei\u003c/code\u003e \n\u003c/p\u003e",
        "fct-module": "Test.Feat",
        "fct-package": "testing-feat",
        "fct-signature": "Int -\u003e Index -\u003e a",
        "fct-source": "src/Test-Feat-Access.html#select",
        "fct-type": "function",
        "title": "select"
      },
      "index": {
        "description": "more fine grained version of index that takes size and an index into the values of that size select is only defined for",
        "hierarchy": "Test Feat",
        "module": "Test.Feat",
        "name": "select",
        "normalized": "Int-\u003eIndex-\u003ea",
        "package": "testing-feat",
        "partial": "",
        "signature": "Int-\u003eIndex-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat.html#v:shared",
      "description": {
        "fct-descr": "\u003cp\u003eVersion of \u003ccode\u003e\u003ca\u003eenumerate\u003c/a\u003e\u003c/code\u003e that ensures that the enumeration is shared \n between all accesses. Should always be used when \n combining enumerations.\n\u003c/p\u003e",
        "fct-module": "Test.Feat",
        "fct-package": "testing-feat",
        "fct-signature": "Enumerate a",
        "fct-source": "src/Test-Feat-Class.html#shared",
        "fct-type": "function",
        "title": "shared"
      },
      "index": {
        "description": "Version of enumerate that ensures that the enumeration is shared between all accesses Should always be used when combining enumerations",
        "hierarchy": "Test Feat",
        "module": "Test.Feat",
        "name": "shared",
        "normalized": "",
        "package": "testing-feat",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat.html#v:unary",
      "description": {
        "fct-descr": "\u003cp\u003eFor any non-nullary constructor. Apply \u003ccode\u003e\u003ca\u003efuncurry\u003c/a\u003e\u003c/code\u003e until the type of\n the result is unary (i.e. n-1 times where n is the number of fields \n of the constructor).\n\u003c/p\u003e",
        "fct-module": "Test.Feat",
        "fct-package": "testing-feat",
        "fct-signature": "(a -\u003e b) -\u003e Constructor b",
        "fct-source": "src/Test-Feat-Class.html#unary",
        "fct-type": "function",
        "title": "unary"
      },
      "index": {
        "description": "For any non-nullary constructor Apply funcurry until the type of the result is unary i.e n-1 times where is the number of fields of the constructor",
        "hierarchy": "Test Feat",
        "module": "Test.Feat",
        "name": "unary",
        "normalized": "(a-\u003eb)-\u003eConstructor b",
        "package": "testing-feat",
        "partial": "",
        "signature": "(a-\u003eb)-\u003eConstructor b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat.html#v:uniform",
      "description": {
        "fct-descr": "\u003cp\u003eCompatibility with QuickCheck. Distribution is uniform generator over \n values bounded by the given size. Typical use: \u003ccode\u003esized uniform\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Test.Feat",
        "fct-package": "testing-feat",
        "fct-signature": "Int -\u003e Gen a",
        "fct-source": "src/Test-Feat-Access.html#uniform",
        "fct-type": "function",
        "title": "uniform"
      },
      "index": {
        "description": "Compatibility with QuickCheck Distribution is uniform generator over values bounded by the given size Typical use sized uniform",
        "hierarchy": "Test Feat",
        "module": "Test.Feat",
        "name": "uniform",
        "normalized": "Int-\u003eGen a",
        "package": "testing-feat",
        "partial": "",
        "signature": "Int-\u003eGen a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/testing-feat/docs/Test-Feat.html#v:values",
      "description": {
        "fct-descr": "\u003cp\u003eAll values of the enumeration by increasing cost (which is the number\n of constructors for most types). Also contains the cardinality of each list.\n\u003c/p\u003e",
        "fct-module": "Test.Feat",
        "fct-package": "testing-feat",
        "fct-signature": "[(Integer, [a])]",
        "fct-source": "src/Test-Feat-Access.html#values",
        "fct-type": "function",
        "title": "values"
      },
      "index": {
        "description": "All values of the enumeration by increasing cost which is the number of constructors for most types Also contains the cardinality of each list",
        "hierarchy": "Test Feat",
        "module": "Test.Feat",
        "name": "values",
        "normalized": "[(Integer,[a])]",
        "package": "testing-feat",
        "partial": "",
        "signature": "[(Integer,[a])]"
      }
    }
  }
]