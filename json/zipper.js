[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zipper/docs/Generics-MultiRec-Zipper.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe generic zipper.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Generics.MultiRec.Zipper",
        "fct-package": "zipper",
        "fct-signature": "module",
        "fct-source": "src/Generics-MultiRec-Zipper.html",
        "fct-type": "module",
        "title": "Zipper"
      },
      "index": {
        "description": "The generic zipper",
        "hierarchy": "Generics MultiRec Zipper",
        "module": "Generics.MultiRec.Zipper",
        "name": "Zipper",
        "normalized": "",
        "package": "zipper",
        "partial": "Zipper",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zipper/docs/Generics-MultiRec-Zipper.html#t:Ctx",
      "description": {
        "fct-descr": "\u003cp\u003eAbstract type of context frames. Not required for the high-level\n navigation functions.\n\u003c/p\u003e",
        "fct-module": "Generics.MultiRec.Zipper",
        "fct-package": "zipper",
        "fct-signature": "Ctx",
        "fct-type": "function",
        "title": "Ctx"
      },
      "index": {
        "description": "Abstract type of context frames Not required for the high-level navigation functions",
        "hierarchy": "Generics MultiRec Zipper",
        "module": "Generics.MultiRec.Zipper",
        "name": "Ctx",
        "normalized": "",
        "package": "zipper",
        "partial": "Ctx",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zipper/docs/Generics-MultiRec-Zipper.html#t:Loc",
      "description": {
        "fct-descr": "\u003cp\u003eAbstract type of locations. A location contains the current focus\n and its context. A location is parameterized over the family of\n datatypes and over the type of the complete value.\n\u003c/p\u003e",
        "fct-module": "Generics.MultiRec.Zipper",
        "fct-package": "zipper",
        "fct-signature": "data",
        "fct-source": "src/Generics-MultiRec-Zipper.html#Loc",
        "fct-type": "data",
        "title": "Loc"
      },
      "index": {
        "description": "Abstract type of locations location contains the current focus and its context location is parameterized over the family of datatypes and over the type of the complete value",
        "hierarchy": "Generics MultiRec Zipper",
        "module": "Generics.MultiRec.Zipper",
        "name": "Loc",
        "normalized": "",
        "package": "zipper",
        "partial": "Loc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zipper/docs/Generics-MultiRec-Zipper.html#t:Zipper",
      "description": {
        "fct-descr": "\u003cp\u003eIt is in general not necessary to use the generic navigation\n functions directly. The functions listed in the `\u003ccode\u003eInterface'\u003c/code\u003e section\n below are more user-friendly.\n\u003c/p\u003e",
        "fct-module": "Generics.MultiRec.Zipper",
        "fct-package": "zipper",
        "fct-signature": "class",
        "fct-source": "src/Generics-MultiRec-Zipper.html#Zipper",
        "fct-type": "class",
        "title": "Zipper"
      },
      "index": {
        "description": "It is in general not necessary to use the generic navigation functions directly The functions listed in the Interface section below are more user-friendly",
        "hierarchy": "Generics MultiRec Zipper",
        "module": "Generics.MultiRec.Zipper",
        "name": "Zipper",
        "normalized": "",
        "package": "zipper",
        "partial": "Zipper",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zipper/docs/Generics-MultiRec-Zipper.html#v:cmapA",
      "description": {
        "fct-module": "Generics.MultiRec.Zipper",
        "fct-package": "zipper",
        "fct-signature": "(forall ix.  phi ix -\u003e r ix -\u003e a (r' ix)) -\u003e phi ix -\u003e Ctx f b r ix -\u003e a (Ctx f b r' ix)",
        "fct-source": "src/Generics-MultiRec-Zipper.html#cmapA",
        "fct-type": "method",
        "title": "cmapA"
      },
      "index": {
        "description": "",
        "hierarchy": "Generics MultiRec Zipper",
        "module": "Generics.MultiRec.Zipper",
        "name": "cmapA",
        "normalized": "(a b c d-\u003ee d-\u003ef(g d))-\u003ec d-\u003eCtx h i e d-\u003ef(Ctx h i g d)",
        "package": "zipper",
        "partial": "",
        "signature": "(forall ix. phi ix-\u003er ix-\u003ea(r' ix))-\u003ephi ix-\u003eCtx f b r ix-\u003ea(Ctx f b r' ix)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zipper/docs/Generics-MultiRec-Zipper.html#v:dfnext",
      "description": {
        "fct-descr": "\u003cp\u003eMove through all positions in depth-first left-to-right order.\n\u003c/p\u003e",
        "fct-module": "Generics.MultiRec.Zipper",
        "fct-package": "zipper",
        "fct-signature": "Loc phi I0 ix -\u003e Maybe (Loc phi I0 ix)",
        "fct-source": "src/Generics-MultiRec-Zipper.html#dfnext",
        "fct-type": "function",
        "title": "dfnext"
      },
      "index": {
        "description": "Move through all positions in depth-first left-to-right order",
        "hierarchy": "Generics MultiRec Zipper",
        "module": "Generics.MultiRec.Zipper",
        "name": "dfnext",
        "normalized": "Loc a I b-\u003eMaybe(Loc a I b)",
        "package": "zipper",
        "partial": "",
        "signature": "Loc phi I ix-\u003eMaybe(Loc phi I ix)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zipper/docs/Generics-MultiRec-Zipper.html#v:dfprev",
      "description": {
        "fct-descr": "\u003cp\u003eMove through all positions in depth-first right-to-left order.\n\u003c/p\u003e",
        "fct-module": "Generics.MultiRec.Zipper",
        "fct-package": "zipper",
        "fct-signature": "Loc phi I0 ix -\u003e Maybe (Loc phi I0 ix)",
        "fct-source": "src/Generics-MultiRec-Zipper.html#dfprev",
        "fct-type": "function",
        "title": "dfprev"
      },
      "index": {
        "description": "Move through all positions in depth-first right-to-left order",
        "hierarchy": "Generics MultiRec Zipper",
        "module": "Generics.MultiRec.Zipper",
        "name": "dfprev",
        "normalized": "Loc a I b-\u003eMaybe(Loc a I b)",
        "package": "zipper",
        "partial": "",
        "signature": "Loc phi I ix-\u003eMaybe(Loc phi I ix)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zipper/docs/Generics-MultiRec-Zipper.html#v:down",
      "description": {
        "fct-descr": "\u003cp\u003eMove down to the leftmost child. Returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the\n current focus is a leaf.\n\u003c/p\u003e",
        "fct-module": "Generics.MultiRec.Zipper",
        "fct-package": "zipper",
        "fct-signature": "Loc phi I0 ix -\u003e Maybe (Loc phi I0 ix)",
        "fct-source": "src/Generics-MultiRec-Zipper.html#down",
        "fct-type": "function",
        "title": "down"
      },
      "index": {
        "description": "Move down to the leftmost child Returns Nothing if the current focus is leaf",
        "hierarchy": "Generics MultiRec Zipper",
        "module": "Generics.MultiRec.Zipper",
        "name": "down",
        "normalized": "Loc a I b-\u003eMaybe(Loc a I b)",
        "package": "zipper",
        "partial": "",
        "signature": "Loc phi I ix-\u003eMaybe(Loc phi I ix)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zipper/docs/Generics-MultiRec-Zipper.html#v:down-39-",
      "description": {
        "fct-descr": "\u003cp\u003eMove down to the rightmost child. Returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the\n current focus is a leaf.\n\u003c/p\u003e",
        "fct-module": "Generics.MultiRec.Zipper",
        "fct-package": "zipper",
        "fct-signature": "Loc phi I0 ix -\u003e Maybe (Loc phi I0 ix)",
        "fct-source": "src/Generics-MultiRec-Zipper.html#down%27",
        "fct-type": "function",
        "title": "down'"
      },
      "index": {
        "description": "Move down to the rightmost child Returns Nothing if the current focus is leaf",
        "hierarchy": "Generics MultiRec Zipper",
        "module": "Generics.MultiRec.Zipper",
        "name": "down'",
        "normalized": "Loc a I b-\u003eMaybe(Loc a I b)",
        "package": "zipper",
        "partial": "",
        "signature": "Loc phi I ix-\u003eMaybe(Loc phi I ix)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zipper/docs/Generics-MultiRec-Zipper.html#v:enter",
      "description": {
        "fct-descr": "\u003cp\u003eStart navigating a datastructure. Returns a location that\n focuses the entire value and has an empty context.\n\u003c/p\u003e",
        "fct-module": "Generics.MultiRec.Zipper",
        "fct-package": "zipper",
        "fct-signature": "phi ix -\u003e ix -\u003e Loc phi I0 ix",
        "fct-source": "src/Generics-MultiRec-Zipper.html#enter",
        "fct-type": "function",
        "title": "enter"
      },
      "index": {
        "description": "Start navigating datastructure Returns location that focuses the entire value and has an empty context",
        "hierarchy": "Generics MultiRec Zipper",
        "module": "Generics.MultiRec.Zipper",
        "name": "enter",
        "normalized": "a b-\u003eb-\u003eLoc a I b",
        "package": "zipper",
        "partial": "",
        "signature": "phi ix-\u003eix-\u003eLoc phi I ix"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zipper/docs/Generics-MultiRec-Zipper.html#v:fill",
      "description": {
        "fct-module": "Generics.MultiRec.Zipper",
        "fct-package": "zipper",
        "fct-signature": "phi b -\u003e Ctx f b r ix -\u003e r b -\u003e f r ix",
        "fct-source": "src/Generics-MultiRec-Zipper.html#fill",
        "fct-type": "method",
        "title": "fill"
      },
      "index": {
        "description": "",
        "hierarchy": "Generics MultiRec Zipper",
        "module": "Generics.MultiRec.Zipper",
        "name": "fill",
        "normalized": "a b-\u003eCtx c b d e-\u003ed b-\u003ec d e",
        "package": "zipper",
        "partial": "",
        "signature": "phi b-\u003eCtx f b r ix-\u003er b-\u003ef r ix"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zipper/docs/Generics-MultiRec-Zipper.html#v:first",
      "description": {
        "fct-module": "Generics.MultiRec.Zipper",
        "fct-package": "zipper",
        "fct-signature": "(forall b.  phi b -\u003e r b -\u003e Ctx f b r ix -\u003e a) -\u003e f r ix -\u003e Maybe a",
        "fct-source": "src/Generics-MultiRec-Zipper.html#first",
        "fct-type": "method",
        "title": "first"
      },
      "index": {
        "description": "",
        "hierarchy": "Generics MultiRec Zipper",
        "module": "Generics.MultiRec.Zipper",
        "name": "first",
        "normalized": "(a b c d-\u003ee d-\u003eCtx f d e g-\u003eh)-\u003ef e g-\u003eMaybe h",
        "package": "zipper",
        "partial": "",
        "signature": "(forall b. phi b-\u003er b-\u003eCtx f b r ix-\u003ea)-\u003ef r ix-\u003eMaybe a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zipper/docs/Generics-MultiRec-Zipper.html#v:foldZipper",
      "description": {
        "fct-descr": "\u003cp\u003eMost general eliminator. Both \u003ccode\u003e\u003ca\u003eon\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eupdate\u003c/a\u003e\u003c/code\u003e can be defined\n in terms of \u003ccode\u003e\u003ca\u003efoldZipper\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Generics.MultiRec.Zipper",
        "fct-package": "zipper",
        "fct-signature": "(forall xi.  phi xi -\u003e xi -\u003e r xi) -\u003e Algebra phi r -\u003e Loc phi I0 ix -\u003e r ix",
        "fct-source": "src/Generics-MultiRec-Zipper.html#foldZipper",
        "fct-type": "function",
        "title": "foldZipper"
      },
      "index": {
        "description": "Most general eliminator Both on and update can be defined in terms of foldZipper",
        "hierarchy": "Generics MultiRec Zipper",
        "module": "Generics.MultiRec.Zipper",
        "name": "foldZipper",
        "normalized": "(a b c d-\u003ed-\u003ee d)-\u003eAlgebra c e-\u003eLoc c I f-\u003ee f",
        "package": "zipper",
        "partial": "Zipper",
        "signature": "(forall xi. phi xi-\u003exi-\u003er xi)-\u003eAlgebra phi r-\u003eLoc phi I ix-\u003er ix"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zipper/docs/Generics-MultiRec-Zipper.html#v:leave",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the entire value, independent of the current focus.\n\u003c/p\u003e",
        "fct-module": "Generics.MultiRec.Zipper",
        "fct-package": "zipper",
        "fct-signature": "Loc phi I0 ix -\u003e ix",
        "fct-source": "src/Generics-MultiRec-Zipper.html#leave",
        "fct-type": "function",
        "title": "leave"
      },
      "index": {
        "description": "Return the entire value independent of the current focus",
        "hierarchy": "Generics MultiRec Zipper",
        "module": "Generics.MultiRec.Zipper",
        "name": "leave",
        "normalized": "Loc a I b-\u003eb",
        "package": "zipper",
        "partial": "",
        "signature": "Loc phi I ix-\u003eix"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zipper/docs/Generics-MultiRec-Zipper.html#v:left",
      "description": {
        "fct-descr": "\u003cp\u003eMove to the left sibling. Returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the current\n focus is the leftmost sibling.\n\u003c/p\u003e",
        "fct-module": "Generics.MultiRec.Zipper",
        "fct-package": "zipper",
        "fct-signature": "Loc phi r ix -\u003e Maybe (Loc phi r ix)",
        "fct-source": "src/Generics-MultiRec-Zipper.html#left",
        "fct-type": "function",
        "title": "left"
      },
      "index": {
        "description": "Move to the left sibling Returns Nothing if the current focus is the leftmost sibling",
        "hierarchy": "Generics MultiRec Zipper",
        "module": "Generics.MultiRec.Zipper",
        "name": "left",
        "normalized": "Loc a b c-\u003eMaybe(Loc a b c)",
        "package": "zipper",
        "partial": "",
        "signature": "Loc phi r ix-\u003eMaybe(Loc phi r ix)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zipper/docs/Generics-MultiRec-Zipper.html#v:next",
      "description": {
        "fct-module": "Generics.MultiRec.Zipper",
        "fct-package": "zipper",
        "fct-signature": "(forall b.  phi b -\u003e r b -\u003e Ctx f b r ix -\u003e a) -\u003e phi b -\u003e Ctx f b r ix -\u003e r b -\u003e Maybe a",
        "fct-source": "src/Generics-MultiRec-Zipper.html#next",
        "fct-type": "method",
        "title": "next"
      },
      "index": {
        "description": "",
        "hierarchy": "Generics MultiRec Zipper",
        "module": "Generics.MultiRec.Zipper",
        "name": "next",
        "normalized": "(a b c d-\u003ee d-\u003eCtx f d e g-\u003eh)-\u003ec d-\u003eCtx f d e g-\u003ee d-\u003eMaybe h",
        "package": "zipper",
        "partial": "",
        "signature": "(forall b. phi b-\u003er b-\u003eCtx f b r ix-\u003ea)-\u003ephi b-\u003eCtx f b r ix-\u003er b-\u003eMaybe a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zipper/docs/Generics-MultiRec-Zipper.html#v:on",
      "description": {
        "fct-descr": "\u003cp\u003eOperate on the current focus. This function can be used to\n extract the current point of focus.\n\u003c/p\u003e",
        "fct-module": "Generics.MultiRec.Zipper",
        "fct-package": "zipper",
        "fct-signature": "(forall xi.  phi xi -\u003e r xi -\u003e a) -\u003e Loc phi r ix -\u003e a",
        "fct-source": "src/Generics-MultiRec-Zipper.html#on",
        "fct-type": "function",
        "title": "on"
      },
      "index": {
        "description": "Operate on the current focus This function can be used to extract the current point of focus",
        "hierarchy": "Generics MultiRec Zipper",
        "module": "Generics.MultiRec.Zipper",
        "name": "on",
        "normalized": "(a b c d-\u003ee d-\u003ef)-\u003eLoc c e g-\u003ef",
        "package": "zipper",
        "partial": "",
        "signature": "(forall xi. phi xi-\u003er xi-\u003ea)-\u003eLoc phi r ix-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zipper/docs/Generics-MultiRec-Zipper.html#v:right",
      "description": {
        "fct-descr": "\u003cp\u003eMove to the right sibling. Returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the current\n focus is the rightmost sibling.\n\u003c/p\u003e",
        "fct-module": "Generics.MultiRec.Zipper",
        "fct-package": "zipper",
        "fct-signature": "Loc phi r ix -\u003e Maybe (Loc phi r ix)",
        "fct-source": "src/Generics-MultiRec-Zipper.html#right",
        "fct-type": "function",
        "title": "right"
      },
      "index": {
        "description": "Move to the right sibling Returns Nothing if the current focus is the rightmost sibling",
        "hierarchy": "Generics MultiRec Zipper",
        "module": "Generics.MultiRec.Zipper",
        "name": "right",
        "normalized": "Loc a b c-\u003eMaybe(Loc a b c)",
        "package": "zipper",
        "partial": "",
        "signature": "Loc phi r ix-\u003eMaybe(Loc phi r ix)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zipper/docs/Generics-MultiRec-Zipper.html#v:up",
      "description": {
        "fct-descr": "\u003cp\u003eMove up to the parent. Returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the current\n focus is the root.\n\u003c/p\u003e",
        "fct-module": "Generics.MultiRec.Zipper",
        "fct-package": "zipper",
        "fct-signature": "Loc phi I0 ix -\u003e Maybe (Loc phi I0 ix)",
        "fct-source": "src/Generics-MultiRec-Zipper.html#up",
        "fct-type": "function",
        "title": "up"
      },
      "index": {
        "description": "Move up to the parent Returns Nothing if the current focus is the root",
        "hierarchy": "Generics MultiRec Zipper",
        "module": "Generics.MultiRec.Zipper",
        "name": "up",
        "normalized": "Loc a I b-\u003eMaybe(Loc a I b)",
        "package": "zipper",
        "partial": "",
        "signature": "Loc phi I ix-\u003eMaybe(Loc phi I ix)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/zipper/docs/Generics-MultiRec-Zipper.html#v:update",
      "description": {
        "fct-descr": "\u003cp\u003eUpdate the current focus without changing its type.\n\u003c/p\u003e",
        "fct-module": "Generics.MultiRec.Zipper",
        "fct-package": "zipper",
        "fct-signature": "(forall xi.  phi xi -\u003e xi -\u003e xi) -\u003e Loc phi I0 ix -\u003e Loc phi I0 ix",
        "fct-source": "src/Generics-MultiRec-Zipper.html#update",
        "fct-type": "function",
        "title": "update"
      },
      "index": {
        "description": "Update the current focus without changing its type",
        "hierarchy": "Generics MultiRec Zipper",
        "module": "Generics.MultiRec.Zipper",
        "name": "update",
        "normalized": "(a b c d-\u003ed-\u003ed)-\u003eLoc c I e-\u003eLoc c I e",
        "package": "zipper",
        "partial": "",
        "signature": "(forall xi. phi xi-\u003exi-\u003exi)-\u003eLoc phi I ix-\u003eLoc phi I ix"
      }
    }
  }
]