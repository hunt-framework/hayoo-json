[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/interleave/docs/Control-Alternative-Interleave.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA module containing interleaving behaviour combinators.  See the \u003ccode\u003e\u003ca\u003eengage\u003c/a\u003e\u003c/code\u003e\n  function for some details and examples.  A much fuller explanation of this\n  entire library is provided in the forthcoming article in Issue 17 of The Monad\n  Reader which will be published at \u003ca\u003ehttp://themonadreader.wordpress.com/\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Alternative.Interleave",
        "fct-package": "interleave",
        "fct-signature": "module",
        "fct-source": "src/Control-Alternative-Interleave.html",
        "fct-type": "module",
        "title": "Interleave"
      },
      "index": {
        "description": "module containing interleaving behaviour combinators See the engage function for some details and examples much fuller explanation of this entire library is provided in the forthcoming article in Issue of The Monad Reader which will be published at http themonadreader.wordpress.com",
        "hierarchy": "Control Alternative Interleave",
        "module": "Control.Alternative.Interleave",
        "name": "Interleave",
        "normalized": "",
        "package": "interleave",
        "partial": "Interleave",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/interleave/docs/Control-Alternative-Interleave.html#t:InterleaveT",
      "description": {
        "fct-descr": "\u003cp\u003eThis data-type represents potentially-many actions in the \u003ccode\u003ef\u003c/code\u003e\n \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e / \u003ccode\u003e\u003ca\u003eAlternative\u003c/a\u003e\u003c/code\u003e that will result in returning a value of type \u003ccode\u003ea\u003c/code\u003e.\n See \u003ccode\u003e\u003ca\u003eengage\u003c/a\u003e\u003c/code\u003e for more details.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e instance is straightforward.  The \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e operator in the \u003ccode\u003e\u003ca\u003eApplicative\u003c/a\u003e\u003c/code\u003e instance\n runs the left-hand side and right-hand side \u003ccode\u003e\u003ca\u003ealongside\u003c/a\u003e\u003c/code\u003e each other, and afterwards\n it applies the left-hand function to the right-hand value.\n\u003c/p\u003e",
        "fct-module": "Control.Alternative.Interleave",
        "fct-package": "interleave",
        "fct-signature": "data",
        "fct-source": "src/Control-Alternative-Interleave.html#InterleaveT",
        "fct-type": "data",
        "title": "InterleaveT"
      },
      "index": {
        "description": "This data-type represents potentially-many actions in the Monad Alternative that will result in returning value of type See engage for more details The Functor instance is straightforward The operator in the Applicative instance runs the left-hand side and right-hand side alongside each other and afterwards it applies the left-hand function to the right-hand value",
        "hierarchy": "Control Alternative Interleave",
        "module": "Control.Alternative.Interleave",
        "name": "InterleaveT",
        "normalized": "",
        "package": "interleave",
        "partial": "Interleave",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/interleave/docs/Control-Alternative-Interleave.html#v:alongside",
      "description": {
        "fct-descr": "\u003cp\u003eOffers one behaviour alongside another.\n\u003c/p\u003e\u003cp\u003eThis operation is semantically associative and commutative.\n\u003c/p\u003e",
        "fct-module": "Control.Alternative.Interleave",
        "fct-package": "interleave",
        "fct-signature": "InterleaveT f a -\u003e InterleaveT f b -\u003e InterleaveT f (a, b)",
        "fct-source": "src/Control-Alternative-Interleave.html#alongside",
        "fct-type": "function",
        "title": "alongside"
      },
      "index": {
        "description": "Offers one behaviour alongside another This operation is semantically associative and commutative",
        "hierarchy": "Control Alternative Interleave",
        "module": "Control.Alternative.Interleave",
        "name": "alongside",
        "normalized": "InterleaveT a b-\u003eInterleaveT a c-\u003eInterleaveT a(b,c)",
        "package": "interleave",
        "partial": "",
        "signature": "InterleaveT f a-\u003eInterleaveT f b-\u003eInterleaveT f(a,b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/interleave/docs/Control-Alternative-Interleave.html#v:alongsideMerge",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ealongside\u003c/a\u003e\u003c/code\u003e but merges the results with \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e afterwards.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003ealongsideMerge a b\u003c/code\u003e is equivalent to \u003ccode\u003euncurry mappend \u003c$\u003e (a `alongside` b)\u003c/code\u003e\n and \u003ccode\u003eliftA2 mappend a b\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Alternative.Interleave",
        "fct-package": "interleave",
        "fct-signature": "InterleaveT f a -\u003e InterleaveT f a -\u003e InterleaveT f a",
        "fct-source": "src/Control-Alternative-Interleave.html#alongsideMerge",
        "fct-type": "function",
        "title": "alongsideMerge"
      },
      "index": {
        "description": "Like alongside but merges the results with mappend afterwards alongsideMerge is equivalent to uncurry mappend alongside and liftA2 mappend",
        "hierarchy": "Control Alternative Interleave",
        "module": "Control.Alternative.Interleave",
        "name": "alongsideMerge",
        "normalized": "InterleaveT a b-\u003eInterleaveT a b-\u003eInterleaveT a b",
        "package": "interleave",
        "partial": "Merge",
        "signature": "InterleaveT f a-\u003eInterleaveT f a-\u003eInterleaveT f a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/interleave/docs/Control-Alternative-Interleave.html#v:alongside_",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ealongside\u003c/a\u003e\u003c/code\u003e but discards the results.\n\u003c/p\u003e",
        "fct-module": "Control.Alternative.Interleave",
        "fct-package": "interleave",
        "fct-signature": "InterleaveT f a -\u003e InterleaveT f b -\u003e InterleaveT f ()",
        "fct-source": "src/Control-Alternative-Interleave.html#alongside_",
        "fct-type": "function",
        "title": "alongside_"
      },
      "index": {
        "description": "Like alongside but discards the results",
        "hierarchy": "Control Alternative Interleave",
        "module": "Control.Alternative.Interleave",
        "name": "alongside_",
        "normalized": "InterleaveT a b-\u003eInterleaveT a c-\u003eInterleaveT a()",
        "package": "interleave",
        "partial": "",
        "signature": "InterleaveT f a-\u003eInterleaveT f b-\u003eInterleaveT f()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/interleave/docs/Control-Alternative-Interleave.html#v:endAfter",
      "description": {
        "fct-descr": "\u003cp\u003eActs like the given item, but when it has no more actions to take, ends the entire call to \u003ccode\u003e\u003ca\u003eengage\u003c/a\u003e\u003c/code\u003e.\n So this code:\n\u003c/p\u003e\u003cpre\u003e engage $ unlimited p `alongside` endAfter (once q)\n\u003c/pre\u003e\u003cp\u003eWill terminate after \u003ccode\u003eq\u003c/code\u003e occurs.  In contrast, this code:\n\u003c/p\u003e\u003cpre\u003e engage $ unlimited p `alongside` once q\n\u003c/pre\u003e\u003cp\u003ewill never terminate because it can always offer to perform q.\n\u003c/p\u003e",
        "fct-module": "Control.Alternative.Interleave",
        "fct-package": "interleave",
        "fct-signature": "InterleaveT f a -\u003e InterleaveT f a",
        "fct-source": "src/Control-Alternative-Interleave.html#endAfter",
        "fct-type": "function",
        "title": "endAfter"
      },
      "index": {
        "description": "Acts like the given item but when it has no more actions to take ends the entire call to engage So this code engage unlimited alongside endAfter once Will terminate after occurs In contrast this code engage unlimited alongside once will never terminate because it can always offer to perform",
        "hierarchy": "Control Alternative Interleave",
        "module": "Control.Alternative.Interleave",
        "name": "endAfter",
        "normalized": "InterleaveT a b-\u003eInterleaveT a b",
        "package": "interleave",
        "partial": "After",
        "signature": "InterleaveT f a-\u003eInterleaveT f a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/interleave/docs/Control-Alternative-Interleave.html#v:endWhen",
      "description": {
        "fct-descr": "\u003cp\u003eActs like the given item, but when the current result value satisfies the\n given function (i.e. applying the function yields \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e), ends the entire call\n to \u003ccode\u003e\u003ca\u003eengage\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Alternative.Interleave",
        "fct-package": "interleave",
        "fct-signature": "(a -\u003e Bool) -\u003e InterleaveT f a -\u003e InterleaveT f a",
        "fct-source": "src/Control-Alternative-Interleave.html#endWhen",
        "fct-type": "function",
        "title": "endWhen"
      },
      "index": {
        "description": "Acts like the given item but when the current result value satisfies the given function i.e applying the function yields True ends the entire call to engage",
        "hierarchy": "Control Alternative Interleave",
        "module": "Control.Alternative.Interleave",
        "name": "endWhen",
        "normalized": "(a-\u003eBool)-\u003eInterleaveT b a-\u003eInterleaveT b a",
        "package": "interleave",
        "partial": "When",
        "signature": "(a-\u003eBool)-\u003eInterleaveT f a-\u003eInterleaveT f a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/interleave/docs/Control-Alternative-Interleave.html#v:engage",
      "description": {
        "fct-descr": "\u003cp\u003eOffers the given behaviour until either the finite set of actions is exhausted,\n    or one of the explicit termination constructs is triggered.\n\u003c/p\u003e\u003cp\u003eFor example:\n\u003c/p\u003e\u003cpre\u003e engage $ unlimited p `alongside` unlimited q\n\u003c/pre\u003e\u003cp\u003ewill repeatedly offer \u003ccode\u003ep\u003c/code\u003e and \u003ccode\u003eq\u003c/code\u003e without ever terminating.\n\u003c/p\u003e\u003cpre\u003e engage $ upTo 3 p `alongside` upTo 5 q\n\u003c/pre\u003e\u003cp\u003ewill do \u003ccode\u003ep\u003c/code\u003e three times and \u003ccode\u003eq\u003c/code\u003e 5 times (in any mixed order) then finish.\n\u003c/p\u003e\u003cpre\u003e engage $ unlimited p `alongside` unlimited q `alongside` endAfter (once r)\n\u003c/pre\u003e\u003cp\u003ewill offer p repeatedly and q repeatedly and r, until r happens, at which point\n the behaviour will end.\n\u003c/p\u003e\u003cpre\u003e engage $ once p `alongside` endAfter (once q)\n\u003c/pre\u003e\u003cp\u003ewill offer p and q; if p happens first it will wait for q, but if q happens\n first it will finish.\n\u003c/p\u003e\u003cpre\u003e engage $ once p `alongside` endAfter (once q) `alongside` endAfter (once r)\n\u003c/pre\u003e\u003cp\u003epermits p to happen at most once, while either of q or r happening will finish\n the call.\n\u003c/p\u003e\u003cp\u003eAll sorts of combinations are possible, but it is important to note that you\n need at least one \u003ccode\u003e\u003ca\u003eendAfter\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eendWhen\u003c/a\u003e\u003c/code\u003e event if you ever intend a call involving\n \u003ccode\u003e\u003ca\u003eunlimited\u003c/a\u003e\u003c/code\u003e (or similar) to finish.  Some\n laws involving \u003ccode\u003e\u003ca\u003eengage\u003c/a\u003e\u003c/code\u003e (ignoring the types and return values) are:\n\u003c/p\u003e\u003cpre\u003e engage (unlimited p) == forever p\n engage (once p) == Just \u003c$\u003e p\n engage (endAfter (once p)) == engage (once p)\n engage (endAfter (once p) `alongside` endAfter (once q)) == p \u003c|\u003e q\n\u003c/pre\u003e\u003cp\u003eMost other uses of \u003ccode\u003e\u003ca\u003eengage\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ealongside\u003c/a\u003e\u003c/code\u003e do not reduce down to simple\n programs, which is of course the attraction of the combinators.\n\u003c/p\u003e",
        "fct-module": "Control.Alternative.Interleave",
        "fct-package": "interleave",
        "fct-signature": "InterleaveT f a -\u003e f a",
        "fct-source": "src/Control-Alternative-Interleave.html#engage",
        "fct-type": "function",
        "title": "engage"
      },
      "index": {
        "description": "Offers the given behaviour until either the finite set of actions is exhausted or one of the explicit termination constructs is triggered For example engage unlimited alongside unlimited will repeatedly offer and without ever terminating engage upTo alongside upTo will do three times and times in any mixed order then finish engage unlimited alongside unlimited alongside endAfter once will offer repeatedly and repeatedly and until happens at which point the behaviour will end engage once alongside endAfter once will offer and if happens first it will wait for but if happens first it will finish engage once alongside endAfter once alongside endAfter once permits to happen at most once while either of or happening will finish the call All sorts of combinations are possible but it is important to note that you need at least one endAfter or endWhen event if you ever intend call involving unlimited or similar to finish Some laws involving engage ignoring the types and return values are engage unlimited forever engage once Just engage endAfter once engage once engage endAfter once alongside endAfter once Most other uses of engage and alongside do not reduce down to simple programs which is of course the attraction of the combinators",
        "hierarchy": "Control Alternative Interleave",
        "module": "Control.Alternative.Interleave",
        "name": "engage",
        "normalized": "InterleaveT a b-\u003ea b",
        "package": "interleave",
        "partial": "",
        "signature": "InterleaveT f a-\u003ef a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/interleave/docs/Control-Alternative-Interleave.html#v:engageMany",
      "description": {
        "fct-descr": "\u003cp\u003eOffers all the given behaviours together, and gives back a list of the outcomes.\n\u003c/p\u003e\u003cp\u003eThis is roughly a shorthand for \u003ccode\u003eengage . foldr1 alongside\u003c/code\u003e, except that if you\n pass the empty list, you simply get the empty list returned (rather than an\n error)\n\u003c/p\u003e",
        "fct-module": "Control.Alternative.Interleave",
        "fct-package": "interleave",
        "fct-signature": "[InterleaveT f a] -\u003e f [a]",
        "fct-source": "src/Control-Alternative-Interleave.html#engageMany",
        "fct-type": "function",
        "title": "engageMany"
      },
      "index": {
        "description": "Offers all the given behaviours together and gives back list of the outcomes This is roughly shorthand for engage foldr1 alongside except that if you pass the empty list you simply get the empty list returned rather than an error",
        "hierarchy": "Control Alternative Interleave",
        "module": "Control.Alternative.Interleave",
        "name": "engageMany",
        "normalized": "[InterleaveT a b]-\u003ea[b]",
        "package": "interleave",
        "partial": "Many",
        "signature": "[InterleaveT f a]-\u003ef[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/interleave/docs/Control-Alternative-Interleave.html#v:inOrder",
      "description": {
        "fct-descr": "\u003cp\u003eOffers the given list of items, in order.\n\u003c/p\u003e",
        "fct-module": "Control.Alternative.Interleave",
        "fct-package": "interleave",
        "fct-signature": "[f a] -\u003e InterleaveT f [a]",
        "fct-source": "src/Control-Alternative-Interleave.html#inOrder",
        "fct-type": "function",
        "title": "inOrder"
      },
      "index": {
        "description": "Offers the given list of items in order",
        "hierarchy": "Control Alternative Interleave",
        "module": "Control.Alternative.Interleave",
        "name": "inOrder",
        "normalized": "[a b]-\u003eInterleaveT a[b]",
        "package": "interleave",
        "partial": "Order",
        "signature": "[f a]-\u003eInterleaveT f[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/interleave/docs/Control-Alternative-Interleave.html#v:inOrder_",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003einOrder\u003c/a\u003e\u003c/code\u003e, but discards the results.\n\u003c/p\u003e",
        "fct-module": "Control.Alternative.Interleave",
        "fct-package": "interleave",
        "fct-signature": "[f a] -\u003e InterleaveT f ()",
        "fct-source": "src/Control-Alternative-Interleave.html#inOrder_",
        "fct-type": "function",
        "title": "inOrder_"
      },
      "index": {
        "description": "Like inOrder but discards the results",
        "hierarchy": "Control Alternative Interleave",
        "module": "Control.Alternative.Interleave",
        "name": "inOrder_",
        "normalized": "[a b]-\u003eInterleaveT a()",
        "package": "interleave",
        "partial": "Order",
        "signature": "[f a]-\u003eInterleaveT f()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/interleave/docs/Control-Alternative-Interleave.html#v:once",
      "description": {
        "fct-descr": "\u003cp\u003eOffers the given behaviour, and when it occurs, does not offer it again.\n Returns \u003ccode\u003eJust\u003c/code\u003e the result if the behaviour happens, otherwise gives \u003ccode\u003eNothing\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003eonce m\u003c/code\u003e is equivalent to \u003ccode\u003elistToMaybe \u003c$\u003e upTo 1 m\u003c/code\u003e (and thus also \u003ccode\u003elistToMaybe\n \u003c$\u003e inOrder [m]\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Control.Alternative.Interleave",
        "fct-package": "interleave",
        "fct-signature": "f a -\u003e InterleaveT f (Maybe a)",
        "fct-source": "src/Control-Alternative-Interleave.html#once",
        "fct-type": "function",
        "title": "once"
      },
      "index": {
        "description": "Offers the given behaviour and when it occurs does not offer it again Returns Just the result if the behaviour happens otherwise gives Nothing once is equivalent to listToMaybe upTo and thus also listToMaybe inOrder",
        "hierarchy": "Control Alternative Interleave",
        "module": "Control.Alternative.Interleave",
        "name": "once",
        "normalized": "a b-\u003eInterleaveT a(Maybe b)",
        "package": "interleave",
        "partial": "",
        "signature": "f a-\u003eInterleaveT f(Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/interleave/docs/Control-Alternative-Interleave.html#v:once_",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eonce\u003c/a\u003e\u003c/code\u003e but discards the result.\n\u003c/p\u003e",
        "fct-module": "Control.Alternative.Interleave",
        "fct-package": "interleave",
        "fct-signature": "f a -\u003e InterleaveT f ()",
        "fct-source": "src/Control-Alternative-Interleave.html#once_",
        "fct-type": "function",
        "title": "once_"
      },
      "index": {
        "description": "Like once but discards the result",
        "hierarchy": "Control Alternative Interleave",
        "module": "Control.Alternative.Interleave",
        "name": "once_",
        "normalized": "a b-\u003eInterleaveT a()",
        "package": "interleave",
        "partial": "",
        "signature": "f a-\u003eInterleaveT f()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/interleave/docs/Control-Alternative-Interleave.html#v:unlimited",
      "description": {
        "fct-descr": "\u003cp\u003eRepeatedly offers the given behaviour.  A list is returned (in chronological order,\n earliest first) of the results of each occurrence of the behaviour.  If you\n don't want these results, it is better to use \u003ccode\u003e\u003ca\u003eunlimited_\u003c/a\u003e\u003c/code\u003e to avoid a space\n leak.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003eunlimited\u003c/code\u003e is equivalent to \u003ccode\u003einOrder . repeat\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Alternative.Interleave",
        "fct-package": "interleave",
        "fct-signature": "f a -\u003e InterleaveT f [a]",
        "fct-source": "src/Control-Alternative-Interleave.html#unlimited",
        "fct-type": "function",
        "title": "unlimited"
      },
      "index": {
        "description": "Repeatedly offers the given behaviour list is returned in chronological order earliest first of the results of each occurrence of the behaviour If you don want these results it is better to use unlimited to avoid space leak unlimited is equivalent to inOrder repeat",
        "hierarchy": "Control Alternative Interleave",
        "module": "Control.Alternative.Interleave",
        "name": "unlimited",
        "normalized": "a b-\u003eInterleaveT a[b]",
        "package": "interleave",
        "partial": "",
        "signature": "f a-\u003eInterleaveT f[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/interleave/docs/Control-Alternative-Interleave.html#v:unlimitedRecurse",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eunlimited\u003c/a\u003e\u003c/code\u003e, but allows some state (of type \u003ccode\u003ea\u003c/code\u003e) to be passed from one\n subsequent call to another, as well as generating the results of type \u003ccode\u003eb\u003c/code\u003e.\n To begin with the function (first parameter) will be called with the initial\n state (second parameter).  If chosen, it will return the new state, and a result\n to be accumulated into the list.  The second call to the function will be passed\n the new state, to then return the even newer state and a second result, and\n so on.\n\u003c/p\u003e\u003cp\u003eIf you want to use this with the StateT monad transformer from the mtl library,\n you can call:\n\u003c/p\u003e\u003cpre\u003e unlimitedRecurse (runStateT myStateAction) initialState\n   where\n     myStateAction :: StateT s m a\n     initialState :: s\n\u003c/pre\u003e",
        "fct-module": "Control.Alternative.Interleave",
        "fct-package": "interleave",
        "fct-signature": "(a -\u003e f (b, a)) -\u003e a -\u003e InterleaveT f [b]",
        "fct-source": "src/Control-Alternative-Interleave.html#unlimitedRecurse",
        "fct-type": "function",
        "title": "unlimitedRecurse"
      },
      "index": {
        "description": "Like unlimited but allows some state of type to be passed from one subsequent call to another as well as generating the results of type To begin with the function first parameter will be called with the initial state second parameter If chosen it will return the new state and result to be accumulated into the list The second call to the function will be passed the new state to then return the even newer state and second result and so on If you want to use this with the StateT monad transformer from the mtl library you can call unlimitedRecurse runStateT myStateAction initialState where myStateAction StateT initialState",
        "hierarchy": "Control Alternative Interleave",
        "module": "Control.Alternative.Interleave",
        "name": "unlimitedRecurse",
        "normalized": "(a-\u003eb(c,a))-\u003ea-\u003eInterleaveT b[c]",
        "package": "interleave",
        "partial": "Recurse",
        "signature": "(a-\u003ef(b,a))-\u003ea-\u003eInterleaveT f[b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/interleave/docs/Control-Alternative-Interleave.html#v:unlimitedRecurse_",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eunlimitedRecurse\u003c/a\u003e\u003c/code\u003e, but does not accumulate a list of results.\n\u003c/p\u003e\u003cp\u003eIf you want to use this with the StateT monad transformer from the mtl library,\n you can call:\n\u003c/p\u003e\u003cpre\u003e unlimitedRecurse (execStateT myStateAction) initialState\n   where\n     myStateAction :: StateT s m a\n     initialState :: s\n\u003c/pre\u003e",
        "fct-module": "Control.Alternative.Interleave",
        "fct-package": "interleave",
        "fct-signature": "(a -\u003e f a) -\u003e a -\u003e InterleaveT f ()",
        "fct-source": "src/Control-Alternative-Interleave.html#unlimitedRecurse_",
        "fct-type": "function",
        "title": "unlimitedRecurse_"
      },
      "index": {
        "description": "Like unlimitedRecurse but does not accumulate list of results If you want to use this with the StateT monad transformer from the mtl library you can call unlimitedRecurse execStateT myStateAction initialState where myStateAction StateT initialState",
        "hierarchy": "Control Alternative Interleave",
        "module": "Control.Alternative.Interleave",
        "name": "unlimitedRecurse_",
        "normalized": "(a-\u003eb a)-\u003ea-\u003eInterleaveT b()",
        "package": "interleave",
        "partial": "Recurse",
        "signature": "(a-\u003ef a)-\u003ea-\u003eInterleaveT f()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/interleave/docs/Control-Alternative-Interleave.html#v:unlimited_",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eunlimited\u003c/a\u003e\u003c/code\u003e, but discards the output.  Useful if the event is likely\n to occur many times, and you don't need the results.\n\u003c/p\u003e",
        "fct-module": "Control.Alternative.Interleave",
        "fct-package": "interleave",
        "fct-signature": "f a -\u003e InterleaveT f ()",
        "fct-source": "src/Control-Alternative-Interleave.html#unlimited_",
        "fct-type": "function",
        "title": "unlimited_"
      },
      "index": {
        "description": "Like unlimited but discards the output Useful if the event is likely to occur many times and you don need the results",
        "hierarchy": "Control Alternative Interleave",
        "module": "Control.Alternative.Interleave",
        "name": "unlimited_",
        "normalized": "a b-\u003eInterleaveT a()",
        "package": "interleave",
        "partial": "",
        "signature": "f a-\u003eInterleaveT f()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/interleave/docs/Control-Alternative-Interleave.html#v:upTo",
      "description": {
        "fct-descr": "\u003cp\u003eOffers the given behaviour up to the given number of times, returning a list\n of the results (in chronological order, earliest first).\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003eupTo n\u003c/code\u003e is equivalent to \u003ccode\u003einOrder . replicate n\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Alternative.Interleave",
        "fct-package": "interleave",
        "fct-signature": "Int -\u003e f a -\u003e InterleaveT f [a]",
        "fct-source": "src/Control-Alternative-Interleave.html#upTo",
        "fct-type": "function",
        "title": "upTo"
      },
      "index": {
        "description": "Offers the given behaviour up to the given number of times returning list of the results in chronological order earliest first upTo is equivalent to inOrder replicate",
        "hierarchy": "Control Alternative Interleave",
        "module": "Control.Alternative.Interleave",
        "name": "upTo",
        "normalized": "Int-\u003ea b-\u003eInterleaveT a[b]",
        "package": "interleave",
        "partial": "To",
        "signature": "Int-\u003ef a-\u003eInterleaveT f[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/interleave/docs/Control-Alternative-Interleave.html#v:upTo_",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eupTo\u003c/a\u003e\u003c/code\u003e, but discards the results.\n\u003c/p\u003e",
        "fct-module": "Control.Alternative.Interleave",
        "fct-package": "interleave",
        "fct-signature": "Int -\u003e f a -\u003e InterleaveT f ()",
        "fct-source": "src/Control-Alternative-Interleave.html#upTo_",
        "fct-type": "function",
        "title": "upTo_"
      },
      "index": {
        "description": "Like upTo but discards the results",
        "hierarchy": "Control Alternative Interleave",
        "module": "Control.Alternative.Interleave",
        "name": "upTo_",
        "normalized": "Int-\u003ea b-\u003eInterleaveT a()",
        "package": "interleave",
        "partial": "To",
        "signature": "Int-\u003ef a-\u003eInterleaveT f()"
      }
    }
  }
]