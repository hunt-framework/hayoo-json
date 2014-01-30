[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/union-find/docs/Control-Monad-Trans-UnionFind.html#",
      "description": {
        "fct-module": "Control.Monad.Trans.UnionFind",
        "fct-package": "union-find",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-Trans-UnionFind.html",
        "fct-type": "module",
        "title": "UnionFind"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Trans UnionFind",
        "module": "Control.Monad.Trans.UnionFind",
        "name": "UnionFind",
        "normalized": "",
        "package": "union-find",
        "partial": "Union Find",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/union-find/docs/Control-Monad-Trans-UnionFind.html#t:Point",
      "description": {
        "fct-module": "Control.Monad.Trans.UnionFind",
        "fct-package": "union-find",
        "fct-signature": "data",
        "fct-source": "src/Data-UnionFind-IntMap.html#Point",
        "fct-type": "data",
        "title": "Point"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Trans UnionFind",
        "module": "Control.Monad.Trans.UnionFind",
        "name": "Point",
        "normalized": "",
        "package": "union-find",
        "partial": "Point",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/union-find/docs/Control-Monad-Trans-UnionFind.html#t:UnionFindT",
      "description": {
        "fct-descr": "\u003cp\u003eA monad transformer that adds union find operations.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003ep\u003c/code\u003e parameter is the type of points.  Uses the\n \u003ca\u003eData.UnionFind.IntMap\u003c/a\u003e as the underlying union-find\n implementation.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.UnionFind",
        "fct-package": "union-find",
        "fct-signature": "data",
        "fct-source": "src/Control-Monad-Trans-UnionFind.html#UnionFindT",
        "fct-type": "data",
        "title": "UnionFindT"
      },
      "index": {
        "description": "monad transformer that adds union find operations The parameter is the type of points Uses the Data.UnionFind.IntMap as the underlying union-find implementation",
        "hierarchy": "Control Monad Trans UnionFind",
        "module": "Control.Monad.Trans.UnionFind",
        "name": "UnionFindT",
        "normalized": "",
        "package": "union-find",
        "partial": "Union Find",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/union-find/docs/Control-Monad-Trans-UnionFind.html#v:descriptor",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the descriptor of the \n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.UnionFind",
        "fct-package": "union-find",
        "fct-signature": "Point p -\u003e UnionFindT p m p",
        "fct-source": "src/Control-Monad-Trans-UnionFind.html#descriptor",
        "fct-type": "function",
        "title": "descriptor"
      },
      "index": {
        "description": "Return the descriptor of the",
        "hierarchy": "Control Monad Trans UnionFind",
        "module": "Control.Monad.Trans.UnionFind",
        "name": "descriptor",
        "normalized": "Point a-\u003eUnionFindT a b a",
        "package": "union-find",
        "partial": "",
        "signature": "Point p-\u003eUnionFindT p m p"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/union-find/docs/Control-Monad-Trans-UnionFind.html#v:equivalent",
      "description": {
        "fct-descr": "\u003cp\u003eTest if the two elements are in the same equivalence class.\n\u003c/p\u003e\u003cpre\u003e\n liftA2 (==) (repr x) (repr y)\n\u003c/pre\u003e",
        "fct-module": "Control.Monad.Trans.UnionFind",
        "fct-package": "union-find",
        "fct-signature": "Point p -\u003e Point p -\u003e UnionFindT p m Bool",
        "fct-source": "src/Control-Monad-Trans-UnionFind.html#equivalent",
        "fct-type": "function",
        "title": "equivalent"
      },
      "index": {
        "description": "Test if the two elements are in the same equivalence class liftA2 repr repr",
        "hierarchy": "Control Monad Trans UnionFind",
        "module": "Control.Monad.Trans.UnionFind",
        "name": "equivalent",
        "normalized": "Point a-\u003ePoint a-\u003eUnionFindT a b Bool",
        "package": "union-find",
        "partial": "",
        "signature": "Point p-\u003ePoint p-\u003eUnionFindT p m Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/union-find/docs/Control-Monad-Trans-UnionFind.html#v:fresh",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new point with the given descriptor.  The returned is\n only equivalent to itself.\n\u003c/p\u003e\u003cp\u003eNote that a \u003ccode\u003e\u003ca\u003ePoint\u003c/a\u003e\u003c/code\u003e has its own identity.  That is, if two points\n are equivalent then their descriptors are equal, but not vice\n versa.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.UnionFind",
        "fct-package": "union-find",
        "fct-signature": "p -\u003e UnionFindT p m (Point p)",
        "fct-source": "src/Control-Monad-Trans-UnionFind.html#fresh",
        "fct-type": "function",
        "title": "fresh"
      },
      "index": {
        "description": "Create new point with the given descriptor The returned is only equivalent to itself Note that Point has its own identity That is if two points are equivalent then their descriptors are equal but not vice versa",
        "hierarchy": "Control Monad Trans UnionFind",
        "module": "Control.Monad.Trans.UnionFind",
        "name": "fresh",
        "normalized": "a-\u003eUnionFindT a b(Point a)",
        "package": "union-find",
        "partial": "",
        "signature": "p-\u003eUnionFindT p m(Point p)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/union-find/docs/Control-Monad-Trans-UnionFind.html#v:repr",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. \u003ccode\u003erepr point\u003c/code\u003e returns the representative point of\n \u003ccode\u003epoint\u003c/code\u003e's equivalence class.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.UnionFind",
        "fct-package": "union-find",
        "fct-signature": "Point p -\u003e UnionFindT p m (Point p)",
        "fct-source": "src/Control-Monad-Trans-UnionFind.html#repr",
        "fct-type": "function",
        "title": "repr"
      },
      "index": {
        "description": "repr point returns the representative point of point equivalence class",
        "hierarchy": "Control Monad Trans UnionFind",
        "module": "Control.Monad.Trans.UnionFind",
        "name": "repr",
        "normalized": "Point a-\u003eUnionFindT a b(Point a)",
        "package": "union-find",
        "partial": "",
        "signature": "Point p-\u003eUnionFindT p m(Point p)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/union-find/docs/Control-Monad-Trans-UnionFind.html#v:runUnionFind",
      "description": {
        "fct-module": "Control.Monad.Trans.UnionFind",
        "fct-package": "union-find",
        "fct-signature": "UnionFindT p m a -\u003e m a",
        "fct-source": "src/Control-Monad-Trans-UnionFind.html#runUnionFind",
        "fct-type": "function",
        "title": "runUnionFind"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Trans UnionFind",
        "module": "Control.Monad.Trans.UnionFind",
        "name": "runUnionFind",
        "normalized": "UnionFindT a b c-\u003eb c",
        "package": "union-find",
        "partial": "Union Find",
        "signature": "UnionFindT p m a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/union-find/docs/Control-Monad-Trans-UnionFind.html#v:union",
      "description": {
        "fct-descr": "\u003cp\u003eJoin the equivalence classes of the points.  The resulting\n equivalence class will get the descriptor of the second argument.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.UnionFind",
        "fct-package": "union-find",
        "fct-signature": "Point p -\u003e Point p -\u003e UnionFindT p m ()",
        "fct-source": "src/Control-Monad-Trans-UnionFind.html#union",
        "fct-type": "function",
        "title": "union"
      },
      "index": {
        "description": "Join the equivalence classes of the points The resulting equivalence class will get the descriptor of the second argument",
        "hierarchy": "Control Monad Trans UnionFind",
        "module": "Control.Monad.Trans.UnionFind",
        "name": "union",
        "normalized": "Point a-\u003ePoint a-\u003eUnionFindT a b()",
        "package": "union-find",
        "partial": "",
        "signature": "Point p-\u003ePoint p-\u003eUnionFindT p m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/union-find/docs/Data-UnionFind-IO.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn implementation of Tarjan's UNION-FIND algorithm.  (Robert E\n Tarjan. \"Efficiency of a Good But Not Linear Set Union Algorithm\", JACM\n 22(2), 1975)\n\u003c/p\u003e\u003cp\u003eThe algorithm implements three operations efficiently (all amortised\n \u003ccode\u003eO(1)\u003c/code\u003e):\n\u003c/p\u003e\u003col\u003e\u003cli\u003e Check whether two elements are in the same equivalence class.\n\u003c/li\u003e\u003cli\u003e Create a union of two equivalence classes.\n\u003c/li\u003e\u003cli\u003e Look up the descriptor of the equivalence class.\n\u003c/li\u003e\u003c/ol\u003e\u003cp\u003eThe implementation is based on mutable references.  Each\n equivalence class has exactly one member that serves as its\n representative element.  Every element either is the representative\n element of its equivalence class or points to another element in\n the same equivalence class.  Equivalence testing thus consists of\n following the pointers to the representative elements and then\n comparing these for identity.\n\u003c/p\u003e\u003cp\u003eThe algorithm performs lazy path compression.  That is, whenever we\n walk along a path greater than length 1 we automatically update the\n pointers along the path to directly point to the representative\n element.  Consequently future lookups will be have a path length of\n at most 1.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.UnionFind.IO",
        "fct-package": "union-find",
        "fct-signature": "module",
        "fct-source": "src/Data-UnionFind-IO.html",
        "fct-type": "module",
        "title": "IO"
      },
      "index": {
        "description": "An implementation of Tarjan UNION-FIND algorithm Robert Tarjan Efficiency of Good But Not Linear Set Union Algorithm JACM The algorithm implements three operations efficiently all amortised Check whether two elements are in the same equivalence class Create union of two equivalence classes Look up the descriptor of the equivalence class The implementation is based on mutable references Each equivalence class has exactly one member that serves as its representative element Every element either is the representative element of its equivalence class or points to another element in the same equivalence class Equivalence testing thus consists of following the pointers to the representative elements and then comparing these for identity The algorithm performs lazy path compression That is whenever we walk along path greater than length we automatically update the pointers along the path to directly point to the representative element Consequently future lookups will be have path length of at most",
        "hierarchy": "Data UnionFind IO",
        "module": "Data.UnionFind.IO",
        "name": "IO",
        "normalized": "",
        "package": "union-find",
        "partial": "IO",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/union-find/docs/Data-UnionFind-IO.html#t:Point",
      "description": {
        "fct-descr": "\u003cp\u003eThe abstract type of an element of the sets we work on.  It is\n parameterised over the type of the descriptor.\n\u003c/p\u003e",
        "fct-module": "Data.UnionFind.IO",
        "fct-package": "union-find",
        "fct-signature": "data",
        "fct-source": "src/Data-UnionFind-IO.html#Point",
        "fct-type": "data",
        "title": "Point"
      },
      "index": {
        "description": "The abstract type of an element of the sets we work on It is parameterised over the type of the descriptor",
        "hierarchy": "Data UnionFind IO",
        "module": "Data.UnionFind.IO",
        "name": "Point",
        "normalized": "",
        "package": "union-find",
        "partial": "Point",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/union-find/docs/Data-UnionFind-IO.html#v:descriptor",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Return the descriptor associated with argument point's\n equivalence class.\n\u003c/p\u003e",
        "fct-module": "Data.UnionFind.IO",
        "fct-package": "union-find",
        "fct-signature": "Point a -\u003e IO a",
        "fct-source": "src/Data-UnionFind-IO.html#descriptor",
        "fct-type": "function",
        "title": "descriptor"
      },
      "index": {
        "description": "Return the descriptor associated with argument point equivalence class",
        "hierarchy": "Data UnionFind IO",
        "module": "Data.UnionFind.IO",
        "name": "descriptor",
        "normalized": "Point a-\u003eIO a",
        "package": "union-find",
        "partial": "",
        "signature": "Point a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/union-find/docs/Data-UnionFind-IO.html#v:equivalent",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Return \u003ccode\u003eTrue\u003c/code\u003e if both points belong to the same\n | equivalence class.\n\u003c/p\u003e",
        "fct-module": "Data.UnionFind.IO",
        "fct-package": "union-find",
        "fct-signature": "Point a -\u003e Point a -\u003e IO Bool",
        "fct-source": "src/Data-UnionFind-IO.html#equivalent",
        "fct-type": "function",
        "title": "equivalent"
      },
      "index": {
        "description": "Return True if both points belong to the same equivalence class",
        "hierarchy": "Data UnionFind IO",
        "module": "Data.UnionFind.IO",
        "name": "equivalent",
        "normalized": "Point a-\u003ePoint a-\u003eIO Bool",
        "package": "union-find",
        "partial": "",
        "signature": "Point a-\u003ePoint a-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/union-find/docs/Data-UnionFind-IO.html#v:fresh",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Create a fresh point and return it.  A fresh point is in\n the equivalence class that contains only itself.\n\u003c/p\u003e",
        "fct-module": "Data.UnionFind.IO",
        "fct-package": "union-find",
        "fct-signature": "a -\u003e IO (Point a)",
        "fct-source": "src/Data-UnionFind-IO.html#fresh",
        "fct-type": "function",
        "title": "fresh"
      },
      "index": {
        "description": "Create fresh point and return it fresh point is in the equivalence class that contains only itself",
        "hierarchy": "Data UnionFind IO",
        "module": "Data.UnionFind.IO",
        "name": "fresh",
        "normalized": "a-\u003eIO(Point a)",
        "package": "union-find",
        "partial": "",
        "signature": "a-\u003eIO(Point a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/union-find/docs/Data-UnionFind-IO.html#v:modifyDescriptor",
      "description": {
        "fct-module": "Data.UnionFind.IO",
        "fct-package": "union-find",
        "fct-signature": "Point a -\u003e (a -\u003e a) -\u003e IO ()",
        "fct-source": "src/Data-UnionFind-IO.html#modifyDescriptor",
        "fct-type": "function",
        "title": "modifyDescriptor"
      },
      "index": {
        "description": "",
        "hierarchy": "Data UnionFind IO",
        "module": "Data.UnionFind.IO",
        "name": "modifyDescriptor",
        "normalized": "Point a-\u003e(a-\u003ea)-\u003eIO()",
        "package": "union-find",
        "partial": "Descriptor",
        "signature": "Point a-\u003e(a-\u003ea)-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/union-find/docs/Data-UnionFind-IO.html#v:redundant",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Returns \u003ccode\u003eTrue\u003c/code\u003e for all but one element of an equivalence\n class.  That is, if \u003ccode\u003eps = [p1, .., pn]\u003c/code\u003e are all in the same\n equivalence class, then the following assertion holds.\n\u003c/p\u003e\u003cpre\u003e do rs \u003c- mapM redundant ps\n    assert (length (filter (==False) rs) == 1)\n\u003c/pre\u003e\u003cp\u003eIt is unspecified for which element function returns \u003ccode\u003eFalse\u003c/code\u003e, so be\n really careful when using this.\n\u003c/p\u003e",
        "fct-module": "Data.UnionFind.IO",
        "fct-package": "union-find",
        "fct-signature": "Point a -\u003e IO Bool",
        "fct-source": "src/Data-UnionFind-IO.html#redundant",
        "fct-type": "function",
        "title": "redundant"
      },
      "index": {
        "description": "Returns True for all but one element of an equivalence class That is if ps p1 pn are all in the same equivalence class then the following assertion holds do rs mapM redundant ps assert length filter False rs It is unspecified for which element function returns False so be really careful when using this",
        "hierarchy": "Data UnionFind IO",
        "module": "Data.UnionFind.IO",
        "name": "redundant",
        "normalized": "Point a-\u003eIO Bool",
        "package": "union-find",
        "partial": "",
        "signature": "Point a-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/union-find/docs/Data-UnionFind-IO.html#v:repr",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. \u003ccode\u003erepr point\u003c/code\u003e returns the representative point of\n \u003ccode\u003epoint\u003c/code\u003e's equivalence class.\n\u003c/p\u003e\u003cp\u003eThis method performs the path compresssion.\n\u003c/p\u003e",
        "fct-module": "Data.UnionFind.IO",
        "fct-package": "union-find",
        "fct-signature": "Point a -\u003e IO (Point a)",
        "fct-source": "src/Data-UnionFind-IO.html#repr",
        "fct-type": "function",
        "title": "repr"
      },
      "index": {
        "description": "repr point returns the representative point of point equivalence class This method performs the path compresssion",
        "hierarchy": "Data UnionFind IO",
        "module": "Data.UnionFind.IO",
        "name": "repr",
        "normalized": "Point a-\u003eIO(Point a)",
        "package": "union-find",
        "partial": "",
        "signature": "Point a-\u003eIO(Point a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/union-find/docs/Data-UnionFind-IO.html#v:setDescriptor",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Replace the descriptor of the point's equivalence class\n with the second argument.\n\u003c/p\u003e",
        "fct-module": "Data.UnionFind.IO",
        "fct-package": "union-find",
        "fct-signature": "Point a -\u003e a -\u003e IO ()",
        "fct-source": "src/Data-UnionFind-IO.html#setDescriptor",
        "fct-type": "function",
        "title": "setDescriptor"
      },
      "index": {
        "description": "Replace the descriptor of the point equivalence class with the second argument",
        "hierarchy": "Data UnionFind IO",
        "module": "Data.UnionFind.IO",
        "name": "setDescriptor",
        "normalized": "Point a-\u003ea-\u003eIO()",
        "package": "union-find",
        "partial": "Descriptor",
        "signature": "Point a-\u003ea-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/union-find/docs/Data-UnionFind-IO.html#v:union",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Join the equivalence classes of the points (which must be\n distinct).  The resulting equivalence class will get the descriptor\n of the second argument.\n\u003c/p\u003e",
        "fct-module": "Data.UnionFind.IO",
        "fct-package": "union-find",
        "fct-signature": "Point a -\u003e Point a -\u003e IO ()",
        "fct-source": "src/Data-UnionFind-IO.html#union",
        "fct-type": "function",
        "title": "union"
      },
      "index": {
        "description": "Join the equivalence classes of the points which must be distinct The resulting equivalence class will get the descriptor of the second argument",
        "hierarchy": "Data UnionFind IO",
        "module": "Data.UnionFind.IO",
        "name": "union",
        "normalized": "Point a-\u003ePoint a-\u003eIO()",
        "package": "union-find",
        "partial": "",
        "signature": "Point a-\u003ePoint a-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/union-find/docs/Data-UnionFind-IO.html#v:union-39-",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eunion\u003c/a\u003e\u003c/code\u003e, but sets the descriptor returned from the callback.\n\u003c/p\u003e\u003cp\u003eThe intention is to keep the descriptor of the second argument to\n the callback, but the callback might adjust the information of the\n descriptor or perform side effects.\n\u003c/p\u003e",
        "fct-module": "Data.UnionFind.IO",
        "fct-package": "union-find",
        "fct-signature": "Point a -\u003e Point a -\u003e (a -\u003e a -\u003e IO a) -\u003e IO ()",
        "fct-source": "src/Data-UnionFind-IO.html#union%27",
        "fct-type": "function",
        "title": "union'"
      },
      "index": {
        "description": "Like union but sets the descriptor returned from the callback The intention is to keep the descriptor of the second argument to the callback but the callback might adjust the information of the descriptor or perform side effects",
        "hierarchy": "Data UnionFind IO",
        "module": "Data.UnionFind.IO",
        "name": "union'",
        "normalized": "Point a-\u003ePoint a-\u003e(a-\u003ea-\u003eIO a)-\u003eIO()",
        "package": "union-find",
        "partial": "",
        "signature": "Point a-\u003ePoint a-\u003e(a-\u003ea-\u003eIO a)-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/union-find/docs/Data-UnionFind-IntMap.html#",
      "description": {
        "fct-module": "Data.UnionFind.IntMap",
        "fct-package": "union-find",
        "fct-signature": "module",
        "fct-source": "src/Data-UnionFind-IntMap.html",
        "fct-type": "module",
        "title": "IntMap"
      },
      "index": {
        "description": "",
        "hierarchy": "Data UnionFind IntMap",
        "module": "Data.UnionFind.IntMap",
        "name": "IntMap",
        "normalized": "",
        "package": "union-find",
        "partial": "Int Map",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/union-find/docs/Data-UnionFind-IntMap.html#t:Point",
      "description": {
        "fct-module": "Data.UnionFind.IntMap",
        "fct-package": "union-find",
        "fct-signature": "data",
        "fct-source": "src/Data-UnionFind-IntMap.html#Point",
        "fct-type": "data",
        "title": "Point"
      },
      "index": {
        "description": "",
        "hierarchy": "Data UnionFind IntMap",
        "module": "Data.UnionFind.IntMap",
        "name": "Point",
        "normalized": "",
        "package": "union-find",
        "partial": "Point",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/union-find/docs/Data-UnionFind-IntMap.html#t:PointSupply",
      "description": {
        "fct-module": "Data.UnionFind.IntMap",
        "fct-package": "union-find",
        "fct-signature": "data",
        "fct-source": "src/Data-UnionFind-IntMap.html#PointSupply",
        "fct-type": "data",
        "title": "PointSupply"
      },
      "index": {
        "description": "",
        "hierarchy": "Data UnionFind IntMap",
        "module": "Data.UnionFind.IntMap",
        "name": "PointSupply",
        "normalized": "",
        "package": "union-find",
        "partial": "Point Supply",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/union-find/docs/Data-UnionFind-IntMap.html#v:descriptor",
      "description": {
        "fct-module": "Data.UnionFind.IntMap",
        "fct-package": "union-find",
        "fct-signature": "PointSupply a -\u003e Point a -\u003e a",
        "fct-source": "src/Data-UnionFind-IntMap.html#descriptor",
        "fct-type": "function",
        "title": "descriptor"
      },
      "index": {
        "description": "",
        "hierarchy": "Data UnionFind IntMap",
        "module": "Data.UnionFind.IntMap",
        "name": "descriptor",
        "normalized": "PointSupply a-\u003ePoint a-\u003ea",
        "package": "union-find",
        "partial": "",
        "signature": "PointSupply a-\u003ePoint a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/union-find/docs/Data-UnionFind-IntMap.html#v:equivalent",
      "description": {
        "fct-module": "Data.UnionFind.IntMap",
        "fct-package": "union-find",
        "fct-signature": "PointSupply a -\u003e Point a -\u003e Point a -\u003e Bool",
        "fct-source": "src/Data-UnionFind-IntMap.html#equivalent",
        "fct-type": "function",
        "title": "equivalent"
      },
      "index": {
        "description": "",
        "hierarchy": "Data UnionFind IntMap",
        "module": "Data.UnionFind.IntMap",
        "name": "equivalent",
        "normalized": "PointSupply a-\u003ePoint a-\u003ePoint a-\u003eBool",
        "package": "union-find",
        "partial": "",
        "signature": "PointSupply a-\u003ePoint a-\u003ePoint a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/union-find/docs/Data-UnionFind-IntMap.html#v:fresh",
      "description": {
        "fct-module": "Data.UnionFind.IntMap",
        "fct-package": "union-find",
        "fct-signature": "PointSupply a -\u003e a -\u003e (PointSupply a, Point a)",
        "fct-source": "src/Data-UnionFind-IntMap.html#fresh",
        "fct-type": "function",
        "title": "fresh"
      },
      "index": {
        "description": "",
        "hierarchy": "Data UnionFind IntMap",
        "module": "Data.UnionFind.IntMap",
        "name": "fresh",
        "normalized": "PointSupply a-\u003ea-\u003e(PointSupply a,Point a)",
        "package": "union-find",
        "partial": "",
        "signature": "PointSupply a-\u003ea-\u003e(PointSupply a,Point a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/union-find/docs/Data-UnionFind-IntMap.html#v:newPointSupply",
      "description": {
        "fct-module": "Data.UnionFind.IntMap",
        "fct-package": "union-find",
        "fct-signature": "PointSupply a",
        "fct-source": "src/Data-UnionFind-IntMap.html#newPointSupply",
        "fct-type": "function",
        "title": "newPointSupply"
      },
      "index": {
        "description": "",
        "hierarchy": "Data UnionFind IntMap",
        "module": "Data.UnionFind.IntMap",
        "name": "newPointSupply",
        "normalized": "",
        "package": "union-find",
        "partial": "Point Supply",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/union-find/docs/Data-UnionFind-IntMap.html#v:repr",
      "description": {
        "fct-module": "Data.UnionFind.IntMap",
        "fct-package": "union-find",
        "fct-signature": "PointSupply a -\u003e Point a -\u003e Point a",
        "fct-source": "src/Data-UnionFind-IntMap.html#repr",
        "fct-type": "function",
        "title": "repr"
      },
      "index": {
        "description": "",
        "hierarchy": "Data UnionFind IntMap",
        "module": "Data.UnionFind.IntMap",
        "name": "repr",
        "normalized": "PointSupply a-\u003ePoint a-\u003ePoint a",
        "package": "union-find",
        "partial": "",
        "signature": "PointSupply a-\u003ePoint a-\u003ePoint a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/union-find/docs/Data-UnionFind-IntMap.html#v:union",
      "description": {
        "fct-module": "Data.UnionFind.IntMap",
        "fct-package": "union-find",
        "fct-signature": "PointSupply a -\u003e Point a -\u003e Point a -\u003e PointSupply a",
        "fct-source": "src/Data-UnionFind-IntMap.html#union",
        "fct-type": "function",
        "title": "union"
      },
      "index": {
        "description": "",
        "hierarchy": "Data UnionFind IntMap",
        "module": "Data.UnionFind.IntMap",
        "name": "union",
        "normalized": "PointSupply a-\u003ePoint a-\u003ePoint a-\u003ePointSupply a",
        "package": "union-find",
        "partial": "",
        "signature": "PointSupply a-\u003ePoint a-\u003ePoint a-\u003ePointSupply a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/union-find/docs/Data-UnionFind-ST.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn implementation of Tarjan's UNION-FIND algorithm.  (Robert E\n Tarjan. \"Efficiency of a Good But Not Linear Set Union Algorithm\", JACM\n 22(2), 1975)\n\u003c/p\u003e\u003cp\u003eThe algorithm implements three operations efficiently (all amortised\n \u003ccode\u003eO(1)\u003c/code\u003e):\n\u003c/p\u003e\u003col\u003e\u003cli\u003e Check whether two elements are in the same equivalence class.\n\u003c/li\u003e\u003cli\u003e Create a union of two equivalence classes.\n\u003c/li\u003e\u003cli\u003e Look up the descriptor of the equivalence class.\n\u003c/li\u003e\u003c/ol\u003e\u003cp\u003eThe implementation is based on mutable references.  Each\n equivalence class has exactly one member that serves as its\n representative element.  Every element either is the representative\n element of its equivalence class or points to another element in\n the same equivalence class.  Equivalence testing thus consists of\n following the pointers to the representative elements and then\n comparing these for identity.\n\u003c/p\u003e\u003cp\u003eThe algorithm performs lazy path compression.  That is, whenever we\n walk along a path greater than length 1 we automatically update the\n pointers along the path to directly point to the representative\n element.  Consequently future lookups will be have a path length of\n at most 1.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.UnionFind.ST",
        "fct-package": "union-find",
        "fct-signature": "module",
        "fct-source": "src/Data-UnionFind-ST.html",
        "fct-type": "module",
        "title": "ST"
      },
      "index": {
        "description": "An implementation of Tarjan UNION-FIND algorithm Robert Tarjan Efficiency of Good But Not Linear Set Union Algorithm JACM The algorithm implements three operations efficiently all amortised Check whether two elements are in the same equivalence class Create union of two equivalence classes Look up the descriptor of the equivalence class The implementation is based on mutable references Each equivalence class has exactly one member that serves as its representative element Every element either is the representative element of its equivalence class or points to another element in the same equivalence class Equivalence testing thus consists of following the pointers to the representative elements and then comparing these for identity The algorithm performs lazy path compression That is whenever we walk along path greater than length we automatically update the pointers along the path to directly point to the representative element Consequently future lookups will be have path length of at most",
        "hierarchy": "Data UnionFind ST",
        "module": "Data.UnionFind.ST",
        "name": "ST",
        "normalized": "",
        "package": "union-find",
        "partial": "ST",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/union-find/docs/Data-UnionFind-ST.html#t:Point",
      "description": {
        "fct-descr": "\u003cp\u003eThe abstract type of an element of the sets we work on.  It is\n parameterised over the type of the descriptor.\n\u003c/p\u003e",
        "fct-module": "Data.UnionFind.ST",
        "fct-package": "union-find",
        "fct-signature": "data",
        "fct-source": "src/Data-UnionFind-ST.html#Point",
        "fct-type": "data",
        "title": "Point"
      },
      "index": {
        "description": "The abstract type of an element of the sets we work on It is parameterised over the type of the descriptor",
        "hierarchy": "Data UnionFind ST",
        "module": "Data.UnionFind.ST",
        "name": "Point",
        "normalized": "",
        "package": "union-find",
        "partial": "Point",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/union-find/docs/Data-UnionFind-ST.html#v:descriptor",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Return the descriptor associated with argument point's\n equivalence class.\n\u003c/p\u003e",
        "fct-module": "Data.UnionFind.ST",
        "fct-package": "union-find",
        "fct-signature": "Point s a -\u003e ST s a",
        "fct-source": "src/Data-UnionFind-ST.html#descriptor",
        "fct-type": "function",
        "title": "descriptor"
      },
      "index": {
        "description": "Return the descriptor associated with argument point equivalence class",
        "hierarchy": "Data UnionFind ST",
        "module": "Data.UnionFind.ST",
        "name": "descriptor",
        "normalized": "Point a b-\u003eST a b",
        "package": "union-find",
        "partial": "",
        "signature": "Point s a-\u003eST s a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/union-find/docs/Data-UnionFind-ST.html#v:equivalent",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Return \u003ccode\u003eTrue\u003c/code\u003e if both points belong to the same\n | equivalence class.\n\u003c/p\u003e",
        "fct-module": "Data.UnionFind.ST",
        "fct-package": "union-find",
        "fct-signature": "Point s a -\u003e Point s a -\u003e ST s Bool",
        "fct-source": "src/Data-UnionFind-ST.html#equivalent",
        "fct-type": "function",
        "title": "equivalent"
      },
      "index": {
        "description": "Return True if both points belong to the same equivalence class",
        "hierarchy": "Data UnionFind ST",
        "module": "Data.UnionFind.ST",
        "name": "equivalent",
        "normalized": "Point a b-\u003ePoint a b-\u003eST a Bool",
        "package": "union-find",
        "partial": "",
        "signature": "Point s a-\u003ePoint s a-\u003eST s Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/union-find/docs/Data-UnionFind-ST.html#v:fresh",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Create a fresh point and return it.  A fresh point is in\n the equivalence class that contains only itself.\n\u003c/p\u003e",
        "fct-module": "Data.UnionFind.ST",
        "fct-package": "union-find",
        "fct-signature": "a -\u003e ST s (Point s a)",
        "fct-source": "src/Data-UnionFind-ST.html#fresh",
        "fct-type": "function",
        "title": "fresh"
      },
      "index": {
        "description": "Create fresh point and return it fresh point is in the equivalence class that contains only itself",
        "hierarchy": "Data UnionFind ST",
        "module": "Data.UnionFind.ST",
        "name": "fresh",
        "normalized": "a-\u003eST b(Point b a)",
        "package": "union-find",
        "partial": "",
        "signature": "a-\u003eST s(Point s a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/union-find/docs/Data-UnionFind-ST.html#v:modifyDescriptor",
      "description": {
        "fct-module": "Data.UnionFind.ST",
        "fct-package": "union-find",
        "fct-signature": "Point s a -\u003e (a -\u003e a) -\u003e ST s ()",
        "fct-source": "src/Data-UnionFind-ST.html#modifyDescriptor",
        "fct-type": "function",
        "title": "modifyDescriptor"
      },
      "index": {
        "description": "",
        "hierarchy": "Data UnionFind ST",
        "module": "Data.UnionFind.ST",
        "name": "modifyDescriptor",
        "normalized": "Point a b-\u003e(b-\u003eb)-\u003eST a()",
        "package": "union-find",
        "partial": "Descriptor",
        "signature": "Point s a-\u003e(a-\u003ea)-\u003eST s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/union-find/docs/Data-UnionFind-ST.html#v:redundant",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Returns \u003ccode\u003eTrue\u003c/code\u003e for all but one element of an equivalence\n class.  That is, if \u003ccode\u003eps = [p1, .., pn]\u003c/code\u003e are all in the same\n equivalence class, then the following assertion holds.\n\u003c/p\u003e\u003cpre\u003e do rs \u003c- mapM redundant ps\n    assert (length (filter (==False) rs) == 1)\n\u003c/pre\u003e\u003cp\u003eIt is unspecified for which element function returns \u003ccode\u003eFalse\u003c/code\u003e, so be\n really careful when using this.\n\u003c/p\u003e",
        "fct-module": "Data.UnionFind.ST",
        "fct-package": "union-find",
        "fct-signature": "Point s a -\u003e ST s Bool",
        "fct-source": "src/Data-UnionFind-ST.html#redundant",
        "fct-type": "function",
        "title": "redundant"
      },
      "index": {
        "description": "Returns True for all but one element of an equivalence class That is if ps p1 pn are all in the same equivalence class then the following assertion holds do rs mapM redundant ps assert length filter False rs It is unspecified for which element function returns False so be really careful when using this",
        "hierarchy": "Data UnionFind ST",
        "module": "Data.UnionFind.ST",
        "name": "redundant",
        "normalized": "Point a b-\u003eST a Bool",
        "package": "union-find",
        "partial": "",
        "signature": "Point s a-\u003eST s Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/union-find/docs/Data-UnionFind-ST.html#v:repr",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. \u003ccode\u003erepr point\u003c/code\u003e returns the representative point of\n \u003ccode\u003epoint\u003c/code\u003e's equivalence class.\n\u003c/p\u003e\u003cp\u003eThis method performs the path compresssion.\n\u003c/p\u003e",
        "fct-module": "Data.UnionFind.ST",
        "fct-package": "union-find",
        "fct-signature": "Point s a -\u003e ST s (Point s a)",
        "fct-source": "src/Data-UnionFind-ST.html#repr",
        "fct-type": "function",
        "title": "repr"
      },
      "index": {
        "description": "repr point returns the representative point of point equivalence class This method performs the path compresssion",
        "hierarchy": "Data UnionFind ST",
        "module": "Data.UnionFind.ST",
        "name": "repr",
        "normalized": "Point a b-\u003eST a(Point a b)",
        "package": "union-find",
        "partial": "",
        "signature": "Point s a-\u003eST s(Point s a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/union-find/docs/Data-UnionFind-ST.html#v:setDescriptor",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Replace the descriptor of the point's equivalence class\n with the second argument.\n\u003c/p\u003e",
        "fct-module": "Data.UnionFind.ST",
        "fct-package": "union-find",
        "fct-signature": "Point s a -\u003e a -\u003e ST s ()",
        "fct-source": "src/Data-UnionFind-ST.html#setDescriptor",
        "fct-type": "function",
        "title": "setDescriptor"
      },
      "index": {
        "description": "Replace the descriptor of the point equivalence class with the second argument",
        "hierarchy": "Data UnionFind ST",
        "module": "Data.UnionFind.ST",
        "name": "setDescriptor",
        "normalized": "Point a b-\u003eb-\u003eST a()",
        "package": "union-find",
        "partial": "Descriptor",
        "signature": "Point s a-\u003ea-\u003eST s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/union-find/docs/Data-UnionFind-ST.html#v:union",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Join the equivalence classes of the points (which must be\n distinct).  The resulting equivalence class will get the descriptor\n of the second argument.\n\u003c/p\u003e",
        "fct-module": "Data.UnionFind.ST",
        "fct-package": "union-find",
        "fct-signature": "Point s a -\u003e Point s a -\u003e ST s ()",
        "fct-source": "src/Data-UnionFind-ST.html#union",
        "fct-type": "function",
        "title": "union"
      },
      "index": {
        "description": "Join the equivalence classes of the points which must be distinct The resulting equivalence class will get the descriptor of the second argument",
        "hierarchy": "Data UnionFind ST",
        "module": "Data.UnionFind.ST",
        "name": "union",
        "normalized": "Point a b-\u003ePoint a b-\u003eST a()",
        "package": "union-find",
        "partial": "",
        "signature": "Point s a-\u003ePoint s a-\u003eST s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/union-find/docs/Data-UnionFind-ST.html#v:union-39-",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eunion\u003c/a\u003e\u003c/code\u003e, but sets the descriptor returned from the callback.\n\u003c/p\u003e\u003cp\u003eThe intention is to keep the descriptor of the second argument to\n the callback, but the callback might adjust the information of the\n descriptor or perform side effects.\n\u003c/p\u003e",
        "fct-module": "Data.UnionFind.ST",
        "fct-package": "union-find",
        "fct-signature": "Point s a -\u003e Point s a -\u003e (a -\u003e a -\u003e ST s a) -\u003e ST s ()",
        "fct-source": "src/Data-UnionFind-ST.html#union%27",
        "fct-type": "function",
        "title": "union'"
      },
      "index": {
        "description": "Like union but sets the descriptor returned from the callback The intention is to keep the descriptor of the second argument to the callback but the callback might adjust the information of the descriptor or perform side effects",
        "hierarchy": "Data UnionFind ST",
        "module": "Data.UnionFind.ST",
        "name": "union'",
        "normalized": "Point a b-\u003ePoint a b-\u003e(b-\u003eb-\u003eST a b)-\u003eST a()",
        "package": "union-find",
        "partial": "",
        "signature": "Point s a-\u003ePoint s a-\u003e(a-\u003ea-\u003eST s a)-\u003eST s()"
      }
    }
  }
]