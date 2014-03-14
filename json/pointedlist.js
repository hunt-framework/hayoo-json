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
        "word": "pointedlist"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.List.PointedList.Circular",
          "name": "Circular",
          "package": "pointedlist",
          "source": "src/Data-List-PointedList-Circular.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data List PointedList Circular",
          "module": "Data.List.PointedList.Circular",
          "name": "Circular",
          "package": "pointedlist",
          "partial": "Circular",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/pointedlist/docs/Data-List-PointedList-Circular.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn alias of \u003ccode\u003e\u003ca\u003edeleteRight\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.List.PointedList.Circular",
          "name": "delete",
          "package": "pointedlist",
          "signature": "PointedList a -\u003e Maybe (PointedList a)",
          "source": "src/Data-List-PointedList-Circular.html#delete",
          "type": "function"
        },
        "index": {
          "description": "An alias of deleteRight",
          "hierarchy": "Data List PointedList Circular",
          "module": "Data.List.PointedList.Circular",
          "name": "delete",
          "normalized": "PointedList a-\u003eMaybe(PointedList a)",
          "package": "pointedlist",
          "signature": "PointedList a-\u003eMaybe(PointedList a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointedlist/docs/Data-List-PointedList-Circular.html#v:delete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePossibly delete the element at the focus, then move the element on the\n   left to the focus. If no element is on the left, focus on the element to\n   the right. If the deletion will cause the list to be empty, return\n   \u003ccode\u003eNothing\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.List.PointedList.Circular",
          "name": "deleteLeft",
          "package": "pointedlist",
          "signature": "PointedList a -\u003e Maybe (PointedList a)",
          "source": "src/Data-List-PointedList-Circular.html#deleteLeft",
          "type": "function"
        },
        "index": {
          "description": "Possibly delete the element at the focus then move the element on the left to the focus If no element is on the left focus on the element to the right If the deletion will cause the list to be empty return Nothing",
          "hierarchy": "Data List PointedList Circular",
          "module": "Data.List.PointedList.Circular",
          "name": "deleteLeft",
          "normalized": "PointedList a-\u003eMaybe(PointedList a)",
          "package": "pointedlist",
          "partial": "Left",
          "signature": "PointedList a-\u003eMaybe(PointedList a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointedlist/docs/Data-List-PointedList-Circular.html#v:deleteLeft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePossibly delete the element at the focus, then move the element on the\n   right to the focus. If no element is on the right, focus on the element to\n   the left. If the deletion will cause the list to be empty, return\n   \u003ccode\u003eNothing\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.List.PointedList.Circular",
          "name": "deleteRight",
          "package": "pointedlist",
          "signature": "PointedList a -\u003e Maybe (PointedList a)",
          "source": "src/Data-List-PointedList-Circular.html#deleteRight",
          "type": "function"
        },
        "index": {
          "description": "Possibly delete the element at the focus then move the element on the right to the focus If no element is on the right focus on the element to the left If the deletion will cause the list to be empty return Nothing",
          "hierarchy": "Data List PointedList Circular",
          "module": "Data.List.PointedList.Circular",
          "name": "deleteRight",
          "normalized": "PointedList a-\u003eMaybe(PointedList a)",
          "package": "pointedlist",
          "partial": "Right",
          "signature": "PointedList a-\u003eMaybe(PointedList a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointedlist/docs/Data-List-PointedList-Circular.html#v:deleteRight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMove\n\u003c/p\u003e",
          "module": "Data.List.PointedList.Circular",
          "name": "moveN",
          "package": "pointedlist",
          "signature": "Int -\u003e PointedList a -\u003e PointedList a",
          "source": "src/Data-List-PointedList-Circular.html#moveN",
          "type": "function"
        },
        "index": {
          "description": "Move",
          "hierarchy": "Data List PointedList Circular",
          "module": "Data.List.PointedList.Circular",
          "name": "moveN",
          "normalized": "Int-\u003ePointedList a-\u003ePointedList a",
          "package": "pointedlist",
          "signature": "Int-\u003ePointedList a-\u003ePointedList a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointedlist/docs/Data-List-PointedList-Circular.html#v:moveN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMove the focus to the next element in the list. If the last element is\n   currently focused, loop to the first element.\n\u003c/p\u003e",
          "module": "Data.List.PointedList.Circular",
          "name": "next",
          "package": "pointedlist",
          "signature": "PointedList a -\u003e PointedList a",
          "source": "src/Data-List-PointedList-Circular.html#next",
          "type": "function"
        },
        "index": {
          "description": "Move the focus to the next element in the list If the last element is currently focused loop to the first element",
          "hierarchy": "Data List PointedList Circular",
          "module": "Data.List.PointedList.Circular",
          "name": "next",
          "normalized": "PointedList a-\u003ePointedList a",
          "package": "pointedlist",
          "signature": "PointedList a-\u003ePointedList a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointedlist/docs/Data-List-PointedList-Circular.html#v:next"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMove the focus to the previous element in the list. If the first element is\n   currently focused, loop to the last element.\n\u003c/p\u003e",
          "module": "Data.List.PointedList.Circular",
          "name": "previous",
          "package": "pointedlist",
          "signature": "PointedList a -\u003e PointedList a",
          "source": "src/Data-List-PointedList-Circular.html#previous",
          "type": "function"
        },
        "index": {
          "description": "Move the focus to the previous element in the list If the first element is currently focused loop to the last element",
          "hierarchy": "Data List PointedList Circular",
          "module": "Data.List.PointedList.Circular",
          "name": "previous",
          "normalized": "PointedList a-\u003ePointedList a",
          "package": "pointedlist",
          "signature": "PointedList a-\u003ePointedList a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointedlist/docs/Data-List-PointedList-Circular.html#v:previous"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn implementation of a zipper-like non-empty list structure that tracks\n   an index position in the list (the \u003ccode\u003e\u003ca\u003efocus\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.List.PointedList",
          "name": "PointedList",
          "package": "pointedlist",
          "source": "src/Data-List-PointedList.html",
          "type": "module"
        },
        "index": {
          "description": "An implementation of zipper-like non-empty list structure that tracks an index position in the list the focus",
          "hierarchy": "Data List PointedList",
          "module": "Data.List.PointedList",
          "name": "PointedList",
          "package": "pointedlist",
          "partial": "Pointed List",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/pointedlist/docs/Data-List-PointedList.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe implementation of the pointed list structure which tracks the current\n   position in the list structure.\n\u003c/p\u003e",
          "module": "Data.List.PointedList",
          "name": "PointedList",
          "package": "pointedlist",
          "source": "src/Data-List-PointedList.html#PointedList",
          "type": "data"
        },
        "index": {
          "description": "The implementation of the pointed list structure which tracks the current position in the list structure",
          "hierarchy": "Data List PointedList",
          "module": "Data.List.PointedList",
          "name": "PointedList",
          "package": "pointedlist",
          "partial": "Pointed List",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pointedlist/docs/Data-List-PointedList.html#t:PointedList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.List.PointedList",
          "name": "PointedList",
          "package": "pointedlist",
          "signature": "PointedList",
          "source": "src/Data-List-PointedList.html#PointedList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data List PointedList",
          "module": "Data.List.PointedList",
          "name": "PointedList",
          "package": "pointedlist",
          "partial": "Pointed List",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointedlist/docs/Data-List-PointedList.html#v:PointedList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.List.PointedList",
          "name": "_focus",
          "package": "pointedlist",
          "signature": "a",
          "source": "src/Data-List-PointedList.html#PointedList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data List PointedList",
          "module": "Data.List.PointedList",
          "name": "_focus",
          "package": "pointedlist",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointedlist/docs/Data-List-PointedList.html#v:_focus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.List.PointedList",
          "name": "_reversedPrefix",
          "package": "pointedlist",
          "signature": "[a]",
          "source": "src/Data-List-PointedList.html#PointedList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data List PointedList",
          "module": "Data.List.PointedList",
          "name": "_reversedPrefix",
          "normalized": "[a]",
          "package": "pointedlist",
          "partial": "Prefix",
          "signature": "[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointedlist/docs/Data-List-PointedList.html#v:_reversedPrefix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.List.PointedList",
          "name": "_suffix",
          "package": "pointedlist",
          "signature": "[a]",
          "source": "src/Data-List-PointedList.html#PointedList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data List PointedList",
          "module": "Data.List.PointedList",
          "name": "_suffix",
          "normalized": "[a]",
          "package": "pointedlist",
          "signature": "[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointedlist/docs/Data-List-PointedList.html#v:_suffix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhether the focus is the last element.\n\u003c/p\u003e",
          "module": "Data.List.PointedList",
          "name": "atEnd",
          "package": "pointedlist",
          "signature": "PointedList a -\u003e Bool",
          "source": "src/Data-List-PointedList.html#atEnd",
          "type": "function"
        },
        "index": {
          "description": "Whether the focus is the last element",
          "hierarchy": "Data List PointedList",
          "module": "Data.List.PointedList",
          "name": "atEnd",
          "normalized": "PointedList a-\u003eBool",
          "package": "pointedlist",
          "partial": "End",
          "signature": "PointedList a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointedlist/docs/Data-List-PointedList.html#v:atEnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhether the focus is the first element.\n\u003c/p\u003e",
          "module": "Data.List.PointedList",
          "name": "atStart",
          "package": "pointedlist",
          "signature": "PointedList a -\u003e Bool",
          "source": "src/Data-List-PointedList.html#atStart",
          "type": "function"
        },
        "index": {
          "description": "Whether the focus is the first element",
          "hierarchy": "Data List PointedList",
          "module": "Data.List.PointedList",
          "name": "atStart",
          "normalized": "PointedList a-\u003eBool",
          "package": "pointedlist",
          "partial": "Start",
          "signature": "PointedList a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointedlist/docs/Data-List-PointedList.html#v:atStart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap over the \u003ccode\u003e\u003ca\u003ePointedList\u003c/a\u003e\u003c/code\u003es created via \u003ccode\u003e\u003ca\u003epositions\u003c/a\u003e\u003c/code\u003e, such that \u003ccode\u003ef\u003c/code\u003e is\t\n   called with each element of the list focused in the provided\n   \u003ccode\u003e\u003ca\u003ePointedList\u003c/a\u003e\u003c/code\u003e. An example makes this easier to understand:\n\u003c/p\u003e\u003cpre\u003e contextMap atStart (fromJust $ fromList [1..5])\n\u003c/pre\u003e",
          "module": "Data.List.PointedList",
          "name": "contextMap",
          "package": "pointedlist",
          "signature": "(PointedList a -\u003e b) -\u003e PointedList a -\u003e PointedList b",
          "source": "src/Data-List-PointedList.html#contextMap",
          "type": "function"
        },
        "index": {
          "description": "Map over the PointedList created via positions such that is called with each element of the list focused in the provided PointedList An example makes this easier to understand contextMap atStart fromJust fromList",
          "hierarchy": "Data List PointedList",
          "module": "Data.List.PointedList",
          "name": "contextMap",
          "normalized": "(PointedList a-\u003eb)-\u003ePointedList a-\u003ePointedList b",
          "package": "pointedlist",
          "partial": "Map",
          "signature": "(PointedList a-\u003eb)-\u003ePointedList a-\u003ePointedList b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointedlist/docs/Data-List-PointedList.html#v:contextMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn alias of \u003ccode\u003e\u003ca\u003edeleteRight\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.List.PointedList",
          "name": "delete",
          "package": "pointedlist",
          "signature": "PointedList a -\u003e Maybe (PointedList a)",
          "source": "src/Data-List-PointedList.html#delete",
          "type": "function"
        },
        "index": {
          "description": "An alias of deleteRight",
          "hierarchy": "Data List PointedList",
          "module": "Data.List.PointedList",
          "name": "delete",
          "normalized": "PointedList a-\u003eMaybe(PointedList a)",
          "package": "pointedlist",
          "signature": "PointedList a-\u003eMaybe(PointedList a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointedlist/docs/Data-List-PointedList.html#v:delete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePossibly delete the element at the focus, then move the element on the\n   left to the focus. If no element is on the left, focus on the element to\n   the right. If the deletion will cause the list to be empty, return\n   \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.List.PointedList",
          "name": "deleteLeft",
          "package": "pointedlist",
          "signature": "PointedList a -\u003e Maybe (PointedList a)",
          "source": "src/Data-List-PointedList.html#deleteLeft",
          "type": "function"
        },
        "index": {
          "description": "Possibly delete the element at the focus then move the element on the left to the focus If no element is on the left focus on the element to the right If the deletion will cause the list to be empty return Nothing",
          "hierarchy": "Data List PointedList",
          "module": "Data.List.PointedList",
          "name": "deleteLeft",
          "normalized": "PointedList a-\u003eMaybe(PointedList a)",
          "package": "pointedlist",
          "partial": "Left",
          "signature": "PointedList a-\u003eMaybe(PointedList a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointedlist/docs/Data-List-PointedList.html#v:deleteLeft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelete all elements in the list except the focus.\n\u003c/p\u003e",
          "module": "Data.List.PointedList",
          "name": "deleteOthers",
          "package": "pointedlist",
          "signature": "PointedList a -\u003e PointedList a",
          "source": "src/Data-List-PointedList.html#deleteOthers",
          "type": "function"
        },
        "index": {
          "description": "Delete all elements in the list except the focus",
          "hierarchy": "Data List PointedList",
          "module": "Data.List.PointedList",
          "name": "deleteOthers",
          "normalized": "PointedList a-\u003ePointedList a",
          "package": "pointedlist",
          "partial": "Others",
          "signature": "PointedList a-\u003ePointedList a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointedlist/docs/Data-List-PointedList.html#v:deleteOthers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePossibly delete the element at the focus, then move the element on the\n   right to the focus. If no element is on the right, focus on the element to\n   the left. If the deletion will cause the list to be empty, return\n   \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.List.PointedList",
          "name": "deleteRight",
          "package": "pointedlist",
          "signature": "PointedList a -\u003e Maybe (PointedList a)",
          "source": "src/Data-List-PointedList.html#deleteRight",
          "type": "function"
        },
        "index": {
          "description": "Possibly delete the element at the focus then move the element on the right to the focus If no element is on the right focus on the element to the left If the deletion will cause the list to be empty return Nothing",
          "hierarchy": "Data List PointedList",
          "module": "Data.List.PointedList",
          "name": "deleteRight",
          "normalized": "PointedList a-\u003eMaybe(PointedList a)",
          "package": "pointedlist",
          "partial": "Right",
          "signature": "PointedList a-\u003eMaybe(PointedList a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointedlist/docs/Data-List-PointedList.html#v:deleteRight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMove the focus to the specified element, if it is present.\n\u003c/p\u003e\u003cp\u003ePatch with much faster algorithm provided by Runar Bjarnason for version\n   0.3.2. Improved again by Runar Bjarnason for version 0.3.3 to support\n   infinite lists on both sides of the focus.\n\u003c/p\u003e",
          "module": "Data.List.PointedList",
          "name": "find",
          "package": "pointedlist",
          "signature": "a -\u003e PointedList a -\u003e Maybe (PointedList a)",
          "source": "src/Data-List-PointedList.html#find",
          "type": "function"
        },
        "index": {
          "description": "Move the focus to the specified element if it is present Patch with much faster algorithm provided by Runar Bjarnason for version Improved again by Runar Bjarnason for version to support infinite lists on both sides of the focus",
          "hierarchy": "Data List PointedList",
          "module": "Data.List.PointedList",
          "name": "find",
          "normalized": "a-\u003ePointedList a-\u003eMaybe(PointedList a)",
          "package": "pointedlist",
          "signature": "a-\u003ePointedList a-\u003eMaybe(PointedList a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointedlist/docs/Data-List-PointedList.html#v:find"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLens compatible with Control.Lens.\n\u003c/p\u003e",
          "module": "Data.List.PointedList",
          "name": "focus",
          "package": "pointedlist",
          "signature": "(a -\u003e f a) -\u003e PointedList a -\u003e f (PointedList a)",
          "source": "src/Data-List-PointedList.html#focus",
          "type": "function"
        },
        "index": {
          "description": "Lens compatible with Control.Lens",
          "hierarchy": "Data List PointedList",
          "module": "Data.List.PointedList",
          "name": "focus",
          "normalized": "(a-\u003eb a)-\u003ePointedList a-\u003eb(PointedList a)",
          "package": "pointedlist",
          "signature": "(a-\u003ef a)-\u003ePointedList a-\u003ef(PointedList a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointedlist/docs/Data-List-PointedList.html#v:focus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePossibly create a \u003ccode\u003e\u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003ePointedList\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e if the provided list has at least\n   one element; otherwise, return Nothing.\n\u003c/p\u003e\u003cp\u003eThe provided list's head will be the focus of the list, and the rest of\n   list will follow on the right side.\n\u003c/p\u003e",
          "module": "Data.List.PointedList",
          "name": "fromList",
          "package": "pointedlist",
          "signature": "[a] -\u003e Maybe (PointedList a)",
          "source": "src/Data-List-PointedList.html#fromList",
          "type": "function"
        },
        "index": {
          "description": "Possibly create Just PointedList if the provided list has at least one element otherwise return Nothing The provided list head will be the focus of the list and the rest of list will follow on the right side",
          "hierarchy": "Data List PointedList",
          "module": "Data.List.PointedList",
          "name": "fromList",
          "normalized": "[a]-\u003eMaybe(PointedList a)",
          "package": "pointedlist",
          "partial": "List",
          "signature": "[a]-\u003eMaybe(PointedList a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointedlist/docs/Data-List-PointedList.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePossibly create a \u003ccode\u003e\u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003ePointedList\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e if the provided list has at least\n   one element; otherwise, return Nothing.\n\u003c/p\u003e\u003cp\u003eThe provided list's last element will be the focus of the list, following\n   the rest of the list in order, to the left.\n\u003c/p\u003e",
          "module": "Data.List.PointedList",
          "name": "fromListEnd",
          "package": "pointedlist",
          "signature": "[a] -\u003e Maybe (PointedList a)",
          "source": "src/Data-List-PointedList.html#fromListEnd",
          "type": "function"
        },
        "index": {
          "description": "Possibly create Just PointedList if the provided list has at least one element otherwise return Nothing The provided list last element will be the focus of the list following the rest of the list in order to the left",
          "hierarchy": "Data List PointedList",
          "module": "Data.List.PointedList",
          "name": "fromListEnd",
          "normalized": "[a]-\u003eMaybe(PointedList a)",
          "package": "pointedlist",
          "partial": "List End",
          "signature": "[a]-\u003eMaybe(PointedList a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointedlist/docs/Data-List-PointedList.html#v:fromListEnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe index of the focus, leftmost is 0.\n\u003c/p\u003e",
          "module": "Data.List.PointedList",
          "name": "index",
          "package": "pointedlist",
          "signature": "PointedList a -\u003e Int",
          "source": "src/Data-List-PointedList.html#index",
          "type": "function"
        },
        "index": {
          "description": "The index of the focus leftmost is",
          "hierarchy": "Data List PointedList",
          "module": "Data.List.PointedList",
          "name": "index",
          "normalized": "PointedList a-\u003eInt",
          "package": "pointedlist",
          "signature": "PointedList a-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointedlist/docs/Data-List-PointedList.html#v:index"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn alias for \u003ccode\u003e\u003ca\u003einsertRight\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.List.PointedList",
          "name": "insert",
          "package": "pointedlist",
          "signature": "a -\u003e PointedList a -\u003e PointedList a",
          "source": "src/Data-List-PointedList.html#insert",
          "type": "function"
        },
        "index": {
          "description": "An alias for insertRight",
          "hierarchy": "Data List PointedList",
          "module": "Data.List.PointedList",
          "name": "insert",
          "normalized": "a-\u003ePointedList a-\u003ePointedList a",
          "package": "pointedlist",
          "signature": "a-\u003ePointedList a-\u003ePointedList a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointedlist/docs/Data-List-PointedList.html#v:insert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInsert an element to the left of the focus, then move the focus to the new\n   element.\n\u003c/p\u003e",
          "module": "Data.List.PointedList",
          "name": "insertLeft",
          "package": "pointedlist",
          "signature": "a -\u003e PointedList a -\u003e PointedList a",
          "source": "src/Data-List-PointedList.html#insertLeft",
          "type": "function"
        },
        "index": {
          "description": "Insert an element to the left of the focus then move the focus to the new element",
          "hierarchy": "Data List PointedList",
          "module": "Data.List.PointedList",
          "name": "insertLeft",
          "normalized": "a-\u003ePointedList a-\u003ePointedList a",
          "package": "pointedlist",
          "partial": "Left",
          "signature": "a-\u003ePointedList a-\u003ePointedList a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointedlist/docs/Data-List-PointedList.html#v:insertLeft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInsert an element to the right of the focus, then move the focus to the\n   new element.\n\u003c/p\u003e",
          "module": "Data.List.PointedList",
          "name": "insertRight",
          "package": "pointedlist",
          "signature": "a -\u003e PointedList a -\u003e PointedList a",
          "source": "src/Data-List-PointedList.html#insertRight",
          "type": "function"
        },
        "index": {
          "description": "Insert an element to the right of the focus then move the focus to the new element",
          "hierarchy": "Data List PointedList",
          "module": "Data.List.PointedList",
          "name": "insertRight",
          "normalized": "a-\u003ePointedList a-\u003ePointedList a",
          "package": "pointedlist",
          "partial": "Right",
          "signature": "a-\u003ePointedList a-\u003ePointedList a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointedlist/docs/Data-List-PointedList.html#v:insertRight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe length of the list.\n\u003c/p\u003e",
          "module": "Data.List.PointedList",
          "name": "length",
          "package": "pointedlist",
          "signature": "PointedList a -\u003e Int",
          "source": "src/Data-List-PointedList.html#length",
          "type": "function"
        },
        "index": {
          "description": "The length of the list",
          "hierarchy": "Data List PointedList",
          "module": "Data.List.PointedList",
          "name": "length",
          "normalized": "PointedList a-\u003eInt",
          "package": "pointedlist",
          "signature": "PointedList a-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointedlist/docs/Data-List-PointedList.html#v:length"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMove the focus by \u003ccode\u003en\u003c/code\u003e, relative to the current index. Negative values move\n   the focus backwards, positive values more forwards through the list.\n\u003c/p\u003e",
          "module": "Data.List.PointedList",
          "name": "moveN",
          "package": "pointedlist",
          "signature": "Int -\u003e PointedList a -\u003e Maybe (PointedList a)",
          "source": "src/Data-List-PointedList.html#moveN",
          "type": "function"
        },
        "index": {
          "description": "Move the focus by relative to the current index Negative values move the focus backwards positive values more forwards through the list",
          "hierarchy": "Data List PointedList",
          "module": "Data.List.PointedList",
          "name": "moveN",
          "normalized": "Int-\u003ePointedList a-\u003eMaybe(PointedList a)",
          "package": "pointedlist",
          "signature": "Int-\u003ePointedList a-\u003eMaybe(PointedList a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointedlist/docs/Data-List-PointedList.html#v:moveN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMove the focus to the specified index. The first element is at index 0.\n\u003c/p\u003e",
          "module": "Data.List.PointedList",
          "name": "moveTo",
          "package": "pointedlist",
          "signature": "Int -\u003e PointedList a -\u003e Maybe (PointedList a)",
          "source": "src/Data-List-PointedList.html#moveTo",
          "type": "function"
        },
        "index": {
          "description": "Move the focus to the specified index The first element is at index",
          "hierarchy": "Data List PointedList",
          "module": "Data.List.PointedList",
          "name": "moveTo",
          "normalized": "Int-\u003ePointedList a-\u003eMaybe(PointedList a)",
          "package": "pointedlist",
          "partial": "To",
          "signature": "Int-\u003ePointedList a-\u003eMaybe(PointedList a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointedlist/docs/Data-List-PointedList.html#v:moveTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePossibly move the focus to the next element in the list.\n\u003c/p\u003e",
          "module": "Data.List.PointedList",
          "name": "next",
          "package": "pointedlist",
          "signature": "PointedList a -\u003e Maybe (PointedList a)",
          "source": "src/Data-List-PointedList.html#next",
          "type": "function"
        },
        "index": {
          "description": "Possibly move the focus to the next element in the list",
          "hierarchy": "Data List PointedList",
          "module": "Data.List.PointedList",
          "name": "next",
          "normalized": "PointedList a-\u003eMaybe(PointedList a)",
          "package": "pointedlist",
          "signature": "PointedList a-\u003eMaybe(PointedList a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointedlist/docs/Data-List-PointedList.html#v:next"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a \u003ccode\u003e\u003ca\u003ePointedList\u003c/a\u003e\u003c/code\u003e of variations of the provided \u003ccode\u003e\u003ca\u003ePointedList\u003c/a\u003e\u003c/code\u003e, in\n   which each element is focused, with the provided \u003ccode\u003e\u003ca\u003ePointedList\u003c/a\u003e\u003c/code\u003e as the\n   focus of the sets.\n\u003c/p\u003e",
          "module": "Data.List.PointedList",
          "name": "positions",
          "package": "pointedlist",
          "signature": "PointedList a -\u003e PointedList (PointedList a)",
          "source": "src/Data-List-PointedList.html#positions",
          "type": "function"
        },
        "index": {
          "description": "Create PointedList of variations of the provided PointedList in which each element is focused with the provided PointedList as the focus of the sets",
          "hierarchy": "Data List PointedList",
          "module": "Data.List.PointedList",
          "name": "positions",
          "normalized": "PointedList a-\u003ePointedList(PointedList a)",
          "package": "pointedlist",
          "signature": "PointedList a-\u003ePointedList(PointedList a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointedlist/docs/Data-List-PointedList.html#v:positions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLens compatible with Control.Lens.\n Internally reversing the prefix list.\n\u003c/p\u003e",
          "module": "Data.List.PointedList",
          "name": "prefix",
          "package": "pointedlist",
          "signature": "([a] -\u003e f [a]) -\u003e PointedList a -\u003e f (PointedList a)",
          "source": "src/Data-List-PointedList.html#prefix",
          "type": "function"
        },
        "index": {
          "description": "Lens compatible with Control.Lens Internally reversing the prefix list",
          "hierarchy": "Data List PointedList",
          "module": "Data.List.PointedList",
          "name": "prefix",
          "normalized": "([a]-\u003eb[a])-\u003ePointedList a-\u003eb(PointedList a)",
          "package": "pointedlist",
          "signature": "([a]-\u003ef[a])-\u003ePointedList a-\u003ef(PointedList a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointedlist/docs/Data-List-PointedList.html#v:prefix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePossibly move the focus to the previous element in the list.\n\u003c/p\u003e",
          "module": "Data.List.PointedList",
          "name": "previous",
          "package": "pointedlist",
          "signature": "PointedList a -\u003e Maybe (PointedList a)",
          "source": "src/Data-List-PointedList.html#previous",
          "type": "function"
        },
        "index": {
          "description": "Possibly move the focus to the previous element in the list",
          "hierarchy": "Data List PointedList",
          "module": "Data.List.PointedList",
          "name": "previous",
          "normalized": "PointedList a-\u003eMaybe(PointedList a)",
          "package": "pointedlist",
          "signature": "PointedList a-\u003eMaybe(PointedList a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointedlist/docs/Data-List-PointedList.html#v:previous"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReplace the focus of the list, retaining the prefix and suffix.\n\u003c/p\u003e",
          "module": "Data.List.PointedList",
          "name": "replace",
          "package": "pointedlist",
          "signature": "a -\u003e PointedList a -\u003e PointedList a",
          "source": "src/Data-List-PointedList.html#replace",
          "type": "function"
        },
        "index": {
          "description": "Replace the focus of the list retaining the prefix and suffix",
          "hierarchy": "Data List PointedList",
          "module": "Data.List.PointedList",
          "name": "replace",
          "normalized": "a-\u003ePointedList a-\u003ePointedList a",
          "package": "pointedlist",
          "signature": "a-\u003ePointedList a-\u003ePointedList a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointedlist/docs/Data-List-PointedList.html#v:replace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLens compatible with Control.Lens.\n\u003c/p\u003e",
          "module": "Data.List.PointedList",
          "name": "reversedPrefix",
          "package": "pointedlist",
          "signature": "([a] -\u003e f [a]) -\u003e PointedList a -\u003e f (PointedList a)",
          "source": "src/Data-List-PointedList.html#reversedPrefix",
          "type": "function"
        },
        "index": {
          "description": "Lens compatible with Control.Lens",
          "hierarchy": "Data List PointedList",
          "module": "Data.List.PointedList",
          "name": "reversedPrefix",
          "normalized": "([a]-\u003eb[a])-\u003ePointedList a-\u003eb(PointedList a)",
          "package": "pointedlist",
          "partial": "Prefix",
          "signature": "([a]-\u003ef[a])-\u003ePointedList a-\u003ef(PointedList a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointedlist/docs/Data-List-PointedList.html#v:reversedPrefix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a \u003ccode\u003e\u003ca\u003ePointedList\u003c/a\u003e\u003c/code\u003e with a single element.\n\u003c/p\u003e",
          "module": "Data.List.PointedList",
          "name": "singleton",
          "package": "pointedlist",
          "signature": "a -\u003e PointedList a",
          "source": "src/Data-List-PointedList.html#singleton",
          "type": "function"
        },
        "index": {
          "description": "Create PointedList with single element",
          "hierarchy": "Data List PointedList",
          "module": "Data.List.PointedList",
          "name": "singleton",
          "normalized": "a-\u003ePointedList a",
          "package": "pointedlist",
          "signature": "a-\u003ePointedList a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointedlist/docs/Data-List-PointedList.html#v:singleton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLens compatible with Control.Lens.\n\u003c/p\u003e",
          "module": "Data.List.PointedList",
          "name": "suffix",
          "package": "pointedlist",
          "signature": "([a] -\u003e f [a]) -\u003e PointedList a -\u003e f (PointedList a)",
          "source": "src/Data-List-PointedList.html#suffix",
          "type": "function"
        },
        "index": {
          "description": "Lens compatible with Control.Lens",
          "hierarchy": "Data List PointedList",
          "module": "Data.List.PointedList",
          "name": "suffix",
          "normalized": "([a]-\u003eb[a])-\u003ePointedList a-\u003eb(PointedList a)",
          "package": "pointedlist",
          "signature": "([a]-\u003ef[a])-\u003ePointedList a-\u003ef(PointedList a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointedlist/docs/Data-List-PointedList.html#v:suffix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAttempt to move the focus to the next element, or \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e if there are\n   no more elements.\n\u003c/p\u003e",
          "module": "Data.List.PointedList",
          "name": "tryNext",
          "package": "pointedlist",
          "signature": "PointedList a -\u003e PointedList a",
          "source": "src/Data-List-PointedList.html#tryNext",
          "type": "function"
        },
        "index": {
          "description": "Attempt to move the focus to the next element or error if there are no more elements",
          "hierarchy": "Data List PointedList",
          "module": "Data.List.PointedList",
          "name": "tryNext",
          "normalized": "PointedList a-\u003ePointedList a",
          "package": "pointedlist",
          "partial": "Next",
          "signature": "PointedList a-\u003ePointedList a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointedlist/docs/Data-List-PointedList.html#v:tryNext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAttempt to move the focus to the previous element, or \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e if there are\n   no more elements.\n\u003c/p\u003e",
          "module": "Data.List.PointedList",
          "name": "tryPrevious",
          "package": "pointedlist",
          "signature": "PointedList a -\u003e PointedList a",
          "source": "src/Data-List-PointedList.html#tryPrevious",
          "type": "function"
        },
        "index": {
          "description": "Attempt to move the focus to the previous element or error if there are no more elements",
          "hierarchy": "Data List PointedList",
          "module": "Data.List.PointedList",
          "name": "tryPrevious",
          "normalized": "PointedList a-\u003ePointedList a",
          "package": "pointedlist",
          "partial": "Previous",
          "signature": "PointedList a-\u003ePointedList a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointedlist/docs/Data-List-PointedList.html#v:tryPrevious"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a \u003ccode\u003e\u003ccode\u003e\u003ca\u003ePointedList\u003c/a\u003e\u003c/code\u003e a\u003c/code\u003e of \u003ccode\u003e(a, \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e)\u003c/code\u003e, in which the boolean values\n   specify whether the current element has the focus. That is, all of the\n   booleans will be \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e, except the focused element.\n\u003c/p\u003e",
          "module": "Data.List.PointedList",
          "name": "withFocus",
          "package": "pointedlist",
          "signature": "PointedList a -\u003e PointedList (a, Bool)",
          "source": "src/Data-List-PointedList.html#withFocus",
          "type": "function"
        },
        "index": {
          "description": "Create PointedList of Bool in which the boolean values specify whether the current element has the focus That is all of the booleans will be False except the focused element",
          "hierarchy": "Data List PointedList",
          "module": "Data.List.PointedList",
          "name": "withFocus",
          "normalized": "PointedList a-\u003ePointedList(a,Bool)",
          "package": "pointedlist",
          "partial": "Focus",
          "signature": "PointedList a-\u003ePointedList(a,Bool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pointedlist/docs/Data-List-PointedList.html#v:withFocus"
      }
    }
  ]
]