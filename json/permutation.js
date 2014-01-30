[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Choose-IO.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMutable combinations in the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Choose.IO",
        "fct-package": "permutation",
        "fct-signature": "module",
        "fct-source": "src/Data-Choose-IO.html",
        "fct-type": "module",
        "title": "IO"
      },
      "index": {
        "description": "Mutable combinations in the IO monad",
        "hierarchy": "Data Choose IO",
        "module": "Data.Choose.IO",
        "name": "IO",
        "normalized": "",
        "package": "permutation",
        "partial": "IO",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Choose-IO.html#t:IOChoose",
      "description": {
        "fct-descr": "\u003cp\u003eA mutable combination that can be manipulated in the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
        "fct-module": "Data.Choose.IO",
        "fct-package": "permutation",
        "fct-signature": "data",
        "fct-source": "src/Data-Choose-IOBase.html#IOChoose",
        "fct-type": "data",
        "title": "IOChoose"
      },
      "index": {
        "description": "mutable combination that can be manipulated in the IO monad",
        "hierarchy": "Data Choose IO",
        "module": "Data.Choose.IO",
        "name": "IOChoose",
        "normalized": "",
        "package": "permutation",
        "partial": "IOChoose",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Choose-MChoose.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn overloaded interface to mutable combinations. For combination types which \n can be used with this interface, see \u003ca\u003eData.Choose.IO\u003c/a\u003e and \u003ca\u003eData.Choose.ST\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Choose.MChoose",
        "fct-package": "permutation",
        "fct-signature": "module",
        "fct-source": "src/Data-Choose-MChoose.html",
        "fct-type": "module",
        "title": "MChoose"
      },
      "index": {
        "description": "An overloaded interface to mutable combinations For combination types which can be used with this interface see Data.Choose.IO and Data.Choose.ST",
        "hierarchy": "Data Choose MChoose",
        "module": "Data.Choose.MChoose",
        "name": "MChoose",
        "normalized": "",
        "package": "permutation",
        "partial": "MChoose",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Choose-MChoose.html#t:MChoose",
      "description": {
        "fct-descr": "\u003cp\u003eClass for representing a mutable combination.  The type is parameterized\n over the type of the monad, \u003ccode\u003em\u003c/code\u003e, in which the mutable combination will be\n manipulated.\n\u003c/p\u003e",
        "fct-module": "Data.Choose.MChoose",
        "fct-package": "permutation",
        "fct-signature": "class",
        "fct-source": "src/Data-Choose-MChoose.html#MChoose",
        "fct-type": "class",
        "title": "MChoose"
      },
      "index": {
        "description": "Class for representing mutable combination The type is parameterized over the type of the monad in which the mutable combination will be manipulated",
        "hierarchy": "Data Choose MChoose",
        "module": "Data.Choose.MChoose",
        "name": "MChoose",
        "normalized": "",
        "package": "permutation",
        "partial": "MChoose",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Choose-MChoose.html#v:copyChoose",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003ecopyChoose dst src\u003c/code\u003e copies the elements of the combination \u003ccode\u003esrc\u003c/code\u003e\n into the combination \u003ccode\u003edst\u003c/code\u003e.  The two combinations must have the same\n size.\n\u003c/p\u003e",
        "fct-module": "Data.Choose.MChoose",
        "fct-package": "permutation",
        "fct-signature": "c -\u003e c -\u003e m ()",
        "fct-source": "src/Data-Choose-MChoose.html#copyChoose",
        "fct-type": "function",
        "title": "copyChoose"
      },
      "index": {
        "description": "copyChoose dst src copies the elements of the combination src into the combination dst The two combinations must have the same size",
        "hierarchy": "Data Choose MChoose",
        "module": "Data.Choose.MChoose",
        "name": "copyChoose",
        "normalized": "a-\u003ea-\u003eb()",
        "package": "permutation",
        "partial": "Choose",
        "signature": "c-\u003ec-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Choose-MChoose.html#v:freeze",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a mutable combination to an immutable one.\n\u003c/p\u003e",
        "fct-module": "Data.Choose.MChoose",
        "fct-package": "permutation",
        "fct-signature": "c -\u003e m Choose",
        "fct-source": "src/Data-Choose-MChoose.html#freeze",
        "fct-type": "function",
        "title": "freeze"
      },
      "index": {
        "description": "Convert mutable combination to an immutable one",
        "hierarchy": "Data Choose MChoose",
        "module": "Data.Choose.MChoose",
        "name": "freeze",
        "normalized": "a-\u003eb Choose",
        "package": "permutation",
        "partial": "",
        "signature": "c-\u003em Choose"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Choose-MChoose.html#v:getComplElems",
      "description": {
        "fct-descr": "\u003cp\u003eReturn a lazy list of the elements in the complement of a combination.\n If the combination is a subset of \u003ccode\u003ek\u003c/code\u003e outcomes from \u003ccode\u003en\u003c/code\u003e possibilities, then\n the returned list will be sorted and of length \u003ccode\u003en-k\u003c/code\u003e.  \n Due to the laziness, you should be careful when using this function if you\n are also modifying the combination.\n\u003c/p\u003e",
        "fct-module": "Data.Choose.MChoose",
        "fct-package": "permutation",
        "fct-signature": "c -\u003e m [Int]",
        "fct-source": "src/Data-Choose-MChoose.html#getComplElems",
        "fct-type": "function",
        "title": "getComplElems"
      },
      "index": {
        "description": "Return lazy list of the elements in the complement of combination If the combination is subset of outcomes from possibilities then the returned list will be sorted and of length n-k Due to the laziness you should be careful when using this function if you are also modifying the combination",
        "hierarchy": "Data Choose MChoose",
        "module": "Data.Choose.MChoose",
        "name": "getComplElems",
        "normalized": "a-\u003eb[Int]",
        "package": "permutation",
        "partial": "Compl Elems",
        "signature": "c-\u003em[Int]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Choose-MChoose.html#v:getComplement",
      "description": {
        "fct-descr": "\u003cp\u003eCompute the complement of a combination\n\u003c/p\u003e",
        "fct-module": "Data.Choose.MChoose",
        "fct-package": "permutation",
        "fct-signature": "c -\u003e m c",
        "fct-source": "src/Data-Choose-MChoose.html#getComplement",
        "fct-type": "function",
        "title": "getComplement"
      },
      "index": {
        "description": "Compute the complement of combination",
        "hierarchy": "Data Choose MChoose",
        "module": "Data.Choose.MChoose",
        "name": "getComplement",
        "normalized": "a-\u003eb a",
        "package": "permutation",
        "partial": "Complement",
        "signature": "c-\u003em c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Choose-MChoose.html#v:getElem",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003egetElem c i\u003c/code\u003e gets the value of the \u003ccode\u003ei\u003c/code\u003eth element of the combination\n \u003ccode\u003ec\u003c/code\u003e.  The index \u003ccode\u003ei\u003c/code\u003e must be in the range \u003ccode\u003e0..k-1\u003c/code\u003e, where \u003ccode\u003en\u003c/code\u003e is the\n size of the combination.\n\u003c/p\u003e",
        "fct-module": "Data.Choose.MChoose",
        "fct-package": "permutation",
        "fct-signature": "c -\u003e Int -\u003e m Int",
        "fct-source": "src/Data-Choose-MChoose.html#getElem",
        "fct-type": "function",
        "title": "getElem"
      },
      "index": {
        "description": "getElem gets the value of the th element of the combination The index must be in the range k-1 where is the size of the combination",
        "hierarchy": "Data Choose MChoose",
        "module": "Data.Choose.MChoose",
        "name": "getElem",
        "normalized": "a-\u003eInt-\u003eb Int",
        "package": "permutation",
        "partial": "Elem",
        "signature": "c-\u003eInt-\u003em Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Choose-MChoose.html#v:getElems",
      "description": {
        "fct-descr": "\u003cp\u003eGet a lazy list of the combination elements.  The laziness makes this\n function slightly dangerous if you are modifying the combination.\n\u003c/p\u003e",
        "fct-module": "Data.Choose.MChoose",
        "fct-package": "permutation",
        "fct-signature": "c -\u003e m [Int]",
        "fct-source": "src/Data-Choose-MChoose.html#getElems",
        "fct-type": "method",
        "title": "getElems"
      },
      "index": {
        "description": "Get lazy list of the combination elements The laziness makes this function slightly dangerous if you are modifying the combination",
        "hierarchy": "Data Choose MChoose",
        "module": "Data.Choose.MChoose",
        "name": "getElems",
        "normalized": "a-\u003eb[Int]",
        "package": "permutation",
        "partial": "Elems",
        "signature": "c-\u003em[Int]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Choose-MChoose.html#v:getPossible",
      "description": {
        "fct-descr": "\u003cp\u003eGet the number of possibilities, \u003ccode\u003en\u003c/code\u003e in the combination.\n\u003c/p\u003e",
        "fct-module": "Data.Choose.MChoose",
        "fct-package": "permutation",
        "fct-signature": "c -\u003e m Int",
        "fct-source": "src/Data-Choose-MChoose.html#getPossible",
        "fct-type": "method",
        "title": "getPossible"
      },
      "index": {
        "description": "Get the number of possibilities in the combination",
        "hierarchy": "Data Choose MChoose",
        "module": "Data.Choose.MChoose",
        "name": "getPossible",
        "normalized": "a-\u003eb Int",
        "package": "permutation",
        "partial": "Possible",
        "signature": "c-\u003em Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Choose-MChoose.html#v:getSize",
      "description": {
        "fct-descr": "\u003cp\u003eGet the number of outcomes, \u003ccode\u003ek\u003c/code\u003e in the combination.\n\u003c/p\u003e",
        "fct-module": "Data.Choose.MChoose",
        "fct-package": "permutation",
        "fct-signature": "c -\u003e m Int",
        "fct-source": "src/Data-Choose-MChoose.html#getSize",
        "fct-type": "method",
        "title": "getSize"
      },
      "index": {
        "description": "Get the number of outcomes in the combination",
        "hierarchy": "Data Choose MChoose",
        "module": "Data.Choose.MChoose",
        "name": "getSize",
        "normalized": "a-\u003eb Int",
        "package": "permutation",
        "partial": "Size",
        "signature": "c-\u003em Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Choose-MChoose.html#v:isValid",
      "description": {
        "fct-descr": "\u003cp\u003eReturns whether or not the combination is valid.  For it to be valid,\n the elements must all be unique, they must be in sorted order, and they\n all must be in the range \u003ccode\u003e0 .. n-1\u003c/code\u003e, where \u003ccode\u003en\u003c/code\u003e is the number of \n possibilies in the combination.\n\u003c/p\u003e",
        "fct-module": "Data.Choose.MChoose",
        "fct-package": "permutation",
        "fct-signature": "c -\u003e m Bool",
        "fct-source": "src/Data-Choose-MChoose.html#isValid",
        "fct-type": "function",
        "title": "isValid"
      },
      "index": {
        "description": "Returns whether or not the combination is valid For it to be valid the elements must all be unique they must be in sorted order and they all must be in the range n-1 where is the number of possibilies in the combination",
        "hierarchy": "Data Choose MChoose",
        "module": "Data.Choose.MChoose",
        "name": "isValid",
        "normalized": "a-\u003eb Bool",
        "package": "permutation",
        "partial": "Valid",
        "signature": "c-\u003em Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Choose-MChoose.html#v:newChoose",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003enewChoose n k\u003c/code\u003e creates a new combination of \u003ccode\u003ek\u003c/code\u003e outcomes from \u003ccode\u003en\u003c/code\u003e \n possibilites initialized to the subset \u003ccode\u003e{ 0, ..., k-1 }\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Choose.MChoose",
        "fct-package": "permutation",
        "fct-signature": "Int -\u003e Int -\u003e m c",
        "fct-source": "src/Data-Choose-MChoose.html#newChoose",
        "fct-type": "method",
        "title": "newChoose"
      },
      "index": {
        "description": "newChoose creates new combination of outcomes from possibilites initialized to the subset k-1",
        "hierarchy": "Data Choose MChoose",
        "module": "Data.Choose.MChoose",
        "name": "newChoose",
        "normalized": "Int-\u003eInt-\u003ea b",
        "package": "permutation",
        "partial": "Choose",
        "signature": "Int-\u003eInt-\u003em c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Choose-MChoose.html#v:newChoose_",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003enewChoose n k\u003c/code\u003e allocates a new combination of \u003ccode\u003ek\u003c/code\u003e outcomes from\n \u003ccode\u003en\u003c/code\u003e possibilities but does not initialize it.\n\u003c/p\u003e",
        "fct-module": "Data.Choose.MChoose",
        "fct-package": "permutation",
        "fct-signature": "Int -\u003e Int -\u003e m c",
        "fct-source": "src/Data-Choose-MChoose.html#newChoose_",
        "fct-type": "method",
        "title": "newChoose_"
      },
      "index": {
        "description": "newChoose allocates new combination of outcomes from possibilities but does not initialize it",
        "hierarchy": "Data Choose MChoose",
        "module": "Data.Choose.MChoose",
        "name": "newChoose_",
        "normalized": "Int-\u003eInt-\u003ea b",
        "package": "permutation",
        "partial": "Choose",
        "signature": "Int-\u003eInt-\u003em c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Choose-MChoose.html#v:newCopyChoose",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a new combination by copying another.\n\u003c/p\u003e",
        "fct-module": "Data.Choose.MChoose",
        "fct-package": "permutation",
        "fct-signature": "c -\u003e m c",
        "fct-source": "src/Data-Choose-MChoose.html#newCopyChoose",
        "fct-type": "function",
        "title": "newCopyChoose"
      },
      "index": {
        "description": "Construct new combination by copying another",
        "hierarchy": "Data Choose MChoose",
        "module": "Data.Choose.MChoose",
        "name": "newCopyChoose",
        "normalized": "a-\u003eb a",
        "package": "permutation",
        "partial": "Copy Choose",
        "signature": "c-\u003em c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Choose-MChoose.html#v:newListChoose",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a combination from a list of elements.  \n \u003ccode\u003enewListChoose n k is\u003c/code\u003e creates a combination of \u003ccode\u003ek\u003c/code\u003e outcomes from \u003ccode\u003en\u003c/code\u003e\n possibilities initialized to have the \u003ccode\u003ei\u003c/code\u003eth element equal to \u003ccode\u003eis !! i\u003c/code\u003e.  \n For the combination to be valid, the elements must all be unique, they \n must be in sorted order, and they all must be in the range \u003ccode\u003e0 .. n-1\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Choose.MChoose",
        "fct-package": "permutation",
        "fct-signature": "Int -\u003e Int -\u003e [Int] -\u003e m c",
        "fct-source": "src/Data-Choose-MChoose.html#newListChoose",
        "fct-type": "function",
        "title": "newListChoose"
      },
      "index": {
        "description": "Construct combination from list of elements newListChoose is creates combination of outcomes from possibilities initialized to have the th element equal to is For the combination to be valid the elements must all be unique they must be in sorted order and they all must be in the range n-1",
        "hierarchy": "Data Choose MChoose",
        "module": "Data.Choose.MChoose",
        "name": "newListChoose",
        "normalized": "Int-\u003eInt-\u003e[Int]-\u003ea b",
        "package": "permutation",
        "partial": "List Choose",
        "signature": "Int-\u003eInt-\u003e[Int]-\u003em c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Choose-MChoose.html#v:setElem",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003esetElem c i x\u003c/code\u003e sets the value of the \u003ccode\u003ei\u003c/code\u003eth element of the combination\n \u003ccode\u003ec\u003c/code\u003e.  The index \u003ccode\u003ei\u003c/code\u003e must be in the range \u003ccode\u003e0..k-1\u003c/code\u003e, where \u003ccode\u003ek\u003c/code\u003e is the\n size of the combination.\n\u003c/p\u003e",
        "fct-module": "Data.Choose.MChoose",
        "fct-package": "permutation",
        "fct-signature": "c -\u003e Int -\u003e Int -\u003e m ()",
        "fct-source": "src/Data-Choose-MChoose.html#setElem",
        "fct-type": "function",
        "title": "setElem"
      },
      "index": {
        "description": "setElem sets the value of the th element of the combination The index must be in the range k-1 where is the size of the combination",
        "hierarchy": "Data Choose MChoose",
        "module": "Data.Choose.MChoose",
        "name": "setElem",
        "normalized": "a-\u003eInt-\u003eInt-\u003eb()",
        "package": "permutation",
        "partial": "Elem",
        "signature": "c-\u003eInt-\u003eInt-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Choose-MChoose.html#v:setElems",
      "description": {
        "fct-descr": "\u003cp\u003eSet all the values of a combination from a list of elements.\n\u003c/p\u003e",
        "fct-module": "Data.Choose.MChoose",
        "fct-package": "permutation",
        "fct-signature": "c -\u003e [Int] -\u003e m ()",
        "fct-source": "src/Data-Choose-MChoose.html#setElems",
        "fct-type": "method",
        "title": "setElems"
      },
      "index": {
        "description": "Set all the values of combination from list of elements",
        "hierarchy": "Data Choose MChoose",
        "module": "Data.Choose.MChoose",
        "name": "setElems",
        "normalized": "a-\u003e[Int]-\u003eb()",
        "package": "permutation",
        "partial": "Elems",
        "signature": "c-\u003e[Int]-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Choose-MChoose.html#v:setFirst",
      "description": {
        "fct-descr": "\u003cp\u003eSet a combination to be the first subset of its size.\n\u003c/p\u003e",
        "fct-module": "Data.Choose.MChoose",
        "fct-package": "permutation",
        "fct-signature": "c -\u003e m ()",
        "fct-source": "src/Data-Choose-MChoose.html#setFirst",
        "fct-type": "function",
        "title": "setFirst"
      },
      "index": {
        "description": "Set combination to be the first subset of its size",
        "hierarchy": "Data Choose MChoose",
        "module": "Data.Choose.MChoose",
        "name": "setFirst",
        "normalized": "a-\u003eb()",
        "package": "permutation",
        "partial": "First",
        "signature": "c-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Choose-MChoose.html#v:setNext",
      "description": {
        "fct-descr": "\u003cp\u003eAdvance a combination to the next in lexicogrphic order and return \u003ccode\u003eTrue\u003c/code\u003e. \n  If no further combinations are available, return \u003ccode\u003eFalse\u003c/code\u003e and leave the \n combination unmodified.  Starting with \u003ccode\u003e[ 0 .. k-1 ]\u003c/code\u003e and repeatedly\n calling \u003ccode\u003esetNext\u003c/code\u003e will iterate through all subsets of size \u003ccode\u003ek\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Choose.MChoose",
        "fct-package": "permutation",
        "fct-signature": "c -\u003e m Bool",
        "fct-source": "src/Data-Choose-MChoose.html#setNext",
        "fct-type": "function",
        "title": "setNext"
      },
      "index": {
        "description": "Advance combination to the next in lexicogrphic order and return True If no further combinations are available return False and leave the combination unmodified Starting with k-1 and repeatedly calling setNext will iterate through all subsets of size",
        "hierarchy": "Data Choose MChoose",
        "module": "Data.Choose.MChoose",
        "name": "setNext",
        "normalized": "a-\u003eb Bool",
        "package": "permutation",
        "partial": "Next",
        "signature": "c-\u003em Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Choose-MChoose.html#v:setPrev",
      "description": {
        "fct-descr": "\u003cp\u003eStep backwards to the previous combination in lexicographic order and\n return \u003ccode\u003eTrue\u003c/code\u003e.  If there is no previous combination, return \u003ccode\u003eFalse\u003c/code\u003e and\n leave the combination unmodified.\n\u003c/p\u003e",
        "fct-module": "Data.Choose.MChoose",
        "fct-package": "permutation",
        "fct-signature": "c -\u003e m Bool",
        "fct-source": "src/Data-Choose-MChoose.html#setPrev",
        "fct-type": "function",
        "title": "setPrev"
      },
      "index": {
        "description": "Step backwards to the previous combination in lexicographic order and return True If there is no previous combination return False and leave the combination unmodified",
        "hierarchy": "Data Choose MChoose",
        "module": "Data.Choose.MChoose",
        "name": "setPrev",
        "normalized": "a-\u003eb Bool",
        "package": "permutation",
        "partial": "Prev",
        "signature": "c-\u003em Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Choose-MChoose.html#v:thaw",
      "description": {
        "fct-descr": "\u003cp\u003eConvert an immutable combination to a mutable one.\n\u003c/p\u003e",
        "fct-module": "Data.Choose.MChoose",
        "fct-package": "permutation",
        "fct-signature": "Choose -\u003e m c",
        "fct-source": "src/Data-Choose-MChoose.html#thaw",
        "fct-type": "function",
        "title": "thaw"
      },
      "index": {
        "description": "Convert an immutable combination to mutable one",
        "hierarchy": "Data Choose MChoose",
        "module": "Data.Choose.MChoose",
        "name": "thaw",
        "normalized": "Choose-\u003ea b",
        "package": "permutation",
        "partial": "",
        "signature": "Choose-\u003em c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Choose-MChoose.html#v:unsafeFreeze",
      "description": {
        "fct-module": "Data.Choose.MChoose",
        "fct-package": "permutation",
        "fct-signature": "c -\u003e m Choose",
        "fct-source": "src/Data-Choose-MChoose.html#unsafeFreeze",
        "fct-type": "method",
        "title": "unsafeFreeze"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Choose MChoose",
        "module": "Data.Choose.MChoose",
        "name": "unsafeFreeze",
        "normalized": "a-\u003eb Choose",
        "package": "permutation",
        "partial": "Freeze",
        "signature": "c-\u003em Choose"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Choose-MChoose.html#v:unsafeGetElem",
      "description": {
        "fct-module": "Data.Choose.MChoose",
        "fct-package": "permutation",
        "fct-signature": "c -\u003e Int -\u003e m Int",
        "fct-source": "src/Data-Choose-MChoose.html#unsafeGetElem",
        "fct-type": "method",
        "title": "unsafeGetElem"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Choose MChoose",
        "module": "Data.Choose.MChoose",
        "name": "unsafeGetElem",
        "normalized": "a-\u003eInt-\u003eb Int",
        "package": "permutation",
        "partial": "Get Elem",
        "signature": "c-\u003eInt-\u003em Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Choose-MChoose.html#v:unsafeNewListChoose",
      "description": {
        "fct-module": "Data.Choose.MChoose",
        "fct-package": "permutation",
        "fct-signature": "Int -\u003e Int -\u003e [Int] -\u003e m c",
        "fct-source": "src/Data-Choose-MChoose.html#unsafeNewListChoose",
        "fct-type": "function",
        "title": "unsafeNewListChoose"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Choose MChoose",
        "module": "Data.Choose.MChoose",
        "name": "unsafeNewListChoose",
        "normalized": "Int-\u003eInt-\u003e[Int]-\u003ea b",
        "package": "permutation",
        "partial": "New List Choose",
        "signature": "Int-\u003eInt-\u003e[Int]-\u003em c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Choose-MChoose.html#v:unsafeSetElem",
      "description": {
        "fct-module": "Data.Choose.MChoose",
        "fct-package": "permutation",
        "fct-signature": "c -\u003e Int -\u003e Int -\u003e m ()",
        "fct-source": "src/Data-Choose-MChoose.html#unsafeSetElem",
        "fct-type": "method",
        "title": "unsafeSetElem"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Choose MChoose",
        "module": "Data.Choose.MChoose",
        "name": "unsafeSetElem",
        "normalized": "a-\u003eInt-\u003eInt-\u003eb()",
        "package": "permutation",
        "partial": "Set Elem",
        "signature": "c-\u003eInt-\u003eInt-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Choose-MChoose.html#v:unsafeThaw",
      "description": {
        "fct-module": "Data.Choose.MChoose",
        "fct-package": "permutation",
        "fct-signature": "Choose -\u003e m c",
        "fct-source": "src/Data-Choose-MChoose.html#unsafeThaw",
        "fct-type": "method",
        "title": "unsafeThaw"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Choose MChoose",
        "module": "Data.Choose.MChoose",
        "name": "unsafeThaw",
        "normalized": "Choose-\u003ea b",
        "package": "permutation",
        "partial": "Thaw",
        "signature": "Choose-\u003em c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Choose-ST.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMutable combinations in the \u003ccode\u003e\u003ca\u003eST\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Choose.ST",
        "fct-package": "permutation",
        "fct-signature": "module",
        "fct-source": "src/Data-Choose-ST.html",
        "fct-type": "module",
        "title": "ST"
      },
      "index": {
        "description": "Mutable combinations in the ST monad",
        "hierarchy": "Data Choose ST",
        "module": "Data.Choose.ST",
        "name": "ST",
        "normalized": "",
        "package": "permutation",
        "partial": "ST",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Choose-ST.html#t:STChoose",
      "description": {
        "fct-descr": "\u003cp\u003eA mutable combination that can be manipulated in the \u003ccode\u003e\u003ca\u003eST\u003c/a\u003e\u003c/code\u003e monad. The\n type argument \u003ccode\u003es\u003c/code\u003e is the state variable argument for the \u003ccode\u003e\u003ca\u003eST\u003c/a\u003e\u003c/code\u003e type.\n\u003c/p\u003e",
        "fct-module": "Data.Choose.ST",
        "fct-package": "permutation",
        "fct-signature": "data",
        "fct-source": "src/Data-Choose-Base.html#STChoose",
        "fct-type": "data",
        "title": "STChoose"
      },
      "index": {
        "description": "mutable combination that can be manipulated in the ST monad The type argument is the state variable argument for the ST type",
        "hierarchy": "Data Choose ST",
        "module": "Data.Choose.ST",
        "name": "STChoose",
        "normalized": "",
        "package": "permutation",
        "partial": "STChoose",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Choose-ST.html#v:runSTChoose",
      "description": {
        "fct-descr": "\u003cp\u003eA safe way to create and work with a mutable combination before returning \n an immutable one for later perusal. This function avoids copying the \n combination before returning it - it uses unsafeFreeze internally, but this \n wrapper is a safe interface to that function. \n\u003c/p\u003e",
        "fct-module": "Data.Choose.ST",
        "fct-package": "permutation",
        "fct-signature": "(forall s.  ST s (STChoose s)) -\u003e Choose",
        "fct-source": "src/Data-Choose-ST.html#runSTChoose",
        "fct-type": "function",
        "title": "runSTChoose"
      },
      "index": {
        "description": "safe way to create and work with mutable combination before returning an immutable one for later perusal This function avoids copying the combination before returning it it uses unsafeFreeze internally but this wrapper is safe interface to that function",
        "hierarchy": "Data Choose ST",
        "module": "Data.Choose.ST",
        "name": "runSTChoose",
        "normalized": "(a b ST c(STChoose c))-\u003eChoose",
        "package": "permutation",
        "partial": "STChoose",
        "signature": "(forall s. ST s(STChoose s))-\u003eChoose"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Choose.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eImmutable combinations.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Choose",
        "fct-package": "permutation",
        "fct-signature": "module",
        "fct-source": "src/Data-Choose.html",
        "fct-type": "module",
        "title": "Choose"
      },
      "index": {
        "description": "Immutable combinations",
        "hierarchy": "Data Choose",
        "module": "Data.Choose",
        "name": "Choose",
        "normalized": "",
        "package": "permutation",
        "partial": "Choose",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Choose.html#t:Choose",
      "description": {
        "fct-descr": "\u003cp\u003eThe immutable combination data type.  A way of representing \u003ccode\u003ek\u003c/code\u003e\n unordered outcomes from \u003ccode\u003en\u003c/code\u003e possiblities.  The possibilites are\n represented as the indices \u003ccode\u003e0, ..., n-1\u003c/code\u003e, and the outcomes are\n given as a subset of size \u003ccode\u003ek\u003c/code\u003e.  The subset is stored with the indices\n in ascending order.\n\u003c/p\u003e",
        "fct-module": "Data.Choose",
        "fct-package": "permutation",
        "fct-signature": "data",
        "fct-source": "src/Data-Choose-Base.html#Choose",
        "fct-type": "data",
        "title": "Choose"
      },
      "index": {
        "description": "The immutable combination data type way of representing unordered outcomes from possiblities The possibilites are represented as the indices n-1 and the outcomes are given as subset of size The subset is stored with the indices in ascending order",
        "hierarchy": "Data Choose",
        "module": "Data.Choose",
        "name": "Choose",
        "normalized": "",
        "package": "permutation",
        "partial": "Choose",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Choose.html#v:at",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eat c i\u003c/code\u003e gets the value of the \u003ccode\u003ei\u003c/code\u003eth element of the combination\n \u003ccode\u003ec\u003c/code\u003e.  The index \u003ccode\u003ei\u003c/code\u003e must be in the range \u003ccode\u003e0..(k-1)\u003c/code\u003e, where \u003ccode\u003ek\u003c/code\u003e is the\n size of the combination.\n\u003c/p\u003e",
        "fct-module": "Data.Choose",
        "fct-package": "permutation",
        "fct-signature": "Choose -\u003e Int -\u003e Int",
        "fct-source": "src/Data-Choose.html#at",
        "fct-type": "function",
        "title": "at"
      },
      "index": {
        "description": "at gets the value of the th element of the combination The index must be in the range k-1 where is the size of the combination",
        "hierarchy": "Data Choose",
        "module": "Data.Choose",
        "name": "at",
        "normalized": "Choose-\u003eInt-\u003eInt",
        "package": "permutation",
        "partial": "",
        "signature": "Choose-\u003eInt-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Choose.html#v:choose",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003echoose n k\u003c/code\u003e returns the first combination of \u003ccode\u003ek\u003c/code\u003e outcomes from \u003ccode\u003en\u003c/code\u003e\n possibilites, namely the subset \u003ccode\u003e{ 0, ..., k-1 }\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Choose",
        "fct-package": "permutation",
        "fct-signature": "Int -\u003e Int -\u003e Choose",
        "fct-source": "src/Data-Choose.html#choose",
        "fct-type": "function",
        "title": "choose"
      },
      "index": {
        "description": "choose returns the first combination of outcomes from possibilites namely the subset k-1",
        "hierarchy": "Data Choose",
        "module": "Data.Choose",
        "name": "choose",
        "normalized": "Int-\u003eInt-\u003eChoose",
        "package": "permutation",
        "partial": "",
        "signature": "Int-\u003eInt-\u003eChoose"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Choose.html#v:complElems",
      "description": {
        "fct-descr": "\u003cp\u003eGet a list of the elements in the complement of a combination.\n If the combination is a subset of \u003ccode\u003ek\u003c/code\u003e outcomes from \u003ccode\u003en\u003c/code\u003e possibilities, then\n the returned list will be sorted and of length \u003ccode\u003en-k\u003c/code\u003e.  \n\u003c/p\u003e",
        "fct-module": "Data.Choose",
        "fct-package": "permutation",
        "fct-signature": "Choose -\u003e [Int]",
        "fct-source": "src/Data-Choose.html#complElems",
        "fct-type": "function",
        "title": "complElems"
      },
      "index": {
        "description": "Get list of the elements in the complement of combination If the combination is subset of outcomes from possibilities then the returned list will be sorted and of length n-k",
        "hierarchy": "Data Choose",
        "module": "Data.Choose",
        "name": "complElems",
        "normalized": "Choose-\u003e[Int]",
        "package": "permutation",
        "partial": "Elems",
        "signature": "Choose-\u003e[Int]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Choose.html#v:complement",
      "description": {
        "fct-descr": "\u003cp\u003eGet the inverse of a combination\n\u003c/p\u003e",
        "fct-module": "Data.Choose",
        "fct-package": "permutation",
        "fct-signature": "Choose -\u003e Choose",
        "fct-source": "src/Data-Choose.html#complement",
        "fct-type": "function",
        "title": "complement"
      },
      "index": {
        "description": "Get the inverse of combination",
        "hierarchy": "Data Choose",
        "module": "Data.Choose",
        "name": "complement",
        "normalized": "Choose-\u003eChoose",
        "package": "permutation",
        "partial": "",
        "signature": "Choose-\u003eChoose"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Choose.html#v:elems",
      "description": {
        "fct-descr": "\u003cp\u003eGet a list of the \u003ccode\u003ek\u003c/code\u003e outcomes.\n\u003c/p\u003e",
        "fct-module": "Data.Choose",
        "fct-package": "permutation",
        "fct-signature": "Choose -\u003e [Int]",
        "fct-source": "src/Data-Choose-Base.html#elems",
        "fct-type": "function",
        "title": "elems"
      },
      "index": {
        "description": "Get list of the outcomes",
        "hierarchy": "Data Choose",
        "module": "Data.Choose",
        "name": "elems",
        "normalized": "Choose-\u003e[Int]",
        "package": "permutation",
        "partial": "",
        "signature": "Choose-\u003e[Int]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Choose.html#v:listChoose",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a combination from a list of elements.  \n \u003ccode\u003elistChoose n k is\u003c/code\u003e creates a combination of \u003ccode\u003ek\u003c/code\u003e outcomes from \u003ccode\u003en\u003c/code\u003e\n possibilities initialized to have the \u003ccode\u003ei\u003c/code\u003eth element equal to \u003ccode\u003eis !! i\u003c/code\u003e.  \n For the combination to be valid, the elements must all be unique, they \n must be in sorted order, and they all must be in the range \u003ccode\u003e0 .. n-1\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Choose",
        "fct-package": "permutation",
        "fct-signature": "Int -\u003e Int -\u003e [Int] -\u003e Choose",
        "fct-source": "src/Data-Choose.html#listChoose",
        "fct-type": "function",
        "title": "listChoose"
      },
      "index": {
        "description": "Construct combination from list of elements listChoose is creates combination of outcomes from possibilities initialized to have the th element equal to is For the combination to be valid the elements must all be unique they must be in sorted order and they all must be in the range n-1",
        "hierarchy": "Data Choose",
        "module": "Data.Choose",
        "name": "listChoose",
        "normalized": "Int-\u003eInt-\u003e[Int]-\u003eChoose",
        "package": "permutation",
        "partial": "Choose",
        "signature": "Int-\u003eInt-\u003e[Int]-\u003eChoose"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Choose.html#v:next",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the next combination in lexicographic order, or \u003ccode\u003eNothing\u003c/code\u003e if\n there are no further combinations.  Starting with the first combination\n and repeatedly calling this function will iterate through all combinations\n of a given order.\n\u003c/p\u003e",
        "fct-module": "Data.Choose",
        "fct-package": "permutation",
        "fct-signature": "Choose -\u003e Maybe Choose",
        "fct-source": "src/Data-Choose.html#next",
        "fct-type": "function",
        "title": "next"
      },
      "index": {
        "description": "Return the next combination in lexicographic order or Nothing if there are no further combinations Starting with the first combination and repeatedly calling this function will iterate through all combinations of given order",
        "hierarchy": "Data Choose",
        "module": "Data.Choose",
        "name": "next",
        "normalized": "Choose-\u003eMaybe Choose",
        "package": "permutation",
        "partial": "",
        "signature": "Choose-\u003eMaybe Choose"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Choose.html#v:possible",
      "description": {
        "fct-descr": "\u003cp\u003eGet the number of possibilities, \u003ccode\u003en\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Choose",
        "fct-package": "permutation",
        "fct-signature": "Choose -\u003e Int",
        "fct-source": "src/Data-Choose-Base.html#possible",
        "fct-type": "function",
        "title": "possible"
      },
      "index": {
        "description": "Get the number of possibilities",
        "hierarchy": "Data Choose",
        "module": "Data.Choose",
        "name": "possible",
        "normalized": "Choose-\u003eInt",
        "package": "permutation",
        "partial": "",
        "signature": "Choose-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Choose.html#v:prev",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the previous combination in lexicographic order, or \u003ccode\u003eNothing\u003c/code\u003e\n if such combination exists.\n\u003c/p\u003e",
        "fct-module": "Data.Choose",
        "fct-package": "permutation",
        "fct-signature": "Choose -\u003e Maybe Choose",
        "fct-source": "src/Data-Choose.html#prev",
        "fct-type": "function",
        "title": "prev"
      },
      "index": {
        "description": "Return the previous combination in lexicographic order or Nothing if such combination exists",
        "hierarchy": "Data Choose",
        "module": "Data.Choose",
        "name": "prev",
        "normalized": "Choose-\u003eMaybe Choose",
        "package": "permutation",
        "partial": "",
        "signature": "Choose-\u003eMaybe Choose"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Choose.html#v:size",
      "description": {
        "fct-descr": "\u003cp\u003eGet the number of outcomes, \u003ccode\u003ek\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Choose",
        "fct-package": "permutation",
        "fct-signature": "Choose -\u003e Int",
        "fct-source": "src/Data-Choose-Base.html#size",
        "fct-type": "function",
        "title": "size"
      },
      "index": {
        "description": "Get the number of outcomes",
        "hierarchy": "Data Choose",
        "module": "Data.Choose",
        "name": "size",
        "normalized": "Choose-\u003eInt",
        "package": "permutation",
        "partial": "",
        "signature": "Choose-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Choose.html#v:unsafeAt",
      "description": {
        "fct-module": "Data.Choose",
        "fct-package": "permutation",
        "fct-signature": "Choose -\u003e Int -\u003e Int",
        "fct-source": "src/Data-Choose-Base.html#unsafeAt",
        "fct-type": "function",
        "title": "unsafeAt"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Choose",
        "module": "Data.Choose",
        "name": "unsafeAt",
        "normalized": "Choose-\u003eInt-\u003eInt",
        "package": "permutation",
        "partial": "At",
        "signature": "Choose-\u003eInt-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Permute-IO.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMutable permutations in the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Permute.IO",
        "fct-package": "permutation",
        "fct-signature": "module",
        "fct-source": "src/Data-Permute-IO.html",
        "fct-type": "module",
        "title": "IO"
      },
      "index": {
        "description": "Mutable permutations in the IO monad",
        "hierarchy": "Data Permute IO",
        "module": "Data.Permute.IO",
        "name": "IO",
        "normalized": "",
        "package": "permutation",
        "partial": "IO",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Permute-IO.html#t:IOPermute",
      "description": {
        "fct-descr": "\u003cp\u003eA mutable permutation that can be manipulated in the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
        "fct-module": "Data.Permute.IO",
        "fct-package": "permutation",
        "fct-signature": "data",
        "fct-source": "src/Data-Permute-IOBase.html#IOPermute",
        "fct-type": "data",
        "title": "IOPermute"
      },
      "index": {
        "description": "mutable permutation that can be manipulated in the IO monad",
        "hierarchy": "Data Permute IO",
        "module": "Data.Permute.IO",
        "name": "IOPermute",
        "normalized": "",
        "package": "permutation",
        "partial": "IOPermute",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Permute-MPermute.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn overloaded interface to mutable permutations. For permutation types which \n can be used with this interface, see \u003ca\u003eData.Permute.IO\u003c/a\u003e and \u003ca\u003eData.Permute.ST\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Permute.MPermute",
        "fct-package": "permutation",
        "fct-signature": "module",
        "fct-source": "src/Data-Permute-MPermute.html",
        "fct-type": "module",
        "title": "MPermute"
      },
      "index": {
        "description": "An overloaded interface to mutable permutations For permutation types which can be used with this interface see Data.Permute.IO and Data.Permute.ST",
        "hierarchy": "Data Permute MPermute",
        "module": "Data.Permute.MPermute",
        "name": "MPermute",
        "normalized": "",
        "package": "permutation",
        "partial": "MPermute",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Permute-MPermute.html#t:MPermute",
      "description": {
        "fct-descr": "\u003cp\u003eClass for representing a mutable permutation.  The type is parameterized\n over the type of the monad, \u003ccode\u003em\u003c/code\u003e, in which the mutable permutation will be\n manipulated.\n\u003c/p\u003e",
        "fct-module": "Data.Permute.MPermute",
        "fct-package": "permutation",
        "fct-signature": "class",
        "fct-source": "src/Data-Permute-MPermute.html#MPermute",
        "fct-type": "class",
        "title": "MPermute"
      },
      "index": {
        "description": "Class for representing mutable permutation The type is parameterized over the type of the monad in which the mutable permutation will be manipulated",
        "hierarchy": "Data Permute MPermute",
        "module": "Data.Permute.MPermute",
        "name": "MPermute",
        "normalized": "",
        "package": "permutation",
        "partial": "MPermute",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Permute-MPermute.html#v:copyInverse",
      "description": {
        "fct-descr": "\u003cp\u003eSet one permutation to be the inverse of another.  \n \u003ccode\u003ecopyInverse inv p\u003c/code\u003e computes the inverse of \u003ccode\u003ep\u003c/code\u003e and stores it in \u003ccode\u003einv\u003c/code\u003e.\n The two permutations must have the same size.\n\u003c/p\u003e",
        "fct-module": "Data.Permute.MPermute",
        "fct-package": "permutation",
        "fct-signature": "p -\u003e p -\u003e m ()",
        "fct-source": "src/Data-Permute-MPermute.html#copyInverse",
        "fct-type": "function",
        "title": "copyInverse"
      },
      "index": {
        "description": "Set one permutation to be the inverse of another copyInverse inv computes the inverse of and stores it in inv The two permutations must have the same size",
        "hierarchy": "Data Permute MPermute",
        "module": "Data.Permute.MPermute",
        "name": "copyInverse",
        "normalized": "a-\u003ea-\u003eb()",
        "package": "permutation",
        "partial": "Inverse",
        "signature": "p-\u003ep-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Permute-MPermute.html#v:copyPermute",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003ecopyPermute dst src\u003c/code\u003e copies the elements of the permutation \u003ccode\u003esrc\u003c/code\u003e\n into the permutation \u003ccode\u003edst\u003c/code\u003e.  The two permutations must have the same\n size.\n\u003c/p\u003e",
        "fct-module": "Data.Permute.MPermute",
        "fct-package": "permutation",
        "fct-signature": "p -\u003e p -\u003e m ()",
        "fct-source": "src/Data-Permute-MPermute.html#copyPermute",
        "fct-type": "function",
        "title": "copyPermute"
      },
      "index": {
        "description": "copyPermute dst src copies the elements of the permutation src into the permutation dst The two permutations must have the same size",
        "hierarchy": "Data Permute MPermute",
        "module": "Data.Permute.MPermute",
        "name": "copyPermute",
        "normalized": "a-\u003ea-\u003eb()",
        "package": "permutation",
        "partial": "Permute",
        "signature": "p-\u003ep-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Permute-MPermute.html#v:freeze",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a mutable permutation to an immutable one.\n\u003c/p\u003e",
        "fct-module": "Data.Permute.MPermute",
        "fct-package": "permutation",
        "fct-signature": "p -\u003e m Permute",
        "fct-source": "src/Data-Permute-MPermute.html#freeze",
        "fct-type": "function",
        "title": "freeze"
      },
      "index": {
        "description": "Convert mutable permutation to an immutable one",
        "hierarchy": "Data Permute MPermute",
        "module": "Data.Permute.MPermute",
        "name": "freeze",
        "normalized": "a-\u003eb Permute",
        "package": "permutation",
        "partial": "",
        "signature": "p-\u003em Permute"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Permute-MPermute.html#v:getCycleFrom",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003egetCycleFrom p i\u003c/code\u003e gets the list of elements reachable from \u003ccode\u003ei\u003c/code\u003e\n by repeated application of \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Permute.MPermute",
        "fct-package": "permutation",
        "fct-signature": "p -\u003e Int -\u003e m [Int]",
        "fct-source": "src/Data-Permute-MPermute.html#getCycleFrom",
        "fct-type": "function",
        "title": "getCycleFrom"
      },
      "index": {
        "description": "getCycleFrom gets the list of elements reachable from by repeated application of",
        "hierarchy": "Data Permute MPermute",
        "module": "Data.Permute.MPermute",
        "name": "getCycleFrom",
        "normalized": "a-\u003eInt-\u003eb[Int]",
        "package": "permutation",
        "partial": "Cycle From",
        "signature": "p-\u003eInt-\u003em[Int]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Permute-MPermute.html#v:getCycles",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003egetCycles p\u003c/code\u003e returns the list of disjoin cycles in \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Permute.MPermute",
        "fct-package": "permutation",
        "fct-signature": "p -\u003e m [[Int]]",
        "fct-source": "src/Data-Permute-MPermute.html#getCycles",
        "fct-type": "function",
        "title": "getCycles"
      },
      "index": {
        "description": "getCycles returns the list of disjoin cycles in",
        "hierarchy": "Data Permute MPermute",
        "module": "Data.Permute.MPermute",
        "name": "getCycles",
        "normalized": "a-\u003eb[[Int]]",
        "package": "permutation",
        "partial": "Cycles",
        "signature": "p-\u003em[[Int]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Permute-MPermute.html#v:getElem",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003egetElem p i\u003c/code\u003e gets the value of the \u003ccode\u003ei\u003c/code\u003eth element of the permutation\n \u003ccode\u003ep\u003c/code\u003e.  The index \u003ccode\u003ei\u003c/code\u003e must be in the range \u003ccode\u003e0..(n-1)\u003c/code\u003e, where \u003ccode\u003en\u003c/code\u003e is the\n size of the permutation.\n\u003c/p\u003e",
        "fct-module": "Data.Permute.MPermute",
        "fct-package": "permutation",
        "fct-signature": "p -\u003e Int -\u003e m Int",
        "fct-source": "src/Data-Permute-MPermute.html#getElem",
        "fct-type": "function",
        "title": "getElem"
      },
      "index": {
        "description": "getElem gets the value of the th element of the permutation The index must be in the range n-1 where is the size of the permutation",
        "hierarchy": "Data Permute MPermute",
        "module": "Data.Permute.MPermute",
        "name": "getElem",
        "normalized": "a-\u003eInt-\u003eb Int",
        "package": "permutation",
        "partial": "Elem",
        "signature": "p-\u003eInt-\u003em Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Permute-MPermute.html#v:getElems",
      "description": {
        "fct-descr": "\u003cp\u003eGet a lazy list of the permutation elements.  The laziness makes this\n function slightly dangerous if you are modifying the permutation.\n\u003c/p\u003e",
        "fct-module": "Data.Permute.MPermute",
        "fct-package": "permutation",
        "fct-signature": "p -\u003e m [Int]",
        "fct-source": "src/Data-Permute-MPermute.html#getElems",
        "fct-type": "method",
        "title": "getElems"
      },
      "index": {
        "description": "Get lazy list of the permutation elements The laziness makes this function slightly dangerous if you are modifying the permutation",
        "hierarchy": "Data Permute MPermute",
        "module": "Data.Permute.MPermute",
        "name": "getElems",
        "normalized": "a-\u003eb[Int]",
        "package": "permutation",
        "partial": "Elems",
        "signature": "p-\u003em[Int]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Permute-MPermute.html#v:getIndexOf",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003egetIndexOf p x\u003c/code\u003e returns \u003ccode\u003ei\u003c/code\u003e sutch that \u003ccode\u003egetElem p i\u003c/code\u003e equals \u003ccode\u003ex\u003c/code\u003e.  This\n is a linear-time operation.\n\u003c/p\u003e",
        "fct-module": "Data.Permute.MPermute",
        "fct-package": "permutation",
        "fct-signature": "p -\u003e Int -\u003e m Int",
        "fct-source": "src/Data-Permute-MPermute.html#getIndexOf",
        "fct-type": "function",
        "title": "getIndexOf"
      },
      "index": {
        "description": "getIndexOf returns sutch that getElem equals This is linear-time operation",
        "hierarchy": "Data Permute MPermute",
        "module": "Data.Permute.MPermute",
        "name": "getIndexOf",
        "normalized": "a-\u003eInt-\u003eb Int",
        "package": "permutation",
        "partial": "Index Of",
        "signature": "p-\u003eInt-\u003em Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Permute-MPermute.html#v:getInvSwaps",
      "description": {
        "fct-descr": "\u003cp\u003eGet a lazy list of swaps equivalent to the inverse of a permutation.\n\u003c/p\u003e",
        "fct-module": "Data.Permute.MPermute",
        "fct-package": "permutation",
        "fct-signature": "p -\u003e m [(Int, Int)]",
        "fct-source": "src/Data-Permute-MPermute.html#getInvSwaps",
        "fct-type": "function",
        "title": "getInvSwaps"
      },
      "index": {
        "description": "Get lazy list of swaps equivalent to the inverse of permutation",
        "hierarchy": "Data Permute MPermute",
        "module": "Data.Permute.MPermute",
        "name": "getInvSwaps",
        "normalized": "a-\u003eb[(Int,Int)]",
        "package": "permutation",
        "partial": "Inv Swaps",
        "signature": "p-\u003em[(Int,Int)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Permute-MPermute.html#v:getInverse",
      "description": {
        "fct-descr": "\u003cp\u003eCompute the inverse of a permutation.  \n\u003c/p\u003e",
        "fct-module": "Data.Permute.MPermute",
        "fct-package": "permutation",
        "fct-signature": "p -\u003e m p",
        "fct-source": "src/Data-Permute-MPermute.html#getInverse",
        "fct-type": "function",
        "title": "getInverse"
      },
      "index": {
        "description": "Compute the inverse of permutation",
        "hierarchy": "Data Permute MPermute",
        "module": "Data.Permute.MPermute",
        "name": "getInverse",
        "normalized": "a-\u003eb a",
        "package": "permutation",
        "partial": "Inverse",
        "signature": "p-\u003em p"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Permute-MPermute.html#v:getIsEven",
      "description": {
        "fct-descr": "\u003cp\u003eWhether or not the permutation is made from an even number of swaps\n\u003c/p\u003e",
        "fct-module": "Data.Permute.MPermute",
        "fct-package": "permutation",
        "fct-signature": "p -\u003e m Bool",
        "fct-source": "src/Data-Permute-MPermute.html#getIsEven",
        "fct-type": "function",
        "title": "getIsEven"
      },
      "index": {
        "description": "Whether or not the permutation is made from an even number of swaps",
        "hierarchy": "Data Permute MPermute",
        "module": "Data.Permute.MPermute",
        "name": "getIsEven",
        "normalized": "a-\u003eb Bool",
        "package": "permutation",
        "partial": "Is Even",
        "signature": "p-\u003em Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Permute-MPermute.html#v:getOrder",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003egetOrder n xs\u003c/code\u003e returns a permutation which rearranges the first \u003ccode\u003en\u003c/code\u003e\n elements of \u003ccode\u003exs\u003c/code\u003e into ascending order. The results are undefined if \u003ccode\u003en\u003c/code\u003e is \n greater than the length of \u003ccode\u003exs\u003c/code\u003e.  This is a special case of \u003ccode\u003e\u003ca\u003egetOrderBy\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Permute.MPermute",
        "fct-package": "permutation",
        "fct-signature": "Int -\u003e [a] -\u003e m p",
        "fct-source": "src/Data-Permute-MPermute.html#getOrder",
        "fct-type": "function",
        "title": "getOrder"
      },
      "index": {
        "description": "getOrder xs returns permutation which rearranges the first elements of xs into ascending order The results are undefined if is greater than the length of xs This is special case of getOrderBy",
        "hierarchy": "Data Permute MPermute",
        "module": "Data.Permute.MPermute",
        "name": "getOrder",
        "normalized": "Int-\u003e[a]-\u003eb c",
        "package": "permutation",
        "partial": "Order",
        "signature": "Int-\u003e[a]-\u003em p"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Permute-MPermute.html#v:getOrderBy",
      "description": {
        "fct-module": "Data.Permute.MPermute",
        "fct-package": "permutation",
        "fct-signature": "(a -\u003e a -\u003e Ordering) -\u003e Int -\u003e [a] -\u003e m p",
        "fct-source": "src/Data-Permute-MPermute.html#getOrderBy",
        "fct-type": "function",
        "title": "getOrderBy"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Permute MPermute",
        "module": "Data.Permute.MPermute",
        "name": "getOrderBy",
        "normalized": "(a-\u003ea-\u003eOrdering)-\u003eInt-\u003e[a]-\u003eb c",
        "package": "permutation",
        "partial": "Order By",
        "signature": "(a-\u003ea-\u003eOrdering)-\u003eInt-\u003e[a]-\u003em p"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Permute-MPermute.html#v:getPeriod",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003egetPeriod p\u003c/code\u003e - The first power of \u003ccode\u003ep\u003c/code\u003e that is the identity permutation\n\u003c/p\u003e",
        "fct-module": "Data.Permute.MPermute",
        "fct-package": "permutation",
        "fct-signature": "p -\u003e m Integer",
        "fct-source": "src/Data-Permute-MPermute.html#getPeriod",
        "fct-type": "function",
        "title": "getPeriod"
      },
      "index": {
        "description": "getPeriod The first power of that is the identity permutation",
        "hierarchy": "Data Permute MPermute",
        "module": "Data.Permute.MPermute",
        "name": "getPeriod",
        "normalized": "a-\u003eb Integer",
        "package": "permutation",
        "partial": "Period",
        "signature": "p-\u003em Integer"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Permute-MPermute.html#v:getRank",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003egetRank n xs\u003c/code\u003e eturns a permutation, the inverse of which rearranges the \n first \u003ccode\u003en\u003c/code\u003e elements of \u003ccode\u003exs\u003c/code\u003e into ascending order. The returned permutation, \n \u003ccode\u003ep\u003c/code\u003e, has the property that \u003ccode\u003ep[i]\u003c/code\u003e is the rank of the \u003ccode\u003ei\u003c/code\u003eth element of \u003ccode\u003exs\u003c/code\u003e. \n The results are undefined if \u003ccode\u003en\u003c/code\u003e is greater than the length of \u003ccode\u003exs\u003c/code\u003e.\n This is a special case of \u003ccode\u003e\u003ca\u003egetRankBy\u003c/a\u003e\u003c/code\u003e.  \n\u003c/p\u003e",
        "fct-module": "Data.Permute.MPermute",
        "fct-package": "permutation",
        "fct-signature": "Int -\u003e [a] -\u003e m p",
        "fct-source": "src/Data-Permute-MPermute.html#getRank",
        "fct-type": "function",
        "title": "getRank"
      },
      "index": {
        "description": "getRank xs eturns permutation the inverse of which rearranges the first elements of xs into ascending order The returned permutation has the property that is the rank of the th element of xs The results are undefined if is greater than the length of xs This is special case of getRankBy",
        "hierarchy": "Data Permute MPermute",
        "module": "Data.Permute.MPermute",
        "name": "getRank",
        "normalized": "Int-\u003e[a]-\u003eb c",
        "package": "permutation",
        "partial": "Rank",
        "signature": "Int-\u003e[a]-\u003em p"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Permute-MPermute.html#v:getRankBy",
      "description": {
        "fct-module": "Data.Permute.MPermute",
        "fct-package": "permutation",
        "fct-signature": "(a -\u003e a -\u003e Ordering) -\u003e Int -\u003e [a] -\u003e m p",
        "fct-source": "src/Data-Permute-MPermute.html#getRankBy",
        "fct-type": "function",
        "title": "getRankBy"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Permute MPermute",
        "module": "Data.Permute.MPermute",
        "name": "getRankBy",
        "normalized": "(a-\u003ea-\u003eOrdering)-\u003eInt-\u003e[a]-\u003eb c",
        "package": "permutation",
        "partial": "Rank By",
        "signature": "(a-\u003ea-\u003eOrdering)-\u003eInt-\u003e[a]-\u003em p"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Permute-MPermute.html#v:getSize",
      "description": {
        "fct-descr": "\u003cp\u003eGet the size of a permutation.\n\u003c/p\u003e",
        "fct-module": "Data.Permute.MPermute",
        "fct-package": "permutation",
        "fct-signature": "p -\u003e m Int",
        "fct-source": "src/Data-Permute-MPermute.html#getSize",
        "fct-type": "method",
        "title": "getSize"
      },
      "index": {
        "description": "Get the size of permutation",
        "hierarchy": "Data Permute MPermute",
        "module": "Data.Permute.MPermute",
        "name": "getSize",
        "normalized": "a-\u003eb Int",
        "package": "permutation",
        "partial": "Size",
        "signature": "p-\u003em Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Permute-MPermute.html#v:getSort",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003egetSort n xs\u003c/code\u003e sorts the first \u003ccode\u003en\u003c/code\u003e elements of \u003ccode\u003exs\u003c/code\u003e and returns a \n permutation which transforms \u003ccode\u003exs\u003c/code\u003e into sorted order.  The results are\n undefined if \u003ccode\u003en\u003c/code\u003e is greater than the length of \u003ccode\u003exs\u003c/code\u003e.  This is a special \n case of \u003ccode\u003e\u003ca\u003egetSortBy\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Permute.MPermute",
        "fct-package": "permutation",
        "fct-signature": "Int -\u003e [a] -\u003e m ([a], p)",
        "fct-source": "src/Data-Permute-MPermute.html#getSort",
        "fct-type": "function",
        "title": "getSort"
      },
      "index": {
        "description": "getSort xs sorts the first elements of xs and returns permutation which transforms xs into sorted order The results are undefined if is greater than the length of xs This is special case of getSortBy",
        "hierarchy": "Data Permute MPermute",
        "module": "Data.Permute.MPermute",
        "name": "getSort",
        "normalized": "Int-\u003e[a]-\u003eb([a],c)",
        "package": "permutation",
        "partial": "Sort",
        "signature": "Int-\u003e[a]-\u003em([a],p)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Permute-MPermute.html#v:getSortBy",
      "description": {
        "fct-module": "Data.Permute.MPermute",
        "fct-package": "permutation",
        "fct-signature": "(a -\u003e a -\u003e Ordering) -\u003e Int -\u003e [a] -\u003e m ([a], p)",
        "fct-source": "src/Data-Permute-MPermute.html#getSortBy",
        "fct-type": "function",
        "title": "getSortBy"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Permute MPermute",
        "module": "Data.Permute.MPermute",
        "name": "getSortBy",
        "normalized": "(a-\u003ea-\u003eOrdering)-\u003eInt-\u003e[a]-\u003eb([a],c)",
        "package": "permutation",
        "partial": "Sort By",
        "signature": "(a-\u003ea-\u003eOrdering)-\u003eInt-\u003e[a]-\u003em([a],p)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Permute-MPermute.html#v:getSwaps",
      "description": {
        "fct-descr": "\u003cp\u003eGet a lazy list of swaps equivalent to the permutation.  A result of\n \u003ccode\u003e[ (i0,j0), (i1,j1), ..., (ik,jk) ]\u003c/code\u003e means swap \u003ccode\u003ei0 \u003c-\u003e j0\u003c/code\u003e, \n then \u003ccode\u003ei1 \u003c-\u003e j1\u003c/code\u003e, and so on until \u003ccode\u003eik \u003c-\u003e jk\u003c/code\u003e.  The laziness makes this\n function slightly dangerous if you are modifying the permutation.\n\u003c/p\u003e",
        "fct-module": "Data.Permute.MPermute",
        "fct-package": "permutation",
        "fct-signature": "p -\u003e m [(Int, Int)]",
        "fct-source": "src/Data-Permute-MPermute.html#getSwaps",
        "fct-type": "function",
        "title": "getSwaps"
      },
      "index": {
        "description": "Get lazy list of swaps equivalent to the permutation result of i0 j0 i1 j1 ik jk means swap i0 j0 then i1 j1 and so on until ik jk The laziness makes this function slightly dangerous if you are modifying the permutation",
        "hierarchy": "Data Permute MPermute",
        "module": "Data.Permute.MPermute",
        "name": "getSwaps",
        "normalized": "a-\u003eb[(Int,Int)]",
        "package": "permutation",
        "partial": "Swaps",
        "signature": "p-\u003em[(Int,Int)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Permute-MPermute.html#v:isValid",
      "description": {
        "fct-descr": "\u003cp\u003eReturns whether or not the permutation is valid.  For it to be valid,\n the numbers \u003ccode\u003e0,...,(n-1)\u003c/code\u003e must all appear exactly once in the stored\n values \u003ccode\u003ep[0],...,p[n-1]\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Permute.MPermute",
        "fct-package": "permutation",
        "fct-signature": "p -\u003e m Bool",
        "fct-source": "src/Data-Permute-MPermute.html#isValid",
        "fct-type": "function",
        "title": "isValid"
      },
      "index": {
        "description": "Returns whether or not the permutation is valid For it to be valid the numbers n-1 must all appear exactly once in the stored values n-1",
        "hierarchy": "Data Permute MPermute",
        "module": "Data.Permute.MPermute",
        "name": "isValid",
        "normalized": "a-\u003eb Bool",
        "package": "permutation",
        "partial": "Valid",
        "signature": "p-\u003em Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Permute-MPermute.html#v:newCopyPermute",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a new permutation by copying another.\n\u003c/p\u003e",
        "fct-module": "Data.Permute.MPermute",
        "fct-package": "permutation",
        "fct-signature": "p -\u003e m p",
        "fct-source": "src/Data-Permute-MPermute.html#newCopyPermute",
        "fct-type": "function",
        "title": "newCopyPermute"
      },
      "index": {
        "description": "Construct new permutation by copying another",
        "hierarchy": "Data Permute MPermute",
        "module": "Data.Permute.MPermute",
        "name": "newCopyPermute",
        "normalized": "a-\u003eb a",
        "package": "permutation",
        "partial": "Copy Permute",
        "signature": "p-\u003em p"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Permute-MPermute.html#v:newCyclesPermute",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a permutation from a list of disjoint cycles.\n \u003ccode\u003enewCyclesPermute n cs\u003c/code\u003e creates a permutation of size \u003ccode\u003en\u003c/code\u003e which is the\n composition of the cycles \u003ccode\u003ecs\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Permute.MPermute",
        "fct-package": "permutation",
        "fct-signature": "Int -\u003e [[Int]] -\u003e m p",
        "fct-source": "src/Data-Permute-MPermute.html#newCyclesPermute",
        "fct-type": "function",
        "title": "newCyclesPermute"
      },
      "index": {
        "description": "Construct permutation from list of disjoint cycles newCyclesPermute cs creates permutation of size which is the composition of the cycles cs",
        "hierarchy": "Data Permute MPermute",
        "module": "Data.Permute.MPermute",
        "name": "newCyclesPermute",
        "normalized": "Int-\u003e[[Int]]-\u003ea b",
        "package": "permutation",
        "partial": "Cycles Permute",
        "signature": "Int-\u003e[[Int]]-\u003em p"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Permute-MPermute.html#v:newListPermute",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a permutation from a list of elements.  \n \u003ccode\u003enewListPermute n is\u003c/code\u003e creates a permutation of size \u003ccode\u003en\u003c/code\u003e with\n the \u003ccode\u003ei\u003c/code\u003eth element equal to \u003ccode\u003eis !! i\u003c/code\u003e.  For the permutation to be valid,\n the list \u003ccode\u003eis\u003c/code\u003e must have length \u003ccode\u003en\u003c/code\u003e and contain the indices \u003ccode\u003e0..(n-1)\u003c/code\u003e \n exactly once each.\n\u003c/p\u003e",
        "fct-module": "Data.Permute.MPermute",
        "fct-package": "permutation",
        "fct-signature": "Int -\u003e [Int] -\u003e m p",
        "fct-source": "src/Data-Permute-MPermute.html#newListPermute",
        "fct-type": "function",
        "title": "newListPermute"
      },
      "index": {
        "description": "Construct permutation from list of elements newListPermute is creates permutation of size with the th element equal to is For the permutation to be valid the list is must have length and contain the indices n-1 exactly once each",
        "hierarchy": "Data Permute MPermute",
        "module": "Data.Permute.MPermute",
        "name": "newListPermute",
        "normalized": "Int-\u003e[Int]-\u003ea b",
        "package": "permutation",
        "partial": "List Permute",
        "signature": "Int-\u003e[Int]-\u003em p"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Permute-MPermute.html#v:newPermute",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new permutation initialized to be the identity.\n\u003c/p\u003e",
        "fct-module": "Data.Permute.MPermute",
        "fct-package": "permutation",
        "fct-signature": "Int -\u003e m p",
        "fct-source": "src/Data-Permute-MPermute.html#newPermute",
        "fct-type": "method",
        "title": "newPermute"
      },
      "index": {
        "description": "Create new permutation initialized to be the identity",
        "hierarchy": "Data Permute MPermute",
        "module": "Data.Permute.MPermute",
        "name": "newPermute",
        "normalized": "Int-\u003ea b",
        "package": "permutation",
        "partial": "Permute",
        "signature": "Int-\u003em p"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Permute-MPermute.html#v:newPermute_",
      "description": {
        "fct-descr": "\u003cp\u003eAllocate a new permutation but do not initialize it.\n\u003c/p\u003e",
        "fct-module": "Data.Permute.MPermute",
        "fct-package": "permutation",
        "fct-signature": "Int -\u003e m p",
        "fct-source": "src/Data-Permute-MPermute.html#newPermute_",
        "fct-type": "method",
        "title": "newPermute_"
      },
      "index": {
        "description": "Allocate new permutation but do not initialize it",
        "hierarchy": "Data Permute MPermute",
        "module": "Data.Permute.MPermute",
        "name": "newPermute_",
        "normalized": "Int-\u003ea b",
        "package": "permutation",
        "partial": "Permute",
        "signature": "Int-\u003em p"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Permute-MPermute.html#v:newSwapsPermute",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a permutation from a list of swaps.\n \u003ccode\u003enewSwapsPermute n ss\u003c/code\u003e creates a permutation of size \u003ccode\u003en\u003c/code\u003e given a\n sequence of swaps.\n If \u003ccode\u003ess\u003c/code\u003e is \u003ccode\u003e[(i0,j0), (i1,j1), ..., (ik,jk)]\u003c/code\u003e, the\n sequence of swaps is\n \u003ccode\u003ei0 \u003c-\u003e j0\u003c/code\u003e, then \n \u003ccode\u003ei1 \u003c-\u003e j1\u003c/code\u003e, and so on until\n \u003ccode\u003eik \u003c-\u003e jk\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Permute.MPermute",
        "fct-package": "permutation",
        "fct-signature": "Int -\u003e [(Int, Int)] -\u003e m p",
        "fct-source": "src/Data-Permute-MPermute.html#newSwapsPermute",
        "fct-type": "function",
        "title": "newSwapsPermute"
      },
      "index": {
        "description": "Construct permutation from list of swaps newSwapsPermute ss creates permutation of size given sequence of swaps If ss is i0 j0 i1 j1 ik jk the sequence of swaps is i0 j0 then i1 j1 and so on until ik jk",
        "hierarchy": "Data Permute MPermute",
        "module": "Data.Permute.MPermute",
        "name": "newSwapsPermute",
        "normalized": "Int-\u003e[(Int,Int)]-\u003ea b",
        "package": "permutation",
        "partial": "Swaps Permute",
        "signature": "Int-\u003e[(Int,Int)]-\u003em p"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Permute-MPermute.html#v:setElem",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003esetElem p i x\u003c/code\u003e sets the value of the \u003ccode\u003ei\u003c/code\u003eth element of the permutation\n \u003ccode\u003ep\u003c/code\u003e.  The index \u003ccode\u003ei\u003c/code\u003e must be in the range \u003ccode\u003e0..(n-1)\u003c/code\u003e, where \u003ccode\u003en\u003c/code\u003e is the\n size of the permutation.\n\u003c/p\u003e",
        "fct-module": "Data.Permute.MPermute",
        "fct-package": "permutation",
        "fct-signature": "p -\u003e Int -\u003e Int -\u003e m ()",
        "fct-source": "src/Data-Permute-MPermute.html#setElem",
        "fct-type": "function",
        "title": "setElem"
      },
      "index": {
        "description": "setElem sets the value of the th element of the permutation The index must be in the range n-1 where is the size of the permutation",
        "hierarchy": "Data Permute MPermute",
        "module": "Data.Permute.MPermute",
        "name": "setElem",
        "normalized": "a-\u003eInt-\u003eInt-\u003eb()",
        "package": "permutation",
        "partial": "Elem",
        "signature": "p-\u003eInt-\u003eInt-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Permute-MPermute.html#v:setElems",
      "description": {
        "fct-descr": "\u003cp\u003eSet all the values of a permutation from a list of elements.\n\u003c/p\u003e",
        "fct-module": "Data.Permute.MPermute",
        "fct-package": "permutation",
        "fct-signature": "p -\u003e [Int] -\u003e m ()",
        "fct-source": "src/Data-Permute-MPermute.html#setElems",
        "fct-type": "method",
        "title": "setElems"
      },
      "index": {
        "description": "Set all the values of permutation from list of elements",
        "hierarchy": "Data Permute MPermute",
        "module": "Data.Permute.MPermute",
        "name": "setElems",
        "normalized": "a-\u003e[Int]-\u003eb()",
        "package": "permutation",
        "partial": "Elems",
        "signature": "p-\u003e[Int]-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Permute-MPermute.html#v:setIdentity",
      "description": {
        "fct-descr": "\u003cp\u003eSet a permutation to the identity.\n\u003c/p\u003e",
        "fct-module": "Data.Permute.MPermute",
        "fct-package": "permutation",
        "fct-signature": "p -\u003e m ()",
        "fct-source": "src/Data-Permute-MPermute.html#setIdentity",
        "fct-type": "function",
        "title": "setIdentity"
      },
      "index": {
        "description": "Set permutation to the identity",
        "hierarchy": "Data Permute MPermute",
        "module": "Data.Permute.MPermute",
        "name": "setIdentity",
        "normalized": "a-\u003eb()",
        "package": "permutation",
        "partial": "Identity",
        "signature": "p-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Permute-MPermute.html#v:setNext",
      "description": {
        "fct-descr": "\u003cp\u003eAdvance a permutation to the next permutation in lexicogrphic order and\n return \u003ccode\u003eTrue\u003c/code\u003e.  If no further permutaitons are available, return \u003ccode\u003eFalse\u003c/code\u003e and\n leave the permutation unmodified.  Starting with the idendity permutation \n and repeatedly calling \u003ccode\u003esetNext\u003c/code\u003e will iterate through all permutations of a \n given size.\n\u003c/p\u003e",
        "fct-module": "Data.Permute.MPermute",
        "fct-package": "permutation",
        "fct-signature": "p -\u003e m Bool",
        "fct-source": "src/Data-Permute-MPermute.html#setNext",
        "fct-type": "function",
        "title": "setNext"
      },
      "index": {
        "description": "Advance permutation to the next permutation in lexicogrphic order and return True If no further permutaitons are available return False and leave the permutation unmodified Starting with the idendity permutation and repeatedly calling setNext will iterate through all permutations of given size",
        "hierarchy": "Data Permute MPermute",
        "module": "Data.Permute.MPermute",
        "name": "setNext",
        "normalized": "a-\u003eb Bool",
        "package": "permutation",
        "partial": "Next",
        "signature": "p-\u003em Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Permute-MPermute.html#v:setPrev",
      "description": {
        "fct-descr": "\u003cp\u003eStep backwards to the previous permutation in lexicographic order and\n return \u003ccode\u003eTrue\u003c/code\u003e.  If there is no previous permutation, return \u003ccode\u003eFalse\u003c/code\u003e and\n leave the permutation unmodified.\n\u003c/p\u003e",
        "fct-module": "Data.Permute.MPermute",
        "fct-package": "permutation",
        "fct-signature": "p -\u003e m Bool",
        "fct-source": "src/Data-Permute-MPermute.html#setPrev",
        "fct-type": "function",
        "title": "setPrev"
      },
      "index": {
        "description": "Step backwards to the previous permutation in lexicographic order and return True If there is no previous permutation return False and leave the permutation unmodified",
        "hierarchy": "Data Permute MPermute",
        "module": "Data.Permute.MPermute",
        "name": "setPrev",
        "normalized": "a-\u003eb Bool",
        "package": "permutation",
        "partial": "Prev",
        "signature": "p-\u003em Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Permute-MPermute.html#v:swapElems",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eswapElems p i j\u003c/code\u003e exchanges the \u003ccode\u003ei\u003c/code\u003eth and \u003ccode\u003ej\u003c/code\u003eth elements of the \n permutation \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Permute.MPermute",
        "fct-package": "permutation",
        "fct-signature": "p -\u003e Int -\u003e Int -\u003e m ()",
        "fct-source": "src/Data-Permute-MPermute.html#swapElems",
        "fct-type": "function",
        "title": "swapElems"
      },
      "index": {
        "description": "swapElems exchanges the th and th elements of the permutation",
        "hierarchy": "Data Permute MPermute",
        "module": "Data.Permute.MPermute",
        "name": "swapElems",
        "normalized": "a-\u003eInt-\u003eInt-\u003eb()",
        "package": "permutation",
        "partial": "Elems",
        "signature": "p-\u003eInt-\u003eInt-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Permute-MPermute.html#v:thaw",
      "description": {
        "fct-descr": "\u003cp\u003eConvert an immutable permutation to a mutable one.\n\u003c/p\u003e",
        "fct-module": "Data.Permute.MPermute",
        "fct-package": "permutation",
        "fct-signature": "Permute -\u003e m p",
        "fct-source": "src/Data-Permute-MPermute.html#thaw",
        "fct-type": "function",
        "title": "thaw"
      },
      "index": {
        "description": "Convert an immutable permutation to mutable one",
        "hierarchy": "Data Permute MPermute",
        "module": "Data.Permute.MPermute",
        "name": "thaw",
        "normalized": "Permute-\u003ea b",
        "package": "permutation",
        "partial": "",
        "signature": "Permute-\u003em p"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Permute-MPermute.html#v:unsafeFreeze",
      "description": {
        "fct-module": "Data.Permute.MPermute",
        "fct-package": "permutation",
        "fct-signature": "p -\u003e m Permute",
        "fct-source": "src/Data-Permute-MPermute.html#unsafeFreeze",
        "fct-type": "method",
        "title": "unsafeFreeze"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Permute MPermute",
        "module": "Data.Permute.MPermute",
        "name": "unsafeFreeze",
        "normalized": "a-\u003eb Permute",
        "package": "permutation",
        "partial": "Freeze",
        "signature": "p-\u003em Permute"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Permute-MPermute.html#v:unsafeGetElem",
      "description": {
        "fct-module": "Data.Permute.MPermute",
        "fct-package": "permutation",
        "fct-signature": "p -\u003e Int -\u003e m Int",
        "fct-source": "src/Data-Permute-MPermute.html#unsafeGetElem",
        "fct-type": "method",
        "title": "unsafeGetElem"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Permute MPermute",
        "module": "Data.Permute.MPermute",
        "name": "unsafeGetElem",
        "normalized": "a-\u003eInt-\u003eb Int",
        "package": "permutation",
        "partial": "Get Elem",
        "signature": "p-\u003eInt-\u003em Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Permute-MPermute.html#v:unsafeNewCyclesPermute",
      "description": {
        "fct-module": "Data.Permute.MPermute",
        "fct-package": "permutation",
        "fct-signature": "Int -\u003e [[Int]] -\u003e m p",
        "fct-source": "src/Data-Permute-MPermute.html#unsafeNewCyclesPermute",
        "fct-type": "function",
        "title": "unsafeNewCyclesPermute"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Permute MPermute",
        "module": "Data.Permute.MPermute",
        "name": "unsafeNewCyclesPermute",
        "normalized": "Int-\u003e[[Int]]-\u003ea b",
        "package": "permutation",
        "partial": "New Cycles Permute",
        "signature": "Int-\u003e[[Int]]-\u003em p"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Permute-MPermute.html#v:unsafeNewListPermute",
      "description": {
        "fct-module": "Data.Permute.MPermute",
        "fct-package": "permutation",
        "fct-signature": "Int -\u003e [Int] -\u003e m p",
        "fct-source": "src/Data-Permute-MPermute.html#unsafeNewListPermute",
        "fct-type": "function",
        "title": "unsafeNewListPermute"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Permute MPermute",
        "module": "Data.Permute.MPermute",
        "name": "unsafeNewListPermute",
        "normalized": "Int-\u003e[Int]-\u003ea b",
        "package": "permutation",
        "partial": "New List Permute",
        "signature": "Int-\u003e[Int]-\u003em p"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Permute-MPermute.html#v:unsafeNewSwapsPermute",
      "description": {
        "fct-module": "Data.Permute.MPermute",
        "fct-package": "permutation",
        "fct-signature": "Int -\u003e [(Int, Int)] -\u003e m p",
        "fct-source": "src/Data-Permute-MPermute.html#unsafeNewSwapsPermute",
        "fct-type": "function",
        "title": "unsafeNewSwapsPermute"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Permute MPermute",
        "module": "Data.Permute.MPermute",
        "name": "unsafeNewSwapsPermute",
        "normalized": "Int-\u003e[(Int,Int)]-\u003ea b",
        "package": "permutation",
        "partial": "New Swaps Permute",
        "signature": "Int-\u003e[(Int,Int)]-\u003em p"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Permute-MPermute.html#v:unsafeSetElem",
      "description": {
        "fct-module": "Data.Permute.MPermute",
        "fct-package": "permutation",
        "fct-signature": "p -\u003e Int -\u003e Int -\u003e m ()",
        "fct-source": "src/Data-Permute-MPermute.html#unsafeSetElem",
        "fct-type": "method",
        "title": "unsafeSetElem"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Permute MPermute",
        "module": "Data.Permute.MPermute",
        "name": "unsafeSetElem",
        "normalized": "a-\u003eInt-\u003eInt-\u003eb()",
        "package": "permutation",
        "partial": "Set Elem",
        "signature": "p-\u003eInt-\u003eInt-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Permute-MPermute.html#v:unsafeSwapElems",
      "description": {
        "fct-module": "Data.Permute.MPermute",
        "fct-package": "permutation",
        "fct-signature": "p -\u003e Int -\u003e Int -\u003e m ()",
        "fct-source": "src/Data-Permute-MPermute.html#unsafeSwapElems",
        "fct-type": "method",
        "title": "unsafeSwapElems"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Permute MPermute",
        "module": "Data.Permute.MPermute",
        "name": "unsafeSwapElems",
        "normalized": "a-\u003eInt-\u003eInt-\u003eb()",
        "package": "permutation",
        "partial": "Swap Elems",
        "signature": "p-\u003eInt-\u003eInt-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Permute-MPermute.html#v:unsafeThaw",
      "description": {
        "fct-module": "Data.Permute.MPermute",
        "fct-package": "permutation",
        "fct-signature": "Permute -\u003e m p",
        "fct-source": "src/Data-Permute-MPermute.html#unsafeThaw",
        "fct-type": "method",
        "title": "unsafeThaw"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Permute MPermute",
        "module": "Data.Permute.MPermute",
        "name": "unsafeThaw",
        "normalized": "Permute-\u003ea b",
        "package": "permutation",
        "partial": "Thaw",
        "signature": "Permute-\u003em p"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Permute-ST.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMutable permutations in the \u003ccode\u003e\u003ca\u003eST\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Permute.ST",
        "fct-package": "permutation",
        "fct-signature": "module",
        "fct-source": "src/Data-Permute-ST.html",
        "fct-type": "module",
        "title": "ST"
      },
      "index": {
        "description": "Mutable permutations in the ST monad",
        "hierarchy": "Data Permute ST",
        "module": "Data.Permute.ST",
        "name": "ST",
        "normalized": "",
        "package": "permutation",
        "partial": "ST",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Permute-ST.html#t:STPermute",
      "description": {
        "fct-descr": "\u003cp\u003eA mutable permutation that can be manipulated in the \u003ccode\u003e\u003ca\u003eST\u003c/a\u003e\u003c/code\u003e monad. The\n type argument \u003ccode\u003es\u003c/code\u003e is the state variable argument for the \u003ccode\u003e\u003ca\u003eST\u003c/a\u003e\u003c/code\u003e type.\n\u003c/p\u003e",
        "fct-module": "Data.Permute.ST",
        "fct-package": "permutation",
        "fct-signature": "data",
        "fct-source": "src/Data-Permute-Base.html#STPermute",
        "fct-type": "data",
        "title": "STPermute"
      },
      "index": {
        "description": "mutable permutation that can be manipulated in the ST monad The type argument is the state variable argument for the ST type",
        "hierarchy": "Data Permute ST",
        "module": "Data.Permute.ST",
        "name": "STPermute",
        "normalized": "",
        "package": "permutation",
        "partial": "STPermute",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Permute-ST.html#v:runSTPermute",
      "description": {
        "fct-descr": "\u003cp\u003eA safe way to create and work with a mutable permutation before returning \n an immutable one for later perusal. This function avoids copying the \n permutation before returning it - it uses unsafeFreeze internally, but this \n wrapper is a safe interface to that function. \n\u003c/p\u003e",
        "fct-module": "Data.Permute.ST",
        "fct-package": "permutation",
        "fct-signature": "(forall s.  ST s (STPermute s)) -\u003e Permute",
        "fct-source": "src/Data-Permute-ST.html#runSTPermute",
        "fct-type": "function",
        "title": "runSTPermute"
      },
      "index": {
        "description": "safe way to create and work with mutable permutation before returning an immutable one for later perusal This function avoids copying the permutation before returning it it uses unsafeFreeze internally but this wrapper is safe interface to that function",
        "hierarchy": "Data Permute ST",
        "module": "Data.Permute.ST",
        "name": "runSTPermute",
        "normalized": "(a b ST c(STPermute c))-\u003ePermute",
        "package": "permutation",
        "partial": "STPermute",
        "signature": "(forall s. ST s(STPermute s))-\u003ePermute"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Permute.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eImmutable permutations.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Permute",
        "fct-package": "permutation",
        "fct-signature": "module",
        "fct-source": "src/Data-Permute.html",
        "fct-type": "module",
        "title": "Permute"
      },
      "index": {
        "description": "Immutable permutations",
        "hierarchy": "Data Permute",
        "module": "Data.Permute",
        "name": "Permute",
        "normalized": "",
        "package": "permutation",
        "partial": "Permute",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Permute.html#t:Permute",
      "description": {
        "fct-descr": "\u003cp\u003eThe immutable permutation data type.\n Internally, a permutation of size \u003ccode\u003en\u003c/code\u003e is stored as an\n \u003ccode\u003e0\u003c/code\u003e-based array of \u003ccode\u003en\u003c/code\u003e \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003es.  The permutation represents a reordering of\n the integers \u003ccode\u003e0, ..., (n-1)\u003c/code\u003e.  The permutation sents the value p[i] to \n \u003ccode\u003ei\u003c/code\u003e. \n\u003c/p\u003e",
        "fct-module": "Data.Permute",
        "fct-package": "permutation",
        "fct-signature": "data",
        "fct-source": "src/Data-Permute-Base.html#Permute",
        "fct-type": "data",
        "title": "Permute"
      },
      "index": {
        "description": "The immutable permutation data type Internally permutation of size is stored as an based array of Int The permutation represents reordering of the integers n-1 The permutation sents the value to",
        "hierarchy": "Data Permute",
        "module": "Data.Permute",
        "name": "Permute",
        "normalized": "",
        "package": "permutation",
        "partial": "Permute",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Permute.html#v:at",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eat p i\u003c/code\u003e gets the value of the \u003ccode\u003ei\u003c/code\u003eth element of the permutation\n \u003ccode\u003ep\u003c/code\u003e.  The index \u003ccode\u003ei\u003c/code\u003e must be in the range \u003ccode\u003e0..(n-1)\u003c/code\u003e, where \u003ccode\u003en\u003c/code\u003e is the\n size of the permutation.\n\u003c/p\u003e",
        "fct-module": "Data.Permute",
        "fct-package": "permutation",
        "fct-signature": "Permute -\u003e Int -\u003e Int",
        "fct-source": "src/Data-Permute.html#at",
        "fct-type": "function",
        "title": "at"
      },
      "index": {
        "description": "at gets the value of the th element of the permutation The index must be in the range n-1 where is the size of the permutation",
        "hierarchy": "Data Permute",
        "module": "Data.Permute",
        "name": "at",
        "normalized": "Permute-\u003eInt-\u003eInt",
        "package": "permutation",
        "partial": "",
        "signature": "Permute-\u003eInt-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Permute.html#v:cycleFrom",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003ecycleFrom p i\u003c/code\u003e gets the list of elements reachable from \u003ccode\u003ei\u003c/code\u003e by\n repeated application of \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Permute",
        "fct-package": "permutation",
        "fct-signature": "Permute -\u003e Int -\u003e [Int]",
        "fct-source": "src/Data-Permute.html#cycleFrom",
        "fct-type": "function",
        "title": "cycleFrom"
      },
      "index": {
        "description": "cycleFrom gets the list of elements reachable from by repeated application of",
        "hierarchy": "Data Permute",
        "module": "Data.Permute",
        "name": "cycleFrom",
        "normalized": "Permute-\u003eInt-\u003e[Int]",
        "package": "permutation",
        "partial": "From",
        "signature": "Permute-\u003eInt-\u003e[Int]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Permute.html#v:cycles",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003ecycles p\u003c/code\u003e returns the list of disjoin cycles in \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Permute",
        "fct-package": "permutation",
        "fct-signature": "Permute -\u003e [[Int]]",
        "fct-source": "src/Data-Permute.html#cycles",
        "fct-type": "function",
        "title": "cycles"
      },
      "index": {
        "description": "cycles returns the list of disjoin cycles in",
        "hierarchy": "Data Permute",
        "module": "Data.Permute",
        "name": "cycles",
        "normalized": "Permute-\u003e[[Int]]",
        "package": "permutation",
        "partial": "",
        "signature": "Permute-\u003e[[Int]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Permute.html#v:cyclesPermute",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a permutation from a list of disjoint cycles.\n \u003ccode\u003ecyclesPermute n cs\u003c/code\u003e creates a permutation of size \u003ccode\u003en\u003c/code\u003e which is the\n composition of the cycles \u003ccode\u003ecs\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Permute",
        "fct-package": "permutation",
        "fct-signature": "Int -\u003e [[Int]] -\u003e Permute",
        "fct-source": "src/Data-Permute.html#cyclesPermute",
        "fct-type": "function",
        "title": "cyclesPermute"
      },
      "index": {
        "description": "Construct permutation from list of disjoint cycles cyclesPermute cs creates permutation of size which is the composition of the cycles cs",
        "hierarchy": "Data Permute",
        "module": "Data.Permute",
        "name": "cyclesPermute",
        "normalized": "Int-\u003e[[Int]]-\u003ePermute",
        "package": "permutation",
        "partial": "Permute",
        "signature": "Int-\u003e[[Int]]-\u003ePermute"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Permute.html#v:elems",
      "description": {
        "fct-descr": "\u003cp\u003eGet a list of the permutation elements.\n\u003c/p\u003e",
        "fct-module": "Data.Permute",
        "fct-package": "permutation",
        "fct-signature": "Permute -\u003e [Int]",
        "fct-source": "src/Data-Permute-Base.html#elems",
        "fct-type": "function",
        "title": "elems"
      },
      "index": {
        "description": "Get list of the permutation elements",
        "hierarchy": "Data Permute",
        "module": "Data.Permute",
        "name": "elems",
        "normalized": "Permute-\u003e[Int]",
        "package": "permutation",
        "partial": "",
        "signature": "Permute-\u003e[Int]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Permute.html#v:indexOf",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eindexOf p x\u003c/code\u003e gets an index \u003ccode\u003ei\u003c/code\u003e such that \u003ccode\u003eat p i\u003c/code\u003e equals \u003ccode\u003ex\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Permute",
        "fct-package": "permutation",
        "fct-signature": "Permute -\u003e Int -\u003e Int",
        "fct-source": "src/Data-Permute.html#indexOf",
        "fct-type": "function",
        "title": "indexOf"
      },
      "index": {
        "description": "indexOf gets an index such that at equals",
        "hierarchy": "Data Permute",
        "module": "Data.Permute",
        "name": "indexOf",
        "normalized": "Permute-\u003eInt-\u003eInt",
        "package": "permutation",
        "partial": "Of",
        "signature": "Permute-\u003eInt-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Permute.html#v:invSwaps",
      "description": {
        "fct-descr": "\u003cp\u003eGet a list of swaps equivalent to the inverse of permutation.\n\u003c/p\u003e",
        "fct-module": "Data.Permute",
        "fct-package": "permutation",
        "fct-signature": "Permute -\u003e [(Int, Int)]",
        "fct-source": "src/Data-Permute.html#invSwaps",
        "fct-type": "function",
        "title": "invSwaps"
      },
      "index": {
        "description": "Get list of swaps equivalent to the inverse of permutation",
        "hierarchy": "Data Permute",
        "module": "Data.Permute",
        "name": "invSwaps",
        "normalized": "Permute-\u003e[(Int,Int)]",
        "package": "permutation",
        "partial": "Swaps",
        "signature": "Permute-\u003e[(Int,Int)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Permute.html#v:inverse",
      "description": {
        "fct-descr": "\u003cp\u003eGet the inverse of a permutation.\n\u003c/p\u003e",
        "fct-module": "Data.Permute",
        "fct-package": "permutation",
        "fct-signature": "Permute -\u003e Permute",
        "fct-source": "src/Data-Permute.html#inverse",
        "fct-type": "function",
        "title": "inverse"
      },
      "index": {
        "description": "Get the inverse of permutation",
        "hierarchy": "Data Permute",
        "module": "Data.Permute",
        "name": "inverse",
        "normalized": "Permute-\u003ePermute",
        "package": "permutation",
        "partial": "",
        "signature": "Permute-\u003ePermute"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Permute.html#v:isEven",
      "description": {
        "fct-descr": "\u003cp\u003eWhether or not the permutation is made from an even number of swaps\n\u003c/p\u003e",
        "fct-module": "Data.Permute",
        "fct-package": "permutation",
        "fct-signature": "Permute -\u003e Bool",
        "fct-source": "src/Data-Permute.html#isEven",
        "fct-type": "function",
        "title": "isEven"
      },
      "index": {
        "description": "Whether or not the permutation is made from an even number of swaps",
        "hierarchy": "Data Permute",
        "module": "Data.Permute",
        "name": "isEven",
        "normalized": "Permute-\u003eBool",
        "package": "permutation",
        "partial": "Even",
        "signature": "Permute-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Permute.html#v:listPermute",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a permutation from a list of elements.  \n \u003ccode\u003elistPermute n is\u003c/code\u003e creates a permutation of size \u003ccode\u003en\u003c/code\u003e with\n the \u003ccode\u003ei\u003c/code\u003eth element equal to \u003ccode\u003eis !! i\u003c/code\u003e.  For the permutation to be valid,\n the list \u003ccode\u003eis\u003c/code\u003e must have length \u003ccode\u003en\u003c/code\u003e and contain the indices \u003ccode\u003e0..(n-1)\u003c/code\u003e \n exactly once each.\n\u003c/p\u003e",
        "fct-module": "Data.Permute",
        "fct-package": "permutation",
        "fct-signature": "Int -\u003e [Int] -\u003e Permute",
        "fct-source": "src/Data-Permute.html#listPermute",
        "fct-type": "function",
        "title": "listPermute"
      },
      "index": {
        "description": "Construct permutation from list of elements listPermute is creates permutation of size with the th element equal to is For the permutation to be valid the list is must have length and contain the indices n-1 exactly once each",
        "hierarchy": "Data Permute",
        "module": "Data.Permute",
        "name": "listPermute",
        "normalized": "Int-\u003e[Int]-\u003ePermute",
        "package": "permutation",
        "partial": "Permute",
        "signature": "Int-\u003e[Int]-\u003ePermute"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Permute.html#v:next",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the next permutation in lexicographic order, or \u003ccode\u003eNothing\u003c/code\u003e if\n there are no further permutations.  Starting with the identity permutation\n and repeatedly calling this function will iterate through all permutations\n of a given order.\n\u003c/p\u003e",
        "fct-module": "Data.Permute",
        "fct-package": "permutation",
        "fct-signature": "Permute -\u003e Maybe Permute",
        "fct-source": "src/Data-Permute.html#next",
        "fct-type": "function",
        "title": "next"
      },
      "index": {
        "description": "Return the next permutation in lexicographic order or Nothing if there are no further permutations Starting with the identity permutation and repeatedly calling this function will iterate through all permutations of given order",
        "hierarchy": "Data Permute",
        "module": "Data.Permute",
        "name": "next",
        "normalized": "Permute-\u003eMaybe Permute",
        "package": "permutation",
        "partial": "",
        "signature": "Permute-\u003eMaybe Permute"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Permute.html#v:order",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eorder n xs\u003c/code\u003e returns a permutation which rearranges the first \u003ccode\u003en\u003c/code\u003e\n elements of \u003ccode\u003exs\u003c/code\u003e into ascending order. The results are undefined if \u003ccode\u003en\u003c/code\u003e is \n greater than the length of \u003ccode\u003exs\u003c/code\u003e.  This is a special case of \u003ccode\u003e\u003ca\u003eorderBy\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Permute",
        "fct-package": "permutation",
        "fct-signature": "Int -\u003e [a] -\u003e Permute",
        "fct-source": "src/Data-Permute.html#order",
        "fct-type": "function",
        "title": "order"
      },
      "index": {
        "description": "order xs returns permutation which rearranges the first elements of xs into ascending order The results are undefined if is greater than the length of xs This is special case of orderBy",
        "hierarchy": "Data Permute",
        "module": "Data.Permute",
        "name": "order",
        "normalized": "Int-\u003e[a]-\u003ePermute",
        "package": "permutation",
        "partial": "",
        "signature": "Int-\u003e[a]-\u003ePermute"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Permute.html#v:orderBy",
      "description": {
        "fct-module": "Data.Permute",
        "fct-package": "permutation",
        "fct-signature": "(a -\u003e a -\u003e Ordering) -\u003e Int -\u003e [a] -\u003e Permute",
        "fct-source": "src/Data-Permute.html#orderBy",
        "fct-type": "function",
        "title": "orderBy"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Permute",
        "module": "Data.Permute",
        "name": "orderBy",
        "normalized": "(a-\u003ea-\u003eOrdering)-\u003eInt-\u003e[a]-\u003ePermute",
        "package": "permutation",
        "partial": "By",
        "signature": "(a-\u003ea-\u003eOrdering)-\u003eInt-\u003e[a]-\u003ePermute"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Permute.html#v:period",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eperiod p\u003c/code\u003e - The first power of \u003ccode\u003ep\u003c/code\u003e that is the identity permutation\n\u003c/p\u003e",
        "fct-module": "Data.Permute",
        "fct-package": "permutation",
        "fct-signature": "Permute -\u003e Integer",
        "fct-source": "src/Data-Permute.html#period",
        "fct-type": "function",
        "title": "period"
      },
      "index": {
        "description": "period The first power of that is the identity permutation",
        "hierarchy": "Data Permute",
        "module": "Data.Permute",
        "name": "period",
        "normalized": "Permute-\u003eInteger",
        "package": "permutation",
        "partial": "",
        "signature": "Permute-\u003eInteger"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Permute.html#v:permute",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct an identity permutation of the given size.\n\u003c/p\u003e",
        "fct-module": "Data.Permute",
        "fct-package": "permutation",
        "fct-signature": "Int -\u003e Permute",
        "fct-source": "src/Data-Permute.html#permute",
        "fct-type": "function",
        "title": "permute"
      },
      "index": {
        "description": "Construct an identity permutation of the given size",
        "hierarchy": "Data Permute",
        "module": "Data.Permute",
        "name": "permute",
        "normalized": "Int-\u003ePermute",
        "package": "permutation",
        "partial": "",
        "signature": "Int-\u003ePermute"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Permute.html#v:prev",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the previous permutation in lexicographic order, or \u003ccode\u003eNothing\u003c/code\u003e\n if no such permutation exists.\n\u003c/p\u003e",
        "fct-module": "Data.Permute",
        "fct-package": "permutation",
        "fct-signature": "Permute -\u003e Maybe Permute",
        "fct-source": "src/Data-Permute.html#prev",
        "fct-type": "function",
        "title": "prev"
      },
      "index": {
        "description": "Return the previous permutation in lexicographic order or Nothing if no such permutation exists",
        "hierarchy": "Data Permute",
        "module": "Data.Permute",
        "name": "prev",
        "normalized": "Permute-\u003eMaybe Permute",
        "package": "permutation",
        "partial": "",
        "signature": "Permute-\u003eMaybe Permute"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Permute.html#v:rank",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003erank n xs\u003c/code\u003e eturns a permutation, the inverse of which rearranges the \n first \u003ccode\u003en\u003c/code\u003e elements of \u003ccode\u003exs\u003c/code\u003e into ascending order. The returned permutation, \n \u003ccode\u003ep\u003c/code\u003e, has the property that \u003ccode\u003ep[i]\u003c/code\u003e is the rank of the \u003ccode\u003ei\u003c/code\u003eth element of \u003ccode\u003exs\u003c/code\u003e. \n The results are undefined if \u003ccode\u003en\u003c/code\u003e is greater than the length of \u003ccode\u003exs\u003c/code\u003e.\n This is a special case of \u003ccode\u003e\u003ca\u003erankBy\u003c/a\u003e\u003c/code\u003e.  \n\u003c/p\u003e",
        "fct-module": "Data.Permute",
        "fct-package": "permutation",
        "fct-signature": "Int -\u003e [a] -\u003e Permute",
        "fct-source": "src/Data-Permute.html#rank",
        "fct-type": "function",
        "title": "rank"
      },
      "index": {
        "description": "rank xs eturns permutation the inverse of which rearranges the first elements of xs into ascending order The returned permutation has the property that is the rank of the th element of xs The results are undefined if is greater than the length of xs This is special case of rankBy",
        "hierarchy": "Data Permute",
        "module": "Data.Permute",
        "name": "rank",
        "normalized": "Int-\u003e[a]-\u003ePermute",
        "package": "permutation",
        "partial": "",
        "signature": "Int-\u003e[a]-\u003ePermute"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Permute.html#v:rankBy",
      "description": {
        "fct-module": "Data.Permute",
        "fct-package": "permutation",
        "fct-signature": "(a -\u003e a -\u003e Ordering) -\u003e Int -\u003e [a] -\u003e Permute",
        "fct-source": "src/Data-Permute.html#rankBy",
        "fct-type": "function",
        "title": "rankBy"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Permute",
        "module": "Data.Permute",
        "name": "rankBy",
        "normalized": "(a-\u003ea-\u003eOrdering)-\u003eInt-\u003e[a]-\u003ePermute",
        "package": "permutation",
        "partial": "By",
        "signature": "(a-\u003ea-\u003eOrdering)-\u003eInt-\u003e[a]-\u003ePermute"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Permute.html#v:size",
      "description": {
        "fct-descr": "\u003cp\u003eGet the size of the permutation.\n\u003c/p\u003e",
        "fct-module": "Data.Permute",
        "fct-package": "permutation",
        "fct-signature": "Permute -\u003e Int",
        "fct-source": "src/Data-Permute-Base.html#size",
        "fct-type": "function",
        "title": "size"
      },
      "index": {
        "description": "Get the size of the permutation",
        "hierarchy": "Data Permute",
        "module": "Data.Permute",
        "name": "size",
        "normalized": "Permute-\u003eInt",
        "package": "permutation",
        "partial": "",
        "signature": "Permute-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Permute.html#v:sort",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003esort n xs\u003c/code\u003e sorts the first \u003ccode\u003en\u003c/code\u003e elements of \u003ccode\u003exs\u003c/code\u003e and returns a \n permutation which transforms \u003ccode\u003exs\u003c/code\u003e into sorted order.  The results are\n undefined if \u003ccode\u003en\u003c/code\u003e is greater than the length of \u003ccode\u003exs\u003c/code\u003e.  This is a special \n case of \u003ccode\u003e\u003ca\u003esortBy\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Permute",
        "fct-package": "permutation",
        "fct-signature": "Int -\u003e [a] -\u003e ([a], Permute)",
        "fct-source": "src/Data-Permute.html#sort",
        "fct-type": "function",
        "title": "sort"
      },
      "index": {
        "description": "sort xs sorts the first elements of xs and returns permutation which transforms xs into sorted order The results are undefined if is greater than the length of xs This is special case of sortBy",
        "hierarchy": "Data Permute",
        "module": "Data.Permute",
        "name": "sort",
        "normalized": "Int-\u003e[a]-\u003e([a],Permute)",
        "package": "permutation",
        "partial": "",
        "signature": "Int-\u003e[a]-\u003e([a],Permute)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Permute.html#v:sortBy",
      "description": {
        "fct-module": "Data.Permute",
        "fct-package": "permutation",
        "fct-signature": "(a -\u003e a -\u003e Ordering) -\u003e Int -\u003e [a] -\u003e ([a], Permute)",
        "fct-source": "src/Data-Permute.html#sortBy",
        "fct-type": "function",
        "title": "sortBy"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Permute",
        "module": "Data.Permute",
        "name": "sortBy",
        "normalized": "(a-\u003ea-\u003eOrdering)-\u003eInt-\u003e[a]-\u003e([a],Permute)",
        "package": "permutation",
        "partial": "By",
        "signature": "(a-\u003ea-\u003eOrdering)-\u003eInt-\u003e[a]-\u003e([a],Permute)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Permute.html#v:swaps",
      "description": {
        "fct-descr": "\u003cp\u003eGet a list of swaps equivalent to the permutation.  A result of\n \u003ccode\u003e[ (i0,j0), (i1,j1), ..., (ik,jk) ]\u003c/code\u003e means swap \u003ccode\u003ei0 \u003c-\u003e j0\u003c/code\u003e, \n then \u003ccode\u003ei1 \u003c-\u003e j1\u003c/code\u003e, and so on until \u003ccode\u003eik \u003c-\u003e jk\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Permute",
        "fct-package": "permutation",
        "fct-signature": "Permute -\u003e [(Int, Int)]",
        "fct-source": "src/Data-Permute.html#swaps",
        "fct-type": "function",
        "title": "swaps"
      },
      "index": {
        "description": "Get list of swaps equivalent to the permutation result of i0 j0 i1 j1 ik jk means swap i0 j0 then i1 j1 and so on until ik jk",
        "hierarchy": "Data Permute",
        "module": "Data.Permute",
        "name": "swaps",
        "normalized": "Permute-\u003e[(Int,Int)]",
        "package": "permutation",
        "partial": "",
        "signature": "Permute-\u003e[(Int,Int)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Permute.html#v:swapsPermute",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a permutation from a list of swaps.\n \u003ccode\u003eswapsPermute n ss\u003c/code\u003e creats a permutation of size \u003ccode\u003en\u003c/code\u003e given by a\n sequence of swaps.\n If \u003ccode\u003ess\u003c/code\u003e is \u003ccode\u003e[(i0,j0), (i1,j1), ..., (ik,jk)]\u003c/code\u003e, the\n sequence of swaps is\n \u003ccode\u003ei0 \u003c-\u003e j0\u003c/code\u003e, then \n \u003ccode\u003ei1 \u003c-\u003e j1\u003c/code\u003e, and so on until\n \u003ccode\u003eik \u003c-\u003e jk\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Permute",
        "fct-package": "permutation",
        "fct-signature": "Int -\u003e [(Int, Int)] -\u003e Permute",
        "fct-source": "src/Data-Permute.html#swapsPermute",
        "fct-type": "function",
        "title": "swapsPermute"
      },
      "index": {
        "description": "Construct permutation from list of swaps swapsPermute ss creats permutation of size given by sequence of swaps If ss is i0 j0 i1 j1 ik jk the sequence of swaps is i0 j0 then i1 j1 and so on until ik jk",
        "hierarchy": "Data Permute",
        "module": "Data.Permute",
        "name": "swapsPermute",
        "normalized": "Int-\u003e[(Int,Int)]-\u003ePermute",
        "package": "permutation",
        "partial": "Permute",
        "signature": "Int-\u003e[(Int,Int)]-\u003ePermute"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Permute.html#v:unsafeAt",
      "description": {
        "fct-module": "Data.Permute",
        "fct-package": "permutation",
        "fct-signature": "Permute -\u003e Int -\u003e Int",
        "fct-source": "src/Data-Permute-Base.html#unsafeAt",
        "fct-type": "function",
        "title": "unsafeAt"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Permute",
        "module": "Data.Permute",
        "name": "unsafeAt",
        "normalized": "Permute-\u003eInt-\u003eInt",
        "package": "permutation",
        "partial": "At",
        "signature": "Permute-\u003eInt-\u003eInt"
      }
    }
  }
]