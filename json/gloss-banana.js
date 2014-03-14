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
        "word": "gloss-banana"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Gloss.Interface.FRP.ReactiveBanana",
          "name": "ReactiveBanana",
          "package": "gloss-banana",
          "source": "src/Graphics-Gloss-Interface-FRP-ReactiveBanana.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Graphics Gloss Interface FRP ReactiveBanana",
          "module": "Graphics.Gloss.Interface.FRP.ReactiveBanana",
          "name": "ReactiveBanana",
          "package": "gloss-banana",
          "partial": "Reactive Banana",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/gloss-banana/docs/Graphics-Gloss-Interface-FRP-ReactiveBanana.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA useful type synonym for Gloss event values, to avoid confusion between\n   Gloss and ReactiveBanana.\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Interface.FRP.ReactiveBanana",
          "name": "InputEvent",
          "package": "gloss-banana",
          "source": "src/Graphics-Gloss-Interface-FRP-ReactiveBanana.html#InputEvent",
          "type": "type"
        },
        "index": {
          "description": "useful type synonym for Gloss event values to avoid confusion between Gloss and ReactiveBanana",
          "hierarchy": "Graphics Gloss Interface FRP ReactiveBanana",
          "module": "Graphics.Gloss.Interface.FRP.ReactiveBanana",
          "name": "InputEvent",
          "package": "gloss-banana",
          "partial": "Input Event",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/gloss-banana/docs/Graphics-Gloss-Interface-FRP-ReactiveBanana.html#t:InputEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePlay the game in a window, updating when the value of the provided\n   Behavior t Picture changes.\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Interface.FRP.ReactiveBanana",
          "name": "playBanana",
          "package": "gloss-banana",
          "signature": "Event t Float -\u003e Event t InputEvent -\u003e Moment t (Behavior t Picture))-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Play the game in window updating when the value of the provided Behavior Picture changes",
          "hierarchy": "Graphics Gloss Interface FRP ReactiveBanana",
          "module": "Graphics.Gloss.Interface.FRP.ReactiveBanana",
          "name": "playBanana",
          "normalized": "Event a Float-\u003eEvent a InputEvent-\u003eMoment a(Behavior a Picture))-\u003eIO()",
          "package": "gloss-banana",
          "partial": "Banana",
          "signature": "Event t Float-\u003eEvent t InputEvent-\u003eMoment t(Behavior t Picture))-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss-banana/docs/Graphics-Gloss-Interface-FRP-ReactiveBanana.html#v:playBanana"
      }
    }
  ]
]