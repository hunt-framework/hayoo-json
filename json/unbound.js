[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Alpha.html#",
      "description": {
        "fct-module": "Unbound.LocallyNameless.Alpha",
        "fct-package": "unbound",
        "fct-signature": "module",
        "fct-source": "src/Unbound-LocallyNameless-Alpha.html",
        "fct-type": "module",
        "title": "Alpha"
      },
      "index": {
        "description": "",
        "hierarchy": "Unbound LocallyNameless Alpha",
        "module": "Unbound.LocallyNameless.Alpha",
        "name": "Alpha",
        "normalized": "",
        "package": "unbound",
        "partial": "Alpha",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Alpha.html#t:Alpha",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003eAlpha\u003c/code\u003e type class is for types which may contain names.  The\n   \u003ccode\u003eRep1\u003c/code\u003e constraint means that we can only make instances of this\n   class for types that have generic representations (which can be\n   automatically derived by RepLib.)\n\u003c/p\u003e\u003cp\u003eNote that the methods of \u003ccode\u003eAlpha\u003c/code\u003e should almost never be called\n   directly.  Instead, use other methods provided by this module\n   which are defined in terms of \u003ccode\u003eAlpha\u003c/code\u003e methods.\n\u003c/p\u003e\u003cp\u003eMost of the time, the default definitions of these methods will\n   suffice, so you can make an instance for your data type by simply\n   declaring\n\u003c/p\u003e\u003cpre\u003e instance Alpha MyType\n\u003c/pre\u003e\u003cp\u003eOccasionally, however, it may be useful to override the default\n   implementations of one or more \u003ccode\u003eAlpha\u003c/code\u003e methods for a particular\n   type.  For example, consider a type like\n\u003c/p\u003e\u003cpre\u003e data Term = ...\n           | Annotation Stuff Term\n\u003c/pre\u003e\u003cp\u003ewhere the \u003ccode\u003eAnnotation\u003c/code\u003e constructor of \u003ccode\u003eTerm\u003c/code\u003e associates some sort\n   of annotation with a term --- say, information obtained from a\n   parser about where in an input file the term came from.  This\n   information is needed to produce good error messages, but should\n   not be taken into consideration when, say, comparing two \u003ccode\u003eTerm\u003c/code\u003es\n   for alpha-equivalence.  In order to make \u003ccode\u003eaeq\u003c/code\u003e ignore\n   annotations, you can override the implementation of \u003ccode\u003eaeq'\u003c/code\u003e like\n   so:\n\u003c/p\u003e\u003cpre\u003e instance Alpha Term where\n   aeq' c (Annotation _ t1) t2 = aeq' c t1 t2\n   aeq' c t1 (Annotation _ t2) = aeq' c t1 t2\n   aeq' c t1 t2 = aeqR1 rep1 t1 t2\n\u003c/pre\u003e\u003cp\u003eNote how the call to \u003ccode\u003e\u003ca\u003eaeqR1\u003c/a\u003e\u003c/code\u003e handles all the other cases generically.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless.Alpha",
        "fct-package": "unbound",
        "fct-signature": "class",
        "fct-source": "src/Unbound-LocallyNameless-Alpha.html#Alpha",
        "fct-type": "class",
        "title": "Alpha"
      },
      "index": {
        "description": "The Alpha type class is for types which may contain names The Rep1 constraint means that we can only make instances of this class for types that have generic representations which can be automatically derived by RepLib Note that the methods of Alpha should almost never be called directly Instead use other methods provided by this module which are defined in terms of Alpha methods Most of the time the default definitions of these methods will suffice so you can make an instance for your data type by simply declaring instance Alpha MyType Occasionally however it may be useful to override the default implementations of one or more Alpha methods for particular type For example consider type like data Term Annotation Stuff Term where the Annotation constructor of Term associates some sort of annotation with term say information obtained from parser about where in an input file the term came from This information is needed to produce good error messages but should not be taken into consideration when say comparing two Term for alpha-equivalence In order to make aeq ignore annotations you can override the implementation of aeq like so instance Alpha Term where aeq Annotation t1 t2 aeq t1 t2 aeq t1 Annotation t2 aeq t1 t2 aeq t1 t2 aeqR1 rep1 t1 t2 Note how the call to aeqR1 handles all the other cases generically",
        "hierarchy": "Unbound LocallyNameless Alpha",
        "module": "Unbound.LocallyNameless.Alpha",
        "name": "Alpha",
        "normalized": "",
        "package": "unbound",
        "partial": "Alpha",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Alpha.html#t:AlphaCtx",
      "description": {
        "fct-descr": "\u003cp\u003eMany of the operations in the \u003ccode\u003e\u003ca\u003eAlpha\u003c/a\u003e\u003c/code\u003e class take an \u003ccode\u003e\u003ca\u003eAlphaCtx\u003c/a\u003e\u003c/code\u003e:\n stored information about the iteration as it progresses. This type\n is abstract, as classes that override these operations should just pass\n the context on.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless.Alpha",
        "fct-package": "unbound",
        "fct-signature": "data",
        "fct-source": "src/Unbound-LocallyNameless-Alpha.html#AlphaCtx",
        "fct-type": "data",
        "title": "AlphaCtx"
      },
      "index": {
        "description": "Many of the operations in the Alpha class take an AlphaCtx stored information about the iteration as it progresses This type is abstract as classes that override these operations should just pass the context on",
        "hierarchy": "Unbound LocallyNameless Alpha",
        "module": "Unbound.LocallyNameless.Alpha",
        "name": "AlphaCtx",
        "normalized": "",
        "package": "unbound",
        "partial": "Alpha Ctx",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Alpha.html#t:AlphaD",
      "description": {
        "fct-descr": "\u003cp\u003eClass constraint hackery to allow us to override the default\n   definitions for certain classes.  \u003ccode\u003e\u003ca\u003eAlphaD\u003c/a\u003e\u003c/code\u003e is essentially a\n   reified dictionary for the \u003ccode\u003e\u003ca\u003eAlpha\u003c/a\u003e\u003c/code\u003e class.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless.Alpha",
        "fct-package": "unbound",
        "fct-signature": "data",
        "fct-source": "src/Unbound-LocallyNameless-Alpha.html#AlphaD",
        "fct-type": "data",
        "title": "AlphaD"
      },
      "index": {
        "description": "Class constraint hackery to allow us to override the default definitions for certain classes AlphaD is essentially reified dictionary for the Alpha class",
        "hierarchy": "Unbound LocallyNameless Alpha",
        "module": "Unbound.LocallyNameless.Alpha",
        "name": "AlphaD",
        "normalized": "",
        "package": "unbound",
        "partial": "Alpha",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Alpha.html#t:FindResult",
      "description": {
        "fct-descr": "\u003cp\u003eThe result of a \u003ccode\u003e\u003ca\u003efindpatrec\u003c/a\u003e\u003c/code\u003e operation.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless.Alpha",
        "fct-package": "unbound",
        "fct-signature": "data",
        "fct-source": "src/Unbound-LocallyNameless-Alpha.html#FindResult",
        "fct-type": "data",
        "title": "FindResult"
      },
      "index": {
        "description": "The result of findpatrec operation",
        "hierarchy": "Unbound LocallyNameless Alpha",
        "module": "Unbound.LocallyNameless.Alpha",
        "name": "FindResult",
        "normalized": "",
        "package": "unbound",
        "partial": "Find Result",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Alpha.html#t:IsEmbed",
      "description": {
        "fct-descr": "\u003cp\u003eType class for embedded terms (either \u003ccode\u003eEmbed\u003c/code\u003e or \u003ccode\u003eShift\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless.Alpha",
        "fct-package": "unbound",
        "fct-signature": "class",
        "fct-source": "src/Unbound-LocallyNameless-Alpha.html#IsEmbed",
        "fct-type": "class",
        "title": "IsEmbed"
      },
      "index": {
        "description": "Type class for embedded terms either Embed or Shift",
        "hierarchy": "Unbound LocallyNameless Alpha",
        "module": "Unbound.LocallyNameless.Alpha",
        "name": "IsEmbed",
        "normalized": "",
        "package": "unbound",
        "partial": "Is Embed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Alpha.html#t:Mode",
      "description": {
        "fct-descr": "\u003cp\u003eA mode is basically a flag that tells us whether we should be\n   looking at the names in the term, or if we are in a pattern and\n   should \u003cem\u003eonly\u003c/em\u003e be looking at the names in the annotations. The\n   standard mode is to use \u003ccode\u003e\u003ca\u003eTerm\u003c/a\u003e\u003c/code\u003e; many functions do this by default.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless.Alpha",
        "fct-package": "unbound",
        "fct-signature": "data",
        "fct-source": "src/Unbound-LocallyNameless-Alpha.html#Mode",
        "fct-type": "data",
        "title": "Mode"
      },
      "index": {
        "description": "mode is basically flag that tells us whether we should be looking at the names in the term or if we are in pattern and should only be looking at the names in the annotations The standard mode is to use Term many functions do this by default",
        "hierarchy": "Unbound LocallyNameless Alpha",
        "module": "Unbound.LocallyNameless.Alpha",
        "name": "Mode",
        "normalized": "",
        "package": "unbound",
        "partial": "Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Alpha.html#t:NthCont",
      "description": {
        "fct-descr": "\u003cp\u003eA continuation which takes the remaining index and searches for\n   that location in a pattern, yielding a name or a remaining index\n   if the end of the pattern was reached too soon.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless.Alpha",
        "fct-package": "unbound",
        "fct-signature": "newtype",
        "fct-source": "src/Unbound-LocallyNameless-Alpha.html#NthCont",
        "fct-type": "newtype",
        "title": "NthCont"
      },
      "index": {
        "description": "continuation which takes the remaining index and searches for that location in pattern yielding name or remaining index if the end of the pattern was reached too soon",
        "hierarchy": "Unbound LocallyNameless Alpha",
        "module": "Unbound.LocallyNameless.Alpha",
        "name": "NthCont",
        "normalized": "",
        "package": "unbound",
        "partial": "Nth Cont",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Alpha.html#t:NthResult",
      "description": {
        "fct-descr": "\u003cp\u003eThe result of an \u003ccode\u003e\u003ca\u003enthpatrec\u003c/a\u003e\u003c/code\u003e operation.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless.Alpha",
        "fct-package": "unbound",
        "fct-signature": "data",
        "fct-source": "src/Unbound-LocallyNameless-Alpha.html#NthResult",
        "fct-type": "data",
        "title": "NthResult"
      },
      "index": {
        "description": "The result of an nthpatrec operation",
        "hierarchy": "Unbound LocallyNameless Alpha",
        "module": "Unbound.LocallyNameless.Alpha",
        "name": "NthResult",
        "normalized": "",
        "package": "unbound",
        "partial": "Nth Result",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Alpha.html#v:AC",
      "description": {
        "fct-module": "Unbound.LocallyNameless.Alpha",
        "fct-package": "unbound",
        "fct-signature": "AC",
        "fct-source": "src/Unbound-LocallyNameless-Alpha.html#AlphaCtx",
        "fct-type": "function",
        "title": "AC"
      },
      "index": {
        "description": "",
        "hierarchy": "Unbound LocallyNameless Alpha",
        "module": "Unbound.LocallyNameless.Alpha",
        "name": "AC",
        "normalized": "",
        "package": "unbound",
        "partial": "AC",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Alpha.html#v:AlphaD",
      "description": {
        "fct-module": "Unbound.LocallyNameless.Alpha",
        "fct-package": "unbound",
        "fct-signature": "AlphaD",
        "fct-source": "src/Unbound-LocallyNameless-Alpha.html#AlphaD",
        "fct-type": "function",
        "title": "AlphaD"
      },
      "index": {
        "description": "",
        "hierarchy": "Unbound LocallyNameless Alpha",
        "module": "Unbound.LocallyNameless.Alpha",
        "name": "AlphaD",
        "normalized": "",
        "package": "unbound",
        "partial": "Alpha",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Alpha.html#v:CurIndex",
      "description": {
        "fct-descr": "\u003cp\u003eWe haven't yet reached the\n   required index; this is the\n   index into the remainder of the\n   pattern (which decreases as we\n   traverse the pattern).\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless.Alpha",
        "fct-package": "unbound",
        "fct-signature": "CurIndex Integer",
        "fct-source": "src/Unbound-LocallyNameless-Alpha.html#NthResult",
        "fct-type": "function",
        "title": "CurIndex"
      },
      "index": {
        "description": "We haven yet reached the required index this is the index into the remainder of the pattern which decreases as we traverse the pattern",
        "hierarchy": "Unbound LocallyNameless Alpha",
        "module": "Unbound.LocallyNameless.Alpha",
        "name": "CurIndex",
        "normalized": "",
        "package": "unbound",
        "partial": "Cur Index",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Alpha.html#v:Found",
      "description": {
        "fct-descr": "\u003cp\u003eThe name found at the given\n   index.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless.Alpha",
        "fct-package": "unbound",
        "fct-signature": "Found AnyName",
        "fct-source": "src/Unbound-LocallyNameless-Alpha.html#NthResult",
        "fct-type": "function",
        "title": "Found"
      },
      "index": {
        "description": "The name found at the given index",
        "hierarchy": "Unbound LocallyNameless Alpha",
        "module": "Unbound.LocallyNameless.Alpha",
        "name": "Found",
        "normalized": "",
        "package": "unbound",
        "partial": "Found",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Alpha.html#v:Index",
      "description": {
        "fct-descr": "\u003cp\u003eThe (first) index of the name we\n   sought\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless.Alpha",
        "fct-package": "unbound",
        "fct-signature": "Index Integer",
        "fct-source": "src/Unbound-LocallyNameless-Alpha.html#FindResult",
        "fct-type": "function",
        "title": "Index"
      },
      "index": {
        "description": "The first index of the name we sought",
        "hierarchy": "Unbound LocallyNameless Alpha",
        "module": "Unbound.LocallyNameless.Alpha",
        "name": "Index",
        "normalized": "",
        "package": "unbound",
        "partial": "Index",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Alpha.html#v:NamesSeen",
      "description": {
        "fct-descr": "\u003cp\u003eWe haven't found the name\n   (yet), but have seen this many\n   others while looking for it\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless.Alpha",
        "fct-package": "unbound",
        "fct-signature": "NamesSeen Integer",
        "fct-source": "src/Unbound-LocallyNameless-Alpha.html#FindResult",
        "fct-type": "function",
        "title": "NamesSeen"
      },
      "index": {
        "description": "We haven found the name yet but have seen this many others while looking for it",
        "hierarchy": "Unbound LocallyNameless Alpha",
        "module": "Unbound.LocallyNameless.Alpha",
        "name": "NamesSeen",
        "normalized": "",
        "package": "unbound",
        "partial": "Names Seen",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Alpha.html#v:NthCont",
      "description": {
        "fct-module": "Unbound.LocallyNameless.Alpha",
        "fct-package": "unbound",
        "fct-signature": "NthCont",
        "fct-source": "src/Unbound-LocallyNameless-Alpha.html#NthCont",
        "fct-type": "function",
        "title": "NthCont"
      },
      "index": {
        "description": "",
        "hierarchy": "Unbound LocallyNameless Alpha",
        "module": "Unbound.LocallyNameless.Alpha",
        "name": "NthCont",
        "normalized": "",
        "package": "unbound",
        "partial": "Nth Cont",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Alpha.html#v:Pat",
      "description": {
        "fct-module": "Unbound.LocallyNameless.Alpha",
        "fct-package": "unbound",
        "fct-signature": "Pat",
        "fct-source": "src/Unbound-LocallyNameless-Alpha.html#Mode",
        "fct-type": "function",
        "title": "Pat"
      },
      "index": {
        "description": "",
        "hierarchy": "Unbound LocallyNameless Alpha",
        "module": "Unbound.LocallyNameless.Alpha",
        "name": "Pat",
        "normalized": "",
        "package": "unbound",
        "partial": "Pat",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Alpha.html#v:Term",
      "description": {
        "fct-module": "Unbound.LocallyNameless.Alpha",
        "fct-package": "unbound",
        "fct-signature": "Term",
        "fct-source": "src/Unbound-LocallyNameless-Alpha.html#Mode",
        "fct-type": "function",
        "title": "Term"
      },
      "index": {
        "description": "",
        "hierarchy": "Unbound LocallyNameless Alpha",
        "module": "Unbound.LocallyNameless.Alpha",
        "name": "Term",
        "normalized": "",
        "package": "unbound",
        "partial": "Term",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Alpha.html#v:acompare-39-",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ccode\u003eacompare\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless.Alpha",
        "fct-package": "unbound",
        "fct-signature": "AlphaCtx -\u003e a -\u003e a -\u003e Ordering",
        "fct-source": "src/Unbound-LocallyNameless-Alpha.html#acompare%27",
        "fct-type": "method",
        "title": "acompare'"
      },
      "index": {
        "description": "See acompare",
        "hierarchy": "Unbound LocallyNameless Alpha",
        "module": "Unbound.LocallyNameless.Alpha",
        "name": "acompare'",
        "normalized": "AlphaCtx-\u003ea-\u003ea-\u003eOrdering",
        "package": "unbound",
        "partial": "",
        "signature": "AlphaCtx-\u003ea-\u003ea-\u003eOrdering"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Alpha.html#v:acompareD",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Unbound.LocallyNameless.Alpha",
        "fct-package": "unbound",
        "fct-signature": "AlphaCtx -\u003e a -\u003e a -\u003e Ordering",
        "fct-source": "src/Unbound-LocallyNameless-Alpha.html#AlphaD",
        "fct-type": "function",
        "title": "acompareD"
      },
      "index": {
        "description": "",
        "hierarchy": "Unbound LocallyNameless Alpha",
        "module": "Unbound.LocallyNameless.Alpha",
        "name": "acompareD",
        "normalized": "AlphaCtx-\u003ea-\u003ea-\u003eOrdering",
        "package": "unbound",
        "partial": "",
        "signature": "AlphaCtx-\u003ea-\u003ea-\u003eOrdering"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Alpha.html#v:acompareR1",
      "description": {
        "fct-module": "Unbound.LocallyNameless.Alpha",
        "fct-package": "unbound",
        "fct-signature": "R1 AlphaD a -\u003e AlphaCtx -\u003e a -\u003e a -\u003e Ordering",
        "fct-source": "src/Unbound-LocallyNameless-Alpha.html#acompareR1",
        "fct-type": "function",
        "title": "acompareR1"
      },
      "index": {
        "description": "",
        "hierarchy": "Unbound LocallyNameless Alpha",
        "module": "Unbound.LocallyNameless.Alpha",
        "name": "acompareR1",
        "normalized": "R AlphaD a-\u003eAlphaCtx-\u003ea-\u003ea-\u003eOrdering",
        "package": "unbound",
        "partial": "",
        "signature": "R AlphaD a-\u003eAlphaCtx-\u003ea-\u003ea-\u003eOrdering"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Alpha.html#v:aeq-39-",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ccode\u003eaeq\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless.Alpha",
        "fct-package": "unbound",
        "fct-signature": "AlphaCtx -\u003e a -\u003e a -\u003e Bool",
        "fct-source": "src/Unbound-LocallyNameless-Alpha.html#aeq%27",
        "fct-type": "method",
        "title": "aeq'"
      },
      "index": {
        "description": "See aeq",
        "hierarchy": "Unbound LocallyNameless Alpha",
        "module": "Unbound.LocallyNameless.Alpha",
        "name": "aeq'",
        "normalized": "AlphaCtx-\u003ea-\u003ea-\u003eBool",
        "package": "unbound",
        "partial": "",
        "signature": "AlphaCtx-\u003ea-\u003ea-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Alpha.html#v:aeq1",
      "description": {
        "fct-module": "Unbound.LocallyNameless.Alpha",
        "fct-package": "unbound",
        "fct-signature": "MTup AlphaD l -\u003e AlphaCtx -\u003e l -\u003e l -\u003e Bool",
        "fct-source": "src/Unbound-LocallyNameless-Alpha.html#aeq1",
        "fct-type": "function",
        "title": "aeq1"
      },
      "index": {
        "description": "",
        "hierarchy": "Unbound LocallyNameless Alpha",
        "module": "Unbound.LocallyNameless.Alpha",
        "name": "aeq1",
        "normalized": "MTup AlphaD a-\u003eAlphaCtx-\u003ea-\u003ea-\u003eBool",
        "package": "unbound",
        "partial": "",
        "signature": "MTup AlphaD l-\u003eAlphaCtx-\u003el-\u003el-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Alpha.html#v:aeqD",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Unbound.LocallyNameless.Alpha",
        "fct-package": "unbound",
        "fct-signature": "AlphaCtx -\u003e a -\u003e a -\u003e Bool",
        "fct-source": "src/Unbound-LocallyNameless-Alpha.html#AlphaD",
        "fct-type": "function",
        "title": "aeqD"
      },
      "index": {
        "description": "",
        "hierarchy": "Unbound LocallyNameless Alpha",
        "module": "Unbound.LocallyNameless.Alpha",
        "name": "aeqD",
        "normalized": "AlphaCtx-\u003ea-\u003ea-\u003eBool",
        "package": "unbound",
        "partial": "",
        "signature": "AlphaCtx-\u003ea-\u003ea-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Alpha.html#v:aeqR1",
      "description": {
        "fct-module": "Unbound.LocallyNameless.Alpha",
        "fct-package": "unbound",
        "fct-signature": "R1 AlphaD a -\u003e AlphaCtx -\u003e a -\u003e a -\u003e Bool",
        "fct-source": "src/Unbound-LocallyNameless-Alpha.html#aeqR1",
        "fct-type": "function",
        "title": "aeqR1"
      },
      "index": {
        "description": "",
        "hierarchy": "Unbound LocallyNameless Alpha",
        "module": "Unbound.LocallyNameless.Alpha",
        "name": "aeqR1",
        "normalized": "R AlphaD a-\u003eAlphaCtx-\u003ea-\u003ea-\u003eBool",
        "package": "unbound",
        "partial": "",
        "signature": "R AlphaD a-\u003eAlphaCtx-\u003ea-\u003ea-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Alpha.html#v:close",
      "description": {
        "fct-descr": "\u003cp\u003eReplace free names by bound names.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless.Alpha",
        "fct-package": "unbound",
        "fct-signature": "AlphaCtx -\u003e b -\u003e a -\u003e a",
        "fct-source": "src/Unbound-LocallyNameless-Alpha.html#close",
        "fct-type": "method",
        "title": "close"
      },
      "index": {
        "description": "Replace free names by bound names",
        "hierarchy": "Unbound LocallyNameless Alpha",
        "module": "Unbound.LocallyNameless.Alpha",
        "name": "close",
        "normalized": "AlphaCtx-\u003ea-\u003eb-\u003eb",
        "package": "unbound",
        "partial": "",
        "signature": "AlphaCtx-\u003eb-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Alpha.html#v:closeD",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Unbound.LocallyNameless.Alpha",
        "fct-package": "unbound",
        "fct-signature": "AlphaCtx -\u003e b -\u003e a -\u003e a",
        "fct-source": "src/Unbound-LocallyNameless-Alpha.html#AlphaD",
        "fct-type": "function",
        "title": "closeD"
      },
      "index": {
        "description": "",
        "hierarchy": "Unbound LocallyNameless Alpha",
        "module": "Unbound.LocallyNameless.Alpha",
        "name": "closeD",
        "normalized": "AlphaCtx-\u003ea-\u003eb-\u003eb",
        "package": "unbound",
        "partial": "",
        "signature": "AlphaCtx-\u003eb-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Alpha.html#v:closeP",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003ecloseP p1 p2\u003c/code\u003e closes the pattern \u003ccode\u003ep2\u003c/code\u003e using the pattern \u003ccode\u003ep1\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless.Alpha",
        "fct-package": "unbound",
        "fct-signature": "p1 -\u003e p2 -\u003e p2",
        "fct-source": "src/Unbound-LocallyNameless-Alpha.html#closeP",
        "fct-type": "function",
        "title": "closeP"
      },
      "index": {
        "description": "closeP p1 p2 closes the pattern p2 using the pattern p1",
        "hierarchy": "Unbound LocallyNameless Alpha",
        "module": "Unbound.LocallyNameless.Alpha",
        "name": "closeP",
        "normalized": "a-\u003ea-\u003ea",
        "package": "unbound",
        "partial": "",
        "signature": "p-\u003ep-\u003ep"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Alpha.html#v:closeR1",
      "description": {
        "fct-module": "Unbound.LocallyNameless.Alpha",
        "fct-package": "unbound",
        "fct-signature": "R1 AlphaD a -\u003e AlphaCtx -\u003e b -\u003e a -\u003e a",
        "fct-source": "src/Unbound-LocallyNameless-Alpha.html#closeR1",
        "fct-type": "function",
        "title": "closeR1"
      },
      "index": {
        "description": "",
        "hierarchy": "Unbound LocallyNameless Alpha",
        "module": "Unbound.LocallyNameless.Alpha",
        "name": "closeR1",
        "normalized": "R AlphaD a-\u003eAlphaCtx-\u003eb-\u003ea-\u003ea",
        "package": "unbound",
        "partial": "",
        "signature": "R AlphaD a-\u003eAlphaCtx-\u003eb-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Alpha.html#v:closeT",
      "description": {
        "fct-descr": "\u003cp\u003eClose a term using the given pattern.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless.Alpha",
        "fct-package": "unbound",
        "fct-signature": "p -\u003e t -\u003e t",
        "fct-source": "src/Unbound-LocallyNameless-Alpha.html#closeT",
        "fct-type": "function",
        "title": "closeT"
      },
      "index": {
        "description": "Close term using the given pattern",
        "hierarchy": "Unbound LocallyNameless Alpha",
        "module": "Unbound.LocallyNameless.Alpha",
        "name": "closeT",
        "normalized": "a-\u003eb-\u003eb",
        "package": "unbound",
        "partial": "",
        "signature": "p-\u003et-\u003et"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Alpha.html#v:combine",
      "description": {
        "fct-module": "Unbound.LocallyNameless.Alpha",
        "fct-package": "unbound",
        "fct-signature": "Maybe [AnyName] -\u003e Maybe [AnyName] -\u003e Maybe [AnyName]",
        "fct-source": "src/Unbound-LocallyNameless-Alpha.html#combine",
        "fct-type": "function",
        "title": "combine"
      },
      "index": {
        "description": "",
        "hierarchy": "Unbound LocallyNameless Alpha",
        "module": "Unbound.LocallyNameless.Alpha",
        "name": "combine",
        "normalized": "Maybe[AnyName]-\u003eMaybe[AnyName]-\u003eMaybe[AnyName]",
        "package": "unbound",
        "partial": "",
        "signature": "Maybe[AnyName]-\u003eMaybe[AnyName]-\u003eMaybe[AnyName]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Alpha.html#v:compareTupM",
      "description": {
        "fct-module": "Unbound.LocallyNameless.Alpha",
        "fct-package": "unbound",
        "fct-signature": "MTup AlphaD l -\u003e AlphaCtx -\u003e l -\u003e l -\u003e Ordering",
        "fct-source": "src/Unbound-LocallyNameless-Alpha.html#compareTupM",
        "fct-type": "function",
        "title": "compareTupM"
      },
      "index": {
        "description": "",
        "hierarchy": "Unbound LocallyNameless Alpha",
        "module": "Unbound.LocallyNameless.Alpha",
        "name": "compareTupM",
        "normalized": "MTup AlphaD a-\u003eAlphaCtx-\u003ea-\u003ea-\u003eOrdering",
        "package": "unbound",
        "partial": "Tup",
        "signature": "MTup AlphaD l-\u003eAlphaCtx-\u003el-\u003el-\u003eOrdering"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Alpha.html#v:decr",
      "description": {
        "fct-module": "Unbound.LocallyNameless.Alpha",
        "fct-package": "unbound",
        "fct-signature": "AlphaCtx -\u003e AlphaCtx",
        "fct-source": "src/Unbound-LocallyNameless-Alpha.html#decr",
        "fct-type": "function",
        "title": "decr"
      },
      "index": {
        "description": "",
        "hierarchy": "Unbound LocallyNameless Alpha",
        "module": "Unbound.LocallyNameless.Alpha",
        "name": "decr",
        "normalized": "AlphaCtx-\u003eAlphaCtx",
        "package": "unbound",
        "partial": "",
        "signature": "AlphaCtx-\u003eAlphaCtx"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Alpha.html#v:embed",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct an embedded term, which is an instance of \u003ccode\u003e\u003ca\u003eEmbed\u003c/a\u003e\u003c/code\u003e\n   with any number of enclosing \u003ccode\u003e\u003ca\u003eShift\u003c/a\u003e\u003c/code\u003es.  That is, \u003ccode\u003eembed\u003c/code\u003e can have\n   any of the types\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003et -\u003e Embed t\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003et -\u003e Shift (Embed t)\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003et -\u003e Shift (Shift (Embed t))\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eand so on.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless.Alpha",
        "fct-package": "unbound",
        "fct-signature": "Embedded e -\u003e e",
        "fct-source": "src/Unbound-LocallyNameless-Alpha.html#embed",
        "fct-type": "method",
        "title": "embed"
      },
      "index": {
        "description": "Construct an embedded term which is an instance of Embed with any number of enclosing Shift That is embed can have any of the types Embed Shift Embed Shift Shift Embed and so on",
        "hierarchy": "Unbound LocallyNameless Alpha",
        "module": "Unbound.LocallyNameless.Alpha",
        "name": "embed",
        "normalized": "Embedded a-\u003ea",
        "package": "unbound",
        "partial": "",
        "signature": "Embedded e-\u003ee"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Alpha.html#v:findpat",
      "description": {
        "fct-descr": "\u003cp\u003eFind the (first) index of the name in the pattern, if it exists.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless.Alpha",
        "fct-package": "unbound",
        "fct-signature": "a -\u003e AnyName -\u003e Maybe Integer",
        "fct-source": "src/Unbound-LocallyNameless-Alpha.html#findpat",
        "fct-type": "function",
        "title": "findpat"
      },
      "index": {
        "description": "Find the first index of the name in the pattern if it exists",
        "hierarchy": "Unbound LocallyNameless Alpha",
        "module": "Unbound.LocallyNameless.Alpha",
        "name": "findpat",
        "normalized": "a-\u003eAnyName-\u003eMaybe Integer",
        "package": "unbound",
        "partial": "",
        "signature": "a-\u003eAnyName-\u003eMaybe Integer"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Alpha.html#v:findpatD",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Unbound.LocallyNameless.Alpha",
        "fct-package": "unbound",
        "fct-signature": "a -\u003e AnyName -\u003e FindResult",
        "fct-source": "src/Unbound-LocallyNameless-Alpha.html#AlphaD",
        "fct-type": "function",
        "title": "findpatD"
      },
      "index": {
        "description": "",
        "hierarchy": "Unbound LocallyNameless Alpha",
        "module": "Unbound.LocallyNameless.Alpha",
        "name": "findpatD",
        "normalized": "a-\u003eAnyName-\u003eFindResult",
        "package": "unbound",
        "partial": "",
        "signature": "a-\u003eAnyName-\u003eFindResult"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Alpha.html#v:findpatL",
      "description": {
        "fct-module": "Unbound.LocallyNameless.Alpha",
        "fct-package": "unbound",
        "fct-signature": "MTup AlphaD l -\u003e l -\u003e AnyName -\u003e FindResult",
        "fct-source": "src/Unbound-LocallyNameless-Alpha.html#findpatL",
        "fct-type": "function",
        "title": "findpatL"
      },
      "index": {
        "description": "",
        "hierarchy": "Unbound LocallyNameless Alpha",
        "module": "Unbound.LocallyNameless.Alpha",
        "name": "findpatL",
        "normalized": "MTup AlphaD a-\u003ea-\u003eAnyName-\u003eFindResult",
        "package": "unbound",
        "partial": "",
        "signature": "MTup AlphaD l-\u003el-\u003eAnyName-\u003eFindResult"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Alpha.html#v:findpatR1",
      "description": {
        "fct-module": "Unbound.LocallyNameless.Alpha",
        "fct-package": "unbound",
        "fct-signature": "R1 AlphaD b -\u003e b -\u003e AnyName -\u003e FindResult",
        "fct-source": "src/Unbound-LocallyNameless-Alpha.html#findpatR1",
        "fct-type": "function",
        "title": "findpatR1"
      },
      "index": {
        "description": "",
        "hierarchy": "Unbound LocallyNameless Alpha",
        "module": "Unbound.LocallyNameless.Alpha",
        "name": "findpatR1",
        "normalized": "R AlphaD a-\u003ea-\u003eAnyName-\u003eFindResult",
        "package": "unbound",
        "partial": "",
        "signature": "R AlphaD b-\u003eb-\u003eAnyName-\u003eFindResult"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Alpha.html#v:findpatrec",
      "description": {
        "fct-descr": "\u003cp\u003eFind the (first) index of the name in the pattern if one\n   exists; otherwise, return the number of names encountered\n   instead.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless.Alpha",
        "fct-package": "unbound",
        "fct-signature": "a -\u003e AnyName -\u003e FindResult",
        "fct-source": "src/Unbound-LocallyNameless-Alpha.html#findpatrec",
        "fct-type": "method",
        "title": "findpatrec"
      },
      "index": {
        "description": "Find the first index of the name in the pattern if one exists otherwise return the number of names encountered instead",
        "hierarchy": "Unbound LocallyNameless Alpha",
        "module": "Unbound.LocallyNameless.Alpha",
        "name": "findpatrec",
        "normalized": "a-\u003eAnyName-\u003eFindResult",
        "package": "unbound",
        "partial": "",
        "signature": "a-\u003eAnyName-\u003eFindResult"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Alpha.html#v:freshen-39-",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ccode\u003efreshen\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless.Alpha",
        "fct-package": "unbound",
        "fct-signature": "AlphaCtx -\u003e a -\u003e m (a, Perm AnyName)",
        "fct-source": "src/Unbound-LocallyNameless-Alpha.html#freshen%27",
        "fct-type": "method",
        "title": "freshen'"
      },
      "index": {
        "description": "See freshen",
        "hierarchy": "Unbound LocallyNameless Alpha",
        "module": "Unbound.LocallyNameless.Alpha",
        "name": "freshen'",
        "normalized": "AlphaCtx-\u003ea-\u003eb(a,Perm AnyName)",
        "package": "unbound",
        "partial": "",
        "signature": "AlphaCtx-\u003ea-\u003em(a,Perm AnyName)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Alpha.html#v:freshenD",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Unbound.LocallyNameless.Alpha",
        "fct-package": "unbound",
        "fct-signature": "AlphaCtx -\u003e a -\u003e m (a, Perm AnyName)",
        "fct-source": "src/Unbound-LocallyNameless-Alpha.html#AlphaD",
        "fct-type": "function",
        "title": "freshenD"
      },
      "index": {
        "description": "",
        "hierarchy": "Unbound LocallyNameless Alpha",
        "module": "Unbound.LocallyNameless.Alpha",
        "name": "freshenD",
        "normalized": "AlphaCtx-\u003ea-\u003eb(a,Perm AnyName)",
        "package": "unbound",
        "partial": "",
        "signature": "AlphaCtx-\u003ea-\u003em(a,Perm AnyName)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Alpha.html#v:freshenL",
      "description": {
        "fct-module": "Unbound.LocallyNameless.Alpha",
        "fct-package": "unbound",
        "fct-signature": "MTup AlphaD l -\u003e AlphaCtx -\u003e l -\u003e m (l, Perm AnyName)",
        "fct-source": "src/Unbound-LocallyNameless-Alpha.html#freshenL",
        "fct-type": "function",
        "title": "freshenL"
      },
      "index": {
        "description": "",
        "hierarchy": "Unbound LocallyNameless Alpha",
        "module": "Unbound.LocallyNameless.Alpha",
        "name": "freshenL",
        "normalized": "MTup AlphaD a-\u003eAlphaCtx-\u003ea-\u003eb(a,Perm AnyName)",
        "package": "unbound",
        "partial": "",
        "signature": "MTup AlphaD l-\u003eAlphaCtx-\u003el-\u003em(l,Perm AnyName)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Alpha.html#v:freshenR1",
      "description": {
        "fct-module": "Unbound.LocallyNameless.Alpha",
        "fct-package": "unbound",
        "fct-signature": "R1 AlphaD a -\u003e AlphaCtx -\u003e a -\u003e m (a, Perm AnyName)",
        "fct-source": "src/Unbound-LocallyNameless-Alpha.html#freshenR1",
        "fct-type": "function",
        "title": "freshenR1"
      },
      "index": {
        "description": "",
        "hierarchy": "Unbound LocallyNameless Alpha",
        "module": "Unbound.LocallyNameless.Alpha",
        "name": "freshenR1",
        "normalized": "R AlphaD a-\u003eAlphaCtx-\u003ea-\u003eb(a,Perm AnyName)",
        "package": "unbound",
        "partial": "",
        "signature": "R AlphaD a-\u003eAlphaCtx-\u003ea-\u003em(a,Perm AnyName)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Alpha.html#v:fv-39-",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ccode\u003efv\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless.Alpha",
        "fct-package": "unbound",
        "fct-signature": "AlphaCtx -\u003e a -\u003e f AnyName",
        "fct-source": "src/Unbound-LocallyNameless-Alpha.html#fv%27",
        "fct-type": "method",
        "title": "fv'"
      },
      "index": {
        "description": "See fv",
        "hierarchy": "Unbound LocallyNameless Alpha",
        "module": "Unbound.LocallyNameless.Alpha",
        "name": "fv'",
        "normalized": "AlphaCtx-\u003ea-\u003eb AnyName",
        "package": "unbound",
        "partial": "",
        "signature": "AlphaCtx-\u003ea-\u003ef AnyName"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Alpha.html#v:fv1",
      "description": {
        "fct-module": "Unbound.LocallyNameless.Alpha",
        "fct-package": "unbound",
        "fct-signature": "MTup AlphaD l -\u003e AlphaCtx -\u003e l -\u003e f AnyName",
        "fct-source": "src/Unbound-LocallyNameless-Alpha.html#fv1",
        "fct-type": "function",
        "title": "fv1"
      },
      "index": {
        "description": "",
        "hierarchy": "Unbound LocallyNameless Alpha",
        "module": "Unbound.LocallyNameless.Alpha",
        "name": "fv1",
        "normalized": "MTup AlphaD a-\u003eAlphaCtx-\u003ea-\u003eb AnyName",
        "package": "unbound",
        "partial": "",
        "signature": "MTup AlphaD l-\u003eAlphaCtx-\u003el-\u003ef AnyName"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Alpha.html#v:fvD",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Unbound.LocallyNameless.Alpha",
        "fct-package": "unbound",
        "fct-signature": "AlphaCtx -\u003e a -\u003e f AnyName",
        "fct-source": "src/Unbound-LocallyNameless-Alpha.html#AlphaD",
        "fct-type": "function",
        "title": "fvD"
      },
      "index": {
        "description": "",
        "hierarchy": "Unbound LocallyNameless Alpha",
        "module": "Unbound.LocallyNameless.Alpha",
        "name": "fvD",
        "normalized": "AlphaCtx-\u003ea-\u003eb AnyName",
        "package": "unbound",
        "partial": "",
        "signature": "AlphaCtx-\u003ea-\u003ef AnyName"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Alpha.html#v:fvR1",
      "description": {
        "fct-module": "Unbound.LocallyNameless.Alpha",
        "fct-package": "unbound",
        "fct-signature": "R1 AlphaD a -\u003e AlphaCtx -\u003e a -\u003e f AnyName",
        "fct-source": "src/Unbound-LocallyNameless-Alpha.html#fvR1",
        "fct-type": "function",
        "title": "fvR1"
      },
      "index": {
        "description": "",
        "hierarchy": "Unbound LocallyNameless Alpha",
        "module": "Unbound.LocallyNameless.Alpha",
        "name": "fvR1",
        "normalized": "R AlphaD a-\u003eAlphaCtx-\u003ea-\u003eb AnyName",
        "package": "unbound",
        "partial": "",
        "signature": "R AlphaD a-\u003eAlphaCtx-\u003ea-\u003ef AnyName"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Alpha.html#v:incr",
      "description": {
        "fct-module": "Unbound.LocallyNameless.Alpha",
        "fct-package": "unbound",
        "fct-signature": "AlphaCtx -\u003e AlphaCtx",
        "fct-source": "src/Unbound-LocallyNameless-Alpha.html#incr",
        "fct-type": "function",
        "title": "incr"
      },
      "index": {
        "description": "",
        "hierarchy": "Unbound LocallyNameless Alpha",
        "module": "Unbound.LocallyNameless.Alpha",
        "name": "incr",
        "normalized": "AlphaCtx-\u003eAlphaCtx",
        "package": "unbound",
        "partial": "",
        "signature": "AlphaCtx-\u003eAlphaCtx"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Alpha.html#v:initial",
      "description": {
        "fct-module": "Unbound.LocallyNameless.Alpha",
        "fct-package": "unbound",
        "fct-signature": "AlphaCtx",
        "fct-source": "src/Unbound-LocallyNameless-Alpha.html#initial",
        "fct-type": "function",
        "title": "initial"
      },
      "index": {
        "description": "",
        "hierarchy": "Unbound LocallyNameless Alpha",
        "module": "Unbound.LocallyNameless.Alpha",
        "name": "initial",
        "normalized": "",
        "package": "unbound",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Alpha.html#v:isEmbed",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eisEmbed\u003c/code\u003e is needed internally for the implementation of\n   \u003ccode\u003eisPat\u003c/code\u003e.  \u003ccode\u003eisEmbed\u003c/code\u003e is true for terms wrapped in \u003ccode\u003eEmbed\u003c/code\u003e and zero\n   or more occurrences of \u003ccode\u003eShift\u003c/code\u003e.  The default implementation\n   simply returns \u003ccode\u003eFalse\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless.Alpha",
        "fct-package": "unbound",
        "fct-signature": "a -\u003e Bool",
        "fct-source": "src/Unbound-LocallyNameless-Alpha.html#isEmbed",
        "fct-type": "method",
        "title": "isEmbed"
      },
      "index": {
        "description": "isEmbed is needed internally for the implementation of isPat isEmbed is true for terms wrapped in Embed and zero or more occurrences of Shift The default implementation simply returns False",
        "hierarchy": "Unbound LocallyNameless Alpha",
        "module": "Unbound.LocallyNameless.Alpha",
        "name": "isEmbed",
        "normalized": "a-\u003eBool",
        "package": "unbound",
        "partial": "Embed",
        "signature": "a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Alpha.html#v:isEmbedD",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Unbound.LocallyNameless.Alpha",
        "fct-package": "unbound",
        "fct-signature": "a -\u003e Bool",
        "fct-source": "src/Unbound-LocallyNameless-Alpha.html#AlphaD",
        "fct-type": "function",
        "title": "isEmbedD"
      },
      "index": {
        "description": "",
        "hierarchy": "Unbound LocallyNameless Alpha",
        "module": "Unbound.LocallyNameless.Alpha",
        "name": "isEmbedD",
        "normalized": "a-\u003eBool",
        "package": "unbound",
        "partial": "Embed",
        "signature": "a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Alpha.html#v:isPat",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eisPat x\u003c/code\u003e dynamically checks whether \u003ccode\u003ex\u003c/code\u003e can be used as a valid\n   pattern.  The default instance returns \u003ccode\u003eJust\u003c/code\u003e if at all\n   possible.  If successful, returns a list of names bound by the\n   pattern.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless.Alpha",
        "fct-package": "unbound",
        "fct-signature": "a -\u003e Maybe [AnyName]",
        "fct-source": "src/Unbound-LocallyNameless-Alpha.html#isPat",
        "fct-type": "method",
        "title": "isPat"
      },
      "index": {
        "description": "isPat dynamically checks whether can be used as valid pattern The default instance returns Just if at all possible If successful returns list of names bound by the pattern",
        "hierarchy": "Unbound LocallyNameless Alpha",
        "module": "Unbound.LocallyNameless.Alpha",
        "name": "isPat",
        "normalized": "a-\u003eMaybe[AnyName]",
        "package": "unbound",
        "partial": "Pat",
        "signature": "a-\u003eMaybe[AnyName]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Alpha.html#v:isPatD",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Unbound.LocallyNameless.Alpha",
        "fct-package": "unbound",
        "fct-signature": "a -\u003e Maybe [AnyName]",
        "fct-source": "src/Unbound-LocallyNameless-Alpha.html#AlphaD",
        "fct-type": "function",
        "title": "isPatD"
      },
      "index": {
        "description": "",
        "hierarchy": "Unbound LocallyNameless Alpha",
        "module": "Unbound.LocallyNameless.Alpha",
        "name": "isPatD",
        "normalized": "a-\u003eMaybe[AnyName]",
        "package": "unbound",
        "partial": "Pat",
        "signature": "a-\u003eMaybe[AnyName]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Alpha.html#v:isPatR1",
      "description": {
        "fct-module": "Unbound.LocallyNameless.Alpha",
        "fct-package": "unbound",
        "fct-signature": "R1 AlphaD b -\u003e b -\u003e Maybe [AnyName]",
        "fct-source": "src/Unbound-LocallyNameless-Alpha.html#isPatR1",
        "fct-type": "function",
        "title": "isPatR1"
      },
      "index": {
        "description": "",
        "hierarchy": "Unbound LocallyNameless Alpha",
        "module": "Unbound.LocallyNameless.Alpha",
        "name": "isPatR1",
        "normalized": "R AlphaD a-\u003ea-\u003eMaybe[AnyName]",
        "package": "unbound",
        "partial": "Pat",
        "signature": "R AlphaD b-\u003eb-\u003eMaybe[AnyName]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Alpha.html#v:isTerm",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eisTerm x\u003c/code\u003e dynamically checks whether \u003ccode\u003ex\u003c/code\u003e can be used as a\n   valid term. The default instance returns \u003ccode\u003eTrue\u003c/code\u003e if at all\n   possible.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless.Alpha",
        "fct-package": "unbound",
        "fct-signature": "a -\u003e Bool",
        "fct-source": "src/Unbound-LocallyNameless-Alpha.html#isTerm",
        "fct-type": "method",
        "title": "isTerm"
      },
      "index": {
        "description": "isTerm dynamically checks whether can be used as valid term The default instance returns True if at all possible",
        "hierarchy": "Unbound LocallyNameless Alpha",
        "module": "Unbound.LocallyNameless.Alpha",
        "name": "isTerm",
        "normalized": "a-\u003eBool",
        "package": "unbound",
        "partial": "Term",
        "signature": "a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Alpha.html#v:isTermD",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Unbound.LocallyNameless.Alpha",
        "fct-package": "unbound",
        "fct-signature": "a -\u003e Bool",
        "fct-source": "src/Unbound-LocallyNameless-Alpha.html#AlphaD",
        "fct-type": "function",
        "title": "isTermD"
      },
      "index": {
        "description": "",
        "hierarchy": "Unbound LocallyNameless Alpha",
        "module": "Unbound.LocallyNameless.Alpha",
        "name": "isTermD",
        "normalized": "a-\u003eBool",
        "package": "unbound",
        "partial": "Term",
        "signature": "a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Alpha.html#v:isTermR1",
      "description": {
        "fct-module": "Unbound.LocallyNameless.Alpha",
        "fct-package": "unbound",
        "fct-signature": "R1 AlphaD b -\u003e b -\u003e Bool",
        "fct-source": "src/Unbound-LocallyNameless-Alpha.html#isTermR1",
        "fct-type": "function",
        "title": "isTermR1"
      },
      "index": {
        "description": "",
        "hierarchy": "Unbound LocallyNameless Alpha",
        "module": "Unbound.LocallyNameless.Alpha",
        "name": "isTermR1",
        "normalized": "R AlphaD a-\u003ea-\u003eBool",
        "package": "unbound",
        "partial": "Term",
        "signature": "R AlphaD b-\u003eb-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Alpha.html#v:level",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Unbound.LocallyNameless.Alpha",
        "fct-package": "unbound",
        "fct-signature": "Integer",
        "fct-source": "src/Unbound-LocallyNameless-Alpha.html#AlphaCtx",
        "fct-type": "function",
        "title": "level"
      },
      "index": {
        "description": "",
        "hierarchy": "Unbound LocallyNameless Alpha",
        "module": "Unbound.LocallyNameless.Alpha",
        "name": "level",
        "normalized": "",
        "package": "unbound",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Alpha.html#v:lfreshen-39-",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ccode\u003elfreshen\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless.Alpha",
        "fct-package": "unbound",
        "fct-signature": "AlphaCtx -\u003e a -\u003e (a -\u003e Perm AnyName -\u003e m b) -\u003e m b",
        "fct-source": "src/Unbound-LocallyNameless-Alpha.html#lfreshen%27",
        "fct-type": "method",
        "title": "lfreshen'"
      },
      "index": {
        "description": "See lfreshen",
        "hierarchy": "Unbound LocallyNameless Alpha",
        "module": "Unbound.LocallyNameless.Alpha",
        "name": "lfreshen'",
        "normalized": "AlphaCtx-\u003ea-\u003e(a-\u003ePerm AnyName-\u003eb c)-\u003eb c",
        "package": "unbound",
        "partial": "",
        "signature": "AlphaCtx-\u003ea-\u003e(a-\u003ePerm AnyName-\u003em b)-\u003em b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Alpha.html#v:lfreshenD",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Unbound.LocallyNameless.Alpha",
        "fct-package": "unbound",
        "fct-signature": "AlphaCtx -\u003e a -\u003e (a -\u003e Perm AnyName -\u003e m b) -\u003e m b",
        "fct-source": "src/Unbound-LocallyNameless-Alpha.html#AlphaD",
        "fct-type": "function",
        "title": "lfreshenD"
      },
      "index": {
        "description": "",
        "hierarchy": "Unbound LocallyNameless Alpha",
        "module": "Unbound.LocallyNameless.Alpha",
        "name": "lfreshenD",
        "normalized": "AlphaCtx-\u003ea-\u003e(a-\u003ePerm AnyName-\u003eb c)-\u003eb c",
        "package": "unbound",
        "partial": "",
        "signature": "AlphaCtx-\u003ea-\u003e(a-\u003ePerm AnyName-\u003em b)-\u003em b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Alpha.html#v:lfreshenL",
      "description": {
        "fct-module": "Unbound.LocallyNameless.Alpha",
        "fct-package": "unbound",
        "fct-signature": "MTup AlphaD l -\u003e AlphaCtx -\u003e l -\u003e (l -\u003e Perm AnyName -\u003e m b) -\u003e m b",
        "fct-source": "src/Unbound-LocallyNameless-Alpha.html#lfreshenL",
        "fct-type": "function",
        "title": "lfreshenL"
      },
      "index": {
        "description": "",
        "hierarchy": "Unbound LocallyNameless Alpha",
        "module": "Unbound.LocallyNameless.Alpha",
        "name": "lfreshenL",
        "normalized": "MTup AlphaD a-\u003eAlphaCtx-\u003ea-\u003e(a-\u003ePerm AnyName-\u003eb c)-\u003eb c",
        "package": "unbound",
        "partial": "",
        "signature": "MTup AlphaD l-\u003eAlphaCtx-\u003el-\u003e(l-\u003ePerm AnyName-\u003em b)-\u003em b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Alpha.html#v:lfreshenR1",
      "description": {
        "fct-module": "Unbound.LocallyNameless.Alpha",
        "fct-package": "unbound",
        "fct-signature": "R1 AlphaD a -\u003e AlphaCtx -\u003e a -\u003e (a -\u003e Perm AnyName -\u003e m b) -\u003e m b",
        "fct-source": "src/Unbound-LocallyNameless-Alpha.html#lfreshenR1",
        "fct-type": "function",
        "title": "lfreshenR1"
      },
      "index": {
        "description": "",
        "hierarchy": "Unbound LocallyNameless Alpha",
        "module": "Unbound.LocallyNameless.Alpha",
        "name": "lfreshenR1",
        "normalized": "R AlphaD a-\u003eAlphaCtx-\u003ea-\u003e(a-\u003ePerm AnyName-\u003eb c)-\u003eb c",
        "package": "unbound",
        "partial": "",
        "signature": "R AlphaD a-\u003eAlphaCtx-\u003ea-\u003e(a-\u003ePerm AnyName-\u003em b)-\u003em b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Alpha.html#v:mode",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Unbound.LocallyNameless.Alpha",
        "fct-package": "unbound",
        "fct-signature": "Mode",
        "fct-source": "src/Unbound-LocallyNameless-Alpha.html#AlphaCtx",
        "fct-type": "function",
        "title": "mode"
      },
      "index": {
        "description": "",
        "hierarchy": "Unbound LocallyNameless Alpha",
        "module": "Unbound.LocallyNameless.Alpha",
        "name": "mode",
        "normalized": "",
        "package": "unbound",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Alpha.html#v:nthName",
      "description": {
        "fct-descr": "\u003cp\u003eIf we see a name, check whether the index is 0: if it is, we've\n   found the name we're looking for, otherwise continue with a\n   decremented index.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless.Alpha",
        "fct-package": "unbound",
        "fct-signature": "AnyName -\u003e NthCont",
        "fct-source": "src/Unbound-LocallyNameless-Alpha.html#nthName",
        "fct-type": "function",
        "title": "nthName"
      },
      "index": {
        "description": "If we see name check whether the index is if it is we ve found the name we re looking for otherwise continue with decremented index",
        "hierarchy": "Unbound LocallyNameless Alpha",
        "module": "Unbound.LocallyNameless.Alpha",
        "name": "nthName",
        "normalized": "AnyName-\u003eNthCont",
        "package": "unbound",
        "partial": "Name",
        "signature": "AnyName-\u003eNthCont"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Alpha.html#v:nthpat",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003enthpat\u003c/a\u003e\u003c/code\u003e b n\u003c/code\u003e looks up up the \u003ccode\u003en\u003c/code\u003eth name in the pattern \u003ccode\u003eb\u003c/code\u003e\n (zero-indexed).  PRECONDITION: the number of names in the pattern\n must be at least \u003ccode\u003en\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless.Alpha",
        "fct-package": "unbound",
        "fct-signature": "a -\u003e Integer -\u003e AnyName",
        "fct-source": "src/Unbound-LocallyNameless-Alpha.html#nthpat",
        "fct-type": "function",
        "title": "nthpat"
      },
      "index": {
        "description": "nthpat looks up up the th name in the pattern zero-indexed PRECONDITION the number of names in the pattern must be at least",
        "hierarchy": "Unbound LocallyNameless Alpha",
        "module": "Unbound.LocallyNameless.Alpha",
        "name": "nthpat",
        "normalized": "a-\u003eInteger-\u003eAnyName",
        "package": "unbound",
        "partial": "",
        "signature": "a-\u003eInteger-\u003eAnyName"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Alpha.html#v:nthpatD",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Unbound.LocallyNameless.Alpha",
        "fct-package": "unbound",
        "fct-signature": "a -\u003e NthCont",
        "fct-source": "src/Unbound-LocallyNameless-Alpha.html#AlphaD",
        "fct-type": "function",
        "title": "nthpatD"
      },
      "index": {
        "description": "",
        "hierarchy": "Unbound LocallyNameless Alpha",
        "module": "Unbound.LocallyNameless.Alpha",
        "name": "nthpatD",
        "normalized": "a-\u003eNthCont",
        "package": "unbound",
        "partial": "",
        "signature": "a-\u003eNthCont"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Alpha.html#v:nthpatL",
      "description": {
        "fct-module": "Unbound.LocallyNameless.Alpha",
        "fct-package": "unbound",
        "fct-signature": "MTup AlphaD l -\u003e l -\u003e NthCont",
        "fct-source": "src/Unbound-LocallyNameless-Alpha.html#nthpatL",
        "fct-type": "function",
        "title": "nthpatL"
      },
      "index": {
        "description": "",
        "hierarchy": "Unbound LocallyNameless Alpha",
        "module": "Unbound.LocallyNameless.Alpha",
        "name": "nthpatL",
        "normalized": "MTup AlphaD a-\u003ea-\u003eNthCont",
        "package": "unbound",
        "partial": "",
        "signature": "MTup AlphaD l-\u003el-\u003eNthCont"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Alpha.html#v:nthpatR1",
      "description": {
        "fct-module": "Unbound.LocallyNameless.Alpha",
        "fct-package": "unbound",
        "fct-signature": "R1 AlphaD b -\u003e b -\u003e NthCont",
        "fct-source": "src/Unbound-LocallyNameless-Alpha.html#nthpatR1",
        "fct-type": "function",
        "title": "nthpatR1"
      },
      "index": {
        "description": "",
        "hierarchy": "Unbound LocallyNameless Alpha",
        "module": "Unbound.LocallyNameless.Alpha",
        "name": "nthpatR1",
        "normalized": "R AlphaD a-\u003ea-\u003eNthCont",
        "package": "unbound",
        "partial": "",
        "signature": "R AlphaD b-\u003eb-\u003eNthCont"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Alpha.html#v:nthpatrec",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003enthpatrec\u003c/a\u003e\u003c/code\u003e p n\u003c/code\u003e looks up the \u003ccode\u003en\u003c/code\u003eth name in the pattern \u003ccode\u003ep\u003c/code\u003e\n (zero-indexed), returning the number of names encountered if not\n found.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless.Alpha",
        "fct-package": "unbound",
        "fct-signature": "a -\u003e NthCont",
        "fct-source": "src/Unbound-LocallyNameless-Alpha.html#nthpatrec",
        "fct-type": "method",
        "title": "nthpatrec"
      },
      "index": {
        "description": "nthpatrec looks up the th name in the pattern zero-indexed returning the number of names encountered if not found",
        "hierarchy": "Unbound LocallyNameless Alpha",
        "module": "Unbound.LocallyNameless.Alpha",
        "name": "nthpatrec",
        "normalized": "a-\u003eNthCont",
        "package": "unbound",
        "partial": "",
        "signature": "a-\u003eNthCont"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Alpha.html#v:open",
      "description": {
        "fct-descr": "\u003cp\u003eReplace bound names by free names.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless.Alpha",
        "fct-package": "unbound",
        "fct-signature": "AlphaCtx -\u003e b -\u003e a -\u003e a",
        "fct-source": "src/Unbound-LocallyNameless-Alpha.html#open",
        "fct-type": "method",
        "title": "open"
      },
      "index": {
        "description": "Replace bound names by free names",
        "hierarchy": "Unbound LocallyNameless Alpha",
        "module": "Unbound.LocallyNameless.Alpha",
        "name": "open",
        "normalized": "AlphaCtx-\u003ea-\u003eb-\u003eb",
        "package": "unbound",
        "partial": "",
        "signature": "AlphaCtx-\u003eb-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Alpha.html#v:openD",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Unbound.LocallyNameless.Alpha",
        "fct-package": "unbound",
        "fct-signature": "AlphaCtx -\u003e b -\u003e a -\u003e a",
        "fct-source": "src/Unbound-LocallyNameless-Alpha.html#AlphaD",
        "fct-type": "function",
        "title": "openD"
      },
      "index": {
        "description": "",
        "hierarchy": "Unbound LocallyNameless Alpha",
        "module": "Unbound.LocallyNameless.Alpha",
        "name": "openD",
        "normalized": "AlphaCtx-\u003ea-\u003eb-\u003eb",
        "package": "unbound",
        "partial": "",
        "signature": "AlphaCtx-\u003eb-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Alpha.html#v:openP",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eopenP p1 p2\u003c/code\u003e opens the pattern \u003ccode\u003ep2\u003c/code\u003e using the pattern \u003ccode\u003ep1\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless.Alpha",
        "fct-package": "unbound",
        "fct-signature": "p1 -\u003e p2 -\u003e p2",
        "fct-source": "src/Unbound-LocallyNameless-Alpha.html#openP",
        "fct-type": "function",
        "title": "openP"
      },
      "index": {
        "description": "openP p1 p2 opens the pattern p2 using the pattern p1",
        "hierarchy": "Unbound LocallyNameless Alpha",
        "module": "Unbound.LocallyNameless.Alpha",
        "name": "openP",
        "normalized": "a-\u003ea-\u003ea",
        "package": "unbound",
        "partial": "",
        "signature": "p-\u003ep-\u003ep"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Alpha.html#v:openR1",
      "description": {
        "fct-module": "Unbound.LocallyNameless.Alpha",
        "fct-package": "unbound",
        "fct-signature": "R1 AlphaD a -\u003e AlphaCtx -\u003e b -\u003e a -\u003e a",
        "fct-source": "src/Unbound-LocallyNameless-Alpha.html#openR1",
        "fct-type": "function",
        "title": "openR1"
      },
      "index": {
        "description": "",
        "hierarchy": "Unbound LocallyNameless Alpha",
        "module": "Unbound.LocallyNameless.Alpha",
        "name": "openR1",
        "normalized": "R AlphaD a-\u003eAlphaCtx-\u003eb-\u003ea-\u003ea",
        "package": "unbound",
        "partial": "",
        "signature": "R AlphaD a-\u003eAlphaCtx-\u003eb-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Alpha.html#v:openT",
      "description": {
        "fct-descr": "\u003cp\u003eOpen a term using the given pattern.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless.Alpha",
        "fct-package": "unbound",
        "fct-signature": "p -\u003e t -\u003e t",
        "fct-source": "src/Unbound-LocallyNameless-Alpha.html#openT",
        "fct-type": "function",
        "title": "openT"
      },
      "index": {
        "description": "Open term using the given pattern",
        "hierarchy": "Unbound LocallyNameless Alpha",
        "module": "Unbound.LocallyNameless.Alpha",
        "name": "openT",
        "normalized": "a-\u003eb-\u003eb",
        "package": "unbound",
        "partial": "",
        "signature": "p-\u003et-\u003et"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Alpha.html#v:pat",
      "description": {
        "fct-module": "Unbound.LocallyNameless.Alpha",
        "fct-package": "unbound",
        "fct-signature": "AlphaCtx -\u003e AlphaCtx",
        "fct-source": "src/Unbound-LocallyNameless-Alpha.html#pat",
        "fct-type": "function",
        "title": "pat"
      },
      "index": {
        "description": "",
        "hierarchy": "Unbound LocallyNameless Alpha",
        "module": "Unbound.LocallyNameless.Alpha",
        "name": "pat",
        "normalized": "AlphaCtx-\u003eAlphaCtx",
        "package": "unbound",
        "partial": "",
        "signature": "AlphaCtx-\u003eAlphaCtx"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Alpha.html#v:runNthCont",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Unbound.LocallyNameless.Alpha",
        "fct-package": "unbound",
        "fct-signature": "Integer -\u003e NthResult",
        "fct-source": "src/Unbound-LocallyNameless-Alpha.html#NthCont",
        "fct-type": "function",
        "title": "runNthCont"
      },
      "index": {
        "description": "",
        "hierarchy": "Unbound LocallyNameless Alpha",
        "module": "Unbound.LocallyNameless.Alpha",
        "name": "runNthCont",
        "normalized": "Integer-\u003eNthResult",
        "package": "unbound",
        "partial": "Nth Cont",
        "signature": "Integer-\u003eNthResult"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Alpha.html#v:swaps-39-",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ccode\u003eswaps\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless.Alpha",
        "fct-package": "unbound",
        "fct-signature": "AlphaCtx -\u003e Perm AnyName -\u003e a -\u003e a",
        "fct-source": "src/Unbound-LocallyNameless-Alpha.html#swaps%27",
        "fct-type": "method",
        "title": "swaps'"
      },
      "index": {
        "description": "See swaps",
        "hierarchy": "Unbound LocallyNameless Alpha",
        "module": "Unbound.LocallyNameless.Alpha",
        "name": "swaps'",
        "normalized": "AlphaCtx-\u003ePerm AnyName-\u003ea-\u003ea",
        "package": "unbound",
        "partial": "",
        "signature": "AlphaCtx-\u003ePerm AnyName-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Alpha.html#v:swapsD",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Unbound.LocallyNameless.Alpha",
        "fct-package": "unbound",
        "fct-signature": "AlphaCtx -\u003e Perm AnyName -\u003e a -\u003e a",
        "fct-source": "src/Unbound-LocallyNameless-Alpha.html#AlphaD",
        "fct-type": "function",
        "title": "swapsD"
      },
      "index": {
        "description": "",
        "hierarchy": "Unbound LocallyNameless Alpha",
        "module": "Unbound.LocallyNameless.Alpha",
        "name": "swapsD",
        "normalized": "AlphaCtx-\u003ePerm AnyName-\u003ea-\u003ea",
        "package": "unbound",
        "partial": "",
        "signature": "AlphaCtx-\u003ePerm AnyName-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Alpha.html#v:swapsR1",
      "description": {
        "fct-module": "Unbound.LocallyNameless.Alpha",
        "fct-package": "unbound",
        "fct-signature": "R1 AlphaD a -\u003e AlphaCtx -\u003e Perm AnyName -\u003e a -\u003e a",
        "fct-source": "src/Unbound-LocallyNameless-Alpha.html#swapsR1",
        "fct-type": "function",
        "title": "swapsR1"
      },
      "index": {
        "description": "",
        "hierarchy": "Unbound LocallyNameless Alpha",
        "module": "Unbound.LocallyNameless.Alpha",
        "name": "swapsR1",
        "normalized": "R AlphaD a-\u003eAlphaCtx-\u003ePerm AnyName-\u003ea-\u003ea",
        "package": "unbound",
        "partial": "",
        "signature": "R AlphaD a-\u003eAlphaCtx-\u003ePerm AnyName-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Alpha.html#v:term",
      "description": {
        "fct-module": "Unbound.LocallyNameless.Alpha",
        "fct-package": "unbound",
        "fct-signature": "AlphaCtx -\u003e AlphaCtx",
        "fct-source": "src/Unbound-LocallyNameless-Alpha.html#term",
        "fct-type": "function",
        "title": "term"
      },
      "index": {
        "description": "",
        "hierarchy": "Unbound LocallyNameless Alpha",
        "module": "Unbound.LocallyNameless.Alpha",
        "name": "term",
        "normalized": "AlphaCtx-\u003eAlphaCtx",
        "package": "unbound",
        "partial": "",
        "signature": "AlphaCtx-\u003eAlphaCtx"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Alpha.html#v:unembed",
      "description": {
        "fct-descr": "\u003cp\u003eDestruct an embedded term.  \u003ccode\u003eunembed\u003c/code\u003e can have any of the types\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003eEmbed t -\u003e t\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003eShift (Embed t) -\u003e t\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eand so on.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless.Alpha",
        "fct-package": "unbound",
        "fct-signature": "e -\u003e Embedded e",
        "fct-source": "src/Unbound-LocallyNameless-Alpha.html#unembed",
        "fct-type": "method",
        "title": "unembed"
      },
      "index": {
        "description": "Destruct an embedded term unembed can have any of the types Embed Shift Embed and so on",
        "hierarchy": "Unbound LocallyNameless Alpha",
        "module": "Unbound.LocallyNameless.Alpha",
        "name": "unembed",
        "normalized": "a-\u003eEmbedded a",
        "package": "unbound",
        "partial": "",
        "signature": "e-\u003eEmbedded e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Fresh.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eFresh\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eLFresh\u003c/a\u003e\u003c/code\u003e classes, which govern monads with fresh\n name generation capabilities, and the FreshM(T) and LFreshM(T)\n monad (transformers) which provide useful default implementations.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Unbound.LocallyNameless.Fresh",
        "fct-package": "unbound",
        "fct-signature": "module",
        "fct-source": "src/Unbound-LocallyNameless-Fresh.html",
        "fct-type": "module",
        "title": "Fresh"
      },
      "index": {
        "description": "The Fresh and LFresh classes which govern monads with fresh name generation capabilities and the FreshM and LFreshM monad transformers which provide useful default implementations",
        "hierarchy": "Unbound LocallyNameless Fresh",
        "module": "Unbound.LocallyNameless.Fresh",
        "name": "Fresh",
        "normalized": "",
        "package": "unbound",
        "partial": "Fresh",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Fresh.html#t:Fresh",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003eFresh\u003c/code\u003e type class governs monads which can generate new\n   globally unique \u003ccode\u003e\u003ca\u003eName\u003c/a\u003e\u003c/code\u003es based on a given \u003ccode\u003e\u003ca\u003eName\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless.Fresh",
        "fct-package": "unbound",
        "fct-signature": "class",
        "fct-source": "src/Unbound-LocallyNameless-Fresh.html#Fresh",
        "fct-type": "class",
        "title": "Fresh"
      },
      "index": {
        "description": "The Fresh type class governs monads which can generate new globally unique Name based on given Name",
        "hierarchy": "Unbound LocallyNameless Fresh",
        "module": "Unbound.LocallyNameless.Fresh",
        "name": "Fresh",
        "normalized": "",
        "package": "unbound",
        "partial": "Fresh",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Fresh.html#t:FreshM",
      "description": {
        "fct-descr": "\u003cp\u003eA convenient monad which is an instance of \u003ccode\u003e\u003ca\u003eFresh\u003c/a\u003e\u003c/code\u003e.  It keeps\n   track of a global index used for generating fresh names, which is\n   incremented every time \u003ccode\u003e\u003ca\u003efresh\u003c/a\u003e\u003c/code\u003e is called.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless.Fresh",
        "fct-package": "unbound",
        "fct-signature": "type",
        "fct-source": "src/Unbound-LocallyNameless-Fresh.html#FreshM",
        "fct-type": "type",
        "title": "FreshM"
      },
      "index": {
        "description": "convenient monad which is an instance of Fresh It keeps track of global index used for generating fresh names which is incremented every time fresh is called",
        "hierarchy": "Unbound LocallyNameless Fresh",
        "module": "Unbound.LocallyNameless.Fresh",
        "name": "FreshM",
        "normalized": "",
        "package": "unbound",
        "partial": "Fresh",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Fresh.html#t:FreshMT",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003eFreshM\u003c/code\u003e monad transformer.  Keeps track of the lowest index\n   still globally unused, and increments the index every time it is\n   asked for a fresh name.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless.Fresh",
        "fct-package": "unbound",
        "fct-signature": "newtype",
        "fct-source": "src/Unbound-LocallyNameless-Fresh.html#FreshMT",
        "fct-type": "newtype",
        "title": "FreshMT"
      },
      "index": {
        "description": "The FreshM monad transformer Keeps track of the lowest index still globally unused and increments the index every time it is asked for fresh name",
        "hierarchy": "Unbound LocallyNameless Fresh",
        "module": "Unbound.LocallyNameless.Fresh",
        "name": "FreshMT",
        "normalized": "",
        "package": "unbound",
        "partial": "Fresh MT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Fresh.html#t:LFresh",
      "description": {
        "fct-descr": "\u003cp\u003eThis is the class of monads that support freshness in an\n   (implicit) local scope.  Generated names are fresh for the current\n   local scope, not necessarily globally fresh.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless.Fresh",
        "fct-package": "unbound",
        "fct-signature": "class",
        "fct-source": "src/Unbound-LocallyNameless-Fresh.html#LFresh",
        "fct-type": "class",
        "title": "LFresh"
      },
      "index": {
        "description": "This is the class of monads that support freshness in an implicit local scope Generated names are fresh for the current local scope not necessarily globally fresh",
        "hierarchy": "Unbound LocallyNameless Fresh",
        "module": "Unbound.LocallyNameless.Fresh",
        "name": "LFresh",
        "normalized": "",
        "package": "unbound",
        "partial": "LFresh",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Fresh.html#t:LFreshM",
      "description": {
        "fct-descr": "\u003cp\u003eA convenient monad which is an instance of \u003ccode\u003e\u003ca\u003eLFresh\u003c/a\u003e\u003c/code\u003e.  It keeps\n   track of a set of names to avoid, and when asked for a fresh one\n   will choose the first unused numerical name.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless.Fresh",
        "fct-package": "unbound",
        "fct-signature": "type",
        "fct-source": "src/Unbound-LocallyNameless-Fresh.html#LFreshM",
        "fct-type": "type",
        "title": "LFreshM"
      },
      "index": {
        "description": "convenient monad which is an instance of LFresh It keeps track of set of names to avoid and when asked for fresh one will choose the first unused numerical name",
        "hierarchy": "Unbound LocallyNameless Fresh",
        "module": "Unbound.LocallyNameless.Fresh",
        "name": "LFreshM",
        "normalized": "",
        "package": "unbound",
        "partial": "LFresh",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Fresh.html#t:LFreshMT",
      "description": {
        "fct-descr": "\u003cp\u003eThe LFresh monad transformer.  Keeps track of a set of names to\n avoid, and when asked for a fresh one will choose the first numeric\n prefix of the given name which is currently unused.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless.Fresh",
        "fct-package": "unbound",
        "fct-signature": "newtype",
        "fct-source": "src/Unbound-LocallyNameless-Fresh.html#LFreshMT",
        "fct-type": "newtype",
        "title": "LFreshMT"
      },
      "index": {
        "description": "The LFresh monad transformer Keeps track of set of names to avoid and when asked for fresh one will choose the first numeric prefix of the given name which is currently unused",
        "hierarchy": "Unbound LocallyNameless Fresh",
        "module": "Unbound.LocallyNameless.Fresh",
        "name": "LFreshMT",
        "normalized": "",
        "package": "unbound",
        "partial": "LFresh MT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Fresh.html#v:FreshMT",
      "description": {
        "fct-module": "Unbound.LocallyNameless.Fresh",
        "fct-package": "unbound",
        "fct-signature": "FreshMT",
        "fct-source": "src/Unbound-LocallyNameless-Fresh.html#FreshMT",
        "fct-type": "function",
        "title": "FreshMT"
      },
      "index": {
        "description": "",
        "hierarchy": "Unbound LocallyNameless Fresh",
        "module": "Unbound.LocallyNameless.Fresh",
        "name": "FreshMT",
        "normalized": "",
        "package": "unbound",
        "partial": "Fresh MT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Fresh.html#v:LFreshMT",
      "description": {
        "fct-module": "Unbound.LocallyNameless.Fresh",
        "fct-package": "unbound",
        "fct-signature": "LFreshMT",
        "fct-source": "src/Unbound-LocallyNameless-Fresh.html#LFreshMT",
        "fct-type": "function",
        "title": "LFreshMT"
      },
      "index": {
        "description": "",
        "hierarchy": "Unbound LocallyNameless Fresh",
        "module": "Unbound.LocallyNameless.Fresh",
        "name": "LFreshMT",
        "normalized": "",
        "package": "unbound",
        "partial": "LFresh MT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Fresh.html#v:avoid",
      "description": {
        "fct-descr": "\u003cp\u003eAvoid the given names when freshening in the subcomputation,\n   that is, add the given names to the in-scope set.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless.Fresh",
        "fct-package": "unbound",
        "fct-signature": "[AnyName] -\u003e m a -\u003e m a",
        "fct-source": "src/Unbound-LocallyNameless-Fresh.html#avoid",
        "fct-type": "method",
        "title": "avoid"
      },
      "index": {
        "description": "Avoid the given names when freshening in the subcomputation that is add the given names to the in-scope set",
        "hierarchy": "Unbound LocallyNameless Fresh",
        "module": "Unbound.LocallyNameless.Fresh",
        "name": "avoid",
        "normalized": "[AnyName]-\u003ea b-\u003ea b",
        "package": "unbound",
        "partial": "",
        "signature": "[AnyName]-\u003em a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Fresh.html#v:contFreshM",
      "description": {
        "fct-descr": "\u003cp\u003eRun a FreshM computation given a starting index.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless.Fresh",
        "fct-package": "unbound",
        "fct-signature": "FreshM a -\u003e Integer -\u003e a",
        "fct-source": "src/Unbound-LocallyNameless-Fresh.html#contFreshM",
        "fct-type": "function",
        "title": "contFreshM"
      },
      "index": {
        "description": "Run FreshM computation given starting index",
        "hierarchy": "Unbound LocallyNameless Fresh",
        "module": "Unbound.LocallyNameless.Fresh",
        "name": "contFreshM",
        "normalized": "FreshM a-\u003eInteger-\u003ea",
        "package": "unbound",
        "partial": "Fresh",
        "signature": "FreshM a-\u003eInteger-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Fresh.html#v:contFreshMT",
      "description": {
        "fct-descr": "\u003cp\u003eRun a \u003ccode\u003e\u003ca\u003eFreshMT\u003c/a\u003e\u003c/code\u003e computation given a starting index for fresh name\n   generation.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless.Fresh",
        "fct-package": "unbound",
        "fct-signature": "FreshMT m a -\u003e Integer -\u003e m a",
        "fct-source": "src/Unbound-LocallyNameless-Fresh.html#contFreshMT",
        "fct-type": "function",
        "title": "contFreshMT"
      },
      "index": {
        "description": "Run FreshMT computation given starting index for fresh name generation",
        "hierarchy": "Unbound LocallyNameless Fresh",
        "module": "Unbound.LocallyNameless.Fresh",
        "name": "contFreshMT",
        "normalized": "FreshMT a b-\u003eInteger-\u003ea b",
        "package": "unbound",
        "partial": "Fresh MT",
        "signature": "FreshMT m a-\u003eInteger-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Fresh.html#v:contLFreshM",
      "description": {
        "fct-descr": "\u003cp\u003eRun a LFreshM computation given a set of names to avoid.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless.Fresh",
        "fct-package": "unbound",
        "fct-signature": "LFreshM a -\u003e Set AnyName -\u003e a",
        "fct-source": "src/Unbound-LocallyNameless-Fresh.html#contLFreshM",
        "fct-type": "function",
        "title": "contLFreshM"
      },
      "index": {
        "description": "Run LFreshM computation given set of names to avoid",
        "hierarchy": "Unbound LocallyNameless Fresh",
        "module": "Unbound.LocallyNameless.Fresh",
        "name": "contLFreshM",
        "normalized": "LFreshM a-\u003eSet AnyName-\u003ea",
        "package": "unbound",
        "partial": "LFresh",
        "signature": "LFreshM a-\u003eSet AnyName-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Fresh.html#v:contLFreshMT",
      "description": {
        "fct-descr": "\u003cp\u003eRun an \u003ccode\u003e\u003ca\u003eLFreshMT\u003c/a\u003e\u003c/code\u003e computation given a set of names to avoid.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless.Fresh",
        "fct-package": "unbound",
        "fct-signature": "LFreshMT m a -\u003e Set AnyName -\u003e m a",
        "fct-source": "src/Unbound-LocallyNameless-Fresh.html#contLFreshMT",
        "fct-type": "function",
        "title": "contLFreshMT"
      },
      "index": {
        "description": "Run an LFreshMT computation given set of names to avoid",
        "hierarchy": "Unbound LocallyNameless Fresh",
        "module": "Unbound.LocallyNameless.Fresh",
        "name": "contLFreshMT",
        "normalized": "LFreshMT a b-\u003eSet AnyName-\u003ea b",
        "package": "unbound",
        "partial": "LFresh MT",
        "signature": "LFreshMT m a-\u003eSet AnyName-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Fresh.html#v:fresh",
      "description": {
        "fct-descr": "\u003cp\u003eGenerate a new globally unique name based on the given one.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless.Fresh",
        "fct-package": "unbound",
        "fct-signature": "Name a -\u003e m (Name a)",
        "fct-source": "src/Unbound-LocallyNameless-Fresh.html#fresh",
        "fct-type": "method",
        "title": "fresh"
      },
      "index": {
        "description": "Generate new globally unique name based on the given one",
        "hierarchy": "Unbound LocallyNameless Fresh",
        "module": "Unbound.LocallyNameless.Fresh",
        "name": "fresh",
        "normalized": "Name a-\u003eb(Name a)",
        "package": "unbound",
        "partial": "",
        "signature": "Name a-\u003em(Name a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Fresh.html#v:getAvoids",
      "description": {
        "fct-descr": "\u003cp\u003eGet the set of names currently being avoided.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless.Fresh",
        "fct-package": "unbound",
        "fct-signature": "m (Set AnyName)",
        "fct-source": "src/Unbound-LocallyNameless-Fresh.html#getAvoids",
        "fct-type": "method",
        "title": "getAvoids"
      },
      "index": {
        "description": "Get the set of names currently being avoided",
        "hierarchy": "Unbound LocallyNameless Fresh",
        "module": "Unbound.LocallyNameless.Fresh",
        "name": "getAvoids",
        "normalized": "",
        "package": "unbound",
        "partial": "Avoids",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Fresh.html#v:lfresh",
      "description": {
        "fct-descr": "\u003cp\u003ePick a new name that is fresh for the current (implicit) scope.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless.Fresh",
        "fct-package": "unbound",
        "fct-signature": "Name a -\u003e m (Name a)",
        "fct-source": "src/Unbound-LocallyNameless-Fresh.html#lfresh",
        "fct-type": "method",
        "title": "lfresh"
      },
      "index": {
        "description": "Pick new name that is fresh for the current implicit scope",
        "hierarchy": "Unbound LocallyNameless Fresh",
        "module": "Unbound.LocallyNameless.Fresh",
        "name": "lfresh",
        "normalized": "Name a-\u003eb(Name a)",
        "package": "unbound",
        "partial": "",
        "signature": "Name a-\u003em(Name a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Fresh.html#v:runFreshM",
      "description": {
        "fct-descr": "\u003cp\u003eRun a FreshM computation (with the global index starting at zero).\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless.Fresh",
        "fct-package": "unbound",
        "fct-signature": "FreshM a -\u003e a",
        "fct-source": "src/Unbound-LocallyNameless-Fresh.html#runFreshM",
        "fct-type": "function",
        "title": "runFreshM"
      },
      "index": {
        "description": "Run FreshM computation with the global index starting at zero",
        "hierarchy": "Unbound LocallyNameless Fresh",
        "module": "Unbound.LocallyNameless.Fresh",
        "name": "runFreshM",
        "normalized": "FreshM a-\u003ea",
        "package": "unbound",
        "partial": "Fresh",
        "signature": "FreshM a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Fresh.html#v:runFreshMT",
      "description": {
        "fct-descr": "\u003cp\u003eRun a \u003ccode\u003e\u003ca\u003eFreshMT\u003c/a\u003e\u003c/code\u003e computation (with the global index starting at zero).\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless.Fresh",
        "fct-package": "unbound",
        "fct-signature": "FreshMT m a -\u003e m a",
        "fct-source": "src/Unbound-LocallyNameless-Fresh.html#runFreshMT",
        "fct-type": "function",
        "title": "runFreshMT"
      },
      "index": {
        "description": "Run FreshMT computation with the global index starting at zero",
        "hierarchy": "Unbound LocallyNameless Fresh",
        "module": "Unbound.LocallyNameless.Fresh",
        "name": "runFreshMT",
        "normalized": "FreshMT a b-\u003ea b",
        "package": "unbound",
        "partial": "Fresh MT",
        "signature": "FreshMT m a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Fresh.html#v:runLFreshM",
      "description": {
        "fct-descr": "\u003cp\u003eRun a LFreshM computation in an empty context.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless.Fresh",
        "fct-package": "unbound",
        "fct-signature": "LFreshM a -\u003e a",
        "fct-source": "src/Unbound-LocallyNameless-Fresh.html#runLFreshM",
        "fct-type": "function",
        "title": "runLFreshM"
      },
      "index": {
        "description": "Run LFreshM computation in an empty context",
        "hierarchy": "Unbound LocallyNameless Fresh",
        "module": "Unbound.LocallyNameless.Fresh",
        "name": "runLFreshM",
        "normalized": "LFreshM a-\u003ea",
        "package": "unbound",
        "partial": "LFresh",
        "signature": "LFreshM a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Fresh.html#v:runLFreshMT",
      "description": {
        "fct-descr": "\u003cp\u003eRun an \u003ccode\u003e\u003ca\u003eLFreshMT\u003c/a\u003e\u003c/code\u003e computation in an empty context.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless.Fresh",
        "fct-package": "unbound",
        "fct-signature": "LFreshMT m a -\u003e m a",
        "fct-source": "src/Unbound-LocallyNameless-Fresh.html#runLFreshMT",
        "fct-type": "function",
        "title": "runLFreshMT"
      },
      "index": {
        "description": "Run an LFreshMT computation in an empty context",
        "hierarchy": "Unbound LocallyNameless Fresh",
        "module": "Unbound.LocallyNameless.Fresh",
        "name": "runLFreshMT",
        "normalized": "LFreshMT a b-\u003ea b",
        "package": "unbound",
        "partial": "LFresh MT",
        "signature": "LFreshMT m a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Fresh.html#v:unFreshMT",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Unbound.LocallyNameless.Fresh",
        "fct-package": "unbound",
        "fct-signature": "StateT Integer m a",
        "fct-source": "src/Unbound-LocallyNameless-Fresh.html#FreshMT",
        "fct-type": "function",
        "title": "unFreshMT"
      },
      "index": {
        "description": "",
        "hierarchy": "Unbound LocallyNameless Fresh",
        "module": "Unbound.LocallyNameless.Fresh",
        "name": "unFreshMT",
        "normalized": "",
        "package": "unbound",
        "partial": "Fresh MT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Fresh.html#v:unLFreshMT",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Unbound.LocallyNameless.Fresh",
        "fct-package": "unbound",
        "fct-signature": "ReaderT (Set AnyName) m a",
        "fct-source": "src/Unbound-LocallyNameless-Fresh.html#LFreshMT",
        "fct-type": "function",
        "title": "unLFreshMT"
      },
      "index": {
        "description": "",
        "hierarchy": "Unbound LocallyNameless Fresh",
        "module": "Unbound.LocallyNameless.Fresh",
        "name": "unLFreshMT",
        "normalized": "",
        "package": "unbound",
        "partial": "LFresh MT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Name.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn implementation of names in a locally nameless representation.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Unbound.LocallyNameless.Name",
        "fct-package": "unbound",
        "fct-signature": "module",
        "fct-source": "src/Unbound-LocallyNameless-Name.html",
        "fct-type": "module",
        "title": "Name"
      },
      "index": {
        "description": "An implementation of names in locally nameless representation",
        "hierarchy": "Unbound LocallyNameless Name",
        "module": "Unbound.LocallyNameless.Name",
        "name": "Name",
        "normalized": "",
        "package": "unbound",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Name.html#t:AnyName",
      "description": {
        "fct-descr": "\u003cp\u003eA name with a hidden (existentially quantified) sort.  To hide\n   the sort of a name, use the \u003ccode\u003e\u003ca\u003eAnyName\u003c/a\u003e\u003c/code\u003e constructor directly; to\n   extract a name with a hidden sort, use \u003ccode\u003e\u003ca\u003etoSortedName\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless.Name",
        "fct-package": "unbound",
        "fct-signature": "data",
        "fct-source": "src/Unbound-LocallyNameless-Name.html#AnyName",
        "fct-type": "data",
        "title": "AnyName"
      },
      "index": {
        "description": "name with hidden existentially quantified sort To hide the sort of name use the AnyName constructor directly to extract name with hidden sort use toSortedName",
        "hierarchy": "Unbound LocallyNameless Name",
        "module": "Unbound.LocallyNameless.Name",
        "name": "AnyName",
        "normalized": "",
        "package": "unbound",
        "partial": "Any Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Name.html#t:Name",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eName\u003c/a\u003e\u003c/code\u003es are things that get bound.  This type is intentionally\n   abstract; to create a \u003ccode\u003e\u003ca\u003eName\u003c/a\u003e\u003c/code\u003e you can use \u003ccode\u003e\u003ca\u003estring2Name\u003c/a\u003e\u003c/code\u003e or\n   \u003ccode\u003e\u003ca\u003einteger2Name\u003c/a\u003e\u003c/code\u003e. The type parameter is a tag, or \u003cem\u003esort\u003c/em\u003e, which\n   tells us what sorts of things this name may stand for. The sort\n   must be a \u003cem\u003erepresentable\u003c/em\u003e type, \u003cem\u003ei.e.\u003c/em\u003e an instance of the \u003ccode\u003eRep\u003c/code\u003e\n   type class from the \u003ccode\u003eRepLib\u003c/code\u003e generic programming framework.\n\u003c/p\u003e\u003cp\u003eTo hide the sort of a name, use \u003ccode\u003e\u003ca\u003eAnyName\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless.Name",
        "fct-package": "unbound",
        "fct-signature": "data",
        "fct-source": "src/Unbound-LocallyNameless-Name.html#Name",
        "fct-type": "data",
        "title": "Name"
      },
      "index": {
        "description": "Name are things that get bound This type is intentionally abstract to create Name you can use string2Name or integer2Name The type parameter is tag or sort which tells us what sorts of things this name may stand for The sort must be representable type i.e an instance of the Rep type class from the RepLib generic programming framework To hide the sort of name use AnyName",
        "hierarchy": "Unbound LocallyNameless Name",
        "module": "Unbound.LocallyNameless.Name",
        "name": "Name",
        "normalized": "",
        "package": "unbound",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Name.html#v:AnyName",
      "description": {
        "fct-module": "Unbound.LocallyNameless.Name",
        "fct-package": "unbound",
        "fct-signature": "AnyName (Name a)",
        "fct-source": "src/Unbound-LocallyNameless-Name.html#AnyName",
        "fct-type": "function",
        "title": "AnyName"
      },
      "index": {
        "description": "",
        "hierarchy": "Unbound LocallyNameless Name",
        "module": "Unbound.LocallyNameless.Name",
        "name": "AnyName",
        "normalized": "",
        "package": "unbound",
        "partial": "Any Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Name.html#v:Bn",
      "description": {
        "fct-module": "Unbound.LocallyNameless.Name",
        "fct-package": "unbound",
        "fct-signature": "Bn (R a) Integer Integer",
        "fct-source": "src/Unbound-LocallyNameless-Name.html#Name",
        "fct-type": "function",
        "title": "Bn"
      },
      "index": {
        "description": "",
        "hierarchy": "Unbound LocallyNameless Name",
        "module": "Unbound.LocallyNameless.Name",
        "name": "Bn",
        "normalized": "",
        "package": "unbound",
        "partial": "Bn",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Name.html#v:Nm",
      "description": {
        "fct-module": "Unbound.LocallyNameless.Name",
        "fct-package": "unbound",
        "fct-signature": "Nm (R a) (String, Integer)",
        "fct-source": "src/Unbound-LocallyNameless-Name.html#Name",
        "fct-type": "function",
        "title": "Nm"
      },
      "index": {
        "description": "",
        "hierarchy": "Unbound LocallyNameless Name",
        "module": "Unbound.LocallyNameless.Name",
        "name": "Nm",
        "normalized": "Nm(R a)(String,Integer)",
        "package": "unbound",
        "partial": "Nm",
        "signature": "Nm(R a)(String,Integer)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Name.html#v:anyName2Integer",
      "description": {
        "fct-descr": "\u003cp\u003eGet the integer index of an \u003ccode\u003e\u003ca\u003eAnyName\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless.Name",
        "fct-package": "unbound",
        "fct-signature": "AnyName -\u003e Integer",
        "fct-source": "src/Unbound-LocallyNameless-Name.html#anyName2Integer",
        "fct-type": "function",
        "title": "anyName2Integer"
      },
      "index": {
        "description": "Get the integer index of an AnyName",
        "hierarchy": "Unbound LocallyNameless Name",
        "module": "Unbound.LocallyNameless.Name",
        "name": "anyName2Integer",
        "normalized": "AnyName-\u003eInteger",
        "package": "unbound",
        "partial": "Name Integer",
        "signature": "AnyName-\u003eInteger"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Name.html#v:anyName2String",
      "description": {
        "fct-descr": "\u003cp\u003eGet the string part of an \u003ccode\u003e\u003ca\u003eAnyName\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless.Name",
        "fct-package": "unbound",
        "fct-signature": "AnyName -\u003e String",
        "fct-source": "src/Unbound-LocallyNameless-Name.html#anyName2String",
        "fct-type": "function",
        "title": "anyName2String"
      },
      "index": {
        "description": "Get the string part of an AnyName",
        "hierarchy": "Unbound LocallyNameless Name",
        "module": "Unbound.LocallyNameless.Name",
        "name": "anyName2String",
        "normalized": "AnyName-\u003eString",
        "package": "unbound",
        "partial": "Name String",
        "signature": "AnyName-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Name.html#v:getR",
      "description": {
        "fct-descr": "\u003cp\u003eDetermine the sort of a \u003ccode\u003e\u003ca\u003eName\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless.Name",
        "fct-package": "unbound",
        "fct-signature": "Name a -\u003e R a",
        "fct-source": "src/Unbound-LocallyNameless-Name.html#getR",
        "fct-type": "function",
        "title": "getR"
      },
      "index": {
        "description": "Determine the sort of Name",
        "hierarchy": "Unbound LocallyNameless Name",
        "module": "Unbound.LocallyNameless.Name",
        "name": "getR",
        "normalized": "Name a-\u003eR a",
        "package": "unbound",
        "partial": "",
        "signature": "Name a-\u003eR a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Name.html#v:integer2Name",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a free \u003ccode\u003e\u003ca\u003eName\u003c/a\u003e\u003c/code\u003e from an \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless.Name",
        "fct-package": "unbound",
        "fct-signature": "Integer -\u003e Name a",
        "fct-source": "src/Unbound-LocallyNameless-Name.html#integer2Name",
        "fct-type": "function",
        "title": "integer2Name"
      },
      "index": {
        "description": "Create free Name from an Integer",
        "hierarchy": "Unbound LocallyNameless Name",
        "module": "Unbound.LocallyNameless.Name",
        "name": "integer2Name",
        "normalized": "Integer-\u003eName a",
        "package": "unbound",
        "partial": "Name",
        "signature": "Integer-\u003eName a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Name.html#v:isBound",
      "description": {
        "fct-descr": "\u003cp\u003eTest whether a name is a bound variable (i.e. a reference to some\n   binding site, represented as a de Bruijn index).  Normal users of\n   the library should not need this function, as it is impossible to\n   encounter a bound name when using the abstract interface provided\n   by \u003ca\u003eUnbound.LocallyNameless\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless.Name",
        "fct-package": "unbound",
        "fct-signature": "Name a -\u003e Bool",
        "fct-source": "src/Unbound-LocallyNameless-Name.html#isBound",
        "fct-type": "function",
        "title": "isBound"
      },
      "index": {
        "description": "Test whether name is bound variable i.e reference to some binding site represented as de Bruijn index Normal users of the library should not need this function as it is impossible to encounter bound name when using the abstract interface provided by Unbound.LocallyNameless",
        "hierarchy": "Unbound LocallyNameless Name",
        "module": "Unbound.LocallyNameless.Name",
        "name": "isBound",
        "normalized": "Name a-\u003eBool",
        "package": "unbound",
        "partial": "Bound",
        "signature": "Name a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Name.html#v:isFree",
      "description": {
        "fct-descr": "\u003cp\u003eTest whether a name is a free variable. Normal users of the\n   library should not need this function, as all the names\n   encountered will be free variables when using the abstract\n   interface provided by \u003ca\u003eUnbound.LocallyNameless\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless.Name",
        "fct-package": "unbound",
        "fct-signature": "Name a -\u003e Bool",
        "fct-source": "src/Unbound-LocallyNameless-Name.html#isFree",
        "fct-type": "function",
        "title": "isFree"
      },
      "index": {
        "description": "Test whether name is free variable Normal users of the library should not need this function as all the names encountered will be free variables when using the abstract interface provided by Unbound.LocallyNameless",
        "hierarchy": "Unbound LocallyNameless Name",
        "module": "Unbound.LocallyNameless.Name",
        "name": "isFree",
        "normalized": "Name a-\u003eBool",
        "package": "unbound",
        "partial": "Free",
        "signature": "Name a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Name.html#v:makeName",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a free \u003ccode\u003e\u003ca\u003eName\u003c/a\u003e\u003c/code\u003e from a \u003ccode\u003eString\u003c/code\u003e and an \u003ccode\u003eInteger\u003c/code\u003e index.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless.Name",
        "fct-package": "unbound",
        "fct-signature": "String -\u003e Integer -\u003e Name a",
        "fct-source": "src/Unbound-LocallyNameless-Name.html#makeName",
        "fct-type": "function",
        "title": "makeName"
      },
      "index": {
        "description": "Create free Name from String and an Integer index",
        "hierarchy": "Unbound LocallyNameless Name",
        "module": "Unbound.LocallyNameless.Name",
        "name": "makeName",
        "normalized": "String-\u003eInteger-\u003eName a",
        "package": "unbound",
        "partial": "Name",
        "signature": "String-\u003eInteger-\u003eName a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Name.html#v:name2Integer",
      "description": {
        "fct-descr": "\u003cp\u003eGet the integer index of a \u003ccode\u003e\u003ca\u003eName\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless.Name",
        "fct-package": "unbound",
        "fct-signature": "Name a -\u003e Integer",
        "fct-source": "src/Unbound-LocallyNameless-Name.html#name2Integer",
        "fct-type": "function",
        "title": "name2Integer"
      },
      "index": {
        "description": "Get the integer index of Name",
        "hierarchy": "Unbound LocallyNameless Name",
        "module": "Unbound.LocallyNameless.Name",
        "name": "name2Integer",
        "normalized": "Name a-\u003eInteger",
        "package": "unbound",
        "partial": "Integer",
        "signature": "Name a-\u003eInteger"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Name.html#v:name2String",
      "description": {
        "fct-descr": "\u003cp\u003eGet the string part of a \u003ccode\u003e\u003ca\u003eName\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless.Name",
        "fct-package": "unbound",
        "fct-signature": "Name a -\u003e String",
        "fct-source": "src/Unbound-LocallyNameless-Name.html#name2String",
        "fct-type": "function",
        "title": "name2String"
      },
      "index": {
        "description": "Get the string part of Name",
        "hierarchy": "Unbound LocallyNameless Name",
        "module": "Unbound.LocallyNameless.Name",
        "name": "name2String",
        "normalized": "Name a-\u003eString",
        "package": "unbound",
        "partial": "String",
        "signature": "Name a-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Name.html#v:rAnyName",
      "description": {
        "fct-module": "Unbound.LocallyNameless.Name",
        "fct-package": "unbound",
        "fct-signature": "R AnyName",
        "fct-source": "src/Unbound-LocallyNameless-Name.html#rAnyName",
        "fct-type": "function",
        "title": "rAnyName"
      },
      "index": {
        "description": "",
        "hierarchy": "Unbound LocallyNameless Name",
        "module": "Unbound.LocallyNameless.Name",
        "name": "rAnyName",
        "normalized": "",
        "package": "unbound",
        "partial": "Any Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Name.html#v:rAnyName1",
      "description": {
        "fct-module": "Unbound.LocallyNameless.Name",
        "fct-package": "unbound",
        "fct-signature": "forall ctx.  R1 ctx AnyName",
        "fct-source": "src/Unbound-LocallyNameless-Name.html#rAnyName1",
        "fct-type": "function",
        "title": "rAnyName1"
      },
      "index": {
        "description": "",
        "hierarchy": "Unbound LocallyNameless Name",
        "module": "Unbound.LocallyNameless.Name",
        "name": "rAnyName1",
        "normalized": "",
        "package": "unbound",
        "partial": "Any Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Name.html#v:rName",
      "description": {
        "fct-module": "Unbound.LocallyNameless.Name",
        "fct-package": "unbound",
        "fct-signature": "R (Name a)",
        "fct-source": "src/Unbound-LocallyNameless-Name.html#rName",
        "fct-type": "function",
        "title": "rName"
      },
      "index": {
        "description": "",
        "hierarchy": "Unbound LocallyNameless Name",
        "module": "Unbound.LocallyNameless.Name",
        "name": "rName",
        "normalized": "",
        "package": "unbound",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Name.html#v:rName1",
      "description": {
        "fct-module": "Unbound.LocallyNameless.Name",
        "fct-package": "unbound",
        "fct-signature": "(ctx (R a), ctx (String, Integer)) -\u003e (ctx (R a), ctx Integer, ctx Integer) -\u003e R1 ctx (Name a)",
        "fct-source": "src/Unbound-LocallyNameless-Name.html#rName1",
        "fct-type": "function",
        "title": "rName1"
      },
      "index": {
        "description": "",
        "hierarchy": "Unbound LocallyNameless Name",
        "module": "Unbound.LocallyNameless.Name",
        "name": "rName1",
        "normalized": "(a(R b),a(String,Integer))-\u003e(a(R b),a Integer,a Integer)-\u003eR a(Name b)",
        "package": "unbound",
        "partial": "Name",
        "signature": "(ctx(R a),ctx(String,Integer))-\u003e(ctx(R a),ctx Integer,ctx Integer)-\u003eR ctx(Name a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Name.html#v:rR",
      "description": {
        "fct-module": "Unbound.LocallyNameless.Name",
        "fct-package": "unbound",
        "fct-signature": "R (R a)",
        "fct-source": "src/Unbound-LocallyNameless-Name.html#rR",
        "fct-type": "function",
        "title": "rR"
      },
      "index": {
        "description": "",
        "hierarchy": "Unbound LocallyNameless Name",
        "module": "Unbound.LocallyNameless.Name",
        "name": "rR",
        "normalized": "",
        "package": "unbound",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Name.html#v:rR1",
      "description": {
        "fct-module": "Unbound.LocallyNameless.Name",
        "fct-package": "unbound",
        "fct-signature": "R1 ctx (R a)",
        "fct-source": "src/Unbound-LocallyNameless-Name.html#rR1",
        "fct-type": "function",
        "title": "rR1"
      },
      "index": {
        "description": "",
        "hierarchy": "Unbound LocallyNameless Name",
        "module": "Unbound.LocallyNameless.Name",
        "name": "rR1",
        "normalized": "",
        "package": "unbound",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Name.html#v:s2n",
      "description": {
        "fct-descr": "\u003cp\u003eConvenient synonym for \u003ccode\u003e\u003ca\u003estring2Name\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless.Name",
        "fct-package": "unbound",
        "fct-signature": "String -\u003e Name a",
        "fct-source": "src/Unbound-LocallyNameless-Name.html#s2n",
        "fct-type": "function",
        "title": "s2n"
      },
      "index": {
        "description": "Convenient synonym for string2Name",
        "hierarchy": "Unbound LocallyNameless Name",
        "module": "Unbound.LocallyNameless.Name",
        "name": "s2n",
        "normalized": "String-\u003eName a",
        "package": "unbound",
        "partial": "",
        "signature": "String-\u003eName a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Name.html#v:string2Name",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a free \u003ccode\u003e\u003ca\u003eName\u003c/a\u003e\u003c/code\u003e from a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless.Name",
        "fct-package": "unbound",
        "fct-signature": "String -\u003e Name a",
        "fct-source": "src/Unbound-LocallyNameless-Name.html#string2Name",
        "fct-type": "function",
        "title": "string2Name"
      },
      "index": {
        "description": "Create free Name from String",
        "hierarchy": "Unbound LocallyNameless Name",
        "module": "Unbound.LocallyNameless.Name",
        "name": "string2Name",
        "normalized": "String-\u003eName a",
        "package": "unbound",
        "partial": "Name",
        "signature": "String-\u003eName a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Name.html#v:toSortedName",
      "description": {
        "fct-descr": "\u003cp\u003eCast a name with an existentially hidden sort to an explicitly\n   sorted name.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless.Name",
        "fct-package": "unbound",
        "fct-signature": "AnyName -\u003e Maybe (Name a)",
        "fct-source": "src/Unbound-LocallyNameless-Name.html#toSortedName",
        "fct-type": "function",
        "title": "toSortedName"
      },
      "index": {
        "description": "Cast name with an existentially hidden sort to an explicitly sorted name",
        "hierarchy": "Unbound LocallyNameless Name",
        "module": "Unbound.LocallyNameless.Name",
        "name": "toSortedName",
        "normalized": "AnyName-\u003eMaybe(Name a)",
        "package": "unbound",
        "partial": "Sorted Name",
        "signature": "AnyName-\u003eMaybe(Name a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Name.html#v:translate",
      "description": {
        "fct-descr": "\u003cp\u003eChange the sort of a name.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless.Name",
        "fct-package": "unbound",
        "fct-signature": "Name a -\u003e Name b",
        "fct-source": "src/Unbound-LocallyNameless-Name.html#translate",
        "fct-type": "function",
        "title": "translate"
      },
      "index": {
        "description": "Change the sort of name",
        "hierarchy": "Unbound LocallyNameless Name",
        "module": "Unbound.LocallyNameless.Name",
        "name": "translate",
        "normalized": "Name a-\u003eName b",
        "package": "unbound",
        "partial": "",
        "signature": "Name a-\u003eName b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Ops.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGeneric operations defined in terms of the RepLib framework and the\n \u003ccode\u003e\u003ca\u003eAlpha\u003c/a\u003e\u003c/code\u003e type class.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Unbound.LocallyNameless.Ops",
        "fct-package": "unbound",
        "fct-signature": "module",
        "fct-source": "src/Unbound-LocallyNameless-Ops.html",
        "fct-type": "module",
        "title": "Ops"
      },
      "index": {
        "description": "Generic operations defined in terms of the RepLib framework and the Alpha type class",
        "hierarchy": "Unbound LocallyNameless Ops",
        "module": "Unbound.LocallyNameless.Ops",
        "name": "Ops",
        "normalized": "",
        "package": "unbound",
        "partial": "Ops",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Ops.html#v:acompare",
      "description": {
        "fct-descr": "\u003cp\u003eAn alpha-respecting total order on terms involving binders.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless.Ops",
        "fct-package": "unbound",
        "fct-signature": "t -\u003e t -\u003e Ordering",
        "fct-source": "src/Unbound-LocallyNameless-Ops.html#acompare",
        "fct-type": "function",
        "title": "acompare"
      },
      "index": {
        "description": "An alpha-respecting total order on terms involving binders",
        "hierarchy": "Unbound LocallyNameless Ops",
        "module": "Unbound.LocallyNameless.Ops",
        "name": "acompare",
        "normalized": "a-\u003ea-\u003eOrdering",
        "package": "unbound",
        "partial": "",
        "signature": "t-\u003et-\u003eOrdering"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Ops.html#v:aeq",
      "description": {
        "fct-descr": "\u003cp\u003eDetermine the alpha-equivalence of two terms.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless.Ops",
        "fct-package": "unbound",
        "fct-signature": "t -\u003e t -\u003e Bool",
        "fct-source": "src/Unbound-LocallyNameless-Ops.html#aeq",
        "fct-type": "function",
        "title": "aeq"
      },
      "index": {
        "description": "Determine the alpha-equivalence of two terms",
        "hierarchy": "Unbound LocallyNameless Ops",
        "module": "Unbound.LocallyNameless.Ops",
        "name": "aeq",
        "normalized": "a-\u003ea-\u003eBool",
        "package": "unbound",
        "partial": "",
        "signature": "t-\u003et-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Ops.html#v:aeqBinders",
      "description": {
        "fct-descr": "\u003cp\u003eDetermine (alpha-)equivalence of patterns.  Do they bind the same\n   variables in the same patterns and have alpha-equivalent\n   annotations in matching positions?\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless.Ops",
        "fct-package": "unbound",
        "fct-signature": "p -\u003e p -\u003e Bool",
        "fct-source": "src/Unbound-LocallyNameless-Ops.html#aeqBinders",
        "fct-type": "function",
        "title": "aeqBinders"
      },
      "index": {
        "description": "Determine alpha equivalence of patterns Do they bind the same variables in the same patterns and have alpha-equivalent annotations in matching positions",
        "hierarchy": "Unbound LocallyNameless Ops",
        "module": "Unbound.LocallyNameless.Ops",
        "name": "aeqBinders",
        "normalized": "a-\u003ea-\u003eBool",
        "package": "unbound",
        "partial": "Binders",
        "signature": "p-\u003ep-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Ops.html#v:bind",
      "description": {
        "fct-descr": "\u003cp\u003eA smart constructor for binders, also sometimes referred to as\n   \"close\".  Free variables in the term are taken to be references\n   to matching binders in the pattern.  (Free variables with no\n   matching binders will remain free.)\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless.Ops",
        "fct-package": "unbound",
        "fct-signature": "p -\u003e t -\u003e Bind p t",
        "fct-source": "src/Unbound-LocallyNameless-Ops.html#bind",
        "fct-type": "function",
        "title": "bind"
      },
      "index": {
        "description": "smart constructor for binders also sometimes referred to as close Free variables in the term are taken to be references to matching binders in the pattern Free variables with no matching binders will remain free",
        "hierarchy": "Unbound LocallyNameless Ops",
        "module": "Unbound.LocallyNameless.Ops",
        "name": "bind",
        "normalized": "a-\u003eb-\u003eBind a b",
        "package": "unbound",
        "partial": "",
        "signature": "p-\u003et-\u003eBind p t"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Ops.html#v:binders",
      "description": {
        "fct-descr": "\u003cp\u003eCalculate the binding variables (of a particular sort) in a\n   pattern.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless.Ops",
        "fct-package": "unbound",
        "fct-signature": "p -\u003e f (Name a)",
        "fct-source": "src/Unbound-LocallyNameless-Ops.html#binders",
        "fct-type": "function",
        "title": "binders"
      },
      "index": {
        "description": "Calculate the binding variables of particular sort in pattern",
        "hierarchy": "Unbound LocallyNameless Ops",
        "module": "Unbound.LocallyNameless.Ops",
        "name": "binders",
        "normalized": "a-\u003eb(Name c)",
        "package": "unbound",
        "partial": "",
        "signature": "p-\u003ef(Name a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Ops.html#v:bindersAny",
      "description": {
        "fct-descr": "\u003cp\u003eCalculate the binding variables (of any sort) in a pattern.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless.Ops",
        "fct-package": "unbound",
        "fct-signature": "p -\u003e f AnyName",
        "fct-source": "src/Unbound-LocallyNameless-Ops.html#bindersAny",
        "fct-type": "function",
        "title": "bindersAny"
      },
      "index": {
        "description": "Calculate the binding variables of any sort in pattern",
        "hierarchy": "Unbound LocallyNameless Ops",
        "module": "Unbound.LocallyNameless.Ops",
        "name": "bindersAny",
        "normalized": "a-\u003eb AnyName",
        "package": "unbound",
        "partial": "Any",
        "signature": "p-\u003ef AnyName"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Ops.html#v:freshen",
      "description": {
        "fct-descr": "\u003cp\u003eFreshen a pattern by replacing all old binding \u003ccode\u003e\u003ca\u003eName\u003c/a\u003e\u003c/code\u003es with new\n   fresh \u003ccode\u003e\u003ca\u003eName\u003c/a\u003e\u003c/code\u003es, returning a new pattern and a \u003ccode\u003e\u003ccode\u003e\u003ca\u003ePerm\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eName\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e\n   specifying how \u003ccode\u003e\u003ca\u003eName\u003c/a\u003e\u003c/code\u003es were replaced.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless.Ops",
        "fct-package": "unbound",
        "fct-signature": "p -\u003e m (p, Perm AnyName)",
        "fct-source": "src/Unbound-LocallyNameless-Ops.html#freshen",
        "fct-type": "function",
        "title": "freshen"
      },
      "index": {
        "description": "Freshen pattern by replacing all old binding Name with new fresh Name returning new pattern and Perm Name specifying how Name were replaced",
        "hierarchy": "Unbound LocallyNameless Ops",
        "module": "Unbound.LocallyNameless.Ops",
        "name": "freshen",
        "normalized": "a-\u003eb(a,Perm AnyName)",
        "package": "unbound",
        "partial": "",
        "signature": "p-\u003em(p,Perm AnyName)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Ops.html#v:fv",
      "description": {
        "fct-descr": "\u003cp\u003eCalculate the free variables of a particular sort contained in a\n   term.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless.Ops",
        "fct-package": "unbound",
        "fct-signature": "t -\u003e f (Name a)",
        "fct-source": "src/Unbound-LocallyNameless-Ops.html#fv",
        "fct-type": "function",
        "title": "fv"
      },
      "index": {
        "description": "Calculate the free variables of particular sort contained in term",
        "hierarchy": "Unbound LocallyNameless Ops",
        "module": "Unbound.LocallyNameless.Ops",
        "name": "fv",
        "normalized": "a-\u003eb(Name c)",
        "package": "unbound",
        "partial": "",
        "signature": "t-\u003ef(Name a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Ops.html#v:fvAny",
      "description": {
        "fct-descr": "\u003cp\u003eCalculate the free variables (of any sort) contained in a term.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless.Ops",
        "fct-package": "unbound",
        "fct-signature": "t -\u003e f AnyName",
        "fct-source": "src/Unbound-LocallyNameless-Ops.html#fvAny",
        "fct-type": "function",
        "title": "fvAny"
      },
      "index": {
        "description": "Calculate the free variables of any sort contained in term",
        "hierarchy": "Unbound LocallyNameless Ops",
        "module": "Unbound.LocallyNameless.Ops",
        "name": "fvAny",
        "normalized": "a-\u003eb AnyName",
        "package": "unbound",
        "partial": "Any",
        "signature": "t-\u003ef AnyName"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Ops.html#v:lfreshen",
      "description": {
        "fct-descr": "\u003cp\u003e\"Locally\" freshen a pattern, replacing all binding names with\n   new names that are not already \"in scope\". The second argument\n   is a continuation, which takes the renamed term and a permutation\n   that specifies how the pattern has been renamed.  The resulting\n   computation will be run with the in-scope set extended by the\n   names just generated.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless.Ops",
        "fct-package": "unbound",
        "fct-signature": "p -\u003e (p -\u003e Perm AnyName -\u003e m b) -\u003e m b",
        "fct-source": "src/Unbound-LocallyNameless-Ops.html#lfreshen",
        "fct-type": "function",
        "title": "lfreshen"
      },
      "index": {
        "description": "Locally freshen pattern replacing all binding names with new names that are not already in scope The second argument is continuation which takes the renamed term and permutation that specifies how the pattern has been renamed The resulting computation will be run with the in-scope set extended by the names just generated",
        "hierarchy": "Unbound LocallyNameless Ops",
        "module": "Unbound.LocallyNameless.Ops",
        "name": "lfreshen",
        "normalized": "a-\u003e(a-\u003ePerm AnyName-\u003eb c)-\u003eb c",
        "package": "unbound",
        "partial": "",
        "signature": "p-\u003e(p-\u003ePerm AnyName-\u003em b)-\u003em b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Ops.html#v:lunbind",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003elunbind\u003c/code\u003e opens a binding in an \u003ccode\u003e\u003ca\u003eLFresh\u003c/a\u003e\u003c/code\u003e monad, ensuring that the\n   names chosen for the binders are \u003cem\u003elocally\u003c/em\u003e fresh.  The components\n   of the binding are passed to a \u003cem\u003econtinuation\u003c/em\u003e, and the resulting\n   monadic action is run in a context extended to avoid choosing new\n   names which are the same as the ones chosen for this binding.\n\u003c/p\u003e\u003cp\u003eFor more information, see the documentation for the \u003ccode\u003e\u003ca\u003eLFresh\u003c/a\u003e\u003c/code\u003e type\n   class.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless.Ops",
        "fct-package": "unbound",
        "fct-signature": "GenBind order card p t -\u003e ((p, t) -\u003e m c) -\u003e m c",
        "fct-source": "src/Unbound-LocallyNameless-Ops.html#lunbind",
        "fct-type": "function",
        "title": "lunbind"
      },
      "index": {
        "description": "lunbind opens binding in an LFresh monad ensuring that the names chosen for the binders are locally fresh The components of the binding are passed to continuation and the resulting monadic action is run in context extended to avoid choosing new names which are the same as the ones chosen for this binding For more information see the documentation for the LFresh type class",
        "hierarchy": "Unbound LocallyNameless Ops",
        "module": "Unbound.LocallyNameless.Ops",
        "name": "lunbind",
        "normalized": "GenBind a b c d-\u003e((c,d)-\u003ee f)-\u003ee f",
        "package": "unbound",
        "partial": "",
        "signature": "GenBind order card p t-\u003e((p,t)-\u003em c)-\u003em c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Ops.html#v:lunbind2",
      "description": {
        "fct-descr": "\u003cp\u003eUnbind two terms with the same locally fresh names, provided the\n   patterns have the same number of binding variables.  See the\n   documentation for \u003ccode\u003e\u003ca\u003eunbind2\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003elunbind\u003c/a\u003e\u003c/code\u003e for more details.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless.Ops",
        "fct-package": "unbound",
        "fct-signature": "GenBind order card p1 t1 -\u003e GenBind order card p2 t2 -\u003e (Maybe (p1, t1, p2, t2) -\u003e m r) -\u003e m r",
        "fct-source": "src/Unbound-LocallyNameless-Ops.html#lunbind2",
        "fct-type": "function",
        "title": "lunbind2"
      },
      "index": {
        "description": "Unbind two terms with the same locally fresh names provided the patterns have the same number of binding variables See the documentation for unbind2 and lunbind for more details",
        "hierarchy": "Unbound LocallyNameless Ops",
        "module": "Unbound.LocallyNameless.Ops",
        "name": "lunbind2",
        "normalized": "GenBind a b c d-\u003eGenBind a b c d-\u003e(Maybe(c,d,c,d)-\u003ee f)-\u003ee f",
        "package": "unbound",
        "partial": "",
        "signature": "GenBind order card p t-\u003eGenBind order card p t-\u003e(Maybe(p,t,p,t)-\u003em r)-\u003em r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Ops.html#v:lunbind2Plus",
      "description": {
        "fct-module": "Unbound.LocallyNameless.Ops",
        "fct-package": "unbound",
        "fct-signature": "GenBind order card p1 t1 -\u003e GenBind order card p2 t2 -\u003e ((p1, t1, p2, t2) -\u003e m r) -\u003e m r",
        "fct-source": "src/Unbound-LocallyNameless-Ops.html#lunbind2Plus",
        "fct-type": "function",
        "title": "lunbind2Plus"
      },
      "index": {
        "description": "",
        "hierarchy": "Unbound LocallyNameless Ops",
        "module": "Unbound.LocallyNameless.Ops",
        "name": "lunbind2Plus",
        "normalized": "GenBind a b c d-\u003eGenBind a b c d-\u003e((c,d,c,d)-\u003ee f)-\u003ee f",
        "package": "unbound",
        "partial": "Plus",
        "signature": "GenBind order card p t-\u003eGenBind order card p t-\u003e((p,t,p,t)-\u003em r)-\u003em r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Ops.html#v:lunbind3",
      "description": {
        "fct-descr": "\u003cp\u003eUnbind three terms with the same locally fresh names, provided\n   the binders have the same number of binding variables.  See the\n   documentation for \u003ccode\u003e\u003ca\u003eunbind2\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003elunbind\u003c/a\u003e\u003c/code\u003e for more details.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless.Ops",
        "fct-package": "unbound",
        "fct-signature": "GenBind order card p1 t1 -\u003e GenBind order card p2 t2 -\u003e GenBind order card p3 t3 -\u003e (Maybe (p1, t1, p2, t2, p3, t3) -\u003e m r) -\u003e m r",
        "fct-source": "src/Unbound-LocallyNameless-Ops.html#lunbind3",
        "fct-type": "function",
        "title": "lunbind3"
      },
      "index": {
        "description": "Unbind three terms with the same locally fresh names provided the binders have the same number of binding variables See the documentation for unbind2 and lunbind for more details",
        "hierarchy": "Unbound LocallyNameless Ops",
        "module": "Unbound.LocallyNameless.Ops",
        "name": "lunbind3",
        "normalized": "GenBind a b c d-\u003eGenBind a b c d-\u003eGenBind a b c d-\u003e(Maybe(c,d,c,d,c,d)-\u003ee f)-\u003ee f",
        "package": "unbound",
        "partial": "",
        "signature": "GenBind order card p t-\u003eGenBind order card p t-\u003eGenBind order card p t-\u003e(Maybe(p,t,p,t,p,t)-\u003em r)-\u003em r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Ops.html#v:lunbind3Plus",
      "description": {
        "fct-module": "Unbound.LocallyNameless.Ops",
        "fct-package": "unbound",
        "fct-signature": "GenBind order card p1 t1 -\u003e GenBind order card p2 t2 -\u003e GenBind order card p3 t3 -\u003e ((p1, t1, p2, t2, p3, t3) -\u003e m r) -\u003e m r",
        "fct-source": "src/Unbound-LocallyNameless-Ops.html#lunbind3Plus",
        "fct-type": "function",
        "title": "lunbind3Plus"
      },
      "index": {
        "description": "",
        "hierarchy": "Unbound LocallyNameless Ops",
        "module": "Unbound.LocallyNameless.Ops",
        "name": "lunbind3Plus",
        "normalized": "GenBind a b c d-\u003eGenBind a b c d-\u003eGenBind a b c d-\u003e((c,d,c,d,c,d)-\u003ee f)-\u003ee f",
        "package": "unbound",
        "partial": "Plus",
        "signature": "GenBind order card p t-\u003eGenBind order card p t-\u003eGenBind order card p t-\u003e((p,t,p,t,p,t)-\u003em r)-\u003em r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Ops.html#v:luntrec",
      "description": {
        "fct-descr": "\u003cp\u003eDestructor for recursive abstractions which picks \u003cem\u003elocally\u003c/em\u003e fresh\n   names for binders (see \u003ccode\u003e\u003ca\u003eLFresh\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless.Ops",
        "fct-package": "unbound",
        "fct-signature": "TRec p -\u003e m p",
        "fct-source": "src/Unbound-LocallyNameless-Ops.html#luntrec",
        "fct-type": "function",
        "title": "luntrec"
      },
      "index": {
        "description": "Destructor for recursive abstractions which picks locally fresh names for binders see LFresh",
        "hierarchy": "Unbound LocallyNameless Ops",
        "module": "Unbound.LocallyNameless.Ops",
        "name": "luntrec",
        "normalized": "TRec a-\u003eb a",
        "package": "unbound",
        "partial": "",
        "signature": "TRec p-\u003em p"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Ops.html#v:patfv",
      "description": {
        "fct-descr": "\u003cp\u003eCalculate the variables of a particular sort that occur freely in\n   terms embedded within a pattern (but are not bound by the pattern).\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless.Ops",
        "fct-package": "unbound",
        "fct-signature": "p -\u003e f (Name a)",
        "fct-source": "src/Unbound-LocallyNameless-Ops.html#patfv",
        "fct-type": "function",
        "title": "patfv"
      },
      "index": {
        "description": "Calculate the variables of particular sort that occur freely in terms embedded within pattern but are not bound by the pattern",
        "hierarchy": "Unbound LocallyNameless Ops",
        "module": "Unbound.LocallyNameless.Ops",
        "name": "patfv",
        "normalized": "a-\u003eb(Name c)",
        "package": "unbound",
        "partial": "",
        "signature": "p-\u003ef(Name a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Ops.html#v:patfvAny",
      "description": {
        "fct-descr": "\u003cp\u003eCalculate the variables (of any sort) that occur freely in terms\n   embedded within a pattern (but are not bound by the pattern).\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless.Ops",
        "fct-package": "unbound",
        "fct-signature": "p -\u003e f AnyName",
        "fct-source": "src/Unbound-LocallyNameless-Ops.html#patfvAny",
        "fct-type": "function",
        "title": "patfvAny"
      },
      "index": {
        "description": "Calculate the variables of any sort that occur freely in terms embedded within pattern but are not bound by the pattern",
        "hierarchy": "Unbound LocallyNameless Ops",
        "module": "Unbound.LocallyNameless.Ops",
        "name": "patfvAny",
        "normalized": "a-\u003eb AnyName",
        "package": "unbound",
        "partial": "Any",
        "signature": "p-\u003ef AnyName"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Ops.html#v:permClose",
      "description": {
        "fct-module": "Unbound.LocallyNameless.Ops",
        "fct-package": "unbound",
        "fct-signature": "[Name a] -\u003e t -\u003e ([Name a], t)",
        "fct-source": "src/Unbound-LocallyNameless-Ops.html#permClose",
        "fct-type": "function",
        "title": "permClose"
      },
      "index": {
        "description": "",
        "hierarchy": "Unbound LocallyNameless Ops",
        "module": "Unbound.LocallyNameless.Ops",
        "name": "permClose",
        "normalized": "[Name a]-\u003eb-\u003e([Name a],b)",
        "package": "unbound",
        "partial": "Close",
        "signature": "[Name a]-\u003et-\u003e([Name a],t)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Ops.html#v:permCloseAny",
      "description": {
        "fct-module": "Unbound.LocallyNameless.Ops",
        "fct-package": "unbound",
        "fct-signature": "[AnyName] -\u003e t -\u003e ([AnyName], t)",
        "fct-source": "src/Unbound-LocallyNameless-Ops.html#permCloseAny",
        "fct-type": "function",
        "title": "permCloseAny"
      },
      "index": {
        "description": "",
        "hierarchy": "Unbound LocallyNameless Ops",
        "module": "Unbound.LocallyNameless.Ops",
        "name": "permCloseAny",
        "normalized": "[AnyName]-\u003ea-\u003e([AnyName],a)",
        "package": "unbound",
        "partial": "Close Any",
        "signature": "[AnyName]-\u003et-\u003e([AnyName],t)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Ops.html#v:permbind",
      "description": {
        "fct-descr": "\u003cp\u003eBind the pattern in the term \"up to permutation\" of bound variables.\n   For example, the following 4 terms are \u003cem\u003eall\u003c/em\u003e alpha-equivalent:\n\u003c/p\u003e\u003cpre\u003e permbind [a,b] (a,b)\n permbind [a,b] (b,a)\n permbind [b,a] (a,b)\n permbind [b,a] (b,a)\n\u003c/pre\u003e\u003cp\u003eNote that none of these terms is equivalent to a term with a\n   redundant pattern such as\n\u003c/p\u003e\u003cpre\u003e permbind [a,b,c] (a,b)\n\u003c/pre\u003e\u003cp\u003eFor binding constructors which \u003cem\u003edo\u003c/em\u003e render these equivalent,\n   see \u003ccode\u003e\u003ca\u003esetbind\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003esetbindAny\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless.Ops",
        "fct-package": "unbound",
        "fct-signature": "p -\u003e t -\u003e SetBind p t",
        "fct-source": "src/Unbound-LocallyNameless-Ops.html#permbind",
        "fct-type": "function",
        "title": "permbind"
      },
      "index": {
        "description": "Bind the pattern in the term up to permutation of bound variables For example the following terms are all alpha-equivalent permbind permbind permbind permbind Note that none of these terms is equivalent to term with redundant pattern such as permbind For binding constructors which do render these equivalent see setbind and setbindAny",
        "hierarchy": "Unbound LocallyNameless Ops",
        "module": "Unbound.LocallyNameless.Ops",
        "name": "permbind",
        "normalized": "a-\u003eb-\u003eSetBind a b",
        "package": "unbound",
        "partial": "",
        "signature": "p-\u003et-\u003eSetBind p t"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Ops.html#v:rebind",
      "description": {
        "fct-descr": "\u003cp\u003eConstructor for rebinding patterns.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless.Ops",
        "fct-package": "unbound",
        "fct-signature": "p1 -\u003e p2 -\u003e Rebind p1 p2",
        "fct-source": "src/Unbound-LocallyNameless-Ops.html#rebind",
        "fct-type": "function",
        "title": "rebind"
      },
      "index": {
        "description": "Constructor for rebinding patterns",
        "hierarchy": "Unbound LocallyNameless Ops",
        "module": "Unbound.LocallyNameless.Ops",
        "name": "rebind",
        "normalized": "a-\u003ea-\u003eRebind a a",
        "package": "unbound",
        "partial": "",
        "signature": "p-\u003ep-\u003eRebind p p"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Ops.html#v:rec",
      "description": {
        "fct-descr": "\u003cp\u003eConstructor for recursive patterns.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless.Ops",
        "fct-package": "unbound",
        "fct-signature": "p -\u003e Rec p",
        "fct-source": "src/Unbound-LocallyNameless-Ops.html#rec",
        "fct-type": "function",
        "title": "rec"
      },
      "index": {
        "description": "Constructor for recursive patterns",
        "hierarchy": "Unbound LocallyNameless Ops",
        "module": "Unbound.LocallyNameless.Ops",
        "name": "rec",
        "normalized": "a-\u003eRec a",
        "package": "unbound",
        "partial": "",
        "signature": "p-\u003eRec p"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Ops.html#v:setbind",
      "description": {
        "fct-descr": "\u003cp\u003eBind the list of names in the term up to permutation and dropping\n   of unused variables.\n\u003c/p\u003e\u003cp\u003eFor example, the following 5 terms are \u003cem\u003eall\u003c/em\u003e alpha-equivalent:\n\u003c/p\u003e\u003cpre\u003e setbind [a,b] (a,b)\n setbind [a,b] (b,a)\n setbind [b,a] (a,b)\n setbind [b,a] (b,a)\n setbind [a,b,c] (a,b)\n\u003c/pre\u003e\u003cp\u003eThere is also a variant, \u003ccode\u003e\u003ca\u003esetbindAny\u003c/a\u003e\u003c/code\u003e, which ignores name sorts.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless.Ops",
        "fct-package": "unbound",
        "fct-signature": "[Name a] -\u003e t -\u003e SetPlusBind [Name a] t",
        "fct-source": "src/Unbound-LocallyNameless-Ops.html#setbind",
        "fct-type": "function",
        "title": "setbind"
      },
      "index": {
        "description": "Bind the list of names in the term up to permutation and dropping of unused variables For example the following terms are all alpha-equivalent setbind setbind setbind setbind setbind There is also variant setbindAny which ignores name sorts",
        "hierarchy": "Unbound LocallyNameless Ops",
        "module": "Unbound.LocallyNameless.Ops",
        "name": "setbind",
        "normalized": "[Name a]-\u003eb-\u003eSetPlusBind[Name a]b",
        "package": "unbound",
        "partial": "",
        "signature": "[Name a]-\u003et-\u003eSetPlusBind[Name a]t"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Ops.html#v:setbindAny",
      "description": {
        "fct-descr": "\u003cp\u003eBind the list of (any-sorted) names in the term up to permutation\n   and dropping of unused variables.  See \u003ccode\u003e\u003ca\u003esetbind\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless.Ops",
        "fct-package": "unbound",
        "fct-signature": "[AnyName] -\u003e t -\u003e SetPlusBind [AnyName] t",
        "fct-source": "src/Unbound-LocallyNameless-Ops.html#setbindAny",
        "fct-type": "function",
        "title": "setbindAny"
      },
      "index": {
        "description": "Bind the list of any-sorted names in the term up to permutation and dropping of unused variables See setbind",
        "hierarchy": "Unbound LocallyNameless Ops",
        "module": "Unbound.LocallyNameless.Ops",
        "name": "setbindAny",
        "normalized": "[AnyName]-\u003ea-\u003eSetPlusBind[AnyName]a",
        "package": "unbound",
        "partial": "Any",
        "signature": "[AnyName]-\u003et-\u003eSetPlusBind[AnyName]t"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Ops.html#v:strength",
      "description": {
        "fct-module": "Unbound.LocallyNameless.Ops",
        "fct-package": "unbound",
        "fct-signature": "(a, f b) -\u003e f (a, b)",
        "fct-source": "src/Unbound-LocallyNameless-Ops.html#strength",
        "fct-type": "function",
        "title": "strength"
      },
      "index": {
        "description": "",
        "hierarchy": "Unbound LocallyNameless Ops",
        "module": "Unbound.LocallyNameless.Ops",
        "name": "strength",
        "normalized": "(a,b c)-\u003eb(a,c)",
        "package": "unbound",
        "partial": "",
        "signature": "(a,f b)-\u003ef(a,b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Ops.html#v:swaps",
      "description": {
        "fct-descr": "\u003cp\u003eApply a permutation to a term.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless.Ops",
        "fct-package": "unbound",
        "fct-signature": "Perm AnyName -\u003e t -\u003e t",
        "fct-source": "src/Unbound-LocallyNameless-Ops.html#swaps",
        "fct-type": "function",
        "title": "swaps"
      },
      "index": {
        "description": "Apply permutation to term",
        "hierarchy": "Unbound LocallyNameless Ops",
        "module": "Unbound.LocallyNameless.Ops",
        "name": "swaps",
        "normalized": "Perm AnyName-\u003ea-\u003ea",
        "package": "unbound",
        "partial": "",
        "signature": "Perm AnyName-\u003et-\u003et"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Ops.html#v:swapsBinders",
      "description": {
        "fct-descr": "\u003cp\u003eApply a permutation to the binding variables in a pattern.\n   Embedded terms are left alone by the permutation.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless.Ops",
        "fct-package": "unbound",
        "fct-signature": "Perm AnyName -\u003e p -\u003e p",
        "fct-source": "src/Unbound-LocallyNameless-Ops.html#swapsBinders",
        "fct-type": "function",
        "title": "swapsBinders"
      },
      "index": {
        "description": "Apply permutation to the binding variables in pattern Embedded terms are left alone by the permutation",
        "hierarchy": "Unbound LocallyNameless Ops",
        "module": "Unbound.LocallyNameless.Ops",
        "name": "swapsBinders",
        "normalized": "Perm AnyName-\u003ea-\u003ea",
        "package": "unbound",
        "partial": "Binders",
        "signature": "Perm AnyName-\u003ep-\u003ep"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Ops.html#v:swapsEmbeds",
      "description": {
        "fct-descr": "\u003cp\u003eApply a permutation to the embedded terms in a pattern. Binding\n   names are left alone by the permutation.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless.Ops",
        "fct-package": "unbound",
        "fct-signature": "Perm AnyName -\u003e p -\u003e p",
        "fct-source": "src/Unbound-LocallyNameless-Ops.html#swapsEmbeds",
        "fct-type": "function",
        "title": "swapsEmbeds"
      },
      "index": {
        "description": "Apply permutation to the embedded terms in pattern Binding names are left alone by the permutation",
        "hierarchy": "Unbound LocallyNameless Ops",
        "module": "Unbound.LocallyNameless.Ops",
        "name": "swapsEmbeds",
        "normalized": "Perm AnyName-\u003ea-\u003ea",
        "package": "unbound",
        "partial": "Embeds",
        "signature": "Perm AnyName-\u003ep-\u003ep"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Ops.html#v:trec",
      "description": {
        "fct-descr": "\u003cp\u003eConstructor for recursive abstractions.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless.Ops",
        "fct-package": "unbound",
        "fct-signature": "p -\u003e TRec p",
        "fct-source": "src/Unbound-LocallyNameless-Ops.html#trec",
        "fct-type": "function",
        "title": "trec"
      },
      "index": {
        "description": "Constructor for recursive abstractions",
        "hierarchy": "Unbound LocallyNameless Ops",
        "module": "Unbound.LocallyNameless.Ops",
        "name": "trec",
        "normalized": "a-\u003eTRec a",
        "package": "unbound",
        "partial": "",
        "signature": "p-\u003eTRec p"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Ops.html#v:unbind",
      "description": {
        "fct-descr": "\u003cp\u003eUnbind (also known as \"open\") is the simplest destructor for\n   bindings. It ensures that the names in the binding are globally\n   fresh, using a monad which is an instance of the \u003ccode\u003e\u003ca\u003eFresh\u003c/a\u003e\u003c/code\u003e type\n   class.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless.Ops",
        "fct-package": "unbound",
        "fct-signature": "GenBind order card p t -\u003e m (p, t)",
        "fct-source": "src/Unbound-LocallyNameless-Ops.html#unbind",
        "fct-type": "function",
        "title": "unbind"
      },
      "index": {
        "description": "Unbind also known as open is the simplest destructor for bindings It ensures that the names in the binding are globally fresh using monad which is an instance of the Fresh type class",
        "hierarchy": "Unbound LocallyNameless Ops",
        "module": "Unbound.LocallyNameless.Ops",
        "name": "unbind",
        "normalized": "GenBind a b c d-\u003ee(c,d)",
        "package": "unbound",
        "partial": "",
        "signature": "GenBind order card p t-\u003em(p,t)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Ops.html#v:unbind2",
      "description": {
        "fct-descr": "\u003cp\u003eUnbind two terms with the \u003cem\u003esame\u003c/em\u003e fresh names, provided the binders have\n   the same binding variables (both number and sort).  If the patterns have\n   different binding variables, return \u003ccode\u003eNothing\u003c/code\u003e.  Otherwise, return the\n   renamed patterns and the associated terms.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless.Ops",
        "fct-package": "unbound",
        "fct-signature": "GenBind order card p1 t1 -\u003e GenBind order card p2 t2 -\u003e m (Maybe (p1, t1, p2, t2))",
        "fct-source": "src/Unbound-LocallyNameless-Ops.html#unbind2",
        "fct-type": "function",
        "title": "unbind2"
      },
      "index": {
        "description": "Unbind two terms with the same fresh names provided the binders have the same binding variables both number and sort If the patterns have different binding variables return Nothing Otherwise return the renamed patterns and the associated terms",
        "hierarchy": "Unbound LocallyNameless Ops",
        "module": "Unbound.LocallyNameless.Ops",
        "name": "unbind2",
        "normalized": "GenBind a b c d-\u003eGenBind a b c d-\u003ee(Maybe(c,d,c,d))",
        "package": "unbound",
        "partial": "",
        "signature": "GenBind order card p t-\u003eGenBind order card p t-\u003em(Maybe(p,t,p,t))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Ops.html#v:unbind2Plus",
      "description": {
        "fct-module": "Unbound.LocallyNameless.Ops",
        "fct-package": "unbound",
        "fct-signature": "GenBind order card p1 t1 -\u003e GenBind order card p2 t2 -\u003e m (p1, t1, p2, t2)",
        "fct-source": "src/Unbound-LocallyNameless-Ops.html#unbind2Plus",
        "fct-type": "function",
        "title": "unbind2Plus"
      },
      "index": {
        "description": "",
        "hierarchy": "Unbound LocallyNameless Ops",
        "module": "Unbound.LocallyNameless.Ops",
        "name": "unbind2Plus",
        "normalized": "GenBind a b c d-\u003eGenBind a b c d-\u003ee(c,d,c,d)",
        "package": "unbound",
        "partial": "Plus",
        "signature": "GenBind order card p t-\u003eGenBind order card p t-\u003em(p,t,p,t)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Ops.html#v:unbind3",
      "description": {
        "fct-descr": "\u003cp\u003eUnbind three terms with the same fresh names, provided the\n   binders have the same number of binding variables.  See the\n   documentation for \u003ccode\u003e\u003ca\u003eunbind2\u003c/a\u003e\u003c/code\u003e for more details.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless.Ops",
        "fct-package": "unbound",
        "fct-signature": "GenBind order card p1 t1 -\u003e GenBind order card p2 t2 -\u003e GenBind order card p3 t3 -\u003e m (Maybe (p1, t1, p2, t2, p3, t3))",
        "fct-source": "src/Unbound-LocallyNameless-Ops.html#unbind3",
        "fct-type": "function",
        "title": "unbind3"
      },
      "index": {
        "description": "Unbind three terms with the same fresh names provided the binders have the same number of binding variables See the documentation for unbind2 for more details",
        "hierarchy": "Unbound LocallyNameless Ops",
        "module": "Unbound.LocallyNameless.Ops",
        "name": "unbind3",
        "normalized": "GenBind a b c d-\u003eGenBind a b c d-\u003eGenBind a b c d-\u003ee(Maybe(c,d,c,d,c,d))",
        "package": "unbound",
        "partial": "",
        "signature": "GenBind order card p t-\u003eGenBind order card p t-\u003eGenBind order card p t-\u003em(Maybe(p,t,p,t,p,t))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Ops.html#v:unbind3Plus",
      "description": {
        "fct-module": "Unbound.LocallyNameless.Ops",
        "fct-package": "unbound",
        "fct-signature": "GenBind order card p1 t1 -\u003e GenBind order card p2 t2 -\u003e GenBind order card p3 t3 -\u003e m (p1, t1, p2, t2, p3, t3)",
        "fct-source": "src/Unbound-LocallyNameless-Ops.html#unbind3Plus",
        "fct-type": "function",
        "title": "unbind3Plus"
      },
      "index": {
        "description": "",
        "hierarchy": "Unbound LocallyNameless Ops",
        "module": "Unbound.LocallyNameless.Ops",
        "name": "unbind3Plus",
        "normalized": "GenBind a b c d-\u003eGenBind a b c d-\u003eGenBind a b c d-\u003ee(c,d,c,d,c,d)",
        "package": "unbound",
        "partial": "Plus",
        "signature": "GenBind order card p t-\u003eGenBind order card p t-\u003eGenBind order card p t-\u003em(p,t,p,t,p,t)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Ops.html#v:unrebind",
      "description": {
        "fct-descr": "\u003cp\u003eDestructor for rebinding patterns.  It does not need a monadic\n   context for generating fresh names, since \u003ccode\u003eRebind\u003c/code\u003e can only occur\n   in the pattern of a \u003ccode\u003e\u003ca\u003eBind\u003c/a\u003e\u003c/code\u003e; hence a previous call to \u003ccode\u003e\u003ca\u003eunbind\u003c/a\u003e\u003c/code\u003e (or\n   something similar) must have already freshened the names at this\n   point.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless.Ops",
        "fct-package": "unbound",
        "fct-signature": "Rebind p1 p2 -\u003e (p1, p2)",
        "fct-source": "src/Unbound-LocallyNameless-Ops.html#unrebind",
        "fct-type": "function",
        "title": "unrebind"
      },
      "index": {
        "description": "Destructor for rebinding patterns It does not need monadic context for generating fresh names since Rebind can only occur in the pattern of Bind hence previous call to unbind or something similar must have already freshened the names at this point",
        "hierarchy": "Unbound LocallyNameless Ops",
        "module": "Unbound.LocallyNameless.Ops",
        "name": "unrebind",
        "normalized": "Rebind a a-\u003e(a,a)",
        "package": "unbound",
        "partial": "",
        "signature": "Rebind p p-\u003e(p,p)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Ops.html#v:unrec",
      "description": {
        "fct-descr": "\u003cp\u003eDestructor for recursive patterns.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless.Ops",
        "fct-package": "unbound",
        "fct-signature": "Rec p -\u003e p",
        "fct-source": "src/Unbound-LocallyNameless-Ops.html#unrec",
        "fct-type": "function",
        "title": "unrec"
      },
      "index": {
        "description": "Destructor for recursive patterns",
        "hierarchy": "Unbound LocallyNameless Ops",
        "module": "Unbound.LocallyNameless.Ops",
        "name": "unrec",
        "normalized": "Rec a-\u003ea",
        "package": "unbound",
        "partial": "",
        "signature": "Rec p-\u003ep"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Ops.html#v:unsafeUnbind",
      "description": {
        "fct-descr": "\u003cp\u003eA destructor for binders that does \u003cem\u003enot\u003c/em\u003e guarantee fresh\n   names for the binders.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless.Ops",
        "fct-package": "unbound",
        "fct-signature": "GenBind order card a b -\u003e (a, b)",
        "fct-source": "src/Unbound-LocallyNameless-Ops.html#unsafeUnbind",
        "fct-type": "function",
        "title": "unsafeUnbind"
      },
      "index": {
        "description": "destructor for binders that does not guarantee fresh names for the binders",
        "hierarchy": "Unbound LocallyNameless Ops",
        "module": "Unbound.LocallyNameless.Ops",
        "name": "unsafeUnbind",
        "normalized": "GenBind a b c d-\u003e(c,d)",
        "package": "unbound",
        "partial": "Unbind",
        "signature": "GenBind order card a b-\u003e(a,b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Ops.html#v:untrec",
      "description": {
        "fct-descr": "\u003cp\u003eDestructor for recursive abstractions which picks globally fresh\n   names for the binders.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless.Ops",
        "fct-package": "unbound",
        "fct-signature": "TRec p -\u003e m p",
        "fct-source": "src/Unbound-LocallyNameless-Ops.html#untrec",
        "fct-type": "function",
        "title": "untrec"
      },
      "index": {
        "description": "Destructor for recursive abstractions which picks globally fresh names for the binders",
        "hierarchy": "Unbound LocallyNameless Ops",
        "module": "Unbound.LocallyNameless.Ops",
        "name": "untrec",
        "normalized": "TRec a-\u003eb a",
        "package": "unbound",
        "partial": "",
        "signature": "TRec p-\u003em p"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Subst.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe \u003ccode\u003eSubst\u003c/code\u003e type class for generic capture-avoiding substitution.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Unbound.LocallyNameless.Subst",
        "fct-package": "unbound",
        "fct-signature": "module",
        "fct-source": "src/Unbound-LocallyNameless-Subst.html",
        "fct-type": "module",
        "title": "Subst"
      },
      "index": {
        "description": "The Subst type class for generic capture-avoiding substitution",
        "hierarchy": "Unbound LocallyNameless Subst",
        "module": "Unbound.LocallyNameless.Subst",
        "name": "Subst",
        "normalized": "",
        "package": "unbound",
        "partial": "Subst",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Subst.html#t:Subst",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003eSubst\u003c/code\u003e class governs capture-avoiding substitution.  To\n   derive this class, you only need to indicate where the variables\n   are in the data type, by overriding the method \u003ccode\u003e\u003ca\u003eisvar\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless.Subst",
        "fct-package": "unbound",
        "fct-signature": "class",
        "fct-source": "src/Unbound-LocallyNameless-Subst.html#Subst",
        "fct-type": "class",
        "title": "Subst"
      },
      "index": {
        "description": "The Subst class governs capture-avoiding substitution To derive this class you only need to indicate where the variables are in the data type by overriding the method isvar",
        "hierarchy": "Unbound LocallyNameless Subst",
        "module": "Unbound.LocallyNameless.Subst",
        "name": "Subst",
        "normalized": "",
        "package": "unbound",
        "partial": "Subst",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Subst.html#t:SubstCoerce",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ccode\u003e\u003ca\u003eisCoerceVar\u003c/a\u003e\u003c/code\u003e  \n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless.Subst",
        "fct-package": "unbound",
        "fct-signature": "data",
        "fct-source": "src/Unbound-LocallyNameless-Subst.html#SubstCoerce",
        "fct-type": "data",
        "title": "SubstCoerce"
      },
      "index": {
        "description": "See isCoerceVar",
        "hierarchy": "Unbound LocallyNameless Subst",
        "module": "Unbound.LocallyNameless.Subst",
        "name": "SubstCoerce",
        "normalized": "",
        "package": "unbound",
        "partial": "Subst Coerce",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Subst.html#t:SubstD",
      "description": {
        "fct-descr": "\u003cp\u003eReified class dictionary for \u003ccode\u003e\u003ca\u003eSubst\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless.Subst",
        "fct-package": "unbound",
        "fct-signature": "data",
        "fct-source": "src/Unbound-LocallyNameless-Subst.html#SubstD",
        "fct-type": "data",
        "title": "SubstD"
      },
      "index": {
        "description": "Reified class dictionary for Subst",
        "hierarchy": "Unbound LocallyNameless Subst",
        "module": "Unbound.LocallyNameless.Subst",
        "name": "SubstD",
        "normalized": "",
        "package": "unbound",
        "partial": "Subst",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Subst.html#t:SubstName",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ccode\u003e\u003ca\u003eisvar\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless.Subst",
        "fct-package": "unbound",
        "fct-signature": "data",
        "fct-source": "src/Unbound-LocallyNameless-Subst.html#SubstName",
        "fct-type": "data",
        "title": "SubstName"
      },
      "index": {
        "description": "See isvar",
        "hierarchy": "Unbound LocallyNameless Subst",
        "module": "Unbound.LocallyNameless.Subst",
        "name": "SubstName",
        "normalized": "",
        "package": "unbound",
        "partial": "Subst Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Subst.html#v:SubstCoerce",
      "description": {
        "fct-module": "Unbound.LocallyNameless.Subst",
        "fct-package": "unbound",
        "fct-signature": "Name b -\u003e (b -\u003e Maybe a) -\u003e SubstCoerce a b",
        "fct-source": "src/Unbound-LocallyNameless-Subst.html#SubstCoerce",
        "fct-type": "function",
        "title": "SubstCoerce"
      },
      "index": {
        "description": "",
        "hierarchy": "Unbound LocallyNameless Subst",
        "module": "Unbound.LocallyNameless.Subst",
        "name": "SubstCoerce",
        "normalized": "Name a-\u003e(a-\u003eMaybe b)-\u003eSubstCoerce b a",
        "package": "unbound",
        "partial": "Subst Coerce",
        "signature": "Name b-\u003e(b-\u003eMaybe a)-\u003eSubstCoerce a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Subst.html#v:SubstD",
      "description": {
        "fct-module": "Unbound.LocallyNameless.Subst",
        "fct-package": "unbound",
        "fct-signature": "SubstD",
        "fct-source": "src/Unbound-LocallyNameless-Subst.html#SubstD",
        "fct-type": "function",
        "title": "SubstD"
      },
      "index": {
        "description": "",
        "hierarchy": "Unbound LocallyNameless Subst",
        "module": "Unbound.LocallyNameless.Subst",
        "name": "SubstD",
        "normalized": "",
        "package": "unbound",
        "partial": "Subst",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Subst.html#v:SubstName",
      "description": {
        "fct-module": "Unbound.LocallyNameless.Subst",
        "fct-package": "unbound",
        "fct-signature": "Name a -\u003e SubstName a b",
        "fct-source": "src/Unbound-LocallyNameless-Subst.html#SubstName",
        "fct-type": "function",
        "title": "SubstName"
      },
      "index": {
        "description": "",
        "hierarchy": "Unbound LocallyNameless Subst",
        "module": "Unbound.LocallyNameless.Subst",
        "name": "SubstName",
        "normalized": "Name a-\u003eSubstName a b",
        "package": "unbound",
        "partial": "Subst Name",
        "signature": "Name a-\u003eSubstName a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Subst.html#v:isCoerceVar",
      "description": {
        "fct-descr": "\u003cp\u003eThis is an alternative version to \u003ccode\u003e\u003ca\u003eisvar\u003c/a\u003e\u003c/code\u003e, useable in the case \n   that the substituted argument doesn't have *exactly* the same type\n   as the term it should be substituted into.\n   The default implementation always returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless.Subst",
        "fct-package": "unbound",
        "fct-signature": "a -\u003e Maybe (SubstCoerce a b)",
        "fct-source": "src/Unbound-LocallyNameless-Subst.html#isCoerceVar",
        "fct-type": "method",
        "title": "isCoerceVar"
      },
      "index": {
        "description": "This is an alternative version to isvar useable in the case that the substituted argument doesn have exactly the same type as the term it should be substituted into The default implementation always returns Nothing",
        "hierarchy": "Unbound LocallyNameless Subst",
        "module": "Unbound.LocallyNameless.Subst",
        "name": "isCoerceVar",
        "normalized": "a-\u003eMaybe(SubstCoerce a b)",
        "package": "unbound",
        "partial": "Coerce Var",
        "signature": "a-\u003eMaybe(SubstCoerce a b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Subst.html#v:isvar",
      "description": {
        "fct-descr": "\u003cp\u003eThis is the only method which normally needs to be implemented\n   explicitly.  If the argument is a variable, return its name\n   wrapped in the \u003ccode\u003e\u003ca\u003eSubstName\u003c/a\u003e\u003c/code\u003e constructor.  Return \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e for\n   non-variable arguments.  The default implementation always\n   returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless.Subst",
        "fct-package": "unbound",
        "fct-signature": "a -\u003e Maybe (SubstName a b)",
        "fct-source": "src/Unbound-LocallyNameless-Subst.html#isvar",
        "fct-type": "method",
        "title": "isvar"
      },
      "index": {
        "description": "This is the only method which normally needs to be implemented explicitly If the argument is variable return its name wrapped in the SubstName constructor Return Nothing for non-variable arguments The default implementation always returns Nothing",
        "hierarchy": "Unbound LocallyNameless Subst",
        "module": "Unbound.LocallyNameless.Subst",
        "name": "isvar",
        "normalized": "a-\u003eMaybe(SubstName a b)",
        "package": "unbound",
        "partial": "",
        "signature": "a-\u003eMaybe(SubstName a b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Subst.html#v:isvarD",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Unbound.LocallyNameless.Subst",
        "fct-package": "unbound",
        "fct-signature": "a -\u003e Maybe (SubstName a b)",
        "fct-source": "src/Unbound-LocallyNameless-Subst.html#SubstD",
        "fct-type": "function",
        "title": "isvarD"
      },
      "index": {
        "description": "",
        "hierarchy": "Unbound LocallyNameless Subst",
        "module": "Unbound.LocallyNameless.Subst",
        "name": "isvarD",
        "normalized": "a-\u003eMaybe(SubstName a b)",
        "package": "unbound",
        "partial": "",
        "signature": "a-\u003eMaybe(SubstName a b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Subst.html#v:subst",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003esubst\u003c/a\u003e\u003c/code\u003e nm sub tm\u003c/code\u003e substitutes \u003ccode\u003esub\u003c/code\u003e for \u003ccode\u003enm\u003c/code\u003e in \u003ccode\u003etm\u003c/code\u003e.  It has\n   a default generic implementation in terms of \u003ccode\u003eisvar\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless.Subst",
        "fct-package": "unbound",
        "fct-signature": "Name b -\u003e b -\u003e a -\u003e a",
        "fct-source": "src/Unbound-LocallyNameless-Subst.html#subst",
        "fct-type": "method",
        "title": "subst"
      },
      "index": {
        "description": "subst nm sub tm substitutes sub for nm in tm It has default generic implementation in terms of isvar",
        "hierarchy": "Unbound LocallyNameless Subst",
        "module": "Unbound.LocallyNameless.Subst",
        "name": "subst",
        "normalized": "Name a-\u003ea-\u003eb-\u003eb",
        "package": "unbound",
        "partial": "",
        "signature": "Name b-\u003eb-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Subst.html#v:substD",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Unbound.LocallyNameless.Subst",
        "fct-package": "unbound",
        "fct-signature": "Name b -\u003e b -\u003e a -\u003e a",
        "fct-source": "src/Unbound-LocallyNameless-Subst.html#SubstD",
        "fct-type": "function",
        "title": "substD"
      },
      "index": {
        "description": "",
        "hierarchy": "Unbound LocallyNameless Subst",
        "module": "Unbound.LocallyNameless.Subst",
        "name": "substD",
        "normalized": "Name a-\u003ea-\u003eb-\u003eb",
        "package": "unbound",
        "partial": "",
        "signature": "Name b-\u003eb-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Subst.html#v:substDefault",
      "description": {
        "fct-module": "Unbound.LocallyNameless.Subst",
        "fct-package": "unbound",
        "fct-signature": "Name b -\u003e b -\u003e a -\u003e a",
        "fct-source": "src/Unbound-LocallyNameless-Subst.html#substDefault",
        "fct-type": "function",
        "title": "substDefault"
      },
      "index": {
        "description": "",
        "hierarchy": "Unbound LocallyNameless Subst",
        "module": "Unbound.LocallyNameless.Subst",
        "name": "substDefault",
        "normalized": "Name a-\u003ea-\u003eb-\u003eb",
        "package": "unbound",
        "partial": "Default",
        "signature": "Name b-\u003eb-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Subst.html#v:substR1",
      "description": {
        "fct-module": "Unbound.LocallyNameless.Subst",
        "fct-package": "unbound",
        "fct-signature": "R1 (SubstD b) a -\u003e Name b -\u003e b -\u003e a -\u003e a",
        "fct-source": "src/Unbound-LocallyNameless-Subst.html#substR1",
        "fct-type": "function",
        "title": "substR1"
      },
      "index": {
        "description": "",
        "hierarchy": "Unbound LocallyNameless Subst",
        "module": "Unbound.LocallyNameless.Subst",
        "name": "substR1",
        "normalized": "R(SubstD a)b-\u003eName a-\u003ea-\u003eb-\u003eb",
        "package": "unbound",
        "partial": "",
        "signature": "R(SubstD b)a-\u003eName b-\u003eb-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Subst.html#v:substs",
      "description": {
        "fct-descr": "\u003cp\u003ePerform several simultaneous substitutions.  This method also\n   has a default generic implementation in terms of \u003ccode\u003eisvar\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless.Subst",
        "fct-package": "unbound",
        "fct-signature": "[(Name b, b)] -\u003e a -\u003e a",
        "fct-source": "src/Unbound-LocallyNameless-Subst.html#substs",
        "fct-type": "method",
        "title": "substs"
      },
      "index": {
        "description": "Perform several simultaneous substitutions This method also has default generic implementation in terms of isvar",
        "hierarchy": "Unbound LocallyNameless Subst",
        "module": "Unbound.LocallyNameless.Subst",
        "name": "substs",
        "normalized": "[(Name a,a)]-\u003eb-\u003eb",
        "package": "unbound",
        "partial": "",
        "signature": "[(Name b,b)]-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Subst.html#v:substsD",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Unbound.LocallyNameless.Subst",
        "fct-package": "unbound",
        "fct-signature": "[(Name b, b)] -\u003e a -\u003e a",
        "fct-source": "src/Unbound-LocallyNameless-Subst.html#SubstD",
        "fct-type": "function",
        "title": "substsD"
      },
      "index": {
        "description": "",
        "hierarchy": "Unbound LocallyNameless Subst",
        "module": "Unbound.LocallyNameless.Subst",
        "name": "substsD",
        "normalized": "[(Name a,a)]-\u003eb-\u003eb",
        "package": "unbound",
        "partial": "",
        "signature": "[(Name b,b)]-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Subst.html#v:substsR1",
      "description": {
        "fct-module": "Unbound.LocallyNameless.Subst",
        "fct-package": "unbound",
        "fct-signature": "R1 (SubstD b) a -\u003e [(Name b, b)] -\u003e a -\u003e a",
        "fct-source": "src/Unbound-LocallyNameless-Subst.html#substsR1",
        "fct-type": "function",
        "title": "substsR1"
      },
      "index": {
        "description": "",
        "hierarchy": "Unbound LocallyNameless Subst",
        "module": "Unbound.LocallyNameless.Subst",
        "name": "substsR1",
        "normalized": "R(SubstD a)b-\u003e[(Name a,a)]-\u003eb-\u003eb",
        "package": "unbound",
        "partial": "",
        "signature": "R(SubstD b)a-\u003e[(Name b,b)]-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Types.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSpecial type combinators for specifying binding structure.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Unbound.LocallyNameless.Types",
        "fct-package": "unbound",
        "fct-signature": "module",
        "fct-source": "src/Unbound-LocallyNameless-Types.html",
        "fct-type": "module",
        "title": "Types"
      },
      "index": {
        "description": "Special type combinators for specifying binding structure",
        "hierarchy": "Unbound LocallyNameless Types",
        "module": "Unbound.LocallyNameless.Types",
        "name": "Types",
        "normalized": "",
        "package": "unbound",
        "partial": "Types",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Types.html#t:Bind",
      "description": {
        "fct-module": "Unbound.LocallyNameless.Types",
        "fct-package": "unbound",
        "fct-signature": "type",
        "fct-source": "src/Unbound-LocallyNameless-Types.html#Bind",
        "fct-type": "type",
        "title": "Bind"
      },
      "index": {
        "description": "",
        "hierarchy": "Unbound LocallyNameless Types",
        "module": "Unbound.LocallyNameless.Types",
        "name": "Bind",
        "normalized": "",
        "package": "unbound",
        "partial": "Bind",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Types.html#t:Embed",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eEmbed\u003c/code\u003e allows for terms to be \u003cem\u003eembedded\u003c/em\u003e within patterns.  Such\n   embedded terms do not bind names along with the rest of the\n   pattern.  For examples, see the tutorial or examples directories.\n\u003c/p\u003e\u003cp\u003eIf \u003ccode\u003et\u003c/code\u003e is a \u003cem\u003eterm type\u003c/em\u003e, then \u003ccode\u003eEmbed t\u003c/code\u003e is a \u003cem\u003epattern type\u003c/em\u003e.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003eEmbed\u003c/code\u003e is not abstract since it involves no binding, and hence\n   it is safe to manipulate directly.  To create and destruct\n   \u003ccode\u003eEmbed\u003c/code\u003e terms, you may use the \u003ccode\u003eEmbed\u003c/code\u003e constructor directly.\n   (You may also use the functions \u003ccode\u003eembed\u003c/code\u003e and \u003ccode\u003eunembed\u003c/code\u003e, which\n   additionally can construct or destruct any number of enclosing\n   \u003ccode\u003e\u003ca\u003eShift\u003c/a\u003e\u003c/code\u003es at the same time.)\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless.Types",
        "fct-package": "unbound",
        "fct-signature": "newtype",
        "fct-source": "src/Unbound-LocallyNameless-Types.html#Embed",
        "fct-type": "newtype",
        "title": "Embed"
      },
      "index": {
        "description": "Embed allows for terms to be embedded within patterns Such embedded terms do not bind names along with the rest of the pattern For examples see the tutorial or examples directories If is term type then Embed is pattern type Embed is not abstract since it involves no binding and hence it is safe to manipulate directly To create and destruct Embed terms you may use the Embed constructor directly You may also use the functions embed and unembed which additionally can construct or destruct any number of enclosing Shift at the same time",
        "hierarchy": "Unbound LocallyNameless Types",
        "module": "Unbound.LocallyNameless.Types",
        "name": "Embed",
        "normalized": "",
        "package": "unbound",
        "partial": "Embed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Types.html#t:GenBind",
      "description": {
        "fct-descr": "\u003cp\u003eThe most fundamental combinator for expressing binding structure\n   is \u003ccode\u003e\u003ca\u003eBind\u003c/a\u003e\u003c/code\u003e.  The \u003cem\u003eterm type\u003c/em\u003e \u003ccode\u003eBind p t\u003c/code\u003e represents a pattern \u003ccode\u003ep\u003c/code\u003e\n   paired with a term \u003ccode\u003et\u003c/code\u003e, where names in \u003ccode\u003ep\u003c/code\u003e are bound within \u003ccode\u003et\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eName\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eBind\u003c/a\u003e\u003c/code\u003e is also abstract. You can create bindings\n   using \u003ccode\u003ebind\u003c/code\u003e and take them apart with \u003ccode\u003eunbind\u003c/code\u003e and friends.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless.Types",
        "fct-package": "unbound",
        "fct-signature": "data",
        "fct-source": "src/Unbound-LocallyNameless-Types.html#GenBind",
        "fct-type": "data",
        "title": "GenBind"
      },
      "index": {
        "description": "The most fundamental combinator for expressing binding structure is Bind The term type Bind represents pattern paired with term where names in are bound within Like Name Bind is also abstract You can create bindings using bind and take them apart with unbind and friends",
        "hierarchy": "Unbound LocallyNameless Types",
        "module": "Unbound.LocallyNameless.Types",
        "name": "GenBind",
        "normalized": "",
        "package": "unbound",
        "partial": "Gen Bind",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Types.html#t:Rebind",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eRebind\u003c/code\u003e allows for \u003cem\u003enested\u003c/em\u003e bindings.  If \u003ccode\u003ep1\u003c/code\u003e and \u003ccode\u003ep2\u003c/code\u003e are\n   pattern types, then \u003ccode\u003eRebind p1 p2\u003c/code\u003e is also a pattern type,\n   similar to the pattern type \u003ccode\u003e(p1,p2)\u003c/code\u003e except that \u003ccode\u003ep1\u003c/code\u003e\n   \u003cem\u003escopes over\u003c/em\u003e \u003ccode\u003ep2\u003c/code\u003e.  That is, names within terms embedded in \u003ccode\u003ep2\u003c/code\u003e\n   may refer to binders in \u003ccode\u003ep1\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless.Types",
        "fct-package": "unbound",
        "fct-signature": "data",
        "fct-source": "src/Unbound-LocallyNameless-Types.html#Rebind",
        "fct-type": "data",
        "title": "Rebind"
      },
      "index": {
        "description": "Rebind allows for nested bindings If p1 and p2 are pattern types then Rebind p1 p2 is also pattern type similar to the pattern type p1 p2 except that p1 scopes over p2 That is names within terms embedded in p2 may refer to binders in p1",
        "hierarchy": "Unbound LocallyNameless Types",
        "module": "Unbound.LocallyNameless.Types",
        "name": "Rebind",
        "normalized": "",
        "package": "unbound",
        "partial": "Rebind",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Types.html#t:Rec",
      "description": {
        "fct-descr": "\u003cp\u003eIf \u003ccode\u003ep\u003c/code\u003e is a pattern type, then \u003ccode\u003eRec p\u003c/code\u003e is also a pattern type,\n which is \u003cem\u003erecursive\u003c/em\u003e in the sense that \u003ccode\u003ep\u003c/code\u003e may bind names in terms\n embedded within itself.  Useful for encoding e.g. lectrec and\n Agda's dot notation.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless.Types",
        "fct-package": "unbound",
        "fct-signature": "data",
        "fct-source": "src/Unbound-LocallyNameless-Types.html#Rec",
        "fct-type": "data",
        "title": "Rec"
      },
      "index": {
        "description": "If is pattern type then Rec is also pattern type which is recursive in the sense that may bind names in terms embedded within itself Useful for encoding e.g lectrec and Agda dot notation",
        "hierarchy": "Unbound LocallyNameless Types",
        "module": "Unbound.LocallyNameless.Types",
        "name": "Rec",
        "normalized": "",
        "package": "unbound",
        "partial": "Rec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Types.html#t:SetBind",
      "description": {
        "fct-module": "Unbound.LocallyNameless.Types",
        "fct-package": "unbound",
        "fct-signature": "type",
        "fct-source": "src/Unbound-LocallyNameless-Types.html#SetBind",
        "fct-type": "type",
        "title": "SetBind"
      },
      "index": {
        "description": "",
        "hierarchy": "Unbound LocallyNameless Types",
        "module": "Unbound.LocallyNameless.Types",
        "name": "SetBind",
        "normalized": "",
        "package": "unbound",
        "partial": "Set Bind",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Types.html#t:SetPlusBind",
      "description": {
        "fct-module": "Unbound.LocallyNameless.Types",
        "fct-package": "unbound",
        "fct-signature": "type",
        "fct-source": "src/Unbound-LocallyNameless-Types.html#SetPlusBind",
        "fct-type": "type",
        "title": "SetPlusBind"
      },
      "index": {
        "description": "",
        "hierarchy": "Unbound LocallyNameless Types",
        "module": "Unbound.LocallyNameless.Types",
        "name": "SetPlusBind",
        "normalized": "",
        "package": "unbound",
        "partial": "Set Plus Bind",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Types.html#t:Shift",
      "description": {
        "fct-descr": "\u003cp\u003eShift the scope of an embedded term one level outwards.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless.Types",
        "fct-package": "unbound",
        "fct-signature": "newtype",
        "fct-source": "src/Unbound-LocallyNameless-Types.html#Shift",
        "fct-type": "newtype",
        "title": "Shift"
      },
      "index": {
        "description": "Shift the scope of an embedded term one level outwards",
        "hierarchy": "Unbound LocallyNameless Types",
        "module": "Unbound.LocallyNameless.Types",
        "name": "Shift",
        "normalized": "",
        "package": "unbound",
        "partial": "Shift",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Types.html#t:TRec",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eTRec\u003c/code\u003e is a standalone variant of \u003ccode\u003e\u003ca\u003eRec\u003c/a\u003e\u003c/code\u003e: the only difference is\n   that whereas \u003ccode\u003e\u003ccode\u003e\u003ca\u003eRec\u003c/a\u003e\u003c/code\u003e p\u003c/code\u003e is a pattern type, \u003ccode\u003eTRec p\u003c/code\u003e\n   is a \u003cem\u003eterm type\u003c/em\u003e.  It is isomorphic to \u003ccode\u003e\u003ccode\u003e\u003ca\u003eBind\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eRec\u003c/a\u003e\u003c/code\u003e p) ()\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote that \u003ccode\u003eTRec\u003c/code\u003e corresponds to Pottier's \u003cem\u003eabstraction\u003c/em\u003e construct\n   from alpha-Caml.  In this context, \u003ccode\u003e\u003ccode\u003e\u003ca\u003eEmbed\u003c/a\u003e\u003c/code\u003e t\u003c/code\u003e corresponds to\n   alpha-Caml's \u003ccode\u003einner t\u003c/code\u003e, and \u003ccode\u003e\u003ccode\u003e\u003ca\u003eShift\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eEmbed\u003c/a\u003e\u003c/code\u003e t)\u003c/code\u003e corresponds to\n   alpha-Caml's \u003ccode\u003eouter t\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless.Types",
        "fct-package": "unbound",
        "fct-signature": "newtype",
        "fct-source": "src/Unbound-LocallyNameless-Types.html#TRec",
        "fct-type": "newtype",
        "title": "TRec"
      },
      "index": {
        "description": "TRec is standalone variant of Rec the only difference is that whereas Rec is pattern type TRec is term type It is isomorphic to Bind Rec Note that TRec corresponds to Pottier abstraction construct from alpha-Caml In this context Embed corresponds to alpha-Caml inner and Shift Embed corresponds to alpha-Caml outer",
        "hierarchy": "Unbound LocallyNameless Types",
        "module": "Unbound.LocallyNameless.Types",
        "name": "TRec",
        "normalized": "",
        "package": "unbound",
        "partial": "TRec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Types.html#v:B",
      "description": {
        "fct-module": "Unbound.LocallyNameless.Types",
        "fct-package": "unbound",
        "fct-signature": "B p t",
        "fct-source": "src/Unbound-LocallyNameless-Types.html#GenBind",
        "fct-type": "function",
        "title": "B"
      },
      "index": {
        "description": "",
        "hierarchy": "Unbound LocallyNameless Types",
        "module": "Unbound.LocallyNameless.Types",
        "name": "B",
        "normalized": "",
        "package": "unbound",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Types.html#v:Embed",
      "description": {
        "fct-module": "Unbound.LocallyNameless.Types",
        "fct-package": "unbound",
        "fct-signature": "Embed t",
        "fct-source": "src/Unbound-LocallyNameless-Types.html#Embed",
        "fct-type": "function",
        "title": "Embed"
      },
      "index": {
        "description": "",
        "hierarchy": "Unbound LocallyNameless Types",
        "module": "Unbound.LocallyNameless.Types",
        "name": "Embed",
        "normalized": "",
        "package": "unbound",
        "partial": "Embed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Types.html#v:R",
      "description": {
        "fct-module": "Unbound.LocallyNameless.Types",
        "fct-package": "unbound",
        "fct-signature": "R p1 p2",
        "fct-source": "src/Unbound-LocallyNameless-Types.html#Rebind",
        "fct-type": "function",
        "title": "R"
      },
      "index": {
        "description": "",
        "hierarchy": "Unbound LocallyNameless Types",
        "module": "Unbound.LocallyNameless.Types",
        "name": "R",
        "normalized": "",
        "package": "unbound",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Types.html#v:Rec",
      "description": {
        "fct-module": "Unbound.LocallyNameless.Types",
        "fct-package": "unbound",
        "fct-signature": "Rec p",
        "fct-source": "src/Unbound-LocallyNameless-Types.html#Rec",
        "fct-type": "function",
        "title": "Rec"
      },
      "index": {
        "description": "",
        "hierarchy": "Unbound LocallyNameless Types",
        "module": "Unbound.LocallyNameless.Types",
        "name": "Rec",
        "normalized": "",
        "package": "unbound",
        "partial": "Rec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Types.html#v:Shift",
      "description": {
        "fct-module": "Unbound.LocallyNameless.Types",
        "fct-package": "unbound",
        "fct-signature": "Shift p",
        "fct-source": "src/Unbound-LocallyNameless-Types.html#Shift",
        "fct-type": "function",
        "title": "Shift"
      },
      "index": {
        "description": "",
        "hierarchy": "Unbound LocallyNameless Types",
        "module": "Unbound.LocallyNameless.Types",
        "name": "Shift",
        "normalized": "",
        "package": "unbound",
        "partial": "Shift",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Types.html#v:TRec",
      "description": {
        "fct-module": "Unbound.LocallyNameless.Types",
        "fct-package": "unbound",
        "fct-signature": "TRec (Bind (Rec p) ())",
        "fct-source": "src/Unbound-LocallyNameless-Types.html#TRec",
        "fct-type": "function",
        "title": "TRec"
      },
      "index": {
        "description": "",
        "hierarchy": "Unbound LocallyNameless Types",
        "module": "Unbound.LocallyNameless.Types",
        "name": "TRec",
        "normalized": "TRec(Bind(Rec a)())",
        "package": "unbound",
        "partial": "TRec",
        "signature": "TRec(Bind(Rec p)())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Types.html#v:rEmbed",
      "description": {
        "fct-module": "Unbound.LocallyNameless.Types",
        "fct-package": "unbound",
        "fct-signature": "R (Embed t)",
        "fct-source": "src/Unbound-LocallyNameless-Types.html#rEmbed",
        "fct-type": "function",
        "title": "rEmbed"
      },
      "index": {
        "description": "",
        "hierarchy": "Unbound LocallyNameless Types",
        "module": "Unbound.LocallyNameless.Types",
        "name": "rEmbed",
        "normalized": "",
        "package": "unbound",
        "partial": "Embed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Types.html#v:rGenBind",
      "description": {
        "fct-module": "Unbound.LocallyNameless.Types",
        "fct-package": "unbound",
        "fct-signature": "R (GenBind order card p t)",
        "fct-source": "src/Unbound-LocallyNameless-Types.html#rGenBind",
        "fct-type": "function",
        "title": "rGenBind"
      },
      "index": {
        "description": "",
        "hierarchy": "Unbound LocallyNameless Types",
        "module": "Unbound.LocallyNameless.Types",
        "name": "rGenBind",
        "normalized": "",
        "package": "unbound",
        "partial": "Gen Bind",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Types.html#v:rRebind",
      "description": {
        "fct-module": "Unbound.LocallyNameless.Types",
        "fct-package": "unbound",
        "fct-signature": "R (Rebind p1 p2)",
        "fct-source": "src/Unbound-LocallyNameless-Types.html#rRebind",
        "fct-type": "function",
        "title": "rRebind"
      },
      "index": {
        "description": "",
        "hierarchy": "Unbound LocallyNameless Types",
        "module": "Unbound.LocallyNameless.Types",
        "name": "rRebind",
        "normalized": "",
        "package": "unbound",
        "partial": "Rebind",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Types.html#v:rRec",
      "description": {
        "fct-module": "Unbound.LocallyNameless.Types",
        "fct-package": "unbound",
        "fct-signature": "R (Rec p)",
        "fct-source": "src/Unbound-LocallyNameless-Types.html#rRec",
        "fct-type": "function",
        "title": "rRec"
      },
      "index": {
        "description": "",
        "hierarchy": "Unbound LocallyNameless Types",
        "module": "Unbound.LocallyNameless.Types",
        "name": "rRec",
        "normalized": "",
        "package": "unbound",
        "partial": "Rec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless-Types.html#v:rShift",
      "description": {
        "fct-module": "Unbound.LocallyNameless.Types",
        "fct-package": "unbound",
        "fct-signature": "R (Shift p)",
        "fct-source": "src/Unbound-LocallyNameless-Types.html#rShift",
        "fct-type": "function",
        "title": "rShift"
      },
      "index": {
        "description": "",
        "hierarchy": "Unbound LocallyNameless Types",
        "module": "Unbound.LocallyNameless.Types",
        "name": "rShift",
        "normalized": "",
        "package": "unbound",
        "partial": "Shift",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA generic implementation of standard functions dealing with names\n and binding structure (alpha equivalence, free variable\n calculation, capture-avoiding substitution, name permutation, ...)\n using a locally nameless representation.\n\u003c/p\u003e\u003cp\u003eNormal users of this library should only need to import this\n module.  In particular, this module is careful to export only an\n abstract interface with various safety guarantees.  Power users who\n wish to have access to the internals of the library (at the risk of\n shooting oneself in the foot) can directly import the various\n implementation modules such as \u003ca\u003eUnbound.LocallyNameless.Name\u003c/a\u003e and\n so on.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eTen-second tutorial\u003c/em\u003e: use the type combinators \u003ccode\u003e\u003ca\u003eBind\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eEmbed\u003c/a\u003e\u003c/code\u003e,\n \u003ccode\u003e\u003ca\u003eRebind\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eRec\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eTRec\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003eShift\u003c/a\u003e\u003c/code\u003e to specify the binding\n structure of your data types.  Then use Template Haskell to derive\n generic representations for your types:\n\u003c/p\u003e\u003cpre\u003e $(derive [''Your, ''Types, ''Here])\n\u003c/pre\u003e\u003cp\u003eFinally, declare \u003ccode\u003e\u003ca\u003eAlpha\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eSubst\u003c/a\u003e\u003c/code\u003e instances for your types.\n Then you can go to town using all the generically-derived\n operations like \u003ccode\u003e\u003ca\u003eaeq\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003efv\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003esubst\u003c/a\u003e\u003c/code\u003e, and so on.\n\u003c/p\u003e\u003cp\u003eFor more information, see the more in-depth literate Haskell\n tutorial in the \u003ccode\u003etutorial\u003c/code\u003e directory (which can be obtained as part\n of the library source package: \u003ccode\u003ecabal unpack unbound\u003c/code\u003e) and the\n examples in the \u003ccode\u003eexample\u003c/code\u003e directory.\n\u003c/p\u003e\u003cp\u003eSee also: Stephanie Weirich, Brent A. Yorgey, and Tim Sheard.\n \u003cem\u003eBinders Unbound\u003c/em\u003e. ICFP'11, September 2011, Tokyo, Japan. \u003ca\u003ehttp://www.cis.upenn.edu/~byorgey/papers/binders-unbound.pdf\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Unbound.LocallyNameless",
        "fct-package": "unbound",
        "fct-signature": "module",
        "fct-source": "src/Unbound-LocallyNameless.html",
        "fct-type": "module",
        "title": "LocallyNameless"
      },
      "index": {
        "description": "generic implementation of standard functions dealing with names and binding structure alpha equivalence free variable calculation capture-avoiding substitution name permutation using locally nameless representation Normal users of this library should only need to import this module In particular this module is careful to export only an abstract interface with various safety guarantees Power users who wish to have access to the internals of the library at the risk of shooting oneself in the foot can directly import the various implementation modules such as Unbound.LocallyNameless.Name and so on Ten-second tutorial use the type combinators Bind Embed Rebind Rec TRec and Shift to specify the binding structure of your data types Then use Template Haskell to derive generic representations for your types derive Your Types Here Finally declare Alpha and Subst instances for your types Then you can go to town using all the generically-derived operations like aeq fv subst and so on For more information see the more in-depth literate Haskell tutorial in the tutorial directory which can be obtained as part of the library source package cabal unpack unbound and the examples in the example directory See also Stephanie Weirich Brent Yorgey and Tim Sheard Binders Unbound ICFP September Tokyo Japan http www.cis.upenn.edu byorgey papers binders-unbound.pdf",
        "hierarchy": "Unbound LocallyNameless",
        "module": "Unbound.LocallyNameless",
        "name": "LocallyNameless",
        "normalized": "",
        "package": "unbound",
        "partial": "Locally Nameless",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless.html#t:Alpha",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003eAlpha\u003c/code\u003e type class is for types which may contain names.  The\n   \u003ccode\u003eRep1\u003c/code\u003e constraint means that we can only make instances of this\n   class for types that have generic representations (which can be\n   automatically derived by RepLib.)\n\u003c/p\u003e\u003cp\u003eNote that the methods of \u003ccode\u003eAlpha\u003c/code\u003e should almost never be called\n   directly.  Instead, use other methods provided by this module\n   which are defined in terms of \u003ccode\u003eAlpha\u003c/code\u003e methods.\n\u003c/p\u003e\u003cp\u003eMost of the time, the default definitions of these methods will\n   suffice, so you can make an instance for your data type by simply\n   declaring\n\u003c/p\u003e\u003cpre\u003e instance Alpha MyType\n\u003c/pre\u003e\u003cp\u003eOccasionally, however, it may be useful to override the default\n   implementations of one or more \u003ccode\u003eAlpha\u003c/code\u003e methods for a particular\n   type.  For example, consider a type like\n\u003c/p\u003e\u003cpre\u003e data Term = ...\n           | Annotation Stuff Term\n\u003c/pre\u003e\u003cp\u003ewhere the \u003ccode\u003eAnnotation\u003c/code\u003e constructor of \u003ccode\u003eTerm\u003c/code\u003e associates some sort\n   of annotation with a term --- say, information obtained from a\n   parser about where in an input file the term came from.  This\n   information is needed to produce good error messages, but should\n   not be taken into consideration when, say, comparing two \u003ccode\u003eTerm\u003c/code\u003es\n   for alpha-equivalence.  In order to make \u003ccode\u003eaeq\u003c/code\u003e ignore\n   annotations, you can override the implementation of \u003ccode\u003eaeq'\u003c/code\u003e like\n   so:\n\u003c/p\u003e\u003cpre\u003e instance Alpha Term where\n   aeq' c (Annotation _ t1) t2 = aeq' c t1 t2\n   aeq' c t1 (Annotation _ t2) = aeq' c t1 t2\n   aeq' c t1 t2 = aeqR1 rep1 t1 t2\n\u003c/pre\u003e\u003cp\u003eNote how the call to \u003ccode\u003e\u003ca\u003eaeqR1\u003c/a\u003e\u003c/code\u003e handles all the other cases generically.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless",
        "fct-package": "unbound",
        "fct-signature": "class",
        "fct-source": "src/Unbound-LocallyNameless-Alpha.html#Alpha",
        "fct-type": "class",
        "title": "Alpha"
      },
      "index": {
        "description": "The Alpha type class is for types which may contain names The Rep1 constraint means that we can only make instances of this class for types that have generic representations which can be automatically derived by RepLib Note that the methods of Alpha should almost never be called directly Instead use other methods provided by this module which are defined in terms of Alpha methods Most of the time the default definitions of these methods will suffice so you can make an instance for your data type by simply declaring instance Alpha MyType Occasionally however it may be useful to override the default implementations of one or more Alpha methods for particular type For example consider type like data Term Annotation Stuff Term where the Annotation constructor of Term associates some sort of annotation with term say information obtained from parser about where in an input file the term came from This information is needed to produce good error messages but should not be taken into consideration when say comparing two Term for alpha-equivalence In order to make aeq ignore annotations you can override the implementation of aeq like so instance Alpha Term where aeq Annotation t1 t2 aeq t1 t2 aeq t1 Annotation t2 aeq t1 t2 aeq t1 t2 aeqR1 rep1 t1 t2 Note how the call to aeqR1 handles all the other cases generically",
        "hierarchy": "Unbound LocallyNameless",
        "module": "Unbound.LocallyNameless",
        "name": "Alpha",
        "normalized": "",
        "package": "unbound",
        "partial": "Alpha",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless.html#t:AnyName",
      "description": {
        "fct-descr": "\u003cp\u003eA name with a hidden (existentially quantified) sort.  To hide\n   the sort of a name, use the \u003ccode\u003e\u003ca\u003eAnyName\u003c/a\u003e\u003c/code\u003e constructor directly; to\n   extract a name with a hidden sort, use \u003ccode\u003e\u003ca\u003etoSortedName\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless",
        "fct-package": "unbound",
        "fct-signature": "data",
        "fct-source": "src/Unbound-LocallyNameless-Name.html#AnyName",
        "fct-type": "data",
        "title": "AnyName"
      },
      "index": {
        "description": "name with hidden existentially quantified sort To hide the sort of name use the AnyName constructor directly to extract name with hidden sort use toSortedName",
        "hierarchy": "Unbound LocallyNameless",
        "module": "Unbound.LocallyNameless",
        "name": "AnyName",
        "normalized": "",
        "package": "unbound",
        "partial": "Any Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless.html#t:Bind",
      "description": {
        "fct-module": "Unbound.LocallyNameless",
        "fct-package": "unbound",
        "fct-signature": "type",
        "fct-source": "src/Unbound-LocallyNameless-Types.html#Bind",
        "fct-type": "type",
        "title": "Bind"
      },
      "index": {
        "description": "",
        "hierarchy": "Unbound LocallyNameless",
        "module": "Unbound.LocallyNameless",
        "name": "Bind",
        "normalized": "",
        "package": "unbound",
        "partial": "Bind",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless.html#t:Collection",
      "description": {
        "fct-descr": "\u003cp\u003eCollections are foldable types that support empty, singleton,\n   union, and map operations.  The result of a free variable\n   calculation may be any collection.  Instances are provided for\n   lists, sets, and multisets.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless",
        "fct-package": "unbound",
        "fct-signature": "class",
        "fct-source": "src/Unbound-Util.html#Collection",
        "fct-type": "class",
        "title": "Collection"
      },
      "index": {
        "description": "Collections are foldable types that support empty singleton union and map operations The result of free variable calculation may be any collection Instances are provided for lists sets and multisets",
        "hierarchy": "Unbound LocallyNameless",
        "module": "Unbound.LocallyNameless",
        "name": "Collection",
        "normalized": "",
        "package": "unbound",
        "partial": "Collection",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless.html#t:Embed",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eEmbed\u003c/code\u003e allows for terms to be \u003cem\u003eembedded\u003c/em\u003e within patterns.  Such\n   embedded terms do not bind names along with the rest of the\n   pattern.  For examples, see the tutorial or examples directories.\n\u003c/p\u003e\u003cp\u003eIf \u003ccode\u003et\u003c/code\u003e is a \u003cem\u003eterm type\u003c/em\u003e, then \u003ccode\u003eEmbed t\u003c/code\u003e is a \u003cem\u003epattern type\u003c/em\u003e.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003eEmbed\u003c/code\u003e is not abstract since it involves no binding, and hence\n   it is safe to manipulate directly.  To create and destruct\n   \u003ccode\u003eEmbed\u003c/code\u003e terms, you may use the \u003ccode\u003eEmbed\u003c/code\u003e constructor directly.\n   (You may also use the functions \u003ccode\u003eembed\u003c/code\u003e and \u003ccode\u003eunembed\u003c/code\u003e, which\n   additionally can construct or destruct any number of enclosing\n   \u003ccode\u003e\u003ca\u003eShift\u003c/a\u003e\u003c/code\u003es at the same time.)\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless",
        "fct-package": "unbound",
        "fct-signature": "newtype",
        "fct-source": "src/Unbound-LocallyNameless-Types.html#Embed",
        "fct-type": "newtype",
        "title": "Embed"
      },
      "index": {
        "description": "Embed allows for terms to be embedded within patterns Such embedded terms do not bind names along with the rest of the pattern For examples see the tutorial or examples directories If is term type then Embed is pattern type Embed is not abstract since it involves no binding and hence it is safe to manipulate directly To create and destruct Embed terms you may use the Embed constructor directly You may also use the functions embed and unembed which additionally can construct or destruct any number of enclosing Shift at the same time",
        "hierarchy": "Unbound LocallyNameless",
        "module": "Unbound.LocallyNameless",
        "name": "Embed",
        "normalized": "",
        "package": "unbound",
        "partial": "Embed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless.html#t:Fresh",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003eFresh\u003c/code\u003e type class governs monads which can generate new\n   globally unique \u003ccode\u003e\u003ca\u003eName\u003c/a\u003e\u003c/code\u003es based on a given \u003ccode\u003e\u003ca\u003eName\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless",
        "fct-package": "unbound",
        "fct-signature": "class",
        "fct-source": "src/Unbound-LocallyNameless-Fresh.html#Fresh",
        "fct-type": "class",
        "title": "Fresh"
      },
      "index": {
        "description": "The Fresh type class governs monads which can generate new globally unique Name based on given Name",
        "hierarchy": "Unbound LocallyNameless",
        "module": "Unbound.LocallyNameless",
        "name": "Fresh",
        "normalized": "",
        "package": "unbound",
        "partial": "Fresh",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless.html#t:FreshM",
      "description": {
        "fct-descr": "\u003cp\u003eA convenient monad which is an instance of \u003ccode\u003e\u003ca\u003eFresh\u003c/a\u003e\u003c/code\u003e.  It keeps\n   track of a global index used for generating fresh names, which is\n   incremented every time \u003ccode\u003e\u003ca\u003efresh\u003c/a\u003e\u003c/code\u003e is called.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless",
        "fct-package": "unbound",
        "fct-signature": "type",
        "fct-source": "src/Unbound-LocallyNameless-Fresh.html#FreshM",
        "fct-type": "type",
        "title": "FreshM"
      },
      "index": {
        "description": "convenient monad which is an instance of Fresh It keeps track of global index used for generating fresh names which is incremented every time fresh is called",
        "hierarchy": "Unbound LocallyNameless",
        "module": "Unbound.LocallyNameless",
        "name": "FreshM",
        "normalized": "",
        "package": "unbound",
        "partial": "Fresh",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless.html#t:FreshMT",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003eFreshM\u003c/code\u003e monad transformer.  Keeps track of the lowest index\n   still globally unused, and increments the index every time it is\n   asked for a fresh name.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless",
        "fct-package": "unbound",
        "fct-signature": "data",
        "fct-source": "src/Unbound-LocallyNameless-Fresh.html#FreshMT",
        "fct-type": "data",
        "title": "FreshMT"
      },
      "index": {
        "description": "The FreshM monad transformer Keeps track of the lowest index still globally unused and increments the index every time it is asked for fresh name",
        "hierarchy": "Unbound LocallyNameless",
        "module": "Unbound.LocallyNameless",
        "name": "FreshMT",
        "normalized": "",
        "package": "unbound",
        "partial": "Fresh MT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless.html#t:LFresh",
      "description": {
        "fct-descr": "\u003cp\u003eThis is the class of monads that support freshness in an\n   (implicit) local scope.  Generated names are fresh for the current\n   local scope, not necessarily globally fresh.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless",
        "fct-package": "unbound",
        "fct-signature": "class",
        "fct-source": "src/Unbound-LocallyNameless-Fresh.html#LFresh",
        "fct-type": "class",
        "title": "LFresh"
      },
      "index": {
        "description": "This is the class of monads that support freshness in an implicit local scope Generated names are fresh for the current local scope not necessarily globally fresh",
        "hierarchy": "Unbound LocallyNameless",
        "module": "Unbound.LocallyNameless",
        "name": "LFresh",
        "normalized": "",
        "package": "unbound",
        "partial": "LFresh",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless.html#t:LFreshM",
      "description": {
        "fct-descr": "\u003cp\u003eA convenient monad which is an instance of \u003ccode\u003e\u003ca\u003eLFresh\u003c/a\u003e\u003c/code\u003e.  It keeps\n   track of a set of names to avoid, and when asked for a fresh one\n   will choose the first unused numerical name.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless",
        "fct-package": "unbound",
        "fct-signature": "type",
        "fct-source": "src/Unbound-LocallyNameless-Fresh.html#LFreshM",
        "fct-type": "type",
        "title": "LFreshM"
      },
      "index": {
        "description": "convenient monad which is an instance of LFresh It keeps track of set of names to avoid and when asked for fresh one will choose the first unused numerical name",
        "hierarchy": "Unbound LocallyNameless",
        "module": "Unbound.LocallyNameless",
        "name": "LFreshM",
        "normalized": "",
        "package": "unbound",
        "partial": "LFresh",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless.html#t:LFreshMT",
      "description": {
        "fct-descr": "\u003cp\u003eThe LFresh monad transformer.  Keeps track of a set of names to\n avoid, and when asked for a fresh one will choose the first numeric\n prefix of the given name which is currently unused.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless",
        "fct-package": "unbound",
        "fct-signature": "data",
        "fct-source": "src/Unbound-LocallyNameless-Fresh.html#LFreshMT",
        "fct-type": "data",
        "title": "LFreshMT"
      },
      "index": {
        "description": "The LFresh monad transformer Keeps track of set of names to avoid and when asked for fresh one will choose the first numeric prefix of the given name which is currently unused",
        "hierarchy": "Unbound LocallyNameless",
        "module": "Unbound.LocallyNameless",
        "name": "LFreshMT",
        "normalized": "",
        "package": "unbound",
        "partial": "LFresh MT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless.html#t:Multiset",
      "description": {
        "fct-descr": "\u003cp\u003eA simple representation of multisets.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless",
        "fct-package": "unbound",
        "fct-signature": "newtype",
        "fct-source": "src/Unbound-Util.html#Multiset",
        "fct-type": "newtype",
        "title": "Multiset"
      },
      "index": {
        "description": "simple representation of multisets",
        "hierarchy": "Unbound LocallyNameless",
        "module": "Unbound.LocallyNameless",
        "name": "Multiset",
        "normalized": "",
        "package": "unbound",
        "partial": "Multiset",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless.html#t:Name",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eName\u003c/a\u003e\u003c/code\u003es are things that get bound.  This type is intentionally\n   abstract; to create a \u003ccode\u003e\u003ca\u003eName\u003c/a\u003e\u003c/code\u003e you can use \u003ccode\u003e\u003ca\u003estring2Name\u003c/a\u003e\u003c/code\u003e or\n   \u003ccode\u003e\u003ca\u003einteger2Name\u003c/a\u003e\u003c/code\u003e. The type parameter is a tag, or \u003cem\u003esort\u003c/em\u003e, which\n   tells us what sorts of things this name may stand for. The sort\n   must be a \u003cem\u003erepresentable\u003c/em\u003e type, \u003cem\u003ei.e.\u003c/em\u003e an instance of the \u003ccode\u003eRep\u003c/code\u003e\n   type class from the \u003ccode\u003eRepLib\u003c/code\u003e generic programming framework.\n\u003c/p\u003e\u003cp\u003eTo hide the sort of a name, use \u003ccode\u003e\u003ca\u003eAnyName\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless",
        "fct-package": "unbound",
        "fct-signature": "data",
        "fct-source": "src/Unbound-LocallyNameless-Name.html#Name",
        "fct-type": "data",
        "title": "Name"
      },
      "index": {
        "description": "Name are things that get bound This type is intentionally abstract to create Name you can use string2Name or integer2Name The type parameter is tag or sort which tells us what sorts of things this name may stand for The sort must be representable type i.e an instance of the Rep type class from the RepLib generic programming framework To hide the sort of name use AnyName",
        "hierarchy": "Unbound LocallyNameless",
        "module": "Unbound.LocallyNameless",
        "name": "Name",
        "normalized": "",
        "package": "unbound",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless.html#t:Perm",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003cem\u003epermutation\u003c/em\u003e is a bijective function from names to names\n   which is the identity on all but a finite set of names.  They\n   form the basis for nominal approaches to binding, but can\n   also be useful in general.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless",
        "fct-package": "unbound",
        "fct-signature": "data",
        "fct-source": "src/Unbound-PermM.html#Perm",
        "fct-type": "data",
        "title": "Perm"
      },
      "index": {
        "description": "permutation is bijective function from names to names which is the identity on all but finite set of names They form the basis for nominal approaches to binding but can also be useful in general",
        "hierarchy": "Unbound LocallyNameless",
        "module": "Unbound.LocallyNameless",
        "name": "Perm",
        "normalized": "",
        "package": "unbound",
        "partial": "Perm",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless.html#t:Rebind",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eRebind\u003c/code\u003e allows for \u003cem\u003enested\u003c/em\u003e bindings.  If \u003ccode\u003ep1\u003c/code\u003e and \u003ccode\u003ep2\u003c/code\u003e are\n   pattern types, then \u003ccode\u003eRebind p1 p2\u003c/code\u003e is also a pattern type,\n   similar to the pattern type \u003ccode\u003e(p1,p2)\u003c/code\u003e except that \u003ccode\u003ep1\u003c/code\u003e\n   \u003cem\u003escopes over\u003c/em\u003e \u003ccode\u003ep2\u003c/code\u003e.  That is, names within terms embedded in \u003ccode\u003ep2\u003c/code\u003e\n   may refer to binders in \u003ccode\u003ep1\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless",
        "fct-package": "unbound",
        "fct-signature": "data",
        "fct-source": "src/Unbound-LocallyNameless-Types.html#Rebind",
        "fct-type": "data",
        "title": "Rebind"
      },
      "index": {
        "description": "Rebind allows for nested bindings If p1 and p2 are pattern types then Rebind p1 p2 is also pattern type similar to the pattern type p1 p2 except that p1 scopes over p2 That is names within terms embedded in p2 may refer to binders in p1",
        "hierarchy": "Unbound LocallyNameless",
        "module": "Unbound.LocallyNameless",
        "name": "Rebind",
        "normalized": "",
        "package": "unbound",
        "partial": "Rebind",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless.html#t:Rec",
      "description": {
        "fct-descr": "\u003cp\u003eIf \u003ccode\u003ep\u003c/code\u003e is a pattern type, then \u003ccode\u003eRec p\u003c/code\u003e is also a pattern type,\n which is \u003cem\u003erecursive\u003c/em\u003e in the sense that \u003ccode\u003ep\u003c/code\u003e may bind names in terms\n embedded within itself.  Useful for encoding e.g. lectrec and\n Agda's dot notation.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless",
        "fct-package": "unbound",
        "fct-signature": "data",
        "fct-source": "src/Unbound-LocallyNameless-Types.html#Rec",
        "fct-type": "data",
        "title": "Rec"
      },
      "index": {
        "description": "If is pattern type then Rec is also pattern type which is recursive in the sense that may bind names in terms embedded within itself Useful for encoding e.g lectrec and Agda dot notation",
        "hierarchy": "Unbound LocallyNameless",
        "module": "Unbound.LocallyNameless",
        "name": "Rec",
        "normalized": "",
        "package": "unbound",
        "partial": "Rec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless.html#t:Shift",
      "description": {
        "fct-descr": "\u003cp\u003eShift the scope of an embedded term one level outwards.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless",
        "fct-package": "unbound",
        "fct-signature": "newtype",
        "fct-source": "src/Unbound-LocallyNameless-Types.html#Shift",
        "fct-type": "newtype",
        "title": "Shift"
      },
      "index": {
        "description": "Shift the scope of an embedded term one level outwards",
        "hierarchy": "Unbound LocallyNameless",
        "module": "Unbound.LocallyNameless",
        "name": "Shift",
        "normalized": "",
        "package": "unbound",
        "partial": "Shift",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless.html#t:Subst",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003eSubst\u003c/code\u003e class governs capture-avoiding substitution.  To\n   derive this class, you only need to indicate where the variables\n   are in the data type, by overriding the method \u003ccode\u003e\u003ca\u003eisvar\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless",
        "fct-package": "unbound",
        "fct-signature": "class",
        "fct-source": "src/Unbound-LocallyNameless-Subst.html#Subst",
        "fct-type": "class",
        "title": "Subst"
      },
      "index": {
        "description": "The Subst class governs capture-avoiding substitution To derive this class you only need to indicate where the variables are in the data type by overriding the method isvar",
        "hierarchy": "Unbound LocallyNameless",
        "module": "Unbound.LocallyNameless",
        "name": "Subst",
        "normalized": "",
        "package": "unbound",
        "partial": "Subst",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless.html#t:SubstName",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ccode\u003e\u003ca\u003eisvar\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless",
        "fct-package": "unbound",
        "fct-signature": "data",
        "fct-source": "src/Unbound-LocallyNameless-Subst.html#SubstName",
        "fct-type": "data",
        "title": "SubstName"
      },
      "index": {
        "description": "See isvar",
        "hierarchy": "Unbound LocallyNameless",
        "module": "Unbound.LocallyNameless",
        "name": "SubstName",
        "normalized": "",
        "package": "unbound",
        "partial": "Subst Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless.html#t:TRec",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eTRec\u003c/code\u003e is a standalone variant of \u003ccode\u003e\u003ca\u003eRec\u003c/a\u003e\u003c/code\u003e: the only difference is\n   that whereas \u003ccode\u003e\u003ccode\u003e\u003ca\u003eRec\u003c/a\u003e\u003c/code\u003e p\u003c/code\u003e is a pattern type, \u003ccode\u003eTRec p\u003c/code\u003e\n   is a \u003cem\u003eterm type\u003c/em\u003e.  It is isomorphic to \u003ccode\u003e\u003ccode\u003e\u003ca\u003eBind\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eRec\u003c/a\u003e\u003c/code\u003e p) ()\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote that \u003ccode\u003eTRec\u003c/code\u003e corresponds to Pottier's \u003cem\u003eabstraction\u003c/em\u003e construct\n   from alpha-Caml.  In this context, \u003ccode\u003e\u003ccode\u003e\u003ca\u003eEmbed\u003c/a\u003e\u003c/code\u003e t\u003c/code\u003e corresponds to\n   alpha-Caml's \u003ccode\u003einner t\u003c/code\u003e, and \u003ccode\u003e\u003ccode\u003e\u003ca\u003eShift\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eEmbed\u003c/a\u003e\u003c/code\u003e t)\u003c/code\u003e corresponds to\n   alpha-Caml's \u003ccode\u003eouter t\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless",
        "fct-package": "unbound",
        "fct-signature": "data",
        "fct-source": "src/Unbound-LocallyNameless-Types.html#TRec",
        "fct-type": "data",
        "title": "TRec"
      },
      "index": {
        "description": "TRec is standalone variant of Rec the only difference is that whereas Rec is pattern type TRec is term type It is isomorphic to Bind Rec Note that TRec corresponds to Pottier abstraction construct from alpha-Caml In this context Embed corresponds to alpha-Caml inner and Shift Embed corresponds to alpha-Caml outer",
        "hierarchy": "Unbound LocallyNameless",
        "module": "Unbound.LocallyNameless",
        "name": "TRec",
        "normalized": "",
        "package": "unbound",
        "partial": "TRec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless.html#v:AnyName",
      "description": {
        "fct-module": "Unbound.LocallyNameless",
        "fct-package": "unbound",
        "fct-signature": "AnyName (Name a)",
        "fct-source": "src/Unbound-LocallyNameless-Name.html#AnyName",
        "fct-type": "function",
        "title": "AnyName"
      },
      "index": {
        "description": "",
        "hierarchy": "Unbound LocallyNameless",
        "module": "Unbound.LocallyNameless",
        "name": "AnyName",
        "normalized": "",
        "package": "unbound",
        "partial": "Any Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless.html#v:Embed",
      "description": {
        "fct-module": "Unbound.LocallyNameless",
        "fct-package": "unbound",
        "fct-signature": "Embed t",
        "fct-source": "src/Unbound-LocallyNameless-Types.html#Embed",
        "fct-type": "function",
        "title": "Embed"
      },
      "index": {
        "description": "",
        "hierarchy": "Unbound LocallyNameless",
        "module": "Unbound.LocallyNameless",
        "name": "Embed",
        "normalized": "",
        "package": "unbound",
        "partial": "Embed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless.html#v:Multiset",
      "description": {
        "fct-module": "Unbound.LocallyNameless",
        "fct-package": "unbound",
        "fct-signature": "Multiset (Map a Int)",
        "fct-source": "src/Unbound-Util.html#Multiset",
        "fct-type": "function",
        "title": "Multiset"
      },
      "index": {
        "description": "",
        "hierarchy": "Unbound LocallyNameless",
        "module": "Unbound.LocallyNameless",
        "name": "Multiset",
        "normalized": "",
        "package": "unbound",
        "partial": "Multiset",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless.html#v:Shift",
      "description": {
        "fct-module": "Unbound.LocallyNameless",
        "fct-package": "unbound",
        "fct-signature": "Shift p",
        "fct-source": "src/Unbound-LocallyNameless-Types.html#Shift",
        "fct-type": "function",
        "title": "Shift"
      },
      "index": {
        "description": "",
        "hierarchy": "Unbound LocallyNameless",
        "module": "Unbound.LocallyNameless",
        "name": "Shift",
        "normalized": "",
        "package": "unbound",
        "partial": "Shift",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless.html#v:SubstName",
      "description": {
        "fct-module": "Unbound.LocallyNameless",
        "fct-package": "unbound",
        "fct-signature": "Name a -\u003e SubstName a b",
        "fct-source": "src/Unbound-LocallyNameless-Subst.html#SubstName",
        "fct-type": "function",
        "title": "SubstName"
      },
      "index": {
        "description": "",
        "hierarchy": "Unbound LocallyNameless",
        "module": "Unbound.LocallyNameless",
        "name": "SubstName",
        "normalized": "Name a-\u003eSubstName a b",
        "package": "unbound",
        "partial": "Subst Name",
        "signature": "Name a-\u003eSubstName a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless.html#v:acompare",
      "description": {
        "fct-descr": "\u003cp\u003eAn alpha-respecting total order on terms involving binders.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless",
        "fct-package": "unbound",
        "fct-signature": "t -\u003e t -\u003e Ordering",
        "fct-source": "src/Unbound-LocallyNameless-Ops.html#acompare",
        "fct-type": "function",
        "title": "acompare"
      },
      "index": {
        "description": "An alpha-respecting total order on terms involving binders",
        "hierarchy": "Unbound LocallyNameless",
        "module": "Unbound.LocallyNameless",
        "name": "acompare",
        "normalized": "a-\u003ea-\u003eOrdering",
        "package": "unbound",
        "partial": "",
        "signature": "t-\u003et-\u003eOrdering"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless.html#v:acompare-39-",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ccode\u003eacompare\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless",
        "fct-package": "unbound",
        "fct-signature": "AlphaCtx -\u003e a -\u003e a -\u003e Ordering",
        "fct-source": "src/Unbound-LocallyNameless-Alpha.html#acompare%27",
        "fct-type": "method",
        "title": "acompare'"
      },
      "index": {
        "description": "See acompare",
        "hierarchy": "Unbound LocallyNameless",
        "module": "Unbound.LocallyNameless",
        "name": "acompare'",
        "normalized": "AlphaCtx-\u003ea-\u003ea-\u003eOrdering",
        "package": "unbound",
        "partial": "",
        "signature": "AlphaCtx-\u003ea-\u003ea-\u003eOrdering"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless.html#v:aeq",
      "description": {
        "fct-descr": "\u003cp\u003eDetermine the alpha-equivalence of two terms.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless",
        "fct-package": "unbound",
        "fct-signature": "t -\u003e t -\u003e Bool",
        "fct-source": "src/Unbound-LocallyNameless-Ops.html#aeq",
        "fct-type": "function",
        "title": "aeq"
      },
      "index": {
        "description": "Determine the alpha-equivalence of two terms",
        "hierarchy": "Unbound LocallyNameless",
        "module": "Unbound.LocallyNameless",
        "name": "aeq",
        "normalized": "a-\u003ea-\u003eBool",
        "package": "unbound",
        "partial": "",
        "signature": "t-\u003et-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless.html#v:aeq-39-",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ccode\u003eaeq\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless",
        "fct-package": "unbound",
        "fct-signature": "AlphaCtx -\u003e a -\u003e a -\u003e Bool",
        "fct-source": "src/Unbound-LocallyNameless-Alpha.html#aeq%27",
        "fct-type": "method",
        "title": "aeq'"
      },
      "index": {
        "description": "See aeq",
        "hierarchy": "Unbound LocallyNameless",
        "module": "Unbound.LocallyNameless",
        "name": "aeq'",
        "normalized": "AlphaCtx-\u003ea-\u003ea-\u003eBool",
        "package": "unbound",
        "partial": "",
        "signature": "AlphaCtx-\u003ea-\u003ea-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless.html#v:aeqBinders",
      "description": {
        "fct-descr": "\u003cp\u003eDetermine (alpha-)equivalence of patterns.  Do they bind the same\n   variables in the same patterns and have alpha-equivalent\n   annotations in matching positions?\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless",
        "fct-package": "unbound",
        "fct-signature": "p -\u003e p -\u003e Bool",
        "fct-source": "src/Unbound-LocallyNameless-Ops.html#aeqBinders",
        "fct-type": "function",
        "title": "aeqBinders"
      },
      "index": {
        "description": "Determine alpha equivalence of patterns Do they bind the same variables in the same patterns and have alpha-equivalent annotations in matching positions",
        "hierarchy": "Unbound LocallyNameless",
        "module": "Unbound.LocallyNameless",
        "name": "aeqBinders",
        "normalized": "a-\u003ea-\u003eBool",
        "package": "unbound",
        "partial": "Binders",
        "signature": "p-\u003ep-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless.html#v:anyName2Integer",
      "description": {
        "fct-descr": "\u003cp\u003eGet the integer index of an \u003ccode\u003e\u003ca\u003eAnyName\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless",
        "fct-package": "unbound",
        "fct-signature": "AnyName -\u003e Integer",
        "fct-source": "src/Unbound-LocallyNameless-Name.html#anyName2Integer",
        "fct-type": "function",
        "title": "anyName2Integer"
      },
      "index": {
        "description": "Get the integer index of an AnyName",
        "hierarchy": "Unbound LocallyNameless",
        "module": "Unbound.LocallyNameless",
        "name": "anyName2Integer",
        "normalized": "AnyName-\u003eInteger",
        "package": "unbound",
        "partial": "Name Integer",
        "signature": "AnyName-\u003eInteger"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless.html#v:anyName2String",
      "description": {
        "fct-descr": "\u003cp\u003eGet the string part of an \u003ccode\u003e\u003ca\u003eAnyName\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless",
        "fct-package": "unbound",
        "fct-signature": "AnyName -\u003e String",
        "fct-source": "src/Unbound-LocallyNameless-Name.html#anyName2String",
        "fct-type": "function",
        "title": "anyName2String"
      },
      "index": {
        "description": "Get the string part of an AnyName",
        "hierarchy": "Unbound LocallyNameless",
        "module": "Unbound.LocallyNameless",
        "name": "anyName2String",
        "normalized": "AnyName-\u003eString",
        "package": "unbound",
        "partial": "Name String",
        "signature": "AnyName-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless.html#v:apply",
      "description": {
        "fct-descr": "\u003cp\u003eApply a permutation to an element of the domain.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless",
        "fct-package": "unbound",
        "fct-signature": "Perm a -\u003e a -\u003e a",
        "fct-source": "src/Unbound-PermM.html#apply",
        "fct-type": "function",
        "title": "apply"
      },
      "index": {
        "description": "Apply permutation to an element of the domain",
        "hierarchy": "Unbound LocallyNameless",
        "module": "Unbound.LocallyNameless",
        "name": "apply",
        "normalized": "Perm a-\u003ea-\u003ea",
        "package": "unbound",
        "partial": "",
        "signature": "Perm a-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless.html#v:avoid",
      "description": {
        "fct-descr": "\u003cp\u003eAvoid the given names when freshening in the subcomputation,\n   that is, add the given names to the in-scope set.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless",
        "fct-package": "unbound",
        "fct-signature": "[AnyName] -\u003e m a -\u003e m a",
        "fct-source": "src/Unbound-LocallyNameless-Fresh.html#avoid",
        "fct-type": "method",
        "title": "avoid"
      },
      "index": {
        "description": "Avoid the given names when freshening in the subcomputation that is add the given names to the in-scope set",
        "hierarchy": "Unbound LocallyNameless",
        "module": "Unbound.LocallyNameless",
        "name": "avoid",
        "normalized": "[AnyName]-\u003ea b-\u003ea b",
        "package": "unbound",
        "partial": "",
        "signature": "[AnyName]-\u003em a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless.html#v:bind",
      "description": {
        "fct-descr": "\u003cp\u003eA smart constructor for binders, also sometimes referred to as\n   \"close\".  Free variables in the term are taken to be references\n   to matching binders in the pattern.  (Free variables with no\n   matching binders will remain free.)\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless",
        "fct-package": "unbound",
        "fct-signature": "p -\u003e t -\u003e Bind p t",
        "fct-source": "src/Unbound-LocallyNameless-Ops.html#bind",
        "fct-type": "function",
        "title": "bind"
      },
      "index": {
        "description": "smart constructor for binders also sometimes referred to as close Free variables in the term are taken to be references to matching binders in the pattern Free variables with no matching binders will remain free",
        "hierarchy": "Unbound LocallyNameless",
        "module": "Unbound.LocallyNameless",
        "name": "bind",
        "normalized": "a-\u003eb-\u003eBind a b",
        "package": "unbound",
        "partial": "",
        "signature": "p-\u003et-\u003eBind p t"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless.html#v:binders",
      "description": {
        "fct-descr": "\u003cp\u003eCalculate the binding variables (of a particular sort) in a\n   pattern.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless",
        "fct-package": "unbound",
        "fct-signature": "p -\u003e f (Name a)",
        "fct-source": "src/Unbound-LocallyNameless-Ops.html#binders",
        "fct-type": "function",
        "title": "binders"
      },
      "index": {
        "description": "Calculate the binding variables of particular sort in pattern",
        "hierarchy": "Unbound LocallyNameless",
        "module": "Unbound.LocallyNameless",
        "name": "binders",
        "normalized": "a-\u003eb(Name c)",
        "package": "unbound",
        "partial": "",
        "signature": "p-\u003ef(Name a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless.html#v:bindersAny",
      "description": {
        "fct-descr": "\u003cp\u003eCalculate the binding variables (of any sort) in a pattern.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless",
        "fct-package": "unbound",
        "fct-signature": "p -\u003e f AnyName",
        "fct-source": "src/Unbound-LocallyNameless-Ops.html#bindersAny",
        "fct-type": "function",
        "title": "bindersAny"
      },
      "index": {
        "description": "Calculate the binding variables of any sort in pattern",
        "hierarchy": "Unbound LocallyNameless",
        "module": "Unbound.LocallyNameless",
        "name": "bindersAny",
        "normalized": "a-\u003eb AnyName",
        "package": "unbound",
        "partial": "Any",
        "signature": "p-\u003ef AnyName"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless.html#v:close",
      "description": {
        "fct-descr": "\u003cp\u003eReplace free names by bound names.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless",
        "fct-package": "unbound",
        "fct-signature": "AlphaCtx -\u003e b -\u003e a -\u003e a",
        "fct-source": "src/Unbound-LocallyNameless-Alpha.html#close",
        "fct-type": "method",
        "title": "close"
      },
      "index": {
        "description": "Replace free names by bound names",
        "hierarchy": "Unbound LocallyNameless",
        "module": "Unbound.LocallyNameless",
        "name": "close",
        "normalized": "AlphaCtx-\u003ea-\u003eb-\u003eb",
        "package": "unbound",
        "partial": "",
        "signature": "AlphaCtx-\u003eb-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless.html#v:cmap",
      "description": {
        "fct-descr": "\u003cp\u003eCollections must be functorial.  The normal \u003ccode\u003eFunctor\u003c/code\u003e class\n   won't do because of the \u003ccode\u003eOrd\u003c/code\u003e constraint on sets.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless",
        "fct-package": "unbound",
        "fct-signature": "(a -\u003e b) -\u003e f a -\u003e f b",
        "fct-source": "src/Unbound-Util.html#cmap",
        "fct-type": "method",
        "title": "cmap"
      },
      "index": {
        "description": "Collections must be functorial The normal Functor class won do because of the Ord constraint on sets",
        "hierarchy": "Unbound LocallyNameless",
        "module": "Unbound.LocallyNameless",
        "name": "cmap",
        "normalized": "(a-\u003eb)-\u003ec a-\u003ec b",
        "package": "unbound",
        "partial": "",
        "signature": "(a-\u003eb)-\u003ef a-\u003ef b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless.html#v:compose",
      "description": {
        "fct-descr": "\u003cp\u003eCompose two permutations.  The right-hand permutation will be\n   applied first.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless",
        "fct-package": "unbound",
        "fct-signature": "Perm a -\u003e Perm a -\u003e Perm a",
        "fct-source": "src/Unbound-PermM.html#compose",
        "fct-type": "function",
        "title": "compose"
      },
      "index": {
        "description": "Compose two permutations The right-hand permutation will be applied first",
        "hierarchy": "Unbound LocallyNameless",
        "module": "Unbound.LocallyNameless",
        "name": "compose",
        "normalized": "Perm a-\u003ePerm a-\u003ePerm a",
        "package": "unbound",
        "partial": "",
        "signature": "Perm a-\u003ePerm a-\u003ePerm a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless.html#v:embed",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct an embedded term, which is an instance of \u003ccode\u003e\u003ca\u003eEmbed\u003c/a\u003e\u003c/code\u003e\n   with any number of enclosing \u003ccode\u003e\u003ca\u003eShift\u003c/a\u003e\u003c/code\u003es.  That is, \u003ccode\u003eembed\u003c/code\u003e can have\n   any of the types\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003et -\u003e Embed t\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003et -\u003e Shift (Embed t)\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003et -\u003e Shift (Shift (Embed t))\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eand so on.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless",
        "fct-package": "unbound",
        "fct-signature": "Embedded e -\u003e e",
        "fct-source": "src/Unbound-LocallyNameless-Alpha.html#embed",
        "fct-type": "function",
        "title": "embed"
      },
      "index": {
        "description": "Construct an embedded term which is an instance of Embed with any number of enclosing Shift That is embed can have any of the types Embed Shift Embed Shift Shift Embed and so on",
        "hierarchy": "Unbound LocallyNameless",
        "module": "Unbound.LocallyNameless",
        "name": "embed",
        "normalized": "Embedded a-\u003ea",
        "package": "unbound",
        "partial": "",
        "signature": "Embedded e-\u003ee"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless.html#v:empty",
      "description": {
        "fct-descr": "\u003cp\u003eThe empty (identity) permutation.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless",
        "fct-package": "unbound",
        "fct-signature": "Perm a",
        "fct-source": "src/Unbound-PermM.html#empty",
        "fct-type": "function",
        "title": "empty"
      },
      "index": {
        "description": "The empty identity permutation",
        "hierarchy": "Unbound LocallyNameless",
        "module": "Unbound.LocallyNameless",
        "name": "empty",
        "normalized": "",
        "package": "unbound",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless.html#v:emptyC",
      "description": {
        "fct-descr": "\u003cp\u003eAn empty collection. Must be the identity for \u003ccode\u003eunion\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless",
        "fct-package": "unbound",
        "fct-signature": "f a",
        "fct-source": "src/Unbound-Util.html#emptyC",
        "fct-type": "method",
        "title": "emptyC"
      },
      "index": {
        "description": "An empty collection Must be the identity for union",
        "hierarchy": "Unbound LocallyNameless",
        "module": "Unbound.LocallyNameless",
        "name": "emptyC",
        "normalized": "",
        "package": "unbound",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless.html#v:findpatrec",
      "description": {
        "fct-descr": "\u003cp\u003eFind the (first) index of the name in the pattern if one\n   exists; otherwise, return the number of names encountered\n   instead.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless",
        "fct-package": "unbound",
        "fct-signature": "a -\u003e AnyName -\u003e FindResult",
        "fct-source": "src/Unbound-LocallyNameless-Alpha.html#findpatrec",
        "fct-type": "method",
        "title": "findpatrec"
      },
      "index": {
        "description": "Find the first index of the name in the pattern if one exists otherwise return the number of names encountered instead",
        "hierarchy": "Unbound LocallyNameless",
        "module": "Unbound.LocallyNameless",
        "name": "findpatrec",
        "normalized": "a-\u003eAnyName-\u003eFindResult",
        "package": "unbound",
        "partial": "",
        "signature": "a-\u003eAnyName-\u003eFindResult"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless.html#v:fresh",
      "description": {
        "fct-descr": "\u003cp\u003eGenerate a new globally unique name based on the given one.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless",
        "fct-package": "unbound",
        "fct-signature": "Name a -\u003e m (Name a)",
        "fct-source": "src/Unbound-LocallyNameless-Fresh.html#fresh",
        "fct-type": "method",
        "title": "fresh"
      },
      "index": {
        "description": "Generate new globally unique name based on the given one",
        "hierarchy": "Unbound LocallyNameless",
        "module": "Unbound.LocallyNameless",
        "name": "fresh",
        "normalized": "Name a-\u003eb(Name a)",
        "package": "unbound",
        "partial": "",
        "signature": "Name a-\u003em(Name a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless.html#v:freshen",
      "description": {
        "fct-descr": "\u003cp\u003eFreshen a pattern by replacing all old binding \u003ccode\u003e\u003ca\u003eName\u003c/a\u003e\u003c/code\u003es with new\n   fresh \u003ccode\u003e\u003ca\u003eName\u003c/a\u003e\u003c/code\u003es, returning a new pattern and a \u003ccode\u003e\u003ccode\u003e\u003ca\u003ePerm\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eName\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e\n   specifying how \u003ccode\u003e\u003ca\u003eName\u003c/a\u003e\u003c/code\u003es were replaced.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless",
        "fct-package": "unbound",
        "fct-signature": "p -\u003e m (p, Perm AnyName)",
        "fct-source": "src/Unbound-LocallyNameless-Ops.html#freshen",
        "fct-type": "function",
        "title": "freshen"
      },
      "index": {
        "description": "Freshen pattern by replacing all old binding Name with new fresh Name returning new pattern and Perm Name specifying how Name were replaced",
        "hierarchy": "Unbound LocallyNameless",
        "module": "Unbound.LocallyNameless",
        "name": "freshen",
        "normalized": "a-\u003eb(a,Perm AnyName)",
        "package": "unbound",
        "partial": "",
        "signature": "p-\u003em(p,Perm AnyName)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless.html#v:freshen-39-",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ccode\u003efreshen\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless",
        "fct-package": "unbound",
        "fct-signature": "AlphaCtx -\u003e a -\u003e m (a, Perm AnyName)",
        "fct-source": "src/Unbound-LocallyNameless-Alpha.html#freshen%27",
        "fct-type": "method",
        "title": "freshen'"
      },
      "index": {
        "description": "See freshen",
        "hierarchy": "Unbound LocallyNameless",
        "module": "Unbound.LocallyNameless",
        "name": "freshen'",
        "normalized": "AlphaCtx-\u003ea-\u003eb(a,Perm AnyName)",
        "package": "unbound",
        "partial": "",
        "signature": "AlphaCtx-\u003ea-\u003em(a,Perm AnyName)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless.html#v:fv",
      "description": {
        "fct-descr": "\u003cp\u003eCalculate the free variables of a particular sort contained in a\n   term.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless",
        "fct-package": "unbound",
        "fct-signature": "t -\u003e f (Name a)",
        "fct-source": "src/Unbound-LocallyNameless-Ops.html#fv",
        "fct-type": "function",
        "title": "fv"
      },
      "index": {
        "description": "Calculate the free variables of particular sort contained in term",
        "hierarchy": "Unbound LocallyNameless",
        "module": "Unbound.LocallyNameless",
        "name": "fv",
        "normalized": "a-\u003eb(Name c)",
        "package": "unbound",
        "partial": "",
        "signature": "t-\u003ef(Name a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless.html#v:fv-39-",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ccode\u003efv\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless",
        "fct-package": "unbound",
        "fct-signature": "AlphaCtx -\u003e a -\u003e f AnyName",
        "fct-source": "src/Unbound-LocallyNameless-Alpha.html#fv%27",
        "fct-type": "method",
        "title": "fv'"
      },
      "index": {
        "description": "See fv",
        "hierarchy": "Unbound LocallyNameless",
        "module": "Unbound.LocallyNameless",
        "name": "fv'",
        "normalized": "AlphaCtx-\u003ea-\u003eb AnyName",
        "package": "unbound",
        "partial": "",
        "signature": "AlphaCtx-\u003ea-\u003ef AnyName"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless.html#v:fvAny",
      "description": {
        "fct-descr": "\u003cp\u003eCalculate the free variables (of any sort) contained in a term.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless",
        "fct-package": "unbound",
        "fct-signature": "t -\u003e f AnyName",
        "fct-source": "src/Unbound-LocallyNameless-Ops.html#fvAny",
        "fct-type": "function",
        "title": "fvAny"
      },
      "index": {
        "description": "Calculate the free variables of any sort contained in term",
        "hierarchy": "Unbound LocallyNameless",
        "module": "Unbound.LocallyNameless",
        "name": "fvAny",
        "normalized": "a-\u003eb AnyName",
        "package": "unbound",
        "partial": "Any",
        "signature": "t-\u003ef AnyName"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless.html#v:getAvoids",
      "description": {
        "fct-descr": "\u003cp\u003eGet the set of names currently being avoided.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless",
        "fct-package": "unbound",
        "fct-signature": "m (Set AnyName)",
        "fct-source": "src/Unbound-LocallyNameless-Fresh.html#getAvoids",
        "fct-type": "method",
        "title": "getAvoids"
      },
      "index": {
        "description": "Get the set of names currently being avoided",
        "hierarchy": "Unbound LocallyNameless",
        "module": "Unbound.LocallyNameless",
        "name": "getAvoids",
        "normalized": "",
        "package": "unbound",
        "partial": "Avoids",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless.html#v:integer2Name",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a free \u003ccode\u003e\u003ca\u003eName\u003c/a\u003e\u003c/code\u003e from an \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless",
        "fct-package": "unbound",
        "fct-signature": "Integer -\u003e Name a",
        "fct-source": "src/Unbound-LocallyNameless-Name.html#integer2Name",
        "fct-type": "function",
        "title": "integer2Name"
      },
      "index": {
        "description": "Create free Name from an Integer",
        "hierarchy": "Unbound LocallyNameless",
        "module": "Unbound.LocallyNameless",
        "name": "integer2Name",
        "normalized": "Integer-\u003eName a",
        "package": "unbound",
        "partial": "Name",
        "signature": "Integer-\u003eName a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless.html#v:isCoerceVar",
      "description": {
        "fct-descr": "\u003cp\u003eThis is an alternative version to \u003ccode\u003e\u003ca\u003eisvar\u003c/a\u003e\u003c/code\u003e, useable in the case \n   that the substituted argument doesn't have *exactly* the same type\n   as the term it should be substituted into.\n   The default implementation always returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless",
        "fct-package": "unbound",
        "fct-signature": "a -\u003e Maybe (SubstCoerce a b)",
        "fct-source": "src/Unbound-LocallyNameless-Subst.html#isCoerceVar",
        "fct-type": "method",
        "title": "isCoerceVar"
      },
      "index": {
        "description": "This is an alternative version to isvar useable in the case that the substituted argument doesn have exactly the same type as the term it should be substituted into The default implementation always returns Nothing",
        "hierarchy": "Unbound LocallyNameless",
        "module": "Unbound.LocallyNameless",
        "name": "isCoerceVar",
        "normalized": "a-\u003eMaybe(SubstCoerce a b)",
        "package": "unbound",
        "partial": "Coerce Var",
        "signature": "a-\u003eMaybe(SubstCoerce a b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless.html#v:isEmbed",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eisEmbed\u003c/code\u003e is needed internally for the implementation of\n   \u003ccode\u003eisPat\u003c/code\u003e.  \u003ccode\u003eisEmbed\u003c/code\u003e is true for terms wrapped in \u003ccode\u003eEmbed\u003c/code\u003e and zero\n   or more occurrences of \u003ccode\u003eShift\u003c/code\u003e.  The default implementation\n   simply returns \u003ccode\u003eFalse\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless",
        "fct-package": "unbound",
        "fct-signature": "a -\u003e Bool",
        "fct-source": "src/Unbound-LocallyNameless-Alpha.html#isEmbed",
        "fct-type": "method",
        "title": "isEmbed"
      },
      "index": {
        "description": "isEmbed is needed internally for the implementation of isPat isEmbed is true for terms wrapped in Embed and zero or more occurrences of Shift The default implementation simply returns False",
        "hierarchy": "Unbound LocallyNameless",
        "module": "Unbound.LocallyNameless",
        "name": "isEmbed",
        "normalized": "a-\u003eBool",
        "package": "unbound",
        "partial": "Embed",
        "signature": "a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless.html#v:isPat",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eisPat x\u003c/code\u003e dynamically checks whether \u003ccode\u003ex\u003c/code\u003e can be used as a valid\n   pattern.  The default instance returns \u003ccode\u003eJust\u003c/code\u003e if at all\n   possible.  If successful, returns a list of names bound by the\n   pattern.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless",
        "fct-package": "unbound",
        "fct-signature": "a -\u003e Maybe [AnyName]",
        "fct-source": "src/Unbound-LocallyNameless-Alpha.html#isPat",
        "fct-type": "method",
        "title": "isPat"
      },
      "index": {
        "description": "isPat dynamically checks whether can be used as valid pattern The default instance returns Just if at all possible If successful returns list of names bound by the pattern",
        "hierarchy": "Unbound LocallyNameless",
        "module": "Unbound.LocallyNameless",
        "name": "isPat",
        "normalized": "a-\u003eMaybe[AnyName]",
        "package": "unbound",
        "partial": "Pat",
        "signature": "a-\u003eMaybe[AnyName]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless.html#v:isTerm",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eisTerm x\u003c/code\u003e dynamically checks whether \u003ccode\u003ex\u003c/code\u003e can be used as a\n   valid term. The default instance returns \u003ccode\u003eTrue\u003c/code\u003e if at all\n   possible.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless",
        "fct-package": "unbound",
        "fct-signature": "a -\u003e Bool",
        "fct-source": "src/Unbound-LocallyNameless-Alpha.html#isTerm",
        "fct-type": "method",
        "title": "isTerm"
      },
      "index": {
        "description": "isTerm dynamically checks whether can be used as valid term The default instance returns True if at all possible",
        "hierarchy": "Unbound LocallyNameless",
        "module": "Unbound.LocallyNameless",
        "name": "isTerm",
        "normalized": "a-\u003eBool",
        "package": "unbound",
        "partial": "Term",
        "signature": "a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless.html#v:isid",
      "description": {
        "fct-descr": "\u003cp\u003eIs this the identity permutation?\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless",
        "fct-package": "unbound",
        "fct-signature": "Perm a -\u003e Bool",
        "fct-source": "src/Unbound-PermM.html#isid",
        "fct-type": "function",
        "title": "isid"
      },
      "index": {
        "description": "Is this the identity permutation",
        "hierarchy": "Unbound LocallyNameless",
        "module": "Unbound.LocallyNameless",
        "name": "isid",
        "normalized": "Perm a-\u003eBool",
        "package": "unbound",
        "partial": "",
        "signature": "Perm a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless.html#v:isvar",
      "description": {
        "fct-descr": "\u003cp\u003eThis is the only method which normally needs to be implemented\n   explicitly.  If the argument is a variable, return its name\n   wrapped in the \u003ccode\u003e\u003ca\u003eSubstName\u003c/a\u003e\u003c/code\u003e constructor.  Return \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e for\n   non-variable arguments.  The default implementation always\n   returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless",
        "fct-package": "unbound",
        "fct-signature": "a -\u003e Maybe (SubstName a b)",
        "fct-source": "src/Unbound-LocallyNameless-Subst.html#isvar",
        "fct-type": "method",
        "title": "isvar"
      },
      "index": {
        "description": "This is the only method which normally needs to be implemented explicitly If the argument is variable return its name wrapped in the SubstName constructor Return Nothing for non-variable arguments The default implementation always returns Nothing",
        "hierarchy": "Unbound LocallyNameless",
        "module": "Unbound.LocallyNameless",
        "name": "isvar",
        "normalized": "a-\u003eMaybe(SubstName a b)",
        "package": "unbound",
        "partial": "",
        "signature": "a-\u003eMaybe(SubstName a b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless.html#v:join",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eJoin\u003c/em\u003e two permutations by taking the union of their relation\n   graphs. Fail if they are inconsistent, i.e. map the same element\n   to two different elements.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless",
        "fct-package": "unbound",
        "fct-signature": "Perm a -\u003e Perm a -\u003e Maybe (Perm a)",
        "fct-source": "src/Unbound-PermM.html#join",
        "fct-type": "function",
        "title": "join"
      },
      "index": {
        "description": "Join two permutations by taking the union of their relation graphs Fail if they are inconsistent i.e map the same element to two different elements",
        "hierarchy": "Unbound LocallyNameless",
        "module": "Unbound.LocallyNameless",
        "name": "join",
        "normalized": "Perm a-\u003ePerm a-\u003eMaybe(Perm a)",
        "package": "unbound",
        "partial": "",
        "signature": "Perm a-\u003ePerm a-\u003eMaybe(Perm a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless.html#v:lfresh",
      "description": {
        "fct-descr": "\u003cp\u003ePick a new name that is fresh for the current (implicit) scope.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless",
        "fct-package": "unbound",
        "fct-signature": "Name a -\u003e m (Name a)",
        "fct-source": "src/Unbound-LocallyNameless-Fresh.html#lfresh",
        "fct-type": "method",
        "title": "lfresh"
      },
      "index": {
        "description": "Pick new name that is fresh for the current implicit scope",
        "hierarchy": "Unbound LocallyNameless",
        "module": "Unbound.LocallyNameless",
        "name": "lfresh",
        "normalized": "Name a-\u003eb(Name a)",
        "package": "unbound",
        "partial": "",
        "signature": "Name a-\u003em(Name a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless.html#v:lfreshen",
      "description": {
        "fct-descr": "\u003cp\u003e\"Locally\" freshen a pattern, replacing all binding names with\n   new names that are not already \"in scope\". The second argument\n   is a continuation, which takes the renamed term and a permutation\n   that specifies how the pattern has been renamed.  The resulting\n   computation will be run with the in-scope set extended by the\n   names just generated.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless",
        "fct-package": "unbound",
        "fct-signature": "p -\u003e (p -\u003e Perm AnyName -\u003e m b) -\u003e m b",
        "fct-source": "src/Unbound-LocallyNameless-Ops.html#lfreshen",
        "fct-type": "function",
        "title": "lfreshen"
      },
      "index": {
        "description": "Locally freshen pattern replacing all binding names with new names that are not already in scope The second argument is continuation which takes the renamed term and permutation that specifies how the pattern has been renamed The resulting computation will be run with the in-scope set extended by the names just generated",
        "hierarchy": "Unbound LocallyNameless",
        "module": "Unbound.LocallyNameless",
        "name": "lfreshen",
        "normalized": "a-\u003e(a-\u003ePerm AnyName-\u003eb c)-\u003eb c",
        "package": "unbound",
        "partial": "",
        "signature": "p-\u003e(p-\u003ePerm AnyName-\u003em b)-\u003em b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless.html#v:lfreshen-39-",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ccode\u003elfreshen\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless",
        "fct-package": "unbound",
        "fct-signature": "AlphaCtx -\u003e a -\u003e (a -\u003e Perm AnyName -\u003e m b) -\u003e m b",
        "fct-source": "src/Unbound-LocallyNameless-Alpha.html#lfreshen%27",
        "fct-type": "method",
        "title": "lfreshen'"
      },
      "index": {
        "description": "See lfreshen",
        "hierarchy": "Unbound LocallyNameless",
        "module": "Unbound.LocallyNameless",
        "name": "lfreshen'",
        "normalized": "AlphaCtx-\u003ea-\u003e(a-\u003ePerm AnyName-\u003eb c)-\u003eb c",
        "package": "unbound",
        "partial": "",
        "signature": "AlphaCtx-\u003ea-\u003e(a-\u003ePerm AnyName-\u003em b)-\u003em b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless.html#v:lunbind",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003elunbind\u003c/code\u003e opens a binding in an \u003ccode\u003e\u003ca\u003eLFresh\u003c/a\u003e\u003c/code\u003e monad, ensuring that the\n   names chosen for the binders are \u003cem\u003elocally\u003c/em\u003e fresh.  The components\n   of the binding are passed to a \u003cem\u003econtinuation\u003c/em\u003e, and the resulting\n   monadic action is run in a context extended to avoid choosing new\n   names which are the same as the ones chosen for this binding.\n\u003c/p\u003e\u003cp\u003eFor more information, see the documentation for the \u003ccode\u003e\u003ca\u003eLFresh\u003c/a\u003e\u003c/code\u003e type\n   class.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless",
        "fct-package": "unbound",
        "fct-signature": "GenBind order card p t -\u003e ((p, t) -\u003e m c) -\u003e m c",
        "fct-source": "src/Unbound-LocallyNameless-Ops.html#lunbind",
        "fct-type": "function",
        "title": "lunbind"
      },
      "index": {
        "description": "lunbind opens binding in an LFresh monad ensuring that the names chosen for the binders are locally fresh The components of the binding are passed to continuation and the resulting monadic action is run in context extended to avoid choosing new names which are the same as the ones chosen for this binding For more information see the documentation for the LFresh type class",
        "hierarchy": "Unbound LocallyNameless",
        "module": "Unbound.LocallyNameless",
        "name": "lunbind",
        "normalized": "GenBind a b c d-\u003e((c,d)-\u003ee f)-\u003ee f",
        "package": "unbound",
        "partial": "",
        "signature": "GenBind order card p t-\u003e((p,t)-\u003em c)-\u003em c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless.html#v:lunbind2",
      "description": {
        "fct-descr": "\u003cp\u003eUnbind two terms with the same locally fresh names, provided the\n   patterns have the same number of binding variables.  See the\n   documentation for \u003ccode\u003e\u003ca\u003eunbind2\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003elunbind\u003c/a\u003e\u003c/code\u003e for more details.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless",
        "fct-package": "unbound",
        "fct-signature": "GenBind order card p1 t1 -\u003e GenBind order card p2 t2 -\u003e (Maybe (p1, t1, p2, t2) -\u003e m r) -\u003e m r",
        "fct-source": "src/Unbound-LocallyNameless-Ops.html#lunbind2",
        "fct-type": "function",
        "title": "lunbind2"
      },
      "index": {
        "description": "Unbind two terms with the same locally fresh names provided the patterns have the same number of binding variables See the documentation for unbind2 and lunbind for more details",
        "hierarchy": "Unbound LocallyNameless",
        "module": "Unbound.LocallyNameless",
        "name": "lunbind2",
        "normalized": "GenBind a b c d-\u003eGenBind a b c d-\u003e(Maybe(c,d,c,d)-\u003ee f)-\u003ee f",
        "package": "unbound",
        "partial": "",
        "signature": "GenBind order card p t-\u003eGenBind order card p t-\u003e(Maybe(p,t,p,t)-\u003em r)-\u003em r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless.html#v:lunbind2Plus",
      "description": {
        "fct-module": "Unbound.LocallyNameless",
        "fct-package": "unbound",
        "fct-signature": "GenBind order card p1 t1 -\u003e GenBind order card p2 t2 -\u003e ((p1, t1, p2, t2) -\u003e m r) -\u003e m r",
        "fct-source": "src/Unbound-LocallyNameless-Ops.html#lunbind2Plus",
        "fct-type": "function",
        "title": "lunbind2Plus"
      },
      "index": {
        "description": "",
        "hierarchy": "Unbound LocallyNameless",
        "module": "Unbound.LocallyNameless",
        "name": "lunbind2Plus",
        "normalized": "GenBind a b c d-\u003eGenBind a b c d-\u003e((c,d,c,d)-\u003ee f)-\u003ee f",
        "package": "unbound",
        "partial": "Plus",
        "signature": "GenBind order card p t-\u003eGenBind order card p t-\u003e((p,t,p,t)-\u003em r)-\u003em r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless.html#v:lunbind3",
      "description": {
        "fct-descr": "\u003cp\u003eUnbind three terms with the same locally fresh names, provided\n   the binders have the same number of binding variables.  See the\n   documentation for \u003ccode\u003e\u003ca\u003eunbind2\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003elunbind\u003c/a\u003e\u003c/code\u003e for more details.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless",
        "fct-package": "unbound",
        "fct-signature": "GenBind order card p1 t1 -\u003e GenBind order card p2 t2 -\u003e GenBind order card p3 t3 -\u003e (Maybe (p1, t1, p2, t2, p3, t3) -\u003e m r) -\u003e m r",
        "fct-source": "src/Unbound-LocallyNameless-Ops.html#lunbind3",
        "fct-type": "function",
        "title": "lunbind3"
      },
      "index": {
        "description": "Unbind three terms with the same locally fresh names provided the binders have the same number of binding variables See the documentation for unbind2 and lunbind for more details",
        "hierarchy": "Unbound LocallyNameless",
        "module": "Unbound.LocallyNameless",
        "name": "lunbind3",
        "normalized": "GenBind a b c d-\u003eGenBind a b c d-\u003eGenBind a b c d-\u003e(Maybe(c,d,c,d,c,d)-\u003ee f)-\u003ee f",
        "package": "unbound",
        "partial": "",
        "signature": "GenBind order card p t-\u003eGenBind order card p t-\u003eGenBind order card p t-\u003e(Maybe(p,t,p,t,p,t)-\u003em r)-\u003em r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless.html#v:lunbind3Plus",
      "description": {
        "fct-module": "Unbound.LocallyNameless",
        "fct-package": "unbound",
        "fct-signature": "GenBind order card p1 t1 -\u003e GenBind order card p2 t2 -\u003e GenBind order card p3 t3 -\u003e ((p1, t1, p2, t2, p3, t3) -\u003e m r) -\u003e m r",
        "fct-source": "src/Unbound-LocallyNameless-Ops.html#lunbind3Plus",
        "fct-type": "function",
        "title": "lunbind3Plus"
      },
      "index": {
        "description": "",
        "hierarchy": "Unbound LocallyNameless",
        "module": "Unbound.LocallyNameless",
        "name": "lunbind3Plus",
        "normalized": "GenBind a b c d-\u003eGenBind a b c d-\u003eGenBind a b c d-\u003e((c,d,c,d,c,d)-\u003ee f)-\u003ee f",
        "package": "unbound",
        "partial": "Plus",
        "signature": "GenBind order card p t-\u003eGenBind order card p t-\u003eGenBind order card p t-\u003e((p,t,p,t,p,t)-\u003em r)-\u003em r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless.html#v:luntrec",
      "description": {
        "fct-descr": "\u003cp\u003eDestructor for recursive abstractions which picks \u003cem\u003elocally\u003c/em\u003e fresh\n   names for binders (see \u003ccode\u003e\u003ca\u003eLFresh\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless",
        "fct-package": "unbound",
        "fct-signature": "TRec p -\u003e m p",
        "fct-source": "src/Unbound-LocallyNameless-Ops.html#luntrec",
        "fct-type": "function",
        "title": "luntrec"
      },
      "index": {
        "description": "Destructor for recursive abstractions which picks locally fresh names for binders see LFresh",
        "hierarchy": "Unbound LocallyNameless",
        "module": "Unbound.LocallyNameless",
        "name": "luntrec",
        "normalized": "TRec a-\u003eb a",
        "package": "unbound",
        "partial": "",
        "signature": "TRec p-\u003em p"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless.html#v:makeName",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a free \u003ccode\u003e\u003ca\u003eName\u003c/a\u003e\u003c/code\u003e from a \u003ccode\u003eString\u003c/code\u003e and an \u003ccode\u003eInteger\u003c/code\u003e index.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless",
        "fct-package": "unbound",
        "fct-signature": "String -\u003e Integer -\u003e Name a",
        "fct-source": "src/Unbound-LocallyNameless-Name.html#makeName",
        "fct-type": "function",
        "title": "makeName"
      },
      "index": {
        "description": "Create free Name from String and an Integer index",
        "hierarchy": "Unbound LocallyNameless",
        "module": "Unbound.LocallyNameless",
        "name": "makeName",
        "normalized": "String-\u003eInteger-\u003eName a",
        "package": "unbound",
        "partial": "Name",
        "signature": "String-\u003eInteger-\u003eName a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless.html#v:mkPerm",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003emkPerm l1 l2\u003c/code\u003e creates a permutation that sends \u003ccode\u003el1\u003c/code\u003e to \u003ccode\u003el2\u003c/code\u003e.\n   Fail if there is no such permutation, either because the lists\n   have different lengths or because they are inconsistent (which\n   can only happen if \u003ccode\u003el1\u003c/code\u003e or \u003ccode\u003el2\u003c/code\u003e have repeated elements).\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless",
        "fct-package": "unbound",
        "fct-signature": "[a] -\u003e [a] -\u003e Maybe (Perm a)",
        "fct-source": "src/Unbound-PermM.html#mkPerm",
        "fct-type": "function",
        "title": "mkPerm"
      },
      "index": {
        "description": "mkPerm l1 l2 creates permutation that sends l1 to l2 Fail if there is no such permutation either because the lists have different lengths or because they are inconsistent which can only happen if l1 or l2 have repeated elements",
        "hierarchy": "Unbound LocallyNameless",
        "module": "Unbound.LocallyNameless",
        "name": "mkPerm",
        "normalized": "[a]-\u003e[a]-\u003eMaybe(Perm a)",
        "package": "unbound",
        "partial": "Perm",
        "signature": "[a]-\u003e[a]-\u003eMaybe(Perm a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless.html#v:name2Integer",
      "description": {
        "fct-descr": "\u003cp\u003eGet the integer index of a \u003ccode\u003e\u003ca\u003eName\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless",
        "fct-package": "unbound",
        "fct-signature": "Name a -\u003e Integer",
        "fct-source": "src/Unbound-LocallyNameless-Name.html#name2Integer",
        "fct-type": "function",
        "title": "name2Integer"
      },
      "index": {
        "description": "Get the integer index of Name",
        "hierarchy": "Unbound LocallyNameless",
        "module": "Unbound.LocallyNameless",
        "name": "name2Integer",
        "normalized": "Name a-\u003eInteger",
        "package": "unbound",
        "partial": "Integer",
        "signature": "Name a-\u003eInteger"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless.html#v:name2String",
      "description": {
        "fct-descr": "\u003cp\u003eGet the string part of a \u003ccode\u003e\u003ca\u003eName\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless",
        "fct-package": "unbound",
        "fct-signature": "Name a -\u003e String",
        "fct-source": "src/Unbound-LocallyNameless-Name.html#name2String",
        "fct-type": "function",
        "title": "name2String"
      },
      "index": {
        "description": "Get the string part of Name",
        "hierarchy": "Unbound LocallyNameless",
        "module": "Unbound.LocallyNameless",
        "name": "name2String",
        "normalized": "Name a-\u003eString",
        "package": "unbound",
        "partial": "String",
        "signature": "Name a-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless.html#v:nthpatrec",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003enthpatrec\u003c/a\u003e\u003c/code\u003e p n\u003c/code\u003e looks up the \u003ccode\u003en\u003c/code\u003eth name in the pattern \u003ccode\u003ep\u003c/code\u003e\n (zero-indexed), returning the number of names encountered if not\n found.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless",
        "fct-package": "unbound",
        "fct-signature": "a -\u003e NthCont",
        "fct-source": "src/Unbound-LocallyNameless-Alpha.html#nthpatrec",
        "fct-type": "method",
        "title": "nthpatrec"
      },
      "index": {
        "description": "nthpatrec looks up the th name in the pattern zero-indexed returning the number of names encountered if not found",
        "hierarchy": "Unbound LocallyNameless",
        "module": "Unbound.LocallyNameless",
        "name": "nthpatrec",
        "normalized": "a-\u003eNthCont",
        "package": "unbound",
        "partial": "",
        "signature": "a-\u003eNthCont"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless.html#v:open",
      "description": {
        "fct-descr": "\u003cp\u003eReplace bound names by free names.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless",
        "fct-package": "unbound",
        "fct-signature": "AlphaCtx -\u003e b -\u003e a -\u003e a",
        "fct-source": "src/Unbound-LocallyNameless-Alpha.html#open",
        "fct-type": "method",
        "title": "open"
      },
      "index": {
        "description": "Replace bound names by free names",
        "hierarchy": "Unbound LocallyNameless",
        "module": "Unbound.LocallyNameless",
        "name": "open",
        "normalized": "AlphaCtx-\u003ea-\u003eb-\u003eb",
        "package": "unbound",
        "partial": "",
        "signature": "AlphaCtx-\u003eb-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless.html#v:patfv",
      "description": {
        "fct-descr": "\u003cp\u003eCalculate the variables of a particular sort that occur freely in\n   terms embedded within a pattern (but are not bound by the pattern).\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless",
        "fct-package": "unbound",
        "fct-signature": "p -\u003e f (Name a)",
        "fct-source": "src/Unbound-LocallyNameless-Ops.html#patfv",
        "fct-type": "function",
        "title": "patfv"
      },
      "index": {
        "description": "Calculate the variables of particular sort that occur freely in terms embedded within pattern but are not bound by the pattern",
        "hierarchy": "Unbound LocallyNameless",
        "module": "Unbound.LocallyNameless",
        "name": "patfv",
        "normalized": "a-\u003eb(Name c)",
        "package": "unbound",
        "partial": "",
        "signature": "p-\u003ef(Name a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless.html#v:patfvAny",
      "description": {
        "fct-descr": "\u003cp\u003eCalculate the variables (of any sort) that occur freely in terms\n   embedded within a pattern (but are not bound by the pattern).\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless",
        "fct-package": "unbound",
        "fct-signature": "p -\u003e f AnyName",
        "fct-source": "src/Unbound-LocallyNameless-Ops.html#patfvAny",
        "fct-type": "function",
        "title": "patfvAny"
      },
      "index": {
        "description": "Calculate the variables of any sort that occur freely in terms embedded within pattern but are not bound by the pattern",
        "hierarchy": "Unbound LocallyNameless",
        "module": "Unbound.LocallyNameless",
        "name": "patfvAny",
        "normalized": "a-\u003eb AnyName",
        "package": "unbound",
        "partial": "Any",
        "signature": "p-\u003ef AnyName"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless.html#v:permbind",
      "description": {
        "fct-descr": "\u003cp\u003eBind the pattern in the term \"up to permutation\" of bound variables.\n   For example, the following 4 terms are \u003cem\u003eall\u003c/em\u003e alpha-equivalent:\n\u003c/p\u003e\u003cpre\u003e permbind [a,b] (a,b)\n permbind [a,b] (b,a)\n permbind [b,a] (a,b)\n permbind [b,a] (b,a)\n\u003c/pre\u003e\u003cp\u003eNote that none of these terms is equivalent to a term with a\n   redundant pattern such as\n\u003c/p\u003e\u003cpre\u003e permbind [a,b,c] (a,b)\n\u003c/pre\u003e\u003cp\u003eFor binding constructors which \u003cem\u003edo\u003c/em\u003e render these equivalent,\n   see \u003ccode\u003e\u003ca\u003esetbind\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003esetbindAny\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless",
        "fct-package": "unbound",
        "fct-signature": "p -\u003e t -\u003e SetBind p t",
        "fct-source": "src/Unbound-LocallyNameless-Ops.html#permbind",
        "fct-type": "function",
        "title": "permbind"
      },
      "index": {
        "description": "Bind the pattern in the term up to permutation of bound variables For example the following terms are all alpha-equivalent permbind permbind permbind permbind Note that none of these terms is equivalent to term with redundant pattern such as permbind For binding constructors which do render these equivalent see setbind and setbindAny",
        "hierarchy": "Unbound LocallyNameless",
        "module": "Unbound.LocallyNameless",
        "name": "permbind",
        "normalized": "a-\u003eb-\u003eSetBind a b",
        "package": "unbound",
        "partial": "",
        "signature": "p-\u003et-\u003eSetBind p t"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless.html#v:rEmbed",
      "description": {
        "fct-module": "Unbound.LocallyNameless",
        "fct-package": "unbound",
        "fct-signature": "R (Embed t)",
        "fct-source": "src/Unbound-LocallyNameless-Types.html#rEmbed",
        "fct-type": "function",
        "title": "rEmbed"
      },
      "index": {
        "description": "",
        "hierarchy": "Unbound LocallyNameless",
        "module": "Unbound.LocallyNameless",
        "name": "rEmbed",
        "normalized": "",
        "package": "unbound",
        "partial": "Embed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless.html#v:rGenBind",
      "description": {
        "fct-module": "Unbound.LocallyNameless",
        "fct-package": "unbound",
        "fct-signature": "R (GenBind order card p t)",
        "fct-source": "src/Unbound-LocallyNameless-Types.html#rGenBind",
        "fct-type": "function",
        "title": "rGenBind"
      },
      "index": {
        "description": "",
        "hierarchy": "Unbound LocallyNameless",
        "module": "Unbound.LocallyNameless",
        "name": "rGenBind",
        "normalized": "",
        "package": "unbound",
        "partial": "Gen Bind",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless.html#v:rName",
      "description": {
        "fct-module": "Unbound.LocallyNameless",
        "fct-package": "unbound",
        "fct-signature": "R (Name a)",
        "fct-source": "src/Unbound-LocallyNameless-Name.html#rName",
        "fct-type": "function",
        "title": "rName"
      },
      "index": {
        "description": "",
        "hierarchy": "Unbound LocallyNameless",
        "module": "Unbound.LocallyNameless",
        "name": "rName",
        "normalized": "",
        "package": "unbound",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless.html#v:rRebind",
      "description": {
        "fct-module": "Unbound.LocallyNameless",
        "fct-package": "unbound",
        "fct-signature": "R (Rebind p1 p2)",
        "fct-source": "src/Unbound-LocallyNameless-Types.html#rRebind",
        "fct-type": "function",
        "title": "rRebind"
      },
      "index": {
        "description": "",
        "hierarchy": "Unbound LocallyNameless",
        "module": "Unbound.LocallyNameless",
        "name": "rRebind",
        "normalized": "",
        "package": "unbound",
        "partial": "Rebind",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless.html#v:rRec",
      "description": {
        "fct-module": "Unbound.LocallyNameless",
        "fct-package": "unbound",
        "fct-signature": "R (Rec p)",
        "fct-source": "src/Unbound-LocallyNameless-Types.html#rRec",
        "fct-type": "function",
        "title": "rRec"
      },
      "index": {
        "description": "",
        "hierarchy": "Unbound LocallyNameless",
        "module": "Unbound.LocallyNameless",
        "name": "rRec",
        "normalized": "",
        "package": "unbound",
        "partial": "Rec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless.html#v:rShift",
      "description": {
        "fct-module": "Unbound.LocallyNameless",
        "fct-package": "unbound",
        "fct-signature": "R (Shift p)",
        "fct-source": "src/Unbound-LocallyNameless-Types.html#rShift",
        "fct-type": "function",
        "title": "rShift"
      },
      "index": {
        "description": "",
        "hierarchy": "Unbound LocallyNameless",
        "module": "Unbound.LocallyNameless",
        "name": "rShift",
        "normalized": "",
        "package": "unbound",
        "partial": "Shift",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless.html#v:rebind",
      "description": {
        "fct-descr": "\u003cp\u003eConstructor for rebinding patterns.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless",
        "fct-package": "unbound",
        "fct-signature": "p1 -\u003e p2 -\u003e Rebind p1 p2",
        "fct-source": "src/Unbound-LocallyNameless-Ops.html#rebind",
        "fct-type": "function",
        "title": "rebind"
      },
      "index": {
        "description": "Constructor for rebinding patterns",
        "hierarchy": "Unbound LocallyNameless",
        "module": "Unbound.LocallyNameless",
        "name": "rebind",
        "normalized": "a-\u003ea-\u003eRebind a a",
        "package": "unbound",
        "partial": "",
        "signature": "p-\u003ep-\u003eRebind p p"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless.html#v:rec",
      "description": {
        "fct-descr": "\u003cp\u003eConstructor for recursive patterns.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless",
        "fct-package": "unbound",
        "fct-signature": "p -\u003e Rec p",
        "fct-source": "src/Unbound-LocallyNameless-Ops.html#rec",
        "fct-type": "function",
        "title": "rec"
      },
      "index": {
        "description": "Constructor for recursive patterns",
        "hierarchy": "Unbound LocallyNameless",
        "module": "Unbound.LocallyNameless",
        "name": "rec",
        "normalized": "a-\u003eRec a",
        "package": "unbound",
        "partial": "",
        "signature": "p-\u003eRec p"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless.html#v:restrict",
      "description": {
        "fct-descr": "\u003cp\u003eRestrict a permutation to a certain domain.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless",
        "fct-package": "unbound",
        "fct-signature": "Perm a -\u003e [a] -\u003e Perm a",
        "fct-source": "src/Unbound-PermM.html#restrict",
        "fct-type": "function",
        "title": "restrict"
      },
      "index": {
        "description": "Restrict permutation to certain domain",
        "hierarchy": "Unbound LocallyNameless",
        "module": "Unbound.LocallyNameless",
        "name": "restrict",
        "normalized": "Perm a-\u003e[a]-\u003ePerm a",
        "package": "unbound",
        "partial": "",
        "signature": "Perm a-\u003e[a]-\u003ePerm a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless.html#v:runFreshM",
      "description": {
        "fct-descr": "\u003cp\u003eRun a FreshM computation (with the global index starting at zero).\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless",
        "fct-package": "unbound",
        "fct-signature": "FreshM a -\u003e a",
        "fct-source": "src/Unbound-LocallyNameless-Fresh.html#runFreshM",
        "fct-type": "function",
        "title": "runFreshM"
      },
      "index": {
        "description": "Run FreshM computation with the global index starting at zero",
        "hierarchy": "Unbound LocallyNameless",
        "module": "Unbound.LocallyNameless",
        "name": "runFreshM",
        "normalized": "FreshM a-\u003ea",
        "package": "unbound",
        "partial": "Fresh",
        "signature": "FreshM a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless.html#v:runFreshMT",
      "description": {
        "fct-descr": "\u003cp\u003eRun a \u003ccode\u003e\u003ca\u003eFreshMT\u003c/a\u003e\u003c/code\u003e computation (with the global index starting at zero).\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless",
        "fct-package": "unbound",
        "fct-signature": "FreshMT m a -\u003e m a",
        "fct-source": "src/Unbound-LocallyNameless-Fresh.html#runFreshMT",
        "fct-type": "function",
        "title": "runFreshMT"
      },
      "index": {
        "description": "Run FreshMT computation with the global index starting at zero",
        "hierarchy": "Unbound LocallyNameless",
        "module": "Unbound.LocallyNameless",
        "name": "runFreshMT",
        "normalized": "FreshMT a b-\u003ea b",
        "package": "unbound",
        "partial": "Fresh MT",
        "signature": "FreshMT m a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless.html#v:runLFreshM",
      "description": {
        "fct-descr": "\u003cp\u003eRun a LFreshM computation in an empty context.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless",
        "fct-package": "unbound",
        "fct-signature": "LFreshM a -\u003e a",
        "fct-source": "src/Unbound-LocallyNameless-Fresh.html#runLFreshM",
        "fct-type": "function",
        "title": "runLFreshM"
      },
      "index": {
        "description": "Run LFreshM computation in an empty context",
        "hierarchy": "Unbound LocallyNameless",
        "module": "Unbound.LocallyNameless",
        "name": "runLFreshM",
        "normalized": "LFreshM a-\u003ea",
        "package": "unbound",
        "partial": "LFresh",
        "signature": "LFreshM a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless.html#v:runLFreshMT",
      "description": {
        "fct-descr": "\u003cp\u003eRun an \u003ccode\u003e\u003ca\u003eLFreshMT\u003c/a\u003e\u003c/code\u003e computation in an empty context.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless",
        "fct-package": "unbound",
        "fct-signature": "LFreshMT m a -\u003e m a",
        "fct-source": "src/Unbound-LocallyNameless-Fresh.html#runLFreshMT",
        "fct-type": "function",
        "title": "runLFreshMT"
      },
      "index": {
        "description": "Run an LFreshMT computation in an empty context",
        "hierarchy": "Unbound LocallyNameless",
        "module": "Unbound.LocallyNameless",
        "name": "runLFreshMT",
        "normalized": "LFreshMT a b-\u003ea b",
        "package": "unbound",
        "partial": "LFresh MT",
        "signature": "LFreshMT m a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless.html#v:s2n",
      "description": {
        "fct-descr": "\u003cp\u003eConvenient synonym for \u003ccode\u003e\u003ca\u003estring2Name\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless",
        "fct-package": "unbound",
        "fct-signature": "String -\u003e Name a",
        "fct-source": "src/Unbound-LocallyNameless-Name.html#s2n",
        "fct-type": "function",
        "title": "s2n"
      },
      "index": {
        "description": "Convenient synonym for string2Name",
        "hierarchy": "Unbound LocallyNameless",
        "module": "Unbound.LocallyNameless",
        "name": "s2n",
        "normalized": "String-\u003eName a",
        "package": "unbound",
        "partial": "",
        "signature": "String-\u003eName a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless.html#v:setbind",
      "description": {
        "fct-descr": "\u003cp\u003eBind the list of names in the term up to permutation and dropping\n   of unused variables.\n\u003c/p\u003e\u003cp\u003eFor example, the following 5 terms are \u003cem\u003eall\u003c/em\u003e alpha-equivalent:\n\u003c/p\u003e\u003cpre\u003e setbind [a,b] (a,b)\n setbind [a,b] (b,a)\n setbind [b,a] (a,b)\n setbind [b,a] (b,a)\n setbind [a,b,c] (a,b)\n\u003c/pre\u003e\u003cp\u003eThere is also a variant, \u003ccode\u003e\u003ca\u003esetbindAny\u003c/a\u003e\u003c/code\u003e, which ignores name sorts.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless",
        "fct-package": "unbound",
        "fct-signature": "[Name a] -\u003e t -\u003e SetPlusBind [Name a] t",
        "fct-source": "src/Unbound-LocallyNameless-Ops.html#setbind",
        "fct-type": "function",
        "title": "setbind"
      },
      "index": {
        "description": "Bind the list of names in the term up to permutation and dropping of unused variables For example the following terms are all alpha-equivalent setbind setbind setbind setbind setbind There is also variant setbindAny which ignores name sorts",
        "hierarchy": "Unbound LocallyNameless",
        "module": "Unbound.LocallyNameless",
        "name": "setbind",
        "normalized": "[Name a]-\u003eb-\u003eSetPlusBind[Name a]b",
        "package": "unbound",
        "partial": "",
        "signature": "[Name a]-\u003et-\u003eSetPlusBind[Name a]t"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless.html#v:setbindAny",
      "description": {
        "fct-descr": "\u003cp\u003eBind the list of (any-sorted) names in the term up to permutation\n   and dropping of unused variables.  See \u003ccode\u003e\u003ca\u003esetbind\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless",
        "fct-package": "unbound",
        "fct-signature": "[AnyName] -\u003e t -\u003e SetPlusBind [AnyName] t",
        "fct-source": "src/Unbound-LocallyNameless-Ops.html#setbindAny",
        "fct-type": "function",
        "title": "setbindAny"
      },
      "index": {
        "description": "Bind the list of any-sorted names in the term up to permutation and dropping of unused variables See setbind",
        "hierarchy": "Unbound LocallyNameless",
        "module": "Unbound.LocallyNameless",
        "name": "setbindAny",
        "normalized": "[AnyName]-\u003ea-\u003eSetPlusBind[AnyName]a",
        "package": "unbound",
        "partial": "Any",
        "signature": "[AnyName]-\u003et-\u003eSetPlusBind[AnyName]t"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless.html#v:single",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a permutation which swaps two elements.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless",
        "fct-package": "unbound",
        "fct-signature": "a -\u003e a -\u003e Perm a",
        "fct-source": "src/Unbound-PermM.html#single",
        "fct-type": "function",
        "title": "single"
      },
      "index": {
        "description": "Create permutation which swaps two elements",
        "hierarchy": "Unbound LocallyNameless",
        "module": "Unbound.LocallyNameless",
        "name": "single",
        "normalized": "a-\u003ea-\u003ePerm a",
        "package": "unbound",
        "partial": "",
        "signature": "a-\u003ea-\u003ePerm a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless.html#v:singleton",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a singleton collection.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless",
        "fct-package": "unbound",
        "fct-signature": "a -\u003e f a",
        "fct-source": "src/Unbound-Util.html#singleton",
        "fct-type": "method",
        "title": "singleton"
      },
      "index": {
        "description": "Create singleton collection",
        "hierarchy": "Unbound LocallyNameless",
        "module": "Unbound.LocallyNameless",
        "name": "singleton",
        "normalized": "a-\u003eb a",
        "package": "unbound",
        "partial": "",
        "signature": "a-\u003ef a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless.html#v:string2Name",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a free \u003ccode\u003e\u003ca\u003eName\u003c/a\u003e\u003c/code\u003e from a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless",
        "fct-package": "unbound",
        "fct-signature": "String -\u003e Name a",
        "fct-source": "src/Unbound-LocallyNameless-Name.html#string2Name",
        "fct-type": "function",
        "title": "string2Name"
      },
      "index": {
        "description": "Create free Name from String",
        "hierarchy": "Unbound LocallyNameless",
        "module": "Unbound.LocallyNameless",
        "name": "string2Name",
        "normalized": "String-\u003eName a",
        "package": "unbound",
        "partial": "Name",
        "signature": "String-\u003eName a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless.html#v:subst",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003esubst\u003c/a\u003e\u003c/code\u003e nm sub tm\u003c/code\u003e substitutes \u003ccode\u003esub\u003c/code\u003e for \u003ccode\u003enm\u003c/code\u003e in \u003ccode\u003etm\u003c/code\u003e.  It has\n   a default generic implementation in terms of \u003ccode\u003eisvar\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless",
        "fct-package": "unbound",
        "fct-signature": "Name b -\u003e b -\u003e a -\u003e a",
        "fct-source": "src/Unbound-LocallyNameless-Subst.html#subst",
        "fct-type": "method",
        "title": "subst"
      },
      "index": {
        "description": "subst nm sub tm substitutes sub for nm in tm It has default generic implementation in terms of isvar",
        "hierarchy": "Unbound LocallyNameless",
        "module": "Unbound.LocallyNameless",
        "name": "subst",
        "normalized": "Name a-\u003ea-\u003eb-\u003eb",
        "package": "unbound",
        "partial": "",
        "signature": "Name b-\u003eb-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless.html#v:substs",
      "description": {
        "fct-descr": "\u003cp\u003ePerform several simultaneous substitutions.  This method also\n   has a default generic implementation in terms of \u003ccode\u003eisvar\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless",
        "fct-package": "unbound",
        "fct-signature": "[(Name b, b)] -\u003e a -\u003e a",
        "fct-source": "src/Unbound-LocallyNameless-Subst.html#substs",
        "fct-type": "method",
        "title": "substs"
      },
      "index": {
        "description": "Perform several simultaneous substitutions This method also has default generic implementation in terms of isvar",
        "hierarchy": "Unbound LocallyNameless",
        "module": "Unbound.LocallyNameless",
        "name": "substs",
        "normalized": "[(Name a,a)]-\u003eb-\u003eb",
        "package": "unbound",
        "partial": "",
        "signature": "[(Name b,b)]-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless.html#v:support",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003cem\u003esupport\u003c/em\u003e of a permutation is the set of elements which are\n   not fixed.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless",
        "fct-package": "unbound",
        "fct-signature": "Perm a -\u003e [a]",
        "fct-source": "src/Unbound-PermM.html#support",
        "fct-type": "function",
        "title": "support"
      },
      "index": {
        "description": "The support of permutation is the set of elements which are not fixed",
        "hierarchy": "Unbound LocallyNameless",
        "module": "Unbound.LocallyNameless",
        "name": "support",
        "normalized": "Perm a-\u003e[a]",
        "package": "unbound",
        "partial": "",
        "signature": "Perm a-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless.html#v:swaps",
      "description": {
        "fct-descr": "\u003cp\u003eApply a permutation to a term.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless",
        "fct-package": "unbound",
        "fct-signature": "Perm AnyName -\u003e t -\u003e t",
        "fct-source": "src/Unbound-LocallyNameless-Ops.html#swaps",
        "fct-type": "function",
        "title": "swaps"
      },
      "index": {
        "description": "Apply permutation to term",
        "hierarchy": "Unbound LocallyNameless",
        "module": "Unbound.LocallyNameless",
        "name": "swaps",
        "normalized": "Perm AnyName-\u003ea-\u003ea",
        "package": "unbound",
        "partial": "",
        "signature": "Perm AnyName-\u003et-\u003et"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless.html#v:swaps-39-",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ccode\u003eswaps\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless",
        "fct-package": "unbound",
        "fct-signature": "AlphaCtx -\u003e Perm AnyName -\u003e a -\u003e a",
        "fct-source": "src/Unbound-LocallyNameless-Alpha.html#swaps%27",
        "fct-type": "method",
        "title": "swaps'"
      },
      "index": {
        "description": "See swaps",
        "hierarchy": "Unbound LocallyNameless",
        "module": "Unbound.LocallyNameless",
        "name": "swaps'",
        "normalized": "AlphaCtx-\u003ePerm AnyName-\u003ea-\u003ea",
        "package": "unbound",
        "partial": "",
        "signature": "AlphaCtx-\u003ePerm AnyName-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless.html#v:swapsBinders",
      "description": {
        "fct-descr": "\u003cp\u003eApply a permutation to the binding variables in a pattern.\n   Embedded terms are left alone by the permutation.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless",
        "fct-package": "unbound",
        "fct-signature": "Perm AnyName -\u003e p -\u003e p",
        "fct-source": "src/Unbound-LocallyNameless-Ops.html#swapsBinders",
        "fct-type": "function",
        "title": "swapsBinders"
      },
      "index": {
        "description": "Apply permutation to the binding variables in pattern Embedded terms are left alone by the permutation",
        "hierarchy": "Unbound LocallyNameless",
        "module": "Unbound.LocallyNameless",
        "name": "swapsBinders",
        "normalized": "Perm AnyName-\u003ea-\u003ea",
        "package": "unbound",
        "partial": "Binders",
        "signature": "Perm AnyName-\u003ep-\u003ep"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless.html#v:swapsEmbeds",
      "description": {
        "fct-descr": "\u003cp\u003eApply a permutation to the embedded terms in a pattern. Binding\n   names are left alone by the permutation.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless",
        "fct-package": "unbound",
        "fct-signature": "Perm AnyName -\u003e p -\u003e p",
        "fct-source": "src/Unbound-LocallyNameless-Ops.html#swapsEmbeds",
        "fct-type": "function",
        "title": "swapsEmbeds"
      },
      "index": {
        "description": "Apply permutation to the embedded terms in pattern Binding names are left alone by the permutation",
        "hierarchy": "Unbound LocallyNameless",
        "module": "Unbound.LocallyNameless",
        "name": "swapsEmbeds",
        "normalized": "Perm AnyName-\u003ea-\u003ea",
        "package": "unbound",
        "partial": "Embeds",
        "signature": "Perm AnyName-\u003ep-\u003ep"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless.html#v:toSortedName",
      "description": {
        "fct-descr": "\u003cp\u003eCast a name with an existentially hidden sort to an explicitly\n   sorted name.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless",
        "fct-package": "unbound",
        "fct-signature": "AnyName -\u003e Maybe (Name a)",
        "fct-source": "src/Unbound-LocallyNameless-Name.html#toSortedName",
        "fct-type": "function",
        "title": "toSortedName"
      },
      "index": {
        "description": "Cast name with an existentially hidden sort to an explicitly sorted name",
        "hierarchy": "Unbound LocallyNameless",
        "module": "Unbound.LocallyNameless",
        "name": "toSortedName",
        "normalized": "AnyName-\u003eMaybe(Name a)",
        "package": "unbound",
        "partial": "Sorted Name",
        "signature": "AnyName-\u003eMaybe(Name a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless.html#v:translate",
      "description": {
        "fct-descr": "\u003cp\u003eChange the sort of a name.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless",
        "fct-package": "unbound",
        "fct-signature": "Name a -\u003e Name b",
        "fct-source": "src/Unbound-LocallyNameless-Name.html#translate",
        "fct-type": "function",
        "title": "translate"
      },
      "index": {
        "description": "Change the sort of name",
        "hierarchy": "Unbound LocallyNameless",
        "module": "Unbound.LocallyNameless",
        "name": "translate",
        "normalized": "Name a-\u003eName b",
        "package": "unbound",
        "partial": "",
        "signature": "Name a-\u003eName b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless.html#v:trec",
      "description": {
        "fct-descr": "\u003cp\u003eConstructor for recursive abstractions.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless",
        "fct-package": "unbound",
        "fct-signature": "p -\u003e TRec p",
        "fct-source": "src/Unbound-LocallyNameless-Ops.html#trec",
        "fct-type": "function",
        "title": "trec"
      },
      "index": {
        "description": "Constructor for recursive abstractions",
        "hierarchy": "Unbound LocallyNameless",
        "module": "Unbound.LocallyNameless",
        "name": "trec",
        "normalized": "a-\u003eTRec a",
        "package": "unbound",
        "partial": "",
        "signature": "p-\u003eTRec p"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless.html#v:unbind",
      "description": {
        "fct-descr": "\u003cp\u003eUnbind (also known as \"open\") is the simplest destructor for\n   bindings. It ensures that the names in the binding are globally\n   fresh, using a monad which is an instance of the \u003ccode\u003e\u003ca\u003eFresh\u003c/a\u003e\u003c/code\u003e type\n   class.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless",
        "fct-package": "unbound",
        "fct-signature": "GenBind order card p t -\u003e m (p, t)",
        "fct-source": "src/Unbound-LocallyNameless-Ops.html#unbind",
        "fct-type": "function",
        "title": "unbind"
      },
      "index": {
        "description": "Unbind also known as open is the simplest destructor for bindings It ensures that the names in the binding are globally fresh using monad which is an instance of the Fresh type class",
        "hierarchy": "Unbound LocallyNameless",
        "module": "Unbound.LocallyNameless",
        "name": "unbind",
        "normalized": "GenBind a b c d-\u003ee(c,d)",
        "package": "unbound",
        "partial": "",
        "signature": "GenBind order card p t-\u003em(p,t)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless.html#v:unbind2",
      "description": {
        "fct-descr": "\u003cp\u003eUnbind two terms with the \u003cem\u003esame\u003c/em\u003e fresh names, provided the binders have\n   the same binding variables (both number and sort).  If the patterns have\n   different binding variables, return \u003ccode\u003eNothing\u003c/code\u003e.  Otherwise, return the\n   renamed patterns and the associated terms.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless",
        "fct-package": "unbound",
        "fct-signature": "GenBind order card p1 t1 -\u003e GenBind order card p2 t2 -\u003e m (Maybe (p1, t1, p2, t2))",
        "fct-source": "src/Unbound-LocallyNameless-Ops.html#unbind2",
        "fct-type": "function",
        "title": "unbind2"
      },
      "index": {
        "description": "Unbind two terms with the same fresh names provided the binders have the same binding variables both number and sort If the patterns have different binding variables return Nothing Otherwise return the renamed patterns and the associated terms",
        "hierarchy": "Unbound LocallyNameless",
        "module": "Unbound.LocallyNameless",
        "name": "unbind2",
        "normalized": "GenBind a b c d-\u003eGenBind a b c d-\u003ee(Maybe(c,d,c,d))",
        "package": "unbound",
        "partial": "",
        "signature": "GenBind order card p t-\u003eGenBind order card p t-\u003em(Maybe(p,t,p,t))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless.html#v:unbind2Plus",
      "description": {
        "fct-module": "Unbound.LocallyNameless",
        "fct-package": "unbound",
        "fct-signature": "GenBind order card p1 t1 -\u003e GenBind order card p2 t2 -\u003e m (p1, t1, p2, t2)",
        "fct-source": "src/Unbound-LocallyNameless-Ops.html#unbind2Plus",
        "fct-type": "function",
        "title": "unbind2Plus"
      },
      "index": {
        "description": "",
        "hierarchy": "Unbound LocallyNameless",
        "module": "Unbound.LocallyNameless",
        "name": "unbind2Plus",
        "normalized": "GenBind a b c d-\u003eGenBind a b c d-\u003ee(c,d,c,d)",
        "package": "unbound",
        "partial": "Plus",
        "signature": "GenBind order card p t-\u003eGenBind order card p t-\u003em(p,t,p,t)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless.html#v:unbind3",
      "description": {
        "fct-descr": "\u003cp\u003eUnbind three terms with the same fresh names, provided the\n   binders have the same number of binding variables.  See the\n   documentation for \u003ccode\u003e\u003ca\u003eunbind2\u003c/a\u003e\u003c/code\u003e for more details.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless",
        "fct-package": "unbound",
        "fct-signature": "GenBind order card p1 t1 -\u003e GenBind order card p2 t2 -\u003e GenBind order card p3 t3 -\u003e m (Maybe (p1, t1, p2, t2, p3, t3))",
        "fct-source": "src/Unbound-LocallyNameless-Ops.html#unbind3",
        "fct-type": "function",
        "title": "unbind3"
      },
      "index": {
        "description": "Unbind three terms with the same fresh names provided the binders have the same number of binding variables See the documentation for unbind2 for more details",
        "hierarchy": "Unbound LocallyNameless",
        "module": "Unbound.LocallyNameless",
        "name": "unbind3",
        "normalized": "GenBind a b c d-\u003eGenBind a b c d-\u003eGenBind a b c d-\u003ee(Maybe(c,d,c,d,c,d))",
        "package": "unbound",
        "partial": "",
        "signature": "GenBind order card p t-\u003eGenBind order card p t-\u003eGenBind order card p t-\u003em(Maybe(p,t,p,t,p,t))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless.html#v:unbind3Plus",
      "description": {
        "fct-module": "Unbound.LocallyNameless",
        "fct-package": "unbound",
        "fct-signature": "GenBind order card p1 t1 -\u003e GenBind order card p2 t2 -\u003e GenBind order card p3 t3 -\u003e m (p1, t1, p2, t2, p3, t3)",
        "fct-source": "src/Unbound-LocallyNameless-Ops.html#unbind3Plus",
        "fct-type": "function",
        "title": "unbind3Plus"
      },
      "index": {
        "description": "",
        "hierarchy": "Unbound LocallyNameless",
        "module": "Unbound.LocallyNameless",
        "name": "unbind3Plus",
        "normalized": "GenBind a b c d-\u003eGenBind a b c d-\u003eGenBind a b c d-\u003ee(c,d,c,d,c,d)",
        "package": "unbound",
        "partial": "Plus",
        "signature": "GenBind order card p t-\u003eGenBind order card p t-\u003eGenBind order card p t-\u003em(p,t,p,t,p,t)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless.html#v:unembed",
      "description": {
        "fct-descr": "\u003cp\u003eDestruct an embedded term.  \u003ccode\u003eunembed\u003c/code\u003e can have any of the types\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003eEmbed t -\u003e t\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003eShift (Embed t) -\u003e t\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eand so on.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless",
        "fct-package": "unbound",
        "fct-signature": "e -\u003e Embedded e",
        "fct-source": "src/Unbound-LocallyNameless-Alpha.html#unembed",
        "fct-type": "function",
        "title": "unembed"
      },
      "index": {
        "description": "Destruct an embedded term unembed can have any of the types Embed Shift Embed and so on",
        "hierarchy": "Unbound LocallyNameless",
        "module": "Unbound.LocallyNameless",
        "name": "unembed",
        "normalized": "a-\u003eEmbedded a",
        "package": "unbound",
        "partial": "",
        "signature": "e-\u003eEmbedded e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless.html#v:union",
      "description": {
        "fct-descr": "\u003cp\u003eAn associative combining operation.  The \u003ccode\u003eOrd\u003c/code\u003e constraint is in\n   order to accommodate sets.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless",
        "fct-package": "unbound",
        "fct-signature": "f a -\u003e f a -\u003e f a",
        "fct-source": "src/Unbound-Util.html#union",
        "fct-type": "method",
        "title": "union"
      },
      "index": {
        "description": "An associative combining operation The Ord constraint is in order to accommodate sets",
        "hierarchy": "Unbound LocallyNameless",
        "module": "Unbound.LocallyNameless",
        "name": "union",
        "normalized": "a b-\u003ea b-\u003ea b",
        "package": "unbound",
        "partial": "",
        "signature": "f a-\u003ef a-\u003ef a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless.html#v:unrebind",
      "description": {
        "fct-descr": "\u003cp\u003eDestructor for rebinding patterns.  It does not need a monadic\n   context for generating fresh names, since \u003ccode\u003eRebind\u003c/code\u003e can only occur\n   in the pattern of a \u003ccode\u003e\u003ca\u003eBind\u003c/a\u003e\u003c/code\u003e; hence a previous call to \u003ccode\u003e\u003ca\u003eunbind\u003c/a\u003e\u003c/code\u003e (or\n   something similar) must have already freshened the names at this\n   point.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless",
        "fct-package": "unbound",
        "fct-signature": "Rebind p1 p2 -\u003e (p1, p2)",
        "fct-source": "src/Unbound-LocallyNameless-Ops.html#unrebind",
        "fct-type": "function",
        "title": "unrebind"
      },
      "index": {
        "description": "Destructor for rebinding patterns It does not need monadic context for generating fresh names since Rebind can only occur in the pattern of Bind hence previous call to unbind or something similar must have already freshened the names at this point",
        "hierarchy": "Unbound LocallyNameless",
        "module": "Unbound.LocallyNameless",
        "name": "unrebind",
        "normalized": "Rebind a a-\u003e(a,a)",
        "package": "unbound",
        "partial": "",
        "signature": "Rebind p p-\u003e(p,p)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless.html#v:unrec",
      "description": {
        "fct-descr": "\u003cp\u003eDestructor for recursive patterns.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless",
        "fct-package": "unbound",
        "fct-signature": "Rec p -\u003e p",
        "fct-source": "src/Unbound-LocallyNameless-Ops.html#unrec",
        "fct-type": "function",
        "title": "unrec"
      },
      "index": {
        "description": "Destructor for recursive patterns",
        "hierarchy": "Unbound LocallyNameless",
        "module": "Unbound.LocallyNameless",
        "name": "unrec",
        "normalized": "Rec a-\u003ea",
        "package": "unbound",
        "partial": "",
        "signature": "Rec p-\u003ep"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-LocallyNameless.html#v:untrec",
      "description": {
        "fct-descr": "\u003cp\u003eDestructor for recursive abstractions which picks globally fresh\n   names for the binders.\n\u003c/p\u003e",
        "fct-module": "Unbound.LocallyNameless",
        "fct-package": "unbound",
        "fct-signature": "TRec p -\u003e m p",
        "fct-source": "src/Unbound-LocallyNameless-Ops.html#untrec",
        "fct-type": "function",
        "title": "untrec"
      },
      "index": {
        "description": "Destructor for recursive abstractions which picks globally fresh names for the binders",
        "hierarchy": "Unbound LocallyNameless",
        "module": "Unbound.LocallyNameless",
        "name": "untrec",
        "normalized": "TRec a-\u003eb a",
        "package": "unbound",
        "partial": "",
        "signature": "TRec p-\u003em p"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-PermM.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA slow, but hopefully correct implementation of permutations.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Unbound.PermM",
        "fct-package": "unbound",
        "fct-signature": "module",
        "fct-source": "src/Unbound-PermM.html",
        "fct-type": "module",
        "title": "PermM"
      },
      "index": {
        "description": "slow but hopefully correct implementation of permutations",
        "hierarchy": "Unbound PermM",
        "module": "Unbound.PermM",
        "name": "PermM",
        "normalized": "",
        "package": "unbound",
        "partial": "Perm",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-PermM.html#t:Perm",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003cem\u003epermutation\u003c/em\u003e is a bijective function from names to names\n   which is the identity on all but a finite set of names.  They\n   form the basis for nominal approaches to binding, but can\n   also be useful in general.\n\u003c/p\u003e",
        "fct-module": "Unbound.PermM",
        "fct-package": "unbound",
        "fct-signature": "newtype",
        "fct-source": "src/Unbound-PermM.html#Perm",
        "fct-type": "newtype",
        "title": "Perm"
      },
      "index": {
        "description": "permutation is bijective function from names to names which is the identity on all but finite set of names They form the basis for nominal approaches to binding but can also be useful in general",
        "hierarchy": "Unbound PermM",
        "module": "Unbound.PermM",
        "name": "Perm",
        "normalized": "",
        "package": "unbound",
        "partial": "Perm",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-PermM.html#v:Perm",
      "description": {
        "fct-module": "Unbound.PermM",
        "fct-package": "unbound",
        "fct-signature": "Perm (Map a a)",
        "fct-source": "src/Unbound-PermM.html#Perm",
        "fct-type": "function",
        "title": "Perm"
      },
      "index": {
        "description": "",
        "hierarchy": "Unbound PermM",
        "module": "Unbound.PermM",
        "name": "Perm",
        "normalized": "",
        "package": "unbound",
        "partial": "Perm",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-PermM.html#v:apply",
      "description": {
        "fct-descr": "\u003cp\u003eApply a permutation to an element of the domain.\n\u003c/p\u003e",
        "fct-module": "Unbound.PermM",
        "fct-package": "unbound",
        "fct-signature": "Perm a -\u003e a -\u003e a",
        "fct-source": "src/Unbound-PermM.html#apply",
        "fct-type": "function",
        "title": "apply"
      },
      "index": {
        "description": "Apply permutation to an element of the domain",
        "hierarchy": "Unbound PermM",
        "module": "Unbound.PermM",
        "name": "apply",
        "normalized": "Perm a-\u003ea-\u003ea",
        "package": "unbound",
        "partial": "",
        "signature": "Perm a-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-PermM.html#v:compose",
      "description": {
        "fct-descr": "\u003cp\u003eCompose two permutations.  The right-hand permutation will be\n   applied first.\n\u003c/p\u003e",
        "fct-module": "Unbound.PermM",
        "fct-package": "unbound",
        "fct-signature": "Perm a -\u003e Perm a -\u003e Perm a",
        "fct-source": "src/Unbound-PermM.html#compose",
        "fct-type": "function",
        "title": "compose"
      },
      "index": {
        "description": "Compose two permutations The right-hand permutation will be applied first",
        "hierarchy": "Unbound PermM",
        "module": "Unbound.PermM",
        "name": "compose",
        "normalized": "Perm a-\u003ePerm a-\u003ePerm a",
        "package": "unbound",
        "partial": "",
        "signature": "Perm a-\u003ePerm a-\u003ePerm a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-PermM.html#v:empty",
      "description": {
        "fct-descr": "\u003cp\u003eThe empty (identity) permutation.\n\u003c/p\u003e",
        "fct-module": "Unbound.PermM",
        "fct-package": "unbound",
        "fct-signature": "Perm a",
        "fct-source": "src/Unbound-PermM.html#empty",
        "fct-type": "function",
        "title": "empty"
      },
      "index": {
        "description": "The empty identity permutation",
        "hierarchy": "Unbound PermM",
        "module": "Unbound.PermM",
        "name": "empty",
        "normalized": "",
        "package": "unbound",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-PermM.html#v:isid",
      "description": {
        "fct-descr": "\u003cp\u003eIs this the identity permutation?\n\u003c/p\u003e",
        "fct-module": "Unbound.PermM",
        "fct-package": "unbound",
        "fct-signature": "Perm a -\u003e Bool",
        "fct-source": "src/Unbound-PermM.html#isid",
        "fct-type": "function",
        "title": "isid"
      },
      "index": {
        "description": "Is this the identity permutation",
        "hierarchy": "Unbound PermM",
        "module": "Unbound.PermM",
        "name": "isid",
        "normalized": "Perm a-\u003eBool",
        "package": "unbound",
        "partial": "",
        "signature": "Perm a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-PermM.html#v:join",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eJoin\u003c/em\u003e two permutations by taking the union of their relation\n   graphs. Fail if they are inconsistent, i.e. map the same element\n   to two different elements.\n\u003c/p\u003e",
        "fct-module": "Unbound.PermM",
        "fct-package": "unbound",
        "fct-signature": "Perm a -\u003e Perm a -\u003e Maybe (Perm a)",
        "fct-source": "src/Unbound-PermM.html#join",
        "fct-type": "function",
        "title": "join"
      },
      "index": {
        "description": "Join two permutations by taking the union of their relation graphs Fail if they are inconsistent i.e map the same element to two different elements",
        "hierarchy": "Unbound PermM",
        "module": "Unbound.PermM",
        "name": "join",
        "normalized": "Perm a-\u003ePerm a-\u003eMaybe(Perm a)",
        "package": "unbound",
        "partial": "",
        "signature": "Perm a-\u003ePerm a-\u003eMaybe(Perm a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-PermM.html#v:mkPerm",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003emkPerm l1 l2\u003c/code\u003e creates a permutation that sends \u003ccode\u003el1\u003c/code\u003e to \u003ccode\u003el2\u003c/code\u003e.\n   Fail if there is no such permutation, either because the lists\n   have different lengths or because they are inconsistent (which\n   can only happen if \u003ccode\u003el1\u003c/code\u003e or \u003ccode\u003el2\u003c/code\u003e have repeated elements).\n\u003c/p\u003e",
        "fct-module": "Unbound.PermM",
        "fct-package": "unbound",
        "fct-signature": "[a] -\u003e [a] -\u003e Maybe (Perm a)",
        "fct-source": "src/Unbound-PermM.html#mkPerm",
        "fct-type": "function",
        "title": "mkPerm"
      },
      "index": {
        "description": "mkPerm l1 l2 creates permutation that sends l1 to l2 Fail if there is no such permutation either because the lists have different lengths or because they are inconsistent which can only happen if l1 or l2 have repeated elements",
        "hierarchy": "Unbound PermM",
        "module": "Unbound.PermM",
        "name": "mkPerm",
        "normalized": "[a]-\u003e[a]-\u003eMaybe(Perm a)",
        "package": "unbound",
        "partial": "Perm",
        "signature": "[a]-\u003e[a]-\u003eMaybe(Perm a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-PermM.html#v:permValid",
      "description": {
        "fct-module": "Unbound.PermM",
        "fct-package": "unbound",
        "fct-signature": "Perm a -\u003e Bool",
        "fct-source": "src/Unbound-PermM.html#permValid",
        "fct-type": "function",
        "title": "permValid"
      },
      "index": {
        "description": "",
        "hierarchy": "Unbound PermM",
        "module": "Unbound.PermM",
        "name": "permValid",
        "normalized": "Perm a-\u003eBool",
        "package": "unbound",
        "partial": "Valid",
        "signature": "Perm a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-PermM.html#v:restrict",
      "description": {
        "fct-descr": "\u003cp\u003eRestrict a permutation to a certain domain.\n\u003c/p\u003e",
        "fct-module": "Unbound.PermM",
        "fct-package": "unbound",
        "fct-signature": "Perm a -\u003e [a] -\u003e Perm a",
        "fct-source": "src/Unbound-PermM.html#restrict",
        "fct-type": "function",
        "title": "restrict"
      },
      "index": {
        "description": "Restrict permutation to certain domain",
        "hierarchy": "Unbound PermM",
        "module": "Unbound.PermM",
        "name": "restrict",
        "normalized": "Perm a-\u003e[a]-\u003ePerm a",
        "package": "unbound",
        "partial": "",
        "signature": "Perm a-\u003e[a]-\u003ePerm a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-PermM.html#v:single",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a permutation which swaps two elements.\n\u003c/p\u003e",
        "fct-module": "Unbound.PermM",
        "fct-package": "unbound",
        "fct-signature": "a -\u003e a -\u003e Perm a",
        "fct-source": "src/Unbound-PermM.html#single",
        "fct-type": "function",
        "title": "single"
      },
      "index": {
        "description": "Create permutation which swaps two elements",
        "hierarchy": "Unbound PermM",
        "module": "Unbound.PermM",
        "name": "single",
        "normalized": "a-\u003ea-\u003ePerm a",
        "package": "unbound",
        "partial": "",
        "signature": "a-\u003ea-\u003ePerm a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-PermM.html#v:support",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003cem\u003esupport\u003c/em\u003e of a permutation is the set of elements which are\n   not fixed.\n\u003c/p\u003e",
        "fct-module": "Unbound.PermM",
        "fct-package": "unbound",
        "fct-signature": "Perm a -\u003e [a]",
        "fct-source": "src/Unbound-PermM.html#support",
        "fct-type": "function",
        "title": "support"
      },
      "index": {
        "description": "The support of permutation is the set of elements which are not fixed",
        "hierarchy": "Unbound PermM",
        "module": "Unbound.PermM",
        "name": "support",
        "normalized": "Perm a-\u003e[a]",
        "package": "unbound",
        "partial": "",
        "signature": "Perm a-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-Util.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eVarious utilities for the Unbound library.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Unbound.Util",
        "fct-package": "unbound",
        "fct-signature": "module",
        "fct-source": "src/Unbound-Util.html",
        "fct-type": "module",
        "title": "Util"
      },
      "index": {
        "description": "Various utilities for the Unbound library",
        "hierarchy": "Unbound Util",
        "module": "Unbound.Util",
        "name": "Util",
        "normalized": "",
        "package": "unbound",
        "partial": "Util",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-Util.html#t:Collection",
      "description": {
        "fct-descr": "\u003cp\u003eCollections are foldable types that support empty, singleton,\n   union, and map operations.  The result of a free variable\n   calculation may be any collection.  Instances are provided for\n   lists, sets, and multisets.\n\u003c/p\u003e",
        "fct-module": "Unbound.Util",
        "fct-package": "unbound",
        "fct-signature": "class",
        "fct-source": "src/Unbound-Util.html#Collection",
        "fct-type": "class",
        "title": "Collection"
      },
      "index": {
        "description": "Collections are foldable types that support empty singleton union and map operations The result of free variable calculation may be any collection Instances are provided for lists sets and multisets",
        "hierarchy": "Unbound Util",
        "module": "Unbound.Util",
        "name": "Collection",
        "normalized": "",
        "package": "unbound",
        "partial": "Collection",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-Util.html#t:Multiset",
      "description": {
        "fct-descr": "\u003cp\u003eA simple representation of multisets.\n\u003c/p\u003e",
        "fct-module": "Unbound.Util",
        "fct-package": "unbound",
        "fct-signature": "newtype",
        "fct-source": "src/Unbound-Util.html#Multiset",
        "fct-type": "newtype",
        "title": "Multiset"
      },
      "index": {
        "description": "simple representation of multisets",
        "hierarchy": "Unbound Util",
        "module": "Unbound.Util",
        "name": "Multiset",
        "normalized": "",
        "package": "unbound",
        "partial": "Multiset",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-Util.html#v:Multiset",
      "description": {
        "fct-module": "Unbound.Util",
        "fct-package": "unbound",
        "fct-signature": "Multiset (Map a Int)",
        "fct-source": "src/Unbound-Util.html#Multiset",
        "fct-type": "function",
        "title": "Multiset"
      },
      "index": {
        "description": "",
        "hierarchy": "Unbound Util",
        "module": "Unbound.Util",
        "name": "Multiset",
        "normalized": "",
        "package": "unbound",
        "partial": "Multiset",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-Util.html#v:cmap",
      "description": {
        "fct-descr": "\u003cp\u003eCollections must be functorial.  The normal \u003ccode\u003eFunctor\u003c/code\u003e class\n   won't do because of the \u003ccode\u003eOrd\u003c/code\u003e constraint on sets.\n\u003c/p\u003e",
        "fct-module": "Unbound.Util",
        "fct-package": "unbound",
        "fct-signature": "(a -\u003e b) -\u003e f a -\u003e f b",
        "fct-source": "src/Unbound-Util.html#cmap",
        "fct-type": "method",
        "title": "cmap"
      },
      "index": {
        "description": "Collections must be functorial The normal Functor class won do because of the Ord constraint on sets",
        "hierarchy": "Unbound Util",
        "module": "Unbound.Util",
        "name": "cmap",
        "normalized": "(a-\u003eb)-\u003ec a-\u003ec b",
        "package": "unbound",
        "partial": "",
        "signature": "(a-\u003eb)-\u003ef a-\u003ef b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-Util.html#v:disjoint",
      "description": {
        "fct-module": "Unbound.Util",
        "fct-package": "unbound",
        "fct-signature": "Set a -\u003e Set a -\u003e Bool",
        "fct-source": "src/Unbound-Util.html#disjoint",
        "fct-type": "function",
        "title": "disjoint"
      },
      "index": {
        "description": "",
        "hierarchy": "Unbound Util",
        "module": "Unbound.Util",
        "name": "disjoint",
        "normalized": "Set a-\u003eSet a-\u003eBool",
        "package": "unbound",
        "partial": "",
        "signature": "Set a-\u003eSet a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-Util.html#v:emptyC",
      "description": {
        "fct-descr": "\u003cp\u003eAn empty collection. Must be the identity for \u003ccode\u003eunion\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Unbound.Util",
        "fct-package": "unbound",
        "fct-signature": "f a",
        "fct-source": "src/Unbound-Util.html#emptyC",
        "fct-type": "method",
        "title": "emptyC"
      },
      "index": {
        "description": "An empty collection Must be the identity for union",
        "hierarchy": "Unbound Util",
        "module": "Unbound.Util",
        "name": "emptyC",
        "normalized": "",
        "package": "unbound",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-Util.html#v:filterC",
      "description": {
        "fct-descr": "\u003cp\u003eRemove the \u003ccode\u003eNothing\u003c/code\u003es from a collection.\n\u003c/p\u003e",
        "fct-module": "Unbound.Util",
        "fct-package": "unbound",
        "fct-signature": "f (Maybe a) -\u003e f a",
        "fct-source": "src/Unbound-Util.html#filterC",
        "fct-type": "function",
        "title": "filterC"
      },
      "index": {
        "description": "Remove the Nothing from collection",
        "hierarchy": "Unbound Util",
        "module": "Unbound.Util",
        "name": "filterC",
        "normalized": "a(Maybe b)-\u003ea b",
        "package": "unbound",
        "partial": "",
        "signature": "f(Maybe a)-\u003ef a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-Util.html#v:fromList",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a collection from a list of elements.\n\u003c/p\u003e",
        "fct-module": "Unbound.Util",
        "fct-package": "unbound",
        "fct-signature": "[a] -\u003e f a",
        "fct-source": "src/Unbound-Util.html#fromList",
        "fct-type": "function",
        "title": "fromList"
      },
      "index": {
        "description": "Create collection from list of elements",
        "hierarchy": "Unbound Util",
        "module": "Unbound.Util",
        "name": "fromList",
        "normalized": "[a]-\u003eb a",
        "package": "unbound",
        "partial": "List",
        "signature": "[a]-\u003ef a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-Util.html#v:singleton",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a singleton collection.\n\u003c/p\u003e",
        "fct-module": "Unbound.Util",
        "fct-package": "unbound",
        "fct-signature": "a -\u003e f a",
        "fct-source": "src/Unbound-Util.html#singleton",
        "fct-type": "method",
        "title": "singleton"
      },
      "index": {
        "description": "Create singleton collection",
        "hierarchy": "Unbound Util",
        "module": "Unbound.Util",
        "name": "singleton",
        "normalized": "a-\u003eb a",
        "package": "unbound",
        "partial": "",
        "signature": "a-\u003ef a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-Util.html#v:union",
      "description": {
        "fct-descr": "\u003cp\u003eAn associative combining operation.  The \u003ccode\u003eOrd\u003c/code\u003e constraint is in\n   order to accommodate sets.\n\u003c/p\u003e",
        "fct-module": "Unbound.Util",
        "fct-package": "unbound",
        "fct-signature": "f a -\u003e f a -\u003e f a",
        "fct-source": "src/Unbound-Util.html#union",
        "fct-type": "method",
        "title": "union"
      },
      "index": {
        "description": "An associative combining operation The Ord constraint is in order to accommodate sets",
        "hierarchy": "Unbound Util",
        "module": "Unbound.Util",
        "name": "union",
        "normalized": "a b-\u003ea b-\u003ea b",
        "package": "unbound",
        "partial": "",
        "signature": "f a-\u003ef a-\u003ef a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unbound/docs/Unbound-Util.html#v:unions",
      "description": {
        "fct-descr": "\u003cp\u003eCombine a list of containers into one.\n\u003c/p\u003e",
        "fct-module": "Unbound.Util",
        "fct-package": "unbound",
        "fct-signature": "[f a] -\u003e f a",
        "fct-source": "src/Unbound-Util.html#unions",
        "fct-type": "function",
        "title": "unions"
      },
      "index": {
        "description": "Combine list of containers into one",
        "hierarchy": "Unbound Util",
        "module": "Unbound.Util",
        "name": "unions",
        "normalized": "[a b]-\u003ea b",
        "package": "unbound",
        "partial": "",
        "signature": "[f a]-\u003ef a"
      }
    }
  }
]