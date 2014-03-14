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
        "word": "gloss-game"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Gloss.Game",
          "name": "Game",
          "package": "gloss-game",
          "source": "src/Graphics-Gloss-Game.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Graphics Gloss Game",
          "module": "Graphics.Gloss.Game",
          "name": "Game",
          "package": "gloss-game",
          "partial": "Game",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/gloss-game/docs/Graphics-Gloss-Game.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn abstract representation of an animation.\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Game",
          "name": "Animation",
          "package": "gloss-game",
          "source": "src/Graphics-Gloss-Game.html#Animation",
          "type": "data"
        },
        "index": {
          "description": "An abstract representation of an animation",
          "hierarchy": "Graphics Gloss Game",
          "module": "Graphics.Gloss.Game",
          "name": "Animation",
          "package": "gloss-game",
          "partial": "Animation",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/gloss-game/docs/Graphics-Gloss-Game.html#t:Animation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Gloss.Game",
          "name": "Rect",
          "package": "gloss-game",
          "source": "src/Graphics-Gloss-Game.html#Rect",
          "type": "type"
        },
        "index": {
          "hierarchy": "Graphics Gloss Game",
          "module": "Graphics.Gloss.Game",
          "name": "Rect",
          "package": "gloss-game",
          "partial": "Rect",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/gloss-game/docs/Graphics-Gloss-Game.html#t:Rect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA scene describes the rendering of a world state &#8212; i.e., which picture should be draw depending on the current time\n and of the state of the world.\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Game",
          "name": "Scene",
          "package": "gloss-game",
          "source": "src/Graphics-Gloss-Game.html#Scene",
          "type": "data"
        },
        "index": {
          "description": "scene describes the rendering of world state i.e which picture should be draw depending on the current time and of the state of the world",
          "hierarchy": "Graphics Gloss Game",
          "module": "Graphics.Gloss.Game",
          "name": "Scene",
          "package": "gloss-game",
          "partial": "Scene",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/gloss-game/docs/Graphics-Gloss-Game.html#t:Scene"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Gloss.Game",
          "name": "Size",
          "package": "gloss-game",
          "source": "src/Graphics-Gloss-Game.html#Size",
          "type": "type"
        },
        "index": {
          "hierarchy": "Graphics Gloss Game",
          "module": "Graphics.Gloss.Game",
          "name": "Size",
          "package": "gloss-game",
          "partial": "Size",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/gloss-game/docs/Graphics-Gloss-Game.html#t:Size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAnimate a world-dependent animation. The default picture is displayed while no animation is running.\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Game",
          "name": "animating",
          "package": "gloss-game",
          "signature": "(world -\u003e Animation) -\u003e Picture -\u003e Scene world",
          "source": "src/Graphics-Gloss-Game.html#animating",
          "type": "function"
        },
        "index": {
          "description": "Animate world-dependent animation The default picture is displayed while no animation is running",
          "hierarchy": "Graphics Gloss Game",
          "module": "Graphics.Gloss.Game",
          "name": "animating",
          "normalized": "(a-\u003eAnimation)-\u003ePicture-\u003eScene a",
          "package": "gloss-game",
          "signature": "(world-\u003eAnimation)-\u003ePicture-\u003eScene world",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss-game/docs/Graphics-Gloss-Game.html#v:animating"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a new animation with a list of pictures for the animation, the time between animation frames, and a given\n (absolute) start time.\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Game",
          "name": "animation",
          "package": "gloss-game",
          "signature": "[Picture] -\u003e Float -\u003e Float -\u003e Animation",
          "source": "src/Graphics-Gloss-Game.html#animation",
          "type": "function"
        },
        "index": {
          "description": "Construct new animation with list of pictures for the animation the time between animation frames and given absolute start time",
          "hierarchy": "Graphics Gloss Game",
          "module": "Graphics.Gloss.Game",
          "name": "animation",
          "normalized": "[Picture]-\u003eFloat-\u003eFloat-\u003eAnimation",
          "package": "gloss-game",
          "signature": "[Picture]-\u003eFloat-\u003eFloat-\u003eAnimation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss-game/docs/Graphics-Gloss-Game.html#v:animation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTurn a bitmap file into a picture.\n\u003c/p\u003e\u003cp\u003eNB: Define loaded pictures on the toplevel to avoid reloading.\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Game",
          "name": "bmp",
          "package": "gloss-game",
          "signature": "FilePath -\u003e Picture",
          "source": "src/Graphics-Gloss-Game.html#bmp",
          "type": "function"
        },
        "index": {
          "description": "Turn bitmap file into picture NB Define loaded pictures on the toplevel to avoid reloading",
          "hierarchy": "Graphics Gloss Game",
          "module": "Graphics.Gloss.Game",
          "name": "bmp",
          "normalized": "FilePath-\u003ePicture",
          "package": "gloss-game",
          "signature": "FilePath-\u003ePicture",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss-game/docs/Graphics-Gloss-Game.html#v:bmp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermine the bounding box of a picture.\n\u003c/p\u003e\u003cp\u003eFIXME: Current implementation is incomplete!\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Game",
          "name": "boundingBox",
          "package": "gloss-game",
          "signature": "Picture -\u003e Rect",
          "source": "src/Graphics-Gloss-Game.html#boundingBox",
          "type": "function"
        },
        "index": {
          "description": "Determine the bounding box of picture FIXME Current implementation is incomplete",
          "hierarchy": "Graphics Gloss Game",
          "module": "Graphics.Gloss.Game",
          "name": "boundingBox",
          "normalized": "Picture-\u003eRect",
          "package": "gloss-game",
          "partial": "Box",
          "signature": "Picture-\u003eRect",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss-game/docs/Graphics-Gloss-Game.html#v:boundingBox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRender a scene on the basis of time since playing started and the specific world state.\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Game",
          "name": "drawScene",
          "package": "gloss-game",
          "signature": "Scene world -\u003e Float -\u003e world -\u003e Picture",
          "source": "src/Graphics-Gloss-Game.html#drawScene",
          "type": "function"
        },
        "index": {
          "description": "Render scene on the basis of time since playing started and the specific world state",
          "hierarchy": "Graphics Gloss Game",
          "module": "Graphics.Gloss.Game",
          "name": "drawScene",
          "normalized": "Scene a-\u003eFloat-\u003ea-\u003ePicture",
          "package": "gloss-game",
          "partial": "Scene",
          "signature": "Scene world-\u003eFloat-\u003eworld-\u003ePicture",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss-game/docs/Graphics-Gloss-Game.html#v:drawScene"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTurn a JPEG file into a picture.\n\u003c/p\u003e\u003cp\u003eNB: Define loaded pictures on the toplevel to avoid reloading.\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Game",
          "name": "jpg",
          "package": "gloss-game",
          "signature": "FilePath -\u003e Picture",
          "source": "src/Graphics-Gloss-Game.html#jpg",
          "type": "function"
        },
        "index": {
          "description": "Turn JPEG file into picture NB Define loaded pictures on the toplevel to avoid reloading",
          "hierarchy": "Graphics Gloss Game",
          "module": "Graphics.Gloss.Game",
          "name": "jpg",
          "normalized": "FilePath-\u003ePicture",
          "package": "gloss-game",
          "signature": "FilePath-\u003ePicture",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss-game/docs/Graphics-Gloss-Game.html#v:jpg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn empty animation.\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Game",
          "name": "noAnimation",
          "package": "gloss-game",
          "signature": "Animation",
          "source": "src/Graphics-Gloss-Game.html#noAnimation",
          "type": "function"
        },
        "index": {
          "description": "An empty animation",
          "hierarchy": "Graphics Gloss Game",
          "module": "Graphics.Gloss.Game",
          "name": "noAnimation",
          "package": "gloss-game",
          "partial": "Animation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss-game/docs/Graphics-Gloss-Game.html#v:noAnimation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTurn a static picture into a scene.\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Game",
          "name": "picture",
          "package": "gloss-game",
          "signature": "Picture -\u003e Scene world",
          "source": "src/Graphics-Gloss-Game.html#picture",
          "type": "function"
        },
        "index": {
          "description": "Turn static picture into scene",
          "hierarchy": "Graphics Gloss Game",
          "module": "Graphics.Gloss.Game",
          "name": "picture",
          "normalized": "Picture-\u003eScene a",
          "package": "gloss-game",
          "signature": "Picture-\u003eScene world",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss-game/docs/Graphics-Gloss-Game.html#v:picture"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTurn a world-dependent picture into a scene.\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Game",
          "name": "picturing",
          "package": "gloss-game",
          "signature": "(world -\u003e Picture) -\u003e Scene world",
          "source": "src/Graphics-Gloss-Game.html#picturing",
          "type": "function"
        },
        "index": {
          "description": "Turn world-dependent picture into scene",
          "hierarchy": "Graphics Gloss Game",
          "module": "Graphics.Gloss.Game",
          "name": "picturing",
          "normalized": "(a-\u003ePicture)-\u003eScene a",
          "package": "gloss-game",
          "signature": "(world-\u003ePicture)-\u003eScene world",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss-game/docs/Graphics-Gloss-Game.html#v:picturing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePlay a game.\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Game",
          "name": "play",
          "package": "gloss-game",
          "signature": "Display-\u003e Color-\u003e Int-\u003e world-\u003e (world -\u003e Picture)-\u003e (Event -\u003e world -\u003e world)-\u003e [Float -\u003e world -\u003e world]-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Play game",
          "hierarchy": "Graphics Gloss Game",
          "module": "Graphics.Gloss.Game",
          "name": "play",
          "normalized": "Display-\u003eColor-\u003eInt-\u003ea-\u003e(a-\u003ePicture)-\u003e(Event-\u003ea-\u003ea)-\u003e[Float-\u003ea-\u003ea]-\u003eIO()",
          "package": "gloss-game",
          "signature": "Display-\u003eColor-\u003eInt-\u003eworld-\u003e(world-\u003ePicture)-\u003e(Event-\u003eworld-\u003eworld)-\u003e[Float-\u003eworld-\u003eworld]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss-game/docs/Graphics-Gloss-Game.html#v:play"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePlay a game in a scene.\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Game",
          "name": "playInScene",
          "package": "gloss-game",
          "signature": "Display-\u003e Color-\u003e Int-\u003e world-\u003e Scene world-\u003e (Float -\u003e Event -\u003e world -\u003e world)-\u003e [Float -\u003e Float -\u003e world -\u003e world]-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Play game in scene",
          "hierarchy": "Graphics Gloss Game",
          "module": "Graphics.Gloss.Game",
          "name": "playInScene",
          "normalized": "Display-\u003eColor-\u003eInt-\u003ea-\u003eScene a-\u003e(Float-\u003eEvent-\u003ea-\u003ea)-\u003e[Float-\u003eFloat-\u003ea-\u003ea]-\u003eIO()",
          "package": "gloss-game",
          "partial": "In Scene",
          "signature": "Display-\u003eColor-\u003eInt-\u003eworld-\u003eScene world-\u003e(Float-\u003eEvent-\u003eworld-\u003eworld)-\u003e[Float-\u003eFloat-\u003eworld-\u003eworld]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss-game/docs/Graphics-Gloss-Game.html#v:playInScene"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTurn a PNG file into a picture.\n\u003c/p\u003e\u003cp\u003eNB: Define loaded pictures on the toplevel to avoid reloading.\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Game",
          "name": "png",
          "package": "gloss-game",
          "signature": "FilePath -\u003e Picture",
          "source": "src/Graphics-Gloss-Game.html#png",
          "type": "function"
        },
        "index": {
          "description": "Turn PNG file into picture NB Define loaded pictures on the toplevel to avoid reloading",
          "hierarchy": "Graphics Gloss Game",
          "module": "Graphics.Gloss.Game",
          "name": "png",
          "normalized": "FilePath-\u003ePicture",
          "package": "gloss-game",
          "signature": "FilePath-\u003ePicture",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss-game/docs/Graphics-Gloss-Game.html#v:png"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRotate a scene in dependences on a world-dependent angle.\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Game",
          "name": "rotating",
          "package": "gloss-game",
          "signature": "(world -\u003e Float) -\u003e Scene world -\u003e Scene world",
          "source": "src/Graphics-Gloss-Game.html#rotating",
          "type": "function"
        },
        "index": {
          "description": "Rotate scene in dependences on world-dependent angle",
          "hierarchy": "Graphics Gloss Game",
          "module": "Graphics.Gloss.Game",
          "name": "rotating",
          "normalized": "(a-\u003eFloat)-\u003eScene a-\u003eScene a",
          "package": "gloss-game",
          "signature": "(world-\u003eFloat)-\u003eScene world-\u003eScene world",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss-game/docs/Graphics-Gloss-Game.html#v:rotating"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eScale a scene in dependences on world-dependent scaling factors.\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Game",
          "name": "scaling",
          "package": "gloss-game",
          "signature": "(world -\u003e (Float, Float)) -\u003e Scene world -\u003e Scene world",
          "source": "src/Graphics-Gloss-Game.html#scaling",
          "type": "function"
        },
        "index": {
          "description": "Scale scene in dependences on world-dependent scaling factors",
          "hierarchy": "Graphics Gloss Game",
          "module": "Graphics.Gloss.Game",
          "name": "scaling",
          "normalized": "(a-\u003e(Float,Float))-\u003eScene a-\u003eScene a",
          "package": "gloss-game",
          "signature": "(world-\u003e(Float,Float))-\u003eScene world-\u003eScene world",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss-game/docs/Graphics-Gloss-Game.html#v:scaling"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompose a scene from a list of scenes.\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Game",
          "name": "scenes",
          "package": "gloss-game",
          "signature": "[Scene world] -\u003e Scene world",
          "source": "src/Graphics-Gloss-Game.html#scenes",
          "type": "function"
        },
        "index": {
          "description": "Compose scene from list of scenes",
          "hierarchy": "Graphics Gloss Game",
          "module": "Graphics.Gloss.Game",
          "name": "scenes",
          "normalized": "[Scene a]-\u003eScene a",
          "package": "gloss-game",
          "signature": "[Scene world]-\u003eScene world",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss-game/docs/Graphics-Gloss-Game.html#v:scenes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMove a scene in dependences on a world-dependent location.\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Game",
          "name": "translating",
          "package": "gloss-game",
          "signature": "(world -\u003e Point) -\u003e Scene world -\u003e Scene world",
          "source": "src/Graphics-Gloss-Game.html#translating",
          "type": "function"
        },
        "index": {
          "description": "Move scene in dependences on world-dependent location",
          "hierarchy": "Graphics Gloss Game",
          "module": "Graphics.Gloss.Game",
          "name": "translating",
          "normalized": "(a-\u003ePoint)-\u003eScene a-\u003eScene a",
          "package": "gloss-game",
          "signature": "(world-\u003ePoint)-\u003eScene world-\u003eScene world",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss-game/docs/Graphics-Gloss-Game.html#v:translating"
      }
    }
  ]
]