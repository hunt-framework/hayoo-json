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
        "word": "SimpleGL"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "SimpleH.GL.Texture",
          "name": "Texture",
          "package": "SimpleGL",
          "source": "src/SimpleH-GL-Texture.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "SimpleH GL Texture",
          "module": "SimpleH.GL.Texture",
          "name": "Texture",
          "package": "SimpleGL",
          "partial": "Texture",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/SimpleGL/docs/SimpleH-GL-Texture.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe abstract Texture type\n\u003c/p\u003e",
          "module": "SimpleH.GL.Texture",
          "name": "Texture",
          "package": "SimpleGL",
          "source": "src/SimpleH-GL-Texture.html#Texture",
          "type": "data"
        },
        "index": {
          "description": "The abstract Texture type",
          "hierarchy": "SimpleH GL Texture",
          "module": "SimpleH.GL.Texture",
          "name": "Texture",
          "package": "SimpleGL",
          "partial": "Texture",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/SimpleGL/docs/SimpleH-GL-Texture.html#t:Texture"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTry to convert a JuicyPixels image to a texture.\n\u003c/p\u003e",
          "module": "SimpleH.GL.Texture",
          "name": "imageTexture",
          "package": "SimpleGL",
          "signature": "DynamicImage -\u003e IO (Either [Char] Texture)",
          "source": "src/SimpleH-GL-Texture.html#imageTexture",
          "type": "function"
        },
        "index": {
          "description": "Try to convert JuicyPixels image to texture",
          "hierarchy": "SimpleH GL Texture",
          "module": "SimpleH.GL.Texture",
          "name": "imageTexture",
          "normalized": "DynamicImage-\u003eIO(Either[Char]Texture)",
          "package": "SimpleGL",
          "partial": "Texture",
          "signature": "DynamicImage-\u003eIO(Either[Char]Texture)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleGL/docs/SimpleH-GL-Texture.html#v:imageTexture"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a texture from a file.\n\u003c/p\u003e",
          "module": "SimpleH.GL.Texture",
          "name": "readTexture",
          "package": "SimpleGL",
          "signature": "FilePath -\u003e IO (Either String Texture)",
          "source": "src/SimpleH-GL-Texture.html#readTexture",
          "type": "function"
        },
        "index": {
          "description": "Read texture from file",
          "hierarchy": "SimpleH GL Texture",
          "module": "SimpleH.GL.Texture",
          "name": "readTexture",
          "normalized": "FilePath-\u003eIO(Either String Texture)",
          "package": "SimpleGL",
          "partial": "Texture",
          "signature": "FilePath-\u003eIO(Either String Texture)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleGL/docs/SimpleH-GL-Texture.html#v:readTexture"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTry to read a structure of files into a structure of textures.\n\u003c/p\u003e",
          "module": "SimpleH.GL.Texture",
          "name": "readTextures",
          "package": "SimpleGL",
          "signature": "t FilePath -\u003e IO (Either String (t Texture))",
          "source": "src/SimpleH-GL-Texture.html#readTextures",
          "type": "function"
        },
        "index": {
          "description": "Try to read structure of files into structure of textures",
          "hierarchy": "SimpleH GL Texture",
          "module": "SimpleH.GL.Texture",
          "name": "readTextures",
          "normalized": "a FilePath-\u003eIO(Either String(a Texture))",
          "package": "SimpleGL",
          "partial": "Textures",
          "signature": "t FilePath-\u003eIO(Either String(t Texture))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleGL/docs/SimpleH-GL-Texture.html#v:readTextures"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a structure of files into a structure of textures, raising an error\n if it fails.\n\u003c/p\u003e",
          "module": "SimpleH.GL.Texture",
          "name": "readTextures'",
          "package": "SimpleGL",
          "signature": "t FilePath -\u003e IO (t Texture)",
          "source": "src/SimpleH-GL-Texture.html#readTextures%27",
          "type": "function"
        },
        "index": {
          "description": "Read structure of files into structure of textures raising an error if it fails",
          "hierarchy": "SimpleH GL Texture",
          "module": "SimpleH.GL.Texture",
          "name": "readTextures'",
          "normalized": "a FilePath-\u003eIO(a Texture)",
          "package": "SimpleGL",
          "partial": "Textures'",
          "signature": "t FilePath-\u003eIO(t Texture)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleGL/docs/SimpleH-GL-Texture.html#v:readTextures-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "SimpleH.GL",
          "name": "GL",
          "package": "SimpleGL",
          "source": "src/SimpleH-GL.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "SimpleH GL",
          "module": "SimpleH.GL",
          "name": "GL",
          "package": "SimpleGL",
          "partial": "GL",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/SimpleGL/docs/SimpleH-GL.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "SimpleH.GL",
          "name": "Button",
          "package": "SimpleGL",
          "source": "src/SimpleH-GL.html#Button",
          "type": "data"
        },
        "index": {
          "hierarchy": "SimpleH GL",
          "module": "SimpleH.GL",
          "name": "Button",
          "package": "SimpleGL",
          "partial": "Button",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/SimpleGL/docs/SimpleH-GL.html#t:Button"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "SimpleH.GL",
          "name": "Coord",
          "package": "SimpleGL",
          "source": "src/SimpleH-GL.html#Coord",
          "type": "type"
        },
        "index": {
          "hierarchy": "SimpleH GL",
          "module": "SimpleH.GL",
          "name": "Coord",
          "package": "SimpleGL",
          "partial": "Coord",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/SimpleGL/docs/SimpleH-GL.html#t:Coord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "SimpleH.GL",
          "name": "EventHandler",
          "package": "SimpleGL",
          "source": "src/SimpleH-GL.html#EventHandler",
          "type": "type"
        },
        "index": {
          "hierarchy": "SimpleH GL",
          "module": "SimpleH.GL",
          "name": "EventHandler",
          "package": "SimpleGL",
          "partial": "Event Handler",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/SimpleGL/docs/SimpleH-GL.html#t:EventHandler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA concrete implementation of a read-only state variable, carrying an IO\n action to read the value.\n\u003c/p\u003e",
          "module": "SimpleH.GL",
          "name": "GettableStateVar",
          "package": "SimpleGL",
          "type": "data"
        },
        "index": {
          "description": "concrete implementation of read-only state variable carrying an IO action to read the value",
          "hierarchy": "SimpleH GL",
          "module": "SimpleH.GL",
          "name": "GettableStateVar",
          "package": "SimpleGL",
          "partial": "Gettable State Var",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/SimpleGL/docs/SimpleH-GL.html#t:GettableStateVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "SimpleH.GL",
          "name": "Graphics",
          "package": "SimpleGL",
          "source": "src/SimpleH-GL-Base.html#Graphics",
          "type": "class"
        },
        "index": {
          "hierarchy": "SimpleH GL",
          "module": "SimpleH.GL",
          "name": "Graphics",
          "package": "SimpleGL",
          "partial": "Graphics",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/SimpleGL/docs/SimpleH-GL.html#t:Graphics"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eKey or button state.\n\u003c/p\u003e",
          "module": "SimpleH.GL",
          "name": "KeyButtonState",
          "package": "SimpleGL",
          "type": "data"
        },
        "index": {
          "description": "Key or button state",
          "hierarchy": "SimpleH GL",
          "module": "SimpleH.GL",
          "name": "KeyButtonState",
          "package": "SimpleGL",
          "partial": "Key Button State",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/SimpleGL/docs/SimpleH-GL.html#t:KeyButtonState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "SimpleH.GL",
          "name": "Position",
          "package": "SimpleGL",
          "source": "src/SimpleH-GL.html#Position",
          "type": "type"
        },
        "index": {
          "hierarchy": "SimpleH GL",
          "module": "SimpleH.GL",
          "name": "Position",
          "package": "SimpleGL",
          "partial": "Position",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/SimpleGL/docs/SimpleH-GL.html#t:Position"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "SimpleH.GL",
          "name": "Scene",
          "package": "SimpleGL",
          "source": "src/SimpleH-GL.html#Scene",
          "type": "type"
        },
        "index": {
          "hierarchy": "SimpleH GL",
          "module": "SimpleH.GL",
          "name": "Scene",
          "package": "SimpleGL",
          "partial": "Scene",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/SimpleGL/docs/SimpleH-GL.html#t:Scene"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA concrete implementation of a write-only state variable, carrying an IO\n action to write the new value.\n\u003c/p\u003e",
          "module": "SimpleH.GL",
          "name": "SettableStateVar",
          "package": "SimpleGL",
          "type": "data"
        },
        "index": {
          "description": "concrete implementation of write-only state variable carrying an IO action to write the new value",
          "hierarchy": "SimpleH GL",
          "module": "SimpleH.GL",
          "name": "SettableStateVar",
          "package": "SimpleGL",
          "partial": "Settable State Var",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/SimpleGL/docs/SimpleH-GL.html#t:SettableStateVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "SimpleH.GL",
          "name": "Shape",
          "package": "SimpleGL",
          "source": "src/SimpleH-GL.html#Shape",
          "type": "data"
        },
        "index": {
          "hierarchy": "SimpleH GL",
          "module": "SimpleH.GL",
          "name": "Shape",
          "package": "SimpleGL",
          "partial": "Shape",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/SimpleGL/docs/SimpleH-GL.html#t:Shape"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "SimpleH.GL",
          "name": "ShapeProp",
          "package": "SimpleGL",
          "source": "src/SimpleH-GL.html#ShapeProp",
          "type": "data"
        },
        "index": {
          "hierarchy": "SimpleH GL",
          "module": "SimpleH.GL",
          "name": "ShapeProp",
          "package": "SimpleGL",
          "partial": "Shape Prop",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/SimpleGL/docs/SimpleH-GL.html#t:ShapeProp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA 2-dimensional size, measured in pixels.\n\u003c/p\u003e",
          "module": "SimpleH.GL",
          "name": "Size",
          "package": "SimpleGL",
          "type": "data"
        },
        "index": {
          "description": "dimensional size measured in pixels",
          "hierarchy": "SimpleH GL",
          "module": "SimpleH.GL",
          "name": "Size",
          "package": "SimpleGL",
          "partial": "Size",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/SimpleGL/docs/SimpleH-GL.html#t:Size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "SimpleH.GL",
          "name": "Title",
          "package": "SimpleGL",
          "source": "src/SimpleH-GL.html#Title",
          "type": "type"
        },
        "index": {
          "hierarchy": "SimpleH GL",
          "module": "SimpleH.GL",
          "name": "Title",
          "package": "SimpleGL",
          "partial": "Title",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/SimpleGL/docs/SimpleH-GL.html#t:Title"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "SimpleH.GL",
          "name": "Transform",
          "package": "SimpleGL",
          "source": "src/SimpleH-GL.html#Transform",
          "type": "data"
        },
        "index": {
          "hierarchy": "SimpleH GL",
          "module": "SimpleH.GL",
          "name": "Transform",
          "package": "SimpleGL",
          "partial": "Transform",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/SimpleGL/docs/SimpleH-GL.html#t:Transform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA two-element vector\n\u003c/p\u003e",
          "module": "SimpleH.GL",
          "name": "V2",
          "package": "SimpleGL",
          "source": "src/SimpleH-GL-Base.html#V2",
          "type": "data"
        },
        "index": {
          "description": "two-element vector",
          "hierarchy": "SimpleH GL",
          "module": "SimpleH.GL",
          "name": "V2",
          "package": "SimpleGL",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/SimpleGL/docs/SimpleH-GL.html#t:V2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA three-element vector\n\u003c/p\u003e",
          "module": "SimpleH.GL",
          "name": "V3",
          "package": "SimpleGL",
          "source": "src/SimpleH-GL-Base.html#V3",
          "type": "data"
        },
        "index": {
          "description": "three-element vector",
          "hierarchy": "SimpleH GL",
          "module": "SimpleH.GL",
          "name": "V3",
          "package": "SimpleGL",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/SimpleGL/docs/SimpleH-GL.html#t:V3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA three-element vector\n\u003c/p\u003e",
          "module": "SimpleH.GL",
          "name": "V4",
          "package": "SimpleGL",
          "source": "src/SimpleH-GL-Base.html#V4",
          "type": "data"
        },
        "index": {
          "description": "three-element vector",
          "hierarchy": "SimpleH GL",
          "module": "SimpleH.GL",
          "name": "V4",
          "package": "SimpleGL",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/SimpleGL/docs/SimpleH-GL.html#t:V4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "SimpleH.GL",
          "name": "Vertex",
          "package": "SimpleGL",
          "source": "src/SimpleH-GL.html#Vertex",
          "type": "data"
        },
        "index": {
          "hierarchy": "SimpleH GL",
          "module": "SimpleH.GL",
          "name": "Vertex",
          "package": "SimpleGL",
          "partial": "Vertex",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/SimpleGL/docs/SimpleH-GL.html#t:Vertex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "SimpleH.GL",
          "name": "VertexProp",
          "package": "SimpleGL",
          "source": "src/SimpleH-GL.html#VertexProp",
          "type": "data"
        },
        "index": {
          "hierarchy": "SimpleH GL",
          "module": "SimpleH.GL",
          "name": "VertexProp",
          "package": "SimpleGL",
          "partial": "Vertex Prop",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/SimpleGL/docs/SimpleH-GL.html#t:VertexProp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "SimpleH.GL",
          "name": "Widget",
          "package": "SimpleGL",
          "source": "src/SimpleH-GL.html#Widget",
          "type": "data"
        },
        "index": {
          "hierarchy": "SimpleH GL",
          "module": "SimpleH.GL",
          "name": "Widget",
          "package": "SimpleGL",
          "partial": "Widget",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/SimpleGL/docs/SimpleH-GL.html#t:Widget"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "SimpleH.GL",
          "name": "CharKey",
          "package": "SimpleGL",
          "signature": "CharKey Char",
          "source": "src/SimpleH-GL.html#Button",
          "type": "function"
        },
        "index": {
          "hierarchy": "SimpleH GL",
          "module": "SimpleH.GL",
          "name": "CharKey",
          "package": "SimpleGL",
          "partial": "Char Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleGL/docs/SimpleH-GL.html#v:CharKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "SimpleH.GL",
          "name": "Color",
          "package": "SimpleGL",
          "signature": "Color (V4 t)",
          "source": "src/SimpleH-GL.html#VertexProp",
          "type": "function"
        },
        "index": {
          "hierarchy": "SimpleH GL",
          "module": "SimpleH.GL",
          "name": "Color",
          "package": "SimpleGL",
          "partial": "Color",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleGL/docs/SimpleH-GL.html#v:Color"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "SimpleH.GL",
          "name": "MouseButton",
          "package": "SimpleGL",
          "signature": "MouseButton MouseButton",
          "source": "src/SimpleH-GL.html#Button",
          "type": "function"
        },
        "index": {
          "hierarchy": "SimpleH GL",
          "module": "SimpleH.GL",
          "name": "MouseButton",
          "package": "SimpleGL",
          "partial": "Mouse Button",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleGL/docs/SimpleH-GL.html#v:MouseButton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "SimpleH.GL",
          "name": "Polygon",
          "package": "SimpleGL",
          "signature": "Polygon [Vertex t]",
          "source": "src/SimpleH-GL.html#Shape",
          "type": "function"
        },
        "index": {
          "hierarchy": "SimpleH GL",
          "module": "SimpleH.GL",
          "name": "Polygon",
          "normalized": "Polygon[Vertex a]",
          "package": "SimpleGL",
          "partial": "Polygon",
          "signature": "Polygon[Vertex t]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleGL/docs/SimpleH-GL.html#v:Polygon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "SimpleH.GL",
          "name": "Press",
          "package": "SimpleGL",
          "signature": "Press",
          "type": "function"
        },
        "index": {
          "hierarchy": "SimpleH GL",
          "module": "SimpleH.GL",
          "name": "Press",
          "package": "SimpleGL",
          "partial": "Press",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleGL/docs/SimpleH-GL.html#v:Press"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "SimpleH.GL",
          "name": "Release",
          "package": "SimpleGL",
          "signature": "Release",
          "type": "function"
        },
        "index": {
          "hierarchy": "SimpleH GL",
          "module": "SimpleH.GL",
          "name": "Release",
          "package": "SimpleGL",
          "partial": "Release",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleGL/docs/SimpleH-GL.html#v:Release"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "SimpleH.GL",
          "name": "Rotate",
          "package": "SimpleGL",
          "signature": "Rotate !t (V3 t)",
          "source": "src/SimpleH-GL.html#Transform",
          "type": "function"
        },
        "index": {
          "hierarchy": "SimpleH GL",
          "module": "SimpleH.GL",
          "name": "Rotate",
          "package": "SimpleGL",
          "partial": "Rotate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleGL/docs/SimpleH-GL.html#v:Rotate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "SimpleH.GL",
          "name": "Shape",
          "package": "SimpleGL",
          "signature": "Shape [ShapeProp] (Shape t)",
          "source": "src/SimpleH-GL.html#Widget",
          "type": "function"
        },
        "index": {
          "hierarchy": "SimpleH GL",
          "module": "SimpleH.GL",
          "name": "Shape",
          "normalized": "Shape[ShapeProp](Shape a)",
          "package": "SimpleGL",
          "partial": "Shape",
          "signature": "Shape[ShapeProp](Shape t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleGL/docs/SimpleH-GL.html#v:Shape"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "SimpleH.GL",
          "name": "Size",
          "package": "SimpleGL",
          "signature": "Size !GLsizei !GLsizei",
          "type": "function"
        },
        "index": {
          "hierarchy": "SimpleH GL",
          "module": "SimpleH.GL",
          "name": "Size",
          "package": "SimpleGL",
          "partial": "Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleGL/docs/SimpleH-GL.html#v:Size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "SimpleH.GL",
          "name": "SpecialKey",
          "package": "SimpleGL",
          "signature": "SpecialKey SpecialKey",
          "source": "src/SimpleH-GL.html#Button",
          "type": "function"
        },
        "index": {
          "hierarchy": "SimpleH GL",
          "module": "SimpleH.GL",
          "name": "SpecialKey",
          "package": "SimpleGL",
          "partial": "Special Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleGL/docs/SimpleH-GL.html#v:SpecialKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "SimpleH.GL",
          "name": "SubScene",
          "package": "SimpleGL",
          "signature": "SubScene [Transform t] (Scene t)",
          "source": "src/SimpleH-GL.html#Widget",
          "type": "function"
        },
        "index": {
          "hierarchy": "SimpleH GL",
          "module": "SimpleH.GL",
          "name": "SubScene",
          "normalized": "SubScene[Transform a](Scene a)",
          "package": "SimpleGL",
          "partial": "Sub Scene",
          "signature": "SubScene[Transform t](Scene t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleGL/docs/SimpleH-GL.html#v:SubScene"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "SimpleH.GL",
          "name": "TexCoord",
          "package": "SimpleGL",
          "signature": "TexCoord (V2 t)",
          "source": "src/SimpleH-GL.html#VertexProp",
          "type": "function"
        },
        "index": {
          "hierarchy": "SimpleH GL",
          "module": "SimpleH.GL",
          "name": "TexCoord",
          "package": "SimpleGL",
          "partial": "Tex Coord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleGL/docs/SimpleH-GL.html#v:TexCoord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "SimpleH.GL",
          "name": "Texture",
          "package": "SimpleGL",
          "signature": "Texture Texture",
          "source": "src/SimpleH-GL.html#ShapeProp",
          "type": "function"
        },
        "index": {
          "hierarchy": "SimpleH GL",
          "module": "SimpleH.GL",
          "name": "Texture",
          "package": "SimpleGL",
          "partial": "Texture",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleGL/docs/SimpleH-GL.html#v:Texture"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "SimpleH.GL",
          "name": "Translate",
          "package": "SimpleGL",
          "signature": "Translate !t !t !t",
          "source": "src/SimpleH-GL.html#Transform",
          "type": "function"
        },
        "index": {
          "hierarchy": "SimpleH GL",
          "module": "SimpleH.GL",
          "name": "Translate",
          "package": "SimpleGL",
          "partial": "Translate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleGL/docs/SimpleH-GL.html#v:Translate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "SimpleH.GL",
          "name": "V2",
          "package": "SimpleGL",
          "signature": "V2 !t !t",
          "source": "src/SimpleH-GL-Base.html#V2",
          "type": "function"
        },
        "index": {
          "hierarchy": "SimpleH GL",
          "module": "SimpleH.GL",
          "name": "V2",
          "package": "SimpleGL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleGL/docs/SimpleH-GL.html#v:V2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "SimpleH.GL",
          "name": "V3",
          "package": "SimpleGL",
          "signature": "V3 !t !t !t",
          "source": "src/SimpleH-GL-Base.html#V3",
          "type": "function"
        },
        "index": {
          "hierarchy": "SimpleH GL",
          "module": "SimpleH.GL",
          "name": "V3",
          "package": "SimpleGL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleGL/docs/SimpleH-GL.html#v:V3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "SimpleH.GL",
          "name": "V4",
          "package": "SimpleGL",
          "signature": "V4 !t !t !t !t",
          "source": "src/SimpleH-GL-Base.html#V4",
          "type": "function"
        },
        "index": {
          "hierarchy": "SimpleH GL",
          "module": "SimpleH.GL",
          "name": "V4",
          "package": "SimpleGL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleGL/docs/SimpleH-GL.html#v:V4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "SimpleH.GL",
          "name": "Vertex",
          "package": "SimpleGL",
          "signature": "Vertex [VertexProp t] !t !t !t",
          "source": "src/SimpleH-GL.html#Vertex",
          "type": "function"
        },
        "index": {
          "hierarchy": "SimpleH GL",
          "module": "SimpleH.GL",
          "name": "Vertex",
          "normalized": "Vertex[VertexProp a]a a a",
          "package": "SimpleGL",
          "partial": "Vertex",
          "signature": "Vertex[VertexProp t]t t t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleGL/docs/SimpleH-GL.html#v:Vertex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "SimpleH.GL",
          "name": "Zoom",
          "package": "SimpleGL",
          "signature": "Zoom !t !t !t",
          "source": "src/SimpleH-GL.html#Transform",
          "type": "function"
        },
        "index": {
          "hierarchy": "SimpleH GL",
          "module": "SimpleH.GL",
          "name": "Zoom",
          "package": "SimpleGL",
          "partial": "Zoom",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleGL/docs/SimpleH-GL.html#v:Zoom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "SimpleH.GL",
          "name": "black",
          "package": "SimpleGL",
          "signature": "V4 t",
          "source": "src/SimpleH-GL.html#black",
          "type": "function"
        },
        "index": {
          "hierarchy": "SimpleH GL",
          "module": "SimpleH.GL",
          "name": "black",
          "package": "SimpleGL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleGL/docs/SimpleH-GL.html#v:black"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "SimpleH.GL",
          "name": "blue",
          "package": "SimpleGL",
          "signature": "V4 t",
          "source": "src/SimpleH-GL.html#blue",
          "type": "function"
        },
        "index": {
          "hierarchy": "SimpleH GL",
          "module": "SimpleH.GL",
          "name": "blue",
          "package": "SimpleGL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleGL/docs/SimpleH-GL.html#v:blue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "SimpleH.GL",
          "name": "cvert",
          "package": "SimpleGL",
          "signature": "VertexProp t -\u003e t -\u003e t -\u003e t -\u003e Vertex t",
          "source": "src/SimpleH-GL.html#cvert",
          "type": "function"
        },
        "index": {
          "hierarchy": "SimpleH GL",
          "module": "SimpleH.GL",
          "name": "cvert",
          "normalized": "VertexProp a-\u003ea-\u003ea-\u003ea-\u003eVertex a",
          "package": "SimpleGL",
          "signature": "VertexProp t-\u003et-\u003et-\u003et-\u003eVertex t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleGL/docs/SimpleH-GL.html#v:cvert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "SimpleH.GL",
          "name": "cyan",
          "package": "SimpleGL",
          "signature": "V4 t",
          "source": "src/SimpleH-GL.html#cyan",
          "type": "function"
        },
        "index": {
          "hierarchy": "SimpleH GL",
          "module": "SimpleH.GL",
          "name": "cyan",
          "package": "SimpleGL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleGL/docs/SimpleH-GL.html#v:cyan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "SimpleH.GL",
          "name": "draw",
          "package": "SimpleGL",
          "signature": "g -\u003e IO ()",
          "source": "src/SimpleH-GL-Base.html#draw",
          "type": "method"
        },
        "index": {
          "hierarchy": "SimpleH GL",
          "module": "SimpleH.GL",
          "name": "draw",
          "normalized": "a-\u003eIO()",
          "package": "SimpleGL",
          "signature": "g-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/SimpleGL/docs/SimpleH-GL.html#v:draw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "SimpleH.GL",
          "name": "drawScene",
          "package": "SimpleGL",
          "signature": "Scene Coord -\u003e IO ()",
          "source": "src/SimpleH-GL.html#drawScene",
          "type": "function"
        },
        "index": {
          "hierarchy": "SimpleH GL",
          "module": "SimpleH.GL",
          "name": "drawScene",
          "normalized": "Scene Coord-\u003eIO()",
          "package": "SimpleGL",
          "partial": "Scene",
          "signature": "Scene Coord-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleGL/docs/SimpleH-GL.html#v:drawScene"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "SimpleH.GL",
          "name": "gray",
          "package": "SimpleGL",
          "signature": "t -\u003e V4 t",
          "source": "src/SimpleH-GL.html#gray",
          "type": "function"
        },
        "index": {
          "hierarchy": "SimpleH GL",
          "module": "SimpleH.GL",
          "name": "gray",
          "normalized": "a-\u003eV a",
          "package": "SimpleGL",
          "signature": "t-\u003eV t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleGL/docs/SimpleH-GL.html#v:gray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "SimpleH.GL",
          "name": "green",
          "package": "SimpleGL",
          "signature": "V4 t",
          "source": "src/SimpleH-GL.html#green",
          "type": "function"
        },
        "index": {
          "hierarchy": "SimpleH GL",
          "module": "SimpleH.GL",
          "name": "green",
          "package": "SimpleGL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleGL/docs/SimpleH-GL.html#v:green"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "SimpleH.GL",
          "name": "grey",
          "package": "SimpleGL",
          "signature": "t -\u003e V4 t",
          "source": "src/SimpleH-GL.html#grey",
          "type": "function"
        },
        "index": {
          "hierarchy": "SimpleH GL",
          "module": "SimpleH.GL",
          "name": "grey",
          "normalized": "a-\u003eV a",
          "package": "SimpleGL",
          "signature": "t-\u003eV t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleGL/docs/SimpleH-GL.html#v:grey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "SimpleH.GL",
          "name": "magenta",
          "package": "SimpleGL",
          "signature": "V4 t",
          "source": "src/SimpleH-GL.html#magenta",
          "type": "function"
        },
        "index": {
          "hierarchy": "SimpleH GL",
          "module": "SimpleH.GL",
          "name": "magenta",
          "package": "SimpleGL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleGL/docs/SimpleH-GL.html#v:magenta"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "SimpleH.GL",
          "name": "red",
          "package": "SimpleGL",
          "signature": "V4 t",
          "source": "src/SimpleH-GL.html#red",
          "type": "function"
        },
        "index": {
          "hierarchy": "SimpleH GL",
          "module": "SimpleH.GL",
          "name": "red",
          "package": "SimpleGL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleGL/docs/SimpleH-GL.html#v:red"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an OpenGL window and sinks all events into the given handler. \n\u003c/p\u003e",
          "module": "SimpleH.GL",
          "name": "spawnWindow",
          "package": "SimpleGL",
          "signature": "Title -\u003e EventHandler -\u003e IO ()",
          "source": "src/SimpleH-GL.html#spawnWindow",
          "type": "function"
        },
        "index": {
          "description": "Create an OpenGL window and sinks all events into the given handler",
          "hierarchy": "SimpleH GL",
          "module": "SimpleH.GL",
          "name": "spawnWindow",
          "normalized": "Title-\u003eEventHandler-\u003eIO()",
          "package": "SimpleGL",
          "partial": "Window",
          "signature": "Title-\u003eEventHandler-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleGL/docs/SimpleH-GL.html#v:spawnWindow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "SimpleH.GL",
          "name": "vert",
          "package": "SimpleGL",
          "signature": "t -\u003e t -\u003e t -\u003e Vertex t",
          "source": "src/SimpleH-GL.html#vert",
          "type": "function"
        },
        "index": {
          "hierarchy": "SimpleH GL",
          "module": "SimpleH.GL",
          "name": "vert",
          "normalized": "a-\u003ea-\u003ea-\u003eVertex a",
          "package": "SimpleGL",
          "signature": "t-\u003et-\u003et-\u003eVertex t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleGL/docs/SimpleH-GL.html#v:vert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "SimpleH.GL",
          "name": "white",
          "package": "SimpleGL",
          "signature": "V4 t",
          "source": "src/SimpleH-GL.html#white",
          "type": "function"
        },
        "index": {
          "hierarchy": "SimpleH GL",
          "module": "SimpleH.GL",
          "name": "white",
          "package": "SimpleGL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleGL/docs/SimpleH-GL.html#v:white"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "SimpleH.GL",
          "name": "yellow",
          "package": "SimpleGL",
          "signature": "V4 t",
          "source": "src/SimpleH-GL.html#yellow",
          "type": "function"
        },
        "index": {
          "hierarchy": "SimpleH GL",
          "module": "SimpleH.GL",
          "name": "yellow",
          "package": "SimpleGL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleGL/docs/SimpleH-GL.html#v:yellow"
      }
    }
  ]
]