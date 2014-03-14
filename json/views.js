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
        "word": "views"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA module extending the functionality of the State Monad with Views\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.State.View",
          "name": "View",
          "package": "views",
          "source": "src/Control-Monad-State-View.html",
          "type": "module"
        },
        "index": {
          "description": "module extending the functionality of the State Monad with Views",
          "hierarchy": "Control Monad State View",
          "module": "Control.Monad.State.View",
          "name": "View",
          "package": "views",
          "partial": "View",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/views/docs/Control-Monad-State-View.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets the given view from the whole state\n\u003c/p\u003e",
          "module": "Control.Monad.State.View",
          "name": "getting",
          "package": "views",
          "signature": "View s a -\u003e m a",
          "source": "src/Control-Monad-State-View.html#getting",
          "type": "function"
        },
        "index": {
          "description": "Gets the given view from the whole state",
          "hierarchy": "Control Monad State View",
          "module": "Control.Monad.State.View",
          "name": "getting",
          "normalized": "View a b-\u003ec b",
          "package": "views",
          "signature": "View s a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/views/docs/Control-Monad-State-View.html#v:getting"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModifies the view by the given function. \u003ccode\u003emodifying v f\u003c/code\u003e is equivalent to \u003ccode\u003eviewing v (modify f)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.State.View",
          "name": "modifying",
          "package": "views",
          "signature": "View s t -\u003e (t -\u003e t) -\u003e m ()",
          "source": "src/Control-Monad-State-View.html#modifying",
          "type": "function"
        },
        "index": {
          "description": "Modifies the view by the given function modifying is equivalent to viewing modify",
          "hierarchy": "Control Monad State View",
          "module": "Control.Monad.State.View",
          "name": "modifying",
          "normalized": "View a b-\u003e(b-\u003eb)-\u003ec()",
          "package": "views",
          "signature": "View s t-\u003e(t-\u003et)-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/views/docs/Control-Monad-State-View.html#v:modifying"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInjects the given value into the whole state. \u003ccode\u003eputting v x\u003c/code\u003e is equivalent to \u003ccode\u003eviewing v (put x)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.State.View",
          "name": "putting",
          "package": "views",
          "signature": "View s t -\u003e t -\u003e m ()",
          "source": "src/Control-Monad-State-View.html#putting",
          "type": "function"
        },
        "index": {
          "description": "Injects the given value into the whole state putting is equivalent to viewing put",
          "hierarchy": "Control Monad State View",
          "module": "Control.Monad.State.View",
          "name": "putting",
          "normalized": "View a b-\u003eb-\u003ec()",
          "package": "views",
          "signature": "View s t-\u003et-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/views/docs/Control-Monad-State-View.html#v:putting"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003esaving v m\u003c/code\u003e executes \u003ccode\u003em\u003c/code\u003e, while preserving the value of the View \u003ccode\u003ev\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.State.View",
          "name": "saving",
          "package": "views",
          "signature": "View s t -\u003e m b -\u003e m b",
          "source": "src/Control-Monad-State-View.html#saving",
          "type": "function"
        },
        "index": {
          "description": "saving executes while preserving the value of the View",
          "hierarchy": "Control Monad State View",
          "module": "Control.Monad.State.View",
          "name": "saving",
          "normalized": "View a b-\u003ec d-\u003ec d",
          "package": "views",
          "signature": "View s t-\u003em b-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/views/docs/Control-Monad-State-View.html#v:saving"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA special case of \u003ccode\u003e\u003ca\u003eswappingWith\u003c/a\u003e\u003c/code\u003e with a constant value.\n\u003c/p\u003e",
          "module": "Control.Monad.State.View",
          "name": "swapping",
          "package": "views",
          "signature": "View s t -\u003e t -\u003e m b -\u003e m b",
          "source": "src/Control-Monad-State-View.html#swapping",
          "type": "function"
        },
        "index": {
          "description": "special case of swappingWith with constant value",
          "hierarchy": "Control Monad State View",
          "module": "Control.Monad.State.View",
          "name": "swapping",
          "normalized": "View a b-\u003eb-\u003ec d-\u003ec d",
          "package": "views",
          "signature": "View s t-\u003et-\u003em b-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/views/docs/Control-Monad-State-View.html#v:swapping"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eswappingWith v f m\u003c/code\u003e executes \u003ccode\u003em\u003c/code\u003e in an environment where the view \u003ccode\u003ev\u003c/code\u003e was modified by \u003ccode\u003ef\u003c/code\u003e,\n preserving the old value of \u003ccode\u003ev\u003c/code\u003e (it swaps the old value and the new, and then swaps back after \u003ccode\u003em\u003c/code\u003e)\n\u003c/p\u003e",
          "module": "Control.Monad.State.View",
          "name": "swappingWith",
          "package": "views",
          "signature": "View s t -\u003e (t -\u003e t) -\u003e m b -\u003e m b",
          "source": "src/Control-Monad-State-View.html#swappingWith",
          "type": "function"
        },
        "index": {
          "description": "swappingWith executes in an environment where the view was modified by preserving the old value of it swaps the old value and the new and then swaps back after",
          "hierarchy": "Control Monad State View",
          "module": "Control.Monad.State.View",
          "name": "swappingWith",
          "normalized": "View a b-\u003e(b-\u003eb)-\u003ec d-\u003ec d",
          "package": "views",
          "partial": "With",
          "signature": "View s t-\u003e(t-\u003et)-\u003em b-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/views/docs/Control-Monad-State-View.html#v:swappingWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructs a State monad that acts on a View.\n\u003c/p\u003e",
          "module": "Control.Monad.State.View",
          "name": "viewState",
          "package": "views",
          "signature": "View s t -\u003e (t -\u003e (a, t)) -\u003e m a",
          "source": "src/Control-Monad-State-View.html#viewState",
          "type": "function"
        },
        "index": {
          "description": "Constructs State monad that acts on View",
          "hierarchy": "Control Monad State View",
          "module": "Control.Monad.State.View",
          "name": "viewState",
          "normalized": "View a b-\u003e(b-\u003e(c,b))-\u003ed c",
          "package": "views",
          "partial": "State",
          "signature": "View s t-\u003e(t-\u003e(a,t))-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/views/docs/Control-Monad-State-View.html#v:viewState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecutes a state restricted to the given View.\n\u003c/p\u003e",
          "module": "Control.Monad.State.View",
          "name": "viewing",
          "package": "views",
          "signature": "View s t -\u003e State t a -\u003e m a",
          "source": "src/Control-Monad-State-View.html#viewing",
          "type": "function"
        },
        "index": {
          "description": "Executes state restricted to the given View",
          "hierarchy": "Control Monad State View",
          "module": "Control.Monad.State.View",
          "name": "viewing",
          "normalized": "View a b-\u003eState b c-\u003ed c",
          "package": "views",
          "signature": "View s t-\u003eState t a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/views/docs/Control-Monad-State-View.html#v:viewing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.View",
          "name": "View",
          "package": "views",
          "source": "src/Data-View.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data View",
          "module": "Data.View",
          "name": "View",
          "package": "views",
          "partial": "View",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/views/docs/Data-View.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type definition of a view from \u003ccode\u003ea\u003c/code\u003e to \u003ccode\u003ev\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eViews allow you to operate on part (the \u003cem\u003eview\u003c/em\u003e) of a data structure (the \u003cem\u003ewhole\u003c/em\u003e)\nwhile abstracting the rest.\n\u003c/p\u003e\u003cp\u003eNote that while views are mostly used for operating on record fields, there are\nvery interesting abstractions that may be conceived from them having nothing\nwhatsoever to do with fields (for example, a view for the bounds of an array,\nthat allows for easy redimensioning, or a view for the associated value to a\ngiven key in a map)\n\u003c/p\u003e",
          "module": "Data.View",
          "name": "View",
          "package": "views",
          "source": "src/Data-View.html#View",
          "type": "data"
        },
        "index": {
          "description": "The type definition of view from to Views allow you to operate on part the view of data structure the whole while abstracting the rest Note that while views are mostly used for operating on record fields there are very interesting abstractions that may be conceived from them having nothing whatsoever to do with fields for example view for the bounds of an array that allows for easy redimensioning or view for the associated value to given key in map",
          "hierarchy": "Data View",
          "module": "Data.View",
          "name": "View",
          "package": "views",
          "partial": "View",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/views/docs/Data-View.html#t:View"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRight-to-left composition\n\u003c/p\u003e",
          "module": "Data.View",
          "name": "(\u003c\u003c\u003c)",
          "package": "views",
          "signature": "cat b c -\u003e cat a b -\u003e cat a c",
          "type": "function"
        },
        "index": {
          "description": "Right-to-left composition",
          "hierarchy": "Data View",
          "module": "Data.View",
          "name": "(\u003c\u003c\u003c) \u003c\u003c\u003c",
          "normalized": "a b c-\u003ea d b-\u003ea d c",
          "package": "views",
          "signature": "cat b c-\u003ecat a b-\u003ecat a c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/views/docs/Data-View.html#v:-60--60--60-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLeft-to-right composition\n\u003c/p\u003e",
          "module": "Data.View",
          "name": "(\u003e\u003e\u003e)",
          "package": "views",
          "signature": "cat a b -\u003e cat b c -\u003e cat a c",
          "type": "function"
        },
        "index": {
          "description": "Left-to-right composition",
          "hierarchy": "Data View",
          "module": "Data.View",
          "name": "(\u003e\u003e\u003e) \u003e\u003e\u003e",
          "normalized": "a b c-\u003ea c d-\u003ea b d",
          "package": "views",
          "signature": "cat a b-\u003ecat b c-\u003ecat a c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/views/docs/Data-View.html#v:-62--62--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.View",
          "name": "View",
          "package": "views",
          "signature": "View",
          "source": "src/Data-View.html#View",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data View",
          "module": "Data.View",
          "name": "View",
          "package": "views",
          "partial": "View",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/views/docs/Data-View.html#v:View"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFunction to extract the view from the whole\n\u003c/p\u003e",
          "module": "Data.View",
          "name": "extract",
          "package": "views",
          "signature": "a -\u003e v",
          "source": "src/Data-View.html#View",
          "type": "function"
        },
        "index": {
          "description": "Function to extract the view from the whole",
          "hierarchy": "Data View",
          "module": "Data.View",
          "name": "extract",
          "normalized": "a-\u003eb",
          "package": "views",
          "signature": "a-\u003ev",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/views/docs/Data-View.html#v:extract"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA view that encapsulates a function.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNote:\u003c/em\u003e A View created with \u003ccode\u003e\u003ca\u003ef_\u003c/a\u003e\u003c/code\u003e is not a full View, as it doesn't allow\nreinjection of the view into the whole. This function is thus to be\nused only for convenience when chaining Views and pure functions.\n\u003c/p\u003e",
          "module": "Data.View",
          "name": "f_",
          "package": "views",
          "signature": "(a -\u003e v) -\u003e View a v",
          "source": "src/Data-View.html#f_",
          "type": "function"
        },
        "index": {
          "description": "view that encapsulates function Note View created with is not full View as it doesn allow reinjection of the view into the whole This function is thus to be used only for convenience when chaining Views and pure functions",
          "hierarchy": "Data View",
          "module": "Data.View",
          "name": "f_",
          "normalized": "(a-\u003eb)-\u003eView a b",
          "package": "views",
          "signature": "(a-\u003ev)-\u003eView a v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/views/docs/Data-View.html#v:f_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA view for the first element of a pair\n\u003c/p\u003e",
          "module": "Data.View",
          "name": "fst_",
          "package": "views",
          "signature": "View (v, b) v",
          "source": "src/Data-View.html#fst_",
          "type": "function"
        },
        "index": {
          "description": "view for the first element of pair",
          "hierarchy": "Data View",
          "module": "Data.View",
          "name": "fst_",
          "normalized": "View(a,b)a",
          "package": "views",
          "signature": "View(v,b)v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/views/docs/Data-View.html#v:fst_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA view for the head of a list\n\u003c/p\u003e",
          "module": "Data.View",
          "name": "head_",
          "package": "views",
          "signature": "View [v] v",
          "source": "src/Data-View.html#head_",
          "type": "function"
        },
        "index": {
          "description": "view for the head of list",
          "hierarchy": "Data View",
          "module": "Data.View",
          "name": "head_",
          "normalized": "View[a]a",
          "package": "views",
          "signature": "View[v]v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/views/docs/Data-View.html#v:head_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe identity view\n\u003c/p\u003e",
          "module": "Data.View",
          "name": "id_",
          "package": "views",
          "signature": "View a a",
          "source": "src/Data-View.html#id_",
          "type": "function"
        },
        "index": {
          "description": "The identity view",
          "hierarchy": "Data View",
          "module": "Data.View",
          "name": "id_",
          "package": "views",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/views/docs/Data-View.html#v:id_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFunction to reinject the view into the whole\n\u003c/p\u003e",
          "module": "Data.View",
          "name": "inject",
          "package": "views",
          "signature": "v -\u003e a -\u003e a",
          "source": "src/Data-View.html#View",
          "type": "function"
        },
        "index": {
          "description": "Function to reinject the view into the whole",
          "hierarchy": "Data View",
          "module": "Data.View",
          "name": "inject",
          "normalized": "a-\u003eb-\u003eb",
          "package": "views",
          "signature": "v-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/views/docs/Data-View.html#v:inject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ef \u003ccode\u003e\u003ca\u003eon\u003c/a\u003e\u003c/code\u003e v\u003c/code\u003e expands \u003ccode\u003ef\u003c/code\u003e to act on the whole of v. \n\u003c/p\u003e",
          "module": "Data.View",
          "name": "on",
          "package": "views",
          "signature": "(t1 -\u003e t1) -\u003e View t t1 -\u003e t -\u003e t",
          "source": "src/Data-View.html#on",
          "type": "function"
        },
        "index": {
          "description": "on expands to act on the whole of",
          "hierarchy": "Data View",
          "module": "Data.View",
          "name": "on",
          "normalized": "(a-\u003ea)-\u003eView a a-\u003ea-\u003ea",
          "package": "views",
          "signature": "(t-\u003et)-\u003eView t t-\u003et-\u003et",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/views/docs/Data-View.html#v:on"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA view for the second element of a pair\n\u003c/p\u003e",
          "module": "Data.View",
          "name": "snd_",
          "package": "views",
          "signature": "View (a, v) v",
          "source": "src/Data-View.html#snd_",
          "type": "function"
        },
        "index": {
          "description": "view for the second element of pair",
          "hierarchy": "Data View",
          "module": "Data.View",
          "name": "snd_",
          "normalized": "View(a,b)b",
          "package": "views",
          "signature": "View(a,v)v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/views/docs/Data-View.html#v:snd_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA view for the tail of a list\n\u003c/p\u003e",
          "module": "Data.View",
          "name": "tail_",
          "package": "views",
          "signature": "View [a] [a]",
          "source": "src/Data-View.html#tail_",
          "type": "function"
        },
        "index": {
          "description": "view for the tail of list",
          "hierarchy": "Data View",
          "module": "Data.View",
          "name": "tail_",
          "normalized": "View[a][a]",
          "package": "views",
          "signature": "View[a][a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/views/docs/Data-View.html#v:tail_"
      }
    }
  ]
]