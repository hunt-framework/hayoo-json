[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/closure/docs/Algebra-Closure-Set-BreadthFirst.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDepth-first closed sets. For a particular endomorphism \u003ccode\u003e(p :: a -\u003e\n a)\u003c/code\u003e a \u003ccode\u003e\u003ca\u003eClosed\u003c/a\u003e\u003c/code\u003e set is a set where if some element \u003ccode\u003ex\u003c/code\u003e is in the set\n then so is \u003ccode\u003ep x\u003c/code\u003e. Unlike \u003ca\u003eAlgebra.Closure.Set.DepthFirst\u003c/a\u003e, this\n algorithm computes the closure in a depth-first manner and thus can\n be useful for computing infinite closures.\n\u003c/p\u003e\u003cp\u003eIt's reasonable to think of a breadth-first \u003ccode\u003e\u003ca\u003eClosed\u003c/a\u003e\u003c/code\u003e set as the\n process of generating a depth-first\n \u003ccode\u003e\u003ca\u003eClosed\u003c/a\u003e\u003c/code\u003e set frozen in time. This\n retains information about the number of iterations required for\n stability and allows us to return answers that depend only upon\n partial information even if the closure itself is unbounded.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Algebra.Closure.Set.BreadthFirst",
        "fct-package": "closure",
        "fct-signature": "module",
        "fct-source": "src/Algebra-Closure-Set-BreadthFirst.html",
        "fct-type": "module",
        "title": "BreadthFirst"
      },
      "index": {
        "description": "Depth-first closed sets For particular endomorphism Closed set is set where if some element is in the set then so is Unlike Algebra.Closure.Set.DepthFirst this algorithm computes the closure in depth-first manner and thus can be useful for computing infinite closures It reasonable to think of breadth-first Closed set as the process of generating depth-first Closed set frozen in time This retains information about the number of iterations required for stability and allows us to return answers that depend only upon partial information even if the closure itself is unbounded",
        "hierarchy": "Algebra Closure Set BreadthFirst",
        "module": "Algebra.Closure.Set.BreadthFirst",
        "name": "BreadthFirst",
        "normalized": "",
        "package": "closure",
        "partial": "Breadth First",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/closure/docs/Algebra-Closure-Set-BreadthFirst.html#t:Closed",
      "description": {
        "fct-descr": "\u003cp\u003eA closed set \u003ccode\u003eClosed a\u003c/code\u003e, given an endomorphism \u003ccode\u003e(p :: a -\u003e a)\u003c/code\u003e,\n is a set where if some element \u003ccode\u003ex\u003c/code\u003e is in the set then so is \u003ccode\u003ep x\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Algebra.Closure.Set.BreadthFirst",
        "fct-package": "closure",
        "fct-signature": "data",
        "fct-source": "src/Algebra-Closure-Set-BreadthFirst.html#Closed",
        "fct-type": "data",
        "title": "Closed"
      },
      "index": {
        "description": "closed set Closed given an endomorphism is set where if some element is in the set then so is",
        "hierarchy": "Algebra Closure Set BreadthFirst",
        "module": "Algebra.Closure.Set.BreadthFirst",
        "name": "Closed",
        "normalized": "",
        "package": "closure",
        "partial": "Closed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/closure/docs/Algebra-Closure-Set-BreadthFirst.html#v:close",
      "description": {
        "fct-descr": "\u003cp\u003eConverts any \u003ccode\u003e\u003ca\u003eFoldable\u003c/a\u003e\u003c/code\u003e container into the \u003ccode\u003e\u003ca\u003eClosed\u003c/a\u003e\u003c/code\u003e set of its\n contents.\n\u003c/p\u003e",
        "fct-module": "Algebra.Closure.Set.BreadthFirst",
        "fct-package": "closure",
        "fct-signature": "(a -\u003e a) -\u003e t a -\u003e Closed a",
        "fct-source": "src/Algebra-Closure-Set-BreadthFirst.html#close",
        "fct-type": "function",
        "title": "close"
      },
      "index": {
        "description": "Converts any Foldable container into the Closed set of its contents",
        "hierarchy": "Algebra Closure Set BreadthFirst",
        "module": "Algebra.Closure.Set.BreadthFirst",
        "name": "close",
        "normalized": "(a-\u003ea)-\u003eb a-\u003eClosed a",
        "package": "closure",
        "partial": "",
        "signature": "(a-\u003ea)-\u003et a-\u003eClosed a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/closure/docs/Algebra-Closure-Set-BreadthFirst.html#v:member",
      "description": {
        "fct-descr": "\u003cp\u003eDetermines whether a particular element is in the \u003ccode\u003e\u003ca\u003eClosed\u003c/a\u003e\u003c/code\u003e\n set. If the element is in the set, this operation is always\n defined. If it is not and the set is unbounded, this operation is\n undefined (see \u003ccode\u003e\u003ca\u003ememberWithin\u003c/a\u003e\u003c/code\u003e). It's reasonable to think of this\n operation as\n\u003c/p\u003e\u003cpre\u003e\n   let omega = succ omega in memberWithin omega\n\u003c/pre\u003e",
        "fct-module": "Algebra.Closure.Set.BreadthFirst",
        "fct-package": "closure",
        "fct-signature": "a -\u003e Closed a -\u003e Bool",
        "fct-source": "src/Algebra-Closure-Set-BreadthFirst.html#member",
        "fct-type": "function",
        "title": "member"
      },
      "index": {
        "description": "Determines whether particular element is in the Closed set If the element is in the set this operation is always defined If it is not and the set is unbounded this operation is undefined see memberWithin It reasonable to think of this operation as let omega succ omega in memberWithin omega",
        "hierarchy": "Algebra Closure Set BreadthFirst",
        "module": "Algebra.Closure.Set.BreadthFirst",
        "name": "member",
        "normalized": "a-\u003eClosed a-\u003eBool",
        "package": "closure",
        "partial": "",
        "signature": "a-\u003eClosed a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/closure/docs/Algebra-Closure-Set-BreadthFirst.html#v:member-39-",
      "description": {
        "fct-descr": "\u003cp\u003eDetermines whether a particular element is in the \u003ccode\u003e\u003ca\u003eClosed\u003c/a\u003e\u003c/code\u003e\n set. If the element is in the set, this operation is always\n defined. If it is not and the set is unbounded, this operation is\n undefined (see \u003ccode\u003e\u003ca\u003ememberWithin\u003c/a\u003e\u003c/code\u003e). It's reasonable to think of this\n operation as\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\n   let omega = succ omega in memberWithin omega\n \u003c/code\u003e\n The \u003ccode\u003e\u003ca\u003eClosed\u003c/a\u003e\u003c/code\u003e set returned is a compressed, memoized \u003ccode\u003e\u003ca\u003eClosed\u003c/a\u003e\u003c/code\u003e set\n which may be faster to query.\n\u003c/p\u003e",
        "fct-module": "Algebra.Closure.Set.BreadthFirst",
        "fct-package": "closure",
        "fct-signature": "a -\u003e Closed a -\u003e (Bool, Closed a)",
        "fct-source": "src/Algebra-Closure-Set-BreadthFirst.html#member%27",
        "fct-type": "function",
        "title": "member'"
      },
      "index": {
        "description": "Determines whether particular element is in the Closed set If the element is in the set this operation is always defined If it is not and the set is unbounded this operation is undefined see memberWithin It reasonable to think of this operation as let omega succ omega in memberWithin omega The Closed set returned is compressed memoized Closed set which may be faster to query",
        "hierarchy": "Algebra Closure Set BreadthFirst",
        "module": "Algebra.Closure.Set.BreadthFirst",
        "name": "member'",
        "normalized": "a-\u003eClosed a-\u003e(Bool,Closed a)",
        "package": "closure",
        "partial": "",
        "signature": "a-\u003eClosed a-\u003e(Bool,Closed a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/closure/docs/Algebra-Closure-Set-BreadthFirst.html#v:memberWithin",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003ememberWithin' n a\u003c/code\u003e checks to see whether an element is within a\n \u003ccode\u003e\u003ca\u003eClosed\u003c/a\u003e\u003c/code\u003e set after \u003ccode\u003en\u003c/code\u003e improvements.\n\u003c/p\u003e",
        "fct-module": "Algebra.Closure.Set.BreadthFirst",
        "fct-package": "closure",
        "fct-signature": "Int -\u003e a -\u003e Closed a -\u003e Bool",
        "fct-source": "src/Algebra-Closure-Set-BreadthFirst.html#memberWithin",
        "fct-type": "function",
        "title": "memberWithin"
      },
      "index": {
        "description": "memberWithin checks to see whether an element is within Closed set after improvements",
        "hierarchy": "Algebra Closure Set BreadthFirst",
        "module": "Algebra.Closure.Set.BreadthFirst",
        "name": "memberWithin",
        "normalized": "Int-\u003ea-\u003eClosed a-\u003eBool",
        "package": "closure",
        "partial": "Within",
        "signature": "Int-\u003ea-\u003eClosed a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/closure/docs/Algebra-Closure-Set-BreadthFirst.html#v:memberWithin-39-",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003ememberWithin' n a\u003c/code\u003e checks to see whether an element is within a\n \u003ccode\u003e\u003ca\u003eClosed\u003c/a\u003e\u003c/code\u003e set after \u003ccode\u003en\u003c/code\u003e improvements. The \u003ccode\u003e\u003ca\u003eClosed\u003c/a\u003e\u003c/code\u003e set returned is a\n compressed, memoized \u003ccode\u003e\u003ca\u003eClosed\u003c/a\u003e\u003c/code\u003e set which may be faster to query.\n\u003c/p\u003e",
        "fct-module": "Algebra.Closure.Set.BreadthFirst",
        "fct-package": "closure",
        "fct-signature": "Int -\u003e a -\u003e Closed a -\u003e (Bool, Closed a)",
        "fct-source": "src/Algebra-Closure-Set-BreadthFirst.html#memberWithin%27",
        "fct-type": "function",
        "title": "memberWithin'"
      },
      "index": {
        "description": "memberWithin checks to see whether an element is within Closed set after improvements The Closed set returned is compressed memoized Closed set which may be faster to query",
        "hierarchy": "Algebra Closure Set BreadthFirst",
        "module": "Algebra.Closure.Set.BreadthFirst",
        "name": "memberWithin'",
        "normalized": "Int-\u003ea-\u003eClosed a-\u003e(Bool,Closed a)",
        "package": "closure",
        "partial": "Within'",
        "signature": "Int-\u003ea-\u003eClosed a-\u003e(Bool,Closed a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/closure/docs/Algebra-Closure-Set-BreadthFirst.html#v:seen",
      "description": {
        "fct-descr": "\u003cp\u003eConverts a \u003ccode\u003e\u003ca\u003eClosed\u003c/a\u003e\u003c/code\u003e set into its underlying set. If the \u003ccode\u003e\u003ca\u003eClosed\u003c/a\u003e\u003c/code\u003e\n set is unbounded then this operation is undefined (see\n \u003ccode\u003e\u003ca\u003eseenBy\u003c/a\u003e\u003c/code\u003e). It's reasonable to think of this operation as\n\u003c/p\u003e\u003cpre\u003e\n   let omega = succ omega in seenBy omega\n\u003c/pre\u003e",
        "fct-module": "Algebra.Closure.Set.BreadthFirst",
        "fct-package": "closure",
        "fct-signature": "Closed a -\u003e HashSet a",
        "fct-source": "src/Algebra-Closure-Set-BreadthFirst.html#seen",
        "fct-type": "function",
        "title": "seen"
      },
      "index": {
        "description": "Converts Closed set into its underlying set If the Closed set is unbounded then this operation is undefined see seenBy It reasonable to think of this operation as let omega succ omega in seenBy omega",
        "hierarchy": "Algebra Closure Set BreadthFirst",
        "module": "Algebra.Closure.Set.BreadthFirst",
        "name": "seen",
        "normalized": "Closed a-\u003eHashSet a",
        "package": "closure",
        "partial": "",
        "signature": "Closed a-\u003eHashSet a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/closure/docs/Algebra-Closure-Set-BreadthFirst.html#v:seenBy",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eseenBy n\u003c/code\u003e converts a \u003ccode\u003e\u003ca\u003eClosed\u003c/a\u003e\u003c/code\u003e set into its underlying set,\n approximated by \u003ccode\u003en\u003c/code\u003e iterations.\n\u003c/p\u003e",
        "fct-module": "Algebra.Closure.Set.BreadthFirst",
        "fct-package": "closure",
        "fct-signature": "Int -\u003e Closed a -\u003e HashSet a",
        "fct-source": "src/Algebra-Closure-Set-BreadthFirst.html#seenBy",
        "fct-type": "function",
        "title": "seenBy"
      },
      "index": {
        "description": "seenBy converts Closed set into its underlying set approximated by iterations",
        "hierarchy": "Algebra Closure Set BreadthFirst",
        "module": "Algebra.Closure.Set.BreadthFirst",
        "name": "seenBy",
        "normalized": "Int-\u003eClosed a-\u003eHashSet a",
        "package": "closure",
        "partial": "By",
        "signature": "Int-\u003eClosed a-\u003eHashSet a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/closure/docs/Algebra-Closure-Set-DepthFirst.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDepth-first closed sets. For a particular endomorphism \u003ccode\u003e(p :: a -\u003e\n a)\u003c/code\u003e a \u003ccode\u003e\u003ca\u003eClosed\u003c/a\u003e\u003c/code\u003e set is a set where if some element \u003ccode\u003ex\u003c/code\u003e is in the set\n then so is \u003ccode\u003ep x\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Algebra.Closure.Set.DepthFirst",
        "fct-package": "closure",
        "fct-signature": "module",
        "fct-source": "src/Algebra-Closure-Set-DepthFirst.html",
        "fct-type": "module",
        "title": "DepthFirst"
      },
      "index": {
        "description": "Depth-first closed sets For particular endomorphism Closed set is set where if some element is in the set then so is",
        "hierarchy": "Algebra Closure Set DepthFirst",
        "module": "Algebra.Closure.Set.DepthFirst",
        "name": "DepthFirst",
        "normalized": "",
        "package": "closure",
        "partial": "Depth First",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/closure/docs/Algebra-Closure-Set-DepthFirst.html#t:Closed",
      "description": {
        "fct-descr": "\u003cp\u003eA closed set \u003ccode\u003eClosed a\u003c/code\u003e, given an endomorphism \u003ccode\u003e(p :: a -\u003e a)\u003c/code\u003e,\n is a set where if some element \u003ccode\u003ex\u003c/code\u003e is in the set then so is \u003ccode\u003ep x\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Algebra.Closure.Set.DepthFirst",
        "fct-package": "closure",
        "fct-signature": "data",
        "fct-source": "src/Algebra-Closure-Set-DepthFirst.html#Closed",
        "fct-type": "data",
        "title": "Closed"
      },
      "index": {
        "description": "closed set Closed given an endomorphism is set where if some element is in the set then so is",
        "hierarchy": "Algebra Closure Set DepthFirst",
        "module": "Algebra.Closure.Set.DepthFirst",
        "name": "Closed",
        "normalized": "",
        "package": "closure",
        "partial": "Closed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/closure/docs/Algebra-Closure-Set-DepthFirst.html#v:close",
      "description": {
        "fct-descr": "\u003cp\u003eConverts any \u003ccode\u003e\u003ca\u003eFoldable\u003c/a\u003e\u003c/code\u003e container into the \u003ccode\u003e\u003ca\u003eClosed\u003c/a\u003e\u003c/code\u003e set of its\n contents.\n\u003c/p\u003e",
        "fct-module": "Algebra.Closure.Set.DepthFirst",
        "fct-package": "closure",
        "fct-signature": "(a -\u003e a) -\u003e t a -\u003e Closed a",
        "fct-source": "src/Algebra-Closure-Set-DepthFirst.html#close",
        "fct-type": "function",
        "title": "close"
      },
      "index": {
        "description": "Converts any Foldable container into the Closed set of its contents",
        "hierarchy": "Algebra Closure Set DepthFirst",
        "module": "Algebra.Closure.Set.DepthFirst",
        "name": "close",
        "normalized": "(a-\u003ea)-\u003eb a-\u003eClosed a",
        "package": "closure",
        "partial": "",
        "signature": "(a-\u003ea)-\u003et a-\u003eClosed a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/closure/docs/Algebra-Closure-Set-DepthFirst.html#v:empty",
      "description": {
        "fct-descr": "\u003cp\u003eAn empty closed set under a fixed endomorphism.\n\u003c/p\u003e",
        "fct-module": "Algebra.Closure.Set.DepthFirst",
        "fct-package": "closure",
        "fct-signature": "(a -\u003e a) -\u003e Closed a",
        "fct-source": "src/Algebra-Closure-Set-DepthFirst.html#empty",
        "fct-type": "function",
        "title": "empty"
      },
      "index": {
        "description": "An empty closed set under fixed endomorphism",
        "hierarchy": "Algebra Closure Set DepthFirst",
        "module": "Algebra.Closure.Set.DepthFirst",
        "name": "empty",
        "normalized": "(a-\u003ea)-\u003eClosed a",
        "package": "closure",
        "partial": "",
        "signature": "(a-\u003ea)-\u003eClosed a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/closure/docs/Algebra-Closure-Set-DepthFirst.html#v:insert",
      "description": {
        "fct-descr": "\u003cp\u003eInserts a new element into a \u003ccode\u003e\u003ca\u003eClosed\u003c/a\u003e\u003c/code\u003e set, maintaining closure.\n\u003c/p\u003e",
        "fct-module": "Algebra.Closure.Set.DepthFirst",
        "fct-package": "closure",
        "fct-signature": "a -\u003e Closed a -\u003e Closed a",
        "fct-source": "src/Algebra-Closure-Set-DepthFirst.html#insert",
        "fct-type": "function",
        "title": "insert"
      },
      "index": {
        "description": "Inserts new element into Closed set maintaining closure",
        "hierarchy": "Algebra Closure Set DepthFirst",
        "module": "Algebra.Closure.Set.DepthFirst",
        "name": "insert",
        "normalized": "a-\u003eClosed a-\u003eClosed a",
        "package": "closure",
        "partial": "",
        "signature": "a-\u003eClosed a-\u003eClosed a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/closure/docs/Algebra-Closure-Set-DepthFirst.html#v:member",
      "description": {
        "fct-descr": "\u003cp\u003eIs a particular element in the closure of this set?\n\u003c/p\u003e",
        "fct-module": "Algebra.Closure.Set.DepthFirst",
        "fct-package": "closure",
        "fct-signature": "a -\u003e Closed a -\u003e Bool",
        "fct-source": "src/Algebra-Closure-Set-DepthFirst.html#member",
        "fct-type": "function",
        "title": "member"
      },
      "index": {
        "description": "Is particular element in the closure of this set",
        "hierarchy": "Algebra Closure Set DepthFirst",
        "module": "Algebra.Closure.Set.DepthFirst",
        "name": "member",
        "normalized": "a-\u003eClosed a-\u003eBool",
        "package": "closure",
        "partial": "",
        "signature": "a-\u003eClosed a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/closure/docs/Algebra-Closure-Set-DepthFirst.html#v:seen",
      "description": {
        "fct-descr": "\u003cp\u003eAccess the underlying set.\n\u003c/p\u003e",
        "fct-module": "Algebra.Closure.Set.DepthFirst",
        "fct-package": "closure",
        "fct-signature": "Closed a -\u003e HashSet a",
        "fct-source": "src/Algebra-Closure-Set-DepthFirst.html#seen",
        "fct-type": "function",
        "title": "seen"
      },
      "index": {
        "description": "Access the underlying set",
        "hierarchy": "Algebra Closure Set DepthFirst",
        "module": "Algebra.Closure.Set.DepthFirst",
        "name": "seen",
        "normalized": "Closed a-\u003eHashSet a",
        "package": "closure",
        "partial": "",
        "signature": "Closed a-\u003eHashSet a"
      }
    }
  }
]