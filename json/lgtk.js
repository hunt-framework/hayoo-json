[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lgtk/docs/LGtk-ADTEditor.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA generic ADT editor defined on top of the main LGtk interface, \u003ca\u003eLGtk\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "LGtk.ADTEditor",
        "fct-package": "lgtk",
        "fct-signature": "module",
        "fct-source": "src/LGtk-ADTEditor.html",
        "fct-type": "module",
        "title": "ADTEditor"
      },
      "index": {
        "description": "generic ADT editor defined on top of the main LGtk interface LGtk",
        "hierarchy": "LGtk ADTEditor",
        "module": "LGtk.ADTEditor",
        "name": "ADTEditor",
        "normalized": "",
        "package": "lgtk",
        "partial": "ADTEditor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lgtk/docs/LGtk-ADTEditor.html#t:ADTLens",
      "description": {
        "fct-descr": "\u003cp\u003eLens for editable ADTs with support of shared record fields between constructors.\n\u003c/p\u003e\u003cp\u003eSuppose we have the data type\n\u003c/p\u003e\u003cpre\u003e\ndata X\n    = X1 { a :: Int, b :: Bool }\n    | X2 { a :: Int, c :: Char }\n\u003c/pre\u003e\u003cp\u003eWe can build an editor which can switch between two editor for the constructors.\nIf the field \u003ccode\u003ea\u003c/code\u003e is edited in one editor, it will be updated in the other.\n\u003c/p\u003e",
        "fct-module": "LGtk.ADTEditor",
        "fct-package": "lgtk",
        "fct-signature": "class",
        "fct-source": "src/LGtk-ADTEditor.html#ADTLens",
        "fct-type": "class",
        "title": "ADTLens"
      },
      "index": {
        "description": "Lens for editable ADTs with support of shared record fields between constructors Suppose we have the data type data X1 Int Bool X2 Int Char We can build an editor which can switch between two editor for the constructors If the field is edited in one editor it will be updated in the other",
        "hierarchy": "LGtk ADTEditor",
        "module": "LGtk.ADTEditor",
        "name": "ADTLens",
        "normalized": "",
        "package": "lgtk",
        "partial": "ADTLens",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lgtk/docs/LGtk-ADTEditor.html#t:Elems",
      "description": {
        "fct-descr": "\u003cp\u003eHeterogeneous lists\n\u003c/p\u003e",
        "fct-module": "LGtk.ADTEditor",
        "fct-package": "lgtk",
        "fct-signature": "data",
        "fct-source": "src/LGtk-ADTEditor.html#Elems",
        "fct-type": "data",
        "title": "Elems"
      },
      "index": {
        "description": "Heterogeneous lists",
        "hierarchy": "LGtk ADTEditor",
        "module": "LGtk.ADTEditor",
        "name": "Elems",
        "normalized": "",
        "package": "lgtk",
        "partial": "Elems",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lgtk/docs/LGtk-ADTEditor.html#t:List",
      "description": {
        "fct-descr": "\u003cp\u003eType-level lists\n\u003c/p\u003e",
        "fct-module": "LGtk.ADTEditor",
        "fct-package": "lgtk",
        "fct-signature": "data",
        "fct-source": "src/LGtk-ADTEditor.html#List",
        "fct-type": "data",
        "title": "List"
      },
      "index": {
        "description": "Type-level lists",
        "hierarchy": "LGtk ADTEditor",
        "module": "LGtk.ADTEditor",
        "name": "List",
        "normalized": "",
        "package": "lgtk",
        "partial": "List",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lgtk/docs/LGtk-ADTEditor.html#v:Cons",
      "description": {
        "fct-module": "LGtk.ADTEditor",
        "fct-package": "lgtk",
        "fct-signature": "Cons a (List a)",
        "fct-source": "src/LGtk-ADTEditor.html#List",
        "fct-type": "function",
        "title": "Cons"
      },
      "index": {
        "description": "",
        "hierarchy": "LGtk ADTEditor",
        "module": "LGtk.ADTEditor",
        "name": "Cons",
        "normalized": "",
        "package": "lgtk",
        "partial": "Cons",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lgtk/docs/LGtk-ADTEditor.html#v:ElemsCons",
      "description": {
        "fct-module": "LGtk.ADTEditor",
        "fct-package": "lgtk",
        "fct-signature": "a -\u003e Elems as -\u003e Elems (Cons a as)",
        "fct-source": "src/LGtk-ADTEditor.html#Elems",
        "fct-type": "function",
        "title": "ElemsCons"
      },
      "index": {
        "description": "",
        "hierarchy": "LGtk ADTEditor",
        "module": "LGtk.ADTEditor",
        "name": "ElemsCons",
        "normalized": "a-\u003eElems b-\u003eElems(Cons a b)",
        "package": "lgtk",
        "partial": "Elems Cons",
        "signature": "a-\u003eElems as-\u003eElems(Cons a as)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lgtk/docs/LGtk-ADTEditor.html#v:ElemsNil",
      "description": {
        "fct-module": "LGtk.ADTEditor",
        "fct-package": "lgtk",
        "fct-signature": "Elems Nil",
        "fct-source": "src/LGtk-ADTEditor.html#Elems",
        "fct-type": "function",
        "title": "ElemsNil"
      },
      "index": {
        "description": "",
        "hierarchy": "LGtk ADTEditor",
        "module": "LGtk.ADTEditor",
        "name": "ElemsNil",
        "normalized": "",
        "package": "lgtk",
        "partial": "Elems Nil",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lgtk/docs/LGtk-ADTEditor.html#v:Nil",
      "description": {
        "fct-module": "LGtk.ADTEditor",
        "fct-package": "lgtk",
        "fct-signature": "Nil",
        "fct-source": "src/LGtk-ADTEditor.html#List",
        "fct-type": "function",
        "title": "Nil"
      },
      "index": {
        "description": "",
        "hierarchy": "LGtk ADTEditor",
        "module": "LGtk.ADTEditor",
        "name": "Nil",
        "normalized": "",
        "package": "lgtk",
        "partial": "Nil",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lgtk/docs/LGtk-ADTEditor.html#v:adtEditor",
      "description": {
        "fct-descr": "\u003cp\u003eA generic ADT editor\n\u003c/p\u003e",
        "fct-module": "LGtk.ADTEditor",
        "fct-package": "lgtk",
        "fct-signature": "Ref m a -\u003e m (Widget m)",
        "fct-source": "src/LGtk-ADTEditor.html#adtEditor",
        "fct-type": "function",
        "title": "adtEditor"
      },
      "index": {
        "description": "generic ADT editor",
        "hierarchy": "LGtk ADTEditor",
        "module": "LGtk.ADTEditor",
        "name": "adtEditor",
        "normalized": "Ref a b-\u003ea(Widget a)",
        "package": "lgtk",
        "partial": "Editor",
        "signature": "Ref m a-\u003em(Widget m)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lgtk/docs/LGtk-ADTEditor.html#v:adtLens",
      "description": {
        "fct-descr": "\u003cp\u003eThe lens which defines an abstract editor.\n\u003c/p\u003e\u003cp\u003eThe first parameter defines the displayed constructor name and the parts of the constructor for each constructor.\n    \u003ccode\u003eInt\u003c/code\u003e is an index in the \u003ccode\u003eADTEls\u003c/code\u003e list.\n\u003c/p\u003e\u003cp\u003eFor example, in case of \u003ccode\u003eX\u003c/code\u003e,\n\u003c/p\u003e\u003cpre\u003efst3 adtLens = [(\"X1\", [0, 1]), (\"X2\", [0, 2])]\u003c/pre\u003e\u003cp\u003eThe second parameter is the list of default values for each part.\n\u003c/p\u003e\u003cp\u003eThe third parameter is a lens from the selected constructor index plus\n    the values of the ADT parts to the ADT values.\n\u003c/p\u003e",
        "fct-module": "LGtk.ADTEditor",
        "fct-package": "lgtk",
        "fct-signature": "([(String, [Int])], Elems (ADTEls a), Lens (Int, Elems (ADTEls a)) a)",
        "fct-source": "src/LGtk-ADTEditor.html#adtLens",
        "fct-type": "method",
        "title": "adtLens"
      },
      "index": {
        "description": "The lens which defines an abstract editor The first parameter defines the displayed constructor name and the parts of the constructor for each constructor Int is an index in the ADTEls list For example in case of fst3 adtLens X1 X2 The second parameter is the list of default values for each part The third parameter is lens from the selected constructor index plus the values of the ADT parts to the ADT values",
        "hierarchy": "LGtk ADTEditor",
        "module": "LGtk.ADTEditor",
        "name": "adtLens",
        "normalized": "([(String,[Int])],Elems(ADTEls a),Lens(Int,Elems(ADTEls a))a)",
        "package": "lgtk",
        "partial": "Lens",
        "signature": "([(String,[Int])],Elems(ADTEls a),Lens(Int,Elems(ADTEls a))a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lgtk/docs/LGtk-Demos-IntListEditor.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn integer list editor\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "LGtk.Demos.IntListEditor",
        "fct-package": "lgtk",
        "fct-signature": "module",
        "fct-source": "src/LGtk-Demos-IntListEditor.html",
        "fct-type": "module",
        "title": "IntListEditor"
      },
      "index": {
        "description": "An integer list editor",
        "hierarchy": "LGtk Demos IntListEditor",
        "module": "LGtk.Demos.IntListEditor",
        "name": "IntListEditor",
        "normalized": "",
        "package": "lgtk",
        "partial": "Int List Editor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lgtk/docs/LGtk-Demos-IntListEditor.html#v:intListEditor",
      "description": {
        "fct-module": "LGtk.Demos.IntListEditor",
        "fct-package": "lgtk",
        "fct-signature": "(a, Bool)-\u003e Int-\u003e Ref m [(a, Bool)]-\u003e Ref m Bool-\u003e Widget m",
        "fct-type": "function",
        "title": "intListEditor"
      },
      "index": {
        "description": "",
        "hierarchy": "LGtk Demos IntListEditor",
        "module": "LGtk.Demos.IntListEditor",
        "name": "intListEditor",
        "normalized": "(a,Bool)-\u003eInt-\u003eRef b[(a,Bool)]-\u003eRef b Bool-\u003eWidget b",
        "package": "lgtk",
        "partial": "List Editor",
        "signature": "(a,Bool)-\u003eInt-\u003eRef m[(a,Bool)]-\u003eRef m Bool-\u003eWidget m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lgtk/docs/LGtk-Demos-IntListEditor.html#v:listEditor",
      "description": {
        "fct-module": "LGtk.Demos.IntListEditor",
        "fct-package": "lgtk",
        "fct-signature": "a -\u003e [Ref m a -\u003e m (Widget m)] -\u003e Ref m [a] -\u003e m (Widget m)",
        "fct-source": "src/LGtk-Demos-IntListEditor.html#listEditor",
        "fct-type": "function",
        "title": "listEditor"
      },
      "index": {
        "description": "",
        "hierarchy": "LGtk Demos IntListEditor",
        "module": "LGtk.Demos.IntListEditor",
        "name": "listEditor",
        "normalized": "a-\u003e[Ref b a-\u003eb(Widget b)]-\u003eRef b[a]-\u003eb(Widget b)",
        "package": "lgtk",
        "partial": "Editor",
        "signature": "a-\u003e[Ref m a-\u003em(Widget m)]-\u003eRef m[a]-\u003em(Widget m)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lgtk/docs/LGtk-Demos-Main.html#",
      "description": {
        "fct-module": "LGtk.Demos.Main",
        "fct-package": "lgtk",
        "fct-signature": "module",
        "fct-source": "src/LGtk-Demos-Main.html",
        "fct-type": "module",
        "title": "Main"
      },
      "index": {
        "description": "",
        "hierarchy": "LGtk Demos Main",
        "module": "LGtk.Demos.Main",
        "name": "Main",
        "normalized": "",
        "package": "lgtk",
        "partial": "Main",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lgtk/docs/LGtk-Demos-Main.html#v:main",
      "description": {
        "fct-module": "LGtk.Demos.Main",
        "fct-package": "lgtk",
        "fct-signature": "IO ()",
        "fct-source": "src/LGtk-Demos-Main.html#main",
        "fct-type": "function",
        "title": "main"
      },
      "index": {
        "description": "",
        "hierarchy": "LGtk Demos Main",
        "module": "LGtk.Demos.Main",
        "name": "main",
        "normalized": "IO()",
        "package": "lgtk",
        "partial": "",
        "signature": "IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lgtk/docs/LGtk-Demos-TEditor.html#",
      "description": {
        "fct-module": "LGtk.Demos.TEditor",
        "fct-package": "lgtk",
        "fct-signature": "module",
        "fct-source": "src/LGtk-Demos-TEditor.html",
        "fct-type": "module",
        "title": "TEditor"
      },
      "index": {
        "description": "",
        "hierarchy": "LGtk Demos TEditor",
        "module": "LGtk.Demos.TEditor",
        "name": "TEditor",
        "normalized": "",
        "package": "lgtk",
        "partial": "TEditor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lgtk/docs/LGtk-Demos-TEditor.html#t:T",
      "description": {
        "fct-descr": "\u003cp\u003eBinary tree shapes\n\u003c/p\u003e",
        "fct-module": "LGtk.Demos.TEditor",
        "fct-package": "lgtk",
        "fct-signature": "data",
        "fct-source": "src/LGtk-Demos-TEditor.html#T",
        "fct-type": "data",
        "title": "T"
      },
      "index": {
        "description": "Binary tree shapes",
        "hierarchy": "LGtk Demos TEditor",
        "module": "LGtk.Demos.TEditor",
        "name": "T",
        "normalized": "",
        "package": "lgtk",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lgtk/docs/LGtk-Demos-TEditor.html#v:Leaf",
      "description": {
        "fct-module": "LGtk.Demos.TEditor",
        "fct-package": "lgtk",
        "fct-signature": "Leaf",
        "fct-source": "src/LGtk-Demos-TEditor.html#T",
        "fct-type": "function",
        "title": "Leaf"
      },
      "index": {
        "description": "",
        "hierarchy": "LGtk Demos TEditor",
        "module": "LGtk.Demos.TEditor",
        "name": "Leaf",
        "normalized": "",
        "package": "lgtk",
        "partial": "Leaf",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lgtk/docs/LGtk-Demos-TEditor.html#v:Node",
      "description": {
        "fct-module": "LGtk.Demos.TEditor",
        "fct-package": "lgtk",
        "fct-signature": "Node T T",
        "fct-source": "src/LGtk-Demos-TEditor.html#T",
        "fct-type": "function",
        "title": "Node"
      },
      "index": {
        "description": "",
        "hierarchy": "LGtk Demos TEditor",
        "module": "LGtk.Demos.TEditor",
        "name": "Node",
        "normalized": "",
        "package": "lgtk",
        "partial": "Node",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lgtk/docs/LGtk-Demos-TEditor.html#v:tEditor1",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eT\u003c/code\u003e editor with comboboxes, as an ADTEditor\n\u003c/p\u003e",
        "fct-module": "LGtk.Demos.TEditor",
        "fct-package": "lgtk",
        "fct-signature": "Widget m",
        "fct-source": "src/LGtk-Demos-TEditor.html#tEditor1",
        "fct-type": "function",
        "title": "tEditor1"
      },
      "index": {
        "description": "editor with comboboxes as an ADTEditor",
        "hierarchy": "LGtk Demos TEditor",
        "module": "LGtk.Demos.TEditor",
        "name": "tEditor1",
        "normalized": "",
        "package": "lgtk",
        "partial": "Editor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lgtk/docs/LGtk-Demos-TEditor.html#v:tEditor3",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eT\u003c/code\u003e editor with checkboxes, given directly\n\u003c/p\u003e",
        "fct-module": "LGtk.Demos.TEditor",
        "fct-package": "lgtk",
        "fct-signature": "Ref m T -\u003e m (Widget m)",
        "fct-source": "src/LGtk-Demos-TEditor.html#tEditor3",
        "fct-type": "function",
        "title": "tEditor3"
      },
      "index": {
        "description": "editor with checkboxes given directly",
        "hierarchy": "LGtk Demos TEditor",
        "module": "LGtk.Demos.TEditor",
        "name": "tEditor3",
        "normalized": "Ref a T-\u003ea(Widget a)",
        "package": "lgtk",
        "partial": "Editor",
        "signature": "Ref m T-\u003em(Widget m)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lgtk/docs/LGtk-Demos-TEditor.html#v:tLens",
      "description": {
        "fct-descr": "\u003cp\u003eLens for \u003ccode\u003eT\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "LGtk.Demos.TEditor",
        "fct-package": "lgtk",
        "fct-signature": "Lens (Bool, (T, T)) T",
        "fct-source": "src/LGtk-Demos-TEditor.html#tLens",
        "fct-type": "function",
        "title": "tLens"
      },
      "index": {
        "description": "Lens for",
        "hierarchy": "LGtk Demos TEditor",
        "module": "LGtk.Demos.TEditor",
        "name": "tLens",
        "normalized": "Lens(Bool,(T,T))T",
        "package": "lgtk",
        "partial": "Lens",
        "signature": "Lens(Bool,(T,T))T"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lgtk/docs/LGtk-Demos-Tri.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn editor for integers x, y, z such that x + y = z always hold and\nthe last edited value change.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "LGtk.Demos.Tri",
        "fct-package": "lgtk",
        "fct-signature": "module",
        "fct-source": "src/LGtk-Demos-Tri.html",
        "fct-type": "module",
        "title": "Tri"
      },
      "index": {
        "description": "An editor for integers such that always hold and the last edited value change",
        "hierarchy": "LGtk Demos Tri",
        "module": "LGtk.Demos.Tri",
        "name": "Tri",
        "normalized": "",
        "package": "lgtk",
        "partial": "Tri",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lgtk/docs/LGtk-Demos-Tri.html#t:S",
      "description": {
        "fct-descr": "\u003cp\u003eInformation pieces: what is known?\n\u003c/p\u003e",
        "fct-module": "LGtk.Demos.Tri",
        "fct-package": "lgtk",
        "fct-signature": "data",
        "fct-source": "src/LGtk-Demos-Tri.html#S",
        "fct-type": "data",
        "title": "S"
      },
      "index": {
        "description": "Information pieces what is known",
        "hierarchy": "LGtk Demos Tri",
        "module": "LGtk.Demos.Tri",
        "name": "S",
        "normalized": "",
        "package": "lgtk",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lgtk/docs/LGtk-Demos-Tri.html#v:X",
      "description": {
        "fct-module": "LGtk.Demos.Tri",
        "fct-package": "lgtk",
        "fct-signature": "X Int",
        "fct-source": "src/LGtk-Demos-Tri.html#S",
        "fct-type": "function",
        "title": "X"
      },
      "index": {
        "description": "",
        "hierarchy": "LGtk Demos Tri",
        "module": "LGtk.Demos.Tri",
        "name": "X",
        "normalized": "",
        "package": "lgtk",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lgtk/docs/LGtk-Demos-Tri.html#v:XY",
      "description": {
        "fct-module": "LGtk.Demos.Tri",
        "fct-package": "lgtk",
        "fct-signature": "XY Int",
        "fct-source": "src/LGtk-Demos-Tri.html#S",
        "fct-type": "function",
        "title": "XY"
      },
      "index": {
        "description": "",
        "hierarchy": "LGtk Demos Tri",
        "module": "LGtk.Demos.Tri",
        "name": "XY",
        "normalized": "",
        "package": "lgtk",
        "partial": "XY",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lgtk/docs/LGtk-Demos-Tri.html#v:Y",
      "description": {
        "fct-module": "LGtk.Demos.Tri",
        "fct-package": "lgtk",
        "fct-signature": "Y Int",
        "fct-source": "src/LGtk-Demos-Tri.html#S",
        "fct-type": "function",
        "title": "Y"
      },
      "index": {
        "description": "",
        "hierarchy": "LGtk Demos Tri",
        "module": "LGtk.Demos.Tri",
        "name": "Y",
        "normalized": "",
        "package": "lgtk",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lgtk/docs/LGtk-Demos-Tri.html#v:getX",
      "description": {
        "fct-descr": "\u003cp\u003eGetter\n\u003c/p\u003e",
        "fct-module": "LGtk.Demos.Tri",
        "fct-package": "lgtk",
        "fct-signature": "[S] -\u003e Int",
        "fct-source": "src/LGtk-Demos-Tri.html#getX",
        "fct-type": "function",
        "title": "getX"
      },
      "index": {
        "description": "Getter",
        "hierarchy": "LGtk Demos Tri",
        "module": "LGtk.Demos.Tri",
        "name": "getX",
        "normalized": "[S]-\u003eInt",
        "package": "lgtk",
        "partial": "",
        "signature": "[S]-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lgtk/docs/LGtk-Demos-Tri.html#v:getXY",
      "description": {
        "fct-descr": "\u003cp\u003eGetter\n\u003c/p\u003e",
        "fct-module": "LGtk.Demos.Tri",
        "fct-package": "lgtk",
        "fct-signature": "[S] -\u003e Int",
        "fct-source": "src/LGtk-Demos-Tri.html#getXY",
        "fct-type": "function",
        "title": "getXY"
      },
      "index": {
        "description": "Getter",
        "hierarchy": "LGtk Demos Tri",
        "module": "LGtk.Demos.Tri",
        "name": "getXY",
        "normalized": "[S]-\u003eInt",
        "package": "lgtk",
        "partial": "XY",
        "signature": "[S]-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lgtk/docs/LGtk-Demos-Tri.html#v:getY",
      "description": {
        "fct-descr": "\u003cp\u003eGetter\n\u003c/p\u003e",
        "fct-module": "LGtk.Demos.Tri",
        "fct-package": "lgtk",
        "fct-signature": "[S] -\u003e Int",
        "fct-source": "src/LGtk-Demos-Tri.html#getY",
        "fct-type": "function",
        "title": "getY"
      },
      "index": {
        "description": "Getter",
        "hierarchy": "LGtk Demos Tri",
        "module": "LGtk.Demos.Tri",
        "name": "getY",
        "normalized": "[S]-\u003eInt",
        "package": "lgtk",
        "partial": "",
        "signature": "[S]-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lgtk/docs/LGtk-Demos-Tri.html#v:setX",
      "description": {
        "fct-descr": "\u003cp\u003eSetter\n\u003c/p\u003e",
        "fct-module": "LGtk.Demos.Tri",
        "fct-package": "lgtk",
        "fct-signature": "Int -\u003e [S] -\u003e [S]",
        "fct-source": "src/LGtk-Demos-Tri.html#setX",
        "fct-type": "function",
        "title": "setX"
      },
      "index": {
        "description": "Setter",
        "hierarchy": "LGtk Demos Tri",
        "module": "LGtk.Demos.Tri",
        "name": "setX",
        "normalized": "Int-\u003e[S]-\u003e[S]",
        "package": "lgtk",
        "partial": "",
        "signature": "Int-\u003e[S]-\u003e[S]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lgtk/docs/LGtk-Demos-Tri.html#v:setXY",
      "description": {
        "fct-descr": "\u003cp\u003eSetter\n\u003c/p\u003e",
        "fct-module": "LGtk.Demos.Tri",
        "fct-package": "lgtk",
        "fct-signature": "Int -\u003e [S] -\u003e [S]",
        "fct-source": "src/LGtk-Demos-Tri.html#setXY",
        "fct-type": "function",
        "title": "setXY"
      },
      "index": {
        "description": "Setter",
        "hierarchy": "LGtk Demos Tri",
        "module": "LGtk.Demos.Tri",
        "name": "setXY",
        "normalized": "Int-\u003e[S]-\u003e[S]",
        "package": "lgtk",
        "partial": "XY",
        "signature": "Int-\u003e[S]-\u003e[S]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lgtk/docs/LGtk-Demos-Tri.html#v:setY",
      "description": {
        "fct-descr": "\u003cp\u003eSetter\n\u003c/p\u003e",
        "fct-module": "LGtk.Demos.Tri",
        "fct-package": "lgtk",
        "fct-signature": "Int -\u003e [S] -\u003e [S]",
        "fct-source": "src/LGtk-Demos-Tri.html#setY",
        "fct-type": "function",
        "title": "setY"
      },
      "index": {
        "description": "Setter",
        "hierarchy": "LGtk Demos Tri",
        "module": "LGtk.Demos.Tri",
        "name": "setY",
        "normalized": "Int-\u003e[S]-\u003e[S]",
        "package": "lgtk",
        "partial": "",
        "signature": "Int-\u003e[S]-\u003e[S]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lgtk/docs/LGtk-Demos-Tri.html#v:tri",
      "description": {
        "fct-descr": "\u003cp\u003eThe editor\n\u003c/p\u003e",
        "fct-module": "LGtk.Demos.Tri",
        "fct-package": "lgtk",
        "fct-signature": "Widget m",
        "fct-source": "src/LGtk-Demos-Tri.html#tri",
        "fct-type": "function",
        "title": "tri"
      },
      "index": {
        "description": "The editor",
        "hierarchy": "LGtk Demos Tri",
        "module": "LGtk.Demos.Tri",
        "name": "tri",
        "normalized": "",
        "package": "lgtk",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lgtk/docs/LGtk.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMain LGtk interface.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "LGtk",
        "fct-package": "lgtk",
        "fct-signature": "module",
        "fct-source": "src/LGtk.html",
        "fct-type": "module",
        "title": "LGtk"
      },
      "index": {
        "description": "Main LGtk interface",
        "hierarchy": "LGtk",
        "module": "LGtk",
        "name": "LGtk",
        "normalized": "",
        "package": "lgtk",
        "partial": "LGtk",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lgtk/docs/LGtk.html#t:Category",
      "description": {
        "fct-descr": "\u003cp\u003eA class for categories.\n   id and (.) must form a monoid.\n\u003c/p\u003e",
        "fct-module": "LGtk",
        "fct-package": "lgtk",
        "fct-signature": "class",
        "fct-type": "class",
        "title": "Category"
      },
      "index": {
        "description": "class for categories id and must form monoid",
        "hierarchy": "LGtk",
        "module": "LGtk",
        "name": "Category",
        "normalized": "",
        "package": "lgtk",
        "partial": "Category",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lgtk/docs/LGtk.html#t:Color",
      "description": {
        "fct-descr": "\u003cp\u003eColor\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Specifies a color with three integer values for red, green and blue.\n   All values range from 0 (least intense) to 65535 (highest intensity).\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "LGtk",
        "fct-package": "lgtk",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Color"
      },
      "index": {
        "description": "Color Specifies color with three integer values for red green and blue All values range from least intense to highest intensity",
        "hierarchy": "LGtk",
        "module": "LGtk",
        "name": "Color",
        "normalized": "",
        "package": "lgtk",
        "partial": "Color",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lgtk/docs/LGtk.html#t:EffIORef",
      "description": {
        "fct-descr": "\u003cp\u003eType class for IO actions.\n\u003c/p\u003e",
        "fct-module": "LGtk",
        "fct-package": "lgtk",
        "fct-signature": "class",
        "fct-source": "src/Control-Monad-EffRef.html#EffIORef",
        "fct-type": "class",
        "title": "EffIORef"
      },
      "index": {
        "description": "Type class for IO actions",
        "hierarchy": "LGtk",
        "module": "LGtk",
        "name": "EffIORef",
        "normalized": "",
        "package": "lgtk",
        "partial": "Eff IORef",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lgtk/docs/LGtk.html#t:EffRef",
      "description": {
        "fct-descr": "\u003cp\u003eMonad for dynamic actions\n\u003c/p\u003e",
        "fct-module": "LGtk",
        "fct-package": "lgtk",
        "fct-signature": "class",
        "fct-source": "src/Control-Monad-EffRef.html#EffRef",
        "fct-type": "class",
        "title": "EffRef"
      },
      "index": {
        "description": "Monad for dynamic actions",
        "hierarchy": "LGtk",
        "module": "LGtk",
        "name": "EffRef",
        "normalized": "",
        "package": "lgtk",
        "partial": "Eff Ref",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lgtk/docs/LGtk.html#t:EqRef",
      "description": {
        "fct-descr": "\u003cp\u003eReferences with inherent equivalence.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003eEqRef r a\u003c/code\u003e === \u003ccode\u003eReadRefMonad r (exist b . Eq b =\u003e (Lens b a, r b))\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eAs a reference, \u003ccode\u003e(m :: EqRef r a)\u003c/code\u003e behaves as\n\u003c/p\u003e\u003cpre\u003ejoinRef $ liftM (uncurry lensMap) m\u003c/pre\u003e",
        "fct-module": "LGtk",
        "fct-package": "lgtk",
        "fct-signature": "data",
        "fct-source": "src/Control-Monad-ExtRef.html#EqRef",
        "fct-type": "data",
        "title": "EqRef"
      },
      "index": {
        "description": "References with inherent equivalence EqRef ReadRefMonad exist Eq Lens As reference EqRef behaves as joinRef liftM uncurry lensMap",
        "hierarchy": "LGtk",
        "module": "LGtk",
        "name": "EqRef",
        "normalized": "",
        "package": "lgtk",
        "partial": "Eq Ref",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lgtk/docs/LGtk.html#t:EqReference",
      "description": {
        "fct-descr": "\u003cp\u003eReferences with inherent equivalence.\n\u003c/p\u003e",
        "fct-module": "LGtk",
        "fct-package": "lgtk",
        "fct-signature": "class",
        "fct-source": "src/Control-Monad-ExtRef.html#EqReference",
        "fct-type": "class",
        "title": "EqReference"
      },
      "index": {
        "description": "References with inherent equivalence",
        "hierarchy": "LGtk",
        "module": "LGtk",
        "name": "EqReference",
        "normalized": "",
        "package": "lgtk",
        "partial": "Eq Reference",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lgtk/docs/LGtk.html#t:ExtRef",
      "description": {
        "fct-descr": "\u003cp\u003eMonad for reference creation. Reference creation is not a method\nof the \u003ccode\u003e\u003ca\u003eReference\u003c/a\u003e\u003c/code\u003e type class to make possible to\ncreate the same type of references in multiple monads.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e(Extref m) === (StateT s m)\u003c/code\u003e, where \u003ccode\u003es\u003c/code\u003e is an extendible state.\n\u003c/p\u003e\u003cp\u003eFor basic usage examples, look into the source of \u003ccode\u003eControl.Monad.ExtRef.Pure.Test\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "LGtk",
        "fct-package": "lgtk",
        "fct-signature": "class",
        "fct-source": "src/Control-Monad-ExtRef.html#ExtRef",
        "fct-type": "class",
        "title": "ExtRef"
      },
      "index": {
        "description": "Monad for reference creation Reference creation is not method of the Reference type class to make possible to create the same type of references in multiple monads Extref StateT where is an extendible state For basic usage examples look into the source of Control.Monad.ExtRef.Pure.Test",
        "hierarchy": "LGtk",
        "module": "LGtk",
        "name": "ExtRef",
        "normalized": "",
        "package": "lgtk",
        "partial": "Ext Ref",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lgtk/docs/LGtk.html#t:HasReadPart",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003em\u003c/code\u003e has a submonad \u003ccode\u003e(ReadPart m)\u003c/code\u003e which is isomorphic to \u003ccode\u003e\u003ca\u003eReader\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "LGtk",
        "fct-package": "lgtk",
        "fct-signature": "class",
        "fct-source": "src/Control-Monad-Restricted.html#HasReadPart",
        "fct-type": "class",
        "title": "HasReadPart"
      },
      "index": {
        "description": "has submonad ReadPart which is isomorphic to Reader",
        "hierarchy": "LGtk",
        "module": "LGtk",
        "name": "HasReadPart",
        "normalized": "",
        "package": "lgtk",
        "partial": "Has Read Part",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lgtk/docs/LGtk.html#t:Lens",
      "description": {
        "fct-module": "LGtk",
        "fct-package": "lgtk",
        "fct-signature": "newtype",
        "fct-type": "newtype",
        "title": "Lens"
      },
      "index": {
        "description": "",
        "hierarchy": "LGtk",
        "module": "LGtk",
        "name": "Lens",
        "normalized": "",
        "package": "lgtk",
        "partial": "Lens",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lgtk/docs/LGtk.html#t:Morph",
      "description": {
        "fct-descr": "\u003cp\u003eMonad morphism. Think as \u003ccode\u003em\u003c/code\u003e is a submonad of \u003ccode\u003en\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "LGtk",
        "fct-package": "lgtk",
        "fct-signature": "type",
        "fct-source": "src/Control-Monad-Restricted.html#Morph",
        "fct-type": "type",
        "title": "Morph"
      },
      "index": {
        "description": "Monad morphism Think as is submonad of",
        "hierarchy": "LGtk",
        "module": "LGtk",
        "name": "Morph",
        "normalized": "",
        "package": "lgtk",
        "partial": "Morph",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lgtk/docs/LGtk.html#t:ReadRef",
      "description": {
        "fct-module": "LGtk",
        "fct-package": "lgtk",
        "fct-signature": "type",
        "fct-source": "src/Control-Monad-ExtRef.html#ReadRef",
        "fct-type": "type",
        "title": "ReadRef"
      },
      "index": {
        "description": "",
        "hierarchy": "LGtk",
        "module": "LGtk",
        "name": "ReadRef",
        "normalized": "",
        "package": "lgtk",
        "partial": "Read Ref",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lgtk/docs/LGtk.html#t:ReadRefMonad",
      "description": {
        "fct-module": "LGtk",
        "fct-package": "lgtk",
        "fct-signature": "type",
        "fct-source": "src/Control-Monad-ExtRef.html#ReadRefMonad",
        "fct-type": "type",
        "title": "ReadRefMonad"
      },
      "index": {
        "description": "",
        "hierarchy": "LGtk",
        "module": "LGtk",
        "name": "ReadRefMonad",
        "normalized": "",
        "package": "lgtk",
        "partial": "Read Ref Monad",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lgtk/docs/LGtk.html#t:Reference",
      "description": {
        "fct-descr": "\u003cp\u003eA reference \u003ccode\u003e(r a)\u003c/code\u003e is isomorphic to \u003ccode\u003e(\u003ccode\u003e\u003ca\u003eLens\u003c/a\u003e\u003c/code\u003e s a)\u003c/code\u003e for some fixed state \u003ccode\u003es\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003er\u003c/code\u003e  ===  \u003ccode\u003eLens s\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "LGtk",
        "fct-package": "lgtk",
        "fct-signature": "class",
        "fct-source": "src/Control-Monad-ExtRef.html#Reference",
        "fct-type": "class",
        "title": "Reference"
      },
      "index": {
        "description": "reference is isomorphic to Lens for some fixed state Lens",
        "hierarchy": "LGtk",
        "module": "LGtk",
        "name": "Reference",
        "normalized": "",
        "package": "lgtk",
        "partial": "Reference",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lgtk/docs/LGtk.html#t:SafeIO",
      "description": {
        "fct-descr": "\u003cp\u003eType class for effectless, synchronous \u003ccode\u003eIO\u003c/code\u003e actions.\n\u003c/p\u003e",
        "fct-module": "LGtk",
        "fct-package": "lgtk",
        "fct-signature": "class",
        "fct-source": "src/Control-Monad-Restricted.html#SafeIO",
        "fct-type": "class",
        "title": "SafeIO"
      },
      "index": {
        "description": "Type class for effectless synchronous IO actions",
        "hierarchy": "LGtk",
        "module": "LGtk",
        "name": "SafeIO",
        "normalized": "",
        "package": "lgtk",
        "partial": "Safe IO",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lgtk/docs/LGtk.html#t:Tensor",
      "description": {
        "fct-module": "LGtk",
        "fct-package": "lgtk",
        "fct-signature": "class",
        "fct-type": "class",
        "title": "Tensor"
      },
      "index": {
        "description": "",
        "hierarchy": "LGtk",
        "module": "LGtk",
        "name": "Tensor",
        "normalized": "",
        "package": "lgtk",
        "partial": "Tensor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lgtk/docs/LGtk.html#t:Widget",
      "description": {
        "fct-descr": "\u003cp\u003eGtk widget descriptions.\nConstruction of a \u003ccode\u003e(w :: forall m . EffIORef m =\u003e Widget m)\u003c/code\u003e value is side-effect free,\nside-effects happen at running \u003ccode\u003e(\u003ccode\u003e\u003ca\u003erunWidget\u003c/a\u003e\u003c/code\u003e w)\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003eWidget\u003c/code\u003e should be abstract data type, but it is also safe to keep it as a type synonym because\nthe operations of the revealed implementation are hidden.\n\u003c/p\u003e",
        "fct-module": "LGtk",
        "fct-package": "lgtk",
        "fct-signature": "type",
        "fct-source": "src/LGtk.html#Widget",
        "fct-type": "type",
        "title": "Widget"
      },
      "index": {
        "description": "Gtk widget descriptions Construction of forall EffIORef Widget value is side-effect free side-effects happen at running runWidget Widget should be abstract data type but it is also safe to keep it as type synonym because the operations of the revealed implementation are hidden",
        "hierarchy": "LGtk",
        "module": "LGtk",
        "name": "Widget",
        "normalized": "",
        "package": "lgtk",
        "partial": "Widget",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lgtk/docs/LGtk.html#t:WriteRef",
      "description": {
        "fct-module": "LGtk",
        "fct-package": "lgtk",
        "fct-signature": "type",
        "fct-source": "src/Control-Monad-ExtRef.html#WriteRef",
        "fct-type": "type",
        "title": "WriteRef"
      },
      "index": {
        "description": "",
        "hierarchy": "LGtk",
        "module": "LGtk",
        "name": "WriteRef",
        "normalized": "",
        "package": "lgtk",
        "partial": "Write Ref",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lgtk/docs/LGtk.html#v:-42--42--42-",
      "description": {
        "fct-module": "LGtk",
        "fct-package": "lgtk",
        "fct-signature": "c w x -\u003e c y z -\u003e c (w, y) (x, z)",
        "fct-type": "method",
        "title": "(***)"
      },
      "index": {
        "description": "",
        "hierarchy": "LGtk",
        "module": "LGtk",
        "name": "(***) ***",
        "normalized": "a b c-\u003ea d e-\u003ea(b,d)(c,e)",
        "package": "lgtk",
        "partial": "",
        "signature": "c w x-\u003ec y z-\u003ec(w,y)(x,z)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lgtk/docs/LGtk.html#v:.",
      "description": {
        "fct-descr": "\u003cp\u003emorphism composition\n\u003c/p\u003e",
        "fct-module": "LGtk",
        "fct-package": "lgtk",
        "fct-signature": "cat b c -\u003e cat a b -\u003e cat a c",
        "fct-type": "method",
        "title": "(.)"
      },
      "index": {
        "description": "morphism composition",
        "hierarchy": "LGtk",
        "module": "LGtk",
        "name": "(.) .",
        "normalized": "a b c-\u003ea d b-\u003ea d c",
        "package": "lgtk",
        "partial": "",
        "signature": "cat b c-\u003ecat a b-\u003ecat a c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lgtk/docs/LGtk.html#v:Color",
      "description": {
        "fct-module": "LGtk",
        "fct-package": "lgtk",
        "fct-signature": "Color Word16 Word16 Word16",
        "fct-type": "function",
        "title": "Color"
      },
      "index": {
        "description": "",
        "hierarchy": "LGtk",
        "module": "LGtk",
        "name": "Color",
        "normalized": "",
        "package": "lgtk",
        "partial": "Color",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lgtk/docs/LGtk.html#v:Lens",
      "description": {
        "fct-module": "LGtk",
        "fct-package": "lgtk",
        "fct-signature": "Lens",
        "fct-type": "function",
        "title": "Lens"
      },
      "index": {
        "description": "",
        "hierarchy": "LGtk",
        "module": "LGtk",
        "name": "Lens",
        "normalized": "",
        "package": "lgtk",
        "partial": "Lens",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lgtk/docs/LGtk.html#v:action",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eaction\u003c/code\u003e makes possible to do any \u003ccode\u003e\u003ca\u003eEffRef\u003c/a\u003e\u003c/code\u003e action while creating the widget.\n\u003c/p\u003e",
        "fct-module": "LGtk",
        "fct-package": "lgtk",
        "fct-signature": "m (Widget m) -\u003e Widget m",
        "fct-source": "src/LGtk.html#action",
        "fct-type": "function",
        "title": "action"
      },
      "index": {
        "description": "action makes possible to do any EffRef action while creating the widget",
        "hierarchy": "LGtk",
        "module": "LGtk",
        "name": "action",
        "normalized": "a(Widget a)-\u003eWidget a",
        "package": "lgtk",
        "partial": "",
        "signature": "m(Widget m)-\u003eWidget m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lgtk/docs/LGtk.html#v:asyncWrite",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e(asyncWrite t f a)\u003c/code\u003e has the effect of doing \u003ccode\u003e(f a)\u003c/code\u003e after waiting \u003ccode\u003et\u003c/code\u003e milliseconds.\n\u003c/p\u003e\u003cp\u003eNote that \u003ccode\u003e(asyncWrite 0 f a)\u003c/code\u003e acts immediately after the completion of the current computation,\n    so it is safe, because the effect of \u003ccode\u003e(f a)\u003c/code\u003e is not interleaved with\n    the current computation.\n    Although \u003ccode\u003e(asyncWrite 0)\u003c/code\u003e is safe, code using it has a bad small.\n\u003c/p\u003e",
        "fct-module": "LGtk",
        "fct-package": "lgtk",
        "fct-signature": "Int -\u003e (a -\u003e WriteRef m ()) -\u003e a -\u003e m ()",
        "fct-source": "src/Control-Monad-EffRef.html#asyncWrite",
        "fct-type": "method",
        "title": "asyncWrite"
      },
      "index": {
        "description": "asyncWrite has the effect of doing after waiting milliseconds Note that asyncWrite acts immediately after the completion of the current computation so it is safe because the effect of is not interleaved with the current computation Although asyncWrite is safe code using it has bad small",
        "hierarchy": "LGtk",
        "module": "LGtk",
        "name": "asyncWrite",
        "normalized": "Int-\u003e(a-\u003eWriteRef b())-\u003ea-\u003eb()",
        "package": "lgtk",
        "partial": "Write",
        "signature": "Int-\u003e(a-\u003eWriteRef m())-\u003ea-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lgtk/docs/LGtk.html#v:button",
      "description": {
        "fct-module": "LGtk",
        "fct-package": "lgtk",
        "fct-signature": "ReadRef m String-\u003e ReadRef m (Maybe (WriteRef m ()))-\u003e Widget m",
        "fct-type": "function",
        "title": "button"
      },
      "index": {
        "description": "",
        "hierarchy": "LGtk",
        "module": "LGtk",
        "name": "button",
        "normalized": "ReadRef a String-\u003eReadRef a(Maybe(WriteRef a()))-\u003eWidget a",
        "package": "lgtk",
        "partial": "",
        "signature": "ReadRef m String-\u003eReadRef m(Maybe(WriteRef m()))-\u003eWidget m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lgtk/docs/LGtk.html#v:button_",
      "description": {
        "fct-descr": "\u003cp\u003eLow-level button.\n\u003c/p\u003e",
        "fct-module": "LGtk",
        "fct-package": "lgtk",
        "fct-signature": "ReadRef m String-\u003e ReadRef m Bool-\u003e WriteRef m ()-\u003e Widget m",
        "fct-type": "function",
        "title": "button_"
      },
      "index": {
        "description": "Low-level button",
        "hierarchy": "LGtk",
        "module": "LGtk",
        "name": "button_",
        "normalized": "ReadRef a String-\u003eReadRef a Bool-\u003eWriteRef a()-\u003eWidget a",
        "package": "lgtk",
        "partial": "",
        "signature": "ReadRef m String-\u003eReadRef m Bool-\u003eWriteRef m()-\u003eWidget m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lgtk/docs/LGtk.html#v:button__",
      "description": {
        "fct-descr": "\u003cp\u003eLow-level button with changeable background color.\n\u003c/p\u003e",
        "fct-module": "LGtk",
        "fct-package": "lgtk",
        "fct-signature": "ReadRef m String-\u003e ReadRef m Bool-\u003e ReadRef m Color-\u003e WriteRef m ()-\u003e Widget m",
        "fct-type": "function",
        "title": "button__"
      },
      "index": {
        "description": "Low-level button with changeable background color",
        "hierarchy": "LGtk",
        "module": "LGtk",
        "name": "button__",
        "normalized": "ReadRef a String-\u003eReadRef a Bool-\u003eReadRef a Color-\u003eWriteRef a()-\u003eWidget a",
        "package": "lgtk",
        "partial": "",
        "signature": "ReadRef m String-\u003eReadRef m Bool-\u003eReadRef m Color-\u003eWriteRef m()-\u003eWidget m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lgtk/docs/LGtk.html#v:cell",
      "description": {
        "fct-descr": "\u003cp\u003eDynamic cell.\n\u003c/p\u003e\u003cp\u003eThe inner widgets are memoised.\n\u003c/p\u003e",
        "fct-module": "LGtk",
        "fct-package": "lgtk",
        "fct-signature": "ReadRef m a -\u003e (a -\u003e Widget m) -\u003e Widget m",
        "fct-source": "src/LGtk.html#cell",
        "fct-type": "function",
        "title": "cell"
      },
      "index": {
        "description": "Dynamic cell The inner widgets are memoised",
        "hierarchy": "LGtk",
        "module": "LGtk",
        "name": "cell",
        "normalized": "ReadRef a b-\u003e(b-\u003eWidget a)-\u003eWidget a",
        "package": "lgtk",
        "partial": "",
        "signature": "ReadRef m a-\u003e(a-\u003eWidget m)-\u003eWidget m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lgtk/docs/LGtk.html#v:cellNoMemo",
      "description": {
        "fct-descr": "\u003cp\u003eDynamic cell.\n\u003c/p\u003e\u003cp\u003eThe inner widgets are not memoised.\n\u003c/p\u003e",
        "fct-module": "LGtk",
        "fct-package": "lgtk",
        "fct-signature": "ReadRef m a -\u003e (a -\u003e Widget m) -\u003e Widget m",
        "fct-source": "src/LGtk.html#cellNoMemo",
        "fct-type": "function",
        "title": "cellNoMemo"
      },
      "index": {
        "description": "Dynamic cell The inner widgets are not memoised",
        "hierarchy": "LGtk",
        "module": "LGtk",
        "name": "cellNoMemo",
        "normalized": "ReadRef a b-\u003e(b-\u003eWidget a)-\u003eWidget a",
        "package": "lgtk",
        "partial": "No Memo",
        "signature": "ReadRef m a-\u003e(a-\u003eWidget m)-\u003eWidget m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lgtk/docs/LGtk.html#v:cell_",
      "description": {
        "fct-descr": "\u003cp\u003eDynamic cell.\n\u003c/p\u003e\u003cp\u003eThe monadic action for inner widget creation is memoised in the first monad layer.\n\u003c/p\u003e",
        "fct-module": "LGtk",
        "fct-package": "lgtk",
        "fct-signature": "ReadRef m a -\u003e (forall x.  (Widget m -\u003e m x) -\u003e a -\u003e m (m x)) -\u003e Widget m",
        "fct-source": "src/LGtk.html#cell_",
        "fct-type": "function",
        "title": "cell_"
      },
      "index": {
        "description": "Dynamic cell The monadic action for inner widget creation is memoised in the first monad layer",
        "hierarchy": "LGtk",
        "module": "LGtk",
        "name": "cell_",
        "normalized": "ReadRef a b-\u003e(c d(Widget a-\u003ea e)-\u003eb-\u003ea(a e))-\u003eWidget a",
        "package": "lgtk",
        "partial": "",
        "signature": "ReadRef m a-\u003e(forall x.(Widget m-\u003em x)-\u003ea-\u003em(m x))-\u003eWidget m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lgtk/docs/LGtk.html#v:checkbox",
      "description": {
        "fct-descr": "\u003cp\u003eCheckbox.\n\u003c/p\u003e",
        "fct-module": "LGtk",
        "fct-package": "lgtk",
        "fct-signature": "Ref m Bool -\u003e Widget m",
        "fct-source": "src/LGtk.html#checkbox",
        "fct-type": "function",
        "title": "checkbox"
      },
      "index": {
        "description": "Checkbox",
        "hierarchy": "LGtk",
        "module": "LGtk",
        "name": "checkbox",
        "normalized": "Ref a Bool-\u003eWidget a",
        "package": "lgtk",
        "partial": "",
        "signature": "Ref m Bool-\u003eWidget m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lgtk/docs/LGtk.html#v:combobox",
      "description": {
        "fct-descr": "\u003cp\u003eSimple combo box.\n\u003c/p\u003e",
        "fct-module": "LGtk",
        "fct-package": "lgtk",
        "fct-signature": "[String] -\u003e Ref m Int -\u003e Widget m",
        "fct-source": "src/LGtk.html#combobox",
        "fct-type": "function",
        "title": "combobox"
      },
      "index": {
        "description": "Simple combo box",
        "hierarchy": "LGtk",
        "module": "LGtk",
        "name": "combobox",
        "normalized": "[String]-\u003eRef a Int-\u003eWidget a",
        "package": "lgtk",
        "partial": "",
        "signature": "[String]-\u003eRef m Int-\u003eWidget m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lgtk/docs/LGtk.html#v:empty",
      "description": {
        "fct-descr": "\u003cp\u003eEmpty widget.\n\u003c/p\u003e",
        "fct-module": "LGtk",
        "fct-package": "lgtk",
        "fct-signature": "Widget m",
        "fct-source": "src/LGtk.html#empty",
        "fct-type": "function",
        "title": "empty"
      },
      "index": {
        "description": "Empty widget",
        "hierarchy": "LGtk",
        "module": "LGtk",
        "name": "empty",
        "normalized": "",
        "package": "lgtk",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lgtk/docs/LGtk.html#v:entry",
      "description": {
        "fct-descr": "\u003cp\u003eText entry.\n\u003c/p\u003e",
        "fct-module": "LGtk",
        "fct-package": "lgtk",
        "fct-signature": "r String -\u003e Widget m",
        "fct-source": "src/LGtk.html#entry",
        "fct-type": "function",
        "title": "entry"
      },
      "index": {
        "description": "Text entry",
        "hierarchy": "LGtk",
        "module": "LGtk",
        "name": "entry",
        "normalized": "a String-\u003eWidget b",
        "package": "lgtk",
        "partial": "",
        "signature": "r String-\u003eWidget m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lgtk/docs/LGtk.html#v:entryShow",
      "description": {
        "fct-descr": "\u003cp\u003eText entry.\n\u003c/p\u003e",
        "fct-module": "LGtk",
        "fct-package": "lgtk",
        "fct-signature": "r a -\u003e Widget m",
        "fct-source": "src/LGtk.html#entryShow",
        "fct-type": "function",
        "title": "entryShow"
      },
      "index": {
        "description": "Text entry",
        "hierarchy": "LGtk",
        "module": "LGtk",
        "name": "entryShow",
        "normalized": "a b-\u003eWidget c",
        "package": "lgtk",
        "partial": "Show",
        "signature": "r a-\u003eWidget m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lgtk/docs/LGtk.html#v:eqRef",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eEqRef\u003c/code\u003e construction.\n\u003c/p\u003e",
        "fct-module": "LGtk",
        "fct-package": "lgtk",
        "fct-signature": "r a -\u003e EqRef r a",
        "fct-source": "src/Control-Monad-ExtRef.html#eqRef",
        "fct-type": "function",
        "title": "eqRef"
      },
      "index": {
        "description": "EqRef construction",
        "hierarchy": "LGtk",
        "module": "LGtk",
        "name": "eqRef",
        "normalized": "a b-\u003eEqRef a b",
        "package": "lgtk",
        "partial": "Ref",
        "signature": "r a-\u003eEqRef r a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lgtk/docs/LGtk.html#v:extRef",
      "description": {
        "fct-descr": "\u003cp\u003eReference creation by extending the state of an existing reference.\n\u003c/p\u003e\u003cp\u003eSuppose that \u003ccode\u003er\u003c/code\u003e is a reference and \u003ccode\u003ek\u003c/code\u003e is a lens.\n\u003c/p\u003e\u003cp\u003eLaw 1: \u003ccode\u003eextRef\u003c/code\u003e applies \u003ccode\u003ek\u003c/code\u003e on \u003ccode\u003er\u003c/code\u003e backwards, i.e. \n    the result of \u003ccode\u003e(extRef r k a0)\u003c/code\u003e should behaves exactly as \u003ccode\u003e(lensMap k r)\u003c/code\u003e.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e  \u003ccode\u003e(liftM (k .) $ extRef r k a0)\u003c/code\u003e === \u003ccode\u003ereturn r\u003c/code\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eLaw 2: \u003ccode\u003eextRef\u003c/code\u003e does not change the value of \u003ccode\u003er\u003c/code\u003e:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e  \u003ccode\u003e(extRef r k a0 \u003e\u003e readRef r)\u003c/code\u003e === \u003ccode\u003e(readRef r)\u003c/code\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eLaw 3: Proper initialization of newly defined reference with \u003ccode\u003ea0\u003c/code\u003e:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e  \u003ccode\u003e(extRef r k a0 \u003e\u003e= readRef)\u003c/code\u003e === \u003ccode\u003e(readRef r \u003e\u003e= setL k a0)\u003c/code\u003e\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "LGtk",
        "fct-package": "lgtk",
        "fct-signature": "Ref m b -\u003e Lens a b -\u003e a -\u003e m (Ref m a)",
        "fct-source": "src/Control-Monad-ExtRef.html#extRef",
        "fct-type": "method",
        "title": "extRef"
      },
      "index": {
        "description": "Reference creation by extending the state of an existing reference Suppose that is reference and is lens Law extRef applies on backwards i.e the result of extRef a0 should behaves exactly as lensMap liftM extRef a0 return Law extRef does not change the value of extRef a0 readRef readRef Law Proper initialization of newly defined reference with a0 extRef a0 readRef readRef setL a0",
        "hierarchy": "LGtk",
        "module": "LGtk",
        "name": "extRef",
        "normalized": "Ref a b-\u003eLens c b-\u003ec-\u003ea(Ref a c)",
        "package": "lgtk",
        "partial": "Ref",
        "signature": "Ref m b-\u003eLens a b-\u003ea-\u003em(Ref m a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lgtk/docs/LGtk.html#v:fileRef",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e(fileRef path)\u003c/code\u003e returns a reference which holds the actual contents\n    of the file accessed by \u003ccode\u003epath\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eWhen the value of the reference changes, the file changes.\n    When the file changes, the value of the reference changes.\n\u003c/p\u003e\u003cp\u003eIf the reference holds \u003ccode\u003eNothing\u003c/code\u003e, the file does not exist.\n    Note that you delete the file by putting \u003ccode\u003eNothing\u003c/code\u003e into the reference.    \n\u003c/p\u003e\u003cp\u003eImplementation note: The references returned by \u003ccode\u003efileRef\u003c/code\u003e are not\n    memoised so currently it is unsafe to call \u003ccode\u003efileRef\u003c/code\u003e on the same filepath more than once.\n    This restriction will be lifted in the future.\n\u003c/p\u003e",
        "fct-module": "LGtk",
        "fct-package": "lgtk",
        "fct-signature": "FilePath -\u003e m (Ref m (Maybe String))",
        "fct-source": "src/Control-Monad-EffRef.html#fileRef",
        "fct-type": "method",
        "title": "fileRef"
      },
      "index": {
        "description": "fileRef path returns reference which holds the actual contents of the file accessed by path When the value of the reference changes the file changes When the file changes the value of the reference changes If the reference holds Nothing the file does not exist Note that you delete the file by putting Nothing into the reference Implementation note The references returned by fileRef are not memoised so currently it is unsafe to call fileRef on the same filepath more than once This restriction will be lifted in the future",
        "hierarchy": "LGtk",
        "module": "LGtk",
        "name": "fileRef",
        "normalized": "FilePath-\u003ea(Ref a(Maybe String))",
        "package": "lgtk",
        "partial": "Ref",
        "signature": "FilePath-\u003em(Ref m(Maybe String))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lgtk/docs/LGtk.html#v:first",
      "description": {
        "fct-module": "LGtk",
        "fct-package": "lgtk",
        "fct-signature": "c w x -\u003e c (w, z) (x, z)",
        "fct-type": "method",
        "title": "first"
      },
      "index": {
        "description": "",
        "hierarchy": "LGtk",
        "module": "LGtk",
        "name": "first",
        "normalized": "a b c-\u003ea(b,d)(c,d)",
        "package": "lgtk",
        "partial": "",
        "signature": "c w x-\u003ec(w,z)(x,z)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lgtk/docs/LGtk.html#v:fstLens",
      "description": {
        "fct-module": "LGtk",
        "fct-package": "lgtk",
        "fct-signature": "Lens (a, b) a",
        "fct-type": "function",
        "title": "fstLens"
      },
      "index": {
        "description": "",
        "hierarchy": "LGtk",
        "module": "LGtk",
        "name": "fstLens",
        "normalized": "Lens(a,b)a",
        "package": "lgtk",
        "partial": "Lens",
        "signature": "Lens(a,b)a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lgtk/docs/LGtk.html#v:getArgs",
      "description": {
        "fct-descr": "\u003cp\u003eThe program's command line arguments (not including the program name). \n\u003c/p\u003e",
        "fct-module": "LGtk",
        "fct-package": "lgtk",
        "fct-signature": "m [String]",
        "fct-source": "src/Control-Monad-Restricted.html#getArgs",
        "fct-type": "method",
        "title": "getArgs"
      },
      "index": {
        "description": "The program command line arguments not including the program name",
        "hierarchy": "LGtk",
        "module": "LGtk",
        "name": "getArgs",
        "normalized": "a[String]",
        "package": "lgtk",
        "partial": "Args",
        "signature": "m[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lgtk/docs/LGtk.html#v:getL",
      "description": {
        "fct-descr": "\u003cp\u003eGets the getter function from a lens.\n\u003c/p\u003e",
        "fct-module": "LGtk",
        "fct-package": "lgtk",
        "fct-signature": "Lens a b -\u003e a -\u003e b",
        "fct-type": "function",
        "title": "getL"
      },
      "index": {
        "description": "Gets the getter function from lens",
        "hierarchy": "LGtk",
        "module": "LGtk",
        "name": "getL",
        "normalized": "Lens a b-\u003ea-\u003eb",
        "package": "lgtk",
        "partial": "",
        "signature": "Lens a b-\u003ea-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lgtk/docs/LGtk.html#v:getLine_",
      "description": {
        "fct-descr": "\u003cp\u003eRead a line from the standard input device.\n    \u003ccode\u003e(getLine_ f)\u003c/code\u003e returns immediately. When the line \u003ccode\u003es\u003c/code\u003e is read,\n    \u003ccode\u003ef s\u003c/code\u003e is called.\n\u003c/p\u003e",
        "fct-module": "LGtk",
        "fct-package": "lgtk",
        "fct-signature": "(String -\u003e WriteRef m ()) -\u003e m ()",
        "fct-source": "src/Control-Monad-EffRef.html#getLine_",
        "fct-type": "method",
        "title": "getLine_"
      },
      "index": {
        "description": "Read line from the standard input device getLine returns immediately When the line is read is called",
        "hierarchy": "LGtk",
        "module": "LGtk",
        "name": "getLine_",
        "normalized": "(String-\u003eWriteRef a())-\u003ea()",
        "package": "lgtk",
        "partial": "Line",
        "signature": "(String-\u003eWriteRef m())-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lgtk/docs/LGtk.html#v:getProgName",
      "description": {
        "fct-descr": "\u003cp\u003eThe name of the program as it was invoked.\n\u003c/p\u003e",
        "fct-module": "LGtk",
        "fct-package": "lgtk",
        "fct-signature": "m String",
        "fct-source": "src/Control-Monad-Restricted.html#getProgName",
        "fct-type": "method",
        "title": "getProgName"
      },
      "index": {
        "description": "The name of the program as it was invoked",
        "hierarchy": "LGtk",
        "module": "LGtk",
        "name": "getProgName",
        "normalized": "",
        "package": "lgtk",
        "partial": "Prog Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lgtk/docs/LGtk.html#v:hasEffect",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003ehasEffect r f\u003c/code\u003e returns \u003ccode\u003eFalse\u003c/code\u003e iff \u003ccode\u003e(modRef m f)\u003c/code\u003e === \u003ccode\u003e(return ())\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003ehasEffect\u003c/code\u003e is correct only if \u003ccode\u003eeqRef\u003c/code\u003e is applied on a pure reference (a reference which is a pure lens on the hidden state).\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003ehasEffect\u003c/code\u003e makes defining auto-sensitive buttons easier, for example.\n\u003c/p\u003e",
        "fct-module": "LGtk",
        "fct-package": "lgtk",
        "fct-signature": "r a -\u003e (a -\u003e a) -\u003e ReadRefMonad r Bool",
        "fct-source": "src/Control-Monad-ExtRef.html#hasEffect",
        "fct-type": "method",
        "title": "hasEffect"
      },
      "index": {
        "description": "hasEffect returns False iff modRef return hasEffect is correct only if eqRef is applied on pure reference reference which is pure lens on the hidden state hasEffect makes defining auto-sensitive buttons easier for example",
        "hierarchy": "LGtk",
        "module": "LGtk",
        "name": "hasEffect",
        "normalized": "a b-\u003e(b-\u003eb)-\u003eReadRefMonad a Bool",
        "package": "lgtk",
        "partial": "Effect",
        "signature": "r a-\u003e(a-\u003ea)-\u003eReadRefMonad r Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lgtk/docs/LGtk.html#v:hcat",
      "description": {
        "fct-descr": "\u003cp\u003eHorizontal composition of widgets.\n\u003c/p\u003e",
        "fct-module": "LGtk",
        "fct-package": "lgtk",
        "fct-signature": "[Widget m] -\u003e Widget m",
        "fct-source": "src/LGtk.html#hcat",
        "fct-type": "function",
        "title": "hcat"
      },
      "index": {
        "description": "Horizontal composition of widgets",
        "hierarchy": "LGtk",
        "module": "LGtk",
        "name": "hcat",
        "normalized": "[Widget a]-\u003eWidget a",
        "package": "lgtk",
        "partial": "",
        "signature": "[Widget m]-\u003eWidget m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lgtk/docs/LGtk.html#v:id",
      "description": {
        "fct-descr": "\u003cp\u003ethe identity morphism\n\u003c/p\u003e",
        "fct-module": "LGtk",
        "fct-package": "lgtk",
        "fct-signature": "cat a a",
        "fct-type": "method",
        "title": "id"
      },
      "index": {
        "description": "the identity morphism",
        "hierarchy": "LGtk",
        "module": "LGtk",
        "name": "id",
        "normalized": "",
        "package": "lgtk",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lgtk/docs/LGtk.html#v:iso",
      "description": {
        "fct-descr": "\u003cp\u003ebuild a lens out of an isomorphism\n\u003c/p\u003e",
        "fct-module": "LGtk",
        "fct-package": "lgtk",
        "fct-signature": "(a -\u003e b) -\u003e (b -\u003e a) -\u003e Lens a b",
        "fct-type": "function",
        "title": "iso"
      },
      "index": {
        "description": "build lens out of an isomorphism",
        "hierarchy": "LGtk",
        "module": "LGtk",
        "name": "iso",
        "normalized": "(a-\u003eb)-\u003e(b-\u003ea)-\u003eLens a b",
        "package": "lgtk",
        "partial": "",
        "signature": "(a-\u003eb)-\u003e(b-\u003ea)-\u003eLens a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lgtk/docs/LGtk.html#v:joinRef",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003ejoinRef\u003c/code\u003e makes possible to define dynamic references, i.e. references which depends on\n    values of other references.\n    It is not possible to create new reference dynamically with \u003ccode\u003ejoinRef\u003c/code\u003e; for that, see \u003ccode\u003eonChange\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003ejoinRef\u003c/code\u003e === \u003ccode\u003eLens . join . (runLens .) . runReader\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "LGtk",
        "fct-package": "lgtk",
        "fct-signature": "ReadRefMonad r (r a) -\u003e r a",
        "fct-source": "src/Control-Monad-ExtRef.html#joinRef",
        "fct-type": "method",
        "title": "joinRef"
      },
      "index": {
        "description": "joinRef makes possible to define dynamic references i.e references which depends on values of other references It is not possible to create new reference dynamically with joinRef for that see onChange joinRef Lens join runLens runReader",
        "hierarchy": "LGtk",
        "module": "LGtk",
        "name": "joinRef",
        "normalized": "ReadRefMonad a(a b)-\u003ea b",
        "package": "lgtk",
        "partial": "Ref",
        "signature": "ReadRefMonad r(r a)-\u003er a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lgtk/docs/LGtk.html#v:label",
      "description": {
        "fct-descr": "\u003cp\u003eDynamic label.\n\u003c/p\u003e",
        "fct-module": "LGtk",
        "fct-package": "lgtk",
        "fct-signature": "ReadRef m String -\u003e Widget m",
        "fct-source": "src/LGtk.html#label",
        "fct-type": "function",
        "title": "label"
      },
      "index": {
        "description": "Dynamic label",
        "hierarchy": "LGtk",
        "module": "LGtk",
        "name": "label",
        "normalized": "ReadRef a String-\u003eWidget a",
        "package": "lgtk",
        "partial": "",
        "signature": "ReadRef m String-\u003eWidget m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lgtk/docs/LGtk.html#v:lens",
      "description": {
        "fct-descr": "\u003cp\u003ebuild a lens out of a getter and setter\n\u003c/p\u003e",
        "fct-module": "LGtk",
        "fct-package": "lgtk",
        "fct-signature": "(a -\u003e b) -\u003e (b -\u003e a -\u003e a) -\u003e Lens a b",
        "fct-type": "function",
        "title": "lens"
      },
      "index": {
        "description": "build lens out of getter and setter",
        "hierarchy": "LGtk",
        "module": "LGtk",
        "name": "lens",
        "normalized": "(a-\u003eb)-\u003e(b-\u003ea-\u003ea)-\u003eLens a b",
        "package": "lgtk",
        "partial": "",
        "signature": "(a-\u003eb)-\u003e(b-\u003ea-\u003ea)-\u003eLens a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lgtk/docs/LGtk.html#v:lensMap",
      "description": {
        "fct-descr": "\u003cp\u003eApply a lens on a reference.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003elensMap\u003c/code\u003e === \u003ccode\u003e(.)\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "LGtk",
        "fct-package": "lgtk",
        "fct-signature": "Lens a b -\u003e r a -\u003e r b",
        "fct-source": "src/Control-Monad-ExtRef.html#lensMap",
        "fct-type": "method",
        "title": "lensMap"
      },
      "index": {
        "description": "Apply lens on reference lensMap",
        "hierarchy": "LGtk",
        "module": "LGtk",
        "name": "lensMap",
        "normalized": "Lens a b-\u003ec a-\u003ec b",
        "package": "lgtk",
        "partial": "Map",
        "signature": "Lens a b-\u003er a-\u003er b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lgtk/docs/LGtk.html#v:liftM",
      "description": {
        "fct-descr": "\u003cp\u003ePromote a function to a monad.\n\u003c/p\u003e",
        "fct-module": "LGtk",
        "fct-package": "lgtk",
        "fct-signature": "(a1 -\u003e r) -\u003e m a1 -\u003e m r",
        "fct-type": "function",
        "title": "liftM"
      },
      "index": {
        "description": "Promote function to monad",
        "hierarchy": "LGtk",
        "module": "LGtk",
        "name": "liftM",
        "normalized": "(a-\u003eb)-\u003ec a-\u003ec b",
        "package": "lgtk",
        "partial": "",
        "signature": "(a-\u003er)-\u003em a-\u003em r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lgtk/docs/LGtk.html#v:liftM2",
      "description": {
        "fct-descr": "\u003cp\u003ePromote a function to a monad, scanning the monadic arguments from\n left to right.  For example,\n\u003c/p\u003e\u003cpre\u003e    liftM2 (+) [0,1] [0,2] = [0,2,1,3]\n    liftM2 (+) (Just 1) Nothing = Nothing\n\u003c/pre\u003e",
        "fct-module": "LGtk",
        "fct-package": "lgtk",
        "fct-signature": "(a1 -\u003e a2 -\u003e r) -\u003e m a1 -\u003e m a2 -\u003e m r",
        "fct-type": "function",
        "title": "liftM2"
      },
      "index": {
        "description": "Promote function to monad scanning the monadic arguments from left to right For example liftM2 liftM2 Just Nothing Nothing",
        "hierarchy": "LGtk",
        "module": "LGtk",
        "name": "liftM2",
        "normalized": "(a-\u003ea-\u003eb)-\u003ec a-\u003ec a-\u003ec b",
        "package": "lgtk",
        "partial": "",
        "signature": "(a-\u003ea-\u003er)-\u003em a-\u003em a-\u003em r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lgtk/docs/LGtk.html#v:liftM3",
      "description": {
        "fct-descr": "\u003cp\u003ePromote a function to a monad, scanning the monadic arguments from\n left to right (cf. \u003ccode\u003e\u003ca\u003eliftM2\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "LGtk",
        "fct-package": "lgtk",
        "fct-signature": "(a1 -\u003e a2 -\u003e a3 -\u003e r) -\u003e m a1 -\u003e m a2 -\u003e m a3 -\u003e m r",
        "fct-type": "function",
        "title": "liftM3"
      },
      "index": {
        "description": "Promote function to monad scanning the monadic arguments from left to right cf liftM2",
        "hierarchy": "LGtk",
        "module": "LGtk",
        "name": "liftM3",
        "normalized": "(a-\u003ea-\u003ea-\u003eb)-\u003ec a-\u003ec a-\u003ec a-\u003ec b",
        "package": "lgtk",
        "partial": "",
        "signature": "(a-\u003ea-\u003ea-\u003er)-\u003em a-\u003em a-\u003em a-\u003em r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lgtk/docs/LGtk.html#v:liftReadPart",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e(ReadPart m)\u003c/code\u003e is a submonad of \u003ccode\u003em\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "LGtk",
        "fct-package": "lgtk",
        "fct-signature": "Morph (ReadPart m) m",
        "fct-source": "src/Control-Monad-Restricted.html#liftReadPart",
        "fct-type": "method",
        "title": "liftReadPart"
      },
      "index": {
        "description": "ReadPart is submonad of",
        "hierarchy": "LGtk",
        "module": "LGtk",
        "name": "liftReadPart",
        "normalized": "",
        "package": "lgtk",
        "partial": "Read Part",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lgtk/docs/LGtk.html#v:liftReadRef",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eReadRef\u003c/code\u003e lifted to the reference creation class.\n\u003c/p\u003e\u003cp\u003eNote that we do not lift \u003ccode\u003eWriteRef\u003c/code\u003e to the reference creation class, which a crucial restriction\nin the LGtk interface; this is a feature.\n\u003c/p\u003e",
        "fct-module": "LGtk",
        "fct-package": "lgtk",
        "fct-signature": "Morph (ReadRef m) m",
        "fct-source": "src/Control-Monad-ExtRef.html#liftReadRef",
        "fct-type": "function",
        "title": "liftReadRef"
      },
      "index": {
        "description": "ReadRef lifted to the reference creation class Note that we do not lift WriteRef to the reference creation class which crucial restriction in the LGtk interface this is feature",
        "hierarchy": "LGtk",
        "module": "LGtk",
        "name": "liftReadRef",
        "normalized": "",
        "package": "lgtk",
        "partial": "Read Ref",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lgtk/docs/LGtk.html#v:listLens",
      "description": {
        "fct-module": "LGtk",
        "fct-package": "lgtk",
        "fct-signature": "Lens (Bool, (a, [a])) [a]",
        "fct-source": "src/Control-Monad-ExtRef.html#listLens",
        "fct-type": "function",
        "title": "listLens"
      },
      "index": {
        "description": "",
        "hierarchy": "LGtk",
        "module": "LGtk",
        "name": "listLens",
        "normalized": "Lens(Bool,(a,[a]))[a]",
        "package": "lgtk",
        "partial": "Lens",
        "signature": "Lens(Bool,(a,[a]))[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lgtk/docs/LGtk.html#v:lookupEnv",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e(lookupEnv var)\u003c/code\u003e returns the value of the environment variable \u003ccode\u003evar\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "LGtk",
        "fct-package": "lgtk",
        "fct-signature": "String -\u003e m (Maybe String)",
        "fct-source": "src/Control-Monad-Restricted.html#lookupEnv",
        "fct-type": "method",
        "title": "lookupEnv"
      },
      "index": {
        "description": "lookupEnv var returns the value of the environment variable var",
        "hierarchy": "LGtk",
        "module": "LGtk",
        "name": "lookupEnv",
        "normalized": "String-\u003ea(Maybe String)",
        "package": "lgtk",
        "partial": "Env",
        "signature": "String-\u003em(Maybe String)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lgtk/docs/LGtk.html#v:maybeLens",
      "description": {
        "fct-module": "LGtk",
        "fct-package": "lgtk",
        "fct-signature": "Lens (Bool, a) (Maybe a)",
        "fct-source": "src/Control-Monad-ExtRef.html#maybeLens",
        "fct-type": "function",
        "title": "maybeLens"
      },
      "index": {
        "description": "",
        "hierarchy": "LGtk",
        "module": "LGtk",
        "name": "maybeLens",
        "normalized": "Lens(Bool,a)(Maybe a)",
        "package": "lgtk",
        "partial": "Lens",
        "signature": "Lens(Bool,a)(Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lgtk/docs/LGtk.html#v:memoRead",
      "description": {
        "fct-descr": "\u003cp\u003eLazy monadic evaluation.\nIn case of \u003ccode\u003ey \u003c- memoRead x\u003c/code\u003e, invoking \u003ccode\u003ey\u003c/code\u003e will invoke \u003ccode\u003ex\u003c/code\u003e at most once.\n\u003c/p\u003e\u003cp\u003eLaws:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e  \u003ccode\u003e(memoRead x \u003e\u003e return ())\u003c/code\u003e === \u003ccode\u003ereturn ()\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e  \u003ccode\u003e(memoRead x \u003e\u003e= id)\u003c/code\u003e === \u003ccode\u003ex\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e  \u003ccode\u003e(memoRead x \u003e\u003e= y -\u003e liftM2 (,) y y)\u003c/code\u003e === \u003ccode\u003eliftM (a -\u003e (a, a)) y\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e  \u003ccode\u003e(memoRead x \u003e\u003e= y -\u003e liftM3 (,) y y y)\u003c/code\u003e === \u003ccode\u003eliftM (a -\u003e (a, a, a)) y\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e  ...\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "LGtk",
        "fct-package": "lgtk",
        "fct-signature": "m a -\u003e m (m a)",
        "fct-source": "src/Control-Monad-ExtRef.html#memoRead",
        "fct-type": "function",
        "title": "memoRead"
      },
      "index": {
        "description": "Lazy monadic evaluation In case of memoRead invoking will invoke at most once Laws memoRead return return memoRead id memoRead liftM2 liftM memoRead liftM3 liftM",
        "hierarchy": "LGtk",
        "module": "LGtk",
        "name": "memoRead",
        "normalized": "a b-\u003ea(a b)",
        "package": "lgtk",
        "partial": "Read",
        "signature": "m a-\u003em(m a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lgtk/docs/LGtk.html#v:modL",
      "description": {
        "fct-descr": "\u003cp\u003eGets the modifier function from a lens.\n\u003c/p\u003e",
        "fct-module": "LGtk",
        "fct-package": "lgtk",
        "fct-signature": "Lens a b -\u003e (b -\u003e b) -\u003e a -\u003e a",
        "fct-type": "function",
        "title": "modL"
      },
      "index": {
        "description": "Gets the modifier function from lens",
        "hierarchy": "LGtk",
        "module": "LGtk",
        "name": "modL",
        "normalized": "Lens a b-\u003e(b-\u003eb)-\u003ea-\u003ea",
        "package": "lgtk",
        "partial": "",
        "signature": "Lens a b-\u003e(b-\u003eb)-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lgtk/docs/LGtk.html#v:modRef",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003emodRef r f\u003c/code\u003e === \u003ccode\u003eliftReadPart (readRef r) \u003e\u003e= writeRef r . f\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "LGtk",
        "fct-package": "lgtk",
        "fct-signature": "r a -\u003e (a -\u003e a) -\u003e RefMonad r ()",
        "fct-source": "src/Control-Monad-ExtRef.html#modRef",
        "fct-type": "function",
        "title": "modRef"
      },
      "index": {
        "description": "modRef liftReadPart readRef writeRef",
        "hierarchy": "LGtk",
        "module": "LGtk",
        "name": "modRef",
        "normalized": "a b-\u003e(b-\u003eb)-\u003eRefMonad a()",
        "package": "lgtk",
        "partial": "Ref",
        "signature": "r a-\u003e(a-\u003ea)-\u003eRefMonad r()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lgtk/docs/LGtk.html#v:newEqRef",
      "description": {
        "fct-module": "LGtk",
        "fct-package": "lgtk",
        "fct-signature": "a -\u003e m (EqRef (Ref m) a)",
        "fct-source": "src/Control-Monad-ExtRef.html#newEqRef",
        "fct-type": "function",
        "title": "newEqRef"
      },
      "index": {
        "description": "",
        "hierarchy": "LGtk",
        "module": "LGtk",
        "name": "newEqRef",
        "normalized": "a-\u003eb(EqRef(Ref b)a)",
        "package": "lgtk",
        "partial": "Eq Ref",
        "signature": "a-\u003em(EqRef(Ref m)a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lgtk/docs/LGtk.html#v:newRef",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003enewRef\u003c/code\u003e extends the state \u003ccode\u003es\u003c/code\u003e in an independent way.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003enewRef\u003c/code\u003e === \u003ccode\u003eextRef unitRef (lens (const ()) (const id))\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "LGtk",
        "fct-package": "lgtk",
        "fct-signature": "a -\u003e m (Ref m a)",
        "fct-source": "src/Control-Monad-ExtRef.html#newRef",
        "fct-type": "method",
        "title": "newRef"
      },
      "index": {
        "description": "newRef extends the state in an independent way newRef extRef unitRef lens const const id",
        "hierarchy": "LGtk",
        "module": "LGtk",
        "name": "newRef",
        "normalized": "a-\u003eb(Ref b a)",
        "package": "lgtk",
        "partial": "Ref",
        "signature": "a-\u003em(Ref m a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lgtk/docs/LGtk.html#v:notebook",
      "description": {
        "fct-descr": "\u003cp\u003eNotebook (tabs).\n\u003c/p\u003e\u003cp\u003eThe tabs are created lazily.\n\u003c/p\u003e",
        "fct-module": "LGtk",
        "fct-package": "lgtk",
        "fct-signature": "[(String, Widget m)] -\u003e Widget m",
        "fct-source": "src/LGtk.html#notebook",
        "fct-type": "function",
        "title": "notebook"
      },
      "index": {
        "description": "Notebook tabs The tabs are created lazily",
        "hierarchy": "LGtk",
        "module": "LGtk",
        "name": "notebook",
        "normalized": "[(String,Widget a)]-\u003eWidget a",
        "package": "lgtk",
        "partial": "",
        "signature": "[(String,Widget m)]-\u003eWidget m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lgtk/docs/LGtk.html#v:onChange",
      "description": {
        "fct-descr": "\u003cp\u003eLet \u003ccode\u003er\u003c/code\u003e be an effectless action (\u003ccode\u003eReadRef\u003c/code\u003e guarantees this).\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e(onChange init r fmm)\u003c/code\u003e has the following effect:\n\u003c/p\u003e\u003cp\u003eWhenever the value of \u003ccode\u003er\u003c/code\u003e changes (with respect to the given equality),\n    \u003ccode\u003efmm\u003c/code\u003e is called with the new value \u003ccode\u003ea\u003c/code\u003e.\n    The value of the \u003ccode\u003e(fmm a)\u003c/code\u003e action is memoized,\n    but the memoized value is run again and again.\n\u003c/p\u003e\u003cp\u003eThe boolean parameter \u003ccode\u003einit\u003c/code\u003e tells whether the action should\n    be run in the beginning or not.\n\u003c/p\u003e\u003cp\u003eFor example, let \u003ccode\u003e(k :: a -\u003e m b)\u003c/code\u003e and \u003ccode\u003e(h :: b -\u003e m ())\u003c/code\u003e,\n    and suppose that \u003ccode\u003er\u003c/code\u003e will have values \u003ccode\u003ea1\u003c/code\u003e, \u003ccode\u003ea2\u003c/code\u003e, \u003ccode\u003ea3\u003c/code\u003e = \u003ccode\u003ea1\u003c/code\u003e, \u003ccode\u003ea4\u003c/code\u003e = \u003ccode\u003ea2\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003eonChange True r $ \\a -\u003e k a \u003e\u003e= return . h\u003c/pre\u003e\u003cp\u003ehas the effect\n\u003c/p\u003e\u003cpre\u003ek a1 \u003e\u003e= \\b1 -\u003e h b1 \u003e\u003e k a2 \u003e\u003e= \\b2 -\u003e h b2 \u003e\u003e h b1 \u003e\u003e h b2\u003c/pre\u003e\u003cp\u003eand\n\u003c/p\u003e\u003cpre\u003eonChange False r $ \\a -\u003e k a \u003e\u003e= return . h\u003c/pre\u003e\u003cp\u003ehas the effect\n\u003c/p\u003e\u003cpre\u003ek a2 \u003e\u003e= \\b2 -\u003e h b2 \u003e\u003e k a1 \u003e\u003e= \\b1 -\u003e h b1 \u003e\u003e h b2\u003c/pre\u003e",
        "fct-module": "LGtk",
        "fct-package": "lgtk",
        "fct-signature": "Bool -\u003e ReadRef m a -\u003e (a -\u003e m (m ())) -\u003e m ()",
        "fct-source": "src/Control-Monad-EffRef.html#onChange",
        "fct-type": "method",
        "title": "onChange"
      },
      "index": {
        "description": "Let be an effectless action ReadRef guarantees this onChange init fmm has the following effect Whenever the value of changes with respect to the given equality fmm is called with the new value The value of the fmm action is memoized but the memoized value is run again and again The boolean parameter init tells whether the action should be run in the beginning or not For example let and and suppose that will have values a1 a2 a3 a1 a4 a2 onChange True return has the effect a1 b1 b1 a2 b2 b2 b1 b2 and onChange False return has the effect a2 b2 b2 a1 b1 b1 b2",
        "hierarchy": "LGtk",
        "module": "LGtk",
        "name": "onChange",
        "normalized": "Bool-\u003eReadRef a b-\u003e(b-\u003ea(a()))-\u003ea()",
        "package": "lgtk",
        "partial": "Change",
        "signature": "Bool-\u003eReadRef m a-\u003e(a-\u003em(m()))-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lgtk/docs/LGtk.html#v:putStrLn_",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eputStrLn_\u003c/code\u003e === \u003ccode\u003eputStr_ . (++ \u003ca\u003en\u003c/a\u003e)\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "LGtk",
        "fct-package": "lgtk",
        "fct-signature": "String -\u003e m ()",
        "fct-source": "src/Control-Monad-EffRef.html#putStrLn_",
        "fct-type": "function",
        "title": "putStrLn_"
      },
      "index": {
        "description": "putStrLn putStr",
        "hierarchy": "LGtk",
        "module": "LGtk",
        "name": "putStrLn_",
        "normalized": "String-\u003ea()",
        "package": "lgtk",
        "partial": "Str Ln",
        "signature": "String-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lgtk/docs/LGtk.html#v:putStr_",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a string to the standard output device.\n\u003c/p\u003e",
        "fct-module": "LGtk",
        "fct-package": "lgtk",
        "fct-signature": "String -\u003e m ()",
        "fct-source": "src/Control-Monad-EffRef.html#putStr_",
        "fct-type": "method",
        "title": "putStr_"
      },
      "index": {
        "description": "Write string to the standard output device",
        "hierarchy": "LGtk",
        "module": "LGtk",
        "name": "putStr_",
        "normalized": "String-\u003ea()",
        "package": "lgtk",
        "partial": "Str",
        "signature": "String-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lgtk/docs/LGtk.html#v:readRef",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003ereadRef\u003c/code\u003e === \u003ccode\u003ereader . getL\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eProperties derived from the \u003ccode\u003e\u003ca\u003eHasReadPart\u003c/a\u003e\u003c/code\u003e instance:\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e(readRef r \u003e\u003e return ())\u003c/code\u003e === \u003ccode\u003ereturn ()\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "LGtk",
        "fct-package": "lgtk",
        "fct-signature": "r a -\u003e ReadRefMonad r a",
        "fct-source": "src/Control-Monad-ExtRef.html#readRef",
        "fct-type": "method",
        "title": "readRef"
      },
      "index": {
        "description": "readRef reader getL Properties derived from the HasReadPart instance readRef return return",
        "hierarchy": "LGtk",
        "module": "LGtk",
        "name": "readRef",
        "normalized": "a b-\u003eReadRefMonad a b",
        "package": "lgtk",
        "partial": "Ref",
        "signature": "r a-\u003eReadRefMonad r a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lgtk/docs/LGtk.html#v:readRef-39-",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003ereadRef\u003c/code\u003e lifted to the reference creation class.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003ereadRef'\u003c/code\u003e === \u003ccode\u003eliftReadRef . readRef\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "LGtk",
        "fct-package": "lgtk",
        "fct-signature": "Ref m a -\u003e m a",
        "fct-source": "src/Control-Monad-ExtRef.html#readRef%27",
        "fct-type": "function",
        "title": "readRef'"
      },
      "index": {
        "description": "readRef lifted to the reference creation class readRef liftReadRef readRef",
        "hierarchy": "LGtk",
        "module": "LGtk",
        "name": "readRef'",
        "normalized": "Ref a b-\u003ea b",
        "package": "lgtk",
        "partial": "Ref'",
        "signature": "Ref m a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lgtk/docs/LGtk.html#v:runLens",
      "description": {
        "fct-module": "LGtk",
        "fct-package": "lgtk",
        "fct-signature": "Lens a b -\u003e a -\u003e Store b a",
        "fct-type": "function",
        "title": "runLens"
      },
      "index": {
        "description": "",
        "hierarchy": "LGtk",
        "module": "LGtk",
        "name": "runLens",
        "normalized": "Lens a b-\u003ea-\u003eStore b a",
        "package": "lgtk",
        "partial": "Lens",
        "signature": "Lens a b-\u003ea-\u003eStore b a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lgtk/docs/LGtk.html#v:runWidget",
      "description": {
        "fct-descr": "\u003cp\u003eRun a Gtk widget description.\n\u003c/p\u003e\u003cp\u003eThe widget is shown in a window and the thread enters into the Gtk event cycle.\nIt leaves the event cycle when the window is closed.\n\u003c/p\u003e",
        "fct-module": "LGtk",
        "fct-package": "lgtk",
        "fct-signature": "Widget m) -\u003e IO ()",
        "fct-source": "src/LGtk.html#runWidget",
        "fct-type": "function",
        "title": "runWidget"
      },
      "index": {
        "description": "Run Gtk widget description The widget is shown in window and the thread enters into the Gtk event cycle It leaves the event cycle when the window is closed",
        "hierarchy": "LGtk",
        "module": "LGtk",
        "name": "runWidget",
        "normalized": "Widget a)-\u003eIO()",
        "package": "lgtk",
        "partial": "Widget",
        "signature": "Widget m)-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lgtk/docs/LGtk.html#v:second",
      "description": {
        "fct-module": "LGtk",
        "fct-package": "lgtk",
        "fct-signature": "c y z -\u003e c (w, y) (w, z)",
        "fct-type": "method",
        "title": "second"
      },
      "index": {
        "description": "",
        "hierarchy": "LGtk",
        "module": "LGtk",
        "name": "second",
        "normalized": "a b c-\u003ea(d,b)(d,c)",
        "package": "lgtk",
        "partial": "",
        "signature": "c y z-\u003ec(w,y)(w,z)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lgtk/docs/LGtk.html#v:setL",
      "description": {
        "fct-descr": "\u003cp\u003eGets the setter function from a lens.\n\u003c/p\u003e",
        "fct-module": "LGtk",
        "fct-package": "lgtk",
        "fct-signature": "Lens a b -\u003e b -\u003e a -\u003e a",
        "fct-type": "function",
        "title": "setL"
      },
      "index": {
        "description": "Gets the setter function from lens",
        "hierarchy": "LGtk",
        "module": "LGtk",
        "name": "setL",
        "normalized": "Lens a b-\u003eb-\u003ea-\u003ea",
        "package": "lgtk",
        "partial": "",
        "signature": "Lens a b-\u003eb-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lgtk/docs/LGtk.html#v:showLens",
      "description": {
        "fct-module": "LGtk",
        "fct-package": "lgtk",
        "fct-signature": "Lens a String",
        "fct-source": "src/Control-Monad-ExtRef.html#showLens",
        "fct-type": "function",
        "title": "showLens"
      },
      "index": {
        "description": "",
        "hierarchy": "LGtk",
        "module": "LGtk",
        "name": "showLens",
        "normalized": "",
        "package": "lgtk",
        "partial": "Lens",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lgtk/docs/LGtk.html#v:smartButton",
      "description": {
        "fct-module": "LGtk",
        "fct-package": "lgtk",
        "fct-signature": "ReadRef m String-\u003e r a-\u003e (a -\u003e a)-\u003e Widget m",
        "fct-type": "function",
        "title": "smartButton"
      },
      "index": {
        "description": "",
        "hierarchy": "LGtk",
        "module": "LGtk",
        "name": "smartButton",
        "normalized": "ReadRef a String-\u003eb c-\u003e(c-\u003ec)-\u003eWidget a",
        "package": "lgtk",
        "partial": "Button",
        "signature": "ReadRef m String-\u003er a-\u003e(a-\u003ea)-\u003eWidget m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lgtk/docs/LGtk.html#v:sndLens",
      "description": {
        "fct-module": "LGtk",
        "fct-package": "lgtk",
        "fct-signature": "Lens (a, b) b",
        "fct-type": "function",
        "title": "sndLens"
      },
      "index": {
        "description": "",
        "hierarchy": "LGtk",
        "module": "LGtk",
        "name": "sndLens",
        "normalized": "Lens(a,b)b",
        "package": "lgtk",
        "partial": "Lens",
        "signature": "Lens(a,b)b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lgtk/docs/LGtk.html#v:toRef",
      "description": {
        "fct-descr": "\u003cp\u003eAn \u003ccode\u003eEqRef\u003c/code\u003e is a normal reference if we forget about the equality.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003etoRef m\u003c/code\u003e === \u003ccode\u003ejoinRef $ liftM (uncurry lensMap) m\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "LGtk",
        "fct-package": "lgtk",
        "fct-signature": "EqRef r a -\u003e r a",
        "fct-source": "src/Control-Monad-ExtRef.html#toRef",
        "fct-type": "function",
        "title": "toRef"
      },
      "index": {
        "description": "An EqRef is normal reference if we forget about the equality toRef joinRef liftM uncurry lensMap",
        "hierarchy": "LGtk",
        "module": "LGtk",
        "name": "toRef",
        "normalized": "EqRef a b-\u003ea b",
        "package": "lgtk",
        "partial": "Ref",
        "signature": "EqRef r a-\u003er a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lgtk/docs/LGtk.html#v:undoTr",
      "description": {
        "fct-descr": "\u003cp\u003eUndo-redo state transformation.\n\u003c/p\u003e",
        "fct-module": "LGtk",
        "fct-package": "lgtk",
        "fct-signature": "(a -\u003e a -\u003e Bool)-\u003e Ref m a-\u003e m (ReadRef m (Maybe (WriteRef m ())), ReadRef m (Maybe (WriteRef m ())))",
        "fct-type": "function",
        "title": "undoTr"
      },
      "index": {
        "description": "Undo-redo state transformation",
        "hierarchy": "LGtk",
        "module": "LGtk",
        "name": "undoTr",
        "normalized": "(a-\u003ea-\u003eBool)-\u003eRef b a-\u003eb(ReadRef b(Maybe(WriteRef b())),ReadRef b(Maybe(WriteRef b())))",
        "package": "lgtk",
        "partial": "Tr",
        "signature": "(a-\u003ea-\u003eBool)-\u003eRef m a-\u003em(ReadRef m(Maybe(WriteRef m())),ReadRef m(Maybe(WriteRef m())))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lgtk/docs/LGtk.html#v:unitRef",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eunitRef\u003c/code\u003e === \u003ccode\u003elens (const ()) (const id)\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "LGtk",
        "fct-package": "lgtk",
        "fct-signature": "r ()",
        "fct-source": "src/Control-Monad-ExtRef.html#unitRef",
        "fct-type": "method",
        "title": "unitRef"
      },
      "index": {
        "description": "unitRef lens const const id",
        "hierarchy": "LGtk",
        "module": "LGtk",
        "name": "unitRef",
        "normalized": "a()",
        "package": "lgtk",
        "partial": "Ref",
        "signature": "r()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lgtk/docs/LGtk.html#v:vcat",
      "description": {
        "fct-descr": "\u003cp\u003eVertical composition of widgets.\n\u003c/p\u003e",
        "fct-module": "LGtk",
        "fct-package": "lgtk",
        "fct-signature": "[Widget m] -\u003e Widget m",
        "fct-source": "src/LGtk.html#vcat",
        "fct-type": "function",
        "title": "vcat"
      },
      "index": {
        "description": "Vertical composition of widgets",
        "hierarchy": "LGtk",
        "module": "LGtk",
        "name": "vcat",
        "normalized": "[Widget a]-\u003eWidget a",
        "package": "lgtk",
        "partial": "",
        "signature": "[Widget m]-\u003eWidget m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lgtk/docs/LGtk.html#v:when",
      "description": {
        "fct-descr": "\u003cp\u003eConditional execution of monadic expressions. For example, \n\u003c/p\u003e\u003cpre\u003e       when debug (putStr \"Debugging\\n\")\n\u003c/pre\u003e\u003cp\u003ewill output the string \u003ccode\u003eDebugging\\n\u003c/code\u003e if the Boolean value \u003ccode\u003edebug\u003c/code\u003e is \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e,\nand otherwise do nothing.\n\u003c/p\u003e",
        "fct-module": "LGtk",
        "fct-package": "lgtk",
        "fct-signature": "Bool -\u003e m () -\u003e m ()",
        "fct-type": "function",
        "title": "when"
      },
      "index": {
        "description": "Conditional execution of monadic expressions For example when debug putStr Debugging will output the string Debugging if the Boolean value debug is True and otherwise do nothing",
        "hierarchy": "LGtk",
        "module": "LGtk",
        "name": "when",
        "normalized": "Bool-\u003ea()-\u003ea()",
        "package": "lgtk",
        "partial": "",
        "signature": "Bool-\u003em()-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lgtk/docs/LGtk.html#v:writeRef",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003ewriteRef r\u003c/code\u003e === \u003ccode\u003emodify . setL r\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eProperties derived from the set-get, get-set and set-set laws for lenses:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e  \u003ccode\u003e(readRef r \u003e\u003e= writeRef r)\u003c/code\u003e === \u003ccode\u003ereturn ()\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e  \u003ccode\u003e(writeRef r a \u003e\u003e readRef r)\u003c/code\u003e === \u003ccode\u003ereturn a\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e  \u003ccode\u003e(writeRef r a \u003e\u003e writeRef r a')\u003c/code\u003e === \u003ccode\u003ewriteRef r a'\u003c/code\u003e\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "LGtk",
        "fct-package": "lgtk",
        "fct-signature": "r a -\u003e a -\u003e RefMonad r ()",
        "fct-source": "src/Control-Monad-ExtRef.html#writeRef",
        "fct-type": "method",
        "title": "writeRef"
      },
      "index": {
        "description": "writeRef modify setL Properties derived from the set-get get-set and set-set laws for lenses readRef writeRef return writeRef readRef return writeRef writeRef writeRef",
        "hierarchy": "LGtk",
        "module": "LGtk",
        "name": "writeRef",
        "normalized": "a b-\u003eb-\u003eRefMonad a()",
        "package": "lgtk",
        "partial": "Ref",
        "signature": "r a-\u003ea-\u003eRefMonad r()"
      }
    }
  }
]