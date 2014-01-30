[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pointedlist/docs/Data-List-PointedList-Circular.html#",
      "description": {
        "fct-module": "Data.List.PointedList.Circular",
        "fct-package": "pointedlist",
        "fct-signature": "module",
        "fct-source": "src/Data-List-PointedList-Circular.html",
        "fct-type": "module",
        "title": "Circular"
      },
      "index": {
        "description": "",
        "hierarchy": "Data List PointedList Circular",
        "module": "Data.List.PointedList.Circular",
        "name": "Circular",
        "normalized": "",
        "package": "pointedlist",
        "partial": "Circular",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pointedlist/docs/Data-List-PointedList-Circular.html#v:delete",
      "description": {
        "fct-descr": "\u003cp\u003eAn alias of \u003ccode\u003e\u003ca\u003edeleteRight\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.List.PointedList.Circular",
        "fct-package": "pointedlist",
        "fct-signature": "PointedList a -\u003e Maybe (PointedList a)",
        "fct-source": "src/Data-List-PointedList-Circular.html#delete",
        "fct-type": "function",
        "title": "delete"
      },
      "index": {
        "description": "An alias of deleteRight",
        "hierarchy": "Data List PointedList Circular",
        "module": "Data.List.PointedList.Circular",
        "name": "delete",
        "normalized": "PointedList a-\u003eMaybe(PointedList a)",
        "package": "pointedlist",
        "partial": "",
        "signature": "PointedList a-\u003eMaybe(PointedList a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pointedlist/docs/Data-List-PointedList-Circular.html#v:deleteLeft",
      "description": {
        "fct-descr": "\u003cp\u003ePossibly delete the element at the focus, then move the element on the\n   left to the focus. If no element is on the left, focus on the element to\n   the right. If the deletion will cause the list to be empty, return\n   \u003ccode\u003eNothing\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.List.PointedList.Circular",
        "fct-package": "pointedlist",
        "fct-signature": "PointedList a -\u003e Maybe (PointedList a)",
        "fct-source": "src/Data-List-PointedList-Circular.html#deleteLeft",
        "fct-type": "function",
        "title": "deleteLeft"
      },
      "index": {
        "description": "Possibly delete the element at the focus then move the element on the left to the focus If no element is on the left focus on the element to the right If the deletion will cause the list to be empty return Nothing",
        "hierarchy": "Data List PointedList Circular",
        "module": "Data.List.PointedList.Circular",
        "name": "deleteLeft",
        "normalized": "PointedList a-\u003eMaybe(PointedList a)",
        "package": "pointedlist",
        "partial": "Left",
        "signature": "PointedList a-\u003eMaybe(PointedList a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pointedlist/docs/Data-List-PointedList-Circular.html#v:deleteRight",
      "description": {
        "fct-descr": "\u003cp\u003ePossibly delete the element at the focus, then move the element on the\n   right to the focus. If no element is on the right, focus on the element to\n   the left. If the deletion will cause the list to be empty, return\n   \u003ccode\u003eNothing\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.List.PointedList.Circular",
        "fct-package": "pointedlist",
        "fct-signature": "PointedList a -\u003e Maybe (PointedList a)",
        "fct-source": "src/Data-List-PointedList-Circular.html#deleteRight",
        "fct-type": "function",
        "title": "deleteRight"
      },
      "index": {
        "description": "Possibly delete the element at the focus then move the element on the right to the focus If no element is on the right focus on the element to the left If the deletion will cause the list to be empty return Nothing",
        "hierarchy": "Data List PointedList Circular",
        "module": "Data.List.PointedList.Circular",
        "name": "deleteRight",
        "normalized": "PointedList a-\u003eMaybe(PointedList a)",
        "package": "pointedlist",
        "partial": "Right",
        "signature": "PointedList a-\u003eMaybe(PointedList a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pointedlist/docs/Data-List-PointedList-Circular.html#v:moveN",
      "description": {
        "fct-descr": "\u003cp\u003eMove\n\u003c/p\u003e",
        "fct-module": "Data.List.PointedList.Circular",
        "fct-package": "pointedlist",
        "fct-signature": "Int -\u003e PointedList a -\u003e PointedList a",
        "fct-source": "src/Data-List-PointedList-Circular.html#moveN",
        "fct-type": "function",
        "title": "moveN"
      },
      "index": {
        "description": "Move",
        "hierarchy": "Data List PointedList Circular",
        "module": "Data.List.PointedList.Circular",
        "name": "moveN",
        "normalized": "Int-\u003ePointedList a-\u003ePointedList a",
        "package": "pointedlist",
        "partial": "",
        "signature": "Int-\u003ePointedList a-\u003ePointedList a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pointedlist/docs/Data-List-PointedList-Circular.html#v:next",
      "description": {
        "fct-descr": "\u003cp\u003eMove the focus to the next element in the list. If the last element is\n   currently focused, loop to the first element.\n\u003c/p\u003e",
        "fct-module": "Data.List.PointedList.Circular",
        "fct-package": "pointedlist",
        "fct-signature": "PointedList a -\u003e PointedList a",
        "fct-source": "src/Data-List-PointedList-Circular.html#next",
        "fct-type": "function",
        "title": "next"
      },
      "index": {
        "description": "Move the focus to the next element in the list If the last element is currently focused loop to the first element",
        "hierarchy": "Data List PointedList Circular",
        "module": "Data.List.PointedList.Circular",
        "name": "next",
        "normalized": "PointedList a-\u003ePointedList a",
        "package": "pointedlist",
        "partial": "",
        "signature": "PointedList a-\u003ePointedList a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pointedlist/docs/Data-List-PointedList-Circular.html#v:previous",
      "description": {
        "fct-descr": "\u003cp\u003eMove the focus to the previous element in the list. If the first element is\n   currently focused, loop to the last element.\n\u003c/p\u003e",
        "fct-module": "Data.List.PointedList.Circular",
        "fct-package": "pointedlist",
        "fct-signature": "PointedList a -\u003e PointedList a",
        "fct-source": "src/Data-List-PointedList-Circular.html#previous",
        "fct-type": "function",
        "title": "previous"
      },
      "index": {
        "description": "Move the focus to the previous element in the list If the first element is currently focused loop to the last element",
        "hierarchy": "Data List PointedList Circular",
        "module": "Data.List.PointedList.Circular",
        "name": "previous",
        "normalized": "PointedList a-\u003ePointedList a",
        "package": "pointedlist",
        "partial": "",
        "signature": "PointedList a-\u003ePointedList a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pointedlist/docs/Data-List-PointedList.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn implementation of a zipper-like non-empty list structure that tracks\n   an index position in the list (the \u003ccode\u003e\u003ca\u003efocus\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.List.PointedList",
        "fct-package": "pointedlist",
        "fct-signature": "module",
        "fct-source": "src/Data-List-PointedList.html",
        "fct-type": "module",
        "title": "PointedList"
      },
      "index": {
        "description": "An implementation of zipper-like non-empty list structure that tracks an index position in the list the focus",
        "hierarchy": "Data List PointedList",
        "module": "Data.List.PointedList",
        "name": "PointedList",
        "normalized": "",
        "package": "pointedlist",
        "partial": "Pointed List",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pointedlist/docs/Data-List-PointedList.html#t:PointedList",
      "description": {
        "fct-descr": "\u003cp\u003eThe implementation of the pointed list structure which tracks the current\n   position in the list structure.\n\u003c/p\u003e",
        "fct-module": "Data.List.PointedList",
        "fct-package": "pointedlist",
        "fct-signature": "data",
        "fct-source": "src/Data-List-PointedList.html#PointedList",
        "fct-type": "data",
        "title": "PointedList"
      },
      "index": {
        "description": "The implementation of the pointed list structure which tracks the current position in the list structure",
        "hierarchy": "Data List PointedList",
        "module": "Data.List.PointedList",
        "name": "PointedList",
        "normalized": "",
        "package": "pointedlist",
        "partial": "Pointed List",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pointedlist/docs/Data-List-PointedList.html#v:PointedList",
      "description": {
        "fct-module": "Data.List.PointedList",
        "fct-package": "pointedlist",
        "fct-signature": "PointedList",
        "fct-source": "src/Data-List-PointedList.html#PointedList",
        "fct-type": "function",
        "title": "PointedList"
      },
      "index": {
        "description": "",
        "hierarchy": "Data List PointedList",
        "module": "Data.List.PointedList",
        "name": "PointedList",
        "normalized": "",
        "package": "pointedlist",
        "partial": "Pointed List",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pointedlist/docs/Data-List-PointedList.html#v:_focus",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.List.PointedList",
        "fct-package": "pointedlist",
        "fct-signature": "a",
        "fct-source": "src/Data-List-PointedList.html#PointedList",
        "fct-type": "function",
        "title": "_focus"
      },
      "index": {
        "description": "",
        "hierarchy": "Data List PointedList",
        "module": "Data.List.PointedList",
        "name": "_focus",
        "normalized": "",
        "package": "pointedlist",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pointedlist/docs/Data-List-PointedList.html#v:_reversedPrefix",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.List.PointedList",
        "fct-package": "pointedlist",
        "fct-signature": "[a]",
        "fct-source": "src/Data-List-PointedList.html#PointedList",
        "fct-type": "function",
        "title": "_reversedPrefix"
      },
      "index": {
        "description": "",
        "hierarchy": "Data List PointedList",
        "module": "Data.List.PointedList",
        "name": "_reversedPrefix",
        "normalized": "[a]",
        "package": "pointedlist",
        "partial": "Prefix",
        "signature": "[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pointedlist/docs/Data-List-PointedList.html#v:_suffix",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.List.PointedList",
        "fct-package": "pointedlist",
        "fct-signature": "[a]",
        "fct-source": "src/Data-List-PointedList.html#PointedList",
        "fct-type": "function",
        "title": "_suffix"
      },
      "index": {
        "description": "",
        "hierarchy": "Data List PointedList",
        "module": "Data.List.PointedList",
        "name": "_suffix",
        "normalized": "[a]",
        "package": "pointedlist",
        "partial": "",
        "signature": "[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pointedlist/docs/Data-List-PointedList.html#v:atEnd",
      "description": {
        "fct-descr": "\u003cp\u003eWhether the focus is the last element.\n\u003c/p\u003e",
        "fct-module": "Data.List.PointedList",
        "fct-package": "pointedlist",
        "fct-signature": "PointedList a -\u003e Bool",
        "fct-source": "src/Data-List-PointedList.html#atEnd",
        "fct-type": "function",
        "title": "atEnd"
      },
      "index": {
        "description": "Whether the focus is the last element",
        "hierarchy": "Data List PointedList",
        "module": "Data.List.PointedList",
        "name": "atEnd",
        "normalized": "PointedList a-\u003eBool",
        "package": "pointedlist",
        "partial": "End",
        "signature": "PointedList a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pointedlist/docs/Data-List-PointedList.html#v:atStart",
      "description": {
        "fct-descr": "\u003cp\u003eWhether the focus is the first element.\n\u003c/p\u003e",
        "fct-module": "Data.List.PointedList",
        "fct-package": "pointedlist",
        "fct-signature": "PointedList a -\u003e Bool",
        "fct-source": "src/Data-List-PointedList.html#atStart",
        "fct-type": "function",
        "title": "atStart"
      },
      "index": {
        "description": "Whether the focus is the first element",
        "hierarchy": "Data List PointedList",
        "module": "Data.List.PointedList",
        "name": "atStart",
        "normalized": "PointedList a-\u003eBool",
        "package": "pointedlist",
        "partial": "Start",
        "signature": "PointedList a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pointedlist/docs/Data-List-PointedList.html#v:contextMap",
      "description": {
        "fct-descr": "\u003cp\u003eMap over the \u003ccode\u003e\u003ca\u003ePointedList\u003c/a\u003e\u003c/code\u003es created via \u003ccode\u003e\u003ca\u003epositions\u003c/a\u003e\u003c/code\u003e, such that \u003ccode\u003ef\u003c/code\u003e is\t\n   called with each element of the list focused in the provided\n   \u003ccode\u003e\u003ca\u003ePointedList\u003c/a\u003e\u003c/code\u003e. An example makes this easier to understand:\n\u003c/p\u003e\u003cpre\u003e contextMap atStart (fromJust $ fromList [1..5])\n\u003c/pre\u003e",
        "fct-module": "Data.List.PointedList",
        "fct-package": "pointedlist",
        "fct-signature": "(PointedList a -\u003e b) -\u003e PointedList a -\u003e PointedList b",
        "fct-source": "src/Data-List-PointedList.html#contextMap",
        "fct-type": "function",
        "title": "contextMap"
      },
      "index": {
        "description": "Map over the PointedList created via positions such that is called with each element of the list focused in the provided PointedList An example makes this easier to understand contextMap atStart fromJust fromList",
        "hierarchy": "Data List PointedList",
        "module": "Data.List.PointedList",
        "name": "contextMap",
        "normalized": "(PointedList a-\u003eb)-\u003ePointedList a-\u003ePointedList b",
        "package": "pointedlist",
        "partial": "Map",
        "signature": "(PointedList a-\u003eb)-\u003ePointedList a-\u003ePointedList b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pointedlist/docs/Data-List-PointedList.html#v:delete",
      "description": {
        "fct-descr": "\u003cp\u003eAn alias of \u003ccode\u003e\u003ca\u003edeleteRight\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.List.PointedList",
        "fct-package": "pointedlist",
        "fct-signature": "PointedList a -\u003e Maybe (PointedList a)",
        "fct-source": "src/Data-List-PointedList.html#delete",
        "fct-type": "function",
        "title": "delete"
      },
      "index": {
        "description": "An alias of deleteRight",
        "hierarchy": "Data List PointedList",
        "module": "Data.List.PointedList",
        "name": "delete",
        "normalized": "PointedList a-\u003eMaybe(PointedList a)",
        "package": "pointedlist",
        "partial": "",
        "signature": "PointedList a-\u003eMaybe(PointedList a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pointedlist/docs/Data-List-PointedList.html#v:deleteLeft",
      "description": {
        "fct-descr": "\u003cp\u003ePossibly delete the element at the focus, then move the element on the\n   left to the focus. If no element is on the left, focus on the element to\n   the right. If the deletion will cause the list to be empty, return\n   \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.List.PointedList",
        "fct-package": "pointedlist",
        "fct-signature": "PointedList a -\u003e Maybe (PointedList a)",
        "fct-source": "src/Data-List-PointedList.html#deleteLeft",
        "fct-type": "function",
        "title": "deleteLeft"
      },
      "index": {
        "description": "Possibly delete the element at the focus then move the element on the left to the focus If no element is on the left focus on the element to the right If the deletion will cause the list to be empty return Nothing",
        "hierarchy": "Data List PointedList",
        "module": "Data.List.PointedList",
        "name": "deleteLeft",
        "normalized": "PointedList a-\u003eMaybe(PointedList a)",
        "package": "pointedlist",
        "partial": "Left",
        "signature": "PointedList a-\u003eMaybe(PointedList a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pointedlist/docs/Data-List-PointedList.html#v:deleteOthers",
      "description": {
        "fct-descr": "\u003cp\u003eDelete all elements in the list except the focus.\n\u003c/p\u003e",
        "fct-module": "Data.List.PointedList",
        "fct-package": "pointedlist",
        "fct-signature": "PointedList a -\u003e PointedList a",
        "fct-source": "src/Data-List-PointedList.html#deleteOthers",
        "fct-type": "function",
        "title": "deleteOthers"
      },
      "index": {
        "description": "Delete all elements in the list except the focus",
        "hierarchy": "Data List PointedList",
        "module": "Data.List.PointedList",
        "name": "deleteOthers",
        "normalized": "PointedList a-\u003ePointedList a",
        "package": "pointedlist",
        "partial": "Others",
        "signature": "PointedList a-\u003ePointedList a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pointedlist/docs/Data-List-PointedList.html#v:deleteRight",
      "description": {
        "fct-descr": "\u003cp\u003ePossibly delete the element at the focus, then move the element on the\n   right to the focus. If no element is on the right, focus on the element to\n   the left. If the deletion will cause the list to be empty, return\n   \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.List.PointedList",
        "fct-package": "pointedlist",
        "fct-signature": "PointedList a -\u003e Maybe (PointedList a)",
        "fct-source": "src/Data-List-PointedList.html#deleteRight",
        "fct-type": "function",
        "title": "deleteRight"
      },
      "index": {
        "description": "Possibly delete the element at the focus then move the element on the right to the focus If no element is on the right focus on the element to the left If the deletion will cause the list to be empty return Nothing",
        "hierarchy": "Data List PointedList",
        "module": "Data.List.PointedList",
        "name": "deleteRight",
        "normalized": "PointedList a-\u003eMaybe(PointedList a)",
        "package": "pointedlist",
        "partial": "Right",
        "signature": "PointedList a-\u003eMaybe(PointedList a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pointedlist/docs/Data-List-PointedList.html#v:find",
      "description": {
        "fct-descr": "\u003cp\u003eMove the focus to the specified element, if it is present.\n\u003c/p\u003e\u003cp\u003ePatch with much faster algorithm provided by Runar Bjarnason for version\n   0.3.2. Improved again by Runar Bjarnason for version 0.3.3 to support\n   infinite lists on both sides of the focus.\n\u003c/p\u003e",
        "fct-module": "Data.List.PointedList",
        "fct-package": "pointedlist",
        "fct-signature": "a -\u003e PointedList a -\u003e Maybe (PointedList a)",
        "fct-source": "src/Data-List-PointedList.html#find",
        "fct-type": "function",
        "title": "find"
      },
      "index": {
        "description": "Move the focus to the specified element if it is present Patch with much faster algorithm provided by Runar Bjarnason for version Improved again by Runar Bjarnason for version to support infinite lists on both sides of the focus",
        "hierarchy": "Data List PointedList",
        "module": "Data.List.PointedList",
        "name": "find",
        "normalized": "a-\u003ePointedList a-\u003eMaybe(PointedList a)",
        "package": "pointedlist",
        "partial": "",
        "signature": "a-\u003ePointedList a-\u003eMaybe(PointedList a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pointedlist/docs/Data-List-PointedList.html#v:focus",
      "description": {
        "fct-descr": "\u003cp\u003eLens compatible with Control.Lens.\n\u003c/p\u003e",
        "fct-module": "Data.List.PointedList",
        "fct-package": "pointedlist",
        "fct-signature": "(a -\u003e f a) -\u003e PointedList a -\u003e f (PointedList a)",
        "fct-source": "src/Data-List-PointedList.html#focus",
        "fct-type": "function",
        "title": "focus"
      },
      "index": {
        "description": "Lens compatible with Control.Lens",
        "hierarchy": "Data List PointedList",
        "module": "Data.List.PointedList",
        "name": "focus",
        "normalized": "(a-\u003eb a)-\u003ePointedList a-\u003eb(PointedList a)",
        "package": "pointedlist",
        "partial": "",
        "signature": "(a-\u003ef a)-\u003ePointedList a-\u003ef(PointedList a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pointedlist/docs/Data-List-PointedList.html#v:fromList",
      "description": {
        "fct-descr": "\u003cp\u003ePossibly create a \u003ccode\u003e\u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003ePointedList\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e if the provided list has at least\n   one element; otherwise, return Nothing.\n\u003c/p\u003e\u003cp\u003eThe provided list's head will be the focus of the list, and the rest of\n   list will follow on the right side.\n\u003c/p\u003e",
        "fct-module": "Data.List.PointedList",
        "fct-package": "pointedlist",
        "fct-signature": "[a] -\u003e Maybe (PointedList a)",
        "fct-source": "src/Data-List-PointedList.html#fromList",
        "fct-type": "function",
        "title": "fromList"
      },
      "index": {
        "description": "Possibly create Just PointedList if the provided list has at least one element otherwise return Nothing The provided list head will be the focus of the list and the rest of list will follow on the right side",
        "hierarchy": "Data List PointedList",
        "module": "Data.List.PointedList",
        "name": "fromList",
        "normalized": "[a]-\u003eMaybe(PointedList a)",
        "package": "pointedlist",
        "partial": "List",
        "signature": "[a]-\u003eMaybe(PointedList a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pointedlist/docs/Data-List-PointedList.html#v:fromListEnd",
      "description": {
        "fct-descr": "\u003cp\u003ePossibly create a \u003ccode\u003e\u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003ePointedList\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e if the provided list has at least\n   one element; otherwise, return Nothing.\n\u003c/p\u003e\u003cp\u003eThe provided list's last element will be the focus of the list, following\n   the rest of the list in order, to the left.\n\u003c/p\u003e",
        "fct-module": "Data.List.PointedList",
        "fct-package": "pointedlist",
        "fct-signature": "[a] -\u003e Maybe (PointedList a)",
        "fct-source": "src/Data-List-PointedList.html#fromListEnd",
        "fct-type": "function",
        "title": "fromListEnd"
      },
      "index": {
        "description": "Possibly create Just PointedList if the provided list has at least one element otherwise return Nothing The provided list last element will be the focus of the list following the rest of the list in order to the left",
        "hierarchy": "Data List PointedList",
        "module": "Data.List.PointedList",
        "name": "fromListEnd",
        "normalized": "[a]-\u003eMaybe(PointedList a)",
        "package": "pointedlist",
        "partial": "List End",
        "signature": "[a]-\u003eMaybe(PointedList a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pointedlist/docs/Data-List-PointedList.html#v:index",
      "description": {
        "fct-descr": "\u003cp\u003eThe index of the focus, leftmost is 0.\n\u003c/p\u003e",
        "fct-module": "Data.List.PointedList",
        "fct-package": "pointedlist",
        "fct-signature": "PointedList a -\u003e Int",
        "fct-source": "src/Data-List-PointedList.html#index",
        "fct-type": "function",
        "title": "index"
      },
      "index": {
        "description": "The index of the focus leftmost is",
        "hierarchy": "Data List PointedList",
        "module": "Data.List.PointedList",
        "name": "index",
        "normalized": "PointedList a-\u003eInt",
        "package": "pointedlist",
        "partial": "",
        "signature": "PointedList a-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pointedlist/docs/Data-List-PointedList.html#v:insert",
      "description": {
        "fct-descr": "\u003cp\u003eAn alias for \u003ccode\u003e\u003ca\u003einsertRight\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.List.PointedList",
        "fct-package": "pointedlist",
        "fct-signature": "a -\u003e PointedList a -\u003e PointedList a",
        "fct-source": "src/Data-List-PointedList.html#insert",
        "fct-type": "function",
        "title": "insert"
      },
      "index": {
        "description": "An alias for insertRight",
        "hierarchy": "Data List PointedList",
        "module": "Data.List.PointedList",
        "name": "insert",
        "normalized": "a-\u003ePointedList a-\u003ePointedList a",
        "package": "pointedlist",
        "partial": "",
        "signature": "a-\u003ePointedList a-\u003ePointedList a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pointedlist/docs/Data-List-PointedList.html#v:insertLeft",
      "description": {
        "fct-descr": "\u003cp\u003eInsert an element to the left of the focus, then move the focus to the new\n   element.\n\u003c/p\u003e",
        "fct-module": "Data.List.PointedList",
        "fct-package": "pointedlist",
        "fct-signature": "a -\u003e PointedList a -\u003e PointedList a",
        "fct-source": "src/Data-List-PointedList.html#insertLeft",
        "fct-type": "function",
        "title": "insertLeft"
      },
      "index": {
        "description": "Insert an element to the left of the focus then move the focus to the new element",
        "hierarchy": "Data List PointedList",
        "module": "Data.List.PointedList",
        "name": "insertLeft",
        "normalized": "a-\u003ePointedList a-\u003ePointedList a",
        "package": "pointedlist",
        "partial": "Left",
        "signature": "a-\u003ePointedList a-\u003ePointedList a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pointedlist/docs/Data-List-PointedList.html#v:insertRight",
      "description": {
        "fct-descr": "\u003cp\u003eInsert an element to the right of the focus, then move the focus to the\n   new element.\n\u003c/p\u003e",
        "fct-module": "Data.List.PointedList",
        "fct-package": "pointedlist",
        "fct-signature": "a -\u003e PointedList a -\u003e PointedList a",
        "fct-source": "src/Data-List-PointedList.html#insertRight",
        "fct-type": "function",
        "title": "insertRight"
      },
      "index": {
        "description": "Insert an element to the right of the focus then move the focus to the new element",
        "hierarchy": "Data List PointedList",
        "module": "Data.List.PointedList",
        "name": "insertRight",
        "normalized": "a-\u003ePointedList a-\u003ePointedList a",
        "package": "pointedlist",
        "partial": "Right",
        "signature": "a-\u003ePointedList a-\u003ePointedList a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pointedlist/docs/Data-List-PointedList.html#v:length",
      "description": {
        "fct-descr": "\u003cp\u003eThe length of the list.\n\u003c/p\u003e",
        "fct-module": "Data.List.PointedList",
        "fct-package": "pointedlist",
        "fct-signature": "PointedList a -\u003e Int",
        "fct-source": "src/Data-List-PointedList.html#length",
        "fct-type": "function",
        "title": "length"
      },
      "index": {
        "description": "The length of the list",
        "hierarchy": "Data List PointedList",
        "module": "Data.List.PointedList",
        "name": "length",
        "normalized": "PointedList a-\u003eInt",
        "package": "pointedlist",
        "partial": "",
        "signature": "PointedList a-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pointedlist/docs/Data-List-PointedList.html#v:moveN",
      "description": {
        "fct-descr": "\u003cp\u003eMove the focus by \u003ccode\u003en\u003c/code\u003e, relative to the current index. Negative values move\n   the focus backwards, positive values more forwards through the list.\n\u003c/p\u003e",
        "fct-module": "Data.List.PointedList",
        "fct-package": "pointedlist",
        "fct-signature": "Int -\u003e PointedList a -\u003e Maybe (PointedList a)",
        "fct-source": "src/Data-List-PointedList.html#moveN",
        "fct-type": "function",
        "title": "moveN"
      },
      "index": {
        "description": "Move the focus by relative to the current index Negative values move the focus backwards positive values more forwards through the list",
        "hierarchy": "Data List PointedList",
        "module": "Data.List.PointedList",
        "name": "moveN",
        "normalized": "Int-\u003ePointedList a-\u003eMaybe(PointedList a)",
        "package": "pointedlist",
        "partial": "",
        "signature": "Int-\u003ePointedList a-\u003eMaybe(PointedList a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pointedlist/docs/Data-List-PointedList.html#v:moveTo",
      "description": {
        "fct-descr": "\u003cp\u003eMove the focus to the specified index. The first element is at index 0.\n\u003c/p\u003e",
        "fct-module": "Data.List.PointedList",
        "fct-package": "pointedlist",
        "fct-signature": "Int -\u003e PointedList a -\u003e Maybe (PointedList a)",
        "fct-source": "src/Data-List-PointedList.html#moveTo",
        "fct-type": "function",
        "title": "moveTo"
      },
      "index": {
        "description": "Move the focus to the specified index The first element is at index",
        "hierarchy": "Data List PointedList",
        "module": "Data.List.PointedList",
        "name": "moveTo",
        "normalized": "Int-\u003ePointedList a-\u003eMaybe(PointedList a)",
        "package": "pointedlist",
        "partial": "To",
        "signature": "Int-\u003ePointedList a-\u003eMaybe(PointedList a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pointedlist/docs/Data-List-PointedList.html#v:next",
      "description": {
        "fct-descr": "\u003cp\u003ePossibly move the focus to the next element in the list.\n\u003c/p\u003e",
        "fct-module": "Data.List.PointedList",
        "fct-package": "pointedlist",
        "fct-signature": "PointedList a -\u003e Maybe (PointedList a)",
        "fct-source": "src/Data-List-PointedList.html#next",
        "fct-type": "function",
        "title": "next"
      },
      "index": {
        "description": "Possibly move the focus to the next element in the list",
        "hierarchy": "Data List PointedList",
        "module": "Data.List.PointedList",
        "name": "next",
        "normalized": "PointedList a-\u003eMaybe(PointedList a)",
        "package": "pointedlist",
        "partial": "",
        "signature": "PointedList a-\u003eMaybe(PointedList a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pointedlist/docs/Data-List-PointedList.html#v:positions",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a \u003ccode\u003e\u003ca\u003ePointedList\u003c/a\u003e\u003c/code\u003e of variations of the provided \u003ccode\u003e\u003ca\u003ePointedList\u003c/a\u003e\u003c/code\u003e, in\n   which each element is focused, with the provided \u003ccode\u003e\u003ca\u003ePointedList\u003c/a\u003e\u003c/code\u003e as the\n   focus of the sets.\n\u003c/p\u003e",
        "fct-module": "Data.List.PointedList",
        "fct-package": "pointedlist",
        "fct-signature": "PointedList a -\u003e PointedList (PointedList a)",
        "fct-source": "src/Data-List-PointedList.html#positions",
        "fct-type": "function",
        "title": "positions"
      },
      "index": {
        "description": "Create PointedList of variations of the provided PointedList in which each element is focused with the provided PointedList as the focus of the sets",
        "hierarchy": "Data List PointedList",
        "module": "Data.List.PointedList",
        "name": "positions",
        "normalized": "PointedList a-\u003ePointedList(PointedList a)",
        "package": "pointedlist",
        "partial": "",
        "signature": "PointedList a-\u003ePointedList(PointedList a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pointedlist/docs/Data-List-PointedList.html#v:prefix",
      "description": {
        "fct-descr": "\u003cp\u003eLens compatible with Control.Lens.\n Internally reversing the prefix list.\n\u003c/p\u003e",
        "fct-module": "Data.List.PointedList",
        "fct-package": "pointedlist",
        "fct-signature": "([a] -\u003e f [a]) -\u003e PointedList a -\u003e f (PointedList a)",
        "fct-source": "src/Data-List-PointedList.html#prefix",
        "fct-type": "function",
        "title": "prefix"
      },
      "index": {
        "description": "Lens compatible with Control.Lens Internally reversing the prefix list",
        "hierarchy": "Data List PointedList",
        "module": "Data.List.PointedList",
        "name": "prefix",
        "normalized": "([a]-\u003eb[a])-\u003ePointedList a-\u003eb(PointedList a)",
        "package": "pointedlist",
        "partial": "",
        "signature": "([a]-\u003ef[a])-\u003ePointedList a-\u003ef(PointedList a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pointedlist/docs/Data-List-PointedList.html#v:previous",
      "description": {
        "fct-descr": "\u003cp\u003ePossibly move the focus to the previous element in the list.\n\u003c/p\u003e",
        "fct-module": "Data.List.PointedList",
        "fct-package": "pointedlist",
        "fct-signature": "PointedList a -\u003e Maybe (PointedList a)",
        "fct-source": "src/Data-List-PointedList.html#previous",
        "fct-type": "function",
        "title": "previous"
      },
      "index": {
        "description": "Possibly move the focus to the previous element in the list",
        "hierarchy": "Data List PointedList",
        "module": "Data.List.PointedList",
        "name": "previous",
        "normalized": "PointedList a-\u003eMaybe(PointedList a)",
        "package": "pointedlist",
        "partial": "",
        "signature": "PointedList a-\u003eMaybe(PointedList a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pointedlist/docs/Data-List-PointedList.html#v:replace",
      "description": {
        "fct-descr": "\u003cp\u003eReplace the focus of the list, retaining the prefix and suffix.\n\u003c/p\u003e",
        "fct-module": "Data.List.PointedList",
        "fct-package": "pointedlist",
        "fct-signature": "a -\u003e PointedList a -\u003e PointedList a",
        "fct-source": "src/Data-List-PointedList.html#replace",
        "fct-type": "function",
        "title": "replace"
      },
      "index": {
        "description": "Replace the focus of the list retaining the prefix and suffix",
        "hierarchy": "Data List PointedList",
        "module": "Data.List.PointedList",
        "name": "replace",
        "normalized": "a-\u003ePointedList a-\u003ePointedList a",
        "package": "pointedlist",
        "partial": "",
        "signature": "a-\u003ePointedList a-\u003ePointedList a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pointedlist/docs/Data-List-PointedList.html#v:reversedPrefix",
      "description": {
        "fct-descr": "\u003cp\u003eLens compatible with Control.Lens.\n\u003c/p\u003e",
        "fct-module": "Data.List.PointedList",
        "fct-package": "pointedlist",
        "fct-signature": "([a] -\u003e f [a]) -\u003e PointedList a -\u003e f (PointedList a)",
        "fct-source": "src/Data-List-PointedList.html#reversedPrefix",
        "fct-type": "function",
        "title": "reversedPrefix"
      },
      "index": {
        "description": "Lens compatible with Control.Lens",
        "hierarchy": "Data List PointedList",
        "module": "Data.List.PointedList",
        "name": "reversedPrefix",
        "normalized": "([a]-\u003eb[a])-\u003ePointedList a-\u003eb(PointedList a)",
        "package": "pointedlist",
        "partial": "Prefix",
        "signature": "([a]-\u003ef[a])-\u003ePointedList a-\u003ef(PointedList a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pointedlist/docs/Data-List-PointedList.html#v:singleton",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a \u003ccode\u003e\u003ca\u003ePointedList\u003c/a\u003e\u003c/code\u003e with a single element.\n\u003c/p\u003e",
        "fct-module": "Data.List.PointedList",
        "fct-package": "pointedlist",
        "fct-signature": "a -\u003e PointedList a",
        "fct-source": "src/Data-List-PointedList.html#singleton",
        "fct-type": "function",
        "title": "singleton"
      },
      "index": {
        "description": "Create PointedList with single element",
        "hierarchy": "Data List PointedList",
        "module": "Data.List.PointedList",
        "name": "singleton",
        "normalized": "a-\u003ePointedList a",
        "package": "pointedlist",
        "partial": "",
        "signature": "a-\u003ePointedList a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pointedlist/docs/Data-List-PointedList.html#v:suffix",
      "description": {
        "fct-descr": "\u003cp\u003eLens compatible with Control.Lens.\n\u003c/p\u003e",
        "fct-module": "Data.List.PointedList",
        "fct-package": "pointedlist",
        "fct-signature": "([a] -\u003e f [a]) -\u003e PointedList a -\u003e f (PointedList a)",
        "fct-source": "src/Data-List-PointedList.html#suffix",
        "fct-type": "function",
        "title": "suffix"
      },
      "index": {
        "description": "Lens compatible with Control.Lens",
        "hierarchy": "Data List PointedList",
        "module": "Data.List.PointedList",
        "name": "suffix",
        "normalized": "([a]-\u003eb[a])-\u003ePointedList a-\u003eb(PointedList a)",
        "package": "pointedlist",
        "partial": "",
        "signature": "([a]-\u003ef[a])-\u003ePointedList a-\u003ef(PointedList a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pointedlist/docs/Data-List-PointedList.html#v:tryNext",
      "description": {
        "fct-descr": "\u003cp\u003eAttempt to move the focus to the next element, or \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e if there are\n   no more elements.\n\u003c/p\u003e",
        "fct-module": "Data.List.PointedList",
        "fct-package": "pointedlist",
        "fct-signature": "PointedList a -\u003e PointedList a",
        "fct-source": "src/Data-List-PointedList.html#tryNext",
        "fct-type": "function",
        "title": "tryNext"
      },
      "index": {
        "description": "Attempt to move the focus to the next element or error if there are no more elements",
        "hierarchy": "Data List PointedList",
        "module": "Data.List.PointedList",
        "name": "tryNext",
        "normalized": "PointedList a-\u003ePointedList a",
        "package": "pointedlist",
        "partial": "Next",
        "signature": "PointedList a-\u003ePointedList a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pointedlist/docs/Data-List-PointedList.html#v:tryPrevious",
      "description": {
        "fct-descr": "\u003cp\u003eAttempt to move the focus to the previous element, or \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e if there are\n   no more elements.\n\u003c/p\u003e",
        "fct-module": "Data.List.PointedList",
        "fct-package": "pointedlist",
        "fct-signature": "PointedList a -\u003e PointedList a",
        "fct-source": "src/Data-List-PointedList.html#tryPrevious",
        "fct-type": "function",
        "title": "tryPrevious"
      },
      "index": {
        "description": "Attempt to move the focus to the previous element or error if there are no more elements",
        "hierarchy": "Data List PointedList",
        "module": "Data.List.PointedList",
        "name": "tryPrevious",
        "normalized": "PointedList a-\u003ePointedList a",
        "package": "pointedlist",
        "partial": "Previous",
        "signature": "PointedList a-\u003ePointedList a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pointedlist/docs/Data-List-PointedList.html#v:withFocus",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a \u003ccode\u003e\u003ccode\u003e\u003ca\u003ePointedList\u003c/a\u003e\u003c/code\u003e a\u003c/code\u003e of \u003ccode\u003e(a, \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e)\u003c/code\u003e, in which the boolean values\n   specify whether the current element has the focus. That is, all of the\n   booleans will be \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e, except the focused element.\n\u003c/p\u003e",
        "fct-module": "Data.List.PointedList",
        "fct-package": "pointedlist",
        "fct-signature": "PointedList a -\u003e PointedList (a, Bool)",
        "fct-source": "src/Data-List-PointedList.html#withFocus",
        "fct-type": "function",
        "title": "withFocus"
      },
      "index": {
        "description": "Create PointedList of Bool in which the boolean values specify whether the current element has the focus That is all of the booleans will be False except the focused element",
        "hierarchy": "Data List PointedList",
        "module": "Data.List.PointedList",
        "name": "withFocus",
        "normalized": "PointedList a-\u003ePointedList(a,Bool)",
        "package": "pointedlist",
        "partial": "Focus",
        "signature": "PointedList a-\u003ePointedList(a,Bool)"
      }
    }
  }
]