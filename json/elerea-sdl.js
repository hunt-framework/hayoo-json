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
        "word": "elerea-sdl"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Elerea.SDL",
          "name": "SDL",
          "package": "elerea-sdl",
          "source": "src/FRP-Elerea-SDL.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "FRP Elerea SDL",
          "module": "FRP.Elerea.SDL",
          "name": "SDL",
          "package": "elerea-sdl",
          "partial": "SDL",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/elerea-sdl/docs/FRP-Elerea-SDL.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSDL Ticks\n\u003c/p\u003e",
          "module": "FRP.Elerea.SDL",
          "name": "Ticks",
          "package": "elerea-sdl",
          "source": "src/FRP-Elerea-SDL.html#Ticks",
          "type": "type"
        },
        "index": {
          "description": "SDL Ticks",
          "hierarchy": "FRP Elerea SDL",
          "module": "FRP.Elerea.SDL",
          "name": "Ticks",
          "package": "elerea-sdl",
          "partial": "Ticks",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/elerea-sdl/docs/FRP-Elerea-SDL.html#t:Ticks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMain SDL event loop (with framerate)\n\u003c/p\u003e\u003cp\u003eProduces an \u003ca\u003einfinite\u003c/a\u003e list of network samples\n\u003c/p\u003e",
          "module": "FRP.Elerea.SDL",
          "name": "sdlLoop",
          "package": "elerea-sdl",
          "signature": "Ticks-\u003e (SignalGen p (Signal [Event]) -\u003e SignalGen Ticks (Signal a))-\u003e IO [a]",
          "type": "function"
        },
        "index": {
          "description": "Main SDL event loop with framerate Produces an infinite list of network samples",
          "hierarchy": "FRP Elerea SDL",
          "module": "FRP.Elerea.SDL",
          "name": "sdlLoop",
          "normalized": "Ticks-\u003e(SignalGen a(Signal[Event])-\u003eSignalGen Ticks(Signal b))-\u003eIO[b]",
          "package": "elerea-sdl",
          "partial": "Loop",
          "signature": "Ticks-\u003e(SignalGen p(Signal[Event])-\u003eSignalGen Ticks(Signal a))-\u003eIO[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/elerea-sdl/docs/FRP-Elerea-SDL.html#v:sdlLoop"
      }
    }
  ]
]