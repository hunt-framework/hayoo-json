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
        "word": "permutation"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMutable combinations in the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Choose.IO",
          "name": "IO",
          "package": "permutation",
          "source": "src/Data-Choose-IO.html",
          "type": "module"
        },
        "index": {
          "description": "Mutable combinations in the IO monad",
          "hierarchy": "Data Choose IO",
          "module": "Data.Choose.IO",
          "name": "IO",
          "package": "permutation",
          "partial": "IO",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Choose-IO.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA mutable combination that can be manipulated in the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
          "module": "Data.Choose.IO",
          "name": "IOChoose",
          "package": "permutation",
          "source": "src/Data-Choose-IOBase.html#IOChoose",
          "type": "data"
        },
        "index": {
          "description": "mutable combination that can be manipulated in the IO monad",
          "hierarchy": "Data Choose IO",
          "module": "Data.Choose.IO",
          "name": "IOChoose",
          "package": "permutation",
          "partial": "IOChoose",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Choose-IO.html#t:IOChoose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn overloaded interface to mutable combinations. For combination types which \n can be used with this interface, see \u003ca\u003eData.Choose.IO\u003c/a\u003e and \u003ca\u003eData.Choose.ST\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Choose.MChoose",
          "name": "MChoose",
          "package": "permutation",
          "source": "src/Data-Choose-MChoose.html",
          "type": "module"
        },
        "index": {
          "description": "An overloaded interface to mutable combinations For combination types which can be used with this interface see Data.Choose.IO and Data.Choose.ST",
          "hierarchy": "Data Choose MChoose",
          "module": "Data.Choose.MChoose",
          "name": "MChoose",
          "package": "permutation",
          "partial": "MChoose",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Choose-MChoose.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass for representing a mutable combination.  The type is parameterized\n over the type of the monad, \u003ccode\u003em\u003c/code\u003e, in which the mutable combination will be\n manipulated.\n\u003c/p\u003e",
          "module": "Data.Choose.MChoose",
          "name": "MChoose",
          "package": "permutation",
          "source": "src/Data-Choose-MChoose.html#MChoose",
          "type": "class"
        },
        "index": {
          "description": "Class for representing mutable combination The type is parameterized over the type of the monad in which the mutable combination will be manipulated",
          "hierarchy": "Data Choose MChoose",
          "module": "Data.Choose.MChoose",
          "name": "MChoose",
          "package": "permutation",
          "partial": "MChoose",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Choose-MChoose.html#t:MChoose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ecopyChoose dst src\u003c/code\u003e copies the elements of the combination \u003ccode\u003esrc\u003c/code\u003e\n into the combination \u003ccode\u003edst\u003c/code\u003e.  The two combinations must have the same\n size.\n\u003c/p\u003e",
          "module": "Data.Choose.MChoose",
          "name": "copyChoose",
          "package": "permutation",
          "signature": "c -\u003e c -\u003e m ()",
          "source": "src/Data-Choose-MChoose.html#copyChoose",
          "type": "function"
        },
        "index": {
          "description": "copyChoose dst src copies the elements of the combination src into the combination dst The two combinations must have the same size",
          "hierarchy": "Data Choose MChoose",
          "module": "Data.Choose.MChoose",
          "name": "copyChoose",
          "normalized": "a-\u003ea-\u003eb()",
          "package": "permutation",
          "partial": "Choose",
          "signature": "c-\u003ec-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Choose-MChoose.html#v:copyChoose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a mutable combination to an immutable one.\n\u003c/p\u003e",
          "module": "Data.Choose.MChoose",
          "name": "freeze",
          "package": "permutation",
          "signature": "c -\u003e m Choose",
          "source": "src/Data-Choose-MChoose.html#freeze",
          "type": "function"
        },
        "index": {
          "description": "Convert mutable combination to an immutable one",
          "hierarchy": "Data Choose MChoose",
          "module": "Data.Choose.MChoose",
          "name": "freeze",
          "normalized": "a-\u003eb Choose",
          "package": "permutation",
          "signature": "c-\u003em Choose",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Choose-MChoose.html#v:freeze"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn a lazy list of the elements in the complement of a combination.\n If the combination is a subset of \u003ccode\u003ek\u003c/code\u003e outcomes from \u003ccode\u003en\u003c/code\u003e possibilities, then\n the returned list will be sorted and of length \u003ccode\u003en-k\u003c/code\u003e.  \n Due to the laziness, you should be careful when using this function if you\n are also modifying the combination.\n\u003c/p\u003e",
          "module": "Data.Choose.MChoose",
          "name": "getComplElems",
          "package": "permutation",
          "signature": "c -\u003e m [Int]",
          "source": "src/Data-Choose-MChoose.html#getComplElems",
          "type": "function"
        },
        "index": {
          "description": "Return lazy list of the elements in the complement of combination If the combination is subset of outcomes from possibilities then the returned list will be sorted and of length n-k Due to the laziness you should be careful when using this function if you are also modifying the combination",
          "hierarchy": "Data Choose MChoose",
          "module": "Data.Choose.MChoose",
          "name": "getComplElems",
          "normalized": "a-\u003eb[Int]",
          "package": "permutation",
          "partial": "Compl Elems",
          "signature": "c-\u003em[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Choose-MChoose.html#v:getComplElems"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute the complement of a combination\n\u003c/p\u003e",
          "module": "Data.Choose.MChoose",
          "name": "getComplement",
          "package": "permutation",
          "signature": "c -\u003e m c",
          "source": "src/Data-Choose-MChoose.html#getComplement",
          "type": "function"
        },
        "index": {
          "description": "Compute the complement of combination",
          "hierarchy": "Data Choose MChoose",
          "module": "Data.Choose.MChoose",
          "name": "getComplement",
          "normalized": "a-\u003eb a",
          "package": "permutation",
          "partial": "Complement",
          "signature": "c-\u003em c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Choose-MChoose.html#v:getComplement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003egetElem c i\u003c/code\u003e gets the value of the \u003ccode\u003ei\u003c/code\u003eth element of the combination\n \u003ccode\u003ec\u003c/code\u003e.  The index \u003ccode\u003ei\u003c/code\u003e must be in the range \u003ccode\u003e0..k-1\u003c/code\u003e, where \u003ccode\u003en\u003c/code\u003e is the\n size of the combination.\n\u003c/p\u003e",
          "module": "Data.Choose.MChoose",
          "name": "getElem",
          "package": "permutation",
          "signature": "c -\u003e Int -\u003e m Int",
          "source": "src/Data-Choose-MChoose.html#getElem",
          "type": "function"
        },
        "index": {
          "description": "getElem gets the value of the th element of the combination The index must be in the range k-1 where is the size of the combination",
          "hierarchy": "Data Choose MChoose",
          "module": "Data.Choose.MChoose",
          "name": "getElem",
          "normalized": "a-\u003eInt-\u003eb Int",
          "package": "permutation",
          "partial": "Elem",
          "signature": "c-\u003eInt-\u003em Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Choose-MChoose.html#v:getElem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a lazy list of the combination elements.  The laziness makes this\n function slightly dangerous if you are modifying the combination.\n\u003c/p\u003e",
          "module": "Data.Choose.MChoose",
          "name": "getElems",
          "package": "permutation",
          "signature": "c -\u003e m [Int]",
          "source": "src/Data-Choose-MChoose.html#getElems",
          "type": "method"
        },
        "index": {
          "description": "Get lazy list of the combination elements The laziness makes this function slightly dangerous if you are modifying the combination",
          "hierarchy": "Data Choose MChoose",
          "module": "Data.Choose.MChoose",
          "name": "getElems",
          "normalized": "a-\u003eb[Int]",
          "package": "permutation",
          "partial": "Elems",
          "signature": "c-\u003em[Int]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Choose-MChoose.html#v:getElems"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the number of possibilities, \u003ccode\u003en\u003c/code\u003e in the combination.\n\u003c/p\u003e",
          "module": "Data.Choose.MChoose",
          "name": "getPossible",
          "package": "permutation",
          "signature": "c -\u003e m Int",
          "source": "src/Data-Choose-MChoose.html#getPossible",
          "type": "method"
        },
        "index": {
          "description": "Get the number of possibilities in the combination",
          "hierarchy": "Data Choose MChoose",
          "module": "Data.Choose.MChoose",
          "name": "getPossible",
          "normalized": "a-\u003eb Int",
          "package": "permutation",
          "partial": "Possible",
          "signature": "c-\u003em Int",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Choose-MChoose.html#v:getPossible"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the number of outcomes, \u003ccode\u003ek\u003c/code\u003e in the combination.\n\u003c/p\u003e",
          "module": "Data.Choose.MChoose",
          "name": "getSize",
          "package": "permutation",
          "signature": "c -\u003e m Int",
          "source": "src/Data-Choose-MChoose.html#getSize",
          "type": "method"
        },
        "index": {
          "description": "Get the number of outcomes in the combination",
          "hierarchy": "Data Choose MChoose",
          "module": "Data.Choose.MChoose",
          "name": "getSize",
          "normalized": "a-\u003eb Int",
          "package": "permutation",
          "partial": "Size",
          "signature": "c-\u003em Int",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Choose-MChoose.html#v:getSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns whether or not the combination is valid.  For it to be valid,\n the elements must all be unique, they must be in sorted order, and they\n all must be in the range \u003ccode\u003e0 .. n-1\u003c/code\u003e, where \u003ccode\u003en\u003c/code\u003e is the number of \n possibilies in the combination.\n\u003c/p\u003e",
          "module": "Data.Choose.MChoose",
          "name": "isValid",
          "package": "permutation",
          "signature": "c -\u003e m Bool",
          "source": "src/Data-Choose-MChoose.html#isValid",
          "type": "function"
        },
        "index": {
          "description": "Returns whether or not the combination is valid For it to be valid the elements must all be unique they must be in sorted order and they all must be in the range n-1 where is the number of possibilies in the combination",
          "hierarchy": "Data Choose MChoose",
          "module": "Data.Choose.MChoose",
          "name": "isValid",
          "normalized": "a-\u003eb Bool",
          "package": "permutation",
          "partial": "Valid",
          "signature": "c-\u003em Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Choose-MChoose.html#v:isValid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003enewChoose n k\u003c/code\u003e creates a new combination of \u003ccode\u003ek\u003c/code\u003e outcomes from \u003ccode\u003en\u003c/code\u003e \n possibilites initialized to the subset \u003ccode\u003e{ 0, ..., k-1 }\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Choose.MChoose",
          "name": "newChoose",
          "package": "permutation",
          "signature": "Int -\u003e Int -\u003e m c",
          "source": "src/Data-Choose-MChoose.html#newChoose",
          "type": "method"
        },
        "index": {
          "description": "newChoose creates new combination of outcomes from possibilites initialized to the subset k-1",
          "hierarchy": "Data Choose MChoose",
          "module": "Data.Choose.MChoose",
          "name": "newChoose",
          "normalized": "Int-\u003eInt-\u003ea b",
          "package": "permutation",
          "partial": "Choose",
          "signature": "Int-\u003eInt-\u003em c",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Choose-MChoose.html#v:newChoose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003enewChoose n k\u003c/code\u003e allocates a new combination of \u003ccode\u003ek\u003c/code\u003e outcomes from\n \u003ccode\u003en\u003c/code\u003e possibilities but does not initialize it.\n\u003c/p\u003e",
          "module": "Data.Choose.MChoose",
          "name": "newChoose_",
          "package": "permutation",
          "signature": "Int -\u003e Int -\u003e m c",
          "source": "src/Data-Choose-MChoose.html#newChoose_",
          "type": "method"
        },
        "index": {
          "description": "newChoose allocates new combination of outcomes from possibilities but does not initialize it",
          "hierarchy": "Data Choose MChoose",
          "module": "Data.Choose.MChoose",
          "name": "newChoose_",
          "normalized": "Int-\u003eInt-\u003ea b",
          "package": "permutation",
          "partial": "Choose",
          "signature": "Int-\u003eInt-\u003em c",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Choose-MChoose.html#v:newChoose_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a new combination by copying another.\n\u003c/p\u003e",
          "module": "Data.Choose.MChoose",
          "name": "newCopyChoose",
          "package": "permutation",
          "signature": "c -\u003e m c",
          "source": "src/Data-Choose-MChoose.html#newCopyChoose",
          "type": "function"
        },
        "index": {
          "description": "Construct new combination by copying another",
          "hierarchy": "Data Choose MChoose",
          "module": "Data.Choose.MChoose",
          "name": "newCopyChoose",
          "normalized": "a-\u003eb a",
          "package": "permutation",
          "partial": "Copy Choose",
          "signature": "c-\u003em c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Choose-MChoose.html#v:newCopyChoose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a combination from a list of elements.  \n \u003ccode\u003enewListChoose n k is\u003c/code\u003e creates a combination of \u003ccode\u003ek\u003c/code\u003e outcomes from \u003ccode\u003en\u003c/code\u003e\n possibilities initialized to have the \u003ccode\u003ei\u003c/code\u003eth element equal to \u003ccode\u003eis !! i\u003c/code\u003e.  \n For the combination to be valid, the elements must all be unique, they \n must be in sorted order, and they all must be in the range \u003ccode\u003e0 .. n-1\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Choose.MChoose",
          "name": "newListChoose",
          "package": "permutation",
          "signature": "Int -\u003e Int -\u003e [Int] -\u003e m c",
          "source": "src/Data-Choose-MChoose.html#newListChoose",
          "type": "function"
        },
        "index": {
          "description": "Construct combination from list of elements newListChoose is creates combination of outcomes from possibilities initialized to have the th element equal to is For the combination to be valid the elements must all be unique they must be in sorted order and they all must be in the range n-1",
          "hierarchy": "Data Choose MChoose",
          "module": "Data.Choose.MChoose",
          "name": "newListChoose",
          "normalized": "Int-\u003eInt-\u003e[Int]-\u003ea b",
          "package": "permutation",
          "partial": "List Choose",
          "signature": "Int-\u003eInt-\u003e[Int]-\u003em c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Choose-MChoose.html#v:newListChoose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003esetElem c i x\u003c/code\u003e sets the value of the \u003ccode\u003ei\u003c/code\u003eth element of the combination\n \u003ccode\u003ec\u003c/code\u003e.  The index \u003ccode\u003ei\u003c/code\u003e must be in the range \u003ccode\u003e0..k-1\u003c/code\u003e, where \u003ccode\u003ek\u003c/code\u003e is the\n size of the combination.\n\u003c/p\u003e",
          "module": "Data.Choose.MChoose",
          "name": "setElem",
          "package": "permutation",
          "signature": "c -\u003e Int -\u003e Int -\u003e m ()",
          "source": "src/Data-Choose-MChoose.html#setElem",
          "type": "function"
        },
        "index": {
          "description": "setElem sets the value of the th element of the combination The index must be in the range k-1 where is the size of the combination",
          "hierarchy": "Data Choose MChoose",
          "module": "Data.Choose.MChoose",
          "name": "setElem",
          "normalized": "a-\u003eInt-\u003eInt-\u003eb()",
          "package": "permutation",
          "partial": "Elem",
          "signature": "c-\u003eInt-\u003eInt-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Choose-MChoose.html#v:setElem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet all the values of a combination from a list of elements.\n\u003c/p\u003e",
          "module": "Data.Choose.MChoose",
          "name": "setElems",
          "package": "permutation",
          "signature": "c -\u003e [Int] -\u003e m ()",
          "source": "src/Data-Choose-MChoose.html#setElems",
          "type": "method"
        },
        "index": {
          "description": "Set all the values of combination from list of elements",
          "hierarchy": "Data Choose MChoose",
          "module": "Data.Choose.MChoose",
          "name": "setElems",
          "normalized": "a-\u003e[Int]-\u003eb()",
          "package": "permutation",
          "partial": "Elems",
          "signature": "c-\u003e[Int]-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Choose-MChoose.html#v:setElems"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet a combination to be the first subset of its size.\n\u003c/p\u003e",
          "module": "Data.Choose.MChoose",
          "name": "setFirst",
          "package": "permutation",
          "signature": "c -\u003e m ()",
          "source": "src/Data-Choose-MChoose.html#setFirst",
          "type": "function"
        },
        "index": {
          "description": "Set combination to be the first subset of its size",
          "hierarchy": "Data Choose MChoose",
          "module": "Data.Choose.MChoose",
          "name": "setFirst",
          "normalized": "a-\u003eb()",
          "package": "permutation",
          "partial": "First",
          "signature": "c-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Choose-MChoose.html#v:setFirst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdvance a combination to the next in lexicogrphic order and return \u003ccode\u003eTrue\u003c/code\u003e. \n  If no further combinations are available, return \u003ccode\u003eFalse\u003c/code\u003e and leave the \n combination unmodified.  Starting with \u003ccode\u003e[ 0 .. k-1 ]\u003c/code\u003e and repeatedly\n calling \u003ccode\u003esetNext\u003c/code\u003e will iterate through all subsets of size \u003ccode\u003ek\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Choose.MChoose",
          "name": "setNext",
          "package": "permutation",
          "signature": "c -\u003e m Bool",
          "source": "src/Data-Choose-MChoose.html#setNext",
          "type": "function"
        },
        "index": {
          "description": "Advance combination to the next in lexicogrphic order and return True If no further combinations are available return False and leave the combination unmodified Starting with k-1 and repeatedly calling setNext will iterate through all subsets of size",
          "hierarchy": "Data Choose MChoose",
          "module": "Data.Choose.MChoose",
          "name": "setNext",
          "normalized": "a-\u003eb Bool",
          "package": "permutation",
          "partial": "Next",
          "signature": "c-\u003em Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Choose-MChoose.html#v:setNext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStep backwards to the previous combination in lexicographic order and\n return \u003ccode\u003eTrue\u003c/code\u003e.  If there is no previous combination, return \u003ccode\u003eFalse\u003c/code\u003e and\n leave the combination unmodified.\n\u003c/p\u003e",
          "module": "Data.Choose.MChoose",
          "name": "setPrev",
          "package": "permutation",
          "signature": "c -\u003e m Bool",
          "source": "src/Data-Choose-MChoose.html#setPrev",
          "type": "function"
        },
        "index": {
          "description": "Step backwards to the previous combination in lexicographic order and return True If there is no previous combination return False and leave the combination unmodified",
          "hierarchy": "Data Choose MChoose",
          "module": "Data.Choose.MChoose",
          "name": "setPrev",
          "normalized": "a-\u003eb Bool",
          "package": "permutation",
          "partial": "Prev",
          "signature": "c-\u003em Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Choose-MChoose.html#v:setPrev"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert an immutable combination to a mutable one.\n\u003c/p\u003e",
          "module": "Data.Choose.MChoose",
          "name": "thaw",
          "package": "permutation",
          "signature": "Choose -\u003e m c",
          "source": "src/Data-Choose-MChoose.html#thaw",
          "type": "function"
        },
        "index": {
          "description": "Convert an immutable combination to mutable one",
          "hierarchy": "Data Choose MChoose",
          "module": "Data.Choose.MChoose",
          "name": "thaw",
          "normalized": "Choose-\u003ea b",
          "package": "permutation",
          "signature": "Choose-\u003em c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Choose-MChoose.html#v:thaw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Choose.MChoose",
          "name": "unsafeFreeze",
          "package": "permutation",
          "signature": "c -\u003e m Choose",
          "source": "src/Data-Choose-MChoose.html#unsafeFreeze",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Choose MChoose",
          "module": "Data.Choose.MChoose",
          "name": "unsafeFreeze",
          "normalized": "a-\u003eb Choose",
          "package": "permutation",
          "partial": "Freeze",
          "signature": "c-\u003em Choose",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Choose-MChoose.html#v:unsafeFreeze"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Choose.MChoose",
          "name": "unsafeGetElem",
          "package": "permutation",
          "signature": "c -\u003e Int -\u003e m Int",
          "source": "src/Data-Choose-MChoose.html#unsafeGetElem",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Choose MChoose",
          "module": "Data.Choose.MChoose",
          "name": "unsafeGetElem",
          "normalized": "a-\u003eInt-\u003eb Int",
          "package": "permutation",
          "partial": "Get Elem",
          "signature": "c-\u003eInt-\u003em Int",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Choose-MChoose.html#v:unsafeGetElem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Choose.MChoose",
          "name": "unsafeNewListChoose",
          "package": "permutation",
          "signature": "Int -\u003e Int -\u003e [Int] -\u003e m c",
          "source": "src/Data-Choose-MChoose.html#unsafeNewListChoose",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Choose MChoose",
          "module": "Data.Choose.MChoose",
          "name": "unsafeNewListChoose",
          "normalized": "Int-\u003eInt-\u003e[Int]-\u003ea b",
          "package": "permutation",
          "partial": "New List Choose",
          "signature": "Int-\u003eInt-\u003e[Int]-\u003em c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Choose-MChoose.html#v:unsafeNewListChoose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Choose.MChoose",
          "name": "unsafeSetElem",
          "package": "permutation",
          "signature": "c -\u003e Int -\u003e Int -\u003e m ()",
          "source": "src/Data-Choose-MChoose.html#unsafeSetElem",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Choose MChoose",
          "module": "Data.Choose.MChoose",
          "name": "unsafeSetElem",
          "normalized": "a-\u003eInt-\u003eInt-\u003eb()",
          "package": "permutation",
          "partial": "Set Elem",
          "signature": "c-\u003eInt-\u003eInt-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Choose-MChoose.html#v:unsafeSetElem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Choose.MChoose",
          "name": "unsafeThaw",
          "package": "permutation",
          "signature": "Choose -\u003e m c",
          "source": "src/Data-Choose-MChoose.html#unsafeThaw",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Choose MChoose",
          "module": "Data.Choose.MChoose",
          "name": "unsafeThaw",
          "normalized": "Choose-\u003ea b",
          "package": "permutation",
          "partial": "Thaw",
          "signature": "Choose-\u003em c",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Choose-MChoose.html#v:unsafeThaw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMutable combinations in the \u003ccode\u003e\u003ca\u003eST\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Choose.ST",
          "name": "ST",
          "package": "permutation",
          "source": "src/Data-Choose-ST.html",
          "type": "module"
        },
        "index": {
          "description": "Mutable combinations in the ST monad",
          "hierarchy": "Data Choose ST",
          "module": "Data.Choose.ST",
          "name": "ST",
          "package": "permutation",
          "partial": "ST",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Choose-ST.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA mutable combination that can be manipulated in the \u003ccode\u003e\u003ca\u003eST\u003c/a\u003e\u003c/code\u003e monad. The\n type argument \u003ccode\u003es\u003c/code\u003e is the state variable argument for the \u003ccode\u003e\u003ca\u003eST\u003c/a\u003e\u003c/code\u003e type.\n\u003c/p\u003e",
          "module": "Data.Choose.ST",
          "name": "STChoose",
          "package": "permutation",
          "source": "src/Data-Choose-Base.html#STChoose",
          "type": "data"
        },
        "index": {
          "description": "mutable combination that can be manipulated in the ST monad The type argument is the state variable argument for the ST type",
          "hierarchy": "Data Choose ST",
          "module": "Data.Choose.ST",
          "name": "STChoose",
          "package": "permutation",
          "partial": "STChoose",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Choose-ST.html#t:STChoose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA safe way to create and work with a mutable combination before returning \n an immutable one for later perusal. This function avoids copying the \n combination before returning it - it uses unsafeFreeze internally, but this \n wrapper is a safe interface to that function. \n\u003c/p\u003e",
          "module": "Data.Choose.ST",
          "name": "runSTChoose",
          "package": "permutation",
          "signature": "(forall s.  ST s (STChoose s)) -\u003e Choose",
          "source": "src/Data-Choose-ST.html#runSTChoose",
          "type": "function"
        },
        "index": {
          "description": "safe way to create and work with mutable combination before returning an immutable one for later perusal This function avoids copying the combination before returning it it uses unsafeFreeze internally but this wrapper is safe interface to that function",
          "hierarchy": "Data Choose ST",
          "module": "Data.Choose.ST",
          "name": "runSTChoose",
          "normalized": "(a b ST c(STChoose c))-\u003eChoose",
          "package": "permutation",
          "partial": "STChoose",
          "signature": "(forall s. ST s(STChoose s))-\u003eChoose",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Choose-ST.html#v:runSTChoose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eImmutable combinations.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Choose",
          "name": "Choose",
          "package": "permutation",
          "source": "src/Data-Choose.html",
          "type": "module"
        },
        "index": {
          "description": "Immutable combinations",
          "hierarchy": "Data Choose",
          "module": "Data.Choose",
          "name": "Choose",
          "package": "permutation",
          "partial": "Choose",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Choose.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe immutable combination data type.  A way of representing \u003ccode\u003ek\u003c/code\u003e\n unordered outcomes from \u003ccode\u003en\u003c/code\u003e possiblities.  The possibilites are\n represented as the indices \u003ccode\u003e0, ..., n-1\u003c/code\u003e, and the outcomes are\n given as a subset of size \u003ccode\u003ek\u003c/code\u003e.  The subset is stored with the indices\n in ascending order.\n\u003c/p\u003e",
          "module": "Data.Choose",
          "name": "Choose",
          "package": "permutation",
          "source": "src/Data-Choose-Base.html#Choose",
          "type": "data"
        },
        "index": {
          "description": "The immutable combination data type way of representing unordered outcomes from possiblities The possibilites are represented as the indices n-1 and the outcomes are given as subset of size The subset is stored with the indices in ascending order",
          "hierarchy": "Data Choose",
          "module": "Data.Choose",
          "name": "Choose",
          "package": "permutation",
          "partial": "Choose",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Choose.html#t:Choose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eat c i\u003c/code\u003e gets the value of the \u003ccode\u003ei\u003c/code\u003eth element of the combination\n \u003ccode\u003ec\u003c/code\u003e.  The index \u003ccode\u003ei\u003c/code\u003e must be in the range \u003ccode\u003e0..(k-1)\u003c/code\u003e, where \u003ccode\u003ek\u003c/code\u003e is the\n size of the combination.\n\u003c/p\u003e",
          "module": "Data.Choose",
          "name": "at",
          "package": "permutation",
          "signature": "Choose -\u003e Int -\u003e Int",
          "source": "src/Data-Choose.html#at",
          "type": "function"
        },
        "index": {
          "description": "at gets the value of the th element of the combination The index must be in the range k-1 where is the size of the combination",
          "hierarchy": "Data Choose",
          "module": "Data.Choose",
          "name": "at",
          "normalized": "Choose-\u003eInt-\u003eInt",
          "package": "permutation",
          "signature": "Choose-\u003eInt-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Choose.html#v:at"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003echoose n k\u003c/code\u003e returns the first combination of \u003ccode\u003ek\u003c/code\u003e outcomes from \u003ccode\u003en\u003c/code\u003e\n possibilites, namely the subset \u003ccode\u003e{ 0, ..., k-1 }\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Choose",
          "name": "choose",
          "package": "permutation",
          "signature": "Int -\u003e Int -\u003e Choose",
          "source": "src/Data-Choose.html#choose",
          "type": "function"
        },
        "index": {
          "description": "choose returns the first combination of outcomes from possibilites namely the subset k-1",
          "hierarchy": "Data Choose",
          "module": "Data.Choose",
          "name": "choose",
          "normalized": "Int-\u003eInt-\u003eChoose",
          "package": "permutation",
          "signature": "Int-\u003eInt-\u003eChoose",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Choose.html#v:choose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a list of the elements in the complement of a combination.\n If the combination is a subset of \u003ccode\u003ek\u003c/code\u003e outcomes from \u003ccode\u003en\u003c/code\u003e possibilities, then\n the returned list will be sorted and of length \u003ccode\u003en-k\u003c/code\u003e.  \n\u003c/p\u003e",
          "module": "Data.Choose",
          "name": "complElems",
          "package": "permutation",
          "signature": "Choose -\u003e [Int]",
          "source": "src/Data-Choose.html#complElems",
          "type": "function"
        },
        "index": {
          "description": "Get list of the elements in the complement of combination If the combination is subset of outcomes from possibilities then the returned list will be sorted and of length n-k",
          "hierarchy": "Data Choose",
          "module": "Data.Choose",
          "name": "complElems",
          "normalized": "Choose-\u003e[Int]",
          "package": "permutation",
          "partial": "Elems",
          "signature": "Choose-\u003e[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Choose.html#v:complElems"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the inverse of a combination\n\u003c/p\u003e",
          "module": "Data.Choose",
          "name": "complement",
          "package": "permutation",
          "signature": "Choose -\u003e Choose",
          "source": "src/Data-Choose.html#complement",
          "type": "function"
        },
        "index": {
          "description": "Get the inverse of combination",
          "hierarchy": "Data Choose",
          "module": "Data.Choose",
          "name": "complement",
          "normalized": "Choose-\u003eChoose",
          "package": "permutation",
          "signature": "Choose-\u003eChoose",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Choose.html#v:complement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a list of the \u003ccode\u003ek\u003c/code\u003e outcomes.\n\u003c/p\u003e",
          "module": "Data.Choose",
          "name": "elems",
          "package": "permutation",
          "signature": "Choose -\u003e [Int]",
          "source": "src/Data-Choose-Base.html#elems",
          "type": "function"
        },
        "index": {
          "description": "Get list of the outcomes",
          "hierarchy": "Data Choose",
          "module": "Data.Choose",
          "name": "elems",
          "normalized": "Choose-\u003e[Int]",
          "package": "permutation",
          "signature": "Choose-\u003e[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Choose.html#v:elems"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a combination from a list of elements.  \n \u003ccode\u003elistChoose n k is\u003c/code\u003e creates a combination of \u003ccode\u003ek\u003c/code\u003e outcomes from \u003ccode\u003en\u003c/code\u003e\n possibilities initialized to have the \u003ccode\u003ei\u003c/code\u003eth element equal to \u003ccode\u003eis !! i\u003c/code\u003e.  \n For the combination to be valid, the elements must all be unique, they \n must be in sorted order, and they all must be in the range \u003ccode\u003e0 .. n-1\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Choose",
          "name": "listChoose",
          "package": "permutation",
          "signature": "Int -\u003e Int -\u003e [Int] -\u003e Choose",
          "source": "src/Data-Choose.html#listChoose",
          "type": "function"
        },
        "index": {
          "description": "Construct combination from list of elements listChoose is creates combination of outcomes from possibilities initialized to have the th element equal to is For the combination to be valid the elements must all be unique they must be in sorted order and they all must be in the range n-1",
          "hierarchy": "Data Choose",
          "module": "Data.Choose",
          "name": "listChoose",
          "normalized": "Int-\u003eInt-\u003e[Int]-\u003eChoose",
          "package": "permutation",
          "partial": "Choose",
          "signature": "Int-\u003eInt-\u003e[Int]-\u003eChoose",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Choose.html#v:listChoose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the next combination in lexicographic order, or \u003ccode\u003eNothing\u003c/code\u003e if\n there are no further combinations.  Starting with the first combination\n and repeatedly calling this function will iterate through all combinations\n of a given order.\n\u003c/p\u003e",
          "module": "Data.Choose",
          "name": "next",
          "package": "permutation",
          "signature": "Choose -\u003e Maybe Choose",
          "source": "src/Data-Choose.html#next",
          "type": "function"
        },
        "index": {
          "description": "Return the next combination in lexicographic order or Nothing if there are no further combinations Starting with the first combination and repeatedly calling this function will iterate through all combinations of given order",
          "hierarchy": "Data Choose",
          "module": "Data.Choose",
          "name": "next",
          "normalized": "Choose-\u003eMaybe Choose",
          "package": "permutation",
          "signature": "Choose-\u003eMaybe Choose",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Choose.html#v:next"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the number of possibilities, \u003ccode\u003en\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Choose",
          "name": "possible",
          "package": "permutation",
          "signature": "Choose -\u003e Int",
          "source": "src/Data-Choose-Base.html#possible",
          "type": "function"
        },
        "index": {
          "description": "Get the number of possibilities",
          "hierarchy": "Data Choose",
          "module": "Data.Choose",
          "name": "possible",
          "normalized": "Choose-\u003eInt",
          "package": "permutation",
          "signature": "Choose-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Choose.html#v:possible"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the previous combination in lexicographic order, or \u003ccode\u003eNothing\u003c/code\u003e\n if such combination exists.\n\u003c/p\u003e",
          "module": "Data.Choose",
          "name": "prev",
          "package": "permutation",
          "signature": "Choose -\u003e Maybe Choose",
          "source": "src/Data-Choose.html#prev",
          "type": "function"
        },
        "index": {
          "description": "Return the previous combination in lexicographic order or Nothing if such combination exists",
          "hierarchy": "Data Choose",
          "module": "Data.Choose",
          "name": "prev",
          "normalized": "Choose-\u003eMaybe Choose",
          "package": "permutation",
          "signature": "Choose-\u003eMaybe Choose",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Choose.html#v:prev"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the number of outcomes, \u003ccode\u003ek\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Choose",
          "name": "size",
          "package": "permutation",
          "signature": "Choose -\u003e Int",
          "source": "src/Data-Choose-Base.html#size",
          "type": "function"
        },
        "index": {
          "description": "Get the number of outcomes",
          "hierarchy": "Data Choose",
          "module": "Data.Choose",
          "name": "size",
          "normalized": "Choose-\u003eInt",
          "package": "permutation",
          "signature": "Choose-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Choose.html#v:size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Choose",
          "name": "unsafeAt",
          "package": "permutation",
          "signature": "Choose -\u003e Int -\u003e Int",
          "source": "src/Data-Choose-Base.html#unsafeAt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Choose",
          "module": "Data.Choose",
          "name": "unsafeAt",
          "normalized": "Choose-\u003eInt-\u003eInt",
          "package": "permutation",
          "partial": "At",
          "signature": "Choose-\u003eInt-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Choose.html#v:unsafeAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMutable permutations in the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Permute.IO",
          "name": "IO",
          "package": "permutation",
          "source": "src/Data-Permute-IO.html",
          "type": "module"
        },
        "index": {
          "description": "Mutable permutations in the IO monad",
          "hierarchy": "Data Permute IO",
          "module": "Data.Permute.IO",
          "name": "IO",
          "package": "permutation",
          "partial": "IO",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Permute-IO.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA mutable permutation that can be manipulated in the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
          "module": "Data.Permute.IO",
          "name": "IOPermute",
          "package": "permutation",
          "source": "src/Data-Permute-IOBase.html#IOPermute",
          "type": "data"
        },
        "index": {
          "description": "mutable permutation that can be manipulated in the IO monad",
          "hierarchy": "Data Permute IO",
          "module": "Data.Permute.IO",
          "name": "IOPermute",
          "package": "permutation",
          "partial": "IOPermute",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Permute-IO.html#t:IOPermute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn overloaded interface to mutable permutations. For permutation types which \n can be used with this interface, see \u003ca\u003eData.Permute.IO\u003c/a\u003e and \u003ca\u003eData.Permute.ST\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Permute.MPermute",
          "name": "MPermute",
          "package": "permutation",
          "source": "src/Data-Permute-MPermute.html",
          "type": "module"
        },
        "index": {
          "description": "An overloaded interface to mutable permutations For permutation types which can be used with this interface see Data.Permute.IO and Data.Permute.ST",
          "hierarchy": "Data Permute MPermute",
          "module": "Data.Permute.MPermute",
          "name": "MPermute",
          "package": "permutation",
          "partial": "MPermute",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Permute-MPermute.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass for representing a mutable permutation.  The type is parameterized\n over the type of the monad, \u003ccode\u003em\u003c/code\u003e, in which the mutable permutation will be\n manipulated.\n\u003c/p\u003e",
          "module": "Data.Permute.MPermute",
          "name": "MPermute",
          "package": "permutation",
          "source": "src/Data-Permute-MPermute.html#MPermute",
          "type": "class"
        },
        "index": {
          "description": "Class for representing mutable permutation The type is parameterized over the type of the monad in which the mutable permutation will be manipulated",
          "hierarchy": "Data Permute MPermute",
          "module": "Data.Permute.MPermute",
          "name": "MPermute",
          "package": "permutation",
          "partial": "MPermute",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Permute-MPermute.html#t:MPermute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet one permutation to be the inverse of another.  \n \u003ccode\u003ecopyInverse inv p\u003c/code\u003e computes the inverse of \u003ccode\u003ep\u003c/code\u003e and stores it in \u003ccode\u003einv\u003c/code\u003e.\n The two permutations must have the same size.\n\u003c/p\u003e",
          "module": "Data.Permute.MPermute",
          "name": "copyInverse",
          "package": "permutation",
          "signature": "p -\u003e p -\u003e m ()",
          "source": "src/Data-Permute-MPermute.html#copyInverse",
          "type": "function"
        },
        "index": {
          "description": "Set one permutation to be the inverse of another copyInverse inv computes the inverse of and stores it in inv The two permutations must have the same size",
          "hierarchy": "Data Permute MPermute",
          "module": "Data.Permute.MPermute",
          "name": "copyInverse",
          "normalized": "a-\u003ea-\u003eb()",
          "package": "permutation",
          "partial": "Inverse",
          "signature": "p-\u003ep-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Permute-MPermute.html#v:copyInverse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ecopyPermute dst src\u003c/code\u003e copies the elements of the permutation \u003ccode\u003esrc\u003c/code\u003e\n into the permutation \u003ccode\u003edst\u003c/code\u003e.  The two permutations must have the same\n size.\n\u003c/p\u003e",
          "module": "Data.Permute.MPermute",
          "name": "copyPermute",
          "package": "permutation",
          "signature": "p -\u003e p -\u003e m ()",
          "source": "src/Data-Permute-MPermute.html#copyPermute",
          "type": "function"
        },
        "index": {
          "description": "copyPermute dst src copies the elements of the permutation src into the permutation dst The two permutations must have the same size",
          "hierarchy": "Data Permute MPermute",
          "module": "Data.Permute.MPermute",
          "name": "copyPermute",
          "normalized": "a-\u003ea-\u003eb()",
          "package": "permutation",
          "partial": "Permute",
          "signature": "p-\u003ep-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Permute-MPermute.html#v:copyPermute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a mutable permutation to an immutable one.\n\u003c/p\u003e",
          "module": "Data.Permute.MPermute",
          "name": "freeze",
          "package": "permutation",
          "signature": "p -\u003e m Permute",
          "source": "src/Data-Permute-MPermute.html#freeze",
          "type": "function"
        },
        "index": {
          "description": "Convert mutable permutation to an immutable one",
          "hierarchy": "Data Permute MPermute",
          "module": "Data.Permute.MPermute",
          "name": "freeze",
          "normalized": "a-\u003eb Permute",
          "package": "permutation",
          "signature": "p-\u003em Permute",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Permute-MPermute.html#v:freeze"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003egetCycleFrom p i\u003c/code\u003e gets the list of elements reachable from \u003ccode\u003ei\u003c/code\u003e\n by repeated application of \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Permute.MPermute",
          "name": "getCycleFrom",
          "package": "permutation",
          "signature": "p -\u003e Int -\u003e m [Int]",
          "source": "src/Data-Permute-MPermute.html#getCycleFrom",
          "type": "function"
        },
        "index": {
          "description": "getCycleFrom gets the list of elements reachable from by repeated application of",
          "hierarchy": "Data Permute MPermute",
          "module": "Data.Permute.MPermute",
          "name": "getCycleFrom",
          "normalized": "a-\u003eInt-\u003eb[Int]",
          "package": "permutation",
          "partial": "Cycle From",
          "signature": "p-\u003eInt-\u003em[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Permute-MPermute.html#v:getCycleFrom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003egetCycles p\u003c/code\u003e returns the list of disjoin cycles in \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Permute.MPermute",
          "name": "getCycles",
          "package": "permutation",
          "signature": "p -\u003e m [[Int]]",
          "source": "src/Data-Permute-MPermute.html#getCycles",
          "type": "function"
        },
        "index": {
          "description": "getCycles returns the list of disjoin cycles in",
          "hierarchy": "Data Permute MPermute",
          "module": "Data.Permute.MPermute",
          "name": "getCycles",
          "normalized": "a-\u003eb[[Int]]",
          "package": "permutation",
          "partial": "Cycles",
          "signature": "p-\u003em[[Int]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Permute-MPermute.html#v:getCycles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003egetElem p i\u003c/code\u003e gets the value of the \u003ccode\u003ei\u003c/code\u003eth element of the permutation\n \u003ccode\u003ep\u003c/code\u003e.  The index \u003ccode\u003ei\u003c/code\u003e must be in the range \u003ccode\u003e0..(n-1)\u003c/code\u003e, where \u003ccode\u003en\u003c/code\u003e is the\n size of the permutation.\n\u003c/p\u003e",
          "module": "Data.Permute.MPermute",
          "name": "getElem",
          "package": "permutation",
          "signature": "p -\u003e Int -\u003e m Int",
          "source": "src/Data-Permute-MPermute.html#getElem",
          "type": "function"
        },
        "index": {
          "description": "getElem gets the value of the th element of the permutation The index must be in the range n-1 where is the size of the permutation",
          "hierarchy": "Data Permute MPermute",
          "module": "Data.Permute.MPermute",
          "name": "getElem",
          "normalized": "a-\u003eInt-\u003eb Int",
          "package": "permutation",
          "partial": "Elem",
          "signature": "p-\u003eInt-\u003em Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Permute-MPermute.html#v:getElem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a lazy list of the permutation elements.  The laziness makes this\n function slightly dangerous if you are modifying the permutation.\n\u003c/p\u003e",
          "module": "Data.Permute.MPermute",
          "name": "getElems",
          "package": "permutation",
          "signature": "p -\u003e m [Int]",
          "source": "src/Data-Permute-MPermute.html#getElems",
          "type": "method"
        },
        "index": {
          "description": "Get lazy list of the permutation elements The laziness makes this function slightly dangerous if you are modifying the permutation",
          "hierarchy": "Data Permute MPermute",
          "module": "Data.Permute.MPermute",
          "name": "getElems",
          "normalized": "a-\u003eb[Int]",
          "package": "permutation",
          "partial": "Elems",
          "signature": "p-\u003em[Int]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Permute-MPermute.html#v:getElems"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003egetIndexOf p x\u003c/code\u003e returns \u003ccode\u003ei\u003c/code\u003e sutch that \u003ccode\u003egetElem p i\u003c/code\u003e equals \u003ccode\u003ex\u003c/code\u003e.  This\n is a linear-time operation.\n\u003c/p\u003e",
          "module": "Data.Permute.MPermute",
          "name": "getIndexOf",
          "package": "permutation",
          "signature": "p -\u003e Int -\u003e m Int",
          "source": "src/Data-Permute-MPermute.html#getIndexOf",
          "type": "function"
        },
        "index": {
          "description": "getIndexOf returns sutch that getElem equals This is linear-time operation",
          "hierarchy": "Data Permute MPermute",
          "module": "Data.Permute.MPermute",
          "name": "getIndexOf",
          "normalized": "a-\u003eInt-\u003eb Int",
          "package": "permutation",
          "partial": "Index Of",
          "signature": "p-\u003eInt-\u003em Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Permute-MPermute.html#v:getIndexOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a lazy list of swaps equivalent to the inverse of a permutation.\n\u003c/p\u003e",
          "module": "Data.Permute.MPermute",
          "name": "getInvSwaps",
          "package": "permutation",
          "signature": "p -\u003e m [(Int, Int)]",
          "source": "src/Data-Permute-MPermute.html#getInvSwaps",
          "type": "function"
        },
        "index": {
          "description": "Get lazy list of swaps equivalent to the inverse of permutation",
          "hierarchy": "Data Permute MPermute",
          "module": "Data.Permute.MPermute",
          "name": "getInvSwaps",
          "normalized": "a-\u003eb[(Int,Int)]",
          "package": "permutation",
          "partial": "Inv Swaps",
          "signature": "p-\u003em[(Int,Int)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Permute-MPermute.html#v:getInvSwaps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute the inverse of a permutation.  \n\u003c/p\u003e",
          "module": "Data.Permute.MPermute",
          "name": "getInverse",
          "package": "permutation",
          "signature": "p -\u003e m p",
          "source": "src/Data-Permute-MPermute.html#getInverse",
          "type": "function"
        },
        "index": {
          "description": "Compute the inverse of permutation",
          "hierarchy": "Data Permute MPermute",
          "module": "Data.Permute.MPermute",
          "name": "getInverse",
          "normalized": "a-\u003eb a",
          "package": "permutation",
          "partial": "Inverse",
          "signature": "p-\u003em p",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Permute-MPermute.html#v:getInverse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhether or not the permutation is made from an even number of swaps\n\u003c/p\u003e",
          "module": "Data.Permute.MPermute",
          "name": "getIsEven",
          "package": "permutation",
          "signature": "p -\u003e m Bool",
          "source": "src/Data-Permute-MPermute.html#getIsEven",
          "type": "function"
        },
        "index": {
          "description": "Whether or not the permutation is made from an even number of swaps",
          "hierarchy": "Data Permute MPermute",
          "module": "Data.Permute.MPermute",
          "name": "getIsEven",
          "normalized": "a-\u003eb Bool",
          "package": "permutation",
          "partial": "Is Even",
          "signature": "p-\u003em Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Permute-MPermute.html#v:getIsEven"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003egetOrder n xs\u003c/code\u003e returns a permutation which rearranges the first \u003ccode\u003en\u003c/code\u003e\n elements of \u003ccode\u003exs\u003c/code\u003e into ascending order. The results are undefined if \u003ccode\u003en\u003c/code\u003e is \n greater than the length of \u003ccode\u003exs\u003c/code\u003e.  This is a special case of \u003ccode\u003e\u003ca\u003egetOrderBy\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Permute.MPermute",
          "name": "getOrder",
          "package": "permutation",
          "signature": "Int -\u003e [a] -\u003e m p",
          "source": "src/Data-Permute-MPermute.html#getOrder",
          "type": "function"
        },
        "index": {
          "description": "getOrder xs returns permutation which rearranges the first elements of xs into ascending order The results are undefined if is greater than the length of xs This is special case of getOrderBy",
          "hierarchy": "Data Permute MPermute",
          "module": "Data.Permute.MPermute",
          "name": "getOrder",
          "normalized": "Int-\u003e[a]-\u003eb c",
          "package": "permutation",
          "partial": "Order",
          "signature": "Int-\u003e[a]-\u003em p",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Permute-MPermute.html#v:getOrder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Permute.MPermute",
          "name": "getOrderBy",
          "package": "permutation",
          "signature": "(a -\u003e a -\u003e Ordering) -\u003e Int -\u003e [a] -\u003e m p",
          "source": "src/Data-Permute-MPermute.html#getOrderBy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Permute MPermute",
          "module": "Data.Permute.MPermute",
          "name": "getOrderBy",
          "normalized": "(a-\u003ea-\u003eOrdering)-\u003eInt-\u003e[a]-\u003eb c",
          "package": "permutation",
          "partial": "Order By",
          "signature": "(a-\u003ea-\u003eOrdering)-\u003eInt-\u003e[a]-\u003em p",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Permute-MPermute.html#v:getOrderBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003egetPeriod p\u003c/code\u003e - The first power of \u003ccode\u003ep\u003c/code\u003e that is the identity permutation\n\u003c/p\u003e",
          "module": "Data.Permute.MPermute",
          "name": "getPeriod",
          "package": "permutation",
          "signature": "p -\u003e m Integer",
          "source": "src/Data-Permute-MPermute.html#getPeriod",
          "type": "function"
        },
        "index": {
          "description": "getPeriod The first power of that is the identity permutation",
          "hierarchy": "Data Permute MPermute",
          "module": "Data.Permute.MPermute",
          "name": "getPeriod",
          "normalized": "a-\u003eb Integer",
          "package": "permutation",
          "partial": "Period",
          "signature": "p-\u003em Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Permute-MPermute.html#v:getPeriod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003egetRank n xs\u003c/code\u003e eturns a permutation, the inverse of which rearranges the \n first \u003ccode\u003en\u003c/code\u003e elements of \u003ccode\u003exs\u003c/code\u003e into ascending order. The returned permutation, \n \u003ccode\u003ep\u003c/code\u003e, has the property that \u003ccode\u003ep[i]\u003c/code\u003e is the rank of the \u003ccode\u003ei\u003c/code\u003eth element of \u003ccode\u003exs\u003c/code\u003e. \n The results are undefined if \u003ccode\u003en\u003c/code\u003e is greater than the length of \u003ccode\u003exs\u003c/code\u003e.\n This is a special case of \u003ccode\u003e\u003ca\u003egetRankBy\u003c/a\u003e\u003c/code\u003e.  \n\u003c/p\u003e",
          "module": "Data.Permute.MPermute",
          "name": "getRank",
          "package": "permutation",
          "signature": "Int -\u003e [a] -\u003e m p",
          "source": "src/Data-Permute-MPermute.html#getRank",
          "type": "function"
        },
        "index": {
          "description": "getRank xs eturns permutation the inverse of which rearranges the first elements of xs into ascending order The returned permutation has the property that is the rank of the th element of xs The results are undefined if is greater than the length of xs This is special case of getRankBy",
          "hierarchy": "Data Permute MPermute",
          "module": "Data.Permute.MPermute",
          "name": "getRank",
          "normalized": "Int-\u003e[a]-\u003eb c",
          "package": "permutation",
          "partial": "Rank",
          "signature": "Int-\u003e[a]-\u003em p",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Permute-MPermute.html#v:getRank"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Permute.MPermute",
          "name": "getRankBy",
          "package": "permutation",
          "signature": "(a -\u003e a -\u003e Ordering) -\u003e Int -\u003e [a] -\u003e m p",
          "source": "src/Data-Permute-MPermute.html#getRankBy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Permute MPermute",
          "module": "Data.Permute.MPermute",
          "name": "getRankBy",
          "normalized": "(a-\u003ea-\u003eOrdering)-\u003eInt-\u003e[a]-\u003eb c",
          "package": "permutation",
          "partial": "Rank By",
          "signature": "(a-\u003ea-\u003eOrdering)-\u003eInt-\u003e[a]-\u003em p",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Permute-MPermute.html#v:getRankBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the size of a permutation.\n\u003c/p\u003e",
          "module": "Data.Permute.MPermute",
          "name": "getSize",
          "package": "permutation",
          "signature": "p -\u003e m Int",
          "source": "src/Data-Permute-MPermute.html#getSize",
          "type": "method"
        },
        "index": {
          "description": "Get the size of permutation",
          "hierarchy": "Data Permute MPermute",
          "module": "Data.Permute.MPermute",
          "name": "getSize",
          "normalized": "a-\u003eb Int",
          "package": "permutation",
          "partial": "Size",
          "signature": "p-\u003em Int",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Permute-MPermute.html#v:getSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003egetSort n xs\u003c/code\u003e sorts the first \u003ccode\u003en\u003c/code\u003e elements of \u003ccode\u003exs\u003c/code\u003e and returns a \n permutation which transforms \u003ccode\u003exs\u003c/code\u003e into sorted order.  The results are\n undefined if \u003ccode\u003en\u003c/code\u003e is greater than the length of \u003ccode\u003exs\u003c/code\u003e.  This is a special \n case of \u003ccode\u003e\u003ca\u003egetSortBy\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Permute.MPermute",
          "name": "getSort",
          "package": "permutation",
          "signature": "Int -\u003e [a] -\u003e m ([a], p)",
          "source": "src/Data-Permute-MPermute.html#getSort",
          "type": "function"
        },
        "index": {
          "description": "getSort xs sorts the first elements of xs and returns permutation which transforms xs into sorted order The results are undefined if is greater than the length of xs This is special case of getSortBy",
          "hierarchy": "Data Permute MPermute",
          "module": "Data.Permute.MPermute",
          "name": "getSort",
          "normalized": "Int-\u003e[a]-\u003eb([a],c)",
          "package": "permutation",
          "partial": "Sort",
          "signature": "Int-\u003e[a]-\u003em([a],p)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Permute-MPermute.html#v:getSort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Permute.MPermute",
          "name": "getSortBy",
          "package": "permutation",
          "signature": "(a -\u003e a -\u003e Ordering) -\u003e Int -\u003e [a] -\u003e m ([a], p)",
          "source": "src/Data-Permute-MPermute.html#getSortBy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Permute MPermute",
          "module": "Data.Permute.MPermute",
          "name": "getSortBy",
          "normalized": "(a-\u003ea-\u003eOrdering)-\u003eInt-\u003e[a]-\u003eb([a],c)",
          "package": "permutation",
          "partial": "Sort By",
          "signature": "(a-\u003ea-\u003eOrdering)-\u003eInt-\u003e[a]-\u003em([a],p)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Permute-MPermute.html#v:getSortBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a lazy list of swaps equivalent to the permutation.  A result of\n \u003ccode\u003e[ (i0,j0), (i1,j1), ..., (ik,jk) ]\u003c/code\u003e means swap \u003ccode\u003ei0 \u003c-\u003e j0\u003c/code\u003e, \n then \u003ccode\u003ei1 \u003c-\u003e j1\u003c/code\u003e, and so on until \u003ccode\u003eik \u003c-\u003e jk\u003c/code\u003e.  The laziness makes this\n function slightly dangerous if you are modifying the permutation.\n\u003c/p\u003e",
          "module": "Data.Permute.MPermute",
          "name": "getSwaps",
          "package": "permutation",
          "signature": "p -\u003e m [(Int, Int)]",
          "source": "src/Data-Permute-MPermute.html#getSwaps",
          "type": "function"
        },
        "index": {
          "description": "Get lazy list of swaps equivalent to the permutation result of i0 j0 i1 j1 ik jk means swap i0 j0 then i1 j1 and so on until ik jk The laziness makes this function slightly dangerous if you are modifying the permutation",
          "hierarchy": "Data Permute MPermute",
          "module": "Data.Permute.MPermute",
          "name": "getSwaps",
          "normalized": "a-\u003eb[(Int,Int)]",
          "package": "permutation",
          "partial": "Swaps",
          "signature": "p-\u003em[(Int,Int)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Permute-MPermute.html#v:getSwaps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns whether or not the permutation is valid.  For it to be valid,\n the numbers \u003ccode\u003e0,...,(n-1)\u003c/code\u003e must all appear exactly once in the stored\n values \u003ccode\u003ep[0],...,p[n-1]\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Permute.MPermute",
          "name": "isValid",
          "package": "permutation",
          "signature": "p -\u003e m Bool",
          "source": "src/Data-Permute-MPermute.html#isValid",
          "type": "function"
        },
        "index": {
          "description": "Returns whether or not the permutation is valid For it to be valid the numbers n-1 must all appear exactly once in the stored values n-1",
          "hierarchy": "Data Permute MPermute",
          "module": "Data.Permute.MPermute",
          "name": "isValid",
          "normalized": "a-\u003eb Bool",
          "package": "permutation",
          "partial": "Valid",
          "signature": "p-\u003em Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Permute-MPermute.html#v:isValid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a new permutation by copying another.\n\u003c/p\u003e",
          "module": "Data.Permute.MPermute",
          "name": "newCopyPermute",
          "package": "permutation",
          "signature": "p -\u003e m p",
          "source": "src/Data-Permute-MPermute.html#newCopyPermute",
          "type": "function"
        },
        "index": {
          "description": "Construct new permutation by copying another",
          "hierarchy": "Data Permute MPermute",
          "module": "Data.Permute.MPermute",
          "name": "newCopyPermute",
          "normalized": "a-\u003eb a",
          "package": "permutation",
          "partial": "Copy Permute",
          "signature": "p-\u003em p",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Permute-MPermute.html#v:newCopyPermute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a permutation from a list of disjoint cycles.\n \u003ccode\u003enewCyclesPermute n cs\u003c/code\u003e creates a permutation of size \u003ccode\u003en\u003c/code\u003e which is the\n composition of the cycles \u003ccode\u003ecs\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Permute.MPermute",
          "name": "newCyclesPermute",
          "package": "permutation",
          "signature": "Int -\u003e [[Int]] -\u003e m p",
          "source": "src/Data-Permute-MPermute.html#newCyclesPermute",
          "type": "function"
        },
        "index": {
          "description": "Construct permutation from list of disjoint cycles newCyclesPermute cs creates permutation of size which is the composition of the cycles cs",
          "hierarchy": "Data Permute MPermute",
          "module": "Data.Permute.MPermute",
          "name": "newCyclesPermute",
          "normalized": "Int-\u003e[[Int]]-\u003ea b",
          "package": "permutation",
          "partial": "Cycles Permute",
          "signature": "Int-\u003e[[Int]]-\u003em p",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Permute-MPermute.html#v:newCyclesPermute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a permutation from a list of elements.  \n \u003ccode\u003enewListPermute n is\u003c/code\u003e creates a permutation of size \u003ccode\u003en\u003c/code\u003e with\n the \u003ccode\u003ei\u003c/code\u003eth element equal to \u003ccode\u003eis !! i\u003c/code\u003e.  For the permutation to be valid,\n the list \u003ccode\u003eis\u003c/code\u003e must have length \u003ccode\u003en\u003c/code\u003e and contain the indices \u003ccode\u003e0..(n-1)\u003c/code\u003e \n exactly once each.\n\u003c/p\u003e",
          "module": "Data.Permute.MPermute",
          "name": "newListPermute",
          "package": "permutation",
          "signature": "Int -\u003e [Int] -\u003e m p",
          "source": "src/Data-Permute-MPermute.html#newListPermute",
          "type": "function"
        },
        "index": {
          "description": "Construct permutation from list of elements newListPermute is creates permutation of size with the th element equal to is For the permutation to be valid the list is must have length and contain the indices n-1 exactly once each",
          "hierarchy": "Data Permute MPermute",
          "module": "Data.Permute.MPermute",
          "name": "newListPermute",
          "normalized": "Int-\u003e[Int]-\u003ea b",
          "package": "permutation",
          "partial": "List Permute",
          "signature": "Int-\u003e[Int]-\u003em p",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Permute-MPermute.html#v:newListPermute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new permutation initialized to be the identity.\n\u003c/p\u003e",
          "module": "Data.Permute.MPermute",
          "name": "newPermute",
          "package": "permutation",
          "signature": "Int -\u003e m p",
          "source": "src/Data-Permute-MPermute.html#newPermute",
          "type": "method"
        },
        "index": {
          "description": "Create new permutation initialized to be the identity",
          "hierarchy": "Data Permute MPermute",
          "module": "Data.Permute.MPermute",
          "name": "newPermute",
          "normalized": "Int-\u003ea b",
          "package": "permutation",
          "partial": "Permute",
          "signature": "Int-\u003em p",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Permute-MPermute.html#v:newPermute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAllocate a new permutation but do not initialize it.\n\u003c/p\u003e",
          "module": "Data.Permute.MPermute",
          "name": "newPermute_",
          "package": "permutation",
          "signature": "Int -\u003e m p",
          "source": "src/Data-Permute-MPermute.html#newPermute_",
          "type": "method"
        },
        "index": {
          "description": "Allocate new permutation but do not initialize it",
          "hierarchy": "Data Permute MPermute",
          "module": "Data.Permute.MPermute",
          "name": "newPermute_",
          "normalized": "Int-\u003ea b",
          "package": "permutation",
          "partial": "Permute",
          "signature": "Int-\u003em p",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Permute-MPermute.html#v:newPermute_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a permutation from a list of swaps.\n \u003ccode\u003enewSwapsPermute n ss\u003c/code\u003e creates a permutation of size \u003ccode\u003en\u003c/code\u003e given a\n sequence of swaps.\n If \u003ccode\u003ess\u003c/code\u003e is \u003ccode\u003e[(i0,j0), (i1,j1), ..., (ik,jk)]\u003c/code\u003e, the\n sequence of swaps is\n \u003ccode\u003ei0 \u003c-\u003e j0\u003c/code\u003e, then \n \u003ccode\u003ei1 \u003c-\u003e j1\u003c/code\u003e, and so on until\n \u003ccode\u003eik \u003c-\u003e jk\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Permute.MPermute",
          "name": "newSwapsPermute",
          "package": "permutation",
          "signature": "Int -\u003e [(Int, Int)] -\u003e m p",
          "source": "src/Data-Permute-MPermute.html#newSwapsPermute",
          "type": "function"
        },
        "index": {
          "description": "Construct permutation from list of swaps newSwapsPermute ss creates permutation of size given sequence of swaps If ss is i0 j0 i1 j1 ik jk the sequence of swaps is i0 j0 then i1 j1 and so on until ik jk",
          "hierarchy": "Data Permute MPermute",
          "module": "Data.Permute.MPermute",
          "name": "newSwapsPermute",
          "normalized": "Int-\u003e[(Int,Int)]-\u003ea b",
          "package": "permutation",
          "partial": "Swaps Permute",
          "signature": "Int-\u003e[(Int,Int)]-\u003em p",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Permute-MPermute.html#v:newSwapsPermute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003esetElem p i x\u003c/code\u003e sets the value of the \u003ccode\u003ei\u003c/code\u003eth element of the permutation\n \u003ccode\u003ep\u003c/code\u003e.  The index \u003ccode\u003ei\u003c/code\u003e must be in the range \u003ccode\u003e0..(n-1)\u003c/code\u003e, where \u003ccode\u003en\u003c/code\u003e is the\n size of the permutation.\n\u003c/p\u003e",
          "module": "Data.Permute.MPermute",
          "name": "setElem",
          "package": "permutation",
          "signature": "p -\u003e Int -\u003e Int -\u003e m ()",
          "source": "src/Data-Permute-MPermute.html#setElem",
          "type": "function"
        },
        "index": {
          "description": "setElem sets the value of the th element of the permutation The index must be in the range n-1 where is the size of the permutation",
          "hierarchy": "Data Permute MPermute",
          "module": "Data.Permute.MPermute",
          "name": "setElem",
          "normalized": "a-\u003eInt-\u003eInt-\u003eb()",
          "package": "permutation",
          "partial": "Elem",
          "signature": "p-\u003eInt-\u003eInt-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Permute-MPermute.html#v:setElem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet all the values of a permutation from a list of elements.\n\u003c/p\u003e",
          "module": "Data.Permute.MPermute",
          "name": "setElems",
          "package": "permutation",
          "signature": "p -\u003e [Int] -\u003e m ()",
          "source": "src/Data-Permute-MPermute.html#setElems",
          "type": "method"
        },
        "index": {
          "description": "Set all the values of permutation from list of elements",
          "hierarchy": "Data Permute MPermute",
          "module": "Data.Permute.MPermute",
          "name": "setElems",
          "normalized": "a-\u003e[Int]-\u003eb()",
          "package": "permutation",
          "partial": "Elems",
          "signature": "p-\u003e[Int]-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Permute-MPermute.html#v:setElems"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet a permutation to the identity.\n\u003c/p\u003e",
          "module": "Data.Permute.MPermute",
          "name": "setIdentity",
          "package": "permutation",
          "signature": "p -\u003e m ()",
          "source": "src/Data-Permute-MPermute.html#setIdentity",
          "type": "function"
        },
        "index": {
          "description": "Set permutation to the identity",
          "hierarchy": "Data Permute MPermute",
          "module": "Data.Permute.MPermute",
          "name": "setIdentity",
          "normalized": "a-\u003eb()",
          "package": "permutation",
          "partial": "Identity",
          "signature": "p-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Permute-MPermute.html#v:setIdentity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdvance a permutation to the next permutation in lexicogrphic order and\n return \u003ccode\u003eTrue\u003c/code\u003e.  If no further permutaitons are available, return \u003ccode\u003eFalse\u003c/code\u003e and\n leave the permutation unmodified.  Starting with the idendity permutation \n and repeatedly calling \u003ccode\u003esetNext\u003c/code\u003e will iterate through all permutations of a \n given size.\n\u003c/p\u003e",
          "module": "Data.Permute.MPermute",
          "name": "setNext",
          "package": "permutation",
          "signature": "p -\u003e m Bool",
          "source": "src/Data-Permute-MPermute.html#setNext",
          "type": "function"
        },
        "index": {
          "description": "Advance permutation to the next permutation in lexicogrphic order and return True If no further permutaitons are available return False and leave the permutation unmodified Starting with the idendity permutation and repeatedly calling setNext will iterate through all permutations of given size",
          "hierarchy": "Data Permute MPermute",
          "module": "Data.Permute.MPermute",
          "name": "setNext",
          "normalized": "a-\u003eb Bool",
          "package": "permutation",
          "partial": "Next",
          "signature": "p-\u003em Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Permute-MPermute.html#v:setNext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStep backwards to the previous permutation in lexicographic order and\n return \u003ccode\u003eTrue\u003c/code\u003e.  If there is no previous permutation, return \u003ccode\u003eFalse\u003c/code\u003e and\n leave the permutation unmodified.\n\u003c/p\u003e",
          "module": "Data.Permute.MPermute",
          "name": "setPrev",
          "package": "permutation",
          "signature": "p -\u003e m Bool",
          "source": "src/Data-Permute-MPermute.html#setPrev",
          "type": "function"
        },
        "index": {
          "description": "Step backwards to the previous permutation in lexicographic order and return True If there is no previous permutation return False and leave the permutation unmodified",
          "hierarchy": "Data Permute MPermute",
          "module": "Data.Permute.MPermute",
          "name": "setPrev",
          "normalized": "a-\u003eb Bool",
          "package": "permutation",
          "partial": "Prev",
          "signature": "p-\u003em Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Permute-MPermute.html#v:setPrev"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eswapElems p i j\u003c/code\u003e exchanges the \u003ccode\u003ei\u003c/code\u003eth and \u003ccode\u003ej\u003c/code\u003eth elements of the \n permutation \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Permute.MPermute",
          "name": "swapElems",
          "package": "permutation",
          "signature": "p -\u003e Int -\u003e Int -\u003e m ()",
          "source": "src/Data-Permute-MPermute.html#swapElems",
          "type": "function"
        },
        "index": {
          "description": "swapElems exchanges the th and th elements of the permutation",
          "hierarchy": "Data Permute MPermute",
          "module": "Data.Permute.MPermute",
          "name": "swapElems",
          "normalized": "a-\u003eInt-\u003eInt-\u003eb()",
          "package": "permutation",
          "partial": "Elems",
          "signature": "p-\u003eInt-\u003eInt-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Permute-MPermute.html#v:swapElems"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert an immutable permutation to a mutable one.\n\u003c/p\u003e",
          "module": "Data.Permute.MPermute",
          "name": "thaw",
          "package": "permutation",
          "signature": "Permute -\u003e m p",
          "source": "src/Data-Permute-MPermute.html#thaw",
          "type": "function"
        },
        "index": {
          "description": "Convert an immutable permutation to mutable one",
          "hierarchy": "Data Permute MPermute",
          "module": "Data.Permute.MPermute",
          "name": "thaw",
          "normalized": "Permute-\u003ea b",
          "package": "permutation",
          "signature": "Permute-\u003em p",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Permute-MPermute.html#v:thaw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Permute.MPermute",
          "name": "unsafeFreeze",
          "package": "permutation",
          "signature": "p -\u003e m Permute",
          "source": "src/Data-Permute-MPermute.html#unsafeFreeze",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Permute MPermute",
          "module": "Data.Permute.MPermute",
          "name": "unsafeFreeze",
          "normalized": "a-\u003eb Permute",
          "package": "permutation",
          "partial": "Freeze",
          "signature": "p-\u003em Permute",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Permute-MPermute.html#v:unsafeFreeze"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Permute.MPermute",
          "name": "unsafeGetElem",
          "package": "permutation",
          "signature": "p -\u003e Int -\u003e m Int",
          "source": "src/Data-Permute-MPermute.html#unsafeGetElem",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Permute MPermute",
          "module": "Data.Permute.MPermute",
          "name": "unsafeGetElem",
          "normalized": "a-\u003eInt-\u003eb Int",
          "package": "permutation",
          "partial": "Get Elem",
          "signature": "p-\u003eInt-\u003em Int",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Permute-MPermute.html#v:unsafeGetElem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Permute.MPermute",
          "name": "unsafeNewCyclesPermute",
          "package": "permutation",
          "signature": "Int -\u003e [[Int]] -\u003e m p",
          "source": "src/Data-Permute-MPermute.html#unsafeNewCyclesPermute",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Permute MPermute",
          "module": "Data.Permute.MPermute",
          "name": "unsafeNewCyclesPermute",
          "normalized": "Int-\u003e[[Int]]-\u003ea b",
          "package": "permutation",
          "partial": "New Cycles Permute",
          "signature": "Int-\u003e[[Int]]-\u003em p",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Permute-MPermute.html#v:unsafeNewCyclesPermute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Permute.MPermute",
          "name": "unsafeNewListPermute",
          "package": "permutation",
          "signature": "Int -\u003e [Int] -\u003e m p",
          "source": "src/Data-Permute-MPermute.html#unsafeNewListPermute",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Permute MPermute",
          "module": "Data.Permute.MPermute",
          "name": "unsafeNewListPermute",
          "normalized": "Int-\u003e[Int]-\u003ea b",
          "package": "permutation",
          "partial": "New List Permute",
          "signature": "Int-\u003e[Int]-\u003em p",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Permute-MPermute.html#v:unsafeNewListPermute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Permute.MPermute",
          "name": "unsafeNewSwapsPermute",
          "package": "permutation",
          "signature": "Int -\u003e [(Int, Int)] -\u003e m p",
          "source": "src/Data-Permute-MPermute.html#unsafeNewSwapsPermute",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Permute MPermute",
          "module": "Data.Permute.MPermute",
          "name": "unsafeNewSwapsPermute",
          "normalized": "Int-\u003e[(Int,Int)]-\u003ea b",
          "package": "permutation",
          "partial": "New Swaps Permute",
          "signature": "Int-\u003e[(Int,Int)]-\u003em p",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Permute-MPermute.html#v:unsafeNewSwapsPermute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Permute.MPermute",
          "name": "unsafeSetElem",
          "package": "permutation",
          "signature": "p -\u003e Int -\u003e Int -\u003e m ()",
          "source": "src/Data-Permute-MPermute.html#unsafeSetElem",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Permute MPermute",
          "module": "Data.Permute.MPermute",
          "name": "unsafeSetElem",
          "normalized": "a-\u003eInt-\u003eInt-\u003eb()",
          "package": "permutation",
          "partial": "Set Elem",
          "signature": "p-\u003eInt-\u003eInt-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Permute-MPermute.html#v:unsafeSetElem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Permute.MPermute",
          "name": "unsafeSwapElems",
          "package": "permutation",
          "signature": "p -\u003e Int -\u003e Int -\u003e m ()",
          "source": "src/Data-Permute-MPermute.html#unsafeSwapElems",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Permute MPermute",
          "module": "Data.Permute.MPermute",
          "name": "unsafeSwapElems",
          "normalized": "a-\u003eInt-\u003eInt-\u003eb()",
          "package": "permutation",
          "partial": "Swap Elems",
          "signature": "p-\u003eInt-\u003eInt-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Permute-MPermute.html#v:unsafeSwapElems"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Permute.MPermute",
          "name": "unsafeThaw",
          "package": "permutation",
          "signature": "Permute -\u003e m p",
          "source": "src/Data-Permute-MPermute.html#unsafeThaw",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Permute MPermute",
          "module": "Data.Permute.MPermute",
          "name": "unsafeThaw",
          "normalized": "Permute-\u003ea b",
          "package": "permutation",
          "partial": "Thaw",
          "signature": "Permute-\u003em p",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Permute-MPermute.html#v:unsafeThaw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMutable permutations in the \u003ccode\u003e\u003ca\u003eST\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Permute.ST",
          "name": "ST",
          "package": "permutation",
          "source": "src/Data-Permute-ST.html",
          "type": "module"
        },
        "index": {
          "description": "Mutable permutations in the ST monad",
          "hierarchy": "Data Permute ST",
          "module": "Data.Permute.ST",
          "name": "ST",
          "package": "permutation",
          "partial": "ST",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Permute-ST.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA mutable permutation that can be manipulated in the \u003ccode\u003e\u003ca\u003eST\u003c/a\u003e\u003c/code\u003e monad. The\n type argument \u003ccode\u003es\u003c/code\u003e is the state variable argument for the \u003ccode\u003e\u003ca\u003eST\u003c/a\u003e\u003c/code\u003e type.\n\u003c/p\u003e",
          "module": "Data.Permute.ST",
          "name": "STPermute",
          "package": "permutation",
          "source": "src/Data-Permute-Base.html#STPermute",
          "type": "data"
        },
        "index": {
          "description": "mutable permutation that can be manipulated in the ST monad The type argument is the state variable argument for the ST type",
          "hierarchy": "Data Permute ST",
          "module": "Data.Permute.ST",
          "name": "STPermute",
          "package": "permutation",
          "partial": "STPermute",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Permute-ST.html#t:STPermute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA safe way to create and work with a mutable permutation before returning \n an immutable one for later perusal. This function avoids copying the \n permutation before returning it - it uses unsafeFreeze internally, but this \n wrapper is a safe interface to that function. \n\u003c/p\u003e",
          "module": "Data.Permute.ST",
          "name": "runSTPermute",
          "package": "permutation",
          "signature": "(forall s.  ST s (STPermute s)) -\u003e Permute",
          "source": "src/Data-Permute-ST.html#runSTPermute",
          "type": "function"
        },
        "index": {
          "description": "safe way to create and work with mutable permutation before returning an immutable one for later perusal This function avoids copying the permutation before returning it it uses unsafeFreeze internally but this wrapper is safe interface to that function",
          "hierarchy": "Data Permute ST",
          "module": "Data.Permute.ST",
          "name": "runSTPermute",
          "normalized": "(a b ST c(STPermute c))-\u003ePermute",
          "package": "permutation",
          "partial": "STPermute",
          "signature": "(forall s. ST s(STPermute s))-\u003ePermute",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Permute-ST.html#v:runSTPermute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eImmutable permutations.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Permute",
          "name": "Permute",
          "package": "permutation",
          "source": "src/Data-Permute.html",
          "type": "module"
        },
        "index": {
          "description": "Immutable permutations",
          "hierarchy": "Data Permute",
          "module": "Data.Permute",
          "name": "Permute",
          "package": "permutation",
          "partial": "Permute",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Permute.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe immutable permutation data type.\n Internally, a permutation of size \u003ccode\u003en\u003c/code\u003e is stored as an\n \u003ccode\u003e0\u003c/code\u003e-based array of \u003ccode\u003en\u003c/code\u003e \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003es.  The permutation represents a reordering of\n the integers \u003ccode\u003e0, ..., (n-1)\u003c/code\u003e.  The permutation sents the value p[i] to \n \u003ccode\u003ei\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "Data.Permute",
          "name": "Permute",
          "package": "permutation",
          "source": "src/Data-Permute-Base.html#Permute",
          "type": "data"
        },
        "index": {
          "description": "The immutable permutation data type Internally permutation of size is stored as an based array of Int The permutation represents reordering of the integers n-1 The permutation sents the value to",
          "hierarchy": "Data Permute",
          "module": "Data.Permute",
          "name": "Permute",
          "package": "permutation",
          "partial": "Permute",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Permute.html#t:Permute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eat p i\u003c/code\u003e gets the value of the \u003ccode\u003ei\u003c/code\u003eth element of the permutation\n \u003ccode\u003ep\u003c/code\u003e.  The index \u003ccode\u003ei\u003c/code\u003e must be in the range \u003ccode\u003e0..(n-1)\u003c/code\u003e, where \u003ccode\u003en\u003c/code\u003e is the\n size of the permutation.\n\u003c/p\u003e",
          "module": "Data.Permute",
          "name": "at",
          "package": "permutation",
          "signature": "Permute -\u003e Int -\u003e Int",
          "source": "src/Data-Permute.html#at",
          "type": "function"
        },
        "index": {
          "description": "at gets the value of the th element of the permutation The index must be in the range n-1 where is the size of the permutation",
          "hierarchy": "Data Permute",
          "module": "Data.Permute",
          "name": "at",
          "normalized": "Permute-\u003eInt-\u003eInt",
          "package": "permutation",
          "signature": "Permute-\u003eInt-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Permute.html#v:at"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ecycleFrom p i\u003c/code\u003e gets the list of elements reachable from \u003ccode\u003ei\u003c/code\u003e by\n repeated application of \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Permute",
          "name": "cycleFrom",
          "package": "permutation",
          "signature": "Permute -\u003e Int -\u003e [Int]",
          "source": "src/Data-Permute.html#cycleFrom",
          "type": "function"
        },
        "index": {
          "description": "cycleFrom gets the list of elements reachable from by repeated application of",
          "hierarchy": "Data Permute",
          "module": "Data.Permute",
          "name": "cycleFrom",
          "normalized": "Permute-\u003eInt-\u003e[Int]",
          "package": "permutation",
          "partial": "From",
          "signature": "Permute-\u003eInt-\u003e[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Permute.html#v:cycleFrom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ecycles p\u003c/code\u003e returns the list of disjoin cycles in \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Permute",
          "name": "cycles",
          "package": "permutation",
          "signature": "Permute -\u003e [[Int]]",
          "source": "src/Data-Permute.html#cycles",
          "type": "function"
        },
        "index": {
          "description": "cycles returns the list of disjoin cycles in",
          "hierarchy": "Data Permute",
          "module": "Data.Permute",
          "name": "cycles",
          "normalized": "Permute-\u003e[[Int]]",
          "package": "permutation",
          "signature": "Permute-\u003e[[Int]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Permute.html#v:cycles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a permutation from a list of disjoint cycles.\n \u003ccode\u003ecyclesPermute n cs\u003c/code\u003e creates a permutation of size \u003ccode\u003en\u003c/code\u003e which is the\n composition of the cycles \u003ccode\u003ecs\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Permute",
          "name": "cyclesPermute",
          "package": "permutation",
          "signature": "Int -\u003e [[Int]] -\u003e Permute",
          "source": "src/Data-Permute.html#cyclesPermute",
          "type": "function"
        },
        "index": {
          "description": "Construct permutation from list of disjoint cycles cyclesPermute cs creates permutation of size which is the composition of the cycles cs",
          "hierarchy": "Data Permute",
          "module": "Data.Permute",
          "name": "cyclesPermute",
          "normalized": "Int-\u003e[[Int]]-\u003ePermute",
          "package": "permutation",
          "partial": "Permute",
          "signature": "Int-\u003e[[Int]]-\u003ePermute",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Permute.html#v:cyclesPermute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a list of the permutation elements.\n\u003c/p\u003e",
          "module": "Data.Permute",
          "name": "elems",
          "package": "permutation",
          "signature": "Permute -\u003e [Int]",
          "source": "src/Data-Permute-Base.html#elems",
          "type": "function"
        },
        "index": {
          "description": "Get list of the permutation elements",
          "hierarchy": "Data Permute",
          "module": "Data.Permute",
          "name": "elems",
          "normalized": "Permute-\u003e[Int]",
          "package": "permutation",
          "signature": "Permute-\u003e[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Permute.html#v:elems"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eindexOf p x\u003c/code\u003e gets an index \u003ccode\u003ei\u003c/code\u003e such that \u003ccode\u003eat p i\u003c/code\u003e equals \u003ccode\u003ex\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Permute",
          "name": "indexOf",
          "package": "permutation",
          "signature": "Permute -\u003e Int -\u003e Int",
          "source": "src/Data-Permute.html#indexOf",
          "type": "function"
        },
        "index": {
          "description": "indexOf gets an index such that at equals",
          "hierarchy": "Data Permute",
          "module": "Data.Permute",
          "name": "indexOf",
          "normalized": "Permute-\u003eInt-\u003eInt",
          "package": "permutation",
          "partial": "Of",
          "signature": "Permute-\u003eInt-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Permute.html#v:indexOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a list of swaps equivalent to the inverse of permutation.\n\u003c/p\u003e",
          "module": "Data.Permute",
          "name": "invSwaps",
          "package": "permutation",
          "signature": "Permute -\u003e [(Int, Int)]",
          "source": "src/Data-Permute.html#invSwaps",
          "type": "function"
        },
        "index": {
          "description": "Get list of swaps equivalent to the inverse of permutation",
          "hierarchy": "Data Permute",
          "module": "Data.Permute",
          "name": "invSwaps",
          "normalized": "Permute-\u003e[(Int,Int)]",
          "package": "permutation",
          "partial": "Swaps",
          "signature": "Permute-\u003e[(Int,Int)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Permute.html#v:invSwaps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the inverse of a permutation.\n\u003c/p\u003e",
          "module": "Data.Permute",
          "name": "inverse",
          "package": "permutation",
          "signature": "Permute -\u003e Permute",
          "source": "src/Data-Permute.html#inverse",
          "type": "function"
        },
        "index": {
          "description": "Get the inverse of permutation",
          "hierarchy": "Data Permute",
          "module": "Data.Permute",
          "name": "inverse",
          "normalized": "Permute-\u003ePermute",
          "package": "permutation",
          "signature": "Permute-\u003ePermute",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Permute.html#v:inverse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhether or not the permutation is made from an even number of swaps\n\u003c/p\u003e",
          "module": "Data.Permute",
          "name": "isEven",
          "package": "permutation",
          "signature": "Permute -\u003e Bool",
          "source": "src/Data-Permute.html#isEven",
          "type": "function"
        },
        "index": {
          "description": "Whether or not the permutation is made from an even number of swaps",
          "hierarchy": "Data Permute",
          "module": "Data.Permute",
          "name": "isEven",
          "normalized": "Permute-\u003eBool",
          "package": "permutation",
          "partial": "Even",
          "signature": "Permute-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Permute.html#v:isEven"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a permutation from a list of elements.  \n \u003ccode\u003elistPermute n is\u003c/code\u003e creates a permutation of size \u003ccode\u003en\u003c/code\u003e with\n the \u003ccode\u003ei\u003c/code\u003eth element equal to \u003ccode\u003eis !! i\u003c/code\u003e.  For the permutation to be valid,\n the list \u003ccode\u003eis\u003c/code\u003e must have length \u003ccode\u003en\u003c/code\u003e and contain the indices \u003ccode\u003e0..(n-1)\u003c/code\u003e \n exactly once each.\n\u003c/p\u003e",
          "module": "Data.Permute",
          "name": "listPermute",
          "package": "permutation",
          "signature": "Int -\u003e [Int] -\u003e Permute",
          "source": "src/Data-Permute.html#listPermute",
          "type": "function"
        },
        "index": {
          "description": "Construct permutation from list of elements listPermute is creates permutation of size with the th element equal to is For the permutation to be valid the list is must have length and contain the indices n-1 exactly once each",
          "hierarchy": "Data Permute",
          "module": "Data.Permute",
          "name": "listPermute",
          "normalized": "Int-\u003e[Int]-\u003ePermute",
          "package": "permutation",
          "partial": "Permute",
          "signature": "Int-\u003e[Int]-\u003ePermute",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Permute.html#v:listPermute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the next permutation in lexicographic order, or \u003ccode\u003eNothing\u003c/code\u003e if\n there are no further permutations.  Starting with the identity permutation\n and repeatedly calling this function will iterate through all permutations\n of a given order.\n\u003c/p\u003e",
          "module": "Data.Permute",
          "name": "next",
          "package": "permutation",
          "signature": "Permute -\u003e Maybe Permute",
          "source": "src/Data-Permute.html#next",
          "type": "function"
        },
        "index": {
          "description": "Return the next permutation in lexicographic order or Nothing if there are no further permutations Starting with the identity permutation and repeatedly calling this function will iterate through all permutations of given order",
          "hierarchy": "Data Permute",
          "module": "Data.Permute",
          "name": "next",
          "normalized": "Permute-\u003eMaybe Permute",
          "package": "permutation",
          "signature": "Permute-\u003eMaybe Permute",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Permute.html#v:next"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eorder n xs\u003c/code\u003e returns a permutation which rearranges the first \u003ccode\u003en\u003c/code\u003e\n elements of \u003ccode\u003exs\u003c/code\u003e into ascending order. The results are undefined if \u003ccode\u003en\u003c/code\u003e is \n greater than the length of \u003ccode\u003exs\u003c/code\u003e.  This is a special case of \u003ccode\u003e\u003ca\u003eorderBy\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Permute",
          "name": "order",
          "package": "permutation",
          "signature": "Int -\u003e [a] -\u003e Permute",
          "source": "src/Data-Permute.html#order",
          "type": "function"
        },
        "index": {
          "description": "order xs returns permutation which rearranges the first elements of xs into ascending order The results are undefined if is greater than the length of xs This is special case of orderBy",
          "hierarchy": "Data Permute",
          "module": "Data.Permute",
          "name": "order",
          "normalized": "Int-\u003e[a]-\u003ePermute",
          "package": "permutation",
          "signature": "Int-\u003e[a]-\u003ePermute",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Permute.html#v:order"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Permute",
          "name": "orderBy",
          "package": "permutation",
          "signature": "(a -\u003e a -\u003e Ordering) -\u003e Int -\u003e [a] -\u003e Permute",
          "source": "src/Data-Permute.html#orderBy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Permute",
          "module": "Data.Permute",
          "name": "orderBy",
          "normalized": "(a-\u003ea-\u003eOrdering)-\u003eInt-\u003e[a]-\u003ePermute",
          "package": "permutation",
          "partial": "By",
          "signature": "(a-\u003ea-\u003eOrdering)-\u003eInt-\u003e[a]-\u003ePermute",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Permute.html#v:orderBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eperiod p\u003c/code\u003e - The first power of \u003ccode\u003ep\u003c/code\u003e that is the identity permutation\n\u003c/p\u003e",
          "module": "Data.Permute",
          "name": "period",
          "package": "permutation",
          "signature": "Permute -\u003e Integer",
          "source": "src/Data-Permute.html#period",
          "type": "function"
        },
        "index": {
          "description": "period The first power of that is the identity permutation",
          "hierarchy": "Data Permute",
          "module": "Data.Permute",
          "name": "period",
          "normalized": "Permute-\u003eInteger",
          "package": "permutation",
          "signature": "Permute-\u003eInteger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Permute.html#v:period"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct an identity permutation of the given size.\n\u003c/p\u003e",
          "module": "Data.Permute",
          "name": "permute",
          "package": "permutation",
          "signature": "Int -\u003e Permute",
          "source": "src/Data-Permute.html#permute",
          "type": "function"
        },
        "index": {
          "description": "Construct an identity permutation of the given size",
          "hierarchy": "Data Permute",
          "module": "Data.Permute",
          "name": "permute",
          "normalized": "Int-\u003ePermute",
          "package": "permutation",
          "signature": "Int-\u003ePermute",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Permute.html#v:permute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the previous permutation in lexicographic order, or \u003ccode\u003eNothing\u003c/code\u003e\n if no such permutation exists.\n\u003c/p\u003e",
          "module": "Data.Permute",
          "name": "prev",
          "package": "permutation",
          "signature": "Permute -\u003e Maybe Permute",
          "source": "src/Data-Permute.html#prev",
          "type": "function"
        },
        "index": {
          "description": "Return the previous permutation in lexicographic order or Nothing if no such permutation exists",
          "hierarchy": "Data Permute",
          "module": "Data.Permute",
          "name": "prev",
          "normalized": "Permute-\u003eMaybe Permute",
          "package": "permutation",
          "signature": "Permute-\u003eMaybe Permute",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Permute.html#v:prev"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003erank n xs\u003c/code\u003e eturns a permutation, the inverse of which rearranges the \n first \u003ccode\u003en\u003c/code\u003e elements of \u003ccode\u003exs\u003c/code\u003e into ascending order. The returned permutation, \n \u003ccode\u003ep\u003c/code\u003e, has the property that \u003ccode\u003ep[i]\u003c/code\u003e is the rank of the \u003ccode\u003ei\u003c/code\u003eth element of \u003ccode\u003exs\u003c/code\u003e. \n The results are undefined if \u003ccode\u003en\u003c/code\u003e is greater than the length of \u003ccode\u003exs\u003c/code\u003e.\n This is a special case of \u003ccode\u003e\u003ca\u003erankBy\u003c/a\u003e\u003c/code\u003e.  \n\u003c/p\u003e",
          "module": "Data.Permute",
          "name": "rank",
          "package": "permutation",
          "signature": "Int -\u003e [a] -\u003e Permute",
          "source": "src/Data-Permute.html#rank",
          "type": "function"
        },
        "index": {
          "description": "rank xs eturns permutation the inverse of which rearranges the first elements of xs into ascending order The returned permutation has the property that is the rank of the th element of xs The results are undefined if is greater than the length of xs This is special case of rankBy",
          "hierarchy": "Data Permute",
          "module": "Data.Permute",
          "name": "rank",
          "normalized": "Int-\u003e[a]-\u003ePermute",
          "package": "permutation",
          "signature": "Int-\u003e[a]-\u003ePermute",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Permute.html#v:rank"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Permute",
          "name": "rankBy",
          "package": "permutation",
          "signature": "(a -\u003e a -\u003e Ordering) -\u003e Int -\u003e [a] -\u003e Permute",
          "source": "src/Data-Permute.html#rankBy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Permute",
          "module": "Data.Permute",
          "name": "rankBy",
          "normalized": "(a-\u003ea-\u003eOrdering)-\u003eInt-\u003e[a]-\u003ePermute",
          "package": "permutation",
          "partial": "By",
          "signature": "(a-\u003ea-\u003eOrdering)-\u003eInt-\u003e[a]-\u003ePermute",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Permute.html#v:rankBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the size of the permutation.\n\u003c/p\u003e",
          "module": "Data.Permute",
          "name": "size",
          "package": "permutation",
          "signature": "Permute -\u003e Int",
          "source": "src/Data-Permute-Base.html#size",
          "type": "function"
        },
        "index": {
          "description": "Get the size of the permutation",
          "hierarchy": "Data Permute",
          "module": "Data.Permute",
          "name": "size",
          "normalized": "Permute-\u003eInt",
          "package": "permutation",
          "signature": "Permute-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Permute.html#v:size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003esort n xs\u003c/code\u003e sorts the first \u003ccode\u003en\u003c/code\u003e elements of \u003ccode\u003exs\u003c/code\u003e and returns a \n permutation which transforms \u003ccode\u003exs\u003c/code\u003e into sorted order.  The results are\n undefined if \u003ccode\u003en\u003c/code\u003e is greater than the length of \u003ccode\u003exs\u003c/code\u003e.  This is a special \n case of \u003ccode\u003e\u003ca\u003esortBy\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Permute",
          "name": "sort",
          "package": "permutation",
          "signature": "Int -\u003e [a] -\u003e ([a], Permute)",
          "source": "src/Data-Permute.html#sort",
          "type": "function"
        },
        "index": {
          "description": "sort xs sorts the first elements of xs and returns permutation which transforms xs into sorted order The results are undefined if is greater than the length of xs This is special case of sortBy",
          "hierarchy": "Data Permute",
          "module": "Data.Permute",
          "name": "sort",
          "normalized": "Int-\u003e[a]-\u003e([a],Permute)",
          "package": "permutation",
          "signature": "Int-\u003e[a]-\u003e([a],Permute)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Permute.html#v:sort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Permute",
          "name": "sortBy",
          "package": "permutation",
          "signature": "(a -\u003e a -\u003e Ordering) -\u003e Int -\u003e [a] -\u003e ([a], Permute)",
          "source": "src/Data-Permute.html#sortBy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Permute",
          "module": "Data.Permute",
          "name": "sortBy",
          "normalized": "(a-\u003ea-\u003eOrdering)-\u003eInt-\u003e[a]-\u003e([a],Permute)",
          "package": "permutation",
          "partial": "By",
          "signature": "(a-\u003ea-\u003eOrdering)-\u003eInt-\u003e[a]-\u003e([a],Permute)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Permute.html#v:sortBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a list of swaps equivalent to the permutation.  A result of\n \u003ccode\u003e[ (i0,j0), (i1,j1), ..., (ik,jk) ]\u003c/code\u003e means swap \u003ccode\u003ei0 \u003c-\u003e j0\u003c/code\u003e, \n then \u003ccode\u003ei1 \u003c-\u003e j1\u003c/code\u003e, and so on until \u003ccode\u003eik \u003c-\u003e jk\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Permute",
          "name": "swaps",
          "package": "permutation",
          "signature": "Permute -\u003e [(Int, Int)]",
          "source": "src/Data-Permute.html#swaps",
          "type": "function"
        },
        "index": {
          "description": "Get list of swaps equivalent to the permutation result of i0 j0 i1 j1 ik jk means swap i0 j0 then i1 j1 and so on until ik jk",
          "hierarchy": "Data Permute",
          "module": "Data.Permute",
          "name": "swaps",
          "normalized": "Permute-\u003e[(Int,Int)]",
          "package": "permutation",
          "signature": "Permute-\u003e[(Int,Int)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Permute.html#v:swaps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a permutation from a list of swaps.\n \u003ccode\u003eswapsPermute n ss\u003c/code\u003e creats a permutation of size \u003ccode\u003en\u003c/code\u003e given by a\n sequence of swaps.\n If \u003ccode\u003ess\u003c/code\u003e is \u003ccode\u003e[(i0,j0), (i1,j1), ..., (ik,jk)]\u003c/code\u003e, the\n sequence of swaps is\n \u003ccode\u003ei0 \u003c-\u003e j0\u003c/code\u003e, then \n \u003ccode\u003ei1 \u003c-\u003e j1\u003c/code\u003e, and so on until\n \u003ccode\u003eik \u003c-\u003e jk\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Permute",
          "name": "swapsPermute",
          "package": "permutation",
          "signature": "Int -\u003e [(Int, Int)] -\u003e Permute",
          "source": "src/Data-Permute.html#swapsPermute",
          "type": "function"
        },
        "index": {
          "description": "Construct permutation from list of swaps swapsPermute ss creats permutation of size given by sequence of swaps If ss is i0 j0 i1 j1 ik jk the sequence of swaps is i0 j0 then i1 j1 and so on until ik jk",
          "hierarchy": "Data Permute",
          "module": "Data.Permute",
          "name": "swapsPermute",
          "normalized": "Int-\u003e[(Int,Int)]-\u003ePermute",
          "package": "permutation",
          "partial": "Permute",
          "signature": "Int-\u003e[(Int,Int)]-\u003ePermute",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Permute.html#v:swapsPermute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Permute",
          "name": "unsafeAt",
          "package": "permutation",
          "signature": "Permute -\u003e Int -\u003e Int",
          "source": "src/Data-Permute-Base.html#unsafeAt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Permute",
          "module": "Data.Permute",
          "name": "unsafeAt",
          "normalized": "Permute-\u003eInt-\u003eInt",
          "package": "permutation",
          "partial": "At",
          "signature": "Permute-\u003eInt-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/permutation/docs/Data-Permute.html#v:unsafeAt"
      }
    }
  ]
]