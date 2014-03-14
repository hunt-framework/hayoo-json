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
        "word": "sym"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eConvenience functions for dealing with arrays of \u003ccode\u003e\u003ca\u003eCLong\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.CLongArray",
          "name": "CLongArray",
          "package": "sym",
          "source": "src/Data-CLongArray.html",
          "type": "module"
        },
        "index": {
          "description": "Convenience functions for dealing with arrays of CLong",
          "hierarchy": "Data CLongArray",
          "module": "Data.CLongArray",
          "name": "CLongArray",
          "package": "sym",
          "partial": "CLong Array",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sym/docs/Data-CLongArray.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn array of \u003ccode\u003e\u003ca\u003eCLong\u003c/a\u003e\u003c/code\u003es\n\u003c/p\u003e",
          "module": "Data.CLongArray",
          "name": "CLongArray",
          "package": "sym",
          "source": "src/Data-CLongArray.html#CLongArray",
          "type": "data"
        },
        "index": {
          "description": "An array of CLong",
          "hierarchy": "Data CLongArray",
          "module": "Data.CLongArray",
          "name": "CLongArray",
          "package": "sym",
          "partial": "CLong Array",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sym/docs/Data-CLongArray.html#t:CLongArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ew `at` i\u003c/code\u003e is the value of \u003ccode\u003ew\u003c/code\u003e at \u003ccode\u003ei\u003c/code\u003e, where \u003ccode\u003ei\u003c/code\u003e is in \u003ccode\u003e[0..size w-1]\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.CLongArray",
          "name": "at",
          "package": "sym",
          "signature": "CLongArray -\u003e Int -\u003e Int",
          "source": "src/Data-CLongArray.html#at",
          "type": "function"
        },
        "index": {
          "description": "at is the value of at where is in size w-1",
          "hierarchy": "Data CLongArray",
          "module": "Data.CLongArray",
          "name": "at",
          "normalized": "CLongArray-\u003eInt-\u003eInt",
          "package": "sym",
          "signature": "CLongArray-\u003eInt-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sym/docs/Data-CLongArray.html#v:at"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct an array from a list of elements.\n\u003c/p\u003e",
          "module": "Data.CLongArray",
          "name": "fromList",
          "package": "sym",
          "signature": "[Int] -\u003e CLongArray",
          "source": "src/Data-CLongArray.html#fromList",
          "type": "function"
        },
        "index": {
          "description": "Construct an array from list of elements",
          "hierarchy": "Data CLongArray",
          "module": "Data.CLongArray",
          "name": "fromList",
          "normalized": "[Int]-\u003eCLongArray",
          "package": "sym",
          "partial": "List",
          "signature": "[Int]-\u003eCLongArray",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sym/docs/Data-CLongArray.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a function to every element of an array and its index.\n\u003c/p\u003e",
          "module": "Data.CLongArray",
          "name": "imap",
          "package": "sym",
          "signature": "(Int -\u003e CLong -\u003e CLong) -\u003e CLongArray -\u003e CLongArray",
          "source": "src/Data-CLongArray.html#imap",
          "type": "function"
        },
        "index": {
          "description": "Apply function to every element of an array and its index",
          "hierarchy": "Data CLongArray",
          "module": "Data.CLongArray",
          "name": "imap",
          "normalized": "(Int-\u003eCLong-\u003eCLong)-\u003eCLongArray-\u003eCLongArray",
          "package": "sym",
          "signature": "(Int-\u003eCLong-\u003eCLong)-\u003eCLongArray-\u003eCLongArray",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sym/docs/Data-CLongArray.html#v:imap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe size/length of the given array.\n\u003c/p\u003e",
          "module": "Data.CLongArray",
          "name": "size",
          "package": "sym",
          "signature": "CLongArray -\u003e Int",
          "source": "src/Data-CLongArray.html#size",
          "type": "function"
        },
        "index": {
          "description": "The size length of the given array",
          "hierarchy": "Data CLongArray",
          "module": "Data.CLongArray",
          "name": "size",
          "normalized": "CLongArray-\u003eInt",
          "package": "sym",
          "signature": "CLongArray-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sym/docs/Data-CLongArray.html#v:size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSlice a \u003ccode\u003e\u003ca\u003eCLongArray\u003c/a\u003e\u003c/code\u003e into contiguous segments of the given\n sizes. Each segment size must be positive and they must sum to the\n size of the array.\n\u003c/p\u003e",
          "module": "Data.CLongArray",
          "name": "slice",
          "package": "sym",
          "signature": "[Int] -\u003e CLongArray -\u003e [CLongArray]",
          "source": "src/Data-CLongArray.html#slice",
          "type": "function"
        },
        "index": {
          "description": "Slice CLongArray into contiguous segments of the given sizes Each segment size must be positive and they must sum to the size of the array",
          "hierarchy": "Data CLongArray",
          "module": "Data.CLongArray",
          "name": "slice",
          "normalized": "[Int]-\u003eCLongArray-\u003e[CLongArray]",
          "package": "sym",
          "signature": "[Int]-\u003eCLongArray-\u003e[CLongArray]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sym/docs/Data-CLongArray.html#v:slice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe list of elements.\n\u003c/p\u003e",
          "module": "Data.CLongArray",
          "name": "toList",
          "package": "sym",
          "signature": "CLongArray -\u003e [Int]",
          "source": "src/Data-CLongArray.html#toList",
          "type": "function"
        },
        "index": {
          "description": "The list of elements",
          "hierarchy": "Data CLongArray",
          "module": "Data.CLongArray",
          "name": "toList",
          "normalized": "CLongArray-\u003e[Int]",
          "package": "sym",
          "partial": "List",
          "signature": "CLongArray-\u003e[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sym/docs/Data-CLongArray.html#v:toList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eat\u003c/a\u003e\u003c/code\u003e but without range checking.\n\u003c/p\u003e",
          "module": "Data.CLongArray",
          "name": "unsafeAt",
          "package": "sym",
          "signature": "CLongArray -\u003e Int -\u003e Int",
          "source": "src/Data-CLongArray.html#unsafeAt",
          "type": "function"
        },
        "index": {
          "description": "Like at but without range checking",
          "hierarchy": "Data CLongArray",
          "module": "Data.CLongArray",
          "name": "unsafeAt",
          "normalized": "CLongArray-\u003eInt-\u003eInt",
          "package": "sym",
          "partial": "At",
          "signature": "CLongArray-\u003eInt-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sym/docs/Data-CLongArray.html#v:unsafeAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new array of the given size that is initialized through\n an IO action.\n\u003c/p\u003e",
          "module": "Data.CLongArray",
          "name": "unsafeNew",
          "package": "sym",
          "signature": "Int -\u003e (Ptr CLong -\u003e IO ()) -\u003e IO CLongArray",
          "source": "src/Data-CLongArray.html#unsafeNew",
          "type": "function"
        },
        "index": {
          "description": "Create new array of the given size that is initialized through an IO action",
          "hierarchy": "Data CLongArray",
          "module": "Data.CLongArray",
          "name": "unsafeNew",
          "normalized": "Int-\u003e(Ptr CLong-\u003eIO())-\u003eIO CLongArray",
          "package": "sym",
          "partial": "New",
          "signature": "Int-\u003e(Ptr CLong-\u003eIO())-\u003eIO CLongArray",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sym/docs/Data-CLongArray.html#v:unsafeNew"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eslice\u003c/a\u003e\u003c/code\u003e but without range checking.\n\u003c/p\u003e",
          "module": "Data.CLongArray",
          "name": "unsafeSlice",
          "package": "sym",
          "signature": "[Int] -\u003e CLongArray -\u003e [CLongArray]",
          "source": "src/Data-CLongArray.html#unsafeSlice",
          "type": "function"
        },
        "index": {
          "description": "Like slice but without range checking",
          "hierarchy": "Data CLongArray",
          "module": "Data.CLongArray",
          "name": "unsafeSlice",
          "normalized": "[Int]-\u003eCLongArray-\u003e[CLongArray]",
          "package": "sym",
          "partial": "Slice",
          "signature": "[Int]-\u003eCLongArray-\u003e[CLongArray]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sym/docs/Data-CLongArray.html#v:unsafeSlice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePass a pointer to the array to an IO action; the array may not be\n modified through the pointer.\n\u003c/p\u003e",
          "module": "Data.CLongArray",
          "name": "unsafeWith",
          "package": "sym",
          "signature": "CLongArray -\u003e (Ptr CLong -\u003e IO a) -\u003e IO a",
          "source": "src/Data-CLongArray.html#unsafeWith",
          "type": "function"
        },
        "index": {
          "description": "Pass pointer to the array to an IO action the array may not be modified through the pointer",
          "hierarchy": "Data CLongArray",
          "module": "Data.CLongArray",
          "name": "unsafeWith",
          "normalized": "CLongArray-\u003e(Ptr CLong-\u003eIO a)-\u003eIO a",
          "package": "sym",
          "partial": "With",
          "signature": "CLongArray-\u003e(Ptr CLong-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sym/docs/Data-CLongArray.html#v:unsafeWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGenerating permutations: rank and unrank\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Perm",
          "name": "Perm",
          "package": "sym",
          "source": "src/Data-Perm.html",
          "type": "module"
        },
        "index": {
          "description": "Generating permutations rank and unrank",
          "hierarchy": "Data Perm",
          "module": "Data.Perm",
          "name": "Perm",
          "package": "sym",
          "partial": "Perm",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sym/docs/Data-Perm.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA permutation is just a \u003ccode\u003e\u003ca\u003eCLongArray\u003c/a\u003e\u003c/code\u003e. By convention a permutation\n of size \u003ccode\u003en\u003c/code\u003e is understood to be a permutation of \u003ccode\u003e[0..n-1]\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Perm",
          "name": "Perm",
          "package": "sym",
          "source": "src/Data-Perm.html#Perm",
          "type": "type"
        },
        "index": {
          "description": "permutation is just CLongArray By convention permutation of size is understood to be permutation of n-1",
          "hierarchy": "Data Perm",
          "module": "Data.Perm",
          "name": "Perm",
          "package": "sym",
          "partial": "Perm",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/sym/docs/Data-Perm.html#t:Perm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe reverse of the identity permutation.\n\u003c/p\u003e",
          "module": "Data.Perm",
          "name": "ebb",
          "package": "sym",
          "signature": "Int -\u003e Perm",
          "source": "src/Data-Perm.html#ebb",
          "type": "function"
        },
        "index": {
          "description": "The reverse of the identity permutation",
          "hierarchy": "Data Perm",
          "module": "Data.Perm",
          "name": "ebb",
          "normalized": "Int-\u003ePerm",
          "package": "sym",
          "signature": "Int-\u003ePerm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sym/docs/Data-Perm.html#v:ebb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe unique permutation length zero.\n\u003c/p\u003e",
          "module": "Data.Perm",
          "name": "emptyperm",
          "package": "sym",
          "signature": "Perm",
          "source": "src/Data-Perm.html#emptyperm",
          "type": "function"
        },
        "index": {
          "description": "The unique permutation length zero",
          "hierarchy": "Data Perm",
          "module": "Data.Perm",
          "name": "emptyperm",
          "package": "sym",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sym/docs/Data-Perm.html#v:emptyperm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe identity permutation.\n\u003c/p\u003e",
          "module": "Data.Perm",
          "name": "idperm",
          "package": "sym",
          "signature": "Int -\u003e Perm",
          "source": "src/Data-Perm.html#idperm",
          "type": "function"
        },
        "index": {
          "description": "The identity permutation",
          "hierarchy": "Data Perm",
          "module": "Data.Perm",
          "name": "idperm",
          "normalized": "Int-\u003ePerm",
          "package": "sym",
          "signature": "Int-\u003ePerm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sym/docs/Data-Perm.html#v:idperm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a permutation from a list of elements. As opposed to\n \u003ccode\u003e\u003ca\u003efromList\u003c/a\u003e\u003c/code\u003e this is a safe function in the sense that the output of\n \u003ccode\u003emkPerm xs\u003c/code\u003e is guaranteed to be a permutation of \u003ccode\u003e[0..length xs-1]\u003c/code\u003e.\n E.g., \u003ccode\u003emkPerm \"baxa\" == fromList [2,0,3,1]\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Perm",
          "name": "mkPerm",
          "package": "sym",
          "signature": "[a] -\u003e Perm",
          "source": "src/Data-Perm.html#mkPerm",
          "type": "function"
        },
        "index": {
          "description": "Construct permutation from list of elements As opposed to fromList this is safe function in the sense that the output of mkPerm xs is guaranteed to be permutation of length xs-1 E.g mkPerm baxa fromList",
          "hierarchy": "Data Perm",
          "module": "Data.Perm",
          "name": "mkPerm",
          "normalized": "[a]-\u003ePerm",
          "package": "sym",
          "partial": "Perm",
          "signature": "[a]-\u003ePerm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sym/docs/Data-Perm.html#v:mkPerm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe unique permutation length one.\n\u003c/p\u003e",
          "module": "Data.Perm",
          "name": "one",
          "package": "sym",
          "signature": "Perm",
          "source": "src/Data-Perm.html#one",
          "type": "function"
        },
        "index": {
          "description": "The unique permutation length one",
          "hierarchy": "Data Perm",
          "module": "Data.Perm",
          "name": "one",
          "package": "sym",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sym/docs/Data-Perm.html#v:one"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll permutations of a given size.\n\u003c/p\u003e",
          "module": "Data.Perm",
          "name": "perms",
          "package": "sym",
          "signature": "Int -\u003e [Perm]",
          "source": "src/Data-Perm.html#perms",
          "type": "function"
        },
        "index": {
          "description": "All permutations of given size",
          "hierarchy": "Data Perm",
          "module": "Data.Perm",
          "name": "perms",
          "normalized": "Int-\u003e[Perm]",
          "package": "sym",
          "signature": "Int-\u003e[Perm]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sym/docs/Data-Perm.html#v:perms"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe rank of the given permutation, where the rank is defined as\n in [W. Myrvold and F. Ruskey, Ranking and Unranking Permutations in\n Linear Time, Information Processing Letters, 79 (2001) 281-284].\n\u003c/p\u003e",
          "module": "Data.Perm",
          "name": "rank",
          "package": "sym",
          "signature": "Perm -\u003e Integer",
          "source": "src/Data-Perm.html#rank",
          "type": "function"
        },
        "index": {
          "description": "The rank of the given permutation where the rank is defined as in Myrvold and Ruskey Ranking and Unranking Permutations in Linear Time Information Processing Letters",
          "hierarchy": "Data Perm",
          "module": "Data.Perm",
          "name": "rank",
          "normalized": "Perm-\u003eInteger",
          "package": "sym",
          "signature": "Perm-\u003eInteger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sym/docs/Data-Perm.html#v:rank"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe permutation of size \u003ccode\u003en\u003c/code\u003e whose rank is \u003ccode\u003er\u003c/code\u003e, where the rank\n is defined as in [W. Myrvold and F. Ruskey, Ranking and Unranking\n Permutations in Linear Time, Information Processing Letters, 79\n (2001) 281-284].\n\u003c/p\u003e",
          "module": "Data.Perm",
          "name": "unrank",
          "package": "sym",
          "signature": "Int -\u003e Integer -\u003e Perm",
          "source": "src/Data-Perm.html#unrank",
          "type": "function"
        },
        "index": {
          "description": "The permutation of size whose rank is where the rank is defined as in Myrvold and Ruskey Ranking and Unranking Permutations in Linear Time Information Processing Letters",
          "hierarchy": "Data Perm",
          "module": "Data.Perm",
          "name": "unrank",
          "normalized": "Int-\u003eInteger-\u003ePerm",
          "package": "sym",
          "signature": "Int-\u003eInteger-\u003ePerm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sym/docs/Data-Perm.html#v:unrank"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePermutation diagrams, or permutations as monads.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Permgram",
          "name": "Permgram",
          "package": "sym",
          "source": "src/Data-Permgram.html",
          "type": "module"
        },
        "index": {
          "description": "Permutation diagrams or permutations as monads",
          "hierarchy": "Data Permgram",
          "module": "Data.Permgram",
          "name": "Permgram",
          "package": "sym",
          "partial": "Permgram",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sym/docs/Data-Permgram.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe purpose of this data type is to assign labels to the indices of\n a given permutation.\n\u003c/p\u003e",
          "module": "Data.Permgram",
          "name": "Label",
          "package": "sym",
          "source": "src/Data-Permgram.html#Label",
          "type": "type"
        },
        "index": {
          "description": "The purpose of this data type is to assign labels to the indices of given permutation",
          "hierarchy": "Data Permgram",
          "module": "Data.Permgram",
          "name": "Label",
          "package": "sym",
          "partial": "Label",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/sym/docs/Data-Permgram.html#t:Label"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA permgram consists of a permutation together with a label for each\n index of the permutation.\n\u003c/p\u003e",
          "module": "Data.Permgram",
          "name": "Permgram",
          "package": "sym",
          "source": "src/Data-Permgram.html#Permgram",
          "type": "data"
        },
        "index": {
          "description": "permgram consists of permutation together with label for each index of the permutation",
          "hierarchy": "Data Permgram",
          "module": "Data.Permgram",
          "name": "Permgram",
          "package": "sym",
          "partial": "Permgram",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sym/docs/Data-Permgram.html#t:Permgram"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe inverse permgram. It's obtained by mirroring the permgram in\n the \u003cem\u003ex=y\u003c/em\u003e diagonal.\n\u003c/p\u003e",
          "module": "Data.Permgram",
          "name": "inverse",
          "package": "sym",
          "signature": "Permgram a -\u003e Permgram a",
          "source": "src/Data-Permgram.html#inverse",
          "type": "function"
        },
        "index": {
          "description": "The inverse permgram It obtained by mirroring the permgram in the diagonal",
          "hierarchy": "Data Permgram",
          "module": "Data.Permgram",
          "name": "inverse",
          "normalized": "Permgram a-\u003ePermgram a",
          "package": "sym",
          "signature": "Permgram a-\u003ePermgram a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sym/docs/Data-Permgram.html#v:inverse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe assignment of labels to indices.\n\u003c/p\u003e",
          "module": "Data.Permgram",
          "name": "label",
          "package": "sym",
          "signature": "Permgram a -\u003e Label a",
          "source": "src/Data-Permgram.html#label",
          "type": "function"
        },
        "index": {
          "description": "The assignment of labels to indices",
          "hierarchy": "Data Permgram",
          "module": "Data.Permgram",
          "name": "label",
          "normalized": "Permgram a-\u003eLabel a",
          "package": "sym",
          "signature": "Permgram a-\u003eLabel a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sym/docs/Data-Permgram.html#v:label"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe underlying permutation.\n\u003c/p\u003e",
          "module": "Data.Permgram",
          "name": "perm",
          "package": "sym",
          "signature": "Permgram a -\u003e Perm",
          "source": "src/Data-Permgram.html#perm",
          "type": "function"
        },
        "index": {
          "description": "The underlying permutation",
          "hierarchy": "Data Permgram",
          "module": "Data.Permgram",
          "name": "perm",
          "normalized": "Permgram a-\u003ePerm",
          "package": "sym",
          "signature": "Permgram a-\u003ePerm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sym/docs/Data-Permgram.html#v:perm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a permgram from an underlying permutation and a list of\n labels.\n\u003c/p\u003e",
          "module": "Data.Permgram",
          "name": "permgram",
          "package": "sym",
          "signature": "Perm -\u003e [a] -\u003e Permgram a",
          "source": "src/Data-Permgram.html#permgram",
          "type": "function"
        },
        "index": {
          "description": "Construct permgram from an underlying permutation and list of labels",
          "hierarchy": "Data Permgram",
          "module": "Data.Permgram",
          "name": "permgram",
          "normalized": "Perm-\u003e[a]-\u003ePermgram a",
          "package": "sym",
          "signature": "Perm-\u003e[a]-\u003ePermgram a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sym/docs/Data-Permgram.html#v:permgram"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe size of a permgram is the size of the underlying permutation.\n\u003c/p\u003e",
          "module": "Data.Permgram",
          "name": "size",
          "package": "sym",
          "signature": "Permgram a -\u003e Int",
          "source": "src/Data-Permgram.html#size",
          "type": "function"
        },
        "index": {
          "description": "The size of permgram is the size of the underlying permutation",
          "hierarchy": "Data Permgram",
          "module": "Data.Permgram",
          "name": "size",
          "normalized": "Permgram a-\u003eInt",
          "package": "sym",
          "signature": "Permgram a-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sym/docs/Data-Permgram.html#v:size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Perm.Bijection",
          "name": "Bijection",
          "package": "sym",
          "source": "src/Math-Perm-Bijection.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Math Perm Bijection",
          "module": "Math.Perm.Bijection",
          "name": "Bijection",
          "package": "sym",
          "partial": "Bijection",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sym/docs/Math-Perm-Bijection.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Simion-Schmidt bijection from Av(123) onto Av(132).\n\u003c/p\u003e",
          "module": "Math.Perm.Bijection",
          "name": "simionSchmidt",
          "package": "sym",
          "signature": "Perm -\u003e Perm",
          "source": "src/Math-Perm-Bijection.html#simionSchmidt",
          "type": "function"
        },
        "index": {
          "description": "The Simion-Schmidt bijection from Av onto Av",
          "hierarchy": "Math Perm Bijection",
          "module": "Math.Perm.Bijection",
          "name": "simionSchmidt",
          "normalized": "Perm-\u003ePerm",
          "package": "sym",
          "partial": "Schmidt",
          "signature": "Perm-\u003ePerm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sym/docs/Math-Perm-Bijection.html#v:simionSchmidt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe inverse of the Simion-Schmidt bijection. It is a function\n from Av(132) to Av(123).\n\u003c/p\u003e",
          "module": "Math.Perm.Bijection",
          "name": "simionSchmidt'",
          "package": "sym",
          "signature": "Perm -\u003e Perm",
          "source": "src/Math-Perm-Bijection.html#simionSchmidt%27",
          "type": "function"
        },
        "index": {
          "description": "The inverse of the Simion-Schmidt bijection It is function from Av to Av",
          "hierarchy": "Math Perm Bijection",
          "module": "Math.Perm.Bijection",
          "name": "simionSchmidt'",
          "normalized": "Perm-\u003ePerm",
          "package": "sym",
          "partial": "Schmidt'",
          "signature": "Perm-\u003ePerm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sym/docs/Math-Perm-Bijection.html#v:simionSchmidt-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Perm.Class",
          "name": "Class",
          "package": "sym",
          "source": "src/Math-Perm-Class.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Math Perm Class",
          "module": "Math.Perm.Class",
          "name": "Class",
          "package": "sym",
          "partial": "Class",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sym/docs/Math-Perm-Class.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAv(s) where s is a string of one or more patterns, using space as a\n seperator.\n\u003c/p\u003e",
          "module": "Math.Perm.Class",
          "name": "av",
          "package": "sym",
          "signature": "String -\u003e Int -\u003e [Perm]",
          "source": "src/Math-Perm-Class.html#av",
          "type": "function"
        },
        "index": {
          "description": "Av where is string of one or more patterns using space as seperator",
          "hierarchy": "Math Perm Class",
          "module": "Math.Perm.Class",
          "name": "av",
          "normalized": "String-\u003eInt-\u003e[Perm]",
          "package": "sym",
          "signature": "String-\u003eInt-\u003e[Perm]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sym/docs/Math-Perm-Class.html#v:av"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAv(1)\n\u003c/p\u003e",
          "module": "Math.Perm.Class",
          "name": "av1",
          "package": "sym",
          "signature": "Int -\u003e [Perm]",
          "source": "src/Math-Perm-Class.html#av1",
          "type": "function"
        },
        "index": {
          "description": "Av",
          "hierarchy": "Math Perm Class",
          "module": "Math.Perm.Class",
          "name": "av1",
          "normalized": "Int-\u003e[Perm]",
          "package": "sym",
          "signature": "Int-\u003e[Perm]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sym/docs/Math-Perm-Class.html#v:av1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAv(12)\n\u003c/p\u003e",
          "module": "Math.Perm.Class",
          "name": "av12",
          "package": "sym",
          "signature": "Int -\u003e [Perm]",
          "source": "src/Math-Perm-Class.html#av12",
          "type": "function"
        },
        "index": {
          "description": "Av",
          "hierarchy": "Math Perm Class",
          "module": "Math.Perm.Class",
          "name": "av12",
          "normalized": "Int-\u003e[Perm]",
          "package": "sym",
          "signature": "Int-\u003e[Perm]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sym/docs/Math-Perm-Class.html#v:av12"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAv(123)\n\u003c/p\u003e",
          "module": "Math.Perm.Class",
          "name": "av123",
          "package": "sym",
          "signature": "Int -\u003e [Perm]",
          "source": "src/Math-Perm-Class.html#av123",
          "type": "function"
        },
        "index": {
          "description": "Av",
          "hierarchy": "Math Perm Class",
          "module": "Math.Perm.Class",
          "name": "av123",
          "normalized": "Int-\u003e[Perm]",
          "package": "sym",
          "signature": "Int-\u003e[Perm]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sym/docs/Math-Perm-Class.html#v:av123"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAv(1243)\n\u003c/p\u003e",
          "module": "Math.Perm.Class",
          "name": "av1243",
          "package": "sym",
          "signature": "Int -\u003e [Perm]",
          "source": "src/Math-Perm-Class.html#av1243",
          "type": "function"
        },
        "index": {
          "description": "Av",
          "hierarchy": "Math Perm Class",
          "module": "Math.Perm.Class",
          "name": "av1243",
          "normalized": "Int-\u003e[Perm]",
          "package": "sym",
          "signature": "Int-\u003e[Perm]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sym/docs/Math-Perm-Class.html#v:av1243"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAv(132)\n\u003c/p\u003e",
          "module": "Math.Perm.Class",
          "name": "av132",
          "package": "sym",
          "signature": "Int -\u003e [Perm]",
          "source": "src/Math-Perm-Class.html#av132",
          "type": "function"
        },
        "index": {
          "description": "Av",
          "hierarchy": "Math Perm Class",
          "module": "Math.Perm.Class",
          "name": "av132",
          "normalized": "Int-\u003e[Perm]",
          "package": "sym",
          "signature": "Int-\u003e[Perm]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sym/docs/Math-Perm-Class.html#v:av132"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAv(1324)\n\u003c/p\u003e",
          "module": "Math.Perm.Class",
          "name": "av1324",
          "package": "sym",
          "signature": "Int -\u003e [Perm]",
          "source": "src/Math-Perm-Class.html#av1324",
          "type": "function"
        },
        "index": {
          "description": "Av",
          "hierarchy": "Math Perm Class",
          "module": "Math.Perm.Class",
          "name": "av1324",
          "normalized": "Int-\u003e[Perm]",
          "package": "sym",
          "signature": "Int-\u003e[Perm]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sym/docs/Math-Perm-Class.html#v:av1324"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAv(21)\n\u003c/p\u003e",
          "module": "Math.Perm.Class",
          "name": "av21",
          "package": "sym",
          "signature": "Int -\u003e [Perm]",
          "source": "src/Math-Perm-Class.html#av21",
          "type": "function"
        },
        "index": {
          "description": "Av",
          "hierarchy": "Math Perm Class",
          "module": "Math.Perm.Class",
          "name": "av21",
          "normalized": "Int-\u003e[Perm]",
          "package": "sym",
          "signature": "Int-\u003e[Perm]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sym/docs/Math-Perm-Class.html#v:av21"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAv(213)\n\u003c/p\u003e",
          "module": "Math.Perm.Class",
          "name": "av213",
          "package": "sym",
          "signature": "Int -\u003e [Perm]",
          "source": "src/Math-Perm-Class.html#av213",
          "type": "function"
        },
        "index": {
          "description": "Av",
          "hierarchy": "Math Perm Class",
          "module": "Math.Perm.Class",
          "name": "av213",
          "normalized": "Int-\u003e[Perm]",
          "package": "sym",
          "signature": "Int-\u003e[Perm]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sym/docs/Math-Perm-Class.html#v:av213"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAv(2134)\n\u003c/p\u003e",
          "module": "Math.Perm.Class",
          "name": "av2134",
          "package": "sym",
          "signature": "Int -\u003e [Perm]",
          "source": "src/Math-Perm-Class.html#av2134",
          "type": "function"
        },
        "index": {
          "description": "Av",
          "hierarchy": "Math Perm Class",
          "module": "Math.Perm.Class",
          "name": "av2134",
          "normalized": "Int-\u003e[Perm]",
          "package": "sym",
          "signature": "Int-\u003e[Perm]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sym/docs/Math-Perm-Class.html#v:av2134"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAv(231); also know as the stack sortable permutations.\n\u003c/p\u003e",
          "module": "Math.Perm.Class",
          "name": "av231",
          "package": "sym",
          "signature": "Int -\u003e [Perm]",
          "source": "src/Math-Perm-Class.html#av231",
          "type": "function"
        },
        "index": {
          "description": "Av also know as the stack sortable permutations",
          "hierarchy": "Math Perm Class",
          "module": "Math.Perm.Class",
          "name": "av231",
          "normalized": "Int-\u003e[Perm]",
          "package": "sym",
          "signature": "Int-\u003e[Perm]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sym/docs/Math-Perm-Class.html#v:av231"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAv(312)\n\u003c/p\u003e",
          "module": "Math.Perm.Class",
          "name": "av312",
          "package": "sym",
          "signature": "Int -\u003e [Perm]",
          "source": "src/Math-Perm-Class.html#av312",
          "type": "function"
        },
        "index": {
          "description": "Av",
          "hierarchy": "Math Perm Class",
          "module": "Math.Perm.Class",
          "name": "av312",
          "normalized": "Int-\u003e[Perm]",
          "package": "sym",
          "signature": "Int-\u003e[Perm]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sym/docs/Math-Perm-Class.html#v:av312"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAv(321)\n\u003c/p\u003e",
          "module": "Math.Perm.Class",
          "name": "av321",
          "package": "sym",
          "signature": "Int -\u003e [Perm]",
          "source": "src/Math-Perm-Class.html#av321",
          "type": "function"
        },
        "index": {
          "description": "Av",
          "hierarchy": "Math Perm Class",
          "module": "Math.Perm.Class",
          "name": "av321",
          "normalized": "Int-\u003e[Perm]",
          "package": "sym",
          "signature": "Int-\u003e[Perm]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sym/docs/Math-Perm-Class.html#v:av321"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe &#8743;-class is Av(213, 312). It is so named because the diagram of\n a typical permutation in this class is shaped like a &#8743;.\n\u003c/p\u003e",
          "module": "Math.Perm.Class",
          "name": "caret",
          "package": "sym",
          "signature": "Int -\u003e [Perm]",
          "source": "src/Math-Perm-Class.html#caret",
          "type": "function"
        },
        "index": {
          "description": "The class is Av It is so named because the diagram of typical permutation in this class is shaped like",
          "hierarchy": "Math Perm Class",
          "module": "Math.Perm.Class",
          "name": "caret",
          "normalized": "Int-\u003e[Perm]",
          "package": "sym",
          "signature": "Int-\u003e[Perm]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sym/docs/Math-Perm-Class.html#v:caret"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe class of decreasing permutations.\n\u003c/p\u003e",
          "module": "Math.Perm.Class",
          "name": "dec",
          "package": "sym",
          "signature": "Int -\u003e [Perm]",
          "source": "src/Math-Perm-Class.html#dec",
          "type": "function"
        },
        "index": {
          "description": "The class of decreasing permutations",
          "hierarchy": "Math Perm Class",
          "module": "Math.Perm.Class",
          "name": "dec",
          "normalized": "Int-\u003e[Perm]",
          "package": "sym",
          "signature": "Int-\u003e[Perm]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sym/docs/Math-Perm-Class.html#v:dec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe class of Fibonacci permutations. A \u003cem\u003eFibonacci permutation\u003c/em\u003e is a\n layered permutation whose layers are all of size 1 or 2.\n\u003c/p\u003e",
          "module": "Math.Perm.Class",
          "name": "fibonacci",
          "package": "sym",
          "signature": "Int -\u003e [Perm]",
          "source": "src/Math-Perm-Class.html#fibonacci",
          "type": "function"
        },
        "index": {
          "description": "The class of Fibonacci permutations Fibonacci permutation is layered permutation whose layers are all of size or",
          "hierarchy": "Math Perm Class",
          "module": "Math.Perm.Class",
          "name": "fibonacci",
          "normalized": "Int-\u003e[Perm]",
          "package": "sym",
          "signature": "Int-\u003e[Perm]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sym/docs/Math-Perm-Class.html#v:fibonacci"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003e-class is Av(132, 312). It is so named because the diagram of\n a typical permutation in this class is shaped like a \u003e.\n\u003c/p\u003e",
          "module": "Math.Perm.Class",
          "name": "gt",
          "package": "sym",
          "signature": "Int -\u003e [Perm]",
          "source": "src/Math-Perm-Class.html#gt",
          "type": "function"
        },
        "index": {
          "description": "The class is Av It is so named because the diagram of typical permutation in this class is shaped like",
          "hierarchy": "Math Perm Class",
          "module": "Math.Perm.Class",
          "name": "gt",
          "normalized": "Int-\u003e[Perm]",
          "package": "sym",
          "signature": "Int-\u003e[Perm]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sym/docs/Math-Perm-Class.html#v:gt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe class of increasing permutations.\n\u003c/p\u003e",
          "module": "Math.Perm.Class",
          "name": "inc",
          "package": "sym",
          "signature": "Int -\u003e [Perm]",
          "source": "src/Math-Perm-Class.html#inc",
          "type": "function"
        },
        "index": {
          "description": "The class of increasing permutations",
          "hierarchy": "Math Perm Class",
          "module": "Math.Perm.Class",
          "name": "inc",
          "normalized": "Int-\u003e[Perm]",
          "package": "sym",
          "signature": "Int-\u003e[Perm]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sym/docs/Math-Perm-Class.html#v:inc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe class of Fibonacci permutations with \u003cem\u003ek\u003c/em\u003e layers. A \u003cem\u003eFibonacci permutation\u003c/em\u003e\n is a layered permutation whose layers are all of size 1 or 2.\n\u003c/p\u003e",
          "module": "Math.Perm.Class",
          "name": "kFibonacci",
          "package": "sym",
          "signature": "Int -\u003e Int -\u003e [Perm]",
          "source": "src/Math-Perm-Class.html#kFibonacci",
          "type": "function"
        },
        "index": {
          "description": "The class of Fibonacci permutations with layers Fibonacci permutation is layered permutation whose layers are all of size or",
          "hierarchy": "Math Perm Class",
          "module": "Math.Perm.Class",
          "name": "kFibonacci",
          "normalized": "Int-\u003eInt-\u003e[Perm]",
          "package": "sym",
          "partial": "Fibonacci",
          "signature": "Int-\u003eInt-\u003e[Perm]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sym/docs/Math-Perm-Class.html#v:kFibonacci"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe class of layered permutations with \u003cem\u003ek\u003c/em\u003e layers.\n\u003c/p\u003e",
          "module": "Math.Perm.Class",
          "name": "kLayered",
          "package": "sym",
          "signature": "Int -\u003e Int -\u003e [Perm]",
          "source": "src/Math-Perm-Class.html#kLayered",
          "type": "function"
        },
        "index": {
          "description": "The class of layered permutations with layers",
          "hierarchy": "Math Perm Class",
          "module": "Math.Perm.Class",
          "name": "kLayered",
          "normalized": "Int-\u003eInt-\u003e[Perm]",
          "package": "sym",
          "partial": "Layered",
          "signature": "Int-\u003eInt-\u003e[Perm]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sym/docs/Math-Perm-Class.html#v:kLayered"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe class of layered permutations.\n\u003c/p\u003e",
          "module": "Math.Perm.Class",
          "name": "layered",
          "package": "sym",
          "signature": "Int -\u003e [Perm]",
          "source": "src/Math-Perm-Class.html#layered",
          "type": "function"
        },
        "index": {
          "description": "The class of layered permutations",
          "hierarchy": "Math Perm Class",
          "module": "Math.Perm.Class",
          "name": "layered",
          "normalized": "Int-\u003e[Perm]",
          "package": "sym",
          "signature": "Int-\u003e[Perm]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sym/docs/Math-Perm-Class.html#v:layered"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003c-class is Av(213, 231). It is so named because the diagram of\n a typical permutation in this class is shaped like a \u003c.\n\u003c/p\u003e",
          "module": "Math.Perm.Class",
          "name": "lt",
          "package": "sym",
          "signature": "Int -\u003e [Perm]",
          "source": "src/Math-Perm-Class.html#lt",
          "type": "function"
        },
        "index": {
          "description": "The class is Av It is so named because the diagram of typical permutation in this class is shaped like",
          "hierarchy": "Math Perm Class",
          "module": "Math.Perm.Class",
          "name": "lt",
          "normalized": "Int-\u003e[Perm]",
          "package": "sym",
          "signature": "Int-\u003e[Perm]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sym/docs/Math-Perm-Class.html#v:lt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe class of separable permutations; it is identical to Av(2413,3142).\n\u003c/p\u003e",
          "module": "Math.Perm.Class",
          "name": "separables",
          "package": "sym",
          "signature": "Int -\u003e [Perm]",
          "source": "src/Math-Perm-Class.html#separables",
          "type": "function"
        },
        "index": {
          "description": "The class of separable permutations it is identical to Av",
          "hierarchy": "Math Perm Class",
          "module": "Math.Perm.Class",
          "name": "separables",
          "normalized": "Int-\u003e[Perm]",
          "package": "sym",
          "signature": "Int-\u003e[Perm]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sym/docs/Math-Perm-Class.html#v:separables"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe V-class is Av(132, 231). It is so named because the diagram of\n a typical permutation in this class is shaped like a V.\n\u003c/p\u003e",
          "module": "Math.Perm.Class",
          "name": "vee",
          "package": "sym",
          "signature": "Int -\u003e [Perm]",
          "source": "src/Math-Perm-Class.html#vee",
          "type": "function"
        },
        "index": {
          "description": "The V-class is Av It is so named because the diagram of typical permutation in this class is shaped like",
          "hierarchy": "Math Perm Class",
          "module": "Math.Perm.Class",
          "name": "vee",
          "normalized": "Int-\u003e[Perm]",
          "package": "sym",
          "signature": "Int-\u003e[Perm]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sym/docs/Math-Perm-Class.html#v:vee"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe union of \u003ccode\u003e\u003ca\u003evee\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ecaret\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003egt\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003elt\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Math.Perm.Class",
          "name": "wedges",
          "package": "sym",
          "signature": "Int -\u003e [Perm]",
          "source": "src/Math-Perm-Class.html#wedges",
          "type": "function"
        },
        "index": {
          "description": "The union of vee caret gt and lt",
          "hierarchy": "Math Perm Class",
          "module": "Math.Perm.Class",
          "name": "wedges",
          "normalized": "Int-\u003e[Perm]",
          "package": "sym",
          "signature": "Int-\u003e[Perm]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sym/docs/Math-Perm-Class.html#v:wedges"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eComponents of permutations.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Math.Perm.Component",
          "name": "Component",
          "package": "sym",
          "source": "src/Math-Perm-Component.html",
          "type": "module"
        },
        "index": {
          "description": "Components of permutations",
          "hierarchy": "Math Perm Component",
          "module": "Math.Perm.Component",
          "name": "Component",
          "package": "sym",
          "partial": "Component",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sym/docs/Math-Perm-Component.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe list of (plus) components.\n\u003c/p\u003e",
          "module": "Math.Perm.Component",
          "name": "components",
          "package": "sym",
          "signature": "Perm -\u003e [Perm]",
          "source": "src/Math-Perm-Component.html#components",
          "type": "function"
        },
        "index": {
          "description": "The list of plus components",
          "hierarchy": "Math Perm Component",
          "module": "Math.Perm.Component",
          "name": "components",
          "normalized": "Perm-\u003e[Perm]",
          "package": "sym",
          "signature": "Perm-\u003e[Perm]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sym/docs/Math-Perm-Component.html#v:components"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFor each position, left-to-right, records the largest value seen\n thus far.\n\u003c/p\u003e",
          "module": "Math.Perm.Component",
          "name": "leftMaxima",
          "package": "sym",
          "signature": "Perm -\u003e [Int]",
          "source": "src/Math-Perm-Component.html#leftMaxima",
          "type": "function"
        },
        "index": {
          "description": "For each position left-to-right records the largest value seen thus far",
          "hierarchy": "Math Perm Component",
          "module": "Math.Perm.Component",
          "name": "leftMaxima",
          "normalized": "Perm-\u003e[Int]",
          "package": "sym",
          "partial": "Maxima",
          "signature": "Perm-\u003e[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sym/docs/Math-Perm-Component.html#v:leftMaxima"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFor each position, left-to-right, records the smallest value seen\n thus far.\n\u003c/p\u003e",
          "module": "Math.Perm.Component",
          "name": "leftMinima",
          "package": "sym",
          "signature": "Perm -\u003e [Int]",
          "source": "src/Math-Perm-Component.html#leftMinima",
          "type": "function"
        },
        "index": {
          "description": "For each position left-to-right records the smallest value seen thus far",
          "hierarchy": "Math Perm Component",
          "module": "Math.Perm.Component",
          "name": "leftMinima",
          "normalized": "Perm-\u003e[Int]",
          "package": "sym",
          "partial": "Minima",
          "signature": "Perm-\u003e[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sym/docs/Math-Perm-Component.html#v:leftMinima"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFor each position, \u003cem\u003eright-to-left\u003c/em\u003e, records the largest value seen\n thus far.\n\u003c/p\u003e",
          "module": "Math.Perm.Component",
          "name": "rightMaxima",
          "package": "sym",
          "signature": "Perm -\u003e [Int]",
          "source": "src/Math-Perm-Component.html#rightMaxima",
          "type": "function"
        },
        "index": {
          "description": "For each position right-to-left records the largest value seen thus far",
          "hierarchy": "Math Perm Component",
          "module": "Math.Perm.Component",
          "name": "rightMaxima",
          "normalized": "Perm-\u003e[Int]",
          "package": "sym",
          "partial": "Maxima",
          "signature": "Perm-\u003e[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sym/docs/Math-Perm-Component.html#v:rightMaxima"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFor each position, \u003cem\u003eright-to-left\u003c/em\u003e, records the smallest value seen\n thus far.\n\u003c/p\u003e",
          "module": "Math.Perm.Component",
          "name": "rightMinima",
          "package": "sym",
          "signature": "Perm -\u003e [Int]",
          "source": "src/Math-Perm-Component.html#rightMinima",
          "type": "function"
        },
        "index": {
          "description": "For each position right-to-left records the smallest value seen thus far",
          "hierarchy": "Math Perm Component",
          "module": "Math.Perm.Component",
          "name": "rightMinima",
          "normalized": "Perm-\u003e[Int]",
          "package": "sym",
          "partial": "Minima",
          "signature": "Perm-\u003e[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sym/docs/Math-Perm-Component.html#v:rightMinima"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe list of skew components, also called minus components.\n\u003c/p\u003e",
          "module": "Math.Perm.Component",
          "name": "skewComponents",
          "package": "sym",
          "signature": "Perm -\u003e [Perm]",
          "source": "src/Math-Perm-Component.html#skewComponents",
          "type": "function"
        },
        "index": {
          "description": "The list of skew components also called minus components",
          "hierarchy": "Math Perm Component",
          "module": "Math.Perm.Component",
          "name": "skewComponents",
          "normalized": "Perm-\u003e[Perm]",
          "package": "sym",
          "partial": "Components",
          "signature": "Perm-\u003e[Perm]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sym/docs/Math-Perm-Component.html#v:skewComponents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSum, skew sum, etc\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Math.Perm.Constructions",
          "name": "Constructions",
          "package": "sym",
          "source": "src/Math-Perm-Constructions.html",
          "type": "module"
        },
        "index": {
          "description": "Sum skew sum etc",
          "hierarchy": "Math Perm Constructions",
          "module": "Math.Perm.Constructions",
          "name": "Constructions",
          "package": "sym",
          "partial": "Constructions",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sym/docs/Math-Perm-Constructions.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003cem\u003edirect sum\u003c/em\u003e of two permutations.\n\u003c/p\u003e",
          "module": "Math.Perm.Constructions",
          "name": "(/+/)",
          "package": "sym",
          "signature": "Perm -\u003e Perm -\u003e Perm",
          "source": "src/Math-Perm-Constructions.html#%2F%2B%2F",
          "type": "function"
        },
        "index": {
          "description": "The direct sum of two permutations",
          "hierarchy": "Math Perm Constructions",
          "module": "Math.Perm.Constructions",
          "name": "(/+/) /+/",
          "normalized": "Perm-\u003ePerm-\u003ePerm",
          "package": "sym",
          "signature": "Perm-\u003ePerm-\u003ePerm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sym/docs/Math-Perm-Constructions.html#v:-47--43--47-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003cem\u003eskew sum\u003c/em\u003e of two permutations.\n\u003c/p\u003e",
          "module": "Math.Perm.Constructions",
          "name": "(\\-\\)",
          "package": "sym",
          "signature": "Perm -\u003e Perm -\u003e Perm",
          "source": "src/Math-Perm-Constructions.html#%5C-%5C",
          "type": "function"
        },
        "index": {
          "description": "The skew sum of two permutations",
          "hierarchy": "Math Perm Constructions",
          "module": "Math.Perm.Constructions",
          "name": "(\\-\\) \\-\\",
          "normalized": "Perm-\u003ePerm-\u003ePerm",
          "package": "sym",
          "signature": "Perm-\u003ePerm-\u003ePerm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sym/docs/Math-Perm-Constructions.html#v:-92--45--92-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe direct sum of a list of permutations.\n\u003c/p\u003e",
          "module": "Math.Perm.Constructions",
          "name": "directSum",
          "package": "sym",
          "signature": "[Perm] -\u003e Perm",
          "source": "src/Math-Perm-Constructions.html#directSum",
          "type": "function"
        },
        "index": {
          "description": "The direct sum of list of permutations",
          "hierarchy": "Math Perm Constructions",
          "module": "Math.Perm.Constructions",
          "name": "directSum",
          "normalized": "[Perm]-\u003ePerm",
          "package": "sym",
          "partial": "Sum",
          "signature": "[Perm]-\u003ePerm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sym/docs/Math-Perm-Constructions.html#v:directSum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003einflate w vs\u003c/code\u003e is the \u003cem\u003einflation\u003c/em\u003e of \u003ccode\u003ew\u003c/code\u003e by \u003ccode\u003evs\u003c/code\u003e. It is the\n permutation of length \u003ccode\u003esum (map size vs)\u003c/code\u003e obtained by replacing\n each entry \u003ccode\u003ew!i\u003c/code\u003e by an interval that is order isomorphic to \u003ccode\u003evs!i\u003c/code\u003e\n in such a way that the intervals are order isomorphic to \u003ccode\u003ew\u003c/code\u003e. In\n particular,\n\u003c/p\u003e\u003cpre\u003e u /+/ v == inflate (mkPerm \"12\") [u,v]\n u \\-\\ v == inflate (mkPerm \"21\") [u,v]\n\u003c/pre\u003e",
          "module": "Math.Perm.Constructions",
          "name": "inflate",
          "package": "sym",
          "signature": "Perm -\u003e [Perm] -\u003e Perm",
          "source": "src/Math-Perm-Constructions.html#inflate",
          "type": "function"
        },
        "index": {
          "description": "inflate vs is the inflation of by vs It is the permutation of length sum map size vs obtained by replacing each entry by an interval that is order isomorphic to vs in such way that the intervals are order isomorphic to In particular inflate mkPerm inflate mkPerm",
          "hierarchy": "Math Perm Constructions",
          "module": "Math.Perm.Constructions",
          "name": "inflate",
          "normalized": "Perm-\u003e[Perm]-\u003ePerm",
          "package": "sym",
          "signature": "Perm-\u003e[Perm]-\u003ePerm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sym/docs/Math-Perm-Constructions.html#v:inflate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe skew sum of a list of permutations.\n\u003c/p\u003e",
          "module": "Math.Perm.Constructions",
          "name": "skewSum",
          "package": "sym",
          "signature": "[Perm] -\u003e Perm",
          "source": "src/Math-Perm-Constructions.html#skewSum",
          "type": "function"
        },
        "index": {
          "description": "The skew sum of list of permutations",
          "hierarchy": "Math Perm Constructions",
          "module": "Math.Perm.Constructions",
          "name": "skewSum",
          "normalized": "[Perm]-\u003ePerm",
          "package": "sym",
          "partial": "Sum",
          "signature": "[Perm]-\u003ePerm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sym/docs/Math-Perm-Constructions.html#v:skewSum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Perm.D8",
          "name": "D8",
          "package": "sym",
          "source": "src/Math-Perm-D8.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Math Perm D8",
          "module": "Math.Perm.D8",
          "name": "D8",
          "package": "sym",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sym/docs/Math-Perm-D8.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe complement of the given permutation: if \u003ccode\u003ev = complement u\u003c/code\u003e then\n \u003ccode\u003ev `at` i = n - 1 - u `at` i\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Math.Perm.D8",
          "name": "complement",
          "package": "sym",
          "signature": "Perm -\u003e Perm",
          "source": "src/Math-Perm-D8.html#complement",
          "type": "function"
        },
        "index": {
          "description": "The complement of the given permutation if complement then at at",
          "hierarchy": "Math Perm D8",
          "module": "Math.Perm.D8",
          "name": "complement",
          "normalized": "Perm-\u003ePerm",
          "package": "sym",
          "signature": "Perm-\u003ePerm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sym/docs/Math-Perm-D8.html#v:complement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe dihedral group of order 8 (the symmetries of a square); that is,\n\u003c/p\u003e\u003cpre\u003e d8 = [r0, r1, r2, r3, s0, s1, s2, s3]\n\u003c/pre\u003e",
          "module": "Math.Perm.D8",
          "name": "d8",
          "package": "sym",
          "signature": "[Perm -\u003e Perm]",
          "source": "src/Math-Perm-D8.html#d8",
          "type": "function"
        },
        "index": {
          "description": "The dihedral group of order the symmetries of square that is d8 r0 r1 r2 r3 s0 s1 s2 s3",
          "hierarchy": "Math Perm D8",
          "module": "Math.Perm.D8",
          "name": "d8",
          "normalized": "[Perm-\u003ePerm]",
          "package": "sym",
          "signature": "[Perm-\u003ePerm]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sym/docs/Math-Perm-D8.html#v:d8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSymmetry classes with respect to D8.\n\u003c/p\u003e",
          "module": "Math.Perm.D8",
          "name": "d8Classes",
          "package": "sym",
          "signature": "[Perm] -\u003e [[Perm]]",
          "source": "src/Math-Perm-D8.html#d8Classes",
          "type": "function"
        },
        "index": {
          "description": "Symmetry classes with respect to D8",
          "hierarchy": "Math Perm D8",
          "module": "Math.Perm.D8",
          "name": "d8Classes",
          "normalized": "[Perm]-\u003e[[Perm]]",
          "package": "sym",
          "partial": "Classes",
          "signature": "[Perm]-\u003e[[Perm]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sym/docs/Math-Perm-D8.html#v:d8Classes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe group theoretical inverse: if \u003ccode\u003ev = inverse u\u003c/code\u003e then\n \u003ccode\u003ev `at` (u `at` i) = i\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Math.Perm.D8",
          "name": "inverse",
          "package": "sym",
          "signature": "Perm -\u003e Perm",
          "source": "src/Math-Perm-D8.html#inverse",
          "type": "function"
        },
        "index": {
          "description": "The group theoretical inverse if inverse then at at",
          "hierarchy": "Math Perm D8",
          "module": "Math.Perm.D8",
          "name": "inverse",
          "normalized": "Perm-\u003ePerm",
          "package": "sym",
          "signature": "Perm-\u003ePerm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sym/docs/Math-Perm-D8.html#v:inverse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Klein four-group (the symmetries of a non-equilateral\n rectangle); that is,\n\u003c/p\u003e\u003cpre\u003e klein4 = [r0, r2, s0, s1]\n\u003c/pre\u003e",
          "module": "Math.Perm.D8",
          "name": "klein4",
          "package": "sym",
          "signature": "[Perm -\u003e Perm]",
          "source": "src/Math-Perm-D8.html#klein4",
          "type": "function"
        },
        "index": {
          "description": "The Klein four-group the symmetries of non-equilateral rectangle that is klein4 r0 r2 s0 s1",
          "hierarchy": "Math Perm D8",
          "module": "Math.Perm.D8",
          "name": "klein4",
          "normalized": "[Perm-\u003ePerm]",
          "package": "sym",
          "signature": "[Perm-\u003ePerm]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sym/docs/Math-Perm-D8.html#v:klein4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSymmetry classes with respect to Klein4\n\u003c/p\u003e",
          "module": "Math.Perm.D8",
          "name": "klein4Classes",
          "package": "sym",
          "signature": "[Perm] -\u003e [[Perm]]",
          "source": "src/Math-Perm-D8.html#klein4Classes",
          "type": "function"
        },
        "index": {
          "description": "Symmetry classes with respect to Klein4",
          "hierarchy": "Math Perm D8",
          "module": "Math.Perm.D8",
          "name": "klein4Classes",
          "normalized": "[Perm]-\u003e[[Perm]]",
          "package": "sym",
          "partial": "Classes",
          "signature": "[Perm]-\u003e[[Perm]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sym/docs/Math-Perm-D8.html#v:klein4Classes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eorbit fs x\u003c/code\u003e is the orbit of \u003ccode\u003ex\u003c/code\u003e under the \u003cem\u003egroup\u003c/em\u003e of function \u003ccode\u003efs\u003c/code\u003e. E.g.,\n\u003c/p\u003e\u003cpre\u003e orbit klein4 \"2314\" == [\"1423\",\"2314\",\"3241\",\"4132\"]\n\u003c/pre\u003e",
          "module": "Math.Perm.D8",
          "name": "orbit",
          "package": "sym",
          "signature": "[Perm -\u003e Perm] -\u003e Perm -\u003e [Perm]",
          "source": "src/Math-Perm-D8.html#orbit",
          "type": "function"
        },
        "index": {
          "description": "orbit fs is the orbit of under the group of function fs E.g orbit klein4",
          "hierarchy": "Math Perm D8",
          "module": "Math.Perm.D8",
          "name": "orbit",
          "normalized": "[Perm-\u003ePerm]-\u003ePerm-\u003e[Perm]",
          "package": "sym",
          "signature": "[Perm-\u003ePerm]-\u003ePerm-\u003e[Perm]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sym/docs/Math-Perm-D8.html#v:orbit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRation by 0 degrees, i.e. the identity map.\n\u003c/p\u003e",
          "module": "Math.Perm.D8",
          "name": "r0",
          "package": "sym",
          "signature": "Perm -\u003e Perm",
          "source": "src/Math-Perm-D8.html#r0",
          "type": "function"
        },
        "index": {
          "description": "Ration by degrees i.e the identity map",
          "hierarchy": "Math Perm D8",
          "module": "Math.Perm.D8",
          "name": "r0",
          "normalized": "Perm-\u003ePerm",
          "package": "sym",
          "signature": "Perm-\u003ePerm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sym/docs/Math-Perm-D8.html#v:r0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRation by 90 degrees clockwise.\n\u003c/p\u003e",
          "module": "Math.Perm.D8",
          "name": "r1",
          "package": "sym",
          "signature": "Perm -\u003e Perm",
          "source": "src/Math-Perm-D8.html#r1",
          "type": "function"
        },
        "index": {
          "description": "Ration by degrees clockwise",
          "hierarchy": "Math Perm D8",
          "module": "Math.Perm.D8",
          "name": "r1",
          "normalized": "Perm-\u003ePerm",
          "package": "sym",
          "signature": "Perm-\u003ePerm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sym/docs/Math-Perm-D8.html#v:r1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRation by 2*90 = 180 degrees clockwise.\n\u003c/p\u003e",
          "module": "Math.Perm.D8",
          "name": "r2",
          "package": "sym",
          "signature": "Perm -\u003e Perm",
          "source": "src/Math-Perm-D8.html#r2",
          "type": "function"
        },
        "index": {
          "description": "Ration by degrees clockwise",
          "hierarchy": "Math Perm D8",
          "module": "Math.Perm.D8",
          "name": "r2",
          "normalized": "Perm-\u003ePerm",
          "package": "sym",
          "signature": "Perm-\u003ePerm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sym/docs/Math-Perm-D8.html#v:r2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRation by 3*90 = 270 degrees clockwise.\n\u003c/p\u003e",
          "module": "Math.Perm.D8",
          "name": "r3",
          "package": "sym",
          "signature": "Perm -\u003e Perm",
          "source": "src/Math-Perm-D8.html#r3",
          "type": "function"
        },
        "index": {
          "description": "Ration by degrees clockwise",
          "hierarchy": "Math Perm D8",
          "module": "Math.Perm.D8",
          "name": "r3",
          "normalized": "Perm-\u003ePerm",
          "package": "sym",
          "signature": "Perm-\u003ePerm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sym/docs/Math-Perm-D8.html#v:r3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe reverse of the given permutation: if \u003ccode\u003ev = reverse u\u003c/code\u003e then\n \u003ccode\u003ev `at` i = u `at` (n-1-i)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Math.Perm.D8",
          "name": "reverse",
          "package": "sym",
          "signature": "Perm -\u003e Perm",
          "source": "src/Math-Perm-D8.html#reverse",
          "type": "function"
        },
        "index": {
          "description": "The reverse of the given permutation if reverse then at at n-1-i",
          "hierarchy": "Math Perm D8",
          "module": "Math.Perm.D8",
          "name": "reverse",
          "normalized": "Perm-\u003ePerm",
          "package": "sym",
          "signature": "Perm-\u003ePerm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sym/docs/Math-Perm-D8.html#v:reverse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003erotate = r1 = inverse . reverse\u003c/pre\u003e",
          "module": "Math.Perm.D8",
          "name": "rotate",
          "package": "sym",
          "signature": "Perm -\u003e Perm",
          "source": "src/Math-Perm-D8.html#rotate",
          "type": "function"
        },
        "index": {
          "description": "rotate r1 inverse reverse",
          "hierarchy": "Math Perm D8",
          "module": "Math.Perm.D8",
          "name": "rotate",
          "normalized": "Perm-\u003ePerm",
          "package": "sym",
          "signature": "Perm-\u003ePerm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sym/docs/Math-Perm-D8.html#v:rotate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReflection through a horizontal axis (also called \u003ccode\u003e\u003ca\u003ecomplement\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Math.Perm.D8",
          "name": "s0",
          "package": "sym",
          "signature": "Perm -\u003e Perm",
          "source": "src/Math-Perm-D8.html#s0",
          "type": "function"
        },
        "index": {
          "description": "Reflection through horizontal axis also called complement",
          "hierarchy": "Math Perm D8",
          "module": "Math.Perm.D8",
          "name": "s0",
          "normalized": "Perm-\u003ePerm",
          "package": "sym",
          "signature": "Perm-\u003ePerm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sym/docs/Math-Perm-D8.html#v:s0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReflection through a vertical axis (also called \u003ccode\u003e\u003ca\u003ereverse\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Math.Perm.D8",
          "name": "s1",
          "package": "sym",
          "signature": "Perm -\u003e Perm",
          "source": "src/Math-Perm-D8.html#s1",
          "type": "function"
        },
        "index": {
          "description": "Reflection through vertical axis also called reverse",
          "hierarchy": "Math Perm D8",
          "module": "Math.Perm.D8",
          "name": "s1",
          "normalized": "Perm-\u003ePerm",
          "package": "sym",
          "signature": "Perm-\u003ePerm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sym/docs/Math-Perm-D8.html#v:s1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReflection through the main diagonal (also called \u003ccode\u003e\u003ca\u003einverse\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Math.Perm.D8",
          "name": "s2",
          "package": "sym",
          "signature": "Perm -\u003e Perm",
          "source": "src/Math-Perm-D8.html#s2",
          "type": "function"
        },
        "index": {
          "description": "Reflection through the main diagonal also called inverse",
          "hierarchy": "Math Perm D8",
          "module": "Math.Perm.D8",
          "name": "s2",
          "normalized": "Perm-\u003ePerm",
          "package": "sym",
          "signature": "Perm-\u003ePerm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sym/docs/Math-Perm-D8.html#v:s2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReflection through the anti-diagonal.\n\u003c/p\u003e",
          "module": "Math.Perm.D8",
          "name": "s3",
          "package": "sym",
          "signature": "Perm -\u003e Perm",
          "source": "src/Math-Perm-D8.html#s3",
          "type": "function"
        },
        "index": {
          "description": "Reflection through the anti-diagonal",
          "hierarchy": "Math Perm D8",
          "module": "Math.Perm.D8",
          "name": "s3",
          "normalized": "Perm-\u003ePerm",
          "package": "sym",
          "signature": "Perm-\u003ePerm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sym/docs/Math-Perm-D8.html#v:s3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003esymmetryClasses fs xs\u003c/code\u003e is the list of equivalence classes under\n the action of the \u003cem\u003egroup\u003c/em\u003e of functions \u003ccode\u003efs\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Math.Perm.D8",
          "name": "symmetryClasses",
          "package": "sym",
          "signature": "[Perm -\u003e Perm] -\u003e [Perm] -\u003e [[Perm]]",
          "source": "src/Math-Perm-D8.html#symmetryClasses",
          "type": "function"
        },
        "index": {
          "description": "symmetryClasses fs xs is the list of equivalence classes under the action of the group of functions fs",
          "hierarchy": "Math Perm D8",
          "module": "Math.Perm.D8",
          "name": "symmetryClasses",
          "normalized": "[Perm-\u003ePerm]-\u003e[Perm]-\u003e[[Perm]]",
          "package": "sym",
          "partial": "Classes",
          "signature": "[Perm-\u003ePerm]-\u003e[Perm]-\u003e[[Perm]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sym/docs/Math-Perm-D8.html#v:symmetryClasses"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Perm.Group",
          "name": "Group",
          "package": "sym",
          "source": "src/Math-Perm-Group.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Math Perm Group",
          "module": "Math.Perm.Group",
          "name": "Group",
          "package": "sym",
          "partial": "Group",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sym/docs/Math-Perm-Group.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe (left) group action of Perm on itself: if \u003ccode\u003ew = u \u003ccode\u003e\u003ca\u003eact\u003c/a\u003e\u003c/code\u003e v\u003c/code\u003e\n then \u003ccode\u003ew `at ` (u `at` i) = v `at` i\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Math.Perm.Group",
          "name": "act",
          "package": "sym",
          "signature": "Perm -\u003e Perm -\u003e Perm",
          "source": "src/Math-Perm-Group.html#act",
          "type": "function"
        },
        "index": {
          "description": "The left group action of Perm on itself if act then at at at",
          "hierarchy": "Math Perm Group",
          "module": "Math.Perm.Group",
          "name": "act",
          "normalized": "Perm-\u003ePerm-\u003ePerm",
          "package": "sym",
          "signature": "Perm-\u003ePerm-\u003ePerm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sym/docs/Math-Perm-Group.html#v:act"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe product/composition of \u003ccode\u003eu\u003c/code\u003e and \u003ccode\u003ev\u003c/code\u003e: if \u003ccode\u003ew = u \u003ccode\u003e\u003ca\u003ecompose\u003c/a\u003e\u003c/code\u003e v\u003c/code\u003e\n then \u003ccode\u003ew `at ` i = v `at` (u `at` i)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Math.Perm.Group",
          "name": "compose",
          "package": "sym",
          "signature": "Perm -\u003e Perm -\u003e Perm",
          "source": "src/Math-Perm-Group.html#compose",
          "type": "function"
        },
        "index": {
          "description": "The product composition of and if compose then at at at",
          "hierarchy": "Math Perm Group",
          "module": "Math.Perm.Group",
          "name": "compose",
          "normalized": "Perm-\u003ePerm-\u003ePerm",
          "package": "sym",
          "signature": "Perm-\u003ePerm-\u003ePerm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sym/docs/Math-Perm-Group.html#v:compose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Perm.Pattern",
          "name": "Pattern",
          "package": "sym",
          "source": "src/Math-Perm-Pattern.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Math Perm Pattern",
          "module": "Math.Perm.Pattern",
          "name": "Pattern",
          "package": "sym",
          "partial": "Pattern",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sym/docs/Math-Perm-Pattern.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePattern is just an alias for permutation.\n\u003c/p\u003e",
          "module": "Math.Perm.Pattern",
          "name": "Pattern",
          "package": "sym",
          "source": "src/Math-Perm-Pattern.html#Pattern",
          "type": "type"
        },
        "index": {
          "description": "Pattern is just an alias for permutation",
          "hierarchy": "Math Perm Pattern",
          "module": "Math.Perm.Pattern",
          "name": "Pattern",
          "package": "sym",
          "partial": "Pattern",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/sym/docs/Math-Perm-Pattern.html#t:Pattern"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA set is represented by an increasing array of non-negative\n integers.\n\u003c/p\u003e",
          "module": "Math.Perm.Pattern",
          "name": "Set",
          "package": "sym",
          "source": "src/Data-Perm-Internal.html#Set",
          "type": "type"
        },
        "index": {
          "description": "set is represented by an increasing array of non-negative integers",
          "hierarchy": "Math Perm Pattern",
          "module": "Math.Perm.Pattern",
          "name": "Set",
          "package": "sym",
          "partial": "Set",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/sym/docs/Math-Perm-Pattern.html#t:Set"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eavoiders ps ws\u003c/code\u003e is the list of permutations in \u003ccode\u003ews\u003c/code\u003e avoiding the\n patterns in \u003ccode\u003eps\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Math.Perm.Pattern",
          "name": "avoiders",
          "package": "sym",
          "signature": "[Pattern] -\u003e [Perm] -\u003e [Perm]",
          "source": "src/Math-Perm-Pattern.html#avoiders",
          "type": "function"
        },
        "index": {
          "description": "avoiders ps ws is the list of permutations in ws avoiding the patterns in ps",
          "hierarchy": "Math Perm Pattern",
          "module": "Math.Perm.Pattern",
          "name": "avoiders",
          "normalized": "[Pattern]-\u003e[Perm]-\u003e[Perm]",
          "package": "sym",
          "signature": "[Pattern]-\u003e[Perm]-\u003e[Perm]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sym/docs/Math-Perm-Pattern.html#v:avoiders"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ew \u003ccode\u003e\u003ca\u003eavoids\u003c/a\u003e\u003c/code\u003e p\u003c/code\u003e is a predicate determining if \u003ccode\u003ew\u003c/code\u003e avoids the pattern \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Math.Perm.Pattern",
          "name": "avoids",
          "package": "sym",
          "signature": "Perm -\u003e Pattern -\u003e Bool",
          "source": "src/Math-Perm-Pattern.html#avoids",
          "type": "function"
        },
        "index": {
          "description": "avoids is predicate determining if avoids the pattern",
          "hierarchy": "Math Perm Pattern",
          "module": "Math.Perm.Pattern",
          "name": "avoids",
          "normalized": "Perm-\u003ePattern-\u003eBool",
          "package": "sym",
          "signature": "Perm-\u003ePattern-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sym/docs/Math-Perm-Pattern.html#v:avoids"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ew \u003ccode\u003e\u003ca\u003eavoidsAll\u003c/a\u003e\u003c/code\u003e ps\u003c/code\u003e is a predicate determining if \u003ccode\u003ew\u003c/code\u003e avoids the patterns \u003ccode\u003eps\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Math.Perm.Pattern",
          "name": "avoidsAll",
          "package": "sym",
          "signature": "Perm -\u003e [Pattern] -\u003e Bool",
          "source": "src/Math-Perm-Pattern.html#avoidsAll",
          "type": "function"
        },
        "index": {
          "description": "avoidsAll ps is predicate determining if avoids the patterns ps",
          "hierarchy": "Math Perm Pattern",
          "module": "Math.Perm.Pattern",
          "name": "avoidsAll",
          "normalized": "Perm-\u003e[Pattern]-\u003eBool",
          "package": "sym",
          "partial": "All",
          "signature": "Perm-\u003e[Pattern]-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sym/docs/Math-Perm-Pattern.html#v:avoidsAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ecoeff f v\u003c/code\u003e is the coefficient of \u003ccode\u003ev\u003c/code\u003e when expanding the\n permutation statistic \u003ccode\u003ef\u003c/code\u003e as a sum of permutations/patterns. See\n Petter Br&#228;nd&#233;n and Anders Claesson: Mesh patterns and the expansion\n of permutation statistics as sums of permutation patterns, The\n Electronic Journal of Combinatorics 18(2) (2011),\n \u003ca\u003ehttp://www.combinatorics.org/ojs/index.php/eljc/article/view/v18i2p5\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Math.Perm.Pattern",
          "name": "coeff",
          "package": "sym",
          "signature": "(Pattern -\u003e Int) -\u003e Pattern -\u003e Int",
          "source": "src/Math-Perm-Pattern.html#coeff",
          "type": "function"
        },
        "index": {
          "description": "coeff is the coefficient of when expanding the permutation statistic as sum of permutations patterns See Petter Br nd and Anders Claesson Mesh patterns and the expansion of permutation statistics as sums of permutation patterns The Electronic Journal of Combinatorics http www.combinatorics.org ojs index.php eljc article view v18i2p5",
          "hierarchy": "Math Perm Pattern",
          "module": "Math.Perm.Pattern",
          "name": "coeff",
          "normalized": "(Pattern-\u003eInt)-\u003ePattern-\u003eInt",
          "package": "sym",
          "signature": "(Pattern-\u003eInt)-\u003ePattern-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sym/docs/Math-Perm-Pattern.html#v:coeff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ew \u003ccode\u003e\u003ca\u003econtains\u003c/a\u003e\u003c/code\u003e p\u003c/code\u003e is a predicate determining if \u003ccode\u003ew\u003c/code\u003e contains the pattern \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Math.Perm.Pattern",
          "name": "contains",
          "package": "sym",
          "signature": "Perm -\u003e Pattern -\u003e Bool",
          "source": "src/Math-Perm-Pattern.html#contains",
          "type": "function"
        },
        "index": {
          "description": "contains is predicate determining if contains the pattern",
          "hierarchy": "Math Perm Pattern",
          "module": "Math.Perm.Pattern",
          "name": "contains",
          "normalized": "Perm-\u003ePattern-\u003eBool",
          "package": "sym",
          "signature": "Perm-\u003ePattern-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sym/docs/Math-Perm-Pattern.html#v:contains"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ecopies p w\u003c/code\u003e is the list of sets that represent copies of \u003ccode\u003ep\u003c/code\u003e in \u003ccode\u003ew\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Math.Perm.Pattern",
          "name": "copiesOf",
          "package": "sym",
          "signature": "Pattern -\u003e Perm -\u003e [Set]",
          "source": "src/Math-Perm-Pattern.html#copiesOf",
          "type": "function"
        },
        "index": {
          "description": "copies is the list of sets that represent copies of in",
          "hierarchy": "Math Perm Pattern",
          "module": "Math.Perm.Pattern",
          "name": "copiesOf",
          "normalized": "Pattern-\u003ePerm-\u003e[Set]",
          "package": "sym",
          "partial": "Of",
          "signature": "Pattern-\u003ePerm-\u003e[Set]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sym/docs/Math-Perm-Pattern.html#v:copiesOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe set of maximal elements with respect to containment.\n\u003c/p\u003e",
          "module": "Math.Perm.Pattern",
          "name": "maxima",
          "package": "sym",
          "signature": "[Pattern] -\u003e [Pattern]",
          "source": "src/Math-Perm-Pattern.html#maxima",
          "type": "function"
        },
        "index": {
          "description": "The set of maximal elements with respect to containment",
          "hierarchy": "Math Perm Pattern",
          "module": "Math.Perm.Pattern",
          "name": "maxima",
          "normalized": "[Pattern]-\u003e[Pattern]",
          "package": "sym",
          "signature": "[Pattern]-\u003e[Pattern]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sym/docs/Math-Perm-Pattern.html#v:maxima"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe set of minimal elements with respect to containment.\n\u003c/p\u003e",
          "module": "Math.Perm.Pattern",
          "name": "minima",
          "package": "sym",
          "signature": "[Pattern] -\u003e [Pattern]",
          "source": "src/Math-Perm-Pattern.html#minima",
          "type": "function"
        },
        "index": {
          "description": "The set of minimal elements with respect to containment",
          "hierarchy": "Math Perm Pattern",
          "module": "Math.Perm.Pattern",
          "name": "minima",
          "normalized": "[Pattern]-\u003e[Pattern]",
          "package": "sym",
          "signature": "[Pattern]-\u003e[Pattern]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sym/docs/Math-Perm-Pattern.html#v:minima"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eordiso u v m\u003c/code\u003e determines whether the subword in \u003ccode\u003ev\u003c/code\u003e specified by\n \u003ccode\u003em\u003c/code\u003e is order isomorphic to \u003ccode\u003eu\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Math.Perm.Pattern",
          "name": "ordiso",
          "package": "sym",
          "signature": "Perm -\u003e Perm -\u003e Set -\u003e Bool",
          "source": "src/Math-Perm-Pattern.html#ordiso",
          "type": "function"
        },
        "index": {
          "description": "ordiso determines whether the subword in specified by is order isomorphic to",
          "hierarchy": "Math Perm Pattern",
          "module": "Math.Perm.Pattern",
          "name": "ordiso",
          "normalized": "Perm-\u003ePerm-\u003eSet-\u003eBool",
          "package": "sym",
          "signature": "Perm-\u003ePerm-\u003eSet-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sym/docs/Math-Perm-Pattern.html#v:ordiso"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003esubsets n k\u003c/code\u003e is the list of subsets of \u003ccode\u003e[0..n-1]\u003c/code\u003e with \u003ccode\u003ek\u003c/code\u003e\n elements.\n\u003c/p\u003e",
          "module": "Math.Perm.Pattern",
          "name": "subsets",
          "package": "sym",
          "signature": "Int -\u003e Int -\u003e [Set]",
          "source": "src/Data-Perm-Internal.html#subsets",
          "type": "function"
        },
        "index": {
          "description": "subsets is the list of subsets of n-1 with elements",
          "hierarchy": "Math Perm Pattern",
          "module": "Math.Perm.Pattern",
          "name": "subsets",
          "normalized": "Int-\u003eInt-\u003e[Set]",
          "package": "sym",
          "signature": "Int-\u003eInt-\u003e[Set]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sym/docs/Math-Perm-Pattern.html#v:subsets"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Perm.Simple",
          "name": "Simple",
          "package": "sym",
          "source": "src/Math-Perm-Simple.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Math Perm Simple",
          "module": "Math.Perm.Simple",
          "name": "Simple",
          "package": "sym",
          "partial": "Simple",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sym/docs/Math-Perm-Simple.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIs the permutation simple?\n\u003c/p\u003e",
          "module": "Math.Perm.Simple",
          "name": "simple",
          "package": "sym",
          "signature": "Perm -\u003e Bool",
          "source": "src/Math-Perm-Simple.html#simple",
          "type": "function"
        },
        "index": {
          "description": "Is the permutation simple",
          "hierarchy": "Math Perm Simple",
          "module": "Math.Perm.Simple",
          "name": "simple",
          "normalized": "Perm-\u003eBool",
          "package": "sym",
          "signature": "Perm-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sym/docs/Math-Perm-Simple.html#v:simple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Perm.Sort",
          "name": "Sort",
          "package": "sym",
          "source": "src/Math-Perm-Sort.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Math Perm Sort",
          "module": "Math.Perm.Sort",
          "name": "Sort",
          "package": "sym",
          "partial": "Sort",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sym/docs/Math-Perm-Sort.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOne pass of bubble-sort.\n\u003c/p\u003e",
          "module": "Math.Perm.Sort",
          "name": "bubbleSort",
          "package": "sym",
          "signature": "Perm -\u003e Perm",
          "source": "src/Math-Perm-Sort.html#bubbleSort",
          "type": "function"
        },
        "index": {
          "description": "One pass of bubble-sort",
          "hierarchy": "Math Perm Sort",
          "module": "Math.Perm.Sort",
          "name": "bubbleSort",
          "normalized": "Perm-\u003ePerm",
          "package": "sym",
          "partial": "Sort",
          "signature": "Perm-\u003ePerm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sym/docs/Math-Perm-Sort.html#v:bubbleSort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOne pass of stack-sort.\n\u003c/p\u003e",
          "module": "Math.Perm.Sort",
          "name": "stackSort",
          "package": "sym",
          "signature": "Perm -\u003e Perm",
          "source": "src/Math-Perm-Sort.html#stackSort",
          "type": "function"
        },
        "index": {
          "description": "One pass of stack-sort",
          "hierarchy": "Math Perm Sort",
          "module": "Math.Perm.Sort",
          "name": "stackSort",
          "normalized": "Perm-\u003ePerm",
          "package": "sym",
          "partial": "Sort",
          "signature": "Perm-\u003ePerm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sym/docs/Math-Perm-Sort.html#v:stackSort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCommon permutation statistics. To avoid name clashes this module is\n best imported \u003ccode\u003equalified\u003c/code\u003e; e.g.\n\u003c/p\u003e\u003cpre\u003e import qualified Math.Perm.Stat as S\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Math.Perm.Stat",
          "name": "Stat",
          "package": "sym",
          "source": "src/Math-Perm-Stat.html",
          "type": "module"
        },
        "index": {
          "description": "Common permutation statistics To avoid name clashes this module is best imported qualified e.g import qualified Math.Perm.Stat as",
          "hierarchy": "Math Perm Stat",
          "module": "Math.Perm.Stat",
          "name": "Stat",
          "package": "sym",
          "partial": "Stat",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sym/docs/Math-Perm-Stat.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe number of ascents. An \u003cem\u003eascent\u003c/em\u003e in \u003ccode\u003ew\u003c/code\u003e is an index \u003ccode\u003ei\u003c/code\u003e such\n that \u003ccode\u003ew[i] \u003c w[i+1]\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Math.Perm.Stat",
          "name": "asc",
          "package": "sym",
          "signature": "Perm -\u003e Int",
          "source": "src/Math-Perm-Stat.html#asc",
          "type": "function"
        },
        "index": {
          "description": "The number of ascents An ascent in is an index such that",
          "hierarchy": "Math Perm Stat",
          "module": "Math.Perm.Stat",
          "name": "asc",
          "normalized": "Perm-\u003eInt",
          "package": "sym",
          "signature": "Perm-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sym/docs/Math-Perm-Stat.html#v:asc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe number of small ascents. A \u003cem\u003esmall ascent\u003c/em\u003e in \u003ccode\u003ew\u003c/code\u003e is an index\n \u003ccode\u003ei\u003c/code\u003e such that \u003ccode\u003ew[i] + 1 == w[i+1]\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Math.Perm.Stat",
          "name": "asc0",
          "package": "sym",
          "signature": "Perm -\u003e Int",
          "source": "src/Math-Perm-Stat.html#asc0",
          "type": "function"
        },
        "index": {
          "description": "The number of small ascents small ascent in is an index such that",
          "hierarchy": "Math Perm Stat",
          "module": "Math.Perm.Stat",
          "name": "asc0",
          "normalized": "Perm-\u003eInt",
          "package": "sym",
          "signature": "Perm-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sym/docs/Math-Perm-Stat.html#v:asc0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eThe co-major index\u003c/em\u003e is the sum of descents.\n\u003c/p\u003e",
          "module": "Math.Perm.Stat",
          "name": "comaj",
          "package": "sym",
          "signature": "Perm -\u003e Int",
          "source": "src/Math-Perm-Stat.html#comaj",
          "type": "function"
        },
        "index": {
          "description": "The co-major index is the sum of descents",
          "hierarchy": "Math Perm Stat",
          "module": "Math.Perm.Stat",
          "name": "comaj",
          "normalized": "Perm-\u003eInt",
          "package": "sym",
          "signature": "Perm-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sym/docs/Math-Perm-Stat.html#v:comaj"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe number of components. E.g., \u003ccode\u003e[2,0,3,1,4,6,7,5]\u003c/code\u003e has three\n components: \u003ccode\u003e[2,0,3,1]\u003c/code\u003e, \u003ccode\u003e[4]\u003c/code\u003e and \u003ccode\u003e[6,7,5]\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Math.Perm.Stat",
          "name": "comp",
          "package": "sym",
          "signature": "Perm -\u003e Int",
          "source": "src/Math-Perm-Stat.html#comp",
          "type": "function"
        },
        "index": {
          "description": "The number of components E.g has three components and",
          "hierarchy": "Math Perm Stat",
          "module": "Math.Perm.Stat",
          "name": "comp",
          "normalized": "Perm-\u003eInt",
          "package": "sym",
          "signature": "Perm-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sym/docs/Math-Perm-Stat.html#v:comp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe number of \u003cem\u003ecycles\u003c/em\u003e:\n orbits of the permutation when viewed as a function.\n\u003c/p\u003e",
          "module": "Math.Perm.Stat",
          "name": "cyc",
          "package": "sym",
          "signature": "Perm -\u003e Int",
          "source": "src/Math-Perm-Stat.html#cyc",
          "type": "function"
        },
        "index": {
          "description": "The number of cycles orbits of the permutation when viewed as function",
          "hierarchy": "Math Perm Stat",
          "module": "Math.Perm.Stat",
          "name": "cyc",
          "normalized": "Perm-\u003eInt",
          "package": "sym",
          "signature": "Perm-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sym/docs/Math-Perm-Stat.html#v:cyc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe number of \u003cem\u003edouble ascents\u003c/em\u003e:\n positions \u003ccode\u003ei\u003c/code\u003e such that \u003ccode\u003ew[i-1] \u003c  w[i] \u003c w[i+1]\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Math.Perm.Stat",
          "name": "dasc",
          "package": "sym",
          "signature": "Perm -\u003e Int",
          "source": "src/Math-Perm-Stat.html#dasc",
          "type": "function"
        },
        "index": {
          "description": "The number of double ascents positions such that i-1",
          "hierarchy": "Math Perm Stat",
          "module": "Math.Perm.Stat",
          "name": "dasc",
          "normalized": "Perm-\u003eInt",
          "package": "sym",
          "signature": "Perm-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sym/docs/Math-Perm-Stat.html#v:dasc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe number of \u003cem\u003edouble descents\u003c/em\u003e:\n positions \u003ccode\u003ei\u003c/code\u003e such that \u003ccode\u003ew[i-1] \u003e  w[i] \u003e w[i+1]\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Math.Perm.Stat",
          "name": "ddes",
          "package": "sym",
          "signature": "Perm -\u003e Int",
          "source": "src/Math-Perm-Stat.html#ddes",
          "type": "function"
        },
        "index": {
          "description": "The number of double descents positions such that i-1",
          "hierarchy": "Math Perm Stat",
          "module": "Math.Perm.Stat",
          "name": "ddes",
          "normalized": "Perm-\u003eInt",
          "package": "sym",
          "signature": "Perm-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sym/docs/Math-Perm-Stat.html#v:ddes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe number of descents. A \u003cem\u003edescent\u003c/em\u003e in \u003ccode\u003ew\u003c/code\u003e is an index \u003ccode\u003ei\u003c/code\u003e such\n that \u003ccode\u003ew[i] \u003e w[i+1]\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Math.Perm.Stat",
          "name": "des",
          "package": "sym",
          "signature": "Perm -\u003e Int",
          "source": "src/Math-Perm-Stat.html#des",
          "type": "function"
        },
        "index": {
          "description": "The number of descents descent in is an index such that",
          "hierarchy": "Math Perm Stat",
          "module": "Math.Perm.Stat",
          "name": "des",
          "normalized": "Perm-\u003eInt",
          "package": "sym",
          "signature": "Perm-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sym/docs/Math-Perm-Stat.html#v:des"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe number of small descents. A \u003cem\u003esmall descent\u003c/em\u003e in \u003ccode\u003ew\u003c/code\u003e is an\n index \u003ccode\u003ei\u003c/code\u003e such that \u003ccode\u003ew[i] == w[i+1] + 1\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Math.Perm.Stat",
          "name": "des0",
          "package": "sym",
          "signature": "Perm -\u003e Int",
          "source": "src/Math-Perm-Stat.html#des0",
          "type": "function"
        },
        "index": {
          "description": "The number of small descents small descent in is an index such that",
          "hierarchy": "Math Perm Stat",
          "module": "Math.Perm.Stat",
          "name": "des0",
          "normalized": "Perm-\u003eInt",
          "package": "sym",
          "signature": "Perm-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sym/docs/Math-Perm-Stat.html#v:des0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe dimension of a permutation is defined as the largest\n non-fixed-point, or zero if all points are fixed.\n\u003c/p\u003e",
          "module": "Math.Perm.Stat",
          "name": "dim",
          "package": "sym",
          "signature": "Perm -\u003e Int",
          "source": "src/Math-Perm-Stat.html#dim",
          "type": "function"
        },
        "index": {
          "description": "The dimension of permutation is defined as the largest non-fixed-point or zero if all points are fixed",
          "hierarchy": "Math Perm Stat",
          "module": "Math.Perm.Stat",
          "name": "dim",
          "normalized": "Perm-\u003eInt",
          "package": "sym",
          "signature": "Perm-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sym/docs/Math-Perm-Stat.html#v:dim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe rank as defined by Elizalde and Pak [Bijections for\n refined restricted permutations, \u003cem\u003eJ. Comb. Theory, Ser. A\u003c/em\u003e, 2004]:\n\u003c/p\u003e\u003cpre\u003e maximum [ k | k \u003c- [0..n-1], w[i] \u003e= k for all i \u003c k ]\n\u003c/pre\u003e",
          "module": "Math.Perm.Stat",
          "name": "ep",
          "package": "sym",
          "signature": "Perm -\u003e Int",
          "source": "src/Math-Perm-Stat.html#ep",
          "type": "function"
        },
        "index": {
          "description": "The rank as defined by Elizalde and Pak Bijections for refined restricted permutations Comb Theory Ser maximum n-1 for all",
          "hierarchy": "Math Perm Stat",
          "module": "Math.Perm.Stat",
          "name": "ep",
          "normalized": "Perm-\u003eInt",
          "package": "sym",
          "signature": "Perm-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sym/docs/Math-Perm-Stat.html#v:ep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe number of \u003cem\u003eexcedances\u003c/em\u003e: positions \u003ccode\u003ei\u003c/code\u003e such that \u003ccode\u003ew[i] \u003e i\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Math.Perm.Stat",
          "name": "exc",
          "package": "sym",
          "signature": "Perm -\u003e Int",
          "source": "src/Math-Perm-Stat.html#exc",
          "type": "function"
        },
        "index": {
          "description": "The number of excedances positions such that",
          "hierarchy": "Math Perm Stat",
          "module": "Math.Perm.Stat",
          "name": "exc",
          "normalized": "Perm-\u003eInt",
          "package": "sym",
          "signature": "Perm-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sym/docs/Math-Perm-Stat.html#v:exc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe number of \u003cem\u003efixed points\u003c/em\u003e: positions \u003ccode\u003ei\u003c/code\u003e such that \u003ccode\u003ew[i] == i\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Math.Perm.Stat",
          "name": "fp",
          "package": "sym",
          "signature": "Perm -\u003e Int",
          "source": "src/Math-Perm-Stat.html#fp",
          "type": "function"
        },
        "index": {
          "description": "The number of fixed points positions such that",
          "hierarchy": "Math Perm Stat",
          "module": "Math.Perm.Stat",
          "name": "fp",
          "normalized": "Perm-\u003eInt",
          "package": "sym",
          "signature": "Perm-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sym/docs/Math-Perm-Stat.html#v:fp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe first (left-most) element in the standardization. E.g.,\n \u003ccode\u003ehead \"231\" = head (fromList [1,2,0]) = 1\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Math.Perm.Stat",
          "name": "head",
          "package": "sym",
          "signature": "Perm -\u003e Int",
          "source": "src/Math-Perm-Stat.html#head",
          "type": "function"
        },
        "index": {
          "description": "The first left-most element in the standardization E.g head head fromList",
          "hierarchy": "Math Perm Stat",
          "module": "Math.Perm.Stat",
          "name": "head",
          "normalized": "Perm-\u003eInt",
          "package": "sym",
          "signature": "Perm-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sym/docs/Math-Perm-Stat.html#v:head"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe number of \u003cem\u003einversions\u003c/em\u003e:\n pairs \u003ccode\u003e(i,j)\u003c/code\u003e such that \u003ccode\u003ei \u003c j\u003c/code\u003e and \u003ccode\u003ew[i] \u003e w[j]\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Math.Perm.Stat",
          "name": "inv",
          "package": "sym",
          "signature": "Perm -\u003e Int",
          "source": "src/Math-Perm-Stat.html#inv",
          "type": "function"
        },
        "index": {
          "description": "The number of inversions pairs such that and",
          "hierarchy": "Math Perm Stat",
          "module": "Math.Perm.Stat",
          "name": "inv",
          "normalized": "Perm-\u003eInt",
          "package": "sym",
          "signature": "Perm-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sym/docs/Math-Perm-Stat.html#v:inv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe last (right-most) element in the standardization. E.g.,\n \u003ccode\u003elast \"231\" = last (fromList [1,2,0]) = 0\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Math.Perm.Stat",
          "name": "last",
          "package": "sym",
          "signature": "Perm -\u003e Int",
          "source": "src/Math-Perm-Stat.html#last",
          "type": "function"
        },
        "index": {
          "description": "The last right-most element in the standardization E.g last last fromList",
          "hierarchy": "Math Perm Stat",
          "module": "Math.Perm.Stat",
          "name": "last",
          "normalized": "Perm-\u003eInt",
          "package": "sym",
          "signature": "Perm-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sym/docs/Math-Perm-Stat.html#v:last"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLength of the left-most decreasing run: largest \u003ccode\u003ei\u003c/code\u003e such that\n \u003ccode\u003ew[0] \u003e w[1] \u003e ... \u003e w[i-1]\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Math.Perm.Stat",
          "name": "ldr",
          "package": "sym",
          "signature": "Perm -\u003e Int",
          "source": "src/Math-Perm-Stat.html#ldr",
          "type": "function"
        },
        "index": {
          "description": "Length of the left-most decreasing run largest such that i-1",
          "hierarchy": "Math Perm Stat",
          "module": "Math.Perm.Stat",
          "name": "ldr",
          "normalized": "Perm-\u003eInt",
          "package": "sym",
          "signature": "Perm-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sym/docs/Math-Perm-Stat.html#v:ldr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLength of the left-most increasing run: largest \u003ccode\u003ei\u003c/code\u003e such that\n \u003ccode\u003ew[0] \u003c w[1] \u003c ... \u003c w[i-1]\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Math.Perm.Stat",
          "name": "lir",
          "package": "sym",
          "signature": "Perm -\u003e Int",
          "source": "src/Math-Perm-Stat.html#lir",
          "type": "function"
        },
        "index": {
          "description": "Length of the left-most increasing run largest such that i-1",
          "hierarchy": "Math Perm Stat",
          "module": "Math.Perm.Stat",
          "name": "lir",
          "normalized": "Perm-\u003eInt",
          "package": "sym",
          "signature": "Perm-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sym/docs/Math-Perm-Stat.html#v:lir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe number of \u003cem\u003eleft-to-right maxima\u003c/em\u003e:\n positions \u003ccode\u003ei\u003c/code\u003e such that \u003ccode\u003ew[i] \u003e w[j]\u003c/code\u003e for all \u003ccode\u003ej \u003c i\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Math.Perm.Stat",
          "name": "lmax",
          "package": "sym",
          "signature": "Perm -\u003e Int",
          "source": "src/Math-Perm-Stat.html#lmax",
          "type": "function"
        },
        "index": {
          "description": "The number of left-to-right maxima positions such that for all",
          "hierarchy": "Math Perm Stat",
          "module": "Math.Perm.Stat",
          "name": "lmax",
          "normalized": "Perm-\u003eInt",
          "package": "sym",
          "signature": "Perm-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sym/docs/Math-Perm-Stat.html#v:lmax"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe number of \u003cem\u003eleft-to-right minima\u003c/em\u003e:\n positions \u003ccode\u003ei\u003c/code\u003e such that \u003ccode\u003ew[i] \u003c w[j]\u003c/code\u003e for all \u003ccode\u003ej \u003c i\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Math.Perm.Stat",
          "name": "lmin",
          "package": "sym",
          "signature": "Perm -\u003e Int",
          "source": "src/Math-Perm-Stat.html#lmin",
          "type": "function"
        },
        "index": {
          "description": "The number of left-to-right minima positions such that for all",
          "hierarchy": "Math Perm Stat",
          "module": "Math.Perm.Stat",
          "name": "lmin",
          "normalized": "Perm-\u003eInt",
          "package": "sym",
          "signature": "Perm-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sym/docs/Math-Perm-Stat.html#v:lmin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eThe major index\u003c/em\u003e is the sum of descents.\n\u003c/p\u003e",
          "module": "Math.Perm.Stat",
          "name": "maj",
          "package": "sym",
          "signature": "Perm -\u003e Int",
          "source": "src/Math-Perm-Stat.html#maj",
          "type": "function"
        },
        "index": {
          "description": "The major index is the sum of descents",
          "hierarchy": "Math Perm Stat",
          "module": "Math.Perm.Stat",
          "name": "maj",
          "normalized": "Perm-\u003eInt",
          "package": "sym",
          "signature": "Perm-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sym/docs/Math-Perm-Stat.html#v:maj"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe number of \u003cem\u003epeaks\u003c/em\u003e:\n positions \u003ccode\u003ei\u003c/code\u003e such that \u003ccode\u003ew[i-1] \u003c w[i]\u003c/code\u003e and \u003ccode\u003ew[i] \u003e w[i+1]\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Math.Perm.Stat",
          "name": "peak",
          "package": "sym",
          "signature": "Perm -\u003e Int",
          "source": "src/Math-Perm-Stat.html#peak",
          "type": "function"
        },
        "index": {
          "description": "The number of peaks positions such that i-1 and",
          "hierarchy": "Math Perm Stat",
          "module": "Math.Perm.Stat",
          "name": "peak",
          "normalized": "Perm-\u003eInt",
          "package": "sym",
          "signature": "Perm-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sym/docs/Math-Perm-Stat.html#v:peak"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLength of the right-most decreasing run: largest \u003ccode\u003ei\u003c/code\u003e such that\n \u003ccode\u003ew[n-i] \u003e ... \u003e w[n-2] \u003e w[n-1]\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Math.Perm.Stat",
          "name": "rdr",
          "package": "sym",
          "signature": "Perm -\u003e Int",
          "source": "src/Math-Perm-Stat.html#rdr",
          "type": "function"
        },
        "index": {
          "description": "Length of the right-most decreasing run largest such that n-i n-2 n-1",
          "hierarchy": "Math Perm Stat",
          "module": "Math.Perm.Stat",
          "name": "rdr",
          "normalized": "Perm-\u003eInt",
          "package": "sym",
          "signature": "Perm-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sym/docs/Math-Perm-Stat.html#v:rdr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLength of the right-most increasing run: largest \u003ccode\u003ei\u003c/code\u003e such that\n \u003ccode\u003ew[n-i] \u003c ... \u003c w[n-2] \u003c w[n-1]\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Math.Perm.Stat",
          "name": "rir",
          "package": "sym",
          "signature": "Perm -\u003e Int",
          "source": "src/Math-Perm-Stat.html#rir",
          "type": "function"
        },
        "index": {
          "description": "Length of the right-most increasing run largest such that n-i n-2 n-1",
          "hierarchy": "Math Perm Stat",
          "module": "Math.Perm.Stat",
          "name": "rir",
          "normalized": "Perm-\u003eInt",
          "package": "sym",
          "signature": "Perm-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sym/docs/Math-Perm-Stat.html#v:rir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe number of \u003cem\u003eright-to-left maxima\u003c/em\u003e:\n positions \u003ccode\u003ei\u003c/code\u003e such that \u003ccode\u003ew[i] \u003e w[j]\u003c/code\u003e for all \u003ccode\u003ej \u003e i\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Math.Perm.Stat",
          "name": "rmax",
          "package": "sym",
          "signature": "Perm -\u003e Int",
          "source": "src/Math-Perm-Stat.html#rmax",
          "type": "function"
        },
        "index": {
          "description": "The number of right-to-left maxima positions such that for all",
          "hierarchy": "Math Perm Stat",
          "module": "Math.Perm.Stat",
          "name": "rmax",
          "normalized": "Perm-\u003eInt",
          "package": "sym",
          "signature": "Perm-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sym/docs/Math-Perm-Stat.html#v:rmax"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe number of \u003cem\u003eright-to-left minima\u003c/em\u003e:\n positions \u003ccode\u003ei\u003c/code\u003e such that \u003ccode\u003ew[i] \u003c w[j]\u003c/code\u003e for all \u003ccode\u003ej \u003e i\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Math.Perm.Stat",
          "name": "rmin",
          "package": "sym",
          "signature": "Perm -\u003e Int",
          "source": "src/Math-Perm-Stat.html#rmin",
          "type": "function"
        },
        "index": {
          "description": "The number of right-to-left minima positions such that for all",
          "hierarchy": "Math Perm Stat",
          "module": "Math.Perm.Stat",
          "name": "rmin",
          "normalized": "Perm-\u003eInt",
          "package": "sym",
          "signature": "Perm-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sym/docs/Math-Perm-Stat.html#v:rmin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe number of skew components. E.g., \u003ccode\u003e[5,7,4,6,3,1,0,2]\u003c/code\u003e has three\n skew components: \u003ccode\u003e[5,7,4,6]\u003c/code\u003e, \u003ccode\u003e[3]\u003c/code\u003e and \u003ccode\u003e[1,0,2]\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Math.Perm.Stat",
          "name": "scomp",
          "package": "sym",
          "signature": "Perm -\u003e Int",
          "source": "src/Math-Perm-Stat.html#scomp",
          "type": "function"
        },
        "index": {
          "description": "The number of skew components E.g has three skew components and",
          "hierarchy": "Math Perm Stat",
          "module": "Math.Perm.Stat",
          "name": "scomp",
          "normalized": "Perm-\u003eInt",
          "package": "sym",
          "signature": "Perm-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sym/docs/Math-Perm-Stat.html#v:scomp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe number of \u003cem\u003estrong fixed points\u003c/em\u003e (also called splitters):\n positions \u003ccode\u003ei\u003c/code\u003e such that \u003ccode\u003ew[j] \u003c i\u003c/code\u003e for \u003ccode\u003ej \u003c i\u003c/code\u003e and \u003ccode\u003ew[j] \u003e i\u003c/code\u003e for \u003ccode\u003ej \u003e i\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Math.Perm.Stat",
          "name": "sfp",
          "package": "sym",
          "signature": "Perm -\u003e Int",
          "source": "src/Math-Perm-Stat.html#sfp",
          "type": "function"
        },
        "index": {
          "description": "The number of strong fixed points also called splitters positions such that for and for",
          "hierarchy": "Math Perm Stat",
          "module": "Math.Perm.Stat",
          "name": "sfp",
          "normalized": "Perm-\u003eInt",
          "package": "sym",
          "signature": "Perm-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sym/docs/Math-Perm-Stat.html#v:sfp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe number of \u003cem\u003evalleys\u003c/em\u003e:\n positions \u003ccode\u003ei\u003c/code\u003e such that \u003ccode\u003ew[i-1] \u003e w[i]\u003c/code\u003e and \u003ccode\u003ew[i] \u003c w[i+1]\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Math.Perm.Stat",
          "name": "vall",
          "package": "sym",
          "signature": "Perm -\u003e Int",
          "source": "src/Math-Perm-Stat.html#vall",
          "type": "function"
        },
        "index": {
          "description": "The number of valleys positions such that i-1 and",
          "hierarchy": "Math Perm Stat",
          "module": "Math.Perm.Stat",
          "name": "vall",
          "normalized": "Perm-\u003eInt",
          "package": "sym",
          "signature": "Perm-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sym/docs/Math-Perm-Stat.html#v:vall"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA meta module collecting all Perm-modules, except those that are best\n imported \"qualified\".\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Math.Perm",
          "name": "Perm",
          "package": "sym",
          "source": "src/Math-Perm.html",
          "type": "module"
        },
        "index": {
          "description": "meta module collecting all Perm-modules except those that are best imported qualified",
          "hierarchy": "Math Perm",
          "module": "Math.Perm",
          "name": "Perm",
          "package": "sym",
          "partial": "Perm",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sym/docs/Math-Perm.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Sym",
          "name": "Sym",
          "package": "sym",
          "source": "src/Math-Sym.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Math Sym",
          "module": "Math.Sym",
          "name": "Sym",
          "package": "sym",
          "partial": "Sym",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sym/docs/Math-Sym.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe class of permutations. Minimal complete definition: \u003ccode\u003e\u003ca\u003est\u003c/a\u003e\u003c/code\u003e,\n \u003ccode\u003e\u003ca\u003eact\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eidperm\u003c/a\u003e\u003c/code\u003e. The default implementation of \u003ccode\u003e\u003ca\u003esize\u003c/a\u003e\u003c/code\u003e can be\n somewhat slow, so you may want to implement it as well.\n\u003c/p\u003e",
          "module": "Math.Sym",
          "name": "Permutation",
          "package": "sym",
          "source": "src/Math-Sym.html#Permutation",
          "type": "class"
        },
        "index": {
          "description": "The class of permutations Minimal complete definition st act and idperm The default implementation of size can be somewhat slow so you may want to implement it as well",
          "hierarchy": "Math Sym",
          "module": "Math.Sym",
          "name": "Permutation",
          "package": "sym",
          "partial": "Permutation",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/sym/docs/Math-Sym.html#t:Permutation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA (left) \u003cem\u003egroup action\u003c/em\u003e of \u003ccode\u003e\u003ca\u003ePerm\u003c/a\u003e\u003c/code\u003e on \u003ccode\u003ea\u003c/code\u003e. As for any group\n action it should hold that\n\u003c/p\u003e\u003cpre\u003e (u `act` v) `act` w == u `act` (v `act` w)   &&   idperm n `act` v == v\n\u003c/pre\u003e\u003cp\u003ewhere \u003ccode\u003ev,w::a\u003c/code\u003e and \u003ccode\u003eu::Perm\u003c/code\u003e are of size \u003ccode\u003en\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Math.Sym",
          "name": "act",
          "package": "sym",
          "signature": "Perm -\u003e a -\u003e a",
          "source": "src/Math-Sym.html#act",
          "type": "method"
        },
        "index": {
          "description": "left group action of Perm on As for any group action it should hold that act act act act idperm act where and Perm are of size",
          "hierarchy": "Math Sym",
          "module": "Math.Sym",
          "name": "act",
          "normalized": "Perm-\u003ea-\u003ea",
          "package": "sym",
          "signature": "Perm-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sym/docs/Math-Sym.html#v:act"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe identity permutation of the given size.\n\u003c/p\u003e",
          "module": "Math.Sym",
          "name": "idperm",
          "package": "sym",
          "signature": "Int -\u003e a",
          "source": "src/Math-Sym.html#idperm",
          "type": "method"
        },
        "index": {
          "description": "The identity permutation of the given size",
          "hierarchy": "Math Sym",
          "module": "Math.Sym",
          "name": "idperm",
          "normalized": "Int-\u003ea",
          "package": "sym",
          "signature": "Int-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sym/docs/Math-Sym.html#v:idperm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe group theoretical inverse. It should hold that\n\u003c/p\u003e\u003cpre\u003e inverse == unst . inverse . st\n\u003c/pre\u003e\u003cp\u003eand this is the default implementation.\n\u003c/p\u003e",
          "module": "Math.Sym",
          "name": "inverse",
          "package": "sym",
          "signature": "a -\u003e a",
          "source": "src/Math-Sym.html#inverse",
          "type": "method"
        },
        "index": {
          "description": "The group theoretical inverse It should hold that inverse unst inverse st and this is the default implementation",
          "hierarchy": "Math Sym",
          "module": "Math.Sym",
          "name": "inverse",
          "normalized": "a-\u003ea",
          "package": "sym",
          "signature": "a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sym/docs/Math-Sym.html#v:inverse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLifts a function on \u003ccode\u003e\u003ca\u003ePerm\u003c/a\u003e\u003c/code\u003es to one on any permutations.\n\u003c/p\u003e",
          "module": "Math.Sym",
          "name": "lift",
          "package": "sym",
          "signature": "(Perm -\u003e Perm) -\u003e a -\u003e a",
          "source": "src/Math-Sym.html#lift",
          "type": "function"
        },
        "index": {
          "description": "Lifts function on Perm to one on any permutations",
          "hierarchy": "Math Sym",
          "module": "Math.Sym",
          "name": "lift",
          "normalized": "(Perm-\u003ePerm)-\u003ea-\u003ea",
          "package": "sym",
          "signature": "(Perm-\u003ePerm)-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sym/docs/Math-Sym.html#v:lift"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003elift\u003c/a\u003e\u003c/code\u003e but for functions of two variables.\n\u003c/p\u003e",
          "module": "Math.Sym",
          "name": "lift2",
          "package": "sym",
          "signature": "(Perm -\u003e Perm -\u003e Perm) -\u003e a -\u003e a -\u003e a",
          "source": "src/Math-Sym.html#lift2",
          "type": "function"
        },
        "index": {
          "description": "Like lift but for functions of two variables",
          "hierarchy": "Math Sym",
          "module": "Math.Sym",
          "name": "lift2",
          "normalized": "(Perm-\u003ePerm-\u003ePerm)-\u003ea-\u003ea-\u003ea",
          "package": "sym",
          "signature": "(Perm-\u003ePerm-\u003ePerm)-\u003ea-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sym/docs/Math-Sym.html#v:lift2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePredicate determining if two permutations are\n order-isomorphic. The default implementation uses\n\u003c/p\u003e\u003cpre\u003e u `ordiso` v  ==  u == st v\n\u003c/pre\u003e\u003cp\u003eEquivalently, one could use\n\u003c/p\u003e\u003cpre\u003e u `ordiso` v  ==  inverse u `act` v == idperm (size u)\n\u003c/pre\u003e",
          "module": "Math.Sym",
          "name": "ordiso",
          "package": "sym",
          "signature": "Perm -\u003e a -\u003e Bool",
          "source": "src/Math-Sym.html#ordiso",
          "type": "method"
        },
        "index": {
          "description": "Predicate determining if two permutations are order-isomorphic The default implementation uses ordiso st Equivalently one could use ordiso inverse act idperm size",
          "hierarchy": "Math Sym",
          "module": "Math.Sym",
          "name": "ordiso",
          "normalized": "Perm-\u003ea-\u003eBool",
          "package": "sym",
          "signature": "Perm-\u003ea-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sym/docs/Math-Sym.html#v:ordiso"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe list of all permutations of the given size.\n\u003c/p\u003e",
          "module": "Math.Sym",
          "name": "perms",
          "package": "sym",
          "signature": "Int -\u003e [a]",
          "source": "src/Math-Sym.html#perms",
          "type": "function"
        },
        "index": {
          "description": "The list of all permutations of the given size",
          "hierarchy": "Math Sym",
          "module": "Math.Sym",
          "name": "perms",
          "normalized": "Int-\u003e[a]",
          "package": "sym",
          "signature": "Int-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sym/docs/Math-Sym.html#v:perms"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe size of a permutation. The default implementation derived from\n\u003c/p\u003e\u003cpre\u003e size == size . st\n\u003c/pre\u003e\u003cp\u003eThis is not a circular definition as \u003ccode\u003e\u003ca\u003esize\u003c/a\u003e\u003c/code\u003e on \u003ccode\u003e\u003ca\u003ePerm\u003c/a\u003e\u003c/code\u003e is\n implemented independently. If the implementation of \u003ccode\u003e\u003ca\u003est\u003c/a\u003e\u003c/code\u003e is\n slow, then it can be worth while to override the standard\n definiton; any implementation should, however, satisfy the\n identity above.\n\u003c/p\u003e",
          "module": "Math.Sym",
          "name": "size",
          "package": "sym",
          "signature": "a -\u003e Int",
          "source": "src/Math-Sym.html#size",
          "type": "method"
        },
        "index": {
          "description": "The size of permutation The default implementation derived from size size st This is not circular definition as size on Perm is implemented independently If the implementation of st is slow then it can be worth while to override the standard definiton any implementation should however satisfy the identity above",
          "hierarchy": "Math Sym",
          "module": "Math.Sym",
          "name": "size",
          "normalized": "a-\u003eInt",
          "package": "sym",
          "signature": "a-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sym/docs/Math-Sym.html#v:size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe standardization map. If there is an underlying linear\n order on \u003ccode\u003ea\u003c/code\u003e then \u003ccode\u003est\u003c/code\u003e is determined by the unique order\n preserving map from \u003ccode\u003e[0..]\u003c/code\u003e to that order. In any case, the\n standardization map should be equivariant with respect to the\n group action defined below; i.e., it should hold that\n\u003c/p\u003e\u003cpre\u003e st (u `act` v) == u `act` st v\n\u003c/pre\u003e",
          "module": "Math.Sym",
          "name": "st",
          "package": "sym",
          "signature": "a -\u003e Perm",
          "source": "src/Math-Sym.html#st",
          "type": "method"
        },
        "index": {
          "description": "The standardization map If there is an underlying linear order on then st is determined by the unique order preserving map from to that order In any case the standardization map should be equivariant with respect to the group action defined below i.e it should hold that st act act st",
          "hierarchy": "Math Sym",
          "module": "Math.Sym",
          "name": "st",
          "normalized": "a-\u003ePerm",
          "package": "sym",
          "signature": "a-\u003ePerm",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sym/docs/Math-Sym.html#v:st"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe inverse of \u003ccode\u003e\u003ca\u003est\u003c/a\u003e\u003c/code\u003e. It should hold that\n\u003c/p\u003e\u003cpre\u003e unst w == w `act` idperm (P.size w)\n\u003c/pre\u003e\u003cp\u003eand this is the default implementation.\n\u003c/p\u003e",
          "module": "Math.Sym",
          "name": "unst",
          "package": "sym",
          "signature": "Perm -\u003e a",
          "source": "src/Math-Sym.html#unst",
          "type": "method"
        },
        "index": {
          "description": "The inverse of st It should hold that unst act idperm P.size and this is the default implementation",
          "hierarchy": "Math Sym",
          "module": "Math.Sym",
          "name": "unst",
          "normalized": "Perm-\u003ea",
          "package": "sym",
          "signature": "Perm-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sym/docs/Math-Sym.html#v:unst"
      }
    }
  ]
]