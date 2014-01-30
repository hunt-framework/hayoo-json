[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixed-list/docs/Data-FixedList.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA fixed length list library.\n\u003c/p\u003e\u003cp\u003eThe length of a list is encoded into its type in a natural way. This allows\nyou to do things like specify that two list parameters have the same type,\nwhich also forces them to have the same length. This can be a handy property.\nIt's not as flexible as the standard haskell list, but the added type safety is\nsometimes worth it.\n\u003c/p\u003e\u003cp\u003eThe entire library is Haskell98 except for the \u003ccode\u003e\u003ca\u003eAppend\u003c/a\u003e\u003c/code\u003e typeclass. (which could\nbe easily removed if needed).\n\u003c/p\u003e\u003cp\u003eMost of your usual list functions (\u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003esum\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003esequence\u003c/a\u003e\u003c/code\u003e, etc..)\nare accessed via the \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eApplicative\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eFoldable\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003eTraversable\u003c/a\u003e\u003c/code\u003e\ntype classes.\n\u003c/p\u003e\u003cp\u003eThe Equivalent of zipWith can be had via the Applicative instance:\n\u003c/p\u003e\u003cpre\u003e zipWith f xs ys = pure f \u003c*\u003e xs \u003c*\u003e ys\n\u003c/pre\u003e\u003cp\u003eAlso, \u003ccode\u003e\u003ca\u003esequenceA\u003c/a\u003e\u003c/code\u003e transposes a FixedList of FixedLists.\n\u003c/p\u003e\u003cp\u003eThe monad instance is also interesting.\nreturn fills the list with the given element (remember that list size is\ndependent on the type) You can think of bind as operating like this:\n\u003c/p\u003e\u003cpre\u003e m \u003e\u003e= k = diagonal $ fmap k m\n\u003c/pre\u003e\u003cp\u003eThis takes the FixedList m and maps k accross it, (which must return a FixedList)\nwhich results in a FixedList of FixedLists the diagonal of which is returned.\nThe actually implementation is more elegant, but works essentialy the same.\n\u003c/p\u003e\u003cp\u003eThis also means that \u003ccode\u003e\u003ca\u003ejoin\u003c/a\u003e\u003c/code\u003e gets the diagonal of a FixedList of FixedLists.\n\u003c/p\u003e\u003cp\u003eYou can construct FixedLists like so:\n\u003c/p\u003e\u003cpre\u003e t1 :: Cons (Cons (Cons Nil)) Integer -- this is the same as FixedList3 Integer\n t1 = 1 :. 3 :. 5 :. Nil\n\n t2 :: FixedList3 Integer  -- type signature needed! and must be correct!\n t2 = fromFoldable' [4, 1, 0]\n\n t3 :: FixedList3 Integer -- type signature needed!\n t3 :: fromFoldable' [1..]\n\n t4 :: FixedList3 (FixedList3 Integer)\n t4 = t1 :. t2 :. t3 :. Nil\n\n -- get the sum of the diagonal of the transpose of t4\n test :: FixedList3 Integer\n test = sum $ join $ sequenceA $ t4\n\u003c/pre\u003e\u003cp\u003eIf you want to restrict a type to be a \u003ccode\u003e\u003ca\u003eFixedList\u003c/a\u003e\u003c/code\u003e, but don't want to specify the\nsize of the list, use the \u003ccode\u003e\u003ca\u003eFixedList\u003c/a\u003e\u003c/code\u003e typeclass:\n\u003c/p\u003e\u003cpre\u003e myFunction :: (FixedList f) =\u003e f a -\u003e Float\n\u003c/pre\u003e\u003cp\u003eOn a side note...\nI think that if Haskell supported infinite types my \u003ccode\u003e\u003ca\u003eAppend\u003c/a\u003e\u003c/code\u003e typeclass would\nonly have one parameter and I wouldn't need all those nasty extensions.\n\u003c/p\u003e\u003cp\u003eI think I could also implement direct, typesafe, versions of \u003ccode\u003e\u003ca\u003elast\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003einit\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ereverse\u003c/a\u003e\u003c/code\u003e\nand \u003ccode\u003e\u003ca\u003elength\u003c/a\u003e\u003c/code\u003e that don't depend on \u003ccode\u003e\u003ca\u003eFoldable\u003c/a\u003e\u003c/code\u003e. *sigh*  Maybe Haskell will one day\nsupport such things.\n\u003c/p\u003e\u003cp\u003eThis library is hosted on github (click on the \u003cem\u003eContents\u003c/em\u003e (if you are viewing this\non hackage) link above and you should see the Homepage link) so it should be very\neasy to forked it, patch it, and send patches back to me.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.FixedList",
        "fct-package": "fixed-list",
        "fct-signature": "module",
        "fct-source": "src/Data-FixedList.html",
        "fct-type": "module",
        "title": "FixedList"
      },
      "index": {
        "description": "fixed length list library The length of list is encoded into its type in natural way This allows you to do things like specify that two list parameters have the same type which also forces them to have the same length This can be handy property It not as flexible as the standard haskell list but the added type safety is sometimes worth it The entire library is Haskell98 except for the Append typeclass which could be easily removed if needed Most of your usual list functions foldr fmap sum sequence etc are accessed via the Functor Applicative Foldable and Traversable type classes The Equivalent of zipWith can be had via the Applicative instance zipWith xs ys pure xs ys Also sequenceA transposes FixedList of FixedLists The monad instance is also interesting return fills the list with the given element remember that list size is dependent on the type You can think of bind as operating like this diagonal fmap This takes the FixedList and maps accross it which must return FixedList which results in FixedList of FixedLists the diagonal of which is returned The actually implementation is more elegant but works essentialy the same This also means that join gets the diagonal of FixedList of FixedLists You can construct FixedLists like so t1 Cons Cons Cons Nil Integer this is the same as FixedList3 Integer t1 Nil t2 FixedList3 Integer type signature needed and must be correct t2 fromFoldable t3 FixedList3 Integer type signature needed t3 fromFoldable t4 FixedList3 FixedList3 Integer t4 t1 t2 t3 Nil get the sum of the diagonal of the transpose of t4 test FixedList3 Integer test sum join sequenceA t4 If you want to restrict type to be FixedList but don want to specify the size of the list use the FixedList typeclass myFunction FixedList Float On side note think that if Haskell supported infinite types my Append typeclass would only have one parameter and wouldn need all those nasty extensions think could also implement direct typesafe versions of last init reverse and length that don depend on Foldable sigh Maybe Haskell will one day support such things This library is hosted on github click on the Contents if you are viewing this on hackage link above and you should see the Homepage link so it should be very easy to forked it patch it and send patches back to me",
        "hierarchy": "Data FixedList",
        "module": "Data.FixedList",
        "name": "FixedList",
        "normalized": "",
        "package": "fixed-list",
        "partial": "Fixed List",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixed-list/docs/Data-FixedList.html#t:Append",
      "description": {
        "fct-module": "Data.FixedList",
        "fct-package": "fixed-list",
        "fct-signature": "class",
        "fct-source": "src/Data-FixedList.html#Append",
        "fct-type": "class",
        "title": "Append"
      },
      "index": {
        "description": "",
        "hierarchy": "Data FixedList",
        "module": "Data.FixedList",
        "name": "Append",
        "normalized": "",
        "package": "fixed-list",
        "partial": "Append",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixed-list/docs/Data-FixedList.html#t:Cons",
      "description": {
        "fct-module": "Data.FixedList",
        "fct-package": "fixed-list",
        "fct-signature": "data",
        "fct-source": "src/Data-FixedList.html#Cons",
        "fct-type": "data",
        "title": "Cons"
      },
      "index": {
        "description": "",
        "hierarchy": "Data FixedList",
        "module": "Data.FixedList",
        "name": "Cons",
        "normalized": "",
        "package": "fixed-list",
        "partial": "Cons",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixed-list/docs/Data-FixedList.html#t:FixedList",
      "description": {
        "fct-descr": "\u003cp\u003eJust a restrictive typeclass. It makes sure \u003ccode\u003e\u003ca\u003e:.\u003c/a\u003e\u003c/code\u003e only takes FixedLists as it's second parameter\n  and makes sure the use of fromFoldable's in reverse, and init is safe.\n\u003c/p\u003e",
        "fct-module": "Data.FixedList",
        "fct-package": "fixed-list",
        "fct-signature": "class",
        "fct-source": "src/Data-FixedList.html#FixedList",
        "fct-type": "class",
        "title": "FixedList"
      },
      "index": {
        "description": "Just restrictive typeclass It makes sure only takes FixedLists as it second parameter and makes sure the use of fromFoldable in reverse and init is safe",
        "hierarchy": "Data FixedList",
        "module": "Data.FixedList",
        "name": "FixedList",
        "normalized": "",
        "package": "fixed-list",
        "partial": "Fixed List",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixed-list/docs/Data-FixedList.html#t:FixedList0",
      "description": {
        "fct-module": "Data.FixedList",
        "fct-package": "fixed-list",
        "fct-signature": "type",
        "fct-source": "src/Data-FixedList.html#FixedList0",
        "fct-type": "type",
        "title": "FixedList0"
      },
      "index": {
        "description": "",
        "hierarchy": "Data FixedList",
        "module": "Data.FixedList",
        "name": "FixedList0",
        "normalized": "",
        "package": "fixed-list",
        "partial": "Fixed List",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixed-list/docs/Data-FixedList.html#t:FixedList1",
      "description": {
        "fct-module": "Data.FixedList",
        "fct-package": "fixed-list",
        "fct-signature": "type",
        "fct-source": "src/Data-FixedList.html#FixedList1",
        "fct-type": "type",
        "title": "FixedList1"
      },
      "index": {
        "description": "",
        "hierarchy": "Data FixedList",
        "module": "Data.FixedList",
        "name": "FixedList1",
        "normalized": "",
        "package": "fixed-list",
        "partial": "Fixed List",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixed-list/docs/Data-FixedList.html#t:FixedList10",
      "description": {
        "fct-module": "Data.FixedList",
        "fct-package": "fixed-list",
        "fct-signature": "type",
        "fct-source": "src/Data-FixedList.html#FixedList10",
        "fct-type": "type",
        "title": "FixedList10"
      },
      "index": {
        "description": "",
        "hierarchy": "Data FixedList",
        "module": "Data.FixedList",
        "name": "FixedList10",
        "normalized": "",
        "package": "fixed-list",
        "partial": "Fixed List",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixed-list/docs/Data-FixedList.html#t:FixedList11",
      "description": {
        "fct-module": "Data.FixedList",
        "fct-package": "fixed-list",
        "fct-signature": "type",
        "fct-source": "src/Data-FixedList.html#FixedList11",
        "fct-type": "type",
        "title": "FixedList11"
      },
      "index": {
        "description": "",
        "hierarchy": "Data FixedList",
        "module": "Data.FixedList",
        "name": "FixedList11",
        "normalized": "",
        "package": "fixed-list",
        "partial": "Fixed List",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixed-list/docs/Data-FixedList.html#t:FixedList12",
      "description": {
        "fct-module": "Data.FixedList",
        "fct-package": "fixed-list",
        "fct-signature": "type",
        "fct-source": "src/Data-FixedList.html#FixedList12",
        "fct-type": "type",
        "title": "FixedList12"
      },
      "index": {
        "description": "",
        "hierarchy": "Data FixedList",
        "module": "Data.FixedList",
        "name": "FixedList12",
        "normalized": "",
        "package": "fixed-list",
        "partial": "Fixed List",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixed-list/docs/Data-FixedList.html#t:FixedList13",
      "description": {
        "fct-module": "Data.FixedList",
        "fct-package": "fixed-list",
        "fct-signature": "type",
        "fct-source": "src/Data-FixedList.html#FixedList13",
        "fct-type": "type",
        "title": "FixedList13"
      },
      "index": {
        "description": "",
        "hierarchy": "Data FixedList",
        "module": "Data.FixedList",
        "name": "FixedList13",
        "normalized": "",
        "package": "fixed-list",
        "partial": "Fixed List",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixed-list/docs/Data-FixedList.html#t:FixedList14",
      "description": {
        "fct-module": "Data.FixedList",
        "fct-package": "fixed-list",
        "fct-signature": "type",
        "fct-source": "src/Data-FixedList.html#FixedList14",
        "fct-type": "type",
        "title": "FixedList14"
      },
      "index": {
        "description": "",
        "hierarchy": "Data FixedList",
        "module": "Data.FixedList",
        "name": "FixedList14",
        "normalized": "",
        "package": "fixed-list",
        "partial": "Fixed List",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixed-list/docs/Data-FixedList.html#t:FixedList15",
      "description": {
        "fct-module": "Data.FixedList",
        "fct-package": "fixed-list",
        "fct-signature": "type",
        "fct-source": "src/Data-FixedList.html#FixedList15",
        "fct-type": "type",
        "title": "FixedList15"
      },
      "index": {
        "description": "",
        "hierarchy": "Data FixedList",
        "module": "Data.FixedList",
        "name": "FixedList15",
        "normalized": "",
        "package": "fixed-list",
        "partial": "Fixed List",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixed-list/docs/Data-FixedList.html#t:FixedList16",
      "description": {
        "fct-module": "Data.FixedList",
        "fct-package": "fixed-list",
        "fct-signature": "type",
        "fct-source": "src/Data-FixedList.html#FixedList16",
        "fct-type": "type",
        "title": "FixedList16"
      },
      "index": {
        "description": "",
        "hierarchy": "Data FixedList",
        "module": "Data.FixedList",
        "name": "FixedList16",
        "normalized": "",
        "package": "fixed-list",
        "partial": "Fixed List",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixed-list/docs/Data-FixedList.html#t:FixedList17",
      "description": {
        "fct-module": "Data.FixedList",
        "fct-package": "fixed-list",
        "fct-signature": "type",
        "fct-source": "src/Data-FixedList.html#FixedList17",
        "fct-type": "type",
        "title": "FixedList17"
      },
      "index": {
        "description": "",
        "hierarchy": "Data FixedList",
        "module": "Data.FixedList",
        "name": "FixedList17",
        "normalized": "",
        "package": "fixed-list",
        "partial": "Fixed List",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixed-list/docs/Data-FixedList.html#t:FixedList18",
      "description": {
        "fct-module": "Data.FixedList",
        "fct-package": "fixed-list",
        "fct-signature": "type",
        "fct-source": "src/Data-FixedList.html#FixedList18",
        "fct-type": "type",
        "title": "FixedList18"
      },
      "index": {
        "description": "",
        "hierarchy": "Data FixedList",
        "module": "Data.FixedList",
        "name": "FixedList18",
        "normalized": "",
        "package": "fixed-list",
        "partial": "Fixed List",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixed-list/docs/Data-FixedList.html#t:FixedList19",
      "description": {
        "fct-module": "Data.FixedList",
        "fct-package": "fixed-list",
        "fct-signature": "type",
        "fct-source": "src/Data-FixedList.html#FixedList19",
        "fct-type": "type",
        "title": "FixedList19"
      },
      "index": {
        "description": "",
        "hierarchy": "Data FixedList",
        "module": "Data.FixedList",
        "name": "FixedList19",
        "normalized": "",
        "package": "fixed-list",
        "partial": "Fixed List",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixed-list/docs/Data-FixedList.html#t:FixedList2",
      "description": {
        "fct-module": "Data.FixedList",
        "fct-package": "fixed-list",
        "fct-signature": "type",
        "fct-source": "src/Data-FixedList.html#FixedList2",
        "fct-type": "type",
        "title": "FixedList2"
      },
      "index": {
        "description": "",
        "hierarchy": "Data FixedList",
        "module": "Data.FixedList",
        "name": "FixedList2",
        "normalized": "",
        "package": "fixed-list",
        "partial": "Fixed List",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixed-list/docs/Data-FixedList.html#t:FixedList20",
      "description": {
        "fct-module": "Data.FixedList",
        "fct-package": "fixed-list",
        "fct-signature": "type",
        "fct-source": "src/Data-FixedList.html#FixedList20",
        "fct-type": "type",
        "title": "FixedList20"
      },
      "index": {
        "description": "",
        "hierarchy": "Data FixedList",
        "module": "Data.FixedList",
        "name": "FixedList20",
        "normalized": "",
        "package": "fixed-list",
        "partial": "Fixed List",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixed-list/docs/Data-FixedList.html#t:FixedList21",
      "description": {
        "fct-module": "Data.FixedList",
        "fct-package": "fixed-list",
        "fct-signature": "type",
        "fct-source": "src/Data-FixedList.html#FixedList21",
        "fct-type": "type",
        "title": "FixedList21"
      },
      "index": {
        "description": "",
        "hierarchy": "Data FixedList",
        "module": "Data.FixedList",
        "name": "FixedList21",
        "normalized": "",
        "package": "fixed-list",
        "partial": "Fixed List",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixed-list/docs/Data-FixedList.html#t:FixedList22",
      "description": {
        "fct-module": "Data.FixedList",
        "fct-package": "fixed-list",
        "fct-signature": "type",
        "fct-source": "src/Data-FixedList.html#FixedList22",
        "fct-type": "type",
        "title": "FixedList22"
      },
      "index": {
        "description": "",
        "hierarchy": "Data FixedList",
        "module": "Data.FixedList",
        "name": "FixedList22",
        "normalized": "",
        "package": "fixed-list",
        "partial": "Fixed List",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixed-list/docs/Data-FixedList.html#t:FixedList23",
      "description": {
        "fct-module": "Data.FixedList",
        "fct-package": "fixed-list",
        "fct-signature": "type",
        "fct-source": "src/Data-FixedList.html#FixedList23",
        "fct-type": "type",
        "title": "FixedList23"
      },
      "index": {
        "description": "",
        "hierarchy": "Data FixedList",
        "module": "Data.FixedList",
        "name": "FixedList23",
        "normalized": "",
        "package": "fixed-list",
        "partial": "Fixed List",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixed-list/docs/Data-FixedList.html#t:FixedList24",
      "description": {
        "fct-module": "Data.FixedList",
        "fct-package": "fixed-list",
        "fct-signature": "type",
        "fct-source": "src/Data-FixedList.html#FixedList24",
        "fct-type": "type",
        "title": "FixedList24"
      },
      "index": {
        "description": "",
        "hierarchy": "Data FixedList",
        "module": "Data.FixedList",
        "name": "FixedList24",
        "normalized": "",
        "package": "fixed-list",
        "partial": "Fixed List",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixed-list/docs/Data-FixedList.html#t:FixedList25",
      "description": {
        "fct-module": "Data.FixedList",
        "fct-package": "fixed-list",
        "fct-signature": "type",
        "fct-source": "src/Data-FixedList.html#FixedList25",
        "fct-type": "type",
        "title": "FixedList25"
      },
      "index": {
        "description": "",
        "hierarchy": "Data FixedList",
        "module": "Data.FixedList",
        "name": "FixedList25",
        "normalized": "",
        "package": "fixed-list",
        "partial": "Fixed List",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixed-list/docs/Data-FixedList.html#t:FixedList26",
      "description": {
        "fct-module": "Data.FixedList",
        "fct-package": "fixed-list",
        "fct-signature": "type",
        "fct-source": "src/Data-FixedList.html#FixedList26",
        "fct-type": "type",
        "title": "FixedList26"
      },
      "index": {
        "description": "",
        "hierarchy": "Data FixedList",
        "module": "Data.FixedList",
        "name": "FixedList26",
        "normalized": "",
        "package": "fixed-list",
        "partial": "Fixed List",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixed-list/docs/Data-FixedList.html#t:FixedList27",
      "description": {
        "fct-module": "Data.FixedList",
        "fct-package": "fixed-list",
        "fct-signature": "type",
        "fct-source": "src/Data-FixedList.html#FixedList27",
        "fct-type": "type",
        "title": "FixedList27"
      },
      "index": {
        "description": "",
        "hierarchy": "Data FixedList",
        "module": "Data.FixedList",
        "name": "FixedList27",
        "normalized": "",
        "package": "fixed-list",
        "partial": "Fixed List",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixed-list/docs/Data-FixedList.html#t:FixedList28",
      "description": {
        "fct-module": "Data.FixedList",
        "fct-package": "fixed-list",
        "fct-signature": "type",
        "fct-source": "src/Data-FixedList.html#FixedList28",
        "fct-type": "type",
        "title": "FixedList28"
      },
      "index": {
        "description": "",
        "hierarchy": "Data FixedList",
        "module": "Data.FixedList",
        "name": "FixedList28",
        "normalized": "",
        "package": "fixed-list",
        "partial": "Fixed List",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixed-list/docs/Data-FixedList.html#t:FixedList29",
      "description": {
        "fct-module": "Data.FixedList",
        "fct-package": "fixed-list",
        "fct-signature": "type",
        "fct-source": "src/Data-FixedList.html#FixedList29",
        "fct-type": "type",
        "title": "FixedList29"
      },
      "index": {
        "description": "",
        "hierarchy": "Data FixedList",
        "module": "Data.FixedList",
        "name": "FixedList29",
        "normalized": "",
        "package": "fixed-list",
        "partial": "Fixed List",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixed-list/docs/Data-FixedList.html#t:FixedList3",
      "description": {
        "fct-module": "Data.FixedList",
        "fct-package": "fixed-list",
        "fct-signature": "type",
        "fct-source": "src/Data-FixedList.html#FixedList3",
        "fct-type": "type",
        "title": "FixedList3"
      },
      "index": {
        "description": "",
        "hierarchy": "Data FixedList",
        "module": "Data.FixedList",
        "name": "FixedList3",
        "normalized": "",
        "package": "fixed-list",
        "partial": "Fixed List",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixed-list/docs/Data-FixedList.html#t:FixedList30",
      "description": {
        "fct-module": "Data.FixedList",
        "fct-package": "fixed-list",
        "fct-signature": "type",
        "fct-source": "src/Data-FixedList.html#FixedList30",
        "fct-type": "type",
        "title": "FixedList30"
      },
      "index": {
        "description": "",
        "hierarchy": "Data FixedList",
        "module": "Data.FixedList",
        "name": "FixedList30",
        "normalized": "",
        "package": "fixed-list",
        "partial": "Fixed List",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixed-list/docs/Data-FixedList.html#t:FixedList31",
      "description": {
        "fct-module": "Data.FixedList",
        "fct-package": "fixed-list",
        "fct-signature": "type",
        "fct-source": "src/Data-FixedList.html#FixedList31",
        "fct-type": "type",
        "title": "FixedList31"
      },
      "index": {
        "description": "",
        "hierarchy": "Data FixedList",
        "module": "Data.FixedList",
        "name": "FixedList31",
        "normalized": "",
        "package": "fixed-list",
        "partial": "Fixed List",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixed-list/docs/Data-FixedList.html#t:FixedList32",
      "description": {
        "fct-module": "Data.FixedList",
        "fct-package": "fixed-list",
        "fct-signature": "type",
        "fct-source": "src/Data-FixedList.html#FixedList32",
        "fct-type": "type",
        "title": "FixedList32"
      },
      "index": {
        "description": "",
        "hierarchy": "Data FixedList",
        "module": "Data.FixedList",
        "name": "FixedList32",
        "normalized": "",
        "package": "fixed-list",
        "partial": "Fixed List",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixed-list/docs/Data-FixedList.html#t:FixedList4",
      "description": {
        "fct-module": "Data.FixedList",
        "fct-package": "fixed-list",
        "fct-signature": "type",
        "fct-source": "src/Data-FixedList.html#FixedList4",
        "fct-type": "type",
        "title": "FixedList4"
      },
      "index": {
        "description": "",
        "hierarchy": "Data FixedList",
        "module": "Data.FixedList",
        "name": "FixedList4",
        "normalized": "",
        "package": "fixed-list",
        "partial": "Fixed List",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixed-list/docs/Data-FixedList.html#t:FixedList5",
      "description": {
        "fct-module": "Data.FixedList",
        "fct-package": "fixed-list",
        "fct-signature": "type",
        "fct-source": "src/Data-FixedList.html#FixedList5",
        "fct-type": "type",
        "title": "FixedList5"
      },
      "index": {
        "description": "",
        "hierarchy": "Data FixedList",
        "module": "Data.FixedList",
        "name": "FixedList5",
        "normalized": "",
        "package": "fixed-list",
        "partial": "Fixed List",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixed-list/docs/Data-FixedList.html#t:FixedList6",
      "description": {
        "fct-module": "Data.FixedList",
        "fct-package": "fixed-list",
        "fct-signature": "type",
        "fct-source": "src/Data-FixedList.html#FixedList6",
        "fct-type": "type",
        "title": "FixedList6"
      },
      "index": {
        "description": "",
        "hierarchy": "Data FixedList",
        "module": "Data.FixedList",
        "name": "FixedList6",
        "normalized": "",
        "package": "fixed-list",
        "partial": "Fixed List",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixed-list/docs/Data-FixedList.html#t:FixedList7",
      "description": {
        "fct-module": "Data.FixedList",
        "fct-package": "fixed-list",
        "fct-signature": "type",
        "fct-source": "src/Data-FixedList.html#FixedList7",
        "fct-type": "type",
        "title": "FixedList7"
      },
      "index": {
        "description": "",
        "hierarchy": "Data FixedList",
        "module": "Data.FixedList",
        "name": "FixedList7",
        "normalized": "",
        "package": "fixed-list",
        "partial": "Fixed List",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixed-list/docs/Data-FixedList.html#t:FixedList8",
      "description": {
        "fct-module": "Data.FixedList",
        "fct-package": "fixed-list",
        "fct-signature": "type",
        "fct-source": "src/Data-FixedList.html#FixedList8",
        "fct-type": "type",
        "title": "FixedList8"
      },
      "index": {
        "description": "",
        "hierarchy": "Data FixedList",
        "module": "Data.FixedList",
        "name": "FixedList8",
        "normalized": "",
        "package": "fixed-list",
        "partial": "Fixed List",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixed-list/docs/Data-FixedList.html#t:FixedList9",
      "description": {
        "fct-module": "Data.FixedList",
        "fct-package": "fixed-list",
        "fct-signature": "type",
        "fct-source": "src/Data-FixedList.html#FixedList9",
        "fct-type": "type",
        "title": "FixedList9"
      },
      "index": {
        "description": "",
        "hierarchy": "Data FixedList",
        "module": "Data.FixedList",
        "name": "FixedList9",
        "normalized": "",
        "package": "fixed-list",
        "partial": "Fixed List",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixed-list/docs/Data-FixedList.html#t:Nil",
      "description": {
        "fct-module": "Data.FixedList",
        "fct-package": "fixed-list",
        "fct-signature": "data",
        "fct-source": "src/Data-FixedList.html#Nil",
        "fct-type": "data",
        "title": "Nil"
      },
      "index": {
        "description": "",
        "hierarchy": "Data FixedList",
        "module": "Data.FixedList",
        "name": "Nil",
        "normalized": "",
        "package": "fixed-list",
        "partial": "Nil",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixed-list/docs/Data-FixedList.html#v::.",
      "description": {
        "fct-module": "Data.FixedList",
        "fct-package": "fixed-list",
        "fct-signature": ":.",
        "fct-source": "src/Data-FixedList.html#Cons",
        "fct-type": "function",
        "title": ":."
      },
      "index": {
        "description": "",
        "hierarchy": "Data FixedList",
        "module": "Data.FixedList",
        "name": ":.",
        "normalized": "",
        "package": "fixed-list",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixed-list/docs/Data-FixedList.html#v:Nil",
      "description": {
        "fct-module": "Data.FixedList",
        "fct-package": "fixed-list",
        "fct-signature": "Nil",
        "fct-source": "src/Data-FixedList.html#Nil",
        "fct-type": "function",
        "title": "Nil"
      },
      "index": {
        "description": "",
        "hierarchy": "Data FixedList",
        "module": "Data.FixedList",
        "name": "Nil",
        "normalized": "",
        "package": "fixed-list",
        "partial": "Nil",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixed-list/docs/Data-FixedList.html#v:append",
      "description": {
        "fct-module": "Data.FixedList",
        "fct-package": "fixed-list",
        "fct-signature": "f a -\u003e g a -\u003e h a",
        "fct-source": "src/Data-FixedList.html#append",
        "fct-type": "method",
        "title": "append"
      },
      "index": {
        "description": "",
        "hierarchy": "Data FixedList",
        "module": "Data.FixedList",
        "name": "append",
        "normalized": "a b-\u003ec b-\u003ed b",
        "package": "fixed-list",
        "partial": "",
        "signature": "f a-\u003eg a-\u003eh a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixed-list/docs/Data-FixedList.html#v:fromFoldable",
      "description": {
        "fct-descr": "\u003cp\u003eConverts any Foldable to any Applicative Traversable.\n   However, this will only do what you want if \u003ccode\u003e\u003ca\u003epure\u003c/a\u003e\u003c/code\u003e gives you the\n   shape of structure you are expecting.\n\u003c/p\u003e",
        "fct-module": "Data.FixedList",
        "fct-package": "fixed-list",
        "fct-signature": "f a -\u003e Maybe (g a)",
        "fct-source": "src/Data-FixedList.html#fromFoldable",
        "fct-type": "function",
        "title": "fromFoldable"
      },
      "index": {
        "description": "Converts any Foldable to any Applicative Traversable However this will only do what you want if pure gives you the shape of structure you are expecting",
        "hierarchy": "Data FixedList",
        "module": "Data.FixedList",
        "name": "fromFoldable",
        "normalized": "a b-\u003eMaybe(c b)",
        "package": "fixed-list",
        "partial": "Foldable",
        "signature": "f a-\u003eMaybe(g a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixed-list/docs/Data-FixedList.html#v:fromFoldable-39-",
      "description": {
        "fct-descr": "\u003cp\u003eThis can crash if the foldable is smaller than the new structure.\n\u003c/p\u003e",
        "fct-module": "Data.FixedList",
        "fct-package": "fixed-list",
        "fct-signature": "f a -\u003e g a",
        "fct-source": "src/Data-FixedList.html#fromFoldable%27",
        "fct-type": "function",
        "title": "fromFoldable'"
      },
      "index": {
        "description": "This can crash if the foldable is smaller than the new structure",
        "hierarchy": "Data FixedList",
        "module": "Data.FixedList",
        "name": "fromFoldable'",
        "normalized": "a b-\u003ec b",
        "package": "fixed-list",
        "partial": "Foldable'",
        "signature": "f a-\u003eg a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixed-list/docs/Data-FixedList.html#v:head",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.FixedList",
        "fct-package": "fixed-list",
        "fct-signature": "a",
        "fct-source": "src/Data-FixedList.html#Cons",
        "fct-type": "function",
        "title": "head"
      },
      "index": {
        "description": "",
        "hierarchy": "Data FixedList",
        "module": "Data.FixedList",
        "name": "head",
        "normalized": "",
        "package": "fixed-list",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixed-list/docs/Data-FixedList.html#v:init",
      "description": {
        "fct-descr": "\u003cp\u003eReturns all but the last element of the list\n\u003c/p\u003e",
        "fct-module": "Data.FixedList",
        "fct-package": "fixed-list",
        "fct-signature": "Cons f a -\u003e f a",
        "fct-source": "src/Data-FixedList.html#init",
        "fct-type": "function",
        "title": "init"
      },
      "index": {
        "description": "Returns all but the last element of the list",
        "hierarchy": "Data FixedList",
        "module": "Data.FixedList",
        "name": "init",
        "normalized": "Cons a b-\u003ea b",
        "package": "fixed-list",
        "partial": "",
        "signature": "Cons f a-\u003ef a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixed-list/docs/Data-FixedList.html#v:last",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the last element of the list\n\u003c/p\u003e",
        "fct-module": "Data.FixedList",
        "fct-package": "fixed-list",
        "fct-signature": "t a -\u003e a",
        "fct-source": "src/Data-FixedList.html#last",
        "fct-type": "function",
        "title": "last"
      },
      "index": {
        "description": "Returns the last element of the list",
        "hierarchy": "Data FixedList",
        "module": "Data.FixedList",
        "name": "last",
        "normalized": "a b-\u003eb",
        "package": "fixed-list",
        "partial": "",
        "signature": "t a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixed-list/docs/Data-FixedList.html#v:length",
      "description": {
        "fct-module": "Data.FixedList",
        "fct-package": "fixed-list",
        "fct-signature": "t a -\u003e Int",
        "fct-source": "src/Data-FixedList.html#length",
        "fct-type": "function",
        "title": "length"
      },
      "index": {
        "description": "",
        "hierarchy": "Data FixedList",
        "module": "Data.FixedList",
        "name": "length",
        "normalized": "a b-\u003eInt",
        "package": "fixed-list",
        "partial": "",
        "signature": "t a-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixed-list/docs/Data-FixedList.html#v:reverse",
      "description": {
        "fct-module": "Data.FixedList",
        "fct-package": "fixed-list",
        "fct-signature": "t a -\u003e t a",
        "fct-source": "src/Data-FixedList.html#reverse",
        "fct-type": "function",
        "title": "reverse"
      },
      "index": {
        "description": "",
        "hierarchy": "Data FixedList",
        "module": "Data.FixedList",
        "name": "reverse",
        "normalized": "a b-\u003ea b",
        "package": "fixed-list",
        "partial": "",
        "signature": "t a-\u003et a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixed-list/docs/Data-FixedList.html#v:subLists",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a list, returns a list of copies of that list but each with an element removed.\n   for example:\n\u003c/p\u003e\u003cpre\u003e subLists (1:. 2:. 3:. Nil)\n\u003c/pre\u003e\u003cp\u003egives:\n\u003c/p\u003e\u003cpre\u003e |[|[2,3]|,|[1,3]|,|[1,2]|]|\n\u003c/pre\u003e",
        "fct-module": "Data.FixedList",
        "fct-package": "fixed-list",
        "fct-signature": "Cons f a -\u003e Cons f (f a)",
        "fct-source": "src/Data-FixedList.html#subLists",
        "fct-type": "function",
        "title": "subLists"
      },
      "index": {
        "description": "Given list returns list of copies of that list but each with an element removed for example subLists Nil gives",
        "hierarchy": "Data FixedList",
        "module": "Data.FixedList",
        "name": "subLists",
        "normalized": "Cons a b-\u003eCons a(a b)",
        "package": "fixed-list",
        "partial": "Lists",
        "signature": "Cons f a-\u003eCons f(f a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixed-list/docs/Data-FixedList.html#v:tail",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.FixedList",
        "fct-package": "fixed-list",
        "fct-signature": "f a",
        "fct-source": "src/Data-FixedList.html#Cons",
        "fct-type": "function",
        "title": "tail"
      },
      "index": {
        "description": "",
        "hierarchy": "Data FixedList",
        "module": "Data.FixedList",
        "name": "tail",
        "normalized": "",
        "package": "fixed-list",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fixed-list/docs/Data-FixedList.html#v:unit",
      "description": {
        "fct-descr": "\u003cp\u003eConstructs a FixedList containing a single element.\n   Normally I would just use pure or return for this,\n   but you'd have to specify a type signature in that case.\n\u003c/p\u003e",
        "fct-module": "Data.FixedList",
        "fct-package": "fixed-list",
        "fct-signature": "a -\u003e Cons Nil a",
        "fct-source": "src/Data-FixedList.html#unit",
        "fct-type": "function",
        "title": "unit"
      },
      "index": {
        "description": "Constructs FixedList containing single element Normally would just use pure or return for this but you have to specify type signature in that case",
        "hierarchy": "Data FixedList",
        "module": "Data.FixedList",
        "name": "unit",
        "normalized": "a-\u003eCons Nil a",
        "package": "fixed-list",
        "partial": "",
        "signature": "a-\u003eCons Nil a"
      }
    }
  }
]