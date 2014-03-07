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
        "word": "lui"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.LUI.Accessor",
          "name": "Accessor",
          "package": "lui",
          "source": "src/Graphics-UI-LUI-Accessor.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Graphics UI LUI Accessor",
          "module": "Graphics.UI.LUI.Accessor",
          "name": "Accessor",
          "package": "lui",
          "partial": "Accessor",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/lui/docs/Graphics-UI-LUI-Accessor.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.LUI.Accessor",
          "name": "Accessor",
          "package": "lui",
          "source": "src/Graphics-UI-LUI-Accessor.html#Accessor",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics UI LUI Accessor",
          "module": "Graphics.UI.LUI.Accessor",
          "name": "Accessor",
          "package": "lui",
          "partial": "Accessor",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/lui/docs/Graphics-UI-LUI-Accessor.html#t:Accessor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.LUI.Accessor",
          "name": "(\u003c^)",
          "package": "lui",
          "signature": "Accessor b c -\u003e Accessor a b -\u003e Accessor a c",
          "source": "src/Graphics-UI-LUI-Accessor.html#%3C%5E",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI LUI Accessor",
          "module": "Graphics.UI.LUI.Accessor",
          "name": "(\u003c^) \u003c^",
          "normalized": "Accessor a b-\u003eAccessor c a-\u003eAccessor c b",
          "package": "lui",
          "signature": "Accessor b c-\u003eAccessor a b-\u003eAccessor a c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lui/docs/Graphics-UI-LUI-Accessor.html#v:-60--94-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.LUI.Accessor",
          "name": "(^\u003e)",
          "package": "lui",
          "signature": "Accessor a b -\u003e Accessor b c -\u003e Accessor a c",
          "source": "src/Graphics-UI-LUI-Accessor.html#%5E%3E",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI LUI Accessor",
          "module": "Graphics.UI.LUI.Accessor",
          "name": "(^\u003e) ^\u003e",
          "normalized": "Accessor a b-\u003eAccessor b c-\u003eAccessor a c",
          "package": "lui",
          "signature": "Accessor a b-\u003eAccessor b c-\u003eAccessor a c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lui/docs/Graphics-UI-LUI-Accessor.html#v:-94--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.LUI.Accessor",
          "name": "(^.)",
          "package": "lui",
          "signature": "whole -\u003e Accessor whole part -\u003e part",
          "source": "src/Graphics-UI-LUI-Accessor.html#%5E.",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI LUI Accessor",
          "module": "Graphics.UI.LUI.Accessor",
          "name": "(^.) ^.",
          "normalized": "a-\u003eAccessor a b-\u003eb",
          "package": "lui",
          "signature": "whole-\u003eAccessor whole part-\u003epart",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lui/docs/Graphics-UI-LUI-Accessor.html#v:-94-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.LUI.Accessor",
          "name": "(^:)",
          "package": "lui",
          "signature": "Accessor whole part -\u003e (part -\u003e part) -\u003e whole -\u003e whole",
          "source": "src/Graphics-UI-LUI-Accessor.html#%5E%3A",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI LUI Accessor",
          "module": "Graphics.UI.LUI.Accessor",
          "name": "(^:) ^:",
          "normalized": "Accessor a b-\u003e(b-\u003eb)-\u003ea-\u003ea",
          "package": "lui",
          "signature": "Accessor whole part-\u003e(part-\u003epart)-\u003ewhole-\u003ewhole",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lui/docs/Graphics-UI-LUI-Accessor.html#v:-94-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.LUI.Accessor",
          "name": "aMapValue",
          "package": "lui",
          "signature": "k -\u003e Accessor (Map k a) a",
          "source": "src/Graphics-UI-LUI-Accessor.html#aMapValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI LUI Accessor",
          "module": "Graphics.UI.LUI.Accessor",
          "name": "aMapValue",
          "normalized": "a-\u003eAccessor(Map a b)b",
          "package": "lui",
          "partial": "Map Value",
          "signature": "k-\u003eAccessor(Map k a)a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lui/docs/Graphics-UI-LUI-Accessor.html#v:aMapValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.LUI.Accessor",
          "name": "aMapValueDefault",
          "package": "lui",
          "signature": "a -\u003e k -\u003e Accessor (Map k a) a",
          "source": "src/Graphics-UI-LUI-Accessor.html#aMapValueDefault",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI LUI Accessor",
          "module": "Graphics.UI.LUI.Accessor",
          "name": "aMapValueDefault",
          "normalized": "a-\u003eb-\u003eAccessor(Map b a)a",
          "package": "lui",
          "partial": "Map Value Default",
          "signature": "a-\u003ek-\u003eAccessor(Map k a)a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lui/docs/Graphics-UI-LUI-Accessor.html#v:aMapValueDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.LUI.Accessor",
          "name": "accessor",
          "package": "lui",
          "signature": "(whole -\u003e part) -\u003e (part -\u003e whole -\u003e whole) -\u003e Accessor whole part",
          "source": "src/Graphics-UI-LUI-Accessor.html#accessor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI LUI Accessor",
          "module": "Graphics.UI.LUI.Accessor",
          "name": "accessor",
          "normalized": "(a-\u003eb)-\u003e(b-\u003ea-\u003ea)-\u003eAccessor a b",
          "package": "lui",
          "signature": "(whole-\u003epart)-\u003e(part-\u003ewhole-\u003ewhole)-\u003eAccessor whole part",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lui/docs/Graphics-UI-LUI-Accessor.html#v:accessor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.LUI.Accessor",
          "name": "afirst",
          "package": "lui",
          "signature": "Accessor (a, b) a",
          "source": "src/Graphics-UI-LUI-Accessor.html#afirst",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI LUI Accessor",
          "module": "Graphics.UI.LUI.Accessor",
          "name": "afirst",
          "normalized": "Accessor(a,b)a",
          "package": "lui",
          "signature": "Accessor(a,b)a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lui/docs/Graphics-UI-LUI-Accessor.html#v:afirst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.LUI.Accessor",
          "name": "anth",
          "package": "lui",
          "signature": "Int -\u003e Accessor [a] a",
          "source": "src/Graphics-UI-LUI-Accessor.html#anth",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI LUI Accessor",
          "module": "Graphics.UI.LUI.Accessor",
          "name": "anth",
          "normalized": "Int-\u003eAccessor[a]a",
          "package": "lui",
          "signature": "Int-\u003eAccessor[a]a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lui/docs/Graphics-UI-LUI-Accessor.html#v:anth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.LUI.Accessor",
          "name": "asecond",
          "package": "lui",
          "signature": "Accessor (a, b) b",
          "source": "src/Graphics-UI-LUI-Accessor.html#asecond",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI LUI Accessor",
          "module": "Graphics.UI.LUI.Accessor",
          "name": "asecond",
          "normalized": "Accessor(a,b)b",
          "package": "lui",
          "signature": "Accessor(a,b)b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lui/docs/Graphics-UI-LUI-Accessor.html#v:asecond"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.LUI.Accessor",
          "name": "convertor",
          "package": "lui",
          "signature": "(whole -\u003e part) -\u003e (part -\u003e whole) -\u003e Accessor whole part",
          "source": "src/Graphics-UI-LUI-Accessor.html#convertor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI LUI Accessor",
          "module": "Graphics.UI.LUI.Accessor",
          "name": "convertor",
          "normalized": "(a-\u003eb)-\u003e(b-\u003ea)-\u003eAccessor a b",
          "package": "lui",
          "signature": "(whole-\u003epart)-\u003e(part-\u003ewhole)-\u003eAccessor whole part",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lui/docs/Graphics-UI-LUI-Accessor.html#v:convertor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest whether a list is empty.\n\u003c/p\u003e",
          "module": "Graphics.UI.LUI.Accessor",
          "name": "null",
          "package": "lui",
          "signature": "[a] -\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "Test whether list is empty",
          "hierarchy": "Graphics UI LUI Accessor",
          "module": "Graphics.UI.LUI.Accessor",
          "name": "null",
          "normalized": "[a]-\u003eBool",
          "package": "lui",
          "signature": "[a]-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lui/docs/Graphics-UI-LUI-Accessor.html#v:null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.LUI.Accessor",
          "name": "reader",
          "package": "lui",
          "signature": "r -\u003e Accessor a r",
          "source": "src/Graphics-UI-LUI-Accessor.html#reader",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI LUI Accessor",
          "module": "Graphics.UI.LUI.Accessor",
          "name": "reader",
          "normalized": "a-\u003eAccessor b a",
          "package": "lui",
          "signature": "r-\u003eAccessor a r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lui/docs/Graphics-UI-LUI-Accessor.html#v:reader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.LUI.Accessor",
          "name": "self",
          "package": "lui",
          "signature": "Accessor a a",
          "source": "src/Graphics-UI-LUI-Accessor.html#self",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI LUI Accessor",
          "module": "Graphics.UI.LUI.Accessor",
          "name": "self",
          "package": "lui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lui/docs/Graphics-UI-LUI-Accessor.html#v:self"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.LUI.Accessor",
          "name": "write",
          "package": "lui",
          "signature": "Accessor whole part -\u003e part -\u003e whole -\u003e whole",
          "source": "src/Graphics-UI-LUI-Accessor.html#write",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI LUI Accessor",
          "module": "Graphics.UI.LUI.Accessor",
          "name": "write",
          "normalized": "Accessor a b-\u003eb-\u003ea-\u003ea",
          "package": "lui",
          "signature": "Accessor whole part-\u003epart-\u003ewhole-\u003ewhole",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lui/docs/Graphics-UI-LUI-Accessor.html#v:write"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.LUI.Image",
          "name": "Image",
          "package": "lui",
          "source": "src/Graphics-UI-LUI-Image.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Graphics UI LUI Image",
          "module": "Graphics.UI.LUI.Image",
          "name": "Image",
          "package": "lui",
          "partial": "Image",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/lui/docs/Graphics-UI-LUI-Image.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.LUI.Image",
          "name": "Image",
          "package": "lui",
          "source": "src/Graphics-UI-LUI-Image.html#Image",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics UI LUI Image",
          "module": "Graphics.UI.LUI.Image",
          "name": "Image",
          "package": "lui",
          "partial": "Image",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/lui/docs/Graphics-UI-LUI-Image.html#t:Image"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.LUI.Image",
          "name": "crop",
          "package": "lui",
          "signature": "Vector2 Int -\u003e Image -\u003e Image",
          "source": "src/Graphics-UI-LUI-Image.html#crop",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI LUI Image",
          "module": "Graphics.UI.LUI.Image",
          "name": "crop",
          "normalized": "Vector Int-\u003eImage-\u003eImage",
          "package": "lui",
          "signature": "Vector Int-\u003eImage-\u003eImage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lui/docs/Graphics-UI-LUI-Image.html#v:crop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.LUI.Image",
          "name": "cropRect",
          "package": "lui",
          "signature": "Rect -\u003e Image -\u003e Image",
          "source": "src/Graphics-UI-LUI-Image.html#cropRect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI LUI Image",
          "module": "Graphics.UI.LUI.Image",
          "name": "cropRect",
          "normalized": "Rect-\u003eImage-\u003eImage",
          "package": "lui",
          "partial": "Rect",
          "signature": "Rect-\u003eImage-\u003eImage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lui/docs/Graphics-UI-LUI-Image.html#v:cropRect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.LUI.Image",
          "name": "move",
          "package": "lui",
          "signature": "Vector2 Int -\u003e Image -\u003e Image",
          "source": "src/Graphics-UI-LUI-Image.html#move",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI LUI Image",
          "module": "Graphics.UI.LUI.Image",
          "name": "move",
          "normalized": "Vector Int-\u003eImage-\u003eImage",
          "package": "lui",
          "signature": "Vector Int-\u003eImage-\u003eImage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lui/docs/Graphics-UI-LUI-Image.html#v:move"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.LUI.Image",
          "name": "rect",
          "package": "lui",
          "signature": "Color -\u003e Vector2 Int -\u003e Image",
          "source": "src/Graphics-UI-LUI-Image.html#rect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI LUI Image",
          "module": "Graphics.UI.LUI.Image",
          "name": "rect",
          "normalized": "Color-\u003eVector Int-\u003eImage",
          "package": "lui",
          "signature": "Color-\u003eVector Int-\u003eImage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lui/docs/Graphics-UI-LUI-Image.html#v:rect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.LUI.Image",
          "name": "render",
          "package": "lui",
          "signature": "Image -\u003e Surface -\u003e Vector2 Int -\u003e IO ()",
          "source": "src/Graphics-UI-LUI-Image.html#render",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI LUI Image",
          "module": "Graphics.UI.LUI.Image",
          "name": "render",
          "normalized": "Image-\u003eSurface-\u003eVector Int-\u003eIO()",
          "package": "lui",
          "signature": "Image-\u003eSurface-\u003eVector Int-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lui/docs/Graphics-UI-LUI-Image.html#v:render"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.LUI.Image",
          "name": "text",
          "package": "lui",
          "signature": "Color -\u003e Font -\u003e String -\u003e Image",
          "source": "src/Graphics-UI-LUI-Image.html#text",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI LUI Image",
          "module": "Graphics.UI.LUI.Image",
          "name": "text",
          "normalized": "Color-\u003eFont-\u003eString-\u003eImage",
          "package": "lui",
          "signature": "Color-\u003eFont-\u003eString-\u003eImage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lui/docs/Graphics-UI-LUI-Image.html#v:text"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.LUI.Image",
          "name": "textSize",
          "package": "lui",
          "signature": "Font -\u003e String -\u003e Vector2 Int",
          "source": "src/Graphics-UI-LUI-Image.html#textSize",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI LUI Image",
          "module": "Graphics.UI.LUI.Image",
          "name": "textSize",
          "normalized": "Font-\u003eString-\u003eVector Int",
          "package": "lui",
          "partial": "Size",
          "signature": "Font-\u003eString-\u003eVector Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lui/docs/Graphics-UI-LUI-Image.html#v:textSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.LUI.Run",
          "name": "Run",
          "package": "lui",
          "source": "src/Graphics-UI-LUI-Run.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Graphics UI LUI Run",
          "module": "Graphics.UI.LUI.Run",
          "name": "Run",
          "package": "lui",
          "partial": "Run",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/lui/docs/Graphics-UI-LUI-Run.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.LUI.Run",
          "name": "mainLoop",
          "package": "lui",
          "signature": "Widget model -\u003e model -\u003e IO model",
          "source": "src/Graphics-UI-LUI-Run.html#mainLoop",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI LUI Run",
          "module": "Graphics.UI.LUI.Run",
          "name": "mainLoop",
          "normalized": "Widget a-\u003ea-\u003eIO a",
          "package": "lui",
          "partial": "Loop",
          "signature": "Widget model-\u003emodel-\u003eIO model",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lui/docs/Graphics-UI-LUI-Run.html#v:mainLoop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.LUI.Widget",
          "name": "Widget",
          "package": "lui",
          "source": "src/Graphics-UI-LUI-Widget.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Graphics UI LUI Widget",
          "module": "Graphics.UI.LUI.Widget",
          "name": "Widget",
          "package": "lui",
          "partial": "Widget",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/lui/docs/Graphics-UI-LUI-Widget.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.LUI.Widget",
          "name": "ActionHandlers",
          "package": "lui",
          "source": "src/Graphics-UI-LUI-Widget.html#ActionHandlers",
          "type": "type"
        },
        "index": {
          "hierarchy": "Graphics UI LUI Widget",
          "module": "Graphics.UI.LUI.Widget",
          "name": "ActionHandlers",
          "package": "lui",
          "partial": "Action Handlers",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/lui/docs/Graphics-UI-LUI-Widget.html#t:ActionHandlers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.LUI.Widget",
          "name": "DrawInfo",
          "package": "lui",
          "source": "src/Graphics-UI-LUI-Widget.html#DrawInfo",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics UI LUI Widget",
          "module": "Graphics.UI.LUI.Widget",
          "name": "DrawInfo",
          "package": "lui",
          "partial": "Draw Info",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/lui/docs/Graphics-UI-LUI-Widget.html#t:DrawInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.LUI.Widget",
          "name": "Handler",
          "package": "lui",
          "source": "src/Graphics-UI-LUI-Widget.html#Handler",
          "type": "type"
        },
        "index": {
          "hierarchy": "Graphics UI LUI Widget",
          "module": "Graphics.UI.LUI.Widget",
          "name": "Handler",
          "package": "lui",
          "partial": "Handler",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/lui/docs/Graphics-UI-LUI-Widget.html#t:Handler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.LUI.Widget",
          "name": "KeyAction",
          "package": "lui",
          "source": "src/Graphics-UI-LUI-Widget.html#KeyAction",
          "type": "type"
        },
        "index": {
          "hierarchy": "Graphics UI LUI Widget",
          "module": "Graphics.UI.LUI.Widget",
          "name": "KeyAction",
          "package": "lui",
          "partial": "Key Action",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/lui/docs/Graphics-UI-LUI-Widget.html#t:KeyAction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.LUI.Widget",
          "name": "KeyStatus",
          "package": "lui",
          "source": "src/Graphics-UI-LUI-Widget.html#KeyStatus",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics UI LUI Widget",
          "module": "Graphics.UI.LUI.Widget",
          "name": "KeyStatus",
          "package": "lui",
          "partial": "Key Status",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/lui/docs/Graphics-UI-LUI-Widget.html#t:KeyStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.LUI.Widget",
          "name": "New",
          "package": "lui",
          "source": "src/Graphics-UI-LUI-Widget.html#New",
          "type": "type"
        },
        "index": {
          "hierarchy": "Graphics UI LUI Widget",
          "module": "Graphics.UI.LUI.Widget",
          "name": "New",
          "package": "lui",
          "partial": "New",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/lui/docs/Graphics-UI-LUI-Widget.html#t:New"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.LUI.Widget",
          "name": "Widget",
          "package": "lui",
          "source": "src/Graphics-UI-LUI-Widget.html#Widget",
          "type": "type"
        },
        "index": {
          "hierarchy": "Graphics UI LUI Widget",
          "module": "Graphics.UI.LUI.Widget",
          "name": "Widget",
          "package": "lui",
          "partial": "Widget",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/lui/docs/Graphics-UI-LUI-Widget.html#t:Widget"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.LUI.Widget",
          "name": "WidgetFuncs",
          "package": "lui",
          "source": "src/Graphics-UI-LUI-Widget.html#WidgetFuncs",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics UI LUI Widget",
          "module": "Graphics.UI.LUI.Widget",
          "name": "WidgetFuncs",
          "package": "lui",
          "partial": "Widget Funcs",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/lui/docs/Graphics-UI-LUI-Widget.html#t:WidgetFuncs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.LUI.Widget",
          "name": "DrawInfo",
          "package": "lui",
          "signature": "DrawInfo",
          "source": "src/Graphics-UI-LUI-Widget.html#DrawInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI LUI Widget",
          "module": "Graphics.UI.LUI.Widget",
          "name": "DrawInfo",
          "package": "lui",
          "partial": "Draw Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lui/docs/Graphics-UI-LUI-Widget.html#v:DrawInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.LUI.Widget",
          "name": "KeyDown",
          "package": "lui",
          "signature": "KeyDown",
          "source": "src/Graphics-UI-LUI-Widget.html#KeyStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI LUI Widget",
          "module": "Graphics.UI.LUI.Widget",
          "name": "KeyDown",
          "package": "lui",
          "partial": "Key Down",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lui/docs/Graphics-UI-LUI-Widget.html#v:KeyDown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.LUI.Widget",
          "name": "KeyUp",
          "package": "lui",
          "signature": "KeyUp",
          "source": "src/Graphics-UI-LUI-Widget.html#KeyStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI LUI Widget",
          "module": "Graphics.UI.LUI.Widget",
          "name": "KeyUp",
          "package": "lui",
          "partial": "Key Up",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lui/docs/Graphics-UI-LUI-Widget.html#v:KeyUp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.LUI.Widget",
          "name": "WidgetFuncs",
          "package": "lui",
          "signature": "WidgetFuncs",
          "source": "src/Graphics-UI-LUI-Widget.html#WidgetFuncs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI LUI Widget",
          "module": "Graphics.UI.LUI.Widget",
          "name": "WidgetFuncs",
          "package": "lui",
          "partial": "Widget Funcs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lui/docs/Graphics-UI-LUI-Widget.html#v:WidgetFuncs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.LUI.Widget",
          "name": "diHasFocus",
          "package": "lui",
          "signature": "Bool",
          "source": "src/Graphics-UI-LUI-Widget.html#DrawInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI LUI Widget",
          "module": "Graphics.UI.LUI.Widget",
          "name": "diHasFocus",
          "package": "lui",
          "partial": "Has Focus",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lui/docs/Graphics-UI-LUI-Widget.html#v:diHasFocus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.LUI.Widget",
          "name": "widgetGetKeymap",
          "package": "lui",
          "signature": "Maybe (ActionHandlers model)",
          "source": "src/Graphics-UI-LUI-Widget.html#WidgetFuncs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI LUI Widget",
          "module": "Graphics.UI.LUI.Widget",
          "name": "widgetGetKeymap",
          "package": "lui",
          "partial": "Get Keymap",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lui/docs/Graphics-UI-LUI-Widget.html#v:widgetGetKeymap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.LUI.Widget",
          "name": "widgetImage",
          "package": "lui",
          "signature": "DrawInfo -\u003e Image",
          "source": "src/Graphics-UI-LUI-Widget.html#WidgetFuncs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI LUI Widget",
          "module": "Graphics.UI.LUI.Widget",
          "name": "widgetImage",
          "normalized": "DrawInfo-\u003eImage",
          "package": "lui",
          "partial": "Image",
          "signature": "DrawInfo-\u003eImage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lui/docs/Graphics-UI-LUI-Widget.html#v:widgetImage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.LUI.Widget",
          "name": "widgetSize",
          "package": "lui",
          "signature": "DrawInfo -\u003e Vector2 Int",
          "source": "src/Graphics-UI-LUI-Widget.html#WidgetFuncs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI LUI Widget",
          "module": "Graphics.UI.LUI.Widget",
          "name": "widgetSize",
          "normalized": "DrawInfo-\u003eVector Int",
          "package": "lui",
          "partial": "Size",
          "signature": "DrawInfo-\u003eVector Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lui/docs/Graphics-UI-LUI-Widget.html#v:widgetSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.LUI.Widgets.Adapter",
          "name": "Adapter",
          "package": "lui",
          "source": "src/Graphics-UI-LUI-Widgets-Adapter.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Graphics UI LUI Widgets Adapter",
          "module": "Graphics.UI.LUI.Widgets.Adapter",
          "name": "Adapter",
          "package": "lui",
          "partial": "Adapter",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/lui/docs/Graphics-UI-LUI-Widgets-Adapter.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.LUI.Widgets.Adapter",
          "name": "adaptAll",
          "package": "lui",
          "signature": "Endo Image -\u003e Endo (Vector2 Int) -\u003e (Maybe (ActionHandlers part) -\u003e Maybe (ActionHandlers whole)) -\u003e WidgetFuncs part -\u003e WidgetFuncs whole",
          "source": "src/Graphics-UI-LUI-Widgets-Adapter.html#adaptAll",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI LUI Widgets Adapter",
          "module": "Graphics.UI.LUI.Widgets.Adapter",
          "name": "adaptAll",
          "normalized": "Endo Image-\u003eEndo(Vector Int)-\u003e(Maybe(ActionHandlers a)-\u003eMaybe(ActionHandlers b))-\u003eWidgetFuncs a-\u003eWidgetFuncs b",
          "package": "lui",
          "partial": "All",
          "signature": "Endo Image-\u003eEndo(Vector Int)-\u003e(Maybe(ActionHandlers part)-\u003eMaybe(ActionHandlers whole))-\u003eWidgetFuncs part-\u003eWidgetFuncs whole",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lui/docs/Graphics-UI-LUI-Widgets-Adapter.html#v:adaptAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.LUI.Widgets.Adapter",
          "name": "adaptImage",
          "package": "lui",
          "signature": "Endo Image -\u003e Endo (Widget model)",
          "source": "src/Graphics-UI-LUI-Widgets-Adapter.html#adaptImage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI LUI Widgets Adapter",
          "module": "Graphics.UI.LUI.Widgets.Adapter",
          "name": "adaptImage",
          "normalized": "Endo Image-\u003eEndo(Widget a)",
          "package": "lui",
          "partial": "Image",
          "signature": "Endo Image-\u003eEndo(Widget model)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lui/docs/Graphics-UI-LUI-Widgets-Adapter.html#v:adaptImage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.LUI.Widgets.Adapter",
          "name": "adaptModel",
          "package": "lui",
          "signature": "Accessor whole part -\u003e Widget part -\u003e Widget whole",
          "source": "src/Graphics-UI-LUI-Widgets-Adapter.html#adaptModel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI LUI Widgets Adapter",
          "module": "Graphics.UI.LUI.Widgets.Adapter",
          "name": "adaptModel",
          "normalized": "Accessor a b-\u003eWidget b-\u003eWidget a",
          "package": "lui",
          "partial": "Model",
          "signature": "Accessor whole part-\u003eWidget part-\u003eWidget whole",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lui/docs/Graphics-UI-LUI-Widgets-Adapter.html#v:adaptModel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.LUI.Widgets.Adapter",
          "name": "adaptSize",
          "package": "lui",
          "signature": "Endo (Vector2 Int) -\u003e Endo (Widget model)",
          "source": "src/Graphics-UI-LUI-Widgets-Adapter.html#adaptSize",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI LUI Widgets Adapter",
          "module": "Graphics.UI.LUI.Widgets.Adapter",
          "name": "adaptSize",
          "normalized": "Endo(Vector Int)-\u003eEndo(Widget a)",
          "package": "lui",
          "partial": "Size",
          "signature": "Endo(Vector Int)-\u003eEndo(Widget model)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lui/docs/Graphics-UI-LUI-Widgets-Adapter.html#v:adaptSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.LUI.Widgets.Box",
          "name": "Box",
          "package": "lui",
          "source": "src/Graphics-UI-LUI-Widgets-Box.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Graphics UI LUI Widgets Box",
          "module": "Graphics.UI.LUI.Widgets.Box",
          "name": "Box",
          "package": "lui",
          "partial": "Box",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/lui/docs/Graphics-UI-LUI-Widgets-Box.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.LUI.Widgets.Box",
          "name": "Cursor",
          "package": "lui",
          "source": "src/Graphics-UI-LUI-Widgets-Box.html#Cursor",
          "type": "type"
        },
        "index": {
          "hierarchy": "Graphics UI LUI Widgets Box",
          "module": "Graphics.UI.LUI.Widgets.Box",
          "name": "Cursor",
          "package": "lui",
          "partial": "Cursor",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/lui/docs/Graphics-UI-LUI-Widgets-Box.html#t:Cursor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.LUI.Widgets.Box",
          "name": "DelegatedMutable",
          "package": "lui",
          "source": "src/Graphics-UI-LUI-Widgets-Box.html#DelegatedMutable",
          "type": "type"
        },
        "index": {
          "hierarchy": "Graphics UI LUI Widgets Box",
          "module": "Graphics.UI.LUI.Widgets.Box",
          "name": "DelegatedMutable",
          "package": "lui",
          "partial": "Delegated Mutable",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/lui/docs/Graphics-UI-LUI-Widgets-Box.html#t:DelegatedMutable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.LUI.Widgets.Box",
          "name": "Item",
          "package": "lui",
          "source": "src/Graphics-UI-LUI-Widgets-Box.html#Item",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics UI LUI Widgets Box",
          "module": "Graphics.UI.LUI.Widgets.Box",
          "name": "Item",
          "package": "lui",
          "partial": "Item",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/lui/docs/Graphics-UI-LUI-Widgets-Box.html#t:Item"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.LUI.Widgets.Box",
          "name": "Mutable",
          "package": "lui",
          "source": "src/Graphics-UI-LUI-Widgets-Box.html#Mutable",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics UI LUI Widgets Box",
          "module": "Graphics.UI.LUI.Widgets.Box",
          "name": "Mutable",
          "package": "lui",
          "partial": "Mutable",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/lui/docs/Graphics-UI-LUI-Widgets-Box.html#t:Mutable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.LUI.Widgets.Box",
          "name": "Orientation",
          "package": "lui",
          "source": "src/Graphics-UI-LUI-Widgets-Box.html#Orientation",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics UI LUI Widgets Box",
          "module": "Graphics.UI.LUI.Widgets.Box",
          "name": "Orientation",
          "package": "lui",
          "partial": "Orientation",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/lui/docs/Graphics-UI-LUI-Widgets-Box.html#t:Orientation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.LUI.Widgets.Box",
          "name": "Horizontal",
          "package": "lui",
          "signature": "Horizontal",
          "source": "src/Graphics-UI-LUI-Widgets-Box.html#Orientation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI LUI Widgets Box",
          "module": "Graphics.UI.LUI.Widgets.Box",
          "name": "Horizontal",
          "package": "lui",
          "partial": "Horizontal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lui/docs/Graphics-UI-LUI-Widgets-Box.html#v:Horizontal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.LUI.Widgets.Box",
          "name": "Item",
          "package": "lui",
          "signature": "Item",
          "source": "src/Graphics-UI-LUI-Widgets-Box.html#Item",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI LUI Widgets Box",
          "module": "Graphics.UI.LUI.Widgets.Box",
          "name": "Item",
          "package": "lui",
          "partial": "Item",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lui/docs/Graphics-UI-LUI-Widgets-Box.html#v:Item"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.LUI.Widgets.Box",
          "name": "Mutable",
          "package": "lui",
          "signature": "Mutable",
          "source": "src/Graphics-UI-LUI-Widgets-Box.html#Mutable",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI LUI Widgets Box",
          "module": "Graphics.UI.LUI.Widgets.Box",
          "name": "Mutable",
          "package": "lui",
          "partial": "Mutable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lui/docs/Graphics-UI-LUI-Widgets-Box.html#v:Mutable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.LUI.Widgets.Box",
          "name": "Vertical",
          "package": "lui",
          "signature": "Vertical",
          "source": "src/Graphics-UI-LUI-Widgets-Box.html#Orientation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI LUI Widgets Box",
          "module": "Graphics.UI.LUI.Widgets.Box",
          "name": "Vertical",
          "package": "lui",
          "partial": "Vertical",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lui/docs/Graphics-UI-LUI-Widgets-Box.html#v:Vertical"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.LUI.Widgets.Box",
          "name": "aDelegatedMutableCursor",
          "package": "lui",
          "signature": "Accessor DelegatedMutable Cursor",
          "source": "src/Graphics-UI-LUI-Widgets-Box.html#aDelegatedMutableCursor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI LUI Widgets Box",
          "module": "Graphics.UI.LUI.Widgets.Box",
          "name": "aDelegatedMutableCursor",
          "package": "lui",
          "partial": "Delegated Mutable Cursor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lui/docs/Graphics-UI-LUI-Widgets-Box.html#v:aDelegatedMutableCursor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.LUI.Widgets.Box",
          "name": "aMutableCursor",
          "package": "lui",
          "signature": "Accessor Mutable Cursor",
          "source": "src/Graphics-UI-LUI-Widgets-Box.html#aMutableCursor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI LUI Widgets Box",
          "module": "Graphics.UI.LUI.Widgets.Box",
          "name": "aMutableCursor",
          "package": "lui",
          "partial": "Mutable Cursor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lui/docs/Graphics-UI-LUI-Widgets-Box.html#v:aMutableCursor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.LUI.Widgets.Box",
          "name": "delegatedMutable",
          "package": "lui",
          "signature": "Bool -\u003e Cursor -\u003e DelegatedMutable",
          "source": "src/Graphics-UI-LUI-Widgets-Box.html#delegatedMutable",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI LUI Widgets Box",
          "module": "Graphics.UI.LUI.Widgets.Box",
          "name": "delegatedMutable",
          "normalized": "Bool-\u003eCursor-\u003eDelegatedMutable",
          "package": "lui",
          "partial": "Mutable",
          "signature": "Bool-\u003eCursor-\u003eDelegatedMutable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lui/docs/Graphics-UI-LUI-Widgets-Box.html#v:delegatedMutable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.LUI.Widgets.Box",
          "name": "itemAlignment",
          "package": "lui",
          "signature": "Double",
          "source": "src/Graphics-UI-LUI-Widgets-Box.html#Item",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI LUI Widgets Box",
          "module": "Graphics.UI.LUI.Widgets.Box",
          "name": "itemAlignment",
          "package": "lui",
          "partial": "Alignment",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lui/docs/Graphics-UI-LUI-Widgets-Box.html#v:itemAlignment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.LUI.Widgets.Box",
          "name": "itemChildWidget",
          "package": "lui",
          "signature": "Widget model",
          "source": "src/Graphics-UI-LUI-Widgets-Box.html#Item",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI LUI Widgets Box",
          "module": "Graphics.UI.LUI.Widgets.Box",
          "name": "itemChildWidget",
          "package": "lui",
          "partial": "Child Widget",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lui/docs/Graphics-UI-LUI-Widgets-Box.html#v:itemChildWidget"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.LUI.Widgets.Box",
          "name": "mutableCursor",
          "package": "lui",
          "signature": "Cursor",
          "source": "src/Graphics-UI-LUI-Widgets-Box.html#Mutable",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI LUI Widgets Box",
          "module": "Graphics.UI.LUI.Widgets.Box",
          "name": "mutableCursor",
          "package": "lui",
          "partial": "Cursor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lui/docs/Graphics-UI-LUI-Widgets-Box.html#v:mutableCursor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.LUI.Widgets.Box",
          "name": "new",
          "package": "lui",
          "signature": "Orientation -\u003e [Item model] -\u003e New model Mutable",
          "source": "src/Graphics-UI-LUI-Widgets-Box.html#new",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI LUI Widgets Box",
          "module": "Graphics.UI.LUI.Widgets.Box",
          "name": "new",
          "normalized": "Orientation-\u003e[Item a]-\u003eNew a Mutable",
          "package": "lui",
          "signature": "Orientation-\u003e[Item model]-\u003eNew model Mutable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lui/docs/Graphics-UI-LUI-Widgets-Box.html#v:new"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.LUI.Widgets.Box",
          "name": "newDelegated",
          "package": "lui",
          "signature": "Orientation -\u003e [Item model] -\u003e New model DelegatedMutable",
          "source": "src/Graphics-UI-LUI-Widgets-Box.html#newDelegated",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI LUI Widgets Box",
          "module": "Graphics.UI.LUI.Widgets.Box",
          "name": "newDelegated",
          "normalized": "Orientation-\u003e[Item a]-\u003eNew a DelegatedMutable",
          "package": "lui",
          "partial": "Delegated",
          "signature": "Orientation-\u003e[Item model]-\u003eNew model DelegatedMutable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lui/docs/Graphics-UI-LUI-Widgets-Box.html#v:newDelegated"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.LUI.Widgets.Box",
          "name": "newDelegatedWith",
          "package": "lui",
          "signature": "Color -\u003e Orientation -\u003e [Item model] -\u003e New model DelegatedMutable",
          "source": "src/Graphics-UI-LUI-Widgets-Box.html#newDelegatedWith",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI LUI Widgets Box",
          "module": "Graphics.UI.LUI.Widgets.Box",
          "name": "newDelegatedWith",
          "normalized": "Color-\u003eOrientation-\u003e[Item a]-\u003eNew a DelegatedMutable",
          "package": "lui",
          "partial": "Delegated With",
          "signature": "Color-\u003eOrientation-\u003e[Item model]-\u003eNew model DelegatedMutable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lui/docs/Graphics-UI-LUI-Widgets-Box.html#v:newDelegatedWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.LUI.Widgets.Box",
          "name": "noAcc",
          "package": "lui",
          "signature": "Cursor -\u003e Accessor model Mutable",
          "source": "src/Graphics-UI-LUI-Widgets-Box.html#noAcc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI LUI Widgets Box",
          "module": "Graphics.UI.LUI.Widgets.Box",
          "name": "noAcc",
          "normalized": "Cursor-\u003eAccessor a Mutable",
          "package": "lui",
          "partial": "Acc",
          "signature": "Cursor-\u003eAccessor model Mutable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lui/docs/Graphics-UI-LUI-Widgets-Box.html#v:noAcc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.LUI.Widgets.FocusDelegator",
          "name": "FocusDelegator",
          "package": "lui",
          "source": "src/Graphics-UI-LUI-Widgets-FocusDelegator.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Graphics UI LUI Widgets FocusDelegator",
          "module": "Graphics.UI.LUI.Widgets.FocusDelegator",
          "name": "FocusDelegator",
          "package": "lui",
          "partial": "Focus Delegator",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/lui/docs/Graphics-UI-LUI-Widgets-FocusDelegator.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.LUI.Widgets.FocusDelegator",
          "name": "DelegatedMutable",
          "package": "lui",
          "source": "src/Graphics-UI-LUI-Widgets-FocusDelegator.html#DelegatedMutable",
          "type": "type"
        },
        "index": {
          "hierarchy": "Graphics UI LUI Widgets FocusDelegator",
          "module": "Graphics.UI.LUI.Widgets.FocusDelegator",
          "name": "DelegatedMutable",
          "package": "lui",
          "partial": "Delegated Mutable",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/lui/docs/Graphics-UI-LUI-Widgets-FocusDelegator.html#t:DelegatedMutable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.LUI.Widgets.FocusDelegator",
          "name": "Mutable",
          "package": "lui",
          "source": "src/Graphics-UI-LUI-Widgets-FocusDelegator.html#Mutable",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics UI LUI Widgets FocusDelegator",
          "module": "Graphics.UI.LUI.Widgets.FocusDelegator",
          "name": "Mutable",
          "package": "lui",
          "partial": "Mutable",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/lui/docs/Graphics-UI-LUI-Widgets-FocusDelegator.html#t:Mutable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.LUI.Widgets.FocusDelegator",
          "name": "Mutable",
          "package": "lui",
          "signature": "Mutable",
          "source": "src/Graphics-UI-LUI-Widgets-FocusDelegator.html#Mutable",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI LUI Widgets FocusDelegator",
          "module": "Graphics.UI.LUI.Widgets.FocusDelegator",
          "name": "Mutable",
          "package": "lui",
          "partial": "Mutable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lui/docs/Graphics-UI-LUI-Widgets-FocusDelegator.html#v:Mutable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.LUI.Widgets.FocusDelegator",
          "name": "aDelegatedMutable",
          "package": "lui",
          "signature": "Accessor (DelegatedMutable mutable) mutable",
          "source": "src/Graphics-UI-LUI-Widgets-FocusDelegator.html#aDelegatedMutable",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI LUI Widgets FocusDelegator",
          "module": "Graphics.UI.LUI.Widgets.FocusDelegator",
          "name": "aDelegatedMutable",
          "package": "lui",
          "partial": "Delegated Mutable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lui/docs/Graphics-UI-LUI-Widgets-FocusDelegator.html#v:aDelegatedMutable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.LUI.Widgets.FocusDelegator",
          "name": "aFocusDelegatorMutable",
          "package": "lui",
          "signature": "Accessor (DelegatedMutable mutable) Mutable",
          "source": "src/Graphics-UI-LUI-Widgets-FocusDelegator.html#aFocusDelegatorMutable",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI LUI Widgets FocusDelegator",
          "module": "Graphics.UI.LUI.Widgets.FocusDelegator",
          "name": "aFocusDelegatorMutable",
          "package": "lui",
          "partial": "Focus Delegator Mutable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lui/docs/Graphics-UI-LUI-Widgets-FocusDelegator.html#v:aFocusDelegatorMutable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.LUI.Widgets.FocusDelegator",
          "name": "defaultFocusColor",
          "package": "lui",
          "signature": "Color",
          "source": "src/Graphics-UI-LUI-Widgets-FocusDelegator.html#defaultFocusColor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI LUI Widgets FocusDelegator",
          "module": "Graphics.UI.LUI.Widgets.FocusDelegator",
          "name": "defaultFocusColor",
          "package": "lui",
          "partial": "Focus Color",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lui/docs/Graphics-UI-LUI-Widgets-FocusDelegator.html#v:defaultFocusColor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.LUI.Widgets.FocusDelegator",
          "name": "mutableDelegateFocus",
          "package": "lui",
          "signature": "Bool",
          "source": "src/Graphics-UI-LUI-Widgets-FocusDelegator.html#Mutable",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI LUI Widgets FocusDelegator",
          "module": "Graphics.UI.LUI.Widgets.FocusDelegator",
          "name": "mutableDelegateFocus",
          "package": "lui",
          "partial": "Delegate Focus",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lui/docs/Graphics-UI-LUI-Widgets-FocusDelegator.html#v:mutableDelegateFocus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.LUI.Widgets.FocusDelegator",
          "name": "new",
          "package": "lui",
          "signature": "String -\u003e String -\u003e Widget model -\u003e New model Mutable",
          "source": "src/Graphics-UI-LUI-Widgets-FocusDelegator.html#new",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI LUI Widgets FocusDelegator",
          "module": "Graphics.UI.LUI.Widgets.FocusDelegator",
          "name": "new",
          "normalized": "String-\u003eString-\u003eWidget a-\u003eNew a Mutable",
          "package": "lui",
          "signature": "String-\u003eString-\u003eWidget model-\u003eNew model Mutable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lui/docs/Graphics-UI-LUI-Widgets-FocusDelegator.html#v:new"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.LUI.Widgets.FocusDelegator",
          "name": "newWith",
          "package": "lui",
          "signature": "Color -\u003e String -\u003e String -\u003e Widget model -\u003e New model Mutable",
          "source": "src/Graphics-UI-LUI-Widgets-FocusDelegator.html#newWith",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI LUI Widgets FocusDelegator",
          "module": "Graphics.UI.LUI.Widgets.FocusDelegator",
          "name": "newWith",
          "normalized": "Color-\u003eString-\u003eString-\u003eWidget a-\u003eNew a Mutable",
          "package": "lui",
          "partial": "With",
          "signature": "Color-\u003eString-\u003eString-\u003eWidget model-\u003eNew model Mutable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lui/docs/Graphics-UI-LUI-Widgets-FocusDelegator.html#v:newWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.LUI.Widgets.Grid",
          "name": "Grid",
          "package": "lui",
          "source": "src/Graphics-UI-LUI-Widgets-Grid.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Graphics UI LUI Widgets Grid",
          "module": "Graphics.UI.LUI.Widgets.Grid",
          "name": "Grid",
          "package": "lui",
          "partial": "Grid",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/lui/docs/Graphics-UI-LUI-Widgets-Grid.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.LUI.Widgets.Grid",
          "name": "Cursor",
          "package": "lui",
          "source": "src/Graphics-UI-LUI-Widgets-Grid.html#Cursor",
          "type": "type"
        },
        "index": {
          "hierarchy": "Graphics UI LUI Widgets Grid",
          "module": "Graphics.UI.LUI.Widgets.Grid",
          "name": "Cursor",
          "package": "lui",
          "partial": "Cursor",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/lui/docs/Graphics-UI-LUI-Widgets-Grid.html#t:Cursor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.LUI.Widgets.Grid",
          "name": "DelegatedMutable",
          "package": "lui",
          "source": "src/Graphics-UI-LUI-Widgets-Grid.html#DelegatedMutable",
          "type": "type"
        },
        "index": {
          "hierarchy": "Graphics UI LUI Widgets Grid",
          "module": "Graphics.UI.LUI.Widgets.Grid",
          "name": "DelegatedMutable",
          "package": "lui",
          "partial": "Delegated Mutable",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/lui/docs/Graphics-UI-LUI-Widgets-Grid.html#t:DelegatedMutable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.LUI.Widgets.Grid",
          "name": "Item",
          "package": "lui",
          "source": "src/Graphics-UI-LUI-Widgets-Grid.html#Item",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics UI LUI Widgets Grid",
          "module": "Graphics.UI.LUI.Widgets.Grid",
          "name": "Item",
          "package": "lui",
          "partial": "Item",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/lui/docs/Graphics-UI-LUI-Widgets-Grid.html#t:Item"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.LUI.Widgets.Grid",
          "name": "Items",
          "package": "lui",
          "source": "src/Graphics-UI-LUI-Widgets-Grid.html#Items",
          "type": "type"
        },
        "index": {
          "hierarchy": "Graphics UI LUI Widgets Grid",
          "module": "Graphics.UI.LUI.Widgets.Grid",
          "name": "Items",
          "package": "lui",
          "partial": "Items",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/lui/docs/Graphics-UI-LUI-Widgets-Grid.html#t:Items"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.LUI.Widgets.Grid",
          "name": "Mutable",
          "package": "lui",
          "source": "src/Graphics-UI-LUI-Widgets-Grid.html#Mutable",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics UI LUI Widgets Grid",
          "module": "Graphics.UI.LUI.Widgets.Grid",
          "name": "Mutable",
          "package": "lui",
          "partial": "Mutable",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/lui/docs/Graphics-UI-LUI-Widgets-Grid.html#t:Mutable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.LUI.Widgets.Grid",
          "name": "Item",
          "package": "lui",
          "signature": "Item",
          "source": "src/Graphics-UI-LUI-Widgets-Grid.html#Item",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI LUI Widgets Grid",
          "module": "Graphics.UI.LUI.Widgets.Grid",
          "name": "Item",
          "package": "lui",
          "partial": "Item",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lui/docs/Graphics-UI-LUI-Widgets-Grid.html#v:Item"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.LUI.Widgets.Grid",
          "name": "Mutable",
          "package": "lui",
          "signature": "Mutable",
          "source": "src/Graphics-UI-LUI-Widgets-Grid.html#Mutable",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI LUI Widgets Grid",
          "module": "Graphics.UI.LUI.Widgets.Grid",
          "name": "Mutable",
          "package": "lui",
          "partial": "Mutable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lui/docs/Graphics-UI-LUI-Widgets-Grid.html#v:Mutable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.LUI.Widgets.Grid",
          "name": "aDelegatedMutableCursor",
          "package": "lui",
          "signature": "Accessor DelegatedMutable Cursor",
          "source": "src/Graphics-UI-LUI-Widgets-Grid.html#aDelegatedMutableCursor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI LUI Widgets Grid",
          "module": "Graphics.UI.LUI.Widgets.Grid",
          "name": "aDelegatedMutableCursor",
          "package": "lui",
          "partial": "Delegated Mutable Cursor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lui/docs/Graphics-UI-LUI-Widgets-Grid.html#v:aDelegatedMutableCursor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.LUI.Widgets.Grid",
          "name": "aMutableCursor",
          "package": "lui",
          "signature": "Accessor Mutable Cursor",
          "source": "src/Graphics-UI-LUI-Widgets-Grid.html#aMutableCursor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI LUI Widgets Grid",
          "module": "Graphics.UI.LUI.Widgets.Grid",
          "name": "aMutableCursor",
          "package": "lui",
          "partial": "Mutable Cursor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lui/docs/Graphics-UI-LUI-Widgets-Grid.html#v:aMutableCursor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.LUI.Widgets.Grid",
          "name": "delegatedMutable",
          "package": "lui",
          "signature": "Bool -\u003e Cursor -\u003e DelegatedMutable",
          "source": "src/Graphics-UI-LUI-Widgets-Grid.html#delegatedMutable",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI LUI Widgets Grid",
          "module": "Graphics.UI.LUI.Widgets.Grid",
          "name": "delegatedMutable",
          "normalized": "Bool-\u003eCursor-\u003eDelegatedMutable",
          "package": "lui",
          "partial": "Mutable",
          "signature": "Bool-\u003eCursor-\u003eDelegatedMutable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lui/docs/Graphics-UI-LUI-Widgets-Grid.html#v:delegatedMutable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.LUI.Widgets.Grid",
          "name": "itemAlignments",
          "package": "lui",
          "signature": "(Double, Double)",
          "source": "src/Graphics-UI-LUI-Widgets-Grid.html#Item",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI LUI Widgets Grid",
          "module": "Graphics.UI.LUI.Widgets.Grid",
          "name": "itemAlignments",
          "normalized": "(Double,Double)",
          "package": "lui",
          "partial": "Alignments",
          "signature": "(Double,Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lui/docs/Graphics-UI-LUI-Widgets-Grid.html#v:itemAlignments"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.LUI.Widgets.Grid",
          "name": "itemWidget",
          "package": "lui",
          "signature": "Widget model",
          "source": "src/Graphics-UI-LUI-Widgets-Grid.html#Item",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI LUI Widgets Grid",
          "module": "Graphics.UI.LUI.Widgets.Grid",
          "name": "itemWidget",
          "package": "lui",
          "partial": "Widget",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lui/docs/Graphics-UI-LUI-Widgets-Grid.html#v:itemWidget"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.LUI.Widgets.Grid",
          "name": "mutableCursor",
          "package": "lui",
          "signature": "Cursor",
          "source": "src/Graphics-UI-LUI-Widgets-Grid.html#Mutable",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI LUI Widgets Grid",
          "module": "Graphics.UI.LUI.Widgets.Grid",
          "name": "mutableCursor",
          "package": "lui",
          "partial": "Cursor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lui/docs/Graphics-UI-LUI-Widgets-Grid.html#v:mutableCursor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.LUI.Widgets.Grid",
          "name": "new",
          "package": "lui",
          "signature": "Cursor -\u003e Items model -\u003e New model Mutable",
          "source": "src/Graphics-UI-LUI-Widgets-Grid.html#new",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI LUI Widgets Grid",
          "module": "Graphics.UI.LUI.Widgets.Grid",
          "name": "new",
          "normalized": "Cursor-\u003eItems a-\u003eNew a Mutable",
          "package": "lui",
          "signature": "Cursor-\u003eItems model-\u003eNew model Mutable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lui/docs/Graphics-UI-LUI-Widgets-Grid.html#v:new"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.LUI.Widgets.Grid",
          "name": "newDelegated",
          "package": "lui",
          "signature": "Cursor -\u003e Items model -\u003e New model DelegatedMutable",
          "source": "src/Graphics-UI-LUI-Widgets-Grid.html#newDelegated",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI LUI Widgets Grid",
          "module": "Graphics.UI.LUI.Widgets.Grid",
          "name": "newDelegated",
          "normalized": "Cursor-\u003eItems a-\u003eNew a DelegatedMutable",
          "package": "lui",
          "partial": "Delegated",
          "signature": "Cursor-\u003eItems model-\u003eNew model DelegatedMutable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lui/docs/Graphics-UI-LUI-Widgets-Grid.html#v:newDelegated"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.LUI.Widgets.Grid",
          "name": "newDelegatedWith",
          "package": "lui",
          "signature": "Color -\u003e Cursor -\u003e Items model -\u003e New model DelegatedMutable",
          "source": "src/Graphics-UI-LUI-Widgets-Grid.html#newDelegatedWith",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI LUI Widgets Grid",
          "module": "Graphics.UI.LUI.Widgets.Grid",
          "name": "newDelegatedWith",
          "normalized": "Color-\u003eCursor-\u003eItems a-\u003eNew a DelegatedMutable",
          "package": "lui",
          "partial": "Delegated With",
          "signature": "Color-\u003eCursor-\u003eItems model-\u003eNew model DelegatedMutable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lui/docs/Graphics-UI-LUI-Widgets-Grid.html#v:newDelegatedWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.LUI.Widgets.Grid",
          "name": "noAcc",
          "package": "lui",
          "signature": "Cursor -\u003e Accessor model Mutable",
          "source": "src/Graphics-UI-LUI-Widgets-Grid.html#noAcc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI LUI Widgets Grid",
          "module": "Graphics.UI.LUI.Widgets.Grid",
          "name": "noAcc",
          "normalized": "Cursor-\u003eAccessor a Mutable",
          "package": "lui",
          "partial": "Acc",
          "signature": "Cursor-\u003eAccessor model Mutable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lui/docs/Graphics-UI-LUI-Widgets-Grid.html#v:noAcc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.LUI.Widgets.KeysTable",
          "name": "KeysTable",
          "package": "lui",
          "source": "src/Graphics-UI-LUI-Widgets-KeysTable.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Graphics UI LUI Widgets KeysTable",
          "module": "Graphics.UI.LUI.Widgets.KeysTable",
          "name": "KeysTable",
          "package": "lui",
          "partial": "Keys Table",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/lui/docs/Graphics-UI-LUI-Widgets-KeysTable.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.LUI.Widgets.KeysTable",
          "name": "defaultDescColor",
          "package": "lui",
          "signature": "Color",
          "source": "src/Graphics-UI-LUI-Widgets-KeysTable.html#defaultDescColor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI LUI Widgets KeysTable",
          "module": "Graphics.UI.LUI.Widgets.KeysTable",
          "name": "defaultDescColor",
          "package": "lui",
          "partial": "Desc Color",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lui/docs/Graphics-UI-LUI-Widgets-KeysTable.html#v:defaultDescColor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.LUI.Widgets.KeysTable",
          "name": "defaultKeysColor",
          "package": "lui",
          "signature": "Color",
          "source": "src/Graphics-UI-LUI-Widgets-KeysTable.html#defaultKeysColor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI LUI Widgets KeysTable",
          "module": "Graphics.UI.LUI.Widgets.KeysTable",
          "name": "defaultKeysColor",
          "package": "lui",
          "partial": "Keys Color",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lui/docs/Graphics-UI-LUI-Widgets-KeysTable.html#v:defaultKeysColor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.LUI.Widgets.KeysTable",
          "name": "defaultSpaceWidth",
          "package": "lui",
          "signature": "Int",
          "source": "src/Graphics-UI-LUI-Widgets-KeysTable.html#defaultSpaceWidth",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI LUI Widgets KeysTable",
          "module": "Graphics.UI.LUI.Widgets.KeysTable",
          "name": "defaultSpaceWidth",
          "package": "lui",
          "partial": "Space Width",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lui/docs/Graphics-UI-LUI-Widgets-KeysTable.html#v:defaultSpaceWidth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.LUI.Widgets.KeysTable",
          "name": "new",
          "package": "lui",
          "signature": "Color -\u003e Color -\u003e Int -\u003e Font -\u003e Font -\u003e ActionHandlers model -\u003e Widget model",
          "source": "src/Graphics-UI-LUI-Widgets-KeysTable.html#new",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI LUI Widgets KeysTable",
          "module": "Graphics.UI.LUI.Widgets.KeysTable",
          "name": "new",
          "normalized": "Color-\u003eColor-\u003eInt-\u003eFont-\u003eFont-\u003eActionHandlers a-\u003eWidget a",
          "package": "lui",
          "signature": "Color-\u003eColor-\u003eInt-\u003eFont-\u003eFont-\u003eActionHandlers model-\u003eWidget model",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lui/docs/Graphics-UI-LUI-Widgets-KeysTable.html#v:new"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.LUI.Widgets.KeysTable",
          "name": "newBoxedWidget",
          "package": "lui",
          "signature": "Orientation -\u003e Int -\u003e Font -\u003e Font -\u003e Widget model -\u003e Widget model",
          "source": "src/Graphics-UI-LUI-Widgets-KeysTable.html#newBoxedWidget",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI LUI Widgets KeysTable",
          "module": "Graphics.UI.LUI.Widgets.KeysTable",
          "name": "newBoxedWidget",
          "normalized": "Orientation-\u003eInt-\u003eFont-\u003eFont-\u003eWidget a-\u003eWidget a",
          "package": "lui",
          "partial": "Boxed Widget",
          "signature": "Orientation-\u003eInt-\u003eFont-\u003eFont-\u003eWidget model-\u003eWidget model",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lui/docs/Graphics-UI-LUI-Widgets-KeysTable.html#v:newBoxedWidget"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.LUI.Widgets.KeysTable",
          "name": "newForWidget",
          "package": "lui",
          "signature": "Font -\u003e Font -\u003e Widget model -\u003e Widget model",
          "source": "src/Graphics-UI-LUI-Widgets-KeysTable.html#newForWidget",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI LUI Widgets KeysTable",
          "module": "Graphics.UI.LUI.Widgets.KeysTable",
          "name": "newForWidget",
          "normalized": "Font-\u003eFont-\u003eWidget a-\u003eWidget a",
          "package": "lui",
          "partial": "For Widget",
          "signature": "Font-\u003eFont-\u003eWidget model-\u003eWidget model",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lui/docs/Graphics-UI-LUI-Widgets-KeysTable.html#v:newForWidget"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.LUI.Widgets.Scroll",
          "name": "Scroll",
          "package": "lui",
          "source": "src/Graphics-UI-LUI-Widgets-Scroll.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Graphics UI LUI Widgets Scroll",
          "module": "Graphics.UI.LUI.Widgets.Scroll",
          "name": "Scroll",
          "package": "lui",
          "partial": "Scroll",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/lui/docs/Graphics-UI-LUI-Widgets-Scroll.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.LUI.Widgets.Scroll",
          "name": "Mutable",
          "package": "lui",
          "source": "src/Graphics-UI-LUI-Widgets-Scroll.html#Mutable",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics UI LUI Widgets Scroll",
          "module": "Graphics.UI.LUI.Widgets.Scroll",
          "name": "Mutable",
          "package": "lui",
          "partial": "Mutable",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/lui/docs/Graphics-UI-LUI-Widgets-Scroll.html#t:Mutable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.LUI.Widgets.Scroll",
          "name": "Mutable",
          "package": "lui",
          "signature": "Mutable",
          "source": "src/Graphics-UI-LUI-Widgets-Scroll.html#Mutable",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI LUI Widgets Scroll",
          "module": "Graphics.UI.LUI.Widgets.Scroll",
          "name": "Mutable",
          "package": "lui",
          "partial": "Mutable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lui/docs/Graphics-UI-LUI-Widgets-Scroll.html#v:Mutable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.LUI.Widgets.Scroll",
          "name": "mutablePos",
          "package": "lui",
          "signature": "Vector2 Int",
          "source": "src/Graphics-UI-LUI-Widgets-Scroll.html#Mutable",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI LUI Widgets Scroll",
          "module": "Graphics.UI.LUI.Widgets.Scroll",
          "name": "mutablePos",
          "package": "lui",
          "partial": "Pos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lui/docs/Graphics-UI-LUI-Widgets-Scroll.html#v:mutablePos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.LUI.Widgets.Scroll",
          "name": "new",
          "package": "lui",
          "signature": "Vector2 Int -\u003e Widget model -\u003e New model Mutable",
          "source": "src/Graphics-UI-LUI-Widgets-Scroll.html#new",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI LUI Widgets Scroll",
          "module": "Graphics.UI.LUI.Widgets.Scroll",
          "name": "new",
          "normalized": "Vector Int-\u003eWidget a-\u003eNew a Mutable",
          "package": "lui",
          "signature": "Vector Int-\u003eWidget model-\u003eNew model Mutable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lui/docs/Graphics-UI-LUI-Widgets-Scroll.html#v:new"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.LUI.Widgets.Space",
          "name": "Space",
          "package": "lui",
          "source": "src/Graphics-UI-LUI-Widgets-Space.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Graphics UI LUI Widgets Space",
          "module": "Graphics.UI.LUI.Widgets.Space",
          "name": "Space",
          "package": "lui",
          "partial": "Space",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/lui/docs/Graphics-UI-LUI-Widgets-Space.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.LUI.Widgets.Space",
          "name": "new",
          "package": "lui",
          "signature": "Vector2 Int -\u003e Widget model",
          "source": "src/Graphics-UI-LUI-Widgets-Space.html#new",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI LUI Widgets Space",
          "module": "Graphics.UI.LUI.Widgets.Space",
          "name": "new",
          "normalized": "Vector Int-\u003eWidget a",
          "package": "lui",
          "signature": "Vector Int-\u003eWidget model",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lui/docs/Graphics-UI-LUI-Widgets-Space.html#v:new"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.LUI.Widgets.Space",
          "name": "newH",
          "package": "lui",
          "signature": "Int -\u003e Widget model",
          "source": "src/Graphics-UI-LUI-Widgets-Space.html#newH",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI LUI Widgets Space",
          "module": "Graphics.UI.LUI.Widgets.Space",
          "name": "newH",
          "normalized": "Int-\u003eWidget a",
          "package": "lui",
          "signature": "Int-\u003eWidget model",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lui/docs/Graphics-UI-LUI-Widgets-Space.html#v:newH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.LUI.Widgets.Space",
          "name": "newW",
          "package": "lui",
          "signature": "Int -\u003e Widget model",
          "source": "src/Graphics-UI-LUI-Widgets-Space.html#newW",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI LUI Widgets Space",
          "module": "Graphics.UI.LUI.Widgets.Space",
          "name": "newW",
          "normalized": "Int-\u003eWidget a",
          "package": "lui",
          "signature": "Int-\u003eWidget model",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lui/docs/Graphics-UI-LUI-Widgets-Space.html#v:newW"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.LUI.Widgets.Space",
          "name": "newWH",
          "package": "lui",
          "signature": "Int -\u003e Int -\u003e Widget model",
          "source": "src/Graphics-UI-LUI-Widgets-Space.html#newWH",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI LUI Widgets Space",
          "module": "Graphics.UI.LUI.Widgets.Space",
          "name": "newWH",
          "normalized": "Int-\u003eInt-\u003eWidget a",
          "package": "lui",
          "partial": "WH",
          "signature": "Int-\u003eInt-\u003eWidget model",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lui/docs/Graphics-UI-LUI-Widgets-Space.html#v:newWH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.LUI.Widgets.TextEdit",
          "name": "TextEdit",
          "package": "lui",
          "source": "src/Graphics-UI-LUI-Widgets-TextEdit.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Graphics UI LUI Widgets TextEdit",
          "module": "Graphics.UI.LUI.Widgets.TextEdit",
          "name": "TextEdit",
          "package": "lui",
          "partial": "Text Edit",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/lui/docs/Graphics-UI-LUI-Widgets-TextEdit.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.LUI.Widgets.TextEdit",
          "name": "Cursor",
          "package": "lui",
          "source": "src/Graphics-UI-LUI-Widgets-TextEdit.html#Cursor",
          "type": "type"
        },
        "index": {
          "hierarchy": "Graphics UI LUI Widgets TextEdit",
          "module": "Graphics.UI.LUI.Widgets.TextEdit",
          "name": "Cursor",
          "package": "lui",
          "partial": "Cursor",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/lui/docs/Graphics-UI-LUI-Widgets-TextEdit.html#t:Cursor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.LUI.Widgets.TextEdit",
          "name": "DelegatedMutable",
          "package": "lui",
          "source": "src/Graphics-UI-LUI-Widgets-TextEdit.html#DelegatedMutable",
          "type": "type"
        },
        "index": {
          "hierarchy": "Graphics UI LUI Widgets TextEdit",
          "module": "Graphics.UI.LUI.Widgets.TextEdit",
          "name": "DelegatedMutable",
          "package": "lui",
          "partial": "Delegated Mutable",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/lui/docs/Graphics-UI-LUI-Widgets-TextEdit.html#t:DelegatedMutable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.LUI.Widgets.TextEdit",
          "name": "Mutable",
          "package": "lui",
          "source": "src/Graphics-UI-LUI-Widgets-TextEdit.html#Mutable",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics UI LUI Widgets TextEdit",
          "module": "Graphics.UI.LUI.Widgets.TextEdit",
          "name": "Mutable",
          "package": "lui",
          "partial": "Mutable",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/lui/docs/Graphics-UI-LUI-Widgets-TextEdit.html#t:Mutable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.LUI.Widgets.TextEdit",
          "name": "Mutable",
          "package": "lui",
          "signature": "Mutable",
          "source": "src/Graphics-UI-LUI-Widgets-TextEdit.html#Mutable",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI LUI Widgets TextEdit",
          "module": "Graphics.UI.LUI.Widgets.TextEdit",
          "name": "Mutable",
          "package": "lui",
          "partial": "Mutable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lui/docs/Graphics-UI-LUI-Widgets-TextEdit.html#v:Mutable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.LUI.Widgets.TextEdit",
          "name": "aDelegatedMutableCursor",
          "package": "lui",
          "signature": "Accessor DelegatedMutable Cursor",
          "source": "src/Graphics-UI-LUI-Widgets-TextEdit.html#aDelegatedMutableCursor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI LUI Widgets TextEdit",
          "module": "Graphics.UI.LUI.Widgets.TextEdit",
          "name": "aDelegatedMutableCursor",
          "package": "lui",
          "partial": "Delegated Mutable Cursor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lui/docs/Graphics-UI-LUI-Widgets-TextEdit.html#v:aDelegatedMutableCursor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.LUI.Widgets.TextEdit",
          "name": "aDelegatedMutableText",
          "package": "lui",
          "signature": "Accessor DelegatedMutable String",
          "source": "src/Graphics-UI-LUI-Widgets-TextEdit.html#aDelegatedMutableText",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI LUI Widgets TextEdit",
          "module": "Graphics.UI.LUI.Widgets.TextEdit",
          "name": "aDelegatedMutableText",
          "package": "lui",
          "partial": "Delegated Mutable Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lui/docs/Graphics-UI-LUI-Widgets-TextEdit.html#v:aDelegatedMutableText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.LUI.Widgets.TextEdit",
          "name": "aMutableCursor",
          "package": "lui",
          "signature": "Accessor Mutable Cursor",
          "source": "src/Graphics-UI-LUI-Widgets-TextEdit.html#aMutableCursor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI LUI Widgets TextEdit",
          "module": "Graphics.UI.LUI.Widgets.TextEdit",
          "name": "aMutableCursor",
          "package": "lui",
          "partial": "Mutable Cursor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lui/docs/Graphics-UI-LUI-Widgets-TextEdit.html#v:aMutableCursor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.LUI.Widgets.TextEdit",
          "name": "aMutableText",
          "package": "lui",
          "signature": "Accessor Mutable String",
          "source": "src/Graphics-UI-LUI-Widgets-TextEdit.html#aMutableText",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI LUI Widgets TextEdit",
          "module": "Graphics.UI.LUI.Widgets.TextEdit",
          "name": "aMutableText",
          "package": "lui",
          "partial": "Mutable Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lui/docs/Graphics-UI-LUI-Widgets-TextEdit.html#v:aMutableText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.LUI.Widgets.TextEdit",
          "name": "defaultCursorWidth",
          "package": "lui",
          "signature": "Int",
          "source": "src/Graphics-UI-LUI-Widgets-TextEdit.html#defaultCursorWidth",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI LUI Widgets TextEdit",
          "module": "Graphics.UI.LUI.Widgets.TextEdit",
          "name": "defaultCursorWidth",
          "package": "lui",
          "partial": "Cursor Width",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lui/docs/Graphics-UI-LUI-Widgets-TextEdit.html#v:defaultCursorWidth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.LUI.Widgets.TextEdit",
          "name": "delegatedMutable",
          "package": "lui",
          "signature": "Bool -\u003e String -\u003e Cursor -\u003e DelegatedMutable",
          "source": "src/Graphics-UI-LUI-Widgets-TextEdit.html#delegatedMutable",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI LUI Widgets TextEdit",
          "module": "Graphics.UI.LUI.Widgets.TextEdit",
          "name": "delegatedMutable",
          "normalized": "Bool-\u003eString-\u003eCursor-\u003eDelegatedMutable",
          "package": "lui",
          "partial": "Mutable",
          "signature": "Bool-\u003eString-\u003eCursor-\u003eDelegatedMutable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lui/docs/Graphics-UI-LUI-Widgets-TextEdit.html#v:delegatedMutable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.LUI.Widgets.TextEdit",
          "name": "mutableCursor",
          "package": "lui",
          "signature": "Cursor",
          "source": "src/Graphics-UI-LUI-Widgets-TextEdit.html#Mutable",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI LUI Widgets TextEdit",
          "module": "Graphics.UI.LUI.Widgets.TextEdit",
          "name": "mutableCursor",
          "package": "lui",
          "partial": "Cursor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lui/docs/Graphics-UI-LUI-Widgets-TextEdit.html#v:mutableCursor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.LUI.Widgets.TextEdit",
          "name": "mutableText",
          "package": "lui",
          "signature": "String",
          "source": "src/Graphics-UI-LUI-Widgets-TextEdit.html#Mutable",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI LUI Widgets TextEdit",
          "module": "Graphics.UI.LUI.Widgets.TextEdit",
          "name": "mutableText",
          "package": "lui",
          "partial": "Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lui/docs/Graphics-UI-LUI-Widgets-TextEdit.html#v:mutableText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.LUI.Widgets.TextEdit",
          "name": "new",
          "package": "lui",
          "signature": "Int -\u003e Color -\u003e Color -\u003e Font -\u003e Color -\u003e New model Mutable",
          "source": "src/Graphics-UI-LUI-Widgets-TextEdit.html#new",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI LUI Widgets TextEdit",
          "module": "Graphics.UI.LUI.Widgets.TextEdit",
          "name": "new",
          "normalized": "Int-\u003eColor-\u003eColor-\u003eFont-\u003eColor-\u003eNew a Mutable",
          "package": "lui",
          "signature": "Int-\u003eColor-\u003eColor-\u003eFont-\u003eColor-\u003eNew model Mutable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lui/docs/Graphics-UI-LUI-Widgets-TextEdit.html#v:new"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.LUI.Widgets.TextEdit",
          "name": "newDelegated",
          "package": "lui",
          "signature": "Color -\u003e Color -\u003e Font -\u003e Color -\u003e New model DelegatedMutable",
          "source": "src/Graphics-UI-LUI-Widgets-TextEdit.html#newDelegated",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI LUI Widgets TextEdit",
          "module": "Graphics.UI.LUI.Widgets.TextEdit",
          "name": "newDelegated",
          "normalized": "Color-\u003eColor-\u003eFont-\u003eColor-\u003eNew a DelegatedMutable",
          "package": "lui",
          "partial": "Delegated",
          "signature": "Color-\u003eColor-\u003eFont-\u003eColor-\u003eNew model DelegatedMutable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lui/docs/Graphics-UI-LUI-Widgets-TextEdit.html#v:newDelegated"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.LUI.Widgets.TextEdit",
          "name": "newDelegatedWith",
          "package": "lui",
          "signature": "Color -\u003e Int -\u003e Color -\u003e Color -\u003e Font -\u003e Color -\u003e New model DelegatedMutable",
          "source": "src/Graphics-UI-LUI-Widgets-TextEdit.html#newDelegatedWith",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI LUI Widgets TextEdit",
          "module": "Graphics.UI.LUI.Widgets.TextEdit",
          "name": "newDelegatedWith",
          "normalized": "Color-\u003eInt-\u003eColor-\u003eColor-\u003eFont-\u003eColor-\u003eNew a DelegatedMutable",
          "package": "lui",
          "partial": "Delegated With",
          "signature": "Color-\u003eInt-\u003eColor-\u003eColor-\u003eFont-\u003eColor-\u003eNew model DelegatedMutable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lui/docs/Graphics-UI-LUI-Widgets-TextEdit.html#v:newDelegatedWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.LUI.Widgets.TextView",
          "name": "TextView",
          "package": "lui",
          "source": "src/Graphics-UI-LUI-Widgets-TextView.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Graphics UI LUI Widgets TextView",
          "module": "Graphics.UI.LUI.Widgets.TextView",
          "name": "TextView",
          "package": "lui",
          "partial": "Text View",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/lui/docs/Graphics-UI-LUI-Widgets-TextView.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.LUI.Widgets.TextView",
          "name": "new",
          "package": "lui",
          "signature": "Color -\u003e Font -\u003e String -\u003e Widget model",
          "source": "src/Graphics-UI-LUI-Widgets-TextView.html#new",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI LUI Widgets TextView",
          "module": "Graphics.UI.LUI.Widgets.TextView",
          "name": "new",
          "normalized": "Color-\u003eFont-\u003eString-\u003eWidget a",
          "package": "lui",
          "signature": "Color-\u003eFont-\u003eString-\u003eWidget model",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lui/docs/Graphics-UI-LUI-Widgets-TextView.html#v:new"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.LUI.Widgets.Unfocusable",
          "name": "Unfocusable",
          "package": "lui",
          "source": "src/Graphics-UI-LUI-Widgets-Unfocusable.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Graphics UI LUI Widgets Unfocusable",
          "module": "Graphics.UI.LUI.Widgets.Unfocusable",
          "name": "Unfocusable",
          "package": "lui",
          "partial": "Unfocusable",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/lui/docs/Graphics-UI-LUI-Widgets-Unfocusable.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.LUI.Widgets.Unfocusable",
          "name": "new",
          "package": "lui",
          "signature": "Widget model -\u003e Widget model",
          "source": "src/Graphics-UI-LUI-Widgets-Unfocusable.html#new",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI LUI Widgets Unfocusable",
          "module": "Graphics.UI.LUI.Widgets.Unfocusable",
          "name": "new",
          "normalized": "Widget a-\u003eWidget a",
          "package": "lui",
          "signature": "Widget model-\u003eWidget model",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lui/docs/Graphics-UI-LUI-Widgets-Unfocusable.html#v:new"
      }
    }
  ]
]